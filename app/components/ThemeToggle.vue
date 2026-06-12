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
      class="transition-transform duration-300 group-hover:scale-110"
    >{{ isDark ? '☀️' : '🌙' }}</span>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>
