webpackJsonp([0],{

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperaturePageModule", function() { return TemperaturePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__temperature__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TemperaturePageModule = /** @class */ (function () {
    function TemperaturePageModule() {
    }
    TemperaturePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__temperature__["a" /* TemperaturePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__temperature__["a" /* TemperaturePage */]),
            ],
        })
    ], TemperaturePageModule);
    return TemperaturePageModule;
}());

//# sourceMappingURL=temperature.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperaturePage; });
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




var TemperaturePage = /** @class */ (function () {
    function TemperaturePage(alerCtrl, navCtrl, navParams, firebaseRequest, toast) {
        this.alerCtrl = alerCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseRequest = firebaseRequest;
        this.toast = toast;
        this.Capteurs = firebaseRequest.get('Capteurs');
    }
    TemperaturePage.prototype.descriptionClicked = function (Index) {
        return this.navCtrl.push('DescriptionPage', { 'PrevPage': 'TemperaturePage', 'PageItem': 'Capteurs', 'idexParam': Index });
    };
    TemperaturePage.prototype.onClickItemList = function (description, index) {
        this.toast.show('Capteur ' + index + ' : ' + description);
    };
    TemperaturePage.prototype.sectionSelection = function () {
        var _this = this;
        var alert = this.alerCtrl.create();
        alert.setTitle('Sections');
        alert.addButton({
            text: 'Village',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.addButton({
            text: 'Pompe',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    TemperaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-temperature',template:/*ion-inline-start:"/home/mb/Entrepot_ferme_bolduc_Fils/src/pages/temperature/temperature.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n		<ion-title>\n			Sondes de temperature\n		</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<button ion-button block light (click)="sectionSelection()">Selection de la section</button>\n	<ion-list>\n		<ion-item-sliding *ngFor="let capteur of Capteurs | async; let i = index;">\n			<ion-item>\n				<ion-icon padding-top name="thermometer"></ion-icon>\n				<button ion-button clear padding-top (click)="onClickItemList(capteur.description, i+1)">Temperature sonde {{i+1}} :\n					{{capteur.value | json}} °C</button>\n			</ion-item>\n\n			<ion-item-options>\n				<button ion-button color="secondary" (click)="descriptionClicked(i+1)">\n					<ion-icon name="menu"></ion-icon>\n					Description\n				</button>\n			</ion-item-options>\n		</ion-item-sliding>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/home/mb/Entrepot_ferme_bolduc_Fils/src/pages/temperature/temperature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_request_firebase_request__["a" /* FirebaseRequestProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */]])
    ], TemperaturePage);
    return TemperaturePage;
}());

//# sourceMappingURL=temperature.js.map

/***/ })

});
//# sourceMappingURL=0.js.map