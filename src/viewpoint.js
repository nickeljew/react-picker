'use strict';

class ViewPoint {
    constructor() {
        this.width = 0
        this.height = 0
        this.colorDepth = 0
        this.pixelDepth = 0

        if (window && window.screen) {
            this.width = window.screen.width
            this.height = window.screen.height
            this.colorDepth = window.screen.colorDepth
            this.pixelDepth = window.screen.pixelDepth
        }

        this.detect()
    }

    detect() {
        if (window && typeof window.innerWidth !== 'undefined')
        {
            this.width = window.innerWidth
            this.height = window.innerHeight
        }

        // IE6
        else if (document && typeof document.documentElement !== 'undefined'
            && typeof document.documentElement.clientWidth !== 'undefined'
            && document.documentElement.clientWidth !== 0)
        {
            this.width = document.documentElement.clientWidth
            this.height = document.documentElement.clientHeight
        }

        //Older IE
        else if (document)
        {
            this.width = document.getElementsByTagName('body')[0].clientWidth
            this.height = document.getElementsByTagName('body')[0].clientHeight
        }
    }
}

let viewpoint = new ViewPoint()

export default viewpoint