"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRegisterMutation = exports.withRegister = exports.RegisterComponent = exports.RegisterDocument = exports.useLoginMutation = exports.withLogin = exports.LoginComponent = exports.LoginDocument = exports.useCreateContactFormRequestMutation = exports.withCreateContactFormRequest = exports.CreateContactFormRequestComponent = exports.CreateContactFormRequestDocument = exports.useContentLazyQuery = exports.useContentQuery = exports.withContent = exports.ContentComponent = exports.ContentDocument = exports.SectionFragmentDoc = exports.DeckFragmentDoc = exports.CardFragmentDoc = exports.ButtonFragmentDoc = exports.PublicationState = exports.ContactType = void 0;
var client_1 = require("@apollo/client");
var React = require("react");
var Apollo = require("@apollo/client");
var ApolloReactComponents = require("@apollo/client/react/components");
var ApolloReactHoc = require("@apollo/client/react/hoc");
var defaultOptions = {};
var ContactType;
(function (ContactType) {
    ContactType["BusinessAddress"] = "BusinessAddress";
    ContactType["BusinessEmail"] = "BusinessEmail";
    ContactType["BusinessPhone"] = "BusinessPhone";
    ContactType["CareersEmail"] = "CareersEmail";
    ContactType["ContactEmail"] = "ContactEmail";
    ContactType["MobilePhone"] = "MobilePhone";
    ContactType["PersonalAddress"] = "PersonalAddress";
    ContactType["PersonalEmail"] = "PersonalEmail";
    ContactType["PersonalPhone"] = "PersonalPhone";
})(ContactType = exports.ContactType || (exports.ContactType = {}));
var PublicationState;
(function (PublicationState) {
    PublicationState["Live"] = "LIVE";
    PublicationState["Preview"] = "PREVIEW";
})(PublicationState = exports.PublicationState || (exports.PublicationState = {}));
exports.ButtonFragmentDoc = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment Button on ComponentAtomsButton {\n    id\n    title\n    url\n  }\n"], ["\n  fragment Button on ComponentAtomsButton {\n    id\n    title\n    url\n  }\n"])));
exports.CardFragmentDoc = client_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  fragment Card on ComponentMoleculesCard {\n    id\n    title\n    description\n    image {\n      id\n      image {\n        id\n        url\n        alternativeText\n        caption\n        name\n      }\n      background\n    }\n  }\n"], ["\n  fragment Card on ComponentMoleculesCard {\n    id\n    title\n    description\n    image {\n      id\n      image {\n        id\n        url\n        alternativeText\n        caption\n        name\n      }\n      background\n    }\n  }\n"])));
exports.DeckFragmentDoc = client_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fragment Deck on ComponentOrganismsDeck {\n    id\n    active\n    slug\n    cards {\n      ...Card\n    }\n  }\n  ", "\n"], ["\n  fragment Deck on ComponentOrganismsDeck {\n    id\n    active\n    slug\n    cards {\n      ...Card\n    }\n  }\n  ", "\n"])), exports.CardFragmentDoc);
exports.SectionFragmentDoc = client_1.gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  fragment Section on ComponentOrganismsSection {\n    id\n    slug\n    title\n    subTitle\n    description\n    active\n  }\n"], ["\n  fragment Section on ComponentOrganismsSection {\n    id\n    slug\n    title\n    subTitle\n    description\n    active\n  }\n"])));
exports.ContentDocument = client_1.gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  query content($criteria: JSON!) {\n    websites(where: $criteria) {\n      id\n      pages {\n        id\n      }\n      sections {\n        ... on ComponentOrganismsDeck {\n          id\n          cards {\n            ...Card\n          }\n        }\n        ... on ComponentOrganismsArticle {\n          id\n          section {\n            ...Section\n            ...Section\n          }\n        }\n        ... on ComponentOrganismsArticle {\n          id\n          section {\n            ...Section\n          }\n        }\n        ... on ComponentOrganismsHero {\n          id\n          button {\n            ...Button\n          }\n          section {\n            ...Section\n          }\n        }\n        ... on ComponentOrganismsCallToAction {\n          id\n          button {\n            ...Button\n          }\n          section {\n            ...Section\n          }\n        }\n      }\n      navigation {\n        id\n        slug\n        links {\n          id\n          title\n          url\n        }\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n"], ["\n  query content($criteria: JSON!) {\n    websites(where: $criteria) {\n      id\n      pages {\n        id\n      }\n      sections {\n        ... on ComponentOrganismsDeck {\n          id\n          cards {\n            ...Card\n          }\n        }\n        ... on ComponentOrganismsArticle {\n          id\n          section {\n            ...Section\n            ...Section\n          }\n        }\n        ... on ComponentOrganismsArticle {\n          id\n          section {\n            ...Section\n          }\n        }\n        ... on ComponentOrganismsHero {\n          id\n          button {\n            ...Button\n          }\n          section {\n            ...Section\n          }\n        }\n        ... on ComponentOrganismsCallToAction {\n          id\n          button {\n            ...Button\n          }\n          section {\n            ...Section\n          }\n        }\n      }\n      navigation {\n        id\n        slug\n        links {\n          id\n          title\n          url\n        }\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), exports.CardFragmentDoc, exports.SectionFragmentDoc, exports.ButtonFragmentDoc);
var ContentComponent = function (props) { return (<ApolloReactComponents.Query query={exports.ContentDocument} {...props}/>); };
exports.ContentComponent = ContentComponent;
function withContent(operationOptions) {
    return ApolloReactHoc.withQuery(exports.ContentDocument, __assign({ alias: 'content' }, operationOptions));
}
exports.withContent = withContent;
/**
 * __useContentQuery__
 *
 * To run a query within a React component, call `useContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentQuery({
 *   variables: {
 *      criteria: // value for 'criteria'
 *   },
 * });
 */
function useContentQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ContentDocument, options);
}
exports.useContentQuery = useContentQuery;
function useContentLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ContentDocument, options);
}
exports.useContentLazyQuery = useContentLazyQuery;
exports.CreateContactFormRequestDocument = client_1.gql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  mutation createContactFormRequest($input: createContactFormRequestInput) {\n    createContactFormRequest(input: $input) {\n      contactFormRequest {\n        id\n        email\n        city\n        firstName\n        lastName\n      }\n    }\n  }\n"], ["\n  mutation createContactFormRequest($input: createContactFormRequestInput) {\n    createContactFormRequest(input: $input) {\n      contactFormRequest {\n        id\n        email\n        city\n        firstName\n        lastName\n      }\n    }\n  }\n"])));
var CreateContactFormRequestComponent = function (props) { return (<ApolloReactComponents.Mutation mutation={exports.CreateContactFormRequestDocument} {...props}/>); };
exports.CreateContactFormRequestComponent = CreateContactFormRequestComponent;
function withCreateContactFormRequest(operationOptions) {
    return ApolloReactHoc.withMutation(exports.CreateContactFormRequestDocument, __assign({ alias: 'createContactFormRequest' }, operationOptions));
}
exports.withCreateContactFormRequest = withCreateContactFormRequest;
/**
 * __useCreateContactFormRequestMutation__
 *
 * To run a mutation, you first call `useCreateContactFormRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContactFormRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContactFormRequestMutation, { data, loading, error }] = useCreateContactFormRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useCreateContactFormRequestMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.CreateContactFormRequestDocument, options);
}
exports.useCreateContactFormRequestMutation = useCreateContactFormRequestMutation;
exports.LoginDocument = client_1.gql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  mutation login($credentials: UsersPermissionsLoginInput!) {\n    login(input: $credentials) {\n      jwt\n    }\n  }\n"], ["\n  mutation login($credentials: UsersPermissionsLoginInput!) {\n    login(input: $credentials) {\n      jwt\n    }\n  }\n"])));
var LoginComponent = function (props) { return (<ApolloReactComponents.Mutation mutation={exports.LoginDocument} {...props}/>); };
exports.LoginComponent = LoginComponent;
function withLogin(operationOptions) {
    return ApolloReactHoc.withMutation(exports.LoginDocument, __assign({ alias: 'login' }, operationOptions));
}
exports.withLogin = withLogin;
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
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
function useLoginMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.LoginDocument, options);
}
exports.useLoginMutation = useLoginMutation;
exports.RegisterDocument = client_1.gql(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  mutation register($user: UsersPermissionsRegisterInput!) {\n    register(input: $user) {\n      user {\n        id\n        email\n        username\n      }\n    }\n  }\n"], ["\n  mutation register($user: UsersPermissionsRegisterInput!) {\n    register(input: $user) {\n      user {\n        id\n        email\n        username\n      }\n    }\n  }\n"])));
var RegisterComponent = function (props) { return (<ApolloReactComponents.Mutation mutation={exports.RegisterDocument} {...props}/>); };
exports.RegisterComponent = RegisterComponent;
function withRegister(operationOptions) {
    return ApolloReactHoc.withMutation(exports.RegisterDocument, __assign({ alias: 'register' }, operationOptions));
}
exports.withRegister = withRegister;
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
 *      user: // value for 'user'
 *   },
 * });
 */
function useRegisterMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.RegisterDocument, options);
}
exports.useRegisterMutation = useRegisterMutation;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
