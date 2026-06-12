<template>
  <section class="section-container" aria-labelledby="hidden-heading">
    <h2 id="hidden-heading" class="section-title">
      Três seleções subestimadas que podem surpreender
    </h2>
    <p class="section-subtitle mb-8">
      Seleções cuja força competitiva pode ser maior do que a percepção pública atual.
    </p>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <article
        v-for="item in hiddenCards"
        :key="item.team.id"
        class="card-hover border border-graphite-800/50 transition-all duration-500 hover:border-graphite-600/60 hover:bg-graphite-800/60"
        :style="{ opacity: item.revealOpacity }"
        :aria-label="`${item.team.name}: ${item.description}`"
      >
        <div class="flex items-center gap-3 mb-4">
          <span class="text-3xl" aria-hidden="true">{{ item.team.flag }}</span>
          <h3 class="text-lg font-bold text-white">{{ item.team.name }}</h3>
        </div>

        <p class="text-sm text-gray-400 leading-relaxed mb-3">
          {{ item.description }}
        </p>

        <ul class="space-y-1.5">
          <li
            v-for="strength in item.team.strengths?.slice(0, 3)"
            :key="strength"
            class="flex items-start gap-2 text-xs text-gray-500"
          >
            <span class="text-gold-500/70 mt-0.5 shrink-0" aria-hidden="true">&#9654;</span>
            <span>{{ strength }}</span>
          </li>
        </ul>
      </article>
    </div>

    <!-- Disclaimer -->
    <div class="card border-l-4 border-graphite-600">
      <p class="text-sm text-gray-400 flex items-start gap-2">
        <span aria-hidden="true" class="text-gray-500 mt-0.5 shrink-0">&#8505;</span>
        <span>"Subestimada" significa que a força competitiva pode ser maior do que a percepção pública, não uma recomendação de aposta.</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TeamData } from '~/types/teams'
import { TEAMS } from '~/data/teams'

interface HiddenCard {
  team: TeamData
  description: string
  revealOpacity: number
}

const hiddenCards = computed<HiddenCard[]>(() => {
  const teams = TEAMS.filter(t => ['noruega', 'colombia', 'marrocos'].includes(t.id))

  return teams.map((team, index) => ({
    team,
    description: team.justification,
    revealOpacity: 0.85 + index * 0.05,
  }))
})
</script>
