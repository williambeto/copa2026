<template>
  <section
    class="py-16 md:py-24 bg-marine-900/60"
    aria-labelledby="group-heading"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        id="group-heading"
        class="text-2xl md:text-3xl lg:text-4xl font-extrabold font-mono tracking-tight text-white mb-4"
      >
        Grupo e dificuldade inicial
      </h2>
      <p class="text-gray-400 text-sm md:text-base mb-10 max-w-2xl">
        A fase de grupos define o ponto de partida de cada favorita. Analisamos adversários,
        a dificuldade da chave e o impacto no caminho até o mata-mata.
      </p>

      <!-- Grid of group cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="entry in groupEntries"
          :key="entry.team.id"
          class="card card-hover rounded-xl bg-marine-950/70 border border-marine-800/60 p-6 flex flex-col"
        >
          <!-- Team header -->
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl" aria-hidden="true">{{ entry.team.flag }}</span>
            <h3 class="text-lg font-bold text-white">{{ entry.team.name }}</h3>
          </div>

          <!-- Opponents -->
          <div class="mb-4">
            <p class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Grupo com:</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="opp in entry.group.opponents"
                :key="opp"
                class="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-marine-800/80 text-gray-300 border border-marine-700/50"
              >
                {{ opp }}
              </span>
            </div>
          </div>

          <!-- Difficulty badge -->
          <div class="mb-4">
            <p class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5">Classificação</p>
            <span
              class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold"
              :class="difficultyClass(entry.group.difficulty)"
            >
              {{ entry.group.difficultyLabel }}
            </span>
          </div>

          <!-- First place chance -->
          <div class="mb-4">
            <p class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">Chance de 1º lugar</p>
            <div class="flex items-center gap-3">
              <!-- Mini progress bar -->
              <div class="flex-1 h-2 rounded-full bg-marine-800 overflow-hidden" role="progressbar" :aria-valuenow="entry.group.firstPlaceChance * 100" aria-valuemin="0" aria-valuemax="100" :aria-label="`${(entry.group.firstPlaceChance * 100).toFixed(0)}% de chance de terminar em primeiro`">
                <div
                  class="h-full rounded-full transition-all duration-700"
                  :class="firstPlaceBarClass(entry.group.firstPlaceChance)"
                  :style="{ width: `${entry.group.firstPlaceChance * 100}%` }"
                />
              </div>
              <span class="text-sm font-bold text-gold-400 font-mono w-12 text-right">
                {{ (entry.group.firstPlaceChance * 100).toFixed(0) }}%
              </span>
            </div>
          </div>

          <!-- Knockout impact -->
          <div class="mt-auto">
            <p class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5">Impacto no mata-mata</p>
            <p class="text-xs text-gray-400 leading-relaxed">{{ entry.group.knockoutImpact }}</p>
          </div>
        </article>
      </div>

      <!-- Warning note -->
      <div class="mt-8 p-4 rounded-lg bg-amber-500/5 border border-amber-500/15">
        <div class="flex items-start gap-3">
          <span class="text-amber-400 mt-0.5 flex-shrink-0" aria-hidden="true">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </span>
          <p class="text-sm text-amber-200/80 leading-relaxed">
            O chaveamento definitivo depende também da combinação dos oito melhores terceiros colocados.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TeamData, GroupInfo } from '~/types/teams'
import { TEAMS, GROUPS } from '~/data/teams'

const GROUP_TEAM_IDS = ['espanha', 'franca', 'argentina', 'inglaterra', 'portugal', 'brasil'] as const

interface GroupEntry {
  team: TeamData
  group: GroupInfo
}

const groupEntries = computed<GroupEntry[]>(() => {
  return GROUP_TEAM_IDS
    .map((id) => {
      const team = TEAMS.find((t) => t.id === id)
      const group = GROUPS[id]
      if (!team || !group) return null
      return { team, group }
    })
    .filter((entry): entry is GroupEntry => entry !== null)
})

function difficultyClass(difficulty: GroupInfo['difficulty']): string {
  switch (difficulty) {
    case 'Muito favorável':
    case 'Favorável':
      return 'bg-green-900/50 text-green-400 border border-green-500/25'
    case 'Moderado':
      return 'bg-yellow-900/50 text-yellow-400 border border-yellow-500/25'
    case 'Perigoso na estreia':
      return 'bg-orange-900/50 text-orange-400 border border-orange-500/25'
    case 'Difícil':
    case 'Muito difícil':
      return 'bg-red-900/50 text-red-400 border border-red-500/25'
    default:
      return 'bg-gray-800/50 text-gray-400 border border-gray-600/25'
  }
}

function firstPlaceBarClass(chance: number): string {
  if (chance >= 0.8) return 'bg-green-500'
  if (chance >= 0.65) return 'bg-yellow-500'
  if (chance >= 0.5) return 'bg-orange-500'
  return 'bg-red-500'
}
</script>
