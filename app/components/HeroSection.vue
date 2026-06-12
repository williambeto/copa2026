<template>
  <section
    id="resumo"
    class="relative min-h-screen flex items-center overflow-hidden"
    aria-labelledby="hero-title"
  >
    <!-- Gradient overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-marine-950 via-marine-950/90 to-transparent pointer-events-none"
      aria-hidden="true"
    />

    <!-- Abstract decorative SVG -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <!-- Golden trophy silhouette -->
      <svg
        class="absolute -top-10 right-0 lg:right-10 w-72 h-72 lg:w-96 lg:h-96 text-gold-500/5"
        viewBox="0 0 200 200"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 10 L115 55 L165 55 L125 85 L140 130 L100 105 L60 130 L75 85 L35 55 L85 55 Z" />
        <circle cx="100" cy="145" r="18" />
        <rect x="88" y="160" width="24" height="30" rx="3" />
      </svg>
      <!-- Hexagonal data pattern -->
      <svg
        class="absolute -bottom-20 -left-10 w-80 h-80 text-blue-400/5"
        viewBox="0 0 200 200"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="100,10 180,55 180,135 100,180 20,135 20,55" />
        <polygon points="100,40 165,75 165,125 100,160 35,125 35,75" />
      </svg>
      <!-- Pitch lines -->
      <svg
        class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 text-green-400/3"
        viewBox="0 0 400 200"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="5" width="390" height="190" rx="2" />
        <line x1="200" y1="5" x2="200" y2="195" />
        <circle cx="200" cy="100" r="30" />
        <rect x="5" y="45" width="60" height="110" />
        <rect x="335" y="45" width="60" height="110" />
      </svg>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full section-container pt-28 pb-16 lg:pt-32 lg:pb-24">
      <div class="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
        <!-- Left column: title, subtitle, mini bar -->
        <div class="lg:col-span-3 space-y-8 animate-fade-in">
          <!-- Overlabel -->
          <p class="text-sm font-mono uppercase tracking-widest text-gold-500">
            Análise de probabilidades
          </p>

          <h1
            id="hero-title"
            class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight text-balance"
          >
            Quem tem a maior probabilidade de vencer a Copa do Mundo de 2026?
          </h1>

          <p class="text-lg text-gray-400 max-w-2xl text-balance">
            Uma análise baseada em rankings, desempenho recente, qualidade do elenco,
            lesões, técnicos, grupos e caminhos possíveis até a final.
          </p>

          <!-- Mini bar chart -->
          <div class="space-y-3" aria-label="Distribuição de probabilidades entre seleções">
            <p class="text-sm font-semibold text-gray-300 font-mono uppercase tracking-wide">
              Distribuição de probabilidades
            </p>
            <div class="space-y-2.5">
              <div
                v-for="bar in probabilityBars"
                :key="bar.label"
                class="flex items-center gap-3"
              >
                <span class="w-20 flex-shrink-0 text-xs text-gray-400 text-right font-mono">
                  {{ bar.label }}
                </span>
                <div class="flex-1 h-6 bg-marine-800/60 rounded-full overflow-hidden">
                  <div
                    class="h-full rounded-full transition-all duration-1000 ease-out"
                    :class="[bar.color]"
                    :style="{ width: bar.percent + '%' }"
                  >
                    <span
                      v-if="bar.percent > 5"
                      class="text-xs font-bold px-2 leading-6 text-white font-mono"
                    >
                      {{ bar.value }}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA buttons -->
          <div class="flex flex-wrap gap-4 pt-4">
            <a
              href="#ranking"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-500 text-marine-950 font-bold text-sm hover:bg-gold-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Ver ranking completo
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#metodologia"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-600 text-gray-300 font-semibold text-sm hover:border-gold-500 hover:text-gold-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Entender a metodologia
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <!-- Right column: highlight card -->
        <div class="lg:col-span-2 animate-slide-up" style="animation-delay: 200ms">
          <article
            class="relative overflow-hidden rounded-2xl border border-gold-500/20 bg-gradient-to-br from-marine-900/90 to-graphite-900/90 backdrop-blur-md p-6 sm:p-8"
            aria-labelledby="highlight-heading"
          >
            <!-- Gold corner accent -->
            <div
              class="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-gold-500 to-transparent"
              aria-hidden="true"
            />
            <div
              class="absolute top-0 right-0 w-12 h-1 bg-gradient-to-l from-gold-500 to-transparent"
              aria-hidden="true"
            />

            <span class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gold-500 mb-4">
              <span aria-hidden="true">🥇</span>
              Destaque
            </span>

            <h2 id="highlight-heading" class="text-xl sm:text-2xl font-bold text-white mb-6">
              Espanha aparece como a seleção mais provável
            </h2>

            <dl class="space-y-4">
              <!-- Probability -->
              <div class="flex items-center justify-between">
                <dt class="text-sm text-gray-400">Probabilidade</dt>
                <dd class="text-2xl font-bold text-gold-500 font-mono">16,5%</dd>
              </div>

              <!-- Elo ranking -->
              <div class="flex items-center justify-between">
                <dt class="text-sm text-gray-400">Ranking Elo</dt>
                <dd class="text-base font-semibold text-white font-mono">1º</dd>
              </div>

              <!-- FIFA ranking -->
              <div class="flex items-center justify-between">
                <dt class="text-sm text-gray-400">Ranking FIFA</dt>
                <dd class="text-base font-semibold text-white font-mono">2º</dd>
              </div>

              <!-- Recent title -->
              <div class="flex items-center justify-between">
                <dt class="text-sm text-gray-400">Título recente</dt>
                <dd class="text-base font-semibold text-green-400">Campeã da Euro 2024</dd>
              </div>

              <!-- Divider -->
              <hr class="border-marine-700/50" aria-hidden="true" />

              <!-- Confidence -->
              <div class="flex items-center justify-between">
                <dt class="text-sm text-gray-400">Confiança</dt>
                <dd class="text-sm font-medium text-gray-300 text-right max-w-[180px]">
                  Favorita, mas sem domínio absoluto
                </dd>
              </div>
            </dl>

            <!-- No team exceeds 20% note -->
            <p class="mt-5 pt-4 border-t border-marine-700/50 text-xs text-gray-500">
              Nenhuma seleção ultrapassa 20% de probabilidade. O torneio segue aberto e imprevisível.
            </p>
          </article>
        </div>
      </div>
    </div>

    <!-- Bottom fade -->
    <div
      class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-marine-950 to-transparent pointer-events-none"
      aria-hidden="true"
    />
  </section>
</template>

<script setup lang="ts">
interface ProbabilityBar {
  label: string
  value: number
  percent: number
  color: string
}

const probabilityBars: ProbabilityBar[] = [
  { label: 'Espanha', value: 16.5, percent: 16.5, color: 'bg-gold-500' },
  { label: 'França', value: 13.5, percent: 13.5, color: 'bg-blue-500' },
  { label: 'Inglaterra', value: 11.5, percent: 11.5, color: 'bg-blue-400' },
  { label: 'Argentina', value: 11, percent: 11, color: 'bg-green-500' },
  { label: 'Portugal', value: 8, percent: 8, color: 'bg-green-400' },
  { label: 'Brasil', value: 7.5, percent: 7.5, color: 'bg-gold-600' },
  { label: 'Outras', value: 32, percent: 32, color: 'bg-gray-600' },
]
</script>
