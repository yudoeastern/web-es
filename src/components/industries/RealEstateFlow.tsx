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
  { id: "buyer", cx: 100, cy: 250, title: "Prospective buyer", sub: "chat & criteria", accent: false, width: 180 },
  { id: "lead", cx: 300, cy: 250, title: "Lead Qualification Agent", sub: "score + property matching", accent: false, width: 200 },
  { id: "val", cx: 510, cy: 250, title: "Property Valuation Agent", sub: "DCF & comparables", accent: true, width: 200 },
  { id: "docs", cx: 720, cy: 250, title: "Documentation Agent", sub: "PPJB · AJB · lease, versioned", accent: false, width: 200 },
  { id: "comp", cx: 890, cy: 110, title: "Compliance Agent", sub: "zoning · permits · codes", accent: true },
  { id: "sign", cx: 890, cy: 340, title: "Signed", sub: "deed pack for signing", accent: false, width: 160 },
];

const PIPELINE_PATHS = [
  { id: "r1", d: "M100,250 L300,250", begin: "0s" },
  { id: "r2", d: "M300,250 L510,250", begin: "0.6s" },
  { id: "r3", d: "M510,250 L720,250", begin: "1.2s" },
  { id: "r4", d: "M720,250 C 830,248 888,190 890,110", begin: "1.8s" },
  { id: "r5", d: "M890,144 L890,306", begin: "2.4s" },
];

const DOCS_BRANCH = { id: "r0", d: "M510,104 L510,216", begin: "0.9s" };

const MOBILE_STEPS = [
  { title: "Prospective buyer", sub: "Chats in with criteria: budget, location, and unit type." },
  { title: "Lead Qualification Agent", sub: "Scores the buyer and matches property listings." },
  { title: "Property Valuation Agent", sub: "Certificates, IMB, and appraisals feed DCF and comparables." },
  { title: "Documentation Agent", sub: "Drafts PPJB, AJB, and lease clauses with version control." },
  { title: "Compliance & signing", sub: "Every document checked against zoning, permits, and codes, then humans sign the deed pack." },
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

export default function RealEstateFlow() {
  return (
    <div>
      {/* Desktop: gated linear pipeline with a documents branch feeding valuation */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1000 420"
          className="w-full"
          role="img"
          aria-label="Real estate pipeline on WEAST: a prospective buyer chats with the lead qualification agent, certificates and appraisals feed the property valuation agent, the documentation agent drafts PPJB, AJB, and lease, and the compliance agent checks zoning, permits, and codes before signing"
        >
          {PIPELINE_PATHS.map((p) => (
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
                <animateMotion dur="2.4s" begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
              <circle r={9} fill="rgba(227,30,36,0.25)">
                <animateMotion dur="2.4s" begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
          {/* documents branch feeding valuation, stays white */}
          <g>
            <path
              id={DOCS_BRANCH.id}
              d={DOCS_BRANCH.d}
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={1.5}
              strokeDasharray="2 8"
              strokeLinecap="round"
              className="flow-dash"
            />
            <circle r={3.5} fill="#d4d4d8">
              <animateMotion dur="2s" begin={DOCS_BRANCH.begin} repeatCount="indefinite">
                <mpath href={`#${DOCS_BRANCH.id}`} />
              </animateMotion>
            </circle>
          </g>
          {NODES.map((n) => (
            <FlowNode key={n.id} {...n} />
          ))}
          {/* certificates & appraisals branch above valuation */}
          <g>
            <rect
              x={385}
              y={36}
              width={250}
              height={68}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.7)"
              strokeWidth={2}
            />
            <circle cx={405} cy={62} r={5} fill="#E31E24" />
            <text x={421} y={67} fill="#ffffff" fontSize={14} fontWeight={800}>
              Certificates & appraisals
            </text>
            <text x={405} y={88} fill="#9ca3af" fontSize={10.5}>
              IMB, sertifikat, floor plans via IDP
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          Every moving dot is a lead, a valuation, or a deed: drafted with version control,
          checked against zoning and permits, then handed to humans for signing.
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
          Every document keeps its trail, from first chat to signed deed.
        </p>
      </div>
    </div>
  );
}
