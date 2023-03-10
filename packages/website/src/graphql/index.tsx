import { gql } from '@apollo/client'
import * as React from 'react'
import * as Apollo from '@apollo/client'
import * as ApolloReactComponents from '@apollo/client/react/components'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
const defaultOptions = {} as const

export type PossibleTypesResultData = {
  possibleTypes: {
    GenericMorph: [
      'ComponentDataContact',
      'ComponentDataEntry',
      'ComponentDataSet',
      'ComponentPageContactUs',
      'ComponentPageHome',
      'ComponentUiCard',
      'ComponentUiGrid',
      'ComponentUiHeadline',
      'ComponentUiLink',
      'ComponentUiParagraph',
      'ComponentUiSection',
      'ComponentUiTab',
      'ComponentUiText',
      'UploadFile',
      'UploadFolder',
      'UsersPermissionsPermission',
      'UsersPermissionsRole',
      'UsersPermissionsUser'
    ]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    GenericMorph: [
      'ComponentDataContact',
      'ComponentDataEntry',
      'ComponentDataSet',
      'ComponentPageContactUs',
      'ComponentPageHome',
      'ComponentUiCard',
      'ComponentUiGrid',
      'ComponentUiHeadline',
      'ComponentUiLink',
      'ComponentUiParagraph',
      'ComponentUiSection',
      'ComponentUiTab',
      'ComponentUiText',
      'UploadFile',
      'UploadFolder',
      'UsersPermissionsPermission',
      'UsersPermissionsRole',
      'UsersPermissionsUser',
    ],
  },
}
export default result

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
      alternativeText
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
  ${FileFragmentDoc}
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
export const MeDocument = gql`
  query me {
    me {
      id
    }
  }
`
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>

export const MeComponent = (props: MeComponentProps) => (
  <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
)

export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
