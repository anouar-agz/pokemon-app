import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden shrink-0 border-r border-white/10 bg-slate-900/70 px-8 py-12 shadow-2xl backdrop-blur-sm md:flex md:w-72">
      <div className="flex min-h-full w-full flex-col justify-between">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/20 text-lg font-semibold text-cyan-300 shadow-inner shadow-cyan-500/20">
              Pk
            </span>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Next.js Demo
              </p>
              <p className="text-xl font-semibold text-white">Pokédex</p>
            </div>
          </div>

          <nav className="space-y-2">
            <SidebarLink href="/" label="Home" />
            <SidebarLink href="/about" label="About" />
            <SidebarLink href="/contact" label="Contact" />
          </nav>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
          <p className="font-medium text-white">Tip</p>
          <p>
            Explore the list to discover the first 20 Pokémon from the PokéAPI.
          </p>
        </div>
      </div>
    </aside>
  );
}

type SidebarLinkProps = {
  href: string;
  label: string;
};

const SidebarLink = ({ href, label }: SidebarLinkProps) => (
  <Link
    href={href}
    className="block rounded-2xl border border-transparent bg-white/5 px-5 py-3 text-sm font-medium text-white/80 transition hover:-translate-x-1 hover:border-cyan-400/40 hover:bg-cyan-400/15 hover:text-white"
  >
    {label}
  </Link>
);
