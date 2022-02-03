import path from 'path'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { IduxResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Inspect from 'vite-plugin-inspect'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig(async () => {

  return {
    resolve: {
      alias: {
        '@': pathSrc,
      },
    },
    server: {
      port: 2022,
    },
    plugins: [
      vue({
        reactivityTransform: `${pathSrc}/**/*`,
      }),
      AutoImport({
        imports: ['vue', '@vueuse/core'],
        resolvers: [IduxResolver()],
        dts: path.resolve(`${pathSrc}/types/dts`, 'auto-imports.d.ts'),
      }),
      Components({
        resolvers: [IduxResolver()],
        dts: path.resolve(`${pathSrc}/types/dts`, 'components.d.ts'),
      }),
      Unocss({
        presets: [presetUno()],
      }),
      Inspect(),
    ],
  }
})
