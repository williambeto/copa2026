<template>
  <section class="section-container" aria-labelledby="squad-depth-heading">
    <h2 id="squad-depth-heading" class="section-title">
      Elenco e profundidade
    </h2>
    <p class="section-subtitle mb-8">
      Análise da qualidade dos titulares, banco de reservas e versatilidade tática das principais seleções.
    </p>

    <!-- Team selector -->
    <div class="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Selecionar seleção">
      <button
        v-for="team in availableTeams"
        :key="team.id"
        role="tab"
        :aria-selected="selectedTeamId === team.id"
        :aria-controls="`squad-panel-${team.id}`"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
        :class="selectedTeamId === team.id
          ? 'bg-gold-500/20 text-gold-400 border border-gold-500/40'
          : 'bg-graphite-900/60 border border-graphite-800 text-gray-400 hover:text-gray-200 hover:border-graphite-700'"
        @click="selectTeam(team.id)"
      >
        <span aria-hidden="true" class="mr-1.5">{{ team.flag }}</span>
        {{ team.name }}
      </button>
    </div>

    <!-- Squad panel -->
    <div
      v-for="team in availableTeams"
      :key="team.id"
      :id="`squad-panel-${team.id}`"
      role="tabpanel"
      :aria-label="`Profundidade do elenco de ${team.name}`"
      :hidden="selectedTeamId !== team.id"
    >
      <div class="card">
        <!-- Position bars -->
        <div class="space-y-5 mb-10">
          <div
            v-for="pos in positionRows"
            :key="pos.key"
            class="space-y-1.5"
          >
            <div class="flex items-center justify-between text-sm">
              <span class="font-medium text-gray-300">{{ pos.label }}</span>
              <span class="text-gold-400 font-mono tabular-nums">{{ pos.getValue(selectedDepth) }}/10</span>
            </div>
            <div class="w-full bg-graphite-800 rounded-full h-3 overflow-hidden" role="progressbar" :aria-valuenow="pos.getValue(selectedDepth)" aria-valuemin="0" aria-valuemax="10" :aria-label="`${pos.label}: ${pos.getValue(selectedDepth)} de 10`">
              <div
                class="h-full rounded-full transition-all duration-700 ease-out"
                :class="pos.colorClass"
                :style="{ width: `${(pos.getValue(selectedDepth) / 10) * 100}%` }"
              />
            </div>
          </div>
        </div>

        <!-- Metrics row -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div
            v-for="metric in metrics"
            :key="metric.key"
            class="bg-graphite-900/60 rounded-lg p-3 border border-graphite-800/50"
          >
            <div class="text-xs text-gray-500 mb-1">{{ metric.label }}</div>
            <div class="text-lg font-bold tabular-nums" :class="metric.valueClass(selectedDepth)">
              {{ metric.formatValue(selectedDepth) }}
            </div>
          </div>
        </div>
      </div>

      <!-- Text summary for accessibility -->
      <p class="mt-4 text-sm text-gray-500" aria-live="polite">
        {{ buildSummary(team, selectedDepth) }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TeamData, SquadDepthData } from '~/types/teams'
import { TEAMS, SQUAD_DEPTH } from '~/data/teams'

const teamIds = ['espanha', 'franca', 'inglaterra', 'argentina', 'portugal', 'brasil'] as const

const availableTeams = computed<TeamData[]>(() =>
  teamIds.map(id => TEAMS.find(t => t.id === id)!).filter(Boolean)
)

const selectedTeamId = ref<TeamData['id']>('espanha')

function selectTeam(id: TeamData['id']) {
  selectedTeamId.value = id
}

const selectedDepth = computed<SquadDepthData>(() =>
  SQUAD_DEPTH[selectedTeamId.value] ?? SQUAD_DEPTH.espanha
)

interface PositionRow {
  key: string
  label: string
  getValue: (d: SquadDepthData) => number
  colorClass: string
}

const positionRows: PositionRow[] = [
  { key: 'goalkeepers', label: 'Goleiros', getValue: d => d.goalkeepers, colorClass: 'bg-amber-500' },
  { key: 'fullbacks', label: 'Laterais', getValue: d => d.fullbacks, colorClass: 'bg-sky-500' },
  { key: 'centerbacks', label: 'Zagueiros', getValue: d => d.centerbacks, colorClass: 'bg-emerald-500' },
  { key: 'midfielders', label: 'Meio-campistas', getValue: d => d.midfielders, colorClass: 'bg-violet-500' },
  { key: 'wingers', label: 'Pontas', getValue: d => d.wingers, colorClass: 'bg-rose-500' },
  { key: 'strikers', label: 'Centroavantes', getValue: d => d.strikers, colorClass: 'bg-orange-500' },
]

interface MetricDef {
  key: string
  label: string
  formatValue: (d: SquadDepthData) => string
  valueClass: (d: SquadDepthData) => string
}

const metrics: MetricDef[] = [
  {
    key: 'starterQuality',
    label: 'Qualidade dos titulares',
    formatValue: d => `${d.starterQuality}/10`,
    valueClass: d => d.starterQuality >= 9 ? 'text-gold-400' : 'text-gray-200',
  },
  {
    key: 'benchQuality',
    label: 'Qualidade do banco',
    formatValue: d => `${d.benchQuality}/10`,
    valueClass: d => d.benchQuality >= 8.5 ? 'text-gold-400' : 'text-gray-200',
  },
  {
    key: 'versatility',
    label: 'Versatilidade',
    formatValue: d => `${d.versatility}/10`,
    valueClass: d => d.versatility >= 8.5 ? 'text-gold-400' : 'text-gray-200',
  },
  {
    key: 'decisivePlayers',
    label: 'Jogadores decisivos',
    formatValue: d => `${d.decisivePlayers}`,
    valueClass: d => d.decisivePlayers >= 6 ? 'text-gold-400' : 'text-gray-200',
  },
  {
    key: 'starDependency',
    label: 'Dependência de estrela',
    formatValue: d => `${d.starDependency}/10`,
    valueClass: d => d.starDependency <= 4 ? 'text-gold-400' : d.starDependency >= 7 ? 'text-red-400' : 'text-gray-200',
  },
]

function buildSummary(team: TeamData, depth: SquadDepthData): string {
  const starsNote = depth.starDependency <= 4
    ? 'baixa dependência de uma estrela individual'
    : depth.starDependency >= 7
      ? 'alta dependência de estrelas individuais'
      : 'dependência moderada de estrelas'
  return `${team.name}: nota de titulares ${depth.starterQuality}/10, banco ${depth.benchQuality}/10, versatilidade ${depth.versatility}/10, ${depth.decisivePlayers} jogadores decisivos e ${starsNote}.`
}
</script>
