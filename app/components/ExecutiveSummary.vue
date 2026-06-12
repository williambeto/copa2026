<template>
  <section id="comparativo" class="section-container-alt" aria-labelledby="comparativo-title">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <p class="section-label">Visão geral</p>
      <h2 id="comparativo-title" class="section-title">
        Resumo executivo
      </h2>
      <p class="section-subtitle mb-10">
        Os principais insights da análise entre as candidatas ao título da Copa do Mundo FIFA 2026.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <article
          v-for="card in cards"
          :key="card.label"
          class="card-outline flex flex-col gap-3 hover:border-graphite-700 transition-colors duration-200"
        >
          <span class="text-xs font-semibold uppercase tracking-wider text-gold-500">
            {{ card.label }}
          </span>
          <div class="flex items-center gap-3">
            <span class="text-3xl leading-none" role="img" :aria-label="`Bandeira de ${card.team}`">
              {{ card.flag }}
            </span>
            <div>
              <span class="text-lg font-bold text-white">
                {{ card.team }}
              </span>
              <span
                v-if="card.value"
                class="block text-2xl font-extrabold text-gold-500 font-mono mt-0.5"
              >
                {{ card.value }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <p class="mt-8 text-sm text-gray-500 leading-relaxed">
        <span aria-hidden="true">ℹ</span>
        Os percentuais são estimativas analíticas baseadas no modelo descrito na metodologia. Não representam certezas nem recomendações.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { EXECUTIVE_CARDS } from '~/data/teams'

const cards = EXECUTIVE_CARDS
</script>
