import type { Metadata } from "next";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "Cloud Modernisation with Measurable Impact | EasternStack",
  description:
    "Modernize your cloud with measurable outcomes: meaningful licensing savings, multi-cloud vendor independence, disaster recovery, containers, and FinOps.",
  alternates: { canonical: "/technology/impact" },
  openGraph: {
    title: "Cloud Modernisation with Measurable Impact | EasternStack",
    description:
      "Cloud adoption driven by measurable performance and cost outcomes — scale fast, spend smart, stay secure.",
    url: "https://easternstack.ai/technology/impact",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — Measurable Cloud Impact",
      },
    ],
  },
};

const WHY_ITEMS = [
  {
    label: "Lower spend",
    title: "Cost Freedom",
    body: "Meaningfully reduce licensing costs through open-source alternatives.",
  },
  {
    label: "No lock-in",
    title: "Vendor Independence",
    body: "Multi-cloud strategy ensures no single-provider dependency.",
  },
  {
    label: "24/7",
    title: "Innovation Power",
    body: "Advanced cloud-native solutions with enterprise reliability.",
  },
  {
    label: "Resilient",
    title: "Risk Diversification",
    body: "Distributed architecture minimizes operational vulnerabilities.",
  },
];

const HOW_ITEMS = [
  {
    step: "01",
    title: "Cloud Migration",
    body: "Move to affordable and powerful cloud services with seamless migration.",
  },
  {
    step: "02",
    title: "Disaster Recovery",
    body: "Drive business continuity by adopting disaster recovery solution.",
  },
  {
    step: "03",
    title: "Backup & Restore",
    body: "Enable data availability through backup and restore solution.",
  },
  {
    step: "04",
    title: "Container Services",
    body: "Initiate and deploy microservice architecture containerization setup.",
  },
  {
    step: "05",
    title: "Content Delivery",
    body: "Global CDN with enhanced security and performance optimization.",
  },
  {
    step: "06",
    title: "Observability",
    body: "Understand service performance through end-to-end observability tools.",
  },
  {
    step: "07",
    title: "FinOps",
    body: "Optimize cloud costs with real-time monitoring and recommendations.",
  },
  {
    step: "08",
    title: "Security",
    body: "Enterprise-grade security with Zero-Trust architecture.",
  },
];

const PARTNERS = [
  { name: "Alibaba Cloud", logo: "/partner/Alibaba_Cloud_Logo.png", h: "h-20" },
  { name: "Huawei Cloud", logo: "/partner/huawei.jpg", h: "h-14" },
  { name: "Tencent Cloud", logo: "/partner/tencent.png", h: "h-14" },
  { name: "OnePro", logo: "/partner/onepro.png", h: "h-14" },
  { name: "AhnLab", logo: "/partner/ahnlab.jpg", h: "h-14" },
  { name: "TrueWatch", logo: "/partner/true_watch_logo.svg", h: "h-14" },
];

export default function ImpactPage() {
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
              Technology · Measurable Impact
            </p>
            <h1 className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Modernize your cloud to{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">scale faster</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Cloud adoption driven by measurable performance and cost outcomes. Scale fast, spend smart, stay secure.
            </p>
          </div>
        </div>
      </section>

      {/* Why cloud adoption on EasternStack */}
      <section className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Benefits</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Why cloud adoption on EasternStack?
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_ITEMS.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 text-center">
                <p className="text-4xl font-extrabold bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                  {item.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[#1A1A1A]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Process</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Here is how it works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Scale fast. Spend smart. Stay secure.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_ITEMS.map((item) => (
              <div key={item.step} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                  <span className="text-sm font-bold">{item.step}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Ecosystem</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Powered by Eastern technology
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((p) => (
              <div key={p.name} className="flex items-center justify-center">
                <img src={p.logo} alt={p.name} className={`${p.h} w-auto object-contain`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WeastCta tourHref="/#demo-ide" brand="our platform" />
    </div>
  );
}
