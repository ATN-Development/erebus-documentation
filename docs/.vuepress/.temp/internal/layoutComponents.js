import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/media/notreallyeight/Eight's Things Lol/erebus-docs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/media/notreallyeight/Eight's Things Lol/erebus-docs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
