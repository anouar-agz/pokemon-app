// Server Component by default (no "use client")

import { PokemonListItem } from "@/components/pokemonListItem";

export const PokemonList = async () => {
  // Simulate a slow backend so the stream effect is obvious
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const pokemonList = await fetch("https://pokeapi.co/api/v2/pokemon", {
    cache: "no-store",
  }).then((response) => response.json());

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pokemonList.results.map((pokemon: { name: string }, index: number) => (
        <PokemonListItem key={pokemon.name} name={pokemon.name} index={index} />
      ))}
    </ul>
  );
};
