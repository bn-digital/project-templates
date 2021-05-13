"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = require("react-dom");
var containers_1 = require("./containers");
var reportWebVitals_1 = require("./reportWebVitals");
var react_1 = require("@sentry/react");
var dsn = (_a = process.env.REACT_APP_SENTRY_DSN) !== null && _a !== void 0 ? _a : undefined;
dsn &&
    react_1.init({
        enabled: process.env.NODE_ENV === 'production',
        dsn: process.env.REACT_APP_SENTRY_DSN,
    });
var rootElement = window.document.getElementById('root');
react_dom_1.render(<containers_1.App />, rootElement);
reportWebVitals_1.default();
