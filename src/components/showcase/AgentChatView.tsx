"use client";

import { useEffect, useRef, useState } from "react";
import {
  AgentOsShell,
  ViewHeader,
  ChatIcon,
  BotIcon,
  PlusIcon,
  ClipIcon,
  SendIcon,
  UserIcon,
  ChevronDownIcon,
  CheckIcon,
  SpinnerIcon,
  StatusBadge,
} from "./AgentOsShell";

interface AgentDef {
  id: string;
  name: string;
  slug: string;
  desc: string;
  online: boolean;
  specialists?: string[];
}

const AGENTS: AgentDef[] = [
  { id: "general", name: "Agent AI", slug: "agent-ai", desc: "General purpose assistant for the workspace.", online: false },
  {
    id: "financial",
    name: "Financial Analyst",
    slug: "financial-analyst",
    desc: "Spreads a borrower's financial statements, computes credit ratios and multi-year trends, and scans for red flags.",
    online: true,
  },
  {
    id: "writer",
    name: "Credit Report Writer",
    slug: "credit-report-writer",
    desc: "Turns a financial analysis into an analyst-ready credit memo with an indicative internal rating and score.",
    online: true,
  },
  {
    id: "supervisor",
    name: "Credit Analysis Supervisor",
    slug: "credit-analysis-supervisor",
    desc: "Orchestrates financial-statement analysis for a credit application. Ingests the statements, delegates analysis and memo writing, then hands off the package.",
    online: true,
    specialists: ["Financial Analyst", "Credit Report Writer"],
  },
];

const PLAN_ITEMS = [
  "Ingest financial statement document bfdc1f01",
  "Delegate financial analysis to financial-analyst",
  "Delegate credit memo to credit-report-writer",
  "Submit package via credit_handoff",
  "Summarise recommendation and origination ref for user",
];

const DEMO_QUESTION = "Analyze this financial statement";

const FINAL_ANSWER =
  "Credit memo ready. Revenue grew at a 13.8% CAGR from FY2023 to FY2025, while EBIT margin compressed from 9.9% to 6.6%. DSCR stands at 1.4x. Recommendation: APPROVE with covenants, facility of IDR 40B working capital, 12 months, secured by receivables. Origination ref ORG-2026-0831.";

type Phase = "boot" | "user-typing" | "thinking" | "plan" | "waiting" | "answer" | "done";

export default function AgentChatView({
  onNavigate,
}: {
  onNavigate: (view: "docs" | "chat" | "studio" | "runtime") => void;
}) {
  const [stage, setStage] = useState<"picker" | "chat">("chat");
  const [agents, setAgents] = useState(AGENTS);
  const [selectedId, setSelectedId] = useState<string | null>("supervisor");
  const [bootingId, setBootingId] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("boot");
  const [userTyped, setUserTyped] = useState("");
  const [planDone, setPlanDone] = useState(0);
  const [answerLen, setAnswerLen] = useState(0);
  const [custom, setCustom] = useState<{ q: string; a: string }[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const selected = agents.find((a) => a.id === selectedId) ?? null;
  const isSupervisor = selected?.id === "supervisor";

  const openChat = (agent: AgentDef) => {
    if (!agent.online) {
      setBootingId(agent.id);
      window.setTimeout(() => {
        setAgents((prev) => prev.map((a) => (a.id === agent.id ? { ...a, online: true } : a)));
        setBootingId(null);
        setSelectedId(agent.id);
        setStage("chat");
        setPhase("boot");
      }, 1200);
      return;
    }
    setSelectedId(agent.id);
    setStage("chat");
    setPhase("boot");
  };

  const newChat = () => {
    setPhase("boot");
    setUserTyped("");
    setPlanDone(0);
    setAnswerLen(0);
    setCustom([]);
    setInput("");
  };

  /* auto demo sequence */
  useEffect(() => {
    if (stage !== "chat" || phase !== "boot") return;
    const t = window.setTimeout(() => setPhase("user-typing"), 900);
    return () => window.clearTimeout(t);
  }, [stage, phase]);

  useEffect(() => {
    if (phase !== "user-typing") return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setUserTyped(DEMO_QUESTION.slice(0, i));
      if (i >= DEMO_QUESTION.length) {
        window.clearInterval(id);
        window.setTimeout(() => setPhase("thinking"), 500);
      }
    }, 35);
    return () => window.clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "thinking") return;
    const t = window.setTimeout(() => setPhase(isSupervisor ? "plan" : "answer"), 1400);
    return () => window.clearTimeout(t);
  }, [phase, isSupervisor]);

  useEffect(() => {
    if (phase !== "plan") return;
    let n = 0;
    const id = window.setInterval(() => {
      n += 1;
      setPlanDone(n);
      if (n >= PLAN_ITEMS.length) {
        window.clearInterval(id);
        window.setTimeout(() => setPhase("waiting"), 500);
      }
    }, 750);
    return () => window.clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "waiting") return;
    const t = window.setTimeout(() => setPhase("answer"), 1100);
    return () => window.clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "answer") return;
    const id = window.setInterval(() => {
      setAnswerLen((prev) => {
        const next = Math.min(FINAL_ANSWER.length, prev + 2);
        if (next >= FINAL_ANSWER.length) {
          window.clearInterval(id);
          window.setTimeout(() => setPhase("done"), 400);
        }
        return next;
      });
    }, 18);
    return () => window.clearInterval(id);
  }, [phase]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [phase, userTyped, planDone, answerLen, custom]);

  const sendCustom = () => {
    const q = input.trim();
    if (!q) return;
    setInput("");
    setCustom((prev) => [
      ...prev,
      { q, a: "This demo runs fully in your browser, so my reply is simulated. In production I would ground the answer in your indexed documents and tools." },
    ]);
  };

  const header = (
    <ViewHeader
      icon={<ChatIcon className="h-4.5 w-4.5" />}
      title={stage === "chat" && selected ? selected.name : "Agent Chat"}
      subtitle="Credit Scoring"
      right={
        stage === "chat" && selected ? (
          <StatusBadge kind="online" label="ONLINE" />
        ) : undefined
      }
    />
  );

  return (
    <AgentOsShell active="chat" onNavigate={onNavigate} header={header}>
      <div className="flex h-full">
        {/* secondary rail */}
        <div className="hidden w-56 shrink-0 flex-col border-r border-slate-200 bg-white sm:flex">
          <div className="border-b border-slate-100 p-3">
            <button className="flex w-full items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-red-50 text-[#E31E24]">
                <BotIcon className="h-3.5 w-3.5" />
              </span>
              <span className="flex-1 truncate text-left text-[12.5px] font-semibold text-slate-800">
                {selected ? selected.name : "Select an agent"}
              </span>
              {selected?.online && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
              <ChevronDownIcon className="h-3.5 w-3.5 text-slate-400" />
            </button>
          </div>
          <div className="p-3">
            <button
              onClick={newChat}
              className="flex w-full items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-[12.5px] font-semibold text-[#E31E24] transition-colors hover:bg-red-100"
            >
              <PlusIcon className="h-3.5 w-3.5" /> New chat
            </button>
          </div>
          <div className="flex-1" />
          <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-400">« Collapse</p>
        </div>

        {/* main */}
        <div className="flex min-w-0 flex-1 flex-col">
          {stage === "picker" ? (
            <div className="flex-1 overflow-y-auto p-6">
              <p className="mb-4 text-[13.5px] font-semibold text-slate-700">Choose an agent to chat with</p>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {agents.map((agent) => (
                  <button
                    key={agent.id}
                    onClick={() => openChat(agent)}
                    className="rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
                  >
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 text-[13.5px] font-bold text-slate-900">
                        <span
                          className={`h-2 w-2 rounded-full ${agent.online ? "bg-emerald-500" : "bg-slate-300"}`}
                        />
                        {agent.name}
                      </span>
                      {bootingId === agent.id ? (
                        <SpinnerIcon className="h-4 w-4 text-amber-500" />
                      ) : (
                        <StatusBadge kind={agent.online ? "online" : "offline"} label={agent.online ? "ONLINE" : "OFFLINE"} />
                      )}
                    </div>
                    <p className="text-[11.5px] leading-relaxed text-slate-500">{agent.desc}</p>
                    {!agent.online && bootingId !== agent.id && (
                      <p className="mt-2 text-[10.5px] italic text-slate-400">
                        Offline. Sending a message will start it in a few seconds.
                      </p>
                    )}
                    {agent.specialists && (
                      <div className="mt-3 border-t border-slate-100 pt-2">
                        <p className="mb-1.5 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                          Specialists
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {agent.specialists.map((s) => (
                            <span
                              key={s}
                              className="flex items-center gap-1 rounded-full border border-slate-200 px-2 py-0.5 text-[10px] text-slate-500"
                            >
                              <span className="h-1 w-1 rounded-full bg-emerald-500" /> {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* chat header strip */}
              <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 bg-white px-5 py-2.5">
                <button
                  onClick={() => setStage("picker")}
                  className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500 hover:bg-slate-100"
                >
                  ← Studio
                </button>
                <p className="text-[13.5px] font-bold text-slate-900">{selected?.name}</p>
                <StatusBadge kind="online" label="Online" />
                {isSupervisor && (
                  <span className="ml-2 flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-widest text-slate-400">
                    Assisted by
                    <span className="rounded-full border border-slate-200 px-2 py-0.5 text-[10px] font-medium normal-case tracking-normal text-slate-500">
                      Financial Analyst
                    </span>
                    <span className="rounded-full border border-slate-200 px-2 py-0.5 text-[10px] font-medium normal-case tracking-normal text-slate-500">
                      Credit Report Writer
                    </span>
                  </span>
                )}
              </div>

              {/* messages */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-6">
                {phase === "boot" && custom.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#E31E24] shadow-sm">
                      <BotIcon className="h-7 w-7" />
                    </span>
                    <p className="text-[17px] font-bold text-slate-900">{selected?.name}</p>
                    <p className="mt-1 text-[12.5px] text-slate-400">Start a new conversation.</p>
                  </div>
                ) : (
                  <div className="mx-auto max-w-3xl space-y-5">
                    {/* user message */}
                    {(userTyped.length > 0 || phase !== "user-typing") && phase !== "boot" && (
                      <div className="flex items-start justify-end gap-2.5">
                        <div className="rounded-xl rounded-tr-sm bg-[#E31E24] px-4 py-2.5 text-[13px] font-medium text-white shadow-sm">
                          {phase === "user-typing" ? userTyped : DEMO_QUESTION}
                          {phase === "user-typing" && (
                            <span className="cursor-blink ml-0.5 inline-block h-[12px] w-[5px] translate-y-[1px] bg-white" />
                          )}
                        </div>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                          <UserIcon className="h-4 w-4" />
                        </span>
                      </div>
                    )}

                    {/* agent process card */}
                    {phase !== "user-typing" && phase !== "boot" && (
                      <div className="flex items-start gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E31E24]">
                          <BotIcon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                          {/* thinking */}
                          <div className="mb-3 rounded-lg border border-amber-200/70 bg-amber-50/40 p-3">
                            <p className="flex items-center gap-2 text-[12px] font-bold text-amber-600">
                              {phase === "thinking" ? (
                                <SpinnerIcon className="h-3.5 w-3.5" />
                              ) : (
                                <CheckIcon className="h-3.5 w-3.5 text-emerald-500" />
                              )}
                              Thinking <span className="font-normal text-slate-400">(1 step)</span>
                            </p>
                            <p className="mt-2 flex items-center gap-2 rounded-md bg-white px-2.5 py-1.5 font-mono text-[10.5px] text-slate-500">
                              <span className="flex h-4 w-4 items-center justify-center rounded bg-slate-100 text-[9px]">1</span>
                              Running document.ingest, wait: true, document_id: bfdc1f01-2896-4679
                            </p>
                          </div>

                          {/* plan */}
                          {isSupervisor && (phase === "plan" || phase === "waiting" || phase === "answer" || phase === "done") && (
                            <div className="mb-3 rounded-lg border border-amber-200/70 bg-amber-50/40 p-3">
                              <p className="flex items-center gap-2 text-[12px] font-bold text-amber-600">
                                {planDone >= PLAN_ITEMS.length ? (
                                  <CheckIcon className="h-3.5 w-3.5 text-emerald-500" />
                                ) : (
                                  <SpinnerIcon className="h-3.5 w-3.5" />
                                )}
                                Plan <span className="font-normal text-slate-400">({planDone}/{PLAN_ITEMS.length})</span>
                              </p>
                              <div className="mt-2 space-y-1.5">
                                {PLAN_ITEMS.map((item, i) => (
                                  <p key={item} className="flex items-center gap-2 text-[11.5px]">
                                    {i < planDone ? (
                                      <CheckIcon className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                                    ) : i === planDone && phase === "plan" ? (
                                      <SpinnerIcon className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                                    ) : (
                                      <span className="h-3.5 w-3.5 shrink-0 rounded-full border border-slate-300" />
                                    )}
                                    <span className={i < planDone ? "text-slate-600" : "text-slate-400"}>{item}</span>
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}

                          {phase === "waiting" && (
                            <p className="flex items-center gap-2 text-[12px] text-slate-500">
                              <SpinnerIcon className="h-3.5 w-3.5" /> Waiting for assistant answer...
                            </p>
                          )}

                          {(phase === "answer" || phase === "done") && (
                            <p className="text-[13px] leading-relaxed text-slate-700">
                              {FINAL_ANSWER.slice(0, answerLen)}
                              {phase === "answer" && (
                                <span className="cursor-blink ml-0.5 inline-block h-[12px] w-[6px] translate-y-[1px] bg-[#E31E24]" />
                              )}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* custom exchanges */}
                    {custom.map((c, i) => (
                      <div key={i} className="space-y-3">
                        <div className="flex items-start justify-end gap-2.5">
                          <div className="rounded-xl rounded-tr-sm bg-[#E31E24] px-4 py-2.5 text-[13px] font-medium text-white">
                            {c.q}
                          </div>
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                            <UserIcon className="h-4 w-4" />
                          </span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E31E24]">
                            <BotIcon className="h-4 w-4" />
                          </span>
                          <p className="flex-1 rounded-xl border border-slate-200 bg-white p-4 text-[13px] leading-relaxed text-slate-700 shadow-sm">
                            {c.a}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* composer */}
              <div className="border-t border-slate-100 bg-white px-6 pb-3 pt-3">
                <div className="mx-auto max-w-3xl">
                  <div className="mb-2 flex">
                    <span className="flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[10.5px] font-semibold text-sky-600">
                      <ClipIcon className="h-3 w-3" /> pt_kopi_arunika_financial_statements.png
                      <span className="ml-1 rounded bg-white px-1.5 text-[8.5px] font-bold tracking-wider text-sky-500">
                        ACTIVE
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 focus-within:border-red-200 focus-within:bg-white">
                    <ClipIcon className="h-4 w-4 shrink-0 text-slate-400" />
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendCustom()}
                      placeholder="Type your message..."
                      className="min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-slate-400"
                    />
                    <button
                      onClick={sendCustom}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500 transition-colors hover:bg-[#E31E24] hover:text-white"
                      title="Send"
                    >
                      <SendIcon className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <p className="mt-2 text-center font-mono text-[10px] text-slate-400">
                    Session: 4e88cc30 ·{" "}
                    <button onClick={newChat} className="font-semibold text-[#E31E24] hover:underline">
                      New chat
                    </button>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </AgentOsShell>
  );
}
