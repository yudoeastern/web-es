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
      await transporter.sendMail({
        from: `"EasternStack" <${process.env.SMTP_USER}>`,
        to: validated.email,
        subject: `Registration Confirmed: ${webinar.title}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #E31E24, #C4181E); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Registration Confirmed!</h1>
            </div>
            <div style="background: white; padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 12px 12px;">
              <p style="font-size: 16px; color: #333;">Hi ${validated.name},</p>
              <p style="color: #555;">Thank you for registering! Your spot has been confirmed for:</p>
              
              <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="margin: 0 0 15px 0; color: #1a1a1a; font-size: 20px;">${webinar.title}</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; width: 80px;"><strong>Date:</strong></td>
                    <td style="padding: 8px 0; color: #333;">${webinar.date}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Time:</strong></td>
                    <td style="padding: 8px 0; color: #333;">${webinar.time}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Location:</strong></td>
                    <td style="padding: 8px 0; color: #333;">${webinar.location}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Partner:</strong></td>
                    <td style="padding: 8px 0; color: #333;">${webinar.partner}</td>
                  </tr>
                </table>
              </div>

              <p style="color: #555;">We&apos;ll send you the Zoom link closer to the event date. If you have any questions, feel free to reach out to us at <a href="mailto:sales@easternstack.com" style="color: #E31E24;">sales@easternstack.com</a>.</p>
              
              <p style="color: #555; margin-top: 30px;">Best regards,<br/><strong>EasternStack Team</strong></p>
              
              <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;"/>
              <p style="font-size: 12px; color: #999;">
                PT. INOVASI KONVERSASI DIGITAL<br/>
                Menara Caraka, 3rd Floor, Jakarta 12950<br/>
                <a href="https://www.easternstack.com" style="color: #E31E24; text-decoration: none;">www.easternstack.com</a>
              </p>
            </div>
          </div>
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
