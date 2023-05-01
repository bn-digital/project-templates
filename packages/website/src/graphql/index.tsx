import * as Apollo from "@apollo/client"
import { DocumentNode } from "graphql"
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
      "Layout",
      "UploadFile",
      "UploadFolder",
      "UsersPermissionsPermission",
      "UsersPermissionsRole",
      "UsersPermissionsUser"
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
      "Layout",
      "UploadFile",
      "UploadFolder",
      "UsersPermissionsPermission",
      "UsersPermissionsRole",
      "UsersPermissionsUser",
    ],
  },
}
export default result

export const EntryFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Entry" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ComponentDataEntry" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode
export const HeadlineFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Headline" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ComponentUiHeadline" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode
export const LinkFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Link" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ComponentUiLink" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode
export const ParagraphFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Paragraph" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ComponentUiParagraph" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode
export const FileFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "File" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UploadFileEntity" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "attributes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "previewUrl" } },
                { kind: "Field", name: { kind: "Name", value: "alternativeText" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode
export const CardFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Card" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ComponentUiCard" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "File" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode
export const TabFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Tab" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ComponentUiTab" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pane" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Card" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode
export const MeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "me" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode
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
