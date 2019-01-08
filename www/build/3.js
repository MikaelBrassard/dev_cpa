webpackJsonp([3],{

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(716);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, loadingCtrl, formBuilder, auth) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    RegisterPage.prototype.signUp = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Nous créons un utilisateur pour vous ...'
        });
        loading.present();
        this.auth.createUser(this.form.value.email, this.form.value.password).then(function () {
            loading.dismiss();
            _this.navCtrl.setRoot('TabsPage');
        }, function (error) {
            loading.dismiss();
            switch (error.code) {
                case 'auth/invalid-email':
                    _this.errorMessage = "S'il vous plaît entrer une adresse email valide.";
                    break;
                case 'auth/weak-password':
                    _this.errorMessage = 'Le mot de passe doit comporter au moins 6 caractères.';
                    break;
                case 'auth/email-already-in-use':
                    _this.errorMessage = 'Cet email a déjà été utilisé pour un autre compte.';
                    break;
                default:
                    _this.errorMessage = error;
                    break;
            }
            _this.hasError = true;
        });
    };
    RegisterPage.prototype.navigatePop = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/mb/dev_cpa/src/pages/register/register.html"*/'\n<ion-content padding>\n    <ion-header no-border>\n      <ion-navbar transparent>\n      </ion-navbar>\n    </ion-header>\n    <ion-icon name="person" class="user-icon"></ion-icon>\n    <div padding>\n      <form [formGroup]="form" (ngSubmit)="signUp()">\n        <ion-item>\n          <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Mot de passe" formControlName="password"></ion-input>\n        </ion-item>\n        <button ion-button block outline color="primary" class="signup-button" \n          type="submit" [disabled]="!form.valid"\n        >\n        S\'inscrire\n        </button>\n      </form>\n      <p ion-text color="danger" *ngIf="hasError">{{errorMessage}}</p>\n    </div>\n  </ion-content>\n  \n  <ion-footer>\n    <ion-toolbar class="footer">\n      <div (click)="navigatePop()">\n        <span>Vous avez déjà un compte?<strong>Se connecter</strong>.</span>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  '/*ion-inline-end:"/home/mb/dev_cpa/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=3.js.map