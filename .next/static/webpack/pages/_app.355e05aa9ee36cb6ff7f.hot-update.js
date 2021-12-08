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
}
_c3 = Page;
Page.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlLmpzIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiSW5uZXJTdHlsZXMiLCJzdHlsZWQiLCJkaXYiLCJQYWdlIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImFycmF5T2YiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsMkVBQUgsZ3hCQUFsQjtLQUFNRCxZO0FBd0NOLElBQU1FLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2REFBakI7TUFBTUYsVztBQU1TLFNBQVNHLElBQVQsT0FBNEI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDekMsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLFdBQUQ7QUFBQSxzQkFBZUEsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EO01BUnVCRCxJO0FBVXhCQSxJQUFJLENBQUNFLFNBQUwsR0FBaUI7QUFDZkQsVUFBUSxFQUFFRSxpREFBUyxDQUFDQyxLQUFWLENBQWdCLENBQ3hCRCxpREFBUyxDQUFDRSxPQUFWLENBQWtCRixpREFBUyxDQUFDRyxJQUE1QixDQUR3QixFQUV4QkgsaURBQVMsQ0FBQ0csSUFGYyxDQUFoQjtBQURLLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzU1ZTA1YWE5ZWUzNmNiNmZmN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAncmFkbmlrYV9uZXh0JyA7XHJcbiAgc3JjOiB1cmwoJy9zdGF0aWMvcmFkbmlrYW5leHQtbWVkaXVtLXdlYmZvbnQud29mZjInKWZvcm1hdCgnd29mZjInKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5odG1sIHtcclxuICAtLXJlZDojZmYwMDAwO1xyXG4gIC0tYmxhY2s6ICMzOTM5Mzk7XHJcbiAgLS1ncmF5OiAjM2EzYTNhO1xyXG4gIC0tbGlnaHRHcmF5OiAjZTFlMWUxO1xyXG4gIC0tb2ZmV2hpdGU6ICNlZGVkZWQ7XHJcbiAgLS1tYXhXaWR0aDogMTAwMHB4O1xyXG4gIC0tYnM6IDAgMTJweCAyNHB4IDAgcmdiYSgwLDAsMCwwLjA5KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6aW5oZXJpdDtcclxufVxyXG5ib2R5e1xyXG4gIGZvbnQtZmFtaWx5OiAncmFkbmlrYV9uZXh0JywtLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxyXG4gIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOjEuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgfVxyXG4gIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ3JhZG5pa2FfbmV4dCcsLS1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxyXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG59YDtcclxuXHJcbmNvbnN0IElubmVyU3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IHZhcigtLW1heFdpZHRoKTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxJbm5lclN0eWxlcz4ge2NoaWxkcmVufTwvSW5uZXJTdHlsZXM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5QYWdlLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcclxuICAgIFByb3BUeXBlcy5ub2RlLFxyXG4gIF0pLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9