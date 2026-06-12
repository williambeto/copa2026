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
        navy: {
          50: '#eef2f6',
          100: '#d3dbe8',
          200: '#a7b7d1',
          300: '#7b93ba',
          400: '#4f6fa3',
          500: '#34558b',
          600: '#29446f',
          700: '#1e3353',
          800: '#132238',
          900: '#0a1628',
          950: '#07131F',
        },
        editorial: {
          50: '#faf9f6',
          100: '#f4f1e8',
          200: '#e8e3d4',
          300: '#d4cdb8',
          400: '#b8ae93',
          500: '#a09478',
          600: '#887b60',
          700: '#6f644e',
          800: '#5a5040',
          900: '#4a4235',
        },
        surface: {
          50: '#f0f2f5',
          100: '#d8dce3',
          200: '#b0b9c7',
          300: '#8996ab',
          400: '#62738f',
          500: '#4b5b75',
          600: '#3d4a5f',
          700: '#2e3849',
          800: '#1f2735',
          900: '#141b26',
          950: '#102231',
        },
        gold: {
          400: '#e0bb4c',
          500: '#D6A72C',
          600: '#b88e1f',
        },
        green: {
          400: '#34d68a',
          500: '#1F8A5B',
          600: '#166b46',
        },
        blue: {
          400: '#5b9ee6',
          500: '#3478C9',
          600: '#2a62a8',
        },
        red: {
          400: '#d96a6a',
          500: '#C64B4B',
          600: '#a83a3a',
        },
        amber: {
          400: '#d4a843',
          500: '#b8902e',
        },
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero-lg': ['5rem', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'section': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'section-lg': ['3.25rem', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'subsection': ['1.5rem', { lineHeight: '1.2' }],
        'body': ['1.0625rem', { lineHeight: '1.7' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '7rem',
        'section-lg': '9rem',
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
