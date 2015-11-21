'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _touchSupport = require('./touch-support');

var _touchSupport2 = _interopRequireDefault(_touchSupport);

var _touchStyles = require('./touch-styles');

var _touchStyles2 = _interopRequireDefault(_touchStyles);

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var Tappable = _react2['default'].createClass({
    displayName: 'Tappable',

    propTypes: {
        component: _react2['default'].PropTypes.any,
        onTap: _react2['default'].PropTypes.func,

        onSwiped: _react2['default'].PropTypes.func,
        onSwipingUp: _react2['default'].PropTypes.func,
        onSwipingRight: _react2['default'].PropTypes.func,
        onSwipingDown: _react2['default'].PropTypes.func,
        onSwipingLeft: _react2['default'].PropTypes.func,
        onSwipedUp: _react2['default'].PropTypes.func,
        onSwipedRight: _react2['default'].PropTypes.func,
        onSwipedDown: _react2['default'].PropTypes.func,
        onSwipedLeft: _react2['default'].PropTypes.func,
        flickThreshold: _react2['default'].PropTypes.number,
        delta: _react2['default'].PropTypes.number
    },
    touchable: (0, _touchSupport2['default'])(),
    getDefaultProps: function getDefaultProps() {
        return {
            component: 'div',
            flickThreshold: 0.6,
            delta: 10
        };
    },
    getInitialState: function getInitialState() {
        return {
            x: null,
            y: null,
            swiping: false,
            start: 0
        };
    },

    calculatePos: function calculatePos(e) {
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
    },

    touchStart: function touchStart(e) {
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
    },

    touchMove: function touchMove(e) {
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
    },

    touchEnd: function touchEnd(ev) {
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
    },

    _handleClick: function _handleClick(ev) {
        !this.touchable && this._handleTap(ev);
    },
    _handleTap: function _handleTap(ev) {
        this.props.onTap && this.props.onTap(ev);
    },

    handlers: function handlers() {
        return {
            onTouchStart: this.touchStart,
            onTouchMove: this.touchMove,
            onTouchEnd: this.touchEnd,
            onClick: this._handleClick
        };
    },

    render: function render() {

        var props = this.props,
            style = {};
        _extends(style, _touchStyles2['default'], props.style);

        var newComponentProps = _extends({}, props, {
            style: style,
            className: props.className,
            disabled: props.disabled,
            handlers: this.handlers
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

        return _react2['default'].createElement(props.component, newComponentProps, props.children);
    }
});

exports['default'] = Tappable;
module.exports = exports['default'];
