'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ViewPoint = (function () {
    function ViewPoint() {
        _classCallCheck(this, ViewPoint);

        this.width = 0;
        this.height = 0;
        this.colorDepth = 0;
        this.pixelDepth = 0;

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
})();

var viewpoint = new ViewPoint();

exports['default'] = viewpoint;
module.exports = exports['default'];
