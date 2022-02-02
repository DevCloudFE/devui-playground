<template>
  <Repl
    auto-resize
    show-compile-output
    :store="store"
    :clear-console="false"></Repl>
</template>

<script lang="ts" setup>
import { ReplStore } from '@/repl-store';
import { Repl } from '@vue/repl'

// experimental features
// import type {  SFCOptions } from '@vue/repl'
// const sfcOptions: SFCOptions = {
//   script: {
//     reactivityTransform: true,
//   },
// }

const store = new ReplStore({
  serializedState: location.hash.slice(1),
})
store.initStore()

</script>
