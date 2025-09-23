import { formatPokemonName } from "@/utils/formatPokemonName";

export const PokemonListItem = ({
  name,
  index,
}: {
  name: string;
  index: number;
}) => {
  return (
    <li
      key={name}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-400/10"
    >
      <span className="absolute -top-10 right-4 text-7xl font-black text-white/5 transition group-hover:-top-4 group-hover:text-cyan-200/10">
        {String(index + 1).padStart(2, "0")}
      </span>

      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
        Pokémon
      </p>
      <p className="mt-4 text-xl font-semibold text-white">
        {formatPokemonName(name)}
      </p>
      <p className="mt-2 text-sm text-white/60">
        {`Entry #${index + 1} in this demo list.`}
      </p>
    </li>
  );
};
