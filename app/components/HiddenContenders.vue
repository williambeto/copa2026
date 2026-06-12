<template>
  <section id="surpresas" class="section-container" aria-labelledby="hidden-heading">
    <p class="section-label">Surpresas</p>
    <h2 id="hidden-heading" class="section-title">
      Três seleções subestimadas que podem surpreender
    </h2>
    <p class="section-subtitle mb-10">
      Seleções cuja força competitiva pode ser maior do que a percepção pública atual.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <article
        v-for="item in hiddenCards"
        :key="item.team.id"
        class="card-outline hover:border-graphite-600 transition-all duration-300"
        :aria-label="`${item.team.name}: ${item.description}`"
      >
        <div class="flex items-center gap-3 mb-4">
          <span class="text-3xl leading-none" aria-hidden="true">{{ item.team.flag }}</span>
          <h3 class="text-lg font-bold text-white">{{ item.team.name }}</h3>
        </div>

        <p class="text-sm text-gray-400 leading-relaxed mb-4">
          {{ item.description }}
        </p>

        <ul class="space-y-1.5" role="list">
          <li
            v-for="strength in item.team.strengths?.slice(0, 3)"
            :key="strength"
            class="flex items-start gap-2 text-xs text-gray-500"
          >
            <span class="text-green-500/70 mt-0.5 shrink-0" aria-hidden="true">→</span>
            <span>{{ strength }}</span>
          </li>
        </ul>
      </article>
    </div>

    <!-- Disclaimer -->
    <div class="callout-info mt-8 text-xs">
      <span aria-hidden="true">&#9432;</span>
      "Subestimada" significa que a força competitiva pode ser maior do que a percepção pública.
      Não representa recomendação de aposta.
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
}

const hiddenCards = computed<HiddenCard[]>(() => {
  return ['noruega', 'colombia', 'marrocos']
    .map(id => TEAMS.find(t => t.id === id))
    .filter((t): t is TeamData => t !== undefined)
    .map(team => ({
      team,
      description: team.justification,
    }))
})
</script>
