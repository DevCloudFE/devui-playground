import { VersionRecord } from "@/types"

export const genImportsMap = (versions: VersionRecord) => {
  const { vue, devui } = versions

  return {
    'vue-devui': {
      pkg: 'vue-devui',
      version: devui,
      file: '/vue-devui.es.js',
    },
    vue: {
      pkg: 'vue',
      version: vue,
      file: '/dist/vue.esm-browser.js',
    },
  }
}
