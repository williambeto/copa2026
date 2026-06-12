// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  srcDir: 'app/',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'World Cup 2026 Intelligence — Análise de probabilidades',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Análise baseada em dados sobre qual seleção tem a maior probabilidade de ser campeã da Copa do Mundo FIFA 2026. Rankings, elenco, forma recente, lesões e mais.' },
        { property: 'og:title', content: 'World Cup 2026 Intelligence — Quem tem a maior probabilidade de vencer?' },
        { property: 'og:description', content: 'Análise editorial baseada em dados: rankings FIFA e Elo, desempenho recente, qualidade do elenco, lesões e cenários até a final.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'World Cup 2026 Intelligence' },
        { name: 'twitter:description', content: 'Análise baseada em dados sobre as probabilidades de cada seleção na Copa de 2026.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Barlow+Condensed:wght@600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap' },
      ],
      script: [
        {
          innerHTML: `
            (function(){
              var t=localStorage.getItem('wc2026-theme');
              var d=window.matchMedia('(prefers-color-scheme:dark)').matches;
              if(t==='dark'||(!t&&d))document.documentElement.classList.add('dark');
              else document.documentElement.classList.remove('dark');
            })();
          `,
          type: 'text/javascript',
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'World Cup 2026 Intelligence',
            description: 'Análise editorial baseada em dados sobre as probabilidades de cada seleção na Copa do Mundo FIFA 2026.',
            inLanguage: 'pt-BR',
          }),
        } as unknown as Record<string, string>,
      ],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    viewer: false,
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
})
