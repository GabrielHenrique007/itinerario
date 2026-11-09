import { ExternalLink, Disc3 } from "lucide-react";
import { getMovement, type Playlist } from "@/data/content";
import { StatusBadge, Waveform } from "./Waveform";

export function PlaylistCard({ p }: { p: Playlist }) {
  const m = getMovement(p.movement)!;
  return (
    <article data-mv={p.movement} className="group flex flex-col border border-border bg-card transition-transform duration-300 hover:-translate-y-1">
      <div className="grain relative aspect-square overflow-hidden">
        <img src={m.image} alt={`Capa da playlist ${p.name}`} loading="lazy" width={1280} height={960}
          className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-mv mix-blend-multiply opacity-70" />
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <span className="label-mono">Playlist · {m.short}</span>
          <div>
            <Waveform bars={20} className="mb-3 h-8 text-foreground" />
            <h3 className="text-display text-4xl">{p.name}</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-muted-foreground">{p.description}</p>
        <ol className="my-5 space-y-3">
          {p.tracks.map((t, i) => (
            <li key={i} className="flex items-center gap-3 text-sm">
              <span className="label-mono w-5 text-mv">{String(i + 1).padStart(2, "0")}</span>
              <Disc3 className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="flex-1">
                <span className="block font-medium">{t.title}</span>
                <span className="block text-xs text-muted-foreground">{t.artist}</span>
              </span>
              {t.status !== "verificado" && <StatusBadge status="em-pesquisa" />}
            </li>
          ))}
        </ol>
        <div className="mt-auto flex flex-wrap gap-2">
          {p.links.map((l) => (
            <a key={l.label} href={l.url} target={l.status === "verificado" ? "_blank" : undefined} rel="noreferrer"
              className="inline-flex items-center gap-2 border border-mv px-3 py-2 text-sm font-medium text-mv transition-colors hover:bg-mv hover:text-primary-foreground">
              Ouvir no {l.label} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
        {p.links.some((l) => l.status === "placeholder") && (
          <p className="mt-3"><StatusBadge status="placeholder" /></p>
        )}
      </div>
    </article>
  );
}
