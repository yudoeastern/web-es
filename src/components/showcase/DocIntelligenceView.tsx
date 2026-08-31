"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { highlightLine } from "./code-demo";
import {
  AgentOsShell,
  ViewHeader,
  ScanIcon,
  SearchIcon,
  UploadIcon,
  FolderIcon,
  FileIcon,
  BackIcon,
  CheckIcon,
  ChevronRightIcon,
  SpinnerIcon,
  StatusBadge,
  SlugChip,
} from "./AgentOsShell";

const PIPELINE_STEPS = [
  { label: "Detect", meta: "" },
  { label: "OCR", meta: "8952 ms" },
  { label: "Parse", meta: "" },
  { label: "Chunk", meta: "0 ms" },
  { label: "Embed", meta: "3130 ms" },
  { label: "Index", meta: "" },
];

const COST_ROWS = [
  { step: "OCR", amount: "1 pg", duration: "8952 ms", cost: "$0.0029" },
  { step: "Parse", amount: "-", duration: "-", cost: "-" },
  { step: "Chunk", amount: "1 chunks", duration: "0 ms", cost: "$0.0000" },
  { step: "Embed", amount: "738 tok", duration: "3130 ms", cost: "$0.0000" },
];

const READING_MD = `# PT Kopi Arunika Nusantara

Financial Statements FY2023 to FY2025 (in IDR millions). Fictional demo data.

## Income Statement

| Line item | FY2023 | FY2024 | FY2025 |
| --- | --- | --- | --- |
| Revenue | 185,000 | 214,000 | 236,000 |
| Cost of goods sold | (138,750) | (165,000) | (186,000) |
| Gross profit | 46,250 | 49,000 | 50,000 |
| Operating expenses | (28,000) | (33,000) | (34,500) |
| Operating profit (EBIT) | 18,250 | 16,000 | 15,500 |
| Interest expense | (6,800) | (9,500) | (8,500) |
`;

const JSON_SAMPLE = `{
  "document_id": "bfdc1f01-2896-4679-8303",
  "name": "Screenshot_20260804_140818.png",
  "type": "png",
  "chunks": 1,
  "tokens": 738,
  "pipeline": {
    "ocr_ms": 8952,
    "embed_ms": 3130
  },
  "cost_usd": 0.0029,
  "indexed": true
}`;

interface DocRow {
  id: string;
  name: string;
  kind: "folder" | "file";
  type?: string;
  size?: string;
  chunks?: number;
  indexedAt?: string;
  status: "indexed" | "processing";
  cost?: string;
  costPer?: string;
}

const INITIAL_ROWS: DocRow[] = [
  { id: "f1", name: "Financial Statements", kind: "folder", status: "indexed" },
  { id: "f2", name: "Financial Statements 2", kind: "folder", status: "indexed" },
  {
    id: "d1",
    name: "Screenshot_20260804_140818.png",
    kind: "file",
    type: "PNG",
    size: "197 KB",
    chunks: 1,
    indexedAt: "Aug 5, 2026",
    status: "indexed",
    cost: "$0.0029",
    costPer: "$0.0029/pg",
  },
];

type ResultTab = "reading" | "chunks" | "tables" | "json" | "versions";

export default function DocIntelligenceView({
  onNavigate,
}: {
  onNavigate: (view: "docs" | "chat" | "studio" | "runtime") => void;
}) {
  const [rows, setRows] = useState<DocRow[]>(INITIAL_ROWS);
  const [detailId, setDetailId] = useState<string | null>(null);
  const [resultTab, setResultTab] = useState<ResultTab>("reading");
  const [pipelineStep, setPipelineStep] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const uploadSeq = useRef(0);

  const detail = rows.find((r) => r.id === detailId && r.kind === "file") ?? null;

  /* Animate the pipeline whenever a detail screen opens */
  useEffect(() => {
    if (!detail) return;
    let s = 0;
    const id = window.setInterval(() => {
      s += 1;
      setPipelineStep(s);
      if (s >= PIPELINE_STEPS.length) window.clearInterval(id);
    }, 420);
    return () => window.clearInterval(id);
  }, [detailId]); // eslint-disable-line react-hooks/exhaustive-deps

  const addUpload = (name: string) => {
    const id = `up-${uploadSeq.current++}`;
    setRows((prev) => [
      ...prev,
      { id, name, kind: "file", type: name.split(".").pop()?.toUpperCase() ?? "FILE", size: "84 KB", status: "processing" },
    ]);
    window.setTimeout(() => {
      setRows((prev) =>
        prev.map((r) =>
          r.id === id
            ? { ...r, status: "indexed", chunks: 3, indexedAt: "Aug 31, 2026", cost: "$0.0041", costPer: "$0.0014/pg" }
            : r
        )
      );
    }, 2600);
  };

  const header = (
    <ViewHeader
      icon={<ScanIcon className="h-4.5 w-4.5" />}
      title="Document Intelligence"
      subtitle="Credit Scoring"
      right={
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-[12px] font-semibold text-slate-700 hover:bg-slate-50">
            <FileIcon className="h-3.5 w-3.5" /> Document Registry
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-[12px] font-semibold text-slate-500 hover:bg-slate-50">
            <SearchIcon className="h-3.5 w-3.5" /> Knowledge Search
          </button>
        </div>
      }
    />
  );

  return (
    <AgentOsShell active="docs" onNavigate={onNavigate} header={header}>
      {!detail ? (
        /* ---------------- list screen ---------------- */
        <div className="flex h-full">
          {/* folders */}
          <div className="hidden w-56 shrink-0 border-r border-slate-200 bg-white p-4 lg:block">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Folders</p>
              <FolderIcon className="h-4 w-4 text-slate-300" />
            </div>
            {rows
              .filter((r) => r.kind === "folder")
              .map((f) => (
                <button
                  key={f.id}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[12.5px] text-slate-600 hover:bg-slate-50"
                >
                  <ChevronRightIcon className="h-3 w-3 text-slate-400" />
                  <FolderIcon className="h-4 w-4 text-amber-400" />
                  <span className="flex-1 truncate">{f.name}</span>
                  <span className="text-[10px] text-slate-400">4</span>
                </button>
              ))}
          </div>

          {/* documents table */}
          <div
            className={`min-w-0 flex-1 p-6 transition-colors ${dragOver ? "bg-red-50/60" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              const file = e.dataTransfer.files?.[0];
              addUpload(file ? file.name : "dropped-document.pdf");
            }}
          >
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-bold text-slate-900">Documents</h2>
                <p className="text-[12px] text-slate-400">
                  {rows.filter((r) => r.status === "indexed" && r.kind === "file").length} indexed
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
                <SearchIcon className="h-3.5 w-3.5 text-slate-400" />
                <input
                  placeholder="Search documents..."
                  className="w-40 bg-transparent text-[12px] outline-none placeholder:text-slate-400"
                />
              </div>
              <button
                onClick={() => addUpload(`Q3-interim-report-${uploadSeq.current + 1}.pdf`)}
                className="flex items-center gap-2 rounded-lg bg-[#E31E24] px-4 py-2 text-[12.5px] font-semibold text-white shadow-sm transition-colors hover:bg-[#C4181E]"
              >
                <UploadIcon className="h-3.5 w-3.5" /> Upload document
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="grid grid-cols-[1fr_70px_70px_100px_100px_90px] gap-2 border-b border-slate-100 px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span>Name</span>
                <span>Type</span>
                <span>Chunks</span>
                <span>Indexed</span>
                <span>Status</span>
                <span>Cost</span>
              </div>
              {rows.map((row) => (
                <button
                  key={row.id}
                  onClick={() => {
                    if (row.kind !== "file" || row.status !== "indexed") return;
                    setPipelineStep(0);
                    setResultTab("reading");
                    setDetailId(row.id);
                  }}
                  className={`grid w-full grid-cols-[1fr_70px_70px_100px_100px_90px] items-center gap-2 border-b border-slate-50 px-4 py-3 text-left last:border-0 ${
                    row.kind === "file" && row.status === "indexed" ? "hover:bg-slate-50" : "cursor-default"
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
                        row.kind === "folder" ? "bg-amber-50 text-amber-400" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {row.kind === "folder" ? <FolderIcon className="h-4 w-4" /> : <FileIcon className="h-4 w-4" />}
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="block truncate text-[13px] font-semibold text-slate-800">{row.name}</span>
                      <span className="block font-mono text-[10px] text-slate-400">
                        {row.kind === "folder" ? "4 items" : row.size}
                      </span>
                    </span>
                  </span>
                  <span>
                    {row.kind === "file" && row.type ? (
                      <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
                        {row.type}
                      </span>
                    ) : (
                      <span className="text-slate-300">-</span>
                    )}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">{row.chunks ?? "-"}</span>
                  <span className="text-[11px] text-slate-500">{row.indexedAt ?? "-"}</span>
                  <span>
                    {row.status === "indexed" ? (
                      <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Indexed
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-500">
                        <SpinnerIcon className="h-3 w-3" /> Processing
                      </span>
                    )}
                  </span>
                  <span className="leading-tight">
                    <span className="block font-mono text-[11px] font-semibold text-slate-700">{row.cost ?? "-"}</span>
                    {row.costPer && <span className="block font-mono text-[9px] text-slate-400">{row.costPer}</span>}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between text-[11.5px] text-slate-400">
              <span>
                Showing 1-{rows.length} of {rows.length}
              </span>
              <span className="font-mono">Page 1 of 1</span>
            </div>
            <p className="mt-2 text-[11px] text-slate-300">
              Tip: drag and drop a file anywhere in this panel to upload it.
            </p>
          </div>
        </div>
      ) : (
        /* ---------------- detail screen ---------------- */
        <div className="p-5">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setDetailId(null)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
              title="Back to documents"
            >
              <BackIcon className="h-4 w-4" />
            </button>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-[#E31E24]">
              <ScanIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-[15px] font-bold text-slate-900">{detail.name}</p>
              <p className="text-[11px] text-slate-400">
                {detail.type} · {detail.indexedAt}, 12:45 PM
              </p>
            </div>
            <StatusBadge kind="indexed" label="INDEXED" />
            <button className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-[12px] font-semibold text-slate-700 hover:bg-slate-50">
              Download
            </button>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1fr_420px]">
            {/* left column */}
            <div className="space-y-4">
              {/* pipeline */}
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="mb-4 text-[13px] font-bold text-slate-900">Pipeline</p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  {PIPELINE_STEPS.map((step, i) => (
                    <span key={step.label} className="flex items-center gap-1.5 text-[12.5px]">
                      {i < pipelineStep ? (
                        <CheckIcon className="h-3.5 w-3.5 text-emerald-500" />
                      ) : i === pipelineStep ? (
                        <SpinnerIcon className="h-3.5 w-3.5 text-amber-500" />
                      ) : (
                        <span className="h-3.5 w-3.5 rounded-full border border-slate-200" />
                      )}
                      <span className={i <= pipelineStep ? "font-medium text-slate-700" : "text-slate-400"}>
                        {step.label}
                      </span>
                      {step.meta && <span className="font-mono text-[10px] text-slate-400">{step.meta}</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* preview */}
              <div className="flex justify-center rounded-xl border border-slate-200 bg-slate-100 p-6">
                <div className="w-full max-w-[340px] rounded-sm bg-white p-6 shadow-md">
                  <p className="text-center text-[11px] font-bold text-slate-900">PT Kopi Arunika Nusantara</p>
                  <p className="mb-4 text-center text-[7px] text-slate-400">
                    Financial Statements FY2023 to FY2025 (in IDR millions), fictional demo data
                  </p>
                  {["Income Statement", "Balance Sheet", "Cash Flow"].map((section) => (
                    <div key={section} className="mb-3">
                      <p className="mb-1 border-b border-slate-200 pb-0.5 text-[8px] font-bold text-slate-800">
                        {section}
                      </p>
                      {[0, 1, 2, 3].map((r) => (
                        <div key={r} className="flex justify-between font-mono text-[6.5px] text-slate-500">
                          <span className="h-2 w-24 rounded-sm bg-slate-100" />
                          <span>185,000</span>
                          <span>214,000</span>
                          <span>236,000</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* right column */}
            <div className="space-y-4">
              {/* processing cost */}
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="mb-3 flex items-baseline justify-between">
                  <p className="text-[13px] font-bold text-slate-900">Processing Cost</p>
                  <p className="font-mono text-[15px] font-bold text-slate-900">
                    $0.0029 <span className="text-[10px] font-normal text-slate-400">$0.0029/pg</span>
                  </p>
                </div>
                <div className="grid grid-cols-[1fr_80px_80px_70px] gap-2 border-b border-slate-100 pb-1.5 text-[9.5px] font-bold uppercase tracking-widest text-slate-400">
                  <span>Step</span>
                  <span>Amount</span>
                  <span>Duration</span>
                  <span className="text-right">Cost</span>
                </div>
                {COST_ROWS.slice(0, Math.max(1, Math.min(COST_ROWS.length, pipelineStep))).map((r) => (
                  <div
                    key={r.step}
                    className="grid grid-cols-[1fr_80px_80px_70px] gap-2 border-b border-slate-50 py-2 text-[11.5px] last:border-0"
                  >
                    <span className="font-semibold text-slate-700">{r.step}</span>
                    <span className="font-mono text-slate-500">{r.amount}</span>
                    <span className="font-mono text-slate-500">{r.duration}</span>
                    <span className="text-right font-mono text-slate-700">{r.cost}</span>
                  </div>
                ))}
              </div>

              {/* result tabs */}
              <div className="rounded-xl border border-slate-200 bg-white">
                <div className="scrollbar-hide flex items-center gap-1 overflow-x-auto border-b border-slate-100 px-3 pt-2">
                  {(
                    [
                      ["reading", "Reading"],
                      ["chunks", "Chunks (1)"],
                      ["tables", "Tables (0)"],
                      ["json", "JSON"],
                      ["versions", "Versions"],
                    ] as [ResultTab, string][]
                  ).map(([id, label]) => (
                    <button
                      key={id}
                      onClick={() => setResultTab(id)}
                      className={`whitespace-nowrap border-b-2 px-3 py-2 text-[12px] font-semibold transition-colors ${
                        resultTab === id
                          ? "border-[#E31E24] text-[#E31E24]"
                          : "border-transparent text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                  <span className="ml-auto hidden shrink-0 rounded-md border border-slate-200 px-2 py-1 text-[10px] font-semibold text-slate-500 lg:block">
                    Hybrid
                  </span>
                </div>

                <div className="h-72 overflow-y-auto p-4">
                  {resultTab === "reading" && (
                    <div className="richtext-content text-[12.5px] text-slate-700">
                      <p className="mb-3 text-center font-mono text-[10px] text-slate-400">Page 1</p>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{READING_MD}</ReactMarkdown>
                    </div>
                  )}
                  {resultTab === "chunks" && (
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <SlugChip>chunk 0</SlugChip>
                        <span className="font-mono text-[10px] text-slate-400">738 tokens</span>
                      </div>
                      <p className="text-[11.5px] leading-relaxed text-slate-600">
                        PT Kopi Arunika Nusantara. Financial Statements FY2023 to FY2025 in IDR millions.
                        Revenue 185,000 / 214,000 / 236,000. Gross profit 46,250 / 49,000 / 50,000.
                        Operating profit (EBIT) 18,250 / 16,000 / 15,500.
                      </p>
                    </div>
                  )}
                  {resultTab === "tables" && (
                    <p className="py-10 text-center text-[12px] text-slate-400">0 tables detected in this document.</p>
                  )}
                  {resultTab === "json" && (
                    <pre className="font-mono text-[11px] leading-5">
                      {JSON_SAMPLE.split("\n").map((line, i) => (
                        <div key={i} className="whitespace-pre">
                          {highlightLine(line, "json", `j${i}`)}
                        </div>
                      ))}
                    </pre>
                  )}
                  {resultTab === "versions" && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                        <SlugChip>v1</SlugChip>
                        <div className="flex-1 text-[11.5px] text-slate-600">
                          Current version · Aug 5, 2026, 12:45 PM
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-600">ES Admin</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AgentOsShell>
  );
}
