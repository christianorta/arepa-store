webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CheckoutForm.jsx":
/*!*************************************!*\
  !*** ./components/CheckoutForm.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _Break__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Break */ \"./components/Break.jsx\");\n/* harmony import */ var _BillingDetailsFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BillingDetailsFields */ \"./components/BillingDetailsFields.jsx\");\n/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SubmitButton */ \"./components/SubmitButton.jsx\");\n/* harmony import */ var _CheckoutError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CheckoutError */ \"./components/CheckoutError.jsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/christianorta/MyApps/arepa-store/components/CheckoutForm.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  height: 40px;\\n  display: flex;\\n  align-items: center;\\n  background-color: #fff;\\n\\n  & .StripeElement {\\n    width: 100%;\\n    padding: 15px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar CardElementContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c = CardElementContainer;\n\nvar CheckoutForm = function CheckoutForm(_ref) {\n  _s();\n\n  var onSuccessfulCheckout = _ref.onSuccessfulCheckout;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isProcessing = _useState[0],\n      setProcessingTo = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      checkoutError = _useState2[0],\n      setCheckoutError = _useState2[1];\n\n  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useStripe\"])();\n  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useElements\"])();\n\n  var handleCardDetailsChange = function handleCardDetailsChange(ev) {\n    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ev) {\n      var billingDetails, cardElement, _yield$axios$post, ClientSecret, paymentMethodReq, _yield$stripe$confirm, error;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              ev.preventDefault();\n              billingDetails = {\n                name: ev.target.name.value,\n                email: ev.target.email.value,\n                address: {\n                  city: ev.target.city.value,\n                  line1: ev.target.address.value,\n                  state: ev.target.state.value,\n                  postal_code: ev.target.zip.value\n                }\n              };\n              setProcessingTo(true);\n              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"CardElement\"]);\n              _context.prev = 4;\n              _context.next = 7;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"/api/paymentintent\", {\n                amount: 250\n              });\n\n            case 7:\n              _yield$axios$post = _context.sent;\n              ClientSecret = _yield$axios$post.data;\n              _context.next = 11;\n              return stripe.createPaymentMethod({\n                type: 'card',\n                card: cardElement,\n                billing_details: billingDetails\n              });\n\n            case 11:\n              paymentMethodReq = _context.sent;\n\n              if (!paymentMethodReq.error) {\n                _context.next = 16;\n                break;\n              }\n\n              setCheckoutError(paymentMethodReq.error.message);\n              setProcessingTo(false);\n              return _context.abrupt(\"return\");\n\n            case 16:\n              _context.next = 18;\n              return stripe.confirmCardPayment(ClientSecret, {\n                payment_method: paymentMethodReq.paymentMethod.id\n              });\n\n            case 18:\n              _yield$stripe$confirm = _context.sent;\n              error = _yield$stripe$confirm.error;\n\n              if (!error) {\n                _context.next = 24;\n                break;\n              }\n\n              setCheckoutError(error.message);\n              setProcessingTo(false);\n              return _context.abrupt(\"return\");\n\n            case 24:\n              onSuccessfulCheckout();\n              _context.next = 30;\n              break;\n\n            case 27:\n              _context.prev = 27;\n              _context.t0 = _context[\"catch\"](4);\n              setCheckoutError(_context.t0.message);\n\n            case 30:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[4, 27]]);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var iframeStyles = {\n    base: {\n      fontSize: \"16px\",\n      color: \"#2e3631\",\n      \"::placeholder\": {\n        color: \"#cae3d3\"\n      }\n    },\n    invalid: {\n      iconColor: \"#f53390\",\n      color: \"#f53390\"\n    },\n    complete: {\n      iconColor: \"#2e3631\"\n    }\n  };\n  var CardElementOptions = {\n    iconStyle: \"solid\",\n    style: iframeStyles,\n    hidePostalCode: true\n  };\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 3\n    }\n  }, __jsx(_Break__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 5\n    }\n  }, __jsx(_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }), __jsx(CardElementContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"CardElement\"], {\n    options: CardElementOptions,\n    onChange: handleCardDetailsChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  }))), checkoutError && __jsx(_CheckoutError__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 27\n    }\n  }, checkoutError), __jsx(_Break__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 9\n    }\n  }, __jsx(_SubmitButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    disabled: isProcessing || !stripe,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 11\n    }\n  }, isProcessing ? \"Processing...\" : \"Place Order\")));\n};\n\n_s(CheckoutForm, \"2xw3RUxwBWLOQjltidPO4c7nnLg=\", false, function () {\n  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useStripe\"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useElements\"]];\n});\n\n_c2 = CheckoutForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckoutForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CardElementContainer\");\n$RefreshReg$(_c2, \"CheckoutForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanN4P2M4NzAiXSwibmFtZXMiOlsiQ2FyZEVsZW1lbnRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJDaGVja291dEZvcm0iLCJvblN1Y2Nlc3NmdWxDaGVja291dCIsInVzZVN0YXRlIiwiaXNQcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZ1RvIiwiY2hlY2tvdXRFcnJvciIsInNldENoZWNrb3V0RXJyb3IiLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwiaGFuZGxlQ2FyZERldGFpbHNDaGFuZ2UiLCJldiIsImVycm9yIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYmlsbGluZ0RldGFpbHMiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJlbWFpbCIsImFkZHJlc3MiLCJjaXR5IiwibGluZTEiLCJzdGF0ZSIsInBvc3RhbF9jb2RlIiwiemlwIiwiY2FyZEVsZW1lbnQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJheGlvcyIsInBvc3QiLCJhbW91bnQiLCJDbGllbnRTZWNyZXQiLCJkYXRhIiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiYmlsbGluZ19kZXRhaWxzIiwicGF5bWVudE1ldGhvZFJlcSIsImNvbmZpcm1DYXJkUGF5bWVudCIsInBheW1lbnRfbWV0aG9kIiwicGF5bWVudE1ldGhvZCIsImlkIiwiaWZyYW1lU3R5bGVzIiwiYmFzZSIsImZvbnRTaXplIiwiY29sb3IiLCJpbnZhbGlkIiwiaWNvbkNvbG9yIiwiY29tcGxldGUiLCJDYXJkRWxlbWVudE9wdGlvbnMiLCJpY29uU3R5bGUiLCJzdHlsZSIsImhpZGVQb3N0YWxDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7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QVZ4QixFQVdNLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBYyxZQUFRLEVBQUVGLFlBQVksSUFBSSxDQUFDSSxNQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLFlBQVksR0FBRyxlQUFILGdCQURmLENBREYsQ0FYTixDQURGO0FBbUJDLENBM0dEOztHQUFNSCxZO1VBSVdRLGlFLEVBQ0VFLG1FOzs7TUFMYlYsWTtBQTZHU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoZWNrb3V0Rm9ybS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50c30gZnJvbSAnQHN0cmlwZS9yZWFjdC1zdHJpcGUtanMnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmltcG9ydCBCcmVhayBmcm9tIFwiLi9CcmVha1wiO1xuaW1wb3J0IEJpbGxpbmdEZXRhaWxzRmllbGRzIGZyb20gXCIuL0JpbGxpbmdEZXRhaWxzRmllbGRzXCI7XG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCIuL1N1Ym1pdEJ1dHRvblwiO1xuaW1wb3J0IENoZWNrb3V0RXJyb3IgZnJvbSBcIi4vQ2hlY2tvdXRFcnJvclwiO1xuXG5cbmNvbnN0IENhcmRFbGVtZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICYgLlN0cmlwZUVsZW1lbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbmA7XG5cbmNvbnN0IENoZWNrb3V0Rm9ybSA9ICh7IG9uU3VjY2Vzc2Z1bENoZWNrb3V0IH0pID0+IHtcbiAgY29uc3QgW2lzUHJvY2Vzc2luZywgc2V0UHJvY2Vzc2luZ1RvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NoZWNrb3V0RXJyb3IsIHNldENoZWNrb3V0RXJyb3JdID0gdXNlU3RhdGUoKTtcbiAgXG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG5cbiAgY29uc3QgaGFuZGxlQ2FyZERldGFpbHNDaGFuZ2UgPSBldiA9PiB7XG4gICAgZXYuZXJyb3IgPyBzZXRDaGVja291dEVycm9yKGV2LmVycm9yLm1lc3NhZ2UpIDogc2V0Q2hlY2tvdXRFcnJvcigpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYmlsbGluZ0RldGFpbHMgPSB7XG4gICAgICBuYW1lOiBldi50YXJnZXQubmFtZS52YWx1ZSxcbiAgICAgIGVtYWlsOiBldi50YXJnZXQuZW1haWwudmFsdWUsXG4gICAgICBhZGRyZXNzOiB7XG4gICAgICAgIGNpdHk6IGV2LnRhcmdldC5jaXR5LnZhbHVlLFxuICAgICAgICBsaW5lMTogZXYudGFyZ2V0LmFkZHJlc3MudmFsdWUsXG4gICAgICAgIHN0YXRlOiBldi50YXJnZXQuc3RhdGUudmFsdWUsXG4gICAgICAgIHBvc3RhbF9jb2RlOiBldi50YXJnZXQuemlwLnZhbHVlXG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldFByb2Nlc3NpbmdUbyh0cnVlKTtcbiBcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpO1xuXG4gICAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGE6IENsaWVudFNlY3JldCB9ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvcGF5bWVudGludGVudFwiLCB7XG4gICAgICBhbW91bnQ6IDI1MFxuICAgIH0pO1xuICBcbiAgICBjb25zdCBwYXltZW50TWV0aG9kUmVxID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xuICAgICAgdHlwZTogJ2NhcmQnLFxuICAgICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgICBiaWxsaW5nX2RldGFpbHM6IGJpbGxpbmdEZXRhaWxzXG4gICAgfSk7XG5cbiAgICBpZiAocGF5bWVudE1ldGhvZFJlcS5lcnJvcikge1xuICAgICAgc2V0Q2hlY2tvdXRFcnJvcihwYXltZW50TWV0aG9kUmVxLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgc2V0UHJvY2Vzc2luZ1RvKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7ZXJyb3J9ID0gYXdhaXQgc3RyaXBlLmNvbmZpcm1DYXJkUGF5bWVudChDbGllbnRTZWNyZXQsIHtcbiAgICAgIHBheW1lbnRfbWV0aG9kOiBwYXltZW50TWV0aG9kUmVxLnBheW1lbnRNZXRob2QuaWRcbiAgICB9KTtcbiAgICBcbi8vICAgIGNvbnN0IGNvbmZpcm1DYXJkUGF5bWVudCA9IHN0cmlwZS5jb25maXJtQ2FyZFBheW1lbnQoKTtcbi8vICAgIGNvbnNvbGUubG9nKGNvbmZpcm1DYXJkUGF5bWVudCk7XG5cbiAgICBpZihlcnJvcil7XG4gICAgICBzZXRDaGVja291dEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgc2V0UHJvY2Vzc2luZ1RvKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvblN1Y2Nlc3NmdWxDaGVja291dCgpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBzZXRDaGVja291dEVycm9yKGVyci5tZXNzYWdlKTtcbiAgfVxufTtcblxuY29uc3QgaWZyYW1lU3R5bGVzID0ge1xuICBiYXNlOiB7XG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgIGNvbG9yOiBcIiMyZTM2MzFcIiwgXG4gICAgXCI6OnBsYWNlaG9sZGVyXCI6IHtcbiAgICBjb2xvcjogXCIjY2FlM2QzXCJcbiAgICB9XG4gIH0sXG4gIGludmFsaWQ6IHtcbiAgICBpY29uQ29sb3I6IFwiI2Y1MzM5MFwiLFxuICAgIGNvbG9yOiBcIiNmNTMzOTBcIlxuICB9LFxuICBjb21wbGV0ZToge1xuICAgIGljb25Db2xvcjogXCIjMmUzNjMxXCIsXG4gIH1cbn07XG4gIFxuY29uc3QgQ2FyZEVsZW1lbnRPcHRpb25zID0ge1xuICBpY29uU3R5bGU6IFwic29saWRcIiwgIFxuICBzdHlsZTogaWZyYW1lU3R5bGVzLFxuICBoaWRlUG9zdGFsQ29kZTogdHJ1ZVxufTtcbiAgXG5yZXR1cm4gKFxuICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICA8QnJlYWs+XG4gICAgICA8QmlsbGluZ0RldGFpbHNGaWVsZHMgLz5cbiAgICAgICAgPENhcmRFbGVtZW50Q29udGFpbmVyPlxuICAgICAgICAgIDxDYXJkRWxlbWVudCBcbiAgICAgICAgICBvcHRpb25zPXtDYXJkRWxlbWVudE9wdGlvbnN9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhcmREZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZEVsZW1lbnRDb250YWluZXI+XG4gICAgICAgIDwvQnJlYWs+XG4gICAgICAgIHtjaGVja291dEVycm9yICYmIDxDaGVja291dEVycm9yPntjaGVja291dEVycm9yfTwvQ2hlY2tvdXRFcnJvcj59XG4gICAgICAgIDxCcmVhaz5cbiAgICAgICAgICA8U3VibWl0QnV0dG9uIGRpc2FibGVkPXtpc1Byb2Nlc3NpbmcgfHwgIXN0cmlwZX0+XG4gICAgICAgICAgICB7aXNQcm9jZXNzaW5nID8gXCJQcm9jZXNzaW5nLi4uXCIgOiBgUGxhY2UgT3JkZXJgfVxuICAgICAgICAgIDwvU3VibWl0QnV0dG9uPlxuICAgICAgICA8L0JyZWFrPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG59O1xuICBcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Rm9ybTtcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CheckoutForm.jsx\n");

/***/ })

})