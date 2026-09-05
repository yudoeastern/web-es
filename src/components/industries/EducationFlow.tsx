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
  { id: "cur", cx: 500, cy: 80, title: "Curriculum Design Agent", sub: "outlines · lesson plans", accent: true, width: 220 },
  { id: "tut", cx: 830, cy: 260, title: "Tutoring Agent", sub: "cited answers, page-level", accent: false, width: 190 },
  { id: "assess", cx: 500, cy: 440, title: "Student Assessment Agent", sub: "rubric grading · feedback", accent: true, width: 220 },
  { id: "res", cx: 150, cy: 440, title: "Research Assistant Agent", sub: "literature reviews · gap analysis", accent: false, width: 220 },
];

const LOOP_PATHS = [
  { id: "e1", d: "M170,260 C 240,150 370,80 500,80", begin: "0s" },
  { id: "e2", d: "M500,80 C 640,80 770,150 830,260", begin: "0.7s" },
  { id: "e3", d: "M830,260 C 770,370 640,440 500,440", begin: "1.4s" },
  { id: "e4", d: "M500,440 C 400,340 400,180 500,80", begin: "2.1s" },
];

const MEMORY_PATHS = [
  { id: "em1", d: "M280,260 L735,260", begin: "0.4s" },
  { id: "em2", d: "M170,294 C 166,330 154,370 150,406", begin: "1.8s" },
];

const MOBILE_STEPS = [
  { title: "Course knowledge", sub: "Textbooks, materials, and standards, kept as one course memory." },
  { title: "Curriculum Design Agent", sub: "Drafts outlines and lesson plans from standards." },
  { title: "Tutoring Agent", sub: "Answers students with page-level textbook citations." },
  { title: "Student Assessment Agent", sub: "Scores with rubrics and writes feedback." },
  { title: "Research Assistant Agent", sub: "Literature reviews and gap analysis. Results revise the next curriculum draft." },
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

export default function EducationFlow() {
  return (
    <div>
      {/* Desktop: learning loop on course knowledge, with a research branch */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1000 520"
          className="w-full"
          role="img"
          aria-label="Education loop on WEAST: course knowledge feeds the curriculum design agent, the tutoring agent answers students with page-level citations, the student assessment agent grades with rubrics, results revise the curriculum, and the research assistant agent reviews literature"
        >
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
            <FlowNode key={n.id} {...n} />
          ))}
          {/* course knowledge, the memory the whole loop runs on */}
          <g>
            <rect
              x={60}
              y={226}
              width={220}
              height={68}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.7)"
              strokeWidth={2}
            />
            <circle cx={80} cy={252} r={5} fill="#E31E24" />
            <text x={96} y={257} fill="#ffffff" fontSize={14} fontWeight={800}>
              Course knowledge
            </text>
            <text x={80} y={278} fill="#9ca3af" fontSize={10.5}>
              textbooks · materials · standards
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          The loop keeps turning: every assessment result revises the curriculum, every
          tutoring answer carries a citation, and educators approve what reaches students.
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
          Every assessment result feeds the next curriculum draft.
        </p>
      </div>
    </div>
  );
}
