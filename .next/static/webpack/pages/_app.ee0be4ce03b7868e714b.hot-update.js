webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ "./node_modules/@apollo/link-error/lib/bundle.esm.js");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react/ssr */ "./node_modules/@apollo/client/react/ssr/index.js");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-upload-client */ "./node_modules/apollo-upload-client/public/index.mjs");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");







function createClient(_ref) {
  var headers = _ref.headers,
      initialState = _ref.initialState;
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].from([Object(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__["onError"])(function (_ref2) {
      var graphQLErrors = _ref2.graphQLErrors,
          networkError = _ref2.networkError;
      if (graphQLErrors) graphQLErrors.forEach(function (_ref3) {
        var message = _ref3.message,
            locations = _ref3.locations,
            path = _ref3.path;
        return console.log("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path));
      });
      if (networkError) console.log("[Network error]: ".concat(networkError, ". Backend is unreachable. Is it running?"));
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__["createUploadLink"])({
      uri: true ? _config__WEBPACK_IMPORTED_MODULE_5__["endpoint"] : undefined,
      fetchOptions: {
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers: headers
    })]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            allProducts: paginationField()
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(createClient, {
  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__["getDataFromTree"]
}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3dpdGhEYXRhLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImhlYWRlcnMiLCJpbml0aWFsU3RhdGUiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiQXBvbGxvTGluayIsImZyb20iLCJvbkVycm9yIiwiZ3JhcGhRTEVycm9ycyIsIm5ldHdvcmtFcnJvciIsImZvckVhY2giLCJtZXNzYWdlIiwibG9jYXRpb25zIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVVcGxvYWRMaW5rIiwidXJpIiwiZW5kcG9pbnQiLCJwcm9kRW5kcG9pbnQiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwiYWxsUHJvZHVjdHMiLCJwYWdpbmF0aW9uRmllbGQiLCJyZXN0b3JlIiwid2l0aEFwb2xsbyIsImdldERhdGFGcm9tVHJlZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxPQUFpRDtBQUFBLE1BQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQy9DLFNBQU8sSUFBSUMsMkRBQUosQ0FBaUI7QUFDdEJDLFFBQUksRUFBRUMseURBQVUsQ0FBQ0MsSUFBWCxDQUFnQixDQUNwQkMsa0VBQU8sQ0FBQyxpQkFBcUM7QUFBQSxVQUFsQ0MsYUFBa0MsU0FBbENBLGFBQWtDO0FBQUEsVUFBbkJDLFlBQW1CLFNBQW5CQSxZQUFtQjtBQUMzQyxVQUFJRCxhQUFKLEVBQ0VBLGFBQWEsQ0FBQ0UsT0FBZCxDQUFzQjtBQUFBLFlBQUdDLE9BQUgsU0FBR0EsT0FBSDtBQUFBLFlBQVlDLFNBQVosU0FBWUEsU0FBWjtBQUFBLFlBQXVCQyxJQUF2QixTQUF1QkEsSUFBdkI7QUFBQSxlQUNwQkMsT0FBTyxDQUFDQyxHQUFSLHFDQUMrQkosT0FEL0IseUJBQ3FEQyxTQURyRCxxQkFDeUVDLElBRHpFLEVBRG9CO0FBQUEsT0FBdEI7QUFLRixVQUFJSixZQUFKLEVBQ0VLLE9BQU8sQ0FBQ0MsR0FBUiw0QkFDc0JOLFlBRHRCO0FBR0gsS0FYTSxDQURhLEVBYXBCO0FBQ0FPLGlGQUFnQixDQUFDO0FBQ2ZDLFNBQUcsRUFBRSxPQUF5Q0MsZ0RBQXpDLEdBQW9EQyxTQUQxQztBQUVmQyxrQkFBWSxFQUFFO0FBQ1pDLG1CQUFXLEVBQUU7QUFERCxPQUZDO0FBS2Y7QUFDQXBCLGFBQU8sRUFBUEE7QUFOZSxLQUFELENBZEksQ0FBaEIsQ0FEZ0I7QUF3QnRCcUIsU0FBSyxFQUFFLElBQUlDLDREQUFKLENBQWtCO0FBQ3ZCQyxrQkFBWSxFQUFFO0FBQ1pDLGFBQUssRUFBRTtBQUNMQyxnQkFBTSxFQUFFO0FBQ047QUFDQUMsdUJBQVcsRUFBRUMsZUFBZTtBQUZ0QjtBQURIO0FBREs7QUFEUyxLQUFsQixFQVNKQyxPQVRJLENBU0kzQixZQUFZLElBQUksRUFUcEI7QUF4QmUsR0FBakIsQ0FBUDtBQW1DRDs7QUFFYzRCLHNIQUFVLENBQUM5QixZQUFELEVBQWU7QUFBRStCLGlCQUFlLEVBQWZBLHdFQUFlQTtBQUFqQixDQUFmLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWUwYmU0Y2UwM2I3ODY4ZTcxNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgQXBvbGxvTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tICdAYXBvbGxvL2xpbmstZXJyb3InO1xuaW1wb3J0IHsgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyJztcbmltcG9ydCB7IGNyZWF0ZVVwbG9hZExpbmsgfSBmcm9tICdhcG9sbG8tdXBsb2FkLWNsaWVudCc7XG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICduZXh0LXdpdGgtYXBvbGxvJztcbmltcG9ydCB7IGVuZHBvaW50LCBwcm9kRW5kcG9pbnQgfSBmcm9tICcuLi9jb25maWcnO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoeyBoZWFkZXJzLCBpbml0aWFsU3RhdGUgfSkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluazogQXBvbGxvTGluay5mcm9tKFtcbiAgICAgIG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yIH0pID0+IHtcbiAgICAgICAgaWYgKGdyYXBoUUxFcnJvcnMpXG4gICAgICAgICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PlxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgIGBbR3JhcGhRTCBlcnJvcl06IE1lc3NhZ2U6ICR7bWVzc2FnZX0sIExvY2F0aW9uOiAke2xvY2F0aW9uc30sIFBhdGg6ICR7cGF0aH1gXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgaWYgKG5ldHdvcmtFcnJvcilcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBbTmV0d29yayBlcnJvcl06ICR7bmV0d29ya0Vycm9yfS4gQmFja2VuZCBpcyB1bnJlYWNoYWJsZS4gSXMgaXQgcnVubmluZz9gXG4gICAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgLy8gdGhpcyB1c2VzIGFwb2xsby1saW5rLWh0dHAgdW5kZXIgdGhlIGhvb2QsIHNvIGFsbCB0aGUgb3B0aW9ucyBoZXJlIGNvbWUgZnJvbSB0aGF0IHBhY2thZ2VcbiAgICAgIGNyZWF0ZVVwbG9hZExpbmsoe1xuICAgICAgICB1cmk6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gZW5kcG9pbnQgOiBwcm9kRW5kcG9pbnQsXG4gICAgICAgIGZldGNoT3B0aW9uczoge1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHBhc3MgdGhlIGhlYWRlcnMgYWxvbmcgZnJvbSB0aGlzIHJlcXVlc3QuIFRoaXMgZW5hYmxlcyBTU1Igd2l0aCBsb2dnZWQgaW4gc3RhdGVcbiAgICAgICAgaGVhZGVycyxcbiAgICAgIH0pLFxuICAgIF0pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgICB0eXBlUG9saWNpZXM6IHtcbiAgICAgICAgUXVlcnk6IHtcbiAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgIC8vIFRPRE86IFdlIHdpbGwgYWRkIHRoaXMgdG9nZXRoZXIhXG4gICAgICAgICAgICBhbGxQcm9kdWN0czogcGFnaW5hdGlvbkZpZWxkKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSkucmVzdG9yZShpbml0aWFsU3RhdGUgfHwge30pLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhjcmVhdGVDbGllbnQsIHsgZ2V0RGF0YUZyb21UcmVlIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==