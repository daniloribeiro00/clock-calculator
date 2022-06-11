import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  buildModules: ['@pinia/nuxt'],
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    shim: true,
    typeCheck: true,
  },
});
