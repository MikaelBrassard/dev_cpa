webpackJsonp([5],{

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FansPageModule", function() { return FansPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fans__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FansPageModule = /** @class */ (function () {
    function FansPageModule() {
    }
    FansPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fans__["a" /* FansPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fans__["a" /* FansPage */]),
            ],
        })
    ], FansPageModule);
    return FansPageModule;
}());

//# sourceMappingURL=fans.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_request_firebase_request__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FansPage = /** @class */ (function () {
    function FansPage(navCtrl, navParams, firebaseRequest, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseRequest = firebaseRequest;
        this.toast = toast;
        this.Fans = firebaseRequest.get('Fans');
    }
    FansPage.prototype.descriptionClicked = function (Index) {
        return this.navCtrl.push('DescriptionPage', { 'PrevPage': 'FansPage', 'PageItem': 'Fans', 'idexParam': Index });
    };
    FansPage.prototype.onClickItemList = function (description, index) {
        this.toast.show('Fan ' + index + ' : ' + description);
    };
    FansPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FansPage');
    };
    FansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fans',template:/*ion-inline-start:"/home/mb/Entrepot_ferme_bolduc_Fils/src/pages/fans/fans.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n		<ion-title>Systeme de ventilation</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n		<ion-item-sliding *ngFor="let fan of Fans | async; let i = index;">\n			<ion-item>\n				<img src="../../assets/imgs/fan.png" alt="fan" class="fan">\n				<button ion-button clear padding-top (click)="onClickItemList(fan.description, i+1)"> fan {{i+1}} : {{fan.value | json}}</button>\n			</ion-item>\n\n			<ion-item-options>\n				<button ion-button color="secondary" (click)="descriptionClicked(i+1)">\n					<ion-icon name="menu"></ion-icon>\n					Description\n				</button>\n			</ion-item-options>\n		</ion-item-sliding>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/home/mb/Entrepot_ferme_bolduc_Fils/src/pages/fans/fans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_request_firebase_request__["a" /* FirebaseRequestProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */]])
    ], FansPage);
    return FansPage;
}());

//# sourceMappingURL=fans.js.map

/***/ })

});
//# sourceMappingURL=5.js.map