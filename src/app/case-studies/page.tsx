import Link from "next/link";
import type { Metadata } from "next";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "AI Case Studies | EasternStack",
  description:
    "Real-world results from Indonesian enterprises that transformed operations with EasternStack AI — loan processing, fraud detection, document intelligence, and more.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "AI Case Studies | EasternStack",
    description:
      "Success stories from enterprises running AI in production with EasternStack — measurable results across financial services, insurance, and beyond.",
    url: "https://easternstack.ai/case-studies",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — AI Case Studies",
      },
    ],
  },
};

const CASE_STUDIES = [
  {
    sector: "Financial Services",
    company: "Leading Indonesian Bank",
    description:
      "Implemented AI-powered loan processing and fraud detection to reduce approval time from 5 days to 15 minutes.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    stats: [
      { stat: "Substantially", label: "Faster Processing" },
      { stat: "Stronger", label: "Fraud Prevention" },
    ],
  },
  {
    sector: "Retail & E-commerce",
    company: "Major E-commerce Platform",
    description:
      "Deployed AI customer service agents and personalized recommendations to boost conversion and satisfaction.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    stats: [
      { stat: "Higher", label: "Conversion" },
      { stat: "Majority", label: "Support Automated" },
    ],
  },
  {
    sector: "Healthcare",
    company: "National Hospital Network",
    description:
      "Implemented AI document processing for medical records and appointment scheduling automation.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    stats: [
      { stat: "Major", label: "Time Savings" },
      { stat: "High accuracy", label: "Medical Data" },
    ],
  },
  {
    sector: "Manufacturing",
    company: "Global Manufacturing Co.",
    description:
      "Deployed predictive maintenance and quality control AI to minimize downtime and defects.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    stats: [
      { stat: "Less", label: "Downtime" },
      { stat: "Fewer", label: "Defects" },
    ],
  },
  {
    sector: "Telecommunications",
    company: "Major Telco Provider",
    description:
      "Implemented AI network optimization and customer churn prediction to improve service and retention.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    stats: [
      { stat: "Lower", label: "Churn" },
      { stat: "Better", label: "Network Efficiency" },
    ],
  },
  {
    sector: "Logistics",
    company: "Regional Logistics Leader",
    description:
      "Deployed AI route optimization and demand forecasting to reduce costs and improve delivery times.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    stats: [
      { stat: "Lower", label: "Costs" },
      { stat: "Faster", label: "Delivery" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <img
              src="/weast/weast-logo-black.png"
              alt="WEAST by EasternStack.AI"
              className="mx-auto h-10 w-auto md:h-12"
            />
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              Case Studies
            </p>
            <h1
              className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              Success{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                stories
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Real-world results from enterprises that transformed their operations with
              EasternStack AI solutions.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#E31E24] to-[#C4181E] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              >
                Request a Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/#demo-ide"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-transparent px-6 py-3 text-sm font-semibold text-[#1A1A1A] hover:border-[#E31E24] hover:text-[#E31E24] transition-all"
              >
                Try the Live Product Tour
              </Link>
            </div>
            <p className="mt-5 text-[13px] text-gray-500">
              Loan processing · Fraud detection · Document intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Featured case studies */}
      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Featured
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Featured case studies
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.company}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#E31E24]/40 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                  {cs.icon}
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#E31E24]">
                  {cs.sector}
                </p>
                <h3 className="mt-1 text-[15px] font-bold text-[#1A1A1A]">{cs.company}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">
                  {cs.description}
                </p>
                <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
                  {cs.stats.map((s) => (
                    <div key={s.label} className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                      <p className="text-lg font-extrabold leading-tight text-[#E31E24]">
                        {s.stat}
                      </p>
                      <p className="mt-1 text-[11px] leading-snug text-gray-600">{s.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-[13px] font-semibold text-[#E31E24] hover:underline"
                >
                  Read Case Study
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WeastCta tourHref="/#demo-ide" />
    </div>
  );
}
