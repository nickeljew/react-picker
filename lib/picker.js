'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Picker = _react2['default'].createClass({
    displayName: 'Picker',

    propTypes: {
        value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number, _react2['default'].PropTypes.array]).isRequired,
        options: _react2['default'].PropTypes.array.isRequired,
        onChange: _react2['default'].PropTypes.func,
        onShow: _react2['default'].PropTypes.func,
        onDismiss: _react2['default'].PropTypes.func,
        onClickAway: _react2['default'].PropTypes.func
    },

    getDefaultProps: function getDefaultProps() {
        return {
            onChange: function onChange(value, text, idx) {}
        };
    },

    getInitialState: function getInitialState() {
        return {
            value: this.props.value,
            options: this.props.options,
            open: false
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value,
            options: nextProps.options
        });
    },

    optionHeight: 0,
    componentDidMount: function componentDidMount() {
        var _this = this;

        var op = this.refs['op-0-0'];
        if (op) {
            this.optionHeight = _react2['default'].findDOMNode(op).clientHeight;
        }
        this._initValueIndexes.forEach(function (vi, idx) {
            if (vi > 0) {
                var node = _react2['default'].findDOMNode(_this.refs['list-' + idx]);
                node.scrollTop = _this._scrollStartTop = vi * _this.optionHeight;
            }
        });
    },
    componentWillUnmount: function componentWillUnmount() {},

    value: function value() {
        return this.state.value;
    },

    render: function render() {
        var _this2 = this;

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
            return _react2['default'].createElement(
                'div',
                {
                    key: i,
                    ref: 'list-' + i,
                    'data-id': i,
                    className: 'list-wrap',
                    style: style,
                    onScroll: _this2._onScroll
                },
                _react2['default'].createElement(
                    'ul',
                    null,
                    options.map(function (op) {
                        j++;
                        if (typeof op === 'string' || typeof op === 'number') {
                            op = {
                                text: op,
                                value: op
                            };
                        } else if (typeof op !== 'object' || !op.text || !op.value) return;

                        if (String(op.value) === String(values[i])) {
                            initValueIndexes.push(j);
                        }

                        return _react2['default'].createElement(
                            'li',
                            { key: j,
                                ref: 'op-' + i + '-' + j,
                                'data-id': i + '-' + j,
                                'data-value': JSON.stringify(op),
                                onClick: _this2._clickOnOption
                            },
                            op.text
                        );
                    })
                )
            );
        });

        this._initValueIndexes = initValueIndexes;

        return _react2['default'].createElement(
            'div',
            { className: ["picker", this.props.className].join(' ') },
            this.props.children,
            _react2['default'].createElement(
                'div',
                { className: ["container", "table", this.props.className, this.state.open ? "show" : undefined].join(' ') },
                _react2['default'].createElement('div', { className: 'overlay', onClick: this._handleOverlayTouchTap }),
                _react2['default'].createElement(
                    'div',
                    { className: 'cell' },
                    _react2['default'].createElement(
                        'div',
                        { className: ["popup", this.state.open ? "show" : undefined].join(' ') },
                        lists,
                        _react2['default'].createElement('div', { className: 'cover upper' }),
                        _react2['default'].createElement('div', { className: 'cover lower' })
                    )
                )
            )
        );
    },

    closeable: false,

    dismiss: function dismiss() {
        if (this.closeable) {
            this._onDismiss();
        }
    },

    show: function show() {
        this._onShow();
    },

    _handleOverlayTouchTap: function _handleOverlayTouchTap() {
        if (this.closeable) {
            this._onDismiss();
            this.props.onClickAway && this.props.onClickAway();
        }
    },

    _onShow: function _onShow() {
        setTimeout((function () {
            this.closeable = true;
        }).bind(this), 250);
        this.setState({ open: true });
        this.props.onShow && this.props.onShow();
    },

    _onDismiss: function _onDismiss() {
        this.setState({ open: false, loading: false });
        this.props.onDismiss && this.props.onDismiss();
    },

    _onPageScroll: function _onPageScroll(e) {},

    _scrollStartTop: 0,
    _scrollTimer: undefined,
    _onScroll: function _onScroll(e) {
        var _this3 = this;

        var el = e.target,
            idx = parseInt(el.dataset ? el.dataset.id : el.getAttribute('data-id'), 10),
            opHeight = this.optionHeight;

        window.clearTimeout(this._scrollTimer);
        this._scrollTimer = window.setTimeout(function () {
            if (_this3._scrollStartTop === el.scrollTop) return;

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

            if (scrollTop > _this3._scrollStartTop) {
                percent > 0.46 ? toLowerItem() : toUpperItem();
            } else {
                percent < 0.64 ? toUpperItem() : toLowerItem();
            }
            _this3._scrollStartTop = scrollTop;

            var opname = 'op-' + idx + '-' + scrollTop / opHeight;
            var op = _react2['default'].findDOMNode(_this3.refs[opname]).getAttribute('data-value');
            if (!op) return;
            op = JSON.parse(op);

            var value = _this3.state.value;
            if (Array.isArray(value)) {
                value[idx] = op.value;
            } else {
                value = op.value;
            }
            _this3.setState({
                value: value
            });
            _this3.props.onChange(op.value, op.text, idx);
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
        var list = _react2['default'].findDOMNode(_list);
        list.scrollTop = this.optionHeight * parseInt(arr[1], 10);
    }

});

exports['default'] = Picker;
module.exports = exports['default'];
