<template>
  <section class="section-light" aria-labelledby="hidden-heading">
    <div class="section-inner">
      <p class="section-label">Surpresas</p>
      <h2 id="hidden-heading" class="section-headline">
        Três seleções que podem quebrar as previsões
      </h2>

      <div class="mt-12 space-y-16 md:space-y-24">
        <article
          v-for="(item, idx) in hiddenCards"
          :key="item.team.id"
          class="grid md:grid-cols-5 gap-6 md:gap-10 items-center"
        >
          <div
            class="md:col-span-2 photo-placeholder aspect-[4/3] rounded-sm"
            :class="idx % 2 === 1 ? 'md:order-2' : ''"
            :style="{ backgroundImage: flagGradient(item.team.id) }"
          >
            <div class="absolute bottom-4 left-5 z-10">
              <span class="text-5xl block drop-shadow-lg" aria-hidden="true">{{ item.team.flag }}</span>
            </div>
          </div>

          <div :class="idx % 2 === 1 ? 'md:col-span-3 md:order-1' : 'md:col-span-3'">
            <h3 class="text-2xl lg:text-3xl font-display font-extrabold text-gray-900 leading-tight">
              {{ item.team.name }}
            </h3>

            <div class="mt-4 flex items-center gap-2">
              <span class="text-xs font-semibold uppercase tracking-wider text-gold-600">Jogador-chave</span>
              <span class="tag-gold text-sm">{{ item.team.keyPlayers?.[0] }}</span>
            </div>

            <div class="mt-4">
              <p class="text-xs font-semibold uppercase tracking-wider text-gray-500">Principal força</p>
              <p class="font-sans text-base text-gray-700 mt-1 leading-relaxed font-medium">
                {{ item.team.strengths?.[0] }}
              </p>
            </div>

            <div class="mt-6 pt-6 border-t border-gray-200">
              <p class="font-serif text-base italic text-gray-600 leading-relaxed">
                {{ item.team.justification }}
              </p>
            </div>
          </div>
        </article>
      </div>

      <div class="callout-info mt-16 max-w-2xl mx-auto">
        <span aria-hidden="true">&#9432;</span>
        A expressão "quebrar as previsões" indica que a força competitiva destas seleções pode ser maior do que a percepção pública atual. Não representa recomendação de aposta.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TeamData } from '~/types/teams'
import { TEAMS } from '~/data/teams'

interface HiddenCard {
  team: TeamData
}

const hiddenCards = computed<HiddenCard[]>(() => {
  return ['noruega', 'colombia', 'marrocos']
    .map(id => TEAMS.find(t => t.id === id))
    .filter((t): t is TeamData => t !== undefined)
    .map(team => ({ team }))
})

const gradients: Record<string, string> = {
  noruega: 'linear-gradient(135deg, #ba0c2f, #ffffff 40%, #002868)',
  colombia: 'linear-gradient(135deg, #fcd116, #003893 50%, #ce1126)',
  marrocos: 'linear-gradient(135deg, #c1272d 50%, #006233)',
}

function flagGradient(id: string): string {
  return gradients[id] || 'linear-gradient(135deg, #1a1a2e, #16213e)'
}
</script>
