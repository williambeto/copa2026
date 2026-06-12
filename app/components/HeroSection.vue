<template>
  <section
    id="resumo"
    class="relative min-h-screen flex items-center overflow-hidden"
    aria-labelledby="hero-title"
  >
    <!-- Decorative elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <!-- Stadium-like gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950 to-navy-900/80" />
      <!-- Field pattern -->
      <div class="absolute inset-0 field-pattern opacity-40" />
      <!-- Abstract trophy SVG -->
      <svg class="absolute -top-10 right-0 lg:right-10 w-80 h-80 lg:w-[500px] lg:h-[500px] text-semantic-accent/[0.04]" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 10 L115 55 L165 55 L125 85 L140 130 L100 105 L60 130 L75 85 L35 55 L85 55 Z" />
        <circle cx="100" cy="145" r="18" />
        <rect x="88" y="160" width="24" height="30" rx="3" />
      </svg>
      <!-- Data dot pattern -->
      <svg class="absolute top-1/3 right-1/3 w-72 h-72 text-semantic-text-primary/[0.015]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="6" cy="6" r="0.6" fill="currentColor" /></pattern></defs>
        <rect width="100" height="100" fill="url(#dots)" />
      </svg>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full">
      <div class="section-inner pt-32 pb-20 lg:pt-40 lg:pb-32">
        <p class="section-label animate-fade-in">
          World Cup 2026 · Análise editorial
        </p>

        <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mt-6">
          <!-- Left column: headline, description, CTAs -->
          <div class="lg:col-span-7 animate-fade-in">
            <h1
              id="hero-title"
              class="section-headline text-balance"
            >
              Quem tem a maior probabilidade de vencer a Copa do Mundo de 2026?
            </h1>

            <p class="section-subhead mt-6">
              Uma análise baseada em rankings, desempenho recente, qualidade do elenco,
              lesões, técnicos, grupos e caminhos possíveis até a final.
            </p>

            <div class="flex flex-wrap gap-4 pt-8">
              <a href="#ranking" class="btn-primary">
                Ver ranking completo
                <span aria-hidden="true" class="text-lg leading-none">→</span>
              </a>
              <a href="#metodologia" class="btn-outline">
                Entender a metodologia
              </a>
            </div>
          </div>

          <!-- Right column: editorial stat blocks + strength bars (no card) -->
          <div class="lg:col-span-5 animate-slide-up">
            <!-- Featured stats as floating editorial stat blocks -->
            <div class="flex flex-wrap gap-x-8 gap-y-6">
              <div class="stat-block">
                <span class="data-percent">16,5%</span>
                <span class="stat-block-label">Probabilidade estimada</span>
              </div>
              <div class="stat-block">
                <span class="stat-block-value">1º</span>
                <span class="stat-block-label">Ranking Elo</span>
              </div>
              <div class="stat-block">
                <span class="stat-block-value">2º</span>
                <span class="stat-block-label">Ranking FIFA</span>
              </div>
              <div class="stat-block">
                <span class="stat-block-value text-semantic-accent">Campeã</span>
                <span class="stat-block-label">Euro 2024</span>
              </div>
            </div>

            <!-- Editorial strength bars -->
            <div class="mt-10 pt-8 border-t border-surface-800/40">
              <p class="text-xs font-display font-semibold uppercase tracking-[0.15em] text-semantic-text-muted mb-5">
                Distribuição de probabilidades
              </p>
              <div class="space-y-3">
                <div
                  v-for="bar in probabilityBars"
                  :key="bar.label"
                  class="flex items-center gap-3"
                >
                  <span class="w-20 flex-shrink-0 text-sm text-semantic-text-secondary text-right font-sans font-medium">
                    {{ bar.label }}
                  </span>
                  <div class="flex-1 strength-bar-track">
                    <div
                      class="strength-bar-fill strength-bar-fill-gold"
                      :style="{ width: bar.percent + '%', minWidth: bar.percent > 0 ? '8px' : '0' }"
                    />
                  </div>
                  <span class="w-10 text-right text-xs font-mono text-semantic-accent tabular-nums font-semibold">
                    {{ bar.value }}%
                  </span>
                </div>
              </div>
              <p class="mt-4 text-xs text-semantic-text-muted leading-relaxed">
                Nenhuma candidata possui probabilidade dominante. A Copa permanece aberta e imprevisível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom fade -->
    <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" aria-hidden="true" />
  </section>
</template>

<script setup lang="ts">
interface ProbabilityBar {
  label: string
  value: number
  percent: number
}

const probabilityBars: ProbabilityBar[] = [
  { label: 'Espanha', value: 16.5, percent: 16.5 },
  { label: 'França', value: 13.5, percent: 13.5 },
  { label: 'Inglaterra', value: 11.5, percent: 11.5 },
  { label: 'Argentina', value: 11, percent: 11 },
  { label: 'Portugal', value: 8, percent: 8 },
  { label: 'Brasil', value: 7.5, percent: 7.5 },
  { label: 'Outras', value: 32, percent: 32 },
]
</script>

<style scoped>
.field-pattern {
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 40px,
    rgba(255, 255, 255, 0.015) 40px,
    rgba(255, 255, 255, 0.015) 41px
  );
}
</style>
