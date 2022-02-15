import { FC } from 'react'
import { Helmet } from 'react-helmet'

const Page: FC<{ seo: Maybe<SeoFragment> | undefined }> = ({ seo }) => {
  return (
    <>
      <Helmet title={seo?.metaTitle} meta={[{ name: 'description', content: seo?.metaDescription }]} />
    </>
  )
}

export { Page }
