<template>
  <section class="section-container" aria-labelledby="conclusion-heading">
    <div class="max-w-[960px] mx-auto">
      <p class="section-label">Conclusão</p>
      <h2 id="conclusion-heading" class="section-title-lg mb-12">
        A seleção mais provável hoje é a Espanha
      </h2>

      <!-- Main editorial card -->
      <div class="card-highlight border-l-4 border-gold-500 mb-10">
        <p class="text-lg sm:text-xl text-gray-200 leading-relaxed font-medium">
          Se fosse necessário escolher uma seleção apenas com base nos dados disponíveis hoje,
          a escolha seria a <strong class="text-gold-500">Espanha</strong>.
        </p>
      </div>

      <!-- Reasons grid -->
      <div class="grid sm:grid-cols-2 gap-5 mb-10">
        <div class="card-outline">
          <h3 class="text-base font-semibold text-white mb-4">Por que a Espanha lidera</h3>
          <ul class="space-y-2.5" role="list">
            <li
              v-for="reason in reasons"
              :key="reason"
              class="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
            >
              <span class="text-green-400 mt-0.5 shrink-0 font-bold" aria-hidden="true">&#10003;</span>
              <span>{{ reason }}</span>
            </li>
          </ul>
        </div>

        <!-- Risk alert -->
        <div class="callout-warning" role="alert">
          <div class="flex items-start gap-3">
            <span class="text-amber-400 text-lg mt-0.5 shrink-0" aria-hidden="true">&#9888;</span>
            <div>
              <h3 class="text-amber-400 font-semibold mb-2 text-sm">
                Principal risco de esta conclusão estar errada
              </h3>
              <p class="text-sm text-gray-400 leading-relaxed">
                A condição física de Lamine Yamal (sobrecarregado), Rodri (retornando) e
                Pedri (histórico de lesões) introduz vulnerabilidade.
                França e Argentina possuem experiência superior em jogos eliminatórios,
                o que pode ser determinante em partidas únicas. O modelo de jogo espanhol,
                baseado em controle de posse, pode ser desafiado por seleções fisicamente
                intensas em condições adversas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Closing statement -->
      <p class="text-sm text-gray-500 text-center max-w-lg mx-auto leading-relaxed">
        A Copa do Mundo permanece um torneio de alta imprevisibilidade.
        Nenhuma candidata possui probabilidade dominante, e fatores como lesões,
        chaveamento e desempenho em jogos únicos podem alterar radicalmente o cenário.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const reasons = [
  'Liderança no ranking Elo',
  'Segundo lugar no ranking FIFA',
  'Campeã da Euro 2024',
  'Elenco jovem e profundo',
  'Modelo de jogo consolidado',
  'Boa combinação entre controle e desequilíbrio',
  'Grupo administrável',
  'Menor número de fragilidades estruturais',
]
</script>
