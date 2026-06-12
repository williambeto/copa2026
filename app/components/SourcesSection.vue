<template>
  <section id="fontes" class="section-container" aria-labelledby="sources-heading">
    <h2 id="sources-heading" class="section-title">
      Fontes
    </h2>
    <p class="section-subtitle mb-8">
      Transparência sobre a origem de cada dado utilizado na análise.
    </p>

    <!-- Sources by category -->
    <div class="space-y-10">
      <div v-for="category in sourceCategories" :key="category.name">
        <h3 class="text-lg font-semibold text-gray-200 mb-3 flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-gold-500" aria-hidden="true" />
          {{ category.name }}
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <article
            v-for="source in category.sources"
            :key="source.url"
            class="card-hover"
          >
            <div class="flex items-start justify-between gap-2 mb-2">
              <a
                :href="source.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors duration-200 break-all"
              >
                {{ source.name }}
              </a>
              <span
                class="shrink-0 px-2 py-0.5 rounded-full text-xs font-medium bg-graphite-800 text-gray-400"
              >
                {{ source.categoryTag }}
              </span>
            </div>
            <p class="text-xs text-gray-500">
              Coleta: {{ source.collectionDate }}
            </p>
          </article>
        </div>
      </div>
    </div>

    <!-- Data freshness note -->
    <div class="card mt-10 border-l-4 border-gold-600/60">
      <p class="text-sm text-gray-400 flex items-start gap-2">
        <span aria-hidden="true" class="text-gold-500 mt-0.5 shrink-0">&#8505;</span>
        <span>Cada dado sensível ao tempo inclui fonte, data da coleta e data da última atualização.</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
interface SourceItem {
  name: string
  url: string
  categoryTag: string
  collectionDate: string
}

interface SourceCategory {
  name: string
  sources: SourceItem[]
}

const sourceCategories: SourceCategory[] = [
  {
    name: 'FIFA',
    sources: [
      {
        name: 'FIFA World Ranking',
        url: 'https://www.fifa.com/en/world-ranking',
        categoryTag: 'Ranking',
        collectionDate: '12/06/2026',
      },
      {
        name: 'FIFA World Cup 2026',
        url: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026',
        categoryTag: 'Oficial',
        collectionDate: '12/06/2026',
      },
    ],
  },
  {
    name: 'Ranking Elo',
    sources: [
      {
        name: 'World Football Elo Ratings',
        url: 'https://www.eloratings.net/',
        categoryTag: 'Ranking',
        collectionDate: '12/06/2026',
      },
    ],
  },
  {
    name: 'Desempenho',
    sources: [
      {
        name: 'The Analyst — World Cup Predictor',
        url: 'https://theanalyst.com/',
        categoryTag: 'Projeção',
        collectionDate: '10/06/2026',
      },
      {
        name: 'Opta Analyst',
        url: 'https://theanalyst.com/eu/',
        categoryTag: 'Estatística',
        collectionDate: '10/06/2026',
      },
    ],
  },
  {
    name: 'Elencos e lesões',
    sources: [
      {
        name: 'Transfermarkt',
        url: 'https://www.transfermarkt.com/',
        categoryTag: 'Elenco',
        collectionDate: '12/06/2026',
      },
      {
        name: 'Premier Injuries',
        url: 'https://www.premierinjuries.com/',
        categoryTag: 'Lesões',
        collectionDate: '12/06/2026',
      },
    ],
  },
  {
    name: 'Projeções estatísticas',
    sources: [
      {
        name: 'FiveThirtyEight',
        url: 'https://fivethirtyeight.com/',
        categoryTag: 'Modelo',
        collectionDate: '08/06/2026',
      },
      {
        name: 'CIES Football Observatory',
        url: 'https://football-observatory.com/',
        categoryTag: 'Pesquisa',
        collectionDate: '05/06/2026',
      },
    ],
  },
  {
    name: 'Notícias esportivas',
    sources: [
      {
        name: 'ESPN',
        url: 'https://www.espn.com/',
        categoryTag: 'Notícia',
        collectionDate: '12/06/2026',
      },
      {
        name: 'The Athletic',
        url: 'https://www.nytimes.com/athletic/',
        categoryTag: 'Notícia',
        collectionDate: '12/06/2026',
      },
      {
        name: 'BBC Sport',
        url: 'https://www.bbc.com/sport',
        categoryTag: 'Notícia',
        collectionDate: '12/06/2026',
      },
      {
        name: 'Globo Esporte',
        url: 'https://ge.globo.com/',
        categoryTag: 'Notícia',
        collectionDate: '12/06/2026',
      },
    ],
  },
]
</script>
