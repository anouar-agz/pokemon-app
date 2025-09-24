# Next.js App router + React 19 Demo

## Getting Started

If you don't have Bun, [install](https://bun.com/docs/installation) it using:

```bash
brew install oven-sh/bun/bun # for macOS and Linux
```

Then, do bun install to install dependencies:

```bash
bun install
```

Then run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **React Server Components (RSCs)**: The `PokemonList` component is a server component that fetches data and performs server-side logic.
- **Client Components**: The `PokemonListClient` and `PokemonAddForm` are client components that handle user interactions.
- **Suspense for Streaming**: The `Suspense` component is used in `app/page.tsx` to stream the `PokemonList` component, with `PokemonListSkeleton` as a fallback.
- **Server Actions**: `addPokemon` and `removePokemon` are server actions that mutate data on the server.
- **`useOptimistic` Hook**: The `PokemonListClient` component uses the `useOptimistic` hook to show an optimistic UI while server actions are pending.
- **`startTransition`**: Used to keep the UI responsive during server actions.
- **`revalidatePath`**: The `revalidatePath` function is used to revalidate the page and update the UI after a server action is completed.
- **`useActionState` Hook**: The `PokemonListItem` component uses the `useActionState` hook to handle the pending and error states of the `removePokemon` server action.
- **React Compiler**: The project is configured to use React Compiler in `next.config.ts`, which automatically optimizes component rendering.
