webpackJsonp([9],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pointanalysis_pointanalysis__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, loadingCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.points = [];
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.presentLoading();
        this.SideMap();
    };
    MapPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Stay safe! Loading.."
        });
        this.loader.present();
    };
    MapPage.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    MapPage.prototype.SideMap = function () {
        var _this = this;
        this.map = new __WEBPACK_IMPORTED_MODULE_2_leaflet__["Map"]("map").setView([0, 0], 3);
        __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
            attribution: 'CoView © <a href="https://www.coview.co/">Coview</a>'
        }).addTo(this.map);
        fetch("https://raw.githubusercontent.com/villyaraujo/CoView/master/api.json")
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            _this.points = data;
            _this.addPoint();
            _this.closeLoading();
        })
            .catch(function (err) { return console.error(err); });
    };
    MapPage.prototype.addPoint = function () {
        window.that = this;
        window.openModal = this.openModal;
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var property = _a[_i];
            var propToString = encodeURI(JSON.stringify(property));
            var popup = property.name +
                '<img src="' +
                property.imgafter +
                '"/> ' +
                "<br>" +
                '<button type="button" data-code="' + propToString + '" onclick="window.openModal.call(window.that, this.dataset.code)">Get info</button>';
            __WEBPACK_IMPORTED_MODULE_2_leaflet__["marker"]([property.lat, property.long])
                .addTo(this.map)
                .bindPopup(popup);
        }
    };
    MapPage.prototype.openModal = function (property) {
        this.response = JSON.parse(decodeURI(property));
        console.log(this.response);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pointanalysis_pointanalysis__["a" /* PointanalysisPage */], {
            id: this.response.id,
            name: this.response.name,
            state: this.response.state,
            country: this.response.country,
            lat: this.response.lat,
            long: this.response.long,
            imgbefore: this.response.imgbefore,
            imgafter: this.response.imgafter,
            country_code: this.response.country_code,
            details: this.response.details
        });
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-map",template:/*ion-inline-start:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div id="map" style="width:100%; height:100%;">\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _d || Object])
    ], MapPage);
    return MapPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointanalysisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
    function PointanalysisPage(navCtrl, toastCtrl, loadingCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    PointanalysisPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Stay Safe! Loading.."
        });
        this.loader.present();
    };
    PointanalysisPage.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    PointanalysisPage.prototype.ionViewDidLoad = function () {
        this.pointid = this.navParams.get('id');
        this.lat = this.navParams.get('lat');
        this.name = this.navParams.get('name');
        this.state = this.navParams.get('state') != "" ? this.navParams.get('state') : "";
        this.country = this.navParams.get('country');
        this.long = this.navParams.get('long');
        this.imgbefore = this.navParams.get('imgbefore');
        this.imgafter = this.navParams.get('imgafter');
        this.country_code = this.navParams.get('country_code');
        this.details = this.navParams.get('details');
        if (this.country_code != "")
            this.getStatsOfCovid(this.country_code);
    };
    PointanalysisPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    PointanalysisPage.prototype.getStatsOfCovid = function (country) {
        var _this = this;
        fetch("https://corona-api.com/countries/" + country)
            .then(function (res) { return res.json(); })
            .then(function (data) {
            _this.covid = data;
            _this.covid.data.latest_data.calculated.death_rate = data.data.latest_data.calculated.death_rate.toFixed(2);
        })
            .catch(function (err) { return console.error(err); });
    };
    PointanalysisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pointanalysis',template:/*ion-inline-start:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/pages/pointanalysis/pointanalysis.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Before | After</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <img-comparison-slider>\n      <img slot="before" src=\'{{imgbefore}}\'>\n      <img slot="after" src=\'{{imgafter}}\'>\n  </img-comparison-slider>\n    <ion-card-content>\n      <ion-card-title>\n        <div class="button-center">\n          Region: {{ name }}\n        </div>\n      </ion-card-title>\n      <p>\n        Country: {{ country }}\n      </p>\n      <p>\n        State: {{ state }}\n      </p>\n      <p>\n        Latitude: {{ lat }}\n      </p>\n      <p>\n        Longitude: {{ long }}\n      </p>\n      <p *ngIf="covid">\n        <br>\n        COVID Stats from Country:\n        <br>\n        Today\'s deaths: {{ covid.data.today.deaths }}\n        Today\'s confirmed cases: {{ covid.data.today.confirmed }}\n        <br>\n        Total Deaths: {{ covid.data.latest_data.deaths }}\n      </p>\n      <p *ngIf="covid">\n        COVID Confirmed cases: {{ covid.data.latest_data.confirmed }}\n      </p>\n      <p *ngIf="covid">\n        Recovered cases: {{ covid.data.latest_data.recovered }}\n      </p>\n      <p *ngIf="covid">\n        Rate of death (%): {{ covid.data.latest_data.calculated.death_rate }}\n      </p>\n      <br>\n      <p *ngIf="details">\n        Details: {{ details }}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/pages/pointanalysis/pointanalysis.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _e || Object])
    ], PointanalysisPage);
    return PointanalysisPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=pointanalysis.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/map/map.module": [
		284,
		8
	],
	"../pages/pointanalysis/pointanalysis.module": [
		285,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n      CoView\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n    <video webkit-playsinline playsinline autoplay loop muted id="backgroundvideo">\n        <source src="./assets/imgs/bus.mp4" type=\'video/mp4; codecs="h.264"\'>\n        <source src="./assets/imgs/bus.webm" type="video/webm">\n      </video> \n  \n  <ion-slides autoplay="4000" pager loop>\n    <ion-slide>\n        <h4>Before</h4>\n        <p>Before Covid images in places</p>\n    </ion-slide>\n    <ion-slide>\n        <h4>After</h4>\n        <p>After Covid images in places</p>\n    </ion-slide>\n    <ion-slide>\n        <h4>Side by Side</h4>\n        <p>Before and after analysis and details</p>\n    </ion-slide>\n</ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        <div class="button-center">\n          <b>The project</b>\n        </div>\n        <br>\n        <p style="font-size:20px">\n          <b>CoView</b> is a project created by SevenTeam. The intuitive of the project is to provide important data, satellite imagery comparisons and related information about the Covid-19 pandemic in only one place. With an intuitive map, the user can have access to dozens of points of interest around the world.<br>\n          The platform is also collaborative, meaning that users can add data, images and descriptions by themselves. Since our goal is to provide reliable information, any added information will be reviewed first by a group of collaborators. If users notice some incongruence in any of the information, they can also contest that.<br>\n          After the end of this pandemic, CoView can also be adept to show information and meaningful data about any other problem. For example, it can helps in the analysis of deforestation or even in the spread of other diseases.  \n        </p>\n        <br>\n        <div class="button-center">\n          <b>SevenTeam</b>\n        </div>\n        <br>\n        <p style="font-size:20px">\n          Danilo Gomes as <b>business</b>\n          <br>\n          Gabriel Babler as <b>developer</b>\n          <br>\n          Villy de Oliveira as <b>developer</b>\n          <br>\n          Gabriel Floriano as <b>researcher</b>\n          <br>\n          Maria Angélica Pagani as <b>researcher & designer</b>\n          <br>\n          Rômulo Amaral as <b>business & backend developer</b>\n        </p>\n        <br><br>\n        <div class="button-center">\n          <b>References</b>\n        </div>\n        <br>\n        <p style="font-size:20px;">\n          https://earthdata.nasa.gov/learn/pathfinders#covid-19-data-pathfinder <br>\n          https://about-corona.net <br>\n          https://www.esa.int <br>\n          https://www.ncdc.noaa.gov <br>\n          https://earthengine.google.com <br>\n          https://www.maxar.com/open-data <br>\n        </p>\n      </ion-card-title>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_img_comparison_slider_loader__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(225);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
Object(__WEBPACK_IMPORTED_MODULE_1_img_comparison_slider_loader__["a" /* defineCustomElements */])(window);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./img-comparison-slider.entry.js": [
		280,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_collaborate_collaborate__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_graphics_graphics__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pointanalysis_pointanalysis__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pointanalysis_pointanalysis__["a" /* PointanalysisPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_collaborate_collaborate__["a" /* CollaborationPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_graphics_graphics__["a" /* GraphicsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pointanalysis/pointanalysis.module#PointanalysisPageModule', name: 'PointanalysisPage', segment: 'pointanalysis', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pointanalysis_pointanalysis__["a" /* PointanalysisPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_collaborate_collaborate__["a" /* CollaborationPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_graphics_graphics__["a" /* GraphicsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_collaborate_collaborate__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_graphics_graphics__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Map', component: __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Collaborate', component: __WEBPACK_IMPORTED_MODULE_7__pages_collaborate_collaborate__["a" /* CollaborationPage */] },
            { title: 'Graphics', component: __WEBPACK_IMPORTED_MODULE_8__pages_graphics_graphics__["a" /* GraphicsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/app/app.html"*/'<ion-split-pane>\n\n  <!--  our side menu  -->\n  <ion-menu [content]="content" type="overlay">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n\n  <!-- the main content -->\n  <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaborationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollaborationPage = /** @class */ (function () {
    function CollaborationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CollaborationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-collab',template:/*ion-inline-start:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/pages/collaborate/collaborate.html"*/'<ion-header>\n        <ion-navbar>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Collaborate with us!</ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content>\n        <ion-card>\n          <ion-card-content>\n            <ion-card-title>\n              <div class="button-center">\n                <b>JOIN US</b>\n              </div>\n              <br>\n              <p style="font-size:20px">\n                <b>CoView</b> needs your help! \n                <br>\n                Your collaboration is so important for our project. If you have an appropriate background and you think you can give us some information, <b>DO IT!</b> \n                <br>\n                We will review your submission in a couple of days and if so, we will add to our map!\n              </p>\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-content>\n      '/*ion-inline-end:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/pages/collaborate/collaborate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], CollaborationPage);
    return CollaborationPage;
}());

//# sourceMappingURL=collaborate.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphicsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphicsPage = /** @class */ (function () {
    function GraphicsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GraphicsPage_1 = GraphicsPage;
    GraphicsPage.prototype.getGraphics = function () {
        var _this = this;
        fetch("https://raw.githubusercontent.com/villyaraujo/CoView/master/graph")
            .then(function (res) { return res.json(); })
            .then(function (data) {
            _this.navCtrl.push(GraphicsPage_1, {
                active_mundo: data.active_mundo.jpg,
                confirmed_mundo: data.confirmed_mundo.jpg,
                deaths_mundo: data.deaths_mundo.jpg,
                new_confirmed_mundo: data.new_confirmed_mundo.jpg,
                new_deaths_mundo: data.new_deaths_mundo.jpg,
                new_recovered_mundo: data.new_recovered_mundo.jpg,
                recovered_mundo: data.recovered_mundo.jpg,
            });
        })
            .catch(function (err) { return console.error(err); });
    };
    GraphicsPage.prototype.ionViewDidLoad = function () {
        this.active_mundo = this.navParams.get('active_mundo');
        this.confirmed_mundo = this.navParams.get('confirmed_mundo');
        this.deaths_mundo = this.navParams.get('deaths_mundo');
        this.new_confirmed_mundo = this.navParams.get('new_confirmed_mundo');
        this.new_deaths_mundo = this.navParams.get('new_deaths_mundo');
        this.new_recovered_mundo = this.navParams.get('new_recovered_mundo');
        this.recovered_mundo = this.navParams.get('recovered_mundo');
    };
    GraphicsPage = GraphicsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-graph',template:/*ion-inline-start:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/pages/graphics/graphics.html"*/'<ion-header>\n        <ion-navbar>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Graphics</ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content>\n        <ion-card>\n          <ion-card-content>\n            <ion-card-title>\n              <div class="button-center">\n                <b>Below you will be able to check some graphics about data from the world.</b>\n              </div>\n              <br>\n              <img src=\'{{imgbefore}}\'>\n              <p style="font-size:20px">\n                <b>CoView</b> needs your help! \n                <br>\n                Your collaboration is so important for our project. If you have an appropriate background and you think you can give us some information, <b>DO IT!</b> \n                <br>\n                We will review your submission in a couple of days and if so, we will add to our map!\n              </p>\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-content>\n      '/*ion-inline-end:"/home/gabrielbabler/Documents/spaceAppsChallenge/CoView/src/pages/graphics/graphics.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], GraphicsPage);
    return GraphicsPage;
    var GraphicsPage_1, _a, _b;
}());

//# sourceMappingURL=graphics.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map