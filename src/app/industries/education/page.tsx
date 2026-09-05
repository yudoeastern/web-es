import Link from "next/link";
import type { Metadata } from "next";
import EducationFlow from "@/components/industries/EducationFlow";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "AI for Education: Curriculum, Tutoring & Research | EasternStack",
  description:
    "Agentic education operations on WEAST: curriculum design, automated assessment, cited tutoring, and research assistance, one workspace per program or department.",
  alternates: { canonical: "/industries/education" },
  openGraph: {
    title: "AI for Education: Curriculum, Tutoring & Research | EasternStack",
    description:
      "One workspace per program or department: agents that draft curricula from standards, grade with rubrics, tutor with textbook citations, and summarize literature, on one governed WEAST platform.",
    url: "https://easternstack.ai/industries/education",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack, AI for Education",
      },
    ],
  },
};

const USE_CASES = [
  {
    title: "Curriculum Design Agent",
    body: "Standards and objectives kept as a knowledge base, textbooks read via IDP, and outline plus lesson plan drafts your educators refine.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Student Assessment Agent",
    body: "Exam papers read via IDP, grading rubrics run in Python, answer keys kept as a knowledge base, and scored assessments with feedback.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Tutoring Agent",
    body: "Student Q&A in chat, grounded in the course materials knowledge base, with citations to textbook pages and tutoring shaped per student.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Research Assistant Agent",
    body: "Journals and theses in one knowledge base, hybrid search for literature reviews, cross-reference and gap analysis subagents, summaries with citation lists.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Document Intelligence",
    body: "Textbooks, papers, and exam papers, with structural chunking that keeps chapter hierarchy, and table extraction from research data.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const GOVERNANCE = [
  {
    title: "One workspace per program",
    body: "Each program or department gets its own workspace, memory, and audit trail, so nothing mixes.",
  },
  {
    title: "Citations on every answer",
    body: "Every tutoring answer points back to the textbook page or course material it came from.",
  },
  {
    title: "Educators approve curricula",
    body: "Agents draft outlines and lesson plans. Educators review and approve before anything reaches students.",
  },
  {
    title: "Tenant boundaries per department",
    body: "Course materials and student data stay inside their tenant boundary, with access logged per workspace.",
  },
  {
    title: "Sovereign deployment",
    body: "Run WEAST in your own environment, with keys and data under your control.",
  },
];

const OUTCOMES = [
  { stat: "Faster course design", label: "from standards to lesson drafts" },
  { stat: "Every answer cited", label: "students see the textbook page" },
  { stat: "One platform", label: "curriculum, assessment, tutoring, and research under one governed WEAST" },
];

export default function EducationPage() {
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
              Industry · Education & Training
            </p>
            <h1
              className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              Learning that{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                adapts itself
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              One workspace per program or department. Agents that draft curricula from
              standards, grade with rubrics, tutor with textbook citations, and summarize
              literature, on one WEAST platform.
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
                Try the Product Tour
              </Link>
            </div>
            <p className="mt-5 text-[13px] text-gray-500">
              One workspace per program · Cited tutoring · Educator in the loop
            </p>
          </div>
        </div>
      </section>

      {/* Animated learning loop */}
      <section className="bg-[#0A0A0C] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E31E24]">
              What you can build on WEAST
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              A campus that teaches and learns at once
            </h2>
            <p className="mt-4 text-zinc-400">
              The curriculum agent drafts outlines from standards, the tutoring agent answers
              students with page-level citations, assessment scores with rubrics, and every
              result feeds the next curriculum revision.
            </p>
          </div>
          <div className="mt-12">
            <EducationFlow />
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
              What education teams build on WEAST
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {USE_CASES.map((u) => (
              <div
                key={u.title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#E31E24]/40 hover:shadow-lg"
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

      {/* Governance */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
              Governance by design
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Built for governed institutions
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {GOVERNANCE.map((i) => (
              <div key={i.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-[15px] font-bold text-[#1A1A1A]">{i.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{i.body}</p>
              </div>
            ))}
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
              What changes for your institution
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
