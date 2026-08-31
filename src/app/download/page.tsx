import type { Metadata } from "next";
import Link from "next/link";
import StudioHero from "@/components/showcase/StudioHero";
import AgentOsDemo from "@/components/showcase/AgentOsDemo";

export const metadata: Metadata = {
  title: "EasternStack AgentOS",
  description:
    "EasternStack AgentOS, the agentic operating system for enterprise AI. Explore a live, fully interactive replica of the platform in your browser.",
};

export default function DownloadPage() {
  return (
    <div className="bg-[#0A0A0C] text-white">
      <StudioHero />

      {/* Interactive product replica */}
      <section id="demo-ide" className="section-padding scroll-mt-24 border-t border-white/5">
        <div className="container-custom">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#E31E24]">
              Live product tour
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Explore AgentOS, no account needed
            </h2>
            <p className="text-zinc-400">
              This is a working replica of the real platform, not a video. Click through the
              sidebar, open a document, chat with an agent, wake a container. Every screen runs
              in your browser with zero backend.
            </p>
          </div>
          <div className="mx-auto max-w-7xl">
            <AgentOsDemo />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5 py-20">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E31E24]/10 blur-[120px]" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Bring agentic AI to your enterprise
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-zinc-400">
            Talk to our team about deployment options, model choice, and security, from VPC to
            fully on-premise.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-3.5 text-base">
              Contact Sales
            </Link>
            <Link
              href="/solutions"
              className="rounded-lg border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
