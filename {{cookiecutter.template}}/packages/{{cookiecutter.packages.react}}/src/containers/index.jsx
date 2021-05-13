"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.Loader = void 0;
var react_1 = require("react");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var UI_1 = require("./UI");
var API_1 = require("./API");
var Routing_1 = require("./Routing");
var CMS_1 = require("./CMS");
var Loader = function () { return (<antd_1.Row justify={'center'} style={{ minHeight: '100vh' }} align={'middle'}>
    <antd_1.Spin />
  </antd_1.Row>); };
exports.Loader = Loader;
var App = function (_a) {
    var children = _a.children;
    return (<API_1.API>
    <CMS_1.CMS>
      <UI_1.UI>
        <react_router_dom_1.BrowserRouter>
          <react_1.Suspense fallback={<exports.Loader />}>
            <Routing_1.Routing>{children}</Routing_1.Routing>
          </react_1.Suspense>
        </react_router_dom_1.BrowserRouter>
      </UI_1.UI>
    </CMS_1.CMS>
  </API_1.API>);
};
exports.App = App;
