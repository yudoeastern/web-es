const PROOF_POINTS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: "Tenant boundary at every layer",
    body: "Workspace-scoped queries, row-level security, and isolated Agent Worker task queues keep each business unit's data and agents apart by construction.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    ),
    title: "Keys shown once, never in plaintext",
    body: "Workspace API keys authenticate every worker and external call via x-api-key. The full secret is returned once at creation, never persisted.",
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
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Model control per workspace",
    body: "Each workspace picks its own models and tracks usage per request, so teams control capability and cost without shadow deployments.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#1A1A1A] py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Enterprise trust</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Built for the controls your security team will ask about
          </h2>
          <p className="mt-4 leading-relaxed text-gray-400">
            Weast runs inside your infrastructure with isolation, key management, and
            auditability designed into the architecture, not bolted on.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-gray-700 sm:grid-cols-2">
          {PROOF_POINTS.map((point) => (
            <div key={point.title} className="bg-[#2A2A2A] p-5 sm:p-7">
              <div className="text-gray-400">{point.icon}</div>
              <h3 className="mt-3.5 text-[15px] font-semibold text-white">{point.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-400">{point.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
