"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_exams3_exams3_module_ts"],{

/***/ 13592:
/*!*******************************************************!*\
  !*** ./src/app/pages/exams3/exams3-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams3PageRoutingModule": () => (/* binding */ Exams3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _exams3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exams3.page */ 34393);




const routes = [
    {
        path: '',
        component: _exams3_page__WEBPACK_IMPORTED_MODULE_0__.Exams3Page
    }
];
let Exams3PageRoutingModule = class Exams3PageRoutingModule {
};
Exams3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Exams3PageRoutingModule);



/***/ }),

/***/ 19327:
/*!***********************************************!*\
  !*** ./src/app/pages/exams3/exams3.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams3PageModule": () => (/* binding */ Exams3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _exams3_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exams3-routing.module */ 13592);
/* harmony import */ var _exams3_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams3.page */ 34393);







let Exams3PageModule = class Exams3PageModule {
};
Exams3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exams3_routing_module__WEBPACK_IMPORTED_MODULE_0__.Exams3PageRoutingModule
        ],
        declarations: [_exams3_page__WEBPACK_IMPORTED_MODULE_1__.Exams3Page]
    })
], Exams3PageModule);



/***/ }),

/***/ 34393:
/*!*********************************************!*\
  !*** ./src/app/pages/exams3/exams3.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams3Page": () => (/* binding */ Exams3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exams3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exams3.page.html */ 97778);
/* harmony import */ var _exams3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams3.page.scss */ 45810);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);





let Exams3Page = class Exams3Page {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToFour() {
        this.router.navigate(['exams4']);
    }
};
Exams3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
Exams3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-exams3',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exams3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exams3_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Exams3Page);



/***/ }),

/***/ 97778:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/exams3/exams3.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Exames</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h6 style=\"font-weight: bold; text-align:center; font-size:13px\">Você é unico para nós !!</h6>\n  <h6 style=\" text-align:center; font-size:12px\">Para fazermos um acompanhamento personalizado precisamos que informe os dados dos seus exames. </h6>\n\n  <form action=\"\"><br>\n    <ion-item>\n      <ion-label>Mês</ion-label>\n      <ion-select>\n        <ion-select-option value=\"1\">Janeiro</ion-select-option>\n        <ion-select-option value=\"2\">Fevereiro</ion-select-option>\n        <ion-select-option value=\"3\">Março</ion-select-option>\n        <ion-select-option value=\"4\">Abril</ion-select-option>\n        <ion-select-option value=\"5\">Maio</ion-select-option>\n        <ion-select-option value=\"6\">Junho</ion-select-option>\n        <ion-select-option value=\"7\">Julho</ion-select-option>\n        <ion-select-option value=\"8\">Agosto</ion-select-option>\n        <ion-select-option value=\"9\">Setembro</ion-select-option>\n        <ion-select-option value=\"10\">Outubro</ion-select-option>\n        <ion-select-option value=\"11\">Novembro</ion-select-option>\n        <ion-select-option value=\"12\">Dezembro</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label position=\"floating\">Glicemia:</ion-label>\n      <ion-input type=\"text\" placeholder=\"Informe a sua Glicemia\"> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Insulina:</ion-label>\n      <ion-input type=\"text\" placeholder=\"Informe a sua Insulina\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Homa-ir:</ion-label>\n      <ion-input type=\"text\" placeholder=\"Informe o seu índice de Homa-ir\"></ion-input>\n    </ion-item>  -->\n    \n     <!-- <ion-item>\n      <ion-label position=\"floating\">Testosterona Total:</ion-label>\n      <ion-input type=\"text\"  placeholder=\"Informe a sua Testosterona Total\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">IGF1:</ion-label>\n      <ion-input type=\"text\"  placeholder=\"Informe o IGF1\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">S-DHEA:</ion-label>\n      <ion-input type=\"text\"  placeholder=\"Informe o S-DHEA\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Cortisol:</ion-label>\n      <ion-input type=\"text\"  placeholder=\"Informe o Cortisol \"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Vitamina D:</ion-label>\n      <ion-input type=\"text\"  placeholder=\"Informe a Vitamina D\"></ion-input>\n    </ion-item> -->\n    <ion-item>\n      <ion-label position=\"floating\">CPK:</ion-label>\n      <ion-input type=\"text\" placeholder=\"Informe o CPK\"></ion-input>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label position=\"floating\">Colesterol Total</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Colesterol Total</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">LDL</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Triglicerides</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Homocisteina </ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">TGO</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">TGP</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Vitamina B12</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Ferritina</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item> --> \n   \n  </form>\n</ion-content>\n<ion-footer (click)=\"goToFour()\">\n  <ion-toolbar color=\"primary\">\n    <ion-title style=\"text-align: center;\">Enviar</ion-title>\n\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 45810:
/*!***********************************************!*\
  !*** ./src/app/pages/exams3/exams3.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtczMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_exams3_exams3_module_ts.js.map