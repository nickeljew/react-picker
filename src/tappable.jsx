import React from 'react'
import touchSupported from './touch-support'
import touchStyles from './touch-styles'


let _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }


let Tappable = React.createClass({
    propTypes: {
        component: React.PropTypes.any,
        onTap: React.PropTypes.func,


        onSwiped: React.PropTypes.func,
        onSwipingUp: React.PropTypes.func,
        onSwipingRight: React.PropTypes.func,
        onSwipingDown: React.PropTypes.func,
        onSwipingLeft: React.PropTypes.func,
        onSwipedUp: React.PropTypes.func,
        onSwipedRight: React.PropTypes.func,
        onSwipedDown: React.PropTypes.func,
        onSwipedLeft: React.PropTypes.func,
        flickThreshold: React.PropTypes.number,
        delta: React.PropTypes.number,
    }
    , touchable: touchSupported()
    , getDefaultProps () {
        return {
            component: 'div',
            flickThreshold: 0.6,
            delta: 10,
        }
    }
    , getInitialState () {
        return {
            x: null,
            y: null,
            swiping: false,
            start: 0
        }
    }

    , calculatePos (e) {
        let x = e.changedTouches[0].clientX
        let y = e.changedTouches[0].clientY

        let xd = this.state.x - x
        let yd = this.state.y - y

        let axd = Math.abs(xd)
        let ayd = Math.abs(yd)

        return {
            deltaX: xd,
            deltaY: yd,
            absX: axd,
            absY: ayd
        }
    }

    , touchStart (e) {
        if (e.touches.length > 1) {
            return
        }

        if (!this.touchable) {
            console.debug('Damn! You are using a non-touchable browser simulating touch events!')
            this.touchable = true
        }

        this.setState({
            start: Date.now(),
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
            swiping: false
        })
    }

    , touchMove (e) {
        if (!this.state.x || !this.state.y || e.touches.length > 1) {
            return
        }

        let cancelPageSwipe = false
        let pos = this.calculatePos(e)

        if (pos.absX < this.props.delta && pos.absY < this.props.delta) {
            return
        }

        if (pos.absX > pos.absY) {
            if (pos.deltaX > 0) {
                if (this.props.onSwipingLeft) {
                    this.props.onSwipingLeft(e, pos.absX)
                    cancelPageSwipe = true
                }
            } else {
                if (this.props.onSwipingRight) {
                    this.props.onSwipingRight(e, pos.absX)
                    cancelPageSwipe = true
                }
            }
        } else {
            if (pos.deltaY > 0) {
                if (this.props.onSwipingUp) {
                    this.props.onSwipingUp(e, pos.absY)
                    cancelPageSwipe = true
                }
            } else {
                if (this.props.onSwipingDown) {
                    this.props.onSwipingDown(e, pos.absY)
                    cancelPageSwipe = true
                }
            }
        }

        this.setState({ swiping: true })

        if (cancelPageSwipe) {
            e.preventDefault()
        }
    }

    , touchEnd (ev) {
        if (this.state.swiping) {
            let pos = this.calculatePos(ev)

            let time = Date.now() - this.state.start
            let velocity = Math.sqrt(pos.absX * pos.absX + pos.absY * pos.absY) / time
            let isFlick = velocity > this.props.flickThreshold

            this.props.onSwiped && this.props.onSwiped(
                ev,
                pos.deltaX,
                pos.deltaY,
                isFlick
            )

            if (pos.absX > pos.absY) {
                if (pos.deltaX > 0) {
                    this.props.onSwipedLeft && this.props.onSwipedLeft(ev, pos.deltaX)
                } else {
                    this.props.onSwipedRight && this.props.onSwipedRight(ev, pos.deltaX)
                }
            } else {
                if (pos.deltaY > 0) {
                    this.props.onSwipedUp && this.props.onSwipedUp(ev, pos.deltaY)
                } else {
                    this.props.onSwipedDown && this.props.onSwipedDown(ev, pos.deltaY)
                }
            }
        } else {
            this._handleTap(ev)
        }

        this.setState(this.getInitialState())
    }

    , _handleClick(ev) {
        !this.touchable && this._handleTap(ev)
    }
    , _handleTap(ev) {
        this.props.onTap && this.props.onTap(ev)
    }

    , handlers() {
        return {
            onTouchStart: this.touchStart,
            onTouchMove: this.touchMove,
            onTouchEnd: this.touchEnd,
            onClick: this._handleClick,
        };
    }

    , render () {

        let props = this.props
            , style = {}
        _extends(style, touchStyles, props.style)

        let newComponentProps = _extends({}, props, {
            style: style,
            className: props.className,
            disabled: props.disabled,
            handlers: this.handlers
        }, this.handlers())

        delete newComponentProps.onTap
        delete newComponentProps.onPress
        delete newComponentProps.onPinchStart
        delete newComponentProps.onPinchMove
        delete newComponentProps.onPinchEnd;
        delete newComponentProps.moveThreshold;
        delete newComponentProps.pressDelay;
        delete newComponentProps.pressMoveThreshold;
        delete newComponentProps.preventDefault;
        delete newComponentProps.stopPropagation;
        delete newComponentProps.component;

        return React.createElement(props.component, newComponentProps, props.children)
    }
})

export default Tappable