import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { getMovement, references } from "@/data/content";
import { SectionHead, StatusBadge } from "@/components/site/Waveform";

export const Route = createFileRoute("/referencias")({
  head: () => ({
    meta: [
      { title: "Fontes e referências — Brasília em Frequência" },
      { name: "description", content: "Artigos, entrevistas, documentários e arquivos que embasam a pesquisa do projeto." },
      { property: "og:title", content: "Fontes e referências — Brasília em Frequência" },
      { property: "og:description", content: "As fontes que embasam a pesquisa do Brasília em Frequência." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-36">
      <SectionHead kicker="Referências" title="Fontes e créditos culturais."
        subtitle="Toda informação marcada como “Verificado” tem fonte. O restante está em pesquisa e será confirmado pela equipe." />
      <div className="overflow-x-auto border border-border">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="label-mono bg-card text-muted-foreground">
            <tr>{["Título", "Autor / instituição", "Data", "Tipo", "Movimento", "Status", "Link"].map((h) => <th key={h} className="p-4 font-normal">{h}</th>)}</tr>
          </thead>
          <tbody>
            {references.map((r, i) => (
              <tr key={i} data-mv={r.movement === "geral" ? "cidade" : r.movement} className="border-t border-border">
                <td className="p-4 font-medium">{r.title}</td>
                <td className="p-4 text-muted-foreground">{r.author}</td>
                <td className="p-4 text-muted-foreground">{r.date ?? "—"}</td>
                <td className="p-4">{r.type}</td>
                <td className="p-4 text-mv">{r.movement === "geral" ? "Geral" : getMovement(r.movement)!.short}</td>
                <td className="p-4"><StatusBadge status={r.status} /></td>
                <td className="p-4">{r.url ? <a href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary">Abrir <ExternalLink className="h-3 w-3" /></a> : <span className="text-muted-foreground">A adicionar</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
