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

export const metadata: Metadata = {
  title: "EasternStack - Enterprise AI",
  description: "Enterprise AI with Greater Model Choice and Operational Control",

  openGraph: {
    title: "EasternStack - Enterprise AI",
    description: "Enterprise AI with Greater Model Choice and Operational Control",
    url: "https://easternstack.com",
    siteName: "EasternStack",
    images: [
      {
        url: "https://easternstack.com/logo.png",
        width: 1200,
        height: 627,
      },
    ],
    type: "website",
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
