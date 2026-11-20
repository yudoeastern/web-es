import Link from "next/link";
import type { Metadata } from "next";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "Industries We Serve — Enterprise AI Solutions in Indonesia | EasternStack",
  description:
    "Enterprise AI solutions across industries in Indonesia — financial services, retail, healthcare, manufacturing, logistics, telecom, energy, and public sector.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries We Serve — Enterprise AI Solutions in Indonesia | EasternStack",
    description:
      "Enterprise AI solutions tailored to diverse industries in Indonesia and beyond — Jakarta-based team, industry expertise, and rapid deployment.",
    url: "https://easternstack.ai/industries",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — Industries We Serve",
      },
    ],
  },
};

const INDUSTRIES = [
  {
    slug: "financial-services",
    name: "Financial Services",
    description:
      "Transform banking, insurance, and fintech with AI-powered automation, fraud detection, and personalized customer experiences.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    useCases: [
      "Automated loan processing & credit scoring",
      "Fraud detection & AML compliance",
      "AI-powered customer service chatbots",
      "Personalized financial advisory",
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    description:
      "Enhance customer experience, optimize inventory, and drive sales with intelligent AI solutions for modern retail.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    useCases: [
      "Personalized product recommendations",
      "Inventory forecasting & optimization",
      "Visual search & virtual try-on",
      "Customer service automation",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description:
      "Optimize production, predict maintenance, and improve quality control with AI-driven manufacturing solutions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    useCases: [
      "Predictive maintenance",
      "Quality control & defect detection",
      "Supply chain optimization",
      "Production planning & scheduling",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description:
      "Improve patient care, streamline operations, and accelerate research with healthcare AI solutions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    useCases: [
      "Medical document processing",
      "Patient appointment scheduling",
      "Medical records management",
      "Diagnostic support & analysis",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics & Transportation",
    description:
      "Optimize routes, track shipments, and improve delivery efficiency with intelligent logistics AI.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    useCases: [
      "Route optimization",
      "Fleet management",
      "Shipment tracking & ETA prediction",
      "Warehouse automation",
    ],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    description:
      "Enhance network operations, reduce churn, and improve customer experience with telecom AI solutions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    useCases: [
      "Network monitoring & optimization",
      "Customer churn prediction",
      "Automated customer support",
      "Fraud detection",
    ],
  },
  {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    description:
      "Optimize energy distribution, predict demand, and improve operational efficiency with AI-powered solutions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    useCases: [
      "Demand forecasting",
      "Predictive maintenance",
      "Grid optimization",
      "Customer service automation",
    ],
  },
  {
    slug: "public-sector",
    name: "Public Sector",
    description:
      "Improve citizen services, streamline operations, and enhance decision-making with government AI solutions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z" />
      </svg>
    ),
    useCases: [
      "Citizen service chatbots",
      "Document processing & digitization",
      "Fraud detection & compliance",
      "Data analytics & insights",
    ],
  },
];

const WHY = [
  {
    title: "Industry Expertise",
    body: "Deep understanding of industry-specific challenges, regulations, and best practices across Indonesia.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Rapid Deployment",
    body: "Accelerate your path from concept to production with our structured AI implementation framework.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Local Support",
    body: "Jakarta-based team providing dedicated support with understanding of local business culture and needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#E31E24]"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      />
    </svg>
  );
}

export default function IndustriesPage() {
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
              src="/weast/weast-logo-black.png"
              alt="WEAST by EasternStack.AI"
              className="mx-auto h-10 w-auto md:h-12"
            />
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              Industries We Serve
            </p>
            <h1
              className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              Enterprise AI for{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                every industry
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              EasternStack delivers enterprise AI solutions tailored to the unique challenges and
              opportunities across diverse industries in Indonesia and beyond.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#E31E24] to-[#C4181E] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              >
                Request a Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/#demo-ide"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-transparent px-6 py-3 text-sm font-semibold text-[#1A1A1A] hover:border-[#E31E24] hover:text-[#E31E24] transition-all"
              >
                Try the Live Product Tour
              </Link>
            </div>
            <p className="mt-5 text-[13px] text-gray-500">
              Jakarta-based team · Industry expertise · Rapid deployment
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Industries
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Where we deploy enterprise AI
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#E31E24]/40 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                  {industry.icon}
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-[#1A1A1A] transition-colors group-hover:text-[#E31E24]">
                  {industry.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">
                  {industry.description}
                </p>
                <ul className="mt-4 space-y-2 text-[13px] leading-snug text-gray-600">
                  {industry.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[13px] font-semibold text-[#E31E24]">
                  Learn More
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E31E24] hover:underline"
            >
              Explore WEAST solutions by capability
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why EasternStack */}
      <section className="bg-[#0A0A0C] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E31E24]">
              Why EasternStack
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Industry expertise, rapid deployment, local support
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {WHY.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WeastCta tourHref="/#demo-ide" />
    </div>
  );
}
