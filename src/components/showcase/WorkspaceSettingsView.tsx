"use client";

import { useState } from "react";
import { WeastShell, ViewHeader, GearIcon } from "./WeastShell";
import type { WeastView } from "./WeastShell";

const MENU: { section: string; items: { label: string; locked?: boolean }[] }[] = [
  {
    section: "Workspace",
    items: [{ label: "Overview" }, { label: "General", locked: true }, { label: "Members", locked: true }],
  },
  {
    section: "AI Gateway",
    items: [
      { label: "Model Gateway", locked: true },
      { label: "Usage & Billing", locked: true },
      { label: "Document Processing", locked: true },
    ],
  },
  {
    section: "Security & Audit",
    items: [
      { label: "API Keys", locked: true },
      { label: "MCP Secrets", locked: true },
      { label: "MCP Servers", locked: true },
      { label: "Activity", locked: true },
    ],
  },
];

const STATS = [
  { label: "Members", value: "3", sub: "3 members", icon: "members" },
  { label: "Agents", value: "4", sub: "0 running · 4 idle", icon: "agents" },
  { label: "Documents", value: "0", sub: "in knowledge base", icon: "docs" },
  { label: "Runs (30d)", value: "14", sub: "all traced end to end", icon: "runs" },
];

const ACTIVITY = [
  { who: "ES Admin", what: "Set monthly budget to $10.00", tag: "Budget changed", when: "31d ago" },
  { who: "ES Admin", what: "Invited analyst@easternstack.ai as MEMBER", tag: "Member invited", when: "32d ago" },
  { who: "ES Admin", what: "Changed role of financial-analyst to MEMBER", tag: "Role changed", when: "32d ago" },
];

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

function StatIcon({ kind }: { kind: string }) {
  const cls = "h-4 w-4";
  if (kind === "members")
    return (
      <svg className={`${cls} text-slate-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-4a3 3 0 11-3-3" />
      </svg>
    );
  if (kind === "agents")
    return (
      <svg className={`${cls} text-[#E31E24]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  if (kind === "docs")
    return (
      <svg className={`${cls} text-emerald-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  return (
    <svg className={`${cls} text-amber-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

export default function WorkspaceSettingsView({ onNavigate }: { onNavigate: (v: WeastView) => void }) {
  const [copied, setCopied] = useState(false);
  const keyMask = "sk-es-ras19bced-••••-••••-••••-e52b0a3fed00";

  const header = (
    <ViewHeader
      icon={
        <span className="text-[13px] font-extrabold">C</span>
      }
      title="Credit Scoring"
      subtitle="Workspace Settings"
    />
  );

  return (
    <WeastShell active="settings" onNavigate={onNavigate} header={header}>
      <div className="flex h-full">
        {/* inner sidebar: overview open, rest locked */}
        <aside className="hidden w-52 shrink-0 overflow-y-auto border-r border-slate-200 bg-white p-3 lg:block">
          {MENU.map((group) => (
            <div key={group.section} className="mb-4">
              <p className="mb-1.5 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {group.section}
              </p>
              {group.items.map((item) =>
                item.locked ? (
                  <span
                    key={item.label}
                    className="mb-0.5 flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-[12px] font-medium text-slate-400"
                  >
                    <span className="flex-1">{item.label}</span>
                    <LockIcon className="h-3 w-3 text-slate-300" />
                  </span>
                ) : (
                  <span
                    key={item.label}
                    className="relative mb-0.5 flex w-full items-center gap-2 rounded-md bg-red-50 px-2.5 py-1.5 text-left text-[12px] font-medium text-[#E31E24]"
                  >
                    <span className="absolute left-[-12px] top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r bg-[#E31E24]" />
                    {item.label}
                  </span>
                )
              )}
            </div>
          ))}
        </aside>

        {/* main: overview only */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-[#E31E24]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </span>
            <div>
              <p className="text-[15px] font-bold text-slate-900">Overview</p>
              <p className="text-[11px] text-slate-400">An at-a-glance summary of this workspace.</p>
            </div>
          </div>

          {/* workspace card */}
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[15px] font-extrabold text-[#E31E24]">
                C
              </span>
              <p className="text-[14px] font-bold text-slate-900">Credit Scoring</p>
              <span className="rounded bg-red-50 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-[#E31E24]">
                ADMIN
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Created Jul 30, 2026
              </span>
              <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[10.5px] text-slate-500">
                {keyMask}
              </span>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(keyMask).catch(() => undefined);
                  setCopied(true);
                  window.setTimeout(() => setCopied(false), 1200);
                }}
                className="rounded-md border border-slate-200 bg-white p-1.5 text-slate-400 hover:bg-slate-50"
                title="Copy"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copied && <span className="sr-only">Copied</span>}
              </button>
            </div>
          </div>

          {/* stats */}
          <div className="mt-4 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{s.label}</p>
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-50">
                    <StatIcon kind={s.icon} />
                  </span>
                </div>
                <p className="mt-1 font-mono text-2xl font-bold text-slate-900">{s.value}</p>
                <p className="mt-1 text-[10.5px] text-slate-400">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* spend + activity */}
          <div className="mt-4 grid gap-3 xl:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-[12.5px] font-bold text-slate-800">
                  <span className="text-slate-400">$</span> Model Spend
                </p>
                <span className="flex items-center gap-1 text-[11px] font-bold text-[#E31E24]">
                  Usage <span aria-hidden="true">→</span>
                </span>
              </div>
              <p className="mt-3 font-mono text-2xl font-bold text-slate-900">
                $0.00 <span className="text-[12px] font-medium text-slate-400">/ $10.00</span>
              </p>
              <div className="mt-3 h-1.5 rounded-full bg-slate-100">
                <div className="h-1.5 w-0 rounded-full bg-[#E31E24]" />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-[10.5px] text-slate-400">No spend yet this month</p>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                  On track
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-[12.5px] font-bold text-slate-800">
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Recent Activity
                </p>
                <span className="flex items-center gap-1 text-[11px] font-bold text-[#E31E24]">
                  All <span aria-hidden="true">→</span>
                </span>
              </div>
              <div className="mt-3 space-y-3">
                {ACTIVITY.map((a, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500 text-[10px] font-bold text-white">
                      I
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11.5px] leading-snug text-slate-600">
                        <span className="font-bold text-slate-800">{a.who}</span> {a.what}
                      </p>
                      <p className="mt-1 flex items-center gap-2 text-[10px] text-slate-400">
                        <span className="rounded bg-slate-100 px-1.5 py-0.5 font-semibold text-slate-500">{a.tag}</span>
                        {a.when}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* locked note */}
          <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
            <p className="flex items-center gap-2 text-[11.5px] leading-relaxed text-slate-500">
              <LockIcon className="h-3.5 w-3.5 shrink-0 text-slate-400" />
              General, members, AI gateway, and security settings are walked through with your
              team during onboarding, so the public tour stays on this overview.
            </p>
          </div>
        </div>
      </div>
    </WeastShell>
  );
}
