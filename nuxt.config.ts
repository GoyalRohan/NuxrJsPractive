// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     title: "Nuxt course on Youtube",
  //     meta: [
  //       {
  //         name: "description",
  //         content: "This is a repository for a course about nuxt js on youtube",
  //       },
  //     ],
  //   },
  // },

  hooks: {
    ready: (ctx) => console.log(ctx),
  },

  compatibilityDate: "2024- 04-03",
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
});
