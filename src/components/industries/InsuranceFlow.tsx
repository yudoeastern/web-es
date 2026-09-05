const NODES = [
  { id: "docs", cx: 170, cy: 120, title: "Claim documents", sub: "PDF, foto, formulir via IDP", accent: false },
  { id: "uw", cx: 500, cy: 60, title: "Underwriting Agent", sub: "risk rating · premium recs", accent: false },
  { id: "fraud", cx: 830, cy: 120, title: "Fraud Detection Agent", sub: "delegated on red flags", accent: true },
  { id: "core", cx: 170, cy: 400, title: "Core insurance system", sub: "custom HTTP tool", accent: false },
  { id: "cs", cx: 830, cy: 400, title: "Customer Service Agent", sub: "status checks, cited answers", accent: false },
];

const PATHS = [
  { id: "p1", d: "M170,120 C 300,150 380,200 500,260", begin: "0s", soft: false },
  { id: "p2", d: "M500,260 C 380,320 300,370 170,400", begin: "0.5s", soft: false },
  { id: "p3", d: "M500,260 C 640,255 730,190 830,120", begin: "1s", soft: false },
  { id: "p4", d: "M830,120 C 700,105 590,160 500,260", begin: "1.5s", soft: true },
  { id: "p5", d: "M830,400 C 700,380 600,320 500,260", begin: "2s", soft: false },
  { id: "p6", d: "M500,260 L 500,60", begin: "2.5s", soft: false },
];

const MOBILE_STEPS = [
  { title: "Claim documents", sub: "PDFs, photos, and forms arrive and are read by Document Intelligence." },
  { title: "Claims Processing Agent", sub: "Checks the polis and claim history, then drafts a decision memo for human approval." },
  { title: "Core insurance system", sub: "The agent reads and writes policy data through a custom HTTP tool." },
  { title: "Fraud Detection Agent", sub: "Red flags get delegated out, and the evidence comes back on the same trail." },
  { title: "Underwriting Agent", sub: "Receives the risk math: ratings and premium recommendations." },
  { title: "Customer Service Agent", sub: "Nasabah get status checks and answers cited to the exact polis." },
];

function FlowNode({ cx, cy, title, sub, accent }: (typeof NODES)[number]) {
  return (
    <g>
      <rect
        x={cx - 105}
        y={cy - 34}
        width={210}
        height={68}
        rx={14}
        fill="#15151B"
        stroke={accent ? "rgba(227,30,36,0.6)" : "rgba(255,255,255,0.14)"}
        strokeWidth={1.5}
      />
      <circle cx={cx - 85} cy={cy} r={4} fill="#E31E24" />
      <text x={cx - 69} y={cy - 3} fill="#ffffff" fontSize={13} fontWeight={700}>
        {title}
      </text>
      <text x={cx - 69} y={cy + 15} fill="#9ca3af" fontSize={10.5}>
        {sub}
      </text>
    </g>
  );
}

export default function InsuranceFlow() {
  return (
    <div>
      {/* Desktop: delegation star around the claims agent */}
      <div className="hidden md:block">
        <svg viewBox="0 0 1000 520" className="w-full" role="img" aria-label="WEAST insurance claims flow: the claims agent delegating to fraud, underwriting, and customer service agents around it">
          {PATHS.map((p) => (
            <g key={p.id}>
              <path
                id={p.id}
                d={p.d}
                fill="none"
                stroke={p.soft ? "rgba(255,255,255,0.25)" : "rgba(227,30,36,0.45)"}
                strokeWidth={p.soft ? 1.5 : 2}
                strokeDasharray="2 8"
                strokeLinecap="round"
                className="flow-dash"
              />
              <circle r={p.soft ? 3.5 : 4.5} fill={p.soft ? "#d4d4d8" : "#E31E24"}>
                <animateMotion dur="2.8s" begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
              {!p.soft && (
                <circle r={9} fill="rgba(227,30,36,0.25)">
                  <animateMotion dur="2.8s" begin={p.begin} repeatCount="indefinite">
                    <mpath href={`#${p.id}`} />
                  </animateMotion>
                </circle>
              )}
            </g>
          ))}
          {NODES.map((n) => (
            <FlowNode key={n.id} {...n} />
          ))}
          {/* center claims processing agent */}
          <g>
            <rect
              x={380}
              y={212}
              width={240}
              height={96}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.7)"
              strokeWidth={2}
            />
            <circle cx={402} cy={246} r={5} fill="#E31E24" />
            <text x={418} y={251} fill="#ffffff" fontSize={14} fontWeight={800}>
              Claims Processing Agent
            </text>
            <text x={402} y={274} fill="#9ca3af" fontSize={10.5}>
              decision memo · approve/reject
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          Each moving dot is a delegation between agents, and the evidence comes back on
          the same trail. Every handoff is traced in the run timeline, and humans approve
          the final call.
        </p>
      </div>

      {/* Mobile: vertical delegation flow */}
      <div className="md:hidden">
        {MOBILE_STEPS.map((s, idx) => (
          <div key={s.title}>
            <div
              className={`flex items-start gap-3 rounded-xl border p-4 ${
                idx === 1 || idx === 3
                  ? "border-[#E31E24]/60 bg-[#E31E24]/10"
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
          Every delegation between agents is traced in the run timeline.
        </p>
      </div>
    </div>
  );
}
