"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContent = exports.CMS = void 0;
var react_1 = require("react");
var index_1 = require("./index");
var fallback_json_1 = require("../graphql/fallback.json");
var graphql_1 = require("../graphql");
var Content = react_1.createContext(undefined);
var CMS = function (_a) {
    var children = _a.children;
    var _b = graphql_1.useContentQuery({ variables: { criteria: { slug: 'app' } } }), data = _b.data, loading = _b.loading;
    return loading ? <index_1.Loader /> : <Content.Provider value={data !== null && data !== void 0 ? data : fallback_json_1.default.data}>{children}</Content.Provider>;
};
exports.CMS = CMS;
var useContent = function () { return react_1.useContext(Content); };
exports.useContent = useContent;
