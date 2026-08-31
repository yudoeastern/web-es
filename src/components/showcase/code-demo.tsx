import type { ReactNode } from "react";

export type DemoLang = "ts" | "python" | "json";

export interface TerminalLine {
  text: string;
  kind: "ok" | "info" | "dim";
}

export interface DemoFile {
  id: string;
  name: string;
  lang: DemoLang;
  langLabel: string;
  code: string;
  runCommand: string;
  runOutput: TerminalLine[];
}

export const DEMO_FILES: DemoFile[] = [
  {
    id: "churn-agent",
    name: "churn-agent.ts",
    lang: "ts",
    langLabel: "TypeScript",
    code: `import { EasternStack } from "@easternstack/sdk";

const client = new EasternStack({
  model: "es-enterprise-v2",
});

export async function predictChurn(customerId: string) {
  const profile = await client.data.get(customerId);

  const result = await client.agents.run({
    name: "churn-prediction",
    input: profile,
    tools: ["risk-score", "retention-playbook"],
  });

  if (result.risk > 0.75) {
    await client.notify.sales({
      customer: profile.name,
      risk: result.risk,
      playbook: result.playbook,
    });
  }

  return result;
}`,
    runCommand: "npm run agent",
    runOutput: [
      { text: "> churn-detector@1.0.0 agent", kind: "dim" },
      { text: "> tsx src/churn-agent.ts", kind: "dim" },
      { text: "Loaded customer profile #8821", kind: "info" },
      { text: "Risk score: 0.83 (high)", kind: "info" },
      { text: "Sales alert sent to crm@easternstack.com", kind: "ok" },
      { text: "Done in 1.24s", kind: "ok" },
    ],
  },
  {
    id: "forecast",
    name: "forecast.py",
    lang: "python",
    langLabel: "Python",
    code: `from easternstack import Pipeline, ModelHub

pipeline = Pipeline("demand-forecast")


@pipeline.step
def load_history(ctx):
    return ctx.warehouse.query(
        "SELECT sku, units, ts FROM sales_36m"
    )


@pipeline.step
def train(ctx, df):
    model = ModelHub.load("es-forecast-v3")
    return model.fit(df, horizon=90)


if __name__ == "__main__":
    report = pipeline.run()
    print(f"MAPE: {report.mape:.2%}")`,
    runCommand: "python forecast.py",
    runOutput: [
      { text: "EasternStack Pipeline v3.2.0", kind: "dim" },
      { text: "Loaded 36 months of sales history (148,220 rows)", kind: "info" },
      { text: "Training es-forecast-v3 on 4x A100...", kind: "info" },
      { text: "MAPE: 3.42%", kind: "ok" },
      { text: "Report saved to runs/forecast-0831", kind: "ok" },
    ],
  },
  {
    id: "agents-json",
    name: "agents.json",
    lang: "json",
    langLabel: "JSON",
    code: `{
  "workspace": "easternstack-demo",
  "agents": [
    {
      "name": "churn-prediction",
      "model": "es-enterprise-v2",
      "tools": ["risk-score", "retention-playbook"]
    },
    {
      "name": "demand-forecast",
      "model": "es-forecast-v3",
      "schedule": "0 4 * * *"
    }
  ],
  "guardrails": {
    "pii": "mask",
    "audit": true,
    "maxCostPerRun": 0.4
  }
}`,
    runCommand: "npx es validate agents.json",
    runOutput: [
      { text: "Validating workspace config...", kind: "dim" },
      { text: "2 agents defined", kind: "info" },
      { text: "Guardrails: pii=mask, audit=on", kind: "info" },
      { text: "Config valid", kind: "ok" },
    ],
  },
];

/* Lightweight regex-based syntax highlighting, good enough for a demo window */

const TS_RE =
  /(\/\/.*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(import|from|export|const|let|var|function|async|await|return|if|else|for|of|in|new|type|interface|extends|try|catch|throw|class|default|null|undefined|true|false)\b|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*(?=\s*\())/g;

const PY_RE =
  /(#.*)|(f?"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(from|import|def|return|if|elif|else|for|in|with|as|class|try|except|raise|lambda|and|or|not|None|True|False|async|await|yield|print|self)\b|(@[\w.]+)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][\w]*(?=\s*\())/g;

const JSON_RE =
  /("(?:[^"\\]|\\.)*")(?=\s*:)|("(?:[^"\\]|\\.)*")|\b(true|false|null)\b|(-?\b\d+(?:\.\d+)?\b)/g;

const TOKEN_CLASSES: Record<DemoLang, string[]> = {
  ts: [
    "text-zinc-500 italic", // comment
    "text-amber-300", // string
    "text-fuchsia-400", // keyword
    "text-emerald-300", // number
    "text-[#dcdcaa]", // function call
  ],
  python: [
    "text-zinc-500 italic",
    "text-amber-300",
    "text-fuchsia-400",
    "text-yellow-300", // decorator
    "text-emerald-300",
    "text-[#dcdcaa]",
  ],
  json: [
    "text-sky-300", // key
    "text-amber-300",
    "text-fuchsia-400",
    "text-emerald-300",
  ],
};

const LANG_RE: Record<DemoLang, RegExp> = {
  ts: TS_RE,
  python: PY_RE,
  json: JSON_RE,
};

export function highlightLine(line: string, lang: DemoLang, keyPrefix: string): ReactNode {
  const classes = TOKEN_CLASSES[lang];
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  for (const m of line.matchAll(LANG_RE[lang])) {
    const idx = m.index ?? 0;
    if (idx > last) {
      out.push(
        <span key={`${keyPrefix}-p${k++}`} className="text-zinc-300">
          {line.slice(last, idx)}
        </span>
      );
    }
    let group = 0;
    for (let g = 1; g < m.length; g++) {
      if (m[g] !== undefined) {
        group = g - 1;
        break;
      }
    }
    out.push(
      <span key={`${keyPrefix}-t${k++}`} className={classes[group]}>
        {m[0]}
      </span>
    );
    last = idx + m[0].length;
  }
  if (last < line.length) {
    out.push(
      <span key={`${keyPrefix}-end`} className="text-zinc-300">
        {line.slice(last)}
      </span>
    );
  }
  return out;
}
