import Link from "next/link";

function CheckIcon() {
  return (
    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

const FEATURES = [
  {
    eyebrow: "01 · Agent Studio",
    title: "Design multi-agent workflows on a visual canvas",
    body: "Model your operation as a topology — a supervisor agent that delegates to specialist agents, with depth limits, call budgets and publish gates on every branch.",
    points: [
      "Supervisor → delegate orchestration with depth and call limits",
      "Per-branch budgets surfaced inline: depth 2 · 10 calls · 60s",
      "One-click publish with versioned agent rollouts",
    ],
    image: "/agentos/screens/agent-studio.png",
    alt: "Agent Studio topology canvas",
  },
  {
    eyebrow: "02 · Agent Editor",
    title: "Give every agent an identity, a prompt, and a live test",
    body: "Edit display names, system prompts and tool bindings in one place, then pressure-test the agent against your real documents before it ever ships.",
    points: [
      "Markdown system prompts with reusable templates",
      "Live test chat wired to the running runtime",
      "Saved, versioned and publishable per workspace",
    ],
    image: "/agentos/screens/agent-editor.png",
    alt: "Agent Editor with system prompt editor",
  },
  {
    eyebrow: "03 · Document Intelligence",
    title: "Turn documents into indexed, searchable knowledge",
    body: "Upload PDFs and spreadsheets into a governed registry. AgentOS chunks, indexes and tracks cost per document, so agents retrieve evidence — not hallucinations.",
    points: [
      "PDF & XLSX ingestion with chunk-level indexing",
      "Folder-scoped document registries per workspace",
      "Hybrid knowledge search across every indexed chunk",
    ],
    image: "/agentos/screens/document-intelligence.png",
    alt: "Document Intelligence registry",
  },
  {
    eyebrow: "04 · Agent Runtime",
    title: "Durable execution you can actually monitor",
    body: "Agents run on dedicated Agent Workers with heartbeats, task queues and uptime you can inspect — not black-box inference calls.",
    points: [
      "Registered / online / offline / error health at a glance",
      "Worker endpoint, task queue and uptime per workspace",
      "Document ingestion workers run alongside your agents",
    ],
    image: "/agentos/screens/agent-runtime.png",
    alt: "Agent Runtime dashboard",
  },
  {
    eyebrow: "05 · Open API Access",
    title: "Call any agent from any system over HTTP",
    body: "Every capability is a versioned /v1 endpoint. Drop a workspace key into your backend and stream agent chat, upload documents or search knowledge.",
    points: [
      "x-api-key auth — the full secret is shown once at creation",
      "Sync and SSE streaming chat endpoints",
      "Document and knowledge endpoints under the same key",
    ],
    image: "/agentos/screens/open-api.png",
    alt: "Open API Access documentation",
  },
  {
    eyebrow: "06 · Workspace Overview",
    title: "Every workspace isolated, every run accounted for",
    body: "Members, agents, documents and 30-day run health per workspace — with model spend against a monthly budget and a full activity trail.",
    points: [
      "Runs, success rate and model spend per workspace",
      "Monthly budget tracking with on-track status",
      "Activity log: who created which key, agent or document",
    ],
    image: "/agentos/screens/workspace-overview.png",
    alt: "Workspace Overview dashboard",
  },
];

const PROVIDERS = [
  { name: "Qwen", logo: "/agentos/models/qwen.webp" },
  { name: "DeepSeek", logo: "/agentos/models/deepseek.svg" },
  { name: "Dola Seed", logo: "/agentos/models/dola-seed.jpeg" },
  { name: "GLM", logo: "/agentos/models/glm.png" },
  { name: "Kimi", logo: "/agentos/models/kimi.png" },
];

const PROOF_POINTS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: "Tenant boundary at every layer",
    body: "Workspace-scoped queries, PostgreSQL row-level security, and isolated Agent Worker task queues keep each business unit's data and agents apart by construction.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    ),
    title: "Keys shown once, never in plaintext",
    body: "Workspace API keys authenticate every worker and external call via x-api-key. The full secret is returned once at creation and never persisted.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Durable by default",
    body: "Agent runs and document ingestion execute as durable Agent Worker runs that survive restarts. Workers heartbeat every 30 seconds with automatic offline detection.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Full audit trail",
    body: "Run event timelines with thinking steps and citations, a workspace activity feed, and per-model LLM cost tracking give your auditors the whole picture.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We moved credit analysis from three days of manual spreading to a supervised agent workflow our analysts actually trust. Workspace isolation made the compliance sign-off straightforward.",
    name: "Head of Credit Risk",
    org: "Regional commercial bank, Southeast Asia",
  },
  {
    quote:
      "AgentOS gave us a runtime we could deploy inside our own infrastructure. Each team gets an isolated workspace with its own keys, and we track model spend down to the request.",
    name: "VP of Engineering",
    org: "Financial services platform, 400+ engineers",
  },
];

function FeatureRow({ feature, flip }: { feature: typeof FEATURES[0]; flip: boolean }) {
  return (
    <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${flip ? "lg:flex-row-reverse" : ""}`}>
      <div className={flip ? "lg:order-2" : ""}>
        <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">{feature.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-[28px] sm:leading-tight">
          {feature.title}
        </h3>
        <p className="mt-4 leading-relaxed text-gray-600">{feature.body}</p>
        <ul className="mt-6 space-y-3">
          {feature.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <CheckIcon />
              </span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <figure className={flip ? "lg:order-1" : ""}>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
          <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            <span className="min-w-0 flex-1 truncate rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-center font-mono text-[11px] text-gray-500">
              agentic.easternstack.com{feature.image.replace("/agentos/screens", "")}
            </span>
          </div>
          <img
            src={feature.image}
            alt={feature.alt}
            loading="lazy"
            className="block w-full"
          />
        </div>
      </figure>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        {/* Dot grid texture */}
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
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E31E24]" aria-hidden="true" />
              Enterprise Agentic AI Platform
            </div>

            <h1 className="mt-6 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Deploy an AI agent workforce over your{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">
                private knowledge
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              AgentOS gives your enterprise tenant-isolated agents that ingest documents,
              orchestrate multi-step workflows, and run as durable workers — deployed in
              your environment, exposed through a single versioned API.
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
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-transparent px-6 py-3 text-sm font-semibold text-[#1A1A1A] hover:border-[#E31E24] hover:text-[#E31E24] transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Talk to Sales
              </Link>
            </div>

            <p className="mt-5 text-[13px] text-gray-500">
              Runs inside your infrastructure · PostgreSQL RLS tenant isolation ·
              Durable Agent Worker execution
            </p>
          </div>

          {/* Product Preview - Topology Mockup */}
          <div className="mt-16">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
              <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-2.5">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                <span className="min-w-0 flex-1 truncate rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-center font-mono text-[11px] text-gray-500">
                  agentic.easternstack.com/agents
                </span>
              </div>
              <div className="relative bg-gray-50 p-8 min-h-[300px] flex items-center justify-center">
                {/* Simplified topology visualization */}
                <div className="relative w-full max-w-2xl">
                  {/* Supervisor Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-64 rounded-lg bg-[#1A1A1A] border border-gray-700 px-4 py-3 text-white shadow-xl">
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#E31E24]">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-semibold leading-tight">Credit Analysis Supervisor Agent</p>
                        <p className="mt-0.5 truncate font-mono text-[9.5px] opacity-70">qwen3.8-max-preview · v1</p>
                      </div>
                    </div>
                    <div className="mt-2.5 flex items-center gap-2 text-[9.5px]">
                      <span className="rounded bg-white/10 px-1.5 py-0.5">4 tools</span>
                      <span className="rounded bg-white/10 px-1.5 py-0.5">2 delegates</span>
                      <span className="ml-auto flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                        online
                      </span>
                    </div>
                  </div>

                  {/* Connection lines */}
                  <svg className="absolute left-1/2 -translate-x-1/2 top-[80px] w-64" height="80">
                    <line x1="50" y1="0" x2="20" y2="80" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 2" />
                    <line x1="50" y1="0" x2="80" y2="80" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 2" />
                  </svg>

                  {/* Delegate Nodes */}
                  <div className="absolute left-[calc(50%-140px)] top-[160px] w-44 rounded-lg border border-gray-200 bg-white px-3 py-2.5 shadow-lg">
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#E31E24]/10">
                        <svg className="w-3.5 h-3.5 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-semibold leading-tight text-[#1A1A1A]">Financial Analyst Agent</p>
                        <p className="mt-0.5 truncate font-mono text-[9px] text-gray-500">glm-4-plus · v1</p>
                      </div>
                    </div>
                    <div className="mt-2 flex gap-1.5 text-[9px] text-gray-500">
                      <span className="rounded bg-gray-100 px-1.5 py-0.5">delegate</span>
                      <span className="rounded bg-gray-100 px-1.5 py-0.5">depth 1</span>
                    </div>
                  </div>

                  <div className="absolute left-[calc(50%+20px)] top-[160px] w-44 rounded-lg border border-gray-200 bg-white px-3 py-2.5 shadow-lg">
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#E31E24]/10">
                        <svg className="w-3.5 h-3.5 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-semibold leading-tight text-[#1A1A1A]">Credit Report Writer Agent</p>
                        <p className="mt-0.5 truncate font-mono text-[9px] text-gray-500">qwen2.5-72b · v1</p>
                      </div>
                    </div>
                    <div className="mt-2 flex gap-1.5 text-[9px] text-gray-500">
                      <span className="rounded bg-gray-100 px-1.5 py-0.5">delegate</span>
                      <span className="rounded bg-gray-100 px-1.5 py-0.5">depth 1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Platform capabilities</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              One control plane for the whole agent lifecycle
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              From the first uploaded document to the last traced API call — every screen below is
              the shipping product, captured from a live AgentOS workspace.
            </p>
          </div>

          <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-24">
            {FEATURES.map((feature, index) => (
              <FeatureRow key={feature.eyebrow} feature={feature} flip={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* LLM Providers Section */}
      <section className="border-b border-gray-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Model providers</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Run agents on the models your teams already trust
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              AgentOS is model-agnostic — point each agent at a provider per workspace, and swap
              models without touching your workflows.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {PROVIDERS.map((provider) => (
              <div
                key={provider.name}
                className="flex flex-col items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-6 shadow-sm"
              >
                <img
                  src={provider.logo}
                  alt={`${provider.name} logo`}
                  loading="lazy"
                  className="h-12 w-12 rounded-lg object-contain"
                />
                <span className="text-sm font-semibold text-[#1A1A1A]">{provider.name}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center font-mono text-[12px] text-gray-500">
            Plus any OpenAI-compatible endpoint — usage synced from Easternstack AI Gate, broken down by model.
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-[#1A1A1A] py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Enterprise trust</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built for the controls your security team will ask about
            </h2>
            <p className="mt-4 leading-relaxed text-gray-400">
              AgentOS runs inside your infrastructure with isolation, key management, and
              auditability designed into the architecture — not bolted on.
            </p>
          </div>

          {/* Proof points */}
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-gray-700 sm:grid-cols-2">
            {PROOF_POINTS.map((point) => (
              <div key={point.title} className="bg-[#2A2A2A] p-7">
                <div className="text-gray-400">{point.icon}</div>
                <h3 className="mt-3.5 text-[15px] font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-gray-400">{point.body}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col justify-between rounded-lg border border-gray-700 bg-[#2A2A2A] p-7"
              >
                <p className="text-[15px] leading-relaxed text-gray-300">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-5 flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-bold"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      color: "white",
                    }}
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-white">{t.name}</p>
                    <p className="text-[12px] text-gray-400">{t.org}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl" style={{ letterSpacing: "-0.025em" }}>
              See AgentOS in your environment
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-600">
              Book a working session with our team. We'll stand up a workspace against
              your documents and walk through the full agent lifecycle — ingestion,
              orchestration, runtime, and API handoff.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-transparent px-6 py-3 text-sm font-semibold text-[#1A1A1A] hover:border-[#E31E24] hover:text-[#E31E24] transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Solutions Cards Section (preserved) */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4 text-center">
            ALL AI SOLUTIONS
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12 text-center">
            Explore our complete portfolio of enterprise AI solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/solutions/ai-assistant#customer-support" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-[#E31E24] transition-colors">
                Customer Support Automation
              </h3>
              <p className="text-text-secondary mb-4">
                24/7 AI-powered frontline support for order tracking, refunds, complaints, and FAQs.
              </p>
            </Link>

            <Link href="/solutions/ocr-solutions#invoice" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-[#E31E24] transition-colors">
                InvoiceMind OCR
              </h3>
              <p className="text-text-secondary mb-4">
                Automated invoice processing with high-accuracy data extraction and validation.
              </p>
            </Link>

            <Link href="/solutions/churn-prediction" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-[#E31E24] transition-colors">
                Churn Prediction
              </h3>
              <p className="text-text-secondary">
                Predict and prevent customer churn with AI-driven insights and proactive retention strategies.
              </p>
            </Link>

            <Link href="/solutions/fraud-detection" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-[#E31E24] transition-colors">
                Agentic Fraud Detection
              </h3>
              <p className="text-text-secondary">
                Real-time fraud detection with autonomous AI agents that identify and prevent suspicious activities.
              </p>
            </Link>

            <Link href="/solutions/loan-processing" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-[#E31E24] transition-colors">
                Loan Application Processing
              </h3>
              <p className="text-text-secondary">
                Automated loan processing with intelligent risk assessment and faster approval decisions.
              </p>
            </Link>

            <Link href="/solutions/forecasting" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-[#E31E24] transition-colors">
                Forecasting AI
              </h3>
              <p className="text-text-secondary mb-4">
                Sales forecasting, inventory optimization, and financial predictions to drive smarter business decisions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            READY TO TRANSFORM YOUR BUSINESS?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how EasternStack AI solutions can drive measurable results for your organization.
          </p>
          <Link href="/contact" className="inline-block bg-white text-[#E31E24] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
