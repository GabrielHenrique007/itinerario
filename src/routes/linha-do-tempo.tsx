import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { getMovement, timeline } from "@/data/content";
import { SectionHead, StatusBadge } from "@/components/site/Waveform";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/linha-do-tempo")({
  head: () => ({
    meta: [
      { title: "Linha do tempo — Brasília em Frequência" },
      { name: "description", content: "Explore os momentos que ajudaram a construir a identidade musical de Brasília." },
      { property: "og:title", content: "Linha do tempo — Brasília em Frequência" },
      { property: "og:description", content: "Explore os momentos que ajudaram a construir a identidade musical de Brasília." },
    ],
  }),
  component: Page,
});

const decades = ["Todas", "1960", "1970", "1980", "1990", "2000+"];
const mvFilters = [
  { id: "todos", label: "Todos" },
  { id: "rock", label: "Rock" },
  { id: "rap", label: "Rap" },
  { id: "forro", label: "Forró" },
];

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} aria-pressed={active}
      className={cn("border px-4 py-2 text-sm transition-colors", active ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground")}>
      {children}
    </button>
  );
}

function Page() {
  const [decade, setDecade] = useState("Todas");
  const [mv, setMv] = useState("todos");
  const items = useMemo(
    () => timeline.filter((e) => (decade === "Todas" || e.decade === decade) && (mv === "todos" || e.movement === mv)),
    [decade, mv],
  );
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-36">
      <SectionHead kicker="Linha do tempo" title="Uma cidade, muitas histórias." subtitle="Explore os momentos que ajudaram a construir a identidade musical de Brasília." />
      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Filtrar por década">
        {decades.map((d) => <Chip key={d} active={decade === d} onClick={() => setDecade(d)}>{d}</Chip>)}
      </div>
      <div className="mb-14 flex flex-wrap gap-2" role="group" aria-label="Filtrar por movimento">
        {mvFilters.map((f) => <Chip key={f.id} active={mv === f.id} onClick={() => setMv(f.id)}>{f.label}</Chip>)}
      </div>

      <ol key={decade + mv} className="relative border-l border-border pl-8 md:pl-12">
        {items.length === 0 && <p className="text-muted-foreground">Nenhum evento para esse filtro ainda.</p>}
        {items.map((e, i) => {
          const m = e.movement === "cidade" ? null : getMovement(e.movement);
          return (
            <li key={e.id} data-mv={e.movement} className="animate-rise relative mb-14" style={{ animationDelay: `${i * 70}ms` }}>
              <span className="absolute -left-[calc(2rem+6px)] top-2 h-3 w-3 rounded-full bg-mv md:-left-[calc(3rem+6px)]" />
              <div className="grid gap-6 md:grid-cols-[1fr_220px]">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="label-mono text-mv">{e.date}</span>
                    <span className="label-mono text-muted-foreground">{m ? m.short : "Cidade"}</span>
                    <StatusBadge status={e.status} />
                  </div>
                  <h2 className="text-display text-3xl sm:text-5xl">{e.title}</h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground">{e.description}</p>
                  {e.artists && <p className="mt-3 text-sm">Artistas: <span className="text-mv">{e.artists.join(" · ")}</span></p>}
                </div>
                {m && <img src={m.image} alt="" loading="lazy" width={1280} height={960} className="hidden aspect-[4/3] w-full object-cover grayscale md:block" />}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
