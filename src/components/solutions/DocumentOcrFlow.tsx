type FlowNodeDef = {
  id: string;
  cx: number;
  cy: number;
  title: string;
  sub: string;
  accent: boolean;
  width?: number;
};

const NODES: FlowNodeDef[] = [
  { id: "fin", cx: 150, cy: 110, title: "Business documents", sub: "invoices · receipts · scans", accent: false },
  { id: "id", cx: 150, cy: 350, title: "Identity documents", sub: "KTP · SIM · passport · NPWP", accent: false },
  { id: "val", cx: 680, cy: 110, title: "Validation & Rules", sub: "PO match · liveness · totals", accent: false, width: 210 },
  { id: "sys", cx: 860, cy: 300, title: "Into Your Systems", sub: "ERP · accounting · KYC", accent: true, width: 220 },
];

const PARSE_PATHS = [
  { id: "d1", d: "M150,110 C 240,110 285,180 325,213", begin: "0s" },
  { id: "d2", d: "M150,350 C 240,350 285,280 325,247", begin: "0.8s" },
  { id: "d3", d: "M430,230 C 530,225 600,160 675,115", begin: "1.6s" },
  { id: "d4", d: "M680,110 C 770,130 830,210 858,295", begin: "2.4s" },
];

const REVIEW_PATH = { id: "d5", d: "M430,230 C 560,320 700,345 850,310", begin: "1.2s" };

const MOBILE_STEPS = [
  { title: "Documents arrive", sub: "PDFs, photos, and scanned pages in any format, from any channel." },
  { title: "Recognition Engine", sub: "OCR reads layout, handwriting, and mixed Indonesian-English language." },
  { title: "Validation & Rules", sub: "Totals, purchase orders, and KYC checks confirm every extracted field." },
  { title: "Into Your Systems", sub: "Clean records post to ERP, accounting, and onboarding flows." },
  { title: "Human review", sub: "Low-confidence fields queue for a person, then retrain the model." },
];

function FlowNode({ cx, cy, title, sub, accent, width = 190 }: FlowNodeDef) {
  const half = width / 2;
  return (
    <g>
      <rect
        x={cx - half}
        y={cy - 34}
        width={width}
        height={68}
        rx={14}
        fill="#15151B"
        stroke={accent ? "rgba(227,30,36,0.6)" : "rgba(255,255,255,0.14)"}
        strokeWidth={1.5}
      />
      <circle cx={cx - half + 20} cy={cy} r={4} fill="#E31E24" />
      <text x={cx - half + 36} y={cy - 3} fill="#ffffff" fontSize={13} fontWeight={700}>
        {title}
      </text>
      <text x={cx - half + 36} y={cy + 15} fill="#9ca3af" fontSize={10.5}>
        {sub}
      </text>
    </g>
  );
}

export default function DocumentOcrFlow() {
  return (
    <div>
      {/* Desktop: raw documents cross the engine, clean fields come out */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1000 460"
          className="w-full"
          role="img"
          aria-label="OCR flow: business and identity documents pass a recognition engine that extracts fields, validation checks them against rules, and approved records post into ERP, accounting, and KYC systems, with low-confidence pages going to human review"
        >
          {PARSE_PATHS.map((p) => (
            <g key={p.id}>
              <path
                id={p.id}
                d={p.d}
                fill="none"
                stroke="rgba(227,30,36,0.45)"
                strokeWidth={2}
                strokeDasharray="2 8"
                strokeLinecap="round"
                className="flow-dash"
              />
              <circle r={4.5} fill="#E31E24">
                <animateMotion dur="2.8s" begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
              <circle r={9} fill="rgba(227,30,36,0.25)">
                <animateMotion dur="2.8s" begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
          {/* low confidence page to a reviewer, stays white */}
          <g>
            <path
              id={REVIEW_PATH.id}
              d={REVIEW_PATH.d}
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={1.5}
              strokeDasharray="2 8"
              strokeLinecap="round"
              className="flow-dash"
            />
            <circle r={3.5} fill="#d4d4d8">
              <animateMotion dur="2.4s" begin={REVIEW_PATH.begin} repeatCount="indefinite">
                <mpath href={`#${REVIEW_PATH.id}`} />
              </animateMotion>
            </circle>
          </g>
          {NODES.map((n) => (
            <FlowNode key={n.id} {...n} />
          ))}
          {/* center recognition engine */}
          <g>
            <rect
              x={320}
              y={196}
              width={220}
              height={68}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.7)"
              strokeWidth={2}
            />
            <circle cx={342} cy={222} r={5} fill="#E31E24" />
            <text x={358} y={227} fill="#ffffff" fontSize={14} fontWeight={800}>
              Recognition Engine
            </text>
            <text x={342} y={248} fill="#9ca3af" fontSize={10.5}>
              ocr · layout · language
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          Every page passes recognition and validation before it becomes a record: low-confidence
          fields queue for a reviewer, approved ones post straight into your systems.
        </p>
      </div>

      {/* Mobile: vertical pipeline */}
      <div className="md:hidden">
        {MOBILE_STEPS.map((s, idx) => (
          <div key={s.title}>
            <div
              className={`flex items-start gap-3 rounded-xl border p-4 ${
                idx === 1 || idx === 3
                  ? "border-[#E31E24]/60 bg-[#E31E24]/10"
                  : idx === 4
                    ? "border-[#E31E24]/40 bg-[#E31E24]/5"
                    : "border-white/10 bg-white/5"
              }`}
            >
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#E31E24]" />
              <div>
                <p className="text-sm font-bold text-white">{s.title}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-zinc-400">{s.sub}</p>
              </div>
            </div>
            {idx < MOBILE_STEPS.length - 1 && (
              <div className="relative mx-auto h-8 w-[3px]">
                <div className="flow-line-v h-full w-full text-[#E31E24]/70" />
                <span className="flow-dot-y absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#E31E24]" />
              </div>
            )}
          </div>
        ))}
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          Pages in, validated fields out: humans only touch what is uncertain.
        </p>
      </div>
    </div>
  );
}
