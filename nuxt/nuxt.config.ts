// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { isr: true },
    '/blog/**': { isr: true },
  },
  css: ['~/assets/styles/main.scss'],
})
