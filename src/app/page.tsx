import { Suspense } from "react";

import { PokemonList } from "@/components/pokemonList";
import { PokemonListSkeleton } from "@/components/pokemonSkeleton";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col">
      <section className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-10 shadow-[0_40px_120px_-60px_rgba(14,116,144,0.75)] backdrop-blur-lg">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/90">
          Realtime Demo
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Discover the opening roster of the Pokédex
        </h1>
      </section>

      <section className="relative mt-12">
        <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/30 via-transparent to-blue-500/30 blur-3xl" />

        <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/60 p-8 shadow-[0_30px_120px_-60px_rgba(129,140,248,0.85)] backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Pokémon
              </h2>

              <p className="text-sm text-white/60">
                First page of canonical entries straight from the PokéAPI.
              </p>
            </div>

            <span className="hidden rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-200 md:block">
              Streaming data
            </span>
          </div>

          <Suspense fallback={<PokemonListSkeleton />}>
            <PokemonList />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
