import { gql } from '@apollo/client'
import * as React from 'react'
import * as Apollo from '@apollo/client'
import * as ApolloReactComponents from '@apollo/client/react/components'
import * as ApolloReactHoc from '@apollo/client/react/hoc'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
const defaultOptions = {}
export type CardFragment = {
  __typename?: 'ComponentUiCard'
  id: string
  title?: string | null | undefined
  subtitle?: string | null | undefined
  description?: string | null | undefined
  media?: { __typename?: 'UploadFileEntityResponse'; data?: ({ __typename?: 'UploadFileEntity' } & FileFragment) | null | undefined } | null | undefined
}

export type EntryFragment = { __typename?: 'ComponentDataEntry'; id: string; key?: string | null | undefined; value: string }

export type FileFragment = {
  __typename?: 'UploadFileEntity'
  id?: string | null | undefined
  attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null | undefined; url: string } | null | undefined
}

export type LinkFragment = {
  __typename?: 'ComponentUiLink'
  id: string
  protocol?: Enum_Componentuilink_Protocol | null | undefined
  title?: string | null | undefined
  url: string
  icon?: { __typename?: 'UploadFileEntityResponse'; data?: ({ __typename?: 'UploadFileEntity' } & FileFragment) | null | undefined } | null | undefined
}

export type MetaFragment = { __typename?: 'ComponentDataMeta'; id: string; title?: string | null | undefined; description?: string | null | undefined }

export type PageFragment = {
  __typename?: 'PageEntity'
  id?: string | null | undefined
  attributes?:
    | {
        __typename?: 'Page'
        title?: string | null | undefined
        pathname: string
        description?: string | null | undefined
        keywords?: string | null | undefined
        content?:
          | Array<
              | {
                  __typename: 'ComponentUiGrid'
                  id: string
                  visible: boolean
                  gridType: ContentGridType
                  children: Array<({ __typename?: 'ComponentDataEntry' } & EntryFragment) | null | undefined>
                }
              | {
                  __typename: 'ComponentUiMenu'
                  id: string
                  visible: boolean
                  menuType: ContentMenuType
                  children: Array<({ __typename?: 'ComponentUiLink' } & LinkFragment) | null | undefined>
                }
              | {
                  __typename: 'ComponentUiSection'
                  id: string
                  visible: boolean
                  sectionType: ContentSectionType
                  children: Array<({ __typename?: 'ComponentUiCard' } & CardFragment) | null | undefined>
                }
              | {
                  __typename: 'ComponentUiText'
                  id: string
                  type: ContentTextType
                  visible: boolean
                  textType: ContentTextType
                  children: Array<({ __typename?: 'ComponentUiParagraph' } & ParagraphFragment) | null | undefined>
                }
              | { __typename: 'Error' }
              | null
              | undefined
            >
          | null
          | undefined
      }
    | null
    | undefined
}

export type ParagraphFragment = { __typename?: 'ComponentUiParagraph'; id: string; value: string }

export type TabFragment = { __typename?: 'ComponentUiTab'; id: string; name: string; pane: { __typename?: 'ComponentUiCard' } & CardFragment }

export type PageQueryVariables = Exact<{
  pathname: Scalars['String']
}>

export type PageQuery = {
  __typename?: 'Query'
  pages?: { __typename?: 'PageEntityResponseCollection'; data: Array<{ __typename?: 'PageEntity' } & PageFragment> } | null | undefined
}

export type HomepageQueryVariables = Exact<{ [key: string]: never }>

export type HomepageQuery = {
  __typename?: 'Query'
  homepage?:
    | {
        __typename?: 'HomepageEntityResponse'
        data?:
          | {
              __typename?: 'HomepageEntity'
              id?: string | null | undefined
              attributes?:
                | {
                    __typename?: 'Homepage'
                    meta?: ({ __typename?: 'ComponentDataMeta' } & MetaFragment) | null | undefined
                    hero?: ({ __typename?: 'ComponentUiCard' } & CardFragment) | null | undefined
                    capabilities?: Array<({ __typename?: 'ComponentUiTab' } & TabFragment) | null | undefined> | null | undefined
                  }
                | null
                | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
}

export const MetaFragmentDoc = gql`
  fragment Meta on ComponentDataMeta {
    id
    title
    description
  }
`
export const EntryFragmentDoc = gql`
  fragment Entry on ComponentDataEntry {
    id
    key
    value
  }
`
export const FileFragmentDoc = gql`
  fragment File on UploadFileEntity {
    id
    attributes {
      previewUrl
      url
    }
  }
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
`
export const ParagraphFragmentDoc = gql`
  fragment Paragraph on ComponentUiParagraph {
    id
    value
  }
`
export const LinkFragmentDoc = gql`
  fragment Link on ComponentUiLink {
    id
    protocol
    title
    url
    icon {
      data {
        ...File
      }
    }
  }
`
export const PageFragmentDoc = gql`
  fragment Page on PageEntity {
    id
    attributes {
      title
      pathname
      description
      keywords
      content {
        __typename
        ... on ComponentUiGrid {
          id
          visible
          gridType: type
          children {
            ...Entry
          }
        }
        ... on ComponentUiSection {
          id
          sectionType: type
          visible
          children {
            ...Card
          }
        }
        ... on ComponentUiText {
          id
          type
          visible
          textType: type
          children {
            ...Paragraph
          }
        }
        ... on ComponentUiMenu {
          id
          menuType: type
          visible
          children {
            ...Link
          }
        }
      }
    }
  }
`
export const TabFragmentDoc = gql`
  fragment Tab on ComponentUiTab {
    id
    name
    pane {
      ...Card
    }
  }
`
export const PageDocument = gql`
  query page($pathname: String!) {
    pages(filters: { pathname: { eq: $pathname } }, pagination: { limit: 1 }) {
      data {
        ...Page
      }
    }
  }
  ${PageFragmentDoc}
  ${EntryFragmentDoc}
  ${CardFragmentDoc}
  ${FileFragmentDoc}
  ${ParagraphFragmentDoc}
  ${LinkFragmentDoc}
`
export type PageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PageQuery, PageQueryVariables>, 'query'> &
  ({ variables: PageQueryVariables; skip?: boolean } | { skip: boolean })

export const PageComponent = (props: PageComponentProps) => <ApolloReactComponents.Query<PageQuery, PageQueryVariables> query={PageDocument} {...props} />

export type PageProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<PageQuery, PageQueryVariables>
} & TChildProps
export function withPage<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, PageQuery, PageQueryVariables, PageProps<TChildProps, TDataName>>,
) {
  return ApolloReactHoc.withQuery<TProps, PageQuery, PageQueryVariables, PageProps<TChildProps, TDataName>>(PageDocument, {
    alias: 'page',
    ...operationOptions,
  })
}

/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      pathname: // value for 'pathname'
 *   },
 * });
 */
export function usePageQuery(baseOptions: Apollo.QueryHookOptions<PageQuery, PageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageQuery, PageQueryVariables>(PageDocument, options)
}
export function usePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageQuery, PageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageQuery, PageQueryVariables>(PageDocument, options)
}
export type PageQueryHookResult = ReturnType<typeof usePageQuery>
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>
export type PageQueryResult = Apollo.QueryResult<PageQuery, PageQueryVariables>
export const HomepageDocument = gql`
  query homepage {
    homepage {
      data {
        id
        attributes {
          meta {
            ...Meta
          }
          hero {
            ...Card
          }
          capabilities {
            ...Tab
          }
        }
      }
    }
  }
  ${MetaFragmentDoc}
  ${CardFragmentDoc}
  ${FileFragmentDoc}
  ${TabFragmentDoc}
`
export type HomepageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HomepageQuery, HomepageQueryVariables>, 'query'>

export const HomepageComponent = (props: HomepageComponentProps) => (
  <ApolloReactComponents.Query<HomepageQuery, HomepageQueryVariables> query={HomepageDocument} {...props} />
)

export type HomepageProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<HomepageQuery, HomepageQueryVariables>
} & TChildProps
export function withHomepage<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, HomepageQuery, HomepageQueryVariables, HomepageProps<TChildProps, TDataName>>,
) {
  return ApolloReactHoc.withQuery<TProps, HomepageQuery, HomepageQueryVariables, HomepageProps<TChildProps, TDataName>>(HomepageDocument, {
    alias: 'homepage',
    ...operationOptions,
  })
}

/**
 * __useHomepageQuery__
 *
 * To run a query within a React component, call `useHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomepageQuery(baseOptions?: Apollo.QueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options)
}
export function useHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options)
}
export type HomepageQueryHookResult = ReturnType<typeof useHomepageQuery>
export type HomepageLazyQueryHookResult = ReturnType<typeof useHomepageLazyQuery>
export type HomepageQueryResult = Apollo.QueryResult<HomepageQuery, HomepageQueryVariables>
