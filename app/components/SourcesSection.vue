<template>
  <section id="fontes" class="section-container" aria-labelledby="sources-heading">
    <div class="max-w-[960px] mx-auto">
      <p class="section-label">Transparência</p>
      <h2 id="sources-heading" class="section-title">
        Fontes
      </h2>
      <p class="section-subtitle mb-8">
        Transparência sobre a origem de cada dado utilizado na análise.
      </p>

      <!-- Summary of key sources -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        <a
          v-for="source in keySources"
          :key="source.name"
          :href="source.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card-outline hover:border-graphite-600 transition-colors duration-200 text-center py-4"
        >
          <span class="block text-sm font-semibold text-gold-400 hover:text-gold-300">{{ source.name }}</span>
          <span class="block text-xs text-gray-500 mt-1">{{ source.categoryTag }}</span>
        </a>
      </div>

      <!-- Accordion: full sources list -->
      <div class="card-outline">
        <button
          type="button"
          class="accordion-trigger w-full"
          :aria-expanded="showFullSources"
          aria-controls="sources-panel"
          @click="showFullSources = !showFullSources"
        >
          <span>Ver fontes completas por categoria</span>
          <span class="text-lg transition-transform duration-300" :class="{ 'rotate-180': showFullSources }" aria-hidden="true">▾</span>
        </button>

        <div
          id="sources-panel"
          class="accordion-content"
          :style="{ maxHeight: showFullSources ? '3000px' : '0', opacity: showFullSources ? 1 : 0 }"
          role="region"
          :aria-hidden="!showFullSources"
        >
          <div class="accordion-content-inner">
            <div class="space-y-8">
              <div v-for="category in sourceCategories" :key="category.name">
                <h4 class="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-gold-500" aria-hidden="true" />
                  {{ category.name }}
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    v-for="source in category.sources"
                    :key="source.url"
                    :href="source.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-between gap-3 p-3 rounded-lg bg-graphite-950/50 hover:bg-graphite-800/50 transition-colors duration-200"
                  >
                    <div class="min-w-0">
                      <span class="block text-sm font-medium text-gray-300 truncate">{{ source.name }}</span>
                      <span class="block text-xs text-gray-600">Coleta: {{ source.collectionDate }}</span>
                    </div>
                    <span class="shrink-0 px-2 py-0.5 rounded-full text-xs bg-graphite-800 text-gray-500">
                      {{ source.categoryTag }}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-6 text-xs text-gray-600 text-center">
        Dados atualizados em 12 de junho de 2026. Cada dado sensível ao tempo inclui fonte e data da coleta.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showFullSources = ref(false)

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

const keySources: SourceItem[] = [
  { name: 'FIFA World Ranking', url: 'https://www.fifa.com/en/world-ranking', categoryTag: 'Ranking oficial', collectionDate: '12/06/2026' },
  { name: 'Elo Ratings', url: 'https://www.eloratings.net/', categoryTag: 'Ranking independente', collectionDate: '12/06/2026' },
  { name: 'Opta Analyst', url: 'https://theanalyst.com/', categoryTag: 'Estatística', collectionDate: '10/06/2026' },
  { name: 'Transfermarkt', url: 'https://www.transfermarkt.com/', categoryTag: 'Elenco', collectionDate: '12/06/2026' },
]

const sourceCategories: SourceCategory[] = [
  {
    name: 'FIFA',
    sources: [
      { name: 'FIFA World Ranking', url: 'https://www.fifa.com/en/world-ranking', categoryTag: 'Ranking', collectionDate: '12/06/2026' },
      { name: 'FIFA World Cup 2026', url: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026', categoryTag: 'Oficial', collectionDate: '12/06/2026' },
    ],
  },
  {
    name: 'Ranking Elo',
    sources: [
      { name: 'World Football Elo Ratings', url: 'https://www.eloratings.net/', categoryTag: 'Ranking', collectionDate: '12/06/2026' },
    ],
  },
  {
    name: 'Desempenho',
    sources: [
      { name: 'Opta Analyst', url: 'https://theanalyst.com/', categoryTag: 'Projeção', collectionDate: '10/06/2026' },
      { name: 'The Analyst — World Cup Predictor', url: 'https://theanalyst.com/eu/', categoryTag: 'Estatística', collectionDate: '10/06/2026' },
    ],
  },
  {
    name: 'Elencos e lesões',
    sources: [
      { name: 'Transfermarkt', url: 'https://www.transfermarkt.com/', categoryTag: 'Elenco', collectionDate: '12/06/2026' },
      { name: 'Premier Injuries', url: 'https://www.premierinjuries.com/', categoryTag: 'Lesões', collectionDate: '12/06/2026' },
    ],
  },
  {
    name: 'Projeções estatísticas',
    sources: [
      { name: 'CIES Football Observatory', url: 'https://football-observatory.com/', categoryTag: 'Pesquisa', collectionDate: '05/06/2026' },
    ],
  },
  {
    name: 'Notícias esportivas',
    sources: [
      { name: 'ESPN', url: 'https://www.espn.com/', categoryTag: 'Notícia', collectionDate: '12/06/2026' },
      { name: 'The Athletic', url: 'https://www.nytimes.com/athletic/', categoryTag: 'Notícia', collectionDate: '12/06/2026' },
      { name: 'BBC Sport', url: 'https://www.bbc.com/sport', categoryTag: 'Notícia', collectionDate: '12/06/2026' },
      { name: 'Globo Esporte', url: 'https://ge.globo.com/', categoryTag: 'Notícia', collectionDate: '12/06/2026' },
    ],
  },
]
</script>
