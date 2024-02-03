"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_exams5_exams5_module_ts"],{

/***/ 49083:
/*!*******************************************************!*\
  !*** ./src/app/pages/exams5/exams5-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams5PageRoutingModule": () => (/* binding */ Exams5PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _exams5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exams5.page */ 94679);




const routes = [
    {
        path: '',
        component: _exams5_page__WEBPACK_IMPORTED_MODULE_0__.Exams5Page
    }
];
let Exams5PageRoutingModule = class Exams5PageRoutingModule {
};
Exams5PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Exams5PageRoutingModule);



/***/ }),

/***/ 41273:
/*!***********************************************!*\
  !*** ./src/app/pages/exams5/exams5.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams5PageModule": () => (/* binding */ Exams5PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _exams5_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exams5-routing.module */ 49083);
/* harmony import */ var _exams5_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams5.page */ 94679);







let Exams5PageModule = class Exams5PageModule {
};
Exams5PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exams5_routing_module__WEBPACK_IMPORTED_MODULE_0__.Exams5PageRoutingModule
        ],
        declarations: [_exams5_page__WEBPACK_IMPORTED_MODULE_1__.Exams5Page]
    })
], Exams5PageModule);



/***/ }),

/***/ 94679:
/*!*********************************************!*\
  !*** ./src/app/pages/exams5/exams5.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams5Page": () => (/* binding */ Exams5Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exams5_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exams5.page.html */ 17027);
/* harmony import */ var _exams5_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams5.page.scss */ 65923);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);





let Exams5Page = class Exams5Page {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToSix() {
        this.router.navigate(['exams6']);
    }
};
Exams5Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
Exams5Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-exams5',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exams5_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exams5_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Exams5Page);



/***/ }),

/***/ 17027:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/exams5/exams5.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Exames</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h6 style=\"font-weight: bold; text-align:center; font-size:13px\">Você é unico para nós !!</h6>\n  <h6 style=\" text-align:center; font-size:12px\">Para fazermos um acompanhamento personalizado precisamos que informe os dados dos seus exames. </h6>\n\n  <form action=\"\"><br>\n    <ion-item>\n      <ion-label>Mês</ion-label>\n      <ion-select>\n        <ion-select-option value=\"1\">Janeiro</ion-select-option>\n        <ion-select-option value=\"2\">Fevereiro</ion-select-option>\n        <ion-select-option value=\"3\">Março</ion-select-option>\n        <ion-select-option value=\"4\">Abril</ion-select-option>\n        <ion-select-option value=\"5\">Maio</ion-select-option>\n        <ion-select-option value=\"6\">Junho</ion-select-option>\n        <ion-select-option value=\"7\">Julho</ion-select-option>\n        <ion-select-option value=\"8\">Agosto</ion-select-option>\n        <ion-select-option value=\"9\">Setembro</ion-select-option>\n        <ion-select-option value=\"10\">Outubro</ion-select-option>\n        <ion-select-option value=\"11\">Novembro</ion-select-option>\n        <ion-select-option value=\"12\">Dezembro</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">TGO</ion-label>\n      <ion-input type=\"text\" placeholder=\"Informe o TGO\"></ion-input>\n    </ion-item> \n    <ion-item>\n      <ion-label position=\"floating\">TGP</ion-label>\n      <ion-input type=\"text\" placeholder=\"Informe o TGP\"></ion-input>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label position=\"floating\">Vitamina B12</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Ferritina</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item> -->  \n   \n  </form>\n</ion-content>\n<ion-footer (click)=\"goToSix()\">\n  <ion-toolbar color=\"primary\">\n    <ion-title style=\"text-align: center;\">Enviar</ion-title>\n\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 65923:
/*!***********************************************!*\
  !*** ./src/app/pages/exams5/exams5.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtczUucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_exams5_exams5_module_ts.js.map