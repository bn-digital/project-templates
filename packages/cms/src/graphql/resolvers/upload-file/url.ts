import { parse } from 'url'

export default async (root: { url: string }): Promise<string> => {
  let url = parse(root.url, true)
  if (process.env.S3_PUBLIC_URL) {
    url = parse(`${process.env.S3_PUBLIC_URL}${url.pathname}`, true)
  }
  return url.toString()
}
