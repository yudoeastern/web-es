import Link from "next/link";
import type { Metadata } from "next";
import DocumentOcrFlow from "@/components/solutions/DocumentOcrFlow";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "OCR Solutions for Invoices, ID Verification & Receipts | EasternStack",
  description:
    "High-accuracy enterprise OCR: InvoiceMind invoice automation, IDentify AI for KTP and Indonesian ID verification, and Receiptly expense scanning.",
  alternates: { canonical: "/solutions/ocr-solutions" },
  openGraph: {
    title: "OCR Solutions for Invoices, ID Verification & Receipts | EasternStack",
    description:
      "High-accuracy enterprise OCR: InvoiceMind invoice automation, IDentify AI for KTP and Indonesian ID verification, and Receiptly expense scanning.",
    url: "https://easternstack.ai/solutions/ocr-solutions",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — OCR Solutions for Invoices, ID Verification & Receipts",
      },
    ],
  },
};

const PRODUCTS = [
  {
    id: "invoice",
    title: "InvoiceMind OCR",
    tag: "Finance + Automation + Professional",
    body: "Automated invoice processing with high-accuracy data extraction, validation, and seamless integration with accounting systems.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    features: [
      "Extract vendor, amount, date, line items automatically",
      "Multi-format support (PDF, image, scanned docs)",
      "Validation against purchase orders",
      "Direct integration with ERP systems",
    ],
  },
  {
    id: "identity",
    title: "IDentify AI",
    tag: "Trust + Security + Onboarding",
    body: "Secure identity verification with KTP and document recognition for trusted, compliant customer onboarding.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    features: [
      "Extract NIK, name, address, birth date automatically",
      "Liveness detection and anti-spoofing",
      "KYC compliance ready",
      "Real-time verification API",
    ],
  },
  {
    id: "receipt",
    title: "Receiptly",
    tag: "Simple + Daily Use + Fintech",
    body: "Effortless receipt scanning and expense tracking for personal finance and business expense management.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    features: [
      "Snap receipt, auto extract merchant, amount, date",
      "Auto categorization (food, transport, office, etc.)",
      "Expense reports and analytics",
      "Export to accounting software",
    ],
  },
];

const ID_DOCUMENTS = [
  { title: "KTP Indonesia", sub: "National ID" },
  { title: "SIM / Driver License", sub: "Driving permit" },
  { title: "Passport", sub: "International ID" },
  { title: "NPWP / Tax ID", sub: "Tax number" },
];

const OUTCOMES = [
  { stat: "High accuracy", label: "extraction, field by field" },
  { stat: "Faster", label: "processing than manual keying" },
  { stat: "Minimal", label: "manual entry left for your teams" },
];

function CheckIcon() {
  return (
    <svg
      className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      />
    </svg>
  );
}

export default function OCRSolutionsPage() {
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
              Solution · OCR Solutions
            </p>
            <h1
              className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              Intelligent{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                document recognition
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Advanced OCR solutions for finance, identity verification, and expense management with
              enterprise-grade accuracy.
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
              Any format · Field-level validation · Human review on low confidence
            </p>
          </div>
        </div>
      </section>

      {/* Animated document pipeline */}
      <section className="bg-[#0A0A0C] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E31E24]">
              Intelligent document processing
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Pages in, validated fields out
            </h2>
            <p className="mt-4 text-zinc-400">
              Invoices, receipts and identity cards pass a recognition engine that reads layout,
              handwriting and mixed Indonesian-English text. Validation checks every field against
              your rules, and only uncertain pages wait for a human reviewer.
            </p>
          </div>
          <div className="mt-12">
            <DocumentOcrFlow />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-b border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Solutions
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Three products on one recognition engine
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className="scroll-mt-24 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#E31E24]/40 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                  {p.icon}
                </div>
                <h3 className="mt-4 text-[17px] font-bold text-[#1A1A1A]">{p.title}</h3>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-widest text-[#E31E24]">
                  {p.tag}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-gray-600">{p.body}</p>
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
              What each product does
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PRODUCTS.map((p) => (
              <div key={p.title} className="rounded-xl border border-gray-200 bg-white p-7">
                <h3 className="text-[15px] font-bold text-[#1A1A1A]">{p.title}</h3>
                <ul className="mt-4 space-y-3 text-[13px] text-gray-600">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-7">
            <h3 className="text-[15px] font-bold text-[#1A1A1A]">Supported identity documents</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ID_DOCUMENTS.map((d) => (
                <div key={d.title} className="rounded-lg border border-gray-200 bg-white px-5 py-4">
                  <p className="text-[14px] font-bold text-[#1A1A1A]">{d.title}</p>
                  <p className="mt-1 text-[12px] text-gray-500">{d.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Outcomes
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              What changes for your back office
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {OUTCOMES.map((o) => (
              <div key={o.label} className="rounded-xl border border-gray-200 bg-white p-7 text-center">
                <p className="text-3xl font-extrabold text-[#E31E24]">{o.stat}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WeastCta tourHref="/#demo-ide" />
    </div>
  );
}
