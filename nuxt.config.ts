export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Chocho.meme - 狗狗每一刻的陪伴，值得與眾不同的獎勵',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Chocho.meme 是你的寵物在 Web3 的專屬護照' }
      ]
    }
  }
})