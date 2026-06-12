<template>
  <footer
    class="border-t border-marine-800/60 bg-marine-950 transition-colors duration-300"
    role="contentinfo"
  >
    <div class="section-container py-12 lg:py-16">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Brand -->
        <div class="space-y-4">
          <p class="text-lg font-extrabold font-mono text-gold-500">
            World Cup 2026 Intelligence
          </p>
          <p class="text-sm text-gray-400 leading-relaxed">
            Análise editorial independente. Dados compilados de fontes públicas.
            Atualizado em 12 de junho de 2026.
          </p>
        </div>

        <!-- Links -->
        <div class="space-y-4">
          <h3 class="text-sm font-semibold text-gray-300 uppercase tracking-wider">
            Navegação
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#metodologia"
                class="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Metodologia
              </a>
            </li>
            <li>
              <a
                href="#fontes"
                class="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Fontes
              </a>
            </li>
            <li>
              <a
                href="#ranking"
                class="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Ranking completo
              </a>
            </li>
            <li>
              <a
                href="#resumo"
                class="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Início
              </a>
            </li>
          </ul>
        </div>

        <!-- Disclaimer -->
        <div class="space-y-4 sm:col-span-2 lg:col-span-1">
          <h3 class="text-sm font-semibold text-gray-300 uppercase tracking-wider">
            Aviso importante
          </h3>
          <div
            class="p-4 rounded-lg border border-gold-500/20 bg-marine-900/60"
          >
            <p class="text-xs text-gray-400 leading-relaxed">
              As probabilidades apresentadas são estimativas analíticas e não representam
              recomendações financeiras ou de aposta. Este é um projeto editorial independente
              com fins informativos.
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-6 border-t border-marine-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-gray-500">
          &copy; 2026 World Cup 2026 Intelligence. Todos os direitos reservados.
        </p>
        <p class="text-xs text-gray-600 font-mono">
          Edição de 12 de junho de 2026
        </p>
      </div>
    </div>
  </footer>
</template>
