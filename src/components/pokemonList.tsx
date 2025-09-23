import { revalidatePath } from "next/cache";

import { PokemonListItem } from "@/components/pokemonListItem";

export const PokemonList = async () => {
  // Simulate a slow backend so the stream effect is obvious
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const removePokemon = async (pokemonToRemove: string): Promise<void> => {
    "use server";

    POKEMON_LIST = POKEMON_LIST.filter(
      (pokemon) => pokemon !== pokemonToRemove
    );

    revalidatePath("/");
  };

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {POKEMON_LIST.map((pokemon: string, index: number) => (
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

let POKEMON_LIST = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
];
