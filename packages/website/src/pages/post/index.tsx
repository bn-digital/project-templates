import { Result, Skeleton } from 'antd'
import { FC } from 'react'
import { useParams } from 'react-router'
import { Markdown } from 'src/components/text'
import { usePostsQuery } from 'src/graphql'

const Post: FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const { data, loading } = usePostsQuery({ variables: { filters: { slug: { eq: slug as string } } } })
  const post = data?.posts?.data?.[0]?.attributes

  return <Skeleton loading={loading}>{post ? <Markdown>{post?.content}</Markdown> : <Result status={'404'} title={'Request'} />}</Skeleton>
}

export { Post as default }
