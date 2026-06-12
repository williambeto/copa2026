<template>
  <article aria-labelledby="spain-heading">
    <!-- Editorial intro: why Spain leads -->
    <section class="section-light">
      <div class="section-inner-narrow">
        <div class="flex gap-1 mb-6" aria-hidden="true">
          <span class="w-10 h-1 bg-red-600" />
          <span class="w-10 h-1 bg-gold-500" />
          <span class="w-10 h-1 bg-red-600" />
        </div>

        <p class="section-label">Análise</p>
        <h2 id="spain-heading" class="section-headline mb-6">
          Por que a Espanha lidera a projeção?
        </h2>

        <blockquote class="pull-quote mb-12">
          "A Espanha chega a 2026 com a melhor combinação de momentum competitivo,
          base tática e profundidade de elenco entre todas as seleções."
        </blockquote>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-14">
          <div v-for="evidence in evidences" :key="evidence.title" class="space-y-2">
            <div class="flex items-center gap-3">
              <span class="text-2xl leading-none" aria-hidden="true">{{ evidence.icon }}</span>
              <h3 class="font-display font-bold text-xl text-gray-900 leading-tight">
                {{ evidence.title }}
              </h3>
            </div>
            <p class="text-base text-gray-700 leading-relaxed pl-11">
              {{ evidence.text }}
            </p>
          </div>
        </div>

        <div class="callout-warning">
          <p class="font-display font-bold text-sm uppercase tracking-wider text-amber-400 mb-1">
            Principal risco
          </p>
          <p class="text-gray-700">
            A dependência criativa de Lamine Yamal, a condição física de Rodri e a
            possível dificuldade da Espanha em partidas físicas e caóticas contra
            seleções que explorem a transição defensiva são os principais fatores
            que podem limitar o desempenho da Fúria no torneio.
          </p>
        </div>
      </div>
    </section>

    <!-- Photo placeholder break -->
    <section class="section-dark">
      <div class="section-inner-narrow">
        <figure class="photo-placeholder rounded-sm bg-gradient-to-br from-red-600/40 via-navy-900 to-gold-500/20 aspect-[21/9]">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <span class="text-7xl block mb-3" aria-hidden="true">🇪🇸</span>
              <p class="font-display text-sm uppercase tracking-[0.3em] text-white/40">
                La Roja · Copa do Mundo 2026
              </p>
            </div>
          </div>
          <figcaption class="absolute bottom-3 right-4 text-xs text-white/30">
            Ilustração editorial
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- Closing analysis -->
    <section class="section-light">
      <div class="section-inner-narrow">
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Com uma média de idade de apenas 26,1 anos, a Espanha combina a experiência
          de jogadores como Rodri e Carvajal com a explosão de talentos como Lamine
          Yamal, Nico Williams e Pedri. O modelo de jogo consolidado por Luis de la
          Fuente, baseado em pressão alta e controle de posse, oferece solidez tática
          contra diferentes estilos de adversário.
        </p>

        <div class="flex items-center gap-3 pt-4 border-t border-gray-200">
          <span class="text-sm text-gray-500">Projeção atual</span>
          <span class="stat-badge-gold">16,5% de probabilidade</span>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
interface Evidence {
  icon: string
  title: string
  text: string
}

const evidences: Evidence[] = [
  {
    icon: '🏆',
    title: 'Liderança no ranking Elo',
    text: 'A Espanha ocupa o primeiro lugar no ranking Elo, que mede a força real das seleções com base em resultados históricos ponderados. O modelo Elo é amplamente reconhecido por sua precisão preditiva em competições de futebol.',
  },
  {
    icon: '🌟',
    title: 'Título da Euro 2024',
    text: 'A conquista da Eurocopa de 2024 consolidou um ciclo vitorioso, derrotando adversários como França e Inglaterra. O título europeu validou o projeto tático e a capacidade da seleção em jogos de alto nível.',
  },
  {
    icon: '🔄',
    title: 'Elenco jovem e profundo',
    text: 'Com a segunda menor média de idade entre as favoritas (26,1 anos), a Espanha possui um elenco em ascendência. Jogadores como Yamal, Pedri, Gavi e Nico Williams ainda não atingiram seu pico de rendimento.',
  },
  {
    icon: '⚙️',
    title: 'Modelo de jogo consolidado',
    text: 'Luis de la Fuente desenvolveu um sistema que combina a tradicional posse de bola espanhola com transições rápidas e pressão alta. O modelo oferece versatilidade tática para enfrentar diferentes perfis de adversário.',
  },
]
</script>
