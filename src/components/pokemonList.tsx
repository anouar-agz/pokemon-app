import { revalidatePath } from "next/cache";

import { PokemonListClient } from "./pokemonListClient";

export const PokemonList = async () => {
  // Simulate a slow backend so the stream effect is obvious
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const addPokemon = async (newPokemon: string): Promise<void> => {
    "use server";

    await new Promise((resolve) => setTimeout(resolve, 1500));

    // throw new Error("Failed to add pokemon");

    pokemonList = [newPokemon, ...pokemonList];

    revalidatePath("/");
  };

  const removePokemon = async (pokemonToRemove: string): Promise<void> => {
    "use server";

    await new Promise((resolve) => setTimeout(resolve, 1500));

    pokemonList = pokemonList.filter((pokemon) => pokemon !== pokemonToRemove);

    // throw new Error("Failed to remove pokemon");

    revalidatePath("/");
  };

  return (
    <PokemonListClient
      pokemonList={pokemonList}
      addPokemon={addPokemon}
      removePokemon={removePokemon}
    />
  );
};

let pokemonList = [
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
