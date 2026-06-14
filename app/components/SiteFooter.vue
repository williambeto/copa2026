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
        <p class="text-xs text-semantic-text-secondary flex items-center gap-3">
          <span>
            Construído com
            <a
              href="https://ai-workflow-kit-site.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-semantic-accent hover:underline inline-flex items-center gap-0.5"
            >
              ⚡ AI Workflow
            </a>
          </span>
          <span class="text-semantic-border" aria-hidden="true">|</span>
          <a
            href="https://github.com/williambeto/copa2026"
            target="_blank"
            rel="noopener noreferrer"
            class="font-semibold hover:text-semantic-accent hover:underline inline-flex items-center gap-1 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
        </p>
        <p class="text-xs text-semantic-text-muted font-mono">
          Edição de 12 de junho de 2026
        </p>
      </div>
    </div>
  </footer>
</template>
