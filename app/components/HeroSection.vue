<template>
  <section
    id="resumo"
    class="relative min-h-screen flex items-center overflow-hidden"
    aria-labelledby="hero-title"
  >
    <!-- Background decorative elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <!-- Trophy silhouette -->
      <svg class="absolute -top-10 right-0 lg:right-10 w-80 h-80 lg:w-[500px] lg:h-[500px] text-gold-500/[0.04]" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 10 L115 55 L165 55 L125 85 L140 130 L100 105 L60 130 L75 85 L35 55 L85 55 Z" />
        <circle cx="100" cy="145" r="18" />
        <rect x="88" y="160" width="24" height="30" rx="3" />
      </svg>
      <!-- North America map outline -->
      <svg class="absolute bottom-0 left-0 w-96 h-96 text-blue-400/[0.03]" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,30 Q60,10 90,15 Q110,12 120,25 Q130,35 125,60 Q128,80 115,95 Q105,115 95,130 Q90,150 75,165 Q55,170 40,155 Q25,140 30,120 Q28,100 20,80 Q15,60 25,45 Q32,32 50,30Z" />
        <path d="M30,70 Q40,65 55,60 Q65,50 70,65 Q68,80 55,88 Q45,90 30,85Z" fill="currentColor" fill-opacity="0.3"/>
        <circle cx="65" cy="45" r="2" />
        <circle cx="105" cy="75" r="2" />
        <circle cx="72" cy="110" r="2" />
        <circle cx="50" cy="95" r="1.5" />
        <circle cx="38" cy="58" r="1.5" />
      </svg>
      <!-- Data grid pattern -->
      <svg class="absolute top-1/4 right-1/4 w-64 h-64 text-white/[0.02]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="0.8" fill="currentColor"/></pattern></defs>
        <rect width="100" height="100" fill="url(#grid)"/>
      </svg>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full section-container pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div class="max-w-[1200px] mx-auto">
        <!-- Overlabel -->
        <p class="section-label mb-6 animate-fade-in">
          World Cup 2026 · Análise editorial
        </p>

        <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <!-- Left: Title and context -->
          <div class="lg:col-span-7 space-y-8 animate-fade-in">
            <h1
              id="hero-title"
              class="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[3.75rem] font-extrabold text-white leading-[1.08] tracking-tight text-balance"
            >
              Quem tem a maior probabilidade de vencer a Copa do Mundo de 2026?
            </h1>

            <p class="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
              Uma análise baseada em rankings, desempenho recente, qualidade do elenco,
              lesões, técnicos, grupos e caminhos possíveis até a final.
            </p>

            <!-- Mini probability bars -->
            <div class="pt-4 space-y-3 max-w-lg" aria-label="Distribuição de probabilidades entre as principais seleções">
              <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                Nenhuma seleção ultrapassa 20%
              </p>
              <div class="space-y-2">
                <div
                  v-for="bar in probabilityBars"
                  :key="bar.label"
                  class="flex items-center gap-3"
                >
                  <span class="w-20 flex-shrink-0 text-xs text-gray-500 text-right font-mono">
                    {{ bar.label }}
                  </span>
                  <div class="flex-1 h-7 bg-marine-800/50 rounded-full overflow-hidden">
                    <div
                      class="h-full rounded-full flex items-center justify-end pr-3 transition-all duration-1000 ease-out"
                      :class="[bar.color]"
                      :style="{ width: bar.percent + '%', minWidth: bar.percent > 0 ? '30px' : '0' }"
                    >
                      <span
                        v-if="bar.percent > 6"
                        class="text-xs font-bold text-white font-mono"
                      >
                        {{ bar.value }}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTAs -->
            <div class="flex flex-wrap gap-4 pt-6">
              <a
                href="#ranking"
                class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-500 text-marine-950 font-bold text-sm sm:text-base hover:bg-gold-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Ver ranking completo
                <span aria-hidden="true" class="text-lg">→</span>
              </a>
              <a
                href="#metodologia"
                class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-graphite-700 text-gray-300 font-semibold text-sm sm:text-base hover:border-gold-500/50 hover:text-gold-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Entender a metodologia
              </a>
            </div>
          </div>

          <!-- Right: Highlight card -->
          <div class="lg:col-span-5 animate-slide-up" style="animation-delay: 250ms">
            <article
              class="card-highlight relative overflow-hidden"
              aria-labelledby="highlight-heading"
            >
              <!-- Corner accents -->
              <div class="absolute top-0 left-0 w-1.5 h-16 bg-gradient-to-b from-gold-500 to-transparent" aria-hidden="true" />
              <div class="absolute top-0 left-0 w-16 h-1.5 bg-gradient-to-r from-gold-500 to-transparent" aria-hidden="true" />

              <span class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-500 mb-5">
                <span aria-hidden="true" class="text-base">⚽</span>
                Principal conclusão
              </span>

              <h2 id="highlight-heading" class="text-2xl sm:text-[1.75rem] font-bold text-white mb-8 leading-tight">
                Espanha aparece como a seleção mais provável
              </h2>

              <dl class="space-y-5">
                <div class="flex items-center justify-between py-1">
                  <dt class="text-sm text-gray-400">Probabilidade estimada</dt>
                  <dd class="text-[1.75rem] font-bold text-gold-500 font-mono">16,5%</dd>
                </div>

                <div class="flex items-center justify-between py-1 border-t border-graphite-800/50">
                  <dt class="text-sm text-gray-400">Ranking Elo</dt>
                  <dd class="text-base font-semibold text-white font-mono">1º lugar</dd>
                </div>

                <div class="flex items-center justify-between py-1 border-t border-graphite-800/50">
                  <dt class="text-sm text-gray-400">Ranking FIFA</dt>
                  <dd class="text-base font-semibold text-white font-mono">2º lugar</dd>
                </div>

                <div class="flex items-center justify-between py-1 border-t border-graphite-800/50">
                  <dt class="text-sm text-gray-400">Título recente</dt>
                  <dd class="text-base font-semibold text-green-400">Campeã da Euro 2024</dd>
                </div>

                <div class="flex items-start justify-between py-1 border-t border-graphite-800/50">
                  <dt class="text-sm text-gray-400 pt-0.5">Nível de confiança</dt>
                  <dd class="text-sm font-medium text-gray-300 text-right max-w-[200px] leading-relaxed">
                    Favorita, mas sem domínio absoluto
                  </dd>
                </div>
              </dl>

              <p class="mt-6 pt-5 border-t border-graphite-800/50 text-xs text-gray-500 leading-relaxed">
                Nenhuma candidata possui probabilidade dominante. A Copa permanece aberta e imprevisível.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom gradient -->
    <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-marine-950 to-transparent pointer-events-none" aria-hidden="true" />
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
