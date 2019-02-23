webpackJsonp([5],{

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordModule", function() { return PasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(665);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordModule = /** @class */ (function () {
    function PasswordModule() {
    }
    PasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password__["a" /* Password */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password__["a" /* Password */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__password__["a" /* Password */]
            ]
        })
    ], PasswordModule);
    return PasswordModule;
}());

//# sourceMappingURL=password.module.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Password; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Password = /** @class */ (function () {
    function Password(navCtrl, loadingCtrl, formBuilder, auth) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    Password.prototype.signInWithEmail = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "S'il vous plaît, attendez ..."
        });
        loading.present();
        this.auth.sendPasswordResetEmail(this.form.value.email).then(function () {
            loading.dismiss();
            _this.hasError = false;
            _this.emailSent = true;
        }, function (error) {
            loading.dismiss();
            switch (error.code) {
                case 'auth/invalid-email':
                    _this.errorMessage = "S'il vous plaît entrer une adresse email valide.";
                    break;
                case 'auth/user-not-found':
                    _this.errorMessage = "Aucun utilisateur avec cet email n'a été trouvé.";
                    break;
                default:
                    _this.errorMessage = error;
                    break;
            }
            _this.hasError = true;
        });
    };
    Password.prototype.navigatePop = function () {
        this.navCtrl.pop();
    };
    Password = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"/home/mb/dev_cpa/src/pages/password/password.html"*/'<ion-content padding>\n  <ion-header no-border>\n    <ion-navbar transparent>\n    </ion-navbar>\n  </ion-header>\n  <ion-icon name="lock" class="lock-icon"></ion-icon>\n  <div padding>\n    <form [formGroup]="form" (ngSubmit)="signInWithEmail()" *ngIf="!emailSent">\n      <ion-item>\n        <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n      </ion-item>\n      <button ion-button block outline color="primary" class="password-recover-button" \n        type="submit" [disabled]="!form.valid">\n        Envoyer un email\n      </button>\n    </form>\n    <p ion-text class="email-soon" *ngIf="emailSent">Vous allez bientôt recevoir un email pour réinitialiser votre nouveau mot de passe.</p>\n    <p ion-text color="danger" *ngIf="hasError">{{errorMessage}}</p>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class="footer">\n    <div (click)="navigatePop()">\n      <span>Vous avez déjà un compte? <strong>Se connecter</strong>.</span>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/mb/dev_cpa/src/pages/password/password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], Password);
    return Password;
}());

//# sourceMappingURL=password.js.map

/***/ })

});
//# sourceMappingURL=5.js.map