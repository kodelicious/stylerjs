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

/***/ "./node_modules/vanilla-picker/dist/vanilla-picker.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/vanilla-picker/dist/vanilla-picker.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

String.prototype.startsWith = String.prototype.startsWith || function (needle) {
    return this.indexOf(needle) === 0;
};
String.prototype.padStart = String.prototype.padStart || function (len, pad) {
    var str = this;while (str.length < len) {
        str = pad + str;
    }return str;
};

var colorNames = { cb: '0f8ff', tqw: 'aebd7', q: '-ffff', qmrn: '7fffd4', zr: '0ffff', bg: '5f5dc', bsq: 'e4c4', bck: '---', nch: 'ebcd', b: '--ff', bvt: '8a2be2', brwn: 'a52a2a', brw: 'deb887', ctb: '5f9ea0', hrt: '7fff-', chcT: 'd2691e', cr: '7f50', rnw: '6495ed', crns: '8dc', crms: 'dc143c', cn: '-ffff', Db: '--8b', Dcn: '-8b8b', Dgnr: 'b8860b', Dgr: 'a9a9a9', Dgrn: '-64-', Dkhk: 'bdb76b', Dmgn: '8b-8b', Dvgr: '556b2f', Drng: '8c-', Drch: '9932cc', Dr: '8b--', Dsmn: 'e9967a', Dsgr: '8fbc8f', DsTb: '483d8b', DsTg: '2f4f4f', Dtrq: '-ced1', Dvt: '94-d3', ppnk: '1493', pskb: '-bfff', mgr: '696969', grb: '1e90ff', rbrc: 'b22222', rwht: 'af0', stg: '228b22', chs: '-ff', gnsb: 'dcdcdc', st: '8f8ff', g: 'd7-', gnr: 'daa520', gr: '808080', grn: '-8-0', grnw: 'adff2f', hnw: '0fff0', htpn: '69b4', nnr: 'cd5c5c', ng: '4b-82', vr: '0', khk: '0e68c', vnr: 'e6e6fa', nrb: '0f5', wngr: '7cfc-', mnch: 'acd', Lb: 'add8e6', Lcr: '08080', Lcn: 'e0ffff', Lgnr: 'afad2', Lgr: 'd3d3d3', Lgrn: '90ee90', Lpnk: 'b6c1', Lsmn: 'a07a', Lsgr: '20b2aa', Lskb: '87cefa', LsTg: '778899', Lstb: 'b0c4de', Lw: 'e0', m: '-ff-', mgrn: '32cd32', nn: 'af0e6', mgnt: '-ff', mrn: '8--0', mqm: '66cdaa', mmb: '--cd', mmrc: 'ba55d3', mmpr: '9370db', msg: '3cb371', mmsT: '7b68ee', '': '-fa9a', mtr: '48d1cc', mmvt: 'c71585', mnLb: '191970', ntc: '5fffa', mstr: 'e4e1', mccs: 'e4b5', vjw: 'dead', nv: '--80', c: 'df5e6', v: '808-0', vrb: '6b8e23', rng: 'a5-', rngr: '45-', rch: 'da70d6', pgnr: 'eee8aa', pgrn: '98fb98', ptrq: 'afeeee', pvtr: 'db7093', ppwh: 'efd5', pchp: 'dab9', pr: 'cd853f', pnk: 'c0cb', pm: 'dda0dd', pwrb: 'b0e0e6', prp: '8-080', cc: '663399', r: '--', sbr: 'bc8f8f', rb: '4169e1', sbrw: '8b4513', smn: 'a8072', nbr: '4a460', sgrn: '2e8b57', ssh: '5ee', snn: 'a0522d', svr: 'c0c0c0', skb: '87ceeb', sTb: '6a5acd', sTgr: '708090', snw: 'afa', n: '-ff7f', stb: '4682b4', tn: 'd2b48c', t: '-8080', thst: 'd8bfd8', tmT: '6347', trqs: '40e0d0', vt: 'ee82ee', whT: '5deb3', wht: '', hts: '5f5f5', w: '-', wgrn: '9acd32' };

function printNum(num) {
    var decs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var str = decs > 0 ? num.toFixed(decs).replace(/0+$/, '').replace(/\.$/, '') : num.toString();
    return str || '0';
}

var Color = function () {
    function Color(r, g, b, a) {
        classCallCheck(this, Color);


        var that = this;
        function parseString(input) {

            if (input.startsWith('hsl')) {
                var _input$match$map = input.match(/([\-\d\.e]+)/g).map(Number),
                    _input$match$map2 = slicedToArray(_input$match$map, 4),
                    h = _input$match$map2[0],
                    s = _input$match$map2[1],
                    l = _input$match$map2[2],
                    _a = _input$match$map2[3];

                if (_a === undefined) {
                    _a = 1;
                }

                h /= 360;
                s /= 100;
                l /= 100;
                that.hsla = [h, s, l, _a];
            } else if (input.startsWith('rgb')) {
                var _input$match$map3 = input.match(/([\-\d\.e]+)/g).map(Number),
                    _input$match$map4 = slicedToArray(_input$match$map3, 4),
                    _r = _input$match$map4[0],
                    _g = _input$match$map4[1],
                    _b = _input$match$map4[2],
                    _a2 = _input$match$map4[3];

                if (_a2 === undefined) {
                    _a2 = 1;
                }

                that.rgba = [_r, _g, _b, _a2];
            } else {
                if (input.startsWith('#')) {
                    that.rgba = Color.hexToRgb(input);
                } else {
                    that.rgba = Color.nameToRgb(input) || Color.hexToRgb(input);
                }
            }
        }

        if (r === undefined) ; else if (Array.isArray(r)) {
            this.rgba = r;
        } else if (b === undefined) {
            var color = r && '' + r;
            if (color) {
                parseString(color.toLowerCase());
            }
        } else {
            this.rgba = [r, g, b, a === undefined ? 1 : a];
        }
    }

    createClass(Color, [{
        key: 'printRGB',
        value: function printRGB(alpha) {
            var rgb = alpha ? this.rgba : this.rgba.slice(0, 3),
                vals = rgb.map(function (x, i) {
                return printNum(x, i === 3 ? 3 : 0);
            });

            return alpha ? 'rgba(' + vals + ')' : 'rgb(' + vals + ')';
        }
    }, {
        key: 'printHSL',
        value: function printHSL(alpha) {
            var mults = [360, 100, 100, 1],
                suff = ['', '%', '%', ''];

            var hsl = alpha ? this.hsla : this.hsla.slice(0, 3),
                vals = hsl.map(function (x, i) {
                return printNum(x * mults[i], i === 3 ? 3 : 1) + suff[i];
            });

            return alpha ? 'hsla(' + vals + ')' : 'hsl(' + vals + ')';
        }
    }, {
        key: 'printHex',
        value: function printHex(alpha) {
            var hex = this.hex;
            return alpha ? hex : hex.substring(0, 7);
        }
    }, {
        key: 'rgba',
        get: function get$$1() {
            if (this._rgba) {
                return this._rgba;
            }
            if (!this._hsla) {
                throw new Error('No color is set');
            }

            return this._rgba = Color.hslToRgb(this._hsla);
        },
        set: function set$$1(rgb) {
            if (rgb.length === 3) {
                rgb[3] = 1;
            }

            this._rgba = rgb;
            this._hsla = null;
        }
    }, {
        key: 'rgbString',
        get: function get$$1() {
            return this.printRGB();
        }
    }, {
        key: 'rgbaString',
        get: function get$$1() {
            return this.printRGB(true);
        }
    }, {
        key: 'hsla',
        get: function get$$1() {
            if (this._hsla) {
                return this._hsla;
            }
            if (!this._rgba) {
                throw new Error('No color is set');
            }

            return this._hsla = Color.rgbToHsl(this._rgba);
        },
        set: function set$$1(hsl) {
            if (hsl.length === 3) {
                hsl[3] = 1;
            }

            this._hsla = hsl;
            this._rgba = null;
        }
    }, {
        key: 'hslString',
        get: function get$$1() {
            return this.printHSL();
        }
    }, {
        key: 'hslaString',
        get: function get$$1() {
            return this.printHSL(true);
        }
    }, {
        key: 'hex',
        get: function get$$1() {
            var rgb = this.rgba,
                hex = rgb.map(function (x, i) {
                return i < 3 ? x.toString(16) : Math.round(x * 255).toString(16);
            });

            return '#' + hex.map(function (x) {
                return x.padStart(2, '0');
            }).join('');
        },
        set: function set$$1(hex) {
            this.rgba = Color.hexToRgb(hex);
        }
    }], [{
        key: 'hexToRgb',
        value: function hexToRgb(input) {

            var hex = (input.startsWith('#') ? input.slice(1) : input).replace(/^(\w{3})$/, '$1F').replace(/^(\w)(\w)(\w)(\w)$/, '$1$1$2$2$3$3$4$4').replace(/^(\w{6})$/, '$1FF');

            if (!hex.match(/^([0-9a-fA-F]{8})$/)) {
                throw new Error('Unknown hex color; ' + input);
            }

            var rgba = hex.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map(function (x) {
                return parseInt(x, 16);
            });

            rgba[3] = rgba[3] / 255;
            return rgba;
        }
    }, {
        key: 'nameToRgb',
        value: function nameToRgb(input) {

            var hash = input.toLowerCase().replace('at', 'T').replace(/[aeiouyldf]/g, '').replace('ght', 'L').replace('rk', 'D').slice(-5, 4),
                hex = colorNames[hash];
            return hex === undefined ? hex : Color.hexToRgb(hex.replace(/\-/g, '00').padStart(6, 'f'));
        }
    }, {
        key: 'rgbToHsl',
        value: function rgbToHsl(_ref) {
            var _ref2 = slicedToArray(_ref, 4),
                r = _ref2[0],
                g = _ref2[1],
                b = _ref2[2],
                a = _ref2[3];

            r /= 255;
            g /= 255;
            b /= 255;

            var max = Math.max(r, g, b),
                min = Math.min(r, g, b);
            var h = void 0,
                s = void 0,
                l = (max + min) / 2;

            if (max === min) {
                h = s = 0;
            } else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);break;
                    case g:
                        h = (b - r) / d + 2;break;
                    case b:
                        h = (r - g) / d + 4;break;
                }

                h /= 6;
            }

            return [h, s, l, a];
        }
    }, {
        key: 'hslToRgb',
        value: function hslToRgb(_ref3) {
            var _ref4 = slicedToArray(_ref3, 4),
                h = _ref4[0],
                s = _ref4[1],
                l = _ref4[2],
                a = _ref4[3];

            var r = void 0,
                g = void 0,
                b = void 0;

            if (s === 0) {
                r = g = b = l;
            } else {
                var hue2rgb = function hue2rgb(p, q, t) {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };

                var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
                    p = 2 * l - q;

                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            var rgba = [r * 255, g * 255, b * 255].map(Math.round);
            rgba[3] = a;

            return rgba;
        }
    }]);
    return Color;
}();

var EventBucket = function () {
    function EventBucket() {
        classCallCheck(this, EventBucket);

        this._events = [];
    }

    createClass(EventBucket, [{
        key: 'add',
        value: function add(target, type, handler) {
            target.addEventListener(type, handler, false);
            this._events.push({
                target: target,
                type: type,
                handler: handler
            });
        }
    }, {
        key: 'remove',
        value: function remove(target, type, handler) {
            this._events = this._events.filter(function (e) {
                var isMatch = true;
                if (target && target !== e.target) {
                    isMatch = false;
                }
                if (type && type !== e.type) {
                    isMatch = false;
                }
                if (handler && handler !== e.handler) {
                    isMatch = false;
                }

                if (isMatch) {
                    EventBucket._doRemove(e.target, e.type, e.handler);
                }
                return !isMatch;
            });
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this._events.forEach(function (e) {
                return EventBucket._doRemove(e.target, e.type, e.handler);
            });
            this._events = [];
        }
    }], [{
        key: '_doRemove',
        value: function _doRemove(target, type, handler) {
            target.removeEventListener(type, handler, false);
        }
    }]);
    return EventBucket;
}();

function parseHTML(htmlString) {

    var div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.firstElementChild;
}

function dragTrack(eventBucket, area, callback) {
    var dragging = false;

    function clamp(val, min, max) {
        return Math.max(min, Math.min(val, max));
    }

    function onMove(e, info, starting) {
        if (starting) {
            dragging = true;
        }
        if (!dragging) {
            return;
        }

        e.preventDefault();

        var bounds = area.getBoundingClientRect(),
            w = bounds.width,
            h = bounds.height,
            x = info.clientX,
            y = info.clientY;

        var relX = clamp(x - bounds.left, 0, w),
            relY = clamp(y - bounds.top, 0, h);

        callback(relX / w, relY / h);
    }

    function onMouse(e, starting) {
        var button = e.buttons === undefined ? e.which : e.buttons;
        if (button === 1) {
            onMove(e, e, starting);
        } else {
            dragging = false;
        }
    }

    function onTouch(e, starting) {
        if (e.touches.length === 1) {
            onMove(e, e.touches[0], starting);
        } else {
            dragging = false;
        }
    }

    eventBucket.add(area, 'mousedown', function (e) {
        onMouse(e, true);
    });
    eventBucket.add(area, 'touchstart', function (e) {
        onTouch(e, true);
    });
    eventBucket.add(window, 'mousemove', onMouse);
    eventBucket.add(area, 'touchmove', onTouch);
    eventBucket.add(window, 'mouseup', function (e) {
        dragging = false;
    });
    eventBucket.add(area, 'touchend', function (e) {
        dragging = false;
    });
    eventBucket.add(area, 'touchcancel', function (e) {
        dragging = false;
    });
}

var BG_TRANSP = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'2\' height=\'2\'%3E%3Cpath d=\'M1,0H0V1H2V2H1\' fill=\'lightgrey\'/%3E%3C/svg%3E")';
var HUES = 360;

var EVENT_KEY = 'keydown',
    EVENT_CLICK_OUTSIDE = 'mousedown',
    EVENT_TAB_MOVE = 'focusin';

function $(selector, context) {
    return (context || document).querySelector(selector);
}

function stopEvent(e) {

    e.preventDefault();
    e.stopPropagation();
}
function onKey(bucket, target, keys, handler, stop) {
    bucket.add(target, EVENT_KEY, function (e) {
        if (keys.indexOf(e.key) >= 0) {
            if (stop) {
                stopEvent(e);
            }
            handler(e);
        }
    });
}

var _style = document.createElement('style');
_style.textContent = '.picker_wrapper.no_alpha .picker_alpha{display:none}.picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.picker_wrapper.no_cancel .picker_cancel{display:none}.layout_default.picker_wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:stretch;align-items:stretch;font-size:10px;width:25em;padding:.5em}.layout_default.picker_wrapper input,.layout_default.picker_wrapper button{font-size:1rem}.layout_default.picker_wrapper>*{margin:.5em}.layout_default.picker_wrapper::before{content:\'\';display:block;width:100%;height:0;-webkit-box-ordinal-group:2;order:1}.layout_default .picker_slider,.layout_default .picker_selector{padding:1em}.layout_default .picker_hue{width:100%}.layout_default .picker_sl{-webkit-box-flex:1;flex:1 1 auto}.layout_default .picker_sl::before{content:\'\';display:block;padding-bottom:100%}.layout_default .picker_editor{-webkit-box-ordinal-group:2;order:1;width:6.5rem}.layout_default .picker_editor input{width:100%;height:100%}.layout_default .picker_sample{-webkit-box-ordinal-group:2;order:1;-webkit-box-flex:1;flex:1 1 auto}.layout_default .picker_done,.layout_default .picker_cancel{-webkit-box-ordinal-group:2;order:1}.picker_wrapper{box-sizing:border-box;background:#f2f2f2;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.picker_wrapper:focus{outline:none}.picker_wrapper button,.picker_wrapper input{box-sizing:border-box;border:none;box-shadow:0 0 0 1px silver;outline:none}.picker_wrapper button:focus,.picker_wrapper button:active,.picker_wrapper input:focus,.picker_wrapper input:active{box-shadow:0 0 2px 1px dodgerblue}.picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color:whitesmoke;background-image:-webkit-gradient(linear, left bottom, left top, from(gainsboro), to(transparent));background-image:-webkit-linear-gradient(bottom, gainsboro, transparent);background-image:linear-gradient(0deg, gainsboro, transparent)}.picker_wrapper button:active{background-image:-webkit-gradient(linear, left bottom, left top, from(transparent), to(gainsboro));background-image:-webkit-linear-gradient(bottom, transparent, gainsboro);background-image:linear-gradient(0deg, transparent, gainsboro)}.picker_wrapper button:hover{background-color:white}.picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid white;border-radius:100%;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.picker_slider .picker_selector{border-radius:2px}.picker_hue{position:relative;background-image:-webkit-gradient(linear, left top, right top, from(red), color-stop(yellow), color-stop(lime), color-stop(cyan), color-stop(blue), color-stop(magenta), to(red));background-image:-webkit-linear-gradient(left, red, yellow, lime, cyan, blue, magenta, red);background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);box-shadow:0 0 0 1px silver}.picker_sl{position:relative;box-shadow:0 0 0 1px silver;background-image:-webkit-gradient(linear, left top, left bottom, from(white), color-stop(50%, rgba(255,255,255,0))),-webkit-gradient(linear, left bottom, left top, from(black), color-stop(50%, rgba(0,0,0,0))),-webkit-gradient(linear, left top, right top, from(gray), to(rgba(128,128,128,0)));background-image:-webkit-linear-gradient(top, white, rgba(255,255,255,0) 50%),-webkit-linear-gradient(bottom, black, rgba(0,0,0,0) 50%),-webkit-linear-gradient(left, gray, rgba(128,128,128,0));background-image:linear-gradient(180deg, white, rgba(255,255,255,0) 50%),linear-gradient(0deg, black, rgba(0,0,0,0) 50%),linear-gradient(90deg, gray, rgba(128,128,128,0))}.picker_alpha,.picker_sample{position:relative;background:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'2\' height=\'2\'%3E%3Cpath d=\'M1,0H0V1H2V2H1\' fill=\'lightgrey\'/%3E%3C/svg%3E") left top/contain white;box-shadow:0 0 0 1px silver}.picker_alpha .picker_selector,.picker_sample .picker_selector{background:none}.picker_editor input{font-family:monospace;padding:.2em .4em}.picker_sample::before{content:\'\';position:absolute;display:block;width:100%;height:100%;background:currentColor}.picker_arrow{position:absolute;z-index:-1}.picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.picker_wrapper.popup,.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,0.4)}.picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{content:"";display:block;position:absolute;top:0;left:0;z-index:-99}.picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.popup.popup_top{bottom:100%;left:0}.popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.popup.popup_bottom{top:100%;left:0}.popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.popup.popup_left{top:0;right:100%}.popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.popup.popup_right{top:0;left:100%}.popup.popup_right .picker_arrow{top:0;left:0}';
document.documentElement.firstElementChild.appendChild(_style);

var Picker = function () {
    function Picker(options) {
        classCallCheck(this, Picker);


        this.settings = {

            popup: 'right',
            layout: 'default',
            alpha: true,
            editor: true,
            editorFormat: 'hex',
            cancelButton: false,
            defaultColor: '#0cf'
        };

        this._events = new EventBucket();

        this.onChange = null;

        this.onDone = null;

        this.onOpen = null;

        this.onClose = null;

        this.setOptions(options);
    }

    createClass(Picker, [{
        key: 'setOptions',
        value: function setOptions(options) {
            var _this = this;

            if (!options) {
                return;
            }
            var settings = this.settings;

            function transfer(source, target, skipKeys) {
                for (var key in source) {
                    if (skipKeys && skipKeys.indexOf(key) >= 0) {
                        continue;
                    }

                    target[key] = source[key];
                }
            }

            if (options instanceof HTMLElement) {
                settings.parent = options;
            } else {

                if (settings.parent && options.parent && settings.parent !== options.parent) {
                    this._events.remove(settings.parent);
                    this._popupInited = false;
                }

                transfer(options, settings);

                if (options.onChange) {
                    this.onChange = options.onChange;
                }
                if (options.onDone) {
                    this.onDone = options.onDone;
                }
                if (options.onOpen) {
                    this.onOpen = options.onOpen;
                }
                if (options.onClose) {
                    this.onClose = options.onClose;
                }

                var col = options.color || options.colour;
                if (col) {
                    this._setColor(col);
                }
            }

            var parent = settings.parent;
            if (parent && settings.popup && !this._popupInited) {

                var openProxy = function openProxy(e) {
                    return _this.openHandler(e);
                };

                this._events.add(parent, 'click', openProxy);

                onKey(this._events, parent, [' ', 'Spacebar', 'Enter'], openProxy);

                this._popupInited = true;
            } else if (options.parent && !settings.popup) {
                this.show();
            }
        }
    }, {
        key: 'openHandler',
        value: function openHandler(e) {
            if (this.show()) {

                e && e.preventDefault();

                this.settings.parent.style.pointerEvents = 'none';

                var toFocus = e && e.type === EVENT_KEY ? this._domEdit : this.domElement;
                setTimeout(function () {
                    return toFocus.focus();
                }, 100);

                if (this.onOpen) {
                    this.onOpen(this.colour);
                }
            }
        }
    }, {
        key: 'closeHandler',
        value: function closeHandler(e) {
            var event = e && e.type;
            var doHide = false;

            if (!e) {
                doHide = true;
            } else if (event === EVENT_CLICK_OUTSIDE || event === EVENT_TAB_MOVE) {

                var knownTime = (this.__containedEvent || 0) + 100;
                if (e.timeStamp > knownTime) {
                    doHide = true;
                }
            } else {

                stopEvent(e);

                doHide = true;
            }

            if (doHide && this.hide()) {
                this.settings.parent.style.pointerEvents = '';

                if (event !== EVENT_CLICK_OUTSIDE) {
                    this.settings.parent.focus();
                }

                if (this.onClose) {
                    this.onClose(this.colour);
                }
            }
        }
    }, {
        key: 'movePopup',
        value: function movePopup(options, open) {

            this.closeHandler();

            this.setOptions(options);
            if (open) {
                this.openHandler();
            }
        }
    }, {
        key: 'setColor',
        value: function setColor(color, silent) {
            this._setColor(color, { silent: silent });
        }
    }, {
        key: '_setColor',
        value: function _setColor(color, flags) {
            if (typeof color === 'string') {
                color = color.trim();
            }
            if (!color) {
                return;
            }

            flags = flags || {};
            var c = void 0;
            try {

                c = new Color(color);
            } catch (ex) {
                if (flags.failSilently) {
                    return;
                }
                throw ex;
            }

            if (!this.settings.alpha) {
                var hsla = c.hsla;
                hsla[3] = 1;
                c.hsla = hsla;
            }
            this.colour = this.color = c;
            this._setHSLA(null, null, null, null, flags);
        }
    }, {
        key: 'setColour',
        value: function setColour(colour, silent) {
            this.setColor(colour, silent);
        }
    }, {
        key: 'show',
        value: function show() {
            var parent = this.settings.parent;
            if (!parent) {
                return false;
            }

            if (this.domElement) {
                var toggled = this._toggleDOM(true);

                this._setPosition();

                return toggled;
            }

            var html = this.settings.template || '<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>';
            var wrapper = parseHTML(html);

            this.domElement = wrapper;
            this._domH = $('.picker_hue', wrapper);
            this._domSL = $('.picker_sl', wrapper);
            this._domA = $('.picker_alpha', wrapper);
            this._domEdit = $('.picker_editor input', wrapper);
            this._domSample = $('.picker_sample', wrapper);
            this._domOkay = $('.picker_done button', wrapper);
            this._domCancel = $('.picker_cancel button', wrapper);

            wrapper.classList.add('layout_' + this.settings.layout);
            if (!this.settings.alpha) {
                wrapper.classList.add('no_alpha');
            }
            if (!this.settings.editor) {
                wrapper.classList.add('no_editor');
            }
            if (!this.settings.cancelButton) {
                wrapper.classList.add('no_cancel');
            }
            this._ifPopup(function () {
                return wrapper.classList.add('popup');
            });

            this._setPosition();

            if (this.colour) {
                this._updateUI();
            } else {
                this._setColor(this.settings.defaultColor);
            }
            this._bindEvents();

            return true;
        }
    }, {
        key: 'hide',
        value: function hide() {
            return this._toggleDOM(false);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this._events.destroy();
            if (this.domElement) {
                this.settings.parent.removeChild(this.domElement);
            }
        }
    }, {
        key: '_bindEvents',
        value: function _bindEvents() {
            var _this2 = this;

            var that = this,
                dom = this.domElement,
                events = this._events;

            function addEvent(target, type, handler) {
                events.add(target, type, handler);
            }

            addEvent(dom, 'click', function (e) {
                return e.preventDefault();
            });

            dragTrack(events, this._domH, function (x, y) {
                return that._setHSLA(x);
            });

            dragTrack(events, this._domSL, function (x, y) {
                return that._setHSLA(null, x, 1 - y);
            });

            if (this.settings.alpha) {
                dragTrack(events, this._domA, function (x, y) {
                    return that._setHSLA(null, null, null, 1 - y);
                });
            }

            var editInput = this._domEdit;
            {
                addEvent(editInput, 'input', function (e) {
                    that._setColor(this.value, { fromEditor: true, failSilently: true });
                });

                addEvent(editInput, 'focus', function (e) {
                    var input = this;

                    if (input.selectionStart === input.selectionEnd) {
                        input.select();
                    }
                });
            }

            this._ifPopup(function () {

                var popupCloseProxy = function popupCloseProxy(e) {
                    return _this2.closeHandler(e);
                };

                addEvent(window, EVENT_CLICK_OUTSIDE, popupCloseProxy);
                addEvent(window, EVENT_TAB_MOVE, popupCloseProxy);
                onKey(events, dom, ['Esc', 'Escape'], popupCloseProxy);

                var timeKeeper = function timeKeeper(e) {
                    _this2.__containedEvent = e.timeStamp;
                };
                addEvent(dom, EVENT_CLICK_OUTSIDE, timeKeeper);

                addEvent(dom, EVENT_TAB_MOVE, timeKeeper);

                addEvent(_this2._domCancel, 'click', popupCloseProxy);
            });

            var onDoneProxy = function onDoneProxy(e) {
                _this2._ifPopup(function () {
                    return _this2.closeHandler(e);
                });
                if (_this2.onDone) {
                    _this2.onDone(_this2.colour);
                }
            };
            addEvent(this._domOkay, 'click', onDoneProxy);
            onKey(events, dom, ['Enter'], onDoneProxy);
        }
    }, {
        key: '_setPosition',
        value: function _setPosition() {
            var parent = this.settings.parent,
                elm = this.domElement;

            if (parent !== elm.parentNode) {
                parent.appendChild(elm);
            }

            this._ifPopup(function (popup) {

                if (getComputedStyle(parent).position === 'static') {
                    parent.style.position = 'relative';
                }

                var cssClass = popup === true ? 'popup_right' : 'popup_' + popup;

                ['popup_top', 'popup_bottom', 'popup_left', 'popup_right'].forEach(function (c) {

                    if (c === cssClass) {
                        elm.classList.add(c);
                    } else {
                        elm.classList.remove(c);
                    }
                });

                elm.classList.add(cssClass);
            });
        }
    }, {
        key: '_setHSLA',
        value: function _setHSLA(h, s, l, a, flags) {
            flags = flags || {};

            var col = this.colour,
                hsla = col.hsla;

            [h, s, l, a].forEach(function (x, i) {
                if (x || x === 0) {
                    hsla[i] = x;
                }
            });
            col.hsla = hsla;

            this._updateUI(flags);

            if (this.onChange && !flags.silent) {
                this.onChange(col);
            }
        }
    }, {
        key: '_updateUI',
        value: function _updateUI(flags) {
            if (!this.domElement) {
                return;
            }
            flags = flags || {};

            var col = this.colour,
                hsl = col.hsla,
                cssHue = 'hsl(' + hsl[0] * HUES + ', 100%, 50%)',
                cssHSL = col.hslString,
                cssHSLA = col.hslaString;

            var uiH = this._domH,
                uiSL = this._domSL,
                uiA = this._domA,
                thumbH = $('.picker_selector', uiH),
                thumbSL = $('.picker_selector', uiSL),
                thumbA = $('.picker_selector', uiA);

            function posX(parent, child, relX) {
                child.style.left = relX * 100 + '%';
            }
            function posY(parent, child, relY) {
                child.style.top = relY * 100 + '%';
            }

            posX(uiH, thumbH, hsl[0]);

            this._domSL.style.backgroundColor = this._domH.style.color = cssHue;

            posX(uiSL, thumbSL, hsl[1]);
            posY(uiSL, thumbSL, 1 - hsl[2]);

            uiSL.style.color = cssHSL;

            posY(uiA, thumbA, 1 - hsl[3]);

            var opaque = cssHSL,
                transp = opaque.replace('hsl', 'hsla').replace(')', ', 0)'),
                bg = 'linear-gradient(' + [opaque, transp] + ')';

            this._domA.style.backgroundImage = bg + ', ' + BG_TRANSP;

            if (!flags.fromEditor) {
                var format = this.settings.editorFormat,
                    alpha = this.settings.alpha;

                var value = void 0;
                switch (format) {
                    case 'rgb':
                        value = col.printRGB(alpha);break;
                    case 'hsl':
                        value = col.printHSL(alpha);break;
                    default:
                        value = col.printHex(alpha);
                }
                this._domEdit.value = value;
            }

            this._domSample.style.color = cssHSLA;
        }
    }, {
        key: '_ifPopup',
        value: function _ifPopup(actionIf, actionElse) {
            if (this.settings.parent && this.settings.popup) {
                actionIf && actionIf(this.settings.popup);
            } else {
                actionElse && actionElse();
            }
        }
    }, {
        key: '_toggleDOM',
        value: function _toggleDOM(toVisible) {
            var dom = this.domElement;
            if (!dom) {
                return false;
            }

            var displayStyle = toVisible ? '' : 'none',
                toggle = dom.style.display !== displayStyle;

            if (toggle) {
                dom.style.display = displayStyle;
            }
            return toggle;
        }
    }], [{
        key: 'StyleElement',
        get: function get$$1() {
            return _style;
        }
    }]);
    return Picker;
}();

/* harmony default export */ __webpack_exports__["default"] = (Picker);


/***/ }),

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
   * Construct the class.
   * 
   * @param
   */
  function StylerControl() {
    _classCallCheck(this, StylerControl);

    this.element = undefined;
    this.property = undefined;
    this.label = 'My Label';
    this.name = '';
    this.value = '';
    this.attributes = '';
    this.data = [];
  }
  /**
   * Set element.
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
     * Set property.
     * 
     * @param  object property
     * @return void
     */

  }, {
    key: "setProperty",
    value: function setProperty(property) {
      this.property = property;
    }
    /**
     * Set label for the template.
     * 
     * @param  string label
     * @return void
     */

  }, {
    key: "setLabel",
    value: function setLabel(label) {
      this.label = label;
    }
    /**
     * Set name of the control.
     * 
     * @param  string name
     * @return void
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * Set value of the control.
     * 
     * @param  string value
     * @return void
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = this.convertValue(value);
    }
    /**
     * Convert value of the control.
     * This method will be extended.
     * 
     * @param  string value
     * @return string value
     */

  }, {
    key: "convertValue",
    value: function convertValue(value) {
      return value;
    }
    /**
     * Convert value of the control.
     * This method will be extended.
     * 
     * @param  string value
     * @return string value
     */

  }, {
    key: "convertValueforValidUnit",
    value: function convertValueforValidUnit(value) {
      if (value && this.property && this.property.unit) {
        value = value.replace(/(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax)/g, '');

        switch (this.property.unit) {
          case 'rem':
            value = value / 16;
            break;
        }
      }

      return value;
    }
    /**
     * Set unit of the control for the value.
     * 
     * @param  string unit
     * @return void
     */

  }, {
    key: "setUnit",
    value: function setUnit(unit) {
      this.unit = unit;
    }
    /**
     * Set all attributes of the control.
     * 
     * @param  object attributes
     * @return void
     */

  }, {
    key: "setAttributes",
    value: function setAttributes(attributes) {
      if (Object.keys(attributes).length) {
        for (var attributeKey in attributes) {
          this.attributes += " ".concat(attributeKey, "=\"").concat(attributes[attributeKey], "\"");
        }
      }
    }
    /**
     * Set data of the control.
     * 
     * @param  array data
     * @return void
     */

  }, {
    key: "setData",
    value: function setData(data) {
      this.data = data;
    }
    /**
     * Set panel element for injecting the template.
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
     * Get the whole template for this form control.
     * 
     * @return string
     */

  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return "\n        <div class=\"sjs-form-group\">\n            <div class=\"sjs-form-label\">".concat(this.label, "</div>\n            <div class=\"sjs-form-control-wrapper\">\n                ").concat(this.getControlTemplate(), "\n            </div>\n        </div>\n        ");
    }
    /**
     * Get the template for this form control.
     * 
     * @return void
     */

  }, {
    key: "getControlTemplate",
    value: function getControlTemplate() {}
    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */

  }, {
    key: "setEvents",
    value: function setEvents(rootElement) {}
    /**
     * Set events on elements in the template
     * 
     * @return void
     */

  }, {
    key: "build",
    value: function build() {
      var rootElement = document.createRange().createContextualFragment(this.getTemplate()).querySelector('div');
      this.setEvents(rootElement);
      this.panel.appendChild(rootElement);
    }
  }]);

  return StylerControl;
}();

/***/ }),

/***/ "./src/js/StylerControlColorPicker.js":
/*!********************************************!*\
  !*** ./src/js/StylerControlColorPicker.js ***!
  \********************************************/
/*! exports provided: StylerControlColorPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylerControlColorPicker", function() { return StylerControlColorPicker; });
/* harmony import */ var _StylerControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylerControl */ "./src/js/StylerControl.js");
/* harmony import */ var vanilla_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-picker */ "./node_modules/vanilla-picker/dist/vanilla-picker.mjs");
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



var StylerControlColorPicker = /*#__PURE__*/function (_StylerControl) {
  _inherits(StylerControlColorPicker, _StylerControl);

  var _super = _createSuper(StylerControlColorPicker);

  /**
   * Construct the class.
   * 
   * @param
   */
  function StylerControlColorPicker() {
    _classCallCheck(this, StylerControlColorPicker);

    return _super.call(this);
  }
  /**
   * Convert value of the control.
   * 
   * @param  string value
   * @return string value
   */


  _createClass(StylerControlColorPicker, [{
    key: "convertValue",
    value: function convertValue(value) {
      return value;
      return this.convertRGBAToHexA(value);
    }
    /**
     * Convert RGBA to HEXA.
     * 
     * @param  string value
     * @return string
     */

  }, {
    key: "convertRGBAToHexA",
    value: function convertRGBAToHexA(value) {
      var rgb = value.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return rgb && rgb.length === 4 ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    }
    /**
     * Get the template for this form control.
     * 
     * @return string
     */

  }, {
    key: "getControlTemplate",
    value: function getControlTemplate() {
      return "\n        <div class=\"sjs-form-control sjs-form-control-color-picker\">\n            <div class=\"sjs-form-control-group\">\n                <div class=\"sjs-form-control-prepend\" style=\"background-color: ".concat(this.value, "\"></div>\n                <div class=\"sjs-form-control-text\">").concat(this.value, "</div>\n            </div>\n        </div>\n        ");
    }
    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */

  }, {
    key: "setEvents",
    value: function setEvents(rootElement) {
      var _this = this;

      new vanilla_picker__WEBPACK_IMPORTED_MODULE_1__["default"]({
        parent: rootElement.querySelector('.sjs-form-control'),
        alpha: false,
        color: this.value,
        popup: 'left',
        onChange: function onChange(color) {
          var hex = color.hex.substr(0, 7);
          _this.element.style[_this.name] = hex;
          rootElement.querySelector('.sjs-form-control-text').innerHTML = hex;
        }
      });
    }
  }]);

  return StylerControlColorPicker;
}(_StylerControl__WEBPACK_IMPORTED_MODULE_0__["StylerControl"]);

/***/ }),

/***/ "./src/js/StylerControlHeading.js":
/*!****************************************!*\
  !*** ./src/js/StylerControlHeading.js ***!
  \****************************************/
/*! exports provided: StylerControlHeading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylerControlHeading", function() { return StylerControlHeading; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StylerControlHeading = /*#__PURE__*/function () {
  /**
   * Construct the class.
   * 
   * @param
   */
  function StylerControlHeading() {
    _classCallCheck(this, StylerControlHeading);

    this.label = 'My Group';
  }
  /**
   * Set panel element for injecting the template.
   * 
   * @param  HTMLDivElement panel
   * @return void
   */


  _createClass(StylerControlHeading, [{
    key: "setPanel",
    value: function setPanel(panel) {
      this.panel = panel;
    }
    /**
     * Set label for the template.
     * 
     * @param  string label
     * @return void
     */

  }, {
    key: "setLabel",
    value: function setLabel(label) {
      this.label = label;
    }
    /**
     * Get the template for this form control.
     * 
     * @return string
     */

  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return "\n        <div class=\"sjs-form-heading\">".concat(this.label, "</div>\n        ");
    }
    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */

  }, {
    key: "setEvents",
    value: function setEvents(rootElement) {}
    /**
     * Set events on elements in the template
     * 
     * @return void
     */

  }, {
    key: "build",
    value: function build() {
      var rootElement = document.createRange().createContextualFragment(this.getTemplate()).querySelector('div');
      this.setEvents(rootElement);
      this.panel.appendChild(rootElement);
    }
  }]);

  return StylerControlHeading;
}();

/***/ }),

/***/ "./src/js/StylerControlNumber.js":
/*!***************************************!*\
  !*** ./src/js/StylerControlNumber.js ***!
  \***************************************/
/*! exports provided: StylerControlNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylerControlNumber", function() { return StylerControlNumber; });
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


var StylerControlNumber = /*#__PURE__*/function (_StylerControl) {
  _inherits(StylerControlNumber, _StylerControl);

  var _super = _createSuper(StylerControlNumber);

  /**
   * Construct the class.
   * 
   * @param
   */
  function StylerControlNumber() {
    _classCallCheck(this, StylerControlNumber);

    return _super.call(this);
  }
  /**
   * Convert value of the control.
   * 
   * @param  string value
   * @return string value
   */


  _createClass(StylerControlNumber, [{
    key: "convertValue",
    value: function convertValue(value) {
      return this.convertValueforValidUnit(value);
    }
    /**
     * Get the template for this form control.
     * 
     * @return string
     */

  }, {
    key: "getControlTemplate",
    value: function getControlTemplate() {
      return "\n        <input type=\"number\" name=\"".concat(this.name, "\" value=\"").concat(this.value, "\" class=\"sjs-form-control\"").concat(this.attributes, " />\n        ");
    }
    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */

  }, {
    key: "setEvents",
    value: function setEvents(rootElement) {
      var _this = this;

      var input = rootElement.querySelector('.sjs-form-control');
      input.addEventListener('change', function () {
        _this.element.style[_this.name] = input.value + (_this.unit || '');
      });
    }
  }]);

  return StylerControlNumber;
}(_StylerControl__WEBPACK_IMPORTED_MODULE_0__["StylerControl"]);

/***/ }),

/***/ "./src/js/StylerControlRange.js":
/*!**************************************!*\
  !*** ./src/js/StylerControlRange.js ***!
  \**************************************/
/*! exports provided: StylerControlRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylerControlRange", function() { return StylerControlRange; });
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


var StylerControlRange = /*#__PURE__*/function (_StylerControl) {
  _inherits(StylerControlRange, _StylerControl);

  var _super = _createSuper(StylerControlRange);

  /**
   * Construct the class.
   * 
   * @param
   */
  function StylerControlRange() {
    _classCallCheck(this, StylerControlRange);

    return _super.call(this);
  }
  /**
   * Convert value of the control.
   * 
   * @param  string value
   * @return string value
   */


  _createClass(StylerControlRange, [{
    key: "convertValue",
    value: function convertValue(value) {
      return this.convertValueforValidUnit(value);
    }
    /**
     * Get the template for this form control.
     * 
     * @return string
     */

  }, {
    key: "getControlTemplate",
    value: function getControlTemplate() {
      return "\n        <input type=\"range\" name=\"".concat(this.name, "\" value=\"").concat(this.value, "\" class=\"sjs-form-control\"").concat(this.attributes, " />\n        ");
    }
    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */

  }, {
    key: "setEvents",
    value: function setEvents(rootElement) {
      var _this = this;

      var input = rootElement.querySelector('.sjs-form-control');
      input.addEventListener('input', function () {
        _this.element.style[_this.name] = input.value + (_this.unit || '');
      });
    }
  }]);

  return StylerControlRange;
}(_StylerControl__WEBPACK_IMPORTED_MODULE_0__["StylerControl"]);

/***/ }),

/***/ "./src/js/StylerControlSelect.js":
/*!***************************************!*\
  !*** ./src/js/StylerControlSelect.js ***!
  \***************************************/
/*! exports provided: StylerControlSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylerControlSelect", function() { return StylerControlSelect; });
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


var StylerControlSelect = /*#__PURE__*/function (_StylerControl) {
  _inherits(StylerControlSelect, _StylerControl);

  var _super = _createSuper(StylerControlSelect);

  /**
   * Construct the class.
   * 
   * @param
   */
  function StylerControlSelect() {
    _classCallCheck(this, StylerControlSelect);

    return _super.call(this);
  }
  /**
   * Get the template for this form control.
   * 
   * @return string html
   */


  _createClass(StylerControlSelect, [{
    key: "getControlTemplate",
    value: function getControlTemplate() {
      var html = "\n        <select name=\"".concat(this.name, "\" class=\"sjs-form-control\"").concat(this.attributes, ">\n        ");

      for (var i = 0; i < this.data.length; i++) {
        var value = this.data[i];
        var selected = this.value === value ? ' selected' : '';
        html += "\n            <option value=\"".concat(value, "\"").concat(selected, ">").concat(value, "</option>\n            ");
      }

      html += "\n        </select>\n        ";
      return html;
    }
    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */

  }, {
    key: "setEvents",
    value: function setEvents(rootElement) {
      var _this = this;

      var select = rootElement.querySelector('.sjs-form-control');
      select.addEventListener('change', function () {
        _this.element.style[_this.name] = select.value;
      });
    }
  }]);

  return StylerControlSelect;
}(_StylerControl__WEBPACK_IMPORTED_MODULE_0__["StylerControl"]);

/***/ }),

/***/ "./src/js/StylerControlSpacing.js":
/*!****************************************!*\
  !*** ./src/js/StylerControlSpacing.js ***!
  \****************************************/
/*! exports provided: StylerControlSpacing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylerControlSpacing", function() { return StylerControlSpacing; });
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


var StylerControlSpacing = /*#__PURE__*/function (_StylerControl) {
  _inherits(StylerControlSpacing, _StylerControl);

  var _super = _createSuper(StylerControlSpacing);

  /**
   * Construct the class.
   * 
   * @param
   */
  function StylerControlSpacing() {
    _classCallCheck(this, StylerControlSpacing);

    return _super.call(this);
  }
  /**
   * Get the template for this form control.
   * 
   * @return string
   */


  _createClass(StylerControlSpacing, [{
    key: "getControlTemplate",
    value: function getControlTemplate() {
      return "\n        <input type=\"range\" name=\"".concat(this.name, "-left\" value=\"").concat(this.value, "\" class=\"sjs-form-control\"").concat(this.attributes, " />\n        <input type=\"range\" name=\"").concat(this.name, "-right\" value=\"").concat(this.value, "\" class=\"sjs-form-control\"").concat(this.attributes, " />\n        <input type=\"range\" name=\"").concat(this.name, "-top\" value=\"").concat(this.value, "\" class=\"sjs-form-control\"").concat(this.attributes, " />\n        <input type=\"range\" name=\"").concat(this.name, "-bottom\" value=\"").concat(this.value, "\" class=\"sjs-form-control\"").concat(this.attributes, " />\n        ");
    }
    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */

  }, {
    key: "setEvents",
    value: function setEvents(rootElement) {
      var _this = this;

      var inputs = rootElement.querySelectorAll('.sjs-form-control');

      var _loop = function _loop(i) {
        var input = inputs[i];
        input.addEventListener('input', function () {
          _this.element.style[input.getAttribute('name')] = input.value + (_this.unit || '');
        });
      };

      for (var i = 0; i < inputs.length; i++) {
        _loop(i);
      }
    }
  }]);

  return StylerControlSpacing;
}(_StylerControl__WEBPACK_IMPORTED_MODULE_0__["StylerControl"]);

/***/ }),

/***/ "./src/js/StylerControlText.js":
/*!*************************************!*\
  !*** ./src/js/StylerControlText.js ***!
  \*************************************/
/*! exports provided: StylerControlText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylerControlText", function() { return StylerControlText; });
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


var StylerControlText = /*#__PURE__*/function (_StylerControl) {
  _inherits(StylerControlText, _StylerControl);

  var _super = _createSuper(StylerControlText);

  /**
   * Construct the class.
   * 
   * @param
   */
  function StylerControlText() {
    _classCallCheck(this, StylerControlText);

    return _super.call(this);
  }
  /**
   * Get the template for this form control.
   * 
   * @return string
   */


  _createClass(StylerControlText, [{
    key: "getControlTemplate",
    value: function getControlTemplate() {
      return "\n        <input type=\"text\" name=\"".concat(this.name, "\" value=\"").concat(this.value, "\" class=\"sjs-form-control\"").concat(this.attributes, " />\n        ");
    }
    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */

  }, {
    key: "setEvents",
    value: function setEvents(rootElement) {
      var _this = this;

      var input = rootElement.querySelector('.sjs-form-control');
      input.addEventListener('blur', function () {
        _this.element.style[_this.name] = input.value;
      });
    }
  }]);

  return StylerControlText;
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
/* harmony import */ var _StylerPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylerPanel */ "./src/js/StylerPanel.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var StylerJS = /*#__PURE__*/function () {
  /**
   * Construct the class.
   * 
   * @param StylerOptions options
   */
  function StylerJS(options) {
    _classCallCheck(this, StylerJS);

    this.options = options;
    this.panel = new _StylerPanel__WEBPACK_IMPORTED_MODULE_0__["StylerPanel"]();
    this.classes = {
      hover: 'sjs-element-hover',
      focus: 'sjs-element-focus'
    };
  }
  /**
   * Get the elements based on the options selector.
   * 
   * @return any
   */


  _createClass(StylerJS, [{
    key: "setElements",
    value: function setElements() {
      this.elements = document.querySelectorAll(this.options.selector);
    }
    /**
     * Start running.
     * 
     * @return void
     */

  }, {
    key: "run",
    value: function run() {
      this.setElements();
      this.setEvents(); // this.gatherData()
    }
    /**
     * Set several events.
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
     * Set events on the document node.
     * 
     * @return void
     */

  }, {
    key: "setDocumentEvents",
    value: function setDocumentEvents() {
      var _this = this;

      document.addEventListener('click', function () {
        _this.deselectElement();

        _this.panel.destroy();
      });
    }
    /**
     * Gather all information about selector elements and corresponding styles.
     * 
     * @return void
     */

  }, {
    key: "setElementEvents",
    value: function setElementEvents() {
      var _this2 = this;

      var _iterator = _createForOfIteratorHelper(this.elements),
          _step;

      try {
        var _loop = function _loop() {
          var element = _step.value;
          element.addEventListener('mouseenter', function () {
            if (!element.classList.contains(_this2.classes.focus)) {
              element.classList.add(_this2.classes.hover);
            }
          });
          element.addEventListener('mouseleave', function () {
            if (element.classList.contains(_this2.classes.hover)) {
              _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].removeClass(element, _this2.classes.hover);
            }
          });
          element.addEventListener('click', function (e) {
            // make sure document click is not fired
            e.stopPropagation(); // remove other outlines

            _this2.deselectElement(element); // then visually select the element


            element.classList.remove(_this2.classes.hover);
            element.classList.add(_this2.classes.focus); // finally destroy and build the style panel

            _this2.panel.destroy();

            _this2.panel.build(element);
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
    * Deselect all elements.
    * 
    * @param  any elm
    * @return void
    */

  }, {
    key: "deselectElement",
    value: function deselectElement(elm) {
      var elements = document.querySelectorAll(".".concat(this.classes.focus));

      if (elements.length) {
        var _iterator2 = _createForOfIteratorHelper(elements),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var element = _step2.value;

            if (elm !== element) {
              _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].removeClass(element, this.classes.focus);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
    /**
     * Gather all information about selector elements and corresponding styles.
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
/* harmony import */ var _allowed_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allowed-properties */ "./src/js/allowed-properties.js");
/* harmony import */ var _StylerControlColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StylerControlColorPicker */ "./src/js/StylerControlColorPicker.js");
/* harmony import */ var _StylerControlHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StylerControlHeading */ "./src/js/StylerControlHeading.js");
/* harmony import */ var _StylerControlNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StylerControlNumber */ "./src/js/StylerControlNumber.js");
/* harmony import */ var _StylerControlSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StylerControlSelect */ "./src/js/StylerControlSelect.js");
/* harmony import */ var _StylerControlSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StylerControlSpacing */ "./src/js/StylerControlSpacing.js");
/* harmony import */ var _StylerControlRange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StylerControlRange */ "./src/js/StylerControlRange.js");
/* harmony import */ var _StylerControlText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StylerControlText */ "./src/js/StylerControlText.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var StylerPanel = /*#__PURE__*/function () {
  /**
   * Construct the class.
   * 
   * @param StylerOptions options
   */
  function StylerPanel(options) {
    _classCallCheck(this, StylerPanel);

    this.id = 'sjs-panel';
  }
  /**
   * Destroy the StyleJS panel.
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
     * Build the StyleJS panel.
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
      }); // loop through all allowed groups and properties

      for (var groupKey in _allowed_properties__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        var group = new _StylerControlHeading__WEBPACK_IMPORTED_MODULE_2__["StylerControlHeading"]();
        group.setPanel(panel);
        group.setLabel(groupKey);
        group.build();
        var properties = _allowed_properties__WEBPACK_IMPORTED_MODULE_0__["default"][groupKey];

        for (var propertyKey in properties) {
          var property = properties[propertyKey];
          var control = void 0;

          switch (property.type) {
            case 'input-text':
              control = new _StylerControlText__WEBPACK_IMPORTED_MODULE_7__["StylerControlText"]();
              break;

            case 'color-picker':
              control = new _StylerControlColorPicker__WEBPACK_IMPORTED_MODULE_1__["StylerControlColorPicker"]();
              break;

            case 'input-number':
              control = new _StylerControlNumber__WEBPACK_IMPORTED_MODULE_3__["StylerControlNumber"]();
              break;

            case 'input-spacing':
              control = new _StylerControlSpacing__WEBPACK_IMPORTED_MODULE_5__["StylerControlSpacing"]();
              break;

            case 'input-range':
              control = new _StylerControlRange__WEBPACK_IMPORTED_MODULE_6__["StylerControlRange"]();
              break;

            case 'select':
              control = new _StylerControlSelect__WEBPACK_IMPORTED_MODULE_4__["StylerControlSelect"]();
              break;
          }

          if (control) {
            // get value of the element's property
            var value = this.propertyValue(element, propertyKey, property);
            console.log(propertyKey + ': ' + value);
            control.setElement(element);
            control.setProperty(property);
            control.setLabel(property.label);
            control.setName(propertyKey);
            control.setValue(value || '');
            control.setUnit(property.unit || '');
            control.setAttributes(property.attributes || {});
            control.setData(property.data ? property.data.basic : []);
            control.setPanel(panel);
            control.build();
          }
        }
      }

      document.body.appendChild(panel);
    }
    /**
     * Get the set value of the passed property.
     * 
     * @param  HTMLElement element
     * @param  string propertyKey
     * @param  object property
     * @return any value
     */

  }, {
    key: "propertyValue",
    value: function propertyValue(element, propertyKey, property) {
      // first check if style is set by user
      var value = element.style[propertyKey] || undefined; // otherwise check the computed style

      if (!value) {
        var style = window.getComputedStyle(element, null);
        value = style[property.javascript] || property["default"];
      } // check the stylesheets???
      //.....


      return value;
    }
    /**
     * Get the set style.
     * 
     * @param  HTMLElement element
     * @param  string property
     * @return void
     */

  }, {
    key: "style",
    value: function style(element, property) {
      var proto = Element.prototype;
      var slice = Function.call.bind(Array.prototype.slice);
      var matches = Function.call.bind(proto.matchesSelector || proto.mozMatchesSelector || proto.webkitMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector); // returns true if a DOM Element matches a cssRule

      var elementMatchCSSRule = function elementMatchCSSRule(element, cssRule) {
        return matches(element, cssRule.selectorText);
      }; // returns true if a property is defined in a cssRule


      var propertyInCSSRule = function propertyInCSSRule(prop, cssRule) {
        return prop in cssRule.style && cssRule.style[prop] !== "";
      }; // here we get the cssRules across all the stylesheets in one array


      var cssRules = slice(document.styleSheets).reduce(function (rules, styleSheet) {
        return rules.concat(slice(styleSheet.cssRules));
      }, []); // get only the css rules that matches that element

      var elementRules = cssRules.filter(elementMatchCSSRule.bind(null, element)); // check if the property "width" is in one of those rules

      var hasProperty = elementRules.some(propertyInCSSRule.bind(null, property));
      console.log(hasProperty);
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
  'Layout': {
    'display': {
      label: 'Display',
      javascript: 'display',
      type: 'select',
      data: {
        basic: ['inline', 'block', 'flex', 'inline-block', 'inline-flex', 'none'],
        advanced: ['inline-table', 'list-item', 'run-in', 'table', 'table-caption', 'table-column-group', 'table-header-group', 'table-footer-group', 'table-row-group', 'table-cell', 'table-column', 'table-row']
      },
      "default": 'flex',
      version: 'css1'
    },
    'padding': {
      label: 'Padding',
      javascript: 'padding',
      type: 'input-spacing',
      unit: 'rem',
      "default": 0,
      attributes: {
        min: 0,
        max: 10,
        step: 0.125
      },
      version: 'css1'
    },
    'margin': {
      label: 'Margin',
      javascript: 'margin',
      type: 'input-spacing',
      unit: 'rem',
      "default": 0,
      attributes: {
        min: 0,
        max: 10,
        step: 0.125
      },
      version: 'css1'
    } // 'width': {
    //     label: 'Width',
    //     javascript: 'width',
    //     type: 'input-number',
    //     unit: 'rem',
    //     default: 0,
    //     attributes: {
    //         min: 0,
    //         step: 0.125,
    //     },
    //     version: 'css1'
    // },
    // 'height': {
    //     label: 'Height',
    //     javascript: 'height',
    //     type: 'input-number',
    //     unit: 'rem',
    //     default: 0,
    //     attributes: {
    //         min: 0,
    //         step: 0.125,
    //     },
    //     version: 'css1'
    // },

  },
  'Typography': {
    'color': {
      label: 'Color',
      javascript: 'color',
      type: 'color-picker',
      "default": '#000000',
      version: 'css1'
    },
    'font-size': {
      label: 'Font size',
      javascript: 'fontSize',
      type: 'input-range',
      unit: 'rem',
      attributes: {
        min: 0,
        max: 10,
        step: 0.125
      },
      version: 'css1'
    },
    'font-style': {
      label: 'Font style',
      javascript: 'fontStyle',
      type: 'select',
      data: {
        basic: ['normal', 'italic', 'oblique', 'initial', 'inherit']
      },
      "default": 'normal',
      version: 'css1'
    },
    'text-align': {
      label: 'Text align',
      javascript: 'textAlign',
      type: 'select',
      data: {
        basic: ['left', 'right', 'center', 'justify', 'initial', 'inherit']
      },
      "default": 'left',
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

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  removeClass: function removeClass(elm, cls) {
    if (elm) {
      elm.classList.remove(cls);

      if (!elm.classList.length) {
        elm.removeAttribute('class');
      }
    }
  }
});

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

__webpack_require__(/*! /Users/Paul/Code/stylerjs/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/Paul/Code/stylerjs/src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });