<template>
  <section class="section-light" aria-labelledby="geographic-heading">
    <div class="section-inner">
      <p class="section-label">Contexto</p>
      <h2 id="geographic-heading" class="section-headline">
        Fator geográfico
      </h2>
      <p class="section-subhead mt-2 mb-10">
        A Copa de 2026 será disputada em três países da América do Norte, com desafios de distância, clima e adaptação para todas as seleções.
      </p>

      <!-- Real map embed via OpenStreetMap -->
      <figure class="mb-12" aria-label="Mapa interativo com sedes da Copa 2026">
        <div class="relative w-full rounded-lg border border-semantic-border overflow-hidden shadow-lg" style="height: 420px;">
          <iframe
            title="Mapa das sedes da Copa do Mundo 2026"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-130%2C14%2C-60%2C56&layer=mapnik&marker=19.4326%2C-99.1332"
            class="w-full h-full border-0"
            loading="lazy"
            referrerpolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin"
          />
          <!-- Overlay: sede pins -->
          <div class="absolute inset-0 pointer-events-none">
            <!-- Semi-transparent top bar with legend -->
            <div class="absolute top-3 left-3 right-3 flex flex-wrap gap-2 pointer-events-auto">
              <div
                v-for="city in cities"
                :key="city.name"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold shadow-md backdrop-blur-sm"
                :class="city.country === 'EUA' ? 'bg-blue-600/90 text-white' : city.country === 'México' ? 'bg-green-700/90 text-white' : 'bg-red-700/90 text-white'"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-white/80" aria-hidden="true" />
                {{ city.name }}
              </div>
            </div>
            <!-- Legend bottom -->
            <div class="absolute bottom-3 left-3 flex gap-3 pointer-events-auto">
              <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-mono backdrop-blur-sm">
                <span class="w-2 h-2 rounded-full bg-blue-400" aria-hidden="true" />EUA (11 sedes)
              </div>
              <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-mono backdrop-blur-sm">
                <span class="w-2 h-2 rounded-full bg-green-400" aria-hidden="true" />México (3)
              </div>
              <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-mono backdrop-blur-sm">
                <span class="w-2 h-2 rounded-full bg-red-400" aria-hidden="true" />Canadá (2)
              </div>
            </div>
          </div>
        </div>
        <figcaption class="text-center mt-3 text-xs text-semantic-text-muted font-mono">
          Mapa: © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" class="underline hover:text-semantic-accent">OpenStreetMap</a> contribuidores · 16 sedes em 3 países
        </figcaption>
      </figure>

      <!-- Stats row -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div v-for="stat in geoStats" :key="stat.label" class="editorial-card-border p-4 text-center rounded-lg">
          <p class="text-2xl font-display font-extrabold text-semantic-accent">{{ stat.value }}</p>
          <p class="text-xs text-semantic-text-muted uppercase tracking-wider mt-1">{{ stat.label }}</p>
        </div>
      </div>

      <!-- SoFi Stadium photo — 2026 WC host venue (AI Generated) -->
      <figure class="mb-12 rounded-lg overflow-hidden border border-semantic-border shadow-lg">
        <div class="relative aspect-[21/9]">
          <img
            src="/images/sofi_stadium.png"
            alt="Vista aérea do SoFi Stadium, Los Angeles — sede da Copa do Mundo FIFA 2026"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
          <div class="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <p class="text-white font-display font-bold text-xl leading-tight">SoFi Stadium</p>
              <p class="text-white/70 text-sm font-mono">Los Angeles, Califórnia — Sede FIFA 2026</p>
            </div>
            <span class="tag-gold text-xs">🏟️ 70.240 lugares</span>
          </div>
        </div>
        <figcaption class="px-4 py-2 text-xs text-semantic-text-muted font-mono bg-semantic-surface">
          Foto: Imagem gerada por Inteligência Artificial · AI Workflow · SoFi Stadium é uma das sedes da Copa do Mundo FIFA 2026
        </figcaption>
      </figure>

      <!-- Factor explanation -->
      <div class="max-w-3xl mx-auto mb-12">
        <h3 class="text-lg font-display font-bold text-semantic-text-primary mb-5">Fatores que influenciam o desempenho</h3>
        <ul class="space-y-4">
          <li v-for="factor in factors" :key="factor.title" class="flex items-start gap-4">
            <span class="text-xl shrink-0 mt-0.5" aria-hidden="true">{{ factor.icon }}</span>
            <div>
              <strong class="text-semantic-text-primary font-semibold">{{ factor.title }}:</strong>
              <span class="text-sm text-semantic-text-secondary leading-relaxed"> {{ factor.text }}</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- Geographic advantage cards -->
      <h3 class="text-lg font-display font-bold text-semantic-text-primary mb-5">Seleções com vantagem geográfica</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <article
          v-for="item in advantages"
          :key="item.team"
          class="editorial-card-border p-5 rounded-lg hover:border-semantic-accent/30 transition-colors duration-200"
        >
          <div class="flex items-center gap-3 mb-2">
            <img :src="getCountryFlagUrl(item.team)" :alt="item.team" class="w-6 h-4 object-cover rounded-sm shadow-sm" aria-hidden="true" />
            <h4 class="font-display font-bold text-semantic-text-primary">{{ item.team }}</h4>
          </div>
          <p class="text-sm text-semantic-text-muted leading-relaxed">{{ item.advantage }}</p>
        </article>
      </div>

      <div class="callout-info max-w-xl mx-auto">
        <span aria-hidden="true">ℹ️</span>
        Vantagem geográfica não substitui força técnica, mas pode ser fator decisivo em jogos equilibrados.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GEOGRAPHIC_ADVANTAGE } from '~/data/teams'

const advantages = GEOGRAPHIC_ADVANTAGE

const cities = [
  { name: 'New York', country: 'EUA' },
  { name: 'Los Angeles', country: 'EUA' },
  { name: 'Dallas', country: 'EUA' },
  { name: 'Miami', country: 'EUA' },
  { name: 'Atlanta', country: 'EUA' },
  { name: 'Seattle', country: 'EUA' },
  { name: 'Cidade do México', country: 'México' },
  { name: 'Monterrey', country: 'México' },
  { name: 'Toronto', country: 'Canadá' },
  { name: 'Vancouver', country: 'Canadá' },
]

const geoStats = [
  { value: '16', label: 'Sedes' },
  { value: '3', label: 'Países' },
  { value: '4.500km', label: 'Distância máx.' },
  { value: '3', label: 'Fusos horários' },
]

const factors = [
  { icon: '✈️', title: 'Longas viagens', text: 'Distâncias superiores a 4.000 km entre algumas sedes exigem planejamento rigoroso de recuperação e logística.' },
  { icon: '🕐', title: 'Fusos horários', text: 'Até 3 fusos entre sedes impactam o ritmo circadiano dos atletas, exigindo adaptação constante.' },
  { icon: '⛰️', title: 'Altitude', text: 'O Estádio Azteca na Cidade do México fica a 2.250m de altitude, o que impacta a dinâmica aeróbica das partidas.' },
  { icon: '🌡️', title: 'Calor e umidade', text: 'Sedes como Miami e Houston apresentam condições climáticas desgastantes, especialmente em junho.' },
  { icon: '🏟️', title: 'Estádios cobertos', text: 'Parte das sedes conta com teto retrátil e controle climático, reduzindo o impacto ambiental.' },
  { icon: '📅', title: 'Formato expandido', text: 'Com 48 seleções e um jogo a mais para chegar ao título, o desgaste acumulado é superior ao de edições anteriores.' },
]
</script>
