module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/order/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\agust\\OneDrive\\Escritorio\\Web Bos Courses\\Advanced-React-master\\sick-fits\\frontend\\components\\ErrorMessage.js";



const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorStyles, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        "data-test": "graphql-error",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Shoot!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), error.message.replace('GraphQL error: ', '')]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorStyles, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      "data-test": "graphql-error",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Shoot!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), error.message.replace('GraphQL error: ', '')]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/styles/OrderStyles.js":
/*!******************************************!*\
  !*** ./components/styles/OrderStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const OrderStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "OrderStyles",
  componentId: "sc-4oqalm-0"
})(["max-width:1000px;margin:0 auto;border:1px solid var(--offWhite);box-shadow:var(--bs);padding:2rem;border-top:10px solid red;& > p{display:grid;grid-template-columns:1fr 5fr;margin:0;border-bottom:1px solid var(--offWhite);span{padding:1rem;&:first-child{font-weight:900;text-align:right;}}}.order-item{border-bottom:1px solid var(--offWhite);display:grid;grid-template-columns:300px 1fr;align-items:center;grid-gap:2rem;margin:2rem 0;padding-bottom:2rem;img{width:100%;height:100%;object-fit:cover;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (OrderStyles);

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatMoney; });
function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // check if its a clean dollar amount

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('en-us', options);
  return formatter.format(amount / 100);
}

/***/ }),

/***/ "./node_modules/@apollo/client/cache/cache.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/@apollo/client/cache/cache.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "tslib");
var optimism = __webpack_require__(/*! optimism */ "optimism");
var utilities = __webpack_require__(/*! ../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var equality = __webpack_require__(/*! @wry/equality */ "@wry/equality");
var trie = __webpack_require__(/*! @wry/trie */ "@wry/trie");
var context = __webpack_require__(/*! @wry/context */ "@wry/context");

var ApolloCache = (function () {
    function ApolloCache() {
        this.getFragmentDoc = optimism.wrap(utilities.getFragmentQueryDocument);
    }
    ApolloCache.prototype.batch = function (options) {
        var _this = this;
        var optimisticId = typeof options.optimistic === "string" ? options.optimistic :
            options.optimistic === false ? null : void 0;
        var updateResult;
        this.performTransaction(function () { return updateResult = options.update(_this); }, optimisticId);
        return updateResult;
    };
    ApolloCache.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    };
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.identify = function (object) {
        return;
    };
    ApolloCache.prototype.gc = function () {
        return [];
    };
    ApolloCache.prototype.modify = function (options) {
        return false;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read(tslib.__assign(tslib.__assign({}, options), { rootId: options.id || 'ROOT_QUERY', optimistic: optimistic }));
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read(tslib.__assign(tslib.__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic: optimistic }));
    };
    ApolloCache.prototype.writeQuery = function (_a) {
        var id = _a.id, data = _a.data, options = tslib.__rest(_a, ["id", "data"]);
        return this.write(Object.assign(options, {
            dataId: id || 'ROOT_QUERY',
            result: data,
        }));
    };
    ApolloCache.prototype.writeFragment = function (_a) {
        var id = _a.id, data = _a.data, fragment = _a.fragment, fragmentName = _a.fragmentName, options = tslib.__rest(_a, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(options, {
            query: this.getFragmentDoc(fragment, fragmentName),
            dataId: id,
            result: data,
        }));
    };
    ApolloCache.prototype.updateQuery = function (options, update) {
        return this.batch({
            update: function (cache) {
                var value = cache.readQuery(options);
                var data = update(value);
                if (data === void 0 || data === null)
                    return value;
                cache.writeQuery(tslib.__assign(tslib.__assign({}, options), { data: data }));
                return data;
            },
        });
    };
    ApolloCache.prototype.updateFragment = function (options, update) {
        return this.batch({
            update: function (cache) {
                var value = cache.readFragment(options);
                var data = update(value);
                if (data === void 0 || data === null)
                    return value;
                cache.writeFragment(tslib.__assign(tslib.__assign({}, options), { data: data }));
                return data;
            },
        });
    };
    return ApolloCache;
}());

exports.Cache = void 0;
(function (Cache) {
})(exports.Cache || (exports.Cache = {}));

var MissingFieldError = (function () {
    function MissingFieldError(message, path, query, variables) {
        this.message = message;
        this.path = path;
        this.query = query;
        this.variables = variables;
    }
    return MissingFieldError;
}());

var hasOwn = Object.prototype.hasOwnProperty;
function defaultDataIdFromObject(_a, context) {
    var __typename = _a.__typename, id = _a.id, _id = _a._id;
    if (typeof __typename === "string") {
        if (context) {
            context.keyObject =
                id !== void 0 ? { id: id } :
                    _id !== void 0 ? { _id: _id } :
                        void 0;
        }
        if (id === void 0)
            id = _id;
        if (id !== void 0) {
            return "".concat(__typename, ":").concat((typeof id === "number" ||
                typeof id === "string") ? id : JSON.stringify(id));
        }
    }
}
var defaultConfig = {
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    canonizeResults: false,
};
function normalizeConfig(config) {
    return utilities.compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
    var value = config.canonizeResults;
    return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
    return utilities.isReference(objectOrReference)
        ? store.get(objectOrReference.__ref, "__typename")
        : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
    if (utilities.isNonNullObject(result)) {
        return Array.isArray(result)
            ? result.every(function (item) { return selectionSetMatchesResult(selectionSet, item, variables); })
            : selectionSet.selections.every(function (field) {
                if (utilities.isField(field) && utilities.shouldInclude(field, variables)) {
                    var key = utilities.resultKeyNameFromField(field);
                    return hasOwn.call(result, key) &&
                        (!field.selectionSet ||
                            selectionSetMatchesResult(field.selectionSet, result[key], variables));
                }
                return true;
            });
    }
    return false;
}
function storeValueIsStoreObject(value) {
    return utilities.isNonNullObject(value) &&
        !utilities.isReference(value) &&
        !Array.isArray(value);
}
function makeProcessedFieldsMerger() {
    return new utilities.DeepMerger;
}

var DELETE = Object.create(null);
var delModifier = function () { return DELETE; };
var INVALIDATE = Object.create(null);
exports.EntityStore = (function () {
    function EntityStore(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = Object.create(null);
        this.rootIds = Object.create(null);
        this.refs = Object.create(null);
        this.getFieldValue = function (objectOrReference, storeFieldName) { return utilities.maybeDeepFreeze(utilities.isReference(objectOrReference)
            ? _this.get(objectOrReference.__ref, storeFieldName)
            : objectOrReference && objectOrReference[storeFieldName]); };
        this.canRead = function (objOrRef) {
            return utilities.isReference(objOrRef)
                ? _this.has(objOrRef.__ref)
                : typeof objOrRef === "object";
        };
        this.toReference = function (objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") {
                return utilities.makeReference(objOrIdOrRef);
            }
            if (utilities.isReference(objOrIdOrRef)) {
                return objOrIdOrRef;
            }
            var id = _this.policies.identify(objOrIdOrRef)[0];
            if (id) {
                var ref = utilities.makeReference(id);
                if (mergeIntoStore) {
                    _this.merge(id, objOrIdOrRef);
                }
                return ref;
            }
        };
    }
    EntityStore.prototype.toObject = function () {
        return tslib.__assign({}, this.data);
    };
    EntityStore.prototype.has = function (dataId) {
        return this.lookup(dataId, true) !== void 0;
    };
    EntityStore.prototype.get = function (dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (hasOwn.call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && hasOwn.call(storeObject, fieldName)) {
                return storeObject[fieldName];
            }
        }
        if (fieldName === "__typename" &&
            hasOwn.call(this.policies.rootTypenamesById, dataId)) {
            return this.policies.rootTypenamesById[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.get(dataId, fieldName);
        }
    };
    EntityStore.prototype.lookup = function (dataId, dependOnExistence) {
        if (dependOnExistence)
            this.group.depend(dataId, "__exists");
        if (hasOwn.call(this.data, dataId)) {
            return this.data[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.lookup(dataId, dependOnExistence);
        }
        if (this.policies.rootTypenamesById[dataId]) {
            return Object.create(null);
        }
    };
    EntityStore.prototype.merge = function (older, newer) {
        var _this = this;
        var dataId;
        if (utilities.isReference(older))
            older = older.__ref;
        if (utilities.isReference(newer))
            newer = newer.__ref;
        var existing = typeof older === "string"
            ? this.lookup(dataId = older)
            : older;
        var incoming = typeof newer === "string"
            ? this.lookup(dataId = newer)
            : newer;
        if (!incoming)
            return;
        __DEV__ ? globals.invariant(typeof dataId === "string", "store.merge expects a string ID") : globals.invariant(typeof dataId === "string", 1);
        var merged = new utilities.DeepMerger(storeObjectReconciler).merge(existing, incoming);
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                var fieldsToDirty_1 = Object.create(null);
                if (!existing)
                    fieldsToDirty_1.__exists = 1;
                Object.keys(incoming).forEach(function (storeFieldName) {
                    if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                        fieldsToDirty_1[storeFieldName] = 1;
                        var fieldName = fieldNameFromStoreName(storeFieldName);
                        if (fieldName !== storeFieldName &&
                            !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                            fieldsToDirty_1[fieldName] = 1;
                        }
                        if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                            delete merged[storeFieldName];
                        }
                    }
                });
                if (fieldsToDirty_1.__typename &&
                    !(existing && existing.__typename) &&
                    this.policies.rootTypenamesById[dataId] === merged.__typename) {
                    delete fieldsToDirty_1.__typename;
                }
                Object.keys(fieldsToDirty_1).forEach(function (fieldName) { return _this.group.dirty(dataId, fieldName); });
            }
        }
    };
    EntityStore.prototype.modify = function (dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var changedFields_1 = Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var sharedDetails_1 = {
                DELETE: DELETE,
                INVALIDATE: INVALIDATE,
                isReference: utilities.isReference,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (fieldNameOrOptions, from) { return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                    fieldName: fieldNameOrOptions,
                    from: from || utilities.makeReference(dataId),
                } : fieldNameOrOptions, { store: _this }); },
            };
            Object.keys(storeObject).forEach(function (storeFieldName) {
                var fieldName = fieldNameFromStoreName(storeFieldName);
                var fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0)
                    return;
                var modify = typeof fields === "function"
                    ? fields
                    : fields[storeFieldName] || fields[fieldName];
                if (modify) {
                    var newValue = modify === delModifier ? DELETE :
                        modify(utilities.maybeDeepFreeze(fieldValue), tslib.__assign(tslib.__assign({}, sharedDetails_1), { fieldName: fieldName, storeFieldName: storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
                    if (newValue === INVALIDATE) {
                        _this.group.dirty(dataId, storeFieldName);
                    }
                    else {
                        if (newValue === DELETE)
                            newValue = void 0;
                        if (newValue !== fieldValue) {
                            changedFields_1[storeFieldName] = newValue;
                            needToMerge_1 = true;
                            fieldValue = newValue;
                        }
                    }
                }
                if (fieldValue !== void 0) {
                    allDeleted_1 = false;
                }
            });
            if (needToMerge_1) {
                this.merge(dataId, changedFields_1);
                if (allDeleted_1) {
                    if (this instanceof Layer) {
                        this.data[dataId] = void 0;
                    }
                    else {
                        delete this.data[dataId];
                    }
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    };
    EntityStore.prototype.delete = function (dataId, fieldName, args) {
        var _a;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args
                ? this.policies.getStoreFieldName({ typename: typename, fieldName: fieldName, args: args })
                : fieldName;
            return this.modify(dataId, storeFieldName ? (_a = {},
                _a[storeFieldName] = delModifier,
                _a) : delModifier);
        }
        return false;
    };
    EntityStore.prototype.evict = function (options, limit) {
        var evicted = false;
        if (options.id) {
            if (hasOwn.call(this.data, options.id)) {
                evicted = this.delete(options.id, options.fieldName, options.args);
            }
            if (this instanceof Layer && this !== limit) {
                evicted = this.parent.evict(options, limit) || evicted;
            }
            if (options.fieldName || evicted) {
                this.group.dirty(options.id, options.fieldName || "__exists");
            }
        }
        return evicted;
    };
    EntityStore.prototype.clear = function () {
        this.replace(null);
    };
    EntityStore.prototype.extract = function () {
        var _this = this;
        var obj = this.toObject();
        var extraRootIds = [];
        this.getRootIdSet().forEach(function (id) {
            if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
                extraRootIds.push(id);
            }
        });
        if (extraRootIds.length) {
            obj.__META = { extraRootIds: extraRootIds.sort() };
        }
        return obj;
    };
    EntityStore.prototype.replace = function (newData) {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) {
            if (!(newData && hasOwn.call(newData, dataId))) {
                _this.delete(dataId);
            }
        });
        if (newData) {
            var __META = newData.__META, rest_1 = tslib.__rest(newData, ["__META"]);
            Object.keys(rest_1).forEach(function (dataId) {
                _this.merge(dataId, rest_1[dataId]);
            });
            if (__META) {
                __META.extraRootIds.forEach(this.retain, this);
            }
        }
    };
    EntityStore.prototype.retain = function (rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore.prototype.release = function (rootId) {
        if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count)
                delete this.rootIds[rootId];
            return count;
        }
        return 0;
    };
    EntityStore.prototype.getRootIdSet = function (ids) {
        if (ids === void 0) { ids = new Set(); }
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) {
            this.parent.getRootIdSet(ids);
        }
        else {
            Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        }
        return ids;
    };
    EntityStore.prototype.gc = function () {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function (id) {
            if (hasOwn.call(snapshot, id)) {
                Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
                delete snapshot[id];
            }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            var root_1 = this;
            while (root_1 instanceof Layer)
                root_1 = root_1.parent;
            idsToRemove.forEach(function (id) { return root_1.delete(id); });
        }
        return idsToRemove;
    };
    EntityStore.prototype.findChildRefIds = function (dataId) {
        if (!hasOwn.call(this.refs, dataId)) {
            var found_1 = this.refs[dataId] = Object.create(null);
            var root = this.data[dataId];
            if (!root)
                return found_1;
            var workSet_1 = new Set([root]);
            workSet_1.forEach(function (obj) {
                if (utilities.isReference(obj)) {
                    found_1[obj.__ref] = true;
                }
                if (utilities.isNonNullObject(obj)) {
                    Object.keys(obj).forEach(function (key) {
                        var child = obj[key];
                        if (utilities.isNonNullObject(child)) {
                            workSet_1.add(child);
                        }
                    });
                }
            });
        }
        return this.refs[dataId];
    };
    EntityStore.prototype.makeCacheKey = function () {
        return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore;
}());
var CacheGroup = (function () {
    function CacheGroup(caching, parent) {
        if (parent === void 0) { parent = null; }
        this.caching = caching;
        this.parent = parent;
        this.d = null;
        this.resetCaching();
    }
    CacheGroup.prototype.resetCaching = function () {
        this.d = this.caching ? optimism.dep() : null;
        this.keyMaker = new trie.Trie(utilities.canUseWeakMap);
    };
    CacheGroup.prototype.depend = function (dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName) {
                this.d(makeDepKey(dataId, fieldName));
            }
            if (this.parent) {
                this.parent.depend(dataId, storeFieldName);
            }
        }
    };
    CacheGroup.prototype.dirty = function (dataId, storeFieldName) {
        if (this.d) {
            this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
        }
    };
    return CacheGroup;
}());
function makeDepKey(dataId, storeFieldName) {
    return storeFieldName + '#' + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
    if (supportsResultCaching(store)) {
        store.group.depend(entityId, "__exists");
    }
}
(function (EntityStore) {
    var Root = (function (_super) {
        tslib.__extends(Root, _super);
        function Root(_a) {
            var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.stump = new Stump(_this);
            _this.storageTrie = new trie.Trie(utilities.canUseWeakMap);
            if (seed)
                _this.replace(seed);
            return _this;
        }
        Root.prototype.addLayer = function (layerId, replay) {
            return this.stump.addLayer(layerId, replay);
        };
        Root.prototype.removeLayer = function () {
            return this;
        };
        Root.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
        };
        return Root;
    }(EntityStore));
    EntityStore.Root = Root;
})(exports.EntityStore || (exports.EntityStore = {}));
var Layer = (function (_super) {
    tslib.__extends(Layer, _super);
    function Layer(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
    }
    Layer.prototype.addLayer = function (layerId, replay) {
        return new Layer(layerId, this, replay, this.group);
    };
    Layer.prototype.removeLayer = function (layerId) {
        var _this = this;
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) {
                Object.keys(this.data).forEach(function (dataId) {
                    var ownStoreObject = _this.data[dataId];
                    var parentStoreObject = parent["lookup"](dataId);
                    if (!parentStoreObject) {
                        _this.delete(dataId);
                    }
                    else if (!ownStoreObject) {
                        _this.group.dirty(dataId, "__exists");
                        Object.keys(parentStoreObject).forEach(function (storeFieldName) {
                            _this.group.dirty(dataId, storeFieldName);
                        });
                    }
                    else if (ownStoreObject !== parentStoreObject) {
                        Object.keys(ownStoreObject).forEach(function (storeFieldName) {
                            if (!equality.equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                                _this.group.dirty(dataId, storeFieldName);
                            }
                        });
                    }
                });
            }
            return parent;
        }
        if (parent === this.parent)
            return this;
        return parent.addLayer(this.id, this.replay);
    };
    Layer.prototype.toObject = function () {
        return tslib.__assign(tslib.__assign({}, this.parent.toObject()), this.data);
    };
    Layer.prototype.findChildRefIds = function (dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return hasOwn.call(this.data, dataId) ? tslib.__assign(tslib.__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer.prototype.getStorage = function () {
        var p = this.parent;
        while (p.parent)
            p = p.parent;
        return p.getStorage.apply(p, arguments);
    };
    return Layer;
}(exports.EntityStore));
var Stump = (function (_super) {
    tslib.__extends(Stump, _super);
    function Stump(root) {
        return _super.call(this, "EntityStore.Stump", root, function () { }, new CacheGroup(root.group.caching, root.group)) || this;
    }
    Stump.prototype.removeLayer = function () {
        return this;
    };
    Stump.prototype.merge = function () {
        return this.parent.merge.apply(this.parent, arguments);
    };
    return Stump;
}(Layer));
function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    return equality.equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    return !!(store instanceof exports.EntityStore && store.group.caching);
}

function shallowCopy(value) {
    if (utilities.isNonNullObject(value)) {
        return Array.isArray(value)
            ? value.slice(0)
            : tslib.__assign({ __proto__: Object.getPrototypeOf(value) }, value);
    }
    return value;
}
var ObjectCanon = (function () {
    function ObjectCanon() {
        this.known = new (utilities.canUseWeakSet ? WeakSet : Set)();
        this.pool = new trie.Trie(utilities.canUseWeakMap);
        this.passes = new WeakMap();
        this.keysByJSON = new Map();
        this.empty = this.admit({});
    }
    ObjectCanon.prototype.isKnown = function (value) {
        return utilities.isNonNullObject(value) && this.known.has(value);
    };
    ObjectCanon.prototype.pass = function (value) {
        if (utilities.isNonNullObject(value)) {
            var copy = shallowCopy(value);
            this.passes.set(copy, value);
            return copy;
        }
        return value;
    };
    ObjectCanon.prototype.admit = function (value) {
        var _this = this;
        if (utilities.isNonNullObject(value)) {
            var original = this.passes.get(value);
            if (original)
                return original;
            var proto = Object.getPrototypeOf(value);
            switch (proto) {
                case Array.prototype: {
                    if (this.known.has(value))
                        return value;
                    var array = value.map(this.admit, this);
                    var node = this.pool.lookupArray(array);
                    if (!node.array) {
                        this.known.add(node.array = array);
                        if (__DEV__) {
                            Object.freeze(array);
                        }
                    }
                    return node.array;
                }
                case null:
                case Object.prototype: {
                    if (this.known.has(value))
                        return value;
                    var proto_1 = Object.getPrototypeOf(value);
                    var array_1 = [proto_1];
                    var keys = this.sortedKeys(value);
                    array_1.push(keys.json);
                    var firstValueIndex_1 = array_1.length;
                    keys.sorted.forEach(function (key) {
                        array_1.push(_this.admit(value[key]));
                    });
                    var node = this.pool.lookupArray(array_1);
                    if (!node.object) {
                        var obj_1 = node.object = Object.create(proto_1);
                        this.known.add(obj_1);
                        keys.sorted.forEach(function (key, i) {
                            obj_1[key] = array_1[firstValueIndex_1 + i];
                        });
                        if (__DEV__) {
                            Object.freeze(obj_1);
                        }
                    }
                    return node.object;
                }
            }
        }
        return value;
    };
    ObjectCanon.prototype.sortedKeys = function (obj) {
        var keys = Object.keys(obj);
        var node = this.pool.lookupArray(keys);
        if (!node.keys) {
            keys.sort();
            var json = JSON.stringify(keys);
            if (!(node.keys = this.keysByJSON.get(json))) {
                this.keysByJSON.set(json, node.keys = { sorted: keys, json: json });
            }
        }
        return node.keys;
    };
    return ObjectCanon;
}());
var canonicalStringify = Object.assign(function (value) {
    if (utilities.isNonNullObject(value)) {
        if (stringifyCanon === void 0) {
            resetCanonicalStringify();
        }
        var canonical = stringifyCanon.admit(value);
        var json = stringifyCache.get(canonical);
        if (json === void 0) {
            stringifyCache.set(canonical, json = JSON.stringify(canonical));
        }
        return json;
    }
    return JSON.stringify(value);
}, {
    reset: resetCanonicalStringify,
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
    stringifyCanon = new ObjectCanon;
    stringifyCache = new (utilities.canUseWeakMap ? WeakMap : Map)();
}

function execSelectionSetKeyArgs(options) {
    return [
        options.selectionSet,
        options.objectOrReference,
        options.context,
        options.context.canonizeResults,
    ];
}
var StoreReader = (function () {
    function StoreReader(config) {
        var _this = this;
        this.knownResults = new (utilities.canUseWeakMap ? WeakMap : Map)();
        this.config = utilities.compact(config, {
            addTypename: config.addTypename !== false,
            canonizeResults: shouldCanonizeResults(config),
        });
        this.canon = config.canon || new ObjectCanon;
        this.executeSelectionSet = optimism.wrap(function (options) {
            var _a;
            var canonizeResults = options.context.canonizeResults;
            var peekArgs = execSelectionSetKeyArgs(options);
            peekArgs[3] = !canonizeResults;
            var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);
            if (other) {
                if (canonizeResults) {
                    return tslib.__assign(tslib.__assign({}, other), { result: _this.canon.admit(other.result) });
                }
                return other;
            }
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSelectionSetImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            keyArgs: execSelectionSetKeyArgs,
            makeCacheKey: function (selectionSet, parent, context, canonizeResults) {
                if (supportsResultCaching(context.store)) {
                    return context.store.makeCacheKey(selectionSet, utilities.isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
                }
            }
        });
        this.executeSubSelectedArray = optimism.wrap(function (options) {
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSubSelectedArrayImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (_a) {
                var field = _a.field, array = _a.array, context = _a.context;
                if (supportsResultCaching(context.store)) {
                    return context.store.makeCacheKey(field, array, context.varString);
                }
            }
        });
    }
    StoreReader.prototype.resetCanon = function () {
        this.canon = new ObjectCanon;
    };
    StoreReader.prototype.diffQueryAgainstStore = function (_a) {
        var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? 'ROOT_QUERY' : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
        var policies = this.config.cache.policies;
        variables = tslib.__assign(tslib.__assign({}, utilities.getDefaultValues(utilities.getQueryDefinition(query))), variables);
        var rootRef = utilities.makeReference(rootId);
        var merger = new utilities.DeepMerger;
        var execResult = this.executeSelectionSet({
            selectionSet: utilities.getMainDefinition(query).selectionSet,
            objectOrReference: rootRef,
            enclosingRef: rootRef,
            context: {
                store: store,
                query: query,
                policies: policies,
                variables: variables,
                varString: canonicalStringify(variables),
                canonizeResults: canonizeResults,
                fragmentMap: utilities.createFragmentMap(utilities.getFragmentDefinitions(query)),
                merge: function (a, b) {
                    return merger.merge(a, b);
                },
            },
        });
        var missing;
        if (execResult.missing) {
            missing = [new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)];
            if (!returnPartialData) {
                throw missing[0];
            }
        }
        return {
            result: execResult.result,
            complete: !missing,
            missing: missing,
        };
    };
    StoreReader.prototype.isFresh = function (result, parent, selectionSet, context) {
        if (supportsResultCaching(context.store) &&
            this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
            if (latest && result === latest.result) {
                return true;
            }
        }
        return false;
    };
    StoreReader.prototype.execSelectionSetImpl = function (_a) {
        var _this = this;
        var selectionSet = _a.selectionSet, objectOrReference = _a.objectOrReference, enclosingRef = _a.enclosingRef, context = _a.context;
        if (utilities.isReference(objectOrReference) &&
            !context.policies.rootTypenamesById[objectOrReference.__ref] &&
            !context.store.has(objectOrReference.__ref)) {
            return {
                result: this.canon.empty,
                missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object"),
            };
        }
        var variables = context.variables, policies = context.policies, store = context.store;
        var typename = store.getFieldValue(objectOrReference, "__typename");
        var result = {};
        var missing;
        if (this.config.addTypename &&
            typeof typename === "string" &&
            !policies.rootIdsByTypename[typename]) {
            result = { __typename: typename };
        }
        function handleMissing(result, resultName) {
            var _a;
            if (result.missing) {
                missing = context.merge(missing, (_a = {}, _a[resultName] = result.missing, _a));
            }
            return result.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function (selection) {
            var _a, _b;
            if (!utilities.shouldInclude(selection, variables))
                return;
            if (utilities.isField(selection)) {
                var fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference,
                }, context);
                var resultName = utilities.resultKeyNameFromField(selection);
                if (fieldValue === void 0) {
                    if (!utilities.addTypenameToDocument.added(selection)) {
                        missing = context.merge(missing, (_a = {},
                            _a[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(utilities.isReference(objectOrReference)
                                ? objectOrReference.__ref + " object"
                                : "object " + JSON.stringify(objectOrReference, null, 2)),
                            _a));
                    }
                }
                else if (Array.isArray(fieldValue)) {
                    fieldValue = handleMissing(_this.executeSubSelectedArray({
                        field: selection,
                        array: fieldValue,
                        enclosingRef: enclosingRef,
                        context: context,
                    }), resultName);
                }
                else if (!selection.selectionSet) {
                    if (context.canonizeResults) {
                        fieldValue = _this.canon.pass(fieldValue);
                    }
                }
                else if (fieldValue != null) {
                    fieldValue = handleMissing(_this.executeSelectionSet({
                        selectionSet: selection.selectionSet,
                        objectOrReference: fieldValue,
                        enclosingRef: utilities.isReference(fieldValue) ? fieldValue : enclosingRef,
                        context: context,
                    }), resultName);
                }
                if (fieldValue !== void 0) {
                    result = context.merge(result, (_b = {}, _b[resultName] = fieldValue, _b));
                }
            }
            else {
                var fragment = utilities.getFragmentFromSelection(selection, context.fragmentMap);
                if (fragment && policies.fragmentMatches(fragment, typename)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        var finalResult = { result: result, missing: missing };
        var frozen = context.canonizeResults
            ? this.canon.admit(finalResult)
            : utilities.maybeDeepFreeze(finalResult);
        if (frozen.result) {
            this.knownResults.set(frozen.result, selectionSet);
        }
        return frozen;
    };
    StoreReader.prototype.execSubSelectedArrayImpl = function (_a) {
        var _this = this;
        var field = _a.field, array = _a.array, enclosingRef = _a.enclosingRef, context = _a.context;
        var missing;
        function handleMissing(childResult, i) {
            var _a;
            if (childResult.missing) {
                missing = context.merge(missing, (_a = {}, _a[i] = childResult.missing, _a));
            }
            return childResult.result;
        }
        if (field.selectionSet) {
            array = array.filter(context.store.canRead);
        }
        array = array.map(function (item, i) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return handleMissing(_this.executeSubSelectedArray({
                    field: field,
                    array: item,
                    enclosingRef: enclosingRef,
                    context: context,
                }), i);
            }
            if (field.selectionSet) {
                return handleMissing(_this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    objectOrReference: item,
                    enclosingRef: utilities.isReference(item) ? item : enclosingRef,
                    context: context,
                }), i);
            }
            if (__DEV__) {
                assertSelectionSetForIdValue(context.store, field, item);
            }
            return item;
        });
        return {
            result: context.canonizeResults ? this.canon.admit(array) : array,
            missing: missing,
        };
    };
    return StoreReader;
}());
function firstMissing(tree) {
    try {
        JSON.stringify(tree, function (_, value) {
            if (typeof value === "string")
                throw value;
            return value;
        });
    }
    catch (result) {
        return result;
    }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        var workSet_1 = new Set([fieldValue]);
        workSet_1.forEach(function (value) {
            if (utilities.isNonNullObject(value)) {
                __DEV__ ? globals.invariant(!utilities.isReference(value), "Missing selection set for object of type ".concat(getTypenameFromStoreObject(store, value), " returned for query field ").concat(field.name.value)) : globals.invariant(!utilities.isReference(value), 5);
                Object.values(value).forEach(workSet_1.add, workSet_1);
            }
        });
    }
}

var cacheSlot = new context.Slot();
var cacheInfoMap = new WeakMap();
function getCacheInfo(cache) {
    var info = cacheInfoMap.get(cache);
    if (!info) {
        cacheInfoMap.set(cache, info = {
            vars: new Set,
            dep: optimism.dep(),
        });
    }
    return info;
}
function forgetCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.forgetCache(cache); });
}
function recallCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.attachCache(cache); });
}
function makeVar(value) {
    var caches = new Set();
    var listeners = new Set();
    var rv = function (newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                caches.forEach(function (cache) {
                    getCacheInfo(cache).dep.dirty(rv);
                    broadcast(cache);
                });
                var oldListeners = Array.from(listeners);
                listeners.clear();
                oldListeners.forEach(function (listener) { return listener(value); });
            }
        }
        else {
            var cache = cacheSlot.getValue();
            if (cache) {
                attach(cache);
                getCacheInfo(cache).dep(rv);
            }
        }
        return value;
    };
    rv.onNextChange = function (listener) {
        listeners.add(listener);
        return function () {
            listeners.delete(listener);
        };
    };
    var attach = rv.attachCache = function (cache) {
        caches.add(cache);
        getCacheInfo(cache).vars.add(rv);
        return rv;
    };
    rv.forgetCache = function (cache) { return caches.delete(cache); };
    return rv;
}
function broadcast(cache) {
    if (cache.broadcastWatches) {
        cache.broadcastWatches();
    }
}

var specifierInfoCache = Object.create(null);
function lookupSpecifierInfo(spec) {
    var cacheKey = JSON.stringify(spec);
    return specifierInfoCache[cacheKey] ||
        (specifierInfoCache[cacheKey] = Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyFieldsFn || (info.keyFieldsFn = function (object, context) {
        var extract = function (from, key) { return context.readField(key, from); };
        var keyObject = context.keyObject = collectSpecifierPaths(specifier, function (schemaKeyPath) {
            var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
            if (extracted === void 0 &&
                object !== context.storeObject &&
                hasOwn.call(object, schemaKeyPath[0])) {
                extracted = extractKeyPath(object, schemaKeyPath, extractKey);
            }
            __DEV__ ? globals.invariant(extracted !== void 0, "Missing field '".concat(schemaKeyPath.join('.'), "' while extracting keyFields from ").concat(JSON.stringify(object))) : globals.invariant(extracted !== void 0, 2);
            return extracted;
        });
        return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
    });
}
function keyArgsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyArgsFn || (info.keyArgsFn = function (args, _a) {
        var field = _a.field, variables = _a.variables, fieldName = _a.fieldName;
        var collected = collectSpecifierPaths(specifier, function (keyPath) {
            var firstKey = keyPath[0];
            var firstChar = firstKey.charAt(0);
            if (firstChar === "@") {
                if (field && utilities.isNonEmptyArray(field.directives)) {
                    var directiveName_1 = firstKey.slice(1);
                    var d = field.directives.find(function (d) { return d.name.value === directiveName_1; });
                    var directiveArgs = d && utilities.argumentsObjectFromField(d, variables);
                    return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
                }
                return;
            }
            if (firstChar === "$") {
                var variableName = firstKey.slice(1);
                if (variables && hasOwn.call(variables, variableName)) {
                    var varKeyPath = keyPath.slice(0);
                    varKeyPath[0] = variableName;
                    return extractKeyPath(variables, varKeyPath);
                }
                return;
            }
            if (args) {
                return extractKeyPath(args, keyPath);
            }
        });
        var suffix = JSON.stringify(collected);
        if (args || suffix !== "{}") {
            fieldName += ":" + suffix;
        }
        return fieldName;
    });
}
function collectSpecifierPaths(specifier, extractor) {
    var merger = new utilities.DeepMerger;
    return getSpecifierPaths(specifier).reduce(function (collected, path) {
        var _a;
        var toMerge = extractor(path);
        if (toMerge !== void 0) {
            for (var i = path.length - 1; i >= 0; --i) {
                toMerge = (_a = {}, _a[path[i]] = toMerge, _a);
            }
            collected = merger.merge(collected, toMerge);
        }
        return collected;
    }, Object.create(null));
}
function getSpecifierPaths(spec) {
    var info = lookupSpecifierInfo(spec);
    if (!info.paths) {
        var paths_1 = info.paths = [];
        var currentPath_1 = [];
        spec.forEach(function (s, i) {
            if (Array.isArray(s)) {
                getSpecifierPaths(s).forEach(function (p) { return paths_1.push(currentPath_1.concat(p)); });
                currentPath_1.length = 0;
            }
            else {
                currentPath_1.push(s);
                if (!Array.isArray(spec[i + 1])) {
                    paths_1.push(currentPath_1.slice(0));
                    currentPath_1.length = 0;
                }
            }
        });
    }
    return info.paths;
}
function extractKey(object, key) {
    return object[key];
}
function extractKeyPath(object, path, extract) {
    extract = extract || extractKey;
    return normalize(path.reduce(function reducer(obj, key) {
        return Array.isArray(obj)
            ? obj.map(function (child) { return reducer(child, key); })
            : obj && extract(obj, key);
    }, object));
}
function normalize(value) {
    if (utilities.isNonNullObject(value)) {
        if (Array.isArray(value)) {
            return value.map(normalize);
        }
        return collectSpecifierPaths(Object.keys(value).sort(), function (path) { return extractKeyPath(value, path); });
    }
    return value;
}

utilities.getStoreKeyName.setStringify(canonicalStringify);
function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args :
        spec.field ? utilities.argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function () { return void 0; };
var simpleKeyArgsFn = function (_args, context) { return context.fieldName; };
var mergeTrueFn = function (existing, incoming, _a) {
    var mergeObjects = _a.mergeObjects;
    return mergeObjects(existing, incoming);
};
var mergeFalseFn = function (_, incoming) { return incoming; };
var Policies = (function () {
    function Policies(config) {
        this.config = config;
        this.typePolicies = Object.create(null);
        this.toBeAdded = Object.create(null);
        this.supertypeMap = new Map();
        this.fuzzySubtypes = new Map();
        this.rootIdsByTypename = Object.create(null);
        this.rootTypenamesById = Object.create(null);
        this.usingPossibleTypes = false;
        this.config = tslib.__assign({ dataIdFromObject: defaultDataIdFromObject }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) {
            this.addPossibleTypes(config.possibleTypes);
        }
        if (config.typePolicies) {
            this.addTypePolicies(config.typePolicies);
        }
    }
    Policies.prototype.identify = function (object, partialContext) {
        var _a;
        var policies = this;
        var typename = partialContext && (partialContext.typename ||
            ((_a = partialContext.storeObject) === null || _a === void 0 ? void 0 : _a.__typename)) || object.__typename;
        if (typename === this.rootTypenamesById.ROOT_QUERY) {
            return ["ROOT_QUERY"];
        }
        var storeObject = partialContext && partialContext.storeObject || object;
        var context = tslib.__assign(tslib.__assign({}, partialContext), { typename: typename, storeObject: storeObject, readField: partialContext && partialContext.readField || function () {
                var options = normalizeReadFieldOptions(arguments, storeObject);
                return policies.readField(options, {
                    store: policies.cache["data"],
                    variables: options.variables,
                });
            } });
        var id;
        var policy = typename && this.getTypePolicy(typename);
        var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        while (keyFn) {
            var specifierOrId = keyFn(object, context);
            if (Array.isArray(specifierOrId)) {
                keyFn = keyFieldsFnFromSpecifier(specifierOrId);
            }
            else {
                id = specifierOrId;
                break;
            }
        }
        id = id ? String(id) : void 0;
        return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies.prototype.addTypePolicies = function (typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function (typename) {
            var _a = typePolicies[typename], queryType = _a.queryType, mutationType = _a.mutationType, subscriptionType = _a.subscriptionType, incoming = tslib.__rest(_a, ["queryType", "mutationType", "subscriptionType"]);
            if (queryType)
                _this.setRootTypename("Query", typename);
            if (mutationType)
                _this.setRootTypename("Mutation", typename);
            if (subscriptionType)
                _this.setRootTypename("Subscription", typename);
            if (hasOwn.call(_this.toBeAdded, typename)) {
                _this.toBeAdded[typename].push(incoming);
            }
            else {
                _this.toBeAdded[typename] = [incoming];
            }
        });
    };
    Policies.prototype.updateTypePolicy = function (typename, incoming) {
        var _this = this;
        var existing = this.getTypePolicy(typename);
        var keyFields = incoming.keyFields, fields = incoming.fields;
        function setMerge(existing, merge) {
            existing.merge =
                typeof merge === "function" ? merge :
                    merge === true ? mergeTrueFn :
                        merge === false ? mergeFalseFn :
                            existing.merge;
        }
        setMerge(existing, incoming.merge);
        existing.keyFn =
            keyFields === false ? nullKeyFieldsFn :
                Array.isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) :
                    typeof keyFields === "function" ? keyFields :
                        existing.keyFn;
        if (fields) {
            Object.keys(fields).forEach(function (fieldName) {
                var existing = _this.getFieldPolicy(typename, fieldName, true);
                var incoming = fields[fieldName];
                if (typeof incoming === "function") {
                    existing.read = incoming;
                }
                else {
                    var keyArgs = incoming.keyArgs, read = incoming.read, merge = incoming.merge;
                    existing.keyFn =
                        keyArgs === false ? simpleKeyArgsFn :
                            Array.isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) :
                                typeof keyArgs === "function" ? keyArgs :
                                    existing.keyFn;
                    if (typeof read === "function") {
                        existing.read = read;
                    }
                    setMerge(existing, merge);
                }
                if (existing.read && existing.merge) {
                    existing.keyFn = existing.keyFn || simpleKeyArgsFn;
                }
            });
        }
    };
    Policies.prototype.setRootTypename = function (which, typename) {
        if (typename === void 0) { typename = which; }
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
            __DEV__ ? globals.invariant(!old || old === which, "Cannot change root ".concat(which, " __typename more than once")) : globals.invariant(!old || old === which, 3);
            if (old)
                delete this.rootIdsByTypename[old];
            this.rootIdsByTypename[typename] = rootId;
            this.rootTypenamesById[rootId] = typename;
        }
    };
    Policies.prototype.addPossibleTypes = function (possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function (supertype) {
            _this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach(function (subtype) {
                _this.getSupertypeSet(subtype, true).add(supertype);
                var match = subtype.match(TypeOrFieldNameRegExp);
                if (!match || match[0] !== subtype) {
                    _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
                }
            });
        });
    };
    Policies.prototype.getTypePolicy = function (typename) {
        var _this = this;
        if (!hasOwn.call(this.typePolicies, typename)) {
            var policy_1 = this.typePolicies[typename] = Object.create(null);
            policy_1.fields = Object.create(null);
            var supertypes = this.supertypeMap.get(typename);
            if (supertypes && supertypes.size) {
                supertypes.forEach(function (supertype) {
                    var _a = _this.getTypePolicy(supertype), fields = _a.fields, rest = tslib.__rest(_a, ["fields"]);
                    Object.assign(policy_1, rest);
                    Object.assign(policy_1.fields, fields);
                });
            }
        }
        var inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) {
            inbox.splice(0).forEach(function (policy) {
                _this.updateTypePolicy(typename, policy);
            });
        }
        return this.typePolicies[typename];
    };
    Policies.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
        if (typename) {
            var fieldPolicies = this.getTypePolicy(typename).fields;
            return fieldPolicies[fieldName] || (createIfMissing && (fieldPolicies[fieldName] = Object.create(null)));
        }
    };
    Policies.prototype.getSupertypeSet = function (subtype, createIfMissing) {
        var supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) {
            this.supertypeMap.set(subtype, supertypeSet = new Set());
        }
        return supertypeSet;
    };
    Policies.prototype.fragmentMatches = function (fragment, typename, result, variables) {
        var _this = this;
        if (!fragment.typeCondition)
            return true;
        if (!typename)
            return false;
        var supertype = fragment.typeCondition.name.value;
        if (typename === supertype)
            return true;
        if (this.usingPossibleTypes &&
            this.supertypeMap.has(supertype)) {
            var typenameSupertypeSet = this.getSupertypeSet(typename, true);
            var workQueue_1 = [typenameSupertypeSet];
            var maybeEnqueue_1 = function (subtype) {
                var supertypeSet = _this.getSupertypeSet(subtype, false);
                if (supertypeSet &&
                    supertypeSet.size &&
                    workQueue_1.indexOf(supertypeSet) < 0) {
                    workQueue_1.push(supertypeSet);
                }
            };
            var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            var checkingFuzzySubtypes = false;
            for (var i = 0; i < workQueue_1.length; ++i) {
                var supertypeSet = workQueue_1[i];
                if (supertypeSet.has(supertype)) {
                    if (!typenameSupertypeSet.has(supertype)) {
                        if (checkingFuzzySubtypes) {
                            __DEV__ && globals.invariant.warn("Inferring subtype ".concat(typename, " of supertype ").concat(supertype));
                        }
                        typenameSupertypeSet.add(supertype);
                    }
                    return true;
                }
                supertypeSet.forEach(maybeEnqueue_1);
                if (needToCheckFuzzySubtypes &&
                    i === workQueue_1.length - 1 &&
                    selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
                    needToCheckFuzzySubtypes = false;
                    checkingFuzzySubtypes = true;
                    this.fuzzySubtypes.forEach(function (regExp, fuzzyString) {
                        var match = typename.match(regExp);
                        if (match && match[0] === typename) {
                            maybeEnqueue_1(fuzzyString);
                        }
                    });
                }
            }
        }
        return false;
    };
    Policies.prototype.hasKeyArgs = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.keyFn);
    };
    Policies.prototype.getStoreFieldName = function (fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            var context = {
                typename: typename,
                fieldName: fieldName,
                field: fieldSpec.field || null,
                variables: fieldSpec.variables,
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while (keyFn) {
                var specifierOrString = keyFn(args, context);
                if (Array.isArray(specifierOrString)) {
                    keyFn = keyArgsFnFromSpecifier(specifierOrString);
                }
                else {
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) {
            storeFieldName = fieldSpec.field
                ? utilities.storeKeyNameFromField(fieldSpec.field, fieldSpec.variables)
                : utilities.getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
        }
        if (storeFieldName === false) {
            return fieldName;
        }
        return fieldName === fieldNameFromStoreName(storeFieldName)
            ? storeFieldName
            : fieldName + ":" + storeFieldName;
    };
    Policies.prototype.readField = function (options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference)
            return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField)
            return;
        if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename)
                options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read = policy && policy.read;
        if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(utilities.isReference(objectOrReference)
                ? objectOrReference.__ref
                : objectOrReference, storeFieldName));
            return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
        }
        return existing;
    };
    Policies.prototype.getReadFunction = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return policy && policy.read;
    };
    Policies.prototype.getMergeFunction = function (parentTypename, fieldName, childTypename) {
        var policy = this.getFieldPolicy(parentTypename, fieldName, false);
        var merge = policy && policy.merge;
        if (!merge && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge = policy && policy.merge;
        }
        return merge;
    };
    Policies.prototype.runMergeFunction = function (existing, incoming, _a, context, storage) {
        var field = _a.field, typename = _a.typename, merge = _a.merge;
        if (merge === mergeTrueFn) {
            return makeMergeObjectsFunction(context.store)(existing, incoming);
        }
        if (merge === mergeFalseFn) {
            return incoming;
        }
        if (context.overwrite) {
            existing = void 0;
        }
        return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename: typename, fieldName: field.name.value, field: field, variables: context.variables }, context, storage || Object.create(null)));
    };
    return Policies;
}());
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a = context.store, toReference = _a.toReference, canRead = _a.canRead;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName: fieldName,
        storeFieldName: storeFieldName,
        variables: variables,
        isReference: utilities.isReference,
        toReference: toReference,
        storage: storage,
        cache: policies.cache,
        canRead: canRead,
        readField: function () {
            return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, context), context);
        },
        mergeObjects: makeMergeObjectsFunction(context.store),
    };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
    var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
    var options;
    if (typeof fieldNameOrOptions === "string") {
        options = {
            fieldName: fieldNameOrOptions,
            from: argc > 1 ? from : objectOrReference,
        };
    }
    else {
        options = tslib.__assign({}, fieldNameOrOptions);
        if (!hasOwn.call(options, "from")) {
            options.from = objectOrReference;
        }
    }
    if (__DEV__ && options.from === void 0) {
        __DEV__ && globals.invariant.warn("Undefined 'from' passed to readField with arguments ".concat(utilities.stringifyForDisplay(Array.from(readFieldArgs))));
    }
    if (void 0 === options.variables) {
        options.variables = variables;
    }
    return options;
}
function makeMergeObjectsFunction(store) {
    return function mergeObjects(existing, incoming) {
        if (Array.isArray(existing) || Array.isArray(incoming)) {
            throw __DEV__ ? new globals.InvariantError("Cannot automatically merge arrays") : new globals.InvariantError(4);
        }
        if (utilities.isNonNullObject(existing) &&
            utilities.isNonNullObject(incoming)) {
            var eType = store.getFieldValue(existing, "__typename");
            var iType = store.getFieldValue(incoming, "__typename");
            var typesDiffer = eType && iType && eType !== iType;
            if (typesDiffer) {
                return incoming;
            }
            if (utilities.isReference(existing) &&
                storeValueIsStoreObject(incoming)) {
                store.merge(existing.__ref, incoming);
                return existing;
            }
            if (storeValueIsStoreObject(existing) &&
                utilities.isReference(incoming)) {
                store.merge(existing, incoming.__ref);
                return incoming;
            }
            if (storeValueIsStoreObject(existing) &&
                storeValueIsStoreObject(incoming)) {
                return tslib.__assign(tslib.__assign({}, existing), incoming);
            }
        }
        return incoming;
    };
}

function getContextFlavor(context, clientOnly, deferred) {
    var key = "".concat(clientOnly).concat(deferred);
    var flavored = context.flavors.get(key);
    if (!flavored) {
        context.flavors.set(key, flavored = (context.clientOnly === clientOnly &&
            context.deferred === deferred) ? context : tslib.__assign(tslib.__assign({}, context), { clientOnly: clientOnly, deferred: deferred }));
    }
    return flavored;
}
var StoreWriter = (function () {
    function StoreWriter(cache, reader) {
        this.cache = cache;
        this.reader = reader;
    }
    StoreWriter.prototype.writeToStore = function (store, _a) {
        var _this = this;
        var query = _a.query, result = _a.result, dataId = _a.dataId, variables = _a.variables, overwrite = _a.overwrite;
        var operationDefinition = utilities.getOperationDefinition(query);
        var merger = makeProcessedFieldsMerger();
        variables = tslib.__assign(tslib.__assign({}, utilities.getDefaultValues(operationDefinition)), variables);
        var context = {
            store: store,
            written: Object.create(null),
            merge: function (existing, incoming) {
                return merger.merge(existing, incoming);
            },
            variables: variables,
            varString: canonicalStringify(variables),
            fragmentMap: utilities.createFragmentMap(utilities.getFragmentDefinitions(query)),
            overwrite: !!overwrite,
            incomingById: new Map,
            clientOnly: false,
            deferred: false,
            flavors: new Map,
        };
        var ref = this.processSelectionSet({
            result: result || Object.create(null),
            dataId: dataId,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: { map: new Map },
            context: context,
        });
        if (!utilities.isReference(ref)) {
            throw __DEV__ ? new globals.InvariantError("Could not identify object ".concat(JSON.stringify(result))) : new globals.InvariantError(6);
        }
        context.incomingById.forEach(function (_a, dataId) {
            var storeObject = _a.storeObject, mergeTree = _a.mergeTree, fieldNodeSet = _a.fieldNodeSet;
            var entityRef = utilities.makeReference(dataId);
            if (mergeTree && mergeTree.map.size) {
                var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
                if (utilities.isReference(applied)) {
                    return;
                }
                storeObject = applied;
            }
            if (__DEV__ && !context.overwrite) {
                var fieldsWithSelectionSets_1 = Object.create(null);
                fieldNodeSet.forEach(function (field) {
                    if (field.selectionSet) {
                        fieldsWithSelectionSets_1[field.name.value] = true;
                    }
                });
                var hasSelectionSet_1 = function (storeFieldName) {
                    return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
                };
                var hasMergeFunction_1 = function (storeFieldName) {
                    var childTree = mergeTree && mergeTree.map.get(storeFieldName);
                    return Boolean(childTree && childTree.info && childTree.info.merge);
                };
                Object.keys(storeObject).forEach(function (storeFieldName) {
                    if (hasSelectionSet_1(storeFieldName) &&
                        !hasMergeFunction_1(storeFieldName)) {
                        warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
                    }
                });
            }
            store.merge(dataId, storeObject);
        });
        store.retain(ref.__ref);
        return ref;
    };
    StoreWriter.prototype.processSelectionSet = function (_a) {
        var _this = this;
        var dataId = _a.dataId, result = _a.result, selectionSet = _a.selectionSet, context = _a.context, mergeTree = _a.mergeTree;
        var policies = this.cache.policies;
        var incoming = Object.create(null);
        var typename = (dataId && policies.rootTypenamesById[dataId]) ||
            utilities.getTypenameFromResult(result, selectionSet, context.fragmentMap) ||
            (dataId && context.store.get(dataId, "__typename"));
        if ("string" === typeof typename) {
            incoming.__typename = typename;
        }
        var readField = function () {
            var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
            if (utilities.isReference(options.from)) {
                var info = context.incomingById.get(options.from.__ref);
                if (info) {
                    var result_1 = policies.readField(tslib.__assign(tslib.__assign({}, options), { from: info.storeObject }), context);
                    if (result_1 !== void 0) {
                        return result_1;
                    }
                }
            }
            return policies.readField(options, context);
        };
        var fieldNodeSet = new Set();
        this.flattenFields(selectionSet, result, context, typename).forEach(function (context, field) {
            var _a;
            var resultFieldKey = utilities.resultKeyNameFromField(field);
            var value = result[resultFieldKey];
            fieldNodeSet.add(field);
            if (value !== void 0) {
                var storeFieldName = policies.getStoreFieldName({
                    typename: typename,
                    fieldName: field.name.value,
                    field: field,
                    variables: context.variables,
                });
                var childTree = getChildMergeTree(mergeTree, storeFieldName);
                var incomingValue = _this.processFieldValue(value, field, field.selectionSet
                    ? getContextFlavor(context, false, false)
                    : context, childTree);
                var childTypename = void 0;
                if (field.selectionSet &&
                    (utilities.isReference(incomingValue) ||
                        storeValueIsStoreObject(incomingValue))) {
                    childTypename = readField("__typename", incomingValue);
                }
                var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
                if (merge) {
                    childTree.info = {
                        field: field,
                        typename: typename,
                        merge: merge,
                    };
                }
                else {
                    maybeRecycleChildMergeTree(mergeTree, storeFieldName);
                }
                incoming = context.merge(incoming, (_a = {},
                    _a[storeFieldName] = incomingValue,
                    _a));
            }
            else if (__DEV__ &&
                !context.clientOnly &&
                !context.deferred &&
                !utilities.addTypenameToDocument.added(field) &&
                !policies.getReadFunction(typename, field.name.value)) {
                __DEV__ && globals.invariant.error("Missing field '".concat(utilities.resultKeyNameFromField(field), "' while writing result ").concat(JSON.stringify(result, null, 2)).substring(0, 1000));
            }
        });
        try {
            var _b = policies.identify(result, {
                typename: typename,
                selectionSet: selectionSet,
                fragmentMap: context.fragmentMap,
                storeObject: incoming,
                readField: readField,
            }), id = _b[0], keyObject = _b[1];
            dataId = dataId || id;
            if (keyObject) {
                incoming = context.merge(incoming, keyObject);
            }
        }
        catch (e) {
            if (!dataId)
                throw e;
        }
        if ("string" === typeof dataId) {
            var dataRef = utilities.makeReference(dataId);
            var sets = context.written[dataId] || (context.written[dataId] = []);
            if (sets.indexOf(selectionSet) >= 0)
                return dataRef;
            sets.push(selectionSet);
            if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
                return dataRef;
            }
            var previous_1 = context.incomingById.get(dataId);
            if (previous_1) {
                previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
                previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
                fieldNodeSet.forEach(function (field) { return previous_1.fieldNodeSet.add(field); });
            }
            else {
                context.incomingById.set(dataId, {
                    storeObject: incoming,
                    mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
                    fieldNodeSet: fieldNodeSet,
                });
            }
            return dataRef;
        }
        return incoming;
    };
    StoreWriter.prototype.processFieldValue = function (value, field, context, mergeTree) {
        var _this = this;
        if (!field.selectionSet || value === null) {
            return __DEV__ ? utilities.cloneDeep(value) : value;
        }
        if (Array.isArray(value)) {
            return value.map(function (item, i) {
                var value = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
                maybeRecycleChildMergeTree(mergeTree, i);
                return value;
            });
        }
        return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context: context,
            mergeTree: mergeTree,
        });
    };
    StoreWriter.prototype.flattenFields = function (selectionSet, result, context, typename) {
        if (typename === void 0) { typename = utilities.getTypenameFromResult(result, selectionSet, context.fragmentMap); }
        var fieldMap = new Map();
        var policies = this.cache.policies;
        var limitingTrie = new trie.Trie(false);
        (function flatten(selectionSet, inheritedContext) {
            var visitedNode = limitingTrie.lookup(selectionSet, inheritedContext.clientOnly, inheritedContext.deferred);
            if (visitedNode.visited)
                return;
            visitedNode.visited = true;
            selectionSet.selections.forEach(function (selection) {
                if (!utilities.shouldInclude(selection, context.variables))
                    return;
                var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
                if (!(clientOnly && deferred) &&
                    utilities.isNonEmptyArray(selection.directives)) {
                    selection.directives.forEach(function (dir) {
                        var name = dir.name.value;
                        if (name === "client")
                            clientOnly = true;
                        if (name === "defer") {
                            var args = utilities.argumentsObjectFromField(dir, context.variables);
                            if (!args || args.if !== false) {
                                deferred = true;
                            }
                        }
                    });
                }
                if (utilities.isField(selection)) {
                    var existing = fieldMap.get(selection);
                    if (existing) {
                        clientOnly = clientOnly && existing.clientOnly;
                        deferred = deferred && existing.deferred;
                    }
                    fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
                }
                else {
                    var fragment = utilities.getFragmentFromSelection(selection, context.fragmentMap);
                    if (fragment &&
                        policies.fragmentMatches(fragment, typename, result, context.variables)) {
                        flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
                    }
                }
            });
        })(selectionSet, context);
        return fieldMap;
    };
    StoreWriter.prototype.applyMerges = function (mergeTree, existing, incoming, context, getStorageArgs) {
        var _a;
        var _this = this;
        if (mergeTree.map.size && !utilities.isReference(incoming)) {
            var e_1 = (!Array.isArray(incoming) &&
                (utilities.isReference(existing) || storeValueIsStoreObject(existing))) ? existing : void 0;
            var i_1 = incoming;
            if (e_1 && !getStorageArgs) {
                getStorageArgs = [utilities.isReference(e_1) ? e_1.__ref : e_1];
            }
            var changedFields_1;
            var getValue_1 = function (from, name) {
                return Array.isArray(from)
                    ? (typeof name === "number" ? from[name] : void 0)
                    : context.store.getFieldValue(from, String(name));
            };
            mergeTree.map.forEach(function (childTree, storeFieldName) {
                var eVal = getValue_1(e_1, storeFieldName);
                var iVal = getValue_1(i_1, storeFieldName);
                if (void 0 === iVal)
                    return;
                if (getStorageArgs) {
                    getStorageArgs.push(storeFieldName);
                }
                var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
                if (aVal !== iVal) {
                    changedFields_1 = changedFields_1 || new Map;
                    changedFields_1.set(storeFieldName, aVal);
                }
                if (getStorageArgs) {
                    globals.invariant(getStorageArgs.pop() === storeFieldName);
                }
            });
            if (changedFields_1) {
                incoming = (Array.isArray(i_1) ? i_1.slice(0) : tslib.__assign({}, i_1));
                changedFields_1.forEach(function (value, name) {
                    incoming[name] = value;
                });
            }
        }
        if (mergeTree.info) {
            return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
        }
        return incoming;
    };
    return StoreWriter;
}());
var emptyMergeTreePool = [];
function getChildMergeTree(_a, name) {
    var map = _a.map;
    if (!map.has(name)) {
        map.set(name, emptyMergeTreePool.pop() || { map: new Map });
    }
    return map.get(name);
}
function mergeMergeTrees(left, right) {
    if (left === right || !right || mergeTreeIsEmpty(right))
        return left;
    if (!left || mergeTreeIsEmpty(left))
        return right;
    var info = left.info && right.info ? tslib.__assign(tslib.__assign({}, left.info), right.info) : left.info || right.info;
    var needToMergeMaps = left.map.size && right.map.size;
    var map = needToMergeMaps ? new Map :
        left.map.size ? left.map : right.map;
    var merged = { info: info, map: map };
    if (needToMergeMaps) {
        var remainingRightKeys_1 = new Set(right.map.keys());
        left.map.forEach(function (leftTree, key) {
            merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
            remainingRightKeys_1.delete(key);
        });
        remainingRightKeys_1.forEach(function (key) {
            merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
        });
    }
    return merged;
}
function mergeTreeIsEmpty(tree) {
    return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a, name) {
    var map = _a.map;
    var childTree = map.get(name);
    if (childTree && mergeTreeIsEmpty(childTree)) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
    }
}
var warnings = new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function (objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing)
        return;
    var incoming = getChild(incomingObj);
    if (!incoming)
        return;
    if (utilities.isReference(existing))
        return;
    if (equality.equal(existing, incoming))
        return;
    if (Object.keys(existing).every(function (key) { return store.getFieldValue(incoming, key) !== void 0; })) {
        return;
    }
    var parentType = store.getFieldValue(existingRef, "__typename") ||
        store.getFieldValue(incomingObj, "__typename");
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var typeDotName = "".concat(parentType, ".").concat(fieldName);
    if (warnings.has(typeDotName))
        return;
    warnings.add(typeDotName);
    var childTypenames = [];
    if (!Array.isArray(existing) &&
        !Array.isArray(incoming)) {
        [existing, incoming].forEach(function (child) {
            var typename = store.getFieldValue(child, "__typename");
            if (typeof typename === "string" &&
                !childTypenames.includes(typename)) {
                childTypenames.push(typename);
            }
        });
    }
    __DEV__ && globals.invariant.warn("Cache data may be lost when replacing the ".concat(fieldName, " field of a ").concat(parentType, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(childTypenames.length
        ? "either ensure all objects of type " +
            childTypenames.join(" and ") + " have an ID or a custom merge function, or "
        : "", "define a custom merge function for the ").concat(typeDotName, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(existing).slice(0, 1000), "\n  incoming: ").concat(JSON.stringify(incoming).slice(0, 1000), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"));
}

var InMemoryCache = (function (_super) {
    tslib.__extends(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.makeVar = makeVar;
        _this.txCount = 0;
        _this.config = normalizeConfig(config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new Policies({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies,
        });
        _this.init();
        return _this;
    }
    InMemoryCache.prototype.init = function () {
        var rootStore = this.data = new exports.EntityStore.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching,
        });
        this.optimisticData = rootStore.stump;
        this.resetResultCache();
    };
    InMemoryCache.prototype.resetResultCache = function (resetResultIdentities) {
        var _this = this;
        var previousReader = this.storeReader;
        this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: shouldCanonizeResults(this.config),
            canon: resetResultIdentities
                ? void 0
                : previousReader && previousReader.canon,
        }));
        this.maybeBroadcastWatch = optimism.wrap(function (c, options) {
            return _this.broadcastWatch(c, options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (c) {
                var store = c.optimistic ? _this.optimisticData : _this.data;
                if (supportsResultCaching(store)) {
                    var optimistic = c.optimistic, rootId = c.rootId, variables = c.variables;
                    return store.makeCacheKey(c.query, c.callback, canonicalStringify({ optimistic: optimistic, rootId: rootId, variables: variables }));
                }
            }
        });
        new Set([
            this.data.group,
            this.optimisticData.group,
        ]).forEach(function (group) { return group.resetCaching(); });
    };
    InMemoryCache.prototype.restore = function (data) {
        this.init();
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache.prototype.read = function (options) {
        var _a = options.returnPartialData, returnPartialData = _a === void 0 ? false : _a;
        try {
            return this.storeReader.diffQueryAgainstStore(tslib.__assign(tslib.__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: returnPartialData })).result || null;
        }
        catch (e) {
            if (e instanceof MissingFieldError) {
                return null;
            }
            throw e;
        }
    };
    InMemoryCache.prototype.write = function (options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore(this.data, options);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.modify = function (options) {
        if (hasOwn.call(options, "id") && !options.id) {
            return false;
        }
        var store = options.optimistic
            ? this.optimisticData
            : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.diff = function (options) {
        return this.storeReader.diffQueryAgainstStore(tslib.__assign(tslib.__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        if (!this.watches.size) {
            recallCache(this);
        }
        this.watches.add(watch);
        if (watch.immediate) {
            this.maybeBroadcastWatch(watch);
        }
        return function () {
            if (_this.watches.delete(watch) && !_this.watches.size) {
                forgetCache(_this);
            }
            _this.maybeBroadcastWatch.forget(watch);
        };
    };
    InMemoryCache.prototype.gc = function (options) {
        canonicalStringify.reset();
        var ids = this.optimisticData.gc();
        if (options && !this.txCount) {
            if (options.resetResultCache) {
                this.resetResultCache(options.resetResultIdentities);
            }
            else if (options.resetResultIdentities) {
                this.storeReader.resetCanon();
            }
        }
        return ids;
    };
    InMemoryCache.prototype.retain = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache.prototype.release = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache.prototype.identify = function (object) {
        if (utilities.isReference(object))
            return object.__ref;
        try {
            return this.policies.identify(object)[0];
        }
        catch (e) {
            __DEV__ && globals.invariant.warn(e);
        }
    };
    InMemoryCache.prototype.evict = function (options) {
        if (!options.id) {
            if (hasOwn.call(options, "id")) {
                return false;
            }
            options = tslib.__assign(tslib.__assign({}, options), { id: "ROOT_QUERY" });
        }
        try {
            ++this.txCount;
            return this.optimisticData.evict(options, this.data);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.reset = function (options) {
        var _this = this;
        this.init();
        canonicalStringify.reset();
        if (options && options.discardWatches) {
            this.watches.forEach(function (watch) { return _this.maybeBroadcastWatch.forget(watch); });
            this.watches.clear();
            forgetCache(this);
        }
        else {
            this.broadcastWatches();
        }
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    };
    InMemoryCache.prototype.batch = function (options) {
        var _this = this;
        var update = options.update, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
        var updateResult;
        var perform = function (layer) {
            var _a = _this, data = _a.data, optimisticData = _a.optimisticData;
            ++_this.txCount;
            if (layer) {
                _this.data = _this.optimisticData = layer;
            }
            try {
                return updateResult = update(_this);
            }
            finally {
                --_this.txCount;
                _this.data = data;
                _this.optimisticData = optimisticData;
            }
        };
        var alreadyDirty = new Set();
        if (onWatchUpdated && !this.txCount) {
            this.broadcastWatches(tslib.__assign(tslib.__assign({}, options), { onWatchUpdated: function (watch) {
                    alreadyDirty.add(watch);
                    return false;
                } }));
        }
        if (typeof optimistic === 'string') {
            this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
        }
        else if (optimistic === false) {
            perform(this.data);
        }
        else {
            perform();
        }
        if (typeof removeOptimistic === "string") {
            this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
        }
        if (onWatchUpdated && alreadyDirty.size) {
            this.broadcastWatches(tslib.__assign(tslib.__assign({}, options), { onWatchUpdated: function (watch, diff) {
                    var result = onWatchUpdated.call(this, watch, diff);
                    if (result !== false) {
                        alreadyDirty.delete(watch);
                    }
                    return result;
                } }));
            if (alreadyDirty.size) {
                alreadyDirty.forEach(function (watch) { return _this.maybeBroadcastWatch.dirty(watch); });
            }
        }
        else {
            this.broadcastWatches(options);
        }
        return updateResult;
    };
    InMemoryCache.prototype.performTransaction = function (update, optimisticId) {
        return this.batch({
            update: update,
            optimistic: optimisticId || (optimisticId !== null),
        });
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = utilities.addTypenameToDocument(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache.prototype.broadcastWatches = function (options) {
        var _this = this;
        if (!this.txCount) {
            this.watches.forEach(function (c) { return _this.maybeBroadcastWatch(c, options); });
        }
    };
    InMemoryCache.prototype.broadcastWatch = function (c, options) {
        var lastDiff = c.lastDiff;
        var diff = this.diff(c);
        if (options) {
            if (c.optimistic &&
                typeof options.optimistic === "string") {
                diff.fromOptimisticTransaction = true;
            }
            if (options.onWatchUpdated &&
                options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
                return;
            }
        }
        if (!lastDiff || !equality.equal(lastDiff.result, diff.result)) {
            c.callback(c.lastDiff = diff, lastDiff);
        }
    };
    return InMemoryCache;
}(ApolloCache));

exports.isReference = utilities.isReference;
exports.makeReference = utilities.makeReference;
exports.ApolloCache = ApolloCache;
exports.InMemoryCache = InMemoryCache;
exports.MissingFieldError = MissingFieldError;
exports.Policies = Policies;
exports.cacheSlot = cacheSlot;
exports.canonicalStringify = canonicalStringify;
exports.defaultDataIdFromObject = defaultDataIdFromObject;
exports.fieldNameFromStoreName = fieldNameFromStoreName;
exports.makeVar = makeVar;
//# sourceMappingURL=cache.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/core/core.cjs":
/*!***************************************************!*\
  !*** ./node_modules/@apollo/client/core/core.cjs ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "tslib");
var core = __webpack_require__(/*! ../link/core */ "./node_modules/@apollo/client/link/core/core.cjs");
var utilities = __webpack_require__(/*! ../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var http = __webpack_require__(/*! ../link/http */ "./node_modules/@apollo/client/link/http/http.cjs");
var equality = __webpack_require__(/*! @wry/equality */ "@wry/equality");
var cache = __webpack_require__(/*! ../cache */ "./node_modules/@apollo/client/cache/cache.cjs");
var errors = __webpack_require__(/*! ../errors */ "./node_modules/@apollo/client/errors/errors.cjs");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var utils = __webpack_require__(/*! ../link/utils */ "./node_modules/@apollo/client/link/utils/utils.cjs");
var tsInvariant = __webpack_require__(/*! ts-invariant */ "./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.js");
var graphqlTag = __webpack_require__(/*! graphql-tag */ "graphql-tag");

var version = '3.5.6';

exports.NetworkStatus = void 0;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(exports.NetworkStatus || (exports.NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
}

var assign = Object.assign, hasOwnProperty$1 = Object.hasOwnProperty;
var warnedAboutUpdateQuery = false;
var ObservableQuery = (function (_super) {
    tslib.__extends(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, queryInfo = _a.queryInfo, options = _a.options;
        var _this = _super.call(this, function (observer) {
            try {
                var subObserver = observer._subscription._observer;
                if (subObserver && !subObserver.error) {
                    subObserver.error = defaultSubscriptionObserverErrorCallback;
                }
            }
            catch (_a) { }
            var first = !_this.observers.size;
            _this.observers.add(observer);
            var last = _this.last;
            if (last && last.error) {
                observer.error && observer.error(last.error);
            }
            else if (last && last.result) {
                observer.next && observer.next(last.result);
            }
            if (first) {
                _this.reobserve().catch(function () { });
            }
            return function () {
                if (_this.observers.delete(observer) && !_this.observers.size) {
                    _this.tearDownQuery();
                }
            };
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.isTornDown = false;
        _this.options = options;
        _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
        var opDef = utilities.getOperationDefinition(options.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        _this.initialFetchPolicy = options.fetchPolicy || "cache-first";
        _this.queryManager = queryManager;
        _this.queryInfo = queryInfo;
        return _this;
    }
    Object.defineProperty(ObservableQuery.prototype, "variables", {
        get: function () {
            return this.options.variables;
        },
        enumerable: false,
        configurable: true
    });
    ObservableQuery.prototype.result = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var observer = {
                next: function (result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) {
                        _this.queryManager.removeQuery(_this.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject,
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery.prototype.getCurrentResult = function (saveAsLastResult) {
        if (saveAsLastResult === void 0) { saveAsLastResult = true; }
        var lastResult = this.getLastResult(true);
        var networkStatus = this.queryInfo.networkStatus ||
            (lastResult && lastResult.networkStatus) ||
            exports.NetworkStatus.ready;
        var result = tslib.__assign(tslib.__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus: networkStatus });
        var _a = this.options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a;
        if (fetchPolicy === 'network-only' ||
            fetchPolicy === 'no-cache' ||
            fetchPolicy === 'standby' ||
            this.queryManager.transform(this.options.query).hasForcedResolvers) ;
        else {
            var diff = this.queryInfo.getDiff();
            if (diff.complete || this.options.returnPartialData) {
                result.data = diff.result;
            }
            if (equality.equal(result.data, {})) {
                result.data = void 0;
            }
            if (diff.complete) {
                delete result.partial;
                if (diff.complete &&
                    result.networkStatus === exports.NetworkStatus.loading &&
                    (fetchPolicy === 'cache-first' ||
                        fetchPolicy === 'cache-only')) {
                    result.networkStatus = exports.NetworkStatus.ready;
                    result.loading = false;
                }
            }
            else {
                result.partial = true;
            }
            if (__DEV__ &&
                !diff.complete &&
                !this.options.partialRefetch &&
                !result.loading &&
                !result.data &&
                !result.error) {
                logMissingFieldErrors(diff.missing);
            }
        }
        if (saveAsLastResult) {
            this.updateLastResult(result);
        }
        return result;
    };
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
        return !this.last || !equality.equal(this.last.result, newResult);
    };
    ObservableQuery.prototype.getLast = function (key, variablesMustMatch) {
        var last = this.last;
        if (last &&
            last[key] &&
            (!variablesMustMatch || equality.equal(last.variables, this.variables))) {
            return last[key];
        }
    };
    ObservableQuery.prototype.getLastResult = function (variablesMustMatch) {
        return this.getLast("result", variablesMustMatch);
    };
    ObservableQuery.prototype.getLastError = function (variablesMustMatch) {
        return this.getLast("error", variablesMustMatch);
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.last;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var _a;
        var reobserveOptions = {
            pollInterval: 0,
        };
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'standby' || fetchPolicy === 'cache-and-network') {
            reobserveOptions.fetchPolicy = fetchPolicy;
        }
        else if (fetchPolicy === 'no-cache') {
            reobserveOptions.fetchPolicy = 'no-cache';
        }
        else {
            reobserveOptions.fetchPolicy = 'network-only';
        }
        if (__DEV__ && variables && hasOwnProperty$1.call(variables, "variables")) {
            var queryDef = utilities.getQueryDefinition(this.options.query);
            var vars = queryDef.variableDefinitions;
            if (!vars || !vars.some(function (v) { return v.variable.name.value === "variables"; })) {
                __DEV__ && globals.invariant.warn("Called refetch(".concat(JSON.stringify(variables), ") for query ").concat(((_a = queryDef.name) === null || _a === void 0 ? void 0 : _a.value) || JSON.stringify(queryDef), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
            }
        }
        if (variables && !equality.equal(this.options.variables, variables)) {
            reobserveOptions.variables = this.options.variables = tslib.__assign(tslib.__assign({}, this.options.variables), variables);
        }
        this.queryInfo.resetLastWrite();
        return this.reobserve(reobserveOptions, exports.NetworkStatus.refetch);
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        var combinedOptions = tslib.__assign(tslib.__assign({}, (fetchMoreOptions.query ? fetchMoreOptions : tslib.__assign(tslib.__assign(tslib.__assign({}, this.options), fetchMoreOptions), { variables: tslib.__assign(tslib.__assign({}, this.options.variables), fetchMoreOptions.variables) }))), { fetchPolicy: "no-cache" });
        var qid = this.queryManager.generateQueryId();
        if (combinedOptions.notifyOnNetworkStatusChange) {
            this.queryInfo.networkStatus = exports.NetworkStatus.fetchMore;
            this.observe();
        }
        return this.queryManager.fetchQuery(qid, combinedOptions, exports.NetworkStatus.fetchMore).then(function (fetchMoreResult) {
            var data = fetchMoreResult.data;
            var updateQuery = fetchMoreOptions.updateQuery;
            if (updateQuery) {
                if (__DEV__ &&
                    !warnedAboutUpdateQuery) {
                    __DEV__ && globals.invariant.warn("The updateQuery callback for fetchMore is deprecated, and will be removed\nin the next major version of Apollo Client.\n\nPlease convert updateQuery functions to field policies with appropriate\nread and merge functions, or use/adapt a helper function (such as\nconcatPagination, offsetLimitPagination, or relayStylePagination) from\n@apollo/client/utilities.\n\nThe field policy system handles pagination more effectively than a\nhand-written updateQuery function, and you only need to define the policy\nonce, rather than every time you call fetchMore.");
                    warnedAboutUpdateQuery = true;
                }
                _this.updateQuery(function (previous) { return updateQuery(previous, {
                    fetchMoreResult: data,
                    variables: combinedOptions.variables,
                }); });
            }
            else {
                _this.queryManager.cache.writeQuery({
                    query: combinedOptions.query,
                    variables: combinedOptions.variables,
                    data: data,
                });
            }
            return fetchMoreResult;
        }).finally(function () {
            _this.queryManager.stopQuery(qid);
            _this.reobserve();
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context,
        })
            .subscribe({
            next: function (subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                __DEV__ && globals.invariant.error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptions.add(subscription);
        return function () {
            if (_this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (newOptions) {
        return this.reobserve(newOptions);
    };
    ObservableQuery.prototype.setVariables = function (variables) {
        if (equality.equal(this.variables, variables)) {
            return this.observers.size
                ? this.result()
                : Promise.resolve();
        }
        this.options.variables = variables;
        if (!this.observers.size) {
            return Promise.resolve();
        }
        return this.reobserve({
            fetchPolicy: this.initialFetchPolicy,
            variables: variables,
        }, exports.NetworkStatus.setVariables);
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var queryManager = this.queryManager;
        var result = queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
        var newResult = mapFn(result, {
            variables: this.variables,
        });
        if (newResult) {
            queryManager.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables,
            });
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        this.options.pollInterval = pollInterval;
        this.updatePolling();
    };
    ObservableQuery.prototype.stopPolling = function () {
        this.options.pollInterval = 0;
        this.updatePolling();
    };
    ObservableQuery.prototype.fetch = function (options, newNetworkStatus) {
        this.queryManager.setObservableQuery(this);
        return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
    };
    ObservableQuery.prototype.updatePolling = function () {
        var _this = this;
        if (this.queryManager.ssrMode) {
            return;
        }
        var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
        if (!pollInterval) {
            if (pollingInfo) {
                clearTimeout(pollingInfo.timeout);
                delete this.pollingInfo;
            }
            return;
        }
        if (pollingInfo &&
            pollingInfo.interval === pollInterval) {
            return;
        }
        __DEV__ ? globals.invariant(pollInterval, 'Attempted to start a polling query without a polling interval.') : globals.invariant(pollInterval, 10);
        var info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        var maybeFetch = function () {
            if (_this.pollingInfo) {
                if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
                    _this.reobserve({
                        fetchPolicy: "network-only",
                    }, exports.NetworkStatus.poll).then(poll, poll);
                }
                else {
                    poll();
                }
            }
        };
        var poll = function () {
            var info = _this.pollingInfo;
            if (info) {
                clearTimeout(info.timeout);
                info.timeout = setTimeout(maybeFetch, info.interval);
            }
        };
        poll();
    };
    ObservableQuery.prototype.updateLastResult = function (newResult, variables) {
        if (variables === void 0) { variables = this.variables; }
        this.last = tslib.__assign(tslib.__assign({}, this.last), { result: this.queryManager.assumeImmutableResults
                ? newResult
                : utilities.cloneDeep(newResult), variables: variables });
        if (!utilities.isNonEmptyArray(newResult.errors)) {
            delete this.last.error;
        }
        return this.last;
    };
    ObservableQuery.prototype.reobserve = function (newOptions, newNetworkStatus) {
        var _this = this;
        this.isTornDown = false;
        var useDisposableConcast = newNetworkStatus === exports.NetworkStatus.refetch ||
            newNetworkStatus === exports.NetworkStatus.fetchMore ||
            newNetworkStatus === exports.NetworkStatus.poll;
        var oldVariables = this.options.variables;
        var options = useDisposableConcast
            ? utilities.compact(this.options, newOptions)
            : assign(this.options, utilities.compact(newOptions));
        if (!useDisposableConcast) {
            this.updatePolling();
            if (newOptions &&
                newOptions.variables &&
                !newOptions.fetchPolicy &&
                !equality.equal(newOptions.variables, oldVariables)) {
                options.fetchPolicy = this.initialFetchPolicy;
                if (newNetworkStatus === void 0) {
                    newNetworkStatus = exports.NetworkStatus.setVariables;
                }
            }
        }
        var variables = options.variables && tslib.__assign({}, options.variables);
        var concast = this.fetch(options, newNetworkStatus);
        var observer = {
            next: function (result) {
                _this.reportResult(result, variables);
            },
            error: function (error) {
                _this.reportError(error, variables);
            },
        };
        if (!useDisposableConcast) {
            if (this.concast && this.observer) {
                this.concast.removeObserver(this.observer, true);
            }
            this.concast = concast;
            this.observer = observer;
        }
        concast.addObserver(observer);
        return concast.promise;
    };
    ObservableQuery.prototype.observe = function () {
        this.reportResult(this.getCurrentResult(false), this.variables);
    };
    ObservableQuery.prototype.reportResult = function (result, variables) {
        if (this.getLastError() || this.isDifferentFromLastResult(result)) {
            this.updateLastResult(result, variables);
            utilities.iterateObserversSafely(this.observers, 'next', result);
        }
    };
    ObservableQuery.prototype.reportError = function (error, variables) {
        var errorResult = tslib.__assign(tslib.__assign({}, this.getLastResult()), { error: error, errors: error.graphQLErrors, networkStatus: exports.NetworkStatus.error, loading: false });
        this.updateLastResult(errorResult, variables);
        utilities.iterateObserversSafely(this.observers, 'error', this.last.error = error);
    };
    ObservableQuery.prototype.hasObservers = function () {
        return this.observers.size > 0;
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        if (this.isTornDown)
            return;
        if (this.concast && this.observer) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
            delete this.observer;
        }
        this.stopPolling();
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.clear();
        this.queryManager.stopQuery(this.queryId);
        this.observers.clear();
        this.isTornDown = true;
    };
    return ObservableQuery;
}(utilities.Observable));
utilities.fixObservableSubclass(ObservableQuery);
function defaultSubscriptionObserverErrorCallback(error) {
    __DEV__ && globals.invariant.error('Unhandled error', error.message, error.stack);
}
function logMissingFieldErrors(missing) {
    if (__DEV__ && missing) {
        __DEV__ && globals.invariant.debug("Missing cache result fields: ".concat(JSON.stringify(missing)), missing);
    }
}
function applyNextFetchPolicy(options) {
    var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, nextFetchPolicy = options.nextFetchPolicy;
    if (nextFetchPolicy) {
        options.fetchPolicy = typeof nextFetchPolicy === "function"
            ? nextFetchPolicy.call(options, fetchPolicy)
            : nextFetchPolicy;
    }
}

var LocalState = (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = utilities.mergeDeep(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = utilities.mergeDeep(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    LocalState.prototype.runResolvers = function (_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                if (document) {
                    return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return (tslib.__assign(tslib.__assign({}, remoteResult), { data: localResult.result })); })];
                }
                return [2, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    LocalState.prototype.clientQuery = function (document) {
        if (utilities.hasDirectives(['client'], document)) {
            if (this.resolvers) {
                return document;
            }
        }
        return null;
    };
    LocalState.prototype.serverQuery = function (document) {
        return utilities.removeClientSetsFromDocument(document);
    };
    LocalState.prototype.prepareContext = function (context) {
        var cache = this.cache;
        return tslib.__assign(tslib.__assign({}, context), { cache: cache, getCacheKey: function (obj) {
                return cache.identify(obj);
            } });
    };
    LocalState.prototype.addExportedVariables = function (document, variables, context) {
        if (variables === void 0) { variables = {}; }
        if (context === void 0) { context = {}; }
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                if (document) {
                    return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return (tslib.__assign(tslib.__assign({}, variables), data.exportedVariables)); })];
                }
                return [2, tslib.__assign({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        graphql.visit(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === 'always' &&
                                arg.value.kind === 'BooleanValue' &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return graphql.BREAK;
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: utilities.buildQueryFromSelectionSet(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) { context = {}; }
        if (variables === void 0) { variables = {}; }
        if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
        if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
        return tslib.__awaiter(this, void 0, void 0, function () {
            var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;
            return tslib.__generator(this, function (_b) {
                mainDefinition = utilities.getMainDefinition(document);
                fragments = utilities.getFragmentDefinitions(document);
                fragmentMap = utilities.createFragmentMap(fragments);
                definitionOperation = mainDefinition
                    .operation;
                defaultOperationType = definitionOperation
                    ? definitionOperation.charAt(0).toUpperCase() +
                        definitionOperation.slice(1)
                    : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: tslib.__assign(tslib.__assign({}, context), { cache: cache, client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return tslib.__generator(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return tslib.__awaiter(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return tslib.__generator(this, function (_a) {
                        if (!utilities.shouldInclude(selection, variables)) {
                            return [2];
                        }
                        if (utilities.isField(selection)) {
                            return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') {
                                        resultsToMerge.push((_a = {},
                                            _a[utilities.resultKeyNameFromField(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if (utilities.isInlineFragment(selection)) {
                            fragment = selection;
                        }
                        else {
                            fragment = fragmentMap[selection.name.value];
                            __DEV__ ? globals.invariant(fragment, "No fragment named ".concat(selection.name.value)) : globals.invariant(fragment, 9);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2];
                    });
                }); };
                return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return utilities.mergeDeepArray(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, rootValue, execContext) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return tslib.__generator(this, function (_a) {
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = utilities.resultKeyNameFromField(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(cache.cacheSlot.withValue(this.cache, resolve, [
                                rootValue,
                                utilities.argumentsObjectFromField(field, variables),
                                execContext.context,
                                { field: field, fragmentMap: execContext.fragmentMap },
                            ]));
                        }
                    }
                }
                return [2, resultPromise.then(function (result) {
                        if (result === void 0) { result = defaultResult; }
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === 'export' && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        if (!field.selectionSet) {
                            return result;
                        }
                        if (result == null) {
                            return result;
                        }
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, result, execContext);
                        }
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, item, execContext);
            }
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, item, execContext);
            }
        }));
    };
    return LocalState;
}());

var destructiveMethodCounts = new (utilities.canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
    var original = cache[methodName];
    if (typeof original === "function") {
        cache[methodName] = function () {
            destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
            return original.apply(this, arguments);
        };
    }
}
function cancelNotifyTimeout(info) {
    if (info["notifyTimeout"]) {
        clearTimeout(info["notifyTimeout"]);
        info["notifyTimeout"] = void 0;
    }
}
var QueryInfo = (function () {
    function QueryInfo(queryManager, queryId) {
        if (queryId === void 0) { queryId = queryManager.generateQueryId(); }
        this.queryId = queryId;
        this.listeners = new Set();
        this.document = null;
        this.lastRequestId = 1;
        this.subscriptions = new Set();
        this.stopped = false;
        this.dirty = false;
        this.observableQuery = null;
        var cache = this.cache = queryManager.cache;
        if (!destructiveMethodCounts.has(cache)) {
            destructiveMethodCounts.set(cache, 0);
            wrapDestructiveCacheMethod(cache, "evict");
            wrapDestructiveCacheMethod(cache, "modify");
            wrapDestructiveCacheMethod(cache, "reset");
        }
    }
    QueryInfo.prototype.init = function (query) {
        var networkStatus = query.networkStatus || exports.NetworkStatus.loading;
        if (this.variables &&
            this.networkStatus !== exports.NetworkStatus.loading &&
            !equality.equal(this.variables, query.variables)) {
            networkStatus = exports.NetworkStatus.setVariables;
        }
        if (!equality.equal(query.variables, this.variables)) {
            this.lastDiff = void 0;
        }
        Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: networkStatus,
        });
        if (query.observableQuery) {
            this.setObservableQuery(query.observableQuery);
        }
        if (query.lastRequestId) {
            this.lastRequestId = query.lastRequestId;
        }
        return this;
    };
    QueryInfo.prototype.reset = function () {
        cancelNotifyTimeout(this);
        this.lastDiff = void 0;
        this.dirty = false;
    };
    QueryInfo.prototype.getDiff = function (variables) {
        if (variables === void 0) { variables = this.variables; }
        var options = this.getDiffOptions(variables);
        if (this.lastDiff && equality.equal(options, this.lastDiff.options)) {
            return this.lastDiff.diff;
        }
        this.updateWatch(this.variables = variables);
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return { complete: false };
        }
        var diff = this.cache.diff(options);
        this.updateLastDiff(diff, options);
        return diff;
    };
    QueryInfo.prototype.updateLastDiff = function (diff, options) {
        this.lastDiff = diff ? {
            diff: diff,
            options: options || this.getDiffOptions(),
        } : void 0;
    };
    QueryInfo.prototype.getDiffOptions = function (variables) {
        var _a;
        if (variables === void 0) { variables = this.variables; }
        return {
            query: this.document,
            variables: variables,
            returnPartialData: true,
            optimistic: true,
            canonizeResults: (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a.options.canonizeResults,
        };
    };
    QueryInfo.prototype.setDiff = function (diff) {
        var _this = this;
        var oldDiff = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(diff);
        if (!this.dirty &&
            !equality.equal(oldDiff && oldDiff.result, diff && diff.result)) {
            this.dirty = true;
            if (!this.notifyTimeout) {
                this.notifyTimeout = setTimeout(function () { return _this.notify(); }, 0);
            }
        }
    };
    QueryInfo.prototype.setObservableQuery = function (oq) {
        var _this = this;
        if (oq === this.observableQuery)
            return;
        if (this.oqListener) {
            this.listeners.delete(this.oqListener);
        }
        this.observableQuery = oq;
        if (oq) {
            oq["queryInfo"] = this;
            this.listeners.add(this.oqListener = function () {
                if (_this.getDiff().fromOptimisticTransaction) {
                    oq["observe"]();
                }
                else {
                    oq.reobserve();
                }
            });
        }
        else {
            delete this.oqListener;
        }
    };
    QueryInfo.prototype.notify = function () {
        var _this = this;
        cancelNotifyTimeout(this);
        if (this.shouldNotify()) {
            this.listeners.forEach(function (listener) { return listener(_this); });
        }
        this.dirty = false;
    };
    QueryInfo.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) {
            return false;
        }
        if (isNetworkRequestInFlight(this.networkStatus) &&
            this.observableQuery) {
            var fetchPolicy = this.observableQuery.options.fetchPolicy;
            if (fetchPolicy !== "cache-only" &&
                fetchPolicy !== "cache-and-network") {
                return false;
            }
        }
        return true;
    };
    QueryInfo.prototype.stop = function () {
        if (!this.stopped) {
            this.stopped = true;
            this.reset();
            this.cancel();
            this.cancel = QueryInfo.prototype.cancel;
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
            var oq = this.observableQuery;
            if (oq)
                oq.stopPolling();
        }
    };
    QueryInfo.prototype.cancel = function () { };
    QueryInfo.prototype.updateWatch = function (variables) {
        var _this = this;
        if (variables === void 0) { variables = this.variables; }
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return;
        }
        var watchOptions = tslib.__assign(tslib.__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function (diff) { return _this.setDiff(diff); } });
        if (!this.lastWatch ||
            !equality.equal(watchOptions, this.lastWatch)) {
            this.cancel();
            this.cancel = this.cache.watch(this.lastWatch = watchOptions);
        }
    };
    QueryInfo.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
    };
    QueryInfo.prototype.shouldWrite = function (result, variables) {
        var lastWrite = this.lastWrite;
        return !(lastWrite &&
            lastWrite.dmCount === destructiveMethodCounts.get(this.cache) &&
            equality.equal(variables, lastWrite.variables) &&
            equality.equal(result.data, lastWrite.result.data));
    };
    QueryInfo.prototype.markResult = function (result, options, cacheWriteBehavior) {
        var _this = this;
        this.graphQLErrors = utilities.isNonEmptyArray(result.errors) ? result.errors : [];
        this.reset();
        if (options.fetchPolicy === 'no-cache') {
            this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
        }
        else if (cacheWriteBehavior !== 0) {
            if (shouldWriteResult(result, options.errorPolicy)) {
                this.cache.performTransaction(function (cache) {
                    if (_this.shouldWrite(result, options.variables)) {
                        cache.writeQuery({
                            query: _this.document,
                            data: result.data,
                            variables: options.variables,
                            overwrite: cacheWriteBehavior === 1,
                        });
                        _this.lastWrite = {
                            result: result,
                            variables: options.variables,
                            dmCount: destructiveMethodCounts.get(_this.cache),
                        };
                    }
                    else {
                        if (_this.lastDiff &&
                            _this.lastDiff.diff.complete) {
                            result.data = _this.lastDiff.diff.result;
                            return;
                        }
                    }
                    var diffOptions = _this.getDiffOptions(options.variables);
                    var diff = cache.diff(diffOptions);
                    if (!_this.stopped) {
                        _this.updateWatch(options.variables);
                    }
                    _this.updateLastDiff(diff, diffOptions);
                    if (diff.complete) {
                        result.data = diff.result;
                    }
                });
            }
            else {
                this.lastWrite = void 0;
            }
        }
    };
    QueryInfo.prototype.markReady = function () {
        this.networkError = null;
        return this.networkStatus = exports.NetworkStatus.ready;
    };
    QueryInfo.prototype.markError = function (error) {
        this.networkStatus = exports.NetworkStatus.error;
        this.lastWrite = void 0;
        this.reset();
        if (error.graphQLErrors) {
            this.graphQLErrors = error.graphQLErrors;
        }
        if (error.networkError) {
            this.networkError = error.networkError;
        }
        return error;
    };
    return QueryInfo;
}());
function shouldWriteResult(result, errorPolicy) {
    if (errorPolicy === void 0) { errorPolicy = "none"; }
    var ignoreErrors = errorPolicy === "ignore" ||
        errorPolicy === "all";
    var writeWithErrors = !utilities.graphQLResultHasError(result);
    if (!writeWithErrors && ignoreErrors && result.data) {
        writeWithErrors = true;
    }
    return writeWithErrors;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = (function () {
    function QueryManager(_a) {
        var cache = _a.cache, link = _a.link, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a.onBroadcast, _c = _a.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.clientAwareness = {};
        this.queries = new Map();
        this.fetchCancelFns = new Map();
        this.transformCache = new (utilities.canUseWeakMap ? WeakMap : Map)();
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        this.inFlightLinkObservables = new Map();
        this.cache = cache;
        this.link = link;
        this.queryDeduplication = queryDeduplication;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new LocalState({ cache: cache });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
        if ((this.onBroadcast = onBroadcast)) {
            this.mutationStore = Object.create(null);
        }
    }
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches(__DEV__ ? new globals.InvariantError('QueryManager stopped while query was in flight') : new globals.InvariantError(11));
    };
    QueryManager.prototype.cancelPendingFetches = function (error) {
        this.fetchCancelFns.forEach(function (cancel) { return cancel(error); });
        this.fetchCancelFns.clear();
    };
    QueryManager.prototype.mutate = function (_a) {
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueries = _a.updateQueries, _b = _a.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a.update, onQueryUpdated = _a.onQueryUpdated, _d = _a.errorPolicy, errorPolicy = _d === void 0 ? 'none' : _d, _e = _a.fetchPolicy, fetchPolicy = _e === void 0 ? 'network-only' : _e, keepRootFields = _a.keepRootFields, context = _a.context;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var mutationId, mutationStoreValue, self;
            return tslib.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        __DEV__ ? globals.invariant(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.') : globals.invariant(mutation, 12);
                        __DEV__ ? globals.invariant(fetchPolicy === 'network-only' ||
                            fetchPolicy === 'no-cache', "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : globals.invariant(fetchPolicy === 'network-only' ||
                            fetchPolicy === 'no-cache', 13);
                        mutationId = this.generateMutationId();
                        mutation = this.transform(mutation).document;
                        variables = this.getVariables(mutation, variables);
                        if (!this.transform(mutation).hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        variables = (_f.sent());
                        _f.label = 2;
                    case 2:
                        mutationStoreValue = this.mutationStore &&
                            (this.mutationStore[mutationId] = {
                                mutation: mutation,
                                variables: variables,
                                loading: true,
                                error: null,
                            });
                        if (optimisticResponse) {
                            this.markMutationOptimistic(optimisticResponse, {
                                mutationId: mutationId,
                                document: mutation,
                                variables: variables,
                                fetchPolicy: fetchPolicy,
                                errorPolicy: errorPolicy,
                                context: context,
                                updateQueries: updateQueries,
                                update: updateWithProxyFn,
                                keepRootFields: keepRootFields,
                            });
                        }
                        this.broadcastQueries();
                        self = this;
                        return [2, new Promise(function (resolve, reject) {
                                return utilities.asyncMap(self.getObservableFromLink(mutation, tslib.__assign(tslib.__assign({}, context), { optimisticResponse: optimisticResponse }), variables, false), function (result) {
                                    if (utilities.graphQLResultHasError(result) && errorPolicy === 'none') {
                                        throw new errors.ApolloError({
                                            graphQLErrors: result.errors,
                                        });
                                    }
                                    if (mutationStoreValue) {
                                        mutationStoreValue.loading = false;
                                        mutationStoreValue.error = null;
                                    }
                                    var storeResult = tslib.__assign({}, result);
                                    if (typeof refetchQueries === "function") {
                                        refetchQueries = refetchQueries(storeResult);
                                    }
                                    if (errorPolicy === 'ignore' &&
                                        utilities.graphQLResultHasError(storeResult)) {
                                        delete storeResult.errors;
                                    }
                                    return self.markMutationResult({
                                        mutationId: mutationId,
                                        result: storeResult,
                                        document: mutation,
                                        variables: variables,
                                        fetchPolicy: fetchPolicy,
                                        errorPolicy: errorPolicy,
                                        context: context,
                                        update: updateWithProxyFn,
                                        updateQueries: updateQueries,
                                        awaitRefetchQueries: awaitRefetchQueries,
                                        refetchQueries: refetchQueries,
                                        removeOptimistic: optimisticResponse ? mutationId : void 0,
                                        onQueryUpdated: onQueryUpdated,
                                        keepRootFields: keepRootFields,
                                    });
                                }).subscribe({
                                    next: function (storeResult) {
                                        self.broadcastQueries();
                                        resolve(storeResult);
                                    },
                                    error: function (err) {
                                        if (mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = err;
                                        }
                                        if (optimisticResponse) {
                                            self.cache.removeOptimistic(mutationId);
                                        }
                                        self.broadcastQueries();
                                        reject(err instanceof errors.ApolloError ? err : new errors.ApolloError({
                                            networkError: err,
                                        }));
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.markMutationResult = function (mutation, cache) {
        var _this = this;
        if (cache === void 0) { cache = this.cache; }
        var result = mutation.result;
        var cacheWrites = [];
        var skipCache = mutation.fetchPolicy === "no-cache";
        if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
            cacheWrites.push({
                result: result.data,
                dataId: 'ROOT_MUTATION',
                query: mutation.document,
                variables: mutation.variables,
            });
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) {
                this.queries.forEach(function (_a, queryId) {
                    var observableQuery = _a.observableQuery;
                    var queryName = observableQuery && observableQuery.queryName;
                    if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
                        return;
                    }
                    var updater = updateQueries_1[queryName];
                    var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
                    var _c = cache.diff({
                        query: document,
                        variables: variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _c.result, complete = _c.complete;
                    if (complete && currentQueryResult) {
                        var nextQueryResult = updater(currentQueryResult, {
                            mutationResult: result,
                            queryName: document && utilities.getOperationName(document) || void 0,
                            queryVariables: variables,
                        });
                        if (nextQueryResult) {
                            cacheWrites.push({
                                result: nextQueryResult,
                                dataId: 'ROOT_QUERY',
                                query: document,
                                variables: variables,
                            });
                        }
                    }
                });
            }
        }
        if (cacheWrites.length > 0 ||
            mutation.refetchQueries ||
            mutation.update ||
            mutation.onQueryUpdated ||
            mutation.removeOptimistic) {
            var results_1 = [];
            this.refetchQueries({
                updateCache: function (cache) {
                    if (!skipCache) {
                        cacheWrites.forEach(function (write) { return cache.write(write); });
                    }
                    var update = mutation.update;
                    if (update) {
                        if (!skipCache) {
                            var diff = cache.diff({
                                id: "ROOT_MUTATION",
                                query: _this.transform(mutation.document).asQuery,
                                variables: mutation.variables,
                                optimistic: false,
                                returnPartialData: true,
                            });
                            if (diff.complete) {
                                result = tslib.__assign(tslib.__assign({}, result), { data: diff.result });
                            }
                        }
                        update(cache, result, {
                            context: mutation.context,
                            variables: mutation.variables,
                        });
                    }
                    if (!skipCache && !mutation.keepRootFields) {
                        cache.modify({
                            id: 'ROOT_MUTATION',
                            fields: function (value, _a) {
                                var fieldName = _a.fieldName, DELETE = _a.DELETE;
                                return fieldName === "__typename" ? value : DELETE;
                            },
                        });
                    }
                },
                include: mutation.refetchQueries,
                optimistic: false,
                removeOptimistic: mutation.removeOptimistic,
                onQueryUpdated: mutation.onQueryUpdated || null,
            }).forEach(function (result) { return results_1.push(result); });
            if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
                return Promise.all(results_1).then(function () { return result; });
            }
        }
        return Promise.resolve(result);
    };
    QueryManager.prototype.markMutationOptimistic = function (optimisticResponse, mutation) {
        var _this = this;
        var data = typeof optimisticResponse === "function"
            ? optimisticResponse(mutation.variables)
            : optimisticResponse;
        return this.cache.recordOptimisticTransaction(function (cache) {
            try {
                _this.markMutationResult(tslib.__assign(tslib.__assign({}, mutation), { result: { data: data } }), cache);
            }
            catch (error) {
                __DEV__ && globals.invariant.error(error);
            }
        }, mutation.mutationId);
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, networkStatus) {
        return this.fetchQueryObservable(queryId, options, networkStatus).promise;
    };
    QueryManager.prototype.getQueryStore = function () {
        var store = Object.create(null);
        this.queries.forEach(function (info, queryId) {
            store[queryId] = {
                variables: info.variables,
                networkStatus: info.networkStatus,
                networkError: info.networkError,
                graphQLErrors: info.graphQLErrors,
            };
        });
        return store;
    };
    QueryManager.prototype.resetErrors = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) {
            queryInfo.networkError = undefined;
            queryInfo.graphQLErrors = [];
        }
    };
    QueryManager.prototype.transform = function (document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var transformed = this.cache.transformDocument(document);
            var forLink = utilities.removeConnectionDirectiveFromDocument(this.cache.transformForLink(transformed));
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = forLink && this.localState.serverQuery(forLink);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: utilities.hasClientExports(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: utilities.getDefaultValues(utilities.getOperationDefinition(transformed)),
                asQuery: tslib.__assign(tslib.__assign({}, transformed), { definitions: transformed.definitions.map(function (def) {
                        if (def.kind === "OperationDefinition" &&
                            def.operation !== "query") {
                            return tslib.__assign(tslib.__assign({}, def), { operation: "query" });
                        }
                        return def;
                    }) })
            };
            var add = function (doc) {
                if (doc && !transformCache.has(doc)) {
                    transformCache.set(doc, cacheEntry_1);
                }
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager.prototype.getVariables = function (document, variables) {
        return tslib.__assign(tslib.__assign({}, this.transform(document).defaultVars), variables);
    };
    QueryManager.prototype.watchQuery = function (options) {
        options = tslib.__assign(tslib.__assign({}, options), { variables: this.getVariables(options.query, options.variables) });
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var queryInfo = new QueryInfo(this);
        var observable = new ObservableQuery({
            queryManager: this,
            queryInfo: queryInfo,
            options: options,
        });
        this.queries.set(observable.queryId, queryInfo);
        queryInfo.init({
            document: options.query,
            observableQuery: observable,
            variables: options.variables,
        });
        return observable;
    };
    QueryManager.prototype.query = function (options, queryId) {
        var _this = this;
        if (queryId === void 0) { queryId = this.generateQueryId(); }
        __DEV__ ? globals.invariant(options.query, 'query option is required. You must specify your GraphQL document ' +
            'in the query option.') : globals.invariant(options.query, 14);
        __DEV__ ? globals.invariant(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.') : globals.invariant(options.query.kind === 'Document', 15);
        __DEV__ ? globals.invariant(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.') : globals.invariant(!options.returnPartialData, 16);
        __DEV__ ? globals.invariant(!options.pollInterval, 'pollInterval option only supported on watchQuery.') : globals.invariant(!options.pollInterval, 17);
        return this.fetchQuery(queryId, options).finally(function () { return _this.stopQuery(queryId); });
    };
    QueryManager.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++);
    };
    QueryManager.prototype.generateRequestId = function () {
        return this.requestIdCounter++;
    };
    QueryManager.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++);
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo)
            queryInfo.stop();
    };
    QueryManager.prototype.clearStore = function (options) {
        if (options === void 0) { options = {
            discardWatches: true,
        }; }
        this.cancelPendingFetches(__DEV__ ? new globals.InvariantError('Store reset while query was in flight (not completed in link chain)') : new globals.InvariantError(18));
        this.queries.forEach(function (queryInfo) {
            if (queryInfo.observableQuery) {
                queryInfo.networkStatus = exports.NetworkStatus.loading;
            }
            else {
                queryInfo.stop();
            }
        });
        if (this.mutationStore) {
            this.mutationStore = Object.create(null);
        }
        return this.cache.reset(options);
    };
    QueryManager.prototype.getObservableQueries = function (include) {
        var _this = this;
        if (include === void 0) { include = "active"; }
        var queries = new Map();
        var queryNamesAndDocs = new Map();
        var legacyQueryOptions = new Set();
        if (Array.isArray(include)) {
            include.forEach(function (desc) {
                if (typeof desc === "string") {
                    queryNamesAndDocs.set(desc, false);
                }
                else if (utilities.isDocumentNode(desc)) {
                    queryNamesAndDocs.set(_this.transform(desc).document, false);
                }
                else if (utilities.isNonNullObject(desc) && desc.query) {
                    legacyQueryOptions.add(desc);
                }
            });
        }
        this.queries.forEach(function (_a, queryId) {
            var oq = _a.observableQuery, document = _a.document;
            if (oq) {
                if (include === "all") {
                    queries.set(queryId, oq);
                    return;
                }
                var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
                if (fetchPolicy === "standby" ||
                    (include === "active" && !oq.hasObservers())) {
                    return;
                }
                if (include === "active" ||
                    (queryName && queryNamesAndDocs.has(queryName)) ||
                    (document && queryNamesAndDocs.has(document))) {
                    queries.set(queryId, oq);
                    if (queryName)
                        queryNamesAndDocs.set(queryName, true);
                    if (document)
                        queryNamesAndDocs.set(document, true);
                }
            }
        });
        if (legacyQueryOptions.size) {
            legacyQueryOptions.forEach(function (options) {
                var queryId = utilities.makeUniqueId("legacyOneTimeQuery");
                var queryInfo = _this.getQuery(queryId).init({
                    document: options.query,
                    variables: options.variables,
                });
                var oq = new ObservableQuery({
                    queryManager: _this,
                    queryInfo: queryInfo,
                    options: tslib.__assign(tslib.__assign({}, options), { fetchPolicy: "network-only" }),
                });
                globals.invariant(oq.queryId === queryId);
                queryInfo.setObservableQuery(oq);
                queries.set(queryId, oq);
            });
        }
        if (__DEV__ && queryNamesAndDocs.size) {
            queryNamesAndDocs.forEach(function (included, nameOrDoc) {
                if (!included) {
                    __DEV__ && globals.invariant.warn("Unknown query ".concat(typeof nameOrDoc === "string" ? "named " : "").concat(JSON.stringify(nameOrDoc, null, 2), " requested in refetchQueries options.include array"));
                }
            });
        }
        return queries;
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var _this = this;
        if (includeStandby === void 0) { includeStandby = false; }
        var observableQueryPromises = [];
        this.getObservableQueries(includeStandby ? "all" : "active").forEach(function (observableQuery, queryId) {
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (includeStandby ||
                (fetchPolicy !== "standby" &&
                    fetchPolicy !== "cache-only")) {
                observableQueryPromises.push(observableQuery.refetch());
            }
            _this.getQuery(queryId).setDiff(null);
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.setObservableQuery = function (observableQuery) {
        this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager.prototype.startGraphQLSubscription = function (_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, errorPolicy = _a.errorPolicy, variables = _a.variables, _b = _a.context, context = _b === void 0 ? {} : _b;
        query = this.transform(query).document;
        variables = this.getVariables(query, variables);
        var makeObservable = function (variables) {
            return _this.getObservableFromLink(query, context, variables).map(function (result) {
                if (fetchPolicy !== 'no-cache') {
                    if (shouldWriteResult(result, errorPolicy)) {
                        _this.cache.write({
                            query: query,
                            result: result.data,
                            dataId: 'ROOT_SUBSCRIPTION',
                            variables: variables,
                        });
                    }
                    _this.broadcastQueries();
                }
                if (utilities.graphQLResultHasError(result)) {
                    throw new errors.ApolloError({
                        graphQLErrors: result.errors,
                    });
                }
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
            return new utilities.Observable(function (observer) {
                var sub = null;
                observablePromise_1.then(function (observable) { return sub = observable.subscribe(observer); }, observer.error);
                return function () { return sub && sub.unsubscribe(); };
            });
        }
        return makeObservable(variables);
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        this.fetchCancelFns.delete(queryId);
        this.getQuery(queryId).stop();
        this.queries.delete(queryId);
    };
    QueryManager.prototype.broadcastQueries = function () {
        if (this.onBroadcast)
            this.onBroadcast();
        this.queries.forEach(function (info) { return info.notify(); });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
        var _this = this;
        var _a;
        if (deduplication === void 0) { deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication; }
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: utilities.getOperationName(serverQuery) || void 0,
                context: this.prepareContext(tslib.__assign(tslib.__assign({}, context), { forceFetch: !deduplication })),
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = cache.canonicalStringify(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    var concast = new utilities.Concast([
                        core.execute(link, operation)
                    ]);
                    byVariables_1.set(varJson_1, observable = concast);
                    concast.cleanup(function () {
                        if (byVariables_1.delete(varJson_1) &&
                            byVariables_1.size < 1) {
                            inFlightLinkObservables_1.delete(serverQuery);
                        }
                    });
                }
            }
            else {
                observable = new utilities.Concast([
                    core.execute(link, operation)
                ]);
            }
        }
        else {
            observable = new utilities.Concast([
                utilities.Observable.of({ data: {} })
            ]);
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) {
            observable = utilities.asyncMap(observable, function (result) {
                return _this.localState.runResolvers({
                    document: clientQuery,
                    remoteResult: result,
                    context: context,
                    variables: variables,
                });
            });
        }
        return observable;
    };
    QueryManager.prototype.getResultsFromLink = function (queryInfo, cacheWriteBehavior, options) {
        var requestId = queryInfo.lastRequestId = this.generateRequestId();
        return utilities.asyncMap(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function (result) {
            var hasErrors = utilities.isNonEmptyArray(result.errors);
            if (requestId >= queryInfo.lastRequestId) {
                if (hasErrors && options.errorPolicy === "none") {
                    throw queryInfo.markError(new errors.ApolloError({
                        graphQLErrors: result.errors,
                    }));
                }
                queryInfo.markResult(result, options, cacheWriteBehavior);
                queryInfo.markReady();
            }
            var aqr = {
                data: result.data,
                loading: false,
                networkStatus: queryInfo.networkStatus || exports.NetworkStatus.ready,
            };
            if (hasErrors && options.errorPolicy !== "ignore") {
                aqr.errors = result.errors;
            }
            return aqr;
        }, function (networkError) {
            var error = errors.isApolloError(networkError)
                ? networkError
                : new errors.ApolloError({ networkError: networkError });
            if (requestId >= queryInfo.lastRequestId) {
                queryInfo.markError(error);
            }
            throw error;
        });
    };
    QueryManager.prototype.fetchQueryObservable = function (queryId, options, networkStatus) {
        var _this = this;
        if (networkStatus === void 0) { networkStatus = exports.NetworkStatus.loading; }
        var query = this.transform(options.query).document;
        var variables = this.getVariables(query, options.variables);
        var queryInfo = this.getQuery(queryId);
        var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        var normalized = Object.assign({}, options, {
            query: query,
            variables: variables,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
            returnPartialData: returnPartialData,
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            context: context,
        });
        var fromVariables = function (variables) {
            normalized.variables = variables;
            return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
        };
        this.fetchCancelFns.set(queryId, function (reason) {
            setTimeout(function () { return concast.cancel(reason); });
        });
        var concast = new utilities.Concast(this.transform(normalized.query).hasClientExports
            ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables)
            : fromVariables(normalized.variables));
        concast.cleanup(function () {
            _this.fetchCancelFns.delete(queryId);
            applyNextFetchPolicy(options);
        });
        return concast;
    };
    QueryManager.prototype.refetchQueries = function (_a) {
        var _this = this;
        var updateCache = _a.updateCache, include = _a.include, _b = _a.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? utilities.makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a.onQueryUpdated;
        var includedQueriesById = new Map();
        if (include) {
            this.getObservableQueries(include).forEach(function (oq, queryId) {
                includedQueriesById.set(queryId, {
                    oq: oq,
                    lastDiff: _this.getQuery(queryId).getDiff(),
                });
            });
        }
        var results = new Map;
        if (updateCache) {
            this.cache.batch({
                update: updateCache,
                optimistic: optimistic && removeOptimistic || false,
                removeOptimistic: removeOptimistic,
                onWatchUpdated: function (watch, diff, lastDiff) {
                    var oq = watch.watcher instanceof QueryInfo &&
                        watch.watcher.observableQuery;
                    if (oq) {
                        if (onQueryUpdated) {
                            includedQueriesById.delete(oq.queryId);
                            var result = onQueryUpdated(oq, diff, lastDiff);
                            if (result === true) {
                                result = oq.refetch();
                            }
                            if (result !== false) {
                                results.set(oq, result);
                            }
                            return result;
                        }
                        if (onQueryUpdated !== null) {
                            includedQueriesById.set(oq.queryId, { oq: oq, lastDiff: lastDiff, diff: diff });
                        }
                    }
                },
            });
        }
        if (includedQueriesById.size) {
            includedQueriesById.forEach(function (_a, queryId) {
                var oq = _a.oq, lastDiff = _a.lastDiff, diff = _a.diff;
                var result;
                if (onQueryUpdated) {
                    if (!diff) {
                        var info = oq["queryInfo"];
                        info.reset();
                        diff = info.getDiff();
                    }
                    result = onQueryUpdated(oq, diff, lastDiff);
                }
                if (!onQueryUpdated || result === true) {
                    result = oq.refetch();
                }
                if (result !== false) {
                    results.set(oq, result);
                }
                if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
                    _this.stopQueryNoBroadcast(queryId);
                }
            });
        }
        if (removeOptimistic) {
            this.cache.removeOptimistic(removeOptimistic);
        }
        return results;
    };
    QueryManager.prototype.fetchQueryByPolicy = function (queryInfo, _a, networkStatus) {
        var _this = this;
        var query = _a.query, variables = _a.variables, fetchPolicy = _a.fetchPolicy, refetchWritePolicy = _a.refetchWritePolicy, errorPolicy = _a.errorPolicy, returnPartialData = _a.returnPartialData, context = _a.context, notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
        var oldNetworkStatus = queryInfo.networkStatus;
        queryInfo.init({
            document: query,
            variables: variables,
            networkStatus: networkStatus,
        });
        var readCache = function () { return queryInfo.getDiff(variables); };
        var resultsFromCache = function (diff, networkStatus) {
            if (networkStatus === void 0) { networkStatus = queryInfo.networkStatus || exports.NetworkStatus.loading; }
            var data = diff.result;
            if (__DEV__ &&
                !returnPartialData &&
                !equality.equal(data, {})) {
                logMissingFieldErrors(diff.missing);
            }
            var fromData = function (data) { return utilities.Observable.of(tslib.__assign({ data: data, loading: isNetworkRequestInFlight(networkStatus), networkStatus: networkStatus }, (diff.complete ? null : { partial: true }))); };
            if (data && _this.transform(query).hasForcedResolvers) {
                return _this.localState.runResolvers({
                    document: query,
                    remoteResult: { data: data },
                    context: context,
                    variables: variables,
                    onlyRunForcedResolvers: true,
                }).then(function (resolved) { return fromData(resolved.data || void 0); });
            }
            return fromData(data);
        };
        var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 :
            (networkStatus === exports.NetworkStatus.refetch &&
                refetchWritePolicy !== "merge") ? 1
                : 2;
        var resultsFromLink = function () {
            return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
                variables: variables,
                context: context,
                fetchPolicy: fetchPolicy,
                errorPolicy: errorPolicy,
            });
        };
        var shouldNotify = notifyOnNetworkStatusChange &&
            typeof oldNetworkStatus === "number" &&
            oldNetworkStatus !== networkStatus &&
            isNetworkRequestInFlight(networkStatus);
        switch (fetchPolicy) {
            default:
            case "cache-first": {
                var diff = readCache();
                if (diff.complete) {
                    return [
                        resultsFromCache(diff, queryInfo.markReady()),
                    ];
                }
                if (returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-and-network": {
                var diff = readCache();
                if (diff.complete || returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-only":
                return [
                    resultsFromCache(readCache(), queryInfo.markReady()),
                ];
            case "network-only":
                if (shouldNotify) {
                    return [
                        resultsFromCache(readCache()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "no-cache":
                if (shouldNotify) {
                    return [
                        resultsFromCache(queryInfo.getDiff()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "standby":
                return [];
        }
    };
    QueryManager.prototype.getQuery = function (queryId) {
        if (queryId && !this.queries.has(queryId)) {
            this.queries.set(queryId, new QueryInfo(this, queryId));
        }
        return this.queries.get(queryId);
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return tslib.__assign(tslib.__assign({}, newContext), { clientAwareness: this.clientAwareness });
    };
    return QueryManager;
}());

var hasSuggestedDevtools = false;
function mergeOptions(defaults, options) {
    return utilities.compact(defaults, options, options.variables && {
        variables: tslib.__assign(tslib.__assign({}, defaults.variables), options.variables),
    });
}
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.defaultOptions = {};
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === 'object' &&
            !window.__APOLLO_CLIENT__ &&
            __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link) {
            link = uri
                ? new http.HttpLink({ uri: uri, credentials: credentials, headers: headers })
                : core.ApolloLink.empty();
        }
        if (!cache) {
            throw __DEV__ ? new globals.InvariantError("To initialize Apollo Client, you must specify a 'cache' property " +
                "in the options object. \n" +
                "For more information, please visit: https://go.apollo.dev/c/docs") : new globals.InvariantError(7);
        }
        this.link = link;
        this.cache = cache;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || {};
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        if (connectToDevTools && typeof window === 'object') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && __DEV__) {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self &&
                !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                var nav = window.navigator;
                var ua = nav && nav.userAgent;
                var url = void 0;
                if (typeof ua === "string") {
                    if (ua.indexOf("Chrome/") > -1) {
                        url = "https://chrome.google.com/webstore/detail/" +
                            "apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                    }
                    else if (ua.indexOf("Firefox/") > -1) {
                        url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                    }
                }
                if (url) {
                    __DEV__ && globals.invariant.log("Download the Apollo DevTools for a better development " +
                        "experience: " + url);
                }
            }
        }
        this.version = version;
        this.localState = new LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
        this.queryManager = new QueryManager({
            cache: this.cache,
            link: this.link,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion,
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: connectToDevTools ? function () {
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: {},
                        state: {
                            queries: _this.queryManager.getQueryStore(),
                            mutations: _this.queryManager.mutationStore || {},
                        },
                        dataWithOptimisticResults: _this.cache.extract(true),
                    });
                }
            } : void 0,
        });
    }
    ApolloClient.prototype.stop = function () {
        this.queryManager.stop();
    };
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = mergeOptions(this.defaultOptions.watchQuery, options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = tslib.__assign(tslib.__assign({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = mergeOptions(this.defaultOptions.query, options);
        }
        __DEV__ ? globals.invariant(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' +
            'client.query can only return a single result. Please use client.watchQuery ' +
            'to receive multiple results from the cache and the network, or consider ' +
            'using a different fetchPolicy, such as cache-first or network-only.') : globals.invariant(options.fetchPolicy !== 'cache-and-network', 8);
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = tslib.__assign(tslib.__assign({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = mergeOptions(this.defaultOptions.mutate, options);
        }
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.writeFragment = function (options) {
        this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return core.execute(this.link, payload);
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore({
            discardWatches: false,
        }); })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () { return _this.reFetchObservableQueries(); });
    };
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore({
            discardWatches: true,
        }); })
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient.prototype.refetchQueries = function (options) {
        var map = this.queryManager.refetchQueries(options);
        var queries = [];
        var results = [];
        map.forEach(function (result, obsQuery) {
            queries.push(obsQuery);
            results.push(result);
        });
        var result = Promise.all(results);
        result.queries = queries;
        result.results = results;
        result.catch(function (error) {
            __DEV__ && globals.invariant.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(error));
        });
        return result;
    };
    ApolloClient.prototype.getObservableQueries = function (include) {
        if (include === void 0) { include = "active"; }
        return this.queryManager.getObservableQueries(include);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient.prototype.setLink = function (newLink) {
        this.link = this.queryManager.link = newLink;
    };
    return ApolloClient;
}());

tsInvariant.setVerbosity(globals.DEV ? "log" : "silent");

exports.Observable = utilities.Observable;
exports.isReference = utilities.isReference;
exports.makeReference = utilities.makeReference;
exports.ApolloCache = cache.ApolloCache;
exports.Cache = cache.Cache;
exports.InMemoryCache = cache.InMemoryCache;
exports.MissingFieldError = cache.MissingFieldError;
exports.defaultDataIdFromObject = cache.defaultDataIdFromObject;
exports.makeVar = cache.makeVar;
exports.ApolloError = errors.ApolloError;
exports.isApolloError = errors.isApolloError;
exports.fromError = utils.fromError;
exports.fromPromise = utils.fromPromise;
exports.throwServerError = utils.throwServerError;
exports.toPromise = utils.toPromise;
exports.setLogVerbosity = tsInvariant.setVerbosity;
exports.disableExperimentalFragmentVariables = graphqlTag.disableExperimentalFragmentVariables;
exports.disableFragmentWarnings = graphqlTag.disableFragmentWarnings;
exports.enableExperimentalFragmentVariables = graphqlTag.enableExperimentalFragmentVariables;
exports.gql = graphqlTag.gql;
exports.resetCaches = graphqlTag.resetCaches;
exports.ApolloClient = ApolloClient;
exports.ObservableQuery = ObservableQuery;
exports.applyNextFetchPolicy = applyNextFetchPolicy;
exports.mergeOptions = mergeOptions;
for (var k in core) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = core[k];
}
for (var k in http) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = http[k];
}
//# sourceMappingURL=core.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/errors/errors.cjs":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/client/errors/errors.cjs ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var utilities = __webpack_require__(/*! ../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");

function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if (utilities.isNonEmptyArray(err.graphQLErrors) || utilities.isNonEmptyArray(err.clientErrors)) {
        var errors = (err.graphQLErrors || [])
            .concat(err.clientErrors || []);
        errors.forEach(function (error) {
            var errorMessage = error
                ? error.message
                : 'Error message not found.';
            message += "".concat(errorMessage, "\n");
        });
    }
    if (err.networkError) {
        message += "".concat(err.networkError.message, "\n");
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    tslib.__extends(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, clientErrors = _a.clientErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.clientErrors = clientErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

exports.ApolloError = ApolloError;
exports.isApolloError = isApolloError;
//# sourceMappingURL=errors.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/core/core.cjs":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/core.cjs ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "tslib");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/@apollo/client/link/utils/utils.cjs");

function passthrough(op, forward) {
    return (forward ? forward(op) : utilities.Observable.of());
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
    return link.request.length <= 1;
}
var LinkError = (function (_super) {
    tslib.__extends(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.empty = function () {
        return new ApolloLink(function () { return utilities.Observable.of(); });
    };
    ApolloLink.from = function (links) {
        if (links.length === 0)
            return ApolloLink.empty();
        return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
    };
    ApolloLink.split = function (test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink(passthrough));
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
            return new ApolloLink(function (operation) {
                return test(operation)
                    ? leftLink.request(operation) || utilities.Observable.of()
                    : rightLink.request(operation) || utilities.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return test(operation)
                    ? leftLink.request(operation, forward) || utilities.Observable.of()
                    : rightLink.request(operation, forward) || utilities.Observable.of();
            });
        }
    };
    ApolloLink.execute = function (link, operation) {
        return (link.request(utils.createOperation(operation.context, utils.transformOperation(utils.validateOperation(operation)))) || utilities.Observable.of());
    };
    ApolloLink.concat = function (first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
            __DEV__ && globals.invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
            return new ApolloLink(function (operation) {
                return firstLink.request(operation, function (op) { return nextLink.request(op) || utilities.Observable.of(); }) || utilities.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return (firstLink.request(operation, function (op) {
                    return nextLink.request(op, forward) || utilities.Observable.of();
                }) || utilities.Observable.of());
            });
        }
    };
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(ApolloLink.split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return ApolloLink.concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw __DEV__ ? new globals.InvariantError('request is not implemented') : new globals.InvariantError(19);
    };
    ApolloLink.prototype.onError = function (error, observer) {
        if (observer && observer.error) {
            observer.error(error);
            return false;
        }
        throw error;
    };
    ApolloLink.prototype.setOnError = function (fn) {
        this.onError = fn;
        return this;
    };
    return ApolloLink;
}());

var empty = ApolloLink.empty;

var from = ApolloLink.from;

var split = ApolloLink.split;

var concat = ApolloLink.concat;

var execute = ApolloLink.execute;

exports.ApolloLink = ApolloLink;
exports.concat = concat;
exports.empty = empty;
exports.execute = execute;
exports.from = from;
exports.split = split;
//# sourceMappingURL=core.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/http/http.cjs":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/http.cjs ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/@apollo/client/link/utils/utils.cjs");
var tslib = __webpack_require__(/*! tslib */ "tslib");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var core = __webpack_require__(/*! ../core */ "./node_modules/@apollo/client/link/core/core.cjs");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");

var hasOwnProperty = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
    return function (response) { return response
        .text()
        .then(function (bodyText) {
        try {
            return JSON.parse(bodyText);
        }
        catch (err) {
            var parseError = err;
            parseError.name = 'ServerParseError';
            parseError.response = response;
            parseError.statusCode = response.status;
            parseError.bodyText = bodyText;
            throw parseError;
        }
    })
        .then(function (result) {
        if (response.status >= 300) {
            utils.throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
        }
        if (!Array.isArray(result) &&
            !hasOwnProperty.call(result, 'data') &&
            !hasOwnProperty.call(result, 'errors')) {
            utils.throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations)
                ? operations.map(function (op) { return op.operationName; })
                : operations.operationName, "'."));
        }
        return result;
    }); };
}

var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError = __DEV__ ? new globals.InvariantError("Network request failed. ".concat(label, " is not serializable: ").concat(e.message)) : new globals.InvariantError(21);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};

var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var defaultPrinter = function (ast, printer) { return printer(ast); };
function selectHttpOptionsAndBody(operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    configs.unshift(fallbackConfig);
    return selectHttpOptionsAndBodyInternal.apply(void 0, tslib.__spreadArray([operation,
        defaultPrinter], configs, false));
}
function selectHttpOptionsAndBodyInternal(operation, printer) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = {};
    var http = {};
    configs.forEach(function (config) {
        options = tslib.__assign(tslib.__assign(tslib.__assign({}, options), config.options), { headers: tslib.__assign(tslib.__assign({}, options.headers), headersToLowerCase(config.headers)) });
        if (config.credentials) {
            options.credentials = config.credentials;
        }
        http = tslib.__assign(tslib.__assign({}, http), config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = printer(query, graphql.print);
    return {
        options: options,
        body: body,
    };
}
function headersToLowerCase(headers) {
    if (headers) {
        var normalized_1 = Object.create(null);
        Object.keys(Object(headers)).forEach(function (name) {
            normalized_1[name.toLowerCase()] = headers[name];
        });
        return normalized_1;
    }
    return headers;
}

var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        throw __DEV__ ? new globals.InvariantError("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new globals.InvariantError(20);
    }
};

var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};

var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === 'function') {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || '/graphql';
    }
};

function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
    };
    if ('query' in body) {
        addQueryParam('query', body.query);
    }
    if (body.operationName) {
        addQueryParam('operationName', body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = serializeFetchParameter(body.variables, 'Variables map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = serializeFetchParameter(body.extensions, 'Extensions map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return { newURI: newURI };
}

var backupFetch = utilities.maybe(function () { return fetch; });
var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = tslib.__rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
    if (__DEV__) {
        checkFetcher(preferredFetch || backupFetch);
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new core.ApolloLink(function (operation) {
        var chosenURI = selectURI(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) {
                clientAwarenessHeaders['apollographql-client-name'] = name_1;
            }
            if (version) {
                clientAwarenessHeaders['apollographql-client-version'] = version;
            }
        }
        var contextHeaders = tslib.__assign(tslib.__assign({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders,
        };
        var _b = selectHttpOptionsAndBodyInternal(operation, print, fallbackHttpConfig, linkConfig, contextConfig), options = _b.options, body = _b.body;
        if (body.variables && !includeUnusedVariables) {
            var unusedNames_1 = new Set(Object.keys(body.variables));
            graphql.visit(operation.query, {
                Variable: function (node, _key, parent) {
                    if (parent && parent.kind !== 'VariableDefinition') {
                        unusedNames_1.delete(node.name.value);
                    }
                },
            });
            if (unusedNames_1.size) {
                body.variables = tslib.__assign({}, body.variables);
                unusedNames_1.forEach(function (name) {
                    delete body.variables[name];
                });
            }
        }
        var controller;
        if (!options.signal) {
            var _c = createSignalIfSupported(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller)
                options.signal = signal;
        }
        var definitionIsMutation = function (d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = 'GET';
        }
        if (options.method === 'GET') {
            var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) {
                return utils.fromError(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = serializeFetchParameter(body, 'Payload');
            }
            catch (parseError) {
                return utils.fromError(parseError);
            }
        }
        return new utilities.Observable(function (observer) {
            var currentFetch = preferredFetch || utilities.maybe(function () { return fetch; }) || backupFetch;
            currentFetch(chosenURI, options)
                .then(function (response) {
                operation.setContext({ response: response });
                return response;
            })
                .then(parseAndCheckHttpResponse(operation))
                .then(function (result) {
                observer.next(result);
                observer.complete();
                return result;
            })
                .catch(function (err) {
                if (err.name === 'AbortError')
                    return;
                if (err.result && err.result.errors && err.result.data) {
                    observer.next(err.result);
                }
                observer.error(err);
            });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};

var HttpLink = (function (_super) {
    tslib.__extends(HttpLink, _super);
    function HttpLink(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, createHttpLink(options).request) || this;
        _this.options = options;
        return _this;
    }
    return HttpLink;
}(core.ApolloLink));

exports.HttpLink = HttpLink;
exports.checkFetcher = checkFetcher;
exports.createHttpLink = createHttpLink;
exports.createSignalIfSupported = createSignalIfSupported;
exports.defaultPrinter = defaultPrinter;
exports.fallbackHttpConfig = fallbackHttpConfig;
exports.parseAndCheckHttpResponse = parseAndCheckHttpResponse;
exports.rewriteURIForGET = rewriteURIForGET;
exports.selectHttpOptionsAndBody = selectHttpOptionsAndBody;
exports.selectHttpOptionsAndBodyInternal = selectHttpOptionsAndBodyInternal;
exports.selectURI = selectURI;
exports.serializeFetchParameter = serializeFetchParameter;
//# sourceMappingURL=http.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/utils.cjs":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/utils.cjs ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var tslib = __webpack_require__(/*! tslib */ "tslib");

function fromError(errorValue) {
    return new utilities.Observable(function (observer) {
        observer.error(errorValue);
    });
}

function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                    __DEV__ && globals.invariant.warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}

function fromPromise(promise) {
    return new utilities.Observable(function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}

var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};

function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw __DEV__ ? new globals.InvariantError("illegal argument: ".concat(key)) : new globals.InvariantError(24);
        }
    }
    return operation;
}

function createOperation(starting, operation) {
    var context = tslib.__assign({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = tslib.__assign(tslib.__assign({}, context), next(context));
        }
        else {
            context = tslib.__assign(tslib.__assign({}, context), next);
        }
    };
    var getContext = function () { return (tslib.__assign({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    return operation;
}

function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? utilities.getOperationName(transformedOperation.query) || undefined
                : '';
    }
    return transformedOperation;
}

exports.createOperation = createOperation;
exports.fromError = fromError;
exports.fromPromise = fromPromise;
exports.throwServerError = throwServerError;
exports.toPromise = toPromise;
exports.transformOperation = transformOperation;
exports.validateOperation = validateOperation;
//# sourceMappingURL=utils.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/main.cjs":
/*!**********************************************!*\
  !*** ./node_modules/@apollo/client/main.cjs ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! ./core */ "./node_modules/@apollo/client/core/core.cjs");
var react = __webpack_require__(/*! ./react */ "./node_modules/@apollo/client/react/react.cjs");



for (var k in core) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = core[k];
}
for (var k in react) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = react[k];
}
//# sourceMappingURL=main.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "tslib");

var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    tslib.__extends(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
    return function () {
        if (verbosityLevels.indexOf(name) >= verbosityLevel) {
            // Default to console.log if this host environment happens not to provide
            // all the console.* methods we need.
            var method = console[name] || console.log;
            return method.apply(console, arguments);
        }
    };
}
(function (invariant) {
    invariant.debug = wrapConsoleMethod("debug");
    invariant.log = wrapConsoleMethod("log");
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
    var old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
}
var invariant$1 = invariant;

exports.InvariantError = InvariantError;
exports['default'] = invariant$1;
exports.invariant = invariant;
exports.setVerbosity = setVerbosity;
//# sourceMappingURL=invariant.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/ts-invariant/process/main.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/ts-invariant/process/main.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function maybe(thunk) {
  try { return thunk() } catch (_) {}
}

var safeGlobal = (
  maybe(function() { return globalThis }) ||
  maybe(function() { return window }) ||
  maybe(function() { return self }) ||
  maybe(function() { return global }) ||
  // We don't expect the Function constructor ever to be invoked at runtime, as
  // long as at least one of globalThis, window, self, or global is defined, so
  // we are under no obligation to make it easy for static analysis tools to
  // detect syntactic usage of the Function constructor. If you think you can
  // improve your static analysis to detect this obfuscation, think again. This
  // is an arms race you cannot win, at least not in JavaScript.
  maybe(function() { return maybe.constructor("return this")() })
);

var needToRemove = false;

function install() {
  if (safeGlobal &&
      !maybe(function() { return "development" }) &&
      !maybe(function() { return process })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          // This default needs to be "production" instead of "development", to
          // avoid the problem https://github.com/graphql/graphql-js/pull/2894
          // will eventually solve, once merged and released.
          NODE_ENV: "production",
        },
      },
      // Let anyone else change global.process as they see fit, but hide it from
      // Object.keys(global) enumeration.
      configurable: true,
      enumerable: false,
      writable: true,
    });
    needToRemove = true;
  }
}

// Call install() at least once, when this module is imported.
install();

function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}

exports.install = install;
exports.remove = remove;
//# sourceMappingURL=main.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/context/context.cjs":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/context.cjs ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var React = __webpack_require__(/*! react */ "react");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        for (var k in e) {
            n[k] = e[k];
        }
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var contextKey = utilities.canUseSymbol
    ? Symbol.for('__APOLLO_CONTEXT__')
    : '__APOLLO_CONTEXT__';
function getApolloContext() {
    var context = React__namespace.createContext[contextKey];
    if (!context) {
        Object.defineProperty(React__namespace.createContext, contextKey, {
            value: context = React__namespace.createContext({}),
            enumerable: false,
            writable: false,
            configurable: true,
        });
        context.displayName = 'ApolloContext';
    }
    return context;
}

var ApolloConsumer = function (props) {
    var ApolloContext = getApolloContext();
    return React__namespace.createElement(ApolloContext.Consumer, null, function (context) {
        __DEV__ ? globals.invariant(context && context.client, 'Could not find "client" in the context of ApolloConsumer. ' +
            'Wrap the root component in an <ApolloProvider>.') : globals.invariant(context && context.client, 25);
        return props.children(context.client);
    });
};

var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = getApolloContext();
    return React__namespace.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
        __DEV__ ? globals.invariant(context.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.') : globals.invariant(context.client, 26);
        return (React__namespace.createElement(ApolloContext.Provider, { value: context }, children));
    });
};

exports.ApolloConsumer = ApolloConsumer;
exports.ApolloProvider = ApolloProvider;
exports.getApolloContext = getApolloContext;
exports.resetApolloContext = getApolloContext;
//# sourceMappingURL=context.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/hooks.cjs":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/hooks.cjs ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var react = __webpack_require__(/*! react */ "react");
var context = __webpack_require__(/*! ../context */ "./node_modules/@apollo/client/react/context/context.cjs");
var tslib = __webpack_require__(/*! tslib */ "tslib");
var equality = __webpack_require__(/*! @wry/equality */ "@wry/equality");
var errors = __webpack_require__(/*! ../../errors */ "./node_modules/@apollo/client/errors/errors.cjs");
var core = __webpack_require__(/*! ../../core */ "./node_modules/@apollo/client/core/core.cjs");
var parser = __webpack_require__(/*! ../parser */ "./node_modules/@apollo/client/react/parser/parser.cjs");

function useApolloClient(override) {
    var context$1 = react.useContext(context.getApolloContext());
    var client = override || context$1.client;
    __DEV__ ? globals.invariant(!!client, 'Could not find "client" in the context or passed in as an option. ' +
        'Wrap the root component in an <ApolloProvider>, or pass an ApolloClient' +
        'ApolloClient instance in via options.') : globals.invariant(!!client, 29);
    return client;
}

function useQuery(query, options) {
    var _a;
    var context$1 = react.useContext(context.getApolloContext());
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    parser.verifyDocumentType(query, parser.DocumentType.Query);
    var _b = react.useState(function () {
        var watchQueryOptions = createWatchQueryOptions(query, options);
        var obsQuery = null;
        if (context$1.renderPromises) {
            obsQuery = context$1.renderPromises.getSSRObservable(watchQueryOptions);
        }
        if (!obsQuery) {
            obsQuery = client.watchQuery(watchQueryOptions);
            if (context$1.renderPromises) {
                context$1.renderPromises.registerSSRObservable(obsQuery, watchQueryOptions);
            }
        }
        if (context$1.renderPromises &&
            (options === null || options === void 0 ? void 0 : options.ssr) !== false &&
            !(options === null || options === void 0 ? void 0 : options.skip) &&
            obsQuery.getCurrentResult().loading) {
            context$1.renderPromises.addQueryPromise({
                getOptions: function () { return createWatchQueryOptions(query, options); },
                fetchData: function () { return new Promise(function (resolve) {
                    var sub = obsQuery.subscribe({
                        next: function (result) {
                            if (!result.loading) {
                                resolve();
                                sub.unsubscribe();
                            }
                        },
                        error: function () {
                            resolve();
                            sub.unsubscribe();
                        },
                        complete: function () {
                            resolve();
                        },
                    });
                }); },
            }, function () { return null; });
        }
        return obsQuery;
    }), obsQuery = _b[0], setObsQuery = _b[1];
    var _c = react.useState(function () {
        var _a, _b;
        var result = obsQuery.getCurrentResult();
        if (!result.loading && options) {
            if (result.error) {
                (_a = options.onError) === null || _a === void 0 ? void 0 : _a.call(options, result.error);
            }
            else if (result.data) {
                (_b = options.onCompleted) === null || _b === void 0 ? void 0 : _b.call(options, result.data);
            }
        }
        return result;
    }), result = _c[0], setResult = _c[1];
    var ref = react.useRef({
        client: client,
        query: query,
        options: options,
        result: result,
        previousData: void 0,
        watchQueryOptions: createWatchQueryOptions(query, options),
    });
    react.useEffect(function () {
        var _a, _b;
        var watchQueryOptions = createWatchQueryOptions(query, options);
        var nextResult;
        if (ref.current.client !== client || !equality.equal(ref.current.query, query)) {
            var obsQuery_1 = client.watchQuery(watchQueryOptions);
            setObsQuery(obsQuery_1);
            nextResult = obsQuery_1.getCurrentResult();
        }
        else if (!equality.equal(ref.current.watchQueryOptions, watchQueryOptions)) {
            obsQuery.setOptions(watchQueryOptions).catch(function () { });
            nextResult = obsQuery.getCurrentResult();
            ref.current.watchQueryOptions = watchQueryOptions;
        }
        if (nextResult) {
            var previousResult = ref.current.result;
            if (previousResult.data) {
                ref.current.previousData = previousResult.data;
            }
            setResult(ref.current.result = nextResult);
            if (!nextResult.loading && options) {
                if (!result.loading) {
                    if (result.error) {
                        (_a = options.onError) === null || _a === void 0 ? void 0 : _a.call(options, result.error);
                    }
                    else if (result.data) {
                        (_b = options.onCompleted) === null || _b === void 0 ? void 0 : _b.call(options, result.data);
                    }
                }
            }
        }
        Object.assign(ref.current, { client: client, query: query });
    }, [obsQuery, client, query, options]);
    react.useEffect(function () {
        if (context$1.renderPromises) {
            return;
        }
        var subscription = obsQuery.subscribe(onNext, onError);
        function onNext() {
            var _a, _b;
            var previousResult = ref.current.result;
            var result = obsQuery.getCurrentResult();
            if (previousResult &&
                previousResult.loading === result.loading &&
                previousResult.networkStatus === result.networkStatus &&
                equality.equal(previousResult.data, result.data)) {
                return;
            }
            if (previousResult.data) {
                ref.current.previousData = previousResult.data;
            }
            setResult(ref.current.result = result);
            if (!result.loading) {
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onCompleted) === null || _b === void 0 ? void 0 : _b.call(_a, result.data);
            }
        }
        function onError(error) {
            var _a, _b;
            var last = obsQuery["last"];
            subscription.unsubscribe();
            try {
                obsQuery.resetLastResults();
                subscription = obsQuery.subscribe(onNext, onError);
            }
            finally {
                obsQuery["last"] = last;
            }
            if (!error.hasOwnProperty('graphQLErrors')) {
                throw error;
            }
            var previousResult = ref.current.result;
            if ((previousResult && previousResult.loading) ||
                !equality.equal(error, previousResult.error)) {
                setResult(ref.current.result = {
                    data: previousResult.data,
                    error: error,
                    loading: false,
                    networkStatus: core.NetworkStatus.error,
                });
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onError) === null || _b === void 0 ? void 0 : _b.call(_a, error);
            }
        }
        return function () { return subscription.unsubscribe(); };
    }, [obsQuery, context$1.renderPromises, client.disableNetworkFetches]);
    var partial;
    (_a = result, partial = _a.partial, result = tslib.__rest(_a, ["partial"]));
    {
        if (partial &&
            (options === null || options === void 0 ? void 0 : options.partialRefetch) &&
            !result.loading &&
            (!result.data || Object.keys(result.data).length === 0) &&
            obsQuery.options.fetchPolicy !== 'cache-only') {
            result = tslib.__assign(tslib.__assign({}, result), { loading: true, networkStatus: core.NetworkStatus.refetch });
            obsQuery.refetch();
        }
        if (context$1.renderPromises &&
            (options === null || options === void 0 ? void 0 : options.ssr) !== false &&
            !(options === null || options === void 0 ? void 0 : options.skip) &&
            result.loading) {
            obsQuery.setOptions(createWatchQueryOptions(query, options)).catch(function () { });
        }
        Object.assign(ref.current, { options: options });
    }
    if ((context$1.renderPromises || client.disableNetworkFetches) &&
        (options === null || options === void 0 ? void 0 : options.ssr) === false) {
        result = ref.current.result = {
            loading: true,
            data: void 0,
            error: void 0,
            networkStatus: core.NetworkStatus.loading,
        };
    }
    else if ((options === null || options === void 0 ? void 0 : options.skip) || (options === null || options === void 0 ? void 0 : options.fetchPolicy) === 'standby') {
        result = {
            loading: false,
            data: void 0,
            error: void 0,
            networkStatus: core.NetworkStatus.ready,
        };
    }
    if (result.errors && result.errors.length) {
        result = tslib.__assign(tslib.__assign({}, result), { error: result.error || new errors.ApolloError({ graphQLErrors: result.errors }) });
    }
    var obsQueryFields = react.useMemo(function () { return ({
        refetch: obsQuery.refetch.bind(obsQuery),
        fetchMore: obsQuery.fetchMore.bind(obsQuery),
        updateQuery: obsQuery.updateQuery.bind(obsQuery),
        startPolling: obsQuery.startPolling.bind(obsQuery),
        stopPolling: obsQuery.stopPolling.bind(obsQuery),
        subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery),
    }); }, [obsQuery]);
    return tslib.__assign(tslib.__assign(tslib.__assign({}, obsQueryFields), { variables: createWatchQueryOptions(query, options).variables, client: client, called: true, previousData: ref.current.previousData }), result);
}
function createWatchQueryOptions(query, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var skip = options.skip; options.ssr; options.onCompleted; options.onError; options.displayName; var watchQueryOptions = tslib.__rest(options, ["skip", "ssr", "onCompleted", "onError", "displayName"]);
    if (skip) {
        watchQueryOptions.fetchPolicy = 'standby';
    }
    else if (((_a = watchQueryOptions.context) === null || _a === void 0 ? void 0 : _a.renderPromises) &&
        (watchQueryOptions.fetchPolicy === 'network-only' ||
            watchQueryOptions.fetchPolicy === 'cache-and-network')) {
        watchQueryOptions.fetchPolicy = 'cache-first';
    }
    else if (!watchQueryOptions.fetchPolicy) {
        watchQueryOptions.fetchPolicy = 'cache-first';
    }
    if (!watchQueryOptions.variables) {
        watchQueryOptions.variables = {};
    }
    return tslib.__assign({ query: query }, watchQueryOptions);
}

var EAGER_METHODS = [
    'refetch',
    'fetchMore',
    'updateQuery',
    'startPolling',
    'subscribeToMore',
];
function useLazyQuery(query, options) {
    var _a = react.useState({
        called: false,
        resolves: [],
    }), execution = _a[0], setExecution = _a[1];
    var execute = react.useCallback(function (executeOptions) {
        var resolve;
        var promise = new Promise(function (resolve1) { return (resolve = resolve1); });
        setExecution(function (execution) {
            if (execution.called) {
                result && result.refetch(executeOptions === null || executeOptions === void 0 ? void 0 : executeOptions.variables);
            }
            return {
                called: true,
                resolves: tslib.__spreadArray(tslib.__spreadArray([], execution.resolves, true), [resolve], false),
                options: executeOptions,
            };
        });
        return promise;
    }, []);
    var result = useQuery(query, tslib.__assign(tslib.__assign(tslib.__assign({}, options), execution.options), { fetchPolicy: execution.called ? options === null || options === void 0 ? void 0 : options.fetchPolicy : 'standby', skip: undefined }));
    react.useEffect(function () {
        var resolves = execution.resolves;
        if (!result.loading && resolves.length) {
            setExecution(function (execution) { return (tslib.__assign(tslib.__assign({}, execution), { resolves: [] })); });
            resolves.forEach(function (resolve) { return resolve(result); });
        }
    }, [result, execution]);
    if (!execution.called) {
        result = tslib.__assign(tslib.__assign({}, result), { loading: false, data: void 0, error: void 0, called: false });
        var _loop_1 = function (key) {
            var method = result[key];
            result[key] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                setExecution(function (execution) { return (tslib.__assign(tslib.__assign({}, execution), { called: true })); });
                return method.apply(void 0, args);
            };
        };
        for (var _i = 0, EAGER_METHODS_1 = EAGER_METHODS; _i < EAGER_METHODS_1.length; _i++) {
            var key = EAGER_METHODS_1[_i];
            _loop_1(key);
        }
    }
    return [execute, result];
}

function useMutation(mutation, options) {
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    parser.verifyDocumentType(mutation, parser.DocumentType.Mutation);
    var _a = react.useState({
        called: false,
        loading: false,
        client: client,
    }), result = _a[0], setResult = _a[1];
    var ref = react.useRef({
        result: result,
        mutationId: 0,
        isMounted: true,
        client: client,
        mutation: mutation,
        options: options,
    });
    {
        Object.assign(ref.current, { client: client, options: options, mutation: mutation });
    }
    var execute = react.useCallback(function (executeOptions) {
        if (executeOptions === void 0) { executeOptions = {}; }
        var _a = ref.current, client = _a.client, options = _a.options, mutation = _a.mutation;
        var baseOptions = tslib.__assign(tslib.__assign({}, options), { mutation: mutation });
        if (!ref.current.result.loading && !baseOptions.ignoreResults) {
            setResult(ref.current.result = {
                loading: true,
                error: void 0,
                data: void 0,
                called: true,
                client: client,
            });
        }
        var mutationId = ++ref.current.mutationId;
        var clientOptions = core.mergeOptions(baseOptions, executeOptions);
        return client.mutate(clientOptions).then(function (response) {
            var _a, _b;
            var data = response.data, errors$1 = response.errors;
            var error = errors$1 && errors$1.length > 0
                ? new errors.ApolloError({ graphQLErrors: errors$1 })
                : void 0;
            if (mutationId === ref.current.mutationId &&
                !clientOptions.ignoreResults) {
                var result_1 = {
                    called: true,
                    loading: false,
                    data: data,
                    error: error,
                    client: client,
                };
                if (ref.current.isMounted && !equality.equal(ref.current.result, result_1)) {
                    setResult(ref.current.result = result_1);
                }
            }
            (_a = baseOptions.onCompleted) === null || _a === void 0 ? void 0 : _a.call(baseOptions, response.data);
            (_b = executeOptions.onCompleted) === null || _b === void 0 ? void 0 : _b.call(executeOptions, response.data);
            return response;
        }).catch(function (error) {
            var _a, _b;
            if (mutationId === ref.current.mutationId &&
                ref.current.isMounted) {
                var result_2 = {
                    loading: false,
                    error: error,
                    data: void 0,
                    called: true,
                    client: client,
                };
                if (!equality.equal(ref.current.result, result_2)) {
                    setResult(ref.current.result = result_2);
                }
            }
            if (baseOptions.onError || clientOptions.onError) {
                (_a = baseOptions.onError) === null || _a === void 0 ? void 0 : _a.call(baseOptions, error);
                (_b = executeOptions.onError) === null || _b === void 0 ? void 0 : _b.call(executeOptions, error);
                return { data: void 0, errors: error };
            }
            throw error;
        });
    }, []);
    var reset = react.useCallback(function () {
        setResult({ called: false, loading: false, client: client });
    }, []);
    react.useEffect(function () { return function () {
        ref.current.isMounted = false;
    }; }, []);
    return [execute, tslib.__assign({ reset: reset }, result)];
}

function useSubscription(subscription, options) {
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    parser.verifyDocumentType(subscription, parser.DocumentType.Subscription);
    var _a = react.useState({
        loading: !(options === null || options === void 0 ? void 0 : options.skip),
        error: void 0,
        data: void 0,
        variables: options === null || options === void 0 ? void 0 : options.variables,
    }), result = _a[0], setResult = _a[1];
    var _b = react.useState(function () {
        if (options === null || options === void 0 ? void 0 : options.skip) {
            return null;
        }
        return client.subscribe({
            query: subscription,
            variables: options === null || options === void 0 ? void 0 : options.variables,
            fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
            context: options === null || options === void 0 ? void 0 : options.context,
        });
    }), observable = _b[0], setObservable = _b[1];
    var ref = react.useRef({ client: client, subscription: subscription, options: options });
    react.useEffect(function () {
        var _a, _b, _c, _d;
        var shouldResubscribe = options === null || options === void 0 ? void 0 : options.shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(options);
        }
        if ((options === null || options === void 0 ? void 0 : options.skip) && !(options === null || options === void 0 ? void 0 : options.skip) !== !((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.skip)) {
            setResult({
                loading: false,
                data: void 0,
                error: void 0,
                variables: options === null || options === void 0 ? void 0 : options.variables,
            });
            setObservable(null);
        }
        else if (shouldResubscribe !== false && (client !== ref.current.client ||
            subscription !== ref.current.subscription ||
            (options === null || options === void 0 ? void 0 : options.fetchPolicy) !== ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.fetchPolicy) ||
            !(options === null || options === void 0 ? void 0 : options.skip) !== !((_c = ref.current.options) === null || _c === void 0 ? void 0 : _c.skip) ||
            !equality.equal(options === null || options === void 0 ? void 0 : options.variables, (_d = ref.current.options) === null || _d === void 0 ? void 0 : _d.variables))) {
            setResult({
                loading: true,
                data: void 0,
                error: void 0,
                variables: options === null || options === void 0 ? void 0 : options.variables,
            });
            setObservable(client.subscribe({
                query: subscription,
                variables: options === null || options === void 0 ? void 0 : options.variables,
                fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
                context: options === null || options === void 0 ? void 0 : options.context,
            }));
        }
        Object.assign(ref.current, { client: client, subscription: subscription, options: options });
    }, [client, subscription, options]);
    react.useEffect(function () {
        if (!observable) {
            return;
        }
        var subscription = observable.subscribe({
            next: function (fetchResult) {
                var _a, _b;
                var result = {
                    loading: false,
                    data: fetchResult.data,
                    error: void 0,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                };
                setResult(result);
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onSubscriptionData) === null || _b === void 0 ? void 0 : _b.call(_a, {
                    client: client,
                    subscriptionData: result
                });
            },
            error: function (error) {
                setResult({
                    loading: false,
                    data: void 0,
                    error: error,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                });
            },
            complete: function () {
                var _a, _b;
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onSubscriptionComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
            },
        });
        return function () {
            subscription.unsubscribe();
        };
    }, [observable]);
    return result;
}

function useReactiveVar(rv) {
    var value = rv();
    var setValue = react.useState(value)[1];
    react.useEffect(function () {
        var probablySameValue = rv();
        if (value !== probablySameValue) {
            setValue(probablySameValue);
        }
        else {
            return rv.onNextChange(setValue);
        }
    }, [value]);
    return value;
}

exports.useApolloClient = useApolloClient;
exports.useLazyQuery = useLazyQuery;
exports.useMutation = useMutation;
exports.useQuery = useQuery;
exports.useReactiveVar = useReactiveVar;
exports.useSubscription = useSubscription;
//# sourceMappingURL=hooks.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/parser/parser.cjs":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/react/parser/parser.cjs ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");

exports.DocumentType = void 0;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(exports.DocumentType || (exports.DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch (type) {
        case exports.DocumentType.Query:
            name = 'Query';
            break;
        case exports.DocumentType.Mutation:
            name = 'Mutation';
            break;
        case exports.DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
    __DEV__ ? globals.invariant(!!document && !!document.kind, "Argument of ".concat(document, " passed to parser was not a valid GraphQL ") +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document") : globals.invariant(!!document && !!document.kind, 30);
    var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
    var queries = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'query';
    });
    var mutations = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'mutation';
    });
    var subscriptions = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'subscription';
    });
    __DEV__ ? globals.invariant(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well") : globals.invariant(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), 31);
    __DEV__ ? globals.invariant(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        "".concat(document, " had ").concat(queries.length, " queries, ").concat(subscriptions.length, " ") +
        "subscriptions and ".concat(mutations.length, " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component") : globals.invariant(queries.length + mutations.length + subscriptions.length <= 1, 32);
    type = queries.length ? exports.DocumentType.Query : exports.DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = exports.DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length
            ? mutations
            : subscriptions;
    __DEV__ ? globals.invariant(definitions.length === 1, "react-apollo only supports one definition per HOC. ".concat(document, " had ") +
        "".concat(definitions.length, " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component") : globals.invariant(definitions.length === 1, 33);
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}
function verifyDocumentType(document, type) {
    var operation = parser(document);
    var requiredOperationName = operationName(type);
    var usedOperationName = operationName(operation.type);
    __DEV__ ? globals.invariant(operation.type === type, "Running a ".concat(requiredOperationName, " requires a graphql ") +
        "".concat(requiredOperationName, ", but a ").concat(usedOperationName, " was used instead.")) : globals.invariant(operation.type === type, 34);
}

exports.operationName = operationName;
exports.parser = parser;
exports.verifyDocumentType = verifyDocumentType;
//# sourceMappingURL=parser.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/react.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/@apollo/client/react/react.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

__webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var context = __webpack_require__(/*! ./context */ "./node_modules/@apollo/client/react/context/context.cjs");
var hooks = __webpack_require__(/*! ./hooks */ "./node_modules/@apollo/client/react/hooks/hooks.cjs");
var parser = __webpack_require__(/*! ./parser */ "./node_modules/@apollo/client/react/parser/parser.cjs");



exports.ApolloConsumer = context.ApolloConsumer;
exports.ApolloProvider = context.ApolloProvider;
exports.getApolloContext = context.getApolloContext;
exports.resetApolloContext = context.resetApolloContext;
exports.DocumentType = parser.DocumentType;
exports.operationName = parser.operationName;
exports.parser = parser.parser;
for (var k in hooks) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = hooks[k];
}
//# sourceMappingURL=react.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/globals.cjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/globals.cjs ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tsInvariant = __webpack_require__(/*! ts-invariant */ "./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.js");
var process$1 = __webpack_require__(/*! ts-invariant/process */ "./node_modules/@apollo/client/node_modules/ts-invariant/process/main.js");
var graphql = __webpack_require__(/*! graphql */ "graphql");

function maybe(thunk) {
    try {
        return thunk();
    }
    catch (_a) { }
}

var global$1 = (maybe(function () { return globalThis; }) ||
    maybe(function () { return window; }) ||
    maybe(function () { return self; }) ||
    maybe(function () { return global; }) ||
    maybe(function () { return maybe.constructor("return this")(); }));

var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
    try {
        return Boolean(__DEV__);
    }
    catch (_a) {
        Object.defineProperty(global$1, GLOBAL_KEY, {
            value: maybe(function () { return "development"; }) !== "production",
            enumerable: false,
            configurable: true,
            writable: true,
        });
        return global$1[GLOBAL_KEY];
    }
}
var DEV = getDEV();

function removeTemporaryGlobals() {
    return typeof graphql.Source === "function" ? process$1.remove() : process$1.remove();
}

function checkDEV() {
    __DEV__ ? tsInvariant.invariant("boolean" === typeof DEV, DEV) : tsInvariant.invariant("boolean" === typeof DEV, 36);
}
removeTemporaryGlobals();
checkDEV();

exports.InvariantError = tsInvariant.InvariantError;
exports.invariant = tsInvariant.invariant;
exports.DEV = DEV;
exports.checkDEV = checkDEV;
exports.global = global$1;
exports.maybe = maybe;
//# sourceMappingURL=globals.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/utilities.cjs":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/utilities.cjs ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ./globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var tslib = __webpack_require__(/*! tslib */ "tslib");
var zenObservableTs = __webpack_require__(/*! zen-observable-ts */ "./node_modules/zen-observable-ts/index.cjs");
__webpack_require__(/*! symbol-observable */ "symbol-observable");

function shouldInclude(_a, variables) {
    var directives = _a.directives;
    if (!directives || !directives.length) {
        return true;
    }
    return getInclusionDirectives(directives).every(function (_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables && variables[ifArgument.value.name.value];
            __DEV__ ? globals.invariant(evaledValue !== void 0, "Invalid variable referenced in @".concat(directive.name.value, " directive.")) : globals.invariant(evaledValue !== void 0, 37);
        }
        else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(root) {
    var names = [];
    graphql.visit(root, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
function hasDirectives(names, root) {
    return getDirectiveNames(root).some(function (name) { return names.indexOf(name) > -1; });
}
function hasClientExports(document) {
    return (document &&
        hasDirectives(['client'], document) &&
        hasDirectives(['export'], document));
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    var result = [];
    if (directives && directives.length) {
        directives.forEach(function (directive) {
            if (!isInclusionDirective(directive))
                return;
            var directiveArguments = directive.arguments;
            var directiveName = directive.name.value;
            __DEV__ ? globals.invariant(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @".concat(directiveName, " directive.")) : globals.invariant(directiveArguments && directiveArguments.length === 1, 38);
            var ifArgument = directiveArguments[0];
            __DEV__ ? globals.invariant(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @".concat(directiveName, " directive.")) : globals.invariant(ifArgument.name && ifArgument.name.value === 'if', 39);
            var ifValue = ifArgument.value;
            __DEV__ ? globals.invariant(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @".concat(directiveName, " directive must be a variable or a boolean value.")) : globals.invariant(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), 40);
            result.push({ directive: directive, ifArgument: ifArgument });
        });
    }
    return result;
}

function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw __DEV__ ? new globals.InvariantError("Found a ".concat(definition.operation, " operation").concat(definition.name ? " named '".concat(definition.name.value, "'") : '', ". ") +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.') : new globals.InvariantError(41);
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
        __DEV__ ? globals.invariant(fragments.length === 1, "Found ".concat(fragments.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : globals.invariant(fragments.length === 1, 42);
        actualFragmentName = fragments[0].name.value;
    }
    var query = tslib.__assign(tslib.__assign({}, document), { definitions: tslib.__spreadArray([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ], document.definitions, true) });
    return query;
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
    switch (selection.kind) {
        case 'InlineFragment':
            return selection;
        case 'FragmentSpread': {
            var fragment = fragmentMap && fragmentMap[selection.name.value];
            __DEV__ ? globals.invariant(fragment, "No fragment named ".concat(selection.name.value, ".")) : globals.invariant(fragment, 43);
            return fragment;
        }
        default:
            return null;
    }
}

function isNonNullObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function makeReference(id) {
    return { __ref: String(id) };
}
function isReference(obj) {
    return Boolean(obj && typeof obj === 'object' && typeof obj.__ref === 'string');
}
function isDocumentNode(value) {
    return (isNonNullObject(value) &&
        value.kind === "Document" &&
        Array.isArray(value.definitions));
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw __DEV__ ? new globals.InvariantError("The inline argument \"".concat(name.value, "\" of kind \"").concat(value.kind, "\"") +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.') : new globals.InvariantError(52);
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
var getStoreKeyName = Object.assign(function (fieldName, args, directives) {
    if (args &&
        directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = args[key];
            });
            return "".concat(directives['connection']['key'], "(").concat(stringify(filteredArgs_1), ")");
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = stringify(args);
        completeFieldName += "(".concat(stringifiedArgs, ")");
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
            }
            else {
                completeFieldName += "@".concat(key);
            }
        });
    }
    return completeFieldName;
}, {
    setStringify: function (s) {
        var previous = stringify;
        stringify = s;
        return previous;
    },
});
var stringify = function defaultStringify(value) {
    return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
    if (isNonNullObject(value) && !Array.isArray(value)) {
        value = Object.keys(value).sort().reduce(function (copy, key) {
            copy[key] = value[key];
            return copy;
        }, {});
    }
    return value;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    if (typeof result.__typename === 'string') {
        return result.__typename;
    }
    for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
        var selection = _a[_i];
        if (isField(selection)) {
            if (selection.name.value === '__typename') {
                return result[resultKeyNameFromField(selection)];
            }
        }
        else {
            var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === 'string') {
                return typename;
            }
        }
    }
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}

function checkDocument(doc) {
    __DEV__ ? globals.invariant(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : globals.invariant(doc && doc.kind === 'Document', 44);
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw __DEV__ ? new globals.InvariantError("Schema type definitions not allowed in queries. Found: \"".concat(definition.kind, "\"")) : new globals.InvariantError(45);
        }
        return definition;
    });
    __DEV__ ? globals.invariant(operations.length <= 1, "Ambiguous GraphQL document: contains ".concat(operations.length, " operations")) : globals.invariant(operations.length <= 1, 46);
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    __DEV__ ? globals.invariant(queryDef && queryDef.operation === 'query', 'Must contain a query definition.') : globals.invariant(queryDef && queryDef.operation === 'query', 47);
    return queryDef;
}
function getFragmentDefinition(doc) {
    __DEV__ ? globals.invariant(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : globals.invariant(doc.kind === 'Document', 48);
    __DEV__ ? globals.invariant(doc.definitions.length <= 1, 'Fragment must have exactly one definition.') : globals.invariant(doc.definitions.length <= 1, 49);
    var fragmentDef = doc.definitions[0];
    __DEV__ ? globals.invariant(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.') : globals.invariant(fragmentDef.kind === 'FragmentDefinition', 50);
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw __DEV__ ? new globals.InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.') : new globals.InvariantError(51);
}
function getDefaultValues(definition) {
    var defaultValues = Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) {
        defs.forEach(function (def) {
            if (def.defaultValue) {
                valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
            }
        });
    }
    return defaultValues;
}

function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function (elem, i) {
        if (test.call(this, elem, i, array)) {
            array[target++] = elem;
        }
    }, context);
    array.length = target;
    return array;
}

var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function (selection) {
        return selection.kind === 'FragmentSpread' &&
            isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc)))
        ? null
        : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function (dir) {
            return (dir.name && dir.name === directive.name.value) ||
                (dir.test && dir.test(directive));
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(graphql.visit(doc, {
        Variable: {
            enter: function (node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') {
                    variablesInUse[node.name.value] = true;
                }
            },
        },
        Field: {
            enter: function (node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function (directive) { return directive.remove; });
                    if (shouldRemoveField &&
                        node.directives &&
                        node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) {
                            node.arguments.forEach(function (arg) {
                                if (arg.value.kind === 'Variable') {
                                    variablesToRemove.push({
                                        name: arg.value.name.value,
                                    });
                                }
                            });
                        }
                        if (node.selectionSet) {
                            getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                                fragmentSpreadsToRemove.push({
                                    name: frag.name.value,
                                });
                            });
                        }
                        return null;
                    }
                }
            },
        },
        FragmentSpread: {
            enter: function (node) {
                fragmentSpreadsInUse[node.name.value] = true;
            },
        },
        Directive: {
            enter: function (node) {
                if (getDirectiveMatcher(directives)(node)) {
                    return null;
                }
            },
        },
    }));
    if (modifiedDoc &&
        filterInPlace(variablesToRemove, function (v) { return !!v.name && !variablesInUse[v.name]; }).length) {
        modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    }
    if (modifiedDoc &&
        filterInPlace(fragmentSpreadsToRemove, function (fs) { return !!fs.name && !fragmentSpreadsInUse[fs.name]; })
            .length) {
        modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    }
    return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function (doc) {
    return graphql.visit(checkDocument(doc), {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === 'OperationDefinition') {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return (isField(selection) &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                var field = parent;
                if (isField(field) &&
                    field.directives &&
                    field.directives.some(function (d) { return d.name.value === 'export'; })) {
                    return;
                }
                return tslib.__assign(tslib.__assign({}, node), { selections: tslib.__spreadArray(tslib.__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
            },
        },
    });
}, {
    added: function (field) {
        return field === TYPENAME_FIELD;
    },
});
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                __DEV__ && globals.invariant.warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === 'Variable' &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(graphql.visit(doc, {
        OperationDefinition: {
            enter: function (node) {
                return tslib.__assign(tslib.__assign({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function (varDef) {
                        return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                    }) : [] });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    if (node.arguments) {
                        node.arguments.forEach(function (arg) {
                            if (argMatcher(arg)) {
                                argMatchCount_1 += 1;
                            }
                        });
                    }
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty(graphql.visit(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function (selection) {
        if ((isField(selection) || isInlineFragment(selection)) &&
            selection.selectionSet) {
            getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) { return allFragments.push(frag); });
        }
        else if (selection.kind === 'FragmentSpread') {
            allFragments.push(selection);
        }
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document) {
    var definition = getMainDefinition(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') {
        return document;
    }
    var modifiedDoc = graphql.visit(document, {
        OperationDefinition: {
            enter: function (node) {
                return tslib.__assign(tslib.__assign({}, node), { operation: 'query' });
            },
        },
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    checkDocument(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === 'client'; },
            remove: true,
        },
    ], document);
    if (modifiedDoc) {
        modifiedDoc = graphql.visit(modifiedDoc, {
            FragmentDefinition: {
                enter: function (node) {
                    if (node.selectionSet) {
                        var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
                            return isField(selection) && selection.name.value === '__typename';
                        });
                        if (isTypenameOnly) {
                            return null;
                        }
                    }
                },
            },
        });
    }
    return modifiedDoc;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var merger = new DeepMerger();
        for (var i = 1; i < count; ++i) {
            target = merger.merge(target, sources[i]);
        }
    }
    return target;
}
var defaultReconciler = function (target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = (function () {
    function DeepMerger(reconciler) {
        if (reconciler === void 0) { reconciler = defaultReconciler; }
        this.reconciler = reconciler;
        this.isObject = isNonNullObject;
        this.pastCopies = new Set();
    }
    DeepMerger.prototype.merge = function (target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
        }
        if (isNonNullObject(source) && isNonNullObject(target)) {
            Object.keys(source).forEach(function (sourceKey) {
                if (hasOwnProperty.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, tslib.__spreadArray([target, source, sourceKey], context, false));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                }
                else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger.prototype.shallowCopyForMerge = function (value) {
        if (isNonNullObject(value)) {
            if (this.pastCopies.has(value)) {
                if (!Object.isFrozen(value))
                    return value;
                this.pastCopies.delete(value);
            }
            if (Array.isArray(value)) {
                value = value.slice(0);
            }
            else {
                value = tslib.__assign({ __proto__: Object.getPrototypeOf(value) }, value);
            }
            this.pastCopies.add(value);
        }
        return value;
    };
    return DeepMerger;
}());

function concatPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming) {
            return existing ? tslib.__spreadArray(tslib.__spreadArray([], existing, true), incoming, true) : incoming;
        },
    };
}
function offsetLimitPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming, _a) {
            var args = _a.args;
            var merged = existing ? existing.slice(0) : [];
            if (args) {
                var _b = args.offset, offset = _b === void 0 ? 0 : _b;
                for (var i = 0; i < incoming.length; ++i) {
                    merged[offset + i] = incoming[i];
                }
            }
            else {
                merged.push.apply(merged, incoming);
            }
            return merged;
        },
    };
}
function relayStylePagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        read: function (existing, _a) {
            var canRead = _a.canRead, readField = _a.readField;
            if (!existing)
                return existing;
            var edges = [];
            var firstEdgeCursor = "";
            var lastEdgeCursor = "";
            existing.edges.forEach(function (edge) {
                if (canRead(readField("node", edge))) {
                    edges.push(edge);
                    if (edge.cursor) {
                        firstEdgeCursor = firstEdgeCursor || edge.cursor || "";
                        lastEdgeCursor = edge.cursor || lastEdgeCursor;
                    }
                }
            });
            var _b = existing.pageInfo || {}, startCursor = _b.startCursor, endCursor = _b.endCursor;
            return tslib.__assign(tslib.__assign({}, getExtras(existing)), { edges: edges, pageInfo: tslib.__assign(tslib.__assign({}, existing.pageInfo), { startCursor: startCursor || firstEdgeCursor, endCursor: endCursor || lastEdgeCursor }) });
        },
        merge: function (existing, incoming, _a) {
            var args = _a.args, isReference = _a.isReference, readField = _a.readField;
            if (!existing) {
                existing = makeEmptyData();
            }
            if (!incoming) {
                return existing;
            }
            var incomingEdges = incoming.edges ? incoming.edges.map(function (edge) {
                if (isReference(edge = tslib.__assign({}, edge))) {
                    edge.cursor = readField("cursor", edge);
                }
                return edge;
            }) : [];
            if (incoming.pageInfo) {
                var pageInfo_1 = incoming.pageInfo;
                var startCursor = pageInfo_1.startCursor, endCursor = pageInfo_1.endCursor;
                var firstEdge = incomingEdges[0];
                var lastEdge = incomingEdges[incomingEdges.length - 1];
                if (firstEdge && startCursor) {
                    firstEdge.cursor = startCursor;
                }
                if (lastEdge && endCursor) {
                    lastEdge.cursor = endCursor;
                }
                var firstCursor = firstEdge && firstEdge.cursor;
                if (firstCursor && !startCursor) {
                    incoming = mergeDeep(incoming, {
                        pageInfo: {
                            startCursor: firstCursor,
                        },
                    });
                }
                var lastCursor = lastEdge && lastEdge.cursor;
                if (lastCursor && !endCursor) {
                    incoming = mergeDeep(incoming, {
                        pageInfo: {
                            endCursor: lastCursor,
                        },
                    });
                }
            }
            var prefix = existing.edges;
            var suffix = [];
            if (args && args.after) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.after; });
                if (index >= 0) {
                    prefix = prefix.slice(0, index + 1);
                }
            }
            else if (args && args.before) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.before; });
                suffix = index < 0 ? prefix : prefix.slice(index);
                prefix = [];
            }
            else if (incoming.edges) {
                prefix = [];
            }
            var edges = tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray([], prefix, true), incomingEdges, true), suffix, true);
            var pageInfo = tslib.__assign(tslib.__assign({}, incoming.pageInfo), existing.pageInfo);
            if (incoming.pageInfo) {
                var _b = incoming.pageInfo, hasPreviousPage = _b.hasPreviousPage, hasNextPage = _b.hasNextPage, startCursor = _b.startCursor, endCursor = _b.endCursor, extras = tslib.__rest(_b, ["hasPreviousPage", "hasNextPage", "startCursor", "endCursor"]);
                Object.assign(pageInfo, extras);
                if (!prefix.length) {
                    if (void 0 !== hasPreviousPage)
                        pageInfo.hasPreviousPage = hasPreviousPage;
                    if (void 0 !== startCursor)
                        pageInfo.startCursor = startCursor;
                }
                if (!suffix.length) {
                    if (void 0 !== hasNextPage)
                        pageInfo.hasNextPage = hasNextPage;
                    if (void 0 !== endCursor)
                        pageInfo.endCursor = endCursor;
                }
            }
            return tslib.__assign(tslib.__assign(tslib.__assign({}, getExtras(existing)), getExtras(incoming)), { edges: edges, pageInfo: pageInfo });
        },
    };
}
var getExtras = function (obj) { return tslib.__rest(obj, notExtras); };
var notExtras = ["edges", "pageInfo"];
function makeEmptyData() {
    return {
        edges: [],
        pageInfo: {
            hasPreviousPage: false,
            hasNextPage: true,
            startCursor: "",
            endCursor: "",
        },
    };
}

var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}

function deepFreeze(value) {
    var workSet = new Set([value]);
    workSet.forEach(function (obj) {
        if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
            Object.getOwnPropertyNames(obj).forEach(function (name) {
                if (isNonNullObject(obj[name]))
                    workSet.add(obj[name]);
            });
        }
    });
    return value;
}
function shallowFreeze(obj) {
    if (__DEV__ && !Object.isFrozen(obj)) {
        try {
            Object.freeze(obj);
        }
        catch (e) {
            if (e instanceof TypeError)
                return null;
            throw e;
        }
    }
    return obj;
}
function maybeDeepFreeze(obj) {
    if (__DEV__) {
        deepFreeze(obj);
    }
    return obj;
}

function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function (obs) { return obs[method] && observersWithMethod.push(obs); });
    observersWithMethod.forEach(function (obs) { return obs[method](argument); });
}

function asyncMap(observable, mapFn, catchFn) {
    return new zenObservableTs.Observable(function (observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeCallbackCount = 0;
        var completed = false;
        var promiseQueue = {
            then: function (callback) {
                return new Promise(function (resolve) { return resolve(callback()); });
            },
        };
        function makeCallback(examiner, delegate) {
            if (examiner) {
                return function (arg) {
                    ++activeCallbackCount;
                    var both = function () { return examiner(arg); };
                    promiseQueue = promiseQueue.then(both, both).then(function (result) {
                        --activeCallbackCount;
                        next && next.call(observer, result);
                        if (completed) {
                            handler.complete();
                        }
                    }, function (error) {
                        --activeCallbackCount;
                        throw error;
                    }).catch(function (caught) {
                        error && error.call(observer, caught);
                    });
                };
            }
            else {
                return function (arg) { return delegate && delegate.call(observer, arg); };
            }
        }
        var handler = {
            next: makeCallback(mapFn, next),
            error: makeCallback(catchFn, error),
            complete: function () {
                completed = true;
                if (!activeCallbackCount) {
                    complete && complete.call(observer);
                }
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}

var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' &&
    navigator.product === 'ReactNative');
var canUseWeakSet = typeof WeakSet === 'function';
var canUseSymbol = typeof Symbol === 'function' &&
    typeof Symbol.for === 'function';

function fixObservableSubclass(subclass) {
    function set(key) {
        Object.defineProperty(subclass, key, { value: zenObservableTs.Observable });
    }
    if (canUseSymbol && Symbol.species) {
        set(Symbol.species);
    }
    set("@@species");
    return subclass;
}

function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
var Concast = (function (_super) {
    tslib.__extends(Concast, _super);
    function Concast(sources) {
        var _this = _super.call(this, function (observer) {
            _this.addObserver(observer);
            return function () { return _this.removeObserver(observer); };
        }) || this;
        _this.observers = new Set();
        _this.addCount = 0;
        _this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        _this.handlers = {
            next: function (result) {
                if (_this.sub !== null) {
                    _this.latest = ["next", result];
                    iterateObserversSafely(_this.observers, "next", result);
                }
            },
            error: function (error) {
                var sub = _this.sub;
                if (sub !== null) {
                    if (sub)
                        setTimeout(function () { return sub.unsubscribe(); });
                    _this.sub = null;
                    _this.latest = ["error", error];
                    _this.reject(error);
                    iterateObserversSafely(_this.observers, "error", error);
                }
            },
            complete: function () {
                if (_this.sub !== null) {
                    var value = _this.sources.shift();
                    if (!value) {
                        _this.sub = null;
                        if (_this.latest &&
                            _this.latest[0] === "next") {
                            _this.resolve(_this.latest[1]);
                        }
                        else {
                            _this.resolve();
                        }
                        iterateObserversSafely(_this.observers, "complete");
                    }
                    else if (isPromiseLike(value)) {
                        value.then(function (obs) { return _this.sub = obs.subscribe(_this.handlers); });
                    }
                    else {
                        _this.sub = value.subscribe(_this.handlers);
                    }
                }
            },
        };
        _this.cancel = function (reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.complete();
        };
        _this.promise.catch(function (_) { });
        if (typeof sources === "function") {
            sources = [new zenObservableTs.Observable(sources)];
        }
        if (isPromiseLike(sources)) {
            sources.then(function (iterable) { return _this.start(iterable); }, _this.handlers.error);
        }
        else {
            _this.start(sources);
        }
        return _this;
    }
    Concast.prototype.start = function (sources) {
        if (this.sub !== void 0)
            return;
        this.sources = Array.from(sources);
        this.handlers.complete();
    };
    Concast.prototype.deliverLastMessage = function (observer) {
        if (this.latest) {
            var nextOrError = this.latest[0];
            var method = observer[nextOrError];
            if (method) {
                method.call(observer, this.latest[1]);
            }
            if (this.sub === null &&
                nextOrError === "next" &&
                observer.complete) {
                observer.complete();
            }
        }
    };
    Concast.prototype.addObserver = function (observer) {
        if (!this.observers.has(observer)) {
            this.deliverLastMessage(observer);
            this.observers.add(observer);
            ++this.addCount;
        }
    };
    Concast.prototype.removeObserver = function (observer, quietly) {
        if (this.observers.delete(observer) &&
            --this.addCount < 1 &&
            !quietly) {
            this.handlers.error(new Error("Observable cancelled prematurely"));
        }
    };
    Concast.prototype.cleanup = function (callback) {
        var _this = this;
        var called = false;
        var once = function () {
            if (!called) {
                called = true;
                _this.observers.delete(observer);
                callback();
            }
        };
        var observer = {
            next: once,
            error: once,
            complete: once,
        };
        var count = this.addCount;
        this.addObserver(observer);
        this.addCount = count;
    };
    return Concast;
}(zenObservableTs.Observable));
fixObservableSubclass(Concast);

function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}

function graphQLResultHasError(result) {
    return (result.errors && result.errors.length > 0) || false;
}

function compact() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objects.forEach(function (obj) {
        if (!obj)
            return;
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            if (value !== void 0) {
                result[key] = value;
            }
        });
    });
    return result;
}

var prefixCounts = new Map();
function makeUniqueId(prefix) {
    var count = prefixCounts.get(prefix) || 1;
    prefixCounts.set(prefix, count + 1);
    return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}

function stringifyForDisplay(value) {
    var undefId = makeUniqueId("stringifyForDisplay");
    return JSON.stringify(value, function (key, value) {
        return value === void 0 ? undefId : value;
    }).split(JSON.stringify(undefId)).join("<undefined>");
}

exports.DEV = globals.DEV;
exports.maybe = globals.maybe;
exports.Observable = zenObservableTs.Observable;
exports.Concast = Concast;
exports.DeepMerger = DeepMerger;
exports.addTypenameToDocument = addTypenameToDocument;
exports.argumentsObjectFromField = argumentsObjectFromField;
exports.asyncMap = asyncMap;
exports.buildQueryFromSelectionSet = buildQueryFromSelectionSet;
exports.canUseSymbol = canUseSymbol;
exports.canUseWeakMap = canUseWeakMap;
exports.canUseWeakSet = canUseWeakSet;
exports.checkDocument = checkDocument;
exports.cloneDeep = cloneDeep;
exports.compact = compact;
exports.concatPagination = concatPagination;
exports.createFragmentMap = createFragmentMap;
exports.fixObservableSubclass = fixObservableSubclass;
exports.getDefaultValues = getDefaultValues;
exports.getDirectiveNames = getDirectiveNames;
exports.getFragmentDefinition = getFragmentDefinition;
exports.getFragmentDefinitions = getFragmentDefinitions;
exports.getFragmentFromSelection = getFragmentFromSelection;
exports.getFragmentQueryDocument = getFragmentQueryDocument;
exports.getInclusionDirectives = getInclusionDirectives;
exports.getMainDefinition = getMainDefinition;
exports.getOperationDefinition = getOperationDefinition;
exports.getOperationName = getOperationName;
exports.getQueryDefinition = getQueryDefinition;
exports.getStoreKeyName = getStoreKeyName;
exports.getTypenameFromResult = getTypenameFromResult;
exports.graphQLResultHasError = graphQLResultHasError;
exports.hasClientExports = hasClientExports;
exports.hasDirectives = hasDirectives;
exports.isDocumentNode = isDocumentNode;
exports.isField = isField;
exports.isInlineFragment = isInlineFragment;
exports.isNonEmptyArray = isNonEmptyArray;
exports.isNonNullObject = isNonNullObject;
exports.isReference = isReference;
exports.iterateObserversSafely = iterateObserversSafely;
exports.makeReference = makeReference;
exports.makeUniqueId = makeUniqueId;
exports.maybeDeepFreeze = maybeDeepFreeze;
exports.mergeDeep = mergeDeep;
exports.mergeDeepArray = mergeDeepArray;
exports.offsetLimitPagination = offsetLimitPagination;
exports.relayStylePagination = relayStylePagination;
exports.removeArgumentsFromDocument = removeArgumentsFromDocument;
exports.removeClientSetsFromDocument = removeClientSetsFromDocument;
exports.removeConnectionDirectiveFromDocument = removeConnectionDirectiveFromDocument;
exports.removeDirectivesFromDocument = removeDirectivesFromDocument;
exports.removeFragmentSpreadFromDocument = removeFragmentSpreadFromDocument;
exports.resultKeyNameFromField = resultKeyNameFromField;
exports.shouldInclude = shouldInclude;
exports.storeKeyNameFromField = storeKeyNameFromField;
exports.stringifyForDisplay = stringifyForDisplay;
exports.valueToObjectRepresentation = valueToObjectRepresentation;
//# sourceMappingURL=utilities.cjs.map


/***/ }),

/***/ "./node_modules/zen-observable-ts/index.cjs":
/*!**************************************************!*\
  !*** ./node_modules/zen-observable-ts/index.cjs ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.Observable = __webpack_require__(/*! zen-observable/index.js */ "zen-observable/index.js");


/***/ }),

/***/ "./pages/order/[id].js":
/*!*****************************!*\
  !*** ./pages/order/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleOrderPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _components_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styles/OrderStyles */ "./components/styles/OrderStyles.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/formatMoney */ "./lib/formatMoney.js");

var _jsxFileName = "C:\\Users\\agust\\OneDrive\\Escritorio\\Web Bos Courses\\Advanced-React-master\\sick-fits\\frontend\\pages\\order\\[id].js";






const SINGLE_ORDER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order: Order(where: { id: $id }) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;
function SingleOrderPage({
  query
}) {
  const {
    data,
    error,
    loading
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(SINGLE_ORDER_QUERY, {
    variables: {
      id: query.id
    }
  });
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 21
  }, this);
  const {
    order
  } = data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["Sick Fits - ", order.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Order Id:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: order.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Charge:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: order.charge
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Order Total:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__["default"])(order.total)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Item Count:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: order.items.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "items",
      children: order.items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "order-item",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: item.photo.image.publicUrlTransformed,
          alt: item.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "item-details",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Quantity: ", item.quantity]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Each ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__["default"])(item.price)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Subtotal: ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__["default"])(item.price * item.quantity)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@wry/context":
/*!*******************************!*\
  !*** external "@wry/context" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wry/context");

/***/ }),

/***/ "@wry/equality":
/*!********************************!*\
  !*** external "@wry/equality" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wry/equality");

/***/ }),

/***/ "@wry/trie":
/*!****************************!*\
  !*** external "@wry/trie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wry/trie");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "optimism":
/*!***************************!*\
  !*** external "optimism" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("optimism");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "symbol-observable":
/*!************************************!*\
  !*** external "symbol-observable" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("symbol-observable");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "zen-observable/index.js":
/*!******************************************!*\
  !*** external "zen-observable/index.js" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zen-observable/index.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZXMvT3JkZXJTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Zvcm1hdE1vbmV5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9jYWNoZS9jYWNoZS5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2NvcmUvY29yZS5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2Vycm9ycy9lcnJvcnMuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9saW5rL2NvcmUvY29yZS5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvaHR0cC9odHRwLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay91dGlscy91dGlscy5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L21haW4uY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9ub2RlX21vZHVsZXMvdHMtaW52YXJpYW50L2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L25vZGVfbW9kdWxlcy90cy1pbnZhcmlhbnQvcHJvY2Vzcy9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9jb250ZXh0L2NvbnRleHQuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9ob29rcy9ob29rcy5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3JlYWN0L3BhcnNlci9wYXJzZXIuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9yZWFjdC5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3V0aWxpdGllcy9nbG9iYWxzL2dsb2JhbHMuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC91dGlsaXRpZXMvdXRpbGl0aWVzLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVuLW9ic2VydmFibGUtdHMvaW5kZXguY2pzIiwid2VicGFjazovLy8uL3BhZ2VzL29yZGVyLy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd3J5L2NvbnRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd3J5L2VxdWFsaXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdyeS90cmllXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib3B0aW1pc21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN5bWJvbC1vYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHNsaWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6ZW4tb2JzZXJ2YWJsZS9pbmRleC5qc1wiIl0sIm5hbWVzIjpbIkVycm9yU3R5bGVzIiwic3R5bGVkIiwiZGl2IiwiRGlzcGxheUVycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwibmV0d29ya0Vycm9yIiwicmVzdWx0IiwiZXJyb3JzIiwibGVuZ3RoIiwibWFwIiwiaSIsInJlcGxhY2UiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJPcmRlclN0eWxlcyIsImZvcm1hdE1vbmV5IiwiYW1vdW50Iiwib3B0aW9ucyIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwiU0lOR0xFX09SREVSX1FVRVJZIiwiZ3FsIiwiU2luZ2xlT3JkZXJQYWdlIiwicXVlcnkiLCJkYXRhIiwibG9hZGluZyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaWQiLCJvcmRlciIsImNoYXJnZSIsInRvdGFsIiwiaXRlbXMiLCJpdGVtIiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwidGl0bGUiLCJuYW1lIiwicXVhbnRpdHkiLCJwcmljZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpRUFBaUUsRUFBRTtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSw2Q0FBNkMsRUFBRTtBQUMxSDtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0JBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRiw4RkFBOEY7QUFDL0s7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQkFBZ0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJwYWdlcy9vcmRlci9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9vcmRlci9baWRdLmpzXCIpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBFcnJvclN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICB9XG4gIHN0cm9uZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG5gO1xuXG5jb25zdCBEaXNwbGF5RXJyb3IgPSAoeyBlcnJvciB9KSA9PiB7XG4gIGlmICghZXJyb3IgfHwgIWVycm9yLm1lc3NhZ2UpIHJldHVybiBudWxsO1xuICBpZiAoZXJyb3IubmV0d29ya0Vycm9yICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLm1hcCgoZXJyb3IsIGkpID0+IChcbiAgICAgIDxFcnJvclN0eWxlcyBrZXk9e2l9PlxuICAgICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKCdHcmFwaFFMIGVycm9yOiAnLCAnJyl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRXJyb3JTdHlsZXM+XG4gICAgKSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JTdHlsZXM+XG4gICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgIDxzdHJvbmc+U2hvb3QhPC9zdHJvbmc+XG4gICAgICAgIHtlcnJvci5tZXNzYWdlLnJlcGxhY2UoJ0dyYXBoUUwgZXJyb3I6ICcsICcnKX1cbiAgICAgIDwvcD5cbiAgICA8L0Vycm9yU3R5bGVzPlxuICApO1xufTtcblxuRGlzcGxheUVycm9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6IHt9LFxufTtcblxuRGlzcGxheUVycm9yLnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5RXJyb3I7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgT3JkZXJTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW9mZldoaXRlKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYnMpO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHJlZDtcbiAgJiA+IHAge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tb2ZmV2hpdGUpO1xuICAgIHNwYW4ge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm9yZGVyLWl0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vZmZXaGl0ZSk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgIG1hcmdpbjogMnJlbSAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBkZWZhdWx0IE9yZGVyU3R5bGVzO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TW9uZXkoYW1vdW50ID0gMCkge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgIGN1cnJlbmN5OiAnVVNEJyxcclxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICB9O1xyXG5cclxuICAvLyBjaGVjayBpZiBpdHMgYSBjbGVhbiBkb2xsYXIgYW1vdW50XHJcbiAgaWYgKGFtb3VudCAlIDEwMCA9PT0gMCkge1xyXG4gICAgb3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPSAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZm9ybWF0dGVyID0gSW50bC5OdW1iZXJGb3JtYXQoJ2VuLXVzJywgb3B0aW9ucyk7XHJcblxyXG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGFtb3VudCAvIDEwMCk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIG9wdGltaXNtID0gcmVxdWlyZSgnb3B0aW1pc20nKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMnKTtcbnZhciBlcXVhbGl0eSA9IHJlcXVpcmUoJ0B3cnkvZXF1YWxpdHknKTtcbnZhciB0cmllID0gcmVxdWlyZSgnQHdyeS90cmllJyk7XG52YXIgY29udGV4dCA9IHJlcXVpcmUoJ0B3cnkvY29udGV4dCcpO1xuXG52YXIgQXBvbGxvQ2FjaGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFwb2xsb0NhY2hlKCkge1xuICAgICAgICB0aGlzLmdldEZyYWdtZW50RG9jID0gb3B0aW1pc20ud3JhcCh1dGlsaXRpZXMuZ2V0RnJhZ21lbnRRdWVyeURvY3VtZW50KTtcbiAgICB9XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLmJhdGNoID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9wdGltaXN0aWNJZCA9IHR5cGVvZiBvcHRpb25zLm9wdGltaXN0aWMgPT09IFwic3RyaW5nXCIgPyBvcHRpb25zLm9wdGltaXN0aWMgOlxuICAgICAgICAgICAgb3B0aW9ucy5vcHRpbWlzdGljID09PSBmYWxzZSA/IG51bGwgOiB2b2lkIDA7XG4gICAgICAgIHZhciB1cGRhdGVSZXN1bHQ7XG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVwZGF0ZVJlc3VsdCA9IG9wdGlvbnMudXBkYXRlKF90aGlzKTsgfSwgb3B0aW1pc3RpY0lkKTtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZVJlc3VsdDtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS5yZWNvcmRPcHRpbWlzdGljVHJhbnNhY3Rpb24gPSBmdW5jdGlvbiAodHJhbnNhY3Rpb24sIG9wdGltaXN0aWNJZCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2FjdGlvbih0cmFuc2FjdGlvbiwgb3B0aW1pc3RpY0lkKTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS50cmFuc2Zvcm1Eb2N1bWVudCA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS5nYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLm1vZGlmeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS50cmFuc2Zvcm1Gb3JMaW5rID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS5yZWFkUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucywgb3B0aW1pc3RpYykge1xuICAgICAgICBpZiAob3B0aW1pc3RpYyA9PT0gdm9pZCAwKSB7IG9wdGltaXN0aWMgPSAhIW9wdGlvbnMub3B0aW1pc3RpYzsgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyByb290SWQ6IG9wdGlvbnMuaWQgfHwgJ1JPT1RfUVVFUlknLCBvcHRpbWlzdGljOiBvcHRpbWlzdGljIH0pKTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS5yZWFkRnJhZ21lbnQgPSBmdW5jdGlvbiAob3B0aW9ucywgb3B0aW1pc3RpYykge1xuICAgICAgICBpZiAob3B0aW1pc3RpYyA9PT0gdm9pZCAwKSB7IG9wdGltaXN0aWMgPSAhIW9wdGlvbnMub3B0aW1pc3RpYzsgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBxdWVyeTogdGhpcy5nZXRGcmFnbWVudERvYyhvcHRpb25zLmZyYWdtZW50LCBvcHRpb25zLmZyYWdtZW50TmFtZSksIHJvb3RJZDogb3B0aW9ucy5pZCwgb3B0aW1pc3RpYzogb3B0aW1pc3RpYyB9KSk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUud3JpdGVRdWVyeSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgaWQgPSBfYS5pZCwgZGF0YSA9IF9hLmRhdGEsIG9wdGlvbnMgPSB0c2xpYi5fX3Jlc3QoX2EsIFtcImlkXCIsIFwiZGF0YVwiXSk7XG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlKE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICAgICAgZGF0YUlkOiBpZCB8fCAnUk9PVF9RVUVSWScsXG4gICAgICAgICAgICByZXN1bHQ6IGRhdGEsXG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS53cml0ZUZyYWdtZW50ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBpZCA9IF9hLmlkLCBkYXRhID0gX2EuZGF0YSwgZnJhZ21lbnQgPSBfYS5mcmFnbWVudCwgZnJhZ21lbnROYW1lID0gX2EuZnJhZ21lbnROYW1lLCBvcHRpb25zID0gdHNsaWIuX19yZXN0KF9hLCBbXCJpZFwiLCBcImRhdGFcIiwgXCJmcmFnbWVudFwiLCBcImZyYWdtZW50TmFtZVwiXSk7XG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlKE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICAgICAgcXVlcnk6IHRoaXMuZ2V0RnJhZ21lbnREb2MoZnJhZ21lbnQsIGZyYWdtZW50TmFtZSksXG4gICAgICAgICAgICBkYXRhSWQ6IGlkLFxuICAgICAgICAgICAgcmVzdWx0OiBkYXRhLFxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUudXBkYXRlUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucywgdXBkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhdGNoKHtcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY2FjaGUucmVhZFF1ZXJ5KG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdXBkYXRlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gdm9pZCAwIHx8IGRhdGEgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICBjYWNoZS53cml0ZVF1ZXJ5KHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBkYXRhOiBkYXRhIH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnVwZGF0ZUZyYWdtZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHVwZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXRjaCh7XG4gICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNhY2hlLnJlYWRGcmFnbWVudChvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHVwZGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09IHZvaWQgMCB8fCBkYXRhID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgY2FjaGUud3JpdGVGcmFnbWVudCh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZGF0YTogZGF0YSB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBcG9sbG9DYWNoZTtcbn0oKSk7XG5cbmV4cG9ydHMuQ2FjaGUgPSB2b2lkIDA7XG4oZnVuY3Rpb24gKENhY2hlKSB7XG59KShleHBvcnRzLkNhY2hlIHx8IChleHBvcnRzLkNhY2hlID0ge30pKTtcblxudmFyIE1pc3NpbmdGaWVsZEVycm9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNaXNzaW5nRmllbGRFcnJvcihtZXNzYWdlLCBwYXRoLCBxdWVyeSwgdmFyaWFibGVzKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgfVxuICAgIHJldHVybiBNaXNzaW5nRmllbGRFcnJvcjtcbn0oKSk7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gZGVmYXVsdERhdGFJZEZyb21PYmplY3QoX2EsIGNvbnRleHQpIHtcbiAgICB2YXIgX190eXBlbmFtZSA9IF9hLl9fdHlwZW5hbWUsIGlkID0gX2EuaWQsIF9pZCA9IF9hLl9pZDtcbiAgICBpZiAodHlwZW9mIF9fdHlwZW5hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQua2V5T2JqZWN0ID1cbiAgICAgICAgICAgICAgICBpZCAhPT0gdm9pZCAwID8geyBpZDogaWQgfSA6XG4gICAgICAgICAgICAgICAgICAgIF9pZCAhPT0gdm9pZCAwID8geyBfaWQ6IF9pZCB9IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaWQgPT09IHZvaWQgMClcbiAgICAgICAgICAgIGlkID0gX2lkO1xuICAgICAgICBpZiAoaWQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF9fdHlwZW5hbWUsIFwiOlwiKS5jb25jYXQoKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIikgPyBpZCA6IEpTT04uc3RyaW5naWZ5KGlkKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG52YXIgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBkYXRhSWRGcm9tT2JqZWN0OiBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdCxcbiAgICBhZGRUeXBlbmFtZTogdHJ1ZSxcbiAgICByZXN1bHRDYWNoaW5nOiB0cnVlLFxuICAgIGNhbm9uaXplUmVzdWx0czogZmFsc2UsXG59O1xuZnVuY3Rpb24gbm9ybWFsaXplQ29uZmlnKGNvbmZpZykge1xuICAgIHJldHVybiB1dGlsaXRpZXMuY29tcGFjdChkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xufVxuZnVuY3Rpb24gc2hvdWxkQ2Fub25pemVSZXN1bHRzKGNvbmZpZykge1xuICAgIHZhciB2YWx1ZSA9IGNvbmZpZy5jYW5vbml6ZVJlc3VsdHM7XG4gICAgcmV0dXJuIHZhbHVlID09PSB2b2lkIDAgPyBkZWZhdWx0Q29uZmlnLmNhbm9uaXplUmVzdWx0cyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0VHlwZW5hbWVGcm9tU3RvcmVPYmplY3Qoc3RvcmUsIG9iamVjdE9yUmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmplY3RPclJlZmVyZW5jZSlcbiAgICAgICAgPyBzdG9yZS5nZXQob2JqZWN0T3JSZWZlcmVuY2UuX19yZWYsIFwiX190eXBlbmFtZVwiKVxuICAgICAgICA6IG9iamVjdE9yUmVmZXJlbmNlICYmIG9iamVjdE9yUmVmZXJlbmNlLl9fdHlwZW5hbWU7XG59XG52YXIgVHlwZU9yRmllbGROYW1lUmVnRXhwID0gL15bX2Etel1bXzAtOWEtel0qL2k7XG5mdW5jdGlvbiBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKSB7XG4gICAgdmFyIG1hdGNoID0gc3RvcmVGaWVsZE5hbWUubWF0Y2goVHlwZU9yRmllbGROYW1lUmVnRXhwKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFswXSA6IHN0b3JlRmllbGROYW1lO1xufVxuZnVuY3Rpb24gc2VsZWN0aW9uU2V0TWF0Y2hlc1Jlc3VsdChzZWxlY3Rpb25TZXQsIHJlc3VsdCwgdmFyaWFibGVzKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyZXN1bHQpXG4gICAgICAgICAgICA/IHJlc3VsdC5ldmVyeShmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gc2VsZWN0aW9uU2V0TWF0Y2hlc1Jlc3VsdChzZWxlY3Rpb25TZXQsIGl0ZW0sIHZhcmlhYmxlcyk7IH0pXG4gICAgICAgICAgICA6IHNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmV2ZXJ5KGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNGaWVsZChmaWVsZCkgJiYgdXRpbGl0aWVzLnNob3VsZEluY2x1ZGUoZmllbGQsIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IHV0aWxpdGllcy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkKGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhc093bi5jYWxsKHJlc3VsdCwga2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCFmaWVsZC5zZWxlY3Rpb25TZXQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXRNYXRjaGVzUmVzdWx0KGZpZWxkLnNlbGVjdGlvblNldCwgcmVzdWx0W2tleV0sIHZhcmlhYmxlcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBzdG9yZVZhbHVlSXNTdG9yZU9iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSAmJlxuICAgICAgICAhdXRpbGl0aWVzLmlzUmVmZXJlbmNlKHZhbHVlKSAmJlxuICAgICAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5mdW5jdGlvbiBtYWtlUHJvY2Vzc2VkRmllbGRzTWVyZ2VyKCkge1xuICAgIHJldHVybiBuZXcgdXRpbGl0aWVzLkRlZXBNZXJnZXI7XG59XG5cbnZhciBERUxFVEUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIGRlbE1vZGlmaWVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gREVMRVRFOyB9O1xudmFyIElOVkFMSURBVEUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuZXhwb3J0cy5FbnRpdHlTdG9yZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRW50aXR5U3RvcmUocG9saWNpZXMsIGdyb3VwKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucG9saWNpZXMgPSBwb2xpY2llcztcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwO1xuICAgICAgICB0aGlzLmRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnJvb3RJZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnJlZnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLmdldEZpZWxkVmFsdWUgPSBmdW5jdGlvbiAob2JqZWN0T3JSZWZlcmVuY2UsIHN0b3JlRmllbGROYW1lKSB7IHJldHVybiB1dGlsaXRpZXMubWF5YmVEZWVwRnJlZXplKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmplY3RPclJlZmVyZW5jZSlcbiAgICAgICAgICAgID8gX3RoaXMuZ2V0KG9iamVjdE9yUmVmZXJlbmNlLl9fcmVmLCBzdG9yZUZpZWxkTmFtZSlcbiAgICAgICAgICAgIDogb2JqZWN0T3JSZWZlcmVuY2UgJiYgb2JqZWN0T3JSZWZlcmVuY2Vbc3RvcmVGaWVsZE5hbWVdKTsgfTtcbiAgICAgICAgdGhpcy5jYW5SZWFkID0gZnVuY3Rpb24gKG9iak9yUmVmKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iak9yUmVmKVxuICAgICAgICAgICAgICAgID8gX3RoaXMuaGFzKG9iak9yUmVmLl9fcmVmKVxuICAgICAgICAgICAgICAgIDogdHlwZW9mIG9iak9yUmVmID09PSBcIm9iamVjdFwiO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvUmVmZXJlbmNlID0gZnVuY3Rpb24gKG9iak9ySWRPclJlZiwgbWVyZ2VJbnRvU3RvcmUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqT3JJZE9yUmVmID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlKG9iak9ySWRPclJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iak9ySWRPclJlZikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqT3JJZE9yUmVmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGlkID0gX3RoaXMucG9saWNpZXMuaWRlbnRpZnkob2JqT3JJZE9yUmVmKVswXTtcbiAgICAgICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgICAgIHZhciByZWYgPSB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZShpZCk7XG4gICAgICAgICAgICAgICAgaWYgKG1lcmdlSW50b1N0b3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1lcmdlKGlkLCBvYmpPcklkT3JSZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5kYXRhKTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvb2t1cChkYXRhSWQsIHRydWUpICE9PSB2b2lkIDA7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGRhdGFJZCwgZmllbGROYW1lKSB7XG4gICAgICAgIHRoaXMuZ3JvdXAuZGVwZW5kKGRhdGFJZCwgZmllbGROYW1lKTtcbiAgICAgICAgaWYgKGhhc093bi5jYWxsKHRoaXMuZGF0YSwgZGF0YUlkKSkge1xuICAgICAgICAgICAgdmFyIHN0b3JlT2JqZWN0ID0gdGhpcy5kYXRhW2RhdGFJZF07XG4gICAgICAgICAgICBpZiAoc3RvcmVPYmplY3QgJiYgaGFzT3duLmNhbGwoc3RvcmVPYmplY3QsIGZpZWxkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmVPYmplY3RbZmllbGROYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcIl9fdHlwZW5hbWVcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcy5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZCwgZGF0YUlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWRbZGF0YUlkXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIExheWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KGRhdGFJZCwgZmllbGROYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmxvb2t1cCA9IGZ1bmN0aW9uIChkYXRhSWQsIGRlcGVuZE9uRXhpc3RlbmNlKSB7XG4gICAgICAgIGlmIChkZXBlbmRPbkV4aXN0ZW5jZSlcbiAgICAgICAgICAgIHRoaXMuZ3JvdXAuZGVwZW5kKGRhdGFJZCwgXCJfX2V4aXN0c1wiKTtcbiAgICAgICAgaWYgKGhhc093bi5jYWxsKHRoaXMuZGF0YSwgZGF0YUlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtkYXRhSWRdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5sb29rdXAoZGF0YUlkLCBkZXBlbmRPbkV4aXN0ZW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWRbZGF0YUlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIChvbGRlciwgbmV3ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGFJZDtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvbGRlcikpXG4gICAgICAgICAgICBvbGRlciA9IG9sZGVyLl9fcmVmO1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG5ld2VyKSlcbiAgICAgICAgICAgIG5ld2VyID0gbmV3ZXIuX19yZWY7XG4gICAgICAgIHZhciBleGlzdGluZyA9IHR5cGVvZiBvbGRlciA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyB0aGlzLmxvb2t1cChkYXRhSWQgPSBvbGRlcilcbiAgICAgICAgICAgIDogb2xkZXI7XG4gICAgICAgIHZhciBpbmNvbWluZyA9IHR5cGVvZiBuZXdlciA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyB0aGlzLmxvb2t1cChkYXRhSWQgPSBuZXdlcilcbiAgICAgICAgICAgIDogbmV3ZXI7XG4gICAgICAgIGlmICghaW5jb21pbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCh0eXBlb2YgZGF0YUlkID09PSBcInN0cmluZ1wiLCBcInN0b3JlLm1lcmdlIGV4cGVjdHMgYSBzdHJpbmcgSURcIikgOiBnbG9iYWxzLmludmFyaWFudCh0eXBlb2YgZGF0YUlkID09PSBcInN0cmluZ1wiLCAxKTtcbiAgICAgICAgdmFyIG1lcmdlZCA9IG5ldyB1dGlsaXRpZXMuRGVlcE1lcmdlcihzdG9yZU9iamVjdFJlY29uY2lsZXIpLm1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZyk7XG4gICAgICAgIHRoaXMuZGF0YVtkYXRhSWRdID0gbWVyZ2VkO1xuICAgICAgICBpZiAobWVyZ2VkICE9PSBleGlzdGluZykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVmc1tkYXRhSWRdO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXAuY2FjaGluZykge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZHNUb0RpcnR5XzEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgICAgIGlmICghZXhpc3RpbmcpXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc1RvRGlydHlfMS5fX2V4aXN0cyA9IDE7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5jb21pbmcpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3RpbmcgfHwgZXhpc3Rpbmdbc3RvcmVGaWVsZE5hbWVdICE9PSBtZXJnZWRbc3RvcmVGaWVsZE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNUb0RpcnR5XzFbc3RvcmVGaWVsZE5hbWVdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZE5hbWUgIT09IHN0b3JlRmllbGROYW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIV90aGlzLnBvbGljaWVzLmhhc0tleUFyZ3MobWVyZ2VkLl9fdHlwZW5hbWUsIGZpZWxkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNUb0RpcnR5XzFbZmllbGROYW1lXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVyZ2VkW3N0b3JlRmllbGROYW1lXSA9PT0gdm9pZCAwICYmICEoX3RoaXMgaW5zdGFuY2VvZiBMYXllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVyZ2VkW3N0b3JlRmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZHNUb0RpcnR5XzEuX190eXBlbmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAhKGV4aXN0aW5nICYmIGV4aXN0aW5nLl9fdHlwZW5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWRbZGF0YUlkXSA9PT0gbWVyZ2VkLl9fdHlwZW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZpZWxkc1RvRGlydHlfMS5fX3R5cGVuYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmaWVsZHNUb0RpcnR5XzEpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkTmFtZSkgeyByZXR1cm4gX3RoaXMuZ3JvdXAuZGlydHkoZGF0YUlkLCBmaWVsZE5hbWUpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLm1vZGlmeSA9IGZ1bmN0aW9uIChkYXRhSWQsIGZpZWxkcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RvcmVPYmplY3QgPSB0aGlzLmxvb2t1cChkYXRhSWQpO1xuICAgICAgICBpZiAoc3RvcmVPYmplY3QpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VkRmllbGRzXzEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgdmFyIG5lZWRUb01lcmdlXzEgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBhbGxEZWxldGVkXzEgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHNoYXJlZERldGFpbHNfMSA9IHtcbiAgICAgICAgICAgICAgICBERUxFVEU6IERFTEVURSxcbiAgICAgICAgICAgICAgICBJTlZBTElEQVRFOiBJTlZBTElEQVRFLFxuICAgICAgICAgICAgICAgIGlzUmVmZXJlbmNlOiB1dGlsaXRpZXMuaXNSZWZlcmVuY2UsXG4gICAgICAgICAgICAgICAgdG9SZWZlcmVuY2U6IHRoaXMudG9SZWZlcmVuY2UsXG4gICAgICAgICAgICAgICAgY2FuUmVhZDogdGhpcy5jYW5SZWFkLFxuICAgICAgICAgICAgICAgIHJlYWRGaWVsZDogZnVuY3Rpb24gKGZpZWxkTmFtZU9yT3B0aW9ucywgZnJvbSkgeyByZXR1cm4gX3RoaXMucG9saWNpZXMucmVhZEZpZWxkKHR5cGVvZiBmaWVsZE5hbWVPck9wdGlvbnMgPT09IFwic3RyaW5nXCIgPyB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lT3JPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBmcm9tIHx8IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlKGRhdGFJZCksXG4gICAgICAgICAgICAgICAgfSA6IGZpZWxkTmFtZU9yT3B0aW9ucywgeyBzdG9yZTogX3RoaXMgfSk7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RvcmVPYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZFZhbHVlID0gc3RvcmVPYmplY3Rbc3RvcmVGaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbHVlID09PSB2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB2YXIgbW9kaWZ5ID0gdHlwZW9mIGZpZWxkcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gZmllbGRzXG4gICAgICAgICAgICAgICAgICAgIDogZmllbGRzW3N0b3JlRmllbGROYW1lXSB8fCBmaWVsZHNbZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAobW9kaWZ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IG1vZGlmeSA9PT0gZGVsTW9kaWZpZXIgPyBERUxFVEUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5KHV0aWxpdGllcy5tYXliZURlZXBGcmVlemUoZmllbGRWYWx1ZSksIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBzaGFyZWREZXRhaWxzXzEpLCB7IGZpZWxkTmFtZTogZmllbGROYW1lLCBzdG9yZUZpZWxkTmFtZTogc3RvcmVGaWVsZE5hbWUsIHN0b3JhZ2U6IF90aGlzLmdldFN0b3JhZ2UoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSkgfSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IElOVkFMSURBVEUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBERUxFVEUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IGZpZWxkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkRmllbGRzXzFbc3RvcmVGaWVsZE5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZFRvTWVyZ2VfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsRGVsZXRlZF8xID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobmVlZFRvTWVyZ2VfMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVyZ2UoZGF0YUlkLCBjaGFuZ2VkRmllbGRzXzEpO1xuICAgICAgICAgICAgICAgIGlmIChhbGxEZWxldGVkXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBMYXllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhW2RhdGFJZF0gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhW2RhdGFJZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cC5kaXJ0eShkYXRhSWQsIFwiX19leGlzdHNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoZGF0YUlkLCBmaWVsZE5hbWUsIGFyZ3MpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgc3RvcmVPYmplY3QgPSB0aGlzLmxvb2t1cChkYXRhSWQpO1xuICAgICAgICBpZiAoc3RvcmVPYmplY3QpIHtcbiAgICAgICAgICAgIHZhciB0eXBlbmFtZSA9IHRoaXMuZ2V0RmllbGRWYWx1ZShzdG9yZU9iamVjdCwgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICAgICAgdmFyIHN0b3JlRmllbGROYW1lID0gZmllbGROYW1lICYmIGFyZ3NcbiAgICAgICAgICAgICAgICA/IHRoaXMucG9saWNpZXMuZ2V0U3RvcmVGaWVsZE5hbWUoeyB0eXBlbmFtZTogdHlwZW5hbWUsIGZpZWxkTmFtZTogZmllbGROYW1lLCBhcmdzOiBhcmdzIH0pXG4gICAgICAgICAgICAgICAgOiBmaWVsZE5hbWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RpZnkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSA/IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW3N0b3JlRmllbGROYW1lXSA9IGRlbE1vZGlmaWVyLFxuICAgICAgICAgICAgICAgIF9hKSA6IGRlbE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZXZpY3QgPSBmdW5jdGlvbiAob3B0aW9ucywgbGltaXQpIHtcbiAgICAgICAgdmFyIGV2aWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbCh0aGlzLmRhdGEsIG9wdGlvbnMuaWQpKSB7XG4gICAgICAgICAgICAgICAgZXZpY3RlZCA9IHRoaXMuZGVsZXRlKG9wdGlvbnMuaWQsIG9wdGlvbnMuZmllbGROYW1lLCBvcHRpb25zLmFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBMYXllciAmJiB0aGlzICE9PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgIGV2aWN0ZWQgPSB0aGlzLnBhcmVudC5ldmljdChvcHRpb25zLCBsaW1pdCkgfHwgZXZpY3RlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZpZWxkTmFtZSB8fCBldmljdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC5kaXJ0eShvcHRpb25zLmlkLCBvcHRpb25zLmZpZWxkTmFtZSB8fCBcIl9fZXhpc3RzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmljdGVkO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlcGxhY2UobnVsbCk7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZXh0cmFjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMudG9PYmplY3QoKTtcbiAgICAgICAgdmFyIGV4dHJhUm9vdElkcyA9IFtdO1xuICAgICAgICB0aGlzLmdldFJvb3RJZFNldCgpLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBpZiAoIWhhc093bi5jYWxsKF90aGlzLnBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkLCBpZCkpIHtcbiAgICAgICAgICAgICAgICBleHRyYVJvb3RJZHMucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZXh0cmFSb290SWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgb2JqLl9fTUVUQSA9IHsgZXh0cmFSb290SWRzOiBleHRyYVJvb3RJZHMuc29ydCgpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKG5ld0RhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgICAgIGlmICghKG5ld0RhdGEgJiYgaGFzT3duLmNhbGwobmV3RGF0YSwgZGF0YUlkKSkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5kZWxldGUoZGF0YUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChuZXdEYXRhKSB7XG4gICAgICAgICAgICB2YXIgX19NRVRBID0gbmV3RGF0YS5fX01FVEEsIHJlc3RfMSA9IHRzbGliLl9fcmVzdChuZXdEYXRhLCBbXCJfX01FVEFcIl0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVzdF8xKS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5tZXJnZShkYXRhSWQsIHJlc3RfMVtkYXRhSWRdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKF9fTUVUQSkge1xuICAgICAgICAgICAgICAgIF9fTUVUQS5leHRyYVJvb3RJZHMuZm9yRWFjaCh0aGlzLnJldGFpbiwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5yZXRhaW4gPSBmdW5jdGlvbiAocm9vdElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3RJZHNbcm9vdElkXSA9ICh0aGlzLnJvb3RJZHNbcm9vdElkXSB8fCAwKSArIDE7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIChyb290SWQpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vdElkc1tyb290SWRdID4gMCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gLS10aGlzLnJvb3RJZHNbcm9vdElkXTtcbiAgICAgICAgICAgIGlmICghY291bnQpXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucm9vdElkc1tyb290SWRdO1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmdldFJvb3RJZFNldCA9IGZ1bmN0aW9uIChpZHMpIHtcbiAgICAgICAgaWYgKGlkcyA9PT0gdm9pZCAwKSB7IGlkcyA9IG5ldyBTZXQoKTsgfVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJvb3RJZHMpLmZvckVhY2goaWRzLmFkZCwgaWRzKTtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBMYXllcikge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZ2V0Um9vdElkU2V0KGlkcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkKS5mb3JFYWNoKGlkcy5hZGQsIGlkcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5nYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGlkcyA9IHRoaXMuZ2V0Um9vdElkU2V0KCk7XG4gICAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMudG9PYmplY3QoKTtcbiAgICAgICAgaWRzLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoc25hcHNob3QsIGlkKSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKF90aGlzLmZpbmRDaGlsZFJlZklkcyhpZCkpLmZvckVhY2goaWRzLmFkZCwgaWRzKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgc25hcHNob3RbaWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGlkc1RvUmVtb3ZlID0gT2JqZWN0LmtleXMoc25hcHNob3QpO1xuICAgICAgICBpZiAoaWRzVG9SZW1vdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgcm9vdF8xID0gdGhpcztcbiAgICAgICAgICAgIHdoaWxlIChyb290XzEgaW5zdGFuY2VvZiBMYXllcilcbiAgICAgICAgICAgICAgICByb290XzEgPSByb290XzEucGFyZW50O1xuICAgICAgICAgICAgaWRzVG9SZW1vdmUuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIHJvb3RfMS5kZWxldGUoaWQpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRzVG9SZW1vdmU7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZmluZENoaWxkUmVmSWRzID0gZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICBpZiAoIWhhc093bi5jYWxsKHRoaXMucmVmcywgZGF0YUlkKSkge1xuICAgICAgICAgICAgdmFyIGZvdW5kXzEgPSB0aGlzLnJlZnNbZGF0YUlkXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICB2YXIgcm9vdCA9IHRoaXMuZGF0YVtkYXRhSWRdO1xuICAgICAgICAgICAgaWYgKCFyb290KVxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZF8xO1xuICAgICAgICAgICAgdmFyIHdvcmtTZXRfMSA9IG5ldyBTZXQoW3Jvb3RdKTtcbiAgICAgICAgICAgIHdvcmtTZXRfMS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRfMVtvYmouX19yZWZdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3Qob2JqKSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gb2JqW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdChjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrU2V0XzEuYWRkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVmc1tkYXRhSWRdO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLm1ha2VDYWNoZUtleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAua2V5TWFrZXIubG9va3VwQXJyYXkoYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHJldHVybiBFbnRpdHlTdG9yZTtcbn0oKSk7XG52YXIgQ2FjaGVHcm91cCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FjaGVHcm91cChjYWNoaW5nLCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7IHBhcmVudCA9IG51bGw7IH1cbiAgICAgICAgdGhpcy5jYWNoaW5nID0gY2FjaGluZztcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuZCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVzZXRDYWNoaW5nKCk7XG4gICAgfVxuICAgIENhY2hlR3JvdXAucHJvdG90eXBlLnJlc2V0Q2FjaGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kID0gdGhpcy5jYWNoaW5nID8gb3B0aW1pc20uZGVwKCkgOiBudWxsO1xuICAgICAgICB0aGlzLmtleU1ha2VyID0gbmV3IHRyaWUuVHJpZSh1dGlsaXRpZXMuY2FuVXNlV2Vha01hcCk7XG4gICAgfTtcbiAgICBDYWNoZUdyb3VwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiAoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5kKSB7XG4gICAgICAgICAgICB0aGlzLmQobWFrZURlcEtleShkYXRhSWQsIHN0b3JlRmllbGROYW1lKSk7XG4gICAgICAgICAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICBpZiAoZmllbGROYW1lICE9PSBzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZChtYWtlRGVwS2V5KGRhdGFJZCwgZmllbGROYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5kZXBlbmQoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENhY2hlR3JvdXAucHJvdG90eXBlLmRpcnR5ID0gZnVuY3Rpb24gKGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZCkge1xuICAgICAgICAgICAgdGhpcy5kLmRpcnR5KG1ha2VEZXBLZXkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSksIHN0b3JlRmllbGROYW1lID09PSBcIl9fZXhpc3RzXCIgPyBcImZvcmdldFwiIDogXCJzZXREaXJ0eVwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENhY2hlR3JvdXA7XG59KCkpO1xuZnVuY3Rpb24gbWFrZURlcEtleShkYXRhSWQsIHN0b3JlRmllbGROYW1lKSB7XG4gICAgcmV0dXJuIHN0b3JlRmllbGROYW1lICsgJyMnICsgZGF0YUlkO1xufVxuZnVuY3Rpb24gbWF5YmVEZXBlbmRPbkV4aXN0ZW5jZU9mRW50aXR5KHN0b3JlLCBlbnRpdHlJZCkge1xuICAgIGlmIChzdXBwb3J0c1Jlc3VsdENhY2hpbmcoc3RvcmUpKSB7XG4gICAgICAgIHN0b3JlLmdyb3VwLmRlcGVuZChlbnRpdHlJZCwgXCJfX2V4aXN0c1wiKTtcbiAgICB9XG59XG4oZnVuY3Rpb24gKEVudGl0eVN0b3JlKSB7XG4gICAgdmFyIFJvb3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICB0c2xpYi5fX2V4dGVuZHMoUm9vdCwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gUm9vdChfYSkge1xuICAgICAgICAgICAgdmFyIHBvbGljaWVzID0gX2EucG9saWNpZXMsIF9iID0gX2EucmVzdWx0Q2FjaGluZywgcmVzdWx0Q2FjaGluZyA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIHNlZWQgPSBfYS5zZWVkO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcG9saWNpZXMsIG5ldyBDYWNoZUdyb3VwKHJlc3VsdENhY2hpbmcpKSB8fCB0aGlzO1xuICAgICAgICAgICAgX3RoaXMuc3R1bXAgPSBuZXcgU3R1bXAoX3RoaXMpO1xuICAgICAgICAgICAgX3RoaXMuc3RvcmFnZVRyaWUgPSBuZXcgdHJpZS5UcmllKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwKTtcbiAgICAgICAgICAgIGlmIChzZWVkKVxuICAgICAgICAgICAgICAgIF90aGlzLnJlcGxhY2Uoc2VlZCk7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgUm9vdC5wcm90b3R5cGUuYWRkTGF5ZXIgPSBmdW5jdGlvbiAobGF5ZXJJZCwgcmVwbGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHVtcC5hZGRMYXllcihsYXllcklkLCByZXBsYXkpO1xuICAgICAgICB9O1xuICAgICAgICBSb290LnByb3RvdHlwZS5yZW1vdmVMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBSb290LnByb3RvdHlwZS5nZXRTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZVRyaWUubG9va3VwQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJvb3Q7XG4gICAgfShFbnRpdHlTdG9yZSkpO1xuICAgIEVudGl0eVN0b3JlLlJvb3QgPSBSb290O1xufSkoZXhwb3J0cy5FbnRpdHlTdG9yZSB8fCAoZXhwb3J0cy5FbnRpdHlTdG9yZSA9IHt9KSk7XG52YXIgTGF5ZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhMYXllciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMYXllcihpZCwgcGFyZW50LCByZXBsYXksIGdyb3VwKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHBhcmVudC5wb2xpY2llcywgZ3JvdXApIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlkID0gaWQ7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgX3RoaXMucmVwbGF5ID0gcmVwbGF5O1xuICAgICAgICBfdGhpcy5ncm91cCA9IGdyb3VwO1xuICAgICAgICByZXBsYXkoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExheWVyLnByb3RvdHlwZS5hZGRMYXllciA9IGZ1bmN0aW9uIChsYXllcklkLCByZXBsYXkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBMYXllcihsYXllcklkLCB0aGlzLCByZXBsYXksIHRoaXMuZ3JvdXApO1xuICAgIH07XG4gICAgTGF5ZXIucHJvdG90eXBlLnJlbW92ZUxheWVyID0gZnVuY3Rpb24gKGxheWVySWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50LnJlbW92ZUxheWVyKGxheWVySWQpO1xuICAgICAgICBpZiAobGF5ZXJJZCA9PT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXAuY2FjaGluZykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvd25TdG9yZU9iamVjdCA9IF90aGlzLmRhdGFbZGF0YUlkXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudFN0b3JlT2JqZWN0ID0gcGFyZW50W1wibG9va3VwXCJdKGRhdGFJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50U3RvcmVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlbGV0ZShkYXRhSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFvd25TdG9yZU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ3JvdXAuZGlydHkoZGF0YUlkLCBcIl9fZXhpc3RzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyZW50U3RvcmVPYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ3JvdXAuZGlydHkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvd25TdG9yZU9iamVjdCAhPT0gcGFyZW50U3RvcmVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG93blN0b3JlT2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXF1YWxpdHkuZXF1YWwob3duU3RvcmVPYmplY3Rbc3RvcmVGaWVsZE5hbWVdLCBwYXJlbnRTdG9yZU9iamVjdFtzdG9yZUZpZWxkTmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHRoaXMucGFyZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIHJldHVybiBwYXJlbnQuYWRkTGF5ZXIodGhpcy5pZCwgdGhpcy5yZXBsYXkpO1xuICAgIH07XG4gICAgTGF5ZXIucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMucGFyZW50LnRvT2JqZWN0KCkpLCB0aGlzLmRhdGEpO1xuICAgIH07XG4gICAgTGF5ZXIucHJvdG90eXBlLmZpbmRDaGlsZFJlZklkcyA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgdmFyIGZyb21QYXJlbnQgPSB0aGlzLnBhcmVudC5maW5kQ2hpbGRSZWZJZHMoZGF0YUlkKTtcbiAgICAgICAgcmV0dXJuIGhhc093bi5jYWxsKHRoaXMuZGF0YSwgZGF0YUlkKSA/IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBmcm9tUGFyZW50KSwgX3N1cGVyLnByb3RvdHlwZS5maW5kQ2hpbGRSZWZJZHMuY2FsbCh0aGlzLCBkYXRhSWQpKSA6IGZyb21QYXJlbnQ7XG4gICAgfTtcbiAgICBMYXllci5wcm90b3R5cGUuZ2V0U3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHAgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgd2hpbGUgKHAucGFyZW50KVxuICAgICAgICAgICAgcCA9IHAucGFyZW50O1xuICAgICAgICByZXR1cm4gcC5nZXRTdG9yYWdlLmFwcGx5KHAsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICByZXR1cm4gTGF5ZXI7XG59KGV4cG9ydHMuRW50aXR5U3RvcmUpKTtcbnZhciBTdHVtcCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKFN0dW1wLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN0dW1wKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIFwiRW50aXR5U3RvcmUuU3R1bXBcIiwgcm9vdCwgZnVuY3Rpb24gKCkgeyB9LCBuZXcgQ2FjaGVHcm91cChyb290Lmdyb3VwLmNhY2hpbmcsIHJvb3QuZ3JvdXApKSB8fCB0aGlzO1xuICAgIH1cbiAgICBTdHVtcC5wcm90b3R5cGUucmVtb3ZlTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgU3R1bXAucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQubWVyZ2UuYXBwbHkodGhpcy5wYXJlbnQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICByZXR1cm4gU3R1bXA7XG59KExheWVyKSk7XG5mdW5jdGlvbiBzdG9yZU9iamVjdFJlY29uY2lsZXIoZXhpc3RpbmdPYmplY3QsIGluY29taW5nT2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIHZhciBleGlzdGluZ1ZhbHVlID0gZXhpc3RpbmdPYmplY3RbcHJvcGVydHldO1xuICAgIHZhciBpbmNvbWluZ1ZhbHVlID0gaW5jb21pbmdPYmplY3RbcHJvcGVydHldO1xuICAgIHJldHVybiBlcXVhbGl0eS5lcXVhbChleGlzdGluZ1ZhbHVlLCBpbmNvbWluZ1ZhbHVlKSA/IGV4aXN0aW5nVmFsdWUgOiBpbmNvbWluZ1ZhbHVlO1xufVxuZnVuY3Rpb24gc3VwcG9ydHNSZXN1bHRDYWNoaW5nKHN0b3JlKSB7XG4gICAgcmV0dXJuICEhKHN0b3JlIGluc3RhbmNlb2YgZXhwb3J0cy5FbnRpdHlTdG9yZSAmJiBzdG9yZS5ncm91cC5jYWNoaW5nKTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0NvcHkodmFsdWUpIHtcbiAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICAgICAgICA/IHZhbHVlLnNsaWNlKDApXG4gICAgICAgICAgICA6IHRzbGliLl9fYXNzaWduKHsgX19wcm90b19fOiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpIH0sIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxudmFyIE9iamVjdENhbm9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYmplY3RDYW5vbigpIHtcbiAgICAgICAgdGhpcy5rbm93biA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtTZXQgPyBXZWFrU2V0IDogU2V0KSgpO1xuICAgICAgICB0aGlzLnBvb2wgPSBuZXcgdHJpZS5UcmllKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwKTtcbiAgICAgICAgdGhpcy5wYXNzZXMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB0aGlzLmtleXNCeUpTT04gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZW1wdHkgPSB0aGlzLmFkbWl0KHt9KTtcbiAgICB9XG4gICAgT2JqZWN0Q2Fub24ucHJvdG90eXBlLmlzS25vd24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpICYmIHRoaXMua25vd24uaGFzKHZhbHVlKTtcbiAgICB9O1xuICAgIE9iamVjdENhbm9uLnByb3RvdHlwZS5wYXNzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFyIGNvcHkgPSBzaGFsbG93Q29weSh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnBhc3Nlcy5zZXQoY29weSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgT2JqZWN0Q2Fub24ucHJvdG90eXBlLmFkbWl0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsID0gdGhpcy5wYXNzZXMuZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbClcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWw7XG4gICAgICAgICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICAgICAgICAgICAgc3dpdGNoIChwcm90bykge1xuICAgICAgICAgICAgICAgIGNhc2UgQXJyYXkucHJvdG90eXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmtub3duLmhhcyh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJheSA9IHZhbHVlLm1hcCh0aGlzLmFkbWl0LCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBvb2wubG9va3VwQXJyYXkoYXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGUuYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua25vd24uYWRkKG5vZGUuYXJyYXkgPSBhcnJheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoYXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLmFycmF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgICAgICAgY2FzZSBPYmplY3QucHJvdG90eXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmtub3duLmhhcyh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm90b18xID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFycmF5XzEgPSBbcHJvdG9fMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gdGhpcy5zb3J0ZWRLZXlzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlfMS5wdXNoKGtleXMuanNvbik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdFZhbHVlSW5kZXhfMSA9IGFycmF5XzEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBrZXlzLnNvcnRlZC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5XzEucHVzaChfdGhpcy5hZG1pdCh2YWx1ZVtrZXldKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMucG9vbC5sb29rdXBBcnJheShhcnJheV8xKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlLm9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9ial8xID0gbm9kZS5vYmplY3QgPSBPYmplY3QuY3JlYXRlKHByb3RvXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rbm93bi5hZGQob2JqXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5zb3J0ZWQuZm9yRWFjaChmdW5jdGlvbiAoa2V5LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqXzFba2V5XSA9IGFycmF5XzFbZmlyc3RWYWx1ZUluZGV4XzEgKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKG9ial8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5vYmplY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIE9iamVjdENhbm9uLnByb3RvdHlwZS5zb3J0ZWRLZXlzID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5wb29sLmxvb2t1cEFycmF5KGtleXMpO1xuICAgICAgICBpZiAoIW5vZGUua2V5cykge1xuICAgICAgICAgICAga2V5cy5zb3J0KCk7XG4gICAgICAgICAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGtleXMpO1xuICAgICAgICAgICAgaWYgKCEobm9kZS5rZXlzID0gdGhpcy5rZXlzQnlKU09OLmdldChqc29uKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleXNCeUpTT04uc2V0KGpzb24sIG5vZGUua2V5cyA9IHsgc29ydGVkOiBrZXlzLCBqc29uOiBqc29uIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlLmtleXM7XG4gICAgfTtcbiAgICByZXR1cm4gT2JqZWN0Q2Fub247XG59KCkpO1xudmFyIGNhbm9uaWNhbFN0cmluZ2lmeSA9IE9iamVjdC5hc3NpZ24oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIGlmIChzdHJpbmdpZnlDYW5vbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXNldENhbm9uaWNhbFN0cmluZ2lmeSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYW5vbmljYWwgPSBzdHJpbmdpZnlDYW5vbi5hZG1pdCh2YWx1ZSk7XG4gICAgICAgIHZhciBqc29uID0gc3RyaW5naWZ5Q2FjaGUuZ2V0KGNhbm9uaWNhbCk7XG4gICAgICAgIGlmIChqc29uID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHN0cmluZ2lmeUNhY2hlLnNldChjYW5vbmljYWwsIGpzb24gPSBKU09OLnN0cmluZ2lmeShjYW5vbmljYWwpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbn0sIHtcbiAgICByZXNldDogcmVzZXRDYW5vbmljYWxTdHJpbmdpZnksXG59KTtcbnZhciBzdHJpbmdpZnlDYW5vbjtcbnZhciBzdHJpbmdpZnlDYWNoZTtcbmZ1bmN0aW9uIHJlc2V0Q2Fub25pY2FsU3RyaW5naWZ5KCkge1xuICAgIHN0cmluZ2lmeUNhbm9uID0gbmV3IE9iamVjdENhbm9uO1xuICAgIHN0cmluZ2lmeUNhY2hlID0gbmV3ICh1dGlsaXRpZXMuY2FuVXNlV2Vha01hcCA/IFdlYWtNYXAgOiBNYXApKCk7XG59XG5cbmZ1bmN0aW9uIGV4ZWNTZWxlY3Rpb25TZXRLZXlBcmdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBvcHRpb25zLnNlbGVjdGlvblNldCxcbiAgICAgICAgb3B0aW9ucy5vYmplY3RPclJlZmVyZW5jZSxcbiAgICAgICAgb3B0aW9ucy5jb250ZXh0LFxuICAgICAgICBvcHRpb25zLmNvbnRleHQuY2Fub25pemVSZXN1bHRzLFxuICAgIF07XG59XG52YXIgU3RvcmVSZWFkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0b3JlUmVhZGVyKGNvbmZpZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmtub3duUmVzdWx0cyA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtNYXAgPyBXZWFrTWFwIDogTWFwKSgpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHV0aWxpdGllcy5jb21wYWN0KGNvbmZpZywge1xuICAgICAgICAgICAgYWRkVHlwZW5hbWU6IGNvbmZpZy5hZGRUeXBlbmFtZSAhPT0gZmFsc2UsXG4gICAgICAgICAgICBjYW5vbml6ZVJlc3VsdHM6IHNob3VsZENhbm9uaXplUmVzdWx0cyhjb25maWcpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYW5vbiA9IGNvbmZpZy5jYW5vbiB8fCBuZXcgT2JqZWN0Q2Fub247XG4gICAgICAgIHRoaXMuZXhlY3V0ZVNlbGVjdGlvblNldCA9IG9wdGltaXNtLndyYXAoZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciBjYW5vbml6ZVJlc3VsdHMgPSBvcHRpb25zLmNvbnRleHQuY2Fub25pemVSZXN1bHRzO1xuICAgICAgICAgICAgdmFyIHBlZWtBcmdzID0gZXhlY1NlbGVjdGlvblNldEtleUFyZ3Mob3B0aW9ucyk7XG4gICAgICAgICAgICBwZWVrQXJnc1szXSA9ICFjYW5vbml6ZVJlc3VsdHM7XG4gICAgICAgICAgICB2YXIgb3RoZXIgPSAoX2EgPSBfdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0KS5wZWVrLmFwcGx5KF9hLCBwZWVrQXJncyk7XG4gICAgICAgICAgICBpZiAob3RoZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2Fub25pemVSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3RoZXIpLCB7IHJlc3VsdDogX3RoaXMuY2Fub24uYWRtaXQob3RoZXIucmVzdWx0KSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF5YmVEZXBlbmRPbkV4aXN0ZW5jZU9mRW50aXR5KG9wdGlvbnMuY29udGV4dC5zdG9yZSwgb3B0aW9ucy5lbmNsb3NpbmdSZWYuX19yZWYpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmV4ZWNTZWxlY3Rpb25TZXRJbXBsKG9wdGlvbnMpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtYXg6IHRoaXMuY29uZmlnLnJlc3VsdENhY2hlTWF4U2l6ZSxcbiAgICAgICAgICAgIGtleUFyZ3M6IGV4ZWNTZWxlY3Rpb25TZXRLZXlBcmdzLFxuICAgICAgICAgICAgbWFrZUNhY2hlS2V5OiBmdW5jdGlvbiAoc2VsZWN0aW9uU2V0LCBwYXJlbnQsIGNvbnRleHQsIGNhbm9uaXplUmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c1Jlc3VsdENhY2hpbmcoY29udGV4dC5zdG9yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuc3RvcmUubWFrZUNhY2hlS2V5KHNlbGVjdGlvblNldCwgdXRpbGl0aWVzLmlzUmVmZXJlbmNlKHBhcmVudCkgPyBwYXJlbnQuX19yZWYgOiBwYXJlbnQsIGNvbnRleHQudmFyU3RyaW5nLCBjYW5vbml6ZVJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZVN1YlNlbGVjdGVkQXJyYXkgPSBvcHRpbWlzbS53cmFwKGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICBtYXliZURlcGVuZE9uRXhpc3RlbmNlT2ZFbnRpdHkob3B0aW9ucy5jb250ZXh0LnN0b3JlLCBvcHRpb25zLmVuY2xvc2luZ1JlZi5fX3JlZik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZXhlY1N1YlNlbGVjdGVkQXJyYXlJbXBsKG9wdGlvbnMpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtYXg6IHRoaXMuY29uZmlnLnJlc3VsdENhY2hlTWF4U2l6ZSxcbiAgICAgICAgICAgIG1ha2VDYWNoZUtleTogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gX2EuZmllbGQsIGFycmF5ID0gX2EuYXJyYXksIGNvbnRleHQgPSBfYS5jb250ZXh0O1xuICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c1Jlc3VsdENhY2hpbmcoY29udGV4dC5zdG9yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuc3RvcmUubWFrZUNhY2hlS2V5KGZpZWxkLCBhcnJheSwgY29udGV4dC52YXJTdHJpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5yZXNldENhbm9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNhbm9uID0gbmV3IE9iamVjdENhbm9uO1xuICAgIH07XG4gICAgU3RvcmVSZWFkZXIucHJvdG90eXBlLmRpZmZRdWVyeUFnYWluc3RTdG9yZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgc3RvcmUgPSBfYS5zdG9yZSwgcXVlcnkgPSBfYS5xdWVyeSwgX2IgPSBfYS5yb290SWQsIHJvb3RJZCA9IF9iID09PSB2b2lkIDAgPyAnUk9PVF9RVUVSWScgOiBfYiwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBfYyA9IF9hLnJldHVyblBhcnRpYWxEYXRhLCByZXR1cm5QYXJ0aWFsRGF0YSA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gX2EuY2Fub25pemVSZXN1bHRzLCBjYW5vbml6ZVJlc3VsdHMgPSBfZCA9PT0gdm9pZCAwID8gdGhpcy5jb25maWcuY2Fub25pemVSZXN1bHRzIDogX2Q7XG4gICAgICAgIHZhciBwb2xpY2llcyA9IHRoaXMuY29uZmlnLmNhY2hlLnBvbGljaWVzO1xuICAgICAgICB2YXJpYWJsZXMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdXRpbGl0aWVzLmdldERlZmF1bHRWYWx1ZXModXRpbGl0aWVzLmdldFF1ZXJ5RGVmaW5pdGlvbihxdWVyeSkpKSwgdmFyaWFibGVzKTtcbiAgICAgICAgdmFyIHJvb3RSZWYgPSB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZShyb290SWQpO1xuICAgICAgICB2YXIgbWVyZ2VyID0gbmV3IHV0aWxpdGllcy5EZWVwTWVyZ2VyO1xuICAgICAgICB2YXIgZXhlY1Jlc3VsdCA9IHRoaXMuZXhlY3V0ZVNlbGVjdGlvblNldCh7XG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHV0aWxpdGllcy5nZXRNYWluRGVmaW5pdGlvbihxdWVyeSkuc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgb2JqZWN0T3JSZWZlcmVuY2U6IHJvb3RSZWYsXG4gICAgICAgICAgICBlbmNsb3NpbmdSZWY6IHJvb3RSZWYsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgICAgICBwb2xpY2llczogcG9saWNpZXMsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgdmFyU3RyaW5nOiBjYW5vbmljYWxTdHJpbmdpZnkodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICBjYW5vbml6ZVJlc3VsdHM6IGNhbm9uaXplUmVzdWx0cyxcbiAgICAgICAgICAgICAgICBmcmFnbWVudE1hcDogdXRpbGl0aWVzLmNyZWF0ZUZyYWdtZW50TWFwKHV0aWxpdGllcy5nZXRGcmFnbWVudERlZmluaXRpb25zKHF1ZXJ5KSksXG4gICAgICAgICAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXJnZXIubWVyZ2UoYSwgYik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbWlzc2luZztcbiAgICAgICAgaWYgKGV4ZWNSZXN1bHQubWlzc2luZykge1xuICAgICAgICAgICAgbWlzc2luZyA9IFtuZXcgTWlzc2luZ0ZpZWxkRXJyb3IoZmlyc3RNaXNzaW5nKGV4ZWNSZXN1bHQubWlzc2luZyksIGV4ZWNSZXN1bHQubWlzc2luZywgcXVlcnksIHZhcmlhYmxlcyldO1xuICAgICAgICAgICAgaWYgKCFyZXR1cm5QYXJ0aWFsRGF0YSkge1xuICAgICAgICAgICAgICAgIHRocm93IG1pc3NpbmdbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3VsdDogZXhlY1Jlc3VsdC5yZXN1bHQsXG4gICAgICAgICAgICBjb21wbGV0ZTogIW1pc3NpbmcsXG4gICAgICAgICAgICBtaXNzaW5nOiBtaXNzaW5nLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgU3RvcmVSZWFkZXIucHJvdG90eXBlLmlzRnJlc2ggPSBmdW5jdGlvbiAocmVzdWx0LCBwYXJlbnQsIHNlbGVjdGlvblNldCwgY29udGV4dCkge1xuICAgICAgICBpZiAoc3VwcG9ydHNSZXN1bHRDYWNoaW5nKGNvbnRleHQuc3RvcmUpICYmXG4gICAgICAgICAgICB0aGlzLmtub3duUmVzdWx0cy5nZXQocmVzdWx0KSA9PT0gc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICB2YXIgbGF0ZXN0ID0gdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0LnBlZWsoc2VsZWN0aW9uU2V0LCBwYXJlbnQsIGNvbnRleHQsIHRoaXMuY2Fub24uaXNLbm93bihyZXN1bHQpKTtcbiAgICAgICAgICAgIGlmIChsYXRlc3QgJiYgcmVzdWx0ID09PSBsYXRlc3QucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgU3RvcmVSZWFkZXIucHJvdG90eXBlLmV4ZWNTZWxlY3Rpb25TZXRJbXBsID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzZWxlY3Rpb25TZXQgPSBfYS5zZWxlY3Rpb25TZXQsIG9iamVjdE9yUmVmZXJlbmNlID0gX2Eub2JqZWN0T3JSZWZlcmVuY2UsIGVuY2xvc2luZ1JlZiA9IF9hLmVuY2xvc2luZ1JlZiwgY29udGV4dCA9IF9hLmNvbnRleHQ7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqZWN0T3JSZWZlcmVuY2UpICYmXG4gICAgICAgICAgICAhY29udGV4dC5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZFtvYmplY3RPclJlZmVyZW5jZS5fX3JlZl0gJiZcbiAgICAgICAgICAgICFjb250ZXh0LnN0b3JlLmhhcyhvYmplY3RPclJlZmVyZW5jZS5fX3JlZikpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0OiB0aGlzLmNhbm9uLmVtcHR5LFxuICAgICAgICAgICAgICAgIG1pc3Npbmc6IFwiRGFuZ2xpbmcgcmVmZXJlbmNlIHRvIG1pc3NpbmcgXCIuY29uY2F0KG9iamVjdE9yUmVmZXJlbmNlLl9fcmVmLCBcIiBvYmplY3RcIiksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSBjb250ZXh0LnZhcmlhYmxlcywgcG9saWNpZXMgPSBjb250ZXh0LnBvbGljaWVzLCBzdG9yZSA9IGNvbnRleHQuc3RvcmU7XG4gICAgICAgIHZhciB0eXBlbmFtZSA9IHN0b3JlLmdldEZpZWxkVmFsdWUob2JqZWN0T3JSZWZlcmVuY2UsIFwiX190eXBlbmFtZVwiKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICB2YXIgbWlzc2luZztcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFkZFR5cGVuYW1lICYmXG4gICAgICAgICAgICB0eXBlb2YgdHlwZW5hbWUgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICFwb2xpY2llcy5yb290SWRzQnlUeXBlbmFtZVt0eXBlbmFtZV0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHsgX190eXBlbmFtZTogdHlwZW5hbWUgfTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVNaXNzaW5nKHJlc3VsdCwgcmVzdWx0TmFtZSkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5taXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZyA9IGNvbnRleHQubWVyZ2UobWlzc2luZywgKF9hID0ge30sIF9hW3Jlc3VsdE5hbWVdID0gcmVzdWx0Lm1pc3NpbmcsIF9hKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd29ya1NldCA9IG5ldyBTZXQoc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMpO1xuICAgICAgICB3b3JrU2V0LmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGlmICghdXRpbGl0aWVzLnNob3VsZEluY2x1ZGUoc2VsZWN0aW9uLCB2YXJpYWJsZXMpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkVmFsdWUgPSBwb2xpY2llcy5yZWFkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IHNlbGVjdGlvbi5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGNvbnRleHQudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBvYmplY3RPclJlZmVyZW5jZSxcbiAgICAgICAgICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0TmFtZSA9IHV0aWxpdGllcy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkKHNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXV0aWxpdGllcy5hZGRUeXBlbmFtZVRvRG9jdW1lbnQuYWRkZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2luZyA9IGNvbnRleHQubWVyZ2UobWlzc2luZywgKF9hID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FbcmVzdWx0TmFtZV0gPSBcIkNhbid0IGZpbmQgZmllbGQgJ1wiLmNvbmNhdChzZWxlY3Rpb24ubmFtZS52YWx1ZSwgXCInIG9uIFwiKS5jb25jYXQodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdE9yUmVmZXJlbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9iamVjdE9yUmVmZXJlbmNlLl9fcmVmICsgXCIgb2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm9iamVjdCBcIiArIEpTT04uc3RyaW5naWZ5KG9iamVjdE9yUmVmZXJlbmNlLCBudWxsLCAyKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpZWxkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSBoYW5kbGVNaXNzaW5nKF90aGlzLmV4ZWN1dGVTdWJTZWxlY3RlZEFycmF5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBzZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheTogZmllbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY2xvc2luZ1JlZjogZW5jbG9zaW5nUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgfSksIHJlc3VsdE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghc2VsZWN0aW9uLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5jYW5vbml6ZVJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSBfdGhpcy5jYW5vbi5wYXNzKGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlID0gaGFuZGxlTWlzc2luZyhfdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDogc2VsZWN0aW9uLnNlbGVjdGlvblNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE9yUmVmZXJlbmNlOiBmaWVsZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5jbG9zaW5nUmVmOiB1dGlsaXRpZXMuaXNSZWZlcmVuY2UoZmllbGRWYWx1ZSkgPyBmaWVsZFZhbHVlIDogZW5jbG9zaW5nUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgfSksIHJlc3VsdE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRleHQubWVyZ2UocmVzdWx0LCAoX2IgPSB7fSwgX2JbcmVzdWx0TmFtZV0gPSBmaWVsZFZhbHVlLCBfYikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IHV0aWxpdGllcy5nZXRGcmFnbWVudEZyb21TZWxlY3Rpb24oc2VsZWN0aW9uLCBjb250ZXh0LmZyYWdtZW50TWFwKTtcbiAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnQgJiYgcG9saWNpZXMuZnJhZ21lbnRNYXRjaGVzKGZyYWdtZW50LCB0eXBlbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQuc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaCh3b3JrU2V0LmFkZCwgd29ya1NldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGZpbmFsUmVzdWx0ID0geyByZXN1bHQ6IHJlc3VsdCwgbWlzc2luZzogbWlzc2luZyB9O1xuICAgICAgICB2YXIgZnJvemVuID0gY29udGV4dC5jYW5vbml6ZVJlc3VsdHNcbiAgICAgICAgICAgID8gdGhpcy5jYW5vbi5hZG1pdChmaW5hbFJlc3VsdClcbiAgICAgICAgICAgIDogdXRpbGl0aWVzLm1heWJlRGVlcEZyZWV6ZShmaW5hbFJlc3VsdCk7XG4gICAgICAgIGlmIChmcm96ZW4ucmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLmtub3duUmVzdWx0cy5zZXQoZnJvemVuLnJlc3VsdCwgc2VsZWN0aW9uU2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJvemVuO1xuICAgIH07XG4gICAgU3RvcmVSZWFkZXIucHJvdG90eXBlLmV4ZWNTdWJTZWxlY3RlZEFycmF5SW1wbCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZmllbGQgPSBfYS5maWVsZCwgYXJyYXkgPSBfYS5hcnJheSwgZW5jbG9zaW5nUmVmID0gX2EuZW5jbG9zaW5nUmVmLCBjb250ZXh0ID0gX2EuY29udGV4dDtcbiAgICAgICAgdmFyIG1pc3Npbmc7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1pc3NpbmcoY2hpbGRSZXN1bHQsIGkpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChjaGlsZFJlc3VsdC5taXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZyA9IGNvbnRleHQubWVyZ2UobWlzc2luZywgKF9hID0ge30sIF9hW2ldID0gY2hpbGRSZXN1bHQubWlzc2luZywgX2EpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGlsZFJlc3VsdC5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgYXJyYXkgPSBhcnJheS5maWx0ZXIoY29udGV4dC5zdG9yZS5jYW5SZWFkKTtcbiAgICAgICAgfVxuICAgICAgICBhcnJheSA9IGFycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU1pc3NpbmcoX3RoaXMuZXhlY3V0ZVN1YlNlbGVjdGVkQXJyYXkoe1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgIGFycmF5OiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICBlbmNsb3NpbmdSZWY6IGVuY2xvc2luZ1JlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICB9KSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU1pc3NpbmcoX3RoaXMuZXhlY3V0ZVNlbGVjdGlvblNldCh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDogZmllbGQuc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgICAgICAgICBvYmplY3RPclJlZmVyZW5jZTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgZW5jbG9zaW5nUmVmOiB1dGlsaXRpZXMuaXNSZWZlcmVuY2UoaXRlbSkgPyBpdGVtIDogZW5jbG9zaW5nUmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIH0pLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0U2VsZWN0aW9uU2V0Rm9ySWRWYWx1ZShjb250ZXh0LnN0b3JlLCBmaWVsZCwgaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN1bHQ6IGNvbnRleHQuY2Fub25pemVSZXN1bHRzID8gdGhpcy5jYW5vbi5hZG1pdChhcnJheSkgOiBhcnJheSxcbiAgICAgICAgICAgIG1pc3Npbmc6IG1pc3NpbmcsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gU3RvcmVSZWFkZXI7XG59KCkpO1xuZnVuY3Rpb24gZmlyc3RNaXNzaW5nKHRyZWUpIHtcbiAgICB0cnkge1xuICAgICAgICBKU09OLnN0cmluZ2lmeSh0cmVlLCBmdW5jdGlvbiAoXywgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgdGhyb3cgdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuZnVuY3Rpb24gYXNzZXJ0U2VsZWN0aW9uU2V0Rm9ySWRWYWx1ZShzdG9yZSwgZmllbGQsIGZpZWxkVmFsdWUpIHtcbiAgICBpZiAoIWZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICB2YXIgd29ya1NldF8xID0gbmV3IFNldChbZmllbGRWYWx1ZV0pO1xuICAgICAgICB3b3JrU2V0XzEuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghdXRpbGl0aWVzLmlzUmVmZXJlbmNlKHZhbHVlKSwgXCJNaXNzaW5nIHNlbGVjdGlvbiBzZXQgZm9yIG9iamVjdCBvZiB0eXBlIFwiLmNvbmNhdChnZXRUeXBlbmFtZUZyb21TdG9yZU9iamVjdChzdG9yZSwgdmFsdWUpLCBcIiByZXR1cm5lZCBmb3IgcXVlcnkgZmllbGQgXCIpLmNvbmNhdChmaWVsZC5uYW1lLnZhbHVlKSkgOiBnbG9iYWxzLmludmFyaWFudCghdXRpbGl0aWVzLmlzUmVmZXJlbmNlKHZhbHVlKSwgNSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh2YWx1ZSkuZm9yRWFjaCh3b3JrU2V0XzEuYWRkLCB3b3JrU2V0XzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbnZhciBjYWNoZVNsb3QgPSBuZXcgY29udGV4dC5TbG90KCk7XG52YXIgY2FjaGVJbmZvTWFwID0gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIGdldENhY2hlSW5mbyhjYWNoZSkge1xuICAgIHZhciBpbmZvID0gY2FjaGVJbmZvTWFwLmdldChjYWNoZSk7XG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICAgIGNhY2hlSW5mb01hcC5zZXQoY2FjaGUsIGluZm8gPSB7XG4gICAgICAgICAgICB2YXJzOiBuZXcgU2V0LFxuICAgICAgICAgICAgZGVwOiBvcHRpbWlzbS5kZXAoKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBpbmZvO1xufVxuZnVuY3Rpb24gZm9yZ2V0Q2FjaGUoY2FjaGUpIHtcbiAgICBnZXRDYWNoZUluZm8oY2FjaGUpLnZhcnMuZm9yRWFjaChmdW5jdGlvbiAocnYpIHsgcmV0dXJuIHJ2LmZvcmdldENhY2hlKGNhY2hlKTsgfSk7XG59XG5mdW5jdGlvbiByZWNhbGxDYWNoZShjYWNoZSkge1xuICAgIGdldENhY2hlSW5mbyhjYWNoZSkudmFycy5mb3JFYWNoKGZ1bmN0aW9uIChydikgeyByZXR1cm4gcnYuYXR0YWNoQ2FjaGUoY2FjaGUpOyB9KTtcbn1cbmZ1bmN0aW9uIG1ha2VWYXIodmFsdWUpIHtcbiAgICB2YXIgY2FjaGVzID0gbmV3IFNldCgpO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHJ2ID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgY2FjaGVzLmZvckVhY2goZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldENhY2hlSW5mbyhjYWNoZSkuZGVwLmRpcnR5KHJ2KTtcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0KGNhY2hlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgb2xkTGlzdGVuZXJzID0gQXJyYXkuZnJvbShsaXN0ZW5lcnMpO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIodmFsdWUpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjYWNoZSA9IGNhY2hlU2xvdC5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgaWYgKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoKGNhY2hlKTtcbiAgICAgICAgICAgICAgICBnZXRDYWNoZUluZm8oY2FjaGUpLmRlcChydik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgcnYub25OZXh0Q2hhbmdlID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgYXR0YWNoID0gcnYuYXR0YWNoQ2FjaGUgPSBmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgY2FjaGVzLmFkZChjYWNoZSk7XG4gICAgICAgIGdldENhY2hlSW5mbyhjYWNoZSkudmFycy5hZGQocnYpO1xuICAgICAgICByZXR1cm4gcnY7XG4gICAgfTtcbiAgICBydi5mb3JnZXRDYWNoZSA9IGZ1bmN0aW9uIChjYWNoZSkgeyByZXR1cm4gY2FjaGVzLmRlbGV0ZShjYWNoZSk7IH07XG4gICAgcmV0dXJuIHJ2O1xufVxuZnVuY3Rpb24gYnJvYWRjYXN0KGNhY2hlKSB7XG4gICAgaWYgKGNhY2hlLmJyb2FkY2FzdFdhdGNoZXMpIHtcbiAgICAgICAgY2FjaGUuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgIH1cbn1cblxudmFyIHNwZWNpZmllckluZm9DYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5mdW5jdGlvbiBsb29rdXBTcGVjaWZpZXJJbmZvKHNwZWMpIHtcbiAgICB2YXIgY2FjaGVLZXkgPSBKU09OLnN0cmluZ2lmeShzcGVjKTtcbiAgICByZXR1cm4gc3BlY2lmaWVySW5mb0NhY2hlW2NhY2hlS2V5XSB8fFxuICAgICAgICAoc3BlY2lmaWVySW5mb0NhY2hlW2NhY2hlS2V5XSA9IE9iamVjdC5jcmVhdGUobnVsbCkpO1xufVxuZnVuY3Rpb24ga2V5RmllbGRzRm5Gcm9tU3BlY2lmaWVyKHNwZWNpZmllcikge1xuICAgIHZhciBpbmZvID0gbG9va3VwU3BlY2lmaWVySW5mbyhzcGVjaWZpZXIpO1xuICAgIHJldHVybiBpbmZvLmtleUZpZWxkc0ZuIHx8IChpbmZvLmtleUZpZWxkc0ZuID0gZnVuY3Rpb24gKG9iamVjdCwgY29udGV4dCkge1xuICAgICAgICB2YXIgZXh0cmFjdCA9IGZ1bmN0aW9uIChmcm9tLCBrZXkpIHsgcmV0dXJuIGNvbnRleHQucmVhZEZpZWxkKGtleSwgZnJvbSk7IH07XG4gICAgICAgIHZhciBrZXlPYmplY3QgPSBjb250ZXh0LmtleU9iamVjdCA9IGNvbGxlY3RTcGVjaWZpZXJQYXRocyhzcGVjaWZpZXIsIGZ1bmN0aW9uIChzY2hlbWFLZXlQYXRoKSB7XG4gICAgICAgICAgICB2YXIgZXh0cmFjdGVkID0gZXh0cmFjdEtleVBhdGgoY29udGV4dC5zdG9yZU9iamVjdCwgc2NoZW1hS2V5UGF0aCwgZXh0cmFjdCk7XG4gICAgICAgICAgICBpZiAoZXh0cmFjdGVkID09PSB2b2lkIDAgJiZcbiAgICAgICAgICAgICAgICBvYmplY3QgIT09IGNvbnRleHQuc3RvcmVPYmplY3QgJiZcbiAgICAgICAgICAgICAgICBoYXNPd24uY2FsbChvYmplY3QsIHNjaGVtYUtleVBhdGhbMF0pKSB7XG4gICAgICAgICAgICAgICAgZXh0cmFjdGVkID0gZXh0cmFjdEtleVBhdGgob2JqZWN0LCBzY2hlbWFLZXlQYXRoLCBleHRyYWN0S2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChleHRyYWN0ZWQgIT09IHZvaWQgMCwgXCJNaXNzaW5nIGZpZWxkICdcIi5jb25jYXQoc2NoZW1hS2V5UGF0aC5qb2luKCcuJyksIFwiJyB3aGlsZSBleHRyYWN0aW5nIGtleUZpZWxkcyBmcm9tIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSkpIDogZ2xvYmFscy5pbnZhcmlhbnQoZXh0cmFjdGVkICE9PSB2b2lkIDAsIDIpO1xuICAgICAgICAgICAgcmV0dXJuIGV4dHJhY3RlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChjb250ZXh0LnR5cGVuYW1lLCBcIjpcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGtleU9iamVjdCkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24ga2V5QXJnc0ZuRnJvbVNwZWNpZmllcihzcGVjaWZpZXIpIHtcbiAgICB2YXIgaW5mbyA9IGxvb2t1cFNwZWNpZmllckluZm8oc3BlY2lmaWVyKTtcbiAgICByZXR1cm4gaW5mby5rZXlBcmdzRm4gfHwgKGluZm8ua2V5QXJnc0ZuID0gZnVuY3Rpb24gKGFyZ3MsIF9hKSB7XG4gICAgICAgIHZhciBmaWVsZCA9IF9hLmZpZWxkLCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIGZpZWxkTmFtZSA9IF9hLmZpZWxkTmFtZTtcbiAgICAgICAgdmFyIGNvbGxlY3RlZCA9IGNvbGxlY3RTcGVjaWZpZXJQYXRocyhzcGVjaWZpZXIsIGZ1bmN0aW9uIChrZXlQYXRoKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RLZXkgPSBrZXlQYXRoWzBdO1xuICAgICAgICAgICAgdmFyIGZpcnN0Q2hhciA9IGZpcnN0S2V5LmNoYXJBdCgwKTtcbiAgICAgICAgICAgIGlmIChmaXJzdENoYXIgPT09IFwiQFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkICYmIHV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkoZmllbGQuZGlyZWN0aXZlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZU5hbWVfMSA9IGZpcnN0S2V5LnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGZpZWxkLmRpcmVjdGl2ZXMuZmluZChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lLnZhbHVlID09PSBkaXJlY3RpdmVOYW1lXzE7IH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aXZlQXJncyA9IGQgJiYgdXRpbGl0aWVzLmFyZ3VtZW50c09iamVjdEZyb21GaWVsZChkLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlQXJncyAmJiBleHRyYWN0S2V5UGF0aChkaXJlY3RpdmVBcmdzLCBrZXlQYXRoLnNsaWNlKDEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0Q2hhciA9PT0gXCIkXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFyaWFibGVOYW1lID0gZmlyc3RLZXkuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlcyAmJiBoYXNPd24uY2FsbCh2YXJpYWJsZXMsIHZhcmlhYmxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhcktleVBhdGggPSBrZXlQYXRoLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgICAgICB2YXJLZXlQYXRoWzBdID0gdmFyaWFibGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXh0cmFjdEtleVBhdGgodmFyaWFibGVzLCB2YXJLZXlQYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXh0cmFjdEtleVBhdGgoYXJncywga2V5UGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc3VmZml4ID0gSlNPTi5zdHJpbmdpZnkoY29sbGVjdGVkKTtcbiAgICAgICAgaWYgKGFyZ3MgfHwgc3VmZml4ICE9PSBcInt9XCIpIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZSArPSBcIjpcIiArIHN1ZmZpeDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGROYW1lO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY29sbGVjdFNwZWNpZmllclBhdGhzKHNwZWNpZmllciwgZXh0cmFjdG9yKSB7XG4gICAgdmFyIG1lcmdlciA9IG5ldyB1dGlsaXRpZXMuRGVlcE1lcmdlcjtcbiAgICByZXR1cm4gZ2V0U3BlY2lmaWVyUGF0aHMoc3BlY2lmaWVyKS5yZWR1Y2UoZnVuY3Rpb24gKGNvbGxlY3RlZCwgcGF0aCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciB0b01lcmdlID0gZXh0cmFjdG9yKHBhdGgpO1xuICAgICAgICBpZiAodG9NZXJnZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIHRvTWVyZ2UgPSAoX2EgPSB7fSwgX2FbcGF0aFtpXV0gPSB0b01lcmdlLCBfYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2xsZWN0ZWQgPSBtZXJnZXIubWVyZ2UoY29sbGVjdGVkLCB0b01lcmdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGVjdGVkO1xuICAgIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xufVxuZnVuY3Rpb24gZ2V0U3BlY2lmaWVyUGF0aHMoc3BlYykge1xuICAgIHZhciBpbmZvID0gbG9va3VwU3BlY2lmaWVySW5mbyhzcGVjKTtcbiAgICBpZiAoIWluZm8ucGF0aHMpIHtcbiAgICAgICAgdmFyIHBhdGhzXzEgPSBpbmZvLnBhdGhzID0gW107XG4gICAgICAgIHZhciBjdXJyZW50UGF0aF8xID0gW107XG4gICAgICAgIHNwZWMuZm9yRWFjaChmdW5jdGlvbiAocywgaSkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocykpIHtcbiAgICAgICAgICAgICAgICBnZXRTcGVjaWZpZXJQYXRocyhzKS5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwYXRoc18xLnB1c2goY3VycmVudFBhdGhfMS5jb25jYXQocCkpOyB9KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGF0aF8xLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGF0aF8xLnB1c2gocyk7XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNwZWNbaSArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRoc18xLnB1c2goY3VycmVudFBhdGhfMS5zbGljZSgwKSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoXzEubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaW5mby5wYXRocztcbn1cbmZ1bmN0aW9uIGV4dHJhY3RLZXkob2JqZWN0LCBrZXkpIHtcbiAgICByZXR1cm4gb2JqZWN0W2tleV07XG59XG5mdW5jdGlvbiBleHRyYWN0S2V5UGF0aChvYmplY3QsIHBhdGgsIGV4dHJhY3QpIHtcbiAgICBleHRyYWN0ID0gZXh0cmFjdCB8fCBleHRyYWN0S2V5O1xuICAgIHJldHVybiBub3JtYWxpemUocGF0aC5yZWR1Y2UoZnVuY3Rpb24gcmVkdWNlcihvYmosIGtleSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopXG4gICAgICAgICAgICA/IG9iai5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiByZWR1Y2VyKGNoaWxkLCBrZXkpOyB9KVxuICAgICAgICAgICAgOiBvYmogJiYgZXh0cmFjdChvYmosIGtleSk7XG4gICAgfSwgb2JqZWN0KSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemUodmFsdWUpIHtcbiAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubWFwKG5vcm1hbGl6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxlY3RTcGVjaWZpZXJQYXRocyhPYmplY3Qua2V5cyh2YWx1ZSkuc29ydCgpLCBmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gZXh0cmFjdEtleVBhdGgodmFsdWUsIHBhdGgpOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG51dGlsaXRpZXMuZ2V0U3RvcmVLZXlOYW1lLnNldFN0cmluZ2lmeShjYW5vbmljYWxTdHJpbmdpZnkpO1xuZnVuY3Rpb24gYXJnc0Zyb21GaWVsZFNwZWNpZmllcihzcGVjKSB7XG4gICAgcmV0dXJuIHNwZWMuYXJncyAhPT0gdm9pZCAwID8gc3BlYy5hcmdzIDpcbiAgICAgICAgc3BlYy5maWVsZCA/IHV0aWxpdGllcy5hcmd1bWVudHNPYmplY3RGcm9tRmllbGQoc3BlYy5maWVsZCwgc3BlYy52YXJpYWJsZXMpIDogbnVsbDtcbn1cbnZhciBudWxsS2V5RmllbGRzRm4gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB2b2lkIDA7IH07XG52YXIgc2ltcGxlS2V5QXJnc0ZuID0gZnVuY3Rpb24gKF9hcmdzLCBjb250ZXh0KSB7IHJldHVybiBjb250ZXh0LmZpZWxkTmFtZTsgfTtcbnZhciBtZXJnZVRydWVGbiA9IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcsIF9hKSB7XG4gICAgdmFyIG1lcmdlT2JqZWN0cyA9IF9hLm1lcmdlT2JqZWN0cztcbiAgICByZXR1cm4gbWVyZ2VPYmplY3RzKGV4aXN0aW5nLCBpbmNvbWluZyk7XG59O1xudmFyIG1lcmdlRmFsc2VGbiA9IGZ1bmN0aW9uIChfLCBpbmNvbWluZykgeyByZXR1cm4gaW5jb21pbmc7IH07XG52YXIgUG9saWNpZXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBvbGljaWVzKGNvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy50eXBlUG9saWNpZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnRvQmVBZGRlZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuc3VwZXJ0eXBlTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmZ1enp5U3VidHlwZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucm9vdElkc0J5VHlwZW5hbWUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnJvb3RUeXBlbmFtZXNCeUlkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy51c2luZ1Bvc3NpYmxlVHlwZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0c2xpYi5fX2Fzc2lnbih7IGRhdGFJZEZyb21PYmplY3Q6IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0IH0sIGNvbmZpZyk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB0aGlzLmNvbmZpZy5jYWNoZTtcbiAgICAgICAgdGhpcy5zZXRSb290VHlwZW5hbWUoXCJRdWVyeVwiKTtcbiAgICAgICAgdGhpcy5zZXRSb290VHlwZW5hbWUoXCJNdXRhdGlvblwiKTtcbiAgICAgICAgdGhpcy5zZXRSb290VHlwZW5hbWUoXCJTdWJzY3JpcHRpb25cIik7XG4gICAgICAgIGlmIChjb25maWcucG9zc2libGVUeXBlcykge1xuICAgICAgICAgICAgdGhpcy5hZGRQb3NzaWJsZVR5cGVzKGNvbmZpZy5wb3NzaWJsZVR5cGVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLnR5cGVQb2xpY2llcykge1xuICAgICAgICAgICAgdGhpcy5hZGRUeXBlUG9saWNpZXMoY29uZmlnLnR5cGVQb2xpY2llcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24gKG9iamVjdCwgcGFydGlhbENvbnRleHQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgcG9saWNpZXMgPSB0aGlzO1xuICAgICAgICB2YXIgdHlwZW5hbWUgPSBwYXJ0aWFsQ29udGV4dCAmJiAocGFydGlhbENvbnRleHQudHlwZW5hbWUgfHxcbiAgICAgICAgICAgICgoX2EgPSBwYXJ0aWFsQ29udGV4dC5zdG9yZU9iamVjdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLl9fdHlwZW5hbWUpKSB8fCBvYmplY3QuX190eXBlbmFtZTtcbiAgICAgICAgaWYgKHR5cGVuYW1lID09PSB0aGlzLnJvb3RUeXBlbmFtZXNCeUlkLlJPT1RfUVVFUlkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXCJST09UX1FVRVJZXCJdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdG9yZU9iamVjdCA9IHBhcnRpYWxDb250ZXh0ICYmIHBhcnRpYWxDb250ZXh0LnN0b3JlT2JqZWN0IHx8IG9iamVjdDtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgcGFydGlhbENvbnRleHQpLCB7IHR5cGVuYW1lOiB0eXBlbmFtZSwgc3RvcmVPYmplY3Q6IHN0b3JlT2JqZWN0LCByZWFkRmllbGQ6IHBhcnRpYWxDb250ZXh0ICYmIHBhcnRpYWxDb250ZXh0LnJlYWRGaWVsZCB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVSZWFkRmllbGRPcHRpb25zKGFyZ3VtZW50cywgc3RvcmVPYmplY3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwb2xpY2llcy5yZWFkRmllbGQob3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZTogcG9saWNpZXMuY2FjaGVbXCJkYXRhXCJdLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgdmFyIGlkO1xuICAgICAgICB2YXIgcG9saWN5ID0gdHlwZW5hbWUgJiYgdGhpcy5nZXRUeXBlUG9saWN5KHR5cGVuYW1lKTtcbiAgICAgICAgdmFyIGtleUZuID0gcG9saWN5ICYmIHBvbGljeS5rZXlGbiB8fCB0aGlzLmNvbmZpZy5kYXRhSWRGcm9tT2JqZWN0O1xuICAgICAgICB3aGlsZSAoa2V5Rm4pIHtcbiAgICAgICAgICAgIHZhciBzcGVjaWZpZXJPcklkID0ga2V5Rm4ob2JqZWN0LCBjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNwZWNpZmllck9ySWQpKSB7XG4gICAgICAgICAgICAgICAga2V5Rm4gPSBrZXlGaWVsZHNGbkZyb21TcGVjaWZpZXIoc3BlY2lmaWVyT3JJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZCA9IHNwZWNpZmllck9ySWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWQgPSBpZCA/IFN0cmluZyhpZCkgOiB2b2lkIDA7XG4gICAgICAgIHJldHVybiBjb250ZXh0LmtleU9iamVjdCA/IFtpZCwgY29udGV4dC5rZXlPYmplY3RdIDogW2lkXTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5hZGRUeXBlUG9saWNpZXMgPSBmdW5jdGlvbiAodHlwZVBvbGljaWVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIE9iamVjdC5rZXlzKHR5cGVQb2xpY2llcykuZm9yRWFjaChmdW5jdGlvbiAodHlwZW5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHR5cGVQb2xpY2llc1t0eXBlbmFtZV0sIHF1ZXJ5VHlwZSA9IF9hLnF1ZXJ5VHlwZSwgbXV0YXRpb25UeXBlID0gX2EubXV0YXRpb25UeXBlLCBzdWJzY3JpcHRpb25UeXBlID0gX2Euc3Vic2NyaXB0aW9uVHlwZSwgaW5jb21pbmcgPSB0c2xpYi5fX3Jlc3QoX2EsIFtcInF1ZXJ5VHlwZVwiLCBcIm11dGF0aW9uVHlwZVwiLCBcInN1YnNjcmlwdGlvblR5cGVcIl0pO1xuICAgICAgICAgICAgaWYgKHF1ZXJ5VHlwZSlcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRSb290VHlwZW5hbWUoXCJRdWVyeVwiLCB0eXBlbmFtZSk7XG4gICAgICAgICAgICBpZiAobXV0YXRpb25UeXBlKVxuICAgICAgICAgICAgICAgIF90aGlzLnNldFJvb3RUeXBlbmFtZShcIk11dGF0aW9uXCIsIHR5cGVuYW1lKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb25UeXBlKVxuICAgICAgICAgICAgICAgIF90aGlzLnNldFJvb3RUeXBlbmFtZShcIlN1YnNjcmlwdGlvblwiLCB0eXBlbmFtZSk7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoX3RoaXMudG9CZUFkZGVkLCB0eXBlbmFtZSkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50b0JlQWRkZWRbdHlwZW5hbWVdLnB1c2goaW5jb21pbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudG9CZUFkZGVkW3R5cGVuYW1lXSA9IFtpbmNvbWluZ107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLnVwZGF0ZVR5cGVQb2xpY3kgPSBmdW5jdGlvbiAodHlwZW5hbWUsIGluY29taW5nKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBleGlzdGluZyA9IHRoaXMuZ2V0VHlwZVBvbGljeSh0eXBlbmFtZSk7XG4gICAgICAgIHZhciBrZXlGaWVsZHMgPSBpbmNvbWluZy5rZXlGaWVsZHMsIGZpZWxkcyA9IGluY29taW5nLmZpZWxkcztcbiAgICAgICAgZnVuY3Rpb24gc2V0TWVyZ2UoZXhpc3RpbmcsIG1lcmdlKSB7XG4gICAgICAgICAgICBleGlzdGluZy5tZXJnZSA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIG1lcmdlID09PSBcImZ1bmN0aW9uXCIgPyBtZXJnZSA6XG4gICAgICAgICAgICAgICAgICAgIG1lcmdlID09PSB0cnVlID8gbWVyZ2VUcnVlRm4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2UgPT09IGZhbHNlID8gbWVyZ2VGYWxzZUZuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5tZXJnZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRNZXJnZShleGlzdGluZywgaW5jb21pbmcubWVyZ2UpO1xuICAgICAgICBleGlzdGluZy5rZXlGbiA9XG4gICAgICAgICAgICBrZXlGaWVsZHMgPT09IGZhbHNlID8gbnVsbEtleUZpZWxkc0ZuIDpcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGtleUZpZWxkcykgPyBrZXlGaWVsZHNGbkZyb21TcGVjaWZpZXIoa2V5RmllbGRzKSA6XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBrZXlGaWVsZHMgPT09IFwiZnVuY3Rpb25cIiA/IGtleUZpZWxkcyA6XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5rZXlGbjtcbiAgICAgICAgaWYgKGZpZWxkcykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmcgPSBfdGhpcy5nZXRGaWVsZFBvbGljeSh0eXBlbmFtZSwgZmllbGROYW1lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5jb21pbmcgPSBmaWVsZHNbZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluY29taW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcucmVhZCA9IGluY29taW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleUFyZ3MgPSBpbmNvbWluZy5rZXlBcmdzLCByZWFkID0gaW5jb21pbmcucmVhZCwgbWVyZ2UgPSBpbmNvbWluZy5tZXJnZTtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcua2V5Rm4gPVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5QXJncyA9PT0gZmFsc2UgPyBzaW1wbGVLZXlBcmdzRm4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoa2V5QXJncykgPyBrZXlBcmdzRm5Gcm9tU3BlY2lmaWVyKGtleUFyZ3MpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGtleUFyZ3MgPT09IFwiZnVuY3Rpb25cIiA/IGtleUFyZ3MgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcua2V5Rm47XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVhZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5yZWFkID0gcmVhZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRNZXJnZShleGlzdGluZywgbWVyZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmcucmVhZCAmJiBleGlzdGluZy5tZXJnZSkge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5rZXlGbiA9IGV4aXN0aW5nLmtleUZuIHx8IHNpbXBsZUtleUFyZ3NGbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLnNldFJvb3RUeXBlbmFtZSA9IGZ1bmN0aW9uICh3aGljaCwgdHlwZW5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVuYW1lID09PSB2b2lkIDApIHsgdHlwZW5hbWUgPSB3aGljaDsgfVxuICAgICAgICB2YXIgcm9vdElkID0gXCJST09UX1wiICsgd2hpY2gudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdmFyIG9sZCA9IHRoaXMucm9vdFR5cGVuYW1lc0J5SWRbcm9vdElkXTtcbiAgICAgICAgaWYgKHR5cGVuYW1lICE9PSBvbGQpIHtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghb2xkIHx8IG9sZCA9PT0gd2hpY2gsIFwiQ2Fubm90IGNoYW5nZSByb290IFwiLmNvbmNhdCh3aGljaCwgXCIgX190eXBlbmFtZSBtb3JlIHRoYW4gb25jZVwiKSkgOiBnbG9iYWxzLmludmFyaWFudCghb2xkIHx8IG9sZCA9PT0gd2hpY2gsIDMpO1xuICAgICAgICAgICAgaWYgKG9sZClcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5yb290SWRzQnlUeXBlbmFtZVtvbGRdO1xuICAgICAgICAgICAgdGhpcy5yb290SWRzQnlUeXBlbmFtZVt0eXBlbmFtZV0gPSByb290SWQ7XG4gICAgICAgICAgICB0aGlzLnJvb3RUeXBlbmFtZXNCeUlkW3Jvb3RJZF0gPSB0eXBlbmFtZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmFkZFBvc3NpYmxlVHlwZXMgPSBmdW5jdGlvbiAocG9zc2libGVUeXBlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnVzaW5nUG9zc2libGVUeXBlcyA9IHRydWU7XG4gICAgICAgIE9iamVjdC5rZXlzKHBvc3NpYmxlVHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKHN1cGVydHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuZ2V0U3VwZXJ0eXBlU2V0KHN1cGVydHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgICBwb3NzaWJsZVR5cGVzW3N1cGVydHlwZV0uZm9yRWFjaChmdW5jdGlvbiAoc3VidHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmdldFN1cGVydHlwZVNldChzdWJ0eXBlLCB0cnVlKS5hZGQoc3VwZXJ0eXBlKTtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBzdWJ0eXBlLm1hdGNoKFR5cGVPckZpZWxkTmFtZVJlZ0V4cCk7XG4gICAgICAgICAgICAgICAgaWYgKCFtYXRjaCB8fCBtYXRjaFswXSAhPT0gc3VidHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5mdXp6eVN1YnR5cGVzLnNldChzdWJ0eXBlLCBuZXcgUmVnRXhwKHN1YnR5cGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZ2V0VHlwZVBvbGljeSA9IGZ1bmN0aW9uICh0eXBlbmFtZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIWhhc093bi5jYWxsKHRoaXMudHlwZVBvbGljaWVzLCB0eXBlbmFtZSkpIHtcbiAgICAgICAgICAgIHZhciBwb2xpY3lfMSA9IHRoaXMudHlwZVBvbGljaWVzW3R5cGVuYW1lXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICBwb2xpY3lfMS5maWVsZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgdmFyIHN1cGVydHlwZXMgPSB0aGlzLnN1cGVydHlwZU1hcC5nZXQodHlwZW5hbWUpO1xuICAgICAgICAgICAgaWYgKHN1cGVydHlwZXMgJiYgc3VwZXJ0eXBlcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgc3VwZXJ0eXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdXBlcnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMuZ2V0VHlwZVBvbGljeShzdXBlcnR5cGUpLCBmaWVsZHMgPSBfYS5maWVsZHMsIHJlc3QgPSB0c2xpYi5fX3Jlc3QoX2EsIFtcImZpZWxkc1wiXSk7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocG9saWN5XzEsIHJlc3QpO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHBvbGljeV8xLmZpZWxkcywgZmllbGRzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5ib3ggPSB0aGlzLnRvQmVBZGRlZFt0eXBlbmFtZV07XG4gICAgICAgIGlmIChpbmJveCAmJiBpbmJveC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGluYm94LnNwbGljZSgwKS5mb3JFYWNoKGZ1bmN0aW9uIChwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVUeXBlUG9saWN5KHR5cGVuYW1lLCBwb2xpY3kpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZVBvbGljaWVzW3R5cGVuYW1lXTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRGaWVsZFBvbGljeSA9IGZ1bmN0aW9uICh0eXBlbmFtZSwgZmllbGROYW1lLCBjcmVhdGVJZk1pc3NpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVuYW1lKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRQb2xpY2llcyA9IHRoaXMuZ2V0VHlwZVBvbGljeSh0eXBlbmFtZSkuZmllbGRzO1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkUG9saWNpZXNbZmllbGROYW1lXSB8fCAoY3JlYXRlSWZNaXNzaW5nICYmIChmaWVsZFBvbGljaWVzW2ZpZWxkTmFtZV0gPSBPYmplY3QuY3JlYXRlKG51bGwpKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRTdXBlcnR5cGVTZXQgPSBmdW5jdGlvbiAoc3VidHlwZSwgY3JlYXRlSWZNaXNzaW5nKSB7XG4gICAgICAgIHZhciBzdXBlcnR5cGVTZXQgPSB0aGlzLnN1cGVydHlwZU1hcC5nZXQoc3VidHlwZSk7XG4gICAgICAgIGlmICghc3VwZXJ0eXBlU2V0ICYmIGNyZWF0ZUlmTWlzc2luZykge1xuICAgICAgICAgICAgdGhpcy5zdXBlcnR5cGVNYXAuc2V0KHN1YnR5cGUsIHN1cGVydHlwZVNldCA9IG5ldyBTZXQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVydHlwZVNldDtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5mcmFnbWVudE1hdGNoZXMgPSBmdW5jdGlvbiAoZnJhZ21lbnQsIHR5cGVuYW1lLCByZXN1bHQsIHZhcmlhYmxlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIWZyYWdtZW50LnR5cGVDb25kaXRpb24pXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKCF0eXBlbmFtZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHN1cGVydHlwZSA9IGZyYWdtZW50LnR5cGVDb25kaXRpb24ubmFtZS52YWx1ZTtcbiAgICAgICAgaWYgKHR5cGVuYW1lID09PSBzdXBlcnR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMudXNpbmdQb3NzaWJsZVR5cGVzICYmXG4gICAgICAgICAgICB0aGlzLnN1cGVydHlwZU1hcC5oYXMoc3VwZXJ0eXBlKSkge1xuICAgICAgICAgICAgdmFyIHR5cGVuYW1lU3VwZXJ0eXBlU2V0ID0gdGhpcy5nZXRTdXBlcnR5cGVTZXQodHlwZW5hbWUsIHRydWUpO1xuICAgICAgICAgICAgdmFyIHdvcmtRdWV1ZV8xID0gW3R5cGVuYW1lU3VwZXJ0eXBlU2V0XTtcbiAgICAgICAgICAgIHZhciBtYXliZUVucXVldWVfMSA9IGZ1bmN0aW9uIChzdWJ0eXBlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1cGVydHlwZVNldCA9IF90aGlzLmdldFN1cGVydHlwZVNldChzdWJ0eXBlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydHlwZVNldCAmJlxuICAgICAgICAgICAgICAgICAgICBzdXBlcnR5cGVTZXQuc2l6ZSAmJlxuICAgICAgICAgICAgICAgICAgICB3b3JrUXVldWVfMS5pbmRleE9mKHN1cGVydHlwZVNldCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtRdWV1ZV8xLnB1c2goc3VwZXJ0eXBlU2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG5lZWRUb0NoZWNrRnV6enlTdWJ0eXBlcyA9ICEhKHJlc3VsdCAmJiB0aGlzLmZ1enp5U3VidHlwZXMuc2l6ZSk7XG4gICAgICAgICAgICB2YXIgY2hlY2tpbmdGdXp6eVN1YnR5cGVzID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmtRdWV1ZV8xLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1cGVydHlwZVNldCA9IHdvcmtRdWV1ZV8xW2ldO1xuICAgICAgICAgICAgICAgIGlmIChzdXBlcnR5cGVTZXQuaGFzKHN1cGVydHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0eXBlbmFtZVN1cGVydHlwZVNldC5oYXMoc3VwZXJ0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNraW5nRnV6enlTdWJ0eXBlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIkluZmVycmluZyBzdWJ0eXBlIFwiLmNvbmNhdCh0eXBlbmFtZSwgXCIgb2Ygc3VwZXJ0eXBlIFwiKS5jb25jYXQoc3VwZXJ0eXBlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlbmFtZVN1cGVydHlwZVNldC5hZGQoc3VwZXJ0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3VwZXJ0eXBlU2V0LmZvckVhY2gobWF5YmVFbnF1ZXVlXzEpO1xuICAgICAgICAgICAgICAgIGlmIChuZWVkVG9DaGVja0Z1enp5U3VidHlwZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgaSA9PT0gd29ya1F1ZXVlXzEubGVuZ3RoIC0gMSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXRNYXRjaGVzUmVzdWx0KGZyYWdtZW50LnNlbGVjdGlvblNldCwgcmVzdWx0LCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5lZWRUb0NoZWNrRnV6enlTdWJ0eXBlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2luZ0Z1enp5U3VidHlwZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1enp5U3VidHlwZXMuZm9yRWFjaChmdW5jdGlvbiAocmVnRXhwLCBmdXp6eVN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gdHlwZW5hbWUubWF0Y2gocmVnRXhwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFswXSA9PT0gdHlwZW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXliZUVucXVldWVfMShmdXp6eVN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuaGFzS2V5QXJncyA9IGZ1bmN0aW9uICh0eXBlbmFtZSwgZmllbGROYW1lKSB7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0aGlzLmdldEZpZWxkUG9saWN5KHR5cGVuYW1lLCBmaWVsZE5hbWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuICEhKHBvbGljeSAmJiBwb2xpY3kua2V5Rm4pO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldFN0b3JlRmllbGROYW1lID0gZnVuY3Rpb24gKGZpZWxkU3BlYykge1xuICAgICAgICB2YXIgdHlwZW5hbWUgPSBmaWVsZFNwZWMudHlwZW5hbWUsIGZpZWxkTmFtZSA9IGZpZWxkU3BlYy5maWVsZE5hbWU7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0aGlzLmdldEZpZWxkUG9saWN5KHR5cGVuYW1lLCBmaWVsZE5hbWUsIGZhbHNlKTtcbiAgICAgICAgdmFyIHN0b3JlRmllbGROYW1lO1xuICAgICAgICB2YXIga2V5Rm4gPSBwb2xpY3kgJiYgcG9saWN5LmtleUZuO1xuICAgICAgICBpZiAoa2V5Rm4gJiYgdHlwZW5hbWUpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIHR5cGVuYW1lOiB0eXBlbmFtZSxcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZSxcbiAgICAgICAgICAgICAgICBmaWVsZDogZmllbGRTcGVjLmZpZWxkIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBmaWVsZFNwZWMudmFyaWFibGVzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBhcmdzID0gYXJnc0Zyb21GaWVsZFNwZWNpZmllcihmaWVsZFNwZWMpO1xuICAgICAgICAgICAgd2hpbGUgKGtleUZuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNwZWNpZmllck9yU3RyaW5nID0ga2V5Rm4oYXJncywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3BlY2lmaWVyT3JTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleUZuID0ga2V5QXJnc0ZuRnJvbVNwZWNpZmllcihzcGVjaWZpZXJPclN0cmluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZUZpZWxkTmFtZSA9IHNwZWNpZmllck9yU3RyaW5nIHx8IGZpZWxkTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdG9yZUZpZWxkTmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBzdG9yZUZpZWxkTmFtZSA9IGZpZWxkU3BlYy5maWVsZFxuICAgICAgICAgICAgICAgID8gdXRpbGl0aWVzLnN0b3JlS2V5TmFtZUZyb21GaWVsZChmaWVsZFNwZWMuZmllbGQsIGZpZWxkU3BlYy52YXJpYWJsZXMpXG4gICAgICAgICAgICAgICAgOiB1dGlsaXRpZXMuZ2V0U3RvcmVLZXlOYW1lKGZpZWxkTmFtZSwgYXJnc0Zyb21GaWVsZFNwZWNpZmllcihmaWVsZFNwZWMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RvcmVGaWVsZE5hbWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGROYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZE5hbWUgPT09IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpXG4gICAgICAgICAgICA/IHN0b3JlRmllbGROYW1lXG4gICAgICAgICAgICA6IGZpZWxkTmFtZSArIFwiOlwiICsgc3RvcmVGaWVsZE5hbWU7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUucmVhZEZpZWxkID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIG9iamVjdE9yUmVmZXJlbmNlID0gb3B0aW9ucy5mcm9tO1xuICAgICAgICBpZiAoIW9iamVjdE9yUmVmZXJlbmNlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgbmFtZU9yRmllbGQgPSBvcHRpb25zLmZpZWxkIHx8IG9wdGlvbnMuZmllbGROYW1lO1xuICAgICAgICBpZiAoIW5hbWVPckZpZWxkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAob3B0aW9ucy50eXBlbmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB2YXIgdHlwZW5hbWUgPSBjb250ZXh0LnN0b3JlLmdldEZpZWxkVmFsdWUob2JqZWN0T3JSZWZlcmVuY2UsIFwiX190eXBlbmFtZVwiKTtcbiAgICAgICAgICAgIGlmICh0eXBlbmFtZSlcbiAgICAgICAgICAgICAgICBvcHRpb25zLnR5cGVuYW1lID0gdHlwZW5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0b3JlRmllbGROYW1lID0gdGhpcy5nZXRTdG9yZUZpZWxkTmFtZShvcHRpb25zKTtcbiAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSBjb250ZXh0LnN0b3JlLmdldEZpZWxkVmFsdWUob2JqZWN0T3JSZWZlcmVuY2UsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgdmFyIHBvbGljeSA9IHRoaXMuZ2V0RmllbGRQb2xpY3kob3B0aW9ucy50eXBlbmFtZSwgZmllbGROYW1lLCBmYWxzZSk7XG4gICAgICAgIHZhciByZWFkID0gcG9saWN5ICYmIHBvbGljeS5yZWFkO1xuICAgICAgICBpZiAocmVhZCkge1xuICAgICAgICAgICAgdmFyIHJlYWRPcHRpb25zID0gbWFrZUZpZWxkRnVuY3Rpb25PcHRpb25zKHRoaXMsIG9iamVjdE9yUmVmZXJlbmNlLCBvcHRpb25zLCBjb250ZXh0LCBjb250ZXh0LnN0b3JlLmdldFN0b3JhZ2UodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdE9yUmVmZXJlbmNlKVxuICAgICAgICAgICAgICAgID8gb2JqZWN0T3JSZWZlcmVuY2UuX19yZWZcbiAgICAgICAgICAgICAgICA6IG9iamVjdE9yUmVmZXJlbmNlLCBzdG9yZUZpZWxkTmFtZSkpO1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlU2xvdC53aXRoVmFsdWUodGhpcy5jYWNoZSwgcmVhZCwgW2V4aXN0aW5nLCByZWFkT3B0aW9uc10pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleGlzdGluZztcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRSZWFkRnVuY3Rpb24gPSBmdW5jdGlvbiAodHlwZW5hbWUsIGZpZWxkTmFtZSkge1xuICAgICAgICB2YXIgcG9saWN5ID0gdGhpcy5nZXRGaWVsZFBvbGljeSh0eXBlbmFtZSwgZmllbGROYW1lLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBwb2xpY3kgJiYgcG9saWN5LnJlYWQ7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZ2V0TWVyZ2VGdW5jdGlvbiA9IGZ1bmN0aW9uIChwYXJlbnRUeXBlbmFtZSwgZmllbGROYW1lLCBjaGlsZFR5cGVuYW1lKSB7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0aGlzLmdldEZpZWxkUG9saWN5KHBhcmVudFR5cGVuYW1lLCBmaWVsZE5hbWUsIGZhbHNlKTtcbiAgICAgICAgdmFyIG1lcmdlID0gcG9saWN5ICYmIHBvbGljeS5tZXJnZTtcbiAgICAgICAgaWYgKCFtZXJnZSAmJiBjaGlsZFR5cGVuYW1lKSB7XG4gICAgICAgICAgICBwb2xpY3kgPSB0aGlzLmdldFR5cGVQb2xpY3koY2hpbGRUeXBlbmFtZSk7XG4gICAgICAgICAgICBtZXJnZSA9IHBvbGljeSAmJiBwb2xpY3kubWVyZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lcmdlO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLnJ1bk1lcmdlRnVuY3Rpb24gPSBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nLCBfYSwgY29udGV4dCwgc3RvcmFnZSkge1xuICAgICAgICB2YXIgZmllbGQgPSBfYS5maWVsZCwgdHlwZW5hbWUgPSBfYS50eXBlbmFtZSwgbWVyZ2UgPSBfYS5tZXJnZTtcbiAgICAgICAgaWYgKG1lcmdlID09PSBtZXJnZVRydWVGbikge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VNZXJnZU9iamVjdHNGdW5jdGlvbihjb250ZXh0LnN0b3JlKShleGlzdGluZywgaW5jb21pbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXJnZSA9PT0gbWVyZ2VGYWxzZUZuKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQub3ZlcndyaXRlKSB7XG4gICAgICAgICAgICBleGlzdGluZyA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLCBtYWtlRmllbGRGdW5jdGlvbk9wdGlvbnModGhpcywgdm9pZCAwLCB7IHR5cGVuYW1lOiB0eXBlbmFtZSwgZmllbGROYW1lOiBmaWVsZC5uYW1lLnZhbHVlLCBmaWVsZDogZmllbGQsIHZhcmlhYmxlczogY29udGV4dC52YXJpYWJsZXMgfSwgY29udGV4dCwgc3RvcmFnZSB8fCBPYmplY3QuY3JlYXRlKG51bGwpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gUG9saWNpZXM7XG59KCkpO1xuZnVuY3Rpb24gbWFrZUZpZWxkRnVuY3Rpb25PcHRpb25zKHBvbGljaWVzLCBvYmplY3RPclJlZmVyZW5jZSwgZmllbGRTcGVjLCBjb250ZXh0LCBzdG9yYWdlKSB7XG4gICAgdmFyIHN0b3JlRmllbGROYW1lID0gcG9saWNpZXMuZ2V0U3RvcmVGaWVsZE5hbWUoZmllbGRTcGVjKTtcbiAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgdmFyIHZhcmlhYmxlcyA9IGZpZWxkU3BlYy52YXJpYWJsZXMgfHwgY29udGV4dC52YXJpYWJsZXM7XG4gICAgdmFyIF9hID0gY29udGV4dC5zdG9yZSwgdG9SZWZlcmVuY2UgPSBfYS50b1JlZmVyZW5jZSwgY2FuUmVhZCA9IF9hLmNhblJlYWQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXJnczogYXJnc0Zyb21GaWVsZFNwZWNpZmllcihmaWVsZFNwZWMpLFxuICAgICAgICBmaWVsZDogZmllbGRTcGVjLmZpZWxkIHx8IG51bGwsXG4gICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lLFxuICAgICAgICBzdG9yZUZpZWxkTmFtZTogc3RvcmVGaWVsZE5hbWUsXG4gICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICBpc1JlZmVyZW5jZTogdXRpbGl0aWVzLmlzUmVmZXJlbmNlLFxuICAgICAgICB0b1JlZmVyZW5jZTogdG9SZWZlcmVuY2UsXG4gICAgICAgIHN0b3JhZ2U6IHN0b3JhZ2UsXG4gICAgICAgIGNhY2hlOiBwb2xpY2llcy5jYWNoZSxcbiAgICAgICAgY2FuUmVhZDogY2FuUmVhZCxcbiAgICAgICAgcmVhZEZpZWxkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9saWNpZXMucmVhZEZpZWxkKG5vcm1hbGl6ZVJlYWRGaWVsZE9wdGlvbnMoYXJndW1lbnRzLCBvYmplY3RPclJlZmVyZW5jZSwgY29udGV4dCksIGNvbnRleHQpO1xuICAgICAgICB9LFxuICAgICAgICBtZXJnZU9iamVjdHM6IG1ha2VNZXJnZU9iamVjdHNGdW5jdGlvbihjb250ZXh0LnN0b3JlKSxcbiAgICB9O1xufVxuZnVuY3Rpb24gbm9ybWFsaXplUmVhZEZpZWxkT3B0aW9ucyhyZWFkRmllbGRBcmdzLCBvYmplY3RPclJlZmVyZW5jZSwgdmFyaWFibGVzKSB7XG4gICAgdmFyIGZpZWxkTmFtZU9yT3B0aW9ucyA9IHJlYWRGaWVsZEFyZ3NbMF0sIGZyb20gPSByZWFkRmllbGRBcmdzWzFdLCBhcmdjID0gcmVhZEZpZWxkQXJncy5sZW5ndGg7XG4gICAgdmFyIG9wdGlvbnM7XG4gICAgaWYgKHR5cGVvZiBmaWVsZE5hbWVPck9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lT3JPcHRpb25zLFxuICAgICAgICAgICAgZnJvbTogYXJnYyA+IDEgPyBmcm9tIDogb2JqZWN0T3JSZWZlcmVuY2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdHNsaWIuX19hc3NpZ24oe30sIGZpZWxkTmFtZU9yT3B0aW9ucyk7XG4gICAgICAgIGlmICghaGFzT3duLmNhbGwob3B0aW9ucywgXCJmcm9tXCIpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZyb20gPSBvYmplY3RPclJlZmVyZW5jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoX19ERVZfXyAmJiBvcHRpb25zLmZyb20gPT09IHZvaWQgMCkge1xuICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJVbmRlZmluZWQgJ2Zyb20nIHBhc3NlZCB0byByZWFkRmllbGQgd2l0aCBhcmd1bWVudHMgXCIuY29uY2F0KHV0aWxpdGllcy5zdHJpbmdpZnlGb3JEaXNwbGF5KEFycmF5LmZyb20ocmVhZEZpZWxkQXJncykpKSk7XG4gICAgfVxuICAgIGlmICh2b2lkIDAgPT09IG9wdGlvbnMudmFyaWFibGVzKSB7XG4gICAgICAgIG9wdGlvbnMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbn1cbmZ1bmN0aW9uIG1ha2VNZXJnZU9iamVjdHNGdW5jdGlvbihzdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZU9iamVjdHMoZXhpc3RpbmcsIGluY29taW5nKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4aXN0aW5nKSB8fCBBcnJheS5pc0FycmF5KGluY29taW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiQ2Fubm90IGF1dG9tYXRpY2FsbHkgbWVyZ2UgYXJyYXlzXCIpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoNCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QoZXhpc3RpbmcpICYmXG4gICAgICAgICAgICB1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KGluY29taW5nKSkge1xuICAgICAgICAgICAgdmFyIGVUeXBlID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShleGlzdGluZywgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICAgICAgdmFyIGlUeXBlID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShpbmNvbWluZywgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICAgICAgdmFyIHR5cGVzRGlmZmVyID0gZVR5cGUgJiYgaVR5cGUgJiYgZVR5cGUgIT09IGlUeXBlO1xuICAgICAgICAgICAgaWYgKHR5cGVzRGlmZmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShleGlzdGluZykgJiZcbiAgICAgICAgICAgICAgICBzdG9yZVZhbHVlSXNTdG9yZU9iamVjdChpbmNvbWluZykpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5tZXJnZShleGlzdGluZy5fX3JlZiwgaW5jb21pbmcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdG9yZVZhbHVlSXNTdG9yZU9iamVjdChleGlzdGluZykgJiZcbiAgICAgICAgICAgICAgICB1dGlsaXRpZXMuaXNSZWZlcmVuY2UoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUubWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLl9fcmVmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QoZXhpc3RpbmcpICYmXG4gICAgICAgICAgICAgICAgc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBleGlzdGluZyksIGluY29taW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dEZsYXZvcihjb250ZXh0LCBjbGllbnRPbmx5LCBkZWZlcnJlZCkge1xuICAgIHZhciBrZXkgPSBcIlwiLmNvbmNhdChjbGllbnRPbmx5KS5jb25jYXQoZGVmZXJyZWQpO1xuICAgIHZhciBmbGF2b3JlZCA9IGNvbnRleHQuZmxhdm9ycy5nZXQoa2V5KTtcbiAgICBpZiAoIWZsYXZvcmVkKSB7XG4gICAgICAgIGNvbnRleHQuZmxhdm9ycy5zZXQoa2V5LCBmbGF2b3JlZCA9IChjb250ZXh0LmNsaWVudE9ubHkgPT09IGNsaWVudE9ubHkgJiZcbiAgICAgICAgICAgIGNvbnRleHQuZGVmZXJyZWQgPT09IGRlZmVycmVkKSA/IGNvbnRleHQgOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIHsgY2xpZW50T25seTogY2xpZW50T25seSwgZGVmZXJyZWQ6IGRlZmVycmVkIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGZsYXZvcmVkO1xufVxudmFyIFN0b3JlV3JpdGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdG9yZVdyaXRlcihjYWNoZSwgcmVhZGVyKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgICAgICAgdGhpcy5yZWFkZXIgPSByZWFkZXI7XG4gICAgfVxuICAgIFN0b3JlV3JpdGVyLnByb3RvdHlwZS53cml0ZVRvU3RvcmUgPSBmdW5jdGlvbiAoc3RvcmUsIF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBxdWVyeSA9IF9hLnF1ZXJ5LCByZXN1bHQgPSBfYS5yZXN1bHQsIGRhdGFJZCA9IF9hLmRhdGFJZCwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBvdmVyd3JpdGUgPSBfYS5vdmVyd3JpdGU7XG4gICAgICAgIHZhciBvcGVyYXRpb25EZWZpbml0aW9uID0gdXRpbGl0aWVzLmdldE9wZXJhdGlvbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICB2YXIgbWVyZ2VyID0gbWFrZVByb2Nlc3NlZEZpZWxkc01lcmdlcigpO1xuICAgICAgICB2YXJpYWJsZXMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdXRpbGl0aWVzLmdldERlZmF1bHRWYWx1ZXMob3BlcmF0aW9uRGVmaW5pdGlvbikpLCB2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHN0b3JlOiBzdG9yZSxcbiAgICAgICAgICAgIHdyaXR0ZW46IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBtZXJnZTogZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXJnZXIubWVyZ2UoZXhpc3RpbmcsIGluY29taW5nKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgIHZhclN0cmluZzogY2Fub25pY2FsU3RyaW5naWZ5KHZhcmlhYmxlcyksXG4gICAgICAgICAgICBmcmFnbWVudE1hcDogdXRpbGl0aWVzLmNyZWF0ZUZyYWdtZW50TWFwKHV0aWxpdGllcy5nZXRGcmFnbWVudERlZmluaXRpb25zKHF1ZXJ5KSksXG4gICAgICAgICAgICBvdmVyd3JpdGU6ICEhb3ZlcndyaXRlLFxuICAgICAgICAgICAgaW5jb21pbmdCeUlkOiBuZXcgTWFwLFxuICAgICAgICAgICAgY2xpZW50T25seTogZmFsc2UsXG4gICAgICAgICAgICBkZWZlcnJlZDogZmFsc2UsXG4gICAgICAgICAgICBmbGF2b3JzOiBuZXcgTWFwLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVmID0gdGhpcy5wcm9jZXNzU2VsZWN0aW9uU2V0KHtcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0IHx8IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBkYXRhSWQ6IGRhdGFJZCxcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDogb3BlcmF0aW9uRGVmaW5pdGlvbi5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICBtZXJnZVRyZWU6IHsgbWFwOiBuZXcgTWFwIH0sXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNSZWZlcmVuY2UocmVmKSkge1xuICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiQ291bGQgbm90IGlkZW50aWZ5IG9iamVjdCBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoNik7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5pbmNvbWluZ0J5SWQuZm9yRWFjaChmdW5jdGlvbiAoX2EsIGRhdGFJZCkge1xuICAgICAgICAgICAgdmFyIHN0b3JlT2JqZWN0ID0gX2Euc3RvcmVPYmplY3QsIG1lcmdlVHJlZSA9IF9hLm1lcmdlVHJlZSwgZmllbGROb2RlU2V0ID0gX2EuZmllbGROb2RlU2V0O1xuICAgICAgICAgICAgdmFyIGVudGl0eVJlZiA9IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlKGRhdGFJZCk7XG4gICAgICAgICAgICBpZiAobWVyZ2VUcmVlICYmIG1lcmdlVHJlZS5tYXAuc2l6ZSkge1xuICAgICAgICAgICAgICAgIHZhciBhcHBsaWVkID0gX3RoaXMuYXBwbHlNZXJnZXMobWVyZ2VUcmVlLCBlbnRpdHlSZWYsIHN0b3JlT2JqZWN0LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKGFwcGxpZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RvcmVPYmplY3QgPSBhcHBsaWVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fREVWX18gJiYgIWNvbnRleHQub3ZlcndyaXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkc1dpdGhTZWxlY3Rpb25TZXRzXzEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgICAgIGZpZWxkTm9kZVNldC5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNXaXRoU2VsZWN0aW9uU2V0c18xW2ZpZWxkLm5hbWUudmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBoYXNTZWxlY3Rpb25TZXRfMSA9IGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmllbGRzV2l0aFNlbGVjdGlvblNldHNfMVtmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKV0gPT09IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzTWVyZ2VGdW5jdGlvbl8xID0gZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZFRyZWUgPSBtZXJnZVRyZWUgJiYgbWVyZ2VUcmVlLm1hcC5nZXQoc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQm9vbGVhbihjaGlsZFRyZWUgJiYgY2hpbGRUcmVlLmluZm8gJiYgY2hpbGRUcmVlLmluZm8ubWVyZ2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RvcmVPYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNTZWxlY3Rpb25TZXRfMShzdG9yZUZpZWxkTmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFoYXNNZXJnZUZ1bmN0aW9uXzEoc3RvcmVGaWVsZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuQWJvdXREYXRhTG9zcyhlbnRpdHlSZWYsIHN0b3JlT2JqZWN0LCBzdG9yZUZpZWxkTmFtZSwgY29udGV4dC5zdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0b3JlLm1lcmdlKGRhdGFJZCwgc3RvcmVPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3RvcmUucmV0YWluKHJlZi5fX3JlZik7XG4gICAgICAgIHJldHVybiByZWY7XG4gICAgfTtcbiAgICBTdG9yZVdyaXRlci5wcm90b3R5cGUucHJvY2Vzc1NlbGVjdGlvblNldCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGF0YUlkID0gX2EuZGF0YUlkLCByZXN1bHQgPSBfYS5yZXN1bHQsIHNlbGVjdGlvblNldCA9IF9hLnNlbGVjdGlvblNldCwgY29udGV4dCA9IF9hLmNvbnRleHQsIG1lcmdlVHJlZSA9IF9hLm1lcmdlVHJlZTtcbiAgICAgICAgdmFyIHBvbGljaWVzID0gdGhpcy5jYWNoZS5wb2xpY2llcztcbiAgICAgICAgdmFyIGluY29taW5nID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIHR5cGVuYW1lID0gKGRhdGFJZCAmJiBwb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZFtkYXRhSWRdKSB8fFxuICAgICAgICAgICAgdXRpbGl0aWVzLmdldFR5cGVuYW1lRnJvbVJlc3VsdChyZXN1bHQsIHNlbGVjdGlvblNldCwgY29udGV4dC5mcmFnbWVudE1hcCkgfHxcbiAgICAgICAgICAgIChkYXRhSWQgJiYgY29udGV4dC5zdG9yZS5nZXQoZGF0YUlkLCBcIl9fdHlwZW5hbWVcIikpO1xuICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHR5cGVuYW1lKSB7XG4gICAgICAgICAgICBpbmNvbWluZy5fX3R5cGVuYW1lID0gdHlwZW5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlYWRGaWVsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gbm9ybWFsaXplUmVhZEZpZWxkT3B0aW9ucyhhcmd1bWVudHMsIGluY29taW5nLCBjb250ZXh0LnZhcmlhYmxlcyk7XG4gICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9wdGlvbnMuZnJvbSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IGNvbnRleHQuaW5jb21pbmdCeUlkLmdldChvcHRpb25zLmZyb20uX19yZWYpO1xuICAgICAgICAgICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRfMSA9IHBvbGljaWVzLnJlYWRGaWVsZCh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZnJvbTogaW5mby5zdG9yZU9iamVjdCB9KSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRfMSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XzE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcG9saWNpZXMucmVhZEZpZWxkKG9wdGlvbnMsIGNvbnRleHQpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZmllbGROb2RlU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmZsYXR0ZW5GaWVsZHMoc2VsZWN0aW9uU2V0LCByZXN1bHQsIGNvbnRleHQsIHR5cGVuYW1lKS5mb3JFYWNoKGZ1bmN0aW9uIChjb250ZXh0LCBmaWVsZCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdmFyIHJlc3VsdEZpZWxkS2V5ID0gdXRpbGl0aWVzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQoZmllbGQpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0W3Jlc3VsdEZpZWxkS2V5XTtcbiAgICAgICAgICAgIGZpZWxkTm9kZVNldC5hZGQoZmllbGQpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmVGaWVsZE5hbWUgPSBwb2xpY2llcy5nZXRTdG9yZUZpZWxkTmFtZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVuYW1lOiB0eXBlbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZC5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogY29udGV4dC52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkVHJlZSA9IGdldENoaWxkTWVyZ2VUcmVlKG1lcmdlVHJlZSwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBpbmNvbWluZ1ZhbHVlID0gX3RoaXMucHJvY2Vzc0ZpZWxkVmFsdWUodmFsdWUsIGZpZWxkLCBmaWVsZC5zZWxlY3Rpb25TZXRcbiAgICAgICAgICAgICAgICAgICAgPyBnZXRDb250ZXh0Rmxhdm9yKGNvbnRleHQsIGZhbHNlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgOiBjb250ZXh0LCBjaGlsZFRyZWUpO1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZFR5cGVuYW1lID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShpbmNvbWluZ1ZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QoaW5jb21pbmdWYWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHlwZW5hbWUgPSByZWFkRmllbGQoXCJfX3R5cGVuYW1lXCIsIGluY29taW5nVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbWVyZ2UgPSBwb2xpY2llcy5nZXRNZXJnZUZ1bmN0aW9uKHR5cGVuYW1lLCBmaWVsZC5uYW1lLnZhbHVlLCBjaGlsZFR5cGVuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobWVyZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmVlLmluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlbmFtZTogdHlwZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZTogbWVyZ2UsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXliZVJlY3ljbGVDaGlsZE1lcmdlVHJlZShtZXJnZVRyZWUsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5jb21pbmcgPSBjb250ZXh0Lm1lcmdlKGluY29taW5nLCAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgX2Fbc3RvcmVGaWVsZE5hbWVdID0gaW5jb21pbmdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgX2EpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9fREVWX18gJiZcbiAgICAgICAgICAgICAgICAhY29udGV4dC5jbGllbnRPbmx5ICYmXG4gICAgICAgICAgICAgICAgIWNvbnRleHQuZGVmZXJyZWQgJiZcbiAgICAgICAgICAgICAgICAhdXRpbGl0aWVzLmFkZFR5cGVuYW1lVG9Eb2N1bWVudC5hZGRlZChmaWVsZCkgJiZcbiAgICAgICAgICAgICAgICAhcG9saWNpZXMuZ2V0UmVhZEZ1bmN0aW9uKHR5cGVuYW1lLCBmaWVsZC5uYW1lLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQuZXJyb3IoXCJNaXNzaW5nIGZpZWxkICdcIi5jb25jYXQodXRpbGl0aWVzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQoZmllbGQpLCBcIicgd2hpbGUgd3JpdGluZyByZXN1bHQgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKS5zdWJzdHJpbmcoMCwgMTAwMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBfYiA9IHBvbGljaWVzLmlkZW50aWZ5KHJlc3VsdCwge1xuICAgICAgICAgICAgICAgIHR5cGVuYW1lOiB0eXBlbmFtZSxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHNlbGVjdGlvblNldCxcbiAgICAgICAgICAgICAgICBmcmFnbWVudE1hcDogY29udGV4dC5mcmFnbWVudE1hcCxcbiAgICAgICAgICAgICAgICBzdG9yZU9iamVjdDogaW5jb21pbmcsXG4gICAgICAgICAgICAgICAgcmVhZEZpZWxkOiByZWFkRmllbGQsXG4gICAgICAgICAgICB9KSwgaWQgPSBfYlswXSwga2V5T2JqZWN0ID0gX2JbMV07XG4gICAgICAgICAgICBkYXRhSWQgPSBkYXRhSWQgfHwgaWQ7XG4gICAgICAgICAgICBpZiAoa2V5T2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaW5jb21pbmcgPSBjb250ZXh0Lm1lcmdlKGluY29taW5nLCBrZXlPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoIWRhdGFJZClcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgZGF0YUlkKSB7XG4gICAgICAgICAgICB2YXIgZGF0YVJlZiA9IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlKGRhdGFJZCk7XG4gICAgICAgICAgICB2YXIgc2V0cyA9IGNvbnRleHQud3JpdHRlbltkYXRhSWRdIHx8IChjb250ZXh0LndyaXR0ZW5bZGF0YUlkXSA9IFtdKTtcbiAgICAgICAgICAgIGlmIChzZXRzLmluZGV4T2Yoc2VsZWN0aW9uU2V0KSA+PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhUmVmO1xuICAgICAgICAgICAgc2V0cy5wdXNoKHNlbGVjdGlvblNldCk7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkZXIgJiYgdGhpcy5yZWFkZXIuaXNGcmVzaChyZXN1bHQsIGRhdGFSZWYsIHNlbGVjdGlvblNldCwgY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVJlZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcmV2aW91c18xID0gY29udGV4dC5pbmNvbWluZ0J5SWQuZ2V0KGRhdGFJZCk7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNfMSkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzXzEuc3RvcmVPYmplY3QgPSBjb250ZXh0Lm1lcmdlKHByZXZpb3VzXzEuc3RvcmVPYmplY3QsIGluY29taW5nKTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c18xLm1lcmdlVHJlZSA9IG1lcmdlTWVyZ2VUcmVlcyhwcmV2aW91c18xLm1lcmdlVHJlZSwgbWVyZ2VUcmVlKTtcbiAgICAgICAgICAgICAgICBmaWVsZE5vZGVTZXQuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIHByZXZpb3VzXzEuZmllbGROb2RlU2V0LmFkZChmaWVsZCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5pbmNvbWluZ0J5SWQuc2V0KGRhdGFJZCwge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZU9iamVjdDogaW5jb21pbmcsXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlVHJlZTogbWVyZ2VUcmVlSXNFbXB0eShtZXJnZVRyZWUpID8gdm9pZCAwIDogbWVyZ2VUcmVlLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZE5vZGVTZXQ6IGZpZWxkTm9kZVNldCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhUmVmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmNvbWluZztcbiAgICB9O1xuICAgIFN0b3JlV3JpdGVyLnByb3RvdHlwZS5wcm9jZXNzRmllbGRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZmllbGQsIGNvbnRleHQsIG1lcmdlVHJlZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIWZpZWxkLnNlbGVjdGlvblNldCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fREVWX18gPyB1dGlsaXRpZXMuY2xvbmVEZWVwKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IF90aGlzLnByb2Nlc3NGaWVsZFZhbHVlKGl0ZW0sIGZpZWxkLCBjb250ZXh0LCBnZXRDaGlsZE1lcmdlVHJlZShtZXJnZVRyZWUsIGkpKTtcbiAgICAgICAgICAgICAgICBtYXliZVJlY3ljbGVDaGlsZE1lcmdlVHJlZShtZXJnZVRyZWUsIGkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTZWxlY3Rpb25TZXQoe1xuICAgICAgICAgICAgcmVzdWx0OiB2YWx1ZSxcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDogZmllbGQuc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIG1lcmdlVHJlZTogbWVyZ2VUcmVlLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN0b3JlV3JpdGVyLnByb3RvdHlwZS5mbGF0dGVuRmllbGRzID0gZnVuY3Rpb24gKHNlbGVjdGlvblNldCwgcmVzdWx0LCBjb250ZXh0LCB0eXBlbmFtZSkge1xuICAgICAgICBpZiAodHlwZW5hbWUgPT09IHZvaWQgMCkgeyB0eXBlbmFtZSA9IHV0aWxpdGllcy5nZXRUeXBlbmFtZUZyb21SZXN1bHQocmVzdWx0LCBzZWxlY3Rpb25TZXQsIGNvbnRleHQuZnJhZ21lbnRNYXApOyB9XG4gICAgICAgIHZhciBmaWVsZE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdmFyIHBvbGljaWVzID0gdGhpcy5jYWNoZS5wb2xpY2llcztcbiAgICAgICAgdmFyIGxpbWl0aW5nVHJpZSA9IG5ldyB0cmllLlRyaWUoZmFsc2UpO1xuICAgICAgICAoZnVuY3Rpb24gZmxhdHRlbihzZWxlY3Rpb25TZXQsIGluaGVyaXRlZENvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciB2aXNpdGVkTm9kZSA9IGxpbWl0aW5nVHJpZS5sb29rdXAoc2VsZWN0aW9uU2V0LCBpbmhlcml0ZWRDb250ZXh0LmNsaWVudE9ubHksIGluaGVyaXRlZENvbnRleHQuZGVmZXJyZWQpO1xuICAgICAgICAgICAgaWYgKHZpc2l0ZWROb2RlLnZpc2l0ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmlzaXRlZE5vZGUudmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxpdGllcy5zaG91bGRJbmNsdWRlKHNlbGVjdGlvbiwgY29udGV4dC52YXJpYWJsZXMpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudE9ubHkgPSBpbmhlcml0ZWRDb250ZXh0LmNsaWVudE9ubHksIGRlZmVycmVkID0gaW5oZXJpdGVkQ29udGV4dC5kZWZlcnJlZDtcbiAgICAgICAgICAgICAgICBpZiAoIShjbGllbnRPbmx5ICYmIGRlZmVycmVkKSAmJlxuICAgICAgICAgICAgICAgICAgICB1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KHNlbGVjdGlvbi5kaXJlY3RpdmVzKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24uZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZGlyLm5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJjbGllbnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSBcImRlZmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcmd1bWVudHNPYmplY3RGcm9tRmllbGQoZGlyLCBjb250ZXh0LnZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhcmdzIHx8IGFyZ3MuaWYgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzRmllbGQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmcgPSBmaWVsZE1hcC5nZXQoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRPbmx5ID0gY2xpZW50T25seSAmJiBleGlzdGluZy5jbGllbnRPbmx5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQgPSBkZWZlcnJlZCAmJiBleGlzdGluZy5kZWZlcnJlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaWVsZE1hcC5zZXQoc2VsZWN0aW9uLCBnZXRDb250ZXh0Rmxhdm9yKGNvbnRleHQsIGNsaWVudE9ubHksIGRlZmVycmVkKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSB1dGlsaXRpZXMuZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uKHNlbGVjdGlvbiwgY29udGV4dC5mcmFnbWVudE1hcCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcmFnbWVudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcG9saWNpZXMuZnJhZ21lbnRNYXRjaGVzKGZyYWdtZW50LCB0eXBlbmFtZSwgcmVzdWx0LCBjb250ZXh0LnZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW4oZnJhZ21lbnQuc2VsZWN0aW9uU2V0LCBnZXRDb250ZXh0Rmxhdm9yKGNvbnRleHQsIGNsaWVudE9ubHksIGRlZmVycmVkKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkoc2VsZWN0aW9uU2V0LCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIGZpZWxkTWFwO1xuICAgIH07XG4gICAgU3RvcmVXcml0ZXIucHJvdG90eXBlLmFwcGx5TWVyZ2VzID0gZnVuY3Rpb24gKG1lcmdlVHJlZSwgZXhpc3RpbmcsIGluY29taW5nLCBjb250ZXh0LCBnZXRTdG9yYWdlQXJncykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChtZXJnZVRyZWUubWFwLnNpemUgJiYgIXV0aWxpdGllcy5pc1JlZmVyZW5jZShpbmNvbWluZykpIHtcbiAgICAgICAgICAgIHZhciBlXzEgPSAoIUFycmF5LmlzQXJyYXkoaW5jb21pbmcpICYmXG4gICAgICAgICAgICAgICAgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShleGlzdGluZykgfHwgc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QoZXhpc3RpbmcpKSkgPyBleGlzdGluZyA6IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBpXzEgPSBpbmNvbWluZztcbiAgICAgICAgICAgIGlmIChlXzEgJiYgIWdldFN0b3JhZ2VBcmdzKSB7XG4gICAgICAgICAgICAgICAgZ2V0U3RvcmFnZUFyZ3MgPSBbdXRpbGl0aWVzLmlzUmVmZXJlbmNlKGVfMSkgPyBlXzEuX19yZWYgOiBlXzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNoYW5nZWRGaWVsZHNfMTtcbiAgICAgICAgICAgIHZhciBnZXRWYWx1ZV8xID0gZnVuY3Rpb24gKGZyb20sIG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShmcm9tKVxuICAgICAgICAgICAgICAgICAgICA/ICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIiA/IGZyb21bbmFtZV0gOiB2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIDogY29udGV4dC5zdG9yZS5nZXRGaWVsZFZhbHVlKGZyb20sIFN0cmluZyhuYW1lKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbWVyZ2VUcmVlLm1hcC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZFRyZWUsIHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVWYWwgPSBnZXRWYWx1ZV8xKGVfMSwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBpVmFsID0gZ2V0VmFsdWVfMShpXzEsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBpVmFsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKGdldFN0b3JhZ2VBcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFN0b3JhZ2VBcmdzLnB1c2goc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYVZhbCA9IF90aGlzLmFwcGx5TWVyZ2VzKGNoaWxkVHJlZSwgZVZhbCwgaVZhbCwgY29udGV4dCwgZ2V0U3RvcmFnZUFyZ3MpO1xuICAgICAgICAgICAgICAgIGlmIChhVmFsICE9PSBpVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWRGaWVsZHNfMSA9IGNoYW5nZWRGaWVsZHNfMSB8fCBuZXcgTWFwO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkRmllbGRzXzEuc2V0KHN0b3JlRmllbGROYW1lLCBhVmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGdldFN0b3JhZ2VBcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHMuaW52YXJpYW50KGdldFN0b3JhZ2VBcmdzLnBvcCgpID09PSBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2hhbmdlZEZpZWxkc18xKSB7XG4gICAgICAgICAgICAgICAgaW5jb21pbmcgPSAoQXJyYXkuaXNBcnJheShpXzEpID8gaV8xLnNsaWNlKDApIDogdHNsaWIuX19hc3NpZ24oe30sIGlfMSkpO1xuICAgICAgICAgICAgICAgIGNoYW5nZWRGaWVsZHNfMS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmNvbWluZ1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXJnZVRyZWUuaW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucG9saWNpZXMucnVuTWVyZ2VGdW5jdGlvbihleGlzdGluZywgaW5jb21pbmcsIG1lcmdlVHJlZS5pbmZvLCBjb250ZXh0LCBnZXRTdG9yYWdlQXJncyAmJiAoX2EgPSBjb250ZXh0LnN0b3JlKS5nZXRTdG9yYWdlLmFwcGx5KF9hLCBnZXRTdG9yYWdlQXJncykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmNvbWluZztcbiAgICB9O1xuICAgIHJldHVybiBTdG9yZVdyaXRlcjtcbn0oKSk7XG52YXIgZW1wdHlNZXJnZVRyZWVQb29sID0gW107XG5mdW5jdGlvbiBnZXRDaGlsZE1lcmdlVHJlZShfYSwgbmFtZSkge1xuICAgIHZhciBtYXAgPSBfYS5tYXA7XG4gICAgaWYgKCFtYXAuaGFzKG5hbWUpKSB7XG4gICAgICAgIG1hcC5zZXQobmFtZSwgZW1wdHlNZXJnZVRyZWVQb29sLnBvcCgpIHx8IHsgbWFwOiBuZXcgTWFwIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWFwLmdldChuYW1lKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVyZ2VUcmVlcyhsZWZ0LCByaWdodCkge1xuICAgIGlmIChsZWZ0ID09PSByaWdodCB8fCAhcmlnaHQgfHwgbWVyZ2VUcmVlSXNFbXB0eShyaWdodCkpXG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIGlmICghbGVmdCB8fCBtZXJnZVRyZWVJc0VtcHR5KGxlZnQpKVxuICAgICAgICByZXR1cm4gcmlnaHQ7XG4gICAgdmFyIGluZm8gPSBsZWZ0LmluZm8gJiYgcmlnaHQuaW5mbyA/IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBsZWZ0LmluZm8pLCByaWdodC5pbmZvKSA6IGxlZnQuaW5mbyB8fCByaWdodC5pbmZvO1xuICAgIHZhciBuZWVkVG9NZXJnZU1hcHMgPSBsZWZ0Lm1hcC5zaXplICYmIHJpZ2h0Lm1hcC5zaXplO1xuICAgIHZhciBtYXAgPSBuZWVkVG9NZXJnZU1hcHMgPyBuZXcgTWFwIDpcbiAgICAgICAgbGVmdC5tYXAuc2l6ZSA/IGxlZnQubWFwIDogcmlnaHQubWFwO1xuICAgIHZhciBtZXJnZWQgPSB7IGluZm86IGluZm8sIG1hcDogbWFwIH07XG4gICAgaWYgKG5lZWRUb01lcmdlTWFwcykge1xuICAgICAgICB2YXIgcmVtYWluaW5nUmlnaHRLZXlzXzEgPSBuZXcgU2V0KHJpZ2h0Lm1hcC5rZXlzKCkpO1xuICAgICAgICBsZWZ0Lm1hcC5mb3JFYWNoKGZ1bmN0aW9uIChsZWZ0VHJlZSwga2V5KSB7XG4gICAgICAgICAgICBtZXJnZWQubWFwLnNldChrZXksIG1lcmdlTWVyZ2VUcmVlcyhsZWZ0VHJlZSwgcmlnaHQubWFwLmdldChrZXkpKSk7XG4gICAgICAgICAgICByZW1haW5pbmdSaWdodEtleXNfMS5kZWxldGUoa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbWFpbmluZ1JpZ2h0S2V5c18xLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgbWVyZ2VkLm1hcC5zZXQoa2V5LCBtZXJnZU1lcmdlVHJlZXMocmlnaHQubWFwLmdldChrZXkpLCBsZWZ0Lm1hcC5nZXQoa2V5KSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlZDtcbn1cbmZ1bmN0aW9uIG1lcmdlVHJlZUlzRW1wdHkodHJlZSkge1xuICAgIHJldHVybiAhdHJlZSB8fCAhKHRyZWUuaW5mbyB8fCB0cmVlLm1hcC5zaXplKTtcbn1cbmZ1bmN0aW9uIG1heWJlUmVjeWNsZUNoaWxkTWVyZ2VUcmVlKF9hLCBuYW1lKSB7XG4gICAgdmFyIG1hcCA9IF9hLm1hcDtcbiAgICB2YXIgY2hpbGRUcmVlID0gbWFwLmdldChuYW1lKTtcbiAgICBpZiAoY2hpbGRUcmVlICYmIG1lcmdlVHJlZUlzRW1wdHkoY2hpbGRUcmVlKSkge1xuICAgICAgICBlbXB0eU1lcmdlVHJlZVBvb2wucHVzaChjaGlsZFRyZWUpO1xuICAgICAgICBtYXAuZGVsZXRlKG5hbWUpO1xuICAgIH1cbn1cbnZhciB3YXJuaW5ncyA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIHdhcm5BYm91dERhdGFMb3NzKGV4aXN0aW5nUmVmLCBpbmNvbWluZ09iaiwgc3RvcmVGaWVsZE5hbWUsIHN0b3JlKSB7XG4gICAgdmFyIGdldENoaWxkID0gZnVuY3Rpb24gKG9iak9yUmVmKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHN0b3JlLmdldEZpZWxkVmFsdWUob2JqT3JSZWYsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjaGlsZCA9PT0gXCJvYmplY3RcIiAmJiBjaGlsZDtcbiAgICB9O1xuICAgIHZhciBleGlzdGluZyA9IGdldENoaWxkKGV4aXN0aW5nUmVmKTtcbiAgICBpZiAoIWV4aXN0aW5nKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGluY29taW5nID0gZ2V0Q2hpbGQoaW5jb21pbmdPYmopO1xuICAgIGlmICghaW5jb21pbmcpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKGV4aXN0aW5nKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChlcXVhbGl0eS5lcXVhbChleGlzdGluZywgaW5jb21pbmcpKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKE9iamVjdC5rZXlzKGV4aXN0aW5nKS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBzdG9yZS5nZXRGaWVsZFZhbHVlKGluY29taW5nLCBrZXkpICE9PSB2b2lkIDA7IH0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHBhcmVudFR5cGUgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKGV4aXN0aW5nUmVmLCBcIl9fdHlwZW5hbWVcIikgfHxcbiAgICAgICAgc3RvcmUuZ2V0RmllbGRWYWx1ZShpbmNvbWluZ09iaiwgXCJfX3R5cGVuYW1lXCIpO1xuICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICB2YXIgdHlwZURvdE5hbWUgPSBcIlwiLmNvbmNhdChwYXJlbnRUeXBlLCBcIi5cIikuY29uY2F0KGZpZWxkTmFtZSk7XG4gICAgaWYgKHdhcm5pbmdzLmhhcyh0eXBlRG90TmFtZSkpXG4gICAgICAgIHJldHVybjtcbiAgICB3YXJuaW5ncy5hZGQodHlwZURvdE5hbWUpO1xuICAgIHZhciBjaGlsZFR5cGVuYW1lcyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleGlzdGluZykgJiZcbiAgICAgICAgIUFycmF5LmlzQXJyYXkoaW5jb21pbmcpKSB7XG4gICAgICAgIFtleGlzdGluZywgaW5jb21pbmddLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICB2YXIgdHlwZW5hbWUgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKGNoaWxkLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHR5cGVuYW1lID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgIWNoaWxkVHlwZW5hbWVzLmluY2x1ZGVzKHR5cGVuYW1lKSkge1xuICAgICAgICAgICAgICAgIGNoaWxkVHlwZW5hbWVzLnB1c2godHlwZW5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiQ2FjaGUgZGF0YSBtYXkgYmUgbG9zdCB3aGVuIHJlcGxhY2luZyB0aGUgXCIuY29uY2F0KGZpZWxkTmFtZSwgXCIgZmllbGQgb2YgYSBcIikuY29uY2F0KHBhcmVudFR5cGUsIFwiIG9iamVjdC5cXG5cXG5UbyBhZGRyZXNzIHRoaXMgcHJvYmxlbSAod2hpY2ggaXMgbm90IGEgYnVnIGluIEFwb2xsbyBDbGllbnQpLCBcIikuY29uY2F0KGNoaWxkVHlwZW5hbWVzLmxlbmd0aFxuICAgICAgICA/IFwiZWl0aGVyIGVuc3VyZSBhbGwgb2JqZWN0cyBvZiB0eXBlIFwiICtcbiAgICAgICAgICAgIGNoaWxkVHlwZW5hbWVzLmpvaW4oXCIgYW5kIFwiKSArIFwiIGhhdmUgYW4gSUQgb3IgYSBjdXN0b20gbWVyZ2UgZnVuY3Rpb24sIG9yIFwiXG4gICAgICAgIDogXCJcIiwgXCJkZWZpbmUgYSBjdXN0b20gbWVyZ2UgZnVuY3Rpb24gZm9yIHRoZSBcIikuY29uY2F0KHR5cGVEb3ROYW1lLCBcIiBmaWVsZCwgc28gSW5NZW1vcnlDYWNoZSBjYW4gc2FmZWx5IG1lcmdlIHRoZXNlIG9iamVjdHM6XFxuXFxuICBleGlzdGluZzogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShleGlzdGluZykuc2xpY2UoMCwgMTAwMCksIFwiXFxuICBpbmNvbWluZzogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShpbmNvbWluZykuc2xpY2UoMCwgMTAwMCksIFwiXFxuXFxuRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlc2Ugb3B0aW9ucywgcGxlYXNlIHJlZmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uOlxcblxcbiAgKiBFbnN1cmluZyBlbnRpdHkgb2JqZWN0cyBoYXZlIElEczogaHR0cHM6Ly9nby5hcG9sbG8uZGV2L2MvZ2VuZXJhdGluZy11bmlxdWUtaWRlbnRpZmllcnNcXG4gICogRGVmaW5pbmcgY3VzdG9tIG1lcmdlIGZ1bmN0aW9uczogaHR0cHM6Ly9nby5hcG9sbG8uZGV2L2MvbWVyZ2luZy1ub24tbm9ybWFsaXplZC1vYmplY3RzXFxuXCIpKTtcbn1cblxudmFyIEluTWVtb3J5Q2FjaGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhJbk1lbW9yeUNhY2hlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5Q2FjaGUoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy53YXRjaGVzID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy50eXBlbmFtZURvY3VtZW50Q2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIF90aGlzLm1ha2VWYXIgPSBtYWtlVmFyO1xuICAgICAgICBfdGhpcy50eENvdW50ID0gMDtcbiAgICAgICAgX3RoaXMuY29uZmlnID0gbm9ybWFsaXplQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIF90aGlzLmFkZFR5cGVuYW1lID0gISFfdGhpcy5jb25maWcuYWRkVHlwZW5hbWU7XG4gICAgICAgIF90aGlzLnBvbGljaWVzID0gbmV3IFBvbGljaWVzKHtcbiAgICAgICAgICAgIGNhY2hlOiBfdGhpcyxcbiAgICAgICAgICAgIGRhdGFJZEZyb21PYmplY3Q6IF90aGlzLmNvbmZpZy5kYXRhSWRGcm9tT2JqZWN0LFxuICAgICAgICAgICAgcG9zc2libGVUeXBlczogX3RoaXMuY29uZmlnLnBvc3NpYmxlVHlwZXMsXG4gICAgICAgICAgICB0eXBlUG9saWNpZXM6IF90aGlzLmNvbmZpZy50eXBlUG9saWNpZXMsXG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy5pbml0KCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJvb3RTdG9yZSA9IHRoaXMuZGF0YSA9IG5ldyBleHBvcnRzLkVudGl0eVN0b3JlLlJvb3Qoe1xuICAgICAgICAgICAgcG9saWNpZXM6IHRoaXMucG9saWNpZXMsXG4gICAgICAgICAgICByZXN1bHRDYWNoaW5nOiB0aGlzLmNvbmZpZy5yZXN1bHRDYWNoaW5nLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vcHRpbWlzdGljRGF0YSA9IHJvb3RTdG9yZS5zdHVtcDtcbiAgICAgICAgdGhpcy5yZXNldFJlc3VsdENhY2hlKCk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZXNldFJlc3VsdENhY2hlID0gZnVuY3Rpb24gKHJlc2V0UmVzdWx0SWRlbnRpdGllcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcHJldmlvdXNSZWFkZXIgPSB0aGlzLnN0b3JlUmVhZGVyO1xuICAgICAgICB0aGlzLnN0b3JlV3JpdGVyID0gbmV3IFN0b3JlV3JpdGVyKHRoaXMsIHRoaXMuc3RvcmVSZWFkZXIgPSBuZXcgU3RvcmVSZWFkZXIoe1xuICAgICAgICAgICAgY2FjaGU6IHRoaXMsXG4gICAgICAgICAgICBhZGRUeXBlbmFtZTogdGhpcy5hZGRUeXBlbmFtZSxcbiAgICAgICAgICAgIHJlc3VsdENhY2hlTWF4U2l6ZTogdGhpcy5jb25maWcucmVzdWx0Q2FjaGVNYXhTaXplLFxuICAgICAgICAgICAgY2Fub25pemVSZXN1bHRzOiBzaG91bGRDYW5vbml6ZVJlc3VsdHModGhpcy5jb25maWcpLFxuICAgICAgICAgICAgY2Fub246IHJlc2V0UmVzdWx0SWRlbnRpdGllc1xuICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgOiBwcmV2aW91c1JlYWRlciAmJiBwcmV2aW91c1JlYWRlci5jYW5vbixcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLm1heWJlQnJvYWRjYXN0V2F0Y2ggPSBvcHRpbWlzbS53cmFwKGZ1bmN0aW9uIChjLCBvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYnJvYWRjYXN0V2F0Y2goYywgb3B0aW9ucyk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1heDogdGhpcy5jb25maWcucmVzdWx0Q2FjaGVNYXhTaXplLFxuICAgICAgICAgICAgbWFrZUNhY2hlS2V5OiBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IGMub3B0aW1pc3RpYyA/IF90aGlzLm9wdGltaXN0aWNEYXRhIDogX3RoaXMuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoc3VwcG9ydHNSZXN1bHRDYWNoaW5nKHN0b3JlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW1pc3RpYyA9IGMub3B0aW1pc3RpYywgcm9vdElkID0gYy5yb290SWQsIHZhcmlhYmxlcyA9IGMudmFyaWFibGVzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUubWFrZUNhY2hlS2V5KGMucXVlcnksIGMuY2FsbGJhY2ssIGNhbm9uaWNhbFN0cmluZ2lmeSh7IG9wdGltaXN0aWM6IG9wdGltaXN0aWMsIHJvb3RJZDogcm9vdElkLCB2YXJpYWJsZXM6IHZhcmlhYmxlcyB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbmV3IFNldChbXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ3JvdXAsXG4gICAgICAgICAgICB0aGlzLm9wdGltaXN0aWNEYXRhLmdyb3VwLFxuICAgICAgICBdKS5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCkgeyByZXR1cm4gZ3JvdXAucmVzZXRDYWNoaW5nKCk7IH0pO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVzdG9yZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICBpZiAoZGF0YSlcbiAgICAgICAgICAgIHRoaXMuZGF0YS5yZXBsYWNlKGRhdGEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiAob3B0aW1pc3RpYykge1xuICAgICAgICBpZiAob3B0aW1pc3RpYyA9PT0gdm9pZCAwKSB7IG9wdGltaXN0aWMgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gKG9wdGltaXN0aWMgPyB0aGlzLm9wdGltaXN0aWNEYXRhIDogdGhpcy5kYXRhKS5leHRyYWN0KCk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hID0gb3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSwgcmV0dXJuUGFydGlhbERhdGEgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlUmVhZGVyLmRpZmZRdWVyeUFnYWluc3RTdG9yZSh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgc3RvcmU6IG9wdGlvbnMub3B0aW1pc3RpYyA/IHRoaXMub3B0aW1pc3RpY0RhdGEgOiB0aGlzLmRhdGEsIGNvbmZpZzogdGhpcy5jb25maWcsIHJldHVyblBhcnRpYWxEYXRhOiByZXR1cm5QYXJ0aWFsRGF0YSB9KSkucmVzdWx0IHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTWlzc2luZ0ZpZWxkRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICsrdGhpcy50eENvdW50O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVXcml0ZXIud3JpdGVUb1N0b3JlKHRoaXMuZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoIS0tdGhpcy50eENvdW50ICYmIG9wdGlvbnMuYnJvYWRjYXN0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5tb2RpZnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAoaGFzT3duLmNhbGwob3B0aW9ucywgXCJpZFwiKSAmJiAhb3B0aW9ucy5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdG9yZSA9IG9wdGlvbnMub3B0aW1pc3RpY1xuICAgICAgICAgICAgPyB0aGlzLm9wdGltaXN0aWNEYXRhXG4gICAgICAgICAgICA6IHRoaXMuZGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICsrdGhpcy50eENvdW50O1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlLm1vZGlmeShvcHRpb25zLmlkIHx8IFwiUk9PVF9RVUVSWVwiLCBvcHRpb25zLmZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoIS0tdGhpcy50eENvdW50ICYmIG9wdGlvbnMuYnJvYWRjYXN0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5kaWZmID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVSZWFkZXIuZGlmZlF1ZXJ5QWdhaW5zdFN0b3JlKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBzdG9yZTogb3B0aW9ucy5vcHRpbWlzdGljID8gdGhpcy5vcHRpbWlzdGljRGF0YSA6IHRoaXMuZGF0YSwgcm9vdElkOiBvcHRpb25zLmlkIHx8IFwiUk9PVF9RVUVSWVwiLCBjb25maWc6IHRoaXMuY29uZmlnIH0pKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24gKHdhdGNoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy53YXRjaGVzLnNpemUpIHtcbiAgICAgICAgICAgIHJlY2FsbENhY2hlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2F0Y2hlcy5hZGQod2F0Y2gpO1xuICAgICAgICBpZiAod2F0Y2guaW1tZWRpYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm1heWJlQnJvYWRjYXN0V2F0Y2god2F0Y2gpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMud2F0Y2hlcy5kZWxldGUod2F0Y2gpICYmICFfdGhpcy53YXRjaGVzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBmb3JnZXRDYWNoZShfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoLmZvcmdldCh3YXRjaCk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5nYyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGNhbm9uaWNhbFN0cmluZ2lmeS5yZXNldCgpO1xuICAgICAgICB2YXIgaWRzID0gdGhpcy5vcHRpbWlzdGljRGF0YS5nYygpO1xuICAgICAgICBpZiAob3B0aW9ucyAmJiAhdGhpcy50eENvdW50KSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5yZXNldFJlc3VsdENhY2hlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFJlc3VsdENhY2hlKG9wdGlvbnMucmVzZXRSZXN1bHRJZGVudGl0aWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMucmVzZXRSZXN1bHRJZGVudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZVJlYWRlci5yZXNldENhbm9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJldGFpbiA9IGZ1bmN0aW9uIChyb290SWQsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgcmV0dXJuIChvcHRpbWlzdGljID8gdGhpcy5vcHRpbWlzdGljRGF0YSA6IHRoaXMuZGF0YSkucmV0YWluKHJvb3RJZCk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24gKHJvb3RJZCwgb3B0aW1pc3RpYykge1xuICAgICAgICByZXR1cm4gKG9wdGltaXN0aWMgPyB0aGlzLm9wdGltaXN0aWNEYXRhIDogdGhpcy5kYXRhKS5yZWxlYXNlKHJvb3RJZCk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmplY3QpKVxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5fX3JlZjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbGljaWVzLmlkZW50aWZ5KG9iamVjdClbMF07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuZXZpY3QgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMuaWQpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChvcHRpb25zLCBcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBpZDogXCJST09UX1FVRVJZXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICsrdGhpcy50eENvdW50O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW1pc3RpY0RhdGEuZXZpY3Qob3B0aW9ucywgdGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmICghLS10aGlzLnR4Q291bnQgJiYgb3B0aW9ucy5icm9hZGNhc3QgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIGNhbm9uaWNhbFN0cmluZ2lmeS5yZXNldCgpO1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmRpc2NhcmRXYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLndhdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAod2F0Y2gpIHsgcmV0dXJuIF90aGlzLm1heWJlQnJvYWRjYXN0V2F0Y2guZm9yZ2V0KHdhdGNoKTsgfSk7XG4gICAgICAgICAgICB0aGlzLndhdGNoZXMuY2xlYXIoKTtcbiAgICAgICAgICAgIGZvcmdldENhY2hlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVtb3ZlT3B0aW1pc3RpYyA9IGZ1bmN0aW9uIChpZFRvUmVtb3ZlKSB7XG4gICAgICAgIHZhciBuZXdPcHRpbWlzdGljRGF0YSA9IHRoaXMub3B0aW1pc3RpY0RhdGEucmVtb3ZlTGF5ZXIoaWRUb1JlbW92ZSk7XG4gICAgICAgIGlmIChuZXdPcHRpbWlzdGljRGF0YSAhPT0gdGhpcy5vcHRpbWlzdGljRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpbWlzdGljRGF0YSA9IG5ld09wdGltaXN0aWNEYXRhO1xuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmJhdGNoID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHVwZGF0ZSA9IG9wdGlvbnMudXBkYXRlLCBfYSA9IG9wdGlvbnMub3B0aW1pc3RpYywgb3B0aW1pc3RpYyA9IF9hID09PSB2b2lkIDAgPyB0cnVlIDogX2EsIHJlbW92ZU9wdGltaXN0aWMgPSBvcHRpb25zLnJlbW92ZU9wdGltaXN0aWMsIG9uV2F0Y2hVcGRhdGVkID0gb3B0aW9ucy5vbldhdGNoVXBkYXRlZDtcbiAgICAgICAgdmFyIHVwZGF0ZVJlc3VsdDtcbiAgICAgICAgdmFyIHBlcmZvcm0gPSBmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLCBkYXRhID0gX2EuZGF0YSwgb3B0aW1pc3RpY0RhdGEgPSBfYS5vcHRpbWlzdGljRGF0YTtcbiAgICAgICAgICAgICsrX3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgIGlmIChsYXllcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmRhdGEgPSBfdGhpcy5vcHRpbWlzdGljRGF0YSA9IGxheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlUmVzdWx0ID0gdXBkYXRlKF90aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIC0tX3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgICAgICBfdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcHRpbWlzdGljRGF0YSA9IG9wdGltaXN0aWNEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgYWxyZWFkeURpcnR5ID0gbmV3IFNldCgpO1xuICAgICAgICBpZiAob25XYXRjaFVwZGF0ZWQgJiYgIXRoaXMudHhDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBvbldhdGNoVXBkYXRlZDogZnVuY3Rpb24gKHdhdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFscmVhZHlEaXJ0eS5hZGQod2F0Y2gpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpbWlzdGljID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpbWlzdGljRGF0YSA9IHRoaXMub3B0aW1pc3RpY0RhdGEuYWRkTGF5ZXIob3B0aW1pc3RpYywgcGVyZm9ybSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW1pc3RpYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHBlcmZvcm0odGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBlcmZvcm0oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlbW92ZU9wdGltaXN0aWMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW1pc3RpY0RhdGEgPSB0aGlzLm9wdGltaXN0aWNEYXRhLnJlbW92ZUxheWVyKHJlbW92ZU9wdGltaXN0aWMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvbldhdGNoVXBkYXRlZCAmJiBhbHJlYWR5RGlydHkuc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBvbldhdGNoVXBkYXRlZDogZnVuY3Rpb24gKHdhdGNoLCBkaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBvbldhdGNoVXBkYXRlZC5jYWxsKHRoaXMsIHdhdGNoLCBkaWZmKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFscmVhZHlEaXJ0eS5kZWxldGUod2F0Y2gpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgICAgICBpZiAoYWxyZWFkeURpcnR5LnNpemUpIHtcbiAgICAgICAgICAgICAgICBhbHJlYWR5RGlydHkuZm9yRWFjaChmdW5jdGlvbiAod2F0Y2gpIHsgcmV0dXJuIF90aGlzLm1heWJlQnJvYWRjYXN0V2F0Y2guZGlydHkod2F0Y2gpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcyhvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXBkYXRlUmVzdWx0O1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucGVyZm9ybVRyYW5zYWN0aW9uID0gZnVuY3Rpb24gKHVwZGF0ZSwgb3B0aW1pc3RpY0lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhdGNoKHtcbiAgICAgICAgICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgICAgICAgICAgb3B0aW1pc3RpYzogb3B0aW1pc3RpY0lkIHx8IChvcHRpbWlzdGljSWQgIT09IG51bGwpLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnRyYW5zZm9ybURvY3VtZW50ID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFkZFR5cGVuYW1lKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy50eXBlbmFtZURvY3VtZW50Q2FjaGUuZ2V0KGRvY3VtZW50KTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdXRpbGl0aWVzLmFkZFR5cGVuYW1lVG9Eb2N1bWVudChkb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlbmFtZURvY3VtZW50Q2FjaGUuc2V0KGRvY3VtZW50LCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZW5hbWVEb2N1bWVudENhY2hlLnNldChyZXN1bHQsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmJyb2FkY2FzdFdhdGNoZXMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMudHhDb3VudCkge1xuICAgICAgICAgICAgdGhpcy53YXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIF90aGlzLm1heWJlQnJvYWRjYXN0V2F0Y2goYywgb3B0aW9ucyk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5icm9hZGNhc3RXYXRjaCA9IGZ1bmN0aW9uIChjLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBsYXN0RGlmZiA9IGMubGFzdERpZmY7XG4gICAgICAgIHZhciBkaWZmID0gdGhpcy5kaWZmKGMpO1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKGMub3B0aW1pc3RpYyAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLm9wdGltaXN0aWMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBkaWZmLmZyb21PcHRpbWlzdGljVHJhbnNhY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25XYXRjaFVwZGF0ZWQgJiZcbiAgICAgICAgICAgICAgICBvcHRpb25zLm9uV2F0Y2hVcGRhdGVkLmNhbGwodGhpcywgYywgZGlmZiwgbGFzdERpZmYpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxhc3REaWZmIHx8ICFlcXVhbGl0eS5lcXVhbChsYXN0RGlmZi5yZXN1bHQsIGRpZmYucmVzdWx0KSkge1xuICAgICAgICAgICAgYy5jYWxsYmFjayhjLmxhc3REaWZmID0gZGlmZiwgbGFzdERpZmYpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSW5NZW1vcnlDYWNoZTtcbn0oQXBvbGxvQ2FjaGUpKTtcblxuZXhwb3J0cy5pc1JlZmVyZW5jZSA9IHV0aWxpdGllcy5pc1JlZmVyZW5jZTtcbmV4cG9ydHMubWFrZVJlZmVyZW5jZSA9IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlO1xuZXhwb3J0cy5BcG9sbG9DYWNoZSA9IEFwb2xsb0NhY2hlO1xuZXhwb3J0cy5Jbk1lbW9yeUNhY2hlID0gSW5NZW1vcnlDYWNoZTtcbmV4cG9ydHMuTWlzc2luZ0ZpZWxkRXJyb3IgPSBNaXNzaW5nRmllbGRFcnJvcjtcbmV4cG9ydHMuUG9saWNpZXMgPSBQb2xpY2llcztcbmV4cG9ydHMuY2FjaGVTbG90ID0gY2FjaGVTbG90O1xuZXhwb3J0cy5jYW5vbmljYWxTdHJpbmdpZnkgPSBjYW5vbmljYWxTdHJpbmdpZnk7XG5leHBvcnRzLmRlZmF1bHREYXRhSWRGcm9tT2JqZWN0ID0gZGVmYXVsdERhdGFJZEZyb21PYmplY3Q7XG5leHBvcnRzLmZpZWxkTmFtZUZyb21TdG9yZU5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lO1xuZXhwb3J0cy5tYWtlVmFyID0gbWFrZVZhcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhY2hlLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi4vbGluay9jb3JlJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzJyk7XG52YXIgaHR0cCA9IHJlcXVpcmUoJy4uL2xpbmsvaHR0cCcpO1xudmFyIGVxdWFsaXR5ID0gcmVxdWlyZSgnQHdyeS9lcXVhbGl0eScpO1xudmFyIGNhY2hlID0gcmVxdWlyZSgnLi4vY2FjaGUnKTtcbnZhciBlcnJvcnMgPSByZXF1aXJlKCcuLi9lcnJvcnMnKTtcbnZhciBncmFwaHFsID0gcmVxdWlyZSgnZ3JhcGhxbCcpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vbGluay91dGlscycpO1xudmFyIHRzSW52YXJpYW50ID0gcmVxdWlyZSgndHMtaW52YXJpYW50Jyk7XG52YXIgZ3JhcGhxbFRhZyA9IHJlcXVpcmUoJ2dyYXBocWwtdGFnJyk7XG5cbnZhciB2ZXJzaW9uID0gJzMuNS42JztcblxuZXhwb3J0cy5OZXR3b3JrU3RhdHVzID0gdm9pZCAwO1xuKGZ1bmN0aW9uIChOZXR3b3JrU3RhdHVzKSB7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wibG9hZGluZ1wiXSA9IDFdID0gXCJsb2FkaW5nXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wic2V0VmFyaWFibGVzXCJdID0gMl0gPSBcInNldFZhcmlhYmxlc1wiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcImZldGNoTW9yZVwiXSA9IDNdID0gXCJmZXRjaE1vcmVcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJyZWZldGNoXCJdID0gNF0gPSBcInJlZmV0Y2hcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJwb2xsXCJdID0gNl0gPSBcInBvbGxcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJyZWFkeVwiXSA9IDddID0gXCJyZWFkeVwiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcImVycm9yXCJdID0gOF0gPSBcImVycm9yXCI7XG59KShleHBvcnRzLk5ldHdvcmtTdGF0dXMgfHwgKGV4cG9ydHMuTmV0d29ya1N0YXR1cyA9IHt9KSk7XG5mdW5jdGlvbiBpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQobmV0d29ya1N0YXR1cykge1xuICAgIHJldHVybiBuZXR3b3JrU3RhdHVzID8gbmV0d29ya1N0YXR1cyA8IDcgOiBmYWxzZTtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24sIGhhc093blByb3BlcnR5JDEgPSBPYmplY3QuaGFzT3duUHJvcGVydHk7XG52YXIgd2FybmVkQWJvdXRVcGRhdGVRdWVyeSA9IGZhbHNlO1xudmFyIE9ic2VydmFibGVRdWVyeSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKE9ic2VydmFibGVRdWVyeSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlUXVlcnkoX2EpIHtcbiAgICAgICAgdmFyIHF1ZXJ5TWFuYWdlciA9IF9hLnF1ZXJ5TWFuYWdlciwgcXVlcnlJbmZvID0gX2EucXVlcnlJbmZvLCBvcHRpb25zID0gX2Eub3B0aW9ucztcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBzdWJPYnNlcnZlciA9IG9ic2VydmVyLl9zdWJzY3JpcHRpb24uX29ic2VydmVyO1xuICAgICAgICAgICAgICAgIGlmIChzdWJPYnNlcnZlciAmJiAhc3ViT2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViT2JzZXJ2ZXIuZXJyb3IgPSBkZWZhdWx0U3Vic2NyaXB0aW9uT2JzZXJ2ZXJFcnJvckNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYSkgeyB9XG4gICAgICAgICAgICB2YXIgZmlyc3QgPSAhX3RoaXMub2JzZXJ2ZXJzLnNpemU7XG4gICAgICAgICAgICBfdGhpcy5vYnNlcnZlcnMuYWRkKG9ic2VydmVyKTtcbiAgICAgICAgICAgIHZhciBsYXN0ID0gX3RoaXMubGFzdDtcbiAgICAgICAgICAgIGlmIChsYXN0ICYmIGxhc3QuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvciAmJiBvYnNlcnZlci5lcnJvcihsYXN0LmVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxhc3QgJiYgbGFzdC5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0ICYmIG9ic2VydmVyLm5leHQobGFzdC5yZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVvYnNlcnZlKCkuY2F0Y2goZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpICYmICFfdGhpcy5vYnNlcnZlcnMuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50ZWFyRG93blF1ZXJ5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy5pc1Rvcm5Eb3duID0gZmFsc2U7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBfdGhpcy5xdWVyeUlkID0gcXVlcnlJbmZvLnF1ZXJ5SWQgfHwgcXVlcnlNYW5hZ2VyLmdlbmVyYXRlUXVlcnlJZCgpO1xuICAgICAgICB2YXIgb3BEZWYgPSB1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihvcHRpb25zLnF1ZXJ5KTtcbiAgICAgICAgX3RoaXMucXVlcnlOYW1lID0gb3BEZWYgJiYgb3BEZWYubmFtZSAmJiBvcERlZi5uYW1lLnZhbHVlO1xuICAgICAgICBfdGhpcy5pbml0aWFsRmV0Y2hQb2xpY3kgPSBvcHRpb25zLmZldGNoUG9saWN5IHx8IFwiY2FjaGUtZmlyc3RcIjtcbiAgICAgICAgX3RoaXMucXVlcnlNYW5hZ2VyID0gcXVlcnlNYW5hZ2VyO1xuICAgICAgICBfdGhpcy5xdWVyeUluZm8gPSBxdWVyeUluZm87XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUsIFwidmFyaWFibGVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZhcmlhYmxlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyID0ge1xuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vYnNlcnZlcnMuZGVsZXRlKG9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5vYnNlcnZlcnMuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucXVlcnlNYW5hZ2VyLnJlbW92ZVF1ZXJ5KF90aGlzLnF1ZXJ5SWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gX3RoaXMuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmdldEN1cnJlbnRSZXN1bHQgPSBmdW5jdGlvbiAoc2F2ZUFzTGFzdFJlc3VsdCkge1xuICAgICAgICBpZiAoc2F2ZUFzTGFzdFJlc3VsdCA9PT0gdm9pZCAwKSB7IHNhdmVBc0xhc3RSZXN1bHQgPSB0cnVlOyB9XG4gICAgICAgIHZhciBsYXN0UmVzdWx0ID0gdGhpcy5nZXRMYXN0UmVzdWx0KHRydWUpO1xuICAgICAgICB2YXIgbmV0d29ya1N0YXR1cyA9IHRoaXMucXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMgfHxcbiAgICAgICAgICAgIChsYXN0UmVzdWx0ICYmIGxhc3RSZXN1bHQubmV0d29ya1N0YXR1cykgfHxcbiAgICAgICAgICAgIGV4cG9ydHMuTmV0d29ya1N0YXR1cy5yZWFkeTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBsYXN0UmVzdWx0KSwgeyBsb2FkaW5nOiBpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQobmV0d29ya1N0YXR1cyksIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMgfSk7XG4gICAgICAgIHZhciBfYSA9IHRoaXMub3B0aW9ucy5mZXRjaFBvbGljeSwgZmV0Y2hQb2xpY3kgPSBfYSA9PT0gdm9pZCAwID8gXCJjYWNoZS1maXJzdFwiIDogX2E7XG4gICAgICAgIGlmIChmZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScgfHxcbiAgICAgICAgICAgIGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnIHx8XG4gICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ3N0YW5kYnknIHx8XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci50cmFuc2Zvcm0odGhpcy5vcHRpb25zLnF1ZXJ5KS5oYXNGb3JjZWRSZXNvbHZlcnMpIDtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGlmZiA9IHRoaXMucXVlcnlJbmZvLmdldERpZmYoKTtcbiAgICAgICAgICAgIGlmIChkaWZmLmNvbXBsZXRlIHx8IHRoaXMub3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gZGlmZi5yZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXF1YWxpdHkuZXF1YWwocmVzdWx0LmRhdGEsIHt9KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0LnBhcnRpYWw7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUgJiZcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm5ldHdvcmtTdGF0dXMgPT09IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5sb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgICAgIChmZXRjaFBvbGljeSA9PT0gJ2NhY2hlLWZpcnN0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1vbmx5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVhZHk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhcnRpYWwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fREVWX18gJiZcbiAgICAgICAgICAgICAgICAhZGlmZi5jb21wbGV0ZSAmJlxuICAgICAgICAgICAgICAgICF0aGlzLm9wdGlvbnMucGFydGlhbFJlZmV0Y2ggJiZcbiAgICAgICAgICAgICAgICAhcmVzdWx0LmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAhcmVzdWx0LmRhdGEgJiZcbiAgICAgICAgICAgICAgICAhcmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgbG9nTWlzc2luZ0ZpZWxkRXJyb3JzKGRpZmYubWlzc2luZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNhdmVBc0xhc3RSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFzdFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmlzRGlmZmVyZW50RnJvbUxhc3RSZXN1bHQgPSBmdW5jdGlvbiAobmV3UmVzdWx0KSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5sYXN0IHx8ICFlcXVhbGl0eS5lcXVhbCh0aGlzLmxhc3QucmVzdWx0LCBuZXdSZXN1bHQpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5nZXRMYXN0ID0gZnVuY3Rpb24gKGtleSwgdmFyaWFibGVzTXVzdE1hdGNoKSB7XG4gICAgICAgIHZhciBsYXN0ID0gdGhpcy5sYXN0O1xuICAgICAgICBpZiAobGFzdCAmJlxuICAgICAgICAgICAgbGFzdFtrZXldICYmXG4gICAgICAgICAgICAoIXZhcmlhYmxlc011c3RNYXRjaCB8fCBlcXVhbGl0eS5lcXVhbChsYXN0LnZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3Rba2V5XTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5nZXRMYXN0UmVzdWx0ID0gZnVuY3Rpb24gKHZhcmlhYmxlc011c3RNYXRjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRMYXN0KFwicmVzdWx0XCIsIHZhcmlhYmxlc011c3RNYXRjaCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmdldExhc3RFcnJvciA9IGZ1bmN0aW9uICh2YXJpYWJsZXNNdXN0TWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGFzdChcImVycm9yXCIsIHZhcmlhYmxlc011c3RNYXRjaCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlc2V0TGFzdFJlc3VsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxhc3Q7XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZXNldFF1ZXJ5U3RvcmVFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLnJlc2V0RXJyb3JzKHRoaXMucXVlcnlJZCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlZmV0Y2ggPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIHJlb2JzZXJ2ZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwb2xsSW50ZXJ2YWw6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBmZXRjaFBvbGljeSA9IHRoaXMub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSAnc3RhbmRieScgfHwgZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1hbmQtbmV0d29yaycpIHtcbiAgICAgICAgICAgIHJlb2JzZXJ2ZU9wdGlvbnMuZmV0Y2hQb2xpY3kgPSBmZXRjaFBvbGljeTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmZXRjaFBvbGljeSA9PT0gJ25vLWNhY2hlJykge1xuICAgICAgICAgICAgcmVvYnNlcnZlT3B0aW9ucy5mZXRjaFBvbGljeSA9ICduby1jYWNoZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZW9ic2VydmVPcHRpb25zLmZldGNoUG9saWN5ID0gJ25ldHdvcmstb25seSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fREVWX18gJiYgdmFyaWFibGVzICYmIGhhc093blByb3BlcnR5JDEuY2FsbCh2YXJpYWJsZXMsIFwidmFyaWFibGVzXCIpKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnlEZWYgPSB1dGlsaXRpZXMuZ2V0UXVlcnlEZWZpbml0aW9uKHRoaXMub3B0aW9ucy5xdWVyeSk7XG4gICAgICAgICAgICB2YXIgdmFycyA9IHF1ZXJ5RGVmLnZhcmlhYmxlRGVmaW5pdGlvbnM7XG4gICAgICAgICAgICBpZiAoIXZhcnMgfHwgIXZhcnMuc29tZShmdW5jdGlvbiAodikgeyByZXR1cm4gdi52YXJpYWJsZS5uYW1lLnZhbHVlID09PSBcInZhcmlhYmxlc1wiOyB9KSkge1xuICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIkNhbGxlZCByZWZldGNoKFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeSh2YXJpYWJsZXMpLCBcIikgZm9yIHF1ZXJ5IFwiKS5jb25jYXQoKChfYSA9IHF1ZXJ5RGVmLm5hbWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52YWx1ZSkgfHwgSlNPTi5zdHJpbmdpZnkocXVlcnlEZWYpLCBcIiwgd2hpY2ggZG9lcyBub3QgZGVjbGFyZSBhICR2YXJpYWJsZXMgdmFyaWFibGUuXFxuRGlkIHlvdSBtZWFuIHRvIGNhbGwgcmVmZXRjaCh2YXJpYWJsZXMpIGluc3RlYWQgb2YgcmVmZXRjaCh7IHZhcmlhYmxlcyB9KT9cIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YXJpYWJsZXMgJiYgIWVxdWFsaXR5LmVxdWFsKHRoaXMub3B0aW9ucy52YXJpYWJsZXMsIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgIHJlb2JzZXJ2ZU9wdGlvbnMudmFyaWFibGVzID0gdGhpcy5vcHRpb25zLnZhcmlhYmxlcyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMudmFyaWFibGVzKSwgdmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnF1ZXJ5SW5mby5yZXNldExhc3RXcml0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW9ic2VydmUocmVvYnNlcnZlT3B0aW9ucywgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnJlZmV0Y2gpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5mZXRjaE1vcmUgPSBmdW5jdGlvbiAoZmV0Y2hNb3JlT3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29tYmluZWRPcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIChmZXRjaE1vcmVPcHRpb25zLnF1ZXJ5ID8gZmV0Y2hNb3JlT3B0aW9ucyA6IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpLCBmZXRjaE1vcmVPcHRpb25zKSwgeyB2YXJpYWJsZXM6IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMudmFyaWFibGVzKSwgZmV0Y2hNb3JlT3B0aW9ucy52YXJpYWJsZXMpIH0pKSksIHsgZmV0Y2hQb2xpY3k6IFwibm8tY2FjaGVcIiB9KTtcbiAgICAgICAgdmFyIHFpZCA9IHRoaXMucXVlcnlNYW5hZ2VyLmdlbmVyYXRlUXVlcnlJZCgpO1xuICAgICAgICBpZiAoY29tYmluZWRPcHRpb25zLm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5xdWVyeUluZm8ubmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5mZXRjaE1vcmU7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIuZmV0Y2hRdWVyeShxaWQsIGNvbWJpbmVkT3B0aW9ucywgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmZldGNoTW9yZSkudGhlbihmdW5jdGlvbiAoZmV0Y2hNb3JlUmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGZldGNoTW9yZVJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgdmFyIHVwZGF0ZVF1ZXJ5ID0gZmV0Y2hNb3JlT3B0aW9ucy51cGRhdGVRdWVyeTtcbiAgICAgICAgICAgIGlmICh1cGRhdGVRdWVyeSkge1xuICAgICAgICAgICAgICAgIGlmIChfX0RFVl9fICYmXG4gICAgICAgICAgICAgICAgICAgICF3YXJuZWRBYm91dFVwZGF0ZVF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIlRoZSB1cGRhdGVRdWVyeSBjYWxsYmFjayBmb3IgZmV0Y2hNb3JlIGlzIGRlcHJlY2F0ZWQsIGFuZCB3aWxsIGJlIHJlbW92ZWRcXG5pbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIEFwb2xsbyBDbGllbnQuXFxuXFxuUGxlYXNlIGNvbnZlcnQgdXBkYXRlUXVlcnkgZnVuY3Rpb25zIHRvIGZpZWxkIHBvbGljaWVzIHdpdGggYXBwcm9wcmlhdGVcXG5yZWFkIGFuZCBtZXJnZSBmdW5jdGlvbnMsIG9yIHVzZS9hZGFwdCBhIGhlbHBlciBmdW5jdGlvbiAoc3VjaCBhc1xcbmNvbmNhdFBhZ2luYXRpb24sIG9mZnNldExpbWl0UGFnaW5hdGlvbiwgb3IgcmVsYXlTdHlsZVBhZ2luYXRpb24pIGZyb21cXG5AYXBvbGxvL2NsaWVudC91dGlsaXRpZXMuXFxuXFxuVGhlIGZpZWxkIHBvbGljeSBzeXN0ZW0gaGFuZGxlcyBwYWdpbmF0aW9uIG1vcmUgZWZmZWN0aXZlbHkgdGhhbiBhXFxuaGFuZC13cml0dGVuIHVwZGF0ZVF1ZXJ5IGZ1bmN0aW9uLCBhbmQgeW91IG9ubHkgbmVlZCB0byBkZWZpbmUgdGhlIHBvbGljeVxcbm9uY2UsIHJhdGhlciB0aGFuIGV2ZXJ5IHRpbWUgeW91IGNhbGwgZmV0Y2hNb3JlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgd2FybmVkQWJvdXRVcGRhdGVRdWVyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KGZ1bmN0aW9uIChwcmV2aW91cykgeyByZXR1cm4gdXBkYXRlUXVlcnkocHJldmlvdXMsIHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hNb3JlUmVzdWx0OiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGNvbWJpbmVkT3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucXVlcnlNYW5hZ2VyLmNhY2hlLndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogY29tYmluZWRPcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGNvbWJpbmVkT3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hNb3JlUmVzdWx0O1xuICAgICAgICB9KS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnF1ZXJ5TWFuYWdlci5zdG9wUXVlcnkocWlkKTtcbiAgICAgICAgICAgIF90aGlzLnJlb2JzZXJ2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc3Vic2NyaWJlVG9Nb3JlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMucXVlcnlNYW5hZ2VyXG4gICAgICAgICAgICAuc3RhcnRHcmFwaFFMU3Vic2NyaXB0aW9uKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBvcHRpb25zLmRvY3VtZW50LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IG9wdGlvbnMuY29udGV4dCxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHN1YnNjcmlwdGlvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlUXVlcnkgPSBvcHRpb25zLnVwZGF0ZVF1ZXJ5O1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVRdWVyeSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShmdW5jdGlvbiAocHJldmlvdXMsIF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFyaWFibGVzID0gX2EudmFyaWFibGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVF1ZXJ5KHByZXZpb3VzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uRGF0YTogc3Vic2NyaXB0aW9uRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQuZXJyb3IoJ1VuaGFuZGxlZCBHcmFwaFFMIHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChzdWJzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnN1YnNjcmlwdGlvbnMuZGVsZXRlKHN1YnNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChuZXdPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlb2JzZXJ2ZShuZXdPcHRpb25zKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc2V0VmFyaWFibGVzID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICBpZiAoZXF1YWxpdHkuZXF1YWwodGhpcy52YXJpYWJsZXMsIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVycy5zaXplXG4gICAgICAgICAgICAgICAgPyB0aGlzLnJlc3VsdCgpXG4gICAgICAgICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgICAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzLnNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZW9ic2VydmUoe1xuICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IHRoaXMuaW5pdGlhbEZldGNoUG9saWN5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgIH0sIGV4cG9ydHMuTmV0d29ya1N0YXR1cy5zZXRWYXJpYWJsZXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS51cGRhdGVRdWVyeSA9IGZ1bmN0aW9uIChtYXBGbikge1xuICAgICAgICB2YXIgcXVlcnlNYW5hZ2VyID0gdGhpcy5xdWVyeU1hbmFnZXI7XG4gICAgICAgIHZhciByZXN1bHQgPSBxdWVyeU1hbmFnZXIuY2FjaGUuZGlmZih7XG4gICAgICAgICAgICBxdWVyeTogdGhpcy5vcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB0aGlzLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiB0cnVlLFxuICAgICAgICAgICAgb3B0aW1pc3RpYzogZmFsc2UsXG4gICAgICAgIH0pLnJlc3VsdDtcbiAgICAgICAgdmFyIG5ld1Jlc3VsdCA9IG1hcEZuKHJlc3VsdCwge1xuICAgICAgICAgICAgdmFyaWFibGVzOiB0aGlzLnZhcmlhYmxlcyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChuZXdSZXN1bHQpIHtcbiAgICAgICAgICAgIHF1ZXJ5TWFuYWdlci5jYWNoZS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeTogdGhpcy5vcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgICAgIGRhdGE6IG5ld1Jlc3VsdCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHRoaXMudmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBxdWVyeU1hbmFnZXIuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnN0YXJ0UG9sbGluZyA9IGZ1bmN0aW9uIChwb2xsSW50ZXJ2YWwpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnBvbGxJbnRlcnZhbCA9IHBvbGxJbnRlcnZhbDtcbiAgICAgICAgdGhpcy51cGRhdGVQb2xsaW5nKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnN0b3BQb2xsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMucG9sbEludGVydmFsID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVQb2xsaW5nKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKG9wdGlvbnMsIG5ld05ldHdvcmtTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuc2V0T2JzZXJ2YWJsZVF1ZXJ5KHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIuZmV0Y2hRdWVyeU9ic2VydmFibGUodGhpcy5xdWVyeUlkLCBvcHRpb25zLCBuZXdOZXR3b3JrU3RhdHVzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUudXBkYXRlUG9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucXVlcnlNYW5hZ2VyLnNzck1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLCBwb2xsaW5nSW5mbyA9IF9hLnBvbGxpbmdJbmZvLCBwb2xsSW50ZXJ2YWwgPSBfYS5vcHRpb25zLnBvbGxJbnRlcnZhbDtcbiAgICAgICAgaWYgKCFwb2xsSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGlmIChwb2xsaW5nSW5mbykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChwb2xsaW5nSW5mby50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wb2xsaW5nSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9sbGluZ0luZm8gJiZcbiAgICAgICAgICAgIHBvbGxpbmdJbmZvLmludGVydmFsID09PSBwb2xsSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQocG9sbEludGVydmFsLCAnQXR0ZW1wdGVkIHRvIHN0YXJ0IGEgcG9sbGluZyBxdWVyeSB3aXRob3V0IGEgcG9sbGluZyBpbnRlcnZhbC4nKSA6IGdsb2JhbHMuaW52YXJpYW50KHBvbGxJbnRlcnZhbCwgMTApO1xuICAgICAgICB2YXIgaW5mbyA9IHBvbGxpbmdJbmZvIHx8ICh0aGlzLnBvbGxpbmdJbmZvID0ge30pO1xuICAgICAgICBpbmZvLmludGVydmFsID0gcG9sbEludGVydmFsO1xuICAgICAgICB2YXIgbWF5YmVGZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wb2xsaW5nSW5mbykge1xuICAgICAgICAgICAgICAgIGlmICghaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0KF90aGlzLnF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZW9ic2VydmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IFwibmV0d29yay1vbmx5XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sIGV4cG9ydHMuTmV0d29ya1N0YXR1cy5wb2xsKS50aGVuKHBvbGwsIHBvbGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9sbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5mbyA9IF90aGlzLnBvbGxpbmdJbmZvO1xuICAgICAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaW5mby50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBpbmZvLnRpbWVvdXQgPSBzZXRUaW1lb3V0KG1heWJlRmV0Y2gsIGluZm8uaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwb2xsKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnVwZGF0ZUxhc3RSZXN1bHQgPSBmdW5jdGlvbiAobmV3UmVzdWx0LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzOyB9XG4gICAgICAgIHRoaXMubGFzdCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLmxhc3QpLCB7IHJlc3VsdDogdGhpcy5xdWVyeU1hbmFnZXIuYXNzdW1lSW1tdXRhYmxlUmVzdWx0c1xuICAgICAgICAgICAgICAgID8gbmV3UmVzdWx0XG4gICAgICAgICAgICAgICAgOiB1dGlsaXRpZXMuY2xvbmVEZWVwKG5ld1Jlc3VsdCksIHZhcmlhYmxlczogdmFyaWFibGVzIH0pO1xuICAgICAgICBpZiAoIXV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkobmV3UmVzdWx0LmVycm9ycykpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmxhc3QuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVvYnNlcnZlID0gZnVuY3Rpb24gKG5ld09wdGlvbnMsIG5ld05ldHdvcmtTdGF0dXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5pc1Rvcm5Eb3duID0gZmFsc2U7XG4gICAgICAgIHZhciB1c2VEaXNwb3NhYmxlQ29uY2FzdCA9IG5ld05ldHdvcmtTdGF0dXMgPT09IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5yZWZldGNoIHx8XG4gICAgICAgICAgICBuZXdOZXR3b3JrU3RhdHVzID09PSBleHBvcnRzLk5ldHdvcmtTdGF0dXMuZmV0Y2hNb3JlIHx8XG4gICAgICAgICAgICBuZXdOZXR3b3JrU3RhdHVzID09PSBleHBvcnRzLk5ldHdvcmtTdGF0dXMucG9sbDtcbiAgICAgICAgdmFyIG9sZFZhcmlhYmxlcyA9IHRoaXMub3B0aW9ucy52YXJpYWJsZXM7XG4gICAgICAgIHZhciBvcHRpb25zID0gdXNlRGlzcG9zYWJsZUNvbmNhc3RcbiAgICAgICAgICAgID8gdXRpbGl0aWVzLmNvbXBhY3QodGhpcy5vcHRpb25zLCBuZXdPcHRpb25zKVxuICAgICAgICAgICAgOiBhc3NpZ24odGhpcy5vcHRpb25zLCB1dGlsaXRpZXMuY29tcGFjdChuZXdPcHRpb25zKSk7XG4gICAgICAgIGlmICghdXNlRGlzcG9zYWJsZUNvbmNhc3QpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9sbGluZygpO1xuICAgICAgICAgICAgaWYgKG5ld09wdGlvbnMgJiZcbiAgICAgICAgICAgICAgICBuZXdPcHRpb25zLnZhcmlhYmxlcyAmJlxuICAgICAgICAgICAgICAgICFuZXdPcHRpb25zLmZldGNoUG9saWN5ICYmXG4gICAgICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKG5ld09wdGlvbnMudmFyaWFibGVzLCBvbGRWYXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mZXRjaFBvbGljeSA9IHRoaXMuaW5pdGlhbEZldGNoUG9saWN5O1xuICAgICAgICAgICAgICAgIGlmIChuZXdOZXR3b3JrU3RhdHVzID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5zZXRWYXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSBvcHRpb25zLnZhcmlhYmxlcyAmJiB0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucy52YXJpYWJsZXMpO1xuICAgICAgICB2YXIgY29uY2FzdCA9IHRoaXMuZmV0Y2gob3B0aW9ucywgbmV3TmV0d29ya1N0YXR1cyk7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXBvcnRSZXN1bHQocmVzdWx0LCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXBvcnRFcnJvcihlcnJvciwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICghdXNlRGlzcG9zYWJsZUNvbmNhc3QpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNhc3QgJiYgdGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uY2FzdC5yZW1vdmVPYnNlcnZlcih0aGlzLm9ic2VydmVyLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29uY2FzdCA9IGNvbmNhc3Q7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29uY2FzdC5hZGRPYnNlcnZlcihvYnNlcnZlcik7XG4gICAgICAgIHJldHVybiBjb25jYXN0LnByb21pc2U7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVwb3J0UmVzdWx0KHRoaXMuZ2V0Q3VycmVudFJlc3VsdChmYWxzZSksIHRoaXMudmFyaWFibGVzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVwb3J0UmVzdWx0ID0gZnVuY3Rpb24gKHJlc3VsdCwgdmFyaWFibGVzKSB7XG4gICAgICAgIGlmICh0aGlzLmdldExhc3RFcnJvcigpIHx8IHRoaXMuaXNEaWZmZXJlbnRGcm9tTGFzdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxhc3RSZXN1bHQocmVzdWx0LCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgdXRpbGl0aWVzLml0ZXJhdGVPYnNlcnZlcnNTYWZlbHkodGhpcy5vYnNlcnZlcnMsICduZXh0JywgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgdmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBlcnJvclJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLmdldExhc3RSZXN1bHQoKSksIHsgZXJyb3I6IGVycm9yLCBlcnJvcnM6IGVycm9yLmdyYXBoUUxFcnJvcnMsIG5ldHdvcmtTdGF0dXM6IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5lcnJvciwgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlTGFzdFJlc3VsdChlcnJvclJlc3VsdCwgdmFyaWFibGVzKTtcbiAgICAgICAgdXRpbGl0aWVzLml0ZXJhdGVPYnNlcnZlcnNTYWZlbHkodGhpcy5vYnNlcnZlcnMsICdlcnJvcicsIHRoaXMubGFzdC5lcnJvciA9IGVycm9yKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuaGFzT2JzZXJ2ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnMuc2l6ZSA+IDA7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnRlYXJEb3duUXVlcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVG9ybkRvd24pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmNvbmNhc3QgJiYgdGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5jb25jYXN0LnJlbW92ZU9ic2VydmVyKHRoaXMub2JzZXJ2ZXIpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29uY2FzdDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcFBvbGxpbmcoKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViLnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuc3RvcFF1ZXJ5KHRoaXMucXVlcnlJZCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZVF1ZXJ5O1xufSh1dGlsaXRpZXMuT2JzZXJ2YWJsZSkpO1xudXRpbGl0aWVzLmZpeE9ic2VydmFibGVTdWJjbGFzcyhPYnNlcnZhYmxlUXVlcnkpO1xuZnVuY3Rpb24gZGVmYXVsdFN1YnNjcmlwdGlvbk9ic2VydmVyRXJyb3JDYWxsYmFjayhlcnJvcikge1xuICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQuZXJyb3IoJ1VuaGFuZGxlZCBlcnJvcicsIGVycm9yLm1lc3NhZ2UsIGVycm9yLnN0YWNrKTtcbn1cbmZ1bmN0aW9uIGxvZ01pc3NpbmdGaWVsZEVycm9ycyhtaXNzaW5nKSB7XG4gICAgaWYgKF9fREVWX18gJiYgbWlzc2luZykge1xuICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmRlYnVnKFwiTWlzc2luZyBjYWNoZSByZXN1bHQgZmllbGRzOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkobWlzc2luZykpLCBtaXNzaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseU5leHRGZXRjaFBvbGljeShvcHRpb25zKSB7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5mZXRjaFBvbGljeSwgZmV0Y2hQb2xpY3kgPSBfYSA9PT0gdm9pZCAwID8gXCJjYWNoZS1maXJzdFwiIDogX2EsIG5leHRGZXRjaFBvbGljeSA9IG9wdGlvbnMubmV4dEZldGNoUG9saWN5O1xuICAgIGlmIChuZXh0RmV0Y2hQb2xpY3kpIHtcbiAgICAgICAgb3B0aW9ucy5mZXRjaFBvbGljeSA9IHR5cGVvZiBuZXh0RmV0Y2hQb2xpY3kgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBuZXh0RmV0Y2hQb2xpY3kuY2FsbChvcHRpb25zLCBmZXRjaFBvbGljeSlcbiAgICAgICAgICAgIDogbmV4dEZldGNoUG9saWN5O1xuICAgIH1cbn1cblxudmFyIExvY2FsU3RhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExvY2FsU3RhdGUoX2EpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gX2EuY2FjaGUsIGNsaWVudCA9IF9hLmNsaWVudCwgcmVzb2x2ZXJzID0gX2EucmVzb2x2ZXJzLCBmcmFnbWVudE1hdGNoZXIgPSBfYS5mcmFnbWVudE1hdGNoZXI7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgICAgICAgaWYgKGNsaWVudCkge1xuICAgICAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc29sdmVycykge1xuICAgICAgICAgICAgdGhpcy5hZGRSZXNvbHZlcnMocmVzb2x2ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJhZ21lbnRNYXRjaGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZyYWdtZW50TWF0Y2hlcihmcmFnbWVudE1hdGNoZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmFkZFJlc29sdmVycyA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSB0aGlzLnJlc29sdmVycyB8fCB7fTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzb2x2ZXJzKSkge1xuICAgICAgICAgICAgcmVzb2x2ZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlc29sdmVyR3JvdXApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlcnMgPSB1dGlsaXRpZXMubWVyZ2VEZWVwKF90aGlzLnJlc29sdmVycywgcmVzb2x2ZXJHcm91cCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZXJzID0gdXRpbGl0aWVzLm1lcmdlRGVlcCh0aGlzLnJlc29sdmVycywgcmVzb2x2ZXJzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuc2V0UmVzb2x2ZXJzID0gZnVuY3Rpb24gKHJlc29sdmVycykge1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IHt9O1xuICAgICAgICB0aGlzLmFkZFJlc29sdmVycyhyZXNvbHZlcnMpO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuZ2V0UmVzb2x2ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlcnMgfHwge307XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5ydW5SZXNvbHZlcnMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGRvY3VtZW50ID0gX2EuZG9jdW1lbnQsIHJlbW90ZVJlc3VsdCA9IF9hLnJlbW90ZVJlc3VsdCwgY29udGV4dCA9IF9hLmNvbnRleHQsIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgX2IgPSBfYS5vbmx5UnVuRm9yY2VkUmVzb2x2ZXJzLCBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2I7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlc29sdmVEb2N1bWVudChkb2N1bWVudCwgcmVtb3RlUmVzdWx0LmRhdGEsIGNvbnRleHQsIHZhcmlhYmxlcywgdGhpcy5mcmFnbWVudE1hdGNoZXIsIG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMpLnRoZW4oZnVuY3Rpb24gKGxvY2FsUmVzdWx0KSB7IHJldHVybiAodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHJlbW90ZVJlc3VsdCksIHsgZGF0YTogbG9jYWxSZXN1bHQucmVzdWx0IH0pKTsgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHJlbW90ZVJlc3VsdF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5zZXRGcmFnbWVudE1hdGNoZXIgPSBmdW5jdGlvbiAoZnJhZ21lbnRNYXRjaGVyKSB7XG4gICAgICAgIHRoaXMuZnJhZ21lbnRNYXRjaGVyID0gZnJhZ21lbnRNYXRjaGVyO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuZ2V0RnJhZ21lbnRNYXRjaGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mcmFnbWVudE1hdGNoZXI7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5jbGllbnRRdWVyeSA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICBpZiAodXRpbGl0aWVzLmhhc0RpcmVjdGl2ZXMoWydjbGllbnQnXSwgZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5zZXJ2ZXJRdWVyeSA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gdXRpbGl0aWVzLnJlbW92ZUNsaWVudFNldHNGcm9tRG9jdW1lbnQoZG9jdW1lbnQpO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucHJlcGFyZUNvbnRleHQgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlO1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IGNhY2hlOiBjYWNoZSwgZ2V0Q2FjaGVLZXk6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGUuaWRlbnRpZnkob2JqKTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5hZGRFeHBvcnRlZFZhcmlhYmxlcyA9IGZ1bmN0aW9uIChkb2N1bWVudCwgdmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICh2YXJpYWJsZXMgPT09IHZvaWQgMCkgeyB2YXJpYWJsZXMgPSB7fTsgfVxuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlRG9jdW1lbnQoZG9jdW1lbnQsIHRoaXMuYnVpbGRSb290VmFsdWVGcm9tQ2FjaGUoZG9jdW1lbnQsIHZhcmlhYmxlcykgfHwge30sIHRoaXMucHJlcGFyZUNvbnRleHQoY29udGV4dCksIHZhcmlhYmxlcykudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB2YXJpYWJsZXMpLCBkYXRhLmV4cG9ydGVkVmFyaWFibGVzKSk7IH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0c2xpYi5fX2Fzc2lnbih7fSwgdmFyaWFibGVzKV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5zaG91bGRGb3JjZVJlc29sdmVycyA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICB2YXIgZm9yY2VSZXNvbHZlcnMgPSBmYWxzZTtcbiAgICAgICAgZ3JhcGhxbC52aXNpdChkb2N1bWVudCwge1xuICAgICAgICAgICAgRGlyZWN0aXZlOiB7XG4gICAgICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5hbWUudmFsdWUgPT09ICdjbGllbnQnICYmIG5vZGUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVJlc29sdmVycyA9IG5vZGUuYXJndW1lbnRzLnNvbWUoZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmcubmFtZS52YWx1ZSA9PT0gJ2Fsd2F5cycgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnLnZhbHVlLmtpbmQgPT09ICdCb29sZWFuVmFsdWUnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZy52YWx1ZS52YWx1ZSA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcmNlUmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdyYXBocWwuQlJFQUs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmb3JjZVJlc29sdmVycztcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmJ1aWxkUm9vdFZhbHVlRnJvbUNhY2hlID0gZnVuY3Rpb24gKGRvY3VtZW50LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuZGlmZih7XG4gICAgICAgICAgICBxdWVyeTogdXRpbGl0aWVzLmJ1aWxkUXVlcnlGcm9tU2VsZWN0aW9uU2V0KGRvY3VtZW50KSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgfSkucmVzdWx0O1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZURvY3VtZW50ID0gZnVuY3Rpb24gKGRvY3VtZW50LCByb290VmFsdWUsIGNvbnRleHQsIHZhcmlhYmxlcywgZnJhZ21lbnRNYXRjaGVyLCBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzKSB7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgICAgIGlmICh2YXJpYWJsZXMgPT09IHZvaWQgMCkgeyB2YXJpYWJsZXMgPSB7fTsgfVxuICAgICAgICBpZiAoZnJhZ21lbnRNYXRjaGVyID09PSB2b2lkIDApIHsgZnJhZ21lbnRNYXRjaGVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfTsgfVxuICAgICAgICBpZiAob25seVJ1bkZvcmNlZFJlc29sdmVycyA9PT0gdm9pZCAwKSB7IG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWFpbkRlZmluaXRpb24sIGZyYWdtZW50cywgZnJhZ21lbnRNYXAsIGRlZmluaXRpb25PcGVyYXRpb24sIGRlZmF1bHRPcGVyYXRpb25UeXBlLCBfYSwgY2FjaGUsIGNsaWVudCwgZXhlY0NvbnRleHQ7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgbWFpbkRlZmluaXRpb24gPSB1dGlsaXRpZXMuZ2V0TWFpbkRlZmluaXRpb24oZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIGZyYWdtZW50cyA9IHV0aWxpdGllcy5nZXRGcmFnbWVudERlZmluaXRpb25zKGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICBmcmFnbWVudE1hcCA9IHV0aWxpdGllcy5jcmVhdGVGcmFnbWVudE1hcChmcmFnbWVudHMpO1xuICAgICAgICAgICAgICAgIGRlZmluaXRpb25PcGVyYXRpb24gPSBtYWluRGVmaW5pdGlvblxuICAgICAgICAgICAgICAgICAgICAub3BlcmF0aW9uO1xuICAgICAgICAgICAgICAgIGRlZmF1bHRPcGVyYXRpb25UeXBlID0gZGVmaW5pdGlvbk9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICA/IGRlZmluaXRpb25PcGVyYXRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbk9wZXJhdGlvbi5zbGljZSgxKVxuICAgICAgICAgICAgICAgICAgICA6ICdRdWVyeSc7XG4gICAgICAgICAgICAgICAgX2EgPSB0aGlzLCBjYWNoZSA9IF9hLmNhY2hlLCBjbGllbnQgPSBfYS5jbGllbnQ7XG4gICAgICAgICAgICAgICAgZXhlY0NvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwOiBmcmFnbWVudE1hcCxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IGNhY2hlOiBjYWNoZSwgY2xpZW50OiBjbGllbnQgfSksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudE1hdGNoZXI6IGZyYWdtZW50TWF0Y2hlcixcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wZXJhdGlvblR5cGU6IGRlZmF1bHRPcGVyYXRpb25UeXBlLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRlZFZhcmlhYmxlczoge30sXG4gICAgICAgICAgICAgICAgICAgIG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnM6IG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVzb2x2ZVNlbGVjdGlvblNldChtYWluRGVmaW5pdGlvbi5zZWxlY3Rpb25TZXQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0ZWRWYXJpYWJsZXM6IGV4ZWNDb250ZXh0LmV4cG9ydGVkVmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICB9KTsgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZVNlbGVjdGlvblNldCA9IGZ1bmN0aW9uIChzZWxlY3Rpb25TZXQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZyYWdtZW50TWFwLCBjb250ZXh0LCB2YXJpYWJsZXMsIHJlc3VsdHNUb01lcmdlLCBleGVjdXRlO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudE1hcCA9IGV4ZWNDb250ZXh0LmZyYWdtZW50TWFwLCBjb250ZXh0ID0gZXhlY0NvbnRleHQuY29udGV4dCwgdmFyaWFibGVzID0gZXhlY0NvbnRleHQudmFyaWFibGVzO1xuICAgICAgICAgICAgICAgIHJlc3VsdHNUb01lcmdlID0gW3Jvb3RWYWx1ZV07XG4gICAgICAgICAgICAgICAgZXhlY3V0ZSA9IGZ1bmN0aW9uIChzZWxlY3Rpb24pIHsgcmV0dXJuIHRzbGliLl9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyYWdtZW50LCB0eXBlQ29uZGl0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXV0aWxpdGllcy5zaG91bGRJbmNsdWRlKHNlbGVjdGlvbiwgdmFyaWFibGVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzRmllbGQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlRmllbGQoc2VsZWN0aW9uLCByb290VmFsdWUsIGV4ZWNDb250ZXh0KS50aGVuKGZ1bmN0aW9uIChmaWVsZFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZFJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzVG9NZXJnZS5wdXNoKChfYSA9IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYVt1dGlsaXRpZXMucmVzdWx0S2V5TmFtZUZyb21GaWVsZChzZWxlY3Rpb24pXSA9IGZpZWxkUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzSW5saW5lRnJhZ21lbnQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gc2VsZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgPSBmcmFnbWVudE1hcFtzZWxlY3Rpb24ubmFtZS52YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGZyYWdtZW50LCBcIk5vIGZyYWdtZW50IG5hbWVkIFwiLmNvbmNhdChzZWxlY3Rpb24ubmFtZS52YWx1ZSkpIDogZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnQsIDkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50ICYmIGZyYWdtZW50LnR5cGVDb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlQ29uZGl0aW9uID0gZnJhZ21lbnQudHlwZUNvbmRpdGlvbi5uYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGVjQ29udGV4dC5mcmFnbWVudE1hdGNoZXIocm9vdFZhbHVlLCB0eXBlQ29uZGl0aW9uLCBjb250ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVzb2x2ZVNlbGVjdGlvblNldChmcmFnbWVudC5zZWxlY3Rpb25TZXQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpLnRoZW4oZnVuY3Rpb24gKGZyYWdtZW50UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1RvTWVyZ2UucHVzaChmcmFnbWVudFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7IH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBQcm9taXNlLmFsbChzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5tYXAoZXhlY3V0ZSkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5tZXJnZURlZXBBcnJheShyZXN1bHRzVG9NZXJnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnJlc29sdmVGaWVsZCA9IGZ1bmN0aW9uIChmaWVsZCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkge1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFyaWFibGVzLCBmaWVsZE5hbWUsIGFsaWFzZWRGaWVsZE5hbWUsIGFsaWFzVXNlZCwgZGVmYXVsdFJlc3VsdCwgcmVzdWx0UHJvbWlzZSwgcmVzb2x2ZXJUeXBlLCByZXNvbHZlck1hcCwgcmVzb2x2ZTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzID0gZXhlY0NvbnRleHQudmFyaWFibGVzO1xuICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IGZpZWxkLm5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgYWxpYXNlZEZpZWxkTmFtZSA9IHV0aWxpdGllcy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkKGZpZWxkKTtcbiAgICAgICAgICAgICAgICBhbGlhc1VzZWQgPSBmaWVsZE5hbWUgIT09IGFsaWFzZWRGaWVsZE5hbWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdFJlc3VsdCA9IHJvb3RWYWx1ZVthbGlhc2VkRmllbGROYW1lXSB8fCByb290VmFsdWVbZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICByZXN1bHRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGRlZmF1bHRSZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmICghZXhlY0NvbnRleHQub25seVJ1bkZvcmNlZFJlc29sdmVycyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3VsZEZvcmNlUmVzb2x2ZXJzKGZpZWxkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlclR5cGUgPSByb290VmFsdWUuX190eXBlbmFtZSB8fCBleGVjQ29udGV4dC5kZWZhdWx0T3BlcmF0aW9uVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJNYXAgPSB0aGlzLnJlc29sdmVycyAmJiB0aGlzLnJlc29sdmVyc1tyZXNvbHZlclR5cGVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZXJNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUgPSByZXNvbHZlck1hcFthbGlhc1VzZWQgPyBmaWVsZE5hbWUgOiBhbGlhc2VkRmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjYWNoZS5jYWNoZVNsb3Qud2l0aFZhbHVlKHRoaXMuY2FjaGUsIHJlc29sdmUsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlsaXRpZXMuYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkKGZpZWxkLCB2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjQ29udGV4dC5jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZpZWxkOiBmaWVsZCwgZnJhZ21lbnRNYXA6IGV4ZWNDb250ZXh0LmZyYWdtZW50TWFwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgcmVzdWx0UHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgeyByZXN1bHQgPSBkZWZhdWx0UmVzdWx0OyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZGlyZWN0aXZlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpcmVjdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3RpdmUubmFtZS52YWx1ZSA9PT0gJ2V4cG9ydCcgJiYgZGlyZWN0aXZlLmFyZ3VtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJnLm5hbWUudmFsdWUgPT09ICdhcycgJiYgYXJnLnZhbHVlLmtpbmQgPT09ICdTdHJpbmdWYWx1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY0NvbnRleHQuZXhwb3J0ZWRWYXJpYWJsZXNbYXJnLnZhbHVlLnZhbHVlXSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVN1YlNlbGVjdGVkQXJyYXkoZmllbGQsIHJlc3VsdCwgZXhlY0NvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlU2VsZWN0aW9uU2V0KGZpZWxkLnNlbGVjdGlvblNldCwgcmVzdWx0LCBleGVjQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnJlc29sdmVTdWJTZWxlY3RlZEFycmF5ID0gZnVuY3Rpb24gKGZpZWxkLCByZXN1bHQsIGV4ZWNDb250ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHQubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVN1YlNlbGVjdGVkQXJyYXkoZmllbGQsIGl0ZW0sIGV4ZWNDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVNlbGVjdGlvblNldChmaWVsZC5zZWxlY3Rpb25TZXQsIGl0ZW0sIGV4ZWNDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIExvY2FsU3RhdGU7XG59KCkpO1xuXG52YXIgZGVzdHJ1Y3RpdmVNZXRob2RDb3VudHMgPSBuZXcgKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwID8gV2Vha01hcCA6IE1hcCkoKTtcbmZ1bmN0aW9uIHdyYXBEZXN0cnVjdGl2ZUNhY2hlTWV0aG9kKGNhY2hlLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIG9yaWdpbmFsID0gY2FjaGVbbWV0aG9kTmFtZV07XG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhY2hlW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVzdHJ1Y3RpdmVNZXRob2RDb3VudHMuc2V0KGNhY2hlLCAoZGVzdHJ1Y3RpdmVNZXRob2RDb3VudHMuZ2V0KGNhY2hlKSArIDEpICUgMWUxNSk7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBjYW5jZWxOb3RpZnlUaW1lb3V0KGluZm8pIHtcbiAgICBpZiAoaW5mb1tcIm5vdGlmeVRpbWVvdXRcIl0pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGluZm9bXCJub3RpZnlUaW1lb3V0XCJdKTtcbiAgICAgICAgaW5mb1tcIm5vdGlmeVRpbWVvdXRcIl0gPSB2b2lkIDA7XG4gICAgfVxufVxudmFyIFF1ZXJ5SW5mbyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUXVlcnlJbmZvKHF1ZXJ5TWFuYWdlciwgcXVlcnlJZCkge1xuICAgICAgICBpZiAocXVlcnlJZCA9PT0gdm9pZCAwKSB7IHF1ZXJ5SWQgPSBxdWVyeU1hbmFnZXIuZ2VuZXJhdGVRdWVyeUlkKCk7IH1cbiAgICAgICAgdGhpcy5xdWVyeUlkID0gcXVlcnlJZDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RSZXF1ZXN0SWQgPSAxO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZVF1ZXJ5ID0gbnVsbDtcbiAgICAgICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZSA9IHF1ZXJ5TWFuYWdlci5jYWNoZTtcbiAgICAgICAgaWYgKCFkZXN0cnVjdGl2ZU1ldGhvZENvdW50cy5oYXMoY2FjaGUpKSB7XG4gICAgICAgICAgICBkZXN0cnVjdGl2ZU1ldGhvZENvdW50cy5zZXQoY2FjaGUsIDApO1xuICAgICAgICAgICAgd3JhcERlc3RydWN0aXZlQ2FjaGVNZXRob2QoY2FjaGUsIFwiZXZpY3RcIik7XG4gICAgICAgICAgICB3cmFwRGVzdHJ1Y3RpdmVDYWNoZU1ldGhvZChjYWNoZSwgXCJtb2RpZnlcIik7XG4gICAgICAgICAgICB3cmFwRGVzdHJ1Y3RpdmVDYWNoZU1ldGhvZChjYWNoZSwgXCJyZXNldFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgdmFyIG5ldHdvcmtTdGF0dXMgPSBxdWVyeS5uZXR3b3JrU3RhdHVzIHx8IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5sb2FkaW5nO1xuICAgICAgICBpZiAodGhpcy52YXJpYWJsZXMgJiZcbiAgICAgICAgICAgIHRoaXMubmV0d29ya1N0YXR1cyAhPT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmcgJiZcbiAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbCh0aGlzLnZhcmlhYmxlcywgcXVlcnkudmFyaWFibGVzKSkge1xuICAgICAgICAgICAgbmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5zZXRWYXJpYWJsZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlcXVhbGl0eS5lcXVhbChxdWVyeS52YXJpYWJsZXMsIHRoaXMudmFyaWFibGVzKSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0RGlmZiA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgICAgIGRvY3VtZW50OiBxdWVyeS5kb2N1bWVudCxcbiAgICAgICAgICAgIHZhcmlhYmxlczogcXVlcnkudmFyaWFibGVzLFxuICAgICAgICAgICAgbmV0d29ya0Vycm9yOiBudWxsLFxuICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogdGhpcy5ncmFwaFFMRXJyb3JzIHx8IFtdLFxuICAgICAgICAgICAgbmV0d29ya1N0YXR1czogbmV0d29ya1N0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChxdWVyeS5vYnNlcnZhYmxlUXVlcnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0T2JzZXJ2YWJsZVF1ZXJ5KHF1ZXJ5Lm9ic2VydmFibGVRdWVyeSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXJ5Lmxhc3RSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFJlcXVlc3RJZCA9IHF1ZXJ5Lmxhc3RSZXF1ZXN0SWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5jZWxOb3RpZnlUaW1lb3V0KHRoaXMpO1xuICAgICAgICB0aGlzLmxhc3REaWZmID0gdm9pZCAwO1xuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLmdldERpZmYgPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZXMgPT09IHZvaWQgMCkgeyB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlczsgfVxuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMuZ2V0RGlmZk9wdGlvbnModmFyaWFibGVzKTtcbiAgICAgICAgaWYgKHRoaXMubGFzdERpZmYgJiYgZXF1YWxpdHkuZXF1YWwob3B0aW9ucywgdGhpcy5sYXN0RGlmZi5vcHRpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFzdERpZmYuZGlmZjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVdhdGNoKHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzKTtcbiAgICAgICAgdmFyIG9xID0gdGhpcy5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgIGlmIChvcSAmJiBvcS5vcHRpb25zLmZldGNoUG9saWN5ID09PSBcIm5vLWNhY2hlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGNvbXBsZXRlOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaWZmID0gdGhpcy5jYWNoZS5kaWZmKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhc3REaWZmKGRpZmYsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gZGlmZjtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUudXBkYXRlTGFzdERpZmYgPSBmdW5jdGlvbiAoZGlmZiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmxhc3REaWZmID0gZGlmZiA/IHtcbiAgICAgICAgICAgIGRpZmY6IGRpZmYsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHRoaXMuZ2V0RGlmZk9wdGlvbnMoKSxcbiAgICAgICAgfSA6IHZvaWQgMDtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuZ2V0RGlmZk9wdGlvbnMgPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzOyB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBxdWVyeTogdGhpcy5kb2N1bWVudCxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICBvcHRpbWlzdGljOiB0cnVlLFxuICAgICAgICAgICAgY2Fub25pemVSZXN1bHRzOiAoX2EgPSB0aGlzLm9ic2VydmFibGVRdWVyeSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9wdGlvbnMuY2Fub25pemVSZXN1bHRzLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5zZXREaWZmID0gZnVuY3Rpb24gKGRpZmYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9sZERpZmYgPSB0aGlzLmxhc3REaWZmICYmIHRoaXMubGFzdERpZmYuZGlmZjtcbiAgICAgICAgdGhpcy51cGRhdGVMYXN0RGlmZihkaWZmKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpcnR5ICYmXG4gICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwob2xkRGlmZiAmJiBvbGREaWZmLnJlc3VsdCwgZGlmZiAmJiBkaWZmLnJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vdGlmeVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm5vdGlmeSgpOyB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5zZXRPYnNlcnZhYmxlUXVlcnkgPSBmdW5jdGlvbiAob3EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG9xID09PSB0aGlzLm9ic2VydmFibGVRdWVyeSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMub3FMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuZGVsZXRlKHRoaXMub3FMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlUXVlcnkgPSBvcTtcbiAgICAgICAgaWYgKG9xKSB7XG4gICAgICAgICAgICBvcVtcInF1ZXJ5SW5mb1wiXSA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5hZGQodGhpcy5vcUxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5nZXREaWZmKCkuZnJvbU9wdGltaXN0aWNUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBvcVtcIm9ic2VydmVcIl0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9xLnJlb2JzZXJ2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMub3FMaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNhbmNlbE5vdGlmeVRpbWVvdXQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZE5vdGlmeSgpKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoX3RoaXMpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnNob3VsZE5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpcnR5IHx8ICF0aGlzLmxpc3RlbmVycy5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodCh0aGlzLm5ldHdvcmtTdGF0dXMpICYmXG4gICAgICAgICAgICB0aGlzLm9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICAgICAgdmFyIGZldGNoUG9saWN5ID0gdGhpcy5vYnNlcnZhYmxlUXVlcnkub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgICAgIGlmIChmZXRjaFBvbGljeSAhPT0gXCJjYWNoZS1vbmx5XCIgJiZcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSAhPT0gXCJjYWNoZS1hbmQtbmV0d29ya1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCA9IFF1ZXJ5SW5mby5wcm90b3R5cGUuY2FuY2VsO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViLnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgICAgICAgICAgdmFyIG9xID0gdGhpcy5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgICAgICBpZiAob3EpXG4gICAgICAgICAgICAgICAgb3Euc3RvcFBvbGxpbmcoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS51cGRhdGVXYXRjaCA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzOyB9XG4gICAgICAgIHZhciBvcSA9IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICBpZiAob3EgJiYgb3Eub3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gXCJuby1jYWNoZVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdhdGNoT3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLmdldERpZmZPcHRpb25zKHZhcmlhYmxlcykpLCB7IHdhdGNoZXI6IHRoaXMsIGNhbGxiYWNrOiBmdW5jdGlvbiAoZGlmZikgeyByZXR1cm4gX3RoaXMuc2V0RGlmZihkaWZmKTsgfSB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RXYXRjaCB8fFxuICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKHdhdGNoT3B0aW9ucywgdGhpcy5sYXN0V2F0Y2gpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwgPSB0aGlzLmNhY2hlLndhdGNoKHRoaXMubGFzdFdhdGNoID0gd2F0Y2hPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5yZXNldExhc3RXcml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYXN0V3JpdGUgPSB2b2lkIDA7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnNob3VsZFdyaXRlID0gZnVuY3Rpb24gKHJlc3VsdCwgdmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBsYXN0V3JpdGUgPSB0aGlzLmxhc3RXcml0ZTtcbiAgICAgICAgcmV0dXJuICEobGFzdFdyaXRlICYmXG4gICAgICAgICAgICBsYXN0V3JpdGUuZG1Db3VudCA9PT0gZGVzdHJ1Y3RpdmVNZXRob2RDb3VudHMuZ2V0KHRoaXMuY2FjaGUpICYmXG4gICAgICAgICAgICBlcXVhbGl0eS5lcXVhbCh2YXJpYWJsZXMsIGxhc3RXcml0ZS52YXJpYWJsZXMpICYmXG4gICAgICAgICAgICBlcXVhbGl0eS5lcXVhbChyZXN1bHQuZGF0YSwgbGFzdFdyaXRlLnJlc3VsdC5kYXRhKSk7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLm1hcmtSZXN1bHQgPSBmdW5jdGlvbiAocmVzdWx0LCBvcHRpb25zLCBjYWNoZVdyaXRlQmVoYXZpb3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5ncmFwaFFMRXJyb3JzID0gdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShyZXN1bHQuZXJyb3JzKSA/IHJlc3VsdC5lcnJvcnMgOiBbXTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICBpZiAob3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ25vLWNhY2hlJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMYXN0RGlmZih7IHJlc3VsdDogcmVzdWx0LmRhdGEsIGNvbXBsZXRlOiB0cnVlIH0sIHRoaXMuZ2V0RGlmZk9wdGlvbnMob3B0aW9ucy52YXJpYWJsZXMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjYWNoZVdyaXRlQmVoYXZpb3IgIT09IDApIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRXcml0ZVJlc3VsdChyZXN1bHQsIG9wdGlvbnMuZXJyb3JQb2xpY3kpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wZXJmb3JtVHJhbnNhY3Rpb24oZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zaG91bGRXcml0ZShyZXN1bHQsIG9wdGlvbnMudmFyaWFibGVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IF90aGlzLmRvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcndyaXRlOiBjYWNoZVdyaXRlQmVoYXZpb3IgPT09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxhc3RXcml0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRtQ291bnQ6IGRlc3RydWN0aXZlTWV0aG9kQ291bnRzLmdldChfdGhpcy5jYWNoZSksXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmxhc3REaWZmICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFzdERpZmYuZGlmZi5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gX3RoaXMubGFzdERpZmYuZGlmZi5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaWZmT3B0aW9ucyA9IF90aGlzLmdldERpZmZPcHRpb25zKG9wdGlvbnMudmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpZmYgPSBjYWNoZS5kaWZmKGRpZmZPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5zdG9wcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVXYXRjaChvcHRpb25zLnZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlTGFzdERpZmYoZGlmZiwgZGlmZk9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSBkaWZmLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0V3JpdGUgPSB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUubWFya1JlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5ldHdvcmtFcnJvciA9IG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVhZHk7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLm1hcmtFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLm5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMuZXJyb3I7XG4gICAgICAgIHRoaXMubGFzdFdyaXRlID0gdm9pZCAwO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIGlmIChlcnJvci5ncmFwaFFMRXJyb3JzKSB7XG4gICAgICAgICAgICB0aGlzLmdyYXBoUUxFcnJvcnMgPSBlcnJvci5ncmFwaFFMRXJyb3JzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvci5uZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMubmV0d29ya0Vycm9yID0gZXJyb3IubmV0d29ya0Vycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9O1xuICAgIHJldHVybiBRdWVyeUluZm87XG59KCkpO1xuZnVuY3Rpb24gc2hvdWxkV3JpdGVSZXN1bHQocmVzdWx0LCBlcnJvclBvbGljeSkge1xuICAgIGlmIChlcnJvclBvbGljeSA9PT0gdm9pZCAwKSB7IGVycm9yUG9saWN5ID0gXCJub25lXCI7IH1cbiAgICB2YXIgaWdub3JlRXJyb3JzID0gZXJyb3JQb2xpY3kgPT09IFwiaWdub3JlXCIgfHxcbiAgICAgICAgZXJyb3JQb2xpY3kgPT09IFwiYWxsXCI7XG4gICAgdmFyIHdyaXRlV2l0aEVycm9ycyA9ICF1dGlsaXRpZXMuZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHJlc3VsdCk7XG4gICAgaWYgKCF3cml0ZVdpdGhFcnJvcnMgJiYgaWdub3JlRXJyb3JzICYmIHJlc3VsdC5kYXRhKSB7XG4gICAgICAgIHdyaXRlV2l0aEVycm9ycyA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZVdpdGhFcnJvcnM7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUXVlcnlNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWVyeU1hbmFnZXIoX2EpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gX2EuY2FjaGUsIGxpbmsgPSBfYS5saW5rLCBfYiA9IF9hLnF1ZXJ5RGVkdXBsaWNhdGlvbiwgcXVlcnlEZWR1cGxpY2F0aW9uID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsIG9uQnJvYWRjYXN0ID0gX2Eub25Ccm9hZGNhc3QsIF9jID0gX2Euc3NyTW9kZSwgc3NyTW9kZSA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLCBfZCA9IF9hLmNsaWVudEF3YXJlbmVzcywgY2xpZW50QXdhcmVuZXNzID0gX2QgPT09IHZvaWQgMCA/IHt9IDogX2QsIGxvY2FsU3RhdGUgPSBfYS5sb2NhbFN0YXRlLCBhc3N1bWVJbW11dGFibGVSZXN1bHRzID0gX2EuYXNzdW1lSW1tdXRhYmxlUmVzdWx0cztcbiAgICAgICAgdGhpcy5jbGllbnRBd2FyZW5lc3MgPSB7fTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmZldGNoQ2FuY2VsRm5zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUNhY2hlID0gbmV3ICh1dGlsaXRpZXMuY2FuVXNlV2Vha01hcCA/IFdlYWtNYXAgOiBNYXApKCk7XG4gICAgICAgIHRoaXMucXVlcnlJZENvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLnJlcXVlc3RJZENvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLm11dGF0aW9uSWRDb3VudGVyID0gMTtcbiAgICAgICAgdGhpcy5pbkZsaWdodExpbmtPYnNlcnZhYmxlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgICAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICAgICAgICB0aGlzLnF1ZXJ5RGVkdXBsaWNhdGlvbiA9IHF1ZXJ5RGVkdXBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5jbGllbnRBd2FyZW5lc3MgPSBjbGllbnRBd2FyZW5lc3M7XG4gICAgICAgIHRoaXMubG9jYWxTdGF0ZSA9IGxvY2FsU3RhdGUgfHwgbmV3IExvY2FsU3RhdGUoeyBjYWNoZTogY2FjaGUgfSk7XG4gICAgICAgIHRoaXMuc3NyTW9kZSA9IHNzck1vZGU7XG4gICAgICAgIHRoaXMuYXNzdW1lSW1tdXRhYmxlUmVzdWx0cyA9ICEhYXNzdW1lSW1tdXRhYmxlUmVzdWx0cztcbiAgICAgICAgaWYgKCh0aGlzLm9uQnJvYWRjYXN0ID0gb25Ccm9hZGNhc3QpKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uU3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9pbmZvLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wUXVlcnlOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FuY2VsUGVuZGluZ0ZldGNoZXMoX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKCdRdWVyeU1hbmFnZXIgc3RvcHBlZCB3aGlsZSBxdWVyeSB3YXMgaW4gZmxpZ2h0JykgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcigxMSkpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5jYW5jZWxQZW5kaW5nRmV0Y2hlcyA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLmZldGNoQ2FuY2VsRm5zLmZvckVhY2goZnVuY3Rpb24gKGNhbmNlbCkgeyByZXR1cm4gY2FuY2VsKGVycm9yKTsgfSk7XG4gICAgICAgIHRoaXMuZmV0Y2hDYW5jZWxGbnMuY2xlYXIoKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUubXV0YXRlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBtdXRhdGlvbiA9IF9hLm11dGF0aW9uLCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIG9wdGltaXN0aWNSZXNwb25zZSA9IF9hLm9wdGltaXN0aWNSZXNwb25zZSwgdXBkYXRlUXVlcmllcyA9IF9hLnVwZGF0ZVF1ZXJpZXMsIF9iID0gX2EucmVmZXRjaFF1ZXJpZXMsIHJlZmV0Y2hRdWVyaWVzID0gX2IgPT09IHZvaWQgMCA/IFtdIDogX2IsIF9jID0gX2EuYXdhaXRSZWZldGNoUXVlcmllcywgYXdhaXRSZWZldGNoUXVlcmllcyA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLCB1cGRhdGVXaXRoUHJveHlGbiA9IF9hLnVwZGF0ZSwgb25RdWVyeVVwZGF0ZWQgPSBfYS5vblF1ZXJ5VXBkYXRlZCwgX2QgPSBfYS5lcnJvclBvbGljeSwgZXJyb3JQb2xpY3kgPSBfZCA9PT0gdm9pZCAwID8gJ25vbmUnIDogX2QsIF9lID0gX2EuZmV0Y2hQb2xpY3ksIGZldGNoUG9saWN5ID0gX2UgPT09IHZvaWQgMCA/ICduZXR3b3JrLW9ubHknIDogX2UsIGtlZXBSb290RmllbGRzID0gX2Eua2VlcFJvb3RGaWVsZHMsIGNvbnRleHQgPSBfYS5jb250ZXh0O1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbXV0YXRpb25JZCwgbXV0YXRpb25TdG9yZVZhbHVlLCBzZWxmO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2YubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG11dGF0aW9uLCAnbXV0YXRpb24gb3B0aW9uIGlzIHJlcXVpcmVkLiBZb3UgbXVzdCBzcGVjaWZ5IHlvdXIgR3JhcGhRTCBkb2N1bWVudCBpbiB0aGUgbXV0YXRpb24gb3B0aW9uLicpIDogZ2xvYmFscy5pbnZhcmlhbnQobXV0YXRpb24sIDEyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChmZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ25vLWNhY2hlJywgXCJNdXRhdGlvbnMgc3VwcG9ydCBvbmx5ICduZXR3b3JrLW9ubHknIG9yICduby1jYWNoZScgZmV0Y2hQb2xpY3kgc3RyaW5ncy4gVGhlIGRlZmF1bHQgYG5ldHdvcmstb25seWAgYmVoYXZpb3IgYXV0b21hdGljYWxseSB3cml0ZXMgbXV0YXRpb24gcmVzdWx0cyB0byB0aGUgY2FjaGUuIFBhc3NpbmcgYG5vLWNhY2hlYCBza2lwcyB0aGUgY2FjaGUgd3JpdGUuXCIpIDogZ2xvYmFscy5pbnZhcmlhbnQoZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3kgPT09ICduby1jYWNoZScsIDEzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uSWQgPSB0aGlzLmdlbmVyYXRlTXV0YXRpb25JZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb24gPSB0aGlzLnRyYW5zZm9ybShtdXRhdGlvbikuZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhtdXRhdGlvbiwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy50cmFuc2Zvcm0obXV0YXRpb24pLmhhc0NsaWVudEV4cG9ydHMpIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMubG9jYWxTdGF0ZS5hZGRFeHBvcnRlZFZhcmlhYmxlcyhtdXRhdGlvbiwgdmFyaWFibGVzLCBjb250ZXh0KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcyA9IChfZi5zZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2YubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblN0b3JlVmFsdWUgPSB0aGlzLm11dGF0aW9uU3RvcmUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5tdXRhdGlvblN0b3JlW211dGF0aW9uSWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbjogbXV0YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpbWlzdGljUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmtNdXRhdGlvbk9wdGltaXN0aWMob3B0aW1pc3RpY1Jlc3BvbnNlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uSWQ6IG11dGF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBtdXRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiBmZXRjaFBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JQb2xpY3k6IGVycm9yUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVRdWVyaWVzOiB1cGRhdGVRdWVyaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZVdpdGhQcm94eUZuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWVwUm9vdEZpZWxkczoga2VlcFJvb3RGaWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlsaXRpZXMuYXN5bmNNYXAoc2VsZi5nZXRPYnNlcnZhYmxlRnJvbUxpbmsobXV0YXRpb24sIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyBvcHRpbWlzdGljUmVzcG9uc2U6IG9wdGltaXN0aWNSZXNwb25zZSB9KSwgdmFyaWFibGVzLCBmYWxzZSksIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHJlc3VsdCkgJiYgZXJyb3JQb2xpY3kgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBlcnJvcnMuQXBvbGxvRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaFFMRXJyb3JzOiByZXN1bHQuZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uU3RvcmVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uU3RvcmVWYWx1ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25TdG9yZVZhbHVlLmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZVJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHt9LCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWZldGNoUXVlcmllcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXMgPSByZWZldGNoUXVlcmllcyhzdG9yZVJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JQb2xpY3kgPT09ICdpZ25vcmUnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbGl0aWVzLmdyYXBoUUxSZXN1bHRIYXNFcnJvcihzdG9yZVJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RvcmVSZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYubWFya011dGF0aW9uUmVzdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbklkOiBtdXRhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogc3RvcmVSZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IG11dGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiBmZXRjaFBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvclBvbGljeTogZXJyb3JQb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZVdpdGhQcm94eUZuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXJpZXM6IHVwZGF0ZVF1ZXJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRSZWZldGNoUXVlcmllczogYXdhaXRSZWZldGNoUXVlcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogcmVmZXRjaFF1ZXJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlT3B0aW1pc3RpYzogb3B0aW1pc3RpY1Jlc3BvbnNlID8gbXV0YXRpb25JZCA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblF1ZXJ5VXBkYXRlZDogb25RdWVyeVVwZGF0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2VlcFJvb3RGaWVsZHM6IGtlZXBSb290RmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoc3RvcmVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHN0b3JlUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvblN0b3JlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25TdG9yZVZhbHVlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25TdG9yZVZhbHVlLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW1pc3RpY1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FjaGUucmVtb3ZlT3B0aW1pc3RpYyhtdXRhdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyciBpbnN0YW5jZW9mIGVycm9ycy5BcG9sbG9FcnJvciA/IGVyciA6IG5ldyBlcnJvcnMuQXBvbGxvRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5tYXJrTXV0YXRpb25SZXN1bHQgPSBmdW5jdGlvbiAobXV0YXRpb24sIGNhY2hlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChjYWNoZSA9PT0gdm9pZCAwKSB7IGNhY2hlID0gdGhpcy5jYWNoZTsgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gbXV0YXRpb24ucmVzdWx0O1xuICAgICAgICB2YXIgY2FjaGVXcml0ZXMgPSBbXTtcbiAgICAgICAgdmFyIHNraXBDYWNoZSA9IG11dGF0aW9uLmZldGNoUG9saWN5ID09PSBcIm5vLWNhY2hlXCI7XG4gICAgICAgIGlmICghc2tpcENhY2hlICYmIHNob3VsZFdyaXRlUmVzdWx0KHJlc3VsdCwgbXV0YXRpb24uZXJyb3JQb2xpY3kpKSB7XG4gICAgICAgICAgICBjYWNoZVdyaXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdC5kYXRhLFxuICAgICAgICAgICAgICAgIGRhdGFJZDogJ1JPT1RfTVVUQVRJT04nLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBtdXRhdGlvbi5kb2N1bWVudCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG11dGF0aW9uLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHVwZGF0ZVF1ZXJpZXNfMSA9IG11dGF0aW9uLnVwZGF0ZVF1ZXJpZXM7XG4gICAgICAgICAgICBpZiAodXBkYXRlUXVlcmllc18xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9hLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlUXVlcnkgPSBfYS5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBxdWVyeU5hbWUgPSBvYnNlcnZhYmxlUXVlcnkgJiYgb2JzZXJ2YWJsZVF1ZXJ5LnF1ZXJ5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFxdWVyeU5hbWUgfHwgIWhhc093blByb3BlcnR5LmNhbGwodXBkYXRlUXVlcmllc18xLCBxdWVyeU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZXIgPSB1cGRhdGVRdWVyaWVzXzFbcXVlcnlOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9iID0gX3RoaXMucXVlcmllcy5nZXQocXVlcnlJZCksIGRvY3VtZW50ID0gX2IuZG9jdW1lbnQsIHZhcmlhYmxlcyA9IF9iLnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jID0gY2FjaGUuZGlmZih7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW1pc3RpYzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pLCBjdXJyZW50UXVlcnlSZXN1bHQgPSBfYy5yZXN1bHQsIGNvbXBsZXRlID0gX2MuY29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZSAmJiBjdXJyZW50UXVlcnlSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXh0UXVlcnlSZXN1bHQgPSB1cGRhdGVyKGN1cnJlbnRRdWVyeVJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uUmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lOiBkb2N1bWVudCAmJiB1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uTmFtZShkb2N1bWVudCkgfHwgdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UXVlcnlSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVdyaXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBuZXh0UXVlcnlSZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJZDogJ1JPT1RfUVVFUlknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhY2hlV3JpdGVzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgIG11dGF0aW9uLnJlZmV0Y2hRdWVyaWVzIHx8XG4gICAgICAgICAgICBtdXRhdGlvbi51cGRhdGUgfHxcbiAgICAgICAgICAgIG11dGF0aW9uLm9uUXVlcnlVcGRhdGVkIHx8XG4gICAgICAgICAgICBtdXRhdGlvbi5yZW1vdmVPcHRpbWlzdGljKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0c18xID0gW107XG4gICAgICAgICAgICB0aGlzLnJlZmV0Y2hRdWVyaWVzKHtcbiAgICAgICAgICAgICAgICB1cGRhdGVDYWNoZTogZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2tpcENhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVdyaXRlcy5mb3JFYWNoKGZ1bmN0aW9uICh3cml0ZSkgeyByZXR1cm4gY2FjaGUud3JpdGUod3JpdGUpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlID0gbXV0YXRpb24udXBkYXRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNraXBDYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaWZmID0gY2FjaGUuZGlmZih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIlJPT1RfTVVUQVRJT05cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IF90aGlzLnRyYW5zZm9ybShtdXRhdGlvbi5kb2N1bWVudCkuYXNRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBtdXRhdGlvbi52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgcmVzdWx0KSwgeyBkYXRhOiBkaWZmLnJlc3VsdCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUoY2FjaGUsIHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IG11dGF0aW9uLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBtdXRhdGlvbi52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNraXBDYWNoZSAmJiAhbXV0YXRpb24ua2VlcFJvb3RGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLm1vZGlmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdST09UX01VVEFUSU9OJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IGZ1bmN0aW9uICh2YWx1ZSwgX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IF9hLmZpZWxkTmFtZSwgREVMRVRFID0gX2EuREVMRVRFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmllbGROYW1lID09PSBcIl9fdHlwZW5hbWVcIiA/IHZhbHVlIDogREVMRVRFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogbXV0YXRpb24ucmVmZXRjaFF1ZXJpZXMsXG4gICAgICAgICAgICAgICAgb3B0aW1pc3RpYzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVtb3ZlT3B0aW1pc3RpYzogbXV0YXRpb24ucmVtb3ZlT3B0aW1pc3RpYyxcbiAgICAgICAgICAgICAgICBvblF1ZXJ5VXBkYXRlZDogbXV0YXRpb24ub25RdWVyeVVwZGF0ZWQgfHwgbnVsbCxcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gcmVzdWx0c18xLnB1c2gocmVzdWx0KTsgfSk7XG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYXdhaXRSZWZldGNoUXVlcmllcyB8fCBtdXRhdGlvbi5vblF1ZXJ5VXBkYXRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzXzEpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzdWx0OyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLm1hcmtNdXRhdGlvbk9wdGltaXN0aWMgPSBmdW5jdGlvbiAob3B0aW1pc3RpY1Jlc3BvbnNlLCBtdXRhdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGF0YSA9IHR5cGVvZiBvcHRpbWlzdGljUmVzcG9uc2UgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBvcHRpbWlzdGljUmVzcG9uc2UobXV0YXRpb24udmFyaWFibGVzKVxuICAgICAgICAgICAgOiBvcHRpbWlzdGljUmVzcG9uc2U7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnJlY29yZE9wdGltaXN0aWNUcmFuc2FjdGlvbihmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubWFya011dGF0aW9uUmVzdWx0KHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBtdXRhdGlvbiksIHsgcmVzdWx0OiB7IGRhdGE6IGRhdGEgfSB9KSwgY2FjaGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG11dGF0aW9uLm11dGF0aW9uSWQpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5mZXRjaFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5SWQsIG9wdGlvbnMsIG5ldHdvcmtTdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hRdWVyeU9ic2VydmFibGUocXVlcnlJZCwgb3B0aW9ucywgbmV0d29ya1N0YXR1cykucHJvbWlzZTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0UXVlcnlTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0b3JlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKGluZm8sIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgIHN0b3JlW3F1ZXJ5SWRdID0ge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogaW5mby52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogaW5mby5uZXR3b3JrU3RhdHVzLFxuICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvcjogaW5mby5uZXR3b3JrRXJyb3IsXG4gICAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogaW5mby5ncmFwaFFMRXJyb3JzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucmVzZXRFcnJvcnMgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB2YXIgcXVlcnlJbmZvID0gdGhpcy5xdWVyaWVzLmdldChxdWVyeUlkKTtcbiAgICAgICAgaWYgKHF1ZXJ5SW5mbykge1xuICAgICAgICAgICAgcXVlcnlJbmZvLm5ldHdvcmtFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHF1ZXJ5SW5mby5ncmFwaFFMRXJyb3JzID0gW107XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHZhciB0cmFuc2Zvcm1DYWNoZSA9IHRoaXMudHJhbnNmb3JtQ2FjaGU7XG4gICAgICAgIGlmICghdHJhbnNmb3JtQ2FjaGUuaGFzKGRvY3VtZW50KSkge1xuICAgICAgICAgICAgdmFyIHRyYW5zZm9ybWVkID0gdGhpcy5jYWNoZS50cmFuc2Zvcm1Eb2N1bWVudChkb2N1bWVudCk7XG4gICAgICAgICAgICB2YXIgZm9yTGluayA9IHV0aWxpdGllcy5yZW1vdmVDb25uZWN0aW9uRGlyZWN0aXZlRnJvbURvY3VtZW50KHRoaXMuY2FjaGUudHJhbnNmb3JtRm9yTGluayh0cmFuc2Zvcm1lZCkpO1xuICAgICAgICAgICAgdmFyIGNsaWVudFF1ZXJ5ID0gdGhpcy5sb2NhbFN0YXRlLmNsaWVudFF1ZXJ5KHRyYW5zZm9ybWVkKTtcbiAgICAgICAgICAgIHZhciBzZXJ2ZXJRdWVyeSA9IGZvckxpbmsgJiYgdGhpcy5sb2NhbFN0YXRlLnNlcnZlclF1ZXJ5KGZvckxpbmspO1xuICAgICAgICAgICAgdmFyIGNhY2hlRW50cnlfMSA9IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogdHJhbnNmb3JtZWQsXG4gICAgICAgICAgICAgICAgaGFzQ2xpZW50RXhwb3J0czogdXRpbGl0aWVzLmhhc0NsaWVudEV4cG9ydHModHJhbnNmb3JtZWQpLFxuICAgICAgICAgICAgICAgIGhhc0ZvcmNlZFJlc29sdmVyczogdGhpcy5sb2NhbFN0YXRlLnNob3VsZEZvcmNlUmVzb2x2ZXJzKHRyYW5zZm9ybWVkKSxcbiAgICAgICAgICAgICAgICBjbGllbnRRdWVyeTogY2xpZW50UXVlcnksXG4gICAgICAgICAgICAgICAgc2VydmVyUXVlcnk6IHNlcnZlclF1ZXJ5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYXJzOiB1dGlsaXRpZXMuZ2V0RGVmYXVsdFZhbHVlcyh1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbih0cmFuc2Zvcm1lZCkpLFxuICAgICAgICAgICAgICAgIGFzUXVlcnk6IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0cmFuc2Zvcm1lZCksIHsgZGVmaW5pdGlvbnM6IHRyYW5zZm9ybWVkLmRlZmluaXRpb25zLm1hcChmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVmLmtpbmQgPT09IFwiT3BlcmF0aW9uRGVmaW5pdGlvblwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmLm9wZXJhdGlvbiAhPT0gXCJxdWVyeVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBkZWYpLCB7IG9wZXJhdGlvbjogXCJxdWVyeVwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgICAgICAgICAgICAgfSkgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgYWRkID0gZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgICAgICAgIGlmIChkb2MgJiYgIXRyYW5zZm9ybUNhY2hlLmhhcyhkb2MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybUNhY2hlLnNldChkb2MsIGNhY2hlRW50cnlfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFkZChkb2N1bWVudCk7XG4gICAgICAgICAgICBhZGQodHJhbnNmb3JtZWQpO1xuICAgICAgICAgICAgYWRkKGNsaWVudFF1ZXJ5KTtcbiAgICAgICAgICAgIGFkZChzZXJ2ZXJRdWVyeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldChkb2N1bWVudCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldFZhcmlhYmxlcyA9IGZ1bmN0aW9uIChkb2N1bWVudCwgdmFyaWFibGVzKSB7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy50cmFuc2Zvcm0oZG9jdW1lbnQpLmRlZmF1bHRWYXJzKSwgdmFyaWFibGVzKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUud2F0Y2hRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgdmFyaWFibGVzOiB0aGlzLmdldFZhcmlhYmxlcyhvcHRpb25zLnF1ZXJ5LCBvcHRpb25zLnZhcmlhYmxlcykgfSk7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5ub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvcHRpb25zLm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBxdWVyeUluZm8gPSBuZXcgUXVlcnlJbmZvKHRoaXMpO1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlUXVlcnkoe1xuICAgICAgICAgICAgcXVlcnlNYW5hZ2VyOiB0aGlzLFxuICAgICAgICAgICAgcXVlcnlJbmZvOiBxdWVyeUluZm8sXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5xdWVyaWVzLnNldChvYnNlcnZhYmxlLnF1ZXJ5SWQsIHF1ZXJ5SW5mbyk7XG4gICAgICAgIHF1ZXJ5SW5mby5pbml0KHtcbiAgICAgICAgICAgIGRvY3VtZW50OiBvcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgb2JzZXJ2YWJsZVF1ZXJ5OiBvYnNlcnZhYmxlLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zLCBxdWVyeUlkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChxdWVyeUlkID09PSB2b2lkIDApIHsgcXVlcnlJZCA9IHRoaXMuZ2VuZXJhdGVRdWVyeUlkKCk7IH1cbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG9wdGlvbnMucXVlcnksICdxdWVyeSBvcHRpb24gaXMgcmVxdWlyZWQuIFlvdSBtdXN0IHNwZWNpZnkgeW91ciBHcmFwaFFMIGRvY3VtZW50ICcgK1xuICAgICAgICAgICAgJ2luIHRoZSBxdWVyeSBvcHRpb24uJykgOiBnbG9iYWxzLmludmFyaWFudChvcHRpb25zLnF1ZXJ5LCAxNCk7XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChvcHRpb25zLnF1ZXJ5LmtpbmQgPT09ICdEb2N1bWVudCcsICdZb3UgbXVzdCB3cmFwIHRoZSBxdWVyeSBzdHJpbmcgaW4gYSBcImdxbFwiIHRhZy4nKSA6IGdsb2JhbHMuaW52YXJpYW50KG9wdGlvbnMucXVlcnkua2luZCA9PT0gJ0RvY3VtZW50JywgMTUpO1xuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoIW9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEsICdyZXR1cm5QYXJ0aWFsRGF0YSBvcHRpb24gb25seSBzdXBwb3J0ZWQgb24gd2F0Y2hRdWVyeS4nKSA6IGdsb2JhbHMuaW52YXJpYW50KCFvcHRpb25zLnJldHVyblBhcnRpYWxEYXRhLCAxNik7XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghb3B0aW9ucy5wb2xsSW50ZXJ2YWwsICdwb2xsSW50ZXJ2YWwgb3B0aW9uIG9ubHkgc3VwcG9ydGVkIG9uIHdhdGNoUXVlcnkuJykgOiBnbG9iYWxzLmludmFyaWFudCghb3B0aW9ucy5wb2xsSW50ZXJ2YWwsIDE3KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hRdWVyeShxdWVyeUlkLCBvcHRpb25zKS5maW5hbGx5KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnN0b3BRdWVyeShxdWVyeUlkKTsgfSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdlbmVyYXRlUXVlcnlJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLnF1ZXJ5SWRDb3VudGVyKyspO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZW5lcmF0ZVJlcXVlc3RJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdElkQ291bnRlcisrO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZW5lcmF0ZU11dGF0aW9uSWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy5tdXRhdGlvbklkQ291bnRlcisrKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RvcFF1ZXJ5SW5TdG9yZSA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHRoaXMuc3RvcFF1ZXJ5SW5TdG9yZU5vQnJvYWRjYXN0KHF1ZXJ5SWQpO1xuICAgICAgICB0aGlzLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RvcFF1ZXJ5SW5TdG9yZU5vQnJvYWRjYXN0ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdmFyIHF1ZXJ5SW5mbyA9IHRoaXMucXVlcmllcy5nZXQocXVlcnlJZCk7XG4gICAgICAgIGlmIChxdWVyeUluZm8pXG4gICAgICAgICAgICBxdWVyeUluZm8uc3RvcCgpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5jbGVhclN0b3JlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge1xuICAgICAgICAgICAgZGlzY2FyZFdhdGNoZXM6IHRydWUsXG4gICAgICAgIH07IH1cbiAgICAgICAgdGhpcy5jYW5jZWxQZW5kaW5nRmV0Y2hlcyhfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoJ1N0b3JlIHJlc2V0IHdoaWxlIHF1ZXJ5IHdhcyBpbiBmbGlnaHQgKG5vdCBjb21wbGV0ZWQgaW4gbGluayBjaGFpbiknKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDE4KSk7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeUluZm8pIHtcbiAgICAgICAgICAgIGlmIChxdWVyeUluZm8ub2JzZXJ2YWJsZVF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMubG9hZGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5tdXRhdGlvblN0b3JlKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uU3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnJlc2V0KG9wdGlvbnMpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRPYnNlcnZhYmxlUXVlcmllcyA9IGZ1bmN0aW9uIChpbmNsdWRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpbmNsdWRlID09PSB2b2lkIDApIHsgaW5jbHVkZSA9IFwiYWN0aXZlXCI7IH1cbiAgICAgICAgdmFyIHF1ZXJpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhciBxdWVyeU5hbWVzQW5kRG9jcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdmFyIGxlZ2FjeVF1ZXJ5T3B0aW9ucyA9IG5ldyBTZXQoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5jbHVkZSkpIHtcbiAgICAgICAgICAgIGluY2x1ZGUuZm9yRWFjaChmdW5jdGlvbiAoZGVzYykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVzYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeU5hbWVzQW5kRG9jcy5zZXQoZGVzYywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1dGlsaXRpZXMuaXNEb2N1bWVudE5vZGUoZGVzYykpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lc0FuZERvY3Muc2V0KF90aGlzLnRyYW5zZm9ybShkZXNjKS5kb2N1bWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KGRlc2MpICYmIGRlc2MucXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVnYWN5UXVlcnlPcHRpb25zLmFkZChkZXNjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoX2EsIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgIHZhciBvcSA9IF9hLm9ic2VydmFibGVRdWVyeSwgZG9jdW1lbnQgPSBfYS5kb2N1bWVudDtcbiAgICAgICAgICAgIGlmIChvcSkge1xuICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlID09PSBcImFsbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJpZXMuc2V0KHF1ZXJ5SWQsIG9xKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlOYW1lID0gb3EucXVlcnlOYW1lLCBmZXRjaFBvbGljeSA9IG9xLm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSBcInN0YW5kYnlcIiB8fFxuICAgICAgICAgICAgICAgICAgICAoaW5jbHVkZSA9PT0gXCJhY3RpdmVcIiAmJiAhb3EuaGFzT2JzZXJ2ZXJzKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluY2x1ZGUgPT09IFwiYWN0aXZlXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgKHF1ZXJ5TmFtZSAmJiBxdWVyeU5hbWVzQW5kRG9jcy5oYXMocXVlcnlOYW1lKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50ICYmIHF1ZXJ5TmFtZXNBbmREb2NzLmhhcyhkb2N1bWVudCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJpZXMuc2V0KHF1ZXJ5SWQsIG9xKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZXNBbmREb2NzLnNldChxdWVyeU5hbWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeU5hbWVzQW5kRG9jcy5zZXQoZG9jdW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsZWdhY3lRdWVyeU9wdGlvbnMuc2l6ZSkge1xuICAgICAgICAgICAgbGVnYWN5UXVlcnlPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlJZCA9IHV0aWxpdGllcy5tYWtlVW5pcXVlSWQoXCJsZWdhY3lPbmVUaW1lUXVlcnlcIik7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5SW5mbyA9IF90aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpLmluaXQoe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogb3B0aW9ucy5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgb3EgPSBuZXcgT2JzZXJ2YWJsZVF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlNYW5hZ2VyOiBfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlJbmZvOiBxdWVyeUluZm8sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBmZXRjaFBvbGljeTogXCJuZXR3b3JrLW9ubHlcIiB9KSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBnbG9iYWxzLmludmFyaWFudChvcS5xdWVyeUlkID09PSBxdWVyeUlkKTtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8uc2V0T2JzZXJ2YWJsZVF1ZXJ5KG9xKTtcbiAgICAgICAgICAgICAgICBxdWVyaWVzLnNldChxdWVyeUlkLCBvcSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19ERVZfXyAmJiBxdWVyeU5hbWVzQW5kRG9jcy5zaXplKSB7XG4gICAgICAgICAgICBxdWVyeU5hbWVzQW5kRG9jcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmNsdWRlZCwgbmFtZU9yRG9jKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbmNsdWRlZCkge1xuICAgICAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJVbmtub3duIHF1ZXJ5IFwiLmNvbmNhdCh0eXBlb2YgbmFtZU9yRG9jID09PSBcInN0cmluZ1wiID8gXCJuYW1lZCBcIiA6IFwiXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShuYW1lT3JEb2MsIG51bGwsIDIpLCBcIiByZXF1ZXN0ZWQgaW4gcmVmZXRjaFF1ZXJpZXMgb3B0aW9ucy5pbmNsdWRlIGFycmF5XCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcmllcztcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzID0gZnVuY3Rpb24gKGluY2x1ZGVTdGFuZGJ5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpbmNsdWRlU3RhbmRieSA9PT0gdm9pZCAwKSB7IGluY2x1ZGVTdGFuZGJ5ID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIG9ic2VydmFibGVRdWVyeVByb21pc2VzID0gW107XG4gICAgICAgIHRoaXMuZ2V0T2JzZXJ2YWJsZVF1ZXJpZXMoaW5jbHVkZVN0YW5kYnkgPyBcImFsbFwiIDogXCJhY3RpdmVcIikuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2YWJsZVF1ZXJ5LCBxdWVyeUlkKSB7XG4gICAgICAgICAgICB2YXIgZmV0Y2hQb2xpY3kgPSBvYnNlcnZhYmxlUXVlcnkub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgICAgIG9ic2VydmFibGVRdWVyeS5yZXNldExhc3RSZXN1bHRzKCk7XG4gICAgICAgICAgICBpZiAoaW5jbHVkZVN0YW5kYnkgfHxcbiAgICAgICAgICAgICAgICAoZmV0Y2hQb2xpY3kgIT09IFwic3RhbmRieVwiICYmXG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5ICE9PSBcImNhY2hlLW9ubHlcIikpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlUXVlcnlQcm9taXNlcy5wdXNoKG9ic2VydmFibGVRdWVyeS5yZWZldGNoKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuZ2V0UXVlcnkocXVlcnlJZCkuc2V0RGlmZihudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob2JzZXJ2YWJsZVF1ZXJ5UHJvbWlzZXMpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zZXRPYnNlcnZhYmxlUXVlcnkgPSBmdW5jdGlvbiAob2JzZXJ2YWJsZVF1ZXJ5KSB7XG4gICAgICAgIHRoaXMuZ2V0UXVlcnkob2JzZXJ2YWJsZVF1ZXJ5LnF1ZXJ5SWQpLnNldE9ic2VydmFibGVRdWVyeShvYnNlcnZhYmxlUXVlcnkpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdGFydEdyYXBoUUxTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHF1ZXJ5ID0gX2EucXVlcnksIGZldGNoUG9saWN5ID0gX2EuZmV0Y2hQb2xpY3ksIGVycm9yUG9saWN5ID0gX2EuZXJyb3JQb2xpY3ksIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgX2IgPSBfYS5jb250ZXh0LCBjb250ZXh0ID0gX2IgPT09IHZvaWQgMCA/IHt9IDogX2I7XG4gICAgICAgIHF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ocXVlcnkpLmRvY3VtZW50O1xuICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhxdWVyeSwgdmFyaWFibGVzKTtcbiAgICAgICAgdmFyIG1ha2VPYnNlcnZhYmxlID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldE9ic2VydmFibGVGcm9tTGluayhxdWVyeSwgY29udGV4dCwgdmFyaWFibGVzKS5tYXAoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChmZXRjaFBvbGljeSAhPT0gJ25vLWNhY2hlJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkV3JpdGVSZXN1bHQocmVzdWx0LCBlcnJvclBvbGljeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNhY2hlLndyaXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSWQ6ICdST09UX1NVQlNDUklQVElPTicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGVycm9ycy5BcG9sbG9FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaFFMRXJyb3JzOiByZXN1bHQuZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0ocXVlcnkpLmhhc0NsaWVudEV4cG9ydHMpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlUHJvbWlzZV8xID0gdGhpcy5sb2NhbFN0YXRlLmFkZEV4cG9ydGVkVmFyaWFibGVzKHF1ZXJ5LCB2YXJpYWJsZXMsIGNvbnRleHQpLnRoZW4obWFrZU9ic2VydmFibGUpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyB1dGlsaXRpZXMuT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ViID0gbnVsbDtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlUHJvbWlzZV8xLnRoZW4oZnVuY3Rpb24gKG9ic2VydmFibGUpIHsgcmV0dXJuIHN1YiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKG9ic2VydmVyKTsgfSwgb2JzZXJ2ZXIuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWIgJiYgc3ViLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFrZU9ic2VydmFibGUodmFyaWFibGVzKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RvcFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5zdG9wUXVlcnlOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3BRdWVyeU5vQnJvYWRjYXN0ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5zdG9wUXVlcnlJblN0b3JlTm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgIHRoaXMucmVtb3ZlUXVlcnkocXVlcnlJZCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlbW92ZVF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5mZXRjaENhbmNlbEZucy5kZWxldGUocXVlcnlJZCk7XG4gICAgICAgIHRoaXMuZ2V0UXVlcnkocXVlcnlJZCkuc3RvcCgpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuZGVsZXRlKHF1ZXJ5SWQpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5icm9hZGNhc3RRdWVyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vbkJyb2FkY2FzdClcbiAgICAgICAgICAgIHRoaXMub25Ccm9hZGNhc3QoKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKGluZm8pIHsgcmV0dXJuIGluZm8ubm90aWZ5KCk7IH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRMb2NhbFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFN0YXRlO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRPYnNlcnZhYmxlRnJvbUxpbmsgPSBmdW5jdGlvbiAocXVlcnksIGNvbnRleHQsIHZhcmlhYmxlcywgZGVkdXBsaWNhdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChkZWR1cGxpY2F0aW9uID09PSB2b2lkIDApIHsgZGVkdXBsaWNhdGlvbiA9IChfYSA9IGNvbnRleHQgPT09IG51bGwgfHwgY29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGV4dC5xdWVyeURlZHVwbGljYXRpb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRoaXMucXVlcnlEZWR1cGxpY2F0aW9uOyB9XG4gICAgICAgIHZhciBvYnNlcnZhYmxlO1xuICAgICAgICB2YXIgc2VydmVyUXVlcnkgPSB0aGlzLnRyYW5zZm9ybShxdWVyeSkuc2VydmVyUXVlcnk7XG4gICAgICAgIGlmIChzZXJ2ZXJRdWVyeSkge1xuICAgICAgICAgICAgdmFyIF9iID0gdGhpcywgaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXNfMSA9IF9iLmluRmxpZ2h0TGlua09ic2VydmFibGVzLCBsaW5rID0gX2IubGluaztcbiAgICAgICAgICAgIHZhciBvcGVyYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHNlcnZlclF1ZXJ5LFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbk5hbWU6IHV0aWxpdGllcy5nZXRPcGVyYXRpb25OYW1lKHNlcnZlclF1ZXJ5KSB8fCB2b2lkIDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogdGhpcy5wcmVwYXJlQ29udGV4dCh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIHsgZm9yY2VGZXRjaDogIWRlZHVwbGljYXRpb24gfSkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnRleHQgPSBvcGVyYXRpb24uY29udGV4dDtcbiAgICAgICAgICAgIGlmIChkZWR1cGxpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ5VmFyaWFibGVzXzEgPSBpbkZsaWdodExpbmtPYnNlcnZhYmxlc18xLmdldChzZXJ2ZXJRdWVyeSkgfHwgbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgIGluRmxpZ2h0TGlua09ic2VydmFibGVzXzEuc2V0KHNlcnZlclF1ZXJ5LCBieVZhcmlhYmxlc18xKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFySnNvbl8xID0gY2FjaGUuY2Fub25pY2FsU3RyaW5naWZ5KHZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IGJ5VmFyaWFibGVzXzEuZ2V0KHZhckpzb25fMSk7XG4gICAgICAgICAgICAgICAgaWYgKCFvYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25jYXN0ID0gbmV3IHV0aWxpdGllcy5Db25jYXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcmUuZXhlY3V0ZShsaW5rLCBvcGVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICBieVZhcmlhYmxlc18xLnNldCh2YXJKc29uXzEsIG9ic2VydmFibGUgPSBjb25jYXN0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uY2FzdC5jbGVhbnVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChieVZhcmlhYmxlc18xLmRlbGV0ZSh2YXJKc29uXzEpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlWYXJpYWJsZXNfMS5zaXplIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluRmxpZ2h0TGlua09ic2VydmFibGVzXzEuZGVsZXRlKHNlcnZlclF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IG5ldyB1dGlsaXRpZXMuQ29uY2FzdChbXG4gICAgICAgICAgICAgICAgICAgIGNvcmUuZXhlY3V0ZShsaW5rLCBvcGVyYXRpb24pXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlID0gbmV3IHV0aWxpdGllcy5Db25jYXN0KFtcbiAgICAgICAgICAgICAgICB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZih7IGRhdGE6IHt9IH0pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLnByZXBhcmVDb250ZXh0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjbGllbnRRdWVyeSA9IHRoaXMudHJhbnNmb3JtKHF1ZXJ5KS5jbGllbnRRdWVyeTtcbiAgICAgICAgaWYgKGNsaWVudFF1ZXJ5KSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlID0gdXRpbGl0aWVzLmFzeW5jTWFwKG9ic2VydmFibGUsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubG9jYWxTdGF0ZS5ydW5SZXNvbHZlcnMoe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogY2xpZW50UXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZVJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRSZXN1bHRzRnJvbUxpbmsgPSBmdW5jdGlvbiAocXVlcnlJbmZvLCBjYWNoZVdyaXRlQmVoYXZpb3IsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3RJZCA9IHF1ZXJ5SW5mby5sYXN0UmVxdWVzdElkID0gdGhpcy5nZW5lcmF0ZVJlcXVlc3RJZCgpO1xuICAgICAgICByZXR1cm4gdXRpbGl0aWVzLmFzeW5jTWFwKHRoaXMuZ2V0T2JzZXJ2YWJsZUZyb21MaW5rKHF1ZXJ5SW5mby5kb2N1bWVudCwgb3B0aW9ucy5jb250ZXh0LCBvcHRpb25zLnZhcmlhYmxlcyksIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHZhciBoYXNFcnJvcnMgPSB1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KHJlc3VsdC5lcnJvcnMpO1xuICAgICAgICAgICAgaWYgKHJlcXVlc3RJZCA+PSBxdWVyeUluZm8ubGFzdFJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNFcnJvcnMgJiYgb3B0aW9ucy5lcnJvclBvbGljeSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgcXVlcnlJbmZvLm1hcmtFcnJvcihuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IHJlc3VsdC5lcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm1hcmtSZXN1bHQocmVzdWx0LCBvcHRpb25zLCBjYWNoZVdyaXRlQmVoYXZpb3IpO1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5tYXJrUmVhZHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhcXIgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogcXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMgfHwgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnJlYWR5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChoYXNFcnJvcnMgJiYgb3B0aW9ucy5lcnJvclBvbGljeSAhPT0gXCJpZ25vcmVcIikge1xuICAgICAgICAgICAgICAgIGFxci5lcnJvcnMgPSByZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFxcjtcbiAgICAgICAgfSwgZnVuY3Rpb24gKG5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gZXJyb3JzLmlzQXBvbGxvRXJyb3IobmV0d29ya0Vycm9yKVxuICAgICAgICAgICAgICAgID8gbmV0d29ya0Vycm9yXG4gICAgICAgICAgICAgICAgOiBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHsgbmV0d29ya0Vycm9yOiBuZXR3b3JrRXJyb3IgfSk7XG4gICAgICAgICAgICBpZiAocmVxdWVzdElkID49IHF1ZXJ5SW5mby5sYXN0UmVxdWVzdElkKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm1hcmtFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmZldGNoUXVlcnlPYnNlcnZhYmxlID0gZnVuY3Rpb24gKHF1ZXJ5SWQsIG9wdGlvbnMsIG5ldHdvcmtTdGF0dXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG5ldHdvcmtTdGF0dXMgPT09IHZvaWQgMCkgeyBuZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmc7IH1cbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ob3B0aW9ucy5xdWVyeSkuZG9jdW1lbnQ7XG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhxdWVyeSwgb3B0aW9ucy52YXJpYWJsZXMpO1xuICAgICAgICB2YXIgcXVlcnlJbmZvID0gdGhpcy5nZXRRdWVyeShxdWVyeUlkKTtcbiAgICAgICAgdmFyIF9hID0gb3B0aW9ucy5mZXRjaFBvbGljeSwgZmV0Y2hQb2xpY3kgPSBfYSA9PT0gdm9pZCAwID8gXCJjYWNoZS1maXJzdFwiIDogX2EsIF9iID0gb3B0aW9ucy5lcnJvclBvbGljeSwgZXJyb3JQb2xpY3kgPSBfYiA9PT0gdm9pZCAwID8gXCJub25lXCIgOiBfYiwgX2MgPSBvcHRpb25zLnJldHVyblBhcnRpYWxEYXRhLCByZXR1cm5QYXJ0aWFsRGF0YSA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLCBfZCA9IG9wdGlvbnMubm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlLCBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UgPSBfZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZCwgX2UgPSBvcHRpb25zLmNvbnRleHQsIGNvbnRleHQgPSBfZSA9PT0gdm9pZCAwID8ge30gOiBfZTtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWQgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGZldGNoUG9saWN5OiBmZXRjaFBvbGljeSxcbiAgICAgICAgICAgIGVycm9yUG9saWN5OiBlcnJvclBvbGljeSxcbiAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiByZXR1cm5QYXJ0aWFsRGF0YSxcbiAgICAgICAgICAgIG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZTogbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBmcm9tVmFyaWFibGVzID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICAgICAgbm9ybWFsaXplZC52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZmV0Y2hRdWVyeUJ5UG9saWN5KHF1ZXJ5SW5mbywgbm9ybWFsaXplZCwgbmV0d29ya1N0YXR1cyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmV0Y2hDYW5jZWxGbnMuc2V0KHF1ZXJ5SWQsIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uY2FzdC5jYW5jZWwocmVhc29uKTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY29uY2FzdCA9IG5ldyB1dGlsaXRpZXMuQ29uY2FzdCh0aGlzLnRyYW5zZm9ybShub3JtYWxpemVkLnF1ZXJ5KS5oYXNDbGllbnRFeHBvcnRzXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxTdGF0ZS5hZGRFeHBvcnRlZFZhcmlhYmxlcyhub3JtYWxpemVkLnF1ZXJ5LCBub3JtYWxpemVkLnZhcmlhYmxlcywgbm9ybWFsaXplZC5jb250ZXh0KS50aGVuKGZyb21WYXJpYWJsZXMpXG4gICAgICAgICAgICA6IGZyb21WYXJpYWJsZXMobm9ybWFsaXplZC52YXJpYWJsZXMpKTtcbiAgICAgICAgY29uY2FzdC5jbGVhbnVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmZldGNoQ2FuY2VsRm5zLmRlbGV0ZShxdWVyeUlkKTtcbiAgICAgICAgICAgIGFwcGx5TmV4dEZldGNoUG9saWN5KG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbmNhc3Q7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlZmV0Y2hRdWVyaWVzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB1cGRhdGVDYWNoZSA9IF9hLnVwZGF0ZUNhY2hlLCBpbmNsdWRlID0gX2EuaW5jbHVkZSwgX2IgPSBfYS5vcHRpbWlzdGljLCBvcHRpbWlzdGljID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsIF9jID0gX2EucmVtb3ZlT3B0aW1pc3RpYywgcmVtb3ZlT3B0aW1pc3RpYyA9IF9jID09PSB2b2lkIDAgPyBvcHRpbWlzdGljID8gdXRpbGl0aWVzLm1ha2VVbmlxdWVJZChcInJlZmV0Y2hRdWVyaWVzXCIpIDogdm9pZCAwIDogX2MsIG9uUXVlcnlVcGRhdGVkID0gX2Eub25RdWVyeVVwZGF0ZWQ7XG4gICAgICAgIHZhciBpbmNsdWRlZFF1ZXJpZXNCeUlkID0gbmV3IE1hcCgpO1xuICAgICAgICBpZiAoaW5jbHVkZSkge1xuICAgICAgICAgICAgdGhpcy5nZXRPYnNlcnZhYmxlUXVlcmllcyhpbmNsdWRlKS5mb3JFYWNoKGZ1bmN0aW9uIChvcSwgcXVlcnlJZCkge1xuICAgICAgICAgICAgICAgIGluY2x1ZGVkUXVlcmllc0J5SWQuc2V0KHF1ZXJ5SWQsIHtcbiAgICAgICAgICAgICAgICAgICAgb3E6IG9xLFxuICAgICAgICAgICAgICAgICAgICBsYXN0RGlmZjogX3RoaXMuZ2V0UXVlcnkocXVlcnlJZCkuZ2V0RGlmZigpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdHMgPSBuZXcgTWFwO1xuICAgICAgICBpZiAodXBkYXRlQ2FjaGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUuYmF0Y2goe1xuICAgICAgICAgICAgICAgIHVwZGF0ZTogdXBkYXRlQ2FjaGUsXG4gICAgICAgICAgICAgICAgb3B0aW1pc3RpYzogb3B0aW1pc3RpYyAmJiByZW1vdmVPcHRpbWlzdGljIHx8IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlbW92ZU9wdGltaXN0aWM6IHJlbW92ZU9wdGltaXN0aWMsXG4gICAgICAgICAgICAgICAgb25XYXRjaFVwZGF0ZWQ6IGZ1bmN0aW9uICh3YXRjaCwgZGlmZiwgbGFzdERpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9xID0gd2F0Y2gud2F0Y2hlciBpbnN0YW5jZW9mIFF1ZXJ5SW5mbyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgd2F0Y2gud2F0Y2hlci5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uUXVlcnlVcGRhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWRRdWVyaWVzQnlJZC5kZWxldGUob3EucXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9uUXVlcnlVcGRhdGVkKG9xLCBkaWZmLCBsYXN0RGlmZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBvcS5yZWZldGNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuc2V0KG9xLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uUXVlcnlVcGRhdGVkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWRRdWVyaWVzQnlJZC5zZXQob3EucXVlcnlJZCwgeyBvcTogb3EsIGxhc3REaWZmOiBsYXN0RGlmZiwgZGlmZjogZGlmZiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5jbHVkZWRRdWVyaWVzQnlJZC5zaXplKSB7XG4gICAgICAgICAgICBpbmNsdWRlZFF1ZXJpZXNCeUlkLmZvckVhY2goZnVuY3Rpb24gKF9hLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9xID0gX2Eub3EsIGxhc3REaWZmID0gX2EubGFzdERpZmYsIGRpZmYgPSBfYS5kaWZmO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKG9uUXVlcnlVcGRhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGlmZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZm8gPSBvcVtcInF1ZXJ5SW5mb1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZmYgPSBpbmZvLmdldERpZmYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBvblF1ZXJ5VXBkYXRlZChvcSwgZGlmZiwgbGFzdERpZmYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIW9uUXVlcnlVcGRhdGVkIHx8IHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBvcS5yZWZldGNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuc2V0KG9xLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocXVlcnlJZC5pbmRleE9mKFwibGVnYWN5T25lVGltZVF1ZXJ5XCIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RvcFF1ZXJ5Tm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbW92ZU9wdGltaXN0aWMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucmVtb3ZlT3B0aW1pc3RpYyhyZW1vdmVPcHRpbWlzdGljKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZmV0Y2hRdWVyeUJ5UG9saWN5ID0gZnVuY3Rpb24gKHF1ZXJ5SW5mbywgX2EsIG5ldHdvcmtTdGF0dXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHF1ZXJ5ID0gX2EucXVlcnksIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgZmV0Y2hQb2xpY3kgPSBfYS5mZXRjaFBvbGljeSwgcmVmZXRjaFdyaXRlUG9saWN5ID0gX2EucmVmZXRjaFdyaXRlUG9saWN5LCBlcnJvclBvbGljeSA9IF9hLmVycm9yUG9saWN5LCByZXR1cm5QYXJ0aWFsRGF0YSA9IF9hLnJldHVyblBhcnRpYWxEYXRhLCBjb250ZXh0ID0gX2EuY29udGV4dCwgbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlID0gX2Eubm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlO1xuICAgICAgICB2YXIgb2xkTmV0d29ya1N0YXR1cyA9IHF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzO1xuICAgICAgICBxdWVyeUluZm8uaW5pdCh7XG4gICAgICAgICAgICBkb2N1bWVudDogcXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcmVhZENhY2hlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcXVlcnlJbmZvLmdldERpZmYodmFyaWFibGVzKTsgfTtcbiAgICAgICAgdmFyIHJlc3VsdHNGcm9tQ2FjaGUgPSBmdW5jdGlvbiAoZGlmZiwgbmV0d29ya1N0YXR1cykge1xuICAgICAgICAgICAgaWYgKG5ldHdvcmtTdGF0dXMgPT09IHZvaWQgMCkgeyBuZXR3b3JrU3RhdHVzID0gcXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMgfHwgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmc7IH1cbiAgICAgICAgICAgIHZhciBkYXRhID0gZGlmZi5yZXN1bHQ7XG4gICAgICAgICAgICBpZiAoX19ERVZfXyAmJlxuICAgICAgICAgICAgICAgICFyZXR1cm5QYXJ0aWFsRGF0YSAmJlxuICAgICAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbChkYXRhLCB7fSkpIHtcbiAgICAgICAgICAgICAgICBsb2dNaXNzaW5nRmllbGRFcnJvcnMoZGlmZi5taXNzaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmcm9tRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZih0c2xpYi5fX2Fzc2lnbih7IGRhdGE6IGRhdGEsIGxvYWRpbmc6IGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodChuZXR3b3JrU3RhdHVzKSwgbmV0d29ya1N0YXR1czogbmV0d29ya1N0YXR1cyB9LCAoZGlmZi5jb21wbGV0ZSA/IG51bGwgOiB7IHBhcnRpYWw6IHRydWUgfSkpKTsgfTtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIF90aGlzLnRyYW5zZm9ybShxdWVyeSkuaGFzRm9yY2VkUmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxvY2FsU3RhdGUucnVuUmVzb2x2ZXJzKHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVSZXN1bHQ6IHsgZGF0YTogZGF0YSB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgb25seVJ1bkZvcmNlZFJlc29sdmVyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNvbHZlZCkgeyByZXR1cm4gZnJvbURhdGEocmVzb2x2ZWQuZGF0YSB8fCB2b2lkIDApOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmcm9tRGF0YShkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNhY2hlV3JpdGVCZWhhdmlvciA9IGZldGNoUG9saWN5ID09PSBcIm5vLWNhY2hlXCIgPyAwIDpcbiAgICAgICAgICAgIChuZXR3b3JrU3RhdHVzID09PSBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVmZXRjaCAmJlxuICAgICAgICAgICAgICAgIHJlZmV0Y2hXcml0ZVBvbGljeSAhPT0gXCJtZXJnZVwiKSA/IDFcbiAgICAgICAgICAgICAgICA6IDI7XG4gICAgICAgIHZhciByZXN1bHRzRnJvbUxpbmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0UmVzdWx0c0Zyb21MaW5rKHF1ZXJ5SW5mbywgY2FjaGVXcml0ZUJlaGF2aW9yLCB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICAgICAgZXJyb3JQb2xpY3k6IGVycm9yUG9saWN5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBzaG91bGROb3RpZnkgPSBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UgJiZcbiAgICAgICAgICAgIHR5cGVvZiBvbGROZXR3b3JrU3RhdHVzID09PSBcIm51bWJlclwiICYmXG4gICAgICAgICAgICBvbGROZXR3b3JrU3RhdHVzICE9PSBuZXR3b3JrU3RhdHVzICYmXG4gICAgICAgICAgICBpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQobmV0d29ya1N0YXR1cyk7XG4gICAgICAgIHN3aXRjaCAoZmV0Y2hQb2xpY3kpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYXNlIFwiY2FjaGUtZmlyc3RcIjoge1xuICAgICAgICAgICAgICAgIHZhciBkaWZmID0gcmVhZENhY2hlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tQ2FjaGUoZGlmZiwgcXVlcnlJbmZvLm1hcmtSZWFkeSgpKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJldHVyblBhcnRpYWxEYXRhIHx8IHNob3VsZE5vdGlmeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShkaWZmKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tTGluaygpLFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNhY2hlLWFuZC1uZXR3b3JrXCI6IHtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IHJlYWRDYWNoZSgpO1xuICAgICAgICAgICAgICAgIGlmIChkaWZmLmNvbXBsZXRlIHx8IHJldHVyblBhcnRpYWxEYXRhIHx8IHNob3VsZE5vdGlmeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShkaWZmKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tTGluaygpLFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNhY2hlLW9ubHlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUNhY2hlKHJlYWRDYWNoZSgpLCBxdWVyeUluZm8ubWFya1JlYWR5KCkpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjYXNlIFwibmV0d29yay1vbmx5XCI6XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZE5vdGlmeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShyZWFkQ2FjaGUoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtyZXN1bHRzRnJvbUxpbmsoKV07XG4gICAgICAgICAgICBjYXNlIFwibm8tY2FjaGVcIjpcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkTm90aWZ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUNhY2hlKHF1ZXJ5SW5mby5nZXREaWZmKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21MaW5rKCksXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbcmVzdWx0c0Zyb21MaW5rKCldO1xuICAgICAgICAgICAgY2FzZSBcInN0YW5kYnlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0UXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICBpZiAocXVlcnlJZCAmJiAhdGhpcy5xdWVyaWVzLmhhcyhxdWVyeUlkKSkge1xuICAgICAgICAgICAgdGhpcy5xdWVyaWVzLnNldChxdWVyeUlkLCBuZXcgUXVlcnlJbmZvKHRoaXMsIHF1ZXJ5SWQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLmdldChxdWVyeUlkKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucHJlcGFyZUNvbnRleHQgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgICAgICB2YXIgbmV3Q29udGV4dCA9IHRoaXMubG9jYWxTdGF0ZS5wcmVwYXJlQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBuZXdDb250ZXh0KSwgeyBjbGllbnRBd2FyZW5lc3M6IHRoaXMuY2xpZW50QXdhcmVuZXNzIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXJ5TWFuYWdlcjtcbn0oKSk7XG5cbnZhciBoYXNTdWdnZXN0ZWREZXZ0b29scyA9IGZhbHNlO1xuZnVuY3Rpb24gbWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5jb21wYWN0KGRlZmF1bHRzLCBvcHRpb25zLCBvcHRpb25zLnZhcmlhYmxlcyAmJiB7XG4gICAgICAgIHZhcmlhYmxlczogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGRlZmF1bHRzLnZhcmlhYmxlcyksIG9wdGlvbnMudmFyaWFibGVzKSxcbiAgICB9KTtcbn1cbnZhciBBcG9sbG9DbGllbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFwb2xsb0NsaWVudChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzID0gW107XG4gICAgICAgIHRoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB2YXIgdXJpID0gb3B0aW9ucy51cmksIGNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscywgaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycywgY2FjaGUgPSBvcHRpb25zLmNhY2hlLCBfYSA9IG9wdGlvbnMuc3NyTW9kZSwgc3NyTW9kZSA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3NyRm9yY2VGZXRjaERlbGF5LCBzc3JGb3JjZUZldGNoRGVsYXkgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLCBfYyA9IG9wdGlvbnMuY29ubmVjdFRvRGV2VG9vbHMsIGNvbm5lY3RUb0RldlRvb2xzID0gX2MgPT09IHZvaWQgMCA/IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAhd2luZG93Ll9fQVBPTExPX0NMSUVOVF9fICYmXG4gICAgICAgICAgICBfX0RFVl9fIDogX2MsIF9kID0gb3B0aW9ucy5xdWVyeURlZHVwbGljYXRpb24sIHF1ZXJ5RGVkdXBsaWNhdGlvbiA9IF9kID09PSB2b2lkIDAgPyB0cnVlIDogX2QsIGRlZmF1bHRPcHRpb25zID0gb3B0aW9ucy5kZWZhdWx0T3B0aW9ucywgX2UgPSBvcHRpb25zLmFzc3VtZUltbXV0YWJsZVJlc3VsdHMsIGFzc3VtZUltbXV0YWJsZVJlc3VsdHMgPSBfZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZSwgcmVzb2x2ZXJzID0gb3B0aW9ucy5yZXNvbHZlcnMsIHR5cGVEZWZzID0gb3B0aW9ucy50eXBlRGVmcywgZnJhZ21lbnRNYXRjaGVyID0gb3B0aW9ucy5mcmFnbWVudE1hdGNoZXIsIGNsaWVudEF3YXJlbmVzc05hbWUgPSBvcHRpb25zLm5hbWUsIGNsaWVudEF3YXJlbmVzc1ZlcnNpb24gPSBvcHRpb25zLnZlcnNpb247XG4gICAgICAgIHZhciBsaW5rID0gb3B0aW9ucy5saW5rO1xuICAgICAgICBpZiAoIWxpbmspIHtcbiAgICAgICAgICAgIGxpbmsgPSB1cmlcbiAgICAgICAgICAgICAgICA/IG5ldyBodHRwLkh0dHBMaW5rKHsgdXJpOiB1cmksIGNyZWRlbnRpYWxzOiBjcmVkZW50aWFscywgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgICAgIDogY29yZS5BcG9sbG9MaW5rLmVtcHR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYWNoZSkge1xuICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiVG8gaW5pdGlhbGl6ZSBBcG9sbG8gQ2xpZW50LCB5b3UgbXVzdCBzcGVjaWZ5IGEgJ2NhY2hlJyBwcm9wZXJ0eSBcIiArXG4gICAgICAgICAgICAgICAgXCJpbiB0aGUgb3B0aW9ucyBvYmplY3QuIFxcblwiICtcbiAgICAgICAgICAgICAgICBcIkZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlzaXQ6IGh0dHBzOi8vZ28uYXBvbGxvLmRldi9jL2RvY3NcIikgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig3KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgICAgIHRoaXMuZGlzYWJsZU5ldHdvcmtGZXRjaGVzID0gc3NyTW9kZSB8fCBzc3JGb3JjZUZldGNoRGVsYXkgPiAwO1xuICAgICAgICB0aGlzLnF1ZXJ5RGVkdXBsaWNhdGlvbiA9IHF1ZXJ5RGVkdXBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLnR5cGVEZWZzID0gdHlwZURlZnM7XG4gICAgICAgIGlmIChzc3JGb3JjZUZldGNoRGVsYXkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gKF90aGlzLmRpc2FibGVOZXR3b3JrRmV0Y2hlcyA9IGZhbHNlKTsgfSwgc3NyRm9yY2VGZXRjaERlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndhdGNoUXVlcnkgPSB0aGlzLndhdGNoUXVlcnkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tdXRhdGUgPSB0aGlzLm11dGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlc2V0U3RvcmUgPSB0aGlzLnJlc2V0U3RvcmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMgPSB0aGlzLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcy5iaW5kKHRoaXMpO1xuICAgICAgICBpZiAoY29ubmVjdFRvRGV2VG9vbHMgJiYgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5fX0FQT0xMT19DTElFTlRfXyA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNTdWdnZXN0ZWREZXZ0b29scyAmJiBfX0RFVl9fKSB7XG4gICAgICAgICAgICBoYXNTdWdnZXN0ZWREZXZ0b29scyA9IHRydWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cudG9wID09PSB3aW5kb3cuc2VsZiAmJlxuICAgICAgICAgICAgICAgICF3aW5kb3cuX19BUE9MTE9fREVWVE9PTFNfR0xPQkFMX0hPT0tfXykge1xuICAgICAgICAgICAgICAgIHZhciBuYXYgPSB3aW5kb3cubmF2aWdhdG9yO1xuICAgICAgICAgICAgICAgIHZhciB1YSA9IG5hdiAmJiBuYXYudXNlckFnZW50O1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodWEuaW5kZXhPZihcIkNocm9tZS9cIikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gXCJodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcG9sbG8tY2xpZW50LWRldmVsb3Blci10L2pka2tua2tiZWJiYXBpbGdvZWNjY2lnbGtmYm1ibmZtXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodWEuaW5kZXhPZihcIkZpcmVmb3gvXCIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IFwiaHR0cHM6Ly9hZGRvbnMubW96aWxsYS5vcmcvZW4tVVMvZmlyZWZveC9hZGRvbi9hcG9sbG8tZGV2ZWxvcGVyLXRvb2xzL1wiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5sb2coXCJEb3dubG9hZCB0aGUgQXBvbGxvIERldlRvb2xzIGZvciBhIGJldHRlciBkZXZlbG9wbWVudCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4cGVyaWVuY2U6IFwiICsgdXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlID0gbmV3IExvY2FsU3RhdGUoe1xuICAgICAgICAgICAgY2FjaGU6IGNhY2hlLFxuICAgICAgICAgICAgY2xpZW50OiB0aGlzLFxuICAgICAgICAgICAgcmVzb2x2ZXJzOiByZXNvbHZlcnMsXG4gICAgICAgICAgICBmcmFnbWVudE1hdGNoZXI6IGZyYWdtZW50TWF0Y2hlcixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyID0gbmV3IFF1ZXJ5TWFuYWdlcih7XG4gICAgICAgICAgICBjYWNoZTogdGhpcy5jYWNoZSxcbiAgICAgICAgICAgIGxpbms6IHRoaXMubGluayxcbiAgICAgICAgICAgIHF1ZXJ5RGVkdXBsaWNhdGlvbjogcXVlcnlEZWR1cGxpY2F0aW9uLFxuICAgICAgICAgICAgc3NyTW9kZTogc3NyTW9kZSxcbiAgICAgICAgICAgIGNsaWVudEF3YXJlbmVzczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IGNsaWVudEF3YXJlbmVzc05hbWUsXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogY2xpZW50QXdhcmVuZXNzVmVyc2lvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2NhbFN0YXRlOiB0aGlzLmxvY2FsU3RhdGUsXG4gICAgICAgICAgICBhc3N1bWVJbW11dGFibGVSZXN1bHRzOiBhc3N1bWVJbW11dGFibGVSZXN1bHRzLFxuICAgICAgICAgICAgb25Ccm9hZGNhc3Q6IGNvbm5lY3RUb0RldlRvb2xzID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5kZXZUb29sc0hvb2tDYikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXZUb29sc0hvb2tDYih7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyaWVzOiBfdGhpcy5xdWVyeU1hbmFnZXIuZ2V0UXVlcnlTdG9yZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uczogX3RoaXMucXVlcnlNYW5hZ2VyLm11dGF0aW9uU3RvcmUgfHwge30sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVdpdGhPcHRpbWlzdGljUmVzdWx0czogX3RoaXMuY2FjaGUuZXh0cmFjdCh0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSA6IHZvaWQgMCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuc3RvcCgpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS53YXRjaFF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE9wdGlvbnMud2F0Y2hRdWVyeSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLmRlZmF1bHRPcHRpb25zLndhdGNoUXVlcnksIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVOZXR3b3JrRmV0Y2hlcyAmJlxuICAgICAgICAgICAgKG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknIHx8XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ2NhY2hlLWFuZC1uZXR3b3JrJykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZmV0Y2hQb2xpY3k6ICdjYWNoZS1maXJzdCcgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLndhdGNoUXVlcnkob3B0aW9ucyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE9wdGlvbnMucXVlcnkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBtZXJnZU9wdGlvbnModGhpcy5kZWZhdWx0T3B0aW9ucy5xdWVyeSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG9wdGlvbnMuZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1hbmQtbmV0d29yaycsICdUaGUgY2FjaGUtYW5kLW5ldHdvcmsgZmV0Y2hQb2xpY3kgZG9lcyBub3Qgd29yayB3aXRoIGNsaWVudC5xdWVyeSwgYmVjYXVzZSAnICtcbiAgICAgICAgICAgICdjbGllbnQucXVlcnkgY2FuIG9ubHkgcmV0dXJuIGEgc2luZ2xlIHJlc3VsdC4gUGxlYXNlIHVzZSBjbGllbnQud2F0Y2hRdWVyeSAnICtcbiAgICAgICAgICAgICd0byByZWNlaXZlIG11bHRpcGxlIHJlc3VsdHMgZnJvbSB0aGUgY2FjaGUgYW5kIHRoZSBuZXR3b3JrLCBvciBjb25zaWRlciAnICtcbiAgICAgICAgICAgICd1c2luZyBhIGRpZmZlcmVudCBmZXRjaFBvbGljeSwgc3VjaCBhcyBjYWNoZS1maXJzdCBvciBuZXR3b3JrLW9ubHkuJykgOiBnbG9iYWxzLmludmFyaWFudChvcHRpb25zLmZldGNoUG9saWN5ICE9PSAnY2FjaGUtYW5kLW5ldHdvcmsnLCA4KTtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZU5ldHdvcmtGZXRjaGVzICYmIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGZldGNoUG9saWN5OiAnY2FjaGUtZmlyc3QnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5xdWVyeShvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUubXV0YXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE9wdGlvbnMubXV0YXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMuZGVmYXVsdE9wdGlvbnMubXV0YXRlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIubXV0YXRlKG9wdGlvbnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIuc3RhcnRHcmFwaFFMU3Vic2NyaXB0aW9uKG9wdGlvbnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZWFkUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucywgb3B0aW1pc3RpYykge1xuICAgICAgICBpZiAob3B0aW1pc3RpYyA9PT0gdm9pZCAwKSB7IG9wdGltaXN0aWMgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZWFkUXVlcnkob3B0aW9ucywgb3B0aW1pc3RpYyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnJlYWRGcmFnbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnJlYWRGcmFnbWVudChvcHRpb25zLCBvcHRpbWlzdGljKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUud3JpdGVRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2FjaGUud3JpdGVRdWVyeShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS53cml0ZUZyYWdtZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jYWNoZS53cml0ZUZyYWdtZW50KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLl9fYWN0aW9uSG9va0ZvckRldlRvb2xzID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHRoaXMuZGV2VG9vbHNIb29rQ2IgPSBjYjtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuX19yZXF1ZXN0UmF3ID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGNvcmUuZXhlY3V0ZSh0aGlzLmxpbmssIHBheWxvYWQpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZXNldFN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnF1ZXJ5TWFuYWdlci5jbGVhclN0b3JlKHtcbiAgICAgICAgICAgIGRpc2NhcmRXYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgfSk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLmFsbChfdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzLm1hcChmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH0pKTsgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcygpOyB9KTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuY2xlYXJTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5xdWVyeU1hbmFnZXIuY2xlYXJTdG9yZSh7XG4gICAgICAgICAgICBkaXNjYXJkV2F0Y2hlczogdHJ1ZSxcbiAgICAgICAgfSk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLmFsbChfdGhpcy5jbGVhclN0b3JlQ2FsbGJhY2tzLm1hcChmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH0pKTsgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLm9uUmVzZXRTdG9yZSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnJlc2V0U3RvcmVDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzID0gX3RoaXMucmVzZXRTdG9yZUNhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09IGNiOyB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUub25DbGVhclN0b3JlID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MgPSBfdGhpcy5jbGVhclN0b3JlQ2FsbGJhY2tzLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gY2I7IH0pO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMgPSBmdW5jdGlvbiAoaW5jbHVkZVN0YW5kYnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcyhpbmNsdWRlU3RhbmRieSk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnJlZmV0Y2hRdWVyaWVzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG1hcCA9IHRoaXMucXVlcnlNYW5hZ2VyLnJlZmV0Y2hRdWVyaWVzKG9wdGlvbnMpO1xuICAgICAgICB2YXIgcXVlcmllcyA9IFtdO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBtYXAuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0LCBvYnNRdWVyeSkge1xuICAgICAgICAgICAgcXVlcmllcy5wdXNoKG9ic1F1ZXJ5KTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFByb21pc2UuYWxsKHJlc3VsdHMpO1xuICAgICAgICByZXN1bHQucXVlcmllcyA9IHF1ZXJpZXM7XG4gICAgICAgIHJlc3VsdC5yZXN1bHRzID0gcmVzdWx0cztcbiAgICAgICAgcmVzdWx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5kZWJ1ZyhcIkluIGNsaWVudC5yZWZldGNoUXVlcmllcywgUHJvbWlzZS5hbGwgcHJvbWlzZSByZWplY3RlZCB3aXRoIGVycm9yIFwiLmNvbmNhdChlcnJvcikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuZ2V0T2JzZXJ2YWJsZVF1ZXJpZXMgPSBmdW5jdGlvbiAoaW5jbHVkZSkge1xuICAgICAgICBpZiAoaW5jbHVkZSA9PT0gdm9pZCAwKSB7IGluY2x1ZGUgPSBcImFjdGl2ZVwiOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5nZXRPYnNlcnZhYmxlUXVlcmllcyhpbmNsdWRlKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuZXh0cmFjdCA9IGZ1bmN0aW9uIChvcHRpbWlzdGljKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLmV4dHJhY3Qob3B0aW1pc3RpYyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnJlc3RvcmUgPSBmdW5jdGlvbiAoc2VyaWFsaXplZFN0YXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnJlc3RvcmUoc2VyaWFsaXplZFN0YXRlKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuYWRkUmVzb2x2ZXJzID0gZnVuY3Rpb24gKHJlc29sdmVycykge1xuICAgICAgICB0aGlzLmxvY2FsU3RhdGUuYWRkUmVzb2x2ZXJzKHJlc29sdmVycyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnNldFJlc29sdmVycyA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlLnNldFJlc29sdmVycyhyZXNvbHZlcnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5nZXRSZXNvbHZlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsU3RhdGUuZ2V0UmVzb2x2ZXJzKCk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnNldExvY2FsU3RhdGVGcmFnbWVudE1hdGNoZXIgPSBmdW5jdGlvbiAoZnJhZ21lbnRNYXRjaGVyKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdGF0ZS5zZXRGcmFnbWVudE1hdGNoZXIoZnJhZ21lbnRNYXRjaGVyKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc2V0TGluayA9IGZ1bmN0aW9uIChuZXdMaW5rKSB7XG4gICAgICAgIHRoaXMubGluayA9IHRoaXMucXVlcnlNYW5hZ2VyLmxpbmsgPSBuZXdMaW5rO1xuICAgIH07XG4gICAgcmV0dXJuIEFwb2xsb0NsaWVudDtcbn0oKSk7XG5cbnRzSW52YXJpYW50LnNldFZlcmJvc2l0eShnbG9iYWxzLkRFViA/IFwibG9nXCIgOiBcInNpbGVudFwiKTtcblxuZXhwb3J0cy5PYnNlcnZhYmxlID0gdXRpbGl0aWVzLk9ic2VydmFibGU7XG5leHBvcnRzLmlzUmVmZXJlbmNlID0gdXRpbGl0aWVzLmlzUmVmZXJlbmNlO1xuZXhwb3J0cy5tYWtlUmVmZXJlbmNlID0gdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2U7XG5leHBvcnRzLkFwb2xsb0NhY2hlID0gY2FjaGUuQXBvbGxvQ2FjaGU7XG5leHBvcnRzLkNhY2hlID0gY2FjaGUuQ2FjaGU7XG5leHBvcnRzLkluTWVtb3J5Q2FjaGUgPSBjYWNoZS5Jbk1lbW9yeUNhY2hlO1xuZXhwb3J0cy5NaXNzaW5nRmllbGRFcnJvciA9IGNhY2hlLk1pc3NpbmdGaWVsZEVycm9yO1xuZXhwb3J0cy5kZWZhdWx0RGF0YUlkRnJvbU9iamVjdCA9IGNhY2hlLmRlZmF1bHREYXRhSWRGcm9tT2JqZWN0O1xuZXhwb3J0cy5tYWtlVmFyID0gY2FjaGUubWFrZVZhcjtcbmV4cG9ydHMuQXBvbGxvRXJyb3IgPSBlcnJvcnMuQXBvbGxvRXJyb3I7XG5leHBvcnRzLmlzQXBvbGxvRXJyb3IgPSBlcnJvcnMuaXNBcG9sbG9FcnJvcjtcbmV4cG9ydHMuZnJvbUVycm9yID0gdXRpbHMuZnJvbUVycm9yO1xuZXhwb3J0cy5mcm9tUHJvbWlzZSA9IHV0aWxzLmZyb21Qcm9taXNlO1xuZXhwb3J0cy50aHJvd1NlcnZlckVycm9yID0gdXRpbHMudGhyb3dTZXJ2ZXJFcnJvcjtcbmV4cG9ydHMudG9Qcm9taXNlID0gdXRpbHMudG9Qcm9taXNlO1xuZXhwb3J0cy5zZXRMb2dWZXJib3NpdHkgPSB0c0ludmFyaWFudC5zZXRWZXJib3NpdHk7XG5leHBvcnRzLmRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGdyYXBocWxUYWcuZGlzYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzO1xuZXhwb3J0cy5kaXNhYmxlRnJhZ21lbnRXYXJuaW5ncyA9IGdyYXBocWxUYWcuZGlzYWJsZUZyYWdtZW50V2FybmluZ3M7XG5leHBvcnRzLmVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzID0gZ3JhcGhxbFRhZy5lbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcztcbmV4cG9ydHMuZ3FsID0gZ3JhcGhxbFRhZy5ncWw7XG5leHBvcnRzLnJlc2V0Q2FjaGVzID0gZ3JhcGhxbFRhZy5yZXNldENhY2hlcztcbmV4cG9ydHMuQXBvbGxvQ2xpZW50ID0gQXBvbGxvQ2xpZW50O1xuZXhwb3J0cy5PYnNlcnZhYmxlUXVlcnkgPSBPYnNlcnZhYmxlUXVlcnk7XG5leHBvcnRzLmFwcGx5TmV4dEZldGNoUG9saWN5ID0gYXBwbHlOZXh0RmV0Y2hQb2xpY3k7XG5leHBvcnRzLm1lcmdlT3B0aW9ucyA9IG1lcmdlT3B0aW9ucztcbmZvciAodmFyIGsgaW4gY29yZSkge1xuICAgIGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIGV4cG9ydHNba10gPSBjb3JlW2tdO1xufVxuZm9yICh2YXIgayBpbiBodHRwKSB7XG4gICAgaWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgZXhwb3J0c1trXSA9IGh0dHBba107XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnJlcXVpcmUoJy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzJyk7XG5cbmZ1bmN0aW9uIGlzQXBvbGxvRXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyci5oYXNPd25Qcm9wZXJ0eSgnZ3JhcGhRTEVycm9ycycpO1xufVxudmFyIGdlbmVyYXRlRXJyb3JNZXNzYWdlID0gZnVuY3Rpb24gKGVycikge1xuICAgIHZhciBtZXNzYWdlID0gJyc7XG4gICAgaWYgKHV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkoZXJyLmdyYXBoUUxFcnJvcnMpIHx8IHV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkoZXJyLmNsaWVudEVycm9ycykpIHtcbiAgICAgICAgdmFyIGVycm9ycyA9IChlcnIuZ3JhcGhRTEVycm9ycyB8fCBbXSlcbiAgICAgICAgICAgIC5jb25jYXQoZXJyLmNsaWVudEVycm9ycyB8fCBbXSk7XG4gICAgICAgIGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yXG4gICAgICAgICAgICAgICAgPyBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgOiAnRXJyb3IgbWVzc2FnZSBub3QgZm91bmQuJztcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCJcIi5jb25jYXQoZXJyb3JNZXNzYWdlLCBcIlxcblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlcnIubmV0d29ya0Vycm9yKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gXCJcIi5jb25jYXQoZXJyLm5ldHdvcmtFcnJvci5tZXNzYWdlLCBcIlxcblwiKTtcbiAgICB9XG4gICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgvXFxuJC8sICcnKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbn07XG52YXIgQXBvbGxvRXJyb3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhBcG9sbG9FcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcG9sbG9FcnJvcihfYSkge1xuICAgICAgICB2YXIgZ3JhcGhRTEVycm9ycyA9IF9hLmdyYXBoUUxFcnJvcnMsIGNsaWVudEVycm9ycyA9IF9hLmNsaWVudEVycm9ycywgbmV0d29ya0Vycm9yID0gX2EubmV0d29ya0Vycm9yLCBlcnJvck1lc3NhZ2UgPSBfYS5lcnJvck1lc3NhZ2UsIGV4dHJhSW5mbyA9IF9hLmV4dHJhSW5mbztcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZXJyb3JNZXNzYWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5ncmFwaFFMRXJyb3JzID0gZ3JhcGhRTEVycm9ycyB8fCBbXTtcbiAgICAgICAgX3RoaXMuY2xpZW50RXJyb3JzID0gY2xpZW50RXJyb3JzIHx8IFtdO1xuICAgICAgICBfdGhpcy5uZXR3b3JrRXJyb3IgPSBuZXR3b3JrRXJyb3IgfHwgbnVsbDtcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IGVycm9yTWVzc2FnZSB8fCBnZW5lcmF0ZUVycm9yTWVzc2FnZShfdGhpcyk7XG4gICAgICAgIF90aGlzLmV4dHJhSW5mbyA9IGV4dHJhSW5mbztcbiAgICAgICAgX3RoaXMuX19wcm90b19fID0gQXBvbGxvRXJyb3IucHJvdG90eXBlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBBcG9sbG9FcnJvcjtcbn0oRXJyb3IpKTtcblxuZXhwb3J0cy5BcG9sbG9FcnJvciA9IEFwb2xsb0Vycm9yO1xuZXhwb3J0cy5pc0Fwb2xsb0Vycm9yID0gaXNBcG9sbG9FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5mdW5jdGlvbiBwYXNzdGhyb3VnaChvcCwgZm9yd2FyZCkge1xuICAgIHJldHVybiAoZm9yd2FyZCA/IGZvcndhcmQob3ApIDogdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKSk7XG59XG5mdW5jdGlvbiB0b0xpbmsoaGFuZGxlcikge1xuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBBcG9sbG9MaW5rKGhhbmRsZXIpIDogaGFuZGxlcjtcbn1cbmZ1bmN0aW9uIGlzVGVybWluYXRpbmcobGluaykge1xuICAgIHJldHVybiBsaW5rLnJlcXVlc3QubGVuZ3RoIDw9IDE7XG59XG52YXIgTGlua0Vycm9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoTGlua0Vycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExpbmtFcnJvcihtZXNzYWdlLCBsaW5rKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1lc3NhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmxpbmsgPSBsaW5rO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBMaW5rRXJyb3I7XG59KEVycm9yKSk7XG52YXIgQXBvbGxvTGluayA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBvbGxvTGluayhyZXF1ZXN0KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0KVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICB9XG4gICAgQXBvbGxvTGluay5lbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCk7IH0pO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5mcm9tID0gZnVuY3Rpb24gKGxpbmtzKSB7XG4gICAgICAgIGlmIChsaW5rcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gQXBvbGxvTGluay5lbXB0eSgpO1xuICAgICAgICByZXR1cm4gbGlua3MubWFwKHRvTGluaykucmVkdWNlKGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiB4LmNvbmNhdCh5KTsgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnNwbGl0ID0gZnVuY3Rpb24gKHRlc3QsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHZhciBsZWZ0TGluayA9IHRvTGluayhsZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0TGluayA9IHRvTGluayhyaWdodCB8fCBuZXcgQXBvbGxvTGluayhwYXNzdGhyb3VnaCkpO1xuICAgICAgICBpZiAoaXNUZXJtaW5hdGluZyhsZWZ0TGluaykgJiYgaXNUZXJtaW5hdGluZyhyaWdodExpbmspKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0KG9wZXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgPyBsZWZ0TGluay5yZXF1ZXN0KG9wZXJhdGlvbikgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKVxuICAgICAgICAgICAgICAgICAgICA6IHJpZ2h0TGluay5yZXF1ZXN0KG9wZXJhdGlvbikgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24sIGZvcndhcmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdChvcGVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgID8gbGVmdExpbmsucmVxdWVzdChvcGVyYXRpb24sIGZvcndhcmQpIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKClcbiAgICAgICAgICAgICAgICAgICAgOiByaWdodExpbmsucmVxdWVzdChvcGVyYXRpb24sIGZvcndhcmQpIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXBvbGxvTGluay5leGVjdXRlID0gZnVuY3Rpb24gKGxpbmssIG9wZXJhdGlvbikge1xuICAgICAgICByZXR1cm4gKGxpbmsucmVxdWVzdCh1dGlscy5jcmVhdGVPcGVyYXRpb24ob3BlcmF0aW9uLmNvbnRleHQsIHV0aWxzLnRyYW5zZm9ybU9wZXJhdGlvbih1dGlscy52YWxpZGF0ZU9wZXJhdGlvbihvcGVyYXRpb24pKSkpIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCkpO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5jb25jYXQgPSBmdW5jdGlvbiAoZmlyc3QsIHNlY29uZCkge1xuICAgICAgICB2YXIgZmlyc3RMaW5rID0gdG9MaW5rKGZpcnN0KTtcbiAgICAgICAgaWYgKGlzVGVybWluYXRpbmcoZmlyc3RMaW5rKSkge1xuICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKG5ldyBMaW5rRXJyb3IoXCJZb3UgYXJlIGNhbGxpbmcgY29uY2F0IG9uIGEgdGVybWluYXRpbmcgbGluaywgd2hpY2ggd2lsbCBoYXZlIG5vIGVmZmVjdFwiLCBmaXJzdExpbmspKTtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdExpbms7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5leHRMaW5rID0gdG9MaW5rKHNlY29uZCk7XG4gICAgICAgIGlmIChpc1Rlcm1pbmF0aW5nKG5leHRMaW5rKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlyc3RMaW5rLnJlcXVlc3Qob3BlcmF0aW9uLCBmdW5jdGlvbiAob3ApIHsgcmV0dXJuIG5leHRMaW5rLnJlcXVlc3Qob3ApIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCk7IH0pIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uLCBmb3J3YXJkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChmaXJzdExpbmsucmVxdWVzdChvcGVyYXRpb24sIGZ1bmN0aW9uIChvcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dExpbmsucmVxdWVzdChvcCwgZm9yd2FyZCkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKTtcbiAgICAgICAgICAgICAgICB9KSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5zcGxpdCA9IGZ1bmN0aW9uICh0ZXN0LCBsZWZ0LCByaWdodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25jYXQoQXBvbGxvTGluay5zcGxpdCh0ZXN0LCBsZWZ0LCByaWdodCB8fCBuZXcgQXBvbGxvTGluayhwYXNzdGhyb3VnaCkpKTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG9MaW5rLmNvbmNhdCh0aGlzLCBuZXh0KTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiAob3BlcmF0aW9uLCBmb3J3YXJkKSB7XG4gICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcigncmVxdWVzdCBpcyBub3QgaW1wbGVtZW50ZWQnKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDE5KTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIG9ic2VydmVyKSB7XG4gICAgICAgIGlmIChvYnNlcnZlciAmJiBvYnNlcnZlci5lcnJvcikge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUuc2V0T25FcnJvciA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB0aGlzLm9uRXJyb3IgPSBmbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gQXBvbGxvTGluaztcbn0oKSk7XG5cbnZhciBlbXB0eSA9IEFwb2xsb0xpbmsuZW1wdHk7XG5cbnZhciBmcm9tID0gQXBvbGxvTGluay5mcm9tO1xuXG52YXIgc3BsaXQgPSBBcG9sbG9MaW5rLnNwbGl0O1xuXG52YXIgY29uY2F0ID0gQXBvbGxvTGluay5jb25jYXQ7XG5cbnZhciBleGVjdXRlID0gQXBvbGxvTGluay5leGVjdXRlO1xuXG5leHBvcnRzLkFwb2xsb0xpbmsgPSBBcG9sbG9MaW5rO1xuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQ7XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG5leHBvcnRzLmV4ZWN1dGUgPSBleGVjdXRlO1xuZXhwb3J0cy5mcm9tID0gZnJvbTtcbmV4cG9ydHMuc3BsaXQgPSBzcGxpdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciBncmFwaHFsID0gcmVxdWlyZSgnZ3JhcGhxbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuLi9jb3JlJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzJyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBwYXJzZUFuZENoZWNrSHR0cFJlc3BvbnNlKG9wZXJhdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZVxuICAgICAgICAudGV4dCgpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChib2R5VGV4dCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYm9keVRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHZhciBwYXJzZUVycm9yID0gZXJyO1xuICAgICAgICAgICAgcGFyc2VFcnJvci5uYW1lID0gJ1NlcnZlclBhcnNlRXJyb3InO1xuICAgICAgICAgICAgcGFyc2VFcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgcGFyc2VFcnJvci5zdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICAgICAgcGFyc2VFcnJvci5ib2R5VGV4dCA9IGJvZHlUZXh0O1xuICAgICAgICAgICAgdGhyb3cgcGFyc2VFcnJvcjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgICAgICAgIHV0aWxzLnRocm93U2VydmVyRXJyb3IocmVzcG9uc2UsIHJlc3VsdCwgXCJSZXNwb25zZSBub3Qgc3VjY2Vzc2Z1bDogUmVjZWl2ZWQgc3RhdHVzIGNvZGUgXCIuY29uY2F0KHJlc3BvbnNlLnN0YXR1cykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXN1bHQpICYmXG4gICAgICAgICAgICAhaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQsICdkYXRhJykgJiZcbiAgICAgICAgICAgICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdCwgJ2Vycm9ycycpKSB7XG4gICAgICAgICAgICB1dGlscy50aHJvd1NlcnZlckVycm9yKHJlc3BvbnNlLCByZXN1bHQsIFwiU2VydmVyIHJlc3BvbnNlIHdhcyBtaXNzaW5nIGZvciBxdWVyeSAnXCIuY29uY2F0KEFycmF5LmlzQXJyYXkob3BlcmF0aW9ucylcbiAgICAgICAgICAgICAgICA/IG9wZXJhdGlvbnMubWFwKGZ1bmN0aW9uIChvcCkgeyByZXR1cm4gb3Aub3BlcmF0aW9uTmFtZTsgfSlcbiAgICAgICAgICAgICAgICA6IG9wZXJhdGlvbnMub3BlcmF0aW9uTmFtZSwgXCInLlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTsgfTtcbn1cblxudmFyIHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyID0gZnVuY3Rpb24gKHAsIGxhYmVsKSB7XG4gICAgdmFyIHNlcmlhbGl6ZWQ7XG4gICAgdHJ5IHtcbiAgICAgICAgc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KHApO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICB2YXIgcGFyc2VFcnJvciA9IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIk5ldHdvcmsgcmVxdWVzdCBmYWlsZWQuIFwiLmNvbmNhdChsYWJlbCwgXCIgaXMgbm90IHNlcmlhbGl6YWJsZTogXCIpLmNvbmNhdChlLm1lc3NhZ2UpKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDIxKTtcbiAgICAgICAgcGFyc2VFcnJvci5wYXJzZUVycm9yID0gZTtcbiAgICAgICAgdGhyb3cgcGFyc2VFcnJvcjtcbiAgICB9XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG59O1xuXG52YXIgZGVmYXVsdEh0dHBPcHRpb25zID0ge1xuICAgIGluY2x1ZGVRdWVyeTogdHJ1ZSxcbiAgICBpbmNsdWRlRXh0ZW5zaW9uczogZmFsc2UsXG59O1xudmFyIGRlZmF1bHRIZWFkZXJzID0ge1xuICAgIGFjY2VwdDogJyovKicsXG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbn07XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG59O1xudmFyIGZhbGxiYWNrSHR0cENvbmZpZyA9IHtcbiAgICBodHRwOiBkZWZhdWx0SHR0cE9wdGlvbnMsXG4gICAgaGVhZGVyczogZGVmYXVsdEhlYWRlcnMsXG4gICAgb3B0aW9uczogZGVmYXVsdE9wdGlvbnMsXG59O1xudmFyIGRlZmF1bHRQcmludGVyID0gZnVuY3Rpb24gKGFzdCwgcHJpbnRlcikgeyByZXR1cm4gcHJpbnRlcihhc3QpOyB9O1xuZnVuY3Rpb24gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5KG9wZXJhdGlvbiwgZmFsbGJhY2tDb25maWcpIHtcbiAgICB2YXIgY29uZmlncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGNvbmZpZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGNvbmZpZ3MudW5zaGlmdChmYWxsYmFja0NvbmZpZyk7XG4gICAgcmV0dXJuIHNlbGVjdEh0dHBPcHRpb25zQW5kQm9keUludGVybmFsLmFwcGx5KHZvaWQgMCwgdHNsaWIuX19zcHJlYWRBcnJheShbb3BlcmF0aW9uLFxuICAgICAgICBkZWZhdWx0UHJpbnRlcl0sIGNvbmZpZ3MsIGZhbHNlKSk7XG59XG5mdW5jdGlvbiBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHlJbnRlcm5hbChvcGVyYXRpb24sIHByaW50ZXIpIHtcbiAgICB2YXIgY29uZmlncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGNvbmZpZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBvcHRpb25zID0ge307XG4gICAgdmFyIGh0dHAgPSB7fTtcbiAgICBjb25maWdzLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBvcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCBjb25maWcub3B0aW9ucyksIHsgaGVhZGVyczogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMuaGVhZGVycyksIGhlYWRlcnNUb0xvd2VyQ2FzZShjb25maWcuaGVhZGVycykpIH0pO1xuICAgICAgICBpZiAoY29uZmlnLmNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICBvcHRpb25zLmNyZWRlbnRpYWxzID0gY29uZmlnLmNyZWRlbnRpYWxzO1xuICAgICAgICB9XG4gICAgICAgIGh0dHAgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgaHR0cCksIGNvbmZpZy5odHRwKTtcbiAgICB9KTtcbiAgICB2YXIgb3BlcmF0aW9uTmFtZSA9IG9wZXJhdGlvbi5vcGVyYXRpb25OYW1lLCBleHRlbnNpb25zID0gb3BlcmF0aW9uLmV4dGVuc2lvbnMsIHZhcmlhYmxlcyA9IG9wZXJhdGlvbi52YXJpYWJsZXMsIHF1ZXJ5ID0gb3BlcmF0aW9uLnF1ZXJ5O1xuICAgIHZhciBib2R5ID0geyBvcGVyYXRpb25OYW1lOiBvcGVyYXRpb25OYW1lLCB2YXJpYWJsZXM6IHZhcmlhYmxlcyB9O1xuICAgIGlmIChodHRwLmluY2x1ZGVFeHRlbnNpb25zKVxuICAgICAgICBib2R5LmV4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuICAgIGlmIChodHRwLmluY2x1ZGVRdWVyeSlcbiAgICAgICAgYm9keS5xdWVyeSA9IHByaW50ZXIocXVlcnksIGdyYXBocWwucHJpbnQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIGJvZHk6IGJvZHksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGhlYWRlcnNUb0xvd2VyQ2FzZShoZWFkZXJzKSB7XG4gICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRfMSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIE9iamVjdC5rZXlzKE9iamVjdChoZWFkZXJzKSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgbm9ybWFsaXplZF8xW25hbWUudG9Mb3dlckNhc2UoKV0gPSBoZWFkZXJzW25hbWVdO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRfMTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRlcnM7XG59XG5cbnZhciBjaGVja0ZldGNoZXIgPSBmdW5jdGlvbiAoZmV0Y2hlcikge1xuICAgIGlmICghZmV0Y2hlciAmJiB0eXBlb2YgZmV0Y2ggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIlxcblxcXCJmZXRjaFxcXCIgaGFzIG5vdCBiZWVuIGZvdW5kIGdsb2JhbGx5IGFuZCBubyBmZXRjaGVyIGhhcyBiZWVuIGNvbmZpZ3VyZWQuIFRvIGZpeCB0aGlzLCBpbnN0YWxsIGEgZmV0Y2ggcGFja2FnZSAobGlrZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9jcm9zcy1mZXRjaCksIGluc3RhbnRpYXRlIHRoZSBmZXRjaGVyLCBhbmQgcGFzcyBpdCBpbnRvIHlvdXIgSHR0cExpbmsgY29uc3RydWN0b3IuIEZvciBleGFtcGxlOlxcblxcbmltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCc7XFxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluayB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcXG4gIGxpbms6IG5ldyBIdHRwTGluayh7IHVyaTogJy9ncmFwaHFsJywgZmV0Y2ggfSlcXG59KTtcXG4gICAgXCIpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoMjApO1xuICAgIH1cbn07XG5cbnZhciBjcmVhdGVTaWduYWxJZlN1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIEFib3J0Q29udHJvbGxlciA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybiB7IGNvbnRyb2xsZXI6IGZhbHNlLCBzaWduYWw6IGZhbHNlIH07XG4gICAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgdmFyIHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsO1xuICAgIHJldHVybiB7IGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsIHNpZ25hbDogc2lnbmFsIH07XG59O1xuXG52YXIgc2VsZWN0VVJJID0gZnVuY3Rpb24gKG9wZXJhdGlvbiwgZmFsbGJhY2tVUkkpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wZXJhdGlvbi5nZXRDb250ZXh0KCk7XG4gICAgdmFyIGNvbnRleHRVUkkgPSBjb250ZXh0LnVyaTtcbiAgICBpZiAoY29udGV4dFVSSSkge1xuICAgICAgICByZXR1cm4gY29udGV4dFVSSTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGZhbGxiYWNrVVJJID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBmYWxsYmFja1VSSShvcGVyYXRpb24pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrVVJJIHx8ICcvZ3JhcGhxbCc7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gcmV3cml0ZVVSSUZvckdFVChjaG9zZW5VUkksIGJvZHkpIHtcbiAgICB2YXIgcXVlcnlQYXJhbXMgPSBbXTtcbiAgICB2YXIgYWRkUXVlcnlQYXJhbSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLnB1c2goXCJcIi5jb25jYXQoa2V5LCBcIj1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpKTtcbiAgICB9O1xuICAgIGlmICgncXVlcnknIGluIGJvZHkpIHtcbiAgICAgICAgYWRkUXVlcnlQYXJhbSgncXVlcnknLCBib2R5LnF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKGJvZHkub3BlcmF0aW9uTmFtZSkge1xuICAgICAgICBhZGRRdWVyeVBhcmFtKCdvcGVyYXRpb25OYW1lJywgYm9keS5vcGVyYXRpb25OYW1lKTtcbiAgICB9XG4gICAgaWYgKGJvZHkudmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBzZXJpYWxpemVkVmFyaWFibGVzID0gdm9pZCAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2VyaWFsaXplZFZhcmlhYmxlcyA9IHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyKGJvZHkudmFyaWFibGVzLCAnVmFyaWFibGVzIG1hcCcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChwYXJzZUVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBwYXJzZUVycm9yOiBwYXJzZUVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgYWRkUXVlcnlQYXJhbSgndmFyaWFibGVzJywgc2VyaWFsaXplZFZhcmlhYmxlcyk7XG4gICAgfVxuICAgIGlmIChib2R5LmV4dGVuc2lvbnMpIHtcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWRFeHRlbnNpb25zID0gdm9pZCAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2VyaWFsaXplZEV4dGVuc2lvbnMgPSBzZXJpYWxpemVGZXRjaFBhcmFtZXRlcihib2R5LmV4dGVuc2lvbnMsICdFeHRlbnNpb25zIG1hcCcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChwYXJzZUVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBwYXJzZUVycm9yOiBwYXJzZUVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgYWRkUXVlcnlQYXJhbSgnZXh0ZW5zaW9ucycsIHNlcmlhbGl6ZWRFeHRlbnNpb25zKTtcbiAgICB9XG4gICAgdmFyIGZyYWdtZW50ID0gJycsIHByZUZyYWdtZW50ID0gY2hvc2VuVVJJO1xuICAgIHZhciBmcmFnbWVudFN0YXJ0ID0gY2hvc2VuVVJJLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoZnJhZ21lbnRTdGFydCAhPT0gLTEpIHtcbiAgICAgICAgZnJhZ21lbnQgPSBjaG9zZW5VUkkuc3Vic3RyKGZyYWdtZW50U3RhcnQpO1xuICAgICAgICBwcmVGcmFnbWVudCA9IGNob3NlblVSSS5zdWJzdHIoMCwgZnJhZ21lbnRTdGFydCk7XG4gICAgfVxuICAgIHZhciBxdWVyeVBhcmFtc1ByZWZpeCA9IHByZUZyYWdtZW50LmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJic7XG4gICAgdmFyIG5ld1VSSSA9IHByZUZyYWdtZW50ICsgcXVlcnlQYXJhbXNQcmVmaXggKyBxdWVyeVBhcmFtcy5qb2luKCcmJykgKyBmcmFnbWVudDtcbiAgICByZXR1cm4geyBuZXdVUkk6IG5ld1VSSSB9O1xufVxuXG52YXIgYmFja3VwRmV0Y2ggPSB1dGlsaXRpZXMubWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2g7IH0pO1xudmFyIGNyZWF0ZUh0dHBMaW5rID0gZnVuY3Rpb24gKGxpbmtPcHRpb25zKSB7XG4gICAgaWYgKGxpbmtPcHRpb25zID09PSB2b2lkIDApIHsgbGlua09wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IGxpbmtPcHRpb25zLnVyaSwgdXJpID0gX2EgPT09IHZvaWQgMCA/ICcvZ3JhcGhxbCcgOiBfYSwgcHJlZmVycmVkRmV0Y2ggPSBsaW5rT3B0aW9ucy5mZXRjaCwgX2IgPSBsaW5rT3B0aW9ucy5wcmludCwgcHJpbnQgPSBfYiA9PT0gdm9pZCAwID8gZGVmYXVsdFByaW50ZXIgOiBfYiwgaW5jbHVkZUV4dGVuc2lvbnMgPSBsaW5rT3B0aW9ucy5pbmNsdWRlRXh0ZW5zaW9ucywgdXNlR0VURm9yUXVlcmllcyA9IGxpbmtPcHRpb25zLnVzZUdFVEZvclF1ZXJpZXMsIF9jID0gbGlua09wdGlvbnMuaW5jbHVkZVVudXNlZFZhcmlhYmxlcywgaW5jbHVkZVVudXNlZFZhcmlhYmxlcyA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLCByZXF1ZXN0T3B0aW9ucyA9IHRzbGliLl9fcmVzdChsaW5rT3B0aW9ucywgW1widXJpXCIsIFwiZmV0Y2hcIiwgXCJwcmludFwiLCBcImluY2x1ZGVFeHRlbnNpb25zXCIsIFwidXNlR0VURm9yUXVlcmllc1wiLCBcImluY2x1ZGVVbnVzZWRWYXJpYWJsZXNcIl0pO1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGNoZWNrRmV0Y2hlcihwcmVmZXJyZWRGZXRjaCB8fCBiYWNrdXBGZXRjaCk7XG4gICAgfVxuICAgIHZhciBsaW5rQ29uZmlnID0ge1xuICAgICAgICBodHRwOiB7IGluY2x1ZGVFeHRlbnNpb25zOiBpbmNsdWRlRXh0ZW5zaW9ucyB9LFxuICAgICAgICBvcHRpb25zOiByZXF1ZXN0T3B0aW9ucy5mZXRjaE9wdGlvbnMsXG4gICAgICAgIGNyZWRlbnRpYWxzOiByZXF1ZXN0T3B0aW9ucy5jcmVkZW50aWFscyxcbiAgICAgICAgaGVhZGVyczogcmVxdWVzdE9wdGlvbnMuaGVhZGVycyxcbiAgICB9O1xuICAgIHJldHVybiBuZXcgY29yZS5BcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24pIHtcbiAgICAgICAgdmFyIGNob3NlblVSSSA9IHNlbGVjdFVSSShvcGVyYXRpb24sIHVyaSk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gb3BlcmF0aW9uLmdldENvbnRleHQoKTtcbiAgICAgICAgdmFyIGNsaWVudEF3YXJlbmVzc0hlYWRlcnMgPSB7fTtcbiAgICAgICAgaWYgKGNvbnRleHQuY2xpZW50QXdhcmVuZXNzKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBjb250ZXh0LmNsaWVudEF3YXJlbmVzcywgbmFtZV8xID0gX2EubmFtZSwgdmVyc2lvbiA9IF9hLnZlcnNpb247XG4gICAgICAgICAgICBpZiAobmFtZV8xKSB7XG4gICAgICAgICAgICAgICAgY2xpZW50QXdhcmVuZXNzSGVhZGVyc1snYXBvbGxvZ3JhcGhxbC1jbGllbnQtbmFtZSddID0gbmFtZV8xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBjbGllbnRBd2FyZW5lc3NIZWFkZXJzWydhcG9sbG9ncmFwaHFsLWNsaWVudC12ZXJzaW9uJ10gPSB2ZXJzaW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb250ZXh0SGVhZGVycyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjbGllbnRBd2FyZW5lc3NIZWFkZXJzKSwgY29udGV4dC5oZWFkZXJzKTtcbiAgICAgICAgdmFyIGNvbnRleHRDb25maWcgPSB7XG4gICAgICAgICAgICBodHRwOiBjb250ZXh0Lmh0dHAsXG4gICAgICAgICAgICBvcHRpb25zOiBjb250ZXh0LmZldGNoT3B0aW9ucyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBjb250ZXh0LmNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgaGVhZGVyczogY29udGV4dEhlYWRlcnMsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBfYiA9IHNlbGVjdEh0dHBPcHRpb25zQW5kQm9keUludGVybmFsKG9wZXJhdGlvbiwgcHJpbnQsIGZhbGxiYWNrSHR0cENvbmZpZywgbGlua0NvbmZpZywgY29udGV4dENvbmZpZyksIG9wdGlvbnMgPSBfYi5vcHRpb25zLCBib2R5ID0gX2IuYm9keTtcbiAgICAgICAgaWYgKGJvZHkudmFyaWFibGVzICYmICFpbmNsdWRlVW51c2VkVmFyaWFibGVzKSB7XG4gICAgICAgICAgICB2YXIgdW51c2VkTmFtZXNfMSA9IG5ldyBTZXQoT2JqZWN0LmtleXMoYm9keS52YXJpYWJsZXMpKTtcbiAgICAgICAgICAgIGdyYXBocWwudmlzaXQob3BlcmF0aW9uLnF1ZXJ5LCB7XG4gICAgICAgICAgICAgICAgVmFyaWFibGU6IGZ1bmN0aW9uIChub2RlLCBfa2V5LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQua2luZCAhPT0gJ1ZhcmlhYmxlRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVudXNlZE5hbWVzXzEuZGVsZXRlKG5vZGUubmFtZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodW51c2VkTmFtZXNfMS5zaXplKSB7XG4gICAgICAgICAgICAgICAgYm9keS52YXJpYWJsZXMgPSB0c2xpYi5fX2Fzc2lnbih7fSwgYm9keS52YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgIHVudXNlZE5hbWVzXzEuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgYm9keS52YXJpYWJsZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRyb2xsZXI7XG4gICAgICAgIGlmICghb3B0aW9ucy5zaWduYWwpIHtcbiAgICAgICAgICAgIHZhciBfYyA9IGNyZWF0ZVNpZ25hbElmU3VwcG9ydGVkKCksIF9jb250cm9sbGVyID0gX2MuY29udHJvbGxlciwgc2lnbmFsID0gX2Muc2lnbmFsO1xuICAgICAgICAgICAgY29udHJvbGxlciA9IF9jb250cm9sbGVyO1xuICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIpXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zaWduYWwgPSBzaWduYWw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlZmluaXRpb25Jc011dGF0aW9uID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJyAmJiBkLm9wZXJhdGlvbiA9PT0gJ211dGF0aW9uJztcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHVzZUdFVEZvclF1ZXJpZXMgJiZcbiAgICAgICAgICAgICFvcGVyYXRpb24ucXVlcnkuZGVmaW5pdGlvbnMuc29tZShkZWZpbml0aW9uSXNNdXRhdGlvbikpIHtcbiAgICAgICAgICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgdmFyIF9kID0gcmV3cml0ZVVSSUZvckdFVChjaG9zZW5VUkksIGJvZHkpLCBuZXdVUkkgPSBfZC5uZXdVUkksIHBhcnNlRXJyb3IgPSBfZC5wYXJzZUVycm9yO1xuICAgICAgICAgICAgaWYgKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuZnJvbUVycm9yKHBhcnNlRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hvc2VuVVJJID0gbmV3VVJJO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmJvZHkgPSBzZXJpYWxpemVGZXRjaFBhcmFtZXRlcihib2R5LCAnUGF5bG9hZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuZnJvbUVycm9yKHBhcnNlRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgdXRpbGl0aWVzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudEZldGNoID0gcHJlZmVycmVkRmV0Y2ggfHwgdXRpbGl0aWVzLm1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZldGNoOyB9KSB8fCBiYWNrdXBGZXRjaDtcbiAgICAgICAgICAgIGN1cnJlbnRGZXRjaChjaG9zZW5VUkksIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnNldENvbnRleHQoeyByZXNwb25zZTogcmVzcG9uc2UgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihwYXJzZUFuZENoZWNrSHR0cFJlc3BvbnNlKG9wZXJhdGlvbikpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnJlc3VsdCAmJiBlcnIucmVzdWx0LmVycm9ycyAmJiBlcnIucmVzdWx0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChlcnIucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlcilcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG52YXIgSHR0cExpbmsgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhIdHRwTGluaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIdHRwTGluayhvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNyZWF0ZUh0dHBMaW5rKG9wdGlvbnMpLnJlcXVlc3QpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBIdHRwTGluaztcbn0oY29yZS5BcG9sbG9MaW5rKSk7XG5cbmV4cG9ydHMuSHR0cExpbmsgPSBIdHRwTGluaztcbmV4cG9ydHMuY2hlY2tGZXRjaGVyID0gY2hlY2tGZXRjaGVyO1xuZXhwb3J0cy5jcmVhdGVIdHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rO1xuZXhwb3J0cy5jcmVhdGVTaWduYWxJZlN1cHBvcnRlZCA9IGNyZWF0ZVNpZ25hbElmU3VwcG9ydGVkO1xuZXhwb3J0cy5kZWZhdWx0UHJpbnRlciA9IGRlZmF1bHRQcmludGVyO1xuZXhwb3J0cy5mYWxsYmFja0h0dHBDb25maWcgPSBmYWxsYmFja0h0dHBDb25maWc7XG5leHBvcnRzLnBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2UgPSBwYXJzZUFuZENoZWNrSHR0cFJlc3BvbnNlO1xuZXhwb3J0cy5yZXdyaXRlVVJJRm9yR0VUID0gcmV3cml0ZVVSSUZvckdFVDtcbmV4cG9ydHMuc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5ID0gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5O1xuZXhwb3J0cy5zZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHlJbnRlcm5hbCA9IHNlbGVjdEh0dHBPcHRpb25zQW5kQm9keUludGVybmFsO1xuZXhwb3J0cy5zZWxlY3RVUkkgPSBzZWxlY3RVUkk7XG5leHBvcnRzLnNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyID0gc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcycpO1xudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcblxuZnVuY3Rpb24gZnJvbUVycm9yKGVycm9yVmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IHV0aWxpdGllcy5PYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvclZhbHVlKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdG9Qcm9taXNlKG9ic2VydmFibGUpIHtcbiAgICB2YXIgY29tcGxldGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIlByb21pc2UgV3JhcHBlciBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIHJlc3VsdHMgZnJvbSBPYnNlcnZhYmxlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGZyb21Qcm9taXNlKHByb21pc2UpIHtcbiAgICByZXR1cm4gbmV3IHV0aWxpdGllcy5PYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBwcm9taXNlXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyKSk7XG4gICAgfSk7XG59XG5cbnZhciB0aHJvd1NlcnZlckVycm9yID0gZnVuY3Rpb24gKHJlc3BvbnNlLCByZXN1bHQsIG1lc3NhZ2UpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgZXJyb3IubmFtZSA9ICdTZXJ2ZXJFcnJvcic7XG4gICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICBlcnJvci5zdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgIGVycm9yLnJlc3VsdCA9IHJlc3VsdDtcbiAgICB0aHJvdyBlcnJvcjtcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlT3BlcmF0aW9uKG9wZXJhdGlvbikge1xuICAgIHZhciBPUEVSQVRJT05fRklFTERTID0gW1xuICAgICAgICAncXVlcnknLFxuICAgICAgICAnb3BlcmF0aW9uTmFtZScsXG4gICAgICAgICd2YXJpYWJsZXMnLFxuICAgICAgICAnZXh0ZW5zaW9ucycsXG4gICAgICAgICdjb250ZXh0JyxcbiAgICBdO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhvcGVyYXRpb24pOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xuICAgICAgICBpZiAoT1BFUkFUSU9OX0ZJRUxEUy5pbmRleE9mKGtleSkgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJpbGxlZ2FsIGFyZ3VtZW50OiBcIi5jb25jYXQoa2V5KSkgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcigyNCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wZXJhdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3BlcmF0aW9uKHN0YXJ0aW5nLCBvcGVyYXRpb24pIHtcbiAgICB2YXIgY29udGV4dCA9IHRzbGliLl9fYXNzaWduKHt9LCBzdGFydGluZyk7XG4gICAgdmFyIHNldENvbnRleHQgPSBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICBpZiAodHlwZW9mIG5leHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIG5leHQoY29udGV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjb250ZXh0KSwgbmV4dCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBnZXRDb250ZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHRzbGliLl9fYXNzaWduKHt9LCBjb250ZXh0KSk7IH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9wZXJhdGlvbiwgJ3NldENvbnRleHQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogc2V0Q29udGV4dCxcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3BlcmF0aW9uLCAnZ2V0Q29udGV4dCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBnZXRDb250ZXh0LFxuICAgIH0pO1xuICAgIHJldHVybiBvcGVyYXRpb247XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU9wZXJhdGlvbihvcGVyYXRpb24pIHtcbiAgICB2YXIgdHJhbnNmb3JtZWRPcGVyYXRpb24gPSB7XG4gICAgICAgIHZhcmlhYmxlczogb3BlcmF0aW9uLnZhcmlhYmxlcyB8fCB7fSxcbiAgICAgICAgZXh0ZW5zaW9uczogb3BlcmF0aW9uLmV4dGVuc2lvbnMgfHwge30sXG4gICAgICAgIG9wZXJhdGlvbk5hbWU6IG9wZXJhdGlvbi5vcGVyYXRpb25OYW1lLFxuICAgICAgICBxdWVyeTogb3BlcmF0aW9uLnF1ZXJ5LFxuICAgIH07XG4gICAgaWYgKCF0cmFuc2Zvcm1lZE9wZXJhdGlvbi5vcGVyYXRpb25OYW1lKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkT3BlcmF0aW9uLm9wZXJhdGlvbk5hbWUgPVxuICAgICAgICAgICAgdHlwZW9mIHRyYW5zZm9ybWVkT3BlcmF0aW9uLnF1ZXJ5ICE9PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gdXRpbGl0aWVzLmdldE9wZXJhdGlvbk5hbWUodHJhbnNmb3JtZWRPcGVyYXRpb24ucXVlcnkpIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIDogJyc7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2Zvcm1lZE9wZXJhdGlvbjtcbn1cblxuZXhwb3J0cy5jcmVhdGVPcGVyYXRpb24gPSBjcmVhdGVPcGVyYXRpb247XG5leHBvcnRzLmZyb21FcnJvciA9IGZyb21FcnJvcjtcbmV4cG9ydHMuZnJvbVByb21pc2UgPSBmcm9tUHJvbWlzZTtcbmV4cG9ydHMudGhyb3dTZXJ2ZXJFcnJvciA9IHRocm93U2VydmVyRXJyb3I7XG5leHBvcnRzLnRvUHJvbWlzZSA9IHRvUHJvbWlzZTtcbmV4cG9ydHMudHJhbnNmb3JtT3BlcmF0aW9uID0gdHJhbnNmb3JtT3BlcmF0aW9uO1xuZXhwb3J0cy52YWxpZGF0ZU9wZXJhdGlvbiA9IHZhbGlkYXRlT3BlcmF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29yZSA9IHJlcXVpcmUoJy4vY29yZScpO1xudmFyIHJlYWN0ID0gcmVxdWlyZSgnLi9yZWFjdCcpO1xuXG5cblxuZm9yICh2YXIgayBpbiBjb3JlKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIGV4cG9ydHNba10gPSBjb3JlW2tdO1xufVxuZm9yICh2YXIgayBpbiByZWFjdCkge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBleHBvcnRzW2tdID0gcmVhY3Rba107XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcblxudmFyIGdlbmVyaWNNZXNzYWdlID0gXCJJbnZhcmlhbnQgVmlvbGF0aW9uXCI7XHJcbnZhciBfYSA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiwgc2V0UHJvdG90eXBlT2YgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKG9iaiwgcHJvdG8pIHtcclxuICAgIG9iai5fX3Byb3RvX18gPSBwcm90bztcclxuICAgIHJldHVybiBvYmo7XHJcbn0gOiBfYTtcclxudmFyIEludmFyaWFudEVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgdHNsaWIuX19leHRlbmRzKEludmFyaWFudEVycm9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSW52YXJpYW50RXJyb3IobWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChtZXNzYWdlID09PSB2b2lkIDApIHsgbWVzc2FnZSA9IGdlbmVyaWNNZXNzYWdlOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHlwZW9mIG1lc3NhZ2UgPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgPyBnZW5lcmljTWVzc2FnZSArIFwiOiBcIiArIG1lc3NhZ2UgKyBcIiAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hcG9sbG9ncmFwaHFsL2ludmFyaWFudC1wYWNrYWdlcylcIlxyXG4gICAgICAgICAgICA6IG1lc3NhZ2UpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuZnJhbWVzVG9Qb3AgPSAxO1xyXG4gICAgICAgIF90aGlzLm5hbWUgPSBnZW5lcmljTWVzc2FnZTtcclxuICAgICAgICBzZXRQcm90b3R5cGVPZihfdGhpcywgSW52YXJpYW50RXJyb3IucHJvdG90eXBlKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSW52YXJpYW50RXJyb3I7XHJcbn0oRXJyb3IpKTtcclxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xyXG4gICAgaWYgKCFjb25kaXRpb24pIHtcclxuICAgICAgICB0aHJvdyBuZXcgSW52YXJpYW50RXJyb3IobWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxudmFyIHZlcmJvc2l0eUxldmVscyA9IFtcImRlYnVnXCIsIFwibG9nXCIsIFwid2FyblwiLCBcImVycm9yXCIsIFwic2lsZW50XCJdO1xyXG52YXIgdmVyYm9zaXR5TGV2ZWwgPSB2ZXJib3NpdHlMZXZlbHMuaW5kZXhPZihcImxvZ1wiKTtcclxuZnVuY3Rpb24gd3JhcENvbnNvbGVNZXRob2QobmFtZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodmVyYm9zaXR5TGV2ZWxzLmluZGV4T2YobmFtZSkgPj0gdmVyYm9zaXR5TGV2ZWwpIHtcclxuICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBjb25zb2xlLmxvZyBpZiB0aGlzIGhvc3QgZW52aXJvbm1lbnQgaGFwcGVucyBub3QgdG8gcHJvdmlkZVxyXG4gICAgICAgICAgICAvLyBhbGwgdGhlIGNvbnNvbGUuKiBtZXRob2RzIHdlIG5lZWQuXHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBjb25zb2xlW25hbWVdIHx8IGNvbnNvbGUubG9nO1xyXG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4oZnVuY3Rpb24gKGludmFyaWFudCkge1xyXG4gICAgaW52YXJpYW50LmRlYnVnID0gd3JhcENvbnNvbGVNZXRob2QoXCJkZWJ1Z1wiKTtcclxuICAgIGludmFyaWFudC5sb2cgPSB3cmFwQ29uc29sZU1ldGhvZChcImxvZ1wiKTtcclxuICAgIGludmFyaWFudC53YXJuID0gd3JhcENvbnNvbGVNZXRob2QoXCJ3YXJuXCIpO1xyXG4gICAgaW52YXJpYW50LmVycm9yID0gd3JhcENvbnNvbGVNZXRob2QoXCJlcnJvclwiKTtcclxufSkoaW52YXJpYW50IHx8IChpbnZhcmlhbnQgPSB7fSkpO1xyXG5mdW5jdGlvbiBzZXRWZXJib3NpdHkobGV2ZWwpIHtcclxuICAgIHZhciBvbGQgPSB2ZXJib3NpdHlMZXZlbHNbdmVyYm9zaXR5TGV2ZWxdO1xyXG4gICAgdmVyYm9zaXR5TGV2ZWwgPSBNYXRoLm1heCgwLCB2ZXJib3NpdHlMZXZlbHMuaW5kZXhPZihsZXZlbCkpO1xyXG4gICAgcmV0dXJuIG9sZDtcclxufVxyXG52YXIgaW52YXJpYW50JDEgPSBpbnZhcmlhbnQ7XG5cbmV4cG9ydHMuSW52YXJpYW50RXJyb3IgPSBJbnZhcmlhbnRFcnJvcjtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGludmFyaWFudCQxO1xuZXhwb3J0cy5pbnZhcmlhbnQgPSBpbnZhcmlhbnQ7XG5leHBvcnRzLnNldFZlcmJvc2l0eSA9IHNldFZlcmJvc2l0eTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludmFyaWFudC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gbWF5YmUodGh1bmspIHtcbiAgdHJ5IHsgcmV0dXJuIHRodW5rKCkgfSBjYXRjaCAoXykge31cbn1cblxudmFyIHNhZmVHbG9iYWwgPSAoXG4gIG1heWJlKGZ1bmN0aW9uKCkgeyByZXR1cm4gZ2xvYmFsVGhpcyB9KSB8fFxuICBtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIHdpbmRvdyB9KSB8fFxuICBtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGYgfSkgfHxcbiAgbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiBnbG9iYWwgfSkgfHxcbiAgLy8gV2UgZG9uJ3QgZXhwZWN0IHRoZSBGdW5jdGlvbiBjb25zdHJ1Y3RvciBldmVyIHRvIGJlIGludm9rZWQgYXQgcnVudGltZSwgYXNcbiAgLy8gbG9uZyBhcyBhdCBsZWFzdCBvbmUgb2YgZ2xvYmFsVGhpcywgd2luZG93LCBzZWxmLCBvciBnbG9iYWwgaXMgZGVmaW5lZCwgc29cbiAgLy8gd2UgYXJlIHVuZGVyIG5vIG9ibGlnYXRpb24gdG8gbWFrZSBpdCBlYXN5IGZvciBzdGF0aWMgYW5hbHlzaXMgdG9vbHMgdG9cbiAgLy8gZGV0ZWN0IHN5bnRhY3RpYyB1c2FnZSBvZiB0aGUgRnVuY3Rpb24gY29uc3RydWN0b3IuIElmIHlvdSB0aGluayB5b3UgY2FuXG4gIC8vIGltcHJvdmUgeW91ciBzdGF0aWMgYW5hbHlzaXMgdG8gZGV0ZWN0IHRoaXMgb2JmdXNjYXRpb24sIHRoaW5rIGFnYWluLiBUaGlzXG4gIC8vIGlzIGFuIGFybXMgcmFjZSB5b3UgY2Fubm90IHdpbiwgYXQgbGVhc3Qgbm90IGluIEphdmFTY3JpcHQuXG4gIG1heWJlKGZ1bmN0aW9uKCkgeyByZXR1cm4gbWF5YmUuY29uc3RydWN0b3IoXCJyZXR1cm4gdGhpc1wiKSgpIH0pXG4pO1xuXG52YXIgbmVlZFRvUmVtb3ZlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGluc3RhbGwoKSB7XG4gIGlmIChzYWZlR2xvYmFsICYmXG4gICAgICAhbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViB9KSAmJlxuICAgICAgIW1heWJlKGZ1bmN0aW9uKCkgeyByZXR1cm4gcHJvY2VzcyB9KSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzYWZlR2xvYmFsLCBcInByb2Nlc3NcIiwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgZW52OiB7XG4gICAgICAgICAgLy8gVGhpcyBkZWZhdWx0IG5lZWRzIHRvIGJlIFwicHJvZHVjdGlvblwiIGluc3RlYWQgb2YgXCJkZXZlbG9wbWVudFwiLCB0b1xuICAgICAgICAgIC8vIGF2b2lkIHRoZSBwcm9ibGVtIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2dyYXBocWwtanMvcHVsbC8yODk0XG4gICAgICAgICAgLy8gd2lsbCBldmVudHVhbGx5IHNvbHZlLCBvbmNlIG1lcmdlZCBhbmQgcmVsZWFzZWQuXG4gICAgICAgICAgTk9ERV9FTlY6IFwicHJvZHVjdGlvblwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIC8vIExldCBhbnlvbmUgZWxzZSBjaGFuZ2UgZ2xvYmFsLnByb2Nlc3MgYXMgdGhleSBzZWUgZml0LCBidXQgaGlkZSBpdCBmcm9tXG4gICAgICAvLyBPYmplY3Qua2V5cyhnbG9iYWwpIGVudW1lcmF0aW9uLlxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBuZWVkVG9SZW1vdmUgPSB0cnVlO1xuICB9XG59XG5cbi8vIENhbGwgaW5zdGFsbCgpIGF0IGxlYXN0IG9uY2UsIHdoZW4gdGhpcyBtb2R1bGUgaXMgaW1wb3J0ZWQuXG5pbnN0YWxsKCk7XG5cbmZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgaWYgKG5lZWRUb1JlbW92ZSkge1xuICAgIGRlbGV0ZSBzYWZlR2xvYmFsLnByb2Nlc3M7XG4gICAgbmVlZFRvUmVtb3ZlID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0cy5pbnN0YWxsID0gaW5zdGFsbDtcbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BOYW1lc3BhY2UoZSkge1xuICAgIGlmIChlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gICAgdmFyIG4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGlmIChlKSB7XG4gICAgICAgIGZvciAodmFyIGsgaW4gZSkge1xuICAgICAgICAgICAgbltrXSA9IGVba107XG4gICAgICAgIH1cbiAgICB9XG4gICAgbltcImRlZmF1bHRcIl0gPSBlO1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKG4pO1xufVxuXG52YXIgUmVhY3RfX25hbWVzcGFjZSA9IC8qI19fUFVSRV9fKi9faW50ZXJvcE5hbWVzcGFjZShSZWFjdCk7XG5cbnZhciBjb250ZXh0S2V5ID0gdXRpbGl0aWVzLmNhblVzZVN5bWJvbFxuICAgID8gU3ltYm9sLmZvcignX19BUE9MTE9fQ09OVEVYVF9fJylcbiAgICA6ICdfX0FQT0xMT19DT05URVhUX18nO1xuZnVuY3Rpb24gZ2V0QXBvbGxvQ29udGV4dCgpIHtcbiAgICB2YXIgY29udGV4dCA9IFJlYWN0X19uYW1lc3BhY2UuY3JlYXRlQ29udGV4dFtjb250ZXh0S2V5XTtcbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWN0X19uYW1lc3BhY2UuY3JlYXRlQ29udGV4dCwgY29udGV4dEtleSwge1xuICAgICAgICAgICAgdmFsdWU6IGNvbnRleHQgPSBSZWFjdF9fbmFtZXNwYWNlLmNyZWF0ZUNvbnRleHQoe30pLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb250ZXh0LmRpc3BsYXlOYW1lID0gJ0Fwb2xsb0NvbnRleHQnO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIEFwb2xsb0NvbnN1bWVyID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIEFwb2xsb0NvbnRleHQgPSBnZXRBcG9sbG9Db250ZXh0KCk7XG4gICAgcmV0dXJuIFJlYWN0X19uYW1lc3BhY2UuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoY29udGV4dCAmJiBjb250ZXh0LmNsaWVudCwgJ0NvdWxkIG5vdCBmaW5kIFwiY2xpZW50XCIgaW4gdGhlIGNvbnRleHQgb2YgQXBvbGxvQ29uc3VtZXIuICcgK1xuICAgICAgICAgICAgJ1dyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGFuIDxBcG9sbG9Qcm92aWRlcj4uJykgOiBnbG9iYWxzLmludmFyaWFudChjb250ZXh0ICYmIGNvbnRleHQuY2xpZW50LCAyNSk7XG4gICAgICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbihjb250ZXh0LmNsaWVudCk7XG4gICAgfSk7XG59O1xuXG52YXIgQXBvbGxvUHJvdmlkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xpZW50ID0gX2EuY2xpZW50LCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xuICAgIHZhciBBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dCgpO1xuICAgIHJldHVybiBSZWFjdF9fbmFtZXNwYWNlLmNyZWF0ZUVsZW1lbnQoQXBvbGxvQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0ge307IH1cbiAgICAgICAgaWYgKGNsaWVudCAmJiBjb250ZXh0LmNsaWVudCAhPT0gY2xpZW50KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwgeyBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICAgICAgfVxuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoY29udGV4dC5jbGllbnQsICdBcG9sbG9Qcm92aWRlciB3YXMgbm90IHBhc3NlZCBhIGNsaWVudCBpbnN0YW5jZS4gTWFrZSAnICtcbiAgICAgICAgICAgICdzdXJlIHlvdSBwYXNzIGluIHlvdXIgY2xpZW50IHZpYSB0aGUgXCJjbGllbnRcIiBwcm9wLicpIDogZ2xvYmFscy5pbnZhcmlhbnQoY29udGV4dC5jbGllbnQsIDI2KTtcbiAgICAgICAgcmV0dXJuIChSZWFjdF9fbmFtZXNwYWNlLmNyZWF0ZUVsZW1lbnQoQXBvbGxvQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dCB9LCBjaGlsZHJlbikpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0cy5BcG9sbG9Db25zdW1lciA9IEFwb2xsb0NvbnN1bWVyO1xuZXhwb3J0cy5BcG9sbG9Qcm92aWRlciA9IEFwb2xsb1Byb3ZpZGVyO1xuZXhwb3J0cy5nZXRBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dDtcbmV4cG9ydHMucmVzZXRBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHQuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGNvbnRleHQgPSByZXF1aXJlKCcuLi9jb250ZXh0Jyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIGVxdWFsaXR5ID0gcmVxdWlyZSgnQHdyeS9lcXVhbGl0eScpO1xudmFyIGVycm9ycyA9IHJlcXVpcmUoJy4uLy4uL2Vycm9ycycpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9jb3JlJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnLi4vcGFyc2VyJyk7XG5cbmZ1bmN0aW9uIHVzZUFwb2xsb0NsaWVudChvdmVycmlkZSkge1xuICAgIHZhciBjb250ZXh0JDEgPSByZWFjdC51c2VDb250ZXh0KGNvbnRleHQuZ2V0QXBvbGxvQ29udGV4dCgpKTtcbiAgICB2YXIgY2xpZW50ID0gb3ZlcnJpZGUgfHwgY29udGV4dCQxLmNsaWVudDtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoISFjbGllbnQsICdDb3VsZCBub3QgZmluZCBcImNsaWVudFwiIGluIHRoZSBjb250ZXh0IG9yIHBhc3NlZCBpbiBhcyBhbiBvcHRpb24uICcgK1xuICAgICAgICAnV3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYW4gPEFwb2xsb1Byb3ZpZGVyPiwgb3IgcGFzcyBhbiBBcG9sbG9DbGllbnQnICtcbiAgICAgICAgJ0Fwb2xsb0NsaWVudCBpbnN0YW5jZSBpbiB2aWEgb3B0aW9ucy4nKSA6IGdsb2JhbHMuaW52YXJpYW50KCEhY2xpZW50LCAyOSk7XG4gICAgcmV0dXJuIGNsaWVudDtcbn1cblxuZnVuY3Rpb24gdXNlUXVlcnkocXVlcnksIG9wdGlvbnMpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIGNvbnRleHQkMSA9IHJlYWN0LnVzZUNvbnRleHQoY29udGV4dC5nZXRBcG9sbG9Db250ZXh0KCkpO1xuICAgIHZhciBjbGllbnQgPSB1c2VBcG9sbG9DbGllbnQob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNsaWVudCk7XG4gICAgcGFyc2VyLnZlcmlmeURvY3VtZW50VHlwZShxdWVyeSwgcGFyc2VyLkRvY3VtZW50VHlwZS5RdWVyeSk7XG4gICAgdmFyIF9iID0gcmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2F0Y2hRdWVyeU9wdGlvbnMgPSBjcmVhdGVXYXRjaFF1ZXJ5T3B0aW9ucyhxdWVyeSwgb3B0aW9ucyk7XG4gICAgICAgIHZhciBvYnNRdWVyeSA9IG51bGw7XG4gICAgICAgIGlmIChjb250ZXh0JDEucmVuZGVyUHJvbWlzZXMpIHtcbiAgICAgICAgICAgIG9ic1F1ZXJ5ID0gY29udGV4dCQxLnJlbmRlclByb21pc2VzLmdldFNTUk9ic2VydmFibGUod2F0Y2hRdWVyeU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb2JzUXVlcnkpIHtcbiAgICAgICAgICAgIG9ic1F1ZXJ5ID0gY2xpZW50LndhdGNoUXVlcnkod2F0Y2hRdWVyeU9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGNvbnRleHQkMS5yZW5kZXJQcm9taXNlcykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQkMS5yZW5kZXJQcm9taXNlcy5yZWdpc3RlclNTUk9ic2VydmFibGUob2JzUXVlcnksIHdhdGNoUXVlcnlPcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGV4dCQxLnJlbmRlclByb21pc2VzICYmXG4gICAgICAgICAgICAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNzcikgIT09IGZhbHNlICYmXG4gICAgICAgICAgICAhKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5za2lwKSAmJlxuICAgICAgICAgICAgb2JzUXVlcnkuZ2V0Q3VycmVudFJlc3VsdCgpLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIGNvbnRleHQkMS5yZW5kZXJQcm9taXNlcy5hZGRRdWVyeVByb21pc2Uoe1xuICAgICAgICAgICAgICAgIGdldE9wdGlvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNyZWF0ZVdhdGNoUXVlcnlPcHRpb25zKHF1ZXJ5LCBvcHRpb25zKTsgfSxcbiAgICAgICAgICAgICAgICBmZXRjaERhdGE6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWIgPSBvYnNRdWVyeS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTsgfSxcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNRdWVyeTtcbiAgICB9KSwgb2JzUXVlcnkgPSBfYlswXSwgc2V0T2JzUXVlcnkgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSByZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHZhciByZXN1bHQgPSBvYnNRdWVyeS5nZXRDdXJyZW50UmVzdWx0KCk7XG4gICAgICAgIGlmICghcmVzdWx0LmxvYWRpbmcgJiYgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgIChfYSA9IG9wdGlvbnMub25FcnJvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwob3B0aW9ucywgcmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgKF9iID0gb3B0aW9ucy5vbkNvbXBsZXRlZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwob3B0aW9ucywgcmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSksIHJlc3VsdCA9IF9jWzBdLCBzZXRSZXN1bHQgPSBfY1sxXTtcbiAgICB2YXIgcmVmID0gcmVhY3QudXNlUmVmKHtcbiAgICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgIHByZXZpb3VzRGF0YTogdm9pZCAwLFxuICAgICAgICB3YXRjaFF1ZXJ5T3B0aW9uczogY3JlYXRlV2F0Y2hRdWVyeU9wdGlvbnMocXVlcnksIG9wdGlvbnMpLFxuICAgIH0pO1xuICAgIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHZhciB3YXRjaFF1ZXJ5T3B0aW9ucyA9IGNyZWF0ZVdhdGNoUXVlcnlPcHRpb25zKHF1ZXJ5LCBvcHRpb25zKTtcbiAgICAgICAgdmFyIG5leHRSZXN1bHQ7XG4gICAgICAgIGlmIChyZWYuY3VycmVudC5jbGllbnQgIT09IGNsaWVudCB8fCAhZXF1YWxpdHkuZXF1YWwocmVmLmN1cnJlbnQucXVlcnksIHF1ZXJ5KSkge1xuICAgICAgICAgICAgdmFyIG9ic1F1ZXJ5XzEgPSBjbGllbnQud2F0Y2hRdWVyeSh3YXRjaFF1ZXJ5T3B0aW9ucyk7XG4gICAgICAgICAgICBzZXRPYnNRdWVyeShvYnNRdWVyeV8xKTtcbiAgICAgICAgICAgIG5leHRSZXN1bHQgPSBvYnNRdWVyeV8xLmdldEN1cnJlbnRSZXN1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghZXF1YWxpdHkuZXF1YWwocmVmLmN1cnJlbnQud2F0Y2hRdWVyeU9wdGlvbnMsIHdhdGNoUXVlcnlPcHRpb25zKSkge1xuICAgICAgICAgICAgb2JzUXVlcnkuc2V0T3B0aW9ucyh3YXRjaFF1ZXJ5T3B0aW9ucykuY2F0Y2goZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgIG5leHRSZXN1bHQgPSBvYnNRdWVyeS5nZXRDdXJyZW50UmVzdWx0KCk7XG4gICAgICAgICAgICByZWYuY3VycmVudC53YXRjaFF1ZXJ5T3B0aW9ucyA9IHdhdGNoUXVlcnlPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0UmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNSZXN1bHQgPSByZWYuY3VycmVudC5yZXN1bHQ7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNSZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LnByZXZpb3VzRGF0YSA9IHByZXZpb3VzUmVzdWx0LmRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRSZXN1bHQocmVmLmN1cnJlbnQucmVzdWx0ID0gbmV4dFJlc3VsdCk7XG4gICAgICAgICAgICBpZiAoIW5leHRSZXN1bHQubG9hZGluZyAmJiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQubG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBvcHRpb25zLm9uRXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKG9wdGlvbnMsIHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYiA9IG9wdGlvbnMub25Db21wbGV0ZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKG9wdGlvbnMsIHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHJlZi5jdXJyZW50LCB7IGNsaWVudDogY2xpZW50LCBxdWVyeTogcXVlcnkgfSk7XG4gICAgfSwgW29ic1F1ZXJ5LCBjbGllbnQsIHF1ZXJ5LCBvcHRpb25zXSk7XG4gICAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRleHQkMS5yZW5kZXJQcm9taXNlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBvYnNRdWVyeS5zdWJzY3JpYmUob25OZXh0LCBvbkVycm9yKTtcbiAgICAgICAgZnVuY3Rpb24gb25OZXh0KCkge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1Jlc3VsdCA9IHJlZi5jdXJyZW50LnJlc3VsdDtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBvYnNRdWVyeS5nZXRDdXJyZW50UmVzdWx0KCk7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNSZXN1bHQgJiZcbiAgICAgICAgICAgICAgICBwcmV2aW91c1Jlc3VsdC5sb2FkaW5nID09PSByZXN1bHQubG9hZGluZyAmJlxuICAgICAgICAgICAgICAgIHByZXZpb3VzUmVzdWx0Lm5ldHdvcmtTdGF0dXMgPT09IHJlc3VsdC5uZXR3b3JrU3RhdHVzICYmXG4gICAgICAgICAgICAgICAgZXF1YWxpdHkuZXF1YWwocHJldmlvdXNSZXN1bHQuZGF0YSwgcmVzdWx0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZXZpb3VzUmVzdWx0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5wcmV2aW91c0RhdGEgPSBwcmV2aW91c1Jlc3VsdC5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0UmVzdWx0KHJlZi5jdXJyZW50LnJlc3VsdCA9IHJlc3VsdCk7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9uQ29tcGxldGVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgcmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB2YXIgbGFzdCA9IG9ic1F1ZXJ5W1wibGFzdFwiXTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBvYnNRdWVyeS5yZXNldExhc3RSZXN1bHRzKCk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gb2JzUXVlcnkuc3Vic2NyaWJlKG9uTmV4dCwgb25FcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBvYnNRdWVyeVtcImxhc3RcIl0gPSBsYXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlcnJvci5oYXNPd25Qcm9wZXJ0eSgnZ3JhcGhRTEVycm9ycycpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNSZXN1bHQgPSByZWYuY3VycmVudC5yZXN1bHQ7XG4gICAgICAgICAgICBpZiAoKHByZXZpb3VzUmVzdWx0ICYmIHByZXZpb3VzUmVzdWx0LmxvYWRpbmcpIHx8XG4gICAgICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKGVycm9yLCBwcmV2aW91c1Jlc3VsdC5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVmLmN1cnJlbnQucmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBwcmV2aW91c1Jlc3VsdC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBjb3JlLk5ldHdvcmtTdGF0dXMuZXJyb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9uRXJyb3IpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpOyB9O1xuICAgIH0sIFtvYnNRdWVyeSwgY29udGV4dCQxLnJlbmRlclByb21pc2VzLCBjbGllbnQuZGlzYWJsZU5ldHdvcmtGZXRjaGVzXSk7XG4gICAgdmFyIHBhcnRpYWw7XG4gICAgKF9hID0gcmVzdWx0LCBwYXJ0aWFsID0gX2EucGFydGlhbCwgcmVzdWx0ID0gdHNsaWIuX19yZXN0KF9hLCBbXCJwYXJ0aWFsXCJdKSk7XG4gICAge1xuICAgICAgICBpZiAocGFydGlhbCAmJlxuICAgICAgICAgICAgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wYXJ0aWFsUmVmZXRjaCkgJiZcbiAgICAgICAgICAgICFyZXN1bHQubG9hZGluZyAmJlxuICAgICAgICAgICAgKCFyZXN1bHQuZGF0YSB8fCBPYmplY3Qua2V5cyhyZXN1bHQuZGF0YSkubGVuZ3RoID09PSAwKSAmJlxuICAgICAgICAgICAgb2JzUXVlcnkub3B0aW9ucy5mZXRjaFBvbGljeSAhPT0gJ2NhY2hlLW9ubHknKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgcmVzdWx0KSwgeyBsb2FkaW5nOiB0cnVlLCBuZXR3b3JrU3RhdHVzOiBjb3JlLk5ldHdvcmtTdGF0dXMucmVmZXRjaCB9KTtcbiAgICAgICAgICAgIG9ic1F1ZXJ5LnJlZmV0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGV4dCQxLnJlbmRlclByb21pc2VzICYmXG4gICAgICAgICAgICAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNzcikgIT09IGZhbHNlICYmXG4gICAgICAgICAgICAhKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5za2lwKSAmJlxuICAgICAgICAgICAgcmVzdWx0LmxvYWRpbmcpIHtcbiAgICAgICAgICAgIG9ic1F1ZXJ5LnNldE9wdGlvbnMoY3JlYXRlV2F0Y2hRdWVyeU9wdGlvbnMocXVlcnksIG9wdGlvbnMpKS5jYXRjaChmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVmLmN1cnJlbnQsIHsgb3B0aW9uczogb3B0aW9ucyB9KTtcbiAgICB9XG4gICAgaWYgKChjb250ZXh0JDEucmVuZGVyUHJvbWlzZXMgfHwgY2xpZW50LmRpc2FibGVOZXR3b3JrRmV0Y2hlcykgJiZcbiAgICAgICAgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zc3IpID09PSBmYWxzZSkge1xuICAgICAgICByZXN1bHQgPSByZWYuY3VycmVudC5yZXN1bHQgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IGNvcmUuTmV0d29ya1N0YXR1cy5sb2FkaW5nLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApIHx8IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmV0Y2hQb2xpY3kpID09PSAnc3RhbmRieScpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICAgICAgbmV0d29ya1N0YXR1czogY29yZS5OZXR3b3JrU3RhdHVzLnJlYWR5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICByZXN1bHQgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgcmVzdWx0KSwgeyBlcnJvcjogcmVzdWx0LmVycm9yIHx8IG5ldyBlcnJvcnMuQXBvbGxvRXJyb3IoeyBncmFwaFFMRXJyb3JzOiByZXN1bHQuZXJyb3JzIH0pIH0pO1xuICAgIH1cbiAgICB2YXIgb2JzUXVlcnlGaWVsZHMgPSByZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgICAgIHJlZmV0Y2g6IG9ic1F1ZXJ5LnJlZmV0Y2guYmluZChvYnNRdWVyeSksXG4gICAgICAgIGZldGNoTW9yZTogb2JzUXVlcnkuZmV0Y2hNb3JlLmJpbmQob2JzUXVlcnkpLFxuICAgICAgICB1cGRhdGVRdWVyeTogb2JzUXVlcnkudXBkYXRlUXVlcnkuYmluZChvYnNRdWVyeSksXG4gICAgICAgIHN0YXJ0UG9sbGluZzogb2JzUXVlcnkuc3RhcnRQb2xsaW5nLmJpbmQob2JzUXVlcnkpLFxuICAgICAgICBzdG9wUG9sbGluZzogb2JzUXVlcnkuc3RvcFBvbGxpbmcuYmluZChvYnNRdWVyeSksXG4gICAgICAgIHN1YnNjcmliZVRvTW9yZTogb2JzUXVlcnkuc3Vic2NyaWJlVG9Nb3JlLmJpbmQob2JzUXVlcnkpLFxuICAgIH0pOyB9LCBbb2JzUXVlcnldKTtcbiAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9ic1F1ZXJ5RmllbGRzKSwgeyB2YXJpYWJsZXM6IGNyZWF0ZVdhdGNoUXVlcnlPcHRpb25zKHF1ZXJ5LCBvcHRpb25zKS52YXJpYWJsZXMsIGNsaWVudDogY2xpZW50LCBjYWxsZWQ6IHRydWUsIHByZXZpb3VzRGF0YTogcmVmLmN1cnJlbnQucHJldmlvdXNEYXRhIH0pLCByZXN1bHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlV2F0Y2hRdWVyeU9wdGlvbnMocXVlcnksIG9wdGlvbnMpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgc2tpcCA9IG9wdGlvbnMuc2tpcDsgb3B0aW9ucy5zc3I7IG9wdGlvbnMub25Db21wbGV0ZWQ7IG9wdGlvbnMub25FcnJvcjsgb3B0aW9ucy5kaXNwbGF5TmFtZTsgdmFyIHdhdGNoUXVlcnlPcHRpb25zID0gdHNsaWIuX19yZXN0KG9wdGlvbnMsIFtcInNraXBcIiwgXCJzc3JcIiwgXCJvbkNvbXBsZXRlZFwiLCBcIm9uRXJyb3JcIiwgXCJkaXNwbGF5TmFtZVwiXSk7XG4gICAgaWYgKHNraXApIHtcbiAgICAgICAgd2F0Y2hRdWVyeU9wdGlvbnMuZmV0Y2hQb2xpY3kgPSAnc3RhbmRieSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKCgoX2EgPSB3YXRjaFF1ZXJ5T3B0aW9ucy5jb250ZXh0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVuZGVyUHJvbWlzZXMpICYmXG4gICAgICAgICh3YXRjaFF1ZXJ5T3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScgfHxcbiAgICAgICAgICAgIHdhdGNoUXVlcnlPcHRpb25zLmZldGNoUG9saWN5ID09PSAnY2FjaGUtYW5kLW5ldHdvcmsnKSkge1xuICAgICAgICB3YXRjaFF1ZXJ5T3B0aW9ucy5mZXRjaFBvbGljeSA9ICdjYWNoZS1maXJzdCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKCF3YXRjaFF1ZXJ5T3B0aW9ucy5mZXRjaFBvbGljeSkge1xuICAgICAgICB3YXRjaFF1ZXJ5T3B0aW9ucy5mZXRjaFBvbGljeSA9ICdjYWNoZS1maXJzdCc7XG4gICAgfVxuICAgIGlmICghd2F0Y2hRdWVyeU9wdGlvbnMudmFyaWFibGVzKSB7XG4gICAgICAgIHdhdGNoUXVlcnlPcHRpb25zLnZhcmlhYmxlcyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24oeyBxdWVyeTogcXVlcnkgfSwgd2F0Y2hRdWVyeU9wdGlvbnMpO1xufVxuXG52YXIgRUFHRVJfTUVUSE9EUyA9IFtcbiAgICAncmVmZXRjaCcsXG4gICAgJ2ZldGNoTW9yZScsXG4gICAgJ3VwZGF0ZVF1ZXJ5JyxcbiAgICAnc3RhcnRQb2xsaW5nJyxcbiAgICAnc3Vic2NyaWJlVG9Nb3JlJyxcbl07XG5mdW5jdGlvbiB1c2VMYXp5UXVlcnkocXVlcnksIG9wdGlvbnMpIHtcbiAgICB2YXIgX2EgPSByZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIGNhbGxlZDogZmFsc2UsXG4gICAgICAgIHJlc29sdmVzOiBbXSxcbiAgICB9KSwgZXhlY3V0aW9uID0gX2FbMF0sIHNldEV4ZWN1dGlvbiA9IF9hWzFdO1xuICAgIHZhciBleGVjdXRlID0gcmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV4ZWN1dGVPcHRpb25zKSB7XG4gICAgICAgIHZhciByZXNvbHZlO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlMSkgeyByZXR1cm4gKHJlc29sdmUgPSByZXNvbHZlMSk7IH0pO1xuICAgICAgICBzZXRFeGVjdXRpb24oZnVuY3Rpb24gKGV4ZWN1dGlvbikge1xuICAgICAgICAgICAgaWYgKGV4ZWN1dGlvbi5jYWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgJiYgcmVzdWx0LnJlZmV0Y2goZXhlY3V0ZU9wdGlvbnMgPT09IG51bGwgfHwgZXhlY3V0ZU9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV4ZWN1dGVPcHRpb25zLnZhcmlhYmxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZXNvbHZlczogdHNsaWIuX19zcHJlYWRBcnJheSh0c2xpYi5fX3NwcmVhZEFycmF5KFtdLCBleGVjdXRpb24ucmVzb2x2ZXMsIHRydWUpLCBbcmVzb2x2ZV0sIGZhbHNlKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBleGVjdXRlT3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIHJlc3VsdCA9IHVzZVF1ZXJ5KHF1ZXJ5LCB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIGV4ZWN1dGlvbi5vcHRpb25zKSwgeyBmZXRjaFBvbGljeTogZXhlY3V0aW9uLmNhbGxlZCA/IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5mZXRjaFBvbGljeSA6ICdzdGFuZGJ5Jywgc2tpcDogdW5kZWZpbmVkIH0pKTtcbiAgICByZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzb2x2ZXMgPSBleGVjdXRpb24ucmVzb2x2ZXM7XG4gICAgICAgIGlmICghcmVzdWx0LmxvYWRpbmcgJiYgcmVzb2x2ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRFeGVjdXRpb24oZnVuY3Rpb24gKGV4ZWN1dGlvbikgeyByZXR1cm4gKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBleGVjdXRpb24pLCB7IHJlc29sdmVzOiBbXSB9KSk7IH0pO1xuICAgICAgICAgICAgcmVzb2x2ZXMuZm9yRWFjaChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gcmVzb2x2ZShyZXN1bHQpOyB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtyZXN1bHQsIGV4ZWN1dGlvbl0pO1xuICAgIGlmICghZXhlY3V0aW9uLmNhbGxlZCkge1xuICAgICAgICByZXN1bHQgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgcmVzdWx0KSwgeyBsb2FkaW5nOiBmYWxzZSwgZGF0YTogdm9pZCAwLCBlcnJvcjogdm9pZCAwLCBjYWxsZWQ6IGZhbHNlIH0pO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSByZXN1bHRba2V5XTtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRFeGVjdXRpb24oZnVuY3Rpb24gKGV4ZWN1dGlvbikgeyByZXR1cm4gKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBleGVjdXRpb24pLCB7IGNhbGxlZDogdHJ1ZSB9KSk7IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2QuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgRUFHRVJfTUVUSE9EU18xID0gRUFHRVJfTUVUSE9EUzsgX2kgPCBFQUdFUl9NRVRIT0RTXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gRUFHRVJfTUVUSE9EU18xW19pXTtcbiAgICAgICAgICAgIF9sb29wXzEoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2V4ZWN1dGUsIHJlc3VsdF07XG59XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uKG11dGF0aW9uLCBvcHRpb25zKSB7XG4gICAgdmFyIGNsaWVudCA9IHVzZUFwb2xsb0NsaWVudChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY2xpZW50KTtcbiAgICBwYXJzZXIudmVyaWZ5RG9jdW1lbnRUeXBlKG11dGF0aW9uLCBwYXJzZXIuRG9jdW1lbnRUeXBlLk11dGF0aW9uKTtcbiAgICB2YXIgX2EgPSByZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIGNhbGxlZDogZmFsc2UsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICB9KSwgcmVzdWx0ID0gX2FbMF0sIHNldFJlc3VsdCA9IF9hWzFdO1xuICAgIHZhciByZWYgPSByZWFjdC51c2VSZWYoe1xuICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgbXV0YXRpb25JZDogMCxcbiAgICAgICAgaXNNb3VudGVkOiB0cnVlLFxuICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgbXV0YXRpb246IG11dGF0aW9uLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIH0pO1xuICAgIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihyZWYuY3VycmVudCwgeyBjbGllbnQ6IGNsaWVudCwgb3B0aW9uczogb3B0aW9ucywgbXV0YXRpb246IG11dGF0aW9uIH0pO1xuICAgIH1cbiAgICB2YXIgZXhlY3V0ZSA9IHJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChleGVjdXRlT3B0aW9ucykge1xuICAgICAgICBpZiAoZXhlY3V0ZU9wdGlvbnMgPT09IHZvaWQgMCkgeyBleGVjdXRlT3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBfYSA9IHJlZi5jdXJyZW50LCBjbGllbnQgPSBfYS5jbGllbnQsIG9wdGlvbnMgPSBfYS5vcHRpb25zLCBtdXRhdGlvbiA9IF9hLm11dGF0aW9uO1xuICAgICAgICB2YXIgYmFzZU9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgbXV0YXRpb246IG11dGF0aW9uIH0pO1xuICAgICAgICBpZiAoIXJlZi5jdXJyZW50LnJlc3VsdC5sb2FkaW5nICYmICFiYXNlT3B0aW9ucy5pZ25vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQocmVmLmN1cnJlbnQucmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgY2FsbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG11dGF0aW9uSWQgPSArK3JlZi5jdXJyZW50Lm11dGF0aW9uSWQ7XG4gICAgICAgIHZhciBjbGllbnRPcHRpb25zID0gY29yZS5tZXJnZU9wdGlvbnMoYmFzZU9wdGlvbnMsIGV4ZWN1dGVPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5tdXRhdGUoY2xpZW50T3B0aW9ucykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGEsIGVycm9ycyQxID0gcmVzcG9uc2UuZXJyb3JzO1xuICAgICAgICAgICAgdmFyIGVycm9yID0gZXJyb3JzJDEgJiYgZXJyb3JzJDEubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gbmV3IGVycm9ycy5BcG9sbG9FcnJvcih7IGdyYXBoUUxFcnJvcnM6IGVycm9ycyQxIH0pXG4gICAgICAgICAgICAgICAgOiB2b2lkIDA7XG4gICAgICAgICAgICBpZiAobXV0YXRpb25JZCA9PT0gcmVmLmN1cnJlbnQubXV0YXRpb25JZCAmJlxuICAgICAgICAgICAgICAgICFjbGllbnRPcHRpb25zLmlnbm9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0XzEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAocmVmLmN1cnJlbnQuaXNNb3VudGVkICYmICFlcXVhbGl0eS5lcXVhbChyZWYuY3VycmVudC5yZXN1bHQsIHJlc3VsdF8xKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVmLmN1cnJlbnQucmVzdWx0ID0gcmVzdWx0XzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChfYSA9IGJhc2VPcHRpb25zLm9uQ29tcGxldGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChiYXNlT3B0aW9ucywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAoX2IgPSBleGVjdXRlT3B0aW9ucy5vbkNvbXBsZXRlZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoZXhlY3V0ZU9wdGlvbnMsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBpZiAobXV0YXRpb25JZCA9PT0gcmVmLmN1cnJlbnQubXV0YXRpb25JZCAmJlxuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LmlzTW91bnRlZCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHRfMiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICBjYWxsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKCFlcXVhbGl0eS5lcXVhbChyZWYuY3VycmVudC5yZXN1bHQsIHJlc3VsdF8yKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVmLmN1cnJlbnQucmVzdWx0ID0gcmVzdWx0XzIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiYXNlT3B0aW9ucy5vbkVycm9yIHx8IGNsaWVudE9wdGlvbnMub25FcnJvcikge1xuICAgICAgICAgICAgICAgIChfYSA9IGJhc2VPcHRpb25zLm9uRXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGJhc2VPcHRpb25zLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgKF9iID0gZXhlY3V0ZU9wdGlvbnMub25FcnJvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoZXhlY3V0ZU9wdGlvbnMsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBkYXRhOiB2b2lkIDAsIGVycm9yczogZXJyb3IgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIHJlc2V0ID0gcmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRSZXN1bHQoeyBjYWxsZWQ6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZSwgY2xpZW50OiBjbGllbnQgfSk7XG4gICAgfSwgW10pO1xuICAgIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZi5jdXJyZW50LmlzTW91bnRlZCA9IGZhbHNlO1xuICAgIH07IH0sIFtdKTtcbiAgICByZXR1cm4gW2V4ZWN1dGUsIHRzbGliLl9fYXNzaWduKHsgcmVzZXQ6IHJlc2V0IH0sIHJlc3VsdCldO1xufVxuXG5mdW5jdGlvbiB1c2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uLCBvcHRpb25zKSB7XG4gICAgdmFyIGNsaWVudCA9IHVzZUFwb2xsb0NsaWVudChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY2xpZW50KTtcbiAgICBwYXJzZXIudmVyaWZ5RG9jdW1lbnRUeXBlKHN1YnNjcmlwdGlvbiwgcGFyc2VyLkRvY3VtZW50VHlwZS5TdWJzY3JpcHRpb24pO1xuICAgIHZhciBfYSA9IHJlYWN0LnVzZVN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogIShvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2tpcCksXG4gICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgIH0pLCByZXN1bHQgPSBfYVswXSwgc2V0UmVzdWx0ID0gX2FbMV07XG4gICAgdmFyIF9iID0gcmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBzdWJzY3JpcHRpb24sXG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICBmZXRjaFBvbGljeTogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZldGNoUG9saWN5LFxuICAgICAgICAgICAgY29udGV4dDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNvbnRleHQsXG4gICAgICAgIH0pO1xuICAgIH0pLCBvYnNlcnZhYmxlID0gX2JbMF0sIHNldE9ic2VydmFibGUgPSBfYlsxXTtcbiAgICB2YXIgcmVmID0gcmVhY3QudXNlUmVmKHsgY2xpZW50OiBjbGllbnQsIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLCBvcHRpb25zOiBvcHRpb25zIH0pO1xuICAgIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgdmFyIHNob3VsZFJlc3Vic2NyaWJlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNob3VsZFJlc3Vic2NyaWJlO1xuICAgICAgICBpZiAodHlwZW9mIHNob3VsZFJlc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzaG91bGRSZXN1YnNjcmliZSA9ICEhc2hvdWxkUmVzdWJzY3JpYmUob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2tpcCkgJiYgIShvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2tpcCkgIT09ICEoKF9hID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNraXApKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQoe1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0T2JzZXJ2YWJsZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaG91bGRSZXN1YnNjcmliZSAhPT0gZmFsc2UgJiYgKGNsaWVudCAhPT0gcmVmLmN1cnJlbnQuY2xpZW50IHx8XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gIT09IHJlZi5jdXJyZW50LnN1YnNjcmlwdGlvbiB8fFxuICAgICAgICAgICAgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5mZXRjaFBvbGljeSkgIT09ICgoX2IgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZmV0Y2hQb2xpY3kpIHx8XG4gICAgICAgICAgICAhKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5za2lwKSAhPT0gISgoX2MgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Muc2tpcCkgfHxcbiAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLCAoX2QgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudmFyaWFibGVzKSkpIHtcbiAgICAgICAgICAgIHNldFJlc3VsdCh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldE9ic2VydmFibGUoY2xpZW50LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHN1YnNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5mZXRjaFBvbGljeSxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY29udGV4dCxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHJlZi5jdXJyZW50LCB7IGNsaWVudDogY2xpZW50LCBzdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvbiwgb3B0aW9uczogb3B0aW9ucyB9KTtcbiAgICB9LCBbY2xpZW50LCBzdWJzY3JpcHRpb24sIG9wdGlvbnNdKTtcbiAgICByZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIW9ic2VydmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKGZldGNoUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZmV0Y2hSZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9uU3Vic2NyaXB0aW9uRGF0YSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkRhdGE6IHJlc3VsdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9uU3Vic2NyaXB0aW9uQ29tcGxldGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW29ic2VydmFibGVdKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB1c2VSZWFjdGl2ZVZhcihydikge1xuICAgIHZhciB2YWx1ZSA9IHJ2KCk7XG4gICAgdmFyIHNldFZhbHVlID0gcmVhY3QudXNlU3RhdGUodmFsdWUpWzFdO1xuICAgIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcm9iYWJseVNhbWVWYWx1ZSA9IHJ2KCk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gcHJvYmFibHlTYW1lVmFsdWUpIHtcbiAgICAgICAgICAgIHNldFZhbHVlKHByb2JhYmx5U2FtZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBydi5vbk5leHRDaGFuZ2Uoc2V0VmFsdWUpO1xuICAgICAgICB9XG4gICAgfSwgW3ZhbHVlXSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnRzLnVzZUFwb2xsb0NsaWVudCA9IHVzZUFwb2xsb0NsaWVudDtcbmV4cG9ydHMudXNlTGF6eVF1ZXJ5ID0gdXNlTGF6eVF1ZXJ5O1xuZXhwb3J0cy51c2VNdXRhdGlvbiA9IHVzZU11dGF0aW9uO1xuZXhwb3J0cy51c2VRdWVyeSA9IHVzZVF1ZXJ5O1xuZXhwb3J0cy51c2VSZWFjdGl2ZVZhciA9IHVzZVJlYWN0aXZlVmFyO1xuZXhwb3J0cy51c2VTdWJzY3JpcHRpb24gPSB1c2VTdWJzY3JpcHRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcblxuZXhwb3J0cy5Eb2N1bWVudFR5cGUgPSB2b2lkIDA7XG4oZnVuY3Rpb24gKERvY3VtZW50VHlwZSkge1xuICAgIERvY3VtZW50VHlwZVtEb2N1bWVudFR5cGVbXCJRdWVyeVwiXSA9IDBdID0gXCJRdWVyeVwiO1xuICAgIERvY3VtZW50VHlwZVtEb2N1bWVudFR5cGVbXCJNdXRhdGlvblwiXSA9IDFdID0gXCJNdXRhdGlvblwiO1xuICAgIERvY3VtZW50VHlwZVtEb2N1bWVudFR5cGVbXCJTdWJzY3JpcHRpb25cIl0gPSAyXSA9IFwiU3Vic2NyaXB0aW9uXCI7XG59KShleHBvcnRzLkRvY3VtZW50VHlwZSB8fCAoZXhwb3J0cy5Eb2N1bWVudFR5cGUgPSB7fSkpO1xudmFyIGNhY2hlID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gb3BlcmF0aW9uTmFtZSh0eXBlKSB7XG4gICAgdmFyIG5hbWU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgZXhwb3J0cy5Eb2N1bWVudFR5cGUuUXVlcnk6XG4gICAgICAgICAgICBuYW1lID0gJ1F1ZXJ5JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGV4cG9ydHMuRG9jdW1lbnRUeXBlLk11dGF0aW9uOlxuICAgICAgICAgICAgbmFtZSA9ICdNdXRhdGlvbic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBleHBvcnRzLkRvY3VtZW50VHlwZS5TdWJzY3JpcHRpb246XG4gICAgICAgICAgICBuYW1lID0gJ1N1YnNjcmlwdGlvbic7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBwYXJzZXIoZG9jdW1lbnQpIHtcbiAgICB2YXIgY2FjaGVkID0gY2FjaGUuZ2V0KGRvY3VtZW50KTtcbiAgICBpZiAoY2FjaGVkKVxuICAgICAgICByZXR1cm4gY2FjaGVkO1xuICAgIHZhciB2YXJpYWJsZXMsIHR5cGUsIG5hbWU7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KCEhZG9jdW1lbnQgJiYgISFkb2N1bWVudC5raW5kLCBcIkFyZ3VtZW50IG9mIFwiLmNvbmNhdChkb2N1bWVudCwgXCIgcGFzc2VkIHRvIHBhcnNlciB3YXMgbm90IGEgdmFsaWQgR3JhcGhRTCBcIikgK1xuICAgICAgICBcIkRvY3VtZW50Tm9kZS4gWW91IG1heSBuZWVkIHRvIHVzZSAnZ3JhcGhxbC10YWcnIG9yIGFub3RoZXIgbWV0aG9kIFwiICtcbiAgICAgICAgXCJ0byBjb252ZXJ0IHlvdXIgb3BlcmF0aW9uIGludG8gYSBkb2N1bWVudFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KCEhZG9jdW1lbnQgJiYgISFkb2N1bWVudC5raW5kLCAzMCk7XG4gICAgdmFyIGZyYWdtZW50cyA9IGRvY3VtZW50LmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJzsgfSk7XG4gICAgdmFyIHF1ZXJpZXMgPSBkb2N1bWVudC5kZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHgua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nICYmIHgub3BlcmF0aW9uID09PSAncXVlcnknO1xuICAgIH0pO1xuICAgIHZhciBtdXRhdGlvbnMgPSBkb2N1bWVudC5kZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHgua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nICYmIHgub3BlcmF0aW9uID09PSAnbXV0YXRpb24nO1xuICAgIH0pO1xuICAgIHZhciBzdWJzY3JpcHRpb25zID0gZG9jdW1lbnQuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJyAmJiB4Lm9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbic7XG4gICAgfSk7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KCFmcmFnbWVudHMubGVuZ3RoIHx8XG4gICAgICAgIChxdWVyaWVzLmxlbmd0aCB8fCBtdXRhdGlvbnMubGVuZ3RoIHx8IHN1YnNjcmlwdGlvbnMubGVuZ3RoKSwgXCJQYXNzaW5nIG9ubHkgYSBmcmFnbWVudCB0byAnZ3JhcGhxbCcgaXMgbm90IHlldCBzdXBwb3J0ZWQuIFwiICtcbiAgICAgICAgXCJZb3UgbXVzdCBpbmNsdWRlIGEgcXVlcnksIHN1YnNjcmlwdGlvbiBvciBtdXRhdGlvbiBhcyB3ZWxsXCIpIDogZ2xvYmFscy5pbnZhcmlhbnQoIWZyYWdtZW50cy5sZW5ndGggfHxcbiAgICAgICAgKHF1ZXJpZXMubGVuZ3RoIHx8IG11dGF0aW9ucy5sZW5ndGggfHwgc3Vic2NyaXB0aW9ucy5sZW5ndGgpLCAzMSk7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KHF1ZXJpZXMubGVuZ3RoICsgbXV0YXRpb25zLmxlbmd0aCArIHN1YnNjcmlwdGlvbnMubGVuZ3RoIDw9IDEsIFwicmVhY3QtYXBvbGxvIG9ubHkgc3VwcG9ydHMgYSBxdWVyeSwgc3Vic2NyaXB0aW9uLCBvciBhIG11dGF0aW9uIHBlciBIT0MuIFwiICtcbiAgICAgICAgXCJcIi5jb25jYXQoZG9jdW1lbnQsIFwiIGhhZCBcIikuY29uY2F0KHF1ZXJpZXMubGVuZ3RoLCBcIiBxdWVyaWVzLCBcIikuY29uY2F0KHN1YnNjcmlwdGlvbnMubGVuZ3RoLCBcIiBcIikgK1xuICAgICAgICBcInN1YnNjcmlwdGlvbnMgYW5kIFwiLmNvbmNhdChtdXRhdGlvbnMubGVuZ3RoLCBcIiBtdXRhdGlvbnMuIFwiKSArXG4gICAgICAgIFwiWW91IGNhbiB1c2UgJ2NvbXBvc2UnIHRvIGpvaW4gbXVsdGlwbGUgb3BlcmF0aW9uIHR5cGVzIHRvIGEgY29tcG9uZW50XCIpIDogZ2xvYmFscy5pbnZhcmlhbnQocXVlcmllcy5sZW5ndGggKyBtdXRhdGlvbnMubGVuZ3RoICsgc3Vic2NyaXB0aW9ucy5sZW5ndGggPD0gMSwgMzIpO1xuICAgIHR5cGUgPSBxdWVyaWVzLmxlbmd0aCA/IGV4cG9ydHMuRG9jdW1lbnRUeXBlLlF1ZXJ5IDogZXhwb3J0cy5Eb2N1bWVudFR5cGUuTXV0YXRpb247XG4gICAgaWYgKCFxdWVyaWVzLmxlbmd0aCAmJiAhbXV0YXRpb25zLmxlbmd0aClcbiAgICAgICAgdHlwZSA9IGV4cG9ydHMuRG9jdW1lbnRUeXBlLlN1YnNjcmlwdGlvbjtcbiAgICB2YXIgZGVmaW5pdGlvbnMgPSBxdWVyaWVzLmxlbmd0aFxuICAgICAgICA/IHF1ZXJpZXNcbiAgICAgICAgOiBtdXRhdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICA/IG11dGF0aW9uc1xuICAgICAgICAgICAgOiBzdWJzY3JpcHRpb25zO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChkZWZpbml0aW9ucy5sZW5ndGggPT09IDEsIFwicmVhY3QtYXBvbGxvIG9ubHkgc3VwcG9ydHMgb25lIGRlZmluaXRpb24gcGVyIEhPQy4gXCIuY29uY2F0KGRvY3VtZW50LCBcIiBoYWQgXCIpICtcbiAgICAgICAgXCJcIi5jb25jYXQoZGVmaW5pdGlvbnMubGVuZ3RoLCBcIiBkZWZpbml0aW9ucy4gXCIpICtcbiAgICAgICAgXCJZb3UgY2FuIHVzZSAnY29tcG9zZScgdG8gam9pbiBtdWx0aXBsZSBvcGVyYXRpb24gdHlwZXMgdG8gYSBjb21wb25lbnRcIikgOiBnbG9iYWxzLmludmFyaWFudChkZWZpbml0aW9ucy5sZW5ndGggPT09IDEsIDMzKTtcbiAgICB2YXIgZGVmaW5pdGlvbiA9IGRlZmluaXRpb25zWzBdO1xuICAgIHZhcmlhYmxlcyA9IGRlZmluaXRpb24udmFyaWFibGVEZWZpbml0aW9ucyB8fCBbXTtcbiAgICBpZiAoZGVmaW5pdGlvbi5uYW1lICYmIGRlZmluaXRpb24ubmFtZS5raW5kID09PSAnTmFtZScpIHtcbiAgICAgICAgbmFtZSA9IGRlZmluaXRpb24ubmFtZS52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5hbWUgPSAnZGF0YSc7XG4gICAgfVxuICAgIHZhciBwYXlsb2FkID0geyBuYW1lOiBuYW1lLCB0eXBlOiB0eXBlLCB2YXJpYWJsZXM6IHZhcmlhYmxlcyB9O1xuICAgIGNhY2hlLnNldChkb2N1bWVudCwgcGF5bG9hZCk7XG4gICAgcmV0dXJuIHBheWxvYWQ7XG59XG5mdW5jdGlvbiB2ZXJpZnlEb2N1bWVudFR5cGUoZG9jdW1lbnQsIHR5cGUpIHtcbiAgICB2YXIgb3BlcmF0aW9uID0gcGFyc2VyKGRvY3VtZW50KTtcbiAgICB2YXIgcmVxdWlyZWRPcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uTmFtZSh0eXBlKTtcbiAgICB2YXIgdXNlZE9wZXJhdGlvbk5hbWUgPSBvcGVyYXRpb25OYW1lKG9wZXJhdGlvbi50eXBlKTtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQob3BlcmF0aW9uLnR5cGUgPT09IHR5cGUsIFwiUnVubmluZyBhIFwiLmNvbmNhdChyZXF1aXJlZE9wZXJhdGlvbk5hbWUsIFwiIHJlcXVpcmVzIGEgZ3JhcGhxbCBcIikgK1xuICAgICAgICBcIlwiLmNvbmNhdChyZXF1aXJlZE9wZXJhdGlvbk5hbWUsIFwiLCBidXQgYSBcIikuY29uY2F0KHVzZWRPcGVyYXRpb25OYW1lLCBcIiB3YXMgdXNlZCBpbnN0ZWFkLlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChvcGVyYXRpb24udHlwZSA9PT0gdHlwZSwgMzQpO1xufVxuXG5leHBvcnRzLm9wZXJhdGlvbk5hbWUgPSBvcGVyYXRpb25OYW1lO1xuZXhwb3J0cy5wYXJzZXIgPSBwYXJzZXI7XG5leHBvcnRzLnZlcmlmeURvY3VtZW50VHlwZSA9IHZlcmlmeURvY3VtZW50VHlwZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlci5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnJlcXVpcmUoJy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgY29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpO1xudmFyIGhvb2tzID0gcmVxdWlyZSgnLi9ob29rcycpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJy4vcGFyc2VyJyk7XG5cblxuXG5leHBvcnRzLkFwb2xsb0NvbnN1bWVyID0gY29udGV4dC5BcG9sbG9Db25zdW1lcjtcbmV4cG9ydHMuQXBvbGxvUHJvdmlkZXIgPSBjb250ZXh0LkFwb2xsb1Byb3ZpZGVyO1xuZXhwb3J0cy5nZXRBcG9sbG9Db250ZXh0ID0gY29udGV4dC5nZXRBcG9sbG9Db250ZXh0O1xuZXhwb3J0cy5yZXNldEFwb2xsb0NvbnRleHQgPSBjb250ZXh0LnJlc2V0QXBvbGxvQ29udGV4dDtcbmV4cG9ydHMuRG9jdW1lbnRUeXBlID0gcGFyc2VyLkRvY3VtZW50VHlwZTtcbmV4cG9ydHMub3BlcmF0aW9uTmFtZSA9IHBhcnNlci5vcGVyYXRpb25OYW1lO1xuZXhwb3J0cy5wYXJzZXIgPSBwYXJzZXIucGFyc2VyO1xuZm9yICh2YXIgayBpbiBob29rcykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBleHBvcnRzW2tdID0gaG9va3Nba107XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB0c0ludmFyaWFudCA9IHJlcXVpcmUoJ3RzLWludmFyaWFudCcpO1xudmFyIHByb2Nlc3MkMSA9IHJlcXVpcmUoJ3RzLWludmFyaWFudC9wcm9jZXNzJyk7XG52YXIgZ3JhcGhxbCA9IHJlcXVpcmUoJ2dyYXBocWwnKTtcblxuZnVuY3Rpb24gbWF5YmUodGh1bmspIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdGh1bmsoKTtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7IH1cbn1cblxudmFyIGdsb2JhbCQxID0gKG1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdsb2JhbFRoaXM7IH0pIHx8XG4gICAgbWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93OyB9KSB8fFxuICAgIG1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGY7IH0pIHx8XG4gICAgbWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2xvYmFsOyB9KSB8fFxuICAgIG1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1heWJlLmNvbnN0cnVjdG9yKFwicmV0dXJuIHRoaXNcIikoKTsgfSkpO1xuXG52YXIgX18gPSBcIl9fXCI7XG52YXIgR0xPQkFMX0tFWSA9IFtfXywgX19dLmpvaW4oXCJERVZcIik7XG5mdW5jdGlvbiBnZXRERVYoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oX19ERVZfXyk7XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsJDEsIEdMT0JBTF9LRVksIHtcbiAgICAgICAgICAgIHZhbHVlOiBtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOVjsgfSkgIT09IFwicHJvZHVjdGlvblwiLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBnbG9iYWwkMVtHTE9CQUxfS0VZXTtcbiAgICB9XG59XG52YXIgREVWID0gZ2V0REVWKCk7XG5cbmZ1bmN0aW9uIHJlbW92ZVRlbXBvcmFyeUdsb2JhbHMoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBncmFwaHFsLlNvdXJjZSA9PT0gXCJmdW5jdGlvblwiID8gcHJvY2VzcyQxLnJlbW92ZSgpIDogcHJvY2VzcyQxLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjaGVja0RFVigpIHtcbiAgICBfX0RFVl9fID8gdHNJbnZhcmlhbnQuaW52YXJpYW50KFwiYm9vbGVhblwiID09PSB0eXBlb2YgREVWLCBERVYpIDogdHNJbnZhcmlhbnQuaW52YXJpYW50KFwiYm9vbGVhblwiID09PSB0eXBlb2YgREVWLCAzNik7XG59XG5yZW1vdmVUZW1wb3JhcnlHbG9iYWxzKCk7XG5jaGVja0RFVigpO1xuXG5leHBvcnRzLkludmFyaWFudEVycm9yID0gdHNJbnZhcmlhbnQuSW52YXJpYW50RXJyb3I7XG5leHBvcnRzLmludmFyaWFudCA9IHRzSW52YXJpYW50LmludmFyaWFudDtcbmV4cG9ydHMuREVWID0gREVWO1xuZXhwb3J0cy5jaGVja0RFViA9IGNoZWNrREVWO1xuZXhwb3J0cy5nbG9iYWwgPSBnbG9iYWwkMTtcbmV4cG9ydHMubWF5YmUgPSBtYXliZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdsb2JhbHMuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4vZ2xvYmFscycpO1xudmFyIGdyYXBocWwgPSByZXF1aXJlKCdncmFwaHFsJyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIHplbk9ic2VydmFibGVUcyA9IHJlcXVpcmUoJ3plbi1vYnNlcnZhYmxlLXRzJyk7XG5yZXF1aXJlKCdzeW1ib2wtb2JzZXJ2YWJsZScpO1xuXG5mdW5jdGlvbiBzaG91bGRJbmNsdWRlKF9hLCB2YXJpYWJsZXMpIHtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IF9hLmRpcmVjdGl2ZXM7XG4gICAgaWYgKCFkaXJlY3RpdmVzIHx8ICFkaXJlY3RpdmVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGdldEluY2x1c2lvbkRpcmVjdGl2ZXMoZGlyZWN0aXZlcykuZXZlcnkoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSBfYS5kaXJlY3RpdmUsIGlmQXJndW1lbnQgPSBfYS5pZkFyZ3VtZW50O1xuICAgICAgICB2YXIgZXZhbGVkVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGlmQXJndW1lbnQudmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJykge1xuICAgICAgICAgICAgZXZhbGVkVmFsdWUgPSB2YXJpYWJsZXMgJiYgdmFyaWFibGVzW2lmQXJndW1lbnQudmFsdWUubmFtZS52YWx1ZV07XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZXZhbGVkVmFsdWUgIT09IHZvaWQgMCwgXCJJbnZhbGlkIHZhcmlhYmxlIHJlZmVyZW5jZWQgaW4gQFwiLmNvbmNhdChkaXJlY3RpdmUubmFtZS52YWx1ZSwgXCIgZGlyZWN0aXZlLlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChldmFsZWRWYWx1ZSAhPT0gdm9pZCAwLCAzNyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmFsZWRWYWx1ZSA9IGlmQXJndW1lbnQudmFsdWUudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnc2tpcCcgPyAhZXZhbGVkVmFsdWUgOiBldmFsZWRWYWx1ZTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldERpcmVjdGl2ZU5hbWVzKHJvb3QpIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICBncmFwaHFsLnZpc2l0KHJvb3QsIHtcbiAgICAgICAgRGlyZWN0aXZlOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgbmFtZXMucHVzaChub2RlLm5hbWUudmFsdWUpO1xuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBuYW1lcztcbn1cbmZ1bmN0aW9uIGhhc0RpcmVjdGl2ZXMobmFtZXMsIHJvb3QpIHtcbiAgICByZXR1cm4gZ2V0RGlyZWN0aXZlTmFtZXMocm9vdCkuc29tZShmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbmFtZXMuaW5kZXhPZihuYW1lKSA+IC0xOyB9KTtcbn1cbmZ1bmN0aW9uIGhhc0NsaWVudEV4cG9ydHMoZG9jdW1lbnQpIHtcbiAgICByZXR1cm4gKGRvY3VtZW50ICYmXG4gICAgICAgIGhhc0RpcmVjdGl2ZXMoWydjbGllbnQnXSwgZG9jdW1lbnQpICYmXG4gICAgICAgIGhhc0RpcmVjdGl2ZXMoWydleHBvcnQnXSwgZG9jdW1lbnQpKTtcbn1cbmZ1bmN0aW9uIGlzSW5jbHVzaW9uRGlyZWN0aXZlKF9hKSB7XG4gICAgdmFyIHZhbHVlID0gX2EubmFtZS52YWx1ZTtcbiAgICByZXR1cm4gdmFsdWUgPT09ICdza2lwJyB8fCB2YWx1ZSA9PT0gJ2luY2x1ZGUnO1xufVxuZnVuY3Rpb24gZ2V0SW5jbHVzaW9uRGlyZWN0aXZlcyhkaXJlY3RpdmVzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGlmIChkaXJlY3RpdmVzICYmIGRpcmVjdGl2ZXMubGVuZ3RoKSB7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAoIWlzSW5jbHVzaW9uRGlyZWN0aXZlKGRpcmVjdGl2ZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZUFyZ3VtZW50cyA9IGRpcmVjdGl2ZS5hcmd1bWVudHM7XG4gICAgICAgICAgICB2YXIgZGlyZWN0aXZlTmFtZSA9IGRpcmVjdGl2ZS5uYW1lLnZhbHVlO1xuICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGRpcmVjdGl2ZUFyZ3VtZW50cyAmJiBkaXJlY3RpdmVBcmd1bWVudHMubGVuZ3RoID09PSAxLCBcIkluY29ycmVjdCBudW1iZXIgb2YgYXJndW1lbnRzIGZvciB0aGUgQFwiLmNvbmNhdChkaXJlY3RpdmVOYW1lLCBcIiBkaXJlY3RpdmUuXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KGRpcmVjdGl2ZUFyZ3VtZW50cyAmJiBkaXJlY3RpdmVBcmd1bWVudHMubGVuZ3RoID09PSAxLCAzOCk7XG4gICAgICAgICAgICB2YXIgaWZBcmd1bWVudCA9IGRpcmVjdGl2ZUFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChpZkFyZ3VtZW50Lm5hbWUgJiYgaWZBcmd1bWVudC5uYW1lLnZhbHVlID09PSAnaWYnLCBcIkludmFsaWQgYXJndW1lbnQgZm9yIHRoZSBAXCIuY29uY2F0KGRpcmVjdGl2ZU5hbWUsIFwiIGRpcmVjdGl2ZS5cIikpIDogZ2xvYmFscy5pbnZhcmlhbnQoaWZBcmd1bWVudC5uYW1lICYmIGlmQXJndW1lbnQubmFtZS52YWx1ZSA9PT0gJ2lmJywgMzkpO1xuICAgICAgICAgICAgdmFyIGlmVmFsdWUgPSBpZkFyZ3VtZW50LnZhbHVlO1xuICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGlmVmFsdWUgJiZcbiAgICAgICAgICAgICAgICAoaWZWYWx1ZS5raW5kID09PSAnVmFyaWFibGUnIHx8IGlmVmFsdWUua2luZCA9PT0gJ0Jvb2xlYW5WYWx1ZScpLCBcIkFyZ3VtZW50IGZvciB0aGUgQFwiLmNvbmNhdChkaXJlY3RpdmVOYW1lLCBcIiBkaXJlY3RpdmUgbXVzdCBiZSBhIHZhcmlhYmxlIG9yIGEgYm9vbGVhbiB2YWx1ZS5cIikpIDogZ2xvYmFscy5pbnZhcmlhbnQoaWZWYWx1ZSAmJlxuICAgICAgICAgICAgICAgIChpZlZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZScgfHwgaWZWYWx1ZS5raW5kID09PSAnQm9vbGVhblZhbHVlJyksIDQwKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgZGlyZWN0aXZlOiBkaXJlY3RpdmUsIGlmQXJndW1lbnQ6IGlmQXJndW1lbnQgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQoZG9jdW1lbnQsIGZyYWdtZW50TmFtZSkge1xuICAgIHZhciBhY3R1YWxGcmFnbWVudE5hbWUgPSBmcmFnbWVudE5hbWU7XG4gICAgdmFyIGZyYWdtZW50cyA9IFtdO1xuICAgIGRvY3VtZW50LmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJGb3VuZCBhIFwiLmNvbmNhdChkZWZpbml0aW9uLm9wZXJhdGlvbiwgXCIgb3BlcmF0aW9uXCIpLmNvbmNhdChkZWZpbml0aW9uLm5hbWUgPyBcIiBuYW1lZCAnXCIuY29uY2F0KGRlZmluaXRpb24ubmFtZS52YWx1ZSwgXCInXCIpIDogJycsIFwiLiBcIikgK1xuICAgICAgICAgICAgICAgICdObyBvcGVyYXRpb25zIGFyZSBhbGxvd2VkIHdoZW4gdXNpbmcgYSBmcmFnbWVudCBhcyBhIHF1ZXJ5LiBPbmx5IGZyYWdtZW50cyBhcmUgYWxsb3dlZC4nKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDQxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJykge1xuICAgICAgICAgICAgZnJhZ21lbnRzLnB1c2goZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGFjdHVhbEZyYWdtZW50TmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGZyYWdtZW50cy5sZW5ndGggPT09IDEsIFwiRm91bmQgXCIuY29uY2F0KGZyYWdtZW50cy5sZW5ndGgsIFwiIGZyYWdtZW50cy4gYGZyYWdtZW50TmFtZWAgbXVzdCBiZSBwcm92aWRlZCB3aGVuIHRoZXJlIGlzIG5vdCBleGFjdGx5IDEgZnJhZ21lbnQuXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KGZyYWdtZW50cy5sZW5ndGggPT09IDEsIDQyKTtcbiAgICAgICAgYWN0dWFsRnJhZ21lbnROYW1lID0gZnJhZ21lbnRzWzBdLm5hbWUudmFsdWU7XG4gICAgfVxuICAgIHZhciBxdWVyeSA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBkb2N1bWVudCksIHsgZGVmaW5pdGlvbnM6IHRzbGliLl9fc3ByZWFkQXJyYXkoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdPcGVyYXRpb25EZWZpbml0aW9uJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246ICdxdWVyeScsXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZyYWdtZW50U3ByZWFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFjdHVhbEZyYWdtZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICBdLCBkb2N1bWVudC5kZWZpbml0aW9ucywgdHJ1ZSkgfSk7XG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRNYXAoZnJhZ21lbnRzKSB7XG4gICAgaWYgKGZyYWdtZW50cyA9PT0gdm9pZCAwKSB7IGZyYWdtZW50cyA9IFtdOyB9XG4gICAgdmFyIHN5bVRhYmxlID0ge307XG4gICAgZnJhZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKGZyYWdtZW50KSB7XG4gICAgICAgIHN5bVRhYmxlW2ZyYWdtZW50Lm5hbWUudmFsdWVdID0gZnJhZ21lbnQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN5bVRhYmxlO1xufVxuZnVuY3Rpb24gZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uKHNlbGVjdGlvbiwgZnJhZ21lbnRNYXApIHtcbiAgICBzd2l0Y2ggKHNlbGVjdGlvbi5raW5kKSB7XG4gICAgICAgIGNhc2UgJ0lubGluZUZyYWdtZW50JzpcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3Rpb247XG4gICAgICAgIGNhc2UgJ0ZyYWdtZW50U3ByZWFkJzoge1xuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZnJhZ21lbnRNYXAgJiYgZnJhZ21lbnRNYXBbc2VsZWN0aW9uLm5hbWUudmFsdWVdO1xuICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGZyYWdtZW50LCBcIk5vIGZyYWdtZW50IG5hbWVkIFwiLmNvbmNhdChzZWxlY3Rpb24ubmFtZS52YWx1ZSwgXCIuXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KGZyYWdtZW50LCA0Myk7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNOb25OdWxsT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIG1ha2VSZWZlcmVuY2UoaWQpIHtcbiAgICByZXR1cm4geyBfX3JlZjogU3RyaW5nKGlkKSB9O1xufVxuZnVuY3Rpb24gaXNSZWZlcmVuY2Uob2JqKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4ob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmouX19yZWYgPT09ICdzdHJpbmcnKTtcbn1cbmZ1bmN0aW9uIGlzRG9jdW1lbnROb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc05vbk51bGxPYmplY3QodmFsdWUpICYmXG4gICAgICAgIHZhbHVlLmtpbmQgPT09IFwiRG9jdW1lbnRcIiAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KHZhbHVlLmRlZmluaXRpb25zKSk7XG59XG5mdW5jdGlvbiBpc1N0cmluZ1ZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdTdHJpbmdWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0Jvb2xlYW5WYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnQm9vbGVhblZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzSW50VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0ludFZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzRmxvYXRWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnRmxvYXRWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc1ZhcmlhYmxlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZSc7XG59XG5mdW5jdGlvbiBpc09iamVjdFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdPYmplY3RWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0xpc3RWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnTGlzdFZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzRW51bVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdFbnVtVmFsdWUnO1xufVxuZnVuY3Rpb24gaXNOdWxsVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ051bGxWYWx1ZSc7XG59XG5mdW5jdGlvbiB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24oYXJnT2JqLCBuYW1lLCB2YWx1ZSwgdmFyaWFibGVzKSB7XG4gICAgaWYgKGlzSW50VmFsdWUodmFsdWUpIHx8IGlzRmxvYXRWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gTnVtYmVyKHZhbHVlLnZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNCb29sZWFuVmFsdWUodmFsdWUpIHx8IGlzU3RyaW5nVmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdFZhbHVlKHZhbHVlKSkge1xuICAgICAgICB2YXIgbmVzdGVkQXJnT2JqXzEgPSB7fTtcbiAgICAgICAgdmFsdWUuZmllbGRzLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKG5lc3RlZEFyZ09ial8xLCBvYmoubmFtZSwgb2JqLnZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gbmVzdGVkQXJnT2JqXzE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVmFyaWFibGUodmFsdWUpKSB7XG4gICAgICAgIHZhciB2YXJpYWJsZVZhbHVlID0gKHZhcmlhYmxlcyB8fCB7fSlbdmFsdWUubmFtZS52YWx1ZV07XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IHZhcmlhYmxlVmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTGlzdFZhbHVlKHZhbHVlKSkge1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YWx1ZS52YWx1ZXMubWFwKGZ1bmN0aW9uIChsaXN0VmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBuZXN0ZWRBcmdBcnJheU9iaiA9IHt9O1xuICAgICAgICAgICAgdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKG5lc3RlZEFyZ0FycmF5T2JqLCBuYW1lLCBsaXN0VmFsdWUsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkQXJnQXJyYXlPYmpbbmFtZS52YWx1ZV07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0VudW1WYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTnVsbFZhbHVlKHZhbHVlKSkge1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiVGhlIGlubGluZSBhcmd1bWVudCBcXFwiXCIuY29uY2F0KG5hbWUudmFsdWUsIFwiXFxcIiBvZiBraW5kIFxcXCJcIikuY29uY2F0KHZhbHVlLmtpbmQsIFwiXFxcIlwiKSArXG4gICAgICAgICAgICAnaXMgbm90IHN1cHBvcnRlZC4gVXNlIHZhcmlhYmxlcyBpbnN0ZWFkIG9mIGlubGluZSBhcmd1bWVudHMgdG8gJyArXG4gICAgICAgICAgICAnb3ZlcmNvbWUgdGhpcyBsaW1pdGF0aW9uLicpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoNTIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0b3JlS2V5TmFtZUZyb21GaWVsZChmaWVsZCwgdmFyaWFibGVzKSB7XG4gICAgdmFyIGRpcmVjdGl2ZXNPYmogPSBudWxsO1xuICAgIGlmIChmaWVsZC5kaXJlY3RpdmVzKSB7XG4gICAgICAgIGRpcmVjdGl2ZXNPYmogPSB7fTtcbiAgICAgICAgZmllbGQuZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXNPYmpbZGlyZWN0aXZlLm5hbWUudmFsdWVdID0ge307XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3VtZW50cykge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZS5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfYS5uYW1lLCB2YWx1ZSA9IF9hLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGRpcmVjdGl2ZXNPYmpbZGlyZWN0aXZlLm5hbWUudmFsdWVdLCBuYW1lLCB2YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBhcmdPYmogPSBudWxsO1xuICAgIGlmIChmaWVsZC5hcmd1bWVudHMgJiYgZmllbGQuYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBhcmdPYmogPSB7fTtcbiAgICAgICAgZmllbGQuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGFyZ09iaiwgbmFtZSwgdmFsdWUsIHZhcmlhYmxlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0U3RvcmVLZXlOYW1lKGZpZWxkLm5hbWUudmFsdWUsIGFyZ09iaiwgZGlyZWN0aXZlc09iaik7XG59XG52YXIgS05PV05fRElSRUNUSVZFUyA9IFtcbiAgICAnY29ubmVjdGlvbicsXG4gICAgJ2luY2x1ZGUnLFxuICAgICdza2lwJyxcbiAgICAnY2xpZW50JyxcbiAgICAncmVzdCcsXG4gICAgJ2V4cG9ydCcsXG5dO1xudmFyIGdldFN0b3JlS2V5TmFtZSA9IE9iamVjdC5hc3NpZ24oZnVuY3Rpb24gKGZpZWxkTmFtZSwgYXJncywgZGlyZWN0aXZlcykge1xuICAgIGlmIChhcmdzICYmXG4gICAgICAgIGRpcmVjdGl2ZXMgJiZcbiAgICAgICAgZGlyZWN0aXZlc1snY29ubmVjdGlvbiddICYmXG4gICAgICAgIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsna2V5J10pIHtcbiAgICAgICAgaWYgKGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsnZmlsdGVyJ10gJiZcbiAgICAgICAgICAgIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsnZmlsdGVyJ10ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGZpbHRlcktleXMgPSBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddXG4gICAgICAgICAgICAgICAgPyBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddXG4gICAgICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgICAgIGZpbHRlcktleXMuc29ydCgpO1xuICAgICAgICAgICAgdmFyIGZpbHRlcmVkQXJnc18xID0ge307XG4gICAgICAgICAgICBmaWx0ZXJLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkQXJnc18xW2tleV0gPSBhcmdzW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2tleSddLCBcIihcIikuY29uY2F0KHN0cmluZ2lmeShmaWx0ZXJlZEFyZ3NfMSksIFwiKVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2tleSddO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBjb21wbGV0ZUZpZWxkTmFtZSA9IGZpZWxkTmFtZTtcbiAgICBpZiAoYXJncykge1xuICAgICAgICB2YXIgc3RyaW5naWZpZWRBcmdzID0gc3RyaW5naWZ5KGFyZ3MpO1xuICAgICAgICBjb21wbGV0ZUZpZWxkTmFtZSArPSBcIihcIi5jb25jYXQoc3RyaW5naWZpZWRBcmdzLCBcIilcIik7XG4gICAgfVxuICAgIGlmIChkaXJlY3RpdmVzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGRpcmVjdGl2ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKEtOT1dOX0RJUkVDVElWRVMuaW5kZXhPZihrZXkpICE9PSAtMSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlc1trZXldICYmIE9iamVjdC5rZXlzKGRpcmVjdGl2ZXNba2V5XSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGVGaWVsZE5hbWUgKz0gXCJAXCIuY29uY2F0KGtleSwgXCIoXCIpLmNvbmNhdChzdHJpbmdpZnkoZGlyZWN0aXZlc1trZXldKSwgXCIpXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGVGaWVsZE5hbWUgKz0gXCJAXCIuY29uY2F0KGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29tcGxldGVGaWVsZE5hbWU7XG59LCB7XG4gICAgc2V0U3RyaW5naWZ5OiBmdW5jdGlvbiAocykge1xuICAgICAgICB2YXIgcHJldmlvdXMgPSBzdHJpbmdpZnk7XG4gICAgICAgIHN0cmluZ2lmeSA9IHM7XG4gICAgICAgIHJldHVybiBwcmV2aW91cztcbiAgICB9LFxufSk7XG52YXIgc3RyaW5naWZ5ID0gZnVuY3Rpb24gZGVmYXVsdFN0cmluZ2lmeSh2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgc3RyaW5naWZ5UmVwbGFjZXIpO1xufTtcbmZ1bmN0aW9uIHN0cmluZ2lmeVJlcGxhY2VyKF9rZXksIHZhbHVlKSB7XG4gICAgaWYgKGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gT2JqZWN0LmtleXModmFsdWUpLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24gKGNvcHksIGtleSkge1xuICAgICAgICAgICAgY29weVtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGFyZ3VtZW50c09iamVjdEZyb21GaWVsZChmaWVsZCwgdmFyaWFibGVzKSB7XG4gICAgaWYgKGZpZWxkLmFyZ3VtZW50cyAmJiBmaWVsZC5hcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBhcmdPYmpfMSA9IHt9O1xuICAgICAgICBmaWVsZC5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24oYXJnT2JqXzEsIG5hbWUsIHZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFyZ09ial8xO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHJlc3VsdEtleU5hbWVGcm9tRmllbGQoZmllbGQpIHtcbiAgICByZXR1cm4gZmllbGQuYWxpYXMgPyBmaWVsZC5hbGlhcy52YWx1ZSA6IGZpZWxkLm5hbWUudmFsdWU7XG59XG5mdW5jdGlvbiBnZXRUeXBlbmFtZUZyb21SZXN1bHQocmVzdWx0LCBzZWxlY3Rpb25TZXQsIGZyYWdtZW50TWFwKSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQuX190eXBlbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5fX3R5cGVuYW1lO1xuICAgIH1cbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSBfYVtfaV07XG4gICAgICAgIGlmIChpc0ZpZWxkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ubmFtZS52YWx1ZSA9PT0gJ19fdHlwZW5hbWUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFtyZXN1bHRLZXlOYW1lRnJvbUZpZWxkKHNlbGVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHR5cGVuYW1lID0gZ2V0VHlwZW5hbWVGcm9tUmVzdWx0KHJlc3VsdCwgZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uKHNlbGVjdGlvbiwgZnJhZ21lbnRNYXApLnNlbGVjdGlvblNldCwgZnJhZ21lbnRNYXApO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0eXBlbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBpc0ZpZWxkKHNlbGVjdGlvbikge1xuICAgIHJldHVybiBzZWxlY3Rpb24ua2luZCA9PT0gJ0ZpZWxkJztcbn1cbmZ1bmN0aW9uIGlzSW5saW5lRnJhZ21lbnQoc2VsZWN0aW9uKSB7XG4gICAgcmV0dXJuIHNlbGVjdGlvbi5raW5kID09PSAnSW5saW5lRnJhZ21lbnQnO1xufVxuXG5mdW5jdGlvbiBjaGVja0RvY3VtZW50KGRvYykge1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChkb2MgJiYgZG9jLmtpbmQgPT09ICdEb2N1bWVudCcsIFwiRXhwZWN0aW5nIGEgcGFyc2VkIEdyYXBoUUwgZG9jdW1lbnQuIFBlcmhhcHMgeW91IG5lZWQgdG8gd3JhcCB0aGUgcXVlcnkgc3RyaW5nIGluIGEgXFxcImdxbFxcXCIgdGFnPyBodHRwOi8vZG9jcy5hcG9sbG9zdGFjay5jb20vYXBvbGxvLWNsaWVudC9jb3JlLmh0bWwjZ3FsXCIpIDogZ2xvYmFscy5pbnZhcmlhbnQoZG9jICYmIGRvYy5raW5kID09PSAnRG9jdW1lbnQnLCA0NCk7XG4gICAgdmFyIG9wZXJhdGlvbnMgPSBkb2MuZGVmaW5pdGlvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJzsgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kICE9PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIlNjaGVtYSB0eXBlIGRlZmluaXRpb25zIG5vdCBhbGxvd2VkIGluIHF1ZXJpZXMuIEZvdW5kOiBcXFwiXCIuY29uY2F0KGRlZmluaXRpb24ua2luZCwgXCJcXFwiXCIpKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDQ1KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICB9KTtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQob3BlcmF0aW9ucy5sZW5ndGggPD0gMSwgXCJBbWJpZ3VvdXMgR3JhcGhRTCBkb2N1bWVudDogY29udGFpbnMgXCIuY29uY2F0KG9wZXJhdGlvbnMubGVuZ3RoLCBcIiBvcGVyYXRpb25zXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KG9wZXJhdGlvbnMubGVuZ3RoIDw9IDEsIDQ2KTtcbiAgICByZXR1cm4gZG9jO1xufVxuZnVuY3Rpb24gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihkb2MpIHtcbiAgICBjaGVja0RvY3VtZW50KGRvYyk7XG4gICAgcmV0dXJuIGRvYy5kZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGRlZmluaXRpb24pIHsgcmV0dXJuIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nOyB9KVswXTtcbn1cbmZ1bmN0aW9uIGdldE9wZXJhdGlvbk5hbWUoZG9jKSB7XG4gICAgcmV0dXJuIChkb2MuZGVmaW5pdGlvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiYgZGVmaW5pdGlvbi5uYW1lO1xuICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgubmFtZS52YWx1ZTsgfSlbMF0gfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBnZXRGcmFnbWVudERlZmluaXRpb25zKGRvYykge1xuICAgIHJldHVybiBkb2MuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7IHJldHVybiBkZWZpbml0aW9uLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nOyB9KTtcbn1cbmZ1bmN0aW9uIGdldFF1ZXJ5RGVmaW5pdGlvbihkb2MpIHtcbiAgICB2YXIgcXVlcnlEZWYgPSBnZXRPcGVyYXRpb25EZWZpbml0aW9uKGRvYyk7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KHF1ZXJ5RGVmICYmIHF1ZXJ5RGVmLm9wZXJhdGlvbiA9PT0gJ3F1ZXJ5JywgJ011c3QgY29udGFpbiBhIHF1ZXJ5IGRlZmluaXRpb24uJykgOiBnbG9iYWxzLmludmFyaWFudChxdWVyeURlZiAmJiBxdWVyeURlZi5vcGVyYXRpb24gPT09ICdxdWVyeScsIDQ3KTtcbiAgICByZXR1cm4gcXVlcnlEZWY7XG59XG5mdW5jdGlvbiBnZXRGcmFnbWVudERlZmluaXRpb24oZG9jKSB7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGRvYy5raW5kID09PSAnRG9jdW1lbnQnLCBcIkV4cGVjdGluZyBhIHBhcnNlZCBHcmFwaFFMIGRvY3VtZW50LiBQZXJoYXBzIHlvdSBuZWVkIHRvIHdyYXAgdGhlIHF1ZXJ5IHN0cmluZyBpbiBhIFxcXCJncWxcXFwiIHRhZz8gaHR0cDovL2RvY3MuYXBvbGxvc3RhY2suY29tL2Fwb2xsby1jbGllbnQvY29yZS5odG1sI2dxbFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KGRvYy5raW5kID09PSAnRG9jdW1lbnQnLCA0OCk7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGRvYy5kZWZpbml0aW9ucy5sZW5ndGggPD0gMSwgJ0ZyYWdtZW50IG11c3QgaGF2ZSBleGFjdGx5IG9uZSBkZWZpbml0aW9uLicpIDogZ2xvYmFscy5pbnZhcmlhbnQoZG9jLmRlZmluaXRpb25zLmxlbmd0aCA8PSAxLCA0OSk7XG4gICAgdmFyIGZyYWdtZW50RGVmID0gZG9jLmRlZmluaXRpb25zWzBdO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudERlZi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJywgJ011c3QgYmUgYSBmcmFnbWVudCBkZWZpbml0aW9uLicpIDogZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnREZWYua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicsIDUwKTtcbiAgICByZXR1cm4gZnJhZ21lbnREZWY7XG59XG5mdW5jdGlvbiBnZXRNYWluRGVmaW5pdGlvbihxdWVyeURvYykge1xuICAgIGNoZWNrRG9jdW1lbnQocXVlcnlEb2MpO1xuICAgIHZhciBmcmFnbWVudERlZmluaXRpb247XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHF1ZXJ5RG9jLmRlZmluaXRpb25zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgZGVmaW5pdGlvbiA9IF9hW19pXTtcbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nKSB7XG4gICAgICAgICAgICB2YXIgb3BlcmF0aW9uID0gZGVmaW5pdGlvbi5vcGVyYXRpb247XG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uID09PSAncXVlcnknIHx8XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uID09PSAnbXV0YXRpb24nIHx8XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nICYmICFmcmFnbWVudERlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGZyYWdtZW50RGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYWdtZW50RGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gZnJhZ21lbnREZWZpbml0aW9uO1xuICAgIH1cbiAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoJ0V4cGVjdGVkIGEgcGFyc2VkIEdyYXBoUUwgcXVlcnkgd2l0aCBhIHF1ZXJ5LCBtdXRhdGlvbiwgc3Vic2NyaXB0aW9uLCBvciBhIGZyYWdtZW50LicpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoNTEpO1xufVxuZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlcyhkZWZpbml0aW9uKSB7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBkZWZzID0gZGVmaW5pdGlvbiAmJiBkZWZpbml0aW9uLnZhcmlhYmxlRGVmaW5pdGlvbnM7XG4gICAgaWYgKGRlZnMgJiYgZGVmcy5sZW5ndGgpIHtcbiAgICAgICAgZGVmcy5mb3JFYWNoKGZ1bmN0aW9uIChkZWYpIHtcbiAgICAgICAgICAgIGlmIChkZWYuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGRlZmF1bHRWYWx1ZXMsIGRlZi52YXJpYWJsZS5uYW1lLCBkZWYuZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0VmFsdWVzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJJblBsYWNlKGFycmF5LCB0ZXN0LCBjb250ZXh0KSB7XG4gICAgdmFyIHRhcmdldCA9IDA7XG4gICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSwgaSkge1xuICAgICAgICBpZiAodGVzdC5jYWxsKHRoaXMsIGVsZW0sIGksIGFycmF5KSkge1xuICAgICAgICAgICAgYXJyYXlbdGFyZ2V0KytdID0gZWxlbTtcbiAgICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuICAgIGFycmF5Lmxlbmd0aCA9IHRhcmdldDtcbiAgICByZXR1cm4gYXJyYXk7XG59XG5cbnZhciBUWVBFTkFNRV9GSUVMRCA9IHtcbiAgICBraW5kOiAnRmllbGQnLFxuICAgIG5hbWU6IHtcbiAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICB2YWx1ZTogJ19fdHlwZW5hbWUnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gaXNFbXB0eShvcCwgZnJhZ21lbnRzKSB7XG4gICAgcmV0dXJuIG9wLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmV2ZXJ5KGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbi5raW5kID09PSAnRnJhZ21lbnRTcHJlYWQnICYmXG4gICAgICAgICAgICBpc0VtcHR5KGZyYWdtZW50c1tzZWxlY3Rpb24ubmFtZS52YWx1ZV0sIGZyYWdtZW50cyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBudWxsSWZEb2NJc0VtcHR5KGRvYykge1xuICAgIHJldHVybiBpc0VtcHR5KGdldE9wZXJhdGlvbkRlZmluaXRpb24oZG9jKSB8fCBnZXRGcmFnbWVudERlZmluaXRpb24oZG9jKSwgY3JlYXRlRnJhZ21lbnRNYXAoZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhkb2MpKSlcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogZG9jO1xufVxuZnVuY3Rpb24gZ2V0RGlyZWN0aXZlTWF0Y2hlcihkaXJlY3RpdmVzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3RpdmVzLnNvbWUoZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgcmV0dXJuIChkaXIubmFtZSAmJiBkaXIubmFtZSA9PT0gZGlyZWN0aXZlLm5hbWUudmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgKGRpci50ZXN0ICYmIGRpci50ZXN0KGRpcmVjdGl2ZSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVtb3ZlRGlyZWN0aXZlc0Zyb21Eb2N1bWVudChkaXJlY3RpdmVzLCBkb2MpIHtcbiAgICB2YXIgdmFyaWFibGVzSW5Vc2UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciB2YXJpYWJsZXNUb1JlbW92ZSA9IFtdO1xuICAgIHZhciBmcmFnbWVudFNwcmVhZHNJblVzZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGZyYWdtZW50U3ByZWFkc1RvUmVtb3ZlID0gW107XG4gICAgdmFyIG1vZGlmaWVkRG9jID0gbnVsbElmRG9jSXNFbXB0eShncmFwaHFsLnZpc2l0KGRvYywge1xuICAgICAgICBWYXJpYWJsZToge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlLCBfa2V5LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmtpbmQgIT09ICdWYXJpYWJsZURlZmluaXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc0luVXNlW25vZGUubmFtZS52YWx1ZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIEZpZWxkOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aXZlcyAmJiBub2RlLmRpcmVjdGl2ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNob3VsZFJlbW92ZUZpZWxkID0gZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHsgcmV0dXJuIGRpcmVjdGl2ZS5yZW1vdmU7IH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUmVtb3ZlRmllbGQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGlyZWN0aXZlcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kaXJlY3RpdmVzLnNvbWUoZ2V0RGlyZWN0aXZlTWF0Y2hlcihkaXJlY3RpdmVzKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmFyZ3VtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJnLnZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1RvUmVtb3ZlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFyZy52YWx1ZS5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEFsbEZyYWdtZW50U3ByZWFkc0Zyb21TZWxlY3Rpb25TZXQobm9kZS5zZWxlY3Rpb25TZXQpLmZvckVhY2goZnVuY3Rpb24gKGZyYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRTcHJlYWRzVG9SZW1vdmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmcmFnLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBGcmFnbWVudFNwcmVhZDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTcHJlYWRzSW5Vc2Vbbm9kZS5uYW1lLnZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBEaXJlY3RpdmU6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChnZXREaXJlY3RpdmVNYXRjaGVyKGRpcmVjdGl2ZXMpKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSkpO1xuICAgIGlmIChtb2RpZmllZERvYyAmJlxuICAgICAgICBmaWx0ZXJJblBsYWNlKHZhcmlhYmxlc1RvUmVtb3ZlLCBmdW5jdGlvbiAodikgeyByZXR1cm4gISF2Lm5hbWUgJiYgIXZhcmlhYmxlc0luVXNlW3YubmFtZV07IH0pLmxlbmd0aCkge1xuICAgICAgICBtb2RpZmllZERvYyA9IHJlbW92ZUFyZ3VtZW50c0Zyb21Eb2N1bWVudCh2YXJpYWJsZXNUb1JlbW92ZSwgbW9kaWZpZWREb2MpO1xuICAgIH1cbiAgICBpZiAobW9kaWZpZWREb2MgJiZcbiAgICAgICAgZmlsdGVySW5QbGFjZShmcmFnbWVudFNwcmVhZHNUb1JlbW92ZSwgZnVuY3Rpb24gKGZzKSB7IHJldHVybiAhIWZzLm5hbWUgJiYgIWZyYWdtZW50U3ByZWFkc0luVXNlW2ZzLm5hbWVdOyB9KVxuICAgICAgICAgICAgLmxlbmd0aCkge1xuICAgICAgICBtb2RpZmllZERvYyA9IHJlbW92ZUZyYWdtZW50U3ByZWFkRnJvbURvY3VtZW50KGZyYWdtZW50U3ByZWFkc1RvUmVtb3ZlLCBtb2RpZmllZERvYyk7XG4gICAgfVxuICAgIHJldHVybiBtb2RpZmllZERvYztcbn1cbnZhciBhZGRUeXBlbmFtZVRvRG9jdW1lbnQgPSBPYmplY3QuYXNzaWduKGZ1bmN0aW9uIChkb2MpIHtcbiAgICByZXR1cm4gZ3JhcGhxbC52aXNpdChjaGVja0RvY3VtZW50KGRvYyksIHtcbiAgICAgICAgU2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUsIF9rZXksIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rpb25zID0gbm9kZS5zZWxlY3Rpb25zO1xuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBza2lwID0gc2VsZWN0aW9ucy5zb21lKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpc0ZpZWxkKHNlbGVjdGlvbikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb24ubmFtZS52YWx1ZSA9PT0gJ19fdHlwZW5hbWUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLm5hbWUudmFsdWUubGFzdEluZGV4T2YoJ19fJywgMCkgPT09IDApKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2tpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICBpZiAoaXNGaWVsZChmaWVsZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlyZWN0aXZlcyAmJlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXJlY3RpdmVzLnNvbWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZS52YWx1ZSA9PT0gJ2V4cG9ydCc7IH0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBub2RlKSwgeyBzZWxlY3Rpb25zOiB0c2xpYi5fX3NwcmVhZEFycmF5KHRzbGliLl9fc3ByZWFkQXJyYXkoW10sIHNlbGVjdGlvbnMsIHRydWUpLCBbVFlQRU5BTUVfRklFTERdLCBmYWxzZSkgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xufSwge1xuICAgIGFkZGVkOiBmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkID09PSBUWVBFTkFNRV9GSUVMRDtcbiAgICB9LFxufSk7XG52YXIgY29ubmVjdGlvblJlbW92ZUNvbmZpZyA9IHtcbiAgICB0ZXN0OiBmdW5jdGlvbiAoZGlyZWN0aXZlKSB7XG4gICAgICAgIHZhciB3aWxsUmVtb3ZlID0gZGlyZWN0aXZlLm5hbWUudmFsdWUgPT09ICdjb25uZWN0aW9uJztcbiAgICAgICAgaWYgKHdpbGxSZW1vdmUpIHtcbiAgICAgICAgICAgIGlmICghZGlyZWN0aXZlLmFyZ3VtZW50cyB8fFxuICAgICAgICAgICAgICAgICFkaXJlY3RpdmUuYXJndW1lbnRzLnNvbWUoZnVuY3Rpb24gKGFyZykgeyByZXR1cm4gYXJnLm5hbWUudmFsdWUgPT09ICdrZXknOyB9KSkge1xuICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybignUmVtb3ZpbmcgYW4gQGNvbm5lY3Rpb24gZGlyZWN0aXZlIGV2ZW4gdGhvdWdoIGl0IGRvZXMgbm90IGhhdmUgYSBrZXkuICcgK1xuICAgICAgICAgICAgICAgICAgICAnWW91IG1heSB3YW50IHRvIHVzZSB0aGUga2V5IHBhcmFtZXRlciB0byBzcGVjaWZ5IGEgc3RvcmUga2V5LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWxsUmVtb3ZlO1xuICAgIH0sXG59O1xuZnVuY3Rpb24gcmVtb3ZlQ29ubmVjdGlvbkRpcmVjdGl2ZUZyb21Eb2N1bWVudChkb2MpIHtcbiAgICByZXR1cm4gcmVtb3ZlRGlyZWN0aXZlc0Zyb21Eb2N1bWVudChbY29ubmVjdGlvblJlbW92ZUNvbmZpZ10sIGNoZWNrRG9jdW1lbnQoZG9jKSk7XG59XG5mdW5jdGlvbiBnZXRBcmd1bWVudE1hdGNoZXIoY29uZmlnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGFyZ3VtZW50TWF0Y2hlcihhcmd1bWVudCkge1xuICAgICAgICByZXR1cm4gY29uZmlnLnNvbWUoZnVuY3Rpb24gKGFDb25maWcpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmd1bWVudC52YWx1ZSAmJlxuICAgICAgICAgICAgICAgIGFyZ3VtZW50LnZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZScgJiZcbiAgICAgICAgICAgICAgICBhcmd1bWVudC52YWx1ZS5uYW1lICYmXG4gICAgICAgICAgICAgICAgKGFDb25maWcubmFtZSA9PT0gYXJndW1lbnQudmFsdWUubmFtZS52YWx1ZSB8fFxuICAgICAgICAgICAgICAgICAgICAoYUNvbmZpZy50ZXN0ICYmIGFDb25maWcudGVzdChhcmd1bWVudCkpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUFyZ3VtZW50c0Zyb21Eb2N1bWVudChjb25maWcsIGRvYykge1xuICAgIHZhciBhcmdNYXRjaGVyID0gZ2V0QXJndW1lbnRNYXRjaGVyKGNvbmZpZyk7XG4gICAgcmV0dXJuIG51bGxJZkRvY0lzRW1wdHkoZ3JhcGhxbC52aXNpdChkb2MsIHtcbiAgICAgICAgT3BlcmF0aW9uRGVmaW5pdGlvbjoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBub2RlKSwgeyB2YXJpYWJsZURlZmluaXRpb25zOiBub2RlLnZhcmlhYmxlRGVmaW5pdGlvbnMgPyBub2RlLnZhcmlhYmxlRGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh2YXJEZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhY29uZmlnLnNvbWUoZnVuY3Rpb24gKGFyZykgeyByZXR1cm4gYXJnLm5hbWUgPT09IHZhckRlZi52YXJpYWJsZS5uYW1lLnZhbHVlOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkgOiBbXSB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIEZpZWxkOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2hvdWxkUmVtb3ZlRmllbGQgPSBjb25maWcuc29tZShmdW5jdGlvbiAoYXJnQ29uZmlnKSB7IHJldHVybiBhcmdDb25maWcucmVtb3ZlOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUmVtb3ZlRmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ01hdGNoQ291bnRfMSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmFyZ3VtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ01hdGNoZXIoYXJnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdNYXRjaENvdW50XzEgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJnTWF0Y2hDb3VudF8xID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIEFyZ3VtZW50OiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJnTWF0Y2hlcihub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUZyYWdtZW50U3ByZWFkRnJvbURvY3VtZW50KGNvbmZpZywgZG9jKSB7XG4gICAgZnVuY3Rpb24gZW50ZXIobm9kZSkge1xuICAgICAgICBpZiAoY29uZmlnLnNvbWUoZnVuY3Rpb24gKGRlZikgeyByZXR1cm4gZGVmLm5hbWUgPT09IG5vZGUubmFtZS52YWx1ZTsgfSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsSWZEb2NJc0VtcHR5KGdyYXBocWwudmlzaXQoZG9jLCB7XG4gICAgICAgIEZyYWdtZW50U3ByZWFkOiB7IGVudGVyOiBlbnRlciB9LFxuICAgICAgICBGcmFnbWVudERlZmluaXRpb246IHsgZW50ZXI6IGVudGVyIH0sXG4gICAgfSkpO1xufVxuZnVuY3Rpb24gZ2V0QWxsRnJhZ21lbnRTcHJlYWRzRnJvbVNlbGVjdGlvblNldChzZWxlY3Rpb25TZXQpIHtcbiAgICB2YXIgYWxsRnJhZ21lbnRzID0gW107XG4gICAgc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmICgoaXNGaWVsZChzZWxlY3Rpb24pIHx8IGlzSW5saW5lRnJhZ21lbnQoc2VsZWN0aW9uKSkgJiZcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgIGdldEFsbEZyYWdtZW50U3ByZWFkc0Zyb21TZWxlY3Rpb25TZXQoc2VsZWN0aW9uLnNlbGVjdGlvblNldCkuZm9yRWFjaChmdW5jdGlvbiAoZnJhZykgeyByZXR1cm4gYWxsRnJhZ21lbnRzLnB1c2goZnJhZyk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdGlvbi5raW5kID09PSAnRnJhZ21lbnRTcHJlYWQnKSB7XG4gICAgICAgICAgICBhbGxGcmFnbWVudHMucHVzaChzZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsbEZyYWdtZW50cztcbn1cbmZ1bmN0aW9uIGJ1aWxkUXVlcnlGcm9tU2VsZWN0aW9uU2V0KGRvY3VtZW50KSB7XG4gICAgdmFyIGRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbihkb2N1bWVudCk7XG4gICAgdmFyIGRlZmluaXRpb25PcGVyYXRpb24gPSBkZWZpbml0aW9uLm9wZXJhdGlvbjtcbiAgICBpZiAoZGVmaW5pdGlvbk9wZXJhdGlvbiA9PT0gJ3F1ZXJ5Jykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfVxuICAgIHZhciBtb2RpZmllZERvYyA9IGdyYXBocWwudmlzaXQoZG9jdW1lbnQsIHtcbiAgICAgICAgT3BlcmF0aW9uRGVmaW5pdGlvbjoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBub2RlKSwgeyBvcGVyYXRpb246ICdxdWVyeScgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBtb2RpZmllZERvYztcbn1cbmZ1bmN0aW9uIHJlbW92ZUNsaWVudFNldHNGcm9tRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICBjaGVja0RvY3VtZW50KGRvY3VtZW50KTtcbiAgICB2YXIgbW9kaWZpZWREb2MgPSByZW1vdmVEaXJlY3RpdmVzRnJvbURvY3VtZW50KFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGVzdDogZnVuY3Rpb24gKGRpcmVjdGl2ZSkgeyByZXR1cm4gZGlyZWN0aXZlLm5hbWUudmFsdWUgPT09ICdjbGllbnQnOyB9LFxuICAgICAgICAgICAgcmVtb3ZlOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sIGRvY3VtZW50KTtcbiAgICBpZiAobW9kaWZpZWREb2MpIHtcbiAgICAgICAgbW9kaWZpZWREb2MgPSBncmFwaHFsLnZpc2l0KG1vZGlmaWVkRG9jLCB7XG4gICAgICAgICAgICBGcmFnbWVudERlZmluaXRpb246IHtcbiAgICAgICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNUeXBlbmFtZU9ubHkgPSBub2RlLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmV2ZXJ5KGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNGaWVsZChzZWxlY3Rpb24pICYmIHNlbGVjdGlvbi5uYW1lLnZhbHVlID09PSAnX190eXBlbmFtZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1R5cGVuYW1lT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbW9kaWZpZWREb2M7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBtZXJnZURlZXAoKSB7XG4gICAgdmFyIHNvdXJjZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBzb3VyY2VzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBtZXJnZURlZXBBcnJheShzb3VyY2VzKTtcbn1cbmZ1bmN0aW9uIG1lcmdlRGVlcEFycmF5KHNvdXJjZXMpIHtcbiAgICB2YXIgdGFyZ2V0ID0gc291cmNlc1swXSB8fCB7fTtcbiAgICB2YXIgY291bnQgPSBzb3VyY2VzLmxlbmd0aDtcbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICAgIHZhciBtZXJnZXIgPSBuZXcgRGVlcE1lcmdlcigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG1lcmdlci5tZXJnZSh0YXJnZXQsIHNvdXJjZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG52YXIgZGVmYXVsdFJlY29uY2lsZXIgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHRoaXMubWVyZ2UodGFyZ2V0W3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XG59O1xudmFyIERlZXBNZXJnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlZXBNZXJnZXIocmVjb25jaWxlcikge1xuICAgICAgICBpZiAocmVjb25jaWxlciA9PT0gdm9pZCAwKSB7IHJlY29uY2lsZXIgPSBkZWZhdWx0UmVjb25jaWxlcjsgfVxuICAgICAgICB0aGlzLnJlY29uY2lsZXIgPSByZWNvbmNpbGVyO1xuICAgICAgICB0aGlzLmlzT2JqZWN0ID0gaXNOb25OdWxsT2JqZWN0O1xuICAgICAgICB0aGlzLnBhc3RDb3BpZXMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIERlZXBNZXJnZXIucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjb250ZXh0ID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb250ZXh0W19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05vbk51bGxPYmplY3Qoc291cmNlKSAmJiBpc05vbk51bGxPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2VLZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHNvdXJjZUtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFZhbHVlID0gdGFyZ2V0W3NvdXJjZUtleV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2Vbc291cmNlS2V5XSAhPT0gdGFyZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy5yZWNvbmNpbGVyLmFwcGx5KF90aGlzLCB0c2xpYi5fX3NwcmVhZEFycmF5KFt0YXJnZXQsIHNvdXJjZSwgc291cmNlS2V5XSwgY29udGV4dCwgZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRhcmdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gX3RoaXMuc2hhbGxvd0NvcHlGb3JNZXJnZSh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtzb3VyY2VLZXldID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBfdGhpcy5zaGFsbG93Q29weUZvck1lcmdlKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtzb3VyY2VLZXldID0gc291cmNlW3NvdXJjZUtleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfTtcbiAgICBEZWVwTWVyZ2VyLnByb3RvdHlwZS5zaGFsbG93Q29weUZvck1lcmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmIChpc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXN0Q29waWVzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5pc0Zyb3plbih2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3RDb3BpZXMuZGVsZXRlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRzbGliLl9fYXNzaWduKHsgX19wcm90b19fOiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpIH0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFzdENvcGllcy5hZGQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiBEZWVwTWVyZ2VyO1xufSgpKTtcblxuZnVuY3Rpb24gY29uY2F0UGFnaW5hdGlvbihrZXlBcmdzKSB7XG4gICAgaWYgKGtleUFyZ3MgPT09IHZvaWQgMCkgeyBrZXlBcmdzID0gZmFsc2U7IH1cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXlBcmdzOiBrZXlBcmdzLFxuICAgICAgICBtZXJnZTogZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZykge1xuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nID8gdHNsaWIuX19zcHJlYWRBcnJheSh0c2xpYi5fX3NwcmVhZEFycmF5KFtdLCBleGlzdGluZywgdHJ1ZSksIGluY29taW5nLCB0cnVlKSA6IGluY29taW5nO1xuICAgICAgICB9LFxuICAgIH07XG59XG5mdW5jdGlvbiBvZmZzZXRMaW1pdFBhZ2luYXRpb24oa2V5QXJncykge1xuICAgIGlmIChrZXlBcmdzID09PSB2b2lkIDApIHsga2V5QXJncyA9IGZhbHNlOyB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5QXJnczoga2V5QXJncyxcbiAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcsIF9hKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IF9hLmFyZ3M7XG4gICAgICAgICAgICB2YXIgbWVyZ2VkID0gZXhpc3RpbmcgPyBleGlzdGluZy5zbGljZSgwKSA6IFtdO1xuICAgICAgICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBhcmdzLm9mZnNldCwgb2Zmc2V0ID0gX2IgPT09IHZvaWQgMCA/IDAgOiBfYjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluY29taW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lcmdlZFtvZmZzZXQgKyBpXSA9IGluY29taW5nW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lcmdlZC5wdXNoLmFwcGx5KG1lcmdlZCwgaW5jb21pbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVsYXlTdHlsZVBhZ2luYXRpb24oa2V5QXJncykge1xuICAgIGlmIChrZXlBcmdzID09PSB2b2lkIDApIHsga2V5QXJncyA9IGZhbHNlOyB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5QXJnczoga2V5QXJncyxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gKGV4aXN0aW5nLCBfYSkge1xuICAgICAgICAgICAgdmFyIGNhblJlYWQgPSBfYS5jYW5SZWFkLCByZWFkRmllbGQgPSBfYS5yZWFkRmllbGQ7XG4gICAgICAgICAgICBpZiAoIWV4aXN0aW5nKVxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZztcbiAgICAgICAgICAgIHZhciBlZGdlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIGZpcnN0RWRnZUN1cnNvciA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgbGFzdEVkZ2VDdXJzb3IgPSBcIlwiO1xuICAgICAgICAgICAgZXhpc3RpbmcuZWRnZXMuZm9yRWFjaChmdW5jdGlvbiAoZWRnZSkge1xuICAgICAgICAgICAgICAgIGlmIChjYW5SZWFkKHJlYWRGaWVsZChcIm5vZGVcIiwgZWRnZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVkZ2VzLnB1c2goZWRnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlZGdlLmN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RFZGdlQ3Vyc29yID0gZmlyc3RFZGdlQ3Vyc29yIHx8IGVkZ2UuY3Vyc29yIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0RWRnZUN1cnNvciA9IGVkZ2UuY3Vyc29yIHx8IGxhc3RFZGdlQ3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgX2IgPSBleGlzdGluZy5wYWdlSW5mbyB8fCB7fSwgc3RhcnRDdXJzb3IgPSBfYi5zdGFydEN1cnNvciwgZW5kQ3Vyc29yID0gX2IuZW5kQ3Vyc29yO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBnZXRFeHRyYXMoZXhpc3RpbmcpKSwgeyBlZGdlczogZWRnZXMsIHBhZ2VJbmZvOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZXhpc3RpbmcucGFnZUluZm8pLCB7IHN0YXJ0Q3Vyc29yOiBzdGFydEN1cnNvciB8fCBmaXJzdEVkZ2VDdXJzb3IsIGVuZEN1cnNvcjogZW5kQ3Vyc29yIHx8IGxhc3RFZGdlQ3Vyc29yIH0pIH0pO1xuICAgICAgICB9LFxuICAgICAgICBtZXJnZTogZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZywgX2EpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gX2EuYXJncywgaXNSZWZlcmVuY2UgPSBfYS5pc1JlZmVyZW5jZSwgcmVhZEZpZWxkID0gX2EucmVhZEZpZWxkO1xuICAgICAgICAgICAgaWYgKCFleGlzdGluZykge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nID0gbWFrZUVtcHR5RGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpbmNvbWluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbmNvbWluZ0VkZ2VzID0gaW5jb21pbmcuZWRnZXMgPyBpbmNvbWluZy5lZGdlcy5tYXAoZnVuY3Rpb24gKGVkZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNSZWZlcmVuY2UoZWRnZSA9IHRzbGliLl9fYXNzaWduKHt9LCBlZGdlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRnZS5jdXJzb3IgPSByZWFkRmllbGQoXCJjdXJzb3JcIiwgZWRnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlZGdlO1xuICAgICAgICAgICAgfSkgOiBbXTtcbiAgICAgICAgICAgIGlmIChpbmNvbWluZy5wYWdlSW5mbykge1xuICAgICAgICAgICAgICAgIHZhciBwYWdlSW5mb18xID0gaW5jb21pbmcucGFnZUluZm87XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0Q3Vyc29yID0gcGFnZUluZm9fMS5zdGFydEN1cnNvciwgZW5kQ3Vyc29yID0gcGFnZUluZm9fMS5lbmRDdXJzb3I7XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0RWRnZSA9IGluY29taW5nRWRnZXNbMF07XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RFZGdlID0gaW5jb21pbmdFZGdlc1tpbmNvbWluZ0VkZ2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmIChmaXJzdEVkZ2UgJiYgc3RhcnRDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RFZGdlLmN1cnNvciA9IHN0YXJ0Q3Vyc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGFzdEVkZ2UgJiYgZW5kQ3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RFZGdlLmN1cnNvciA9IGVuZEN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0Q3Vyc29yID0gZmlyc3RFZGdlICYmIGZpcnN0RWRnZS5jdXJzb3I7XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0Q3Vyc29yICYmICFzdGFydEN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBpbmNvbWluZyA9IG1lcmdlRGVlcChpbmNvbWluZywge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEN1cnNvcjogZmlyc3RDdXJzb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RDdXJzb3IgPSBsYXN0RWRnZSAmJiBsYXN0RWRnZS5jdXJzb3I7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RDdXJzb3IgJiYgIWVuZEN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBpbmNvbWluZyA9IG1lcmdlRGVlcChpbmNvbWluZywge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRDdXJzb3I6IGxhc3RDdXJzb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXhpc3RpbmcuZWRnZXM7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gW107XG4gICAgICAgICAgICBpZiAoYXJncyAmJiBhcmdzLmFmdGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcHJlZml4LmZpbmRJbmRleChmdW5jdGlvbiAoZWRnZSkgeyByZXR1cm4gZWRnZS5jdXJzb3IgPT09IGFyZ3MuYWZ0ZXI7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWZpeCA9IHByZWZpeC5zbGljZSgwLCBpbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZ3MgJiYgYXJncy5iZWZvcmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBwcmVmaXguZmluZEluZGV4KGZ1bmN0aW9uIChlZGdlKSB7IHJldHVybiBlZGdlLmN1cnNvciA9PT0gYXJncy5iZWZvcmU7IH0pO1xuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IGluZGV4IDwgMCA/IHByZWZpeCA6IHByZWZpeC5zbGljZShpbmRleCk7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmNvbWluZy5lZGdlcykge1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGVkZ2VzID0gdHNsaWIuX19zcHJlYWRBcnJheSh0c2xpYi5fX3NwcmVhZEFycmF5KHRzbGliLl9fc3ByZWFkQXJyYXkoW10sIHByZWZpeCwgdHJ1ZSksIGluY29taW5nRWRnZXMsIHRydWUpLCBzdWZmaXgsIHRydWUpO1xuICAgICAgICAgICAgdmFyIHBhZ2VJbmZvID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGluY29taW5nLnBhZ2VJbmZvKSwgZXhpc3RpbmcucGFnZUluZm8pO1xuICAgICAgICAgICAgaWYgKGluY29taW5nLnBhZ2VJbmZvKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9iID0gaW5jb21pbmcucGFnZUluZm8sIGhhc1ByZXZpb3VzUGFnZSA9IF9iLmhhc1ByZXZpb3VzUGFnZSwgaGFzTmV4dFBhZ2UgPSBfYi5oYXNOZXh0UGFnZSwgc3RhcnRDdXJzb3IgPSBfYi5zdGFydEN1cnNvciwgZW5kQ3Vyc29yID0gX2IuZW5kQ3Vyc29yLCBleHRyYXMgPSB0c2xpYi5fX3Jlc3QoX2IsIFtcImhhc1ByZXZpb3VzUGFnZVwiLCBcImhhc05leHRQYWdlXCIsIFwic3RhcnRDdXJzb3JcIiwgXCJlbmRDdXJzb3JcIl0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocGFnZUluZm8sIGV4dHJhcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcmVmaXgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGhhc1ByZXZpb3VzUGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvLmhhc1ByZXZpb3VzUGFnZSA9IGhhc1ByZXZpb3VzUGFnZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gc3RhcnRDdXJzb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mby5zdGFydEN1cnNvciA9IHN0YXJ0Q3Vyc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXN1ZmZpeC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaGFzTmV4dFBhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mby5oYXNOZXh0UGFnZSA9IGhhc05leHRQYWdlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBlbmRDdXJzb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mby5lbmRDdXJzb3IgPSBlbmRDdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBnZXRFeHRyYXMoZXhpc3RpbmcpKSwgZ2V0RXh0cmFzKGluY29taW5nKSksIHsgZWRnZXM6IGVkZ2VzLCBwYWdlSW5mbzogcGFnZUluZm8gfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbnZhciBnZXRFeHRyYXMgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0c2xpYi5fX3Jlc3Qob2JqLCBub3RFeHRyYXMpOyB9O1xudmFyIG5vdEV4dHJhcyA9IFtcImVkZ2VzXCIsIFwicGFnZUluZm9cIl07XG5mdW5jdGlvbiBtYWtlRW1wdHlEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVkZ2VzOiBbXSxcbiAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgIGhhc1ByZXZpb3VzUGFnZTogZmFsc2UsXG4gICAgICAgICAgICBoYXNOZXh0UGFnZTogdHJ1ZSxcbiAgICAgICAgICAgIHN0YXJ0Q3Vyc29yOiBcIlwiLFxuICAgICAgICAgICAgZW5kQ3Vyc29yOiBcIlwiLFxuICAgICAgICB9LFxuICAgIH07XG59XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgICByZXR1cm4gY2xvbmVEZWVwSGVscGVyKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGNsb25lRGVlcEhlbHBlcih2YWwsIHNlZW4pIHtcbiAgICBzd2l0Y2ggKHRvU3RyaW5nLmNhbGwodmFsKSkge1xuICAgICAgICBjYXNlIFwiW29iamVjdCBBcnJheV1cIjoge1xuICAgICAgICAgICAgc2VlbiA9IHNlZW4gfHwgbmV3IE1hcDtcbiAgICAgICAgICAgIGlmIChzZWVuLmhhcyh2YWwpKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWVuLmdldCh2YWwpO1xuICAgICAgICAgICAgdmFyIGNvcHlfMSA9IHZhbC5zbGljZSgwKTtcbiAgICAgICAgICAgIHNlZW4uc2V0KHZhbCwgY29weV8xKTtcbiAgICAgICAgICAgIGNvcHlfMS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvcHlfMVtpXSA9IGNsb25lRGVlcEhlbHBlcihjaGlsZCwgc2Vlbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjb3B5XzE7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIltvYmplY3QgT2JqZWN0XVwiOiB7XG4gICAgICAgICAgICBzZWVuID0gc2VlbiB8fCBuZXcgTWFwO1xuICAgICAgICAgICAgaWYgKHNlZW4uaGFzKHZhbCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlZW4uZ2V0KHZhbCk7XG4gICAgICAgICAgICB2YXIgY29weV8yID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKSk7XG4gICAgICAgICAgICBzZWVuLnNldCh2YWwsIGNvcHlfMik7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2YWwpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGNvcHlfMltrZXldID0gY2xvbmVEZWVwSGVscGVyKHZhbFtrZXldLCBzZWVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvcHlfMjtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlZXBGcmVlemUodmFsdWUpIHtcbiAgICB2YXIgd29ya1NldCA9IG5ldyBTZXQoW3ZhbHVlXSk7XG4gICAgd29ya1NldC5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgaWYgKGlzTm9uTnVsbE9iamVjdChvYmopICYmIHNoYWxsb3dGcmVlemUob2JqKSA9PT0gb2JqKSB7XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KG9ialtuYW1lXSkpXG4gICAgICAgICAgICAgICAgICAgIHdvcmtTZXQuYWRkKG9ialtuYW1lXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNoYWxsb3dGcmVlemUob2JqKSB7XG4gICAgaWYgKF9fREVWX18gJiYgIU9iamVjdC5pc0Zyb3plbihvYmopKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBPYmplY3QuZnJlZXplKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgVHlwZUVycm9yKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gbWF5YmVEZWVwRnJlZXplKG9iaikge1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGRlZXBGcmVlemUob2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gaXRlcmF0ZU9ic2VydmVyc1NhZmVseShvYnNlcnZlcnMsIG1ldGhvZCwgYXJndW1lbnQpIHtcbiAgICB2YXIgb2JzZXJ2ZXJzV2l0aE1ldGhvZCA9IFtdO1xuICAgIG9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnMpIHsgcmV0dXJuIG9ic1ttZXRob2RdICYmIG9ic2VydmVyc1dpdGhNZXRob2QucHVzaChvYnMpOyB9KTtcbiAgICBvYnNlcnZlcnNXaXRoTWV0aG9kLmZvckVhY2goZnVuY3Rpb24gKG9icykgeyByZXR1cm4gb2JzW21ldGhvZF0oYXJndW1lbnQpOyB9KTtcbn1cblxuZnVuY3Rpb24gYXN5bmNNYXAob2JzZXJ2YWJsZSwgbWFwRm4sIGNhdGNoRm4pIHtcbiAgICByZXR1cm4gbmV3IHplbk9ic2VydmFibGVUcy5PYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICB2YXIgbmV4dCA9IG9ic2VydmVyLm5leHQsIGVycm9yID0gb2JzZXJ2ZXIuZXJyb3IsIGNvbXBsZXRlID0gb2JzZXJ2ZXIuY29tcGxldGU7XG4gICAgICAgIHZhciBhY3RpdmVDYWxsYmFja0NvdW50ID0gMDtcbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgcHJvbWlzZVF1ZXVlID0ge1xuICAgICAgICAgICAgdGhlbjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiByZXNvbHZlKGNhbGxiYWNrKCkpOyB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VDYWxsYmFjayhleGFtaW5lciwgZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIGlmIChleGFtaW5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICsrYWN0aXZlQ2FsbGJhY2tDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvdGggPSBmdW5jdGlvbiAoKSB7IHJldHVybiBleGFtaW5lcihhcmcpOyB9O1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlUXVldWUgPSBwcm9taXNlUXVldWUudGhlbihib3RoLCBib3RoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tYWN0aXZlQ2FsbGJhY2tDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgJiYgbmV4dC5jYWxsKG9ic2VydmVyLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLWFjdGl2ZUNhbGxiYWNrQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGNhdWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgJiYgZXJyb3IuY2FsbChvYnNlcnZlciwgY2F1Z2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBkZWxlZ2F0ZSAmJiBkZWxlZ2F0ZS5jYWxsKG9ic2VydmVyLCBhcmcpOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBoYW5kbGVyID0ge1xuICAgICAgICAgICAgbmV4dDogbWFrZUNhbGxiYWNrKG1hcEZuLCBuZXh0KSxcbiAgICAgICAgICAgIGVycm9yOiBtYWtlQ2FsbGJhY2soY2F0Y2hGbiwgZXJyb3IpLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlQ2FsbGJhY2tDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSAmJiBjb21wbGV0ZS5jYWxsKG9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgc3ViID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoaGFuZGxlcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWIudW5zdWJzY3JpYmUoKTsgfTtcbiAgICB9KTtcbn1cblxudmFyIGNhblVzZVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAhKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnICYmXG4gICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpO1xudmFyIGNhblVzZVdlYWtTZXQgPSB0eXBlb2YgV2Vha1NldCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIFN5bWJvbC5mb3IgPT09ICdmdW5jdGlvbic7XG5cbmZ1bmN0aW9uIGZpeE9ic2VydmFibGVTdWJjbGFzcyhzdWJjbGFzcykge1xuICAgIGZ1bmN0aW9uIHNldChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YmNsYXNzLCBrZXksIHsgdmFsdWU6IHplbk9ic2VydmFibGVUcy5PYnNlcnZhYmxlIH0pO1xuICAgIH1cbiAgICBpZiAoY2FuVXNlU3ltYm9sICYmIFN5bWJvbC5zcGVjaWVzKSB7XG4gICAgICAgIHNldChTeW1ib2wuc3BlY2llcyk7XG4gICAgfVxuICAgIHNldChcIkBAc3BlY2llc1wiKTtcbiAgICByZXR1cm4gc3ViY2xhc3M7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZUxpa2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbn1cbnZhciBDb25jYXN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoQ29uY2FzdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb25jYXN0KHNvdXJjZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGRPYnNlcnZlcihvYnNlcnZlcik7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXIpOyB9O1xuICAgICAgICB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLmFkZENvdW50ID0gMDtcbiAgICAgICAgX3RoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIF90aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgX3RoaXMucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuaGFuZGxlcnMgPSB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXRlc3QgPSBbXCJuZXh0XCIsIHJlc3VsdF07XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkoX3RoaXMub2JzZXJ2ZXJzLCBcIm5leHRcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBfdGhpcy5zdWI7XG4gICAgICAgICAgICAgICAgaWYgKHN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBzdWIudW5zdWJzY3JpYmUoKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN1YiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxhdGVzdCA9IFtcImVycm9yXCIsIGVycm9yXTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZU9ic2VydmVyc1NhZmVseShfdGhpcy5vYnNlcnZlcnMsIFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zdWIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMuc291cmNlcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmxhdGVzdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxhdGVzdFswXSA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlKF90aGlzLmxhdGVzdFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5KF90aGlzLm9ic2VydmVycywgXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1Byb21pc2VMaWtlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudGhlbihmdW5jdGlvbiAob2JzKSB7IHJldHVybiBfdGhpcy5zdWIgPSBvYnMuc3Vic2NyaWJlKF90aGlzLmhhbmRsZXJzKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWIgPSB2YWx1ZS5zdWJzY3JpYmUoX3RoaXMuaGFuZGxlcnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuY2FuY2VsID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgX3RoaXMucmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgICBfdGhpcy5zb3VyY2VzID0gW107XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVycy5jb21wbGV0ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5wcm9taXNlLmNhdGNoKGZ1bmN0aW9uIChfKSB7IH0pO1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZXMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgc291cmNlcyA9IFtuZXcgemVuT2JzZXJ2YWJsZVRzLk9ic2VydmFibGUoc291cmNlcyldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Byb21pc2VMaWtlKHNvdXJjZXMpKSB7XG4gICAgICAgICAgICBzb3VyY2VzLnRoZW4oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7IHJldHVybiBfdGhpcy5zdGFydChpdGVyYWJsZSk7IH0sIF90aGlzLmhhbmRsZXJzLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnN0YXJ0KHNvdXJjZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29uY2FzdC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoc291cmNlcykge1xuICAgICAgICBpZiAodGhpcy5zdWIgIT09IHZvaWQgMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5zb3VyY2VzID0gQXJyYXkuZnJvbShzb3VyY2VzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgQ29uY2FzdC5wcm90b3R5cGUuZGVsaXZlckxhc3RNZXNzYWdlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmxhdGVzdCkge1xuICAgICAgICAgICAgdmFyIG5leHRPckVycm9yID0gdGhpcy5sYXRlc3RbMF07XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gb2JzZXJ2ZXJbbmV4dE9yRXJyb3JdO1xuICAgICAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIG1ldGhvZC5jYWxsKG9ic2VydmVyLCB0aGlzLmxhdGVzdFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdWIgPT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICBuZXh0T3JFcnJvciA9PT0gXCJuZXh0XCIgJiZcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbmNhc3QucHJvdG90eXBlLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5vYnNlcnZlcnMuaGFzKG9ic2VydmVyKSkge1xuICAgICAgICAgICAgdGhpcy5kZWxpdmVyTGFzdE1lc3NhZ2Uob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuYWRkKG9ic2VydmVyKTtcbiAgICAgICAgICAgICsrdGhpcy5hZGRDb3VudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29uY2FzdC5wcm90b3R5cGUucmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIsIHF1aWV0bHkpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzLmRlbGV0ZShvYnNlcnZlcikgJiZcbiAgICAgICAgICAgIC0tdGhpcy5hZGRDb3VudCA8IDEgJiZcbiAgICAgICAgICAgICFxdWlldGx5KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLmVycm9yKG5ldyBFcnJvcihcIk9ic2VydmFibGUgY2FuY2VsbGVkIHByZW1hdHVyZWx5XCIpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29uY2FzdC5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBvbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvYnNlcnZlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IG9uY2UsXG4gICAgICAgICAgICBlcnJvcjogb25jZSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBvbmNlLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgY291bnQgPSB0aGlzLmFkZENvdW50O1xuICAgICAgICB0aGlzLmFkZE9ic2VydmVyKG9ic2VydmVyKTtcbiAgICAgICAgdGhpcy5hZGRDb3VudCA9IGNvdW50O1xuICAgIH07XG4gICAgcmV0dXJuIENvbmNhc3Q7XG59KHplbk9ic2VydmFibGVUcy5PYnNlcnZhYmxlKSk7XG5maXhPYnNlcnZhYmxlU3ViY2xhc3MoQ29uY2FzdCk7XG5cbmZ1bmN0aW9uIGlzTm9uRW1wdHlBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwO1xufVxuXG5mdW5jdGlvbiBncmFwaFFMUmVzdWx0SGFzRXJyb3IocmVzdWx0KSB7XG4gICAgcmV0dXJuIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMubGVuZ3RoID4gMCkgfHwgZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNvbXBhY3QoKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBvYmplY3RzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGlmICghb2JqKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBwcmVmaXhDb3VudHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBtYWtlVW5pcXVlSWQocHJlZml4KSB7XG4gICAgdmFyIGNvdW50ID0gcHJlZml4Q291bnRzLmdldChwcmVmaXgpIHx8IDE7XG4gICAgcHJlZml4Q291bnRzLnNldChwcmVmaXgsIGNvdW50ICsgMSk7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHByZWZpeCwgXCI6XCIpLmNvbmNhdChjb3VudCwgXCI6XCIpLmNvbmNhdChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUZvckRpc3BsYXkodmFsdWUpIHtcbiAgICB2YXIgdW5kZWZJZCA9IG1ha2VVbmlxdWVJZChcInN0cmluZ2lmeUZvckRpc3BsYXlcIik7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHZvaWQgMCA/IHVuZGVmSWQgOiB2YWx1ZTtcbiAgICB9KS5zcGxpdChKU09OLnN0cmluZ2lmeSh1bmRlZklkKSkuam9pbihcIjx1bmRlZmluZWQ+XCIpO1xufVxuXG5leHBvcnRzLkRFViA9IGdsb2JhbHMuREVWO1xuZXhwb3J0cy5tYXliZSA9IGdsb2JhbHMubWF5YmU7XG5leHBvcnRzLk9ic2VydmFibGUgPSB6ZW5PYnNlcnZhYmxlVHMuT2JzZXJ2YWJsZTtcbmV4cG9ydHMuQ29uY2FzdCA9IENvbmNhc3Q7XG5leHBvcnRzLkRlZXBNZXJnZXIgPSBEZWVwTWVyZ2VyO1xuZXhwb3J0cy5hZGRUeXBlbmFtZVRvRG9jdW1lbnQgPSBhZGRUeXBlbmFtZVRvRG9jdW1lbnQ7XG5leHBvcnRzLmFyZ3VtZW50c09iamVjdEZyb21GaWVsZCA9IGFyZ3VtZW50c09iamVjdEZyb21GaWVsZDtcbmV4cG9ydHMuYXN5bmNNYXAgPSBhc3luY01hcDtcbmV4cG9ydHMuYnVpbGRRdWVyeUZyb21TZWxlY3Rpb25TZXQgPSBidWlsZFF1ZXJ5RnJvbVNlbGVjdGlvblNldDtcbmV4cG9ydHMuY2FuVXNlU3ltYm9sID0gY2FuVXNlU3ltYm9sO1xuZXhwb3J0cy5jYW5Vc2VXZWFrTWFwID0gY2FuVXNlV2Vha01hcDtcbmV4cG9ydHMuY2FuVXNlV2Vha1NldCA9IGNhblVzZVdlYWtTZXQ7XG5leHBvcnRzLmNoZWNrRG9jdW1lbnQgPSBjaGVja0RvY3VtZW50O1xuZXhwb3J0cy5jbG9uZURlZXAgPSBjbG9uZURlZXA7XG5leHBvcnRzLmNvbXBhY3QgPSBjb21wYWN0O1xuZXhwb3J0cy5jb25jYXRQYWdpbmF0aW9uID0gY29uY2F0UGFnaW5hdGlvbjtcbmV4cG9ydHMuY3JlYXRlRnJhZ21lbnRNYXAgPSBjcmVhdGVGcmFnbWVudE1hcDtcbmV4cG9ydHMuZml4T2JzZXJ2YWJsZVN1YmNsYXNzID0gZml4T2JzZXJ2YWJsZVN1YmNsYXNzO1xuZXhwb3J0cy5nZXREZWZhdWx0VmFsdWVzID0gZ2V0RGVmYXVsdFZhbHVlcztcbmV4cG9ydHMuZ2V0RGlyZWN0aXZlTmFtZXMgPSBnZXREaXJlY3RpdmVOYW1lcztcbmV4cG9ydHMuZ2V0RnJhZ21lbnREZWZpbml0aW9uID0gZ2V0RnJhZ21lbnREZWZpbml0aW9uO1xuZXhwb3J0cy5nZXRGcmFnbWVudERlZmluaXRpb25zID0gZ2V0RnJhZ21lbnREZWZpbml0aW9ucztcbmV4cG9ydHMuZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uID0gZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uO1xuZXhwb3J0cy5nZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQgPSBnZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQ7XG5leHBvcnRzLmdldEluY2x1c2lvbkRpcmVjdGl2ZXMgPSBnZXRJbmNsdXNpb25EaXJlY3RpdmVzO1xuZXhwb3J0cy5nZXRNYWluRGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uO1xuZXhwb3J0cy5nZXRPcGVyYXRpb25EZWZpbml0aW9uID0gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbjtcbmV4cG9ydHMuZ2V0T3BlcmF0aW9uTmFtZSA9IGdldE9wZXJhdGlvbk5hbWU7XG5leHBvcnRzLmdldFF1ZXJ5RGVmaW5pdGlvbiA9IGdldFF1ZXJ5RGVmaW5pdGlvbjtcbmV4cG9ydHMuZ2V0U3RvcmVLZXlOYW1lID0gZ2V0U3RvcmVLZXlOYW1lO1xuZXhwb3J0cy5nZXRUeXBlbmFtZUZyb21SZXN1bHQgPSBnZXRUeXBlbmFtZUZyb21SZXN1bHQ7XG5leHBvcnRzLmdyYXBoUUxSZXN1bHRIYXNFcnJvciA9IGdyYXBoUUxSZXN1bHRIYXNFcnJvcjtcbmV4cG9ydHMuaGFzQ2xpZW50RXhwb3J0cyA9IGhhc0NsaWVudEV4cG9ydHM7XG5leHBvcnRzLmhhc0RpcmVjdGl2ZXMgPSBoYXNEaXJlY3RpdmVzO1xuZXhwb3J0cy5pc0RvY3VtZW50Tm9kZSA9IGlzRG9jdW1lbnROb2RlO1xuZXhwb3J0cy5pc0ZpZWxkID0gaXNGaWVsZDtcbmV4cG9ydHMuaXNJbmxpbmVGcmFnbWVudCA9IGlzSW5saW5lRnJhZ21lbnQ7XG5leHBvcnRzLmlzTm9uRW1wdHlBcnJheSA9IGlzTm9uRW1wdHlBcnJheTtcbmV4cG9ydHMuaXNOb25OdWxsT2JqZWN0ID0gaXNOb25OdWxsT2JqZWN0O1xuZXhwb3J0cy5pc1JlZmVyZW5jZSA9IGlzUmVmZXJlbmNlO1xuZXhwb3J0cy5pdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5ID0gaXRlcmF0ZU9ic2VydmVyc1NhZmVseTtcbmV4cG9ydHMubWFrZVJlZmVyZW5jZSA9IG1ha2VSZWZlcmVuY2U7XG5leHBvcnRzLm1ha2VVbmlxdWVJZCA9IG1ha2VVbmlxdWVJZDtcbmV4cG9ydHMubWF5YmVEZWVwRnJlZXplID0gbWF5YmVEZWVwRnJlZXplO1xuZXhwb3J0cy5tZXJnZURlZXAgPSBtZXJnZURlZXA7XG5leHBvcnRzLm1lcmdlRGVlcEFycmF5ID0gbWVyZ2VEZWVwQXJyYXk7XG5leHBvcnRzLm9mZnNldExpbWl0UGFnaW5hdGlvbiA9IG9mZnNldExpbWl0UGFnaW5hdGlvbjtcbmV4cG9ydHMucmVsYXlTdHlsZVBhZ2luYXRpb24gPSByZWxheVN0eWxlUGFnaW5hdGlvbjtcbmV4cG9ydHMucmVtb3ZlQXJndW1lbnRzRnJvbURvY3VtZW50ID0gcmVtb3ZlQXJndW1lbnRzRnJvbURvY3VtZW50O1xuZXhwb3J0cy5yZW1vdmVDbGllbnRTZXRzRnJvbURvY3VtZW50ID0gcmVtb3ZlQ2xpZW50U2V0c0Zyb21Eb2N1bWVudDtcbmV4cG9ydHMucmVtb3ZlQ29ubmVjdGlvbkRpcmVjdGl2ZUZyb21Eb2N1bWVudCA9IHJlbW92ZUNvbm5lY3Rpb25EaXJlY3RpdmVGcm9tRG9jdW1lbnQ7XG5leHBvcnRzLnJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQgPSByZW1vdmVEaXJlY3RpdmVzRnJvbURvY3VtZW50O1xuZXhwb3J0cy5yZW1vdmVGcmFnbWVudFNwcmVhZEZyb21Eb2N1bWVudCA9IHJlbW92ZUZyYWdtZW50U3ByZWFkRnJvbURvY3VtZW50O1xuZXhwb3J0cy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkID0gcmVzdWx0S2V5TmFtZUZyb21GaWVsZDtcbmV4cG9ydHMuc2hvdWxkSW5jbHVkZSA9IHNob3VsZEluY2x1ZGU7XG5leHBvcnRzLnN0b3JlS2V5TmFtZUZyb21GaWVsZCA9IHN0b3JlS2V5TmFtZUZyb21GaWVsZDtcbmV4cG9ydHMuc3RyaW5naWZ5Rm9yRGlzcGxheSA9IHN0cmluZ2lmeUZvckRpc3BsYXk7XG5leHBvcnRzLnZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbiA9IHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxpdGllcy5janMubWFwXG4iLCJleHBvcnRzLk9ic2VydmFibGUgPSByZXF1aXJlKFwiemVuLW9ic2VydmFibGUvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgT3JkZXJTdHlsZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdHlsZXMvT3JkZXJTdHlsZXMnO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vLi4vbGliL2Zvcm1hdE1vbmV5JztcclxuXHJcbmNvbnN0IFNJTkdMRV9PUkRFUl9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBTSU5HTEVfT1JERVJfUVVFUlkoJGlkOiBJRCEpIHtcclxuICAgIG9yZGVyOiBPcmRlcih3aGVyZTogeyBpZDogJGlkIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgY2hhcmdlXHJcbiAgICAgIHRvdGFsXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgaXRlbXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgIHBob3RvIHtcclxuICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVPcmRlclBhZ2UoeyBxdWVyeSB9KSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoU0lOR0xFX09SREVSX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQ6IHF1ZXJ5LmlkIH0sXHJcbiAgfSk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz47XHJcbiAgY29uc3QgeyBvcmRlciB9ID0gZGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPE9yZGVyU3R5bGVzPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+U2ljayBGaXRzIC0ge29yZGVyLmlkfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPHNwYW4+T3JkZXIgSWQ6PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntvcmRlci5pZH08L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPHNwYW4+Q2hhcmdlOjwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57b3JkZXIuY2hhcmdlfTwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8c3Bhbj5PcmRlciBUb3RhbDo8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e2Zvcm1hdE1vbmV5KG9yZGVyLnRvdGFsKX08L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPHNwYW4+SXRlbSBDb3VudDo8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e29yZGVyLml0ZW1zLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgIHtvcmRlci5pdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItaXRlbVwiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgPGgyPntpdGVtLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICA8cD5RdWFudGl0eToge2l0ZW0ucXVhbnRpdHl9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPkVhY2gge2Zvcm1hdE1vbmV5KGl0ZW0ucHJpY2UpfTwvcD5cclxuICAgICAgICAgICAgICA8cD5TdWJ0b3RhbDoge2Zvcm1hdE1vbmV5KGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5KX08L3A+XHJcbiAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvT3JkZXJTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd3J5L2NvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdyeS9lcXVhbGl0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd3J5L3RyaWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3B0aW1pc21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3ltYm9sLW9ic2VydmFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHNsaWJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiemVuLW9ic2VydmFibGUvaW5kZXguanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==