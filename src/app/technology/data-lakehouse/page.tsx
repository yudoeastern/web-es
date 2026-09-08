import Link from "next/link";
import type { Metadata } from "next";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "Data Lakehouse for Petabyte-Scale AI | EasternStack",
  description:
    "Unified data lakehouse combining lake flexibility with warehouse performance — ACID transactions, petabyte-scale storage, and AI-ready architecture.",
  alternates: { canonical: "/technology/data-lakehouse" },
  openGraph: {
    title: "Data Lakehouse for Petabyte-Scale AI | EasternStack",
    description:
      "Build AI on a unified analytics platform — Alibaba Cloud MaxCompute, Huawei Cloud DWS, and Tencent Cloud EMR for petabyte-scale AI workloads.",
    url: "https://easternstack.ai/technology/data-lakehouse",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — Data Lakehouse for AI at Scale",
      },
    ],
  },
};

const WHY_ITEMS = [
  {
    title: "Lake flexibility",
    body: "Store structured, semi-structured, and unstructured data in any format with schema-on-read flexibility.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: "Warehouse performance",
    body: "ACID transactions, optimized queries, and indexing for enterprise-grade analytics performance.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "AI-ready architecture",
    body: "Unified data foundation for ML model training, feature engineering, and AI application development.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const FEATURES = [
  {
    title: "Multi-format support",
    items: ["Parquet, ORC, JSON, CSV, Avro", "Images, videos, and documents", "Time-series and geospatial data"],
  },
  {
    title: "ACID transactions",
    items: ["Serializable isolation level", "Concurrent read/write operations", "Data consistency guarantees"],
  },
  {
    title: "Query optimization",
    items: ["Automatic index creation", "Query plan optimization", "Caching and materialized views"],
  },
  {
    title: "Scalability",
    items: ["Petabyte-scale storage", "Elastic compute scaling", "Separation of storage and compute"],
  },
];

const PARTNERS = [
  { name: "Alibaba Cloud MaxCompute", logo: "/partner/Alibaba_Cloud_Logo.png", h: "h-16", body: "Enterprise data warehousing with petabyte-scale analytics capabilities." },
  { name: "Huawei Cloud DWS", logo: "/partner/huawei.jpg", h: "h-14", body: "Cloud data warehouse with high performance and elasticity." },
  { name: "Tencent Cloud EMR", logo: "/partner/tencent.png", h: "h-14", body: "Managed Hadoop/Spark for big data processing and analytics." },
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

export default function DataLakehousePage() {
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
              Technology · Data Lakehouse
            </p>
            <h1 className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Unified{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                analytics platform
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Combine the flexibility of data lakes with the performance of data warehouses for petabyte-scale AI workloads.
            </p>
          </div>
        </div>
      </section>

      {/* Why data lakehouse */}
      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Why data lakehouse
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              One platform for all your analytical data
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {WHY_ITEMS.map((c) => (
              <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <CardIcon>{c.icon}</CardIcon>
                <h3 className="mt-4 text-[15px] font-bold text-[#1A1A1A]">{c.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Key features
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Built for scale, built for speed
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-[15px] font-bold text-[#1A1A1A]">{f.title}</h3>
                <ul className="mt-4 space-y-3 text-[13px] text-gray-600">
                  {f.items.map((item) => (
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

      {/* Technology partners */}
      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Powered by eastern technology
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Cloud partners behind every deployment
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {PARTNERS.map((p) => (
              <div key={p.name} className="rounded-xl border border-gray-200 bg-white p-6 text-center">
                <div className="mb-4 flex h-20 items-center justify-center">
                  <img src={p.logo} alt={p.name} className={`${p.h} w-auto object-contain`} />
                </div>
                <h3 className="text-[15px] font-bold text-[#1A1A1A]">{p.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WeastCta tourHref="/#demo-ide" brand="our platform" />
    </div>
  );
}
