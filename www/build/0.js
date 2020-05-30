webpackJsonp([0],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointanalysisPageModule", function() { return PointanalysisPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pointanalysis__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PointanalysisPageModule = /** @class */ (function () {
    function PointanalysisPageModule() {
    }
    PointanalysisPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pointanalysis__["a" /* PointanalysisPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pointanalysis__["a" /* PointanalysisPage */]),
            ],
        })
    ], PointanalysisPageModule);
    return PointanalysisPageModule;
}());

//# sourceMappingURL=pointanalysis.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointanalysisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PointanalysisPage = /** @class */ (function () {
    function PointanalysisPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    PointanalysisPage.prototype.ionViewDidLoad = function () {
    };
    PointanalysisPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    PointanalysisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pointanalysis',template:/*ion-inline-start:"/Engenharia de Software/Projetos/COVID/CoView/src/pages/pointanalysis/pointanalysis.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Before | After</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">Fechar</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card >\n    <ion-card-content>\n      <ion-card-title>\n        <div class="button-center">\n          \n         \n          LInha\n        </div>\n      </ion-card-title>\n      <p text-justify>\n        Cód: \n      </p>\n      Cartão: \n      <br>\n      Categoria: \n    </ion-card-content>\n   \n    <br>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Engenharia de Software/Projetos/COVID/CoView/src/pages/pointanalysis/pointanalysis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], PointanalysisPage);
    return PointanalysisPage;
}());

//# sourceMappingURL=pointanalysis.js.map

/***/ })

});
//# sourceMappingURL=0.js.map