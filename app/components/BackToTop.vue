<template>
  <transition name="bt-fade">
    <button
      v-show="visible"
      type="button"
      class="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-11 h-11 rounded-full bg-marine-800 border border-gold-500/40 text-gold-500 shadow-lg shadow-marine-950/50 transition-all duration-300 hover:bg-marine-700 hover:border-gold-500 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 motion-reduce:transition-none"
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
      @click="scrollToTop"
    >
      <span
        class="text-xl font-bold leading-none select-none"
        aria-hidden="true"
      >&uarr;</span>
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
