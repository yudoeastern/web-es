"use client";

export default function StudioHero() {
  const scrollToDemo = () => {
    document.getElementById("demo-ide")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#0A0A0C] py-24 md:py-32">
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

      <div className="container-custom relative z-10 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-[#E31E24]" />
          <span className="text-xs font-semibold text-zinc-300">
            Introducing EasternStack AgentOS v0.1.0
          </span>
        </div>

        <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
          The agentic operating system for{" "}
          <span className="gradient-text">enterprise AI</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base text-zinc-400 md:text-lg">
          Documents, agents, and runtime control in one workspace. Assign a task and watch
          your agents think, plan, and delegate, right in front of you.
        </p>

        <div className="flex justify-center">
          <button onClick={scrollToDemo} className="btn-primary flex items-center gap-2 px-8 py-3.5 text-base">
            See it in action
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-5-5m5 5l5-5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
