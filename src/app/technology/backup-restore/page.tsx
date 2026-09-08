import Link from "next/link";
import type { Metadata } from "next";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "Enterprise Backup & Restore for Critical Data | EasternStack",
  description:
    "Automated backup and restore for enterprises in Indonesia — point-in-time database recovery, geo-redundant object storage, and bare-metal server restore.",
  alternates: { canonical: "/technology/backup-restore" },
  openGraph: {
    title: "Enterprise Backup & Restore for Critical Data | EasternStack",
    description:
      "Reliable data protection with automated database backup, file and object storage, and full server imaging with bare-metal restore.",
    url: "https://easternstack.ai/technology/backup-restore",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — Enterprise Backup & Restore",
      },
    ],
  },
};

export default function BackupRestorePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <img src="/logo.png" alt="EasternStack.AI" className="mx-auto h-12 w-auto md:h-14" />
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              Technology · Backup &amp; Restore
            </p>
            <h1 className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Data protection, <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">automated</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Automated backup and restore solutions ensuring your critical data is always protected and recoverable.
            </p>
          </div>
        </div>
      </section>

      {/* Backup Solutions */}
      <section className="border-y border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Solutions</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Backup solutions
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">Database backup</h3>
              <p className="mt-2 text-gray-600">
                Automated backups for MySQL, MongoDB, and other enterprise databases with point-in-time recovery.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Automated daily backups
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Transaction log backup
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Cross-region replication
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Point-in-time restore
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">File &amp; object storage</h3>
              <p className="mt-2 text-gray-600">
                Scalable object storage with versioning and lifecycle policies for unstructured data backup.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Unlimited storage capacity
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Object versioning
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Lifecycle management
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Geo-redundant storage
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">Server &amp; VM backup</h3>
              <p className="mt-2 text-gray-600">
                Complete server image backup with bare-metal restore capabilities for quick disaster recovery.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Full server imaging
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Incremental backups
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Bare-metal restore
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Cross-platform support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WeastCta tourHref="/#demo-ide" brand="our platform" />
    </div>
  );
}
