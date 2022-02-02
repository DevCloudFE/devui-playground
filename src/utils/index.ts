
export { decodeData, encodeData } from './encode'

export const genLink = (pkg: string, version?: string, file: string = '') => {
  const ver = version ? `@${version}` : ''
  return `https://unpkg.com/${pkg}${ver}${file}`
}
