
export const fetchVersions = (pkg: string) => {
  return useFetch(
    `https://data.jsdelivr.com/v1/package/npm/${pkg}`, {
    initialData: [],
    afterFetch: (ctx) => ((ctx.data = ctx.data.versions), ctx),
  })
    .json<string[]>().data
}
