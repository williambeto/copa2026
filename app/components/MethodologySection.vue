<template>
  <section id="metodologia" class="section-container-alt" aria-labelledby="methodology-heading">
    <div class="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
      <p class="section-label">Transparência</p>
      <h2 id="methodology-heading" class="section-title">
        Metodologia
      </h2>

      <!-- Summary card -->
      <div class="card-outline mb-6">
        <p class="text-sm text-gray-300 leading-relaxed mb-3">
          A projeção combina <strong class="text-white">sete fatores ponderados</strong>:
          rankings FIFA e Elo, forma recente, qualidade e profundidade do elenco,
          situação de lesões, técnico e modelo de jogo, dificuldade do grupo e
          caminho no chaveamento, experiência em mata-mata, adaptação geográfica
          e projeções de modelos estatísticos externos.
        </p>
        <div class="callout-info text-xs">
          <span aria-hidden="true">&#9432;</span>
          As probabilidades são estimativas analíticas e não representam certeza,
          recomendação financeira ou orientação de aposta.
        </div>
      </div>

      <!-- Default weights summary -->
      <div class="card-outline mb-6">
        <h3 class="text-base font-semibold text-white mb-4">Pesos do modelo</h3>
        <div class="space-y-2">
          <div v-for="item in weightSummary" :key="item.label" class="flex items-center justify-between text-sm">
            <span class="text-gray-400">{{ item.label }}</span>
            <div class="flex items-center gap-3">
              <div class="w-24 progress-track">
                <div class="progress-fill progress-fill-gold" :style="{ width: `${item.default}%` }" />
              </div>
              <span class="data-value text-xs w-10 text-right">{{ item.default }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Accordion: detailed weight simulator -->
      <div class="card-outline">
        <button
          type="button"
          class="accordion-trigger w-full"
          :aria-expanded="showSimulator"
          aria-controls="simulator-panel"
          @click="showSimulator = !showSimulator"
        >
          <span>Simulador de pesos interativo</span>
          <span class="text-lg transition-transform duration-300" :class="{ 'rotate-180': showSimulator }" aria-hidden="true">▾</span>
        </button>

        <div
          id="simulator-panel"
          class="accordion-content"
          :style="{ maxHeight: showSimulator ? '2000px' : '0', opacity: showSimulator ? 1 : 0 }"
          role="region"
          :aria-hidden="!showSimulator"
        >
          <div class="accordion-content-inner space-y-5 pt-2">
            <p class="text-sm text-gray-500">
              Modifique os pesos de cada fator e recalcule para ver uma simulação personalizada.
              Os valores devem somar 100.
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
                  <span class="font-mono text-sm font-bold" :class="item.value === item.default ? 'text-gray-400' : 'text-gold-400'">
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
                    class="flex-1 h-2 rounded-full appearance-none cursor-pointer accent-gold-500"
                    :aria-label="`Peso para ${item.label}`"
                    @input="updateWeight(item.key, $event)"
                  />
                  <button
                    type="button"
                    class="px-2 py-1 text-xs rounded hover:bg-graphite-800 text-gray-500 hover:text-gray-300"
                    :aria-label="`Redefinir ${item.label}`"
                    @click="resetWeight(item.key)"
                  >
                    ↺
                  </button>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="px-3 py-1.5 rounded-lg text-xs font-medium" :class="sumClass">
                Soma: {{ totalWeight }}/100
              </div>
              <p v-if="totalWeight !== 100" class="text-xs text-red-400" role="alert">
                A soma deve ser exatamente 100 para recalcular.
              </p>
            </div>

            <div class="flex gap-3">
              <button
                type="button"
                class="px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                :class="totalWeight === 100 ? 'bg-gold-600 text-marine-950 hover:bg-gold-500' : 'bg-graphite-800 text-gray-500'"
                :disabled="totalWeight !== 100"
                @click="recalculate"
              >
                Recalcular
              </button>
              <button
                type="button"
                class="px-6 py-2.5 rounded-lg font-semibold text-sm border border-graphite-700 text-gray-400 hover:text-white hover:border-graphite-600 transition-all duration-200"
                @click="resetAll"
              >
                Restaurar pesos padrão
              </button>
            </div>

            <!-- Recalculated ranking -->
            <div v-if="recalculatedRanking.length > 0" class="card-outline mt-4">
              <h4 class="text-base font-semibold text-white mb-3">Simulação personalizada</h4>
              <ol class="space-y-2">
                <li
                  v-for="(item, idx) in recalculatedRanking"
                  :key="item.team"
                  class="flex items-center gap-3 p-2.5 rounded-lg bg-graphite-900/60"
                >
                  <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0" :class="idx === 0 ? 'bg-gold-500 text-marine-950' : 'bg-graphite-800 text-gray-400'">
                    {{ idx + 1 }}
                  </span>
                  <span class="font-semibold text-gray-200 flex-1 text-sm">{{ item.flag }} {{ item.team }}</span>
                  <span class="text-sm font-mono text-gold-400">{{ item.score }}</span>
                </li>
              </ol>
              <p class="mt-4 text-xs text-gray-500">
                Este ranking é uma simulação personalizada baseada nos pesos definidos acima.
                Não substitui a estimativa editorial principal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { WeightConfig } from '~/types/teams'
import { DEFAULT_WEIGHTS } from '~/types/teams'
import { METHODOLOGY_WEIGHTS, TEAMS } from '~/data/teams'

const showSimulator = ref(false)

const weights = ref<WeightConfig>({ ...DEFAULT_WEIGHTS })

const weightSummary = METHODOLOGY_WEIGHTS.map(w => ({
  label: w.label,
  default: w.default,
}))

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
  if (totalWeight.value === 100) return 'bg-green-900/40 text-green-400 border border-green-800/60'
  return 'bg-red-900/30 text-red-400 border border-red-800/40'
})

function updateWeight(key: keyof WeightConfig, event: Event) {
  const target = event.target as HTMLInputElement
  weights.value[key] = parseInt(target.value, 10)
}

function resetWeight(key: keyof WeightConfig) {
  weights.value[key] = DEFAULT_WEIGHTS[key]
}

function resetAll() {
  weights.value = { ...DEFAULT_WEIGHTS }
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

  const scored = TEAMS.map(team => ({
    team: team.name,
    flag: team.flag,
    score: (
      team.strengthScore * normalized.strengthRankings +
      team.squadScore * normalized.squadDepth +
      team.formScore * normalized.recentForm +
      team.coachScore * normalized.coachModel +
      team.pathScore * normalized.groupPath +
      team.fitnessScore * normalized.fitness +
      team.knockoutScore * normalized.knockoutExp
    ).toFixed(1),
  }))

  scored.sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
  recalculatedRanking.value = scored.slice(0, 12)
}
</script>
