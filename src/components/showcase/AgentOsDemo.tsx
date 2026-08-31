"use client";

import { useRef, useState } from "react";
import type { AgentOsView } from "./AgentOsShell";
import { ScanIcon, ChatIcon, SparkIcon, ServerIcon } from "./AgentOsShell";
import DocIntelligenceView from "./DocIntelligenceView";
import AgentChatView from "./AgentChatView";
import AgentStudioView from "./AgentStudioView";
import AgentRuntimeView from "./AgentRuntimeView";

const FEATURES: {
  id: AgentOsView;
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
];

export default function AgentOsDemo() {
  const [view, setView] = useState<AgentOsView>("chat");
  const windowRef = useRef<HTMLDivElement>(null);

  const jump = (v: AgentOsView) => {
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
        <div className="h-[640px]">
          {view === "docs" && <DocIntelligenceView onNavigate={setView} />}
          {view === "chat" && <AgentChatView onNavigate={setView} />}
          {view === "studio" && <AgentStudioView onNavigate={setView} />}
          {view === "runtime" && <AgentRuntimeView onNavigate={setView} />}
        </div>
      </div>

      {/* Feature shortcuts */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
