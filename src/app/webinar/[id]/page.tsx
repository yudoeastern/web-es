import { db } from "@/db";
import { webinars, registrations } from "@/db/schema";
import { eq, count } from "drizzle-orm";
import { notFound } from "next/navigation";
import Link from "next/link";
import RegisterForm from "./RegisterForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function WebinarDetailPage({ params }: PageProps) {
  const { id } = await params;
  const webinarId = parseInt(id);

  const result = await db.select().from(webinars).where(eq(webinars.id, webinarId));

  if (!result.length) {
    notFound();
  }

  const webinar = result[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <Link href="/webinar" className="inline-flex items-center text-text-secondary hover:text-primary-orange transition mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Events
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Info */}
            <div>
              {webinar.status === "upcoming" ? (
                <div className="inline-block mb-4 px-4 py-1.5 bg-green-100 border border-green-200 rounded-full">
                  <span className="text-green-700 text-sm font-semibold">UPCOMING EVENT</span>
                </div>
              ) : (
                <div className="inline-block mb-4 px-4 py-1.5 bg-[#E31E24]/10 border border-[#E31E24]/20 rounded-full">
                  <span className="text-[#E31E24] text-sm font-semibold">PAST EVENT</span>
                </div>
              )}

              <h1 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">
                {webinar.title}
              </h1>

              <p className="text-lg text-text-secondary mb-8">
                {webinar.description}
              </p>

              {/* Event Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-text-dark">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Date</p>
                    <p className="font-semibold">{webinar.date}</p>
                  </div>
                </div>

                <div className="flex items-center text-text-dark">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Time</p>
                    <p className="font-semibold">{webinar.time}</p>
                  </div>
                </div>

                <div className="flex items-center text-text-dark">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Location</p>
                    <p className="font-semibold">{webinar.location}</p>
                  </div>
                </div>

                <div className="flex items-center text-text-dark">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Partner</p>
                    <p className="font-semibold">{webinar.partner}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {webinar.imageUrl ? (
                <img
                  src={webinar.imageUrl}
                  alt={webinar.title}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="w-full h-80 flex items-center justify-center bg-gradient-to-br from-[#E31E24]/10 to-[#C4181E]/10">
                  <svg className="w-24 h-24 text-[#E31E24]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form (only for upcoming events) */}
      {webinar.status === "upcoming" && (
        <section className="section-padding bg-bg-light-light">
          <div className="container-custom max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
                Register for this Event
              </h2>
              <p className="text-text-secondary">
                Fill in your details to secure your spot. We&apos;ll send you a confirmation email with the event details.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <RegisterForm webinarId={webinar.id} webinarTitle={webinar.title} />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            DISCOVER MORE AI SOLUTIONS
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Explore our full range of enterprise AI solutions and find the right fit for your business.
          </p>
          <Link href="/solutions/ai" className="btn-primary bg-white text-[#E31E24] hover:bg-gray-100">
            Explore Solutions
          </Link>
        </div>
      </section>
    </div>
  );
}
