"use client";

import { useEffect, useState } from "react";
import {
  WeastShell,
  ViewHeader,
  ServerIcon,
  BotIcon,
  ScanIcon,
  MoonIcon,
  RefreshIcon,
  ChevronDownIcon,
  StatusBadge,
  SlugChip,
  SpinnerIcon,
} from "./WeastShell";

type WorkerStatus = "online" | "sleeping" | "error" | "restarting";

interface Worker {
  id: string;
  name: string;
  slug: string;
  desc: string;
  status: WorkerStatus;
  uptime: number;
  group: "agents" | "workers";
  shared?: boolean;
  errorNote?: string;
}

const INITIAL_WORKERS: Worker[] = [
  {
    id: "supervisor",
    name: "Credit Analysis Supervisor",
    slug: "credit-analysis-supervisor",
    desc: "Orchestrates financial-statement analysis for a credit application. Ingests the statements, delegates spreading/ratio/red-flag analysis and credit-memo writing, then hands off the package.",
    status: "online",
    uptime: 2,
    group: "agents",
  },
  {
    id: "financial",
    name: "Financial Analyst",
    slug: "financial-analyst",
    desc: "Spreads a borrower's financial statements, computes credit ratios and multi-year trends, and scans for financial red flags. Evidence-grounded in the source statements.",
    status: "sleeping",
    uptime: 0,
    group: "agents",
  },
  {
    id: "writer",
    name: "Credit Report Writer",
    slug: "credit-report-writer",
    desc: "Turns a financial analysis into an analyst-ready credit memo with an indicative internal rating and score.",
    status: "sleeping",
    uptime: 0,
    group: "agents",
  },
  {
    id: "ingestion",
    name: "Ingestion Worker",
    slug: "document-ingestion",
    desc: "Worker heartbeat timeout, last seen 28m ago",
    status: "error",
    uptime: 0,
    group: "workers",
    shared: true,
    errorNote: "Worker heartbeat timeout, last seen 28m ago",
  },
];

const fmtUptime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export default function AgentRuntimeView({
  onNavigate,
}: {
  onNavigate: (view: "docs" | "chat" | "studio" | "runtime") => void;
}) {
  const [workers, setWorkers] = useState(INITIAL_WORKERS);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  /* live uptime tick */
  useEffect(() => {
    const id = window.setInterval(() => {
      setWorkers((prev) =>
        prev.map((w) => (w.status === "online" ? { ...w, uptime: w.uptime + 1 } : w))
      );
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const setStatus = (id: string, status: WorkerStatus) => {
    setWorkers((prev) => prev.map((w) => (w.id === id ? { ...w, status, uptime: 0 } : w)));
    if (status === "restarting") {
      window.setTimeout(() => {
        setWorkers((prev) =>
          prev.map((w) => (w.id === id ? { ...w, status: "online", uptime: 0, errorNote: undefined } : w))
        );
      }, 1400);
    }
  };

  const agents = workers.filter((w) => w.group === "agents");
  const diWorkers = workers.filter((w) => w.group === "workers");
  const online = agents.filter((w) => w.status === "online").length;
  const offline = agents.filter((w) => w.status !== "online").length;
  const errors = workers.filter((w) => w.status === "error").length;

  const refresh = () => {
    setRefreshing(true);
    window.setTimeout(() => setRefreshing(false), 900);
  };

  const header = (
    <ViewHeader
      icon={<ServerIcon className="h-4.5 w-4.5" />}
      title="Agent Runtime"
      subtitle="Per-agent worker containers · Credit Scoring"
      right={
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
          </span>
          <button
            onClick={refresh}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-[12px] font-semibold text-slate-700 hover:bg-slate-50"
          >
            <RefreshIcon className={`h-3.5 w-3.5 ${refreshing ? "animate-spin" : ""}`} /> Refresh
          </button>
        </div>
      }
    />
  );

  const stats = [
    { label: "REGISTERED", value: agents.length, cls: "text-slate-900", ring: "" },
    { label: "ONLINE", value: online, cls: "text-emerald-600", ring: "border-emerald-200" },
    { label: "OFFLINE", value: offline, cls: "text-slate-500", ring: "" },
    { label: "ERRORS", value: errors, cls: "text-[#E31E24]", ring: errors > 0 ? "border-red-200" : "" },
  ];

  const renderRow = (w: Worker) => {
    const isOpen = expanded === w.id;
    return (
      <div key={w.id} className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center gap-2 px-3 py-3 sm:gap-3 sm:px-4">
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
              w.status === "error"
                ? "bg-sky-50 text-sky-500"
                : w.status === "online"
                  ? "bg-red-50 text-[#E31E24]"
                  : "bg-slate-100 text-slate-400"
            }`}
          >
            {w.group === "workers" ? <ScanIcon className="h-4 w-4" /> : <BotIcon className="h-4 w-4" />}
          </span>
          <div className="min-w-0 flex-1">
            <p className="flex flex-wrap items-center gap-2 text-[13px] font-bold text-slate-800">
              {w.name} <SlugChip>{w.slug}</SlugChip>
              {w.shared && (
                <span className="rounded bg-sky-50 px-1.5 py-0.5 text-[9px] font-bold text-sky-500">Shared</span>
              )}
            </p>
            <p className={`truncate text-[11px] ${w.status === "error" ? "font-semibold text-[#E31E24]" : "text-slate-400"}`}>
              {w.status === "error" ? w.errorNote : w.desc}
            </p>
          </div>

          {w.status === "online" && <StatusBadge kind="online" label={`ONLINE · ${fmtUptime(w.uptime)}`} />}
          {w.status === "sleeping" && <StatusBadge kind="sleeping" label="SLEEPING" />}
          {w.status === "error" && <StatusBadge kind="error" label="ERROR" />}
          {w.status === "restarting" && (
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-500">
              <SpinnerIcon className="h-3.5 w-3.5" /> RESTARTING
            </span>
          )}

          {w.status === "online" && (
            <button
              onClick={() => setStatus(w.id, "sleeping")}
              className="flex items-center gap-1.5 rounded-lg border border-indigo-200 px-3 py-1.5 text-[11.5px] font-semibold text-indigo-500 hover:bg-indigo-50"
            >
              <MoonIcon className="h-3 w-3" /> Sleep
            </button>
          )}
          {(w.status === "sleeping" || w.status === "error") && (
            <button
              onClick={() => setStatus(w.id, "restarting")}
              className="rounded-lg border border-emerald-200 px-3 py-1.5 text-[11.5px] font-semibold text-emerald-600 hover:bg-emerald-50"
            >
              Wake
            </button>
          )}
          <button
            onClick={() => setStatus(w.id, "restarting")}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-[11.5px] font-semibold text-slate-500 hover:bg-slate-50"
          >
            Restart
          </button>
          <button
            onClick={() => setExpanded(isOpen ? null : w.id)}
            className="text-slate-400 hover:text-slate-600"
            title="Details"
          >
            <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
        {isOpen && (
          <div className="grid gap-2 border-t border-slate-100 bg-slate-50/60 px-5 py-3 font-mono text-[10.5px] text-slate-500 sm:grid-cols-3">
            <p>image: weast/worker:0.1.0</p>
            <p>container: {w.slug}-7f3d2</p>
            <p>
              {w.status === "online"
                ? `uptime: ${fmtUptime(w.uptime)}`
                : w.status === "error"
                  ? "last event: heartbeat_timeout"
                  : "last event: scale_to_zero"}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <WeastShell active="runtime" onNavigate={onNavigate} header={header}>
      <div className="space-y-6 p-3 sm:p-6">
        {/* stats */}
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm ${s.ring}`}>
              <p className={`font-mono text-2xl font-bold ${s.cls}`}>{s.value}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>

        {/* online */}
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Online · {online}
          </p>
          <div className="space-y-3">
            {agents.filter((w) => w.status === "online" || w.status === "restarting").map(renderRow)}
            {online === 0 && (
              <p className="rounded-xl border border-dashed border-slate-200 p-4 text-center text-[11.5px] text-slate-400">
                No agents online. Wake one below to start processing.
              </p>
            )}
          </div>
        </div>

        {/* offline */}
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Offline · {offline}
          </p>
          <div className="space-y-3">
            {agents.filter((w) => w.status === "sleeping").map(renderRow)}
          </div>
        </div>

        {/* DI workers */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-50 text-sky-500">
              <ScanIcon className="h-3.5 w-3.5" />
            </span>
            <div className="leading-tight">
              <p className="text-[13px] font-bold text-slate-800">Document Intelligence Workers</p>
              <p className="text-[10px] text-slate-400">
                Ingestion, OCR & reindex workers · {diWorkers.filter((w) => w.status === "online").length} online
              </p>
            </div>
          </div>
          <div className="space-y-3">{diWorkers.map(renderRow)}</div>
        </div>
      </div>
    </WeastShell>
  );
}
