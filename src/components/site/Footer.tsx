import { Link } from "@tanstack/react-router";
import { nav } from "./Header";
import { Waveform } from "./Waveform";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="text-display text-4xl">Brasília em Frequência</p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Uma viagem pela história, pelos sons e pelas vozes da capital.
          </p>
          <Waveform className="mt-6 text-primary" bars={24} />
        </div>
        <nav aria-label="Rodapé">
          <p className="label-mono mb-4 text-muted-foreground">Navegação</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-primary">{n.label}</Link>
              </li>
            ))}
            <li><Link to="/referencias" className="hover:text-primary">Referências</Link></li>
          </ul>
        </nav>
        <div>
          <p className="label-mono mb-4 text-muted-foreground">Projeto de extensão</p>
          <p className="text-sm text-muted-foreground">
            Projeto de extensão universitária — Disciplina Itinerário Extensionista. Conteúdos marcados como
            "Em pesquisa" ainda aguardam verificação em fontes.
          </p>
        </div>
      </div>
    </footer>
  );
}
