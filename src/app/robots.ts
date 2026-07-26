import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/esadm", "/api"],
    },
    sitemap: "https://easternstack.com/sitemap.xml",
  };
}
