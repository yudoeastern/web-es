import type { Metadata } from "next";
import PlatformHero from "@/components/solutions/PlatformHero";
import UseCaseStory from "@/components/solutions/UseCaseStory";
import FeatureRow, { type SolutionFeature } from "@/components/solutions/FeatureRow";
import TrustSection from "@/components/solutions/TrustSection";
import SolutionsCta from "@/components/solutions/SolutionsCta";
import PlatformCrossLinks from "@/components/solutions/PlatformCrossLinks";

export const metadata: Metadata = {
  title: "WEAST for ABI: Agentic Business Intelligence | EasternStack",
  description:
    "WEAST for ABI turns raw uploads into trusted answers: a durable pipeline that validates, transforms, and visualizes your data, with AI-generated dashboards you can query in natural language.",
  alternates: {
    canonical: "/solutions/weast-abi",
  },
  openGraph: {
    title: "WEAST for ABI: Agentic Business Intelligence | EasternStack",
    description:
      "Upload, validate, transform, visualize. Every step logged and resumable. AI-generated widgets and insights, queryable via natural language chat.",
    url: "https://easternstack.ai/solutions/weast-abi",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WEAST for ABI",
  applicationCategory: "BusinessApplication",
  url: "https://easternstack.ai/solutions/weast-abi",
  description:
    "Agentic business intelligence on WEAST: durable data pipelines with AI-generated dashboards and natural language analytics.",
  publisher: { "@type": "Organization", name: "EasternStack", url: "https://easternstack.ai" },
};

const PIPELINE_FEATURE: SolutionFeature = {
  eyebrow: "Agentic Pipeline",
  title: "Durable data processing you can actually trust",
  body: "ABI runs on a fault-tolerant pipeline with schema validation, automatic dashboard generation, and analytics you can trace, not opaque AI guesswork.",
  points: [
    "Upload → validate → transform → visualize, every step logged and resumable",
    "Per-dataset processing status, row counts, and success rates at a glance",
    "AI-generated widgets, insights, and filters, all queryable via natural language chat",
  ],
  images: [
    "/weast/screens/ABI-AgenticBI-00.png",
    "/weast/screens/ABI-AgenticBI-01.png",
    "/weast/screens/ABI-AgenticBI-02.png",
  ],
  alt: "Agentic Pipeline dashboard",
};

const PIPELINE_STEPS = [
  {
    step: "01",
    title: "Upload",
    body: "Drop in spreadsheets, exports, and reports. Files land in a governed dataset with ownership and history from the first byte.",
  },
  {
    step: "02",
    title: "Validate",
    body: "Schema checks and data quality rules run automatically, so bad rows are flagged before they ever reach a dashboard.",
  },
  {
    step: "03",
    title: "Transform",
    body: "Clean, join, and reshape datasets with steps that are logged, versioned, and resumable, not black-box AI guesswork.",
  },
  {
    step: "04",
    title: "Visualize",
    body: "Dashboards and widgets are generated for you, then refined by asking questions in natural language.",
  },
];

export default function WeastAbiPage() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PlatformHero
        eyebrow="Platform 02 · Agentic business intelligence"
        title={
          <>
            WEAST for{" "}
            <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
              ABI
            </span>
          </>
        }
        lede="From raw files to trusted answers without hand-building pipelines. Upload, validate, transform, visualize, then ask questions in natural language."
        meta="Runs inside your infrastructure · Every pipeline step logged and resumable · Natural language analytics"
      />

      <UseCaseStory
        title="Dashboards in one sitting, not one quarter"
        problem="Stakeholders want answers from data scattered across spreadsheets and exports. Every request becomes a hand-built pipeline, a brittle dashboard, and a multi-week wait. When numbers look wrong, nobody can trace how they were produced."
        outcome="WEAST for ABI runs the whole journey as one durable pipeline. Data is validated and transformed with every step logged, dashboards are generated automatically, and follow-up questions happen in natural language chat, with traceable results."
        results={[
          { stat: "One sitting", label: "from raw upload to working dashboard" },
          { stat: "Every step", label: "logged, versioned, and resumable" },
          { stat: "Chat", label: "query every dataset in natural language" },
        ]}
      />

      {/* Pipeline feature */}
      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Platform capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Analytics you can trace, not guess at
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Every screen below is the shipping product, captured from a live workspace.
            </p>
          </div>

          <div className="mt-16">
            <FeatureRow feature={PIPELINE_FEATURE} flip={false} />
          </div>

          {/* Pipeline steps */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-3xl">
              The pipeline, step by step
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PIPELINE_STEPS.map((s) => (
                <div key={s.step} className="rounded-xl border border-gray-200 bg-white p-6">
                  <p className="text-xs font-bold tracking-widest text-[#E31E24]">{s.step}</p>
                  <h4 className="mt-2 text-lg font-bold text-[#1A1A1A]">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PlatformCrossLinks current="weast-abi" />
      <TrustSection />
      <SolutionsCta />
    </div>
  );
}
