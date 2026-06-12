<template>
  <section id="comparativo" class="section-container" aria-labelledby="comparativo-title">
    <h2 id="comparativo-title" class="section-title">
      Resumo executivo
    </h2>
    <p class="section-subtitle mb-10">
      Destaques analíticos entre as principais candidatas ao título da Copa do Mundo FIFA 2026.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
      <article
        v-for="card in cards"
        :key="card.label"
        class="card-hover flex flex-col gap-3"
      >
        <span class="text-xs font-semibold uppercase tracking-wider text-gold-400">
          {{ card.label }}
        </span>
        <div class="flex items-center gap-3">
          <span class="text-3xl" role="img" :aria-label="`Bandeira de ${card.team}`">
            {{ card.flag }}
          </span>
          <div class="flex flex-col">
            <span class="text-lg font-bold text-white light:text-gray-900">
              {{ card.team }}
            </span>
            <span
              v-if="card.value"
              class="text-2xl font-extrabold text-gold-400 font-mono"
            >
              {{ card.value }}
            </span>
          </div>
        </div>
      </article>
    </div>

    <p class="mt-6 text-sm italic text-gray-500 light:text-gray-500">
      Percentuais são estimativas analíticas, não certezas.
    </p>
  </section>
</template>

<script setup lang="ts">
import { EXECUTIVE_CARDS } from '~/data/teams'

const cards = EXECUTIVE_CARDS
</script>
