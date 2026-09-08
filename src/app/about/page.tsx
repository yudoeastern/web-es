import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About EasternStack | Enterprise AI Platform Company in Indonesia",
  description:
    "EasternStack is an enterprise AI platform company in Jakarta, Indonesia, enabling organizations to build and operate AI applications with full control over cost, performance, and deployment across Qwen, DeepSeek, GLM, and Kimi.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About EasternStack | Enterprise AI Platform Company in Indonesia",
    description:
      "Enterprise AI platform from Jakarta, Indonesia. Build and operate AI applications with full control over cost, performance, and deployment.",
    url: "https://easternstack.ai/about",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack - Enterprise AI Platform Company in Indonesia",
      },
    ],
  },
};

const DIFFERENTIATORS = [
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Model Agnostic by Design",
    body: "Run agents on Qwen, DeepSeek, GLM, Kimi, or any OpenAI-compatible endpoint. Swap models per workspace without touching your workflows.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Sovereign AI Infrastructure",
    body: "Your data stays in your environment. Deploy on any cloud, VPC, or fully on-premise. Same platform, same security, wherever your data lives.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Full Run Traceability",
    body: "Agent runs, approvals, and decisions: traced and auditable. See exactly what happened, why, and how much it cost.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cost Control at Every Layer",
    body: "Per-model cost visibility on every run. Set budgets per workspace, track spend in real time, and optimize without guessing.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Tenant Isolation by Design",
    body: "Row-level security and workspace boundaries ensure strict data separation. Multi-tenant without the multi-tenant risk.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Agentic, Not Just Generative",
    body: "AI that does real work: plans, executes, and delivers across your systems. Not just chatbots, but autonomous agents with human oversight.",
  },
];

const VALUES = [
  {
    label: "01",
    title: "Sovereign AI",
    body: "Your data, your models, your infrastructure. We build platforms you own, not services you rent.",
  },
  {
    label: "02",
    title: "Pragmatic Innovation",
    body: "Balance cutting-edge capabilities with proven enterprise readiness. Ship what works, not what sounds good.",
  },
  {
    label: "03",
    title: "Partnership First",
    body: "Long-term collaboration, not just implementation. Your success metrics are our success metrics.",
  },
  {
    label: "04",
    title: "Radical Transparency",
    body: "Full cost visibility, full run traces, full audit trails. No black boxes, no hidden fees, full transparency.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-clip">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-24 sm:pb-20">
        {/* Dot pattern */}
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
              We make enterprise AI{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                real and reachable
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              EasternStack is an enterprise AI platform company based in Jakarta, Indonesia.
              We build the infrastructure that lets organizations run AI agents across their
              people, systems, and data, with full control over cost, performance, and deployment.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#E31E24] to-[#C4181E] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              >
                Talk to Us
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
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
                Our Mission
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                AI should work for your business, not the other way around
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Many enterprise AI projects stall between demo and production. The models are
                impressive, but the integration, governance, and cost control are missing.
                EasternStack exists to close that gap.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                We built WEAST, our enterprise agentic AI platform, so organizations can move
                from AI experiments to AI operations. Agent runs are traced and costs are
                visible, and every deployment runs on your terms.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { stat: "5+", label: "AI model providers supported" },
                { stat: "1", label: "WEAST platform for every team" },
                { stat: "Yours", label: "Infrastructure you own and control" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-6 rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm"
                >
                  <span className="text-3xl font-extrabold bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                    {item.stat}
                  </span>
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why EasternStack */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Why EasternStack
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Built for enterprises that need{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                control, not promises
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Enterprise AI requires more than a powerful model. It needs traceability,
              governance, cost control, and the freedom to choose the right model for each task.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((d) => (
              <div
                key={d.title}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E31E24]/40 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E31E24] to-[#C4181E] shadow-lg shadow-[#E31E24]/20 group-hover:scale-110 transition-transform duration-300">
                  {d.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A]">{d.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Approach */}
      <section className="border-t border-gray-200 py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
                Our Approach
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                One platform, multiple models, zero lock-in
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We believe the best AI model depends on the task. That is why WEAST is
                model-agnostic: point each agent at the provider that works best, and swap
                models without rewriting your workflows.
              </p>
              <Link
                href="/solutions"
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] shadow-sm transition-all hover:border-[#E31E24] hover:text-[#E31E24]"
              >
                Explore our platforms
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="lg:col-span-3 space-y-4">
              {[
                {
                  step: "01",
                  title: "Discovery & Assessment",
                  body: "We identify your highest-impact use cases, map your data landscape, and define measurable success criteria before writing a single line of code.",
                },
                {
                  step: "02",
                  title: "Solution Design",
                  body: "Architecture, workflows, integration strategy, and governance framework designed around your infrastructure and compliance requirements.",
                },
                {
                  step: "03",
                  title: "Implementation & Integration",
                  body: "Deploy WEAST on your infrastructure, connect to your existing systems, and build agents that work across your real business processes.",
                },
                {
                  step: "04",
                  title: "Optimization & Scale",
                  body: "Continuous performance tuning, cost optimization, and expansion to new use cases. We stay involved until the platform runs itself.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="group flex gap-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#E31E24]/40 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-sm font-bold text-white shadow-md shadow-[#E31E24]/20">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              What We Stand For
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Our{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                values
              </span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.label}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E31E24]/40 hover:shadow-xl"
              >
                <span className="text-6xl font-black text-gray-100 absolute top-2 right-4 select-none">
                  {v.label}
                </span>
                <div className="relative z-10">
                  <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#E31E24] to-[#C4181E]" />
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">{v.title}</h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-gradient-to-br from-[#E31E24] to-[#1A1A1A] py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Ready to put AI to work?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Talk to our team about deploying WEAST on your infrastructure. Any cloud, any VPC,
            any on-premise setup. We will help you find the right starting point.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[#E31E24] shadow-lg transition-all hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Contact Sales
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
