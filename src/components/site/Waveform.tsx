import { cn } from "@/lib/utils";

export function Waveform({ bars = 32, className }: { bars?: number; className?: string }) {
  return (
    <div className={cn("flex h-10 items-end gap-[3px]", className)} aria-hidden>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="wave-bar w-[3px] rounded-full bg-current"
          style={{ height: `${30 + ((i * 37) % 70)}%`, animationDelay: `${(i * 83) % 1100}ms` }}
        />
      ))}
    </div>
  );
}

export function StatusBadge({ status }: { status: "verificado" | "em-pesquisa" | "placeholder" }) {
  const map = {
    verificado: ["Verificado", "border-mv/60 text-mv"],
    "em-pesquisa": ["Em pesquisa", "border-border text-muted-foreground"],
    placeholder: ["Link provisório", "border-border text-muted-foreground"],
  } as const;
  const [label, cls] = map[status];
  return <span className={cn("label-mono inline-block border px-2 py-0.5 text-[0.6rem]", cls)}>{label}</span>;
}

export function SectionHead({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <header className="mb-12 max-w-4xl">
      <p className="label-mono mb-4 text-primary">{kicker}</p>
      <h1 className="text-display text-5xl sm:text-7xl md:text-8xl">{title}</h1>
      {subtitle && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
    </header>
  );
}
