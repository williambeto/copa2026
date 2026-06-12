<template>
  <section id="ranking" class="section-container" aria-labelledby="ranking-title">
    <p class="section-label">Ranking</p>
    <h2 id="ranking-title" class="section-title">
      As dez seleções mais prováveis
    </h2>
    <p class="section-subtitle mb-12">
      Probabilidade estimada de cada seleção vencer a Copa do Mundo FIFA 2026,
      calculada com base no modelo analítico ponderado.
    </p>

    <div class="space-y-5">
      <div
        v-for="(item, index) in rankedItems"
        :key="item.team"
        class="group"
      >
        <!-- Bar row -->
        <div class="flex items-center gap-4">
          <!-- Position -->
          <span
            class="w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold shrink-0"
            :class="index < 3
              ? 'bg-gold-500 text-marine-950'
              : 'bg-graphite-800 text-gray-400'"
            :aria-label="`Posição ${index + 1}`"
          >
            {{ index + 1 }}
          </span>

          <!-- Flag -->
          <span class="text-2xl shrink-0 leading-none" role="img" :aria-label="`Bandeira de ${item.team}`">
            {{ item.flag }}
          </span>

          <!-- Team name -->
          <span
            class="text-sm sm:text-base font-semibold w-28 sm:w-32 shrink-0"
            :class="index < 3 ? 'text-gold-400' : 'text-white'"
          >
            {{ item.team }}
          </span>

          <!-- Bar -->
          <div class="flex-1 relative h-9 min-w-[80px]">
            <div class="absolute inset-y-0 left-0 bg-marine-800/50 rounded-r-md w-full" />
            <div
              class="absolute inset-y-0 left-0 rounded-r-md transition-all duration-700 ease-out flex items-center"
              :class="index < 3
                ? 'bg-gradient-to-r from-gold-500/90 to-gold-400/70'
                : 'bg-gradient-to-r from-blue-500/60 to-blue-400/40'"
              :style="{ width: `${item.barWidth}%` }"
            >
              <span
                v-if="item.barWidth > 18"
                class="text-xs font-bold text-white font-mono ml-3"
              >
                {{ item.probability.toFixed(1).replace('.', ',') }}%
              </span>
            </div>
          </div>

          <!-- Percentage outside bar when bar is too narrow -->
          <span
            v-if="item.barWidth <= 18"
            class="text-sm font-bold font-mono w-14 text-right shrink-0 text-white"
          >
            {{ item.probability.toFixed(1).replace('.', ',') }}%
          </span>
        </div>

        <!-- Justification -->
        <p
          v-if="item.justification"
          class="mt-1.5 ml-14 sm:ml-[4.5rem] text-xs sm:text-sm text-gray-500 leading-relaxed max-w-2xl"
        >
          {{ item.justification }}
        </p>
      </div>

      <!-- Outras seleções -->
      <div class="group pt-2 border-t border-graphite-800/50">
        <div class="flex items-center gap-4">
          <span class="w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold shrink-0 bg-graphite-800 text-gray-500">
            —
          </span>
          <span class="text-2xl shrink-0 leading-none" role="img" aria-label="Outras seleções">
            {{ othersItem?.flag }}
          </span>
          <span class="text-sm sm:text-base font-semibold w-28 sm:w-32 shrink-0 text-gray-500">
            {{ othersItem?.team }}
          </span>
          <div class="flex-1 relative h-9 min-w-[80px]">
            <div class="absolute inset-y-0 left-0 bg-marine-800/50 rounded-r-md w-full" />
            <div
              class="absolute inset-y-0 left-0 rounded-r-md transition-all duration-700 ease-out bg-graphite-700/60 flex items-center"
              :style="{ width: `${(othersItem?.probability ?? 0) / maxProbability * 100}%` }"
            >
              <span class="text-xs font-bold text-gray-400 font-mono ml-3">
                {{ othersItem?.probability.toFixed(1).replace('.', ',') }}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Note -->
    <p class="mt-8 text-xs text-gray-600">
      As probabilidades são estimativas analíticas baseadas no modelo ponderado descrito na metodologia.
      Não representam certezas nem recomendações.
    </p>
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
