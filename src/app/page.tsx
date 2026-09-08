import type { Metadata } from "next";
import Link from "next/link";
import StudioHero from "@/components/showcase/StudioHero";
import WeastDemo from "@/components/showcase/WeastDemo";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "EasternStack WEAST: Where Enterprise AI Becomes Real Work",
  description:
    "Build, run, and govern AI workflows across your people, systems, and data. Explore WEAST live in your browser: agents, approvals, full run traces, model control per workspace, tenant boundaries, and cost visibility on every run.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EasternStack WEAST: Where Enterprise AI Becomes Real Work",
    description:
      "Build, run, and govern AI workflows across your people, systems, and data. Explore WEAST live in your browser, no account needed.",
    url: "https://easternstack.ai",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack WEAST, Where Enterprise AI Becomes Real Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasternStack WEAST: Where Enterprise AI Becomes Real Work",
    description:
      "Build, run, and govern AI workflows across your people, systems, and data. Explore WEAST live in your browser, no account needed.",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack WEAST, Where Enterprise AI Becomes Real Work",
      },
    ],
  },
};

const PROVIDERS = [
  { name: "Qwen", logo: "/weast/models/qwen.webp" },
  { name: "DeepSeek", logo: "/weast/models/deepseek.svg" },
  { name: "Dola Seed", logo: "/weast/models/dola-seed.jpeg" },
  { name: "GLM", logo: "/weast/models/glm.png" },
  { name: "Kimi", logo: "/weast/models/kimi.png" },
];

const CAPABILITIES = [
  {
    title: "Context Aware Intelligence",
    body: "Understand user intent, business context, and data relationships to deliver accurate and relevant outcomes.",
  },
  {
    title: "Task Execution Across Systems",
    body: "Enable AI to perform real actions within enterprise platforms such as CRM, ERP, and internal tools.",
  },
  {
    title: "Workflow Orchestration",
    body: "Coordinate multi step processes across systems, teams, and data sources.",
  },
  {
    title: "Multi Model Flexibility",
    body: "Leverage multiple AI models to optimize performance and adaptability.",
  },
  {
    title: "Secure and Controlled Deployment",
    body: "Support compliance, data privacy, and governance across environments.",
  },
];

const weastJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WEAST by EasternStack",
  alternateName: "WEAST",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Cloud, On-premise",
  url: "https://easternstack.ai",
  description:
    "WEAST is EasternStack's enterprise agentic AI platform. Build, run, and govern AI workflows across your people, systems, and data, with agents, approvals, full run traces, model control per workspace, tenant boundaries by design, and cost visibility on every run.",
  featureList: [
    "Agents, approvals, and full run traces",
    "Model control per workspace",
    "Tenant boundaries by design",
    "Cost visibility on every run",
    "Document Intelligence with OCR and per-document cost tracking",
    "Agent Studio visual orchestration",
    "Agent Runtime container management",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Live product tour runs fully in the browser, no account needed.",
  },
  publisher: {
    "@type": "Organization",
    name: "EasternStack",
    url: "https://easternstack.ai",
  },
};

export default function Home() {
  return (
    <div className="bg-[#0A0A0C] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weastJsonLd) }}
      />
      <StudioHero>
        <WeastDemo />
      </StudioHero>

      {/* Model providers */}
      <section className="border-t border-white/5 py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E31E24]">
              Model providers
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Run agents on the models your teams already trust
            </h2>
            <p className="mt-4 text-zinc-400">
              Weast is model-agnostic: point each agent at a provider per workspace, and swap
              models without touching your workflows.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {PROVIDERS.map((provider) => (
              <div
                key={provider.name}
                className="flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-6"
              >
                <img
                  src={provider.logo}
                  alt={`${provider.name} logo`}
                  loading="lazy"
                  className="h-12 w-12 rounded-lg object-contain"
                />
                <span className="text-sm font-semibold text-white">{provider.name}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center font-mono text-xs text-zinc-500">
            Plus any OpenAI-compatible endpoint, usage synced from Easternstack AI Gate,
            broken down by model.
          </p>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="border-t border-white/5 py-16 md:py-20">
        <div className="container-custom">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            CORE <span className="gradient-text">CAPABILITIES</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-zinc-400">
            Built on a unified AI architecture that enables intelligent automation across
            your organization.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">{cap.title}</h3>
                <p className="text-zinc-400">{cap.body}</p>
                <Link
                  href="/solutions"
                  className="mt-5 inline-flex items-center gap-1.5 self-start rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white transition-all hover:border-[#E31E24]/60 hover:bg-[#E31E24]/10 hover:text-[#FF5A5F]"
                >
                  View details
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How EasternStack delivers AI */}
      <section className="border-t border-white/5 py-16 md:py-20">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            HOW EASTERNSTACK <span className="gradient-text">DELIVERS AI</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Discovery & Assessment</h3>
              <p className="text-zinc-400">
                Identify business use cases, operational challenges, and AI opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Solution Design</h3>
              <p className="text-zinc-400">
                Define architecture, workflows, and integration strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Pilot & Validation</h3>
              <p className="text-zinc-400">
                Run a scoped pilot on real workflows, measure against agreed KPIs, and
                validate with your team before full rollout.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Implementation</h3>
              <p className="text-zinc-400">
                Deploy AI solutions and integrate with enterprise systems.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <span className="text-xl font-bold text-white">5</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Optimization & Scaling</h3>
              <p className="text-zinc-400">
                Continuously improve performance and expand use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WeastCta />
    </div>
  );
}
