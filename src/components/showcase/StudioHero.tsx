import type { ReactNode } from "react";

export default function StudioHero({ children }: { children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0C] pt-20 pb-16 md:pt-28 md:pb-20">
      {/* Red glow orbs */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#E31E24]/15 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-[#E31E24]/10 blur-[120px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#E31E24 1px, transparent 1px), linear-gradient(90deg, #E31E24 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
              <span className="live-dot h-2.5 w-2.5 rounded-full bg-[#E31E24]" />
              <span className="text-lg font-bold tracking-wide text-white md:text-xl">
                WEAST <span className="font-medium text-zinc-400">by EasternStack</span>
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Where <span className="gradient-text">enterprise AI</span> becomes
              real work
            </h1>

            <p className="mb-8 text-base text-zinc-400 md:text-lg">
              Build, run, and govern AI workflows across your people, systems, and
              data.
            </p>

            <ul className="mb-8 space-y-3">
              {[
                "Agents, approvals, and full run traces",
                "Model control per workspace",
                "Tenant boundaries by design",
                "Cost visibility on every run",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-300 md:text-[15px]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm font-semibold text-zinc-300">
              Live product tour: explore <span className="text-white">WEAST</span> right
              here, no account needed. Every screen runs in your browser.
            </p>
          </div>

          <div id="demo-ide" className="scroll-mt-24 lg:col-span-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
