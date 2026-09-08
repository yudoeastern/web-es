const NODES = [
  { id: "t", cx: 125, cy: 210, title: "Raw business data", sub: "exports, sheets, warehouse feeds", accent: false },
  { id: "v", cx: 355, cy: 105, title: "Validation Agent", sub: "schema & quality checks", accent: false },
  { id: "tr", cx: 355, cy: 315, title: "Transform Agent", sub: "clean, join, model", accent: false },
  { id: "a", cx: 595, cy: 210, title: "Analytics Agent", sub: "widgets, insights, filters", accent: true },
  { id: "s", cx: 825, cy: 105, title: "BI Lead Agent", sub: "reviews & approves", accent: true },
  { id: "n", cx: 825, cy: 315, title: "Answer Agent", sub: "NL answers for stakeholders", accent: false },
];

const PATHS = [
  { id: "p1", d: "M235,210 C 275,210 215,105 245,105", begin: "0s" },
  { id: "p2", d: "M235,210 C 275,210 215,315 245,315", begin: "0.4s" },
  { id: "p3", d: "M465,105 C 505,105 455,210 485,210", begin: "0.9s" },
  { id: "p4", d: "M465,315 C 505,315 455,210 485,210", begin: "1.3s" },
  { id: "p5", d: "M705,210 C 745,210 685,105 715,105", begin: "1.8s" },
  { id: "p6", d: "M705,210 C 745,210 685,315 715,315", begin: "2.2s" },
  { id: "p7", d: "M825,139 C 875,180 875,240 825,281", begin: "2.7s" },
];

const MOBILE_STEPS = [
  { title: "Raw business data", sub: "Exports, spreadsheets, and warehouse feeds arrive." },
  { title: "Validation Agent", sub: "Schema and quality checks before anything moves." },
  { title: "Transform Agent", sub: "Cleans, joins, and models the data." },
  { title: "Analytics Agent", sub: "Generates widgets, insights, and filters." },
  { title: "BI Lead Agent", sub: "Reviews the outputs and approves publication." },
  { title: "Answer Agent", sub: "Answers any stakeholder question in natural language." },
];

function FlowNode({ cx, cy, title, sub, accent }: (typeof NODES)[number]) {
  return (
    <g>
      <rect
        x={cx - 110}
        y={cy - 34}
        width={220}
        height={68}
        rx={14}
        fill="#15151B"
        stroke={accent ? "rgba(227,30,36,0.6)" : "rgba(255,255,255,0.14)"}
        strokeWidth={1.5}
      />
      <circle cx={cx - 90} cy={cy} r={4} fill="#E31E24" />
      <text x={cx - 74} y={cy - 3} fill="#ffffff" fontSize={13} fontWeight={700}>
        {title}
      </text>
      <text x={cx - 74} y={cy + 15} fill="#9ca3af" fontSize={10.5}>
        {sub}
      </text>
    </g>
  );
}

export default function BiAgentFlow() {
  return (
    <div>
      {/* Desktop: connected BI team mesh */}
      <div className="hidden md:block">
        <svg viewBox="0 0 1000 420" className="w-full" role="img" aria-label="WEAST agentic BI flow: agents handing work to each other like a BI team">
          {PATHS.map((p) => (
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
                <animateMotion dur="2.6s" begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
              <circle r={9} fill="rgba(227,30,36,0.25)">
                <animateMotion dur="2.6s" begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
          {NODES.map((n) => (
            <FlowNode key={n.id} {...n} />
          ))}
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          Each moving dot is a dataset or question handed from one agent to the next. Every
          handoff is traced, so any number can be audited back to its source.
        </p>
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden">
        {MOBILE_STEPS.map((s, idx) => (
          <div key={s.title}>
            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
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
          Every handoff is traced, so any number can be audited back to its source.
        </p>
      </div>
    </div>
  );
}
