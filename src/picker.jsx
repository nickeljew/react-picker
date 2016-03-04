import React from 'react'
import ReactDOM from 'react-dom'
import Tappable from 'react-tapper'
import ViewPoint from 'es6-viewpoint'


const isBrowser = (typeof window !== "undefined" && typeof document !== "undefined")


const Picker = React.createClass({

    propTypes: {
        value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.array]).isRequired
        , options: React.PropTypes.array.isRequired
        , onChange: React.PropTypes.func
        , onShow: React.PropTypes.func
        , onDismiss: React.PropTypes.func
        , onClickAway: React.PropTypes.func
        , width: React.PropTypes.string
    }

    , getDefaultProps () {
        return {
            onChange(value, text, idx) {}
        }
    }

    , getInitialState () {
        return {
            value: this.props.value
            , options: this.props.options
            , open: false
            , optionHeight: 0
            , _scrollStartTop: []
            , _initValueIndexes: []
            , _scrollTimer: undefined
            , closeable: false
        }
    }
    , componentWillReceiveProps(nextProps){
        if ( Array.isArray(nextProps.value) ) {
            nextProps.value.forEach((v, idx) => {
                if (this.state.options[idx] && this.state.options[idx] !== nextProps.options[idx]) {
                    let node = this.refs['list-'+idx] //div, ReactDOM.findDOMNode( this.refs['list-'+idx] )
                    node.scrollTop = this.state._scrollStartTop[idx] = 0
                }
            })
        }
        this.setState({
            value: nextProps.value
            , options: nextProps.options
        })
    }

    //, optionHeight: 0
    , componentDidMount () {
        let op = this.refs['op-0-0']
            , opHeight = 0
        if (op) {
            opHeight = this.state.optionHeight = ReactDOM.findDOMNode(op).clientHeight
        }
        this.state._initValueIndexes.forEach((vi, idx) => {
            if (vi > 0) {
                let node = this.refs['list-'+idx] //div, ReactDOM.findDOMNode( this.refs['list-'+idx] )
                node.scrollTop = this.state._scrollStartTop[idx] = vi * opHeight
            }
        })
        //window.addEventListener('scroll', this._onPageScroll)
    }
    , componentWillUnmount () {
        //window.removeEventListener('scroll', this._onPageScroll)
    }

    , value() {
        return this.state.value
    }

    , render() {

        let values = this.state.value
            , __options = this.state.options
        if ( ! Array.isArray(values)) {
            values = [values]
            __options = [__options]
        }

        let initValueIndexes = []
        let style = {
            width: (100 / __options.length) + '%'
        }
        let i = -1 //counter for __options, for it is an array or key-map object
        let lists = __options.map((options) => {
            if (!options)
                return
            i++
            let j = -1 //counter for options, for it is an array or key-map object
            return (
                <div
                    key={i}
                    ref={'list-'+i}
                    data-id={i}
                    className="list-wrap"
                    style={style}
                    onScroll={isBrowser ? this._onScroll : undefined}
                    >
                    <ul>
                        {
                            options.map((op) => {
                                j++
                                if (typeof op === 'string' || typeof op === 'number') {
                                    op = {
                                        text: op
                                        , value: op
                                    }
                                }
                                else if ((typeof op !== 'object') || !op.text)
                                    return
                                if (!op.value)
                                    op.value = ''

                                if (String(op.value) === String(values[i])) {
                                    initValueIndexes.push(j)
                                }

                                return (
                                    <Tappable key={j}
                                              ref={`op-${i}-${j}`}
                                              data-id={`${i}-${j}`}
                                              data-value={JSON.stringify(op)}
                                              component="li"
                                              onTap={this._clickOnOption}
                                        >
                                        {op.text}
                                    </Tappable>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        })

        this.state._initValueIndexes = initValueIndexes

        let popupStyle = {}
        if (this.props.width && ViewPoint && ViewPoint.width >= 768) {
            popupStyle.width = this.props.width
        }

        return (
            <div className={["picker", this.props.className].join(' ')}>
                {this.props.children}
                <div className={["container", "table", this.props.className, (this.state.open ? "show" : undefined)].join(' ')}>
                    <Tappable  className="overlay" onTap={this._handleOverlayTouchTap} />
                    <div className="cell">
                        <div className={["popup", (this.state.open ? "show" : undefined)].join(' ')} style={popupStyle}>
                            {lists}
                            <div className="cover upper"/>
                            <div className="cover lower"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    , dismiss() {
        if (this.state.closeable) {
            this._onDismiss()
        }
    }
    , show() {
        // prevent rapid show/hide
        this._onShow()
    }
    ,  _handleOverlayTouchTap() {
        if (this.state.closeable) {
            this._onDismiss()
            this.props.onClickAway && this.props.onClickAway()
        }
    }
    , _onShow() {
        setTimeout(function(){ this.state.closeable = true }.bind(this), 250)
        this.setState({ open: true })
        this.props.onShow && this.props.onShow()
    }
    , _onDismiss() {
        this.setState({ open: false, loading: false })
        this.props.onDismiss && this.props.onDismiss()
    }

    , _onPageScroll(e) {
    }
    , _onScroll(e) {
        let el = e.target
            , idx = parseInt(el.dataset ? el.dataset.id : el.getAttribute('data-id'), 10)
            , opHeight = this.state.optionHeight
            , scrollStartTop = this.state._scrollStartTop

        window.clearTimeout( this.state._scrollTimer )
        this.state._scrollTimer = window.setTimeout( () => {
            if (typeof scrollStartTop[idx] !== 'number')
                scrollStartTop[idx] = 0
            if (scrollStartTop[idx] === el.scrollTop)
                return

            let scrollTop = el.scrollTop
                , mod = scrollTop % opHeight
                , percent = mod / opHeight

            let toLowerItem = () => {
                let diff = opHeight - mod
                scrollTop += diff
                el.scrollTop += diff
            }
            let toUpperItem = () => {
                scrollTop -= mod
                el.scrollTop -= mod
            }

            if (scrollTop > scrollStartTop[idx]) {
                percent > 0.46 ? toLowerItem() : toUpperItem()
            }
            else {
                percent < 0.64 ? toUpperItem() : toLowerItem()
            }
            scrollStartTop[idx] = scrollTop

            let opname = `op-${idx}-${scrollTop / opHeight}`
            let op = ReactDOM.findDOMNode( this.refs[opname] ).getAttribute('data-value')
            if (!op)
                return
            op = JSON.parse(op)

            let value = this.state.value
            if (Array.isArray(value)) {
                value[idx] = op.value
            } else {
                value = op.value
            }
            this.setState({
                value: value
            })
            this.props.onChange(op.value, op.text, idx)
        }, 250)
    }

    , _clickOnOption(e) {
        let el = e.target
            , value = el.dataset ? el.dataset.id : el.getAttribute('data-id')
        if ( ! value )
            return

        let arr = value.split('-')
        if (arr.length < 2)
            return

        let _list = this.refs['list-' + arr[0]]
        if (!_list)
            return
        let list = _list //div, ReactDOM.findDOMNode(_list)
        list.scrollTop = this.state.optionHeight * parseInt(arr[1], 10)
    }

})

export default Picker
