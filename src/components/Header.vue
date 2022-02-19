<template>
  <div class="flex justify-between p-2">
    <h1 class="text-base">
      DevUI Playground
    </h1>
    <IxSpace>
      <template
        v-for="item of selectors"
        :key="item.name"
      >
        <IxSpin :spinning="item.isLoading">
          <IxSpace>
            {{ item.name }}:
            <IxSelect
              v-model:value="item.activeVer"
              class="min-w-32"
              :searchable="true"
              @update:value="onVerChange(item.name, $event)"
            >
              <IxSelectOption
                v-for="ver in item.vers"
                :key="ver"
                :label="ver"
                :value="ver"
              />
            </IxSelect>
          </IxSpace>
        </IxSpin>
      </template>
      <IxButton @click="downloadProject(store)">
        Download
      </IxButton>
      <IxButton
        mode="text"
        @click="onShareClick"
      >
        Share
      </IxButton>
      <IxButton
        mode="link"
        href="https://github.com/brenner8023/devui-playground"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </IxButton>
    </IxSpace>
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from '@idux/components/message'
import { downloadProject, getDevuiVersions, getVueVersions } from '@/utils'
import type { ReplStore } from '@/repl-store'
import type { VersionKey } from '@/types'

const props = defineProps<{
  store: ReplStore
}>()

const { success, warning } = useMessage()
const onShareClick = async () => {
  if (!navigator.clipboard) {
    warning('navigator.clipboard is undefined')
    return
  }
  await navigator.clipboard.writeText(location.href)
  success('Current URL has been copied to clipboard.')
}

const selectors = reactive({
  Vue: {
    name: 'Vue',
    vers: getVueVersions(),
    activeVer: props.store.versions.Vue,
    isLoading: false,
  },
  DevUI: {
    name: 'DevUI',
    vers: getDevuiVersions(),
    activeVer: props.store.versions.DevUI,
    isLoading: false,
  },
})

const onVerChange = async (name: string, ver: unknown) => {
  selectors[name as VersionKey].isLoading = true
  await props.store.setVersion(name as VersionKey, ver as string)
  selectors[name as VersionKey].isLoading = false
}
</script>
