import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | EasternStack",
  description:
    "Your message has been received. The EasternStack team will get back to you shortly.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/thank-you",
  },
};

export default function ThankYouLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
