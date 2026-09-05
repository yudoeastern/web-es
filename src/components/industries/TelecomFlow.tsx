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
  { id: "logs", cx: 100, cy: 210, title: "NOC logs & tickets", sub: "via MCP + IDP", accent: false, width: 180 },
  { id: "net", cx: 330, cy: 105, title: "Network Optimization Agent", sub: "performance · predictive alerts", accent: true, width: 210 },
  { id: "churn", cx: 330, cy: 315, title: "Churn Prediction Agent", sub: "usage patterns · CRM & billing", accent: false, width: 200 },
  { id: "sup", cx: 575, cy: 210, title: "Customer Support Agent", sub: "cited plan terms · tickets", accent: true, width: 200 },
  { id: "fraud", cx: 810, cy: 105, title: "Fraud Detection Agent", sub: "SIM box · CDR anomalies", accent: false, width: 200 },
  { id: "ret", cx: 810, cy: 315, title: "Retention plays", sub: "proactive outreach, approved", accent: false, width: 200 },
];

const PATHS = [
  { id: "t1", d: "M100,210 C 200,210 230,105 330,105", begin: "0s" },
  { id: "t2", d: "M330,105 C 430,105 470,210 575,210", begin: "0.5s" },
  { id: "t3", d: "M330,315 C 430,315 470,210 575,210", begin: "0.9s" },
  { id: "t4", d: "M575,210 C 470,260 430,160 330,105", begin: "1.4s" },
  { id: "t5", d: "M330,315 C 490,390 650,390 810,315", begin: "1.9s" },
  { id: "t6", d: "M330,105 C 490,30 650,30 810,105", begin: "2.4s" },
];

const MOBILE_STEPS = [
  { title: "NOC logs & tickets", sub: "Incident tickets and network logs arrive via MCP and IDP." },
  { title: "Network Optimization Agent", sub: "Analyzes traffic, predicts degradation, and surfaces the outage picture." },
  { title: "Churn Prediction Agent", sub: "Scores subscribers from usage patterns, CRM, and billing." },
  { title: "Customer Support Agent", sub: "Answers with cited plan terms and checks outage status back with the network agent." },
  { title: "Fraud Detection Agent", sub: "Sweeps CDR batches for SIM box and usage anomalies." },
  { title: "Retention plays", sub: "Proactive outreach lists, approved by your team before they go out." },
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

export default function TelecomFlow() {
  return (
    <div>
      {/* Desktop: telecom ops mesh with agents handing work to each other */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1000 420"
          className="w-full"
          role="img"
          aria-label="Telecom operations mesh on WEAST: NOC logs and tickets feed the network optimization agent, churn scores and outage status flow to the customer support agent, support checks status back with the network agent, churn hands retention plays to outreach, and network anomalies surface to the fraud detection agent"
        >
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
          Each moving dot is a handoff: outage status, outreach lists, and anomaly alerts
          between agents. Every handoff is traced, and humans approve the plays.
        </p>
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden">
        {MOBILE_STEPS.map((s, idx) => (
          <div key={s.title}>
            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
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
          Every handoff is traced, and humans approve the plays.
        </p>
      </div>
    </div>
  );
}
