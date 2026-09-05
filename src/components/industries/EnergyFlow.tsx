const NODES = [
  { id: "scada", cx: 150, cy: 120, w: 210, title: "Sensor & SCADA feeds", sub: "real-time via MCP", accent: false },
  { id: "inspections", cx: 150, cy: 400, w: 210, title: "Inspection reports", sub: "field forms via IDP", accent: false },
  { id: "demand", cx: 720, cy: 110, w: 240, title: "Demand Forecasting Agent", sub: "consumption · seasonal trends", accent: false },
  { id: "grid", cx: 860, cy: 300, w: 230, title: "Grid Optimization Agent", sub: "load balancing · losses", accent: true },
  { id: "customer", cx: 620, cy: 460, w: 260, title: "Customer Service Agent", sub: "billing · outages · tariff citations", accent: false },
];

const PATHS = [
  { id: "p1", d: "M255,120 C 282,165 285,205 287,238", begin: "0s" },
  { id: "p2", d: "M255,400 C 282,355 285,315 287,284", begin: "0.5s" },
  { id: "p3", d: "M520,212 C 555,175 570,145 596,118", begin: "1s" },
  { id: "p4", d: "M790,144 C 825,185 845,225 856,262", begin: "1.5s" },
  { id: "p5", d: "M570,262 C 628,272 686,286 741,297", begin: "2s" },
  { id: "p6", d: "M860,334 C 850,395 810,435 754,456", begin: "2.5s" },
];

const MOBILE_STEPS = [
  { title: "Sensor & SCADA feeds", sub: "Real-time readings stream in through MCP connectors." },
  { title: "Inspection reports", sub: "Field forms and photos are read through Document Intelligence." },
  { title: "Predictive Maintenance Agent", sub: "Scores failure risk and drafts schedules for engineer approval." },
  { title: "Demand Forecasting Agent", sub: "Answers load-impact questions with consumption and seasonal trends." },
  { title: "Grid Optimization Agent", sub: "Turns risk and forecast into balancing plans that cut losses." },
  { title: "Customer Service Agent", sub: "Pushes outage status and billing answers with tariff citations." },
];

function FlowNode({ cx, cy, w, title, sub, accent }: (typeof NODES)[number]) {
  const x = cx - w / 2;
  return (
    <g>
      <rect
        x={x}
        y={cy - 34}
        width={w}
        height={68}
        rx={14}
        fill="#15151B"
        stroke={accent ? "rgba(227,30,36,0.6)" : "rgba(255,255,255,0.14)"}
        strokeWidth={1.5}
      />
      <circle cx={x + 20} cy={cy} r={4} fill="#E31E24" />
      <text x={x + 36} y={cy - 3} fill="#ffffff" fontSize={13} fontWeight={700}>
        {title}
      </text>
      <text x={x + 36} y={cy + 15} fill="#9ca3af" fontSize={10.5}>
        {sub}
      </text>
    </g>
  );
}

export default function EnergyFlow() {
  return (
    <div>
      {/* Desktop: four agents on one grid, fed by sensors and inspection documents */}
      <div className="hidden md:block">
        <svg viewBox="0 0 1000 520" className="w-full" role="img" aria-label="WEAST energy flow: sensor and SCADA feeds and inspection reports drive the predictive maintenance agent, which delegates to demand forecasting and grid optimization, feeding customer service with outage updates">
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
          {NODES.map((n) => (
            <FlowNode key={n.id} {...n} />
          ))}
          {/* center predictive maintenance agent */}
          <g>
            <rect
              x={290}
              y={212}
              width={280}
              height={96}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.7)"
              strokeWidth={2}
            />
            <circle cx={312} cy={246} r={5} fill="#E31E24" />
            <text x={328} y={251} fill="#ffffff" fontSize={14} fontWeight={800}>
              Predictive Maintenance Agent
            </text>
            <text x={312} y={274} fill="#9ca3af" fontSize={10.5}>
              failure risk · schedules
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          Every moving dot is a reading, a delegation, or a balancing plan, traced in the
          run timeline. Engineers approve every grid action before it happens.
        </p>
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden">
        {MOBILE_STEPS.map((s, idx) => (
          <div key={s.title}>
            <div
              className={`flex items-start gap-3 rounded-xl border p-4 ${
                idx === 2 || idx === 4
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
          Every reading and delegation is traced in the run timeline. Engineers approve
          grid actions.
        </p>
      </div>
    </div>
  );
}
