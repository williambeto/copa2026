<template>
  <section class="section-dark" aria-labelledby="top3-heading">
    <div class="section-inner">
      <h2 id="top3-heading" class="section-headline mb-4">
        As três principais concorrentes
      </h2>
      <p class="section-subhead mb-12">
        França, Inglaterra e Argentina formam o trio de seleções com maior potencial
        para destronar a Espanha e levantar o troféu em 2026.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <article
          v-for="profile in profiles"
          :key="profile.team.id"
          class="editorial-card-border flex flex-col"
        >
          <div class="photo-placeholder h-48" :class="profile.gradientClass">
            <div class="photo-overlay" />
            <div class="relative z-10 h-full flex flex-col justify-end p-5">
              <div class="flex items-center gap-2 mb-1">
                <span class="tag-flag text-lg">{{ profile.team.flag }}</span>
                <span class="text-xs font-semibold uppercase tracking-wider text-white/70">
                  {{ profile.positionLabel }}
                </span>
              </div>
              <h3 class="font-display text-2xl font-bold text-semantic-text-primary">
                {{ profile.team.name }}
              </h3>
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <span class="stat-badge-gold text-sm">
                {{ profile.team.probability }}%
              </span>
              <span class="text-xs text-semantic-text-secondary">
                FIFA {{ profile.team.fifaRank !== null ? '#' + profile.team.fifaRank : '—' }}
                · Elo {{ profile.team.eloRank !== null ? '#' + profile.team.eloRank : '—' }}
              </span>
            </div>

            <p class="text-sm text-semantic-text-secondary leading-relaxed">
              {{ profile.analysis }}
            </p>

            <div class="hr-gold" />

            <div class="space-y-3">
              <div>
                <span class="text-xs font-semibold uppercase tracking-wider text-semantic-text-secondary">Principal força</span>
                <p class="text-sm text-semantic-text-primary mt-0.5">{{ profile.mainStrength }}</p>
              </div>
              <div>
                <span class="text-xs font-semibold uppercase tracking-wider text-semantic-text-secondary">Principal risco</span>
                <p class="text-sm text-semantic-text-secondary mt-0.5">{{ profile.mainRisk }}</p>
              </div>
              <div>
                <span class="text-xs font-semibold uppercase tracking-wider text-semantic-text-secondary">Jogador decisivo</span>
                <p class="text-sm font-semibold text-semantic-accent mt-0.5">{{ profile.decisivePlayer }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="section-inner-narrow">
        <blockquote class="pull-quote text-center border-l-0">
          "Nenhuma das três possui domínio absoluto, mas todas têm condições reais de levantar o troféu."
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TeamData } from '~/types/teams'
import { TEAMS } from '~/data/teams'

interface Profile {
  team: TeamData
  positionLabel: string
  gradientClass: string
  analysis: string
  mainStrength: string
  mainRisk: string
  decisivePlayer: string
}

const profiles = computed<Profile[]>(() => {
  const franca = TEAMS.find(t => t.id === 'franca')!
  const inglaterra = TEAMS.find(t => t.id === 'inglaterra')!
  const argentina = TEAMS.find(t => t.id === 'argentina')!

  return [
    {
      team: franca,
      positionLabel: '1ª concorrente',
      gradientClass: 'from-blue-600 via-navy-800 to-red-600',
      analysis: 'A França chega como a principal ameaça ao domínio espanhol. O elenco mais profundo da competição soma experiência acumulada em duas finais de Copa consecutivas, com Kylian Mbappé como referência ofensiva e um sistema defensivo consolidado por Didier Deschamps. O grupo difícil é o contraponto que pode desgastar a equipe precocemente.',
      mainStrength: 'Elenco mais profundo e experiência de mata-mata',
      mainRisk: 'Grupo muito difícil e desgaste precoce',
      decisivePlayer: 'Kylian Mbappé',
    },
    {
      team: inglaterra,
      positionLabel: '2ª concorrente',
      gradientClass: 'from-blue-900 via-navy-800 to-red-900',
      analysis: 'A Inglaterra reúne um conjunto ofensivo de alto nível com Kane, Bellingham e Saka, sustentado por um meio-campo sólido comandado por Declan Rice. Thomas Tuchel assume o comando com a missão de traduzir talento individual em resultado coletivo. O histórico de tropeços em momentos decisivos, porém, segue como sombra sobre as expectativas.',
      mainStrength: 'Talento ofensivo e elenco profundo',
      mainRisk: 'Histórico de derrotas em decisões',
      decisivePlayer: 'Jude Bellingham',
    },
    {
      team: argentina,
      positionLabel: '3ª concorrente',
      gradientClass: 'from-sky-500 via-white/10 to-sky-500',
      analysis: 'Atual campeã mundial e bicampeã da Copa América, a Argentina de Lionel Scaloni é o retrato da estabilidade competitiva. O time sabe exatamente como jogar e como sofrer, apoiado em uma estrutura defensiva sólida e na capacidade de controle emocional que poucas seleções têm. Messi segue como maestro, mas a idade dos líderes e a condição física do camisa 10 acendem alertas.',
      mainStrength: 'Estabilidade competitiva e experiência em decisões',
      mainRisk: 'Idade dos líderes e condição física de Messi',
      decisivePlayer: 'Lionel Messi',
    },
  ]
})
</script>
