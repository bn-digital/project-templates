interface Strapi extends Omit<Strapi.Strapi, 'fs' | 'log'> {
  fs: {
    appendFile(path: string, content: Buffer | string): void
    removeAppFile(path: string): void
    writePluginFile(path: string, content: Buffer | string): void
    writeAppFile(path: string, content: Buffer | string): void
  }
  log: {
    [key in Strapi.LogLevel]: (...args: unknown[]) => void
  }
  config: Strapi.Config
}

const strapi: Strapi

interface Global {
  strapi: Strapi
}
