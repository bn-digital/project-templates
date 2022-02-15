import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import * as React from 'react'
import * as ApolloReactComponents from '@apollo/client/react/components'
import * as ApolloReactHoc from '@apollo/client/react/hoc'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
const defaultOptions = {} as const
export type CardFragment = {
  id: string
  title?: string | null | undefined
  subtitle?: string | null | undefined
  description?: string | null | undefined
  media?: { data?: FileFragment | null | undefined } | null | undefined
}

export type CardFragmentVariables = Exact<{ [key: string]: never }>

export type EntryFragment = { id: string; key?: string | null | undefined; value: string }

export type EntryFragmentVariables = Exact<{ [key: string]: never }>

export type FileFragment = { id?: string | null | undefined; attributes?: { previewUrl?: string | null | undefined; url: string } | null | undefined }

export type FileFragmentVariables = Exact<{ [key: string]: never }>

export type LinkFragment = { id: string; title?: string | null | undefined; url: string }

export type LinkFragmentVariables = Exact<{ [key: string]: never }>

export type SeoFragment = {
  id: string
  canonicalURL?: string | null | undefined
  keywords?: string | null | undefined
  metaTitle: string
  metaViewport?: string | null | undefined
  metaDescription?: string | null | undefined
}

export type SeoFragmentVariables = Exact<{ [key: string]: never }>

export type ParagraphFragment = { id: string; value: string }

export type ParagraphFragmentVariables = Exact<{ [key: string]: never }>

export type TabFragment = { id: string; name: string; pane: CardFragment }

export type TabFragmentVariables = Exact<{ [key: string]: never }>

export type HomepageFragment = {
  hero?: { subtitle?: string | null | undefined; id: string; description?: string | null | undefined; title?: string | null | undefined } | null | undefined
}

export type HomepageFragmentVariables = Exact<{ [key: string]: never }>

export type MenuFragment = { items?: Array<MenuItemFragment | null | undefined> | null | undefined } & MenuItemFragment

export type MenuFragmentVariables = Exact<{ [key: string]: never }>

export type MenuItemFragment = { id: number; title: string; path?: string | null | undefined; externalPath?: string | null | undefined }

export type MenuItemFragmentVariables = Exact<{ [key: string]: never }>

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput
}>

export type LoginMutation = { login: { jwt?: string | null | undefined } }

export type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput
}>

export type RegisterMutation = { register: { jwt?: string | null | undefined } }

export type UpdateCustomerMutationVariables = Exact<{
  id: Scalars['ID']
  data: CustomerInput
}>

export type UpdateCustomerMutation = {
  updateCustomer?:
    | {
        data?:
          | { id?: string | null | undefined; attributes?: { createdAt?: Date | null | undefined; firstName?: string | null | undefined } | null | undefined }
          | null
          | undefined
      }
    | null
    | undefined
}

export type HomepageQueryVariables = Exact<{ [key: string]: never }>

export type HomepageQuery = {
  homepage?:
    | {
        data?:
          | { id?: string | null | undefined; attributes?: { hero?: CardFragment | null | undefined; seo?: SeoFragment | null | undefined } | null | undefined }
          | null
          | undefined
      }
    | null
    | undefined
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
  me?:
    | { id?: string | null | undefined; createdAt?: Date | null | undefined; firstName?: string | null | undefined; updatedAt?: Date | null | undefined }
    | null
    | undefined
}

export type NavigationQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type NavigationQuery = { renderNavigation: Array<MenuFragment | null | undefined> }

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
    hero {
      subtitle
      id
      description
      title
    }
  }
`
export const MenuItemFragmentDoc = gql`
  fragment MenuItem on NavigationItem {
    id
    title
    path
    externalPath
  }
`
export const MenuFragmentDoc = gql`
  fragment Menu on NavigationItem {
    ...MenuItem
    items {
      ...MenuItem
    }
  }
`
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

export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<LoginMutation, LoginMutationVariables>
} & TChildProps
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>,
) {
  return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
    alias: 'login',
    ...operationOptions,
  })
}

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

export type RegisterProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>
} & TChildProps
export function withRegister<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps, TDataName>>,
) {
  return ApolloReactHoc.withMutation<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps, TDataName>>(RegisterDocument, {
    alias: 'register',
    ...operationOptions,
  })
}

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
export const UpdateCustomerDocument = gql`
  mutation updateCustomer($id: ID!, $data: CustomerInput!) {
    updateCustomer(id: $id, data: $data) {
      data {
        id
        attributes {
          createdAt
          firstName
        }
      }
    }
  }
`
export type UpdateCustomerMutationFn = Apollo.MutationFunction<UpdateCustomerMutation, UpdateCustomerMutationVariables>
export type UpdateCustomerComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>,
  'mutation'
>

export const UpdateCustomerComponent = (props: UpdateCustomerComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateCustomerMutation, UpdateCustomerMutationVariables> mutation={UpdateCustomerDocument} {...props} />
)

export type UpdateCustomerProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateCustomerMutation, UpdateCustomerMutationVariables>
} & TChildProps
export function withUpdateCustomer<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateCustomerMutation,
    UpdateCustomerMutationVariables,
    UpdateCustomerProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<TProps, UpdateCustomerMutation, UpdateCustomerMutationVariables, UpdateCustomerProps<TChildProps, TDataName>>(
    UpdateCustomerDocument,
    {
      alias: 'updateCustomer',
      ...operationOptions,
    },
  )
}

/**
 * __useUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerMutation, { data, loading, error }] = useUpdateCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument, options)
}
export type UpdateCustomerMutationHookResult = ReturnType<typeof useUpdateCustomerMutation>
export type UpdateCustomerMutationResult = Apollo.MutationResult<UpdateCustomerMutation>
export type UpdateCustomerMutationOptions = Apollo.BaseMutationOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>
export const HomepageDocument = gql`
  query homepage {
    homepage {
      data {
        id
        attributes {
          hero {
            ...Card
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${CardFragmentDoc}
  ${FileFragmentDoc}
  ${SeoFragmentDoc}
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
export const MeDocument = gql`
  query me {
    me {
      id
      createdAt
      firstName
      updatedAt
    }
  }
`
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>

export const MeComponent = (props: MeComponentProps) => <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />

export type MeProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<MeQuery, MeQueryVariables>
} & TChildProps
export function withMe<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps, TDataName>>,
) {
  return ApolloReactHoc.withQuery<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps, TDataName>>(MeDocument, {
    alias: 'me',
    ...operationOptions,
  })
}

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
export const NavigationDocument = gql`
  query navigation($slug: String!) {
    renderNavigation(navigationIdOrSlug: $slug, type: TREE) {
      ...Menu
    }
  }
  ${MenuFragmentDoc}
  ${MenuItemFragmentDoc}
`
export type NavigationComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<NavigationQuery, NavigationQueryVariables>, 'query'> &
  ({ variables: NavigationQueryVariables; skip?: boolean } | { skip: boolean })

export const NavigationComponent = (props: NavigationComponentProps) => (
  <ApolloReactComponents.Query<NavigationQuery, NavigationQueryVariables> query={NavigationDocument} {...props} />
)

export type NavigationProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<NavigationQuery, NavigationQueryVariables>
} & TChildProps
export function withNavigation<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, NavigationQuery, NavigationQueryVariables, NavigationProps<TChildProps, TDataName>>,
) {
  return ApolloReactHoc.withQuery<TProps, NavigationQuery, NavigationQueryVariables, NavigationProps<TChildProps, TDataName>>(NavigationDocument, {
    alias: 'navigation',
    ...operationOptions,
  })
}

/**
 * __useNavigationQuery__
 *
 * To run a query within a React component, call `useNavigationQuery` and pass it any options that fit your needs.
 * When your component renders, `useNavigationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNavigationQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useNavigationQuery(baseOptions: Apollo.QueryHookOptions<NavigationQuery, NavigationQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<NavigationQuery, NavigationQueryVariables>(NavigationDocument, options)
}
export function useNavigationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NavigationQuery, NavigationQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<NavigationQuery, NavigationQueryVariables>(NavigationDocument, options)
}
export type NavigationQueryHookResult = ReturnType<typeof useNavigationQuery>
export type NavigationLazyQueryHookResult = ReturnType<typeof useNavigationLazyQuery>
export type NavigationQueryResult = Apollo.QueryResult<NavigationQuery, NavigationQueryVariables>
