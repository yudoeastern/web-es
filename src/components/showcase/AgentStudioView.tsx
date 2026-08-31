"use client";

import { useState } from "react";
import {
  AgentOsShell,
  ViewHeader,
  SparkIcon,
  BotIcon,
  PlusIcon,
  GridIcon,
  ListIcon,
  FlowIcon,
  StatusBadge,
  SlugChip,
} from "./AgentOsShell";

interface StudioAgent {
  id: string;
  name: string;
  slug: string;
  model: string;
  online: boolean;
  tools: number;
  delegates: number;
  desc: string;
}

const INITIAL_AGENTS: StudioAgent[] = [
  {
    id: "supervisor",
    name: "Credit Analysis Supervisor",
    slug: "credit-analysis-supervisor",
    model: "alibaba/qwen3.8-max",
    online: false,
    tools: 3,
    delegates: 2,
    desc: "Orchestrates financial-statement analysis for a credit application.",
  },
  {
    id: "financial",
    name: "Financial Analyst",
    slug: "financial-analyst",
    model: "alibaba/qwen3-max",
    online: true,
    tools: 4,
    delegates: 0,
    desc: "Spreads statements, computes ratios and multi-year trends.",
  },
  {
    id: "writer",
    name: "Credit Report Writer",
    slug: "credit-report-writer",
    model: "alibaba/qwen3-max",
    online: true,
    tools: 2,
    delegates: 0,
    desc: "Turns analysis into an analyst-ready credit memo.",
  },
];

type Mode = "card" | "list" | "flow";

export default function AgentStudioView({
  onNavigate,
}: {
  onNavigate: (view: "docs" | "chat" | "studio" | "runtime") => void;
}) {
  const [mode, setMode] = useState<Mode>("flow");
  const [agents, setAgents] = useState(INITIAL_AGENTS);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(132);
  const [customCount, setCustomCount] = useState(0);

  const selected = agents.find((a) => a.id === selectedId) ?? null;

  const addAgent = () => {
    const n = customCount + 1;
    setCustomCount(n);
    setAgents((prev) => [
      ...prev,
      {
        id: `custom-${n}`,
        name: `Custom Agent ${n}`,
        slug: `custom-agent-${n}`,
        model: "alibaba/qwen3-max",
        online: false,
        tools: 0,
        delegates: 0,
        desc: "Draft agent. Configure tools and delegation to publish it.",
      },
    ]);
  };

  const header = (
    <ViewHeader
      icon={<SparkIcon className="h-4.5 w-4.5" />}
      title="Agent Studio"
      subtitle={`Credit Scoring · ${agents.length} agents`}
      right={
        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden rounded-lg border border-slate-200">
            {(
              [
                ["card", GridIcon],
                ["list", ListIcon],
                ["flow", FlowIcon],
              ] as [Mode, (p: { className?: string }) => React.ReactNode][]
            ).map(([id, Icon]) => (
              <button
                key={id}
                onClick={() => setMode(id)}
                className={`px-3 py-2 transition-colors ${
                  mode === id ? "bg-slate-100 text-slate-800" : "bg-white text-slate-400 hover:text-slate-600"
                }`}
                title={`${id} view`}
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
          <button
            onClick={addAgent}
            className="flex items-center gap-2 rounded-lg bg-[#E31E24] px-4 py-2 text-[12.5px] font-semibold text-white shadow-sm transition-colors hover:bg-[#C4181E]"
          >
            <PlusIcon className="h-3.5 w-3.5" /> New agent
          </button>
        </div>
      }
    />
  );

  return (
    <AgentOsShell active="studio" onNavigate={onNavigate} header={header}>
      {mode === "card" && (
        <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-[13.5px] font-bold text-slate-900">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-red-50 text-[#E31E24]">
                    <BotIcon className="h-4 w-4" />
                  </span>
                  {agent.name}
                </span>
                <StatusBadge kind={agent.online ? "online" : "offline"} label={agent.online ? "ONLINE" : "OFFLINE"} />
              </div>
              <p className="mb-1 font-mono text-[10px] text-slate-400">
                {agent.slug} · v1
              </p>
              <p className="mb-3 text-[11.5px] leading-relaxed text-slate-500">{agent.desc}</p>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                  {agent.tools} tools
                </span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                  {agent.delegates} delegates
                </span>
                <button
                  onClick={() => onNavigate("chat")}
                  className="ml-auto rounded-md border border-red-200 px-2.5 py-1 text-[10.5px] font-semibold text-[#E31E24] hover:bg-red-50"
                >
                  Open in Chat
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {mode === "list" && (
        <div className="p-6">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-[1.4fr_1.2fr_1fr_90px_70px_90px] gap-2 border-b border-slate-100 px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <span>Name</span>
              <span>Slug</span>
              <span>Model</span>
              <span>Status</span>
              <span>Tools</span>
              <span>Delegates</span>
            </div>
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="grid grid-cols-[1.4fr_1.2fr_1fr_90px_70px_90px] items-center gap-2 border-b border-slate-50 px-4 py-3 last:border-0 hover:bg-slate-50"
              >
                <span className="flex items-center gap-2 text-[12.5px] font-semibold text-slate-800">
                  <BotIcon className="h-4 w-4 text-slate-400" /> {agent.name}
                </span>
                <SlugChip>{agent.slug}</SlugChip>
                <span className="font-mono text-[10.5px] text-slate-500">{agent.model}</span>
                <StatusBadge kind={agent.online ? "online" : "offline"} label={agent.online ? "ONLINE" : "OFFLINE"} />
                <span className="font-mono text-[11px] text-slate-600">{agent.tools}</span>
                <span className="font-mono text-[11px] text-slate-600">{agent.delegates}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {mode === "flow" && (
        <div className="flex h-full">
          {/* canvas */}
          <div className="relative min-w-0 flex-1 overflow-auto bg-[#FAFBFC]">
            {/* dot grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, #d8dde5 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            {/* toolbar */}
            <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
              <div className="flex items-center rounded-lg border border-slate-200 bg-white shadow-sm">
                <button
                  onClick={() => setZoom((z) => Math.max(60, z - 12))}
                  className="px-2.5 py-1.5 text-slate-500 hover:text-slate-800"
                >
                  −
                </button>
                <span className="min-w-[46px] text-center font-mono text-[11px] text-slate-600">{zoom}%</span>
                <button
                  onClick={() => setZoom((z) => Math.min(200, z + 12))}
                  className="px-2.5 py-1.5 text-slate-500 hover:text-slate-800"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => setZoom(100)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm hover:bg-slate-50"
              >
                ⤢ Fit
              </button>
            </div>
            {/* legend */}
            <div className="absolute right-4 top-4 z-10 flex items-center gap-4 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-[10.5px] text-slate-500 shadow-sm">
              <span className="flex items-center gap-1.5">
                <span className="h-[2px] w-5 rounded bg-[#E31E24]" /> Delegates
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-[2px] w-5 rounded bg-slate-300 [background:repeating-linear-gradient(90deg,#cbd5e1_0_4px,transparent_4px_7px)]" />
                No connection
              </span>
            </div>

            {/* scaled canvas */}
            <div className="flex min-h-full items-center justify-center p-8">
              <div
                className="relative h-[430px] w-[860px] shrink-0 transition-transform duration-300"
                style={{ transform: `scale(${zoom / 100})` }}
              >
                {/* edges */}
                <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 860 430">
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#E31E24" />
                    </marker>
                  </defs>
                  <path
                    className="flow-edge"
                    d="M 430 140 C 430 200, 260 190, 260 248"
                    fill="none"
                    stroke="#E31E24"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                  />
                  <path
                    className="flow-edge"
                    d="M 430 140 C 430 200, 600 190, 600 248"
                    fill="none"
                    stroke="#E31E24"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                  />
                  <text x="255" y="196" fontSize="11" fontFamily="monospace" fill="#E31E24">
                    depth 2 · 10 calls
                  </text>
                  <text x="505" y="196" fontSize="11" fontFamily="monospace" fill="#E31E24">
                    depth 2 · 10 calls
                  </text>
                </svg>

                {/* supervisor node */}
                <button
                  onClick={() => setSelectedId("supervisor")}
                  className={`absolute left-[280px] top-[30px] w-[300px] rounded-2xl bg-slate-900 p-4 text-left shadow-xl transition-shadow ${
                    selectedId === "supervisor" ? "ring-2 ring-[#E31E24]" : ""
                  }`}
                >
                  <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-slate-400 bg-white" />
                  <span className="absolute bottom-[-5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-slate-400 bg-white" />
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E31E24] text-white">
                      <BotIcon className="h-5 w-5" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-[14px] font-bold text-white">Credit Analysis Supervisor</p>
                      <p className="font-mono text-[10px] text-slate-400">alibaba/qwen3.8-max · v1</p>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-1.5">
                    <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-semibold text-slate-200">3 tools</span>
                    <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-semibold text-slate-200">2 delegates</span>
                  </div>
                </button>

                {/* child nodes */}
                {(
                  [
                    ["financial", "Financial Analyst", "financial-analyst", 130],
                    ["writer", "Credit Report Writer", "credit-report-writer", 470],
                  ] as const
                ).map(([id, name, slug, left]) => (
                  <button
                    key={id}
                    onClick={() => setSelectedId(id)}
                    className={`absolute top-[250px] w-[260px] rounded-xl border border-slate-200 bg-white p-4 text-left shadow-md transition-shadow ${
                      selectedId === id ? "ring-2 ring-[#E31E24]" : ""
                    }`}
                    style={{ left }}
                  >
                    <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-slate-400 bg-white" />
                    <span className="absolute bottom-[-5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-slate-400 bg-white" />
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                        <BotIcon className="h-4 w-4" />
                      </span>
                      <div className="leading-tight">
                        <p className="text-[13px] font-bold text-slate-900">{name}</p>
                        <p className="font-mono text-[9.5px] text-slate-400">{slug} · v1</p>
                      </div>
                    </div>
                    <div className="mt-2.5 flex gap-1.5">
                      <span className="rounded-md bg-red-50 px-2 py-0.5 text-[10px] font-bold text-[#E31E24]">delegate</span>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">depth 1</span>
                    </div>
                  </button>
                ))}

                {/* custom agents: no connection */}
                {agents
                  .filter((a) => a.id.startsWith("custom-"))
                  .map((a, i) => (
                    <button
                      key={a.id}
                      onClick={() => setSelectedId(a.id)}
                      className={`absolute top-[30px] w-[180px] rounded-xl border border-dashed border-slate-300 bg-white/70 p-3 text-left ${
                        selectedId === a.id ? "ring-2 ring-[#E31E24]" : ""
                      }`}
                      style={{ left: i === 0 ? 20 : 660 }}
                    >
                      <p className="text-[11.5px] font-bold text-slate-700">{a.name}</p>
                      <p className="font-mono text-[9px] text-slate-400">{a.slug}</p>
                    </button>
                  ))}
              </div>
            </div>
          </div>

          {/* inspector */}
          <div className="hidden w-64 shrink-0 flex-col border-l border-slate-200 bg-white p-5 lg:flex">
            {selected ? (
              <>
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-[#E31E24]">
                    <BotIcon className="h-4.5 w-4.5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[13px] font-bold text-slate-900">{selected.name}</p>
                    <p className="font-mono text-[9.5px] text-slate-400">{selected.slug}</p>
                  </div>
                </div>
                <StatusBadge kind={selected.online ? "online" : "offline"} label={selected.online ? "ONLINE" : "OFFLINE"} />
                <p className="mt-3 text-[11.5px] leading-relaxed text-slate-500">{selected.desc}</p>
                <div className="mt-3 space-y-1.5 font-mono text-[10.5px] text-slate-500">
                  <p>model: {selected.model}</p>
                  <p>tools: {selected.tools}</p>
                  <p>delegates: {selected.delegates}</p>
                </div>
                <div className="mt-5 space-y-2">
                  <button
                    onClick={() => onNavigate("chat")}
                    className="w-full rounded-lg bg-[#E31E24] px-3 py-2 text-[11.5px] font-semibold text-white hover:bg-[#C4181E]"
                  >
                    Open in Chat
                  </button>
                  <button className="w-full rounded-lg border border-slate-200 px-3 py-2 text-[11.5px] font-semibold text-slate-600 hover:bg-slate-50">
                    Manage delegation
                  </button>
                </div>
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-400">
                  <FlowIcon className="h-5 w-5" />
                </span>
                <p className="text-[13px] font-bold text-slate-800">Select an agent</p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400">
                  Click any node on the canvas to inspect it, manage delegation, or open it in the Studio.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </AgentOsShell>
  );
}
