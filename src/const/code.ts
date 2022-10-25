export const setupDevui = 'devui.js'

export const devuiCode = `
import { getCurrentInstance } from 'vue'
import DevUI from 'vue-devui'
import { ThemeServiceInit, infinityTheme } from 'devui-theme'

const install = (app) => {
  app.use(DevUI)
};

const loadIconCss = () => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://unpkg.com/@devui-design/icons@latest/icomoon/devui-icon.css'
  document.body.appendChild(link)
}

const loadCss = () => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '#DEVUI_CSS_HREF#'
  document.body.appendChild(link)
}

ThemeServiceInit({ infinityTheme }, 'infinityTheme')

export const setupDevui = () => {
  const instance = getCurrentInstance()
  instance.appContext.app.use({ install })
  loadIconCss()
  loadCss()
};`

export const defaultMainFile = 'App.vue'

export const welcomeCode = `<template>
  <h1>
    Hello, DevUI!
  </h1>
  <d-button variant="solid" style="margin-right: 8px">Primary</d-button>
  <d-button :disabled="true">Disabled</d-button>
</template>

<script setup lang="ts">
</script>`

export const defaultFile = 'Main.vue'

export const defaultCode = `<template>
<App />
</template>

<script setup lang="ts">
import App from './${defaultMainFile}'
import { setupDevui } from './${setupDevui}'

// don't remove
setupDevui()
</script>`
