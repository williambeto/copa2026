<template>
  <section class="section-dark" aria-labelledby="path-heading">
    <div class="section-inner">
      <p class="section-label">Mata-mata</p>
      <h2 id="path-heading" class="section-headline mb-4">
        Cenários de chaveamento
      </h2>
      <p class="section-subhead mb-10">
        A posição no grupo define o caminho no mata-mata. Cenários projetados para cada
        favorita com base no chaveamento esperado e na classificação dos grupos adjacentes.
      </p>

      <!-- Team selector -->
      <div class="mb-10">
        <label for="team-selector" class="block text-sm font-semibold text-semantic-text-secondary mb-2 font-sans">
          Selecione a seleção
        </label>
        <div class="relative max-w-xs">
          <select
            id="team-selector"
            v-model="selectedTeamId"
            class="w-full appearance-none rounded-sm bg-semantic-surface border border-semantic-border px-4 py-2.5 pr-10 text-sm text-semantic-text-primary font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-accent cursor-pointer font-sans"
          >
            <option
              v-for="id in FAVORITE_IDS"
              :key="id"
              :value="id"
            >
              {{ getTeamName(id) }}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-semantic-text-secondary">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
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
          class="editorial-card-border p-6 flex flex-col"
        >
          <h3 class="font-display text-lg font-bold text-semantic-text-primary mb-3">
            {{ scenarioLabel(scenario.scenario) }}
          </h3>
          <p class="text-sm text-semantic-text-secondary leading-relaxed mb-4 font-sans">{{ scenario.description }}</p>

          <!-- Potential opponents -->
          <div class="mb-4">
            <p class="text-xs font-semibold text-semantic-text-secondary uppercase tracking-wider mb-2 font-sans">Possíveis adversários</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="opp in scenario.potentialOpponents"
                :key="opp"
                class="tag-flag flex items-center gap-1"
              >
                <span aria-hidden="true">{{ getCountryFlag(opp) }}</span>
                <span>{{ opp }}</span>
              </span>
            </div>
          </div>

          <!-- Difficulty meter -->
          <div class="mt-auto">
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-xs font-semibold text-semantic-text-secondary uppercase tracking-wider font-sans">Dificuldade</span>
              <span class="text-sm font-mono tabular-nums text-semantic-text-secondary">{{ scenario.difficulty }}/10</span>
            </div>
            <div
              class="strength-bar-track"
              role="meter"
              :aria-valuenow="scenario.difficulty"
              aria-valuemin="0"
              aria-valuemax="10"
              :aria-label="`Dificuldade ${scenario.difficulty} de 10`"
            >
              <div
                class="strength-bar-fill"
                :class="difficultyFillClass(scenario.difficulty)"
                :style="{ width: `${scenario.difficulty * 10}%` }"
              />
            </div>
          </div>
        </article>
      </div>

      <p v-else class="text-sm text-semantic-text-secondary italic font-sans">
        Nenhum cenário de chaveamento disponível para esta seleção.
      </p>

      <!-- Group impact -->
      <div
        v-if="groupInfo"
        class="mt-8 editorial-card-border p-5"
      >
        <p class="text-sm text-semantic-text-secondary leading-relaxed font-sans">
          <span class="font-semibold text-semantic-text-primary">Impacto de terminar em primeiro no grupo:</span>
          {{ groupInfo.knockoutImpact }}
        </p>
      </div>

      <!-- Conditional matchups note -->
      <div class="mt-6 callout-warning">
        <p class="text-sm leading-relaxed font-sans">
          Confrontos condicionais — dependem da classificação de terceiros colocados e da
          combinação de resultados entre grupos. Os cenários são baseados no chaveamento
          esperado e podem mudar conforme os resultados da fase de grupos.
        </p>
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

const knockoutPaths = computed<KnockoutPath[]>(() =>
  KNOCKOUT_PATHS[selectedTeamId.value] ?? []
)

const groupInfo = computed<GroupInfo | undefined>(() =>
  GROUPS[selectedTeamId.value]
)

function getTeamName(id: string): string {
  const team = TEAMS.find((t) => t.id === id)
  return team ? `${team.flag} ${team.name}` : id
}

function scenarioLabel(scenario: KnockoutPath['scenario']): string {
  switch (scenario) {
    case 'favorable': return 'Cenário favorável'
    case 'likely': return 'Cenário provável'
    case 'dangerous': return 'Cenário perigoso'
    default: return 'Cenário'
  }
}

function difficultyFillClass(difficulty: number): string {
  if (difficulty <= 3) return 'bg-semantic-success'
  if (difficulty <= 5) return 'bg-blue-500'
  if (difficulty <= 7) return 'bg-semantic-warning'
  return 'bg-semantic-danger'
}
</script>
