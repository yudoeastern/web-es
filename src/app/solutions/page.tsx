import type { Metadata } from "next";
import Link from "next/link";
import TrustSection from "@/components/solutions/TrustSection";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "WEAST: One Enterprise AI Platform for Every Team | EasternStack",
  description:
    "WEAST by EasternStack is one enterprise agentic AI platform for every team: document intelligence, agent orchestration, governed runtimes, and full audit trails. Deploy on any cloud, VPC, or on-premise.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "WEAST: One Enterprise AI Platform for Every Team | EasternStack",
    description:
      "One platform, every team. Build, run, and govern AI workflows across your people, systems, and data, with tenant boundaries and cost visibility on every run.",
    url: "https://easternstack.ai/solutions",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "WEAST by EasternStack, one enterprise AI platform",
      },
    ],
  },
};

const weastJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WEAST by EasternStack",
  applicationCategory: "BusinessApplication",
  url: "https://easternstack.ai/solutions",
  description:
    "One enterprise agentic AI platform for every team: document intelligence, agent orchestration, governed runtimes, and full audit trails.",
  publisher: { "@type": "Organization", name: "EasternStack", url: "https://easternstack.ai" },
};

const CAPABILITIES = [
  {
    title: "Document Intelligence",
    body: "PDFs and spreadsheets become indexed, searchable knowledge, with per-document cost tracking.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Agent Studio",
    body: "Design multi-agent workflows on a visual canvas, with delegation depth and call budgets per branch.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Agent Runtime",
    body: "Durable agent containers you can sleep, wake, and restart. Runs survive restarts and stay traceable.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
  },
  {
    title: "Governance & Audit Trail",
    body: "Every run traced end to end: thinking steps, citations, approvals, and a full activity log.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Model Control & Cost",
    body: "Pick models per workspace and track spend down to the request, against monthly budgets.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const INDUSTRIES = [
  {
    slug: "financial-services",
    name: "Financial Services",
    body: "Credit analysis, fraud detection, and compliance with full audit trails.",
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    body: "Forecasting, churn prediction, and support automation that scales with your seasons.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    body: "Supply chain optimization and document-heavy operations, automated end to end.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    body: "Governed document intelligence with tenant boundaries per facility.",
  },
  {
    slug: "logistics",
    name: "Logistics",
    body: "Real-time orchestration across fleets, warehouses, and partners.",
  },
];

const OUTCOMES = [
  { stat: "Days → minutes", label: "credit memo turnaround with supervised agent workflows" },
  { stat: "Every run", label: "traced end to end, ready for audit" },
  { stat: "Per request", label: "model cost visibility against workspace budgets" },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weastJsonLd) }}
      />

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

            <h1
              className="mt-6 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              One platform. Every team.{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                Real work.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              WEAST is EasternStack&apos;s enterprise agentic AI platform. Build, run, and
              govern AI workflows across your people, systems, and data, from one control
              plane your whole organization shares.
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
                href="/"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-transparent px-6 py-3 text-sm font-semibold text-[#1A1A1A] hover:border-[#E31E24] hover:text-[#E31E24] transition-all"
              >
                <svg className="h-4 w-4 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Try the Live Product Tour
              </Link>
            </div>

            <p className="mt-5 text-[13px] text-gray-500">
              Runs inside your infrastructure · Row-level tenant isolation ·
              Durable Agent Worker execution
            </p>
          </div>

          {/* Product preview */}
          <div className="mt-16">
            <img
              src="/weast/screens/workspace-overview.png"
              alt="WEAST Workspace Overview"
              className="w-full rounded-xl border border-gray-200 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Platform capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Everything your teams need, in one control plane
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Every capability below ships in the same WEAST platform, governed by the same
              workspaces, keys, and audit trails.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#E31E24]/40 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                  {cap.icon}
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-[#1A1A1A]">{cap.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{cap.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/solutions/weast-core"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E31E24] hover:underline"
            >
              Explore the full WEAST platform in depth
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Built for your industry
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              One platform, tuned to how your industry works
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#E31E24]/40 hover:shadow-lg"
              >
                <h3 className="text-[15px] font-bold text-[#1A1A1A] transition-colors group-hover:text-[#E31E24]">
                  {ind.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{ind.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#E31E24]">
                  See industry
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Measurable outcomes
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              What changes when AI is governed properly
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

      {/* Trust */}
      <TrustSection />

      {/* Use case solutions */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4 text-center">
            ALL AI SOLUTIONS
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12 text-center">
            Explore our complete portfolio of enterprise AI solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/solutions/ai-assistant#customer-support" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-[#E31E24] transition-colors">
                Customer Support Automation
              </h3>
              <p className="text-text-secondary mb-4">
                Always-on AI-powered frontline support for order tracking, refunds, complaints, and FAQs.
              </p>
            </Link>

            <Link href="/solutions/ocr-solutions#invoice" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-[#E31E24] transition-colors">
                InvoiceMind OCR
              </h3>
              <p className="text-text-secondary mb-4">
                Automated invoice processing with high-accuracy data extraction and validation.
              </p>
            </Link>

            <Link href="/solutions/churn-prediction" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-[#E31E24] transition-colors">
                Churn Prediction
              </h3>
              <p className="text-text-secondary">
                Predict and prevent customer churn with AI-driven insights and proactive retention strategies.
              </p>
            </Link>

            <Link href="/solutions/fraud-detection" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-[#E31E24] transition-colors">
                Agentic Fraud Detection
              </h3>
              <p className="text-text-secondary">
                Real-time fraud detection with autonomous AI agents that identify and prevent suspicious activities.
              </p>
            </Link>

            <Link href="/solutions/loan-processing" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-[#E31E24] transition-colors">
                Loan Application Processing
              </h3>
              <p className="text-text-secondary">
                Automated loan processing with intelligent risk assessment and faster approval decisions.
              </p>
            </Link>

            <Link href="/solutions/forecasting" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-[#E31E24] transition-colors">
                Forecasting AI
              </h3>
              <p className="text-text-secondary mb-4">
                Sales forecasting, inventory optimization, and financial predictions to drive smarter business decisions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <WeastCta tourHref="/#demo-ide" />
    </div>
  );
}
