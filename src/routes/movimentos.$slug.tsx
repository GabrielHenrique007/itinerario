import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getMovement, movements, playlists } from "@/data/content";
import { StatusBadge, Waveform } from "@/components/site/Waveform";
import { PlaylistCard } from "@/components/site/PlaylistCard";

export const Route = createFileRoute("/movimentos/$slug")({
  loader: ({ params }) => {
    const m = getMovement(params.slug);
    if (!m) throw notFound();
    return { id: m.id };
  },
  head: ({ loaderData }) => {
    const m = loaderData ? getMovement(loaderData.id) : undefined;
    const title = m ? `${m.name} — Brasília em Frequência` : "Movimento — Brasília em Frequência";
    const desc = m?.intro ?? "Movimento musical de Brasília.";
    return { meta: [{ title }, { name: "description", content: desc }, { property: "og:title", content: title }, { property: "og:description", content: desc }] };
  },
  component: Page,
});

function Page() {
  const { id } = Route.useLoaderData();
  const m = getMovement(id)!;
  const p = playlists.find((x) => x.movement === id)!;
  const idx = movements.findIndex((x) => x.id === id);
  const next = movements[(idx + 1) % movements.length]!;
  return (
    <div data-mv={id}>
      <section className="grain relative flex min-h-[85vh] items-end overflow-hidden">
        <img src={m.image} alt={m.name} width={1280} height={960} className="absolute inset-0 h-full w-full object-cover" />
        <div className="overlay-hero absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40">
          <Link to="/movimentos" className="label-mono mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3 w-3" /> Movimentos</Link>
          <p className="text-display text-8xl text-mv">{m.number}</p>
          <h1 className="text-display text-6xl sm:text-8xl lg:text-9xl">{m.name}</h1>
          <p className="mt-4 text-2xl text-mv-2">{m.tagline}</p>
          <Waveform bars={40} className="mt-8 h-12 text-mv" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="max-w-3xl text-2xl leading-relaxed">{m.intro}</p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-px bg-border md:grid-cols-2">
        {m.sections.map((s, i) => (
          <article key={s.title} className="bg-background p-8 md:p-12">
            <div className="mb-4 flex items-center justify-between">
              <span className="label-mono text-mv">{String(i + 1).padStart(2, "0")}</span>
              <StatusBadge status={s.status} />
            </div>
            <h2 className="text-display text-4xl">{s.title}</h2>
            <p className="mt-4 text-muted-foreground">{s.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="label-mono mb-6 text-mv">Vozes e artistas</p>
        <ul className="divide-y divide-border border-y border-border">
          {m.artists.map((a) => (
            <li key={a.name} className="flex flex-wrap items-center justify-between gap-4 py-6">
              <span className="text-display text-3xl sm:text-5xl">{a.name}</span>
              <span className="flex items-center gap-4 text-sm text-muted-foreground">{a.note} <StatusBadge status={a.status} /></span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-7xl items-start gap-10 px-5 pb-24 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="label-mono mb-4 text-mv">Playlist do movimento</p>
          <h2 className="text-display text-5xl">Aperte o play na história.</h2>
          <Link to="/movimentos/$slug" params={{ slug: next.id }} className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-1 font-medium">
            Próximo movimento: {next.name} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <PlaylistCard p={p} />
      </section>
    </div>
  );
}
