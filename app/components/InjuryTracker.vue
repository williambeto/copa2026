<template>
  <section class="section-dark" aria-labelledby="injury-heading">
    <div class="section-inner">
      <p class="section-label">Boletim médico</p>
      <h2 id="injury-heading" class="section-headline">
        Lesões e riscos físicos
      </h2>
      <p class="section-subhead mb-10">
        Situação física dos principais jogadores das seleções favoritas, atualizada
        conforme dados públicos disponíveis em junho de 2026.
      </p>

      <!-- Critical injuries grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <article
          v-for="injury in criticalInjuries"
          :key="`${injury.teamId}-${injury.player}`"
          class="editorial-card-border p-5"
          :aria-label="`${injury.player}: ${injury.statusLabel}`"
        >
          <div class="flex items-center gap-4">
            <!-- Avatar placeholder -->
            <div
              class="w-14 h-14 rounded-full flex-shrink-0 bg-gradient-to-br border-2"
              :class="avatarBorderClass(injury.status)"
            >
              <div class="w-full h-full rounded-full flex items-center justify-center text-lg font-display font-bold"
                :class="avatarBgClass(injury.status)"
              >
                {{ injury.player.charAt(0) }}
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-0.5">
                <span class="text-sm" aria-hidden="true">{{ getTeamFlag(injury.teamId) }}</span>
                <h4 class="font-display font-bold text-sm text-semantic-text-primary truncate">{{ injury.player }}</h4>
              </div>
              <p class="text-xs text-semantic-text-secondary">{{ getPosition(injury) }}</p>
              <div class="flex items-center gap-2 mt-1.5">
                <span
                  class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-xs font-semibold"
                  :class="statusClass(injury.status)"
                >
                  <span class="w-1.5 h-1.5 rounded-full" :class="statusDotClass(injury.status)" />
                  {{ injury.statusLabel }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Accordion: full list -->
      <div class="editorial-card-border">
        <button
          type="button"
          class="accordion-trigger px-6"
          :aria-expanded="showAll"
          aria-controls="injuries-panel"
          @click="showAll = !showAll"
        >
          <span>Ver todos os jogadores monitorados ({{ INJURIES.length }})</span>
          <span class="text-lg transition-transform duration-300" :class="{ 'rotate-180': showAll }" aria-hidden="true">▾</span>
        </button>

        <div
          id="injuries-panel"
          class="accordion-content"
          :style="{ maxHeight: showAll ? '4000px' : '0', opacity: showAll ? 1 : 0 }"
          role="region"
          :aria-hidden="!showAll"
        >
          <div class="accordion-content-inner px-6">
            <!-- Filter buttons -->
            <div class="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filtrar por status">
              <button
                v-for="filter in filters"
                :key="filter.value"
                class="px-3 py-1.5 rounded-sm text-xs font-semibold transition-all duration-200"
                :class="activeFilter === filter.value
                  ? 'tag-gold'
                  : 'tag-flag'"
                @click="activeFilter = filter.value"
              >
                {{ filter.label }}
              </button>
            </div>

            <div v-if="groupedTeams.length === 0" class="text-center py-8 text-semantic-text-secondary">
              <p>Nenhum jogador encontrado para o filtro selecionado.</p>
            </div>

            <div v-for="{ team, injuries } in groupedTeams" :key="team.id" class="mb-6 last:mb-0">
              <h4 class="flex items-center gap-2 font-display font-bold text-sm text-semantic-text-primary mb-3">
                <span aria-hidden="true">{{ team.flag }}</span>
                {{ team.name }}
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                <div
                  v-for="injury in injuries"
                  :key="`${injury.teamId}-${injury.player}`"
                  class="flex items-center justify-between gap-3 p-3 rounded-sm bg-semantic-surface/60 border border-semantic-border/40"
                >
                  <div class="flex items-center gap-3 min-w-0">
                    <div
                      class="w-8 h-8 rounded-full flex-shrink-0 bg-gradient-to-br"
                      :class="avatarBorderClass(injury.status)"
                    >
                      <div class="w-full h-full rounded-full flex items-center justify-center text-xs font-bold"
                        :class="avatarBgClass(injury.status)"
                      >
                        {{ injury.player.charAt(0) }}
                      </div>
                    </div>
                    <div class="min-w-0">
                      <p class="text-sm text-semantic-text-primary truncate">{{ injury.player }}</p>
                      <p class="text-xs text-semantic-text-muted">{{ getPosition(injury) }}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <span
                      class="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-xs font-semibold"
                      :class="statusClass(injury.status)"
                    >
                      <span class="w-1.5 h-1.5 rounded-full" :class="statusDotClass(injury.status)" />
                      {{ injury.statusLabel }}
                    </span>
                    <span class="text-xs text-semantic-text-muted">{{ injury.lastUpdated }}</span>
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

const showAll = ref(false)

type StatusFilter = InjuryInfo['status'] | 'all'

interface FilterOption {
  value: StatusFilter
  label: string
}

const filters: FilterOption[] = [
  { value: 'all', label: 'Todos' },
  { value: 'available', label: 'Disponíveis' },
  { value: 'returning', label: 'Retornando' },
  { value: 'doubt', label: 'Dúvidas' },
  { value: 'out', label: 'Fora' },
  { value: 'overloaded', label: 'Sobrecarregados' },
]

const activeFilter = ref<StatusFilter>('all')

const criticalInjuries = computed(() =>
  INJURIES.filter(i => i.status !== 'available')
)

const statusStyles: Record<string, { container: string; dot: string }> = {
  available: {
    container: 'bg-semantic-success/10 text-semantic-success border border-semantic-success/20',
    dot: 'bg-semantic-success',
  },
  returning: {
    container: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    dot: 'bg-blue-400',
  },
  doubt: {
    container: 'bg-semantic-warning/10 text-semantic-warning border border-semantic-warning/20',
    dot: 'bg-semantic-warning',
  },
  out: {
    container: 'bg-semantic-danger/10 text-semantic-danger border border-semantic-danger/20',
    dot: 'bg-semantic-danger',
  },
  overloaded: {
    container: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    dot: 'bg-purple-400',
  },
}

function statusClass(status: InjuryInfo['status']): string {
  return statusStyles[status]?.container ?? 'bg-semantic-text-secondary/10 text-semantic-text-secondary border border-semantic-text-secondary/20'
}

function statusDotClass(status: InjuryInfo['status']): string {
  return statusStyles[status]?.dot ?? 'bg-semantic-text-muted'
}

function avatarBorderClass(status: InjuryInfo['status']): string {
  switch (status) {
    case 'available': return 'border-semantic-success/40'
    case 'returning': return 'border-blue-500/40'
    case 'doubt': return 'border-semantic-warning/40'
    case 'out': return 'border-semantic-danger/40'
    case 'overloaded': return 'border-purple-500/40'
    default: return 'border-semantic-border/40'
  }
}

function avatarBgClass(status: InjuryInfo['status']): string {
  switch (status) {
    case 'available': return 'bg-gradient-to-br from-semantic-success/20 to-semantic-success/5 text-semantic-success'
    case 'returning': return 'bg-gradient-to-br from-blue-500/20 to-blue-500/5 text-blue-400'
    case 'doubt': return 'bg-gradient-to-br from-semantic-warning/20 to-semantic-warning/5 text-semantic-warning'
    case 'out': return 'bg-gradient-to-br from-semantic-danger/20 to-semantic-danger/5 text-semantic-danger'
    case 'overloaded': return 'bg-gradient-to-br from-purple-500/20 to-purple-500/5 text-purple-400'
    default: return 'bg-gradient-to-br from-semantic-surface/20 to-semantic-surface/5 text-semantic-text-secondary'
  }
}

function getTeamFlag(teamId: string): string {
  return TEAMS.find(t => t.id === teamId)?.flag ?? ''
}

function getPosition(injury: InjuryInfo): string {
  const positionMap: Record<string, string> = {
    'Lamine Yamal': 'Ponta',
    'Rodri': 'Volante',
    'Pedri': 'Meia',
    'Kylian Mbappé': 'Atacante',
    'Bukayo Saka': 'Ponta',
    'Lionel Messi': 'Atacante',
    'Cristian Romero': 'Zagueiro',
    'Neymar': 'Atacante',
    'Alisson': 'Goleiro',
    'Rodrygo': 'Atacante',
    'Éder Militão': 'Zagueiro',
    'Estêvão': 'Ponta',
    'Florian Wirtz': 'Meia',
    'Jamal Musiala': 'Meia',
  }
  return positionMap[injury.player] ?? 'Jogador'
}

interface GroupedTeam {
  team: TeamData
  injuries: InjuryInfo[]
}

const groupedTeams = computed<GroupedTeam[]>(() => {
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
