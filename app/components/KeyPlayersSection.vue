<template>
  <section class="section-light" aria-labelledby="keyplayers-heading">
    <div class="section-inner">
      <p class="section-label">Elenco</p>
      <h2 id="keyplayers-heading" class="section-headline">
        Elencos e jogadores decisivos
      </h2>
      <p class="section-subhead mb-12">
        Análise dos plantéis das principais candidatas ao título, com destaques individuais
        por posição e função tática.
      </p>

      <!-- Team tabs -->
      <div
        role="tablist"
        aria-label="Seleções"
        class="flex overflow-x-auto gap-1 pb-3 mb-10 border-b border-semantic-border"
      >
        <button
          v-for="team in teams"
          :key="team.id"
          role="tab"
          type="button"
          class="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-t-lg text-sm font-display font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-accent whitespace-nowrap"
          :class="activeTab === team.id
            ? 'text-semantic-accent bg-semantic-surface border-b-2 border-semantic-accent'
            : 'text-semantic-text-secondary hover:text-semantic-text-primary hover:bg-semantic-surface/40'"
          :aria-selected="activeTab === team.id"
          :aria-controls="`kp-panel-${team.id}`"
          :tabindex="activeTab === team.id ? 0 : -1"
          @click="activeTab = team.id"
          @keydown="handleTabKeydown($event, team.id)"
        >
          <img
            :src="getCountryFlagUrl(team.name)"
            :alt="team.name"
            class="w-5 h-3.5 object-cover rounded-sm shadow-sm shrink-0"
            aria-hidden="true"
          />
          <span>{{ team.name }}</span>
        </button>
      </div>

      <!-- Active panel -->
      <div
        v-if="activeTeamData"
        :id="`kp-panel-${activeTab}`"
        role="tabpanel"
        class="animate-fade-in"
      >
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Captain -->
          <div class="editorial-card-border p-5">
            <div class="relative overflow-hidden w-full aspect-[3/2] rounded-sm mb-3 border border-semantic-border/40 bg-semantic-background-muted">
              <img
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80"
                alt="Capitão em campo"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <span class="tag-gold text-xs mb-2 inline-block">Capitão</span>
            <h4 class="font-display font-bold text-lg text-semantic-text-primary">{{ activeTeamData.captain }}</h4>
            <p class="text-xs text-semantic-text-secondary mt-1">Líder técnico e emocional</p>
          </div>

          <!-- Decisive player -->
          <div class="editorial-card-border p-5">
            <div class="relative overflow-hidden w-full aspect-[3/2] rounded-sm mb-3 border border-semantic-border/40 bg-semantic-background-muted">
              <img
                src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=80"
                alt="Jogador decisivo em ação"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <span class="tag-gold text-xs mb-2 inline-block">Jogador decisivo</span>
            <h4 class="font-display font-bold text-lg text-semantic-text-primary">{{ activeTeamData.decisive }}</h4>
            <p class="text-xs text-semantic-text-secondary mt-1">Capaz de decidir partidas</p>
          </div>

          <!-- Rising star -->
          <div class="editorial-card-border p-5">
            <div class="relative overflow-hidden w-full aspect-[3/2] rounded-sm mb-3 border border-semantic-border/40 bg-semantic-background-muted">
              <img
                src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80"
                alt="Jovem talento em ascensão"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <span class="tag-gold text-xs mb-2 inline-block">Estrela em ascensão</span>
            <h4 class="font-display font-bold text-lg text-semantic-text-primary">{{ activeTeamData.risingStar }}</h4>
            <p class="text-xs text-semantic-text-secondary mt-1">Jovem talento em destaque</p>
          </div>

          <!-- Best reserve -->
          <div class="editorial-card-border p-5">
            <div class="relative overflow-hidden w-full aspect-[3/2] rounded-sm mb-3 border border-semantic-border/40 bg-semantic-background-muted">
              <img
                src="https://images.unsplash.com/photo-1546608235-3310a2494cdf?w=600&q=80"
                alt="Jogador reserva aguardando entrada"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <span class="tag-gold text-xs mb-2 inline-block">Melhor reserva</span>
            <h4 class="font-display font-bold text-lg text-semantic-text-primary">{{ activeTeamData.bestReserve }}</h4>
            <p class="text-xs text-semantic-text-secondary mt-1">Impacto saindo do banco</p>
          </div>

          <!-- Strongest position -->
          <div class="editorial-card-border p-5">
            <span class="tag-flag text-xs mb-3 inline-block">Posição mais forte</span>
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">{{ positionIcon(activeTeamData.strongestPosition) }}</span>
              <div>
                <h4 class="font-display font-bold text-lg text-semantic-text-primary">{{ activeTeamData.strongestPosition }}</h4>
                <p class="text-xs text-semantic-text-secondary">Profundidade e qualidade</p>
              </div>
            </div>
            <div class="strength-bar-track mt-2">
              <div
                class="strength-bar-fill strength-bar-fill-green"
                style="width: 90%"
              />
            </div>
            <p class="text-xs text-semantic-text-secondary mt-1">{{ activeTeamData.strongestNote }}</p>
          </div>

          <!-- Weakest position -->
          <div class="editorial-card-border p-5">
            <span class="tag-flag text-xs mb-3 inline-block">Posição mais frágil</span>
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">{{ positionIcon(activeTeamData.weakestPosition) }}</span>
              <div>
                <h4 class="font-display font-bold text-lg text-semantic-text-primary">{{ activeTeamData.weakestPosition }}</h4>
                <p class="text-xs text-semantic-text-secondary">Ponto de atenção</p>
              </div>
            </div>
            <div class="strength-bar-track mt-2">
              <div
                class="strength-bar-fill strength-bar-fill-gold"
                style="width: 55%"
              />
            </div>
            <p class="text-xs text-semantic-text-secondary mt-1">{{ activeTeamData.weakestNote }}</p>
          </div>
        </div>

        <!-- Full squad list -->
        <div class="editorial-card-border mt-6 p-5">
          <h4 class="font-display font-semibold text-semantic-text-primary mb-3">Jogadores-chave</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="player in activeTeamData.allKeyPlayers"
              :key="player"
              class="tag-flag"
            >
              {{ player }}
            </span>
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

const FAVORITE_IDS = ['espanha', 'franca', 'inglaterra', 'argentina', 'portugal', 'brasil', 'alemanha', 'holanda'] as const

const activeTab = ref<string>(FAVORITE_IDS[0])

const teams = computed<TeamData[]>(() => {
  return FAVORITE_IDS
    .map(id => TEAMS.find(t => t.id === id))
    .filter((t): t is TeamData => t !== undefined)
})

interface TeamLineup {
  captain: string
  decisive: string
  risingStar: string
  bestReserve: string
  strongestPosition: string
  strongestNote: string
  weakestPosition: string
  weakestNote: string
  allKeyPlayers: string[]
}

const activeTeamData = computed<TeamLineup | null>(() => {
  const team = TEAMS.find(t => t.id === activeTab.value)
  if (!team) return null

  const players = team.keyPlayers ?? []
  const strengths = team.strengths ?? []
  const risks = team.risks ?? []

  const captain = players[0] ?? team.coach ?? '—'
  const decisive = players[1] ?? players[0] ?? '—'
  const risingStar = players[players.length - 1] ?? '—'

  const reservePool = ['Reserva A', 'Reserva B', 'Reserva C']
  const bestReserve = players.length > 3 ? players[2] : reservePool[0]

  const positionMap: Record<string, string> = {
    espanha: 'Meio-campo',
    franca: 'Ataque',
    inglaterra: 'Meio-campo',
    argentina: 'Meio-campo',
    portugal: 'Meio-campo',
    brasil: 'Ataque',
    alemanha: 'Meio-campo ofensivo',
    holanda: 'Defesa',
  }

  const weakestMap: Record<string, string> = {
    espanha: 'Defesa',
    franca: 'Laterais',
    inglaterra: 'Zaga',
    argentina: 'Defesa',
    portugal: 'Intensidade defensiva',
    brasil: 'Defesa',
    alemanha: 'Defesa',
    holanda: 'Ataque',
  }

  const strongest = positionMap[team.id] ?? 'Meio-campo'
  const weakest = weakestMap[team.id] ?? 'Defesa'

  const strengthNote = strengths.length > 0
    ? strengths.slice(0, 2).join(' e ')
    : 'Elenco equilibrado'

  const riskNote = risks.length > 0
    ? risks[0]
    : 'Requer atenção'

  return {
    captain,
    decisive,
    risingStar,
    bestReserve,
    strongestPosition: strongest,
    strongestNote: strengthNote,
    weakestPosition: weakest,
    weakestNote: riskNote,
    allKeyPlayers: players,
  }
})

function positionIcon(position: string): string {
  if (position.includes('Ataque') || position.includes('atac')) return '⚽'
  if (position.includes('Meio')) return '🎯'
  if (position.includes('Def') || position.includes('Zag') || position.includes('Late')) return '🛡️'
  if (position.includes('Goleiro')) return '🧤'
  return '🏃'
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
  const tabElement = document.getElementById(`kp-tab-${FAVORITE_IDS[newIndex]}`)
  tabElement?.focus()
}
</script>
