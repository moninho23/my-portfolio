import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // Nuxt 4 uses the 'app' directory by default
  future: { compatibilityVersion: 4 },
  devtools: { enabled: false },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/font.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxt/icon'],
});