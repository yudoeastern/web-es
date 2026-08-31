import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Everything is allowed for all crawlers (including AI crawlers like
      // GPTBot, ClaudeBot, PerplexityBot). Admin/API routes are intentionally
      // NOT mentioned here — listing them would expose their existence.
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://easternstack.com/sitemap.xml",
    host: "https://easternstack.com",
  };
}
