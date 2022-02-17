import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
export type CardFragment = { id: string, title?: string | null, subtitle?: string | null, description?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null };

export type EntryFragment = { id: string, key?: string | null, value: string };

export type FileFragment = { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null };

export type LinkFragment = { id: string, title?: string | null, url: string };

export type MenuFragment = { id: string, children: Array<{ id: string, title?: string | null, url: string } | null> };

export type SeoFragment = { id: string, canonicalURL?: string | null, keywords?: string | null, metaTitle: string, metaViewport?: string | null, metaDescription?: string | null };

export type ParagraphFragment = { id: string, value: string };

export type TabFragment = { id: string, name: string, pane: { id: string, title?: string | null, subtitle?: string | null, description?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } };

export type ContactUsFragment = { id: string, pathname: string, hero?: { subtitle?: string | null, id: string, description?: string | null, title?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null };

export type HomeFragment = { id: string, pathname: string, hero?: { subtitle?: string | null, id: string, description?: string | null, title?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null };

export type WebsiteFragment = { content?: Array<{ __typename: 'ComponentPageContactUs', id: string, pathname: string, hero?: { subtitle?: string | null, id: string, description?: string | null, title?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null } | { __typename: 'ComponentPageHome', id: string, pathname: string, hero?: { subtitle?: string | null, id: string, description?: string | null, title?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null } | { __typename: 'Error' } | null> | null };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { forgotPassword?: { ok: boolean } | null };

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type LoginMutation = { login: { jwt?: string | null } };

export type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput;
}>;


export type RegisterMutation = { register: { jwt?: string | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: { email: string, createdAt?: Date | null, updatedAt?: Date | null, customer?: { data?: { id?: string | null } | null } | null } | null };

export type WebsiteQueryVariables = Exact<{ [key: string]: never; }>;


export type WebsiteQuery = { website?: { data?: { id?: string | null, attributes?: { content?: Array<{ __typename: 'ComponentPageContactUs', id: string, pathname: string, hero?: { subtitle?: string | null, id: string, description?: string | null, title?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null } | { __typename: 'ComponentPageHome', id: string, pathname: string, hero?: { subtitle?: string | null, id: string, description?: string | null, title?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null } | { __typename: 'Error' } | null> | null } | null } | null } | null };

export const EntryFragmentDoc = gql`
    fragment Entry on ComponentDataEntry {
  id
  key
  value
}
    `;
export const LinkFragmentDoc = gql`
    fragment Link on ComponentUiLink {
  id
  title
  url
}
    `;
export const MenuFragmentDoc = gql`
    fragment Menu on ComponentUiMenu {
  id
  children {
    ...Link
  }
}
    `;
export const SeoFragmentDoc = gql`
    fragment Seo on ComponentSharedSeo {
  id
  canonicalURL
  keywords
  metaTitle
  metaViewport
  metaDescription
}
    `;
export const ParagraphFragmentDoc = gql`
    fragment Paragraph on ComponentUiParagraph {
  id
  value
}
    `;
export const FileFragmentDoc = gql`
    fragment File on UploadFileEntity {
  id
  attributes {
    previewUrl
    url
  }
}
    `;
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
    `;
export const TabFragmentDoc = gql`
    fragment Tab on ComponentUiTab {
  id
  name
  pane {
    ...Card
  }
}
    `;
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
}
    `;
export const ContactUsFragmentDoc = gql`
    fragment ContactUs on ComponentPageContactUs {
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
}
    `;
export const WebsiteFragmentDoc = gql`
    fragment Website on Website {
  content {
    __typename
    ...Home
    ...ContactUs
  }
}
    `;
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ok
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export type ForgotPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>, 'mutation'>;

    export const ForgotPasswordComponent = (props: ForgotPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables> mutation={ForgotPasswordDocument} {...props} />
    );
    

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    jwt
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    email
    createdAt
    updatedAt
    customer {
      data {
        id
      }
    }
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const WebsiteDocument = gql`
    query website {
  website {
    data {
      id
      attributes {
        ...Website
      }
    }
  }
}
    ${WebsiteFragmentDoc}
${HomeFragmentDoc}
${FileFragmentDoc}
${ContactUsFragmentDoc}`;
export type WebsiteComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<WebsiteQuery, WebsiteQueryVariables>, 'query'>;

    export const WebsiteComponent = (props: WebsiteComponentProps) => (
      <ApolloReactComponents.Query<WebsiteQuery, WebsiteQueryVariables> query={WebsiteDocument} {...props} />
    );
    

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WebsiteQuery, WebsiteQueryVariables>(WebsiteDocument, options);
      }
export function useWebsiteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WebsiteQuery, WebsiteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WebsiteQuery, WebsiteQueryVariables>(WebsiteDocument, options);
        }
export type WebsiteQueryHookResult = ReturnType<typeof useWebsiteQuery>;
export type WebsiteLazyQueryHookResult = ReturnType<typeof useWebsiteLazyQuery>;
export type WebsiteQueryResult = Apollo.QueryResult<WebsiteQuery, WebsiteQueryVariables>;