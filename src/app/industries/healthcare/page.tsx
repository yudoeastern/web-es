import Link from "next/link";
import type { Metadata } from "next";
import HealthcareFlow from "@/components/industries/HealthcareFlow";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "AI for Healthcare: Governed Document Intelligence | EasternStack",
  description:
    "Governed document intelligence with tenant boundaries per facility on the WEAST platform: records stay isolated, answers stay traceable, clinicians stay in control.",
  alternates: { canonical: "/industries/healthcare" },
  openGraph: {
    title: "AI for Healthcare: Governed Document Intelligence | EasternStack",
    description:
      "Governed document intelligence with tenant boundaries per facility: records stay isolated, answers stay traceable, clinicians stay in control on one WEAST platform.",
    url: "https://easternstack.ai/industries/healthcare",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack, AI for Healthcare",
      },
    ],
  },
};

const USE_CASES = [
  {
    title: "Medical Record Intelligence",
    body: "Thick charts become searchable, structured knowledge, so care teams find the right detail without flipping pages.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Claims & Coding Assistance",
    body: "Agents draft codes and flag gaps in claim documents, with clinicians confirming every entry before it ships.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Clinical Summaries",
    body: "Discharge notes, referrals, and histories condensed into clear briefs that keep the clinical voice.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
  },
  {
    title: "Consent-aware Access",
    body: "Access follows consent and role, so each user only sees the records they are cleared for.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Audit-ready Compliance",
    body: "Every read, extraction, and answer is logged, so audits become a query instead of a project.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const LOCAL = [
  {
    title: "UU PDP alignment",
    body: "Personal data handling follows Indonesia's data protection law, with consent and purpose built into every flow.",
  },
  {
    title: "Per-facility tenant boundaries",
    body: "Each hospital or clinic runs in its own governed space, and records never cross between facilities.",
  },
  {
    title: "Bahasa medical NLP",
    body: "Extraction tuned for Indonesian clinical language, local abbreviations, and mixed-language notes.",
  },
  {
    title: "On-premise option",
    body: "Deploy inside your own environment when data residency or internal policy requires it.",
  },
  {
    title: "Clinician in the loop",
    body: "AI drafts and grounds, clinicians verify and decide. Care judgment stays human.",
  },
];

const OUTCOMES = [
  { stat: "Minutes to summaries", label: "from thick records to usable briefs" },
  { stat: "Every access logged", label: "who saw what, and why" },
  { stat: "One platform", label: "document intelligence and care agents under one governed WEAST" },
];

export default function HealthcarePage() {
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
              Industry · Healthcare
            </p>
            <h1
              className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              Every record governed,{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                every answer traceable
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Governed document intelligence with tenant boundaries per facility: records stay
              isolated, answers stay traceable, clinicians stay in control.
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
              Per-facility boundaries · Clinician in the loop · UU PDP aligned
            </p>
          </div>
        </div>
      </section>

      {/* Animated gated vault flow */}
      <section className="bg-[#0A0A0C] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E31E24]">
              Governed document intelligence
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Records cross the gate, never the boundary
            </h2>
            <p className="mt-4 text-zinc-400">
              Records from each facility pass a governance gate that enforces tenant boundaries
              and consent, then extraction builds indexed knowledge, and care teams get answers
              grounded in the right facility&apos;s records.
            </p>
          </div>
          <div className="mt-12">
            <HealthcareFlow />
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
              What care teams run on WEAST
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
              Built for Indonesian healthcare
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
              What changes for care teams
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
