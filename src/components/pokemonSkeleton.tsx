export const PokemonListSkeleton = () => (
  <div className="flex flex-col gap-8">
    <div className="h-36 w-full animate-pulse rounded-2xl border border-white/5 bg-white/5" />

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="h-34 animate-pulse rounded-2xl border border-white/5 bg-white/5"
        />
      ))}
    </div>
  </div>
);
