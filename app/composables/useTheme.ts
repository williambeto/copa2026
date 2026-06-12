import { ref, watchEffect } from 'vue'

const isDark = ref(true)

export function useTheme() {
  if (process.client) {
    const stored = localStorage.getItem('wc2026-theme')
    if (stored !== null) {
      isDark.value = stored === 'dark'
    }

    watchEffect(() => {
      const html = document.documentElement
      if (isDark.value) {
        html.classList.add('dark')
        html.classList.remove('light')
        document.body.classList.remove('light')
      } else {
        html.classList.remove('dark')
        html.classList.add('light')
        document.body.classList.add('light')
      }
      localStorage.setItem('wc2026-theme', isDark.value ? 'dark' : 'light')
    })
  }

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  return { isDark, toggleTheme }
}
