import Link from "next/link";
import type { Metadata } from "next";
import FraudAgentFlow from "@/components/industries/FraudAgentFlow";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "Agentic Fraud Detection AI Solutions | EasternStack",
  description:
    "Autonomous AI agents that detect, investigate, and prevent fraud in real time with reliable detection, low-latency response, and far fewer false positives.",
  alternates: { canonical: "/solutions/fraud-detection" },
  openGraph: {
    title: "Agentic Fraud Detection AI Solutions | EasternStack",
    description:
      "Autonomous AI agents that detect, investigate, and prevent fraud in real time with reliable detection, low-latency response, and far fewer false positives.",
    url: "https://easternstack.ai/solutions/fraud-detection",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — Agentic Fraud Detection AI Solutions",
      },
    ],
  },
};

const AGENTS = [
  {
    title: "Detection Agent",
    body: "Continuously monitors transactions, logins, and user behavior for anomalies. Uses ML models trained on millions of fraud patterns.",
    items: [
      "Real-time transaction scoring",
      "Behavioral biometrics analysis",
      "Device fingerprinting",
      "Network analysis",
    ],
  },
  {
    title: "Investigation Agent",
    body: "When suspicious activity is detected, this agent autonomously investigates by correlating data across systems, checking historical patterns, and gathering evidence.",
    items: [
      "Cross-reference user history",
      "Check IP geolocation consistency",
      "Analyze transaction velocity",
      "Verify identity signals",
    ],
  },
  {
    title: "Action Agent",
    body: "Based on investigation findings, takes appropriate action automatically, from blocking transactions to escalating to human investigators.",
    items: [
      "Block suspicious transactions",
      "Trigger step-up authentication",
      "Freeze compromised accounts",
      "Alert fraud investigation team",
    ],
  },
];

const FEATURES = [
  {
    title: "Multi-Agent System",
    body: "Specialized AI agents for detection, investigation, and response work together autonomously.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Processing",
    body: "Sub-second fraud detection and response, stopping fraud before completion.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Adaptive Learning",
    body: "Models continuously learn from new fraud patterns and investigator feedback.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Cross-Channel Analysis",
    body: "Correlate signals across web, mobile, API, and offline channels.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Explainable Decisions",
    body: "Clear reasoning for every fraud flag with an evidence trail for compliance.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Regulatory Compliance",
    body: "Built-in audit trails and reporting for AML, KYC, and fraud regulations.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const USE_CASES = [
  {
    title: "Payment Fraud",
    body: "Detect stolen cards, account takeovers, and friendly fraud in payment transactions.",
  },
  {
    title: "Loan Application Fraud",
    body: "Identify synthetic identities, income falsification, and application manipulation.",
  },
  {
    title: "Account Takeover",
    body: "Prevent unauthorized access through behavioral analysis and device recognition.",
  },
  {
    title: "E-commerce Fraud",
    body: "Stop chargeback fraud, triangulation fraud, and reseller abuse.",
  },
  {
    title: "Insurance Claims",
    body: "Detect fraudulent claims, staged accidents, and provider billing fraud.",
  },
  {
    title: "Money Laundering",
    body: "Identify suspicious transaction patterns and structuring attempts.",
  },
];

const OUTCOMES = [
  { stat: "High detection", label: "fraud caught in real time, before it settles" },
  { stat: "Low-latency", label: "response at machine speed, not queue speed" },
  { stat: "Far fewer", label: "false positives for your review teams to triage" },
];

function CheckIcon() {
  return (
    <svg
      className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      />
    </svg>
  );
}

export default function FraudDetectionPage() {
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
              Solution · Fraud Detection
            </p>
            <h1
              className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              Agentic{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                fraud detection
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Autonomous AI agents that detect, investigate, and prevent fraud in real time,
              protecting your business 24/7 with human-like reasoning at machine speed.
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
              Real-time scoring · Cross-source evidence · Human investigators in the loop
            </p>
          </div>
        </div>
      </section>

      {/* Animated agent mesh */}
      <section className="bg-[#0A0A0C] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E31E24]">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Agents investigate before they act
            </h2>
            <p className="mt-4 text-zinc-400">
              A streaming transaction enters the workspace, monitoring and identity agents score it,
              the investigation agent builds the case timeline, and a supervisor approves the action
              while compliance keeps the evidence trail.
            </p>
          </div>
          <div className="mt-12">
            <FraudAgentFlow />
          </div>
        </div>
      </section>

      {/* The three agents */}
      <section className="border-b border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              The agent team
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Three agents, one case file
            </h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {AGENTS.map((a, idx) => (
              <div key={a.title} className="rounded-xl border border-gray-200 bg-white p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-[14px] font-bold text-white">
                    {idx + 1}
                  </span>
                  <h3 className="text-[16px] font-bold text-[#1A1A1A]">{a.title}</h3>
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-gray-600">{a.body}</p>
                <ul className="mt-5 space-y-2.5 text-[13px] text-gray-600">
                  {a.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Key features
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              What the platform brings to the fraud desk
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
      <section className="border-t border-gray-200 bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Use cases
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Where agentic detection is deployed
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
              Why traditional fraud detection falls short
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Rule-based systems catch known fraud patterns but miss sophisticated attacks. Manual
              review teams are overwhelmed by false positives. By the time fraud is detected, the
              damage is already done.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              EasternStack Agentic Fraud Detection deploys autonomous AI agents that don&apos;t just
              flag suspicious activity — they investigate, correlate evidence across multiple data
              sources, and take action in real time.
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
