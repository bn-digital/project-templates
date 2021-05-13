"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withNavigation = exports.Routing = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var DefaultLayout_1 = require("../components/layout/DefaultLayout");
var antd_1 = require("antd");
var Home = react_1.lazy(function () { return Promise.resolve().then(function () { return require('./../pages/home'); }); });
var ContactUs = react_1.lazy(function () { return Promise.resolve().then(function () { return require('../pages/contact-us'); }); });
var routeMap = {
    '/': {
        component: Home,
        name: 'Home',
    },
    '/contact-us': {
        component: ContactUs,
        name: 'Contact Us',
    },
};
function withNavigation(Wrapped) {
    return function (props) {
        var pathname = react_router_dom_1.useLocation().pathname;
        return (<Wrapped {...props} defaultSelectedKeys={[pathname !== null && pathname !== void 0 ? pathname : '/']}>
        {Object.entries(routeMap).map(function (_a) {
                var path = _a[0], name = _a[1].name;
                return (<antd_1.Menu.Item key={path}>
            <react_router_dom_1.NavLink to={path}>{name}</react_router_dom_1.NavLink>
          </antd_1.Menu.Item>);
            })}
      </Wrapped>);
    };
}
exports.withNavigation = withNavigation;
function withRoutes(Wrapped) {
    return function (props) { return (<Wrapped {...props}>
      {Object.entries(routeMap).map(function (_a) {
            var path = _a[0], component = _a[1].component;
            var Page = component;
            return <react_router_dom_1.Route key={path} path={path} element={<Page />}/>;
        })}
    </Wrapped>); };
}
var InnerRouter = function (_a) {
    var children = _a.children;
    return (<react_router_dom_1.Routes>
    <react_router_dom_1.Route path={''} element={<DefaultLayout_1.DefaultLayout />}>
      {children}
    </react_router_dom_1.Route>
  </react_router_dom_1.Routes>);
};
var Routing = withRoutes(InnerRouter);
exports.Routing = Routing;
