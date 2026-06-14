<template>
  <transition name="bt-fade">
    <button
      v-show="visible"
      type="button"
      class="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-11 h-11 rounded-full bg-semantic-surface border border-semantic-accent/40 text-semantic-accent shadow-lg shadow-black/20 transition-all duration-300 hover:bg-semantic-surface hover:border-semantic-accent hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-semantic-accent motion-reduce:transition-none group"
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
      @click="scrollToTop"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 300
}

function scrollToTop() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.bt-fade-enter-active,
.bt-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .bt-fade-enter-active,
  .bt-fade-leave-active {
    transition: none;
  }
}

.bt-fade-enter-from,
.bt-fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
