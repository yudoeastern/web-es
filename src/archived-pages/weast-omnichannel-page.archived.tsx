import type { Metadata } from "next";
import PlatformHero from "@/components/solutions/PlatformHero";
import UseCaseStory from "@/components/solutions/UseCaseStory";
import FeatureRow, { type SolutionFeature } from "@/components/solutions/FeatureRow";
import TrustSection from "@/components/solutions/TrustSection";
import SolutionsCta from "@/components/solutions/SolutionsCta";
import PlatformCrossLinks from "@/components/solutions/PlatformCrossLinks";

export const metadata: Metadata = {
  title: "WEAST for Omnichannel: Sales Transition Engine | EasternStack",
  description:
    "WEAST for Omnichannel keeps every customer session recorded and hands new sales reps a prioritized follow-up list. When a rep leaves, the next one starts at full speed.",
  alternates: {
    canonical: "/solutions/weast-omnichannel",
  },
  openGraph: {
    title: "WEAST for Omnichannel: Sales Transition Engine | EasternStack",
    description:
      "High sales turnover? Every session recorded, follow-ups prioritized by opportunity score, and new reps guided by the system instead of weeks of training.",
    url: "https://easternstack.ai/solutions/weast-omnichannel",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WEAST for Omnichannel",
  applicationCategory: "BusinessApplication",
  url: "https://easternstack.ai/solutions/weast-omnichannel",
  description:
    "The Sales Transition Engine on WEAST: recorded customer sessions, prioritized follow-ups, and guided onboarding for sales teams with high turnover.",
  publisher: { "@type": "Organization", name: "EasternStack", url: "https://easternstack.ai" },
};

const TRANSITION_FEATURE: SolutionFeature = {
  eyebrow: "Sales Transition Engine",
  title: "High sales turnover? Transitions don't have to be painful",
  body: "This isn't just another CRM. It's built so when a sales rep leaves, the replacement instantly knows where to start, who to follow up with, and what to do next.",
  points: [
    "Every customer session fully recorded: history, deal status, negotiation stage",
    "Prioritized follow-up lists from opportunity scores and recent activity",
    "Guided onboarding: the system trains new reps, not a person",
  ],
  images: [
    "/weast/screens/Omnichannel-01.png",
    "/weast/screens/Omnichannel-02.png",
  ],
  alt: "Sales Transition Engine dashboard",
};

const PILLARS = [
  {
    title: "Recorded sessions",
    body: "Conversation history, deal status, and negotiation stage stay with the customer account, never with a departing rep's memory.",
  },
  {
    title: "Prioritized follow-ups",
    body: "Opportunity scores and recent activity rank who to call next, so day one starts with action, not archaeology.",
  },
  {
    title: "Guided onboarding",
    body: "The system walks new reps through each account and next best step, freeing senior reps from repeating the same training.",
  },
];

export default function WeastOmnichannelPage() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PlatformHero
        eyebrow="Platform 03 · Sales Transition Engine"
        title={
          <>
            WEAST for{" "}
            <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
              Omnichannel
            </span>
          </>
        }
        lede="When a sales rep leaves, the replacement instantly knows where to start, who to follow up with, and what to do next. No relationship context walks out the door."
        meta="Runs inside your infrastructure · Every customer session recorded · Follow-ups prioritized by opportunity score"
      />

      <UseCaseStory
        title="When reps leave, revenue shouldn't"
        problem="Sales teams live with constant turnover. Every departure takes customer history, negotiation context, and follow-up discipline with it. New reps spend weeks reconstructing the past while hot deals go cold."
        outcome="WEAST for Omnichannel records every customer session and turns it into a prioritized work queue. The incoming rep opens the account, sees exactly where things stand, and continues the conversation the same day."
        results={[
          { stat: "0", label: "customer context lost at handover" },
          { stat: "Day 1", label: "productive follow-ups for new reps" },
          { stat: "Weeks saved", label: "on onboarding, guided by the system" },
        ]}
      />

      {/* Feature + pillars */}
      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Platform capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Built for handovers, not just pipelines
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Every screen below is the shipping product, captured from a live workspace.
            </p>
          </div>

          <div className="mt-16">
            <FeatureRow feature={TRANSITION_FEATURE} flip={false} />
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-3xl">
              Three pillars of a painless transition
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {PILLARS.map((p) => (
                <div key={p.title} className="rounded-xl border border-gray-200 bg-white p-6">
                  <h4 className="text-lg font-bold text-[#1A1A1A]">{p.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PlatformCrossLinks current="weast-omnichannel" />
      <TrustSection />
      <SolutionsCta />
    </div>
  );
}
