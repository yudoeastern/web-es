import Link from "next/link";
import type { Metadata } from "next";
import ChurnPredictionFlow from "@/components/industries/ChurnPredictionFlow";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "AI for Retail & E-Commerce: Agentic Churn Prediction | EasternStack",
  description:
    "Agentic churn prediction for Indonesia's retail: signals, risk scores, and win-back plays on one WEAST platform, with forecasting and inventory agents behind the scenes.",
  alternates: { canonical: "/industries/retail-ecommerce" },
  openGraph: {
    title: "AI for Retail & E-Commerce: Agentic Churn Prediction | EasternStack",
    description:
      "Catch churn before it happens: signals, risk scores, and win-back plays on one governed WEAST platform, with forecasting and inventory agents behind the scenes.",
    url: "https://easternstack.ai/industries/retail-ecommerce",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack, AI for Retail & E-Commerce",
      },
    ],
  },
};

const USE_CASES = [
  {
    title: "Churn Prediction & Retention",
    body: "Agents score who is drifting, explain why, and run win-back plays your team approves, before the customer says goodbye.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
  },
  {
    title: "Demand Forecasting",
    body: "Agents forecast demand per SKU and season, so purchasing plans arrive before the spike, not after it.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Smart Inventory",
    body: "Automatic reorder points and cross-warehouse balancing that prevent stockouts and overstock.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Support & Returns",
    body: "24/7 handling of order status, returns, and exchanges in Bahasa Indonesia, with order context attached.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: "Visual Search",
    body: "Customers search with photos; the agent matches style, suggests alternatives, and continues the chat.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const LOCAL = [
  {
    title: "WhatsApp-first commerce",
    body: "Conversational selling where your customers already are, with handoffs to humans when it matters.",
  },
  {
    title: "Bahasa & slang NLP",
    body: "Language understanding for Indonesian patterns, slang, and regional dialects, not translated templates.",
  },
  {
    title: "Channel-ready architecture",
    body: "The same shared-memory agent architecture extends to more channels as your team turns them on.",
  },
  {
    title: "Seasonal scale",
    body: "Built to stay calm through Ramadan and harbolnas spikes, with agents absorbing the surge.",
  },
  {
    title: "Sovereign & secure",
    body: "Customer data stays in your environment, with tenant boundaries and audit trails per workspace.",
  },
];

const OUTCOMES = [
  { stat: "Earlier warnings", label: "risk scores arrive while there is still time to act" },
  { stat: "Every score explained", label: "reasons your team can act on, not a black box" },
  { stat: "One platform", label: "churn, forecasting, and inventory agents under one governed WEAST" },
];

export default function RetailEcommercePage() {
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
              Industry · Retail & E-Commerce
            </p>
            <h1
              className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              Catch churn{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                before it happens
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Agentic churn prediction for retail and e-commerce: signals, risk scores, and
              win-back plays on one WEAST platform, with forecasting and inventory agents
              behind the scenes.
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
              Signals to win-back · Human-approved plays · Data sovereignty
            </p>
          </div>
        </div>
      </section>

      {/* Animated omnichannel flow */}
      <section className="bg-[#0A0A0C] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E31E24]">
              Agentic churn prediction
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              A loop that catches drift early
            </h2>
            <p className="mt-4 text-zinc-400">
              Signals stream in from usage, support, and payments. The risk agent scores who
              is drifting, the insight agent explains why, and the outreach agent runs the
              win-back, all grounded in customer memory.
            </p>
          </div>
          <div className="mt-12">
            <ChurnPredictionFlow />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Use cases
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              What retail teams run on WEAST
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {USE_CASES.map((u) => (
              <div
                key={u.title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#E31E24]/40 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                  {u.icon}
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-[#1A1A1A]">{u.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Local by design
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Built for how Indonesia shops
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {LOCAL.map((i) => (
              <div key={i.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-[15px] font-bold text-[#1A1A1A]">{i.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Outcomes
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              What changes for your brand
            </h2>
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
