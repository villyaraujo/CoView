webpackJsonp([4],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "img_comparison_slider", function() { return ImgComparisonSlider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunk_48aeaa03_js__ = __webpack_require__(197);

var inBetween = function (actual, min, max) {
    if (actual < min) {
        return min;
    }
    if (actual > max) {
        return max;
    }
    return actual;
};
var KeySlideOffset = {
    'ArrowLeft': -1,
    'ArrowRight': 1,
};
var ImgComparisonSlider = /** @class */ (function () {
    function ImgComparisonSlider(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_0__chunk_48aeaa03_js__["e" /* r */])(this, hostRef);
        this.exposure = 50;
        this.isMouseDown = false;
    }
    ImgComparisonSlider.prototype.componentWillLoad = function () {
        this.el.querySelectorAll('img').forEach(function (img) {
            img.addEventListener('dragstart', function (e) {
                e.preventDefault();
            });
        });
    };
    ImgComparisonSlider.prototype.componentDidRender = function () {
        this.slide(0);
        this.updateAfterWidth();
        this.el.setAttribute('tabindex', '0');
    };
    ImgComparisonSlider.prototype.componentDidUnload = function () {
        if (this.transitionTimer) {
            window.clearTimeout(this.transitionTimer);
        }
    };
    ImgComparisonSlider.prototype.slide = function (increment, transition) {
        var _this = this;
        if (increment === void 0) { increment = 0; }
        if (transition === void 0) { transition = false; }
        this.exposure = inBetween(this.exposure + increment, 0, 100);
        if (transition) {
            var transitionTime = 100;
            this.after.style.transition = "width " + transitionTime + "ms";
            this.transitionTimer = window.setTimeout(function () {
                _this.after.style.transition = null;
                _this.transitionTimer = null;
            }, transitionTime);
        }
        this.after.style.width = this.exposure + "%";
    };
    ImgComparisonSlider.prototype.onKeyDown = function (e) {
        if (this.keyboardSlideAnimationTimeoutId) {
            return;
        }
        var key = e.key;
        if (!Object.keys(KeySlideOffset).includes(key)) {
            return;
        }
        this.startSlideAnimation(KeySlideOffset[key]);
    };
    ImgComparisonSlider.prototype.onKeyUp = function (e) {
        if (!this.keyboardSlideAnimationTimeoutId) {
            return;
        }
        if (!Object.keys(KeySlideOffset).includes(e.key)) {
            return;
        }
        this.stopSlideAnimation();
    };
    ImgComparisonSlider.prototype.onMouseDown = function (e) {
        this.isMouseDown = true;
        this.slideToEvent(e, true);
        this.el.focus();
    };
    ImgComparisonSlider.prototype.onMouseUp = function (e) {
        this.isMouseDown = false;
    };
    ImgComparisonSlider.prototype.onMouseMove = function (e) {
        if (this.isMouseDown) {
            this.slideToEvent(e);
        }
    };
    ImgComparisonSlider.prototype.onBlur = function () {
        this.stopSlideAnimation();
    };
    ImgComparisonSlider.prototype.updateAfterWidth = function () {
        this.imageWidth = this.el.offsetWidth;
        this.afterImageContainer.style.width = this.el.offsetWidth + "px";
    };
    ImgComparisonSlider.prototype.slideToEvent = function (e, transition) {
        if (transition === void 0) { transition = false; }
        var x = e.pageX - this.el.offsetLeft;
        this.exposure = (x / this.imageWidth) * 100;
        this.slide(0, transition);
    };
    ImgComparisonSlider.prototype.startSlideAnimation = function (offset) {
        var _this = this;
        var fps = 120;
        var fraction = 1 * offset;
        var slide = function () {
            _this.keyboardSlideAnimationTimeoutId = window.setTimeout(function () {
                _this.animationRequestId = window.requestAnimationFrame(slide);
            }, 1000 / fps);
            _this.slide(fraction);
        };
        slide();
    };
    ImgComparisonSlider.prototype.stopSlideAnimation = function () {
        if (!this.keyboardSlideAnimationTimeoutId) {
            return;
        }
        window.clearTimeout(this.keyboardSlideAnimationTimeoutId);
        window.cancelAnimationFrame(this.animationRequestId);
        this.keyboardSlideAnimationTimeoutId = null;
        this.animationRequestId = null;
    };
    ImgComparisonSlider.prototype.render = function () {
        var _this = this;
        return Object(__WEBPACK_IMPORTED_MODULE_0__chunk_48aeaa03_js__["d" /* h */])("div", null, Object(__WEBPACK_IMPORTED_MODULE_0__chunk_48aeaa03_js__["d" /* h */])("div", { ref: function (el) { return _this.before = el; } }, Object(__WEBPACK_IMPORTED_MODULE_0__chunk_48aeaa03_js__["d" /* h */])("slot", { name: "before" })), Object(__WEBPACK_IMPORTED_MODULE_0__chunk_48aeaa03_js__["d" /* h */])("div", { class: "after", ref: function (el) { return _this.after = el; } }, Object(__WEBPACK_IMPORTED_MODULE_0__chunk_48aeaa03_js__["d" /* h */])("div", { class: "hint" }), Object(__WEBPACK_IMPORTED_MODULE_0__chunk_48aeaa03_js__["d" /* h */])("div", { class: "after-overlay" }, Object(__WEBPACK_IMPORTED_MODULE_0__chunk_48aeaa03_js__["d" /* h */])("div", { ref: function (el) { return _this.afterImageContainer = el; } }, Object(__WEBPACK_IMPORTED_MODULE_0__chunk_48aeaa03_js__["d" /* h */])("slot", { name: "after" })))));
    };
    Object.defineProperty(ImgComparisonSlider.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_0__chunk_48aeaa03_js__["c" /* g */])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgComparisonSlider, "style", {
        get: function () { return ":host{--divider:1px solid #d7d7d7;--hint-size:40px;--hint-color:#d7d7d7;--hint-opacity:0.5;--hint-opacity-active:0;position:relative;display:inline-block;font-size:0;overflow:hidden}:host(:focus) .hint{opacity:0}::slotted(img){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.component:hover .hint{opacity:var(--hint-opacity-active)}.after{position:absolute;left:0;top:0;bottom:0;border-right:var(--divider)}.after .after-overlay{overflow:hidden}.hint{position:absolute;width:var(--hint-size);height:var(--hint-size);background-color:var(--hint-color);top:50%;right:0;margin-top:calc(var(--hint-size) / (-2));margin-right:calc(var(--hint-size) / (-2));-webkit-transition:opacity 1s,-webkit-transform 1s;transition:opacity 1s,-webkit-transform 1s;transition:opacity 1s,transform 1s;transition:opacity 1s,transform 1s,-webkit-transform 1s;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 0 15px 0 rgba(0,0,0,.75);box-shadow:0 0 15px 0 rgba(0,0,0,.75);pointer-events:none;opacity:var(--hint-opacity);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.focused .hint{-webkit-transform:rotate(45deg) scale(1.5);transform:rotate(45deg) scale(1.5)}"; },
        enumerable: true,
        configurable: true
    });
    return ImgComparisonSlider;
}());



/***/ })

});
//# sourceMappingURL=4.js.map