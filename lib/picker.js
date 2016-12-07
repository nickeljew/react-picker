'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Month-Picker
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Properties:
                                                                                                                                                                                                                                                                               * @value: Default selected option value
                                                                                                                                                                                                                                                                               * @options: Options of the picker
                                                                                                                                                                                                                                                                               * @onChange: callback on changing selected option
                                                                                                                                                                                                                                                                               * @onShow: callback on calling show method
                                                                                                                                                                                                                                                                               * @onDismiss: callback on calling dismiss method
                                                                                                                                                                                                                                                                               * @onClickAway: callback on clicking area outside the picker panel
                                                                                                                                                                                                                                                                               * @width: width of the picker panel
                                                                                                                                                                                                                                                                               * @theme: theme setting of month-picker; 2 options (light/dark); default theme is light
                                                                                                                                                                                                                                                                               */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactTapper = require('react-tapper');

var _reactTapper2 = _interopRequireDefault(_reactTapper);

var _es6Viewpoint = require('es6-viewpoint');

var _es6Viewpoint2 = _interopRequireDefault(_es6Viewpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

var Picker = _react2.default.createClass({
    displayName: 'Picker',


    propTypes: {
        value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.array]).isRequired,
        options: _react2.default.PropTypes.array.isRequired,
        onChange: _react2.default.PropTypes.func,
        onShow: _react2.default.PropTypes.func,
        onDismiss: _react2.default.PropTypes.func,
        onClickAway: _react2.default.PropTypes.func,
        width: _react2.default.PropTypes.string,
        theme: _react2.default.PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            onChange: function onChange(value, text, idx) {},
            theme: 'light'
        };
    },
    getInitialState: function getInitialState() {
        return {
            value: this.props.value,
            options: this.props.options,
            open: false,
            optionHeight: 0,
            _scrollStartTop: [],
            _initValueIndexes: [],
            _scrollTimer: undefined,
            closeable: false
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var _this = this;

        //if ( Array.isArray(nextProps.value) ) {
        //    nextProps.value.forEach((v, idx) => {
        //        if (this.state.options[idx] && this.state.options[idx] !== nextProps.options[idx]) {
        //            let node = this.refs['list-'+idx] //div, ReactDOM.findDOMNode( this.refs['list-'+idx] )
        //            node.scrollTop = this.state._scrollStartTop[idx] = 0
        //        }
        //    })
        //}

        //fixed scrollTop when update props
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
                var node = _this.refs['list-' + idx]; //div, ReactDOM.findDOMNode( this.refs['list-'+idx] )
                node.scrollTop = _this.state._scrollStartTop[idx] = top;
            }
        });

        this.setState({
            value: nextProps.value,
            options: nextProps.options
        });
    }

    //, optionHeight: 0
    ,
    componentDidMount: function componentDidMount() {
        var _this2 = this;

        var op = this.refs['op-0-0'],
            opHeight = 0;
        if (op) {
            opHeight = this.state.optionHeight = _reactDom2.default.findDOMNode(op).clientHeight;
        }
        this.state._initValueIndexes.forEach(function (vi, idx) {
            if (vi > 0) {
                var node = _this2.refs['list-' + idx]; //div, ReactDOM.findDOMNode( this.refs['list-'+idx] )
                node.scrollTop = _this2.state._scrollStartTop[idx] = vi * opHeight;
            }
        });
        //window.addEventListener('scroll', this._onPageScroll)
    },
    componentWillUnmount: function componentWillUnmount() {
        //window.removeEventListener('scroll', this._onPageScroll)
    },
    value: function value() {
        return this.state.value;
    },
    render: function render() {
        var _this3 = this;

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
        var i = -1; //counter for __options, for it is an array or key-map object
        var lists = __options.map(function (options) {
            if (!options) return;
            i++;
            var j = -1; //counter for options, for it is an array or key-map object
            return _react2.default.createElement(
                'div',
                {
                    key: i,
                    ref: 'list-' + i,
                    'data-id': i,
                    className: 'list-wrap',
                    style: style,
                    onScroll: isBrowser ? _this3._onScroll : undefined
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
                                onTap: _this3._clickOnOption
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
    },
    dismiss: function dismiss() {
        if (this.state.closeable) {
            this._onDismiss();
        }
    },
    show: function show() {
        // prevent rapid show/hide
        this._onShow();
    },
    _handleOverlayTouchTap: function _handleOverlayTouchTap() {
        if (this.state.closeable) {
            this._onDismiss();
            this.props.onClickAway && this.props.onClickAway();
        }
    },
    _onShow: function _onShow() {
        setTimeout(function () {
            this.state.closeable = true;
        }.bind(this), 250);
        this.setState({ open: true });
        this.props.onShow && this.props.onShow();
    },
    _onDismiss: function _onDismiss() {
        this.setState({ open: false, loading: false });
        this.props.onDismiss && this.props.onDismiss();
    },
    _onPageScroll: function _onPageScroll(e) {},
    _onScroll: function _onScroll(e) {
        var _this4 = this;

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
            var op = _reactDom2.default.findDOMNode(_this4.refs[opname]).getAttribute('data-value');
            if (!op) return;
            op = JSON.parse(op);

            var value = _this4.state.value;
            if (Array.isArray(value)) {
                value[idx] = op.value;
            } else {
                value = op.value;
            }
            _this4.setState({
                value: value
            });
            _this4.props.onChange(op.value, op.text, idx);
        }, 250);
    },
    _clickOnOption: function _clickOnOption(e) {
        var el = e.target,
            value = el.dataset ? el.dataset.id : el.getAttribute('data-id');
        if (!value) return;

        var arr = value.split('-');
        if (arr.length < 2) return;

        var _list = this.refs['list-' + arr[0]];
        if (!_list) return;
        var list = _list; //div, ReactDOM.findDOMNode(_list)
        list.scrollTop = this.state.optionHeight * parseInt(arr[1], 10);
    }
});

exports.default = Picker;
