import type { Metadata } from "next";
import Link from "next/link";
import StudioHero from "@/components/showcase/StudioHero";
import AgentOsDemo from "@/components/showcase/AgentOsDemo";

export const metadata: Metadata = {
  title: "EasternStack WEAST",
  description:
    "EasternStack WEAST, where enterprise AI becomes real work. Explore a live, fully interactive replica of the platform in your browser.",
};

const PROVIDERS = [
  { name: "Qwen", logo: "/agentos/models/qwen.webp" },
  { name: "DeepSeek", logo: "/agentos/models/deepseek.svg" },
  { name: "Dola Seed", logo: "/agentos/models/dola-seed.jpeg" },
  { name: "GLM", logo: "/agentos/models/glm.png" },
  { name: "Kimi", logo: "/agentos/models/kimi.png" },
];

export default function DownloadPage() {
  return (
    <div className="bg-[#0A0A0C] text-white">
      <StudioHero>
        <AgentOsDemo />
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
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">Context Aware Intelligence</h3>
              <p className="text-zinc-400">
                Understand user intent, business context, and data relationships to deliver
                accurate and relevant outcomes.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">Task Execution Across Systems</h3>
              <p className="text-zinc-400">
                Enable AI to perform real actions within enterprise platforms such as CRM,
                ERP, and internal tools.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">Workflow Orchestration</h3>
              <p className="text-zinc-400">
                Coordinate multi step processes across systems, teams, and data sources.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">Multi Model Flexibility</h3>
              <p className="text-zinc-400">
                Leverage multiple AI models to optimize performance and adaptability.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">Secure and Controlled Deployment</h3>
              <p className="text-zinc-400">
                Ensure compliance, data privacy, and governance across all environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How EasternStack delivers AI */}
      <section className="border-t border-white/5 py-16 md:py-20">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            HOW EASTERNSTACK <span className="gradient-text">DELIVERS AI</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
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
              <h3 className="mb-3 text-xl font-semibold text-white">Implementation</h3>
              <p className="text-zinc-400">
                Deploy AI solutions and integrate with enterprise systems.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Optimization & Scaling</h3>
              <p className="text-zinc-400">
                Continuously improve performance and expand use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5 py-20">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E31E24]/10 blur-[120px]" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Bring agentic AI to your enterprise
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-zinc-400">
            Talk to our team and deploy WEAST on your terms: any public cloud, private
            cloud, VPC, or fully on-premise. Same platform, same security, wherever your
            data lives.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-3.5 text-base">
              Contact Sales
            </Link>
            <Link
              href="/solutions"
              className="rounded-lg border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
