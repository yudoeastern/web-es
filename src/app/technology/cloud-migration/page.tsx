import Link from "next/link";
import type { Metadata } from "next";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "Cloud Migration to Alibaba, Huawei & Tencent Cloud | EasternStack",
  description:
    "Minimal-downtime cloud migration for enterprises in Indonesia with meaningful cost reduction and lower Asia-Pacific latency on Alibaba, Huawei, and Tencent Cloud.",
  alternates: { canonical: "/technology/cloud-migration" },
  openGraph: {
    title: "Cloud Migration to Alibaba, Huawei & Tencent Cloud | EasternStack",
    description:
      "Move to affordable Eastern cloud infrastructure with minimal downtime, meaningful cost savings, and a proven five-step migration process.",
    url: "https://easternstack.ai/technology/cloud-migration",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — Cloud Migration to Eastern Cloud",
      },
    ],
  },
};

export default function CloudMigrationPage() {
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
              Technology · Cloud Migration
            </p>
            <h1 className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Move to <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">affordable cloud</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Seamless migration to powerful Eastern cloud infrastructure with minimal downtime and maximum cost savings on Alibaba, Huawei, and Tencent Cloud.
            </p>
          </div>
        </div>
      </section>

      {/* Why Migrate */}
      <section className="border-y border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Benefits</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Why migrate to Eastern cloud?
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">Meaningful cost reduction</h3>
              <p className="mt-2 text-gray-600">
                Meaningfully reduce cloud infrastructure costs compared to Western providers with no compromise on performance.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">Minimal downtime</h3>
              <p className="mt-2 text-gray-600">
                Phased migration approach ensures your business operations continue uninterrupted throughout the transition.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">Enhanced performance</h3>
              <p className="mt-2 text-gray-600">
                Eastern cloud providers offer superior performance in the Asia-Pacific region with lower latency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Process</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Our migration process
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <span className="text-lg font-bold text-white">1</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#1A1A1A]">Assessment</h3>
              <p className="mt-2 text-sm text-gray-600">Analyze current infrastructure and identify migration candidates.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <span className="text-lg font-bold text-white">2</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#1A1A1A]">Planning</h3>
              <p className="mt-2 text-sm text-gray-600">Create detailed migration plan with timeline and risk mitigation.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <span className="text-lg font-bold text-white">3</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#1A1A1A]">Testing</h3>
              <p className="mt-2 text-sm text-gray-600">Validate migration in staging environment before production move.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <span className="text-lg font-bold text-white">4</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#1A1A1A]">Migration</h3>
              <p className="mt-2 text-sm text-gray-600">Execute phased migration with real-time monitoring and rollback capability.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <span className="text-lg font-bold text-white">5</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#1A1A1A]">Optimization</h3>
              <p className="mt-2 text-sm text-gray-600">Fine-tune performance and costs post-migration for maximum ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="border-y border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Partners</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Powered by Eastern cloud
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <div className="mb-4 flex h-20 items-center justify-center">
                <img src="/partner/Alibaba_Cloud_Logo.png" alt="Alibaba Cloud" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Alibaba Cloud</h3>
              <p className="mt-2 text-sm text-gray-600">Leading cloud provider in Asia with comprehensive AI and data services.</p>
              <ul className="mt-4 space-y-2 text-left text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Elastic Compute Service
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  ApsaraDB
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Object Storage Service
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  CDN &amp; Networking
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <div className="mb-4 flex h-20 items-center justify-center">
                <img src="/partner/huawei.jpg" alt="Huawei Cloud" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Huawei Cloud</h3>
              <p className="mt-2 text-sm text-gray-600">Enterprise-grade cloud with strong focus on security and compliance.</p>
              <ul className="mt-4 space-y-2 text-left text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Elastic Cloud Server
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  GaussDB
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Cloud Container Engine
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  AI Development Platform
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <div className="mb-4 flex h-20 items-center justify-center">
                <img src="/partner/tencent.png" alt="Tencent Cloud" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Tencent Cloud</h3>
              <p className="mt-2 text-sm text-gray-600">Gaming and media optimized cloud with global CDN coverage.</p>
              <ul className="mt-4 space-y-2 text-left text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Cloud Virtual Machine
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  TencentDB
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Media Processing
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Gaming Solutions
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
