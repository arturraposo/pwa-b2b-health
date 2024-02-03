"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_welcome-page_welcome-page_module_ts"],{

/***/ 67156:
/*!*******************************************************************!*\
  !*** ./src/app/pages/welcome-page/welcome-page-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePagePageRoutingModule": () => (/* binding */ WelcomePagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _welcome_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-page.page */ 18439);

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
        component: _welcome_page_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePagePage
    }
];
let WelcomePagePageRoutingModule = class WelcomePagePageRoutingModule {
};
WelcomePagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomePagePageRoutingModule);



/***/ }),

/***/ 57464:
/*!***********************************************************!*\
  !*** ./src/app/pages/welcome-page/welcome-page.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePagePageModule": () => (/* binding */ WelcomePagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _welcome_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-page-routing.module */ 67156);
/* harmony import */ var _welcome_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-page.page */ 18439);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let WelcomePagePageModule = class WelcomePagePageModule {
};
WelcomePagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _welcome_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomePagePageRoutingModule
        ],
        declarations: [_welcome_page_page__WEBPACK_IMPORTED_MODULE_1__.WelcomePagePage]
    })
], WelcomePagePageModule);



/***/ }),

/***/ 18439:
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome-page/welcome-page.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePagePage": () => (/* binding */ WelcomePagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_welcome_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./welcome-page.page.html */ 72970);
/* harmony import */ var _welcome_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-page.page.scss */ 26147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/


let WelcomePagePage = class WelcomePagePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onHome() {
        this.router.navigate(['anamnese']);
    }
};
WelcomePagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
WelcomePagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-welcome-page',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_welcome_page_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_welcome_page_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomePagePage);



/***/ }),

/***/ 72970:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/welcome-page/welcome-page.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-content class=\"ion-padding\">\n  <div class=\"image\">\n    <img src=\"assets/images/yoga.webp\" alt=\"\">\n  </div>\n  <div class=\"name\">\n    <ion-label class=\"head_lbl\">Seja Bem Vindo (a) !! </ion-label>\n    <ion-label class=\"sub_lbl\">\n      A uma nova abordagem de saúde e <br> qualidade de vida no trabalho!\n    </ion-label>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n      <ion-button (click)=\"onHome()\" expand=\"block\" shape=\"round\">\n        Vamos Começar ? \n      </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 26147:
/*!***********************************************************!*\
  !*** ./src/app/pages/welcome-page/welcome-page.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .image {\n  margin-top: 4rem;\n  display: flex;\n  justify-content: center;\n}\nion-content .image img {\n  height: 300px;\n  width: 300px;\n}\nion-content .name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin-top: 2rem;\n}\nion-content .name .head_lbl {\n  font-size: 24px;\n  font-family: \"bold\";\n  margin-bottom: 10px;\n}\nion-content .name .sub_lbl {\n  font-size: 14px;\n}\nion-footer ion-toolbar {\n  padding: 10px;\n  --border-width: 0;\n}\nion-footer ion-toolbar ion-button {\n  height: 50px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFTSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRVo7QUFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQVE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUVaO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFLSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQUZSO0FBR1E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQURaIiwiZmlsZSI6IndlbGNvbWUtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbmlvbi1jb250ZW50IC5pbWFnZSB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmltYWdlIGltZyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cbmlvbi1jb250ZW50IC5uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbmlvbi1jb250ZW50IC5uYW1lIC5oZWFkX2xibCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm5hbWUgLnN1Yl9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_welcome-page_welcome-page_module_ts.js.map