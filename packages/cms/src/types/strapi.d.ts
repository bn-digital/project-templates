type EnvVar<T = string | number | null | boolean | Array<string>> = T

type EnvFunction = <T>(key: string, defaultValue?: EnvVar<T>) => EnvVar<T>

declare namespace Strapi {
  type PluginsConfig = { [key: string]: Partial<{ enabled: boolean; config: Record<string, unknown> }> }
}
