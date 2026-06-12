import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { webinars, registrations } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import nodemailer from "nodemailer";

const registrationSchema = z.object({
  webinarId: z.number(),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(1, "Company is required"),
  jobTitle: z.string().optional(),
  phone: z.string().min(1, "Phone is required"),
});

// Email transporter (configure via env vars)
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = registrationSchema.parse(body);

    // Check if webinar exists
    const webinarResult = await db
      .select()
      .from(webinars)
      .where(eq(webinars.id, validated.webinarId));

    if (!webinarResult.length) {
      return NextResponse.json(
        { error: "Webinar not found" },
        { status: 404 }
      );
    }

    const webinar = webinarResult[0];

    // Check if already registered
    const existing = await db
      .select()
      .from(registrations)
      .where(
        eq(registrations.webinarId, validated.webinarId) &&
        eq(registrations.email, validated.email)
      );

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "You have already registered for this webinar" },
        { status: 409 }
      );
    }

    // Save registration
    const registration = await db
      .insert(registrations)
      .values({
        webinarId: validated.webinarId,
        name: validated.name,
        email: validated.email,
        company: validated.company,
        jobTitle: validated.jobTitle,
        phone: validated.phone,
      })
      .returning();

    // Send emails if SMTP is configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = createTransporter();

      // Email to admin
      await transporter.sendMail({
        from: `"EasternStack" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL || "sales@easternstack.com",
        subject: `New Registration: ${webinar.title}`,
        html: `
          <h2>New Webinar Registration</h2>
          <p><strong>Event:</strong> ${webinar.title}</p>
          <p><strong>Date:</strong> ${webinar.date}</p>
          <p><strong>Time:</strong> ${webinar.time}</p>
          <hr/>
          <h3>Participant Details</h3>
          <p><strong>Name:</strong> ${validated.name}</p>
          <p><strong>Email:</strong> ${validated.email}</p>
          <p><strong>Company:</strong> ${validated.company}</p>
          <p><strong>Job Title:</strong> ${validated.jobTitle || "N/A"}</p>
          <p><strong>Phone:</strong> ${validated.phone}</p>
        `,
      });

      // Email to participant
      const statusConfig = {
        upcoming: { bg: '#dcfce7', border: '#86efac', text: '#166534', label: 'UPCOMING EVENT' },
        fully_booked: { bg: '#ffedd5', border: '#fdba74', text: '#9a3412', label: 'FULLY BOOKED' },
        past: { bg: '#fee2e2', border: '#fca5a5', text: '#991b1b', label: 'PAST EVENT' }
      };
      const statusStyle = statusConfig[webinar.status as keyof typeof statusConfig] || statusConfig.upcoming;

      await transporter.sendMail({
        from: `"EasternStack" <${process.env.SMTP_USER}>`,
        to: validated.email,
        subject: `Registration Confirmed: ${webinar.title}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
            <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header Gradient -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px 30px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Registration Confirmed!</h1>
                        <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.8); font-size: 16px;">Your spot has been secured</p>
                      </td>
                    </tr>
                    
                    <!-- Status Badge -->
                    <tr>
                      <td style="padding: 24px 30px 0 30px;">
                        <table role="presentation" style="border-collapse: collapse;">
                          <tr>
                            <td style="background-color: ${statusStyle.bg}; padding: 8px 16px; border-radius: 9999px; border: 1px solid ${statusStyle.border};">
                              <span style="color: ${statusStyle.text}; font-size: 12px; font-weight: 700; letter-spacing: 0.5px;">${statusStyle.label}</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Event Title -->
                    <tr>
                      <td style="padding: 16px 30px 24px 30px;">
                        <h2 style="margin: 0; color: #1a1a1a; font-size: 24px; font-weight: 700; line-height: 1.4;">${webinar.title}</h2>
                      </td>
                    </tr>
                    
                    <!-- Event Image -->
                    <tr>
                      <td style="padding: 0 30px 24px 30px;">
                        <div style="border-radius: 16px; overflow: hidden; box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);">
                          ${webinar.imageUrl ? `
                            <img src="${webinar.imageUrl}" alt="${webinar.title}" style="width: 100%; height: auto; display: block;">
                          ` : `
                            <div style="background: linear-gradient(135deg, rgba(227, 30, 36, 0.1) 0%, rgba(196, 24, 30, 0.1) 100%); padding: 60px 20px; text-align: center;">
                              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 0 auto; opacity: 0.3;">
                                <path d="M15 10L19.553 7.724A1 1 0 0121 8.618V15.382A1 1 0 0119.553 16.276L15 14M5 18H13A2 2 0 0015 16V8A2 2 0 0013 6H5A2 2 0 003 8V16A2 2 0 005 18Z" stroke="#E31E24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </div>
                          `}
                        </div>
                      </td>
                    </tr>
                    
                    <!-- Event Details -->
                    <tr>
                      <td style="padding: 0 30px 30px 30px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          
                          <!-- Date -->
                          <tr>
                            <td style="padding: 16px 0; border-top: 1px solid #f0f0f0;">
                              <table role="presentation" style="border-collapse: collapse;">
                                <tr>
                                  <td style="width: 56px; padding-right: 16px;">
                                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #E31E24 0%, #C4181E 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 7V3M16 7V3M5 21H19A2 2 0 0021 19V7A2 2 0 0019 5H5A2 2 0 003 7V19A2 2 0 005 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                    </div>
                                  </td>
                                  <td>
                                    <p style="margin: 0 0 4px 0; color: #666666; font-size: 13px;">Date</p>
                                    <p style="margin: 0; color: #1a1a1a; font-size: 16px; font-weight: 600;">${webinar.date}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <!-- Time -->
                          <tr>
                            <td style="padding: 16px 0;">
                              <table role="presentation" style="border-collapse: collapse;">
                                <tr>
                                  <td style="width: 56px; padding-right: 16px;">
                                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #E31E24 0%, #C4181E 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 8V12L15 15M21 12C21 17.523 16.523 22 12 22C7.477 22 3 17.523 3 12C3 7.477 7.477 3 12 3C16.523 3 21 7.477 21 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                    </div>
                                  </td>
                                  <td>
                                    <p style="margin: 0 0 4px 0; color: #666666; font-size: 13px;">Time</p>
                                    <p style="margin: 0; color: #1a1a1a; font-size: 16px; font-weight: 600;">${webinar.time}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <!-- Location -->
                          <tr>
                            <td style="padding: 16px 0;">
                              <table role="presentation" style="border-collapse: collapse;">
                                <tr>
                                  <td style="width: 56px; padding-right: 16px;">
                                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #E31E24 0%, #C4181E 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.657 16.657L13.414 20.9A1.998 1.998 0 0110.586 20.9L6.343 16.657A8 8 0 1117.657 16.657z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15 11A3 3 0 1112 8 3 3 0 0115 11z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                    </div>
                                  </td>
                                  <td>
                                    <p style="margin: 0 0 4px 0; color: #666666; font-size: 13px;">Location</p>
                                    <p style="margin: 0; color: #1a1a1a; font-size: 16px; font-weight: 600;">${webinar.location}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <!-- Partner -->
                          <tr>
                            <td style="padding: 16px 0; border-bottom: 1px solid #f0f0f0;">
                              <table role="presentation" style="border-collapse: collapse;">
                                <tr>
                                  <td style="width: 56px; padding-right: 16px;">
                                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #E31E24 0%, #C4181E 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 20H7V18C7 16.895 7.895 16 9 16H15C16.105 16 17 16.895 17 18V20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15 16V14C15 12.895 14.105 12 13 12H11C9.895 12 9 12.895 9 14V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 8C13.657 8 15 6.657 15 5C15 3.343 13.657 2 12 2C10.343 2 9 3.343 9 5C9 6.657 10.343 8 12 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                    </div>
                                  </td>
                                  <td>
                                    <p style="margin: 0 0 4px 0; color: #666666; font-size: 13px;">Partner</p>
                                    <p style="margin: 0; color: #1a1a1a; font-size: 16px; font-weight: 600;">${webinar.partner}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Additional Info -->
                    <tr>
                      <td style="padding: 0 30px 30px 30px;">
                        <p style="margin: 0 0 16px 0; color: #555555; font-size: 15px; line-height: 1.6;">
                          We'll send you the event details closer to the event date. If you have any questions, feel free to reach out to us.
                        </p>
                        <p style="margin: 0; color: #555555; font-size: 15px; line-height: 1.6;">
                          Best regards,<br>
                          <strong style="color: #1a1a1a;">EasternStack Team</strong>
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f9f9f9; padding: 24px 30px; border-top: 1px solid #e0e0e0;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="text-align: center;">
                              <p style="margin: 0 0 8px 0; color: #999999; font-size: 12px;">
                                <strong>PT. INOVASI KONVERSASI DIGITAL</strong>
                              </p>
                              <p style="margin: 0 0 8px 0; color: #999999; font-size: 12px; line-height: 1.5;">
                                Menara Caraka, 3rd Floor<br>
                                Jl. Dr. Ide Anak Agung Gde Agung<br>
                                Lot E4-7 No. 1, Kuningan Timur<br>
                                Jakarta 12950, Indonesia
                              </p>
                              <p style="margin: 0; color: #999999; font-size: 12px;">
                                <a href="https://www.easternstack.com" style="color: #E31E24; text-decoration: none;">www.easternstack.com</a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
      });
    } else {
      console.log("SMTP not configured - emails skipped. Registration saved.");
      console.log("Registration:", registration[0]);
    }

    return NextResponse.json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.issues.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message;
        }
      });
      return NextResponse.json({ errors }, { status: 400 });
    }

    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Failed to register. Please try again." },
      { status: 500 }
    );
  }
}
