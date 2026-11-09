import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { getMovement, regions } from "@/data/content";
import { SectionHead, StatusBadge } from "@/components/site/Waveform";

export const Route = createFileRoute("/mapa")({
  head: () => ({
    meta: [
      { title: "Mapa sonoro — Brasília em Frequência" },
      { name: "description", content: "Onde a música acontece: explore as regiões do Distrito Federal e seus sons." },
      { property: "og:title", content: "Mapa sonoro — Brasília em Frequência" },
      { property: "og:description", content: "Onde a música acontece: explore as regiões do Distrito Federal e seus sons." },
    ],
  }),
  component: Page,
});

function Page() {
  const [sel, setSel] = useState<string | null>("plano");
  const r = regions.find((x) => x.id === sel);
  const m = r ? getMovement(r.movement) : null;
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-36">
      <SectionHead kicker="Mapa sonoro" title="Onde a música acontece." subtitle="Cada região tem suas histórias, seus artistas e sua própria frequência." />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="grain relative aspect-square overflow-hidden border border-border bg-card sm:aspect-[4/3]">
          {/* Mapa ilustrativo — posições aproximadas, não geográficas */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full text-border" aria-hidden>
            <rect x="6" y="10" width="88" height="78" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1.5 1" />
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={i} x1={6 + i * 11} y1="10" x2={6 + i * 11} y2="88" stroke="currentColor" strokeWidth="0.1" />
            ))}
            <path d="M48 42 Q58 34 68 42 Q58 52 48 42" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <path d="M60 50 q6 6 14 2 q-2 8 -10 8" fill="none" stroke="currentColor" strokeWidth="0.4" />
          </svg>
          <p className="label-mono absolute bottom-3 left-3 text-muted-foreground">Distrito Federal · mapa ilustrativo</p>
          {regions.map((x) => (
            <button key={x.id} data-mv={x.movement} onClick={() => setSel(x.id)}
              className="group absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x.x}%`, top: `${x.y}%` }}
              aria-label={`Abrir ${x.name}`} aria-pressed={sel === x.id}>
              <span className="animate-ping-slow absolute inset-0 rounded-full bg-mv" />
              <span className={`relative block h-4 w-4 rounded-full bg-mv ring-4 ring-background transition ${sel === x.id ? "scale-150" : "group-hover:scale-125"}`} />
              <span className="label-mono absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap">{x.name}</span>
            </button>
          ))}
        </div>

        <aside data-mv={r?.movement} className="border border-border bg-card p-8" aria-live="polite">
          {r && m ? (
            <div key={r.id} className="animate-rise">
              <div className="flex items-start justify-between">
                <span className="label-mono text-mv">{m.name}</span>
                <button onClick={() => setSel(null)} aria-label="Fechar painel"><X className="h-4 w-4" /></button>
              </div>
              <h2 className="text-display mt-3 text-5xl">{r.name}</h2>
              <div className="mt-3"><StatusBadge status={r.status} /></div>
              <img src={m.image} alt="" loading="lazy" width={1280} height={960} className="mt-6 aspect-video w-full object-cover" />
              <p className="mt-6 text-muted-foreground">{r.context}</p>
              <p className="label-mono mt-6 text-muted-foreground">Referências</p>
              <p className="mt-2">{r.references.join(" · ")}</p>
              <Link to="/movimentos/$slug" params={{ slug: m.id }} className="mt-8 inline-block border border-mv px-4 py-2 text-sm text-mv hover:bg-mv hover:text-primary-foreground">
                Conhecer o movimento
              </Link>
            </div>
          ) : (
            <p className="text-muted-foreground">Selecione uma região no mapa.</p>
          )}
        </aside>
      </div>
    </div>
  );
}
