<template>
  <section class="section-container" aria-labelledby="geographic-heading">
    <h2 id="geographic-heading" class="section-title">
      Fator geográfico
    </h2>
    <p class="section-subtitle mb-8">
      A Copa de 2026 será disputada em três países da América do Norte, com desafios de distância, clima e adaptação.
    </p>

    <!-- Abstract map -->
    <figure class="mb-10" aria-label="Mapa estilizado da América do Norte com possíveis sedes da Copa 2026">
      <div class="relative w-full max-w-2xl mx-auto aspect-[4/3] bg-graphite-900/40 border border-graphite-800 rounded-xl overflow-hidden">
        <!-- Grid lines -->
        <svg class="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden="true">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" class="text-gray-400" stroke-width="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>

        <!-- Canada shape -->
        <div class="absolute top-[5%] left-[8%] w-[84%] h-[28%] bg-graphite-800/60 rounded-tr-3xl rounded-tl-3xl border border-graphite-700/40" aria-hidden="true" />

        <!-- USA shape -->
        <div class="absolute top-[28%] left-[8%] w-[75%] h-[42%] bg-graphite-800/40 border border-graphite-700/30" aria-hidden="true" />

        <!-- Mexico shape -->
        <div class="absolute top-[58%] left-[12%] w-[45%] h-[30%] bg-graphite-800/50 border border-graphite-700/30" aria-hidden="true" />

        <!-- Stadium dots -->
        <div class="absolute top-[22%] left-[45%] w-3 h-3 bg-gold-500/70 rounded-full shadow-lg shadow-gold-500/30" aria-hidden="true" title="Toronto" />
        <div class="absolute top-[35%] left-[28%] w-3 h-3 bg-gold-500/70 rounded-full shadow-lg shadow-gold-500/30" aria-hidden="true" title="Los Angeles" />
        <div class="absolute top-[40%] left-[55%] w-3 h-3 bg-gold-500/70 rounded-full shadow-lg shadow-gold-500/30" aria-hidden="true" title="Kansas City" />
        <div class="absolute top-[48%] left-[42%] w-3 h-3 bg-gold-500/70 rounded-full shadow-lg shadow-gold-500/30" aria-hidden="true" title="Dallas" />
        <div class="absolute top-[52%] left-[62%] w-3 h-3 bg-gold-500/70 rounded-full shadow-lg shadow-gold-500/30" aria-hidden="true" title="Atlanta" />
        <div class="absolute top-[33%] left-[70%] w-3 h-3 bg-gold-500/70 rounded-full shadow-lg shadow-gold-500/30" aria-hidden="true" title="New York" />
        <div class="absolute top-[46%] left-[72%] w-3 h-3 bg-gold-500/70 rounded-full shadow-lg shadow-gold-500/30" aria-hidden="true" title="Miami" />
        <div class="absolute top-[70%] left-[35%] w-3 h-3 bg-gold-500/70 rounded-full shadow-lg shadow-gold-500/30" aria-hidden="true" title="Cidade do México" />
        <div class="absolute top-[82%] left-[55%] w-3 h-3 bg-gold-500/70 rounded-full shadow-lg shadow-gold-500/30" aria-hidden="true" title="Monterrey" />

        <!-- Label -->
        <figcaption class="absolute bottom-3 left-4 text-xs text-gray-600 font-mono">
          Representação estilizada — América do Norte
        </figcaption>
      </div>
    </figure>

    <!-- Factor explanation -->
    <div class="card mb-10">
      <h3 class="text-lg font-semibold text-white mb-3">Fatores geográficos que influenciam o torneio</h3>
      <ul class="space-y-2 text-sm text-gray-400">
        <li class="flex items-start gap-2">
          <span aria-hidden="true" class="text-gold-500 mt-0.5">&#8226;</span>
          <span><strong class="text-gray-300">Longas viagens:</strong> distâncias superiores a 4.000 km entre algumas sedes exigem planejamento de recuperação.</span>
        </li>
        <li class="flex items-start gap-2">
          <span aria-hidden="true" class="text-gold-500 mt-0.5">&#8226;</span>
          <span><strong class="text-gray-300">Diferentes fusos horários:</strong> até 3 fusos entre sedes impactam o ritmo circadiano dos atletas.</span>
        </li>
        <li class="flex items-start gap-2">
          <span aria-hidden="true" class="text-gold-500 mt-0.5">&#8226;</span>
          <span><strong class="text-gray-300">Altitude:</strong> estádios na Cidade do México (2.250m) influenciam a dinâmica das partidas.</span>
        </li>
        <li class="flex items-start gap-2">
          <span aria-hidden="true" class="text-gold-500 mt-0.5">&#8226;</span>
          <span><strong class="text-gray-300">Calor e umidade:</strong> sedes como Miami e Houston apresentam condições desgastantes.</span>
        </li>
        <li class="flex items-start gap-2">
          <span aria-hidden="true" class="text-gold-500 mt-0.5">&#8226;</span>
          <span><strong class="text-gray-300">Estádios cobertos:</strong> parte das sedes oferece controle climático, reduzindo o impacto de fatores externos.</span>
        </li>
        <li class="flex items-start gap-2">
          <span aria-hidden="true" class="text-gold-500 mt-0.5">&#8226;</span>
          <span><strong class="text-gray-300">Necessidade de recuperação:</strong> calendário mais compacto com o formato de 48 seleções exige elenco profundo.</span>
        </li>
        <li class="flex items-start gap-2">
          <span aria-hidden="true" class="text-gold-500 mt-0.5">&#8226;</span>
          <span><strong class="text-gray-300">Impacto do oitavo jogo:</strong> o novo formato exige um jogo adicional para chegar ao título, aumentando o desgaste acumulado.</span>
        </li>
      </ul>
    </div>

    <!-- Geographic advantage cards -->
    <h3 class="text-xl font-semibold text-white mb-4">Seleções com vantagem geográfica</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <article
        v-for="item in advantages"
        :key="item.team"
        class="card-hover"
      >
        <h4 class="flex items-center gap-2 font-semibold text-gray-100 mb-2">
          <span aria-hidden="true">{{ item.flag }}</span>
          {{ item.team }}
        </h4>
        <p class="text-sm text-gray-400">{{ item.advantage }}</p>
      </article>
    </div>

    <!-- Disclaimer -->
    <div class="card border-l-4 border-gold-600/60">
      <p class="text-sm text-gray-400 flex items-start gap-2">
        <span aria-hidden="true" class="text-gold-500 mt-0.5 shrink-0">&#8505;</span>
        <span>Vantagem geográfica não substitui força técnica.</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GEOGRAPHIC_ADVANTAGE } from '~/data/teams'

const advantages = GEOGRAPHIC_ADVANTAGE
</script>
