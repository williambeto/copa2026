<template>
  <div class="min-h-screen bg-semantic-background text-semantic-text-primary transition-colors duration-300">
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

// Theme is initialized synchronously in nuxt.config.ts head script for flash prevention
useTheme()
</script>
