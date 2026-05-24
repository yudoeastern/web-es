import Link from "next/link";
import { db } from "@/db";
import { webinars } from "@/db/schema";
import { desc, count } from "drizzle-orm";

const ITEMS_PER_PAGE = 6;

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function WebinarPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1");
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const allWebinars = await db
    .select()
    .from(webinars)
    .orderBy(desc(webinars.createdAt))
    .limit(ITEMS_PER_PAGE)
    .offset(offset);

  const totalResult = await db.select({ count: count() }).from(webinars);
  const total = totalResult[0].count;
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-bg-light-card border border-border-color rounded-full">
            <span className="text-primary-orange text-sm font-semibold">
              Events & Webinars
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
            EVENTS &{" "}
            <span className="gradient-text">WEBINARS</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Stay updated with upcoming events, webinars, and workshops from EasternStack.
            Learn from industry experts and discover the latest in AI technology.
          </p>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="section-padding bg-bg-light-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            UPCOMING & PAST EVENTS
          </h2>

          {allWebinars.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">No webinars available yet. Check back soon!</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allWebinars.map((webinar) => (
                  <div key={webinar.id} className="card group overflow-hidden p-0">
                    {/* Event Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      {webinar.imageUrl ? (
                        <img
                          src={webinar.imageUrl}
                          alt={webinar.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#E31E24]/10 to-[#C4181E]/10">
                          <svg className="w-16 h-16 text-[#E31E24]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Partner Logo */}
                      <div className="mb-4 h-10 flex items-center">
                        <span className="text-sm font-medium text-gray-600">Partner: {webinar.partner}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-text-dark mb-4 line-clamp-2">
                        {webinar.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                        {webinar.description}
                      </p>

                      {/* Metadata */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-text-secondary text-sm">
                          <svg className="w-4 h-4 text-primary-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {webinar.date}
                        </div>
                        <div className="flex items-center text-text-secondary text-sm">
                          <svg className="w-4 h-4 text-primary-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {webinar.time}
                        </div>
                        <div className="flex items-center text-text-secondary text-sm">
                          <svg className="w-4 h-4 text-primary-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          {webinar.location}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link
                        href={`/webinar/${webinar.id}`}
                        className={
                          webinar.status === "upcoming"
                            ? "btn-primary w-full text-center block"
                            : "text-primary-orange hover:text-primary-orange font-semibold transition-colors flex items-center"
                        }
                      >
                        {webinar.status === "upcoming" ? "Register Now" : "See More"}
                        {webinar.status === "past" && (
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        )}
                      </Link>

                      {/* Past Event Badge */}
                      {webinar.status === "past" && (
                        <div className="mt-4">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#E31E24]/10 text-[#E31E24] border border-[#E31E24]/20">
                            PAST EVENT
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  {currentPage > 1 && (
                    <Link
                      href={`/webinar?page=${currentPage - 1}`}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                    >
                      ← Previous
                    </Link>
                  )}

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Link
                      key={page}
                      href={`/webinar?page=${page}`}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        page === currentPage
                          ? "bg-[#E31E24] text-white"
                          : "border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </Link>
                  ))}

                  {currentPage < totalPages && (
                    <Link
                      href={`/webinar?page=${currentPage + 1}`}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                    >
                      Next →
                    </Link>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            DON&apos;T MISS OUR NEXT EVENTS & WEBINARS!
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Register now to stay updated with the latest AI insights and industry trends.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-gray-100">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
