<template>
  <div class="flex justify-between p-2">
    <h1 class="text-base">
      DevUI Playground
    </h1>
    <ix-space>
      <ix-button mode="text" @click="onShareClick">
        Share
      </ix-button>
      <ix-button
        mode="link"
        href="https://github.com/brenner8023/devui-playground"
        target="_blank"
        rel="noopener noreferrer">
        GitHub
      </ix-button>
    </ix-space>
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from '@idux/components/message'

const { success, warning } = useMessage()
const onShareClick = async () => {
  if (!navigator.clipboard) {
    warning('navigator.clipboard is undefined')
    return;
  }
  await navigator.clipboard.writeText(location.href)
  success('Current URL has been copied to clipboard.')
}
</script>
