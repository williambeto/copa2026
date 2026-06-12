<template>
  <section class="section-light" aria-labelledby="group-heading">
    <div class="section-inner">
      <p class="section-label">Chaveamento</p>
      <h2 id="group-heading" class="section-headline mb-4">
        Grupo e caminho até a final
      </h2>
      <p class="section-subhead mb-12">
        A fase de grupos define o ponto de partida de cada favorita. Analisamos adversários,
        a dificuldade da chave e o impacto no caminho até o mata-mata.
      </p>

      <!-- Group cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        <article
          v-for="entry in groupEntries"
          :key="entry.team.id"
          class="editorial-card-border p-6 flex flex-col"
        >
          <!-- Team header -->
          <div class="flex items-center gap-3 mb-5">
            <span class="text-3xl leading-none" aria-hidden="true">{{ entry.team.flag }}</span>
            <h3 class="font-display text-xl font-bold">{{ entry.team.name }}</h3>
          </div>

          <!-- Opponents -->
          <div class="mb-4">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-sans">Adversários</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="opp in entry.group.opponents"
                :key="opp"
                class="tag-flag"
              >
                {{ opp }}
              </span>
            </div>
          </div>

          <!-- Difficulty -->
          <div class="mb-4">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-sans">Dificuldade</p>
            <span
              class="stat-badge"
              :class="difficultyBadgeClass(entry.group.difficulty)"
            >
              {{ entry.group.difficultyLabel }}
            </span>
          </div>

          <!-- First place chance -->
          <div class="mb-4">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-sans">Chance de 1º lugar</p>
            <div class="flex items-center gap-3">
              <div
                class="strength-bar bg-gray-200 w-full flex-1"
                role="progressbar"
                :aria-valuenow="entry.group.firstPlaceChance * 100"
                aria-valuemin="0"
                aria-valuemax="100"
                :aria-label="`${(entry.group.firstPlaceChance * 100).toFixed(0)}% de chance de terminar em primeiro`"
              >
                <div
                  class="strength-bar-fill"
                  :class="firstPlaceFillClass(entry.group.firstPlaceChance)"
                  :style="{ width: `${entry.group.firstPlaceChance * 100}%` }"
                />
              </div>
              <span class="font-display text-xl font-extrabold tabular-nums w-12 text-right">
                {{ (entry.group.firstPlaceChance * 100).toFixed(0) }}%
              </span>
            </div>
          </div>

          <!-- Knockout impact -->
          <div class="mt-auto pt-4 border-t border-gray-200">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 font-sans">Impacto no mata-mata</p>
            <p class="text-sm leading-relaxed font-sans">{{ entry.group.knockoutImpact }}</p>
          </div>
        </article>
      </div>

      <!-- Caminho até a final subsection -->
      <div class="mb-12">
        <div class="flex items-center gap-3 mb-6">
          <span class="hr-gold" aria-hidden="true" />
          <h3 class="font-display text-xl font-bold">Caminho até a final</h3>
        </div>
        <p class="text-sm mb-6 max-w-2xl font-sans">
          Terminar em primeiro no grupo muda completamente a trajetória no mata-mata.
          Veja o impacto para cada favorita:
        </p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="entry in groupEntries"
            :key="'path-' + entry.team.id"
            class="editorial-card-border p-5"
          >
            <div class="flex items-center gap-2.5 mb-3">
              <span class="text-xl leading-none" aria-hidden="true">{{ entry.team.flag }}</span>
              <span class="font-display font-semibold text-base">{{ entry.team.name }}</span>
            </div>
            <p class="text-sm leading-relaxed font-sans">{{ entry.group.knockoutImpact }}</p>
          </div>
        </div>
      </div>

      <!-- Conditional matchups warning -->
      <div class="callout-warning">
        <p class="text-sm leading-relaxed font-sans">
          O chaveamento definitivo depende também da combinação dos oito melhores terceiros colocados.
          Os cenários acima consideram a classificação em primeiro lugar como cenário base.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TeamData, GroupInfo } from '~/types/teams'
import { TEAMS, GROUPS } from '~/data/teams'

const GROUP_TEAM_IDS = ['espanha', 'franca', 'argentina', 'inglaterra', 'portugal', 'brasil'] as const

interface GroupEntry {
  team: TeamData
  group: GroupInfo
}

const groupEntries = computed<GroupEntry[]>(() =>
  GROUP_TEAM_IDS
    .map((id) => {
      const team = TEAMS.find((t) => t.id === id)
      const group = GROUPS[id]
      if (!team || !group) return null
      return { team, group }
    })
    .filter((entry): entry is GroupEntry => entry !== null)
)

function difficultyBadgeClass(difficulty: GroupInfo['difficulty']): string {
  switch (difficulty) {
    case 'Muito favorável':
    case 'Favorável':
      return 'bg-green-500/10 text-green-600 border border-green-500/20'
    case 'Moderado':
      return 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
    case 'Perigoso na estreia':
      return 'bg-amber-500/15 text-amber-600 border border-amber-500/25'
    case 'Difícil':
    case 'Muito difícil':
      return 'bg-red-500/10 text-red-600 border border-red-500/20'
    default:
      return 'bg-gray-500/10 text-gray-600 border border-gray-500/20'
  }
}

function firstPlaceFillClass(chance: number): string {
  if (chance >= 0.8) return 'bg-green-500'
  if (chance >= 0.65) return 'bg-amber-500'
  if (chance >= 0.5) return 'bg-orange-500'
  return 'bg-red-500'
}
</script>
