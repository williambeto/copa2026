<template>
  <section class="section-container" aria-labelledby="ranking-explanation-title">
    <h2 id="ranking-explanation-title" class="section-title">
      Ranking FIFA versus Ranking Elo
    </h2>
    <p class="section-subtitle mb-10">
      Dois sistemas de classificação com metodologias distintas. Entender as diferenças
      ajuda a interpretar por que algumas seleções aparecem melhor posicionadas em um
      ranking do que em outro. Em ambos, quanto menor o número, melhor a posição.
    </p>

    <!-- Two-column explanation -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <!-- FIFA column -->
      <div class="card-hover">
        <div class="flex items-center gap-2 mb-3">
          <span class="w-3 h-3 rounded-full bg-blue-500" aria-hidden="true" />
          <h3 class="text-lg font-bold text-white light:text-gray-900">
            Ranking FIFA
          </h3>
        </div>
        <ul class="space-y-2 text-sm text-gray-300 light:text-gray-600">
          <li class="flex items-start gap-2">
            <span class="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
            <span>Sistema oficial da federação internacional.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
            <span>Considera a importância da partida (amistoso, eliminatória, Copa).</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
            <span>Usado institucionalmente para cabeças de chave e sorteios.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
            <span>Responde mais lentamente a mudanças de desempenho.</span>
          </li>
        </ul>
      </div>

      <!-- Elo column -->
      <div class="card-hover">
        <div class="flex items-center gap-2 mb-3">
          <span class="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
          <h3 class="text-lg font-bold text-white light:text-gray-900">
            Ranking Elo
          </h3>
        </div>
        <ul class="space-y-2 text-sm text-gray-300 light:text-gray-600">
          <li class="flex items-start gap-2">
            <span class="mt-1 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" aria-hidden="true" />
            <span>Sistema independente, sem vínculo com a FIFA.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="mt-1 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" aria-hidden="true" />
            <span>Considera força do adversário, diferença de gols e local da partida.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="mt-1 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" aria-hidden="true" />
            <span>Atualiza após cada resultado, capturando mudanças rapidamente.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="mt-1 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" aria-hidden="true" />
            <span>Considerado por analistas como mais sensível à forma real.</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Scatter plot -->
    <div class="card-hover">
      <h3 class="text-base font-bold text-white light:text-gray-900 mb-6">
        Dispersão: FIFA × Elo
        <span class="text-sm font-normal text-gray-500 ml-2">
          (apenas seleções com ambos os rankings)
        </span>
      </h3>

      <p class="text-xs text-gray-500 mb-4">
        Toque ou passe o mouse sobre os pontos para ver detalhes. A linha diagonal indica onde
        os rankings coincidem. Pontos acima da linha têm melhor ranking Elo que FIFA; pontos
        abaixo têm melhor ranking FIFA que Elo.
      </p>

      <div
        class="relative w-full bg-graphite-900/50 rounded-lg border border-graphite-800 light:bg-gray-100 light:border-gray-200 overflow-hidden"
        style="aspect-ratio: 1 / 1; max-height: 500px;"
      >
        <!-- Y axis: Elo rank (1 at top = better) -->
        <div class="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between items-end pr-2">
          <span
            v-for="r in yAxisTicks"
            :key="'y-' + r"
            class="text-[10px] text-gray-500 font-mono leading-none"
          >
            {{ r }}
          </span>
        </div>

        <!-- X axis: FIFA rank (1 at left = better) -->
        <div class="absolute left-8 right-0 bottom-0 h-6 flex justify-between items-start">
          <span
            v-for="r in xAxisTicks"
            :key="'x-' + r"
            class="text-[10px] text-gray-500 font-mono leading-none"
          >
            {{ r }}
          </span>
        </div>

        <!-- Plot area -->
        <div
          class="absolute left-10 right-3 top-3 bottom-8"
          style="--total-ranks: 17;"
        >
          <!-- Grid lines -->
          <div
            v-for="r in gridLines"
            :key="'grid-' + r"
            class="absolute left-0 right-0 border-t border-graphite-800/40 light:border-gray-200"
            :style="{ top: `${((r - 1) / 16) * 100}%` }"
          />

          <!-- Diagonal line -->
          <svg
            class="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <line
              x1="0" y1="0" x2="100" y2="100"
              stroke="currentColor"
              class="text-graphite-700 light:text-gray-300"
              stroke-width="0.5"
              stroke-dasharray="4 4"
            />
          </svg>

          <!-- Axis labels -->
          <div class="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-gray-500 font-mono whitespace-nowrap">
            Elo (melhor ↑)
          </div>
          <div class="absolute left-1/2 -translate-x-1/2 -bottom-7 text-[10px] text-gray-500 font-mono whitespace-nowrap">
            FIFA (melhor →)
          </div>

          <!-- Team points -->
          <div
            v-for="team in plotTeams"
            :key="team.id"
            class="absolute flex flex-col items-center group -translate-x-1/2 -translate-y-1/2 z-10"
            :style="{
              left: `${((team.fifaRank! - 1) / (maxRank - 1)) * 100}%`,
              top: `${((team.eloRank! - 1) / (maxRank - 1)) * 100}%`,
            }"
            :title="`${team.name}: FIFA ${team.fifaRank}º, Elo ${team.eloRank}º`"
          >
            <!-- Highlight ring for key teams -->
            <span class="text-lg cursor-pointer transition-transform hover:scale-125" role="img" :aria-label="`Bandeira de ${team.name}`">
              {{ team.flag }}
            </span>
            <span
              class="text-[9px] font-mono font-semibold mt-0.5 px-1 rounded"
              :class="highlightClass(team.id)"
            >
              {{ team.abbr }}
            </span>

            <!-- Tooltip on hover -->
            <div
              class="absolute bottom-full mb-1 hidden group-hover:block bg-graphite-900 border border-graphite-700 text-white text-[10px] rounded px-2 py-1 whitespace-nowrap z-20 pointer-events-none light:bg-white light:border-gray-300 light:text-gray-800"
            >
              {{ team.name }} — FIFA {{ team.fifaRank }}º · Elo {{ team.eloRank }}º
            </div>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="mt-4 flex flex-wrap gap-4 text-xs text-gray-400">
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded-full bg-gold-400" aria-hidden="true" />
          <span class="text-gold-400 font-semibold">Espanha</span>
          <span class="text-gray-500">— líder no Elo</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded-full bg-blue-400" aria-hidden="true" />
          <span class="text-blue-400 font-semibold">Argentina</span>
          <span class="text-gray-500">— líder na FIFA</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded-full bg-green-400" aria-hidden="true" />
          <span class="text-green-400 font-semibold">Colômbia</span>
          <span class="text-gray-500">— melhor no Elo que na FIFA</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
          <span class="text-red-400 font-semibold">Bélgica</span>
          <span class="text-gray-500">— melhor na FIFA que no Elo</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TEAMS } from '~/data/teams'

// Only teams with both FIFA and Elo ranks
const teamsWithBothRanks = TEAMS.filter(t => t.fifaRank != null && t.eloRank != null)

const maxRank = 17

const yAxisTicks = [1, 4, 8, 12, 16]
const xAxisTicks = [1, 5, 9, 13, 16]
const gridLines = [1, 5, 9, 13]

const teamAbbreviations: Record<string, string> = {
  espanha: 'ESP',
  franca: 'FRA',
  inglaterra: 'ING',
  argentina: 'ARG',
  portugal: 'POR',
  brasil: 'BRA',
  alemanha: 'ALE',
  holanda: 'HOL',
  belgica: 'BEL',
  colombia: 'COL',
  uruguai: 'URU',
  noruega: 'NOR',
  marrocos: 'MAR',
}

const highlightTeams = new Set(['espanha', 'argentina', 'colombia', 'belgica'])

const plotTeams = computed(() =>
  teamsWithBothRanks.map(t => ({
    id: t.id,
    name: t.name,
    flag: t.flag,
    fifaRank: t.fifaRank!,
    eloRank: t.eloRank!,
    abbr: teamAbbreviations[t.id] ?? t.name.slice(0, 3).toUpperCase(),
  }))
)

function highlightClass(teamId: string): string {
  switch (teamId) {
    case 'espanha':
      return 'bg-gold-500/20 text-gold-400 border border-gold-500/30'
    case 'argentina':
      return 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
    case 'colombia':
      return 'bg-green-500/20 text-green-400 border border-green-500/30'
    case 'belgica':
      return 'bg-red-500/20 text-red-400 border border-red-500/30'
    default:
      return 'text-gray-400 bg-graphite-800/50 light:bg-gray-200'
  }
}
</script>
