<template>
  <section class="section-light" aria-labelledby="comparison-heading">
    <div class="section-inner">
      <h2 id="comparison-heading" class="section-headline mb-4">
        Comparação entre favoritas
      </h2>
      <p class="section-subhead mb-10">
        As notas de Espanha, França e Inglaterra em cada dimensão analisada pelo modelo.
      </p>

      <div class="overflow-x-auto rounded-sm border border-gray-200 mb-8">
        <table class="table-editorial">
          <thead>
            <tr>
              <th class="w-44">Critério</th>
              <th v-for="team in topThree" :key="team.id" class="text-center">
                <div class="flex items-center justify-center gap-1.5">
                  <span>{{ team.flag }}</span>
                  <span>{{ team.name }}</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="criteria in comparisonCriteria" :key="criteria.key">
              <td class="font-medium text-gray-900">{{ criteria.label }}</td>
              <td v-for="team in topThree" :key="team.id" class="text-center">
                <span class="data-value" :class="scoreTextClass(getScore(team, criteria.key))">
                  {{ getScore(team, criteria.key).toFixed(1) }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="editorial-card-border p-0">
        <button
          type="button"
          class="accordion-trigger px-6"
          :aria-expanded="showFullTable"
          aria-controls="full-table-panel"
          @click="showFullTable = !showFullTable"
        >
          <span>Ver tabela técnica completa com todas as 13 seleções</span>
          <span
            class="text-lg transition-transform duration-300"
            :class="{ 'rotate-180': showFullTable }"
            aria-hidden="true"
          >▾</span>
        </button>

        <div
          id="full-table-panel"
          class="accordion-content"
          :style="{ maxHeight: showFullTable ? '3000px' : '0', opacity: showFullTable ? 1 : 0 }"
          role="region"
          :aria-hidden="!showFullTable"
        >
          <div class="accordion-content-inner px-6 pb-6">
            <div class="overflow-x-auto">
              <table class="table-editorial">
                <thead>
                  <tr>
                    <th>Seleção</th>
                    <th class="text-center">FIFA</th>
                    <th class="text-center">Elo</th>
                    <th class="text-center">Força</th>
                    <th class="text-center">Elenco</th>
                    <th class="text-center">Nota</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="team in allTeams" :key="team.id">
                    <td>
                      <div class="flex items-center gap-2">
                        <span>{{ team.flag }}</span>
                        <span class="font-medium text-gray-900">{{ team.name }}</span>
                      </div>
                    </td>
                    <td class="text-center font-mono text-gray-700">
                      {{ team.fifaRank !== null ? team.fifaRank + 'º' : '—' }}
                    </td>
                    <td class="text-center font-mono text-gray-700">
                      {{ team.eloRank !== null ? team.eloRank + 'º' : '—' }}
                    </td>
                    <td class="text-center">
                      <span class="data-value" :class="scoreTextClass(team.strengthScore)">
                        {{ team.strengthScore.toFixed(1) }}
                      </span>
                    </td>
                    <td class="text-center">
                      <span class="data-value" :class="scoreTextClass(team.squadScore)">
                        {{ team.squadScore.toFixed(1) }}
                      </span>
                    </td>
                    <td class="text-center">
                      <span class="data-value font-bold" :class="scoreTextClass(team.probabilityNote)">
                        {{ team.probabilityNote.toFixed(1) }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TeamData } from '~/types/teams'
import { TEAMS } from '~/data/teams'

type ScoreKey = keyof Pick<TeamData,
  'strengthScore' | 'squadScore' | 'formScore' |
  'coachScore' | 'pathScore' | 'fitnessScore' | 'knockoutScore'
>

interface ComparisonCriterion {
  key: ScoreKey
  label: string
}

const showFullTable = ref(false)

const comparisonCriteria: ComparisonCriterion[] = [
  { key: 'strengthScore', label: 'Força atual' },
  { key: 'squadScore', label: 'Elenco' },
  { key: 'formScore', label: 'Momento' },
  { key: 'coachScore', label: 'Técnico' },
  { key: 'pathScore', label: 'Caminho' },
  { key: 'fitnessScore', label: 'Saúde física' },
  { key: 'knockoutScore', label: 'Mata-mata' },
]

const topThree = computed<TeamData[]>(() => {
  const esp = TEAMS.find(t => t.id === 'espanha')!
  const fra = TEAMS.find(t => t.id === 'franca')!
  const eng = TEAMS.find(t => t.id === 'inglaterra')!
  return [esp, fra, eng]
})

const allTeams = computed<TeamData[]>(() => [...TEAMS])

function getScore(team: TeamData, key: ScoreKey): number {
  return team[key]
}

function scoreTextClass(value: number): string {
  if (value >= 9.0) return 'text-semantic-success'
  if (value >= 8.0) return 'text-blue-600'
  if (value >= 7.0) return 'text-semantic-accent'
  return 'text-semantic-danger'
}
</script>
