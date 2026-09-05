"use client";

import { useRef, useState } from "react";
import type { WeastView } from "./WeastShell";
import { ScanIcon, ChatIcon, SparkIcon, ServerIcon, CodeIcon } from "./WeastShell";
import DocIntelligenceView from "./DocIntelligenceView";
import AgentChatView from "./AgentChatView";
import AgentStudioView from "./AgentStudioView";
import AgentRuntimeView from "./AgentRuntimeView";
import OpenApiView from "./OpenApiView";
import AdminLockedView from "./AdminLockedView";
import WorkspaceSettingsView from "./WorkspaceSettingsView";

const FEATURES: {
  id: WeastView;
  title: string;
  desc: string;
  icon: (p: { className?: string }) => React.ReactNode;
}[] = [
  {
    id: "docs",
    title: "Document Intelligence",
    desc: "A file explorer for your knowledge base with OCR, chunking, and per-document cost tracking.",
    icon: ScanIcon,
  },
  {
    id: "chat",
    title: "Agent Chat",
    desc: "Talk to published agents and watch them think, plan, and delegate in the open.",
    icon: ChatIcon,
  },
  {
    id: "studio",
    title: "Agent Studio",
    desc: "Design agents as cards or as a live delegation flow, then wire them together.",
    icon: SparkIcon,
  },
  {
    id: "runtime",
    title: "Agent Runtime",
    desc: "Sleep, wake, and restart agent containers from a UI. No terminal required.",
    icon: ServerIcon,
  },
  {
    id: "api",
    title: "Open API Access",
    desc: "Call agents and document intelligence from any system over versioned HTTP endpoints.",
    icon: CodeIcon,
  },
];

export default function WeastDemo() {
  const [view, setView] = useState<WeastView>("chat");
  const windowRef = useRef<HTMLDivElement>(null);

  const jump = (v: WeastView) => {
    setView(v);
    windowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* App window */}
      <div
        ref={windowRef}
        className="scroll-mt-24 overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl shadow-black/60"
      >
        <div className="h-[520px] md:h-[640px]">
          {view === "docs" && <DocIntelligenceView onNavigate={setView} />}
          {view === "chat" && <AgentChatView onNavigate={setView} />}
          {view === "studio" && <AgentStudioView onNavigate={setView} />}
          {view === "runtime" && <AgentRuntimeView onNavigate={setView} />}
          {view === "api" && <OpenApiView onNavigate={setView} />}
          {view === "admin" && <AdminLockedView onNavigate={setView} />}
          {view === "settings" && <WorkspaceSettingsView onNavigate={setView} />}
        </div>
      </div>

      {/* Connector: tour guide -> module cards */}
      <div aria-hidden="true" className="relative mt-6 h-20">
        {(() => {
          const activeIndex = FEATURES.findIndex((f) => f.id === view);
          return (
            <>
              {/* center stem from the tour window: always on the active path */}
              <div className="flow-line-v absolute left-1/2 top-0 h-8 w-[3px] -translate-x-1/2 text-[#E31E24]" />
              {/* rail segments: only the route to the active card glows red */}
              {[
                { from: 10, to: 30, hot: activeIndex === 0, rev: true },
                { from: 30, to: 50, hot: activeIndex <= 1, rev: true },
                { from: 50, to: 70, hot: activeIndex === 3 || activeIndex === 4, rev: false },
                { from: 70, to: 90, hot: activeIndex === 4, rev: false },
              ].map((s) => (
                <div
                  key={`${s.from}-${s.to}`}
                  className={`${s.rev ? "flow-line-h-rev" : "flow-line-h"} absolute top-8 hidden h-[3px] lg:block ${
                    s.hot ? "text-[#E31E24]" : "text-white/40"
                  }`}
                  style={{ left: `${s.from}%`, right: `${100 - s.to}%` }}
                />
              ))}
              {/* drops with arrows into each card */}
              {[10, 30, 50, 70, 90].map((x, i) => {
                const active = i === activeIndex;
                return (
                  <div
                    key={x}
                    className="absolute top-8 hidden -translate-x-1/2 flex-col items-center lg:flex"
                    style={{ left: `${x}%` }}
                  >
                    <div className={`flow-line-v h-8 w-[3px] ${active ? "text-[#E31E24]" : "text-white/40"}`} />
                    <div
                      className={`h-0 w-0 border-x-[6px] border-t-[8px] border-x-transparent ${
                        active ? "border-t-[#E31E24]" : "border-t-white/50"
                      }`}
                    />
                  </div>
                );
              })}
              {/* simple stem on smaller screens */}
              <div className="flow-line-v absolute left-1/2 top-0 h-20 w-[3px] -translate-x-1/2 text-[#E31E24] lg:hidden" />
            </>
          );
        })()}
      </div>

      {/* Feature shortcuts */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {FEATURES.map((f) => {
          const Icon = f.icon;
          const active = view === f.id;
          return (
            <button
              key={f.id}
              onClick={() => jump(f.id)}
              className={`rounded-xl border p-5 text-left transition-all hover:-translate-y-0.5 ${
                active
                  ? "border-[#E31E24]/60 bg-[#E31E24]/10"
                  : "border-white/10 bg-white/5 hover:border-white/25"
              }`}
            >
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <Icon className="h-4 w-4" />
              </span>
              <p className="mb-1 text-[14px] font-bold text-white">{f.title}</p>
              <p className="text-[11.5px] leading-relaxed text-zinc-400">{f.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
