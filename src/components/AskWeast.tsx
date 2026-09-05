"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function openAskWeast() {
  window.dispatchEvent(new CustomEvent("ask-weast:open"));
}

const SUGGESTIONS = [
  "I'm a GM of IT at a bank. What can WEAST solve for me?",
  "I'm a CTO of a series-A startup. What can WEAST do for my team?",
  "I'm an ops lead drowning in documents. Where do I start?",
];

interface Msg {
  role: "user" | "bot";
  text: string;
}

/* Local knowledge fallback, used when the backend is unreachable. */
const LOCAL_KB: { match: RegExp; answer: string }[] = [
  {
    match: /(bank|gm of it|general manager|kyc|fraud|credit|compliance)/i,
    answer:
      "For a bank, teams usually start with three WEAST builds: a Claims-style credit analysis supervisor that reads financial statements and drafts credit memos with citations, a fraud detection agent that cross-references fraud patterns and keeps an evidence trail, and KYC document intelligence that indexes KTP, NPWP, and statements per workspace. Everything runs with tenant boundaries per department and full audit trails, on-premise or in your VPC if the regulator requires it. Want the exact flow? The live tour on this page shows it end to end.",
  },
  {
    match: /(cto|startup|engineer|developer|api|integration|model)/i,
    answer:
      "For a startup CTO, WEAST gives you an agentic control plane instead of glue code: isolated workspaces per team, model control per workspace (Qwen, DeepSeek, GLM, Kimi, or any OpenAI-compatible endpoint), durable agent runs, and a versioned HTTP API for agents and document intelligence. You can prototype in the live tour today and deploy on any public cloud when you are ready.",
  },
  {
    match: /(ops|document|ocr|invoice|spreadsheet|data entry|drowning)/i,
    answer:
      "If your ops team is drowning in documents, start with WEAST Document Intelligence: upload PDFs and spreadsheets, get OCR, chunking, and hybrid search, with per-document cost tracking. Then agents answer from that knowledge with citations, and humans take over whenever they reply. The Document Intelligence tab in the live tour shows the whole loop.",
  },
  {
    match: /(price|pricing|harga|biaya|cost|budget)/i,
    answer:
      "Pricing is customized based on scope, workspaces, and deployment model (public cloud, private cloud, VPC, or on-premise), and every run shows its model cost in the platform, so there are no surprise bills. Book a working session below and we will shape a package for your case.",
  },
  {
    match: /(demo|tour|see it|coba)/i,
    answer:
      "You are looking at the fastest demo: the live product tour on this homepage runs fully in your browser, no account needed. Open Document Intelligence, Agent Chat, Agent Studio, Agent Runtime, and the locked Open API and Admin views. If you want a guided session with your own documents, book a working session below.",
  },
  {
    match: /(security|secure|compliance|data sovereignty|privacy|regulator)/i,
    answer:
      "WEAST is built for regulated environments: tenant boundaries at every layer, workspace API keys shown only once, run-level audit trails with thinking steps and citations, and deployment in your own cloud account, VPC, or data center so data stays where your regulator expects it.",
  },
  {
    match: /(industry|industri|retail|manufacturing|healthcare|logistic|telecom|insurance|legal|consulting|real estate|education|government)/i,
    answer:
      "WEAST ships with reference builds across financial services, retail and e-commerce, manufacturing, healthcare, logistics, telecommunications, energy, insurance, legal, consulting, real estate, education, and government. Each industry page on this site shows the agent flows you can build, from churn prediction to customs document automation.",
  },
  {
    match: /(omnichannel|whatsapp|channel|sales)/i,
    answer:
      "On channels, WEAST currently runs customer conversations on WhatsApp and Email with one shared memory, and the same architecture is ready for more channels. For sales teams, the same platform can record every session and hand the next rep a prioritized follow-up list. Ask me about a specific industry if you want the flow.",
  },
  {
    match: /(what is weast|weast itu|tentang weast|about weast|who are you)/i,
    answer:
      "WEAST is EasternStack's enterprise agentic AI platform: one control plane to build, run, and govern AI workflows across your people, systems, and data. It bundles Document Intelligence, Agent Chat, Agent Studio, Agent Runtime, and a versioned API, with approvals and full run traces on every run.",
  },
  {
    match: /(hi|hello|halo|hei|pagi|siang|malam)/i,
    answer:
      "Hello! I can walk you through WEAST: what it does for banks, retailers, manufacturers, and more, how deployment and security work, or where to start with your documents. Try one of the suggested questions, or type your own.",
  },
];

function localAnswer(query: string): string | null {
  const hit = LOCAL_KB.find((k) => k.match.test(query));
  return hit ? hit.answer : null;
}

/* Escape first, then render a tiny markdown subset (bold, bullets, line breaks). */
function formatAnswer(raw: string): string {
  const esc = raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return esc
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/^[-*] +/gm, "• ")
    .replace(/\n/g, "<br/>");
}

export default function AskWeastModal() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("ask-weast:open", onOpen);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("ask-weast:open", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  const send = async (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || busy) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }, { role: "bot", text: "" }]);
    setBusy(true);

    try {
      const res = await fetch("https://eap.easternstack.com/v1/chat-messages", {
        method: "POST",
        headers: {
          Authorization: "Bearer app-9UQDjEtSA7Ou1PUd8NIZFyAB",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: {},
          query: text,
          response_mode: "streaming",
          conversation_id: "",
          user: "ask-weast-web",
        }),
      });

      const reader = res.body?.getReader();
      if (!reader) throw new Error("no reader");
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        decoder
          .decode(value)
          .split("\n")
          .forEach((line) => {
            if (!line.startsWith("data:") || line.includes("[DONE]")) return;
            try {
              const j = JSON.parse(line.replace("data:", "").trim());
              if (j.answer) {
                buffer += j.answer;
                const snapshot = buffer;
                setMessages((prev) => {
                  const next = [...prev];
                  next[next.length - 1] = { role: "bot", text: snapshot };
                  return next;
                });
              }
            } catch {
              /* ignore malformed SSE lines */
            }
          });
      }

      if (!buffer) await fallbackToLocal(text);
    } catch {
      await fallbackToLocal(text);
    } finally {
      setBusy(false);
    }
  };

  const setBotText = (text: string) =>
    setMessages((prev) => {
      const next = [...prev];
      next[next.length - 1] = { role: "bot", text };
      return next;
    });

  const streamLocal = (full: string) =>
    new Promise<void>((resolve) => {
      let i = 0;
      const id = window.setInterval(() => {
        i = Math.min(full.length, i + 3);
        setBotText(full.slice(0, i));
        if (i >= full.length) {
          window.clearInterval(id);
          resolve();
        }
      }, 16);
    });

  const fallbackToLocal = async (query: string) => {
    const local = localAnswer(query);
    if (local) {
      await streamLocal(local);
    } else {
      setBotText(
        "I'm having trouble reaching my knowledge base right now. Meanwhile, try one of the suggested questions, explore the live tour on this page, or book a working session below."
      );
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-6 ${open ? "" : "pointer-events-none opacity-0"}`}
      aria-hidden={!open}
    >
      {/* overlay: tidak menutup pada klik luar; tutup lewat tombol X atau ESC */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity" />

      {/* modal */}
      <div
        className={`relative flex h-[min(85vh,820px)] w-[min(1000px,96vw)] flex-col overflow-hidden rounded-2xl bg-[#F9FAFB] shadow-2xl transition-all ${
          open ? "scale-100" : "scale-95"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Ask WEAST"
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#E31E24] bg-white text-slate-600 transition-colors hover:bg-red-50"
          title="Close"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* messages / empty state */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-6 sm:px-10">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <img src="/weast/weast-logo-black.png" alt="WEAST by EasternStack.AI" className="h-10 w-auto sm:h-12" />
              <p className="mt-5 text-[15px] font-semibold text-slate-700">Ask me anything about WEAST</p>
              <div className="mt-6 flex max-w-2xl flex-col items-center gap-3">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-xl border border-[#E31E24]/30 bg-white px-5 py-3 text-[13px] font-medium text-[#C4181E] transition-all hover:border-[#E31E24] hover:shadow-md"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl space-y-4">
              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div key={i} className="flex justify-end">
                    <p className="max-w-[85%] rounded-xl rounded-tr-sm bg-gradient-to-r from-[#E31E24] to-[#C4181E] px-4 py-2.5 text-[13.5px] font-medium text-white">
                      {m.text}
                    </p>
                  </div>
                ) : (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <img src="/weast/weast-logo-black.png" alt="WEAST" className="h-3.5 w-auto" />
                    </span>
                    {m.text ? (
                      <p
                        className="max-w-[85%] rounded-xl rounded-tl-sm border border-gray-200 bg-white px-4 py-2.5 text-[13.5px] leading-relaxed text-slate-700 shadow-sm"
                        dangerouslySetInnerHTML={{ __html: formatAnswer(m.text) }}
                      />
                    ) : (
                      <p className="max-w-[85%] rounded-xl rounded-tl-sm border border-gray-200 bg-white px-4 py-2.5 text-[13.5px] leading-relaxed text-slate-700 shadow-sm">
                        <span className="inline-flex items-center gap-1 text-slate-400">
                          thinking<span className="animate-pulse">…</span>
                        </span>
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* composer */}
        <div className="border-t border-gray-200 bg-white px-4 pb-3 pt-3 sm:px-6">
          <div className="mx-auto flex max-w-3xl items-center gap-2 rounded-full border border-gray-200 bg-white py-2 pl-2 pr-2 shadow-sm focus-within:border-[#E31E24]/50">
            <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5">
              <img src="/weast/weast-logo-black.png" alt="WEAST" className="h-3.5 w-auto" />
            </span>
            <span className="h-5 w-px bg-gray-200" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about WEAST..."
              className="min-w-0 flex-1 bg-transparent text-[13.5px] text-slate-700 outline-none placeholder:text-slate-400"
            />
            <button
              onClick={() => send()}
              disabled={busy || !input.trim()}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#E31E24] to-[#C4181E] text-white transition-all hover:shadow-md disabled:opacity-40"
              title="Send"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-400">
            Prefer a live demo?{" "}
            <Link href="/contact" className="font-semibold text-[#E31E24] hover:underline">
              Book a working session →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
