<template>
  <section id="comparativo" class="section-light" aria-labelledby="comparativo-title">
    <div class="section-inner">
      <p class="section-label animate-fade-in">
        Visão geral
      </p>

      <h2 id="comparativo-title" class="section-headline animate-fade-in">
        Resumo executivo
      </h2>

      <p class="section-subhead mt-2 mb-10 animate-fade-in">
        Os principais insights da análise entre as candidatas ao título da Copa do Mundo FIFA 2026.
      </p>

      <!-- Editorial pull-quote -->
      <blockquote class="pull-quote mb-12 animate-fade-in">
        "A Espanha é hoje a seleção mais completa, mas França, Inglaterra e Argentina permanecem próximas."
      </blockquote>

      <!-- Insight grid: key takeaways with flags, no KPIs -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 animate-slide-up">
        <div
          v-for="card in cards"
          :key="card.label"
          class="flex items-start gap-4"
        >
          <span class="text-2xl flex-shrink-0 leading-none mt-0.5" role="img" :aria-label="`Bandeira de ${card.team}`">
            {{ card.flag }}
          </span>
          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-semantic-accent mb-0.5">
              {{ card.label }}
            </p>
            <p class="text-lg font-display font-bold text-semantic-text-primary leading-snug">
              {{ card.team }}
            </p>
            <p
              v-if="card.value"
              class="text-sm font-sans text-semantic-text-muted mt-1 leading-relaxed"
            >
              {{ card.value }}
            </p>
          </div>
        </div>
      </div>

      <div class="hr-gold mx-auto mt-12" />

      <p class="mt-6 text-sm text-semantic-text-muted leading-relaxed text-center max-w-xl mx-auto">
        Os percentuais são estimativas analíticas baseadas no modelo descrito na metodologia. Não representam certezas nem recomendações.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { EXECUTIVE_CARDS } from '~/data/teams'

const cards = EXECUTIVE_CARDS
</script>
