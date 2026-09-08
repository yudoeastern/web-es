import Link from "next/link";
import type { Metadata } from "next";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "Disaster Recovery for Enterprise AI | EasternStack",
  description:
    "Enterprise disaster recovery built for continuous availability: pilot light, warm standby, and multi-site active failover with rapid recovery times.",
  alternates: { canonical: "/technology/disaster-recovery" },
  openGraph: {
    title: "Disaster Recovery for Enterprise AI | EasternStack",
    description:
      "Business continuity assured with enterprise-grade availability, frequent recovery points, and 24/7 monitoring for mission-critical workloads.",
    url: "https://easternstack.ai/technology/disaster-recovery",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — Disaster Recovery & Business Continuity",
      },
    ],
  },
};

export default function DisasterRecoveryPage() {
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
              Technology · Disaster Recovery
            </p>
            <h1 className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Business continuity <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">assured</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Enterprise-grade disaster recovery solutions ensuring your business stays operational even in the face of disruptions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="border-y border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Key Metrics</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Why disaster recovery matters
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-3xl font-extrabold bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">High</p>
              <h3 className="mt-2 text-base font-semibold text-[#1A1A1A]">Availability</h3>
              <p className="mt-2 text-sm text-gray-600">Enterprise-grade availability with multi-region redundancy.</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-3xl font-extrabold bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">Rapid</p>
              <h3 className="mt-2 text-base font-semibold text-[#1A1A1A]">Recovery time</h3>
              <p className="mt-2 text-sm text-gray-600">Rapid failover to minimize business disruption.</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-3xl font-extrabold bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">Frequent</p>
              <h3 className="mt-2 text-base font-semibold text-[#1A1A1A]">Recovery point</h3>
              <p className="mt-2 text-sm text-gray-600">Minimal data loss with continuous replication.</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-3xl font-extrabold bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">24/7</p>
              <h3 className="mt-2 text-base font-semibold text-[#1A1A1A]">Monitoring</h3>
              <p className="mt-2 text-sm text-gray-600">Round-the-clock infrastructure surveillance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DR Solutions */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Solutions</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Disaster recovery solutions
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">Pilot light</h3>
              <p className="mt-2 text-gray-600">
                Minimal footprint DR setup with core infrastructure always running, ready to scale up during disaster.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Cost-effective DR solution
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Quick recovery (2-4 hours)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Ideal for non-critical workloads
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">Warm standby</h3>
              <p className="mt-2 text-gray-600">
                Scaled-down version of production environment running continuously, ready for rapid scale-up.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Balanced cost and recovery time
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Recovery in 30-60 minutes
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Suitable for business-critical apps
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">Multi-site active</h3>
              <p className="mt-2 text-gray-600">
                Full production environment running across multiple regions with automatic failover.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Highest availability tier
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Fast failover
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Mission-critical workloads
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">Backup &amp; restore</h3>
              <p className="mt-2 text-gray-600">
                Automated backup solution with point-in-time recovery capabilities across all data types.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Automated daily backups
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Point-in-time recovery
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Geo-redundant storage
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
