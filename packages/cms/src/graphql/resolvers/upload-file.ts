import { parse } from 'url'

const url = async (root: { url: string }): Promise<string> => {
  let url = parse(root.url, true)
  if (process.env.S3_PUBLIC_URL) {
    url = parse(`${process.env.S3_PUBLIC_URL}${url.pathname}`, true)
  }
  return url.href
}

export { url }