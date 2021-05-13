"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopNavigation = void 0;
var antd_1 = require("antd");
var Routing_1 = require("../../containers/Routing");
var TopMenu = function (_a) {
    var children = _a.children;
    return (<antd_1.Menu theme={'dark'} mode='horizontal'>
    {children}
  </antd_1.Menu>);
};
var TopNavigation = Routing_1.withNavigation(TopMenu);
exports.TopNavigation = TopNavigation;
