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
  // Production URL for easternstack.com
  const baseUrl = 'https://easternstack.com';
  
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
      images: [
        {
          url: `${baseUrl}/logo_head.png`,
          width: 1200,
          height: 1200,
          alt: "EasternStack Logo",
        },
      ],
    },

    // Explicit meta tags for LinkedIn scraper
    other: {
      "og:image": `${baseUrl}/logo_head.png`,
      "og:image:width": "1200",
      "og:image:height": "1200",
      "og:image:type": "image/png",
      "og:image:alt": "EasternStack Logo",
      "og:image:secure_url": `${baseUrl}/logo_head.png`,
      // Tell scrapers which image to use
      "image_src": `${baseUrl}/logo_head.png`,
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
  // Get the deployment URL from environment variable
  const baseUrl = typeof window !== 'undefined' 
    ? window.location.origin 
    : process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_SITE_URL 
        || "https://easternstack.com";

  return (
    <html lang="en">
      <head>
        {/* Tell scrapers which image to use for OG */}
        <link rel="image_src" href={`${baseUrl}/logo_head.png`} />
        <link rel="preload" as="image" href={`${baseUrl}/logo_head.png`} />
        
        {/* LinkedIn OG Image - explicit format per LinkedIn documentation */}
        <meta name="image" property="og:image" content={`${baseUrl}/logo_head.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:alt" content="EasternStack Logo" />
        <meta property="og:image:secure_url" content={`${baseUrl}/logo_head.png`} />
        
        {/* Twitter Card */}
        <meta name="twitter:image" content={`${baseUrl}/logo_head.png`} />
        <meta name="twitter:image:alt" content="EasternStack Logo" />
        
        {/* Standard favicon links */}
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
