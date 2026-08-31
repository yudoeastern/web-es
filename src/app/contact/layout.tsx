import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | EasternStack",
  description:
    "Contact EasternStack to discuss enterprise AI solutions — agentic AI, intelligent document processing, and AI transformation for your organization in Indonesia.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | EasternStack",
    description:
      "Talk to EasternStack about enterprise AI for your organization. Jakarta-based team, enterprise-grade delivery.",
    url: "https://easternstack.com/contact",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.com/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — Contact Us",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
