<template>
  <section
    id="analises"
    class="py-16 md:py-24 bg-marine-950/80"
    aria-labelledby="profile-heading"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section heading -->
      <h2
        id="profile-heading"
        class="text-2xl md:text-3xl lg:text-4xl font-extrabold font-mono tracking-tight text-white mb-12"
      >
        Perfis detalhados das favoritas
      </h2>

      <!-- Tab navigation -->
      <div
        role="tablist"
        aria-label="Seleções favoritas"
        class="flex overflow-x-auto gap-1 pb-3 mb-8 border-b border-marine-800/60"
      >
        <button
          v-for="team in favoriteTeams"
          :key="team.id"
          :id="`tab-${team.id}`"
          role="tab"
          type="button"
          class="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-t-lg text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 whitespace-nowrap"
          :class="activeTab === team.id
            ? 'text-gold-500 bg-marine-900/80 border-b-2 border-gold-500'
            : 'text-gray-400 hover:text-gray-200 hover:bg-marine-900/40'"
          :aria-selected="activeTab === team.id"
          :aria-controls="`panel-${team.id}`"
          :tabindex="activeTab === team.id ? 0 : -1"
          @click="activeTab = team.id"
          @keydown="handleTabKeydown($event, team.id)"
        >
          <span aria-hidden="true">{{ team.flag }}</span>
          <span>{{ team.name }}</span>
        </button>
      </div>

      <!-- Active panel -->
      <div
        role="tabpanel"
        aria-labelledby="`tab-${activeTab}`"
        class="animate-fade-in"
      >
        <article
          v-if="activeTeam"
          class="card card-hover rounded-xl bg-marine-900/60 border border-marine-800/60 p-6 md:p-8"
        >
          <!-- Header: flag + name + probability -->
          <div class="flex flex-wrap items-center gap-4 mb-6">
            <span class="text-4xl" aria-hidden="true">{{ activeTeam.flag }}</span>
            <div class="flex-1 min-w-0">
              <h3 class="text-2xl font-extrabold text-white">{{ activeTeam.name }}</h3>
              <p class="text-sm text-gray-400 mt-0.5">{{ activeTeam.nameEn }}</p>
            </div>
            <div
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-500/15 border border-gold-500/30"
              :aria-label="`Probabilidade de título: ${activeTeam.probability}%`"
            >
              <span class="text-lg font-bold text-gold-400 font-mono">{{ activeTeam.probability }}%</span>
              <span class="text-xs text-gold-400/70">probabilidade</span>
            </div>
          </div>

          <!-- Stats row -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 p-4 rounded-lg bg-marine-950/60 border border-marine-800/40">
            <div>
              <dt class="text-xs font-mono text-gray-500 uppercase tracking-wider">Ranking FIFA</dt>
              <dd class="text-lg font-bold text-white mt-0.5">
                {{ activeTeam.fifaRank !== null ? `#${activeTeam.fifaRank}` : '—' }}
              </dd>
            </div>
            <div>
              <dt class="text-xs font-mono text-gray-500 uppercase tracking-wider">Ranking Elo</dt>
              <dd class="text-lg font-bold text-white mt-0.5">
                {{ activeTeam.eloRank !== null ? `#${activeTeam.eloRank}` : '—' }}
              </dd>
            </div>
            <div>
              <dt class="text-xs font-mono text-gray-500 uppercase tracking-wider">Idade média</dt>
              <dd class="text-lg font-bold text-white mt-0.5">
                {{ activeTeam.avgAge !== null ? `${activeTeam.avgAge} anos` : '—' }}
              </dd>
            </div>
            <div>
              <dt class="text-xs font-mono text-gray-500 uppercase tracking-wider">Técnico</dt>
              <dd class="text-sm font-semibold text-white mt-0.5">
                {{ activeTeam.coach ?? '—' }}
              </dd>
            </div>
          </div>

          <!-- Two column layout: key players + strengths & risks -->
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <!-- Key players -->
            <div>
              <h4 class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Jogadores-chave</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="player in activeTeam.keyPlayers"
                  :key="player"
                  class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-500/15 text-blue-400 border border-blue-500/25"
                >
                  {{ player }}
                </span>
              </div>
              <p v-if="!activeTeam.keyPlayers?.length" class="text-sm text-gray-500">—</p>
            </div>

            <!-- Strengths -->
            <div>
              <h4 class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Pontos fortes</h4>
              <ul class="space-y-2" role="list">
                <li
                  v-for="strength in activeTeam.strengths"
                  :key="strength"
                  class="flex items-start gap-2 text-sm text-gray-300"
                >
                  <span class="text-green-400 mt-0.5 flex-shrink-0" aria-hidden="true">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{{ strength }}</span>
                </li>
              </ul>
              <p v-if="!activeTeam.strengths?.length" class="text-sm text-gray-500">—</p>
            </div>
          </div>

          <!-- Risks -->
          <div class="mb-6 p-4 rounded-lg bg-amber-500/5 border border-amber-500/15">
            <h4 class="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">Riscos e pontos de atenção</h4>
            <ul class="space-y-2" role="list">
              <li
                v-for="risk in activeTeam.risks"
                :key="risk"
                class="flex items-start gap-2 text-sm text-amber-200/80"
              >
                <span class="text-amber-400 mt-0.5 flex-shrink-0" aria-hidden="true">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </span>
                <span>{{ risk }}</span>
              </li>
            </ul>
            <p v-if="!activeTeam.risks?.length" class="text-sm text-gray-500">—</p>
          </div>

          <!-- Bottom row: group info, recent form, injuries -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- Group info -->
            <div
              v-if="groupData"
              class="p-4 rounded-lg bg-marine-950/60 border border-marine-800/40"
            >
              <h4 class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Grupo</h4>
              <p class="text-sm text-gray-300 mb-2">
                <span class="font-semibold text-white">{{ groupData.difficultyLabel }}</span>
              </p>
              <div class="flex flex-wrap gap-1.5 mb-2">
                <span
                  v-for="opp in groupData.opponents"
                  :key="opp"
                  class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-marine-800/80 text-gray-300 border border-marine-700/50"
                >
                  {{ opp }}
                </span>
              </div>
              <p class="text-xs text-gray-500 mt-1">
                Chance de 1º lugar: <span class="text-gold-400 font-mono font-semibold">{{ (groupData.firstPlaceChance * 100).toFixed(0) }}%</span>
              </p>
              <p class="text-xs text-gray-400 mt-1 leading-relaxed">{{ groupData.knockoutImpact }}</p>
            </div>

            <!-- Recent form -->
            <div
              v-if="formData"
              class="p-4 rounded-lg bg-marine-950/60 border border-marine-800/40"
            >
              <h4 class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Forma recente</h4>
              <p class="text-xs text-gray-500 mb-2">{{ formData.period }}</p>
              <div class="grid grid-cols-3 gap-2 text-center">
                <div>
                  <span class="block text-lg font-bold text-green-400 font-mono">{{ formData.wins }}</span>
                  <span class="block text-[10px] text-gray-500 uppercase">Vitórias</span>
                </div>
                <div>
                  <span class="block text-lg font-bold text-gray-300 font-mono">{{ formData.draws }}</span>
                  <span class="block text-[10px] text-gray-500 uppercase">Empates</span>
                </div>
                <div>
                  <span class="block text-lg font-bold text-red-400 font-mono">{{ formData.losses }}</span>
                  <span class="block text-[10px] text-gray-500 uppercase">Derrotas</span>
                </div>
              </div>
              <div class="mt-2 text-xs text-gray-500">
                <span class="text-white font-mono">{{ formData.goalsFor }}</span> gols marcados ·
                <span class="text-white font-mono">{{ formData.goalsAgainst }}</span> sofridos
              </div>
            </div>

            <!-- Physical status -->
            <div
              class="p-4 rounded-lg bg-marine-950/60 border border-marine-800/40"
            >
              <h4 class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Situação física</h4>
              <ul v-if="teamInjuries.length" class="space-y-1.5" role="list">
                <li
                  v-for="injury in teamInjuries"
                  :key="injury.player"
                  class="flex items-center justify-between gap-2 text-xs"
                >
                  <span class="text-gray-300 truncate">{{ injury.player }}</span>
                  <span
                    class="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium"
                    :class="statusClass(injury.status)"
                  >
                    {{ injury.statusLabel }}
                  </span>
                </li>
              </ul>
              <p v-else class="text-sm text-gray-500">Sem informações de lesões disponíveis.</p>
            </div>
          </div>

          <!-- Verdict -->
          <div v-if="activeTeam" class="mt-6 p-4 rounded-lg bg-marine-900/80 border border-marine-700/50">
            <h4 class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Veredito</h4>
            <p class="text-sm text-gray-300 leading-relaxed">
              {{ activeTeam.justification }}
              <span v-if="activeTeam.risks?.length">
                Contudo, {{ activeTeam.risks.length > 1 ? 'os principais pontos de atenção incluem' : 'o principal ponto de atenção é' }}
                {{ formatRisksForVeredict(activeTeam.risks).toLowerCase() }}.
              </span>
              <span
                v-else
              >
                O cenário atual é favorável para uma campanha competitiva.
              </span>
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TeamData, GroupInfo, RecentFormData, InjuryInfo } from '~/types/teams'
import { TEAMS, GROUPS, RECENT_FORM, INJURIES } from '~/data/teams'

const FAVORITE_IDS = ['espanha', 'franca', 'inglaterra', 'argentina', 'portugal', 'brasil', 'alemanha', 'holanda'] as const

const favoriteTeams = computed<TeamData[]>(() => {
  return FAVORITE_IDS
    .map((id) => TEAMS.find((t) => t.id === id))
    .filter((t): t is TeamData => t !== undefined)
})

const activeTab = ref<string>(FAVORITE_IDS[0])

const activeTeam = computed<TeamData | undefined>(() =>
  TEAMS.find((t) => t.id === activeTab.value)
)

const groupData = computed<GroupInfo | undefined>(() =>
  GROUPS[activeTab.value]
)

const formData = computed<RecentFormData | undefined>(() =>
  RECENT_FORM[activeTab.value]
)

const teamInjuries = computed<InjuryInfo[]>(() =>
  INJURIES.filter((i) => i.teamId === activeTab.value)
)

function statusClass(status: InjuryInfo['status']): string {
  switch (status) {
    case 'available':
      return 'bg-green-500/15 text-green-400 border border-green-500/25'
    case 'returning':
      return 'bg-blue-500/15 text-blue-400 border border-blue-500/25'
    case 'doubt':
      return 'bg-amber-500/15 text-amber-400 border border-amber-500/25'
    case 'out':
      return 'bg-red-500/15 text-red-400 border border-red-500/25'
    case 'overloaded':
      return 'bg-orange-500/15 text-orange-400 border border-orange-500/25'
    default:
      return 'bg-gray-500/15 text-gray-400 border border-gray-500/25'
  }
}

function formatRisksForVeredict(risks: string[]): string {
  if (risks.length === 1) return risks[0]
  const last = risks[risks.length - 1]
  const rest = risks.slice(0, -1)
  return rest.join(', ') + ' e ' + last
}

function handleTabKeydown(event: KeyboardEvent, teamId: string): void {
  const currentIndex = FAVORITE_IDS.indexOf(teamId as typeof FAVORITE_IDS[number])
  let newIndex = currentIndex

  if (event.key === 'ArrowRight') {
    event.preventDefault()
    newIndex = (currentIndex + 1) % FAVORITE_IDS.length
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    newIndex = (currentIndex - 1 + FAVORITE_IDS.length) % FAVORITE_IDS.length
  } else if (event.key === 'Home') {
    event.preventDefault()
    newIndex = 0
  } else if (event.key === 'End') {
    event.preventDefault()
    newIndex = FAVORITE_IDS.length - 1
  } else {
    return
  }

  activeTab.value = FAVORITE_IDS[newIndex]
  const tabElement = document.getElementById(`tab-${FAVORITE_IDS[newIndex]}`)
  tabElement?.focus()
}
</script>
