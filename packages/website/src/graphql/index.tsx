import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import * as ApolloReactComponents from '@apollo/client/react/components'
import * as React from 'react'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
const defaultOptions = {} as const
type CardFragment = { id: string; title?: string | null; subtitle?: string | null; description?: string | null; media?: { data?: FileFragment | null } | null }

type EntryFragment = { id: string; key?: string | null; value: string }

type FileFragment = { id?: string | null; attributes?: { previewUrl?: string | null; url: string } | null }

type HeadlineFragment = { id: string; title?: string | null; subtitle?: string | null }

type LinkFragment = { id: string; title?: string | null; url: string }

type ParagraphFragment = { id: string; value: string }

type SeoFragment = {
  id: string
  canonicalURL?: string | null
  keywords?: string | null
  metaTitle: string
  metaViewport?: string | null
  metaDescription?: string | null
}

type TabFragment = { id: string; name: string; pane: CardFragment }

type CategoryFragment = { id?: string | null; attributes?: { name: string; slug: string } | null }

type ContactUsFragment = {
  id: string
  pathname: string
  contact?: { id: string; address?: string | null; email?: string | null; phone?: string | null } | null
}

type HomeFragment = {
  id: string
  pathname: string
  hero?: { subtitle?: string | null; id: string; description?: string | null; title?: string | null; media?: { data?: FileFragment | null } | null } | null
  features?: Array<CardFragment | null> | null
}

type MenuFragment = {
  id?: string | null
  attributes?: {
    title: string
    items?: {
      data: Array<{
        id?: string | null
        attributes?: { order?: number | null; createdAt?: Date | null; url?: string | null; title: string; target?: EnumMenusmenuitemTarget | null } | null
      }>
    } | null
  } | null
}

type PostFragment = {
  id?: string | null
  attributes?: {
    content?: string | null
    slug: string
    cover?: { data?: FileFragment | null } | null
    category?: { data?: CategoryFragment | null } | null
  } | null
}

type WebsiteFragment = {
  id?: string | null
  attributes?: {
    content?: Array<
      ({ __typename: 'ComponentPageContactUs' } & ContactUsFragment) | ({ __typename: 'ComponentPageHome' } & HomeFragment) | { __typename: 'Error' } | null
    > | null
  } | null
}

type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']
}>

type ForgotPasswordMutation = { forgotPassword?: { ok: boolean } | null }

type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput
}>

type LoginMutation = { login: { jwt?: string | null } }

type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput
}>

type RegisterMutation = { register: { jwt?: string | null } }

type CategoriesQueryVariables = Exact<{ [key: string]: never }>

type CategoriesQuery = { categories?: { data: Array<{ attributes?: { posts?: { data: Array<PostFragment> } | null } | null } & CategoryFragment> } | null }

type MeQueryVariables = Exact<{ [key: string]: never }>

type MeQuery = { me?: { email?: string | null } | null }

type MenuQueryVariables = Exact<{
  filters?: InputMaybe<MenusMenuFiltersInput>
}>

type MenuQuery = { menusMenus?: { data: Array<MenuFragment> } | null }

type PostsQueryVariables = Exact<{
  filters?: InputMaybe<PostFiltersInput>
}>

type PostsQuery = { posts?: { data: Array<PostFragment> } | null }

type TranslationsQueryVariables = Exact<{ [key: string]: never }>

type TranslationsQuery = {
  translation?: {
    data?: {
      attributes?: {
        locale?: string | null
        localizations?: { data: Array<{ attributes?: { locale?: string | null; entry: Array<EntryFragment | null> } | null }> } | null
        entry: Array<EntryFragment | null>
      } | null
    } | null
  } | null
}

type WebsiteQueryVariables = Exact<{ [key: string]: never }>

type WebsiteQuery = { website?: { data?: WebsiteFragment | null } | null }

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
export const ParagraphFragmentDoc = gql`
  fragment Paragraph on ComponentUiParagraph {
    id
    value
  }
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
export const MenuFragmentDoc = gql`
  fragment Menu on MenusMenuEntity {
    id
    attributes {
      title
      items {
        data {
          id
          attributes {
            order
            createdAt
            url
            title
            target
          }
        }
      }
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
      content {
        __typename
        ...Home
        ...ContactUs
      }
    }
  }
`
const ForgotPasswordDocument = gql`
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
const LoginDocument = gql`
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
const RegisterDocument = gql`
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
const CategoriesDocument = gql`
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
  ${FileFragmentDoc}
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
const MeDocument = gql`
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
const MenuDocument = gql`
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
const PostsDocument = gql`
  query posts($filters: PostFiltersInput) {
    posts(publicationState: LIVE, filters: $filters) {
      data {
        ...Post
      }
    }
  }
  ${PostFragmentDoc}
  ${FileFragmentDoc}
  ${CategoryFragmentDoc}
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
const TranslationsDocument = gql`
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
const WebsiteDocument = gql`
  query website {
    website {
      data {
        ...Website
      }
    }
  }
  ${WebsiteFragmentDoc}
  ${HomeFragmentDoc}
  ${FileFragmentDoc}
  ${CardFragmentDoc}
  ${ContactUsFragmentDoc}
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
