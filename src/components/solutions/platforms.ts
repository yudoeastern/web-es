export interface WeastPlatform {
  slug: "weast-core" | "weast-abi" | "weast-omnichannel";
  index: string;
  name: string;
  tagline: string;
  description: string;
  points: string[];
  image: string;
  alt: string;
}

export const PLATFORMS: WeastPlatform[] = [
  {
    slug: "weast-core",
    index: "01",
    name: "WEAST Core",
    tagline: "The agentic platform",
    description:
      "Design, govern, and run AI agents over your private knowledge: visual orchestration, document intelligence, and isolated workspaces with full run traces.",
    points: [
      "Agent Studio: supervisor delegation with depth and call budgets",
      "Document Intelligence: indexed knowledge with per-document cost",
      "Isolated workspaces with budgets, keys, and activity trails",
    ],
    image: "/weast/screens/agent-studio.png",
    alt: "WEAST Core Agent Studio topology canvas",
  },
  {
    slug: "weast-abi",
    index: "02",
    name: "WEAST for ABI",
    tagline: "Agentic business intelligence",
    description:
      "A durable pipeline that turns raw uploads into validated, transformed, and visualized answers, with AI-generated dashboards you can query in natural language.",
    points: [
      "Upload, validate, transform, visualize: every step logged and resumable",
      "AI-generated widgets, insights, and filters per dataset",
      "Natural language chat over every processed dataset",
    ],
    image: "/weast/screens/ABI-AgenticBI-00.png",
    alt: "WEAST for ABI agentic pipeline dashboard",
  },
  {
    slug: "weast-omnichannel",
    index: "03",
    name: "WEAST for Omnichannel",
    tagline: "Sales Transition Engine",
    description:
      "When a sales rep leaves, the replacement instantly knows where to start, who to follow up with, and what to do next. No context walks out the door.",
    points: [
      "Every customer session recorded: history, deal status, negotiation stage",
      "Prioritized follow-up lists from opportunity scores and activity",
      "Guided onboarding: the system trains new reps, not a person",
    ],
    image: "/weast/screens/Omnichannel-01.png",
    alt: "WEAST for Omnichannel Sales Transition Engine dashboard",
  },
];
