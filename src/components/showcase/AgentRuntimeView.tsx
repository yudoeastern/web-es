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
import type { WeastView } from "./WeastShell";

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
  runtimeId: string;
  version: string;
  containerId: string;
  mem: string;
  vcpu: string;
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
    runtimeId: "5febd8e1-8379-4eec-8169-9f6301f64856",
    version: "4f9af484-bb6b-4e4c-aed9-1a4411dac141",
    containerId: "44d9e950d66c",
    mem: "512 MB",
    vcpu: "1.00",
  },
  {
    id: "financial",
    name: "Financial Analyst",
    slug: "financial-analyst",
    desc: "Spreads a borrower's financial statements, computes credit ratios and multi-year trends, and scans for financial red flags. Evidence-grounded in the source statements.",
    status: "sleeping",
    uptime: 0,
    group: "agents",
    runtimeId: "9c21d4a7-6f30-4b8e-a1d2-7e8b3c9d0e5f",
    version: "4f9af484-bb6b-4e4c-aed9-1a4411dac141",
    containerId: "7b1c83af2e90",
    mem: "0 MB · scaled to zero",
    vcpu: "0.00",
  },
  {
    id: "writer",
    name: "Credit Report Writer",
    slug: "credit-report-writer",
    desc: "Turns a financial analysis into an analyst-ready credit memo with an indicative internal rating and score.",
    status: "sleeping",
    uptime: 0,
    group: "agents",
    runtimeId: "d4e5f6a7-b8c9-4d0e-a1b2-c3d4e5f6a7b8",
    version: "4f9af484-bb6b-4e4c-aed9-1a4411dac141",
    containerId: "2f60b7c1d483",
    mem: "0 MB · scaled to zero",
    vcpu: "0.00",
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
    runtimeId: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    version: "4f9af484-bb6b-4e4c-aed9-1a4411dac141",
    containerId: "9e8d7c6b5a4f",
    mem: "256 MB",
    vcpu: "0.50",
  },
];

function workerLogs(w: Worker): { t: string; c?: "warn" | "error" }[] {
  const head = [
    { t: "WEAST Dedicated Worker starting" },
    { t: `  agent_key    : ${w.slug}` },
    { t: "  workspace_id : 2819bced-54d8-41da-8497-e52b0a3fed00" },
    { t: "  backend_url  : http://apigateway:8000" },
    { t: "  orchestrator : weast-orchestrator:7233 (ns=eap-agentic)" },
    { t: "" },
  ];
  if (w.status === "error") {
    return [
      ...head,
      { t: "[warn] heartbeat missed · 1/3" },
      { t: "[error] heartbeat_timeout · last seen 28m ago", c: "error" },
      { t: "[warn] retry scheduled · backoff 30s" },
    ];
  }
  if (w.status === "sleeping") {
    return [...head, { t: "[info] task queue listening" }, { t: "[info] scale_to_zero · memory released" }];
  }
  return [
    ...head,
    { t: "[info] task queue listening" },
    { t: "[info] heartbeat ok · 42ms" },
    { t: "[info] run 7f3d2c91 started · pt_kopi_arunika_financial_statements.png" },
    { t: "[info] delegated → financial-analyst · spreading/ratio/red-flags" },
    { t: "[info] delegated → credit-report-writer · memo draft" },
    { t: "[info] run 7f3d2c91 completed · 41.2s · $0.0841" },
  ];
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{label}</p>
      <p className="mt-0.5 truncate font-mono text-[10.5px] text-slate-600">{value}</p>
    </div>
  );
}

const fmtUptime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export default function AgentRuntimeView({
  onNavigate,
}: {
  onNavigate: (view: WeastView) => void;
}) {
  const [workers, setWorkers] = useState(INITIAL_WORKERS);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [hiddenLogs, setHiddenLogs] = useState<Record<string, boolean>>({});

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
          <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-4">
            <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              <Detail label="Agent key" value={w.slug} />
              <Detail label="Runtime ID" value={w.runtimeId} />
              <Detail label="Active version" value={w.version} />
              <Detail
                label="Last heartbeat"
                value={
                  w.status === "online"
                    ? "3s ago"
                    : w.status === "error"
                      ? "28m ago"
                      : "scaled to zero"
                }
              />
              <Detail label="Container ID" value={w.containerId} />
              <Detail label="Image" value="weast/agent-worker:latest" />
              <Detail label="Memory" value={w.mem} />
              <Detail label="vCPU" value={w.vcpu} />
            </div>
            <button
              onClick={() => setHiddenLogs((prev) => ({ ...prev, [w.id]: !prev[w.id] }))}
              className="mt-3 text-[11px] font-semibold text-slate-500 hover:text-slate-700"
            >
              {hiddenLogs[w.id] ? "Show logs" : "Hide logs"}
            </button>
            {!hiddenLogs[w.id] && (
              <div className="mt-2 overflow-x-auto rounded-lg bg-[#0d1526] p-4">
                {workerLogs(w).map((line, i) => (
                  <p
                    key={i}
                    className={`whitespace-pre font-mono text-[10.5px] leading-relaxed ${
                      line.c === "error"
                        ? "text-red-400"
                        : line.c === "warn"
                          ? "text-amber-300"
                          : "text-emerald-300"
                    }`}
                  >
                    {line.t || " "}
                  </p>
                ))}
              </div>
            )}
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
