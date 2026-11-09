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
        status: "em-pesquisa",
      },
      {
        title: "O cenário musical dos anos 1980",
        body: "Shows em espaços alternativos, festas e encontros entre bandas formaram uma cena coesa, conhecida mais tarde como a geração do rock de Brasília.",
        status: "em-pesquisa",
      },
      {
        title: "Bandas e artistas",
        body: "Legião Urbana, Capital Inicial e Plebe Rude estão entre os nomes que levaram o som da capital ao restante do Brasil.",
        status: "verificado",
      },
      {
        title: "O legado do rock brasiliense",
        body: "As canções da geração 80 seguem presentes no repertório nacional e influenciam novas bandas da cidade. Detalhes deste legado estão em pesquisa pela equipe.",
        status: "em-pesquisa",
      },
    ],
    artists: [
      { name: "Legião Urbana", note: "Liderada por Renato Russo.", status: "verificado" },
      { name: "Capital Inicial", note: "Banda formada em Brasília.", status: "verificado" },
      { name: "Plebe Rude", note: "Banda formada em Brasília.", status: "verificado" },
      { name: "Aborto Elétrico", note: "Banda punk precursora da cena.", status: "em-pesquisa" },
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
        body: "Bailes, rodas de breaking, grafite e rádios comunitárias formaram os primeiros espaços da cultura hip-hop na região. Datas e locais estão em pesquisa.",
        status: "em-pesquisa",
      },
      {
        title: "Vozes e artistas",
        body: "Câmbio Negro e DJ Jamaika estão entre os nomes associados ao rap do Distrito Federal estudados neste projeto.",
        status: "em-pesquisa",
      },
      {
        title: "Música, identidade e resistência",
        body: "O rap da Ceilândia fala de racismo, desigualdade e pertencimento — e afirma a periferia como centro de produção cultural.",
        status: "em-pesquisa",
      },
    ],
    artists: [
      { name: "Câmbio Negro", note: "Grupo de rap da Ceilândia.", status: "verificado" },
      { name: "DJ Jamaika", note: "Artista do hip-hop do DF.", status: "em-pesquisa" },
      { name: "[Artista a pesquisar]", note: "Espaço editável para a equipe.", status: "em-pesquisa" },
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
        body: "Festas juninas, casas de forró e bailes de bairro mantêm vivas a sanfona, a zabumba e o triângulo. Espaços específicos estão em pesquisa.",
        status: "em-pesquisa",
      },
      {
        title: "Artistas e tradições",
        body: "A equipe está levantando sanfoneiros, trios e casas de forró relevantes no Distrito Federal.",
        status: "em-pesquisa",
      },
      {
        title: "A cultura que atravessa gerações",
        body: "Avós, pais e netos dividem o mesmo salão. O forró é patrimônio afetivo de muitas famílias do DF.",
        status: "em-pesquisa",
      },
    ],
    artists: [
      { name: "[Sanfoneiro a pesquisar]", note: "Espaço editável para a equipe.", status: "em-pesquisa" },
      { name: "[Trio de forró a pesquisar]", note: "Espaço editável para a equipe.", status: "em-pesquisa" },
      { name: "[Casa de forró a pesquisar]", note: "Espaço editável para a equipe.", status: "em-pesquisa" },
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
    description: "A nova capital é inaugurada, reunindo trabalhadores de todas as regiões do país — muitos deles nordestinos.",
    status: "verificado",
  },
  {
    id: "candangos",
    date: "Anos 1960",
    decade: "1960",
    movement: "forro",
    title: "A música dos candangos",
    description: "Trabalhadores nordestinos levam o forró para os acampamentos e primeiras cidades-satélite. Registros em pesquisa.",
    status: "em-pesquisa",
  },
  {
    id: "ceilandia",
    date: "27 de março de 1971",
    decade: "1970",
    movement: "rap",
    title: "Fundação da Ceilândia",
    description: "Criada a partir da Campanha de Erradicação de Invasões (CEI), origem do nome da cidade.",
    status: "verificado",
  },
  {
    id: "punk",
    date: "Fim dos anos 1970",
    decade: "1970",
    movement: "rock",
    title: "O punk chega às superquadras",
    description: "Surgem as primeiras bandas punk da cidade, como o Aborto Elétrico. Data exata em verificação.",
    artists: ["Aborto Elétrico"],
    status: "em-pesquisa",
  },
  {
    id: "geracao80",
    date: "Início dos anos 1980",
    decade: "1980",
    movement: "rock",
    title: "Nasce a geração do rock de Brasília",
    description: "Legião Urbana, Capital Inicial e Plebe Rude se formam e ganham projeção nacional ao longo da década.",
    artists: ["Legião Urbana", "Capital Inicial", "Plebe Rude"],
    status: "em-pesquisa",
  },
  {
    id: "hiphop80",
    date: "Anos 1980",
    decade: "1980",
    movement: "rap",
    title: "Bailes e breaking na periferia",
    description: "A cultura hip-hop começa a ocupar espaços na Ceilândia e em outras regiões. Datas em pesquisa.",
    status: "em-pesquisa",
  },
  {
    id: "rap90",
    date: "Anos 1990",
    decade: "1990",
    movement: "rap",
    title: "O rap do DF ganha força",
    description: "Grupos como o Câmbio Negro levam o rap da Ceilândia para além do Distrito Federal.",
    artists: ["Câmbio Negro", "DJ Jamaika"],
    status: "em-pesquisa",
  },
  {
    id: "forro90",
    date: "[Data a confirmar]",
    decade: "1990",
    movement: "forro",
    title: "[Marco do forró no DF]",
    description: "Espaço editável: casas de forró e festas populares nas cidades-satélite.",
    status: "em-pesquisa",
  },
  {
    id: "hoje",
    date: "Anos 2000 em diante",
    decade: "2000+",
    movement: "cidade",
    title: "Novas gerações, novas frequências",
    description: "Rock, rap e forró seguem se renovando. A equipe está mapeando artistas contemporâneos.",
    status: "em-pesquisa",
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
      { label: "Spotify", url: "#playlist-spotify-rock", status: "placeholder" },
      { label: "YouTube", url: "#playlist-youtube-rock", status: "placeholder" },
    ],
  },
  {
    movement: "rap",
    name: "Quebrada em Frequência",
    description: "Rimas que contam a história de quem fez a cidade.",
    tracks: [
      { title: "Sub-Raça", artist: "Câmbio Negro", status: "em-pesquisa" },
      { title: "[Faixa a pesquisar]", artist: "DJ Jamaika", status: "em-pesquisa" },
      { title: "[Faixa a pesquisar]", artist: "[Artista a pesquisar]", status: "em-pesquisa" },
    ],
    links: [
      { label: "Spotify", url: "#playlist-spotify-rap", status: "placeholder" },
      { label: "YouTube", url: "#playlist-youtube-rap", status: "placeholder" },
    ],
  },
  {
    movement: "forro",
    name: "Arrasta-pé Candango",
    description: "A sanfona que embala as noites das cidades-satélite.",
    tracks: [
      { title: "[Faixa a pesquisar]", artist: "[Artista a pesquisar]", status: "em-pesquisa" },
      { title: "[Faixa a pesquisar]", artist: "[Artista a pesquisar]", status: "em-pesquisa" },
      { title: "[Faixa a pesquisar]", artist: "[Artista a pesquisar]", status: "em-pesquisa" },
    ],
    links: [
      { label: "Spotify", url: "#playlist-spotify-forro", status: "placeholder" },
      { label: "YouTube", url: "#playlist-youtube-forro", status: "placeholder" },
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
    references: ["Câmbio Negro", "DJ Jamaika"],
    status: "verificado",
  },
  {
    id: "taguatinga",
    name: "Taguatinga",
    x: 32,
    y: 54,
    movement: "forro",
    context: "[Em pesquisa] Relação com casas de forró e festas populares a confirmar.",
    references: ["[Referência a pesquisar]"],
    status: "em-pesquisa",
  },
  {
    id: "gama",
    name: "Gama",
    x: 36,
    y: 78,
    movement: "forro",
    context: "[Em pesquisa] Presença de tradições nordestinas a confirmar.",
    references: ["[Referência a pesquisar]"],
    status: "em-pesquisa",
  },
  {
    id: "sobradinho",
    name: "Sobradinho",
    x: 64,
    y: 22,
    movement: "forro",
    context: "[Em pesquisa] Associação cultural a confirmar pela equipe.",
    references: ["[Referência a pesquisar]"],
    status: "em-pesquisa",
  },
  {
    id: "samambaia",
    name: "Samambaia",
    x: 24,
    y: 62,
    movement: "rap",
    context: "[Em pesquisa] Cena de hip-hop local a confirmar.",
    references: ["[Referência a pesquisar]"],
    status: "em-pesquisa",
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
  { title: "[Título da referência]", author: "[Autor ou instituição]", type: "Artigo acadêmico", movement: "rock", status: "em-pesquisa" },
  { title: "[Título da referência]", author: "[Autor ou instituição]", type: "Documentário", movement: "rock", status: "em-pesquisa" },
  { title: "[Título da referência]", author: "[Autor ou instituição]", type: "Entrevista", movement: "rap", status: "em-pesquisa" },
  { title: "[Título da referência]", author: "[Autor ou instituição]", type: "Jornal", movement: "rap", status: "em-pesquisa" },
  { title: "[Título da referência]", author: "[Autor ou instituição]", type: "Arquivo cultural", movement: "forro", status: "em-pesquisa" },
  { title: "[Título da referência]", author: "[Autor ou instituição]", type: "Site institucional", movement: "geral", status: "em-pesquisa" },
];

/* ---------------- Projeto ---------------- */
export const projectInfo = [
  { label: "Instituição de ensino", value: "[A preencher]" },
  { label: "Curso", value: "[A preencher]" },
  { label: "Disciplina", value: "Itinerário Extensionista" },
  { label: "Integrantes do grupo", value: "[A preencher]" },
  { label: "Professor(a) responsável", value: "[A preencher]" },
];
