import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions & Agentic AI Platform | EasternStack",
  description:
    "Deploy an AI agent workforce over your private knowledge with Weast — EasternStack's enterprise agentic AI platform with secure, multi-model orchestration.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Enterprise AI Solutions & Agentic AI Platform | EasternStack",
    description:
      "Deploy an AI agent workforce over your private knowledge with Weast — EasternStack's enterprise agentic AI platform with secure, multi-model orchestration.",
    url: "https://easternstack.ai/solutions",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — Enterprise AI Solutions & Agentic AI Platform",
      },
    ],
  },
};

export default function SolutionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
