import { createApp } from 'vue'
import '@vue/repl/style.css'
import 'uno.css'
import '@idux/components/default.min.css'

import {
  IDUX_ICON_DEPENDENCIES,
  addIconDefinitions,
} from '@idux/components/icon'

// 静态加载: `IDUX_ICON_DEPENDENCIES` 是 `@idux` 的部分组件默认所使用到图标，建议在此时静态引入。
addIconDefinitions(IDUX_ICON_DEPENDENCIES)

import App from './App.vue'

createApp(App).mount('#app')
