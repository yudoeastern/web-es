import Link from "next/link";
import type { Metadata } from "next";
import EnergyFlow from "@/components/industries/EnergyFlow";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "AI for Energy & Utilities: Forecast, Maintain, Optimize | EasternStack",
  description:
    "Agentic energy operations on WEAST: demand forecasting, predictive maintenance from SCADA and inspection docs, grid optimization, and cited customer service, one workspace per business unit.",
  alternates: { canonical: "/industries/energy-utilities" },
  openGraph: {
    title: "AI for Energy & Utilities: Forecast, Maintain, Optimize | EasternStack",
    description:
      "One workspace per business unit: agents that forecast demand, predict failures from sensors and inspection reports, balance the grid, and answer customers with cited tariff references, on one governed WEAST platform.",
    url: "https://easternstack.ai/industries/energy-utilities",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack, AI for Energy & Utilities",
      },
    ],
  },
};

const USE_CASES = [
  {
    title: "Demand Forecasting Agent",
    body: "Grounded in a consumption and weather knowledge base, with time-series models in Python, grid simulation, and seasonal decomposition subagents. Output: demand predictions with grid recommendations.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Predictive Maintenance Agent",
    body: "Reads inspection reports and sensor data via IDP, grounded in equipment manuals and maintenance history, with failure prediction, SCADA access over MCP, and delegation to demand forecasting for load impact. Output: risk assessments and schedules for engineer approval.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Grid Optimization Agent",
    body: "Grounded in grid topology and balancing rules, with optimization algorithms, simulation scenarios, and loss calculation subagents. Output: balancing and distribution plans.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Customer Service Agent",
    body: "Handles billing, outage, and tariff chats, grounded in tariff structures, with HTTP integration to billing systems. Output: cited answers and support tickets.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Document Intelligence",
    body: "Reads equipment manuals, inspection and environmental reports, with table extraction from consumption and billing data, and OCR on field forms and handwritten meter readings.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
      </svg>
    ),
  },
];

const GOVERNANCE = [
  {
    title: "One workspace per business unit",
    body: "Generation, Transmission, and Distribution each get their own workspace, memory, and audit trail, so nothing mixes.",
  },
  {
    title: "Citations on every customer answer",
    body: "Every answer points back to the tariff clause, billing record, or outage report it came from.",
  },
  {
    title: "Engineers approve grid actions",
    body: "Agents forecast, flag, and draft balancing plans; engineers approve the action. Sign-off stays where it belongs.",
  },
  {
    title: "Tenant boundaries per unit",
    body: "Sensor data, documents, and chat history stay inside their tenant boundary, with access logged per workspace.",
  },
  {
    title: "Sovereign deployment",
    body: "Run WEAST in your own environment, with keys and data under your control.",
  },
];

const OUTCOMES = [
  { stat: "Failures seen earlier", label: "maintenance before the outage, not after" },
  { stat: "Every outage explained", label: "customers get status and causes, with sources cited" },
  { stat: "One platform", label: "forecast, maintenance, optimization, and service under one governed WEAST" },
];

export default function EnergyUtilitiesPage() {
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
              Industry · Energy & Utilities
            </p>
            <h1
              className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              A grid that{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                thinks ahead
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              One workspace per business unit: Generation, Transmission, Distribution.
              Agents that forecast demand, predict failures from sensors and inspection
              reports, balance the grid, and answer customers with cited tariff
              references, on one WEAST platform.
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
              One workspace per unit · SCADA-connected · Engineer-approved actions
            </p>
          </div>
        </div>
      </section>

      {/* Animated energy flow */}
      <section className="bg-[#0A0A0C] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E31E24]">
              What you can build on WEAST
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Four agents on one grid
            </h2>
            <p className="mt-4 text-zinc-400">
              Sensor and SCADA feeds drive predictive maintenance, maintenance delegates
              load-impact questions to demand forecasting, and grid optimization turns
              both into balancing plans, while customer service pushes outage status from
              the same picture.
            </p>
          </div>
          <div className="mt-12">
            <EnergyFlow />
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
              What energy teams build on WEAST
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
              Built for governed grids
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
              What changes for your utility
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
