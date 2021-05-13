"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
var antd_1 = require("antd");
require("./UI.less");
var UI = function (_a) {
    var children = _a.children;
    return <antd_1.ConfigProvider prefixCls={'app'}>{children}</antd_1.ConfigProvider>;
};
exports.UI = UI;
