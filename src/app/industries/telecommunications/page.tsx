import Link from "next/link";
import type { Metadata } from "next";
import TelecomFlow from "@/components/industries/TelecomFlow";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "AI for Telecommunications: Network, Churn & Fraud | EasternStack",
  description:
    "Agentic telecom operations on WEAST: network optimization from NOC data, churn prediction with proactive outreach, cited customer support, and CDR fraud detection, one workspace per division.",
  alternates: { canonical: "/industries/telecommunications" },
  openGraph: {
    title: "AI for Telecommunications: Network, Churn & Fraud | EasternStack",
    description:
      "One workspace per division: agents that read NOC logs, score churn and trigger proactive outreach, answer subscribers with cited plan terms, and hunt fraud in CDR data, on one governed WEAST platform.",
    url: "https://easternstack.ai/industries/telecommunications",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack, AI for Telecommunications",
      },
    ],
  },
};

const USE_CASES = [
  {
    title: "Network Optimization Agent",
    body: "Grounded in your topology and SLA knowledge base, incident tickets and logs read via IDP, traffic analysis in Python, MCP hooks to the NOC, and log analysis via shell. Output: performance reports with predictive alerts.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Churn Prediction Agent",
    body: "Grounded in retention policies and subscriber segments, churn scoring in Python, CRM and billing lookups over HTTP, subagents for usage patterns, and delegation to support for outreach. Output: an at-risk list with recommended actions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
  },
  {
    title: "Customer Support Agent",
    body: "24/7 billing and technical support chat, grounded in product catalogs and rate plans, real-time account lookup over HTTP, answers cited to plan terms, with delegation to the network agent for outage checks and ticket creation.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Fraud Detection Agent",
    body: "Grounded in SIM box and subscription fraud patterns, anomaly detection algorithms in Python, batch CDR analysis via shell, and real-time traffic over MCP. Output: alerts with an evidence trail.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Document Intelligence",
    body: "Reads incident reports, SLA documents, and vendor contracts, with table extraction from CDR and billing files, and OCR on field technician reports.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const GOVERNANCE = [
  {
    title: "One workspace per division",
    body: "Network, Customer Ops, and Fraud each get their own workspace, memory, and audit trail, so nothing mixes.",
  },
  {
    title: "Citations on every answer",
    body: "Every support answer points back to the plan term, policy, or ticket it came from.",
  },
  {
    title: "Humans approve retention spends",
    body: "Agents score and recommend; humans approve credits, discounts, and campaigns before they go out.",
  },
  {
    title: "Tenant boundaries per division",
    body: "NOC data, CRM records, and CDR streams stay inside their tenant boundary, with access logged per workspace.",
  },
  {
    title: "Sovereign deployment",
    body: "Run WEAST in your own environment, with keys and subscriber data under your control.",
  },
];

const OUTCOMES = [
  { stat: "Outages answered faster", label: "support knows the network picture before the subscriber asks" },
  { stat: "Churn caught early", label: "proactive outreach before the cancellation request" },
  { stat: "One platform", label: "network, churn, support, and fraud under one governed WEAST" },
];

export default function TelecommunicationsPage() {
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
              Industry · Telecommunications
            </p>
            <h1
              className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              Networks that{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                heal themselves
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              One workspace per division: Network, Customer Ops, Fraud. Agents that read NOC
              logs, score churn and trigger proactive outreach, answer subscribers with
              cited plan terms, and hunt fraud in CDR data, on one WEAST platform.
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
                Try the Product Tour
              </Link>
            </div>
            <p className="mt-5 text-[13px] text-gray-500">
              One workspace per division · NOC-connected · Human-approved actions
            </p>
          </div>
        </div>
      </section>

      {/* Animated telecom ops flow */}
      <section className="bg-[#0A0A0C] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E31E24]">
              What you can build on WEAST
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              An ops room that never blinks
            </h2>
            <p className="mt-4 text-zinc-400">
              Incident tickets and network logs feed the network agent, churn scores hand
              the support agent a proactive outreach list, support checks outage status
              back with the network agent, and fraud sweeps CDR batches in parallel.
            </p>
          </div>
          <div className="mt-12">
            <TelecomFlow />
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
              What telecom teams build on WEAST
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

      {/* Governance */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Governance by design
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Built for critical operations
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {GOVERNANCE.map((i) => (
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
              What changes for your operations
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
