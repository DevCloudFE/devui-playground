
export const encodeData = (data: string): string => {
  return btoa(unescape(encodeURIComponent(data)))
}

export const decodeData = (base64: string): string => {
  return decodeURIComponent(escape(atob(base64)))
}
