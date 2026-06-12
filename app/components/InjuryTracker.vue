<template>
  <section class="section-container" aria-labelledby="injury-heading">
    <h2 id="injury-heading" class="section-title">
      Lesões e desgaste podem mudar tudo
    </h2>

    <!-- Top note -->
    <div class="card mb-8 border-l-4 border-yellow-600/60">
      <p class="text-sm text-gray-400 flex items-start gap-2">
        <span aria-hidden="true" class="text-yellow-500 mt-0.5 shrink-0">&#9888;</span>
        <span>Status físico atualizado conforme dados disponíveis publicamente.</span>
      </p>
    </div>

    <!-- Filter buttons -->
    <div class="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filtrar por status">
      <button
        v-for="filter in statusFilters"
        :key="filter.value"
        class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
        :class="activeFilter === filter.value
          ? 'bg-gold-500/20 text-gold-400 border border-gold-500/40'
          : 'bg-graphite-900/60 border border-graphite-800 text-gray-400 hover:text-gray-200'"
        @click="activeFilter = filter.value"
      >
        {{ filter.label }}
      </button>
    </div>

    <!-- Injury cards grouped by team -->
    <div v-if="filteredGroupedTeams.length === 0" class="text-center py-12 text-gray-500">
      <p>Nenhuma lesão encontrada para o filtro selecionado.</p>
    </div>

    <div v-for="{ team, injuries } in filteredGroupedTeams" :key="team.id" class="mb-8">
      <h3 class="flex items-center gap-2 text-lg font-semibold text-gray-200 mb-3">
        <span aria-hidden="true">{{ team.flag }}</span>
        {{ team.name }}
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        <article
          v-for="injury in injuries"
          :key="`${injury.teamId}-${injury.player}`"
          class="card-hover"
          :aria-label="`${injury.player}: ${injury.statusLabel}`"
        >
          <div class="flex items-start justify-between gap-2">
            <h4 class="font-semibold text-gray-100 text-sm">{{ injury.player }}</h4>
            <span
              class="shrink-0 px-2 py-0.5 rounded-full text-xs font-medium"
              :class="statusBadgeClass(injury.status)"
            >
              {{ injury.statusLabel }}
            </span>
          </div>
          <p class="text-xs text-gray-500 mt-2">
            Atualizado em {{ injury.lastUpdated }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TeamData, InjuryInfo } from '~/types/teams'
import { TEAMS, INJURIES } from '~/data/teams'

type StatusFilter = InjuryInfo['status'] | 'all'

interface StatusFilterOption {
  value: StatusFilter
  label: string
}

const statusFilters: StatusFilterOption[] = [
  { value: 'all', label: 'Todos' },
  { value: 'available', label: 'Disponíveis' },
  { value: 'returning', label: 'Retornando' },
  { value: 'doubt', label: 'Dúvidas' },
  { value: 'out', label: 'Fora' },
  { value: 'overloaded', label: 'Sobrecarregados' },
]

const activeFilter = ref<StatusFilter>('all')

interface StatusBadgeMap {
  [key: string]: string
}

const statusBadgeClassMap: StatusBadgeMap = {
  available: 'bg-green-900/50 text-green-400',
  returning: 'bg-yellow-900/50 text-yellow-400',
  doubt: 'bg-orange-900/50 text-orange-400',
  out: 'bg-red-900/50 text-red-400',
  overloaded: 'bg-purple-900/50 text-purple-400',
}

function statusBadgeClass(status: InjuryInfo['status']): string {
  return statusBadgeClassMap[status] ?? 'bg-gray-800 text-gray-400'
}

interface GroupedTeam {
  team: TeamData
  injuries: InjuryInfo[]
}

const filteredGroupedTeams = computed<GroupedTeam[]>(() => {
  const filtered = activeFilter.value === 'all'
    ? INJURIES
    : INJURIES.filter(i => i.status === activeFilter.value)

  const teamMap = new Map<string, { team: TeamData; injuries: InjuryInfo[] }>()

  for (const injury of filtered) {
    let entry = teamMap.get(injury.teamId)
    if (!entry) {
      const team = TEAMS.find(t => t.id === injury.teamId)
      if (!team) continue
      entry = { team, injuries: [] }
      teamMap.set(injury.teamId, entry)
    }
    entry.injuries.push(injury)
  }

  return Array.from(teamMap.values())
})
</script>
