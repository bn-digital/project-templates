import { Image } from 'antd'
import { FC, PropsWithChildren } from 'react'
import ReactMarkdown from 'react-markdown'

const Markdown: FC<PropsWithChildren<Maybe<{ data: string }>>> = ({ data = '' }) => (
  <ReactMarkdown components={{ img: ({ src, alt }) => (src ? <Image preview={false} src={src} alt={alt} /> : null) }}>{data}</ReactMarkdown>
)

export { Markdown }
