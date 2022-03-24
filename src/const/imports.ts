import { VersionRecord } from '@/types'

export const genImportsMap = (versions: VersionRecord) => {
  const { Vue, DevUI } = versions

  return {
    'vue-devui': {
      pkg: 'vue-devui',
      version: DevUI,
      file: '/vue-devui.es.js',
    },
    vue: {
      pkg: 'vue',
      version: Vue,
      file: '/dist/vue.esm-browser.js',
    },
    'vue-router': {
      pkg: 'vue-router',
      version: 'latest',
      file: '/dist/vue-router.esm-browser.js',
    },
    '@floating-ui/dom': {
      pkg: '@floating-ui/dom',
      version: 'latest',
      file: '/dist/floating-ui.dom.esm.min.js',
    },
    '@floating-ui/core': {
      pkg: '@floating-ui/core',
      version: 'latest',
      file: '/dist/floating-ui.core.esm.min.js',
    },
    '@vueuse/core': {
      pkg: '@vueuse/core',
      version: 'latest',
      file: '/index.mjs',
    },
    '@vue/devtools-api': {
      pkg: '@vue/devtools-api',
      version: 'latest',
      file: '/lib/esm/index.js',
    },
    '@vueuse/shared': {
      pkg: '@vueuse/shared',
      version: 'latest',
      file: '/index.mjs',
    },
    'vue-demi': {
      pkg: 'vue-demi',
      version: 'latest',
      file: '/lib/index.mjs',
    },
  }
}
