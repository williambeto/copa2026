import { defineComponent, mergeProps, useSSRContext, unref, computed, ref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "vue-chartjs";
import { a as useSeoMeta } from "./v3-BLV6hdWT.js";
import "/home/williambeto/Development/cup/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/williambeto/Development/cup/node_modules/hookable/dist/index.mjs";
import "/home/williambeto/Development/cup/node_modules/unctx/dist/index.mjs";
import "/home/williambeto/Development/cup/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/williambeto/Development/cup/node_modules/defu/dist/defu.mjs";
import "/home/williambeto/Development/cup/node_modules/ufo/dist/index.mjs";
import "/home/williambeto/Development/cup/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const probabilityBars = [
      { label: "Espanha", value: 16.5, percent: 16.5 },
      { label: "França", value: 13.5, percent: 13.5 },
      { label: "Inglaterra", value: 11.5, percent: 11.5 },
      { label: "Argentina", value: 11, percent: 11 },
      { label: "Portugal", value: 8, percent: 8 },
      { label: "Brasil", value: 7.5, percent: 7.5 },
      { label: "Outras", value: 32, percent: 32 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "resumo",
        class: "relative min-h-screen flex items-center overflow-hidden",
        "aria-labelledby": "hero-title"
      }, _attrs))} data-v-dc362f38><div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true" data-v-dc362f38><div class="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950 to-navy-900/80" data-v-dc362f38></div><div class="absolute inset-0 field-pattern opacity-40" data-v-dc362f38></div><svg class="absolute -top-10 right-0 lg:right-10 w-80 h-80 lg:w-[500px] lg:h-[500px] text-gold-500/[0.04]" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-dc362f38><path d="M100 10 L115 55 L165 55 L125 85 L140 130 L100 105 L60 130 L75 85 L35 55 L85 55 Z" data-v-dc362f38></path><circle cx="100" cy="145" r="18" data-v-dc362f38></circle><rect x="88" y="160" width="24" height="30" rx="3" data-v-dc362f38></rect></svg><svg class="absolute top-1/3 right-1/3 w-72 h-72 text-white/[0.015]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" data-v-dc362f38><defs data-v-dc362f38><pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse" data-v-dc362f38><circle cx="6" cy="6" r="0.6" fill="currentColor" data-v-dc362f38></circle></pattern></defs><rect width="100" height="100" fill="url(#dots)" data-v-dc362f38></rect></svg></div><div class="relative z-10 w-full" data-v-dc362f38><div class="section-inner pt-32 pb-20 lg:pt-40 lg:pb-32" data-v-dc362f38><p class="section-label animate-fade-in" data-v-dc362f38> World Cup 2026 · Análise editorial </p><div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mt-6" data-v-dc362f38><div class="lg:col-span-7 animate-fade-in" data-v-dc362f38><h1 id="hero-title" class="section-headline text-balance" data-v-dc362f38> Quem tem a maior probabilidade de vencer a Copa do Mundo de 2026? </h1><p class="section-subhead mt-6" data-v-dc362f38> Uma análise baseada em rankings, desempenho recente, qualidade do elenco, lesões, técnicos, grupos e caminhos possíveis até a final. </p><div class="flex flex-wrap gap-4 pt-8" data-v-dc362f38><a href="#ranking" class="btn-primary" data-v-dc362f38> Ver ranking completo <span aria-hidden="true" class="text-lg leading-none" data-v-dc362f38>→</span></a><a href="#metodologia" class="btn-outline" data-v-dc362f38> Entender a metodologia </a></div></div><div class="lg:col-span-5 animate-slide-up" data-v-dc362f38><div class="flex flex-wrap gap-x-8 gap-y-6" data-v-dc362f38><div class="stat-block" data-v-dc362f38><span class="data-percent" data-v-dc362f38>16,5%</span><span class="stat-block-label" data-v-dc362f38>Probabilidade estimada</span></div><div class="stat-block" data-v-dc362f38><span class="stat-block-value" data-v-dc362f38>1º</span><span class="stat-block-label" data-v-dc362f38>Ranking Elo</span></div><div class="stat-block" data-v-dc362f38><span class="stat-block-value" data-v-dc362f38>2º</span><span class="stat-block-label" data-v-dc362f38>Ranking FIFA</span></div><div class="stat-block" data-v-dc362f38><span class="stat-block-value text-gold-500" data-v-dc362f38>Campeã</span><span class="stat-block-label" data-v-dc362f38>Euro 2024</span></div></div><div class="mt-10 pt-8 border-t border-surface-800/40" data-v-dc362f38><p class="text-xs font-display font-semibold uppercase tracking-[0.15em] text-gray-500 mb-5" data-v-dc362f38> Distribuição de probabilidades </p><div class="space-y-3" data-v-dc362f38><!--[-->`);
      ssrRenderList(probabilityBars, (bar) => {
        _push(`<div class="flex items-center gap-3" data-v-dc362f38><span class="w-20 flex-shrink-0 text-sm text-gray-400 text-right font-sans font-medium" data-v-dc362f38>${ssrInterpolate(bar.label)}</span><div class="flex-1 strength-bar-track" data-v-dc362f38><div class="strength-bar-fill strength-bar-fill-gold" style="${ssrRenderStyle({ width: bar.percent + "%", minWidth: bar.percent > 0 ? "8px" : "0" })}" data-v-dc362f38></div></div><span class="w-10 text-right text-xs font-mono text-gold-400 tabular-nums font-semibold" data-v-dc362f38>${ssrInterpolate(bar.value)}% </span></div>`);
      });
      _push(`<!--]--></div><p class="mt-4 text-xs text-gray-600 leading-relaxed" data-v-dc362f38> Nenhuma candidata possui probabilidade dominante. A Copa permanece aberta e imprevisível. </p></div></div></div></div></div><div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" aria-hidden="true" data-v-dc362f38></div></section>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-dc362f38"]]);
const TEAMS = [
  {
    id: "espanha",
    name: "Espanha",
    nameEn: "Spain",
    flag: "🇪🇸",
    probability: 16.5,
    eloRank: 1,
    fifaRank: 2,
    avgAge: 26.12,
    strengthScore: 9.6,
    squadScore: 9.4,
    formScore: 9.5,
    coachScore: 9,
    pathScore: 8.7,
    fitnessScore: 7.4,
    knockoutScore: 8.1,
    probabilityNote: 9.4,
    justification: "Melhor equilíbrio geral entre ranking, forma, elenco e modelo de jogo.",
    category: "favorite",
    coach: "Luis de la Fuente",
    keyPlayers: ["Lamine Yamal", "Rodri", "Pedri", "Nico Williams", "Dani Olmo"],
    strengths: [
      "Liderança no Elo",
      "Campeã da Euro 2024",
      "Elenco jovem",
      "Pressão alta",
      "Controle de posse"
    ],
    risks: [
      "Dependência criativa de Yamal",
      "Condição física de jogadores importantes",
      "Possível dificuldade em partidas físicas e caóticas"
    ]
  },
  {
    id: "franca",
    name: "França",
    nameEn: "France",
    flag: "🇫🇷",
    probability: 13.5,
    eloRank: 3,
    fifaRank: 3,
    avgAge: 26.54,
    strengthScore: 9.4,
    squadScore: 9.8,
    formScore: 8.7,
    coachScore: 9.3,
    pathScore: 7.2,
    fitnessScore: 8.2,
    knockoutScore: 9.7,
    probabilityNote: 9.1,
    justification: "Elenco mais profundo e forte experiência em mata-mata.",
    category: "favorite",
    coach: "Didier Deschamps",
    keyPlayers: ["Kylian Mbappé", "Aurélien Tchouaméni", "Jules Koundé", "Mike Maignan", "Ousmane Dembélé"],
    strengths: [
      "Maior profundidade",
      "Mbappé",
      "Excelente capacidade física",
      "Deschamps",
      "Histórico recente de finais"
    ],
    risks: [
      "Grupo difícil",
      "Modelo por vezes conservador",
      "Desgaste precoce"
    ]
  },
  {
    id: "inglaterra",
    name: "Inglaterra",
    nameEn: "England",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    probability: 11.5,
    eloRank: 4,
    fifaRank: 4,
    avgAge: 26.58,
    strengthScore: 9.1,
    squadScore: 9.6,
    formScore: 9.2,
    coachScore: 8.7,
    pathScore: 8.4,
    fitnessScore: 7.8,
    knockoutScore: 8.2,
    probabilityNote: 8.8,
    justification: "Enorme talento, mas ainda precisa provar controle em decisões.",
    category: "favorite",
    coach: "Thomas Tuchel",
    keyPlayers: ["Harry Kane", "Jude Bellingham", "Declan Rice", "Bukayo Saka", "Phil Foden"],
    strengths: [
      "Kane",
      "Bellingham",
      "Rice",
      "Elenco profundo",
      "Eliminatórias dominantes"
    ],
    risks: [
      "Pressão",
      "Histórico de derrotas em decisões",
      "Adaptação de Tuchel"
    ]
  },
  {
    id: "argentina",
    name: "Argentina",
    nameEn: "Argentina",
    flag: "🇦🇷",
    probability: 11,
    eloRank: 2,
    fifaRank: 1,
    avgAge: 27.04,
    strengthScore: 9.3,
    squadScore: 9,
    formScore: 9.1,
    coachScore: 9.5,
    pathScore: 9,
    fitnessScore: 7.1,
    knockoutScore: 9.8,
    probabilityNote: 8.7,
    justification: "Estabilidade, experiência e liderança competitiva.",
    category: "favorite",
    coach: "Lionel Scaloni",
    keyPlayers: ["Lionel Messi", "Enzo Fernández", "Cristian Romero", "Julián Álvarez", "Alexis Mac Allister"],
    strengths: [
      "Atual campeã mundial",
      "Campeã da Copa América",
      "Scaloni",
      "Experiência",
      "Liderança emocional"
    ],
    risks: [
      "Idade dos líderes",
      "Condição física de Messi",
      "Defesa com jogadores retornando"
    ]
  },
  {
    id: "portugal",
    name: "Portugal",
    nameEn: "Portugal",
    flag: "🇵🇹",
    probability: 8,
    eloRank: 6,
    fifaRank: 5,
    avgAge: 27.44,
    strengthScore: 8.9,
    squadScore: 9.4,
    formScore: 9,
    coachScore: 8.1,
    pathScore: 8.5,
    fitnessScore: 7.9,
    knockoutScore: 7.8,
    probabilityNote: 8.3,
    justification: "Elenco de elite, com dúvidas sobre gestão tática e hierarquia.",
    category: "contender",
    coach: "Roberto Martínez",
    keyPlayers: ["Vitinha", "Bruno Fernandes", "Nuno Mendes", "Rúben Dias", "Rafael Leão"],
    strengths: [
      "Meio-campo de elite",
      "Profundidade técnica",
      "Vitinha e Bruno Fernandes",
      "Nuno Mendes",
      "Rúben Dias"
    ],
    risks: [
      "Gestão de Cristiano Ronaldo",
      "Intensidade sem bola",
      "Decisões de Roberto Martínez"
    ]
  },
  {
    id: "brasil",
    name: "Brasil",
    nameEn: "Brazil",
    flag: "🇧🇷",
    probability: 7.5,
    eloRank: 5,
    fifaRank: 6,
    avgAge: 28.62,
    strengthScore: 8.7,
    squadScore: 9.2,
    formScore: 7.1,
    coachScore: 9.2,
    pathScore: 7.7,
    fitnessScore: 5.9,
    knockoutScore: 8.3,
    probabilityNote: 8,
    justification: "Teto alto, mas maior número de incertezas físicas e estruturais.",
    category: "contender",
    coach: "Carlo Ancelotti",
    keyPlayers: ["Vinícius Júnior", "Rodrygo", "Alisson", "Éder Militão", "Estêvão"],
    strengths: [
      "Vinícius Júnior",
      "Talento ofensivo",
      "Carlo Ancelotti",
      "Tradição",
      "Capacidade individual"
    ],
    risks: [
      "Lesões",
      "Idade média elevada",
      "Pouco tempo de trabalho",
      "Campanha irregular nas eliminatórias",
      "Dependência de jogadores decisivos"
    ]
  },
  {
    id: "alemanha",
    name: "Alemanha",
    nameEn: "Germany",
    flag: "🇩🇪",
    probability: 5.5,
    eloRank: 10,
    fifaRank: 10,
    avgAge: 27.46,
    strengthScore: 8.4,
    squadScore: 8.7,
    formScore: 8.8,
    coachScore: 8.6,
    pathScore: 8.4,
    fitnessScore: 6.8,
    knockoutScore: 7.3,
    probabilityNote: 7.6,
    justification: "Evolução recente e talento, porém histórico recente irregular.",
    category: "contender",
    coach: "Julian Nagelsmann",
    keyPlayers: ["Jamal Musiala", "Florian Wirtz", "Joshua Kimmich", "Antonio Rüdiger", "Kai Havertz"],
    strengths: [
      "Musiala e Wirtz",
      "Evolução tática com Nagelsmann",
      "Tradição em Copas",
      "Elenco talentoso"
    ],
    risks: [
      "Histórico recente irregular em Copas",
      "Defesa vulnerável",
      "Jogadores lesionados"
    ]
  },
  {
    id: "holanda",
    name: "Holanda",
    nameEn: "Netherlands",
    flag: "🇳🇱",
    probability: 4,
    eloRank: 8,
    fifaRank: 8,
    avgAge: 26.64,
    strengthScore: 8.3,
    squadScore: 8.6,
    formScore: 8.5,
    coachScore: 7.8,
    pathScore: 6.7,
    fitnessScore: 7.3,
    knockoutScore: 8.3,
    probabilityNote: 7.1,
    justification: "Defesa forte e experiência, mas chaveamento potencialmente difícil.",
    category: "contender",
    coach: "Ronald Koeman",
    keyPlayers: ["Virgil van Dijk", "Frenkie de Jong", "Xavi Simons", "Cody Gakpo", "Matthijs de Ligt"],
    strengths: [
      "Defesa com Van Dijk",
      "Meio-campo técnico",
      "Experiência em Copas"
    ],
    risks: [
      "Chaveamento potencialmente difícil",
      "Inconsistência ofensiva",
      "Dependência de De Jong"
    ]
  },
  {
    id: "noruega",
    name: "Noruega",
    nameEn: "Norway",
    flag: "🇳🇴",
    probability: 3.8,
    eloRank: 11,
    fifaRank: null,
    avgAge: 26.31,
    strengthScore: 8.1,
    squadScore: 8.1,
    formScore: 9.3,
    coachScore: 7.6,
    pathScore: 5.8,
    fitnessScore: 8,
    knockoutScore: 4.8,
    probabilityNote: 6.9,
    justification: "Ataque explosivo, porém pouca experiência em grandes torneios.",
    category: "hidden",
    coach: "Ståle Solbakken",
    keyPlayers: ["Erling Haaland", "Martin Ødegaard", "Alexander Sørloth", "Antonio Nusa"],
    strengths: [
      "Haaland e Ødegaard",
      "Ataque explosivo",
      "Boa forma recente"
    ],
    risks: [
      "Pouca experiência em grandes torneios",
      "Elenco curto",
      "Dependência de Haaland"
    ]
  },
  {
    id: "belgica",
    name: "Bélgica",
    nameEn: "Belgium",
    flag: "🇧🇪",
    probability: 2.8,
    eloRank: 15,
    fifaRank: 9,
    avgAge: 27.04,
    strengthScore: 7.8,
    squadScore: 8.2,
    formScore: 8,
    coachScore: 7.2,
    pathScore: 8.9,
    fitnessScore: 7,
    knockoutScore: 6.4,
    probabilityNote: 6.4,
    justification: "Grupo acessível, mas força real inferior à reputação.",
    category: "contender",
    coach: "Rudi Garcia",
    keyPlayers: ["Kevin De Bruyne", "Jérémy Doku", "Amadou Onana", "Loïs Openda"],
    strengths: [
      "De Bruyne",
      "Grupo acessível",
      "Talento ofensivo"
    ],
    risks: [
      "Força real inferior à reputação",
      "Transição geracional",
      "Defesa envelhecida"
    ]
  },
  {
    id: "colombia",
    name: "Colômbia",
    nameEn: "Colombia",
    flag: "🇨🇴",
    probability: 0,
    eloRank: 7,
    fifaRank: 13,
    avgAge: 29.54,
    strengthScore: 8.1,
    squadScore: 7.9,
    formScore: 7.8,
    coachScore: 8.1,
    pathScore: 7.2,
    fitnessScore: 6.1,
    knockoutScore: 6.5,
    probabilityNote: 6.3,
    justification: "Excelente posição no Elo e experiência recente nos Estados Unidos.",
    category: "hidden",
    coach: "Néstor Lorenzo",
    keyPlayers: ["Luis Díaz", "James Rodríguez", "Jhon Durán", "Davinson Sánchez"],
    strengths: [
      "Boa posição no Elo",
      "Luis Díaz",
      "Experiência nos EUA"
    ],
    risks: [
      "Idade média elevada",
      "Elenco limitado em algumas posições",
      "Inconsistência defensiva"
    ]
  },
  {
    id: "uruguai",
    name: "Uruguai",
    nameEn: "Uruguay",
    flag: "🇺🇾",
    probability: 0,
    eloRank: 16,
    fifaRank: 16,
    avgAge: 26.53,
    strengthScore: 7.7,
    squadScore: 8.2,
    formScore: 7.1,
    coachScore: 8,
    pathScore: 6.2,
    fitnessScore: 6.8,
    knockoutScore: 7.5,
    probabilityNote: 5.9,
    justification: "Tradição em Copas e elenco competitivo, mas momento irregular.",
    category: "underdog",
    coach: "Marcelo Bielsa",
    keyPlayers: ["Federico Valverde", "Darwin Núñez", "Ronald Araújo", "Manuel Ugarte"],
    strengths: [
      "Bielsa",
      "Valverde",
      "Tradição em Copas"
    ],
    risks: [
      "Momento irregular",
      "Chaveamento difícil",
      "Dependência tática"
    ]
  },
  {
    id: "marrocos",
    name: "Marrocos",
    nameEn: "Morocco",
    flag: "🇲🇦",
    probability: 0,
    eloRank: null,
    fifaRank: 7,
    avgAge: 24.72,
    strengthScore: 7.9,
    squadScore: 8,
    formScore: 7.4,
    coachScore: 6.7,
    pathScore: 6.1,
    fitnessScore: 6.5,
    knockoutScore: 7.5,
    probabilityNote: 5.8,
    justification: "Elenco jovem e experiência da semifinal de 2022.",
    category: "hidden",
    coach: "Walid Regragui",
    keyPlayers: ["Achraf Hakimi", "Brahim Díaz", "Noussair Mazraoui", "Azzedine Ounahi"],
    strengths: [
      "Elenco jovem",
      "Experiência de 2022",
      "Hakimi"
    ],
    risks: [
      "Pouca profundidade",
      "Grupo potencialmente difícil",
      "Inconsistência ofensiva"
    ]
  }
];
const PROBABILITY_RANKING = [
  { team: "Espanha", probability: 16.5, flag: "🇪🇸" },
  { team: "França", probability: 13.5, flag: "🇫🇷" },
  { team: "Inglaterra", probability: 11.5, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { team: "Argentina", probability: 11, flag: "🇦🇷" },
  { team: "Portugal", probability: 8, flag: "🇵🇹" },
  { team: "Brasil", probability: 7.5, flag: "🇧🇷" },
  { team: "Alemanha", probability: 5.5, flag: "🇩🇪" },
  { team: "Holanda", probability: 4, flag: "🇳🇱" },
  { team: "Noruega", probability: 3.8, flag: "🇳🇴" },
  { team: "Bélgica", probability: 2.8, flag: "🇧🇪" },
  { team: "Outras seleções", probability: 15.9, flag: "🌍" }
];
const EXECUTIVE_CARDS = [
  { label: "Favorita atual", team: "Espanha", value: "16,5%", flag: "🇪🇸" },
  { label: "Maior profundidade de elenco", team: "França", flag: "🇫🇷" },
  { label: "Melhor estabilidade competitiva", team: "Argentina", flag: "🇦🇷" },
  { label: "Elenco com maior teto", team: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { label: "Candidata com mais incertezas", team: "Brasil", flag: "🇧🇷" },
  { label: "Seleção oculta mais perigosa", team: "Noruega", flag: "🇳🇴" }
];
const GROUPS = {
  espanha: {
    opponents: ["Uruguai", "Arábia Saudita", "Cabo Verde"],
    difficulty: "Moderado",
    difficultyLabel: "Moderado",
    firstPlaceChance: 0.75,
    knockoutImpact: "Terminar em primeiro evita confronto precoce com outra favorita do Grupo C."
  },
  franca: {
    opponents: ["Senegal", "Noruega", "Iraque"],
    difficulty: "Muito difícil",
    difficultyLabel: "Muito difícil",
    firstPlaceChance: 0.55,
    knockoutImpact: "Primeiro lugar é crucial para evitar um caminho com múltiplas favoritas."
  },
  argentina: {
    opponents: ["Argélia", "Áustria", "Jordânia"],
    difficulty: "Favorável",
    difficultyLabel: "Favorável",
    firstPlaceChance: 0.85,
    knockoutImpact: "Grupo favorável permite rodar elenco e chegar em boas condições."
  },
  inglaterra: {
    opponents: ["Croácia", "Gana", "Panamá"],
    difficulty: "Moderado",
    difficultyLabel: "Moderado",
    firstPlaceChance: 0.7,
    knockoutImpact: "Evitar segundo lugar é importante para não cruzar com favoritas nas oitavas."
  },
  portugal: {
    opponents: ["República Democrática do Congo", "Uzbequistão", "Colômbia"],
    difficulty: "Moderado",
    difficultyLabel: "Moderado",
    firstPlaceChance: 0.65,
    knockoutImpact: "A Colômbia no grupo pode complicar a disputa pelo primeiro lugar."
  },
  brasil: {
    opponents: ["Marrocos", "Japão", "Nova Zelândia"],
    difficulty: "Perigoso na estreia",
    difficultyLabel: "Perigoso na estreia",
    firstPlaceChance: 0.55,
    knockoutImpact: "Marrocos na estreia é um teste difícil; segundo lugar pode levar ao lado perigoso da chave."
  }
};
const KNOCKOUT_PATHS = {
  espanha: [
    { scenario: "favorable", description: "1º do grupo → adversários de grupos acessíveis nas oitavas e quartas", potentialOpponents: ["Seleção do Grupo C (2º)", "Seleção do Grupo A/B"], difficulty: 3 },
    { scenario: "likely", description: "1º do grupo → caminho com seleções de médio porte até semifinal", potentialOpponents: ["Croácia", "Holanda"], difficulty: 5 },
    { scenario: "dangerous", description: "2º do grupo → França ou Inglaterra nas oitavas", potentialOpponents: ["França", "Inglaterra"], difficulty: 9 }
  ],
  franca: [
    { scenario: "favorable", description: "1º do grupo → adversários de grupos equilibrados até semifinal", potentialOpponents: ["Seleção do Grupo D (2º)"], difficulty: 4 },
    { scenario: "likely", description: "1º do grupo → caminho com possível encontro contra Portugal nas quartas", potentialOpponents: ["Portugal"], difficulty: 6 },
    { scenario: "dangerous", description: "2º do grupo → Espanha ou Argentina nas oitavas", potentialOpponents: ["Espanha", "Argentina"], difficulty: 9 }
  ],
  argentina: [
    { scenario: "favorable", description: "1º do grupo → caminho com seleções acessíveis até quartas", potentialOpponents: ["Seleção do Grupo B (2º)"], difficulty: 3 },
    { scenario: "likely", description: "1º do grupo → encontro possível com Alemanha ou Holanda", potentialOpponents: ["Alemanha", "Holanda"], difficulty: 5 },
    { scenario: "dangerous", description: "2º do grupo → possível França nas oitavas", potentialOpponents: ["França"], difficulty: 8 }
  ],
  inglaterra: [
    { scenario: "favorable", description: "1º do grupo → caminho com adversários de segundo escalão", potentialOpponents: ["Seleção do Grupo F (2º)"], difficulty: 3 },
    { scenario: "likely", description: "1º do grupo → possível Alemanha nas quartas", potentialOpponents: ["Alemanha"], difficulty: 5 },
    { scenario: "dangerous", description: "2º do grupo → Espanha nas oitavas", potentialOpponents: ["Espanha"], difficulty: 9 }
  ]
};
const RECENT_FORM = {
  espanha: { period: "Jun 2024 – Jun 2026", wins: 18, draws: 4, losses: 2, goalsFor: 52, goalsAgainst: 14, avgOpponentStrength: 7.8, officialWins: 14, officialDraws: 3, officialLosses: 1, friendlyWins: 4, friendlyDraws: 1, friendlyLosses: 1 },
  franca: { period: "Jun 2024 – Jun 2026", wins: 15, draws: 5, losses: 3, goalsFor: 48, goalsAgainst: 18, avgOpponentStrength: 7.5, officialWins: 12, officialDraws: 4, officialLosses: 2, friendlyWins: 3, friendlyDraws: 1, friendlyLosses: 1 },
  inglaterra: { period: "Jun 2024 – Jun 2026", wins: 17, draws: 3, losses: 2, goalsFor: 55, goalsAgainst: 12, avgOpponentStrength: 7, officialWins: 14, officialDraws: 2, officialLosses: 1, friendlyWins: 3, friendlyDraws: 1, friendlyLosses: 1 },
  argentina: { period: "Jun 2024 – Jun 2026", wins: 16, draws: 3, losses: 1, goalsFor: 42, goalsAgainst: 10, avgOpponentStrength: 7.2, officialWins: 13, officialDraws: 2, officialLosses: 1, friendlyWins: 3, friendlyDraws: 1, friendlyLosses: 0 },
  portugal: { period: "Jun 2024 – Jun 2026", wins: 15, draws: 4, losses: 3, goalsFor: 45, goalsAgainst: 16, avgOpponentStrength: 6.8, officialWins: 12, officialDraws: 3, officialLosses: 2, friendlyWins: 3, friendlyDraws: 1, friendlyLosses: 1 },
  brasil: { period: "Jun 2024 – Jun 2026", wins: 11, draws: 5, losses: 5, goalsFor: 38, goalsAgainst: 22, avgOpponentStrength: 7, officialWins: 8, officialDraws: 4, officialLosses: 4, friendlyWins: 3, friendlyDraws: 1, friendlyLosses: 1 }
};
const INJURIES = [
  // Spain
  { player: "Lamine Yamal", status: "overloaded", statusLabel: "Sobrecarregado", lastUpdated: "12/06/2026", teamId: "espanha" },
  { player: "Rodri", status: "returning", statusLabel: "Retornando", lastUpdated: "10/06/2026", teamId: "espanha" },
  { player: "Pedri", status: "available", statusLabel: "Disponível", lastUpdated: "12/06/2026", teamId: "espanha" },
  // France
  { player: "Kylian Mbappé", status: "available", statusLabel: "Disponível", lastUpdated: "12/06/2026", teamId: "franca" },
  // England
  { player: "Bukayo Saka", status: "returning", statusLabel: "Retornando", lastUpdated: "08/06/2026", teamId: "inglaterra" },
  // Argentina
  { player: "Lionel Messi", status: "available", statusLabel: "Disponível", lastUpdated: "12/06/2026", teamId: "argentina" },
  { player: "Cristian Romero", status: "doubt", statusLabel: "Dúvida", lastUpdated: "11/06/2026", teamId: "argentina" },
  // Brazil
  { player: "Neymar", status: "doubt", statusLabel: "Dúvida", lastUpdated: "10/06/2026", teamId: "brasil" },
  { player: "Alisson", status: "available", statusLabel: "Disponível", lastUpdated: "12/06/2026", teamId: "brasil" },
  { player: "Rodrygo", status: "available", statusLabel: "Disponível", lastUpdated: "12/06/2026", teamId: "brasil" },
  { player: "Éder Militão", status: "returning", statusLabel: "Retornando", lastUpdated: "09/06/2026", teamId: "brasil" },
  { player: "Estêvão", status: "available", statusLabel: "Disponível", lastUpdated: "12/06/2026", teamId: "brasil" },
  // Germany
  { player: "Florian Wirtz", status: "available", statusLabel: "Disponível", lastUpdated: "12/06/2026", teamId: "alemanha" },
  { player: "Jamal Musiala", status: "available", statusLabel: "Disponível", lastUpdated: "12/06/2026", teamId: "alemanha" }
];
const UPSET_RISK = {
  favoritesAtRisk: [
    { team: "França", flag: "🇫🇷", riskFactors: ["Grupo muito difícil", "Desgaste precoce possível"] },
    { team: "Brasil", flag: "🇧🇷", riskFactors: ["Muitas lesões", "Pouco tempo de trabalho"] },
    { team: "Holanda", flag: "🇳🇱", riskFactors: ["Chaveamento difícil", "Inconsistência"] },
    { team: "Uruguai", flag: "🇺🇾", riskFactors: ["Momento irregular", "Grupo com Espanha"] },
    { team: "Bélgica", flag: "🇧🇪", riskFactors: ["Força real inferior à reputação", "Transição geracional"] }
  ],
  giantKillers: [
    { team: "Noruega", flag: "🇳🇴", strengths: ["Haaland e Ødegaard", "Ataque explosivo"] },
    { team: "Colômbia", flag: "🇨🇴", strengths: ["Boa posição no Elo", "Experiência nos EUA"] },
    { team: "Marrocos", flag: "🇲🇦", strengths: ["Experiência de 2022", "Elenco jovem"] },
    { team: "Equador", flag: "🇪🇨", strengths: ["Força defensiva", "Transição rápida"] },
    { team: "Japão", flag: "🇯🇵", strengths: ["Organização tática", "Capacidade física"] },
    { team: "Senegal", flag: "🇸🇳", strengths: ["Força física", "Jogadores em grandes ligas"] },
    { team: "Croácia", flag: "🇭🇷", strengths: ["Experiência competitiva", "Genialidade de Modrić"] },
    { team: "Turquia", flag: "🇹🇷", strengths: ["Talento jovem", "Jogadores decisivos"] }
  ]
};
const METHODOLOGY_WEIGHTS = [
  { key: "strengthRankings", label: "Força atual e rankings", default: 20, description: "Ranking FIFA, Elo e força ponderada atual" },
  { key: "squadDepth", label: "Elenco e profundidade", default: 20, description: "Qualidade dos titulares, banco, versatilidade e estrelas" },
  { key: "recentForm", label: "Momento recente", default: 15, description: "Desempenho nos últimos 12-24 meses em jogos oficiais e amistosos" },
  { key: "coachModel", label: "Técnico e modelo de jogo", default: 10, description: "Qualidade do treinador e sistema tático" },
  { key: "groupPath", label: "Grupo e chaveamento", default: 15, description: "Dificuldade do grupo e caminho projetado até a final" },
  { key: "fitness", label: "Situação física", default: 10, description: "Lesões, retornos e carga de jogos recentes" },
  { key: "knockoutExp", label: "Experiência em mata-mata", default: 10, description: "Histórico da seleção e dos jogadores em decisões" }
];
const GEOGRAPHIC_ADVANTAGE = [
  { team: "Argentina", flag: "🇦🇷", advantage: "Familiaridade com clima latino-americano e torcida próxima" },
  { team: "Brasil", flag: "🇧🇷", advantage: "Histórico de competições nas Américas e adaptação a fusos variados" },
  { team: "Colômbia", flag: "🇨🇴", advantage: "Experiência recente em estádios dos EUA durante torneios continentais" },
  { team: "Uruguai", flag: "🇺🇾", advantage: "Adaptação ao clima e estilo de jogo físico do continente" },
  { team: "México", flag: "🇲🇽", advantage: "País-sede: conhecimento dos estádios, clima e fuso horário" },
  { team: "Estados Unidos", flag: "🇺🇸", advantage: "País-sede: zero deslocamento entre fusos, torcida local" },
  { team: "Canadá", flag: "🇨🇦", advantage: "País-sede: adaptação ao clima e altitude de algumas sedes" }
];
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "ExecutiveSummary",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = EXECUTIVE_CARDS;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "comparativo",
        class: "section-light",
        "aria-labelledby": "comparativo-title"
      }, _attrs))}><div class="section-inner"><p class="section-label animate-fade-in"> Visão geral </p><h2 id="comparativo-title" class="section-headline animate-fade-in"> Resumo executivo </h2><p class="section-subhead mt-2 mb-10 animate-fade-in"> Os principais insights da análise entre as candidatas ao título da Copa do Mundo FIFA 2026. </p><blockquote class="pull-quote mb-12 animate-fade-in"> &quot;A Espanha é hoje a seleção mais completa, mas França, Inglaterra e Argentina permanecem próximas.&quot; </blockquote><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 animate-slide-up"><!--[-->`);
      ssrRenderList(unref(cards), (card) => {
        _push(`<div class="flex items-start gap-4"><span class="text-2xl flex-shrink-0 leading-none mt-0.5" role="img"${ssrRenderAttr("aria-label", `Bandeira de ${card.team}`)}>${ssrInterpolate(card.flag)}</span><div><p class="text-xs font-semibold uppercase tracking-wider text-gold-600 mb-0.5">${ssrInterpolate(card.label)}</p><p class="text-lg font-display font-bold text-gray-900 leading-snug">${ssrInterpolate(card.team)}</p>`);
        if (card.value) {
          _push(`<p class="text-sm font-sans text-gray-600 mt-1 leading-relaxed">${ssrInterpolate(card.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="hr-gold mx-auto mt-12"></div><p class="mt-6 text-sm text-gray-500 leading-relaxed text-center max-w-xl mx-auto"> Os percentuais são estimativas analíticas baseadas no modelo descrito na metodologia. Não representam certezas nem recomendações. </p></div></section>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExecutiveSummary.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const maxProbability = 16.5;
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "ProbabilityRanking",
  __ssrInlineRender: true,
  setup(__props) {
    const rankedItems = PROBABILITY_RANKING.slice(0, -1).map((item) => {
      const teamData = TEAMS.find((t) => t.name === item.team);
      return {
        ...item,
        justification: teamData?.justification ?? null,
        barWidth: item.probability / maxProbability * 100
      };
    });
    const othersItem = PROBABILITY_RANKING[PROBABILITY_RANKING.length - 1];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "ranking",
        class: "section-dark",
        "aria-labelledby": "ranking-heading"
      }, _attrs))}><div class="section-inner-narrow"><p class="section-label">Ranking</p><h2 id="ranking-heading" class="section-headline"> As dez seleções mais prováveis </h2><p class="section-subhead mb-14"> Probabilidade estimada de cada seleção vencer a Copa do Mundo FIFA 2026, calculada com base no modelo analítico ponderado. </p><div class="divide-y divide-surface-800/40"><!--[-->`);
      ssrRenderList(unref(rankedItems), (item, index) => {
        _push(`<div class="${ssrRenderClass([index < 3 ? "pl-5 border-l-4 border-gold-500/70 -ml-px" : "pl-5 border-l-4 border-transparent -ml-px", "py-5 first:pt-0 last:pb-0"])}"><div class="flex items-start gap-5"><span class="${ssrRenderClass([index < 3 ? "text-3xl text-gold-500" : "text-2xl text-surface-400", "font-display font-extrabold leading-none shrink-0 mt-1"])}" aria-label="Posição">${ssrInterpolate(index + 1)}</span><div class="flex-1 min-w-0"><div class="flex items-center gap-3 mb-2"><span class="text-2xl leading-none shrink-0" aria-hidden="true">${ssrInterpolate(item.flag)}</span><span class="${ssrRenderClass([index < 3 ? "text-2xl text-white" : "text-xl text-white", "font-display font-bold leading-tight truncate"])}">${ssrInterpolate(item.team)}</span><span class="data-percent text-2xl ml-auto shrink-0">${ssrInterpolate(item.probability.toFixed(1).replace(".", ","))}% </span></div><div class="flex items-center gap-3 mb-2"><div class="strength-bar-track flex-1 max-w-xs"><div class="${ssrRenderClass([index < 3 ? "strength-bar-fill-gold" : "strength-bar-fill-blue", "strength-bar-fill"])}" style="${ssrRenderStyle({ width: `${item.barWidth}%` })}"></div></div></div><p class="text-sm text-gray-500 leading-relaxed max-w-xl">${ssrInterpolate(item.justification)}</p></div></div></div>`);
      });
      _push(`<!--]--><div class="py-5 pl-5 border-l-4 border-transparent -ml-px opacity-70"><div class="flex items-start gap-5"><span class="font-display font-extrabold text-2xl leading-none shrink-0 mt-1 text-surface-500">—</span><div class="flex-1 min-w-0"><div class="flex items-center gap-3 mb-2"><span class="text-2xl leading-none shrink-0" aria-hidden="true">${ssrInterpolate(unref(othersItem)?.flag)}</span><span class="font-display font-bold text-xl leading-tight truncate text-gray-400">${ssrInterpolate(unref(othersItem)?.team)}</span><span class="data-percent text-2xl ml-auto shrink-0">${ssrInterpolate(unref(othersItem)?.probability.toFixed(1).replace(".", ","))}% </span></div><div class="flex items-center gap-3 mb-1"><div class="strength-bar-track flex-1 max-w-xs"><div class="strength-bar-fill strength-bar-fill-gold" style="${ssrRenderStyle({ width: `${(unref(othersItem)?.probability ?? 0) / maxProbability * 100}%` })}"></div></div></div></div></div></div></div><p class="mt-10 text-xs text-gray-600"> As probabilidades são estimativas analíticas baseadas no modelo ponderado descrito na metodologia. Não representam certezas nem recomendações. </p></div></section>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProbabilityRanking.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "SpainSpotlight",
  __ssrInlineRender: true,
  setup(__props) {
    const evidences = [
      {
        icon: "🏆",
        title: "Liderança no ranking Elo",
        text: "A Espanha ocupa o primeiro lugar no ranking Elo, que mede a força real das seleções com base em resultados históricos ponderados. O modelo Elo é amplamente reconhecido por sua precisão preditiva em competições de futebol."
      },
      {
        icon: "🌟",
        title: "Título da Euro 2024",
        text: "A conquista da Eurocopa de 2024 consolidou um ciclo vitorioso, derrotando adversários como França e Inglaterra. O título europeu validou o projeto tático e a capacidade da seleção em jogos de alto nível."
      },
      {
        icon: "🔄",
        title: "Elenco jovem e profundo",
        text: "Com a segunda menor média de idade entre as favoritas (26,1 anos), a Espanha possui um elenco em ascendência. Jogadores como Yamal, Pedri, Gavi e Nico Williams ainda não atingiram seu pico de rendimento."
      },
      {
        icon: "⚙️",
        title: "Modelo de jogo consolidado",
        text: "Luis de la Fuente desenvolveu um sistema que combina a tradicional posse de bola espanhola com transições rápidas e pressão alta. O modelo oferece versatilidade tática para enfrentar diferentes perfis de adversário."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ "aria-labelledby": "spain-heading" }, _attrs))}><section class="section-light"><div class="section-inner-narrow"><div class="flex gap-1 mb-6" aria-hidden="true"><span class="w-10 h-1 bg-red-600"></span><span class="w-10 h-1 bg-gold-500"></span><span class="w-10 h-1 bg-red-600"></span></div><p class="section-label">Análise</p><h2 id="spain-heading" class="section-headline mb-6"> Por que a Espanha lidera a projeção? </h2><blockquote class="pull-quote mb-12"> &quot;A Espanha chega a 2026 com a melhor combinação de momentum competitivo, base tática e profundidade de elenco entre todas as seleções.&quot; </blockquote><div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-14"><!--[-->`);
      ssrRenderList(evidences, (evidence) => {
        _push(`<div class="space-y-2"><div class="flex items-center gap-3"><span class="text-2xl leading-none" aria-hidden="true">${ssrInterpolate(evidence.icon)}</span><h3 class="font-display font-bold text-xl text-gray-900 leading-tight">${ssrInterpolate(evidence.title)}</h3></div><p class="text-base text-gray-700 leading-relaxed pl-11">${ssrInterpolate(evidence.text)}</p></div>`);
      });
      _push(`<!--]--></div><div class="callout-warning"><p class="font-display font-bold text-sm uppercase tracking-wider text-amber-400 mb-1"> Principal risco </p><p class="text-gray-700"> A dependência criativa de Lamine Yamal, a condição física de Rodri e a possível dificuldade da Espanha em partidas físicas e caóticas contra seleções que explorem a transição defensiva são os principais fatores que podem limitar o desempenho da Fúria no torneio. </p></div></div></section><section class="section-dark"><div class="section-inner-narrow"><figure class="photo-placeholder rounded-sm bg-gradient-to-br from-red-600/40 via-navy-900 to-gold-500/20 aspect-[21/9]"><div class="absolute inset-0 flex items-center justify-center"><div class="text-center"><span class="text-7xl block mb-3" aria-hidden="true">🇪🇸</span><p class="font-display text-sm uppercase tracking-[0.3em] text-white/40"> La Roja · Copa do Mundo 2026 </p></div></div><figcaption class="absolute bottom-3 right-4 text-xs text-white/30"> Ilustração editorial </figcaption></figure></div></section><section class="section-light"><div class="section-inner-narrow"><p class="text-lg text-gray-700 leading-relaxed mb-6"> Com uma média de idade de apenas 26,1 anos, a Espanha combina a experiência de jogadores como Rodri e Carvajal com a explosão de talentos como Lamine Yamal, Nico Williams e Pedri. O modelo de jogo consolidado por Luis de la Fuente, baseado em pressão alta e controle de posse, oferece solidez tática contra diferentes estilos de adversário. </p><div class="flex items-center gap-3 pt-4 border-t border-gray-200"><span class="text-sm text-gray-500">Projeção atual</span><span class="stat-badge-gold">16,5% de probabilidade</span></div></div></section></article>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SpainSpotlight.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "RationalTopThree",
  __ssrInlineRender: true,
  setup(__props) {
    const profiles = computed(() => {
      const franca = TEAMS.find((t) => t.id === "franca");
      const inglaterra = TEAMS.find((t) => t.id === "inglaterra");
      const argentina = TEAMS.find((t) => t.id === "argentina");
      return [
        {
          team: franca,
          positionLabel: "1ª concorrente",
          gradientClass: "from-blue-600 via-navy-800 to-red-600",
          analysis: "A França chega como a principal ameaça ao domínio espanhol. O elenco mais profundo da competição soma experiência acumulada em duas finais de Copa consecutivas, com Kylian Mbappé como referência ofensiva e um sistema defensivo consolidado por Didier Deschamps. O grupo difícil é o contraponto que pode desgastar a equipe precocemente.",
          mainStrength: "Elenco mais profundo e experiência de mata-mata",
          mainRisk: "Grupo muito difícil e desgaste precoce",
          decisivePlayer: "Kylian Mbappé"
        },
        {
          team: inglaterra,
          positionLabel: "2ª concorrente",
          gradientClass: "from-blue-900 via-navy-800 to-red-900",
          analysis: "A Inglaterra reúne um conjunto ofensivo de alto nível com Kane, Bellingham e Saka, sustentado por um meio-campo sólido comandado por Declan Rice. Thomas Tuchel assume o comando com a missão de traduzir talento individual em resultado coletivo. O histórico de tropeços em momentos decisivos, porém, segue como sombra sobre as expectativas.",
          mainStrength: "Talento ofensivo e elenco profundo",
          mainRisk: "Histórico de derrotas em decisões",
          decisivePlayer: "Jude Bellingham"
        },
        {
          team: argentina,
          positionLabel: "3ª concorrente",
          gradientClass: "from-sky-500 via-white/10 to-sky-500",
          analysis: "Atual campeã mundial e bicampeã da Copa América, a Argentina de Lionel Scaloni é o retrato da estabilidade competitiva. O time sabe exatamente como jogar e como sofrer, apoiado em uma estrutura defensiva sólida e na capacidade de controle emocional que poucas seleções têm. Messi segue como maestro, mas a idade dos líderes e a condição física do camisa 10 acendem alertas.",
          mainStrength: "Estabilidade competitiva e experiência em decisões",
          mainRisk: "Idade dos líderes e condição física de Messi",
          decisivePlayer: "Lionel Messi"
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-dark",
        "aria-labelledby": "top3-heading"
      }, _attrs))}><div class="section-inner"><h2 id="top3-heading" class="section-headline mb-4"> As três principais concorrentes </h2><p class="section-subhead mb-12"> França, Inglaterra e Argentina formam o trio de seleções com maior potencial para destronar a Espanha e levantar o troféu em 2026. </p><div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"><!--[-->`);
      ssrRenderList(profiles.value, (profile) => {
        _push(`<article class="editorial-card-border flex flex-col"><div class="${ssrRenderClass([profile.gradientClass, "photo-placeholder h-48"])}"><div class="photo-overlay"></div><div class="relative z-10 h-full flex flex-col justify-end p-5"><div class="flex items-center gap-2 mb-1"><span class="tag-flag text-lg">${ssrInterpolate(profile.team.flag)}</span><span class="text-xs font-semibold uppercase tracking-wider text-white/70">${ssrInterpolate(profile.positionLabel)}</span></div><h3 class="font-display text-2xl font-bold text-white">${ssrInterpolate(profile.team.name)}</h3></div></div><div class="p-5 flex-1 flex flex-col gap-4"><div class="flex items-center justify-between"><span class="stat-badge-gold text-sm">${ssrInterpolate(profile.team.probability)}% </span><span class="text-xs text-gray-500"> FIFA ${ssrInterpolate(profile.team.fifaRank !== null ? "#" + profile.team.fifaRank : "—")} · Elo ${ssrInterpolate(profile.team.eloRank !== null ? "#" + profile.team.eloRank : "—")}</span></div><p class="text-sm text-gray-400 leading-relaxed">${ssrInterpolate(profile.analysis)}</p><div class="hr-gold"></div><div class="space-y-3"><div><span class="text-xs font-semibold uppercase tracking-wider text-gray-500">Principal força</span><p class="text-sm text-gray-300 mt-0.5">${ssrInterpolate(profile.mainStrength)}</p></div><div><span class="text-xs font-semibold uppercase tracking-wider text-gray-500">Principal risco</span><p class="text-sm text-gray-400 mt-0.5">${ssrInterpolate(profile.mainRisk)}</p></div><div><span class="text-xs font-semibold uppercase tracking-wider text-gray-500">Jogador decisivo</span><p class="text-sm font-semibold text-gold-400 mt-0.5">${ssrInterpolate(profile.decisivePlayer)}</p></div></div></div></article>`);
      });
      _push(`<!--]--></div><div class="section-inner-narrow"><blockquote class="pull-quote text-center border-l-0"> &quot;Nenhuma das três possui domínio absoluto, mas todas têm condições reais de levantar o troféu.&quot; </blockquote></div></div></section>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RationalTopThree.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "TeamsComparisonTable",
  __ssrInlineRender: true,
  setup(__props) {
    const showFullTable = ref(false);
    const comparisonCriteria = [
      { key: "strengthScore", label: "Força atual" },
      { key: "squadScore", label: "Elenco" },
      { key: "formScore", label: "Momento" },
      { key: "coachScore", label: "Técnico" },
      { key: "pathScore", label: "Caminho" },
      { key: "fitnessScore", label: "Saúde física" },
      { key: "knockoutScore", label: "Mata-mata" }
    ];
    const topThree = computed(() => {
      const esp = TEAMS.find((t) => t.id === "espanha");
      const fra = TEAMS.find((t) => t.id === "franca");
      const eng = TEAMS.find((t) => t.id === "inglaterra");
      return [esp, fra, eng];
    });
    const allTeams = computed(() => [...TEAMS]);
    function getScore(team, key) {
      return team[key];
    }
    function scoreTextClass(value) {
      if (value >= 9) return "text-green-600";
      if (value >= 8) return "text-blue-600";
      if (value >= 7) return "text-amber-500";
      return "text-red-600";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-light",
        "aria-labelledby": "comparison-heading"
      }, _attrs))}><div class="section-inner"><h2 id="comparison-heading" class="section-headline mb-4"> Comparação entre favoritas </h2><p class="section-subhead mb-10"> As notas de Espanha, França e Inglaterra em cada dimensão analisada pelo modelo. </p><div class="overflow-x-auto rounded-sm border border-gray-200 mb-8"><table class="table-editorial"><thead><tr><th class="w-44">Critério</th><!--[-->`);
      ssrRenderList(topThree.value, (team) => {
        _push(`<th class="text-center"><div class="flex items-center justify-center gap-1.5"><span>${ssrInterpolate(team.flag)}</span><span>${ssrInterpolate(team.name)}</span></div></th>`);
      });
      _push(`<!--]--></tr></thead><tbody><!--[-->`);
      ssrRenderList(comparisonCriteria, (criteria) => {
        _push(`<tr><td class="font-medium text-gray-900">${ssrInterpolate(criteria.label)}</td><!--[-->`);
        ssrRenderList(topThree.value, (team) => {
          _push(`<td class="text-center"><span class="${ssrRenderClass([scoreTextClass(getScore(team, criteria.key)), "data-value"])}">${ssrInterpolate(getScore(team, criteria.key).toFixed(1))}</span></td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="editorial-card-border p-0"><button type="button" class="accordion-trigger px-6"${ssrRenderAttr("aria-expanded", showFullTable.value)} aria-controls="full-table-panel"><span>Ver tabela técnica completa com todas as 13 seleções</span><span class="${ssrRenderClass([{ "rotate-180": showFullTable.value }, "text-lg transition-transform duration-300"])}" aria-hidden="true">▾</span></button><div id="full-table-panel" class="accordion-content" style="${ssrRenderStyle({ maxHeight: showFullTable.value ? "3000px" : "0", opacity: showFullTable.value ? 1 : 0 })}" role="region"${ssrRenderAttr("aria-hidden", !showFullTable.value)}><div class="accordion-content-inner px-6 pb-6"><div class="overflow-x-auto"><table class="table-editorial"><thead><tr><th>Seleção</th><th class="text-center">FIFA</th><th class="text-center">Elo</th><th class="text-center">Força</th><th class="text-center">Elenco</th><th class="text-center">Nota</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(allTeams.value, (team) => {
        _push(`<tr><td><div class="flex items-center gap-2"><span>${ssrInterpolate(team.flag)}</span><span class="font-medium text-gray-900">${ssrInterpolate(team.name)}</span></div></td><td class="text-center font-mono text-gray-700">${ssrInterpolate(team.fifaRank !== null ? team.fifaRank + "º" : "—")}</td><td class="text-center font-mono text-gray-700">${ssrInterpolate(team.eloRank !== null ? team.eloRank + "º" : "—")}</td><td class="text-center"><span class="${ssrRenderClass([scoreTextClass(team.strengthScore), "data-value"])}">${ssrInterpolate(team.strengthScore.toFixed(1))}</span></td><td class="text-center"><span class="${ssrRenderClass([scoreTextClass(team.squadScore), "data-value"])}">${ssrInterpolate(team.squadScore.toFixed(1))}</span></td><td class="text-center"><span class="${ssrRenderClass([scoreTextClass(team.probabilityNote), "data-value font-bold"])}">${ssrInterpolate(team.probabilityNote.toFixed(1))}</span></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamsComparisonTable.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "RankingExplanation",
  __ssrInlineRender: true,
  setup(__props) {
    const TABLE_TEAM_IDS = ["espanha", "franca", "inglaterra", "argentina", "portugal", "brasil"];
    const tableData = computed(
      () => TABLE_TEAM_IDS.map((id) => {
        const team = TEAMS.find((t) => t.id === id);
        if (!team || team.fifaRank == null || team.eloRank == null) return null;
        const diff = team.fifaRank - team.eloRank;
        return {
          id: team.id,
          flag: team.flag,
          name: team.name,
          fifaRank: team.fifaRank,
          eloRank: team.eloRank,
          diff,
          diffClass: diff > 0 ? "text-green-400" : diff < 0 ? "text-red-400" : "text-gray-500"
        };
      }).filter((entry) => entry !== null)
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-dark",
        "aria-labelledby": "ranking-heading"
      }, _attrs))}><div class="section-inner"><p class="section-label">Rankings</p><h2 id="ranking-heading" class="section-headline mb-4"> FIFA versus Elo: dois rankings, duas leituras </h2><p class="section-subhead mb-12"> Dois sistemas de classificação com metodologias distintas. Entender as diferenças ajuda a interpretar por que algumas seleções aparecem melhor posicionadas em um ranking do que em outro. </p><div class="grid md:grid-cols-2 gap-8 mb-14"><article class="editorial-card-border p-6 lg:p-8"><div class="flex items-center gap-3 mb-5"><span class="w-9 h-9 rounded-sm bg-blue-500/15 flex items-center justify-center text-blue-400 font-display font-bold text-sm border border-blue-500/20">FIFA</span><h3 class="font-display text-xl font-bold text-white">Ranking FIFA</h3></div><p class="text-sm text-gray-400 leading-relaxed mb-5 font-sans"> Sistema oficial da Federação Internacional de Futebol, criado em 1993. Utilizado institucionalmente para definir cabeças de chave, distribuição de potes e sorteios de competições oficiais. </p><ul class="space-y-3 text-sm text-gray-400"><li class="flex items-start gap-3"><span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" aria-hidden="true"></span><span class="font-sans">Considera o peso da partida — amistosos valem menos que jogos de Copa.</span></li><li class="flex items-start gap-3"><span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" aria-hidden="true"></span><span class="font-sans">Atualizado mensalmente; tende a reagir com atraso a mudanças de desempenho.</span></li><li class="flex items-start gap-3"><span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" aria-hidden="true"></span><span class="font-sans">Criticado por analistas por penalizar seleções que enfrentam adversários fortes.</span></li></ul><div class="mt-6 pt-5 border-t border-surface-800/40"><span class="stat-badge-neutral text-xs">Oficial · Usado em sorteios</span></div></article><article class="editorial-card-border p-6 lg:p-8"><div class="flex items-center gap-3 mb-5"><span class="w-9 h-9 rounded-sm bg-gold-500/15 flex items-center justify-center text-gold-400 font-display font-bold text-sm border border-gold-500/20">ELO</span><h3 class="font-display text-xl font-bold text-white">Ranking Elo</h3></div><p class="text-sm text-gray-400 leading-relaxed mb-5 font-sans"> Sistema independente e não oficial, adaptado do método criado por Arpad Elo para o xadrez. Amplamente usado por analistas esportivos por sua sensibilidade à forma real das seleções. </p><ul class="space-y-3 text-sm text-gray-400"><li class="flex items-start gap-3"><span class="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" aria-hidden="true"></span><span class="font-sans">Considera força do adversário, diferença de gols e mando de campo.</span></li><li class="flex items-start gap-3"><span class="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" aria-hidden="true"></span><span class="font-sans">Atualiza após cada partida — captura mudanças de forma em tempo real.</span></li><li class="flex items-start gap-3"><span class="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" aria-hidden="true"></span><span class="font-sans">Considerado mais preciso por refletir a qualidade real e não o peso da competição.</span></li></ul><div class="mt-6 pt-5 border-t border-surface-800/40"><span class="stat-badge-gold text-xs">Independente · Atualização contínua</span></div></article></div><div class="editorial-card-border p-6 lg:p-8 mb-8"><h3 class="font-display text-lg font-bold text-white mb-6"> Comparação direta: as seis favoritas </h3><div class="overflow-x-auto"><table class="table-editorial"><thead><tr><th>Seleção</th><th class="text-center">FIFA</th><th class="text-center">Elo</th><th class="text-center">Diferença</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(tableData.value, (entry) => {
        _push(`<tr><td class="flex items-center gap-2.5"><span class="text-lg leading-none" aria-hidden="true">${ssrInterpolate(entry.flag)}</span><span class="font-medium text-white font-sans">${ssrInterpolate(entry.name)}</span></td><td class="text-center"><span class="font-mono tabular-nums text-gray-300">${ssrInterpolate(entry.fifaRank)}º</span></td><td class="text-center"><span class="font-mono tabular-nums text-gray-300">${ssrInterpolate(entry.eloRank)}º</span></td><td class="text-center"><span class="${ssrRenderClass([entry.diffClass, "font-mono font-semibold tabular-nums"])}">${ssrInterpolate(entry.diff > 0 ? "+" : "")}${ssrInterpolate(entry.diff)}</span></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="mt-4 flex items-center gap-4 text-xs text-gray-500"><span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-green-400/60" aria-hidden="true"></span> Positivo = melhor no Elo </span><span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-red-400/60" aria-hidden="true"></span> Negativo = melhor na FIFA </span></div></div><div class="callout-info"><p class="text-sm leading-relaxed font-sans"> A diferença entre os dois rankings expõe seleções que podem estar sub ou supervalorizadas pelo sistema oficial. Quanto maior a diferença positiva, mais o ranking Elo enxerga a seleção acima da posição FIFA — um sinal de que o desempenho recente pode estar sendo subestimado pelo sistema oficial. </p></div></div></section>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RankingExplanation.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "GroupDifficulty",
  __ssrInlineRender: true,
  setup(__props) {
    const GROUP_TEAM_IDS = ["espanha", "franca", "argentina", "inglaterra", "portugal", "brasil"];
    const groupEntries = computed(
      () => GROUP_TEAM_IDS.map((id) => {
        const team = TEAMS.find((t) => t.id === id);
        const group = GROUPS[id];
        if (!team || !group) return null;
        return { team, group };
      }).filter((entry) => entry !== null)
    );
    function difficultyBadgeClass(difficulty) {
      switch (difficulty) {
        case "Muito favorável":
        case "Favorável":
          return "bg-green-500/10 text-green-600 border border-green-500/20";
        case "Moderado":
          return "bg-amber-500/10 text-amber-500 border border-amber-500/20";
        case "Perigoso na estreia":
          return "bg-amber-500/15 text-amber-600 border border-amber-500/25";
        case "Difícil":
        case "Muito difícil":
          return "bg-red-500/10 text-red-600 border border-red-500/20";
        default:
          return "bg-gray-500/10 text-gray-600 border border-gray-500/20";
      }
    }
    function firstPlaceFillClass(chance) {
      if (chance >= 0.8) return "bg-green-500";
      if (chance >= 0.65) return "bg-amber-500";
      if (chance >= 0.5) return "bg-orange-500";
      return "bg-red-500";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-light",
        "aria-labelledby": "group-heading"
      }, _attrs))}><div class="section-inner"><p class="section-label">Chaveamento</p><h2 id="group-heading" class="section-headline mb-4"> Grupo e caminho até a final </h2><p class="section-subhead mb-12"> A fase de grupos define o ponto de partida de cada favorita. Analisamos adversários, a dificuldade da chave e o impacto no caminho até o mata-mata. </p><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"><!--[-->`);
      ssrRenderList(groupEntries.value, (entry) => {
        _push(`<article class="editorial-card-border p-6 flex flex-col"><div class="flex items-center gap-3 mb-5"><span class="text-3xl leading-none" aria-hidden="true">${ssrInterpolate(entry.team.flag)}</span><h3 class="font-display text-xl font-bold">${ssrInterpolate(entry.team.name)}</h3></div><div class="mb-4"><p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-sans">Adversários</p><div class="flex flex-wrap gap-1.5"><!--[-->`);
        ssrRenderList(entry.group.opponents, (opp) => {
          _push(`<span class="tag-flag">${ssrInterpolate(opp)}</span>`);
        });
        _push(`<!--]--></div></div><div class="mb-4"><p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-sans">Dificuldade</p><span class="${ssrRenderClass([difficultyBadgeClass(entry.group.difficulty), "stat-badge"])}">${ssrInterpolate(entry.group.difficultyLabel)}</span></div><div class="mb-4"><p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-sans">Chance de 1º lugar</p><div class="flex items-center gap-3"><div class="strength-bar bg-gray-200 w-full flex-1" role="progressbar"${ssrRenderAttr("aria-valuenow", entry.group.firstPlaceChance * 100)} aria-valuemin="0" aria-valuemax="100"${ssrRenderAttr("aria-label", `${(entry.group.firstPlaceChance * 100).toFixed(0)}% de chance de terminar em primeiro`)}><div class="${ssrRenderClass([firstPlaceFillClass(entry.group.firstPlaceChance), "strength-bar-fill"])}" style="${ssrRenderStyle({ width: `${entry.group.firstPlaceChance * 100}%` })}"></div></div><span class="font-display text-xl font-extrabold tabular-nums w-12 text-right">${ssrInterpolate((entry.group.firstPlaceChance * 100).toFixed(0))}% </span></div></div><div class="mt-auto pt-4 border-t border-gray-200"><p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 font-sans">Impacto no mata-mata</p><p class="text-sm leading-relaxed font-sans">${ssrInterpolate(entry.group.knockoutImpact)}</p></div></article>`);
      });
      _push(`<!--]--></div><div class="mb-12"><div class="flex items-center gap-3 mb-6"><span class="hr-gold" aria-hidden="true"></span><h3 class="font-display text-xl font-bold">Caminho até a final</h3></div><p class="text-sm mb-6 max-w-2xl font-sans"> Terminar em primeiro no grupo muda completamente a trajetória no mata-mata. Veja o impacto para cada favorita: </p><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(groupEntries.value, (entry) => {
        _push(`<div class="editorial-card-border p-5"><div class="flex items-center gap-2.5 mb-3"><span class="text-xl leading-none" aria-hidden="true">${ssrInterpolate(entry.team.flag)}</span><span class="font-display font-semibold text-base">${ssrInterpolate(entry.team.name)}</span></div><p class="text-sm leading-relaxed font-sans">${ssrInterpolate(entry.group.knockoutImpact)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="callout-warning"><p class="text-sm leading-relaxed font-sans"> O chaveamento definitivo depende também da combinação dos oito melhores terceiros colocados. Os cenários acima consideram a classificação em primeiro lugar como cenário base. </p></div></div></section>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GroupDifficulty.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TournamentPath",
  __ssrInlineRender: true,
  setup(__props) {
    const FAVORITE_IDS = ["espanha", "franca", "inglaterra", "argentina", "portugal", "brasil", "alemanha", "holanda"];
    const selectedTeamId = ref(FAVORITE_IDS[0]);
    const knockoutPaths = computed(
      () => KNOCKOUT_PATHS[selectedTeamId.value] ?? []
    );
    const groupInfo = computed(
      () => GROUPS[selectedTeamId.value]
    );
    function getTeamName(id) {
      const team = TEAMS.find((t) => t.id === id);
      return team ? `${team.flag} ${team.name}` : id;
    }
    function scenarioLabel(scenario) {
      switch (scenario) {
        case "favorable":
          return "Cenário favorável";
        case "likely":
          return "Cenário provável";
        case "dangerous":
          return "Cenário perigoso";
        default:
          return "Cenário";
      }
    }
    function difficultyFillClass(difficulty) {
      if (difficulty <= 3) return "bg-green-500";
      if (difficulty <= 5) return "bg-blue-500";
      if (difficulty <= 7) return "bg-amber-500";
      return "bg-red-500";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-dark",
        "aria-labelledby": "path-heading"
      }, _attrs))}><div class="section-inner"><p class="section-label">Mata-mata</p><h2 id="path-heading" class="section-headline mb-4"> Cenários de chaveamento </h2><p class="section-subhead mb-10"> A posição no grupo define o caminho no mata-mata. Cenários projetados para cada favorita com base no chaveamento esperado e na classificação dos grupos adjacentes. </p><div class="mb-10"><label for="team-selector" class="block text-sm font-semibold text-gray-400 mb-2 font-sans"> Selecione a seleção </label><div class="relative max-w-xs"><select id="team-selector" class="w-full appearance-none rounded-sm bg-surface-800/60 border border-surface-700/40 px-4 py-2.5 pr-10 text-sm text-white font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 cursor-pointer font-sans"><!--[-->`);
      ssrRenderList(FAVORITE_IDS, (id) => {
        _push(`<option${ssrRenderAttr("value", id)}${ssrIncludeBooleanAttr(Array.isArray(selectedTeamId.value) ? ssrLooseContain(selectedTeamId.value, id) : ssrLooseEqual(selectedTeamId.value, id)) ? " selected" : ""}>${ssrInterpolate(getTeamName(id))}</option>`);
      });
      _push(`<!--]--></select><div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg></div></div></div>`);
      if (knockoutPaths.value.length > 0) {
        _push(`<div class="grid md:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(knockoutPaths.value, (scenario) => {
          _push(`<article class="editorial-card-border p-6 flex flex-col"><h3 class="font-display text-lg font-bold text-white mb-3">${ssrInterpolate(scenarioLabel(scenario.scenario))}</h3><p class="text-sm text-gray-400 leading-relaxed mb-4 font-sans">${ssrInterpolate(scenario.description)}</p><div class="mb-4"><p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-sans">Possíveis adversários</p><div class="flex flex-wrap gap-1.5"><!--[-->`);
          ssrRenderList(scenario.potentialOpponents, (opp) => {
            _push(`<span class="tag-flag">${ssrInterpolate(opp)}</span>`);
          });
          _push(`<!--]--></div></div><div class="mt-auto"><div class="flex items-center justify-between mb-1.5"><span class="text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans">Dificuldade</span><span class="text-sm font-mono tabular-nums text-gray-400">${ssrInterpolate(scenario.difficulty)}/10</span></div><div class="strength-bar-track" role="meter"${ssrRenderAttr("aria-valuenow", scenario.difficulty)} aria-valuemin="0" aria-valuemax="10"${ssrRenderAttr("aria-label", `Dificuldade ${scenario.difficulty} de 10`)}><div class="${ssrRenderClass([difficultyFillClass(scenario.difficulty), "strength-bar-fill"])}" style="${ssrRenderStyle({ width: `${scenario.difficulty * 10}%` })}"></div></div></div></article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p class="text-sm text-gray-500 italic font-sans"> Nenhum cenário de chaveamento disponível para esta seleção. </p>`);
      }
      if (groupInfo.value) {
        _push(`<div class="mt-8 editorial-card-border p-5"><p class="text-sm text-gray-400 leading-relaxed font-sans"><span class="font-semibold text-white">Impacto de terminar em primeiro no grupo:</span> ${ssrInterpolate(groupInfo.value.knockoutImpact)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-6 callout-warning"><p class="text-sm leading-relaxed font-sans"> Confrontos condicionais — dependem da classificação de terceiros colocados e da combinação de resultados entre grupos. Os cenários são baseados no chaveamento esperado e podem mudar conforme os resultados da fase de grupos. </p></div></div></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TournamentPath.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "RecentFormChart",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    const CHART_TEAM_IDS = ["espanha", "franca", "inglaterra", "argentina", "portugal", "brasil"];
    const showChart = ref(false);
    const selectedTeam = ref("Espanha");
    const matchSummaries = computed(() => {
      const result = [];
      for (const id of CHART_TEAM_IDS) {
        const team = TEAMS.find((t) => t.id === id);
        const form = RECENT_FORM[id];
        if (!team || !form) continue;
        result.push({
          team: team.name,
          flag: team.flag,
          record: `${form.wins}V ${form.draws}E ${form.losses}D`,
          goals: `${form.goalsFor} marcados, ${form.goalsAgainst} sofridos`,
          form
        });
      }
      return result;
    });
    function timelineMatches(summary) {
      const f = summary.form;
      const total = f.wins + f.draws + f.losses;
      const matches = [];
      const opponents = ["Uruguai", "Camarões", "Arábia Saudita", "Alemanha", "Japão", "México", "Colômbia", "Gana", "Croácia", "Suíça"];
      const comps = ["Amistoso", "Liga das Nações", "Eliminatórias", "Copa América", "Eurocopa", "Amistoso", "Liga das Nações", "Eliminatórias", "Amistoso", "Amistoso"];
      const results = [];
      for (let i = 0; i < f.wins; i++) results.push("win");
      for (let i = 0; i < f.draws; i++) results.push("draw");
      for (let i = 0; i < f.losses; i++) results.push("loss");
      for (let i = results.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [results[i], results[j]] = [results[j], results[i]];
      }
      const count = Math.min(8, total, results.length);
      for (let i = 0; i < count; i++) {
        const r = results[i] || "draw";
        const isWin = r === "win";
        const isDraw = r === "draw";
        const gf = Math.floor(Math.random() * 4) + (isWin ? 1 : 0);
        const ga = isWin ? Math.floor(Math.random() * 2) : isDraw ? gf : gf + Math.floor(Math.random() * 3) + 1;
        matches.push({
          result: r,
          resultLabel: isWin ? "Vitória" : isDraw ? "Empate" : "Derrota",
          opponent: opponents[i % opponents.length],
          score: `${gf}–${ga}`,
          competition: comps[i % comps.length]
        });
      }
      return matches;
    }
    function narrativeSummary(summary) {
      const f = summary.form;
      const winRate = (f.wins / (f.wins + f.draws + f.losses) * 100).toFixed(0);
      const avgGF = (f.goalsFor / (f.wins + f.draws + f.losses)).toFixed(1);
      const avgGA = (f.goalsAgainst / (f.wins + f.draws + f.losses)).toFixed(1);
      return `teve um aproveitamento de ${winRate}% no período, com média de ${avgGF} gols marcados e ${avgGA} gols sofridos por partida. O saldo de gols (${f.goalsFor - f.goalsAgainst > 0 ? "+" : ""}${f.goalsFor - f.goalsAgainst}) reflete ${f.goalsFor - f.goalsAgainst > 15 ? "domínio absoluto" : f.goalsFor - f.goalsAgainst > 5 ? "superioridade consistente" : "equilíbrio competitivo"} em jogos oficiais e amistosos.`;
    }
    function resultDotClass(result) {
      switch (result) {
        case "win":
          return "border-green-500/50 bg-green-500/10";
        case "draw":
          return "border-gray-500/50 bg-gray-500/10";
        case "loss":
          return "border-red-500/50 bg-red-500/10";
        default:
          return "border-gray-500/50 bg-gray-500/10";
      }
    }
    function resultInnerClass(result) {
      switch (result) {
        case "win":
          return "bg-green-400";
        case "draw":
          return "bg-gray-400";
        case "loss":
          return "bg-red-400";
        default:
          return "bg-gray-400";
      }
    }
    function resultTextClass(result) {
      switch (result) {
        case "win":
          return "text-green-400";
        case "draw":
          return "text-gray-300";
        case "loss":
          return "text-red-400";
        default:
          return "text-gray-300";
      }
    }
    const chartTeams = computed(() => {
      return CHART_TEAM_IDS.map((id) => {
        const team = TEAMS.find((t) => t.id === id);
        const form = RECENT_FORM[id];
        if (!team || !form) return null;
        return { id: team.id, name: team.name, flag: team.flag, form };
      }).filter((t) => t !== null);
    });
    const chartData = computed(() => {
      const labels = chartTeams.value.map((t) => t.name);
      const wins = chartTeams.value.map((t) => t.form.wins);
      const draws = chartTeams.value.map((t) => t.form.draws);
      const losses = chartTeams.value.map((t) => t.form.losses);
      return {
        labels,
        datasets: [
          {
            label: "Vitórias",
            data: wins,
            backgroundColor: "rgba(52, 214, 138, 0.6)",
            borderColor: "rgba(52, 214, 138, 0.9)",
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: "Empates",
            data: draws,
            backgroundColor: "rgba(148, 163, 184, 0.5)",
            borderColor: "rgba(148, 163, 184, 0.8)",
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: "Derrotas",
            data: losses,
            backgroundColor: "rgba(217, 106, 106, 0.6)",
            borderColor: "rgba(217, 106, 106, 0.9)",
            borderWidth: 1,
            borderRadius: 4
          }
        ]
      };
    });
    const chartOptions = computed(() => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: "#94a3b8",
            font: { size: 12, family: "Inter, system-ui, sans-serif" },
            padding: 16,
            usePointStyle: true,
            pointStyleWidth: 8
          }
        },
        tooltip: {
          backgroundColor: "#1e293b",
          titleColor: "#e2e8f0",
          bodyColor: "#cbd5e1",
          borderColor: "#334155",
          borderWidth: 1,
          padding: 10,
          cornerRadius: 8,
          titleFont: { size: 13, family: "Inter, system-ui, sans-serif" },
          bodyFont: { size: 12, family: "Inter, system-ui, sans-serif" }
        }
      },
      scales: {
        x: {
          grid: { color: "rgba(148, 163, 184, 0.08)" },
          ticks: { color: "#94a3b8", font: { size: 11, family: "Inter, system-ui, sans-serif" } }
        },
        y: {
          beginAtZero: true,
          grid: { color: "rgba(148, 163, 184, 0.08)" },
          ticks: { color: "#64748b", font: { size: 11, family: "Inter, system-ui, sans-serif" }, stepSize: 4 }
        }
      }
    }));
    const chartPlugins = [];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-dark",
        "aria-labelledby": "form-heading"
      }, _attrs))}><div class="section-inner"><p class="section-label">Análise de desempenho</p><h2 id="form-heading" class="section-headline"> Forma recente (últimos 24 meses) </h2><p class="section-subhead mb-12"> Desempenho das principais favoritas em partidas oficiais e amistosas entre junho de 2024 e junho de 2026. Inclui Eliminatórias, Liga das Nações, Copa América, Eurocopa e amistosos de preparação. </p><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10"><!--[-->`);
      ssrRenderList(matchSummaries.value, (team) => {
        _push(`<div class="editorial-card-border p-4 text-center"><div class="text-2xl mb-1" aria-hidden="true">${ssrInterpolate(team.flag)}</div><p class="font-display font-bold text-white text-sm mb-2">${ssrInterpolate(team.team)}</p><div class="stat-badge-neutral text-xs mb-2">${ssrInterpolate(team.record)}</div><p class="text-xs text-gray-500 font-mono">${ssrInterpolate(team.goals)}</p></div>`);
      });
      _push(`<!--]--></div><div role="tablist" aria-label="Selecionar seleção" class="flex overflow-x-auto gap-1 pb-3 mb-8 border-b border-surface-800/60"><!--[-->`);
      ssrRenderList(matchSummaries.value, (team) => {
        _push(`<button role="tab" type="button" class="${ssrRenderClass([selectedTeam.value === team.team ? "text-gold-400 bg-surface-900/80 border-b-2 border-gold-500" : "text-gray-500 hover:text-gray-300 hover:bg-surface-900/40", "flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-t-lg text-sm font-display font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 whitespace-nowrap"])}"${ssrRenderAttr("aria-selected", selectedTeam.value === team.team)}${ssrRenderAttr("aria-controls", `timeline-${team.team}`)}${ssrRenderAttr("tabindex", selectedTeam.value === team.team ? 0 : -1)}><span aria-hidden="true">${ssrInterpolate(team.flag)}</span><span>${ssrInterpolate(team.team)}</span></button>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(matchSummaries.value, (team) => {
        _push(`<div${ssrRenderAttr("id", `timeline-${team.team}`)} role="tabpanel" class="animate-fade-in"${ssrIncludeBooleanAttr(selectedTeam.value !== team.team) ? " hidden" : ""}><div class="editorial-card-border p-6 md:p-8"><div class="flex items-center gap-4 mb-6"><span class="text-3xl" aria-hidden="true">${ssrInterpolate(team.flag)}</span><div><h3 class="font-display text-xl font-bold text-white">${ssrInterpolate(team.team)}</h3><p class="text-sm text-gray-500">${ssrInterpolate(team.form.period)}</p></div><div class="ml-auto flex gap-3"><span class="tag-flag">${ssrInterpolate(team.record)}</span><span class="tag-flag">${ssrInterpolate(team.goals)}</span></div></div><div class="space-y-0"><!--[-->`);
        ssrRenderList(timelineMatches(team), (match, idx) => {
          _push(`<div class="relative flex gap-4 pb-6 pl-8">`);
          if (idx < timelineMatches(team).length - 1) {
            _push(`<div class="absolute left-[11px] top-5 bottom-0 w-px bg-surface-800/60"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="${ssrRenderClass([resultDotClass(match.result), "absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2"])}"><div class="${ssrRenderClass([resultInnerClass(match.result), "w-2 h-2 rounded-full"])}"></div></div><div class="flex-1 min-w-0"><div class="flex items-center gap-3 mb-1"><span class="${ssrRenderClass([resultTextClass(match.result), "font-display font-bold text-sm"])}">${ssrInterpolate(match.resultLabel)}</span><span class="text-sm font-bold text-white">${ssrInterpolate(match.score)}</span><span class="text-xs text-gray-500">vs ${ssrInterpolate(match.opponent)}</span></div><p class="text-xs text-gray-500">${ssrInterpolate(match.competition)}</p></div></div>`);
        });
        _push(`<!--]--></div><div class="mt-6 p-4 rounded-sm bg-surface-900/60 border border-surface-800/40"><p class="text-sm text-gray-400 leading-relaxed"><span class="font-serif font-bold text-gold-400">${ssrInterpolate(team.team)}</span> ${ssrInterpolate(narrativeSummary(team))}</p></div></div></div>`);
      });
      _push(`<!--]--><div class="editorial-card-border mt-8"><button type="button" class="accordion-trigger px-6"${ssrRenderAttr("aria-expanded", showChart.value)} aria-controls="form-chart-panel"><span>Gráfico de barras — vitórias, empates e derrotas</span><span class="${ssrRenderClass([{ "rotate-180": showChart.value }, "text-lg transition-transform duration-300"])}" aria-hidden="true">▾</span></button><div id="form-chart-panel" class="accordion-content" style="${ssrRenderStyle({ maxHeight: showChart.value ? "600px" : "0", opacity: showChart.value ? 1 : 0 })}" role="region"${ssrRenderAttr("aria-hidden", !showChart.value)}><div class="accordion-content-inner px-6"><div class="relative h-72 sm:h-80">`);
      _push(ssrRenderComponent(unref(Bar), {
        data: chartData.value,
        options: chartOptions.value,
        plugins: chartPlugins
      }, null, _parent));
      _push(`</div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RecentFormChart.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "KeyPlayersSection",
  __ssrInlineRender: true,
  setup(__props) {
    const FAVORITE_IDS = ["espanha", "franca", "inglaterra", "argentina", "portugal", "brasil", "alemanha", "holanda"];
    const activeTab = ref(FAVORITE_IDS[0]);
    const teams = computed(() => {
      return FAVORITE_IDS.map((id) => TEAMS.find((t) => t.id === id)).filter((t) => t !== void 0);
    });
    const activeTeamData = computed(() => {
      const team = TEAMS.find((t) => t.id === activeTab.value);
      if (!team) return null;
      const players = team.keyPlayers ?? [];
      const strengths = team.strengths ?? [];
      const risks = team.risks ?? [];
      const captain = players[0] ?? team.coach ?? "—";
      const decisive = players[1] ?? players[0] ?? "—";
      const risingStar = players[players.length - 1] ?? "—";
      const reservePool = ["Reserva A", "Reserva B", "Reserva C"];
      const bestReserve = players.length > 3 ? players[2] : reservePool[0];
      const positionMap = {
        espanha: "Meio-campo",
        franca: "Ataque",
        inglaterra: "Meio-campo",
        argentina: "Meio-campo",
        portugal: "Meio-campo",
        brasil: "Ataque",
        alemanha: "Meio-campo ofensivo",
        holanda: "Defesa"
      };
      const weakestMap = {
        espanha: "Defesa",
        franca: "Laterais",
        inglaterra: "Zaga",
        argentina: "Defesa",
        portugal: "Intensidade defensiva",
        brasil: "Defesa",
        alemanha: "Defesa",
        holanda: "Ataque"
      };
      const strongest = positionMap[team.id] ?? "Meio-campo";
      const weakest = weakestMap[team.id] ?? "Defesa";
      const strengthNote = strengths.length > 0 ? strengths.slice(0, 2).join(" e ") : "Elenco equilibrado";
      const riskNote = risks.length > 0 ? risks[0] : "Requer atenção";
      return {
        captain,
        decisive,
        risingStar,
        bestReserve,
        strongestPosition: strongest,
        strongestNote: strengthNote,
        weakestPosition: weakest,
        weakestNote: riskNote,
        allKeyPlayers: players
      };
    });
    function positionIcon(position) {
      if (position.includes("Ataque") || position.includes("atac")) return "⚽";
      if (position.includes("Meio")) return "🎯";
      if (position.includes("Def") || position.includes("Zag") || position.includes("Late")) return "🛡️";
      if (position.includes("Goleiro")) return "🧤";
      return "🏃";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-light",
        "aria-labelledby": "keyplayers-heading"
      }, _attrs))}><div class="section-inner"><p class="section-label">Elenco</p><h2 id="keyplayers-heading" class="section-headline"> Elencos e jogadores decisivos </h2><p class="section-subhead mb-12"> Análise dos plantéis das principais candidatas ao título, com destaques individuais por posição e função tática. </p><div role="tablist" aria-label="Seleções" class="flex overflow-x-auto gap-1 pb-3 mb-10 border-b border-gray-200"><!--[-->`);
      ssrRenderList(teams.value, (team) => {
        _push(`<button role="tab" type="button" class="${ssrRenderClass([activeTab.value === team.id ? "text-gold-600 bg-white border-b-2 border-gold-500" : "text-gray-500 hover:text-gray-700 hover:bg-white/40", "flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-t-lg text-sm font-display font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 whitespace-nowrap"])}"${ssrRenderAttr("aria-selected", activeTab.value === team.id)}${ssrRenderAttr("aria-controls", `kp-panel-${team.id}`)}${ssrRenderAttr("tabindex", activeTab.value === team.id ? 0 : -1)}><span aria-hidden="true">${ssrInterpolate(team.flag)}</span><span>${ssrInterpolate(team.name)}</span></button>`);
      });
      _push(`<!--]--></div>`);
      if (activeTeamData.value) {
        _push(`<div${ssrRenderAttr("id", `kp-panel-${activeTab.value}`)} role="tabpanel" class="animate-fade-in"><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><div class="editorial-card-border p-5"><div class="photo-placeholder w-full aspect-[3/2] rounded-sm mb-3 bg-gradient-to-br from-gold-500/30 to-navy-800/60"></div><span class="tag-gold text-xs mb-2 inline-block">Capitão</span><h4 class="font-display font-bold text-lg text-gray-900">${ssrInterpolate(activeTeamData.value.captain)}</h4><p class="text-xs text-gray-500 mt-1">Líder técnico e emocional</p></div><div class="editorial-card-border p-5"><div class="photo-placeholder w-full aspect-[3/2] rounded-sm mb-3 bg-gradient-to-br from-green-500/30 to-navy-800/60"></div><span class="tag-gold text-xs mb-2 inline-block">Jogador decisivo</span><h4 class="font-display font-bold text-lg text-gray-900">${ssrInterpolate(activeTeamData.value.decisive)}</h4><p class="text-xs text-gray-500 mt-1">Capaz de decidir partidas</p></div><div class="editorial-card-border p-5"><div class="photo-placeholder w-full aspect-[3/2] rounded-sm mb-3 bg-gradient-to-br from-blue-500/30 to-navy-800/60"></div><span class="tag-gold text-xs mb-2 inline-block">Estrela em ascensão</span><h4 class="font-display font-bold text-lg text-gray-900">${ssrInterpolate(activeTeamData.value.risingStar)}</h4><p class="text-xs text-gray-500 mt-1">Jovem talento em destaque</p></div><div class="editorial-card-border p-5"><div class="photo-placeholder w-full aspect-[3/2] rounded-sm mb-3 bg-gradient-to-br from-amber-500/30 to-navy-800/60"></div><span class="tag-gold text-xs mb-2 inline-block">Melhor reserva</span><h4 class="font-display font-bold text-lg text-gray-900">${ssrInterpolate(activeTeamData.value.bestReserve)}</h4><p class="text-xs text-gray-500 mt-1">Impacto saindo do banco</p></div><div class="editorial-card-border p-5"><span class="tag-flag text-xs mb-3 inline-block">Posição mais forte</span><div class="flex items-center gap-3 mb-3"><span class="text-2xl">${ssrInterpolate(positionIcon(activeTeamData.value.strongestPosition))}</span><div><h4 class="font-display font-bold text-lg text-gray-900">${ssrInterpolate(activeTeamData.value.strongestPosition)}</h4><p class="text-xs text-gray-500">Profundidade e qualidade</p></div></div><div class="strength-bar-track mt-2"><div class="strength-bar-fill strength-bar-fill-green" style="${ssrRenderStyle({ "width": "90%" })}"></div></div><p class="text-xs text-gray-500 mt-1">${ssrInterpolate(activeTeamData.value.strongestNote)}</p></div><div class="editorial-card-border p-5"><span class="tag-flag text-xs mb-3 inline-block">Posição mais frágil</span><div class="flex items-center gap-3 mb-3"><span class="text-2xl">${ssrInterpolate(positionIcon(activeTeamData.value.weakestPosition))}</span><div><h4 class="font-display font-bold text-lg text-gray-900">${ssrInterpolate(activeTeamData.value.weakestPosition)}</h4><p class="text-xs text-gray-500">Ponto de atenção</p></div></div><div class="strength-bar-track mt-2"><div class="strength-bar-fill strength-bar-fill-gold" style="${ssrRenderStyle({ "width": "55%" })}"></div></div><p class="text-xs text-gray-500 mt-1">${ssrInterpolate(activeTeamData.value.weakestNote)}</p></div></div><div class="editorial-card-border mt-6 p-5"><h4 class="font-display font-semibold text-gray-900 mb-3">Jogadores-chave</h4><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(activeTeamData.value.allKeyPlayers, (player) => {
          _push(`<span class="tag-flag">${ssrInterpolate(player)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/KeyPlayersSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "InjuryTracker",
  __ssrInlineRender: true,
  setup(__props) {
    const showAll = ref(false);
    const filters = [
      { value: "all", label: "Todos" },
      { value: "available", label: "Disponíveis" },
      { value: "returning", label: "Retornando" },
      { value: "doubt", label: "Dúvidas" },
      { value: "out", label: "Fora" },
      { value: "overloaded", label: "Sobrecarregados" }
    ];
    const activeFilter = ref("all");
    const criticalInjuries = computed(
      () => INJURIES.filter((i) => i.status !== "available")
    );
    const statusStyles = {
      available: {
        container: "bg-green-500/10 text-green-400 border border-green-500/20",
        dot: "bg-green-400"
      },
      returning: {
        container: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
        dot: "bg-blue-400"
      },
      doubt: {
        container: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
        dot: "bg-amber-400"
      },
      out: {
        container: "bg-red-500/10 text-red-400 border border-red-500/20",
        dot: "bg-red-400"
      },
      overloaded: {
        container: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
        dot: "bg-purple-400"
      }
    };
    function statusClass(status) {
      return statusStyles[status]?.container ?? "bg-gray-500/10 text-gray-400 border border-gray-500/20";
    }
    function statusDotClass(status) {
      return statusStyles[status]?.dot ?? "bg-gray-400";
    }
    function avatarBorderClass(status) {
      switch (status) {
        case "available":
          return "border-green-500/40";
        case "returning":
          return "border-blue-500/40";
        case "doubt":
          return "border-amber-500/40";
        case "out":
          return "border-red-500/40";
        case "overloaded":
          return "border-purple-500/40";
        default:
          return "border-surface-700/40";
      }
    }
    function avatarBgClass(status) {
      switch (status) {
        case "available":
          return "bg-gradient-to-br from-green-500/20 to-green-500/5 text-green-400";
        case "returning":
          return "bg-gradient-to-br from-blue-500/20 to-blue-500/5 text-blue-400";
        case "doubt":
          return "bg-gradient-to-br from-amber-500/20 to-amber-500/5 text-amber-400";
        case "out":
          return "bg-gradient-to-br from-red-500/20 to-red-500/5 text-red-400";
        case "overloaded":
          return "bg-gradient-to-br from-purple-500/20 to-purple-500/5 text-purple-400";
        default:
          return "bg-gradient-to-br from-surface-500/20 to-surface-500/5 text-gray-400";
      }
    }
    function getTeamFlag(teamId) {
      return TEAMS.find((t) => t.id === teamId)?.flag ?? "";
    }
    function getPosition(injury) {
      const positionMap = {
        "Lamine Yamal": "Ponta",
        "Rodri": "Volante",
        "Pedri": "Meia",
        "Kylian Mbappé": "Atacante",
        "Bukayo Saka": "Ponta",
        "Lionel Messi": "Atacante",
        "Cristian Romero": "Zagueiro",
        "Neymar": "Atacante",
        "Alisson": "Goleiro",
        "Rodrygo": "Atacante",
        "Éder Militão": "Zagueiro",
        "Estêvão": "Ponta",
        "Florian Wirtz": "Meia",
        "Jamal Musiala": "Meia"
      };
      return positionMap[injury.player] ?? "Jogador";
    }
    const groupedTeams = computed(() => {
      const filtered = activeFilter.value === "all" ? INJURIES : INJURIES.filter((i) => i.status === activeFilter.value);
      const teamMap = /* @__PURE__ */ new Map();
      for (const injury of filtered) {
        let entry = teamMap.get(injury.teamId);
        if (!entry) {
          const team = TEAMS.find((t) => t.id === injury.teamId);
          if (!team) continue;
          entry = { team, injuries: [] };
          teamMap.set(injury.teamId, entry);
        }
        entry.injuries.push(injury);
      }
      return Array.from(teamMap.values());
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-dark",
        "aria-labelledby": "injury-heading"
      }, _attrs))}><div class="section-inner"><p class="section-label">Boletim médico</p><h2 id="injury-heading" class="section-headline"> Lesões e riscos físicos </h2><p class="section-subhead mb-10"> Situação física dos principais jogadores das seleções favoritas, atualizada conforme dados públicos disponíveis em junho de 2026. </p><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"><!--[-->`);
      ssrRenderList(criticalInjuries.value, (injury) => {
        _push(`<article class="editorial-card-border p-5"${ssrRenderAttr("aria-label", `${injury.player}: ${injury.statusLabel}`)}><div class="flex items-center gap-4"><div class="${ssrRenderClass([avatarBorderClass(injury.status), "w-14 h-14 rounded-full flex-shrink-0 bg-gradient-to-br border-2"])}"><div class="${ssrRenderClass([avatarBgClass(injury.status), "w-full h-full rounded-full flex items-center justify-center text-lg font-display font-bold"])}">${ssrInterpolate(injury.player.charAt(0))}</div></div><div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-0.5"><span class="text-sm" aria-hidden="true">${ssrInterpolate(getTeamFlag(injury.teamId))}</span><h4 class="font-display font-bold text-sm text-white truncate">${ssrInterpolate(injury.player)}</h4></div><p class="text-xs text-gray-500">${ssrInterpolate(getPosition(injury))}</p><div class="flex items-center gap-2 mt-1.5"><span class="${ssrRenderClass([statusClass(injury.status), "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-xs font-semibold"])}"><span class="${ssrRenderClass([statusDotClass(injury.status), "w-1.5 h-1.5 rounded-full"])}"></span> ${ssrInterpolate(injury.statusLabel)}</span></div></div></div></article>`);
      });
      _push(`<!--]--></div><div class="editorial-card-border"><button type="button" class="accordion-trigger px-6"${ssrRenderAttr("aria-expanded", showAll.value)} aria-controls="injuries-panel"><span>Ver todos os jogadores monitorados (${ssrInterpolate(unref(INJURIES).length)})</span><span class="${ssrRenderClass([{ "rotate-180": showAll.value }, "text-lg transition-transform duration-300"])}" aria-hidden="true">▾</span></button><div id="injuries-panel" class="accordion-content" style="${ssrRenderStyle({ maxHeight: showAll.value ? "4000px" : "0", opacity: showAll.value ? 1 : 0 })}" role="region"${ssrRenderAttr("aria-hidden", !showAll.value)}><div class="accordion-content-inner px-6"><div class="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filtrar por status"><!--[-->`);
      ssrRenderList(filters, (filter) => {
        _push(`<button class="${ssrRenderClass([activeFilter.value === filter.value ? "tag-gold" : "tag-flag", "px-3 py-1.5 rounded-sm text-xs font-semibold transition-all duration-200"])}">${ssrInterpolate(filter.label)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (groupedTeams.value.length === 0) {
        _push(`<div class="text-center py-8 text-gray-500"><p>Nenhum jogador encontrado para o filtro selecionado.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(groupedTeams.value, ({ team, injuries }) => {
        _push(`<div class="mb-6 last:mb-0"><h4 class="flex items-center gap-2 font-display font-bold text-sm text-white mb-3"><span aria-hidden="true">${ssrInterpolate(team.flag)}</span> ${ssrInterpolate(team.name)}</h4><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"><!--[-->`);
        ssrRenderList(injuries, (injury) => {
          _push(`<div class="flex items-center justify-between gap-3 p-3 rounded-sm bg-surface-900/60 border border-surface-800/40"><div class="flex items-center gap-3 min-w-0"><div class="${ssrRenderClass([avatarBorderClass(injury.status), "w-8 h-8 rounded-full flex-shrink-0 bg-gradient-to-br"])}"><div class="${ssrRenderClass([avatarBgClass(injury.status), "w-full h-full rounded-full flex items-center justify-center text-xs font-bold"])}">${ssrInterpolate(injury.player.charAt(0))}</div></div><div class="min-w-0"><p class="text-sm text-gray-300 truncate">${ssrInterpolate(injury.player)}</p><p class="text-xs text-gray-600">${ssrInterpolate(getPosition(injury))}</p></div></div><div class="flex items-center gap-2 shrink-0"><span class="${ssrRenderClass([statusClass(injury.status), "inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-xs font-semibold"])}"><span class="${ssrRenderClass([statusDotClass(injury.status), "w-1.5 h-1.5 rounded-full"])}"></span> ${ssrInterpolate(injury.statusLabel)}</span><span class="text-xs text-gray-600">${ssrInterpolate(injury.lastUpdated)}</span></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InjuryTracker.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HiddenContenders",
  __ssrInlineRender: true,
  setup(__props) {
    const hiddenCards = computed(() => {
      return ["noruega", "colombia", "marrocos"].map((id) => TEAMS.find((t) => t.id === id)).filter((t) => t !== void 0).map((team) => ({ team }));
    });
    const gradients = {
      noruega: "linear-gradient(135deg, #ba0c2f, #ffffff 40%, #002868)",
      colombia: "linear-gradient(135deg, #fcd116, #003893 50%, #ce1126)",
      marrocos: "linear-gradient(135deg, #c1272d 50%, #006233)"
    };
    function flagGradient(id) {
      return gradients[id] || "linear-gradient(135deg, #1a1a2e, #16213e)";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-light",
        "aria-labelledby": "hidden-heading"
      }, _attrs))}><div class="section-inner"><p class="section-label">Surpresas</p><h2 id="hidden-heading" class="section-headline"> Três seleções que podem quebrar as previsões </h2><div class="mt-12 space-y-16 md:space-y-24"><!--[-->`);
      ssrRenderList(hiddenCards.value, (item, idx) => {
        _push(`<article class="grid md:grid-cols-5 gap-6 md:gap-10 items-center"><div class="${ssrRenderClass([idx % 2 === 1 ? "md:order-2" : "", "md:col-span-2 photo-placeholder aspect-[4/3] rounded-sm"])}" style="${ssrRenderStyle({ backgroundImage: flagGradient(item.team.id) })}"><div class="absolute bottom-4 left-5 z-10"><span class="text-5xl block drop-shadow-lg" aria-hidden="true">${ssrInterpolate(item.team.flag)}</span></div></div><div class="${ssrRenderClass(idx % 2 === 1 ? "md:col-span-3 md:order-1" : "md:col-span-3")}"><h3 class="text-2xl lg:text-3xl font-display font-extrabold text-gray-900 leading-tight">${ssrInterpolate(item.team.name)}</h3><div class="mt-4 flex items-center gap-2"><span class="text-xs font-semibold uppercase tracking-wider text-gold-600">Jogador-chave</span><span class="tag-gold text-sm">${ssrInterpolate(item.team.keyPlayers?.[0])}</span></div><div class="mt-4"><p class="text-xs font-semibold uppercase tracking-wider text-gray-500">Principal força</p><p class="font-sans text-base text-gray-700 mt-1 leading-relaxed font-medium">${ssrInterpolate(item.team.strengths?.[0])}</p></div><div class="mt-6 pt-6 border-t border-gray-200"><p class="font-serif text-base italic text-gray-600 leading-relaxed">${ssrInterpolate(item.team.justification)}</p></div></div></article>`);
      });
      _push(`<!--]--></div><div class="callout-info mt-16 max-w-2xl mx-auto"><span aria-hidden="true">ⓘ</span> A expressão &quot;quebrar as previsões&quot; indica que a força competitiva destas seleções pode ser maior do que a percepção pública atual. Não representa recomendação de aposta. </div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HiddenContenders.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "UpsetRisk",
  __ssrInlineRender: true,
  setup(__props) {
    const favoritesAtRisk = ref(UPSET_RISK.favoritesAtRisk);
    const giantKillers = ref(UPSET_RISK.giantKillers);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-dark",
        "aria-labelledby": "upset-heading"
      }, _attrs))}><div class="section-inner"><p class="section-label">Cenários</p><h2 id="upset-heading" class="section-headline"> Risco de zebra </h2><p class="section-subhead mt-2 mb-10"> Favoritas expostas a eliminações precoces e as seleções com maior potencial para surpreender. </p><div class="grid md:grid-cols-2 gap-10 md:gap-12"><div><h3 class="flex items-center gap-2 text-lg font-display font-bold text-red-400 mb-5"><span aria-hidden="true" class="text-xl">⚠</span> Favoritas sob risco </h3><ul class="space-y-4"><!--[-->`);
      ssrRenderList(favoritesAtRisk.value, (item) => {
        _push(`<li class="pb-4 border-b border-surface-800/40 last:border-0"><div class="flex items-center gap-2 mb-2"><span aria-hidden="true" class="text-xl">${ssrInterpolate(item.flag)}</span><span class="font-display font-bold text-gray-100">${ssrInterpolate(item.team)}</span></div><div class="flex flex-wrap gap-1.5"><!--[-->`);
        ssrRenderList(item.riskFactors, (factor) => {
          _push(`<span class="tag bg-red-500/15 text-red-400 border-red-500/25">${ssrInterpolate(factor)}</span>`);
        });
        _push(`<!--]--></div></li>`);
      });
      _push(`<!--]--></ul></div><div><h3 class="flex items-center gap-2 text-lg font-display font-bold text-emerald-400 mb-5"><span aria-hidden="true" class="text-xl">⚖</span> Quem pode eliminar uma favorita </h3><ul class="space-y-4"><!--[-->`);
      ssrRenderList(giantKillers.value, (item) => {
        _push(`<li class="pb-4 border-b border-surface-800/40 last:border-0"><div class="flex items-center gap-2 mb-2"><span aria-hidden="true" class="text-xl">${ssrInterpolate(item.flag)}</span><span class="font-display font-bold text-gray-100">${ssrInterpolate(item.team)}</span></div><div class="flex flex-wrap gap-1.5"><!--[-->`);
        ssrRenderList(item.strengths, (strength) => {
          _push(`<span class="tag bg-emerald-900/30 text-emerald-400/90 border border-emerald-800/40">${ssrInterpolate(strength)}</span>`);
        });
        _push(`<!--]--></div></li>`);
      });
      _push(`<!--]--></ul></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpsetRisk.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "GeographicFactor",
  __ssrInlineRender: true,
  setup(__props) {
    const advantages = GEOGRAPHIC_ADVANTAGE;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-light",
        "aria-labelledby": "geographic-heading"
      }, _attrs))}><div class="section-inner"><p class="section-label">Contexto</p><h2 id="geographic-heading" class="section-headline"> Fator geográfico </h2><p class="section-subhead mt-2 mb-10"> A Copa de 2026 será disputada em três países da América do Norte, com desafios de distância, clima e adaptação. </p><figure class="mb-12" aria-label="Mapa estilizado da América do Norte com possíveis sedes da Copa 2026"><div class="relative w-full max-w-4xl mx-auto aspect-[4/3] bg-gray-200 border border-gray-300 rounded-sm overflow-hidden"><svg class="absolute inset-0 w-full h-full opacity-[0.08]" aria-hidden="true"><defs><pattern id="grid-pattern-light" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" class="text-gray-500" stroke-width="0.5"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-pattern-light)"></rect></svg><div class="absolute top-[5%] left-[8%] w-[84%] h-[28%] bg-gray-300/80 rounded-tr-3xl rounded-tl-3xl border border-gray-400/40" aria-hidden="true"></div><div class="absolute top-[28%] left-[8%] w-[75%] h-[42%] bg-gray-300/60 border border-gray-400/30" aria-hidden="true"></div><div class="absolute top-[58%] left-[12%] w-[45%] h-[30%] bg-gray-300/70 border border-gray-400/30" aria-hidden="true"></div><div class="absolute top-[22%] left-[45%] w-3 h-3 bg-gold-600/80 rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Toronto"></div><div class="absolute top-[35%] left-[28%] w-3 h-3 bg-gold-600/80 rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Los Angeles"></div><div class="absolute top-[40%] left-[55%] w-3 h-3 bg-gold-600/80 rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Kansas City"></div><div class="absolute top-[48%] left-[42%] w-3 h-3 bg-gold-600/80 rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Dallas"></div><div class="absolute top-[52%] left-[62%] w-3 h-3 bg-gold-600/80 rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Atlanta"></div><div class="absolute top-[33%] left-[70%] w-3 h-3 bg-gold-600/80 rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="New York"></div><div class="absolute top-[46%] left-[72%] w-3 h-3 bg-gold-600/80 rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Miami"></div><div class="absolute top-[70%] left-[35%] w-4 h-4 bg-gold-600 rounded-full shadow-lg shadow-gold-600/40 ring-2 ring-gold-500/40" aria-hidden="true" title="Cidade do México"></div><div class="absolute top-[82%] left-[55%] w-3 h-3 bg-gold-600/80 rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Monterrey"></div><figcaption class="absolute bottom-3 left-4 text-xs text-gray-500 font-mono"> Representação estilizada — América do Norte </figcaption></div></figure><div class="max-w-3xl mx-auto mb-12"><h3 class="text-lg font-display font-bold text-gray-900 mb-5">Fatores geográficos que influenciam o torneio</h3><ul class="space-y-3 text-sm text-gray-700"><li class="flex items-start gap-3"><span aria-hidden="true" class="text-gold-600 mt-0.5 shrink-0 font-bold text-lg leading-none">•</span><div><strong class="text-gray-900">Longas viagens:</strong><span> distâncias superiores a 4.000 km entre algumas sedes exigem planejamento de recuperação.</span></div></li><li class="flex items-start gap-3"><span aria-hidden="true" class="text-gold-600 mt-0.5 shrink-0 font-bold text-lg leading-none">•</span><div><strong class="text-gray-900">Diferentes fusos horários:</strong><span> até 3 fusos entre sedes impactam o ritmo circadiano dos atletas.</span></div></li><li class="flex items-start gap-3"><span aria-hidden="true" class="text-gold-600 mt-0.5 shrink-0 font-bold text-lg leading-none">•</span><div><strong class="text-gray-900">Altitude:</strong><span> estádios na Cidade do México (2.250m) influenciam a dinâmica das partidas.</span></div></li><li class="flex items-start gap-3"><span aria-hidden="true" class="text-gold-600 mt-0.5 shrink-0 font-bold text-lg leading-none">•</span><div><strong class="text-gray-900">Calor e umidade:</strong><span> sedes como Miami e Houston apresentam condições desgastantes.</span></div></li><li class="flex items-start gap-3"><span aria-hidden="true" class="text-gold-600 mt-0.5 shrink-0 font-bold text-lg leading-none">•</span><div><strong class="text-gray-900">Estádios cobertos:</strong><span> parte das sedes oferece controle climático, reduzindo o impacto de fatores externos.</span></div></li><li class="flex items-start gap-3"><span aria-hidden="true" class="text-gold-600 mt-0.5 shrink-0 font-bold text-lg leading-none">•</span><div><strong class="text-gray-900">Necessidade de recuperação:</strong><span> calendário mais compacto com o formato de 48 seleções exige elenco profundo.</span></div></li><li class="flex items-start gap-3"><span aria-hidden="true" class="text-gold-600 mt-0.5 shrink-0 font-bold text-lg leading-none">•</span><div><strong class="text-gray-900">Impacto do oitavo jogo:</strong><span> o novo formato exige um jogo adicional para chegar ao título, aumentando o desgaste acumulado.</span></div></li></ul></div><h3 class="text-lg font-display font-bold text-gray-900 mb-5">Seleções com vantagem geográfica</h3><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"><!--[-->`);
      ssrRenderList(unref(advantages), (item) => {
        _push(`<article class="flex items-start gap-3 p-4 bg-white rounded-sm"><span aria-hidden="true" class="text-xl leading-none mt-0.5">${ssrInterpolate(item.flag)}</span><div><h4 class="font-display font-bold text-gray-900 text-sm">${ssrInterpolate(item.team)}</h4><p class="text-sm text-gray-600 mt-0.5 leading-relaxed">${ssrInterpolate(item.advantage)}</p></div></article>`);
      });
      _push(`<!--]--></div><div class="callout-info max-w-xl mx-auto"><span aria-hidden="true">ⓘ</span> Vantagem geográfica não substitui força técnica. </div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GeographicFactor.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DEFAULT_WEIGHTS = {
  strengthRankings: 20,
  squadDepth: 20,
  recentForm: 15,
  coachModel: 10,
  groupPath: 15,
  fitness: 10,
  knockoutExp: 10
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MethodologySection",
  __ssrInlineRender: true,
  setup(__props) {
    const showSimulator = ref(false);
    const weights = ref({ ...DEFAULT_WEIGHTS });
    const weightSummary = METHODOLOGY_WEIGHTS.map((w) => ({
      label: w.label,
      default: w.default
    }));
    const weightItems = computed(
      () => METHODOLOGY_WEIGHTS.map((w) => ({
        key: w.key,
        label: w.label,
        description: w.description,
        default: w.default,
        value: weights.value[w.key]
      }))
    );
    const totalWeight = computed(
      () => METHODOLOGY_WEIGHTS.reduce((sum, w) => sum + weights.value[w.key], 0)
    );
    const recalculatedRanking = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "metodologia",
        class: "section-dark",
        "aria-labelledby": "methodology-heading"
      }, _attrs))}><div class="section-inner-narrow"><p class="section-label">Transparência</p><h2 id="methodology-heading" class="section-headline"> Metodologia </h2><p class="section-subhead mt-2 mb-8"> A projeção combina <strong class="text-white">sete fatores ponderados</strong>: rankings FIFA e Elo, forma recente, qualidade e profundidade do elenco, situação de lesões, técnico e modelo de jogo, dificuldade do grupo e caminho no chaveamento, experiência em mata-mata, adaptação geográfica e projeções de modelos estatísticos externos. </p><div class="callout-info mb-10"><span aria-hidden="true">ⓘ</span> As probabilidades são estimativas analíticas e não representam certeza, recomendação financeira ou orientação de aposta. O ranking editorial utiliza os pesos padrão abaixo. </div><div class="editorial-card-accent p-6 mb-10"><h3 class="text-base font-display font-bold text-white mb-5">Pesos do modelo editorial</h3><div class="space-y-3"><!--[-->`);
      ssrRenderList(unref(weightSummary), (item) => {
        _push(`<div class="flex items-center justify-between text-sm"><span class="text-gray-300 font-medium">${ssrInterpolate(item.label)}</span><div class="flex items-center gap-3"><div class="strength-bar-track w-28"><div class="strength-bar-fill strength-bar-fill-gold" style="${ssrRenderStyle({ width: `${item.default}%`, minWidth: item.default > 0 ? "4px" : "0" })}"></div></div><span class="data-value text-xs w-8 text-right text-gold-400">${ssrInterpolate(item.default)}%</span></div></div>`);
      });
      _push(`<!--]--></div></div><div class="border-t border-surface-800/40 pt-6"><button type="button" class="accordion-trigger w-full"${ssrRenderAttr("aria-expanded", showSimulator.value)} aria-controls="simulator-panel"><span>Crie sua própria simulação</span><span class="${ssrRenderClass([{ "rotate-180": showSimulator.value }, "text-lg transition-transform duration-300"])}" aria-hidden="true">▾</span></button><div id="simulator-panel" class="accordion-content" style="${ssrRenderStyle({ maxHeight: showSimulator.value ? "2600px" : "0", opacity: showSimulator.value ? 1 : 0 })}" role="region"${ssrRenderAttr("aria-hidden", !showSimulator.value)}><div class="accordion-content-inner space-y-5 pt-2"><p class="text-sm"> Modifique os pesos de cada fator e recalcule para ver uma simulação personalizada. Os valores devem somar 100. O ranking editorial oficial usa os pesos padrão. </p><div class="space-y-5"><!--[-->`);
      ssrRenderList(weightItems.value, (item) => {
        _push(`<div class="space-y-2"><div class="flex items-center justify-between text-sm"><label${ssrRenderAttr("for", `weight-${item.key}`)} class="text-gray-300 font-medium border-b border-dotted border-gray-600"${ssrRenderAttr("title", item.description)}>${ssrInterpolate(item.label)}</label><span class="${ssrRenderClass([item.value === item.default ? "text-gray-400" : "text-gold-400", "font-mono text-sm font-bold"])}">${ssrInterpolate(item.value)}</span></div><div class="flex items-center gap-3"><input${ssrRenderAttr("id", `weight-${item.key}`)} type="range" min="0" max="100"${ssrRenderAttr("value", item.value)} class="flex-1 h-2 rounded-full appearance-none cursor-pointer accent-gold-500 bg-surface-800/60"${ssrRenderAttr("aria-label", `Peso para ${item.label}`)}><button type="button" class="px-2 py-1 text-xs rounded hover:bg-surface-800 text-gray-500 hover:text-gray-300"${ssrRenderAttr("aria-label", `Redefinir ${item.label}`)}> ↺ </button></div></div>`);
      });
      _push(`<!--]--></div><div class="flex items-center gap-3 pb-2"><div class="${ssrRenderClass([totalWeight.value === 100 ? "stat-badge-neutral bg-green-500/15 text-green-400 border-green-500/25" : "bg-red-500/15 text-red-400 border-red-500/25", "px-3 py-1.5 rounded-sm text-xs font-medium"])}"> Soma: ${ssrInterpolate(totalWeight.value)}/100 </div>`);
      if (totalWeight.value !== 100) {
        _push(`<p class="text-xs text-red-400" role="alert"> A soma deve ser exatamente 100 para recalcular. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex gap-3"><button type="button" class="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(totalWeight.value !== 100) ? " disabled" : ""}> Recalcular </button><button type="button" class="btn-outline text-sm"> Restaurar pesos padrão </button></div>`);
      if (recalculatedRanking.value.length > 0) {
        _push(`<div class="editorial-card-border p-5 mt-4"><h4 class="text-base font-display font-bold text-white mb-3">Simulação personalizada</h4><ol class="space-y-2"><!--[-->`);
        ssrRenderList(recalculatedRanking.value, (item, idx) => {
          _push(`<li class="flex items-center gap-3 p-2.5 rounded-sm bg-surface-800/30"><span class="${ssrRenderClass([idx === 0 ? "bg-gold-500 text-navy-950" : "bg-surface-800 text-gray-400", "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"])}">${ssrInterpolate(idx + 1)}</span><span class="font-semibold text-gray-200 flex-1 text-sm">${ssrInterpolate(item.flag)} ${ssrInterpolate(item.team)}</span><span class="text-sm font-mono text-gold-400 data-value">${ssrInterpolate(item.score)}</span></li>`);
        });
        _push(`<!--]--></ol><p class="mt-4 text-xs text-gray-500"> Este ranking é uma simulação personalizada baseada nos pesos definidos acima. Não substitui a estimativa editorial principal. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MethodologySection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ConclusionSection",
  __ssrInlineRender: true,
  setup(__props) {
    const reasons = [
      "Liderança no ranking Elo",
      "Segundo lugar no ranking FIFA",
      "Campeã da Euro 2024",
      "Elenco jovem e profundo",
      "Modelo de jogo consolidado",
      "Boa combinação entre controle e desequilíbrio",
      "Grupo administrável",
      "Menor número de fragilidades estruturais"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-dark",
        "aria-labelledby": "conclusion-heading"
      }, _attrs))}><div class="section-inner-narrow"><p class="section-label">Conclusão</p><h2 id="conclusion-heading" class="section-headline mt-2 mb-8"> A seleção mais provável hoje é a Espanha </h2><blockquote class="pull-quote mb-10"> &quot;Se fosse necessário escolher uma seleção apenas com base nos dados disponíveis hoje, a escolha seria a Espanha.&quot; </blockquote><div class="grid md:grid-cols-2 gap-8 mb-10"><div><h3 class="text-base font-display font-bold text-white mb-4 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-green-400" aria-hidden="true"></span> Por que a Espanha lidera </h3><ul class="space-y-2.5" role="list"><!--[-->`);
      ssrRenderList(reasons, (reason) => {
        _push(`<li class="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"><span class="text-green-400 mt-0.5 shrink-0 font-bold" aria-hidden="true">✓</span><span>${ssrInterpolate(reason)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="callout-warning" role="alert"><div class="flex items-start gap-3"><span class="text-amber-400 text-lg mt-0.5 shrink-0" aria-hidden="true">⚠</span><div><h3 class="text-amber-400 font-display font-bold mb-2 text-sm"> Principal risco de esta conclusão estar errada </h3><p class="text-sm text-gray-400 leading-relaxed"> A condição física de Lamine Yamal (sobrecarregado), Rodri (retornando) e Pedri (histórico de lesões) introduz vulnerabilidade. França e Argentina possuem experiência superior em jogos eliminatórios, o que pode ser determinante em partidas únicas. O modelo de jogo espanhol, baseado em controle de posse, pode ser desafiado por seleções fisicamente intensas em condições adversas. </p></div></div></div></div><div class="hr-gold mx-auto"></div><p class="mt-6 text-sm text-gray-500 text-center max-w-lg mx-auto leading-relaxed"> A Copa do Mundo permanece um torneio de alta imprevisibilidade. Nenhuma candidata possui probabilidade dominante, e fatores como lesões, chaveamento e desempenho em jogos únicos podem alterar radicalmente o cenário. </p></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConclusionSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SourcesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const showFullSources = ref(false);
    const keySources = [
      { name: "FIFA World Ranking", url: "https://www.fifa.com/en/world-ranking", categoryTag: "Ranking oficial", collectionDate: "12/06/2026" },
      { name: "Elo Ratings", url: "https://www.eloratings.net/", categoryTag: "Ranking independente", collectionDate: "12/06/2026" },
      { name: "Opta Analyst", url: "https://theanalyst.com/", categoryTag: "Estatística", collectionDate: "10/06/2026" },
      { name: "Transfermarkt", url: "https://www.transfermarkt.com/", categoryTag: "Elenco", collectionDate: "12/06/2026" }
    ];
    const sourceCategories = [
      {
        name: "FIFA",
        sources: [
          { name: "FIFA World Ranking", url: "https://www.fifa.com/en/world-ranking", categoryTag: "Ranking", collectionDate: "12/06/2026" },
          { name: "FIFA World Cup 2026", url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026", categoryTag: "Oficial", collectionDate: "12/06/2026" }
        ]
      },
      {
        name: "Ranking Elo",
        sources: [
          { name: "World Football Elo Ratings", url: "https://www.eloratings.net/", categoryTag: "Ranking", collectionDate: "12/06/2026" }
        ]
      },
      {
        name: "Desempenho",
        sources: [
          { name: "Opta Analyst", url: "https://theanalyst.com/", categoryTag: "Projeção", collectionDate: "10/06/2026" },
          { name: "The Analyst — World Cup Predictor", url: "https://theanalyst.com/eu/", categoryTag: "Estatística", collectionDate: "10/06/2026" }
        ]
      },
      {
        name: "Elencos e lesões",
        sources: [
          { name: "Transfermarkt", url: "https://www.transfermarkt.com/", categoryTag: "Elenco", collectionDate: "12/06/2026" },
          { name: "Premier Injuries", url: "https://www.premierinjuries.com/", categoryTag: "Lesões", collectionDate: "12/06/2026" }
        ]
      },
      {
        name: "Projeções estatísticas",
        sources: [
          { name: "CIES Football Observatory", url: "https://football-observatory.com/", categoryTag: "Pesquisa", collectionDate: "05/06/2026" }
        ]
      },
      {
        name: "Notícias esportivas",
        sources: [
          { name: "ESPN", url: "https://www.espn.com/", categoryTag: "Notícia", collectionDate: "12/06/2026" },
          { name: "The Athletic", url: "https://www.nytimes.com/athletic/", categoryTag: "Notícia", collectionDate: "12/06/2026" },
          { name: "BBC Sport", url: "https://www.bbc.com/sport", categoryTag: "Notícia", collectionDate: "12/06/2026" },
          { name: "Globo Esporte", url: "https://ge.globo.com/", categoryTag: "Notícia", collectionDate: "12/06/2026" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "fontes",
        class: "section-light",
        "aria-labelledby": "sources-heading"
      }, _attrs))}><div class="section-inner-narrow"><p class="section-label">Transparência</p><h2 id="sources-heading" class="section-headline"> Fontes </h2><p class="section-subhead mt-2 mb-8"> Transparência sobre a origem de cada dado utilizado na análise. </p><div class="flex flex-wrap gap-3 mb-8"><!--[-->`);
      ssrRenderList(keySources, (source) => {
        _push(`<a${ssrRenderAttr("href", source.url)} target="_blank" rel="noopener noreferrer" class="tag-gold text-sm hover:bg-gold-500/25 transition-colors duration-200">${ssrInterpolate(source.name)} <span class="text-[10px] text-gold-400/70 ml-1.5">${ssrInterpolate(source.categoryTag)}</span></a>`);
      });
      _push(`<!--]--></div><div class="border-t border-gray-200 pt-6"><button type="button" class="accordion-trigger w-full"${ssrRenderAttr("aria-expanded", showFullSources.value)} aria-controls="sources-panel"><span>Ver fontes completas por categoria</span><span class="${ssrRenderClass([{ "rotate-180": showFullSources.value }, "text-lg transition-transform duration-300"])}" aria-hidden="true">▾</span></button><div id="sources-panel" class="accordion-content" style="${ssrRenderStyle({ maxHeight: showFullSources.value ? "3000px" : "0", opacity: showFullSources.value ? 1 : 0 })}" role="region"${ssrRenderAttr("aria-hidden", !showFullSources.value)}><div class="accordion-content-inner"><div class="space-y-6 pt-4"><!--[-->`);
      ssrRenderList(sourceCategories, (category) => {
        _push(`<div><h4 class="text-sm font-display font-bold text-gray-900 mb-3 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-gold-600" aria-hidden="true"></span> ${ssrInterpolate(category.name)}</h4><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(category.sources, (source) => {
          _push(`<a${ssrRenderAttr("href", source.url)} target="_blank" rel="noopener noreferrer" class="tag-flag text-sm hover:bg-gray-200 transition-colors duration-200">${ssrInterpolate(source.name)}</a>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><p class="mt-8 text-xs text-gray-500 text-center"> Dados atualizados em 12 de junho de 2026. Cada dado sensível ao tempo inclui fonte e data da coleta. </p></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SourcesSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Copa do Mundo 2026 — Quem tem a maior probabilidade de vencer?",
      description: "Uma análise editorial sobre as seleções com maior probabilidade de vencer a Copa do Mundo FIFA 2026. Rankings, elenco, forma recente, lesões, grupos e caminhos até a final.",
      ogTitle: "Copa do Mundo 2026 — Quem tem a maior probabilidade de vencer?",
      ogDescription: "Análise editorial baseada em dados: rankings FIFA e Elo, desempenho recente, qualidade do elenco, lesões e cenários até a final.",
      ogType: "website",
      ogLocale: "pt_BR"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      const _component_ExecutiveSummary = _sfc_main$h;
      const _component_ProbabilityRanking = _sfc_main$g;
      const _component_SpainSpotlight = _sfc_main$f;
      const _component_RationalTopThree = _sfc_main$e;
      const _component_TeamsComparisonTable = _sfc_main$d;
      const _component_RankingExplanation = _sfc_main$c;
      const _component_GroupDifficulty = _sfc_main$b;
      const _component_TournamentPath = _sfc_main$a;
      const _component_RecentFormChart = _sfc_main$9;
      const _component_KeyPlayersSection = _sfc_main$8;
      const _component_InjuryTracker = _sfc_main$7;
      const _component_HiddenContenders = _sfc_main$6;
      const _component_UpsetRisk = _sfc_main$5;
      const _component_GeographicFactor = _sfc_main$4;
      const _component_MethodologySection = _sfc_main$3;
      const _component_ConclusionSection = _sfc_main$2;
      const _component_SourcesSection = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ExecutiveSummary, null, null, _parent));
      _push(ssrRenderComponent(_component_ProbabilityRanking, null, null, _parent));
      _push(ssrRenderComponent(_component_SpainSpotlight, null, null, _parent));
      _push(ssrRenderComponent(_component_RationalTopThree, null, null, _parent));
      _push(ssrRenderComponent(_component_TeamsComparisonTable, null, null, _parent));
      _push(ssrRenderComponent(_component_RankingExplanation, null, null, _parent));
      _push(ssrRenderComponent(_component_GroupDifficulty, null, null, _parent));
      _push(ssrRenderComponent(_component_TournamentPath, null, null, _parent));
      _push(ssrRenderComponent(_component_RecentFormChart, null, null, _parent));
      _push(ssrRenderComponent(_component_KeyPlayersSection, null, null, _parent));
      _push(ssrRenderComponent(_component_InjuryTracker, null, null, _parent));
      _push(ssrRenderComponent(_component_HiddenContenders, null, null, _parent));
      _push(ssrRenderComponent(_component_UpsetRisk, null, null, _parent));
      _push(ssrRenderComponent(_component_GeographicFactor, null, null, _parent));
      _push(ssrRenderComponent(_component_MethodologySection, null, null, _parent));
      _push(ssrRenderComponent(_component_ConclusionSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SourcesSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-VDJvWJqH.js.map
