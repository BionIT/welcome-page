"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./app.css");
var _jsxRuntime = require("react/jsx-runtime");
function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "App",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
      className: "App-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: "Welcome to OpenSearch Playground"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        className: "Playground-link",
        href: "https://github.com/opensearch-project/dashboards-anywhere",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Playground github link"
      })]
    })
  });
}
var _default = App;
exports["default"] = _default;