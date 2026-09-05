import Link from "next/link";
import type { Metadata } from "next";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "Enterprise Technology for AI at Scale | EasternStack",
  description:
    "EasternStack's infrastructure for enterprise AI: unified data platform, cloud modernization, and zero-trust AI security, powered with Alibaba Cloud, Huawei Cloud, and Tencent Cloud.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "Enterprise Technology for AI at Scale | EasternStack",
    description:
      "Unified data, cloud modernization, and zero-trust AI architecture. The technology layer behind every EasternStack deployment.",
    url: "https://easternstack.ai/technology",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack, enterprise technology for AI at scale",
      },
    ],
  },
};

const PARTNERS = [
  { name: "Alibaba Cloud", logo: "/partner/Alibaba_Cloud_Logo.png", h: "h-20" },
  { name: "Huawei Cloud", logo: "/partner/huawei.jpg", h: "h-14" },
  { name: "Tencent Cloud", logo: "/partner/tencent.png", h: "h-14" },
  { name: "OnePro", logo: "/partner/onepro.png", h: "h-14" },
  { name: "AhnLab", logo: "/partner/ahnlab.jpg", h: "h-14" },
  { name: "TrueWatch", logo: "/partner/true_watch_logo.svg", h: "h-14" },
];

const DATA_PLATFORM = [
  {
    title: "Modern Data Lakehouse",
    body: "Unified analytics combining lake flexibility with warehouse performance for enterprise-scale AI workloads.",
    href: "/technology/data-lakehouse",
  },
  {
    title: "Enterprise Data Warehouse",
    body: "High-performance warehousing optimized for complex analytics, reporting, and model training at scale.",
    href: "/technology/data-warehouse",
  },
  {
    title: "Real-Time Streaming",
    body: "Event-driven architecture for instant insights and responsive agents on live business data.",
    href: "/technology/streaming",
  },
  {
    title: "Data Governance",
    body: "Quality, lineage, access control, and compliance across your whole data estate.",
    href: "/technology/data-governance",
  },
  {
    title: "Backup & Restore",
    body: "Database, file, and server backups with recovery drills your auditors can watch.",
    href: "/technology/backup-restore",
  },
];

const CLOUD_MODERN = [
  {
    n: "01",
    title: "Container Orchestration",
    body: "Kubernetes-native with auto-scaling, service mesh, and zero-downtime deployments.",
    href: "/technology/container-services",
  },
  {
    n: "02",
    title: "Infrastructure Automation",
    body: "GitOps workflows with infrastructure as code for consistent, auditable deployments.",
    href: "/technology/impact",
  },
  {
    n: "03",
    title: "FinOps Optimisation",
    body: "Cloud cost optimization that meaningfully reduces spend with no performance impact.",
    href: "/technology/cost-optimization",
  },
  {
    n: "04",
    title: "High Availability",
    body: "Multi-region resilience with disaster recovery and enterprise-grade availability.",
    href: "/technology/disaster-recovery",
  },
  {
    n: "05",
    title: "Cloud Migration",
    body: "Guided migration to Alibaba, Huawei, or Tencent Cloud with meaningful cost reduction.",
    href: "/technology/cloud-migration",
  },
];

const ZERO_TRUST = [
  {
    title: "Model Access Control",
    body: "Role-based permissions with zero-trust architecture.",
  },
  {
    title: "Data Leakage Prevention",
    body: "Advanced filtering to prevent sensitive data exposure.",
  },
  {
    title: "Prompt Injection Defense",
    body: "Multi-layered protection against adversarial inputs.",
  },
  {
    title: "Secure RAG Pipeline",
    body: "End-to-end encryption for retrieval-augmented generation workflows.",
  },
  {
    title: "Audit & Compliance",
    body: "Comprehensive logging of all AI interactions for compliance.",
    href: "/technology/compliance",
  },
  {
    title: "Policy Guardrails",
    body: "Configurable rules ensuring regulatory compliance.",
  },
];

const DEEP_DIVES = [
  { label: "Data Lakehouse", href: "/technology/data-lakehouse" },
  { label: "Data Warehouse", href: "/technology/data-warehouse" },
  { label: "Data Governance", href: "/technology/data-governance" },
  { label: "Streaming", href: "/technology/streaming" },
  { label: "Backup & Restore", href: "/technology/backup-restore" },
  { label: "Container Services", href: "/technology/container-services" },
  { label: "Cloud Migration", href: "/technology/cloud-migration" },
  { label: "Cost Optimization", href: "/technology/cost-optimization" },
  { label: "Disaster Recovery", href: "/technology/disaster-recovery" },
  { label: "Compliance", href: "/technology/compliance" },
  { label: "Cloud Modernization", href: "/technology/impact" },
  { label: "ROI Metrics", href: "/technology/roi-metrics" },
  { label: "Zero Trust AI", href: "/technology/zero-trust-ai" },
  { label: "AhnLab Security", href: "/technology/security/ahnlab" },
  { label: "TrueWatch Monitoring", href: "/technology/security/truewatch" },
];

function CardIcon() {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </span>
  );
}

export default function TechnologyPage() {
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
            <img
              src="/logo.png"
              alt="EasternStack.AI"
              className="mx-auto h-12 w-auto md:h-14"
            />
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              Technology · Infrastructure for AI at scale
            </p>
            <h1
              className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              The ground{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                enterprise AI stands on
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Unified data, cloud modernization, and zero-trust security, engineered so
              agentic AI runs reliably inside your infrastructure, on your terms.
            </p>
            <p className="mt-5 text-[13px] text-gray-500">
              Alibaba Cloud · Huawei Cloud · Tencent Cloud · OnePro · AhnLab · TrueWatch
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-gray-200 bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400">
            Our technology partners
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((p) => (
              <div key={p.name} className="flex items-center justify-center">
                <img src={p.logo} alt={p.name} className={`${p.h} w-auto object-contain opacity-80`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified data platform */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Unified data platform
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              A data foundation built for agent-scale workloads
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {DATA_PLATFORM.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#E31E24]/40 hover:shadow-lg"
              >
                <CardIcon />
                <h3 className="mt-4 text-[15px] font-bold text-[#1A1A1A] group-hover:text-[#E31E24]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{c.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud modernisation */}
      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Cloud modernisation
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Infrastructure that scales with your AI ambitions
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CLOUD_MODERN.map((c) => (
              <Link
                key={c.n}
                href={c.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#E31E24]/40 hover:shadow-lg"
              >
                <span className="font-mono text-[11px] font-bold text-[#E31E24]">{c.n}</span>
                <h3 className="mt-2 text-[15px] font-bold text-[#1A1A1A] group-hover:text-[#E31E24]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{c.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zero trust */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Zero-trust AI architecture
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Security controls your auditors will ask about
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ZERO_TRUST.map((c) => (
              <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <CardIcon />
                <h3 className="mt-4 text-[15px] font-bold text-[#1A1A1A]">{c.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{c.body}</p>
                {c.href && (
                  <Link href={c.href} className="mt-3 inline-block text-[12px] font-bold text-[#E31E24] hover:underline">
                    Learn more →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep dives */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Deep dives
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Explore every layer of the stack
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {DEEP_DIVES.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[12.5px] font-semibold text-gray-700 transition-all hover:border-[#E31E24]/50 hover:text-[#E31E24]"
              >
                {d.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WeastCta tourHref="/#demo-ide" brand="our platform" />
    </div>
  );
}
