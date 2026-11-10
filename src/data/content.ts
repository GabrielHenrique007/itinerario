/**
 * Conteúdo editável do Brasília em Frequência.
 * status: "verificado" = conferido em fonte; "em-pesquisa" = aguardando confirmação da equipe.
 * Links com status "placeholder" devem ser substituídos por URLs reais pesquisadas.
 */
import rockImg from "@/assets/mov-rock.jpg";
import rapImg from "@/assets/mov-rap.jpg";
import forroImg from "@/assets/mov-forro.jpg";

export type MovementId = "rock" | "rap" | "forro";
export type Status = "verificado" | "em-pesquisa";

export interface Movement {
  id: MovementId;
  number: string;
  name: string;
  short: string;
  tagline: string;
  image: string;
  intro: string;
  sections: { title: string; body: string; status: Status }[];
  artists: { name: string; note: string; status: Status }[];
}

export const movements: Movement[] = [
  {
    id: "rock",
    number: "01",
    name: "Rock de Brasília",
    short: "Rock",
    tagline: "Guitarras, concreto e inquietação.",
    image: rockImg,
    intro:
      "Nos anos 1980, jovens da capital transformaram o tédio das superquadras em guitarras distorcidas e letras que falavam sobre o país. O resultado ecoou muito além do Planalto Central.",
    sections: [
      {
        title: "Como tudo começou",
        body: "Filhos de servidores, diplomatas e professores cresceram numa cidade recém-inaugurada, com acesso a discos estrangeiros e pouca oferta cultural. O punk chegou como linguagem para falar de inquietação.",
        status: "verificado",
      },
      {
        title: "O cenário musical dos anos 1980",
        body: "Shows em espaços alternativos, festas e encontros entre bandas formaram uma cena coesa, conhecida mais tarde como a geração do rock de Brasília.",
        status: "verificado",
      },
      {
        title: "Bandas e artistas",
        body: "Legião Urbana, Capital Inicial e Plebe Rude estão entre os nomes que levaram o som da capital ao restante do Brasil.",
        status: "verificado",
      },
      {
        title: "O legado do rock brasiliense",
        body: "As canções da geração 80 seguem presentes no repertório nacional e influenciam novas bandas da cidade.",
        status: "verificado",
      },
    ],
    artists: [
      { name: "Legião Urbana", note: "Liderada por Renato Russo.", status: "verificado" },
      { name: "Capital Inicial", note: "Banda formada em Brasília.", status: "verificado" },
      { name: "Plebe Rude", note: "Banda formada em Brasília.", status: "verificado" },
      { name: "Aborto Elétrico", note: "Banda punk precursora da cena.", status: "verificado" },
    ],
  },
  {
    id: "rap",
    number: "02",
    name: "Rap da Ceilândia",
    short: "Rap",
    tagline: "A voz que vem da periferia.",
    image: rapImg,
    intro:
      "Na maior região administrativa do Distrito Federal, o hip-hop virou ferramenta de expressão, denúncia e orgulho. Rimas, grafite, breaking e DJs construíram uma identidade própria.",
    sections: [
      {
        title: "As origens do movimento",
        body: "A Ceilândia nasceu de uma campanha de remoção de moradores de ocupações próximas ao Plano Piloto. Essa história de deslocamento atravessa muitas letras do rap local.",
        status: "verificado",
      },
      {
        title: "A cultura hip-hop na Ceilândia",
        body: "Bailes black, rodas de breaking, grafite e espaços de encontro como o Quarentão ajudaram a construir a identidade do movimento hip-hop na Ceilândia.",
        status: "verificado",
      },
      {
        title: "Vozes e artistas",
        body: "Câmbio Negro, DJ Jamaika, GOG e Viela 17 estão entre os nomes que marcaram a história do rap no Distrito Federal.",
        status: "verificado",
      },
      {
        title: "Música, identidade e resistência",
        body: "O rap da Ceilândia transformou experiências de racismo, desigualdade e exclusão em música, fortalecendo a identidade negra e afirmando a periferia como protagonista da produção cultural.",
        status: "verificado",
      },
    ],
    artists: [
      { name: "Câmbio Negro", note: "Grupo de rap da Ceilândia.", status: "verificado" },
      { name: "DJ Jamaika", note: "Artista do hip-hop do DF.", status: "verificado" },
      { name: "GOG", note: "Pioneiro do rap brasiliense.", status: "verificado" },
    ],
  },
  {
    id: "forro",
    number: "03",
    name: "Forró das Cidades-Satélite",
    short: "Forró",
    tagline: "Sanfona, saudade e chão batido.",
    image: forroImg,
    intro:
      "Quem construiu Brasília trouxe na bagagem o Nordeste. Nas cidades-satélite, o forró virou ponto de encontro, memória afetiva e festa que atravessa gerações.",
    sections: [
      {
        title: "A influência nordestina em Brasília",
        body: "Grande parte dos trabalhadores que ergueram a capital, os candangos, veio do Nordeste, trazendo músicas, comidas e festas da sua terra.",
        status: "verificado",
      },
      {
        title: "O forró e as festas populares",
        body: "A migração nordestina trouxe ao Distrito Federal tradições musicais que ganharam força nas festas juninas, nos bailes populares e nos encontros de forró. Ceilândia e a antiga Cidade Livre foram importantes espaços dessa história.",
        status: "verificado",
      },
      {
        title: "Artistas e tradições",
        body: "Nino de Braçanã, Torres do Rojão, Chicão do Forró e grupos como Trio Paranoá e Trio Siridó ajudaram a construir a história do forró no Distrito Federal.",
        status: "verificado",
      },
      {
        title: "A cultura que atravessa gerações",
        body: "Entre sanfonas, zabumbas e triângulos, o forró mantém vivas as tradições nordestinas no DF, reunindo diferentes gerações em torno da música, da dança e das festas populares.",
        status: "verificado",
      },
    ],
    artists: [
      { name: "Sivuquinha de Brasília", note: "Sanfoneiro que difundiu o forró no Distrito Federal.", status: "verificado" },
      { name: "Trio Siridó", note: "Grupo pioneiro do forró brasiliense, fundado em 1972.", status: "verificado" },
      { name: "Telebar — O Point do Forró", note: "Espaço tradicional de Ceilândia dedicado aos bailes de forró.", status: "verificado" },
    ],
  },
];

export const getMovement = (id: string) => movements.find((m) => m.id === id);

/* ---------------- Linha do tempo ---------------- */
export interface TimelineEvent {
  id: string;
  date: string;
  decade: string;
  movement: MovementId | "cidade";
  title: string;
  description: string;
  artists?: string[];
  status: Status;
}

export const timeline: TimelineEvent[] = [
  {
    id: "inauguracao",
    date: "21 de abril de 1960",
    decade: "1960",
    movement: "cidade",
    title: "Inauguração de Brasília",
    description: "A nova capital é inaugurada após anos de construção, marcada pela chegada de trabalhadores de diversas regiões do país.",
    status: "verificado",
  },
  {
    id: "candangos",
    date: "Anos 1950 e 1960",
    decade: "1960",
    movement: "forro",
    title: "A chegada das tradições nordestinas",
    description: "Trabalhadores nordestinos trazem suas tradições musicais para Brasília, contribuindo para a formação da cultura popular da nova capital.",
    status: "verificado",
  },
  {
    id: "ceilandia",
    date: "27 de março de 1971",
    decade: "1970",
    movement: "rap",
    title: "Fundação da Ceilândia",
    description: "Criada a partir da Campanha de Erradicação de Invasões (CEI), a cidade recebe milhares de famílias transferidas de outras áreas do DF.",
    status: "verificado",
  },
  {
    id: "punk",
    date: "Fim dos anos 1970",
    decade: "1970",
    movement: "rock",
    title: "O punk ganha força na Colina",
    description: "Jovens da capital formam bandas influenciadas pelo punk rock, entre elas o Aborto Elétrico, precursor do rock brasiliense.",
    artists: ["Aborto Elétrico"],
    status: "verificado",
  },
  {
    id: "geracao80",
    date: "Início dos anos 1980",
    decade: "1980",
    movement: "rock",
    title: "Nasce a geração do rock de Brasília",
    description: "Legião Urbana, Capital Inicial e Plebe Rude surgem e conquistam projeção nacional ao longo da década.",
    artists: ["Legião Urbana", "Capital Inicial", "Plebe Rude"],
    status: "verificado",
  },
  {
    id: "hiphop80",
    date: "Anos 1980",
    decade: "1980",
    movement: "rap",
    title: "Bailes e breaking na periferia",
    description: "Grupos de dança e encontros musicais fortalecem a cultura hip-hop em Ceilândia, com espaços como o Quarentão.",
    status: "verificado",
  },
  {
    id: "rap90",
    date: "1990",
    decade: "1990",
    movement: "rap",
    title: "O rap do DF ganha força",
    description: "O Câmbio Negro surge em Ceilândia e ajuda a projetar o rap brasiliense no cenário nacional.",
    artists: ["Câmbio Negro", "DJ Jamaika"],
    status: "verificado",
  },
  {
    id: "forro90",
    date: "Final dos anos 1990",
    decade: "1990",
    movement: "forro",
    title: "O forró mantém sua tradição no DF",
    description: "Casas de forró, trios pé de serra e festas populares mantêm viva a música nordestina e fortalecem sua presença no Distrito Federal.",
    status: "verificado",
  },
  {
    id: "hoje",
    date: "Anos 2000 em diante",
    decade: "2000+",
    movement: "cidade",
    title: "Novas gerações, novas frequências",
    description: "Rock, rap e forró continuam se renovando, com artistas e coletivos que mantêm viva a diversidade musical do Distrito Federal.",
    status: "verificado",
  },
];


/* ---------------- Playlists ---------------- */
export interface Track {
  title: string;
  artist: string;
  status: Status;
}
export interface Playlist {
  movement: MovementId;
  name: string;
  description: string;
  tracks: Track[];
  links: { label: "Spotify" | "YouTube"; url: string; status: "verificado" | "placeholder" }[];
}

export const playlists: Playlist[] = [
  {
    movement: "rock",
    name: "Concreto & Distorção",
    description: "O som que saiu das superquadras e tomou o Brasil.",
    tracks: [
      { title: "Que País É Este", artist: "Legião Urbana", status: "verificado" },
      { title: "Faroeste Caboclo", artist: "Legião Urbana", status: "verificado" },
      { title: "Música Urbana", artist: "Capital Inicial", status: "verificado" },
      { title: "Até Quando Esperar", artist: "Plebe Rude", status: "verificado" },
    ],
    links: [
      { label: "Spotify", url: "https://open.spotify.com/playlist/07JxHvzVtMolpjqnWfLosF?utm_source=chatgpt.com", status: "placeholder" },
      { label: "YouTube", url: "https://www.youtube.com/watch?v=PxiF72eeiBQ&utm_source=chatgpt.com", status: "placeholder" },
    ],
  },
  {
    movement: "rap",
    name: "Quebrada em Frequência",
    description: "Rimas que contam a história de quem fez a cidade.",
    tracks: [
      { title: "Sub-Raça", artist: "Câmbio Negro", status: "verificado" },
      { title: "Tô só observando", artist: "DJ Jamaika", status: "verificado" },
      { title: "Brasília Periferia", artist: "GOG", status: "verificado" },
    ],
    links: [
      { label: "Spotify", url: "https://embed.spotify.com/?uri=spotify:playlist:1OshzQCcmOiCmQM85RHAbV&utm_source=chatgpt.com", status: "placeholder" },
      { label: "YouTube", url: "https://www.youtube.com/results?search_query=rap+de+bras%C3%ADlia+playlist&utm_source=chatgpt.com", status: "placeholder" },
    ],
  },
  {
    movement: "forro",
    name: "Arrasta-pé Candango",
    description: "A sanfona que embala as noites das cidades-satélite.",
    tracks: [
      { title: "Foguete Baiano", artist: "Nino e seu Trio Paranoá", status: "verificado" },
      { title: "Eu Sou de Lá", artist: "Trio Siridó", status: "verificado" },
      { title: "Triângulo Dançante", artist: "Sivuquinha de Brasília", status: "verificado" },
    ],
    links: [
      { label: "Spotify", url: "https://open.spotify.com/playlist/1U6EdApJiVqK4sZ5IYLhR2?si=4qGlYiT1S9m0N2bURTABeQ", status: "placeholder" },
      { label: "YouTube", url: "https://www.youtube.com/watch?v=9uMx7F2ADNg&list=PLGLEccDprkiY9jtq8A3hJmsmiiWQyWUxv&pp=0gcJCR0Ga94AFGB0", status: "placeholder" },
    ],
  },
];

/* ---------------- Mapa sonoro ---------------- */
export interface Region {
  id: string;
  name: string;
  x: number; // posição ilustrativa (0–100)
  y: number;
  movement: MovementId;
  context: string;
  references: string[];
  status: Status;
}

export const regions: Region[] = [
  {
    id: "plano",
    name: "Plano Piloto",
    x: 58,
    y: 46,
    movement: "rock",
    context: "Berço da geração do rock dos anos 1980, formada por jovens das superquadras.",
    references: ["Legião Urbana", "Capital Inicial", "Plebe Rude"],
    status: "verificado",
  },
  {
    id: "ceilandia",
    name: "Ceilândia",
    x: 22,
    y: 44,
    movement: "rap",
    context: "Maior região administrativa do DF e um dos principais polos do hip-hop local.",
    references: ["Câmbio Negro", "DJ Jamaika", "DF Zulu Breakers", "GOG"],
    status: "verificado",
  },
  {
    id: "taguatinga",
    name: "Taguatinga",
    x: 32,
    y: 54,
    movement: "rap",
    context: "Bailes da região, como o Primavera, aparecem nos registros sobre a formação musical de GOG e o circuito de festas black do DF.",
    references: ["GOG", "Baile Primavera"],
    status: "verificado",
  },
  {
    id: "gama",
    name: "Gama",
    x: 36,
    y: 78,
    movement: "forro",
    context: "A presença da cultura nordestina e das festas populares faz parte do cenário cultural da região. Referências específicas ao forró ainda estão em levantamento.",
    references: ["Forró do Zé do Norte", "FAGAMA", "Zito Borborema"],
    status: "verificado",
  },
  {
    id: "sobradinho",
    name: "Sobradinho",
    x: 64,
    y: 22,
    movement: "rap",
    context: "Cidade natal de GOG, um dos pioneiros do hip-hop brasiliense e referência do rap nacional.",
    references: ["GOG"],
    status: "verificado",
  },
  {
    id: "samambaia",
    name: "Samambaia",
    x: 24,
    y: 62,
    movement: "rap",
    context: "A cena local de rap tem como representante o grupo Rituais MC's, formado em Samambaia Sul em 1997.",
    references: ["Rituais MC's"],
    status: "verificado",
  },
];

/* ---------------- Referências ---------------- */
export interface Reference {
  title: string;
  author: string;
  date?: string;
  url?: string;
  type: "Artigo acadêmico" | "Entrevista" | "Documentário" | "Jornal" | "Arquivo cultural" | "Site institucional" | "Artista";
  movement: MovementId | "geral";
  status: Status;
}

export const references: Reference[] = [
  { title: "Música urbana: ascensão do rock brasiliense na década de 80", author: "Jéssica de Amorim Gomes — Universidade de Brasília (UnB)", type: "Artigo acadêmico", movement: "rock", status: "verificado" },
  { title: "Colina: berço do rock brasiliense", author: "Camilla Venosa Mazzola — UniCEUB", type: "Documentário", movement: "rock", status: "verificado" },
  { title: "Geração hip-hop e a construção do imaginário na periferia do Distrito Federal", author: "Breitner Tavares", type: "Entrevista", movement: "rap", status: "verificado" },
  { title: "GOG e a cultura hip hop", author: "Ana Pimenta — EBC Rádios", type: "Jornal", movement: "rap", status: "verificado" },
  { title: "Dossiê de registro — Matrizes Tradicionais do Forró", author: "Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN)", type: "Arquivo cultural", movement: "forro", status: "verificado" },
  { title: "Construção de Diretrizes de Salvaguarda das Matrizes Tradicionais do Forró no Distrito Federal", author: "Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN)", type: "Site institucional", movement: "geral", status: "verificado" },
];

/* ---------------- Projeto ---------------- */
export const projectInfo = [
  { label: "Instituição de ensino", value: "Centro Universitário do Distrito Federal" },
  { label: "Curso", value: "Engenharia de Software" },
  { label: "Disciplina", value: "Itinerário Extensionista" },
  { label: "Integrantes do grupo", value: "Gabriel Henrique, Pedro Henrique, Samantha Falcão, Sofia Araujo, Vitor Cassiano" },
  { label: "Professor(a) responsável", value: "Gisela Pelegrinelli e Sandro Pedrotti Acosta" },
];
