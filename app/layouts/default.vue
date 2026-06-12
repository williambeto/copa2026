<template>
  <div class="min-h-screen bg-marine-950 text-gray-200 transition-colors duration-300" :class="{ 'light': !isDark }">
    <SiteHeader />
    <main id="main-content">
      <slot />
    </main>
    <SiteFooter />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark } = useTheme()
</script>
