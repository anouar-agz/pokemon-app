export const metadata = {
  title: "Contact | Pokemon List",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-10 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-10 shadow-[0_40px_120px_-60px_rgba(236,72,153,0.7)] backdrop-blur-lg">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Stay in touch
        </h1>
        <p className="mt-3 text-white/70">
          Have feedback on the streaming demo or ideas for improvements? Drop a
          note—this project thrives on experimentation.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
        <p className="font-medium text-white">Email</p>
        <p className="mt-1">
          <span className="text-white/50">demo@pokedex.dev</span>
        </p>
      </div>

      <form className="grid gap-6 text-sm text-white/80">
        <label className="space-y-2">
          <span className="uppercase tracking-[0.2em] text-white/40">Name</span>
          <input
            className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan-400/80 focus:outline-none focus:ring-1 focus:ring-cyan-400/60"
            placeholder="Ash Ketchum"
          />
        </label>

        <label className="space-y-2">
          <span className="uppercase tracking-[0.2em] text-white/40">
            Message
          </span>
          <textarea
            rows={4}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan-400/80 focus:outline-none focus:ring-1 focus:ring-cyan-400/60"
            placeholder="Share your thoughts..."
          />
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-400/20 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/80 hover:bg-cyan-400/30"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
