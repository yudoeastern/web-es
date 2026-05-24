import { db } from "./src/db";
import { webinars } from "./src/db/schema";

const seedData: {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  partner: string;
  status: "upcoming" | "past";
  imageUrl: string;
}[] = [
  {
    title: "AI for Innovation - Navigating the AI Technology Landscape",
    description: "Discover how to leverage AI technology for business innovation and stay competitive in the digital era.",
    date: "October 17, 2025",
    time: "14:00 - 15:30 WIB",
    location: "Online via Zoom",
    partner: "Alibaba Cloud",
    status: "past",
    imageUrl: "/events/ai-for-innovation-navigating-ai-technology-landscape.png",
  },
  {
    title: "Visualize AI Workflows and Multi-Agent for Clarity & Collaboration",
    description: "Learn how to design and visualize complex AI workflows with multi-agent orchestration.",
    date: "October 8, 2025",
    time: "14:00 - 15:30 WIB",
    location: "Online via Zoom",
    partner: "BytePlus",
    status: "past",
    imageUrl: "/events/visualize-ai-workflows-multi-agent-clarity-collaboration.png",
  },
  {
    title: "From Calls to Insight: Driving Growth with MiiTel & EasternStack",
    description: "Transform customer calls into actionable insights with AI-powered conversation intelligence.",
    date: "October 3, 2025",
    time: "14:00 - 15:30 WIB",
    location: "Online via Zoom",
    partner: "MiiTel",
    status: "past",
    imageUrl: "/events/from-calls-to-insight-driving-growth-with-miitel-easternstack.png",
  },
  {
    title: "AI Assisted Cross-Domain Root Cause Analysis",
    description: "Accelerate incident resolution with AI-powered cross-domain root cause analysis.",
    date: "September 25, 2025",
    time: "14:00 - 15:30 WIB",
    location: "Online via Zoom",
    partner: "TrueWatch",
    status: "past",
    imageUrl: "/events/ai-assisted-cross-domain-root-cause-analysis.png",
  },
  {
    title: "Improve Your Business Continuity Strategy using DR Solution with OnePro HyperBDR",
    description: "Strengthen your business continuity strategy with advanced disaster recovery solutions.",
    date: "September 19, 2025",
    time: "14:00 - 15:30 WIB",
    location: "Online via Zoom",
    partner: "OnePro",
    status: "past",
    imageUrl: "/events/improve-business-continuity-strategy-dr-onepro-hyperbdr.png",
  },
];

async function seed() {
  console.log("Seeding webinars...");
  await db.insert(webinars).values(seedData);
  console.log("Seeded 5 webinars!");
}

seed().catch(console.error);
