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
  { id: "cust", cx: 150, cy: 110, title: "Customer messages", sub: "support · sales · storefront", accent: false },
  { id: "team", cx: 150, cy: 350, title: "Team requests", sub: "HR · IT · everyday work", accent: false },
  { id: "know", cx: 680, cy: 110, title: "Knowledge Grounding", sub: "SOPs · catalog · policies", accent: false, width: 210 },
  { id: "act", cx: 860, cy: 300, title: "Answer & Act", sub: "reply · draft · fulfil", accent: true, width: 220 },
];

const ROUTE_PATHS = [
  { id: "a1", d: "M150,110 C 240,110 285,180 325,213", begin: "0s" },
  { id: "a2", d: "M150,350 C 240,350 285,280 325,247", begin: "0.8s" },
  { id: "a3", d: "M430,230 C 530,225 600,160 675,115", begin: "1.6s" },
  { id: "a4", d: "M680,110 C 770,130 830,210 858,295", begin: "2.4s" },
];

const HANDOFF_PATH = { id: "a5", d: "M430,230 C 560,320 700,345 850,310", begin: "1.2s" };

const MOBILE_STEPS = [
  { title: "Requests arrive", sub: "Customers and staff ask over chat, email, voice, or the tools they already use." },
  { title: "Routing Agent", sub: "Intent, context, and authority decide which assistant picks the request up." },
  { title: "Knowledge Grounding", sub: "Answers are pulled from your own SOPs, catalog, and policies, not invented." },
  { title: "Answer & Act", sub: "The assistant replies, tracks the order, drafts the ticket, or completes the task." },
  { title: "Human takeover", sub: "Sensitive or unclear requests go to a person with the full conversation attached." },
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

export default function AiAssistantFlow() {
  return (
    <div>
      {/* Desktop: requests cross the router, answers stay grounded */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1000 460"
          className="w-full"
          role="img"
          aria-label="AI assistant flow: customer and team requests pass a routing agent that checks intent and authority, knowledge grounding answers from company sources, and the assistant replies or acts, with unclear requests handed to a human"
        >
          {ROUTE_PATHS.map((p) => (
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
          {/* handoff to a human, stays white */}
          <g>
            <path
              id={HANDOFF_PATH.id}
              d={HANDOFF_PATH.d}
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={1.5}
              strokeDasharray="2 8"
              strokeLinecap="round"
              className="flow-dash"
            />
            <circle r={3.5} fill="#d4d4d8">
              <animateMotion dur="2.4s" begin={HANDOFF_PATH.begin} repeatCount="indefinite">
                <mpath href={`#${HANDOFF_PATH.id}`} />
              </animateMotion>
            </circle>
          </g>
          {NODES.map((n) => (
            <FlowNode key={n.id} {...n} />
          ))}
          {/* center routing agent */}
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
              Routing Agent
            </text>
            <text x={342} y={248} fill="#9ca3af" fontSize={10.5}>
              intent · context · authority
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          Every request passes the routing agent before anything is answered: grounded replies and
          actions come back from your own knowledge, and requests that need judgement hand over to
          a human with the full context.
        </p>
      </div>

      {/* Mobile: vertical routed flow */}
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
          Requests cross the router, answers stay grounded, humans keep the judgement calls.
        </p>
      </div>
    </div>
  );
}
