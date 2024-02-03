"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_anamnese_anamnese_module_ts"],{

/***/ 1403:
/*!***********************************************************!*\
  !*** ./src/app/pages/anamnese/anamnese-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnamnesePageRoutingModule": () => (/* binding */ AnamnesePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 3036);
/* harmony import */ var _anamnese_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anamnese.page */ 81689);





const routes = [
    {
        path: '',
        component: _anamnese_page__WEBPACK_IMPORTED_MODULE_1__.AnamnesePage,
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
let AnamnesePageRoutingModule = class AnamnesePageRoutingModule {
};
AnamnesePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AnamnesePageRoutingModule);



/***/ }),

/***/ 48803:
/*!***************************************************!*\
  !*** ./src/app/pages/anamnese/anamnese.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnamnesePageModule": () => (/* binding */ AnamnesePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _anamnese_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anamnese-routing.module */ 1403);
/* harmony import */ var _anamnese_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anamnese.page */ 81689);







let AnamnesePageModule = class AnamnesePageModule {
};
AnamnesePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _anamnese_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnamnesePageRoutingModule
        ],
        declarations: [_anamnese_page__WEBPACK_IMPORTED_MODULE_1__.AnamnesePage]
    })
], AnamnesePageModule);



/***/ }),

/***/ 81689:
/*!*************************************************!*\
  !*** ./src/app/pages/anamnese/anamnese.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnamnesePage": () => (/* binding */ AnamnesePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_anamnese_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./anamnese.page.html */ 84303);
/* harmony import */ var _anamnese_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anamnese.page.scss */ 16107);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ 77524);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);







let AnamnesePage = class AnamnesePage {
    constructor(router, userSrv) {
        this.router = router;
        this.userSrv = userSrv;
    }
    ngOnInit() {
        this.initialForm();
    }
    initialForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            peso: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
        });
    }
    submitWeigth() {
        let weight = this.form.value;
        this.userSrv.insertWeight(weight).subscribe(() => {
            this.updateWeight();
            this.router.navigate(['altura']);
        });
    }
    updateWeight() {
        this.userSrv.setObservableWeight(this.form.value.peso);
    }
};
AnamnesePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
AnamnesePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-anamnese',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_anamnese_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_anamnese_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AnamnesePage);



/***/ }),

/***/ 84303:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/anamnese/anamnese.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n  <ion-content class=\"ion-padding\">\r\n    \r\n    <div class=\"name\">\r\n      <ion-label class=\"head_lbl\">Você é único para nós</ion-label>\r\n      <ion-label class=\"sub_lbl\">\r\n        Para montarmos um plano personalizado de acordo com os seus objtivos precisamos saber um pouco mais sobre você, tudo bem ? \r\n      </ion-label>\r\n    </div>\r\n  <br><br>\r\n  <form [formGroup]=\"form\">    \r\n  <ion-card class=\"efeito-vidro\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle></ion-card-subtitle>\r\n        <ion-card-title>Qual o seu peso atual?</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content> \r\n        <ion-input style=\"margin-left:20% ;\" type=\"number\" placeholder=\"Informe seu peso em kg\" formControlName=\"peso\"></ion-input>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </form>\r\n  </ion-content>\r\n\r\n  <ion-footer>\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"submitWeigth()\" expand=\"block\" shape=\"round\">\r\n          Continuar \r\n        </ion-button>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n");

/***/ }),

/***/ 16107:
/*!***************************************************!*\
  !*** ./src/app/pages/anamnese/anamnese.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .image {\n  margin-top: 4rem;\n  display: flex;\n  justify-content: center;\n}\nion-content .image img {\n  height: 300px;\n  width: 300px;\n}\nion-content .name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin-top: 2rem;\n}\nion-content .name .head_lbl {\n  font-size: 24px;\n  font-family: \"bold\";\n  margin-bottom: 10px;\n}\nion-content .name .sub_lbl {\n  font-size: 14px;\n}\nion-footer ion-toolbar {\n  padding: 10px;\n  --border-width: 0;\n}\nion-footer ion-toolbar ion-button {\n  height: 50px;\n  font-size: 18px;\n}\nion-card-title {\n  text-align: center;\n  font-size: 18px;\n}\n.efeito-vidro {\n  background: rgba(255, 255, 255, 0.35);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(13.5px);\n  -webkit-backdrop-filter: blur(13.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  width: 80%;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYW1uZXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7Q0FBQTtBQVNJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUFRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFFWjtBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFBUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRVo7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUtJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBRlI7QUFHUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBRFo7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBSUE7RUFDSSxxQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFESiIsImZpbGUiOiJhbmFtbmVzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbmlvbi1jb250ZW50IC5pbWFnZSB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmltYWdlIGltZyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cbmlvbi1jb250ZW50IC5uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbmlvbi1jb250ZW50IC5uYW1lIC5oZWFkX2xibCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm5hbWUgLnN1Yl9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZWZlaXRvLXZpZHJvIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTMuNXB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTMuNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_anamnese_anamnese_module_ts.js.map