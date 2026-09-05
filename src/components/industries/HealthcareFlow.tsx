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
  { id: "fa", cx: 150, cy: 110, title: "Facility A records", sub: "EHR · labs · imaging", accent: false },
  { id: "fb", cx: 150, cy: 350, title: "Facility B records", sub: "claims · referrals · notes", accent: false },
  { id: "ext", cx: 680, cy: 110, title: "Extraction Agent", sub: "indexed per facility", accent: false },
  { id: "ans", cx: 860, cy: 300, title: "Care Team Answers", sub: "Ask Weast · clinician takeover", accent: true, width: 220 },
];

const GATE_PATHS = [
  { id: "h1", d: "M150,110 C 240,110 285,180 325,213", begin: "0s" },
  { id: "h2", d: "M150,350 C 240,350 285,280 325,247", begin: "0.8s" },
  { id: "h3", d: "M430,230 C 530,225 600,160 675,115", begin: "1.6s" },
  { id: "h4", d: "M680,110 C 770,130 830,210 858,295", begin: "2.4s" },
];

const ESCALATE_PATH = { id: "hx", d: "M430,230 C 560,320 700,345 850,310", begin: "1.2s" };

const MOBILE_STEPS = [
  { title: "Facility records", sub: "Each facility keeps its own records: EHR, labs, claims, and referrals." },
  { title: "Governance Gate", sub: "Tenant boundaries and consent checks decide what can pass. Denied requests escalate to humans." },
  { title: "Extraction Agent", sub: "Approved documents are extracted and indexed per facility, never mixed." },
  { title: "Care Team Answers", sub: "Ask Weast gives answers grounded in the right facility's records, with clinician takeover." },
  { title: "Every access logged", sub: "Who saw what, and why: the audit trail is built in, not bolted on." },
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

export default function HealthcareFlow() {
  return (
    <div>
      {/* Desktop: gated vault, records cross the gate, never the boundary */}
      <div className="hidden md:block">
        <svg viewBox="0 0 1000 460" className="w-full" role="img" aria-label="Governed document intelligence flow: facility records pass a governance gate enforcing tenant boundaries and consent, extraction builds indexed knowledge, care teams get traceable answers">
          {GATE_PATHS.map((p) => (
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
          {/* denied / escalate path, stays white */}
          <g>
            <path
              id={ESCALATE_PATH.id}
              d={ESCALATE_PATH.d}
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={1.5}
              strokeDasharray="2 8"
              strokeLinecap="round"
              className="flow-dash"
            />
            <circle r={3.5} fill="#d4d4d8">
              <animateMotion dur="2.4s" begin={ESCALATE_PATH.begin} repeatCount="indefinite">
                <mpath href={`#${ESCALATE_PATH.id}`} />
              </animateMotion>
            </circle>
          </g>
          {NODES.map((n) => (
            <FlowNode key={n.id} {...n} />
          ))}
          {/* center governance gate */}
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
              Governance Gate
            </text>
            <text x={342} y={248} fill="#9ca3af" fontSize={10.5}>
              tenant boundaries · consent checks
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          Every record passes the governance gate before it becomes knowledge: denied requests
          escalate to humans, approved ones are indexed per facility, and every answer stays
          traceable.
        </p>
      </div>

      {/* Mobile: vertical gated flow */}
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
          Records cross the gate, never the boundary.
        </p>
      </div>
    </div>
  );
}
