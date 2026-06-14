<template>
  <section id="chaveamento" class="section-light" aria-labelledby="bracket-heading">
    <div class="section-inner">
      <p class="section-label">Chaveamento Projetado</p>
      <h2 id="bracket-heading" class="section-headline">
        Fase final da Copa de 2026
      </h2>
      <p class="section-subhead mb-10">
        Projeção dos confrontos e resultados simulados das oitavas de final até a grande final,
        calculados com base no modelo estatístico ponderado.
      </p>

      <!-- Mobile Tabs Selector (visible on small screens only) -->
      <div
        role="tablist"
        aria-label="Fases do chaveamento"
        class="flex md:hidden overflow-x-auto gap-1 pb-3 mb-8 border-b border-semantic-border"
      >
        <button
          v-for="phase in phases"
          :key="phase.key"
          role="tab"
          type="button"
          class="flex-shrink-0 px-4 py-2 rounded-t-lg text-sm font-display font-semibold transition-colors duration-200"
          :class="activeTab === phase.key
            ? 'text-semantic-accent bg-semantic-surface border-b-2 border-semantic-accent'
            : 'text-semantic-text-secondary hover:text-semantic-text-primary'"
          :aria-selected="activeTab === phase.key"
          @click="activeTab = phase.key"
        >
          {{ phase.label }}
        </button>
      </div>

      <!-- Bracket Container -->
      <div class="relative w-full overflow-x-auto pb-6">
        <!-- Desktop: Flex row / Mobile: Toggle column -->
        <div class="flex min-w-[320px] md:min-w-[900px] lg:min-w-[1100px] justify-between items-stretch gap-6 h-auto md:h-[760px]">
          
          <!-- Column Loop -->
          <div
            v-for="phase in phases"
            :key="phase.key"
            class="flex-1 transition-all duration-300"
            :class="[
              activeTab === phase.key ? 'flex' : 'hidden md:flex',
              'flex-col justify-around h-full gap-4'
            ]"
          >
            <!-- Phase Header (Desktop Only) -->
            <div class="hidden md:block text-center border-b border-semantic-border pb-3 mb-2 shrink-0">
              <h3 class="font-display font-bold text-sm uppercase tracking-wider text-semantic-accent">
                {{ phase.label }}
              </h3>
            </div>

            <!-- Match Cards in Column -->
            <div
              v-for="match in bracketData[phase.key]"
              :key="match.id"
              class="editorial-card-border p-4 rounded-lg bg-semantic-background/60 shadow-sm relative group hover:border-semantic-accent/40 transition-all duration-300"
            >
              <!-- Match header (Probability details) -->
              <div class="flex items-center justify-between text-[10px] font-mono text-semantic-text-muted mb-2.5 pb-1.5 border-b border-semantic-border/40">
                <span>JOGO {{ match.id }}</span>
                <span class="font-semibold text-semantic-accent">{{ match.homeProb }}% vs {{ match.awayProb }}%</span>
              </div>

              <!-- Competitors -->
              <div class="space-y-3">
                <!-- Home Team -->
                <div 
                  class="flex items-center justify-between gap-3"
                  :class="match.winner !== match.home ? 'opacity-50' : ''"
                >
                  <div class="flex items-center gap-2 min-w-0">
                    <img 
                      :src="getCountryFlagUrl(match.home)" 
                      :alt="match.home" 
                      class="w-5 h-3.5 object-cover rounded-sm shadow-sm shrink-0" 
                    />
                    <span 
                      class="font-display text-sm truncate"
                      :class="match.winner === match.home ? 'font-bold text-semantic-text-primary' : 'text-semantic-text-secondary'"
                    >
                      {{ match.home }}
                    </span>
                  </div>
                  <span 
                    class="font-mono text-sm font-bold w-6 text-right"
                    :class="match.winner === match.home ? 'text-semantic-accent' : 'text-semantic-text-secondary'"
                  >
                    {{ match.homeScore }}
                  </span>
                </div>

                <!-- Away Team -->
                <div 
                  class="flex items-center justify-between gap-3"
                  :class="match.winner !== match.away ? 'opacity-50' : ''"
                >
                  <div class="flex items-center gap-2 min-w-0">
                    <img 
                      :src="getCountryFlagUrl(match.away)" 
                      :alt="match.away" 
                      class="w-5 h-3.5 object-cover rounded-sm shadow-sm shrink-0" 
                    />
                    <span 
                      class="font-display text-sm truncate"
                      :class="match.winner === match.away ? 'font-bold text-semantic-text-primary' : 'text-semantic-text-secondary'"
                    >
                      {{ match.away }}
                    </span>
                  </div>
                  <span 
                    class="font-mono text-sm font-bold w-6 text-right"
                    :class="match.winner === match.away ? 'text-semantic-accent' : 'text-semantic-text-secondary'"
                  >
                    {{ match.awayScore }}
                  </span>
                </div>
              </div>

              <!-- Winner Badge (Hover detail) -->
              <div class="mt-3 pt-2 border-t border-semantic-border/30 flex items-center justify-between">
                <span class="text-[10px] uppercase font-semibold text-semantic-text-muted">Classificado</span>
                <span class="text-xs font-bold text-semantic-accent flex items-center gap-1">
                  🏆 {{ match.winner }}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Legend & Info -->
      <div class="callout-info mt-10 max-w-2xl mx-auto">
        <span aria-hidden="true">ℹ️</span>
        Os confrontos das fases seguintes consideram o cenário de classificação provável das favoritas como cabeça de chave. Os placares representam simulações do modelo com base no poderio de ataque/defesa relativo.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type PhaseKey = 'oitavas' | 'quartas' | 'semis' | 'final'

interface Match {
  id: number
  home: string
  homeScore: number
  away: string
  awayScore: number
  homeProb: number
  awayProb: number
  winner: string
}

const activeTab = ref<PhaseKey>('oitavas')

const phases = [
  { key: 'oitavas' as const, label: 'Oitavas de Final' },
  { key: 'quartas' as const, label: 'Quartas de Final' },
  { key: 'semis' as const, label: 'Semifinais' },
  { key: 'final' as const, label: 'Final' },
]

const bracketData: Record<PhaseKey, Match[]> = {
  oitavas: [
    { id: 1, home: 'Espanha', homeScore: 2, away: 'Croácia', awayScore: 1, homeProb: 62, awayProb: 38, winner: 'Espanha' },
    { id: 2, home: 'Portugal', homeScore: 2, away: 'Holanda', awayScore: 1, homeProb: 58, awayProb: 42, winner: 'Portugal' },
    { id: 3, home: 'França', homeScore: 3, away: 'Noruega', awayScore: 1, homeProb: 70, awayProb: 30, winner: 'França' },
    { id: 4, home: 'Argentina', homeScore: 2, away: 'Alemanha', awayScore: 1, homeProb: 65, awayProb: 35, winner: 'Argentina' },
    { id: 5, home: 'Inglaterra', homeScore: 3, away: 'Colômbia', awayScore: 1, homeProb: 68, awayProb: 32, winner: 'Inglaterra' },
    { id: 6, home: 'Brasil', homeScore: 2, away: 'Marrocos', awayScore: 1, homeProb: 60, awayProb: 40, winner: 'Brasil' },
    { id: 7, home: 'Uruguai', homeScore: 2, away: 'EUA', awayScore: 1, homeProb: 55, awayProb: 45, winner: 'Uruguai' },
    { id: 8, home: 'Bélgica', homeScore: 1, away: 'México', awayScore: 0, homeProb: 52, awayProb: 48, winner: 'Bélgica' }
  ],
  quartas: [
    { id: 9, home: 'Espanha', homeScore: 2, away: 'Portugal', awayScore: 1, homeProb: 58, awayProb: 42, winner: 'Espanha' },
    { id: 10, home: 'França', homeScore: 2, away: 'Argentina', awayScore: 1, homeProb: 55, awayProb: 45, winner: 'França' },
    { id: 11, home: 'Inglaterra', homeScore: 2, away: 'Brasil', awayScore: 1, homeProb: 57, awayProb: 43, winner: 'Inglaterra' },
    { id: 12, home: 'Uruguai', homeScore: 1, away: 'Bélgica', awayScore: 0, homeProb: 54, awayProb: 46, winner: 'Uruguai' }
  ],
  semis: [
    { id: 13, home: 'Espanha', homeScore: 2, away: 'França', awayScore: 1, homeProb: 55, awayProb: 45, winner: 'Espanha' },
    { id: 14, home: 'Inglaterra', homeScore: 1, away: 'Uruguai', awayScore: 0, homeProb: 60, awayProb: 40, winner: 'Inglaterra' }
  ],
  final: [
    { id: 15, home: 'Espanha', homeScore: 2, away: 'Inglaterra', awayScore: 1, homeProb: 54, awayProb: 46, winner: 'Espanha' }
  ]
}
</script>
