import { gql } from '@apollo/client'
import * as React from 'react'
import * as Apollo from '@apollo/client'
import * as ApolloReactComponents from '@apollo/client/react/components'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
const defaultOptions = {} as const

export type PossibleTypesResultData = {
  possibleTypes: {
    GenericMorph: [
      'Category',
      'ComponentDataContact',
      'ComponentDataEntry',
      'ComponentDataSet',
      'ComponentPageContactUs',
      'ComponentPageHome',
      'ComponentSharedMetaSocial',
      'ComponentSharedSeo',
      'ComponentSystemEnvironment',
      'ComponentSystemSecret',
      'ComponentUiCard',
      'ComponentUiGrid',
      'ComponentUiHeadline',
      'ComponentUiLink',
      'ComponentUiParagraph',
      'ComponentUiSection',
      'ComponentUiTab',
      'ComponentUiText',
      'Contact',
      'Credential',
      'EmailDesignerEmailTemplate',
      'EmailEmitterEmail',
      'I18NLocale',
      'Post',
      'UploadFile',
      'UploadFolder',
      'UsersPermissionsPermission',
      'UsersPermissionsRole',
      'UsersPermissionsUser',
      'Website'
    ]
    WebsiteContentDynamicZone: ['ComponentPageContactUs', 'ComponentPageHome', 'Error']
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    GenericMorph: [
      'Category',
      'ComponentDataContact',
      'ComponentDataEntry',
      'ComponentDataSet',
      'ComponentPageContactUs',
      'ComponentPageHome',
      'ComponentSharedMetaSocial',
      'ComponentSharedSeo',
      'ComponentSystemEnvironment',
      'ComponentSystemSecret',
      'ComponentUiCard',
      'ComponentUiGrid',
      'ComponentUiHeadline',
      'ComponentUiLink',
      'ComponentUiParagraph',
      'ComponentUiSection',
      'ComponentUiTab',
      'ComponentUiText',
      'Contact',
      'Credential',
      'EmailDesignerEmailTemplate',
      'EmailEmitterEmail',
      'I18NLocale',
      'Post',
      'UploadFile',
      'UploadFolder',
      'UsersPermissionsPermission',
      'UsersPermissionsRole',
      'UsersPermissionsUser',
      'Website',
    ],
    WebsiteContentDynamicZone: ['ComponentPageContactUs', 'ComponentPageHome', 'Error'],
  },
}
export default result

export const LinkFragmentDoc = gql`
  fragment Link on ComponentUiLink {
    id
    title
    url
  }
`
export const ParagraphFragmentDoc = gql`
  fragment Paragraph on ComponentUiParagraph {
    id
    value
  }
`
export const FileFragmentDoc = gql`
  fragment File on UploadFileEntity {
    id
    attributes {
      previewUrl
      alternativeText
      url
    }
  }
`
export const CategoryFragmentDoc = gql`
  fragment Category on CategoryEntity {
    id
    attributes {
      name
      slug
    }
  }
`
export const PostFragmentDoc = gql`
  fragment Post on PostEntity {
    id
    attributes {
      content
      slug
      cover {
        data {
          ...File
        }
      }
      category {
        data {
          ...Category
        }
      }
    }
  }
  ${FileFragmentDoc}
  ${CategoryFragmentDoc}
`
export const CardFragmentDoc = gql`
  fragment Card on ComponentUiCard {
    id
    title
    subtitle
    description
    media {
      data {
        ...File
      }
    }
  }
  ${FileFragmentDoc}
`
export const TabFragmentDoc = gql`
  fragment Tab on ComponentUiTab {
    id
    name
    pane {
      ...Card
    }
  }
  ${CardFragmentDoc}
`
export const SeoFragmentDoc = gql`
  fragment Seo on ComponentSharedSeo {
    id
    canonicalURL
    keywords
    metaTitle
    metaViewport
    metaDescription
  }
`
export const HeadlineFragmentDoc = gql`
  fragment Headline on ComponentUiHeadline {
    id
    title
    subtitle
  }
`
export const HomeFragmentDoc = gql`
  fragment Home on ComponentPageHome {
    id
    pathname
    hero {
      ...Card
    }
    components {
      ...Card
    }
    technology {
      ...Headline
    }
    frameworks {
      ...Card
    }
  }
  ${CardFragmentDoc}
  ${HeadlineFragmentDoc}
`
export const ContactUsFragmentDoc = gql`
  fragment ContactUs on ComponentPageContactUs {
    id
    pathname
    contact {
      id
      address
      email
      phone
    }
  }
`
export const EntryFragmentDoc = gql`
  fragment Entry on ComponentDataEntry {
    id
    key
    value
  }
`
export const WebsiteFragmentDoc = gql`
  fragment Website on WebsiteEntity {
    id
    attributes {
      locale
      seo {
        ...Seo
      }
      content {
        __typename
        ...Home
        ...ContactUs
      }
      translations {
        ...Entry
      }
      locale
    }
  }
  ${SeoFragmentDoc}
  ${HomeFragmentDoc}
  ${ContactUsFragmentDoc}
  ${EntryFragmentDoc}
`
export const WebsiteDocument = gql`
  query website {
    website {
      data {
        ...Website
        attributes {
          localizations {
            data {
              ...Website
            }
          }
        }
      }
    }
  }
  ${WebsiteFragmentDoc}
`
export type WebsiteComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<WebsiteQuery, WebsiteQueryVariables>,
  'query'
>

export const WebsiteComponent = (props: WebsiteComponentProps) => (
  <ApolloReactComponents.Query<WebsiteQuery, WebsiteQueryVariables> query={WebsiteDocument} {...props} />
)

export function useWebsiteQuery(baseOptions?: Apollo.QueryHookOptions<WebsiteQuery, WebsiteQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<WebsiteQuery, WebsiteQueryVariables>(WebsiteDocument, options)
}
export function useWebsiteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WebsiteQuery, WebsiteQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<WebsiteQuery, WebsiteQueryVariables>(WebsiteDocument, options)
}
export type WebsiteQueryHookResult = ReturnType<typeof useWebsiteQuery>
export type WebsiteLazyQueryHookResult = ReturnType<typeof useWebsiteLazyQuery>
export type WebsiteQueryResult = Apollo.QueryResult<WebsiteQuery, WebsiteQueryVariables>
