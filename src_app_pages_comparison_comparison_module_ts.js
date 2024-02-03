"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_comparison_comparison_module_ts"],{

/***/ 95637:
/*!***************************************************************!*\
  !*** ./src/app/pages/comparison/comparison-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparisonPageRoutingModule": () => (/* binding */ ComparisonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _comparison_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comparison.page */ 10232);

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
        component: _comparison_page__WEBPACK_IMPORTED_MODULE_0__.ComparisonPage
    }
];
let ComparisonPageRoutingModule = class ComparisonPageRoutingModule {
};
ComparisonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComparisonPageRoutingModule);



/***/ }),

/***/ 53402:
/*!*******************************************************!*\
  !*** ./src/app/pages/comparison/comparison.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparisonPageModule": () => (/* binding */ ComparisonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _comparison_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comparison-routing.module */ 95637);
/* harmony import */ var _comparison_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comparison.page */ 10232);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let ComparisonPageModule = class ComparisonPageModule {
};
ComparisonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _comparison_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComparisonPageRoutingModule
        ],
        declarations: [_comparison_page__WEBPACK_IMPORTED_MODULE_1__.ComparisonPage]
    })
], ComparisonPageModule);



/***/ }),

/***/ 10232:
/*!*****************************************************!*\
  !*** ./src/app/pages/comparison/comparison.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparisonPage": () => (/* binding */ ComparisonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comparison_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./comparison.page.html */ 30840);
/* harmony import */ var _comparison_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comparison.page.scss */ 70423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/



let ComparisonPage = class ComparisonPage {
    constructor(router, navctr) {
        this.router = router;
        this.navctr = navctr;
    }
    ngOnInit() {
    }
    onResult() {
        this.router.navigate(['result']);
    }
    onClick() {
    }
    onBack() {
        this.navctr.back();
    }
};
ComparisonPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
ComparisonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-comparison',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comparison_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_comparison_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComparisonPage);



/***/ }),

/***/ 30840:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/comparison/comparison.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n <ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onBack()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Comparação</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-item lines=\"none\">\n    <ion-icon slot=\"start\" name=\"calendar-outline\" color=\"medium\"></ion-icon>\n    <ion-label>Selecione o 1º mes</ion-label>\n    <ion-select placeholder=\"Mês\" interface=\"popover\">\n      <ion-select-option value=\"1\">Janeiro</ion-select-option>\n      <ion-select-option value=\"2\">Fevereiro</ion-select-option>\n      <ion-select-option value=\"3\">Março</ion-select-option>\n      <ion-select-option value=\"4\">Abril</ion-select-option>\n      <ion-select-option value=\"5\">Maio</ion-select-option>\n      <ion-select-option value=\"6\">Junho</ion-select-option>\n      <ion-select-option value=\"7\">Julho</ion-select-option>\n      <ion-select-option value=\"8\">Agosto</ion-select-option>\n      <ion-select-option value=\"9\">Setembro</ion-select-option>\n      <ion-select-option value=\"10\">Outubro</ion-select-option>\n      <ion-select-option value=\"11\">Novembro</ion-select-option>\n      <ion-select-option value=\"12\">Dezembro</ion-select-option>\n    </ion-select>\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\" color=\"medium\"></ion-icon>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-icon slot=\"start\" name=\"calendar-outline\" color=\"medium\"></ion-icon>\n    <ion-label>Selecione o 2º mes</ion-label>\n    <ion-select placeholder=\"Mês\" interface=\"popover\">\n      <ion-select-option value=\"1\">Janeiro</ion-select-option>\n      <ion-select-option value=\"2\">Fevereiro</ion-select-option>\n      <ion-select-option value=\"3\">Março</ion-select-option>\n      <ion-select-option value=\"4\">Abril</ion-select-option>\n      <ion-select-option value=\"5\">Maio</ion-select-option>\n      <ion-select-option value=\"6\">Junho</ion-select-option>\n      <ion-select-option value=\"7\">Julho</ion-select-option>\n      <ion-select-option value=\"8\">Agosto</ion-select-option>\n      <ion-select-option value=\"9\">Setembro</ion-select-option>\n      <ion-select-option value=\"10\">Outubro</ion-select-option>\n      <ion-select-option value=\"11\">Novembro</ion-select-option>\n      <ion-select-option value=\"12\">Dezembro</ion-select-option>\n    </ion-select>\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\" color=\"medium\"></ion-icon>\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"onResult()\" expand=\"block\" shape=\"round\">\n      Comparar\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 70423:
/*!*******************************************************!*\
  !*** ./src/app/pages/comparison/comparison.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-header ion-toolbar {\n  --border-width: 0;\n}\nion-content ion-item {\n  margin-top: 1rem;\n}\nion-content ion-item ion-label {\n  font-size: 16px;\n}\nion-content ion-item ion-icon {\n  font-size: 24px;\n}\nion-footer ion-toolbar {\n  padding: 10px;\n  --border-width: 0;\n}\nion-footer ion-toolbar ion-button {\n  height: 50px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhcmlzb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7OztDQUFBO0FBU0k7RUFDSSxpQkFBQTtBQUNSO0FBSUk7RUFDSSxnQkFBQTtBQURSO0FBRVE7RUFDSSxlQUFBO0FBQVo7QUFFUTtFQUNJLGVBQUE7QUFBWjtBQU1JO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBSFI7QUFJUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBRloiLCJmaWxlIjoiY29tcGFyaXNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_comparison_comparison_module_ts.js.map