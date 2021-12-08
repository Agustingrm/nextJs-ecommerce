webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");

var _jsxFileName = "C:\\Users\\agust\\OneDrive\\Escritorio\\Web Bos Courses\\Advanced-React-master\\sick-fits\\frontend\\components\\Page.js";



var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(["@font-face{font-family:'radnika_next';src:url('/static/radnikanext-medium-webfont.woff2')format('woff2');font-weight:normal;font-style:normal;}html{--red:#ff0000;--black:#393939;--gray:#3a3a3a;--lightGray:#e1e1e1;--offWhite:#ededed;--maxWidth:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}body{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:2;a{text-decoration:none;color:var(--black);}a:hover{text-decoration:underline;}button{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}}"]);
_c = GlobalStyles;
var InnerStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-4u7a64-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);
_c2 = InnerStyles;
function Page(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnerStyles, {
      children: [" ", children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
} // Page.propTypes = {
//   children: PropTypes.oneOf([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]),
// };

_c3 = Page;

var _c, _c2, _c3;

$RefreshReg$(_c, "GlobalStyles");
$RefreshReg$(_c2, "InnerStyles");
$RefreshReg$(_c3, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlLmpzIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiSW5uZXJTdHlsZXMiLCJzdHlsZWQiLCJkaXYiLCJQYWdlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQywyRUFBSCxneEJBQWxCO0tBQU1ELFk7QUF3Q04sSUFBTUUsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZEQUFqQjtNQUFNRixXO0FBTVMsU0FBU0csSUFBVCxPQUE0QjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN6QyxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsV0FBRDtBQUFBLHNCQUFlQSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7TUFmd0JELEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41ZjY2MDhhZmIxMmEyNTZmMzgzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdyYWRuaWthX25leHQnIDtcclxuICBzcmM6IHVybCgnL3N0YXRpYy9yYWRuaWthbmV4dC1tZWRpdW0td2ViZm9udC53b2ZmMicpZm9ybWF0KCd3b2ZmMicpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcbmh0bWwge1xyXG4gIC0tcmVkOiNmZjAwMDA7XHJcbiAgLS1ibGFjazogIzM5MzkzOTtcclxuICAtLWdyYXk6ICMzYTNhM2E7XHJcbiAgLS1saWdodEdyYXk6ICNlMWUxZTE7XHJcbiAgLS1vZmZXaGl0ZTogI2VkZWRlZDtcclxuICAtLW1heFdpZHRoOiAxMDAwcHg7XHJcbiAgLS1iczogMCAxMnB4IDI0cHggMCByZ2JhKDAsMCwwLDAuMDkpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XHJcbiAgYm94LXNpemluZzppbmhlcml0O1xyXG59XHJcbmJvZHl7XHJcbiAgZm9udC1mYW1pbHk6ICdyYWRuaWthX25leHQnLC0tYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXHJcbiAgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6MS41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAncmFkbmlrYV9uZXh0JywtLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXHJcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbn1gO1xyXG5cclxuY29uc3QgSW5uZXJTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogdmFyKC0tbWF4V2lkdGgpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPElubmVyU3R5bGVzPiB7Y2hpbGRyZW59PC9Jbm5lclN0eWxlcz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIFBhZ2UucHJvcFR5cGVzID0ge1xyXG4vLyAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2YoW1xyXG4vLyAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxyXG4vLyAgICAgUHJvcFR5cGVzLm5vZGUsXHJcbi8vICAgXSksXHJcbi8vIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=