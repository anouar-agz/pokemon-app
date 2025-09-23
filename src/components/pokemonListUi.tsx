"use client";

import { PokemonListItem } from "@/components/pokemonListItem";

export const PokemonListUi = ({
  pokemonList,
  removePokemon,
}: {
  pokemonList: string[];
  removePokemon: (pokemon: string) => void;
}) => {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pokemonList.map((pokemon: string, index: number) => (
        <PokemonListItem
          key={pokemon}
          name={pokemon}
          index={index}
          removePokemon={removePokemon}
        />
      ))}
    </ul>
  );
};
