import type { Metadata } from "next";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "Cloud Cost Optimization & FinOps | EasternStack",
  description:
    "Meaningfully reduce cloud spending with intelligent FinOps: resource rightsizing, reserved instance planning, storage tiering, and idle resource detection.",
  alternates: { canonical: "/technology/cost-optimization" },
  openGraph: {
    title: "Cloud Cost Optimization & FinOps | EasternStack",
    description:
      "Maximize ROI with automated cloud cost optimization: meaningful cost reduction, complete spend visibility, and 24/7 continuous optimization.",
    url: "https://easternstack.ai/technology/cost-optimization",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — Cloud Cost Optimization & FinOps",
      },
    ],
  },
};

const BENEFITS = [
  {
    label: "Lower spend",
    title: "Cost Reduction",
    body: "Meaningful savings achieved through intelligent resource optimization and rightsizing.",
  },
  {
    label: "Complete",
    title: "Cost Visibility",
    body: "Complete transparency across all cloud spending with detailed breakdowns and alerts.",
  },
  {
    label: "24/7",
    title: "Continuous Optimization",
    body: "Automated cost optimization running around the clock to maximize savings.",
  },
];

const STRATEGIES = [
  {
    title: "Resource Rightsizing",
    body: "Automatically match instance sizes to actual workload requirements to eliminate over-provisioning.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    bullets: ["Usage pattern analysis", "Automated recommendations", "Zero-downtime resizing"],
  },
  {
    title: "Reserved Instance Planning",
    body: "Optimize commitment strategies with data-driven reserved instance purchases.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bullets: ["Usage forecasting", "ROI analysis", "Portfolio optimization"],
  },
  {
    title: "Storage Optimization",
    body: "Reduce storage costs with intelligent tiering and lifecycle policies.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    bullets: ["Automated tiering", "Data lifecycle management", "Deduplication"],
  },
  {
    title: "Idle Resource Detection",
    body: "Identify and eliminate unused resources to stop paying for what you do not use.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bullets: ["Automated scanning", "Smart alerts", "Auto-termination"],
  },
];

export default function CostOptimizationPage() {
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
              Technology · Cost Optimization
            </p>
            <h1 className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Maximize ROI with{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">cloud cost optimization</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Meaningfully reduce cloud spending with intelligent FinOps practices and automated cost optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Benefits</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Cost optimization benefits
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {BENEFITS.map((item) => (
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

      {/* Strategies */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Strategies</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Optimization strategies
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {STRATEGIES.map((s) => (
              <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                  {s.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#1A1A1A]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.body}</p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
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
