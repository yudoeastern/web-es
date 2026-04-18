import Link from "next/link";

export default function WebinarPage() {
  const webinars = [
    {
      status: "upcoming",
      title: "AI for Innovation - Navigating the AI Technology Landscape",
      date: "January 25, 2026",
      time: "14:00 - 15:30 WIB",
      location: "Online via Zoom",
      partner: "Alibaba Cloud",
      description: "Discover how to leverage AI technology for business innovation and stay competitive in the digital era.",
      image: "🚀",
    },
    {
      status: "upcoming",
      title: "Visualize AI Workflows and Multi-Agent for Clarity & Collaboration",
      date: "February 8, 2026",
      time: "14:00 - 15:30 WIB",
      location: "Online via Zoom",
      partner: "BytePlus",
      description: "Learn how to design and visualize complex AI workflows with multi-agent orchestration.",
      image: "🔄",
    },
    {
      status: "upcoming",
      title: "From Calls to Insight: Driving Growth with MiiTel & EasternStack",
      date: "February 20, 2026",
      time: "14:00 - 15:30 WIB",
      location: "Online via Zoom",
      partner: "MiiTel",
      description: "Transform customer calls into actionable insights with AI-powered conversation intelligence.",
      image: "📊",
    },
    {
      status: "past",
      title: "AI Assisted Cross-Domain Root Cause Analysis",
      date: "December 25, 2025",
      time: "14:00 - 15:30 WIB",
      location: "Online via Zoom",
      partner: "TrueWatch",
      description: "Accelerate incident resolution with AI-powered cross-domain root cause analysis.",
      image: "🔍",
    },
    {
      status: "past",
      title: "Improve Your Business Continuity with OnePro HyperBDR",
      date: "December 19, 2025",
      time: "14:00 - 15:30 WIB",
      location: "Online via Zoom",
      partner: "OnePro",
      description: "Strengthen your business continuity strategy with advanced disaster recovery solutions.",
      image: "🛡️",
    },
    {
      status: "past",
      title: "Enterprise Agentic AI: From Strategy to Implementation",
      date: "December 10, 2025",
      time: "14:00 - 15:30 WIB",
      location: "Online via Zoom",
      partner: "EasternStack",
      description: "Learn how to plan and implement enterprise-grade Agentic AI solutions.",
      image: "🎯",
    },
    {
      status: "past",
      title: "Intelligent Document Processing for Financial Services",
      date: "November 28, 2025",
      time: "14:00 - 15:30 WIB",
      location: "Online via Zoom",
      partner: "EasternStack",
      description: "Automate document processing workflows in banking and financial institutions.",
      image: "📄",
    },
    {
      status: "past",
      title: "Building Secure AI Systems for Enterprise",
      date: "November 15, 2025",
      time: "14:00 - 15:30 WIB",
      location: "Online via Zoom",
      partner: "EasternStack",
      description: "Best practices for building secure, compliant AI systems for enterprise environments.",
      image: "🔒",
    },
    {
      status: "past",
      title: "AI Copilots for HR: Transforming Talent Management",
      date: "November 5, 2025",
      time: "14:00 - 15:30 WIB",
      location: "Online via Zoom",
      partner: "EasternStack",
      description: "Discover how AI copilots are revolutionizing HR operations and talent management.",
      image: "👥",
    },
  ];

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

      {/* Live Status Section */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="card text-center py-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
              <span className="text-text-secondary font-semibold">LIVE STATUS</span>
            </div>
            <p className="text-text-secondary text-lg">
              WE'RE OFF-AIR FOR NOW. NEW SESSION COMING SOON!
            </p>
          </div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="section-padding bg-bg-light-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            UPCOMING & PAST EVENTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="card group">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    webinar.status === "upcoming"
                      ? "bg-primary-orange/20 text-primary-orange"
                      : "bg-bg-light-card text-text-secondary border border-border-color"
                  }`}>
                    {webinar.status === "upcoming" ? "UPCOMING" : "PAST EVENT"}
                  </span>
                  <div className="text-2xl">{webinar.image}</div>
                </div>

                {/* Partner */}
                <div className="text-sm text-text-secondary mb-3">{webinar.partner}</div>

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
                {webinar.status === "upcoming" ? (
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Register Now
                  </Link>
                ) : (
                  <Link href="#" className="text-primary-orange hover:text-primary-orange font-semibold transition-colors flex items-center">
                    See More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">
            DON'T MISS OUR NEXT EVENTS & WEBINARS!
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Register now to stay updated with the latest AI insights and industry trends.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}
