<template>
  <section id="ranking" class="section-dark" aria-labelledby="ranking-heading">
    <div class="section-inner-narrow">
      <p class="section-label">Ranking</p>
      <h2 id="ranking-heading" class="section-headline">
        As dez seleções mais prováveis
      </h2>
      <p class="section-subhead mb-14">
        Probabilidade estimada de cada seleção vencer a Copa do Mundo FIFA 2026,
        calculada com base no modelo analítico ponderado.
      </p>

      <div class="divide-y divide-surface-800/40">
        <div
          v-for="(item, index) in rankedItems"
          :key="item.team"
          class="py-5 first:pt-0 last:pb-0"
          :class="index < 3 ? 'pl-5 border-l-4 border-gold-500/70 -ml-px' : 'pl-5 border-l-4 border-transparent -ml-px'"
        >
          <div class="flex items-start gap-5">
            <span
              class="font-display font-extrabold leading-none shrink-0 mt-1"
              :class="index < 3 ? 'text-3xl text-gold-500' : 'text-2xl text-surface-400'"
              aria-label="Posição"
            >
              {{ index + 1 }}
            </span>

            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-3 mb-2">
                <span class="text-2xl leading-none shrink-0" aria-hidden="true">{{ item.flag }}</span>
                <span
                  class="font-display font-bold leading-tight truncate"
                  :class="index < 3 ? 'text-2xl text-white' : 'text-xl text-white'"
                >
                  {{ item.team }}
                </span>
                <span class="data-percent text-2xl ml-auto shrink-0">
                  {{ item.probability.toFixed(1).replace('.', ',') }}%
                </span>
              </div>

              <div class="flex items-center gap-3 mb-2">
                <div class="strength-bar-track flex-1 max-w-xs">
                  <div
                    class="strength-bar-fill"
                    :class="index < 3 ? 'strength-bar-fill-gold' : 'strength-bar-fill-blue'"
                    :style="{ width: `${item.barWidth}%` }"
                  />
                </div>
              </div>

              <p class="text-sm text-gray-500 leading-relaxed max-w-xl">
                {{ item.justification }}
              </p>
            </div>
          </div>
        </div>

        <div class="py-5 pl-5 border-l-4 border-transparent -ml-px opacity-70">
          <div class="flex items-start gap-5">
            <span class="font-display font-extrabold text-2xl leading-none shrink-0 mt-1 text-surface-500">—</span>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-3 mb-2">
                <span class="text-2xl leading-none shrink-0" aria-hidden="true">{{ othersItem?.flag }}</span>
                <span class="font-display font-bold text-xl leading-tight truncate text-gray-400">
                  {{ othersItem?.team }}
                </span>
                <span class="data-percent text-2xl ml-auto shrink-0">
                  {{ othersItem?.probability.toFixed(1).replace('.', ',') }}%
                </span>
              </div>
              <div class="flex items-center gap-3 mb-1">
                <div class="strength-bar-track flex-1 max-w-xs">
                  <div
                    class="strength-bar-fill strength-bar-fill-gold"
                    :style="{ width: `${(othersItem?.probability ?? 0) / maxProbability * 100}%` }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-10 text-xs text-gray-600">
        As probabilidades são estimativas analíticas baseadas no modelo ponderado descrito na metodologia.
        Não representam certezas nem recomendações.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PROBABILITY_RANKING, TEAMS } from '~/data/teams'

const maxProbability = 16.5

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
