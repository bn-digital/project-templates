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

export type CardFragmentVariables = Exact<{ [key: string]: never }>

export type EntryFragment = { __typename?: 'ComponentDataEntry'; id: string; key?: string | null | undefined; value: string }

export type EntryFragmentVariables = Exact<{ [key: string]: never }>

export type FileFragment = {
  __typename?: 'UploadFileEntity'
  id?: string | null | undefined
  attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null | undefined; url: string } | null | undefined
}

export type FileFragmentVariables = Exact<{ [key: string]: never }>

export type LinkFragment = { __typename?: 'ComponentUiLink'; id: string; title?: string | null | undefined; url: string }

export type LinkFragmentVariables = Exact<{ [key: string]: never }>

export type MetaFragment = { __typename?: 'ComponentDataMeta'; id: string; title?: string | null | undefined; description?: string | null | undefined }

export type MetaFragmentVariables = Exact<{ [key: string]: never }>

export type ParagraphFragment = { __typename?: 'ComponentUiParagraph'; id: string; value: string }

export type ParagraphFragmentVariables = Exact<{ [key: string]: never }>

export type TabFragment = { __typename?: 'ComponentUiTab'; id: string; name: string; pane: { __typename?: 'ComponentUiCard' } & CardFragment }

export type TabFragmentVariables = Exact<{ [key: string]: never }>

export type HomepageFragment = {
  __typename?: 'Homepage'
  meta?: { __typename?: 'ComponentDataMeta'; title?: string | null | undefined; description?: string | null | undefined } | null | undefined
  hero?:
    | {
        __typename?: 'ComponentUiCard'
        subtitle?: string | null | undefined
        id: string
        description?: string | null | undefined
        title?: string | null | undefined
      }
    | null
    | undefined
}

export type HomepageFragmentVariables = Exact<{ [key: string]: never }>

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

export const EntryFragmentDoc = gql`
  fragment Entry on ComponentDataEntry {
    id
    key
    value
  }
`
export const LinkFragmentDoc = gql`
  fragment Link on ComponentUiLink {
    id
    title
    url
  }
`
export const MetaFragmentDoc = gql`
  fragment Meta on ComponentDataMeta {
    id
    title
    description
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
export const TabFragmentDoc = gql`
  fragment Tab on ComponentUiTab {
    id
    name
    pane {
      ...Card
    }
  }
`
export const HomepageFragmentDoc = gql`
  fragment Homepage on Homepage {
    meta {
      title
      description
    }
    hero {
      subtitle
      id
      description
      title
    }
  }
`
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
        }
      }
    }
  }
  ${MetaFragmentDoc}
  ${CardFragmentDoc}
  ${FileFragmentDoc}
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
