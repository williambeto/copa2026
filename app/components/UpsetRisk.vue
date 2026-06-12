<template>
  <section class="section-container" aria-labelledby="upset-heading">
    <h2 id="upset-heading" class="section-title">
      Risco de zebra
    </h2>
    <p class="section-subtitle mb-8">
      Favoritas expostas a eliminações precoces e as seleções com maior potencial para surpreender.
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Left column: Favorites at risk -->
      <div class="card border-l-4 border-red-600/40">
        <h3 class="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
          <span aria-hidden="true">&#9888;</span>
          Favoritas sob risco
        </h3>
        <ul class="space-y-4">
          <li
            v-for="item in favoritesAtRisk"
            :key="item.team"
            class="bg-graphite-900/50 rounded-lg p-3 border border-graphite-800/60"
          >
            <div class="flex items-center gap-2 mb-2">
              <span aria-hidden="true" class="text-lg">{{ item.flag }}</span>
              <span class="font-semibold text-gray-100 text-sm">{{ item.team }}</span>
            </div>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="factor in item.riskFactors"
                :key="factor"
                class="px-2 py-0.5 rounded text-xs bg-red-900/30 text-red-400/90 border border-red-800/40"
              >
                {{ factor }}
              </span>
            </div>
          </li>
        </ul>
      </div>

      <!-- Right column: Giant killers -->
      <div class="card border-l-4 border-emerald-600/40">
        <h3 class="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
          <span aria-hidden="true">&#9878;</span>
          Seleções capazes de eliminar favoritas
        </h3>
        <ul class="space-y-4">
          <li
            v-for="item in giantKillers"
            :key="item.team"
            class="bg-graphite-900/50 rounded-lg p-3 border border-graphite-800/60"
          >
            <div class="flex items-center gap-2 mb-2">
              <span aria-hidden="true" class="text-lg">{{ item.flag }}</span>
              <span class="font-semibold text-gray-100 text-sm">{{ item.team }}</span>
            </div>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="strength in item.strengths"
                :key="strength"
                class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-emerald-900/30 text-emerald-400/90 border border-emerald-800/40"
              >
                <span class="w-1.5 h-1.5 rounded-full" :class="indicatorColor(strength)" aria-hidden="true" />
                {{ strength }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UPSET_RISK } from '~/data/teams'

const favoritesAtRisk = ref(UPSET_RISK.favoritesAtRisk)
const giantKillers = ref(UPSET_RISK.giantKillers)

const indicatorKeywords: Record<string, string> = {
  defensiva: 'bg-blue-400',
  defesa: 'bg-blue-400',
  transição: 'bg-amber-400',
  transicao: 'bg-amber-400',
  física: 'bg-red-400',
  fisico: 'bg-red-400',
  decisivo: 'bg-purple-400',
  decisivos: 'bg-purple-400',
  experiência: 'bg-cyan-400',
  experiencia: 'bg-cyan-400',
  competitiva: 'bg-cyan-400',
  tática: 'bg-emerald-400',
  tatica: 'bg-emerald-400',
  organização: 'bg-emerald-400',
  organizacao: 'bg-emerald-400',
  talento: 'bg-pink-400',
}

function indicatorColor(strength: string): string {
  const lower = strength.toLowerCase()
  for (const [keyword, color] of Object.entries(indicatorKeywords)) {
    if (lower.includes(keyword)) return color
  }
  return 'bg-gray-400'
}
</script>
