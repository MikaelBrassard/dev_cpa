webpackJsonp([1],{

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperaturePageModule", function() { return TemperaturePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__temperature__ = __webpack_require__(715);
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

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_request_firebase_request__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(298);
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
    function TemperaturePage(alerCtrl, navCtrl, firebaseRequest, toast) {
        this.alerCtrl = alerCtrl;
        this.navCtrl = navCtrl;
        this.firebaseRequest = firebaseRequest;
        this.toast = toast;
        this.selectionCable = '';
        this.selectionSilo = '';
    }
    TemperaturePage.prototype.onSelectSiloChange = function (selectionEntrepotChanged) {
        this.selectionSilo = selectionEntrepotChanged;
        console.log('Selected', selectionEntrepotChanged);
        console.log(this.Capteurs);
    };
    TemperaturePage.prototype.onSelectCableChange = function (selectionSectionChanged) {
        this.selectionCable = selectionSectionChanged;
        console.log('Selected', selectionSectionChanged);
        this.Capteurs = this.firebaseRequest.get('Capteurs' + '/' + this.selectionSilo + '/' + this.selectionCable);
    };
    TemperaturePage.prototype.descriptionClicked = function (Index) {
        return this.navCtrl.push('DescriptionPage', { 'PrevPage': 'TemperaturePage', 'PageItem': 'Capteurs', 'idexParam': Index, 'SelectionVille': this.selectionSilo, 'SelectionSection': this.selectionCable });
    };
    TemperaturePage.prototype.onClickItemList = function (description, index) {
        this.toast.show('Capteur ' + index + ' : ' + description);
    };
    TemperaturePage.prototype.statsClicked = function (Index) {
        return this.navCtrl.push('StatistiquesPage', { 'PrevPage': 'TemperaturePage', 'PageItem': 'Capteurs', 'idexParam': Index });
    };
    TemperaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-temperature',template:/*ion-inline-start:"/home/mb/dev_cpa/src/pages/temperature/temperature.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n		<ion-title>\n			Sondes de temperature\n		</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<ion-item>\n		<ion-label>Silo</ion-label>\n		<ion-select [(ngModel)]="selectionSilo" (ionChange)="onSelectSiloChange($event)">\n		  <ion-option value="Deshumidification">Deshumidification</ion-option>\n		  <ion-option value="Ventilation">Ventilation</ion-option>\n		</ion-select>\n	</ion-item>\n	<ion-item>	\n		<ion-label>Cable</ion-label>\n			<ion-select [(ngModel)]="selectionSilo" (ionChange)="onSelectCableChange($event)">\n				<div *ngIf="selectionCable == \'Deshumidification\'">\n					<ion-option value="1">#1</ion-option>\n					<ion-option value="2">#2</ion-option>\n					<ion-option value="3">#3</ion-option>\n				</div>\n				<div *ngIf="selectionSilo == \'Ventilation\'">\n					<ion-option value="1">#1</ion-option>\n					<ion-option value="2">#2</ion-option>\n					<ion-option value="3">#3</ion-option>\n				</div>\n			</ion-select>	\n  	</ion-item>\n	<ion-list>\n			<ion-item-sliding *ngFor="let capteur of Capteurs | async; let i = index;">\n					<ion-item>\n						<div *ngIf="capteur.Temperature >= \'65000\';else else_content">\n							<ion-icon padding-top name="thermometer"></ion-icon>\n							<button ion-button clear padding-top (click)="onClickItemList(capteur.Description, i+1)">Temperature sonde {{capteur.DescriptionCourte}} :\n								{{capteur.Temperature-65536 | json}} °C</button>\n						</div>\n						<ng-template #else_content>\n							<ion-icon padding-top name="thermometer"></ion-icon>\n							<button ion-button clear padding-top (click)="onClickItemList(capteur.Description, i+1)">Temperature sonde {{capteur.DescriptionCourte}} :\n								{{capteur.Temperature | json}} °C</button>\n						</ng-template>\n					</ion-item>\n		\n					<ion-item-options>\n						<button ion-button color="secondary" (click)="descriptionClicked(i+1)">\n							<ion-icon name="menu"></ion-icon>\n							Description\n						</button>\n						<button ion-button color="secondary" (click)="statsClicked(i+1)">\n							<ion-icon name="analytics"></ion-icon>\n							Statistiques\n						</button>\n					</ion-item-options>\n		\n				</ion-item-sliding>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/home/mb/dev_cpa/src/pages/temperature/temperature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_request_firebase_request__["a" /* FirebaseRequestProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */]])
    ], TemperaturePage);
    return TemperaturePage;
}());

//# sourceMappingURL=temperature.js.map

/***/ })

});
//# sourceMappingURL=1.js.map