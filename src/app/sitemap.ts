import type { MetadataRoute } from "next";
import { db } from "@/db";
import { webinars } from "@/db/schema";

const baseUrl = "https://easternstack.ai";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/case-studies", changeFrequency: "weekly", priority: 0.6 },
  { path: "/events", changeFrequency: "weekly", priority: 0.7 },

  { path: "/solutions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/weast-core", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solutions/agentic-ai", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/ai-assistant", changeFrequency: "monthly", priority: 0.6 },
  { path: "/solutions/churn-prediction", changeFrequency: "monthly", priority: 0.6 },
  { path: "/solutions/forecasting", changeFrequency: "monthly", priority: 0.6 },
  { path: "/solutions/fraud-detection", changeFrequency: "monthly", priority: 0.6 },
  { path: "/solutions/loan-processing", changeFrequency: "monthly", priority: 0.6 },
  { path: "/solutions/ocr-solutions", changeFrequency: "monthly", priority: 0.6 },
  { path: "/solutions/supply-chain", changeFrequency: "monthly", priority: 0.6 },
  { path: "/solutions/ai", changeFrequency: "monthly", priority: 0.6 },
  { path: "/solutions/ai/agentic-ai-assistant", changeFrequency: "monthly", priority: 0.5 },
  { path: "/solutions/ai/ai-agent-builder", changeFrequency: "monthly", priority: 0.5 },
  { path: "/solutions/ai/autonomous-agents", changeFrequency: "monthly", priority: 0.5 },
  { path: "/solutions/ai/copilot-suite", changeFrequency: "monthly", priority: 0.5 },
  { path: "/solutions/ai/intelligent-document-processing", changeFrequency: "monthly", priority: 0.5 },

  { path: "/technology", changeFrequency: "monthly", priority: 0.8 },
  { path: "/technology/backup-restore", changeFrequency: "monthly", priority: 0.6 },
  { path: "/technology/cloud-migration", changeFrequency: "monthly", priority: 0.6 },
  { path: "/technology/compliance", changeFrequency: "monthly", priority: 0.6 },
  { path: "/technology/container-services", changeFrequency: "monthly", priority: 0.6 },
  { path: "/technology/cost-optimization", changeFrequency: "monthly", priority: 0.6 },
  { path: "/technology/data-governance", changeFrequency: "monthly", priority: 0.6 },
  { path: "/technology/data-lakehouse", changeFrequency: "monthly", priority: 0.6 },
  { path: "/technology/data-warehouse", changeFrequency: "monthly", priority: 0.6 },
  { path: "/technology/disaster-recovery", changeFrequency: "monthly", priority: 0.6 },
  { path: "/technology/impact", changeFrequency: "monthly", priority: 0.6 },
  { path: "/technology/roi-metrics", changeFrequency: "monthly", priority: 0.6 },
  { path: "/technology/streaming", changeFrequency: "monthly", priority: 0.6 },
  { path: "/technology/zero-trust-ai", changeFrequency: "monthly", priority: 0.6 },
  { path: "/technology/security/ahnlab", changeFrequency: "monthly", priority: 0.5 },
  { path: "/technology/security/truewatch", changeFrequency: "monthly", priority: 0.5 },

  { path: "/industries", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/energy-utilities", changeFrequency: "monthly", priority: 0.6 },
  { path: "/industries/financial-services", changeFrequency: "monthly", priority: 0.6 },
  { path: "/industries/healthcare", changeFrequency: "monthly", priority: 0.6 },
  { path: "/industries/legal", changeFrequency: "monthly", priority: 0.6 },
  { path: "/industries/logistics", changeFrequency: "monthly", priority: 0.6 },
  { path: "/industries/manufacturing", changeFrequency: "monthly", priority: 0.6 },
  { path: "/industries/public-sector", changeFrequency: "monthly", priority: 0.6 },
  { path: "/industries/retail-ecommerce", changeFrequency: "monthly", priority: 0.6 },
  { path: "/industries/telecommunications", changeFrequency: "monthly", priority: 0.6 },
];

function parseUpdatedAt(value: string): Date | undefined {
  // Rows written by SQLite's CURRENT_TIMESTAMP come as "YYYY-MM-DD HH:MM:SS" (UTC),
  // which is not a valid W3C date — normalize before use.
  const normalized = value.includes("T") ? value : `${value.replace(" ", "T")}Z`;
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const allWebinars = await db.select().from(webinars);
  for (const webinar of allWebinars) {
    entries.push({
      url: `${baseUrl}/events/${webinar.id}`,
      lastModified: parseUpdatedAt(webinar.updatedAt),
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  return entries;
}
