import type { ReactNode } from "react";

const HIGHLIGHTS = [
  "Agents, approvals, and full run traces",
  "Model control per workspace",
  "Tenant boundaries by design",
  "Cost visibility on every run",
];

export default function StudioHero({ children }: { children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#2A2A31] via-[#1A1A1F] to-[#0A0A0C] pt-16 pb-14 md:pt-24 md:pb-16">
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
        {/* Hero copy */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8">
            <img
              src="/weast/weast-logo.png"
              alt="WEAST by EasternStack.AI"
              className="mx-auto h-16 w-auto md:h-20"
            />
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-6xl">
            Where <span className="gradient-text">enterprise AI</span> becomes
            real work
          </h1>

          <p className="text-base text-zinc-400 md:text-lg">
            Build, run, and govern AI workflows across your people, systems, and
            data.
          </p>
        </div>

        {/* Highlight cards, same width as the product tour below */}
        <ul className="mt-10 grid grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-sm leading-relaxed text-zinc-200 md:text-[15px]">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E31E24]/40 bg-[#E31E24]/10 px-5 py-2.5">
            <svg className="h-4 w-4 shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm font-semibold text-zinc-200">
              Live product tour: explore <span className="text-white">WEAST</span> right
              here, no account needed. Every screen runs in your browser.
            </p>
          </div>
        </div>

        {/* Product tour */}
        <div id="demo-ide" className="scroll-mt-24 mt-12 md:mt-14">
          {children}
        </div>
      </div>
    </section>
  );
}
