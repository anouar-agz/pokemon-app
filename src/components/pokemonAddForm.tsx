"use client";

import { FormEvent } from "react";

import { formatPokemonName } from "@/utils/formatPokemonName";

type PokemonAddFormProps = {
  onSubmit: (pokemon: string) => void;
  isSubmitting?: boolean;
};

export const PokemonAddForm = ({
  onSubmit,
  isSubmitting = false,
}: PokemonAddFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const rawName = (formData.get("pokemon") as string)?.trim();

    if (!rawName) {
      return;
    }

    const formattedName = rawName.toLowerCase();

    onSubmit(formattedName);

    event.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-[2.5rem] border border-white/10 bg-white/5 p-6 text-sm text-white/80 backdrop-blur-lg sm:grid-cols-[minmax(0,1fr)_auto]"
    >
      <div className="sm:pr-4">
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">
            Add Pokémon
          </span>

          <input
            name="pokemon"
            placeholder="Enter a Pokémon name"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-base text-white placeholder:text-white/30 focus:border-cyan-400/80 focus:outline-none focus:ring-1 focus:ring-cyan-400/60"
          />
        </label>

        <p className="mt-2 text-xs text-white/40">
          Example: {formatPokemonName("psyduck")} or{" "}
          {formatPokemonName("mr-mime")}.
        </p>
      </div>

      <button
        type="submit"
        className="self-end rounded-full border border-cyan-400/50 bg-cyan-400/20 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/80 hover:bg-cyan-400/30 disabled:cursor-not-allowed disabled:border-white/20 disabled:bg-white/10"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding…" : "Add to list"}
      </button>
    </form>
  );
};
