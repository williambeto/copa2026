<template>
  <section class="section-container" aria-labelledby="top3-heading">
    <h2 id="top3-heading" class="section-title">
      Top 3 racional
    </h2>
    <p class="section-subtitle mb-8">
      As três seleções com a melhor combinação de força atual, profundidade de elenco e caminho projetado.
    </p>

    <!-- Spotlight cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <article
        v-for="card in topThreeCards"
        :key="card.team.id"
        class="card-hover relative overflow-hidden"
        :class="card.borderClass"
        :aria-label="`${card.position}. ${card.team.name}: ${card.description}`"
      >
        <!-- Position number -->
        <div class="absolute top-4 right-4 text-6xl font-extrabold opacity-10 tabular-nums" aria-hidden="true">
          {{ card.position }}
        </div>

        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl" aria-hidden="true">{{ card.team.flag }}</span>
            <div>
              <h3 class="text-xl font-bold text-white">{{ card.team.name }}</h3>
              <p class="text-xs text-gray-500">Probabilidade estimada: {{ card.team.probability }}%</p>
            </div>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed">{{ card.description }}</p>
          <div class="mt-4 flex items-center gap-2">
            <span
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
              :class="card.tagClass"
            >
              {{ card.positionLabel }}
            </span>
          </div>
        </div>
      </article>
    </div>

    <!-- Mini comparison bars -->
    <div class="card">
      <h3 class="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wide">
        Comparação de métricas
      </h3>
      <div class="space-y-4">
        <div
          v-for="metric in comparisonMetrics"
          :key="metric.key"
          class="space-y-2"
        >
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray-400">{{ metric.label }}</span>
          </div>
          <div class="flex gap-2">
            <div
              v-for="team in topThreeCards"
              :key="team.team.id"
              class="flex-1 space-y-1"
            >
              <div class="flex items-center justify-between text-xs">
                <span class="text-gray-500">{{ team.team.flag }}</span>
                <span class="text-gray-400 tabular-nums font-mono">
                  {{ metric.getValue(team.team) }}/10
                </span>
              </div>
              <div class="w-full bg-graphite-800 rounded-full h-2 overflow-hidden" :aria-label="`${team.team.name}: ${metric.getValue(team.team)} de 10 em ${metric.label}`">
                <div
                  class="h-full rounded-full transition-all duration-700 ease-out"
                  :class="team.barColorClass"
                  :style="{ width: `${(metric.getValue(team.team) / 10) * 100}%` }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TeamData } from '~/types/teams'
import { TEAMS } from '~/data/teams'

interface TopThreeCard {
  position: number
  positionLabel: string
  team: TeamData
  description: string
  borderClass: string
  tagClass: string
  barColorClass: string
}

const topThreeCards = computed<TopThreeCard[]>(() => {
  const esp = TEAMS.find(t => t.id === 'espanha')!
  const fra = TEAMS.find(t => t.id === 'franca')!
  const eng = TEAMS.find(t => t.id === 'inglaterra')!

  return [
    {
      position: 1,
      positionLabel: '1º lugar',
      team: esp,
      description: 'Melhor equilíbrio geral.',
      borderClass: 'border-l-4 border-gold-500',
      tagClass: 'bg-gold-500/20 text-gold-400',
      barColorClass: 'bg-gold-500',
    },
    {
      position: 2,
      positionLabel: '2º lugar',
      team: fra,
      description: 'Maior profundidade e experiência de mata-mata.',
      borderClass: 'border-l-4 border-sky-500',
      tagClass: 'bg-sky-500/20 text-sky-400',
      barColorClass: 'bg-sky-500',
    },
    {
      position: 3,
      positionLabel: '3º lugar',
      team: eng,
      description: 'Talento suficiente para conquistar o título, com bom caminho inicial.',
      borderClass: 'border-l-4 border-emerald-500',
      tagClass: 'bg-emerald-500/20 text-emerald-400',
      barColorClass: 'bg-emerald-500',
    },
  ]
})

interface ComparisonMetric {
  key: string
  label: string
  getValue: (team: TeamData) => number
}

const comparisonMetrics: ComparisonMetric[] = [
  { key: 'strengthScore', label: 'Força', getValue: t => t.strengthScore },
  { key: 'squadScore', label: 'Elenco', getValue: t => t.squadScore },
  { key: 'formScore', label: 'Forma', getValue: t => t.formScore },
]
</script>
