import * as Apollo from "@apollo/client"
import { gql } from "@apollo/client"

const defaultOptions = {} as const

export type PossibleTypesResultData = {
  possibleTypes: {
    GenericMorph: [
      "ComponentDataEntry",
      "ComponentDataSet",
      "ComponentUiCard",
      "ComponentUiGrid",
      "ComponentUiHeadline",
      "ComponentUiLink",
      "ComponentUiParagraph",
      "ComponentUiSection",
      "ComponentUiTab",
      "ComponentUiText",
      "Home",
      "Layout",
      "ReactIconsIconlibrary",
      "UploadFile",
      "UploadFolder",
      "UsersPermissionsPermission",
      "UsersPermissionsRole",
      "UsersPermissionsUser",
    ]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    GenericMorph: [
      "ComponentDataEntry",
      "ComponentDataSet",
      "ComponentUiCard",
      "ComponentUiGrid",
      "ComponentUiHeadline",
      "ComponentUiLink",
      "ComponentUiParagraph",
      "ComponentUiSection",
      "ComponentUiTab",
      "ComponentUiText",
      "Home",
      "Layout",
      "ReactIconsIconlibrary",
      "UploadFile",
      "UploadFolder",
      "UsersPermissionsPermission",
      "UsersPermissionsRole",
      "UsersPermissionsUser",
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
export const HeadlineFragmentDoc = gql`
  fragment Headline on ComponentUiHeadline {
    id
    title
    subtitle
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
    title
    url
    target
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
`
export const SectionFragmentDoc = gql`
  fragment Section on ComponentUiSection {
    id
    button {
      ...Link
    }
    heading {
      ...Card
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
export const HomeDocument = gql`
  query home {
    home {
      data {
        attributes {
          hero {
            ...Section
          }
        }
      }
    }
  }
  ${SectionFragmentDoc}
  ${LinkFragmentDoc}
  ${CardFragmentDoc}
  ${FileFragmentDoc}
`
export function useHomeQuery(baseOptions?: Apollo.QueryHookOptions<HomeQuery, HomeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<HomeQuery, HomeQueryVariables>(HomeDocument, options)
}
export function useHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeQuery, HomeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<HomeQuery, HomeQueryVariables>(HomeDocument, options)
}
export type HomeQueryHookResult = ReturnType<typeof useHomeQuery>
export type HomeLazyQueryHookResult = ReturnType<typeof useHomeLazyQuery>
export type HomeQueryResult = Apollo.QueryResult<HomeQuery, HomeQueryVariables>
export const MeDocument = gql`
  query me {
    me {
      id
    }
  }
`
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
