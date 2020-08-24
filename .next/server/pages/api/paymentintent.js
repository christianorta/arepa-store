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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/paymentintent.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/paymentintent.js":
/*!************************************!*\
  !*** ./pages/api/paymentintent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0___default.a(\"sk_test_51HGDkmHBrl2UaEgapNVQtZvVU1BTJGs8MA9jKZ8w8Lh0LHs3S1Hs3Sz6heF6AWtiVZESo13DliaVYiXe0k2oRxZm00JfFHS1nq\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === \"POST\") {\n    try {\n      const {\n        id,\n        amount\n      } = req.body;\n      const paymentIntent = await stripe.paymentIntents.create({\n        amount,\n        currency: \"usd\",\n        description: \"10 pack Arepa Lover Stickers\",\n        metadata: {\n          integration_check: 'accept_a_payment'\n        }\n      });\n      res.status(200).send(paymentIntent.client_secret);\n    } catch (err) {\n      res.status(500).json({\n        statusCode: 500,\n        message: err.message\n      });\n    }\n  } else {\n    res.setHeader(\"Allow\", \"POST\");\n    res.status(405).end(\"Method Not Allowed\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcGF5bWVudGludGVudC5qcz9hMGI3Il0sIm5hbWVzIjpbInN0cmlwZSIsIlN0cmlwZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImlkIiwiYW1vdW50IiwiYm9keSIsInBheW1lbnRJbnRlbnQiLCJwYXltZW50SW50ZW50cyIsImNyZWF0ZSIsImN1cnJlbmN5IiwiZGVzY3JpcHRpb24iLCJtZXRhZGF0YSIsImludGVncmF0aW9uX2NoZWNrIiwic3RhdHVzIiwic2VuZCIsImNsaWVudF9zZWNyZXQiLCJlcnIiLCJqc29uIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLElBQUlDLDZDQUFKLENBQVcsNkdBQVgsQ0FBZjtBQUVlLHNFQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDdkIsUUFBSTtBQUNBLFlBQU07QUFBRUMsVUFBRjtBQUFNQztBQUFOLFVBQWlCSixHQUFHLENBQUNLLElBQTNCO0FBRUEsWUFBTUMsYUFBYSxHQUFHLE1BQU1SLE1BQU0sQ0FBQ1MsY0FBUCxDQUFzQkMsTUFBdEIsQ0FBNkI7QUFDckRKLGNBRHFEO0FBRXJESyxnQkFBUSxFQUFFLEtBRjJDO0FBR3JEQyxtQkFBVyxFQUFFLDhCQUh3QztBQUlyREMsZ0JBQVEsRUFBRTtBQUFDQywyQkFBaUIsRUFBRTtBQUFwQjtBQUoyQyxPQUE3QixDQUE1QjtBQU1BWCxTQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQlIsYUFBYSxDQUFDUyxhQUFuQztBQUNILEtBVkQsQ0FXQSxPQUFPQyxHQUFQLEVBQVk7QUFDUmYsU0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkksSUFBaEIsQ0FBcUI7QUFBRUMsa0JBQVUsRUFBRSxHQUFkO0FBQW1CQyxlQUFPLEVBQUVILEdBQUcsQ0FBQ0c7QUFBaEMsT0FBckI7QUFDSDtBQUNKLEdBZkQsTUFnQks7QUFDRGxCLE9BQUcsQ0FBQ21CLFNBQUosQ0FBYyxPQUFkLEVBQXVCLE1BQXZCO0FBQ0FuQixPQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCUSxHQUFoQixDQUFvQixvQkFBcEI7QUFDSDtBQUNKLENBckJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3BheW1lbnRpbnRlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcblxuY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShcInNrX3Rlc3RfNTFIR0RrbUhCcmwyVWFFZ2FwTlZRdFp2VlUxQlRKR3M4TUE5aktaOHc4TGgwTEhzM1MxSHMzU3o2aGVGNkFXdGlWWkVTbzEzRGxpYVZZaVhlMGsyb1J4Wm0wMEpmRkhTMW5xXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIGFtb3VudCB9ID0gcmVxLmJvZHk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBheW1lbnRJbnRlbnQgPSBhd2FpdCBzdHJpcGUucGF5bWVudEludGVudHMuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IFwidXNkXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiMTAgcGFjayBBcmVwYSBMb3ZlciBTdGlja2Vyc1wiLFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB7aW50ZWdyYXRpb25fY2hlY2s6ICdhY2NlcHRfYV9wYXltZW50J30sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHBheW1lbnRJbnRlbnQuY2xpZW50X3NlY3JldCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdGF0dXNDb2RlOiA1MDAsIG1lc3NhZ2U6IGVyci5tZXNzYWdlfSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIGVsc2Uge1xuICAgICAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgXCJQT1NUXCIpO1xuICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIpO1xuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/paymentintent.js\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stripe\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpcGVcIj9mNWFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0cmlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///stripe\n");

/***/ })

/******/ });