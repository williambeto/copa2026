<template>
  <section class="section-light" aria-labelledby="geographic-heading">
    <div class="section-inner">
      <p class="section-label">Contexto</p>
      <h2 id="geographic-heading" class="section-headline">
        Fator geográfico
      </h2>
      <p class="section-subhead mt-2 mb-10">
        A Copa de 2026 será disputada em três países da América do Norte, com desafios de distância, clima e adaptação.
      </p>

      <!-- Abstract map -->
      <figure class="mb-12" aria-label="Mapa estilizado da América do Norte com possíveis sedes da Copa 2026">
        <div class="relative w-full max-w-4xl mx-auto aspect-[4/3] bg-semantic-surface border border-semantic-border rounded-sm overflow-hidden">
          <svg class="absolute inset-0 w-full h-full opacity-[0.08]" aria-hidden="true">
            <defs>
              <pattern id="grid-pattern-light" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" class="text-semantic-text-secondary" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-light)" />
          </svg>

          <div class="absolute top-[5%] left-[8%] w-[84%] h-[28%] bg-semantic-surface rounded-tr-3xl rounded-tl-3xl border border-semantic-border" aria-hidden="true" />
          <div class="absolute top-[28%] left-[8%] w-[75%] h-[42%] bg-semantic-surface border border-semantic-border" aria-hidden="true" />
          <div class="absolute top-[58%] left-[12%] w-[45%] h-[30%] bg-semantic-surface border border-semantic-border" aria-hidden="true" />

          <div class="absolute top-[22%] left-[45%] w-3 h-3 bg-semantic-accent rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Toronto" />
          <div class="absolute top-[35%] left-[28%] w-3 h-3 bg-semantic-accent rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Los Angeles" />
          <div class="absolute top-[40%] left-[55%] w-3 h-3 bg-semantic-accent rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Kansas City" />
          <div class="absolute top-[48%] left-[42%] w-3 h-3 bg-semantic-accent rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Dallas" />
          <div class="absolute top-[52%] left-[62%] w-3 h-3 bg-semantic-accent rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Atlanta" />
          <div class="absolute top-[33%] left-[70%] w-3 h-3 bg-semantic-accent rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="New York" />
          <div class="absolute top-[46%] left-[72%] w-3 h-3 bg-semantic-accent rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Miami" />
          <div class="absolute top-[70%] left-[35%] w-4 h-4 bg-semantic-accent rounded-full shadow-lg shadow-gold-600/40 ring-2 ring-semantic-accent/40" aria-hidden="true" title="Cidade do México" />
          <div class="absolute top-[82%] left-[55%] w-3 h-3 bg-semantic-accent rounded-full shadow-lg shadow-gold-600/30" aria-hidden="true" title="Monterrey" />

          <figcaption class="absolute bottom-3 left-4 text-xs text-semantic-text-secondary font-mono">
            Representação estilizada — América do Norte
          </figcaption>
        </div>
      </figure>

      <!-- Factor explanation -->
      <div class="max-w-3xl mx-auto mb-12">
        <h3 class="text-lg font-display font-bold text-semantic-text-primary mb-5">Fatores geográficos que influenciam o torneio</h3>
        <ul class="space-y-3 text-sm text-semantic-text-primary">
          <li class="flex items-start gap-3">
            <span aria-hidden="true" class="text-semantic-accent mt-0.5 shrink-0 font-bold text-lg leading-none">&#8226;</span>
            <div>
              <strong class="text-semantic-text-primary">Longas viagens:</strong>
              <span> distâncias superiores a 4.000 km entre algumas sedes exigem planejamento de recuperação.</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span aria-hidden="true" class="text-semantic-accent mt-0.5 shrink-0 font-bold text-lg leading-none">&#8226;</span>
            <div>
              <strong class="text-semantic-text-primary">Diferentes fusos horários:</strong>
              <span> até 3 fusos entre sedes impactam o ritmo circadiano dos atletas.</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span aria-hidden="true" class="text-semantic-accent mt-0.5 shrink-0 font-bold text-lg leading-none">&#8226;</span>
            <div>
              <strong class="text-semantic-text-primary">Altitude:</strong>
              <span> estádios na Cidade do México (2.250m) influenciam a dinâmica das partidas.</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span aria-hidden="true" class="text-semantic-accent mt-0.5 shrink-0 font-bold text-lg leading-none">&#8226;</span>
            <div>
              <strong class="text-semantic-text-primary">Calor e umidade:</strong>
              <span> sedes como Miami e Houston apresentam condições desgastantes.</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span aria-hidden="true" class="text-semantic-accent mt-0.5 shrink-0 font-bold text-lg leading-none">&#8226;</span>
            <div>
              <strong class="text-semantic-text-primary">Estádios cobertos:</strong>
              <span> parte das sedes oferece controle climático, reduzindo o impacto de fatores externos.</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span aria-hidden="true" class="text-semantic-accent mt-0.5 shrink-0 font-bold text-lg leading-none">&#8226;</span>
            <div>
              <strong class="text-semantic-text-primary">Necessidade de recuperação:</strong>
              <span> calendário mais compacto com o formato de 48 seleções exige elenco profundo.</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span aria-hidden="true" class="text-semantic-accent mt-0.5 shrink-0 font-bold text-lg leading-none">&#8226;</span>
            <div>
              <strong class="text-semantic-text-primary">Impacto do oitavo jogo:</strong>
              <span> o novo formato exige um jogo adicional para chegar ao título, aumentando o desgaste acumulado.</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- Geographic advantage -->
      <h3 class="text-lg font-display font-bold text-semantic-text-primary mb-5">Seleções com vantagem geográfica</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <article
          v-for="item in advantages"
          :key="item.team"
          class="flex items-start gap-3 p-4 bg-semantic-surface rounded-sm"
        >
          <span aria-hidden="true" class="text-xl leading-none mt-0.5">{{ item.flag }}</span>
          <div>
            <h4 class="font-display font-bold text-semantic-text-primary text-sm">{{ item.team }}</h4>
            <p class="text-sm text-semantic-text-muted mt-0.5 leading-relaxed">{{ item.advantage }}</p>
          </div>
        </article>
      </div>

      <div class="callout-info max-w-xl mx-auto">
        <span aria-hidden="true">&#9432;</span>
        Vantagem geográfica não substitui força técnica.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GEOGRAPHIC_ADVANTAGE } from '~/data/teams'

const advantages = GEOGRAPHIC_ADVANTAGE
</script>
