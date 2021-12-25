webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return paginationField; });
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");

function paginationField() {
  return {
    keyArgs: false,
    // tells apollo we will take care of everything
    read: function read() {
      var _data$_allProductsMet;

      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _ref = arguments.length > 1 ? arguments[1] : undefined,
          args = _ref.args,
          cache = _ref.cache;

      var skip = args.skip,
          first = args.first; // Read the number of items on the page from the cache

      var data = cache.readQuery({
        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__["PAGINATION_QUERY"]
      });
      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;
      var page = skip / first + 1;
      var pages = Math.ceil(count / first); // Check if we have existing items

      var items = existing.slice(skip, skip + first).filter(function (x) {
        return x;
      });

      if (items.length !== first) {
        // We don't have any items, we must go to the network to fetch them
        return false;
      } // If there are items, just return them from the cache, and we don't need to go the network


      if (items.length) {
        console.log("There are ".concat(items.length, " items in the cache. Sending them to apollo"));
        return items;
      }

      return false; // Fallback to network
      // First thing it does it asks the read funciton for those items
      // We can either do one of two things
      // First thing we can do is return the items because they are already in the cache
      // The other thing we can do is to return false from here (network request)
    },
    merge: function merge(existing, incoming, _ref2) {
      var args = _ref2.args;
      var skip = args.skip,
          first = args.first; // This runs when the Apollo client comes back from the network with our product

      console.log("Merging items from the network ".concat(incoming.length));
      var merged = existing ? existing.slice(0) : [];

      for (var i = skip; i < skip + incoming.length; i++) {
        merged[i] = incoming[i - skip];
      }

      console.log(merged); // Finally we return the merged items from the cache,

      return merged;
    }
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwic2tpcCIsImZpcnN0IiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiUEFHSU5BVElPTl9RVUVSWSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiaXRlbXMiLCJzbGljZSIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibWVyZ2UiLCJpbmNvbWluZyIsIm1lcmdlZCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLGVBQVQsR0FBMkI7QUFDeEMsU0FBTztBQUNMQyxXQUFPLEVBQUUsS0FESjtBQUNXO0FBQ2hCQyxRQUZLLGtCQUVnQztBQUFBOztBQUFBLFVBQWhDQyxRQUFnQyx1RUFBckIsRUFBcUI7O0FBQUE7QUFBQSxVQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxVQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsVUFDM0JDLElBRDJCLEdBQ1hGLElBRFcsQ0FDM0JFLElBRDJCO0FBQUEsVUFDckJDLEtBRHFCLEdBQ1hILElBRFcsQ0FDckJHLEtBRHFCLEVBRW5DOztBQUNBLFVBQU1DLElBQUksR0FBR0gsS0FBSyxDQUFDSSxTQUFOLENBQWdCO0FBQUVDLGFBQUssRUFBRUMsdUVBQWdCQTtBQUF6QixPQUFoQixDQUFiO0FBQ0EsVUFBTUMsS0FBSyxHQUFHSixJQUFILGFBQUdBLElBQUgsZ0RBQUdBLElBQUksQ0FBRUssZ0JBQVQsMERBQUcsc0JBQXdCRCxLQUF0QztBQUNBLFVBQU1FLElBQUksR0FBR1IsSUFBSSxHQUFHQyxLQUFQLEdBQWUsQ0FBNUI7QUFDQSxVQUFNUSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxLQUFLLEdBQUdMLEtBQWxCLENBQWQsQ0FObUMsQ0FRbkM7O0FBQ0EsVUFBTVcsS0FBSyxHQUFHZixRQUFRLENBQUNnQixLQUFULENBQWViLElBQWYsRUFBcUJBLElBQUksR0FBR0MsS0FBNUIsRUFBbUNhLE1BQW5DLENBQTBDLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFQO0FBQUEsT0FBMUMsQ0FBZDs7QUFDQSxVQUFJSCxLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQXJCLEVBQTRCO0FBQzFCO0FBQ0EsZUFBTyxLQUFQO0FBQ0QsT0Fia0MsQ0FlbkM7OztBQUNBLFVBQUlXLEtBQUssQ0FBQ0ksTUFBVixFQUFrQjtBQUNoQkMsZUFBTyxDQUFDQyxHQUFSLHFCQUNlTixLQUFLLENBQUNJLE1BRHJCO0FBR0EsZUFBT0osS0FBUDtBQUNEOztBQUVELGFBQU8sS0FBUCxDQXZCbUMsQ0F1QnJCO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDRCxLQTlCSTtBQStCTE8sU0EvQkssaUJBK0JDdEIsUUEvQkQsRUErQld1QixRQS9CWCxTQStCK0I7QUFBQSxVQUFSdEIsSUFBUSxTQUFSQSxJQUFRO0FBQUEsVUFDMUJFLElBRDBCLEdBQ1ZGLElBRFUsQ0FDMUJFLElBRDBCO0FBQUEsVUFDcEJDLEtBRG9CLEdBQ1ZILElBRFUsQ0FDcEJHLEtBRG9CLEVBRWxDOztBQUNBZ0IsYUFBTyxDQUFDQyxHQUFSLDBDQUE4Q0UsUUFBUSxDQUFDSixNQUF2RDtBQUNBLFVBQU1LLE1BQU0sR0FBR3hCLFFBQVEsR0FBR0EsUUFBUSxDQUFDZ0IsS0FBVCxDQUFlLENBQWYsQ0FBSCxHQUF1QixFQUE5Qzs7QUFDQSxXQUFLLElBQUlTLENBQUMsR0FBR3RCLElBQWIsRUFBbUJzQixDQUFDLEdBQUd0QixJQUFJLEdBQUdvQixRQUFRLENBQUNKLE1BQXZDLEVBQStDTSxDQUFDLEVBQWhELEVBQW9EO0FBQ2xERCxjQUFNLENBQUNDLENBQUQsQ0FBTixHQUFZRixRQUFRLENBQUNFLENBQUMsR0FBR3RCLElBQUwsQ0FBcEI7QUFDRDs7QUFDRGlCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRyxNQUFaLEVBUmtDLENBU2xDOztBQUNBLGFBQU9BLE1BQVA7QUFDRDtBQTFDSSxHQUFQO0FBNENEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmJkNzMxZjFkODAxMTc2NGM4NWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBBR0lOQVRJT05fUVVFUlkgfSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGlvbkZpZWxkKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBrZXlBcmdzOiBmYWxzZSwgLy8gdGVsbHMgYXBvbGxvIHdlIHdpbGwgdGFrZSBjYXJlIG9mIGV2ZXJ5dGhpbmdcclxuICAgIHJlYWQoZXhpc3RpbmcgPSBbXSwgeyBhcmdzLCBjYWNoZSB9KSB7XHJcbiAgICAgIGNvbnN0IHsgc2tpcCwgZmlyc3QgfSA9IGFyZ3M7XHJcbiAgICAgIC8vIFJlYWQgdGhlIG51bWJlciBvZiBpdGVtcyBvbiB0aGUgcGFnZSBmcm9tIHRoZSBjYWNoZVxyXG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZFF1ZXJ5KHsgcXVlcnk6IFBBR0lOQVRJT05fUVVFUlkgfSk7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gZGF0YT8uX2FsbFByb2R1Y3RzTWV0YT8uY291bnQ7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBza2lwIC8gZmlyc3QgKyAxO1xyXG4gICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb3VudCAvIGZpcnN0KTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgZXhpc3RpbmcgaXRlbXNcclxuICAgICAgY29uc3QgaXRlbXMgPSBleGlzdGluZy5zbGljZShza2lwLCBza2lwICsgZmlyc3QpLmZpbHRlcigoeCkgPT4geCk7XHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggIT09IGZpcnN0KSB7XHJcbiAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSBhbnkgaXRlbXMsIHdlIG11c3QgZ28gdG8gdGhlIG5ldHdvcmsgdG8gZmV0Y2ggdGhlbVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gSWYgdGhlcmUgYXJlIGl0ZW1zLCBqdXN0IHJldHVybiB0aGVtIGZyb20gdGhlIGNhY2hlLCBhbmQgd2UgZG9uJ3QgbmVlZCB0byBnbyB0aGUgbmV0d29ya1xyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBgVGhlcmUgYXJlICR7aXRlbXMubGVuZ3RofSBpdGVtcyBpbiB0aGUgY2FjaGUuIFNlbmRpbmcgdGhlbSB0byBhcG9sbG9gXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gRmFsbGJhY2sgdG8gbmV0d29ya1xyXG4gICAgICAvLyBGaXJzdCB0aGluZyBpdCBkb2VzIGl0IGFza3MgdGhlIHJlYWQgZnVuY2l0b24gZm9yIHRob3NlIGl0ZW1zXHJcbiAgICAgIC8vIFdlIGNhbiBlaXRoZXIgZG8gb25lIG9mIHR3byB0aGluZ3NcclxuICAgICAgLy8gRmlyc3QgdGhpbmcgd2UgY2FuIGRvIGlzIHJldHVybiB0aGUgaXRlbXMgYmVjYXVzZSB0aGV5IGFyZSBhbHJlYWR5IGluIHRoZSBjYWNoZVxyXG4gICAgICAvLyBUaGUgb3RoZXIgdGhpbmcgd2UgY2FuIGRvIGlzIHRvIHJldHVybiBmYWxzZSBmcm9tIGhlcmUgKG5ldHdvcmsgcmVxdWVzdClcclxuICAgIH0sXHJcbiAgICBtZXJnZShleGlzdGluZywgaW5jb21pbmcsIHsgYXJncyB9KSB7XHJcbiAgICAgIGNvbnN0IHsgc2tpcCwgZmlyc3QgfSA9IGFyZ3M7XHJcbiAgICAgIC8vIFRoaXMgcnVucyB3aGVuIHRoZSBBcG9sbG8gY2xpZW50IGNvbWVzIGJhY2sgZnJvbSB0aGUgbmV0d29yayB3aXRoIG91ciBwcm9kdWN0XHJcbiAgICAgIGNvbnNvbGUubG9nKGBNZXJnaW5nIGl0ZW1zIGZyb20gdGhlIG5ldHdvcmsgJHtpbmNvbWluZy5sZW5ndGh9YCk7XHJcbiAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nID8gZXhpc3Rpbmcuc2xpY2UoMCkgOiBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IHNraXA7IGkgPCBza2lwICsgaW5jb21pbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBtZXJnZWRbaV0gPSBpbmNvbWluZ1tpIC0gc2tpcF07XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2cobWVyZ2VkKTtcclxuICAgICAgLy8gRmluYWxseSB3ZSByZXR1cm4gdGhlIG1lcmdlZCBpdGVtcyBmcm9tIHRoZSBjYWNoZSxcclxuICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9