import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export function generateMetadata(): Metadata {
  // Use Vercel preview URL or production URL
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL 
    || "https://easternstack.com";
  
  return {
    title: "EasternStack - Enterprise AI",
    description: "Enterprise AI with Greater Model Choice and Operational Control",

    openGraph: {
      title: "EasternStack - Enterprise AI",
      description: "Enterprise AI with Greater Model Choice and Operational Control",
      url: baseUrl,
      siteName: "EasternStack",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/logo_head.png`,
          width: 1200,
          height: 1200,
          alt: "EasternStack Logo",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "EasternStack - Enterprise AI",
      description: "Enterprise AI with Greater Model Choice and Operational Control",
    },

    // LinkedIn uses og:image primarily - explicit meta tags for better compatibility
    other: {
      "og:image": `${baseUrl}/logo_head.png`,
      "og:image:width": "1200",
      "og:image:height": "1200",
      "og:image:type": "image/png",
      "og:image:alt": "EasternStack Logo",
    },

    icons: {
      icon: [
        { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: '/favicon_io/apple-touch-icon.png',
      shortcut: '/favicon_io/favicon.ico',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon_io/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon_io/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ScrollToTop />
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
