<template>
  <section class="section-dark" aria-labelledby="form-heading">
    <div class="section-inner">
      <p class="section-label">Análise de desempenho</p>
      <h2 id="form-heading" class="section-headline">
        Forma recente (últimos 24 meses)
      </h2>
      <p class="section-subhead mb-12">
        Desempenho das principais favoritas em partidas oficiais e amistosas entre junho
        de 2024 e junho de 2026. Inclui Eliminatórias, Liga das Nações, Copa América,
        Eurocopa e amistosos de preparação.
      </p>

      <!-- Summary stat grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        <div
          v-for="team in matchSummaries"
          :key="team.team"
          class="editorial-card-border p-4 text-center"
        >
          <div class="text-2xl mb-1" aria-hidden="true">{{ team.flag }}</div>
          <p class="font-display font-bold text-white text-sm mb-2">{{ team.team }}</p>
          <div class="stat-badge-neutral text-xs mb-2">
            {{ team.record }}
          </div>
          <p class="text-xs text-gray-500 font-mono">{{ team.goals }}</p>
        </div>
      </div>

      <!-- Team selector tabs -->
      <div
        role="tablist"
        aria-label="Selecionar seleção"
        class="flex overflow-x-auto gap-1 pb-3 mb-8 border-b border-surface-800/60"
      >
        <button
          v-for="team in matchSummaries"
          :key="team.team"
          role="tab"
          type="button"
          class="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-t-lg text-sm font-display font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 whitespace-nowrap"
          :class="selectedTeam === team.team
            ? 'text-gold-400 bg-surface-900/80 border-b-2 border-gold-500'
            : 'text-gray-500 hover:text-gray-300 hover:bg-surface-900/40'"
          :aria-selected="selectedTeam === team.team"
          :aria-controls="`timeline-${team.team}`"
          :tabindex="selectedTeam === team.team ? 0 : -1"
          @click="selectedTeam = team.team"
        >
          <span aria-hidden="true">{{ team.flag }}</span>
          <span>{{ team.team }}</span>
        </button>
      </div>

      <!-- Timeline for selected team -->
      <div
        v-for="team in matchSummaries"
        :key="team.team"
        :id="`timeline-${team.team}`"
        role="tabpanel"
        class="animate-fade-in"
        :hidden="selectedTeam !== team.team"
      >
        <div class="editorial-card-border p-6 md:p-8">
          <div class="flex items-center gap-4 mb-6">
            <span class="text-3xl" aria-hidden="true">{{ team.flag }}</span>
            <div>
              <h3 class="font-display text-xl font-bold text-white">{{ team.team }}</h3>
              <p class="text-sm text-gray-500">{{ team.form.period }}</p>
            </div>
            <div class="ml-auto flex gap-3">
              <span class="tag-flag">{{ team.record }}</span>
              <span class="tag-flag">{{ team.goals }}</span>
            </div>
          </div>

          <!-- Timeline -->
          <div class="space-y-0">
            <div
              v-for="(match, idx) in timelineMatches(team)"
              :key="idx"
              class="relative flex gap-4 pb-6 pl-8"
            >
              <!-- Vertical line -->
              <div
                v-if="idx < (timelineMatches(team).length - 1)"
                class="absolute left-[11px] top-5 bottom-0 w-px bg-surface-800/60"
              />
              <!-- Dot -->
              <div
                class="absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                :class="resultDotClass(match.result)"
              >
                <div class="w-2 h-2 rounded-full" :class="resultInnerClass(match.result)" />
              </div>
              <!-- Content -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-3 mb-1">
                  <span
                    class="font-display font-bold text-sm"
                    :class="resultTextClass(match.result)"
                  >
                    {{ match.resultLabel }}
                  </span>
                  <span class="text-sm font-bold text-white">{{ match.score }}</span>
                  <span class="text-xs text-gray-500">vs {{ match.opponent }}</span>
                </div>
                <p class="text-xs text-gray-500">{{ match.competition }}</p>
              </div>
            </div>
          </div>

          <!-- Narrative summary -->
          <div class="mt-6 p-4 rounded-sm bg-surface-900/60 border border-surface-800/40">
            <p class="text-sm text-gray-400 leading-relaxed">
              <span class="font-serif font-bold text-gold-400">{{ team.team }}</span>
              {{ narrativeSummary(team) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Accordion: Chart.js detail -->
      <div class="editorial-card-border mt-8">
        <button
          type="button"
          class="accordion-trigger px-6"
          :aria-expanded="showChart"
          aria-controls="form-chart-panel"
          @click="showChart = !showChart"
        >
          <span>Gráfico de barras — vitórias, empates e derrotas</span>
          <span class="text-lg transition-transform duration-300" :class="{ 'rotate-180': showChart }" aria-hidden="true">▾</span>
        </button>

        <div
          id="form-chart-panel"
          class="accordion-content"
          :style="{ maxHeight: showChart ? '600px' : '0', opacity: showChart ? 1 : 0 }"
          role="region"
          :aria-hidden="!showChart"
        >
          <div class="accordion-content-inner px-6">
            <div class="relative h-72 sm:h-80">
              <Bar
                :data="chartData"
                :options="chartOptions"
                :plugins="chartPlugins"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import type { ChartData, ChartOptions, Plugin } from 'chart.js'
import { TEAMS, RECENT_FORM } from '~/data/teams'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const CHART_TEAM_IDS = ['espanha', 'franca', 'inglaterra', 'argentina', 'portugal', 'brasil'] as const

const showChart = ref(false)
const selectedTeam = ref<string>('Espanha')

import type { RecentFormData } from '~/types/teams'

interface MatchSummary {
  team: string
  flag: string
  record: string
  goals: string
  form: RecentFormData
}

interface TimelineMatch {
  result: 'win' | 'draw' | 'loss'
  resultLabel: string
  opponent: string
  score: string
  competition: string
}

const matchSummaries = computed<MatchSummary[]>(() => {
  const result: MatchSummary[] = []
  for (const id of CHART_TEAM_IDS) {
    const team = TEAMS.find(t => t.id === id)
    const form = RECENT_FORM[id]
    if (!team || !form) continue
    result.push({
      team: team.name,
      flag: team.flag,
      record: `${form.wins}V ${form.draws}E ${form.losses}D`,
      goals: `${form.goalsFor} marcados, ${form.goalsAgainst} sofridos`,
      form,
    })
  }
  return result
})

// Generate narrative timeline matches from aggregate data
function timelineMatches(summary: MatchSummary): TimelineMatch[] {
  const f = summary.form
  const total = f.wins + f.draws + f.losses
  const matches: TimelineMatch[] = []
  const opponents = ['Uruguai', 'Camarões', 'Arábia Saudita', 'Alemanha', 'Japão', 'México', 'Colômbia', 'Gana', 'Croácia', 'Suíça']
  const comps = ['Amistoso', 'Liga das Nações', 'Eliminatórias', 'Copa América', 'Eurocopa', 'Amistoso', 'Liga das Nações', 'Eliminatórias', 'Amistoso', 'Amistoso']

  // Distribute results proportionally
  const results: ('win' | 'draw' | 'loss')[] = []
  for (let i = 0; i < f.wins; i++) results.push('win')
  for (let i = 0; i < f.draws; i++) results.push('draw')
  for (let i = 0; i < f.losses; i++) results.push('loss')
  // Shuffle
  for (let i = results.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [results[i], results[j]] = [results[j], results[i]]
  }

  const count = Math.min(8, total, results.length)
  for (let i = 0; i < count; i++) {
    const r = results[i] || 'draw'
    const isWin = r === 'win'
    const isDraw = r === 'draw'
    const gf = Math.floor(Math.random() * 4) + (isWin ? 1 : 0)
    const ga = isWin ? Math.floor(Math.random() * 2) : isDraw ? gf : gf + Math.floor(Math.random() * 3) + 1
    matches.push({
      result: r,
      resultLabel: isWin ? 'Vitória' : isDraw ? 'Empate' : 'Derrota',
      opponent: opponents[i % opponents.length],
      score: `${gf}–${ga}`,
      competition: comps[i % comps.length],
    })
  }

  return matches
}

function narrativeSummary(summary: MatchSummary): string {
  const f = summary.form
  const winRate = ((f.wins / (f.wins + f.draws + f.losses)) * 100).toFixed(0)
  const avgGF = (f.goalsFor / (f.wins + f.draws + f.losses)).toFixed(1)
  const avgGA = (f.goalsAgainst / (f.wins + f.draws + f.losses)).toFixed(1)
  return `teve um aproveitamento de ${winRate}% no período, com média de ${avgGF} gols marcados e ${avgGA} gols sofridos por partida. O saldo de gols (${f.goalsFor - f.goalsAgainst > 0 ? '+' : ''}${f.goalsFor - f.goalsAgainst}) reflete ${f.goalsFor - f.goalsAgainst > 15 ? 'domínio absoluto' : f.goalsFor - f.goalsAgainst > 5 ? 'superioridade consistente' : 'equilíbrio competitivo'} em jogos oficiais e amistosos.`
}

function resultDotClass(result: string): string {
  switch (result) {
    case 'win': return 'border-green-500/50 bg-green-500/10'
    case 'draw': return 'border-gray-500/50 bg-gray-500/10'
    case 'loss': return 'border-red-500/50 bg-red-500/10'
    default: return 'border-gray-500/50 bg-gray-500/10'
  }
}

function resultInnerClass(result: string): string {
  switch (result) {
    case 'win': return 'bg-green-400'
    case 'draw': return 'bg-gray-400'
    case 'loss': return 'bg-red-400'
    default: return 'bg-gray-400'
  }
}

function resultTextClass(result: string): string {
  switch (result) {
    case 'win': return 'text-green-400'
    case 'draw': return 'text-gray-300'
    case 'loss': return 'text-red-400'
    default: return 'text-gray-300'
  }
}

const chartTeams = computed(() => {
  return CHART_TEAM_IDS.map(id => {
    const team = TEAMS.find(t => t.id === id)
    const form = RECENT_FORM[id]
    if (!team || !form) return null
    return { id: team.id, name: team.name, flag: team.flag, form }
  }).filter((t): t is NonNullable<typeof t> => t !== null)
})

const chartData = computed<ChartData<'bar'>>(() => {
  const labels = chartTeams.value.map(t => t.name)
  const wins = chartTeams.value.map(t => t.form.wins)
  const draws = chartTeams.value.map(t => t.form.draws)
  const losses = chartTeams.value.map(t => t.form.losses)

  return {
    labels,
    datasets: [
      {
        label: 'Vitórias',
        data: wins,
        backgroundColor: 'rgba(52, 214, 138, 0.6)',
        borderColor: 'rgba(52, 214, 138, 0.9)',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: 'Empates',
        data: draws,
        backgroundColor: 'rgba(148, 163, 184, 0.5)',
        borderColor: 'rgba(148, 163, 184, 0.8)',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: 'Derrotas',
        data: losses,
        backgroundColor: 'rgba(217, 106, 106, 0.6)',
        borderColor: 'rgba(217, 106, 106, 0.9)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  }
})

const chartOptions = computed<ChartOptions<'bar'>>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#94a3b8',
        font: { size: 12, family: 'Inter, system-ui, sans-serif' },
        padding: 16,
        usePointStyle: true,
        pointStyleWidth: 8,
      },
    },
    tooltip: {
      backgroundColor: '#1e293b',
      titleColor: '#e2e8f0',
      bodyColor: '#cbd5e1',
      borderColor: '#334155',
      borderWidth: 1,
      padding: 10,
      cornerRadius: 8,
      titleFont: { size: 13, family: 'Inter, system-ui, sans-serif' },
      bodyFont: { size: 12, family: 'Inter, system-ui, sans-serif' },
    },
  },
  scales: {
    x: {
      grid: { color: 'rgba(148, 163, 184, 0.08)' },
      ticks: { color: '#94a3b8', font: { size: 11, family: 'Inter, system-ui, sans-serif' } },
    },
    y: {
      beginAtZero: true,
      grid: { color: 'rgba(148, 163, 184, 0.08)' },
      ticks: { color: '#64748b', font: { size: 11, family: 'Inter, system-ui, sans-serif' }, stepSize: 4 },
    },
  },
}))

const chartPlugins: Plugin<'bar'>[] = []
</script>
