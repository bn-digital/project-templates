import path from 'path'

const name = path.basename(__dirname)
const CONTENT_TYPE = `api::${name}.${name}` as const

export { CONTENT_TYPE }
