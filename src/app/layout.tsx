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
  // Hardcode ngrok URL for development/testing
  // Change this when ngrok URL changes
  const ngrokUrl = 'https://easternstack.com';
  const productionUrl = 'https://easternstack.com';
  
  // Use ngrok for local production builds, easternstack.com for Vercel
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ngrokUrl;
  
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
          url: `${baseUrl}/og-image.png`,
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
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 1200,
          alt: "EasternStack Logo",
        },
      ],
    },

    // LinkedIn uses og:image primarily - explicit meta tags for better compatibility
    other: {
      "og:image": `${baseUrl}/og-image.png`,
      "og:image:width": "1200",
      "og:image:height": "1200",
      "og:image:type": "image/png",
      "og:image:alt": "EasternStack Logo",
      "og:image:secure_url": `${baseUrl}/og-image.png`,
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
        {/* Dynamic OG Image Script - overrides static meta tags for LinkedIn */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var currentUrl = window.location.origin;
                  var ogImage = currentUrl + '/og-image.png';
                  
                  // Update all og:image meta tags
                  var ogImageTags = document.querySelectorAll('meta[property="og:image"], meta[name="og:image"]');
                  ogImageTags.forEach(function(tag) {
                    tag.setAttribute('content', ogImage);
                  });
                  
                  // Update twitter:image
                  var twitterImageTags = document.querySelectorAll('meta[name="twitter:image"]');
                  twitterImageTags.forEach(function(tag) {
                    tag.setAttribute('content', ogImage);
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
        
        {/* LinkedIn OG Image - explicit format per LinkedIn documentation */}
        <meta name="image" property="og:image" content={`${baseUrl}/og-image.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:alt" content="EasternStack Logo" />
        <meta property="og:image:secure_url" content={`${baseUrl}/og-image.png`} />
        
        {/* Twitter Card */}
        <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
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
