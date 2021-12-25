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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signin.js");
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

/***/ "./components/RequestReset.js":
/*!************************************!*\
  !*** ./components/RequestReset.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestReset; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "C:\\Users\\agust\\OneDrive\\Escritorio\\Web Bos Courses\\Advanced-React-master\\sick-fits\\frontend\\components\\RequestReset.js";






const REQUEST_RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;
function RequestReset() {
  const {
    inputs,
    handleChange,
    resetForm
  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_4__["default"])({
    email: ''
  });
  const [signup, {
    data,
    loading,
    error
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(REQUEST_RESET_MUTATION, {
    variables: inputs // refetch the currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],

  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting

    const res = await signup().catch(console.error);
    console.log(res);
    console.log({
      data,
      loading,
      error
    });
    resetForm(); // Send the email and password to the graphqlAPI
  } // const error =
  //   data?.authenticateUserWithPassword.__typename ===
  //   'UserAuthenticationWithPasswordFailure'
  //     ? data?.authenticateUserWithPassword
  //     : undefined;


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Request a Password Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.sendUserPasswordResetLink) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Success! Check your email for a link"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "Your email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: "Request Reset!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "C:\\Users\\agust\\OneDrive\\Escritorio\\Web Bos Courses\\Advanced-React-master\\sick-fits\\frontend\\components\\SignIn.js";






const SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;
function SignIn() {
  const {
    inputs,
    handleChange,
    resetForm
  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_4__["default"])({
    email: '',
    password: ''
  });
  const [signin, {
    data,
    loading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(SIGNIN_MUTATION, {
    variables: inputs,
    // refetch the currently logged in user
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_5__["CURRENT_USER_QUERY"]
    }]
  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting

    const res = await signin();
    console.log(res);
    resetForm(); // Send the email and password to the graphqlAPI
  }

  const error = (data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword.__typename) === 'UserAuthenticationWithPasswordFailure' ? data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword : undefined;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Sign into your Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "Your email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "password",
        children: ["Password", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          name: "password",
          placeholder: "Password",
          autoComplete: "password",
          value: inputs.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: "Sign in!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SignUp.js":
/*!******************************!*\
  !*** ./components/SignUp.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "C:\\Users\\agust\\OneDrive\\Escritorio\\Web Bos Courses\\Advanced-React-master\\sick-fits\\frontend\\components\\SignUp.js";






const SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      name
      email
    }
  }
`;
function SignUp() {
  const {
    inputs,
    handleChange,
    resetForm
  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_4__["default"])({
    email: '',
    name: '',
    password: ''
  });
  const [signup, {
    data,
    loading,
    error
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(SIGNUP_MUTATION, {
    variables: inputs // refetch the currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],

  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting

    const res = await signup().catch(console.error);
    console.log(res);
    console.log({
      data,
      loading,
      error
    });
    resetForm(); // Send the email and password to the graphqlAPI
  } // const error =
  //   data?.authenticateUserWithPassword.__typename ===
  //   'UserAuthenticationWithPasswordFailure'
  //     ? data?.authenticateUserWithPassword
  //     : undefined;


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Sign Up for an Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.createUser) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Signed up with ", data.createUser.email, " - Please Go Ahead and Sign in!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Your Name",
          autoComplete: "name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "Your email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "password",
        children: ["Password", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          name: "password",
          placeholder: "Password",
          autoComplete: "password",
          value: inputs.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: "Sign in!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: useUser, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUser", function() { return useUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        # TODO: Query the cart
      }
    }
  }
`;
function useUser() {
  const {
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"])(CURRENT_USER_QUERY);
  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
}


/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function useForm(initial = {}) {
  // create a state object for our inputs
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initial);
  const initialValues = Object.values(initial).join('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {// This function runs when the things we are watching change
  }, [initialValues]);

  function handleChange(e) {
    let {
      value,
      name,
      type
    } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      [name]: value
    }));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
    setInputs(blankState);
  } // return the things we want to surface from this custom hook


  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
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

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignInPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RequestReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RequestReset */ "./components/RequestReset.js");
/* harmony import */ var _components_SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SignIn */ "./components/SignIn.js");
/* harmony import */ var _components_SignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SignUp */ "./components/SignUp.js");

var _jsxFileName = "C:\\Users\\agust\\OneDrive\\Escritorio\\Web Bos Courses\\Advanced-React-master\\sick-fits\\frontend\\pages\\signin.js";




const GridStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;
function SignInPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GridStyles, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SignIn__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SignUp__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RequestReset__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXF1ZXN0UmVzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWduVXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGVzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3VzZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2NhY2hlL2NhY2hlLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvY29yZS9jb3JlLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvZXJyb3JzL2Vycm9ycy5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvY29yZS9jb3JlLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay9odHRwL2h0dHAuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9saW5rL3V0aWxzL3V0aWxzLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbWFpbi5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L25vZGVfbW9kdWxlcy90cy1pbnZhcmlhbnQvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbm9kZV9tb2R1bGVzL3RzLWludmFyaWFudC9wcm9jZXNzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3JlYWN0L2NvbnRleHQvY29udGV4dC5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3JlYWN0L2hvb2tzL2hvb2tzLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvcGFyc2VyL3BhcnNlci5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3JlYWN0L3JlYWN0LmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzL2dsb2JhbHMvZ2xvYmFscy5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3V0aWxpdGllcy91dGlsaXRpZXMuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96ZW4tb2JzZXJ2YWJsZS10cy9pbmRleC5janMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2lnbmluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3cnkvY29udGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3cnkvZXF1YWxpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd3J5L3RyaWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvcHRpbWlzbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3ltYm9sLW9ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0c2xpYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInplbi1vYnNlcnZhYmxlL2luZGV4LmpzXCIiXSwibmFtZXMiOlsiRXJyb3JTdHlsZXMiLCJzdHlsZWQiLCJkaXYiLCJEaXNwbGF5RXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiLCJuZXR3b3JrRXJyb3IiLCJyZXN1bHQiLCJlcnJvcnMiLCJsZW5ndGgiLCJtYXAiLCJpIiwicmVwbGFjZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIlJFUVVFU1RfUkVTRVRfTVVUQVRJT04iLCJncWwiLCJSZXF1ZXN0UmVzZXQiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJ1c2VGb3JtIiwiZW1haWwiLCJzaWdudXAiLCJkYXRhIiwibG9hZGluZyIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwic2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayIsIlNJR05JTl9NVVRBVElPTiIsIlNpZ25JbiIsInBhc3N3b3JkIiwic2lnbmluIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsImF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQiLCJfX3R5cGVuYW1lIiwidW5kZWZpbmVkIiwiU0lHTlVQX01VVEFUSU9OIiwiU2lnblVwIiwibmFtZSIsImNyZWF0ZVVzZXIiLCJ1c2VVc2VyIiwidXNlUXVlcnkiLCJhdXRoZW50aWNhdGVkSXRlbSIsImtleWZyYW1lcyIsIkZvcm0iLCJmb3JtIiwiaW5pdGlhbCIsInNldElucHV0cyIsInVzZVN0YXRlIiwiaW5pdGlhbFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImpvaW4iLCJ1c2VFZmZlY3QiLCJ2YWx1ZSIsInR5cGUiLCJ0YXJnZXQiLCJwYXJzZUludCIsImZpbGVzIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsImtleSIsIkdyaWRTdHlsZXMiLCJTaWduSW5QYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUVBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNLQUFqQjs7QUFlQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZTtBQUNsQyxNQUFJLENBQUNBLEtBQUQsSUFBVSxDQUFDQSxLQUFLLENBQUNDLE9BQXJCLEVBQThCLE9BQU8sSUFBUDs7QUFDOUIsTUFBSUQsS0FBSyxDQUFDRSxZQUFOLElBQXNCRixLQUFLLENBQUNFLFlBQU4sQ0FBbUJD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpRUFBaUUsRUFBRTtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0JBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRiw4RkFBOEY7QUFDL0s7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQkFBZ0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0QsQzs7Ozs7Ozs7Ozs7QUNuQkQseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoicGFnZXMvc2lnbmluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zaWduaW4uanNcIik7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEVycm9yU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIH1cbiAgc3Ryb25nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbmA7XG5cbmNvbnN0IERpc3BsYXlFcnJvciA9ICh7IGVycm9yIH0pID0+IHtcbiAgaWYgKCFlcnJvciB8fCAhZXJyb3IubWVzc2FnZSkgcmV0dXJuIG51bGw7XG4gIGlmIChlcnJvci5uZXR3b3JrRXJyb3IgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdCAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnMubWFwKChlcnJvciwgaSkgPT4gKFxuICAgICAgPEVycm9yU3R5bGVzIGtleT17aX0+XG4gICAgICAgIDxwIGRhdGEtdGVzdD1cImdyYXBocWwtZXJyb3JcIj5cbiAgICAgICAgICA8c3Ryb25nPlNob290ITwvc3Ryb25nPlxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlLnJlcGxhY2UoJ0dyYXBoUUwgZXJyb3I6ICcsICcnKX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9FcnJvclN0eWxlcz5cbiAgICApKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxFcnJvclN0eWxlcz5cbiAgICAgIDxwIGRhdGEtdGVzdD1cImdyYXBocWwtZXJyb3JcIj5cbiAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cbiAgICAgICAge2Vycm9yLm1lc3NhZ2UucmVwbGFjZSgnR3JhcGhRTCBlcnJvcjogJywgJycpfVxuICAgICAgPC9wPlxuICAgIDwvRXJyb3JTdHlsZXM+XG4gICk7XG59O1xuXG5EaXNwbGF5RXJyb3IuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvcjoge30sXG59O1xuXG5EaXNwbGF5RXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlFcnJvcjtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcblxyXG5jb25zdCBSRVFVRVNUX1JFU0VUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJFUVVFU1RfUkVTRVRfTVVUQVRJT04oJGVtYWlsOiBTdHJpbmchKSB7XHJcbiAgICBzZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rKGVtYWlsOiAkZW1haWwpIHtcclxuICAgICAgY29kZVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVxdWVzdFJlc2V0KCkge1xyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICBlbWFpbDogJycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtzaWdudXAsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihcclxuICAgIFJFUVVFU1RfUkVTRVRfTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlczogaW5wdXRzLFxyXG4gICAgICAvLyByZWZldGNoIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcclxuICAgICAgLy8gcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXHJcbiAgICB9XHJcbiAgKTtcclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZ1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbnVwKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgY29uc29sZS5sb2coeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgLy8gU2VuZCB0aGUgZW1haWwgYW5kIHBhc3N3b3JkIHRvIHRoZSBncmFwaHFsQVBJXHJcbiAgfVxyXG4gIC8vIGNvbnN0IGVycm9yID1cclxuICAvLyAgIGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQuX190eXBlbmFtZSA9PT1cclxuICAvLyAgICdVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlJ1xyXG4gIC8vICAgICA/IGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmRcclxuICAvLyAgICAgOiB1bmRlZmluZWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxoMj5SZXF1ZXN0IGEgUGFzc3dvcmQgUmVzZXQ8L2gyPlxyXG4gICAgICA8RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxyXG4gICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAge2RhdGE/LnNlbmRVc2VyUGFzc3dvcmRSZXNldExpbmsgPT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgPHA+U3VjY2VzcyEgQ2hlY2sgeW91ciBlbWFpbCBmb3IgYSBsaW5rPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgRW1haWxcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5SZXF1ZXN0IFJlc2V0ITwvYnV0dG9uPlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuXHJcbmNvbnN0IFNJR05JTl9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBTSUdOSU5fTVVUQVRJT04oJGVtYWlsOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcclxuICAgIGF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQoZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xyXG4gICAgICAuLi4gb24gVXNlckF1dGhlbnRpY2F0aW9uV2l0aFBhc3N3b3JkU3VjY2VzcyB7XHJcbiAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgZW1haWxcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLi4uIG9uIFVzZXJBdXRoZW50aWNhdGlvbldpdGhQYXNzd29yZEZhaWx1cmUge1xyXG4gICAgICAgIGNvZGVcclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3NpZ25pbiwgeyBkYXRhLCBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oU0lHTklOX01VVEFUSU9OLCB7XHJcbiAgICB2YXJpYWJsZXM6IGlucHV0cyxcclxuICAgIC8vIHJlZmV0Y2ggdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxyXG4gICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXHJcbiAgfSk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcCB0aGUgZm9ybSBmcm9tIHN1Ym1pdHRpbmdcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNpZ25pbigpO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgLy8gU2VuZCB0aGUgZW1haWwgYW5kIHBhc3N3b3JkIHRvIHRoZSBncmFwaHFsQVBJXHJcbiAgfVxyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQuX190eXBlbmFtZSA9PT1cclxuICAgICdVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlJ1xyXG4gICAgICA/IGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmRcclxuICAgICAgOiB1bmRlZmluZWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxoMj5TaWduIGludG8geW91ciBBY2NvdW50PC9oMj5cclxuICAgICAgPEVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cclxuICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gaW4hPC9idXR0b24+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5cclxuY29uc3QgU0lHTlVQX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFNJR05VUF9NVVRBVElPTihcclxuICAgICRlbWFpbDogU3RyaW5nIVxyXG4gICAgJG5hbWU6IFN0cmluZyFcclxuICAgICRwYXNzd29yZDogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgY3JlYXRlVXNlcihkYXRhOiB7IGVtYWlsOiAkZW1haWwsIG5hbWU6ICRuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBlbWFpbFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCgpIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtzaWdudXAsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihTSUdOVVBfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogaW5wdXRzLFxyXG4gICAgLy8gcmVmZXRjaCB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyXHJcbiAgICAvLyByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuICB9KTtcclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZ1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbnVwKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgY29uc29sZS5sb2coeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgLy8gU2VuZCB0aGUgZW1haWwgYW5kIHBhc3N3b3JkIHRvIHRoZSBncmFwaHFsQVBJXHJcbiAgfVxyXG4gIC8vIGNvbnN0IGVycm9yID1cclxuICAvLyAgIGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQuX190eXBlbmFtZSA9PT1cclxuICAvLyAgICdVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlJ1xyXG4gIC8vICAgICA/IGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmRcclxuICAvLyAgICAgOiB1bmRlZmluZWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxoMj5TaWduIFVwIGZvciBhbiBBY2NvdW50PC9oMj5cclxuICAgICAgPEVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgIHtkYXRhPy5jcmVhdGVVc2VyICYmIChcclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBTaWduZWQgdXAgd2l0aCB7ZGF0YS5jcmVhdGVVc2VyLmVtYWlsfSAtIFBsZWFzZSBHbyBBaGVhZCBhbmQgU2lnblxyXG4gICAgICAgICAgICBpbiFcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgRW1haWxcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBpbiE8L2J1dHRvbj5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5jb25zdCBDVVJSRU5UX1VTRVJfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgYXV0aGVudGljYXRlZEl0ZW0ge1xyXG4gICAgICAuLi4gb24gVXNlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICAjIFRPRE86IFF1ZXJ5IHRoZSBjYXJ0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlcigpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KENVUlJFTlRfVVNFUl9RVUVSWSk7XHJcbiAgcmV0dXJuIGRhdGE/LmF1dGhlbnRpY2F0ZWRJdGVtO1xyXG59XHJcblxyXG5leHBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGxvYWRpbmcgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICAvKiByb3RhdGU6IDA7ICovXG4gIH1cblxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xuICAgIC8qIHJvdGF0ZTogMzYwZGVnOyAqL1xuICB9XG5gO1xuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgaW5wdXQsXG4gIHRleHRhcmVhLFxuICBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yZWQpO1xuICAgIH1cbiAgfVxuICBidXR0b24sXG4gIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICB9XG4gIGZpZWxkc2V0IHtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICAjZmYzMDE5IDAlLFxuICAgICAgICAjZTJiMDRhIDUwJSxcbiAgICAgICAgI2ZmMzAxOSAxMDAlXG4gICAgICApO1xuICAgIH1cbiAgICAmW2FyaWEtYnVzeT0ndHJ1ZSddOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcbiAgICAgIGFuaW1hdGlvbjogJHtsb2FkaW5nfSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ybShpbml0aWFsID0ge30pIHtcclxuICAvLyBjcmVhdGUgYSBzdGF0ZSBvYmplY3QgZm9yIG91ciBpbnB1dHNcclxuICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW5pdGlhbCk7XHJcbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IE9iamVjdC52YWx1ZXMoaW5pdGlhbCkuam9pbignJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHJ1bnMgd2hlbiB0aGUgdGhpbmdzIHdlIGFyZSB3YXRjaGluZyBjaGFuZ2VcclxuICB9LCBbaW5pdGlhbFZhbHVlc10pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xyXG4gICAgICBbdmFsdWVdID0gZS50YXJnZXQuZmlsZXM7XHJcbiAgICB9XHJcbiAgICBzZXRJbnB1dHMoe1xyXG4gICAgICAvLyBjb3B5IHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgICAuLi5pbnB1dHMsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIHNldElucHV0cyhpbml0aWFsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcclxuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksICcnXSlcclxuICAgICk7XHJcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gdGhlIHRoaW5ncyB3ZSB3YW50IHRvIHN1cmZhY2UgZnJvbSB0aGlzIGN1c3RvbSBob29rXHJcbiAgcmV0dXJuIHtcclxuICAgIGlucHV0cyxcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIHJlc2V0Rm9ybSxcclxuICAgIGNsZWFyRm9ybSxcclxuICB9O1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciBvcHRpbWlzbSA9IHJlcXVpcmUoJ29wdGltaXNtJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzJyk7XG52YXIgZXF1YWxpdHkgPSByZXF1aXJlKCdAd3J5L2VxdWFsaXR5Jyk7XG52YXIgdHJpZSA9IHJlcXVpcmUoJ0B3cnkvdHJpZScpO1xudmFyIGNvbnRleHQgPSByZXF1aXJlKCdAd3J5L2NvbnRleHQnKTtcblxudmFyIEFwb2xsb0NhY2hlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcG9sbG9DYWNoZSgpIHtcbiAgICAgICAgdGhpcy5nZXRGcmFnbWVudERvYyA9IG9wdGltaXNtLndyYXAodXRpbGl0aWVzLmdldEZyYWdtZW50UXVlcnlEb2N1bWVudCk7XG4gICAgfVxuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS5iYXRjaCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBvcHRpbWlzdGljSWQgPSB0eXBlb2Ygb3B0aW9ucy5vcHRpbWlzdGljID09PSBcInN0cmluZ1wiID8gb3B0aW9ucy5vcHRpbWlzdGljIDpcbiAgICAgICAgICAgIG9wdGlvbnMub3B0aW1pc3RpYyA9PT0gZmFsc2UgPyBudWxsIDogdm9pZCAwO1xuICAgICAgICB2YXIgdXBkYXRlUmVzdWx0O1xuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7IHJldHVybiB1cGRhdGVSZXN1bHQgPSBvcHRpb25zLnVwZGF0ZShfdGhpcyk7IH0sIG9wdGltaXN0aWNJZCk7XG4gICAgICAgIHJldHVybiB1cGRhdGVSZXN1bHQ7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUucmVjb3JkT3B0aW1pc3RpY1RyYW5zYWN0aW9uID0gZnVuY3Rpb24gKHRyYW5zYWN0aW9uLCBvcHRpbWlzdGljSWQpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24sIG9wdGltaXN0aWNJZCk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUudHJhbnNmb3JtRG9jdW1lbnQgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUuZ2MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS5tb2RpZnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUudHJhbnNmb3JtRm9yTGluayA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUucmVhZFF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gISFvcHRpb25zLm9wdGltaXN0aWM7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZCh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgcm9vdElkOiBvcHRpb25zLmlkIHx8ICdST09UX1FVRVJZJywgb3B0aW1pc3RpYzogb3B0aW1pc3RpYyB9KSk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUucmVhZEZyYWdtZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gISFvcHRpb25zLm9wdGltaXN0aWM7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZCh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgcXVlcnk6IHRoaXMuZ2V0RnJhZ21lbnREb2Mob3B0aW9ucy5mcmFnbWVudCwgb3B0aW9ucy5mcmFnbWVudE5hbWUpLCByb290SWQ6IG9wdGlvbnMuaWQsIG9wdGltaXN0aWM6IG9wdGltaXN0aWMgfSkpO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLndyaXRlUXVlcnkgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGlkID0gX2EuaWQsIGRhdGEgPSBfYS5kYXRhLCBvcHRpb25zID0gdHNsaWIuX19yZXN0KF9hLCBbXCJpZFwiLCBcImRhdGFcIl0pO1xuICAgICAgICByZXR1cm4gdGhpcy53cml0ZShPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgICAgICAgIGRhdGFJZDogaWQgfHwgJ1JPT1RfUVVFUlknLFxuICAgICAgICAgICAgcmVzdWx0OiBkYXRhLFxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUud3JpdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgaWQgPSBfYS5pZCwgZGF0YSA9IF9hLmRhdGEsIGZyYWdtZW50ID0gX2EuZnJhZ21lbnQsIGZyYWdtZW50TmFtZSA9IF9hLmZyYWdtZW50TmFtZSwgb3B0aW9ucyA9IHRzbGliLl9fcmVzdChfYSwgW1wiaWRcIiwgXCJkYXRhXCIsIFwiZnJhZ21lbnRcIiwgXCJmcmFnbWVudE5hbWVcIl0pO1xuICAgICAgICByZXR1cm4gdGhpcy53cml0ZShPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLmdldEZyYWdtZW50RG9jKGZyYWdtZW50LCBmcmFnbWVudE5hbWUpLFxuICAgICAgICAgICAgZGF0YUlkOiBpZCxcbiAgICAgICAgICAgIHJlc3VsdDogZGF0YSxcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnVwZGF0ZVF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHVwZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXRjaCh7XG4gICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNhY2hlLnJlYWRRdWVyeShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHVwZGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09IHZvaWQgMCB8fCBkYXRhID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZGF0YTogZGF0YSB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS51cGRhdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zLCB1cGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmF0Y2goe1xuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjYWNoZS5yZWFkRnJhZ21lbnQob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB1cGRhdGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSB2b2lkIDAgfHwgZGF0YSA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlRnJhZ21lbnQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGRhdGE6IGRhdGEgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQXBvbGxvQ2FjaGU7XG59KCkpO1xuXG5leHBvcnRzLkNhY2hlID0gdm9pZCAwO1xuKGZ1bmN0aW9uIChDYWNoZSkge1xufSkoZXhwb3J0cy5DYWNoZSB8fCAoZXhwb3J0cy5DYWNoZSA9IHt9KSk7XG5cbnZhciBNaXNzaW5nRmllbGRFcnJvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWlzc2luZ0ZpZWxkRXJyb3IobWVzc2FnZSwgcGF0aCwgcXVlcnksIHZhcmlhYmxlcykge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIH1cbiAgICByZXR1cm4gTWlzc2luZ0ZpZWxkRXJyb3I7XG59KCkpO1xuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0KF9hLCBjb250ZXh0KSB7XG4gICAgdmFyIF9fdHlwZW5hbWUgPSBfYS5fX3R5cGVuYW1lLCBpZCA9IF9hLmlkLCBfaWQgPSBfYS5faWQ7XG4gICAgaWYgKHR5cGVvZiBfX3R5cGVuYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmtleU9iamVjdCA9XG4gICAgICAgICAgICAgICAgaWQgIT09IHZvaWQgMCA/IHsgaWQ6IGlkIH0gOlxuICAgICAgICAgICAgICAgICAgICBfaWQgIT09IHZvaWQgMCA/IHsgX2lkOiBfaWQgfSA6XG4gICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApXG4gICAgICAgICAgICBpZCA9IF9pZDtcbiAgICAgICAgaWYgKGlkICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfX3R5cGVuYW1lLCBcIjpcIikuY29uY2F0KCh0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIpID8gaWQgOiBKU09OLnN0cmluZ2lmeShpZCkpO1xuICAgICAgICB9XG4gICAgfVxufVxudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gICAgZGF0YUlkRnJvbU9iamVjdDogZGVmYXVsdERhdGFJZEZyb21PYmplY3QsXG4gICAgYWRkVHlwZW5hbWU6IHRydWUsXG4gICAgcmVzdWx0Q2FjaGluZzogdHJ1ZSxcbiAgICBjYW5vbml6ZVJlc3VsdHM6IGZhbHNlLFxufTtcbmZ1bmN0aW9uIG5vcm1hbGl6ZUNvbmZpZyhjb25maWcpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmNvbXBhY3QoZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbn1cbmZ1bmN0aW9uIHNob3VsZENhbm9uaXplUmVzdWx0cyhjb25maWcpIHtcbiAgICB2YXIgdmFsdWUgPSBjb25maWcuY2Fub25pemVSZXN1bHRzO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdm9pZCAwID8gZGVmYXVsdENvbmZpZy5jYW5vbml6ZVJlc3VsdHMgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldFR5cGVuYW1lRnJvbVN0b3JlT2JqZWN0KHN0b3JlLCBvYmplY3RPclJlZmVyZW5jZSkge1xuICAgIHJldHVybiB1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqZWN0T3JSZWZlcmVuY2UpXG4gICAgICAgID8gc3RvcmUuZ2V0KG9iamVjdE9yUmVmZXJlbmNlLl9fcmVmLCBcIl9fdHlwZW5hbWVcIilcbiAgICAgICAgOiBvYmplY3RPclJlZmVyZW5jZSAmJiBvYmplY3RPclJlZmVyZW5jZS5fX3R5cGVuYW1lO1xufVxudmFyIFR5cGVPckZpZWxkTmFtZVJlZ0V4cCA9IC9eW19hLXpdW18wLTlhLXpdKi9pO1xuZnVuY3Rpb24gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSkge1xuICAgIHZhciBtYXRjaCA9IHN0b3JlRmllbGROYW1lLm1hdGNoKFR5cGVPckZpZWxkTmFtZVJlZ0V4cCk7XG4gICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMF0gOiBzdG9yZUZpZWxkTmFtZTtcbn1cbmZ1bmN0aW9uIHNlbGVjdGlvblNldE1hdGNoZXNSZXN1bHQoc2VsZWN0aW9uU2V0LCByZXN1bHQsIHZhcmlhYmxlcykge1xuICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocmVzdWx0KVxuICAgICAgICAgICAgPyByZXN1bHQuZXZlcnkoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIHNlbGVjdGlvblNldE1hdGNoZXNSZXN1bHQoc2VsZWN0aW9uU2V0LCBpdGVtLCB2YXJpYWJsZXMpOyB9KVxuICAgICAgICAgICAgOiBzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5ldmVyeShmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzRmllbGQoZmllbGQpICYmIHV0aWxpdGllcy5zaG91bGRJbmNsdWRlKGZpZWxkLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSB1dGlsaXRpZXMucmVzdWx0S2V5TmFtZUZyb21GaWVsZChmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYXNPd24uY2FsbChyZXN1bHQsIGtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICghZmllbGQuc2VsZWN0aW9uU2V0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0TWF0Y2hlc1Jlc3VsdChmaWVsZC5zZWxlY3Rpb25TZXQsIHJlc3VsdFtrZXldLCB2YXJpYWJsZXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkgJiZcbiAgICAgICAgIXV0aWxpdGllcy5pc1JlZmVyZW5jZSh2YWx1ZSkgJiZcbiAgICAgICAgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xufVxuZnVuY3Rpb24gbWFrZVByb2Nlc3NlZEZpZWxkc01lcmdlcigpIHtcbiAgICByZXR1cm4gbmV3IHV0aWxpdGllcy5EZWVwTWVyZ2VyO1xufVxuXG52YXIgREVMRVRFID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbnZhciBkZWxNb2RpZmllciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIERFTEVURTsgfTtcbnZhciBJTlZBTElEQVRFID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmV4cG9ydHMuRW50aXR5U3RvcmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVudGl0eVN0b3JlKHBvbGljaWVzLCBncm91cCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnBvbGljaWVzID0gcG9saWNpZXM7XG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcbiAgICAgICAgdGhpcy5kYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5yb290SWRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5yZWZzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5nZXRGaWVsZFZhbHVlID0gZnVuY3Rpb24gKG9iamVjdE9yUmVmZXJlbmNlLCBzdG9yZUZpZWxkTmFtZSkgeyByZXR1cm4gdXRpbGl0aWVzLm1heWJlRGVlcEZyZWV6ZSh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqZWN0T3JSZWZlcmVuY2UpXG4gICAgICAgICAgICA/IF90aGlzLmdldChvYmplY3RPclJlZmVyZW5jZS5fX3JlZiwgc3RvcmVGaWVsZE5hbWUpXG4gICAgICAgICAgICA6IG9iamVjdE9yUmVmZXJlbmNlICYmIG9iamVjdE9yUmVmZXJlbmNlW3N0b3JlRmllbGROYW1lXSk7IH07XG4gICAgICAgIHRoaXMuY2FuUmVhZCA9IGZ1bmN0aW9uIChvYmpPclJlZikge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmpPclJlZilcbiAgICAgICAgICAgICAgICA/IF90aGlzLmhhcyhvYmpPclJlZi5fX3JlZilcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiBvYmpPclJlZiA9PT0gXCJvYmplY3RcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50b1JlZmVyZW5jZSA9IGZ1bmN0aW9uIChvYmpPcklkT3JSZWYsIG1lcmdlSW50b1N0b3JlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iak9ySWRPclJlZiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZShvYmpPcklkT3JSZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmpPcklkT3JSZWYpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iak9ySWRPclJlZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpZCA9IF90aGlzLnBvbGljaWVzLmlkZW50aWZ5KG9iak9ySWRPclJlZilbMF07XG4gICAgICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmID0gdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2UoaWQpO1xuICAgICAgICAgICAgICAgIGlmIChtZXJnZUludG9TdG9yZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tZXJnZShpZCwgb2JqT3JJZE9yUmVmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24oe30sIHRoaXMuZGF0YSk7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb29rdXAoZGF0YUlkLCB0cnVlKSAhPT0gdm9pZCAwO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChkYXRhSWQsIGZpZWxkTmFtZSkge1xuICAgICAgICB0aGlzLmdyb3VwLmRlcGVuZChkYXRhSWQsIGZpZWxkTmFtZSk7XG4gICAgICAgIGlmIChoYXNPd24uY2FsbCh0aGlzLmRhdGEsIGRhdGFJZCkpIHtcbiAgICAgICAgICAgIHZhciBzdG9yZU9iamVjdCA9IHRoaXMuZGF0YVtkYXRhSWRdO1xuICAgICAgICAgICAgaWYgKHN0b3JlT2JqZWN0ICYmIGhhc093bi5jYWxsKHN0b3JlT2JqZWN0LCBmaWVsZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlT2JqZWN0W2ZpZWxkTmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gXCJfX3R5cGVuYW1lXCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWQsIGRhdGFJZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkW2RhdGFJZF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBMYXllcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmdldChkYXRhSWQsIGZpZWxkTmFtZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5sb29rdXAgPSBmdW5jdGlvbiAoZGF0YUlkLCBkZXBlbmRPbkV4aXN0ZW5jZSkge1xuICAgICAgICBpZiAoZGVwZW5kT25FeGlzdGVuY2UpXG4gICAgICAgICAgICB0aGlzLmdyb3VwLmRlcGVuZChkYXRhSWQsIFwiX19leGlzdHNcIik7XG4gICAgICAgIGlmIChoYXNPd24uY2FsbCh0aGlzLmRhdGEsIGRhdGFJZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbZGF0YUlkXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIExheWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQubG9va3VwKGRhdGFJZCwgZGVwZW5kT25FeGlzdGVuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkW2RhdGFJZF0pIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAob2xkZXIsIG5ld2VyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhSWQ7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2xkZXIpKVxuICAgICAgICAgICAgb2xkZXIgPSBvbGRlci5fX3JlZjtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShuZXdlcikpXG4gICAgICAgICAgICBuZXdlciA9IG5ld2VyLl9fcmVmO1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSB0eXBlb2Ygb2xkZXIgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gdGhpcy5sb29rdXAoZGF0YUlkID0gb2xkZXIpXG4gICAgICAgICAgICA6IG9sZGVyO1xuICAgICAgICB2YXIgaW5jb21pbmcgPSB0eXBlb2YgbmV3ZXIgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gdGhpcy5sb29rdXAoZGF0YUlkID0gbmV3ZXIpXG4gICAgICAgICAgICA6IG5ld2VyO1xuICAgICAgICBpZiAoIWluY29taW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQodHlwZW9mIGRhdGFJZCA9PT0gXCJzdHJpbmdcIiwgXCJzdG9yZS5tZXJnZSBleHBlY3RzIGEgc3RyaW5nIElEXCIpIDogZ2xvYmFscy5pbnZhcmlhbnQodHlwZW9mIGRhdGFJZCA9PT0gXCJzdHJpbmdcIiwgMSk7XG4gICAgICAgIHZhciBtZXJnZWQgPSBuZXcgdXRpbGl0aWVzLkRlZXBNZXJnZXIoc3RvcmVPYmplY3RSZWNvbmNpbGVyKS5tZXJnZShleGlzdGluZywgaW5jb21pbmcpO1xuICAgICAgICB0aGlzLmRhdGFbZGF0YUlkXSA9IG1lcmdlZDtcbiAgICAgICAgaWYgKG1lcmdlZCAhPT0gZXhpc3RpbmcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlZnNbZGF0YUlkXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwLmNhY2hpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGRzVG9EaXJ0eV8xID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgICAgICBpZiAoIWV4aXN0aW5nKVxuICAgICAgICAgICAgICAgICAgICBmaWVsZHNUb0RpcnR5XzEuX19leGlzdHMgPSAxO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGluY29taW5nKS5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4aXN0aW5nIHx8IGV4aXN0aW5nW3N0b3JlRmllbGROYW1lXSAhPT0gbWVyZ2VkW3N0b3JlRmllbGROYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzVG9EaXJ0eV8xW3N0b3JlRmllbGROYW1lXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGROYW1lICE9PSBzdG9yZUZpZWxkTmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdGhpcy5wb2xpY2llcy5oYXNLZXlBcmdzKG1lcmdlZC5fX3R5cGVuYW1lLCBmaWVsZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzVG9EaXJ0eV8xW2ZpZWxkTmFtZV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lcmdlZFtzdG9yZUZpZWxkTmFtZV0gPT09IHZvaWQgMCAmJiAhKF90aGlzIGluc3RhbmNlb2YgTGF5ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lcmdlZFtzdG9yZUZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRzVG9EaXJ0eV8xLl9fdHlwZW5hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgIShleGlzdGluZyAmJiBleGlzdGluZy5fX3R5cGVuYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkW2RhdGFJZF0gPT09IG1lcmdlZC5fX3R5cGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmaWVsZHNUb0RpcnR5XzEuX190eXBlbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzVG9EaXJ0eV8xKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZE5hbWUpIHsgcmV0dXJuIF90aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgZmllbGROYW1lKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5tb2RpZnkgPSBmdW5jdGlvbiAoZGF0YUlkLCBmaWVsZHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0b3JlT2JqZWN0ID0gdGhpcy5sb29rdXAoZGF0YUlkKTtcbiAgICAgICAgaWYgKHN0b3JlT2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlZEZpZWxkc18xID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHZhciBuZWVkVG9NZXJnZV8xID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgYWxsRGVsZXRlZF8xID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBzaGFyZWREZXRhaWxzXzEgPSB7XG4gICAgICAgICAgICAgICAgREVMRVRFOiBERUxFVEUsXG4gICAgICAgICAgICAgICAgSU5WQUxJREFURTogSU5WQUxJREFURSxcbiAgICAgICAgICAgICAgICBpc1JlZmVyZW5jZTogdXRpbGl0aWVzLmlzUmVmZXJlbmNlLFxuICAgICAgICAgICAgICAgIHRvUmVmZXJlbmNlOiB0aGlzLnRvUmVmZXJlbmNlLFxuICAgICAgICAgICAgICAgIGNhblJlYWQ6IHRoaXMuY2FuUmVhZCxcbiAgICAgICAgICAgICAgICByZWFkRmllbGQ6IGZ1bmN0aW9uIChmaWVsZE5hbWVPck9wdGlvbnMsIGZyb20pIHsgcmV0dXJuIF90aGlzLnBvbGljaWVzLnJlYWRGaWVsZCh0eXBlb2YgZmllbGROYW1lT3JPcHRpb25zID09PSBcInN0cmluZ1wiID8ge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZU9yT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogZnJvbSB8fCB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZShkYXRhSWQpLFxuICAgICAgICAgICAgICAgIH0gOiBmaWVsZE5hbWVPck9wdGlvbnMsIHsgc3RvcmU6IF90aGlzIH0pOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JlT2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGRWYWx1ZSA9IHN0b3JlT2JqZWN0W3N0b3JlRmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZSA9PT0gdm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdmFyIG1vZGlmeSA9IHR5cGVvZiBmaWVsZHMgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICA/IGZpZWxkc1xuICAgICAgICAgICAgICAgICAgICA6IGZpZWxkc1tzdG9yZUZpZWxkTmFtZV0gfHwgZmllbGRzW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmeSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBtb2RpZnkgPT09IGRlbE1vZGlmaWVyID8gREVMRVRFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeSh1dGlsaXRpZXMubWF5YmVEZWVwRnJlZXplKGZpZWxkVmFsdWUpLCB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgc2hhcmVkRGV0YWlsc18xKSwgeyBmaWVsZE5hbWU6IGZpZWxkTmFtZSwgc3RvcmVGaWVsZE5hbWU6IHN0b3JlRmllbGROYW1lLCBzdG9yYWdlOiBfdGhpcy5nZXRTdG9yYWdlKGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBJTlZBTElEQVRFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ncm91cC5kaXJ0eShkYXRhSWQsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gREVMRVRFKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBmaWVsZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZEZpZWxkc18xW3N0b3JlRmllbGROYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRUb01lcmdlXzEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbERlbGV0ZWRfMSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG5lZWRUb01lcmdlXzEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lcmdlKGRhdGFJZCwgY2hhbmdlZEZpZWxkc18xKTtcbiAgICAgICAgICAgICAgICBpZiAoYWxsRGVsZXRlZF8xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVtkYXRhSWRdID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGF0YVtkYXRhSWRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuZGlydHkoZGF0YUlkLCBcIl9fZXhpc3RzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGRhdGFJZCwgZmllbGROYW1lLCBhcmdzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIHN0b3JlT2JqZWN0ID0gdGhpcy5sb29rdXAoZGF0YUlkKTtcbiAgICAgICAgaWYgKHN0b3JlT2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgdHlwZW5hbWUgPSB0aGlzLmdldEZpZWxkVmFsdWUoc3RvcmVPYmplY3QsIFwiX190eXBlbmFtZVwiKTtcbiAgICAgICAgICAgIHZhciBzdG9yZUZpZWxkTmFtZSA9IGZpZWxkTmFtZSAmJiBhcmdzXG4gICAgICAgICAgICAgICAgPyB0aGlzLnBvbGljaWVzLmdldFN0b3JlRmllbGROYW1lKHsgdHlwZW5hbWU6IHR5cGVuYW1lLCBmaWVsZE5hbWU6IGZpZWxkTmFtZSwgYXJnczogYXJncyB9KVxuICAgICAgICAgICAgICAgIDogZmllbGROYW1lO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kaWZ5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUgPyAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVtzdG9yZUZpZWxkTmFtZV0gPSBkZWxNb2RpZmllcixcbiAgICAgICAgICAgICAgICBfYSkgOiBkZWxNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmV2aWN0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGxpbWl0KSB7XG4gICAgICAgIHZhciBldmljdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwodGhpcy5kYXRhLCBvcHRpb25zLmlkKSkge1xuICAgICAgICAgICAgICAgIGV2aWN0ZWQgPSB0aGlzLmRlbGV0ZShvcHRpb25zLmlkLCBvcHRpb25zLmZpZWxkTmFtZSwgb3B0aW9ucy5hcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTGF5ZXIgJiYgdGhpcyAhPT0gbGltaXQpIHtcbiAgICAgICAgICAgICAgICBldmljdGVkID0gdGhpcy5wYXJlbnQuZXZpY3Qob3B0aW9ucywgbGltaXQpIHx8IGV2aWN0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5maWVsZE5hbWUgfHwgZXZpY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuZGlydHkob3B0aW9ucy5pZCwgb3B0aW9ucy5maWVsZE5hbWUgfHwgXCJfX2V4aXN0c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZpY3RlZDtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlKG51bGwpO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICAgIHZhciBleHRyYVJvb3RJZHMgPSBbXTtcbiAgICAgICAgdGhpcy5nZXRSb290SWRTZXQoKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgaWYgKCFoYXNPd24uY2FsbChfdGhpcy5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZCwgaWQpKSB7XG4gICAgICAgICAgICAgICAgZXh0cmFSb290SWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGV4dHJhUm9vdElkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG9iai5fX01FVEEgPSB7IGV4dHJhUm9vdElkczogZXh0cmFSb290SWRzLnNvcnQoKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChuZXdEYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgICAgICBpZiAoIShuZXdEYXRhICYmIGhhc093bi5jYWxsKG5ld0RhdGEsIGRhdGFJZCkpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGVsZXRlKGRhdGFJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmV3RGF0YSkge1xuICAgICAgICAgICAgdmFyIF9fTUVUQSA9IG5ld0RhdGEuX19NRVRBLCByZXN0XzEgPSB0c2xpYi5fX3Jlc3QobmV3RGF0YSwgW1wiX19NRVRBXCJdKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlc3RfMSkuZm9yRWFjaChmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubWVyZ2UoZGF0YUlkLCByZXN0XzFbZGF0YUlkXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChfX01FVEEpIHtcbiAgICAgICAgICAgICAgICBfX01FVEEuZXh0cmFSb290SWRzLmZvckVhY2godGhpcy5yZXRhaW4sIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUucmV0YWluID0gZnVuY3Rpb24gKHJvb3RJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290SWRzW3Jvb3RJZF0gPSAodGhpcy5yb290SWRzW3Jvb3RJZF0gfHwgMCkgKyAxO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbiAocm9vdElkKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb3RJZHNbcm9vdElkXSA+IDApIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IC0tdGhpcy5yb290SWRzW3Jvb3RJZF07XG4gICAgICAgICAgICBpZiAoIWNvdW50KVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvb3RJZHNbcm9vdElkXTtcbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5nZXRSb290SWRTZXQgPSBmdW5jdGlvbiAoaWRzKSB7XG4gICAgICAgIGlmIChpZHMgPT09IHZvaWQgMCkgeyBpZHMgPSBuZXcgU2V0KCk7IH1cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5yb290SWRzKS5mb3JFYWNoKGlkcy5hZGQsIGlkcyk7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmdldFJvb3RJZFNldChpZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZCkuZm9yRWFjaChpZHMuYWRkLCBpZHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHM7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZ2MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpZHMgPSB0aGlzLmdldFJvb3RJZFNldCgpO1xuICAgICAgICB2YXIgc25hcHNob3QgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICAgIGlkcy5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKHNuYXBzaG90LCBpZCkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhfdGhpcy5maW5kQ2hpbGRSZWZJZHMoaWQpKS5mb3JFYWNoKGlkcy5hZGQsIGlkcyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNuYXBzaG90W2lkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBpZHNUb1JlbW92ZSA9IE9iamVjdC5rZXlzKHNuYXBzaG90KTtcbiAgICAgICAgaWYgKGlkc1RvUmVtb3ZlLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHJvb3RfMSA9IHRoaXM7XG4gICAgICAgICAgICB3aGlsZSAocm9vdF8xIGluc3RhbmNlb2YgTGF5ZXIpXG4gICAgICAgICAgICAgICAgcm9vdF8xID0gcm9vdF8xLnBhcmVudDtcbiAgICAgICAgICAgIGlkc1RvUmVtb3ZlLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7IHJldHVybiByb290XzEuZGVsZXRlKGlkKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkc1RvUmVtb3ZlO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmZpbmRDaGlsZFJlZklkcyA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgaWYgKCFoYXNPd24uY2FsbCh0aGlzLnJlZnMsIGRhdGFJZCkpIHtcbiAgICAgICAgICAgIHZhciBmb3VuZF8xID0gdGhpcy5yZWZzW2RhdGFJZF0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgdmFyIHJvb3QgPSB0aGlzLmRhdGFbZGF0YUlkXTtcbiAgICAgICAgICAgIGlmICghcm9vdClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfMTtcbiAgICAgICAgICAgIHZhciB3b3JrU2V0XzEgPSBuZXcgU2V0KFtyb290XSk7XG4gICAgICAgICAgICB3b3JrU2V0XzEuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmopKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kXzFbb2JqLl9fcmVmXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya1NldF8xLmFkZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnNbZGF0YUlkXTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5tYWtlQ2FjaGVLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwLmtleU1ha2VyLmxvb2t1cEFycmF5KGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICByZXR1cm4gRW50aXR5U3RvcmU7XG59KCkpO1xudmFyIENhY2hlR3JvdXAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhY2hlR3JvdXAoY2FjaGluZywgcGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHZvaWQgMCkgeyBwYXJlbnQgPSBudWxsOyB9XG4gICAgICAgIHRoaXMuY2FjaGluZyA9IGNhY2hpbmc7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlc2V0Q2FjaGluZygpO1xuICAgIH1cbiAgICBDYWNoZUdyb3VwLnByb3RvdHlwZS5yZXNldENhY2hpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZCA9IHRoaXMuY2FjaGluZyA/IG9wdGltaXNtLmRlcCgpIDogbnVsbDtcbiAgICAgICAgdGhpcy5rZXlNYWtlciA9IG5ldyB0cmllLlRyaWUodXRpbGl0aWVzLmNhblVzZVdlYWtNYXApO1xuICAgIH07XG4gICAgQ2FjaGVHcm91cC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZCkge1xuICAgICAgICAgICAgdGhpcy5kKG1ha2VEZXBLZXkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSkpO1xuICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgaWYgKGZpZWxkTmFtZSAhPT0gc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmQobWFrZURlcEtleShkYXRhSWQsIGZpZWxkTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGVwZW5kKGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBDYWNoZUdyb3VwLnByb3RvdHlwZS5kaXJ0eSA9IGZ1bmN0aW9uIChkYXRhSWQsIHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmQpIHtcbiAgICAgICAgICAgIHRoaXMuZC5kaXJ0eShtYWtlRGVwS2V5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpLCBzdG9yZUZpZWxkTmFtZSA9PT0gXCJfX2V4aXN0c1wiID8gXCJmb3JnZXRcIiA6IFwic2V0RGlydHlcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDYWNoZUdyb3VwO1xufSgpKTtcbmZ1bmN0aW9uIG1ha2VEZXBLZXkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSkge1xuICAgIHJldHVybiBzdG9yZUZpZWxkTmFtZSArICcjJyArIGRhdGFJZDtcbn1cbmZ1bmN0aW9uIG1heWJlRGVwZW5kT25FeGlzdGVuY2VPZkVudGl0eShzdG9yZSwgZW50aXR5SWQpIHtcbiAgICBpZiAoc3VwcG9ydHNSZXN1bHRDYWNoaW5nKHN0b3JlKSkge1xuICAgICAgICBzdG9yZS5ncm91cC5kZXBlbmQoZW50aXR5SWQsIFwiX19leGlzdHNcIik7XG4gICAgfVxufVxuKGZ1bmN0aW9uIChFbnRpdHlTdG9yZSkge1xuICAgIHZhciBSb290ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgdHNsaWIuX19leHRlbmRzKFJvb3QsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIFJvb3QoX2EpIHtcbiAgICAgICAgICAgIHZhciBwb2xpY2llcyA9IF9hLnBvbGljaWVzLCBfYiA9IF9hLnJlc3VsdENhY2hpbmcsIHJlc3VsdENhY2hpbmcgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBzZWVkID0gX2Euc2VlZDtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHBvbGljaWVzLCBuZXcgQ2FjaGVHcm91cChyZXN1bHRDYWNoaW5nKSkgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLnN0dW1wID0gbmV3IFN0dW1wKF90aGlzKTtcbiAgICAgICAgICAgIF90aGlzLnN0b3JhZ2VUcmllID0gbmV3IHRyaWUuVHJpZSh1dGlsaXRpZXMuY2FuVXNlV2Vha01hcCk7XG4gICAgICAgICAgICBpZiAoc2VlZClcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXBsYWNlKHNlZWQpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIFJvb3QucHJvdG90eXBlLmFkZExheWVyID0gZnVuY3Rpb24gKGxheWVySWQsIHJlcGxheSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R1bXAuYWRkTGF5ZXIobGF5ZXJJZCwgcmVwbGF5KTtcbiAgICAgICAgfTtcbiAgICAgICAgUm9vdC5wcm90b3R5cGUucmVtb3ZlTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgUm9vdC5wcm90b3R5cGUuZ2V0U3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VUcmllLmxvb2t1cEFycmF5KGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSb290O1xuICAgIH0oRW50aXR5U3RvcmUpKTtcbiAgICBFbnRpdHlTdG9yZS5Sb290ID0gUm9vdDtcbn0pKGV4cG9ydHMuRW50aXR5U3RvcmUgfHwgKGV4cG9ydHMuRW50aXR5U3RvcmUgPSB7fSkpO1xudmFyIExheWVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoTGF5ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGF5ZXIoaWQsIHBhcmVudCwgcmVwbGF5LCBncm91cCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwYXJlbnQucG9saWNpZXMsIGdyb3VwKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pZCA9IGlkO1xuICAgICAgICBfdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIF90aGlzLnJlcGxheSA9IHJlcGxheTtcbiAgICAgICAgX3RoaXMuZ3JvdXAgPSBncm91cDtcbiAgICAgICAgcmVwbGF5KF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMYXllci5wcm90b3R5cGUuYWRkTGF5ZXIgPSBmdW5jdGlvbiAobGF5ZXJJZCwgcmVwbGF5KSB7XG4gICAgICAgIHJldHVybiBuZXcgTGF5ZXIobGF5ZXJJZCwgdGhpcywgcmVwbGF5LCB0aGlzLmdyb3VwKTtcbiAgICB9O1xuICAgIExheWVyLnByb3RvdHlwZS5yZW1vdmVMYXllciA9IGZ1bmN0aW9uIChsYXllcklkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudC5yZW1vdmVMYXllcihsYXllcklkKTtcbiAgICAgICAgaWYgKGxheWVySWQgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwLmNhY2hpbmcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3duU3RvcmVPYmplY3QgPSBfdGhpcy5kYXRhW2RhdGFJZF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRTdG9yZU9iamVjdCA9IHBhcmVudFtcImxvb2t1cFwiXShkYXRhSWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudFN0b3JlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZWxldGUoZGF0YUlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghb3duU3RvcmVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgXCJfX2V4aXN0c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmVudFN0b3JlT2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob3duU3RvcmVPYmplY3QgIT09IHBhcmVudFN0b3JlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvd25TdG9yZU9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVxdWFsaXR5LmVxdWFsKG93blN0b3JlT2JqZWN0W3N0b3JlRmllbGROYW1lXSwgcGFyZW50U3RvcmVPYmplY3Rbc3RvcmVGaWVsZE5hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ncm91cC5kaXJ0eShkYXRhSWQsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50ID09PSB0aGlzLnBhcmVudClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICByZXR1cm4gcGFyZW50LmFkZExheWVyKHRoaXMuaWQsIHRoaXMucmVwbGF5KTtcbiAgICB9O1xuICAgIExheWVyLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLnBhcmVudC50b09iamVjdCgpKSwgdGhpcy5kYXRhKTtcbiAgICB9O1xuICAgIExheWVyLnByb3RvdHlwZS5maW5kQ2hpbGRSZWZJZHMgPSBmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgIHZhciBmcm9tUGFyZW50ID0gdGhpcy5wYXJlbnQuZmluZENoaWxkUmVmSWRzKGRhdGFJZCk7XG4gICAgICAgIHJldHVybiBoYXNPd24uY2FsbCh0aGlzLmRhdGEsIGRhdGFJZCkgPyB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZnJvbVBhcmVudCksIF9zdXBlci5wcm90b3R5cGUuZmluZENoaWxkUmVmSWRzLmNhbGwodGhpcywgZGF0YUlkKSkgOiBmcm9tUGFyZW50O1xuICAgIH07XG4gICAgTGF5ZXIucHJvdG90eXBlLmdldFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgIHdoaWxlIChwLnBhcmVudClcbiAgICAgICAgICAgIHAgPSBwLnBhcmVudDtcbiAgICAgICAgcmV0dXJuIHAuZ2V0U3RvcmFnZS5hcHBseShwLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcmV0dXJuIExheWVyO1xufShleHBvcnRzLkVudGl0eVN0b3JlKSk7XG52YXIgU3R1bXAgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhTdHVtcCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdHVtcChyb290KSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBcIkVudGl0eVN0b3JlLlN0dW1wXCIsIHJvb3QsIGZ1bmN0aW9uICgpIHsgfSwgbmV3IENhY2hlR3JvdXAocm9vdC5ncm91cC5jYWNoaW5nLCByb290Lmdyb3VwKSkgfHwgdGhpcztcbiAgICB9XG4gICAgU3R1bXAucHJvdG90eXBlLnJlbW92ZUxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFN0dW1wLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Lm1lcmdlLmFwcGx5KHRoaXMucGFyZW50LCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcmV0dXJuIFN0dW1wO1xufShMYXllcikpO1xuZnVuY3Rpb24gc3RvcmVPYmplY3RSZWNvbmNpbGVyKGV4aXN0aW5nT2JqZWN0LCBpbmNvbWluZ09iamVjdCwgcHJvcGVydHkpIHtcbiAgICB2YXIgZXhpc3RpbmdWYWx1ZSA9IGV4aXN0aW5nT2JqZWN0W3Byb3BlcnR5XTtcbiAgICB2YXIgaW5jb21pbmdWYWx1ZSA9IGluY29taW5nT2JqZWN0W3Byb3BlcnR5XTtcbiAgICByZXR1cm4gZXF1YWxpdHkuZXF1YWwoZXhpc3RpbmdWYWx1ZSwgaW5jb21pbmdWYWx1ZSkgPyBleGlzdGluZ1ZhbHVlIDogaW5jb21pbmdWYWx1ZTtcbn1cbmZ1bmN0aW9uIHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhzdG9yZSkge1xuICAgIHJldHVybiAhIShzdG9yZSBpbnN0YW5jZW9mIGV4cG9ydHMuRW50aXR5U3RvcmUgJiYgc3RvcmUuZ3JvdXAuY2FjaGluZyk7XG59XG5cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5KHZhbHVlKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICAgICAgICAgPyB2YWx1ZS5zbGljZSgwKVxuICAgICAgICAgICAgOiB0c2xpYi5fX2Fzc2lnbih7IF9fcHJvdG9fXzogT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKSB9LCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbnZhciBPYmplY3RDYW5vbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JqZWN0Q2Fub24oKSB7XG4gICAgICAgIHRoaXMua25vd24gPSBuZXcgKHV0aWxpdGllcy5jYW5Vc2VXZWFrU2V0ID8gV2Vha1NldCA6IFNldCkoKTtcbiAgICAgICAgdGhpcy5wb29sID0gbmV3IHRyaWUuVHJpZSh1dGlsaXRpZXMuY2FuVXNlV2Vha01hcCk7XG4gICAgICAgIHRoaXMucGFzc2VzID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5rZXlzQnlKU09OID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVtcHR5ID0gdGhpcy5hZG1pdCh7fSk7XG4gICAgfVxuICAgIE9iamVjdENhbm9uLnByb3RvdHlwZS5pc0tub3duID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSAmJiB0aGlzLmtub3duLmhhcyh2YWx1ZSk7XG4gICAgfTtcbiAgICBPYmplY3RDYW5vbi5wcm90b3R5cGUucGFzcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhciBjb3B5ID0gc2hhbGxvd0NvcHkodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wYXNzZXMuc2V0KGNvcHksIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIE9iamVjdENhbm9uLnByb3RvdHlwZS5hZG1pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbCA9IHRoaXMucGFzc2VzLmdldCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsO1xuICAgICAgICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgICAgICAgICAgIHN3aXRjaCAocHJvdG8pIHtcbiAgICAgICAgICAgICAgICBjYXNlIEFycmF5LnByb3RvdHlwZToge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5rbm93bi5oYXModmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyYXkgPSB2YWx1ZS5tYXAodGhpcy5hZG1pdCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5wb29sLmxvb2t1cEFycmF5KGFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlLmFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtub3duLmFkZChub2RlLmFycmF5ID0gYXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5hcnJheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgICAgICAgIGNhc2UgT2JqZWN0LnByb3RvdHlwZToge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5rbm93bi5oYXModmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdG9fMSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJheV8xID0gW3Byb3RvXzFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IHRoaXMuc29ydGVkS2V5cyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5XzEucHVzaChrZXlzLmpzb24pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3RWYWx1ZUluZGV4XzEgPSBhcnJheV8xLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5zb3J0ZWQuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheV8xLnB1c2goX3RoaXMuYWRtaXQodmFsdWVba2V5XSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBvb2wubG9va3VwQXJyYXkoYXJyYXlfMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZS5vYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmpfMSA9IG5vZGUub2JqZWN0ID0gT2JqZWN0LmNyZWF0ZShwcm90b18xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua25vd24uYWRkKG9ial8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuc29ydGVkLmZvckVhY2goZnVuY3Rpb24gKGtleSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ial8xW2tleV0gPSBhcnJheV8xW2ZpcnN0VmFsdWVJbmRleF8xICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShvYmpfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUub2JqZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBPYmplY3RDYW5vbi5wcm90b3R5cGUuc29ydGVkS2V5cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMucG9vbC5sb29rdXBBcnJheShrZXlzKTtcbiAgICAgICAgaWYgKCFub2RlLmtleXMpIHtcbiAgICAgICAgICAgIGtleXMuc29ydCgpO1xuICAgICAgICAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShrZXlzKTtcbiAgICAgICAgICAgIGlmICghKG5vZGUua2V5cyA9IHRoaXMua2V5c0J5SlNPTi5nZXQoanNvbikpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlzQnlKU09OLnNldChqc29uLCBub2RlLmtleXMgPSB7IHNvcnRlZDoga2V5cywganNvbjoganNvbiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZS5rZXlzO1xuICAgIH07XG4gICAgcmV0dXJuIE9iamVjdENhbm9uO1xufSgpKTtcbnZhciBjYW5vbmljYWxTdHJpbmdpZnkgPSBPYmplY3QuYXNzaWduKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICBpZiAoc3RyaW5naWZ5Q2Fub24gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmVzZXRDYW5vbmljYWxTdHJpbmdpZnkoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2Fub25pY2FsID0gc3RyaW5naWZ5Q2Fub24uYWRtaXQodmFsdWUpO1xuICAgICAgICB2YXIganNvbiA9IHN0cmluZ2lmeUNhY2hlLmdldChjYW5vbmljYWwpO1xuICAgICAgICBpZiAoanNvbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBzdHJpbmdpZnlDYWNoZS5zZXQoY2Fub25pY2FsLCBqc29uID0gSlNPTi5zdHJpbmdpZnkoY2Fub25pY2FsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG59LCB7XG4gICAgcmVzZXQ6IHJlc2V0Q2Fub25pY2FsU3RyaW5naWZ5LFxufSk7XG52YXIgc3RyaW5naWZ5Q2Fub247XG52YXIgc3RyaW5naWZ5Q2FjaGU7XG5mdW5jdGlvbiByZXNldENhbm9uaWNhbFN0cmluZ2lmeSgpIHtcbiAgICBzdHJpbmdpZnlDYW5vbiA9IG5ldyBPYmplY3RDYW5vbjtcbiAgICBzdHJpbmdpZnlDYWNoZSA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtNYXAgPyBXZWFrTWFwIDogTWFwKSgpO1xufVxuXG5mdW5jdGlvbiBleGVjU2VsZWN0aW9uU2V0S2V5QXJncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25TZXQsXG4gICAgICAgIG9wdGlvbnMub2JqZWN0T3JSZWZlcmVuY2UsXG4gICAgICAgIG9wdGlvbnMuY29udGV4dCxcbiAgICAgICAgb3B0aW9ucy5jb250ZXh0LmNhbm9uaXplUmVzdWx0cyxcbiAgICBdO1xufVxudmFyIFN0b3JlUmVhZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdG9yZVJlYWRlcihjb25maWcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5rbm93blJlc3VsdHMgPSBuZXcgKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwID8gV2Vha01hcCA6IE1hcCkoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB1dGlsaXRpZXMuY29tcGFjdChjb25maWcsIHtcbiAgICAgICAgICAgIGFkZFR5cGVuYW1lOiBjb25maWcuYWRkVHlwZW5hbWUgIT09IGZhbHNlLFxuICAgICAgICAgICAgY2Fub25pemVSZXN1bHRzOiBzaG91bGRDYW5vbml6ZVJlc3VsdHMoY29uZmlnKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2Fub24gPSBjb25maWcuY2Fub24gfHwgbmV3IE9iamVjdENhbm9uO1xuICAgICAgICB0aGlzLmV4ZWN1dGVTZWxlY3Rpb25TZXQgPSBvcHRpbWlzbS53cmFwKGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgY2Fub25pemVSZXN1bHRzID0gb3B0aW9ucy5jb250ZXh0LmNhbm9uaXplUmVzdWx0cztcbiAgICAgICAgICAgIHZhciBwZWVrQXJncyA9IGV4ZWNTZWxlY3Rpb25TZXRLZXlBcmdzKG9wdGlvbnMpO1xuICAgICAgICAgICAgcGVla0FyZ3NbM10gPSAhY2Fub25pemVSZXN1bHRzO1xuICAgICAgICAgICAgdmFyIG90aGVyID0gKF9hID0gX3RoaXMuZXhlY3V0ZVNlbGVjdGlvblNldCkucGVlay5hcHBseShfYSwgcGVla0FyZ3MpO1xuICAgICAgICAgICAgaWYgKG90aGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbm9uaXplUmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG90aGVyKSwgeyByZXN1bHQ6IF90aGlzLmNhbm9uLmFkbWl0KG90aGVyLnJlc3VsdCkgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdGhlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1heWJlRGVwZW5kT25FeGlzdGVuY2VPZkVudGl0eShvcHRpb25zLmNvbnRleHQuc3RvcmUsIG9wdGlvbnMuZW5jbG9zaW5nUmVmLl9fcmVmKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5leGVjU2VsZWN0aW9uU2V0SW1wbChvcHRpb25zKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbWF4OiB0aGlzLmNvbmZpZy5yZXN1bHRDYWNoZU1heFNpemUsXG4gICAgICAgICAgICBrZXlBcmdzOiBleGVjU2VsZWN0aW9uU2V0S2V5QXJncyxcbiAgICAgICAgICAgIG1ha2VDYWNoZUtleTogZnVuY3Rpb24gKHNlbGVjdGlvblNldCwgcGFyZW50LCBjb250ZXh0LCBjYW5vbml6ZVJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3VwcG9ydHNSZXN1bHRDYWNoaW5nKGNvbnRleHQuc3RvcmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnN0b3JlLm1ha2VDYWNoZUtleShzZWxlY3Rpb25TZXQsIHV0aWxpdGllcy5pc1JlZmVyZW5jZShwYXJlbnQpID8gcGFyZW50Ll9fcmVmIDogcGFyZW50LCBjb250ZXh0LnZhclN0cmluZywgY2Fub25pemVSZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmV4ZWN1dGVTdWJTZWxlY3RlZEFycmF5ID0gb3B0aW1pc20ud3JhcChmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgbWF5YmVEZXBlbmRPbkV4aXN0ZW5jZU9mRW50aXR5KG9wdGlvbnMuY29udGV4dC5zdG9yZSwgb3B0aW9ucy5lbmNsb3NpbmdSZWYuX19yZWYpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmV4ZWNTdWJTZWxlY3RlZEFycmF5SW1wbChvcHRpb25zKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbWF4OiB0aGlzLmNvbmZpZy5yZXN1bHRDYWNoZU1heFNpemUsXG4gICAgICAgICAgICBtYWtlQ2FjaGVLZXk6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IF9hLmZpZWxkLCBhcnJheSA9IF9hLmFycmF5LCBjb250ZXh0ID0gX2EuY29udGV4dDtcbiAgICAgICAgICAgICAgICBpZiAoc3VwcG9ydHNSZXN1bHRDYWNoaW5nKGNvbnRleHQuc3RvcmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnN0b3JlLm1ha2VDYWNoZUtleShmaWVsZCwgYXJyYXksIGNvbnRleHQudmFyU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBTdG9yZVJlYWRlci5wcm90b3R5cGUucmVzZXRDYW5vbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jYW5vbiA9IG5ldyBPYmplY3RDYW5vbjtcbiAgICB9O1xuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5kaWZmUXVlcnlBZ2FpbnN0U3RvcmUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHN0b3JlID0gX2Euc3RvcmUsIHF1ZXJ5ID0gX2EucXVlcnksIF9iID0gX2Eucm9vdElkLCByb290SWQgPSBfYiA9PT0gdm9pZCAwID8gJ1JPT1RfUVVFUlknIDogX2IsIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgX2MgPSBfYS5yZXR1cm5QYXJ0aWFsRGF0YSwgcmV0dXJuUGFydGlhbERhdGEgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IF9hLmNhbm9uaXplUmVzdWx0cywgY2Fub25pemVSZXN1bHRzID0gX2QgPT09IHZvaWQgMCA/IHRoaXMuY29uZmlnLmNhbm9uaXplUmVzdWx0cyA6IF9kO1xuICAgICAgICB2YXIgcG9saWNpZXMgPSB0aGlzLmNvbmZpZy5jYWNoZS5wb2xpY2llcztcbiAgICAgICAgdmFyaWFibGVzID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHV0aWxpdGllcy5nZXREZWZhdWx0VmFsdWVzKHV0aWxpdGllcy5nZXRRdWVyeURlZmluaXRpb24ocXVlcnkpKSksIHZhcmlhYmxlcyk7XG4gICAgICAgIHZhciByb290UmVmID0gdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2Uocm9vdElkKTtcbiAgICAgICAgdmFyIG1lcmdlciA9IG5ldyB1dGlsaXRpZXMuRGVlcE1lcmdlcjtcbiAgICAgICAgdmFyIGV4ZWNSZXN1bHQgPSB0aGlzLmV4ZWN1dGVTZWxlY3Rpb25TZXQoe1xuICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB1dGlsaXRpZXMuZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpLnNlbGVjdGlvblNldCxcbiAgICAgICAgICAgIG9iamVjdE9yUmVmZXJlbmNlOiByb290UmVmLFxuICAgICAgICAgICAgZW5jbG9zaW5nUmVmOiByb290UmVmLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHN0b3JlOiBzdG9yZSxcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICAgICAgcG9saWNpZXM6IHBvbGljaWVzLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIHZhclN0cmluZzogY2Fub25pY2FsU3RyaW5naWZ5KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgY2Fub25pemVSZXN1bHRzOiBjYW5vbml6ZVJlc3VsdHMsXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRNYXA6IHV0aWxpdGllcy5jcmVhdGVGcmFnbWVudE1hcCh1dGlsaXRpZXMuZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhxdWVyeSkpLFxuICAgICAgICAgICAgICAgIG1lcmdlOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVyZ2VyLm1lcmdlKGEsIGIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG1pc3Npbmc7XG4gICAgICAgIGlmIChleGVjUmVzdWx0Lm1pc3NpbmcpIHtcbiAgICAgICAgICAgIG1pc3NpbmcgPSBbbmV3IE1pc3NpbmdGaWVsZEVycm9yKGZpcnN0TWlzc2luZyhleGVjUmVzdWx0Lm1pc3NpbmcpLCBleGVjUmVzdWx0Lm1pc3NpbmcsIHF1ZXJ5LCB2YXJpYWJsZXMpXTtcbiAgICAgICAgICAgIGlmICghcmV0dXJuUGFydGlhbERhdGEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBtaXNzaW5nWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN1bHQ6IGV4ZWNSZXN1bHQucmVzdWx0LFxuICAgICAgICAgICAgY29tcGxldGU6ICFtaXNzaW5nLFxuICAgICAgICAgICAgbWlzc2luZzogbWlzc2luZyxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5pc0ZyZXNoID0gZnVuY3Rpb24gKHJlc3VsdCwgcGFyZW50LCBzZWxlY3Rpb25TZXQsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhjb250ZXh0LnN0b3JlKSAmJlxuICAgICAgICAgICAgdGhpcy5rbm93blJlc3VsdHMuZ2V0KHJlc3VsdCkgPT09IHNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgdmFyIGxhdGVzdCA9IHRoaXMuZXhlY3V0ZVNlbGVjdGlvblNldC5wZWVrKHNlbGVjdGlvblNldCwgcGFyZW50LCBjb250ZXh0LCB0aGlzLmNhbm9uLmlzS25vd24ocmVzdWx0KSk7XG4gICAgICAgICAgICBpZiAobGF0ZXN0ICYmIHJlc3VsdCA9PT0gbGF0ZXN0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5leGVjU2VsZWN0aW9uU2V0SW1wbCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc2VsZWN0aW9uU2V0ID0gX2Euc2VsZWN0aW9uU2V0LCBvYmplY3RPclJlZmVyZW5jZSA9IF9hLm9iamVjdE9yUmVmZXJlbmNlLCBlbmNsb3NpbmdSZWYgPSBfYS5lbmNsb3NpbmdSZWYsIGNvbnRleHQgPSBfYS5jb250ZXh0O1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdE9yUmVmZXJlbmNlKSAmJlxuICAgICAgICAgICAgIWNvbnRleHQucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWRbb2JqZWN0T3JSZWZlcmVuY2UuX19yZWZdICYmXG4gICAgICAgICAgICAhY29udGV4dC5zdG9yZS5oYXMob2JqZWN0T3JSZWZlcmVuY2UuX19yZWYpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdDogdGhpcy5jYW5vbi5lbXB0eSxcbiAgICAgICAgICAgICAgICBtaXNzaW5nOiBcIkRhbmdsaW5nIHJlZmVyZW5jZSB0byBtaXNzaW5nIFwiLmNvbmNhdChvYmplY3RPclJlZmVyZW5jZS5fX3JlZiwgXCIgb2JqZWN0XCIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFyaWFibGVzID0gY29udGV4dC52YXJpYWJsZXMsIHBvbGljaWVzID0gY29udGV4dC5wb2xpY2llcywgc3RvcmUgPSBjb250ZXh0LnN0b3JlO1xuICAgICAgICB2YXIgdHlwZW5hbWUgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKG9iamVjdE9yUmVmZXJlbmNlLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgdmFyIG1pc3Npbmc7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hZGRUeXBlbmFtZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHR5cGVuYW1lID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAhcG9saWNpZXMucm9vdElkc0J5VHlwZW5hbWVbdHlwZW5hbWVdKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB7IF9fdHlwZW5hbWU6IHR5cGVuYW1lIH07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWlzc2luZyhyZXN1bHQsIHJlc3VsdE5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubWlzc2luZykge1xuICAgICAgICAgICAgICAgIG1pc3NpbmcgPSBjb250ZXh0Lm1lcmdlKG1pc3NpbmcsIChfYSA9IHt9LCBfYVtyZXN1bHROYW1lXSA9IHJlc3VsdC5taXNzaW5nLCBfYSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdvcmtTZXQgPSBuZXcgU2V0KHNlbGVjdGlvblNldC5zZWxlY3Rpb25zKTtcbiAgICAgICAgd29ya1NldC5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBpZiAoIXV0aWxpdGllcy5zaG91bGRJbmNsdWRlKHNlbGVjdGlvbiwgdmFyaWFibGVzKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzRmllbGQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZFZhbHVlID0gcG9saWNpZXMucmVhZEZpZWxkKHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiBzZWxlY3Rpb24ubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IHNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBjb250ZXh0LnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogb2JqZWN0T3JSZWZlcmVuY2UsXG4gICAgICAgICAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdE5hbWUgPSB1dGlsaXRpZXMucmVzdWx0S2V5TmFtZUZyb21GaWVsZChzZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1dGlsaXRpZXMuYWRkVHlwZW5hbWVUb0RvY3VtZW50LmFkZGVkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmcgPSBjb250ZXh0Lm1lcmdlKG1pc3NpbmcsIChfYSA9IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hW3Jlc3VsdE5hbWVdID0gXCJDYW4ndCBmaW5kIGZpZWxkICdcIi5jb25jYXQoc2VsZWN0aW9uLm5hbWUudmFsdWUsIFwiJyBvbiBcIikuY29uY2F0KHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmplY3RPclJlZmVyZW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvYmplY3RPclJlZmVyZW5jZS5fX3JlZiArIFwiIG9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJvYmplY3QgXCIgKyBKU09OLnN0cmluZ2lmeShvYmplY3RPclJlZmVyZW5jZSwgbnVsbCwgMikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShmaWVsZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlID0gaGFuZGxlTWlzc2luZyhfdGhpcy5leGVjdXRlU3ViU2VsZWN0ZWRBcnJheSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXk6IGZpZWxkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNsb3NpbmdSZWY6IGVuY2xvc2luZ1JlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIH0pLCByZXN1bHROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXNlbGVjdGlvbi5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRleHQuY2Fub25pemVSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlID0gX3RoaXMuY2Fub24ucGFzcyhmaWVsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZFZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZSA9IGhhbmRsZU1pc3NpbmcoX3RoaXMuZXhlY3V0ZVNlbGVjdGlvblNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RPclJlZmVyZW5jZTogZmllbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY2xvc2luZ1JlZjogdXRpbGl0aWVzLmlzUmVmZXJlbmNlKGZpZWxkVmFsdWUpID8gZmllbGRWYWx1ZSA6IGVuY2xvc2luZ1JlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIH0pLCByZXN1bHROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZXh0Lm1lcmdlKHJlc3VsdCwgKF9iID0ge30sIF9iW3Jlc3VsdE5hbWVdID0gZmllbGRWYWx1ZSwgX2IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSB1dGlsaXRpZXMuZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uKHNlbGVjdGlvbiwgY29udGV4dC5mcmFnbWVudE1hcCk7XG4gICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50ICYmIHBvbGljaWVzLmZyYWdtZW50TWF0Y2hlcyhmcmFnbWVudCwgdHlwZW5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50LnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmZvckVhY2god29ya1NldC5hZGQsIHdvcmtTZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBmaW5hbFJlc3VsdCA9IHsgcmVzdWx0OiByZXN1bHQsIG1pc3Npbmc6IG1pc3NpbmcgfTtcbiAgICAgICAgdmFyIGZyb3plbiA9IGNvbnRleHQuY2Fub25pemVSZXN1bHRzXG4gICAgICAgICAgICA/IHRoaXMuY2Fub24uYWRtaXQoZmluYWxSZXN1bHQpXG4gICAgICAgICAgICA6IHV0aWxpdGllcy5tYXliZURlZXBGcmVlemUoZmluYWxSZXN1bHQpO1xuICAgICAgICBpZiAoZnJvemVuLnJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5rbm93blJlc3VsdHMuc2V0KGZyb3plbi5yZXN1bHQsIHNlbGVjdGlvblNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyb3plbjtcbiAgICB9O1xuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5leGVjU3ViU2VsZWN0ZWRBcnJheUltcGwgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGZpZWxkID0gX2EuZmllbGQsIGFycmF5ID0gX2EuYXJyYXksIGVuY2xvc2luZ1JlZiA9IF9hLmVuY2xvc2luZ1JlZiwgY29udGV4dCA9IF9hLmNvbnRleHQ7XG4gICAgICAgIHZhciBtaXNzaW5nO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVNaXNzaW5nKGNoaWxkUmVzdWx0LCBpKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoY2hpbGRSZXN1bHQubWlzc2luZykge1xuICAgICAgICAgICAgICAgIG1pc3NpbmcgPSBjb250ZXh0Lm1lcmdlKG1pc3NpbmcsIChfYSA9IHt9LCBfYVtpXSA9IGNoaWxkUmVzdWx0Lm1pc3NpbmcsIF9hKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRSZXN1bHQucmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgIGFycmF5ID0gYXJyYXkuZmlsdGVyKGNvbnRleHQuc3RvcmUuY2FuUmVhZCk7XG4gICAgICAgIH1cbiAgICAgICAgYXJyYXkgPSBhcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVNaXNzaW5nKF90aGlzLmV4ZWN1dGVTdWJTZWxlY3RlZEFycmF5KHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICBhcnJheTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgZW5jbG9zaW5nUmVmOiBlbmNsb3NpbmdSZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgfSksIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVNaXNzaW5nKF90aGlzLmV4ZWN1dGVTZWxlY3Rpb25TZXQoe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IGZpZWxkLnNlbGVjdGlvblNldCxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0T3JSZWZlcmVuY2U6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIGVuY2xvc2luZ1JlZjogdXRpbGl0aWVzLmlzUmVmZXJlbmNlKGl0ZW0pID8gaXRlbSA6IGVuY2xvc2luZ1JlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICB9KSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgICAgICAgIGFzc2VydFNlbGVjdGlvblNldEZvcklkVmFsdWUoY29udGV4dC5zdG9yZSwgZmllbGQsIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdWx0OiBjb250ZXh0LmNhbm9uaXplUmVzdWx0cyA/IHRoaXMuY2Fub24uYWRtaXQoYXJyYXkpIDogYXJyYXksXG4gICAgICAgICAgICBtaXNzaW5nOiBtaXNzaW5nLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIFN0b3JlUmVhZGVyO1xufSgpKTtcbmZ1bmN0aW9uIGZpcnN0TWlzc2luZyh0cmVlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodHJlZSwgZnVuY3Rpb24gKF8sIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHRocm93IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFzc2VydFNlbGVjdGlvblNldEZvcklkVmFsdWUoc3RvcmUsIGZpZWxkLCBmaWVsZFZhbHVlKSB7XG4gICAgaWYgKCFmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgdmFyIHdvcmtTZXRfMSA9IG5ldyBTZXQoW2ZpZWxkVmFsdWVdKTtcbiAgICAgICAgd29ya1NldF8xLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoIXV0aWxpdGllcy5pc1JlZmVyZW5jZSh2YWx1ZSksIFwiTWlzc2luZyBzZWxlY3Rpb24gc2V0IGZvciBvYmplY3Qgb2YgdHlwZSBcIi5jb25jYXQoZ2V0VHlwZW5hbWVGcm9tU3RvcmVPYmplY3Qoc3RvcmUsIHZhbHVlKSwgXCIgcmV0dXJuZWQgZm9yIHF1ZXJ5IGZpZWxkIFwiKS5jb25jYXQoZmllbGQubmFtZS52YWx1ZSkpIDogZ2xvYmFscy5pbnZhcmlhbnQoIXV0aWxpdGllcy5pc1JlZmVyZW5jZSh2YWx1ZSksIDUpO1xuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModmFsdWUpLmZvckVhY2god29ya1NldF8xLmFkZCwgd29ya1NldF8xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG52YXIgY2FjaGVTbG90ID0gbmV3IGNvbnRleHQuU2xvdCgpO1xudmFyIGNhY2hlSW5mb01hcCA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBnZXRDYWNoZUluZm8oY2FjaGUpIHtcbiAgICB2YXIgaW5mbyA9IGNhY2hlSW5mb01hcC5nZXQoY2FjaGUpO1xuICAgIGlmICghaW5mbykge1xuICAgICAgICBjYWNoZUluZm9NYXAuc2V0KGNhY2hlLCBpbmZvID0ge1xuICAgICAgICAgICAgdmFyczogbmV3IFNldCxcbiAgICAgICAgICAgIGRlcDogb3B0aW1pc20uZGVwKCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaW5mbztcbn1cbmZ1bmN0aW9uIGZvcmdldENhY2hlKGNhY2hlKSB7XG4gICAgZ2V0Q2FjaGVJbmZvKGNhY2hlKS52YXJzLmZvckVhY2goZnVuY3Rpb24gKHJ2KSB7IHJldHVybiBydi5mb3JnZXRDYWNoZShjYWNoZSk7IH0pO1xufVxuZnVuY3Rpb24gcmVjYWxsQ2FjaGUoY2FjaGUpIHtcbiAgICBnZXRDYWNoZUluZm8oY2FjaGUpLnZhcnMuZm9yRWFjaChmdW5jdGlvbiAocnYpIHsgcmV0dXJuIHJ2LmF0dGFjaENhY2hlKGNhY2hlKTsgfSk7XG59XG5mdW5jdGlvbiBtYWtlVmFyKHZhbHVlKSB7XG4gICAgdmFyIGNhY2hlcyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgbGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgIHZhciBydiA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIGNhY2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICBnZXRDYWNoZUluZm8oY2FjaGUpLmRlcC5kaXJ0eShydik7XG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdChjYWNoZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIG9sZExpc3RlbmVycyA9IEFycmF5LmZyb20obGlzdGVuZXJzKTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKHZhbHVlKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgY2FjaGUgPSBjYWNoZVNsb3QuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICAgICAgICAgIGF0dGFjaChjYWNoZSk7XG4gICAgICAgICAgICAgICAgZ2V0Q2FjaGVJbmZvKGNhY2hlKS5kZXAocnYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIHJ2Lm9uTmV4dENoYW5nZSA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIGF0dGFjaCA9IHJ2LmF0dGFjaENhY2hlID0gZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgIGNhY2hlcy5hZGQoY2FjaGUpO1xuICAgICAgICBnZXRDYWNoZUluZm8oY2FjaGUpLnZhcnMuYWRkKHJ2KTtcbiAgICAgICAgcmV0dXJuIHJ2O1xuICAgIH07XG4gICAgcnYuZm9yZ2V0Q2FjaGUgPSBmdW5jdGlvbiAoY2FjaGUpIHsgcmV0dXJuIGNhY2hlcy5kZWxldGUoY2FjaGUpOyB9O1xuICAgIHJldHVybiBydjtcbn1cbmZ1bmN0aW9uIGJyb2FkY2FzdChjYWNoZSkge1xuICAgIGlmIChjYWNoZS5icm9hZGNhc3RXYXRjaGVzKSB7XG4gICAgICAgIGNhY2hlLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICB9XG59XG5cbnZhciBzcGVjaWZpZXJJbmZvQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuZnVuY3Rpb24gbG9va3VwU3BlY2lmaWVySW5mbyhzcGVjKSB7XG4gICAgdmFyIGNhY2hlS2V5ID0gSlNPTi5zdHJpbmdpZnkoc3BlYyk7XG4gICAgcmV0dXJuIHNwZWNpZmllckluZm9DYWNoZVtjYWNoZUtleV0gfHxcbiAgICAgICAgKHNwZWNpZmllckluZm9DYWNoZVtjYWNoZUtleV0gPSBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn1cbmZ1bmN0aW9uIGtleUZpZWxkc0ZuRnJvbVNwZWNpZmllcihzcGVjaWZpZXIpIHtcbiAgICB2YXIgaW5mbyA9IGxvb2t1cFNwZWNpZmllckluZm8oc3BlY2lmaWVyKTtcbiAgICByZXR1cm4gaW5mby5rZXlGaWVsZHNGbiB8fCAoaW5mby5rZXlGaWVsZHNGbiA9IGZ1bmN0aW9uIChvYmplY3QsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGV4dHJhY3QgPSBmdW5jdGlvbiAoZnJvbSwga2V5KSB7IHJldHVybiBjb250ZXh0LnJlYWRGaWVsZChrZXksIGZyb20pOyB9O1xuICAgICAgICB2YXIga2V5T2JqZWN0ID0gY29udGV4dC5rZXlPYmplY3QgPSBjb2xsZWN0U3BlY2lmaWVyUGF0aHMoc3BlY2lmaWVyLCBmdW5jdGlvbiAoc2NoZW1hS2V5UGF0aCkge1xuICAgICAgICAgICAgdmFyIGV4dHJhY3RlZCA9IGV4dHJhY3RLZXlQYXRoKGNvbnRleHQuc3RvcmVPYmplY3QsIHNjaGVtYUtleVBhdGgsIGV4dHJhY3QpO1xuICAgICAgICAgICAgaWYgKGV4dHJhY3RlZCA9PT0gdm9pZCAwICYmXG4gICAgICAgICAgICAgICAgb2JqZWN0ICE9PSBjb250ZXh0LnN0b3JlT2JqZWN0ICYmXG4gICAgICAgICAgICAgICAgaGFzT3duLmNhbGwob2JqZWN0LCBzY2hlbWFLZXlQYXRoWzBdKSkge1xuICAgICAgICAgICAgICAgIGV4dHJhY3RlZCA9IGV4dHJhY3RLZXlQYXRoKG9iamVjdCwgc2NoZW1hS2V5UGF0aCwgZXh0cmFjdEtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZXh0cmFjdGVkICE9PSB2b2lkIDAsIFwiTWlzc2luZyBmaWVsZCAnXCIuY29uY2F0KHNjaGVtYUtleVBhdGguam9pbignLicpLCBcIicgd2hpbGUgZXh0cmFjdGluZyBrZXlGaWVsZHMgZnJvbSBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KG9iamVjdCkpKSA6IGdsb2JhbHMuaW52YXJpYW50KGV4dHJhY3RlZCAhPT0gdm9pZCAwLCAyKTtcbiAgICAgICAgICAgIHJldHVybiBleHRyYWN0ZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoY29udGV4dC50eXBlbmFtZSwgXCI6XCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShrZXlPYmplY3QpKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGtleUFyZ3NGbkZyb21TcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gICAgdmFyIGluZm8gPSBsb29rdXBTcGVjaWZpZXJJbmZvKHNwZWNpZmllcik7XG4gICAgcmV0dXJuIGluZm8ua2V5QXJnc0ZuIHx8IChpbmZvLmtleUFyZ3NGbiA9IGZ1bmN0aW9uIChhcmdzLCBfYSkge1xuICAgICAgICB2YXIgZmllbGQgPSBfYS5maWVsZCwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBmaWVsZE5hbWUgPSBfYS5maWVsZE5hbWU7XG4gICAgICAgIHZhciBjb2xsZWN0ZWQgPSBjb2xsZWN0U3BlY2lmaWVyUGF0aHMoc3BlY2lmaWVyLCBmdW5jdGlvbiAoa2V5UGF0aCkge1xuICAgICAgICAgICAgdmFyIGZpcnN0S2V5ID0ga2V5UGF0aFswXTtcbiAgICAgICAgICAgIHZhciBmaXJzdENoYXIgPSBmaXJzdEtleS5jaGFyQXQoMCk7XG4gICAgICAgICAgICBpZiAoZmlyc3RDaGFyID09PSBcIkBcIikge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZCAmJiB1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KGZpZWxkLmRpcmVjdGl2ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXJlY3RpdmVOYW1lXzEgPSBmaXJzdEtleS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBmaWVsZC5kaXJlY3RpdmVzLmZpbmQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZS52YWx1ZSA9PT0gZGlyZWN0aXZlTmFtZV8xOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZUFyZ3MgPSBkICYmIHV0aWxpdGllcy5hcmd1bWVudHNPYmplY3RGcm9tRmllbGQoZCwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZUFyZ3MgJiYgZXh0cmFjdEtleVBhdGgoZGlyZWN0aXZlQXJncywga2V5UGF0aC5zbGljZSgxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaXJzdENoYXIgPT09IFwiJFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhcmlhYmxlTmFtZSA9IGZpcnN0S2V5LnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZXMgJiYgaGFzT3duLmNhbGwodmFyaWFibGVzLCB2YXJpYWJsZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YXJLZXlQYXRoID0ga2V5UGF0aC5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyS2V5UGF0aFswXSA9IHZhcmlhYmxlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4dHJhY3RLZXlQYXRoKHZhcmlhYmxlcywgdmFyS2V5UGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4dHJhY3RLZXlQYXRoKGFyZ3MsIGtleVBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHN1ZmZpeCA9IEpTT04uc3RyaW5naWZ5KGNvbGxlY3RlZCk7XG4gICAgICAgIGlmIChhcmdzIHx8IHN1ZmZpeCAhPT0gXCJ7fVwiKSB7XG4gICAgICAgICAgICBmaWVsZE5hbWUgKz0gXCI6XCIgKyBzdWZmaXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNvbGxlY3RTcGVjaWZpZXJQYXRocyhzcGVjaWZpZXIsIGV4dHJhY3Rvcikge1xuICAgIHZhciBtZXJnZXIgPSBuZXcgdXRpbGl0aWVzLkRlZXBNZXJnZXI7XG4gICAgcmV0dXJuIGdldFNwZWNpZmllclBhdGhzKHNwZWNpZmllcikucmVkdWNlKGZ1bmN0aW9uIChjb2xsZWN0ZWQsIHBhdGgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgdG9NZXJnZSA9IGV4dHJhY3RvcihwYXRoKTtcbiAgICAgICAgaWYgKHRvTWVyZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB0b01lcmdlID0gKF9hID0ge30sIF9hW3BhdGhbaV1dID0gdG9NZXJnZSwgX2EpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sbGVjdGVkID0gbWVyZ2VyLm1lcmdlKGNvbGxlY3RlZCwgdG9NZXJnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxlY3RlZDtcbiAgICB9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn1cbmZ1bmN0aW9uIGdldFNwZWNpZmllclBhdGhzKHNwZWMpIHtcbiAgICB2YXIgaW5mbyA9IGxvb2t1cFNwZWNpZmllckluZm8oc3BlYyk7XG4gICAgaWYgKCFpbmZvLnBhdGhzKSB7XG4gICAgICAgIHZhciBwYXRoc18xID0gaW5mby5wYXRocyA9IFtdO1xuICAgICAgICB2YXIgY3VycmVudFBhdGhfMSA9IFtdO1xuICAgICAgICBzcGVjLmZvckVhY2goZnVuY3Rpb24gKHMsIGkpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHMpKSB7XG4gICAgICAgICAgICAgICAgZ2V0U3BlY2lmaWVyUGF0aHMocykuZm9yRWFjaChmdW5jdGlvbiAocCkgeyByZXR1cm4gcGF0aHNfMS5wdXNoKGN1cnJlbnRQYXRoXzEuY29uY2F0KHApKTsgfSk7XG4gICAgICAgICAgICAgICAgY3VycmVudFBhdGhfMS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBhdGhfMS5wdXNoKHMpO1xuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzcGVjW2kgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aHNfMS5wdXNoKGN1cnJlbnRQYXRoXzEuc2xpY2UoMCkpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGF0aF8xLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGluZm8ucGF0aHM7XG59XG5mdW5jdGlvbiBleHRyYWN0S2V5KG9iamVjdCwga2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdFtrZXldO1xufVxuZnVuY3Rpb24gZXh0cmFjdEtleVBhdGgob2JqZWN0LCBwYXRoLCBleHRyYWN0KSB7XG4gICAgZXh0cmFjdCA9IGV4dHJhY3QgfHwgZXh0cmFjdEtleTtcbiAgICByZXR1cm4gbm9ybWFsaXplKHBhdGgucmVkdWNlKGZ1bmN0aW9uIHJlZHVjZXIob2JqLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKVxuICAgICAgICAgICAgPyBvYmoubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gcmVkdWNlcihjaGlsZCwga2V5KTsgfSlcbiAgICAgICAgICAgIDogb2JqICYmIGV4dHJhY3Qob2JqLCBrZXkpO1xuICAgIH0sIG9iamVjdCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChub3JtYWxpemUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsZWN0U3BlY2lmaWVyUGF0aHMoT2JqZWN0LmtleXModmFsdWUpLnNvcnQoKSwgZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIGV4dHJhY3RLZXlQYXRoKHZhbHVlLCBwYXRoKTsgfSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxudXRpbGl0aWVzLmdldFN0b3JlS2V5TmFtZS5zZXRTdHJpbmdpZnkoY2Fub25pY2FsU3RyaW5naWZ5KTtcbmZ1bmN0aW9uIGFyZ3NGcm9tRmllbGRTcGVjaWZpZXIoc3BlYykge1xuICAgIHJldHVybiBzcGVjLmFyZ3MgIT09IHZvaWQgMCA/IHNwZWMuYXJncyA6XG4gICAgICAgIHNwZWMuZmllbGQgPyB1dGlsaXRpZXMuYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkKHNwZWMuZmllbGQsIHNwZWMudmFyaWFibGVzKSA6IG51bGw7XG59XG52YXIgbnVsbEtleUZpZWxkc0ZuID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdm9pZCAwOyB9O1xudmFyIHNpbXBsZUtleUFyZ3NGbiA9IGZ1bmN0aW9uIChfYXJncywgY29udGV4dCkgeyByZXR1cm4gY29udGV4dC5maWVsZE5hbWU7IH07XG52YXIgbWVyZ2VUcnVlRm4gPSBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nLCBfYSkge1xuICAgIHZhciBtZXJnZU9iamVjdHMgPSBfYS5tZXJnZU9iamVjdHM7XG4gICAgcmV0dXJuIG1lcmdlT2JqZWN0cyhleGlzdGluZywgaW5jb21pbmcpO1xufTtcbnZhciBtZXJnZUZhbHNlRm4gPSBmdW5jdGlvbiAoXywgaW5jb21pbmcpIHsgcmV0dXJuIGluY29taW5nOyB9O1xudmFyIFBvbGljaWVzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQb2xpY2llcyhjb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMudHlwZVBvbGljaWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy50b0JlQWRkZWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnN1cGVydHlwZU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5mdXp6eVN1YnR5cGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJvb3RJZHNCeVR5cGVuYW1lID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5yb290VHlwZW5hbWVzQnlJZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMudXNpbmdQb3NzaWJsZVR5cGVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdHNsaWIuX19hc3NpZ24oeyBkYXRhSWRGcm9tT2JqZWN0OiBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdCB9LCBjb25maWcpO1xuICAgICAgICB0aGlzLmNhY2hlID0gdGhpcy5jb25maWcuY2FjaGU7XG4gICAgICAgIHRoaXMuc2V0Um9vdFR5cGVuYW1lKFwiUXVlcnlcIik7XG4gICAgICAgIHRoaXMuc2V0Um9vdFR5cGVuYW1lKFwiTXV0YXRpb25cIik7XG4gICAgICAgIHRoaXMuc2V0Um9vdFR5cGVuYW1lKFwiU3Vic2NyaXB0aW9uXCIpO1xuICAgICAgICBpZiAoY29uZmlnLnBvc3NpYmxlVHlwZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUG9zc2libGVUeXBlcyhjb25maWcucG9zc2libGVUeXBlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy50eXBlUG9saWNpZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVHlwZVBvbGljaWVzKGNvbmZpZy50eXBlUG9saWNpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvbGljaWVzLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uIChvYmplY3QsIHBhcnRpYWxDb250ZXh0KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIHBvbGljaWVzID0gdGhpcztcbiAgICAgICAgdmFyIHR5cGVuYW1lID0gcGFydGlhbENvbnRleHQgJiYgKHBhcnRpYWxDb250ZXh0LnR5cGVuYW1lIHx8XG4gICAgICAgICAgICAoKF9hID0gcGFydGlhbENvbnRleHQuc3RvcmVPYmplY3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fX3R5cGVuYW1lKSkgfHwgb2JqZWN0Ll9fdHlwZW5hbWU7XG4gICAgICAgIGlmICh0eXBlbmFtZSA9PT0gdGhpcy5yb290VHlwZW5hbWVzQnlJZC5ST09UX1FVRVJZKSB7XG4gICAgICAgICAgICByZXR1cm4gW1wiUk9PVF9RVUVSWVwiXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RvcmVPYmplY3QgPSBwYXJ0aWFsQ29udGV4dCAmJiBwYXJ0aWFsQ29udGV4dC5zdG9yZU9iamVjdCB8fCBvYmplY3Q7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHBhcnRpYWxDb250ZXh0KSwgeyB0eXBlbmFtZTogdHlwZW5hbWUsIHN0b3JlT2JqZWN0OiBzdG9yZU9iamVjdCwgcmVhZEZpZWxkOiBwYXJ0aWFsQ29udGV4dCAmJiBwYXJ0aWFsQ29udGV4dC5yZWFkRmllbGQgfHwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gbm9ybWFsaXplUmVhZEZpZWxkT3B0aW9ucyhhcmd1bWVudHMsIHN0b3JlT2JqZWN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9saWNpZXMucmVhZEZpZWxkKG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU6IHBvbGljaWVzLmNhY2hlW1wiZGF0YVwiXSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgICAgIHZhciBpZDtcbiAgICAgICAgdmFyIHBvbGljeSA9IHR5cGVuYW1lICYmIHRoaXMuZ2V0VHlwZVBvbGljeSh0eXBlbmFtZSk7XG4gICAgICAgIHZhciBrZXlGbiA9IHBvbGljeSAmJiBwb2xpY3kua2V5Rm4gfHwgdGhpcy5jb25maWcuZGF0YUlkRnJvbU9iamVjdDtcbiAgICAgICAgd2hpbGUgKGtleUZuKSB7XG4gICAgICAgICAgICB2YXIgc3BlY2lmaWVyT3JJZCA9IGtleUZuKG9iamVjdCwgY29udGV4dCk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcGVjaWZpZXJPcklkKSkge1xuICAgICAgICAgICAgICAgIGtleUZuID0ga2V5RmllbGRzRm5Gcm9tU3BlY2lmaWVyKHNwZWNpZmllck9ySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWQgPSBzcGVjaWZpZXJPcklkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlkID0gaWQgPyBTdHJpbmcoaWQpIDogdm9pZCAwO1xuICAgICAgICByZXR1cm4gY29udGV4dC5rZXlPYmplY3QgPyBbaWQsIGNvbnRleHQua2V5T2JqZWN0XSA6IFtpZF07XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuYWRkVHlwZVBvbGljaWVzID0gZnVuY3Rpb24gKHR5cGVQb2xpY2llcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBPYmplY3Qua2V5cyh0eXBlUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24gKHR5cGVuYW1lKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0eXBlUG9saWNpZXNbdHlwZW5hbWVdLCBxdWVyeVR5cGUgPSBfYS5xdWVyeVR5cGUsIG11dGF0aW9uVHlwZSA9IF9hLm11dGF0aW9uVHlwZSwgc3Vic2NyaXB0aW9uVHlwZSA9IF9hLnN1YnNjcmlwdGlvblR5cGUsIGluY29taW5nID0gdHNsaWIuX19yZXN0KF9hLCBbXCJxdWVyeVR5cGVcIiwgXCJtdXRhdGlvblR5cGVcIiwgXCJzdWJzY3JpcHRpb25UeXBlXCJdKTtcbiAgICAgICAgICAgIGlmIChxdWVyeVR5cGUpXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0Um9vdFR5cGVuYW1lKFwiUXVlcnlcIiwgdHlwZW5hbWUpO1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRSb290VHlwZW5hbWUoXCJNdXRhdGlvblwiLCB0eXBlbmFtZSk7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRSb290VHlwZW5hbWUoXCJTdWJzY3JpcHRpb25cIiwgdHlwZW5hbWUpO1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKF90aGlzLnRvQmVBZGRlZCwgdHlwZW5hbWUpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudG9CZUFkZGVkW3R5cGVuYW1lXS5wdXNoKGluY29taW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnRvQmVBZGRlZFt0eXBlbmFtZV0gPSBbaW5jb21pbmddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS51cGRhdGVUeXBlUG9saWN5ID0gZnVuY3Rpb24gKHR5cGVuYW1lLCBpbmNvbWluZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSB0aGlzLmdldFR5cGVQb2xpY3kodHlwZW5hbWUpO1xuICAgICAgICB2YXIga2V5RmllbGRzID0gaW5jb21pbmcua2V5RmllbGRzLCBmaWVsZHMgPSBpbmNvbWluZy5maWVsZHM7XG4gICAgICAgIGZ1bmN0aW9uIHNldE1lcmdlKGV4aXN0aW5nLCBtZXJnZSkge1xuICAgICAgICAgICAgZXhpc3RpbmcubWVyZ2UgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBtZXJnZSA9PT0gXCJmdW5jdGlvblwiID8gbWVyZ2UgOlxuICAgICAgICAgICAgICAgICAgICBtZXJnZSA9PT0gdHJ1ZSA/IG1lcmdlVHJ1ZUZuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlID09PSBmYWxzZSA/IG1lcmdlRmFsc2VGbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubWVyZ2U7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLm1lcmdlKTtcbiAgICAgICAgZXhpc3Rpbmcua2V5Rm4gPVxuICAgICAgICAgICAga2V5RmllbGRzID09PSBmYWxzZSA/IG51bGxLZXlGaWVsZHNGbiA6XG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShrZXlGaWVsZHMpID8ga2V5RmllbGRzRm5Gcm9tU3BlY2lmaWVyKGtleUZpZWxkcykgOlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2Yga2V5RmllbGRzID09PSBcImZ1bmN0aW9uXCIgPyBrZXlGaWVsZHMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcua2V5Rm47XG4gICAgICAgIGlmIChmaWVsZHMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaChmdW5jdGlvbiAoZmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nID0gX3RoaXMuZ2V0RmllbGRQb2xpY3kodHlwZW5hbWUsIGZpZWxkTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGluY29taW5nID0gZmllbGRzW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmNvbWluZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnJlYWQgPSBpbmNvbWluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlBcmdzID0gaW5jb21pbmcua2V5QXJncywgcmVhZCA9IGluY29taW5nLnJlYWQsIG1lcmdlID0gaW5jb21pbmcubWVyZ2U7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmtleUZuID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleUFyZ3MgPT09IGZhbHNlID8gc2ltcGxlS2V5QXJnc0ZuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGtleUFyZ3MpID8ga2V5QXJnc0ZuRnJvbVNwZWNpZmllcihrZXlBcmdzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBrZXlBcmdzID09PSBcImZ1bmN0aW9uXCIgPyBrZXlBcmdzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmtleUZuO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlYWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcucmVhZCA9IHJlYWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0TWVyZ2UoZXhpc3RpbmcsIG1lcmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nLnJlYWQgJiYgZXhpc3RpbmcubWVyZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcua2V5Rm4gPSBleGlzdGluZy5rZXlGbiB8fCBzaW1wbGVLZXlBcmdzRm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5zZXRSb290VHlwZW5hbWUgPSBmdW5jdGlvbiAod2hpY2gsIHR5cGVuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlbmFtZSA9PT0gdm9pZCAwKSB7IHR5cGVuYW1lID0gd2hpY2g7IH1cbiAgICAgICAgdmFyIHJvb3RJZCA9IFwiUk9PVF9cIiArIHdoaWNoLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHZhciBvbGQgPSB0aGlzLnJvb3RUeXBlbmFtZXNCeUlkW3Jvb3RJZF07XG4gICAgICAgIGlmICh0eXBlbmFtZSAhPT0gb2xkKSB7XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoIW9sZCB8fCBvbGQgPT09IHdoaWNoLCBcIkNhbm5vdCBjaGFuZ2Ugcm9vdCBcIi5jb25jYXQod2hpY2gsIFwiIF9fdHlwZW5hbWUgbW9yZSB0aGFuIG9uY2VcIikpIDogZ2xvYmFscy5pbnZhcmlhbnQoIW9sZCB8fCBvbGQgPT09IHdoaWNoLCAzKTtcbiAgICAgICAgICAgIGlmIChvbGQpXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucm9vdElkc0J5VHlwZW5hbWVbb2xkXTtcbiAgICAgICAgICAgIHRoaXMucm9vdElkc0J5VHlwZW5hbWVbdHlwZW5hbWVdID0gcm9vdElkO1xuICAgICAgICAgICAgdGhpcy5yb290VHlwZW5hbWVzQnlJZFtyb290SWRdID0gdHlwZW5hbWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5hZGRQb3NzaWJsZVR5cGVzID0gZnVuY3Rpb24gKHBvc3NpYmxlVHlwZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy51c2luZ1Bvc3NpYmxlVHlwZXMgPSB0cnVlO1xuICAgICAgICBPYmplY3Qua2V5cyhwb3NzaWJsZVR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChzdXBlcnR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmdldFN1cGVydHlwZVNldChzdXBlcnR5cGUsIHRydWUpO1xuICAgICAgICAgICAgcG9zc2libGVUeXBlc1tzdXBlcnR5cGVdLmZvckVhY2goZnVuY3Rpb24gKHN1YnR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nZXRTdXBlcnR5cGVTZXQoc3VidHlwZSwgdHJ1ZSkuYWRkKHN1cGVydHlwZSk7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gc3VidHlwZS5tYXRjaChUeXBlT3JGaWVsZE5hbWVSZWdFeHApO1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2ggfHwgbWF0Y2hbMF0gIT09IHN1YnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZnV6enlTdWJ0eXBlcy5zZXQoc3VidHlwZSwgbmV3IFJlZ0V4cChzdWJ0eXBlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldFR5cGVQb2xpY3kgPSBmdW5jdGlvbiAodHlwZW5hbWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFoYXNPd24uY2FsbCh0aGlzLnR5cGVQb2xpY2llcywgdHlwZW5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgcG9saWN5XzEgPSB0aGlzLnR5cGVQb2xpY2llc1t0eXBlbmFtZV0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgcG9saWN5XzEuZmllbGRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHZhciBzdXBlcnR5cGVzID0gdGhpcy5zdXBlcnR5cGVNYXAuZ2V0KHR5cGVuYW1lKTtcbiAgICAgICAgICAgIGlmIChzdXBlcnR5cGVzICYmIHN1cGVydHlwZXMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIHN1cGVydHlwZXMuZm9yRWFjaChmdW5jdGlvbiAoc3VwZXJ0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLmdldFR5cGVQb2xpY3koc3VwZXJ0eXBlKSwgZmllbGRzID0gX2EuZmllbGRzLCByZXN0ID0gdHNsaWIuX19yZXN0KF9hLCBbXCJmaWVsZHNcIl0pO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHBvbGljeV8xLCByZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihwb2xpY3lfMS5maWVsZHMsIGZpZWxkcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluYm94ID0gdGhpcy50b0JlQWRkZWRbdHlwZW5hbWVdO1xuICAgICAgICBpZiAoaW5ib3ggJiYgaW5ib3gubGVuZ3RoKSB7XG4gICAgICAgICAgICBpbmJveC5zcGxpY2UoMCkuZm9yRWFjaChmdW5jdGlvbiAocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVHlwZVBvbGljeSh0eXBlbmFtZSwgcG9saWN5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGVQb2xpY2llc1t0eXBlbmFtZV07XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZ2V0RmllbGRQb2xpY3kgPSBmdW5jdGlvbiAodHlwZW5hbWUsIGZpZWxkTmFtZSwgY3JlYXRlSWZNaXNzaW5nKSB7XG4gICAgICAgIGlmICh0eXBlbmFtZSkge1xuICAgICAgICAgICAgdmFyIGZpZWxkUG9saWNpZXMgPSB0aGlzLmdldFR5cGVQb2xpY3kodHlwZW5hbWUpLmZpZWxkcztcbiAgICAgICAgICAgIHJldHVybiBmaWVsZFBvbGljaWVzW2ZpZWxkTmFtZV0gfHwgKGNyZWF0ZUlmTWlzc2luZyAmJiAoZmllbGRQb2xpY2llc1tmaWVsZE5hbWVdID0gT2JqZWN0LmNyZWF0ZShudWxsKSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZ2V0U3VwZXJ0eXBlU2V0ID0gZnVuY3Rpb24gKHN1YnR5cGUsIGNyZWF0ZUlmTWlzc2luZykge1xuICAgICAgICB2YXIgc3VwZXJ0eXBlU2V0ID0gdGhpcy5zdXBlcnR5cGVNYXAuZ2V0KHN1YnR5cGUpO1xuICAgICAgICBpZiAoIXN1cGVydHlwZVNldCAmJiBjcmVhdGVJZk1pc3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3VwZXJ0eXBlTWFwLnNldChzdWJ0eXBlLCBzdXBlcnR5cGVTZXQgPSBuZXcgU2V0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBlcnR5cGVTZXQ7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZnJhZ21lbnRNYXRjaGVzID0gZnVuY3Rpb24gKGZyYWdtZW50LCB0eXBlbmFtZSwgcmVzdWx0LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFmcmFnbWVudC50eXBlQ29uZGl0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICghdHlwZW5hbWUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBzdXBlcnR5cGUgPSBmcmFnbWVudC50eXBlQ29uZGl0aW9uLm5hbWUudmFsdWU7XG4gICAgICAgIGlmICh0eXBlbmFtZSA9PT0gc3VwZXJ0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh0aGlzLnVzaW5nUG9zc2libGVUeXBlcyAmJlxuICAgICAgICAgICAgdGhpcy5zdXBlcnR5cGVNYXAuaGFzKHN1cGVydHlwZSkpIHtcbiAgICAgICAgICAgIHZhciB0eXBlbmFtZVN1cGVydHlwZVNldCA9IHRoaXMuZ2V0U3VwZXJ0eXBlU2V0KHR5cGVuYW1lLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciB3b3JrUXVldWVfMSA9IFt0eXBlbmFtZVN1cGVydHlwZVNldF07XG4gICAgICAgICAgICB2YXIgbWF5YmVFbnF1ZXVlXzEgPSBmdW5jdGlvbiAoc3VidHlwZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdXBlcnR5cGVTZXQgPSBfdGhpcy5nZXRTdXBlcnR5cGVTZXQoc3VidHlwZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChzdXBlcnR5cGVTZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJ0eXBlU2V0LnNpemUgJiZcbiAgICAgICAgICAgICAgICAgICAgd29ya1F1ZXVlXzEuaW5kZXhPZihzdXBlcnR5cGVTZXQpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB3b3JrUXVldWVfMS5wdXNoKHN1cGVydHlwZVNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBuZWVkVG9DaGVja0Z1enp5U3VidHlwZXMgPSAhIShyZXN1bHQgJiYgdGhpcy5mdXp6eVN1YnR5cGVzLnNpemUpO1xuICAgICAgICAgICAgdmFyIGNoZWNraW5nRnV6enlTdWJ0eXBlcyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3b3JrUXVldWVfMS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBzdXBlcnR5cGVTZXQgPSB3b3JrUXVldWVfMVtpXTtcbiAgICAgICAgICAgICAgICBpZiAoc3VwZXJ0eXBlU2V0LmhhcyhzdXBlcnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdHlwZW5hbWVTdXBlcnR5cGVTZXQuaGFzKHN1cGVydHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2luZ0Z1enp5U3VidHlwZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJJbmZlcnJpbmcgc3VidHlwZSBcIi5jb25jYXQodHlwZW5hbWUsIFwiIG9mIHN1cGVydHlwZSBcIikuY29uY2F0KHN1cGVydHlwZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW5hbWVTdXBlcnR5cGVTZXQuYWRkKHN1cGVydHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN1cGVydHlwZVNldC5mb3JFYWNoKG1heWJlRW5xdWV1ZV8xKTtcbiAgICAgICAgICAgICAgICBpZiAobmVlZFRvQ2hlY2tGdXp6eVN1YnR5cGVzICYmXG4gICAgICAgICAgICAgICAgICAgIGkgPT09IHdvcmtRdWV1ZV8xLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0TWF0Y2hlc1Jlc3VsdChmcmFnbWVudC5zZWxlY3Rpb25TZXQsIHJlc3VsdCwgdmFyaWFibGVzKSkge1xuICAgICAgICAgICAgICAgICAgICBuZWVkVG9DaGVja0Z1enp5U3VidHlwZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tpbmdGdXp6eVN1YnR5cGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mdXp6eVN1YnR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHJlZ0V4cCwgZnV6enlTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IHR5cGVuYW1lLm1hdGNoKHJlZ0V4cCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMF0gPT09IHR5cGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVFbnF1ZXVlXzEoZnV6enlTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmhhc0tleUFyZ3MgPSBmdW5jdGlvbiAodHlwZW5hbWUsIGZpZWxkTmFtZSkge1xuICAgICAgICB2YXIgcG9saWN5ID0gdGhpcy5nZXRGaWVsZFBvbGljeSh0eXBlbmFtZSwgZmllbGROYW1lLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiAhIShwb2xpY3kgJiYgcG9saWN5LmtleUZuKTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRTdG9yZUZpZWxkTmFtZSA9IGZ1bmN0aW9uIChmaWVsZFNwZWMpIHtcbiAgICAgICAgdmFyIHR5cGVuYW1lID0gZmllbGRTcGVjLnR5cGVuYW1lLCBmaWVsZE5hbWUgPSBmaWVsZFNwZWMuZmllbGROYW1lO1xuICAgICAgICB2YXIgcG9saWN5ID0gdGhpcy5nZXRGaWVsZFBvbGljeSh0eXBlbmFtZSwgZmllbGROYW1lLCBmYWxzZSk7XG4gICAgICAgIHZhciBzdG9yZUZpZWxkTmFtZTtcbiAgICAgICAgdmFyIGtleUZuID0gcG9saWN5ICYmIHBvbGljeS5rZXlGbjtcbiAgICAgICAgaWYgKGtleUZuICYmIHR5cGVuYW1lKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlbmFtZTogdHlwZW5hbWUsXG4gICAgICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWUsXG4gICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkU3BlYy5maWVsZCB8fCBudWxsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogZmllbGRTcGVjLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3NGcm9tRmllbGRTcGVjaWZpZXIoZmllbGRTcGVjKTtcbiAgICAgICAgICAgIHdoaWxlIChrZXlGbikge1xuICAgICAgICAgICAgICAgIHZhciBzcGVjaWZpZXJPclN0cmluZyA9IGtleUZuKGFyZ3MsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNwZWNpZmllck9yU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXlGbiA9IGtleUFyZ3NGbkZyb21TcGVjaWZpZXIoc3BlY2lmaWVyT3JTdHJpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVGaWVsZE5hbWUgPSBzcGVjaWZpZXJPclN0cmluZyB8fCBmaWVsZE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RvcmVGaWVsZE5hbWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgc3RvcmVGaWVsZE5hbWUgPSBmaWVsZFNwZWMuZmllbGRcbiAgICAgICAgICAgICAgICA/IHV0aWxpdGllcy5zdG9yZUtleU5hbWVGcm9tRmllbGQoZmllbGRTcGVjLmZpZWxkLCBmaWVsZFNwZWMudmFyaWFibGVzKVxuICAgICAgICAgICAgICAgIDogdXRpbGl0aWVzLmdldFN0b3JlS2V5TmFtZShmaWVsZE5hbWUsIGFyZ3NGcm9tRmllbGRTcGVjaWZpZXIoZmllbGRTcGVjKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0b3JlRmllbGROYW1lID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGROYW1lID09PSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKVxuICAgICAgICAgICAgPyBzdG9yZUZpZWxkTmFtZVxuICAgICAgICAgICAgOiBmaWVsZE5hbWUgKyBcIjpcIiArIHN0b3JlRmllbGROYW1lO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLnJlYWRGaWVsZCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBvYmplY3RPclJlZmVyZW5jZSA9IG9wdGlvbnMuZnJvbTtcbiAgICAgICAgaWYgKCFvYmplY3RPclJlZmVyZW5jZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIG5hbWVPckZpZWxkID0gb3B0aW9ucy5maWVsZCB8fCBvcHRpb25zLmZpZWxkTmFtZTtcbiAgICAgICAgaWYgKCFuYW1lT3JGaWVsZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKG9wdGlvbnMudHlwZW5hbWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdmFyIHR5cGVuYW1lID0gY29udGV4dC5zdG9yZS5nZXRGaWVsZFZhbHVlKG9iamVjdE9yUmVmZXJlbmNlLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgICAgICBpZiAodHlwZW5hbWUpXG4gICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlbmFtZSA9IHR5cGVuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdG9yZUZpZWxkTmFtZSA9IHRoaXMuZ2V0U3RvcmVGaWVsZE5hbWUob3B0aW9ucyk7XG4gICAgICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gY29udGV4dC5zdG9yZS5nZXRGaWVsZFZhbHVlKG9iamVjdE9yUmVmZXJlbmNlLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0aGlzLmdldEZpZWxkUG9saWN5KG9wdGlvbnMudHlwZW5hbWUsIGZpZWxkTmFtZSwgZmFsc2UpO1xuICAgICAgICB2YXIgcmVhZCA9IHBvbGljeSAmJiBwb2xpY3kucmVhZDtcbiAgICAgICAgaWYgKHJlYWQpIHtcbiAgICAgICAgICAgIHZhciByZWFkT3B0aW9ucyA9IG1ha2VGaWVsZEZ1bmN0aW9uT3B0aW9ucyh0aGlzLCBvYmplY3RPclJlZmVyZW5jZSwgb3B0aW9ucywgY29udGV4dCwgY29udGV4dC5zdG9yZS5nZXRTdG9yYWdlKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmplY3RPclJlZmVyZW5jZSlcbiAgICAgICAgICAgICAgICA/IG9iamVjdE9yUmVmZXJlbmNlLl9fcmVmXG4gICAgICAgICAgICAgICAgOiBvYmplY3RPclJlZmVyZW5jZSwgc3RvcmVGaWVsZE5hbWUpKTtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVNsb3Qud2l0aFZhbHVlKHRoaXMuY2FjaGUsIHJlYWQsIFtleGlzdGluZywgcmVhZE9wdGlvbnNdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZ2V0UmVhZEZ1bmN0aW9uID0gZnVuY3Rpb24gKHR5cGVuYW1lLCBmaWVsZE5hbWUpIHtcbiAgICAgICAgdmFyIHBvbGljeSA9IHRoaXMuZ2V0RmllbGRQb2xpY3kodHlwZW5hbWUsIGZpZWxkTmFtZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gcG9saWN5ICYmIHBvbGljeS5yZWFkO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldE1lcmdlRnVuY3Rpb24gPSBmdW5jdGlvbiAocGFyZW50VHlwZW5hbWUsIGZpZWxkTmFtZSwgY2hpbGRUeXBlbmFtZSkge1xuICAgICAgICB2YXIgcG9saWN5ID0gdGhpcy5nZXRGaWVsZFBvbGljeShwYXJlbnRUeXBlbmFtZSwgZmllbGROYW1lLCBmYWxzZSk7XG4gICAgICAgIHZhciBtZXJnZSA9IHBvbGljeSAmJiBwb2xpY3kubWVyZ2U7XG4gICAgICAgIGlmICghbWVyZ2UgJiYgY2hpbGRUeXBlbmFtZSkge1xuICAgICAgICAgICAgcG9saWN5ID0gdGhpcy5nZXRUeXBlUG9saWN5KGNoaWxkVHlwZW5hbWUpO1xuICAgICAgICAgICAgbWVyZ2UgPSBwb2xpY3kgJiYgcG9saWN5Lm1lcmdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXJnZTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5ydW5NZXJnZUZ1bmN0aW9uID0gZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZywgX2EsIGNvbnRleHQsIHN0b3JhZ2UpIHtcbiAgICAgICAgdmFyIGZpZWxkID0gX2EuZmllbGQsIHR5cGVuYW1lID0gX2EudHlwZW5hbWUsIG1lcmdlID0gX2EubWVyZ2U7XG4gICAgICAgIGlmIChtZXJnZSA9PT0gbWVyZ2VUcnVlRm4pIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlTWVyZ2VPYmplY3RzRnVuY3Rpb24oY29udGV4dC5zdG9yZSkoZXhpc3RpbmcsIGluY29taW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVyZ2UgPT09IG1lcmdlRmFsc2VGbikge1xuICAgICAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0Lm92ZXJ3cml0ZSkge1xuICAgICAgICAgICAgZXhpc3RpbmcgPSB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZywgbWFrZUZpZWxkRnVuY3Rpb25PcHRpb25zKHRoaXMsIHZvaWQgMCwgeyB0eXBlbmFtZTogdHlwZW5hbWUsIGZpZWxkTmFtZTogZmllbGQubmFtZS52YWx1ZSwgZmllbGQ6IGZpZWxkLCB2YXJpYWJsZXM6IGNvbnRleHQudmFyaWFibGVzIH0sIGNvbnRleHQsIHN0b3JhZ2UgfHwgT2JqZWN0LmNyZWF0ZShudWxsKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIFBvbGljaWVzO1xufSgpKTtcbmZ1bmN0aW9uIG1ha2VGaWVsZEZ1bmN0aW9uT3B0aW9ucyhwb2xpY2llcywgb2JqZWN0T3JSZWZlcmVuY2UsIGZpZWxkU3BlYywgY29udGV4dCwgc3RvcmFnZSkge1xuICAgIHZhciBzdG9yZUZpZWxkTmFtZSA9IHBvbGljaWVzLmdldFN0b3JlRmllbGROYW1lKGZpZWxkU3BlYyk7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpO1xuICAgIHZhciB2YXJpYWJsZXMgPSBmaWVsZFNwZWMudmFyaWFibGVzIHx8IGNvbnRleHQudmFyaWFibGVzO1xuICAgIHZhciBfYSA9IGNvbnRleHQuc3RvcmUsIHRvUmVmZXJlbmNlID0gX2EudG9SZWZlcmVuY2UsIGNhblJlYWQgPSBfYS5jYW5SZWFkO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFyZ3M6IGFyZ3NGcm9tRmllbGRTcGVjaWZpZXIoZmllbGRTcGVjKSxcbiAgICAgICAgZmllbGQ6IGZpZWxkU3BlYy5maWVsZCB8fCBudWxsLFxuICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZSxcbiAgICAgICAgc3RvcmVGaWVsZE5hbWU6IHN0b3JlRmllbGROYW1lLFxuICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgaXNSZWZlcmVuY2U6IHV0aWxpdGllcy5pc1JlZmVyZW5jZSxcbiAgICAgICAgdG9SZWZlcmVuY2U6IHRvUmVmZXJlbmNlLFxuICAgICAgICBzdG9yYWdlOiBzdG9yYWdlLFxuICAgICAgICBjYWNoZTogcG9saWNpZXMuY2FjaGUsXG4gICAgICAgIGNhblJlYWQ6IGNhblJlYWQsXG4gICAgICAgIHJlYWRGaWVsZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBvbGljaWVzLnJlYWRGaWVsZChub3JtYWxpemVSZWFkRmllbGRPcHRpb25zKGFyZ3VtZW50cywgb2JqZWN0T3JSZWZlcmVuY2UsIGNvbnRleHQpLCBjb250ZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWVyZ2VPYmplY3RzOiBtYWtlTWVyZ2VPYmplY3RzRnVuY3Rpb24oY29udGV4dC5zdG9yZSksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVJlYWRGaWVsZE9wdGlvbnMocmVhZEZpZWxkQXJncywgb2JqZWN0T3JSZWZlcmVuY2UsIHZhcmlhYmxlcykge1xuICAgIHZhciBmaWVsZE5hbWVPck9wdGlvbnMgPSByZWFkRmllbGRBcmdzWzBdLCBmcm9tID0gcmVhZEZpZWxkQXJnc1sxXSwgYXJnYyA9IHJlYWRGaWVsZEFyZ3MubGVuZ3RoO1xuICAgIHZhciBvcHRpb25zO1xuICAgIGlmICh0eXBlb2YgZmllbGROYW1lT3JPcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZU9yT3B0aW9ucyxcbiAgICAgICAgICAgIGZyb206IGFyZ2MgPiAxID8gZnJvbSA6IG9iamVjdE9yUmVmZXJlbmNlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHt9LCBmaWVsZE5hbWVPck9wdGlvbnMpO1xuICAgICAgICBpZiAoIWhhc093bi5jYWxsKG9wdGlvbnMsIFwiZnJvbVwiKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5mcm9tID0gb2JqZWN0T3JSZWZlcmVuY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKF9fREVWX18gJiYgb3B0aW9ucy5mcm9tID09PSB2b2lkIDApIHtcbiAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiVW5kZWZpbmVkICdmcm9tJyBwYXNzZWQgdG8gcmVhZEZpZWxkIHdpdGggYXJndW1lbnRzIFwiLmNvbmNhdCh1dGlsaXRpZXMuc3RyaW5naWZ5Rm9yRGlzcGxheShBcnJheS5mcm9tKHJlYWRGaWVsZEFyZ3MpKSkpO1xuICAgIH1cbiAgICBpZiAodm9pZCAwID09PSBvcHRpb25zLnZhcmlhYmxlcykge1xuICAgICAgICBvcHRpb25zLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG5mdW5jdGlvbiBtYWtlTWVyZ2VPYmplY3RzRnVuY3Rpb24oc3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VPYmplY3RzKGV4aXN0aW5nLCBpbmNvbWluZykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShleGlzdGluZykgfHwgQXJyYXkuaXNBcnJheShpbmNvbWluZykpIHtcbiAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIkNhbm5vdCBhdXRvbWF0aWNhbGx5IG1lcmdlIGFycmF5c1wiKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KGV4aXN0aW5nKSAmJlxuICAgICAgICAgICAgdXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdChpbmNvbWluZykpIHtcbiAgICAgICAgICAgIHZhciBlVHlwZSA9IHN0b3JlLmdldEZpZWxkVmFsdWUoZXhpc3RpbmcsIFwiX190eXBlbmFtZVwiKTtcbiAgICAgICAgICAgIHZhciBpVHlwZSA9IHN0b3JlLmdldEZpZWxkVmFsdWUoaW5jb21pbmcsIFwiX190eXBlbmFtZVwiKTtcbiAgICAgICAgICAgIHZhciB0eXBlc0RpZmZlciA9IGVUeXBlICYmIGlUeXBlICYmIGVUeXBlICE9PSBpVHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlc0RpZmZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmNvbWluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2UoZXhpc3RpbmcpICYmXG4gICAgICAgICAgICAgICAgc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUubWVyZ2UoZXhpc3RpbmcuX19yZWYsIGluY29taW5nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QoZXhpc3RpbmcpICYmXG4gICAgICAgICAgICAgICAgdXRpbGl0aWVzLmlzUmVmZXJlbmNlKGluY29taW5nKSkge1xuICAgICAgICAgICAgICAgIHN0b3JlLm1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZy5fX3JlZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGV4aXN0aW5nKSAmJlxuICAgICAgICAgICAgICAgIHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGluY29taW5nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZXhpc3RpbmcpLCBpbmNvbWluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHRGbGF2b3IoY29udGV4dCwgY2xpZW50T25seSwgZGVmZXJyZWQpIHtcbiAgICB2YXIga2V5ID0gXCJcIi5jb25jYXQoY2xpZW50T25seSkuY29uY2F0KGRlZmVycmVkKTtcbiAgICB2YXIgZmxhdm9yZWQgPSBjb250ZXh0LmZsYXZvcnMuZ2V0KGtleSk7XG4gICAgaWYgKCFmbGF2b3JlZCkge1xuICAgICAgICBjb250ZXh0LmZsYXZvcnMuc2V0KGtleSwgZmxhdm9yZWQgPSAoY29udGV4dC5jbGllbnRPbmx5ID09PSBjbGllbnRPbmx5ICYmXG4gICAgICAgICAgICBjb250ZXh0LmRlZmVycmVkID09PSBkZWZlcnJlZCkgPyBjb250ZXh0IDogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IGNsaWVudE9ubHk6IGNsaWVudE9ubHksIGRlZmVycmVkOiBkZWZlcnJlZCB9KSk7XG4gICAgfVxuICAgIHJldHVybiBmbGF2b3JlZDtcbn1cbnZhciBTdG9yZVdyaXRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RvcmVXcml0ZXIoY2FjaGUsIHJlYWRlcikge1xuICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgICAgIHRoaXMucmVhZGVyID0gcmVhZGVyO1xuICAgIH1cbiAgICBTdG9yZVdyaXRlci5wcm90b3R5cGUud3JpdGVUb1N0b3JlID0gZnVuY3Rpb24gKHN0b3JlLCBfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcXVlcnkgPSBfYS5xdWVyeSwgcmVzdWx0ID0gX2EucmVzdWx0LCBkYXRhSWQgPSBfYS5kYXRhSWQsIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgb3ZlcndyaXRlID0gX2Eub3ZlcndyaXRlO1xuICAgICAgICB2YXIgb3BlcmF0aW9uRGVmaW5pdGlvbiA9IHV0aWxpdGllcy5nZXRPcGVyYXRpb25EZWZpbml0aW9uKHF1ZXJ5KTtcbiAgICAgICAgdmFyIG1lcmdlciA9IG1ha2VQcm9jZXNzZWRGaWVsZHNNZXJnZXIoKTtcbiAgICAgICAgdmFyaWFibGVzID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHV0aWxpdGllcy5nZXREZWZhdWx0VmFsdWVzKG9wZXJhdGlvbkRlZmluaXRpb24pKSwgdmFyaWFibGVzKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBzdG9yZTogc3RvcmUsXG4gICAgICAgICAgICB3cml0dGVuOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVyZ2VyLm1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICB2YXJTdHJpbmc6IGNhbm9uaWNhbFN0cmluZ2lmeSh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgZnJhZ21lbnRNYXA6IHV0aWxpdGllcy5jcmVhdGVGcmFnbWVudE1hcCh1dGlsaXRpZXMuZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhxdWVyeSkpLFxuICAgICAgICAgICAgb3ZlcndyaXRlOiAhIW92ZXJ3cml0ZSxcbiAgICAgICAgICAgIGluY29taW5nQnlJZDogbmV3IE1hcCxcbiAgICAgICAgICAgIGNsaWVudE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmZXJyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZmxhdm9yczogbmV3IE1hcCxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlZiA9IHRoaXMucHJvY2Vzc1NlbGVjdGlvblNldCh7XG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCB8fCBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgZGF0YUlkOiBkYXRhSWQsXG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IG9wZXJhdGlvbkRlZmluaXRpb24uc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgbWVyZ2VUcmVlOiB7IG1hcDogbmV3IE1hcCB9LFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdXRpbGl0aWVzLmlzUmVmZXJlbmNlKHJlZikpIHtcbiAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIkNvdWxkIG5vdCBpZGVudGlmeSBvYmplY3QgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDYpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuaW5jb21pbmdCeUlkLmZvckVhY2goZnVuY3Rpb24gKF9hLCBkYXRhSWQpIHtcbiAgICAgICAgICAgIHZhciBzdG9yZU9iamVjdCA9IF9hLnN0b3JlT2JqZWN0LCBtZXJnZVRyZWUgPSBfYS5tZXJnZVRyZWUsIGZpZWxkTm9kZVNldCA9IF9hLmZpZWxkTm9kZVNldDtcbiAgICAgICAgICAgIHZhciBlbnRpdHlSZWYgPSB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZShkYXRhSWQpO1xuICAgICAgICAgICAgaWYgKG1lcmdlVHJlZSAmJiBtZXJnZVRyZWUubWFwLnNpemUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXBwbGllZCA9IF90aGlzLmFwcGx5TWVyZ2VzKG1lcmdlVHJlZSwgZW50aXR5UmVmLCBzdG9yZU9iamVjdCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShhcHBsaWVkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0b3JlT2JqZWN0ID0gYXBwbGllZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX0RFVl9fICYmICFjb250ZXh0Lm92ZXJ3cml0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZHNXaXRoU2VsZWN0aW9uU2V0c18xID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgICAgICBmaWVsZE5vZGVTZXQuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzV2l0aFNlbGVjdGlvblNldHNfMVtmaWVsZC5uYW1lLnZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzU2VsZWN0aW9uU2V0XzEgPSBmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkc1dpdGhTZWxlY3Rpb25TZXRzXzFbZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSldID09PSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGhhc01lcmdlRnVuY3Rpb25fMSA9IGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRUcmVlID0gbWVyZ2VUcmVlICYmIG1lcmdlVHJlZS5tYXAuZ2V0KHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4oY2hpbGRUcmVlICYmIGNoaWxkVHJlZS5pbmZvICYmIGNoaWxkVHJlZS5pbmZvLm1lcmdlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JlT2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzU2VsZWN0aW9uU2V0XzEoc3RvcmVGaWVsZE5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhaGFzTWVyZ2VGdW5jdGlvbl8xKHN0b3JlRmllbGROYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybkFib3V0RGF0YUxvc3MoZW50aXR5UmVmLCBzdG9yZU9iamVjdCwgc3RvcmVGaWVsZE5hbWUsIGNvbnRleHQuc3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdG9yZS5tZXJnZShkYXRhSWQsIHN0b3JlT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0b3JlLnJldGFpbihyZWYuX19yZWYpO1xuICAgICAgICByZXR1cm4gcmVmO1xuICAgIH07XG4gICAgU3RvcmVXcml0ZXIucHJvdG90eXBlLnByb2Nlc3NTZWxlY3Rpb25TZXQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGFJZCA9IF9hLmRhdGFJZCwgcmVzdWx0ID0gX2EucmVzdWx0LCBzZWxlY3Rpb25TZXQgPSBfYS5zZWxlY3Rpb25TZXQsIGNvbnRleHQgPSBfYS5jb250ZXh0LCBtZXJnZVRyZWUgPSBfYS5tZXJnZVRyZWU7XG4gICAgICAgIHZhciBwb2xpY2llcyA9IHRoaXMuY2FjaGUucG9saWNpZXM7XG4gICAgICAgIHZhciBpbmNvbWluZyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciB0eXBlbmFtZSA9IChkYXRhSWQgJiYgcG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWRbZGF0YUlkXSkgfHxcbiAgICAgICAgICAgIHV0aWxpdGllcy5nZXRUeXBlbmFtZUZyb21SZXN1bHQocmVzdWx0LCBzZWxlY3Rpb25TZXQsIGNvbnRleHQuZnJhZ21lbnRNYXApIHx8XG4gICAgICAgICAgICAoZGF0YUlkICYmIGNvbnRleHQuc3RvcmUuZ2V0KGRhdGFJZCwgXCJfX3R5cGVuYW1lXCIpKTtcbiAgICAgICAgaWYgKFwic3RyaW5nXCIgPT09IHR5cGVvZiB0eXBlbmFtZSkge1xuICAgICAgICAgICAgaW5jb21pbmcuX190eXBlbmFtZSA9IHR5cGVuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZWFkRmllbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IG5vcm1hbGl6ZVJlYWRGaWVsZE9wdGlvbnMoYXJndW1lbnRzLCBpbmNvbWluZywgY29udGV4dC52YXJpYWJsZXMpO1xuICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvcHRpb25zLmZyb20pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZm8gPSBjb250ZXh0LmluY29taW5nQnlJZC5nZXQob3B0aW9ucy5mcm9tLl9fcmVmKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0XzEgPSBwb2xpY2llcy5yZWFkRmllbGQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGZyb206IGluZm8uc3RvcmVPYmplY3QgfSksIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0XzEgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdF8xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBvbGljaWVzLnJlYWRGaWVsZChvcHRpb25zLCBjb250ZXh0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGZpZWxkTm9kZVNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5mbGF0dGVuRmllbGRzKHNlbGVjdGlvblNldCwgcmVzdWx0LCBjb250ZXh0LCB0eXBlbmFtZSkuZm9yRWFjaChmdW5jdGlvbiAoY29udGV4dCwgZmllbGQpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciByZXN1bHRGaWVsZEtleSA9IHV0aWxpdGllcy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkKGZpZWxkKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdFtyZXN1bHRGaWVsZEtleV07XG4gICAgICAgICAgICBmaWVsZE5vZGVTZXQuYWRkKGZpZWxkKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlRmllbGROYW1lID0gcG9saWNpZXMuZ2V0U3RvcmVGaWVsZE5hbWUoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlbmFtZTogdHlwZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGQubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGNvbnRleHQudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZFRyZWUgPSBnZXRDaGlsZE1lcmdlVHJlZShtZXJnZVRyZWUsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5jb21pbmdWYWx1ZSA9IF90aGlzLnByb2Nlc3NGaWVsZFZhbHVlKHZhbHVlLCBmaWVsZCwgZmllbGQuc2VsZWN0aW9uU2V0XG4gICAgICAgICAgICAgICAgICAgID8gZ2V0Q29udGV4dEZsYXZvcihjb250ZXh0LCBmYWxzZSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIDogY29udGV4dCwgY2hpbGRUcmVlKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRUeXBlbmFtZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICh1dGlsaXRpZXMuaXNSZWZlcmVuY2UoaW5jb21pbmdWYWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGluY29taW5nVmFsdWUpKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFR5cGVuYW1lID0gcmVhZEZpZWxkKFwiX190eXBlbmFtZVwiLCBpbmNvbWluZ1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG1lcmdlID0gcG9saWNpZXMuZ2V0TWVyZ2VGdW5jdGlvbih0eXBlbmFtZSwgZmllbGQubmFtZS52YWx1ZSwgY2hpbGRUeXBlbmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1lcmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJlZS5pbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW5hbWU6IHR5cGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2U6IG1lcmdlLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVSZWN5Y2xlQ2hpbGRNZXJnZVRyZWUobWVyZ2VUcmVlLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluY29taW5nID0gY29udGV4dC5tZXJnZShpbmNvbWluZywgKF9hID0ge30sXG4gICAgICAgICAgICAgICAgICAgIF9hW3N0b3JlRmllbGROYW1lXSA9IGluY29taW5nVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIF9hKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfX0RFVl9fICYmXG4gICAgICAgICAgICAgICAgIWNvbnRleHQuY2xpZW50T25seSAmJlxuICAgICAgICAgICAgICAgICFjb250ZXh0LmRlZmVycmVkICYmXG4gICAgICAgICAgICAgICAgIXV0aWxpdGllcy5hZGRUeXBlbmFtZVRvRG9jdW1lbnQuYWRkZWQoZmllbGQpICYmXG4gICAgICAgICAgICAgICAgIXBvbGljaWVzLmdldFJlYWRGdW5jdGlvbih0eXBlbmFtZSwgZmllbGQubmFtZS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmVycm9yKFwiTWlzc2luZyBmaWVsZCAnXCIuY29uY2F0KHV0aWxpdGllcy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkKGZpZWxkKSwgXCInIHdoaWxlIHdyaXRpbmcgcmVzdWx0IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSkuc3Vic3RyaW5nKDAsIDEwMDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBwb2xpY2llcy5pZGVudGlmeShyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICB0eXBlbmFtZTogdHlwZW5hbWUsXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiBzZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRNYXA6IGNvbnRleHQuZnJhZ21lbnRNYXAsXG4gICAgICAgICAgICAgICAgc3RvcmVPYmplY3Q6IGluY29taW5nLFxuICAgICAgICAgICAgICAgIHJlYWRGaWVsZDogcmVhZEZpZWxkLFxuICAgICAgICAgICAgfSksIGlkID0gX2JbMF0sIGtleU9iamVjdCA9IF9iWzFdO1xuICAgICAgICAgICAgZGF0YUlkID0gZGF0YUlkIHx8IGlkO1xuICAgICAgICAgICAgaWYgKGtleU9iamVjdCkge1xuICAgICAgICAgICAgICAgIGluY29taW5nID0gY29udGV4dC5tZXJnZShpbmNvbWluZywga2V5T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKCFkYXRhSWQpXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGRhdGFJZCkge1xuICAgICAgICAgICAgdmFyIGRhdGFSZWYgPSB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZShkYXRhSWQpO1xuICAgICAgICAgICAgdmFyIHNldHMgPSBjb250ZXh0LndyaXR0ZW5bZGF0YUlkXSB8fCAoY29udGV4dC53cml0dGVuW2RhdGFJZF0gPSBbXSk7XG4gICAgICAgICAgICBpZiAoc2V0cy5pbmRleE9mKHNlbGVjdGlvblNldCkgPj0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVJlZjtcbiAgICAgICAgICAgIHNldHMucHVzaChzZWxlY3Rpb25TZXQpO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZGVyICYmIHRoaXMucmVhZGVyLmlzRnJlc2gocmVzdWx0LCBkYXRhUmVmLCBzZWxlY3Rpb25TZXQsIGNvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNfMSA9IGNvbnRleHQuaW5jb21pbmdCeUlkLmdldChkYXRhSWQpO1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzXzEpIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c18xLnN0b3JlT2JqZWN0ID0gY29udGV4dC5tZXJnZShwcmV2aW91c18xLnN0b3JlT2JqZWN0LCBpbmNvbWluZyk7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNfMS5tZXJnZVRyZWUgPSBtZXJnZU1lcmdlVHJlZXMocHJldmlvdXNfMS5tZXJnZVRyZWUsIG1lcmdlVHJlZSk7XG4gICAgICAgICAgICAgICAgZmllbGROb2RlU2V0LmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiBwcmV2aW91c18xLmZpZWxkTm9kZVNldC5hZGQoZmllbGQpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuaW5jb21pbmdCeUlkLnNldChkYXRhSWQsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVPYmplY3Q6IGluY29taW5nLFxuICAgICAgICAgICAgICAgICAgICBtZXJnZVRyZWU6IG1lcmdlVHJlZUlzRW1wdHkobWVyZ2VUcmVlKSA/IHZvaWQgMCA6IG1lcmdlVHJlZSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGROb2RlU2V0OiBmaWVsZE5vZGVTZXQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YVJlZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgfTtcbiAgICBTdG9yZVdyaXRlci5wcm90b3R5cGUucHJvY2Vzc0ZpZWxkVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZpZWxkLCBjb250ZXh0LCBtZXJnZVRyZWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFmaWVsZC5zZWxlY3Rpb25TZXQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBfX0RFVl9fID8gdXRpbGl0aWVzLmNsb25lRGVlcCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBfdGhpcy5wcm9jZXNzRmllbGRWYWx1ZShpdGVtLCBmaWVsZCwgY29udGV4dCwgZ2V0Q2hpbGRNZXJnZVRyZWUobWVyZ2VUcmVlLCBpKSk7XG4gICAgICAgICAgICAgICAgbWF5YmVSZWN5Y2xlQ2hpbGRNZXJnZVRyZWUobWVyZ2VUcmVlLCBpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2VsZWN0aW9uU2V0KHtcbiAgICAgICAgICAgIHJlc3VsdDogdmFsdWUsXG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IGZpZWxkLnNlbGVjdGlvblNldCxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICBtZXJnZVRyZWU6IG1lcmdlVHJlZSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdG9yZVdyaXRlci5wcm90b3R5cGUuZmxhdHRlbkZpZWxkcyA9IGZ1bmN0aW9uIChzZWxlY3Rpb25TZXQsIHJlc3VsdCwgY29udGV4dCwgdHlwZW5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVuYW1lID09PSB2b2lkIDApIHsgdHlwZW5hbWUgPSB1dGlsaXRpZXMuZ2V0VHlwZW5hbWVGcm9tUmVzdWx0KHJlc3VsdCwgc2VsZWN0aW9uU2V0LCBjb250ZXh0LmZyYWdtZW50TWFwKTsgfVxuICAgICAgICB2YXIgZmllbGRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhciBwb2xpY2llcyA9IHRoaXMuY2FjaGUucG9saWNpZXM7XG4gICAgICAgIHZhciBsaW1pdGluZ1RyaWUgPSBuZXcgdHJpZS5UcmllKGZhbHNlKTtcbiAgICAgICAgKGZ1bmN0aW9uIGZsYXR0ZW4oc2VsZWN0aW9uU2V0LCBpbmhlcml0ZWRDb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgdmlzaXRlZE5vZGUgPSBsaW1pdGluZ1RyaWUubG9va3VwKHNlbGVjdGlvblNldCwgaW5oZXJpdGVkQ29udGV4dC5jbGllbnRPbmx5LCBpbmhlcml0ZWRDb250ZXh0LmRlZmVycmVkKTtcbiAgICAgICAgICAgIGlmICh2aXNpdGVkTm9kZS52aXNpdGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZpc2l0ZWROb2RlLnZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsaXRpZXMuc2hvdWxkSW5jbHVkZShzZWxlY3Rpb24sIGNvbnRleHQudmFyaWFibGVzKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBjbGllbnRPbmx5ID0gaW5oZXJpdGVkQ29udGV4dC5jbGllbnRPbmx5LCBkZWZlcnJlZCA9IGluaGVyaXRlZENvbnRleHQuZGVmZXJyZWQ7XG4gICAgICAgICAgICAgICAgaWYgKCEoY2xpZW50T25seSAmJiBkZWZlcnJlZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShzZWxlY3Rpb24uZGlyZWN0aXZlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLmRpcmVjdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGRpci5uYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwiY2xpZW50XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50T25seSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJkZWZlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSB1dGlsaXRpZXMuYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkKGRpciwgY29udGV4dC52YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXJncyB8fCBhcmdzLmlmICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc0ZpZWxkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nID0gZmllbGRNYXAuZ2V0KHNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50T25seSA9IGNsaWVudE9ubHkgJiYgZXhpc3RpbmcuY2xpZW50T25seTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkID0gZGVmZXJyZWQgJiYgZXhpc3RpbmcuZGVmZXJyZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmllbGRNYXAuc2V0KHNlbGVjdGlvbiwgZ2V0Q29udGV4dEZsYXZvcihjb250ZXh0LCBjbGllbnRPbmx5LCBkZWZlcnJlZCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gdXRpbGl0aWVzLmdldEZyYWdtZW50RnJvbVNlbGVjdGlvbihzZWxlY3Rpb24sIGNvbnRleHQuZnJhZ21lbnRNYXApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbGljaWVzLmZyYWdtZW50TWF0Y2hlcyhmcmFnbWVudCwgdHlwZW5hbWUsIHJlc3VsdCwgY29udGV4dC52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuKGZyYWdtZW50LnNlbGVjdGlvblNldCwgZ2V0Q29udGV4dEZsYXZvcihjb250ZXh0LCBjbGllbnRPbmx5LCBkZWZlcnJlZCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKHNlbGVjdGlvblNldCwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiBmaWVsZE1hcDtcbiAgICB9O1xuICAgIFN0b3JlV3JpdGVyLnByb3RvdHlwZS5hcHBseU1lcmdlcyA9IGZ1bmN0aW9uIChtZXJnZVRyZWUsIGV4aXN0aW5nLCBpbmNvbWluZywgY29udGV4dCwgZ2V0U3RvcmFnZUFyZ3MpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobWVyZ2VUcmVlLm1hcC5zaXplICYmICF1dGlsaXRpZXMuaXNSZWZlcmVuY2UoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICB2YXIgZV8xID0gKCFBcnJheS5pc0FycmF5KGluY29taW5nKSAmJlxuICAgICAgICAgICAgICAgICh1dGlsaXRpZXMuaXNSZWZlcmVuY2UoZXhpc3RpbmcpIHx8IHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGV4aXN0aW5nKSkpID8gZXhpc3RpbmcgOiB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgaV8xID0gaW5jb21pbmc7XG4gICAgICAgICAgICBpZiAoZV8xICYmICFnZXRTdG9yYWdlQXJncykge1xuICAgICAgICAgICAgICAgIGdldFN0b3JhZ2VBcmdzID0gW3V0aWxpdGllcy5pc1JlZmVyZW5jZShlXzEpID8gZV8xLl9fcmVmIDogZV8xXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGFuZ2VkRmllbGRzXzE7XG4gICAgICAgICAgICB2YXIgZ2V0VmFsdWVfMSA9IGZ1bmN0aW9uIChmcm9tLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZnJvbSlcbiAgICAgICAgICAgICAgICAgICAgPyAodHlwZW9mIG5hbWUgPT09IFwibnVtYmVyXCIgPyBmcm9tW25hbWVdIDogdm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbnRleHQuc3RvcmUuZ2V0RmllbGRWYWx1ZShmcm9tLCBTdHJpbmcobmFtZSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1lcmdlVHJlZS5tYXAuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRUcmVlLCBzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBlVmFsID0gZ2V0VmFsdWVfMShlXzEsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgaVZhbCA9IGdldFZhbHVlXzEoaV8xLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gaVZhbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChnZXRTdG9yYWdlQXJncykge1xuICAgICAgICAgICAgICAgICAgICBnZXRTdG9yYWdlQXJncy5wdXNoKHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGFWYWwgPSBfdGhpcy5hcHBseU1lcmdlcyhjaGlsZFRyZWUsIGVWYWwsIGlWYWwsIGNvbnRleHQsIGdldFN0b3JhZ2VBcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAoYVZhbCAhPT0gaVZhbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkRmllbGRzXzEgPSBjaGFuZ2VkRmllbGRzXzEgfHwgbmV3IE1hcDtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZEZpZWxkc18xLnNldChzdG9yZUZpZWxkTmFtZSwgYVZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChnZXRTdG9yYWdlQXJncykge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLmludmFyaWFudChnZXRTdG9yYWdlQXJncy5wb3AoKSA9PT0gc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNoYW5nZWRGaWVsZHNfMSkge1xuICAgICAgICAgICAgICAgIGluY29taW5nID0gKEFycmF5LmlzQXJyYXkoaV8xKSA/IGlfMS5zbGljZSgwKSA6IHRzbGliLl9fYXNzaWduKHt9LCBpXzEpKTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkRmllbGRzXzEuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jb21pbmdbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWVyZ2VUcmVlLmluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnBvbGljaWVzLnJ1bk1lcmdlRnVuY3Rpb24oZXhpc3RpbmcsIGluY29taW5nLCBtZXJnZVRyZWUuaW5mbywgY29udGV4dCwgZ2V0U3RvcmFnZUFyZ3MgJiYgKF9hID0gY29udGV4dC5zdG9yZSkuZ2V0U3RvcmFnZS5hcHBseShfYSwgZ2V0U3RvcmFnZUFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgfTtcbiAgICByZXR1cm4gU3RvcmVXcml0ZXI7XG59KCkpO1xudmFyIGVtcHR5TWVyZ2VUcmVlUG9vbCA9IFtdO1xuZnVuY3Rpb24gZ2V0Q2hpbGRNZXJnZVRyZWUoX2EsIG5hbWUpIHtcbiAgICB2YXIgbWFwID0gX2EubWFwO1xuICAgIGlmICghbWFwLmhhcyhuYW1lKSkge1xuICAgICAgICBtYXAuc2V0KG5hbWUsIGVtcHR5TWVyZ2VUcmVlUG9vbC5wb3AoKSB8fCB7IG1hcDogbmV3IE1hcCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcC5nZXQobmFtZSk7XG59XG5mdW5jdGlvbiBtZXJnZU1lcmdlVHJlZXMobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAobGVmdCA9PT0gcmlnaHQgfHwgIXJpZ2h0IHx8IG1lcmdlVHJlZUlzRW1wdHkocmlnaHQpKVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICBpZiAoIWxlZnQgfHwgbWVyZ2VUcmVlSXNFbXB0eShsZWZ0KSlcbiAgICAgICAgcmV0dXJuIHJpZ2h0O1xuICAgIHZhciBpbmZvID0gbGVmdC5pbmZvICYmIHJpZ2h0LmluZm8gPyB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbGVmdC5pbmZvKSwgcmlnaHQuaW5mbykgOiBsZWZ0LmluZm8gfHwgcmlnaHQuaW5mbztcbiAgICB2YXIgbmVlZFRvTWVyZ2VNYXBzID0gbGVmdC5tYXAuc2l6ZSAmJiByaWdodC5tYXAuc2l6ZTtcbiAgICB2YXIgbWFwID0gbmVlZFRvTWVyZ2VNYXBzID8gbmV3IE1hcCA6XG4gICAgICAgIGxlZnQubWFwLnNpemUgPyBsZWZ0Lm1hcCA6IHJpZ2h0Lm1hcDtcbiAgICB2YXIgbWVyZ2VkID0geyBpbmZvOiBpbmZvLCBtYXA6IG1hcCB9O1xuICAgIGlmIChuZWVkVG9NZXJnZU1hcHMpIHtcbiAgICAgICAgdmFyIHJlbWFpbmluZ1JpZ2h0S2V5c18xID0gbmV3IFNldChyaWdodC5tYXAua2V5cygpKTtcbiAgICAgICAgbGVmdC5tYXAuZm9yRWFjaChmdW5jdGlvbiAobGVmdFRyZWUsIGtleSkge1xuICAgICAgICAgICAgbWVyZ2VkLm1hcC5zZXQoa2V5LCBtZXJnZU1lcmdlVHJlZXMobGVmdFRyZWUsIHJpZ2h0Lm1hcC5nZXQoa2V5KSkpO1xuICAgICAgICAgICAgcmVtYWluaW5nUmlnaHRLZXlzXzEuZGVsZXRlKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1haW5pbmdSaWdodEtleXNfMS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIG1lcmdlZC5tYXAuc2V0KGtleSwgbWVyZ2VNZXJnZVRyZWVzKHJpZ2h0Lm1hcC5nZXQoa2V5KSwgbGVmdC5tYXAuZ2V0KGtleSkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtZXJnZWQ7XG59XG5mdW5jdGlvbiBtZXJnZVRyZWVJc0VtcHR5KHRyZWUpIHtcbiAgICByZXR1cm4gIXRyZWUgfHwgISh0cmVlLmluZm8gfHwgdHJlZS5tYXAuc2l6ZSk7XG59XG5mdW5jdGlvbiBtYXliZVJlY3ljbGVDaGlsZE1lcmdlVHJlZShfYSwgbmFtZSkge1xuICAgIHZhciBtYXAgPSBfYS5tYXA7XG4gICAgdmFyIGNoaWxkVHJlZSA9IG1hcC5nZXQobmFtZSk7XG4gICAgaWYgKGNoaWxkVHJlZSAmJiBtZXJnZVRyZWVJc0VtcHR5KGNoaWxkVHJlZSkpIHtcbiAgICAgICAgZW1wdHlNZXJnZVRyZWVQb29sLnB1c2goY2hpbGRUcmVlKTtcbiAgICAgICAgbWFwLmRlbGV0ZShuYW1lKTtcbiAgICB9XG59XG52YXIgd2FybmluZ3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiB3YXJuQWJvdXREYXRhTG9zcyhleGlzdGluZ1JlZiwgaW5jb21pbmdPYmosIHN0b3JlRmllbGROYW1lLCBzdG9yZSkge1xuICAgIHZhciBnZXRDaGlsZCA9IGZ1bmN0aW9uIChvYmpPclJlZikge1xuICAgICAgICB2YXIgY2hpbGQgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKG9iak9yUmVmLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgIHJldHVybiB0eXBlb2YgY2hpbGQgPT09IFwib2JqZWN0XCIgJiYgY2hpbGQ7XG4gICAgfTtcbiAgICB2YXIgZXhpc3RpbmcgPSBnZXRDaGlsZChleGlzdGluZ1JlZik7XG4gICAgaWYgKCFleGlzdGluZylcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciBpbmNvbWluZyA9IGdldENoaWxkKGluY29taW5nT2JqKTtcbiAgICBpZiAoIWluY29taW5nKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShleGlzdGluZykpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoZXF1YWxpdHkuZXF1YWwoZXhpc3RpbmcsIGluY29taW5nKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChPYmplY3Qua2V5cyhleGlzdGluZykuZXZlcnkoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gc3RvcmUuZ2V0RmllbGRWYWx1ZShpbmNvbWluZywga2V5KSAhPT0gdm9pZCAwOyB9KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwYXJlbnRUeXBlID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShleGlzdGluZ1JlZiwgXCJfX3R5cGVuYW1lXCIpIHx8XG4gICAgICAgIHN0b3JlLmdldEZpZWxkVmFsdWUoaW5jb21pbmdPYmosIFwiX190eXBlbmFtZVwiKTtcbiAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgdmFyIHR5cGVEb3ROYW1lID0gXCJcIi5jb25jYXQocGFyZW50VHlwZSwgXCIuXCIpLmNvbmNhdChmaWVsZE5hbWUpO1xuICAgIGlmICh3YXJuaW5ncy5oYXModHlwZURvdE5hbWUpKVxuICAgICAgICByZXR1cm47XG4gICAgd2FybmluZ3MuYWRkKHR5cGVEb3ROYW1lKTtcbiAgICB2YXIgY2hpbGRUeXBlbmFtZXMgPSBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhpc3RpbmcpICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KGluY29taW5nKSkge1xuICAgICAgICBbZXhpc3RpbmcsIGluY29taW5nXS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgdmFyIHR5cGVuYW1lID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShjaGlsZCwgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0eXBlbmFtZSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgICFjaGlsZFR5cGVuYW1lcy5pbmNsdWRlcyh0eXBlbmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFR5cGVuYW1lcy5wdXNoKHR5cGVuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIkNhY2hlIGRhdGEgbWF5IGJlIGxvc3Qgd2hlbiByZXBsYWNpbmcgdGhlIFwiLmNvbmNhdChmaWVsZE5hbWUsIFwiIGZpZWxkIG9mIGEgXCIpLmNvbmNhdChwYXJlbnRUeXBlLCBcIiBvYmplY3QuXFxuXFxuVG8gYWRkcmVzcyB0aGlzIHByb2JsZW0gKHdoaWNoIGlzIG5vdCBhIGJ1ZyBpbiBBcG9sbG8gQ2xpZW50KSwgXCIpLmNvbmNhdChjaGlsZFR5cGVuYW1lcy5sZW5ndGhcbiAgICAgICAgPyBcImVpdGhlciBlbnN1cmUgYWxsIG9iamVjdHMgb2YgdHlwZSBcIiArXG4gICAgICAgICAgICBjaGlsZFR5cGVuYW1lcy5qb2luKFwiIGFuZCBcIikgKyBcIiBoYXZlIGFuIElEIG9yIGEgY3VzdG9tIG1lcmdlIGZ1bmN0aW9uLCBvciBcIlxuICAgICAgICA6IFwiXCIsIFwiZGVmaW5lIGEgY3VzdG9tIG1lcmdlIGZ1bmN0aW9uIGZvciB0aGUgXCIpLmNvbmNhdCh0eXBlRG90TmFtZSwgXCIgZmllbGQsIHNvIEluTWVtb3J5Q2FjaGUgY2FuIHNhZmVseSBtZXJnZSB0aGVzZSBvYmplY3RzOlxcblxcbiAgZXhpc3Rpbmc6IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmcpLnNsaWNlKDAsIDEwMDApLCBcIlxcbiAgaW5jb21pbmc6IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoaW5jb21pbmcpLnNsaWNlKDAsIDEwMDApLCBcIlxcblxcbkZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZXNlIG9wdGlvbnMsIHBsZWFzZSByZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbjpcXG5cXG4gICogRW5zdXJpbmcgZW50aXR5IG9iamVjdHMgaGF2ZSBJRHM6IGh0dHBzOi8vZ28uYXBvbGxvLmRldi9jL2dlbmVyYXRpbmctdW5pcXVlLWlkZW50aWZpZXJzXFxuICAqIERlZmluaW5nIGN1c3RvbSBtZXJnZSBmdW5jdGlvbnM6IGh0dHBzOi8vZ28uYXBvbGxvLmRldi9jL21lcmdpbmctbm9uLW5vcm1hbGl6ZWQtb2JqZWN0c1xcblwiKSk7XG59XG5cbnZhciBJbk1lbW9yeUNhY2hlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoSW5NZW1vcnlDYWNoZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbk1lbW9yeUNhY2hlKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMud2F0Y2hlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgX3RoaXMudHlwZW5hbWVEb2N1bWVudENhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICBfdGhpcy5tYWtlVmFyID0gbWFrZVZhcjtcbiAgICAgICAgX3RoaXMudHhDb3VudCA9IDA7XG4gICAgICAgIF90aGlzLmNvbmZpZyA9IG5vcm1hbGl6ZUNvbmZpZyhjb25maWcpO1xuICAgICAgICBfdGhpcy5hZGRUeXBlbmFtZSA9ICEhX3RoaXMuY29uZmlnLmFkZFR5cGVuYW1lO1xuICAgICAgICBfdGhpcy5wb2xpY2llcyA9IG5ldyBQb2xpY2llcyh7XG4gICAgICAgICAgICBjYWNoZTogX3RoaXMsXG4gICAgICAgICAgICBkYXRhSWRGcm9tT2JqZWN0OiBfdGhpcy5jb25maWcuZGF0YUlkRnJvbU9iamVjdCxcbiAgICAgICAgICAgIHBvc3NpYmxlVHlwZXM6IF90aGlzLmNvbmZpZy5wb3NzaWJsZVR5cGVzLFxuICAgICAgICAgICAgdHlwZVBvbGljaWVzOiBfdGhpcy5jb25maWcudHlwZVBvbGljaWVzLFxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb290U3RvcmUgPSB0aGlzLmRhdGEgPSBuZXcgZXhwb3J0cy5FbnRpdHlTdG9yZS5Sb290KHtcbiAgICAgICAgICAgIHBvbGljaWVzOiB0aGlzLnBvbGljaWVzLFxuICAgICAgICAgICAgcmVzdWx0Q2FjaGluZzogdGhpcy5jb25maWcucmVzdWx0Q2FjaGluZyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub3B0aW1pc3RpY0RhdGEgPSByb290U3RvcmUuc3R1bXA7XG4gICAgICAgIHRoaXMucmVzZXRSZXN1bHRDYWNoZSgpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVzZXRSZXN1bHRDYWNoZSA9IGZ1bmN0aW9uIChyZXNldFJlc3VsdElkZW50aXRpZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHByZXZpb3VzUmVhZGVyID0gdGhpcy5zdG9yZVJlYWRlcjtcbiAgICAgICAgdGhpcy5zdG9yZVdyaXRlciA9IG5ldyBTdG9yZVdyaXRlcih0aGlzLCB0aGlzLnN0b3JlUmVhZGVyID0gbmV3IFN0b3JlUmVhZGVyKHtcbiAgICAgICAgICAgIGNhY2hlOiB0aGlzLFxuICAgICAgICAgICAgYWRkVHlwZW5hbWU6IHRoaXMuYWRkVHlwZW5hbWUsXG4gICAgICAgICAgICByZXN1bHRDYWNoZU1heFNpemU6IHRoaXMuY29uZmlnLnJlc3VsdENhY2hlTWF4U2l6ZSxcbiAgICAgICAgICAgIGNhbm9uaXplUmVzdWx0czogc2hvdWxkQ2Fub25pemVSZXN1bHRzKHRoaXMuY29uZmlnKSxcbiAgICAgICAgICAgIGNhbm9uOiByZXNldFJlc3VsdElkZW50aXRpZXNcbiAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgIDogcHJldmlvdXNSZWFkZXIgJiYgcHJldmlvdXNSZWFkZXIuY2Fub24sXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoID0gb3B0aW1pc20ud3JhcChmdW5jdGlvbiAoYywgb3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmJyb2FkY2FzdFdhdGNoKGMsIG9wdGlvbnMpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtYXg6IHRoaXMuY29uZmlnLnJlc3VsdENhY2hlTWF4U2l6ZSxcbiAgICAgICAgICAgIG1ha2VDYWNoZUtleTogZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSBjLm9wdGltaXN0aWMgPyBfdGhpcy5vcHRpbWlzdGljRGF0YSA6IF90aGlzLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhzdG9yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGltaXN0aWMgPSBjLm9wdGltaXN0aWMsIHJvb3RJZCA9IGMucm9vdElkLCB2YXJpYWJsZXMgPSBjLnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLm1ha2VDYWNoZUtleShjLnF1ZXJ5LCBjLmNhbGxiYWNrLCBjYW5vbmljYWxTdHJpbmdpZnkoeyBvcHRpbWlzdGljOiBvcHRpbWlzdGljLCByb290SWQ6IHJvb3RJZCwgdmFyaWFibGVzOiB2YXJpYWJsZXMgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG5ldyBTZXQoW1xuICAgICAgICAgICAgdGhpcy5kYXRhLmdyb3VwLFxuICAgICAgICAgICAgdGhpcy5vcHRpbWlzdGljRGF0YS5ncm91cCxcbiAgICAgICAgXSkuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXApIHsgcmV0dXJuIGdyb3VwLnJlc2V0Q2FjaGluZygpOyB9KTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlc3RvcmUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgaWYgKGRhdGEpXG4gICAgICAgICAgICB0aGlzLmRhdGEucmVwbGFjZShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIChvcHRpbWlzdGljID8gdGhpcy5vcHRpbWlzdGljRGF0YSA6IHRoaXMuZGF0YSkuZXh0cmFjdCgpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYSA9IG9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEsIHJldHVyblBhcnRpYWxEYXRhID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVJlYWRlci5kaWZmUXVlcnlBZ2FpbnN0U3RvcmUodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHN0b3JlOiBvcHRpb25zLm9wdGltaXN0aWMgPyB0aGlzLm9wdGltaXN0aWNEYXRhIDogdGhpcy5kYXRhLCBjb25maWc6IHRoaXMuY29uZmlnLCByZXR1cm5QYXJ0aWFsRGF0YTogcmV0dXJuUGFydGlhbERhdGEgfSkpLnJlc3VsdCB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1pc3NpbmdGaWVsZEVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICArK3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlV3JpdGVyLndyaXRlVG9TdG9yZSh0aGlzLmRhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKCEtLXRoaXMudHhDb3VudCAmJiBvcHRpb25zLmJyb2FkY2FzdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUubW9kaWZ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGhhc093bi5jYWxsKG9wdGlvbnMsIFwiaWRcIikgJiYgIW9wdGlvbnMuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RvcmUgPSBvcHRpb25zLm9wdGltaXN0aWNcbiAgICAgICAgICAgID8gdGhpcy5vcHRpbWlzdGljRGF0YVxuICAgICAgICAgICAgOiB0aGlzLmRhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICArK3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZS5tb2RpZnkob3B0aW9ucy5pZCB8fCBcIlJPT1RfUVVFUllcIiwgb3B0aW9ucy5maWVsZHMpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKCEtLXRoaXMudHhDb3VudCAmJiBvcHRpb25zLmJyb2FkY2FzdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuZGlmZiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlUmVhZGVyLmRpZmZRdWVyeUFnYWluc3RTdG9yZSh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgc3RvcmU6IG9wdGlvbnMub3B0aW1pc3RpYyA/IHRoaXMub3B0aW1pc3RpY0RhdGEgOiB0aGlzLmRhdGEsIHJvb3RJZDogb3B0aW9ucy5pZCB8fCBcIlJPT1RfUVVFUllcIiwgY29uZmlnOiB0aGlzLmNvbmZpZyB9KSk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uICh3YXRjaCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMud2F0Y2hlcy5zaXplKSB7XG4gICAgICAgICAgICByZWNhbGxDYWNoZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndhdGNoZXMuYWRkKHdhdGNoKTtcbiAgICAgICAgaWYgKHdhdGNoLmltbWVkaWF0ZSkge1xuICAgICAgICAgICAgdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoKHdhdGNoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLndhdGNoZXMuZGVsZXRlKHdhdGNoKSAmJiAhX3RoaXMud2F0Y2hlcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgZm9yZ2V0Q2FjaGUoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMubWF5YmVCcm9hZGNhc3RXYXRjaC5mb3JnZXQod2F0Y2gpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuZ2MgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBjYW5vbmljYWxTdHJpbmdpZnkucmVzZXQoKTtcbiAgICAgICAgdmFyIGlkcyA9IHRoaXMub3B0aW1pc3RpY0RhdGEuZ2MoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgIXRoaXMudHhDb3VudCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVzZXRSZXN1bHRDYWNoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRSZXN1bHRDYWNoZShvcHRpb25zLnJlc2V0UmVzdWx0SWRlbnRpdGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLnJlc2V0UmVzdWx0SWRlbnRpdGllcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVSZWFkZXIucmVzZXRDYW5vbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHM7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZXRhaW4gPSBmdW5jdGlvbiAocm9vdElkLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIHJldHVybiAob3B0aW1pc3RpYyA/IHRoaXMub3B0aW1pc3RpY0RhdGEgOiB0aGlzLmRhdGEpLnJldGFpbihyb290SWQpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIChyb290SWQsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgcmV0dXJuIChvcHRpbWlzdGljID8gdGhpcy5vcHRpbWlzdGljRGF0YSA6IHRoaXMuZGF0YSkucmVsZWFzZShyb290SWQpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqZWN0KSlcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuX19yZWY7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2xpY2llcy5pZGVudGlmeShvYmplY3QpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmV2aWN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLmlkKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwob3B0aW9ucywgXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgaWQ6IFwiUk9PVF9RVUVSWVwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICArK3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGltaXN0aWNEYXRhLmV2aWN0KG9wdGlvbnMsIHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoIS0tdGhpcy50eENvdW50ICYmIG9wdGlvbnMuYnJvYWRjYXN0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICBjYW5vbmljYWxTdHJpbmdpZnkucmVzZXQoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kaXNjYXJkV2F0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy53YXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKHdhdGNoKSB7IHJldHVybiBfdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoLmZvcmdldCh3YXRjaCk7IH0pO1xuICAgICAgICAgICAgdGhpcy53YXRjaGVzLmNsZWFyKCk7XG4gICAgICAgICAgICBmb3JnZXRDYWNoZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlbW92ZU9wdGltaXN0aWMgPSBmdW5jdGlvbiAoaWRUb1JlbW92ZSkge1xuICAgICAgICB2YXIgbmV3T3B0aW1pc3RpY0RhdGEgPSB0aGlzLm9wdGltaXN0aWNEYXRhLnJlbW92ZUxheWVyKGlkVG9SZW1vdmUpO1xuICAgICAgICBpZiAobmV3T3B0aW1pc3RpY0RhdGEgIT09IHRoaXMub3B0aW1pc3RpY0RhdGEpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW1pc3RpY0RhdGEgPSBuZXdPcHRpbWlzdGljRGF0YTtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5iYXRjaCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB1cGRhdGUgPSBvcHRpb25zLnVwZGF0ZSwgX2EgPSBvcHRpb25zLm9wdGltaXN0aWMsIG9wdGltaXN0aWMgPSBfYSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hLCByZW1vdmVPcHRpbWlzdGljID0gb3B0aW9ucy5yZW1vdmVPcHRpbWlzdGljLCBvbldhdGNoVXBkYXRlZCA9IG9wdGlvbnMub25XYXRjaFVwZGF0ZWQ7XG4gICAgICAgIHZhciB1cGRhdGVSZXN1bHQ7XG4gICAgICAgIHZhciBwZXJmb3JtID0gZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcywgZGF0YSA9IF9hLmRhdGEsIG9wdGltaXN0aWNEYXRhID0gX2Eub3B0aW1pc3RpY0RhdGE7XG4gICAgICAgICAgICArK190aGlzLnR4Q291bnQ7XG4gICAgICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5kYXRhID0gX3RoaXMub3B0aW1pc3RpY0RhdGEgPSBsYXllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVJlc3VsdCA9IHVwZGF0ZShfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAtLV90aGlzLnR4Q291bnQ7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW1pc3RpY0RhdGEgPSBvcHRpbWlzdGljRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGFscmVhZHlEaXJ0eSA9IG5ldyBTZXQoKTtcbiAgICAgICAgaWYgKG9uV2F0Y2hVcGRhdGVkICYmICF0aGlzLnR4Q291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcyh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgb25XYXRjaFVwZGF0ZWQ6IGZ1bmN0aW9uICh3YXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGlydHkuYWRkKHdhdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW1pc3RpYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW1pc3RpY0RhdGEgPSB0aGlzLm9wdGltaXN0aWNEYXRhLmFkZExheWVyKG9wdGltaXN0aWMsIHBlcmZvcm0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdGltaXN0aWMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwZXJmb3JtKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwZXJmb3JtKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZW1vdmVPcHRpbWlzdGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGltaXN0aWNEYXRhID0gdGhpcy5vcHRpbWlzdGljRGF0YS5yZW1vdmVMYXllcihyZW1vdmVPcHRpbWlzdGljKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25XYXRjaFVwZGF0ZWQgJiYgYWxyZWFkeURpcnR5LnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcyh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgb25XYXRjaFVwZGF0ZWQ6IGZ1bmN0aW9uICh3YXRjaCwgZGlmZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gb25XYXRjaFVwZGF0ZWQuY2FsbCh0aGlzLCB3YXRjaCwgZGlmZik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGlydHkuZGVsZXRlKHdhdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICAgICAgaWYgKGFscmVhZHlEaXJ0eS5zaXplKSB7XG4gICAgICAgICAgICAgICAgYWxyZWFkeURpcnR5LmZvckVhY2goZnVuY3Rpb24gKHdhdGNoKSB7IHJldHVybiBfdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoLmRpcnR5KHdhdGNoKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVwZGF0ZVJlc3VsdDtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnBlcmZvcm1UcmFuc2FjdGlvbiA9IGZ1bmN0aW9uICh1cGRhdGUsIG9wdGltaXN0aWNJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXRjaCh7XG4gICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICAgICAgICAgIG9wdGltaXN0aWM6IG9wdGltaXN0aWNJZCB8fCAob3B0aW1pc3RpY0lkICE9PSBudWxsKSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS50cmFuc2Zvcm1Eb2N1bWVudCA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICBpZiAodGhpcy5hZGRUeXBlbmFtZSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudHlwZW5hbWVEb2N1bWVudENhY2hlLmdldChkb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHV0aWxpdGllcy5hZGRUeXBlbmFtZVRvRG9jdW1lbnQoZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZW5hbWVEb2N1bWVudENhY2hlLnNldChkb2N1bWVudCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVuYW1lRG9jdW1lbnRDYWNoZS5zZXQocmVzdWx0LCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5icm9hZGNhc3RXYXRjaGVzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLnR4Q291bnQpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBfdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoKGMsIG9wdGlvbnMpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuYnJvYWRjYXN0V2F0Y2ggPSBmdW5jdGlvbiAoYywgb3B0aW9ucykge1xuICAgICAgICB2YXIgbGFzdERpZmYgPSBjLmxhc3REaWZmO1xuICAgICAgICB2YXIgZGlmZiA9IHRoaXMuZGlmZihjKTtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChjLm9wdGltaXN0aWMgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5vcHRpbWlzdGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgZGlmZi5mcm9tT3B0aW1pc3RpY1RyYW5zYWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9uV2F0Y2hVcGRhdGVkICYmXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5vbldhdGNoVXBkYXRlZC5jYWxsKHRoaXMsIGMsIGRpZmYsIGxhc3REaWZmKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsYXN0RGlmZiB8fCAhZXF1YWxpdHkuZXF1YWwobGFzdERpZmYucmVzdWx0LCBkaWZmLnJlc3VsdCkpIHtcbiAgICAgICAgICAgIGMuY2FsbGJhY2soYy5sYXN0RGlmZiA9IGRpZmYsIGxhc3REaWZmKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEluTWVtb3J5Q2FjaGU7XG59KEFwb2xsb0NhY2hlKSk7XG5cbmV4cG9ydHMuaXNSZWZlcmVuY2UgPSB1dGlsaXRpZXMuaXNSZWZlcmVuY2U7XG5leHBvcnRzLm1ha2VSZWZlcmVuY2UgPSB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZTtcbmV4cG9ydHMuQXBvbGxvQ2FjaGUgPSBBcG9sbG9DYWNoZTtcbmV4cG9ydHMuSW5NZW1vcnlDYWNoZSA9IEluTWVtb3J5Q2FjaGU7XG5leHBvcnRzLk1pc3NpbmdGaWVsZEVycm9yID0gTWlzc2luZ0ZpZWxkRXJyb3I7XG5leHBvcnRzLlBvbGljaWVzID0gUG9saWNpZXM7XG5leHBvcnRzLmNhY2hlU2xvdCA9IGNhY2hlU2xvdDtcbmV4cG9ydHMuY2Fub25pY2FsU3RyaW5naWZ5ID0gY2Fub25pY2FsU3RyaW5naWZ5O1xuZXhwb3J0cy5kZWZhdWx0RGF0YUlkRnJvbU9iamVjdCA9IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0O1xuZXhwb3J0cy5maWVsZE5hbWVGcm9tU3RvcmVOYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZTtcbmV4cG9ydHMubWFrZVZhciA9IG1ha2VWYXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWNoZS5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4uL2xpbmsvY29yZScpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcycpO1xudmFyIGh0dHAgPSByZXF1aXJlKCcuLi9saW5rL2h0dHAnKTtcbnZhciBlcXVhbGl0eSA9IHJlcXVpcmUoJ0B3cnkvZXF1YWxpdHknKTtcbnZhciBjYWNoZSA9IHJlcXVpcmUoJy4uL2NhY2hlJyk7XG52YXIgZXJyb3JzID0gcmVxdWlyZSgnLi4vZXJyb3JzJyk7XG52YXIgZ3JhcGhxbCA9IHJlcXVpcmUoJ2dyYXBocWwnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2xpbmsvdXRpbHMnKTtcbnZhciB0c0ludmFyaWFudCA9IHJlcXVpcmUoJ3RzLWludmFyaWFudCcpO1xudmFyIGdyYXBocWxUYWcgPSByZXF1aXJlKCdncmFwaHFsLXRhZycpO1xuXG52YXIgdmVyc2lvbiA9ICczLjUuNic7XG5cbmV4cG9ydHMuTmV0d29ya1N0YXR1cyA9IHZvaWQgMDtcbihmdW5jdGlvbiAoTmV0d29ya1N0YXR1cykge1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcImxvYWRpbmdcIl0gPSAxXSA9IFwibG9hZGluZ1wiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcInNldFZhcmlhYmxlc1wiXSA9IDJdID0gXCJzZXRWYXJpYWJsZXNcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJmZXRjaE1vcmVcIl0gPSAzXSA9IFwiZmV0Y2hNb3JlXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wicmVmZXRjaFwiXSA9IDRdID0gXCJyZWZldGNoXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wicG9sbFwiXSA9IDZdID0gXCJwb2xsXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wicmVhZHlcIl0gPSA3XSA9IFwicmVhZHlcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJlcnJvclwiXSA9IDhdID0gXCJlcnJvclwiO1xufSkoZXhwb3J0cy5OZXR3b3JrU3RhdHVzIHx8IChleHBvcnRzLk5ldHdvcmtTdGF0dXMgPSB7fSkpO1xuZnVuY3Rpb24gaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0KG5ldHdvcmtTdGF0dXMpIHtcbiAgICByZXR1cm4gbmV0d29ya1N0YXR1cyA/IG5ldHdvcmtTdGF0dXMgPCA3IDogZmFsc2U7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduLCBoYXNPd25Qcm9wZXJ0eSQxID0gT2JqZWN0Lmhhc093blByb3BlcnR5O1xudmFyIHdhcm5lZEFib3V0VXBkYXRlUXVlcnkgPSBmYWxzZTtcbnZhciBPYnNlcnZhYmxlUXVlcnkgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhPYnNlcnZhYmxlUXVlcnksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZVF1ZXJ5KF9hKSB7XG4gICAgICAgIHZhciBxdWVyeU1hbmFnZXIgPSBfYS5xdWVyeU1hbmFnZXIsIHF1ZXJ5SW5mbyA9IF9hLnF1ZXJ5SW5mbywgb3B0aW9ucyA9IF9hLm9wdGlvbnM7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgc3ViT2JzZXJ2ZXIgPSBvYnNlcnZlci5fc3Vic2NyaXB0aW9uLl9vYnNlcnZlcjtcbiAgICAgICAgICAgICAgICBpZiAoc3ViT2JzZXJ2ZXIgJiYgIXN1Yk9ic2VydmVyLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk9ic2VydmVyLmVycm9yID0gZGVmYXVsdFN1YnNjcmlwdGlvbk9ic2VydmVyRXJyb3JDYWxsYmFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoX2EpIHsgfVxuICAgICAgICAgICAgdmFyIGZpcnN0ID0gIV90aGlzLm9ic2VydmVycy5zaXplO1xuICAgICAgICAgICAgX3RoaXMub2JzZXJ2ZXJzLmFkZChvYnNlcnZlcik7XG4gICAgICAgICAgICB2YXIgbGFzdCA9IF90aGlzLmxhc3Q7XG4gICAgICAgICAgICBpZiAobGFzdCAmJiBsYXN0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IgJiYgb2JzZXJ2ZXIuZXJyb3IobGFzdC5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsYXN0ICYmIGxhc3QucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCAmJiBvYnNlcnZlci5uZXh0KGxhc3QucmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlb2JzZXJ2ZSgpLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5vYnNlcnZlcnMuZGVsZXRlKG9ic2VydmVyKSAmJiAhX3RoaXMub2JzZXJ2ZXJzLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudGVhckRvd25RdWVyeSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgX3RoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTZXQoKTtcbiAgICAgICAgX3RoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMucXVlcnlJZCA9IHF1ZXJ5SW5mby5xdWVyeUlkIHx8IHF1ZXJ5TWFuYWdlci5nZW5lcmF0ZVF1ZXJ5SWQoKTtcbiAgICAgICAgdmFyIG9wRGVmID0gdXRpbGl0aWVzLmdldE9wZXJhdGlvbkRlZmluaXRpb24ob3B0aW9ucy5xdWVyeSk7XG4gICAgICAgIF90aGlzLnF1ZXJ5TmFtZSA9IG9wRGVmICYmIG9wRGVmLm5hbWUgJiYgb3BEZWYubmFtZS52YWx1ZTtcbiAgICAgICAgX3RoaXMuaW5pdGlhbEZldGNoUG9saWN5ID0gb3B0aW9ucy5mZXRjaFBvbGljeSB8fCBcImNhY2hlLWZpcnN0XCI7XG4gICAgICAgIF90aGlzLnF1ZXJ5TWFuYWdlciA9IHF1ZXJ5TWFuYWdlcjtcbiAgICAgICAgX3RoaXMucXVlcnlJbmZvID0gcXVlcnlJbmZvO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLCBcInZhcmlhYmxlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy52YXJpYWJsZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlc3VsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub2JzZXJ2ZXJzLmRlbGV0ZShvYnNlcnZlcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMub2JzZXJ2ZXJzLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnF1ZXJ5TWFuYWdlci5yZW1vdmVRdWVyeShfdGhpcy5xdWVyeUlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IF90aGlzLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5nZXRDdXJyZW50UmVzdWx0ID0gZnVuY3Rpb24gKHNhdmVBc0xhc3RSZXN1bHQpIHtcbiAgICAgICAgaWYgKHNhdmVBc0xhc3RSZXN1bHQgPT09IHZvaWQgMCkgeyBzYXZlQXNMYXN0UmVzdWx0ID0gdHJ1ZTsgfVxuICAgICAgICB2YXIgbGFzdFJlc3VsdCA9IHRoaXMuZ2V0TGFzdFJlc3VsdCh0cnVlKTtcbiAgICAgICAgdmFyIG5ldHdvcmtTdGF0dXMgPSB0aGlzLnF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzIHx8XG4gICAgICAgICAgICAobGFzdFJlc3VsdCAmJiBsYXN0UmVzdWx0Lm5ldHdvcmtTdGF0dXMpIHx8XG4gICAgICAgICAgICBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVhZHk7XG4gICAgICAgIHZhciByZXN1bHQgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbGFzdFJlc3VsdCksIHsgbG9hZGluZzogaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0KG5ldHdvcmtTdGF0dXMpLCBuZXR3b3JrU3RhdHVzOiBuZXR3b3JrU3RhdHVzIH0pO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLm9wdGlvbnMuZmV0Y2hQb2xpY3ksIGZldGNoUG9saWN5ID0gX2EgPT09IHZvaWQgMCA/IFwiY2FjaGUtZmlyc3RcIiA6IF9hO1xuICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknIHx8XG4gICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ25vLWNhY2hlJyB8fFxuICAgICAgICAgICAgZmV0Y2hQb2xpY3kgPT09ICdzdGFuZGJ5JyB8fFxuICAgICAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIudHJhbnNmb3JtKHRoaXMub3B0aW9ucy5xdWVyeSkuaGFzRm9yY2VkUmVzb2x2ZXJzKSA7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRpZmYgPSB0aGlzLnF1ZXJ5SW5mby5nZXREaWZmKCk7XG4gICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSB8fCB0aGlzLm9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YSA9IGRpZmYucmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5LmVxdWFsKHJlc3VsdC5kYXRhLCB7fSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YSA9IHZvaWQgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWZmLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdC5wYXJ0aWFsO1xuICAgICAgICAgICAgICAgIGlmIChkaWZmLmNvbXBsZXRlICYmXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5uZXR3b3JrU3RhdHVzID09PSBleHBvcnRzLk5ldHdvcmtTdGF0dXMubG9hZGluZyAmJlxuICAgICAgICAgICAgICAgICAgICAoZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1maXJzdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5ID09PSAnY2FjaGUtb25seScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5uZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnJlYWR5O1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wYXJ0aWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX0RFVl9fICYmXG4gICAgICAgICAgICAgICAgIWRpZmYuY29tcGxldGUgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5vcHRpb25zLnBhcnRpYWxSZWZldGNoICYmXG4gICAgICAgICAgICAgICAgIXJlc3VsdC5sb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgIXJlc3VsdC5kYXRhICYmXG4gICAgICAgICAgICAgICAgIXJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgIGxvZ01pc3NpbmdGaWVsZEVycm9ycyhkaWZmLm1pc3NpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzYXZlQXNMYXN0UmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxhc3RSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5pc0RpZmZlcmVudEZyb21MYXN0UmVzdWx0ID0gZnVuY3Rpb24gKG5ld1Jlc3VsdCkge1xuICAgICAgICByZXR1cm4gIXRoaXMubGFzdCB8fCAhZXF1YWxpdHkuZXF1YWwodGhpcy5sYXN0LnJlc3VsdCwgbmV3UmVzdWx0KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuZ2V0TGFzdCA9IGZ1bmN0aW9uIChrZXksIHZhcmlhYmxlc011c3RNYXRjaCkge1xuICAgICAgICB2YXIgbGFzdCA9IHRoaXMubGFzdDtcbiAgICAgICAgaWYgKGxhc3QgJiZcbiAgICAgICAgICAgIGxhc3Rba2V5XSAmJlxuICAgICAgICAgICAgKCF2YXJpYWJsZXNNdXN0TWF0Y2ggfHwgZXF1YWxpdHkuZXF1YWwobGFzdC52YXJpYWJsZXMsIHRoaXMudmFyaWFibGVzKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0W2tleV07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuZ2V0TGFzdFJlc3VsdCA9IGZ1bmN0aW9uICh2YXJpYWJsZXNNdXN0TWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGFzdChcInJlc3VsdFwiLCB2YXJpYWJsZXNNdXN0TWF0Y2gpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5nZXRMYXN0RXJyb3IgPSBmdW5jdGlvbiAodmFyaWFibGVzTXVzdE1hdGNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldExhc3QoXCJlcnJvclwiLCB2YXJpYWJsZXNNdXN0TWF0Y2gpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZXNldExhc3RSZXN1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5sYXN0O1xuICAgICAgICB0aGlzLmlzVG9ybkRvd24gPSBmYWxzZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVzZXRRdWVyeVN0b3JlRXJyb3JzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci5yZXNldEVycm9ycyh0aGlzLnF1ZXJ5SWQpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZWZldGNoID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciByZW9ic2VydmVPcHRpb25zID0ge1xuICAgICAgICAgICAgcG9sbEludGVydmFsOiAwLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgZmV0Y2hQb2xpY3kgPSB0aGlzLm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgIGlmIChmZXRjaFBvbGljeSA9PT0gJ3N0YW5kYnknIHx8IGZldGNoUG9saWN5ID09PSAnY2FjaGUtYW5kLW5ldHdvcmsnKSB7XG4gICAgICAgICAgICByZW9ic2VydmVPcHRpb25zLmZldGNoUG9saWN5ID0gZmV0Y2hQb2xpY3k7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmV0Y2hQb2xpY3kgPT09ICduby1jYWNoZScpIHtcbiAgICAgICAgICAgIHJlb2JzZXJ2ZU9wdGlvbnMuZmV0Y2hQb2xpY3kgPSAnbm8tY2FjaGUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVvYnNlcnZlT3B0aW9ucy5mZXRjaFBvbGljeSA9ICduZXR3b3JrLW9ubHknO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX0RFVl9fICYmIHZhcmlhYmxlcyAmJiBoYXNPd25Qcm9wZXJ0eSQxLmNhbGwodmFyaWFibGVzLCBcInZhcmlhYmxlc1wiKSkge1xuICAgICAgICAgICAgdmFyIHF1ZXJ5RGVmID0gdXRpbGl0aWVzLmdldFF1ZXJ5RGVmaW5pdGlvbih0aGlzLm9wdGlvbnMucXVlcnkpO1xuICAgICAgICAgICAgdmFyIHZhcnMgPSBxdWVyeURlZi52YXJpYWJsZURlZmluaXRpb25zO1xuICAgICAgICAgICAgaWYgKCF2YXJzIHx8ICF2YXJzLnNvbWUoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYudmFyaWFibGUubmFtZS52YWx1ZSA9PT0gXCJ2YXJpYWJsZXNcIjsgfSkpIHtcbiAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJDYWxsZWQgcmVmZXRjaChcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkodmFyaWFibGVzKSwgXCIpIGZvciBxdWVyeSBcIikuY29uY2F0KCgoX2EgPSBxdWVyeURlZi5uYW1lKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWUpIHx8IEpTT04uc3RyaW5naWZ5KHF1ZXJ5RGVmKSwgXCIsIHdoaWNoIGRvZXMgbm90IGRlY2xhcmUgYSAkdmFyaWFibGVzIHZhcmlhYmxlLlxcbkRpZCB5b3UgbWVhbiB0byBjYWxsIHJlZmV0Y2godmFyaWFibGVzKSBpbnN0ZWFkIG9mIHJlZmV0Y2goeyB2YXJpYWJsZXMgfSk/XCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodmFyaWFibGVzICYmICFlcXVhbGl0eS5lcXVhbCh0aGlzLm9wdGlvbnMudmFyaWFibGVzLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICByZW9ic2VydmVPcHRpb25zLnZhcmlhYmxlcyA9IHRoaXMub3B0aW9ucy52YXJpYWJsZXMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zLnZhcmlhYmxlcyksIHZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5xdWVyeUluZm8ucmVzZXRMYXN0V3JpdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVvYnNlcnZlKHJlb2JzZXJ2ZU9wdGlvbnMsIGV4cG9ydHMuTmV0d29ya1N0YXR1cy5yZWZldGNoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuZmV0Y2hNb3JlID0gZnVuY3Rpb24gKGZldGNoTW9yZU9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNvbWJpbmVkT3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCAoZmV0Y2hNb3JlT3B0aW9ucy5xdWVyeSA/IGZldGNoTW9yZU9wdGlvbnMgOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgZmV0Y2hNb3JlT3B0aW9ucyksIHsgdmFyaWFibGVzOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zLnZhcmlhYmxlcyksIGZldGNoTW9yZU9wdGlvbnMudmFyaWFibGVzKSB9KSkpLCB7IGZldGNoUG9saWN5OiBcIm5vLWNhY2hlXCIgfSk7XG4gICAgICAgIHZhciBxaWQgPSB0aGlzLnF1ZXJ5TWFuYWdlci5nZW5lcmF0ZVF1ZXJ5SWQoKTtcbiAgICAgICAgaWYgKGNvbWJpbmVkT3B0aW9ucy5ub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMuZmV0Y2hNb3JlO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLmZldGNoUXVlcnkocWlkLCBjb21iaW5lZE9wdGlvbnMsIGV4cG9ydHMuTmV0d29ya1N0YXR1cy5mZXRjaE1vcmUpLnRoZW4oZnVuY3Rpb24gKGZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBmZXRjaE1vcmVSZXN1bHQuZGF0YTtcbiAgICAgICAgICAgIHZhciB1cGRhdGVRdWVyeSA9IGZldGNoTW9yZU9wdGlvbnMudXBkYXRlUXVlcnk7XG4gICAgICAgICAgICBpZiAodXBkYXRlUXVlcnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoX19ERVZfXyAmJlxuICAgICAgICAgICAgICAgICAgICAhd2FybmVkQWJvdXRVcGRhdGVRdWVyeSkge1xuICAgICAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJUaGUgdXBkYXRlUXVlcnkgY2FsbGJhY2sgZm9yIGZldGNoTW9yZSBpcyBkZXByZWNhdGVkLCBhbmQgd2lsbCBiZSByZW1vdmVkXFxuaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBBcG9sbG8gQ2xpZW50LlxcblxcblBsZWFzZSBjb252ZXJ0IHVwZGF0ZVF1ZXJ5IGZ1bmN0aW9ucyB0byBmaWVsZCBwb2xpY2llcyB3aXRoIGFwcHJvcHJpYXRlXFxucmVhZCBhbmQgbWVyZ2UgZnVuY3Rpb25zLCBvciB1c2UvYWRhcHQgYSBoZWxwZXIgZnVuY3Rpb24gKHN1Y2ggYXNcXG5jb25jYXRQYWdpbmF0aW9uLCBvZmZzZXRMaW1pdFBhZ2luYXRpb24sIG9yIHJlbGF5U3R5bGVQYWdpbmF0aW9uKSBmcm9tXFxuQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzLlxcblxcblRoZSBmaWVsZCBwb2xpY3kgc3lzdGVtIGhhbmRsZXMgcGFnaW5hdGlvbiBtb3JlIGVmZmVjdGl2ZWx5IHRoYW4gYVxcbmhhbmQtd3JpdHRlbiB1cGRhdGVRdWVyeSBmdW5jdGlvbiwgYW5kIHlvdSBvbmx5IG5lZWQgdG8gZGVmaW5lIHRoZSBwb2xpY3lcXG5vbmNlLCByYXRoZXIgdGhhbiBldmVyeSB0aW1lIHlvdSBjYWxsIGZldGNoTW9yZS5cIik7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5lZEFib3V0VXBkYXRlUXVlcnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShmdW5jdGlvbiAocHJldmlvdXMpIHsgcmV0dXJuIHVwZGF0ZVF1ZXJ5KHByZXZpb3VzLCB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoTW9yZVJlc3VsdDogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBjb21iaW5lZE9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnF1ZXJ5TWFuYWdlci5jYWNoZS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGNvbWJpbmVkT3B0aW9ucy5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBjb21iaW5lZE9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZldGNoTW9yZVJlc3VsdDtcbiAgICAgICAgfSkuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5xdWVyeU1hbmFnZXIuc3RvcFF1ZXJ5KHFpZCk7XG4gICAgICAgICAgICBfdGhpcy5yZW9ic2VydmUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnN1YnNjcmliZVRvTW9yZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLnF1ZXJ5TWFuYWdlclxuICAgICAgICAgICAgLnN0YXJ0R3JhcGhRTFN1YnNjcmlwdGlvbih7XG4gICAgICAgICAgICBxdWVyeTogb3B0aW9ucy5kb2N1bWVudCxcbiAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiBvcHRpb25zLmNvbnRleHQsXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChzdWJzY3JpcHRpb25EYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVwZGF0ZVF1ZXJ5ID0gb3B0aW9ucy51cGRhdGVRdWVyeTtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlUXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkoZnVuY3Rpb24gKHByZXZpb3VzLCBfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVRdWVyeShwcmV2aW91cywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkRhdGE6IHN1YnNjcmlwdGlvbkRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMub25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmVycm9yKCdVbmhhbmRsZWQgR3JhcGhRTCBzdWJzY3JpcHRpb24gZXJyb3InLCBlcnIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5zdWJzY3JpcHRpb25zLmRlbGV0ZShzdWJzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAobmV3T3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW9ic2VydmUobmV3T3B0aW9ucyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnNldFZhcmlhYmxlcyA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgaWYgKGVxdWFsaXR5LmVxdWFsKHRoaXMudmFyaWFibGVzLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnMuc2l6ZVxuICAgICAgICAgICAgICAgID8gdGhpcy5yZXN1bHQoKVxuICAgICAgICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICAgICAgaWYgKCF0aGlzLm9ic2VydmVycy5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVvYnNlcnZlKHtcbiAgICAgICAgICAgIGZldGNoUG9saWN5OiB0aGlzLmluaXRpYWxGZXRjaFBvbGljeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICB9LCBleHBvcnRzLk5ldHdvcmtTdGF0dXMuc2V0VmFyaWFibGVzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUudXBkYXRlUXVlcnkgPSBmdW5jdGlvbiAobWFwRm4pIHtcbiAgICAgICAgdmFyIHF1ZXJ5TWFuYWdlciA9IHRoaXMucXVlcnlNYW5hZ2VyO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcXVlcnlNYW5hZ2VyLmNhY2hlLmRpZmYoe1xuICAgICAgICAgICAgcXVlcnk6IHRoaXMub3B0aW9ucy5xdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdGhpcy52YXJpYWJsZXMsXG4gICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICB9KS5yZXN1bHQ7XG4gICAgICAgIHZhciBuZXdSZXN1bHQgPSBtYXBGbihyZXN1bHQsIHtcbiAgICAgICAgICAgIHZhcmlhYmxlczogdGhpcy52YXJpYWJsZXMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmV3UmVzdWx0KSB7XG4gICAgICAgICAgICBxdWVyeU1hbmFnZXIuY2FjaGUud3JpdGVRdWVyeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMub3B0aW9ucy5xdWVyeSxcbiAgICAgICAgICAgICAgICBkYXRhOiBuZXdSZXN1bHQsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB0aGlzLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcXVlcnlNYW5hZ2VyLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5zdGFydFBvbGxpbmcgPSBmdW5jdGlvbiAocG9sbEludGVydmFsKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5wb2xsSW50ZXJ2YWwgPSBwb2xsSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlUG9sbGluZygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5zdG9wUG9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnBvbGxJbnRlcnZhbCA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlUG9sbGluZygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChvcHRpb25zLCBuZXdOZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLnNldE9ic2VydmFibGVRdWVyeSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLmZldGNoUXVlcnlPYnNlcnZhYmxlKHRoaXMucXVlcnlJZCwgb3B0aW9ucywgbmV3TmV0d29ya1N0YXR1cyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnVwZGF0ZVBvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5TWFuYWdlci5zc3JNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcywgcG9sbGluZ0luZm8gPSBfYS5wb2xsaW5nSW5mbywgcG9sbEludGVydmFsID0gX2Eub3B0aW9ucy5wb2xsSW50ZXJ2YWw7XG4gICAgICAgIGlmICghcG9sbEludGVydmFsKSB7XG4gICAgICAgICAgICBpZiAocG9sbGluZ0luZm8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocG9sbGluZ0luZm8udGltZW91dCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucG9sbGluZ0luZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvbGxpbmdJbmZvICYmXG4gICAgICAgICAgICBwb2xsaW5nSW5mby5pbnRlcnZhbCA9PT0gcG9sbEludGVydmFsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KHBvbGxJbnRlcnZhbCwgJ0F0dGVtcHRlZCB0byBzdGFydCBhIHBvbGxpbmcgcXVlcnkgd2l0aG91dCBhIHBvbGxpbmcgaW50ZXJ2YWwuJykgOiBnbG9iYWxzLmludmFyaWFudChwb2xsSW50ZXJ2YWwsIDEwKTtcbiAgICAgICAgdmFyIGluZm8gPSBwb2xsaW5nSW5mbyB8fCAodGhpcy5wb2xsaW5nSW5mbyA9IHt9KTtcbiAgICAgICAgaW5mby5pbnRlcnZhbCA9IHBvbGxJbnRlcnZhbDtcbiAgICAgICAgdmFyIG1heWJlRmV0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMucG9sbGluZ0luZm8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmV0d29ya1JlcXVlc3RJbkZsaWdodChfdGhpcy5xdWVyeUluZm8ubmV0d29ya1N0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVvYnNlcnZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiBcIm5ldHdvcmstb25seVwiLFxuICAgICAgICAgICAgICAgICAgICB9LCBleHBvcnRzLk5ldHdvcmtTdGF0dXMucG9sbCkudGhlbihwb2xsLCBwb2xsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBwb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGluZm8gPSBfdGhpcy5wb2xsaW5nSW5mbztcbiAgICAgICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGluZm8udGltZW91dCk7XG4gICAgICAgICAgICAgICAgaW5mby50aW1lb3V0ID0gc2V0VGltZW91dChtYXliZUZldGNoLCBpbmZvLmludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcG9sbCgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS51cGRhdGVMYXN0UmVzdWx0ID0gZnVuY3Rpb24gKG5ld1Jlc3VsdCwgdmFyaWFibGVzKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZXMgPT09IHZvaWQgMCkgeyB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlczsgfVxuICAgICAgICB0aGlzLmxhc3QgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5sYXN0KSwgeyByZXN1bHQ6IHRoaXMucXVlcnlNYW5hZ2VyLmFzc3VtZUltbXV0YWJsZVJlc3VsdHNcbiAgICAgICAgICAgICAgICA/IG5ld1Jlc3VsdFxuICAgICAgICAgICAgICAgIDogdXRpbGl0aWVzLmNsb25lRGVlcChuZXdSZXN1bHQpLCB2YXJpYWJsZXM6IHZhcmlhYmxlcyB9KTtcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KG5ld1Jlc3VsdC5lcnJvcnMpKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5sYXN0LmVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3Q7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlb2JzZXJ2ZSA9IGZ1bmN0aW9uIChuZXdPcHRpb25zLCBuZXdOZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgICAgICB2YXIgdXNlRGlzcG9zYWJsZUNvbmNhc3QgPSBuZXdOZXR3b3JrU3RhdHVzID09PSBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVmZXRjaCB8fFxuICAgICAgICAgICAgbmV3TmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmZldGNoTW9yZSB8fFxuICAgICAgICAgICAgbmV3TmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnBvbGw7XG4gICAgICAgIHZhciBvbGRWYXJpYWJsZXMgPSB0aGlzLm9wdGlvbnMudmFyaWFibGVzO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHVzZURpc3Bvc2FibGVDb25jYXN0XG4gICAgICAgICAgICA/IHV0aWxpdGllcy5jb21wYWN0KHRoaXMub3B0aW9ucywgbmV3T3B0aW9ucylcbiAgICAgICAgICAgIDogYXNzaWduKHRoaXMub3B0aW9ucywgdXRpbGl0aWVzLmNvbXBhY3QobmV3T3B0aW9ucykpO1xuICAgICAgICBpZiAoIXVzZURpc3Bvc2FibGVDb25jYXN0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvbGxpbmcoKTtcbiAgICAgICAgICAgIGlmIChuZXdPcHRpb25zICYmXG4gICAgICAgICAgICAgICAgbmV3T3B0aW9ucy52YXJpYWJsZXMgJiZcbiAgICAgICAgICAgICAgICAhbmV3T3B0aW9ucy5mZXRjaFBvbGljeSAmJlxuICAgICAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbChuZXdPcHRpb25zLnZhcmlhYmxlcywgb2xkVmFyaWFibGVzKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPSB0aGlzLmluaXRpYWxGZXRjaFBvbGljeTtcbiAgICAgICAgICAgICAgICBpZiAobmV3TmV0d29ya1N0YXR1cyA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld05ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMuc2V0VmFyaWFibGVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFyaWFibGVzID0gb3B0aW9ucy52YXJpYWJsZXMgJiYgdHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMudmFyaWFibGVzKTtcbiAgICAgICAgdmFyIGNvbmNhc3QgPSB0aGlzLmZldGNoKG9wdGlvbnMsIG5ld05ldHdvcmtTdGF0dXMpO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVwb3J0UmVzdWx0KHJlc3VsdCwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVwb3J0RXJyb3IoZXJyb3IsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXVzZURpc3Bvc2FibGVDb25jYXN0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jYXN0ICYmIHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmNhc3QucmVtb3ZlT2JzZXJ2ZXIodGhpcy5vYnNlcnZlciwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbmNhc3QgPSBjb25jYXN0O1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIGNvbmNhc3QuYWRkT2JzZXJ2ZXIob2JzZXJ2ZXIpO1xuICAgICAgICByZXR1cm4gY29uY2FzdC5wcm9taXNlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlcG9ydFJlc3VsdCh0aGlzLmdldEN1cnJlbnRSZXN1bHQoZmFsc2UpLCB0aGlzLnZhcmlhYmxlcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlcG9ydFJlc3VsdCA9IGZ1bmN0aW9uIChyZXN1bHQsIHZhcmlhYmxlcykge1xuICAgICAgICBpZiAodGhpcy5nZXRMYXN0RXJyb3IoKSB8fCB0aGlzLmlzRGlmZmVyZW50RnJvbUxhc3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMYXN0UmVzdWx0KHJlc3VsdCwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgIHV0aWxpdGllcy5pdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5KHRoaXMub2JzZXJ2ZXJzLCAnbmV4dCcsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIHZhcmlhYmxlcykge1xuICAgICAgICB2YXIgZXJyb3JSZXN1bHQgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5nZXRMYXN0UmVzdWx0KCkpLCB7IGVycm9yOiBlcnJvciwgZXJyb3JzOiBlcnJvci5ncmFwaFFMRXJyb3JzLCBuZXR3b3JrU3RhdHVzOiBleHBvcnRzLk5ldHdvcmtTdGF0dXMuZXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhc3RSZXN1bHQoZXJyb3JSZXN1bHQsIHZhcmlhYmxlcyk7XG4gICAgICAgIHV0aWxpdGllcy5pdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5KHRoaXMub2JzZXJ2ZXJzLCAnZXJyb3InLCB0aGlzLmxhc3QuZXJyb3IgPSBlcnJvcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmhhc09ic2VydmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzLnNpemUgPiAwO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS50ZWFyRG93blF1ZXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Rvcm5Eb3duKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5jb25jYXN0ICYmIHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29uY2FzdC5yZW1vdmVPYnNlcnZlcih0aGlzLm9ic2VydmVyKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNvbmNhc3Q7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5vYnNlcnZlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3BQb2xsaW5nKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1Yi51bnN1YnNjcmliZSgpOyB9KTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLnN0b3BRdWVyeSh0aGlzLnF1ZXJ5SWQpO1xuICAgICAgICB0aGlzLm9ic2VydmVycy5jbGVhcigpO1xuICAgICAgICB0aGlzLmlzVG9ybkRvd24gPSB0cnVlO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVRdWVyeTtcbn0odXRpbGl0aWVzLk9ic2VydmFibGUpKTtcbnV0aWxpdGllcy5maXhPYnNlcnZhYmxlU3ViY2xhc3MoT2JzZXJ2YWJsZVF1ZXJ5KTtcbmZ1bmN0aW9uIGRlZmF1bHRTdWJzY3JpcHRpb25PYnNlcnZlckVycm9yQ2FsbGJhY2soZXJyb3IpIHtcbiAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmVycm9yKCdVbmhhbmRsZWQgZXJyb3InLCBlcnJvci5tZXNzYWdlLCBlcnJvci5zdGFjayk7XG59XG5mdW5jdGlvbiBsb2dNaXNzaW5nRmllbGRFcnJvcnMobWlzc2luZykge1xuICAgIGlmIChfX0RFVl9fICYmIG1pc3NpbmcpIHtcbiAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5kZWJ1ZyhcIk1pc3NpbmcgY2FjaGUgcmVzdWx0IGZpZWxkczogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KG1pc3NpbmcpKSwgbWlzc2luZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlOZXh0RmV0Y2hQb2xpY3kob3B0aW9ucykge1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZmV0Y2hQb2xpY3ksIGZldGNoUG9saWN5ID0gX2EgPT09IHZvaWQgMCA/IFwiY2FjaGUtZmlyc3RcIiA6IF9hLCBuZXh0RmV0Y2hQb2xpY3kgPSBvcHRpb25zLm5leHRGZXRjaFBvbGljeTtcbiAgICBpZiAobmV4dEZldGNoUG9saWN5KSB7XG4gICAgICAgIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPSB0eXBlb2YgbmV4dEZldGNoUG9saWN5ID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gbmV4dEZldGNoUG9saWN5LmNhbGwob3B0aW9ucywgZmV0Y2hQb2xpY3kpXG4gICAgICAgICAgICA6IG5leHRGZXRjaFBvbGljeTtcbiAgICB9XG59XG5cbnZhciBMb2NhbFN0YXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMb2NhbFN0YXRlKF9hKSB7XG4gICAgICAgIHZhciBjYWNoZSA9IF9hLmNhY2hlLCBjbGllbnQgPSBfYS5jbGllbnQsIHJlc29sdmVycyA9IF9hLnJlc29sdmVycywgZnJhZ21lbnRNYXRjaGVyID0gX2EuZnJhZ21lbnRNYXRjaGVyO1xuICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgICAgIGlmIChjbGllbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvbHZlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUmVzb2x2ZXJzKHJlc29sdmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyYWdtZW50TWF0Y2hlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRGcmFnbWVudE1hdGNoZXIoZnJhZ21lbnRNYXRjaGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5hZGRSZXNvbHZlcnMgPSBmdW5jdGlvbiAocmVzb2x2ZXJzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzID0gdGhpcy5yZXNvbHZlcnMgfHwge307XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc29sdmVycykpIHtcbiAgICAgICAgICAgIHJlc29sdmVycy5mb3JFYWNoKGZ1bmN0aW9uIChyZXNvbHZlckdyb3VwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzb2x2ZXJzID0gdXRpbGl0aWVzLm1lcmdlRGVlcChfdGhpcy5yZXNvbHZlcnMsIHJlc29sdmVyR3JvdXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmVycyA9IHV0aWxpdGllcy5tZXJnZURlZXAodGhpcy5yZXNvbHZlcnMsIHJlc29sdmVycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnNldFJlc29sdmVycyA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5hZGRSZXNvbHZlcnMocmVzb2x2ZXJzKTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmdldFJlc29sdmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZXJzIHx8IHt9O1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucnVuUmVzb2x2ZXJzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBkb2N1bWVudCA9IF9hLmRvY3VtZW50LCByZW1vdGVSZXN1bHQgPSBfYS5yZW1vdGVSZXN1bHQsIGNvbnRleHQgPSBfYS5jb250ZXh0LCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIF9iID0gX2Eub25seVJ1bkZvcmNlZFJlc29sdmVycywgb25seVJ1bkZvcmNlZFJlc29sdmVycyA9IF9iID09PSB2b2lkIDAgPyBmYWxzZSA6IF9iO1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlRG9jdW1lbnQoZG9jdW1lbnQsIHJlbW90ZVJlc3VsdC5kYXRhLCBjb250ZXh0LCB2YXJpYWJsZXMsIHRoaXMuZnJhZ21lbnRNYXRjaGVyLCBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzKS50aGVuKGZ1bmN0aW9uIChsb2NhbFJlc3VsdCkgeyByZXR1cm4gKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCByZW1vdGVSZXN1bHQpLCB7IGRhdGE6IGxvY2FsUmVzdWx0LnJlc3VsdCB9KSk7IH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCByZW1vdGVSZXN1bHRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuc2V0RnJhZ21lbnRNYXRjaGVyID0gZnVuY3Rpb24gKGZyYWdtZW50TWF0Y2hlcikge1xuICAgICAgICB0aGlzLmZyYWdtZW50TWF0Y2hlciA9IGZyYWdtZW50TWF0Y2hlcjtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmdldEZyYWdtZW50TWF0Y2hlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJhZ21lbnRNYXRjaGVyO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuY2xpZW50UXVlcnkgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5oYXNEaXJlY3RpdmVzKFsnY2xpZW50J10sIGRvY3VtZW50KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuc2VydmVyUXVlcnkgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5yZW1vdmVDbGllbnRTZXRzRnJvbURvY3VtZW50KGRvY3VtZW50KTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnByZXBhcmVDb250ZXh0ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZTtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyBjYWNoZTogY2FjaGUsIGdldENhY2hlS2V5OiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlLmlkZW50aWZ5KG9iaik7XG4gICAgICAgICAgICB9IH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuYWRkRXhwb3J0ZWRWYXJpYWJsZXMgPSBmdW5jdGlvbiAoZG9jdW1lbnQsIHZhcmlhYmxlcywgY29udGV4dCkge1xuICAgICAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0ge307IH1cbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0ge307IH1cbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVzb2x2ZURvY3VtZW50KGRvY3VtZW50LCB0aGlzLmJ1aWxkUm9vdFZhbHVlRnJvbUNhY2hlKGRvY3VtZW50LCB2YXJpYWJsZXMpIHx8IHt9LCB0aGlzLnByZXBhcmVDb250ZXh0KGNvbnRleHQpLCB2YXJpYWJsZXMpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuICh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdmFyaWFibGVzKSwgZGF0YS5leHBvcnRlZFZhcmlhYmxlcykpOyB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdHNsaWIuX19hc3NpZ24oe30sIHZhcmlhYmxlcyldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuc2hvdWxkRm9yY2VSZXNvbHZlcnMgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIGZvcmNlUmVzb2x2ZXJzID0gZmFsc2U7XG4gICAgICAgIGdyYXBocWwudmlzaXQoZG9jdW1lbnQsIHtcbiAgICAgICAgICAgIERpcmVjdGl2ZToge1xuICAgICAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5uYW1lLnZhbHVlID09PSAnY2xpZW50JyAmJiBub2RlLmFyZ3VtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VSZXNvbHZlcnMgPSBub2RlLmFyZ3VtZW50cy5zb21lKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnLm5hbWUudmFsdWUgPT09ICdhbHdheXMnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZy52YWx1ZS5raW5kID09PSAnQm9vbGVhblZhbHVlJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmcudmFsdWUudmFsdWUgPT09IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JjZVJlc29sdmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBncmFwaHFsLkJSRUFLO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9yY2VSZXNvbHZlcnM7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5idWlsZFJvb3RWYWx1ZUZyb21DYWNoZSA9IGZ1bmN0aW9uIChkb2N1bWVudCwgdmFyaWFibGVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLmRpZmYoe1xuICAgICAgICAgICAgcXVlcnk6IHV0aWxpdGllcy5idWlsZFF1ZXJ5RnJvbVNlbGVjdGlvblNldChkb2N1bWVudCksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiB0cnVlLFxuICAgICAgICAgICAgb3B0aW1pc3RpYzogZmFsc2UsXG4gICAgICAgIH0pLnJlc3VsdDtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnJlc29sdmVEb2N1bWVudCA9IGZ1bmN0aW9uIChkb2N1bWVudCwgcm9vdFZhbHVlLCBjb250ZXh0LCB2YXJpYWJsZXMsIGZyYWdtZW50TWF0Y2hlciwgb25seVJ1bkZvcmNlZFJlc29sdmVycykge1xuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgICAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0ge307IH1cbiAgICAgICAgaWYgKGZyYWdtZW50TWF0Y2hlciA9PT0gdm9pZCAwKSB7IGZyYWdtZW50TWF0Y2hlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH07IH1cbiAgICAgICAgaWYgKG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMgPT09IHZvaWQgMCkgeyBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1haW5EZWZpbml0aW9uLCBmcmFnbWVudHMsIGZyYWdtZW50TWFwLCBkZWZpbml0aW9uT3BlcmF0aW9uLCBkZWZhdWx0T3BlcmF0aW9uVHlwZSwgX2EsIGNhY2hlLCBjbGllbnQsIGV4ZWNDb250ZXh0O1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIG1haW5EZWZpbml0aW9uID0gdXRpbGl0aWVzLmdldE1haW5EZWZpbml0aW9uKGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICBmcmFnbWVudHMgPSB1dGlsaXRpZXMuZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhkb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRNYXAgPSB1dGlsaXRpZXMuY3JlYXRlRnJhZ21lbnRNYXAoZnJhZ21lbnRzKTtcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uT3BlcmF0aW9uID0gbWFpbkRlZmluaXRpb25cbiAgICAgICAgICAgICAgICAgICAgLm9wZXJhdGlvbjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0T3BlcmF0aW9uVHlwZSA9IGRlZmluaXRpb25PcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPyBkZWZpbml0aW9uT3BlcmF0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25PcGVyYXRpb24uc2xpY2UoMSlcbiAgICAgICAgICAgICAgICAgICAgOiAnUXVlcnknO1xuICAgICAgICAgICAgICAgIF9hID0gdGhpcywgY2FjaGUgPSBfYS5jYWNoZSwgY2xpZW50ID0gX2EuY2xpZW50O1xuICAgICAgICAgICAgICAgIGV4ZWNDb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudE1hcDogZnJhZ21lbnRNYXAsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyBjYWNoZTogY2FjaGUsIGNsaWVudDogY2xpZW50IH0pLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRNYXRjaGVyOiBmcmFnbWVudE1hdGNoZXIsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRPcGVyYXRpb25UeXBlOiBkZWZhdWx0T3BlcmF0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0ZWRWYXJpYWJsZXM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzOiBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlc29sdmVTZWxlY3Rpb25TZXQobWFpbkRlZmluaXRpb24uc2VsZWN0aW9uU2V0LCByb290VmFsdWUsIGV4ZWNDb250ZXh0KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydGVkVmFyaWFibGVzOiBleGVjQ29udGV4dC5leHBvcnRlZFZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgfSk7IH0pXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnJlc29sdmVTZWxlY3Rpb25TZXQgPSBmdW5jdGlvbiAoc2VsZWN0aW9uU2V0LCByb290VmFsdWUsIGV4ZWNDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudE1hcCwgY29udGV4dCwgdmFyaWFibGVzLCByZXN1bHRzVG9NZXJnZSwgZXhlY3V0ZTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRNYXAgPSBleGVjQ29udGV4dC5mcmFnbWVudE1hcCwgY29udGV4dCA9IGV4ZWNDb250ZXh0LmNvbnRleHQsIHZhcmlhYmxlcyA9IGV4ZWNDb250ZXh0LnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICByZXN1bHRzVG9NZXJnZSA9IFtyb290VmFsdWVdO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGUgPSBmdW5jdGlvbiAoc2VsZWN0aW9uKSB7IHJldHVybiB0c2xpYi5fX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmcmFnbWVudCwgdHlwZUNvbmRpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1dGlsaXRpZXMuc2hvdWxkSW5jbHVkZShzZWxlY3Rpb24sIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc0ZpZWxkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVzb2x2ZUZpZWxkKHNlbGVjdGlvbiwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkudGhlbihmdW5jdGlvbiAoZmllbGRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZmllbGRSZXN1bHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1RvTWVyZ2UucHVzaCgoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FbdXRpbGl0aWVzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQoc2VsZWN0aW9uKV0gPSBmaWVsZFJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc0lubGluZUZyYWdtZW50KHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IHNlbGVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gZnJhZ21lbnRNYXBbc2VsZWN0aW9uLm5hbWUudmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudCwgXCJObyBmcmFnbWVudCBuYW1lZCBcIi5jb25jYXQoc2VsZWN0aW9uLm5hbWUudmFsdWUpKSA6IGdsb2JhbHMuaW52YXJpYW50KGZyYWdtZW50LCA5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcmFnbWVudCAmJiBmcmFnbWVudC50eXBlQ29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUNvbmRpdGlvbiA9IGZyYWdtZW50LnR5cGVDb25kaXRpb24ubmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhlY0NvbnRleHQuZnJhZ21lbnRNYXRjaGVyKHJvb3RWYWx1ZSwgdHlwZUNvbmRpdGlvbiwgY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlc29sdmVTZWxlY3Rpb25TZXQoZnJhZ21lbnQuc2VsZWN0aW9uU2V0LCByb290VmFsdWUsIGV4ZWNDb250ZXh0KS50aGVuKGZ1bmN0aW9uIChmcmFnbWVudFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNUb01lcmdlLnB1c2goZnJhZ21lbnRSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pOyB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgUHJvbWlzZS5hbGwoc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMubWFwKGV4ZWN1dGUpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlsaXRpZXMubWVyZ2VEZWVwQXJyYXkocmVzdWx0c1RvTWVyZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5yZXNvbHZlRmllbGQgPSBmdW5jdGlvbiAoZmllbGQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHZhcmlhYmxlcywgZmllbGROYW1lLCBhbGlhc2VkRmllbGROYW1lLCBhbGlhc1VzZWQsIGRlZmF1bHRSZXN1bHQsIHJlc3VsdFByb21pc2UsIHJlc29sdmVyVHlwZSwgcmVzb2x2ZXJNYXAsIHJlc29sdmU7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyA9IGV4ZWNDb250ZXh0LnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSBmaWVsZC5uYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgIGFsaWFzZWRGaWVsZE5hbWUgPSB1dGlsaXRpZXMucmVzdWx0S2V5TmFtZUZyb21GaWVsZChmaWVsZCk7XG4gICAgICAgICAgICAgICAgYWxpYXNVc2VkID0gZmllbGROYW1lICE9PSBhbGlhc2VkRmllbGROYW1lO1xuICAgICAgICAgICAgICAgIGRlZmF1bHRSZXN1bHQgPSByb290VmFsdWVbYWxpYXNlZEZpZWxkTmFtZV0gfHwgcm9vdFZhbHVlW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgcmVzdWx0UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShkZWZhdWx0UmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoIWV4ZWNDb250ZXh0Lm9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG91bGRGb3JjZVJlc29sdmVycyhmaWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJUeXBlID0gcm9vdFZhbHVlLl9fdHlwZW5hbWUgfHwgZXhlY0NvbnRleHQuZGVmYXVsdE9wZXJhdGlvblR5cGU7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyTWFwID0gdGhpcy5yZXNvbHZlcnMgJiYgdGhpcy5yZXNvbHZlcnNbcmVzb2x2ZXJUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc29sdmVyTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gcmVzb2x2ZXJNYXBbYWxpYXNVc2VkID8gZmllbGROYW1lIDogYWxpYXNlZEZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY2FjaGUuY2FjaGVTbG90LndpdGhWYWx1ZSh0aGlzLmNhY2hlLCByZXNvbHZlLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbGl0aWVzLmFyZ3VtZW50c09iamVjdEZyb21GaWVsZChmaWVsZCwgdmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY0NvbnRleHQuY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBmaWVsZDogZmllbGQsIGZyYWdtZW50TWFwOiBleGVjQ29udGV4dC5mcmFnbWVudE1hcCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHJlc3VsdFByb21pc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIHsgcmVzdWx0ID0gZGVmYXVsdFJlc3VsdDsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRpcmVjdGl2ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXJlY3RpdmVzLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aXZlLm5hbWUudmFsdWUgPT09ICdleHBvcnQnICYmIGRpcmVjdGl2ZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZS5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZy5uYW1lLnZhbHVlID09PSAnYXMnICYmIGFyZy52YWx1ZS5raW5kID09PSAnU3RyaW5nVmFsdWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWNDb250ZXh0LmV4cG9ydGVkVmFyaWFibGVzW2FyZy52YWx1ZS52YWx1ZV0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmVTdWJTZWxlY3RlZEFycmF5KGZpZWxkLCByZXN1bHQsIGV4ZWNDb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVNlbGVjdGlvblNldChmaWVsZC5zZWxlY3Rpb25TZXQsIHJlc3VsdCwgZXhlY0NvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5yZXNvbHZlU3ViU2VsZWN0ZWRBcnJheSA9IGZ1bmN0aW9uIChmaWVsZCwgcmVzdWx0LCBleGVjQ29udGV4dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmVTdWJTZWxlY3RlZEFycmF5KGZpZWxkLCBpdGVtLCBleGVjQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmVTZWxlY3Rpb25TZXQoZmllbGQuc2VsZWN0aW9uU2V0LCBpdGVtLCBleGVjQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiBMb2NhbFN0YXRlO1xufSgpKTtcblxudmFyIGRlc3RydWN0aXZlTWV0aG9kQ291bnRzID0gbmV3ICh1dGlsaXRpZXMuY2FuVXNlV2Vha01hcCA/IFdlYWtNYXAgOiBNYXApKCk7XG5mdW5jdGlvbiB3cmFwRGVzdHJ1Y3RpdmVDYWNoZU1ldGhvZChjYWNoZSwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBvcmlnaW5hbCA9IGNhY2hlW21ldGhvZE5hbWVdO1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWwgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWNoZVttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlc3RydWN0aXZlTWV0aG9kQ291bnRzLnNldChjYWNoZSwgKGRlc3RydWN0aXZlTWV0aG9kQ291bnRzLmdldChjYWNoZSkgKyAxKSAlIDFlMTUpO1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfVxufVxuZnVuY3Rpb24gY2FuY2VsTm90aWZ5VGltZW91dChpbmZvKSB7XG4gICAgaWYgKGluZm9bXCJub3RpZnlUaW1lb3V0XCJdKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChpbmZvW1wibm90aWZ5VGltZW91dFwiXSk7XG4gICAgICAgIGluZm9bXCJub3RpZnlUaW1lb3V0XCJdID0gdm9pZCAwO1xuICAgIH1cbn1cbnZhciBRdWVyeUluZm8gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFF1ZXJ5SW5mbyhxdWVyeU1hbmFnZXIsIHF1ZXJ5SWQpIHtcbiAgICAgICAgaWYgKHF1ZXJ5SWQgPT09IHZvaWQgMCkgeyBxdWVyeUlkID0gcXVlcnlNYW5hZ2VyLmdlbmVyYXRlUXVlcnlJZCgpOyB9XG4gICAgICAgIHRoaXMucXVlcnlJZCA9IHF1ZXJ5SWQ7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmRvY3VtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0UmVxdWVzdElkID0gMTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9ic2VydmFibGVRdWVyeSA9IG51bGw7XG4gICAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGUgPSBxdWVyeU1hbmFnZXIuY2FjaGU7XG4gICAgICAgIGlmICghZGVzdHJ1Y3RpdmVNZXRob2RDb3VudHMuaGFzKGNhY2hlKSkge1xuICAgICAgICAgICAgZGVzdHJ1Y3RpdmVNZXRob2RDb3VudHMuc2V0KGNhY2hlLCAwKTtcbiAgICAgICAgICAgIHdyYXBEZXN0cnVjdGl2ZUNhY2hlTWV0aG9kKGNhY2hlLCBcImV2aWN0XCIpO1xuICAgICAgICAgICAgd3JhcERlc3RydWN0aXZlQ2FjaGVNZXRob2QoY2FjaGUsIFwibW9kaWZ5XCIpO1xuICAgICAgICAgICAgd3JhcERlc3RydWN0aXZlQ2FjaGVNZXRob2QoY2FjaGUsIFwicmVzZXRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHZhciBuZXR3b3JrU3RhdHVzID0gcXVlcnkubmV0d29ya1N0YXR1cyB8fCBleHBvcnRzLk5ldHdvcmtTdGF0dXMubG9hZGluZztcbiAgICAgICAgaWYgKHRoaXMudmFyaWFibGVzICYmXG4gICAgICAgICAgICB0aGlzLm5ldHdvcmtTdGF0dXMgIT09IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5sb2FkaW5nICYmXG4gICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwodGhpcy52YXJpYWJsZXMsIHF1ZXJ5LnZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgIG5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMuc2V0VmFyaWFibGVzO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZXF1YWxpdHkuZXF1YWwocXVlcnkudmFyaWFibGVzLCB0aGlzLnZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdERpZmYgPSB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICAgICAgICBkb2N1bWVudDogcXVlcnkuZG9jdW1lbnQsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHF1ZXJ5LnZhcmlhYmxlcyxcbiAgICAgICAgICAgIG5ldHdvcmtFcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IHRoaXMuZ3JhcGhRTEVycm9ycyB8fCBbXSxcbiAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocXVlcnkub2JzZXJ2YWJsZVF1ZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLnNldE9ic2VydmFibGVRdWVyeShxdWVyeS5vYnNlcnZhYmxlUXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChxdWVyeS5sYXN0UmVxdWVzdElkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RSZXF1ZXN0SWQgPSBxdWVyeS5sYXN0UmVxdWVzdElkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsTm90aWZ5VGltZW91dCh0aGlzKTtcbiAgICAgICAgdGhpcy5sYXN0RGlmZiA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5nZXREaWZmID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7IH1cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdldERpZmZPcHRpb25zKHZhcmlhYmxlcyk7XG4gICAgICAgIGlmICh0aGlzLmxhc3REaWZmICYmIGVxdWFsaXR5LmVxdWFsKG9wdGlvbnMsIHRoaXMubGFzdERpZmYub3B0aW9ucykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxhc3REaWZmLmRpZmY7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVXYXRjaCh0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcyk7XG4gICAgICAgIHZhciBvcSA9IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICBpZiAob3EgJiYgb3Eub3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gXCJuby1jYWNoZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4geyBjb21wbGV0ZTogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGlmZiA9IHRoaXMuY2FjaGUuZGlmZihvcHRpb25zKTtcbiAgICAgICAgdGhpcy51cGRhdGVMYXN0RGlmZihkaWZmLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGRpZmY7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnVwZGF0ZUxhc3REaWZmID0gZnVuY3Rpb24gKGRpZmYsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5sYXN0RGlmZiA9IGRpZmYgPyB7XG4gICAgICAgICAgICBkaWZmOiBkaWZmLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCB0aGlzLmdldERpZmZPcHRpb25zKCksXG4gICAgICAgIH0gOiB2b2lkIDA7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLmdldERpZmZPcHRpb25zID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2YXJpYWJsZXMgPT09IHZvaWQgMCkgeyB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlczsgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcXVlcnk6IHRoaXMuZG9jdW1lbnQsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiB0cnVlLFxuICAgICAgICAgICAgb3B0aW1pc3RpYzogdHJ1ZSxcbiAgICAgICAgICAgIGNhbm9uaXplUmVzdWx0czogKF9hID0gdGhpcy5vYnNlcnZhYmxlUXVlcnkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vcHRpb25zLmNhbm9uaXplUmVzdWx0cyxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuc2V0RGlmZiA9IGZ1bmN0aW9uIChkaWZmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBvbGREaWZmID0gdGhpcy5sYXN0RGlmZiAmJiB0aGlzLmxhc3REaWZmLmRpZmY7XG4gICAgICAgIHRoaXMudXBkYXRlTGFzdERpZmYoZGlmZik7XG4gICAgICAgIGlmICghdGhpcy5kaXJ0eSAmJlxuICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKG9sZERpZmYgJiYgb2xkRGlmZi5yZXN1bHQsIGRpZmYgJiYgZGlmZi5yZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub3RpZnlUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5ub3RpZnkoKTsgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuc2V0T2JzZXJ2YWJsZVF1ZXJ5ID0gZnVuY3Rpb24gKG9xKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChvcSA9PT0gdGhpcy5vYnNlcnZhYmxlUXVlcnkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLm9xTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmRlbGV0ZSh0aGlzLm9xTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZVF1ZXJ5ID0gb3E7XG4gICAgICAgIGlmIChvcSkge1xuICAgICAgICAgICAgb3FbXCJxdWVyeUluZm9cIl0gPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuYWRkKHRoaXMub3FMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZ2V0RGlmZigpLmZyb21PcHRpbWlzdGljVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgb3FbXCJvYnNlcnZlXCJdKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcS5yZW9ic2VydmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9xTGlzdGVuZXI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjYW5jZWxOb3RpZnlUaW1lb3V0KHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGROb3RpZnkoKSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKF90aGlzKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5zaG91bGROb3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5kaXJ0eSB8fCAhdGhpcy5saXN0ZW5lcnMuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQodGhpcy5uZXR3b3JrU3RhdHVzKSAmJlxuICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlUXVlcnkpIHtcbiAgICAgICAgICAgIHZhciBmZXRjaFBvbGljeSA9IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5Lm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgIT09IFwiY2FjaGUtb25seVwiICYmXG4gICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3kgIT09IFwiY2FjaGUtYW5kLW5ldHdvcmtcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwgPSBRdWVyeUluZm8ucHJvdG90eXBlLmNhbmNlbDtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1Yi51bnN1YnNjcmliZSgpOyB9KTtcbiAgICAgICAgICAgIHZhciBvcSA9IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICAgICAgaWYgKG9xKVxuICAgICAgICAgICAgICAgIG9xLnN0b3BQb2xsaW5nKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUudXBkYXRlV2F0Y2ggPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh2YXJpYWJsZXMgPT09IHZvaWQgMCkgeyB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlczsgfVxuICAgICAgICB2YXIgb3EgPSB0aGlzLm9ic2VydmFibGVRdWVyeTtcbiAgICAgICAgaWYgKG9xICYmIG9xLm9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09IFwibm8tY2FjaGVcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3YXRjaE9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5nZXREaWZmT3B0aW9ucyh2YXJpYWJsZXMpKSwgeyB3YXRjaGVyOiB0aGlzLCBjYWxsYmFjazogZnVuY3Rpb24gKGRpZmYpIHsgcmV0dXJuIF90aGlzLnNldERpZmYoZGlmZik7IH0gfSk7XG4gICAgICAgIGlmICghdGhpcy5sYXN0V2F0Y2ggfHxcbiAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbCh3YXRjaE9wdGlvbnMsIHRoaXMubGFzdFdhdGNoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsID0gdGhpcy5jYWNoZS53YXRjaCh0aGlzLmxhc3RXYXRjaCA9IHdhdGNoT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUucmVzZXRMYXN0V3JpdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGFzdFdyaXRlID0gdm9pZCAwO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5zaG91bGRXcml0ZSA9IGZ1bmN0aW9uIChyZXN1bHQsIHZhcmlhYmxlcykge1xuICAgICAgICB2YXIgbGFzdFdyaXRlID0gdGhpcy5sYXN0V3JpdGU7XG4gICAgICAgIHJldHVybiAhKGxhc3RXcml0ZSAmJlxuICAgICAgICAgICAgbGFzdFdyaXRlLmRtQ291bnQgPT09IGRlc3RydWN0aXZlTWV0aG9kQ291bnRzLmdldCh0aGlzLmNhY2hlKSAmJlxuICAgICAgICAgICAgZXF1YWxpdHkuZXF1YWwodmFyaWFibGVzLCBsYXN0V3JpdGUudmFyaWFibGVzKSAmJlxuICAgICAgICAgICAgZXF1YWxpdHkuZXF1YWwocmVzdWx0LmRhdGEsIGxhc3RXcml0ZS5yZXN1bHQuZGF0YSkpO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5tYXJrUmVzdWx0ID0gZnVuY3Rpb24gKHJlc3VsdCwgb3B0aW9ucywgY2FjaGVXcml0ZUJlaGF2aW9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZ3JhcGhRTEVycm9ycyA9IHV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkocmVzdWx0LmVycm9ycykgPyByZXN1bHQuZXJyb3JzIDogW107XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICduby1jYWNoZScpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFzdERpZmYoeyByZXN1bHQ6IHJlc3VsdC5kYXRhLCBjb21wbGV0ZTogdHJ1ZSB9LCB0aGlzLmdldERpZmZPcHRpb25zKG9wdGlvbnMudmFyaWFibGVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2FjaGVXcml0ZUJlaGF2aW9yICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkV3JpdGVSZXN1bHQocmVzdWx0LCBvcHRpb25zLmVycm9yUG9saWN5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucGVyZm9ybVRyYW5zYWN0aW9uKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc2hvdWxkV3JpdGUocmVzdWx0LCBvcHRpb25zLnZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBfdGhpcy5kb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJ3cml0ZTogY2FjaGVXcml0ZUJlaGF2aW9yID09PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXN0V3JpdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbUNvdW50OiBkZXN0cnVjdGl2ZU1ldGhvZENvdW50cy5nZXQoX3RoaXMuY2FjaGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sYXN0RGlmZiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxhc3REaWZmLmRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGF0YSA9IF90aGlzLmxhc3REaWZmLmRpZmYucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlmZk9wdGlvbnMgPSBfdGhpcy5nZXREaWZmT3B0aW9ucyhvcHRpb25zLnZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaWZmID0gY2FjaGUuZGlmZihkaWZmT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlV2F0Y2gob3B0aW9ucy52YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZUxhc3REaWZmKGRpZmYsIGRpZmZPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gZGlmZi5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFdyaXRlID0gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLm1hcmtSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5uZXR3b3JrRXJyb3IgPSBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnJlYWR5O1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5tYXJrRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5uZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmVycm9yO1xuICAgICAgICB0aGlzLmxhc3RXcml0ZSA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICBpZiAoZXJyb3IuZ3JhcGhRTEVycm9ycykge1xuICAgICAgICAgICAgdGhpcy5ncmFwaFFMRXJyb3JzID0gZXJyb3IuZ3JhcGhRTEVycm9ycztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IubmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICB0aGlzLm5ldHdvcmtFcnJvciA9IGVycm9yLm5ldHdvcmtFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfTtcbiAgICByZXR1cm4gUXVlcnlJbmZvO1xufSgpKTtcbmZ1bmN0aW9uIHNob3VsZFdyaXRlUmVzdWx0KHJlc3VsdCwgZXJyb3JQb2xpY3kpIHtcbiAgICBpZiAoZXJyb3JQb2xpY3kgPT09IHZvaWQgMCkgeyBlcnJvclBvbGljeSA9IFwibm9uZVwiOyB9XG4gICAgdmFyIGlnbm9yZUVycm9ycyA9IGVycm9yUG9saWN5ID09PSBcImlnbm9yZVwiIHx8XG4gICAgICAgIGVycm9yUG9saWN5ID09PSBcImFsbFwiO1xuICAgIHZhciB3cml0ZVdpdGhFcnJvcnMgPSAhdXRpbGl0aWVzLmdyYXBoUUxSZXN1bHRIYXNFcnJvcihyZXN1bHQpO1xuICAgIGlmICghd3JpdGVXaXRoRXJyb3JzICYmIGlnbm9yZUVycm9ycyAmJiByZXN1bHQuZGF0YSkge1xuICAgICAgICB3cml0ZVdpdGhFcnJvcnMgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVXaXRoRXJyb3JzO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFF1ZXJ5TWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUXVlcnlNYW5hZ2VyKF9hKSB7XG4gICAgICAgIHZhciBjYWNoZSA9IF9hLmNhY2hlLCBsaW5rID0gX2EubGluaywgX2IgPSBfYS5xdWVyeURlZHVwbGljYXRpb24sIHF1ZXJ5RGVkdXBsaWNhdGlvbiA9IF9iID09PSB2b2lkIDAgPyBmYWxzZSA6IF9iLCBvbkJyb2FkY2FzdCA9IF9hLm9uQnJvYWRjYXN0LCBfYyA9IF9hLnNzck1vZGUsIHNzck1vZGUgPSBfYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYywgX2QgPSBfYS5jbGllbnRBd2FyZW5lc3MsIGNsaWVudEF3YXJlbmVzcyA9IF9kID09PSB2b2lkIDAgPyB7fSA6IF9kLCBsb2NhbFN0YXRlID0gX2EubG9jYWxTdGF0ZSwgYXNzdW1lSW1tdXRhYmxlUmVzdWx0cyA9IF9hLmFzc3VtZUltbXV0YWJsZVJlc3VsdHM7XG4gICAgICAgIHRoaXMuY2xpZW50QXdhcmVuZXNzID0ge307XG4gICAgICAgIHRoaXMucXVlcmllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5mZXRjaENhbmNlbEZucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1DYWNoZSA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtNYXAgPyBXZWFrTWFwIDogTWFwKSgpO1xuICAgICAgICB0aGlzLnF1ZXJ5SWRDb3VudGVyID0gMTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWRDb3VudGVyID0gMTtcbiAgICAgICAgdGhpcy5tdXRhdGlvbklkQ291bnRlciA9IDE7XG4gICAgICAgIHRoaXMuaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgICAgICAgdGhpcy5saW5rID0gbGluaztcbiAgICAgICAgdGhpcy5xdWVyeURlZHVwbGljYXRpb24gPSBxdWVyeURlZHVwbGljYXRpb247XG4gICAgICAgIHRoaXMuY2xpZW50QXdhcmVuZXNzID0gY2xpZW50QXdhcmVuZXNzO1xuICAgICAgICB0aGlzLmxvY2FsU3RhdGUgPSBsb2NhbFN0YXRlIHx8IG5ldyBMb2NhbFN0YXRlKHsgY2FjaGU6IGNhY2hlIH0pO1xuICAgICAgICB0aGlzLnNzck1vZGUgPSBzc3JNb2RlO1xuICAgICAgICB0aGlzLmFzc3VtZUltbXV0YWJsZVJlc3VsdHMgPSAhIWFzc3VtZUltbXV0YWJsZVJlc3VsdHM7XG4gICAgICAgIGlmICgodGhpcy5vbkJyb2FkY2FzdCA9IG9uQnJvYWRjYXN0KSkge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvblN0b3JlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChfaW5mbywgcXVlcnlJZCkge1xuICAgICAgICAgICAgX3RoaXMuc3RvcFF1ZXJ5Tm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbmNlbFBlbmRpbmdGZXRjaGVzKF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcignUXVlcnlNYW5hZ2VyIHN0b3BwZWQgd2hpbGUgcXVlcnkgd2FzIGluIGZsaWdodCcpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoMTEpKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuY2FuY2VsUGVuZGluZ0ZldGNoZXMgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5mZXRjaENhbmNlbEZucy5mb3JFYWNoKGZ1bmN0aW9uIChjYW5jZWwpIHsgcmV0dXJuIGNhbmNlbChlcnJvcik7IH0pO1xuICAgICAgICB0aGlzLmZldGNoQ2FuY2VsRm5zLmNsZWFyKCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLm11dGF0ZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbXV0YXRpb24gPSBfYS5tdXRhdGlvbiwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBvcHRpbWlzdGljUmVzcG9uc2UgPSBfYS5vcHRpbWlzdGljUmVzcG9uc2UsIHVwZGF0ZVF1ZXJpZXMgPSBfYS51cGRhdGVRdWVyaWVzLCBfYiA9IF9hLnJlZmV0Y2hRdWVyaWVzLCByZWZldGNoUXVlcmllcyA9IF9iID09PSB2b2lkIDAgPyBbXSA6IF9iLCBfYyA9IF9hLmF3YWl0UmVmZXRjaFF1ZXJpZXMsIGF3YWl0UmVmZXRjaFF1ZXJpZXMgPSBfYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYywgdXBkYXRlV2l0aFByb3h5Rm4gPSBfYS51cGRhdGUsIG9uUXVlcnlVcGRhdGVkID0gX2Eub25RdWVyeVVwZGF0ZWQsIF9kID0gX2EuZXJyb3JQb2xpY3ksIGVycm9yUG9saWN5ID0gX2QgPT09IHZvaWQgMCA/ICdub25lJyA6IF9kLCBfZSA9IF9hLmZldGNoUG9saWN5LCBmZXRjaFBvbGljeSA9IF9lID09PSB2b2lkIDAgPyAnbmV0d29yay1vbmx5JyA6IF9lLCBrZWVwUm9vdEZpZWxkcyA9IF9hLmtlZXBSb290RmllbGRzLCBjb250ZXh0ID0gX2EuY29udGV4dDtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG11dGF0aW9uSWQsIG11dGF0aW9uU3RvcmVWYWx1ZSwgc2VsZjtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2YpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9mLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChtdXRhdGlvbiwgJ211dGF0aW9uIG9wdGlvbiBpcyByZXF1aXJlZC4gWW91IG11c3Qgc3BlY2lmeSB5b3VyIEdyYXBoUUwgZG9jdW1lbnQgaW4gdGhlIG11dGF0aW9uIG9wdGlvbi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KG11dGF0aW9uLCAxMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3kgPT09ICduby1jYWNoZScsIFwiTXV0YXRpb25zIHN1cHBvcnQgb25seSAnbmV0d29yay1vbmx5JyBvciAnbm8tY2FjaGUnIGZldGNoUG9saWN5IHN0cmluZ3MuIFRoZSBkZWZhdWx0IGBuZXR3b3JrLW9ubHlgIGJlaGF2aW9yIGF1dG9tYXRpY2FsbHkgd3JpdGVzIG11dGF0aW9uIHJlc3VsdHMgdG8gdGhlIGNhY2hlLiBQYXNzaW5nIGBuby1jYWNoZWAgc2tpcHMgdGhlIGNhY2hlIHdyaXRlLlwiKSA6IGdsb2JhbHMuaW52YXJpYW50KGZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnLCAxMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbklkID0gdGhpcy5nZW5lcmF0ZU11dGF0aW9uSWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uID0gdGhpcy50cmFuc2Zvcm0obXV0YXRpb24pLmRvY3VtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobXV0YXRpb24sIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudHJhbnNmb3JtKG11dGF0aW9uKS5oYXNDbGllbnRFeHBvcnRzKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmxvY2FsU3RhdGUuYWRkRXhwb3J0ZWRWYXJpYWJsZXMobXV0YXRpb24sIHZhcmlhYmxlcywgY29udGV4dCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMgPSAoX2Yuc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25TdG9yZVZhbHVlID0gdGhpcy5tdXRhdGlvblN0b3JlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMubXV0YXRpb25TdG9yZVttdXRhdGlvbklkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb246IG11dGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW1pc3RpY1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrTXV0YXRpb25PcHRpbWlzdGljKG9wdGltaXN0aWNSZXNwb25zZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbklkOiBtdXRhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogbXV0YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yUG9saWN5OiBlcnJvclBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUXVlcmllczogdXBkYXRlUXVlcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGVXaXRoUHJveHlGbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2VlcFJvb3RGaWVsZHM6IGtlZXBSb290RmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbGl0aWVzLmFzeW5jTWFwKHNlbGYuZ2V0T2JzZXJ2YWJsZUZyb21MaW5rKG11dGF0aW9uLCB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIHsgb3B0aW1pc3RpY1Jlc3BvbnNlOiBvcHRpbWlzdGljUmVzcG9uc2UgfSksIHZhcmlhYmxlcywgZmFsc2UpLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmdyYXBoUUxSZXN1bHRIYXNFcnJvcihyZXN1bHQpICYmIGVycm9yUG9saWN5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogcmVzdWx0LmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvblN0b3JlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblN0b3JlVmFsdWUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uU3RvcmVWYWx1ZS5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmVSZXN1bHQgPSB0c2xpYi5fX2Fzc2lnbih7fSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVmZXRjaFF1ZXJpZXMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzID0gcmVmZXRjaFF1ZXJpZXMoc3RvcmVSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yUG9saWN5ID09PSAnaWdub3JlJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxpdGllcy5ncmFwaFFMUmVzdWx0SGFzRXJyb3Ioc3RvcmVSZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlUmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLm1hcmtNdXRhdGlvblJlc3VsdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25JZDogbXV0YXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHN0b3JlUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBtdXRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JQb2xpY3k6IGVycm9yUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGVXaXRoUHJveHlGbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVRdWVyaWVzOiB1cGRhdGVRdWVyaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0UmVmZXRjaFF1ZXJpZXM6IGF3YWl0UmVmZXRjaFF1ZXJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IHJlZmV0Y2hRdWVyaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU9wdGltaXN0aWM6IG9wdGltaXN0aWNSZXNwb25zZSA/IG11dGF0aW9uSWQgOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25RdWVyeVVwZGF0ZWQ6IG9uUXVlcnlVcGRhdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBSb290RmllbGRzOiBrZWVwUm9vdEZpZWxkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHN0b3JlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzdG9yZVJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXV0YXRpb25TdG9yZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uU3RvcmVWYWx1ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uU3RvcmVWYWx1ZS5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGltaXN0aWNSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhY2hlLnJlbW92ZU9wdGltaXN0aWMobXV0YXRpb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIgaW5zdGFuY2VvZiBlcnJvcnMuQXBvbGxvRXJyb3IgPyBlcnIgOiBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yOiBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUubWFya011dGF0aW9uUmVzdWx0ID0gZnVuY3Rpb24gKG11dGF0aW9uLCBjYWNoZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoY2FjaGUgPT09IHZvaWQgMCkgeyBjYWNoZSA9IHRoaXMuY2FjaGU7IH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IG11dGF0aW9uLnJlc3VsdDtcbiAgICAgICAgdmFyIGNhY2hlV3JpdGVzID0gW107XG4gICAgICAgIHZhciBza2lwQ2FjaGUgPSBtdXRhdGlvbi5mZXRjaFBvbGljeSA9PT0gXCJuby1jYWNoZVwiO1xuICAgICAgICBpZiAoIXNraXBDYWNoZSAmJiBzaG91bGRXcml0ZVJlc3VsdChyZXN1bHQsIG11dGF0aW9uLmVycm9yUG9saWN5KSkge1xuICAgICAgICAgICAgY2FjaGVXcml0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICBkYXRhSWQ6ICdST09UX01VVEFUSU9OJyxcbiAgICAgICAgICAgICAgICBxdWVyeTogbXV0YXRpb24uZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBtdXRhdGlvbi52YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciB1cGRhdGVRdWVyaWVzXzEgPSBtdXRhdGlvbi51cGRhdGVRdWVyaWVzO1xuICAgICAgICAgICAgaWYgKHVwZGF0ZVF1ZXJpZXNfMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSwgcXVlcnlJZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZVF1ZXJ5ID0gX2Eub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnlOYW1lID0gb2JzZXJ2YWJsZVF1ZXJ5ICYmIG9ic2VydmFibGVRdWVyeS5xdWVyeU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcXVlcnlOYW1lIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHVwZGF0ZVF1ZXJpZXNfMSwgcXVlcnlOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVyID0gdXBkYXRlUXVlcmllc18xW3F1ZXJ5TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IF90aGlzLnF1ZXJpZXMuZ2V0KHF1ZXJ5SWQpLCBkb2N1bWVudCA9IF9iLmRvY3VtZW50LCB2YXJpYWJsZXMgPSBfYi52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYyA9IGNhY2hlLmRpZmYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KSwgY3VycmVudFF1ZXJ5UmVzdWx0ID0gX2MucmVzdWx0LCBjb21wbGV0ZSA9IF9jLmNvbXBsZXRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGUgJiYgY3VycmVudFF1ZXJ5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dFF1ZXJ5UmVzdWx0ID0gdXBkYXRlcihjdXJyZW50UXVlcnlSZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZTogZG9jdW1lbnQgJiYgdXRpbGl0aWVzLmdldE9wZXJhdGlvbk5hbWUoZG9jdW1lbnQpIHx8IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFF1ZXJ5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVXcml0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogbmV4dFF1ZXJ5UmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSWQ6ICdST09UX1FVRVJZJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYWNoZVdyaXRlcy5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICBtdXRhdGlvbi5yZWZldGNoUXVlcmllcyB8fFxuICAgICAgICAgICAgbXV0YXRpb24udXBkYXRlIHx8XG4gICAgICAgICAgICBtdXRhdGlvbi5vblF1ZXJ5VXBkYXRlZCB8fFxuICAgICAgICAgICAgbXV0YXRpb24ucmVtb3ZlT3B0aW1pc3RpYykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdHNfMSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5yZWZldGNoUXVlcmllcyh7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2FjaGU6IGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNraXBDYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVXcml0ZXMuZm9yRWFjaChmdW5jdGlvbiAod3JpdGUpIHsgcmV0dXJuIGNhY2hlLndyaXRlKHdyaXRlKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IG11dGF0aW9uLnVwZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFza2lwQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IGNhY2hlLmRpZmYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJST09UX01VVEFUSU9OXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBfdGhpcy50cmFuc2Zvcm0obXV0YXRpb24uZG9jdW1lbnQpLmFzUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogbXV0YXRpb24udmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHJlc3VsdCksIHsgZGF0YTogZGlmZi5yZXN1bHQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlKGNhY2hlLCByZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBtdXRhdGlvbi5jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogbXV0YXRpb24udmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFza2lwQ2FjaGUgJiYgIW11dGF0aW9uLmtlZXBSb290RmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS5tb2RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnUk9PVF9NVVRBVElPTicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBfYS5maWVsZE5hbWUsIERFTEVURSA9IF9hLkRFTEVURTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkTmFtZSA9PT0gXCJfX3R5cGVuYW1lXCIgPyB2YWx1ZSA6IERFTEVURTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IG11dGF0aW9uLnJlZmV0Y2hRdWVyaWVzLFxuICAgICAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlbW92ZU9wdGltaXN0aWM6IG11dGF0aW9uLnJlbW92ZU9wdGltaXN0aWMsXG4gICAgICAgICAgICAgICAgb25RdWVyeVVwZGF0ZWQ6IG11dGF0aW9uLm9uUXVlcnlVcGRhdGVkIHx8IG51bGwsXG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdHNfMS5wdXNoKHJlc3VsdCk7IH0pO1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmF3YWl0UmVmZXRjaFF1ZXJpZXMgfHwgbXV0YXRpb24ub25RdWVyeVVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0c18xKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc3VsdDsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5tYXJrTXV0YXRpb25PcHRpbWlzdGljID0gZnVuY3Rpb24gKG9wdGltaXN0aWNSZXNwb25zZSwgbXV0YXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGEgPSB0eXBlb2Ygb3B0aW1pc3RpY1Jlc3BvbnNlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gb3B0aW1pc3RpY1Jlc3BvbnNlKG11dGF0aW9uLnZhcmlhYmxlcylcbiAgICAgICAgICAgIDogb3B0aW1pc3RpY1Jlc3BvbnNlO1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZWNvcmRPcHRpbWlzdGljVHJhbnNhY3Rpb24oZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF90aGlzLm1hcmtNdXRhdGlvblJlc3VsdCh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbXV0YXRpb24pLCB7IHJlc3VsdDogeyBkYXRhOiBkYXRhIH0gfSksIGNhY2hlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBtdXRhdGlvbi5tdXRhdGlvbklkKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZmV0Y2hRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeUlkLCBvcHRpb25zLCBuZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoUXVlcnlPYnNlcnZhYmxlKHF1ZXJ5SWQsIG9wdGlvbnMsIG5ldHdvcmtTdGF0dXMpLnByb21pc2U7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldFF1ZXJ5U3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICBzdG9yZVtxdWVyeUlkXSA9IHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGluZm8udmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IGluZm8ubmV0d29ya1N0YXR1cyxcbiAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IGluZm8ubmV0d29ya0Vycm9yLFxuICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IGluZm8uZ3JhcGhRTEVycm9ycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlc2V0RXJyb3JzID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdmFyIHF1ZXJ5SW5mbyA9IHRoaXMucXVlcmllcy5nZXQocXVlcnlJZCk7XG4gICAgICAgIGlmIChxdWVyeUluZm8pIHtcbiAgICAgICAgICAgIHF1ZXJ5SW5mby5uZXR3b3JrRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBxdWVyeUluZm8uZ3JhcGhRTEVycm9ycyA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICB2YXIgdHJhbnNmb3JtQ2FjaGUgPSB0aGlzLnRyYW5zZm9ybUNhY2hlO1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUNhY2hlLmhhcyhkb2N1bWVudCkpIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1lZCA9IHRoaXMuY2FjaGUudHJhbnNmb3JtRG9jdW1lbnQoZG9jdW1lbnQpO1xuICAgICAgICAgICAgdmFyIGZvckxpbmsgPSB1dGlsaXRpZXMucmVtb3ZlQ29ubmVjdGlvbkRpcmVjdGl2ZUZyb21Eb2N1bWVudCh0aGlzLmNhY2hlLnRyYW5zZm9ybUZvckxpbmsodHJhbnNmb3JtZWQpKTtcbiAgICAgICAgICAgIHZhciBjbGllbnRRdWVyeSA9IHRoaXMubG9jYWxTdGF0ZS5jbGllbnRRdWVyeSh0cmFuc2Zvcm1lZCk7XG4gICAgICAgICAgICB2YXIgc2VydmVyUXVlcnkgPSBmb3JMaW5rICYmIHRoaXMubG9jYWxTdGF0ZS5zZXJ2ZXJRdWVyeShmb3JMaW5rKTtcbiAgICAgICAgICAgIHZhciBjYWNoZUVudHJ5XzEgPSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6IHRyYW5zZm9ybWVkLFxuICAgICAgICAgICAgICAgIGhhc0NsaWVudEV4cG9ydHM6IHV0aWxpdGllcy5oYXNDbGllbnRFeHBvcnRzKHRyYW5zZm9ybWVkKSxcbiAgICAgICAgICAgICAgICBoYXNGb3JjZWRSZXNvbHZlcnM6IHRoaXMubG9jYWxTdGF0ZS5zaG91bGRGb3JjZVJlc29sdmVycyh0cmFuc2Zvcm1lZCksXG4gICAgICAgICAgICAgICAgY2xpZW50UXVlcnk6IGNsaWVudFF1ZXJ5LFxuICAgICAgICAgICAgICAgIHNlcnZlclF1ZXJ5OiBzZXJ2ZXJRdWVyeSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFyczogdXRpbGl0aWVzLmdldERlZmF1bHRWYWx1ZXModXRpbGl0aWVzLmdldE9wZXJhdGlvbkRlZmluaXRpb24odHJhbnNmb3JtZWQpKSxcbiAgICAgICAgICAgICAgICBhc1F1ZXJ5OiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdHJhbnNmb3JtZWQpLCB7IGRlZmluaXRpb25zOiB0cmFuc2Zvcm1lZC5kZWZpbml0aW9ucy5tYXAoZnVuY3Rpb24gKGRlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlZi5raW5kID09PSBcIk9wZXJhdGlvbkRlZmluaXRpb25cIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZi5vcGVyYXRpb24gIT09IFwicXVlcnlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZGVmKSwgeyBvcGVyYXRpb246IFwicXVlcnlcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgICAgICAgICAgICAgIH0pIH0pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGFkZCA9IGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jICYmICF0cmFuc2Zvcm1DYWNoZS5oYXMoZG9jKSkge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1DYWNoZS5zZXQoZG9jLCBjYWNoZUVudHJ5XzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhZGQoZG9jdW1lbnQpO1xuICAgICAgICAgICAgYWRkKHRyYW5zZm9ybWVkKTtcbiAgICAgICAgICAgIGFkZChjbGllbnRRdWVyeSk7XG4gICAgICAgICAgICBhZGQoc2VydmVyUXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1DYWNoZS5nZXQoZG9jdW1lbnQpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRWYXJpYWJsZXMgPSBmdW5jdGlvbiAoZG9jdW1lbnQsIHZhcmlhYmxlcykge1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMudHJhbnNmb3JtKGRvY3VtZW50KS5kZWZhdWx0VmFycyksIHZhcmlhYmxlcyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLndhdGNoUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHZhcmlhYmxlczogdGhpcy5nZXRWYXJpYWJsZXMob3B0aW9ucy5xdWVyeSwgb3B0aW9ucy52YXJpYWJsZXMpIH0pO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb3B0aW9ucy5ub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcXVlcnlJbmZvID0gbmV3IFF1ZXJ5SW5mbyh0aGlzKTtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZVF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5TWFuYWdlcjogdGhpcyxcbiAgICAgICAgICAgIHF1ZXJ5SW5mbzogcXVlcnlJbmZvLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlcmllcy5zZXQob2JzZXJ2YWJsZS5xdWVyeUlkLCBxdWVyeUluZm8pO1xuICAgICAgICBxdWVyeUluZm8uaW5pdCh7XG4gICAgICAgICAgICBkb2N1bWVudDogb3B0aW9ucy5xdWVyeSxcbiAgICAgICAgICAgIG9ic2VydmFibGVRdWVyeTogb2JzZXJ2YWJsZSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucywgcXVlcnlJZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAocXVlcnlJZCA9PT0gdm9pZCAwKSB7IHF1ZXJ5SWQgPSB0aGlzLmdlbmVyYXRlUXVlcnlJZCgpOyB9XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChvcHRpb25zLnF1ZXJ5LCAncXVlcnkgb3B0aW9uIGlzIHJlcXVpcmVkLiBZb3UgbXVzdCBzcGVjaWZ5IHlvdXIgR3JhcGhRTCBkb2N1bWVudCAnICtcbiAgICAgICAgICAgICdpbiB0aGUgcXVlcnkgb3B0aW9uLicpIDogZ2xvYmFscy5pbnZhcmlhbnQob3B0aW9ucy5xdWVyeSwgMTQpO1xuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQob3B0aW9ucy5xdWVyeS5raW5kID09PSAnRG9jdW1lbnQnLCAnWW91IG11c3Qgd3JhcCB0aGUgcXVlcnkgc3RyaW5nIGluIGEgXCJncWxcIiB0YWcuJykgOiBnbG9iYWxzLmludmFyaWFudChvcHRpb25zLnF1ZXJ5LmtpbmQgPT09ICdEb2N1bWVudCcsIDE1KTtcbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KCFvcHRpb25zLnJldHVyblBhcnRpYWxEYXRhLCAncmV0dXJuUGFydGlhbERhdGEgb3B0aW9uIG9ubHkgc3VwcG9ydGVkIG9uIHdhdGNoUXVlcnkuJykgOiBnbG9iYWxzLmludmFyaWFudCghb3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSwgMTYpO1xuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoIW9wdGlvbnMucG9sbEludGVydmFsLCAncG9sbEludGVydmFsIG9wdGlvbiBvbmx5IHN1cHBvcnRlZCBvbiB3YXRjaFF1ZXJ5LicpIDogZ2xvYmFscy5pbnZhcmlhbnQoIW9wdGlvbnMucG9sbEludGVydmFsLCAxNyk7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoUXVlcnkocXVlcnlJZCwgb3B0aW9ucykuZmluYWxseShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zdG9wUXVlcnkocXVlcnlJZCk7IH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZW5lcmF0ZVF1ZXJ5SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy5xdWVyeUlkQ291bnRlcisrKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2VuZXJhdGVSZXF1ZXN0SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RJZENvdW50ZXIrKztcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2VuZXJhdGVNdXRhdGlvbklkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMubXV0YXRpb25JZENvdW50ZXIrKyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3BRdWVyeUluU3RvcmUgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB0aGlzLnN0b3BRdWVyeUluU3RvcmVOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3BRdWVyeUluU3RvcmVOb0Jyb2FkY2FzdCA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHZhciBxdWVyeUluZm8gPSB0aGlzLnF1ZXJpZXMuZ2V0KHF1ZXJ5SWQpO1xuICAgICAgICBpZiAocXVlcnlJbmZvKVxuICAgICAgICAgICAgcXVlcnlJbmZvLnN0b3AoKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuY2xlYXJTdG9yZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGRpc2NhcmRXYXRjaGVzOiB0cnVlLFxuICAgICAgICB9OyB9XG4gICAgICAgIHRoaXMuY2FuY2VsUGVuZGluZ0ZldGNoZXMoX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKCdTdG9yZSByZXNldCB3aGlsZSBxdWVyeSB3YXMgaW4gZmxpZ2h0IChub3QgY29tcGxldGVkIGluIGxpbmsgY2hhaW4pJykgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcigxOCkpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocXVlcnlJbmZvKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlJbmZvLm9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25TdG9yZSkge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvblN0b3JlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZXNldChvcHRpb25zKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0T2JzZXJ2YWJsZVF1ZXJpZXMgPSBmdW5jdGlvbiAoaW5jbHVkZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoaW5jbHVkZSA9PT0gdm9pZCAwKSB7IGluY2x1ZGUgPSBcImFjdGl2ZVwiOyB9XG4gICAgICAgIHZhciBxdWVyaWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB2YXIgcXVlcnlOYW1lc0FuZERvY3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhciBsZWdhY3lRdWVyeU9wdGlvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGluY2x1ZGUpKSB7XG4gICAgICAgICAgICBpbmNsdWRlLmZvckVhY2goZnVuY3Rpb24gKGRlc2MpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlc2MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lc0FuZERvY3Muc2V0KGRlc2MsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXRpbGl0aWVzLmlzRG9jdW1lbnROb2RlKGRlc2MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZXNBbmREb2NzLnNldChfdGhpcy50cmFuc2Zvcm0oZGVzYykuZG9jdW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdChkZXNjKSAmJiBkZXNjLnF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZ2FjeVF1ZXJ5T3B0aW9ucy5hZGQoZGVzYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9hLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICB2YXIgb3EgPSBfYS5vYnNlcnZhYmxlUXVlcnksIGRvY3VtZW50ID0gX2EuZG9jdW1lbnQ7XG4gICAgICAgICAgICBpZiAob3EpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZSA9PT0gXCJhbGxcIikge1xuICAgICAgICAgICAgICAgICAgICBxdWVyaWVzLnNldChxdWVyeUlkLCBvcSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5TmFtZSA9IG9xLnF1ZXJ5TmFtZSwgZmV0Y2hQb2xpY3kgPSBvcS5vcHRpb25zLmZldGNoUG9saWN5O1xuICAgICAgICAgICAgICAgIGlmIChmZXRjaFBvbGljeSA9PT0gXCJzdGFuZGJ5XCIgfHxcbiAgICAgICAgICAgICAgICAgICAgKGluY2x1ZGUgPT09IFwiYWN0aXZlXCIgJiYgIW9xLmhhc09ic2VydmVycygpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlID09PSBcImFjdGl2ZVwiIHx8XG4gICAgICAgICAgICAgICAgICAgIChxdWVyeU5hbWUgJiYgcXVlcnlOYW1lc0FuZERvY3MuaGFzKHF1ZXJ5TmFtZSkpIHx8XG4gICAgICAgICAgICAgICAgICAgIChkb2N1bWVudCAmJiBxdWVyeU5hbWVzQW5kRG9jcy5oYXMoZG9jdW1lbnQpKSkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyaWVzLnNldChxdWVyeUlkLCBvcSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeU5hbWVzQW5kRG9jcy5zZXQocXVlcnlOYW1lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lc0FuZERvY3Muc2V0KGRvY3VtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGVnYWN5UXVlcnlPcHRpb25zLnNpemUpIHtcbiAgICAgICAgICAgIGxlZ2FjeVF1ZXJ5T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5SWQgPSB1dGlsaXRpZXMubWFrZVVuaXF1ZUlkKFwibGVnYWN5T25lVGltZVF1ZXJ5XCIpO1xuICAgICAgICAgICAgICAgIHZhciBxdWVyeUluZm8gPSBfdGhpcy5nZXRRdWVyeShxdWVyeUlkKS5pbml0KHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IG9wdGlvbnMucXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIG9xID0gbmV3IE9ic2VydmFibGVRdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5TWFuYWdlcjogX3RoaXMsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5SW5mbzogcXVlcnlJbmZvLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZmV0Y2hQb2xpY3k6IFwibmV0d29yay1vbmx5XCIgfSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZ2xvYmFscy5pbnZhcmlhbnQob3EucXVlcnlJZCA9PT0gcXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLnNldE9ic2VydmFibGVRdWVyeShvcSk7XG4gICAgICAgICAgICAgICAgcXVlcmllcy5zZXQocXVlcnlJZCwgb3EpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fREVWX18gJiYgcXVlcnlOYW1lc0FuZERvY3Muc2l6ZSkge1xuICAgICAgICAgICAgcXVlcnlOYW1lc0FuZERvY3MuZm9yRWFjaChmdW5jdGlvbiAoaW5jbHVkZWQsIG5hbWVPckRvYykge1xuICAgICAgICAgICAgICAgIGlmICghaW5jbHVkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiVW5rbm93biBxdWVyeSBcIi5jb25jYXQodHlwZW9mIG5hbWVPckRvYyA9PT0gXCJzdHJpbmdcIiA/IFwibmFtZWQgXCIgOiBcIlwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkobmFtZU9yRG9jLCBudWxsLCAyKSwgXCIgcmVxdWVzdGVkIGluIHJlZmV0Y2hRdWVyaWVzIG9wdGlvbnMuaW5jbHVkZSBhcnJheVwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJpZXM7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcyA9IGZ1bmN0aW9uIChpbmNsdWRlU3RhbmRieSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoaW5jbHVkZVN0YW5kYnkgPT09IHZvaWQgMCkgeyBpbmNsdWRlU3RhbmRieSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBvYnNlcnZhYmxlUXVlcnlQcm9taXNlcyA9IFtdO1xuICAgICAgICB0aGlzLmdldE9ic2VydmFibGVRdWVyaWVzKGluY2x1ZGVTdGFuZGJ5ID8gXCJhbGxcIiA6IFwiYWN0aXZlXCIpLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmFibGVRdWVyeSwgcXVlcnlJZCkge1xuICAgICAgICAgICAgdmFyIGZldGNoUG9saWN5ID0gb2JzZXJ2YWJsZVF1ZXJ5Lm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICBvYnNlcnZhYmxlUXVlcnkucmVzZXRMYXN0UmVzdWx0cygpO1xuICAgICAgICAgICAgaWYgKGluY2x1ZGVTdGFuZGJ5IHx8XG4gICAgICAgICAgICAgICAgKGZldGNoUG9saWN5ICE9PSBcInN0YW5kYnlcIiAmJlxuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSAhPT0gXCJjYWNoZS1vbmx5XCIpKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZVF1ZXJ5UHJvbWlzZXMucHVzaChvYnNlcnZhYmxlUXVlcnkucmVmZXRjaCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpLnNldERpZmYobnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKG9ic2VydmFibGVRdWVyeVByb21pc2VzKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc2V0T2JzZXJ2YWJsZVF1ZXJ5ID0gZnVuY3Rpb24gKG9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICB0aGlzLmdldFF1ZXJ5KG9ic2VydmFibGVRdWVyeS5xdWVyeUlkKS5zZXRPYnNlcnZhYmxlUXVlcnkob2JzZXJ2YWJsZVF1ZXJ5KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RhcnRHcmFwaFFMU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBxdWVyeSA9IF9hLnF1ZXJ5LCBmZXRjaFBvbGljeSA9IF9hLmZldGNoUG9saWN5LCBlcnJvclBvbGljeSA9IF9hLmVycm9yUG9saWN5LCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIF9iID0gX2EuY29udGV4dCwgY29udGV4dCA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iO1xuICAgICAgICBxdWVyeSA9IHRoaXMudHJhbnNmb3JtKHF1ZXJ5KS5kb2N1bWVudDtcbiAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMocXVlcnksIHZhcmlhYmxlcyk7XG4gICAgICAgIHZhciBtYWtlT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRPYnNlcnZhYmxlRnJvbUxpbmsocXVlcnksIGNvbnRleHQsIHZhcmlhYmxlcykubWFwKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgIT09ICduby1jYWNoZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFdyaXRlUmVzdWx0KHJlc3VsdCwgZXJyb3JQb2xpY3kpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWNoZS53cml0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUlkOiAnUk9PVF9TVUJTQ1JJUFRJT04nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmdyYXBoUUxSZXN1bHRIYXNFcnJvcihyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBlcnJvcnMuQXBvbGxvRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogcmVzdWx0LmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtKHF1ZXJ5KS5oYXNDbGllbnRFeHBvcnRzKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZVByb21pc2VfMSA9IHRoaXMubG9jYWxTdGF0ZS5hZGRFeHBvcnRlZFZhcmlhYmxlcyhxdWVyeSwgdmFyaWFibGVzLCBjb250ZXh0KS50aGVuKG1ha2VPYnNlcnZhYmxlKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdXRpbGl0aWVzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YiA9IG51bGw7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZVByb21pc2VfMS50aGVuKGZ1bmN0aW9uIChvYnNlcnZhYmxlKSB7IHJldHVybiBzdWIgPSBvYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7IH0sIG9ic2VydmVyLmVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc3ViICYmIHN1Yi51bnN1YnNjcmliZSgpOyB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ha2VPYnNlcnZhYmxlKHZhcmlhYmxlcyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3BRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHRoaXMuc3RvcFF1ZXJ5Tm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdG9wUXVlcnlOb0Jyb2FkY2FzdCA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHRoaXMuc3RvcFF1ZXJ5SW5TdG9yZU5vQnJvYWRjYXN0KHF1ZXJ5SWQpO1xuICAgICAgICB0aGlzLnJlbW92ZVF1ZXJ5KHF1ZXJ5SWQpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hDYW5jZWxGbnMuZGVsZXRlKHF1ZXJ5SWQpO1xuICAgICAgICB0aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpLnN0b3AoKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzLmRlbGV0ZShxdWVyeUlkKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuYnJvYWRjYXN0UXVlcmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25Ccm9hZGNhc3QpXG4gICAgICAgICAgICB0aGlzLm9uQnJvYWRjYXN0KCk7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvKSB7IHJldHVybiBpbmZvLm5vdGlmeSgpOyB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0TG9jYWxTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTdGF0ZTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0T2JzZXJ2YWJsZUZyb21MaW5rID0gZnVuY3Rpb24gKHF1ZXJ5LCBjb250ZXh0LCB2YXJpYWJsZXMsIGRlZHVwbGljYXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoZGVkdXBsaWNhdGlvbiA9PT0gdm9pZCAwKSB7IGRlZHVwbGljYXRpb24gPSAoX2EgPSBjb250ZXh0ID09PSBudWxsIHx8IGNvbnRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRleHQucXVlcnlEZWR1cGxpY2F0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0aGlzLnF1ZXJ5RGVkdXBsaWNhdGlvbjsgfVxuICAgICAgICB2YXIgb2JzZXJ2YWJsZTtcbiAgICAgICAgdmFyIHNlcnZlclF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ocXVlcnkpLnNlcnZlclF1ZXJ5O1xuICAgICAgICBpZiAoc2VydmVyUXVlcnkpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IHRoaXMsIGluRmxpZ2h0TGlua09ic2VydmFibGVzXzEgPSBfYi5pbkZsaWdodExpbmtPYnNlcnZhYmxlcywgbGluayA9IF9iLmxpbms7XG4gICAgICAgICAgICB2YXIgb3BlcmF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBzZXJ2ZXJRdWVyeSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25OYW1lOiB1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uTmFtZShzZXJ2ZXJRdWVyeSkgfHwgdm9pZCAwLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMucHJlcGFyZUNvbnRleHQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IGZvcmNlRmV0Y2g6ICFkZWR1cGxpY2F0aW9uIH0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb250ZXh0ID0gb3BlcmF0aW9uLmNvbnRleHQ7XG4gICAgICAgICAgICBpZiAoZGVkdXBsaWNhdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBieVZhcmlhYmxlc18xID0gaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXNfMS5nZXQoc2VydmVyUXVlcnkpIHx8IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICBpbkZsaWdodExpbmtPYnNlcnZhYmxlc18xLnNldChzZXJ2ZXJRdWVyeSwgYnlWYXJpYWJsZXNfMSk7XG4gICAgICAgICAgICAgICAgdmFyIHZhckpzb25fMSA9IGNhY2hlLmNhbm9uaWNhbFN0cmluZ2lmeSh2YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGUgPSBieVZhcmlhYmxlc18xLmdldCh2YXJKc29uXzEpO1xuICAgICAgICAgICAgICAgIGlmICghb2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2FzdCA9IG5ldyB1dGlsaXRpZXMuQ29uY2FzdChbXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JlLmV4ZWN1dGUobGluaywgb3BlcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgYnlWYXJpYWJsZXNfMS5zZXQodmFySnNvbl8xLCBvYnNlcnZhYmxlID0gY29uY2FzdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbmNhc3QuY2xlYW51cChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnlWYXJpYWJsZXNfMS5kZWxldGUodmFySnNvbl8xKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5VmFyaWFibGVzXzEuc2l6ZSA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbkZsaWdodExpbmtPYnNlcnZhYmxlc18xLmRlbGV0ZShzZXJ2ZXJRdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGUgPSBuZXcgdXRpbGl0aWVzLkNvbmNhc3QoW1xuICAgICAgICAgICAgICAgICAgICBjb3JlLmV4ZWN1dGUobGluaywgb3BlcmF0aW9uKVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IG5ldyB1dGlsaXRpZXMuQ29uY2FzdChbXG4gICAgICAgICAgICAgICAgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoeyBkYXRhOiB7fSB9KVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5wcmVwYXJlQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xpZW50UXVlcnkgPSB0aGlzLnRyYW5zZm9ybShxdWVyeSkuY2xpZW50UXVlcnk7XG4gICAgICAgIGlmIChjbGllbnRRdWVyeSkge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IHV0aWxpdGllcy5hc3luY01hcChvYnNlcnZhYmxlLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxvY2FsU3RhdGUucnVuUmVzb2x2ZXJzKHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IGNsaWVudFF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVSZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0UmVzdWx0c0Zyb21MaW5rID0gZnVuY3Rpb24gKHF1ZXJ5SW5mbywgY2FjaGVXcml0ZUJlaGF2aW9yLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0SWQgPSBxdWVyeUluZm8ubGFzdFJlcXVlc3RJZCA9IHRoaXMuZ2VuZXJhdGVSZXF1ZXN0SWQoKTtcbiAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5hc3luY01hcCh0aGlzLmdldE9ic2VydmFibGVGcm9tTGluayhxdWVyeUluZm8uZG9jdW1lbnQsIG9wdGlvbnMuY29udGV4dCwgb3B0aW9ucy52YXJpYWJsZXMpLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgaGFzRXJyb3JzID0gdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShyZXN1bHQuZXJyb3JzKTtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0SWQgPj0gcXVlcnlJbmZvLmxhc3RSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzRXJyb3JzICYmIG9wdGlvbnMuZXJyb3JQb2xpY3kgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHF1ZXJ5SW5mby5tYXJrRXJyb3IobmV3IGVycm9ycy5BcG9sbG9FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaFFMRXJyb3JzOiByZXN1bHQuZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5tYXJrUmVzdWx0KHJlc3VsdCwgb3B0aW9ucywgY2FjaGVXcml0ZUJlaGF2aW9yKTtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8ubWFya1JlYWR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYXFyID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IHF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzIHx8IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5yZWFkeSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaGFzRXJyb3JzICYmIG9wdGlvbnMuZXJyb3JQb2xpY3kgIT09IFwiaWdub3JlXCIpIHtcbiAgICAgICAgICAgICAgICBhcXIuZXJyb3JzID0gcmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcXI7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChuZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGVycm9ycy5pc0Fwb2xsb0Vycm9yKG5ldHdvcmtFcnJvcilcbiAgICAgICAgICAgICAgICA/IG5ldHdvcmtFcnJvclxuICAgICAgICAgICAgICAgIDogbmV3IGVycm9ycy5BcG9sbG9FcnJvcih7IG5ldHdvcmtFcnJvcjogbmV0d29ya0Vycm9yIH0pO1xuICAgICAgICAgICAgaWYgKHJlcXVlc3RJZCA+PSBxdWVyeUluZm8ubGFzdFJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5tYXJrRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5mZXRjaFF1ZXJ5T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChxdWVyeUlkLCBvcHRpb25zLCBuZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChuZXR3b3JrU3RhdHVzID09PSB2b2lkIDApIHsgbmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5sb2FkaW5nOyB9XG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMudHJhbnNmb3JtKG9wdGlvbnMucXVlcnkpLmRvY3VtZW50O1xuICAgICAgICB2YXIgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMocXVlcnksIG9wdGlvbnMudmFyaWFibGVzKTtcbiAgICAgICAgdmFyIHF1ZXJ5SW5mbyA9IHRoaXMuZ2V0UXVlcnkocXVlcnlJZCk7XG4gICAgICAgIHZhciBfYSA9IG9wdGlvbnMuZmV0Y2hQb2xpY3ksIGZldGNoUG9saWN5ID0gX2EgPT09IHZvaWQgMCA/IFwiY2FjaGUtZmlyc3RcIiA6IF9hLCBfYiA9IG9wdGlvbnMuZXJyb3JQb2xpY3ksIGVycm9yUG9saWN5ID0gX2IgPT09IHZvaWQgMCA/IFwibm9uZVwiIDogX2IsIF9jID0gb3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSwgcmV0dXJuUGFydGlhbERhdGEgPSBfYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYywgX2QgPSBvcHRpb25zLm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSwgbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlID0gX2QgPT09IHZvaWQgMCA/IGZhbHNlIDogX2QsIF9lID0gb3B0aW9ucy5jb250ZXh0LCBjb250ZXh0ID0gX2UgPT09IHZvaWQgMCA/IHt9IDogX2U7XG4gICAgICAgIHZhciBub3JtYWxpemVkID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICBlcnJvclBvbGljeTogZXJyb3JQb2xpY3ksXG4gICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogcmV0dXJuUGFydGlhbERhdGEsXG4gICAgICAgICAgICBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2U6IG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZnJvbVZhcmlhYmxlcyA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmZldGNoUXVlcnlCeVBvbGljeShxdWVyeUluZm8sIG5vcm1hbGl6ZWQsIG5ldHdvcmtTdGF0dXMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZldGNoQ2FuY2VsRm5zLnNldChxdWVyeUlkLCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbmNhc3QuY2FuY2VsKHJlYXNvbik7IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNvbmNhc3QgPSBuZXcgdXRpbGl0aWVzLkNvbmNhc3QodGhpcy50cmFuc2Zvcm0obm9ybWFsaXplZC5xdWVyeSkuaGFzQ2xpZW50RXhwb3J0c1xuICAgICAgICAgICAgPyB0aGlzLmxvY2FsU3RhdGUuYWRkRXhwb3J0ZWRWYXJpYWJsZXMobm9ybWFsaXplZC5xdWVyeSwgbm9ybWFsaXplZC52YXJpYWJsZXMsIG5vcm1hbGl6ZWQuY29udGV4dCkudGhlbihmcm9tVmFyaWFibGVzKVxuICAgICAgICAgICAgOiBmcm9tVmFyaWFibGVzKG5vcm1hbGl6ZWQudmFyaWFibGVzKSk7XG4gICAgICAgIGNvbmNhc3QuY2xlYW51cChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mZXRjaENhbmNlbEZucy5kZWxldGUocXVlcnlJZCk7XG4gICAgICAgICAgICBhcHBseU5leHRGZXRjaFBvbGljeShvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb25jYXN0O1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5yZWZldGNoUXVlcmllcyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdXBkYXRlQ2FjaGUgPSBfYS51cGRhdGVDYWNoZSwgaW5jbHVkZSA9IF9hLmluY2x1ZGUsIF9iID0gX2Eub3B0aW1pc3RpYywgb3B0aW1pc3RpYyA9IF9iID09PSB2b2lkIDAgPyBmYWxzZSA6IF9iLCBfYyA9IF9hLnJlbW92ZU9wdGltaXN0aWMsIHJlbW92ZU9wdGltaXN0aWMgPSBfYyA9PT0gdm9pZCAwID8gb3B0aW1pc3RpYyA/IHV0aWxpdGllcy5tYWtlVW5pcXVlSWQoXCJyZWZldGNoUXVlcmllc1wiKSA6IHZvaWQgMCA6IF9jLCBvblF1ZXJ5VXBkYXRlZCA9IF9hLm9uUXVlcnlVcGRhdGVkO1xuICAgICAgICB2YXIgaW5jbHVkZWRRdWVyaWVzQnlJZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKGluY2x1ZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0T2JzZXJ2YWJsZVF1ZXJpZXMoaW5jbHVkZSkuZm9yRWFjaChmdW5jdGlvbiAob3EsIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlZFF1ZXJpZXNCeUlkLnNldChxdWVyeUlkLCB7XG4gICAgICAgICAgICAgICAgICAgIG9xOiBvcSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdERpZmY6IF90aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpLmdldERpZmYoKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHRzID0gbmV3IE1hcDtcbiAgICAgICAgaWYgKHVwZGF0ZUNhY2hlKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLmJhdGNoKHtcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZUNhY2hlLFxuICAgICAgICAgICAgICAgIG9wdGltaXN0aWM6IG9wdGltaXN0aWMgJiYgcmVtb3ZlT3B0aW1pc3RpYyB8fCBmYWxzZSxcbiAgICAgICAgICAgICAgICByZW1vdmVPcHRpbWlzdGljOiByZW1vdmVPcHRpbWlzdGljLFxuICAgICAgICAgICAgICAgIG9uV2F0Y2hVcGRhdGVkOiBmdW5jdGlvbiAod2F0Y2gsIGRpZmYsIGxhc3REaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcSA9IHdhdGNoLndhdGNoZXIgaW5zdGFuY2VvZiBRdWVyeUluZm8gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoLndhdGNoZXIub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgICBpZiAob3EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvblF1ZXJ5VXBkYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkUXVlcmllc0J5SWQuZGVsZXRlKG9xLnF1ZXJ5SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBvblF1ZXJ5VXBkYXRlZChvcSwgZGlmZiwgbGFzdERpZmYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gb3EucmVmZXRjaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnNldChvcSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvblF1ZXJ5VXBkYXRlZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkUXVlcmllc0J5SWQuc2V0KG9xLnF1ZXJ5SWQsIHsgb3E6IG9xLCBsYXN0RGlmZjogbGFzdERpZmYsIGRpZmY6IGRpZmYgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluY2x1ZGVkUXVlcmllc0J5SWQuc2l6ZSkge1xuICAgICAgICAgICAgaW5jbHVkZWRRdWVyaWVzQnlJZC5mb3JFYWNoKGZ1bmN0aW9uIChfYSwgcXVlcnlJZCkge1xuICAgICAgICAgICAgICAgIHZhciBvcSA9IF9hLm9xLCBsYXN0RGlmZiA9IF9hLmxhc3REaWZmLCBkaWZmID0gX2EuZGlmZjtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmIChvblF1ZXJ5VXBkYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmZvID0gb3FbXCJxdWVyeUluZm9cIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmID0gaW5mby5nZXREaWZmKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gb25RdWVyeVVwZGF0ZWQob3EsIGRpZmYsIGxhc3REaWZmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFvblF1ZXJ5VXBkYXRlZCB8fCByZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gb3EucmVmZXRjaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnNldChvcSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5SWQuaW5kZXhPZihcImxlZ2FjeU9uZVRpbWVRdWVyeVwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0b3BRdWVyeU5vQnJvYWRjYXN0KHF1ZXJ5SWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW1vdmVPcHRpbWlzdGljKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnJlbW92ZU9wdGltaXN0aWMocmVtb3ZlT3B0aW1pc3RpYyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmZldGNoUXVlcnlCeVBvbGljeSA9IGZ1bmN0aW9uIChxdWVyeUluZm8sIF9hLCBuZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBxdWVyeSA9IF9hLnF1ZXJ5LCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIGZldGNoUG9saWN5ID0gX2EuZmV0Y2hQb2xpY3ksIHJlZmV0Y2hXcml0ZVBvbGljeSA9IF9hLnJlZmV0Y2hXcml0ZVBvbGljeSwgZXJyb3JQb2xpY3kgPSBfYS5lcnJvclBvbGljeSwgcmV0dXJuUGFydGlhbERhdGEgPSBfYS5yZXR1cm5QYXJ0aWFsRGF0YSwgY29udGV4dCA9IF9hLmNvbnRleHQsIG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSA9IF9hLm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZTtcbiAgICAgICAgdmFyIG9sZE5ldHdvcmtTdGF0dXMgPSBxdWVyeUluZm8ubmV0d29ya1N0YXR1cztcbiAgICAgICAgcXVlcnlJbmZvLmluaXQoe1xuICAgICAgICAgICAgZG9jdW1lbnQ6IHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBuZXR3b3JrU3RhdHVzLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlYWRDYWNoZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHF1ZXJ5SW5mby5nZXREaWZmKHZhcmlhYmxlcyk7IH07XG4gICAgICAgIHZhciByZXN1bHRzRnJvbUNhY2hlID0gZnVuY3Rpb24gKGRpZmYsIG5ldHdvcmtTdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChuZXR3b3JrU3RhdHVzID09PSB2b2lkIDApIHsgbmV0d29ya1N0YXR1cyA9IHF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzIHx8IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5sb2FkaW5nOyB9XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGRpZmYucmVzdWx0O1xuICAgICAgICAgICAgaWYgKF9fREVWX18gJiZcbiAgICAgICAgICAgICAgICAhcmV0dXJuUGFydGlhbERhdGEgJiZcbiAgICAgICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwoZGF0YSwge30pKSB7XG4gICAgICAgICAgICAgICAgbG9nTWlzc2luZ0ZpZWxkRXJyb3JzKGRpZmYubWlzc2luZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZnJvbURhdGEgPSBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gdXRpbGl0aWVzLk9ic2VydmFibGUub2YodHNsaWIuX19hc3NpZ24oeyBkYXRhOiBkYXRhLCBsb2FkaW5nOiBpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQobmV0d29ya1N0YXR1cyksIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMgfSwgKGRpZmYuY29tcGxldGUgPyBudWxsIDogeyBwYXJ0aWFsOiB0cnVlIH0pKSk7IH07XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBfdGhpcy50cmFuc2Zvcm0ocXVlcnkpLmhhc0ZvcmNlZFJlc29sdmVycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5sb2NhbFN0YXRlLnJ1blJlc29sdmVycyh7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlUmVzdWx0OiB7IGRhdGE6IGRhdGEgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzb2x2ZWQpIHsgcmV0dXJuIGZyb21EYXRhKHJlc29sdmVkLmRhdGEgfHwgdm9pZCAwKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnJvbURhdGEoZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjYWNoZVdyaXRlQmVoYXZpb3IgPSBmZXRjaFBvbGljeSA9PT0gXCJuby1jYWNoZVwiID8gMCA6XG4gICAgICAgICAgICAobmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnJlZmV0Y2ggJiZcbiAgICAgICAgICAgICAgICByZWZldGNoV3JpdGVQb2xpY3kgIT09IFwibWVyZ2VcIikgPyAxXG4gICAgICAgICAgICAgICAgOiAyO1xuICAgICAgICB2YXIgcmVzdWx0c0Zyb21MaW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldFJlc3VsdHNGcm9tTGluayhxdWVyeUluZm8sIGNhY2hlV3JpdGVCZWhhdmlvciwge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IGZldGNoUG9saWN5LFxuICAgICAgICAgICAgICAgIGVycm9yUG9saWN5OiBlcnJvclBvbGljeSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgc2hvdWxkTm90aWZ5ID0gbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlICYmXG4gICAgICAgICAgICB0eXBlb2Ygb2xkTmV0d29ya1N0YXR1cyA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgICAgICAgb2xkTmV0d29ya1N0YXR1cyAhPT0gbmV0d29ya1N0YXR1cyAmJlxuICAgICAgICAgICAgaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0KG5ldHdvcmtTdGF0dXMpO1xuICAgICAgICBzd2l0Y2ggKGZldGNoUG9saWN5KSB7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FzZSBcImNhY2hlLWZpcnN0XCI6IHtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IHJlYWRDYWNoZSgpO1xuICAgICAgICAgICAgICAgIGlmIChkaWZmLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUNhY2hlKGRpZmYsIHF1ZXJ5SW5mby5tYXJrUmVhZHkoKSksXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5QYXJ0aWFsRGF0YSB8fCBzaG91bGROb3RpZnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tQ2FjaGUoZGlmZiksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21MaW5rKCksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjYWNoZS1hbmQtbmV0d29ya1wiOiB7XG4gICAgICAgICAgICAgICAgdmFyIGRpZmYgPSByZWFkQ2FjaGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSB8fCByZXR1cm5QYXJ0aWFsRGF0YSB8fCBzaG91bGROb3RpZnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tQ2FjaGUoZGlmZiksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21MaW5rKCksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjYWNoZS1vbmx5XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShyZWFkQ2FjaGUoKSwgcXVlcnlJbmZvLm1hcmtSZWFkeSgpKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgY2FzZSBcIm5ldHdvcmstb25seVwiOlxuICAgICAgICAgICAgICAgIGlmIChzaG91bGROb3RpZnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tQ2FjaGUocmVhZENhY2hlKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21MaW5rKCksXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbcmVzdWx0c0Zyb21MaW5rKCldO1xuICAgICAgICAgICAgY2FzZSBcIm5vLWNhY2hlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZE5vdGlmeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShxdWVyeUluZm8uZ2V0RGlmZigpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tTGluaygpLFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW3Jlc3VsdHNGcm9tTGluaygpXTtcbiAgICAgICAgICAgIGNhc2UgXCJzdGFuZGJ5XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgaWYgKHF1ZXJ5SWQgJiYgIXRoaXMucXVlcmllcy5oYXMocXVlcnlJZCkpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcmllcy5zZXQocXVlcnlJZCwgbmV3IFF1ZXJ5SW5mbyh0aGlzLCBxdWVyeUlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcmllcy5nZXQocXVlcnlJZCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnByZXBhcmVDb250ZXh0ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0ge307IH1cbiAgICAgICAgdmFyIG5ld0NvbnRleHQgPSB0aGlzLmxvY2FsU3RhdGUucHJlcGFyZUNvbnRleHQoY29udGV4dCk7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbmV3Q29udGV4dCksIHsgY2xpZW50QXdhcmVuZXNzOiB0aGlzLmNsaWVudEF3YXJlbmVzcyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBRdWVyeU1hbmFnZXI7XG59KCkpO1xuXG52YXIgaGFzU3VnZ2VzdGVkRGV2dG9vbHMgPSBmYWxzZTtcbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhkZWZhdWx0cywgb3B0aW9ucykge1xuICAgIHJldHVybiB1dGlsaXRpZXMuY29tcGFjdChkZWZhdWx0cywgb3B0aW9ucywgb3B0aW9ucy52YXJpYWJsZXMgJiYge1xuICAgICAgICB2YXJpYWJsZXM6IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBkZWZhdWx0cy52YXJpYWJsZXMpLCBvcHRpb25zLnZhcmlhYmxlcyksXG4gICAgfSk7XG59XG52YXIgQXBvbGxvQ2xpZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcG9sbG9DbGllbnQob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMucmVzZXRTdG9yZUNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdmFyIHVyaSA9IG9wdGlvbnMudXJpLCBjcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMsIGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMsIGNhY2hlID0gb3B0aW9ucy5jYWNoZSwgX2EgPSBvcHRpb25zLnNzck1vZGUsIHNzck1vZGUgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnNzckZvcmNlRmV0Y2hEZWxheSwgc3NyRm9yY2VGZXRjaERlbGF5ID0gX2IgPT09IHZvaWQgMCA/IDAgOiBfYiwgX2MgPSBvcHRpb25zLmNvbm5lY3RUb0RldlRvb2xzLCBjb25uZWN0VG9EZXZUb29scyA9IF9jID09PSB2b2lkIDAgPyB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgIXdpbmRvdy5fX0FQT0xMT19DTElFTlRfXyAmJlxuICAgICAgICAgICAgX19ERVZfXyA6IF9jLCBfZCA9IG9wdGlvbnMucXVlcnlEZWR1cGxpY2F0aW9uLCBxdWVyeURlZHVwbGljYXRpb24gPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kLCBkZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsIF9lID0gb3B0aW9ucy5hc3N1bWVJbW11dGFibGVSZXN1bHRzLCBhc3N1bWVJbW11dGFibGVSZXN1bHRzID0gX2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX2UsIHJlc29sdmVycyA9IG9wdGlvbnMucmVzb2x2ZXJzLCB0eXBlRGVmcyA9IG9wdGlvbnMudHlwZURlZnMsIGZyYWdtZW50TWF0Y2hlciA9IG9wdGlvbnMuZnJhZ21lbnRNYXRjaGVyLCBjbGllbnRBd2FyZW5lc3NOYW1lID0gb3B0aW9ucy5uYW1lLCBjbGllbnRBd2FyZW5lc3NWZXJzaW9uID0gb3B0aW9ucy52ZXJzaW9uO1xuICAgICAgICB2YXIgbGluayA9IG9wdGlvbnMubGluaztcbiAgICAgICAgaWYgKCFsaW5rKSB7XG4gICAgICAgICAgICBsaW5rID0gdXJpXG4gICAgICAgICAgICAgICAgPyBuZXcgaHR0cC5IdHRwTGluayh7IHVyaTogdXJpLCBjcmVkZW50aWFsczogY3JlZGVudGlhbHMsIGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgICAgICA6IGNvcmUuQXBvbGxvTGluay5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2FjaGUpIHtcbiAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIlRvIGluaXRpYWxpemUgQXBvbGxvIENsaWVudCwgeW91IG11c3Qgc3BlY2lmeSBhICdjYWNoZScgcHJvcGVydHkgXCIgK1xuICAgICAgICAgICAgICAgIFwiaW4gdGhlIG9wdGlvbnMgb2JqZWN0LiBcXG5cIiArXG4gICAgICAgICAgICAgICAgXCJGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpc2l0OiBodHRwczovL2dvLmFwb2xsby5kZXYvYy9kb2NzXCIpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoNyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saW5rID0gbGluaztcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgICAgICB0aGlzLmRpc2FibGVOZXR3b3JrRmV0Y2hlcyA9IHNzck1vZGUgfHwgc3NyRm9yY2VGZXRjaERlbGF5ID4gMDtcbiAgICAgICAgdGhpcy5xdWVyeURlZHVwbGljYXRpb24gPSBxdWVyeURlZHVwbGljYXRpb247XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy50eXBlRGVmcyA9IHR5cGVEZWZzO1xuICAgICAgICBpZiAoc3NyRm9yY2VGZXRjaERlbGF5KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIChfdGhpcy5kaXNhYmxlTmV0d29ya0ZldGNoZXMgPSBmYWxzZSk7IH0sIHNzckZvcmNlRmV0Y2hEZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53YXRjaFF1ZXJ5ID0gdGhpcy53YXRjaFF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubXV0YXRlID0gdGhpcy5tdXRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNldFN0b3JlID0gdGhpcy5yZXNldFN0b3JlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzID0gdGhpcy5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMuYmluZCh0aGlzKTtcbiAgICAgICAgaWYgKGNvbm5lY3RUb0RldlRvb2xzICYmIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB3aW5kb3cuX19BUE9MTE9fQ0xJRU5UX18gPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGFzU3VnZ2VzdGVkRGV2dG9vbHMgJiYgX19ERVZfXykge1xuICAgICAgICAgICAgaGFzU3VnZ2VzdGVkRGV2dG9vbHMgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50ICYmXG4gICAgICAgICAgICAgICAgd2luZG93LnRvcCA9PT0gd2luZG93LnNlbGYgJiZcbiAgICAgICAgICAgICAgICAhd2luZG93Ll9fQVBPTExPX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pIHtcbiAgICAgICAgICAgICAgICB2YXIgbmF2ID0gd2luZG93Lm5hdmlnYXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdWEgPSBuYXYgJiYgbmF2LnVzZXJBZ2VudDtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdWEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVhLmluZGV4T2YoXCJDaHJvbWUvXCIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IFwiaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBvbGxvLWNsaWVudC1kZXZlbG9wZXItdC9qZGtrbmtrYmViYmFwaWxnb2VjY2NpZ2xrZmJtYm5mbVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVhLmluZGV4T2YoXCJGaXJlZm94L1wiKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBcImh0dHBzOi8vYWRkb25zLm1vemlsbGEub3JnL2VuLVVTL2ZpcmVmb3gvYWRkb24vYXBvbGxvLWRldmVsb3Blci10b29scy9cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQubG9nKFwiRG93bmxvYWQgdGhlIEFwb2xsbyBEZXZUb29scyBmb3IgYSBiZXR0ZXIgZGV2ZWxvcG1lbnQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBlcmllbmNlOiBcIiArIHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHRoaXMubG9jYWxTdGF0ZSA9IG5ldyBMb2NhbFN0YXRlKHtcbiAgICAgICAgICAgIGNhY2hlOiBjYWNoZSxcbiAgICAgICAgICAgIGNsaWVudDogdGhpcyxcbiAgICAgICAgICAgIHJlc29sdmVyczogcmVzb2x2ZXJzLFxuICAgICAgICAgICAgZnJhZ21lbnRNYXRjaGVyOiBmcmFnbWVudE1hdGNoZXIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlciA9IG5ldyBRdWVyeU1hbmFnZXIoe1xuICAgICAgICAgICAgY2FjaGU6IHRoaXMuY2FjaGUsXG4gICAgICAgICAgICBsaW5rOiB0aGlzLmxpbmssXG4gICAgICAgICAgICBxdWVyeURlZHVwbGljYXRpb246IHF1ZXJ5RGVkdXBsaWNhdGlvbixcbiAgICAgICAgICAgIHNzck1vZGU6IHNzck1vZGUsXG4gICAgICAgICAgICBjbGllbnRBd2FyZW5lc3M6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBjbGllbnRBd2FyZW5lc3NOYW1lLFxuICAgICAgICAgICAgICAgIHZlcnNpb246IGNsaWVudEF3YXJlbmVzc1ZlcnNpb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9jYWxTdGF0ZTogdGhpcy5sb2NhbFN0YXRlLFxuICAgICAgICAgICAgYXNzdW1lSW1tdXRhYmxlUmVzdWx0czogYXNzdW1lSW1tdXRhYmxlUmVzdWx0cyxcbiAgICAgICAgICAgIG9uQnJvYWRjYXN0OiBjb25uZWN0VG9EZXZUb29scyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZGV2VG9vbHNIb29rQ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGV2VG9vbHNIb29rQ2Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcmllczogX3RoaXMucXVlcnlNYW5hZ2VyLmdldFF1ZXJ5U3RvcmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnM6IF90aGlzLnF1ZXJ5TWFuYWdlci5tdXRhdGlvblN0b3JlIHx8IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFXaXRoT3B0aW1pc3RpY1Jlc3VsdHM6IF90aGlzLmNhY2hlLmV4dHJhY3QodHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gOiB2b2lkIDAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLnN0b3AoKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUud2F0Y2hRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRPcHRpb25zLndhdGNoUXVlcnkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBtZXJnZU9wdGlvbnModGhpcy5kZWZhdWx0T3B0aW9ucy53YXRjaFF1ZXJ5LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlTmV0d29ya0ZldGNoZXMgJiZcbiAgICAgICAgICAgIChvcHRpb25zLmZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1hbmQtbmV0d29yaycpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGZldGNoUG9saWN5OiAnY2FjaGUtZmlyc3QnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci53YXRjaFF1ZXJ5KG9wdGlvbnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRPcHRpb25zLnF1ZXJ5KSB7XG4gICAgICAgICAgICBvcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMuZGVmYXVsdE9wdGlvbnMucXVlcnksIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChvcHRpb25zLmZldGNoUG9saWN5ICE9PSAnY2FjaGUtYW5kLW5ldHdvcmsnLCAnVGhlIGNhY2hlLWFuZC1uZXR3b3JrIGZldGNoUG9saWN5IGRvZXMgbm90IHdvcmsgd2l0aCBjbGllbnQucXVlcnksIGJlY2F1c2UgJyArXG4gICAgICAgICAgICAnY2xpZW50LnF1ZXJ5IGNhbiBvbmx5IHJldHVybiBhIHNpbmdsZSByZXN1bHQuIFBsZWFzZSB1c2UgY2xpZW50LndhdGNoUXVlcnkgJyArXG4gICAgICAgICAgICAndG8gcmVjZWl2ZSBtdWx0aXBsZSByZXN1bHRzIGZyb20gdGhlIGNhY2hlIGFuZCB0aGUgbmV0d29yaywgb3IgY29uc2lkZXIgJyArXG4gICAgICAgICAgICAndXNpbmcgYSBkaWZmZXJlbnQgZmV0Y2hQb2xpY3ksIHN1Y2ggYXMgY2FjaGUtZmlyc3Qgb3IgbmV0d29yay1vbmx5LicpIDogZ2xvYmFscy5pbnZhcmlhbnQob3B0aW9ucy5mZXRjaFBvbGljeSAhPT0gJ2NhY2hlLWFuZC1uZXR3b3JrJywgOCk7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVOZXR3b3JrRmV0Y2hlcyAmJiBvcHRpb25zLmZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5Jykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBmZXRjaFBvbGljeTogJ2NhY2hlLWZpcnN0JyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIucXVlcnkob3B0aW9ucyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLm11dGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRPcHRpb25zLm11dGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLmRlZmF1bHRPcHRpb25zLm11dGF0ZSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLm11dGF0ZShvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLnN0YXJ0R3JhcGhRTFN1YnNjcmlwdGlvbihvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVhZFF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucmVhZFF1ZXJ5KG9wdGlvbnMsIG9wdGltaXN0aWMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZWFkRnJhZ21lbnQgPSBmdW5jdGlvbiAob3B0aW9ucywgb3B0aW1pc3RpYykge1xuICAgICAgICBpZiAob3B0aW1pc3RpYyA9PT0gdm9pZCAwKSB7IG9wdGltaXN0aWMgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZWFkRnJhZ21lbnQob3B0aW9ucywgb3B0aW1pc3RpYyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLndyaXRlUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNhY2hlLndyaXRlUXVlcnkob3B0aW9ucyk7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUud3JpdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2FjaGUud3JpdGVGcmFnbWVudChvcHRpb25zKTtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5fX2FjdGlvbkhvb2tGb3JEZXZUb29scyA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB0aGlzLmRldlRvb2xzSG9va0NiID0gY2I7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLl9fcmVxdWVzdFJhdyA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiBjb3JlLmV4ZWN1dGUodGhpcy5saW5rLCBwYXlsb2FkKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVzZXRTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5xdWVyeU1hbmFnZXIuY2xlYXJTdG9yZSh7XG4gICAgICAgICAgICBkaXNjYXJkV2F0Y2hlczogZmFsc2UsXG4gICAgICAgIH0pOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoX3RoaXMucmVzZXRTdG9yZUNhbGxiYWNrcy5tYXAoZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbigpOyB9KSk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMoKTsgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmNsZWFyU3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucXVlcnlNYW5hZ2VyLmNsZWFyU3RvcmUoe1xuICAgICAgICAgICAgZGlzY2FyZFdhdGNoZXM6IHRydWUsXG4gICAgICAgIH0pOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoX3RoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcy5tYXAoZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbigpOyB9KSk7IH0pO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5vblJlc2V0U3RvcmUgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVzZXRTdG9yZUNhbGxiYWNrcyA9IF90aGlzLnJlc2V0U3RvcmVDYWxsYmFja3MuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSBjYjsgfSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLm9uQ2xlYXJTdG9yZSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jbGVhclN0b3JlQ2FsbGJhY2tzID0gX3RoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09IGNiOyB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzID0gZnVuY3Rpb24gKGluY2x1ZGVTdGFuZGJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMoaW5jbHVkZVN0YW5kYnkpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZWZldGNoUXVlcmllcyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBtYXAgPSB0aGlzLnF1ZXJ5TWFuYWdlci5yZWZldGNoUXVlcmllcyhvcHRpb25zKTtcbiAgICAgICAgdmFyIHF1ZXJpZXMgPSBbXTtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCwgb2JzUXVlcnkpIHtcbiAgICAgICAgICAgIHF1ZXJpZXMucHVzaChvYnNRdWVyeSk7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXN1bHQgPSBQcm9taXNlLmFsbChyZXN1bHRzKTtcbiAgICAgICAgcmVzdWx0LnF1ZXJpZXMgPSBxdWVyaWVzO1xuICAgICAgICByZXN1bHQucmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQuZGVidWcoXCJJbiBjbGllbnQucmVmZXRjaFF1ZXJpZXMsIFByb21pc2UuYWxsIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBlcnJvciBcIi5jb25jYXQoZXJyb3IpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmdldE9ic2VydmFibGVRdWVyaWVzID0gZnVuY3Rpb24gKGluY2x1ZGUpIHtcbiAgICAgICAgaWYgKGluY2x1ZGUgPT09IHZvaWQgMCkgeyBpbmNsdWRlID0gXCJhY3RpdmVcIjsgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIuZ2V0T2JzZXJ2YWJsZVF1ZXJpZXMoaW5jbHVkZSk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiAob3B0aW1pc3RpYykge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5leHRyYWN0KG9wdGltaXN0aWMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZXN0b3JlID0gZnVuY3Rpb24gKHNlcmlhbGl6ZWRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZXN0b3JlKHNlcmlhbGl6ZWRTdGF0ZSk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmFkZFJlc29sdmVycyA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlLmFkZFJlc29sdmVycyhyZXNvbHZlcnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5zZXRSZXNvbHZlcnMgPSBmdW5jdGlvbiAocmVzb2x2ZXJzKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdGF0ZS5zZXRSZXNvbHZlcnMocmVzb2x2ZXJzKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuZ2V0UmVzb2x2ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFN0YXRlLmdldFJlc29sdmVycygpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5zZXRMb2NhbFN0YXRlRnJhZ21lbnRNYXRjaGVyID0gZnVuY3Rpb24gKGZyYWdtZW50TWF0Y2hlcikge1xuICAgICAgICB0aGlzLmxvY2FsU3RhdGUuc2V0RnJhZ21lbnRNYXRjaGVyKGZyYWdtZW50TWF0Y2hlcik7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnNldExpbmsgPSBmdW5jdGlvbiAobmV3TGluaykge1xuICAgICAgICB0aGlzLmxpbmsgPSB0aGlzLnF1ZXJ5TWFuYWdlci5saW5rID0gbmV3TGluaztcbiAgICB9O1xuICAgIHJldHVybiBBcG9sbG9DbGllbnQ7XG59KCkpO1xuXG50c0ludmFyaWFudC5zZXRWZXJib3NpdHkoZ2xvYmFscy5ERVYgPyBcImxvZ1wiIDogXCJzaWxlbnRcIik7XG5cbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IHV0aWxpdGllcy5PYnNlcnZhYmxlO1xuZXhwb3J0cy5pc1JlZmVyZW5jZSA9IHV0aWxpdGllcy5pc1JlZmVyZW5jZTtcbmV4cG9ydHMubWFrZVJlZmVyZW5jZSA9IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlO1xuZXhwb3J0cy5BcG9sbG9DYWNoZSA9IGNhY2hlLkFwb2xsb0NhY2hlO1xuZXhwb3J0cy5DYWNoZSA9IGNhY2hlLkNhY2hlO1xuZXhwb3J0cy5Jbk1lbW9yeUNhY2hlID0gY2FjaGUuSW5NZW1vcnlDYWNoZTtcbmV4cG9ydHMuTWlzc2luZ0ZpZWxkRXJyb3IgPSBjYWNoZS5NaXNzaW5nRmllbGRFcnJvcjtcbmV4cG9ydHMuZGVmYXVsdERhdGFJZEZyb21PYmplY3QgPSBjYWNoZS5kZWZhdWx0RGF0YUlkRnJvbU9iamVjdDtcbmV4cG9ydHMubWFrZVZhciA9IGNhY2hlLm1ha2VWYXI7XG5leHBvcnRzLkFwb2xsb0Vycm9yID0gZXJyb3JzLkFwb2xsb0Vycm9yO1xuZXhwb3J0cy5pc0Fwb2xsb0Vycm9yID0gZXJyb3JzLmlzQXBvbGxvRXJyb3I7XG5leHBvcnRzLmZyb21FcnJvciA9IHV0aWxzLmZyb21FcnJvcjtcbmV4cG9ydHMuZnJvbVByb21pc2UgPSB1dGlscy5mcm9tUHJvbWlzZTtcbmV4cG9ydHMudGhyb3dTZXJ2ZXJFcnJvciA9IHV0aWxzLnRocm93U2VydmVyRXJyb3I7XG5leHBvcnRzLnRvUHJvbWlzZSA9IHV0aWxzLnRvUHJvbWlzZTtcbmV4cG9ydHMuc2V0TG9nVmVyYm9zaXR5ID0gdHNJbnZhcmlhbnQuc2V0VmVyYm9zaXR5O1xuZXhwb3J0cy5kaXNhYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBncmFwaHFsVGFnLmRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcztcbmV4cG9ydHMuZGlzYWJsZUZyYWdtZW50V2FybmluZ3MgPSBncmFwaHFsVGFnLmRpc2FibGVGcmFnbWVudFdhcm5pbmdzO1xuZXhwb3J0cy5lbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGdyYXBocWxUYWcuZW5hYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXM7XG5leHBvcnRzLmdxbCA9IGdyYXBocWxUYWcuZ3FsO1xuZXhwb3J0cy5yZXNldENhY2hlcyA9IGdyYXBocWxUYWcucmVzZXRDYWNoZXM7XG5leHBvcnRzLkFwb2xsb0NsaWVudCA9IEFwb2xsb0NsaWVudDtcbmV4cG9ydHMuT2JzZXJ2YWJsZVF1ZXJ5ID0gT2JzZXJ2YWJsZVF1ZXJ5O1xuZXhwb3J0cy5hcHBseU5leHRGZXRjaFBvbGljeSA9IGFwcGx5TmV4dEZldGNoUG9saWN5O1xuZXhwb3J0cy5tZXJnZU9wdGlvbnMgPSBtZXJnZU9wdGlvbnM7XG5mb3IgKHZhciBrIGluIGNvcmUpIHtcbiAgICBpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBleHBvcnRzW2tdID0gY29yZVtrXTtcbn1cbmZvciAodmFyIGsgaW4gaHR0cCkge1xuICAgIGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIGV4cG9ydHNba10gPSBodHRwW2tdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29yZS5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG5yZXF1aXJlKCcuLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcycpO1xuXG5mdW5jdGlvbiBpc0Fwb2xsb0Vycm9yKGVycikge1xuICAgIHJldHVybiBlcnIuaGFzT3duUHJvcGVydHkoJ2dyYXBoUUxFcnJvcnMnKTtcbn1cbnZhciBnZW5lcmF0ZUVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICcnO1xuICAgIGlmICh1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KGVyci5ncmFwaFFMRXJyb3JzKSB8fCB1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KGVyci5jbGllbnRFcnJvcnMpKSB7XG4gICAgICAgIHZhciBlcnJvcnMgPSAoZXJyLmdyYXBoUUxFcnJvcnMgfHwgW10pXG4gICAgICAgICAgICAuY29uY2F0KGVyci5jbGllbnRFcnJvcnMgfHwgW10pO1xuICAgICAgICBlcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvclxuICAgICAgICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgIDogJ0Vycm9yIG1lc3NhZ2Ugbm90IGZvdW5kLic7XG4gICAgICAgICAgICBtZXNzYWdlICs9IFwiXCIuY29uY2F0KGVycm9yTWVzc2FnZSwgXCJcXG5cIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZXJyLm5ldHdvcmtFcnJvcikge1xuICAgICAgICBtZXNzYWdlICs9IFwiXCIuY29uY2F0KGVyci5uZXR3b3JrRXJyb3IubWVzc2FnZSwgXCJcXG5cIik7XG4gICAgfVxuICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL1xcbiQvLCAnJyk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG59O1xudmFyIEFwb2xsb0Vycm9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoQXBvbGxvRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBvbGxvRXJyb3IoX2EpIHtcbiAgICAgICAgdmFyIGdyYXBoUUxFcnJvcnMgPSBfYS5ncmFwaFFMRXJyb3JzLCBjbGllbnRFcnJvcnMgPSBfYS5jbGllbnRFcnJvcnMsIG5ldHdvcmtFcnJvciA9IF9hLm5ldHdvcmtFcnJvciwgZXJyb3JNZXNzYWdlID0gX2EuZXJyb3JNZXNzYWdlLCBleHRyYUluZm8gPSBfYS5leHRyYUluZm87XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVycm9yTWVzc2FnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZ3JhcGhRTEVycm9ycyA9IGdyYXBoUUxFcnJvcnMgfHwgW107XG4gICAgICAgIF90aGlzLmNsaWVudEVycm9ycyA9IGNsaWVudEVycm9ycyB8fCBbXTtcbiAgICAgICAgX3RoaXMubmV0d29ya0Vycm9yID0gbmV0d29ya0Vycm9yIHx8IG51bGw7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgfHwgZ2VuZXJhdGVFcnJvck1lc3NhZ2UoX3RoaXMpO1xuICAgICAgICBfdGhpcy5leHRyYUluZm8gPSBleHRyYUluZm87XG4gICAgICAgIF90aGlzLl9fcHJvdG9fXyA9IEFwb2xsb0Vycm9yLnByb3RvdHlwZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQXBvbGxvRXJyb3I7XG59KEVycm9yKSk7XG5cbmV4cG9ydHMuQXBvbGxvRXJyb3IgPSBBcG9sbG9FcnJvcjtcbmV4cG9ydHMuaXNBcG9sbG9FcnJvciA9IGlzQXBvbGxvRXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvcnMuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gcGFzc3Rocm91Z2gob3AsIGZvcndhcmQpIHtcbiAgICByZXR1cm4gKGZvcndhcmQgPyBmb3J3YXJkKG9wKSA6IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCkpO1xufVxuZnVuY3Rpb24gdG9MaW5rKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicgPyBuZXcgQXBvbGxvTGluayhoYW5kbGVyKSA6IGhhbmRsZXI7XG59XG5mdW5jdGlvbiBpc1Rlcm1pbmF0aW5nKGxpbmspIHtcbiAgICByZXR1cm4gbGluay5yZXF1ZXN0Lmxlbmd0aCA8PSAxO1xufVxudmFyIExpbmtFcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKExpbmtFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMaW5rRXJyb3IobWVzc2FnZSwgbGluaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5saW5rID0gbGluaztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gTGlua0Vycm9yO1xufShFcnJvcikpO1xudmFyIEFwb2xsb0xpbmsgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFwb2xsb0xpbmsocmVxdWVzdCkge1xuICAgICAgICBpZiAocmVxdWVzdClcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgfVxuICAgIEFwb2xsb0xpbmsuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpOyB9KTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsuZnJvbSA9IGZ1bmN0aW9uIChsaW5rcykge1xuICAgICAgICBpZiAobGlua3MubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIEFwb2xsb0xpbmsuZW1wdHkoKTtcbiAgICAgICAgcmV0dXJuIGxpbmtzLm1hcCh0b0xpbmspLnJlZHVjZShmdW5jdGlvbiAoeCwgeSkgeyByZXR1cm4geC5jb25jYXQoeSk7IH0pO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5zcGxpdCA9IGZ1bmN0aW9uICh0ZXN0LCBsZWZ0LCByaWdodCkge1xuICAgICAgICB2YXIgbGVmdExpbmsgPSB0b0xpbmsobGVmdCk7XG4gICAgICAgIHZhciByaWdodExpbmsgPSB0b0xpbmsocmlnaHQgfHwgbmV3IEFwb2xsb0xpbmsocGFzc3Rocm91Z2gpKTtcbiAgICAgICAgaWYgKGlzVGVybWluYXRpbmcobGVmdExpbmspICYmIGlzVGVybWluYXRpbmcocmlnaHRMaW5rKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdChvcGVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgID8gbGVmdExpbmsucmVxdWVzdChvcGVyYXRpb24pIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKClcbiAgICAgICAgICAgICAgICAgICAgOiByaWdodExpbmsucmVxdWVzdChvcGVyYXRpb24pIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uLCBmb3J3YXJkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3Qob3BlcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICA/IGxlZnRMaW5rLnJlcXVlc3Qob3BlcmF0aW9uLCBmb3J3YXJkKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpXG4gICAgICAgICAgICAgICAgICAgIDogcmlnaHRMaW5rLnJlcXVlc3Qob3BlcmF0aW9uLCBmb3J3YXJkKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFwb2xsb0xpbmsuZXhlY3V0ZSA9IGZ1bmN0aW9uIChsaW5rLCBvcGVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIChsaW5rLnJlcXVlc3QodXRpbHMuY3JlYXRlT3BlcmF0aW9uKG9wZXJhdGlvbi5jb250ZXh0LCB1dGlscy50cmFuc2Zvcm1PcGVyYXRpb24odXRpbHMudmFsaWRhdGVPcGVyYXRpb24ob3BlcmF0aW9uKSkpKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpKTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsuY29uY2F0ID0gZnVuY3Rpb24gKGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgdmFyIGZpcnN0TGluayA9IHRvTGluayhmaXJzdCk7XG4gICAgICAgIGlmIChpc1Rlcm1pbmF0aW5nKGZpcnN0TGluaykpIHtcbiAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihuZXcgTGlua0Vycm9yKFwiWW91IGFyZSBjYWxsaW5nIGNvbmNhdCBvbiBhIHRlcm1pbmF0aW5nIGxpbmssIHdoaWNoIHdpbGwgaGF2ZSBubyBlZmZlY3RcIiwgZmlyc3RMaW5rKSk7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RMaW5rO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXh0TGluayA9IHRvTGluayhzZWNvbmQpO1xuICAgICAgICBpZiAoaXNUZXJtaW5hdGluZyhuZXh0TGluaykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0TGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZnVuY3Rpb24gKG9wKSB7IHJldHVybiBuZXh0TGluay5yZXF1ZXN0KG9wKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpOyB9KSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbiwgZm9yd2FyZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZmlyc3RMaW5rLnJlcXVlc3Qob3BlcmF0aW9uLCBmdW5jdGlvbiAob3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHRMaW5rLnJlcXVlc3Qob3AsIGZvcndhcmQpIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCk7XG4gICAgICAgICAgICAgICAgfSkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUuc3BsaXQgPSBmdW5jdGlvbiAodGVzdCwgbGVmdCwgcmlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uY2F0KEFwb2xsb0xpbmsuc3BsaXQodGVzdCwgbGVmdCwgcmlnaHQgfHwgbmV3IEFwb2xsb0xpbmsocGFzc3Rocm91Z2gpKSk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICByZXR1cm4gQXBvbGxvTGluay5jb25jYXQodGhpcywgbmV4dCk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKG9wZXJhdGlvbiwgZm9yd2FyZCkge1xuICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoJ3JlcXVlc3QgaXMgbm90IGltcGxlbWVudGVkJykgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcigxOSk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycm9yLCBvYnNlcnZlcikge1xuICAgICAgICBpZiAob2JzZXJ2ZXIgJiYgb2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsucHJvdG90eXBlLnNldE9uRXJyb3IgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdGhpcy5vbkVycm9yID0gZm47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIEFwb2xsb0xpbms7XG59KCkpO1xuXG52YXIgZW1wdHkgPSBBcG9sbG9MaW5rLmVtcHR5O1xuXG52YXIgZnJvbSA9IEFwb2xsb0xpbmsuZnJvbTtcblxudmFyIHNwbGl0ID0gQXBvbGxvTGluay5zcGxpdDtcblxudmFyIGNvbmNhdCA9IEFwb2xsb0xpbmsuY29uY2F0O1xuXG52YXIgZXhlY3V0ZSA9IEFwb2xsb0xpbmsuZXhlY3V0ZTtcblxuZXhwb3J0cy5BcG9sbG9MaW5rID0gQXBvbGxvTGluaztcbmV4cG9ydHMuY29uY2F0ID0gY29uY2F0O1xuZXhwb3J0cy5lbXB0eSA9IGVtcHR5O1xuZXhwb3J0cy5leGVjdXRlID0gZXhlY3V0ZTtcbmV4cG9ydHMuZnJvbSA9IGZyb207XG5leHBvcnRzLnNwbGl0ID0gc3BsaXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgZ3JhcGhxbCA9IHJlcXVpcmUoJ2dyYXBocWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi4vY29yZScpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcycpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gcGFyc2VBbmRDaGVja0h0dHBSZXNwb25zZShvcGVyYXRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgLnRleHQoKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoYm9keVRleHQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGJvZHlUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB2YXIgcGFyc2VFcnJvciA9IGVycjtcbiAgICAgICAgICAgIHBhcnNlRXJyb3IubmFtZSA9ICdTZXJ2ZXJQYXJzZUVycm9yJztcbiAgICAgICAgICAgIHBhcnNlRXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgIHBhcnNlRXJyb3Iuc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgICAgIHBhcnNlRXJyb3IuYm9keVRleHQgPSBib2R5VGV4dDtcbiAgICAgICAgICAgIHRocm93IHBhcnNlRXJyb3I7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgICB1dGlscy50aHJvd1NlcnZlckVycm9yKHJlc3BvbnNlLCByZXN1bHQsIFwiUmVzcG9uc2Ugbm90IHN1Y2Nlc3NmdWw6IFJlY2VpdmVkIHN0YXR1cyBjb2RlIFwiLmNvbmNhdChyZXNwb25zZS5zdGF0dXMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzdWx0KSAmJlxuICAgICAgICAgICAgIWhhc093blByb3BlcnR5LmNhbGwocmVzdWx0LCAnZGF0YScpICYmXG4gICAgICAgICAgICAhaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQsICdlcnJvcnMnKSkge1xuICAgICAgICAgICAgdXRpbHMudGhyb3dTZXJ2ZXJFcnJvcihyZXNwb25zZSwgcmVzdWx0LCBcIlNlcnZlciByZXNwb25zZSB3YXMgbWlzc2luZyBmb3IgcXVlcnkgJ1wiLmNvbmNhdChBcnJheS5pc0FycmF5KG9wZXJhdGlvbnMpXG4gICAgICAgICAgICAgICAgPyBvcGVyYXRpb25zLm1hcChmdW5jdGlvbiAob3ApIHsgcmV0dXJuIG9wLm9wZXJhdGlvbk5hbWU7IH0pXG4gICAgICAgICAgICAgICAgOiBvcGVyYXRpb25zLm9wZXJhdGlvbk5hbWUsIFwiJy5cIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7IH07XG59XG5cbnZhciBzZXJpYWxpemVGZXRjaFBhcmFtZXRlciA9IGZ1bmN0aW9uIChwLCBsYWJlbCkge1xuICAgIHZhciBzZXJpYWxpemVkO1xuICAgIHRyeSB7XG4gICAgICAgIHNlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeShwKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgdmFyIHBhcnNlRXJyb3IgPSBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJOZXR3b3JrIHJlcXVlc3QgZmFpbGVkLiBcIi5jb25jYXQobGFiZWwsIFwiIGlzIG5vdCBzZXJpYWxpemFibGU6IFwiKS5jb25jYXQoZS5tZXNzYWdlKSkgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcigyMSk7XG4gICAgICAgIHBhcnNlRXJyb3IucGFyc2VFcnJvciA9IGU7XG4gICAgICAgIHRocm93IHBhcnNlRXJyb3I7XG4gICAgfVxuICAgIHJldHVybiBzZXJpYWxpemVkO1xufTtcblxudmFyIGRlZmF1bHRIdHRwT3B0aW9ucyA9IHtcbiAgICBpbmNsdWRlUXVlcnk6IHRydWUsXG4gICAgaW5jbHVkZUV4dGVuc2lvbnM6IGZhbHNlLFxufTtcbnZhciBkZWZhdWx0SGVhZGVycyA9IHtcbiAgICBhY2NlcHQ6ICcqLyonLFxuICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG59O1xudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxufTtcbnZhciBmYWxsYmFja0h0dHBDb25maWcgPSB7XG4gICAgaHR0cDogZGVmYXVsdEh0dHBPcHRpb25zLFxuICAgIGhlYWRlcnM6IGRlZmF1bHRIZWFkZXJzLFxuICAgIG9wdGlvbnM6IGRlZmF1bHRPcHRpb25zLFxufTtcbnZhciBkZWZhdWx0UHJpbnRlciA9IGZ1bmN0aW9uIChhc3QsIHByaW50ZXIpIHsgcmV0dXJuIHByaW50ZXIoYXN0KTsgfTtcbmZ1bmN0aW9uIHNlbGVjdEh0dHBPcHRpb25zQW5kQm9keShvcGVyYXRpb24sIGZhbGxiYWNrQ29uZmlnKSB7XG4gICAgdmFyIGNvbmZpZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBjb25maWdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBjb25maWdzLnVuc2hpZnQoZmFsbGJhY2tDb25maWcpO1xuICAgIHJldHVybiBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHlJbnRlcm5hbC5hcHBseSh2b2lkIDAsIHRzbGliLl9fc3ByZWFkQXJyYXkoW29wZXJhdGlvbixcbiAgICAgICAgZGVmYXVsdFByaW50ZXJdLCBjb25maWdzLCBmYWxzZSkpO1xufVxuZnVuY3Rpb24gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5SW50ZXJuYWwob3BlcmF0aW9uLCBwcmludGVyKSB7XG4gICAgdmFyIGNvbmZpZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBjb25maWdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgIHZhciBodHRwID0ge307XG4gICAgY29uZmlncy5mb3JFYWNoKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgY29uZmlnLm9wdGlvbnMpLCB7IGhlYWRlcnM6IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zLmhlYWRlcnMpLCBoZWFkZXJzVG9Mb3dlckNhc2UoY29uZmlnLmhlYWRlcnMpKSB9KTtcbiAgICAgICAgaWYgKGNvbmZpZy5jcmVkZW50aWFscykge1xuICAgICAgICAgICAgb3B0aW9ucy5jcmVkZW50aWFscyA9IGNvbmZpZy5jcmVkZW50aWFscztcbiAgICAgICAgfVxuICAgICAgICBodHRwID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGh0dHApLCBjb25maWcuaHR0cCk7XG4gICAgfSk7XG4gICAgdmFyIG9wZXJhdGlvbk5hbWUgPSBvcGVyYXRpb24ub3BlcmF0aW9uTmFtZSwgZXh0ZW5zaW9ucyA9IG9wZXJhdGlvbi5leHRlbnNpb25zLCB2YXJpYWJsZXMgPSBvcGVyYXRpb24udmFyaWFibGVzLCBxdWVyeSA9IG9wZXJhdGlvbi5xdWVyeTtcbiAgICB2YXIgYm9keSA9IHsgb3BlcmF0aW9uTmFtZTogb3BlcmF0aW9uTmFtZSwgdmFyaWFibGVzOiB2YXJpYWJsZXMgfTtcbiAgICBpZiAoaHR0cC5pbmNsdWRlRXh0ZW5zaW9ucylcbiAgICAgICAgYm9keS5leHRlbnNpb25zID0gZXh0ZW5zaW9ucztcbiAgICBpZiAoaHR0cC5pbmNsdWRlUXVlcnkpXG4gICAgICAgIGJvZHkucXVlcnkgPSBwcmludGVyKHF1ZXJ5LCBncmFwaHFsLnByaW50KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICBib2R5OiBib2R5LFxuICAgIH07XG59XG5mdW5jdGlvbiBoZWFkZXJzVG9Mb3dlckNhc2UoaGVhZGVycykge1xuICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgIHZhciBub3JtYWxpemVkXzEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBPYmplY3Qua2V5cyhPYmplY3QoaGVhZGVycykpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRfMVtuYW1lLnRvTG93ZXJDYXNlKCldID0gaGVhZGVyc1tuYW1lXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBub3JtYWxpemVkXzE7XG4gICAgfVxuICAgIHJldHVybiBoZWFkZXJzO1xufVxuXG52YXIgY2hlY2tGZXRjaGVyID0gZnVuY3Rpb24gKGZldGNoZXIpIHtcbiAgICBpZiAoIWZldGNoZXIgJiYgdHlwZW9mIGZldGNoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJcXG5cXFwiZmV0Y2hcXFwiIGhhcyBub3QgYmVlbiBmb3VuZCBnbG9iYWxseSBhbmQgbm8gZmV0Y2hlciBoYXMgYmVlbiBjb25maWd1cmVkLiBUbyBmaXggdGhpcywgaW5zdGFsbCBhIGZldGNoIHBhY2thZ2UgKGxpa2UgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvY3Jvc3MtZmV0Y2gpLCBpbnN0YW50aWF0ZSB0aGUgZmV0Y2hlciwgYW5kIHBhc3MgaXQgaW50byB5b3VyIEh0dHBMaW5rIGNvbnN0cnVjdG9yLiBGb3IgZXhhbXBsZTpcXG5cXG5pbXBvcnQgZmV0Y2ggZnJvbSAnY3Jvc3MtZmV0Y2gnO1xcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSHR0cExpbmsgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XFxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XFxuICBsaW5rOiBuZXcgSHR0cExpbmsoeyB1cmk6ICcvZ3JhcGhxbCcsIGZldGNoIH0pXFxufSk7XFxuICAgIFwiKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDIwKTtcbiAgICB9XG59O1xuXG52YXIgY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm4geyBjb250cm9sbGVyOiBmYWxzZSwgc2lnbmFsOiBmYWxzZSB9O1xuICAgIHZhciBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIHZhciBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcbiAgICByZXR1cm4geyBjb250cm9sbGVyOiBjb250cm9sbGVyLCBzaWduYWw6IHNpZ25hbCB9O1xufTtcblxudmFyIHNlbGVjdFVSSSA9IGZ1bmN0aW9uIChvcGVyYXRpb24sIGZhbGxiYWNrVVJJKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcGVyYXRpb24uZ2V0Q29udGV4dCgpO1xuICAgIHZhciBjb250ZXh0VVJJID0gY29udGV4dC51cmk7XG4gICAgaWYgKGNvbnRleHRVUkkpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHRVUkk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBmYWxsYmFja1VSSSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmFsbGJhY2tVUkkob3BlcmF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxsYmFja1VSSSB8fCAnL2dyYXBocWwnO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHJld3JpdGVVUklGb3JHRVQoY2hvc2VuVVJJLCBib2R5KSB7XG4gICAgdmFyIHF1ZXJ5UGFyYW1zID0gW107XG4gICAgdmFyIGFkZFF1ZXJ5UGFyYW0gPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBxdWVyeVBhcmFtcy5wdXNoKFwiXCIuY29uY2F0KGtleSwgXCI9XCIpLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSk7XG4gICAgfTtcbiAgICBpZiAoJ3F1ZXJ5JyBpbiBib2R5KSB7XG4gICAgICAgIGFkZFF1ZXJ5UGFyYW0oJ3F1ZXJ5JywgYm9keS5xdWVyeSk7XG4gICAgfVxuICAgIGlmIChib2R5Lm9wZXJhdGlvbk5hbWUpIHtcbiAgICAgICAgYWRkUXVlcnlQYXJhbSgnb3BlcmF0aW9uTmFtZScsIGJvZHkub3BlcmF0aW9uTmFtZSk7XG4gICAgfVxuICAgIGlmIChib2R5LnZhcmlhYmxlcykge1xuICAgICAgICB2YXIgc2VyaWFsaXplZFZhcmlhYmxlcyA9IHZvaWQgMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRWYXJpYWJsZXMgPSBzZXJpYWxpemVGZXRjaFBhcmFtZXRlcihib2R5LnZhcmlhYmxlcywgJ1ZhcmlhYmxlcyBtYXAnKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgcGFyc2VFcnJvcjogcGFyc2VFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGFkZFF1ZXJ5UGFyYW0oJ3ZhcmlhYmxlcycsIHNlcmlhbGl6ZWRWYXJpYWJsZXMpO1xuICAgIH1cbiAgICBpZiAoYm9keS5leHRlbnNpb25zKSB7XG4gICAgICAgIHZhciBzZXJpYWxpemVkRXh0ZW5zaW9ucyA9IHZvaWQgMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRFeHRlbnNpb25zID0gc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIoYm9keS5leHRlbnNpb25zLCAnRXh0ZW5zaW9ucyBtYXAnKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgcGFyc2VFcnJvcjogcGFyc2VFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGFkZFF1ZXJ5UGFyYW0oJ2V4dGVuc2lvbnMnLCBzZXJpYWxpemVkRXh0ZW5zaW9ucyk7XG4gICAgfVxuICAgIHZhciBmcmFnbWVudCA9ICcnLCBwcmVGcmFnbWVudCA9IGNob3NlblVSSTtcbiAgICB2YXIgZnJhZ21lbnRTdGFydCA9IGNob3NlblVSSS5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGZyYWdtZW50U3RhcnQgIT09IC0xKSB7XG4gICAgICAgIGZyYWdtZW50ID0gY2hvc2VuVVJJLnN1YnN0cihmcmFnbWVudFN0YXJ0KTtcbiAgICAgICAgcHJlRnJhZ21lbnQgPSBjaG9zZW5VUkkuc3Vic3RyKDAsIGZyYWdtZW50U3RhcnQpO1xuICAgIH1cbiAgICB2YXIgcXVlcnlQYXJhbXNQcmVmaXggPSBwcmVGcmFnbWVudC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnO1xuICAgIHZhciBuZXdVUkkgPSBwcmVGcmFnbWVudCArIHF1ZXJ5UGFyYW1zUHJlZml4ICsgcXVlcnlQYXJhbXMuam9pbignJicpICsgZnJhZ21lbnQ7XG4gICAgcmV0dXJuIHsgbmV3VVJJOiBuZXdVUkkgfTtcbn1cblxudmFyIGJhY2t1cEZldGNoID0gdXRpbGl0aWVzLm1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZldGNoOyB9KTtcbnZhciBjcmVhdGVIdHRwTGluayA9IGZ1bmN0aW9uIChsaW5rT3B0aW9ucykge1xuICAgIGlmIChsaW5rT3B0aW9ucyA9PT0gdm9pZCAwKSB7IGxpbmtPcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBsaW5rT3B0aW9ucy51cmksIHVyaSA9IF9hID09PSB2b2lkIDAgPyAnL2dyYXBocWwnIDogX2EsIHByZWZlcnJlZEZldGNoID0gbGlua09wdGlvbnMuZmV0Y2gsIF9iID0gbGlua09wdGlvbnMucHJpbnQsIHByaW50ID0gX2IgPT09IHZvaWQgMCA/IGRlZmF1bHRQcmludGVyIDogX2IsIGluY2x1ZGVFeHRlbnNpb25zID0gbGlua09wdGlvbnMuaW5jbHVkZUV4dGVuc2lvbnMsIHVzZUdFVEZvclF1ZXJpZXMgPSBsaW5rT3B0aW9ucy51c2VHRVRGb3JRdWVyaWVzLCBfYyA9IGxpbmtPcHRpb25zLmluY2x1ZGVVbnVzZWRWYXJpYWJsZXMsIGluY2x1ZGVVbnVzZWRWYXJpYWJsZXMgPSBfYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYywgcmVxdWVzdE9wdGlvbnMgPSB0c2xpYi5fX3Jlc3QobGlua09wdGlvbnMsIFtcInVyaVwiLCBcImZldGNoXCIsIFwicHJpbnRcIiwgXCJpbmNsdWRlRXh0ZW5zaW9uc1wiLCBcInVzZUdFVEZvclF1ZXJpZXNcIiwgXCJpbmNsdWRlVW51c2VkVmFyaWFibGVzXCJdKTtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBjaGVja0ZldGNoZXIocHJlZmVycmVkRmV0Y2ggfHwgYmFja3VwRmV0Y2gpO1xuICAgIH1cbiAgICB2YXIgbGlua0NvbmZpZyA9IHtcbiAgICAgICAgaHR0cDogeyBpbmNsdWRlRXh0ZW5zaW9uczogaW5jbHVkZUV4dGVuc2lvbnMgfSxcbiAgICAgICAgb3B0aW9uczogcmVxdWVzdE9wdGlvbnMuZmV0Y2hPcHRpb25zLFxuICAgICAgICBjcmVkZW50aWFsczogcmVxdWVzdE9wdGlvbnMuY3JlZGVudGlhbHMsXG4gICAgICAgIGhlYWRlcnM6IHJlcXVlc3RPcHRpb25zLmhlYWRlcnMsXG4gICAgfTtcbiAgICByZXR1cm4gbmV3IGNvcmUuQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICAgIHZhciBjaG9zZW5VUkkgPSBzZWxlY3RVUkkob3BlcmF0aW9uLCB1cmkpO1xuICAgICAgICB2YXIgY29udGV4dCA9IG9wZXJhdGlvbi5nZXRDb250ZXh0KCk7XG4gICAgICAgIHZhciBjbGllbnRBd2FyZW5lc3NIZWFkZXJzID0ge307XG4gICAgICAgIGlmIChjb250ZXh0LmNsaWVudEF3YXJlbmVzcykge1xuICAgICAgICAgICAgdmFyIF9hID0gY29udGV4dC5jbGllbnRBd2FyZW5lc3MsIG5hbWVfMSA9IF9hLm5hbWUsIHZlcnNpb24gPSBfYS52ZXJzaW9uO1xuICAgICAgICAgICAgaWYgKG5hbWVfMSkge1xuICAgICAgICAgICAgICAgIGNsaWVudEF3YXJlbmVzc0hlYWRlcnNbJ2Fwb2xsb2dyYXBocWwtY2xpZW50LW5hbWUnXSA9IG5hbWVfMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgY2xpZW50QXdhcmVuZXNzSGVhZGVyc1snYXBvbGxvZ3JhcGhxbC1jbGllbnQtdmVyc2lvbiddID0gdmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY29udGV4dEhlYWRlcnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY2xpZW50QXdhcmVuZXNzSGVhZGVycyksIGNvbnRleHQuaGVhZGVycyk7XG4gICAgICAgIHZhciBjb250ZXh0Q29uZmlnID0ge1xuICAgICAgICAgICAgaHR0cDogY29udGV4dC5odHRwLFxuICAgICAgICAgICAgb3B0aW9uczogY29udGV4dC5mZXRjaE9wdGlvbnMsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogY29udGV4dC5jcmVkZW50aWFscyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGNvbnRleHRIZWFkZXJzLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgX2IgPSBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHlJbnRlcm5hbChvcGVyYXRpb24sIHByaW50LCBmYWxsYmFja0h0dHBDb25maWcsIGxpbmtDb25maWcsIGNvbnRleHRDb25maWcpLCBvcHRpb25zID0gX2Iub3B0aW9ucywgYm9keSA9IF9iLmJvZHk7XG4gICAgICAgIGlmIChib2R5LnZhcmlhYmxlcyAmJiAhaW5jbHVkZVVudXNlZFZhcmlhYmxlcykge1xuICAgICAgICAgICAgdmFyIHVudXNlZE5hbWVzXzEgPSBuZXcgU2V0KE9iamVjdC5rZXlzKGJvZHkudmFyaWFibGVzKSk7XG4gICAgICAgICAgICBncmFwaHFsLnZpc2l0KG9wZXJhdGlvbi5xdWVyeSwge1xuICAgICAgICAgICAgICAgIFZhcmlhYmxlOiBmdW5jdGlvbiAobm9kZSwgX2tleSwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmtpbmQgIT09ICdWYXJpYWJsZURlZmluaXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnVzZWROYW1lc18xLmRlbGV0ZShub2RlLm5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHVudXNlZE5hbWVzXzEuc2l6ZSkge1xuICAgICAgICAgICAgICAgIGJvZHkudmFyaWFibGVzID0gdHNsaWIuX19hc3NpZ24oe30sIGJvZHkudmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICB1bnVzZWROYW1lc18xLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGJvZHkudmFyaWFibGVzW25hbWVdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb250cm9sbGVyO1xuICAgICAgICBpZiAoIW9wdGlvbnMuc2lnbmFsKSB7XG4gICAgICAgICAgICB2YXIgX2MgPSBjcmVhdGVTaWduYWxJZlN1cHBvcnRlZCgpLCBfY29udHJvbGxlciA9IF9jLmNvbnRyb2xsZXIsIHNpZ25hbCA9IF9jLnNpZ25hbDtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBfY29udHJvbGxlcjtcbiAgICAgICAgICAgIGlmIChjb250cm9sbGVyKVxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2lnbmFsID0gc2lnbmFsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWZpbml0aW9uSXNNdXRhdGlvbiA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiYgZC5vcGVyYXRpb24gPT09ICdtdXRhdGlvbic7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh1c2VHRVRGb3JRdWVyaWVzICYmXG4gICAgICAgICAgICAhb3BlcmF0aW9uLnF1ZXJ5LmRlZmluaXRpb25zLnNvbWUoZGVmaW5pdGlvbklzTXV0YXRpb24pKSB7XG4gICAgICAgICAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgIHZhciBfZCA9IHJld3JpdGVVUklGb3JHRVQoY2hvc2VuVVJJLCBib2R5KSwgbmV3VVJJID0gX2QubmV3VVJJLCBwYXJzZUVycm9yID0gX2QucGFyc2VFcnJvcjtcbiAgICAgICAgICAgIGlmIChwYXJzZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZyb21FcnJvcihwYXJzZUVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNob3NlblVSSSA9IG5ld1VSSTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIoYm9keSwgJ1BheWxvYWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChwYXJzZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZyb21FcnJvcihwYXJzZUVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IHV0aWxpdGllcy5PYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRGZXRjaCA9IHByZWZlcnJlZEZldGNoIHx8IHV0aWxpdGllcy5tYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBmZXRjaDsgfSkgfHwgYmFja3VwRmV0Y2g7XG4gICAgICAgICAgICBjdXJyZW50RmV0Y2goY2hvc2VuVVJJLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5zZXRDb250ZXh0KHsgcmVzcG9uc2U6IHJlc3BvbnNlIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocGFyc2VBbmRDaGVja0h0dHBSZXNwb25zZShvcGVyYXRpb24pKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKGVyci5yZXN1bHQgJiYgZXJyLnJlc3VsdC5lcnJvcnMgJiYgZXJyLnJlc3VsdC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZXJyLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxudmFyIEh0dHBMaW5rID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoSHR0cExpbmssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSHR0cExpbmsob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjcmVhdGVIdHRwTGluayhvcHRpb25zKS5yZXF1ZXN0KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSHR0cExpbms7XG59KGNvcmUuQXBvbGxvTGluaykpO1xuXG5leHBvcnRzLkh0dHBMaW5rID0gSHR0cExpbms7XG5leHBvcnRzLmNoZWNrRmV0Y2hlciA9IGNoZWNrRmV0Y2hlcjtcbmV4cG9ydHMuY3JlYXRlSHR0cExpbmsgPSBjcmVhdGVIdHRwTGluaztcbmV4cG9ydHMuY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQgPSBjcmVhdGVTaWduYWxJZlN1cHBvcnRlZDtcbmV4cG9ydHMuZGVmYXVsdFByaW50ZXIgPSBkZWZhdWx0UHJpbnRlcjtcbmV4cG9ydHMuZmFsbGJhY2tIdHRwQ29uZmlnID0gZmFsbGJhY2tIdHRwQ29uZmlnO1xuZXhwb3J0cy5wYXJzZUFuZENoZWNrSHR0cFJlc3BvbnNlID0gcGFyc2VBbmRDaGVja0h0dHBSZXNwb25zZTtcbmV4cG9ydHMucmV3cml0ZVVSSUZvckdFVCA9IHJld3JpdGVVUklGb3JHRVQ7XG5leHBvcnRzLnNlbGVjdEh0dHBPcHRpb25zQW5kQm9keSA9IHNlbGVjdEh0dHBPcHRpb25zQW5kQm9keTtcbmV4cG9ydHMuc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5SW50ZXJuYWwgPSBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHlJbnRlcm5hbDtcbmV4cG9ydHMuc2VsZWN0VVJJID0gc2VsZWN0VVJJO1xuZXhwb3J0cy5zZXJpYWxpemVGZXRjaFBhcmFtZXRlciA9IHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG5cbmZ1bmN0aW9uIGZyb21FcnJvcihlcnJvclZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyB1dGlsaXRpZXMuT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3JWYWx1ZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvUHJvbWlzZShvYnNlcnZhYmxlKSB7XG4gICAgdmFyIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJQcm9taXNlIFdyYXBwZXIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSByZXN1bHRzIGZyb20gT2JzZXJ2YWJsZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmcm9tUHJvbWlzZShwcm9taXNlKSB7XG4gICAgcmV0dXJuIG5ldyB1dGlsaXRpZXMuT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2gob2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlcikpO1xuICAgIH0pO1xufVxuXG52YXIgdGhyb3dTZXJ2ZXJFcnJvciA9IGZ1bmN0aW9uIChyZXNwb25zZSwgcmVzdWx0LCBtZXNzYWdlKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIGVycm9yLm5hbWUgPSAnU2VydmVyRXJyb3InO1xuICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgZXJyb3Iuc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICBlcnJvci5yZXN1bHQgPSByZXN1bHQ7XG4gICAgdGhyb3cgZXJyb3I7XG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU9wZXJhdGlvbihvcGVyYXRpb24pIHtcbiAgICB2YXIgT1BFUkFUSU9OX0ZJRUxEUyA9IFtcbiAgICAgICAgJ3F1ZXJ5JyxcbiAgICAgICAgJ29wZXJhdGlvbk5hbWUnLFxuICAgICAgICAndmFyaWFibGVzJyxcbiAgICAgICAgJ2V4dGVuc2lvbnMnLFxuICAgICAgICAnY29udGV4dCcsXG4gICAgXTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMob3BlcmF0aW9uKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcbiAgICAgICAgaWYgKE9QRVJBVElPTl9GSUVMRFMuaW5kZXhPZihrZXkpIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiaWxsZWdhbCBhcmd1bWVudDogXCIuY29uY2F0KGtleSkpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoMjQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcGVyYXRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wZXJhdGlvbihzdGFydGluZywgb3BlcmF0aW9uKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0c2xpYi5fX2Fzc2lnbih7fSwgc3RhcnRpbmcpO1xuICAgIHZhciBzZXRDb250ZXh0ID0gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCBuZXh0KGNvbnRleHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIG5leHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCkpOyB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcGVyYXRpb24sICdzZXRDb250ZXh0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHNldENvbnRleHQsXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9wZXJhdGlvbiwgJ2dldENvbnRleHQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogZ2V0Q29udGV4dCxcbiAgICB9KTtcbiAgICByZXR1cm4gb3BlcmF0aW9uO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1PcGVyYXRpb24ob3BlcmF0aW9uKSB7XG4gICAgdmFyIHRyYW5zZm9ybWVkT3BlcmF0aW9uID0ge1xuICAgICAgICB2YXJpYWJsZXM6IG9wZXJhdGlvbi52YXJpYWJsZXMgfHwge30sXG4gICAgICAgIGV4dGVuc2lvbnM6IG9wZXJhdGlvbi5leHRlbnNpb25zIHx8IHt9LFxuICAgICAgICBvcGVyYXRpb25OYW1lOiBvcGVyYXRpb24ub3BlcmF0aW9uTmFtZSxcbiAgICAgICAgcXVlcnk6IG9wZXJhdGlvbi5xdWVyeSxcbiAgICB9O1xuICAgIGlmICghdHJhbnNmb3JtZWRPcGVyYXRpb24ub3BlcmF0aW9uTmFtZSkge1xuICAgICAgICB0cmFuc2Zvcm1lZE9wZXJhdGlvbi5vcGVyYXRpb25OYW1lID1cbiAgICAgICAgICAgIHR5cGVvZiB0cmFuc2Zvcm1lZE9wZXJhdGlvbi5xdWVyeSAhPT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IHV0aWxpdGllcy5nZXRPcGVyYXRpb25OYW1lKHRyYW5zZm9ybWVkT3BlcmF0aW9uLnF1ZXJ5KSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA6ICcnO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRPcGVyYXRpb247XG59XG5cbmV4cG9ydHMuY3JlYXRlT3BlcmF0aW9uID0gY3JlYXRlT3BlcmF0aW9uO1xuZXhwb3J0cy5mcm9tRXJyb3IgPSBmcm9tRXJyb3I7XG5leHBvcnRzLmZyb21Qcm9taXNlID0gZnJvbVByb21pc2U7XG5leHBvcnRzLnRocm93U2VydmVyRXJyb3IgPSB0aHJvd1NlcnZlckVycm9yO1xuZXhwb3J0cy50b1Byb21pc2UgPSB0b1Byb21pc2U7XG5leHBvcnRzLnRyYW5zZm9ybU9wZXJhdGlvbiA9IHRyYW5zZm9ybU9wZXJhdGlvbjtcbmV4cG9ydHMudmFsaWRhdGVPcGVyYXRpb24gPSB2YWxpZGF0ZU9wZXJhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvcmUgPSByZXF1aXJlKCcuL2NvcmUnKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJy4vcmVhY3QnKTtcblxuXG5cbmZvciAodmFyIGsgaW4gY29yZSkge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBleHBvcnRzW2tdID0gY29yZVtrXTtcbn1cbmZvciAodmFyIGsgaW4gcmVhY3QpIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgZXhwb3J0c1trXSA9IHJlYWN0W2tdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG5cbnZhciBnZW5lcmljTWVzc2FnZSA9IFwiSW52YXJpYW50IFZpb2xhdGlvblwiO1xyXG52YXIgX2EgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YsIHNldFByb3RvdHlwZU9mID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChvYmosIHByb3RvKSB7XHJcbiAgICBvYmouX19wcm90b19fID0gcHJvdG87XHJcbiAgICByZXR1cm4gb2JqO1xyXG59IDogX2E7XHJcbnZhciBJbnZhcmlhbnRFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIHRzbGliLl9fZXh0ZW5kcyhJbnZhcmlhbnRFcnJvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEludmFyaWFudEVycm9yKG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAobWVzc2FnZSA9PT0gdm9pZCAwKSB7IG1lc3NhZ2UgPSBnZW5lcmljTWVzc2FnZTsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHR5cGVvZiBtZXNzYWdlID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgID8gZ2VuZXJpY01lc3NhZ2UgKyBcIjogXCIgKyBtZXNzYWdlICsgXCIgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vYXBvbGxvZ3JhcGhxbC9pbnZhcmlhbnQtcGFja2FnZXMpXCJcclxuICAgICAgICAgICAgOiBtZXNzYWdlKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmZyYW1lc1RvUG9wID0gMTtcclxuICAgICAgICBfdGhpcy5uYW1lID0gZ2VuZXJpY01lc3NhZ2U7XHJcbiAgICAgICAgc2V0UHJvdG90eXBlT2YoX3RoaXMsIEludmFyaWFudEVycm9yLnByb3RvdHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEludmFyaWFudEVycm9yO1xyXG59KEVycm9yKSk7XHJcbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcclxuICAgIGlmICghY29uZGl0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEludmFyaWFudEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcbnZhciB2ZXJib3NpdHlMZXZlbHMgPSBbXCJkZWJ1Z1wiLCBcImxvZ1wiLCBcIndhcm5cIiwgXCJlcnJvclwiLCBcInNpbGVudFwiXTtcclxudmFyIHZlcmJvc2l0eUxldmVsID0gdmVyYm9zaXR5TGV2ZWxzLmluZGV4T2YoXCJsb2dcIik7XHJcbmZ1bmN0aW9uIHdyYXBDb25zb2xlTWV0aG9kKG5hbWUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZlcmJvc2l0eUxldmVscy5pbmRleE9mKG5hbWUpID49IHZlcmJvc2l0eUxldmVsKSB7XHJcbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gY29uc29sZS5sb2cgaWYgdGhpcyBob3N0IGVudmlyb25tZW50IGhhcHBlbnMgbm90IHRvIHByb3ZpZGVcclxuICAgICAgICAgICAgLy8gYWxsIHRoZSBjb25zb2xlLiogbWV0aG9kcyB3ZSBuZWVkLlxyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gY29uc29sZVtuYW1lXSB8fCBjb25zb2xlLmxvZztcclxuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZC5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuKGZ1bmN0aW9uIChpbnZhcmlhbnQpIHtcclxuICAgIGludmFyaWFudC5kZWJ1ZyA9IHdyYXBDb25zb2xlTWV0aG9kKFwiZGVidWdcIik7XHJcbiAgICBpbnZhcmlhbnQubG9nID0gd3JhcENvbnNvbGVNZXRob2QoXCJsb2dcIik7XHJcbiAgICBpbnZhcmlhbnQud2FybiA9IHdyYXBDb25zb2xlTWV0aG9kKFwid2FyblwiKTtcclxuICAgIGludmFyaWFudC5lcnJvciA9IHdyYXBDb25zb2xlTWV0aG9kKFwiZXJyb3JcIik7XHJcbn0pKGludmFyaWFudCB8fCAoaW52YXJpYW50ID0ge30pKTtcclxuZnVuY3Rpb24gc2V0VmVyYm9zaXR5KGxldmVsKSB7XHJcbiAgICB2YXIgb2xkID0gdmVyYm9zaXR5TGV2ZWxzW3ZlcmJvc2l0eUxldmVsXTtcclxuICAgIHZlcmJvc2l0eUxldmVsID0gTWF0aC5tYXgoMCwgdmVyYm9zaXR5TGV2ZWxzLmluZGV4T2YobGV2ZWwpKTtcclxuICAgIHJldHVybiBvbGQ7XHJcbn1cclxudmFyIGludmFyaWFudCQxID0gaW52YXJpYW50O1xuXG5leHBvcnRzLkludmFyaWFudEVycm9yID0gSW52YXJpYW50RXJyb3I7XG5leHBvcnRzWydkZWZhdWx0J10gPSBpbnZhcmlhbnQkMTtcbmV4cG9ydHMuaW52YXJpYW50ID0gaW52YXJpYW50O1xuZXhwb3J0cy5zZXRWZXJib3NpdHkgPSBzZXRWZXJib3NpdHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnZhcmlhbnQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIG1heWJlKHRodW5rKSB7XG4gIHRyeSB7IHJldHVybiB0aHVuaygpIH0gY2F0Y2ggKF8pIHt9XG59XG5cbnZhciBzYWZlR2xvYmFsID0gKFxuICBtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIGdsb2JhbFRoaXMgfSkgfHxcbiAgbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiB3aW5kb3cgfSkgfHxcbiAgbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiBzZWxmIH0pIHx8XG4gIG1heWJlKGZ1bmN0aW9uKCkgeyByZXR1cm4gZ2xvYmFsIH0pIHx8XG4gIC8vIFdlIGRvbid0IGV4cGVjdCB0aGUgRnVuY3Rpb24gY29uc3RydWN0b3IgZXZlciB0byBiZSBpbnZva2VkIGF0IHJ1bnRpbWUsIGFzXG4gIC8vIGxvbmcgYXMgYXQgbGVhc3Qgb25lIG9mIGdsb2JhbFRoaXMsIHdpbmRvdywgc2VsZiwgb3IgZ2xvYmFsIGlzIGRlZmluZWQsIHNvXG4gIC8vIHdlIGFyZSB1bmRlciBubyBvYmxpZ2F0aW9uIHRvIG1ha2UgaXQgZWFzeSBmb3Igc3RhdGljIGFuYWx5c2lzIHRvb2xzIHRvXG4gIC8vIGRldGVjdCBzeW50YWN0aWMgdXNhZ2Ugb2YgdGhlIEZ1bmN0aW9uIGNvbnN0cnVjdG9yLiBJZiB5b3UgdGhpbmsgeW91IGNhblxuICAvLyBpbXByb3ZlIHlvdXIgc3RhdGljIGFuYWx5c2lzIHRvIGRldGVjdCB0aGlzIG9iZnVzY2F0aW9uLCB0aGluayBhZ2Fpbi4gVGhpc1xuICAvLyBpcyBhbiBhcm1zIHJhY2UgeW91IGNhbm5vdCB3aW4sIGF0IGxlYXN0IG5vdCBpbiBKYXZhU2NyaXB0LlxuICBtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIG1heWJlLmNvbnN0cnVjdG9yKFwicmV0dXJuIHRoaXNcIikoKSB9KVxuKTtcblxudmFyIG5lZWRUb1JlbW92ZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiBpbnN0YWxsKCkge1xuICBpZiAoc2FmZUdsb2JhbCAmJlxuICAgICAgIW1heWJlKGZ1bmN0aW9uKCkgeyByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfSkgJiZcbiAgICAgICFtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIHByb2Nlc3MgfSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2FmZUdsb2JhbCwgXCJwcm9jZXNzXCIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGVudjoge1xuICAgICAgICAgIC8vIFRoaXMgZGVmYXVsdCBuZWVkcyB0byBiZSBcInByb2R1Y3Rpb25cIiBpbnN0ZWFkIG9mIFwiZGV2ZWxvcG1lbnRcIiwgdG9cbiAgICAgICAgICAvLyBhdm9pZCB0aGUgcHJvYmxlbSBodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL3B1bGwvMjg5NFxuICAgICAgICAgIC8vIHdpbGwgZXZlbnR1YWxseSBzb2x2ZSwgb25jZSBtZXJnZWQgYW5kIHJlbGVhc2VkLlxuICAgICAgICAgIE5PREVfRU5WOiBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBMZXQgYW55b25lIGVsc2UgY2hhbmdlIGdsb2JhbC5wcm9jZXNzIGFzIHRoZXkgc2VlIGZpdCwgYnV0IGhpZGUgaXQgZnJvbVxuICAgICAgLy8gT2JqZWN0LmtleXMoZ2xvYmFsKSBlbnVtZXJhdGlvbi5cbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSk7XG4gICAgbmVlZFRvUmVtb3ZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vLyBDYWxsIGluc3RhbGwoKSBhdCBsZWFzdCBvbmNlLCB3aGVuIHRoaXMgbW9kdWxlIGlzIGltcG9ydGVkLlxuaW5zdGFsbCgpO1xuXG5mdW5jdGlvbiByZW1vdmUoKSB7XG4gIGlmIChuZWVkVG9SZW1vdmUpIHtcbiAgICBkZWxldGUgc2FmZUdsb2JhbC5wcm9jZXNzO1xuICAgIG5lZWRUb1JlbW92ZSA9IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGluc3RhbGw7XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wTmFtZXNwYWNlKGUpIHtcbiAgICBpZiAoZSAmJiBlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xuICAgIHZhciBuID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBpZiAoZSkge1xuICAgICAgICBmb3IgKHZhciBrIGluIGUpIHtcbiAgICAgICAgICAgIG5ba10gPSBlW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5bXCJkZWZhdWx0XCJdID0gZTtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShuKTtcbn1cblxudmFyIFJlYWN0X19uYW1lc3BhY2UgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BOYW1lc3BhY2UoUmVhY3QpO1xuXG52YXIgY29udGV4dEtleSA9IHV0aWxpdGllcy5jYW5Vc2VTeW1ib2xcbiAgICA/IFN5bWJvbC5mb3IoJ19fQVBPTExPX0NPTlRFWFRfXycpXG4gICAgOiAnX19BUE9MTE9fQ09OVEVYVF9fJztcbmZ1bmN0aW9uIGdldEFwb2xsb0NvbnRleHQoKSB7XG4gICAgdmFyIGNvbnRleHQgPSBSZWFjdF9fbmFtZXNwYWNlLmNyZWF0ZUNvbnRleHRbY29udGV4dEtleV07XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFjdF9fbmFtZXNwYWNlLmNyZWF0ZUNvbnRleHQsIGNvbnRleHRLZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiBjb250ZXh0ID0gUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVDb250ZXh0KHt9KSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29udGV4dC5kaXNwbGF5TmFtZSA9ICdBcG9sbG9Db250ZXh0JztcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBBcG9sbG9Db25zdW1lciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dCgpO1xuICAgIHJldHVybiBSZWFjdF9fbmFtZXNwYWNlLmNyZWF0ZUVsZW1lbnQoQXBvbGxvQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGNvbnRleHQgJiYgY29udGV4dC5jbGllbnQsICdDb3VsZCBub3QgZmluZCBcImNsaWVudFwiIGluIHRoZSBjb250ZXh0IG9mIEFwb2xsb0NvbnN1bWVyLiAnICtcbiAgICAgICAgICAgICdXcmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhbiA8QXBvbGxvUHJvdmlkZXI+LicpIDogZ2xvYmFscy5pbnZhcmlhbnQoY29udGV4dCAmJiBjb250ZXh0LmNsaWVudCwgMjUpO1xuICAgICAgICByZXR1cm4gcHJvcHMuY2hpbGRyZW4oY29udGV4dC5jbGllbnQpO1xuICAgIH0pO1xufTtcblxudmFyIEFwb2xsb1Byb3ZpZGVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNsaWVudCA9IF9hLmNsaWVudCwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcbiAgICB2YXIgQXBvbGxvQ29udGV4dCA9IGdldEFwb2xsb0NvbnRleHQoKTtcbiAgICByZXR1cm4gUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgICAgIGlmIChjbGllbnQgJiYgY29udGV4dC5jbGllbnQgIT09IGNsaWVudCkge1xuICAgICAgICAgICAgY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHsgY2xpZW50OiBjbGllbnQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGNvbnRleHQuY2xpZW50LCAnQXBvbGxvUHJvdmlkZXIgd2FzIG5vdCBwYXNzZWQgYSBjbGllbnQgaW5zdGFuY2UuIE1ha2UgJyArXG4gICAgICAgICAgICAnc3VyZSB5b3UgcGFzcyBpbiB5b3VyIGNsaWVudCB2aWEgdGhlIFwiY2xpZW50XCIgcHJvcC4nKSA6IGdsb2JhbHMuaW52YXJpYW50KGNvbnRleHQuY2xpZW50LCAyNik7XG4gICAgICAgIHJldHVybiAoUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHQgfSwgY2hpbGRyZW4pKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydHMuQXBvbGxvQ29uc3VtZXIgPSBBcG9sbG9Db25zdW1lcjtcbmV4cG9ydHMuQXBvbGxvUHJvdmlkZXIgPSBBcG9sbG9Qcm92aWRlcjtcbmV4cG9ydHMuZ2V0QXBvbGxvQ29udGV4dCA9IGdldEFwb2xsb0NvbnRleHQ7XG5leHBvcnRzLnJlc2V0QXBvbGxvQ29udGV4dCA9IGdldEFwb2xsb0NvbnRleHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZXh0LmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIHJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjb250ZXh0ID0gcmVxdWlyZSgnLi4vY29udGV4dCcpO1xudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciBlcXVhbGl0eSA9IHJlcXVpcmUoJ0B3cnkvZXF1YWxpdHknKTtcbnZhciBlcnJvcnMgPSByZXF1aXJlKCcuLi8uLi9lcnJvcnMnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vY29yZScpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJy4uL3BhcnNlcicpO1xuXG5mdW5jdGlvbiB1c2VBcG9sbG9DbGllbnQob3ZlcnJpZGUpIHtcbiAgICB2YXIgY29udGV4dCQxID0gcmVhY3QudXNlQ29udGV4dChjb250ZXh0LmdldEFwb2xsb0NvbnRleHQoKSk7XG4gICAgdmFyIGNsaWVudCA9IG92ZXJyaWRlIHx8IGNvbnRleHQkMS5jbGllbnQ7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KCEhY2xpZW50LCAnQ291bGQgbm90IGZpbmQgXCJjbGllbnRcIiBpbiB0aGUgY29udGV4dCBvciBwYXNzZWQgaW4gYXMgYW4gb3B0aW9uLiAnICtcbiAgICAgICAgJ1dyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGFuIDxBcG9sbG9Qcm92aWRlcj4sIG9yIHBhc3MgYW4gQXBvbGxvQ2xpZW50JyArXG4gICAgICAgICdBcG9sbG9DbGllbnQgaW5zdGFuY2UgaW4gdmlhIG9wdGlvbnMuJykgOiBnbG9iYWxzLmludmFyaWFudCghIWNsaWVudCwgMjkpO1xuICAgIHJldHVybiBjbGllbnQ7XG59XG5cbmZ1bmN0aW9uIHVzZVF1ZXJ5KHF1ZXJ5LCBvcHRpb25zKSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciBjb250ZXh0JDEgPSByZWFjdC51c2VDb250ZXh0KGNvbnRleHQuZ2V0QXBvbGxvQ29udGV4dCgpKTtcbiAgICB2YXIgY2xpZW50ID0gdXNlQXBvbGxvQ2xpZW50KG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jbGllbnQpO1xuICAgIHBhcnNlci52ZXJpZnlEb2N1bWVudFR5cGUocXVlcnksIHBhcnNlci5Eb2N1bWVudFR5cGUuUXVlcnkpO1xuICAgIHZhciBfYiA9IHJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdhdGNoUXVlcnlPcHRpb25zID0gY3JlYXRlV2F0Y2hRdWVyeU9wdGlvbnMocXVlcnksIG9wdGlvbnMpO1xuICAgICAgICB2YXIgb2JzUXVlcnkgPSBudWxsO1xuICAgICAgICBpZiAoY29udGV4dCQxLnJlbmRlclByb21pc2VzKSB7XG4gICAgICAgICAgICBvYnNRdWVyeSA9IGNvbnRleHQkMS5yZW5kZXJQcm9taXNlcy5nZXRTU1JPYnNlcnZhYmxlKHdhdGNoUXVlcnlPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9ic1F1ZXJ5KSB7XG4gICAgICAgICAgICBvYnNRdWVyeSA9IGNsaWVudC53YXRjaFF1ZXJ5KHdhdGNoUXVlcnlPcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0JDEucmVuZGVyUHJvbWlzZXMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0JDEucmVuZGVyUHJvbWlzZXMucmVnaXN0ZXJTU1JPYnNlcnZhYmxlKG9ic1F1ZXJ5LCB3YXRjaFF1ZXJ5T3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQkMS5yZW5kZXJQcm9taXNlcyAmJlxuICAgICAgICAgICAgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zc3IpICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgIShvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2tpcCkgJiZcbiAgICAgICAgICAgIG9ic1F1ZXJ5LmdldEN1cnJlbnRSZXN1bHQoKS5sb2FkaW5nKSB7XG4gICAgICAgICAgICBjb250ZXh0JDEucmVuZGVyUHJvbWlzZXMuYWRkUXVlcnlQcm9taXNlKHtcbiAgICAgICAgICAgICAgICBnZXRPcHRpb25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiBjcmVhdGVXYXRjaFF1ZXJ5T3B0aW9ucyhxdWVyeSwgb3B0aW9ucyk7IH0sXG4gICAgICAgICAgICAgICAgZmV0Y2hEYXRhOiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ViID0gb2JzUXVlcnkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7IH0sXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JzUXVlcnk7XG4gICAgfSksIG9ic1F1ZXJ5ID0gX2JbMF0sIHNldE9ic1F1ZXJ5ID0gX2JbMV07XG4gICAgdmFyIF9jID0gcmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB2YXIgcmVzdWx0ID0gb2JzUXVlcnkuZ2V0Q3VycmVudFJlc3VsdCgpO1xuICAgICAgICBpZiAoIXJlc3VsdC5sb2FkaW5nICYmIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAoX2EgPSBvcHRpb25zLm9uRXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKG9wdGlvbnMsIHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgICAgIChfYiA9IG9wdGlvbnMub25Db21wbGV0ZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKG9wdGlvbnMsIHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pLCByZXN1bHQgPSBfY1swXSwgc2V0UmVzdWx0ID0gX2NbMV07XG4gICAgdmFyIHJlZiA9IHJlYWN0LnVzZVJlZih7XG4gICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICBwcmV2aW91c0RhdGE6IHZvaWQgMCxcbiAgICAgICAgd2F0Y2hRdWVyeU9wdGlvbnM6IGNyZWF0ZVdhdGNoUXVlcnlPcHRpb25zKHF1ZXJ5LCBvcHRpb25zKSxcbiAgICB9KTtcbiAgICByZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB2YXIgd2F0Y2hRdWVyeU9wdGlvbnMgPSBjcmVhdGVXYXRjaFF1ZXJ5T3B0aW9ucyhxdWVyeSwgb3B0aW9ucyk7XG4gICAgICAgIHZhciBuZXh0UmVzdWx0O1xuICAgICAgICBpZiAocmVmLmN1cnJlbnQuY2xpZW50ICE9PSBjbGllbnQgfHwgIWVxdWFsaXR5LmVxdWFsKHJlZi5jdXJyZW50LnF1ZXJ5LCBxdWVyeSkpIHtcbiAgICAgICAgICAgIHZhciBvYnNRdWVyeV8xID0gY2xpZW50LndhdGNoUXVlcnkod2F0Y2hRdWVyeU9wdGlvbnMpO1xuICAgICAgICAgICAgc2V0T2JzUXVlcnkob2JzUXVlcnlfMSk7XG4gICAgICAgICAgICBuZXh0UmVzdWx0ID0gb2JzUXVlcnlfMS5nZXRDdXJyZW50UmVzdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWVxdWFsaXR5LmVxdWFsKHJlZi5jdXJyZW50LndhdGNoUXVlcnlPcHRpb25zLCB3YXRjaFF1ZXJ5T3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9ic1F1ZXJ5LnNldE9wdGlvbnMod2F0Y2hRdWVyeU9wdGlvbnMpLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgICAgICBuZXh0UmVzdWx0ID0gb2JzUXVlcnkuZ2V0Q3VycmVudFJlc3VsdCgpO1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQud2F0Y2hRdWVyeU9wdGlvbnMgPSB3YXRjaFF1ZXJ5T3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dFJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gcmVmLmN1cnJlbnQucmVzdWx0O1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzUmVzdWx0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5wcmV2aW91c0RhdGEgPSBwcmV2aW91c1Jlc3VsdC5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0UmVzdWx0KHJlZi5jdXJyZW50LnJlc3VsdCA9IG5leHRSZXN1bHQpO1xuICAgICAgICAgICAgaWYgKCFuZXh0UmVzdWx0LmxvYWRpbmcgJiYgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gb3B0aW9ucy5vbkVycm9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChvcHRpb25zLCByZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX2IgPSBvcHRpb25zLm9uQ29tcGxldGVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChvcHRpb25zLCByZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmFzc2lnbihyZWYuY3VycmVudCwgeyBjbGllbnQ6IGNsaWVudCwgcXVlcnk6IHF1ZXJ5IH0pO1xuICAgIH0sIFtvYnNRdWVyeSwgY2xpZW50LCBxdWVyeSwgb3B0aW9uc10pO1xuICAgIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb250ZXh0JDEucmVuZGVyUHJvbWlzZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gb2JzUXVlcnkuc3Vic2NyaWJlKG9uTmV4dCwgb25FcnJvcik7XG4gICAgICAgIGZ1bmN0aW9uIG9uTmV4dCgpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNSZXN1bHQgPSByZWYuY3VycmVudC5yZXN1bHQ7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gb2JzUXVlcnkuZ2V0Q3VycmVudFJlc3VsdCgpO1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzUmVzdWx0ICYmXG4gICAgICAgICAgICAgICAgcHJldmlvdXNSZXN1bHQubG9hZGluZyA9PT0gcmVzdWx0LmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICBwcmV2aW91c1Jlc3VsdC5uZXR3b3JrU3RhdHVzID09PSByZXN1bHQubmV0d29ya1N0YXR1cyAmJlxuICAgICAgICAgICAgICAgIGVxdWFsaXR5LmVxdWFsKHByZXZpb3VzUmVzdWx0LmRhdGEsIHJlc3VsdC5kYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2aW91c1Jlc3VsdC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQucHJldmlvdXNEYXRhID0gcHJldmlvdXNSZXN1bHQuZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFJlc3VsdChyZWYuY3VycmVudC5yZXN1bHQgPSByZXN1bHQpO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQubG9hZGluZykge1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbkNvbXBsZXRlZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdmFyIGxhc3QgPSBvYnNRdWVyeVtcImxhc3RcIl07XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb2JzUXVlcnkucmVzZXRMYXN0UmVzdWx0cygpO1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG9ic1F1ZXJ5LnN1YnNjcmliZShvbk5leHQsIG9uRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgb2JzUXVlcnlbXCJsYXN0XCJdID0gbGFzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZXJyb3IuaGFzT3duUHJvcGVydHkoJ2dyYXBoUUxFcnJvcnMnKSkge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gcmVmLmN1cnJlbnQucmVzdWx0O1xuICAgICAgICAgICAgaWYgKChwcmV2aW91c1Jlc3VsdCAmJiBwcmV2aW91c1Jlc3VsdC5sb2FkaW5nKSB8fFxuICAgICAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbChlcnJvciwgcHJldmlvdXNSZXN1bHQuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlZi5jdXJyZW50LnJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJldmlvdXNSZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogY29yZS5OZXR3b3JrU3RhdHVzLmVycm9yLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbkVycm9yKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTsgfTtcbiAgICB9LCBbb2JzUXVlcnksIGNvbnRleHQkMS5yZW5kZXJQcm9taXNlcywgY2xpZW50LmRpc2FibGVOZXR3b3JrRmV0Y2hlc10pO1xuICAgIHZhciBwYXJ0aWFsO1xuICAgIChfYSA9IHJlc3VsdCwgcGFydGlhbCA9IF9hLnBhcnRpYWwsIHJlc3VsdCA9IHRzbGliLl9fcmVzdChfYSwgW1wicGFydGlhbFwiXSkpO1xuICAgIHtcbiAgICAgICAgaWYgKHBhcnRpYWwgJiZcbiAgICAgICAgICAgIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucGFydGlhbFJlZmV0Y2gpICYmXG4gICAgICAgICAgICAhcmVzdWx0LmxvYWRpbmcgJiZcbiAgICAgICAgICAgICghcmVzdWx0LmRhdGEgfHwgT2JqZWN0LmtleXMocmVzdWx0LmRhdGEpLmxlbmd0aCA9PT0gMCkgJiZcbiAgICAgICAgICAgIG9ic1F1ZXJ5Lm9wdGlvbnMuZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1vbmx5Jykge1xuICAgICAgICAgICAgcmVzdWx0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHJlc3VsdCksIHsgbG9hZGluZzogdHJ1ZSwgbmV0d29ya1N0YXR1czogY29yZS5OZXR3b3JrU3RhdHVzLnJlZmV0Y2ggfSk7XG4gICAgICAgICAgICBvYnNRdWVyeS5yZWZldGNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQkMS5yZW5kZXJQcm9taXNlcyAmJlxuICAgICAgICAgICAgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zc3IpICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgIShvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2tpcCkgJiZcbiAgICAgICAgICAgIHJlc3VsdC5sb2FkaW5nKSB7XG4gICAgICAgICAgICBvYnNRdWVyeS5zZXRPcHRpb25zKGNyZWF0ZVdhdGNoUXVlcnlPcHRpb25zKHF1ZXJ5LCBvcHRpb25zKSkuY2F0Y2goZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHJlZi5jdXJyZW50LCB7IG9wdGlvbnM6IG9wdGlvbnMgfSk7XG4gICAgfVxuICAgIGlmICgoY29udGV4dCQxLnJlbmRlclByb21pc2VzIHx8IGNsaWVudC5kaXNhYmxlTmV0d29ya0ZldGNoZXMpICYmXG4gICAgICAgIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc3NyKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVmLmN1cnJlbnQucmVzdWx0ID0ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBjb3JlLk5ldHdvcmtTdGF0dXMubG9hZGluZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5za2lwKSB8fCAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZldGNoUG9saWN5KSA9PT0gJ3N0YW5kYnknKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IGNvcmUuTmV0d29ya1N0YXR1cy5yZWFkeSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHJlc3VsdCksIHsgZXJyb3I6IHJlc3VsdC5lcnJvciB8fCBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHsgZ3JhcGhRTEVycm9yczogcmVzdWx0LmVycm9ycyB9KSB9KTtcbiAgICB9XG4gICAgdmFyIG9ic1F1ZXJ5RmllbGRzID0gcmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuICAgICAgICByZWZldGNoOiBvYnNRdWVyeS5yZWZldGNoLmJpbmQob2JzUXVlcnkpLFxuICAgICAgICBmZXRjaE1vcmU6IG9ic1F1ZXJ5LmZldGNoTW9yZS5iaW5kKG9ic1F1ZXJ5KSxcbiAgICAgICAgdXBkYXRlUXVlcnk6IG9ic1F1ZXJ5LnVwZGF0ZVF1ZXJ5LmJpbmQob2JzUXVlcnkpLFxuICAgICAgICBzdGFydFBvbGxpbmc6IG9ic1F1ZXJ5LnN0YXJ0UG9sbGluZy5iaW5kKG9ic1F1ZXJ5KSxcbiAgICAgICAgc3RvcFBvbGxpbmc6IG9ic1F1ZXJ5LnN0b3BQb2xsaW5nLmJpbmQob2JzUXVlcnkpLFxuICAgICAgICBzdWJzY3JpYmVUb01vcmU6IG9ic1F1ZXJ5LnN1YnNjcmliZVRvTW9yZS5iaW5kKG9ic1F1ZXJ5KSxcbiAgICB9KTsgfSwgW29ic1F1ZXJ5XSk7XG4gICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvYnNRdWVyeUZpZWxkcyksIHsgdmFyaWFibGVzOiBjcmVhdGVXYXRjaFF1ZXJ5T3B0aW9ucyhxdWVyeSwgb3B0aW9ucykudmFyaWFibGVzLCBjbGllbnQ6IGNsaWVudCwgY2FsbGVkOiB0cnVlLCBwcmV2aW91c0RhdGE6IHJlZi5jdXJyZW50LnByZXZpb3VzRGF0YSB9KSwgcmVzdWx0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVdhdGNoUXVlcnlPcHRpb25zKHF1ZXJ5LCBvcHRpb25zKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHNraXAgPSBvcHRpb25zLnNraXA7IG9wdGlvbnMuc3NyOyBvcHRpb25zLm9uQ29tcGxldGVkOyBvcHRpb25zLm9uRXJyb3I7IG9wdGlvbnMuZGlzcGxheU5hbWU7IHZhciB3YXRjaFF1ZXJ5T3B0aW9ucyA9IHRzbGliLl9fcmVzdChvcHRpb25zLCBbXCJza2lwXCIsIFwic3NyXCIsIFwib25Db21wbGV0ZWRcIiwgXCJvbkVycm9yXCIsIFwiZGlzcGxheU5hbWVcIl0pO1xuICAgIGlmIChza2lwKSB7XG4gICAgICAgIHdhdGNoUXVlcnlPcHRpb25zLmZldGNoUG9saWN5ID0gJ3N0YW5kYnknO1xuICAgIH1cbiAgICBlbHNlIGlmICgoKF9hID0gd2F0Y2hRdWVyeU9wdGlvbnMuY29udGV4dCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbmRlclByb21pc2VzKSAmJlxuICAgICAgICAod2F0Y2hRdWVyeU9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknIHx8XG4gICAgICAgICAgICB3YXRjaFF1ZXJ5T3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ2NhY2hlLWFuZC1uZXR3b3JrJykpIHtcbiAgICAgICAgd2F0Y2hRdWVyeU9wdGlvbnMuZmV0Y2hQb2xpY3kgPSAnY2FjaGUtZmlyc3QnO1xuICAgIH1cbiAgICBlbHNlIGlmICghd2F0Y2hRdWVyeU9wdGlvbnMuZmV0Y2hQb2xpY3kpIHtcbiAgICAgICAgd2F0Y2hRdWVyeU9wdGlvbnMuZmV0Y2hQb2xpY3kgPSAnY2FjaGUtZmlyc3QnO1xuICAgIH1cbiAgICBpZiAoIXdhdGNoUXVlcnlPcHRpb25zLnZhcmlhYmxlcykge1xuICAgICAgICB3YXRjaFF1ZXJ5T3B0aW9ucy52YXJpYWJsZXMgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHsgcXVlcnk6IHF1ZXJ5IH0sIHdhdGNoUXVlcnlPcHRpb25zKTtcbn1cblxudmFyIEVBR0VSX01FVEhPRFMgPSBbXG4gICAgJ3JlZmV0Y2gnLFxuICAgICdmZXRjaE1vcmUnLFxuICAgICd1cGRhdGVRdWVyeScsXG4gICAgJ3N0YXJ0UG9sbGluZycsXG4gICAgJ3N1YnNjcmliZVRvTW9yZScsXG5dO1xuZnVuY3Rpb24gdXNlTGF6eVF1ZXJ5KHF1ZXJ5LCBvcHRpb25zKSB7XG4gICAgdmFyIF9hID0gcmVhY3QudXNlU3RhdGUoe1xuICAgICAgICBjYWxsZWQ6IGZhbHNlLFxuICAgICAgICByZXNvbHZlczogW10sXG4gICAgfSksIGV4ZWN1dGlvbiA9IF9hWzBdLCBzZXRFeGVjdXRpb24gPSBfYVsxXTtcbiAgICB2YXIgZXhlY3V0ZSA9IHJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChleGVjdXRlT3B0aW9ucykge1xuICAgICAgICB2YXIgcmVzb2x2ZTtcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZTEpIHsgcmV0dXJuIChyZXNvbHZlID0gcmVzb2x2ZTEpOyB9KTtcbiAgICAgICAgc2V0RXhlY3V0aW9uKGZ1bmN0aW9uIChleGVjdXRpb24pIHtcbiAgICAgICAgICAgIGlmIChleGVjdXRpb24uY2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICYmIHJlc3VsdC5yZWZldGNoKGV4ZWN1dGVPcHRpb25zID09PSBudWxsIHx8IGV4ZWN1dGVPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBleGVjdXRlT3B0aW9ucy52YXJpYWJsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYWxsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZXM6IHRzbGliLl9fc3ByZWFkQXJyYXkodHNsaWIuX19zcHJlYWRBcnJheShbXSwgZXhlY3V0aW9uLnJlc29sdmVzLCB0cnVlKSwgW3Jlc29sdmVdLCBmYWxzZSksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhlY3V0ZU9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSwgW10pO1xuICAgIHZhciByZXN1bHQgPSB1c2VRdWVyeShxdWVyeSwgdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCBleGVjdXRpb24ub3B0aW9ucyksIHsgZmV0Y2hQb2xpY3k6IGV4ZWN1dGlvbi5jYWxsZWQgPyBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmV0Y2hQb2xpY3kgOiAnc3RhbmRieScsIHNraXA6IHVuZGVmaW5lZCB9KSk7XG4gICAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc29sdmVzID0gZXhlY3V0aW9uLnJlc29sdmVzO1xuICAgICAgICBpZiAoIXJlc3VsdC5sb2FkaW5nICYmIHJlc29sdmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0RXhlY3V0aW9uKGZ1bmN0aW9uIChleGVjdXRpb24pIHsgcmV0dXJuICh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZXhlY3V0aW9uKSwgeyByZXNvbHZlczogW10gfSkpOyB9KTtcbiAgICAgICAgICAgIHJlc29sdmVzLmZvckVhY2goZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUocmVzdWx0KTsgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbcmVzdWx0LCBleGVjdXRpb25dKTtcbiAgICBpZiAoIWV4ZWN1dGlvbi5jYWxsZWQpIHtcbiAgICAgICAgcmVzdWx0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHJlc3VsdCksIHsgbG9hZGluZzogZmFsc2UsIGRhdGE6IHZvaWQgMCwgZXJyb3I6IHZvaWQgMCwgY2FsbGVkOiBmYWxzZSB9KTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gcmVzdWx0W2tleV07XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0RXhlY3V0aW9uKGZ1bmN0aW9uIChleGVjdXRpb24pIHsgcmV0dXJuICh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZXhlY3V0aW9uKSwgeyBjYWxsZWQ6IHRydWUgfSkpOyB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIEVBR0VSX01FVEhPRFNfMSA9IEVBR0VSX01FVEhPRFM7IF9pIDwgRUFHRVJfTUVUSE9EU18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IEVBR0VSX01FVEhPRFNfMVtfaV07XG4gICAgICAgICAgICBfbG9vcF8xKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtleGVjdXRlLCByZXN1bHRdO1xufVxuXG5mdW5jdGlvbiB1c2VNdXRhdGlvbihtdXRhdGlvbiwgb3B0aW9ucykge1xuICAgIHZhciBjbGllbnQgPSB1c2VBcG9sbG9DbGllbnQob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNsaWVudCk7XG4gICAgcGFyc2VyLnZlcmlmeURvY3VtZW50VHlwZShtdXRhdGlvbiwgcGFyc2VyLkRvY3VtZW50VHlwZS5NdXRhdGlvbik7XG4gICAgdmFyIF9hID0gcmVhY3QudXNlU3RhdGUoe1xuICAgICAgICBjYWxsZWQ6IGZhbHNlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgfSksIHJlc3VsdCA9IF9hWzBdLCBzZXRSZXN1bHQgPSBfYVsxXTtcbiAgICB2YXIgcmVmID0gcmVhY3QudXNlUmVmKHtcbiAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgIG11dGF0aW9uSWQ6IDAsXG4gICAgICAgIGlzTW91bnRlZDogdHJ1ZSxcbiAgICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICAgIG11dGF0aW9uOiBtdXRhdGlvbixcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICB9KTtcbiAgICB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVmLmN1cnJlbnQsIHsgY2xpZW50OiBjbGllbnQsIG9wdGlvbnM6IG9wdGlvbnMsIG11dGF0aW9uOiBtdXRhdGlvbiB9KTtcbiAgICB9XG4gICAgdmFyIGV4ZWN1dGUgPSByZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZXhlY3V0ZU9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGV4ZWN1dGVPcHRpb25zID09PSB2b2lkIDApIHsgZXhlY3V0ZU9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB2YXIgX2EgPSByZWYuY3VycmVudCwgY2xpZW50ID0gX2EuY2xpZW50LCBvcHRpb25zID0gX2Eub3B0aW9ucywgbXV0YXRpb24gPSBfYS5tdXRhdGlvbjtcbiAgICAgICAgdmFyIGJhc2VPcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IG11dGF0aW9uOiBtdXRhdGlvbiB9KTtcbiAgICAgICAgaWYgKCFyZWYuY3VycmVudC5yZXN1bHQubG9hZGluZyAmJiAhYmFzZU9wdGlvbnMuaWdub3JlUmVzdWx0cykge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHJlZi5jdXJyZW50LnJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICAgICAgICAgIGNhbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtdXRhdGlvbklkID0gKytyZWYuY3VycmVudC5tdXRhdGlvbklkO1xuICAgICAgICB2YXIgY2xpZW50T3B0aW9ucyA9IGNvcmUubWVyZ2VPcHRpb25zKGJhc2VPcHRpb25zLCBleGVjdXRlT3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBjbGllbnQubXV0YXRlKGNsaWVudE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5kYXRhLCBlcnJvcnMkMSA9IHJlc3BvbnNlLmVycm9ycztcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGVycm9ycyQxICYmIGVycm9ycyQxLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IG5ldyBlcnJvcnMuQXBvbGxvRXJyb3IoeyBncmFwaFFMRXJyb3JzOiBlcnJvcnMkMSB9KVxuICAgICAgICAgICAgICAgIDogdm9pZCAwO1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uSWQgPT09IHJlZi5jdXJyZW50Lm11dGF0aW9uSWQgJiZcbiAgICAgICAgICAgICAgICAhY2xpZW50T3B0aW9ucy5pZ25vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdF8xID0ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHJlZi5jdXJyZW50LmlzTW91bnRlZCAmJiAhZXF1YWxpdHkuZXF1YWwocmVmLmN1cnJlbnQucmVzdWx0LCByZXN1bHRfMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlZi5jdXJyZW50LnJlc3VsdCA9IHJlc3VsdF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSBiYXNlT3B0aW9ucy5vbkNvbXBsZXRlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYmFzZU9wdGlvbnMsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgKF9iID0gZXhlY3V0ZU9wdGlvbnMub25Db21wbGV0ZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGV4ZWN1dGVPcHRpb25zLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uSWQgPT09IHJlZi5jdXJyZW50Lm11dGF0aW9uSWQgJiZcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0XzIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICghZXF1YWxpdHkuZXF1YWwocmVmLmN1cnJlbnQucmVzdWx0LCByZXN1bHRfMikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlZi5jdXJyZW50LnJlc3VsdCA9IHJlc3VsdF8yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmFzZU9wdGlvbnMub25FcnJvciB8fCBjbGllbnRPcHRpb25zLm9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAoX2EgPSBiYXNlT3B0aW9ucy5vbkVycm9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChiYXNlT3B0aW9ucywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIChfYiA9IGV4ZWN1dGVPcHRpb25zLm9uRXJyb3IpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGV4ZWN1dGVPcHRpb25zLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogdm9pZCAwLCBlcnJvcnM6IGVycm9yIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIHZhciByZXNldCA9IHJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0UmVzdWx0KHsgY2FsbGVkOiBmYWxzZSwgbG9hZGluZzogZmFsc2UsIGNsaWVudDogY2xpZW50IH0pO1xuICAgIH0sIFtdKTtcbiAgICByZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZWYuY3VycmVudC5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9OyB9LCBbXSk7XG4gICAgcmV0dXJuIFtleGVjdXRlLCB0c2xpYi5fX2Fzc2lnbih7IHJlc2V0OiByZXNldCB9LCByZXN1bHQpXTtcbn1cblxuZnVuY3Rpb24gdXNlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbiwgb3B0aW9ucykge1xuICAgIHZhciBjbGllbnQgPSB1c2VBcG9sbG9DbGllbnQob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNsaWVudCk7XG4gICAgcGFyc2VyLnZlcmlmeURvY3VtZW50VHlwZShzdWJzY3JpcHRpb24sIHBhcnNlci5Eb2N1bWVudFR5cGUuU3Vic2NyaXB0aW9uKTtcbiAgICB2YXIgX2EgPSByZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmc6ICEob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApLFxuICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICB9KSwgcmVzdWx0ID0gX2FbMF0sIHNldFJlc3VsdCA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5za2lwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xpZW50LnN1YnNjcmliZSh7XG4gICAgICAgICAgICBxdWVyeTogc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5mZXRjaFBvbGljeSxcbiAgICAgICAgICAgIGNvbnRleHQ6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jb250ZXh0LFxuICAgICAgICB9KTtcbiAgICB9KSwgb2JzZXJ2YWJsZSA9IF9iWzBdLCBzZXRPYnNlcnZhYmxlID0gX2JbMV07XG4gICAgdmFyIHJlZiA9IHJlYWN0LnVzZVJlZih7IGNsaWVudDogY2xpZW50LCBzdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvbiwgb3B0aW9uczogb3B0aW9ucyB9KTtcbiAgICByZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgIHZhciBzaG91bGRSZXN1YnNjcmliZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaG91bGRSZXN1YnNjcmliZTtcbiAgICAgICAgaWYgKHR5cGVvZiBzaG91bGRSZXN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc2hvdWxkUmVzdWJzY3JpYmUgPSAhIXNob3VsZFJlc3Vic2NyaWJlKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApICYmICEob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApICE9PSAhKChfYSA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5za2lwKSkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldE9ic2VydmFibGUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2hvdWxkUmVzdWJzY3JpYmUgIT09IGZhbHNlICYmIChjbGllbnQgIT09IHJlZi5jdXJyZW50LmNsaWVudCB8fFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uICE9PSByZWYuY3VycmVudC5zdWJzY3JpcHRpb24gfHxcbiAgICAgICAgICAgIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmV0Y2hQb2xpY3kpICE9PSAoKF9iID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZldGNoUG9saWN5KSB8fFxuICAgICAgICAgICAgIShvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2tpcCkgIT09ICEoKF9jID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNraXApIHx8XG4gICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcywgKF9kID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnZhcmlhYmxlcykpKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQoe1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICAgICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRPYnNlcnZhYmxlKGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBzdWJzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICAgICAgY29udGV4dDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNvbnRleHQsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmFzc2lnbihyZWYuY3VycmVudCwgeyBjbGllbnQ6IGNsaWVudCwgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb24sIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG4gICAgfSwgW2NsaWVudCwgc3Vic2NyaXB0aW9uLCBvcHRpb25zXSk7XG4gICAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFvYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChmZXRjaFJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZldGNoUmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vblN1YnNjcmlwdGlvbkRhdGEpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25EYXRhOiByZXN1bHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vblN1YnNjcmlwdGlvbkNvbXBsZXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFtvYnNlcnZhYmxlXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdXNlUmVhY3RpdmVWYXIocnYpIHtcbiAgICB2YXIgdmFsdWUgPSBydigpO1xuICAgIHZhciBzZXRWYWx1ZSA9IHJlYWN0LnVzZVN0YXRlKHZhbHVlKVsxXTtcbiAgICByZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJvYmFibHlTYW1lVmFsdWUgPSBydigpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHByb2JhYmx5U2FtZVZhbHVlKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZShwcm9iYWJseVNhbWVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcnYub25OZXh0Q2hhbmdlKHNldFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFt2YWx1ZV0pO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0cy51c2VBcG9sbG9DbGllbnQgPSB1c2VBcG9sbG9DbGllbnQ7XG5leHBvcnRzLnVzZUxhenlRdWVyeSA9IHVzZUxhenlRdWVyeTtcbmV4cG9ydHMudXNlTXV0YXRpb24gPSB1c2VNdXRhdGlvbjtcbmV4cG9ydHMudXNlUXVlcnkgPSB1c2VRdWVyeTtcbmV4cG9ydHMudXNlUmVhY3RpdmVWYXIgPSB1c2VSZWFjdGl2ZVZhcjtcbmV4cG9ydHMudXNlU3Vic2NyaXB0aW9uID0gdXNlU3Vic2NyaXB0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG5cbmV4cG9ydHMuRG9jdW1lbnRUeXBlID0gdm9pZCAwO1xuKGZ1bmN0aW9uIChEb2N1bWVudFR5cGUpIHtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiUXVlcnlcIl0gPSAwXSA9IFwiUXVlcnlcIjtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiTXV0YXRpb25cIl0gPSAxXSA9IFwiTXV0YXRpb25cIjtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiU3Vic2NyaXB0aW9uXCJdID0gMl0gPSBcIlN1YnNjcmlwdGlvblwiO1xufSkoZXhwb3J0cy5Eb2N1bWVudFR5cGUgfHwgKGV4cG9ydHMuRG9jdW1lbnRUeXBlID0ge30pKTtcbnZhciBjYWNoZSA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIG9wZXJhdGlvbk5hbWUodHlwZSkge1xuICAgIHZhciBuYW1lO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIGV4cG9ydHMuRG9jdW1lbnRUeXBlLlF1ZXJ5OlxuICAgICAgICAgICAgbmFtZSA9ICdRdWVyeSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBleHBvcnRzLkRvY3VtZW50VHlwZS5NdXRhdGlvbjpcbiAgICAgICAgICAgIG5hbWUgPSAnTXV0YXRpb24nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZXhwb3J0cy5Eb2N1bWVudFR5cGUuU3Vic2NyaXB0aW9uOlxuICAgICAgICAgICAgbmFtZSA9ICdTdWJzY3JpcHRpb24nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gcGFyc2VyKGRvY3VtZW50KSB7XG4gICAgdmFyIGNhY2hlZCA9IGNhY2hlLmdldChkb2N1bWVudCk7XG4gICAgaWYgKGNhY2hlZClcbiAgICAgICAgcmV0dXJuIGNhY2hlZDtcbiAgICB2YXIgdmFyaWFibGVzLCB0eXBlLCBuYW1lO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghIWRvY3VtZW50ICYmICEhZG9jdW1lbnQua2luZCwgXCJBcmd1bWVudCBvZiBcIi5jb25jYXQoZG9jdW1lbnQsIFwiIHBhc3NlZCB0byBwYXJzZXIgd2FzIG5vdCBhIHZhbGlkIEdyYXBoUUwgXCIpICtcbiAgICAgICAgXCJEb2N1bWVudE5vZGUuIFlvdSBtYXkgbmVlZCB0byB1c2UgJ2dyYXBocWwtdGFnJyBvciBhbm90aGVyIG1ldGhvZCBcIiArXG4gICAgICAgIFwidG8gY29udmVydCB5b3VyIG9wZXJhdGlvbiBpbnRvIGEgZG9jdW1lbnRcIikgOiBnbG9iYWxzLmludmFyaWFudCghIWRvY3VtZW50ICYmICEhZG9jdW1lbnQua2luZCwgMzApO1xuICAgIHZhciBmcmFnbWVudHMgPSBkb2N1bWVudC5kZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbic7IH0pO1xuICAgIHZhciBxdWVyaWVzID0gZG9jdW1lbnQuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJyAmJiB4Lm9wZXJhdGlvbiA9PT0gJ3F1ZXJ5JztcbiAgICB9KTtcbiAgICB2YXIgbXV0YXRpb25zID0gZG9jdW1lbnQuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJyAmJiB4Lm9wZXJhdGlvbiA9PT0gJ211dGF0aW9uJztcbiAgICB9KTtcbiAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IGRvY3VtZW50LmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geC5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiYgeC5vcGVyYXRpb24gPT09ICdzdWJzY3JpcHRpb24nO1xuICAgIH0pO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghZnJhZ21lbnRzLmxlbmd0aCB8fFxuICAgICAgICAocXVlcmllcy5sZW5ndGggfHwgbXV0YXRpb25zLmxlbmd0aCB8fCBzdWJzY3JpcHRpb25zLmxlbmd0aCksIFwiUGFzc2luZyBvbmx5IGEgZnJhZ21lbnQgdG8gJ2dyYXBocWwnIGlzIG5vdCB5ZXQgc3VwcG9ydGVkLiBcIiArXG4gICAgICAgIFwiWW91IG11c3QgaW5jbHVkZSBhIHF1ZXJ5LCBzdWJzY3JpcHRpb24gb3IgbXV0YXRpb24gYXMgd2VsbFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KCFmcmFnbWVudHMubGVuZ3RoIHx8XG4gICAgICAgIChxdWVyaWVzLmxlbmd0aCB8fCBtdXRhdGlvbnMubGVuZ3RoIHx8IHN1YnNjcmlwdGlvbnMubGVuZ3RoKSwgMzEpO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChxdWVyaWVzLmxlbmd0aCArIG11dGF0aW9ucy5sZW5ndGggKyBzdWJzY3JpcHRpb25zLmxlbmd0aCA8PSAxLCBcInJlYWN0LWFwb2xsbyBvbmx5IHN1cHBvcnRzIGEgcXVlcnksIHN1YnNjcmlwdGlvbiwgb3IgYSBtdXRhdGlvbiBwZXIgSE9DLiBcIiArXG4gICAgICAgIFwiXCIuY29uY2F0KGRvY3VtZW50LCBcIiBoYWQgXCIpLmNvbmNhdChxdWVyaWVzLmxlbmd0aCwgXCIgcXVlcmllcywgXCIpLmNvbmNhdChzdWJzY3JpcHRpb25zLmxlbmd0aCwgXCIgXCIpICtcbiAgICAgICAgXCJzdWJzY3JpcHRpb25zIGFuZCBcIi5jb25jYXQobXV0YXRpb25zLmxlbmd0aCwgXCIgbXV0YXRpb25zLiBcIikgK1xuICAgICAgICBcIllvdSBjYW4gdXNlICdjb21wb3NlJyB0byBqb2luIG11bHRpcGxlIG9wZXJhdGlvbiB0eXBlcyB0byBhIGNvbXBvbmVudFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KHF1ZXJpZXMubGVuZ3RoICsgbXV0YXRpb25zLmxlbmd0aCArIHN1YnNjcmlwdGlvbnMubGVuZ3RoIDw9IDEsIDMyKTtcbiAgICB0eXBlID0gcXVlcmllcy5sZW5ndGggPyBleHBvcnRzLkRvY3VtZW50VHlwZS5RdWVyeSA6IGV4cG9ydHMuRG9jdW1lbnRUeXBlLk11dGF0aW9uO1xuICAgIGlmICghcXVlcmllcy5sZW5ndGggJiYgIW11dGF0aW9ucy5sZW5ndGgpXG4gICAgICAgIHR5cGUgPSBleHBvcnRzLkRvY3VtZW50VHlwZS5TdWJzY3JpcHRpb247XG4gICAgdmFyIGRlZmluaXRpb25zID0gcXVlcmllcy5sZW5ndGhcbiAgICAgICAgPyBxdWVyaWVzXG4gICAgICAgIDogbXV0YXRpb25zLmxlbmd0aFxuICAgICAgICAgICAgPyBtdXRhdGlvbnNcbiAgICAgICAgICAgIDogc3Vic2NyaXB0aW9ucztcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZGVmaW5pdGlvbnMubGVuZ3RoID09PSAxLCBcInJlYWN0LWFwb2xsbyBvbmx5IHN1cHBvcnRzIG9uZSBkZWZpbml0aW9uIHBlciBIT0MuIFwiLmNvbmNhdChkb2N1bWVudCwgXCIgaGFkIFwiKSArXG4gICAgICAgIFwiXCIuY29uY2F0KGRlZmluaXRpb25zLmxlbmd0aCwgXCIgZGVmaW5pdGlvbnMuIFwiKSArXG4gICAgICAgIFwiWW91IGNhbiB1c2UgJ2NvbXBvc2UnIHRvIGpvaW4gbXVsdGlwbGUgb3BlcmF0aW9uIHR5cGVzIHRvIGEgY29tcG9uZW50XCIpIDogZ2xvYmFscy5pbnZhcmlhbnQoZGVmaW5pdGlvbnMubGVuZ3RoID09PSAxLCAzMyk7XG4gICAgdmFyIGRlZmluaXRpb24gPSBkZWZpbml0aW9uc1swXTtcbiAgICB2YXJpYWJsZXMgPSBkZWZpbml0aW9uLnZhcmlhYmxlRGVmaW5pdGlvbnMgfHwgW107XG4gICAgaWYgKGRlZmluaXRpb24ubmFtZSAmJiBkZWZpbml0aW9uLm5hbWUua2luZCA9PT0gJ05hbWUnKSB7XG4gICAgICAgIG5hbWUgPSBkZWZpbml0aW9uLm5hbWUudmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBuYW1lID0gJ2RhdGEnO1xuICAgIH1cbiAgICB2YXIgcGF5bG9hZCA9IHsgbmFtZTogbmFtZSwgdHlwZTogdHlwZSwgdmFyaWFibGVzOiB2YXJpYWJsZXMgfTtcbiAgICBjYWNoZS5zZXQoZG9jdW1lbnQsIHBheWxvYWQpO1xuICAgIHJldHVybiBwYXlsb2FkO1xufVxuZnVuY3Rpb24gdmVyaWZ5RG9jdW1lbnRUeXBlKGRvY3VtZW50LCB0eXBlKSB7XG4gICAgdmFyIG9wZXJhdGlvbiA9IHBhcnNlcihkb2N1bWVudCk7XG4gICAgdmFyIHJlcXVpcmVkT3BlcmF0aW9uTmFtZSA9IG9wZXJhdGlvbk5hbWUodHlwZSk7XG4gICAgdmFyIHVzZWRPcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uTmFtZShvcGVyYXRpb24udHlwZSk7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG9wZXJhdGlvbi50eXBlID09PSB0eXBlLCBcIlJ1bm5pbmcgYSBcIi5jb25jYXQocmVxdWlyZWRPcGVyYXRpb25OYW1lLCBcIiByZXF1aXJlcyBhIGdyYXBocWwgXCIpICtcbiAgICAgICAgXCJcIi5jb25jYXQocmVxdWlyZWRPcGVyYXRpb25OYW1lLCBcIiwgYnV0IGEgXCIpLmNvbmNhdCh1c2VkT3BlcmF0aW9uTmFtZSwgXCIgd2FzIHVzZWQgaW5zdGVhZC5cIikpIDogZ2xvYmFscy5pbnZhcmlhbnQob3BlcmF0aW9uLnR5cGUgPT09IHR5cGUsIDM0KTtcbn1cblxuZXhwb3J0cy5vcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uTmFtZTtcbmV4cG9ydHMucGFyc2VyID0gcGFyc2VyO1xuZXhwb3J0cy52ZXJpZnlEb2N1bWVudFR5cGUgPSB2ZXJpZnlEb2N1bWVudFR5cGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZXIuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5yZXF1aXJlKCcuLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIGNvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKTtcbnZhciBob29rcyA9IHJlcXVpcmUoJy4vaG9va3MnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCcuL3BhcnNlcicpO1xuXG5cblxuZXhwb3J0cy5BcG9sbG9Db25zdW1lciA9IGNvbnRleHQuQXBvbGxvQ29uc3VtZXI7XG5leHBvcnRzLkFwb2xsb1Byb3ZpZGVyID0gY29udGV4dC5BcG9sbG9Qcm92aWRlcjtcbmV4cG9ydHMuZ2V0QXBvbGxvQ29udGV4dCA9IGNvbnRleHQuZ2V0QXBvbGxvQ29udGV4dDtcbmV4cG9ydHMucmVzZXRBcG9sbG9Db250ZXh0ID0gY29udGV4dC5yZXNldEFwb2xsb0NvbnRleHQ7XG5leHBvcnRzLkRvY3VtZW50VHlwZSA9IHBhcnNlci5Eb2N1bWVudFR5cGU7XG5leHBvcnRzLm9wZXJhdGlvbk5hbWUgPSBwYXJzZXIub3BlcmF0aW9uTmFtZTtcbmV4cG9ydHMucGFyc2VyID0gcGFyc2VyLnBhcnNlcjtcbmZvciAodmFyIGsgaW4gaG9va3MpIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgZXhwb3J0c1trXSA9IGhvb2tzW2tdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdHNJbnZhcmlhbnQgPSByZXF1aXJlKCd0cy1pbnZhcmlhbnQnKTtcbnZhciBwcm9jZXNzJDEgPSByZXF1aXJlKCd0cy1pbnZhcmlhbnQvcHJvY2VzcycpO1xudmFyIGdyYXBocWwgPSByZXF1aXJlKCdncmFwaHFsJyk7XG5cbmZ1bmN0aW9uIG1heWJlKHRodW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRodW5rKCk7XG4gICAgfVxuICAgIGNhdGNoIChfYSkgeyB9XG59XG5cbnZhciBnbG9iYWwkMSA9IChtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBnbG9iYWxUaGlzOyB9KSB8fFxuICAgIG1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdzsgfSkgfHxcbiAgICBtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmOyB9KSB8fFxuICAgIG1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdsb2JhbDsgfSkgfHxcbiAgICBtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBtYXliZS5jb25zdHJ1Y3RvcihcInJldHVybiB0aGlzXCIpKCk7IH0pKTtcblxudmFyIF9fID0gXCJfX1wiO1xudmFyIEdMT0JBTF9LRVkgPSBbX18sIF9fXS5qb2luKFwiREVWXCIpO1xuZnVuY3Rpb24gZ2V0REVWKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKF9fREVWX18pO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbCQxLCBHTE9CQUxfS0VZLCB7XG4gICAgICAgICAgICB2YWx1ZTogbWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7IH0pICE9PSBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZ2xvYmFsJDFbR0xPQkFMX0tFWV07XG4gICAgfVxufVxudmFyIERFViA9IGdldERFVigpO1xuXG5mdW5jdGlvbiByZW1vdmVUZW1wb3JhcnlHbG9iYWxzKCkge1xuICAgIHJldHVybiB0eXBlb2YgZ3JhcGhxbC5Tb3VyY2UgPT09IFwiZnVuY3Rpb25cIiA/IHByb2Nlc3MkMS5yZW1vdmUoKSA6IHByb2Nlc3MkMS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tERVYoKSB7XG4gICAgX19ERVZfXyA/IHRzSW52YXJpYW50LmludmFyaWFudChcImJvb2xlYW5cIiA9PT0gdHlwZW9mIERFViwgREVWKSA6IHRzSW52YXJpYW50LmludmFyaWFudChcImJvb2xlYW5cIiA9PT0gdHlwZW9mIERFViwgMzYpO1xufVxucmVtb3ZlVGVtcG9yYXJ5R2xvYmFscygpO1xuY2hlY2tERVYoKTtcblxuZXhwb3J0cy5JbnZhcmlhbnRFcnJvciA9IHRzSW52YXJpYW50LkludmFyaWFudEVycm9yO1xuZXhwb3J0cy5pbnZhcmlhbnQgPSB0c0ludmFyaWFudC5pbnZhcmlhbnQ7XG5leHBvcnRzLkRFViA9IERFVjtcbmV4cG9ydHMuY2hlY2tERVYgPSBjaGVja0RFVjtcbmV4cG9ydHMuZ2xvYmFsID0gZ2xvYmFsJDE7XG5leHBvcnRzLm1heWJlID0gbWF5YmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nbG9iYWxzLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuL2dsb2JhbHMnKTtcbnZhciBncmFwaHFsID0gcmVxdWlyZSgnZ3JhcGhxbCcpO1xudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciB6ZW5PYnNlcnZhYmxlVHMgPSByZXF1aXJlKCd6ZW4tb2JzZXJ2YWJsZS10cycpO1xucmVxdWlyZSgnc3ltYm9sLW9ic2VydmFibGUnKTtcblxuZnVuY3Rpb24gc2hvdWxkSW5jbHVkZShfYSwgdmFyaWFibGVzKSB7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSBfYS5kaXJlY3RpdmVzO1xuICAgIGlmICghZGlyZWN0aXZlcyB8fCAhZGlyZWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBnZXRJbmNsdXNpb25EaXJlY3RpdmVzKGRpcmVjdGl2ZXMpLmV2ZXJ5KGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgZGlyZWN0aXZlID0gX2EuZGlyZWN0aXZlLCBpZkFyZ3VtZW50ID0gX2EuaWZBcmd1bWVudDtcbiAgICAgICAgdmFyIGV2YWxlZFZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmIChpZkFyZ3VtZW50LnZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZScpIHtcbiAgICAgICAgICAgIGV2YWxlZFZhbHVlID0gdmFyaWFibGVzICYmIHZhcmlhYmxlc1tpZkFyZ3VtZW50LnZhbHVlLm5hbWUudmFsdWVdO1xuICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGV2YWxlZFZhbHVlICE9PSB2b2lkIDAsIFwiSW52YWxpZCB2YXJpYWJsZSByZWZlcmVuY2VkIGluIEBcIi5jb25jYXQoZGlyZWN0aXZlLm5hbWUudmFsdWUsIFwiIGRpcmVjdGl2ZS5cIikpIDogZ2xvYmFscy5pbnZhcmlhbnQoZXZhbGVkVmFsdWUgIT09IHZvaWQgMCwgMzcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZhbGVkVmFsdWUgPSBpZkFyZ3VtZW50LnZhbHVlLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJlY3RpdmUubmFtZS52YWx1ZSA9PT0gJ3NraXAnID8gIWV2YWxlZFZhbHVlIDogZXZhbGVkVmFsdWU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXREaXJlY3RpdmVOYW1lcyhyb290KSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZ3JhcGhxbC52aXNpdChyb290LCB7XG4gICAgICAgIERpcmVjdGl2ZTogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIG5hbWVzLnB1c2gobm9kZS5uYW1lLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmFtZXM7XG59XG5mdW5jdGlvbiBoYXNEaXJlY3RpdmVzKG5hbWVzLCByb290KSB7XG4gICAgcmV0dXJuIGdldERpcmVjdGl2ZU5hbWVzKHJvb3QpLnNvbWUoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG5hbWVzLmluZGV4T2YobmFtZSkgPiAtMTsgfSk7XG59XG5mdW5jdGlvbiBoYXNDbGllbnRFeHBvcnRzKGRvY3VtZW50KSB7XG4gICAgcmV0dXJuIChkb2N1bWVudCAmJlxuICAgICAgICBoYXNEaXJlY3RpdmVzKFsnY2xpZW50J10sIGRvY3VtZW50KSAmJlxuICAgICAgICBoYXNEaXJlY3RpdmVzKFsnZXhwb3J0J10sIGRvY3VtZW50KSk7XG59XG5mdW5jdGlvbiBpc0luY2x1c2lvbkRpcmVjdGl2ZShfYSkge1xuICAgIHZhciB2YWx1ZSA9IF9hLm5hbWUudmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnc2tpcCcgfHwgdmFsdWUgPT09ICdpbmNsdWRlJztcbn1cbmZ1bmN0aW9uIGdldEluY2x1c2lvbkRpcmVjdGl2ZXMoZGlyZWN0aXZlcykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBpZiAoZGlyZWN0aXZlcyAmJiBkaXJlY3RpdmVzLmxlbmd0aCkge1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgaWYgKCFpc0luY2x1c2lvbkRpcmVjdGl2ZShkaXJlY3RpdmUpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmVBcmd1bWVudHMgPSBkaXJlY3RpdmUuYXJndW1lbnRzO1xuICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZU5hbWUgPSBkaXJlY3RpdmUubmFtZS52YWx1ZTtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChkaXJlY3RpdmVBcmd1bWVudHMgJiYgZGlyZWN0aXZlQXJndW1lbnRzLmxlbmd0aCA9PT0gMSwgXCJJbmNvcnJlY3QgbnVtYmVyIG9mIGFyZ3VtZW50cyBmb3IgdGhlIEBcIi5jb25jYXQoZGlyZWN0aXZlTmFtZSwgXCIgZGlyZWN0aXZlLlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChkaXJlY3RpdmVBcmd1bWVudHMgJiYgZGlyZWN0aXZlQXJndW1lbnRzLmxlbmd0aCA9PT0gMSwgMzgpO1xuICAgICAgICAgICAgdmFyIGlmQXJndW1lbnQgPSBkaXJlY3RpdmVBcmd1bWVudHNbMF07XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoaWZBcmd1bWVudC5uYW1lICYmIGlmQXJndW1lbnQubmFtZS52YWx1ZSA9PT0gJ2lmJywgXCJJbnZhbGlkIGFyZ3VtZW50IGZvciB0aGUgQFwiLmNvbmNhdChkaXJlY3RpdmVOYW1lLCBcIiBkaXJlY3RpdmUuXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KGlmQXJndW1lbnQubmFtZSAmJiBpZkFyZ3VtZW50Lm5hbWUudmFsdWUgPT09ICdpZicsIDM5KTtcbiAgICAgICAgICAgIHZhciBpZlZhbHVlID0gaWZBcmd1bWVudC52YWx1ZTtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChpZlZhbHVlICYmXG4gICAgICAgICAgICAgICAgKGlmVmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJyB8fCBpZlZhbHVlLmtpbmQgPT09ICdCb29sZWFuVmFsdWUnKSwgXCJBcmd1bWVudCBmb3IgdGhlIEBcIi5jb25jYXQoZGlyZWN0aXZlTmFtZSwgXCIgZGlyZWN0aXZlIG11c3QgYmUgYSB2YXJpYWJsZSBvciBhIGJvb2xlYW4gdmFsdWUuXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KGlmVmFsdWUgJiZcbiAgICAgICAgICAgICAgICAoaWZWYWx1ZS5raW5kID09PSAnVmFyaWFibGUnIHx8IGlmVmFsdWUua2luZCA9PT0gJ0Jvb2xlYW5WYWx1ZScpLCA0MCk7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGRpcmVjdGl2ZTogZGlyZWN0aXZlLCBpZkFyZ3VtZW50OiBpZkFyZ3VtZW50IH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2V0RnJhZ21lbnRRdWVyeURvY3VtZW50KGRvY3VtZW50LCBmcmFnbWVudE5hbWUpIHtcbiAgICB2YXIgYWN0dWFsRnJhZ21lbnROYW1lID0gZnJhZ21lbnROYW1lO1xuICAgIHZhciBmcmFnbWVudHMgPSBbXTtcbiAgICBkb2N1bWVudC5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiRm91bmQgYSBcIi5jb25jYXQoZGVmaW5pdGlvbi5vcGVyYXRpb24sIFwiIG9wZXJhdGlvblwiKS5jb25jYXQoZGVmaW5pdGlvbi5uYW1lID8gXCIgbmFtZWQgJ1wiLmNvbmNhdChkZWZpbml0aW9uLm5hbWUudmFsdWUsIFwiJ1wiKSA6ICcnLCBcIi4gXCIpICtcbiAgICAgICAgICAgICAgICAnTm8gb3BlcmF0aW9ucyBhcmUgYWxsb3dlZCB3aGVuIHVzaW5nIGEgZnJhZ21lbnQgYXMgYSBxdWVyeS4gT25seSBmcmFnbWVudHMgYXJlIGFsbG93ZWQuJykgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig0MSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIGZyYWdtZW50cy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBhY3R1YWxGcmFnbWVudE5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudHMubGVuZ3RoID09PSAxLCBcIkZvdW5kIFwiLmNvbmNhdChmcmFnbWVudHMubGVuZ3RoLCBcIiBmcmFnbWVudHMuIGBmcmFnbWVudE5hbWVgIG11c3QgYmUgcHJvdmlkZWQgd2hlbiB0aGVyZSBpcyBub3QgZXhhY3RseSAxIGZyYWdtZW50LlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudHMubGVuZ3RoID09PSAxLCA0Mik7XG4gICAgICAgIGFjdHVhbEZyYWdtZW50TmFtZSA9IGZyYWdtZW50c1swXS5uYW1lLnZhbHVlO1xuICAgIH1cbiAgICB2YXIgcXVlcnkgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZG9jdW1lbnQpLCB7IGRlZmluaXRpb25zOiB0c2xpYi5fX3NwcmVhZEFycmF5KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBraW5kOiAnT3BlcmF0aW9uRGVmaW5pdGlvbicsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiAncXVlcnknLFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGcmFnbWVudFNwcmVhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhY3R1YWxGcmFnbWVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSwgZG9jdW1lbnQuZGVmaW5pdGlvbnMsIHRydWUpIH0pO1xuICAgIHJldHVybiBxdWVyeTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50TWFwKGZyYWdtZW50cykge1xuICAgIGlmIChmcmFnbWVudHMgPT09IHZvaWQgMCkgeyBmcmFnbWVudHMgPSBbXTsgfVxuICAgIHZhciBzeW1UYWJsZSA9IHt9O1xuICAgIGZyYWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnbWVudCkge1xuICAgICAgICBzeW1UYWJsZVtmcmFnbWVudC5uYW1lLnZhbHVlXSA9IGZyYWdtZW50O1xuICAgIH0pO1xuICAgIHJldHVybiBzeW1UYWJsZTtcbn1cbmZ1bmN0aW9uIGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbihzZWxlY3Rpb24sIGZyYWdtZW50TWFwKSB7XG4gICAgc3dpdGNoIChzZWxlY3Rpb24ua2luZCkge1xuICAgICAgICBjYXNlICdJbmxpbmVGcmFnbWVudCc6XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0aW9uO1xuICAgICAgICBjYXNlICdGcmFnbWVudFNwcmVhZCc6IHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGZyYWdtZW50TWFwICYmIGZyYWdtZW50TWFwW3NlbGVjdGlvbi5uYW1lLnZhbHVlXTtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudCwgXCJObyBmcmFnbWVudCBuYW1lZCBcIi5jb25jYXQoc2VsZWN0aW9uLm5hbWUudmFsdWUsIFwiLlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudCwgNDMpO1xuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBtYWtlUmVmZXJlbmNlKGlkKSB7XG4gICAgcmV0dXJuIHsgX19yZWY6IFN0cmluZyhpZCkgfTtcbn1cbmZ1bmN0aW9uIGlzUmVmZXJlbmNlKG9iaikge1xuICAgIHJldHVybiBCb29sZWFuKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLl9fcmVmID09PSAnc3RyaW5nJyk7XG59XG5mdW5jdGlvbiBpc0RvY3VtZW50Tm9kZSh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNOb25OdWxsT2JqZWN0KHZhbHVlKSAmJlxuICAgICAgICB2YWx1ZS5raW5kID09PSBcIkRvY3VtZW50XCIgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheSh2YWx1ZS5kZWZpbml0aW9ucykpO1xufVxuZnVuY3Rpb24gaXNTdHJpbmdWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnU3RyaW5nVmFsdWUnO1xufVxuZnVuY3Rpb24gaXNCb29sZWFuVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0Jvb2xlYW5WYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0ludFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdJbnRWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0Zsb2F0VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0Zsb2F0VmFsdWUnO1xufVxuZnVuY3Rpb24gaXNWYXJpYWJsZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnVmFyaWFibGUnO1xufVxuZnVuY3Rpb24gaXNPYmplY3RWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnT2JqZWN0VmFsdWUnO1xufVxuZnVuY3Rpb24gaXNMaXN0VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0xpc3RWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0VudW1WYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnRW51bVZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzTnVsbFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdOdWxsVmFsdWUnO1xufVxuZnVuY3Rpb24gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGFyZ09iaiwgbmFtZSwgdmFsdWUsIHZhcmlhYmxlcykge1xuICAgIGlmIChpc0ludFZhbHVlKHZhbHVlKSB8fCBpc0Zsb2F0VmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IE51bWJlcih2YWx1ZS52YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQm9vbGVhblZhbHVlKHZhbHVlKSB8fCBpc1N0cmluZ1ZhbHVlKHZhbHVlKSkge1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3RWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIG5lc3RlZEFyZ09ial8xID0ge307XG4gICAgICAgIHZhbHVlLmZpZWxkcy5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihuZXN0ZWRBcmdPYmpfMSwgb2JqLm5hbWUsIG9iai52YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IG5lc3RlZEFyZ09ial8xO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1ZhcmlhYmxlKHZhbHVlKSkge1xuICAgICAgICB2YXIgdmFyaWFibGVWYWx1ZSA9ICh2YXJpYWJsZXMgfHwge30pW3ZhbHVlLm5hbWUudmFsdWVdO1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YXJpYWJsZVZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0xpc3RWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gdmFsdWUudmFsdWVzLm1hcChmdW5jdGlvbiAobGlzdFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbmVzdGVkQXJnQXJyYXlPYmogPSB7fTtcbiAgICAgICAgICAgIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihuZXN0ZWRBcmdBcnJheU9iaiwgbmFtZSwgbGlzdFZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZEFyZ0FycmF5T2JqW25hbWUudmFsdWVdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNFbnVtVmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc051bGxWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIlRoZSBpbmxpbmUgYXJndW1lbnQgXFxcIlwiLmNvbmNhdChuYW1lLnZhbHVlLCBcIlxcXCIgb2Yga2luZCBcXFwiXCIpLmNvbmNhdCh2YWx1ZS5raW5kLCBcIlxcXCJcIikgK1xuICAgICAgICAgICAgJ2lzIG5vdCBzdXBwb3J0ZWQuIFVzZSB2YXJpYWJsZXMgaW5zdGVhZCBvZiBpbmxpbmUgYXJndW1lbnRzIHRvICcgK1xuICAgICAgICAgICAgJ292ZXJjb21lIHRoaXMgbGltaXRhdGlvbi4nKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDUyKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdG9yZUtleU5hbWVGcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcykge1xuICAgIHZhciBkaXJlY3RpdmVzT2JqID0gbnVsbDtcbiAgICBpZiAoZmllbGQuZGlyZWN0aXZlcykge1xuICAgICAgICBkaXJlY3RpdmVzT2JqID0ge307XG4gICAgICAgIGZpZWxkLmRpcmVjdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzT2JqW2RpcmVjdGl2ZS5uYW1lLnZhbHVlXSA9IHt9O1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmUuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihkaXJlY3RpdmVzT2JqW2RpcmVjdGl2ZS5uYW1lLnZhbHVlXSwgbmFtZSwgdmFsdWUsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgYXJnT2JqID0gbnVsbDtcbiAgICBpZiAoZmllbGQuYXJndW1lbnRzICYmIGZpZWxkLmFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgYXJnT2JqID0ge307XG4gICAgICAgIGZpZWxkLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfYS5uYW1lLCB2YWx1ZSA9IF9hLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihhcmdPYmosIG5hbWUsIHZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFN0b3JlS2V5TmFtZShmaWVsZC5uYW1lLnZhbHVlLCBhcmdPYmosIGRpcmVjdGl2ZXNPYmopO1xufVxudmFyIEtOT1dOX0RJUkVDVElWRVMgPSBbXG4gICAgJ2Nvbm5lY3Rpb24nLFxuICAgICdpbmNsdWRlJyxcbiAgICAnc2tpcCcsXG4gICAgJ2NsaWVudCcsXG4gICAgJ3Jlc3QnLFxuICAgICdleHBvcnQnLFxuXTtcbnZhciBnZXRTdG9yZUtleU5hbWUgPSBPYmplY3QuYXNzaWduKGZ1bmN0aW9uIChmaWVsZE5hbWUsIGFyZ3MsIGRpcmVjdGl2ZXMpIHtcbiAgICBpZiAoYXJncyAmJlxuICAgICAgICBkaXJlY3RpdmVzICYmXG4gICAgICAgIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXSAmJlxuICAgICAgICBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2tleSddKSB7XG4gICAgICAgIGlmIChkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddICYmXG4gICAgICAgICAgICBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJLZXlzID0gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydmaWx0ZXInXVxuICAgICAgICAgICAgICAgID8gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydmaWx0ZXInXVxuICAgICAgICAgICAgICAgIDogW107XG4gICAgICAgICAgICBmaWx0ZXJLZXlzLnNvcnQoKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZEFyZ3NfMSA9IHt9O1xuICAgICAgICAgICAgZmlsdGVyS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEFyZ3NfMVtrZXldID0gYXJnc1trZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydrZXknXSwgXCIoXCIpLmNvbmNhdChzdHJpbmdpZnkoZmlsdGVyZWRBcmdzXzEpLCBcIilcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydrZXknXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgY29tcGxldGVGaWVsZE5hbWUgPSBmaWVsZE5hbWU7XG4gICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgdmFyIHN0cmluZ2lmaWVkQXJncyA9IHN0cmluZ2lmeShhcmdzKTtcbiAgICAgICAgY29tcGxldGVGaWVsZE5hbWUgKz0gXCIoXCIuY29uY2F0KHN0cmluZ2lmaWVkQXJncywgXCIpXCIpO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aXZlcykge1xuICAgICAgICBPYmplY3Qua2V5cyhkaXJlY3RpdmVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChLTk9XTl9ESVJFQ1RJVkVTLmluZGV4T2Yoa2V5KSAhPT0gLTEpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZXNba2V5XSAmJiBPYmplY3Qua2V5cyhkaXJlY3RpdmVzW2tleV0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlRmllbGROYW1lICs9IFwiQFwiLmNvbmNhdChrZXksIFwiKFwiKS5jb25jYXQoc3RyaW5naWZ5KGRpcmVjdGl2ZXNba2V5XSksIFwiKVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlRmllbGROYW1lICs9IFwiQFwiLmNvbmNhdChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBsZXRlRmllbGROYW1lO1xufSwge1xuICAgIHNldFN0cmluZ2lmeTogZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzID0gc3RyaW5naWZ5O1xuICAgICAgICBzdHJpbmdpZnkgPSBzO1xuICAgICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgfSxcbn0pO1xudmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIGRlZmF1bHRTdHJpbmdpZnkodmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIHN0cmluZ2lmeVJlcGxhY2VyKTtcbn07XG5mdW5jdGlvbiBzdHJpbmdpZnlSZXBsYWNlcihfa2V5LCB2YWx1ZSkge1xuICAgIGlmIChpc05vbk51bGxPYmplY3QodmFsdWUpICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IE9iamVjdC5rZXlzKHZhbHVlKS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uIChjb3B5LCBrZXkpIHtcbiAgICAgICAgICAgIGNvcHlba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBhcmd1bWVudHNPYmplY3RGcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcykge1xuICAgIGlmIChmaWVsZC5hcmd1bWVudHMgJiYgZmllbGQuYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB2YXIgYXJnT2JqXzEgPSB7fTtcbiAgICAgICAgZmllbGQuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGFyZ09ial8xLCBuYW1lLCB2YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcmdPYmpfMTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiByZXN1bHRLZXlOYW1lRnJvbUZpZWxkKGZpZWxkKSB7XG4gICAgcmV0dXJuIGZpZWxkLmFsaWFzID8gZmllbGQuYWxpYXMudmFsdWUgOiBmaWVsZC5uYW1lLnZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0VHlwZW5hbWVGcm9tUmVzdWx0KHJlc3VsdCwgc2VsZWN0aW9uU2V0LCBmcmFnbWVudE1hcCkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0Ll9fdHlwZW5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQuX190eXBlbmFtZTtcbiAgICB9XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHNlbGVjdGlvblNldC5zZWxlY3Rpb25zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgc2VsZWN0aW9uID0gX2FbX2ldO1xuICAgICAgICBpZiAoaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uLm5hbWUudmFsdWUgPT09ICdfX3R5cGVuYW1lJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRbcmVzdWx0S2V5TmFtZUZyb21GaWVsZChzZWxlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0eXBlbmFtZSA9IGdldFR5cGVuYW1lRnJvbVJlc3VsdChyZXN1bHQsIGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbihzZWxlY3Rpb24sIGZyYWdtZW50TWFwKS5zZWxlY3Rpb25TZXQsIGZyYWdtZW50TWFwKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHlwZW5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaXNGaWVsZChzZWxlY3Rpb24pIHtcbiAgICByZXR1cm4gc2VsZWN0aW9uLmtpbmQgPT09ICdGaWVsZCc7XG59XG5mdW5jdGlvbiBpc0lubGluZUZyYWdtZW50KHNlbGVjdGlvbikge1xuICAgIHJldHVybiBzZWxlY3Rpb24ua2luZCA9PT0gJ0lubGluZUZyYWdtZW50Jztcbn1cblxuZnVuY3Rpb24gY2hlY2tEb2N1bWVudChkb2MpIHtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZG9jICYmIGRvYy5raW5kID09PSAnRG9jdW1lbnQnLCBcIkV4cGVjdGluZyBhIHBhcnNlZCBHcmFwaFFMIGRvY3VtZW50LiBQZXJoYXBzIHlvdSBuZWVkIHRvIHdyYXAgdGhlIHF1ZXJ5IHN0cmluZyBpbiBhIFxcXCJncWxcXFwiIHRhZz8gaHR0cDovL2RvY3MuYXBvbGxvc3RhY2suY29tL2Fwb2xsby1jbGllbnQvY29yZS5odG1sI2dxbFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KGRvYyAmJiBkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgNDQpO1xuICAgIHZhciBvcGVyYXRpb25zID0gZG9jLmRlZmluaXRpb25zXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQua2luZCAhPT0gJ0ZyYWdtZW50RGVmaW5pdGlvbic7IH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCAhPT0gJ09wZXJhdGlvbkRlZmluaXRpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJTY2hlbWEgdHlwZSBkZWZpbml0aW9ucyBub3QgYWxsb3dlZCBpbiBxdWVyaWVzLiBGb3VuZDogXFxcIlwiLmNvbmNhdChkZWZpbml0aW9uLmtpbmQsIFwiXFxcIlwiKSkgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig0NSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgfSk7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG9wZXJhdGlvbnMubGVuZ3RoIDw9IDEsIFwiQW1iaWd1b3VzIEdyYXBoUUwgZG9jdW1lbnQ6IGNvbnRhaW5zIFwiLmNvbmNhdChvcGVyYXRpb25zLmxlbmd0aCwgXCIgb3BlcmF0aW9uc1wiKSkgOiBnbG9iYWxzLmludmFyaWFudChvcGVyYXRpb25zLmxlbmd0aCA8PSAxLCA0Nik7XG4gICAgcmV0dXJuIGRvYztcbn1cbmZ1bmN0aW9uIGdldE9wZXJhdGlvbkRlZmluaXRpb24oZG9jKSB7XG4gICAgY2hlY2tEb2N1bWVudChkb2MpO1xuICAgIHJldHVybiBkb2MuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7IHJldHVybiBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJzsgfSlbMF07XG59XG5mdW5jdGlvbiBnZXRPcGVyYXRpb25OYW1lKGRvYykge1xuICAgIHJldHVybiAoZG9jLmRlZmluaXRpb25zXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nICYmIGRlZmluaXRpb24ubmFtZTtcbiAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Lm5hbWUudmFsdWU7IH0pWzBdIHx8IG51bGwpO1xufVxuZnVuY3Rpb24gZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhkb2MpIHtcbiAgICByZXR1cm4gZG9jLmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoZGVmaW5pdGlvbikgeyByZXR1cm4gZGVmaW5pdGlvbi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJzsgfSk7XG59XG5mdW5jdGlvbiBnZXRRdWVyeURlZmluaXRpb24oZG9jKSB7XG4gICAgdmFyIHF1ZXJ5RGVmID0gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihkb2MpO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChxdWVyeURlZiAmJiBxdWVyeURlZi5vcGVyYXRpb24gPT09ICdxdWVyeScsICdNdXN0IGNvbnRhaW4gYSBxdWVyeSBkZWZpbml0aW9uLicpIDogZ2xvYmFscy5pbnZhcmlhbnQocXVlcnlEZWYgJiYgcXVlcnlEZWYub3BlcmF0aW9uID09PSAncXVlcnknLCA0Nyk7XG4gICAgcmV0dXJuIHF1ZXJ5RGVmO1xufVxuZnVuY3Rpb24gZ2V0RnJhZ21lbnREZWZpbml0aW9uKGRvYykge1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgXCJFeHBlY3RpbmcgYSBwYXJzZWQgR3JhcGhRTCBkb2N1bWVudC4gUGVyaGFwcyB5b3UgbmVlZCB0byB3cmFwIHRoZSBxdWVyeSBzdHJpbmcgaW4gYSBcXFwiZ3FsXFxcIiB0YWc/IGh0dHA6Ly9kb2NzLmFwb2xsb3N0YWNrLmNvbS9hcG9sbG8tY2xpZW50L2NvcmUuaHRtbCNncWxcIikgOiBnbG9iYWxzLmludmFyaWFudChkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgNDgpO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChkb2MuZGVmaW5pdGlvbnMubGVuZ3RoIDw9IDEsICdGcmFnbWVudCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgZGVmaW5pdGlvbi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KGRvYy5kZWZpbml0aW9ucy5sZW5ndGggPD0gMSwgNDkpO1xuICAgIHZhciBmcmFnbWVudERlZiA9IGRvYy5kZWZpbml0aW9uc1swXTtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnREZWYua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicsICdNdXN0IGJlIGEgZnJhZ21lbnQgZGVmaW5pdGlvbi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KGZyYWdtZW50RGVmLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nLCA1MCk7XG4gICAgcmV0dXJuIGZyYWdtZW50RGVmO1xufVxuZnVuY3Rpb24gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnlEb2MpIHtcbiAgICBjaGVja0RvY3VtZW50KHF1ZXJ5RG9jKTtcbiAgICB2YXIgZnJhZ21lbnREZWZpbml0aW9uO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBxdWVyeURvYy5kZWZpbml0aW9uczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGRlZmluaXRpb24gPSBfYVtfaV07XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgdmFyIG9wZXJhdGlvbiA9IGRlZmluaXRpb24ub3BlcmF0aW9uO1xuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJ3F1ZXJ5JyB8fFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbiA9PT0gJ211dGF0aW9uJyB8fFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJyAmJiAhZnJhZ21lbnREZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBmcmFnbWVudERlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmcmFnbWVudERlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50RGVmaW5pdGlvbjtcbiAgICB9XG4gICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKCdFeHBlY3RlZCBhIHBhcnNlZCBHcmFwaFFMIHF1ZXJ5IHdpdGggYSBxdWVyeSwgbXV0YXRpb24sIHN1YnNjcmlwdGlvbiwgb3IgYSBmcmFnbWVudC4nKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDUxKTtcbn1cbmZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZXMoZGVmaW5pdGlvbikge1xuICAgIHZhciBkZWZhdWx0VmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgZGVmcyA9IGRlZmluaXRpb24gJiYgZGVmaW5pdGlvbi52YXJpYWJsZURlZmluaXRpb25zO1xuICAgIGlmIChkZWZzICYmIGRlZnMubGVuZ3RoKSB7XG4gICAgICAgIGRlZnMuZm9yRWFjaChmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgICAgICBpZiAoZGVmLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihkZWZhdWx0VmFsdWVzLCBkZWYudmFyaWFibGUubmFtZSwgZGVmLmRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlcztcbn1cblxuZnVuY3Rpb24gZmlsdGVySW5QbGFjZShhcnJheSwgdGVzdCwgY29udGV4dCkge1xuICAgIHZhciB0YXJnZXQgPSAwO1xuICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW0sIGkpIHtcbiAgICAgICAgaWYgKHRlc3QuY2FsbCh0aGlzLCBlbGVtLCBpLCBhcnJheSkpIHtcbiAgICAgICAgICAgIGFycmF5W3RhcmdldCsrXSA9IGVsZW07XG4gICAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcbiAgICBhcnJheS5sZW5ndGggPSB0YXJnZXQ7XG4gICAgcmV0dXJuIGFycmF5O1xufVxuXG52YXIgVFlQRU5BTUVfRklFTEQgPSB7XG4gICAga2luZDogJ0ZpZWxkJyxcbiAgICBuYW1lOiB7XG4gICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgdmFsdWU6ICdfX3R5cGVuYW1lJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzRW1wdHkob3AsIGZyYWdtZW50cykge1xuICAgIHJldHVybiBvcC5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5ldmVyeShmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb24ua2luZCA9PT0gJ0ZyYWdtZW50U3ByZWFkJyAmJlxuICAgICAgICAgICAgaXNFbXB0eShmcmFnbWVudHNbc2VsZWN0aW9uLm5hbWUudmFsdWVdLCBmcmFnbWVudHMpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbnVsbElmRG9jSXNFbXB0eShkb2MpIHtcbiAgICByZXR1cm4gaXNFbXB0eShnZXRPcGVyYXRpb25EZWZpbml0aW9uKGRvYykgfHwgZ2V0RnJhZ21lbnREZWZpbml0aW9uKGRvYyksIGNyZWF0ZUZyYWdtZW50TWFwKGdldEZyYWdtZW50RGVmaW5pdGlvbnMoZG9jKSkpXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IGRvYztcbn1cbmZ1bmN0aW9uIGdldERpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiBkaXJlY3RpdmVNYXRjaGVyKGRpcmVjdGl2ZSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoZGlyLm5hbWUgJiYgZGlyLm5hbWUgPT09IGRpcmVjdGl2ZS5uYW1lLnZhbHVlKSB8fFxuICAgICAgICAgICAgICAgIChkaXIudGVzdCAmJiBkaXIudGVzdChkaXJlY3RpdmUpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQoZGlyZWN0aXZlcywgZG9jKSB7XG4gICAgdmFyIHZhcmlhYmxlc0luVXNlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgdmFyaWFibGVzVG9SZW1vdmUgPSBbXTtcbiAgICB2YXIgZnJhZ21lbnRTcHJlYWRzSW5Vc2UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBmcmFnbWVudFNwcmVhZHNUb1JlbW92ZSA9IFtdO1xuICAgIHZhciBtb2RpZmllZERvYyA9IG51bGxJZkRvY0lzRW1wdHkoZ3JhcGhxbC52aXNpdChkb2MsIHtcbiAgICAgICAgVmFyaWFibGU6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSwgX2tleSwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5raW5kICE9PSAnVmFyaWFibGVEZWZpbml0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNJblVzZVtub2RlLm5hbWUudmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBGaWVsZDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZXMgJiYgbm9kZS5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzaG91bGRSZW1vdmVGaWVsZCA9IGRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbiAoZGlyZWN0aXZlKSB7IHJldHVybiBkaXJlY3RpdmUucmVtb3ZlOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFJlbW92ZUZpZWxkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRpcmVjdGl2ZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGlyZWN0aXZlcy5zb21lKGdldERpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlcykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZy52YWx1ZS5raW5kID09PSAnVmFyaWFibGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNUb1JlbW92ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcmcudmFsdWUubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRBbGxGcmFnbWVudFNwcmVhZHNGcm9tU2VsZWN0aW9uU2V0KG5vZGUuc2VsZWN0aW9uU2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U3ByZWFkc1RvUmVtb3ZlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZnJhZy5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRnJhZ21lbnRTcHJlYWQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50U3ByZWFkc0luVXNlW25vZGUubmFtZS52YWx1ZV0gPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRGlyZWN0aXZlOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0RGlyZWN0aXZlTWF0Y2hlcihkaXJlY3RpdmVzKShub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pKTtcbiAgICBpZiAobW9kaWZpZWREb2MgJiZcbiAgICAgICAgZmlsdGVySW5QbGFjZSh2YXJpYWJsZXNUb1JlbW92ZSwgZnVuY3Rpb24gKHYpIHsgcmV0dXJuICEhdi5uYW1lICYmICF2YXJpYWJsZXNJblVzZVt2Lm5hbWVdOyB9KS5sZW5ndGgpIHtcbiAgICAgICAgbW9kaWZpZWREb2MgPSByZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQodmFyaWFibGVzVG9SZW1vdmUsIG1vZGlmaWVkRG9jKTtcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVkRG9jICYmXG4gICAgICAgIGZpbHRlckluUGxhY2UoZnJhZ21lbnRTcHJlYWRzVG9SZW1vdmUsIGZ1bmN0aW9uIChmcykgeyByZXR1cm4gISFmcy5uYW1lICYmICFmcmFnbWVudFNwcmVhZHNJblVzZVtmcy5uYW1lXTsgfSlcbiAgICAgICAgICAgIC5sZW5ndGgpIHtcbiAgICAgICAgbW9kaWZpZWREb2MgPSByZW1vdmVGcmFnbWVudFNwcmVhZEZyb21Eb2N1bWVudChmcmFnbWVudFNwcmVhZHNUb1JlbW92ZSwgbW9kaWZpZWREb2MpO1xuICAgIH1cbiAgICByZXR1cm4gbW9kaWZpZWREb2M7XG59XG52YXIgYWRkVHlwZW5hbWVUb0RvY3VtZW50ID0gT2JqZWN0LmFzc2lnbihmdW5jdGlvbiAoZG9jKSB7XG4gICAgcmV0dXJuIGdyYXBocWwudmlzaXQoY2hlY2tEb2N1bWVudChkb2MpLCB7XG4gICAgICAgIFNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlLCBfa2V5LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9ucyA9IG5vZGUuc2VsZWN0aW9ucztcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc2tpcCA9IHNlbGVjdGlvbnMuc29tZShmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXNGaWVsZChzZWxlY3Rpb24pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uLm5hbWUudmFsdWUgPT09ICdfX3R5cGVuYW1lJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5uYW1lLnZhbHVlLmxhc3RJbmRleE9mKCdfXycsIDApID09PSAwKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNraXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmllbGQoZmllbGQpICYmXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpcmVjdGl2ZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUudmFsdWUgPT09ICdleHBvcnQnOyB9KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbm9kZSksIHsgc2VsZWN0aW9uczogdHNsaWIuX19zcHJlYWRBcnJheSh0c2xpYi5fX3NwcmVhZEFycmF5KFtdLCBzZWxlY3Rpb25zLCB0cnVlKSwgW1RZUEVOQU1FX0ZJRUxEXSwgZmFsc2UpIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbn0sIHtcbiAgICBhZGRlZDogZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiBmaWVsZCA9PT0gVFlQRU5BTUVfRklFTEQ7XG4gICAgfSxcbn0pO1xudmFyIGNvbm5lY3Rpb25SZW1vdmVDb25maWcgPSB7XG4gICAgdGVzdDogZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICB2YXIgd2lsbFJlbW92ZSA9IGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnY29ubmVjdGlvbic7XG4gICAgICAgIGlmICh3aWxsUmVtb3ZlKSB7XG4gICAgICAgICAgICBpZiAoIWRpcmVjdGl2ZS5hcmd1bWVudHMgfHxcbiAgICAgICAgICAgICAgICAhZGlyZWN0aXZlLmFyZ3VtZW50cy5zb21lKGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGFyZy5uYW1lLnZhbHVlID09PSAna2V5JzsgfSkpIHtcbiAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oJ1JlbW92aW5nIGFuIEBjb25uZWN0aW9uIGRpcmVjdGl2ZSBldmVuIHRob3VnaCBpdCBkb2VzIG5vdCBoYXZlIGEga2V5LiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1lvdSBtYXkgd2FudCB0byB1c2UgdGhlIGtleSBwYXJhbWV0ZXIgdG8gc3BlY2lmeSBhIHN0b3JlIGtleS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lsbFJlbW92ZTtcbiAgICB9LFxufTtcbmZ1bmN0aW9uIHJlbW92ZUNvbm5lY3Rpb25EaXJlY3RpdmVGcm9tRG9jdW1lbnQoZG9jKSB7XG4gICAgcmV0dXJuIHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQoW2Nvbm5lY3Rpb25SZW1vdmVDb25maWddLCBjaGVja0RvY3VtZW50KGRvYykpO1xufVxuZnVuY3Rpb24gZ2V0QXJndW1lbnRNYXRjaGVyKGNvbmZpZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBhcmd1bWVudE1hdGNoZXIoYXJndW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZy5zb21lKGZ1bmN0aW9uIChhQ29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJndW1lbnQudmFsdWUgJiZcbiAgICAgICAgICAgICAgICBhcmd1bWVudC52YWx1ZS5raW5kID09PSAnVmFyaWFibGUnICYmXG4gICAgICAgICAgICAgICAgYXJndW1lbnQudmFsdWUubmFtZSAmJlxuICAgICAgICAgICAgICAgIChhQ29uZmlnLm5hbWUgPT09IGFyZ3VtZW50LnZhbHVlLm5hbWUudmFsdWUgfHxcbiAgICAgICAgICAgICAgICAgICAgKGFDb25maWcudGVzdCAmJiBhQ29uZmlnLnRlc3QoYXJndW1lbnQpKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiByZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQoY29uZmlnLCBkb2MpIHtcbiAgICB2YXIgYXJnTWF0Y2hlciA9IGdldEFyZ3VtZW50TWF0Y2hlcihjb25maWcpO1xuICAgIHJldHVybiBudWxsSWZEb2NJc0VtcHR5KGdyYXBocWwudmlzaXQoZG9jLCB7XG4gICAgICAgIE9wZXJhdGlvbkRlZmluaXRpb246IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbm9kZSksIHsgdmFyaWFibGVEZWZpbml0aW9uczogbm9kZS52YXJpYWJsZURlZmluaXRpb25zID8gbm9kZS52YXJpYWJsZURlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAodmFyRGVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWNvbmZpZy5zb21lKGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGFyZy5uYW1lID09PSB2YXJEZWYudmFyaWFibGUubmFtZS52YWx1ZTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pIDogW10gfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBGaWVsZDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNob3VsZFJlbW92ZUZpZWxkID0gY29uZmlnLnNvbWUoZnVuY3Rpb24gKGFyZ0NvbmZpZykgeyByZXR1cm4gYXJnQ29uZmlnLnJlbW92ZTsgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFJlbW92ZUZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdNYXRjaENvdW50XzEgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdNYXRjaGVyKGFyZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnTWF0Y2hDb3VudF8xICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ01hdGNoQ291bnRfMSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBBcmd1bWVudDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ01hdGNoZXIobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KSk7XG59XG5mdW5jdGlvbiByZW1vdmVGcmFnbWVudFNwcmVhZEZyb21Eb2N1bWVudChjb25maWcsIGRvYykge1xuICAgIGZ1bmN0aW9uIGVudGVyKG5vZGUpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zb21lKGZ1bmN0aW9uIChkZWYpIHsgcmV0dXJuIGRlZi5uYW1lID09PSBub2RlLm5hbWUudmFsdWU7IH0pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbElmRG9jSXNFbXB0eShncmFwaHFsLnZpc2l0KGRvYywge1xuICAgICAgICBGcmFnbWVudFNwcmVhZDogeyBlbnRlcjogZW50ZXIgfSxcbiAgICAgICAgRnJhZ21lbnREZWZpbml0aW9uOiB7IGVudGVyOiBlbnRlciB9LFxuICAgIH0pKTtcbn1cbmZ1bmN0aW9uIGdldEFsbEZyYWdtZW50U3ByZWFkc0Zyb21TZWxlY3Rpb25TZXQoc2VsZWN0aW9uU2V0KSB7XG4gICAgdmFyIGFsbEZyYWdtZW50cyA9IFtdO1xuICAgIHNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoKGlzRmllbGQoc2VsZWN0aW9uKSB8fCBpc0lubGluZUZyYWdtZW50KHNlbGVjdGlvbikpICYmXG4gICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICBnZXRBbGxGcmFnbWVudFNwcmVhZHNGcm9tU2VsZWN0aW9uU2V0KHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQpLmZvckVhY2goZnVuY3Rpb24gKGZyYWcpIHsgcmV0dXJuIGFsbEZyYWdtZW50cy5wdXNoKGZyYWcpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxlY3Rpb24ua2luZCA9PT0gJ0ZyYWdtZW50U3ByZWFkJykge1xuICAgICAgICAgICAgYWxsRnJhZ21lbnRzLnB1c2goc2VsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxGcmFnbWVudHM7XG59XG5mdW5jdGlvbiBidWlsZFF1ZXJ5RnJvbVNlbGVjdGlvblNldChkb2N1bWVudCkge1xuICAgIHZhciBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24oZG9jdW1lbnQpO1xuICAgIHZhciBkZWZpbml0aW9uT3BlcmF0aW9uID0gZGVmaW5pdGlvbi5vcGVyYXRpb247XG4gICAgaWYgKGRlZmluaXRpb25PcGVyYXRpb24gPT09ICdxdWVyeScpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH1cbiAgICB2YXIgbW9kaWZpZWREb2MgPSBncmFwaHFsLnZpc2l0KGRvY3VtZW50LCB7XG4gICAgICAgIE9wZXJhdGlvbkRlZmluaXRpb246IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbm9kZSksIHsgb3BlcmF0aW9uOiAncXVlcnknIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbW9kaWZpZWREb2M7XG59XG5mdW5jdGlvbiByZW1vdmVDbGllbnRTZXRzRnJvbURvY3VtZW50KGRvY3VtZW50KSB7XG4gICAgY2hlY2tEb2N1bWVudChkb2N1bWVudCk7XG4gICAgdmFyIG1vZGlmaWVkRG9jID0gcmVtb3ZlRGlyZWN0aXZlc0Zyb21Eb2N1bWVudChbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChkaXJlY3RpdmUpIHsgcmV0dXJuIGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnY2xpZW50JzsgfSxcbiAgICAgICAgICAgIHJlbW92ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLCBkb2N1bWVudCk7XG4gICAgaWYgKG1vZGlmaWVkRG9jKSB7XG4gICAgICAgIG1vZGlmaWVkRG9jID0gZ3JhcGhxbC52aXNpdChtb2RpZmllZERvYywge1xuICAgICAgICAgICAgRnJhZ21lbnREZWZpbml0aW9uOiB7XG4gICAgICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVHlwZW5hbWVPbmx5ID0gbm9kZS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5ldmVyeShmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzRmllbGQoc2VsZWN0aW9uKSAmJiBzZWxlY3Rpb24ubmFtZS52YWx1ZSA9PT0gJ19fdHlwZW5hbWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNUeXBlbmFtZU9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGlmaWVkRG9jO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gbWVyZ2VEZWVwKCkge1xuICAgIHZhciBzb3VyY2VzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgc291cmNlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VEZWVwQXJyYXkoc291cmNlcyk7XG59XG5mdW5jdGlvbiBtZXJnZURlZXBBcnJheShzb3VyY2VzKSB7XG4gICAgdmFyIHRhcmdldCA9IHNvdXJjZXNbMF0gfHwge307XG4gICAgdmFyIGNvdW50ID0gc291cmNlcy5sZW5ndGg7XG4gICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgICB2YXIgbWVyZ2VyID0gbmV3IERlZXBNZXJnZXIoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtZXJnZXIubWVyZ2UodGFyZ2V0LCBzb3VyY2VzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxudmFyIGRlZmF1bHRSZWNvbmNpbGVyID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzLm1lcmdlKHRhcmdldFtwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xufTtcbnZhciBEZWVwTWVyZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWVwTWVyZ2VyKHJlY29uY2lsZXIpIHtcbiAgICAgICAgaWYgKHJlY29uY2lsZXIgPT09IHZvaWQgMCkgeyByZWNvbmNpbGVyID0gZGVmYXVsdFJlY29uY2lsZXI7IH1cbiAgICAgICAgdGhpcy5yZWNvbmNpbGVyID0gcmVjb25jaWxlcjtcbiAgICAgICAgdGhpcy5pc09iamVjdCA9IGlzTm9uTnVsbE9iamVjdDtcbiAgICAgICAgdGhpcy5wYXN0Q29waWVzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBEZWVwTWVyZ2VyLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29udGV4dCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY29udGV4dFtfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KHNvdXJjZSkgJiYgaXNOb25OdWxsT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlS2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBzb3VyY2VLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRWYWx1ZSA9IHRhcmdldFtzb3VyY2VLZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlW3NvdXJjZUtleV0gIT09IHRhcmdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gX3RoaXMucmVjb25jaWxlci5hcHBseShfdGhpcywgdHNsaWIuX19zcHJlYWRBcnJheShbdGFyZ2V0LCBzb3VyY2UsIHNvdXJjZUtleV0sIGNvbnRleHQsIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0YXJnZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IF90aGlzLnNoYWxsb3dDb3B5Rm9yTWVyZ2UodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gX3RoaXMuc2hhbGxvd0NvcHlGb3JNZXJnZSh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlS2V5XSA9IHNvdXJjZVtzb3VyY2VLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH07XG4gICAgRGVlcE1lcmdlci5wcm90b3R5cGUuc2hhbGxvd0NvcHlGb3JNZXJnZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFzdENvcGllcy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3QuaXNGcm96ZW4odmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXN0Q29waWVzLmRlbGV0ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0c2xpYi5fX2Fzc2lnbih7IF9fcHJvdG9fXzogT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKSB9LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhc3RDb3BpZXMuYWRkKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICByZXR1cm4gRGVlcE1lcmdlcjtcbn0oKSk7XG5cbmZ1bmN0aW9uIGNvbmNhdFBhZ2luYXRpb24oa2V5QXJncykge1xuICAgIGlmIChrZXlBcmdzID09PSB2b2lkIDApIHsga2V5QXJncyA9IGZhbHNlOyB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5QXJnczoga2V5QXJncyxcbiAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZyA/IHRzbGliLl9fc3ByZWFkQXJyYXkodHNsaWIuX19zcHJlYWRBcnJheShbXSwgZXhpc3RpbmcsIHRydWUpLCBpbmNvbWluZywgdHJ1ZSkgOiBpbmNvbWluZztcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZnVuY3Rpb24gb2Zmc2V0TGltaXRQYWdpbmF0aW9uKGtleUFyZ3MpIHtcbiAgICBpZiAoa2V5QXJncyA9PT0gdm9pZCAwKSB7IGtleUFyZ3MgPSBmYWxzZTsgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGtleUFyZ3M6IGtleUFyZ3MsXG4gICAgICAgIG1lcmdlOiBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nLCBfYSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBfYS5hcmdzO1xuICAgICAgICAgICAgdmFyIG1lcmdlZCA9IGV4aXN0aW5nID8gZXhpc3Rpbmcuc2xpY2UoMCkgOiBbXTtcbiAgICAgICAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9iID0gYXJncy5vZmZzZXQsIG9mZnNldCA9IF9iID09PSB2b2lkIDAgPyAwIDogX2I7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmNvbWluZy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBtZXJnZWRbb2Zmc2V0ICsgaV0gPSBpbmNvbWluZ1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXJnZWQucHVzaC5hcHBseShtZXJnZWQsIGluY29taW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlbGF5U3R5bGVQYWdpbmF0aW9uKGtleUFyZ3MpIHtcbiAgICBpZiAoa2V5QXJncyA9PT0gdm9pZCAwKSB7IGtleUFyZ3MgPSBmYWxzZTsgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGtleUFyZ3M6IGtleUFyZ3MsXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIChleGlzdGluZywgX2EpIHtcbiAgICAgICAgICAgIHZhciBjYW5SZWFkID0gX2EuY2FuUmVhZCwgcmVhZEZpZWxkID0gX2EucmVhZEZpZWxkO1xuICAgICAgICAgICAgaWYgKCFleGlzdGluZylcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgICAgICAgICB2YXIgZWRnZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBmaXJzdEVkZ2VDdXJzb3IgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGxhc3RFZGdlQ3Vyc29yID0gXCJcIjtcbiAgICAgICAgICAgIGV4aXN0aW5nLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24gKGVkZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FuUmVhZChyZWFkRmllbGQoXCJub2RlXCIsIGVkZ2UpKSkge1xuICAgICAgICAgICAgICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWRnZS5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0RWRnZUN1cnNvciA9IGZpcnN0RWRnZUN1cnNvciB8fCBlZGdlLmN1cnNvciB8fCBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEVkZ2VDdXJzb3IgPSBlZGdlLmN1cnNvciB8fCBsYXN0RWRnZUN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIF9iID0gZXhpc3RpbmcucGFnZUluZm8gfHwge30sIHN0YXJ0Q3Vyc29yID0gX2Iuc3RhcnRDdXJzb3IsIGVuZEN1cnNvciA9IF9iLmVuZEN1cnNvcjtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZ2V0RXh0cmFzKGV4aXN0aW5nKSksIHsgZWRnZXM6IGVkZ2VzLCBwYWdlSW5mbzogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGV4aXN0aW5nLnBhZ2VJbmZvKSwgeyBzdGFydEN1cnNvcjogc3RhcnRDdXJzb3IgfHwgZmlyc3RFZGdlQ3Vyc29yLCBlbmRDdXJzb3I6IGVuZEN1cnNvciB8fCBsYXN0RWRnZUN1cnNvciB9KSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcsIF9hKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IF9hLmFyZ3MsIGlzUmVmZXJlbmNlID0gX2EuaXNSZWZlcmVuY2UsIHJlYWRGaWVsZCA9IF9hLnJlYWRGaWVsZDtcbiAgICAgICAgICAgIGlmICghZXhpc3RpbmcpIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZyA9IG1ha2VFbXB0eURhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaW5jb21pbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW5jb21pbmdFZGdlcyA9IGluY29taW5nLmVkZ2VzID8gaW5jb21pbmcuZWRnZXMubWFwKGZ1bmN0aW9uIChlZGdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUmVmZXJlbmNlKGVkZ2UgPSB0c2xpYi5fX2Fzc2lnbih7fSwgZWRnZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVkZ2UuY3Vyc29yID0gcmVhZEZpZWxkKFwiY3Vyc29yXCIsIGVkZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZWRnZTtcbiAgICAgICAgICAgIH0pIDogW107XG4gICAgICAgICAgICBpZiAoaW5jb21pbmcucGFnZUluZm8pIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFnZUluZm9fMSA9IGluY29taW5nLnBhZ2VJbmZvO1xuICAgICAgICAgICAgICAgIHZhciBzdGFydEN1cnNvciA9IHBhZ2VJbmZvXzEuc3RhcnRDdXJzb3IsIGVuZEN1cnNvciA9IHBhZ2VJbmZvXzEuZW5kQ3Vyc29yO1xuICAgICAgICAgICAgICAgIHZhciBmaXJzdEVkZ2UgPSBpbmNvbWluZ0VkZ2VzWzBdO1xuICAgICAgICAgICAgICAgIHZhciBsYXN0RWRnZSA9IGluY29taW5nRWRnZXNbaW5jb21pbmdFZGdlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RFZGdlICYmIHN0YXJ0Q3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0RWRnZS5jdXJzb3IgPSBzdGFydEN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RFZGdlICYmIGVuZEN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBsYXN0RWRnZS5jdXJzb3IgPSBlbmRDdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmaXJzdEN1cnNvciA9IGZpcnN0RWRnZSAmJiBmaXJzdEVkZ2UuY3Vyc29yO1xuICAgICAgICAgICAgICAgIGlmIChmaXJzdEN1cnNvciAmJiAhc3RhcnRDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jb21pbmcgPSBtZXJnZURlZXAoaW5jb21pbmcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRDdXJzb3I6IGZpcnN0Q3Vyc29yLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBsYXN0Q3Vyc29yID0gbGFzdEVkZ2UgJiYgbGFzdEVkZ2UuY3Vyc29yO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0Q3Vyc29yICYmICFlbmRDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jb21pbmcgPSBtZXJnZURlZXAoaW5jb21pbmcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQ3Vyc29yOiBsYXN0Q3Vyc29yLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGV4aXN0aW5nLmVkZ2VzO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IFtdO1xuICAgICAgICAgICAgaWYgKGFyZ3MgJiYgYXJncy5hZnRlcikge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHByZWZpeC5maW5kSW5kZXgoZnVuY3Rpb24gKGVkZ2UpIHsgcmV0dXJuIGVkZ2UuY3Vyc29yID09PSBhcmdzLmFmdGVyOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXggPSBwcmVmaXguc2xpY2UoMCwgaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmdzICYmIGFyZ3MuYmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcHJlZml4LmZpbmRJbmRleChmdW5jdGlvbiAoZWRnZSkgeyByZXR1cm4gZWRnZS5jdXJzb3IgPT09IGFyZ3MuYmVmb3JlOyB9KTtcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBpbmRleCA8IDAgPyBwcmVmaXggOiBwcmVmaXguc2xpY2UoaW5kZXgpO1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5jb21pbmcuZWRnZXMpIHtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlZGdlcyA9IHRzbGliLl9fc3ByZWFkQXJyYXkodHNsaWIuX19zcHJlYWRBcnJheSh0c2xpYi5fX3NwcmVhZEFycmF5KFtdLCBwcmVmaXgsIHRydWUpLCBpbmNvbWluZ0VkZ2VzLCB0cnVlKSwgc3VmZml4LCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBwYWdlSW5mbyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBpbmNvbWluZy5wYWdlSW5mbyksIGV4aXN0aW5nLnBhZ2VJbmZvKTtcbiAgICAgICAgICAgIGlmIChpbmNvbWluZy5wYWdlSW5mbykge1xuICAgICAgICAgICAgICAgIHZhciBfYiA9IGluY29taW5nLnBhZ2VJbmZvLCBoYXNQcmV2aW91c1BhZ2UgPSBfYi5oYXNQcmV2aW91c1BhZ2UsIGhhc05leHRQYWdlID0gX2IuaGFzTmV4dFBhZ2UsIHN0YXJ0Q3Vyc29yID0gX2Iuc3RhcnRDdXJzb3IsIGVuZEN1cnNvciA9IF9iLmVuZEN1cnNvciwgZXh0cmFzID0gdHNsaWIuX19yZXN0KF9iLCBbXCJoYXNQcmV2aW91c1BhZ2VcIiwgXCJoYXNOZXh0UGFnZVwiLCBcInN0YXJ0Q3Vyc29yXCIsIFwiZW5kQ3Vyc29yXCJdKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHBhZ2VJbmZvLCBleHRyYXMpO1xuICAgICAgICAgICAgICAgIGlmICghcHJlZml4Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBoYXNQcmV2aW91c1BhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mby5oYXNQcmV2aW91c1BhZ2UgPSBoYXNQcmV2aW91c1BhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHN0YXJ0Q3Vyc29yKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUluZm8uc3RhcnRDdXJzb3IgPSBzdGFydEN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFzdWZmaXgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGhhc05leHRQYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUluZm8uaGFzTmV4dFBhZ2UgPSBoYXNOZXh0UGFnZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gZW5kQ3Vyc29yKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUluZm8uZW5kQ3Vyc29yID0gZW5kQ3Vyc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZ2V0RXh0cmFzKGV4aXN0aW5nKSksIGdldEV4dHJhcyhpbmNvbWluZykpLCB7IGVkZ2VzOiBlZGdlcywgcGFnZUluZm86IHBhZ2VJbmZvIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG52YXIgZ2V0RXh0cmFzID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHNsaWIuX19yZXN0KG9iaiwgbm90RXh0cmFzKTsgfTtcbnZhciBub3RFeHRyYXMgPSBbXCJlZGdlc1wiLCBcInBhZ2VJbmZvXCJdO1xuZnVuY3Rpb24gbWFrZUVtcHR5RGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBlZGdlczogW10sXG4gICAgICAgIHBhZ2VJbmZvOiB7XG4gICAgICAgICAgICBoYXNQcmV2aW91c1BhZ2U6IGZhbHNlLFxuICAgICAgICAgICAgaGFzTmV4dFBhZ2U6IHRydWUsXG4gICAgICAgICAgICBzdGFydEN1cnNvcjogXCJcIixcbiAgICAgICAgICAgIGVuZEN1cnNvcjogXCJcIixcbiAgICAgICAgfSxcbiAgICB9O1xufVxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gICAgcmV0dXJuIGNsb25lRGVlcEhlbHBlcih2YWx1ZSk7XG59XG5mdW5jdGlvbiBjbG9uZURlZXBIZWxwZXIodmFsLCBzZWVuKSB7XG4gICAgc3dpdGNoICh0b1N0cmluZy5jYWxsKHZhbCkpIHtcbiAgICAgICAgY2FzZSBcIltvYmplY3QgQXJyYXldXCI6IHtcbiAgICAgICAgICAgIHNlZW4gPSBzZWVuIHx8IG5ldyBNYXA7XG4gICAgICAgICAgICBpZiAoc2Vlbi5oYXModmFsKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5nZXQodmFsKTtcbiAgICAgICAgICAgIHZhciBjb3B5XzEgPSB2YWwuc2xpY2UoMCk7XG4gICAgICAgICAgICBzZWVuLnNldCh2YWwsIGNvcHlfMSk7XG4gICAgICAgICAgICBjb3B5XzEuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb3B5XzFbaV0gPSBjbG9uZURlZXBIZWxwZXIoY2hpbGQsIHNlZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY29weV8xO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IE9iamVjdF1cIjoge1xuICAgICAgICAgICAgc2VlbiA9IHNlZW4gfHwgbmV3IE1hcDtcbiAgICAgICAgICAgIGlmIChzZWVuLmhhcyh2YWwpKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWVuLmdldCh2YWwpO1xuICAgICAgICAgICAgdmFyIGNvcHlfMiA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbCkpO1xuICAgICAgICAgICAgc2Vlbi5zZXQodmFsLCBjb3B5XzIpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjb3B5XzJba2V5XSA9IGNsb25lRGVlcEhlbHBlcih2YWxba2V5XSwgc2Vlbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjb3B5XzI7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWVwRnJlZXplKHZhbHVlKSB7XG4gICAgdmFyIHdvcmtTZXQgPSBuZXcgU2V0KFt2YWx1ZV0pO1xuICAgIHdvcmtTZXQuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGlmIChpc05vbk51bGxPYmplY3Qob2JqKSAmJiBzaGFsbG93RnJlZXplKG9iaikgPT09IG9iaikge1xuICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTm9uTnVsbE9iamVjdChvYmpbbmFtZV0pKVxuICAgICAgICAgICAgICAgICAgICB3b3JrU2V0LmFkZChvYmpbbmFtZV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBzaGFsbG93RnJlZXplKG9iaikge1xuICAgIGlmIChfX0RFVl9fICYmICFPYmplY3QuaXNGcm96ZW4ob2JqKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShvYmopO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFR5cGVFcnJvcilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIG1heWJlRGVlcEZyZWV6ZShvYmopIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBkZWVwRnJlZXplKG9iaik7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkob2JzZXJ2ZXJzLCBtZXRob2QsIGFyZ3VtZW50KSB7XG4gICAgdmFyIG9ic2VydmVyc1dpdGhNZXRob2QgPSBbXTtcbiAgICBvYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzKSB7IHJldHVybiBvYnNbbWV0aG9kXSAmJiBvYnNlcnZlcnNXaXRoTWV0aG9kLnB1c2gob2JzKTsgfSk7XG4gICAgb2JzZXJ2ZXJzV2l0aE1ldGhvZC5mb3JFYWNoKGZ1bmN0aW9uIChvYnMpIHsgcmV0dXJuIG9ic1ttZXRob2RdKGFyZ3VtZW50KTsgfSk7XG59XG5cbmZ1bmN0aW9uIGFzeW5jTWFwKG9ic2VydmFibGUsIG1hcEZuLCBjYXRjaEZuKSB7XG4gICAgcmV0dXJuIG5ldyB6ZW5PYnNlcnZhYmxlVHMuT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIG5leHQgPSBvYnNlcnZlci5uZXh0LCBlcnJvciA9IG9ic2VydmVyLmVycm9yLCBjb21wbGV0ZSA9IG9ic2VydmVyLmNvbXBsZXRlO1xuICAgICAgICB2YXIgYWN0aXZlQ2FsbGJhY2tDb3VudCA9IDA7XG4gICAgICAgIHZhciBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHByb21pc2VRdWV1ZSA9IHtcbiAgICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gcmVzb2x2ZShjYWxsYmFjaygpKTsgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBtYWtlQ2FsbGJhY2soZXhhbWluZXIsIGRlbGVnYXRlKSB7XG4gICAgICAgICAgICBpZiAoZXhhbWluZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgICAgICArK2FjdGl2ZUNhbGxiYWNrQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBib3RoID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZXhhbWluZXIoYXJnKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVF1ZXVlID0gcHJvbWlzZVF1ZXVlLnRoZW4oYm90aCwgYm90aCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLWFjdGl2ZUNhbGxiYWNrQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ICYmIG5leHQuY2FsbChvYnNlcnZlciwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1hY3RpdmVDYWxsYmFja0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChjYXVnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yICYmIGVycm9yLmNhbGwob2JzZXJ2ZXIsIGNhdWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykgeyByZXR1cm4gZGVsZWdhdGUgJiYgZGVsZWdhdGUuY2FsbChvYnNlcnZlciwgYXJnKTsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFuZGxlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IG1ha2VDYWxsYmFjayhtYXBGbiwgbmV4dCksXG4gICAgICAgICAgICBlcnJvcjogbWFrZUNhbGxiYWNrKGNhdGNoRm4sIGVycm9yKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZUNhbGxiYWNrQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGUgJiYgY29tcGxldGUuY2FsbChvYnNlcnZlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHN1YiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKGhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc3ViLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgfSk7XG59XG5cbnZhciBjYW5Vc2VXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgISh0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyAmJlxuICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKTtcbnZhciBjYW5Vc2VXZWFrU2V0ID0gdHlwZW9mIFdlYWtTZXQgPT09ICdmdW5jdGlvbic7XG52YXIgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBTeW1ib2wuZm9yID09PSAnZnVuY3Rpb24nO1xuXG5mdW5jdGlvbiBmaXhPYnNlcnZhYmxlU3ViY2xhc3Moc3ViY2xhc3MpIHtcbiAgICBmdW5jdGlvbiBzZXQoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJjbGFzcywga2V5LCB7IHZhbHVlOiB6ZW5PYnNlcnZhYmxlVHMuT2JzZXJ2YWJsZSB9KTtcbiAgICB9XG4gICAgaWYgKGNhblVzZVN5bWJvbCAmJiBTeW1ib2wuc3BlY2llcykge1xuICAgICAgICBzZXQoU3ltYm9sLnNwZWNpZXMpO1xuICAgIH1cbiAgICBzZXQoXCJAQHNwZWNpZXNcIik7XG4gICAgcmV0dXJuIHN1YmNsYXNzO1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2VMaWtlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG59XG52YXIgQ29uY2FzdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKENvbmNhc3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29uY2FzdChzb3VyY2VzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgX3RoaXMuYWRkT2JzZXJ2ZXIob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJlbW92ZU9ic2VydmVyKG9ic2VydmVyKTsgfTtcbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy5hZGRDb3VudCA9IDA7XG4gICAgICAgIF90aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIF90aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLmhhbmRsZXJzID0ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zdWIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGF0ZXN0ID0gW1wibmV4dFwiLCByZXN1bHRdO1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5KF90aGlzLm9ic2VydmVycywgXCJuZXh0XCIsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ViID0gX3RoaXMuc3ViO1xuICAgICAgICAgICAgICAgIGlmIChzdWIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YilcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3ViLnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXRlc3QgPSBbXCJlcnJvclwiLCBlcnJvcl07XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkoX3RoaXMub2JzZXJ2ZXJzLCBcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc3ViICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IF90aGlzLnNvdXJjZXMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3ViID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sYXRlc3QgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXRlc3RbMF0gPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVzb2x2ZShfdGhpcy5sYXRlc3RbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZU9ic2VydmVyc1NhZmVseShfdGhpcy5vYnNlcnZlcnMsIFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNQcm9taXNlTGlrZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnRoZW4oZnVuY3Rpb24gKG9icykgeyByZXR1cm4gX3RoaXMuc3ViID0gb2JzLnN1YnNjcmliZShfdGhpcy5oYW5kbGVycyk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3ViID0gdmFsdWUuc3Vic2NyaWJlKF90aGlzLmhhbmRsZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmNhbmNlbCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICAgIF90aGlzLnJlamVjdChyZWFzb24pO1xuICAgICAgICAgICAgX3RoaXMuc291cmNlcyA9IFtdO1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlcnMuY29tcGxldGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoXykgeyB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHNvdXJjZXMgPSBbbmV3IHplbk9ic2VydmFibGVUcy5PYnNlcnZhYmxlKHNvdXJjZXMpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcm9taXNlTGlrZShzb3VyY2VzKSkge1xuICAgICAgICAgICAgc291cmNlcy50aGVuKGZ1bmN0aW9uIChpdGVyYWJsZSkgeyByZXR1cm4gX3RoaXMuc3RhcnQoaXRlcmFibGUpOyB9LCBfdGhpcy5oYW5kbGVycy5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFydChzb3VyY2VzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbmNhc3QucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKHNvdXJjZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViICE9PSB2b2lkIDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuc291cmNlcyA9IEFycmF5LmZyb20oc291cmNlcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMuY29tcGxldGUoKTtcbiAgICB9O1xuICAgIENvbmNhc3QucHJvdG90eXBlLmRlbGl2ZXJMYXN0TWVzc2FnZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBpZiAodGhpcy5sYXRlc3QpIHtcbiAgICAgICAgICAgIHZhciBuZXh0T3JFcnJvciA9IHRoaXMubGF0ZXN0WzBdO1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IG9ic2VydmVyW25leHRPckVycm9yXTtcbiAgICAgICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QuY2FsbChvYnNlcnZlciwgdGhpcy5sYXRlc3RbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3ViID09PSBudWxsICYmXG4gICAgICAgICAgICAgICAgbmV4dE9yRXJyb3IgPT09IFwibmV4dFwiICYmXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25jYXN0LnByb3RvdHlwZS5hZGRPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzLmhhcyhvYnNlcnZlcikpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsaXZlckxhc3RNZXNzYWdlKG9ic2VydmVyKTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmFkZChvYnNlcnZlcik7XG4gICAgICAgICAgICArK3RoaXMuYWRkQ291bnQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbmNhc3QucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyLCBxdWlldGx5KSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpICYmXG4gICAgICAgICAgICAtLXRoaXMuYWRkQ291bnQgPCAxICYmXG4gICAgICAgICAgICAhcXVpZXRseSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5lcnJvcihuZXcgRXJyb3IoXCJPYnNlcnZhYmxlIGNhbmNlbGxlZCBwcmVtYXR1cmVseVwiKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbmNhc3QucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgb25jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5vYnNlcnZlcnMuZGVsZXRlKG9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgICBuZXh0OiBvbmNlLFxuICAgICAgICAgICAgZXJyb3I6IG9uY2UsXG4gICAgICAgICAgICBjb21wbGV0ZTogb25jZSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNvdW50ID0gdGhpcy5hZGRDb3VudDtcbiAgICAgICAgdGhpcy5hZGRPYnNlcnZlcihvYnNlcnZlcik7XG4gICAgICAgIHRoaXMuYWRkQ291bnQgPSBjb3VudDtcbiAgICB9O1xuICAgIHJldHVybiBDb25jYXN0O1xufSh6ZW5PYnNlcnZhYmxlVHMuT2JzZXJ2YWJsZSkpO1xuZml4T2JzZXJ2YWJsZVN1YmNsYXNzKENvbmNhc3QpO1xuXG5mdW5jdGlvbiBpc05vbkVtcHR5QXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHJlc3VsdCkge1xuICAgIHJldHVybiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmxlbmd0aCA+IDApIHx8IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjb21wYWN0KCkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgb2JqZWN0c1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBvYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoIW9iailcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG52YXIgcHJlZml4Q291bnRzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gbWFrZVVuaXF1ZUlkKHByZWZpeCkge1xuICAgIHZhciBjb3VudCA9IHByZWZpeENvdW50cy5nZXQocHJlZml4KSB8fCAxO1xuICAgIHByZWZpeENvdW50cy5zZXQocHJlZml4LCBjb3VudCArIDEpO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChwcmVmaXgsIFwiOlwiKS5jb25jYXQoY291bnQsIFwiOlwiKS5jb25jYXQoTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMikpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlGb3JEaXNwbGF5KHZhbHVlKSB7XG4gICAgdmFyIHVuZGVmSWQgPSBtYWtlVW5pcXVlSWQoXCJzdHJpbmdpZnlGb3JEaXNwbGF5XCIpO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB2b2lkIDAgPyB1bmRlZklkIDogdmFsdWU7XG4gICAgfSkuc3BsaXQoSlNPTi5zdHJpbmdpZnkodW5kZWZJZCkpLmpvaW4oXCI8dW5kZWZpbmVkPlwiKTtcbn1cblxuZXhwb3J0cy5ERVYgPSBnbG9iYWxzLkRFVjtcbmV4cG9ydHMubWF5YmUgPSBnbG9iYWxzLm1heWJlO1xuZXhwb3J0cy5PYnNlcnZhYmxlID0gemVuT2JzZXJ2YWJsZVRzLk9ic2VydmFibGU7XG5leHBvcnRzLkNvbmNhc3QgPSBDb25jYXN0O1xuZXhwb3J0cy5EZWVwTWVyZ2VyID0gRGVlcE1lcmdlcjtcbmV4cG9ydHMuYWRkVHlwZW5hbWVUb0RvY3VtZW50ID0gYWRkVHlwZW5hbWVUb0RvY3VtZW50O1xuZXhwb3J0cy5hcmd1bWVudHNPYmplY3RGcm9tRmllbGQgPSBhcmd1bWVudHNPYmplY3RGcm9tRmllbGQ7XG5leHBvcnRzLmFzeW5jTWFwID0gYXN5bmNNYXA7XG5leHBvcnRzLmJ1aWxkUXVlcnlGcm9tU2VsZWN0aW9uU2V0ID0gYnVpbGRRdWVyeUZyb21TZWxlY3Rpb25TZXQ7XG5leHBvcnRzLmNhblVzZVN5bWJvbCA9IGNhblVzZVN5bWJvbDtcbmV4cG9ydHMuY2FuVXNlV2Vha01hcCA9IGNhblVzZVdlYWtNYXA7XG5leHBvcnRzLmNhblVzZVdlYWtTZXQgPSBjYW5Vc2VXZWFrU2V0O1xuZXhwb3J0cy5jaGVja0RvY3VtZW50ID0gY2hlY2tEb2N1bWVudDtcbmV4cG9ydHMuY2xvbmVEZWVwID0gY2xvbmVEZWVwO1xuZXhwb3J0cy5jb21wYWN0ID0gY29tcGFjdDtcbmV4cG9ydHMuY29uY2F0UGFnaW5hdGlvbiA9IGNvbmNhdFBhZ2luYXRpb247XG5leHBvcnRzLmNyZWF0ZUZyYWdtZW50TWFwID0gY3JlYXRlRnJhZ21lbnRNYXA7XG5leHBvcnRzLmZpeE9ic2VydmFibGVTdWJjbGFzcyA9IGZpeE9ic2VydmFibGVTdWJjbGFzcztcbmV4cG9ydHMuZ2V0RGVmYXVsdFZhbHVlcyA9IGdldERlZmF1bHRWYWx1ZXM7XG5leHBvcnRzLmdldERpcmVjdGl2ZU5hbWVzID0gZ2V0RGlyZWN0aXZlTmFtZXM7XG5leHBvcnRzLmdldEZyYWdtZW50RGVmaW5pdGlvbiA9IGdldEZyYWdtZW50RGVmaW5pdGlvbjtcbmV4cG9ydHMuZ2V0RnJhZ21lbnREZWZpbml0aW9ucyA9IGdldEZyYWdtZW50RGVmaW5pdGlvbnM7XG5leHBvcnRzLmdldEZyYWdtZW50RnJvbVNlbGVjdGlvbiA9IGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbjtcbmV4cG9ydHMuZ2V0RnJhZ21lbnRRdWVyeURvY3VtZW50ID0gZ2V0RnJhZ21lbnRRdWVyeURvY3VtZW50O1xuZXhwb3J0cy5nZXRJbmNsdXNpb25EaXJlY3RpdmVzID0gZ2V0SW5jbHVzaW9uRGlyZWN0aXZlcztcbmV4cG9ydHMuZ2V0TWFpbkRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbjtcbmV4cG9ydHMuZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbiA9IGdldE9wZXJhdGlvbkRlZmluaXRpb247XG5leHBvcnRzLmdldE9wZXJhdGlvbk5hbWUgPSBnZXRPcGVyYXRpb25OYW1lO1xuZXhwb3J0cy5nZXRRdWVyeURlZmluaXRpb24gPSBnZXRRdWVyeURlZmluaXRpb247XG5leHBvcnRzLmdldFN0b3JlS2V5TmFtZSA9IGdldFN0b3JlS2V5TmFtZTtcbmV4cG9ydHMuZ2V0VHlwZW5hbWVGcm9tUmVzdWx0ID0gZ2V0VHlwZW5hbWVGcm9tUmVzdWx0O1xuZXhwb3J0cy5ncmFwaFFMUmVzdWx0SGFzRXJyb3IgPSBncmFwaFFMUmVzdWx0SGFzRXJyb3I7XG5leHBvcnRzLmhhc0NsaWVudEV4cG9ydHMgPSBoYXNDbGllbnRFeHBvcnRzO1xuZXhwb3J0cy5oYXNEaXJlY3RpdmVzID0gaGFzRGlyZWN0aXZlcztcbmV4cG9ydHMuaXNEb2N1bWVudE5vZGUgPSBpc0RvY3VtZW50Tm9kZTtcbmV4cG9ydHMuaXNGaWVsZCA9IGlzRmllbGQ7XG5leHBvcnRzLmlzSW5saW5lRnJhZ21lbnQgPSBpc0lubGluZUZyYWdtZW50O1xuZXhwb3J0cy5pc05vbkVtcHR5QXJyYXkgPSBpc05vbkVtcHR5QXJyYXk7XG5leHBvcnRzLmlzTm9uTnVsbE9iamVjdCA9IGlzTm9uTnVsbE9iamVjdDtcbmV4cG9ydHMuaXNSZWZlcmVuY2UgPSBpc1JlZmVyZW5jZTtcbmV4cG9ydHMuaXRlcmF0ZU9ic2VydmVyc1NhZmVseSA9IGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHk7XG5leHBvcnRzLm1ha2VSZWZlcmVuY2UgPSBtYWtlUmVmZXJlbmNlO1xuZXhwb3J0cy5tYWtlVW5pcXVlSWQgPSBtYWtlVW5pcXVlSWQ7XG5leHBvcnRzLm1heWJlRGVlcEZyZWV6ZSA9IG1heWJlRGVlcEZyZWV6ZTtcbmV4cG9ydHMubWVyZ2VEZWVwID0gbWVyZ2VEZWVwO1xuZXhwb3J0cy5tZXJnZURlZXBBcnJheSA9IG1lcmdlRGVlcEFycmF5O1xuZXhwb3J0cy5vZmZzZXRMaW1pdFBhZ2luYXRpb24gPSBvZmZzZXRMaW1pdFBhZ2luYXRpb247XG5leHBvcnRzLnJlbGF5U3R5bGVQYWdpbmF0aW9uID0gcmVsYXlTdHlsZVBhZ2luYXRpb247XG5leHBvcnRzLnJlbW92ZUFyZ3VtZW50c0Zyb21Eb2N1bWVudCA9IHJlbW92ZUFyZ3VtZW50c0Zyb21Eb2N1bWVudDtcbmV4cG9ydHMucmVtb3ZlQ2xpZW50U2V0c0Zyb21Eb2N1bWVudCA9IHJlbW92ZUNsaWVudFNldHNGcm9tRG9jdW1lbnQ7XG5leHBvcnRzLnJlbW92ZUNvbm5lY3Rpb25EaXJlY3RpdmVGcm9tRG9jdW1lbnQgPSByZW1vdmVDb25uZWN0aW9uRGlyZWN0aXZlRnJvbURvY3VtZW50O1xuZXhwb3J0cy5yZW1vdmVEaXJlY3RpdmVzRnJvbURvY3VtZW50ID0gcmVtb3ZlRGlyZWN0aXZlc0Zyb21Eb2N1bWVudDtcbmV4cG9ydHMucmVtb3ZlRnJhZ21lbnRTcHJlYWRGcm9tRG9jdW1lbnQgPSByZW1vdmVGcmFnbWVudFNwcmVhZEZyb21Eb2N1bWVudDtcbmV4cG9ydHMucmVzdWx0S2V5TmFtZUZyb21GaWVsZCA9IHJlc3VsdEtleU5hbWVGcm9tRmllbGQ7XG5leHBvcnRzLnNob3VsZEluY2x1ZGUgPSBzaG91bGRJbmNsdWRlO1xuZXhwb3J0cy5zdG9yZUtleU5hbWVGcm9tRmllbGQgPSBzdG9yZUtleU5hbWVGcm9tRmllbGQ7XG5leHBvcnRzLnN0cmluZ2lmeUZvckRpc3BsYXkgPSBzdHJpbmdpZnlGb3JEaXNwbGF5O1xuZXhwb3J0cy52YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24gPSB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsaXRpZXMuY2pzLm1hcFxuIiwiZXhwb3J0cy5PYnNlcnZhYmxlID0gcmVxdWlyZShcInplbi1vYnNlcnZhYmxlL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZXF1ZXN0UmVzZXQgZnJvbSAnLi4vY29tcG9uZW50cy9SZXF1ZXN0UmVzZXQnO1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4uL2NvbXBvbmVudHMvU2lnbkluJztcclxuaW1wb3J0IFNpZ25VcCBmcm9tICcuLi9jb21wb25lbnRzL1NpZ25VcCc7XHJcblxyXG5jb25zdCBHcmlkU3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIGdyaWQtZ2FwOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluUGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRTdHlsZXM+XHJcbiAgICAgIDxTaWduSW4gLz5cclxuICAgICAgPFNpZ25VcCAvPlxyXG4gICAgICA8UmVxdWVzdFJlc2V0IC8+XHJcbiAgICA8L0dyaWRTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd3J5L2NvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdyeS9lcXVhbGl0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd3J5L3RyaWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvcHRpbWlzbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzeW1ib2wtb2JzZXJ2YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0c2xpYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6ZW4tb2JzZXJ2YWJsZS9pbmRleC5qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9