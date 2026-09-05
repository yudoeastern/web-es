import type { Metadata } from "next";
import type { ReactNode } from "react";

const baseUrl = "https://easternstack.ai";

// Mirrors the industry content in ./page.tsx. That file is a Client
// Component, so its data map cannot be imported into this Server Component —
// keep the two in sync when editing industry content.
const industryMetadata: Record<
  string,
  { title: string; description: string }
> = {
  "real-estate": {
    title: "AI for Real Estate",
    description:
      "Transform property management, valuation, and customer experience with AI-powered real estate solutions for enterprises in Indonesia.",
  },
  insurance: {
    title: "AI for Insurance",
    description:
      "Streamline claims processing, underwriting, and customer service with AI-powered insurance solutions for enterprises in Indonesia.",
  },
  consulting: {
    title: "AI for Consulting",
    description:
      "Enhance client insights, research, and deliverables with AI-powered consulting tools for firms in Indonesia.",
  },
  education: {
    title: "AI for Education",
    description:
      "Personalize learning, automate administration, and improve student outcomes with AI solutions for education institutions in Indonesia.",
  },
  hospitality: {
    title: "AI for Hospitality",
    description:
      "Enhance guest experience, optimize operations, and boost revenue with AI-powered hospitality solutions for enterprises in Indonesia.",
  },
  "food-beverage": {
    title: "AI for Food & Beverage",
    description:
      "Optimize supply chains, personalize menus, and enhance customer experience with AI solutions for food and beverage businesses in Indonesia.",
  },
  "saas-software": {
    title: "AI for SaaS & Software",
    description:
      "Accelerate development, improve customer support, and optimize operations with AI-powered software solutions.",
  },
  gaming: {
    title: "AI for Gaming",
    description:
      "Enhance player experience, optimize game development, and prevent fraud with AI gaming solutions.",
  },
  cybersecurity: {
    title: "AI for Cybersecurity",
    description:
      "Detect threats, automate response, and protect assets with AI-powered cybersecurity solutions.",
  },
  automotive: {
    title: "AI for Automotive",
    description:
      "Optimize manufacturing, enhance safety, and improve customer experience with AI automotive solutions.",
  },
  chemical: {
    title: "AI for Chemical",
    description:
      "Optimize production, ensure safety, and reduce environmental impact with AI chemical solutions.",
  },
};

type IndustryLayoutProps = {
  params: Promise<{ industry: string }>;
};

export async function generateMetadata({
  params,
}: IndustryLayoutProps): Promise<Metadata> {
  const { industry } = await params;

  const known = industryMetadata[industry];
  const pageTitle = known
    ? `${known.title} | EasternStack`
    : `AI for ${industry
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())} | EasternStack`;
  const pageDescription =
    known?.description ??
    "Transform your industry with AI-powered solutions for intelligent automation and enhanced customer experiences — built by EasternStack.";

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/industries/${industry}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${baseUrl}/industries/${industry}`,
      siteName: "EasternStack",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/logo_head.png`,
          width: 1200,
          height: 1200,
          alt: `EasternStack — ${pageTitle.replace(" | EasternStack", "")}`,
        },
      ],
    },
  };
}

export default function IndustryLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
