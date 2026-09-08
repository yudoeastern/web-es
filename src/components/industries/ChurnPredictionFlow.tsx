const NODES = [
  { id: "sig", cx: 170, cy: 230, title: "Signals", sub: "usage dips, support tone, payment slips", accent: false },
  { id: "risk", cx: 500, cy: 70, title: "Risk Agent", sub: "scores who is drifting", accent: true },
  { id: "ins", cx: 830, cy: 230, title: "Insight Agent", sub: "explains why: price, SLA, silence", accent: false },
  { id: "out", cx: 500, cy: 390, title: "Outreach Agent", sub: "win-back in the right channel", accent: true },
];

const LOOP_PATHS = [
  { id: "l1", d: "M290,230 C 320,140 350,70 380,70", begin: "0s" },
  { id: "l2", d: "M620,70 C 660,70 680,140 710,230", begin: "0.8s" },
  { id: "l3", d: "M710,230 C 680,320 660,390 620,390", begin: "1.6s" },
  { id: "l4", d: "M380,390 C 350,390 320,320 290,230", begin: "2.4s" },
];

const MEMORY_PATHS = [
  { id: "m1", d: "M500,196 L500,104", begin: "0.4s" },
  { id: "m2", d: "M500,356 L500,264", begin: "2s" },
];

const MOBILE_STEPS = [
  { title: "Signals", sub: "Usage dips, support tone, and payment slips stream in." },
  { title: "Risk Agent", sub: "Scores who is drifting, before they say goodbye." },
  { title: "Insight Agent", sub: "Explains why: price, SLA, or silence." },
  { title: "Outreach Agent", sub: "Win-back offer in the right channel, at the right moment." },
  { title: "Customer memory", sub: "Every outcome feeds the next score. Humans approve the plays." },
];

function LoopNode({ cx, cy, title, sub, accent }: (typeof NODES)[number]) {
  return (
    <g>
      <rect
        x={cx - 120}
        y={cy - 34}
        width={240}
        height={68}
        rx={14}
        fill="#15151B"
        stroke={accent ? "rgba(227,30,36,0.6)" : "rgba(255,255,255,0.14)"}
        strokeWidth={1.5}
      />
      <circle cx={cx - 100} cy={cy} r={4} fill="#E31E24" />
      <text x={cx - 84} y={cy - 3} fill="#ffffff" fontSize={13} fontWeight={700}>
        {title}
      </text>
      <text x={cx - 84} y={cy + 15} fill="#9ca3af" fontSize={10.5}>
        {sub}
      </text>
    </g>
  );
}

export default function ChurnPredictionFlow() {
  return (
    <div>
      {/* Desktop: retention loop with customer memory at the center */}
      <div className="hidden md:block">
        <svg viewBox="0 0 1000 460" className="w-full" role="img" aria-label="Churn prediction loop: signals, risk, insight, outreach, feeding on customer memory">
          {LOOP_PATHS.map((p) => (
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
          {MEMORY_PATHS.map((p) => (
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
                <animateMotion dur="2s" begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
          {NODES.map((n) => (
            <LoopNode key={n.id} {...n} />
          ))}
          {/* center customer memory */}
          <g>
            <rect
              x={390}
              y={196}
              width={220}
              height={68}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.7)"
              strokeWidth={2}
            />
            <circle cx={412} cy={222} r={5} fill="#E31E24" />
            <text x={428} y={227} fill="#ffffff" fontSize={14} fontWeight={800}>
              Customer memory
            </text>
            <text x={412} y={248} fill="#9ca3af" fontSize={10.5}>
              orders · tickets · promises
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          The loop never sleeps: every win-back outcome feeds the next score, and every risk
          comes with a reason your team can act on. Humans approve the plays.
        </p>
      </div>

      {/* Mobile: vertical loop */}
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
          Every win-back outcome feeds the next score.
        </p>
      </div>
    </div>
  );
}
