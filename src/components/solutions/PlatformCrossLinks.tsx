import Link from "next/link";
import { PLATFORMS } from "./platforms";

export default function PlatformCrossLinks({ current }: { current: string }) {
  const others = PLATFORMS.filter((p) => p.slug !== current);

  return (
    <section className="border-t border-gray-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
            The WEAST family
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-3xl">
            Explore the other WEAST platforms
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={`/solutions/${p.slug}`}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#E31E24]/40 hover:shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
                {p.index} · {p.tagline}
              </p>
              <h3 className="mt-2 text-xl font-bold text-[#1A1A1A] group-hover:text-[#E31E24] transition-colors">
                {p.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#E31E24]">
                Explore {p.name}
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Looking for the full picture?{" "}
          <Link href="/solutions" className="font-semibold text-[#E31E24] hover:underline">
            Back to all WEAST platforms
          </Link>
        </p>
      </div>
    </section>
  );
}
