import type { Metadata } from "next";
import PlatformHero from "@/components/solutions/PlatformHero";
import FeatureRow, { type SolutionFeature } from "@/components/solutions/FeatureRow";
import TrustSection from "@/components/solutions/TrustSection";
import SolutionsCta from "@/components/solutions/SolutionsCta";

export const metadata: Metadata = {
  title: "WEAST Core: The Agentic AI Platform | EasternStack",
  description:
    "WEAST Core is EasternStack's agentic platform: Agent Studio orchestration with delegation budgets, Agent Editor with live tests, Document Intelligence with per-document cost, and isolated workspaces with full run traces.",
  alternates: {
    canonical: "/solutions/weast-core",
  },
  openGraph: {
    title: "WEAST Core: The Agentic AI Platform | EasternStack",
    description:
      "Design, govern, and run AI agents over your private knowledge. Agent Studio, Agent Editor, Document Intelligence, and isolated workspaces on one control plane.",
    url: "https://easternstack.ai/solutions/weast-core",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WEAST Core",
  applicationCategory: "BusinessApplication",
  url: "https://easternstack.ai/solutions/weast-core",
  description:
    "The agentic platform of the WEAST family: visual agent orchestration, document intelligence, and governed workspaces with full run traces.",
  publisher: { "@type": "Organization", name: "EasternStack", url: "https://easternstack.ai" },
};

const FEATURES: SolutionFeature[] = [
  {
    eyebrow: "01 · Agent Studio",
    title: "Design multi-agent workflows on a visual canvas",
    body: "Model your operation as a topology: a supervisor agent that delegates to specialist agents, with depth limits, call budgets and publish gates on every branch.",
    points: [
      "Supervisor → delegate orchestration with depth and call limits",
      "Per-branch budgets surfaced inline: depth 2 · 10 calls · 60s",
      "One-click publish with versioned agent rollouts",
    ],
    image: "/weast/screens/agent-studio.png",
    alt: "Agent Studio topology canvas",
  },
  {
    eyebrow: "02 · Agent Editor",
    title: "Give every agent an identity, a prompt, and a live test",
    body: "Edit display names, system prompts and tool bindings in one place, then pressure-test the agent against your real documents before it ever ships.",
    points: [
      "Markdown system prompts with reusable templates",
      "Live test chat wired to the running runtime",
      "Saved, versioned and publishable per workspace",
    ],
    image: "/weast/screens/agent-editor.png",
    alt: "Agent Editor with system prompt editor",
  },
  {
    eyebrow: "03 · Document Intelligence",
    title: "Turn documents into indexed, searchable knowledge",
    body: "Upload PDFs and spreadsheets into a governed registry. Weast chunks, indexes and tracks cost per document, so agents retrieve evidence, not hallucinations.",
    points: [
      "PDF & XLSX ingestion with chunk-level indexing",
      "Folder-scoped document registries per workspace",
      "Hybrid knowledge search across every indexed chunk",
    ],
    image: "/weast/screens/document-intelligence.png",
    alt: "Document Intelligence registry",
  },
  {
    eyebrow: "04 · Workspace Overview",
    title: "Every workspace isolated, every run accounted for",
    body: "Members, agents, documents and 30-day run health per workspace, with model spend against a monthly budget and a full activity trail.",
    points: [
      "Runs, success rate and model spend per workspace",
      "Monthly budget tracking with on-track status",
      "Activity log: who created which key, agent or document",
    ],
    image: "/weast/screens/workspace-overview.png",
    alt: "Workspace Overview dashboard",
  },
];

export default function WeastCorePage() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PlatformHero
        eyebrow="Platform 01 · The agentic platform"
        title={
          <>
            WEAST{" "}
            <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
              Core
            </span>
          </>
        }
        lede="Design agents, govern documents, and run workflows with full traces. WEAST Core is the foundation every other WEAST platform is built on."
        meta="Runs inside your infrastructure · Row-level tenant isolation · Durable Agent Worker execution"
      />

      {/* Feature rows */}
      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Platform capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              One control plane for the whole agent lifecycle
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              From the first uploaded document to the last traced API call, every screen below
              is the shipping product, captured from a live workspace.
            </p>
          </div>

          <div className="mt-16 space-y-20 sm:space-y-24">
            {FEATURES.map((feature, index) => (
              <FeatureRow key={feature.eyebrow} feature={feature} flip={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
      <SolutionsCta />
    </div>
  );
}
