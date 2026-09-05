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
  { id: "surat", cx: 110, cy: 300, title: "Surat & permohonan", sub: "scan lama, handwritten, KTP/KK", accent: false, width: 210 },
  { id: "digit", cx: 350, cy: 300, title: "Document Digitization Agent", sub: "classify · archive · draft replies", accent: true, width: 240 },
  { id: "chat", cx: 620, cy: 300, title: "Citizen Service Chatbot", sub: "24/7, cited regulation answers", accent: true, width: 220 },
  { id: "track", cx: 880, cy: 300, title: "Permit tracking", sub: "status checks via delegation", accent: false, width: 210 },
];

const CONVEYOR_PATHS = [
  { id: "c1", d: "M110,300 L350,300", begin: "0s" },
  { id: "c2", d: "M350,300 L620,300", begin: "0.6s" },
  { id: "c3", d: "M620,300 L880,300", begin: "1.2s" },
];

const BRANCH_PATHS = [
  { id: "b1", d: "M350,266 L350,144", begin: "1.8s" },
  { id: "b2", d: "M390,266 C 470,180 580,148 700,144", begin: "2.2s" },
];

const MOBILE_STEPS = [
  { title: "Surat & permohonan", sub: "Old scans, handwritten forms, and KTP/KK enter the workspace." },
  { title: "Document Digitization Agent", sub: "Classifies and archives every surat, and drafts the balasan." },
  { title: "Citizen Service Chatbot", sub: "Answers citizens 24/7 with cited regulation, and delegates permit status checks." },
  { title: "Fraud Detection Agent", sub: "Flags anomalies in bansos, procurement, and pajak from the same digitized archive." },
  { title: "Policy & Data Analytics Agent", sub: "Briefs policymakers with dasar hukum and impact analysis." },
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

export default function PublicSectorFlow() {
  return (
    <div>
      {/* Desktop: digitization conveyor with fraud and policy branches above */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1000 520"
          className="w-full"
          role="img"
          aria-label="Public sector flow on WEAST: surat and permohonan are digitized and archived, the citizen service chatbot answers with cited regulation and delegates permit tracking, while fraud detection and policy analytics agents work the same digitized knowledge"
        >
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
          {BRANCH_PATHS.map((p) => (
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
                <animateMotion dur="2.2s" begin={p.begin} repeatCount="indefinite">
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
          {NODES.map((n) => (
            <FlowNode key={n.id} {...n} />
          ))}
          {/* fraud detection branch above digitization */}
          <g>
            <rect
              x={240}
              y={76}
              width={220}
              height={68}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.7)"
              strokeWidth={2}
            />
            <circle cx={260} cy={102} r={5} fill="#E31E24" />
            <text x={276} y={107} fill="#ffffff" fontSize={14} fontWeight={800}>
              Fraud Detection Agent
            </text>
            <text x={260} y={128} fill="#9ca3af" fontSize={10.5}>
              bansos · procurement · pajak
            </text>
          </g>
          {/* policy analytics branch above the conveyor */}
          <g>
            <rect
              x={550}
              y={76}
              width={300}
              height={68}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.7)"
              strokeWidth={2}
            />
            <circle cx={570} cy={102} r={5} fill="#E31E24" />
            <text x={586} y={107} fill="#ffffff" fontSize={14} fontWeight={800}>
              Policy & Data Analytics Agent
            </text>
            <text x={570} y={128} fill="#9ca3af" fontSize={10.5}>
              policy briefs · impact analysis
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          Every moving dot is a surat, an answer, or a flag: digitized once, used by every
          agent, with ASN approval before anything reaches the public.
        </p>
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden">
        {MOBILE_STEPS.map((s, idx) => (
          <div key={s.title}>
            <div
              className={`flex items-start gap-3 rounded-xl border p-4 ${
                idx === 1 || idx === 2
                  ? "border-[#E31E24]/60 bg-[#E31E24]/10"
                  : idx === 3 || idx === 4
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
          Digitized once, used by every agent, traced from inbox to answer.
        </p>
      </div>
    </div>
  );
}
