import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { movements } from "@/data/content";
import { SectionHead } from "@/components/site/Waveform";

export const Route = createFileRoute("/movimentos/")({
  head: () => ({
    meta: [
      { title: "Movimentos musicais — Brasília em Frequência" },
      { name: "description", content: "Rock de Brasília, Rap da Ceilândia e Forró das cidades-satélite." },
      { property: "og:title", content: "Movimentos musicais — Brasília em Frequência" },
      { property: "og:description", content: "Rock de Brasília, Rap da Ceilândia e Forró das cidades-satélite." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-36">
      <SectionHead kicker="Movimentos" title="Três frequências, uma capital." subtitle="Cada movimento tem sua paisagem, sua história e seu som." />
      <div className="space-y-px bg-border">
        {movements.map((m, i) => (
          <Link key={m.id} to="/movimentos/$slug" params={{ slug: m.id }} data-mv={m.id}
            className={`group grid items-center gap-8 bg-background py-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="grain aspect-[4/3] overflow-hidden">
              <img src={m.image} alt={m.name} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div>
              <span className="text-display text-7xl text-mv">{m.number}</span>
              <h2 className="text-display mt-2 text-5xl sm:text-6xl">{m.name}</h2>
              <p className="mt-4 max-w-md text-muted-foreground">{m.intro}</p>
              <span className="label-mono mt-6 inline-flex items-center gap-2 text-mv">Entrar no movimento <ArrowRight className="h-3 w-3" /></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
