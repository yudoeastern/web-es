import Link from "next/link";
import type { Metadata } from "next";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "Enterprise Data Warehouse for Analytics & ML | EasternStack",
  description:
    "High-performance data warehousing with massively parallel processing, columnar storage, and in-database ML training for petabyte-scale analytics.",
  alternates: { canonical: "/technology/data-warehouse" },
  openGraph: {
    title: "Enterprise Data Warehouse for Analytics & ML | EasternStack",
    description:
      "High-performance analytics for complex reporting and ML model training — MPP, columnar storage, and elastic cost optimization.",
    url: "https://easternstack.ai/technology/data-warehouse",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — Enterprise Data Warehouse",
      },
    ],
  },
};

const CAPABILITIES = [
  {
    title: "Massive parallel processing",
    body: "Distribute complex queries across hundreds of nodes for lightning-fast results.",
    items: ["Petabyte-scale queries", "Sub-second response times", "Concurrent user support"],
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Columnar storage",
    body: "Optimized storage format for analytical queries with superior compression.",
    items: ["Industry-leading compression", "Faster aggregations", "Predicate pushdown"],
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: "ML integration",
    body: "Train ML models directly on warehouse data without data movement.",
    items: ["In-database ML training", "Feature store integration", "Model scoring at scale"],
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Cost optimization",
    body: "Pay only for what you use with elastic scaling and intelligent tiering.",
    items: ["Storage tiering", "Compute autoscaling", "Query optimization"],
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const BENEFITS = [
  {
    title: "Unified reporting",
    body: "Consolidate data from multiple systems into a single source of truth for consistent enterprise reporting.",
  },
  {
    title: "Self-service analytics",
    body: "Enable business teams to explore data and build reports without dependency on engineering.",
  },
  {
    title: "Data freshness",
    body: "Near real-time data loading ensures decisions are based on the latest available information.",
  },
  {
    title: "Multi-cloud flexibility",
    body: "Deploy on Alibaba Cloud, Huawei Cloud, or Tencent Cloud based on your infrastructure strategy.",
  },
  {
    title: "Enterprise security",
    body: "Row-level security, column masking, and encryption at rest and in transit for sensitive data.",
  },
];

function CardIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
      {children}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
    </svg>
  );
}

export default function DataWarehousePage() {
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
              Technology · Data Warehouse
            </p>
            <h1 className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              High-performance{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                analytics
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Enterprise data warehousing optimized for complex analytics, reporting, and ML model training at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Warehouse capabilities */}
      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Warehouse capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Engineered for analytical workloads
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <CardIcon>{c.icon}</CardIcon>
                <h3 className="mt-4 text-[15px] font-bold text-[#1A1A1A]">{c.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{c.body}</p>
                <ul className="mt-4 space-y-2 text-[13px] text-gray-600">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise benefits */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Enterprise benefits
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              What this means for your organization
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {BENEFITS.map((c) => (
              <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <CardIcon>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </CardIcon>
                <h3 className="mt-4 text-[15px] font-bold text-[#1A1A1A]">{c.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WeastCta tourHref="/#demo-ide" brand="our platform" />
    </div>
  );
}
