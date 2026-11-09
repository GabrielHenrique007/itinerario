import { createFileRoute, Link } from "@tanstack/react-router";
import { projectInfo } from "@/data/content";
import { SectionHead } from "@/components/site/Waveform";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o projeto — Brasília em Frequência" },
      { name: "description", content: "Projeto de extensão universitária dedicado à memória musical de Brasília e do Distrito Federal." },
      { property: "og:title", content: "Sobre o projeto — Brasília em Frequência" },
      { property: "og:description", content: "Projeto de extensão universitária dedicado à memória musical de Brasília." },
    ],
  }),
  component: Page,
});

const objectives = [
  "Preservar a memória musical local.",
  "Promover artistas e movimentos culturais regionais.",
  "Valorizar a diversidade cultural do Distrito Federal.",
  "Incentivar novas gerações a conhecer a história musical local.",
  "Tornar informações culturais e históricas acessíveis.",
  "Conectar comunidades por meio da música.",
];

function Page() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-36">
      <SectionHead kicker="Sobre" title="Música também é memória."
        subtitle="Brasília em Frequência é um projeto de extensão universitária dedicado a reconhecer, preservar e divulgar o patrimônio musical de Brasília e do Distrito Federal." />
      <div className="grid gap-16 md:grid-cols-2">
        <section>
          <p className="label-mono mb-6 text-primary">Objetivos</p>
          <ol className="space-y-5">
            {objectives.map((o, i) => (
              <li key={o} className="flex gap-5 border-b border-border pb-5">
                <span className="text-display text-3xl text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg">{o}</span>
              </li>
            ))}
          </ol>
        </section>
        <section>
          <p className="label-mono mb-6 text-primary">Ficha do projeto</p>
          <dl className="border border-border bg-card">
            {projectInfo.map((p) => (
              <div key={p.label} className="grid grid-cols-[1fr_1.4fr] gap-4 border-b border-border p-5 last:border-0">
                <dt className="label-mono text-muted-foreground">{p.label}</dt>
                <dd className={p.value.startsWith("[") ? "text-muted-foreground italic" : ""}>{p.value}</dd>
              </div>
            ))}
          </dl>
          <Link to="/referencias" className="mt-8 inline-block border-b border-foreground pb-1">Ver fontes e referências →</Link>
        </section>
      </div>
    </div>
  );
}
