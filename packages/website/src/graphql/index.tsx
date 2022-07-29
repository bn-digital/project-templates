import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import * as ApolloReactComponents from '@apollo/client/react/components'
import * as React from 'react'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
const defaultOptions = {} as const
export type CardFragment = {
  __typename?: 'ComponentUiCard'
  id: string
  title?: string | null
  subtitle?: string | null
  description?: string | null
  media?: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null; alternativeText?: string | null; url: string } | null
    } | null
  } | null
}

export type CategoryFragment = {
  __typename?: 'CategoryEntity'
  id?: string | null
  attributes?: { __typename?: 'Category'; name: string; slug: string } | null
}

export type ContactUsFragment = {
  __typename?: 'ComponentPageContactUs'
  id: string
  pathname: string
  contact?: { __typename?: 'ComponentDataContact'; id: string; address?: string | null; email?: string | null; phone?: string | null } | null
}

export type EntryFragment = { __typename?: 'ComponentDataEntry'; id: string; key?: string | null; value: string }

export type FileFragment = {
  __typename?: 'UploadFileEntity'
  id?: string | null
  attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null; alternativeText?: string | null; url: string } | null
}

export type HeadlineFragment = { __typename?: 'ComponentUiHeadline'; id: string; title?: string | null; subtitle?: string | null }

export type HomeFragment = {
  __typename?: 'ComponentPageHome'
  id: string
  pathname: string
  hero?: {
    __typename?: 'ComponentUiCard'
    subtitle?: string | null
    id: string
    description?: string | null
    title?: string | null
    media?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null; alternativeText?: string | null; url: string } | null
      } | null
    } | null
  } | null
  features?: Array<{
    __typename?: 'ComponentUiCard'
    id: string
    title?: string | null
    subtitle?: string | null
    description?: string | null
    media?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null; alternativeText?: string | null; url: string } | null
      } | null
    } | null
  } | null> | null
}

export type LinkFragment = { __typename?: 'ComponentUiLink'; id: string; title?: string | null; url: string }

export type MenuFragment = {
  __typename?: 'MenusMenuEntity'
  id?: string | null
  attributes?: {
    __typename?: 'MenusMenu'
    title: string
    items?: {
      __typename?: 'MenusMenuItemRelationResponseCollection'
      data: Array<{
        __typename?: 'MenusMenuItemEntity'
        id?: string | null
        attributes?: {
          __typename?: 'MenusMenuItem'
          order?: number | null
          createdAt?: Date | null
          url?: string | null
          title: string
          target?: EnumMenusmenuitemTarget | null
        } | null
      }>
    } | null
  } | null
}

export type MenuItemFragment = {
  __typename?: 'MenusMenuItemEntity'
  id?: string | null
  attributes?: {
    __typename?: 'MenusMenuItem'
    order?: number | null
    createdAt?: Date | null
    url?: string | null
    title: string
    target?: EnumMenusmenuitemTarget | null
  } | null
}

export type ParagraphFragment = { __typename?: 'ComponentUiParagraph'; id: string; value: string }

export type PostFragment = {
  __typename?: 'PostEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Post'
    content?: string | null
    slug: string
    cover?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null; alternativeText?: string | null; url: string } | null
      } | null
    } | null
    category?: {
      __typename?: 'CategoryEntityResponse'
      data?: { __typename?: 'CategoryEntity'; id?: string | null; attributes?: { __typename?: 'Category'; name: string; slug: string } | null } | null
    } | null
  } | null
}

export type SeoFragment = {
  __typename?: 'ComponentSharedSeo'
  id: string
  canonicalURL?: string | null
  keywords?: string | null
  metaTitle: string
  metaViewport?: string | null
  metaDescription?: string | null
}

export type TabFragment = {
  __typename?: 'ComponentUiTab'
  id: string
  name: string
  pane: {
    __typename?: 'ComponentUiCard'
    id: string
    title?: string | null
    subtitle?: string | null
    description?: string | null
    media?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null; alternativeText?: string | null; url: string } | null
      } | null
    } | null
  }
}

export type WebsiteFragment = {
  __typename?: 'WebsiteEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Website'
    seo?: {
      __typename?: 'ComponentSharedSeo'
      id: string
      canonicalURL?: string | null
      keywords?: string | null
      metaTitle: string
      metaViewport?: string | null
      metaDescription?: string | null
    } | null
    content?: Array<
      | {
          __typename: 'ComponentPageContactUs'
          id: string
          pathname: string
          contact?: { __typename?: 'ComponentDataContact'; id: string; address?: string | null; email?: string | null; phone?: string | null } | null
        }
      | {
          __typename: 'ComponentPageHome'
          id: string
          pathname: string
          hero?: {
            __typename?: 'ComponentUiCard'
            subtitle?: string | null
            id: string
            description?: string | null
            title?: string | null
            media?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                id?: string | null
                attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null; alternativeText?: string | null; url: string } | null
              } | null
            } | null
          } | null
          features?: Array<{
            __typename?: 'ComponentUiCard'
            id: string
            title?: string | null
            subtitle?: string | null
            description?: string | null
            media?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                id?: string | null
                attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null; alternativeText?: string | null; url: string } | null
              } | null
            } | null
          } | null> | null
        }
      | { __typename: 'Error' }
      | null
    > | null
  } | null
}

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']
}>

export type ForgotPasswordMutation = { __typename?: 'Mutation'; forgotPassword?: { __typename?: 'UsersPermissionsPasswordPayload'; ok: boolean } | null }

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput
}>

export type LoginMutation = { __typename?: 'Mutation'; login: { __typename?: 'UsersPermissionsLoginPayload'; jwt?: string | null } }

export type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation'; register: { __typename?: 'UsersPermissionsLoginPayload'; jwt?: string | null } }

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>

export type CategoriesQuery = {
  __typename?: 'Query'
  categories?: {
    __typename?: 'CategoryEntityResponseCollection'
    data: Array<{
      __typename?: 'CategoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Category'
        name: string
        slug: string
        posts?: {
          __typename?: 'PostRelationResponseCollection'
          data: Array<{
            __typename?: 'PostEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Post'
              content?: string | null
              slug: string
              cover?: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null; alternativeText?: string | null; url: string } | null
                } | null
              } | null
              category?: {
                __typename?: 'CategoryEntityResponse'
                data?: { __typename?: 'CategoryEntity'; id?: string | null; attributes?: { __typename?: 'Category'; name: string; slug: string } | null } | null
              } | null
            } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query'; me?: { __typename?: 'UsersPermissionsMe'; email?: string | null } | null }

export type MenuQueryVariables = Exact<{
  filters?: InputMaybe<MenusMenuFiltersInput>
}>

export type MenuQuery = {
  __typename?: 'Query'
  menusMenus?: {
    __typename?: 'MenusMenuEntityResponseCollection'
    data: Array<{
      __typename?: 'MenusMenuEntity'
      id?: string | null
      attributes?: {
        __typename?: 'MenusMenu'
        title: string
        items?: {
          __typename?: 'MenusMenuItemRelationResponseCollection'
          data: Array<{
            __typename?: 'MenusMenuItemEntity'
            id?: string | null
            attributes?: {
              __typename?: 'MenusMenuItem'
              order?: number | null
              createdAt?: Date | null
              url?: string | null
              title: string
              target?: EnumMenusmenuitemTarget | null
            } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type PostsQueryVariables = Exact<{
  filters?: InputMaybe<PostFiltersInput>
}>

export type PostsQuery = {
  __typename?: 'Query'
  posts?: {
    __typename?: 'PostEntityResponseCollection'
    data: Array<{
      __typename?: 'PostEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Post'
        content?: string | null
        slug: string
        cover?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null; alternativeText?: string | null; url: string } | null
          } | null
        } | null
        category?: {
          __typename?: 'CategoryEntityResponse'
          data?: { __typename?: 'CategoryEntity'; id?: string | null; attributes?: { __typename?: 'Category'; name: string; slug: string } | null } | null
        } | null
      } | null
    }>
  } | null
}

export type TranslationsQueryVariables = Exact<{ [key: string]: never }>

export type TranslationsQuery = {
  __typename?: 'Query'
  translation?: {
    __typename?: 'TranslationEntityResponse'
    data?: {
      __typename?: 'TranslationEntity'
      attributes?: {
        __typename?: 'Translation'
        locale?: string | null
        localizations?: {
          __typename?: 'TranslationRelationResponseCollection'
          data: Array<{
            __typename?: 'TranslationEntity'
            attributes?: {
              __typename?: 'Translation'
              locale?: string | null
              entry: Array<{ __typename?: 'ComponentDataEntry'; id: string; key?: string | null; value: string } | null>
            } | null
          }>
        } | null
        entry: Array<{ __typename?: 'ComponentDataEntry'; id: string; key?: string | null; value: string } | null>
      } | null
    } | null
  } | null
}

export type WebsiteQueryVariables = Exact<{ [key: string]: never }>

export type WebsiteQuery = {
  __typename?: 'Query'
  website?: {
    __typename?: 'WebsiteEntityResponse'
    data?: {
      __typename?: 'WebsiteEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Website'
        seo?: {
          __typename?: 'ComponentSharedSeo'
          id: string
          canonicalURL?: string | null
          keywords?: string | null
          metaTitle: string
          metaViewport?: string | null
          metaDescription?: string | null
        } | null
        content?: Array<
          | {
              __typename: 'ComponentPageContactUs'
              id: string
              pathname: string
              contact?: { __typename?: 'ComponentDataContact'; id: string; address?: string | null; email?: string | null; phone?: string | null } | null
            }
          | {
              __typename: 'ComponentPageHome'
              id: string
              pathname: string
              hero?: {
                __typename?: 'ComponentUiCard'
                subtitle?: string | null
                id: string
                description?: string | null
                title?: string | null
                media?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null; alternativeText?: string | null; url: string } | null
                  } | null
                } | null
              } | null
              features?: Array<{
                __typename?: 'ComponentUiCard'
                id: string
                title?: string | null
                subtitle?: string | null
                description?: string | null
                media?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null; alternativeText?: string | null; url: string } | null
                  } | null
                } | null
              } | null> | null
            }
          | { __typename: 'Error' }
          | null
        > | null
      } | null
    } | null
  } | null
}

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
      'ComponentUiCard',
      'ComponentUiGrid',
      'ComponentUiHeadline',
      'ComponentUiLink',
      'ComponentUiParagraph',
      'ComponentUiSection',
      'ComponentUiTab',
      'ComponentUiText',
      'Contact',
      'EmailDesignerEmailTemplate',
      'I18NLocale',
      'MenusMenu',
      'MenusMenuItem',
      'Post',
      'Translation',
      'UploadFile',
      'UploadFolder',
      'UsersPermissionsPermission',
      'UsersPermissionsRole',
      'UsersPermissionsUser',
      'Website',
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
      'ComponentUiCard',
      'ComponentUiGrid',
      'ComponentUiHeadline',
      'ComponentUiLink',
      'ComponentUiParagraph',
      'ComponentUiSection',
      'ComponentUiTab',
      'ComponentUiText',
      'Contact',
      'EmailDesignerEmailTemplate',
      'I18NLocale',
      'MenusMenu',
      'MenusMenuItem',
      'Post',
      'Translation',
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
export const LinkFragmentDoc = gql`
  fragment Link on ComponentUiLink {
    id
    title
    url
  }
`
export const MenuItemFragmentDoc = gql`
  fragment MenuItem on MenusMenuItemEntity {
    id
    attributes {
      order
      createdAt
      url
      title
      target
    }
  }
`
export const MenuFragmentDoc = gql`
  fragment Menu on MenusMenuEntity {
    id
    attributes {
      title
      items(sort: "order:ASC") {
        data {
          ...MenuItem
        }
      }
    }
  }
  ${MenuItemFragmentDoc}
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
export const HomeFragmentDoc = gql`
  fragment Home on ComponentPageHome {
    id
    pathname
    hero {
      subtitle
      id
      description
      title
      media {
        data {
          ...File
        }
      }
    }
    features {
      ...Card
    }
  }
  ${FileFragmentDoc}
  ${CardFragmentDoc}
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
export const WebsiteFragmentDoc = gql`
  fragment Website on WebsiteEntity {
    id
    attributes {
      seo {
        ...Seo
      }
      content {
        __typename
        ...Home
        ...ContactUs
      }
    }
  }
  ${SeoFragmentDoc}
  ${HomeFragmentDoc}
  ${ContactUsFragmentDoc}
`
export const ForgotPasswordDocument = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email) {
      ok
    }
  }
`
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>
export type ForgotPasswordComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>,
  'mutation'
>

export const ForgotPasswordComponent = (props: ForgotPasswordComponentProps) => (
  <ApolloReactComponents.Mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables> mutation={ForgotPasswordDocument} {...props} />
)

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options)
}
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>
export const LoginDocument = gql`
  mutation login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>

export const LoginComponent = (props: LoginComponentProps) => (
  <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
)

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const RegisterDocument = gql`
  mutation register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
    }
  }
`
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>

export const RegisterComponent = (props: RegisterComponentProps) => (
  <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
)

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options)
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>
export const CategoriesDocument = gql`
  query categories {
    categories {
      data {
        ...Category
        attributes {
          posts {
            data {
              ...Post
            }
          }
        }
      }
    }
  }
  ${CategoryFragmentDoc}
  ${PostFragmentDoc}
`
export type CategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CategoriesQuery, CategoriesQueryVariables>, 'query'>

export const CategoriesComponent = (props: CategoriesComponentProps) => (
  <ApolloReactComponents.Query<CategoriesQuery, CategoriesQueryVariables> query={CategoriesDocument} {...props} />
)

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options)
}
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options)
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>
export const MeDocument = gql`
  query me {
    me {
      email
    }
  }
`
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>

export const MeComponent = (props: MeComponentProps) => <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
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
export const MenuDocument = gql`
  query menu($filters: MenusMenuFiltersInput) {
    menusMenus(filters: $filters) {
      data {
        ...Menu
      }
    }
  }
  ${MenuFragmentDoc}
`
export type MenuComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MenuQuery, MenuQueryVariables>, 'query'>

export const MenuComponent = (props: MenuComponentProps) => <ApolloReactComponents.Query<MenuQuery, MenuQueryVariables> query={MenuDocument} {...props} />

/**
 * __useMenuQuery__
 *
 * To run a query within a React component, call `useMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useMenuQuery(baseOptions?: Apollo.QueryHookOptions<MenuQuery, MenuQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MenuQuery, MenuQueryVariables>(MenuDocument, options)
}
export function useMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenuQuery, MenuQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MenuQuery, MenuQueryVariables>(MenuDocument, options)
}
export type MenuQueryHookResult = ReturnType<typeof useMenuQuery>
export type MenuLazyQueryHookResult = ReturnType<typeof useMenuLazyQuery>
export type MenuQueryResult = Apollo.QueryResult<MenuQuery, MenuQueryVariables>
export const PostsDocument = gql`
  query posts($filters: PostFiltersInput) {
    posts(publicationState: LIVE, filters: $filters) {
      data {
        ...Post
      }
    }
  }
  ${PostFragmentDoc}
`
export type PostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostsQuery, PostsQueryVariables>, 'query'>

export const PostsComponent = (props: PostsComponentProps) => <ApolloReactComponents.Query<PostsQuery, PostsQueryVariables> query={PostsDocument} {...props} />

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options)
}
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options)
}
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>
export const TranslationsDocument = gql`
  query translations {
    translation {
      data {
        attributes {
          locale
          localizations {
            data {
              attributes {
                locale
                entry(pagination: { limit: 1000 }) {
                  ...Entry
                }
              }
            }
          }
          entry(pagination: { limit: 1000 }) {
            ...Entry
          }
        }
      }
    }
  }
  ${EntryFragmentDoc}
`
export type TranslationsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TranslationsQuery, TranslationsQueryVariables>, 'query'>

export const TranslationsComponent = (props: TranslationsComponentProps) => (
  <ApolloReactComponents.Query<TranslationsQuery, TranslationsQueryVariables> query={TranslationsDocument} {...props} />
)

/**
 * __useTranslationsQuery__
 *
 * To run a query within a React component, call `useTranslationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTranslationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTranslationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTranslationsQuery(baseOptions?: Apollo.QueryHookOptions<TranslationsQuery, TranslationsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TranslationsQuery, TranslationsQueryVariables>(TranslationsDocument, options)
}
export function useTranslationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TranslationsQuery, TranslationsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TranslationsQuery, TranslationsQueryVariables>(TranslationsDocument, options)
}
export type TranslationsQueryHookResult = ReturnType<typeof useTranslationsQuery>
export type TranslationsLazyQueryHookResult = ReturnType<typeof useTranslationsLazyQuery>
export type TranslationsQueryResult = Apollo.QueryResult<TranslationsQuery, TranslationsQueryVariables>
export const WebsiteDocument = gql`
  query website {
    website {
      data {
        ...Website
      }
    }
  }
  ${WebsiteFragmentDoc}
`
export type WebsiteComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<WebsiteQuery, WebsiteQueryVariables>, 'query'>

export const WebsiteComponent = (props: WebsiteComponentProps) => (
  <ApolloReactComponents.Query<WebsiteQuery, WebsiteQueryVariables> query={WebsiteDocument} {...props} />
)

/**
 * __useWebsiteQuery__
 *
 * To run a query within a React component, call `useWebsiteQuery` and pass it any options that fit your needs.
 * When your component renders, `useWebsiteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWebsiteQuery({
 *   variables: {
 *   },
 * });
 */
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
