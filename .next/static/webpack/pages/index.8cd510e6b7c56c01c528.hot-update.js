webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CheckoutForm.jsx":
/*!*************************************!*\
  !*** ./components/CheckoutForm.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _Break__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Break */ \"./components/Break.jsx\");\n/* harmony import */ var _BillingDetailsFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BillingDetailsFields */ \"./components/BillingDetailsFields.jsx\");\n/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SubmitButton */ \"./components/SubmitButton.jsx\");\n/* harmony import */ var _CheckoutError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CheckoutError */ \"./components/CheckoutError.jsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/christianorta/MyApps/arepa-store/components/CheckoutForm.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  height: 40px;\\n  display: flex;\\n  align-items: center;\\n  background-color: #fff;\\n\\n  & .StripeElement {\\n    width: 100%;\\n    padding: 15px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar CardElementContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c = CardElementContainer;\n\nvar CheckoutForm = function CheckoutForm(_ref) {\n  _s();\n\n  var onSuccessfulCheckout = _ref.onSuccessfulCheckout;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isProcessing = _useState[0],\n      setProcessingTo = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      checkoutError = _useState2[0],\n      setCheckoutError = _useState2[1];\n\n  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useStripe\"])();\n  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useElements\"])();\n\n  var handleCardDetailsChange = function handleCardDetailsChange(ev) {\n    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ev) {\n      var billingDetails, cardElement, _yield$axios$post, ClientSecret, paymentMethodReq, _yield$stripe$confirm, error;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              ev.preventDefault();\n              billingDetails = {\n                name: ev.target.name.value,\n                email: ev.target.email.value,\n                address: {\n                  city: ev.target.city.value,\n                  line1: ev.target.address.value,\n                  state: ev.target.state.value,\n                  postal_code: ev.target.zip.value\n                }\n              };\n              setProcessingTo(true);\n              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"CardElement\"]);\n              _context.prev = 4;\n              _context.next = 7;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"/api/paymentintent\", {\n                amount: 250\n              });\n\n            case 7:\n              _yield$axios$post = _context.sent;\n              ClientSecret = _yield$axios$post.data;\n              _context.next = 11;\n              return stripe.createPaymentMethod({\n                type: 'card',\n                card: cardElement,\n                billing_details: billingDetails\n              });\n\n            case 11:\n              paymentMethodReq = _context.sent;\n\n              if (!paymentMethodReq.error) {\n                _context.next = 16;\n                break;\n              }\n\n              setCheckoutError(paymentMethodReq.error.message);\n              setProcessingTo(false);\n              return _context.abrupt(\"return\");\n\n            case 16:\n              _context.next = 18;\n              return stripe.confirmCardPayment(ClientSecret, {\n                payment_method: paymentMethodReq.paymentMethod.id\n              });\n\n            case 18:\n              _yield$stripe$confirm = _context.sent;\n              error = _yield$stripe$confirm.error;\n\n              if (!error) {\n                _context.next = 24;\n                break;\n              }\n\n              setCheckoutError(error.message);\n              setProcessingTo(false);\n              return _context.abrupt(\"return\");\n\n            case 24:\n              onSuccessfulCheckout();\n              _context.next = 30;\n              break;\n\n            case 27:\n              _context.prev = 27;\n              _context.t0 = _context[\"catch\"](4);\n              setCheckoutError(_context.t0.message);\n\n            case 30:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[4, 27]]);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  app.listen(3000, function () {\n    console.log('Running on port 3000');\n  });\n  var iframeStyles = {\n    base: {\n      fontSize: \"16px\",\n      color: \"#2e3631\",\n      \"::placeholder\": {\n        color: \"#cae3d3\"\n      }\n    },\n    invalid: {\n      iconColor: \"#f53390\",\n      color: \"#f53390\"\n    },\n    complete: {\n      iconColor: \"#2e3631\"\n    }\n  };\n  var CardElementOptions = {\n    iconStyle: \"solid\",\n    style: iframeStyles,\n    hidePostalCode: true\n  };\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 3\n    }\n  }, __jsx(_Break__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 5\n    }\n  }, __jsx(_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }), __jsx(CardElementContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }\n  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"CardElement\"], {\n    options: CardElementOptions,\n    onChange: handleCardDetailsChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }))), checkoutError && __jsx(_CheckoutError__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 27\n    }\n  }, checkoutError), __jsx(_Break__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }, __jsx(_SubmitButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    disabled: isProcessing || !stripe,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 11\n    }\n  }, isProcessing ? \"Processing...\" : \"Place Order\")));\n};\n\n_s(CheckoutForm, \"2xw3RUxwBWLOQjltidPO4c7nnLg=\", false, function () {\n  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useStripe\"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useElements\"]];\n});\n\n_c2 = CheckoutForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckoutForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CardElementContainer\");\n$RefreshReg$(_c2, \"CheckoutForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanN4P2M4NzAiXSwibmFtZXMiOlsiQ2FyZEVsZW1lbnRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJDaGVja291dEZvcm0iLCJvblN1Y2Nlc3NmdWxDaGVja291dCIsInVzZVN0YXRlIiwiaXNQcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZ1RvIiwiY2hlY2tvdXRFcnJvciIsInNldENoZWNrb3V0RXJyb3IiLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwiaGFuZGxlQ2FyZERldGFpbHNDaGFuZ2UiLCJldiIsImVycm9yIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYmlsbGluZ0RldGFpbHMiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJlbWFpbCIsImFkZHJlc3MiLCJjaXR5IiwibGluZTEiLCJzdGF0ZSIsInBvc3RhbF9jb2RlIiwiemlwIiwiY2FyZEVsZW1lbnQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJheGlvcyIsInBvc3QiLCJhbW91bnQiLCJDbGllbnRTZWNyZXQiLCJkYXRhIiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiYmlsbGluZ19kZXRhaWxzIiwicGF5bWVudE1ldGhvZFJlcSIsImNvbmZpcm1DYXJkUGF5bWVudCIsInBheW1lbnRfbWV0aG9kIiwicGF5bWVudE1ldGhvZCIsImlkIiwiYXBwIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyIsImlmcmFtZVN0eWxlcyIsImJhc2UiLCJmb250U2l6ZSIsImNvbG9yIiwiaW52YWxpZCIsImljb25Db2xvciIsImNvbXBsZXRlIiwiQ2FyZEVsZW1lbnRPcHRpb25zIiwiaWNvblN0eWxlIiwic3R5bGUiLCJoaWRlUG9zdGFsQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZKLENBREYsRUFVT04sYUFBYSxJQUFJLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQkEsYUFBaEIsQ0FWeEIsRUFXTSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQWMsWUFBUSxFQUFFRixZQUFZLElBQUksQ0FBQ0ksTUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixZQUFZLEdBQUcsZUFBSCxnQkFEZixDQURGLENBWE4sQ0FERjtBQW1CQyxDQTVHRDs7R0FBTUgsWTtVQUlXUSxpRSxFQUNFRSxtRTs7O01BTGJWLFk7QUE4R1NBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q2FyZEVsZW1lbnQsIHVzZVN0cmlwZSwgdXNlRWxlbWVudHN9IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5pbXBvcnQgQnJlYWsgZnJvbSBcIi4vQnJlYWtcIjtcbmltcG9ydCBCaWxsaW5nRGV0YWlsc0ZpZWxkcyBmcm9tIFwiLi9CaWxsaW5nRGV0YWlsc0ZpZWxkc1wiO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi9TdWJtaXRCdXR0b25cIjtcbmltcG9ydCBDaGVja291dEVycm9yIGZyb20gXCIuL0NoZWNrb3V0RXJyb3JcIjtcblxuXG5jb25zdCBDYXJkRWxlbWVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAmIC5TdHJpcGVFbGVtZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5gO1xuXG5jb25zdCBDaGVja291dEZvcm0gPSAoeyBvblN1Y2Nlc3NmdWxDaGVja291dCB9KSA9PiB7XG4gIGNvbnN0IFtpc1Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmdUb10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjaGVja291dEVycm9yLCBzZXRDaGVja291dEVycm9yXSA9IHVzZVN0YXRlKCk7XG4gIFxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xuXG4gIGNvbnN0IGhhbmRsZUNhcmREZXRhaWxzQ2hhbmdlID0gZXYgPT4ge1xuICAgIGV2LmVycm9yID8gc2V0Q2hlY2tvdXRFcnJvcihldi5lcnJvci5tZXNzYWdlKSA6IHNldENoZWNrb3V0RXJyb3IoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBldiA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGJpbGxpbmdEZXRhaWxzID0ge1xuICAgICAgbmFtZTogZXYudGFyZ2V0Lm5hbWUudmFsdWUsXG4gICAgICBlbWFpbDogZXYudGFyZ2V0LmVtYWlsLnZhbHVlLFxuICAgICAgYWRkcmVzczoge1xuICAgICAgICBjaXR5OiBldi50YXJnZXQuY2l0eS52YWx1ZSxcbiAgICAgICAgbGluZTE6IGV2LnRhcmdldC5hZGRyZXNzLnZhbHVlLFxuICAgICAgICBzdGF0ZTogZXYudGFyZ2V0LnN0YXRlLnZhbHVlLFxuICAgICAgICBwb3N0YWxfY29kZTogZXYudGFyZ2V0LnppcC52YWx1ZVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRQcm9jZXNzaW5nVG8odHJ1ZSk7XG4gXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KTtcblxuICAgIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhOiBDbGllbnRTZWNyZXQgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3BheW1lbnRpbnRlbnRcIiwge1xuICAgICAgYW1vdW50OiAyNTBcbiAgICB9KTtcbiAgXG4gICAgY29uc3QgcGF5bWVudE1ldGhvZFJlcSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcbiAgICAgIHR5cGU6ICdjYXJkJyxcbiAgICAgIGNhcmQ6IGNhcmRFbGVtZW50LFxuICAgICAgYmlsbGluZ19kZXRhaWxzOiBiaWxsaW5nRGV0YWlsc1xuICAgIH0pO1xuXG4gICAgaWYgKHBheW1lbnRNZXRob2RSZXEuZXJyb3IpIHtcbiAgICAgIHNldENoZWNrb3V0RXJyb3IocGF5bWVudE1ldGhvZFJlcS5lcnJvci5tZXNzYWdlKTtcbiAgICAgIHNldFByb2Nlc3NpbmdUbyhmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qge2Vycm9yfSA9IGF3YWl0IHN0cmlwZS5jb25maXJtQ2FyZFBheW1lbnQoQ2xpZW50U2VjcmV0LCB7XG4gICAgICBwYXltZW50X21ldGhvZDogcGF5bWVudE1ldGhvZFJlcS5wYXltZW50TWV0aG9kLmlkXG4gICAgfSk7XG5cbiAgICBpZihlcnJvcil7XG4gICAgICBzZXRDaGVja291dEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgc2V0UHJvY2Vzc2luZ1RvKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvblN1Y2Nlc3NmdWxDaGVja291dCgpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBzZXRDaGVja291dEVycm9yKGVyci5tZXNzYWdlKTtcbiAgfVxufTtcblxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdSdW5uaW5nIG9uIHBvcnQgMzAwMCcpO1xufSk7XG5cbmNvbnN0IGlmcmFtZVN0eWxlcyA9IHtcbiAgYmFzZToge1xuICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICBjb2xvcjogXCIjMmUzNjMxXCIsIFxuICAgIFwiOjpwbGFjZWhvbGRlclwiOiB7XG4gICAgY29sb3I6IFwiI2NhZTNkM1wiXG4gICAgfVxuICB9LFxuICBpbnZhbGlkOiB7XG4gICAgaWNvbkNvbG9yOiBcIiNmNTMzOTBcIixcbiAgICBjb2xvcjogXCIjZjUzMzkwXCJcbiAgfSxcbiAgY29tcGxldGU6IHtcbiAgICBpY29uQ29sb3I6IFwiIzJlMzYzMVwiLFxuICB9XG59O1xuICBcbmNvbnN0IENhcmRFbGVtZW50T3B0aW9ucyA9IHtcbiAgaWNvblN0eWxlOiBcInNvbGlkXCIsICBcbiAgc3R5bGU6IGlmcmFtZVN0eWxlcyxcbiAgaGlkZVBvc3RhbENvZGU6IHRydWVcbn07XG4gIFxucmV0dXJuIChcbiAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgPEJyZWFrPlxuICAgICAgPEJpbGxpbmdEZXRhaWxzRmllbGRzIC8+XG4gICAgICAgIDxDYXJkRWxlbWVudENvbnRhaW5lcj5cbiAgICAgICAgICA8Q2FyZEVsZW1lbnQgXG4gICAgICAgICAgb3B0aW9ucz17Q2FyZEVsZW1lbnRPcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDYXJkRGV0YWlsc0NoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NhcmRFbGVtZW50Q29udGFpbmVyPlxuICAgICAgICA8L0JyZWFrPlxuICAgICAgICB7Y2hlY2tvdXRFcnJvciAmJiA8Q2hlY2tvdXRFcnJvcj57Y2hlY2tvdXRFcnJvcn08L0NoZWNrb3V0RXJyb3I+fVxuICAgICAgICA8QnJlYWs+XG4gICAgICAgICAgPFN1Ym1pdEJ1dHRvbiBkaXNhYmxlZD17aXNQcm9jZXNzaW5nIHx8ICFzdHJpcGV9PlxuICAgICAgICAgICAge2lzUHJvY2Vzc2luZyA/IFwiUHJvY2Vzc2luZy4uLlwiIDogYFBsYWNlIE9yZGVyYH1cbiAgICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cbiAgICAgICAgPC9CcmVhaz5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xufTtcbiAgXG5leHBvcnQgZGVmYXVsdCBDaGVja291dEZvcm07XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CheckoutForm.jsx\n");

/***/ })

})