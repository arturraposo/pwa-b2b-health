"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_exams6_exams6_module_ts"],{

/***/ 6158:
/*!*******************************************************!*\
  !*** ./src/app/pages/exams6/exams6-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams6PageRoutingModule": () => (/* binding */ Exams6PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _exams6_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exams6.page */ 68156);




const routes = [
    {
        path: '',
        component: _exams6_page__WEBPACK_IMPORTED_MODULE_0__.Exams6Page
    }
];
let Exams6PageRoutingModule = class Exams6PageRoutingModule {
};
Exams6PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Exams6PageRoutingModule);



/***/ }),

/***/ 47537:
/*!***********************************************!*\
  !*** ./src/app/pages/exams6/exams6.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams6PageModule": () => (/* binding */ Exams6PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _exams6_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exams6-routing.module */ 6158);
/* harmony import */ var _exams6_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams6.page */ 68156);







let Exams6PageModule = class Exams6PageModule {
};
Exams6PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exams6_routing_module__WEBPACK_IMPORTED_MODULE_0__.Exams6PageRoutingModule
        ],
        declarations: [_exams6_page__WEBPACK_IMPORTED_MODULE_1__.Exams6Page]
    })
], Exams6PageModule);



/***/ }),

/***/ 68156:
/*!*********************************************!*\
  !*** ./src/app/pages/exams6/exams6.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exams6Page": () => (/* binding */ Exams6Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exams6_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exams6.page.html */ 27161);
/* harmony import */ var _exams6_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams6.page.scss */ 50345);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);






let Exams6Page = class Exams6Page {
    constructor(router, toastCtrl) {
        this.router = router;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
    }
    goToHome() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toastSuccess = yield this.toastCtrl.create({
                message: 'Exames enviados com Sucesso!',
                duration: 3000
            });
            toastSuccess.present();
            this.router.navigate(['tabs/tab1']);
        });
    }
};
Exams6Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
Exams6Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-exams6',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exams6_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exams6_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Exams6Page);



/***/ }),

/***/ 27161:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/exams6/exams6.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Exames</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h6 style=\"font-weight: bold; text-align:center; font-size:13px\">Você é unico para nós !!</h6>\n  <h6 style=\" text-align:center; font-size:12px\">Para fazermos um acompanhamento personalizado precisamos que informe os dados dos seus exames. </h6>\n\n  <form action=\"\"><br>\n\n    <!-- <ion-item>\n      <ion-label position=\"floating\">TGO</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item> \n    <ion-item>\n      <ion-label position=\"floating\">TGP</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item> -->\n     <ion-item>\n      <ion-label position=\"floating\">Vitamina B12</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Ferritina</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item> \n   \n  </form>\n</ion-content>\n<ion-footer (click)=\"goToHome()\">\n  <ion-toolbar color=\"primary\">\n    <ion-title style=\"text-align: center;\">Enviar</ion-title>\n\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 50345:
/*!***********************************************!*\
  !*** ./src/app/pages/exams6/exams6.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtczYucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_exams6_exams6_module_ts.js.map