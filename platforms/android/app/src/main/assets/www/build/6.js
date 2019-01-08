webpackJsonp([6],{

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionCapteurPageModule", function() { return DescriptionCapteurPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__description_capteur__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DescriptionCapteurPageModule = /** @class */ (function () {
    function DescriptionCapteurPageModule() {
    }
    DescriptionCapteurPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__description_capteur__["a" /* DescriptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__description_capteur__["a" /* DescriptionPage */]),
            ],
        })
    ], DescriptionCapteurPageModule);
    return DescriptionCapteurPageModule;
}());

//# sourceMappingURL=description-capteur.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_request_firebase_request__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DescriptionPage = /** @class */ (function () {
    function DescriptionPage(navCtrl, navParams, afReq) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afReq = afReq;
        this.indexFromTabs = 0;
        this.itemPage = "";
        this.prevPage = "";
        this.description = '';
        var data = navParams.get('idexParam');
        if (data != null) {
            this.indexFromTabs = navParams.get('idexParam');
            this.itemPage = navParams.get('PageItem');
            this.prevPage = navParams.get('PrevPage');
        }
    }
    DescriptionPage.prototype.modifyDescriptionClick = function () {
        var _this = this;
        this.afReq.set(this.itemPage + '/' + this.indexFromTabs + '/description', this.description).then(function (_) { return _this.returnToTabsPage(); });
    };
    DescriptionPage.prototype.returnToTabsPage = function () {
        this.navCtrl.setRoot(this.prevPage);
    };
    DescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescriptionCapteurPage');
    };
    DescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-description-capteur',template:/*ion-inline-start:"/home/mb/Entrepot_ferme_bolduc_Fils/src/pages/description-capteur/description-capteur.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>description Capteur</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div *ngIf="indexFromTabs">\n		Entrer l\'information que vous voulez modifier de l\'item selectioner : {{indexFromTabs}}\n			<input type="text" [(ngModel)]="description">\n			<ion-buttons>\n				<button ion-button clear block color="primitive" (click)="modifyDescriptionClick(description, indexFromTabs)">\n					modifier\n				</button>\n			</ion-buttons>\n	</div>\n	<div *ngIf="!indexFromTabs">\n		<p>\n				Vous navez selectionne aucun capteur a modifier... retour vers: \n		</p>\n		<div>\n			<button ion-button clear block color="primitive" (click)="returnToTabsPage()">ecran principale</button>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/home/mb/Entrepot_ferme_bolduc_Fils/src/pages/description-capteur/description-capteur.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_request_firebase_request__["a" /* FirebaseRequestProvider */]])
    ], DescriptionPage);
    return DescriptionPage;
}());

//# sourceMappingURL=description-capteur.js.map

/***/ })

});
//# sourceMappingURL=6.js.map