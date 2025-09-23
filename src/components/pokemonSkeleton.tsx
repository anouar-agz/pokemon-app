export const PokemonListSkeleton = () => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 20 }).map((_, index) => (
      <div
        key={index}
        className="h-34 animate-pulse rounded-2xl border border-white/5 bg-white/5"
      />
    ))}
  </div>
);
