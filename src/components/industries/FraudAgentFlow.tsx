const NODES = [
  { id: "t", cx: 100, cy: 210, title: "Transaction stream", sub: "every payment event", accent: false },
  { id: "m", cx: 330, cy: 105, title: "Monitoring Agent", sub: "scores each transaction", accent: false },
  { id: "i", cx: 330, cy: 315, title: "Identity Agent", sub: "KYC & device context", accent: false },
  { id: "v", cx: 575, cy: 210, title: "Investigation Agent", sub: "builds the case timeline", accent: true },
  { id: "s", cx: 810, cy: 105, title: "Case Supervisor", sub: "approves or escalates", accent: true },
  { id: "a", cx: 810, cy: 315, title: "Compliance Agent", sub: "audit-ready case file", accent: false },
];

const PATHS = [
  { id: "p1", d: "M100,210 C 200,210 230,105 330,105", begin: "0s" },
  { id: "p2", d: "M100,210 C 200,210 230,315 330,315", begin: "0.4s" },
  { id: "p3", d: "M330,105 C 430,105 470,210 575,210", begin: "0.9s" },
  { id: "p4", d: "M330,315 C 430,315 470,210 575,210", begin: "1.3s" },
  { id: "p5", d: "M575,210 C 670,210 700,105 810,105", begin: "1.8s" },
  { id: "p6", d: "M575,210 C 670,210 700,315 810,315", begin: "2.2s" },
  { id: "p7", d: "M810,140 C 860,180 860,240 810,280", begin: "2.7s" },
];

const MOBILE_STEPS = [
  { title: "Transaction stream", sub: "Every payment event enters the workspace." },
  { title: "Monitoring Agent", sub: "Scores each transaction in real time." },
  { title: "Identity Agent", sub: "Adds KYC and device context to anything suspicious." },
  { title: "Investigation Agent", sub: "Merges signals and builds the case timeline." },
  { title: "Case Supervisor", sub: "Approves, escalates, or requests more evidence." },
  { title: "Compliance Agent", sub: "Packages an audit-ready case file." },
];

function FlowNode({ cx, cy, title, sub, accent }: (typeof NODES)[number]) {
  return (
    <g>
      <rect
        x={cx - 92}
        y={cy - 34}
        width={184}
        height={68}
        rx={14}
        fill="#15151B"
        stroke={accent ? "rgba(227,30,36,0.6)" : "rgba(255,255,255,0.14)"}
        strokeWidth={1.5}
      />
      <circle cx={cx - 72} cy={cy} r={4} fill="#E31E24" />
      <text x={cx - 56} y={cy - 3} fill="#ffffff" fontSize={13} fontWeight={700}>
        {title}
      </text>
      <text x={cx - 56} y={cy + 15} fill="#9ca3af" fontSize={10.5}>
        {sub}
      </text>
    </g>
  );
}

export default function FraudAgentFlow() {
  return (
    <div>
      {/* Desktop: connected agent mesh */}
      <div className="hidden md:block">
        <svg viewBox="0 0 1000 420" className="w-full" role="img" aria-label="WEAST fraud case flow: agents handing work to each other">
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
          Each moving dot is a live event handed from one agent to the next. Every handoff is
          traced in the run timeline.
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
          Every handoff between agents is traced in the run timeline.
        </p>
      </div>
    </div>
  );
}
