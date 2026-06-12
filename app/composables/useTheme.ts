import { ref, watch, computed } from 'vue'

const STORAGE_KEY = 'wc2026-theme'

function getSystemPreference(): boolean {
  if (!import.meta.client) return true // default dark
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function getStoredPreference(): boolean | null {
  if (!import.meta.client) return null
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark') return true
  if (stored === 'light') return false
  return null
}

function resolveInitialDark(): boolean {
  const stored = getStoredPreference()
  if (stored !== null) return stored
  return getSystemPreference()
}

function applyTheme(isDark: boolean): void {
  if (!import.meta.client) return
  const html = document.documentElement
  if (isDark) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

// Module-level state is shared across all callers
const isDark = ref(true)
let initialized = false

export function useTheme() {
  if (!initialized) {
    isDark.value = resolveInitialDark()
    applyTheme(isDark.value)
    initialized = true
  }

  watch(isDark, (val) => {
    applyTheme(val)
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, val ? 'dark' : 'light')
    }
  })

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  return { isDark, toggleTheme }
}
