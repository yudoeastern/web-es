export default function UseCaseStory({
  title,
  problem,
  outcome,
  results,
}: {
  title: string;
  problem: string;
  outcome: string;
  results: { stat: string; label: string }[];
}) {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">
            Where it starts
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">The problem</p>
            <p className="mt-3 leading-relaxed text-gray-600">{problem}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">The outcome</p>
            <p className="mt-3 leading-relaxed text-gray-600">{outcome}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {results.map((r) => (
            <div key={r.label} className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-3xl font-extrabold text-[#E31E24]">{r.stat}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{r.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
