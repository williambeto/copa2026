<template>
  <section class="section-dark" aria-labelledby="ranking-heading">
    <div class="section-inner">
      <p class="section-label">Rankings</p>
      <h2 id="ranking-heading" class="section-headline mb-4">
        FIFA versus Elo: dois rankings, duas leituras
      </h2>
      <p class="section-subhead mb-12">
        Dois sistemas de classificação com metodologias distintas. Entender as diferenças
        ajuda a interpretar por que algumas seleções aparecem melhor posicionadas em um
        ranking do que em outro.
      </p>

      <!-- Two editorial columns -->
      <div class="grid md:grid-cols-2 gap-8 mb-14">
        <!-- FIFA column -->
        <article class="editorial-card-border p-6 lg:p-8">
          <div class="flex items-center gap-3 mb-5">
            <span class="w-9 h-9 rounded-sm bg-blue-500/15 flex items-center justify-center text-blue-400 font-display font-bold text-sm border border-blue-500/20">FIFA</span>
            <h3 class="font-display text-xl font-bold text-white">Ranking FIFA</h3>
          </div>

          <p class="text-sm text-gray-400 leading-relaxed mb-5 font-sans">
            Sistema oficial da Federação Internacional de Futebol, criado em 1993.
            Utilizado institucionalmente para definir cabeças de chave, distribuição de potes
            e sorteios de competições oficiais.
          </p>

          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" aria-hidden="true" />
              <span class="font-sans">Considera o peso da partida — amistosos valem menos que jogos de Copa.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" aria-hidden="true" />
              <span class="font-sans">Atualizado mensalmente; tende a reagir com atraso a mudanças de desempenho.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" aria-hidden="true" />
              <span class="font-sans">Criticado por analistas por penalizar seleções que enfrentam adversários fortes.</span>
            </li>
          </ul>

          <div class="mt-6 pt-5 border-t border-surface-800/40">
            <span class="stat-badge-neutral text-xs">Oficial · Usado em sorteios</span>
          </div>
        </article>

        <!-- Elo column -->
        <article class="editorial-card-border p-6 lg:p-8">
          <div class="flex items-center gap-3 mb-5">
            <span class="w-9 h-9 rounded-sm bg-gold-500/15 flex items-center justify-center text-gold-400 font-display font-bold text-sm border border-gold-500/20">ELO</span>
            <h3 class="font-display text-xl font-bold text-white">Ranking Elo</h3>
          </div>

          <p class="text-sm text-gray-400 leading-relaxed mb-5 font-sans">
            Sistema independente e não oficial, adaptado do método criado por Arpad Elo
            para o xadrez. Amplamente usado por analistas esportivos por sua sensibilidade
            à forma real das seleções.
          </p>

          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" aria-hidden="true" />
              <span class="font-sans">Considera força do adversário, diferença de gols e mando de campo.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" aria-hidden="true" />
              <span class="font-sans">Atualiza após cada partida — captura mudanças de forma em tempo real.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" aria-hidden="true" />
              <span class="font-sans">Considerado mais preciso por refletir a qualidade real e não o peso da competição.</span>
            </li>
          </ul>

          <div class="mt-6 pt-5 border-t border-surface-800/40">
            <span class="stat-badge-gold text-xs">Independente · Atualização contínua</span>
          </div>
        </article>
      </div>

      <!-- Comparison table -->
      <div class="editorial-card-border p-6 lg:p-8 mb-8">
        <h3 class="font-display text-lg font-bold text-white mb-6">
          Comparação direta: as seis favoritas
        </h3>
        <div class="overflow-x-auto">
          <table class="table-editorial">
            <thead>
              <tr>
                <th>Seleção</th>
                <th class="text-center">FIFA</th>
                <th class="text-center">Elo</th>
                <th class="text-center">Diferença</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="entry in tableData" :key="entry.id">
                <td class="flex items-center gap-2.5">
                  <span class="text-lg leading-none" aria-hidden="true">{{ entry.flag }}</span>
                  <span class="font-medium text-white font-sans">{{ entry.name }}</span>
                </td>
                <td class="text-center">
                  <span class="font-mono tabular-nums text-gray-300">{{ entry.fifaRank }}º</span>
                </td>
                <td class="text-center">
                  <span class="font-mono tabular-nums text-gray-300">{{ entry.eloRank }}º</span>
                </td>
                <td class="text-center">
                  <span
                    class="font-mono font-semibold tabular-nums"
                    :class="entry.diffClass"
                  >
                    {{ entry.diff > 0 ? '+' : '' }}{{ entry.diff }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 flex items-center gap-4 text-xs text-gray-500">
          <span class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-green-400/60" aria-hidden="true" />
            Positivo = melhor no Elo
          </span>
          <span class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-red-400/60" aria-hidden="true" />
            Negativo = melhor na FIFA
          </span>
        </div>
      </div>

      <!-- Takeaway -->
      <div class="callout-info">
        <p class="text-sm leading-relaxed font-sans">
          A diferença entre os dois rankings expõe seleções que podem estar sub ou
          supervalorizadas pelo sistema oficial. Quanto maior a diferença positiva,
          mais o ranking Elo enxerga a seleção acima da posição FIFA — um sinal de
          que o desempenho recente pode estar sendo subestimado pelo sistema oficial.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TEAMS } from '~/data/teams'

interface TableEntry {
  id: string
  flag: string
  name: string
  fifaRank: number
  eloRank: number
  diff: number
  diffClass: string
}

const TABLE_TEAM_IDS = ['espanha', 'franca', 'inglaterra', 'argentina', 'portugal', 'brasil']

const tableData = computed<TableEntry[]>(() =>
  TABLE_TEAM_IDS
    .map((id) => {
      const team = TEAMS.find((t) => t.id === id)
      if (!team || team.fifaRank == null || team.eloRank == null) return null
      const diff = team.fifaRank - team.eloRank
      return {
        id: team.id,
        flag: team.flag,
        name: team.name,
        fifaRank: team.fifaRank,
        eloRank: team.eloRank,
        diff,
        diffClass:
          diff > 0 ? 'text-green-400' :
          diff < 0 ? 'text-red-400' :
          'text-gray-500',
      }
    })
    .filter((entry): entry is TableEntry => entry !== null)
)
</script>
