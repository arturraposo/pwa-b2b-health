"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_exams2_exams2_module_ts"],{

/***/ 80206:
/*!*******************************************************!*\
  !*** ./src/app/pages/exams2/exams2-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams2PageRoutingModule": () => (/* binding */ Exams2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _exams2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exams2.page */ 8489);




const routes = [
    {
        path: '',
        component: _exams2_page__WEBPACK_IMPORTED_MODULE_0__.Exams2Page
    }
];
let Exams2PageRoutingModule = class Exams2PageRoutingModule {
};
Exams2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Exams2PageRoutingModule);



/***/ }),

/***/ 82856:
/*!***********************************************!*\
  !*** ./src/app/pages/exams2/exams2.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams2PageModule": () => (/* binding */ Exams2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _exams2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exams2-routing.module */ 80206);
/* harmony import */ var _exams2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams2.page */ 8489);







let Exams2PageModule = class Exams2PageModule {
};
Exams2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exams2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Exams2PageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_exams2_page__WEBPACK_IMPORTED_MODULE_1__.Exams2Page]
    })
], Exams2PageModule);



/***/ }),

/***/ 8489:
/*!*********************************************!*\
  !*** ./src/app/pages/exams2/exams2.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams2Page": () => (/* binding */ Exams2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exams2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exams2.page.html */ 63592);
/* harmony import */ var _exams2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams2.page.scss */ 41371);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_services_exams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/exams.service */ 61028);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);







let Exams2Page = class Exams2Page {
    constructor(router, examSrv) {
        this.router = router;
        this.examSrv = examSrv;
    }
    ngOnInit() {
        this.initialFormLogin();
    }
    initialFormLogin() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            testosterona: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            igf1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            sdhea: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            cortisol: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            vitamina: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
        });
    }
    goToThree() {
        this.router.navigate(['exams3']);
    }
    submit() {
        console.log(this.form.value);
        this.examSrv.insertPerfilHormonalUser(this.form.value).subscribe(() => {
            this.router.navigate(['menu-exames']);
            location.reload();
        });
    }
    back() {
        this.router.navigate(['menu-exames']);
    }
};
Exams2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_exams_service__WEBPACK_IMPORTED_MODULE_2__.ExamsService }
];
Exams2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-exams2',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exams2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exams2_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Exams2Page);



/***/ }),

/***/ 63592:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/exams2/exams2.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Exames</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h6 style=\"font-weight: bold; text-align:center; font-size:13px\">Você é unico para nós !!</h6>\n  <h6 style=\" text-align:center; font-size:12px\">Para fazermos um acompanhamento personalizado precisamos que informe os dados dos seus exames. </h6>\n\n  <form [formGroup]=\"form\"><br>\n     <ion-item>\n      <ion-label>Mês</ion-label>\n      <ion-select formControlName=\"mes\">\n        <ion-select-option value=\"1\">Janeiro</ion-select-option>\n        <ion-select-option value=\"2\">Fevereiro</ion-select-option>\n        <ion-select-option value=\"3\">Março</ion-select-option>\n        <ion-select-option value=\"4\">Abril</ion-select-option>\n        <ion-select-option value=\"5\">Maio</ion-select-option>\n        <ion-select-option value=\"6\">Junho</ion-select-option>\n        <ion-select-option value=\"7\">Julho</ion-select-option>\n        <ion-select-option value=\"8\">Agosto</ion-select-option>\n        <ion-select-option value=\"9\">Setembro</ion-select-option>\n        <ion-select-option value=\"10\">Outubro</ion-select-option>\n        <ion-select-option value=\"11\">Novembro</ion-select-option>\n        <ion-select-option value=\"12\">Dezembro</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n     <ion-item>\n      <ion-label position=\"floating\">Testosterona Total:</ion-label>\n      <ion-input type=\"text\" formControlName=\"testosterona\"  placeholder=\"Informe a sua Testosterona Total\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">IGF1:</ion-label>\n      <ion-input type=\"text\" formControlName=\"igf1\"  placeholder=\"Informe o IGF1\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">S-DHEA:</ion-label>\n      <ion-input type=\"text\" formControlName=\"sdhea\"  placeholder=\"Informe o S-DHEA\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Cortisol:</ion-label>\n      <ion-input type=\"text\" formControlName=\"cortisol\" placeholder=\"Informe o Cortisol \"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Vitamina D:</ion-label>\n      <ion-input type=\"text\" formControlName=\"vitamina\" placeholder=\"Informe a Vitamina D\"></ion-input>\n    </ion-item>\n\n   \n  </form>\n</ion-content>\n<ion-footer (click)=\"submit()\">\n  <ion-toolbar color=\"primary\">\n    <ion-title style=\"text-align: center;\">Enviar</ion-title>\n\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 41371:
/*!***********************************************!*\
  !*** ./src/app/pages/exams2/exams2.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtczIucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_exams2_exams2_module_ts.js.map