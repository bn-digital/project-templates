"use strict";
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
exports.API = void 0;
var client_1 = require("@apollo/client");
var react_1 = require("react");
var context_1 = require("@apollo/client/link/context");
var API = function (_a) {
    var _b;
    var children = _a.children;
    var httpLink = client_1.createHttpLink({
        uri: ((_b = process.env.REACT_APP_API_URL) !== null && _b !== void 0 ? _b : '') + "/graphql",
    });
    var authLink = context_1.setContext(function (_, _a) {
        var headers = _a.headers;
        var token = localStorage.getItem('token');
        return {
            headers: __assign(__assign({}, headers), (token ? { authorization: token ? "Bearer " + token : '' } : {})),
        };
    });
    var client = react_1.useMemo(function () {
        return new client_1.ApolloClient({
            link: authLink.concat(httpLink),
            cache: new client_1.InMemoryCache({ addTypename: true }),
            connectToDevTools: process.env.NODE_ENV !== 'production',
        });
    }, [httpLink]);
    return <client_1.ApolloProvider client={client}>{children}</client_1.ApolloProvider>;
};
exports.API = API;
