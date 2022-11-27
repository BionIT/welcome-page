"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./app.css");
var _eui = require("@elastic/eui");
var _opensearch_mark_default = _interopRequireDefault(require("./opensearch_mark_default.svg"));
require("@elastic/eui/dist/eui_theme_light.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_eui.EuiEmptyPrompt, {
    icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: _opensearch_mark_default["default"],
      alt: "",
      width: 40
    }),
    title: /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
      children: "Welcome"
    }),
    body: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: "OpenSearch Playground serves as a live demo environment of OpenSearch and OpenSearch Dashboards where you can explore OpenSearch"
    }),
    actions: /*#__PURE__*/(0, _jsxRuntime.jsx)(_eui.EuiButton, {
      color: "primary",
      fill: true,
      children: "Explore"
    }),
    footer: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_eui.EuiTitle, {
        size: "xxs",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "Want to learn more?"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_eui.EuiLink, {
        href: "https://github.com/opensearch-project/dashboards-anywhere",
        target: "_blank",
        children: "Checkout the code base"
      })]
    })
  });
}
var _default = App;
exports["default"] = _default;