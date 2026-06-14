<template>
  <article aria-labelledby="spain-heading">
    <!-- Editorial intro: why Spain leads -->
    <section class="section-light">
      <div class="section-inner-narrow">
        <div class="flex gap-1 mb-6" aria-hidden="true">
          <span class="w-10 h-1 bg-red-600" />
          <span class="w-10 h-1 bg-semantic-accent" />
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
              <h3 class="font-display font-bold text-xl text-semantic-text-primary leading-tight">
                {{ evidence.title }}
              </h3>
            </div>
            <p class="text-base text-semantic-text-secondary leading-relaxed pl-11">
              {{ evidence.text }}
            </p>
          </div>
        </div>

        <div class="callout-warning">
          <p class="font-display font-bold text-sm uppercase tracking-wider text-semantic-warning mb-1">
            Principal risco
          </p>
          <p class="text-semantic-text-secondary">
            A dependência criativa de Lamine Yamal, a condição física de Rodri e a
            possível dificuldade da Espanha em partidas físicas e caóticas contra
            seleções que explorem a transição defensiva são os principais fatores
            que podem limitar o desempenho da Fúria no torneio.
          </p>
        </div>
      </div>
    </section>

    <!-- Editorial illustration break -->
    <section class="section-dark">
      <div class="section-inner-narrow">
        <figure class="relative overflow-hidden rounded-sm border border-semantic-border/40 aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=85"
            alt="Torcedores em estádio de futebol — atmosfera da Copa do Mundo"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <figcaption class="absolute bottom-3 right-4 text-xs text-white/50 bg-black/40 px-2 py-1 rounded-sm font-mono backdrop-blur-sm">
            Ilustração editorial
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- Closing analysis -->
    <section class="section-light">
      <div class="section-inner-narrow">
        <p class="text-lg text-semantic-text-secondary leading-relaxed mb-6">
          Com uma média de idade de apenas 26,1 anos, a Espanha combina a experiência
          de jogadores como Rodri e Carvajal com a explosão de talentos como Lamine
          Yamal, Nico Williams e Pedri. O modelo de jogo consolidado por Luis de la
          Fuente, baseado em pressão alta e controle de posse, oferece solidez tática
          contra diferentes estilos de adversário.
        </p>

        <div class="flex items-center gap-3 pt-4 border-t border-semantic-border">
          <span class="text-sm text-semantic-text-secondary">Projeção atual</span>
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
