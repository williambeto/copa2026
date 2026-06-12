<template>
  <section class="section-container" aria-labelledby="conclusion-heading">
    <h2 id="conclusion-heading" class="section-title">
      A seleção mais provável hoje é a Espanha
    </h2>

    <!-- Editorial text -->
    <div class="card border-l-4 border-gold-500 mb-8">
      <p class="text-base sm:text-lg text-gray-200 leading-relaxed">
        Se fosse necessário escolher uma seleção apenas com base nos dados disponíveis hoje, a escolha seria a <strong class="text-gold-400">Espanha</strong>.
      </p>
    </div>

    <!-- Reasons list -->
    <div class="card mb-8">
      <h3 class="text-lg font-semibold text-white mb-4">Por que a Espanha lidera a análise</h3>
      <ul class="space-y-3" role="list">
        <li
          v-for="reason in reasons"
          :key="reason"
          class="flex items-start gap-3 text-sm text-gray-300"
        >
          <span class="text-emerald-500 mt-0.5 shrink-0 font-bold" aria-hidden="true">&#10003;</span>
          <span>{{ reason }}</span>
        </li>
      </ul>
    </div>

    <!-- Risk alert box -->
    <div class="card border border-amber-700/50 bg-amber-900/10" role="alert">
      <div class="flex items-start gap-3">
        <span class="text-amber-500 text-xl mt-0.5 shrink-0" aria-hidden="true">&#9888;</span>
        <div>
          <h3 class="text-amber-400 font-semibold mb-2">
            Principal risco dessa conclusão estar errada
          </h3>
          <p class="text-sm text-gray-400 leading-relaxed">
            A condição física de jogadores essenciais como Lamine Yamal (sobrecarregado), Rodri (retornando) e Pedri (histórico de lesões) introduz vulnerabilidade. Além disso, França e Argentina possuem experiência superior em jogos eliminatórios de Copa do Mundo, o que pode ser determinante em partidas únicas. O modelo de jogo espanhol, baseado em controle de posse, pode ser desafiado por seleções fisicamente intensas em condições climáticas adversas.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const reasons = [
  'liderança no Elo',
  'segundo lugar no ranking FIFA',
  'campeã da Euro 2024',
  'elenco jovem e profundo',
  'modelo de jogo consolidado',
  'boa combinação entre controle e desequilíbrio',
  'grupo administrável',
  'menor número de fragilidades estruturais',
]
</script>
