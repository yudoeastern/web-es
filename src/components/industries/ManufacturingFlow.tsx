const NODES = [
  { id: "docs", cx: 100, cy: 210, title: "Supplier docs in", sub: "POs, invoices, certs", accent: false },
  { id: "extract", cx: 300, cy: 210, title: "Extraction Agent", sub: "OCR & validation", accent: true },
  { id: "plan", cx: 500, cy: 210, title: "Planning Agent", sub: "MRP & demand signals", accent: false },
  { id: "supplier", cx: 700, cy: 210, title: "Supplier Agent", sub: "chases confirmations", accent: false },
  { id: "qc", cx: 900, cy: 210, title: "QC & Audit", sub: "traceable pack", accent: false },
];

const CONVEYOR_PATHS = [
  { id: "c1", d: "M180,210 L220,210", begin: "0s" },
  { id: "c2", d: "M380,210 L420,210", begin: "0.35s" },
  { id: "c3", d: "M580,210 L620,210", begin: "0.7s" },
  { id: "c4", d: "M780,210 L820,210", begin: "1.05s" },
];

const VAULT_PATH = { id: "v1", d: "M468,104 C 442,146 400,168 348,178", begin: "0.5s" };

const MOBILE_STEPS = [
  { title: "Supplier docs in", sub: "POs, invoices, and certificates stream in from email and uploads." },
  { title: "Document vault", sub: "Every file indexed per plant, so nothing gets lost between systems." },
  { title: "Extraction Agent", sub: "Reads and validates each document, no manual rekeying." },
  { title: "Planning Agent", sub: "Turns validated data into MRP and demand actions." },
  { title: "Supplier Agent", sub: "Chases confirmations until suppliers reply." },
  { title: "QC & Audit", sub: "Gets a traceable pack, from inbox to audit." },
];

function ConveyorNode({ cx, cy, title, sub, accent }: (typeof NODES)[number]) {
  return (
    <g>
      <rect
        x={cx - 80}
        y={cy - 34}
        width={160}
        height={68}
        rx={14}
        fill="#15151B"
        stroke={accent ? "rgba(227,30,36,0.6)" : "rgba(255,255,255,0.14)"}
        strokeWidth={1.5}
      />
      <circle cx={cx - 60} cy={cy} r={4} fill="#E31E24" />
      <text x={cx - 44} y={cy - 3} fill="#ffffff" fontSize={13} fontWeight={700}>
        {title}
      </text>
      <text x={cx - 44} y={cy + 15} fill="#9ca3af" fontSize={10.5}>
        {sub}
      </text>
    </g>
  );
}

export default function ManufacturingFlow() {
  return (
    <div>
      {/* Desktop: horizontal conveyor pipeline fed by a per-plant document vault */}
      <div className="hidden md:block">
        <svg viewBox="0 0 1000 420" className="w-full" role="img" aria-label="Agentic supply chain conveyor: supplier documents flow through extraction, planning, and supplier agents into a QC audit pack, fed by a per-plant document vault">
          {CONVEYOR_PATHS.map((p) => (
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
                <animateMotion dur="1.4s" begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
              <circle r={9} fill="rgba(227,30,36,0.25)">
                <animateMotion dur="1.4s" begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
          <g>
            <path
              id={VAULT_PATH.id}
              d={VAULT_PATH.d}
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={1.5}
              strokeDasharray="2 8"
              strokeLinecap="round"
              className="flow-dash"
            />
            <circle r={3.5} fill="#d4d4d8">
              <animateMotion dur="2s" begin={VAULT_PATH.begin} repeatCount="indefinite">
                <mpath href={`#${VAULT_PATH.id}`} />
              </animateMotion>
            </circle>
          </g>
          {NODES.map((n) => (
            <ConveyorNode key={n.id} {...n} />
          ))}
          {/* document vault feeding extraction */}
          <g>
            <rect
              x={420}
              y={36}
              width={160}
              height={68}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.7)"
              strokeWidth={2}
            />
            <circle cx={440} cy={62} r={5} fill="#E31E24" />
            <text x={456} y={67} fill="#ffffff" fontSize={14} fontWeight={800}>
              Document vault
            </text>
            <text x={440} y={88} fill="#9ca3af" fontSize={10.5}>
              indexed, per-plant
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          Every moving dot is a PO, invoice, or certificate: read once, indexed per plant, then
          traced all the way to the QC audit pack. Humans approve the exceptions.
        </p>
      </div>

      {/* Mobile: vertical conveyor */}
      <div className="md:hidden">
        {MOBILE_STEPS.map((s, idx) => (
          <div key={s.title}>
            <div
              className={`flex items-start gap-3 rounded-xl border p-4 ${
                idx === 2
                  ? "border-[#E31E24]/60 bg-[#E31E24]/10"
                  : idx === 1
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
          Every document keeps its trail, from inbox to audit pack.
        </p>
      </div>
    </div>
  );
}
