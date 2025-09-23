export const metadata = {
  title: "About | Pokemon List",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-10 shadow-[0_40px_120px_-60px_rgba(59,130,246,0.65)] backdrop-blur-lg">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">
          About
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Why this demo?</h1>
      </div>

      <p className="text-base text-white/70">
        This playground showcases how React 19 server components stream from the
        server to the client using Next.js 15. The PokéAPI is intentionally
        fetched with a delay so you can watch the list animate in as the data
        becomes available.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
          <p className="text-xs uppercase tracking-wide text-white/40">Stack</p>
          <p className="mt-2 text-lg font-semibold text-white">Next.js 15</p>
          <p className="mt-2 text-sm">
            App Router, server components, and Tailwind styling for quick
            iteration.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
          <p className="text-xs uppercase tracking-wide text-white/40">Data</p>
          <p className="mt-2 text-lg font-semibold text-white">PokéAPI</p>
          <p className="mt-2 text-sm">
            A free REST API that delivers classic Pokémon entries with generous
            rate limits.
          </p>
        </div>
      </div>
    </div>
  );
}
