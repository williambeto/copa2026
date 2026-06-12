<template>
  <section class="section-dark" aria-labelledby="upset-heading">
    <div class="section-inner">
      <p class="section-label">Cenários</p>
      <h2 id="upset-heading" class="section-headline">
        Risco de zebra
      </h2>
      <p class="section-subhead mt-2 mb-10">
        Favoritas expostas a eliminações precoces e as seleções com maior potencial para surpreender.
      </p>

      <div class="grid md:grid-cols-2 gap-10 md:gap-12">
        <div>
          <h3 class="flex items-center gap-2 text-lg font-display font-bold text-semantic-danger mb-5">
            <span aria-hidden="true" class="text-xl">&#9888;</span>
            Favoritas sob risco
          </h3>
          <ul class="space-y-4">
            <li
              v-for="item in favoritesAtRisk"
              :key="item.team"
              class="pb-4 border-b border-semantic-border last:border-0"
            >
              <div class="flex items-center gap-2 mb-2">
                <span aria-hidden="true" class="text-xl">{{ item.flag }}</span>
                <span class="font-display font-bold text-semantic-text-primary">{{ item.team }}</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="factor in item.riskFactors"
                  :key="factor"
                  class="tag bg-semantic-danger/15 text-semantic-danger border-semantic-danger/25"
                >
                  {{ factor }}
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="flex items-center gap-2 text-lg font-display font-bold text-semantic-success mb-5">
            <span aria-hidden="true" class="text-xl">&#9878;</span>
            Quem pode eliminar uma favorita
          </h3>
          <ul class="space-y-4">
            <li
              v-for="item in giantKillers"
              :key="item.team"
              class="pb-4 border-b border-semantic-border last:border-0"
            >
              <div class="flex items-center gap-2 mb-2">
                <span aria-hidden="true" class="text-xl">{{ item.flag }}</span>
                <span class="font-display font-bold text-semantic-text-primary">{{ item.team }}</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="strength in item.strengths"
                  :key="strength"
                  class="tag bg-semantic-success/15 text-semantic-success border border-semantic-success/25"
                >
                  {{ strength }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UPSET_RISK } from '~/data/teams'

const favoritesAtRisk = ref(UPSET_RISK.favoritesAtRisk)
const giantKillers = ref(UPSET_RISK.giantKillers)
</script>
