import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        marine: {
          50: '#e8ecf1',
          100: '#c5cfdb',
          200: '#9eb0c3',
          300: '#7691ab',
          400: '#587a99',
          500: '#3a6387',
          600: '#2e5273',
          700: '#1f3e5a',
          800: '#122b41',
          900: '#0a1929',
          950: '#050d18',
        },
        graphite: {
          50: '#f0f2f4',
          100: '#d5dbe1',
          200: '#b7c1cc',
          300: '#8f9eae',
          400: '#6e8095',
          500: '#55677b',
          600: '#455468',
          700: '#344051',
          800: '#242d3a',
          900: '#1a2029',
          950: '#0f1419',
        },
        gold: {
          400: '#f0c060',
          500: '#e8b040',
          600: '#d09820',
        },
        green: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
