<template>
  <section
    class="py-16 md:py-24 bg-marine-900/60"
    aria-labelledby="form-heading"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        id="form-heading"
        class="text-2xl md:text-3xl lg:text-4xl font-extrabold font-mono tracking-tight text-white mb-4"
      >
        Forma recente (últimos 24 meses)
      </h2>
      <p class="text-gray-400 text-sm md:text-base mb-10 max-w-2xl">
        Desempenho das principais favoritas em partidas oficiais e amistosas entre junho
        de 2024 e junho de 2026. Inclui Eliminatórias, Liga das Nações, Copa América,
        Eurocopa e amistosos de preparação.
      </p>

      <!-- Chart container -->
      <div
        class="card rounded-xl bg-marine-950/70 border border-marine-800/60 p-6 mb-8"
      >
        <h3 class="text-sm font-semibold text-gray-300 mb-1">Vitórias e derrotas</h3>
        <p class="text-xs text-gray-500 mb-6">Jogos oficiais e amistosos combinados</p>

        <div class="relative h-80 sm:h-96">
          <Bar
            :data="chartData"
            :options="chartOptions"
            :plugins="chartPlugins"
          />
        </div>
      </div>

      <!-- Secondary stat row: goals per team -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div
          v-for="team in chartTeams"
          :key="team.id"
          class="card card-hover rounded-xl bg-marine-950/70 border border-marine-800/60 p-4 text-center"
        >
          <div class="text-xl mb-1" aria-hidden="true">{{ team.flag }}</div>
          <p class="text-xs font-semibold text-gray-300 mb-2">{{ team.name }}</p>
          <div class="flex items-center justify-center gap-3 text-xs font-mono">
            <span class="text-green-400">
              <span class="font-bold">{{ team.form.goalsFor }}</span>
              <span class="text-gray-500"> GP</span>
            </span>
            <span class="text-gray-600">|</span>
            <span class="text-red-400">
              <span class="font-bold">{{ team.form.goalsAgainst }}</span>
              <span class="text-gray-500"> GC</span>
            </span>
          </div>
          <div class="mt-1.5">
            <span
              class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold font-mono"
              :class="goalDiffClass(team.form.goalsFor - team.form.goalsAgainst)"
            >
              {{ goalDiffSign(team.form.goalsFor - team.form.goalsAgainst) }}{{ Math.abs(team.form.goalsFor - team.form.goalsAgainst) }}
            </span>
          </div>
        </div>
      </div>

      <!-- Accessible text summary -->
      <div class="p-4 rounded-lg bg-marine-950/60 border border-marine-800/40">
        <h4 class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2 sr-only">
          Resumo textual da forma recente
        </h4>
        <div class="sr-only" aria-live="polite">
          <p v-for="summary in textSummaries" :key="summary.team">
            {{ summary.text }}
          </p>
        </div>
        <p class="text-xs text-gray-400 leading-relaxed">
          <span class="font-semibold text-gray-300">Resumo:</span>
          {{ combinedSummary }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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
import type { TeamData } from '~/types/teams'
import { TEAMS, RECENT_FORM } from '~/data/teams'

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const CHART_TEAM_IDS = ['espanha', 'franca', 'inglaterra', 'argentina', 'portugal', 'brasil'] as const

interface ChartTeamEntry {
  id: string
  name: string
  flag: string
  form: {
    wins: number
    draws: number
    losses: number
    goalsFor: number
    goalsAgainst: number
  }
}

const chartTeams = computed<ChartTeamEntry[]>(() => {
  return CHART_TEAM_IDS
    .map((id) => {
      const team = TEAMS.find((t) => t.id === id)
      const form = RECENT_FORM[id]
      if (!team || !form) return null
      return {
        id: team.id,
        name: team.name,
        flag: team.flag,
        form: {
          wins: form.wins,
          draws: form.draws,
          losses: form.losses,
          goalsFor: form.goalsFor,
          goalsAgainst: form.goalsAgainst,
        },
      }
    })
    .filter((entry): entry is ChartTeamEntry => entry !== null)
})

const chartData = computed<ChartData<'bar'>>(() => {
  const labels = chartTeams.value.map((t) => t.name)
  const wins = chartTeams.value.map((t) => t.form.wins)
  const draws = chartTeams.value.map((t) => t.form.draws)
  const losses = chartTeams.value.map((t) => t.form.losses)

  return {
    labels,
    datasets: [
      {
        label: 'Vitórias',
        data: wins,
        backgroundColor: 'rgba(34, 197, 94, 0.6)',
        borderColor: 'rgba(34, 197, 94, 0.9)',
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
        backgroundColor: 'rgba(239, 68, 68, 0.6)',
        borderColor: 'rgba(239, 68, 68, 0.9)',
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
      grid: {
        color: 'rgba(148, 163, 184, 0.08)',
      },
      ticks: {
        color: '#94a3b8',
        font: { size: 11, family: 'Inter, system-ui, sans-serif' },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(148, 163, 184, 0.08)',
      },
      ticks: {
        color: '#64748b',
        font: { size: 11, family: 'Inter, system-ui, sans-serif' },
        stepSize: 4,
      },
      title: {
        display: true,
        text: 'Número de partidas',
        color: '#64748b',
        font: { size: 11, family: 'Inter, system-ui, sans-serif' },
      },
    },
  },
}))

const chartPlugins: Plugin<'bar'>[] = []

const textSummaries = computed<{ team: string; text: string }[]>(() => {
  return chartTeams.value.map((t) => {
    const record = `${t.name}: ${t.form.wins} vitórias, ${t.form.draws} empates e ${t.form.losses} derrotas nos últimos 24 meses.`
    const goals = `Marcou ${t.form.goalsFor} gols e sofreu ${t.form.goalsAgainst} gols.`
    return { team: t.name, text: `${record} ${goals}` }
  })
})

const combinedSummary = computed<string>(() => {
  const parts = chartTeams.value.map(
    (t) =>
      `${t.name}: ${t.form.wins}V ${t.form.draws}E ${t.form.losses}D (${t.form.goalsFor}:${t.form.goalsAgainst})`
  )
  return parts.join(' · ')
})

function goalDiffClass(diff: number): string {
  if (diff >= 25) return 'bg-green-500/15 text-green-400 border border-green-500/25'
  if (diff >= 10) return 'bg-blue-500/15 text-blue-400 border border-blue-500/25'
  if (diff >= 0) return 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/25'
  return 'bg-red-500/15 text-red-400 border border-red-500/25'
}

function goalDiffSign(diff: number): string {
  return diff > 0 ? '+' : ''
}
</script>
