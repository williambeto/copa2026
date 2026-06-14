<template>
  <button
    type="button"
    class="inline-flex items-center justify-center w-9 h-9 rounded-lg text-lg transition-colors duration-200 hover:bg-semantic-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-accent group"
    :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
    :title="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
    @click="toggleTheme"
  >
    <span
      aria-hidden="true"
      class="transition-all duration-500 ease-out transform group-hover:scale-110 flex items-center justify-center"
      :class="isDark ? 'rotate-0' : 'rotate-[360deg]'"
    >
      <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-semantic-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-semantic-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>
