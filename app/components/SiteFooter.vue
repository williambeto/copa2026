<template>
  <footer
    class="border-t border-semantic-border bg-semantic-background transition-colors duration-300"
    role="contentinfo"
  >
    <div class="section-inner py-12 lg:py-16">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Brand -->
        <div class="space-y-4">
          <p class="text-lg font-extrabold font-mono text-semantic-accent">
            World Cup 2026 Intelligence
          </p>
          <p class="text-sm text-semantic-text-secondary leading-relaxed">
            Análise editorial independente. Dados compilados de fontes públicas.
            Atualizado em 12 de junho de 2026.
          </p>
        </div>

        <!-- Links -->
        <div class="space-y-4">
          <h3 class="text-sm font-semibold text-semantic-text-primary uppercase tracking-wider">
            Navegação
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#metodologia"
                class="text-sm text-semantic-text-secondary hover:text-semantic-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-accent"
              >
                Metodologia
              </a>
            </li>
            <li>
              <a
                href="#fontes"
                class="text-sm text-semantic-text-secondary hover:text-semantic-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-accent"
              >
                Fontes
              </a>
            </li>
            <li>
              <a
                href="#ranking"
                class="text-sm text-semantic-text-secondary hover:text-semantic-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-accent"
              >
                Ranking completo
              </a>
            </li>
            <li>
              <a
                href="#resumo"
                class="text-sm text-semantic-text-secondary hover:text-semantic-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-accent"
              >
                Início
              </a>
            </li>
          </ul>
        </div>

        <!-- Disclaimer -->
        <div class="space-y-4 sm:col-span-2 lg:col-span-1">
          <h3 class="text-sm font-semibold text-semantic-text-primary uppercase tracking-wider">
            Aviso importante
          </h3>
          <div
            class="p-4 rounded-lg border border-semantic-accent/20 bg-semantic-surface"
          >
            <p class="text-xs text-semantic-text-secondary leading-relaxed">
              As probabilidades apresentadas são estimativas analíticas e não representam
              recomendações financeiras ou de aposta. Este é um projeto editorial independente
              com fins informativos.
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-6 border-t border-semantic-border flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-semantic-text-muted">
          &copy; 2026 World Cup 2026 Intelligence. Todos os direitos reservados.
        </p>
        <p class="text-xs text-semantic-text-secondary flex items-center gap-1">
          Construído com
          <a
            href="https://ai-workflow-kit-site.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            class="font-semibold text-semantic-accent hover:underline inline-flex items-center gap-0.5"
          >
            ⚡ AI Workflow
          </a>
        </p>
        <p class="text-xs text-semantic-text-muted font-mono">
          Edição de 12 de junho de 2026
        </p>
      </div>
    </div>
  </footer>
</template>
