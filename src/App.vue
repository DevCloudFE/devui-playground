<template>
  <IxDrawerProvider>
    <IxModalProvider>
      <IxNotificationProvider>
        <IxMessageProvider>
          <IxSpin tip="loading..." v-if="isLoading">
            <div class="ixp-height-full"></div>
          </IxSpin>
          <div class="flex flex-col ixp-height-full">
            <Header></Header>
            <Container class="grow" @init-success="onInitSuccess()"></Container>
          </div>
        </IxMessageProvider>
      </IxNotificationProvider>
    </IxModalProvider>
  </IxDrawerProvider>
</template>

<script lang="ts" setup>
const isLoading = ref(true)

const onInitSuccess = () => {
  isLoading.value = false
}
</script>

<style scoped>
.ixp-height-full {
  height: 100vh;
}
</style>
