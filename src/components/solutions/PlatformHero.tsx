import Link from "next/link";
import type { ReactNode } from "react";

export default function PlatformHero({
  eyebrow,
  title,
  lede,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  meta?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src="/weast/weast-logo-black.png"
            alt="WEAST by EasternStack.AI"
            className="mx-auto mb-4 h-10 w-auto md:h-12"
          />
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{eyebrow}</p>

          <h1
            className="mt-6 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl"
            style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">{lede}</p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#E31E24] to-[#C4181E] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
            >
              Request a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-transparent px-6 py-3 text-sm font-semibold text-[#1A1A1A] hover:border-[#E31E24] hover:text-[#E31E24] transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Talk to Sales
            </Link>
          </div>

          {meta && <p className="mt-5 text-[13px] text-gray-500">{meta}</p>}
        </div>
      </div>
    </section>
  );
}
