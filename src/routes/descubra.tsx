import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw, Share2 } from "lucide-react";
import { toast } from "sonner";
import { quiz, scoreQuiz } from "@/lib/quiz";
import { getMovement, playlists } from "@/data/content";
import { Waveform } from "@/components/site/Waveform";
import { PlaylistCard } from "@/components/site/PlaylistCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/descubra")({
  head: () => ({
    meta: [
      { title: "Descubra seu som — Brasília em Frequência" },
      { name: "description", content: "Qual é a sua frequência? Responda e descubra qual movimento musical de Brasília combina com você." },
      { property: "og:title", content: "Qual é a sua frequência? — Brasília em Frequência" },
      { property: "og:description", content: "Descubra qual movimento musical de Brasília combina com você." },
    ],
  }),
  component: Page,
});

function Page() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<(number | null)[]>(() => quiz.map(() => null));
  const done = step >= quiz.length;
  const restart = () => { setAnswers(quiz.map(() => null)); setStep(-1); };

  if (step === -1) {
    return (
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-5 pt-28 pb-16">
        <Waveform bars={48} className="mb-8 h-16 text-accent" />
        <p className="label-mono text-primary">Descubra seu som</p>
        <h1 className="text-display mt-4 text-6xl sm:text-8xl lg:text-9xl">Qual é a sua frequência?</h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">Responda algumas perguntas e descubra qual movimento musical de Brasília combina com você.</p>
        <button onClick={() => setStep(0)} className="mt-10 inline-flex w-fit items-center gap-2 bg-primary px-8 py-4 font-bold uppercase tracking-wider text-primary-foreground hover:brightness-110">
          Começar <ArrowRight className="h-4 w-4" />
        </button>
      </section>
    );
  }

  if (done) return <Result answers={answers} onRestart={restart} />;

  const q = quiz[step];
  const chosen = answers[step];
  return (
    <section className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-5 pt-28 pb-16">
      <div className="mb-10">
        <div className="mb-3 flex justify-between label-mono text-muted-foreground">
          <span>Pergunta {step + 1} de {quiz.length}</span>
          <span>{Math.round(((step + 1) / quiz.length) * 100)}%</span>
        </div>
        <div className="h-1 bg-muted" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={quiz.length}>
          <div className="h-full bg-primary transition-all duration-500" style={{ width: `${((step + 1) / quiz.length) * 100}%` }} />
        </div>
      </div>
      <div key={step} className="animate-rise">
        <h2 className="text-display text-4xl sm:text-6xl">{q.question}</h2>
        <div className="mt-10 grid gap-3">
          {q.options.map((o, i) => (
            <button key={o.label} onClick={() => setAnswers((a) => a.map((v, j) => (j === step ? i : v)))}
              aria-pressed={chosen === i}
              className={cn("flex items-center gap-4 border p-5 text-left text-lg transition",
                chosen === i ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground")}>
              <span className="label-mono">{String.fromCharCode(65 + i)}</span>{o.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-between">
        <button onClick={() => setStep(step - 1)} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </button>
        <button disabled={chosen == null} onClick={() => setStep(step + 1)}
          className="inline-flex items-center gap-2 bg-foreground px-6 py-3 font-bold uppercase text-background disabled:opacity-30">
          {step === quiz.length - 1 ? "Ver resultado" : "Próxima"} <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

function Result({ answers, onRestart }: { answers: (number | null)[]; onRestart: () => void }) {
  const { winner, totals } = scoreQuiz(answers);
  const m = getMovement(winner)!;
  const p = playlists.find((x) => x.movement === winner)!;
  const max = Math.max(...Object.values(totals), 1);

  const share = async () => {
    const text = `Minha frequência é ${m.name}! Descubra a sua no Brasília em Frequência.`;
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: "Brasília em Frequência", text, url });
      else { await navigator.clipboard.writeText(`${text} ${url}`); toast.success("Resultado copiado!"); }
    } catch { /* compartilhamento cancelado */ }
  };

  return (
    <div data-mv={winner}>
      <section className="grain relative flex min-h-screen items-end overflow-hidden">
        <img src={m.image} alt={m.name} width={1280} height={960} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-mv mix-blend-multiply opacity-60" />
        <div className="overlay-hero absolute inset-0" />
        <div className="animate-rise relative mx-auto w-full max-w-6xl px-5 pb-20 pt-36">
          <p className="label-mono text-mv-2">Sua frequência é</p>
          <h1 className="text-display mt-4 text-7xl text-mv sm:text-9xl">{m.name}</h1>
          <p className="mt-4 text-2xl">{m.tagline}</p>
          <p className="mt-6 max-w-2xl text-muted-foreground">{m.intro}</p>
          <div className="mt-8 max-w-md space-y-2">
            {(["rock", "rap", "forro"] as const).map((id) => (
              <div key={id} data-mv={id} className="flex items-center gap-3">
                <span className="label-mono w-14">{getMovement(id)!.short}</span>
                <div className="h-2 flex-1 bg-muted"><div className="h-full bg-mv transition-all duration-700" style={{ width: `${(totals[id] / max) * 100}%` }} /></div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/movimentos/$slug" params={{ slug: winner }} className="inline-flex items-center gap-2 bg-mv px-6 py-3 font-bold uppercase text-primary-foreground">
              Explorar o movimento <ArrowRight className="h-4 w-4" />
            </Link>
            <button onClick={share} className="inline-flex items-center gap-2 border border-foreground px-6 py-3 font-bold uppercase">
              <Share2 className="h-4 w-4" /> Compartilhar
            </button>
            <button onClick={onRestart} className="inline-flex items-center gap-2 px-6 py-3 font-bold uppercase text-muted-foreground hover:text-foreground">
              <RotateCcw className="h-4 w-4" /> Refazer
            </button>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="label-mono mb-4 text-mv">Artistas recomendados</p>
          <ul className="space-y-3">
            {m.artists.map((a) => <li key={a.name} className="text-display text-4xl">{a.name}</li>)}
          </ul>
        </div>
        <PlaylistCard p={p} />
      </section>
    </div>
  );
}
