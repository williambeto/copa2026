<template>
  <section id="fontes" class="section-light" aria-labelledby="sources-heading">
    <div class="section-inner-narrow">
      <p class="section-label">Transparência</p>
      <h2 id="sources-heading" class="section-headline">
        Fontes
      </h2>
      <p class="section-subhead mt-2 mb-8">
        Transparência sobre a origem de cada dado utilizado na análise.
      </p>

      <!-- Key sources -->
      <div class="flex flex-wrap gap-3 mb-8">
        <a
          v-for="source in keySources"
          :key="source.name"
          :href="source.url"
          target="_blank"
          rel="noopener noreferrer"
          class="tag-gold text-sm hover:bg-gold-500/25 transition-colors duration-200"
        >
          {{ source.name }}
          <span class="text-[10px] text-gold-400/70 ml-1.5">{{ source.categoryTag }}</span>
        </a>
      </div>

      <!-- Accordion: full sources -->
      <div class="border-t border-gray-200 pt-6">
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
            <div class="space-y-6 pt-4">
              <div v-for="category in sourceCategories" :key="category.name">
                <h4 class="text-sm font-display font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-gold-600" aria-hidden="true" />
                  {{ category.name }}
                </h4>
                <div class="flex flex-wrap gap-2">
                  <a
                    v-for="source in category.sources"
                    :key="source.url"
                    :href="source.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="tag-flag text-sm hover:bg-gray-200 transition-colors duration-200"
                  >
                    {{ source.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-8 text-xs text-gray-500 text-center">
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
