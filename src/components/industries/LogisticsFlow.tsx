const NODES = [
  { id: "fl", cx: 500, cy: 60, title: "Fleets", sub: "telemetry, positions, loads", accent: false },
  { id: "wh", cx: 760, cy: 140, title: "Warehouses", sub: "dock slots, waves, stock", accent: false },
  { id: "tp", cx: 820, cy: 380, title: "3PL Partners", sub: "capacity, SLAs, handoffs", accent: false },
  { id: "cu", cx: 500, cy: 460, title: "Customers", sub: "ETA changes, delivery windows", accent: false },
  { id: "cd", cx: 180, cy: 380, title: "Customs & Docs", sub: "manifests, clearance status", accent: false },
  { id: "co", cx: 240, cy: 140, title: "Couriers", sub: "pickup runs, proof of delivery", accent: false },
];

// Straight spokes between the tower and each channel.
// Path direction defines dot direction: inbound events flow to the tower,
// outbound updates flow from the tower.
const SPOKES = [
  { id: "s1", d: "M500,60 L500,250", begin: "0s" },
  { id: "s2", d: "M760,140 L500,250", begin: "0.5s" },
  { id: "s3", d: "M500,250 L820,380", begin: "1s" },
  { id: "s4", d: "M500,250 L500,460", begin: "1.5s" },
  { id: "s5", d: "M180,380 L500,250", begin: "2s" },
  { id: "s6", d: "M500,250 L240,140", begin: "2.5s" },
];

const MOBILE_STEPS = [
  { title: "Fleets & couriers", sub: "Positions, telemetry, and pickup events stream into the tower." },
  { title: "Warehouses & 3PL partners", sub: "Dock slots, stock, and partner capacity arrive in real time." },
  { title: "Control Tower Agent", sub: "Recalculates ETAs and reroutes around exceptions as they happen." },
  { title: "Customs & Docs", sub: "Manifests and clearance documents prepared and tracked automatically." },
  { title: "Customers", sub: "Fresh ETAs and updates pushed before anyone needs to ask." },
  { title: "Human dispatchers", sub: "Approve the costly calls, and every handoff stays traced." },
];

function ChannelNode({ cx, cy, title, sub, accent }: (typeof NODES)[number]) {
  return (
    <g>
      <rect
        x={cx - 105}
        y={cy - 34}
        width={210}
        height={68}
        rx={14}
        fill="#15151B"
        stroke={accent ? "rgba(227,30,36,0.6)" : "rgba(255,255,255,0.14)"}
        strokeWidth={1.5}
      />
      <circle cx={cx - 85} cy={cy} r={4} fill="#E31E24" />
      <text x={cx - 69} y={cy - 3} fill="#ffffff" fontSize={13} fontWeight={700}>
        {title}
      </text>
      <text x={cx - 69} y={cy + 15} fill="#9ca3af" fontSize={10.5}>
        {sub}
      </text>
    </g>
  );
}

export default function LogisticsFlow() {
  return (
    <div>
      {/* Desktop: dispatch tower hub and spoke */}
      <div className="hidden md:block">
        <svg viewBox="0 0 1000 520" className="w-full" role="img" aria-label="Logistics control tower: fleets, warehouses, 3PL partners, customers, customs, and couriers streaming through one orchestration agent">
          {SPOKES.map((p) => (
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
            <ChannelNode key={n.id} {...n} />
          ))}
          {/* center control tower */}
          <g>
            <rect
              x={380}
              y={202}
              width={240}
              height={96}
              rx={14}
              fill="#1A1215"
              stroke="rgba(227,30,36,0.7)"
              strokeWidth={2}
            />
            <circle cx={404} cy={236} r={5} fill="#E31E24" />
            <text x={420} y={241} fill="#ffffff" fontSize={14} fontWeight={800}>
              Control Tower Agent
            </text>
            <text x={404} y={266} fill="#9ca3af" fontSize={10.5}>
              recalculates · reroutes · updates
            </text>
          </g>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          Six channels, one tower: events stream in, decisions stream out, and every spoke is
          traced. Humans approve the costly calls.
        </p>
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden">
        {MOBILE_STEPS.map((s, idx) => (
          <div key={s.title}>
            <div
              className={`flex items-start gap-3 rounded-xl border p-4 ${
                idx === 2
                  ? "border-[#E31E24]/60 bg-[#E31E24]/10"
                  : idx === MOBILE_STEPS.length - 1
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
          Every handoff is traced, from dock to doorstep.
        </p>
      </div>
    </div>
  );
}
