"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_atualiza-peso_atualiza-peso_module_ts"],{

/***/ 90453:
/*!*********************************************************************!*\
  !*** ./src/app/pages/atualiza-peso/atualiza-peso-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtualizaPesoPageRoutingModule": () => (/* binding */ AtualizaPesoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _atualiza_peso_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atualiza-peso.page */ 21357);




const routes = [
    {
        path: '',
        component: _atualiza_peso_page__WEBPACK_IMPORTED_MODULE_0__.AtualizaPesoPage
    }
];
let AtualizaPesoPageRoutingModule = class AtualizaPesoPageRoutingModule {
};
AtualizaPesoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AtualizaPesoPageRoutingModule);



/***/ }),

/***/ 51676:
/*!*************************************************************!*\
  !*** ./src/app/pages/atualiza-peso/atualiza-peso.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtualizaPesoPageModule": () => (/* binding */ AtualizaPesoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _atualiza_peso_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atualiza-peso-routing.module */ 90453);
/* harmony import */ var _atualiza_peso_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./atualiza-peso.page */ 21357);







let AtualizaPesoPageModule = class AtualizaPesoPageModule {
};
AtualizaPesoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _atualiza_peso_routing_module__WEBPACK_IMPORTED_MODULE_0__.AtualizaPesoPageRoutingModule
        ],
        declarations: [_atualiza_peso_page__WEBPACK_IMPORTED_MODULE_1__.AtualizaPesoPage]
    })
], AtualizaPesoPageModule);



/***/ }),

/***/ 21357:
/*!***********************************************************!*\
  !*** ./src/app/pages/atualiza-peso/atualiza-peso.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtualizaPesoPage": () => (/* binding */ AtualizaPesoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_atualiza_peso_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./atualiza-peso.page.html */ 84198);
/* harmony import */ var _atualiza_peso_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./atualiza-peso.page.scss */ 21318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 77524);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);








let AtualizaPesoPage = class AtualizaPesoPage {
    constructor(router, userSrv, toastCtrl) {
        this.router = router;
        this.userSrv = userSrv;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            peso: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    submitWeight() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const weight = this.form.value;
            if (weight.peso === null) {
                this.showToast("Insira o seu peso atualizado");
                return;
            }
            this.userSrv.insertWeight(weight).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield this.showToast("Peso inserido com sucesso");
                yield this.router.navigate(["tabs/tab4"]);
            }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield this.showToast(error);
            }));
        });
    }
    onBack() {
        this.router.navigate(["profile"]);
    }
    showToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 1000,
            });
            yield toast.present();
        });
    }
};
AtualizaPesoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
AtualizaPesoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-atualiza-peso",
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_atualiza_peso_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_atualiza_peso_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AtualizaPesoPage);



/***/ }),

/***/ 84198:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/atualiza-peso/atualiza-peso.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onBack()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Atualizar Peso</ion-title>\n  </ion-toolbar>\n</ion-header>\n  <ion-content class=\"ion-padding\">\n    \n    <div class=\"name\">\n      <ion-label class=\"head_lbl\">Você é único para nós</ion-label>\n      <ion-label class=\"sub_lbl\">\n        Para montarmos um plano personalizado de acordo com os seus objtivos precisamos saber um pouco mais sobre você, tudo bem ? \n      </ion-label>\n    </div>\n  <br><br>\n  <form [formGroup]=\"form\">    \n  <ion-card class=\"efeito-vidro\">\n      <ion-card-header>\n        <ion-card-subtitle></ion-card-subtitle>\n        <ion-card-title>Qual o seu peso atual?</ion-card-title>\n      </ion-card-header>\n      <ion-card-content> \n        <ion-input style=\"margin-left:20% ;\" type=\"number\" placeholder=\"Informe seu peso em kg\" formControlName=\"peso\"></ion-input>\n      </ion-card-content>\n    </ion-card>\n  </form>\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n        <ion-button (click)=\"submitWeight()\" expand=\"block\" shape=\"round\">\n          Enviar\n        </ion-button>\n    </ion-toolbar>\n  </ion-footer>\n");

/***/ }),

/***/ 21318:
/*!*************************************************************!*\
  !*** ./src/app/pages/atualiza-peso/atualiza-peso.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .image {\n  margin-top: 4rem;\n  display: flex;\n  justify-content: center;\n}\nion-content .image img {\n  height: 300px;\n  width: 300px;\n}\nion-content .name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin-top: 2rem;\n}\nion-content .name .head_lbl {\n  font-size: 24px;\n  font-family: \"bold\";\n  margin-bottom: 10px;\n}\nion-content .name .sub_lbl {\n  font-size: 14px;\n}\nion-footer ion-toolbar {\n  padding: 10px;\n  --border-width: 0;\n}\nion-footer ion-toolbar ion-button {\n  height: 50px;\n  font-size: 18px;\n}\nion-card-title {\n  text-align: center;\n  font-size: 18px;\n}\n.efeito-vidro {\n  background: rgba(255, 255, 255, 0.35);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(13.5px);\n  -webkit-backdrop-filter: blur(13.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  width: 80%;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dWFsaXphLXBlc28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7OztDQUFBO0FBU0k7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNSO0FBQVE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUVaO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUFRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFWjtBQUNRO0VBQ0ksZUFBQTtBQUNaO0FBS0k7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUdRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFEWjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBRko7QUFJQTtFQUNJLHFDQUFBO0VBQ0EsZ0RBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQURKIiwiZmlsZSI6ImF0dWFsaXphLXBlc28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24tY29udGVudCAuaW1hZ2Uge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5pb24tY29udGVudCAubmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5pb24tY29udGVudCAubmFtZSAuaGVhZF9sYmwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IC5uYW1lIC5zdWJfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmVmZWl0by12aWRybyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjVweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjVweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_atualiza-peso_atualiza-peso_module_ts.js.map