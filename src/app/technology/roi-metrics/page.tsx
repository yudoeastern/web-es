import type { Metadata } from "next";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "AI ROI Metrics — Measure Your AI Investment Returns | EasternStack",
  description:
    "Track and optimize AI ROI with metrics and dashboards that measure payback period, cost reduction, and productivity gains as tracked outcomes.",
  alternates: { canonical: "/technology/roi-metrics" },
  openGraph: {
    title: "AI ROI Metrics — Measure Your AI Investment Returns | EasternStack",
    description:
      "Measure AI investment returns across cost savings, revenue growth, customer impact, and operational efficiency.",
    url: "https://easternstack.ai/technology/roi-metrics",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — AI ROI Metrics & Dashboards",
      },
    ],
  },
};

const KEY_METRICS = [
  {
    label: "Clear",
    title: "Payback Period",
    body: "Return on AI investment tracked per initiative.",
  },
  {
    label: "Lower costs",
    title: "Cost Reduction",
    body: "Operational cost savings measured through AI-powered automation.",
  },
  {
    label: "Higher output",
    title: "Productivity Gain",
    body: "Employee productivity improvement with AI assistance and automation.",
  },
  {
    label: "Fewer errors",
    title: "Accuracy Improvement",
    body: "Reduction in errors and improvement in decision quality with AI.",
  },
];

const ROI_CATEGORIES = [
  {
    title: "Cost Savings",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bullets: [
      "Labor cost reduction through automation",
      "Infrastructure cost optimization",
      "Error reduction and rework elimination",
      "Vendor consolidation savings",
    ],
  },
  {
    title: "Revenue Growth",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    bullets: [
      "Increased sales conversion rates",
      "Higher customer lifetime value",
      "New revenue streams from AI products",
      "Faster time-to-market",
    ],
  },
  {
    title: "Customer Impact",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    bullets: [
      "Improved customer satisfaction (CSAT)",
      "Higher Net Promoter Score (NPS)",
      "Reduced customer churn",
      "Faster response times",
    ],
  },
  {
    title: "Operational Efficiency",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    bullets: [
      "Process cycle time reduction",
      "Throughput increase",
      "Resource utilization optimization",
      "Quality improvement metrics",
    ],
  },
];

export default function RoiMetricsPage() {
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
            <img src="/logo.png" alt="EasternStack.AI" className="mx-auto h-12 w-auto md:h-14" />
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              Technology · ROI Metrics
            </p>
            <h1 className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Measure your{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">AI investment returns</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Track and optimize AI ROI with comprehensive metrics, dashboards, and business intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Key metrics */}
      <section className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Metrics</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Key AI ROI metrics
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {KEY_METRICS.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 text-center">
                <p className="text-4xl font-extrabold bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                  {item.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[#1A1A1A]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI categories */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Categories</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              ROI categories
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ROI_CATEGORIES.map((cat) => (
              <div key={cat.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                  {cat.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#1A1A1A]">{cat.title}</h3>
                <ul className="mt-4 space-y-2">
                  {cat.bullets.map((b) => (
                    <li key={b} className="flex items-start text-sm text-gray-600">
                      <svg className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WeastCta tourHref="/#demo-ide" brand="our platform" />
    </div>
  );
}
