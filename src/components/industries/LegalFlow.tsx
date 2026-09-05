const NODES = [
  { id: "intake", cx: 110, cy: 250, title: "Client intake", sub: "profile + case assessment", accent: false },
  { id: "review", cx: 330, cy: 250, title: "Contract Review Agent", sub: "clause-by-clause, risk flags", accent: true },
  { id: "auto", cx: 570, cy: 250, title: "Document Automation", sub: "smart clause insertion", accent: false },
  { id: "draft", cx: 810, cy: 250, title: "Draft to review", sub: "versioned, lawyer-approved", accent: false },
];

const CONVEYOR_PATHS = [
  { id: "c1", d: "M200,250 L240,250", begin: "0s" },
  { id: "c2", d: "M420,250 L480,250", begin: "0.35s" },
  { id: "c3", d: "M660,250 L720,250", begin: "0.7s" },
];

const RESEARCH_PATH = {
  id: "r1",
  d: "M450,114 C 440,165 350,185 330,216",
  begin: "0.5s",
};

const FLAGS_PATH = {
  id: "f1",
  d: "M330,284 C 460,355 680,355 810,284",
  begin: "1.05s",
};

const MOBILE_STEPS = [
  { title: "Client intake", sub: "Chat onboarding opens the matter: profile and case assessment." },
  { title: "Legal Research Agent", sub: "Cited precedent and cross-jurisdiction comparison back every flag." },
  { title: "Contract Review Agent", sub: "Parses the contract clause-by-clause and raises risk flags." },
  { title: "Document Automation", sub: "Smart clause insertion turns findings into a draft." },
  { title: "Draft to review", sub: "Versioned and lawyer-approved, with the flags traveling along." },
];

function FlowNode({ cx, cy, title, sub, accent }: (typeof NODES)[number]) {
  return (
    <g>
      <rect
        x={cx - 90}
        y={cy - 34}
        width={180}
        height={68}
        rx={14}
        fill="#15151B"
        stroke={accent ? "rgba(227,30,36,0.6)" : "rgba(255,255,255,0.14)"}
        strokeWidth={1.5}
      />
      <circle cx={cx - 70} cy={cy} r={4} fill="#E31E24" />
      <text x={cx - 54} y={cy - 3} fill="#ffffff" fontSize={13} fontWeight={700}>
        {title}
      </text>
      <text x={cx - 54} y={cy + 15} fill="#9ca3af" fontSize={10.5}>
        {sub}
      </text>
    </g>
  );
}

export default function LegalFlow() {
  return (
    <div>
      {/* Desktop: contract conveyor fed by a research branch, flags travel to the draft */}
      <div className="hidden md:block">
        <svg viewBox="0 0 1000 420" className="w-full" role="img" aria-label="Agentic legal flow: client intake feeds a contract review agent backed by a legal research agent, document automation turns findings into a versioned draft, and risk flags travel with the draft to lawyer review">
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
              id={RESEARCH_PATH.id}
              d={RESEARCH_PATH.d}
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={1.5}
              strokeDasharray="2 8"
              strokeLinecap="round"
              className="flow-dash"
            />
            <circle r={3.5} fill="#d4d4d8">
              <animateMotion dur="2s" begin={RESEARCH_PATH.begin} repeatCount="indefinite">
                <mpath href={`#${RESEARCH_PATH.id}`} />
              </animateMotion>
            </circle>
          </g>
          <g>
            <path
              id={FLAGS_PATH.id}
              d={FLAGS_PATH.d}
              fill="none"
              stroke="rgba(227,30,36,0.45)"
              strokeWidth={2}
              strokeDasharray="2 8"
              strokeLinecap="round"
              className="flow-dash"
            />
            <circle r={4.5} fill="#E31E24">
              <animateMotion dur="3s" begin={FLAGS_PATH.begin} repeatCount="indefinite">
                <mpath href={`#${FLAGS_PATH.id}`} />
              </animateMotion>
            </circle>
            <circle r={9} fill="rgba(227,30,36,0.25)">
              <animateMotion dur="3s" begin={FLAGS_PATH.begin} repeatCount="indefinite">
                <mpath href={`#${FLAGS_PATH.id}`} />
              </animateMotion>
            </circle>
          </g>
          {NODES.map((n) => (
            <FlowNode key={n.id} {...n} />
          ))}
          {/* legal research branch feeding contract review */}
          <g>
            <rect
              x={340}
              y={46}
              width={220}
              height={68}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.45)"
              strokeWidth={1.5}
            />
            <circle cx={360} cy={72} r={5} fill="#E31E24" />
            <text x={376} y={77} fill="#ffffff" fontSize={14} fontWeight={800}>
              Legal Research Agent
            </text>
            <text x={360} y={98} fill="#9ca3af" fontSize={10.5}>
              cited precedent, cross-jurisdiction
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          Every moving dot is a clause, citation, or flag: intake opens the matter, review
          parses clause-by-clause, research backs every flag with cited precedent, and the
          draft carries the trail to your lawyers.
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
          Every flag keeps its citations, from intake to draft.
        </p>
      </div>
    </div>
  );
}
