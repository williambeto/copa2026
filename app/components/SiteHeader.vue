<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-semantic-surface backdrop-blur-md border-b border-semantic-border transition-colors duration-300"
    role="banner"
  >
    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Navegação principal"
    >
      <div class="flex items-center justify-between h-16 lg:h-18">
        <!-- Logo -->
        <a
          href="#"
          class="flex-shrink-0 group"
          aria-label="Ir para o topo da página"
        >
          <span class="text-lg sm:text-xl font-extrabold font-mono tracking-tight text-semantic-accent group-hover:text-semantic-accent transition-colors duration-200">
            World Cup 2026 Intelligence
          </span>
        </a>

        <!-- Desktop nav -->
        <div class="hidden lg:flex lg:items-center lg:gap-1">
          <ul class="flex items-center gap-1">
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="item.href"
                class="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                :class="activeSection === item.id
                  ? 'text-semantic-accent bg-semantic-accent/10'
                  : 'text-semantic-text-primary hover:text-semantic-accent hover:bg-semantic-surface'"
                :aria-current="activeSection === item.id ? 'true' : undefined"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>

          <!-- Separator -->
          <div class="h-6 w-px bg-semantic-border mx-2" aria-hidden="true" />

          <!-- Theme toggle -->
          <ThemeToggle />

          <!-- Data badge -->
          <div
            class="ml-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-semantic-surface border border-semantic-border text-xs text-semantic-text-secondary font-mono"
            aria-label="Data da última atualização dos dados"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-semantic-success animate-pulse" aria-hidden="true" />
            <span>Dados atualizados em 12 de junho de 2026</span>
          </div>
        </div>

        <!-- Mobile controls -->
        <div class="flex items-center gap-3 lg:hidden">
          <ThemeToggle />

          <!-- Hamburger button -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-lg text-semantic-text-primary hover:text-semantic-accent hover:bg-semantic-surface transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-accent"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Abrir menu de navegação"
            @click="toggleMobileMenu"
          >
            <span v-if="!mobileMenuOpen" class="text-2xl leading-none" aria-hidden="true">&#9776;</span>
            <span v-else class="text-2xl leading-none" aria-hidden="true">&#10005;</span>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        id="mobile-menu"
        class="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
        :class="mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'"
        :aria-hidden="!mobileMenuOpen"
      >
        <div class="py-3 border-t border-semantic-border">
          <ul class="space-y-1 pb-2">
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="item.href"
                class="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
                :class="activeSection === item.id
                  ? 'text-semantic-accent bg-semantic-accent/10'
                  : 'text-semantic-text-primary hover:text-semantic-accent hover:bg-semantic-surface'"
                :aria-current="activeSection === item.id ? 'true' : undefined"
                @click="closeMobileMenu"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>

          <!-- Mobile data badge -->
          <div
            class="mx-4 mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-semantic-surface border border-semantic-border text-xs text-semantic-text-secondary font-mono"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-semantic-success animate-pulse" aria-hidden="true" />
            <span>Dados atualizados em 12 de junho de 2026</span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollSpy } from '~/composables/useScrollSpy'

const sectionIds = ['resumo', 'comparativo', 'ranking', 'analises', 'surpresas', 'metodologia', 'fontes']

const { activeSection } = useScrollSpy(sectionIds)

const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

interface NavItem {
  id: string
  label: string
  href: string
}

const navItems: NavItem[] = [
  { id: 'resumo', label: 'Resumo', href: '#resumo' },
  { id: 'comparativo', label: 'Comparativo', href: '#comparativo' },
  { id: 'ranking', label: 'Ranking', href: '#ranking' },
  { id: 'analises', label: 'Análises', href: '#analises' },
  { id: 'surpresas', label: 'Surpresas', href: '#surpresas' },
  { id: 'metodologia', label: 'Metodologia', href: '#metodologia' },
  { id: 'fontes', label: 'Fontes', href: '#fontes' },
]
</script>
