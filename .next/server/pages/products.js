module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Products; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\agust\\OneDrive\\Escritorio\\Web Bos Courses\\Advanced-React-master\\sick-fits\\frontend\\components\\Products.js";


const ALL_PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
function Products() {
  const {
    data,
    error,
    loading
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Products!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
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

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductsPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Products */ "./components/Products.js");

var _jsxFileName = "C:\\Users\\agust\\OneDrive\\Escritorio\\Web Bos Courses\\Advanced-React-master\\sick-fits\\frontend\\pages\\products.js";

function ProductsPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Products__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
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

/***/ "optimism":
/*!***************************!*\
  !*** external "optimism" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("optimism");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvY2FjaGUvY2FjaGUuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9jb3JlL2NvcmUuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9lcnJvcnMvZXJyb3JzLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay9jb3JlL2NvcmUuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9saW5rL2h0dHAvaHR0cC5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvdXRpbHMvdXRpbHMuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9tYWluLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbm9kZV9tb2R1bGVzL3RzLWludmFyaWFudC9saWIvaW52YXJpYW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9ub2RlX21vZHVsZXMvdHMtaW52YXJpYW50L3Byb2Nlc3MvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvY29udGV4dC9jb250ZXh0LmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvaG9va3MvaG9va3MuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9wYXJzZXIvcGFyc2VyLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvcmVhY3QuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC91dGlsaXRpZXMvZ2xvYmFscy9nbG9iYWxzLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzL3V0aWxpdGllcy5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plbi1vYnNlcnZhYmxlLXRzL2luZGV4LmNqcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd3J5L2NvbnRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd3J5L2VxdWFsaXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdyeS90cmllXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib3B0aW1pc21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN5bWJvbC1vYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHNsaWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6ZW4tb2JzZXJ2YWJsZS9pbmRleC5qc1wiIl0sIm5hbWVzIjpbIkFMTF9QUk9EVUNUU19RVUVSWSIsImdxbCIsIlByb2R1Y3RzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZVF1ZXJ5IiwiY29uc29sZSIsImxvZyIsIlByb2R1Y3RzUGFnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsaUVBQWlFLEVBQUU7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFB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QTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNENBQTRDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsb0JBQW9CO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdCQUF3QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsOEZBQThGO0FBQy9LO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNU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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0JBQWdCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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a0M7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoicGFnZXMvcHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Byb2R1Y3RzLmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5cclxuY29uc3QgQUxMX1BST0RVQ1RTX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IEFMTF9QUk9EVUNUU19RVUVSWSB7XHJcbiAgICBhbGxQcm9kdWN0cyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgcHJpY2VcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgcGhvdG8ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUlkpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEsIGVycm9yLCBsb2FkaW5nKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+UHJvZHVjdHMhPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgb3B0aW1pc20gPSByZXF1aXJlKCdvcHRpbWlzbScpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcycpO1xudmFyIGVxdWFsaXR5ID0gcmVxdWlyZSgnQHdyeS9lcXVhbGl0eScpO1xudmFyIHRyaWUgPSByZXF1aXJlKCdAd3J5L3RyaWUnKTtcbnZhciBjb250ZXh0ID0gcmVxdWlyZSgnQHdyeS9jb250ZXh0Jyk7XG5cbnZhciBBcG9sbG9DYWNoZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBvbGxvQ2FjaGUoKSB7XG4gICAgICAgIHRoaXMuZ2V0RnJhZ21lbnREb2MgPSBvcHRpbWlzbS53cmFwKHV0aWxpdGllcy5nZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQpO1xuICAgIH1cbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUuYmF0Y2ggPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgb3B0aW1pc3RpY0lkID0gdHlwZW9mIG9wdGlvbnMub3B0aW1pc3RpYyA9PT0gXCJzdHJpbmdcIiA/IG9wdGlvbnMub3B0aW1pc3RpYyA6XG4gICAgICAgICAgICBvcHRpb25zLm9wdGltaXN0aWMgPT09IGZhbHNlID8gbnVsbCA6IHZvaWQgMDtcbiAgICAgICAgdmFyIHVwZGF0ZVJlc3VsdDtcbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkgeyByZXR1cm4gdXBkYXRlUmVzdWx0ID0gb3B0aW9ucy51cGRhdGUoX3RoaXMpOyB9LCBvcHRpbWlzdGljSWQpO1xuICAgICAgICByZXR1cm4gdXBkYXRlUmVzdWx0O1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnJlY29yZE9wdGltaXN0aWNUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uICh0cmFuc2FjdGlvbiwgb3B0aW1pc3RpY0lkKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBvcHRpbWlzdGljSWQpO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnRyYW5zZm9ybURvY3VtZW50ID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLmdjID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUubW9kaWZ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnRyYW5zZm9ybUZvckxpbmsgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnJlYWRRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9ICEhb3B0aW9ucy5vcHRpbWlzdGljOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHJvb3RJZDogb3B0aW9ucy5pZCB8fCAnUk9PVF9RVUVSWScsIG9wdGltaXN0aWM6IG9wdGltaXN0aWMgfSkpO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnJlYWRGcmFnbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9ICEhb3B0aW9ucy5vcHRpbWlzdGljOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHF1ZXJ5OiB0aGlzLmdldEZyYWdtZW50RG9jKG9wdGlvbnMuZnJhZ21lbnQsIG9wdGlvbnMuZnJhZ21lbnROYW1lKSwgcm9vdElkOiBvcHRpb25zLmlkLCBvcHRpbWlzdGljOiBvcHRpbWlzdGljIH0pKTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS53cml0ZVF1ZXJ5ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBpZCA9IF9hLmlkLCBkYXRhID0gX2EuZGF0YSwgb3B0aW9ucyA9IHRzbGliLl9fcmVzdChfYSwgW1wiaWRcIiwgXCJkYXRhXCJdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGUoT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgICAgICBkYXRhSWQ6IGlkIHx8ICdST09UX1FVRVJZJyxcbiAgICAgICAgICAgIHJlc3VsdDogZGF0YSxcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLndyaXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGlkID0gX2EuaWQsIGRhdGEgPSBfYS5kYXRhLCBmcmFnbWVudCA9IF9hLmZyYWdtZW50LCBmcmFnbWVudE5hbWUgPSBfYS5mcmFnbWVudE5hbWUsIG9wdGlvbnMgPSB0c2xpYi5fX3Jlc3QoX2EsIFtcImlkXCIsIFwiZGF0YVwiLCBcImZyYWdtZW50XCIsIFwiZnJhZ21lbnROYW1lXCJdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGUoT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgICAgICBxdWVyeTogdGhpcy5nZXRGcmFnbWVudERvYyhmcmFnbWVudCwgZnJhZ21lbnROYW1lKSxcbiAgICAgICAgICAgIGRhdGFJZDogaWQsXG4gICAgICAgICAgICByZXN1bHQ6IGRhdGEsXG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS51cGRhdGVRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zLCB1cGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmF0Y2goe1xuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjYWNoZS5yZWFkUXVlcnkob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB1cGRhdGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSB2b2lkIDAgfHwgZGF0YSA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlUXVlcnkodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGRhdGE6IGRhdGEgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUudXBkYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAob3B0aW9ucywgdXBkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhdGNoKHtcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY2FjaGUucmVhZEZyYWdtZW50KG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdXBkYXRlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gdm9pZCAwIHx8IGRhdGEgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICBjYWNoZS53cml0ZUZyYWdtZW50KHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBkYXRhOiBkYXRhIH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFwb2xsb0NhY2hlO1xufSgpKTtcblxuZXhwb3J0cy5DYWNoZSA9IHZvaWQgMDtcbihmdW5jdGlvbiAoQ2FjaGUpIHtcbn0pKGV4cG9ydHMuQ2FjaGUgfHwgKGV4cG9ydHMuQ2FjaGUgPSB7fSkpO1xuXG52YXIgTWlzc2luZ0ZpZWxkRXJyb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1pc3NpbmdGaWVsZEVycm9yKG1lc3NhZ2UsIHBhdGgsIHF1ZXJ5LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB9XG4gICAgcmV0dXJuIE1pc3NpbmdGaWVsZEVycm9yO1xufSgpKTtcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdChfYSwgY29udGV4dCkge1xuICAgIHZhciBfX3R5cGVuYW1lID0gX2EuX190eXBlbmFtZSwgaWQgPSBfYS5pZCwgX2lkID0gX2EuX2lkO1xuICAgIGlmICh0eXBlb2YgX190eXBlbmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dC5rZXlPYmplY3QgPVxuICAgICAgICAgICAgICAgIGlkICE9PSB2b2lkIDAgPyB7IGlkOiBpZCB9IDpcbiAgICAgICAgICAgICAgICAgICAgX2lkICE9PSB2b2lkIDAgPyB7IF9pZDogX2lkIH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKVxuICAgICAgICAgICAgaWQgPSBfaWQ7XG4gICAgICAgIGlmIChpZCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoX190eXBlbmFtZSwgXCI6XCIpLmNvbmNhdCgodHlwZW9mIGlkID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGlkID09PSBcInN0cmluZ1wiKSA/IGlkIDogSlNPTi5zdHJpbmdpZnkoaWQpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICAgIGRhdGFJZEZyb21PYmplY3Q6IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0LFxuICAgIGFkZFR5cGVuYW1lOiB0cnVlLFxuICAgIHJlc3VsdENhY2hpbmc6IHRydWUsXG4gICAgY2Fub25pemVSZXN1bHRzOiBmYWxzZSxcbn07XG5mdW5jdGlvbiBub3JtYWxpemVDb25maWcoY29uZmlnKSB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5jb21wYWN0KGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG59XG5mdW5jdGlvbiBzaG91bGRDYW5vbml6ZVJlc3VsdHMoY29uZmlnKSB7XG4gICAgdmFyIHZhbHVlID0gY29uZmlnLmNhbm9uaXplUmVzdWx0cztcbiAgICByZXR1cm4gdmFsdWUgPT09IHZvaWQgMCA/IGRlZmF1bHRDb25maWcuY2Fub25pemVSZXN1bHRzIDogdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRUeXBlbmFtZUZyb21TdG9yZU9iamVjdChzdG9yZSwgb2JqZWN0T3JSZWZlcmVuY2UpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdE9yUmVmZXJlbmNlKVxuICAgICAgICA/IHN0b3JlLmdldChvYmplY3RPclJlZmVyZW5jZS5fX3JlZiwgXCJfX3R5cGVuYW1lXCIpXG4gICAgICAgIDogb2JqZWN0T3JSZWZlcmVuY2UgJiYgb2JqZWN0T3JSZWZlcmVuY2UuX190eXBlbmFtZTtcbn1cbnZhciBUeXBlT3JGaWVsZE5hbWVSZWdFeHAgPSAvXltfYS16XVtfMC05YS16XSovaTtcbmZ1bmN0aW9uIGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICB2YXIgbWF0Y2ggPSBzdG9yZUZpZWxkTmFtZS5tYXRjaChUeXBlT3JGaWVsZE5hbWVSZWdFeHApO1xuICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzBdIDogc3RvcmVGaWVsZE5hbWU7XG59XG5mdW5jdGlvbiBzZWxlY3Rpb25TZXRNYXRjaGVzUmVzdWx0KHNlbGVjdGlvblNldCwgcmVzdWx0LCB2YXJpYWJsZXMpIHtcbiAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdChyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHJlc3VsdClcbiAgICAgICAgICAgID8gcmVzdWx0LmV2ZXJ5KGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBzZWxlY3Rpb25TZXRNYXRjaGVzUmVzdWx0KHNlbGVjdGlvblNldCwgaXRlbSwgdmFyaWFibGVzKTsgfSlcbiAgICAgICAgICAgIDogc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZXZlcnkoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc0ZpZWxkKGZpZWxkKSAmJiB1dGlsaXRpZXMuc2hvdWxkSW5jbHVkZShmaWVsZCwgdmFyaWFibGVzKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gdXRpbGl0aWVzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQoZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFzT3duLmNhbGwocmVzdWx0LCBrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoIWZpZWxkLnNlbGVjdGlvblNldCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldE1hdGNoZXNSZXN1bHQoZmllbGQuc2VsZWN0aW9uU2V0LCByZXN1bHRba2V5XSwgdmFyaWFibGVzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpICYmXG4gICAgICAgICF1dGlsaXRpZXMuaXNSZWZlcmVuY2UodmFsdWUpICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cbmZ1bmN0aW9uIG1ha2VQcm9jZXNzZWRGaWVsZHNNZXJnZXIoKSB7XG4gICAgcmV0dXJuIG5ldyB1dGlsaXRpZXMuRGVlcE1lcmdlcjtcbn1cblxudmFyIERFTEVURSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgZGVsTW9kaWZpZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBERUxFVEU7IH07XG52YXIgSU5WQUxJREFURSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5leHBvcnRzLkVudGl0eVN0b3JlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFbnRpdHlTdG9yZShwb2xpY2llcywgZ3JvdXApIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wb2xpY2llcyA9IHBvbGljaWVzO1xuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHRoaXMuZGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMucm9vdElkcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMucmVmcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuZ2V0RmllbGRWYWx1ZSA9IGZ1bmN0aW9uIChvYmplY3RPclJlZmVyZW5jZSwgc3RvcmVGaWVsZE5hbWUpIHsgcmV0dXJuIHV0aWxpdGllcy5tYXliZURlZXBGcmVlemUodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdE9yUmVmZXJlbmNlKVxuICAgICAgICAgICAgPyBfdGhpcy5nZXQob2JqZWN0T3JSZWZlcmVuY2UuX19yZWYsIHN0b3JlRmllbGROYW1lKVxuICAgICAgICAgICAgOiBvYmplY3RPclJlZmVyZW5jZSAmJiBvYmplY3RPclJlZmVyZW5jZVtzdG9yZUZpZWxkTmFtZV0pOyB9O1xuICAgICAgICB0aGlzLmNhblJlYWQgPSBmdW5jdGlvbiAob2JqT3JSZWYpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqT3JSZWYpXG4gICAgICAgICAgICAgICAgPyBfdGhpcy5oYXMob2JqT3JSZWYuX19yZWYpXG4gICAgICAgICAgICAgICAgOiB0eXBlb2Ygb2JqT3JSZWYgPT09IFwib2JqZWN0XCI7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudG9SZWZlcmVuY2UgPSBmdW5jdGlvbiAob2JqT3JJZE9yUmVmLCBtZXJnZUludG9TdG9yZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpPcklkT3JSZWYgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2Uob2JqT3JJZE9yUmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqT3JJZE9yUmVmKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmpPcklkT3JSZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaWQgPSBfdGhpcy5wb2xpY2llcy5pZGVudGlmeShvYmpPcklkT3JSZWYpWzBdO1xuICAgICAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZiA9IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlKGlkKTtcbiAgICAgICAgICAgICAgICBpZiAobWVyZ2VJbnRvU3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWVyZ2UoaWQsIG9iak9ySWRPclJlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLmRhdGEpO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9va3VwKGRhdGFJZCwgdHJ1ZSkgIT09IHZvaWQgMDtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoZGF0YUlkLCBmaWVsZE5hbWUpIHtcbiAgICAgICAgdGhpcy5ncm91cC5kZXBlbmQoZGF0YUlkLCBmaWVsZE5hbWUpO1xuICAgICAgICBpZiAoaGFzT3duLmNhbGwodGhpcy5kYXRhLCBkYXRhSWQpKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmVPYmplY3QgPSB0aGlzLmRhdGFbZGF0YUlkXTtcbiAgICAgICAgICAgIGlmIChzdG9yZU9iamVjdCAmJiBoYXNPd24uY2FsbChzdG9yZU9iamVjdCwgZmllbGROYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZU9iamVjdFtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwiX190eXBlbmFtZVwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLnBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkLCBkYXRhSWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZFtkYXRhSWRdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXQoZGF0YUlkLCBmaWVsZE5hbWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUubG9va3VwID0gZnVuY3Rpb24gKGRhdGFJZCwgZGVwZW5kT25FeGlzdGVuY2UpIHtcbiAgICAgICAgaWYgKGRlcGVuZE9uRXhpc3RlbmNlKVxuICAgICAgICAgICAgdGhpcy5ncm91cC5kZXBlbmQoZGF0YUlkLCBcIl9fZXhpc3RzXCIpO1xuICAgICAgICBpZiAoaGFzT3duLmNhbGwodGhpcy5kYXRhLCBkYXRhSWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2RhdGFJZF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBMYXllcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Lmxvb2t1cChkYXRhSWQsIGRlcGVuZE9uRXhpc3RlbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZFtkYXRhSWRdKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKG9sZGVyLCBuZXdlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGF0YUlkO1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9sZGVyKSlcbiAgICAgICAgICAgIG9sZGVyID0gb2xkZXIuX19yZWY7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2UobmV3ZXIpKVxuICAgICAgICAgICAgbmV3ZXIgPSBuZXdlci5fX3JlZjtcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gdHlwZW9mIG9sZGVyID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IHRoaXMubG9va3VwKGRhdGFJZCA9IG9sZGVyKVxuICAgICAgICAgICAgOiBvbGRlcjtcbiAgICAgICAgdmFyIGluY29taW5nID0gdHlwZW9mIG5ld2VyID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IHRoaXMubG9va3VwKGRhdGFJZCA9IG5ld2VyKVxuICAgICAgICAgICAgOiBuZXdlcjtcbiAgICAgICAgaWYgKCFpbmNvbWluZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KHR5cGVvZiBkYXRhSWQgPT09IFwic3RyaW5nXCIsIFwic3RvcmUubWVyZ2UgZXhwZWN0cyBhIHN0cmluZyBJRFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KHR5cGVvZiBkYXRhSWQgPT09IFwic3RyaW5nXCIsIDEpO1xuICAgICAgICB2YXIgbWVyZ2VkID0gbmV3IHV0aWxpdGllcy5EZWVwTWVyZ2VyKHN0b3JlT2JqZWN0UmVjb25jaWxlcikubWVyZ2UoZXhpc3RpbmcsIGluY29taW5nKTtcbiAgICAgICAgdGhpcy5kYXRhW2RhdGFJZF0gPSBtZXJnZWQ7XG4gICAgICAgIGlmIChtZXJnZWQgIT09IGV4aXN0aW5nKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yZWZzW2RhdGFJZF07XG4gICAgICAgICAgICBpZiAodGhpcy5ncm91cC5jYWNoaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkc1RvRGlydHlfMSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICAgICAgaWYgKCFleGlzdGluZylcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzVG9EaXJ0eV8xLl9fZXhpc3RzID0gMTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhpbmNvbWluZykuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGlzdGluZyB8fCBleGlzdGluZ1tzdG9yZUZpZWxkTmFtZV0gIT09IG1lcmdlZFtzdG9yZUZpZWxkTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc1RvRGlydHlfMVtzdG9yZUZpZWxkTmFtZV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkTmFtZSAhPT0gc3RvcmVGaWVsZE5hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3RoaXMucG9saWNpZXMuaGFzS2V5QXJncyhtZXJnZWQuX190eXBlbmFtZSwgZmllbGROYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc1RvRGlydHlfMVtmaWVsZE5hbWVdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXJnZWRbc3RvcmVGaWVsZE5hbWVdID09PSB2b2lkIDAgJiYgIShfdGhpcyBpbnN0YW5jZW9mIExheWVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXJnZWRbc3RvcmVGaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkc1RvRGlydHlfMS5fX3R5cGVuYW1lICYmXG4gICAgICAgICAgICAgICAgICAgICEoZXhpc3RpbmcgJiYgZXhpc3RpbmcuX190eXBlbmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZFtkYXRhSWRdID09PSBtZXJnZWQuX190eXBlbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZmllbGRzVG9EaXJ0eV8xLl9fdHlwZW5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGZpZWxkc1RvRGlydHlfMSkuZm9yRWFjaChmdW5jdGlvbiAoZmllbGROYW1lKSB7IHJldHVybiBfdGhpcy5ncm91cC5kaXJ0eShkYXRhSWQsIGZpZWxkTmFtZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUubW9kaWZ5ID0gZnVuY3Rpb24gKGRhdGFJZCwgZmllbGRzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdG9yZU9iamVjdCA9IHRoaXMubG9va3VwKGRhdGFJZCk7XG4gICAgICAgIGlmIChzdG9yZU9iamVjdCkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZWRGaWVsZHNfMSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICB2YXIgbmVlZFRvTWVyZ2VfMSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGFsbERlbGV0ZWRfMSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgc2hhcmVkRGV0YWlsc18xID0ge1xuICAgICAgICAgICAgICAgIERFTEVURTogREVMRVRFLFxuICAgICAgICAgICAgICAgIElOVkFMSURBVEU6IElOVkFMSURBVEUsXG4gICAgICAgICAgICAgICAgaXNSZWZlcmVuY2U6IHV0aWxpdGllcy5pc1JlZmVyZW5jZSxcbiAgICAgICAgICAgICAgICB0b1JlZmVyZW5jZTogdGhpcy50b1JlZmVyZW5jZSxcbiAgICAgICAgICAgICAgICBjYW5SZWFkOiB0aGlzLmNhblJlYWQsXG4gICAgICAgICAgICAgICAgcmVhZEZpZWxkOiBmdW5jdGlvbiAoZmllbGROYW1lT3JPcHRpb25zLCBmcm9tKSB7IHJldHVybiBfdGhpcy5wb2xpY2llcy5yZWFkRmllbGQodHlwZW9mIGZpZWxkTmFtZU9yT3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWVPck9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGZyb20gfHwgdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2UoZGF0YUlkKSxcbiAgICAgICAgICAgICAgICB9IDogZmllbGROYW1lT3JPcHRpb25zLCB7IHN0b3JlOiBfdGhpcyB9KTsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yZU9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkVmFsdWUgPSBzdG9yZU9iamVjdFtzdG9yZUZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgPT09IHZvaWQgMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBtb2RpZnkgPSB0eXBlb2YgZmllbGRzID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyBmaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZHNbc3RvcmVGaWVsZE5hbWVdIHx8IGZpZWxkc1tmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChtb2RpZnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gbW9kaWZ5ID09PSBkZWxNb2RpZmllciA/IERFTEVURSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnkodXRpbGl0aWVzLm1heWJlRGVlcEZyZWV6ZShmaWVsZFZhbHVlKSwgdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHNoYXJlZERldGFpbHNfMSksIHsgZmllbGROYW1lOiBmaWVsZE5hbWUsIHN0b3JlRmllbGROYW1lOiBzdG9yZUZpZWxkTmFtZSwgc3RvcmFnZTogX3RoaXMuZ2V0U3RvcmFnZShkYXRhSWQsIHN0b3JlRmllbGROYW1lKSB9KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gSU5WQUxJREFURSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ3JvdXAuZGlydHkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IERFTEVURSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZmllbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWRGaWVsZHNfMVtzdG9yZUZpZWxkTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkVG9NZXJnZV8xID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBhbGxEZWxldGVkXzEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChuZWVkVG9NZXJnZV8xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXJnZShkYXRhSWQsIGNoYW5nZWRGaWVsZHNfMSk7XG4gICAgICAgICAgICAgICAgaWYgKGFsbERlbGV0ZWRfMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIExheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFbZGF0YUlkXSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbZGF0YUlkXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgXCJfX2V4aXN0c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChkYXRhSWQsIGZpZWxkTmFtZSwgYXJncykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBzdG9yZU9iamVjdCA9IHRoaXMubG9va3VwKGRhdGFJZCk7XG4gICAgICAgIGlmIChzdG9yZU9iamVjdCkge1xuICAgICAgICAgICAgdmFyIHR5cGVuYW1lID0gdGhpcy5nZXRGaWVsZFZhbHVlKHN0b3JlT2JqZWN0LCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgICAgICB2YXIgc3RvcmVGaWVsZE5hbWUgPSBmaWVsZE5hbWUgJiYgYXJnc1xuICAgICAgICAgICAgICAgID8gdGhpcy5wb2xpY2llcy5nZXRTdG9yZUZpZWxkTmFtZSh7IHR5cGVuYW1lOiB0eXBlbmFtZSwgZmllbGROYW1lOiBmaWVsZE5hbWUsIGFyZ3M6IGFyZ3MgfSlcbiAgICAgICAgICAgICAgICA6IGZpZWxkTmFtZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGlmeShkYXRhSWQsIHN0b3JlRmllbGROYW1lID8gKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2Fbc3RvcmVGaWVsZE5hbWVdID0gZGVsTW9kaWZpZXIsXG4gICAgICAgICAgICAgICAgX2EpIDogZGVsTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5ldmljdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBsaW1pdCkge1xuICAgICAgICB2YXIgZXZpY3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKHRoaXMuZGF0YSwgb3B0aW9ucy5pZCkpIHtcbiAgICAgICAgICAgICAgICBldmljdGVkID0gdGhpcy5kZWxldGUob3B0aW9ucy5pZCwgb3B0aW9ucy5maWVsZE5hbWUsIG9wdGlvbnMuYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIExheWVyICYmIHRoaXMgIT09IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgZXZpY3RlZCA9IHRoaXMucGFyZW50LmV2aWN0KG9wdGlvbnMsIGxpbWl0KSB8fCBldmljdGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZmllbGROYW1lIHx8IGV2aWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLmRpcnR5KG9wdGlvbnMuaWQsIG9wdGlvbnMuZmllbGROYW1lIHx8IFwiX19leGlzdHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2aWN0ZWQ7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZShudWxsKTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgb2JqID0gdGhpcy50b09iamVjdCgpO1xuICAgICAgICB2YXIgZXh0cmFSb290SWRzID0gW107XG4gICAgICAgIHRoaXMuZ2V0Um9vdElkU2V0KCkuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duLmNhbGwoX3RoaXMucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWQsIGlkKSkge1xuICAgICAgICAgICAgICAgIGV4dHJhUm9vdElkcy5wdXNoKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChleHRyYVJvb3RJZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBvYmouX19NRVRBID0geyBleHRyYVJvb3RJZHM6IGV4dHJhUm9vdElkcy5zb3J0KCkgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAobmV3RGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICAgICAgaWYgKCEobmV3RGF0YSAmJiBoYXNPd24uY2FsbChuZXdEYXRhLCBkYXRhSWQpKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmRlbGV0ZShkYXRhSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5ld0RhdGEpIHtcbiAgICAgICAgICAgIHZhciBfX01FVEEgPSBuZXdEYXRhLl9fTUVUQSwgcmVzdF8xID0gdHNsaWIuX19yZXN0KG5ld0RhdGEsIFtcIl9fTUVUQVwiXSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyZXN0XzEpLmZvckVhY2goZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm1lcmdlKGRhdGFJZCwgcmVzdF8xW2RhdGFJZF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoX19NRVRBKSB7XG4gICAgICAgICAgICAgICAgX19NRVRBLmV4dHJhUm9vdElkcy5mb3JFYWNoKHRoaXMucmV0YWluLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLnJldGFpbiA9IGZ1bmN0aW9uIChyb290SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdElkc1tyb290SWRdID0gKHRoaXMucm9vdElkc1tyb290SWRdIHx8IDApICsgMTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24gKHJvb3RJZCkge1xuICAgICAgICBpZiAodGhpcy5yb290SWRzW3Jvb3RJZF0gPiAwKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAtLXRoaXMucm9vdElkc1tyb290SWRdO1xuICAgICAgICAgICAgaWYgKCFjb3VudClcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5yb290SWRzW3Jvb3RJZF07XG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZ2V0Um9vdElkU2V0ID0gZnVuY3Rpb24gKGlkcykge1xuICAgICAgICBpZiAoaWRzID09PSB2b2lkIDApIHsgaWRzID0gbmV3IFNldCgpOyB9XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucm9vdElkcykuZm9yRWFjaChpZHMuYWRkLCBpZHMpO1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIExheWVyKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5nZXRSb290SWRTZXQoaWRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWQpLmZvckVhY2goaWRzLmFkZCwgaWRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRzO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmdjID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaWRzID0gdGhpcy5nZXRSb290SWRTZXQoKTtcbiAgICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy50b09iamVjdCgpO1xuICAgICAgICBpZHMuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChzbmFwc2hvdCwgaWQpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoX3RoaXMuZmluZENoaWxkUmVmSWRzKGlkKSkuZm9yRWFjaChpZHMuYWRkLCBpZHMpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzbmFwc2hvdFtpZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgaWRzVG9SZW1vdmUgPSBPYmplY3Qua2V5cyhzbmFwc2hvdCk7XG4gICAgICAgIGlmIChpZHNUb1JlbW92ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciByb290XzEgPSB0aGlzO1xuICAgICAgICAgICAgd2hpbGUgKHJvb3RfMSBpbnN0YW5jZW9mIExheWVyKVxuICAgICAgICAgICAgICAgIHJvb3RfMSA9IHJvb3RfMS5wYXJlbnQ7XG4gICAgICAgICAgICBpZHNUb1JlbW92ZS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gcm9vdF8xLmRlbGV0ZShpZCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHNUb1JlbW92ZTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5maW5kQ2hpbGRSZWZJZHMgPSBmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgIGlmICghaGFzT3duLmNhbGwodGhpcy5yZWZzLCBkYXRhSWQpKSB7XG4gICAgICAgICAgICB2YXIgZm91bmRfMSA9IHRoaXMucmVmc1tkYXRhSWRdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHZhciByb290ID0gdGhpcy5kYXRhW2RhdGFJZF07XG4gICAgICAgICAgICBpZiAoIXJvb3QpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kXzE7XG4gICAgICAgICAgICB2YXIgd29ya1NldF8xID0gbmV3IFNldChbcm9vdF0pO1xuICAgICAgICAgICAgd29ya1NldF8xLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZF8xW29iai5fX3JlZl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdChvYmopKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtTZXRfMS5hZGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWZzW2RhdGFJZF07XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUubWFrZUNhY2hlS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cC5rZXlNYWtlci5sb29rdXBBcnJheShhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcmV0dXJuIEVudGl0eVN0b3JlO1xufSgpKTtcbnZhciBDYWNoZUdyb3VwID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYWNoZUdyb3VwKGNhY2hpbmcsIHBhcmVudCkge1xuICAgICAgICBpZiAocGFyZW50ID09PSB2b2lkIDApIHsgcGFyZW50ID0gbnVsbDsgfVxuICAgICAgICB0aGlzLmNhY2hpbmcgPSBjYWNoaW5nO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXNldENhY2hpbmcoKTtcbiAgICB9XG4gICAgQ2FjaGVHcm91cC5wcm90b3R5cGUucmVzZXRDYWNoaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmQgPSB0aGlzLmNhY2hpbmcgPyBvcHRpbWlzbS5kZXAoKSA6IG51bGw7XG4gICAgICAgIHRoaXMua2V5TWFrZXIgPSBuZXcgdHJpZS5UcmllKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwKTtcbiAgICB9O1xuICAgIENhY2hlR3JvdXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIChkYXRhSWQsIHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmQpIHtcbiAgICAgICAgICAgIHRoaXMuZChtYWtlRGVwS2V5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpKTtcbiAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgIGlmIChmaWVsZE5hbWUgIT09IHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kKG1ha2VEZXBLZXkoZGF0YUlkLCBmaWVsZE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmRlcGVuZChkYXRhSWQsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2FjaGVHcm91cC5wcm90b3R5cGUuZGlydHkgPSBmdW5jdGlvbiAoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5kKSB7XG4gICAgICAgICAgICB0aGlzLmQuZGlydHkobWFrZURlcEtleShkYXRhSWQsIHN0b3JlRmllbGROYW1lKSwgc3RvcmVGaWVsZE5hbWUgPT09IFwiX19leGlzdHNcIiA/IFwiZm9yZ2V0XCIgOiBcInNldERpcnR5XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ2FjaGVHcm91cDtcbn0oKSk7XG5mdW5jdGlvbiBtYWtlRGVwS2V5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpIHtcbiAgICByZXR1cm4gc3RvcmVGaWVsZE5hbWUgKyAnIycgKyBkYXRhSWQ7XG59XG5mdW5jdGlvbiBtYXliZURlcGVuZE9uRXhpc3RlbmNlT2ZFbnRpdHkoc3RvcmUsIGVudGl0eUlkKSB7XG4gICAgaWYgKHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhzdG9yZSkpIHtcbiAgICAgICAgc3RvcmUuZ3JvdXAuZGVwZW5kKGVudGl0eUlkLCBcIl9fZXhpc3RzXCIpO1xuICAgIH1cbn1cbihmdW5jdGlvbiAoRW50aXR5U3RvcmUpIHtcbiAgICB2YXIgUm9vdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIHRzbGliLl9fZXh0ZW5kcyhSb290LCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBSb290KF9hKSB7XG4gICAgICAgICAgICB2YXIgcG9saWNpZXMgPSBfYS5wb2xpY2llcywgX2IgPSBfYS5yZXN1bHRDYWNoaW5nLCByZXN1bHRDYWNoaW5nID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgc2VlZCA9IF9hLnNlZWQ7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwb2xpY2llcywgbmV3IENhY2hlR3JvdXAocmVzdWx0Q2FjaGluZykpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy5zdHVtcCA9IG5ldyBTdHVtcChfdGhpcyk7XG4gICAgICAgICAgICBfdGhpcy5zdG9yYWdlVHJpZSA9IG5ldyB0cmllLlRyaWUodXRpbGl0aWVzLmNhblVzZVdlYWtNYXApO1xuICAgICAgICAgICAgaWYgKHNlZWQpXG4gICAgICAgICAgICAgICAgX3RoaXMucmVwbGFjZShzZWVkKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuICAgICAgICBSb290LnByb3RvdHlwZS5hZGRMYXllciA9IGZ1bmN0aW9uIChsYXllcklkLCByZXBsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0dW1wLmFkZExheWVyKGxheWVySWQsIHJlcGxheSk7XG4gICAgICAgIH07XG4gICAgICAgIFJvb3QucHJvdG90eXBlLnJlbW92ZUxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIFJvb3QucHJvdG90eXBlLmdldFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlVHJpZS5sb29rdXBBcnJheShhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUm9vdDtcbiAgICB9KEVudGl0eVN0b3JlKSk7XG4gICAgRW50aXR5U3RvcmUuUm9vdCA9IFJvb3Q7XG59KShleHBvcnRzLkVudGl0eVN0b3JlIHx8IChleHBvcnRzLkVudGl0eVN0b3JlID0ge30pKTtcbnZhciBMYXllciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKExheWVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExheWVyKGlkLCBwYXJlbnQsIHJlcGxheSwgZ3JvdXApIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcGFyZW50LnBvbGljaWVzLCBncm91cCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaWQgPSBpZDtcbiAgICAgICAgX3RoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBfdGhpcy5yZXBsYXkgPSByZXBsYXk7XG4gICAgICAgIF90aGlzLmdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHJlcGxheShfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTGF5ZXIucHJvdG90eXBlLmFkZExheWVyID0gZnVuY3Rpb24gKGxheWVySWQsIHJlcGxheSkge1xuICAgICAgICByZXR1cm4gbmV3IExheWVyKGxheWVySWQsIHRoaXMsIHJlcGxheSwgdGhpcy5ncm91cCk7XG4gICAgfTtcbiAgICBMYXllci5wcm90b3R5cGUucmVtb3ZlTGF5ZXIgPSBmdW5jdGlvbiAobGF5ZXJJZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQucmVtb3ZlTGF5ZXIobGF5ZXJJZCk7XG4gICAgICAgIGlmIChsYXllcklkID09PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncm91cC5jYWNoaW5nKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG93blN0b3JlT2JqZWN0ID0gX3RoaXMuZGF0YVtkYXRhSWRdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50U3RvcmVPYmplY3QgPSBwYXJlbnRbXCJsb29rdXBcIl0oZGF0YUlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRTdG9yZU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVsZXRlKGRhdGFJZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIW93blN0b3JlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ncm91cC5kaXJ0eShkYXRhSWQsIFwiX19leGlzdHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJlbnRTdG9yZU9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ncm91cC5kaXJ0eShkYXRhSWQsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG93blN0b3JlT2JqZWN0ICE9PSBwYXJlbnRTdG9yZU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3duU3RvcmVPYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlcXVhbGl0eS5lcXVhbChvd25TdG9yZU9iamVjdFtzdG9yZUZpZWxkTmFtZV0sIHBhcmVudFN0b3JlT2JqZWN0W3N0b3JlRmllbGROYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ3JvdXAuZGlydHkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdGhpcy5wYXJlbnQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgcmV0dXJuIHBhcmVudC5hZGRMYXllcih0aGlzLmlkLCB0aGlzLnJlcGxheSk7XG4gICAgfTtcbiAgICBMYXllci5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5wYXJlbnQudG9PYmplY3QoKSksIHRoaXMuZGF0YSk7XG4gICAgfTtcbiAgICBMYXllci5wcm90b3R5cGUuZmluZENoaWxkUmVmSWRzID0gZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICB2YXIgZnJvbVBhcmVudCA9IHRoaXMucGFyZW50LmZpbmRDaGlsZFJlZklkcyhkYXRhSWQpO1xuICAgICAgICByZXR1cm4gaGFzT3duLmNhbGwodGhpcy5kYXRhLCBkYXRhSWQpID8gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGZyb21QYXJlbnQpLCBfc3VwZXIucHJvdG90eXBlLmZpbmRDaGlsZFJlZklkcy5jYWxsKHRoaXMsIGRhdGFJZCkpIDogZnJvbVBhcmVudDtcbiAgICB9O1xuICAgIExheWVyLnByb3RvdHlwZS5nZXRTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcCA9IHRoaXMucGFyZW50O1xuICAgICAgICB3aGlsZSAocC5wYXJlbnQpXG4gICAgICAgICAgICBwID0gcC5wYXJlbnQ7XG4gICAgICAgIHJldHVybiBwLmdldFN0b3JhZ2UuYXBwbHkocCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHJldHVybiBMYXllcjtcbn0oZXhwb3J0cy5FbnRpdHlTdG9yZSkpO1xudmFyIFN0dW1wID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoU3R1bXAsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3R1bXAocm9vdCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgXCJFbnRpdHlTdG9yZS5TdHVtcFwiLCByb290LCBmdW5jdGlvbiAoKSB7IH0sIG5ldyBDYWNoZUdyb3VwKHJvb3QuZ3JvdXAuY2FjaGluZywgcm9vdC5ncm91cCkpIHx8IHRoaXM7XG4gICAgfVxuICAgIFN0dW1wLnByb3RvdHlwZS5yZW1vdmVMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBTdHVtcC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5tZXJnZS5hcHBseSh0aGlzLnBhcmVudCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHJldHVybiBTdHVtcDtcbn0oTGF5ZXIpKTtcbmZ1bmN0aW9uIHN0b3JlT2JqZWN0UmVjb25jaWxlcihleGlzdGluZ09iamVjdCwgaW5jb21pbmdPYmplY3QsIHByb3BlcnR5KSB7XG4gICAgdmFyIGV4aXN0aW5nVmFsdWUgPSBleGlzdGluZ09iamVjdFtwcm9wZXJ0eV07XG4gICAgdmFyIGluY29taW5nVmFsdWUgPSBpbmNvbWluZ09iamVjdFtwcm9wZXJ0eV07XG4gICAgcmV0dXJuIGVxdWFsaXR5LmVxdWFsKGV4aXN0aW5nVmFsdWUsIGluY29taW5nVmFsdWUpID8gZXhpc3RpbmdWYWx1ZSA6IGluY29taW5nVmFsdWU7XG59XG5mdW5jdGlvbiBzdXBwb3J0c1Jlc3VsdENhY2hpbmcoc3RvcmUpIHtcbiAgICByZXR1cm4gISEoc3RvcmUgaW5zdGFuY2VvZiBleHBvcnRzLkVudGl0eVN0b3JlICYmIHN0b3JlLmdyb3VwLmNhY2hpbmcpO1xufVxuXG5mdW5jdGlvbiBzaGFsbG93Q29weSh2YWx1ZSkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICAgICAgICAgID8gdmFsdWUuc2xpY2UoMClcbiAgICAgICAgICAgIDogdHNsaWIuX19hc3NpZ24oeyBfX3Byb3RvX186IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSkgfSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG52YXIgT2JqZWN0Q2Fub24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9iamVjdENhbm9uKCkge1xuICAgICAgICB0aGlzLmtub3duID0gbmV3ICh1dGlsaXRpZXMuY2FuVXNlV2Vha1NldCA/IFdlYWtTZXQgOiBTZXQpKCk7XG4gICAgICAgIHRoaXMucG9vbCA9IG5ldyB0cmllLlRyaWUodXRpbGl0aWVzLmNhblVzZVdlYWtNYXApO1xuICAgICAgICB0aGlzLnBhc3NlcyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMua2V5c0J5SlNPTiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbXB0eSA9IHRoaXMuYWRtaXQoe30pO1xuICAgIH1cbiAgICBPYmplY3RDYW5vbi5wcm90b3R5cGUuaXNLbm93biA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkgJiYgdGhpcy5rbm93bi5oYXModmFsdWUpO1xuICAgIH07XG4gICAgT2JqZWN0Q2Fub24ucHJvdG90eXBlLnBhc3MgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YXIgY29weSA9IHNoYWxsb3dDb3B5KHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucGFzc2VzLnNldChjb3B5LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBPYmplY3RDYW5vbi5wcm90b3R5cGUuYWRtaXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWwgPSB0aGlzLnBhc3Nlcy5nZXQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsKVxuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbDtcbiAgICAgICAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgICAgICAgICBzd2l0Y2ggKHByb3RvKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBBcnJheS5wcm90b3R5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMua25vd24uaGFzKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFycmF5ID0gdmFsdWUubWFwKHRoaXMuYWRtaXQsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMucG9vbC5sb29rdXBBcnJheShhcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZS5hcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rbm93bi5hZGQobm9kZS5hcnJheSA9IGFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShhcnJheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuYXJyYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICAgICAgICBjYXNlIE9iamVjdC5wcm90b3R5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMua25vd24uaGFzKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3RvXzEgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyYXlfMSA9IFtwcm90b18xXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSB0aGlzLnNvcnRlZEtleXModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBhcnJheV8xLnB1c2goa2V5cy5qc29uKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpcnN0VmFsdWVJbmRleF8xID0gYXJyYXlfMS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGtleXMuc29ydGVkLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlfMS5wdXNoKF90aGlzLmFkbWl0KHZhbHVlW2tleV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5wb29sLmxvb2t1cEFycmF5KGFycmF5XzEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGUub2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqXzEgPSBub2RlLm9iamVjdCA9IE9iamVjdC5jcmVhdGUocHJvdG9fMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtub3duLmFkZChvYmpfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLnNvcnRlZC5mb3JFYWNoKGZ1bmN0aW9uIChrZXksIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpfMVtrZXldID0gYXJyYXlfMVtmaXJzdFZhbHVlSW5kZXhfMSArIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5mcmVlemUob2JqXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLm9iamVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgT2JqZWN0Q2Fub24ucHJvdG90eXBlLnNvcnRlZEtleXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBvb2wubG9va3VwQXJyYXkoa2V5cyk7XG4gICAgICAgIGlmICghbm9kZS5rZXlzKSB7XG4gICAgICAgICAgICBrZXlzLnNvcnQoKTtcbiAgICAgICAgICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoa2V5cyk7XG4gICAgICAgICAgICBpZiAoIShub2RlLmtleXMgPSB0aGlzLmtleXNCeUpTT04uZ2V0KGpzb24pKSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5c0J5SlNPTi5zZXQoanNvbiwgbm9kZS5rZXlzID0geyBzb3J0ZWQ6IGtleXMsIGpzb246IGpzb24gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGUua2V5cztcbiAgICB9O1xuICAgIHJldHVybiBPYmplY3RDYW5vbjtcbn0oKSk7XG52YXIgY2Fub25pY2FsU3RyaW5naWZ5ID0gT2JqZWN0LmFzc2lnbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKHN0cmluZ2lmeUNhbm9uID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJlc2V0Q2Fub25pY2FsU3RyaW5naWZ5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbm9uaWNhbCA9IHN0cmluZ2lmeUNhbm9uLmFkbWl0KHZhbHVlKTtcbiAgICAgICAgdmFyIGpzb24gPSBzdHJpbmdpZnlDYWNoZS5nZXQoY2Fub25pY2FsKTtcbiAgICAgICAgaWYgKGpzb24gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgc3RyaW5naWZ5Q2FjaGUuc2V0KGNhbm9uaWNhbCwganNvbiA9IEpTT04uc3RyaW5naWZ5KGNhbm9uaWNhbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xufSwge1xuICAgIHJlc2V0OiByZXNldENhbm9uaWNhbFN0cmluZ2lmeSxcbn0pO1xudmFyIHN0cmluZ2lmeUNhbm9uO1xudmFyIHN0cmluZ2lmeUNhY2hlO1xuZnVuY3Rpb24gcmVzZXRDYW5vbmljYWxTdHJpbmdpZnkoKSB7XG4gICAgc3RyaW5naWZ5Q2Fub24gPSBuZXcgT2JqZWN0Q2Fub247XG4gICAgc3RyaW5naWZ5Q2FjaGUgPSBuZXcgKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwID8gV2Vha01hcCA6IE1hcCkoKTtcbn1cblxuZnVuY3Rpb24gZXhlY1NlbGVjdGlvblNldEtleUFyZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBbXG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uU2V0LFxuICAgICAgICBvcHRpb25zLm9iamVjdE9yUmVmZXJlbmNlLFxuICAgICAgICBvcHRpb25zLmNvbnRleHQsXG4gICAgICAgIG9wdGlvbnMuY29udGV4dC5jYW5vbml6ZVJlc3VsdHMsXG4gICAgXTtcbn1cbnZhciBTdG9yZVJlYWRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RvcmVSZWFkZXIoY29uZmlnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMua25vd25SZXN1bHRzID0gbmV3ICh1dGlsaXRpZXMuY2FuVXNlV2Vha01hcCA/IFdlYWtNYXAgOiBNYXApKCk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdXRpbGl0aWVzLmNvbXBhY3QoY29uZmlnLCB7XG4gICAgICAgICAgICBhZGRUeXBlbmFtZTogY29uZmlnLmFkZFR5cGVuYW1lICE9PSBmYWxzZSxcbiAgICAgICAgICAgIGNhbm9uaXplUmVzdWx0czogc2hvdWxkQ2Fub25pemVSZXN1bHRzKGNvbmZpZyksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbm9uID0gY29uZmlnLmNhbm9uIHx8IG5ldyBPYmplY3RDYW5vbjtcbiAgICAgICAgdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0ID0gb3B0aW1pc20ud3JhcChmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdmFyIGNhbm9uaXplUmVzdWx0cyA9IG9wdGlvbnMuY29udGV4dC5jYW5vbml6ZVJlc3VsdHM7XG4gICAgICAgICAgICB2YXIgcGVla0FyZ3MgPSBleGVjU2VsZWN0aW9uU2V0S2V5QXJncyhvcHRpb25zKTtcbiAgICAgICAgICAgIHBlZWtBcmdzWzNdID0gIWNhbm9uaXplUmVzdWx0cztcbiAgICAgICAgICAgIHZhciBvdGhlciA9IChfYSA9IF90aGlzLmV4ZWN1dGVTZWxlY3Rpb25TZXQpLnBlZWsuYXBwbHkoX2EsIHBlZWtBcmdzKTtcbiAgICAgICAgICAgIGlmIChvdGhlcikge1xuICAgICAgICAgICAgICAgIGlmIChjYW5vbml6ZVJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvdGhlciksIHsgcmVzdWx0OiBfdGhpcy5jYW5vbi5hZG1pdChvdGhlci5yZXN1bHQpIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXliZURlcGVuZE9uRXhpc3RlbmNlT2ZFbnRpdHkob3B0aW9ucy5jb250ZXh0LnN0b3JlLCBvcHRpb25zLmVuY2xvc2luZ1JlZi5fX3JlZik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZXhlY1NlbGVjdGlvblNldEltcGwob3B0aW9ucyk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1heDogdGhpcy5jb25maWcucmVzdWx0Q2FjaGVNYXhTaXplLFxuICAgICAgICAgICAga2V5QXJnczogZXhlY1NlbGVjdGlvblNldEtleUFyZ3MsXG4gICAgICAgICAgICBtYWtlQ2FjaGVLZXk6IGZ1bmN0aW9uIChzZWxlY3Rpb25TZXQsIHBhcmVudCwgY29udGV4dCwgY2Fub25pemVSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhjb250ZXh0LnN0b3JlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5zdG9yZS5tYWtlQ2FjaGVLZXkoc2VsZWN0aW9uU2V0LCB1dGlsaXRpZXMuaXNSZWZlcmVuY2UocGFyZW50KSA/IHBhcmVudC5fX3JlZiA6IHBhcmVudCwgY29udGV4dC52YXJTdHJpbmcsIGNhbm9uaXplUmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5leGVjdXRlU3ViU2VsZWN0ZWRBcnJheSA9IG9wdGltaXNtLndyYXAoZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG1heWJlRGVwZW5kT25FeGlzdGVuY2VPZkVudGl0eShvcHRpb25zLmNvbnRleHQuc3RvcmUsIG9wdGlvbnMuZW5jbG9zaW5nUmVmLl9fcmVmKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5leGVjU3ViU2VsZWN0ZWRBcnJheUltcGwob3B0aW9ucyk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1heDogdGhpcy5jb25maWcucmVzdWx0Q2FjaGVNYXhTaXplLFxuICAgICAgICAgICAgbWFrZUNhY2hlS2V5OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBfYS5maWVsZCwgYXJyYXkgPSBfYS5hcnJheSwgY29udGV4dCA9IF9hLmNvbnRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhjb250ZXh0LnN0b3JlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5zdG9yZS5tYWtlQ2FjaGVLZXkoZmllbGQsIGFycmF5LCBjb250ZXh0LnZhclN0cmluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgU3RvcmVSZWFkZXIucHJvdG90eXBlLnJlc2V0Q2Fub24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2Fub24gPSBuZXcgT2JqZWN0Q2Fub247XG4gICAgfTtcbiAgICBTdG9yZVJlYWRlci5wcm90b3R5cGUuZGlmZlF1ZXJ5QWdhaW5zdFN0b3JlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBzdG9yZSA9IF9hLnN0b3JlLCBxdWVyeSA9IF9hLnF1ZXJ5LCBfYiA9IF9hLnJvb3RJZCwgcm9vdElkID0gX2IgPT09IHZvaWQgMCA/ICdST09UX1FVRVJZJyA6IF9iLCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIF9jID0gX2EucmV0dXJuUGFydGlhbERhdGEsIHJldHVyblBhcnRpYWxEYXRhID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBfYS5jYW5vbml6ZVJlc3VsdHMsIGNhbm9uaXplUmVzdWx0cyA9IF9kID09PSB2b2lkIDAgPyB0aGlzLmNvbmZpZy5jYW5vbml6ZVJlc3VsdHMgOiBfZDtcbiAgICAgICAgdmFyIHBvbGljaWVzID0gdGhpcy5jb25maWcuY2FjaGUucG9saWNpZXM7XG4gICAgICAgIHZhcmlhYmxlcyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB1dGlsaXRpZXMuZ2V0RGVmYXVsdFZhbHVlcyh1dGlsaXRpZXMuZ2V0UXVlcnlEZWZpbml0aW9uKHF1ZXJ5KSkpLCB2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgcm9vdFJlZiA9IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlKHJvb3RJZCk7XG4gICAgICAgIHZhciBtZXJnZXIgPSBuZXcgdXRpbGl0aWVzLkRlZXBNZXJnZXI7XG4gICAgICAgIHZhciBleGVjUmVzdWx0ID0gdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0KHtcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDogdXRpbGl0aWVzLmdldE1haW5EZWZpbml0aW9uKHF1ZXJ5KS5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICBvYmplY3RPclJlZmVyZW5jZTogcm9vdFJlZixcbiAgICAgICAgICAgIGVuY2xvc2luZ1JlZjogcm9vdFJlZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICBzdG9yZTogc3RvcmUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgIHBvbGljaWVzOiBwb2xpY2llcyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB2YXJTdHJpbmc6IGNhbm9uaWNhbFN0cmluZ2lmeSh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgIGNhbm9uaXplUmVzdWx0czogY2Fub25pemVSZXN1bHRzLFxuICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwOiB1dGlsaXRpZXMuY3JlYXRlRnJhZ21lbnRNYXAodXRpbGl0aWVzLmdldEZyYWdtZW50RGVmaW5pdGlvbnMocXVlcnkpKSxcbiAgICAgICAgICAgICAgICBtZXJnZTogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlci5tZXJnZShhLCBiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBtaXNzaW5nO1xuICAgICAgICBpZiAoZXhlY1Jlc3VsdC5taXNzaW5nKSB7XG4gICAgICAgICAgICBtaXNzaW5nID0gW25ldyBNaXNzaW5nRmllbGRFcnJvcihmaXJzdE1pc3NpbmcoZXhlY1Jlc3VsdC5taXNzaW5nKSwgZXhlY1Jlc3VsdC5taXNzaW5nLCBxdWVyeSwgdmFyaWFibGVzKV07XG4gICAgICAgICAgICBpZiAoIXJldHVyblBhcnRpYWxEYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbWlzc2luZ1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdWx0OiBleGVjUmVzdWx0LnJlc3VsdCxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAhbWlzc2luZyxcbiAgICAgICAgICAgIG1pc3Npbmc6IG1pc3NpbmcsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBTdG9yZVJlYWRlci5wcm90b3R5cGUuaXNGcmVzaCA9IGZ1bmN0aW9uIChyZXN1bHQsIHBhcmVudCwgc2VsZWN0aW9uU2V0LCBjb250ZXh0KSB7XG4gICAgICAgIGlmIChzdXBwb3J0c1Jlc3VsdENhY2hpbmcoY29udGV4dC5zdG9yZSkgJiZcbiAgICAgICAgICAgIHRoaXMua25vd25SZXN1bHRzLmdldChyZXN1bHQpID09PSBzZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgIHZhciBsYXRlc3QgPSB0aGlzLmV4ZWN1dGVTZWxlY3Rpb25TZXQucGVlayhzZWxlY3Rpb25TZXQsIHBhcmVudCwgY29udGV4dCwgdGhpcy5jYW5vbi5pc0tub3duKHJlc3VsdCkpO1xuICAgICAgICAgICAgaWYgKGxhdGVzdCAmJiByZXN1bHQgPT09IGxhdGVzdC5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBTdG9yZVJlYWRlci5wcm90b3R5cGUuZXhlY1NlbGVjdGlvblNldEltcGwgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNlbGVjdGlvblNldCA9IF9hLnNlbGVjdGlvblNldCwgb2JqZWN0T3JSZWZlcmVuY2UgPSBfYS5vYmplY3RPclJlZmVyZW5jZSwgZW5jbG9zaW5nUmVmID0gX2EuZW5jbG9zaW5nUmVmLCBjb250ZXh0ID0gX2EuY29udGV4dDtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmplY3RPclJlZmVyZW5jZSkgJiZcbiAgICAgICAgICAgICFjb250ZXh0LnBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkW29iamVjdE9yUmVmZXJlbmNlLl9fcmVmXSAmJlxuICAgICAgICAgICAgIWNvbnRleHQuc3RvcmUuaGFzKG9iamVjdE9yUmVmZXJlbmNlLl9fcmVmKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHRoaXMuY2Fub24uZW1wdHksXG4gICAgICAgICAgICAgICAgbWlzc2luZzogXCJEYW5nbGluZyByZWZlcmVuY2UgdG8gbWlzc2luZyBcIi5jb25jYXQob2JqZWN0T3JSZWZlcmVuY2UuX19yZWYsIFwiIG9iamVjdFwiKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhcmlhYmxlcyA9IGNvbnRleHQudmFyaWFibGVzLCBwb2xpY2llcyA9IGNvbnRleHQucG9saWNpZXMsIHN0b3JlID0gY29udGV4dC5zdG9yZTtcbiAgICAgICAgdmFyIHR5cGVuYW1lID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShvYmplY3RPclJlZmVyZW5jZSwgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIHZhciBtaXNzaW5nO1xuICAgICAgICBpZiAodGhpcy5jb25maWcuYWRkVHlwZW5hbWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB0eXBlbmFtZSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgIXBvbGljaWVzLnJvb3RJZHNCeVR5cGVuYW1lW3R5cGVuYW1lXSkge1xuICAgICAgICAgICAgcmVzdWx0ID0geyBfX3R5cGVuYW1lOiB0eXBlbmFtZSB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1pc3NpbmcocmVzdWx0LCByZXN1bHROYW1lKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAocmVzdWx0Lm1pc3NpbmcpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nID0gY29udGV4dC5tZXJnZShtaXNzaW5nLCAoX2EgPSB7fSwgX2FbcmVzdWx0TmFtZV0gPSByZXN1bHQubWlzc2luZywgX2EpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHZhciB3b3JrU2V0ID0gbmV3IFNldChzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucyk7XG4gICAgICAgIHdvcmtTZXQuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgaWYgKCF1dGlsaXRpZXMuc2hvdWxkSW5jbHVkZShzZWxlY3Rpb24sIHZhcmlhYmxlcykpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc0ZpZWxkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGRWYWx1ZSA9IHBvbGljaWVzLnJlYWRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogc2VsZWN0aW9uLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBzZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogY29udGV4dC52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIGZyb206IG9iamVjdE9yUmVmZXJlbmNlLFxuICAgICAgICAgICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHROYW1lID0gdXRpbGl0aWVzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXRpbGl0aWVzLmFkZFR5cGVuYW1lVG9Eb2N1bWVudC5hZGRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nID0gY29udGV4dC5tZXJnZShtaXNzaW5nLCAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYVtyZXN1bHROYW1lXSA9IFwiQ2FuJ3QgZmluZCBmaWVsZCAnXCIuY29uY2F0KHNlbGVjdGlvbi5uYW1lLnZhbHVlLCBcIicgb24gXCIpLmNvbmNhdCh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqZWN0T3JSZWZlcmVuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gb2JqZWN0T3JSZWZlcmVuY2UuX19yZWYgKyBcIiBvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwib2JqZWN0IFwiICsgSlNPTi5zdHJpbmdpZnkob2JqZWN0T3JSZWZlcmVuY2UsIG51bGwsIDIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZmllbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZSA9IGhhbmRsZU1pc3NpbmcoX3RoaXMuZXhlY3V0ZVN1YlNlbGVjdGVkQXJyYXkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IHNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5OiBmaWVsZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5jbG9zaW5nUmVmOiBlbmNsb3NpbmdSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB9KSwgcmVzdWx0TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFzZWxlY3Rpb24uc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LmNhbm9uaXplUmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZSA9IF90aGlzLmNhbm9uLnBhc3MoZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGRWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSBoYW5kbGVNaXNzaW5nKF90aGlzLmV4ZWN1dGVTZWxlY3Rpb25TZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiBzZWxlY3Rpb24uc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0T3JSZWZlcmVuY2U6IGZpZWxkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNsb3NpbmdSZWY6IHV0aWxpdGllcy5pc1JlZmVyZW5jZShmaWVsZFZhbHVlKSA/IGZpZWxkVmFsdWUgOiBlbmNsb3NpbmdSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB9KSwgcmVzdWx0TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGV4dC5tZXJnZShyZXN1bHQsIChfYiA9IHt9LCBfYltyZXN1bHROYW1lXSA9IGZpZWxkVmFsdWUsIF9iKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gdXRpbGl0aWVzLmdldEZyYWdtZW50RnJvbVNlbGVjdGlvbihzZWxlY3Rpb24sIGNvbnRleHQuZnJhZ21lbnRNYXApO1xuICAgICAgICAgICAgICAgIGlmIChmcmFnbWVudCAmJiBwb2xpY2llcy5mcmFnbWVudE1hdGNoZXMoZnJhZ21lbnQsIHR5cGVuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudC5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKHdvcmtTZXQuYWRkLCB3b3JrU2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZmluYWxSZXN1bHQgPSB7IHJlc3VsdDogcmVzdWx0LCBtaXNzaW5nOiBtaXNzaW5nIH07XG4gICAgICAgIHZhciBmcm96ZW4gPSBjb250ZXh0LmNhbm9uaXplUmVzdWx0c1xuICAgICAgICAgICAgPyB0aGlzLmNhbm9uLmFkbWl0KGZpbmFsUmVzdWx0KVxuICAgICAgICAgICAgOiB1dGlsaXRpZXMubWF5YmVEZWVwRnJlZXplKGZpbmFsUmVzdWx0KTtcbiAgICAgICAgaWYgKGZyb3plbi5yZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMua25vd25SZXN1bHRzLnNldChmcm96ZW4ucmVzdWx0LCBzZWxlY3Rpb25TZXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm96ZW47XG4gICAgfTtcbiAgICBTdG9yZVJlYWRlci5wcm90b3R5cGUuZXhlY1N1YlNlbGVjdGVkQXJyYXlJbXBsID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmaWVsZCA9IF9hLmZpZWxkLCBhcnJheSA9IF9hLmFycmF5LCBlbmNsb3NpbmdSZWYgPSBfYS5lbmNsb3NpbmdSZWYsIGNvbnRleHQgPSBfYS5jb250ZXh0O1xuICAgICAgICB2YXIgbWlzc2luZztcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWlzc2luZyhjaGlsZFJlc3VsdCwgaSkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKGNoaWxkUmVzdWx0Lm1pc3NpbmcpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nID0gY29udGV4dC5tZXJnZShtaXNzaW5nLCAoX2EgPSB7fSwgX2FbaV0gPSBjaGlsZFJlc3VsdC5taXNzaW5nLCBfYSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkUmVzdWx0LnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICBhcnJheSA9IGFycmF5LmZpbHRlcihjb250ZXh0LnN0b3JlLmNhblJlYWQpO1xuICAgICAgICB9XG4gICAgICAgIGFycmF5ID0gYXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlTWlzc2luZyhfdGhpcy5leGVjdXRlU3ViU2VsZWN0ZWRBcnJheSh7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgYXJyYXk6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIGVuY2xvc2luZ1JlZjogZW5jbG9zaW5nUmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIH0pLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlTWlzc2luZyhfdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0KHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiBmaWVsZC5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE9yUmVmZXJlbmNlOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICBlbmNsb3NpbmdSZWY6IHV0aWxpdGllcy5pc1JlZmVyZW5jZShpdGVtKSA/IGl0ZW0gOiBlbmNsb3NpbmdSZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgfSksIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICAgICAgICBhc3NlcnRTZWxlY3Rpb25TZXRGb3JJZFZhbHVlKGNvbnRleHQuc3RvcmUsIGZpZWxkLCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3VsdDogY29udGV4dC5jYW5vbml6ZVJlc3VsdHMgPyB0aGlzLmNhbm9uLmFkbWl0KGFycmF5KSA6IGFycmF5LFxuICAgICAgICAgICAgbWlzc2luZzogbWlzc2luZyxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBTdG9yZVJlYWRlcjtcbn0oKSk7XG5mdW5jdGlvbiBmaXJzdE1pc3NpbmcodHJlZSkge1xuICAgIHRyeSB7XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRyZWUsIGZ1bmN0aW9uIChfLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICB0aHJvdyB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5mdW5jdGlvbiBhc3NlcnRTZWxlY3Rpb25TZXRGb3JJZFZhbHVlKHN0b3JlLCBmaWVsZCwgZmllbGRWYWx1ZSkge1xuICAgIGlmICghZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgIHZhciB3b3JrU2V0XzEgPSBuZXcgU2V0KFtmaWVsZFZhbHVlXSk7XG4gICAgICAgIHdvcmtTZXRfMS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KCF1dGlsaXRpZXMuaXNSZWZlcmVuY2UodmFsdWUpLCBcIk1pc3Npbmcgc2VsZWN0aW9uIHNldCBmb3Igb2JqZWN0IG9mIHR5cGUgXCIuY29uY2F0KGdldFR5cGVuYW1lRnJvbVN0b3JlT2JqZWN0KHN0b3JlLCB2YWx1ZSksIFwiIHJldHVybmVkIGZvciBxdWVyeSBmaWVsZCBcIikuY29uY2F0KGZpZWxkLm5hbWUudmFsdWUpKSA6IGdsb2JhbHMuaW52YXJpYW50KCF1dGlsaXRpZXMuaXNSZWZlcmVuY2UodmFsdWUpLCA1KTtcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHZhbHVlKS5mb3JFYWNoKHdvcmtTZXRfMS5hZGQsIHdvcmtTZXRfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxudmFyIGNhY2hlU2xvdCA9IG5ldyBjb250ZXh0LlNsb3QoKTtcbnZhciBjYWNoZUluZm9NYXAgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gZ2V0Q2FjaGVJbmZvKGNhY2hlKSB7XG4gICAgdmFyIGluZm8gPSBjYWNoZUluZm9NYXAuZ2V0KGNhY2hlKTtcbiAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgY2FjaGVJbmZvTWFwLnNldChjYWNoZSwgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhcnM6IG5ldyBTZXQsXG4gICAgICAgICAgICBkZXA6IG9wdGltaXNtLmRlcCgpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGluZm87XG59XG5mdW5jdGlvbiBmb3JnZXRDYWNoZShjYWNoZSkge1xuICAgIGdldENhY2hlSW5mbyhjYWNoZSkudmFycy5mb3JFYWNoKGZ1bmN0aW9uIChydikgeyByZXR1cm4gcnYuZm9yZ2V0Q2FjaGUoY2FjaGUpOyB9KTtcbn1cbmZ1bmN0aW9uIHJlY2FsbENhY2hlKGNhY2hlKSB7XG4gICAgZ2V0Q2FjaGVJbmZvKGNhY2hlKS52YXJzLmZvckVhY2goZnVuY3Rpb24gKHJ2KSB7IHJldHVybiBydi5hdHRhY2hDYWNoZShjYWNoZSk7IH0pO1xufVxuZnVuY3Rpb24gbWFrZVZhcih2YWx1ZSkge1xuICAgIHZhciBjYWNoZXMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIGxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgcnYgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICBjYWNoZXMuZm9yRWFjaChmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0Q2FjaGVJbmZvKGNhY2hlKS5kZXAuZGlydHkocnYpO1xuICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3QoY2FjaGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBvbGRMaXN0ZW5lcnMgPSBBcnJheS5mcm9tKGxpc3RlbmVycyk7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBsaXN0ZW5lcih2YWx1ZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNhY2hlID0gY2FjaGVTbG90LmdldFZhbHVlKCk7XG4gICAgICAgICAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2goY2FjaGUpO1xuICAgICAgICAgICAgICAgIGdldENhY2hlSW5mbyhjYWNoZSkuZGVwKHJ2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBydi5vbk5leHRDaGFuZ2UgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBhdHRhY2ggPSBydi5hdHRhY2hDYWNoZSA9IGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICBjYWNoZXMuYWRkKGNhY2hlKTtcbiAgICAgICAgZ2V0Q2FjaGVJbmZvKGNhY2hlKS52YXJzLmFkZChydik7XG4gICAgICAgIHJldHVybiBydjtcbiAgICB9O1xuICAgIHJ2LmZvcmdldENhY2hlID0gZnVuY3Rpb24gKGNhY2hlKSB7IHJldHVybiBjYWNoZXMuZGVsZXRlKGNhY2hlKTsgfTtcbiAgICByZXR1cm4gcnY7XG59XG5mdW5jdGlvbiBicm9hZGNhc3QoY2FjaGUpIHtcbiAgICBpZiAoY2FjaGUuYnJvYWRjYXN0V2F0Y2hlcykge1xuICAgICAgICBjYWNoZS5icm9hZGNhc3RXYXRjaGVzKCk7XG4gICAgfVxufVxuXG52YXIgc3BlY2lmaWVySW5mb0NhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmZ1bmN0aW9uIGxvb2t1cFNwZWNpZmllckluZm8oc3BlYykge1xuICAgIHZhciBjYWNoZUtleSA9IEpTT04uc3RyaW5naWZ5KHNwZWMpO1xuICAgIHJldHVybiBzcGVjaWZpZXJJbmZvQ2FjaGVbY2FjaGVLZXldIHx8XG4gICAgICAgIChzcGVjaWZpZXJJbmZvQ2FjaGVbY2FjaGVLZXldID0gT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG5mdW5jdGlvbiBrZXlGaWVsZHNGbkZyb21TcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gICAgdmFyIGluZm8gPSBsb29rdXBTcGVjaWZpZXJJbmZvKHNwZWNpZmllcik7XG4gICAgcmV0dXJuIGluZm8ua2V5RmllbGRzRm4gfHwgKGluZm8ua2V5RmllbGRzRm4gPSBmdW5jdGlvbiAob2JqZWN0LCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBleHRyYWN0ID0gZnVuY3Rpb24gKGZyb20sIGtleSkgeyByZXR1cm4gY29udGV4dC5yZWFkRmllbGQoa2V5LCBmcm9tKTsgfTtcbiAgICAgICAgdmFyIGtleU9iamVjdCA9IGNvbnRleHQua2V5T2JqZWN0ID0gY29sbGVjdFNwZWNpZmllclBhdGhzKHNwZWNpZmllciwgZnVuY3Rpb24gKHNjaGVtYUtleVBhdGgpIHtcbiAgICAgICAgICAgIHZhciBleHRyYWN0ZWQgPSBleHRyYWN0S2V5UGF0aChjb250ZXh0LnN0b3JlT2JqZWN0LCBzY2hlbWFLZXlQYXRoLCBleHRyYWN0KTtcbiAgICAgICAgICAgIGlmIChleHRyYWN0ZWQgPT09IHZvaWQgMCAmJlxuICAgICAgICAgICAgICAgIG9iamVjdCAhPT0gY29udGV4dC5zdG9yZU9iamVjdCAmJlxuICAgICAgICAgICAgICAgIGhhc093bi5jYWxsKG9iamVjdCwgc2NoZW1hS2V5UGF0aFswXSkpIHtcbiAgICAgICAgICAgICAgICBleHRyYWN0ZWQgPSBleHRyYWN0S2V5UGF0aChvYmplY3QsIHNjaGVtYUtleVBhdGgsIGV4dHJhY3RLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGV4dHJhY3RlZCAhPT0gdm9pZCAwLCBcIk1pc3NpbmcgZmllbGQgJ1wiLmNvbmNhdChzY2hlbWFLZXlQYXRoLmpvaW4oJy4nKSwgXCInIHdoaWxlIGV4dHJhY3Rpbmcga2V5RmllbGRzIGZyb20gXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShvYmplY3QpKSkgOiBnbG9iYWxzLmludmFyaWFudChleHRyYWN0ZWQgIT09IHZvaWQgMCwgMik7XG4gICAgICAgICAgICByZXR1cm4gZXh0cmFjdGVkO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGNvbnRleHQudHlwZW5hbWUsIFwiOlwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoa2V5T2JqZWN0KSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBrZXlBcmdzRm5Gcm9tU3BlY2lmaWVyKHNwZWNpZmllcikge1xuICAgIHZhciBpbmZvID0gbG9va3VwU3BlY2lmaWVySW5mbyhzcGVjaWZpZXIpO1xuICAgIHJldHVybiBpbmZvLmtleUFyZ3NGbiB8fCAoaW5mby5rZXlBcmdzRm4gPSBmdW5jdGlvbiAoYXJncywgX2EpIHtcbiAgICAgICAgdmFyIGZpZWxkID0gX2EuZmllbGQsIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgZmllbGROYW1lID0gX2EuZmllbGROYW1lO1xuICAgICAgICB2YXIgY29sbGVjdGVkID0gY29sbGVjdFNwZWNpZmllclBhdGhzKHNwZWNpZmllciwgZnVuY3Rpb24gKGtleVBhdGgpIHtcbiAgICAgICAgICAgIHZhciBmaXJzdEtleSA9IGtleVBhdGhbMF07XG4gICAgICAgICAgICB2YXIgZmlyc3RDaGFyID0gZmlyc3RLZXkuY2hhckF0KDApO1xuICAgICAgICAgICAgaWYgKGZpcnN0Q2hhciA9PT0gXCJAXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQgJiYgdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShmaWVsZC5kaXJlY3RpdmVzKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aXZlTmFtZV8xID0gZmlyc3RLZXkuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gZmllbGQuZGlyZWN0aXZlcy5maW5kKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUudmFsdWUgPT09IGRpcmVjdGl2ZU5hbWVfMTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXJlY3RpdmVBcmdzID0gZCAmJiB1dGlsaXRpZXMuYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkKGQsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmVBcmdzICYmIGV4dHJhY3RLZXlQYXRoKGRpcmVjdGl2ZUFyZ3MsIGtleVBhdGguc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlyc3RDaGFyID09PSBcIiRcIikge1xuICAgICAgICAgICAgICAgIHZhciB2YXJpYWJsZU5hbWUgPSBmaXJzdEtleS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGVzICYmIGhhc093bi5jYWxsKHZhcmlhYmxlcywgdmFyaWFibGVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFyS2V5UGF0aCA9IGtleVBhdGguc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhcktleVBhdGhbMF0gPSB2YXJpYWJsZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleHRyYWN0S2V5UGF0aCh2YXJpYWJsZXMsIHZhcktleVBhdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJncykge1xuICAgICAgICAgICAgICAgIHJldHVybiBleHRyYWN0S2V5UGF0aChhcmdzLCBrZXlQYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzdWZmaXggPSBKU09OLnN0cmluZ2lmeShjb2xsZWN0ZWQpO1xuICAgICAgICBpZiAoYXJncyB8fCBzdWZmaXggIT09IFwie31cIikge1xuICAgICAgICAgICAgZmllbGROYW1lICs9IFwiOlwiICsgc3VmZml4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjb2xsZWN0U3BlY2lmaWVyUGF0aHMoc3BlY2lmaWVyLCBleHRyYWN0b3IpIHtcbiAgICB2YXIgbWVyZ2VyID0gbmV3IHV0aWxpdGllcy5EZWVwTWVyZ2VyO1xuICAgIHJldHVybiBnZXRTcGVjaWZpZXJQYXRocyhzcGVjaWZpZXIpLnJlZHVjZShmdW5jdGlvbiAoY29sbGVjdGVkLCBwYXRoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIHRvTWVyZ2UgPSBleHRyYWN0b3IocGF0aCk7XG4gICAgICAgIGlmICh0b01lcmdlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdG9NZXJnZSA9IChfYSA9IHt9LCBfYVtwYXRoW2ldXSA9IHRvTWVyZ2UsIF9hKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbGxlY3RlZCA9IG1lcmdlci5tZXJnZShjb2xsZWN0ZWQsIHRvTWVyZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsZWN0ZWQ7XG4gICAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG5mdW5jdGlvbiBnZXRTcGVjaWZpZXJQYXRocyhzcGVjKSB7XG4gICAgdmFyIGluZm8gPSBsb29rdXBTcGVjaWZpZXJJbmZvKHNwZWMpO1xuICAgIGlmICghaW5mby5wYXRocykge1xuICAgICAgICB2YXIgcGF0aHNfMSA9IGluZm8ucGF0aHMgPSBbXTtcbiAgICAgICAgdmFyIGN1cnJlbnRQYXRoXzEgPSBbXTtcbiAgICAgICAgc3BlYy5mb3JFYWNoKGZ1bmN0aW9uIChzLCBpKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzKSkge1xuICAgICAgICAgICAgICAgIGdldFNwZWNpZmllclBhdGhzKHMpLmZvckVhY2goZnVuY3Rpb24gKHApIHsgcmV0dXJuIHBhdGhzXzEucHVzaChjdXJyZW50UGF0aF8xLmNvbmNhdChwKSk7IH0pO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoXzEubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoXzEucHVzaChzKTtcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3BlY1tpICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhzXzEucHVzaChjdXJyZW50UGF0aF8xLnNsaWNlKDApKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhdGhfMS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBpbmZvLnBhdGhzO1xufVxuZnVuY3Rpb24gZXh0cmFjdEtleShvYmplY3QsIGtleSkge1xuICAgIHJldHVybiBvYmplY3Rba2V5XTtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RLZXlQYXRoKG9iamVjdCwgcGF0aCwgZXh0cmFjdCkge1xuICAgIGV4dHJhY3QgPSBleHRyYWN0IHx8IGV4dHJhY3RLZXk7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZShwYXRoLnJlZHVjZShmdW5jdGlvbiByZWR1Y2VyKG9iaiwga2V5KSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KG9iailcbiAgICAgICAgICAgID8gb2JqLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIHJlZHVjZXIoY2hpbGQsIGtleSk7IH0pXG4gICAgICAgICAgICA6IG9iaiAmJiBleHRyYWN0KG9iaiwga2V5KTtcbiAgICB9LCBvYmplY3QpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5tYXAobm9ybWFsaXplKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGVjdFNwZWNpZmllclBhdGhzKE9iamVjdC5rZXlzKHZhbHVlKS5zb3J0KCksIGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBleHRyYWN0S2V5UGF0aCh2YWx1ZSwgcGF0aCk7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbnV0aWxpdGllcy5nZXRTdG9yZUtleU5hbWUuc2V0U3RyaW5naWZ5KGNhbm9uaWNhbFN0cmluZ2lmeSk7XG5mdW5jdGlvbiBhcmdzRnJvbUZpZWxkU3BlY2lmaWVyKHNwZWMpIHtcbiAgICByZXR1cm4gc3BlYy5hcmdzICE9PSB2b2lkIDAgPyBzcGVjLmFyZ3MgOlxuICAgICAgICBzcGVjLmZpZWxkID8gdXRpbGl0aWVzLmFyZ3VtZW50c09iamVjdEZyb21GaWVsZChzcGVjLmZpZWxkLCBzcGVjLnZhcmlhYmxlcykgOiBudWxsO1xufVxudmFyIG51bGxLZXlGaWVsZHNGbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZvaWQgMDsgfTtcbnZhciBzaW1wbGVLZXlBcmdzRm4gPSBmdW5jdGlvbiAoX2FyZ3MsIGNvbnRleHQpIHsgcmV0dXJuIGNvbnRleHQuZmllbGROYW1lOyB9O1xudmFyIG1lcmdlVHJ1ZUZuID0gZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZywgX2EpIHtcbiAgICB2YXIgbWVyZ2VPYmplY3RzID0gX2EubWVyZ2VPYmplY3RzO1xuICAgIHJldHVybiBtZXJnZU9iamVjdHMoZXhpc3RpbmcsIGluY29taW5nKTtcbn07XG52YXIgbWVyZ2VGYWxzZUZuID0gZnVuY3Rpb24gKF8sIGluY29taW5nKSB7IHJldHVybiBpbmNvbWluZzsgfTtcbnZhciBQb2xpY2llcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9saWNpZXMoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnR5cGVQb2xpY2llcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMudG9CZUFkZGVkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5zdXBlcnR5cGVNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZnV6enlTdWJ0eXBlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yb290SWRzQnlUeXBlbmFtZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMucm9vdFR5cGVuYW1lc0J5SWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnVzaW5nUG9zc2libGVUeXBlcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRzbGliLl9fYXNzaWduKHsgZGF0YUlkRnJvbU9iamVjdDogZGVmYXVsdERhdGFJZEZyb21PYmplY3QgfSwgY29uZmlnKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHRoaXMuY29uZmlnLmNhY2hlO1xuICAgICAgICB0aGlzLnNldFJvb3RUeXBlbmFtZShcIlF1ZXJ5XCIpO1xuICAgICAgICB0aGlzLnNldFJvb3RUeXBlbmFtZShcIk11dGF0aW9uXCIpO1xuICAgICAgICB0aGlzLnNldFJvb3RUeXBlbmFtZShcIlN1YnNjcmlwdGlvblwiKTtcbiAgICAgICAgaWYgKGNvbmZpZy5wb3NzaWJsZVR5cGVzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFBvc3NpYmxlVHlwZXMoY29uZmlnLnBvc3NpYmxlVHlwZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcudHlwZVBvbGljaWVzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFR5cGVQb2xpY2llcyhjb25maWcudHlwZVBvbGljaWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2xpY2llcy5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbiAob2JqZWN0LCBwYXJ0aWFsQ29udGV4dCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBwb2xpY2llcyA9IHRoaXM7XG4gICAgICAgIHZhciB0eXBlbmFtZSA9IHBhcnRpYWxDb250ZXh0ICYmIChwYXJ0aWFsQ29udGV4dC50eXBlbmFtZSB8fFxuICAgICAgICAgICAgKChfYSA9IHBhcnRpYWxDb250ZXh0LnN0b3JlT2JqZWN0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuX190eXBlbmFtZSkpIHx8IG9iamVjdC5fX3R5cGVuYW1lO1xuICAgICAgICBpZiAodHlwZW5hbWUgPT09IHRoaXMucm9vdFR5cGVuYW1lc0J5SWQuUk9PVF9RVUVSWSkge1xuICAgICAgICAgICAgcmV0dXJuIFtcIlJPT1RfUVVFUllcIl07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0b3JlT2JqZWN0ID0gcGFydGlhbENvbnRleHQgJiYgcGFydGlhbENvbnRleHQuc3RvcmVPYmplY3QgfHwgb2JqZWN0O1xuICAgICAgICB2YXIgY29udGV4dCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBwYXJ0aWFsQ29udGV4dCksIHsgdHlwZW5hbWU6IHR5cGVuYW1lLCBzdG9yZU9iamVjdDogc3RvcmVPYmplY3QsIHJlYWRGaWVsZDogcGFydGlhbENvbnRleHQgJiYgcGFydGlhbENvbnRleHQucmVhZEZpZWxkIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IG5vcm1hbGl6ZVJlYWRGaWVsZE9wdGlvbnMoYXJndW1lbnRzLCBzdG9yZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvbGljaWVzLnJlYWRGaWVsZChvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlOiBwb2xpY2llcy5jYWNoZVtcImRhdGFcIl0sXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IH0pO1xuICAgICAgICB2YXIgaWQ7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0eXBlbmFtZSAmJiB0aGlzLmdldFR5cGVQb2xpY3kodHlwZW5hbWUpO1xuICAgICAgICB2YXIga2V5Rm4gPSBwb2xpY3kgJiYgcG9saWN5LmtleUZuIHx8IHRoaXMuY29uZmlnLmRhdGFJZEZyb21PYmplY3Q7XG4gICAgICAgIHdoaWxlIChrZXlGbikge1xuICAgICAgICAgICAgdmFyIHNwZWNpZmllck9ySWQgPSBrZXlGbihvYmplY3QsIGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3BlY2lmaWVyT3JJZCkpIHtcbiAgICAgICAgICAgICAgICBrZXlGbiA9IGtleUZpZWxkc0ZuRnJvbVNwZWNpZmllcihzcGVjaWZpZXJPcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlkID0gc3BlY2lmaWVyT3JJZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZCA9IGlkID8gU3RyaW5nKGlkKSA6IHZvaWQgMDtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQua2V5T2JqZWN0ID8gW2lkLCBjb250ZXh0LmtleU9iamVjdF0gOiBbaWRdO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmFkZFR5cGVQb2xpY2llcyA9IGZ1bmN0aW9uICh0eXBlUG9saWNpZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgT2JqZWN0LmtleXModHlwZVBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlbmFtZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gdHlwZVBvbGljaWVzW3R5cGVuYW1lXSwgcXVlcnlUeXBlID0gX2EucXVlcnlUeXBlLCBtdXRhdGlvblR5cGUgPSBfYS5tdXRhdGlvblR5cGUsIHN1YnNjcmlwdGlvblR5cGUgPSBfYS5zdWJzY3JpcHRpb25UeXBlLCBpbmNvbWluZyA9IHRzbGliLl9fcmVzdChfYSwgW1wicXVlcnlUeXBlXCIsIFwibXV0YXRpb25UeXBlXCIsIFwic3Vic2NyaXB0aW9uVHlwZVwiXSk7XG4gICAgICAgICAgICBpZiAocXVlcnlUeXBlKVxuICAgICAgICAgICAgICAgIF90aGlzLnNldFJvb3RUeXBlbmFtZShcIlF1ZXJ5XCIsIHR5cGVuYW1lKTtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvblR5cGUpXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0Um9vdFR5cGVuYW1lKFwiTXV0YXRpb25cIiwgdHlwZW5hbWUpO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvblR5cGUpXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0Um9vdFR5cGVuYW1lKFwiU3Vic2NyaXB0aW9uXCIsIHR5cGVuYW1lKTtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChfdGhpcy50b0JlQWRkZWQsIHR5cGVuYW1lKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRvQmVBZGRlZFt0eXBlbmFtZV0ucHVzaChpbmNvbWluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50b0JlQWRkZWRbdHlwZW5hbWVdID0gW2luY29taW5nXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUudXBkYXRlVHlwZVBvbGljeSA9IGZ1bmN0aW9uICh0eXBlbmFtZSwgaW5jb21pbmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gdGhpcy5nZXRUeXBlUG9saWN5KHR5cGVuYW1lKTtcbiAgICAgICAgdmFyIGtleUZpZWxkcyA9IGluY29taW5nLmtleUZpZWxkcywgZmllbGRzID0gaW5jb21pbmcuZmllbGRzO1xuICAgICAgICBmdW5jdGlvbiBzZXRNZXJnZShleGlzdGluZywgbWVyZ2UpIHtcbiAgICAgICAgICAgIGV4aXN0aW5nLm1lcmdlID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgbWVyZ2UgPT09IFwiZnVuY3Rpb25cIiA/IG1lcmdlIDpcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2UgPT09IHRydWUgPyBtZXJnZVRydWVGbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZSA9PT0gZmFsc2UgPyBtZXJnZUZhbHNlRm4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLm1lcmdlO1xuICAgICAgICB9XG4gICAgICAgIHNldE1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZy5tZXJnZSk7XG4gICAgICAgIGV4aXN0aW5nLmtleUZuID1cbiAgICAgICAgICAgIGtleUZpZWxkcyA9PT0gZmFsc2UgPyBudWxsS2V5RmllbGRzRm4gOlxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoa2V5RmllbGRzKSA/IGtleUZpZWxkc0ZuRnJvbVNwZWNpZmllcihrZXlGaWVsZHMpIDpcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGtleUZpZWxkcyA9PT0gXCJmdW5jdGlvblwiID8ga2V5RmllbGRzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmtleUZuO1xuICAgICAgICBpZiAoZmllbGRzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBleGlzdGluZyA9IF90aGlzLmdldEZpZWxkUG9saWN5KHR5cGVuYW1lLCBmaWVsZE5hbWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciBpbmNvbWluZyA9IGZpZWxkc1tmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5jb21pbmcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5yZWFkID0gaW5jb21pbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5QXJncyA9IGluY29taW5nLmtleUFyZ3MsIHJlYWQgPSBpbmNvbWluZy5yZWFkLCBtZXJnZSA9IGluY29taW5nLm1lcmdlO1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5rZXlGbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlBcmdzID09PSBmYWxzZSA/IHNpbXBsZUtleUFyZ3NGbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShrZXlBcmdzKSA/IGtleUFyZ3NGbkZyb21TcGVjaWZpZXIoa2V5QXJncykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2Yga2V5QXJncyA9PT0gXCJmdW5jdGlvblwiID8ga2V5QXJncyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5rZXlGbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWFkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnJlYWQgPSByZWFkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldE1lcmdlKGV4aXN0aW5nLCBtZXJnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZy5yZWFkICYmIGV4aXN0aW5nLm1lcmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmtleUZuID0gZXhpc3Rpbmcua2V5Rm4gfHwgc2ltcGxlS2V5QXJnc0ZuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuc2V0Um9vdFR5cGVuYW1lID0gZnVuY3Rpb24gKHdoaWNoLCB0eXBlbmFtZSkge1xuICAgICAgICBpZiAodHlwZW5hbWUgPT09IHZvaWQgMCkgeyB0eXBlbmFtZSA9IHdoaWNoOyB9XG4gICAgICAgIHZhciByb290SWQgPSBcIlJPT1RfXCIgKyB3aGljaC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB2YXIgb2xkID0gdGhpcy5yb290VHlwZW5hbWVzQnlJZFtyb290SWRdO1xuICAgICAgICBpZiAodHlwZW5hbWUgIT09IG9sZCkge1xuICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KCFvbGQgfHwgb2xkID09PSB3aGljaCwgXCJDYW5ub3QgY2hhbmdlIHJvb3QgXCIuY29uY2F0KHdoaWNoLCBcIiBfX3R5cGVuYW1lIG1vcmUgdGhhbiBvbmNlXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KCFvbGQgfHwgb2xkID09PSB3aGljaCwgMyk7XG4gICAgICAgICAgICBpZiAob2xkKVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvb3RJZHNCeVR5cGVuYW1lW29sZF07XG4gICAgICAgICAgICB0aGlzLnJvb3RJZHNCeVR5cGVuYW1lW3R5cGVuYW1lXSA9IHJvb3RJZDtcbiAgICAgICAgICAgIHRoaXMucm9vdFR5cGVuYW1lc0J5SWRbcm9vdElkXSA9IHR5cGVuYW1lO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuYWRkUG9zc2libGVUeXBlcyA9IGZ1bmN0aW9uIChwb3NzaWJsZVR5cGVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudXNpbmdQb3NzaWJsZVR5cGVzID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmtleXMocG9zc2libGVUeXBlcykuZm9yRWFjaChmdW5jdGlvbiAoc3VwZXJ0eXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5nZXRTdXBlcnR5cGVTZXQoc3VwZXJ0eXBlLCB0cnVlKTtcbiAgICAgICAgICAgIHBvc3NpYmxlVHlwZXNbc3VwZXJ0eXBlXS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJ0eXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZ2V0U3VwZXJ0eXBlU2V0KHN1YnR5cGUsIHRydWUpLmFkZChzdXBlcnR5cGUpO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IHN1YnR5cGUubWF0Y2goVHlwZU9yRmllbGROYW1lUmVnRXhwKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1hdGNoIHx8IG1hdGNoWzBdICE9PSBzdWJ0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmZ1enp5U3VidHlwZXMuc2V0KHN1YnR5cGUsIG5ldyBSZWdFeHAoc3VidHlwZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRUeXBlUG9saWN5ID0gZnVuY3Rpb24gKHR5cGVuYW1lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghaGFzT3duLmNhbGwodGhpcy50eXBlUG9saWNpZXMsIHR5cGVuYW1lKSkge1xuICAgICAgICAgICAgdmFyIHBvbGljeV8xID0gdGhpcy50eXBlUG9saWNpZXNbdHlwZW5hbWVdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHBvbGljeV8xLmZpZWxkcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICB2YXIgc3VwZXJ0eXBlcyA9IHRoaXMuc3VwZXJ0eXBlTWFwLmdldCh0eXBlbmFtZSk7XG4gICAgICAgICAgICBpZiAoc3VwZXJ0eXBlcyAmJiBzdXBlcnR5cGVzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBzdXBlcnR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHN1cGVydHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5nZXRUeXBlUG9saWN5KHN1cGVydHlwZSksIGZpZWxkcyA9IF9hLmZpZWxkcywgcmVzdCA9IHRzbGliLl9fcmVzdChfYSwgW1wiZmllbGRzXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihwb2xpY3lfMSwgcmVzdCk7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocG9saWN5XzEuZmllbGRzLCBmaWVsZHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBpbmJveCA9IHRoaXMudG9CZUFkZGVkW3R5cGVuYW1lXTtcbiAgICAgICAgaWYgKGluYm94ICYmIGluYm94Lmxlbmd0aCkge1xuICAgICAgICAgICAgaW5ib3guc3BsaWNlKDApLmZvckVhY2goZnVuY3Rpb24gKHBvbGljeSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVR5cGVQb2xpY3kodHlwZW5hbWUsIHBvbGljeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50eXBlUG9saWNpZXNbdHlwZW5hbWVdO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldEZpZWxkUG9saWN5ID0gZnVuY3Rpb24gKHR5cGVuYW1lLCBmaWVsZE5hbWUsIGNyZWF0ZUlmTWlzc2luZykge1xuICAgICAgICBpZiAodHlwZW5hbWUpIHtcbiAgICAgICAgICAgIHZhciBmaWVsZFBvbGljaWVzID0gdGhpcy5nZXRUeXBlUG9saWN5KHR5cGVuYW1lKS5maWVsZHM7XG4gICAgICAgICAgICByZXR1cm4gZmllbGRQb2xpY2llc1tmaWVsZE5hbWVdIHx8IChjcmVhdGVJZk1pc3NpbmcgJiYgKGZpZWxkUG9saWNpZXNbZmllbGROYW1lXSA9IE9iamVjdC5jcmVhdGUobnVsbCkpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldFN1cGVydHlwZVNldCA9IGZ1bmN0aW9uIChzdWJ0eXBlLCBjcmVhdGVJZk1pc3NpbmcpIHtcbiAgICAgICAgdmFyIHN1cGVydHlwZVNldCA9IHRoaXMuc3VwZXJ0eXBlTWFwLmdldChzdWJ0eXBlKTtcbiAgICAgICAgaWYgKCFzdXBlcnR5cGVTZXQgJiYgY3JlYXRlSWZNaXNzaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN1cGVydHlwZU1hcC5zZXQoc3VidHlwZSwgc3VwZXJ0eXBlU2V0ID0gbmV3IFNldCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXJ0eXBlU2V0O1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmZyYWdtZW50TWF0Y2hlcyA9IGZ1bmN0aW9uIChmcmFnbWVudCwgdHlwZW5hbWUsIHJlc3VsdCwgdmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghZnJhZ21lbnQudHlwZUNvbmRpdGlvbilcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoIXR5cGVuYW1lKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgc3VwZXJ0eXBlID0gZnJhZ21lbnQudHlwZUNvbmRpdGlvbi5uYW1lLnZhbHVlO1xuICAgICAgICBpZiAodHlwZW5hbWUgPT09IHN1cGVydHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy51c2luZ1Bvc3NpYmxlVHlwZXMgJiZcbiAgICAgICAgICAgIHRoaXMuc3VwZXJ0eXBlTWFwLmhhcyhzdXBlcnR5cGUpKSB7XG4gICAgICAgICAgICB2YXIgdHlwZW5hbWVTdXBlcnR5cGVTZXQgPSB0aGlzLmdldFN1cGVydHlwZVNldCh0eXBlbmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgd29ya1F1ZXVlXzEgPSBbdHlwZW5hbWVTdXBlcnR5cGVTZXRdO1xuICAgICAgICAgICAgdmFyIG1heWJlRW5xdWV1ZV8xID0gZnVuY3Rpb24gKHN1YnR5cGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VwZXJ0eXBlU2V0ID0gX3RoaXMuZ2V0U3VwZXJ0eXBlU2V0KHN1YnR5cGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VwZXJ0eXBlU2V0ICYmXG4gICAgICAgICAgICAgICAgICAgIHN1cGVydHlwZVNldC5zaXplICYmXG4gICAgICAgICAgICAgICAgICAgIHdvcmtRdWV1ZV8xLmluZGV4T2Yoc3VwZXJ0eXBlU2V0KSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgd29ya1F1ZXVlXzEucHVzaChzdXBlcnR5cGVTZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgbmVlZFRvQ2hlY2tGdXp6eVN1YnR5cGVzID0gISEocmVzdWx0ICYmIHRoaXMuZnV6enlTdWJ0eXBlcy5zaXplKTtcbiAgICAgICAgICAgIHZhciBjaGVja2luZ0Z1enp5U3VidHlwZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd29ya1F1ZXVlXzEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VwZXJ0eXBlU2V0ID0gd29ya1F1ZXVlXzFbaV07XG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydHlwZVNldC5oYXMoc3VwZXJ0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXR5cGVuYW1lU3VwZXJ0eXBlU2V0LmhhcyhzdXBlcnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tpbmdGdXp6eVN1YnR5cGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiSW5mZXJyaW5nIHN1YnR5cGUgXCIuY29uY2F0KHR5cGVuYW1lLCBcIiBvZiBzdXBlcnR5cGUgXCIpLmNvbmNhdChzdXBlcnR5cGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVuYW1lU3VwZXJ0eXBlU2V0LmFkZChzdXBlcnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdXBlcnR5cGVTZXQuZm9yRWFjaChtYXliZUVucXVldWVfMSk7XG4gICAgICAgICAgICAgICAgaWYgKG5lZWRUb0NoZWNrRnV6enlTdWJ0eXBlcyAmJlxuICAgICAgICAgICAgICAgICAgICBpID09PSB3b3JrUXVldWVfMS5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldE1hdGNoZXNSZXN1bHQoZnJhZ21lbnQuc2VsZWN0aW9uU2V0LCByZXN1bHQsIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgbmVlZFRvQ2hlY2tGdXp6eVN1YnR5cGVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNraW5nRnV6enlTdWJ0eXBlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnV6enlTdWJ0eXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWdFeHAsIGZ1enp5U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSB0eXBlbmFtZS5tYXRjaChyZWdFeHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzBdID09PSB0eXBlbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlRW5xdWV1ZV8xKGZ1enp5U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5oYXNLZXlBcmdzID0gZnVuY3Rpb24gKHR5cGVuYW1lLCBmaWVsZE5hbWUpIHtcbiAgICAgICAgdmFyIHBvbGljeSA9IHRoaXMuZ2V0RmllbGRQb2xpY3kodHlwZW5hbWUsIGZpZWxkTmFtZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gISEocG9saWN5ICYmIHBvbGljeS5rZXlGbik7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZ2V0U3RvcmVGaWVsZE5hbWUgPSBmdW5jdGlvbiAoZmllbGRTcGVjKSB7XG4gICAgICAgIHZhciB0eXBlbmFtZSA9IGZpZWxkU3BlYy50eXBlbmFtZSwgZmllbGROYW1lID0gZmllbGRTcGVjLmZpZWxkTmFtZTtcbiAgICAgICAgdmFyIHBvbGljeSA9IHRoaXMuZ2V0RmllbGRQb2xpY3kodHlwZW5hbWUsIGZpZWxkTmFtZSwgZmFsc2UpO1xuICAgICAgICB2YXIgc3RvcmVGaWVsZE5hbWU7XG4gICAgICAgIHZhciBrZXlGbiA9IHBvbGljeSAmJiBwb2xpY3kua2V5Rm47XG4gICAgICAgIGlmIChrZXlGbiAmJiB0eXBlbmFtZSkge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZW5hbWU6IHR5cGVuYW1lLFxuICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lLFxuICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZFNwZWMuZmllbGQgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGZpZWxkU3BlYy52YXJpYWJsZXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmdzRnJvbUZpZWxkU3BlY2lmaWVyKGZpZWxkU3BlYyk7XG4gICAgICAgICAgICB3aGlsZSAoa2V5Rm4pIHtcbiAgICAgICAgICAgICAgICB2YXIgc3BlY2lmaWVyT3JTdHJpbmcgPSBrZXlGbihhcmdzLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcGVjaWZpZXJPclN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5Rm4gPSBrZXlBcmdzRm5Gcm9tU3BlY2lmaWVyKHNwZWNpZmllck9yU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlRmllbGROYW1lID0gc3BlY2lmaWVyT3JTdHJpbmcgfHwgZmllbGROYW1lO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0b3JlRmllbGROYW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHN0b3JlRmllbGROYW1lID0gZmllbGRTcGVjLmZpZWxkXG4gICAgICAgICAgICAgICAgPyB1dGlsaXRpZXMuc3RvcmVLZXlOYW1lRnJvbUZpZWxkKGZpZWxkU3BlYy5maWVsZCwgZmllbGRTcGVjLnZhcmlhYmxlcylcbiAgICAgICAgICAgICAgICA6IHV0aWxpdGllcy5nZXRTdG9yZUtleU5hbWUoZmllbGROYW1lLCBhcmdzRnJvbUZpZWxkU3BlY2lmaWVyKGZpZWxkU3BlYykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdG9yZUZpZWxkTmFtZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkTmFtZSA9PT0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSlcbiAgICAgICAgICAgID8gc3RvcmVGaWVsZE5hbWVcbiAgICAgICAgICAgIDogZmllbGROYW1lICsgXCI6XCIgKyBzdG9yZUZpZWxkTmFtZTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5yZWFkRmllbGQgPSBmdW5jdGlvbiAob3B0aW9ucywgY29udGV4dCkge1xuICAgICAgICB2YXIgb2JqZWN0T3JSZWZlcmVuY2UgPSBvcHRpb25zLmZyb207XG4gICAgICAgIGlmICghb2JqZWN0T3JSZWZlcmVuY2UpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBuYW1lT3JGaWVsZCA9IG9wdGlvbnMuZmllbGQgfHwgb3B0aW9ucy5maWVsZE5hbWU7XG4gICAgICAgIGlmICghbmFtZU9yRmllbGQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChvcHRpb25zLnR5cGVuYW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHZhciB0eXBlbmFtZSA9IGNvbnRleHQuc3RvcmUuZ2V0RmllbGRWYWx1ZShvYmplY3RPclJlZmVyZW5jZSwgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGVuYW1lKVxuICAgICAgICAgICAgICAgIG9wdGlvbnMudHlwZW5hbWUgPSB0eXBlbmFtZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RvcmVGaWVsZE5hbWUgPSB0aGlzLmdldFN0b3JlRmllbGROYW1lKG9wdGlvbnMpO1xuICAgICAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgIHZhciBleGlzdGluZyA9IGNvbnRleHQuc3RvcmUuZ2V0RmllbGRWYWx1ZShvYmplY3RPclJlZmVyZW5jZSwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICB2YXIgcG9saWN5ID0gdGhpcy5nZXRGaWVsZFBvbGljeShvcHRpb25zLnR5cGVuYW1lLCBmaWVsZE5hbWUsIGZhbHNlKTtcbiAgICAgICAgdmFyIHJlYWQgPSBwb2xpY3kgJiYgcG9saWN5LnJlYWQ7XG4gICAgICAgIGlmIChyZWFkKSB7XG4gICAgICAgICAgICB2YXIgcmVhZE9wdGlvbnMgPSBtYWtlRmllbGRGdW5jdGlvbk9wdGlvbnModGhpcywgb2JqZWN0T3JSZWZlcmVuY2UsIG9wdGlvbnMsIGNvbnRleHQsIGNvbnRleHQuc3RvcmUuZ2V0U3RvcmFnZSh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqZWN0T3JSZWZlcmVuY2UpXG4gICAgICAgICAgICAgICAgPyBvYmplY3RPclJlZmVyZW5jZS5fX3JlZlxuICAgICAgICAgICAgICAgIDogb2JqZWN0T3JSZWZlcmVuY2UsIHN0b3JlRmllbGROYW1lKSk7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVTbG90LndpdGhWYWx1ZSh0aGlzLmNhY2hlLCByZWFkLCBbZXhpc3RpbmcsIHJlYWRPcHRpb25zXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldFJlYWRGdW5jdGlvbiA9IGZ1bmN0aW9uICh0eXBlbmFtZSwgZmllbGROYW1lKSB7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0aGlzLmdldEZpZWxkUG9saWN5KHR5cGVuYW1lLCBmaWVsZE5hbWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHBvbGljeSAmJiBwb2xpY3kucmVhZDtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRNZXJnZUZ1bmN0aW9uID0gZnVuY3Rpb24gKHBhcmVudFR5cGVuYW1lLCBmaWVsZE5hbWUsIGNoaWxkVHlwZW5hbWUpIHtcbiAgICAgICAgdmFyIHBvbGljeSA9IHRoaXMuZ2V0RmllbGRQb2xpY3kocGFyZW50VHlwZW5hbWUsIGZpZWxkTmFtZSwgZmFsc2UpO1xuICAgICAgICB2YXIgbWVyZ2UgPSBwb2xpY3kgJiYgcG9saWN5Lm1lcmdlO1xuICAgICAgICBpZiAoIW1lcmdlICYmIGNoaWxkVHlwZW5hbWUpIHtcbiAgICAgICAgICAgIHBvbGljeSA9IHRoaXMuZ2V0VHlwZVBvbGljeShjaGlsZFR5cGVuYW1lKTtcbiAgICAgICAgICAgIG1lcmdlID0gcG9saWN5ICYmIHBvbGljeS5tZXJnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVyZ2U7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUucnVuTWVyZ2VGdW5jdGlvbiA9IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcsIF9hLCBjb250ZXh0LCBzdG9yYWdlKSB7XG4gICAgICAgIHZhciBmaWVsZCA9IF9hLmZpZWxkLCB0eXBlbmFtZSA9IF9hLnR5cGVuYW1lLCBtZXJnZSA9IF9hLm1lcmdlO1xuICAgICAgICBpZiAobWVyZ2UgPT09IG1lcmdlVHJ1ZUZuKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZU1lcmdlT2JqZWN0c0Z1bmN0aW9uKGNvbnRleHQuc3RvcmUpKGV4aXN0aW5nLCBpbmNvbWluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lcmdlID09PSBtZXJnZUZhbHNlRm4pIHtcbiAgICAgICAgICAgIHJldHVybiBpbmNvbWluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGV4dC5vdmVyd3JpdGUpIHtcbiAgICAgICAgICAgIGV4aXN0aW5nID0gdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXJnZShleGlzdGluZywgaW5jb21pbmcsIG1ha2VGaWVsZEZ1bmN0aW9uT3B0aW9ucyh0aGlzLCB2b2lkIDAsIHsgdHlwZW5hbWU6IHR5cGVuYW1lLCBmaWVsZE5hbWU6IGZpZWxkLm5hbWUudmFsdWUsIGZpZWxkOiBmaWVsZCwgdmFyaWFibGVzOiBjb250ZXh0LnZhcmlhYmxlcyB9LCBjb250ZXh0LCBzdG9yYWdlIHx8IE9iamVjdC5jcmVhdGUobnVsbCkpKTtcbiAgICB9O1xuICAgIHJldHVybiBQb2xpY2llcztcbn0oKSk7XG5mdW5jdGlvbiBtYWtlRmllbGRGdW5jdGlvbk9wdGlvbnMocG9saWNpZXMsIG9iamVjdE9yUmVmZXJlbmNlLCBmaWVsZFNwZWMsIGNvbnRleHQsIHN0b3JhZ2UpIHtcbiAgICB2YXIgc3RvcmVGaWVsZE5hbWUgPSBwb2xpY2llcy5nZXRTdG9yZUZpZWxkTmFtZShmaWVsZFNwZWMpO1xuICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICB2YXIgdmFyaWFibGVzID0gZmllbGRTcGVjLnZhcmlhYmxlcyB8fCBjb250ZXh0LnZhcmlhYmxlcztcbiAgICB2YXIgX2EgPSBjb250ZXh0LnN0b3JlLCB0b1JlZmVyZW5jZSA9IF9hLnRvUmVmZXJlbmNlLCBjYW5SZWFkID0gX2EuY2FuUmVhZDtcbiAgICByZXR1cm4ge1xuICAgICAgICBhcmdzOiBhcmdzRnJvbUZpZWxkU3BlY2lmaWVyKGZpZWxkU3BlYyksXG4gICAgICAgIGZpZWxkOiBmaWVsZFNwZWMuZmllbGQgfHwgbnVsbCxcbiAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWUsXG4gICAgICAgIHN0b3JlRmllbGROYW1lOiBzdG9yZUZpZWxkTmFtZSxcbiAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgIGlzUmVmZXJlbmNlOiB1dGlsaXRpZXMuaXNSZWZlcmVuY2UsXG4gICAgICAgIHRvUmVmZXJlbmNlOiB0b1JlZmVyZW5jZSxcbiAgICAgICAgc3RvcmFnZTogc3RvcmFnZSxcbiAgICAgICAgY2FjaGU6IHBvbGljaWVzLmNhY2hlLFxuICAgICAgICBjYW5SZWFkOiBjYW5SZWFkLFxuICAgICAgICByZWFkRmllbGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2xpY2llcy5yZWFkRmllbGQobm9ybWFsaXplUmVhZEZpZWxkT3B0aW9ucyhhcmd1bWVudHMsIG9iamVjdE9yUmVmZXJlbmNlLCBjb250ZXh0KSwgY29udGV4dCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlT2JqZWN0czogbWFrZU1lcmdlT2JqZWN0c0Z1bmN0aW9uKGNvbnRleHQuc3RvcmUpLFxuICAgIH07XG59XG5mdW5jdGlvbiBub3JtYWxpemVSZWFkRmllbGRPcHRpb25zKHJlYWRGaWVsZEFyZ3MsIG9iamVjdE9yUmVmZXJlbmNlLCB2YXJpYWJsZXMpIHtcbiAgICB2YXIgZmllbGROYW1lT3JPcHRpb25zID0gcmVhZEZpZWxkQXJnc1swXSwgZnJvbSA9IHJlYWRGaWVsZEFyZ3NbMV0sIGFyZ2MgPSByZWFkRmllbGRBcmdzLmxlbmd0aDtcbiAgICB2YXIgb3B0aW9ucztcbiAgICBpZiAodHlwZW9mIGZpZWxkTmFtZU9yT3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWVPck9wdGlvbnMsXG4gICAgICAgICAgICBmcm9tOiBhcmdjID4gMSA/IGZyb20gOiBvYmplY3RPclJlZmVyZW5jZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih7fSwgZmllbGROYW1lT3JPcHRpb25zKTtcbiAgICAgICAgaWYgKCFoYXNPd24uY2FsbChvcHRpb25zLCBcImZyb21cIikpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZnJvbSA9IG9iamVjdE9yUmVmZXJlbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChfX0RFVl9fICYmIG9wdGlvbnMuZnJvbSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIlVuZGVmaW5lZCAnZnJvbScgcGFzc2VkIHRvIHJlYWRGaWVsZCB3aXRoIGFyZ3VtZW50cyBcIi5jb25jYXQodXRpbGl0aWVzLnN0cmluZ2lmeUZvckRpc3BsYXkoQXJyYXkuZnJvbShyZWFkRmllbGRBcmdzKSkpKTtcbiAgICB9XG4gICAgaWYgKHZvaWQgMCA9PT0gb3B0aW9ucy52YXJpYWJsZXMpIHtcbiAgICAgICAgb3B0aW9ucy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xufVxuZnVuY3Rpb24gbWFrZU1lcmdlT2JqZWN0c0Z1bmN0aW9uKHN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhleGlzdGluZywgaW5jb21pbmcpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpIHx8IEFycmF5LmlzQXJyYXkoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJDYW5ub3QgYXV0b21hdGljYWxseSBtZXJnZSBhcnJheXNcIikgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdChleGlzdGluZykgJiZcbiAgICAgICAgICAgIHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICB2YXIgZVR5cGUgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKGV4aXN0aW5nLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgICAgICB2YXIgaVR5cGUgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKGluY29taW5nLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgICAgICB2YXIgdHlwZXNEaWZmZXIgPSBlVHlwZSAmJiBpVHlwZSAmJiBlVHlwZSAhPT0gaVR5cGU7XG4gICAgICAgICAgICBpZiAodHlwZXNEaWZmZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKGV4aXN0aW5nKSAmJlxuICAgICAgICAgICAgICAgIHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGluY29taW5nKSkge1xuICAgICAgICAgICAgICAgIHN0b3JlLm1lcmdlKGV4aXN0aW5nLl9fcmVmLCBpbmNvbWluZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGV4aXN0aW5nKSAmJlxuICAgICAgICAgICAgICAgIHV0aWxpdGllcy5pc1JlZmVyZW5jZShpbmNvbWluZykpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5tZXJnZShleGlzdGluZywgaW5jb21pbmcuX19yZWYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmNvbWluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdG9yZVZhbHVlSXNTdG9yZU9iamVjdChleGlzdGluZykgJiZcbiAgICAgICAgICAgICAgICBzdG9yZVZhbHVlSXNTdG9yZU9iamVjdChpbmNvbWluZykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGV4aXN0aW5nKSwgaW5jb21pbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmNvbWluZztcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0Rmxhdm9yKGNvbnRleHQsIGNsaWVudE9ubHksIGRlZmVycmVkKSB7XG4gICAgdmFyIGtleSA9IFwiXCIuY29uY2F0KGNsaWVudE9ubHkpLmNvbmNhdChkZWZlcnJlZCk7XG4gICAgdmFyIGZsYXZvcmVkID0gY29udGV4dC5mbGF2b3JzLmdldChrZXkpO1xuICAgIGlmICghZmxhdm9yZWQpIHtcbiAgICAgICAgY29udGV4dC5mbGF2b3JzLnNldChrZXksIGZsYXZvcmVkID0gKGNvbnRleHQuY2xpZW50T25seSA9PT0gY2xpZW50T25seSAmJlxuICAgICAgICAgICAgY29udGV4dC5kZWZlcnJlZCA9PT0gZGVmZXJyZWQpID8gY29udGV4dCA6IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyBjbGllbnRPbmx5OiBjbGllbnRPbmx5LCBkZWZlcnJlZDogZGVmZXJyZWQgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmxhdm9yZWQ7XG59XG52YXIgU3RvcmVXcml0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0b3JlV3JpdGVyKGNhY2hlLCByZWFkZXIpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgICAgICB0aGlzLnJlYWRlciA9IHJlYWRlcjtcbiAgICB9XG4gICAgU3RvcmVXcml0ZXIucHJvdG90eXBlLndyaXRlVG9TdG9yZSA9IGZ1bmN0aW9uIChzdG9yZSwgX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHF1ZXJ5ID0gX2EucXVlcnksIHJlc3VsdCA9IF9hLnJlc3VsdCwgZGF0YUlkID0gX2EuZGF0YUlkLCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIG92ZXJ3cml0ZSA9IF9hLm92ZXJ3cml0ZTtcbiAgICAgICAgdmFyIG9wZXJhdGlvbkRlZmluaXRpb24gPSB1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgIHZhciBtZXJnZXIgPSBtYWtlUHJvY2Vzc2VkRmllbGRzTWVyZ2VyKCk7XG4gICAgICAgIHZhcmlhYmxlcyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB1dGlsaXRpZXMuZ2V0RGVmYXVsdFZhbHVlcyhvcGVyYXRpb25EZWZpbml0aW9uKSksIHZhcmlhYmxlcyk7XG4gICAgICAgIHZhciBjb250ZXh0ID0ge1xuICAgICAgICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgICAgICAgd3JpdHRlbjogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIG1lcmdlOiBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlci5tZXJnZShleGlzdGluZywgaW5jb21pbmcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgdmFyU3RyaW5nOiBjYW5vbmljYWxTdHJpbmdpZnkodmFyaWFibGVzKSxcbiAgICAgICAgICAgIGZyYWdtZW50TWFwOiB1dGlsaXRpZXMuY3JlYXRlRnJhZ21lbnRNYXAodXRpbGl0aWVzLmdldEZyYWdtZW50RGVmaW5pdGlvbnMocXVlcnkpKSxcbiAgICAgICAgICAgIG92ZXJ3cml0ZTogISFvdmVyd3JpdGUsXG4gICAgICAgICAgICBpbmNvbWluZ0J5SWQ6IG5ldyBNYXAsXG4gICAgICAgICAgICBjbGllbnRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmVycmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGZsYXZvcnM6IG5ldyBNYXAsXG4gICAgICAgIH07XG4gICAgICAgIHZhciByZWYgPSB0aGlzLnByb2Nlc3NTZWxlY3Rpb25TZXQoe1xuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQgfHwgT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGRhdGFJZDogZGF0YUlkLFxuICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiBvcGVyYXRpb25EZWZpbml0aW9uLnNlbGVjdGlvblNldCxcbiAgICAgICAgICAgIG1lcmdlVHJlZTogeyBtYXA6IG5ldyBNYXAgfSxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXV0aWxpdGllcy5pc1JlZmVyZW5jZShyZWYpKSB7XG4gICAgICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJDb3VsZCBub3QgaWRlbnRpZnkgb2JqZWN0IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShyZXN1bHQpKSkgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig2KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmluY29taW5nQnlJZC5mb3JFYWNoKGZ1bmN0aW9uIChfYSwgZGF0YUlkKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmVPYmplY3QgPSBfYS5zdG9yZU9iamVjdCwgbWVyZ2VUcmVlID0gX2EubWVyZ2VUcmVlLCBmaWVsZE5vZGVTZXQgPSBfYS5maWVsZE5vZGVTZXQ7XG4gICAgICAgICAgICB2YXIgZW50aXR5UmVmID0gdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2UoZGF0YUlkKTtcbiAgICAgICAgICAgIGlmIChtZXJnZVRyZWUgJiYgbWVyZ2VUcmVlLm1hcC5zaXplKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFwcGxpZWQgPSBfdGhpcy5hcHBseU1lcmdlcyhtZXJnZVRyZWUsIGVudGl0eVJlZiwgc3RvcmVPYmplY3QsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2UoYXBwbGllZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdG9yZU9iamVjdCA9IGFwcGxpZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX19ERVZfXyAmJiAhY29udGV4dC5vdmVyd3JpdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGRzV2l0aFNlbGVjdGlvblNldHNfMSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICAgICAgZmllbGROb2RlU2V0LmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc1dpdGhTZWxlY3Rpb25TZXRzXzFbZmllbGQubmFtZS52YWx1ZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGhhc1NlbGVjdGlvblNldF8xID0gZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZHNXaXRoU2VsZWN0aW9uU2V0c18xW2ZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpXSA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBoYXNNZXJnZUZ1bmN0aW9uXzEgPSBmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkVHJlZSA9IG1lcmdlVHJlZSAmJiBtZXJnZVRyZWUubWFwLmdldChzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBCb29sZWFuKGNoaWxkVHJlZSAmJiBjaGlsZFRyZWUuaW5mbyAmJiBjaGlsZFRyZWUuaW5mby5tZXJnZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yZU9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1NlbGVjdGlvblNldF8xKHN0b3JlRmllbGROYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIWhhc01lcmdlRnVuY3Rpb25fMShzdG9yZUZpZWxkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5BYm91dERhdGFMb3NzKGVudGl0eVJlZiwgc3RvcmVPYmplY3QsIHN0b3JlRmllbGROYW1lLCBjb250ZXh0LnN0b3JlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RvcmUubWVyZ2UoZGF0YUlkLCBzdG9yZU9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdG9yZS5yZXRhaW4ocmVmLl9fcmVmKTtcbiAgICAgICAgcmV0dXJuIHJlZjtcbiAgICB9O1xuICAgIFN0b3JlV3JpdGVyLnByb3RvdHlwZS5wcm9jZXNzU2VsZWN0aW9uU2V0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhSWQgPSBfYS5kYXRhSWQsIHJlc3VsdCA9IF9hLnJlc3VsdCwgc2VsZWN0aW9uU2V0ID0gX2Euc2VsZWN0aW9uU2V0LCBjb250ZXh0ID0gX2EuY29udGV4dCwgbWVyZ2VUcmVlID0gX2EubWVyZ2VUcmVlO1xuICAgICAgICB2YXIgcG9saWNpZXMgPSB0aGlzLmNhY2hlLnBvbGljaWVzO1xuICAgICAgICB2YXIgaW5jb21pbmcgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgdHlwZW5hbWUgPSAoZGF0YUlkICYmIHBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkW2RhdGFJZF0pIHx8XG4gICAgICAgICAgICB1dGlsaXRpZXMuZ2V0VHlwZW5hbWVGcm9tUmVzdWx0KHJlc3VsdCwgc2VsZWN0aW9uU2V0LCBjb250ZXh0LmZyYWdtZW50TWFwKSB8fFxuICAgICAgICAgICAgKGRhdGFJZCAmJiBjb250ZXh0LnN0b3JlLmdldChkYXRhSWQsIFwiX190eXBlbmFtZVwiKSk7XG4gICAgICAgIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgdHlwZW5hbWUpIHtcbiAgICAgICAgICAgIGluY29taW5nLl9fdHlwZW5hbWUgPSB0eXBlbmFtZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVhZEZpZWxkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVSZWFkRmllbGRPcHRpb25zKGFyZ3VtZW50cywgaW5jb21pbmcsIGNvbnRleHQudmFyaWFibGVzKTtcbiAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob3B0aW9ucy5mcm9tKSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmZvID0gY29udGV4dC5pbmNvbWluZ0J5SWQuZ2V0KG9wdGlvbnMuZnJvbS5fX3JlZik7XG4gICAgICAgICAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdF8xID0gcG9saWNpZXMucmVhZEZpZWxkKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBmcm9tOiBpbmZvLnN0b3JlT2JqZWN0IH0pLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdF8xICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRfMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwb2xpY2llcy5yZWFkRmllbGQob3B0aW9ucywgY29udGV4dCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBmaWVsZE5vZGVTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZmxhdHRlbkZpZWxkcyhzZWxlY3Rpb25TZXQsIHJlc3VsdCwgY29udGV4dCwgdHlwZW5hbWUpLmZvckVhY2goZnVuY3Rpb24gKGNvbnRleHQsIGZpZWxkKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgcmVzdWx0RmllbGRLZXkgPSB1dGlsaXRpZXMucmVzdWx0S2V5TmFtZUZyb21GaWVsZChmaWVsZCk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHRbcmVzdWx0RmllbGRLZXldO1xuICAgICAgICAgICAgZmllbGROb2RlU2V0LmFkZChmaWVsZCk7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZUZpZWxkTmFtZSA9IHBvbGljaWVzLmdldFN0b3JlRmllbGROYW1lKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZW5hbWU6IHR5cGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBjb250ZXh0LnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRUcmVlID0gZ2V0Q2hpbGRNZXJnZVRyZWUobWVyZ2VUcmVlLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgdmFyIGluY29taW5nVmFsdWUgPSBfdGhpcy5wcm9jZXNzRmllbGRWYWx1ZSh2YWx1ZSwgZmllbGQsIGZpZWxkLnNlbGVjdGlvblNldFxuICAgICAgICAgICAgICAgICAgICA/IGdldENvbnRleHRGbGF2b3IoY29udGV4dCwgZmFsc2UsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbnRleHQsIGNoaWxkVHJlZSk7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkVHlwZW5hbWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnNlbGVjdGlvblNldCAmJlxuICAgICAgICAgICAgICAgICAgICAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKGluY29taW5nVmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZVZhbHVlSXNTdG9yZU9iamVjdChpbmNvbWluZ1ZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUeXBlbmFtZSA9IHJlYWRGaWVsZChcIl9fdHlwZW5hbWVcIiwgaW5jb21pbmdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBtZXJnZSA9IHBvbGljaWVzLmdldE1lcmdlRnVuY3Rpb24odHlwZW5hbWUsIGZpZWxkLm5hbWUudmFsdWUsIGNoaWxkVHlwZW5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChtZXJnZSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyZWUuaW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVuYW1lOiB0eXBlbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlOiBtZXJnZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1heWJlUmVjeWNsZUNoaWxkTWVyZ2VUcmVlKG1lcmdlVHJlZSwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmNvbWluZyA9IGNvbnRleHQubWVyZ2UoaW5jb21pbmcsIChfYSA9IHt9LFxuICAgICAgICAgICAgICAgICAgICBfYVtzdG9yZUZpZWxkTmFtZV0gPSBpbmNvbWluZ1ZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBfYSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoX19ERVZfXyAmJlxuICAgICAgICAgICAgICAgICFjb250ZXh0LmNsaWVudE9ubHkgJiZcbiAgICAgICAgICAgICAgICAhY29udGV4dC5kZWZlcnJlZCAmJlxuICAgICAgICAgICAgICAgICF1dGlsaXRpZXMuYWRkVHlwZW5hbWVUb0RvY3VtZW50LmFkZGVkKGZpZWxkKSAmJlxuICAgICAgICAgICAgICAgICFwb2xpY2llcy5nZXRSZWFkRnVuY3Rpb24odHlwZW5hbWUsIGZpZWxkLm5hbWUudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5lcnJvcihcIk1pc3NpbmcgZmllbGQgJ1wiLmNvbmNhdCh1dGlsaXRpZXMucmVzdWx0S2V5TmFtZUZyb21GaWVsZChmaWVsZCksIFwiJyB3aGlsZSB3cml0aW5nIHJlc3VsdCBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpLnN1YnN0cmluZygwLCAxMDAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIF9iID0gcG9saWNpZXMuaWRlbnRpZnkocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgdHlwZW5hbWU6IHR5cGVuYW1lLFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDogc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwOiBjb250ZXh0LmZyYWdtZW50TWFwLFxuICAgICAgICAgICAgICAgIHN0b3JlT2JqZWN0OiBpbmNvbWluZyxcbiAgICAgICAgICAgICAgICByZWFkRmllbGQ6IHJlYWRGaWVsZCxcbiAgICAgICAgICAgIH0pLCBpZCA9IF9iWzBdLCBrZXlPYmplY3QgPSBfYlsxXTtcbiAgICAgICAgICAgIGRhdGFJZCA9IGRhdGFJZCB8fCBpZDtcbiAgICAgICAgICAgIGlmIChrZXlPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpbmNvbWluZyA9IGNvbnRleHQubWVyZ2UoaW5jb21pbmcsIGtleU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmICghZGF0YUlkKVxuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwic3RyaW5nXCIgPT09IHR5cGVvZiBkYXRhSWQpIHtcbiAgICAgICAgICAgIHZhciBkYXRhUmVmID0gdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2UoZGF0YUlkKTtcbiAgICAgICAgICAgIHZhciBzZXRzID0gY29udGV4dC53cml0dGVuW2RhdGFJZF0gfHwgKGNvbnRleHQud3JpdHRlbltkYXRhSWRdID0gW10pO1xuICAgICAgICAgICAgaWYgKHNldHMuaW5kZXhPZihzZWxlY3Rpb25TZXQpID49IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWY7XG4gICAgICAgICAgICBzZXRzLnB1c2goc2VsZWN0aW9uU2V0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWRlciAmJiB0aGlzLnJlYWRlci5pc0ZyZXNoKHJlc3VsdCwgZGF0YVJlZiwgc2VsZWN0aW9uU2V0LCBjb250ZXh0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhUmVmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByZXZpb3VzXzEgPSBjb250ZXh0LmluY29taW5nQnlJZC5nZXQoZGF0YUlkKTtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c18xKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNfMS5zdG9yZU9iamVjdCA9IGNvbnRleHQubWVyZ2UocHJldmlvdXNfMS5zdG9yZU9iamVjdCwgaW5jb21pbmcpO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzXzEubWVyZ2VUcmVlID0gbWVyZ2VNZXJnZVRyZWVzKHByZXZpb3VzXzEubWVyZ2VUcmVlLCBtZXJnZVRyZWUpO1xuICAgICAgICAgICAgICAgIGZpZWxkTm9kZVNldC5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gcHJldmlvdXNfMS5maWVsZE5vZGVTZXQuYWRkKGZpZWxkKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmluY29taW5nQnlJZC5zZXQoZGF0YUlkLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlT2JqZWN0OiBpbmNvbWluZyxcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VUcmVlOiBtZXJnZVRyZWVJc0VtcHR5KG1lcmdlVHJlZSkgPyB2b2lkIDAgOiBtZXJnZVRyZWUsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTm9kZVNldDogZmllbGROb2RlU2V0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgIH07XG4gICAgU3RvcmVXcml0ZXIucHJvdG90eXBlLnByb2Nlc3NGaWVsZFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBmaWVsZCwgY29udGV4dCwgbWVyZ2VUcmVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghZmllbGQuc2VsZWN0aW9uU2V0IHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gX19ERVZfXyA/IHV0aWxpdGllcy5jbG9uZURlZXAodmFsdWUpIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubWFwKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMucHJvY2Vzc0ZpZWxkVmFsdWUoaXRlbSwgZmllbGQsIGNvbnRleHQsIGdldENoaWxkTWVyZ2VUcmVlKG1lcmdlVHJlZSwgaSkpO1xuICAgICAgICAgICAgICAgIG1heWJlUmVjeWNsZUNoaWxkTWVyZ2VUcmVlKG1lcmdlVHJlZSwgaSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1NlbGVjdGlvblNldCh7XG4gICAgICAgICAgICByZXN1bHQ6IHZhbHVlLFxuICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiBmaWVsZC5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgbWVyZ2VUcmVlOiBtZXJnZVRyZWUsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3RvcmVXcml0ZXIucHJvdG90eXBlLmZsYXR0ZW5GaWVsZHMgPSBmdW5jdGlvbiAoc2VsZWN0aW9uU2V0LCByZXN1bHQsIGNvbnRleHQsIHR5cGVuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlbmFtZSA9PT0gdm9pZCAwKSB7IHR5cGVuYW1lID0gdXRpbGl0aWVzLmdldFR5cGVuYW1lRnJvbVJlc3VsdChyZXN1bHQsIHNlbGVjdGlvblNldCwgY29udGV4dC5mcmFnbWVudE1hcCk7IH1cbiAgICAgICAgdmFyIGZpZWxkTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB2YXIgcG9saWNpZXMgPSB0aGlzLmNhY2hlLnBvbGljaWVzO1xuICAgICAgICB2YXIgbGltaXRpbmdUcmllID0gbmV3IHRyaWUuVHJpZShmYWxzZSk7XG4gICAgICAgIChmdW5jdGlvbiBmbGF0dGVuKHNlbGVjdGlvblNldCwgaW5oZXJpdGVkQ29udGV4dCkge1xuICAgICAgICAgICAgdmFyIHZpc2l0ZWROb2RlID0gbGltaXRpbmdUcmllLmxvb2t1cChzZWxlY3Rpb25TZXQsIGluaGVyaXRlZENvbnRleHQuY2xpZW50T25seSwgaW5oZXJpdGVkQ29udGV4dC5kZWZlcnJlZCk7XG4gICAgICAgICAgICBpZiAodmlzaXRlZE5vZGUudmlzaXRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2aXNpdGVkTm9kZS52aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICghdXRpbGl0aWVzLnNob3VsZEluY2x1ZGUoc2VsZWN0aW9uLCBjb250ZXh0LnZhcmlhYmxlcykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB2YXIgY2xpZW50T25seSA9IGluaGVyaXRlZENvbnRleHQuY2xpZW50T25seSwgZGVmZXJyZWQgPSBpbmhlcml0ZWRDb250ZXh0LmRlZmVycmVkO1xuICAgICAgICAgICAgICAgIGlmICghKGNsaWVudE9ubHkgJiYgZGVmZXJyZWQpICYmXG4gICAgICAgICAgICAgICAgICAgIHV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkoc2VsZWN0aW9uLmRpcmVjdGl2ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5kaXJlY3RpdmVzLmZvckVhY2goZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBkaXIubmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSBcImNsaWVudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudE9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwiZGVmZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gdXRpbGl0aWVzLmFyZ3VtZW50c09iamVjdEZyb21GaWVsZChkaXIsIGNvbnRleHQudmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFyZ3MgfHwgYXJncy5pZiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZyA9IGZpZWxkTWFwLmdldChzZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudE9ubHkgPSBjbGllbnRPbmx5ICYmIGV4aXN0aW5nLmNsaWVudE9ubHk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZCA9IGRlZmVycmVkICYmIGV4aXN0aW5nLmRlZmVycmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTWFwLnNldChzZWxlY3Rpb24sIGdldENvbnRleHRGbGF2b3IoY29udGV4dCwgY2xpZW50T25seSwgZGVmZXJyZWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IHV0aWxpdGllcy5nZXRGcmFnbWVudEZyb21TZWxlY3Rpb24oc2VsZWN0aW9uLCBjb250ZXh0LmZyYWdtZW50TWFwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2xpY2llcy5mcmFnbWVudE1hdGNoZXMoZnJhZ21lbnQsIHR5cGVuYW1lLCByZXN1bHQsIGNvbnRleHQudmFyaWFibGVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbihmcmFnbWVudC5zZWxlY3Rpb25TZXQsIGdldENvbnRleHRGbGF2b3IoY29udGV4dCwgY2xpZW50T25seSwgZGVmZXJyZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KShzZWxlY3Rpb25TZXQsIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gZmllbGRNYXA7XG4gICAgfTtcbiAgICBTdG9yZVdyaXRlci5wcm90b3R5cGUuYXBwbHlNZXJnZXMgPSBmdW5jdGlvbiAobWVyZ2VUcmVlLCBleGlzdGluZywgaW5jb21pbmcsIGNvbnRleHQsIGdldFN0b3JhZ2VBcmdzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG1lcmdlVHJlZS5tYXAuc2l6ZSAmJiAhdXRpbGl0aWVzLmlzUmVmZXJlbmNlKGluY29taW5nKSkge1xuICAgICAgICAgICAgdmFyIGVfMSA9ICghQXJyYXkuaXNBcnJheShpbmNvbWluZykgJiZcbiAgICAgICAgICAgICAgICAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKGV4aXN0aW5nKSB8fCBzdG9yZVZhbHVlSXNTdG9yZU9iamVjdChleGlzdGluZykpKSA/IGV4aXN0aW5nIDogdm9pZCAwO1xuICAgICAgICAgICAgdmFyIGlfMSA9IGluY29taW5nO1xuICAgICAgICAgICAgaWYgKGVfMSAmJiAhZ2V0U3RvcmFnZUFyZ3MpIHtcbiAgICAgICAgICAgICAgICBnZXRTdG9yYWdlQXJncyA9IFt1dGlsaXRpZXMuaXNSZWZlcmVuY2UoZV8xKSA/IGVfMS5fX3JlZiA6IGVfMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2hhbmdlZEZpZWxkc18xO1xuICAgICAgICAgICAgdmFyIGdldFZhbHVlXzEgPSBmdW5jdGlvbiAoZnJvbSwgbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGZyb20pXG4gICAgICAgICAgICAgICAgICAgID8gKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiID8gZnJvbVtuYW1lXSA6IHZvaWQgMClcbiAgICAgICAgICAgICAgICAgICAgOiBjb250ZXh0LnN0b3JlLmdldEZpZWxkVmFsdWUoZnJvbSwgU3RyaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtZXJnZVRyZWUubWFwLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkVHJlZSwgc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZVZhbCA9IGdldFZhbHVlXzEoZV8xLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgdmFyIGlWYWwgPSBnZXRWYWx1ZV8xKGlfMSwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IGlWYWwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0U3RvcmFnZUFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0U3RvcmFnZUFyZ3MucHVzaChzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBhVmFsID0gX3RoaXMuYXBwbHlNZXJnZXMoY2hpbGRUcmVlLCBlVmFsLCBpVmFsLCBjb250ZXh0LCBnZXRTdG9yYWdlQXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKGFWYWwgIT09IGlWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZEZpZWxkc18xID0gY2hhbmdlZEZpZWxkc18xIHx8IG5ldyBNYXA7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWRGaWVsZHNfMS5zZXQoc3RvcmVGaWVsZE5hbWUsIGFWYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ2V0U3RvcmFnZUFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5pbnZhcmlhbnQoZ2V0U3RvcmFnZUFyZ3MucG9wKCkgPT09IHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VkRmllbGRzXzEpIHtcbiAgICAgICAgICAgICAgICBpbmNvbWluZyA9IChBcnJheS5pc0FycmF5KGlfMSkgPyBpXzEuc2xpY2UoMCkgOiB0c2xpYi5fX2Fzc2lnbih7fSwgaV8xKSk7XG4gICAgICAgICAgICAgICAgY2hhbmdlZEZpZWxkc18xLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY29taW5nW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lcmdlVHJlZS5pbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5wb2xpY2llcy5ydW5NZXJnZUZ1bmN0aW9uKGV4aXN0aW5nLCBpbmNvbWluZywgbWVyZ2VUcmVlLmluZm8sIGNvbnRleHQsIGdldFN0b3JhZ2VBcmdzICYmIChfYSA9IGNvbnRleHQuc3RvcmUpLmdldFN0b3JhZ2UuYXBwbHkoX2EsIGdldFN0b3JhZ2VBcmdzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgIH07XG4gICAgcmV0dXJuIFN0b3JlV3JpdGVyO1xufSgpKTtcbnZhciBlbXB0eU1lcmdlVHJlZVBvb2wgPSBbXTtcbmZ1bmN0aW9uIGdldENoaWxkTWVyZ2VUcmVlKF9hLCBuYW1lKSB7XG4gICAgdmFyIG1hcCA9IF9hLm1hcDtcbiAgICBpZiAoIW1hcC5oYXMobmFtZSkpIHtcbiAgICAgICAgbWFwLnNldChuYW1lLCBlbXB0eU1lcmdlVHJlZVBvb2wucG9wKCkgfHwgeyBtYXA6IG5ldyBNYXAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYXAuZ2V0KG5hbWUpO1xufVxuZnVuY3Rpb24gbWVyZ2VNZXJnZVRyZWVzKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKGxlZnQgPT09IHJpZ2h0IHx8ICFyaWdodCB8fCBtZXJnZVRyZWVJc0VtcHR5KHJpZ2h0KSlcbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgaWYgKCFsZWZ0IHx8IG1lcmdlVHJlZUlzRW1wdHkobGVmdCkpXG4gICAgICAgIHJldHVybiByaWdodDtcbiAgICB2YXIgaW5mbyA9IGxlZnQuaW5mbyAmJiByaWdodC5pbmZvID8gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGxlZnQuaW5mbyksIHJpZ2h0LmluZm8pIDogbGVmdC5pbmZvIHx8IHJpZ2h0LmluZm87XG4gICAgdmFyIG5lZWRUb01lcmdlTWFwcyA9IGxlZnQubWFwLnNpemUgJiYgcmlnaHQubWFwLnNpemU7XG4gICAgdmFyIG1hcCA9IG5lZWRUb01lcmdlTWFwcyA/IG5ldyBNYXAgOlxuICAgICAgICBsZWZ0Lm1hcC5zaXplID8gbGVmdC5tYXAgOiByaWdodC5tYXA7XG4gICAgdmFyIG1lcmdlZCA9IHsgaW5mbzogaW5mbywgbWFwOiBtYXAgfTtcbiAgICBpZiAobmVlZFRvTWVyZ2VNYXBzKSB7XG4gICAgICAgIHZhciByZW1haW5pbmdSaWdodEtleXNfMSA9IG5ldyBTZXQocmlnaHQubWFwLmtleXMoKSk7XG4gICAgICAgIGxlZnQubWFwLmZvckVhY2goZnVuY3Rpb24gKGxlZnRUcmVlLCBrZXkpIHtcbiAgICAgICAgICAgIG1lcmdlZC5tYXAuc2V0KGtleSwgbWVyZ2VNZXJnZVRyZWVzKGxlZnRUcmVlLCByaWdodC5tYXAuZ2V0KGtleSkpKTtcbiAgICAgICAgICAgIHJlbWFpbmluZ1JpZ2h0S2V5c18xLmRlbGV0ZShrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtYWluaW5nUmlnaHRLZXlzXzEuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBtZXJnZWQubWFwLnNldChrZXksIG1lcmdlTWVyZ2VUcmVlcyhyaWdodC5tYXAuZ2V0KGtleSksIGxlZnQubWFwLmdldChrZXkpKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VkO1xufVxuZnVuY3Rpb24gbWVyZ2VUcmVlSXNFbXB0eSh0cmVlKSB7XG4gICAgcmV0dXJuICF0cmVlIHx8ICEodHJlZS5pbmZvIHx8IHRyZWUubWFwLnNpemUpO1xufVxuZnVuY3Rpb24gbWF5YmVSZWN5Y2xlQ2hpbGRNZXJnZVRyZWUoX2EsIG5hbWUpIHtcbiAgICB2YXIgbWFwID0gX2EubWFwO1xuICAgIHZhciBjaGlsZFRyZWUgPSBtYXAuZ2V0KG5hbWUpO1xuICAgIGlmIChjaGlsZFRyZWUgJiYgbWVyZ2VUcmVlSXNFbXB0eShjaGlsZFRyZWUpKSB7XG4gICAgICAgIGVtcHR5TWVyZ2VUcmVlUG9vbC5wdXNoKGNoaWxkVHJlZSk7XG4gICAgICAgIG1hcC5kZWxldGUobmFtZSk7XG4gICAgfVxufVxudmFyIHdhcm5pbmdzID0gbmV3IFNldCgpO1xuZnVuY3Rpb24gd2FybkFib3V0RGF0YUxvc3MoZXhpc3RpbmdSZWYsIGluY29taW5nT2JqLCBzdG9yZUZpZWxkTmFtZSwgc3RvcmUpIHtcbiAgICB2YXIgZ2V0Q2hpbGQgPSBmdW5jdGlvbiAob2JqT3JSZWYpIHtcbiAgICAgICAgdmFyIGNoaWxkID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShvYmpPclJlZiwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNoaWxkID09PSBcIm9iamVjdFwiICYmIGNoaWxkO1xuICAgIH07XG4gICAgdmFyIGV4aXN0aW5nID0gZ2V0Q2hpbGQoZXhpc3RpbmdSZWYpO1xuICAgIGlmICghZXhpc3RpbmcpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgaW5jb21pbmcgPSBnZXRDaGlsZChpbmNvbWluZ09iaik7XG4gICAgaWYgKCFpbmNvbWluZylcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2UoZXhpc3RpbmcpKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKGVxdWFsaXR5LmVxdWFsKGV4aXN0aW5nLCBpbmNvbWluZykpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoT2JqZWN0LmtleXMoZXhpc3RpbmcpLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHN0b3JlLmdldEZpZWxkVmFsdWUoaW5jb21pbmcsIGtleSkgIT09IHZvaWQgMDsgfSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcGFyZW50VHlwZSA9IHN0b3JlLmdldEZpZWxkVmFsdWUoZXhpc3RpbmdSZWYsIFwiX190eXBlbmFtZVwiKSB8fFxuICAgICAgICBzdG9yZS5nZXRGaWVsZFZhbHVlKGluY29taW5nT2JqLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpO1xuICAgIHZhciB0eXBlRG90TmFtZSA9IFwiXCIuY29uY2F0KHBhcmVudFR5cGUsIFwiLlwiKS5jb25jYXQoZmllbGROYW1lKTtcbiAgICBpZiAod2FybmluZ3MuaGFzKHR5cGVEb3ROYW1lKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIHdhcm5pbmdzLmFkZCh0eXBlRG90TmFtZSk7XG4gICAgdmFyIGNoaWxkVHlwZW5hbWVzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4aXN0aW5nKSAmJlxuICAgICAgICAhQXJyYXkuaXNBcnJheShpbmNvbWluZykpIHtcbiAgICAgICAgW2V4aXN0aW5nLCBpbmNvbWluZ10uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHZhciB0eXBlbmFtZSA9IHN0b3JlLmdldEZpZWxkVmFsdWUoY2hpbGQsIFwiX190eXBlbmFtZVwiKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHlwZW5hbWUgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICAhY2hpbGRUeXBlbmFtZXMuaW5jbHVkZXModHlwZW5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRUeXBlbmFtZXMucHVzaCh0eXBlbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJDYWNoZSBkYXRhIG1heSBiZSBsb3N0IHdoZW4gcmVwbGFjaW5nIHRoZSBcIi5jb25jYXQoZmllbGROYW1lLCBcIiBmaWVsZCBvZiBhIFwiKS5jb25jYXQocGFyZW50VHlwZSwgXCIgb2JqZWN0LlxcblxcblRvIGFkZHJlc3MgdGhpcyBwcm9ibGVtICh3aGljaCBpcyBub3QgYSBidWcgaW4gQXBvbGxvIENsaWVudCksIFwiKS5jb25jYXQoY2hpbGRUeXBlbmFtZXMubGVuZ3RoXG4gICAgICAgID8gXCJlaXRoZXIgZW5zdXJlIGFsbCBvYmplY3RzIG9mIHR5cGUgXCIgK1xuICAgICAgICAgICAgY2hpbGRUeXBlbmFtZXMuam9pbihcIiBhbmQgXCIpICsgXCIgaGF2ZSBhbiBJRCBvciBhIGN1c3RvbSBtZXJnZSBmdW5jdGlvbiwgb3IgXCJcbiAgICAgICAgOiBcIlwiLCBcImRlZmluZSBhIGN1c3RvbSBtZXJnZSBmdW5jdGlvbiBmb3IgdGhlIFwiKS5jb25jYXQodHlwZURvdE5hbWUsIFwiIGZpZWxkLCBzbyBJbk1lbW9yeUNhY2hlIGNhbiBzYWZlbHkgbWVyZ2UgdGhlc2Ugb2JqZWN0czpcXG5cXG4gIGV4aXN0aW5nOiBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nKS5zbGljZSgwLCAxMDAwKSwgXCJcXG4gIGluY29taW5nOiBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGluY29taW5nKS5zbGljZSgwLCAxMDAwKSwgXCJcXG5cXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGVzZSBvcHRpb25zLCBwbGVhc2UgcmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb246XFxuXFxuICAqIEVuc3VyaW5nIGVudGl0eSBvYmplY3RzIGhhdmUgSURzOiBodHRwczovL2dvLmFwb2xsby5kZXYvYy9nZW5lcmF0aW5nLXVuaXF1ZS1pZGVudGlmaWVyc1xcbiAgKiBEZWZpbmluZyBjdXN0b20gbWVyZ2UgZnVuY3Rpb25zOiBodHRwczovL2dvLmFwb2xsby5kZXYvYy9tZXJnaW5nLW5vbi1ub3JtYWxpemVkLW9iamVjdHNcXG5cIikpO1xufVxuXG52YXIgSW5NZW1vcnlDYWNoZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKEluTWVtb3J5Q2FjaGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW5NZW1vcnlDYWNoZShjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLndhdGNoZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLnR5cGVuYW1lRG9jdW1lbnRDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgX3RoaXMubWFrZVZhciA9IG1ha2VWYXI7XG4gICAgICAgIF90aGlzLnR4Q291bnQgPSAwO1xuICAgICAgICBfdGhpcy5jb25maWcgPSBub3JtYWxpemVDb25maWcoY29uZmlnKTtcbiAgICAgICAgX3RoaXMuYWRkVHlwZW5hbWUgPSAhIV90aGlzLmNvbmZpZy5hZGRUeXBlbmFtZTtcbiAgICAgICAgX3RoaXMucG9saWNpZXMgPSBuZXcgUG9saWNpZXMoe1xuICAgICAgICAgICAgY2FjaGU6IF90aGlzLFxuICAgICAgICAgICAgZGF0YUlkRnJvbU9iamVjdDogX3RoaXMuY29uZmlnLmRhdGFJZEZyb21PYmplY3QsXG4gICAgICAgICAgICBwb3NzaWJsZVR5cGVzOiBfdGhpcy5jb25maWcucG9zc2libGVUeXBlcyxcbiAgICAgICAgICAgIHR5cGVQb2xpY2llczogX3RoaXMuY29uZmlnLnR5cGVQb2xpY2llcyxcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLmluaXQoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm9vdFN0b3JlID0gdGhpcy5kYXRhID0gbmV3IGV4cG9ydHMuRW50aXR5U3RvcmUuUm9vdCh7XG4gICAgICAgICAgICBwb2xpY2llczogdGhpcy5wb2xpY2llcyxcbiAgICAgICAgICAgIHJlc3VsdENhY2hpbmc6IHRoaXMuY29uZmlnLnJlc3VsdENhY2hpbmcsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9wdGltaXN0aWNEYXRhID0gcm9vdFN0b3JlLnN0dW1wO1xuICAgICAgICB0aGlzLnJlc2V0UmVzdWx0Q2FjaGUoKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlc2V0UmVzdWx0Q2FjaGUgPSBmdW5jdGlvbiAocmVzZXRSZXN1bHRJZGVudGl0aWVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwcmV2aW91c1JlYWRlciA9IHRoaXMuc3RvcmVSZWFkZXI7XG4gICAgICAgIHRoaXMuc3RvcmVXcml0ZXIgPSBuZXcgU3RvcmVXcml0ZXIodGhpcywgdGhpcy5zdG9yZVJlYWRlciA9IG5ldyBTdG9yZVJlYWRlcih7XG4gICAgICAgICAgICBjYWNoZTogdGhpcyxcbiAgICAgICAgICAgIGFkZFR5cGVuYW1lOiB0aGlzLmFkZFR5cGVuYW1lLFxuICAgICAgICAgICAgcmVzdWx0Q2FjaGVNYXhTaXplOiB0aGlzLmNvbmZpZy5yZXN1bHRDYWNoZU1heFNpemUsXG4gICAgICAgICAgICBjYW5vbml6ZVJlc3VsdHM6IHNob3VsZENhbm9uaXplUmVzdWx0cyh0aGlzLmNvbmZpZyksXG4gICAgICAgICAgICBjYW5vbjogcmVzZXRSZXN1bHRJZGVudGl0aWVzXG4gICAgICAgICAgICAgICAgPyB2b2lkIDBcbiAgICAgICAgICAgICAgICA6IHByZXZpb3VzUmVhZGVyICYmIHByZXZpb3VzUmVhZGVyLmNhbm9uLFxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMubWF5YmVCcm9hZGNhc3RXYXRjaCA9IG9wdGltaXNtLndyYXAoZnVuY3Rpb24gKGMsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5icm9hZGNhc3RXYXRjaChjLCBvcHRpb25zKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbWF4OiB0aGlzLmNvbmZpZy5yZXN1bHRDYWNoZU1heFNpemUsXG4gICAgICAgICAgICBtYWtlQ2FjaGVLZXk6IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gYy5vcHRpbWlzdGljID8gX3RoaXMub3B0aW1pc3RpY0RhdGEgOiBfdGhpcy5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c1Jlc3VsdENhY2hpbmcoc3RvcmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpbWlzdGljID0gYy5vcHRpbWlzdGljLCByb290SWQgPSBjLnJvb3RJZCwgdmFyaWFibGVzID0gYy52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZS5tYWtlQ2FjaGVLZXkoYy5xdWVyeSwgYy5jYWxsYmFjaywgY2Fub25pY2FsU3RyaW5naWZ5KHsgb3B0aW1pc3RpYzogb3B0aW1pc3RpYywgcm9vdElkOiByb290SWQsIHZhcmlhYmxlczogdmFyaWFibGVzIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBuZXcgU2V0KFtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5ncm91cCxcbiAgICAgICAgICAgIHRoaXMub3B0aW1pc3RpY0RhdGEuZ3JvdXAsXG4gICAgICAgIF0pLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwKSB7IHJldHVybiBncm91cC5yZXNldENhY2hpbmcoKTsgfSk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZXN0b3JlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIGlmIChkYXRhKVxuICAgICAgICAgICAgdGhpcy5kYXRhLnJlcGxhY2UoZGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuZXh0cmFjdCA9IGZ1bmN0aW9uIChvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiAob3B0aW1pc3RpYyA/IHRoaXMub3B0aW1pc3RpY0RhdGEgOiB0aGlzLmRhdGEpLmV4dHJhY3QoKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX2EgPSBvcHRpb25zLnJldHVyblBhcnRpYWxEYXRhLCByZXR1cm5QYXJ0aWFsRGF0YSA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVSZWFkZXIuZGlmZlF1ZXJ5QWdhaW5zdFN0b3JlKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBzdG9yZTogb3B0aW9ucy5vcHRpbWlzdGljID8gdGhpcy5vcHRpbWlzdGljRGF0YSA6IHRoaXMuZGF0YSwgY29uZmlnOiB0aGlzLmNvbmZpZywgcmV0dXJuUGFydGlhbERhdGE6IHJldHVyblBhcnRpYWxEYXRhIH0pKS5yZXN1bHQgfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNaXNzaW5nRmllbGRFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgKyt0aGlzLnR4Q291bnQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVdyaXRlci53cml0ZVRvU3RvcmUodGhpcy5kYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmICghLS10aGlzLnR4Q291bnQgJiYgb3B0aW9ucy5icm9hZGNhc3QgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLm1vZGlmeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChoYXNPd24uY2FsbChvcHRpb25zLCBcImlkXCIpICYmICFvcHRpb25zLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0b3JlID0gb3B0aW9ucy5vcHRpbWlzdGljXG4gICAgICAgICAgICA/IHRoaXMub3B0aW1pc3RpY0RhdGFcbiAgICAgICAgICAgIDogdGhpcy5kYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgKyt0aGlzLnR4Q291bnQ7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUubW9kaWZ5KG9wdGlvbnMuaWQgfHwgXCJST09UX1FVRVJZXCIsIG9wdGlvbnMuZmllbGRzKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmICghLS10aGlzLnR4Q291bnQgJiYgb3B0aW9ucy5icm9hZGNhc3QgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmRpZmYgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVJlYWRlci5kaWZmUXVlcnlBZ2FpbnN0U3RvcmUodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHN0b3JlOiBvcHRpb25zLm9wdGltaXN0aWMgPyB0aGlzLm9wdGltaXN0aWNEYXRhIDogdGhpcy5kYXRhLCByb290SWQ6IG9wdGlvbnMuaWQgfHwgXCJST09UX1FVRVJZXCIsIGNvbmZpZzogdGhpcy5jb25maWcgfSkpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiAod2F0Y2gpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLndhdGNoZXMuc2l6ZSkge1xuICAgICAgICAgICAgcmVjYWxsQ2FjaGUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53YXRjaGVzLmFkZCh3YXRjaCk7XG4gICAgICAgIGlmICh3YXRjaC5pbW1lZGlhdGUpIHtcbiAgICAgICAgICAgIHRoaXMubWF5YmVCcm9hZGNhc3RXYXRjaCh3YXRjaCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy53YXRjaGVzLmRlbGV0ZSh3YXRjaCkgJiYgIV90aGlzLndhdGNoZXMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIGZvcmdldENhY2hlKF90aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLm1heWJlQnJvYWRjYXN0V2F0Y2guZm9yZ2V0KHdhdGNoKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmdjID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgY2Fub25pY2FsU3RyaW5naWZ5LnJlc2V0KCk7XG4gICAgICAgIHZhciBpZHMgPSB0aGlzLm9wdGltaXN0aWNEYXRhLmdjKCk7XG4gICAgICAgIGlmIChvcHRpb25zICYmICF0aGlzLnR4Q291bnQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnJlc2V0UmVzdWx0Q2FjaGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UmVzdWx0Q2FjaGUob3B0aW9ucy5yZXNldFJlc3VsdElkZW50aXRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5yZXNldFJlc3VsdElkZW50aXRpZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlUmVhZGVyLnJlc2V0Q2Fub24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRzO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmV0YWluID0gZnVuY3Rpb24gKHJvb3RJZCwgb3B0aW1pc3RpYykge1xuICAgICAgICByZXR1cm4gKG9wdGltaXN0aWMgPyB0aGlzLm9wdGltaXN0aWNEYXRhIDogdGhpcy5kYXRhKS5yZXRhaW4ocm9vdElkKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbiAocm9vdElkLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIHJldHVybiAob3B0aW1pc3RpYyA/IHRoaXMub3B0aW1pc3RpY0RhdGEgOiB0aGlzLmRhdGEpLnJlbGVhc2Uocm9vdElkKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdCkpXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0Ll9fcmVmO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9saWNpZXMuaWRlbnRpZnkob2JqZWN0KVswXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5ldmljdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5pZCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKG9wdGlvbnMsIFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGlkOiBcIlJPT1RfUVVFUllcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgKyt0aGlzLnR4Q291bnQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpbWlzdGljRGF0YS5ldmljdChvcHRpb25zLCB0aGlzLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKCEtLXRoaXMudHhDb3VudCAmJiBvcHRpb25zLmJyb2FkY2FzdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgY2Fub25pY2FsU3RyaW5naWZ5LnJlc2V0KCk7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZGlzY2FyZFdhdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uICh3YXRjaCkgeyByZXR1cm4gX3RoaXMubWF5YmVCcm9hZGNhc3RXYXRjaC5mb3JnZXQod2F0Y2gpOyB9KTtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcy5jbGVhcigpO1xuICAgICAgICAgICAgZm9yZ2V0Q2FjaGUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZW1vdmVPcHRpbWlzdGljID0gZnVuY3Rpb24gKGlkVG9SZW1vdmUpIHtcbiAgICAgICAgdmFyIG5ld09wdGltaXN0aWNEYXRhID0gdGhpcy5vcHRpbWlzdGljRGF0YS5yZW1vdmVMYXllcihpZFRvUmVtb3ZlKTtcbiAgICAgICAgaWYgKG5ld09wdGltaXN0aWNEYXRhICE9PSB0aGlzLm9wdGltaXN0aWNEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGltaXN0aWNEYXRhID0gbmV3T3B0aW1pc3RpY0RhdGE7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuYmF0Y2ggPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdXBkYXRlID0gb3B0aW9ucy51cGRhdGUsIF9hID0gb3B0aW9ucy5vcHRpbWlzdGljLCBvcHRpbWlzdGljID0gX2EgPT09IHZvaWQgMCA/IHRydWUgOiBfYSwgcmVtb3ZlT3B0aW1pc3RpYyA9IG9wdGlvbnMucmVtb3ZlT3B0aW1pc3RpYywgb25XYXRjaFVwZGF0ZWQgPSBvcHRpb25zLm9uV2F0Y2hVcGRhdGVkO1xuICAgICAgICB2YXIgdXBkYXRlUmVzdWx0O1xuICAgICAgICB2YXIgcGVyZm9ybSA9IGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMsIGRhdGEgPSBfYS5kYXRhLCBvcHRpbWlzdGljRGF0YSA9IF9hLm9wdGltaXN0aWNEYXRhO1xuICAgICAgICAgICAgKytfdGhpcy50eENvdW50O1xuICAgICAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGF0YSA9IF90aGlzLm9wdGltaXN0aWNEYXRhID0gbGF5ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVSZXN1bHQgPSB1cGRhdGUoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgLS1fdGhpcy50eENvdW50O1xuICAgICAgICAgICAgICAgIF90aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgIF90aGlzLm9wdGltaXN0aWNEYXRhID0gb3B0aW1pc3RpY0RhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBhbHJlYWR5RGlydHkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGlmIChvbldhdGNoVXBkYXRlZCAmJiAhdGhpcy50eENvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXModHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IG9uV2F0Y2hVcGRhdGVkOiBmdW5jdGlvbiAod2F0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeURpcnR5LmFkZCh3YXRjaCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdGltaXN0aWMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGltaXN0aWNEYXRhID0gdGhpcy5vcHRpbWlzdGljRGF0YS5hZGRMYXllcihvcHRpbWlzdGljLCBwZXJmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpbWlzdGljID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcGVyZm9ybSh0aGlzLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGVyZm9ybSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVtb3ZlT3B0aW1pc3RpYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5vcHRpbWlzdGljRGF0YSA9IHRoaXMub3B0aW1pc3RpY0RhdGEucmVtb3ZlTGF5ZXIocmVtb3ZlT3B0aW1pc3RpYyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uV2F0Y2hVcGRhdGVkICYmIGFscmVhZHlEaXJ0eS5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXModHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IG9uV2F0Y2hVcGRhdGVkOiBmdW5jdGlvbiAod2F0Y2gsIGRpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9uV2F0Y2hVcGRhdGVkLmNhbGwodGhpcywgd2F0Y2gsIGRpZmYpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeURpcnR5LmRlbGV0ZSh3YXRjaCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9IH0pKTtcbiAgICAgICAgICAgIGlmIChhbHJlYWR5RGlydHkuc2l6ZSkge1xuICAgICAgICAgICAgICAgIGFscmVhZHlEaXJ0eS5mb3JFYWNoKGZ1bmN0aW9uICh3YXRjaCkgeyByZXR1cm4gX3RoaXMubWF5YmVCcm9hZGNhc3RXYXRjaC5kaXJ0eSh3YXRjaCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cGRhdGVSZXN1bHQ7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5wZXJmb3JtVHJhbnNhY3Rpb24gPSBmdW5jdGlvbiAodXBkYXRlLCBvcHRpbWlzdGljSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmF0Y2goe1xuICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgICAgICAgICBvcHRpbWlzdGljOiBvcHRpbWlzdGljSWQgfHwgKG9wdGltaXN0aWNJZCAhPT0gbnVsbCksXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUudHJhbnNmb3JtRG9jdW1lbnQgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRkVHlwZW5hbWUpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnR5cGVuYW1lRG9jdW1lbnRDYWNoZS5nZXQoZG9jdW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB1dGlsaXRpZXMuYWRkVHlwZW5hbWVUb0RvY3VtZW50KGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVuYW1lRG9jdW1lbnRDYWNoZS5zZXQoZG9jdW1lbnQsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlbmFtZURvY3VtZW50Q2FjaGUuc2V0KHJlc3VsdCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuYnJvYWRjYXN0V2F0Y2hlcyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy50eENvdW50KSB7XG4gICAgICAgICAgICB0aGlzLndhdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gX3RoaXMubWF5YmVCcm9hZGNhc3RXYXRjaChjLCBvcHRpb25zKTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmJyb2FkY2FzdFdhdGNoID0gZnVuY3Rpb24gKGMsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGxhc3REaWZmID0gYy5sYXN0RGlmZjtcbiAgICAgICAgdmFyIGRpZmYgPSB0aGlzLmRpZmYoYyk7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoYy5vcHRpbWlzdGljICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMub3B0aW1pc3RpYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGRpZmYuZnJvbU9wdGltaXN0aWNUcmFuc2FjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vbldhdGNoVXBkYXRlZCAmJlxuICAgICAgICAgICAgICAgIG9wdGlvbnMub25XYXRjaFVwZGF0ZWQuY2FsbCh0aGlzLCBjLCBkaWZmLCBsYXN0RGlmZikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghbGFzdERpZmYgfHwgIWVxdWFsaXR5LmVxdWFsKGxhc3REaWZmLnJlc3VsdCwgZGlmZi5yZXN1bHQpKSB7XG4gICAgICAgICAgICBjLmNhbGxiYWNrKGMubGFzdERpZmYgPSBkaWZmLCBsYXN0RGlmZik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBJbk1lbW9yeUNhY2hlO1xufShBcG9sbG9DYWNoZSkpO1xuXG5leHBvcnRzLmlzUmVmZXJlbmNlID0gdXRpbGl0aWVzLmlzUmVmZXJlbmNlO1xuZXhwb3J0cy5tYWtlUmVmZXJlbmNlID0gdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2U7XG5leHBvcnRzLkFwb2xsb0NhY2hlID0gQXBvbGxvQ2FjaGU7XG5leHBvcnRzLkluTWVtb3J5Q2FjaGUgPSBJbk1lbW9yeUNhY2hlO1xuZXhwb3J0cy5NaXNzaW5nRmllbGRFcnJvciA9IE1pc3NpbmdGaWVsZEVycm9yO1xuZXhwb3J0cy5Qb2xpY2llcyA9IFBvbGljaWVzO1xuZXhwb3J0cy5jYWNoZVNsb3QgPSBjYWNoZVNsb3Q7XG5leHBvcnRzLmNhbm9uaWNhbFN0cmluZ2lmeSA9IGNhbm9uaWNhbFN0cmluZ2lmeTtcbmV4cG9ydHMuZGVmYXVsdERhdGFJZEZyb21PYmplY3QgPSBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdDtcbmV4cG9ydHMuZmllbGROYW1lRnJvbVN0b3JlTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWU7XG5leHBvcnRzLm1ha2VWYXIgPSBtYWtlVmFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FjaGUuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuLi9saW5rL2NvcmUnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMnKTtcbnZhciBodHRwID0gcmVxdWlyZSgnLi4vbGluay9odHRwJyk7XG52YXIgZXF1YWxpdHkgPSByZXF1aXJlKCdAd3J5L2VxdWFsaXR5Jyk7XG52YXIgY2FjaGUgPSByZXF1aXJlKCcuLi9jYWNoZScpO1xudmFyIGVycm9ycyA9IHJlcXVpcmUoJy4uL2Vycm9ycycpO1xudmFyIGdyYXBocWwgPSByZXF1aXJlKCdncmFwaHFsJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9saW5rL3V0aWxzJyk7XG52YXIgdHNJbnZhcmlhbnQgPSByZXF1aXJlKCd0cy1pbnZhcmlhbnQnKTtcbnZhciBncmFwaHFsVGFnID0gcmVxdWlyZSgnZ3JhcGhxbC10YWcnKTtcblxudmFyIHZlcnNpb24gPSAnMy41LjYnO1xuXG5leHBvcnRzLk5ldHdvcmtTdGF0dXMgPSB2b2lkIDA7XG4oZnVuY3Rpb24gKE5ldHdvcmtTdGF0dXMpIHtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJsb2FkaW5nXCJdID0gMV0gPSBcImxvYWRpbmdcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJzZXRWYXJpYWJsZXNcIl0gPSAyXSA9IFwic2V0VmFyaWFibGVzXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wiZmV0Y2hNb3JlXCJdID0gM10gPSBcImZldGNoTW9yZVwiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcInJlZmV0Y2hcIl0gPSA0XSA9IFwicmVmZXRjaFwiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcInBvbGxcIl0gPSA2XSA9IFwicG9sbFwiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcInJlYWR5XCJdID0gN10gPSBcInJlYWR5XCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wiZXJyb3JcIl0gPSA4XSA9IFwiZXJyb3JcIjtcbn0pKGV4cG9ydHMuTmV0d29ya1N0YXR1cyB8fCAoZXhwb3J0cy5OZXR3b3JrU3RhdHVzID0ge30pKTtcbmZ1bmN0aW9uIGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodChuZXR3b3JrU3RhdHVzKSB7XG4gICAgcmV0dXJuIG5ldHdvcmtTdGF0dXMgPyBuZXR3b3JrU3RhdHVzIDwgNyA6IGZhbHNlO1xufVxuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbiwgaGFzT3duUHJvcGVydHkkMSA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eTtcbnZhciB3YXJuZWRBYm91dFVwZGF0ZVF1ZXJ5ID0gZmFsc2U7XG52YXIgT2JzZXJ2YWJsZVF1ZXJ5ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoT2JzZXJ2YWJsZVF1ZXJ5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVRdWVyeShfYSkge1xuICAgICAgICB2YXIgcXVlcnlNYW5hZ2VyID0gX2EucXVlcnlNYW5hZ2VyLCBxdWVyeUluZm8gPSBfYS5xdWVyeUluZm8sIG9wdGlvbnMgPSBfYS5vcHRpb25zO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1Yk9ic2VydmVyID0gb2JzZXJ2ZXIuX3N1YnNjcmlwdGlvbi5fb2JzZXJ2ZXI7XG4gICAgICAgICAgICAgICAgaWYgKHN1Yk9ic2VydmVyICYmICFzdWJPYnNlcnZlci5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzdWJPYnNlcnZlci5lcnJvciA9IGRlZmF1bHRTdWJzY3JpcHRpb25PYnNlcnZlckVycm9yQ2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7IH1cbiAgICAgICAgICAgIHZhciBmaXJzdCA9ICFfdGhpcy5vYnNlcnZlcnMuc2l6ZTtcbiAgICAgICAgICAgIF90aGlzLm9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgdmFyIGxhc3QgPSBfdGhpcy5sYXN0O1xuICAgICAgICAgICAgaWYgKGxhc3QgJiYgbGFzdC5lcnJvcikge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yICYmIG9ic2VydmVyLmVycm9yKGxhc3QuZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobGFzdCAmJiBsYXN0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQgJiYgb2JzZXJ2ZXIubmV4dChsYXN0LnJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW9ic2VydmUoKS5jYXRjaChmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMub2JzZXJ2ZXJzLmRlbGV0ZShvYnNlcnZlcikgJiYgIV90aGlzLm9ic2VydmVycy5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRlYXJEb3duUXVlcnkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLmlzVG9ybkRvd24gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIF90aGlzLnF1ZXJ5SWQgPSBxdWVyeUluZm8ucXVlcnlJZCB8fCBxdWVyeU1hbmFnZXIuZ2VuZXJhdGVRdWVyeUlkKCk7XG4gICAgICAgIHZhciBvcERlZiA9IHV0aWxpdGllcy5nZXRPcGVyYXRpb25EZWZpbml0aW9uKG9wdGlvbnMucXVlcnkpO1xuICAgICAgICBfdGhpcy5xdWVyeU5hbWUgPSBvcERlZiAmJiBvcERlZi5uYW1lICYmIG9wRGVmLm5hbWUudmFsdWU7XG4gICAgICAgIF90aGlzLmluaXRpYWxGZXRjaFBvbGljeSA9IG9wdGlvbnMuZmV0Y2hQb2xpY3kgfHwgXCJjYWNoZS1maXJzdFwiO1xuICAgICAgICBfdGhpcy5xdWVyeU1hbmFnZXIgPSBxdWVyeU1hbmFnZXI7XG4gICAgICAgIF90aGlzLnF1ZXJ5SW5mbyA9IHF1ZXJ5SW5mbztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZSwgXCJ2YXJpYWJsZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudmFyaWFibGVzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLm9ic2VydmVycy5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5xdWVyeU1hbmFnZXIucmVtb3ZlUXVlcnkoX3RoaXMucXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBfdGhpcy5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuZ2V0Q3VycmVudFJlc3VsdCA9IGZ1bmN0aW9uIChzYXZlQXNMYXN0UmVzdWx0KSB7XG4gICAgICAgIGlmIChzYXZlQXNMYXN0UmVzdWx0ID09PSB2b2lkIDApIHsgc2F2ZUFzTGFzdFJlc3VsdCA9IHRydWU7IH1cbiAgICAgICAgdmFyIGxhc3RSZXN1bHQgPSB0aGlzLmdldExhc3RSZXN1bHQodHJ1ZSk7XG4gICAgICAgIHZhciBuZXR3b3JrU3RhdHVzID0gdGhpcy5xdWVyeUluZm8ubmV0d29ya1N0YXR1cyB8fFxuICAgICAgICAgICAgKGxhc3RSZXN1bHQgJiYgbGFzdFJlc3VsdC5uZXR3b3JrU3RhdHVzKSB8fFxuICAgICAgICAgICAgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnJlYWR5O1xuICAgICAgICB2YXIgcmVzdWx0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGxhc3RSZXN1bHQpLCB7IGxvYWRpbmc6IGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodChuZXR3b3JrU3RhdHVzKSwgbmV0d29ya1N0YXR1czogbmV0d29ya1N0YXR1cyB9KTtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5vcHRpb25zLmZldGNoUG9saWN5LCBmZXRjaFBvbGljeSA9IF9hID09PSB2b2lkIDAgPyBcImNhY2hlLWZpcnN0XCIgOiBfYTtcbiAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgZmV0Y2hQb2xpY3kgPT09ICduby1jYWNoZScgfHxcbiAgICAgICAgICAgIGZldGNoUG9saWN5ID09PSAnc3RhbmRieScgfHxcbiAgICAgICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLnRyYW5zZm9ybSh0aGlzLm9wdGlvbnMucXVlcnkpLmhhc0ZvcmNlZFJlc29sdmVycykgO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkaWZmID0gdGhpcy5xdWVyeUluZm8uZ2V0RGlmZigpO1xuICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUgfHwgdGhpcy5vcHRpb25zLnJldHVyblBhcnRpYWxEYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSBkaWZmLnJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcXVhbGl0eS5lcXVhbChyZXN1bHQuZGF0YSwge30pKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHQucGFydGlhbDtcbiAgICAgICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSAmJlxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgKGZldGNoUG9saWN5ID09PSAnY2FjaGUtZmlyc3QnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ2NhY2hlLW9ubHknKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQubmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5yZWFkeTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucGFydGlhbCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX19ERVZfXyAmJlxuICAgICAgICAgICAgICAgICFkaWZmLmNvbXBsZXRlICYmXG4gICAgICAgICAgICAgICAgIXRoaXMub3B0aW9ucy5wYXJ0aWFsUmVmZXRjaCAmJlxuICAgICAgICAgICAgICAgICFyZXN1bHQubG9hZGluZyAmJlxuICAgICAgICAgICAgICAgICFyZXN1bHQuZGF0YSAmJlxuICAgICAgICAgICAgICAgICFyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBsb2dNaXNzaW5nRmllbGRFcnJvcnMoZGlmZi5taXNzaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2F2ZUFzTGFzdFJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMYXN0UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuaXNEaWZmZXJlbnRGcm9tTGFzdFJlc3VsdCA9IGZ1bmN0aW9uIChuZXdSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmxhc3QgfHwgIWVxdWFsaXR5LmVxdWFsKHRoaXMubGFzdC5yZXN1bHQsIG5ld1Jlc3VsdCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmdldExhc3QgPSBmdW5jdGlvbiAoa2V5LCB2YXJpYWJsZXNNdXN0TWF0Y2gpIHtcbiAgICAgICAgdmFyIGxhc3QgPSB0aGlzLmxhc3Q7XG4gICAgICAgIGlmIChsYXN0ICYmXG4gICAgICAgICAgICBsYXN0W2tleV0gJiZcbiAgICAgICAgICAgICghdmFyaWFibGVzTXVzdE1hdGNoIHx8IGVxdWFsaXR5LmVxdWFsKGxhc3QudmFyaWFibGVzLCB0aGlzLnZhcmlhYmxlcykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFzdFtrZXldO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmdldExhc3RSZXN1bHQgPSBmdW5jdGlvbiAodmFyaWFibGVzTXVzdE1hdGNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldExhc3QoXCJyZXN1bHRcIiwgdmFyaWFibGVzTXVzdE1hdGNoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuZ2V0TGFzdEVycm9yID0gZnVuY3Rpb24gKHZhcmlhYmxlc011c3RNYXRjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRMYXN0KFwiZXJyb3JcIiwgdmFyaWFibGVzTXVzdE1hdGNoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVzZXRMYXN0UmVzdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubGFzdDtcbiAgICAgICAgdGhpcy5pc1Rvcm5Eb3duID0gZmFsc2U7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlc2V0UXVlcnlTdG9yZUVycm9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIucmVzZXRFcnJvcnModGhpcy5xdWVyeUlkKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVmZXRjaCA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgcmVvYnNlcnZlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHBvbGxJbnRlcnZhbDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGZldGNoUG9saWN5ID0gdGhpcy5vcHRpb25zLmZldGNoUG9saWN5O1xuICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgPT09ICdzdGFuZGJ5JyB8fCBmZXRjaFBvbGljeSA9PT0gJ2NhY2hlLWFuZC1uZXR3b3JrJykge1xuICAgICAgICAgICAgcmVvYnNlcnZlT3B0aW9ucy5mZXRjaFBvbGljeSA9IGZldGNoUG9saWN5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnKSB7XG4gICAgICAgICAgICByZW9ic2VydmVPcHRpb25zLmZldGNoUG9saWN5ID0gJ25vLWNhY2hlJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlb2JzZXJ2ZU9wdGlvbnMuZmV0Y2hQb2xpY3kgPSAnbmV0d29yay1vbmx5JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19ERVZfXyAmJiB2YXJpYWJsZXMgJiYgaGFzT3duUHJvcGVydHkkMS5jYWxsKHZhcmlhYmxlcywgXCJ2YXJpYWJsZXNcIikpIHtcbiAgICAgICAgICAgIHZhciBxdWVyeURlZiA9IHV0aWxpdGllcy5nZXRRdWVyeURlZmluaXRpb24odGhpcy5vcHRpb25zLnF1ZXJ5KTtcbiAgICAgICAgICAgIHZhciB2YXJzID0gcXVlcnlEZWYudmFyaWFibGVEZWZpbml0aW9ucztcbiAgICAgICAgICAgIGlmICghdmFycyB8fCAhdmFycy5zb21lKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2LnZhcmlhYmxlLm5hbWUudmFsdWUgPT09IFwidmFyaWFibGVzXCI7IH0pKSB7XG4gICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiQ2FsbGVkIHJlZmV0Y2goXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHZhcmlhYmxlcyksIFwiKSBmb3IgcXVlcnkgXCIpLmNvbmNhdCgoKF9hID0gcXVlcnlEZWYubmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhbHVlKSB8fCBKU09OLnN0cmluZ2lmeShxdWVyeURlZiksIFwiLCB3aGljaCBkb2VzIG5vdCBkZWNsYXJlIGEgJHZhcmlhYmxlcyB2YXJpYWJsZS5cXG5EaWQgeW91IG1lYW4gdG8gY2FsbCByZWZldGNoKHZhcmlhYmxlcykgaW5zdGVhZCBvZiByZWZldGNoKHsgdmFyaWFibGVzIH0pP1wiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhcmlhYmxlcyAmJiAhZXF1YWxpdHkuZXF1YWwodGhpcy5vcHRpb25zLnZhcmlhYmxlcywgdmFyaWFibGVzKSkge1xuICAgICAgICAgICAgcmVvYnNlcnZlT3B0aW9ucy52YXJpYWJsZXMgPSB0aGlzLm9wdGlvbnMudmFyaWFibGVzID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy52YXJpYWJsZXMpLCB2YXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVlcnlJbmZvLnJlc2V0TGFzdFdyaXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlb2JzZXJ2ZShyZW9ic2VydmVPcHRpb25zLCBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVmZXRjaCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmZldGNoTW9yZSA9IGZ1bmN0aW9uIChmZXRjaE1vcmVPcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjb21iaW5lZE9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgKGZldGNoTW9yZU9wdGlvbnMucXVlcnkgPyBmZXRjaE1vcmVPcHRpb25zIDogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucyksIGZldGNoTW9yZU9wdGlvbnMpLCB7IHZhcmlhYmxlczogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy52YXJpYWJsZXMpLCBmZXRjaE1vcmVPcHRpb25zLnZhcmlhYmxlcykgfSkpKSwgeyBmZXRjaFBvbGljeTogXCJuby1jYWNoZVwiIH0pO1xuICAgICAgICB2YXIgcWlkID0gdGhpcy5xdWVyeU1hbmFnZXIuZ2VuZXJhdGVRdWVyeUlkKCk7XG4gICAgICAgIGlmIChjb21iaW5lZE9wdGlvbnMubm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmZldGNoTW9yZTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5mZXRjaFF1ZXJ5KHFpZCwgY29tYmluZWRPcHRpb25zLCBleHBvcnRzLk5ldHdvcmtTdGF0dXMuZmV0Y2hNb3JlKS50aGVuKGZ1bmN0aW9uIChmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gZmV0Y2hNb3JlUmVzdWx0LmRhdGE7XG4gICAgICAgICAgICB2YXIgdXBkYXRlUXVlcnkgPSBmZXRjaE1vcmVPcHRpb25zLnVwZGF0ZVF1ZXJ5O1xuICAgICAgICAgICAgaWYgKHVwZGF0ZVF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9fREVWX18gJiZcbiAgICAgICAgICAgICAgICAgICAgIXdhcm5lZEFib3V0VXBkYXRlUXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiVGhlIHVwZGF0ZVF1ZXJ5IGNhbGxiYWNrIGZvciBmZXRjaE1vcmUgaXMgZGVwcmVjYXRlZCwgYW5kIHdpbGwgYmUgcmVtb3ZlZFxcbmluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgQXBvbGxvIENsaWVudC5cXG5cXG5QbGVhc2UgY29udmVydCB1cGRhdGVRdWVyeSBmdW5jdGlvbnMgdG8gZmllbGQgcG9saWNpZXMgd2l0aCBhcHByb3ByaWF0ZVxcbnJlYWQgYW5kIG1lcmdlIGZ1bmN0aW9ucywgb3IgdXNlL2FkYXB0IGEgaGVscGVyIGZ1bmN0aW9uIChzdWNoIGFzXFxuY29uY2F0UGFnaW5hdGlvbiwgb2Zmc2V0TGltaXRQYWdpbmF0aW9uLCBvciByZWxheVN0eWxlUGFnaW5hdGlvbikgZnJvbVxcbkBhcG9sbG8vY2xpZW50L3V0aWxpdGllcy5cXG5cXG5UaGUgZmllbGQgcG9saWN5IHN5c3RlbSBoYW5kbGVzIHBhZ2luYXRpb24gbW9yZSBlZmZlY3RpdmVseSB0aGFuIGFcXG5oYW5kLXdyaXR0ZW4gdXBkYXRlUXVlcnkgZnVuY3Rpb24sIGFuZCB5b3Ugb25seSBuZWVkIHRvIGRlZmluZSB0aGUgcG9saWN5XFxub25jZSwgcmF0aGVyIHRoYW4gZXZlcnkgdGltZSB5b3UgY2FsbCBmZXRjaE1vcmUuXCIpO1xuICAgICAgICAgICAgICAgICAgICB3YXJuZWRBYm91dFVwZGF0ZVF1ZXJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkoZnVuY3Rpb24gKHByZXZpb3VzKSB7IHJldHVybiB1cGRhdGVRdWVyeShwcmV2aW91cywge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaE1vcmVSZXN1bHQ6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogY29tYmluZWRPcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5xdWVyeU1hbmFnZXIuY2FjaGUud3JpdGVRdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBjb21iaW5lZE9wdGlvbnMucXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogY29tYmluZWRPcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmZXRjaE1vcmVSZXN1bHQ7XG4gICAgICAgIH0pLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucXVlcnlNYW5hZ2VyLnN0b3BRdWVyeShxaWQpO1xuICAgICAgICAgICAgX3RoaXMucmVvYnNlcnZlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5zdWJzY3JpYmVUb01vcmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5xdWVyeU1hbmFnZXJcbiAgICAgICAgICAgIC5zdGFydEdyYXBoUUxTdWJzY3JpcHRpb24oe1xuICAgICAgICAgICAgcXVlcnk6IG9wdGlvbnMuZG9jdW1lbnQsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDogb3B0aW9ucy5jb250ZXh0LFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVRdWVyeSA9IG9wdGlvbnMudXBkYXRlUXVlcnk7XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZVF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KGZ1bmN0aW9uIChwcmV2aW91cywgX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlUXVlcnkocHJldmlvdXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25EYXRhOiBzdWJzY3JpcHRpb25EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbkVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5lcnJvcignVW5oYW5kbGVkIEdyYXBoUUwgc3Vic2NyaXB0aW9uIGVycm9yJywgZXJyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuc3Vic2NyaXB0aW9ucy5kZWxldGUoc3Vic2NyaXB0aW9uKSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24gKG5ld09wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVvYnNlcnZlKG5ld09wdGlvbnMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5zZXRWYXJpYWJsZXMgPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgIGlmIChlcXVhbGl0eS5lcXVhbCh0aGlzLnZhcmlhYmxlcywgdmFyaWFibGVzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzLnNpemVcbiAgICAgICAgICAgICAgICA/IHRoaXMucmVzdWx0KClcbiAgICAgICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgICAgIGlmICghdGhpcy5vYnNlcnZlcnMuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlb2JzZXJ2ZSh7XG4gICAgICAgICAgICBmZXRjaFBvbGljeTogdGhpcy5pbml0aWFsRmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgfSwgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnNldFZhcmlhYmxlcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnVwZGF0ZVF1ZXJ5ID0gZnVuY3Rpb24gKG1hcEZuKSB7XG4gICAgICAgIHZhciBxdWVyeU1hbmFnZXIgPSB0aGlzLnF1ZXJ5TWFuYWdlcjtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHF1ZXJ5TWFuYWdlci5jYWNoZS5kaWZmKHtcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLm9wdGlvbnMucXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHRoaXMudmFyaWFibGVzLFxuICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgfSkucmVzdWx0O1xuICAgICAgICB2YXIgbmV3UmVzdWx0ID0gbWFwRm4ocmVzdWx0LCB7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHRoaXMudmFyaWFibGVzLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5ld1Jlc3VsdCkge1xuICAgICAgICAgICAgcXVlcnlNYW5hZ2VyLmNhY2hlLndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLm9wdGlvbnMucXVlcnksXG4gICAgICAgICAgICAgICAgZGF0YTogbmV3UmVzdWx0LFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdGhpcy52YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHF1ZXJ5TWFuYWdlci5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc3RhcnRQb2xsaW5nID0gZnVuY3Rpb24gKHBvbGxJbnRlcnZhbCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMucG9sbEludGVydmFsID0gcG9sbEludGVydmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvbGxpbmcoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc3RvcFBvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5wb2xsSW50ZXJ2YWwgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvbGxpbmcoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAob3B0aW9ucywgbmV3TmV0d29ya1N0YXR1cykge1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci5zZXRPYnNlcnZhYmxlUXVlcnkodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5mZXRjaFF1ZXJ5T2JzZXJ2YWJsZSh0aGlzLnF1ZXJ5SWQsIG9wdGlvbnMsIG5ld05ldHdvcmtTdGF0dXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS51cGRhdGVQb2xsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5xdWVyeU1hbmFnZXIuc3NyTW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIHBvbGxpbmdJbmZvID0gX2EucG9sbGluZ0luZm8sIHBvbGxJbnRlcnZhbCA9IF9hLm9wdGlvbnMucG9sbEludGVydmFsO1xuICAgICAgICBpZiAoIXBvbGxJbnRlcnZhbCkge1xuICAgICAgICAgICAgaWYgKHBvbGxpbmdJbmZvKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHBvbGxpbmdJbmZvLnRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBvbGxpbmdJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb2xsaW5nSW5mbyAmJlxuICAgICAgICAgICAgcG9sbGluZ0luZm8uaW50ZXJ2YWwgPT09IHBvbGxJbnRlcnZhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChwb2xsSW50ZXJ2YWwsICdBdHRlbXB0ZWQgdG8gc3RhcnQgYSBwb2xsaW5nIHF1ZXJ5IHdpdGhvdXQgYSBwb2xsaW5nIGludGVydmFsLicpIDogZ2xvYmFscy5pbnZhcmlhbnQocG9sbEludGVydmFsLCAxMCk7XG4gICAgICAgIHZhciBpbmZvID0gcG9sbGluZ0luZm8gfHwgKHRoaXMucG9sbGluZ0luZm8gPSB7fSk7XG4gICAgICAgIGluZm8uaW50ZXJ2YWwgPSBwb2xsSW50ZXJ2YWw7XG4gICAgICAgIHZhciBtYXliZUZldGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnBvbGxpbmdJbmZvKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQoX3RoaXMucXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlb2JzZXJ2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogXCJuZXR3b3JrLW9ubHlcIixcbiAgICAgICAgICAgICAgICAgICAgfSwgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnBvbGwpLnRoZW4ocG9sbCwgcG9sbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb2xsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbmZvID0gX3RoaXMucG9sbGluZ0luZm87XG4gICAgICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChpbmZvLnRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIGluZm8udGltZW91dCA9IHNldFRpbWVvdXQobWF5YmVGZXRjaCwgaW5mby5pbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHBvbGwoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUudXBkYXRlTGFzdFJlc3VsdCA9IGZ1bmN0aW9uIChuZXdSZXN1bHQsIHZhcmlhYmxlcykge1xuICAgICAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7IH1cbiAgICAgICAgdGhpcy5sYXN0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMubGFzdCksIHsgcmVzdWx0OiB0aGlzLnF1ZXJ5TWFuYWdlci5hc3N1bWVJbW11dGFibGVSZXN1bHRzXG4gICAgICAgICAgICAgICAgPyBuZXdSZXN1bHRcbiAgICAgICAgICAgICAgICA6IHV0aWxpdGllcy5jbG9uZURlZXAobmV3UmVzdWx0KSwgdmFyaWFibGVzOiB2YXJpYWJsZXMgfSk7XG4gICAgICAgIGlmICghdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShuZXdSZXN1bHQuZXJyb3JzKSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGFzdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZW9ic2VydmUgPSBmdW5jdGlvbiAobmV3T3B0aW9ucywgbmV3TmV0d29ya1N0YXR1cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmlzVG9ybkRvd24gPSBmYWxzZTtcbiAgICAgICAgdmFyIHVzZURpc3Bvc2FibGVDb25jYXN0ID0gbmV3TmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnJlZmV0Y2ggfHxcbiAgICAgICAgICAgIG5ld05ldHdvcmtTdGF0dXMgPT09IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5mZXRjaE1vcmUgfHxcbiAgICAgICAgICAgIG5ld05ldHdvcmtTdGF0dXMgPT09IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5wb2xsO1xuICAgICAgICB2YXIgb2xkVmFyaWFibGVzID0gdGhpcy5vcHRpb25zLnZhcmlhYmxlcztcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB1c2VEaXNwb3NhYmxlQ29uY2FzdFxuICAgICAgICAgICAgPyB1dGlsaXRpZXMuY29tcGFjdCh0aGlzLm9wdGlvbnMsIG5ld09wdGlvbnMpXG4gICAgICAgICAgICA6IGFzc2lnbih0aGlzLm9wdGlvbnMsIHV0aWxpdGllcy5jb21wYWN0KG5ld09wdGlvbnMpKTtcbiAgICAgICAgaWYgKCF1c2VEaXNwb3NhYmxlQ29uY2FzdCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQb2xsaW5nKCk7XG4gICAgICAgICAgICBpZiAobmV3T3B0aW9ucyAmJlxuICAgICAgICAgICAgICAgIG5ld09wdGlvbnMudmFyaWFibGVzICYmXG4gICAgICAgICAgICAgICAgIW5ld09wdGlvbnMuZmV0Y2hQb2xpY3kgJiZcbiAgICAgICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwobmV3T3B0aW9ucy52YXJpYWJsZXMsIG9sZFZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID0gdGhpcy5pbml0aWFsRmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICAgICAgaWYgKG5ld05ldHdvcmtTdGF0dXMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdOZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnNldFZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhcmlhYmxlcyA9IG9wdGlvbnMudmFyaWFibGVzICYmIHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zLnZhcmlhYmxlcyk7XG4gICAgICAgIHZhciBjb25jYXN0ID0gdGhpcy5mZXRjaChvcHRpb25zLCBuZXdOZXR3b3JrU3RhdHVzKTtcbiAgICAgICAgdmFyIG9ic2VydmVyID0ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlcG9ydFJlc3VsdChyZXN1bHQsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlcG9ydEVycm9yKGVycm9yLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF1c2VEaXNwb3NhYmxlQ29uY2FzdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2FzdCAmJiB0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25jYXN0LnJlbW92ZU9ic2VydmVyKHRoaXMub2JzZXJ2ZXIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb25jYXN0ID0gY29uY2FzdDtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgICAgfVxuICAgICAgICBjb25jYXN0LmFkZE9ic2VydmVyKG9ic2VydmVyKTtcbiAgICAgICAgcmV0dXJuIGNvbmNhc3QucHJvbWlzZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXBvcnRSZXN1bHQodGhpcy5nZXRDdXJyZW50UmVzdWx0KGZhbHNlKSwgdGhpcy52YXJpYWJsZXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZXBvcnRSZXN1bHQgPSBmdW5jdGlvbiAocmVzdWx0LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TGFzdEVycm9yKCkgfHwgdGhpcy5pc0RpZmZlcmVudEZyb21MYXN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFzdFJlc3VsdChyZXN1bHQsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICB1dGlsaXRpZXMuaXRlcmF0ZU9ic2VydmVyc1NhZmVseSh0aGlzLm9ic2VydmVycywgJ25leHQnLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlcG9ydEVycm9yID0gZnVuY3Rpb24gKGVycm9yLCB2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIGVycm9yUmVzdWx0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMuZ2V0TGFzdFJlc3VsdCgpKSwgeyBlcnJvcjogZXJyb3IsIGVycm9yczogZXJyb3IuZ3JhcGhRTEVycm9ycywgbmV0d29ya1N0YXR1czogZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmVycm9yLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVMYXN0UmVzdWx0KGVycm9yUmVzdWx0LCB2YXJpYWJsZXMpO1xuICAgICAgICB1dGlsaXRpZXMuaXRlcmF0ZU9ic2VydmVyc1NhZmVseSh0aGlzLm9ic2VydmVycywgJ2Vycm9yJywgdGhpcy5sYXN0LmVycm9yID0gZXJyb3IpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5oYXNPYnNlcnZlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVycy5zaXplID4gMDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUudGVhckRvd25RdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUb3JuRG93bilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuY29uY2FzdCAmJiB0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmNhc3QucmVtb3ZlT2JzZXJ2ZXIodGhpcy5vYnNlcnZlcik7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jb25jYXN0O1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMub2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wUG9sbGluZygpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIudW5zdWJzY3JpYmUoKTsgfSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5jbGVhcigpO1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci5zdG9wUXVlcnkodGhpcy5xdWVyeUlkKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5pc1Rvcm5Eb3duID0gdHJ1ZTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlUXVlcnk7XG59KHV0aWxpdGllcy5PYnNlcnZhYmxlKSk7XG51dGlsaXRpZXMuZml4T2JzZXJ2YWJsZVN1YmNsYXNzKE9ic2VydmFibGVRdWVyeSk7XG5mdW5jdGlvbiBkZWZhdWx0U3Vic2NyaXB0aW9uT2JzZXJ2ZXJFcnJvckNhbGxiYWNrKGVycm9yKSB7XG4gICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5lcnJvcignVW5oYW5kbGVkIGVycm9yJywgZXJyb3IubWVzc2FnZSwgZXJyb3Iuc3RhY2spO1xufVxuZnVuY3Rpb24gbG9nTWlzc2luZ0ZpZWxkRXJyb3JzKG1pc3NpbmcpIHtcbiAgICBpZiAoX19ERVZfXyAmJiBtaXNzaW5nKSB7XG4gICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQuZGVidWcoXCJNaXNzaW5nIGNhY2hlIHJlc3VsdCBmaWVsZHM6IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShtaXNzaW5nKSksIG1pc3NpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5TmV4dEZldGNoUG9saWN5KG9wdGlvbnMpIHtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmZldGNoUG9saWN5LCBmZXRjaFBvbGljeSA9IF9hID09PSB2b2lkIDAgPyBcImNhY2hlLWZpcnN0XCIgOiBfYSwgbmV4dEZldGNoUG9saWN5ID0gb3B0aW9ucy5uZXh0RmV0Y2hQb2xpY3k7XG4gICAgaWYgKG5leHRGZXRjaFBvbGljeSkge1xuICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID0gdHlwZW9mIG5leHRGZXRjaFBvbGljeSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IG5leHRGZXRjaFBvbGljeS5jYWxsKG9wdGlvbnMsIGZldGNoUG9saWN5KVxuICAgICAgICAgICAgOiBuZXh0RmV0Y2hQb2xpY3k7XG4gICAgfVxufVxuXG52YXIgTG9jYWxTdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9jYWxTdGF0ZShfYSkge1xuICAgICAgICB2YXIgY2FjaGUgPSBfYS5jYWNoZSwgY2xpZW50ID0gX2EuY2xpZW50LCByZXNvbHZlcnMgPSBfYS5yZXNvbHZlcnMsIGZyYWdtZW50TWF0Y2hlciA9IF9hLmZyYWdtZW50TWF0Y2hlcjtcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgICAgICBpZiAoY2xpZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFJlc29sdmVycyhyZXNvbHZlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcmFnbWVudE1hdGNoZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RnJhZ21lbnRNYXRjaGVyKGZyYWdtZW50TWF0Y2hlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuYWRkUmVzb2x2ZXJzID0gZnVuY3Rpb24gKHJlc29sdmVycykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IHRoaXMucmVzb2x2ZXJzIHx8IHt9O1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNvbHZlcnMpKSB7XG4gICAgICAgICAgICByZXNvbHZlcnMuZm9yRWFjaChmdW5jdGlvbiAocmVzb2x2ZXJHcm91cCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmVycyA9IHV0aWxpdGllcy5tZXJnZURlZXAoX3RoaXMucmVzb2x2ZXJzLCByZXNvbHZlckdyb3VwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSB1dGlsaXRpZXMubWVyZ2VEZWVwKHRoaXMucmVzb2x2ZXJzLCByZXNvbHZlcnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5zZXRSZXNvbHZlcnMgPSBmdW5jdGlvbiAocmVzb2x2ZXJzKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzID0ge307XG4gICAgICAgIHRoaXMuYWRkUmVzb2x2ZXJzKHJlc29sdmVycyk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5nZXRSZXNvbHZlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVycyB8fCB7fTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnJ1blJlc29sdmVycyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgZG9jdW1lbnQgPSBfYS5kb2N1bWVudCwgcmVtb3RlUmVzdWx0ID0gX2EucmVtb3RlUmVzdWx0LCBjb250ZXh0ID0gX2EuY29udGV4dCwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBfYiA9IF9hLm9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMsIG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYjtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVzb2x2ZURvY3VtZW50KGRvY3VtZW50LCByZW1vdGVSZXN1bHQuZGF0YSwgY29udGV4dCwgdmFyaWFibGVzLCB0aGlzLmZyYWdtZW50TWF0Y2hlciwgb25seVJ1bkZvcmNlZFJlc29sdmVycykudGhlbihmdW5jdGlvbiAobG9jYWxSZXN1bHQpIHsgcmV0dXJuICh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgcmVtb3RlUmVzdWx0KSwgeyBkYXRhOiBsb2NhbFJlc3VsdC5yZXN1bHQgfSkpOyB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgcmVtb3RlUmVzdWx0XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnNldEZyYWdtZW50TWF0Y2hlciA9IGZ1bmN0aW9uIChmcmFnbWVudE1hdGNoZXIpIHtcbiAgICAgICAgdGhpcy5mcmFnbWVudE1hdGNoZXIgPSBmcmFnbWVudE1hdGNoZXI7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5nZXRGcmFnbWVudE1hdGNoZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZyYWdtZW50TWF0Y2hlcjtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmNsaWVudFF1ZXJ5ID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaGFzRGlyZWN0aXZlcyhbJ2NsaWVudCddLCBkb2N1bWVudCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc29sdmVycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnNlcnZlclF1ZXJ5ID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiB1dGlsaXRpZXMucmVtb3ZlQ2xpZW50U2V0c0Zyb21Eb2N1bWVudChkb2N1bWVudCk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5wcmVwYXJlQ29udGV4dCA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIHsgY2FjaGU6IGNhY2hlLCBnZXRDYWNoZUtleTogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZS5pZGVudGlmeShvYmopO1xuICAgICAgICAgICAgfSB9KTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmFkZEV4cG9ydGVkVmFyaWFibGVzID0gZnVuY3Rpb24gKGRvY3VtZW50LCB2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHt9OyB9XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlc29sdmVEb2N1bWVudChkb2N1bWVudCwgdGhpcy5idWlsZFJvb3RWYWx1ZUZyb21DYWNoZShkb2N1bWVudCwgdmFyaWFibGVzKSB8fCB7fSwgdGhpcy5wcmVwYXJlQ29udGV4dChjb250ZXh0KSwgdmFyaWFibGVzKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiAodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHZhcmlhYmxlcyksIGRhdGEuZXhwb3J0ZWRWYXJpYWJsZXMpKTsgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRzbGliLl9fYXNzaWduKHt9LCB2YXJpYWJsZXMpXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnNob3VsZEZvcmNlUmVzb2x2ZXJzID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHZhciBmb3JjZVJlc29sdmVycyA9IGZhbHNlO1xuICAgICAgICBncmFwaHFsLnZpc2l0KGRvY3VtZW50LCB7XG4gICAgICAgICAgICBEaXJlY3RpdmU6IHtcbiAgICAgICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubmFtZS52YWx1ZSA9PT0gJ2NsaWVudCcgJiYgbm9kZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlUmVzb2x2ZXJzID0gbm9kZS5hcmd1bWVudHMuc29tZShmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZy5uYW1lLnZhbHVlID09PSAnYWx3YXlzJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmcudmFsdWUua2luZCA9PT0gJ0Jvb2xlYW5WYWx1ZScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnLnZhbHVlLnZhbHVlID09PSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9yY2VSZXNvbHZlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JhcGhxbC5CUkVBSztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvcmNlUmVzb2x2ZXJzO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuYnVpbGRSb290VmFsdWVGcm9tQ2FjaGUgPSBmdW5jdGlvbiAoZG9jdW1lbnQsIHZhcmlhYmxlcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5kaWZmKHtcbiAgICAgICAgICAgIHF1ZXJ5OiB1dGlsaXRpZXMuYnVpbGRRdWVyeUZyb21TZWxlY3Rpb25TZXQoZG9jdW1lbnQpLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICB9KS5yZXN1bHQ7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5yZXNvbHZlRG9jdW1lbnQgPSBmdW5jdGlvbiAoZG9jdW1lbnQsIHJvb3RWYWx1ZSwgY29udGV4dCwgdmFyaWFibGVzLCBmcmFnbWVudE1hdGNoZXIsIG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMpIHtcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0ge307IH1cbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHt9OyB9XG4gICAgICAgIGlmIChmcmFnbWVudE1hdGNoZXIgPT09IHZvaWQgMCkgeyBmcmFnbWVudE1hdGNoZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9OyB9XG4gICAgICAgIGlmIChvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzID09PSB2b2lkIDApIHsgb25seVJ1bkZvcmNlZFJlc29sdmVycyA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtYWluRGVmaW5pdGlvbiwgZnJhZ21lbnRzLCBmcmFnbWVudE1hcCwgZGVmaW5pdGlvbk9wZXJhdGlvbiwgZGVmYXVsdE9wZXJhdGlvblR5cGUsIF9hLCBjYWNoZSwgY2xpZW50LCBleGVjQ29udGV4dDtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBtYWluRGVmaW5pdGlvbiA9IHV0aWxpdGllcy5nZXRNYWluRGVmaW5pdGlvbihkb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRzID0gdXRpbGl0aWVzLmdldEZyYWdtZW50RGVmaW5pdGlvbnMoZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwID0gdXRpbGl0aWVzLmNyZWF0ZUZyYWdtZW50TWFwKGZyYWdtZW50cyk7XG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbk9wZXJhdGlvbiA9IG1haW5EZWZpbml0aW9uXG4gICAgICAgICAgICAgICAgICAgIC5vcGVyYXRpb247XG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wZXJhdGlvblR5cGUgPSBkZWZpbml0aW9uT3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgID8gZGVmaW5pdGlvbk9wZXJhdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uT3BlcmF0aW9uLnNsaWNlKDEpXG4gICAgICAgICAgICAgICAgICAgIDogJ1F1ZXJ5JztcbiAgICAgICAgICAgICAgICBfYSA9IHRoaXMsIGNhY2hlID0gX2EuY2FjaGUsIGNsaWVudCA9IF9hLmNsaWVudDtcbiAgICAgICAgICAgICAgICBleGVjQ29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRNYXA6IGZyYWdtZW50TWFwLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIHsgY2FjaGU6IGNhY2hlLCBjbGllbnQ6IGNsaWVudCB9KSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50TWF0Y2hlcjogZnJhZ21lbnRNYXRjaGVyLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0T3BlcmF0aW9uVHlwZTogZGVmYXVsdE9wZXJhdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydGVkVmFyaWFibGVzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgb25seVJ1bkZvcmNlZFJlc29sdmVyczogb25seVJ1bkZvcmNlZFJlc29sdmVycyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlU2VsZWN0aW9uU2V0KG1haW5EZWZpbml0aW9uLnNlbGVjdGlvblNldCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRlZFZhcmlhYmxlczogZXhlY0NvbnRleHQuZXhwb3J0ZWRWYXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pOyB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5yZXNvbHZlU2VsZWN0aW9uU2V0ID0gZnVuY3Rpb24gKHNlbGVjdGlvblNldCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkge1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnRNYXAsIGNvbnRleHQsIHZhcmlhYmxlcywgcmVzdWx0c1RvTWVyZ2UsIGV4ZWN1dGU7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwID0gZXhlY0NvbnRleHQuZnJhZ21lbnRNYXAsIGNvbnRleHQgPSBleGVjQ29udGV4dC5jb250ZXh0LCB2YXJpYWJsZXMgPSBleGVjQ29udGV4dC52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgcmVzdWx0c1RvTWVyZ2UgPSBbcm9vdFZhbHVlXTtcbiAgICAgICAgICAgICAgICBleGVjdXRlID0gZnVuY3Rpb24gKHNlbGVjdGlvbikgeyByZXR1cm4gdHNsaWIuX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZnJhZ21lbnQsIHR5cGVDb25kaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXRpbGl0aWVzLnNob3VsZEluY2x1ZGUoc2VsZWN0aW9uLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlc29sdmVGaWVsZChzZWxlY3Rpb24sIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpLnRoZW4oZnVuY3Rpb24gKGZpZWxkUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkUmVzdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNUb01lcmdlLnB1c2goKF9hID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hW3V0aWxpdGllcy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkKHNlbGVjdGlvbildID0gZmllbGRSZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNJbmxpbmVGcmFnbWVudChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgPSBzZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGZyYWdtZW50TWFwW3NlbGVjdGlvbi5uYW1lLnZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnQsIFwiTm8gZnJhZ21lbnQgbmFtZWQgXCIuY29uY2F0KHNlbGVjdGlvbi5uYW1lLnZhbHVlKSkgOiBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudCwgOSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnQgJiYgZnJhZ21lbnQudHlwZUNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVDb25kaXRpb24gPSBmcmFnbWVudC50eXBlQ29uZGl0aW9uLm5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4ZWNDb250ZXh0LmZyYWdtZW50TWF0Y2hlcihyb290VmFsdWUsIHR5cGVDb25kaXRpb24sIGNvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlU2VsZWN0aW9uU2V0KGZyYWdtZW50LnNlbGVjdGlvblNldCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkudGhlbihmdW5jdGlvbiAoZnJhZ21lbnRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzVG9NZXJnZS5wdXNoKGZyYWdtZW50UmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTsgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIFByb21pc2UuYWxsKHNlbGVjdGlvblNldC5zZWxlY3Rpb25zLm1hcChleGVjdXRlKSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbGl0aWVzLm1lcmdlRGVlcEFycmF5KHJlc3VsdHNUb01lcmdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZUZpZWxkID0gZnVuY3Rpb24gKGZpZWxkLCByb290VmFsdWUsIGV4ZWNDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YXJpYWJsZXMsIGZpZWxkTmFtZSwgYWxpYXNlZEZpZWxkTmFtZSwgYWxpYXNVc2VkLCBkZWZhdWx0UmVzdWx0LCByZXN1bHRQcm9taXNlLCByZXNvbHZlclR5cGUsIHJlc29sdmVyTWFwLCByZXNvbHZlO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMgPSBleGVjQ29udGV4dC52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgZmllbGROYW1lID0gZmllbGQubmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBhbGlhc2VkRmllbGROYW1lID0gdXRpbGl0aWVzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQoZmllbGQpO1xuICAgICAgICAgICAgICAgIGFsaWFzVXNlZCA9IGZpZWxkTmFtZSAhPT0gYWxpYXNlZEZpZWxkTmFtZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0UmVzdWx0ID0gcm9vdFZhbHVlW2FsaWFzZWRGaWVsZE5hbWVdIHx8IHJvb3RWYWx1ZVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIHJlc3VsdFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoZGVmYXVsdFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgaWYgKCFleGVjQ29udGV4dC5vbmx5UnVuRm9yY2VkUmVzb2x2ZXJzIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdWxkRm9yY2VSZXNvbHZlcnMoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyVHlwZSA9IHJvb3RWYWx1ZS5fX3R5cGVuYW1lIHx8IGV4ZWNDb250ZXh0LmRlZmF1bHRPcGVyYXRpb25UeXBlO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlck1hcCA9IHRoaXMucmVzb2x2ZXJzICYmIHRoaXMucmVzb2x2ZXJzW3Jlc29sdmVyVHlwZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlck1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSA9IHJlc29sdmVyTWFwW2FsaWFzVXNlZCA/IGZpZWxkTmFtZSA6IGFsaWFzZWRGaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNhY2hlLmNhY2hlU2xvdC53aXRoVmFsdWUodGhpcy5jYWNoZSwgcmVzb2x2ZSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxpdGllcy5hcmd1bWVudHNPYmplY3RGcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWNDb250ZXh0LmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZmllbGQ6IGZpZWxkLCBmcmFnbWVudE1hcDogZXhlY0NvbnRleHQuZnJhZ21lbnRNYXAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCByZXN1bHRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSB7IHJlc3VsdCA9IGRlZmF1bHRSZXN1bHQ7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnZXhwb3J0JyAmJiBkaXJlY3RpdmUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmUuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmcubmFtZS52YWx1ZSA9PT0gJ2FzJyAmJiBhcmcudmFsdWUua2luZCA9PT0gJ1N0cmluZ1ZhbHVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjQ29udGV4dC5leHBvcnRlZFZhcmlhYmxlc1thcmcudmFsdWUudmFsdWVdID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlU3ViU2VsZWN0ZWRBcnJheShmaWVsZCwgcmVzdWx0LCBleGVjQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmVTZWxlY3Rpb25TZXQoZmllbGQuc2VsZWN0aW9uU2V0LCByZXN1bHQsIGV4ZWNDb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZVN1YlNlbGVjdGVkQXJyYXkgPSBmdW5jdGlvbiAoZmllbGQsIHJlc3VsdCwgZXhlY0NvbnRleHQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlU3ViU2VsZWN0ZWRBcnJheShmaWVsZCwgaXRlbSwgZXhlY0NvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlU2VsZWN0aW9uU2V0KGZpZWxkLnNlbGVjdGlvblNldCwgaXRlbSwgZXhlY0NvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gTG9jYWxTdGF0ZTtcbn0oKSk7XG5cbnZhciBkZXN0cnVjdGl2ZU1ldGhvZENvdW50cyA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtNYXAgPyBXZWFrTWFwIDogTWFwKSgpO1xuZnVuY3Rpb24gd3JhcERlc3RydWN0aXZlQ2FjaGVNZXRob2QoY2FjaGUsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgb3JpZ2luYWwgPSBjYWNoZVttZXRob2ROYW1lXTtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FjaGVbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZXN0cnVjdGl2ZU1ldGhvZENvdW50cy5zZXQoY2FjaGUsIChkZXN0cnVjdGl2ZU1ldGhvZENvdW50cy5nZXQoY2FjaGUpICsgMSkgJSAxZTE1KTtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNhbmNlbE5vdGlmeVRpbWVvdXQoaW5mbykge1xuICAgIGlmIChpbmZvW1wibm90aWZ5VGltZW91dFwiXSkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaW5mb1tcIm5vdGlmeVRpbWVvdXRcIl0pO1xuICAgICAgICBpbmZvW1wibm90aWZ5VGltZW91dFwiXSA9IHZvaWQgMDtcbiAgICB9XG59XG52YXIgUXVlcnlJbmZvID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWVyeUluZm8ocXVlcnlNYW5hZ2VyLCBxdWVyeUlkKSB7XG4gICAgICAgIGlmIChxdWVyeUlkID09PSB2b2lkIDApIHsgcXVlcnlJZCA9IHF1ZXJ5TWFuYWdlci5nZW5lcmF0ZVF1ZXJ5SWQoKTsgfVxuICAgICAgICB0aGlzLnF1ZXJ5SWQgPSBxdWVyeUlkO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5kb2N1bWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdFJlcXVlc3RJZCA9IDE7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5zdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlUXVlcnkgPSBudWxsO1xuICAgICAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlID0gcXVlcnlNYW5hZ2VyLmNhY2hlO1xuICAgICAgICBpZiAoIWRlc3RydWN0aXZlTWV0aG9kQ291bnRzLmhhcyhjYWNoZSkpIHtcbiAgICAgICAgICAgIGRlc3RydWN0aXZlTWV0aG9kQ291bnRzLnNldChjYWNoZSwgMCk7XG4gICAgICAgICAgICB3cmFwRGVzdHJ1Y3RpdmVDYWNoZU1ldGhvZChjYWNoZSwgXCJldmljdFwiKTtcbiAgICAgICAgICAgIHdyYXBEZXN0cnVjdGl2ZUNhY2hlTWV0aG9kKGNhY2hlLCBcIm1vZGlmeVwiKTtcbiAgICAgICAgICAgIHdyYXBEZXN0cnVjdGl2ZUNhY2hlTWV0aG9kKGNhY2hlLCBcInJlc2V0XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICB2YXIgbmV0d29ya1N0YXR1cyA9IHF1ZXJ5Lm5ldHdvcmtTdGF0dXMgfHwgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmc7XG4gICAgICAgIGlmICh0aGlzLnZhcmlhYmxlcyAmJlxuICAgICAgICAgICAgdGhpcy5uZXR3b3JrU3RhdHVzICE9PSBleHBvcnRzLk5ldHdvcmtTdGF0dXMubG9hZGluZyAmJlxuICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKHRoaXMudmFyaWFibGVzLCBxdWVyeS52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnNldFZhcmlhYmxlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVxdWFsaXR5LmVxdWFsKHF1ZXJ5LnZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3REaWZmID0gdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgICAgZG9jdW1lbnQ6IHF1ZXJ5LmRvY3VtZW50LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBxdWVyeS52YXJpYWJsZXMsXG4gICAgICAgICAgICBuZXR3b3JrRXJyb3I6IG51bGwsXG4gICAgICAgICAgICBncmFwaFFMRXJyb3JzOiB0aGlzLmdyYXBoUUxFcnJvcnMgfHwgW10sXG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBuZXR3b3JrU3RhdHVzLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHF1ZXJ5Lm9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICAgICAgdGhpcy5zZXRPYnNlcnZhYmxlUXVlcnkocXVlcnkub2JzZXJ2YWJsZVF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVlcnkubGFzdFJlcXVlc3RJZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0UmVxdWVzdElkID0gcXVlcnkubGFzdFJlcXVlc3RJZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbmNlbE5vdGlmeVRpbWVvdXQodGhpcyk7XG4gICAgICAgIHRoaXMubGFzdERpZmYgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuZ2V0RGlmZiA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzOyB9XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXREaWZmT3B0aW9ucyh2YXJpYWJsZXMpO1xuICAgICAgICBpZiAodGhpcy5sYXN0RGlmZiAmJiBlcXVhbGl0eS5lcXVhbChvcHRpb25zLCB0aGlzLmxhc3REaWZmLm9wdGlvbnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXN0RGlmZi5kaWZmO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlV2F0Y2godGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgb3EgPSB0aGlzLm9ic2VydmFibGVRdWVyeTtcbiAgICAgICAgaWYgKG9xICYmIG9xLm9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09IFwibm8tY2FjaGVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHsgY29tcGxldGU6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpZmYgPSB0aGlzLmNhY2hlLmRpZmYob3B0aW9ucyk7XG4gICAgICAgIHRoaXMudXBkYXRlTGFzdERpZmYoZGlmZiwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBkaWZmO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS51cGRhdGVMYXN0RGlmZiA9IGZ1bmN0aW9uIChkaWZmLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubGFzdERpZmYgPSBkaWZmID8ge1xuICAgICAgICAgICAgZGlmZjogZGlmZixcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwgdGhpcy5nZXREaWZmT3B0aW9ucygpLFxuICAgICAgICB9IDogdm9pZCAwO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5nZXREaWZmT3B0aW9ucyA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7IH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLmRvY3VtZW50LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgIG9wdGltaXN0aWM6IHRydWUsXG4gICAgICAgICAgICBjYW5vbml6ZVJlc3VsdHM6IChfYSA9IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub3B0aW9ucy5jYW5vbml6ZVJlc3VsdHMsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnNldERpZmYgPSBmdW5jdGlvbiAoZGlmZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgb2xkRGlmZiA9IHRoaXMubGFzdERpZmYgJiYgdGhpcy5sYXN0RGlmZi5kaWZmO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhc3REaWZmKGRpZmYpO1xuICAgICAgICBpZiAoIXRoaXMuZGlydHkgJiZcbiAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbChvbGREaWZmICYmIG9sZERpZmYucmVzdWx0LCBkaWZmICYmIGRpZmYucmVzdWx0KSkge1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm90aWZ5VGltZW91dCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubm90aWZ5KCk7IH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnNldE9ic2VydmFibGVRdWVyeSA9IGZ1bmN0aW9uIChvcSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob3EgPT09IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5vcUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5kZWxldGUodGhpcy5vcUxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmFibGVRdWVyeSA9IG9xO1xuICAgICAgICBpZiAob3EpIHtcbiAgICAgICAgICAgIG9xW1wicXVlcnlJbmZvXCJdID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmFkZCh0aGlzLm9xTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmdldERpZmYoKS5mcm9tT3B0aW1pc3RpY1RyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG9xW1wib2JzZXJ2ZVwiXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3EucmVvYnNlcnZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5vcUxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2FuY2VsTm90aWZ5VGltZW91dCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkTm90aWZ5KCkpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBsaXN0ZW5lcihfdGhpcyk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuc2hvdWxkTm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlydHkgfHwgIXRoaXMubGlzdGVuZXJzLnNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0KHRoaXMubmV0d29ya1N0YXR1cykgJiZcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2YWJsZVF1ZXJ5KSB7XG4gICAgICAgICAgICB2YXIgZmV0Y2hQb2xpY3kgPSB0aGlzLm9ic2VydmFibGVRdWVyeS5vcHRpb25zLmZldGNoUG9saWN5O1xuICAgICAgICAgICAgaWYgKGZldGNoUG9saWN5ICE9PSBcImNhY2hlLW9ubHlcIiAmJlxuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5ICE9PSBcImNhY2hlLWFuZC1uZXR3b3JrXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsID0gUXVlcnlJbmZvLnByb3RvdHlwZS5jYW5jZWw7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIudW5zdWJzY3JpYmUoKTsgfSk7XG4gICAgICAgICAgICB2YXIgb3EgPSB0aGlzLm9ic2VydmFibGVRdWVyeTtcbiAgICAgICAgICAgIGlmIChvcSlcbiAgICAgICAgICAgICAgICBvcS5zdG9wUG9sbGluZygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnVwZGF0ZVdhdGNoID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7IH1cbiAgICAgICAgdmFyIG9xID0gdGhpcy5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgIGlmIChvcSAmJiBvcS5vcHRpb25zLmZldGNoUG9saWN5ID09PSBcIm5vLWNhY2hlXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2F0Y2hPcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMuZ2V0RGlmZk9wdGlvbnModmFyaWFibGVzKSksIHsgd2F0Y2hlcjogdGhpcywgY2FsbGJhY2s6IGZ1bmN0aW9uIChkaWZmKSB7IHJldHVybiBfdGhpcy5zZXREaWZmKGRpZmYpOyB9IH0pO1xuICAgICAgICBpZiAoIXRoaXMubGFzdFdhdGNoIHx8XG4gICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwod2F0Y2hPcHRpb25zLCB0aGlzLmxhc3RXYXRjaCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCA9IHRoaXMuY2FjaGUud2F0Y2godGhpcy5sYXN0V2F0Y2ggPSB3YXRjaE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnJlc2V0TGFzdFdyaXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxhc3RXcml0ZSA9IHZvaWQgMDtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuc2hvdWxkV3JpdGUgPSBmdW5jdGlvbiAocmVzdWx0LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIGxhc3RXcml0ZSA9IHRoaXMubGFzdFdyaXRlO1xuICAgICAgICByZXR1cm4gIShsYXN0V3JpdGUgJiZcbiAgICAgICAgICAgIGxhc3RXcml0ZS5kbUNvdW50ID09PSBkZXN0cnVjdGl2ZU1ldGhvZENvdW50cy5nZXQodGhpcy5jYWNoZSkgJiZcbiAgICAgICAgICAgIGVxdWFsaXR5LmVxdWFsKHZhcmlhYmxlcywgbGFzdFdyaXRlLnZhcmlhYmxlcykgJiZcbiAgICAgICAgICAgIGVxdWFsaXR5LmVxdWFsKHJlc3VsdC5kYXRhLCBsYXN0V3JpdGUucmVzdWx0LmRhdGEpKTtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUubWFya1Jlc3VsdCA9IGZ1bmN0aW9uIChyZXN1bHQsIG9wdGlvbnMsIGNhY2hlV3JpdGVCZWhhdmlvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmdyYXBoUUxFcnJvcnMgPSB1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KHJlc3VsdC5lcnJvcnMpID8gcmVzdWx0LmVycm9ycyA6IFtdO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIGlmIChvcHRpb25zLmZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxhc3REaWZmKHsgcmVzdWx0OiByZXN1bHQuZGF0YSwgY29tcGxldGU6IHRydWUgfSwgdGhpcy5nZXREaWZmT3B0aW9ucyhvcHRpb25zLnZhcmlhYmxlcykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNhY2hlV3JpdGVCZWhhdmlvciAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFdyaXRlUmVzdWx0KHJlc3VsdCwgb3B0aW9ucy5lcnJvclBvbGljeSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnBlcmZvcm1UcmFuc2FjdGlvbihmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnNob3VsZFdyaXRlKHJlc3VsdCwgb3B0aW9ucy52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogX3RoaXMuZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyd3JpdGU6IGNhY2hlV3JpdGVCZWhhdmlvciA9PT0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFzdFdyaXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG1Db3VudDogZGVzdHJ1Y3RpdmVNZXRob2RDb3VudHMuZ2V0KF90aGlzLmNhY2hlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMubGFzdERpZmYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXN0RGlmZi5kaWZmLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSBfdGhpcy5sYXN0RGlmZi5kaWZmLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpZmZPcHRpb25zID0gX3RoaXMuZ2V0RGlmZk9wdGlvbnMob3B0aW9ucy52YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IGNhY2hlLmRpZmYoZGlmZk9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLnN0b3BwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVdhdGNoKG9wdGlvbnMudmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVMYXN0RGlmZihkaWZmLCBkaWZmT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWZmLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGF0YSA9IGRpZmYucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RXcml0ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5tYXJrUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubmV0d29ya0Vycm9yID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5yZWFkeTtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUubWFya0Vycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMubmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5lcnJvcjtcbiAgICAgICAgdGhpcy5sYXN0V3JpdGUgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgaWYgKGVycm9yLmdyYXBoUUxFcnJvcnMpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhRTEVycm9ycyA9IGVycm9yLmdyYXBoUUxFcnJvcnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yLm5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgdGhpcy5uZXR3b3JrRXJyb3IgPSBlcnJvci5uZXR3b3JrRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXJ5SW5mbztcbn0oKSk7XG5mdW5jdGlvbiBzaG91bGRXcml0ZVJlc3VsdChyZXN1bHQsIGVycm9yUG9saWN5KSB7XG4gICAgaWYgKGVycm9yUG9saWN5ID09PSB2b2lkIDApIHsgZXJyb3JQb2xpY3kgPSBcIm5vbmVcIjsgfVxuICAgIHZhciBpZ25vcmVFcnJvcnMgPSBlcnJvclBvbGljeSA9PT0gXCJpZ25vcmVcIiB8fFxuICAgICAgICBlcnJvclBvbGljeSA9PT0gXCJhbGxcIjtcbiAgICB2YXIgd3JpdGVXaXRoRXJyb3JzID0gIXV0aWxpdGllcy5ncmFwaFFMUmVzdWx0SGFzRXJyb3IocmVzdWx0KTtcbiAgICBpZiAoIXdyaXRlV2l0aEVycm9ycyAmJiBpZ25vcmVFcnJvcnMgJiYgcmVzdWx0LmRhdGEpIHtcbiAgICAgICAgd3JpdGVXaXRoRXJyb3JzID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlV2l0aEVycm9ycztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBRdWVyeU1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFF1ZXJ5TWFuYWdlcihfYSkge1xuICAgICAgICB2YXIgY2FjaGUgPSBfYS5jYWNoZSwgbGluayA9IF9hLmxpbmssIF9iID0gX2EucXVlcnlEZWR1cGxpY2F0aW9uLCBxdWVyeURlZHVwbGljYXRpb24gPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYiwgb25Ccm9hZGNhc3QgPSBfYS5vbkJyb2FkY2FzdCwgX2MgPSBfYS5zc3JNb2RlLCBzc3JNb2RlID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIF9kID0gX2EuY2xpZW50QXdhcmVuZXNzLCBjbGllbnRBd2FyZW5lc3MgPSBfZCA9PT0gdm9pZCAwID8ge30gOiBfZCwgbG9jYWxTdGF0ZSA9IF9hLmxvY2FsU3RhdGUsIGFzc3VtZUltbXV0YWJsZVJlc3VsdHMgPSBfYS5hc3N1bWVJbW11dGFibGVSZXN1bHRzO1xuICAgICAgICB0aGlzLmNsaWVudEF3YXJlbmVzcyA9IHt9O1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZmV0Y2hDYW5jZWxGbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQ2FjaGUgPSBuZXcgKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwID8gV2Vha01hcCA6IE1hcCkoKTtcbiAgICAgICAgdGhpcy5xdWVyeUlkQ291bnRlciA9IDE7XG4gICAgICAgIHRoaXMucmVxdWVzdElkQ291bnRlciA9IDE7XG4gICAgICAgIHRoaXMubXV0YXRpb25JZENvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLmluRmxpZ2h0TGlua09ic2VydmFibGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgICAgIHRoaXMubGluayA9IGxpbms7XG4gICAgICAgIHRoaXMucXVlcnlEZWR1cGxpY2F0aW9uID0gcXVlcnlEZWR1cGxpY2F0aW9uO1xuICAgICAgICB0aGlzLmNsaWVudEF3YXJlbmVzcyA9IGNsaWVudEF3YXJlbmVzcztcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlID0gbG9jYWxTdGF0ZSB8fCBuZXcgTG9jYWxTdGF0ZSh7IGNhY2hlOiBjYWNoZSB9KTtcbiAgICAgICAgdGhpcy5zc3JNb2RlID0gc3NyTW9kZTtcbiAgICAgICAgdGhpcy5hc3N1bWVJbW11dGFibGVSZXN1bHRzID0gISFhc3N1bWVJbW11dGFibGVSZXN1bHRzO1xuICAgICAgICBpZiAoKHRoaXMub25Ccm9hZGNhc3QgPSBvbkJyb2FkY2FzdCkpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25TdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoX2luZm8sIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgIF90aGlzLnN0b3BRdWVyeU5vQnJvYWRjYXN0KHF1ZXJ5SWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYW5jZWxQZW5kaW5nRmV0Y2hlcyhfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoJ1F1ZXJ5TWFuYWdlciBzdG9wcGVkIHdoaWxlIHF1ZXJ5IHdhcyBpbiBmbGlnaHQnKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDExKSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmNhbmNlbFBlbmRpbmdGZXRjaGVzID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hDYW5jZWxGbnMuZm9yRWFjaChmdW5jdGlvbiAoY2FuY2VsKSB7IHJldHVybiBjYW5jZWwoZXJyb3IpOyB9KTtcbiAgICAgICAgdGhpcy5mZXRjaENhbmNlbEZucy5jbGVhcigpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5tdXRhdGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIG11dGF0aW9uID0gX2EubXV0YXRpb24sIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgb3B0aW1pc3RpY1Jlc3BvbnNlID0gX2Eub3B0aW1pc3RpY1Jlc3BvbnNlLCB1cGRhdGVRdWVyaWVzID0gX2EudXBkYXRlUXVlcmllcywgX2IgPSBfYS5yZWZldGNoUXVlcmllcywgcmVmZXRjaFF1ZXJpZXMgPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYiwgX2MgPSBfYS5hd2FpdFJlZmV0Y2hRdWVyaWVzLCBhd2FpdFJlZmV0Y2hRdWVyaWVzID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIHVwZGF0ZVdpdGhQcm94eUZuID0gX2EudXBkYXRlLCBvblF1ZXJ5VXBkYXRlZCA9IF9hLm9uUXVlcnlVcGRhdGVkLCBfZCA9IF9hLmVycm9yUG9saWN5LCBlcnJvclBvbGljeSA9IF9kID09PSB2b2lkIDAgPyAnbm9uZScgOiBfZCwgX2UgPSBfYS5mZXRjaFBvbGljeSwgZmV0Y2hQb2xpY3kgPSBfZSA9PT0gdm9pZCAwID8gJ25ldHdvcmstb25seScgOiBfZSwga2VlcFJvb3RGaWVsZHMgPSBfYS5rZWVwUm9vdEZpZWxkcywgY29udGV4dCA9IF9hLmNvbnRleHQ7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtdXRhdGlvbklkLCBtdXRhdGlvblN0b3JlVmFsdWUsIHNlbGY7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9mKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQobXV0YXRpb24sICdtdXRhdGlvbiBvcHRpb24gaXMgcmVxdWlyZWQuIFlvdSBtdXN0IHNwZWNpZnkgeW91ciBHcmFwaFFMIGRvY3VtZW50IGluIHRoZSBtdXRhdGlvbiBvcHRpb24uJykgOiBnbG9iYWxzLmludmFyaWFudChtdXRhdGlvbiwgMTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnLCBcIk11dGF0aW9ucyBzdXBwb3J0IG9ubHkgJ25ldHdvcmstb25seScgb3IgJ25vLWNhY2hlJyBmZXRjaFBvbGljeSBzdHJpbmdzLiBUaGUgZGVmYXVsdCBgbmV0d29yay1vbmx5YCBiZWhhdmlvciBhdXRvbWF0aWNhbGx5IHdyaXRlcyBtdXRhdGlvbiByZXN1bHRzIHRvIHRoZSBjYWNoZS4gUGFzc2luZyBgbm8tY2FjaGVgIHNraXBzIHRoZSBjYWNoZSB3cml0ZS5cIikgOiBnbG9iYWxzLmludmFyaWFudChmZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ25vLWNhY2hlJywgMTMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25JZCA9IHRoaXMuZ2VuZXJhdGVNdXRhdGlvbklkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbiA9IHRoaXMudHJhbnNmb3JtKG11dGF0aW9uKS5kb2N1bWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKG11dGF0aW9uLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRyYW5zZm9ybShtdXRhdGlvbikuaGFzQ2xpZW50RXhwb3J0cykgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5sb2NhbFN0YXRlLmFkZEV4cG9ydGVkVmFyaWFibGVzKG11dGF0aW9uLCB2YXJpYWJsZXMsIGNvbnRleHQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzID0gKF9mLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZi5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uU3RvcmVWYWx1ZSA9IHRoaXMubXV0YXRpb25TdG9yZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm11dGF0aW9uU3RvcmVbbXV0YXRpb25JZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uOiBtdXRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGltaXN0aWNSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFya011dGF0aW9uT3B0aW1pc3RpYyhvcHRpbWlzdGljUmVzcG9uc2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25JZDogbXV0YXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IG11dGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IGZldGNoUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvclBvbGljeTogZXJyb3JQb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXJpZXM6IHVwZGF0ZVF1ZXJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogdXBkYXRlV2l0aFByb3h5Rm4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBSb290RmllbGRzOiBrZWVwUm9vdEZpZWxkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5hc3luY01hcChzZWxmLmdldE9ic2VydmFibGVGcm9tTGluayhtdXRhdGlvbiwgdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IG9wdGltaXN0aWNSZXNwb25zZTogb3B0aW1pc3RpY1Jlc3BvbnNlIH0pLCB2YXJpYWJsZXMsIGZhbHNlKSwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5ncmFwaFFMUmVzdWx0SGFzRXJyb3IocmVzdWx0KSAmJiBlcnJvclBvbGljeSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGVycm9ycy5BcG9sbG9FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IHJlc3VsdC5lcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXV0YXRpb25TdG9yZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25TdG9yZVZhbHVlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblN0b3JlVmFsdWUuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlUmVzdWx0ID0gdHNsaWIuX19hc3NpZ24oe30sIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlZmV0Y2hRdWVyaWVzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllcyA9IHJlZmV0Y2hRdWVyaWVzKHN0b3JlUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvclBvbGljeSA9PT0gJ2lnbm9yZScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlsaXRpZXMuZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHN0b3JlUmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVJlc3VsdC5lcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5tYXJrTXV0YXRpb25SZXN1bHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uSWQ6IG11dGF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBzdG9yZVJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogbXV0YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IGZldGNoUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yUG9saWN5OiBlcnJvclBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogdXBkYXRlV2l0aFByb3h5Rm4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUXVlcmllczogdXBkYXRlUXVlcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdFJlZmV0Y2hRdWVyaWVzOiBhd2FpdFJlZmV0Y2hRdWVyaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiByZWZldGNoUXVlcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVPcHRpbWlzdGljOiBvcHRpbWlzdGljUmVzcG9uc2UgPyBtdXRhdGlvbklkIDogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUXVlcnlVcGRhdGVkOiBvblF1ZXJ5VXBkYXRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWVwUm9vdEZpZWxkczoga2VlcFJvb3RGaWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChzdG9yZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc3RvcmVSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uU3RvcmVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblN0b3JlVmFsdWUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblN0b3JlVmFsdWUuZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpbWlzdGljUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWNoZS5yZW1vdmVPcHRpbWlzdGljKG11dGF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyIGluc3RhbmNlb2YgZXJyb3JzLkFwb2xsb0Vycm9yID8gZXJyIDogbmV3IGVycm9ycy5BcG9sbG9FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvcjogZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLm1hcmtNdXRhdGlvblJlc3VsdCA9IGZ1bmN0aW9uIChtdXRhdGlvbiwgY2FjaGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGNhY2hlID09PSB2b2lkIDApIHsgY2FjaGUgPSB0aGlzLmNhY2hlOyB9XG4gICAgICAgIHZhciByZXN1bHQgPSBtdXRhdGlvbi5yZXN1bHQ7XG4gICAgICAgIHZhciBjYWNoZVdyaXRlcyA9IFtdO1xuICAgICAgICB2YXIgc2tpcENhY2hlID0gbXV0YXRpb24uZmV0Y2hQb2xpY3kgPT09IFwibm8tY2FjaGVcIjtcbiAgICAgICAgaWYgKCFza2lwQ2FjaGUgJiYgc2hvdWxkV3JpdGVSZXN1bHQocmVzdWx0LCBtdXRhdGlvbi5lcnJvclBvbGljeSkpIHtcbiAgICAgICAgICAgIGNhY2hlV3JpdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgZGF0YUlkOiAnUk9PVF9NVVRBVElPTicsXG4gICAgICAgICAgICAgICAgcXVlcnk6IG11dGF0aW9uLmRvY3VtZW50LFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogbXV0YXRpb24udmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgdXBkYXRlUXVlcmllc18xID0gbXV0YXRpb24udXBkYXRlUXVlcmllcztcbiAgICAgICAgICAgIGlmICh1cGRhdGVRdWVyaWVzXzEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoX2EsIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9ic2VydmFibGVRdWVyeSA9IF9hLm9ic2VydmFibGVRdWVyeTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF1ZXJ5TmFtZSA9IG9ic2VydmFibGVRdWVyeSAmJiBvYnNlcnZhYmxlUXVlcnkucXVlcnlOYW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXF1ZXJ5TmFtZSB8fCAhaGFzT3duUHJvcGVydHkuY2FsbCh1cGRhdGVRdWVyaWVzXzEsIHF1ZXJ5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlciA9IHVwZGF0ZVF1ZXJpZXNfMVtxdWVyeU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2IgPSBfdGhpcy5xdWVyaWVzLmdldChxdWVyeUlkKSwgZG9jdW1lbnQgPSBfYi5kb2N1bWVudCwgdmFyaWFibGVzID0gX2IudmFyaWFibGVzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2MgPSBjYWNoZS5kaWZmKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBkb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSksIGN1cnJlbnRRdWVyeVJlc3VsdCA9IF9jLnJlc3VsdCwgY29tcGxldGUgPSBfYy5jb21wbGV0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlICYmIGN1cnJlbnRRdWVyeVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRRdWVyeVJlc3VsdCA9IHVwZGF0ZXIoY3VycmVudFF1ZXJ5UmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25SZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeU5hbWU6IGRvY3VtZW50ICYmIHV0aWxpdGllcy5nZXRPcGVyYXRpb25OYW1lKGRvY3VtZW50KSB8fCB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlWYXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRRdWVyeVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlV3JpdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IG5leHRRdWVyeVJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUlkOiAnUk9PVF9RVUVSWScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBkb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FjaGVXcml0ZXMubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICAgbXV0YXRpb24ucmVmZXRjaFF1ZXJpZXMgfHxcbiAgICAgICAgICAgIG11dGF0aW9uLnVwZGF0ZSB8fFxuICAgICAgICAgICAgbXV0YXRpb24ub25RdWVyeVVwZGF0ZWQgfHxcbiAgICAgICAgICAgIG11dGF0aW9uLnJlbW92ZU9wdGltaXN0aWMpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHRzXzEgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucmVmZXRjaFF1ZXJpZXMoe1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNhY2hlOiBmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFza2lwQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlV3JpdGVzLmZvckVhY2goZnVuY3Rpb24gKHdyaXRlKSB7IHJldHVybiBjYWNoZS53cml0ZSh3cml0ZSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGUgPSBtdXRhdGlvbi51cGRhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2tpcENhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpZmYgPSBjYWNoZS5kaWZmKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiUk9PVF9NVVRBVElPTlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogX3RoaXMudHJhbnNmb3JtKG11dGF0aW9uLmRvY3VtZW50KS5hc1F1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG11dGF0aW9uLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW1pc3RpYzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaWZmLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCByZXN1bHQpLCB7IGRhdGE6IGRpZmYucmVzdWx0IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZShjYWNoZSwgcmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogbXV0YXRpb24uY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG11dGF0aW9uLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2tpcENhY2hlICYmICFtdXRhdGlvbi5rZWVwUm9vdEZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUubW9kaWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ1JPT1RfTVVUQVRJT04nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGROYW1lID0gX2EuZmllbGROYW1lLCBERUxFVEUgPSBfYS5ERUxFVEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZE5hbWUgPT09IFwiX190eXBlbmFtZVwiID8gdmFsdWUgOiBERUxFVEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBtdXRhdGlvbi5yZWZldGNoUXVlcmllcyxcbiAgICAgICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZW1vdmVPcHRpbWlzdGljOiBtdXRhdGlvbi5yZW1vdmVPcHRpbWlzdGljLFxuICAgICAgICAgICAgICAgIG9uUXVlcnlVcGRhdGVkOiBtdXRhdGlvbi5vblF1ZXJ5VXBkYXRlZCB8fCBudWxsLFxuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiByZXN1bHRzXzEucHVzaChyZXN1bHQpOyB9KTtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hd2FpdFJlZmV0Y2hRdWVyaWVzIHx8IG11dGF0aW9uLm9uUXVlcnlVcGRhdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHNfMSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiByZXN1bHQ7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUubWFya011dGF0aW9uT3B0aW1pc3RpYyA9IGZ1bmN0aW9uIChvcHRpbWlzdGljUmVzcG9uc2UsIG11dGF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhID0gdHlwZW9mIG9wdGltaXN0aWNSZXNwb25zZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IG9wdGltaXN0aWNSZXNwb25zZShtdXRhdGlvbi52YXJpYWJsZXMpXG4gICAgICAgICAgICA6IG9wdGltaXN0aWNSZXNwb25zZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucmVjb3JkT3B0aW1pc3RpY1RyYW5zYWN0aW9uKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBfdGhpcy5tYXJrTXV0YXRpb25SZXN1bHQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG11dGF0aW9uKSwgeyByZXN1bHQ6IHsgZGF0YTogZGF0YSB9IH0pLCBjYWNoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgbXV0YXRpb24ubXV0YXRpb25JZCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmZldGNoUXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCwgb3B0aW9ucywgbmV0d29ya1N0YXR1cykge1xuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaFF1ZXJ5T2JzZXJ2YWJsZShxdWVyeUlkLCBvcHRpb25zLCBuZXR3b3JrU3RhdHVzKS5wcm9taXNlO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRRdWVyeVN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5mbywgcXVlcnlJZCkge1xuICAgICAgICAgICAgc3RvcmVbcXVlcnlJZF0gPSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBpbmZvLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBpbmZvLm5ldHdvcmtTdGF0dXMsXG4gICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yOiBpbmZvLm5ldHdvcmtFcnJvcixcbiAgICAgICAgICAgICAgICBncmFwaFFMRXJyb3JzOiBpbmZvLmdyYXBoUUxFcnJvcnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEVycm9ycyA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHZhciBxdWVyeUluZm8gPSB0aGlzLnF1ZXJpZXMuZ2V0KHF1ZXJ5SWQpO1xuICAgICAgICBpZiAocXVlcnlJbmZvKSB7XG4gICAgICAgICAgICBxdWVyeUluZm8ubmV0d29ya0Vycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcXVlcnlJbmZvLmdyYXBoUUxFcnJvcnMgPSBbXTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIHRyYW5zZm9ybUNhY2hlID0gdGhpcy50cmFuc2Zvcm1DYWNoZTtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1DYWNoZS5oYXMoZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICB2YXIgdHJhbnNmb3JtZWQgPSB0aGlzLmNhY2hlLnRyYW5zZm9ybURvY3VtZW50KGRvY3VtZW50KTtcbiAgICAgICAgICAgIHZhciBmb3JMaW5rID0gdXRpbGl0aWVzLnJlbW92ZUNvbm5lY3Rpb25EaXJlY3RpdmVGcm9tRG9jdW1lbnQodGhpcy5jYWNoZS50cmFuc2Zvcm1Gb3JMaW5rKHRyYW5zZm9ybWVkKSk7XG4gICAgICAgICAgICB2YXIgY2xpZW50UXVlcnkgPSB0aGlzLmxvY2FsU3RhdGUuY2xpZW50UXVlcnkodHJhbnNmb3JtZWQpO1xuICAgICAgICAgICAgdmFyIHNlcnZlclF1ZXJ5ID0gZm9yTGluayAmJiB0aGlzLmxvY2FsU3RhdGUuc2VydmVyUXVlcnkoZm9yTGluayk7XG4gICAgICAgICAgICB2YXIgY2FjaGVFbnRyeV8xID0ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50OiB0cmFuc2Zvcm1lZCxcbiAgICAgICAgICAgICAgICBoYXNDbGllbnRFeHBvcnRzOiB1dGlsaXRpZXMuaGFzQ2xpZW50RXhwb3J0cyh0cmFuc2Zvcm1lZCksXG4gICAgICAgICAgICAgICAgaGFzRm9yY2VkUmVzb2x2ZXJzOiB0aGlzLmxvY2FsU3RhdGUuc2hvdWxkRm9yY2VSZXNvbHZlcnModHJhbnNmb3JtZWQpLFxuICAgICAgICAgICAgICAgIGNsaWVudFF1ZXJ5OiBjbGllbnRRdWVyeSxcbiAgICAgICAgICAgICAgICBzZXJ2ZXJRdWVyeTogc2VydmVyUXVlcnksXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhcnM6IHV0aWxpdGllcy5nZXREZWZhdWx0VmFsdWVzKHV0aWxpdGllcy5nZXRPcGVyYXRpb25EZWZpbml0aW9uKHRyYW5zZm9ybWVkKSksXG4gICAgICAgICAgICAgICAgYXNRdWVyeTogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRyYW5zZm9ybWVkKSwgeyBkZWZpbml0aW9uczogdHJhbnNmb3JtZWQuZGVmaW5pdGlvbnMubWFwKGZ1bmN0aW9uIChkZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWYua2luZCA9PT0gXCJPcGVyYXRpb25EZWZpbml0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWYub3BlcmF0aW9uICE9PSBcInF1ZXJ5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGRlZiksIHsgb3BlcmF0aW9uOiBcInF1ZXJ5XCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICAgICAgICAgICAgICB9KSB9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBhZGQgPSBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvYyAmJiAhdHJhbnNmb3JtQ2FjaGUuaGFzKGRvYykpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtQ2FjaGUuc2V0KGRvYywgY2FjaGVFbnRyeV8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYWRkKGRvY3VtZW50KTtcbiAgICAgICAgICAgIGFkZCh0cmFuc2Zvcm1lZCk7XG4gICAgICAgICAgICBhZGQoY2xpZW50UXVlcnkpO1xuICAgICAgICAgICAgYWRkKHNlcnZlclF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KGRvY3VtZW50KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0VmFyaWFibGVzID0gZnVuY3Rpb24gKGRvY3VtZW50LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLnRyYW5zZm9ybShkb2N1bWVudCkuZGVmYXVsdFZhcnMpLCB2YXJpYWJsZXMpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS53YXRjaFF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyB2YXJpYWJsZXM6IHRoaXMuZ2V0VmFyaWFibGVzKG9wdGlvbnMucXVlcnksIG9wdGlvbnMudmFyaWFibGVzKSB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMubm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHF1ZXJ5SW5mbyA9IG5ldyBRdWVyeUluZm8odGhpcyk7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGVRdWVyeSh7XG4gICAgICAgICAgICBxdWVyeU1hbmFnZXI6IHRoaXMsXG4gICAgICAgICAgICBxdWVyeUluZm86IHF1ZXJ5SW5mbyxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuc2V0KG9ic2VydmFibGUucXVlcnlJZCwgcXVlcnlJbmZvKTtcbiAgICAgICAgcXVlcnlJbmZvLmluaXQoe1xuICAgICAgICAgICAgZG9jdW1lbnQ6IG9wdGlvbnMucXVlcnksXG4gICAgICAgICAgICBvYnNlcnZhYmxlUXVlcnk6IG9ic2VydmFibGUsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHF1ZXJ5SWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHF1ZXJ5SWQgPT09IHZvaWQgMCkgeyBxdWVyeUlkID0gdGhpcy5nZW5lcmF0ZVF1ZXJ5SWQoKTsgfVxuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQob3B0aW9ucy5xdWVyeSwgJ3F1ZXJ5IG9wdGlvbiBpcyByZXF1aXJlZC4gWW91IG11c3Qgc3BlY2lmeSB5b3VyIEdyYXBoUUwgZG9jdW1lbnQgJyArXG4gICAgICAgICAgICAnaW4gdGhlIHF1ZXJ5IG9wdGlvbi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KG9wdGlvbnMucXVlcnksIDE0KTtcbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG9wdGlvbnMucXVlcnkua2luZCA9PT0gJ0RvY3VtZW50JywgJ1lvdSBtdXN0IHdyYXAgdGhlIHF1ZXJ5IHN0cmluZyBpbiBhIFwiZ3FsXCIgdGFnLicpIDogZ2xvYmFscy5pbnZhcmlhbnQob3B0aW9ucy5xdWVyeS5raW5kID09PSAnRG9jdW1lbnQnLCAxNSk7XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghb3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSwgJ3JldHVyblBhcnRpYWxEYXRhIG9wdGlvbiBvbmx5IHN1cHBvcnRlZCBvbiB3YXRjaFF1ZXJ5LicpIDogZ2xvYmFscy5pbnZhcmlhbnQoIW9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEsIDE2KTtcbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KCFvcHRpb25zLnBvbGxJbnRlcnZhbCwgJ3BvbGxJbnRlcnZhbCBvcHRpb24gb25seSBzdXBwb3J0ZWQgb24gd2F0Y2hRdWVyeS4nKSA6IGdsb2JhbHMuaW52YXJpYW50KCFvcHRpb25zLnBvbGxJbnRlcnZhbCwgMTcpO1xuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaFF1ZXJ5KHF1ZXJ5SWQsIG9wdGlvbnMpLmZpbmFsbHkoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc3RvcFF1ZXJ5KHF1ZXJ5SWQpOyB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2VuZXJhdGVRdWVyeUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMucXVlcnlJZENvdW50ZXIrKyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdlbmVyYXRlUmVxdWVzdElkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SWRDb3VudGVyKys7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdlbmVyYXRlTXV0YXRpb25JZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLm11dGF0aW9uSWRDb3VudGVyKyspO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdG9wUXVlcnlJblN0b3JlID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5zdG9wUXVlcnlJblN0b3JlTm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdG9wUXVlcnlJblN0b3JlTm9Ccm9hZGNhc3QgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB2YXIgcXVlcnlJbmZvID0gdGhpcy5xdWVyaWVzLmdldChxdWVyeUlkKTtcbiAgICAgICAgaWYgKHF1ZXJ5SW5mbylcbiAgICAgICAgICAgIHF1ZXJ5SW5mby5zdG9wKCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmNsZWFyU3RvcmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkaXNjYXJkV2F0Y2hlczogdHJ1ZSxcbiAgICAgICAgfTsgfVxuICAgICAgICB0aGlzLmNhbmNlbFBlbmRpbmdGZXRjaGVzKF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcignU3RvcmUgcmVzZXQgd2hpbGUgcXVlcnkgd2FzIGluIGZsaWdodCAobm90IGNvbXBsZXRlZCBpbiBsaW5rIGNoYWluKScpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoMTgpKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5SW5mbykge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5SW5mby5vYnNlcnZhYmxlUXVlcnkpIHtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8ubmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5sb2FkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uU3RvcmUpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25TdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucmVzZXQob3B0aW9ucyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldE9ic2VydmFibGVRdWVyaWVzID0gZnVuY3Rpb24gKGluY2x1ZGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGluY2x1ZGUgPT09IHZvaWQgMCkgeyBpbmNsdWRlID0gXCJhY3RpdmVcIjsgfVxuICAgICAgICB2YXIgcXVlcmllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdmFyIHF1ZXJ5TmFtZXNBbmREb2NzID0gbmV3IE1hcCgpO1xuICAgICAgICB2YXIgbGVnYWN5UXVlcnlPcHRpb25zID0gbmV3IFNldCgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpbmNsdWRlKSkge1xuICAgICAgICAgICAgaW5jbHVkZS5mb3JFYWNoKGZ1bmN0aW9uIChkZXNjKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXNjID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZXNBbmREb2NzLnNldChkZXNjLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxpdGllcy5pc0RvY3VtZW50Tm9kZShkZXNjKSkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeU5hbWVzQW5kRG9jcy5zZXQoX3RoaXMudHJhbnNmb3JtKGRlc2MpLmRvY3VtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QoZGVzYykgJiYgZGVzYy5xdWVyeSkge1xuICAgICAgICAgICAgICAgICAgICBsZWdhY3lRdWVyeU9wdGlvbnMuYWRkKGRlc2MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSwgcXVlcnlJZCkge1xuICAgICAgICAgICAgdmFyIG9xID0gX2Eub2JzZXJ2YWJsZVF1ZXJ5LCBkb2N1bWVudCA9IF9hLmRvY3VtZW50O1xuICAgICAgICAgICAgaWYgKG9xKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluY2x1ZGUgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcmllcy5zZXQocXVlcnlJZCwgb3EpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBxdWVyeU5hbWUgPSBvcS5xdWVyeU5hbWUsIGZldGNoUG9saWN5ID0gb3Eub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgPT09IFwic3RhbmRieVwiIHx8XG4gICAgICAgICAgICAgICAgICAgIChpbmNsdWRlID09PSBcImFjdGl2ZVwiICYmICFvcS5oYXNPYnNlcnZlcnMoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZSA9PT0gXCJhY3RpdmVcIiB8fFxuICAgICAgICAgICAgICAgICAgICAocXVlcnlOYW1lICYmIHF1ZXJ5TmFtZXNBbmREb2NzLmhhcyhxdWVyeU5hbWUpKSB8fFxuICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQgJiYgcXVlcnlOYW1lc0FuZERvY3MuaGFzKGRvY3VtZW50KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcmllcy5zZXQocXVlcnlJZCwgb3EpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlOYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lc0FuZERvY3Muc2V0KHF1ZXJ5TmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZXNBbmREb2NzLnNldChkb2N1bWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxlZ2FjeVF1ZXJ5T3B0aW9ucy5zaXplKSB7XG4gICAgICAgICAgICBsZWdhY3lRdWVyeU9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciBxdWVyeUlkID0gdXRpbGl0aWVzLm1ha2VVbmlxdWVJZChcImxlZ2FjeU9uZVRpbWVRdWVyeVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlJbmZvID0gX3RoaXMuZ2V0UXVlcnkocXVlcnlJZCkuaW5pdCh7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBvcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBvcSA9IG5ldyBPYnNlcnZhYmxlUXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeU1hbmFnZXI6IF90aGlzLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeUluZm86IHF1ZXJ5SW5mbyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGZldGNoUG9saWN5OiBcIm5ldHdvcmstb25seVwiIH0pLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGdsb2JhbHMuaW52YXJpYW50KG9xLnF1ZXJ5SWQgPT09IHF1ZXJ5SWQpO1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5zZXRPYnNlcnZhYmxlUXVlcnkob3EpO1xuICAgICAgICAgICAgICAgIHF1ZXJpZXMuc2V0KHF1ZXJ5SWQsIG9xKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX0RFVl9fICYmIHF1ZXJ5TmFtZXNBbmREb2NzLnNpemUpIHtcbiAgICAgICAgICAgIHF1ZXJ5TmFtZXNBbmREb2NzLmZvckVhY2goZnVuY3Rpb24gKGluY2x1ZGVkLCBuYW1lT3JEb2MpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWluY2x1ZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIlVua25vd24gcXVlcnkgXCIuY29uY2F0KHR5cGVvZiBuYW1lT3JEb2MgPT09IFwic3RyaW5nXCIgPyBcIm5hbWVkIFwiIDogXCJcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KG5hbWVPckRvYywgbnVsbCwgMiksIFwiIHJlcXVlc3RlZCBpbiByZWZldGNoUXVlcmllcyBvcHRpb25zLmluY2x1ZGUgYXJyYXlcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyaWVzO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMgPSBmdW5jdGlvbiAoaW5jbHVkZVN0YW5kYnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGluY2x1ZGVTdGFuZGJ5ID09PSB2b2lkIDApIHsgaW5jbHVkZVN0YW5kYnkgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgb2JzZXJ2YWJsZVF1ZXJ5UHJvbWlzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5nZXRPYnNlcnZhYmxlUXVlcmllcyhpbmNsdWRlU3RhbmRieSA/IFwiYWxsXCIgOiBcImFjdGl2ZVwiKS5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZhYmxlUXVlcnksIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgIHZhciBmZXRjaFBvbGljeSA9IG9ic2VydmFibGVRdWVyeS5vcHRpb25zLmZldGNoUG9saWN5O1xuICAgICAgICAgICAgb2JzZXJ2YWJsZVF1ZXJ5LnJlc2V0TGFzdFJlc3VsdHMoKTtcbiAgICAgICAgICAgIGlmIChpbmNsdWRlU3RhbmRieSB8fFxuICAgICAgICAgICAgICAgIChmZXRjaFBvbGljeSAhPT0gXCJzdGFuZGJ5XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3kgIT09IFwiY2FjaGUtb25seVwiKSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGVRdWVyeVByb21pc2VzLnB1c2gob2JzZXJ2YWJsZVF1ZXJ5LnJlZmV0Y2goKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5nZXRRdWVyeShxdWVyeUlkKS5zZXREaWZmKG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChvYnNlcnZhYmxlUXVlcnlQcm9taXNlcyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnNldE9ic2VydmFibGVRdWVyeSA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlUXVlcnkpIHtcbiAgICAgICAgdGhpcy5nZXRRdWVyeShvYnNlcnZhYmxlUXVlcnkucXVlcnlJZCkuc2V0T2JzZXJ2YWJsZVF1ZXJ5KG9ic2VydmFibGVRdWVyeSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0YXJ0R3JhcGhRTFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcXVlcnkgPSBfYS5xdWVyeSwgZmV0Y2hQb2xpY3kgPSBfYS5mZXRjaFBvbGljeSwgZXJyb3JQb2xpY3kgPSBfYS5lcnJvclBvbGljeSwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBfYiA9IF9hLmNvbnRleHQsIGNvbnRleHQgPSBfYiA9PT0gdm9pZCAwID8ge30gOiBfYjtcbiAgICAgICAgcXVlcnkgPSB0aGlzLnRyYW5zZm9ybShxdWVyeSkuZG9jdW1lbnQ7XG4gICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKHF1ZXJ5LCB2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgbWFrZU9ic2VydmFibGUgPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0T2JzZXJ2YWJsZUZyb21MaW5rKHF1ZXJ5LCBjb250ZXh0LCB2YXJpYWJsZXMpLm1hcChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGZldGNoUG9saWN5ICE9PSAnbm8tY2FjaGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRXcml0ZVJlc3VsdChyZXN1bHQsIGVycm9yUG9saWN5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2FjaGUud3JpdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJZDogJ1JPT1RfU1VCU0NSSVBUSU9OJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5ncmFwaFFMUmVzdWx0SGFzRXJyb3IocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IHJlc3VsdC5lcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybShxdWVyeSkuaGFzQ2xpZW50RXhwb3J0cykge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGVQcm9taXNlXzEgPSB0aGlzLmxvY2FsU3RhdGUuYWRkRXhwb3J0ZWRWYXJpYWJsZXMocXVlcnksIHZhcmlhYmxlcywgY29udGV4dCkudGhlbihtYWtlT2JzZXJ2YWJsZSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHV0aWxpdGllcy5PYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBudWxsO1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGVQcm9taXNlXzEudGhlbihmdW5jdGlvbiAob2JzZXJ2YWJsZSkgeyByZXR1cm4gc3ViID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUob2JzZXJ2ZXIpOyB9LCBvYnNlcnZlci5lcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YiAmJiBzdWIudW5zdWJzY3JpYmUoKTsgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYWtlT2JzZXJ2YWJsZSh2YXJpYWJsZXMpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdG9wUXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB0aGlzLnN0b3BRdWVyeU5vQnJvYWRjYXN0KHF1ZXJ5SWQpO1xuICAgICAgICB0aGlzLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RvcFF1ZXJ5Tm9Ccm9hZGNhc3QgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB0aGlzLnN0b3BRdWVyeUluU3RvcmVOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgdGhpcy5yZW1vdmVRdWVyeShxdWVyeUlkKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucmVtb3ZlUXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB0aGlzLmZldGNoQ2FuY2VsRm5zLmRlbGV0ZShxdWVyeUlkKTtcbiAgICAgICAgdGhpcy5nZXRRdWVyeShxdWVyeUlkKS5zdG9wKCk7XG4gICAgICAgIHRoaXMucXVlcmllcy5kZWxldGUocXVlcnlJZCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmJyb2FkY2FzdFF1ZXJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQnJvYWRjYXN0KVxuICAgICAgICAgICAgdGhpcy5vbkJyb2FkY2FzdCgpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5mbykgeyByZXR1cm4gaW5mby5ub3RpZnkoKTsgfSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldExvY2FsU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsU3RhdGU7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldE9ic2VydmFibGVGcm9tTGluayA9IGZ1bmN0aW9uIChxdWVyeSwgY29udGV4dCwgdmFyaWFibGVzLCBkZWR1cGxpY2F0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGRlZHVwbGljYXRpb24gPT09IHZvaWQgMCkgeyBkZWR1cGxpY2F0aW9uID0gKF9hID0gY29udGV4dCA9PT0gbnVsbCB8fCBjb250ZXh0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZXh0LnF1ZXJ5RGVkdXBsaWNhdGlvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5xdWVyeURlZHVwbGljYXRpb247IH1cbiAgICAgICAgdmFyIG9ic2VydmFibGU7XG4gICAgICAgIHZhciBzZXJ2ZXJRdWVyeSA9IHRoaXMudHJhbnNmb3JtKHF1ZXJ5KS5zZXJ2ZXJRdWVyeTtcbiAgICAgICAgaWYgKHNlcnZlclF1ZXJ5KSB7XG4gICAgICAgICAgICB2YXIgX2IgPSB0aGlzLCBpbkZsaWdodExpbmtPYnNlcnZhYmxlc18xID0gX2IuaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXMsIGxpbmsgPSBfYi5saW5rO1xuICAgICAgICAgICAgdmFyIG9wZXJhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBxdWVyeTogc2VydmVyUXVlcnksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uTmFtZTogdXRpbGl0aWVzLmdldE9wZXJhdGlvbk5hbWUoc2VydmVyUXVlcnkpIHx8IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB0aGlzLnByZXBhcmVDb250ZXh0KHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyBmb3JjZUZldGNoOiAhZGVkdXBsaWNhdGlvbiB9KSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29udGV4dCA9IG9wZXJhdGlvbi5jb250ZXh0O1xuICAgICAgICAgICAgaWYgKGRlZHVwbGljYXRpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgYnlWYXJpYWJsZXNfMSA9IGluRmxpZ2h0TGlua09ic2VydmFibGVzXzEuZ2V0KHNlcnZlclF1ZXJ5KSB8fCBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXNfMS5zZXQoc2VydmVyUXVlcnksIGJ5VmFyaWFibGVzXzEpO1xuICAgICAgICAgICAgICAgIHZhciB2YXJKc29uXzEgPSBjYWNoZS5jYW5vbmljYWxTdHJpbmdpZnkodmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlID0gYnlWYXJpYWJsZXNfMS5nZXQodmFySnNvbl8xKTtcbiAgICAgICAgICAgICAgICBpZiAoIW9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNhc3QgPSBuZXcgdXRpbGl0aWVzLkNvbmNhc3QoW1xuICAgICAgICAgICAgICAgICAgICAgICAgY29yZS5leGVjdXRlKGxpbmssIG9wZXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIGJ5VmFyaWFibGVzXzEuc2V0KHZhckpzb25fMSwgb2JzZXJ2YWJsZSA9IGNvbmNhc3QpO1xuICAgICAgICAgICAgICAgICAgICBjb25jYXN0LmNsZWFudXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ5VmFyaWFibGVzXzEuZGVsZXRlKHZhckpzb25fMSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieVZhcmlhYmxlc18xLnNpemUgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXNfMS5kZWxldGUoc2VydmVyUXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlID0gbmV3IHV0aWxpdGllcy5Db25jYXN0KFtcbiAgICAgICAgICAgICAgICAgICAgY29yZS5leGVjdXRlKGxpbmssIG9wZXJhdGlvbilcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSBuZXcgdXRpbGl0aWVzLkNvbmNhc3QoW1xuICAgICAgICAgICAgICAgIHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKHsgZGF0YToge30gfSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgY29udGV4dCA9IHRoaXMucHJlcGFyZUNvbnRleHQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsaWVudFF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ocXVlcnkpLmNsaWVudFF1ZXJ5O1xuICAgICAgICBpZiAoY2xpZW50UXVlcnkpIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSB1dGlsaXRpZXMuYXN5bmNNYXAob2JzZXJ2YWJsZSwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5sb2NhbFN0YXRlLnJ1blJlc29sdmVycyh7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBjbGllbnRRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlUmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldFJlc3VsdHNGcm9tTGluayA9IGZ1bmN0aW9uIChxdWVyeUluZm8sIGNhY2hlV3JpdGVCZWhhdmlvciwgb3B0aW9ucykge1xuICAgICAgICB2YXIgcmVxdWVzdElkID0gcXVlcnlJbmZvLmxhc3RSZXF1ZXN0SWQgPSB0aGlzLmdlbmVyYXRlUmVxdWVzdElkKCk7XG4gICAgICAgIHJldHVybiB1dGlsaXRpZXMuYXN5bmNNYXAodGhpcy5nZXRPYnNlcnZhYmxlRnJvbUxpbmsocXVlcnlJbmZvLmRvY3VtZW50LCBvcHRpb25zLmNvbnRleHQsIG9wdGlvbnMudmFyaWFibGVzKSwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIGhhc0Vycm9ycyA9IHV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkocmVzdWx0LmVycm9ycyk7XG4gICAgICAgICAgICBpZiAocmVxdWVzdElkID49IHF1ZXJ5SW5mby5sYXN0UmVxdWVzdElkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0Vycm9ycyAmJiBvcHRpb25zLmVycm9yUG9saWN5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBxdWVyeUluZm8ubWFya0Vycm9yKG5ldyBlcnJvcnMuQXBvbGxvRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogcmVzdWx0LmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBxdWVyeUluZm8ubWFya1Jlc3VsdChyZXN1bHQsIG9wdGlvbnMsIGNhY2hlV3JpdGVCZWhhdmlvcik7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm1hcmtSZWFkeSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFxciA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBxdWVyeUluZm8ubmV0d29ya1N0YXR1cyB8fCBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVhZHksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGhhc0Vycm9ycyAmJiBvcHRpb25zLmVycm9yUG9saWN5ICE9PSBcImlnbm9yZVwiKSB7XG4gICAgICAgICAgICAgICAgYXFyLmVycm9ycyA9IHJlc3VsdC5lcnJvcnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXFyO1xuICAgICAgICB9LCBmdW5jdGlvbiAobmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBlcnJvcnMuaXNBcG9sbG9FcnJvcihuZXR3b3JrRXJyb3IpXG4gICAgICAgICAgICAgICAgPyBuZXR3b3JrRXJyb3JcbiAgICAgICAgICAgICAgICA6IG5ldyBlcnJvcnMuQXBvbGxvRXJyb3IoeyBuZXR3b3JrRXJyb3I6IG5ldHdvcmtFcnJvciB9KTtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0SWQgPj0gcXVlcnlJbmZvLmxhc3RSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8ubWFya0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZmV0Y2hRdWVyeU9ic2VydmFibGUgPSBmdW5jdGlvbiAocXVlcnlJZCwgb3B0aW9ucywgbmV0d29ya1N0YXR1cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobmV0d29ya1N0YXR1cyA9PT0gdm9pZCAwKSB7IG5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMubG9hZGluZzsgfVxuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnRyYW5zZm9ybShvcHRpb25zLnF1ZXJ5KS5kb2N1bWVudDtcbiAgICAgICAgdmFyIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKHF1ZXJ5LCBvcHRpb25zLnZhcmlhYmxlcyk7XG4gICAgICAgIHZhciBxdWVyeUluZm8gPSB0aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpO1xuICAgICAgICB2YXIgX2EgPSBvcHRpb25zLmZldGNoUG9saWN5LCBmZXRjaFBvbGljeSA9IF9hID09PSB2b2lkIDAgPyBcImNhY2hlLWZpcnN0XCIgOiBfYSwgX2IgPSBvcHRpb25zLmVycm9yUG9saWN5LCBlcnJvclBvbGljeSA9IF9iID09PSB2b2lkIDAgPyBcIm5vbmVcIiA6IF9iLCBfYyA9IG9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEsIHJldHVyblBhcnRpYWxEYXRhID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIF9kID0gb3B0aW9ucy5ub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UsIG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSA9IF9kID09PSB2b2lkIDAgPyBmYWxzZSA6IF9kLCBfZSA9IG9wdGlvbnMuY29udGV4dCwgY29udGV4dCA9IF9lID09PSB2b2lkIDAgPyB7fSA6IF9lO1xuICAgICAgICB2YXIgbm9ybWFsaXplZCA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IGZldGNoUG9saWN5LFxuICAgICAgICAgICAgZXJyb3JQb2xpY3k6IGVycm9yUG9saWN5LFxuICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHJldHVyblBhcnRpYWxEYXRhLFxuICAgICAgICAgICAgbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlOiBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UsXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGZyb21WYXJpYWJsZXMgPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgICAgICBub3JtYWxpemVkLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5mZXRjaFF1ZXJ5QnlQb2xpY3kocXVlcnlJbmZvLCBub3JtYWxpemVkLCBuZXR3b3JrU3RhdHVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5mZXRjaENhbmNlbEZucy5zZXQocXVlcnlJZCwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBjb25jYXN0LmNhbmNlbChyZWFzb24pOyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjb25jYXN0ID0gbmV3IHV0aWxpdGllcy5Db25jYXN0KHRoaXMudHJhbnNmb3JtKG5vcm1hbGl6ZWQucXVlcnkpLmhhc0NsaWVudEV4cG9ydHNcbiAgICAgICAgICAgID8gdGhpcy5sb2NhbFN0YXRlLmFkZEV4cG9ydGVkVmFyaWFibGVzKG5vcm1hbGl6ZWQucXVlcnksIG5vcm1hbGl6ZWQudmFyaWFibGVzLCBub3JtYWxpemVkLmNvbnRleHQpLnRoZW4oZnJvbVZhcmlhYmxlcylcbiAgICAgICAgICAgIDogZnJvbVZhcmlhYmxlcyhub3JtYWxpemVkLnZhcmlhYmxlcykpO1xuICAgICAgICBjb25jYXN0LmNsZWFudXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZmV0Y2hDYW5jZWxGbnMuZGVsZXRlKHF1ZXJ5SWQpO1xuICAgICAgICAgICAgYXBwbHlOZXh0RmV0Y2hQb2xpY3kob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29uY2FzdDtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucmVmZXRjaFF1ZXJpZXMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHVwZGF0ZUNhY2hlID0gX2EudXBkYXRlQ2FjaGUsIGluY2x1ZGUgPSBfYS5pbmNsdWRlLCBfYiA9IF9hLm9wdGltaXN0aWMsIG9wdGltaXN0aWMgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYiwgX2MgPSBfYS5yZW1vdmVPcHRpbWlzdGljLCByZW1vdmVPcHRpbWlzdGljID0gX2MgPT09IHZvaWQgMCA/IG9wdGltaXN0aWMgPyB1dGlsaXRpZXMubWFrZVVuaXF1ZUlkKFwicmVmZXRjaFF1ZXJpZXNcIikgOiB2b2lkIDAgOiBfYywgb25RdWVyeVVwZGF0ZWQgPSBfYS5vblF1ZXJ5VXBkYXRlZDtcbiAgICAgICAgdmFyIGluY2x1ZGVkUXVlcmllc0J5SWQgPSBuZXcgTWFwKCk7XG4gICAgICAgIGlmIChpbmNsdWRlKSB7XG4gICAgICAgICAgICB0aGlzLmdldE9ic2VydmFibGVRdWVyaWVzKGluY2x1ZGUpLmZvckVhY2goZnVuY3Rpb24gKG9xLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICAgICAgaW5jbHVkZWRRdWVyaWVzQnlJZC5zZXQocXVlcnlJZCwge1xuICAgICAgICAgICAgICAgICAgICBvcTogb3EsXG4gICAgICAgICAgICAgICAgICAgIGxhc3REaWZmOiBfdGhpcy5nZXRRdWVyeShxdWVyeUlkKS5nZXREaWZmKCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0cyA9IG5ldyBNYXA7XG4gICAgICAgIGlmICh1cGRhdGVDYWNoZSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5iYXRjaCh7XG4gICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGVDYWNoZSxcbiAgICAgICAgICAgICAgICBvcHRpbWlzdGljOiBvcHRpbWlzdGljICYmIHJlbW92ZU9wdGltaXN0aWMgfHwgZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVtb3ZlT3B0aW1pc3RpYzogcmVtb3ZlT3B0aW1pc3RpYyxcbiAgICAgICAgICAgICAgICBvbldhdGNoVXBkYXRlZDogZnVuY3Rpb24gKHdhdGNoLCBkaWZmLCBsYXN0RGlmZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3EgPSB3YXRjaC53YXRjaGVyIGluc3RhbmNlb2YgUXVlcnlJbmZvICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXRjaC53YXRjaGVyLm9ic2VydmFibGVRdWVyeTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25RdWVyeVVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZFF1ZXJpZXNCeUlkLmRlbGV0ZShvcS5xdWVyeUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gb25RdWVyeVVwZGF0ZWQob3EsIGRpZmYsIGxhc3REaWZmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9xLnJlZmV0Y2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zZXQob3EsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25RdWVyeVVwZGF0ZWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZFF1ZXJpZXNCeUlkLnNldChvcS5xdWVyeUlkLCB7IG9xOiBvcSwgbGFzdERpZmY6IGxhc3REaWZmLCBkaWZmOiBkaWZmIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmNsdWRlZFF1ZXJpZXNCeUlkLnNpemUpIHtcbiAgICAgICAgICAgIGluY2x1ZGVkUXVlcmllc0J5SWQuZm9yRWFjaChmdW5jdGlvbiAoX2EsIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3EgPSBfYS5vcSwgbGFzdERpZmYgPSBfYS5sYXN0RGlmZiwgZGlmZiA9IF9hLmRpZmY7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAob25RdWVyeVVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IG9xW1wicXVlcnlJbmZvXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlmZiA9IGluZm8uZ2V0RGlmZigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9uUXVlcnlVcGRhdGVkKG9xLCBkaWZmLCBsYXN0RGlmZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghb25RdWVyeVVwZGF0ZWQgfHwgcmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9xLnJlZmV0Y2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zZXQob3EsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChxdWVyeUlkLmluZGV4T2YoXCJsZWdhY3lPbmVUaW1lUXVlcnlcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdG9wUXVlcnlOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVtb3ZlT3B0aW1pc3RpYykge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5yZW1vdmVPcHRpbWlzdGljKHJlbW92ZU9wdGltaXN0aWMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5mZXRjaFF1ZXJ5QnlQb2xpY3kgPSBmdW5jdGlvbiAocXVlcnlJbmZvLCBfYSwgbmV0d29ya1N0YXR1cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcXVlcnkgPSBfYS5xdWVyeSwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBmZXRjaFBvbGljeSA9IF9hLmZldGNoUG9saWN5LCByZWZldGNoV3JpdGVQb2xpY3kgPSBfYS5yZWZldGNoV3JpdGVQb2xpY3ksIGVycm9yUG9saWN5ID0gX2EuZXJyb3JQb2xpY3ksIHJldHVyblBhcnRpYWxEYXRhID0gX2EucmV0dXJuUGFydGlhbERhdGEsIGNvbnRleHQgPSBfYS5jb250ZXh0LCBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UgPSBfYS5ub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2U7XG4gICAgICAgIHZhciBvbGROZXR3b3JrU3RhdHVzID0gcXVlcnlJbmZvLm5ldHdvcmtTdGF0dXM7XG4gICAgICAgIHF1ZXJ5SW5mby5pbml0KHtcbiAgICAgICAgICAgIGRvY3VtZW50OiBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgbmV0d29ya1N0YXR1czogbmV0d29ya1N0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZWFkQ2FjaGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBxdWVyeUluZm8uZ2V0RGlmZih2YXJpYWJsZXMpOyB9O1xuICAgICAgICB2YXIgcmVzdWx0c0Zyb21DYWNoZSA9IGZ1bmN0aW9uIChkaWZmLCBuZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAobmV0d29ya1N0YXR1cyA9PT0gdm9pZCAwKSB7IG5ldHdvcmtTdGF0dXMgPSBxdWVyeUluZm8ubmV0d29ya1N0YXR1cyB8fCBleHBvcnRzLk5ldHdvcmtTdGF0dXMubG9hZGluZzsgfVxuICAgICAgICAgICAgdmFyIGRhdGEgPSBkaWZmLnJlc3VsdDtcbiAgICAgICAgICAgIGlmIChfX0RFVl9fICYmXG4gICAgICAgICAgICAgICAgIXJldHVyblBhcnRpYWxEYXRhICYmXG4gICAgICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKGRhdGEsIHt9KSkge1xuICAgICAgICAgICAgICAgIGxvZ01pc3NpbmdGaWVsZEVycm9ycyhkaWZmLm1pc3NpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZyb21EYXRhID0gZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKHRzbGliLl9fYXNzaWduKHsgZGF0YTogZGF0YSwgbG9hZGluZzogaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0KG5ldHdvcmtTdGF0dXMpLCBuZXR3b3JrU3RhdHVzOiBuZXR3b3JrU3RhdHVzIH0sIChkaWZmLmNvbXBsZXRlID8gbnVsbCA6IHsgcGFydGlhbDogdHJ1ZSB9KSkpOyB9O1xuICAgICAgICAgICAgaWYgKGRhdGEgJiYgX3RoaXMudHJhbnNmb3JtKHF1ZXJ5KS5oYXNGb3JjZWRSZXNvbHZlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubG9jYWxTdGF0ZS5ydW5SZXNvbHZlcnMoe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZVJlc3VsdDogeyBkYXRhOiBkYXRhIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc29sdmVkKSB7IHJldHVybiBmcm9tRGF0YShyZXNvbHZlZC5kYXRhIHx8IHZvaWQgMCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyb21EYXRhKGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY2FjaGVXcml0ZUJlaGF2aW9yID0gZmV0Y2hQb2xpY3kgPT09IFwibm8tY2FjaGVcIiA/IDAgOlxuICAgICAgICAgICAgKG5ldHdvcmtTdGF0dXMgPT09IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5yZWZldGNoICYmXG4gICAgICAgICAgICAgICAgcmVmZXRjaFdyaXRlUG9saWN5ICE9PSBcIm1lcmdlXCIpID8gMVxuICAgICAgICAgICAgICAgIDogMjtcbiAgICAgICAgdmFyIHJlc3VsdHNGcm9tTGluayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRSZXN1bHRzRnJvbUxpbmsocXVlcnlJbmZvLCBjYWNoZVdyaXRlQmVoYXZpb3IsIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiBmZXRjaFBvbGljeSxcbiAgICAgICAgICAgICAgICBlcnJvclBvbGljeTogZXJyb3JQb2xpY3ksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNob3VsZE5vdGlmeSA9IG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSAmJlxuICAgICAgICAgICAgdHlwZW9mIG9sZE5ldHdvcmtTdGF0dXMgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgICAgIG9sZE5ldHdvcmtTdGF0dXMgIT09IG5ldHdvcmtTdGF0dXMgJiZcbiAgICAgICAgICAgIGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodChuZXR3b3JrU3RhdHVzKTtcbiAgICAgICAgc3dpdGNoIChmZXRjaFBvbGljeSkge1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhc2UgXCJjYWNoZS1maXJzdFwiOiB7XG4gICAgICAgICAgICAgICAgdmFyIGRpZmYgPSByZWFkQ2FjaGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShkaWZmLCBxdWVyeUluZm8ubWFya1JlYWR5KCkpLFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuUGFydGlhbERhdGEgfHwgc2hvdWxkTm90aWZ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUNhY2hlKGRpZmYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21MaW5rKCksXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tTGluaygpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiY2FjaGUtYW5kLW5ldHdvcmtcIjoge1xuICAgICAgICAgICAgICAgIHZhciBkaWZmID0gcmVhZENhY2hlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUgfHwgcmV0dXJuUGFydGlhbERhdGEgfHwgc2hvdWxkTm90aWZ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUNhY2hlKGRpZmYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21MaW5rKCksXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tTGluaygpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiY2FjaGUtb25seVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tQ2FjaGUocmVhZENhY2hlKCksIHF1ZXJ5SW5mby5tYXJrUmVhZHkoKSksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGNhc2UgXCJuZXR3b3JrLW9ubHlcIjpcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkTm90aWZ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUNhY2hlKHJlYWRDYWNoZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tTGluaygpLFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW3Jlc3VsdHNGcm9tTGluaygpXTtcbiAgICAgICAgICAgIGNhc2UgXCJuby1jYWNoZVwiOlxuICAgICAgICAgICAgICAgIGlmIChzaG91bGROb3RpZnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tQ2FjaGUocXVlcnlJbmZvLmdldERpZmYoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtyZXN1bHRzRnJvbUxpbmsoKV07XG4gICAgICAgICAgICBjYXNlIFwic3RhbmRieVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIGlmIChxdWVyeUlkICYmICF0aGlzLnF1ZXJpZXMuaGFzKHF1ZXJ5SWQpKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJpZXMuc2V0KHF1ZXJ5SWQsIG5ldyBRdWVyeUluZm8odGhpcywgcXVlcnlJZCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuZ2V0KHF1ZXJ5SWQpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5wcmVwYXJlQ29udGV4dCA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgICAgIHZhciBuZXdDb250ZXh0ID0gdGhpcy5sb2NhbFN0YXRlLnByZXBhcmVDb250ZXh0KGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG5ld0NvbnRleHQpLCB7IGNsaWVudEF3YXJlbmVzczogdGhpcy5jbGllbnRBd2FyZW5lc3MgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUXVlcnlNYW5hZ2VyO1xufSgpKTtcblxudmFyIGhhc1N1Z2dlc3RlZERldnRvb2xzID0gZmFsc2U7XG5mdW5jdGlvbiBtZXJnZU9wdGlvbnMoZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmNvbXBhY3QoZGVmYXVsdHMsIG9wdGlvbnMsIG9wdGlvbnMudmFyaWFibGVzICYmIHtcbiAgICAgICAgdmFyaWFibGVzOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZGVmYXVsdHMudmFyaWFibGVzKSwgb3B0aW9ucy52YXJpYWJsZXMpLFxuICAgIH0pO1xufVxudmFyIEFwb2xsb0NsaWVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBvbGxvQ2xpZW50KG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLnJlc2V0U3RvcmVDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdGhpcy5jbGVhclN0b3JlQ2FsbGJhY2tzID0gW107XG4gICAgICAgIHZhciB1cmkgPSBvcHRpb25zLnVyaSwgY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzLCBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzLCBjYWNoZSA9IG9wdGlvbnMuY2FjaGUsIF9hID0gb3B0aW9ucy5zc3JNb2RlLCBzc3JNb2RlID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zc3JGb3JjZUZldGNoRGVsYXksIHNzckZvcmNlRmV0Y2hEZWxheSA9IF9iID09PSB2b2lkIDAgPyAwIDogX2IsIF9jID0gb3B0aW9ucy5jb25uZWN0VG9EZXZUb29scywgY29ubmVjdFRvRGV2VG9vbHMgPSBfYyA9PT0gdm9pZCAwID8gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICF3aW5kb3cuX19BUE9MTE9fQ0xJRU5UX18gJiZcbiAgICAgICAgICAgIF9fREVWX18gOiBfYywgX2QgPSBvcHRpb25zLnF1ZXJ5RGVkdXBsaWNhdGlvbiwgcXVlcnlEZWR1cGxpY2F0aW9uID0gX2QgPT09IHZvaWQgMCA/IHRydWUgOiBfZCwgZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zLmRlZmF1bHRPcHRpb25zLCBfZSA9IG9wdGlvbnMuYXNzdW1lSW1tdXRhYmxlUmVzdWx0cywgYXNzdW1lSW1tdXRhYmxlUmVzdWx0cyA9IF9lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9lLCByZXNvbHZlcnMgPSBvcHRpb25zLnJlc29sdmVycywgdHlwZURlZnMgPSBvcHRpb25zLnR5cGVEZWZzLCBmcmFnbWVudE1hdGNoZXIgPSBvcHRpb25zLmZyYWdtZW50TWF0Y2hlciwgY2xpZW50QXdhcmVuZXNzTmFtZSA9IG9wdGlvbnMubmFtZSwgY2xpZW50QXdhcmVuZXNzVmVyc2lvbiA9IG9wdGlvbnMudmVyc2lvbjtcbiAgICAgICAgdmFyIGxpbmsgPSBvcHRpb25zLmxpbms7XG4gICAgICAgIGlmICghbGluaykge1xuICAgICAgICAgICAgbGluayA9IHVyaVxuICAgICAgICAgICAgICAgID8gbmV3IGh0dHAuSHR0cExpbmsoeyB1cmk6IHVyaSwgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICAgICAgOiBjb3JlLkFwb2xsb0xpbmsuZW1wdHkoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhY2hlKSB7XG4gICAgICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJUbyBpbml0aWFsaXplIEFwb2xsbyBDbGllbnQsIHlvdSBtdXN0IHNwZWNpZnkgYSAnY2FjaGUnIHByb3BlcnR5IFwiICtcbiAgICAgICAgICAgICAgICBcImluIHRoZSBvcHRpb25zIG9iamVjdC4gXFxuXCIgK1xuICAgICAgICAgICAgICAgIFwiRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSB2aXNpdDogaHR0cHM6Ly9nby5hcG9sbG8uZGV2L2MvZG9jc1wiKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGluayA9IGxpbms7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlTmV0d29ya0ZldGNoZXMgPSBzc3JNb2RlIHx8IHNzckZvcmNlRmV0Y2hEZWxheSA+IDA7XG4gICAgICAgIHRoaXMucXVlcnlEZWR1cGxpY2F0aW9uID0gcXVlcnlEZWR1cGxpY2F0aW9uO1xuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0gZGVmYXVsdE9wdGlvbnMgfHwge307XG4gICAgICAgIHRoaXMudHlwZURlZnMgPSB0eXBlRGVmcztcbiAgICAgICAgaWYgKHNzckZvcmNlRmV0Y2hEZWxheSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiAoX3RoaXMuZGlzYWJsZU5ldHdvcmtGZXRjaGVzID0gZmFsc2UpOyB9LCBzc3JGb3JjZUZldGNoRGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2F0Y2hRdWVyeSA9IHRoaXMud2F0Y2hRdWVyeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm11dGF0ZSA9IHRoaXMubXV0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVzZXRTdG9yZSA9IHRoaXMucmVzZXRTdG9yZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcyA9IHRoaXMucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzLmJpbmQodGhpcyk7XG4gICAgICAgIGlmIChjb25uZWN0VG9EZXZUb29scyAmJiB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgd2luZG93Ll9fQVBPTExPX0NMSUVOVF9fID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhc1N1Z2dlc3RlZERldnRvb2xzICYmIF9fREVWX18pIHtcbiAgICAgICAgICAgIGhhc1N1Z2dlc3RlZERldnRvb2xzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudCAmJlxuICAgICAgICAgICAgICAgIHdpbmRvdy50b3AgPT09IHdpbmRvdy5zZWxmICYmXG4gICAgICAgICAgICAgICAgIXdpbmRvdy5fX0FQT0xMT19ERVZUT09MU19HTE9CQUxfSE9PS19fKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hdiA9IHdpbmRvdy5uYXZpZ2F0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHVhID0gbmF2ICYmIG5hdi51c2VyQWdlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1YS5pbmRleE9mKFwiQ2hyb21lL1wiKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBcImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwb2xsby1jbGllbnQtZGV2ZWxvcGVyLXQvamRra25ra2JlYmJhcGlsZ29lY2NjaWdsa2ZibWJuZm1cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh1YS5pbmRleE9mKFwiRmlyZWZveC9cIikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gXCJodHRwczovL2FkZG9ucy5tb3ppbGxhLm9yZy9lbi1VUy9maXJlZm94L2FkZG9uL2Fwb2xsby1kZXZlbG9wZXItdG9vbHMvXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmxvZyhcIkRvd25sb2FkIHRoZSBBcG9sbG8gRGV2VG9vbHMgZm9yIGEgYmV0dGVyIGRldmVsb3BtZW50IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwZXJpZW5jZTogXCIgKyB1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB0aGlzLmxvY2FsU3RhdGUgPSBuZXcgTG9jYWxTdGF0ZSh7XG4gICAgICAgICAgICBjYWNoZTogY2FjaGUsXG4gICAgICAgICAgICBjbGllbnQ6IHRoaXMsXG4gICAgICAgICAgICByZXNvbHZlcnM6IHJlc29sdmVycyxcbiAgICAgICAgICAgIGZyYWdtZW50TWF0Y2hlcjogZnJhZ21lbnRNYXRjaGVyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIgPSBuZXcgUXVlcnlNYW5hZ2VyKHtcbiAgICAgICAgICAgIGNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgICAgICAgbGluazogdGhpcy5saW5rLFxuICAgICAgICAgICAgcXVlcnlEZWR1cGxpY2F0aW9uOiBxdWVyeURlZHVwbGljYXRpb24sXG4gICAgICAgICAgICBzc3JNb2RlOiBzc3JNb2RlLFxuICAgICAgICAgICAgY2xpZW50QXdhcmVuZXNzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogY2xpZW50QXdhcmVuZXNzTmFtZSxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBjbGllbnRBd2FyZW5lc3NWZXJzaW9uLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvY2FsU3RhdGU6IHRoaXMubG9jYWxTdGF0ZSxcbiAgICAgICAgICAgIGFzc3VtZUltbXV0YWJsZVJlc3VsdHM6IGFzc3VtZUltbXV0YWJsZVJlc3VsdHMsXG4gICAgICAgICAgICBvbkJyb2FkY2FzdDogY29ubmVjdFRvRGV2VG9vbHMgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmRldlRvb2xzSG9va0NiKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRldlRvb2xzSG9va0NiKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJpZXM6IF90aGlzLnF1ZXJ5TWFuYWdlci5nZXRRdWVyeVN0b3JlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25zOiBfdGhpcy5xdWVyeU1hbmFnZXIubXV0YXRpb25TdG9yZSB8fCB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhV2l0aE9wdGltaXN0aWNSZXN1bHRzOiBfdGhpcy5jYWNoZS5leHRyYWN0KHRydWUpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IDogdm9pZCAwLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci5zdG9wKCk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLndhdGNoUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0T3B0aW9ucy53YXRjaFF1ZXJ5KSB7XG4gICAgICAgICAgICBvcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMuZGVmYXVsdE9wdGlvbnMud2F0Y2hRdWVyeSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZU5ldHdvcmtGZXRjaGVzICYmXG4gICAgICAgICAgICAob3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScgfHxcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID09PSAnY2FjaGUtYW5kLW5ldHdvcmsnKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBmZXRjaFBvbGljeTogJ2NhY2hlLWZpcnN0JyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIud2F0Y2hRdWVyeShvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0T3B0aW9ucy5xdWVyeSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLmRlZmF1bHRPcHRpb25zLnF1ZXJ5LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQob3B0aW9ucy5mZXRjaFBvbGljeSAhPT0gJ2NhY2hlLWFuZC1uZXR3b3JrJywgJ1RoZSBjYWNoZS1hbmQtbmV0d29yayBmZXRjaFBvbGljeSBkb2VzIG5vdCB3b3JrIHdpdGggY2xpZW50LnF1ZXJ5LCBiZWNhdXNlICcgK1xuICAgICAgICAgICAgJ2NsaWVudC5xdWVyeSBjYW4gb25seSByZXR1cm4gYSBzaW5nbGUgcmVzdWx0LiBQbGVhc2UgdXNlIGNsaWVudC53YXRjaFF1ZXJ5ICcgK1xuICAgICAgICAgICAgJ3RvIHJlY2VpdmUgbXVsdGlwbGUgcmVzdWx0cyBmcm9tIHRoZSBjYWNoZSBhbmQgdGhlIG5ldHdvcmssIG9yIGNvbnNpZGVyICcgK1xuICAgICAgICAgICAgJ3VzaW5nIGEgZGlmZmVyZW50IGZldGNoUG9saWN5LCBzdWNoIGFzIGNhY2hlLWZpcnN0IG9yIG5ldHdvcmstb25seS4nKSA6IGdsb2JhbHMuaW52YXJpYW50KG9wdGlvbnMuZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1hbmQtbmV0d29yaycsIDgpO1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlTmV0d29ya0ZldGNoZXMgJiYgb3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZmV0Y2hQb2xpY3k6ICdjYWNoZS1maXJzdCcgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLnF1ZXJ5KG9wdGlvbnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5tdXRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0T3B0aW9ucy5tdXRhdGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBtZXJnZU9wdGlvbnModGhpcy5kZWZhdWx0T3B0aW9ucy5tdXRhdGUsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5tdXRhdGUob3B0aW9ucyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5zdGFydEdyYXBoUUxTdWJzY3JpcHRpb24ob3B0aW9ucyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnJlYWRRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnJlYWRRdWVyeShvcHRpb25zLCBvcHRpbWlzdGljKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVhZEZyYWdtZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucmVhZEZyYWdtZW50KG9wdGlvbnMsIG9wdGltaXN0aWMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS53cml0ZVF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jYWNoZS53cml0ZVF1ZXJ5KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLndyaXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNhY2hlLndyaXRlRnJhZ21lbnQob3B0aW9ucyk7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuX19hY3Rpb25Ib29rRm9yRGV2VG9vbHMgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdGhpcy5kZXZUb29sc0hvb2tDYiA9IGNiO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5fX3JlcXVlc3RSYXcgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gY29yZS5leGVjdXRlKHRoaXMubGluaywgcGF5bG9hZCk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnJlc2V0U3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucXVlcnlNYW5hZ2VyLmNsZWFyU3RvcmUoe1xuICAgICAgICAgICAgZGlzY2FyZFdhdGNoZXM6IGZhbHNlLFxuICAgICAgICB9KTsgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UuYWxsKF90aGlzLnJlc2V0U3RvcmVDYWxsYmFja3MubWFwKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oKTsgfSkpOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzKCk7IH0pO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5jbGVhclN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnF1ZXJ5TWFuYWdlci5jbGVhclN0b3JlKHtcbiAgICAgICAgICAgIGRpc2NhcmRXYXRjaGVzOiB0cnVlLFxuICAgICAgICB9KTsgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UuYWxsKF90aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MubWFwKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oKTsgfSkpOyB9KTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUub25SZXNldFN0b3JlID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucmVzZXRTdG9yZUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJlc2V0U3RvcmVDYWxsYmFja3MgPSBfdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gY2I7IH0pO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5vbkNsZWFyU3RvcmUgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGVhclN0b3JlQ2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcyA9IF90aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSBjYjsgfSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcyA9IGZ1bmN0aW9uIChpbmNsdWRlU3RhbmRieSkge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzKGluY2x1ZGVTdGFuZGJ5KTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVmZXRjaFF1ZXJpZXMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgbWFwID0gdGhpcy5xdWVyeU1hbmFnZXIucmVmZXRjaFF1ZXJpZXMob3B0aW9ucyk7XG4gICAgICAgIHZhciBxdWVyaWVzID0gW107XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIG1hcC5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQsIG9ic1F1ZXJ5KSB7XG4gICAgICAgICAgICBxdWVyaWVzLnB1c2gob2JzUXVlcnkpO1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gUHJvbWlzZS5hbGwocmVzdWx0cyk7XG4gICAgICAgIHJlc3VsdC5xdWVyaWVzID0gcXVlcmllcztcbiAgICAgICAgcmVzdWx0LnJlc3VsdHMgPSByZXN1bHRzO1xuICAgICAgICByZXN1bHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmRlYnVnKFwiSW4gY2xpZW50LnJlZmV0Y2hRdWVyaWVzLCBQcm9taXNlLmFsbCBwcm9taXNlIHJlamVjdGVkIHdpdGggZXJyb3IgXCIuY29uY2F0KGVycm9yKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5nZXRPYnNlcnZhYmxlUXVlcmllcyA9IGZ1bmN0aW9uIChpbmNsdWRlKSB7XG4gICAgICAgIGlmIChpbmNsdWRlID09PSB2b2lkIDApIHsgaW5jbHVkZSA9IFwiYWN0aXZlXCI7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLmdldE9ic2VydmFibGVRdWVyaWVzKGluY2x1ZGUpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKG9wdGltaXN0aWMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuZXh0cmFjdChvcHRpbWlzdGljKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVzdG9yZSA9IGZ1bmN0aW9uIChzZXJpYWxpemVkU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucmVzdG9yZShzZXJpYWxpemVkU3RhdGUpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5hZGRSZXNvbHZlcnMgPSBmdW5jdGlvbiAocmVzb2x2ZXJzKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdGF0ZS5hZGRSZXNvbHZlcnMocmVzb2x2ZXJzKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc2V0UmVzb2x2ZXJzID0gZnVuY3Rpb24gKHJlc29sdmVycykge1xuICAgICAgICB0aGlzLmxvY2FsU3RhdGUuc2V0UmVzb2x2ZXJzKHJlc29sdmVycyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmdldFJlc29sdmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTdGF0ZS5nZXRSZXNvbHZlcnMoKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc2V0TG9jYWxTdGF0ZUZyYWdtZW50TWF0Y2hlciA9IGZ1bmN0aW9uIChmcmFnbWVudE1hdGNoZXIpIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlLnNldEZyYWdtZW50TWF0Y2hlcihmcmFnbWVudE1hdGNoZXIpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5zZXRMaW5rID0gZnVuY3Rpb24gKG5ld0xpbmspIHtcbiAgICAgICAgdGhpcy5saW5rID0gdGhpcy5xdWVyeU1hbmFnZXIubGluayA9IG5ld0xpbms7XG4gICAgfTtcbiAgICByZXR1cm4gQXBvbGxvQ2xpZW50O1xufSgpKTtcblxudHNJbnZhcmlhbnQuc2V0VmVyYm9zaXR5KGdsb2JhbHMuREVWID8gXCJsb2dcIiA6IFwic2lsZW50XCIpO1xuXG5leHBvcnRzLk9ic2VydmFibGUgPSB1dGlsaXRpZXMuT2JzZXJ2YWJsZTtcbmV4cG9ydHMuaXNSZWZlcmVuY2UgPSB1dGlsaXRpZXMuaXNSZWZlcmVuY2U7XG5leHBvcnRzLm1ha2VSZWZlcmVuY2UgPSB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZTtcbmV4cG9ydHMuQXBvbGxvQ2FjaGUgPSBjYWNoZS5BcG9sbG9DYWNoZTtcbmV4cG9ydHMuQ2FjaGUgPSBjYWNoZS5DYWNoZTtcbmV4cG9ydHMuSW5NZW1vcnlDYWNoZSA9IGNhY2hlLkluTWVtb3J5Q2FjaGU7XG5leHBvcnRzLk1pc3NpbmdGaWVsZEVycm9yID0gY2FjaGUuTWlzc2luZ0ZpZWxkRXJyb3I7XG5leHBvcnRzLmRlZmF1bHREYXRhSWRGcm9tT2JqZWN0ID0gY2FjaGUuZGVmYXVsdERhdGFJZEZyb21PYmplY3Q7XG5leHBvcnRzLm1ha2VWYXIgPSBjYWNoZS5tYWtlVmFyO1xuZXhwb3J0cy5BcG9sbG9FcnJvciA9IGVycm9ycy5BcG9sbG9FcnJvcjtcbmV4cG9ydHMuaXNBcG9sbG9FcnJvciA9IGVycm9ycy5pc0Fwb2xsb0Vycm9yO1xuZXhwb3J0cy5mcm9tRXJyb3IgPSB1dGlscy5mcm9tRXJyb3I7XG5leHBvcnRzLmZyb21Qcm9taXNlID0gdXRpbHMuZnJvbVByb21pc2U7XG5leHBvcnRzLnRocm93U2VydmVyRXJyb3IgPSB1dGlscy50aHJvd1NlcnZlckVycm9yO1xuZXhwb3J0cy50b1Byb21pc2UgPSB1dGlscy50b1Byb21pc2U7XG5leHBvcnRzLnNldExvZ1ZlcmJvc2l0eSA9IHRzSW52YXJpYW50LnNldFZlcmJvc2l0eTtcbmV4cG9ydHMuZGlzYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzID0gZ3JhcGhxbFRhZy5kaXNhYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXM7XG5leHBvcnRzLmRpc2FibGVGcmFnbWVudFdhcm5pbmdzID0gZ3JhcGhxbFRhZy5kaXNhYmxlRnJhZ21lbnRXYXJuaW5ncztcbmV4cG9ydHMuZW5hYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBncmFwaHFsVGFnLmVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzO1xuZXhwb3J0cy5ncWwgPSBncmFwaHFsVGFnLmdxbDtcbmV4cG9ydHMucmVzZXRDYWNoZXMgPSBncmFwaHFsVGFnLnJlc2V0Q2FjaGVzO1xuZXhwb3J0cy5BcG9sbG9DbGllbnQgPSBBcG9sbG9DbGllbnQ7XG5leHBvcnRzLk9ic2VydmFibGVRdWVyeSA9IE9ic2VydmFibGVRdWVyeTtcbmV4cG9ydHMuYXBwbHlOZXh0RmV0Y2hQb2xpY3kgPSBhcHBseU5leHRGZXRjaFBvbGljeTtcbmV4cG9ydHMubWVyZ2VPcHRpb25zID0gbWVyZ2VPcHRpb25zO1xuZm9yICh2YXIgayBpbiBjb3JlKSB7XG4gICAgaWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgZXhwb3J0c1trXSA9IGNvcmVba107XG59XG5mb3IgKHZhciBrIGluIGh0dHApIHtcbiAgICBpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBleHBvcnRzW2tdID0gaHR0cFtrXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xucmVxdWlyZSgnLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMnKTtcblxuZnVuY3Rpb24gaXNBcG9sbG9FcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyLmhhc093blByb3BlcnR5KCdncmFwaFFMRXJyb3JzJyk7XG59XG52YXIgZ2VuZXJhdGVFcnJvck1lc3NhZ2UgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnJztcbiAgICBpZiAodXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShlcnIuZ3JhcGhRTEVycm9ycykgfHwgdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShlcnIuY2xpZW50RXJyb3JzKSkge1xuICAgICAgICB2YXIgZXJyb3JzID0gKGVyci5ncmFwaFFMRXJyb3JzIHx8IFtdKVxuICAgICAgICAgICAgLmNvbmNhdChlcnIuY2xpZW50RXJyb3JzIHx8IFtdKTtcbiAgICAgICAgZXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3JcbiAgICAgICAgICAgICAgICA/IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICA6ICdFcnJvciBtZXNzYWdlIG5vdCBmb3VuZC4nO1xuICAgICAgICAgICAgbWVzc2FnZSArPSBcIlwiLmNvbmNhdChlcnJvck1lc3NhZ2UsIFwiXFxuXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGVyci5uZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgbWVzc2FnZSArPSBcIlwiLmNvbmNhdChlcnIubmV0d29ya0Vycm9yLm1lc3NhZ2UsIFwiXFxuXCIpO1xuICAgIH1cbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKC9cXG4kLywgJycpO1xuICAgIHJldHVybiBtZXNzYWdlO1xufTtcbnZhciBBcG9sbG9FcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKEFwb2xsb0Vycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwb2xsb0Vycm9yKF9hKSB7XG4gICAgICAgIHZhciBncmFwaFFMRXJyb3JzID0gX2EuZ3JhcGhRTEVycm9ycywgY2xpZW50RXJyb3JzID0gX2EuY2xpZW50RXJyb3JzLCBuZXR3b3JrRXJyb3IgPSBfYS5uZXR3b3JrRXJyb3IsIGVycm9yTWVzc2FnZSA9IF9hLmVycm9yTWVzc2FnZSwgZXh0cmFJbmZvID0gX2EuZXh0cmFJbmZvO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlcnJvck1lc3NhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmdyYXBoUUxFcnJvcnMgPSBncmFwaFFMRXJyb3JzIHx8IFtdO1xuICAgICAgICBfdGhpcy5jbGllbnRFcnJvcnMgPSBjbGllbnRFcnJvcnMgfHwgW107XG4gICAgICAgIF90aGlzLm5ldHdvcmtFcnJvciA9IG5ldHdvcmtFcnJvciB8fCBudWxsO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gZXJyb3JNZXNzYWdlIHx8IGdlbmVyYXRlRXJyb3JNZXNzYWdlKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZXh0cmFJbmZvID0gZXh0cmFJbmZvO1xuICAgICAgICBfdGhpcy5fX3Byb3RvX18gPSBBcG9sbG9FcnJvci5wcm90b3R5cGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEFwb2xsb0Vycm9yO1xufShFcnJvcikpO1xuXG5leHBvcnRzLkFwb2xsb0Vycm9yID0gQXBvbGxvRXJyb3I7XG5leHBvcnRzLmlzQXBvbGxvRXJyb3IgPSBpc0Fwb2xsb0Vycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JzLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIHBhc3N0aHJvdWdoKG9wLCBmb3J3YXJkKSB7XG4gICAgcmV0dXJuIChmb3J3YXJkID8gZm9yd2FyZChvcCkgOiB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpKTtcbn1cbmZ1bmN0aW9uIHRvTGluayhoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nID8gbmV3IEFwb2xsb0xpbmsoaGFuZGxlcikgOiBoYW5kbGVyO1xufVxuZnVuY3Rpb24gaXNUZXJtaW5hdGluZyhsaW5rKSB7XG4gICAgcmV0dXJuIGxpbmsucmVxdWVzdC5sZW5ndGggPD0gMTtcbn1cbnZhciBMaW5rRXJyb3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhMaW5rRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGlua0Vycm9yKG1lc3NhZ2UsIGxpbmspIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubGluayA9IGxpbms7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIExpbmtFcnJvcjtcbn0oRXJyb3IpKTtcbnZhciBBcG9sbG9MaW5rID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcG9sbG9MaW5rKHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QpXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICAgIH1cbiAgICBBcG9sbG9MaW5rLmVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKCkgeyByZXR1cm4gdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKTsgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLmZyb20gPSBmdW5jdGlvbiAobGlua3MpIHtcbiAgICAgICAgaWYgKGxpbmtzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBBcG9sbG9MaW5rLmVtcHR5KCk7XG4gICAgICAgIHJldHVybiBsaW5rcy5tYXAodG9MaW5rKS5yZWR1Y2UoZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIHguY29uY2F0KHkpOyB9KTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsuc3BsaXQgPSBmdW5jdGlvbiAodGVzdCwgbGVmdCwgcmlnaHQpIHtcbiAgICAgICAgdmFyIGxlZnRMaW5rID0gdG9MaW5rKGxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRMaW5rID0gdG9MaW5rKHJpZ2h0IHx8IG5ldyBBcG9sbG9MaW5rKHBhc3N0aHJvdWdoKSk7XG4gICAgICAgIGlmIChpc1Rlcm1pbmF0aW5nKGxlZnRMaW5rKSAmJiBpc1Rlcm1pbmF0aW5nKHJpZ2h0TGluaykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3Qob3BlcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICA/IGxlZnRMaW5rLnJlcXVlc3Qob3BlcmF0aW9uKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpXG4gICAgICAgICAgICAgICAgICAgIDogcmlnaHRMaW5rLnJlcXVlc3Qob3BlcmF0aW9uKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbiwgZm9yd2FyZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0KG9wZXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgPyBsZWZ0TGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZm9yd2FyZCkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKVxuICAgICAgICAgICAgICAgICAgICA6IHJpZ2h0TGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZm9yd2FyZCkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLmV4ZWN1dGUgPSBmdW5jdGlvbiAobGluaywgb3BlcmF0aW9uKSB7XG4gICAgICAgIHJldHVybiAobGluay5yZXF1ZXN0KHV0aWxzLmNyZWF0ZU9wZXJhdGlvbihvcGVyYXRpb24uY29udGV4dCwgdXRpbHMudHJhbnNmb3JtT3BlcmF0aW9uKHV0aWxzLnZhbGlkYXRlT3BlcmF0aW9uKG9wZXJhdGlvbikpKSkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKSk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLmNvbmNhdCA9IGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIHZhciBmaXJzdExpbmsgPSB0b0xpbmsoZmlyc3QpO1xuICAgICAgICBpZiAoaXNUZXJtaW5hdGluZyhmaXJzdExpbmspKSB7XG4gICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4obmV3IExpbmtFcnJvcihcIllvdSBhcmUgY2FsbGluZyBjb25jYXQgb24gYSB0ZXJtaW5hdGluZyBsaW5rLCB3aGljaCB3aWxsIGhhdmUgbm8gZWZmZWN0XCIsIGZpcnN0TGluaykpO1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0TGluaztcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV4dExpbmsgPSB0b0xpbmsoc2Vjb25kKTtcbiAgICAgICAgaWYgKGlzVGVybWluYXRpbmcobmV4dExpbmspKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdExpbmsucmVxdWVzdChvcGVyYXRpb24sIGZ1bmN0aW9uIChvcCkgeyByZXR1cm4gbmV4dExpbmsucmVxdWVzdChvcCkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKTsgfSkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24sIGZvcndhcmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGZpcnN0TGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZnVuY3Rpb24gKG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0TGluay5yZXF1ZXN0KG9wLCBmb3J3YXJkKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpO1xuICAgICAgICAgICAgICAgIH0pIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFwb2xsb0xpbmsucHJvdG90eXBlLnNwbGl0ID0gZnVuY3Rpb24gKHRlc3QsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmNhdChBcG9sbG9MaW5rLnNwbGl0KHRlc3QsIGxlZnQsIHJpZ2h0IHx8IG5ldyBBcG9sbG9MaW5rKHBhc3N0aHJvdWdoKSkpO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsb0xpbmsuY29uY2F0KHRoaXMsIG5leHQpO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChvcGVyYXRpb24sIGZvcndhcmQpIHtcbiAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKCdyZXF1ZXN0IGlzIG5vdCBpbXBsZW1lbnRlZCcpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoMTkpO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgb2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKG9ic2VydmVyICYmIG9ic2VydmVyLmVycm9yKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5zZXRPbkVycm9yID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHRoaXMub25FcnJvciA9IGZuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBBcG9sbG9MaW5rO1xufSgpKTtcblxudmFyIGVtcHR5ID0gQXBvbGxvTGluay5lbXB0eTtcblxudmFyIGZyb20gPSBBcG9sbG9MaW5rLmZyb207XG5cbnZhciBzcGxpdCA9IEFwb2xsb0xpbmsuc3BsaXQ7XG5cbnZhciBjb25jYXQgPSBBcG9sbG9MaW5rLmNvbmNhdDtcblxudmFyIGV4ZWN1dGUgPSBBcG9sbG9MaW5rLmV4ZWN1dGU7XG5cbmV4cG9ydHMuQXBvbGxvTGluayA9IEFwb2xsb0xpbms7XG5leHBvcnRzLmNvbmNhdCA9IGNvbmNhdDtcbmV4cG9ydHMuZW1wdHkgPSBlbXB0eTtcbmV4cG9ydHMuZXhlY3V0ZSA9IGV4ZWN1dGU7XG5leHBvcnRzLmZyb20gPSBmcm9tO1xuZXhwb3J0cy5zcGxpdCA9IHNwbGl0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29yZS5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIGdyYXBocWwgPSByZXF1aXJlKCdncmFwaHFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4uL2NvcmUnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIHBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2Uob3BlcmF0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIC50ZXh0KClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGJvZHlUZXh0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShib2R5VGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdmFyIHBhcnNlRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICBwYXJzZUVycm9yLm5hbWUgPSAnU2VydmVyUGFyc2VFcnJvcic7XG4gICAgICAgICAgICBwYXJzZUVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgICBwYXJzZUVycm9yLnN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgICBwYXJzZUVycm9yLmJvZHlUZXh0ID0gYm9keVRleHQ7XG4gICAgICAgICAgICB0aHJvdyBwYXJzZUVycm9yO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgICAgdXRpbHMudGhyb3dTZXJ2ZXJFcnJvcihyZXNwb25zZSwgcmVzdWx0LCBcIlJlc3BvbnNlIG5vdCBzdWNjZXNzZnVsOiBSZWNlaXZlZCBzdGF0dXMgY29kZSBcIi5jb25jYXQocmVzcG9uc2Uuc3RhdHVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlc3VsdCkgJiZcbiAgICAgICAgICAgICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdCwgJ2RhdGEnKSAmJlxuICAgICAgICAgICAgIWhhc093blByb3BlcnR5LmNhbGwocmVzdWx0LCAnZXJyb3JzJykpIHtcbiAgICAgICAgICAgIHV0aWxzLnRocm93U2VydmVyRXJyb3IocmVzcG9uc2UsIHJlc3VsdCwgXCJTZXJ2ZXIgcmVzcG9uc2Ugd2FzIG1pc3NpbmcgZm9yIHF1ZXJ5ICdcIi5jb25jYXQoQXJyYXkuaXNBcnJheShvcGVyYXRpb25zKVxuICAgICAgICAgICAgICAgID8gb3BlcmF0aW9ucy5tYXAoZnVuY3Rpb24gKG9wKSB7IHJldHVybiBvcC5vcGVyYXRpb25OYW1lOyB9KVxuICAgICAgICAgICAgICAgIDogb3BlcmF0aW9ucy5vcGVyYXRpb25OYW1lLCBcIicuXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pOyB9O1xufVxuXG52YXIgc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIgPSBmdW5jdGlvbiAocCwgbGFiZWwpIHtcbiAgICB2YXIgc2VyaWFsaXplZDtcbiAgICB0cnkge1xuICAgICAgICBzZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkocCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHZhciBwYXJzZUVycm9yID0gX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiTmV0d29yayByZXF1ZXN0IGZhaWxlZC4gXCIuY29uY2F0KGxhYmVsLCBcIiBpcyBub3Qgc2VyaWFsaXphYmxlOiBcIikuY29uY2F0KGUubWVzc2FnZSkpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoMjEpO1xuICAgICAgICBwYXJzZUVycm9yLnBhcnNlRXJyb3IgPSBlO1xuICAgICAgICB0aHJvdyBwYXJzZUVycm9yO1xuICAgIH1cbiAgICByZXR1cm4gc2VyaWFsaXplZDtcbn07XG5cbnZhciBkZWZhdWx0SHR0cE9wdGlvbnMgPSB7XG4gICAgaW5jbHVkZVF1ZXJ5OiB0cnVlLFxuICAgIGluY2x1ZGVFeHRlbnNpb25zOiBmYWxzZSxcbn07XG52YXIgZGVmYXVsdEhlYWRlcnMgPSB7XG4gICAgYWNjZXB0OiAnKi8qJyxcbiAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxufTtcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbn07XG52YXIgZmFsbGJhY2tIdHRwQ29uZmlnID0ge1xuICAgIGh0dHA6IGRlZmF1bHRIdHRwT3B0aW9ucyxcbiAgICBoZWFkZXJzOiBkZWZhdWx0SGVhZGVycyxcbiAgICBvcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcbn07XG52YXIgZGVmYXVsdFByaW50ZXIgPSBmdW5jdGlvbiAoYXN0LCBwcmludGVyKSB7IHJldHVybiBwcmludGVyKGFzdCk7IH07XG5mdW5jdGlvbiBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHkob3BlcmF0aW9uLCBmYWxsYmFja0NvbmZpZykge1xuICAgIHZhciBjb25maWdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgY29uZmlnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgY29uZmlncy51bnNoaWZ0KGZhbGxiYWNrQ29uZmlnKTtcbiAgICByZXR1cm4gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5SW50ZXJuYWwuYXBwbHkodm9pZCAwLCB0c2xpYi5fX3NwcmVhZEFycmF5KFtvcGVyYXRpb24sXG4gICAgICAgIGRlZmF1bHRQcmludGVyXSwgY29uZmlncywgZmFsc2UpKTtcbn1cbmZ1bmN0aW9uIHNlbGVjdEh0dHBPcHRpb25zQW5kQm9keUludGVybmFsKG9wZXJhdGlvbiwgcHJpbnRlcikge1xuICAgIHZhciBjb25maWdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgY29uZmlnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICB2YXIgaHR0cCA9IHt9O1xuICAgIGNvbmZpZ3MuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIG9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIGNvbmZpZy5vcHRpb25zKSwgeyBoZWFkZXJzOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucy5oZWFkZXJzKSwgaGVhZGVyc1RvTG93ZXJDYXNlKGNvbmZpZy5oZWFkZXJzKSkgfSk7XG4gICAgICAgIGlmIChjb25maWcuY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY3JlZGVudGlhbHMgPSBjb25maWcuY3JlZGVudGlhbHM7XG4gICAgICAgIH1cbiAgICAgICAgaHR0cCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBodHRwKSwgY29uZmlnLmh0dHApO1xuICAgIH0pO1xuICAgIHZhciBvcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uLm9wZXJhdGlvbk5hbWUsIGV4dGVuc2lvbnMgPSBvcGVyYXRpb24uZXh0ZW5zaW9ucywgdmFyaWFibGVzID0gb3BlcmF0aW9uLnZhcmlhYmxlcywgcXVlcnkgPSBvcGVyYXRpb24ucXVlcnk7XG4gICAgdmFyIGJvZHkgPSB7IG9wZXJhdGlvbk5hbWU6IG9wZXJhdGlvbk5hbWUsIHZhcmlhYmxlczogdmFyaWFibGVzIH07XG4gICAgaWYgKGh0dHAuaW5jbHVkZUV4dGVuc2lvbnMpXG4gICAgICAgIGJvZHkuZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnM7XG4gICAgaWYgKGh0dHAuaW5jbHVkZVF1ZXJ5KVxuICAgICAgICBib2R5LnF1ZXJ5ID0gcHJpbnRlcihxdWVyeSwgZ3JhcGhxbC5wcmludCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgYm9keTogYm9keSxcbiAgICB9O1xufVxuZnVuY3Rpb24gaGVhZGVyc1RvTG93ZXJDYXNlKGhlYWRlcnMpIHtcbiAgICBpZiAoaGVhZGVycykge1xuICAgICAgICB2YXIgbm9ybWFsaXplZF8xID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgT2JqZWN0LmtleXMoT2JqZWN0KGhlYWRlcnMpKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBub3JtYWxpemVkXzFbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IGhlYWRlcnNbbmFtZV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplZF8xO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZGVycztcbn1cblxudmFyIGNoZWNrRmV0Y2hlciA9IGZ1bmN0aW9uIChmZXRjaGVyKSB7XG4gICAgaWYgKCFmZXRjaGVyICYmIHR5cGVvZiBmZXRjaCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiXFxuXFxcImZldGNoXFxcIiBoYXMgbm90IGJlZW4gZm91bmQgZ2xvYmFsbHkgYW5kIG5vIGZldGNoZXIgaGFzIGJlZW4gY29uZmlndXJlZC4gVG8gZml4IHRoaXMsIGluc3RhbGwgYSBmZXRjaCBwYWNrYWdlIChsaWtlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2Nyb3NzLWZldGNoKSwgaW5zdGFudGlhdGUgdGhlIGZldGNoZXIsIGFuZCBwYXNzIGl0IGludG8geW91ciBIdHRwTGluayBjb25zdHJ1Y3Rvci4gRm9yIGV4YW1wbGU6XFxuXFxuaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJztcXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEh0dHBMaW5rIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xcbiAgbGluazogbmV3IEh0dHBMaW5rKHsgdXJpOiAnL2dyYXBocWwnLCBmZXRjaCB9KVxcbn0pO1xcbiAgICBcIikgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcigyMCk7XG4gICAgfVxufTtcblxudmFyIGNyZWF0ZVNpZ25hbElmU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgQWJvcnRDb250cm9sbGVyID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuIHsgY29udHJvbGxlcjogZmFsc2UsIHNpZ25hbDogZmFsc2UgfTtcbiAgICB2YXIgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICB2YXIgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWw7XG4gICAgcmV0dXJuIHsgY29udHJvbGxlcjogY29udHJvbGxlciwgc2lnbmFsOiBzaWduYWwgfTtcbn07XG5cbnZhciBzZWxlY3RVUkkgPSBmdW5jdGlvbiAob3BlcmF0aW9uLCBmYWxsYmFja1VSSSkge1xuICAgIHZhciBjb250ZXh0ID0gb3BlcmF0aW9uLmdldENvbnRleHQoKTtcbiAgICB2YXIgY29udGV4dFVSSSA9IGNvbnRleHQudXJpO1xuICAgIGlmIChjb250ZXh0VVJJKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0VVJJO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZmFsbGJhY2tVUkkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrVVJJKG9wZXJhdGlvbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsbGJhY2tVUkkgfHwgJy9ncmFwaHFsJztcbiAgICB9XG59O1xuXG5mdW5jdGlvbiByZXdyaXRlVVJJRm9yR0VUKGNob3NlblVSSSwgYm9keSkge1xuICAgIHZhciBxdWVyeVBhcmFtcyA9IFtdO1xuICAgIHZhciBhZGRRdWVyeVBhcmFtID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgcXVlcnlQYXJhbXMucHVzaChcIlwiLmNvbmNhdChrZXksIFwiPVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkpO1xuICAgIH07XG4gICAgaWYgKCdxdWVyeScgaW4gYm9keSkge1xuICAgICAgICBhZGRRdWVyeVBhcmFtKCdxdWVyeScsIGJvZHkucXVlcnkpO1xuICAgIH1cbiAgICBpZiAoYm9keS5vcGVyYXRpb25OYW1lKSB7XG4gICAgICAgIGFkZFF1ZXJ5UGFyYW0oJ29wZXJhdGlvbk5hbWUnLCBib2R5Lm9wZXJhdGlvbk5hbWUpO1xuICAgIH1cbiAgICBpZiAoYm9keS52YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWRWYXJpYWJsZXMgPSB2b2lkIDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkVmFyaWFibGVzID0gc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIoYm9keS52YXJpYWJsZXMsICdWYXJpYWJsZXMgbWFwJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHBhcnNlRXJyb3I6IHBhcnNlRXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICBhZGRRdWVyeVBhcmFtKCd2YXJpYWJsZXMnLCBzZXJpYWxpemVkVmFyaWFibGVzKTtcbiAgICB9XG4gICAgaWYgKGJvZHkuZXh0ZW5zaW9ucykge1xuICAgICAgICB2YXIgc2VyaWFsaXplZEV4dGVuc2lvbnMgPSB2b2lkIDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkRXh0ZW5zaW9ucyA9IHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyKGJvZHkuZXh0ZW5zaW9ucywgJ0V4dGVuc2lvbnMgbWFwJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHBhcnNlRXJyb3I6IHBhcnNlRXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICBhZGRRdWVyeVBhcmFtKCdleHRlbnNpb25zJywgc2VyaWFsaXplZEV4dGVuc2lvbnMpO1xuICAgIH1cbiAgICB2YXIgZnJhZ21lbnQgPSAnJywgcHJlRnJhZ21lbnQgPSBjaG9zZW5VUkk7XG4gICAgdmFyIGZyYWdtZW50U3RhcnQgPSBjaG9zZW5VUkkuaW5kZXhPZignIycpO1xuICAgIGlmIChmcmFnbWVudFN0YXJ0ICE9PSAtMSkge1xuICAgICAgICBmcmFnbWVudCA9IGNob3NlblVSSS5zdWJzdHIoZnJhZ21lbnRTdGFydCk7XG4gICAgICAgIHByZUZyYWdtZW50ID0gY2hvc2VuVVJJLnN1YnN0cigwLCBmcmFnbWVudFN0YXJ0KTtcbiAgICB9XG4gICAgdmFyIHF1ZXJ5UGFyYW1zUHJlZml4ID0gcHJlRnJhZ21lbnQuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJztcbiAgICB2YXIgbmV3VVJJID0gcHJlRnJhZ21lbnQgKyBxdWVyeVBhcmFtc1ByZWZpeCArIHF1ZXJ5UGFyYW1zLmpvaW4oJyYnKSArIGZyYWdtZW50O1xuICAgIHJldHVybiB7IG5ld1VSSTogbmV3VVJJIH07XG59XG5cbnZhciBiYWNrdXBGZXRjaCA9IHV0aWxpdGllcy5tYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBmZXRjaDsgfSk7XG52YXIgY3JlYXRlSHR0cExpbmsgPSBmdW5jdGlvbiAobGlua09wdGlvbnMpIHtcbiAgICBpZiAobGlua09wdGlvbnMgPT09IHZvaWQgMCkgeyBsaW5rT3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gbGlua09wdGlvbnMudXJpLCB1cmkgPSBfYSA9PT0gdm9pZCAwID8gJy9ncmFwaHFsJyA6IF9hLCBwcmVmZXJyZWRGZXRjaCA9IGxpbmtPcHRpb25zLmZldGNoLCBfYiA9IGxpbmtPcHRpb25zLnByaW50LCBwcmludCA9IF9iID09PSB2b2lkIDAgPyBkZWZhdWx0UHJpbnRlciA6IF9iLCBpbmNsdWRlRXh0ZW5zaW9ucyA9IGxpbmtPcHRpb25zLmluY2x1ZGVFeHRlbnNpb25zLCB1c2VHRVRGb3JRdWVyaWVzID0gbGlua09wdGlvbnMudXNlR0VURm9yUXVlcmllcywgX2MgPSBsaW5rT3B0aW9ucy5pbmNsdWRlVW51c2VkVmFyaWFibGVzLCBpbmNsdWRlVW51c2VkVmFyaWFibGVzID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIHJlcXVlc3RPcHRpb25zID0gdHNsaWIuX19yZXN0KGxpbmtPcHRpb25zLCBbXCJ1cmlcIiwgXCJmZXRjaFwiLCBcInByaW50XCIsIFwiaW5jbHVkZUV4dGVuc2lvbnNcIiwgXCJ1c2VHRVRGb3JRdWVyaWVzXCIsIFwiaW5jbHVkZVVudXNlZFZhcmlhYmxlc1wiXSk7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgY2hlY2tGZXRjaGVyKHByZWZlcnJlZEZldGNoIHx8IGJhY2t1cEZldGNoKTtcbiAgICB9XG4gICAgdmFyIGxpbmtDb25maWcgPSB7XG4gICAgICAgIGh0dHA6IHsgaW5jbHVkZUV4dGVuc2lvbnM6IGluY2x1ZGVFeHRlbnNpb25zIH0sXG4gICAgICAgIG9wdGlvbnM6IHJlcXVlc3RPcHRpb25zLmZldGNoT3B0aW9ucyxcbiAgICAgICAgY3JlZGVudGlhbHM6IHJlcXVlc3RPcHRpb25zLmNyZWRlbnRpYWxzLFxuICAgICAgICBoZWFkZXJzOiByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzLFxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBjb3JlLkFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbikge1xuICAgICAgICB2YXIgY2hvc2VuVVJJID0gc2VsZWN0VVJJKG9wZXJhdGlvbiwgdXJpKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBvcGVyYXRpb24uZ2V0Q29udGV4dCgpO1xuICAgICAgICB2YXIgY2xpZW50QXdhcmVuZXNzSGVhZGVycyA9IHt9O1xuICAgICAgICBpZiAoY29udGV4dC5jbGllbnRBd2FyZW5lc3MpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGNvbnRleHQuY2xpZW50QXdhcmVuZXNzLCBuYW1lXzEgPSBfYS5uYW1lLCB2ZXJzaW9uID0gX2EudmVyc2lvbjtcbiAgICAgICAgICAgIGlmIChuYW1lXzEpIHtcbiAgICAgICAgICAgICAgICBjbGllbnRBd2FyZW5lc3NIZWFkZXJzWydhcG9sbG9ncmFwaHFsLWNsaWVudC1uYW1lJ10gPSBuYW1lXzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmVyc2lvbikge1xuICAgICAgICAgICAgICAgIGNsaWVudEF3YXJlbmVzc0hlYWRlcnNbJ2Fwb2xsb2dyYXBocWwtY2xpZW50LXZlcnNpb24nXSA9IHZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRleHRIZWFkZXJzID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNsaWVudEF3YXJlbmVzc0hlYWRlcnMpLCBjb250ZXh0LmhlYWRlcnMpO1xuICAgICAgICB2YXIgY29udGV4dENvbmZpZyA9IHtcbiAgICAgICAgICAgIGh0dHA6IGNvbnRleHQuaHR0cCxcbiAgICAgICAgICAgIG9wdGlvbnM6IGNvbnRleHQuZmV0Y2hPcHRpb25zLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IGNvbnRleHQuY3JlZGVudGlhbHMsXG4gICAgICAgICAgICBoZWFkZXJzOiBjb250ZXh0SGVhZGVycyxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIF9iID0gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5SW50ZXJuYWwob3BlcmF0aW9uLCBwcmludCwgZmFsbGJhY2tIdHRwQ29uZmlnLCBsaW5rQ29uZmlnLCBjb250ZXh0Q29uZmlnKSwgb3B0aW9ucyA9IF9iLm9wdGlvbnMsIGJvZHkgPSBfYi5ib2R5O1xuICAgICAgICBpZiAoYm9keS52YXJpYWJsZXMgJiYgIWluY2x1ZGVVbnVzZWRWYXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHZhciB1bnVzZWROYW1lc18xID0gbmV3IFNldChPYmplY3Qua2V5cyhib2R5LnZhcmlhYmxlcykpO1xuICAgICAgICAgICAgZ3JhcGhxbC52aXNpdChvcGVyYXRpb24ucXVlcnksIHtcbiAgICAgICAgICAgICAgICBWYXJpYWJsZTogZnVuY3Rpb24gKG5vZGUsIF9rZXksIHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5raW5kICE9PSAnVmFyaWFibGVEZWZpbml0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW51c2VkTmFtZXNfMS5kZWxldGUobm9kZS5uYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh1bnVzZWROYW1lc18xLnNpemUpIHtcbiAgICAgICAgICAgICAgICBib2R5LnZhcmlhYmxlcyA9IHRzbGliLl9fYXNzaWduKHt9LCBib2R5LnZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgdW51c2VkTmFtZXNfMS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBib2R5LnZhcmlhYmxlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY29udHJvbGxlcjtcbiAgICAgICAgaWYgKCFvcHRpb25zLnNpZ25hbCkge1xuICAgICAgICAgICAgdmFyIF9jID0gY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQoKSwgX2NvbnRyb2xsZXIgPSBfYy5jb250cm9sbGVyLCBzaWduYWwgPSBfYy5zaWduYWw7XG4gICAgICAgICAgICBjb250cm9sbGVyID0gX2NvbnRyb2xsZXI7XG4gICAgICAgICAgICBpZiAoY29udHJvbGxlcilcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNpZ25hbCA9IHNpZ25hbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVmaW5pdGlvbklzTXV0YXRpb24gPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nICYmIGQub3BlcmF0aW9uID09PSAnbXV0YXRpb24nO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodXNlR0VURm9yUXVlcmllcyAmJlxuICAgICAgICAgICAgIW9wZXJhdGlvbi5xdWVyeS5kZWZpbml0aW9ucy5zb21lKGRlZmluaXRpb25Jc011dGF0aW9uKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICB2YXIgX2QgPSByZXdyaXRlVVJJRm9yR0VUKGNob3NlblVSSSwgYm9keSksIG5ld1VSSSA9IF9kLm5ld1VSSSwgcGFyc2VFcnJvciA9IF9kLnBhcnNlRXJyb3I7XG4gICAgICAgICAgICBpZiAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5mcm9tRXJyb3IocGFyc2VFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaG9zZW5VUkkgPSBuZXdVUkk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyKGJvZHksICdQYXlsb2FkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5mcm9tRXJyb3IocGFyc2VFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyB1dGlsaXRpZXMuT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RmV0Y2ggPSBwcmVmZXJyZWRGZXRjaCB8fCB1dGlsaXRpZXMubWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2g7IH0pIHx8IGJhY2t1cEZldGNoO1xuICAgICAgICAgICAgY3VycmVudEZldGNoKGNob3NlblVSSSwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uc2V0Q29udGV4dCh7IHJlc3BvbnNlOiByZXNwb25zZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2Uob3BlcmF0aW9uKSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChlcnIucmVzdWx0ICYmIGVyci5yZXN1bHQuZXJyb3JzICYmIGVyci5yZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGVyci5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyKVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbnZhciBIdHRwTGluayA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKEh0dHBMaW5rLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEh0dHBMaW5rKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY3JlYXRlSHR0cExpbmsob3B0aW9ucykucmVxdWVzdCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEh0dHBMaW5rO1xufShjb3JlLkFwb2xsb0xpbmspKTtcblxuZXhwb3J0cy5IdHRwTGluayA9IEh0dHBMaW5rO1xuZXhwb3J0cy5jaGVja0ZldGNoZXIgPSBjaGVja0ZldGNoZXI7XG5leHBvcnRzLmNyZWF0ZUh0dHBMaW5rID0gY3JlYXRlSHR0cExpbms7XG5leHBvcnRzLmNyZWF0ZVNpZ25hbElmU3VwcG9ydGVkID0gY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQ7XG5leHBvcnRzLmRlZmF1bHRQcmludGVyID0gZGVmYXVsdFByaW50ZXI7XG5leHBvcnRzLmZhbGxiYWNrSHR0cENvbmZpZyA9IGZhbGxiYWNrSHR0cENvbmZpZztcbmV4cG9ydHMucGFyc2VBbmRDaGVja0h0dHBSZXNwb25zZSA9IHBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2U7XG5leHBvcnRzLnJld3JpdGVVUklGb3JHRVQgPSByZXdyaXRlVVJJRm9yR0VUO1xuZXhwb3J0cy5zZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHkgPSBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHk7XG5leHBvcnRzLnNlbGVjdEh0dHBPcHRpb25zQW5kQm9keUludGVybmFsID0gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5SW50ZXJuYWw7XG5leHBvcnRzLnNlbGVjdFVSSSA9IHNlbGVjdFVSSTtcbmV4cG9ydHMuc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIgPSBzZXJpYWxpemVGZXRjaFBhcmFtZXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzJyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xuXG5mdW5jdGlvbiBmcm9tRXJyb3IoZXJyb3JWYWx1ZSkge1xuICAgIHJldHVybiBuZXcgdXRpbGl0aWVzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yVmFsdWUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b1Byb21pc2Uob2JzZXJ2YWJsZSkge1xuICAgIHZhciBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiUHJvbWlzZSBXcmFwcGVyIGRvZXMgbm90IHN1cHBvcnQgbXVsdGlwbGUgcmVzdWx0cyBmcm9tIE9ic2VydmFibGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZnJvbVByb21pc2UocHJvbWlzZSkge1xuICAgIHJldHVybiBuZXcgdXRpbGl0aWVzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpKTtcbiAgICB9KTtcbn1cblxudmFyIHRocm93U2VydmVyRXJyb3IgPSBmdW5jdGlvbiAocmVzcG9uc2UsIHJlc3VsdCwgbWVzc2FnZSkge1xuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICBlcnJvci5uYW1lID0gJ1NlcnZlckVycm9yJztcbiAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIGVycm9yLnN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgZXJyb3IucmVzdWx0ID0gcmVzdWx0O1xuICAgIHRocm93IGVycm9yO1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVPcGVyYXRpb24ob3BlcmF0aW9uKSB7XG4gICAgdmFyIE9QRVJBVElPTl9GSUVMRFMgPSBbXG4gICAgICAgICdxdWVyeScsXG4gICAgICAgICdvcGVyYXRpb25OYW1lJyxcbiAgICAgICAgJ3ZhcmlhYmxlcycsXG4gICAgICAgICdleHRlbnNpb25zJyxcbiAgICAgICAgJ2NvbnRleHQnLFxuICAgIF07XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG9wZXJhdGlvbik7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBfYVtfaV07XG4gICAgICAgIGlmIChPUEVSQVRJT05fRklFTERTLmluZGV4T2Yoa2V5KSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcImlsbGVnYWwgYXJndW1lbnQ6IFwiLmNvbmNhdChrZXkpKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDI0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3BlcmF0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPcGVyYXRpb24oc3RhcnRpbmcsIG9wZXJhdGlvbikge1xuICAgIHZhciBjb250ZXh0ID0gdHNsaWIuX19hc3NpZ24oe30sIHN0YXJ0aW5nKTtcbiAgICB2YXIgc2V0Q29udGV4dCA9IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29udGV4dCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjb250ZXh0KSwgbmV4dChjb250ZXh0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCBuZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGdldENvbnRleHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAodHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpKTsgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3BlcmF0aW9uLCAnc2V0Q29udGV4dCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBzZXRDb250ZXh0LFxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcGVyYXRpb24sICdnZXRDb250ZXh0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IGdldENvbnRleHQsXG4gICAgfSk7XG4gICAgcmV0dXJuIG9wZXJhdGlvbjtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtT3BlcmF0aW9uKG9wZXJhdGlvbikge1xuICAgIHZhciB0cmFuc2Zvcm1lZE9wZXJhdGlvbiA9IHtcbiAgICAgICAgdmFyaWFibGVzOiBvcGVyYXRpb24udmFyaWFibGVzIHx8IHt9LFxuICAgICAgICBleHRlbnNpb25zOiBvcGVyYXRpb24uZXh0ZW5zaW9ucyB8fCB7fSxcbiAgICAgICAgb3BlcmF0aW9uTmFtZTogb3BlcmF0aW9uLm9wZXJhdGlvbk5hbWUsXG4gICAgICAgIHF1ZXJ5OiBvcGVyYXRpb24ucXVlcnksXG4gICAgfTtcbiAgICBpZiAoIXRyYW5zZm9ybWVkT3BlcmF0aW9uLm9wZXJhdGlvbk5hbWUpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRPcGVyYXRpb24ub3BlcmF0aW9uTmFtZSA9XG4gICAgICAgICAgICB0eXBlb2YgdHJhbnNmb3JtZWRPcGVyYXRpb24ucXVlcnkgIT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyB1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uTmFtZSh0cmFuc2Zvcm1lZE9wZXJhdGlvbi5xdWVyeSkgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkT3BlcmF0aW9uO1xufVxuXG5leHBvcnRzLmNyZWF0ZU9wZXJhdGlvbiA9IGNyZWF0ZU9wZXJhdGlvbjtcbmV4cG9ydHMuZnJvbUVycm9yID0gZnJvbUVycm9yO1xuZXhwb3J0cy5mcm9tUHJvbWlzZSA9IGZyb21Qcm9taXNlO1xuZXhwb3J0cy50aHJvd1NlcnZlckVycm9yID0gdGhyb3dTZXJ2ZXJFcnJvcjtcbmV4cG9ydHMudG9Qcm9taXNlID0gdG9Qcm9taXNlO1xuZXhwb3J0cy50cmFuc2Zvcm1PcGVyYXRpb24gPSB0cmFuc2Zvcm1PcGVyYXRpb247XG5leHBvcnRzLnZhbGlkYXRlT3BlcmF0aW9uID0gdmFsaWRhdGVPcGVyYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb3JlID0gcmVxdWlyZSgnLi9jb3JlJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCcuL3JlYWN0Jyk7XG5cblxuXG5mb3IgKHZhciBrIGluIGNvcmUpIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgZXhwb3J0c1trXSA9IGNvcmVba107XG59XG5mb3IgKHZhciBrIGluIHJlYWN0KSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIGV4cG9ydHNba10gPSByZWFjdFtrXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xuXG52YXIgZ2VuZXJpY01lc3NhZ2UgPSBcIkludmFyaWFudCBWaW9sYXRpb25cIjtcclxudmFyIF9hID0gT2JqZWN0LnNldFByb3RvdHlwZU9mLCBzZXRQcm90b3R5cGVPZiA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAob2JqLCBwcm90bykge1xyXG4gICAgb2JqLl9fcHJvdG9fXyA9IHByb3RvO1xyXG4gICAgcmV0dXJuIG9iajtcclxufSA6IF9hO1xyXG52YXIgSW52YXJpYW50RXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICB0c2xpYi5fX2V4dGVuZHMoSW52YXJpYW50RXJyb3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBJbnZhcmlhbnRFcnJvcihtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IHZvaWQgMCkgeyBtZXNzYWdlID0gZ2VuZXJpY01lc3NhZ2U7IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0eXBlb2YgbWVzc2FnZSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICA/IGdlbmVyaWNNZXNzYWdlICsgXCI6IFwiICsgbWVzc2FnZSArIFwiIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2Fwb2xsb2dyYXBocWwvaW52YXJpYW50LXBhY2thZ2VzKVwiXHJcbiAgICAgICAgICAgIDogbWVzc2FnZSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5mcmFtZXNUb1BvcCA9IDE7XHJcbiAgICAgICAgX3RoaXMubmFtZSA9IGdlbmVyaWNNZXNzYWdlO1xyXG4gICAgICAgIHNldFByb3RvdHlwZU9mKF90aGlzLCBJbnZhcmlhbnRFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBJbnZhcmlhbnRFcnJvcjtcclxufShFcnJvcikpO1xyXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XHJcbiAgICBpZiAoIWNvbmRpdGlvbikge1xyXG4gICAgICAgIHRocm93IG5ldyBJbnZhcmlhbnRFcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG52YXIgdmVyYm9zaXR5TGV2ZWxzID0gW1wiZGVidWdcIiwgXCJsb2dcIiwgXCJ3YXJuXCIsIFwiZXJyb3JcIiwgXCJzaWxlbnRcIl07XHJcbnZhciB2ZXJib3NpdHlMZXZlbCA9IHZlcmJvc2l0eUxldmVscy5pbmRleE9mKFwibG9nXCIpO1xyXG5mdW5jdGlvbiB3cmFwQ29uc29sZU1ldGhvZChuYW1lKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2ZXJib3NpdHlMZXZlbHMuaW5kZXhPZihuYW1lKSA+PSB2ZXJib3NpdHlMZXZlbCkge1xyXG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGNvbnNvbGUubG9nIGlmIHRoaXMgaG9zdCBlbnZpcm9ubWVudCBoYXBwZW5zIG5vdCB0byBwcm92aWRlXHJcbiAgICAgICAgICAgIC8vIGFsbCB0aGUgY29uc29sZS4qIG1ldGhvZHMgd2UgbmVlZC5cclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGNvbnNvbGVbbmFtZV0gfHwgY29uc29sZS5sb2c7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbihmdW5jdGlvbiAoaW52YXJpYW50KSB7XHJcbiAgICBpbnZhcmlhbnQuZGVidWcgPSB3cmFwQ29uc29sZU1ldGhvZChcImRlYnVnXCIpO1xyXG4gICAgaW52YXJpYW50LmxvZyA9IHdyYXBDb25zb2xlTWV0aG9kKFwibG9nXCIpO1xyXG4gICAgaW52YXJpYW50Lndhcm4gPSB3cmFwQ29uc29sZU1ldGhvZChcIndhcm5cIik7XHJcbiAgICBpbnZhcmlhbnQuZXJyb3IgPSB3cmFwQ29uc29sZU1ldGhvZChcImVycm9yXCIpO1xyXG59KShpbnZhcmlhbnQgfHwgKGludmFyaWFudCA9IHt9KSk7XHJcbmZ1bmN0aW9uIHNldFZlcmJvc2l0eShsZXZlbCkge1xyXG4gICAgdmFyIG9sZCA9IHZlcmJvc2l0eUxldmVsc1t2ZXJib3NpdHlMZXZlbF07XHJcbiAgICB2ZXJib3NpdHlMZXZlbCA9IE1hdGgubWF4KDAsIHZlcmJvc2l0eUxldmVscy5pbmRleE9mKGxldmVsKSk7XHJcbiAgICByZXR1cm4gb2xkO1xyXG59XHJcbnZhciBpbnZhcmlhbnQkMSA9IGludmFyaWFudDtcblxuZXhwb3J0cy5JbnZhcmlhbnRFcnJvciA9IEludmFyaWFudEVycm9yO1xuZXhwb3J0c1snZGVmYXVsdCddID0gaW52YXJpYW50JDE7XG5leHBvcnRzLmludmFyaWFudCA9IGludmFyaWFudDtcbmV4cG9ydHMuc2V0VmVyYm9zaXR5ID0gc2V0VmVyYm9zaXR5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW52YXJpYW50LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBtYXliZSh0aHVuaykge1xuICB0cnkgeyByZXR1cm4gdGh1bmsoKSB9IGNhdGNoIChfKSB7fVxufVxuXG52YXIgc2FmZUdsb2JhbCA9IChcbiAgbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiBnbG9iYWxUaGlzIH0pIHx8XG4gIG1heWJlKGZ1bmN0aW9uKCkgeyByZXR1cm4gd2luZG93IH0pIHx8XG4gIG1heWJlKGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VsZiB9KSB8fFxuICBtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIGdsb2JhbCB9KSB8fFxuICAvLyBXZSBkb24ndCBleHBlY3QgdGhlIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGV2ZXIgdG8gYmUgaW52b2tlZCBhdCBydW50aW1lLCBhc1xuICAvLyBsb25nIGFzIGF0IGxlYXN0IG9uZSBvZiBnbG9iYWxUaGlzLCB3aW5kb3csIHNlbGYsIG9yIGdsb2JhbCBpcyBkZWZpbmVkLCBzb1xuICAvLyB3ZSBhcmUgdW5kZXIgbm8gb2JsaWdhdGlvbiB0byBtYWtlIGl0IGVhc3kgZm9yIHN0YXRpYyBhbmFseXNpcyB0b29scyB0b1xuICAvLyBkZXRlY3Qgc3ludGFjdGljIHVzYWdlIG9mIHRoZSBGdW5jdGlvbiBjb25zdHJ1Y3Rvci4gSWYgeW91IHRoaW5rIHlvdSBjYW5cbiAgLy8gaW1wcm92ZSB5b3VyIHN0YXRpYyBhbmFseXNpcyB0byBkZXRlY3QgdGhpcyBvYmZ1c2NhdGlvbiwgdGhpbmsgYWdhaW4uIFRoaXNcbiAgLy8gaXMgYW4gYXJtcyByYWNlIHlvdSBjYW5ub3Qgd2luLCBhdCBsZWFzdCBub3QgaW4gSmF2YVNjcmlwdC5cbiAgbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiBtYXliZS5jb25zdHJ1Y3RvcihcInJldHVybiB0aGlzXCIpKCkgfSlcbik7XG5cbnZhciBuZWVkVG9SZW1vdmUgPSBmYWxzZTtcblxuZnVuY3Rpb24gaW5zdGFsbCgpIHtcbiAgaWYgKHNhZmVHbG9iYWwgJiZcbiAgICAgICFtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WIH0pICYmXG4gICAgICAhbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiBwcm9jZXNzIH0pKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNhZmVHbG9iYWwsIFwicHJvY2Vzc1wiLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBlbnY6IHtcbiAgICAgICAgICAvLyBUaGlzIGRlZmF1bHQgbmVlZHMgdG8gYmUgXCJwcm9kdWN0aW9uXCIgaW5zdGVhZCBvZiBcImRldmVsb3BtZW50XCIsIHRvXG4gICAgICAgICAgLy8gYXZvaWQgdGhlIHByb2JsZW0gaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9wdWxsLzI4OTRcbiAgICAgICAgICAvLyB3aWxsIGV2ZW50dWFsbHkgc29sdmUsIG9uY2UgbWVyZ2VkIGFuZCByZWxlYXNlZC5cbiAgICAgICAgICBOT0RFX0VOVjogXCJwcm9kdWN0aW9uXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgLy8gTGV0IGFueW9uZSBlbHNlIGNoYW5nZSBnbG9iYWwucHJvY2VzcyBhcyB0aGV5IHNlZSBmaXQsIGJ1dCBoaWRlIGl0IGZyb21cbiAgICAgIC8vIE9iamVjdC5rZXlzKGdsb2JhbCkgZW51bWVyYXRpb24uXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIG5lZWRUb1JlbW92ZSA9IHRydWU7XG4gIH1cbn1cblxuLy8gQ2FsbCBpbnN0YWxsKCkgYXQgbGVhc3Qgb25jZSwgd2hlbiB0aGlzIG1vZHVsZSBpcyBpbXBvcnRlZC5cbmluc3RhbGwoKTtcblxuZnVuY3Rpb24gcmVtb3ZlKCkge1xuICBpZiAobmVlZFRvUmVtb3ZlKSB7XG4gICAgZGVsZXRlIHNhZmVHbG9iYWwucHJvY2VzcztcbiAgICBuZWVkVG9SZW1vdmUgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnRzLmluc3RhbGwgPSBpbnN0YWxsO1xuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcE5hbWVzcGFjZShlKSB7XG4gICAgaWYgKGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgICB2YXIgbiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgaWYgKGUpIHtcbiAgICAgICAgZm9yICh2YXIgayBpbiBlKSB7XG4gICAgICAgICAgICBuW2tdID0gZVtrXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBuW1wiZGVmYXVsdFwiXSA9IGU7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUobik7XG59XG5cbnZhciBSZWFjdF9fbmFtZXNwYWNlID0gLyojX19QVVJFX18qL19pbnRlcm9wTmFtZXNwYWNlKFJlYWN0KTtcblxudmFyIGNvbnRleHRLZXkgPSB1dGlsaXRpZXMuY2FuVXNlU3ltYm9sXG4gICAgPyBTeW1ib2wuZm9yKCdfX0FQT0xMT19DT05URVhUX18nKVxuICAgIDogJ19fQVBPTExPX0NPTlRFWFRfXyc7XG5mdW5jdGlvbiBnZXRBcG9sbG9Db250ZXh0KCkge1xuICAgIHZhciBjb250ZXh0ID0gUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVDb250ZXh0W2NvbnRleHRLZXldO1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVDb250ZXh0LCBjb250ZXh0S2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogY29udGV4dCA9IFJlYWN0X19uYW1lc3BhY2UuY3JlYXRlQ29udGV4dCh7fSksXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRleHQuZGlzcGxheU5hbWUgPSAnQXBvbGxvQ29udGV4dCc7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgQXBvbGxvQ29uc3VtZXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgQXBvbGxvQ29udGV4dCA9IGdldEFwb2xsb0NvbnRleHQoKTtcbiAgICByZXR1cm4gUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChjb250ZXh0ICYmIGNvbnRleHQuY2xpZW50LCAnQ291bGQgbm90IGZpbmQgXCJjbGllbnRcIiBpbiB0aGUgY29udGV4dCBvZiBBcG9sbG9Db25zdW1lci4gJyArXG4gICAgICAgICAgICAnV3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYW4gPEFwb2xsb1Byb3ZpZGVyPi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KGNvbnRleHQgJiYgY29udGV4dC5jbGllbnQsIDI1KTtcbiAgICAgICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuKGNvbnRleHQuY2xpZW50KTtcbiAgICB9KTtcbn07XG5cbnZhciBBcG9sbG9Qcm92aWRlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjbGllbnQgPSBfYS5jbGllbnQsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XG4gICAgdmFyIEFwb2xsb0NvbnRleHQgPSBnZXRBcG9sbG9Db250ZXh0KCk7XG4gICAgcmV0dXJuIFJlYWN0X19uYW1lc3BhY2UuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgICAgICBpZiAoY2xpZW50ICYmIGNvbnRleHQuY2xpZW50ICE9PSBjbGllbnQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7IGNsaWVudDogY2xpZW50IH0pO1xuICAgICAgICB9XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChjb250ZXh0LmNsaWVudCwgJ0Fwb2xsb1Byb3ZpZGVyIHdhcyBub3QgcGFzc2VkIGEgY2xpZW50IGluc3RhbmNlLiBNYWtlICcgK1xuICAgICAgICAgICAgJ3N1cmUgeW91IHBhc3MgaW4geW91ciBjbGllbnQgdmlhIHRoZSBcImNsaWVudFwiIHByb3AuJykgOiBnbG9iYWxzLmludmFyaWFudChjb250ZXh0LmNsaWVudCwgMjYpO1xuICAgICAgICByZXR1cm4gKFJlYWN0X19uYW1lc3BhY2UuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0IH0sIGNoaWxkcmVuKSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnRzLkFwb2xsb0NvbnN1bWVyID0gQXBvbGxvQ29uc3VtZXI7XG5leHBvcnRzLkFwb2xsb1Byb3ZpZGVyID0gQXBvbGxvUHJvdmlkZXI7XG5leHBvcnRzLmdldEFwb2xsb0NvbnRleHQgPSBnZXRBcG9sbG9Db250ZXh0O1xuZXhwb3J0cy5yZXNldEFwb2xsb0NvbnRleHQgPSBnZXRBcG9sbG9Db250ZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGV4dC5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgY29udGV4dCA9IHJlcXVpcmUoJy4uL2NvbnRleHQnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgZXF1YWxpdHkgPSByZXF1aXJlKCdAd3J5L2VxdWFsaXR5Jyk7XG52YXIgZXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vZXJyb3JzJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL2NvcmUnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXInKTtcblxuZnVuY3Rpb24gdXNlQXBvbGxvQ2xpZW50KG92ZXJyaWRlKSB7XG4gICAgdmFyIGNvbnRleHQkMSA9IHJlYWN0LnVzZUNvbnRleHQoY29udGV4dC5nZXRBcG9sbG9Db250ZXh0KCkpO1xuICAgIHZhciBjbGllbnQgPSBvdmVycmlkZSB8fCBjb250ZXh0JDEuY2xpZW50O1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghIWNsaWVudCwgJ0NvdWxkIG5vdCBmaW5kIFwiY2xpZW50XCIgaW4gdGhlIGNvbnRleHQgb3IgcGFzc2VkIGluIGFzIGFuIG9wdGlvbi4gJyArXG4gICAgICAgICdXcmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhbiA8QXBvbGxvUHJvdmlkZXI+LCBvciBwYXNzIGFuIEFwb2xsb0NsaWVudCcgK1xuICAgICAgICAnQXBvbGxvQ2xpZW50IGluc3RhbmNlIGluIHZpYSBvcHRpb25zLicpIDogZ2xvYmFscy5pbnZhcmlhbnQoISFjbGllbnQsIDI5KTtcbiAgICByZXR1cm4gY2xpZW50O1xufVxuXG5mdW5jdGlvbiB1c2VRdWVyeShxdWVyeSwgb3B0aW9ucykge1xuICAgIHZhciBfYTtcbiAgICB2YXIgY29udGV4dCQxID0gcmVhY3QudXNlQ29udGV4dChjb250ZXh0LmdldEFwb2xsb0NvbnRleHQoKSk7XG4gICAgdmFyIGNsaWVudCA9IHVzZUFwb2xsb0NsaWVudChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY2xpZW50KTtcbiAgICBwYXJzZXIudmVyaWZ5RG9jdW1lbnRUeXBlKHF1ZXJ5LCBwYXJzZXIuRG9jdW1lbnRUeXBlLlF1ZXJ5KTtcbiAgICB2YXIgX2IgPSByZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3YXRjaFF1ZXJ5T3B0aW9ucyA9IGNyZWF0ZVdhdGNoUXVlcnlPcHRpb25zKHF1ZXJ5LCBvcHRpb25zKTtcbiAgICAgICAgdmFyIG9ic1F1ZXJ5ID0gbnVsbDtcbiAgICAgICAgaWYgKGNvbnRleHQkMS5yZW5kZXJQcm9taXNlcykge1xuICAgICAgICAgICAgb2JzUXVlcnkgPSBjb250ZXh0JDEucmVuZGVyUHJvbWlzZXMuZ2V0U1NST2JzZXJ2YWJsZSh3YXRjaFF1ZXJ5T3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvYnNRdWVyeSkge1xuICAgICAgICAgICAgb2JzUXVlcnkgPSBjbGllbnQud2F0Y2hRdWVyeSh3YXRjaFF1ZXJ5T3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoY29udGV4dCQxLnJlbmRlclByb21pc2VzKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCQxLnJlbmRlclByb21pc2VzLnJlZ2lzdGVyU1NST2JzZXJ2YWJsZShvYnNRdWVyeSwgd2F0Y2hRdWVyeU9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0JDEucmVuZGVyUHJvbWlzZXMgJiZcbiAgICAgICAgICAgIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc3NyKSAhPT0gZmFsc2UgJiZcbiAgICAgICAgICAgICEob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApICYmXG4gICAgICAgICAgICBvYnNRdWVyeS5nZXRDdXJyZW50UmVzdWx0KCkubG9hZGluZykge1xuICAgICAgICAgICAgY29udGV4dCQxLnJlbmRlclByb21pc2VzLmFkZFF1ZXJ5UHJvbWlzZSh7XG4gICAgICAgICAgICAgICAgZ2V0T3B0aW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gY3JlYXRlV2F0Y2hRdWVyeU9wdGlvbnMocXVlcnksIG9wdGlvbnMpOyB9LFxuICAgICAgICAgICAgICAgIGZldGNoRGF0YTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1YiA9IG9ic1F1ZXJ5LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQubG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pOyB9LFxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ic1F1ZXJ5O1xuICAgIH0pLCBvYnNRdWVyeSA9IF9iWzBdLCBzZXRPYnNRdWVyeSA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG9ic1F1ZXJ5LmdldEN1cnJlbnRSZXN1bHQoKTtcbiAgICAgICAgaWYgKCFyZXN1bHQubG9hZGluZyAmJiBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgKF9hID0gb3B0aW9ucy5vbkVycm9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChvcHRpb25zLCByZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICAoX2IgPSBvcHRpb25zLm9uQ29tcGxldGVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChvcHRpb25zLCByZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KSwgcmVzdWx0ID0gX2NbMF0sIHNldFJlc3VsdCA9IF9jWzFdO1xuICAgIHZhciByZWYgPSByZWFjdC51c2VSZWYoe1xuICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgcHJldmlvdXNEYXRhOiB2b2lkIDAsXG4gICAgICAgIHdhdGNoUXVlcnlPcHRpb25zOiBjcmVhdGVXYXRjaFF1ZXJ5T3B0aW9ucyhxdWVyeSwgb3B0aW9ucyksXG4gICAgfSk7XG4gICAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgdmFyIHdhdGNoUXVlcnlPcHRpb25zID0gY3JlYXRlV2F0Y2hRdWVyeU9wdGlvbnMocXVlcnksIG9wdGlvbnMpO1xuICAgICAgICB2YXIgbmV4dFJlc3VsdDtcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50LmNsaWVudCAhPT0gY2xpZW50IHx8ICFlcXVhbGl0eS5lcXVhbChyZWYuY3VycmVudC5xdWVyeSwgcXVlcnkpKSB7XG4gICAgICAgICAgICB2YXIgb2JzUXVlcnlfMSA9IGNsaWVudC53YXRjaFF1ZXJ5KHdhdGNoUXVlcnlPcHRpb25zKTtcbiAgICAgICAgICAgIHNldE9ic1F1ZXJ5KG9ic1F1ZXJ5XzEpO1xuICAgICAgICAgICAgbmV4dFJlc3VsdCA9IG9ic1F1ZXJ5XzEuZ2V0Q3VycmVudFJlc3VsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFlcXVhbGl0eS5lcXVhbChyZWYuY3VycmVudC53YXRjaFF1ZXJ5T3B0aW9ucywgd2F0Y2hRdWVyeU9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvYnNRdWVyeS5zZXRPcHRpb25zKHdhdGNoUXVlcnlPcHRpb25zKS5jYXRjaChmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgbmV4dFJlc3VsdCA9IG9ic1F1ZXJ5LmdldEN1cnJlbnRSZXN1bHQoKTtcbiAgICAgICAgICAgIHJlZi5jdXJyZW50LndhdGNoUXVlcnlPcHRpb25zID0gd2F0Y2hRdWVyeU9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRSZXN1bHQpIHtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1Jlc3VsdCA9IHJlZi5jdXJyZW50LnJlc3VsdDtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c1Jlc3VsdC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQucHJldmlvdXNEYXRhID0gcHJldmlvdXNSZXN1bHQuZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFJlc3VsdChyZWYuY3VycmVudC5yZXN1bHQgPSBuZXh0UmVzdWx0KTtcbiAgICAgICAgICAgIGlmICghbmV4dFJlc3VsdC5sb2FkaW5nICYmIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IG9wdGlvbnMub25FcnJvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwob3B0aW9ucywgcmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKF9iID0gb3B0aW9ucy5vbkNvbXBsZXRlZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwob3B0aW9ucywgcmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVmLmN1cnJlbnQsIHsgY2xpZW50OiBjbGllbnQsIHF1ZXJ5OiBxdWVyeSB9KTtcbiAgICB9LCBbb2JzUXVlcnksIGNsaWVudCwgcXVlcnksIG9wdGlvbnNdKTtcbiAgICByZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29udGV4dCQxLnJlbmRlclByb21pc2VzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IG9ic1F1ZXJ5LnN1YnNjcmliZShvbk5leHQsIG9uRXJyb3IpO1xuICAgICAgICBmdW5jdGlvbiBvbk5leHQoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gcmVmLmN1cnJlbnQucmVzdWx0O1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9ic1F1ZXJ5LmdldEN1cnJlbnRSZXN1bHQoKTtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c1Jlc3VsdCAmJlxuICAgICAgICAgICAgICAgIHByZXZpb3VzUmVzdWx0LmxvYWRpbmcgPT09IHJlc3VsdC5sb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgcHJldmlvdXNSZXN1bHQubmV0d29ya1N0YXR1cyA9PT0gcmVzdWx0Lm5ldHdvcmtTdGF0dXMgJiZcbiAgICAgICAgICAgICAgICBlcXVhbGl0eS5lcXVhbChwcmV2aW91c1Jlc3VsdC5kYXRhLCByZXN1bHQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldmlvdXNSZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LnByZXZpb3VzRGF0YSA9IHByZXZpb3VzUmVzdWx0LmRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRSZXN1bHQocmVmLmN1cnJlbnQucmVzdWx0ID0gcmVzdWx0KTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub25Db21wbGV0ZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCByZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHZhciBsYXN0ID0gb2JzUXVlcnlbXCJsYXN0XCJdO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG9ic1F1ZXJ5LnJlc2V0TGFzdFJlc3VsdHMoKTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBvYnNRdWVyeS5zdWJzY3JpYmUob25OZXh0LCBvbkVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIG9ic1F1ZXJ5W1wibGFzdFwiXSA9IGxhc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVycm9yLmhhc093blByb3BlcnR5KCdncmFwaFFMRXJyb3JzJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcmV2aW91c1Jlc3VsdCA9IHJlZi5jdXJyZW50LnJlc3VsdDtcbiAgICAgICAgICAgIGlmICgocHJldmlvdXNSZXN1bHQgJiYgcHJldmlvdXNSZXN1bHQubG9hZGluZykgfHxcbiAgICAgICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwoZXJyb3IsIHByZXZpb3VzUmVzdWx0LmVycm9yKSkge1xuICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZWYuY3VycmVudC5yZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByZXZpb3VzUmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IGNvcmUuTmV0d29ya1N0YXR1cy5lcnJvcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub25FcnJvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgfSwgW29ic1F1ZXJ5LCBjb250ZXh0JDEucmVuZGVyUHJvbWlzZXMsIGNsaWVudC5kaXNhYmxlTmV0d29ya0ZldGNoZXNdKTtcbiAgICB2YXIgcGFydGlhbDtcbiAgICAoX2EgPSByZXN1bHQsIHBhcnRpYWwgPSBfYS5wYXJ0aWFsLCByZXN1bHQgPSB0c2xpYi5fX3Jlc3QoX2EsIFtcInBhcnRpYWxcIl0pKTtcbiAgICB7XG4gICAgICAgIGlmIChwYXJ0aWFsICYmXG4gICAgICAgICAgICAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnBhcnRpYWxSZWZldGNoKSAmJlxuICAgICAgICAgICAgIXJlc3VsdC5sb2FkaW5nICYmXG4gICAgICAgICAgICAoIXJlc3VsdC5kYXRhIHx8IE9iamVjdC5rZXlzKHJlc3VsdC5kYXRhKS5sZW5ndGggPT09IDApICYmXG4gICAgICAgICAgICBvYnNRdWVyeS5vcHRpb25zLmZldGNoUG9saWN5ICE9PSAnY2FjaGUtb25seScpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCByZXN1bHQpLCB7IGxvYWRpbmc6IHRydWUsIG5ldHdvcmtTdGF0dXM6IGNvcmUuTmV0d29ya1N0YXR1cy5yZWZldGNoIH0pO1xuICAgICAgICAgICAgb2JzUXVlcnkucmVmZXRjaCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0JDEucmVuZGVyUHJvbWlzZXMgJiZcbiAgICAgICAgICAgIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc3NyKSAhPT0gZmFsc2UgJiZcbiAgICAgICAgICAgICEob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApICYmXG4gICAgICAgICAgICByZXN1bHQubG9hZGluZykge1xuICAgICAgICAgICAgb2JzUXVlcnkuc2V0T3B0aW9ucyhjcmVhdGVXYXRjaFF1ZXJ5T3B0aW9ucyhxdWVyeSwgb3B0aW9ucykpLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmFzc2lnbihyZWYuY3VycmVudCwgeyBvcHRpb25zOiBvcHRpb25zIH0pO1xuICAgIH1cbiAgICBpZiAoKGNvbnRleHQkMS5yZW5kZXJQcm9taXNlcyB8fCBjbGllbnQuZGlzYWJsZU5ldHdvcmtGZXRjaGVzKSAmJlxuICAgICAgICAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNzcikgPT09IGZhbHNlKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlZi5jdXJyZW50LnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICAgICAgbmV0d29ya1N0YXR1czogY29yZS5OZXR3b3JrU3RhdHVzLmxvYWRpbmcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2tpcCkgfHwgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5mZXRjaFBvbGljeSkgPT09ICdzdGFuZGJ5Jykge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBjb3JlLk5ldHdvcmtTdGF0dXMucmVhZHksXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCByZXN1bHQpLCB7IGVycm9yOiByZXN1bHQuZXJyb3IgfHwgbmV3IGVycm9ycy5BcG9sbG9FcnJvcih7IGdyYXBoUUxFcnJvcnM6IHJlc3VsdC5lcnJvcnMgfSkgfSk7XG4gICAgfVxuICAgIHZhciBvYnNRdWVyeUZpZWxkcyA9IHJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICAgICAgcmVmZXRjaDogb2JzUXVlcnkucmVmZXRjaC5iaW5kKG9ic1F1ZXJ5KSxcbiAgICAgICAgZmV0Y2hNb3JlOiBvYnNRdWVyeS5mZXRjaE1vcmUuYmluZChvYnNRdWVyeSksXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiBvYnNRdWVyeS51cGRhdGVRdWVyeS5iaW5kKG9ic1F1ZXJ5KSxcbiAgICAgICAgc3RhcnRQb2xsaW5nOiBvYnNRdWVyeS5zdGFydFBvbGxpbmcuYmluZChvYnNRdWVyeSksXG4gICAgICAgIHN0b3BQb2xsaW5nOiBvYnNRdWVyeS5zdG9wUG9sbGluZy5iaW5kKG9ic1F1ZXJ5KSxcbiAgICAgICAgc3Vic2NyaWJlVG9Nb3JlOiBvYnNRdWVyeS5zdWJzY3JpYmVUb01vcmUuYmluZChvYnNRdWVyeSksXG4gICAgfSk7IH0sIFtvYnNRdWVyeV0pO1xuICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb2JzUXVlcnlGaWVsZHMpLCB7IHZhcmlhYmxlczogY3JlYXRlV2F0Y2hRdWVyeU9wdGlvbnMocXVlcnksIG9wdGlvbnMpLnZhcmlhYmxlcywgY2xpZW50OiBjbGllbnQsIGNhbGxlZDogdHJ1ZSwgcHJldmlvdXNEYXRhOiByZWYuY3VycmVudC5wcmV2aW91c0RhdGEgfSksIHJlc3VsdCk7XG59XG5mdW5jdGlvbiBjcmVhdGVXYXRjaFF1ZXJ5T3B0aW9ucyhxdWVyeSwgb3B0aW9ucykge1xuICAgIHZhciBfYTtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBza2lwID0gb3B0aW9ucy5za2lwOyBvcHRpb25zLnNzcjsgb3B0aW9ucy5vbkNvbXBsZXRlZDsgb3B0aW9ucy5vbkVycm9yOyBvcHRpb25zLmRpc3BsYXlOYW1lOyB2YXIgd2F0Y2hRdWVyeU9wdGlvbnMgPSB0c2xpYi5fX3Jlc3Qob3B0aW9ucywgW1wic2tpcFwiLCBcInNzclwiLCBcIm9uQ29tcGxldGVkXCIsIFwib25FcnJvclwiLCBcImRpc3BsYXlOYW1lXCJdKTtcbiAgICBpZiAoc2tpcCkge1xuICAgICAgICB3YXRjaFF1ZXJ5T3B0aW9ucy5mZXRjaFBvbGljeSA9ICdzdGFuZGJ5JztcbiAgICB9XG4gICAgZWxzZSBpZiAoKChfYSA9IHdhdGNoUXVlcnlPcHRpb25zLmNvbnRleHQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW5kZXJQcm9taXNlcykgJiZcbiAgICAgICAgKHdhdGNoUXVlcnlPcHRpb25zLmZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgd2F0Y2hRdWVyeU9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1hbmQtbmV0d29yaycpKSB7XG4gICAgICAgIHdhdGNoUXVlcnlPcHRpb25zLmZldGNoUG9saWN5ID0gJ2NhY2hlLWZpcnN0JztcbiAgICB9XG4gICAgZWxzZSBpZiAoIXdhdGNoUXVlcnlPcHRpb25zLmZldGNoUG9saWN5KSB7XG4gICAgICAgIHdhdGNoUXVlcnlPcHRpb25zLmZldGNoUG9saWN5ID0gJ2NhY2hlLWZpcnN0JztcbiAgICB9XG4gICAgaWYgKCF3YXRjaFF1ZXJ5T3B0aW9ucy52YXJpYWJsZXMpIHtcbiAgICAgICAgd2F0Y2hRdWVyeU9wdGlvbnMudmFyaWFibGVzID0ge307XG4gICAgfVxuICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih7IHF1ZXJ5OiBxdWVyeSB9LCB3YXRjaFF1ZXJ5T3B0aW9ucyk7XG59XG5cbnZhciBFQUdFUl9NRVRIT0RTID0gW1xuICAgICdyZWZldGNoJyxcbiAgICAnZmV0Y2hNb3JlJyxcbiAgICAndXBkYXRlUXVlcnknLFxuICAgICdzdGFydFBvbGxpbmcnLFxuICAgICdzdWJzY3JpYmVUb01vcmUnLFxuXTtcbmZ1bmN0aW9uIHVzZUxhenlRdWVyeShxdWVyeSwgb3B0aW9ucykge1xuICAgIHZhciBfYSA9IHJlYWN0LnVzZVN0YXRlKHtcbiAgICAgICAgY2FsbGVkOiBmYWxzZSxcbiAgICAgICAgcmVzb2x2ZXM6IFtdLFxuICAgIH0pLCBleGVjdXRpb24gPSBfYVswXSwgc2V0RXhlY3V0aW9uID0gX2FbMV07XG4gICAgdmFyIGV4ZWN1dGUgPSByZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZXhlY3V0ZU9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlc29sdmU7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUxKSB7IHJldHVybiAocmVzb2x2ZSA9IHJlc29sdmUxKTsgfSk7XG4gICAgICAgIHNldEV4ZWN1dGlvbihmdW5jdGlvbiAoZXhlY3V0aW9uKSB7XG4gICAgICAgICAgICBpZiAoZXhlY3V0aW9uLmNhbGxlZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCAmJiByZXN1bHQucmVmZXRjaChleGVjdXRlT3B0aW9ucyA9PT0gbnVsbCB8fCBleGVjdXRlT3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXhlY3V0ZU9wdGlvbnMudmFyaWFibGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FsbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlc29sdmVzOiB0c2xpYi5fX3NwcmVhZEFycmF5KHRzbGliLl9fc3ByZWFkQXJyYXkoW10sIGV4ZWN1dGlvbi5yZXNvbHZlcywgdHJ1ZSksIFtyZXNvbHZlXSwgZmFsc2UpLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGV4ZWN1dGVPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgcmVzdWx0ID0gdXNlUXVlcnkocXVlcnksIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgZXhlY3V0aW9uLm9wdGlvbnMpLCB7IGZldGNoUG9saWN5OiBleGVjdXRpb24uY2FsbGVkID8gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZldGNoUG9saWN5IDogJ3N0YW5kYnknLCBza2lwOiB1bmRlZmluZWQgfSkpO1xuICAgIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXNvbHZlcyA9IGV4ZWN1dGlvbi5yZXNvbHZlcztcbiAgICAgICAgaWYgKCFyZXN1bHQubG9hZGluZyAmJiByZXNvbHZlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNldEV4ZWN1dGlvbihmdW5jdGlvbiAoZXhlY3V0aW9uKSB7IHJldHVybiAodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGV4ZWN1dGlvbiksIHsgcmVzb2x2ZXM6IFtdIH0pKTsgfSk7XG4gICAgICAgICAgICByZXNvbHZlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiByZXNvbHZlKHJlc3VsdCk7IH0pO1xuICAgICAgICB9XG4gICAgfSwgW3Jlc3VsdCwgZXhlY3V0aW9uXSk7XG4gICAgaWYgKCFleGVjdXRpb24uY2FsbGVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCByZXN1bHQpLCB7IGxvYWRpbmc6IGZhbHNlLCBkYXRhOiB2b2lkIDAsIGVycm9yOiB2b2lkIDAsIGNhbGxlZDogZmFsc2UgfSk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IHJlc3VsdFtrZXldO1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEV4ZWN1dGlvbihmdW5jdGlvbiAoZXhlY3V0aW9uKSB7IHJldHVybiAodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGV4ZWN1dGlvbiksIHsgY2FsbGVkOiB0cnVlIH0pKTsgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZC5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBFQUdFUl9NRVRIT0RTXzEgPSBFQUdFUl9NRVRIT0RTOyBfaSA8IEVBR0VSX01FVEhPRFNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBFQUdFUl9NRVRIT0RTXzFbX2ldO1xuICAgICAgICAgICAgX2xvb3BfMShrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbZXhlY3V0ZSwgcmVzdWx0XTtcbn1cblxuZnVuY3Rpb24gdXNlTXV0YXRpb24obXV0YXRpb24sIG9wdGlvbnMpIHtcbiAgICB2YXIgY2xpZW50ID0gdXNlQXBvbGxvQ2xpZW50KG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jbGllbnQpO1xuICAgIHBhcnNlci52ZXJpZnlEb2N1bWVudFR5cGUobXV0YXRpb24sIHBhcnNlci5Eb2N1bWVudFR5cGUuTXV0YXRpb24pO1xuICAgIHZhciBfYSA9IHJlYWN0LnVzZVN0YXRlKHtcbiAgICAgICAgY2FsbGVkOiBmYWxzZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgIH0pLCByZXN1bHQgPSBfYVswXSwgc2V0UmVzdWx0ID0gX2FbMV07XG4gICAgdmFyIHJlZiA9IHJlYWN0LnVzZVJlZih7XG4gICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICBtdXRhdGlvbklkOiAwLFxuICAgICAgICBpc01vdW50ZWQ6IHRydWUsXG4gICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICBtdXRhdGlvbjogbXV0YXRpb24sXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgfSk7XG4gICAge1xuICAgICAgICBPYmplY3QuYXNzaWduKHJlZi5jdXJyZW50LCB7IGNsaWVudDogY2xpZW50LCBvcHRpb25zOiBvcHRpb25zLCBtdXRhdGlvbjogbXV0YXRpb24gfSk7XG4gICAgfVxuICAgIHZhciBleGVjdXRlID0gcmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV4ZWN1dGVPcHRpb25zKSB7XG4gICAgICAgIGlmIChleGVjdXRlT3B0aW9ucyA9PT0gdm9pZCAwKSB7IGV4ZWN1dGVPcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIF9hID0gcmVmLmN1cnJlbnQsIGNsaWVudCA9IF9hLmNsaWVudCwgb3B0aW9ucyA9IF9hLm9wdGlvbnMsIG11dGF0aW9uID0gX2EubXV0YXRpb247XG4gICAgICAgIHZhciBiYXNlT3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBtdXRhdGlvbjogbXV0YXRpb24gfSk7XG4gICAgICAgIGlmICghcmVmLmN1cnJlbnQucmVzdWx0LmxvYWRpbmcgJiYgIWJhc2VPcHRpb25zLmlnbm9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHNldFJlc3VsdChyZWYuY3VycmVudC5yZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBjYWxsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbXV0YXRpb25JZCA9ICsrcmVmLmN1cnJlbnQubXV0YXRpb25JZDtcbiAgICAgICAgdmFyIGNsaWVudE9wdGlvbnMgPSBjb3JlLm1lcmdlT3B0aW9ucyhiYXNlT3B0aW9ucywgZXhlY3V0ZU9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gY2xpZW50Lm11dGF0ZShjbGllbnRPcHRpb25zKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YSwgZXJyb3JzJDEgPSByZXNwb25zZS5lcnJvcnM7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBlcnJvcnMkMSAmJiBlcnJvcnMkMS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHsgZ3JhcGhRTEVycm9yczogZXJyb3JzJDEgfSlcbiAgICAgICAgICAgICAgICA6IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbklkID09PSByZWYuY3VycmVudC5tdXRhdGlvbklkICYmXG4gICAgICAgICAgICAgICAgIWNsaWVudE9wdGlvbnMuaWdub3JlUmVzdWx0cykge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHRfMSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChyZWYuY3VycmVudC5pc01vdW50ZWQgJiYgIWVxdWFsaXR5LmVxdWFsKHJlZi5jdXJyZW50LnJlc3VsdCwgcmVzdWx0XzEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZWYuY3VycmVudC5yZXN1bHQgPSByZXN1bHRfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9hID0gYmFzZU9wdGlvbnMub25Db21wbGV0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGJhc2VPcHRpb25zLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIChfYiA9IGV4ZWN1dGVPcHRpb25zLm9uQ29tcGxldGVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChleGVjdXRlT3B0aW9ucywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbklkID09PSByZWYuY3VycmVudC5tdXRhdGlvbklkICYmXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdF8yID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoIWVxdWFsaXR5LmVxdWFsKHJlZi5jdXJyZW50LnJlc3VsdCwgcmVzdWx0XzIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZWYuY3VycmVudC5yZXN1bHQgPSByZXN1bHRfMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJhc2VPcHRpb25zLm9uRXJyb3IgfHwgY2xpZW50T3B0aW9ucy5vbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgKF9hID0gYmFzZU9wdGlvbnMub25FcnJvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYmFzZU9wdGlvbnMsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAoX2IgPSBleGVjdXRlT3B0aW9ucy5vbkVycm9yKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChleGVjdXRlT3B0aW9ucywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IHZvaWQgMCwgZXJyb3JzOiBlcnJvciB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgcmVzZXQgPSByZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFJlc3VsdCh7IGNhbGxlZDogZmFsc2UsIGxvYWRpbmc6IGZhbHNlLCBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICB9LCBbXSk7XG4gICAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTsgfSwgW10pO1xuICAgIHJldHVybiBbZXhlY3V0ZSwgdHNsaWIuX19hc3NpZ24oeyByZXNldDogcmVzZXQgfSwgcmVzdWx0KV07XG59XG5cbmZ1bmN0aW9uIHVzZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24sIG9wdGlvbnMpIHtcbiAgICB2YXIgY2xpZW50ID0gdXNlQXBvbGxvQ2xpZW50KG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jbGllbnQpO1xuICAgIHBhcnNlci52ZXJpZnlEb2N1bWVudFR5cGUoc3Vic2NyaXB0aW9uLCBwYXJzZXIuRG9jdW1lbnRUeXBlLlN1YnNjcmlwdGlvbik7XG4gICAgdmFyIF9hID0gcmVhY3QudXNlU3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiAhKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5za2lwKSxcbiAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgfSksIHJlc3VsdCA9IF9hWzBdLCBzZXRSZXN1bHQgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSByZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2tpcCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgcXVlcnk6IHN1YnNjcmlwdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIGZldGNoUG9saWN5OiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICBjb250ZXh0OiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY29udGV4dCxcbiAgICAgICAgfSk7XG4gICAgfSksIG9ic2VydmFibGUgPSBfYlswXSwgc2V0T2JzZXJ2YWJsZSA9IF9iWzFdO1xuICAgIHZhciByZWYgPSByZWFjdC51c2VSZWYoeyBjbGllbnQ6IGNsaWVudCwgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb24sIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG4gICAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICB2YXIgc2hvdWxkUmVzdWJzY3JpYmUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2hvdWxkUmVzdWJzY3JpYmU7XG4gICAgICAgIGlmICh0eXBlb2Ygc2hvdWxkUmVzdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHNob3VsZFJlc3Vic2NyaWJlID0gISFzaG91bGRSZXN1YnNjcmliZShvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5za2lwKSAmJiAhKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5za2lwKSAhPT0gISgoX2EgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2tpcCkpIHtcbiAgICAgICAgICAgIHNldFJlc3VsdCh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICAgICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRPYnNlcnZhYmxlKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNob3VsZFJlc3Vic2NyaWJlICE9PSBmYWxzZSAmJiAoY2xpZW50ICE9PSByZWYuY3VycmVudC5jbGllbnQgfHxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiAhPT0gcmVmLmN1cnJlbnQuc3Vic2NyaXB0aW9uIHx8XG4gICAgICAgICAgICAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZldGNoUG9saWN5KSAhPT0gKChfYiA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mZXRjaFBvbGljeSkgfHxcbiAgICAgICAgICAgICEob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApICE9PSAhKChfYyA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5za2lwKSB8fFxuICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsIChfZCA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC52YXJpYWJsZXMpKSkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0T2JzZXJ2YWJsZShjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICBxdWVyeTogc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZldGNoUG9saWN5LFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jb250ZXh0LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVmLmN1cnJlbnQsIHsgY2xpZW50OiBjbGllbnQsIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLCBvcHRpb25zOiBvcHRpb25zIH0pO1xuICAgIH0sIFtjbGllbnQsIHN1YnNjcmlwdGlvbiwgb3B0aW9uc10pO1xuICAgIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghb2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoZmV0Y2hSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmZXRjaFJlc3VsdC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub25TdWJzY3JpcHRpb25EYXRhKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uRGF0YTogcmVzdWx0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNldFJlc3VsdCh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub25TdWJzY3JpcHRpb25Db21wbGV0ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbb2JzZXJ2YWJsZV0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHVzZVJlYWN0aXZlVmFyKHJ2KSB7XG4gICAgdmFyIHZhbHVlID0gcnYoKTtcbiAgICB2YXIgc2V0VmFsdWUgPSByZWFjdC51c2VTdGF0ZSh2YWx1ZSlbMV07XG4gICAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHByb2JhYmx5U2FtZVZhbHVlID0gcnYoKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBwcm9iYWJseVNhbWVWYWx1ZSkge1xuICAgICAgICAgICAgc2V0VmFsdWUocHJvYmFibHlTYW1lVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJ2Lm9uTmV4dENoYW5nZShzZXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbdmFsdWVdKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydHMudXNlQXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvQ2xpZW50O1xuZXhwb3J0cy51c2VMYXp5UXVlcnkgPSB1c2VMYXp5UXVlcnk7XG5leHBvcnRzLnVzZU11dGF0aW9uID0gdXNlTXV0YXRpb247XG5leHBvcnRzLnVzZVF1ZXJ5ID0gdXNlUXVlcnk7XG5leHBvcnRzLnVzZVJlYWN0aXZlVmFyID0gdXNlUmVhY3RpdmVWYXI7XG5leHBvcnRzLnVzZVN1YnNjcmlwdGlvbiA9IHVzZVN1YnNjcmlwdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvZ2xvYmFscycpO1xuXG5leHBvcnRzLkRvY3VtZW50VHlwZSA9IHZvaWQgMDtcbihmdW5jdGlvbiAoRG9jdW1lbnRUeXBlKSB7XG4gICAgRG9jdW1lbnRUeXBlW0RvY3VtZW50VHlwZVtcIlF1ZXJ5XCJdID0gMF0gPSBcIlF1ZXJ5XCI7XG4gICAgRG9jdW1lbnRUeXBlW0RvY3VtZW50VHlwZVtcIk11dGF0aW9uXCJdID0gMV0gPSBcIk11dGF0aW9uXCI7XG4gICAgRG9jdW1lbnRUeXBlW0RvY3VtZW50VHlwZVtcIlN1YnNjcmlwdGlvblwiXSA9IDJdID0gXCJTdWJzY3JpcHRpb25cIjtcbn0pKGV4cG9ydHMuRG9jdW1lbnRUeXBlIHx8IChleHBvcnRzLkRvY3VtZW50VHlwZSA9IHt9KSk7XG52YXIgY2FjaGUgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBvcGVyYXRpb25OYW1lKHR5cGUpIHtcbiAgICB2YXIgbmFtZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBleHBvcnRzLkRvY3VtZW50VHlwZS5RdWVyeTpcbiAgICAgICAgICAgIG5hbWUgPSAnUXVlcnknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZXhwb3J0cy5Eb2N1bWVudFR5cGUuTXV0YXRpb246XG4gICAgICAgICAgICBuYW1lID0gJ011dGF0aW9uJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGV4cG9ydHMuRG9jdW1lbnRUeXBlLlN1YnNjcmlwdGlvbjpcbiAgICAgICAgICAgIG5hbWUgPSAnU3Vic2NyaXB0aW9uJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZTtcbn1cbmZ1bmN0aW9uIHBhcnNlcihkb2N1bWVudCkge1xuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5nZXQoZG9jdW1lbnQpO1xuICAgIGlmIChjYWNoZWQpXG4gICAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgdmFyIHZhcmlhYmxlcywgdHlwZSwgbmFtZTtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoISFkb2N1bWVudCAmJiAhIWRvY3VtZW50LmtpbmQsIFwiQXJndW1lbnQgb2YgXCIuY29uY2F0KGRvY3VtZW50LCBcIiBwYXNzZWQgdG8gcGFyc2VyIHdhcyBub3QgYSB2YWxpZCBHcmFwaFFMIFwiKSArXG4gICAgICAgIFwiRG9jdW1lbnROb2RlLiBZb3UgbWF5IG5lZWQgdG8gdXNlICdncmFwaHFsLXRhZycgb3IgYW5vdGhlciBtZXRob2QgXCIgK1xuICAgICAgICBcInRvIGNvbnZlcnQgeW91ciBvcGVyYXRpb24gaW50byBhIGRvY3VtZW50XCIpIDogZ2xvYmFscy5pbnZhcmlhbnQoISFkb2N1bWVudCAmJiAhIWRvY3VtZW50LmtpbmQsIDMwKTtcbiAgICB2YXIgZnJhZ21lbnRzID0gZG9jdW1lbnQuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nOyB9KTtcbiAgICB2YXIgcXVlcmllcyA9IGRvY3VtZW50LmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geC5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiYgeC5vcGVyYXRpb24gPT09ICdxdWVyeSc7XG4gICAgfSk7XG4gICAgdmFyIG11dGF0aW9ucyA9IGRvY3VtZW50LmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geC5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiYgeC5vcGVyYXRpb24gPT09ICdtdXRhdGlvbic7XG4gICAgfSk7XG4gICAgdmFyIHN1YnNjcmlwdGlvbnMgPSBkb2N1bWVudC5kZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHgua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nICYmIHgub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJztcbiAgICB9KTtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoIWZyYWdtZW50cy5sZW5ndGggfHxcbiAgICAgICAgKHF1ZXJpZXMubGVuZ3RoIHx8IG11dGF0aW9ucy5sZW5ndGggfHwgc3Vic2NyaXB0aW9ucy5sZW5ndGgpLCBcIlBhc3Npbmcgb25seSBhIGZyYWdtZW50IHRvICdncmFwaHFsJyBpcyBub3QgeWV0IHN1cHBvcnRlZC4gXCIgK1xuICAgICAgICBcIllvdSBtdXN0IGluY2x1ZGUgYSBxdWVyeSwgc3Vic2NyaXB0aW9uIG9yIG11dGF0aW9uIGFzIHdlbGxcIikgOiBnbG9iYWxzLmludmFyaWFudCghZnJhZ21lbnRzLmxlbmd0aCB8fFxuICAgICAgICAocXVlcmllcy5sZW5ndGggfHwgbXV0YXRpb25zLmxlbmd0aCB8fCBzdWJzY3JpcHRpb25zLmxlbmd0aCksIDMxKTtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQocXVlcmllcy5sZW5ndGggKyBtdXRhdGlvbnMubGVuZ3RoICsgc3Vic2NyaXB0aW9ucy5sZW5ndGggPD0gMSwgXCJyZWFjdC1hcG9sbG8gb25seSBzdXBwb3J0cyBhIHF1ZXJ5LCBzdWJzY3JpcHRpb24sIG9yIGEgbXV0YXRpb24gcGVyIEhPQy4gXCIgK1xuICAgICAgICBcIlwiLmNvbmNhdChkb2N1bWVudCwgXCIgaGFkIFwiKS5jb25jYXQocXVlcmllcy5sZW5ndGgsIFwiIHF1ZXJpZXMsIFwiKS5jb25jYXQoc3Vic2NyaXB0aW9ucy5sZW5ndGgsIFwiIFwiKSArXG4gICAgICAgIFwic3Vic2NyaXB0aW9ucyBhbmQgXCIuY29uY2F0KG11dGF0aW9ucy5sZW5ndGgsIFwiIG11dGF0aW9ucy4gXCIpICtcbiAgICAgICAgXCJZb3UgY2FuIHVzZSAnY29tcG9zZScgdG8gam9pbiBtdWx0aXBsZSBvcGVyYXRpb24gdHlwZXMgdG8gYSBjb21wb25lbnRcIikgOiBnbG9iYWxzLmludmFyaWFudChxdWVyaWVzLmxlbmd0aCArIG11dGF0aW9ucy5sZW5ndGggKyBzdWJzY3JpcHRpb25zLmxlbmd0aCA8PSAxLCAzMik7XG4gICAgdHlwZSA9IHF1ZXJpZXMubGVuZ3RoID8gZXhwb3J0cy5Eb2N1bWVudFR5cGUuUXVlcnkgOiBleHBvcnRzLkRvY3VtZW50VHlwZS5NdXRhdGlvbjtcbiAgICBpZiAoIXF1ZXJpZXMubGVuZ3RoICYmICFtdXRhdGlvbnMubGVuZ3RoKVxuICAgICAgICB0eXBlID0gZXhwb3J0cy5Eb2N1bWVudFR5cGUuU3Vic2NyaXB0aW9uO1xuICAgIHZhciBkZWZpbml0aW9ucyA9IHF1ZXJpZXMubGVuZ3RoXG4gICAgICAgID8gcXVlcmllc1xuICAgICAgICA6IG11dGF0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgID8gbXV0YXRpb25zXG4gICAgICAgICAgICA6IHN1YnNjcmlwdGlvbnM7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGRlZmluaXRpb25zLmxlbmd0aCA9PT0gMSwgXCJyZWFjdC1hcG9sbG8gb25seSBzdXBwb3J0cyBvbmUgZGVmaW5pdGlvbiBwZXIgSE9DLiBcIi5jb25jYXQoZG9jdW1lbnQsIFwiIGhhZCBcIikgK1xuICAgICAgICBcIlwiLmNvbmNhdChkZWZpbml0aW9ucy5sZW5ndGgsIFwiIGRlZmluaXRpb25zLiBcIikgK1xuICAgICAgICBcIllvdSBjYW4gdXNlICdjb21wb3NlJyB0byBqb2luIG11bHRpcGxlIG9wZXJhdGlvbiB0eXBlcyB0byBhIGNvbXBvbmVudFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KGRlZmluaXRpb25zLmxlbmd0aCA9PT0gMSwgMzMpO1xuICAgIHZhciBkZWZpbml0aW9uID0gZGVmaW5pdGlvbnNbMF07XG4gICAgdmFyaWFibGVzID0gZGVmaW5pdGlvbi52YXJpYWJsZURlZmluaXRpb25zIHx8IFtdO1xuICAgIGlmIChkZWZpbml0aW9uLm5hbWUgJiYgZGVmaW5pdGlvbi5uYW1lLmtpbmQgPT09ICdOYW1lJykge1xuICAgICAgICBuYW1lID0gZGVmaW5pdGlvbi5uYW1lLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbmFtZSA9ICdkYXRhJztcbiAgICB9XG4gICAgdmFyIHBheWxvYWQgPSB7IG5hbWU6IG5hbWUsIHR5cGU6IHR5cGUsIHZhcmlhYmxlczogdmFyaWFibGVzIH07XG4gICAgY2FjaGUuc2V0KGRvY3VtZW50LCBwYXlsb2FkKTtcbiAgICByZXR1cm4gcGF5bG9hZDtcbn1cbmZ1bmN0aW9uIHZlcmlmeURvY3VtZW50VHlwZShkb2N1bWVudCwgdHlwZSkge1xuICAgIHZhciBvcGVyYXRpb24gPSBwYXJzZXIoZG9jdW1lbnQpO1xuICAgIHZhciByZXF1aXJlZE9wZXJhdGlvbk5hbWUgPSBvcGVyYXRpb25OYW1lKHR5cGUpO1xuICAgIHZhciB1c2VkT3BlcmF0aW9uTmFtZSA9IG9wZXJhdGlvbk5hbWUob3BlcmF0aW9uLnR5cGUpO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChvcGVyYXRpb24udHlwZSA9PT0gdHlwZSwgXCJSdW5uaW5nIGEgXCIuY29uY2F0KHJlcXVpcmVkT3BlcmF0aW9uTmFtZSwgXCIgcmVxdWlyZXMgYSBncmFwaHFsIFwiKSArXG4gICAgICAgIFwiXCIuY29uY2F0KHJlcXVpcmVkT3BlcmF0aW9uTmFtZSwgXCIsIGJ1dCBhIFwiKS5jb25jYXQodXNlZE9wZXJhdGlvbk5hbWUsIFwiIHdhcyB1c2VkIGluc3RlYWQuXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KG9wZXJhdGlvbi50eXBlID09PSB0eXBlLCAzNCk7XG59XG5cbmV4cG9ydHMub3BlcmF0aW9uTmFtZSA9IG9wZXJhdGlvbk5hbWU7XG5leHBvcnRzLnBhcnNlciA9IHBhcnNlcjtcbmV4cG9ydHMudmVyaWZ5RG9jdW1lbnRUeXBlID0gdmVyaWZ5RG9jdW1lbnRUeXBlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2VyLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxucmVxdWlyZSgnLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciBjb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0Jyk7XG52YXIgaG9va3MgPSByZXF1aXJlKCcuL2hvb2tzJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnLi9wYXJzZXInKTtcblxuXG5cbmV4cG9ydHMuQXBvbGxvQ29uc3VtZXIgPSBjb250ZXh0LkFwb2xsb0NvbnN1bWVyO1xuZXhwb3J0cy5BcG9sbG9Qcm92aWRlciA9IGNvbnRleHQuQXBvbGxvUHJvdmlkZXI7XG5leHBvcnRzLmdldEFwb2xsb0NvbnRleHQgPSBjb250ZXh0LmdldEFwb2xsb0NvbnRleHQ7XG5leHBvcnRzLnJlc2V0QXBvbGxvQ29udGV4dCA9IGNvbnRleHQucmVzZXRBcG9sbG9Db250ZXh0O1xuZXhwb3J0cy5Eb2N1bWVudFR5cGUgPSBwYXJzZXIuRG9jdW1lbnRUeXBlO1xuZXhwb3J0cy5vcGVyYXRpb25OYW1lID0gcGFyc2VyLm9wZXJhdGlvbk5hbWU7XG5leHBvcnRzLnBhcnNlciA9IHBhcnNlci5wYXJzZXI7XG5mb3IgKHZhciBrIGluIGhvb2tzKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIGV4cG9ydHNba10gPSBob29rc1trXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRzSW52YXJpYW50ID0gcmVxdWlyZSgndHMtaW52YXJpYW50Jyk7XG52YXIgcHJvY2VzcyQxID0gcmVxdWlyZSgndHMtaW52YXJpYW50L3Byb2Nlc3MnKTtcbnZhciBncmFwaHFsID0gcmVxdWlyZSgnZ3JhcGhxbCcpO1xuXG5mdW5jdGlvbiBtYXliZSh0aHVuaykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0aHVuaygpO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHsgfVxufVxuXG52YXIgZ2xvYmFsJDEgPSAobWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2xvYmFsVGhpczsgfSkgfHxcbiAgICBtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3c7IH0pIHx8XG4gICAgbWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZjsgfSkgfHxcbiAgICBtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBnbG9iYWw7IH0pIHx8XG4gICAgbWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF5YmUuY29uc3RydWN0b3IoXCJyZXR1cm4gdGhpc1wiKSgpOyB9KSk7XG5cbnZhciBfXyA9IFwiX19cIjtcbnZhciBHTE9CQUxfS0VZID0gW19fLCBfX10uam9pbihcIkRFVlwiKTtcbmZ1bmN0aW9uIGdldERFVigpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihfX0RFVl9fKTtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWwkMSwgR0xPQkFMX0tFWSwge1xuICAgICAgICAgICAgdmFsdWU6IG1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WOyB9KSAhPT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdsb2JhbCQxW0dMT0JBTF9LRVldO1xuICAgIH1cbn1cbnZhciBERVYgPSBnZXRERVYoKTtcblxuZnVuY3Rpb24gcmVtb3ZlVGVtcG9yYXJ5R2xvYmFscygpIHtcbiAgICByZXR1cm4gdHlwZW9mIGdyYXBocWwuU291cmNlID09PSBcImZ1bmN0aW9uXCIgPyBwcm9jZXNzJDEucmVtb3ZlKCkgOiBwcm9jZXNzJDEucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrREVWKCkge1xuICAgIF9fREVWX18gPyB0c0ludmFyaWFudC5pbnZhcmlhbnQoXCJib29sZWFuXCIgPT09IHR5cGVvZiBERVYsIERFVikgOiB0c0ludmFyaWFudC5pbnZhcmlhbnQoXCJib29sZWFuXCIgPT09IHR5cGVvZiBERVYsIDM2KTtcbn1cbnJlbW92ZVRlbXBvcmFyeUdsb2JhbHMoKTtcbmNoZWNrREVWKCk7XG5cbmV4cG9ydHMuSW52YXJpYW50RXJyb3IgPSB0c0ludmFyaWFudC5JbnZhcmlhbnRFcnJvcjtcbmV4cG9ydHMuaW52YXJpYW50ID0gdHNJbnZhcmlhbnQuaW52YXJpYW50O1xuZXhwb3J0cy5ERVYgPSBERVY7XG5leHBvcnRzLmNoZWNrREVWID0gY2hlY2tERVY7XG5leHBvcnRzLmdsb2JhbCA9IGdsb2JhbCQxO1xuZXhwb3J0cy5tYXliZSA9IG1heWJlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2xvYmFscy5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi9nbG9iYWxzJyk7XG52YXIgZ3JhcGhxbCA9IHJlcXVpcmUoJ2dyYXBocWwnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgemVuT2JzZXJ2YWJsZVRzID0gcmVxdWlyZSgnemVuLW9ic2VydmFibGUtdHMnKTtcbnJlcXVpcmUoJ3N5bWJvbC1vYnNlcnZhYmxlJyk7XG5cbmZ1bmN0aW9uIHNob3VsZEluY2x1ZGUoX2EsIHZhcmlhYmxlcykge1xuICAgIHZhciBkaXJlY3RpdmVzID0gX2EuZGlyZWN0aXZlcztcbiAgICBpZiAoIWRpcmVjdGl2ZXMgfHwgIWRpcmVjdGl2ZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0SW5jbHVzaW9uRGlyZWN0aXZlcyhkaXJlY3RpdmVzKS5ldmVyeShmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGRpcmVjdGl2ZSA9IF9hLmRpcmVjdGl2ZSwgaWZBcmd1bWVudCA9IF9hLmlmQXJndW1lbnQ7XG4gICAgICAgIHZhciBldmFsZWRWYWx1ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoaWZBcmd1bWVudC52YWx1ZS5raW5kID09PSAnVmFyaWFibGUnKSB7XG4gICAgICAgICAgICBldmFsZWRWYWx1ZSA9IHZhcmlhYmxlcyAmJiB2YXJpYWJsZXNbaWZBcmd1bWVudC52YWx1ZS5uYW1lLnZhbHVlXTtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChldmFsZWRWYWx1ZSAhPT0gdm9pZCAwLCBcIkludmFsaWQgdmFyaWFibGUgcmVmZXJlbmNlZCBpbiBAXCIuY29uY2F0KGRpcmVjdGl2ZS5uYW1lLnZhbHVlLCBcIiBkaXJlY3RpdmUuXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KGV2YWxlZFZhbHVlICE9PSB2b2lkIDAsIDM3KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2YWxlZFZhbHVlID0gaWZBcmd1bWVudC52YWx1ZS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlLm5hbWUudmFsdWUgPT09ICdza2lwJyA/ICFldmFsZWRWYWx1ZSA6IGV2YWxlZFZhbHVlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0RGlyZWN0aXZlTmFtZXMocm9vdCkge1xuICAgIHZhciBuYW1lcyA9IFtdO1xuICAgIGdyYXBocWwudmlzaXQocm9vdCwge1xuICAgICAgICBEaXJlY3RpdmU6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBuYW1lcy5wdXNoKG5vZGUubmFtZS52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIG5hbWVzO1xufVxuZnVuY3Rpb24gaGFzRGlyZWN0aXZlcyhuYW1lcywgcm9vdCkge1xuICAgIHJldHVybiBnZXREaXJlY3RpdmVOYW1lcyhyb290KS5zb21lKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBuYW1lcy5pbmRleE9mKG5hbWUpID4gLTE7IH0pO1xufVxuZnVuY3Rpb24gaGFzQ2xpZW50RXhwb3J0cyhkb2N1bWVudCkge1xuICAgIHJldHVybiAoZG9jdW1lbnQgJiZcbiAgICAgICAgaGFzRGlyZWN0aXZlcyhbJ2NsaWVudCddLCBkb2N1bWVudCkgJiZcbiAgICAgICAgaGFzRGlyZWN0aXZlcyhbJ2V4cG9ydCddLCBkb2N1bWVudCkpO1xufVxuZnVuY3Rpb24gaXNJbmNsdXNpb25EaXJlY3RpdmUoX2EpIHtcbiAgICB2YXIgdmFsdWUgPSBfYS5uYW1lLnZhbHVlO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJ3NraXAnIHx8IHZhbHVlID09PSAnaW5jbHVkZSc7XG59XG5mdW5jdGlvbiBnZXRJbmNsdXNpb25EaXJlY3RpdmVzKGRpcmVjdGl2ZXMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgaWYgKGRpcmVjdGl2ZXMgJiYgZGlyZWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGlmICghaXNJbmNsdXNpb25EaXJlY3RpdmUoZGlyZWN0aXZlKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGlyZWN0aXZlQXJndW1lbnRzID0gZGlyZWN0aXZlLmFyZ3VtZW50cztcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmVOYW1lID0gZGlyZWN0aXZlLm5hbWUudmFsdWU7XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZGlyZWN0aXZlQXJndW1lbnRzICYmIGRpcmVjdGl2ZUFyZ3VtZW50cy5sZW5ndGggPT09IDEsIFwiSW5jb3JyZWN0IG51bWJlciBvZiBhcmd1bWVudHMgZm9yIHRoZSBAXCIuY29uY2F0KGRpcmVjdGl2ZU5hbWUsIFwiIGRpcmVjdGl2ZS5cIikpIDogZ2xvYmFscy5pbnZhcmlhbnQoZGlyZWN0aXZlQXJndW1lbnRzICYmIGRpcmVjdGl2ZUFyZ3VtZW50cy5sZW5ndGggPT09IDEsIDM4KTtcbiAgICAgICAgICAgIHZhciBpZkFyZ3VtZW50ID0gZGlyZWN0aXZlQXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGlmQXJndW1lbnQubmFtZSAmJiBpZkFyZ3VtZW50Lm5hbWUudmFsdWUgPT09ICdpZicsIFwiSW52YWxpZCBhcmd1bWVudCBmb3IgdGhlIEBcIi5jb25jYXQoZGlyZWN0aXZlTmFtZSwgXCIgZGlyZWN0aXZlLlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChpZkFyZ3VtZW50Lm5hbWUgJiYgaWZBcmd1bWVudC5uYW1lLnZhbHVlID09PSAnaWYnLCAzOSk7XG4gICAgICAgICAgICB2YXIgaWZWYWx1ZSA9IGlmQXJndW1lbnQudmFsdWU7XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoaWZWYWx1ZSAmJlxuICAgICAgICAgICAgICAgIChpZlZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZScgfHwgaWZWYWx1ZS5raW5kID09PSAnQm9vbGVhblZhbHVlJyksIFwiQXJndW1lbnQgZm9yIHRoZSBAXCIuY29uY2F0KGRpcmVjdGl2ZU5hbWUsIFwiIGRpcmVjdGl2ZSBtdXN0IGJlIGEgdmFyaWFibGUgb3IgYSBib29sZWFuIHZhbHVlLlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChpZlZhbHVlICYmXG4gICAgICAgICAgICAgICAgKGlmVmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJyB8fCBpZlZhbHVlLmtpbmQgPT09ICdCb29sZWFuVmFsdWUnKSwgNDApO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBkaXJlY3RpdmU6IGRpcmVjdGl2ZSwgaWZBcmd1bWVudDogaWZBcmd1bWVudCB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdldEZyYWdtZW50UXVlcnlEb2N1bWVudChkb2N1bWVudCwgZnJhZ21lbnROYW1lKSB7XG4gICAgdmFyIGFjdHVhbEZyYWdtZW50TmFtZSA9IGZyYWdtZW50TmFtZTtcbiAgICB2YXIgZnJhZ21lbnRzID0gW107XG4gICAgZG9jdW1lbnQuZGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIkZvdW5kIGEgXCIuY29uY2F0KGRlZmluaXRpb24ub3BlcmF0aW9uLCBcIiBvcGVyYXRpb25cIikuY29uY2F0KGRlZmluaXRpb24ubmFtZSA/IFwiIG5hbWVkICdcIi5jb25jYXQoZGVmaW5pdGlvbi5uYW1lLnZhbHVlLCBcIidcIikgOiAnJywgXCIuIFwiKSArXG4gICAgICAgICAgICAgICAgJ05vIG9wZXJhdGlvbnMgYXJlIGFsbG93ZWQgd2hlbiB1c2luZyBhIGZyYWdtZW50IGFzIGEgcXVlcnkuIE9ubHkgZnJhZ21lbnRzIGFyZSBhbGxvd2VkLicpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoNDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nKSB7XG4gICAgICAgICAgICBmcmFnbWVudHMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgYWN0dWFsRnJhZ21lbnROYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnRzLmxlbmd0aCA9PT0gMSwgXCJGb3VuZCBcIi5jb25jYXQoZnJhZ21lbnRzLmxlbmd0aCwgXCIgZnJhZ21lbnRzLiBgZnJhZ21lbnROYW1lYCBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gdGhlcmUgaXMgbm90IGV4YWN0bHkgMSBmcmFnbWVudC5cIikpIDogZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnRzLmxlbmd0aCA9PT0gMSwgNDIpO1xuICAgICAgICBhY3R1YWxGcmFnbWVudE5hbWUgPSBmcmFnbWVudHNbMF0ubmFtZS52YWx1ZTtcbiAgICB9XG4gICAgdmFyIHF1ZXJ5ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGRvY3VtZW50KSwgeyBkZWZpbml0aW9uczogdHNsaWIuX19zcHJlYWRBcnJheShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2luZDogJ09wZXJhdGlvbkRlZmluaXRpb24nLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogJ3F1ZXJ5JyxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRnJhZ21lbnRTcHJlYWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWN0dWFsRnJhZ21lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sIGRvY3VtZW50LmRlZmluaXRpb25zLCB0cnVlKSB9KTtcbiAgICByZXR1cm4gcXVlcnk7XG59XG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudE1hcChmcmFnbWVudHMpIHtcbiAgICBpZiAoZnJhZ21lbnRzID09PSB2b2lkIDApIHsgZnJhZ21lbnRzID0gW107IH1cbiAgICB2YXIgc3ltVGFibGUgPSB7fTtcbiAgICBmcmFnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZnJhZ21lbnQpIHtcbiAgICAgICAgc3ltVGFibGVbZnJhZ21lbnQubmFtZS52YWx1ZV0gPSBmcmFnbWVudDtcbiAgICB9KTtcbiAgICByZXR1cm4gc3ltVGFibGU7XG59XG5mdW5jdGlvbiBnZXRGcmFnbWVudEZyb21TZWxlY3Rpb24oc2VsZWN0aW9uLCBmcmFnbWVudE1hcCkge1xuICAgIHN3aXRjaCAoc2VsZWN0aW9uLmtpbmQpIHtcbiAgICAgICAgY2FzZSAnSW5saW5lRnJhZ21lbnQnOlxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgICAgICAgY2FzZSAnRnJhZ21lbnRTcHJlYWQnOiB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBmcmFnbWVudE1hcCAmJiBmcmFnbWVudE1hcFtzZWxlY3Rpb24ubmFtZS52YWx1ZV07XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnQsIFwiTm8gZnJhZ21lbnQgbmFtZWQgXCIuY29uY2F0KHNlbGVjdGlvbi5uYW1lLnZhbHVlLCBcIi5cIikpIDogZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnQsIDQzKTtcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gbWFrZVJlZmVyZW5jZShpZCkge1xuICAgIHJldHVybiB7IF9fcmVmOiBTdHJpbmcoaWQpIH07XG59XG5mdW5jdGlvbiBpc1JlZmVyZW5jZShvYmopIHtcbiAgICByZXR1cm4gQm9vbGVhbihvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5fX3JlZiA9PT0gJ3N0cmluZycpO1xufVxuZnVuY3Rpb24gaXNEb2N1bWVudE5vZGUodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkgJiZcbiAgICAgICAgdmFsdWUua2luZCA9PT0gXCJEb2N1bWVudFwiICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUuZGVmaW5pdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ1N0cmluZ1ZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzQm9vbGVhblZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdCb29sZWFuVmFsdWUnO1xufVxuZnVuY3Rpb24gaXNJbnRWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnSW50VmFsdWUnO1xufVxuZnVuY3Rpb24gaXNGbG9hdFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdGbG9hdFZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzVmFyaWFibGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJztcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ09iamVjdFZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzTGlzdFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdMaXN0VmFsdWUnO1xufVxuZnVuY3Rpb24gaXNFbnVtVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0VudW1WYWx1ZSc7XG59XG5mdW5jdGlvbiBpc051bGxWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnTnVsbFZhbHVlJztcbn1cbmZ1bmN0aW9uIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihhcmdPYmosIG5hbWUsIHZhbHVlLCB2YXJpYWJsZXMpIHtcbiAgICBpZiAoaXNJbnRWYWx1ZSh2YWx1ZSkgfHwgaXNGbG9hdFZhbHVlKHZhbHVlKSkge1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSBOdW1iZXIodmFsdWUudmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0Jvb2xlYW5WYWx1ZSh2YWx1ZSkgfHwgaXNTdHJpbmdWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0VmFsdWUodmFsdWUpKSB7XG4gICAgICAgIHZhciBuZXN0ZWRBcmdPYmpfMSA9IHt9O1xuICAgICAgICB2YWx1ZS5maWVsZHMubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24obmVzdGVkQXJnT2JqXzEsIG9iai5uYW1lLCBvYmoudmFsdWUsIHZhcmlhYmxlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSBuZXN0ZWRBcmdPYmpfMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNWYXJpYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIHZhcmlhYmxlVmFsdWUgPSAodmFyaWFibGVzIHx8IHt9KVt2YWx1ZS5uYW1lLnZhbHVlXTtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gdmFyaWFibGVWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNMaXN0VmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IHZhbHVlLnZhbHVlcy5tYXAoZnVuY3Rpb24gKGxpc3RWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIG5lc3RlZEFyZ0FycmF5T2JqID0ge307XG4gICAgICAgICAgICB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24obmVzdGVkQXJnQXJyYXlPYmosIG5hbWUsIGxpc3RWYWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRBcmdBcnJheU9ialtuYW1lLnZhbHVlXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzRW51bVZhbHVlKHZhbHVlKSkge1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOdWxsVmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJUaGUgaW5saW5lIGFyZ3VtZW50IFxcXCJcIi5jb25jYXQobmFtZS52YWx1ZSwgXCJcXFwiIG9mIGtpbmQgXFxcIlwiKS5jb25jYXQodmFsdWUua2luZCwgXCJcXFwiXCIpICtcbiAgICAgICAgICAgICdpcyBub3Qgc3VwcG9ydGVkLiBVc2UgdmFyaWFibGVzIGluc3RlYWQgb2YgaW5saW5lIGFyZ3VtZW50cyB0byAnICtcbiAgICAgICAgICAgICdvdmVyY29tZSB0aGlzIGxpbWl0YXRpb24uJykgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig1Mik7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RvcmVLZXlOYW1lRnJvbUZpZWxkKGZpZWxkLCB2YXJpYWJsZXMpIHtcbiAgICB2YXIgZGlyZWN0aXZlc09iaiA9IG51bGw7XG4gICAgaWYgKGZpZWxkLmRpcmVjdGl2ZXMpIHtcbiAgICAgICAgZGlyZWN0aXZlc09iaiA9IHt9O1xuICAgICAgICBmaWVsZC5kaXJlY3RpdmVzLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgZGlyZWN0aXZlc09ialtkaXJlY3RpdmUubmFtZS52YWx1ZV0gPSB7fTtcbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24oZGlyZWN0aXZlc09ialtkaXJlY3RpdmUubmFtZS52YWx1ZV0sIG5hbWUsIHZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGFyZ09iaiA9IG51bGw7XG4gICAgaWYgKGZpZWxkLmFyZ3VtZW50cyAmJiBmaWVsZC5hcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGFyZ09iaiA9IHt9O1xuICAgICAgICBmaWVsZC5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24oYXJnT2JqLCBuYW1lLCB2YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRTdG9yZUtleU5hbWUoZmllbGQubmFtZS52YWx1ZSwgYXJnT2JqLCBkaXJlY3RpdmVzT2JqKTtcbn1cbnZhciBLTk9XTl9ESVJFQ1RJVkVTID0gW1xuICAgICdjb25uZWN0aW9uJyxcbiAgICAnaW5jbHVkZScsXG4gICAgJ3NraXAnLFxuICAgICdjbGllbnQnLFxuICAgICdyZXN0JyxcbiAgICAnZXhwb3J0Jyxcbl07XG52YXIgZ2V0U3RvcmVLZXlOYW1lID0gT2JqZWN0LmFzc2lnbihmdW5jdGlvbiAoZmllbGROYW1lLCBhcmdzLCBkaXJlY3RpdmVzKSB7XG4gICAgaWYgKGFyZ3MgJiZcbiAgICAgICAgZGlyZWN0aXZlcyAmJlxuICAgICAgICBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ10gJiZcbiAgICAgICAgZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydrZXknXSkge1xuICAgICAgICBpZiAoZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydmaWx0ZXInXSAmJlxuICAgICAgICAgICAgZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydmaWx0ZXInXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyS2V5cyA9IGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsnZmlsdGVyJ11cbiAgICAgICAgICAgICAgICA/IGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsnZmlsdGVyJ11cbiAgICAgICAgICAgICAgICA6IFtdO1xuICAgICAgICAgICAgZmlsdGVyS2V5cy5zb3J0KCk7XG4gICAgICAgICAgICB2YXIgZmlsdGVyZWRBcmdzXzEgPSB7fTtcbiAgICAgICAgICAgIGZpbHRlcktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRBcmdzXzFba2V5XSA9IGFyZ3Nba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsna2V5J10sIFwiKFwiKS5jb25jYXQoc3RyaW5naWZ5KGZpbHRlcmVkQXJnc18xKSwgXCIpXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsna2V5J107XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNvbXBsZXRlRmllbGROYW1lID0gZmllbGROYW1lO1xuICAgIGlmIChhcmdzKSB7XG4gICAgICAgIHZhciBzdHJpbmdpZmllZEFyZ3MgPSBzdHJpbmdpZnkoYXJncyk7XG4gICAgICAgIGNvbXBsZXRlRmllbGROYW1lICs9IFwiKFwiLmNvbmNhdChzdHJpbmdpZmllZEFyZ3MsIFwiKVwiKTtcbiAgICB9XG4gICAgaWYgKGRpcmVjdGl2ZXMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGlyZWN0aXZlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoS05PV05fRElSRUNUSVZFUy5pbmRleE9mKGtleSkgIT09IC0xKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmVzW2tleV0gJiYgT2JqZWN0LmtleXMoZGlyZWN0aXZlc1trZXldKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUZpZWxkTmFtZSArPSBcIkBcIi5jb25jYXQoa2V5LCBcIihcIikuY29uY2F0KHN0cmluZ2lmeShkaXJlY3RpdmVzW2tleV0pLCBcIilcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUZpZWxkTmFtZSArPSBcIkBcIi5jb25jYXQoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wbGV0ZUZpZWxkTmFtZTtcbn0sIHtcbiAgICBzZXRTdHJpbmdpZnk6IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHZhciBwcmV2aW91cyA9IHN0cmluZ2lmeTtcbiAgICAgICAgc3RyaW5naWZ5ID0gcztcbiAgICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgIH0sXG59KTtcbnZhciBzdHJpbmdpZnkgPSBmdW5jdGlvbiBkZWZhdWx0U3RyaW5naWZ5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCBzdHJpbmdpZnlSZXBsYWNlcik7XG59O1xuZnVuY3Rpb24gc3RyaW5naWZ5UmVwbGFjZXIoX2tleSwgdmFsdWUpIHtcbiAgICBpZiAoaXNOb25OdWxsT2JqZWN0KHZhbHVlKSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBPYmplY3Qua2V5cyh2YWx1ZSkuc29ydCgpLnJlZHVjZShmdW5jdGlvbiAoY29weSwga2V5KSB7XG4gICAgICAgICAgICBjb3B5W2tleV0gPSB2YWx1ZVtrZXldO1xuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkKGZpZWxkLCB2YXJpYWJsZXMpIHtcbiAgICBpZiAoZmllbGQuYXJndW1lbnRzICYmIGZpZWxkLmFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGFyZ09ial8xID0ge307XG4gICAgICAgIGZpZWxkLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfYS5uYW1lLCB2YWx1ZSA9IF9hLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihhcmdPYmpfMSwgbmFtZSwgdmFsdWUsIHZhcmlhYmxlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXJnT2JqXzE7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gcmVzdWx0S2V5TmFtZUZyb21GaWVsZChmaWVsZCkge1xuICAgIHJldHVybiBmaWVsZC5hbGlhcyA/IGZpZWxkLmFsaWFzLnZhbHVlIDogZmllbGQubmFtZS52YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldFR5cGVuYW1lRnJvbVJlc3VsdChyZXN1bHQsIHNlbGVjdGlvblNldCwgZnJhZ21lbnRNYXApIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdC5fX3R5cGVuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcmVzdWx0Ll9fdHlwZW5hbWU7XG4gICAgfVxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBzZWxlY3Rpb25TZXQuc2VsZWN0aW9uczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IF9hW19pXTtcbiAgICAgICAgaWYgKGlzRmllbGQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5uYW1lLnZhbHVlID09PSAnX190eXBlbmFtZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0W3Jlc3VsdEtleU5hbWVGcm9tRmllbGQoc2VsZWN0aW9uKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdHlwZW5hbWUgPSBnZXRUeXBlbmFtZUZyb21SZXN1bHQocmVzdWx0LCBnZXRGcmFnbWVudEZyb21TZWxlY3Rpb24oc2VsZWN0aW9uLCBmcmFnbWVudE1hcCkuc2VsZWN0aW9uU2V0LCBmcmFnbWVudE1hcCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHR5cGVuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGlzRmllbGQoc2VsZWN0aW9uKSB7XG4gICAgcmV0dXJuIHNlbGVjdGlvbi5raW5kID09PSAnRmllbGQnO1xufVxuZnVuY3Rpb24gaXNJbmxpbmVGcmFnbWVudChzZWxlY3Rpb24pIHtcbiAgICByZXR1cm4gc2VsZWN0aW9uLmtpbmQgPT09ICdJbmxpbmVGcmFnbWVudCc7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRG9jdW1lbnQoZG9jKSB7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGRvYyAmJiBkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgXCJFeHBlY3RpbmcgYSBwYXJzZWQgR3JhcGhRTCBkb2N1bWVudC4gUGVyaGFwcyB5b3UgbmVlZCB0byB3cmFwIHRoZSBxdWVyeSBzdHJpbmcgaW4gYSBcXFwiZ3FsXFxcIiB0YWc/IGh0dHA6Ly9kb2NzLmFwb2xsb3N0YWNrLmNvbS9hcG9sbG8tY2xpZW50L2NvcmUuaHRtbCNncWxcIikgOiBnbG9iYWxzLmludmFyaWFudChkb2MgJiYgZG9jLmtpbmQgPT09ICdEb2N1bWVudCcsIDQ0KTtcbiAgICB2YXIgb3BlcmF0aW9ucyA9IGRvYy5kZWZpbml0aW9uc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nOyB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgIT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiU2NoZW1hIHR5cGUgZGVmaW5pdGlvbnMgbm90IGFsbG93ZWQgaW4gcXVlcmllcy4gRm91bmQ6IFxcXCJcIi5jb25jYXQoZGVmaW5pdGlvbi5raW5kLCBcIlxcXCJcIikpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoNDUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChvcGVyYXRpb25zLmxlbmd0aCA8PSAxLCBcIkFtYmlndW91cyBHcmFwaFFMIGRvY3VtZW50OiBjb250YWlucyBcIi5jb25jYXQob3BlcmF0aW9ucy5sZW5ndGgsIFwiIG9wZXJhdGlvbnNcIikpIDogZ2xvYmFscy5pbnZhcmlhbnQob3BlcmF0aW9ucy5sZW5ndGggPD0gMSwgNDYpO1xuICAgIHJldHVybiBkb2M7XG59XG5mdW5jdGlvbiBnZXRPcGVyYXRpb25EZWZpbml0aW9uKGRvYykge1xuICAgIGNoZWNrRG9jdW1lbnQoZG9jKTtcbiAgICByZXR1cm4gZG9jLmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoZGVmaW5pdGlvbikgeyByZXR1cm4gZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbic7IH0pWzBdO1xufVxuZnVuY3Rpb24gZ2V0T3BlcmF0aW9uTmFtZShkb2MpIHtcbiAgICByZXR1cm4gKGRvYy5kZWZpbml0aW9uc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJyAmJiBkZWZpbml0aW9uLm5hbWU7XG4gICAgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5uYW1lLnZhbHVlOyB9KVswXSB8fCBudWxsKTtcbn1cbmZ1bmN0aW9uIGdldEZyYWdtZW50RGVmaW5pdGlvbnMoZG9jKSB7XG4gICAgcmV0dXJuIGRvYy5kZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGRlZmluaXRpb24pIHsgcmV0dXJuIGRlZmluaXRpb24ua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbic7IH0pO1xufVxuZnVuY3Rpb24gZ2V0UXVlcnlEZWZpbml0aW9uKGRvYykge1xuICAgIHZhciBxdWVyeURlZiA9IGdldE9wZXJhdGlvbkRlZmluaXRpb24oZG9jKTtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQocXVlcnlEZWYgJiYgcXVlcnlEZWYub3BlcmF0aW9uID09PSAncXVlcnknLCAnTXVzdCBjb250YWluIGEgcXVlcnkgZGVmaW5pdGlvbi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KHF1ZXJ5RGVmICYmIHF1ZXJ5RGVmLm9wZXJhdGlvbiA9PT0gJ3F1ZXJ5JywgNDcpO1xuICAgIHJldHVybiBxdWVyeURlZjtcbn1cbmZ1bmN0aW9uIGdldEZyYWdtZW50RGVmaW5pdGlvbihkb2MpIHtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZG9jLmtpbmQgPT09ICdEb2N1bWVudCcsIFwiRXhwZWN0aW5nIGEgcGFyc2VkIEdyYXBoUUwgZG9jdW1lbnQuIFBlcmhhcHMgeW91IG5lZWQgdG8gd3JhcCB0aGUgcXVlcnkgc3RyaW5nIGluIGEgXFxcImdxbFxcXCIgdGFnPyBodHRwOi8vZG9jcy5hcG9sbG9zdGFjay5jb20vYXBvbGxvLWNsaWVudC9jb3JlLmh0bWwjZ3FsXCIpIDogZ2xvYmFscy5pbnZhcmlhbnQoZG9jLmtpbmQgPT09ICdEb2N1bWVudCcsIDQ4KTtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZG9jLmRlZmluaXRpb25zLmxlbmd0aCA8PSAxLCAnRnJhZ21lbnQgbXVzdCBoYXZlIGV4YWN0bHkgb25lIGRlZmluaXRpb24uJykgOiBnbG9iYWxzLmludmFyaWFudChkb2MuZGVmaW5pdGlvbnMubGVuZ3RoIDw9IDEsIDQ5KTtcbiAgICB2YXIgZnJhZ21lbnREZWYgPSBkb2MuZGVmaW5pdGlvbnNbMF07XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGZyYWdtZW50RGVmLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nLCAnTXVzdCBiZSBhIGZyYWdtZW50IGRlZmluaXRpb24uJykgOiBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudERlZi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJywgNTApO1xuICAgIHJldHVybiBmcmFnbWVudERlZjtcbn1cbmZ1bmN0aW9uIGdldE1haW5EZWZpbml0aW9uKHF1ZXJ5RG9jKSB7XG4gICAgY2hlY2tEb2N1bWVudChxdWVyeURvYyk7XG4gICAgdmFyIGZyYWdtZW50RGVmaW5pdGlvbjtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gcXVlcnlEb2MuZGVmaW5pdGlvbnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBkZWZpbml0aW9uID0gX2FbX2ldO1xuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBvcGVyYXRpb24gPSBkZWZpbml0aW9uLm9wZXJhdGlvbjtcbiAgICAgICAgICAgIGlmIChvcGVyYXRpb24gPT09ICdxdWVyeScgfHxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24gPT09ICdtdXRhdGlvbicgfHxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24gPT09ICdzdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicgJiYgIWZyYWdtZW50RGVmaW5pdGlvbikge1xuICAgICAgICAgICAgZnJhZ21lbnREZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhZ21lbnREZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiBmcmFnbWVudERlZmluaXRpb247XG4gICAgfVxuICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcignRXhwZWN0ZWQgYSBwYXJzZWQgR3JhcGhRTCBxdWVyeSB3aXRoIGEgcXVlcnksIG11dGF0aW9uLCBzdWJzY3JpcHRpb24sIG9yIGEgZnJhZ21lbnQuJykgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig1MSk7XG59XG5mdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVzKGRlZmluaXRpb24pIHtcbiAgICB2YXIgZGVmYXVsdFZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGRlZnMgPSBkZWZpbml0aW9uICYmIGRlZmluaXRpb24udmFyaWFibGVEZWZpbml0aW9ucztcbiAgICBpZiAoZGVmcyAmJiBkZWZzLmxlbmd0aCkge1xuICAgICAgICBkZWZzLmZvckVhY2goZnVuY3Rpb24gKGRlZikge1xuICAgICAgICAgICAgaWYgKGRlZi5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24oZGVmYXVsdFZhbHVlcywgZGVmLnZhcmlhYmxlLm5hbWUsIGRlZi5kZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckluUGxhY2UoYXJyYXksIHRlc3QsIGNvbnRleHQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gMDtcbiAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBpKSB7XG4gICAgICAgIGlmICh0ZXN0LmNhbGwodGhpcywgZWxlbSwgaSwgYXJyYXkpKSB7XG4gICAgICAgICAgICBhcnJheVt0YXJnZXQrK10gPSBlbGVtO1xuICAgICAgICB9XG4gICAgfSwgY29udGV4dCk7XG4gICAgYXJyYXkubGVuZ3RoID0gdGFyZ2V0O1xuICAgIHJldHVybiBhcnJheTtcbn1cblxudmFyIFRZUEVOQU1FX0ZJRUxEID0ge1xuICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgbmFtZToge1xuICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgIHZhbHVlOiAnX190eXBlbmFtZScsXG4gICAgfSxcbn07XG5mdW5jdGlvbiBpc0VtcHR5KG9wLCBmcmFnbWVudHMpIHtcbiAgICByZXR1cm4gb3Auc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZXZlcnkoZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gc2VsZWN0aW9uLmtpbmQgPT09ICdGcmFnbWVudFNwcmVhZCcgJiZcbiAgICAgICAgICAgIGlzRW1wdHkoZnJhZ21lbnRzW3NlbGVjdGlvbi5uYW1lLnZhbHVlXSwgZnJhZ21lbnRzKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIG51bGxJZkRvY0lzRW1wdHkoZG9jKSB7XG4gICAgcmV0dXJuIGlzRW1wdHkoZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihkb2MpIHx8IGdldEZyYWdtZW50RGVmaW5pdGlvbihkb2MpLCBjcmVhdGVGcmFnbWVudE1hcChnZXRGcmFnbWVudERlZmluaXRpb25zKGRvYykpKVxuICAgICAgICA/IG51bGxcbiAgICAgICAgOiBkb2M7XG59XG5mdW5jdGlvbiBnZXREaXJlY3RpdmVNYXRjaGVyKGRpcmVjdGl2ZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gZGlyZWN0aXZlTWF0Y2hlcihkaXJlY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICByZXR1cm4gKGRpci5uYW1lICYmIGRpci5uYW1lID09PSBkaXJlY3RpdmUubmFtZS52YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAoZGlyLnRlc3QgJiYgZGlyLnRlc3QoZGlyZWN0aXZlKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiByZW1vdmVEaXJlY3RpdmVzRnJvbURvY3VtZW50KGRpcmVjdGl2ZXMsIGRvYykge1xuICAgIHZhciB2YXJpYWJsZXNJblVzZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIHZhcmlhYmxlc1RvUmVtb3ZlID0gW107XG4gICAgdmFyIGZyYWdtZW50U3ByZWFkc0luVXNlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgZnJhZ21lbnRTcHJlYWRzVG9SZW1vdmUgPSBbXTtcbiAgICB2YXIgbW9kaWZpZWREb2MgPSBudWxsSWZEb2NJc0VtcHR5KGdyYXBocWwudmlzaXQoZG9jLCB7XG4gICAgICAgIFZhcmlhYmxlOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUsIF9rZXksIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQua2luZCAhPT0gJ1ZhcmlhYmxlRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzSW5Vc2Vbbm9kZS5uYW1lLnZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRmllbGQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3RpdmVzICYmIG5vZGUuZGlyZWN0aXZlcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2hvdWxkUmVtb3ZlRmllbGQgPSBkaXJlY3RpdmVzLnNvbWUoZnVuY3Rpb24gKGRpcmVjdGl2ZSkgeyByZXR1cm4gZGlyZWN0aXZlLnJlbW92ZTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRSZW1vdmVGaWVsZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kaXJlY3RpdmVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRpcmVjdGl2ZXMuc29tZShnZXREaXJlY3RpdmVNYXRjaGVyKGRpcmVjdGl2ZXMpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmcudmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzVG9SZW1vdmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXJnLnZhbHVlLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QWxsRnJhZ21lbnRTcHJlYWRzRnJvbVNlbGVjdGlvblNldChub2RlLnNlbGVjdGlvblNldCkuZm9yRWFjaChmdW5jdGlvbiAoZnJhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudFNwcmVhZHNUb1JlbW92ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZyYWcubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIEZyYWdtZW50U3ByZWFkOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNwcmVhZHNJblVzZVtub2RlLm5hbWUudmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIERpcmVjdGl2ZToge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdldERpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlcykobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KSk7XG4gICAgaWYgKG1vZGlmaWVkRG9jICYmXG4gICAgICAgIGZpbHRlckluUGxhY2UodmFyaWFibGVzVG9SZW1vdmUsIGZ1bmN0aW9uICh2KSB7IHJldHVybiAhIXYubmFtZSAmJiAhdmFyaWFibGVzSW5Vc2Vbdi5uYW1lXTsgfSkubGVuZ3RoKSB7XG4gICAgICAgIG1vZGlmaWVkRG9jID0gcmVtb3ZlQXJndW1lbnRzRnJvbURvY3VtZW50KHZhcmlhYmxlc1RvUmVtb3ZlLCBtb2RpZmllZERvYyk7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZERvYyAmJlxuICAgICAgICBmaWx0ZXJJblBsYWNlKGZyYWdtZW50U3ByZWFkc1RvUmVtb3ZlLCBmdW5jdGlvbiAoZnMpIHsgcmV0dXJuICEhZnMubmFtZSAmJiAhZnJhZ21lbnRTcHJlYWRzSW5Vc2VbZnMubmFtZV07IH0pXG4gICAgICAgICAgICAubGVuZ3RoKSB7XG4gICAgICAgIG1vZGlmaWVkRG9jID0gcmVtb3ZlRnJhZ21lbnRTcHJlYWRGcm9tRG9jdW1lbnQoZnJhZ21lbnRTcHJlYWRzVG9SZW1vdmUsIG1vZGlmaWVkRG9jKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGlmaWVkRG9jO1xufVxudmFyIGFkZFR5cGVuYW1lVG9Eb2N1bWVudCA9IE9iamVjdC5hc3NpZ24oZnVuY3Rpb24gKGRvYykge1xuICAgIHJldHVybiBncmFwaHFsLnZpc2l0KGNoZWNrRG9jdW1lbnQoZG9jKSwge1xuICAgICAgICBTZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSwgX2tleSwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCAmJlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbnMgPSBub2RlLnNlbGVjdGlvbnM7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHNraXAgPSBzZWxlY3Rpb25zLnNvbWUoZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGlzRmllbGQoc2VsZWN0aW9uKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbi5uYW1lLnZhbHVlID09PSAnX190eXBlbmFtZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24ubmFtZS52YWx1ZS5sYXN0SW5kZXhPZignX18nLCAwKSA9PT0gMCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChza2lwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIGlmIChpc0ZpZWxkKGZpZWxkKSAmJlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXJlY3RpdmVzICYmXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lLnZhbHVlID09PSAnZXhwb3J0JzsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG5vZGUpLCB7IHNlbGVjdGlvbnM6IHRzbGliLl9fc3ByZWFkQXJyYXkodHNsaWIuX19zcHJlYWRBcnJheShbXSwgc2VsZWN0aW9ucywgdHJ1ZSksIFtUWVBFTkFNRV9GSUVMRF0sIGZhbHNlKSB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG59LCB7XG4gICAgYWRkZWQ6IGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICByZXR1cm4gZmllbGQgPT09IFRZUEVOQU1FX0ZJRUxEO1xuICAgIH0sXG59KTtcbnZhciBjb25uZWN0aW9uUmVtb3ZlQ29uZmlnID0ge1xuICAgIHRlc3Q6IGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgdmFyIHdpbGxSZW1vdmUgPSBkaXJlY3RpdmUubmFtZS52YWx1ZSA9PT0gJ2Nvbm5lY3Rpb24nO1xuICAgICAgICBpZiAod2lsbFJlbW92ZSkge1xuICAgICAgICAgICAgaWYgKCFkaXJlY3RpdmUuYXJndW1lbnRzIHx8XG4gICAgICAgICAgICAgICAgIWRpcmVjdGl2ZS5hcmd1bWVudHMuc29tZShmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBhcmcubmFtZS52YWx1ZSA9PT0gJ2tleSc7IH0pKSB7XG4gICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKCdSZW1vdmluZyBhbiBAY29ubmVjdGlvbiBkaXJlY3RpdmUgZXZlbiB0aG91Z2ggaXQgZG9lcyBub3QgaGF2ZSBhIGtleS4gJyArXG4gICAgICAgICAgICAgICAgICAgICdZb3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBrZXkgcGFyYW1ldGVyIHRvIHNwZWNpZnkgYSBzdG9yZSBrZXkuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpbGxSZW1vdmU7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZW1vdmVDb25uZWN0aW9uRGlyZWN0aXZlRnJvbURvY3VtZW50KGRvYykge1xuICAgIHJldHVybiByZW1vdmVEaXJlY3RpdmVzRnJvbURvY3VtZW50KFtjb25uZWN0aW9uUmVtb3ZlQ29uZmlnXSwgY2hlY2tEb2N1bWVudChkb2MpKTtcbn1cbmZ1bmN0aW9uIGdldEFyZ3VtZW50TWF0Y2hlcihjb25maWcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gYXJndW1lbnRNYXRjaGVyKGFyZ3VtZW50KSB7XG4gICAgICAgIHJldHVybiBjb25maWcuc29tZShmdW5jdGlvbiAoYUNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3VtZW50LnZhbHVlICYmXG4gICAgICAgICAgICAgICAgYXJndW1lbnQudmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJyAmJlxuICAgICAgICAgICAgICAgIGFyZ3VtZW50LnZhbHVlLm5hbWUgJiZcbiAgICAgICAgICAgICAgICAoYUNvbmZpZy5uYW1lID09PSBhcmd1bWVudC52YWx1ZS5uYW1lLnZhbHVlIHx8XG4gICAgICAgICAgICAgICAgICAgIChhQ29uZmlnLnRlc3QgJiYgYUNvbmZpZy50ZXN0KGFyZ3VtZW50KSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVtb3ZlQXJndW1lbnRzRnJvbURvY3VtZW50KGNvbmZpZywgZG9jKSB7XG4gICAgdmFyIGFyZ01hdGNoZXIgPSBnZXRBcmd1bWVudE1hdGNoZXIoY29uZmlnKTtcbiAgICByZXR1cm4gbnVsbElmRG9jSXNFbXB0eShncmFwaHFsLnZpc2l0KGRvYywge1xuICAgICAgICBPcGVyYXRpb25EZWZpbml0aW9uOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG5vZGUpLCB7IHZhcmlhYmxlRGVmaW5pdGlvbnM6IG5vZGUudmFyaWFibGVEZWZpbml0aW9ucyA/IG5vZGUudmFyaWFibGVEZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHZhckRlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFjb25maWcuc29tZShmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBhcmcubmFtZSA9PT0gdmFyRGVmLnZhcmlhYmxlLm5hbWUudmFsdWU7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9KSA6IFtdIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRmllbGQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBzaG91bGRSZW1vdmVGaWVsZCA9IGNvbmZpZy5zb21lKGZ1bmN0aW9uIChhcmdDb25maWcpIHsgcmV0dXJuIGFyZ0NvbmZpZy5yZW1vdmU7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRSZW1vdmVGaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJnTWF0Y2hDb3VudF8xID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJnTWF0Y2hlcihhcmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ01hdGNoQ291bnRfMSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdNYXRjaENvdW50XzEgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgQXJndW1lbnQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChhcmdNYXRjaGVyKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSkpO1xufVxuZnVuY3Rpb24gcmVtb3ZlRnJhZ21lbnRTcHJlYWRGcm9tRG9jdW1lbnQoY29uZmlnLCBkb2MpIHtcbiAgICBmdW5jdGlvbiBlbnRlcihub2RlKSB7XG4gICAgICAgIGlmIChjb25maWcuc29tZShmdW5jdGlvbiAoZGVmKSB7IHJldHVybiBkZWYubmFtZSA9PT0gbm9kZS5uYW1lLnZhbHVlOyB9KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxJZkRvY0lzRW1wdHkoZ3JhcGhxbC52aXNpdChkb2MsIHtcbiAgICAgICAgRnJhZ21lbnRTcHJlYWQ6IHsgZW50ZXI6IGVudGVyIH0sXG4gICAgICAgIEZyYWdtZW50RGVmaW5pdGlvbjogeyBlbnRlcjogZW50ZXIgfSxcbiAgICB9KSk7XG59XG5mdW5jdGlvbiBnZXRBbGxGcmFnbWVudFNwcmVhZHNGcm9tU2VsZWN0aW9uU2V0KHNlbGVjdGlvblNldCkge1xuICAgIHZhciBhbGxGcmFnbWVudHMgPSBbXTtcbiAgICBzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKChpc0ZpZWxkKHNlbGVjdGlvbikgfHwgaXNJbmxpbmVGcmFnbWVudChzZWxlY3Rpb24pKSAmJlxuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgZ2V0QWxsRnJhZ21lbnRTcHJlYWRzRnJvbVNlbGVjdGlvblNldChzZWxlY3Rpb24uc2VsZWN0aW9uU2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnKSB7IHJldHVybiBhbGxGcmFnbWVudHMucHVzaChmcmFnKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0aW9uLmtpbmQgPT09ICdGcmFnbWVudFNwcmVhZCcpIHtcbiAgICAgICAgICAgIGFsbEZyYWdtZW50cy5wdXNoKHNlbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYWxsRnJhZ21lbnRzO1xufVxuZnVuY3Rpb24gYnVpbGRRdWVyeUZyb21TZWxlY3Rpb25TZXQoZG9jdW1lbnQpIHtcbiAgICB2YXIgZGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKGRvY3VtZW50KTtcbiAgICB2YXIgZGVmaW5pdGlvbk9wZXJhdGlvbiA9IGRlZmluaXRpb24ub3BlcmF0aW9uO1xuICAgIGlmIChkZWZpbml0aW9uT3BlcmF0aW9uID09PSAncXVlcnknKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9XG4gICAgdmFyIG1vZGlmaWVkRG9jID0gZ3JhcGhxbC52aXNpdChkb2N1bWVudCwge1xuICAgICAgICBPcGVyYXRpb25EZWZpbml0aW9uOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG5vZGUpLCB7IG9wZXJhdGlvbjogJ3F1ZXJ5JyB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIG1vZGlmaWVkRG9jO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2xpZW50U2V0c0Zyb21Eb2N1bWVudChkb2N1bWVudCkge1xuICAgIGNoZWNrRG9jdW1lbnQoZG9jdW1lbnQpO1xuICAgIHZhciBtb2RpZmllZERvYyA9IHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQoW1xuICAgICAgICB7XG4gICAgICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoZGlyZWN0aXZlKSB7IHJldHVybiBkaXJlY3RpdmUubmFtZS52YWx1ZSA9PT0gJ2NsaWVudCc7IH0sXG4gICAgICAgICAgICByZW1vdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSwgZG9jdW1lbnQpO1xuICAgIGlmIChtb2RpZmllZERvYykge1xuICAgICAgICBtb2RpZmllZERvYyA9IGdyYXBocWwudmlzaXQobW9kaWZpZWREb2MsIHtcbiAgICAgICAgICAgIEZyYWdtZW50RGVmaW5pdGlvbjoge1xuICAgICAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1R5cGVuYW1lT25seSA9IG5vZGUuc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZXZlcnkoZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc0ZpZWxkKHNlbGVjdGlvbikgJiYgc2VsZWN0aW9uLm5hbWUudmFsdWUgPT09ICdfX3R5cGVuYW1lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVHlwZW5hbWVPbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtb2RpZmllZERvYztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIG1lcmdlRGVlcCgpIHtcbiAgICB2YXIgc291cmNlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHNvdXJjZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlRGVlcEFycmF5KHNvdXJjZXMpO1xufVxuZnVuY3Rpb24gbWVyZ2VEZWVwQXJyYXkoc291cmNlcykge1xuICAgIHZhciB0YXJnZXQgPSBzb3VyY2VzWzBdIHx8IHt9O1xuICAgIHZhciBjb3VudCA9IHNvdXJjZXMubGVuZ3RoO1xuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgICAgdmFyIG1lcmdlciA9IG5ldyBEZWVwTWVyZ2VyKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbWVyZ2VyLm1lcmdlKHRhcmdldCwgc291cmNlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbnZhciBkZWZhdWx0UmVjb25jaWxlciA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpcy5tZXJnZSh0YXJnZXRbcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbn07XG52YXIgRGVlcE1lcmdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVlcE1lcmdlcihyZWNvbmNpbGVyKSB7XG4gICAgICAgIGlmIChyZWNvbmNpbGVyID09PSB2b2lkIDApIHsgcmVjb25jaWxlciA9IGRlZmF1bHRSZWNvbmNpbGVyOyB9XG4gICAgICAgIHRoaXMucmVjb25jaWxlciA9IHJlY29uY2lsZXI7XG4gICAgICAgIHRoaXMuaXNPYmplY3QgPSBpc05vbk51bGxPYmplY3Q7XG4gICAgICAgIHRoaXMucGFzdENvcGllcyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgRGVlcE1lcmdlci5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNvbnRleHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTm9uTnVsbE9iamVjdChzb3VyY2UpICYmIGlzTm9uTnVsbE9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZUtleSkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgc291cmNlS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VmFsdWUgPSB0YXJnZXRbc291cmNlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZVtzb3VyY2VLZXldICE9PSB0YXJnZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF90aGlzLnJlY29uY2lsZXIuYXBwbHkoX3RoaXMsIHRzbGliLl9fc3ByZWFkQXJyYXkoW3RhcmdldCwgc291cmNlLCBzb3VyY2VLZXldLCBjb250ZXh0LCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdGFyZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBfdGhpcy5zaGFsbG93Q29weUZvck1lcmdlKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZUtleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IF90aGlzLnNoYWxsb3dDb3B5Rm9yTWVyZ2UodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZUtleV0gPSBzb3VyY2Vbc291cmNlS2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9O1xuICAgIERlZXBNZXJnZXIucHJvdG90eXBlLnNoYWxsb3dDb3B5Rm9yTWVyZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3RDb3BpZXMuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghT2JqZWN0LmlzRnJvemVuKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMucGFzdENvcGllcy5kZWxldGUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdHNsaWIuX19hc3NpZ24oeyBfX3Byb3RvX186IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSkgfSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYXN0Q29waWVzLmFkZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIERlZXBNZXJnZXI7XG59KCkpO1xuXG5mdW5jdGlvbiBjb25jYXRQYWdpbmF0aW9uKGtleUFyZ3MpIHtcbiAgICBpZiAoa2V5QXJncyA9PT0gdm9pZCAwKSB7IGtleUFyZ3MgPSBmYWxzZTsgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGtleUFyZ3M6IGtleUFyZ3MsXG4gICAgICAgIG1lcmdlOiBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmcgPyB0c2xpYi5fX3NwcmVhZEFycmF5KHRzbGliLl9fc3ByZWFkQXJyYXkoW10sIGV4aXN0aW5nLCB0cnVlKSwgaW5jb21pbmcsIHRydWUpIDogaW5jb21pbmc7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9mZnNldExpbWl0UGFnaW5hdGlvbihrZXlBcmdzKSB7XG4gICAgaWYgKGtleUFyZ3MgPT09IHZvaWQgMCkgeyBrZXlBcmdzID0gZmFsc2U7IH1cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXlBcmdzOiBrZXlBcmdzLFxuICAgICAgICBtZXJnZTogZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZywgX2EpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gX2EuYXJncztcbiAgICAgICAgICAgIHZhciBtZXJnZWQgPSBleGlzdGluZyA/IGV4aXN0aW5nLnNsaWNlKDApIDogW107XG4gICAgICAgICAgICBpZiAoYXJncykge1xuICAgICAgICAgICAgICAgIHZhciBfYiA9IGFyZ3Mub2Zmc2V0LCBvZmZzZXQgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5jb21pbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VkW29mZnNldCArIGldID0gaW5jb21pbmdbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkLnB1c2guYXBwbHkobWVyZ2VkLCBpbmNvbWluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9LFxuICAgIH07XG59XG5mdW5jdGlvbiByZWxheVN0eWxlUGFnaW5hdGlvbihrZXlBcmdzKSB7XG4gICAgaWYgKGtleUFyZ3MgPT09IHZvaWQgMCkgeyBrZXlBcmdzID0gZmFsc2U7IH1cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXlBcmdzOiBrZXlBcmdzLFxuICAgICAgICByZWFkOiBmdW5jdGlvbiAoZXhpc3RpbmcsIF9hKSB7XG4gICAgICAgICAgICB2YXIgY2FuUmVhZCA9IF9hLmNhblJlYWQsIHJlYWRGaWVsZCA9IF9hLnJlYWRGaWVsZDtcbiAgICAgICAgICAgIGlmICghZXhpc3RpbmcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgICAgICAgICAgdmFyIGVkZ2VzID0gW107XG4gICAgICAgICAgICB2YXIgZmlyc3RFZGdlQ3Vyc29yID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBsYXN0RWRnZUN1cnNvciA9IFwiXCI7XG4gICAgICAgICAgICBleGlzdGluZy5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uIChlZGdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhblJlYWQocmVhZEZpZWxkKFwibm9kZVwiLCBlZGdlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVkZ2UuY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEVkZ2VDdXJzb3IgPSBmaXJzdEVkZ2VDdXJzb3IgfHwgZWRnZS5jdXJzb3IgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFZGdlQ3Vyc29yID0gZWRnZS5jdXJzb3IgfHwgbGFzdEVkZ2VDdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBfYiA9IGV4aXN0aW5nLnBhZ2VJbmZvIHx8IHt9LCBzdGFydEN1cnNvciA9IF9iLnN0YXJ0Q3Vyc29yLCBlbmRDdXJzb3IgPSBfYi5lbmRDdXJzb3I7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGdldEV4dHJhcyhleGlzdGluZykpLCB7IGVkZ2VzOiBlZGdlcywgcGFnZUluZm86IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBleGlzdGluZy5wYWdlSW5mbyksIHsgc3RhcnRDdXJzb3I6IHN0YXJ0Q3Vyc29yIHx8IGZpcnN0RWRnZUN1cnNvciwgZW5kQ3Vyc29yOiBlbmRDdXJzb3IgfHwgbGFzdEVkZ2VDdXJzb3IgfSkgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlOiBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nLCBfYSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBfYS5hcmdzLCBpc1JlZmVyZW5jZSA9IF9hLmlzUmVmZXJlbmNlLCByZWFkRmllbGQgPSBfYS5yZWFkRmllbGQ7XG4gICAgICAgICAgICBpZiAoIWV4aXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmcgPSBtYWtlRW1wdHlEYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWluY29taW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluY29taW5nRWRnZXMgPSBpbmNvbWluZy5lZGdlcyA/IGluY29taW5nLmVkZ2VzLm1hcChmdW5jdGlvbiAoZWRnZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc1JlZmVyZW5jZShlZGdlID0gdHNsaWIuX19hc3NpZ24oe30sIGVkZ2UpKSkge1xuICAgICAgICAgICAgICAgICAgICBlZGdlLmN1cnNvciA9IHJlYWRGaWVsZChcImN1cnNvclwiLCBlZGdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgICAgICAgICB9KSA6IFtdO1xuICAgICAgICAgICAgaWYgKGluY29taW5nLnBhZ2VJbmZvKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhZ2VJbmZvXzEgPSBpbmNvbWluZy5wYWdlSW5mbztcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRDdXJzb3IgPSBwYWdlSW5mb18xLnN0YXJ0Q3Vyc29yLCBlbmRDdXJzb3IgPSBwYWdlSW5mb18xLmVuZEN1cnNvcjtcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RFZGdlID0gaW5jb21pbmdFZGdlc1swXTtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdEVkZ2UgPSBpbmNvbWluZ0VkZ2VzW2luY29taW5nRWRnZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0RWRnZSAmJiBzdGFydEN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdEVkZ2UuY3Vyc29yID0gc3RhcnRDdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsYXN0RWRnZSAmJiBlbmRDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEVkZ2UuY3Vyc29yID0gZW5kQ3Vyc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RDdXJzb3IgPSBmaXJzdEVkZ2UgJiYgZmlyc3RFZGdlLmN1cnNvcjtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RDdXJzb3IgJiYgIXN0YXJ0Q3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY29taW5nID0gbWVyZ2VEZWVwKGluY29taW5nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0Q3Vyc29yOiBmaXJzdEN1cnNvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbGFzdEN1cnNvciA9IGxhc3RFZGdlICYmIGxhc3RFZGdlLmN1cnNvcjtcbiAgICAgICAgICAgICAgICBpZiAobGFzdEN1cnNvciAmJiAhZW5kQ3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY29taW5nID0gbWVyZ2VEZWVwKGluY29taW5nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEN1cnNvcjogbGFzdEN1cnNvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBleGlzdGluZy5lZGdlcztcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBbXTtcbiAgICAgICAgICAgIGlmIChhcmdzICYmIGFyZ3MuYWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBwcmVmaXguZmluZEluZGV4KGZ1bmN0aW9uIChlZGdlKSB7IHJldHVybiBlZGdlLmN1cnNvciA9PT0gYXJncy5hZnRlcjsgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4ID0gcHJlZml4LnNsaWNlKDAsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJncyAmJiBhcmdzLmJlZm9yZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHByZWZpeC5maW5kSW5kZXgoZnVuY3Rpb24gKGVkZ2UpIHsgcmV0dXJuIGVkZ2UuY3Vyc29yID09PSBhcmdzLmJlZm9yZTsgfSk7XG4gICAgICAgICAgICAgICAgc3VmZml4ID0gaW5kZXggPCAwID8gcHJlZml4IDogcHJlZml4LnNsaWNlKGluZGV4KTtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluY29taW5nLmVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZWRnZXMgPSB0c2xpYi5fX3NwcmVhZEFycmF5KHRzbGliLl9fc3ByZWFkQXJyYXkodHNsaWIuX19zcHJlYWRBcnJheShbXSwgcHJlZml4LCB0cnVlKSwgaW5jb21pbmdFZGdlcywgdHJ1ZSksIHN1ZmZpeCwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgcGFnZUluZm8gPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgaW5jb21pbmcucGFnZUluZm8pLCBleGlzdGluZy5wYWdlSW5mbyk7XG4gICAgICAgICAgICBpZiAoaW5jb21pbmcucGFnZUluZm8pIHtcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBpbmNvbWluZy5wYWdlSW5mbywgaGFzUHJldmlvdXNQYWdlID0gX2IuaGFzUHJldmlvdXNQYWdlLCBoYXNOZXh0UGFnZSA9IF9iLmhhc05leHRQYWdlLCBzdGFydEN1cnNvciA9IF9iLnN0YXJ0Q3Vyc29yLCBlbmRDdXJzb3IgPSBfYi5lbmRDdXJzb3IsIGV4dHJhcyA9IHRzbGliLl9fcmVzdChfYiwgW1wiaGFzUHJldmlvdXNQYWdlXCIsIFwiaGFzTmV4dFBhZ2VcIiwgXCJzdGFydEN1cnNvclwiLCBcImVuZEN1cnNvclwiXSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihwYWdlSW5mbywgZXh0cmFzKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByZWZpeC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaGFzUHJldmlvdXNQYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUluZm8uaGFzUHJldmlvdXNQYWdlID0gaGFzUHJldmlvdXNQYWdlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBzdGFydEN1cnNvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvLnN0YXJ0Q3Vyc29yID0gc3RhcnRDdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc3VmZml4Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBoYXNOZXh0UGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvLmhhc05leHRQYWdlID0gaGFzTmV4dFBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGVuZEN1cnNvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvLmVuZEN1cnNvciA9IGVuZEN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGdldEV4dHJhcyhleGlzdGluZykpLCBnZXRFeHRyYXMoaW5jb21pbmcpKSwgeyBlZGdlczogZWRnZXMsIHBhZ2VJbmZvOiBwYWdlSW5mbyB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxudmFyIGdldEV4dHJhcyA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHRzbGliLl9fcmVzdChvYmosIG5vdEV4dHJhcyk7IH07XG52YXIgbm90RXh0cmFzID0gW1wiZWRnZXNcIiwgXCJwYWdlSW5mb1wiXTtcbmZ1bmN0aW9uIG1ha2VFbXB0eURhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWRnZXM6IFtdLFxuICAgICAgICBwYWdlSW5mbzoge1xuICAgICAgICAgICAgaGFzUHJldmlvdXNQYWdlOiBmYWxzZSxcbiAgICAgICAgICAgIGhhc05leHRQYWdlOiB0cnVlLFxuICAgICAgICAgICAgc3RhcnRDdXJzb3I6IFwiXCIsXG4gICAgICAgICAgICBlbmRDdXJzb3I6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICAgIHJldHVybiBjbG9uZURlZXBIZWxwZXIodmFsdWUpO1xufVxuZnVuY3Rpb24gY2xvbmVEZWVwSGVscGVyKHZhbCwgc2Vlbikge1xuICAgIHN3aXRjaCAodG9TdHJpbmcuY2FsbCh2YWwpKSB7XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IEFycmF5XVwiOiB7XG4gICAgICAgICAgICBzZWVuID0gc2VlbiB8fCBuZXcgTWFwO1xuICAgICAgICAgICAgaWYgKHNlZW4uaGFzKHZhbCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlZW4uZ2V0KHZhbCk7XG4gICAgICAgICAgICB2YXIgY29weV8xID0gdmFsLnNsaWNlKDApO1xuICAgICAgICAgICAgc2Vlbi5zZXQodmFsLCBjb3B5XzEpO1xuICAgICAgICAgICAgY29weV8xLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICAgICAgICAgICAgY29weV8xW2ldID0gY2xvbmVEZWVwSGVscGVyKGNoaWxkLCBzZWVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvcHlfMTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiW29iamVjdCBPYmplY3RdXCI6IHtcbiAgICAgICAgICAgIHNlZW4gPSBzZWVuIHx8IG5ldyBNYXA7XG4gICAgICAgICAgICBpZiAoc2Vlbi5oYXModmFsKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5nZXQodmFsKTtcbiAgICAgICAgICAgIHZhciBjb3B5XzIgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpKTtcbiAgICAgICAgICAgIHNlZW4uc2V0KHZhbCwgY29weV8yKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY29weV8yW2tleV0gPSBjbG9uZURlZXBIZWxwZXIodmFsW2tleV0sIHNlZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY29weV8yO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVlcEZyZWV6ZSh2YWx1ZSkge1xuICAgIHZhciB3b3JrU2V0ID0gbmV3IFNldChbdmFsdWVdKTtcbiAgICB3b3JrU2V0LmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KG9iaikgJiYgc2hhbGxvd0ZyZWV6ZShvYmopID09PSBvYmopIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc05vbk51bGxPYmplY3Qob2JqW25hbWVdKSlcbiAgICAgICAgICAgICAgICAgICAgd29ya1NldC5hZGQob2JqW25hbWVdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gc2hhbGxvd0ZyZWV6ZShvYmopIHtcbiAgICBpZiAoX19ERVZfXyAmJiAhT2JqZWN0LmlzRnJvemVuKG9iaikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIE9iamVjdC5mcmVlemUob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBUeXBlRXJyb3IpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBtYXliZURlZXBGcmVlemUob2JqKSB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgZGVlcEZyZWV6ZShvYmopO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBpdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5KG9ic2VydmVycywgbWV0aG9kLCBhcmd1bWVudCkge1xuICAgIHZhciBvYnNlcnZlcnNXaXRoTWV0aG9kID0gW107XG4gICAgb2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9icykgeyByZXR1cm4gb2JzW21ldGhvZF0gJiYgb2JzZXJ2ZXJzV2l0aE1ldGhvZC5wdXNoKG9icyk7IH0pO1xuICAgIG9ic2VydmVyc1dpdGhNZXRob2QuZm9yRWFjaChmdW5jdGlvbiAob2JzKSB7IHJldHVybiBvYnNbbWV0aG9kXShhcmd1bWVudCk7IH0pO1xufVxuXG5mdW5jdGlvbiBhc3luY01hcChvYnNlcnZhYmxlLCBtYXBGbiwgY2F0Y2hGbikge1xuICAgIHJldHVybiBuZXcgemVuT2JzZXJ2YWJsZVRzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBuZXh0ID0gb2JzZXJ2ZXIubmV4dCwgZXJyb3IgPSBvYnNlcnZlci5lcnJvciwgY29tcGxldGUgPSBvYnNlcnZlci5jb21wbGV0ZTtcbiAgICAgICAgdmFyIGFjdGl2ZUNhbGxiYWNrQ291bnQgPSAwO1xuICAgICAgICB2YXIgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBwcm9taXNlUXVldWUgPSB7XG4gICAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUoY2FsbGJhY2soKSk7IH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gbWFrZUNhbGxiYWNrKGV4YW1pbmVyLCBkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgaWYgKGV4YW1pbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgKythY3RpdmVDYWxsYmFja0NvdW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm90aCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGV4YW1pbmVyKGFyZyk7IH07XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VRdWV1ZSA9IHByb21pc2VRdWV1ZS50aGVuKGJvdGgsIGJvdGgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1hY3RpdmVDYWxsYmFja0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCAmJiBuZXh0LmNhbGwob2JzZXJ2ZXIsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tYWN0aXZlQ2FsbGJhY2tDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoY2F1Z2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciAmJiBlcnJvci5jYWxsKG9ic2VydmVyLCBjYXVnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGRlbGVnYXRlICYmIGRlbGVnYXRlLmNhbGwob2JzZXJ2ZXIsIGFyZyk7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhbmRsZXIgPSB7XG4gICAgICAgICAgICBuZXh0OiBtYWtlQ2FsbGJhY2sobWFwRm4sIG5leHQpLFxuICAgICAgICAgICAgZXJyb3I6IG1ha2VDYWxsYmFjayhjYXRjaEZuLCBlcnJvciksXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVDYWxsYmFja0NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlICYmIGNvbXBsZXRlLmNhbGwob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHZhciBzdWIgPSBvYnNlcnZhYmxlLnN1YnNjcmliZShoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1Yi51bnN1YnNjcmliZSgpOyB9O1xuICAgIH0pO1xufVxuXG52YXIgY2FuVXNlV2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmICEodHlwZW9mIG5hdmlnYXRvciA9PT0gJ29iamVjdCcgJiZcbiAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyk7XG52YXIgY2FuVXNlV2Vha1NldCA9IHR5cGVvZiBXZWFrU2V0ID09PSAnZnVuY3Rpb24nO1xudmFyIGNhblVzZVN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgU3ltYm9sLmZvciA9PT0gJ2Z1bmN0aW9uJztcblxuZnVuY3Rpb24gZml4T2JzZXJ2YWJsZVN1YmNsYXNzKHN1YmNsYXNzKSB7XG4gICAgZnVuY3Rpb24gc2V0KGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViY2xhc3MsIGtleSwgeyB2YWx1ZTogemVuT2JzZXJ2YWJsZVRzLk9ic2VydmFibGUgfSk7XG4gICAgfVxuICAgIGlmIChjYW5Vc2VTeW1ib2wgJiYgU3ltYm9sLnNwZWNpZXMpIHtcbiAgICAgICAgc2V0KFN5bWJvbC5zcGVjaWVzKTtcbiAgICB9XG4gICAgc2V0KFwiQEBzcGVjaWVzXCIpO1xuICAgIHJldHVybiBzdWJjbGFzcztcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlTGlrZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xufVxudmFyIENvbmNhc3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhDb25jYXN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbmNhc3Qoc291cmNlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIF90aGlzLmFkZE9ic2VydmVyKG9ic2VydmVyKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yZW1vdmVPYnNlcnZlcihvYnNlcnZlcik7IH07XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgX3RoaXMuYWRkQ291bnQgPSAwO1xuICAgICAgICBfdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgX3RoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBfdGhpcy5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy5oYW5kbGVycyA9IHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc3ViICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxhdGVzdCA9IFtcIm5leHRcIiwgcmVzdWx0XTtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZU9ic2VydmVyc1NhZmVseShfdGhpcy5vYnNlcnZlcnMsIFwibmV4dFwiLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YiA9IF90aGlzLnN1YjtcbiAgICAgICAgICAgICAgICBpZiAoc3ViICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1Yi51bnN1YnNjcmliZSgpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3ViID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGF0ZXN0ID0gW1wiZXJyb3JcIiwgZXJyb3JdO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5KF90aGlzLm9ic2VydmVycywgXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBfdGhpcy5zb3VyY2VzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN1YiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMubGF0ZXN0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGF0ZXN0WzBdID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmUoX3RoaXMubGF0ZXN0WzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkoX3RoaXMub2JzZXJ2ZXJzLCBcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzUHJvbWlzZUxpa2UodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS50aGVuKGZ1bmN0aW9uIChvYnMpIHsgcmV0dXJuIF90aGlzLnN1YiA9IG9icy5zdWJzY3JpYmUoX3RoaXMuaGFuZGxlcnMpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN1YiA9IHZhbHVlLnN1YnNjcmliZShfdGhpcy5oYW5kbGVycyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5jYW5jZWwgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICBfdGhpcy5yZWplY3QocmVhc29uKTtcbiAgICAgICAgICAgIF90aGlzLnNvdXJjZXMgPSBbXTtcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZXJzLmNvbXBsZXRlKCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnByb21pc2UuY2F0Y2goZnVuY3Rpb24gKF8pIHsgfSk7XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBzb3VyY2VzID0gW25ldyB6ZW5PYnNlcnZhYmxlVHMuT2JzZXJ2YWJsZShzb3VyY2VzKV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJvbWlzZUxpa2Uoc291cmNlcykpIHtcbiAgICAgICAgICAgIHNvdXJjZXMudGhlbihmdW5jdGlvbiAoaXRlcmFibGUpIHsgcmV0dXJuIF90aGlzLnN0YXJ0KGl0ZXJhYmxlKTsgfSwgX3RoaXMuaGFuZGxlcnMuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuc3RhcnQoc291cmNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb25jYXN0LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChzb3VyY2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YiAhPT0gdm9pZCAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnNvdXJjZXMgPSBBcnJheS5mcm9tKHNvdXJjZXMpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICBDb25jYXN0LnByb3RvdHlwZS5kZWxpdmVyTGFzdE1lc3NhZ2UgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubGF0ZXN0KSB7XG4gICAgICAgICAgICB2YXIgbmV4dE9yRXJyb3IgPSB0aGlzLmxhdGVzdFswXTtcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBvYnNlcnZlcltuZXh0T3JFcnJvcl07XG4gICAgICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLmNhbGwob2JzZXJ2ZXIsIHRoaXMubGF0ZXN0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN1YiA9PT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIG5leHRPckVycm9yID09PSBcIm5leHRcIiAmJlxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29uY2FzdC5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9ic2VydmVycy5oYXMob2JzZXJ2ZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGl2ZXJMYXN0TWVzc2FnZShvYnNlcnZlcik7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgKyt0aGlzLmFkZENvdW50O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25jYXN0LnByb3RvdHlwZS5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlciwgcXVpZXRseSkge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMuZGVsZXRlKG9ic2VydmVyKSAmJlxuICAgICAgICAgICAgLS10aGlzLmFkZENvdW50IDwgMSAmJlxuICAgICAgICAgICAgIXF1aWV0bHkpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMuZXJyb3IobmV3IEVycm9yKFwiT2JzZXJ2YWJsZSBjYW5jZWxsZWQgcHJlbWF0dXJlbHlcIikpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25jYXN0LnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIG9uY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMub2JzZXJ2ZXJzLmRlbGV0ZShvYnNlcnZlcik7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9ic2VydmVyID0ge1xuICAgICAgICAgICAgbmV4dDogb25jZSxcbiAgICAgICAgICAgIGVycm9yOiBvbmNlLFxuICAgICAgICAgICAgY29tcGxldGU6IG9uY2UsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBjb3VudCA9IHRoaXMuYWRkQ291bnQ7XG4gICAgICAgIHRoaXMuYWRkT2JzZXJ2ZXIob2JzZXJ2ZXIpO1xuICAgICAgICB0aGlzLmFkZENvdW50ID0gY291bnQ7XG4gICAgfTtcbiAgICByZXR1cm4gQ29uY2FzdDtcbn0oemVuT2JzZXJ2YWJsZVRzLk9ic2VydmFibGUpKTtcbmZpeE9ic2VydmFibGVTdWJjbGFzcyhDb25jYXN0KTtcblxuZnVuY3Rpb24gaXNOb25FbXB0eUFycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDA7XG59XG5cbmZ1bmN0aW9uIGdyYXBoUUxSZXN1bHRIYXNFcnJvcihyZXN1bHQpIHtcbiAgICByZXR1cm4gKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5sZW5ndGggPiAwKSB8fCBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY29tcGFjdCgpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIG9iamVjdHNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgb2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgaWYgKCFvYmopXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIHByZWZpeENvdW50cyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIG1ha2VVbmlxdWVJZChwcmVmaXgpIHtcbiAgICB2YXIgY291bnQgPSBwcmVmaXhDb3VudHMuZ2V0KHByZWZpeCkgfHwgMTtcbiAgICBwcmVmaXhDb3VudHMuc2V0KHByZWZpeCwgY291bnQgKyAxKTtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQocHJlZml4LCBcIjpcIikuY29uY2F0KGNvdW50LCBcIjpcIikuY29uY2F0KE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5Rm9yRGlzcGxheSh2YWx1ZSkge1xuICAgIHZhciB1bmRlZklkID0gbWFrZVVuaXF1ZUlkKFwic3RyaW5naWZ5Rm9yRGlzcGxheVwiKTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdm9pZCAwID8gdW5kZWZJZCA6IHZhbHVlO1xuICAgIH0pLnNwbGl0KEpTT04uc3RyaW5naWZ5KHVuZGVmSWQpKS5qb2luKFwiPHVuZGVmaW5lZD5cIik7XG59XG5cbmV4cG9ydHMuREVWID0gZ2xvYmFscy5ERVY7XG5leHBvcnRzLm1heWJlID0gZ2xvYmFscy5tYXliZTtcbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IHplbk9ic2VydmFibGVUcy5PYnNlcnZhYmxlO1xuZXhwb3J0cy5Db25jYXN0ID0gQ29uY2FzdDtcbmV4cG9ydHMuRGVlcE1lcmdlciA9IERlZXBNZXJnZXI7XG5leHBvcnRzLmFkZFR5cGVuYW1lVG9Eb2N1bWVudCA9IGFkZFR5cGVuYW1lVG9Eb2N1bWVudDtcbmV4cG9ydHMuYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkID0gYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkO1xuZXhwb3J0cy5hc3luY01hcCA9IGFzeW5jTWFwO1xuZXhwb3J0cy5idWlsZFF1ZXJ5RnJvbVNlbGVjdGlvblNldCA9IGJ1aWxkUXVlcnlGcm9tU2VsZWN0aW9uU2V0O1xuZXhwb3J0cy5jYW5Vc2VTeW1ib2wgPSBjYW5Vc2VTeW1ib2w7XG5leHBvcnRzLmNhblVzZVdlYWtNYXAgPSBjYW5Vc2VXZWFrTWFwO1xuZXhwb3J0cy5jYW5Vc2VXZWFrU2V0ID0gY2FuVXNlV2Vha1NldDtcbmV4cG9ydHMuY2hlY2tEb2N1bWVudCA9IGNoZWNrRG9jdW1lbnQ7XG5leHBvcnRzLmNsb25lRGVlcCA9IGNsb25lRGVlcDtcbmV4cG9ydHMuY29tcGFjdCA9IGNvbXBhY3Q7XG5leHBvcnRzLmNvbmNhdFBhZ2luYXRpb24gPSBjb25jYXRQYWdpbmF0aW9uO1xuZXhwb3J0cy5jcmVhdGVGcmFnbWVudE1hcCA9IGNyZWF0ZUZyYWdtZW50TWFwO1xuZXhwb3J0cy5maXhPYnNlcnZhYmxlU3ViY2xhc3MgPSBmaXhPYnNlcnZhYmxlU3ViY2xhc3M7XG5leHBvcnRzLmdldERlZmF1bHRWYWx1ZXMgPSBnZXREZWZhdWx0VmFsdWVzO1xuZXhwb3J0cy5nZXREaXJlY3RpdmVOYW1lcyA9IGdldERpcmVjdGl2ZU5hbWVzO1xuZXhwb3J0cy5nZXRGcmFnbWVudERlZmluaXRpb24gPSBnZXRGcmFnbWVudERlZmluaXRpb247XG5leHBvcnRzLmdldEZyYWdtZW50RGVmaW5pdGlvbnMgPSBnZXRGcmFnbWVudERlZmluaXRpb25zO1xuZXhwb3J0cy5nZXRGcmFnbWVudEZyb21TZWxlY3Rpb24gPSBnZXRGcmFnbWVudEZyb21TZWxlY3Rpb247XG5leHBvcnRzLmdldEZyYWdtZW50UXVlcnlEb2N1bWVudCA9IGdldEZyYWdtZW50UXVlcnlEb2N1bWVudDtcbmV4cG9ydHMuZ2V0SW5jbHVzaW9uRGlyZWN0aXZlcyA9IGdldEluY2x1c2lvbkRpcmVjdGl2ZXM7XG5leHBvcnRzLmdldE1haW5EZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb247XG5leHBvcnRzLmdldE9wZXJhdGlvbkRlZmluaXRpb24gPSBnZXRPcGVyYXRpb25EZWZpbml0aW9uO1xuZXhwb3J0cy5nZXRPcGVyYXRpb25OYW1lID0gZ2V0T3BlcmF0aW9uTmFtZTtcbmV4cG9ydHMuZ2V0UXVlcnlEZWZpbml0aW9uID0gZ2V0UXVlcnlEZWZpbml0aW9uO1xuZXhwb3J0cy5nZXRTdG9yZUtleU5hbWUgPSBnZXRTdG9yZUtleU5hbWU7XG5leHBvcnRzLmdldFR5cGVuYW1lRnJvbVJlc3VsdCA9IGdldFR5cGVuYW1lRnJvbVJlc3VsdDtcbmV4cG9ydHMuZ3JhcGhRTFJlc3VsdEhhc0Vycm9yID0gZ3JhcGhRTFJlc3VsdEhhc0Vycm9yO1xuZXhwb3J0cy5oYXNDbGllbnRFeHBvcnRzID0gaGFzQ2xpZW50RXhwb3J0cztcbmV4cG9ydHMuaGFzRGlyZWN0aXZlcyA9IGhhc0RpcmVjdGl2ZXM7XG5leHBvcnRzLmlzRG9jdW1lbnROb2RlID0gaXNEb2N1bWVudE5vZGU7XG5leHBvcnRzLmlzRmllbGQgPSBpc0ZpZWxkO1xuZXhwb3J0cy5pc0lubGluZUZyYWdtZW50ID0gaXNJbmxpbmVGcmFnbWVudDtcbmV4cG9ydHMuaXNOb25FbXB0eUFycmF5ID0gaXNOb25FbXB0eUFycmF5O1xuZXhwb3J0cy5pc05vbk51bGxPYmplY3QgPSBpc05vbk51bGxPYmplY3Q7XG5leHBvcnRzLmlzUmVmZXJlbmNlID0gaXNSZWZlcmVuY2U7XG5leHBvcnRzLml0ZXJhdGVPYnNlcnZlcnNTYWZlbHkgPSBpdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5O1xuZXhwb3J0cy5tYWtlUmVmZXJlbmNlID0gbWFrZVJlZmVyZW5jZTtcbmV4cG9ydHMubWFrZVVuaXF1ZUlkID0gbWFrZVVuaXF1ZUlkO1xuZXhwb3J0cy5tYXliZURlZXBGcmVlemUgPSBtYXliZURlZXBGcmVlemU7XG5leHBvcnRzLm1lcmdlRGVlcCA9IG1lcmdlRGVlcDtcbmV4cG9ydHMubWVyZ2VEZWVwQXJyYXkgPSBtZXJnZURlZXBBcnJheTtcbmV4cG9ydHMub2Zmc2V0TGltaXRQYWdpbmF0aW9uID0gb2Zmc2V0TGltaXRQYWdpbmF0aW9uO1xuZXhwb3J0cy5yZWxheVN0eWxlUGFnaW5hdGlvbiA9IHJlbGF5U3R5bGVQYWdpbmF0aW9uO1xuZXhwb3J0cy5yZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQgPSByZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQ7XG5leHBvcnRzLnJlbW92ZUNsaWVudFNldHNGcm9tRG9jdW1lbnQgPSByZW1vdmVDbGllbnRTZXRzRnJvbURvY3VtZW50O1xuZXhwb3J0cy5yZW1vdmVDb25uZWN0aW9uRGlyZWN0aXZlRnJvbURvY3VtZW50ID0gcmVtb3ZlQ29ubmVjdGlvbkRpcmVjdGl2ZUZyb21Eb2N1bWVudDtcbmV4cG9ydHMucmVtb3ZlRGlyZWN0aXZlc0Zyb21Eb2N1bWVudCA9IHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQ7XG5leHBvcnRzLnJlbW92ZUZyYWdtZW50U3ByZWFkRnJvbURvY3VtZW50ID0gcmVtb3ZlRnJhZ21lbnRTcHJlYWRGcm9tRG9jdW1lbnQ7XG5leHBvcnRzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQgPSByZXN1bHRLZXlOYW1lRnJvbUZpZWxkO1xuZXhwb3J0cy5zaG91bGRJbmNsdWRlID0gc2hvdWxkSW5jbHVkZTtcbmV4cG9ydHMuc3RvcmVLZXlOYW1lRnJvbUZpZWxkID0gc3RvcmVLZXlOYW1lRnJvbUZpZWxkO1xuZXhwb3J0cy5zdHJpbmdpZnlGb3JEaXNwbGF5ID0gc3RyaW5naWZ5Rm9yRGlzcGxheTtcbmV4cG9ydHMudmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uID0gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbGl0aWVzLmNqcy5tYXBcbiIsImV4cG9ydHMuT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ6ZW4tb2JzZXJ2YWJsZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzUGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFByb2R1Y3RzIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3cnkvY29udGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd3J5L2VxdWFsaXR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3cnkvdHJpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9wdGltaXNtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzeW1ib2wtb2JzZXJ2YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0c2xpYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6ZW4tb2JzZXJ2YWJsZS9pbmRleC5qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9