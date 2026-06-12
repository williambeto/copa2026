<template>
  <section id="ranking" class="section-container" aria-labelledby="ranking-title">
    <h2 id="ranking-title" class="section-title">
      Ranking das seleções mais prováveis
    </h2>
    <p class="section-subtitle mb-10">
      Probabilidade estimada de cada seleção vencer a Copa do Mundo FIFA 2026, com base
      no modelo analítico ponderado.
    </p>

    <div class="space-y-6">
      <div
        v-for="(item, index) in rankedItems"
        :key="item.team"
        class="group"
      >
        <!-- Bar row -->
        <div class="flex items-center gap-3 mb-1">
          <span
            class="w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold shrink-0"
            :class="index < 3
              ? 'bg-gold-500 text-marine-950'
              : 'bg-graphite-800 text-gray-400 light:bg-gray-200 light:text-gray-600'"
          >
            {{ index + 1 }}
          </span>

          <span class="text-xl shrink-0" role="img" :aria-label="`Bandeira de ${item.team}`">
            {{ item.flag }}
          </span>

          <span
            class="text-sm font-semibold w-28 shrink-0 text-white light:text-gray-900"
            :class="{ 'text-gold-400': index < 3 }"
          >
            {{ item.team }}
          </span>

          <div class="flex-1 relative h-8 min-w-[60px]">
            <div
              class="absolute inset-y-0 left-0 rounded-r-md transition-all duration-700 ease-out"
              :class="index < 3
                ? 'bg-gradient-to-r from-gold-500 to-gold-400'
                : 'bg-gradient-to-r from-blue-500 to-blue-400'"
              :style="{ width: `${item.barWidth}%` }"
            />
          </div>

          <span class="text-sm font-bold font-mono w-16 text-right shrink-0 text-white light:text-gray-900">
            {{ item.probability.toFixed(1).replace('.', ',') }}%
          </span>
        </div>

        <!-- Justification text -->
        <p
          v-if="item.justification"
          class="text-xs text-gray-500 light:text-gray-500 ml-11 pl-7 leading-relaxed"
        >
          {{ item.justification }}
        </p>
      </div>

      <!-- Outras seleções (last item, different color) -->
      <div
        v-if="othersItem"
        class="group"
      >
        <div class="flex items-center gap-3 mb-1">
          <span
            class="w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold shrink-0 bg-graphite-800 text-gray-500 light:bg-gray-200 light:text-gray-500"
          >
            {{ rankedItems.length + 1 }}
          </span>

          <span class="text-xl shrink-0" role="img" aria-label="Outras seleções">
            {{ othersItem.flag }}
          </span>

          <span class="text-sm font-semibold w-28 shrink-0 text-gray-500 light:text-gray-500">
            {{ othersItem.team }}
          </span>

          <div class="flex-1 relative h-8 min-w-[60px]">
            <div
              class="absolute inset-y-0 left-0 rounded-r-md transition-all duration-700 ease-out bg-graphite-700 light:bg-gray-300"
              :style="{ width: `${(othersItem.probability / maxProbability) * 100}%` }"
            />
          </div>

          <span class="text-sm font-bold font-mono w-16 text-right shrink-0 text-gray-500 light:text-gray-500">
            {{ othersItem.probability.toFixed(1).replace('.', ',') }}%
          </span>
        </div>
      </div>
    </div>

    <!-- Visual confidence indicator legend -->
    <div class="mt-8 flex items-center gap-3" aria-label="Indicador de confiança visual">
      <span class="text-xs text-gray-500 light:text-gray-500">Confiança do modelo:</span>
      <div class="flex gap-1">
        <span
          v-for="n in 5"
          :key="n"
          class="w-3 h-3 rounded-full"
          :class="n <= 3
            ? 'bg-gold-500'
            : 'bg-graphite-700 light:bg-gray-300'"
          aria-hidden="true"
        />
      </div>
      <span class="text-xs text-gray-400 light:text-gray-500">Média-alta</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PROBABILITY_RANKING, TEAMS } from '~/data/teams'

const maxProbability = 16.5

// Map ranking items to include justifications from TEAMS
const rankedItems = PROBABILITY_RANKING.slice(0, -1).map(item => {
  const teamData = TEAMS.find(t => t.name === item.team)
  return {
    ...item,
    justification: teamData?.justification ?? null,
    barWidth: (item.probability / maxProbability) * 100,
  }
})

const othersItem = PROBABILITY_RANKING[PROBABILITY_RANKING.length - 1]
</script>
