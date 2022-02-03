<template>
  <IxMessageProvider>
    <IxSpin tip="loading..." v-if="isLoading">
      <div class="ixp-height-full"></div>
    </IxSpin>
    <div class="flex flex-col ixp-height-full">
      <Header :store="store"></Header>
      <Repl
        class="grow"
        auto-resize
        show-compile-output
        :store="store"
        :clear-console="false"></Repl>
    </div>
  </IxMessageProvider>
</template>

<script lang="ts" setup>
import { ReplStore } from '@/repl-store';
import { Repl } from '@vue/repl'

const isLoading = ref(true)

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

store.initStore().then(() => {
  isLoading.value = false
})

watchEffect(() => history.replaceState({}, '', store.serialize()))
</script>

<style scoped>
.ixp-height-full {
  height: 100vh;
}
</style>
