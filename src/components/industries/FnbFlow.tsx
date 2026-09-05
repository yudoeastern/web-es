type NodeTone = "plain" | "accent" | "light";

type FnbNode = {
  id: string;
  cx: number;
  cy: number;
  w: number;
  title: string;
  sub: string;
  tone: NodeTone;
};

const NODES: FnbNode[] = [
  { id: "signals", cx: 110, cy: 300, w: 210, title: "Sales & event signals", sub: "POS via MCP · calendars", tone: "plain" },
  { id: "demand", cx: 340, cy: 300, w: 210, title: "Demand & Waste Agent", sub: "per-item, per-outlet forecast", tone: "accent" },
  { id: "inventory", cx: 600, cy: 300, w: 210, title: "Inventory & Supply Agent", sub: "auto POs · stock alerts", tone: "plain" },
  { id: "outlets", cx: 870, cy: 300, w: 210, title: "Outlets", sub: "stocked for what they will sell", tone: "plain" },
  { id: "certs", cx: 340, cy: 110, w: 210, title: "Certificates & audits", sub: "documents extracted via IDP", tone: "plain" },
  { id: "quality", cx: 600, cy: 110, w: 230, title: "Quality & Compliance Agent", sub: "BPOM · HACCP · audits", tone: "light" },
  { id: "menu", cx: 870, cy: 110, w: 230, title: "Menu Personalization Agent", sub: "POS-driven suggestions", tone: "plain" },
];

const CONVEYOR_PATHS = [
  { id: "f1", d: "M110,300 L340,300", begin: "0s" },
  { id: "f2", d: "M340,300 L600,300", begin: "0.9s" },
  { id: "f3", d: "M600,300 L870,300", begin: "1.8s" },
];

const COMPLIANCE_PATHS = [
  { id: "c1", d: "M340,110 L600,110", begin: "0.5s" },
  { id: "c2", d: "M600,110 L600,300", begin: "1.4s" },
];

const MENU_PATH = { id: "m1", d: "M340,300 C 480,240 700,150 870,110", begin: "2.3s" };

const MOBILE_STEPS = [
  { title: "Sales & event signals", sub: "POS via MCP, calendars, and event signals stream into the platform." },
  { title: "Demand & Waste Agent", sub: "Forecasts demand per item and outlet, and plans how to cut waste." },
  { title: "Inventory & Supply Agent", sub: "Turns the forecast into purchase orders and stock alerts." },
  { title: "Quality & Compliance Agent", sub: "Keeps BPOM and HACCP papers in order, with every certificate traced via IDP." },
  { title: "Menu Personalization Agent", sub: "Suggests menu changes from POS signals, aware of the forecast." },
  { title: "Outlets", sub: "Stocked for what they will sell. Managers approve every purchase order." },
];

function FlowNode({ cx, cy, w, title, sub, tone }: FnbNode) {
  const stroke =
    tone === "accent"
      ? "rgba(227,30,36,0.6)"
      : tone === "light"
        ? "rgba(227,30,36,0.35)"
        : "rgba(255,255,255,0.14)";
  return (
    <g>
      <rect
        x={cx - w / 2}
        y={cy - 34}
        width={w}
        height={68}
        rx={14}
        fill="#15151B"
        stroke={stroke}
        strokeWidth={1.5}
      />
      <circle cx={cx - w / 2 + 20} cy={cy} r={4} fill="#E31E24" />
      <text x={cx - w / 2 + 36} y={cy - 3} fill="#ffffff" fontSize={13} fontWeight={700}>
        {title}
      </text>
      <text x={cx - w / 2 + 36} y={cy + 15} fill="#9ca3af" fontSize={10.5}>
        {sub}
      </text>
    </g>
  );
}

export default function FnbFlow() {
  return (
    <div>
      {/* Desktop: conveyor with compliance gate and menu branch */}
      <div className="hidden md:block">
        <svg viewBox="0 0 1000 520" className="w-full" role="img" aria-label="F&B agent flow: sales signals feed the demand agent, which drives inventory orders to outlets, certificates feed the quality agent that gates suppliers, and the menu agent personalizes from the POS">
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
          {COMPLIANCE_PATHS.map((p) => (
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
          <g>
            <path
              id={MENU_PATH.id}
              d={MENU_PATH.d}
              fill="none"
              stroke="rgba(227,30,36,0.35)"
              strokeWidth={1.5}
              strokeDasharray="2 8"
              strokeLinecap="round"
              className="flow-dash"
            />
            <circle r={4} fill="#E31E24">
              <animateMotion dur="3s" begin={MENU_PATH.begin} repeatCount="indefinite">
                <mpath href={`#${MENU_PATH.id}`} />
              </animateMotion>
            </circle>
          </g>
          <text x={612} y={208} fill="#9ca3af" fontSize={10}>
            compliance gate
          </text>
          {NODES.map((n) => (
            <FlowNode key={n.id} {...n} />
          ))}
          <text x={500} y={440} textAnchor="middle" fill="#71717a" fontSize={11}>
            Forecast flows into orders, orders into stocked outlets · Compliance gates suppliers · POS signals shape menu suggestions
          </text>
        </svg>
        <p className="mt-4 text-center text-[12px] text-zinc-500">
          The demand agent forecasts per item and outlet, the inventory agent turns it into
          purchase orders, and the quality agent keeps BPOM and HACCP papers in order. Managers
          approve every purchase order.
        </p>
      </div>

      {/* Mobile: vertical flow */}
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
          Forecast to purchase order to stocked outlet, with compliance gating suppliers.
        </p>
      </div>
    </div>
  );
}
