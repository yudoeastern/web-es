import Link from "next/link";
import type { Metadata } from "next";
import AiAssistantFlow from "@/components/solutions/AiAssistantFlow";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "AI Assistant Solutions for Enterprise | EasternStack",
  description:
    "Conversational AI assistants for 24/7 customer support, sales, tutoring, and employee productivity that dramatically cut support workload with EasternStack.",
  alternates: { canonical: "/solutions/ai-assistant" },
  openGraph: {
    title: "AI Assistant Solutions for Enterprise | EasternStack",
    description:
      "Conversational AI assistants for 24/7 customer support, sales, tutoring, and employee productivity that dramatically cut support workload with EasternStack.",
    url: "https://easternstack.ai/solutions/ai-assistant",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — AI Assistant Solutions for Enterprise",
      },
    ],
  },
};

const USE_CASES = [
  {
    id: "customer-support",
    title: "Customer Support (24/7)",
    body: "AI-powered frontline support that handles customer inquiries around the clock, reducing human agent workload while delivering instant responses.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: "sales-assistant",
    title: "Sales Assistant",
    body: "AI that guides users through the entire purchase journey, from product discovery to checkout completion.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "ai-tutor",
    title: "AI Tutor / Education",
    body: "Your private digital teacher that adapts to each student's learning pace and style, making education accessible and interactive.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: "work-assistant",
    title: "Work Assistant",
    body: "Your AI productivity partner for professionals and teams. Automate routine tasks and focus on high-value work.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "internal-automation",
    title: "Internal Automation",
    body: "Enterprise AI bots that streamline internal operations, making company knowledge accessible and reducing administrative overhead.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const CAPABILITIES = [
  {
    title: "Customer Support Automation (24/7)",
    body: "AI-powered frontline support that handles customer inquiries around the clock.",
    groups: [
      {
        label: "Use cases",
        items: [
          "Order tracking and status updates",
          "Refund and complaint handling",
          "Product FAQs and recommendations",
        ],
      },
      {
        label: "Why it's powerful",
        items: [
          "Substantially reduces human customer service workload",
          "Near-instant responses for common inquiries",
          "Handles high volumes of concurrent users",
        ],
      },
    ],
  },
  {
    title: "Sales Assistant",
    body: "Guides shoppers from product discovery through to checkout completion.",
    groups: [
      {
        label: "Capabilities",
        items: [
          "Product recommendations based on user needs",
          "Intelligent upselling and cross-selling",
          "Pre-checkout question resolution",
        ],
      },
    ],
  },
  {
    title: "AI Tutor / Personal Education",
    body: "A private digital teacher that adapts to each student's pace and style.",
    groups: [
      {
        label: "Applications",
        items: [
          "School and university subject explanations",
          "Practice exercises with detailed solutions",
          "Language learning and conversation practice",
        ],
      },
      {
        label: "Value proposition",
        items: [
          "Personalized learning adapted to user level",
          "Interactive learning, not static content",
        ],
      },
    ],
  },
  {
    title: "Work Assistant (Productivity)",
    body: "An AI partner for professionals and teams that clears routine work.",
    groups: [
      {
        label: "Functions",
        items: [
          "Document and email summarization",
          "Idea generation and brainstorming support",
          "Draft creation (proposals, reports, etc.)",
        ],
      },
    ],
  },
  {
    title: "Internal Business Automation",
    body: "Enterprise bots that make company knowledge reachable by chat.",
    groups: [
      {
        label: "Use cases",
        items: [
          "HR bot for leave requests, payroll info, policies",
          "Internal IT helpdesk for tech support",
          "Company knowledge base (SOP, policies, FAQs)",
        ],
      },
      {
        label: "Why it's powerful",
        items: [
          "Saves employee time on routine inquiries",
          "All company knowledge searchable via chat",
        ],
      },
    ],
  },
];

const CONVERSATION = {
  label: "Example conversation · Sales Assistant",
  turns: [
    { from: "user", text: "What laptop do you recommend for graphic design?" },
    { from: "ai", text: "I'd be happy to help! What's your budget range, and which design software do you primarily use?" },
    { from: "user", text: "Around $2000, mainly for Adobe Creative Suite" },
    {
      from: "ai",
      text: 'Based on your needs, I recommend the MacBook Pro 14" with M3 Pro chip. It offers excellent performance for Adobe Creative Suite with 18GB unified memory. Would you like me to check availability?',
    },
  ],
};

const WORKFLOW = {
  label: "Workflow example · Work Assistant",
  steps: [
    { title: "Document Upload", body: "User uploads 50-page PDF report" },
    { title: "AI Processing", body: "AI analyzes and extracts key information" },
    { title: "Summary Output", body: "5-page executive summary with key points" },
  ],
};

const OUTCOMES = [
  { stat: "24/7", label: "support coverage, with near-instant answers to common inquiries" },
  { stat: "Substantial", label: "reduction in human customer-service workload" },
  { stat: "One platform", label: "support, sales, tutoring, work and internal bots under one governed WEAST" },
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

export default function AIAssistantPage() {
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
              Solution · AI Assistant
            </p>
            <h1
              className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              Conversational AI that{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                understands and acts
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Intelligent conversational AI that understands context, makes decisions, and executes
              workflows across your business operations.
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
              24/7 coverage · Grounded in your knowledge · Human takeover
            </p>
          </div>
        </div>
      </section>

      {/* Animated routed-request flow */}
      <section className="bg-[#0A0A0C] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E31E24]">
              How assistants work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Requests routed, answers grounded
            </h2>
            <p className="mt-4 text-zinc-400">
              Messages from customers and staff pass a routing agent that reads intent, context and
              authority. Grounding pulls from your own knowledge, the assistant replies or acts, and
              requests that need judgement reach a human with the full history.
            </p>
          </div>
          <div className="mt-12">
            <AiAssistantFlow />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Use cases
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Where assistants run on WEAST
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {USE_CASES.map((u) => (
              <div
                key={u.title}
                id={u.id}
                className="scroll-mt-24 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#E31E24]/40 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                  {u.icon}
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-[#1A1A1A]">{u.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              What each assistant handles
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Capabilities, assistant by assistant
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {CAPABILITIES.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-gray-200 bg-white p-7 transition-all hover:border-[#E31E24]/40 hover:shadow-lg"
              >
                <h3 className="text-[17px] font-bold text-[#1A1A1A]">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.body}</p>
                <div className="mt-6 space-y-5">
                  {c.groups.map((g) => (
                    <div key={g.label}>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
                        {g.label}
                      </p>
                      <ul className="mt-3 space-y-2 text-[13px] text-gray-600">
                        {g.items.map((item) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="border-t border-gray-200 bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              In practice
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              A conversation and a workflow
            </h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
                {CONVERSATION.label}
              </p>
              <div className="mt-5 space-y-4">
                {CONVERSATION.turns.map((t) =>
                  t.from === "user" ? (
                    <div key={t.text} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-gray-600">
                        U
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-white p-3 text-[13px] leading-relaxed text-gray-600">
                        {t.text}
                      </div>
                    </div>
                  ) : (
                    <div key={t.text} className="flex flex-row-reverse items-start gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-sm text-white">
                        AI
                      </div>
                      <div className="rounded-lg border border-[#E31E24]/20 bg-[#E31E24]/5 p-3 text-[13px] leading-relaxed text-gray-600">
                        {t.text}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
                {WORKFLOW.label}
              </p>
              <div className="mt-5 space-y-3">
                {WORKFLOW.steps.map((s, idx) => (
                  <div key={s.title}>
                    <div className="rounded-lg border border-gray-200 bg-white p-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-[12px] font-bold text-white">
                          {idx + 1}
                        </span>
                        <p className="text-[14px] font-bold text-[#1A1A1A]">{s.title}</p>
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{s.body}</p>
                    </div>
                    {idx < WORKFLOW.steps.length - 1 && (
                      <div className="flex justify-center py-1">
                        <svg
                          className="h-5 w-5 text-[#E31E24]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
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
              What changes for your teams
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
