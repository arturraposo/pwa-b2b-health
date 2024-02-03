"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_exams7_exams7_module_ts"],{

/***/ 88027:
/*!*******************************************************!*\
  !*** ./src/app/pages/exams7/exams7-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams7PageRoutingModule": () => (/* binding */ Exams7PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _exams7_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exams7.page */ 40119);




const routes = [
    {
        path: '',
        component: _exams7_page__WEBPACK_IMPORTED_MODULE_0__.Exams7Page
    }
];
let Exams7PageRoutingModule = class Exams7PageRoutingModule {
};
Exams7PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Exams7PageRoutingModule);



/***/ }),

/***/ 61799:
/*!***********************************************!*\
  !*** ./src/app/pages/exams7/exams7.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams7PageModule": () => (/* binding */ Exams7PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _exams7_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exams7-routing.module */ 88027);
/* harmony import */ var _exams7_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams7.page */ 40119);







let Exams7PageModule = class Exams7PageModule {
};
Exams7PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exams7_routing_module__WEBPACK_IMPORTED_MODULE_0__.Exams7PageRoutingModule
        ],
        declarations: [_exams7_page__WEBPACK_IMPORTED_MODULE_1__.Exams7Page]
    })
], Exams7PageModule);



/***/ }),

/***/ 40119:
/*!*********************************************!*\
  !*** ./src/app/pages/exams7/exams7.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams7Page": () => (/* binding */ Exams7Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exams7_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exams7.page.html */ 68177);
/* harmony import */ var _exams7_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams7.page.scss */ 34616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let Exams7Page = class Exams7Page {
    constructor() { }
    ngOnInit() {
    }
};
Exams7Page.ctorParameters = () => [];
Exams7Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-exams7',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exams7_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exams7_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Exams7Page);



/***/ }),

/***/ 68177:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/exams7/exams7.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Exames</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h6 style=\"font-weight: bold; text-align:center; font-size:13px\">Você é unico para nós !!</h6>\n  <h6 style=\" text-align:center; font-size:12px\">Para fazermos um acompanhamento personalizado precisamos que informe os dados dos seus exames. </h6>\n\n  <form action=\"\"><br>\n\n    <ion-item>\n      <ion-label>Mês</ion-label>\n      <ion-select>\n        <ion-select-option value=\"1\">Janeiro</ion-select-option>\n        <ion-select-option value=\"2\">Fevereiro</ion-select-option>\n        <ion-select-option value=\"3\">Março</ion-select-option>\n        <ion-select-option value=\"4\">Abril</ion-select-option>\n        <ion-select-option value=\"5\">Maio</ion-select-option>\n        <ion-select-option value=\"6\">Junho</ion-select-option>\n        <ion-select-option value=\"7\">Julho</ion-select-option>\n        <ion-select-option value=\"8\">Agosto</ion-select-option>\n        <ion-select-option value=\"9\">Setembro</ion-select-option>\n        <ion-select-option value=\"10\">Outubro</ion-select-option>\n        <ion-select-option value=\"11\">Novembro</ion-select-option>\n        <ion-select-option value=\"12\">Dezembro</ion-select-option>\n      </ion-select>\n    </ion-item>\n     <ion-item>\n      <ion-label position=\"floating\">Ácido úrico</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Uréia</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item> \n   \n  </form>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-title style=\"text-align: center;\">Enviar</ion-title>\n\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 34616:
/*!***********************************************!*\
  !*** ./src/app/pages/exams7/exams7.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtczcucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_exams7_exams7_module_ts.js.map