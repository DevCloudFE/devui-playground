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
  }
}
