// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { typeCheck: true, strict: true },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/scss/reset.scss', '~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
    plugins: [svgLoader()],
  },
})
