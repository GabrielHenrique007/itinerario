import { createFileRoute } from "@tanstack/react-router";
import { playlists } from "@/data/content";
import { SectionHead } from "@/components/site/Waveform";
import { PlaylistCard } from "@/components/site/PlaylistCard";

export const Route = createFileRoute("/playlists")({
  head: () => ({
    meta: [
      { title: "Playlists — Brasília em Frequência" },
      { name: "description", content: "Ouça a história de Brasília: playlists de rock, rap e forró da capital." },
      { property: "og:title", content: "Playlists — Brasília em Frequência" },
      { property: "og:description", content: "Ouça a história de Brasília: playlists de rock, rap e forró da capital." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-36">
      <SectionHead kicker="Playlists" title="Ouça a história de Brasília." subtitle="Cada movimento tem seu ritmo. Cada música conta uma história." />
      <div className="grid gap-6 md:grid-cols-3">
        {playlists.map((p) => <PlaylistCard key={p.movement} p={p} />)}
      </div>
    </div>
  );
}
