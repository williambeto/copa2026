<template>
  <section
    class="py-16 md:py-24 bg-marine-950/80"
    aria-labelledby="path-heading"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        id="path-heading"
        class="text-2xl md:text-3xl lg:text-4xl font-extrabold font-mono tracking-tight text-white mb-4"
      >
        Caminho até a final
      </h2>
      <p class="text-gray-400 text-sm md:text-base mb-10 max-w-2xl">
        A posição no grupo abre ou fecha portas no mata-mata. Analisamos os cenários
        prováveis para cada favorita até a decisão.
      </p>

      <!-- Team selector -->
      <div class="mb-10">
        <label for="team-selector" class="block text-sm font-semibold text-gray-300 mb-2">
          Selecione a seleção
        </label>
        <div class="relative max-w-xs">
          <select
            id="team-selector"
            v-model="selectedTeamId"
            class="w-full appearance-none rounded-lg bg-marine-900/80 border border-marine-700/60 px-4 py-2.5 pr-10 text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-colors cursor-pointer"
          >
            <option
              v-for="id in FAVORITE_IDS"
              :key="id"
              :value="id"
            >
              {{ getTeamName(id) }}
            </option>
          </select>
          <!-- Custom chevron -->
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Scenario cards -->
      <div v-if="knockoutPaths.length > 0" class="grid md:grid-cols-3 gap-6">
        <article
          v-for="scenario in knockoutPaths"
          :key="scenario.scenario"
          class="card card-hover rounded-xl p-6 flex flex-col border-2"
          :class="scenarioBorderClass(scenario.scenario)"
        >
          <!-- Scenario header -->
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-white text-base">
              {{ scenarioLabel(scenario.scenario) }}
            </h3>
            <span
              class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold font-mono"
              :class="scenarioBadgeClass(scenario.scenario)"
            >
              {{ scenario.description.split('→')[0]?.trim() || scenario.description.slice(0, 30) }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-300 mb-4 leading-relaxed">{{ scenario.description }}</p>

          <!-- Potential opponents -->
          <div class="mb-4">
            <p class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Possíveis adversários</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="opp in scenario.potentialOpponents"
                :key="opp"
                class="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-marine-800/80 text-gray-300 border border-marine-700/50"
              >
                {{ opp }}
              </span>
            </div>
          </div>

          <!-- Difficulty meter -->
          <div class="mt-auto">
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-xs font-mono text-gray-500 uppercase tracking-wider">Dificuldade</span>
              <span class="text-xs font-bold font-mono text-gray-400">{{ scenario.difficulty }}/10</span>
            </div>
            <div class="h-1.5 rounded-full bg-marine-800 overflow-hidden" role="meter" :aria-valuenow="scenario.difficulty" aria-valuemin="0" aria-valuemax="10" :aria-label="`Dificuldade ${scenario.difficulty} de 10`">
              <div
                class="h-full rounded-full transition-all duration-500"
                :class="difficultyBarClass(scenario.difficulty)"
                :style="{ width: `${scenario.difficulty * 10}%` }"
              />
            </div>
          </div>
        </article>
      </div>

      <p v-else class="text-sm text-gray-500 italic">
        Nenhum cenário de chaveamento disponível para esta seleção.
      </p>

      <!-- Group winner impact -->
      <div
        v-if="groupInfo"
        class="mt-8 p-4 rounded-lg bg-marine-900/60 border border-marine-800/60"
      >
        <p class="text-sm text-gray-300 leading-relaxed">
          <span class="font-semibold text-white">Impacto de terminar em primeiro no grupo:</span>
          {{ groupInfo.knockoutImpact }}
        </p>
      </div>

      <!-- Note about conditional matchups -->
      <div class="mt-6 p-4 rounded-lg bg-amber-500/5 border border-amber-500/15">
        <div class="flex items-start gap-3">
          <span class="text-amber-400 mt-0.5 flex-shrink-0" aria-hidden="true">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </span>
          <p class="text-sm text-amber-200/80 leading-relaxed">
            Confrontos condicionais — dependem da classificação de terceiros colocados.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { KnockoutPath, GroupInfo } from '~/types/teams'
import { TEAMS, KNOCKOUT_PATHS, GROUPS } from '~/data/teams'

const FAVORITE_IDS = ['espanha', 'franca', 'inglaterra', 'argentina', 'portugal', 'brasil', 'alemanha', 'holanda'] as const

const selectedTeamId = ref<string>(FAVORITE_IDS[0])

const knockoutPaths = computed<KnockoutPath[]>(() => {
  return KNOCKOUT_PATHS[selectedTeamId.value] ?? []
})

const groupInfo = computed<GroupInfo | undefined>(() => {
  return GROUPS[selectedTeamId.value]
})

function getTeamName(id: string): string {
  const team = TEAMS.find((t) => t.id === id)
  return team ? `${team.flag} ${team.name}` : id
}

function scenarioLabel(scenario: KnockoutPath['scenario']): string {
  switch (scenario) {
    case 'favorable':
      return 'Cenário favorável'
    case 'likely':
      return 'Cenário provável'
    case 'dangerous':
      return 'Cenário perigoso'
    default:
      return 'Cenário'
  }
}

function scenarioBorderClass(scenario: KnockoutPath['scenario']): string {
  switch (scenario) {
    case 'favorable':
      return 'border-green-500/30 bg-green-500/[0.03]'
    case 'likely':
      return 'border-blue-500/30 bg-blue-500/[0.03]'
    case 'dangerous':
      return 'border-red-500/30 bg-red-500/[0.03]'
    default:
      return 'border-marine-700/60 bg-marine-900/40'
  }
}

function scenarioBadgeClass(scenario: KnockoutPath['scenario']): string {
  switch (scenario) {
    case 'favorable':
      return 'bg-green-500/15 text-green-400 border border-green-500/25'
    case 'likely':
      return 'bg-blue-500/15 text-blue-400 border border-blue-500/25'
    case 'dangerous':
      return 'bg-red-500/15 text-red-400 border border-red-500/25'
    default:
      return 'bg-gray-500/15 text-gray-400 border border-gray-500/25'
  }
}

function difficultyBarClass(difficulty: number): string {
  if (difficulty <= 3) return 'bg-green-500'
  if (difficulty <= 5) return 'bg-blue-500'
  if (difficulty <= 7) return 'bg-yellow-500'
  return 'bg-red-500'
}
</script>
