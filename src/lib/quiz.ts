import type { MovementId } from "@/data/content";

export interface QuizOption {
  label: string;
  scores: Partial<Record<MovementId, number>>;
}
export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export const quiz: QuizQuestion[] = [
  {
    question: "Qual som faz seu coração acelerar?",
    options: [
      { label: "Uma guitarra distorcida", scores: { rock: 2 } },
      { label: "Um beat pesado com rima afiada", scores: { rap: 2 } },
      { label: "Sanfona, zabumba e triângulo", scores: { forro: 2 } },
      { label: "Um pouco de tudo", scores: { rock: 1, rap: 1, forro: 1 } },
    ],
  },
  {
    question: "Num sábado à noite, você estaria…",
    options: [
      { label: "Num show pequeno e barulhento", scores: { rock: 2 } },
      { label: "Numa batalha de rima na praça", scores: { rap: 2 } },
      { label: "Num salão dançando agarradinho", scores: { forro: 2 } },
    ],
  },
  {
    question: "O que mais importa numa música?",
    options: [
      { label: "Atitude e inquietação", scores: { rock: 2, rap: 1 } },
      { label: "A mensagem e a verdade de quem canta", scores: { rap: 2 } },
      { label: "A memória e o afeto que ela traz", scores: { forro: 2 } },
      { label: "A poesia da letra", scores: { rock: 1, forro: 1 } },
    ],
  },
  {
    question: "Que cenário de Brasília combina com você?",
    options: [
      { label: "As superquadras e os blocos de concreto", scores: { rock: 2 } },
      { label: "Os muros grafitados da periferia", scores: { rap: 2 } },
      { label: "A festa junina do bairro", scores: { forro: 2 } },
    ],
  },
  {
    question: "Que experiência você quer explorar?",
    options: [
      { label: "A história de uma geração que mudou o rock nacional", scores: { rock: 2 } },
      { label: "Uma cultura de resistência e identidade", scores: { rap: 2 } },
      { label: "As raízes nordestinas da capital", scores: { forro: 2 } },
    ],
  },
];

/** answers[i] = índice da opção escolhida na pergunta i. Empate: ordem rock → rap → forró da primeira maior pontuação. */
export function scoreQuiz(answers: (number | null)[]): { winner: MovementId; totals: Record<MovementId, number> } {
  const totals: Record<MovementId, number> = { rock: 0, rap: 0, forro: 0 };
  answers.forEach((a, i) => {
    if (a == null) return;
    const opt = quiz[i]?.options[a];
    if (!opt) return;
    for (const [k, v] of Object.entries(opt.scores)) totals[k as MovementId] += v ?? 0;
  });
  const order: MovementId[] = ["rock", "rap", "forro"];
  const winner = order.reduce((best, id) => (totals[id] > totals[best] ? id : best), order[0]);
  return { winner, totals };
}
