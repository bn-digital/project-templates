"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
var antd_1 = require("antd");
var react_google_login_1 = require("react-google-login");
var ahooks_1 = require("ahooks");
var Home = function (_a) {
    var children = _a.children;
    var _b = ahooks_1.useLocalStorageState('token'), setToken = _b[1];
    var responseGoogle = function (response) {
        if (response.accessToken) {
            fetch(process.env.REACT_APP_API_URL + "/auth/google/callback?access_token=" + response.accessToken)
                .then(function (response) { return response.json(); })
                .then(function (response) { return setToken(response.jwt); });
        }
    };
    return (<antd_1.Layout>
      <react_google_login_1.default redirectUri={process.env.REACT_APP_API_URL + "/auth/google/callback"} clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} buttonText='Login' onSuccess={function (response) { return responseGoogle(response); }} onFailure={responseGoogle} cookiePolicy={'single_host_origin'}/>
      {children}
    </antd_1.Layout>);
};
exports.Home = Home;
