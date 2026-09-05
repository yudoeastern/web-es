const NODES = [
  { id: "d", cx: 100, cy: 210, title: "Customer discovers", sub: "visual search & recommendations", accent: false },
  { id: "o", cx: 330, cy: 105, title: "Omnichannel Agent", sub: "WA & Email · Ask Weast from KB", accent: true },
  { id: "i", cx: 330, cy: 315, title: "Inventory Agent", sub: "live stock across warehouses", accent: false },
  { id: "p", cx: 575, cy: 210, title: "Order & Payment", sub: "checkout inside the conversation", accent: false },
  { id: "f", cx: 810, cy: 105, title: "Fulfillment", sub: "pick, pack, ship", accent: false },
  { id: "s", cx: 810, cy: 315, title: "Same conversation", sub: "updates & care return to WA/Email", accent: true },
];

const PATHS = [
  { id: "p1", d: "M100,210 C 200,210 230,105 330,105", begin: "0s" },
  { id: "p2", d: "M330,105 C 400,140 400,280 330,315", begin: "0.6s" },
  { id: "p3", d: "M330,315 C 430,315 470,210 575,210", begin: "1.2s" },
  { id: "p4", d: "M330,105 C 430,105 470,210 575,210", begin: "1.8s" },
  { id: "p5", d: "M575,210 C 670,210 700,105 810,105", begin: "2.4s" },
  { id: "p6", d: "M810,105 C 860,150 860,270 810,315", begin: "3s" },
  { id: "p7", d: "M575,210 C 670,210 700,315 810,315", begin: "3.6s" },
];

const MOBILE_STEPS = [
  { title: "Customer discovers", sub: "Visual search and recommendations surface the product." },
  { title: "Omnichannel Agent", sub: "Questions arrive on WhatsApp or Email; Ask Weast answers from your knowledge base." },
  { title: "Inventory Agent", sub: "Live stock checked across warehouses before any promise is made." },
  { title: "Order & Payment", sub: "Checkout happens inside the same conversation." },
  { title: "Fulfillment", sub: "Pick, pack, ship, with tracking generated automatically." },
  { title: "Same conversation", sub: "Delivery updates and care return to the same WA/Email thread. Human replies, agent steps back." },
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

export default function OmnichannelJourneyFlow() {
  return (
    <div>
      {/* Desktop: retail journey mesh */}
      <div className="hidden md:block">
        <svg viewBox="0 0 1000 420" className="w-full" role="img" aria-label="Retail journey: discovery to fulfillment, with the omnichannel agent carrying one conversation">
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
          The conversation never restarts: stock checks, checkout, and delivery updates all
          return to the same WhatsApp or Email thread. Ask Weast answers from your knowledge
          base, and when your team replies manually, the agent steps back. WhatsApp and Email
          tested and live.
        </p>
      </div>

      {/* Mobile: vertical journey */}
      <div className="md:hidden">
        {MOBILE_STEPS.map((s, idx) => (
          <div key={s.title}>
            <div
              className={`flex items-start gap-3 rounded-xl border p-4 ${
                idx === 1 || idx === 5 ? "border-[#E31E24]/60 bg-[#E31E24]/10" : "border-white/10 bg-white/5"
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
          One conversation from discovery to delivery.
        </p>
      </div>
    </div>
  );
}
