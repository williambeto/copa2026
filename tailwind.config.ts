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
        display: ['Barlow Condensed', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Semantic theme tokens — components must reference these only
        semantic: {
          background: 'rgb(var(--color-bg) / <alpha-value>)',
          'background-muted': 'rgb(var(--color-bg-muted) / <alpha-value>)',
          surface: 'rgb(var(--color-surface) / <alpha-value>)',
          'surface-elevated': 'rgb(var(--color-surface-elevated) / <alpha-value>)',
          'surface-highlight': 'rgb(var(--color-surface-highlight) / <alpha-value>)',
          'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
          'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
          'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
          border: 'rgb(var(--color-border) / <alpha-value>)',
          'border-strong': 'rgb(var(--color-border-strong) / <alpha-value>)',
          accent: 'rgb(var(--color-accent) / <alpha-value>)',
          'accent-foreground': 'rgb(var(--color-accent-foreground) / <alpha-value>)',
          success: 'rgb(var(--color-success) / <alpha-value>)',
          warning: 'rgb(var(--color-warning) / <alpha-value>)',
          danger: 'rgb(var(--color-danger) / <alpha-value>)',
          'chart-grid': 'rgb(var(--color-chart-grid) / <alpha-value>)',
          'chart-label': 'rgb(var(--color-chart-label) / <alpha-value>)',
          'chart-tooltip-bg': 'rgb(var(--color-chart-tooltip-bg) / <alpha-value>)',
        },
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.03', letterSpacing: '-0.02em' }],
        'hero-lg': ['5.5rem', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'section': ['2.75rem', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
        'section-lg': ['3.5rem', { lineHeight: '1.06', letterSpacing: '-0.015em' }],
        'subsection': ['1.625rem', { lineHeight: '1.2' }],
        'body': ['1.125rem', { lineHeight: '1.7' }],
        'body-lg': ['1.1875rem', { lineHeight: '1.7' }],
        'small': ['0.9375rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '8rem',
        'section-lg': '10rem',
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
