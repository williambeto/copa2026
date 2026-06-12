<template>
  <section id="metodologia" class="section-dark" aria-labelledby="methodology-heading">
    <div class="section-inner-narrow">
      <p class="section-label">Transparência</p>
      <h2 id="methodology-heading" class="section-headline">
        Metodologia
      </h2>

      <p class="section-subhead mt-2 mb-8">
        A projeção combina <strong class="text-white">sete fatores ponderados</strong>:
        rankings FIFA e Elo, forma recente, qualidade e profundidade do elenco,
        situação de lesões, técnico e modelo de jogo, dificuldade do grupo e
        caminho no chaveamento, experiência em mata-mata, adaptação geográfica
        e projeções de modelos estatísticos externos.
      </p>

      <div class="callout-info mb-10">
        <span aria-hidden="true">&#9432;</span>
        As probabilidades são estimativas analíticas e não representam certeza,
        recomendação financeira ou orientação de aposta. O ranking editorial utiliza os pesos padrão abaixo.
      </div>

      <!-- Default weights -->
      <div class="editorial-card-accent p-6 mb-10">
        <h3 class="text-base font-display font-bold text-white mb-5">Pesos do modelo editorial</h3>
        <div class="space-y-3">
          <div
            v-for="item in weightSummary"
            :key="item.label"
            class="flex items-center justify-between text-sm"
          >
            <span class="text-gray-300 font-medium">{{ item.label }}</span>
            <div class="flex items-center gap-3">
              <div class="strength-bar-track w-28">
                <div
                  class="strength-bar-fill strength-bar-fill-gold"
                  :style="{ width: `${item.default}%`, minWidth: item.default > 0 ? '4px' : '0' }"
                />
              </div>
              <span class="data-value text-xs w-8 text-right text-gold-400">{{ item.default }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Accordion: simulator -->
      <div class="border-t border-surface-800/40 pt-6">
        <button
          type="button"
          class="accordion-trigger w-full"
          :aria-expanded="showSimulator"
          aria-controls="simulator-panel"
          @click="showSimulator = !showSimulator"
        >
          <span>Crie sua própria simulação</span>
          <span class="text-lg transition-transform duration-300" :class="{ 'rotate-180': showSimulator }" aria-hidden="true">▾</span>
        </button>

        <div
          id="simulator-panel"
          class="accordion-content"
          :style="{ maxHeight: showSimulator ? '2600px' : '0', opacity: showSimulator ? 1 : 0 }"
          role="region"
          :aria-hidden="!showSimulator"
        >
          <div class="accordion-content-inner space-y-5 pt-2">
            <p class="text-sm">
              Modifique os pesos de cada fator e recalcule para ver uma simulação personalizada.
              Os valores devem somar 100. O ranking editorial oficial usa os pesos padrão.
            </p>

            <div class="space-y-5">
              <div v-for="item in weightItems" :key="item.key" class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <label
                    :for="`weight-${item.key}`"
                    class="text-gray-300 font-medium border-b border-dotted border-gray-600"
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
                    class="flex-1 h-2 rounded-full appearance-none cursor-pointer accent-gold-500 bg-surface-800/60"
                    :aria-label="`Peso para ${item.label}`"
                    @input="updateWeight(item.key, $event)"
                  />
                  <button
                    type="button"
                    class="px-2 py-1 text-xs rounded hover:bg-surface-800 text-gray-500 hover:text-gray-300"
                    :aria-label="`Redefinir ${item.label}`"
                    @click="resetWeight(item.key)"
                  >
                    ↺
                  </button>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3 pb-2">
              <div
                class="px-3 py-1.5 rounded-sm text-xs font-medium"
                :class="totalWeight === 100 ? 'stat-badge-neutral bg-green-500/15 text-green-400 border-green-500/25' : 'bg-red-500/15 text-red-400 border-red-500/25'"
              >
                Soma: {{ totalWeight }}/100
              </div>
              <p v-if="totalWeight !== 100" class="text-xs text-red-400" role="alert">
                A soma deve ser exatamente 100 para recalcular.
              </p>
            </div>

            <div class="flex gap-3">
              <button
                type="button"
                class="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                :disabled="totalWeight !== 100"
                @click="recalculate"
              >
                Recalcular
              </button>
              <button
                type="button"
                class="btn-outline text-sm"
                @click="resetAll"
              >
                Restaurar pesos padrão
              </button>
            </div>

            <div v-if="recalculatedRanking.length > 0" class="editorial-card-border p-5 mt-4">
              <h4 class="text-base font-display font-bold text-white mb-3">Simulação personalizada</h4>
              <ol class="space-y-2">
                <li
                  v-for="(item, idx) in recalculatedRanking"
                  :key="item.team"
                  class="flex items-center gap-3 p-2.5 rounded-sm bg-surface-800/30"
                >
                  <span
                    class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    :class="idx === 0 ? 'bg-gold-500 text-navy-950' : 'bg-surface-800 text-gray-400'"
                  >
                    {{ idx + 1 }}
                  </span>
                  <span class="font-semibold text-gray-200 flex-1 text-sm">{{ item.flag }} {{ item.team }}</span>
                  <span class="text-sm font-mono text-gold-400 data-value">{{ item.score }}</span>
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
