import { Typography } from 'antd'
import { FC, PropsWithChildren } from 'react'
import ReactMarkdown from 'react-markdown'

const Markdown: FC<PropsWithChildren> = ({ children = '' }) => (
  <ReactMarkdown
    components={{
      b: ({ children }) => <Typography.Text strong={true}>{children}</Typography.Text>,
      i: ({ children }) => <Typography.Text italic={true}>{children}</Typography.Text>,
      a: ({ href, children }) => (
        <Typography.Link href={href} target={href?.startsWith('http') ? '_blank' : undefined}>
          {children}
        </Typography.Link>
      ),
      p: ({ children }) => <Typography.Paragraph>{children}</Typography.Paragraph>,
      h1: ({ children }) => <Typography.Title level={1}>{children}</Typography.Title>,
      h2: ({ children }) => <Typography.Title level={2}>{children}</Typography.Title>,
      h3: ({ children }) => <Typography.Title level={3}>{children}</Typography.Title>,
      h4: ({ children }) => <Typography.Title level={4}>{children}</Typography.Title>,
      h5: ({ children }) => <Typography.Title level={5}>{children}</Typography.Title>,
    }}
  >
    {String(children)}
  </ReactMarkdown>
)

export { Markdown }
