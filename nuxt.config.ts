// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@pinia/nuxt'
  ],

  devtools: {enabled: true},
  compatibilityDate: '2025-04-10'
})