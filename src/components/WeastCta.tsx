import Link from "next/link";

export default function WeastCta({ tourHref = "#demo-ide" }: { tourHref?: string }) {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0C] py-20">
      <div className="container-custom relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Bring agentic AI to your enterprise
          </h2>
          <p className="leading-relaxed text-zinc-400 md:text-lg">
            Talk to our team and deploy WEAST on your terms. Same platform, same
            security, wherever your data lives.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-xl font-bold text-white">Deploy on your terms</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">
                Your data stays in the country and in the environment your regulator
                expects, because WEAST runs in your cloud account, your VPC, or your
                own data center.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {["Any public cloud", "Private cloud", "Your VPC", "Hybrid cloud", "Fully on-premise"].map(
                (term) => (
                  <span
                    key={term}
                    className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-200"
                  >
                    {term}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-gradient-to-r from-[#E31E24] to-[#C4181E] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl"
          >
            Book a working session
          </Link>
          <Link
            href={tourHref}
            className="rounded-lg border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
          >
            Try the live tour
          </Link>
        </div>
      </div>
    </section>
  );
}
