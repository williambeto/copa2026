<template>
  <section class="section-dark" aria-labelledby="conclusion-heading">
    <div class="section-inner-narrow">
      <p class="section-label">Conclusão</p>
      <h2 id="conclusion-heading" class="section-headline mt-2 mb-8">
        A seleção mais provável hoje é a Espanha
      </h2>

      <blockquote class="pull-quote mb-10">
        "Se fosse necessário escolher uma seleção apenas com base nos dados disponíveis hoje,
        a escolha seria a Espanha."
      </blockquote>

      <div class="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 class="text-base font-display font-bold text-semantic-text-primary mb-4 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-semantic-success" aria-hidden="true" />
            Por que a Espanha lidera
          </h3>
          <ul class="space-y-2.5" role="list">
            <li
              v-for="reason in reasons"
              :key="reason"
              class="flex items-start gap-3 text-sm text-semantic-text-primary leading-relaxed"
            >
              <span class="text-semantic-success mt-0.5 shrink-0 font-bold" aria-hidden="true">&#10003;</span>
              <span>{{ reason }}</span>
            </li>
          </ul>
        </div>

        <div class="callout-warning" role="alert">
          <div class="flex items-start gap-3">
            <span class="text-semantic-warning text-lg mt-0.5 shrink-0" aria-hidden="true">&#9888;</span>
            <div>
              <h3 class="text-semantic-warning font-display font-bold mb-2 text-sm">
                Principal risco de esta conclusão estar errada
              </h3>
              <p class="text-sm text-semantic-text-secondary leading-relaxed">
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

      <div class="hr-gold mx-auto" />

      <p class="mt-6 text-sm text-semantic-text-secondary text-center max-w-lg mx-auto leading-relaxed">
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
