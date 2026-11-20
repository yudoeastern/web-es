import Link from "next/link";
import type { Metadata } from "next";
import ChurnPredictionFlow from "@/components/industries/ChurnPredictionFlow";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "AI Churn Prediction Solutions | EasternStack",
  description:
    "AI-powered churn prediction that identifies at-risk customers before they leave, with high-accuracy predictions, explainable risk scores, and retention playbooks.",
  alternates: { canonical: "/solutions/churn-prediction" },
  openGraph: {
    title: "AI Churn Prediction Solutions | EasternStack",
    description:
      "AI-powered churn prediction that identifies at-risk customers before they leave, with high-accuracy predictions, explainable risk scores, and retention playbooks.",
    url: "https://easternstack.ai/solutions/churn-prediction",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — AI Churn Prediction Solutions",
      },
    ],
  },
};

const STEPS = [
  {
    title: "Data Integration",
    body: "Connect your CRM, transaction logs, support tickets, and engagement data.",
  },
  {
    title: "Pattern Analysis",
    body: "ML models identify behavioral patterns that precede customer departure.",
  },
  {
    title: "Risk Scoring",
    body: "Each customer receives a churn risk score with explainable factors.",
  },
  {
    title: "Actionable Insights",
    body: "Get recommended retention actions tailored to each customer segment.",
  },
];

const FEATURES = [
  {
    title: "Predictive Analytics",
    body: "Advanced ML models that predict churn probability with high accuracy based on historical patterns.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Customer Segmentation",
    body: "Automatically segment customers by churn risk level for targeted retention campaigns.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Early Warning Alerts",
    body: "Real-time notifications when high-value customers show churn signals.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Explainable AI",
    body: "Understand why each customer is flagged with interpretable risk factors.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Retention Playbooks",
    body: "Recommended actions and campaigns for each risk segment.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "ROI Tracking",
    body: "Measure retention campaign effectiveness and revenue saved.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const USE_CASES = [
  {
    title: "Telecommunications",
    body: "Predict subscriber churn based on usage patterns, complaints, and payment history.",
  },
  {
    title: "SaaS & Subscription",
    body: "Identify at-risk subscribers before cancellation with engagement and feature usage data.",
  },
  {
    title: "Banking & Finance",
    body: "Detect customers likely to close accounts or switch to competitors.",
  },
  {
    title: "E-commerce & Retail",
    body: "Re-engage dormant customers before they switch to competitors.",
  },
  {
    title: "Streaming & Media",
    body: "Reduce subscription cancellations with personalized content recommendations.",
  },
  {
    title: "Fitness & Wellness",
    body: "Prevent membership cancellations with targeted engagement campaigns.",
  },
];

const OUTCOMES = [
  { stat: "5x", label: "cheaper to retain a customer than acquire a new one" },
  { stat: "High accuracy", label: "churn predictions, each with explainable risk factors" },
  { stat: "Less churn", label: "proactive retention instead of reacting after the cancel" },
];

export default function ChurnPredictionPage() {
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
              Solution · Churn Prediction
            </p>
            <h1
              className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              Predict and prevent{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                customer churn
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              AI-powered churn prediction that identifies at-risk customers before they leave,
              enabling proactive retention strategies that drive loyalty and revenue.
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
              Behavioral signals · Explainable risk scores · Retention playbooks
            </p>
          </div>
        </div>
      </section>

      {/* Animated retention loop */}
      <section className="bg-[#0A0A0C] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E31E24]">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              A retention loop that runs ahead of churn
            </h2>
            <p className="mt-4 text-zinc-400">
              Signals arrive from your CRM, transaction logs, support tickets, and engagement data.
              Agents score who is drifting, explain why, and run the win-back — and every outcome
              feeds the next score.
            </p>
          </div>
          <div className="mt-12">
            <ChurnPredictionFlow />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, idx) => (
              <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-[13px] font-bold text-white">
                  {idx + 1}
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="border-b border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Key features
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              What the platform gives your retention team
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#E31E24]/40 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-[#1A1A1A]">{f.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Use cases
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Where churn prediction pays back
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((u) => (
              <div key={u.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-[15px] font-bold text-[#1A1A1A]">{u.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters + outcomes */}
      <section className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Why it matters
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Why churn prediction matters
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Acquiring a new customer costs{" "}
              <strong className="text-[#E31E24]">5-25x more</strong> than retaining an existing one.
              Yet most businesses only react to churn after it happens, when it is already too late.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              EasternStack Churn Prediction uses machine learning to analyze customer behavior
              patterns, transaction history, and engagement signals to identify who is likely to
              leave weeks or even months in advance.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {OUTCOMES.map((o) => (
              <div key={o.label} className="rounded-xl border border-gray-200 bg-white p-7 text-center">
                <p className="text-3xl font-extrabold text-[#E31E24]">{o.stat}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WeastCta tourHref="/#demo-ide" />
    </div>
  );
}
