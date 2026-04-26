module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'neon-orange': '#FF9900',
        'dark-bg': '#0A0A0A',
      },
      textShadow: {
        'neon': '0 0 10px #FF9900, 0 0 20px #FF9900',
      }
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        { 'text-shadow': (value) => ({ textShadow: value }) },
        { values: theme('textShadow') }
      )
    },
  ],
}