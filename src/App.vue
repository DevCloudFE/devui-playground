<template>
  <IxDrawerProvider>
    <IxModalProvider>
      <IxNotificationProvider>
        <IxMessageProvider>
          <IxSpin tip="loading..." v-if="isLoading">
            <div class="ixp-height-full"></div>
          </IxSpin>
          <div class="flex flex-col ixp-height-full" v-else>
            <Header></Header>
            <Container class="grow"></Container>
          </div>
        </IxMessageProvider>
      </IxNotificationProvider>
    </IxModalProvider>
  </IxDrawerProvider>
</template>

<script lang="ts" setup>
const isLoading = ref(false)


</script>

<style scoped>
.ixp-height-full {
  height: 100vh;
}
</style>
