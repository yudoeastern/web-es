"use client";

import { useState } from "react";
import { WeastShell, ViewHeader, CodeIcon } from "./WeastShell";
import type { WeastView } from "./WeastShell";

const BASE = "https://api.weast.easternstack.ai/v1";
const KEY_MASK = "weast_•••••••••";

interface Endpoint {
  id: string;
  section: "Agents" | "Documents" | "Knowledge";
  method: "GET" | "POST" | "DELETE";
  path: string;
  title: string;
}

const ENDPOINTS: Endpoint[] = [
  { id: "ep-agents", section: "Agents", method: "GET", path: "/v1/agents", title: "List agents" },
  { id: "ep-chat", section: "Agents", method: "POST", path: "/v1/agents/{agent_id}/chat", title: "Chat (sync)" },
  { id: "ep-chat-stream", section: "Agents", method: "POST", path: "/v1/agents/{agent_id}/chat/stream", title: "Chat (streaming)" },
  { id: "ep-upload", section: "Documents", method: "POST", path: "/v1/documents", title: "Upload a document" },
  { id: "ep-list-docs", section: "Documents", method: "GET", path: "/v1/documents", title: "List documents" },
  { id: "ep-status", section: "Documents", method: "GET", path: "/v1/documents/{id}/status", title: "Get ingestion status" },
  { id: "ep-content", section: "Documents", method: "GET", path: "/v1/documents/{id}/content", title: "Get extracted content" },
  { id: "ep-delete", section: "Documents", method: "DELETE", path: "/v1/documents/{id}", title: "Delete a document" },
  { id: "ep-search", section: "Knowledge", method: "POST", path: "/v1/knowledge/search", title: "Search knowledge" },
];

const SIDEBAR: { section: string; items: { id: string; label: string }[] }[] = [
  {
    section: "Getting started",
    items: [
      { id: "overview", label: "Overview" },
      { id: "authentication", label: "Authentication" },
    ],
  },
  {
    section: "Agents",
    items: [
      { id: "ep-agents", label: "List agents" },
      { id: "ep-chat", label: "Chat (sync)" },
      { id: "ep-chat-stream", label: "Chat (streaming)" },
    ],
  },
  {
    section: "Documents",
    items: [
      { id: "ep-upload", label: "Upload a document" },
      { id: "ep-list-docs", label: "List documents" },
      { id: "ep-status", label: "Get ingestion status" },
      { id: "ep-content", label: "Get extracted content" },
      { id: "ep-delete", label: "Delete a document" },
    ],
  },
  { section: "Knowledge", items: [{ id: "ep-search", label: "Search knowledge" }] },
];

const METHOD_STYLES: Record<Endpoint["method"], string> = {
  GET: "bg-emerald-50 text-emerald-600 border-emerald-200",
  POST: "bg-indigo-50 text-indigo-500 border-indigo-200",
  DELETE: "bg-red-50 text-[#E31E24] border-red-200",
};

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(text).catch(() => undefined);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1200);
      }}
      className="absolute right-2 top-2 rounded-md bg-white/10 p-1.5 text-slate-300 hover:bg-white/20"
      title="Copy"
    >
      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      {copied && <span className="sr-only">Copied</span>}
    </button>
  );
}

export default function OpenApiView({ onNavigate }: { onNavigate: (v: WeastView) => void }) {
  const [query, setQuery] = useState("");
  const [selectedKey, setSelectedKey] = useState("agent:financial-analyst");

  const q = query.trim().toLowerCase();
  const visible = ENDPOINTS.filter(
    (e) => !q || e.title.toLowerCase().includes(q) || e.path.toLowerCase().includes(q) || e.section.toLowerCase().includes(q)
  );
  const sections = (["Agents", "Documents", "Knowledge"] as const).map((s) => ({
    name: s,
    items: visible.filter((e) => e.section === s),
  }));

  const scrollTo = (id: string) => {
    document.getElementById(`openapi-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const header = (
    <ViewHeader
      icon={<CodeIcon className="h-4.5 w-4.5" />}
      title="Open API"
      subtitle="Reference"
      right={
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search endpoints..."
            className="w-40 rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-[12px] text-slate-700 placeholder:text-slate-400 focus:border-[#E31E24] focus:outline-none sm:w-56"
          />
        </div>
      }
    />
  );

  return (
    <WeastShell active="api" onNavigate={onNavigate} header={header}>
      <div className="flex h-full">
        {/* inner sidebar: full menu, details stay locked */}
        <aside className="hidden w-52 shrink-0 overflow-y-auto border-r border-slate-200 bg-white p-3 lg:block">
          {SIDEBAR.map((group) => (
            <div key={group.section} className="mb-4">
              <p className="mb-1.5 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">{group.section}</p>
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="mb-0.5 flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-[12px] font-medium text-slate-600 hover:bg-red-50 hover:text-[#E31E24]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </aside>

        {/* main */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div id="openapi-overview" className="scroll-mt-4">
            <h2 className="text-xl font-bold text-slate-900">Open API Access</h2>
            <p className="mt-2 max-w-2xl text-[12.5px] leading-relaxed text-slate-500">
              Call your agents and document intelligence features from any external system over
              HTTP. All endpoints are versioned under <span className="font-mono">/v1</span>.
            </p>
          </div>

          {/* key selector */}
          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-[#E31E24]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] font-bold text-slate-800">
                {selectedKey} <span className="font-mono text-[11px] font-medium text-slate-400">({KEY_MASK})</span>
              </p>
              <p className="text-[11px] text-slate-400">Selected key is inserted into every example.</p>
            </div>
            <select
              value={selectedKey}
              onChange={(e) => setSelectedKey(e.target.value)}
              className="rounded-lg border border-[#E31E24] bg-white px-3 py-2 text-[11.5px] font-semibold text-slate-700 focus:outline-none"
            >
              <option value="agent:financial-analyst">agent:financial-analyst ({KEY_MASK})</option>
              <option value="agent:credit-analysis-supervisor">agent:credit-analysis-supervisor ({KEY_MASK})</option>
            </select>
            <button className="text-[11.5px] font-bold text-[#E31E24] hover:underline">Manage keys →</button>
          </div>

          {/* base url */}
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Base URL
            </p>
            <p className="mt-2 font-mono text-[12px] font-bold text-slate-800">{BASE}</p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
              Requests and responses are JSON unless noted. Document upload uses{" "}
              <span className="font-mono">multipart/form-data</span>; streaming chat returns SSE.
            </p>
          </div>

          {/* authentication */}
          <div id="openapi-authentication" className="mt-4 scroll-mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <LockIcon className="h-3.5 w-3.5" />
              Authentication
            </p>
            <p className="mt-2 text-[11.5px] leading-relaxed text-slate-500">
              Send your workspace API key in the <span className="font-mono">x-api-key</span> header on
              every request. Keys are managed in{" "}
              <span className="font-semibold text-[#E31E24]">Workspace → API Keys</span>. The full secret
              is shown only once at creation, so store it securely.
            </p>
            <div className="relative mt-3 rounded-lg bg-[#0d1526] px-4 py-3">
              <CopyButton text={`x-api-key: ${KEY_MASK}`} />
              <p className="font-mono text-[11px] text-emerald-300">x-api-key: {KEY_MASK}</p>
            </div>
          </div>

          {/* endpoint sections: menu visible, details locked */}
          {sections.map(
            (s) =>
              s.items.length > 0 && (
                <div key={s.name} className="mt-8">
                  <h3 className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
                    <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    {s.name}
                  </h3>
                  <div className="mt-3 space-y-3">
                    {s.items.map((e) => (
                      <div
                        key={e.id}
                        id={`openapi-${e.id}`}
                        className="flex scroll-mt-4 flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                      >
                        <span className={`rounded border px-2 py-0.5 font-mono text-[10px] font-bold ${METHOD_STYLES[e.method]}`}>
                          {e.method}
                        </span>
                        <span className="font-mono text-[11.5px] font-semibold text-slate-700">{e.path}</span>
                        <span className="text-[12.5px] font-bold text-slate-800">{e.title}</span>
                        <span className="ml-auto flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          <LockIcon className="h-3 w-3" /> Onboarding only
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
          {visible.length === 0 && (
            <p className="mt-8 rounded-xl border border-dashed border-slate-200 p-6 text-center text-[12px] text-slate-400">
              No endpoints match “{query}”.
            </p>
          )}

          {/* reference note */}
          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
            <p className="text-[11.5px] leading-relaxed text-slate-500">
              Endpoint details, examples, and schemas are shared with your team during onboarding,
              so the public tour stays limited to this overview.
            </p>
          </div>
        </div>
      </div>
    </WeastShell>
  );
}
