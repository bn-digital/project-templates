export default async (root: { url: string }): Promise<string> => {
  let url = new URL(root.url)
  if (process.env.S3_PUBLIC_URL) {
    url = new URL(`${process.env.S3_PUBLIC_URL}${url.pathname}`)
  }
  return url.toString()
}
