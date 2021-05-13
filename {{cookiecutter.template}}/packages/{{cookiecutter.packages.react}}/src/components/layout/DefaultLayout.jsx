"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultLayout = void 0;
var antd_1 = require("antd");
var Logo_1 = require("../logo/Logo");
var TopNavigation_1 = require("../menu/TopNavigation");
var react_router_dom_1 = require("react-router-dom");
var DefaultLayout = function () { return (<antd_1.Layout style={{ minHeight: '100vh', width: '100%' }}>
    <antd_1.Layout.Header>
      <antd_1.Space align={'center'} size={'large'} direction={'horizontal'}>
        <Logo_1.Logo />
        <TopNavigation_1.TopNavigation />
      </antd_1.Space>
    </antd_1.Layout.Header>
    <antd_1.Layout.Content style={{ padding: 50 }}>
      <antd_1.Breadcrumb style={{ margin: '16px 0' }}>
        <antd_1.Breadcrumb.Item>Home</antd_1.Breadcrumb.Item>
      </antd_1.Breadcrumb>
      <react_router_dom_1.Outlet />
    </antd_1.Layout.Content>
    <antd_1.Layout.Footer style={{ textAlign: 'center' }}>App ©{new Date().getFullYear()}</antd_1.Layout.Footer>
  </antd_1.Layout>); };
exports.DefaultLayout = DefaultLayout;
