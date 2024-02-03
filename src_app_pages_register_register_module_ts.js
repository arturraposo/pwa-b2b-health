"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 70973:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 29298);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/



const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 69751:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 70973);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 29298);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 29298:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.page.html */ 12004);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 93866);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/company.service */ 79936);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 36636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 26928);










let RegisterPage = class RegisterPage {
    constructor(router, authSrv, loadCtrl, toastCtrl, companySrv) {
        this.router = router;
        this.authSrv = authSrv;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.companySrv = companySrv;
    }
    ngOnInit() {
        this.initialFormRegister();
        console.log(this.loadCompanys());
    }
    initialFormRegister() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            company_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            password_confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        });
    }
    onLogin() {
        this.router.navigate(['login']);
    }
    loadCompanys() {
        this.companySrv.getAllCompany().subscribe(data => {
            this.companies = data;
        });
    }
    onCompleteProfile() {
        this.router.navigate(['complete-profile']);
    }
    onClick() {
    }
    submitRegisterUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadCtrl.create({ message: "Enviando os Dados..." });
            loading.present();
            const toastSuccess = yield this.toastCtrl.create({
                message: 'Usuário Criado com Sucesso!',
                duration: 3000
            });
            const toastError = yield this.toastCtrl.create({
                message: 'Falha ao Criar Usuário',
                duration: 3000
            });
            let request;
            let dados = this.form.value;
            dados['type'] = 3;
            request = this.authSrv.register(dados);
            request.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(() => {
                this.router.navigate(['login']);
                loading.dismiss();
                toastSuccess.present();
            }, (err) => {
                loading.dismiss();
                toastError.present();
                console.error(err);
            });
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _services_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-register',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 79936:
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyService": () => (/* binding */ CompanyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




let CompanyService = class CompanyService {
    constructor(http) {
        this.http = http;
    }
    getAllCompany() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_local}/companys`);
    }
};
CompanyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CompanyService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CompanyService);



/***/ }),

/***/ 12004:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/register/register.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-content class=\"ion-padding\">\n  <div class=\"text\">\n    <ion-label class=\"head_lbl\">Criar Conta</ion-label>\n  </div>\n  <form [formGroup]=\"form\"> \n    <ion-item lines=\"none\">\n      <ion-icon name=\"person-outline\" color=\"medium\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"Nome\" formControlName=\"name\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-icon name=\"mail-outline\" color=\"medium\"></ion-icon>\n      <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\">  \n      <ion-icon name=\"briefcase-outline\" color=\"medium\"></ion-icon>  \n      <ion-select placeholder=\"Empresa\" *ngFor=\"let company of companies\" formControlName=\"company_id\">\n          <ion-select-option value=\"{{company.id}}\">{{company.company_name}}</ion-select-option>\n      </ion-select>\n     </ion-item>\n\n     <ion-item lines=\"none\">  \n      <ion-icon name=\"people-outline\" color=\"medium\"></ion-icon>\n      <ion-select placeholder=\"Informe seu sexo biológico\" formControlName=\"gender\">\n          <ion-select-option value=\"M\">Masculino</ion-select-option>\n          <ion-select-option value=\"F\">Femenino</ion-select-option>\n      </ion-select>\n     </ion-item>\n\n     <ion-item lines=\"none\">\n      <ion-icon name=\"calendar-outline\" color=\"medium\"></ion-icon>\n      <ion-input type=\"date\" placeholder=\"Data de Nascimento\" formControlName=\"birth\"></ion-input>\n    </ion-item>\n    \n       \n    <ion-item lines=\"none\">\n      <ion-icon name=\"lock-closed-outline\" color=\"medium\"></ion-icon>\n      <ion-input type=\"password\" placeholder=\"Senha\" formControlName=\"password\"></ion-input>\n      <ion-icon slot=\"end\" name=\"eye-off-outline\" color=\"medium\"></ion-icon>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-icon name=\"lock-closed-outline\" color=\"medium\"></ion-icon>\n      <ion-input type=\"password\" placeholder=\"Confirmar Senha\" formControlName=\"password_confirmation\"></ion-input>\n      <ion-icon slot=\"end\" name=\"eye-off-outline\" color=\"medium\"></ion-icon>\n    </ion-item>\n    \n    <ion-item lines=\"none\" hidden>\n      <ion-icon name=\"lock-closed-outline\" color=\"medium\"></ion-icon>\n      <ion-input type=\"number\" placeholder=\"Tipo\" formControlName=\"type\" value=\"3\"></ion-input>\n      <ion-icon slot=\"end\" name=\"eye-off-outline\" color=\"medium\"></ion-icon>\n    </ion-item>\n\n    <div class=\"terms\">\n      <ion-checkbox mode=\"md\"></ion-checkbox>\n      <ion-label>Para continuar cadastro você deve aceitar a nossa <span>Política de Privacidade</span>e os<span>Termos de Uso</span> </ion-label>\n    </div>\n\n    <div class=\"btn\">\n      <ion-button (click)=\"submitRegisterUser()\" expand=\"block\" shape=\"round\">\n        Criar\n      </ion-button>\n      <div class=\"line\">\n        <hr>\n        <ion-label class=\"or_lbl\">or</ion-label>\n        <hr>\n      </div>\n\n      <div class=\"end\">\n        <ion-label class=\"end_lbl\">\n          Ja possui uma conta ?<span (click)=\"onLogin()\">Login</span>\n        </ion-label>\n      </div>\n\n    </div>\n </form> \n</ion-content>\n");

/***/ }),

/***/ 93866:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .text {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\nion-content .text .head_lbl {\n  font-size: 22px;\n  font-family: \"bold\";\n}\nion-content .text .smpl_lbl {\n  margin-top: 2rem;\n  font-size: 16px;\n}\nion-content ion-item {\n  border: 1px solid #92949c2a;\n  border-radius: 10px;\n  margin-top: 20px;\n}\nion-content ion-item ion-input {\n  --padding-start: 10px;\n}\nion-content .terms {\n  display: flex;\n  align-items: center;\n  margin-top: 1rem;\n}\nion-content .terms ion-label {\n  margin-top: 10px;\n  margin-left: 12px;\n  font-size: 12px;\n}\nion-content .terms ion-label span {\n  border-bottom: 1px solid lightgrey;\n}\nion-content .btn {\n  margin-top: 8rem;\n}\nion-content .btn ion-button {\n  height: 50px;\n  font-size: 18px;\n}\nion-content .btn .line {\n  display: flex;\n  align-items: center;\n  margin-top: 1rem;\n}\nion-content .btn .line hr {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px solid lightgrey;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\nion-content .btn .line .or_lbl {\n  margin: 10px;\n}\nion-content .btn .button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content .btn .button ion-buttons {\n  margin: 20px;\n}\nion-content .btn .button ion-buttons ion-button {\n  height: 50px;\n  width: 50px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n}\nion-content .btn .button ion-buttons ion-button img {\n  height: 22px;\n  width: 22px;\n  margin: 10px;\n}\nion-content .btn .end {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content .btn .end .end_lbl {\n  font-size: 16px;\n  margin-top: 10px;\n}\nion-content .btn .end .end_lbl span {\n  color: #c58bf2;\n}\nion-content .select-icon {\n  margin-left: 163px !important;\n}\nion-content .select-icon-inner {\n  margin-left: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7Q0FBQTtBQVNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBRU47QUFDRTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFDRSxxQkFBQTtBQUVOO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVOO0FBRE07RUFDRSxrQ0FBQTtBQUdSO0FBQ0U7RUFDRSxnQkFBQTtBQUNKO0FBQUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUVOO0FBQUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVOO0FBRE07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdSO0FBRE07RUFDRSxZQUFBO0FBR1I7QUFBSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRU47QUFETTtFQUNFLFlBQUE7QUFHUjtBQUZRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBSVY7QUFIVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUtaO0FBQUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVOO0FBRE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFHUjtBQUZRO0VBQ0UsY0FBQTtBQUlWO0FBRUU7RUFDRSw2QkFBQTtBQUFKO0FBR0U7RUFFRSw0QkFBQTtBQUZKIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBidW5jaGRldmVsb3BlcnMgKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWM2VGVtcGxhdGUgUGFja1xuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjEtcHJlc2VudCBidW5jaGRldmVsb3BlcnMuXG4qL1xuaW9uLWNvbnRlbnQgLnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLnRleHQgLmhlYWRfbGJsIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG59XG5pb24tY29udGVudCAudGV4dCAuc21wbF9sYmwge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY29udGVudCBpb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5Mjk0OWMyYTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbn1cbmlvbi1jb250ZW50IC50ZXJtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5pb24tY29udGVudCAudGVybXMgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1jb250ZW50IC50ZXJtcyBpb24tbGFiZWwgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG59XG5pb24tY29udGVudCAuYnRuIHtcbiAgbWFyZ2luLXRvcDogOHJlbTtcbn1cbmlvbi1jb250ZW50IC5idG4gaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0biAubGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5pb24tY29udGVudCAuYnRuIC5saW5lIGhyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0biAubGluZSAub3JfbGJsIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0biAuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuYnRuIC5idXR0b24gaW9uLWJ1dHRvbnMge1xuICBtYXJnaW46IDIwcHg7XG59XG5pb24tY29udGVudCAuYnRuIC5idXR0b24gaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1jb250ZW50IC5idG4gLmJ1dHRvbiBpb24tYnV0dG9ucyBpb24tYnV0dG9uIGltZyB7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbmlvbi1jb250ZW50IC5idG4gLmVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmJ0biAuZW5kIC5lbmRfbGJsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0biAuZW5kIC5lbmRfbGJsIHNwYW4ge1xuICBjb2xvcjogI2M1OGJmMjtcbn1cbmlvbi1jb250ZW50IC5zZWxlY3QtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNjNweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLnNlbGVjdC1pY29uLWlubmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map