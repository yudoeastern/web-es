import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = "https://easternstack.ai";

export function generateMetadata(): Metadata {
  return {
    title: "Agentic AI Solutions in Indonesia | EasternStack",
    description:
      "EasternStack builds agentic AI solutions for enterprises in Indonesia — autonomous AI agents that plan, decide, and execute business workflows across customer operations, sales, and document processing. Jakarta-based team, enterprise-grade security.",
    keywords: [
      "agentic AI Indonesia",
      "solusi agentic AI",
      "agentic AI solutions Indonesia",
      "AI agent Indonesia",
      "enterprise AI Indonesia",
      "autonomous AI agents",
    ],
    alternates: {
      canonical: "/solutions/agentic-ai",
    },
    openGraph: {
      title: "Agentic AI Solutions in Indonesia | EasternStack",
      description:
        "Autonomous AI agents that plan, decide, and execute business workflows end-to-end — built for Indonesian enterprises by a Jakarta-based enterprise AI company.",
      url: `${baseUrl}/solutions/agentic-ai`,
      siteName: "EasternStack",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/logo_head.png`,
          width: 1200,
          height: 1200,
          alt: "EasternStack — Agentic AI Solutions in Indonesia",
        },
      ],
    },
  };
}

const faqs = [
  {
    question: "What is agentic AI?",
    answer:
      "Agentic AI refers to AI systems that can understand goals, reason across data, make decisions, and execute multi-step tasks across enterprise systems with minimal human intervention. Unlike chatbots that only respond to prompts, agentic AI plans and completes entire workflows end-to-end.",
  },
  {
    question: "How is agentic AI different from a chatbot?",
    answer:
      "A chatbot responds to individual prompts with text. An agentic AI system takes actions: it plans multi-step workflows, connects to enterprise systems such as CRM, ERP, and document repositories, updates records, and completes tasks autonomously while keeping humans in the loop for high-risk decisions.",
  },
  {
    question: "Why choose an agentic AI provider in Indonesia?",
    answer:
      "EasternStack is headquartered in Jakarta and serves Indonesian enterprises directly, with local implementation teams, Indonesian language support, and deployment options that address data residency and compliance requirements for regulated industries such as financial services, insurance, and the public sector.",
  },
  {
    question: "Apa itu agentic AI dan apa manfaatnya untuk perusahaan di Indonesia?",
    answer:
      "Agentic AI adalah sistem AI yang mampu memahami tujuan bisnis, mengambil keputusan, dan menjalankan proses multi-langkah secara otomatis di berbagai sistem perusahaan. Perusahaan di Indonesia menggunakannya untuk mempercepat layanan pelanggan, proses penjualan, dan pemrosesan dokumen dengan tetap menjaga kontrol dan kepatuhan.",
  },
  {
    question: "Which industries benefit most from agentic AI?",
    answer:
      "Financial services, insurance, healthcare, manufacturing, retail and e-commerce, logistics, telecommunications, energy and utilities, and the public sector benefit most — especially workflows with high volumes of repetitive, document-heavy, or data-intensive tasks.",
  },
  {
    question: "Is agentic AI safe for enterprise data?",
    answer:
      "Yes, when deployed with proper governance. EasternStack designs agentic AI with secure architecture, access controls, auditability, and deployment options including private environments, aligned with enterprise compliance requirements.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: `${baseUrl}/solutions`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Agentic AI Solutions",
      item: `${baseUrl}/solutions/agentic-ai`,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agentic AI Solutions",
  serviceType: "Agentic AI design, implementation, and operation for enterprises",
  description:
    "EasternStack designs, implements, and operates agentic AI systems — autonomous AI agents that plan, decide, and execute business workflows across enterprise systems.",
  provider: {
    "@type": "Organization",
    name: "EasternStack",
    url: baseUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
};

export default function AgenticAIPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqJsonLd, breadcrumbJsonLd, serviceJsonLd]),
        }}
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-[#0F0F0F]-card border border-gray-700 rounded-full">
              <span className="text-[#E31E24] text-sm font-semibold">
                Agentic AI Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              Agentic AI Solutions for{" "}
              <span className="gradient-text">Enterprises in Indonesia</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              EasternStack designs, builds, and operates agentic AI systems — autonomous AI
              agents that plan, decide, and execute business workflows end-to-end across your
              enterprise systems, with the governance and security Indonesian enterprises require.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Book Consultation
              </Link>
              <Link href="/solutions/ai/agentic-ai-assistant" className="btn-secondary text-lg px-8 py-4">
                Explore Agentic AI Assistants
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Agentic AI — direct answer */}
      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
              What is Agentic AI?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Agentic AI is a class of artificial intelligence that goes beyond answering
              prompts. An AI agent understands a business goal, reasons across your data and
              systems, makes decisions, and executes multi-step workflows autonomously —
              retrieving information, updating records, processing documents, and coordinating
              actions across CRM, ERP, and internal platforms.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Where a chatbot stops at conversation, agentic AI completes the work. It adapts
              to changing conditions, escalates high-risk decisions to humans, and continuously
              improves operational efficiency — making it the practical path for Indonesian
              enterprises to automate complex, document-heavy, and data-intensive processes.
            </p>
            <p className="text-lg text-gray-600">
              EasternStack is an enterprise AI company headquartered in Jakarta, Indonesia.
              We help organizations across financial services, insurance, healthcare,
              manufacturing, retail, logistics, telecommunications, energy, and the public
              sector adopt agentic AI safely, from discovery to production operation.
            </p>
          </div>
        </div>
      </section>

      {/* Why EasternStack in Indonesia */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            WHY ENTERPRISES IN INDONESIA CHOOSE EASTERNSTACK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Jakarta-Based Delivery Team</h3>
              <p className="text-gray-600">
                Local implementation teams with Indonesian language support, direct
                accountability, and an understanding of how Indonesian enterprises operate.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Built for Regulated Industries</h3>
              <p className="text-gray-600">
                Deployment options that address data residency and compliance requirements
                for financial services, insurance, healthcare, and the public sector.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Greater Model Choice</h3>
              <p className="text-gray-600">
                Multi-model architectures with Qwen, DeepSeek, Kimi, GLM, and leading cloud
                platforms, so you control cost, performance, and vendor dependency.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Proven Business Impact</h3>
              <p className="text-gray-600">
                Agentic AI deployments targeting measurable outcomes: reduced support
                workload, faster sales cycles, and fewer manual document processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agentic AI solutions grid */}
      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            OUR AGENTIC AI SOLUTIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/solutions/ai/agentic-ai-assistant" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#E31E24] transition-colors">
                Agentic AI Assistant
              </h3>
              <p className="text-gray-600 mb-4">
                Autonomous agents for customer operations, revenue operations, and workforce
                productivity that execute multi-step workflows across your systems.
              </p>
              <span className="text-[#E31E24] font-semibold transition-colors flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/solutions/ai/ai-agent-builder" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#E31E24] transition-colors">
                AI Agent Builder
              </h3>
              <p className="text-gray-600 mb-4">
                A platform to design, deploy, and orchestrate AI agents across systems and
                workflows — with observability and control at every step.
              </p>
              <span className="text-[#E31E24] font-semibold transition-colors flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/solutions/ai/intelligent-document-processing" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#E31E24] transition-colors">
                Intelligent Document Processing
              </h3>
              <p className="text-gray-600 mb-4">
                Agentic document intelligence that extracts, verifies, and acts on information
                from invoices, contracts, claims, and forms.
              </p>
              <span className="text-[#E31E24] font-semibold transition-colors flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/solutions/ai/copilot-suite" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#E31E24] transition-colors">
                Enterprise Copilot Suite
              </h3>
              <p className="text-gray-600 mb-4">
                Role-based AI copilots that enhance productivity and decision making across
                your teams.
              </p>
              <span className="text-[#E31E24] font-semibold transition-colors flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            HOW EASTERNSTACK DELIVERS AGENTIC AI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Discovery & Assessment</h3>
              <p className="text-gray-600">
                Identify the workflows where agentic AI delivers the fastest return and define success metrics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Solution Design</h3>
              <p className="text-gray-600">
                Define agent architecture, model selection, integrations, and governance controls.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Implementation</h3>
              <p className="text-gray-600">
                Deploy agents and connect them to your enterprise systems, with human-in-the-loop safeguards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Optimization & Scaling</h3>
              <p className="text-gray-600">
                Measure impact, improve accuracy, and expand agentic AI to more workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            START YOUR AGENTIC AI JOURNEY IN INDONESIA
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Talk to EasternStack about where agentic AI can deliver the fastest impact
            for your organization.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
