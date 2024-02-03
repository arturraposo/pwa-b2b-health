"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_hidratar-form_hidratar-form_module_ts"],{

/***/ 24058:
/*!*********************************************************************!*\
  !*** ./src/app/pages/hidratar-form/hidratar-form-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HidratarFormPageRoutingModule": () => (/* binding */ HidratarFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _hidratar_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hidratar-form.page */ 9524);




const routes = [
    {
        path: '',
        component: _hidratar_form_page__WEBPACK_IMPORTED_MODULE_0__.HidratarFormPage
    }
];
let HidratarFormPageRoutingModule = class HidratarFormPageRoutingModule {
};
HidratarFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HidratarFormPageRoutingModule);



/***/ }),

/***/ 87979:
/*!*************************************************************!*\
  !*** ./src/app/pages/hidratar-form/hidratar-form.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HidratarFormPageModule": () => (/* binding */ HidratarFormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _hidratar_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hidratar-form-routing.module */ 24058);
/* harmony import */ var _hidratar_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hidratar-form.page */ 9524);







let HidratarFormPageModule = class HidratarFormPageModule {
};
HidratarFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _hidratar_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.HidratarFormPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_hidratar_form_page__WEBPACK_IMPORTED_MODULE_1__.HidratarFormPage]
    })
], HidratarFormPageModule);



/***/ }),

/***/ 9524:
/*!***********************************************************!*\
  !*** ./src/app/pages/hidratar-form/hidratar-form.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HidratarFormPage": () => (/* binding */ HidratarFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_hidratar_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./hidratar-form.page.html */ 80130);
/* harmony import */ var _hidratar_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hidratar-form.page.scss */ 88463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 77524);







let HidratarFormPage = class HidratarFormPage {
    constructor(route, userSrv) {
        this.route = route;
        this.userSrv = userSrv;
    }
    ngOnInit() {
        this.initialForm();
    }
    initialForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            target: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                console.log(this.form.value);
                yield this.userSrv.insertHidroUser(this.form.value).toPromise();
                this.back();
            }
            catch (error) {
                console.error('Erro ao enviar o formulário:', error);
            }
        });
    }
    loadAsyncData() {
        // Implemente aqui a lógica para carregar informações assincronamente
        // Pode ser uma chamada a outro serviço ou API
    }
    back() {
        this.route.navigate(['/tabs/tab2']);
    }
};
HidratarFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
HidratarFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-hidratar-form',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_hidratar_form_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_hidratar_form_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HidratarFormPage);



/***/ }),

/***/ 80130:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/hidratar-form/hidratar-form.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Hidratação</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <form [formGroup]=\"form\"><br>\n     <ion-item>\n      <ion-label position=\"floating\">Hidratação</ion-label>\n      <ion-input type=\"number\" formControlName=\"target\" placeholder=\"Informe a quantidade de água em ml\"></ion-input>\n    </ion-item>\n   \n  </form>\n</ion-content>\n<ion-footer >\n  <ion-toolbar color=\"primary\" (click)=\"submit()\">\n    <ion-title style=\"text-align: center;\">Enviar</ion-title>\n\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 88463:
/*!*************************************************************!*\
  !*** ./src/app/pages/hidratar-form/hidratar-form.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaWRyYXRhci1mb3JtLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_hidratar-form_hidratar-form_module_ts.js.map