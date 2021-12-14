import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/",
  lang: "en-GB",
  title: "Erebus",
  description: "Erebus official documentation.",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        type: "text:css",
      },
    ],
  ],
  themeConfig: {
    logo: "https://cdn.discordapp.com/icons/746291190009430049/a6895db35c8c486cdf42fd65c0de20b9.png?size=4096",
    smoothScroll: true,
  },
  markdown: {
    code: {
      highlightLines: true,
    },
  },
});