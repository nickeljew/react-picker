import eventSupported from './event-support'

let __TouchSupported
let touchSupport = () => {
    if (typeof __TouchSupported === 'boolean')
        return __TouchSupported

    __TouchSupported = eventSupported("touchstart") //("ontouchstart" in document.documentElement)
    return __TouchSupported
}

export default touchSupport