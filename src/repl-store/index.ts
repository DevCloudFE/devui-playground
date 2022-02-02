import { reactive, watchEffect } from 'vue'
import { compileFile, File } from '@vue/repl'
import type { Store, SFCOptions, StoreState, OutputModes } from '@vue/repl'
import type { VersionKey, VersionRecord, ReplStoreParam, PendingCompiler } from '@/types'
import { defaultCode, defaultFile, devuiCode, genImportsMap } from '@/const'
import { decodeData, genLink } from '@/utils'

const getInitFiles = (serializedState: string = '') => {
  let files: StoreState['files'] = {
    [defaultFile]: new File(defaultFile, defaultCode)
  }
  if (serializedState) {
    try {
      files = {};
      const res = JSON.parse(decodeData(serializedState))
      for (const filename of Object.keys(res)) {
        files[filename] = new File(filename, res[filename])
      }
    } catch (err) {
      console.log(err)
      console.log('Json parse error: src/repl-store/index.ts')
    }
  }

  return files
}

const genVueLink = (version: string) => {
  const compilerSfc = genLink(
    '@vue/compiler-sfc',
    version,
    '/dist/compiler-sfc.esm-browser.js',
  )
  const runtimeDom = genLink(
    '@vue/runtime-dom',
    version,
    '/dist/runtime-dom.esm-browser.js',
  )

  return {
    compilerSfc,
    runtimeDom,
  }
}

const genImports = (versions: VersionRecord) => {
  const deps = {
    ...genImportsMap(versions),
  }

  return Object.fromEntries(
    Object.entries(deps).map(([key, info]) => [key, genLink(info.pkg, info.version, info.file)])
  )
}

export class ReplStore implements Store {
  state: StoreState
  compiler!: typeof import('vue/compiler-sfc')
  options?: SFCOptions
  versions: VersionRecord
  initialShowOutput = false
  initialOutputMode: OutputModes = 'preview'

  private pendingCompiler: PendingCompiler = null

  constructor({
    serializedState = '',
    versions = { vue: '3.2.29', devui: '1.0.0-beta.14' },
  }: ReplStoreParam) {
    let files = getInitFiles(serializedState)
    let mainFile = files[defaultFile] ? defaultFile : Object.keys(files)[0]
    this.state = reactive({
      mainFile,
      files,
      activeFile: files[mainFile],
      errors: [],
      vueRuntimeURL: '',
    })
    this.versions = versions
    this.initImportMap()
  }

  private initImportMap() {
    if (!this.state.files['import-map.json']) {
      this.state.files['import-map.json'] = new File(
        'import-map.json',
        JSON.stringify({ imports: {} }, null, 2)
      )
    }
  }

  async initStore() {
    await this.setVueVersion(this.versions.vue)
    this.state.files['devui.js'] = new File(
      'devui.js',
      devuiCode,
      true
    )

    watchEffect(() => compileFile(this, this.state.activeFile))

    for (const file of Object.keys(this.state.files)) {
      if (file !== defaultFile) {
        compileFile(this, this.state.files[file])
      }
    }
  }

  setActive(filename: string) {
    this.state.activeFile = this.state.files[filename]
  }

  // 新增文件
  public addFile(fileOrFilename: string | File) {
    const file = typeof fileOrFilename === 'string' ?
      new File(fileOrFilename) :
      fileOrFilename
    this.state.files[file.filename] = file

    if (!file.hidden) this.setActive(file.filename)
  }

  // 删除文件
  public deleteFile(filename: string) {
    if (window.confirm(`Confirm to delete ${filename}?`)) {
      if (this.state.activeFile.filename === filename) {
        this.state.activeFile = this.state.files[this.state.mainFile]
      }
      delete this.state.files[filename]
    }
  }

  // 设置import map
  private setImportMap(map: { imports: Record<string, string> }) {
    try {
      this.state.files['import-map.json'].code = JSON.stringify(map, null, 2)
    } catch (e) {
      this.state.errors = [
        `stringify error in import-map.json: ${(e as Error).message}`,
      ]
    }
  }

  /**
   * remove default deps
   */
  // private simplifyImportMaps() {
  // }

  serialize() {
  }

  getImportMap() {
    try {
      return JSON.parse(this.state.files['import-map.json'].code)
    } catch (e) {
      this.state.errors = [
        `Syntax error in import-map.json: ${(e as Error).message}`,
      ]
      return {}
    }
  }

  private addDeps() {
    const importMap = this.getImportMap()
    importMap.imports = {
      ...importMap.imports,
      ...genImports(this.versions),
    }
    this.setImportMap(importMap)
  }

  public async setVersion(key: VersionKey, version: string) {
    switch (key) {
      case 'devui':
        await this.setDevuiVersion(version)
        break
      case 'vue':
        await this.setVueVersion(version)
        break
    }
  }

  private async setDevuiVersion(version: string) {
    this.versions.devui = version
    this.addDeps()
  }

  private async setVueVersion(version: string) {
    const { compilerSfc, runtimeDom } = genVueLink(version)

    this.pendingCompiler = import(/* @vite-ignore */compilerSfc)
    this.compiler = await this.pendingCompiler
    this.pendingCompiler = null

    this.state.vueRuntimeURL = runtimeDom

    this.versions.vue = version

    this.addDeps()
  }
}
