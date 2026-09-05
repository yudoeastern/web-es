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
  { id: "concierge", cx: 500, cy: 70, title: "AI Concierge", sub: "pre-arrival to post-departure", accent: true, width: 220 },
  { id: "booking", cx: 840, cy: 260, title: "Booking & Operations Agent", sub: "confirmations · event contracts", accent: false, width: 240 },
  { id: "reputation", cx: 500, cy: 450, title: "Review & Reputation Agent", sub: "sentiment · trends", accent: false, width: 240 },
  { id: "pricing", cx: 160, cy: 260, title: "Dynamic Pricing Agent", sub: "ADR · RevPAR scenarios", accent: false, width: 210 },
];

const LOOP_PATHS = [
  { id: "h1", d: "M500,220 L500,104", begin: "0s" },
  { id: "h2", d: "M610,70 C 740,80 840,130 840,226", begin: "0.7s" },
  { id: "h3", d: "M840,294 C 835,390 740,445 620,450", begin: "1.4s" },
  { id: "h4", d: "M500,416 L500,300", begin: "2.1s" },
];

const FEED_PATHS = [
  { id: "f1", d: "M265,286 C 380,338 620,338 718,286", begin: "1s", dur: "2.4s" },
  { id: "f2", d: "M390,260 L267,260", begin: "0.4s", dur: "2s" },
];

const MOBILE_STEPS = [
  { title: "AI Concierge", sub: "Carries guest context from pre-arrival to post-departure." },
  { title: "Dynamic Pricing Agent", sub: "Prices rooms from occupancy, events, and ADR/RevPAR scenarios." },
  { title: "Booking & Operations Agent", sub: "Automates confirmations and event contracts, with rate recommendations from pricing." },
  { title: "Review & Reputation Agent", sub: "Reads every review for sentiment and trends across properties." },
  { title: "Property memory", sub: "Guests, stays, and preferences. Every stay feeds the next guest's experience." },
];

function FlowNode({ cx, cy, title, sub, accent, width = 210 }: FlowNodeDef) {
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

export default function HospitalityFlow() {
  return (
    <div>
      {/* Desktop: guest loop with property memory at the center */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1000 520"
          className="w-full"
          role="img"
          aria-label="Hospitality loop on WEAST: property memory feeds the AI concierge, the concierge hands context to booking and operations, stays become reviews, the reputation agent loops sentiment back into memory, and dynamic pricing sends rate recommendations to booking"
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
          {FEED_PATHS.map((p) => (
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
          {/* center property memory */}
          <g>
            <rect
              x={390}
              y={220}
              width={220}
              height={80}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.7)"
              strokeWidth={2}
            />
            <circle cx={412} cy={246} r={5} fill="#E31E24" />
            <text x={428} y={251} fill="#ffffff" fontSize={14} fontWeight={800}>
              Property memory
            </text>
            <text x={412} y={273} fill="#9ca3af" fontSize={10.5}>
              guests · stays · preferences
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          The loop keeps turning: the concierge carries guest context, pricing feeds rate
          recommendations into bookings, and every review loops back into service standards.
          GMs approve rate changes.
        </p>
      </div>

      {/* Mobile: vertical loop */}
      <div className="md:hidden">
        {MOBILE_STEPS.map((s, idx) => (
          <div key={s.title}>
            <div
              className={`flex items-start gap-3 rounded-xl border p-4 ${
                idx === 0 || idx === 2
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
          Every stay feeds the next guest&apos;s experience.
        </p>
      </div>
    </div>
  );
}
