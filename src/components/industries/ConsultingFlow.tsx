const NODES = [
  { id: "research", cx: 220, cy: 110, title: "Market Research Agent", sub: "industry reports · market data", accent: false },
  { id: "due", cx: 780, cy: 110, title: "Due Diligence Agent", sub: "risk matrix · sanctions checks", accent: false },
  { id: "deliverable", cx: 500, cy: 470, title: "Client deliverable", sub: "PDF-ready, evidence-based", accent: false },
];

const FUNNEL_PATHS = [
  { id: "f1", d: "M220,144 C 265,195 350,222 438,222", begin: "0s", dur: "2.6s" },
  { id: "f2", d: "M780,144 C 735,195 650,222 562,222", begin: "0.9s", dur: "2.6s" },
  { id: "f3", d: "M500,320 L500,434", begin: "1.8s", dur: "1.6s" },
];

const RAIL_PATHS = [
  { id: "k1", d: "M150,396 C 95,310 100,205 178,146", begin: "0.5s", dur: "3s" },
  { id: "k2", d: "M280,428 C 330,405 348,345 378,296", begin: "1.4s", dur: "2.4s" },
];

const MOBILE_STEPS = [
  { title: "Market Research Agent", sub: "Industry reports and external market data, synthesized into a market analysis." },
  { title: "Due Diligence Agent", sub: "Target documents, regulations, and sanctions checks become a risk matrix." },
  { title: "Report Generation Agent", sub: "Synthesis, charts, and citations assembled into a PDF-ready deliverable." },
  { title: "Client deliverable", sub: "Evidence-based output, with citations reviewers can trace." },
  { title: "Knowledge Management Agent", sub: "The firm's oracle: every past engagement becomes searchable, feeding the next one." },
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

export default function ConsultingFlow() {
  return (
    <div>
      {/* Desktop: synthesis funnel with the knowledge rail feeding every agent */}
      <div className="hidden md:block">
        <svg viewBox="0 0 1000 520" className="w-full" role="img" aria-label="Consulting synthesis funnel: market research and due diligence agents feed the report generation agent, which assembles a cited client deliverable, while the knowledge management agent feeds everything from past engagements">
          {FUNNEL_PATHS.map((p) => (
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
                <animateMotion dur={p.dur} begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
              <circle r={9} fill="rgba(227,30,36,0.25)">
                <animateMotion dur={p.dur} begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
          {RAIL_PATHS.map((p) => (
            <g key={p.id}>
              <path
                id={p.id}
                d={p.d}
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth={1.5}
                strokeDasharray="2 8"
                strokeLinecap="round"
                className="flow-dash"
              />
              <circle r={3.5} fill="#d4d4d8">
                <animateMotion dur={p.dur} begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
          {NODES.map((n) => (
            <FlowNode key={n.id} {...n} />
          ))}
          {/* center report generation agent */}
          <g>
            <rect
              x={380}
              y={222}
              width={240}
              height={96}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.7)"
              strokeWidth={2}
            />
            <circle cx={402} cy={254} r={5} fill="#E31E24" />
            <text x={418} y={259} fill="#ffffff" fontSize={14} fontWeight={800}>
              Report Generation Agent
            </text>
            <text x={402} y={288} fill="#9ca3af" fontSize={10.5}>
              synthesis · charts · citations
            </text>
          </g>
          {/* knowledge management agent, the firm's oracle */}
          <g>
            <rect
              x={20}
              y={396}
              width={260}
              height={68}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.7)"
              strokeWidth={2}
            />
            <circle cx={42} cy={422} r={5} fill="#E31E24" />
            <text x={58} y={427} fill="#ffffff" fontSize={14} fontWeight={800}>
              Knowledge Management Agent
            </text>
            <text x={42} y={448} fill="#9ca3af" fontSize={10.5}>
              the firm&apos;s oracle
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          Research and diligence feed the report agent, and the firm&apos;s oracle feeds them
          all: every past engagement becomes searchable knowledge for the next one. Partners
          approve the deliverable.
        </p>
      </div>

      {/* Mobile: vertical funnel */}
      <div className="md:hidden">
        {MOBILE_STEPS.map((s, idx) => (
          <div key={s.title}>
            <div
              className={`flex items-start gap-3 rounded-xl border p-4 ${
                idx === 2
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
          Every past engagement feeds the next deliverable.
        </p>
      </div>
    </div>
  );
}
