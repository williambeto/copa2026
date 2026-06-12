<template>
  <section id="tabela-comparativa" class="section-container" aria-labelledby="tabela-title">
    <h2 id="tabela-title" class="section-title">
      Tabela comparativa
    </h2>
    <p class="section-subtitle mb-6">
      Comparação detalhada de todas as seleções analisadas, com notas para cada dimensão avaliada.
    </p>

    <!-- Search input -->
    <div class="mb-6 max-w-md">
      <label for="team-search" class="sr-only">Filtrar seleções</label>
      <div class="relative">
        <svg
          class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          id="team-search"
          v-model="searchQuery"
          type="text"
          placeholder="Buscar seleção..."
          class="w-full pl-10 pr-4 py-2.5 rounded-lg bg-graphite-900 border border-graphite-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors light:bg-white light:border-gray-300 light:text-gray-800 light:placeholder-gray-400"
        />
      </div>
    </div>

    <!-- Desktop/Tablet: Table with horizontal scroll -->
    <div class="hidden md:block overflow-x-auto rounded-xl border border-graphite-800 light:border-gray-200">
      <table class="w-full min-w-[900px] text-sm" role="table">
        <thead>
          <tr class="bg-graphite-900/80 light:bg-gray-100">
            <th
              v-for="col in columns"
              :key="col.key"
              class="sticky left-0 z-10 bg-graphite-900/80 light:bg-gray-100 px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400 light:text-gray-600 whitespace-nowrap border-b border-graphite-800 light:border-gray-200"
              :class="{
                'cursor-pointer hover:text-gold-400 transition-colors select-none': col.sortable,
              }"
              :title="col.tooltip"
              @click="col.sortable && toggleSort(col.key)"
              @keydown.enter="col.sortable && toggleSort(col.key)"
              @keydown.space.prevent="col.sortable && toggleSort(col.key)"
              :tabindex="col.sortable ? 0 : undefined"
              role="columnheader"
              :aria-sort="sortKey === col.key ? (sortDir === 'asc' ? 'ascending' : 'descending') : undefined"
            >
              <div class="flex items-center gap-1">
                <span :class="{ 'tooltip-trigger': !!col.tooltip }">
                  {{ col.label }}
                </span>
                <span v-if="col.sortable && sortKey === col.key" class="inline-block w-3">
                  {{ sortDir === 'asc' ? '▲' : '▼' }}
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(team, index) in sortedFilteredTeams"
            :key="team.id"
            class="border-b border-graphite-800/50 light:border-gray-100 transition-colors hover:bg-graphite-800/30 light:hover:bg-gray-50"
            :class="{
              'border-l-[3px] border-l-gold-500': index < 3,
            }"
          >
            <!-- Team name (sticky first column) -->
            <td
              class="sticky left-0 z-[5] bg-graphite-950/95 light:bg-white px-3 py-3 whitespace-nowrap border-r border-graphite-800 light:border-gray-200"
              :class="{ 'border-l-[3px] border-l-gold-500': index < 3 }"
            >
              <div class="flex items-center gap-2">
                <span class="text-lg" role="img" :aria-label="`Bandeira de ${team.name}`">
                  {{ team.flag }}
                </span>
                <span class="font-semibold text-white light:text-gray-900">
                  {{ team.name }}
                </span>
              </div>
            </td>

            <td class="px-3 py-3 text-center font-mono text-white light:text-gray-800">
              {{ formatRank(team.fifaRank) }}
            </td>
            <td class="px-3 py-3 text-center font-mono text-white light:text-gray-800">
              {{ formatRank(team.eloRank) }}
            </td>
            <td class="px-3 py-3 text-center font-mono text-white light:text-gray-800">
              {{ team.avgAge != null ? team.avgAge.toFixed(1) : '—' }}
            </td>
            <td class="px-3 py-3 text-center font-mono">
              <span
                class="px-2 py-0.5 rounded text-xs font-semibold"
                :class="scoreColor(team.strengthScore)"
              >
                {{ team.strengthScore.toFixed(1) }}
              </span>
            </td>
            <td class="px-3 py-3 text-center font-mono">
              <span
                class="px-2 py-0.5 rounded text-xs font-semibold"
                :class="scoreColor(team.squadScore)"
              >
                {{ team.squadScore.toFixed(1) }}
              </span>
            </td>
            <td class="px-3 py-3 text-center font-mono">
              <span
                class="px-2 py-0.5 rounded text-xs font-semibold"
                :class="scoreColor(team.formScore)"
              >
                {{ team.formScore.toFixed(1) }}
              </span>
            </td>
            <td class="px-3 py-3 text-center font-mono">
              <span
                class="px-2 py-0.5 rounded text-xs font-semibold"
                :class="scoreColor(team.coachScore)"
              >
                {{ team.coachScore.toFixed(1) }}
              </span>
            </td>
            <td class="px-3 py-3 text-center font-mono">
              <span
                class="px-2 py-0.5 rounded text-xs font-semibold"
                :class="scoreColor(team.pathScore)"
              >
                {{ team.pathScore.toFixed(1) }}
              </span>
            </td>
            <td class="px-3 py-3 text-center font-mono">
              <span
                class="px-2 py-0.5 rounded text-xs font-semibold"
                :class="scoreColor(team.fitnessScore)"
              >
                {{ team.fitnessScore.toFixed(1) }}
              </span>
            </td>
            <td class="px-3 py-3 text-center font-mono">
              <span
                class="px-2 py-0.5 rounded text-xs font-semibold"
                :class="scoreColor(team.knockoutScore)"
              >
                {{ team.knockoutScore.toFixed(1) }}
              </span>
            </td>
            <td class="px-3 py-3 text-center font-mono">
              <span
                class="px-2 py-0.5 rounded text-xs font-bold"
                :class="scoreColor(team.probabilityNote)"
              >
                {{ team.probabilityNote.toFixed(1) }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile: Cards -->
    <div class="md:hidden space-y-3">
      <article
        v-for="team in sortedFilteredTeams"
        :key="team.id"
        class="card-hover"
      >
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xl" role="img" :aria-label="`Bandeira de ${team.name}`">
            {{ team.flag }}
          </span>
          <span class="font-bold text-white light:text-gray-900">
            {{ team.name }}
          </span>
        </div>

        <dl class="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
          <div>
            <dt class="text-xs text-gray-500">FIFA</dt>
            <dd class="font-mono text-white light:text-gray-800">{{ formatRank(team.fifaRank) }}</dd>
          </div>
          <div>
            <dt class="text-xs text-gray-500">Elo</dt>
            <dd class="font-mono text-white light:text-gray-800">{{ formatRank(team.eloRank) }}</dd>
          </div>
          <div>
            <dt class="text-xs text-gray-500">Idade</dt>
            <dd class="font-mono text-white light:text-gray-800">{{ team.avgAge != null ? team.avgAge.toFixed(1) : '—' }}</dd>
          </div>
          <div>
            <dt class="text-xs text-gray-500">Força</dt>
            <dd class="font-mono" :class="scoreTextColor(team.strengthScore)">{{ team.strengthScore.toFixed(1) }}</dd>
          </div>
          <div>
            <dt class="text-xs text-gray-500">Elenco</dt>
            <dd class="font-mono" :class="scoreTextColor(team.squadScore)">{{ team.squadScore.toFixed(1) }}</dd>
          </div>
          <div>
            <dt class="text-xs text-gray-500">Momento</dt>
            <dd class="font-mono" :class="scoreTextColor(team.formScore)">{{ team.formScore.toFixed(1) }}</dd>
          </div>
          <div>
            <dt class="text-xs text-gray-500">Técnico</dt>
            <dd class="font-mono" :class="scoreTextColor(team.coachScore)">{{ team.coachScore.toFixed(1) }}</dd>
          </div>
          <div>
            <dt class="text-xs text-gray-500">Caminho</dt>
            <dd class="font-mono" :class="scoreTextColor(team.pathScore)">{{ team.pathScore.toFixed(1) }}</dd>
          </div>
          <div>
            <dt class="text-xs text-gray-500">Físico</dt>
            <dd class="font-mono" :class="scoreTextColor(team.fitnessScore)">{{ team.fitnessScore.toFixed(1) }}</dd>
          </div>
          <div>
            <dt class="text-xs text-gray-500">Mata-mata</dt>
            <dd class="font-mono" :class="scoreTextColor(team.knockoutScore)">{{ team.knockoutScore.toFixed(1) }}</dd>
          </div>
          <div>
            <dt class="text-xs text-gray-500">Nota</dt>
            <dd class="font-mono font-bold" :class="scoreTextColor(team.probabilityNote)">{{ team.probabilityNote.toFixed(1) }}</dd>
          </div>
        </dl>
      </article>
    </div>

    <!-- Empty state -->
    <p
      v-if="sortedFilteredTeams.length === 0"
      class="text-center py-12 text-gray-500"
      role="status"
    >
      Nenhuma seleção encontrada para "{{ searchQuery }}".
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { TEAMS } from '~/data/teams'

interface ColumnDef {
  key: string
  label: string
  sortable: boolean
  tooltip?: string
}

const columns: ColumnDef[] = [
  { key: 'name', label: 'Seleção', sortable: true },
  { key: 'fifaRank', label: 'Ranking FIFA', sortable: true, tooltip: 'Posição no ranking oficial da FIFA — atualizado mensalmente. Considera importância da partida.' },
  { key: 'eloRank', label: 'Ranking Elo', sortable: true, tooltip: 'Posição no ranking Elo independente — atualizado após cada resultado. Considera força do adversário e diferença de gols.' },
  { key: 'avgAge', label: 'Idade média', sortable: true, tooltip: 'Média de idade do elenco principal. Valores mais baixos indicam juventude e energia; mais altos indicam experiência.' },
  { key: 'strengthScore', label: 'Força atual', sortable: true, tooltip: 'Nota combinada de força ponderada atual, integrando rankings, elenco e desempenho recente.' },
  { key: 'squadScore', label: 'Elenco', sortable: true, tooltip: 'Qualidade e profundidade do elenco: titulares, banco, versatilidade e dependência de estrelas.' },
  { key: 'formScore', label: 'Momento recente', sortable: true, tooltip: 'Desempenho em jogos oficiais e amistosos nos últimos 12 a 24 meses.' },
  { key: 'coachScore', label: 'Técnico', sortable: true, tooltip: 'Qualidade do treinador e consistência do modelo tático.' },
  { key: 'pathScore', label: 'Caminho', sortable: true, tooltip: 'Facilidade do grupo na primeira fase e caminho projetado até as fases finais.' },
  { key: 'fitnessScore', label: 'Saúde física', sortable: true, tooltip: 'Situação de lesões, retornos recentes e carga de jogos dos atletas principais.' },
  { key: 'knockoutScore', label: 'Mata-mata', sortable: true, tooltip: 'Experiência e aproveitamento da seleção e dos jogadores em jogos eliminatórios.' },
  { key: 'probabilityNote', label: 'Nota', sortable: true, tooltip: 'Nota final ponderada do modelo analítico, combinando todas as dimensões.' },
]

const searchQuery = ref('')
const sortKey = ref<string>('probabilityNote')
const sortDir = ref<'asc' | 'desc'>('desc')

function formatRank(value: number | null): string {
  if (value == null) return '—'
  return `${value}º`
}

function scoreColor(value: number): string {
  if (value >= 9.0) return 'bg-green-500/20 text-green-400'
  if (value >= 8.0) return 'bg-blue-500/20 text-blue-400'
  if (value >= 7.0) return 'bg-gold-500/20 text-gold-400'
  return 'bg-red-500/20 text-red-400'
}

function scoreTextColor(value: number): string {
  if (value >= 9.0) return 'text-green-400'
  if (value >= 8.0) return 'text-blue-400'
  if (value >= 7.0) return 'text-gold-400'
  return 'text-red-400'
}

function toggleSort(key: string) {
  if (sortKey.value === key) {
    sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDir.value = 'desc'
  }
}

const filteredTeams = computed(() => {
  const q = searchQuery.value.toLowerCase().trim()
  if (!q) return [...TEAMS]
  return TEAMS.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.nameEn.toLowerCase().includes(q) ||
    t.coach?.toLowerCase().includes(q)
  )
})

const sortedFilteredTeams = computed(() => {
  const teams = [...filteredTeams.value]
  const key = sortKey.value
  const dir = sortDir.value

  teams.sort((a, b) => {
    let aVal: string | number | null
    let bVal: string | number | null

    if (key === 'name') {
      aVal = a.name
      bVal = b.name
    } else {
      const aValRaw = (a as unknown as Record<string, unknown>)[key]
      const bValRaw = (b as unknown as Record<string, unknown>)[key]
      aVal = aValRaw as number | null
      bVal = bValRaw as number | null
    }

    // Handle nulls: push to end
    if (aVal == null && bVal == null) return 0
    if (aVal == null) return 1
    if (bVal == null) return -1

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return dir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
    }

    return dir === 'asc'
      ? (aVal as number) - (bVal as number)
      : (bVal as number) - (aVal as number)
  })

  return teams
})
</script>
