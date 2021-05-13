"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reportWebVitals = function (onPerfEntry) {
    if (onPerfEntry) {
        Promise.resolve().then(function () { return require('web-vitals'); }).then(function (_a) {
            var getCLS = _a.getCLS, getFID = _a.getFID, getFCP = _a.getFCP, getLCP = _a.getLCP, getTTFB = _a.getTTFB;
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};
exports.default = reportWebVitals;
