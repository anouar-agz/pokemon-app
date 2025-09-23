"use client";

import { PokemonListItem } from "@/components/pokemonListItem";
import { PokemonAddForm } from "@/components/pokemonAddForm";
import { startTransition, useOptimistic } from "react";
import { toast } from "react-toastify";

export const PokemonListClient = ({
  pokemonList,
  addPokemon,
  removePokemon,
}: {
  pokemonList: string[];
  addPokemon: (pokemon: string) => Promise<void>;
  removePokemon: (pokemon: string) => Promise<void>;
}) => {
  const [optimisticPokemonList, addPokemonOptimistic] = useOptimistic<
    string[],
    string
  >(pokemonList, (currentPokemonList, newPokemon) => [
    newPokemon,
    ...currentPokemonList,
  ]);

  return (
    <div className="space-y-8">
      <PokemonAddForm
        onSubmit={(name) => {
          startTransition(async () => {
            addPokemonOptimistic(name);

            try {
              await addPokemon(name);
            } catch (error) {
              toast.error("Failed to add pokemon");
            }
          });
        }}
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {optimisticPokemonList.map((pokemon: string, index: number) => (
          <PokemonListItem
            key={`${pokemon}-${index}`}
            name={pokemon}
            index={index}
            removePokemon={removePokemon}
          />
        ))}
      </ul>
    </div>
  );
};
