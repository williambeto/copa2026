<template>
  <section class="section-container" aria-labelledby="injury-heading">
    <div class="max-w-[1200px] mx-auto">
      <p class="section-label">Fator crítico</p>
      <h2 id="injury-heading" class="section-title">
        Lesões e desgaste podem mudar tudo
      </h2>

      <!-- Warning callout -->
      <div class="callout-warning mb-8">
        <div class="flex items-start gap-3">
          <span class="text-amber-400 text-lg mt-0.5 shrink-0" aria-hidden="true">&#9888;</span>
          <div>
            <p class="text-sm font-medium text-amber-300 mb-1">Situação dos principais jogadores</p>
            <p class="text-xs text-gray-400">Status físico atualizado conforme dados disponíveis publicamente em 12 de junho de 2026.</p>
          </div>
        </div>
      </div>

      <!-- Key injuries grid (only non-available) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <article
          v-for="injury in criticalInjuries"
          :key="`${injury.teamId}-${injury.player}`"
          class="card-outline"
          :aria-label="`${injury.player}: ${injury.statusLabel}`"
        >
          <div class="flex items-start justify-between gap-2 mb-2">
            <div>
              <span class="text-xs text-gray-500">{{ getTeamFlag(injury.teamId) }}</span>
              <h4 class="font-semibold text-white text-sm mt-0.5">{{ injury.player }}</h4>
            </div>
            <span class="shrink-0 px-2 py-0.5 rounded-full text-xs font-medium" :class="statusBadgeClass(injury.status)">
              {{ injury.statusLabel }}
            </span>
          </div>
          <p class="text-xs text-gray-600">Atualizado em {{ injury.lastUpdated }}</p>
        </article>
      </div>

      <!-- Accordion: all injuries -->
      <div class="card-outline">
        <button
          type="button"
          class="accordion-trigger w-full"
          :aria-expanded="showAllInjuries"
          aria-controls="injuries-panel"
          @click="showAllInjuries = !showAllInjuries"
        >
          <span>Ver todos os jogadores monitorados ({{ INJURIES.length }})</span>
          <span class="text-lg transition-transform duration-300" :class="{ 'rotate-180': showAllInjuries }" aria-hidden="true">▾</span>
        </button>

        <div
          id="injuries-panel"
          class="accordion-content"
          :style="{ maxHeight: showAllInjuries ? '3000px' : '0', opacity: showAllInjuries ? 1 : 0 }"
          role="region"
          :aria-hidden="!showAllInjuries"
        >
          <div class="accordion-content-inner">
            <!-- Filter buttons -->
            <div class="flex flex-wrap gap-2 mb-4" role="group" aria-label="Filtrar por status">
              <button
                v-for="filter in statusFilters"
                :key="filter.value"
                class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                :class="activeFilter === filter.value
                  ? 'bg-gold-500/20 text-gold-400 border border-gold-500/40'
                  : 'bg-graphite-900/60 border border-graphite-800 text-gray-400 hover:text-gray-200'"
                @click="activeFilter = filter.value"
              >
                {{ filter.label }}
              </button>
            </div>

            <div v-if="filteredGroupedTeams.length === 0" class="text-center py-8 text-gray-500">
              <p>Nenhum jogador encontrado para o filtro selecionado.</p>
            </div>

            <div v-for="{ team, injuries } in filteredGroupedTeams" :key="team.id" class="mb-6">
              <h4 class="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <span aria-hidden="true">{{ team.flag }}</span>
                {{ team.name }}
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                <div
                  v-for="injury in injuries"
                  :key="`${injury.teamId}-${injury.player}`"
                  class="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-graphite-950/50"
                >
                  <span class="text-sm text-gray-300 truncate">{{ injury.player }}</span>
                  <div class="flex items-center gap-2 shrink-0">
                    <span class="px-2 py-0.5 rounded-full text-xs font-medium" :class="statusBadgeClass(injury.status)">
                      {{ injury.statusLabel }}
                    </span>
                    <span class="text-xs text-gray-600">{{ injury.lastUpdated }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TeamData, InjuryInfo } from '~/types/teams'
import { TEAMS, INJURIES } from '~/data/teams'

const showAllInjuries = ref(false)

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

const statusBadgeClassMap: Record<string, string> = {
  available: 'bg-green-900/50 text-green-400 border border-green-800/50',
  returning: 'bg-amber-900/50 text-amber-400 border border-amber-800/50',
  doubt: 'bg-orange-900/50 text-orange-400 border border-orange-800/50',
  out: 'bg-red-900/50 text-red-400 border border-red-800/50',
  overloaded: 'bg-purple-900/50 text-purple-400 border border-purple-800/50',
}

function statusBadgeClass(status: InjuryInfo['status']): string {
  return statusBadgeClassMap[status] ?? 'bg-gray-800 text-gray-400'
}

function getTeamFlag(teamId: string): string {
  return TEAMS.find(t => t.id === teamId)?.flag ?? ''
}

// Only show non-available players in the main view
const criticalInjuries = computed(() =>
  INJURIES.filter(i => i.status !== 'available')
)

interface GroupedTeam {
  team: TeamData
  injuries: InjuryInfo[]
}

const filteredGroupedTeams = computed<GroupedTeam[]>(() => {
  const filtered = activeFilter.value === 'all'
    ? INJURIES
    : INJURIES.filter(i => i.status === activeFilter.value)

  const teamMap = new Map<string, GroupedTeam>()

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
