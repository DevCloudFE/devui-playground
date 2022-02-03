
import { fetchVersions } from '@/api'
import { compare } from 'compare-versions'

export const genLink = (pkg: string, version?: string, file: string = '') => {
  const ver = version ? `@${version}` : ''
  return `https://unpkg.com/${pkg}${ver}${file}`
}

export const getVueVersions = () => {
  let versions = fetchVersions('vue')
  return computed(() => versions.value?.filter(ver => compare(ver, '3.2.0', '>=')))
}

export const getDevuiVersions = () => {
  let versions = fetchVersions('vue-devui')
  return computed(() => versions.value?.filter(ver => compare(ver, '1.0.0-beta.1', '>=')))
}
