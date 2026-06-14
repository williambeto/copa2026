<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-semantic-surface/90 backdrop-blur-md border-b border-semantic-border shadow-sm'
      : 'bg-transparent border-b border-transparent'"
    role="banner"
  >
    <!-- Barra de progresso de scroll -->
    <div
      class="absolute bottom-0 left-0 h-0.5 bg-semantic-accent transition-all duration-150 ease-out"
      :style="{ width: scrollProgress + '%' }"
      aria-hidden="true"
    />

    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Navegação principal"
    >
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a
          href="#"
          class="flex-shrink-0 flex items-center gap-2 group"
          aria-label="Ir para o topo da página"
        >
          <span class="text-semantic-accent text-lg" aria-hidden="true">⚽</span>
          <span class="text-sm font-black font-display tracking-widest uppercase text-semantic-text-primary group-hover:text-semantic-accent transition-colors duration-200">
            WC<span class="text-semantic-accent">2026</span>
          </span>
        </a>

        <!-- Desktop nav -->
        <div class="hidden lg:flex lg:items-center lg:gap-1">
          <ul class="flex items-center gap-0.5" role="list">
            <li v-for="item in navItems" :key="item.id" class="relative">
              <a
                :href="item.href"
                class="relative px-3 py-2 text-xs font-display font-bold uppercase tracking-wider rounded-md transition-all duration-200 block"
                :class="activeSection === item.id
                  ? 'text-semantic-accent bg-semantic-accent/8'
                  : 'text-semantic-text-secondary hover:text-semantic-text-primary hover:bg-semantic-surface'"
                :aria-current="activeSection === item.id ? 'true' : undefined"
              >
                {{ item.label }}
                <span
                  v-if="activeSection === item.id"
                  class="absolute bottom-0.5 left-3 right-3 h-px bg-semantic-accent rounded-full"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>

          <!-- Separator -->
          <div class="h-5 w-px bg-semantic-border mx-3" aria-hidden="true" />

          <!-- Theme toggle -->
          <ThemeToggle />

          <!-- Live badge -->
          <div
            class="ml-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-semantic-surface border border-semantic-border text-xs text-semantic-text-muted font-mono"
            aria-label="Data da última atualização"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-semantic-success animate-pulse" aria-hidden="true" />
            <span class="hidden xl:inline">Dados: </span>12/06/2026
          </div>
        </div>

        <!-- Mobile controls -->
        <div class="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            class="inline-flex items-center justify-center w-9 h-9 rounded-lg text-semantic-text-primary hover:text-semantic-accent hover:bg-semantic-surface transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-accent"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-menu"
            :aria-label="mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'"
            @click="toggleMobileMenu"
          >
            <!-- Hamburger / X animado -->
            <span class="sr-only">{{ mobileMenuOpen ? 'Fechar' : 'Menu' }}</span>
            <svg
              class="w-5 h-5 transition-transform duration-200"
              :class="mobileMenuOpen ? 'rotate-90' : ''"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"
            >
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileMenuOpen"
          id="mobile-menu"
          class="lg:hidden border-t border-semantic-border bg-semantic-surface/95 backdrop-blur-md"
        >
          <ul class="py-2 px-2 space-y-0.5" role="list">
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="item.href"
                class="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-display font-bold uppercase tracking-wider transition-all duration-200"
                :class="activeSection === item.id
                  ? 'text-semantic-accent bg-semantic-accent/10'
                  : 'text-semantic-text-primary hover:text-semantic-accent hover:bg-semantic-surface'"
                :aria-current="activeSection === item.id ? 'true' : undefined"
                @click="closeMobileMenu"
              >
                <span class="text-base leading-none" aria-hidden="true">{{ item.icon }}</span>
                {{ item.label }}
              </a>
            </li>
          </ul>
          <!-- Mobile live badge -->
          <div class="mx-4 mb-3 mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-semantic-background border border-semantic-border text-xs text-semantic-text-muted font-mono">
            <span class="h-1.5 w-1.5 rounded-full bg-semantic-success animate-pulse" aria-hidden="true" />
            Dados atualizados em 12 de junho de 2026
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollSpy } from '~/composables/useScrollSpy'

const sectionIds = ['resumo', 'comparativo', 'ranking', 'analises', 'surpresas', 'metodologia', 'fontes']
const { activeSection } = useScrollSpy(sectionIds)

const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const scrollProgress = ref(0)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

function onScroll() {
  const scrollY = window.scrollY
  scrolled.value = scrollY > 20

  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? Math.round((scrollY / docHeight) * 100) : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

interface NavItem {
  id: string
  label: string
  href: string
  icon: string
}

const navItems: NavItem[] = [
  { id: 'resumo',      label: 'Resumo',      href: '#resumo',      icon: '📊' },
  { id: 'comparativo', label: 'Comparativo', href: '#comparativo', icon: '🔢' },
  { id: 'ranking',     label: 'Ranking',     href: '#ranking',     icon: '🏆' },
  { id: 'analises',    label: 'Análises',    href: '#analises',    icon: '📈' },
  { id: 'surpresas',   label: 'Surpresas',   href: '#surpresas',   icon: '⚡' },
  { id: 'metodologia', label: 'Metodologia', href: '#metodologia', icon: '🔬' },
  { id: 'fontes',      label: 'Fontes',      href: '#fontes',      icon: '📚' },
]
</script>
