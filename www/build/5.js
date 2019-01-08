webpackJsonp([5],{

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(664);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingCtrl, formBuilder, auth) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.signInWithEmail = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "S'il vous plaît, attendez ..."
        });
        loading.present();
        this.auth.signInWithEmailAndPassword(this.form.value.email, this.form.value.password)
            .then(function () {
            loading.dismiss();
            _this.navCtrl.setRoot('TabsPage');
        }, function (error) {
            loading.dismiss();
            switch (error.code) {
                case 'auth/invalid-email':
                    _this.errorMessage = "S'il vous plaît entrer une adresse email valide.";
                    break;
                case 'auth/wrong-password':
                    _this.errorMessage = "Combinaison nom d'utilisateur / mot de passe incorrecte.";
                    break;
                case 'auth/user-not-found':
                    _this.errorMessage = "Combinaison nom d'utilisateur / mot de passe incorrecte.";
                    break;
                default:
                    _this.errorMessage = error;
                    break;
            }
            _this.hasError = true;
        });
    };
    LoginPage.prototype.signInWithFacebook = function () {
        var _this = this;
        this.auth.signInWithFacebook()
            .then(function () {
            _this.navCtrl.setRoot('TabsPage');
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.navigateTo = function (page) {
        this.navCtrl.push(page);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/mb/dev_cpa/src/pages/login/login.html"*/'<ion-content padding>\n  <div class="title">Connexion</div>\n  <div padding>\n    <form [formGroup]="form" (ngSubmit)="signInWithEmail()">\n      <ion-item>\n        <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" placeholder="Mot de passe" formControlName="password"></ion-input>\n      </ion-item>\n      <button ion-button block outline color="primary" class="signin-button" \n        type="submit" [disabled]="!form.valid">\n        Se connecter blblblbllb\n      </button>\n    </form>\n    <p class="forgot-password" (click)="navigateTo(\'Password\')">Mot de passe oublié?</p>\n    <p ion-text color="danger" *ngIf="hasError">{{errorMessage}}</p>\n  </div>\n  <div class="strike">\n    <span>OU</span>\n  </div>\n  <button ion-button block clear (click)="signInWithFacebook()" color="light" class="facebook-button">\n    <ion-icon name="logo-facebook"></ion-icon> Connectez-vous avec Facebook\n  </button>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class="footer">\n    <div (click)="navigateTo(\'RegisterPage\')">\n      <span>Vous n\'avez pas de compte? <strong></strong>.</span>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/mb/dev_cpa/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=5.js.map