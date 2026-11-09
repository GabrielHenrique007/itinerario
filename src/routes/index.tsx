import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero-brasilia.jpg";
import { movements } from "@/data/content";
import { Waveform } from "@/components/site/Waveform";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brasília em Frequência — a trilha sonora da capital" },
      { name: "description", content: "Rock, rap e forró: descubra os sons que formam a identidade musical de Brasília." },
      { property: "og:title", content: "Brasília em Frequência — a trilha sonora da capital" },
      { property: "og:description", content: "Rock, rap e forró: descubra os sons que formam a identidade musical de Brasília." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="Silhueta do Congresso Nacional ao pôr do sol" width={1920} height={1088}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="overlay-hero absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40">
          <Waveform bars={48} className="mb-8 h-14 text-primary animate-rise" />
          <h1 className="text-display animate-rise text-6xl sm:text-8xl lg:text-[9rem]">
            Brasília tem uma história.
            <br />
            <span className="text-primary">E ela tem trilha sonora.</span>
          </h1>
          <p className="animate-rise mt-8 max-w-2xl text-lg text-muted-foreground" style={{ animationDelay: "150ms" }}>
            Do rock que conquistou o Brasil ao rap que ecoa nas periferias, dos acordes do forró às histórias que atravessam
            gerações. Descubra os sons que formam a identidade musical da capital.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "300ms" }}>
            <Link to="/movimentos" className="inline-flex items-center gap-2 bg-primary px-7 py-4 font-bold uppercase tracking-wider text-primary-foreground transition hover:brightness-110">
              Explorar Brasília <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/descubra" className="inline-flex items-center gap-2 border border-foreground px-7 py-4 font-bold uppercase tracking-wider transition hover:bg-foreground hover:text-background">
              Descubra seu som <Sparkles className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <a href="#intro" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground" aria-label="Rolar para baixo">
          <ArrowDown />
        </a>
      </section>

      <section id="intro" className="mx-auto max-w-7xl px-5 py-28">
        <p className="label-mono mb-6 text-primary">Introdução</p>
        <h2 className="text-display max-w-5xl text-5xl sm:text-7xl">
          Uma cidade. Muitos territórios. <span className="text-accent">Infinitas frequências.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          A fama do rock dos anos 1980 é só o começo. Nas cidades-satélite, o rap transformou a periferia em voz, e o forró
          trazido pelos candangos virou memória viva. Brasília soa plural.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-px bg-border px-0 md:grid-cols-3">
        {movements.map((m) => (
          <Link key={m.id} to="/movimentos/$slug" params={{ slug: m.id }} data-mv={m.id}
            className="group grain relative block aspect-[3/4] overflow-hidden bg-background">
            <img src={m.image} alt={m.name} loading="lazy" width={1280} height={960}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="overlay-card absolute inset-0" />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <span className="text-display text-6xl text-mv">{m.number}</span>
              <div>
                <h3 className="text-display text-4xl">{m.name}</h3>
                <p className="mt-2 text-muted-foreground">{m.tagline}</p>
                <span className="label-mono mt-4 inline-flex items-center gap-2 text-mv">Explorar <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" /></span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-28 md:grid-cols-3">
        {[
          { to: "/linha-do-tempo", k: "Linha do tempo", t: "Uma cidade, muitas histórias." },
          { to: "/mapa", k: "Mapa sonoro", t: "Onde a música acontece." },
          { to: "/playlists", k: "Playlists", t: "Ouça a história de Brasília." },
        ].map((c) => (
          <Link key={c.to} to={c.to} className="group border-t border-foreground pt-6">
            <p className="label-mono text-primary">{c.k}</p>
            <p className="text-display mt-3 text-3xl transition group-hover:text-primary">{c.t}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
