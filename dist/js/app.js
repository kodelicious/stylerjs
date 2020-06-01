/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/StylerControl.js":
/*!*********************************!*\
  !*** ./src/js/StylerControl.js ***!
  \*********************************/
/*! exports provided: StylerControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylerControl", function() { return StylerControl; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StylerControl = /*#__PURE__*/function () {
  /**
   * Construct the class
   * 
   * @param
   */
  function StylerControl() {
    _classCallCheck(this, StylerControl);

    this.template = this.getTemplate();
  }
  /**
   * Set element
   * 
   * @param  HTMLElement element
   * @return void
   */


  _createClass(StylerControl, [{
    key: "setElement",
    value: function setElement(element) {
      this.element = element;
    }
    /**
     * Set panel
     * 
     * @param  HTMLDivElement panel
     * @return void
     */

  }, {
    key: "setPanel",
    value: function setPanel(panel) {
      this.panel = panel;
    }
    /**
     * Get the template for this form control
     * 
     * @return string
     */

  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return '';
    }
    /**
     * Set events on elements in the template
     * 
     * @return void
     */

  }, {
    key: "setEvents",
    value: function setEvents() {}
    /**
     * Set events on elements in the template
     * 
     * @return void
     */

  }, {
    key: "build",
    value: function build() {}
  }]);

  return StylerControl;
}();

/***/ }),

/***/ "./src/js/StylerInputText.js":
/*!***********************************!*\
  !*** ./src/js/StylerInputText.js ***!
  \***********************************/
/*! exports provided: StylerInputText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylerInputText", function() { return StylerInputText; });
/* harmony import */ var _StylerControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylerControl */ "./src/js/StylerControl.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var StylerInputText = /*#__PURE__*/function (_StylerControl) {
  _inherits(StylerInputText, _StylerControl);

  var _super = _createSuper(StylerInputText);

  /**
   * Construct the class
   * 
   * @param
   */
  function StylerInputText() {
    _classCallCheck(this, StylerInputText);

    return _super.call(this);
  }
  /**
   * Get the template for this form control
   * 
   * @return string
   */


  _createClass(StylerInputText, [{
    key: "getTemplate",
    value: function getTemplate() {
      return "\n        <div><input type=\"text\" name=\"color\" value=\"\"></div>\n        ";
    }
    /**
     * Set events on elements in the template
     * 
     * @return void
     */

  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;

      var input = this.panel.querySelector('input');
      input.addEventListener('blur', function () {
        _this.element.style[input.getAttribute('name')] = input.value;
      });
    }
    /**
     * Set events on elements in the template
     * 
     * @return void
     */

  }, {
    key: "build",
    value: function build() {
      this.panel.innerHTML = this.template;
      this.setEvents();
    }
  }]);

  return StylerInputText;
}(_StylerControl__WEBPACK_IMPORTED_MODULE_0__["StylerControl"]);

/***/ }),

/***/ "./src/js/StylerJS.js":
/*!****************************!*\
  !*** ./src/js/StylerJS.js ***!
  \****************************/
/*! exports provided: StylerJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylerJS", function() { return StylerJS; });
/* harmony import */ var _allowed_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allowed-properties */ "./src/js/allowed-properties.js");
/* harmony import */ var _StylerPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StylerPanel */ "./src/js/StylerPanel.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var StylerJS = /*#__PURE__*/function () {
  /**
   * Construct the class
   * 
   * @param StylerOptions options
   */
  function StylerJS(options) {
    _classCallCheck(this, StylerJS);

    this.options = options;
    this.panel = new _StylerPanel__WEBPACK_IMPORTED_MODULE_1__["StylerPanel"]();
  }
  /**
   * Get the elements based on the options selector
   * 
   * @return any
   */


  _createClass(StylerJS, [{
    key: "setElements",
    value: function setElements() {
      this.elements = document.querySelectorAll(this.options.selector);
    }
    /**
     * Start running
     * 
     * @return void
     */

  }, {
    key: "run",
    value: function run() {
      var _this = this;

      return document.addEventListener('DOMContentLoaded', function () {
        _this.setElements();

        _this.setEvents(); // this.gatherData()

      });
    }
    /**
     * Set several events
     * 
     * @return void
     */

  }, {
    key: "setEvents",
    value: function setEvents() {
      this.setDocumentEvents();
      this.setElementEvents();
    }
    /**
     * Set events on the document node
     * 
     * @return void
     */

  }, {
    key: "setDocumentEvents",
    value: function setDocumentEvents() {
      var _this2 = this;

      document.addEventListener('click', function () {
        _this2.deselectElement();

        _this2.panel.destroy();
      });
    }
    /**
     * Deselect all elements
     * 
     * @param  any elm
     * @return void
     */

  }, {
    key: "deselectElement",
    value: function deselectElement(elm) {
      var elements = document.querySelectorAll('.sjs-element-selected');

      if (elements.length) {
        var _iterator = _createForOfIteratorHelper(elements),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var element = _step.value;
            if (elm !== element) element.classList.remove('sjs-element-selected');
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    /**
     * Gather all information about selector elements and corresponding styles
     * 
     * @return void
     */

  }, {
    key: "setElementEvents",
    value: function setElementEvents() {
      var _this3 = this;

      var _iterator2 = _createForOfIteratorHelper(this.elements),
          _step2;

      try {
        var _loop = function _loop() {
          var element = _step2.value;
          element.addEventListener('mouseenter', function () {
            if (!element.classList.contains('sjs-element-selected')) {
              element.classList.add('sjs-element-select');
            }
          });
          element.addEventListener('mouseleave', function () {
            if (element.classList.contains('sjs-element-select')) {
              element.classList.remove('sjs-element-select');
            }
          });
          element.addEventListener('click', function (e) {
            // make sure document click is not fired
            e.stopPropagation(); // remove other outlines

            _this3.deselectElement(element); // then visually select the element


            element.classList.remove('sjs-element-select');
            element.classList.add('sjs-element-selected'); // finally destroy and build the style panel

            _this3.panel.destroy();

            _this3.panel.build(element);
          });
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Gather all information about selector elements and corresponding styles
     * 
     * @return void
     */

  }, {
    key: "gatherData",
    value: function gatherData() {
      var _iterator3 = _createForOfIteratorHelper(this.elements),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;
          var styles = window.getComputedStyle(element);
          var elementStyles = {};

          for (var property in styles) {} // if (this.allowedProperties.indexOf(property) !== -1) {
          //     objStyles[property] = styles.getPropertyValue(property)
          // }
          // this.data.push({
          //     element: element,
          //     styles: elementStyles
          // })

        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);

  return StylerJS;
}();

/***/ }),

/***/ "./src/js/StylerPanel.js":
/*!*******************************!*\
  !*** ./src/js/StylerPanel.js ***!
  \*******************************/
/*! exports provided: StylerPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylerPanel", function() { return StylerPanel; });
/* harmony import */ var _StylerInputText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylerInputText */ "./src/js/StylerInputText.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import allowedProperties from './allowed-properties'

var StylerPanel = /*#__PURE__*/function () {
  /**
   * Construct the class
   * 
   * @param StylerOptions options
   */
  function StylerPanel(options) {
    _classCallCheck(this, StylerPanel);

    this.id = 'sjs-panel';
  }
  /**
   * Destroy the StyleJS panel
   * 
   * @return void
   */


  _createClass(StylerPanel, [{
    key: "destroy",
    value: function destroy() {
      var panel = document.querySelector('#' + this.id);

      if (panel) {
        panel.parentNode.removeChild(panel);
      }
    }
    /**
     * Build the StyleJS panel
     * 
     * @param  HTMLElement element
     * @return void
     */

  }, {
    key: "build",
    value: function build(element) {
      var panel = document.createElement('div');
      panel.setAttribute('id', this.id); // set events

      panel.addEventListener('click', function (e) {
        e.stopPropagation();
      }); // set html

      var inputText = new _StylerInputText__WEBPACK_IMPORTED_MODULE_0__["StylerInputText"]();
      inputText.setElement(element);
      inputText.setPanel(panel);
      inputText.build();
      document.body.appendChild(panel);
    }
  }]);

  return StylerPanel;
}();

/***/ }),

/***/ "./src/js/allowed-properties.js":
/*!**************************************!*\
  !*** ./src/js/allowed-properties.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: {
    'display': {
      javascript: 'display',
      type: 'select',
      values: {
        basic: ['inline', 'block', 'flex', 'inline-block', 'inline-flex', 'none'],
        advanced: ['inline-table', 'list-item', 'run-in', 'table', 'table-caption', 'table-column-group', 'table-header-group', 'table-footer-group', 'table-row-group', 'table-cell', 'table-column', 'table-row']
      },
      "default": 'inline',
      version: 'css1'
    }
  }
});
/*
layout
------
display
padding
margin
width
min-width (advanced)
max-width (advanced)
height
min-height (advanced)
max-height (advanced)
float/flex/grid
(clear) (advanced)
overflow (advanced)
position (advanced)
z-index (advanced)

typography
------
font-family
font-size
font-style
color
letter-spacing (advanced)
line-height
text-align
text-indent (advanced)
text-decoration
text-transform (advanced)
dir (advanced)
column-count (advanced)

background
------
add multiple background type
color
gradient
image
transparency

border
------
left/right/top/bottom
style
width
color
radius

shadows
------
box-shadow
text-shadow

transitions
------
type
timer
speed

effects
------
opacity
filters
cursor
*/

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StylerJS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylerJS */ "./src/js/StylerJS.js");
// import script and styles
 // initialize StylerJS

new _StylerJS__WEBPACK_IMPORTED_MODULE_0__["StylerJS"]({
  selector: 'h1'
}).run();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Paul/code/stylerjs/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/Paul/code/stylerjs/src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });