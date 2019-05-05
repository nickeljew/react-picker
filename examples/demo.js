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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _es6Docready = __webpack_require__(4);

var _es6Docready2 = _interopRequireDefault(_es6Docready);

var _es6Dom = __webpack_require__(5);

var _es6Dom2 = _interopRequireDefault(_es6Dom);

var _picker = __webpack_require__(6);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _es6Docready2.default)(function () {
    var OptionBox = function (_Component) {
        _inherits(OptionBox, _Component);

        function OptionBox(props, context) {
            _classCallCheck(this, OptionBox);

            var _this = _possibleConstructorReturn(this, (OptionBox.__proto__ || Object.getPrototypeOf(OptionBox)).call(this, props, context));

            _this.state = {
                value: _this.props.value || 'N/A'
            };

            _this._handleClick = _this._handleClick.bind(_this);
            return _this;
        }

        _createClass(OptionBox, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                this.setState({
                    value: nextProps.value || 'N/A'
                });
            }
        }, {
            key: 'render',
            value: function render() {

                return _react2.default.createElement(
                    'div',
                    { className: 'box', onClick: this._handleClick },
                    _react2.default.createElement(
                        'label',
                        null,
                        this.state.value
                    )
                );
            }
        }, {
            key: '_handleClick',
            value: function _handleClick(e) {
                this.props.onClick && this.props.onClick(e);
            }
        }]);

        return OptionBox;
    }(_react.Component);

    OptionBox.propTypes = {
        value: _propTypes2.default.string,
        onClick: _propTypes2.default.func
    };
    OptionBox.defaultProps = {};

    var Fruits = ['Mango', 'Orange', 'Avocado', 'Pineapple', 'Jack Fruit', 'Durian', 'Apricot', 'Carambola', 'Dateplum Persimmon', 'Megranate'];
    var Fruits2 = [{ text: 'Watermelon', value: '' }, { text: 'Banana', value: 'Banana' }, { text: 'Lichi', value: 'Lichi' }];
    var FruitOptions = Fruits;
    var defaultFruit = 'Avocado';

    var Cars = [{
        text: 'ASTON MARTIN',
        value: '1001',
        series: [{
            text: 'Cygnet',
            value: '100101'
        }, {
            text: 'V8 Vantage',
            value: '100102'
        }, {
            text: 'V12 Vantage',
            value: '100103'
        }, {
            text: 'DB9',
            value: '100104'
        }, {
            text: 'DBS',
            value: '100105'
        }, {
            text: 'Virage',
            value: '100106'
        }]
    }, {
        text: 'AUDI',
        value: '1002',
        series: [{
            text: 'A4 Allroad',
            value: '100201'
        }, {
            text: 'A5',
            value: '100202'
        }, {
            text: 'A6',
            value: '100203'
        }, {
            text: 'A7',
            value: '100204'
        }, {
            text: 'A8L',
            value: '100205'
        }, {
            text: 'Q3',
            value: '100206'
        }, {
            text: 'Q5',
            value: '100207'
        }, {
            text: 'Q7',
            value: '100208'
        }]
    }, {
        text: 'PORSCHE',
        value: '1003',
        series: [{
            text: 'Boxster',
            value: '100301'
        }, {
            text: 'Cayman',
            value: '100302'
        }, {
            text: '911',
            value: '100303'
        }, {
            text: '918',
            value: '100304'
        }, {
            text: 'Panamera',
            value: '100305'
        }, {
            text: 'Macan',
            value: '100306'
        }]
    }];

    var List = function (_Component2) {
        _inherits(List, _Component2);

        function List(props, context) {
            _classCallCheck(this, List);

            var _this2 = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props, context));

            _this2.state = {
                fruit: _this2.props.fruit,
                brand: _this2.props.brand,
                serial: _this2.props.serial,
                fruits: FruitOptions,
                brands: Cars,
                series: _this2.getCarSeries(_this2.props.brand)
            };

            _this2._handleClickFruit = _this2._handleClickFruit.bind(_this2);
            _this2._handleFruitChange = _this2._handleFruitChange.bind(_this2);
            _this2._handleClickCar = _this2._handleClickCar.bind(_this2);
            _this2._handleCarChange = _this2._handleCarChange.bind(_this2);
            return _this2;
        }

        _createClass(List, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                this.setState({
                    fruit: nextProps.fruit,
                    brand: nextProps.brand,
                    serial: nextProps.serial
                });
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {}
        }, {
            key: 'render',
            value: function render() {

                var fruit = this.state.fruit,
                    brand = this.state.brand,
                    serial = this.state.serial;

                return _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'label',
                            null,
                            'Choice X'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'edit' },
                            _react2.default.createElement(
                                _picker2.default,
                                {
                                    ref: 'fruitSelection',
                                    value: fruit,
                                    options: this.state.fruits,
                                    onChange: this._handleFruitChange
                                },
                                _react2.default.createElement(OptionBox, { value: this.getFruitText(fruit), onClick: this._handleClickFruit })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'label',
                            null,
                            'Choice Y'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'edit' },
                            _react2.default.createElement(
                                _picker2.default,
                                {
                                    ref: 'carSelection',
                                    value: [brand, serial],
                                    options: [this.state.brands, this.state.series],
                                    onChange: this._handleCarChange,
                                    width: '600px',
                                    theme: 'dark'
                                },
                                _react2.default.createElement(OptionBox, { value: this.getCarText(brand, serial), onClick: this._handleClickCar })
                            )
                        )
                    )
                );
            }
        }, {
            key: '_handleClickFruit',
            value: function _handleClickFruit(e) {
                this.refs.fruitSelection.show();
            }
        }, {
            key: '_handleFruitChange',
            value: function _handleFruitChange(value, text) {
                this.setState({ fruit: value });
            }
        }, {
            key: '_handleClickCar',
            value: function _handleClickCar(e) {
                this.refs.carSelection.show();
            }
        }, {
            key: '_handleCarChange',
            value: function _handleCarChange(value, text, listIndex) {
                var _this3 = this;

                if (listIndex === 0) {
                    window.clearTimeout(this._updateCarTimer);
                    this._updateCarTimer = window.setTimeout(function () {
                        var series = _this3.getCarSeries(value);
                        _this3.setState({
                            series: series,
                            brand: value,
                            serial: series.length > 0 ? series[0].value : ''
                        });
                    }, 250);
                } else if (listIndex === 1) {
                    this.setState({ serial: value });
                }
            }
        }, {
            key: 'getFruitText',
            value: function getFruitText(fruit) {
                var fruits = this.state.fruits;
                for (var i = 0; i < fruits.length; i++) {
                    var o = fruits[i];
                    if (typeof o === 'string' && o === fruit) return o;
                    if (o && o.text && o.value === fruit) return o.text;
                }
            }
        }, {
            key: 'getCarSeries',
            value: function getCarSeries(brand) {
                for (var i = 0; i < Cars.length; i++) {
                    if (Cars[i].value === brand) return Cars[i].series;
                }
                return [];
            }
        }, {
            key: 'getCarText',
            value: function getCarText(brand, serial) {
                var series = void 0,
                    b = void 0,
                    s = void 0,
                    brands = this.state.brands;
                for (var i = 0; i < brands.length; i++) {
                    if (brands[i].value === brand) {
                        series = brands[i].series;
                        b = brands[i].text;
                        break;
                    }
                }

                if (!series) return;
                for (var _i = 0; _i < series.length; _i++) {
                    if (series[_i].value === serial) {
                        s = series[_i].text;
                        break;
                    }
                }

                return b && s ? b + ' - ' + s : undefined;
            }
        }]);

        return List;
    }(_react.Component);

    List.propTypes = {
        fruit: _propTypes2.default.string,
        brand: _propTypes2.default.string,
        serial: _propTypes2.default.string
    };
    List.defaultProps = {
        brand: '1002',
        serial: '100203'
    };

    var Main = function (_Component3) {
        _inherits(Main, _Component3);

        function Main(props, context) {
            _classCallCheck(this, Main);

            var _this4 = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props, context));

            _this4.state = {
                value: _this4.props.value
            };
            return _this4;
        }

        _createClass(Main, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
        }, {
            key: 'render',
            value: function render() {

                return _react2.default.createElement(
                    'div',
                    { className: 'list-area' },
                    _react2.default.createElement(List, { fruit: defaultFruit })
                );
            }
        }]);

        return Main;
    }(_react.Component);

    Main.propTypes = {
        value: _propTypes2.default.string,
        onClick: _propTypes2.default.func
    };

    _reactDom2.default.render(_react2.default.createElement(Main, null), _es6Dom2.default.nodeById("page-container"));
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = docReady;

function docReady(callback) {

    function completed() {
        document.removeEventListener("DOMContentLoaded", completed, false);
        window.removeEventListener("load", completed, false);
        callback();
    }

    //Events.on(document, 'DOMContentLoaded', completed)

    if (document.readyState === "complete") {
        // Handle it asynchronously to allow scripts the opportunity to delay ready
        setTimeout(callback);
    } else {

        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed, false);

        // A fallback to window.onload, that will always work
        window.addEventListener("load", completed, false);
    }
}

module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function animationFrame(tick) {
    window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
}

var Dom = {
    isDescendant: function isDescendant(parent, child) {
        var node = child.parentNode;

        while (node !== null) {
            if (node === parent) return true;
            node = node.parentNode;
        }

        return false;
    },
    offset: function offset(el) {
        var rect = el.getBoundingClientRect(),
            body = document.body,
            html = document.documentElement,
            scrollTop = html && html.scrollTop ? html.scrollTop : body.scrollTop,
            scrollLeft = html && html.scrollLeft ? html.scrollLeft : body.scrollLeft;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        };
    },
    getStyleAttributeAsNumber: function getStyleAttributeAsNumber(el, attr) {
        var attrStyle = el.style[attr];
        var attrNum = 0;
        if (attrStyle && attrStyle.length) {
            attrNum = parseInt(attrStyle);
        }

        return attrNum;
    },
    addClass: function addClass(el, className) {
        if (el.classList) el.classList.add(className);else el.className += ' ' + className;
    },
    removeClass: function removeClass(el, className) {
        if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    },
    hasClass: function hasClass(el, className) {
        if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    },
    toggleClass: function toggleClass(el, className) {
        if (this.hasClass(el, className)) this.removeClass(el, className);else this.addClass(el, className);
    },
    forceRedraw: function forceRedraw(el) {
        var originalDisplay = el.style.display;

        el.style.display = 'none';
        el.offsetHeight; // no need to store this anywhere, the reference is enough
        el.style.display = originalDisplay;
    },
    withoutTransition: function withoutTransition(el, callback) {
        var originalTransition = el.style.transition;

        //turn off transition
        el.style.transition = null;

        callback();

        //force a redraw
        this.forceRedraw(el);

        //put the transition back
        el.style.transition = originalTransition;
    },
    nodeById: function nodeById(id) {
        return document.getElementById(id);
    },
    nodeBySelector: function nodeBySelector(el, s) {
        return (el || document).querySelector(s);
    },
    nodesBySelector: function nodesBySelector(el, s) {
        return (el || document).querySelectorAll(s);
    },
    text: function text(el, _text) {
        if (typeof _text === 'string') {
            el && (el.innerText = _text);
            return this;
        }
        return el ? el.innerText || el.textContent || '' : '';
    },
    documentWidth: function documentWidth() {
        return Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth);
    },
    documentHeight: function documentHeight() {
        return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    },
    windowWidth: function windowWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
    },
    windowHeight: function windowHeight() {
        return window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    },
    animate: function animate(tick) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
        var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';

        var easings = {
            linear: function linear(t) {
                return t;
            },
            easeInQuad: function easeInQuad(t) {
                return t * t;
            },
            easeOutQuad: function easeOutQuad(t) {
                return t * (2 - t);
            },
            easeInOutQuad: function easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            },
            easeInCubic: function easeInCubic(t) {
                return t * t * t;
            },
            easeOutCubic: function easeOutCubic(t) {
                return --t * t * t + 1;
            },
            easeInOutCubic: function easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            },
            easeInQuart: function easeInQuart(t) {
                return t * t * t * t;
            },
            easeOutQuart: function easeOutQuart(t) {
                return 1 - --t * t * t * t;
            },
            easeInOutQuart: function easeInOutQuart(t) {
                return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
            },
            easeInQuint: function easeInQuint(t) {
                return t * t * t * t * t;
            },
            easeOutQuint: function easeOutQuint(t) {
                return 1 + --t * t * t * t * t;
            },
            easeInOutQuint: function easeInOutQuint(t) {
                return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
            }
        };

        var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        var _tick = function _tick() {
            var now = 'now' in window.performance ? performance.now() : new Date().getTime(),
                time = duration <= 0 ? 1 : Math.min(1, (now - startTime) / duration);
            var percent = easings[easing](time);
            if (duration <= 0 || !tick(percent)) return;

            animationFrame(_tick);
        };

        _tick();
    },
    scrollTo: function scrollTo(x, y) {
        var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
        var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'linear';

        var startX = window.pageXOffset,
            startY = window.pageYOffset,
            docW = Dom.documentWidth(),
            docH = Dom.documentHeight(),
            winW = Dom.windowWidth(),
            winH = Dom.windowHeight(),
            offsetLeft = Math.round(docW - x < winW ? docW - winW : x),
            offsetTop = Math.round(docH - y < winH ? docH - winH : y);

        Dom.animate(function (percent) {
            var scrollLeft = Math.ceil(percent * (offsetLeft - startX) + startX),
                scrollTop = Math.ceil(percent * (offsetTop - startY) + startY);

            window.scroll(scrollLeft, scrollTop);

            return window.pageXOffset < offsetLeft || window.pageYOffset < offsetTop;
        }, duration, easing);
    }
};

exports.default = Dom;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactTapper = __webpack_require__(7);

var _reactTapper2 = _interopRequireDefault(_reactTapper);

var _es6Viewpoint = __webpack_require__(11);

var _es6Viewpoint2 = _interopRequireDefault(_es6Viewpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

var Picker = function (_Component) {
    _inherits(Picker, _Component);

    function Picker(props, context) {
        _classCallCheck(this, Picker);

        var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props, context));

        _this.state = {
            value: _this.props.value,
            options: _this.props.options,
            open: false,
            optionHeight: 0,
            _scrollStartTop: [],
            _initValueIndexes: [],
            _scrollTimer: undefined,
            closeable: false
        };

        _this._handleOverlayTouchTap = _this._handleOverlayTouchTap.bind(_this);
        _this._onPageScroll = _this._onPageScroll.bind(_this);
        _this._onScroll = _this._onScroll.bind(_this);
        _this._clickOnOption = _this._clickOnOption.bind(_this);
        return _this;
    }

    _createClass(Picker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var values = nextProps.value,
                opArr = nextProps.options,
                preValues = this.state.value,
                preOpArr = this.state.options,
                opHeight = this.state.optionHeight;
            if (!Array.isArray(values)) {
                values = [values];
                opArr = [opArr];
                preValues = [preValues];
                preOpArr = [preOpArr];
            }
            values.forEach(function (v, idx) {
                if (values[idx] !== preValues[idx] || opArr[idx] !== preOpArr[idx]) {
                    var ops = opArr[idx],
                        top = 0;
                    for (var oi = 0; oi < ops.length; oi++) {
                        var opv = typeof ops[oi] === 'string' || typeof ops[oi] === 'number' ? ops[oi] : ops[oi].value;
                        if (String(opv) === String(v)) {
                            top = oi * opHeight;
                            break;
                        }
                    }
                    var node = _this2.refs['list-' + idx];
                    node.scrollTop = _this2.state._scrollStartTop[idx] = top;
                }
            });

            this.setState({
                value: nextProps.value,
                options: nextProps.options
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            var op = this.refs['op-0-0'],
                opHeight = 0;
            if (op) {
                opHeight = this.state.optionHeight = _reactDom2.default.findDOMNode(op).clientHeight;
            }
            this.state._initValueIndexes.forEach(function (vi, idx) {
                if (vi > 0) {
                    var node = _this3.refs['list-' + idx];
                    node.scrollTop = _this3.state._scrollStartTop[idx] = vi * opHeight;
                }
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'value',
        value: function value() {
            return this.state.value;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var values = this.state.value,
                __options = this.state.options;
            if (!Array.isArray(values)) {
                values = [values];
                __options = [__options];
            }

            var initValueIndexes = [];
            var style = {
                width: 100 / __options.length + '%'
            };
            var i = -1;
            var lists = __options.map(function (options) {
                if (!options) return;
                i++;
                var j = -1;
                return _react2.default.createElement(
                    'div',
                    {
                        key: i,
                        ref: 'list-' + i,
                        'data-id': i,
                        className: 'list-wrap',
                        style: style,
                        onScroll: isBrowser ? _this4._onScroll : undefined
                    },
                    _react2.default.createElement(
                        'ul',
                        null,
                        options.map(function (op) {
                            j++;
                            if (typeof op === 'string' || typeof op === 'number') {
                                op = {
                                    text: op,
                                    value: op
                                };
                            } else if ((typeof op === 'undefined' ? 'undefined' : _typeof(op)) !== 'object' || !op.text) return;
                            if (typeof op.value !== 'string' && typeof op.value !== 'number') op.value = '';

                            if (String(op.value) === String(values[i])) {
                                initValueIndexes.push(j);
                            }

                            return _react2.default.createElement(
                                _reactTapper2.default,
                                { key: j,
                                    ref: 'op-' + i + '-' + j,
                                    'data-id': i + '-' + j,
                                    'data-value': JSON.stringify(op),
                                    component: 'li',
                                    onTap: _this4._clickOnOption
                                },
                                op.text
                            );
                        })
                    )
                );
            });

            this.state._initValueIndexes = initValueIndexes;

            var popupStyle = {};
            if (this.props.width && _es6Viewpoint2.default && _es6Viewpoint2.default.width >= 768) {
                popupStyle.width = this.props.width;
            }

            return _react2.default.createElement(
                'div',
                { className: ["picker", this.props.className].join(' ') },
                this.props.children,
                _react2.default.createElement(
                    'div',
                    { className: ["container", "table", this.props.className, this.state.open ? "show" : undefined].join(' ') },
                    _react2.default.createElement(_reactTapper2.default, { className: 'overlay', onTap: this._handleOverlayTouchTap }),
                    _react2.default.createElement(
                        'div',
                        { className: 'cell' },
                        _react2.default.createElement(
                            'div',
                            { className: ["popup", this.props.theme, this.state.open ? "show" : undefined].join(' '), style: popupStyle },
                            lists,
                            _react2.default.createElement('div', { className: 'cover upper' }),
                            _react2.default.createElement('div', { className: 'cover lower' })
                        )
                    )
                )
            );
        }
    }, {
        key: 'dismiss',
        value: function dismiss() {
            if (this.state.closeable) {
                this._onDismiss();
            }
        }
    }, {
        key: 'show',
        value: function show() {
            this._onShow();
        }
    }, {
        key: '_handleOverlayTouchTap',
        value: function _handleOverlayTouchTap() {
            if (this.state.closeable) {
                this._onDismiss();
                this.props.onClickAway && this.props.onClickAway();
            }
        }
    }, {
        key: '_onShow',
        value: function _onShow() {
            setTimeout(function () {
                this.state.closeable = true;
            }.bind(this), 250);
            this.setState({ open: true });
            this.props.onShow && this.props.onShow();
        }
    }, {
        key: '_onDismiss',
        value: function _onDismiss() {
            this.setState({ open: false, loading: false });
            this.props.onDismiss && this.props.onDismiss();
        }
    }, {
        key: '_onPageScroll',
        value: function _onPageScroll(e) {}
    }, {
        key: '_onScroll',
        value: function _onScroll(e) {
            var _this5 = this;

            var el = e.target,
                idx = parseInt(el.dataset ? el.dataset.id : el.getAttribute('data-id'), 10),
                opHeight = this.state.optionHeight,
                scrollStartTop = this.state._scrollStartTop;

            window.clearTimeout(this.state._scrollTimer);
            this.state._scrollTimer = window.setTimeout(function () {
                if (typeof scrollStartTop[idx] !== 'number') scrollStartTop[idx] = 0;
                if (scrollStartTop[idx] === el.scrollTop) return;

                var scrollTop = el.scrollTop,
                    mod = scrollTop % opHeight,
                    percent = mod / opHeight;

                var toLowerItem = function toLowerItem() {
                    var diff = opHeight - mod;
                    scrollTop += diff;
                    el.scrollTop += diff;
                };
                var toUpperItem = function toUpperItem() {
                    scrollTop -= mod;
                    el.scrollTop -= mod;
                };

                if (scrollTop > scrollStartTop[idx]) {
                    percent > 0.46 ? toLowerItem() : toUpperItem();
                } else {
                    percent < 0.64 ? toUpperItem() : toLowerItem();
                }
                scrollStartTop[idx] = scrollTop;

                var opname = 'op-' + idx + '-' + scrollTop / opHeight;
                var op = _reactDom2.default.findDOMNode(_this5.refs[opname]).getAttribute('data-value');
                if (!op) return;
                op = JSON.parse(op);

                var value = _this5.state.value;
                if (Array.isArray(value)) {
                    value[idx] = op.value;
                } else {
                    value = op.value;
                }
                _this5.setState({
                    value: value
                });
                _this5.props.onChange(op.value, op.text, idx);
            }, 250);
        }
    }, {
        key: '_clickOnOption',
        value: function _clickOnOption(e) {
            var el = e.target,
                value = el.dataset ? el.dataset.id : el.getAttribute('data-id');
            if (!value) return;

            var arr = value.split('-');
            if (arr.length < 2) return;

            var _list = this.refs['list-' + arr[0]];
            if (!_list) return;
            var list = _list;
            list.scrollTop = this.state.optionHeight * parseInt(arr[1], 10);
        }
    }]);

    return Picker;
}(_react.Component);

Picker.propTypes = {
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.array]).isRequired,
    options: _propTypes2.default.array.isRequired,
    onChange: _propTypes2.default.func,
    onShow: _propTypes2.default.func,
    onDismiss: _propTypes2.default.func,
    onClickAway: _propTypes2.default.func,
    width: _propTypes2.default.string,
    theme: _propTypes2.default.string
};
Picker.defaultProps = {
    onChange: function onChange(value, text, idx) {},
    theme: 'light'
};
exports.default = Picker;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _touchSupport = __webpack_require__(8);

var _touchSupport2 = _interopRequireDefault(_touchSupport);

var _touchStyles = __webpack_require__(10);

var _touchStyles2 = _interopRequireDefault(_touchStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var Tappable = function (_Component) {
    _inherits(Tappable, _Component);

    function Tappable(props, context) {
        _classCallCheck(this, Tappable);

        var _this = _possibleConstructorReturn(this, (Tappable.__proto__ || Object.getPrototypeOf(Tappable)).call(this, props, context));

        _this.state = _this.getInitialState();

        _this.touchable = (0, _touchSupport2.default)();
        return _this;
    }

    _createClass(Tappable, [{
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                x: null,
                y: null,
                swiping: false,
                start: 0
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                style = {};
            _extends(style, _touchStyles2.default, props.style);

            var newComponentProps = _extends({}, props, {
                style: style,
                className: props.className,
                disabled: props.disabled
                //, handlers: this.handlers
            }, this.handlers());

            delete newComponentProps.onTap;
            delete newComponentProps.onPress;
            delete newComponentProps.onPinchStart;
            delete newComponentProps.onPinchMove;
            delete newComponentProps.onPinchEnd;
            delete newComponentProps.moveThreshold;
            delete newComponentProps.pressDelay;
            delete newComponentProps.pressMoveThreshold;
            delete newComponentProps.preventDefault;
            delete newComponentProps.stopPropagation;
            delete newComponentProps.component;
            delete newComponentProps.flickThreshold;
            delete newComponentProps.delta;
            //delete newComponentProps.handlers

            return (0, _react.createElement)(props.component, newComponentProps, props.children);
        }
    }, {
        key: 'calculatePos',
        value: function calculatePos(e) {
            var x = e.changedTouches[0].clientX;
            var y = e.changedTouches[0].clientY;

            var xd = this.state.x - x;
            var yd = this.state.y - y;

            var axd = Math.abs(xd);
            var ayd = Math.abs(yd);

            return {
                deltaX: xd,
                deltaY: yd,
                absX: axd,
                absY: ayd
            };
        }
    }, {
        key: 'touchStart',
        value: function touchStart(e) {
            if (e.touches.length > 1) {
                return;
            }

            if (!this.touchable) {
                console.debug('Damn! You are using a non-touchable browser simulating touch events!');
                this.touchable = true;
            }

            this.setState({
                start: Date.now(),
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
                swiping: false
            });
        }
    }, {
        key: 'touchMove',
        value: function touchMove(e) {
            if (!this.state.x || !this.state.y || e.touches.length > 1) {
                return;
            }

            var cancelPageSwipe = false;
            var pos = this.calculatePos(e);

            if (pos.absX < this.props.delta && pos.absY < this.props.delta) {
                return;
            }

            if (pos.absX > pos.absY) {
                if (pos.deltaX > 0) {
                    if (this.props.onSwipingLeft) {
                        this.props.onSwipingLeft(e, pos.absX);
                        cancelPageSwipe = true;
                    }
                } else {
                    if (this.props.onSwipingRight) {
                        this.props.onSwipingRight(e, pos.absX);
                        cancelPageSwipe = true;
                    }
                }
            } else {
                if (pos.deltaY > 0) {
                    if (this.props.onSwipingUp) {
                        this.props.onSwipingUp(e, pos.absY);
                        cancelPageSwipe = true;
                    }
                } else {
                    if (this.props.onSwipingDown) {
                        this.props.onSwipingDown(e, pos.absY);
                        cancelPageSwipe = true;
                    }
                }
            }

            this.setState({ swiping: true });

            if (cancelPageSwipe) {
                e.preventDefault();
            }
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd(ev) {
            if (this.state.swiping) {
                var pos = this.calculatePos(ev);

                var time = Date.now() - this.state.start;
                var velocity = Math.sqrt(pos.absX * pos.absX + pos.absY * pos.absY) / time;
                var isFlick = velocity > this.props.flickThreshold;

                this.props.onSwiped && this.props.onSwiped(ev, pos.deltaX, pos.deltaY, isFlick);

                if (pos.absX > pos.absY) {
                    if (pos.deltaX > 0) {
                        this.props.onSwipedLeft && this.props.onSwipedLeft(ev, pos.deltaX);
                    } else {
                        this.props.onSwipedRight && this.props.onSwipedRight(ev, pos.deltaX);
                    }
                } else {
                    if (pos.deltaY > 0) {
                        this.props.onSwipedUp && this.props.onSwipedUp(ev, pos.deltaY);
                    } else {
                        this.props.onSwipedDown && this.props.onSwipedDown(ev, pos.deltaY);
                    }
                }
            } else {
                this._handleTap(ev);
            }

            this.setState(this.getInitialState());
        }
    }, {
        key: 'touchCancel',
        value: function touchCancel(ev) {
            this.setState(this.getInitialState());
        }
    }, {
        key: '_handleClick',
        value: function _handleClick(ev) {
            var _this2 = this;

            //!this.touchable && this._handleTap(ev)
            if (this.state.start === 0) {
                this._handleTap(ev);
            } else {
                setTimeout(function () {
                    _this2.state.start === 0 && _this2._handleTap(ev);
                }, 300);
            }
        }
    }, {
        key: '_handleTap',
        value: function _handleTap(ev) {
            this.props.onTap && this.props.onTap(ev);
        }
    }, {
        key: 'handlers',
        value: function handlers() {
            return {
                onTouchStart: this.touchStart.bind(this),
                onTouchMove: this.touchMove.bind(this),
                onTouchEnd: this.touchEnd.bind(this),
                onTouchCancel: this.touchCancel.bind(this),
                onClick: this._handleClick.bind(this)
            };
        }
    }]);

    return Tappable;
}(_react.Component);

Tappable.propTypes = {
    component: _propTypes2.default.any,
    onTap: _propTypes2.default.func,

    onSwiped: _propTypes2.default.func,
    onSwipingUp: _propTypes2.default.func,
    onSwipingRight: _propTypes2.default.func,
    onSwipingDown: _propTypes2.default.func,
    onSwipingLeft: _propTypes2.default.func,
    onSwipedUp: _propTypes2.default.func,
    onSwipedRight: _propTypes2.default.func,
    onSwipedDown: _propTypes2.default.func,
    onSwipedLeft: _propTypes2.default.func,
    flickThreshold: _propTypes2.default.number,
    delta: _propTypes2.default.number
};
Tappable.defaultProps = {
    component: 'div',
    flickThreshold: 0.6,
    delta: 10
};
exports.default = Tappable;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _eventSupport = __webpack_require__(9);

var _eventSupport2 = _interopRequireDefault(_eventSupport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __TouchSupported = void 0;
var touchSupport = function touchSupport() {
    if (typeof __TouchSupported === 'boolean') return __TouchSupported;

    __TouchSupported = (0, _eventSupport2.default)("touchstart"); //("ontouchstart" in document.documentElement)
    return __TouchSupported;
};

exports.default = touchSupport;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var TAGNAMES = {
    'select': 'input',
    'change': 'input',
    'submit': 'form',
    'reset': 'form',
    'error': 'img',
    'load': 'img',
    'abort': 'img'
};

var eventSupport = function eventSupport(eventName) {
    //to support compilation in server-side
    if (typeof window === "undefined" || typeof document === "undefined") return false;
    var el = document.createElement(TAGNAMES[eventName] || 'div');
    eventName = 'on' + eventName;
    var isSupported = eventName in el;
    if (!isSupported) {
        el.setAttribute(eventName, 'return;');
        isSupported = typeof el[eventName] == 'function';
    }
    el = null;
    return isSupported;
};

exports.default = eventSupport;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var touchStyles = {
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none'
    //cursor: 'pointer'
};

exports.default = touchStyles;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewPoint = function () {
    function ViewPoint() {
        _classCallCheck(this, ViewPoint);

        this.width = 0;
        this.height = 0;
        this.colorDepth = 0;
        this.pixelDepth = 0;

        if (typeof window === "undefined") return;

        if (window && window.screen) {
            this.width = window.screen.width;
            this.height = window.screen.height;
            this.colorDepth = window.screen.colorDepth;
            this.pixelDepth = window.screen.pixelDepth;
        }

        this.detect();
    }

    _createClass(ViewPoint, [{
        key: 'detect',
        value: function detect() {
            if (window && typeof window.innerWidth !== 'undefined') {
                this.width = window.innerWidth;
                this.height = window.innerHeight;
            }

            // IE6
            else if (document && typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth !== 0) {
                    this.width = document.documentElement.clientWidth;
                    this.height = document.documentElement.clientHeight;
                }

                //Older IE
                else if (document) {
                        this.width = document.getElementsByTagName('body')[0].clientWidth;
                        this.height = document.getElementsByTagName('body')[0].clientHeight;
                    }
        }
    }]);

    return ViewPoint;
}();

var viewpoint = new ViewPoint();

exports.default = viewpoint;


/***/ })
/******/ ]);