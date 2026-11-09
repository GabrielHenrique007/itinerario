import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const nav = [
  { to: "/", label: "Início" },
  { to: "/movimentos", label: "Movimentos" },
  { to: "/linha-do-tempo", label: "Linha do tempo" },
  { to: "/playlists", label: "Playlists" },
  { to: "/mapa", label: "Mapa sonoro" },
  { to: "/descubra", label: "Descubra seu som" },
  { to: "/sobre", label: "Sobre" },
] as const;

export function Header() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setCompact(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        compact ? "border-b border-border bg-background/90 py-3 backdrop-blur" : "py-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-6 items-end gap-[2px] text-primary" aria-hidden>
            {[60, 100, 40, 80].map((h, i) => (
              <span key={i} className="wave-bar w-[3px] bg-current" style={{ height: `${h}%`, animationDelay: `${i * 150}ms` }} />
            ))}
          </span>
          <span className="text-display text-lg tracking-wide">Brasília em Frequência</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {nav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-6 lg:hidden" aria-label="Menu móvel">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-display block py-2 text-3xl">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
