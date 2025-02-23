// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-07-29',
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
  ],
  primevue: {
    /* Configuration */
  }
})