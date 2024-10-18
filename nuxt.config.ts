// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/fonts'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en' // or any other language code like 'fr', 'es', etc.
      }
    }
  },
  build: {
    transpile: ['gsap'],
  }
})