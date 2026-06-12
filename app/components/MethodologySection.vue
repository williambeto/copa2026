<template>
  <section id="metodologia" class="section-container" aria-labelledby="methodology-heading">
    <h2 id="methodology-heading" class="section-title">
      Metodologia
    </h2>

    <!-- Explanation -->
    <div class="card mb-8">
      <p class="text-sm text-gray-400 leading-relaxed mb-3">
        A análise combina múltiplos fatores ponderados: rankings (FIFA e Elo), forma recente em jogos oficiais e amistosos,
        profundidade e qualidade do elenco, situação de lesões, qualidade do treinador e modelo de jogo,
        dificuldade do grupo e caminho projetado no chaveamento, vantagens geográficas, projeções de modelos
        estatísticos externos e sinal de mercado.
      </p>
      <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-graphite-900/80 border border-graphite-800 text-xs text-gray-500">
        <span aria-hidden="true">&#9432;</span>
        <span>As probabilidades são estimativas analíticas e não representam certeza, recomendação financeira ou orientação de aposta.</span>
      </div>
    </div>

    <!-- Weight sliders -->
    <div class="card mb-8">
      <h3 class="text-lg font-semibold text-white mb-2">Ajuste os pesos da simulação</h3>
      <p class="text-sm text-gray-500 mb-6">
        Modifique os pesos de cada fator e recalcule para ver uma simulação personalizada. Os valores devem somar 100.
      </p>

      <div class="space-y-5">
        <div v-for="item in weightItems" :key="item.key" class="space-y-2">
          <div class="flex items-center justify-between text-sm">
            <label
              :for="`weight-${item.key}`"
              class="text-gray-300 font-medium cursor-help border-b border-dotted border-gray-600"
              :title="item.description"
            >
              {{ item.label }}
            </label>
            <span
              class="tabular-nums font-mono text-sm font-bold"
              :class="item.value === item.default ? 'text-gray-400' : 'text-gold-400'"
            >
              {{ item.value }}
            </span>
          </div>
          <div class="flex items-center gap-3">
            <input
              :id="`weight-${item.key}`"
              type="range"
              min="0"
              max="100"
              :value="item.value"
              class="flex-1 h-2 rounded-full appearance-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              :class="sliderTrackClass"
              :style="sliderAccentStyle"
              :aria-label="`Peso para ${item.label}`"
              :aria-valuenow="item.value"
              aria-valuemin="0"
              aria-valuemax="100"
              @input="updateWeight(item.key, $event)"
            />
            <button
              type="button"
              class="px-2 py-1 text-xs rounded transition-colors duration-150 hover:bg-graphite-800 text-gray-500 hover:text-gray-300"
              :aria-label="`Redefinir peso de ${item.label} para o valor padrão`"
              @click="resetWeight(item.key)"
            >
              &#8634;
            </button>
          </div>
        </div>
      </div>

      <!-- Sum indicator -->
      <div class="mt-6 flex items-center gap-3">
        <div
          class="px-3 py-1.5 rounded-lg text-xs font-medium"
          :class="sumClass"
        >
          Soma: {{ totalWeight }}/100
        </div>
        <p v-if="totalWeight !== 100" class="text-xs text-red-400" role="alert">
          A soma deve ser exatamente 100 para recalcular.
        </p>
      </div>

      <!-- Recalculate button -->
      <button
        type="button"
        class="mt-4 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 disabled:opacity-40 disabled:cursor-not-allowed"
        :class="totalWeight === 100
          ? 'bg-gold-600 text-marine-950 hover:bg-gold-500 active:bg-gold-400'
          : 'bg-graphite-800 text-gray-500'"
        :disabled="totalWeight !== 100"
        :aria-disabled="totalWeight !== 100"
        @click="recalculate"
      >
        Recalcular
      </button>
    </div>

    <!-- Recalculated ranking -->
    <div v-if="recalculatedRanking.length > 0" class="card">
      <h3 class="text-lg font-semibold text-white mb-4">
        Ranking recalculado
      </h3>
      <ol class="space-y-3">
        <li
          v-for="(item, idx) in recalculatedRanking"
          :key="item.team"
          class="flex items-center gap-4 p-3 rounded-lg bg-graphite-900/60 border border-graphite-800/50"
        >
          <span
            class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
            :class="idx === 0 ? 'bg-gold-500 text-marine-950' : 'bg-graphite-800 text-gray-400'"
            aria-hidden="true"
          >
            {{ idx + 1 }}
          </span>
          <span class="font-semibold text-gray-200 flex-1">{{ item.flag }} {{ item.team }}</span>
          <span class="text-sm tabular-nums font-mono text-gold-400">{{ item.score }}</span>
        </li>
      </ol>
      <p class="mt-4 text-xs text-gray-500 flex items-start gap-1.5">
        <span aria-hidden="true">&#9432;</span>
        <span>Resultado recalculado é uma simulação personalizada, não uma nova verdade estatística.</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { WeightConfig } from '~/types/teams'
import { DEFAULT_WEIGHTS } from '~/types/teams'
import { METHODOLOGY_WEIGHTS, TEAMS } from '~/data/teams'
import type { TeamData } from '~/types/teams'

const weights = ref<WeightConfig>({ ...DEFAULT_WEIGHTS })

interface WeightItem {
  key: keyof WeightConfig
  label: string
  description: string
  default: number
  value: number
}

const weightItems = computed<WeightItem[]>(() =>
  METHODOLOGY_WEIGHTS.map(w => ({
    key: w.key,
    label: w.label,
    description: w.description,
    default: w.default,
    value: weights.value[w.key],
  }))
)

const totalWeight = computed(() =>
  METHODOLOGY_WEIGHTS.reduce((sum, w) => sum + weights.value[w.key], 0)
)

const sumClass = computed(() => {
  if (totalWeight.value === 100) return 'bg-emerald-900/40 text-emerald-400 border border-emerald-800/60'
  return 'bg-red-900/30 text-red-400 border border-red-800/40'
})

const sliderTrackClass = computed(() => {
  return '[&::-webkit-slider-runnable-track]:bg-graphite-700 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-track]:bg-graphite-700 [&::-moz-range-track]:rounded-full [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gold-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0'
})

const sliderAccentStyle = computed(() => ({
  accentColor: '#b58c2c',
}))

function updateWeight(key: keyof WeightConfig, event: Event) {
  const target = event.target as HTMLInputElement
  weights.value[key] = parseInt(target.value, 10)
}

function resetWeight(key: keyof WeightConfig) {
  weights.value[key] = DEFAULT_WEIGHTS[key]
}

interface RankingItem {
  team: string
  flag: string
  score: string
}

const recalculatedRanking = ref<RankingItem[]>([])

function recalculate(): void {
  const w = weights.value
  const normalized: WeightConfig = {
    strengthRankings: w.strengthRankings / 100,
    squadDepth: w.squadDepth / 100,
    recentForm: w.recentForm / 100,
    coachModel: w.coachModel / 100,
    groupPath: w.groupPath / 100,
    fitness: w.fitness / 100,
    knockoutExp: w.knockoutExp / 100,
  }

  const scored = TEAMS.map(team => {
    const score =
      team.strengthScore * normalized.strengthRankings +
      team.squadScore * normalized.squadDepth +
      team.formScore * normalized.recentForm +
      team.coachScore * normalized.coachModel +
      team.pathScore * normalized.groupPath +
      team.fitnessScore * normalized.fitness +
      team.knockoutScore * normalized.knockoutExp

    return {
      team: team.name,
      flag: team.flag,
      score: score.toFixed(1),
    }
  })

  scored.sort((a, b) => parseFloat(b.score) - parseFloat(a.score))

  recalculatedRanking.value = scored.slice(0, 12)
}
</script>
