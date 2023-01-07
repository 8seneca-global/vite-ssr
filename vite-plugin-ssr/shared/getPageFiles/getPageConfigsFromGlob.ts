export { getPageConfigsFromGlob }
export { getPageConfigs }
export { isValidPageConfigFile }
export type { PageConfig }
export type { PageConfigFile }
export type { PageConfigValues }

import { determinePageId2, determineRouteFromFilesystemPath } from '../route/deduceRouteStringFromFilesystemPath'
import { assertPosixPath, assert, isObject, assertUsage, isCallable } from '../utils'
import path from 'path' // TODO: remove from shared/

type PageConfig = {
  onRenderClient: string
  onRenderHtml: string
  Page?: string
  route: string | Function
  pageId2: string
}

type PageConfigValues = {
  onRenderClient?: string
  onRenderHtml?: string
  passToClient?: string[]
  Page?: string
  route?: string | Function
}
type PageConfigFile = {
  pageConfigFilePath: string
  pageConfigValues: PageConfigValues
}

function getPageConfigsFromGlob(globResult: Record<string, unknown>, root: string): PageConfig[] {
  const pageConfigFiles: PageConfigFile[] = []
  Object.entries(globResult).forEach(([pageConfigFilePath, pageConfigFileExports]) => {
    assert(isObject(pageConfigFileExports))
    {
      const configeErr = checkPageConfigFile(pageConfigFileExports)
      if (configeErr) {
        assertUsage(false, configeErr)
      }
    }
    assert(isValidPageConfigFile(pageConfigFileExports))
    const pageConfigValues: PageConfigValues = pageConfigFileExports.default
    pageConfigFiles.push({
      pageConfigFilePath,
      pageConfigValues
    })
  })

  const pageConfigs = getPageConfigs(pageConfigFiles, root)
  return pageConfigs
}

function getPageConfigs(pageConfigFiles: PageConfigFile[], root: string): PageConfig[] {
  if (pageConfigFiles.length === 0) return [] // temporary

  const pageConfigs: PageConfig[] = []

  const pageConfigFilesAbstract = pageConfigFiles.filter((p) => isAbstract(p))
  assert(pageConfigFilesAbstract.length === 1) // TODO
  const pageConfigFileAbstract = pageConfigFilesAbstract[0]!
  pageConfigFiles
    .filter((p) => !isAbstract(p))
    .forEach(({ pageConfigFilePath, pageConfigValues }) => {
      let onRenderHtml = pageConfigValues.onRenderHtml || pageConfigFileAbstract.pageConfigValues.onRenderHtml
      let onRenderClient = pageConfigValues.onRenderClient || pageConfigFileAbstract.pageConfigValues.onRenderClient
      assert(onRenderHtml)
      assert(onRenderClient)
      onRenderHtml = resolvePath(onRenderHtml, pageConfigFilePath, root)
      onRenderClient = resolvePath(onRenderClient, pageConfigFilePath, root)

      let Page = pageConfigValues.Page
      if (Page) Page = resolvePath(Page, pageConfigFilePath, root)

      const route =
        pageConfigValues.route || // TODO: assertUsage that route isn't a path
        determineRouteFromFilesystemPath(pageConfigFilePath)

      const pageId2 = determinePageId2(pageConfigFilePath)

      pageConfigs.push({
        onRenderHtml,
        onRenderClient,
        Page,
        route,
        pageId2
      })
    })

  return pageConfigs
}

function isAbstract(pageConfigFile: PageConfigFile): boolean {
  return !pageConfigFile.pageConfigValues.Page && !pageConfigFile.pageConfigValues.route
}

function resolvePath(configValuePath: string, pageConfigFilePath: string, root: string): string {
  assertPosixPath(configValuePath) // TODO: assertUsage()
  assertPosixPath(root)
  assertPosixPath(pageConfigFilePath)
  assert(pageConfigFilePath.startsWith(root))
  let p = path.posix.join(pageConfigFilePath, configValuePath)
  p = path.relative(root, p)
  assert(!p.startsWith('.') && !p.startsWith('/'))
  p = '/' + p
  return p
}

// TODO: write error messages
function isValidPageConfigFile(
  pageConfigFileExports: Record<string, unknown>
): pageConfigFileExports is { default: PageConfigValues } {
  return checkPageConfigFile(pageConfigFileExports) === null
}
function checkPageConfigFile(pageConfigFileExports: Record<string, unknown>): null | string {
  assert(isObject(pageConfigFileExports))
  if (!('default' in pageConfigFileExports)) return 'TODO'
  const defaultExport = pageConfigFileExports.default
  if (!isObject(defaultExport)) return 'TODO'
  if (!(defaultExport.onRenderHtml === undefined || typeof defaultExport.onRenderHtml === 'string')) return 'TODO'
  if (!(defaultExport.onRenderClient === undefined || typeof defaultExport.onRenderClient === 'string')) return 'TODO'
  if (!(defaultExport.Page === undefined || typeof defaultExport.Page === 'string')) return 'TODO'
  if (
    !(defaultExport.route === undefined || typeof defaultExport.route === 'string' || isCallable(defaultExport.route))
  )
    return 'TODO'
  return null
}

/*
type PageConfig = {
  onRenderHtml?: string | Function
  onRenderClient?: string | Function
  Page?: string | unknown
} & Record<string, unknown>
type PageConfigFile = {
  filePath: string
  getPageConfig: () => Promise<PageConfig>
  pageId: null | string
  // filesystemId: string
  // loadConfig: () => Promise<void>
  // configValue?: Record<string, unknown>
}

export { resolvePageConfigFile }
function resolvePageConfigFile(filePath: string, loadFile: () => Promise<Record<string, unknown>>): PageConfigFile {
  let pageConfig: null | PageConfig = null
  const pageConfigFile: PageConfigFile = {
    filePath,
    pageId: determinePageId(filePath),
    async getPageConfig() {
      if (!pageConfig) {
        const fileExports = await loadFile()
        pageConfig = resolvePageConfig(fileExports)
      }
      assert(pageConfig)
      return pageConfig
    }
  }
  return pageConfigFile
}
function resolvePageConfig(pageConfigFileExports: Record<string, unknown>): PageConfig {
  // TODO: add validation
  const pageConfigUserDefined = pageConfigFileExports.default
  assert(isObject(pageConfigUserDefined))
  return pageConfigUserDefined
}
  */