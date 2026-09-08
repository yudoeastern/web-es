import Link from "next/link";
import type { Metadata } from "next";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "Real-Time Streaming & Event-Driven Architecture | EasternStack",
  description:
    "Process millions of events per second — Flink stream processing, real-time analytics, anomaly detection, and event sourcing for responsive AI applications.",
  alternates: { canonical: "/technology/streaming" },
  openGraph: {
    title: "Real-Time Streaming & Event-Driven Architecture | EasternStack",
    description:
      "High-throughput event ingestion with sub-second processing — live dashboards, anomaly detection, and event sourcing with CQRS support.",
    url: "https://easternstack.ai/technology/streaming",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — Real-Time Streaming & Event-Driven Architecture",
      },
    ],
  },
};

const CAPABILITIES = [
  {
    title: "High-throughput ingestion",
    body: "Ingest millions of events per second from multiple sources with guaranteed delivery.",
    items: ["IoT sensor data streaming", "Clickstream and user behavior", "Financial transactions"],
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Real-time processing",
    body: "Process and analyze streaming data in real-time with sub-second latency.",
    items: ["Stream processing with Flink", "Complex event processing", "Real-time aggregations"],
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Real-time analytics",
    body: "Gain instant insights with real-time dashboards and anomaly detection.",
    items: ["Live dashboards", "Anomaly detection", "Predictive alerts"],
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Event sourcing",
    body: "Build event-driven architectures with complete audit trails and state reconstruction.",
    items: ["Event store with replay", "CQRS pattern support", "Microservices integration"],
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const USE_CASES = [
  {
    title: "Fraud detection",
    body: "Identify suspicious transactions and behavioral anomalies in real-time before damage spreads.",
  },
  {
    title: "IoT monitoring",
    body: "Process sensor data from thousands of devices for predictive maintenance and operational visibility.",
  },
  {
    title: "Live personalization",
    body: "Adapt user experiences on the fly based on real-time behavioral signals and contextual data.",
  },
  {
    title: "Supply chain visibility",
    body: "Track shipments, inventory, and logistics events as they happen across your entire supply network.",
  },
  {
    title: "AI agent triggers",
    body: "Activate agentic workflows from streaming events so your AI responds instantly to business signals.",
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

export default function StreamingPage() {
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
              Technology · Real-Time Streaming
            </p>
            <h1 className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Event-driven{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                architecture
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Process millions of events per second with real-time streaming for instant insights and responsive AI applications.
            </p>
          </div>
        </div>
      </section>

      {/* Streaming capabilities */}
      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Streaming capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              From ingestion to insight in milliseconds
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

      {/* Use cases */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Use cases
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Where real-time streaming delivers impact
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {USE_CASES.map((c) => (
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
