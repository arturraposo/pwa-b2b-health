"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_introduction-page_introduction-page_module_ts"],{

/***/ 96463:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/introduction-page/introduction-page-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionPagePageRoutingModule": () => (/* binding */ IntroductionPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _introduction_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introduction-page.page */ 15739);

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
        component: _introduction_page_page__WEBPACK_IMPORTED_MODULE_0__.IntroductionPagePage
    }
];
let IntroductionPagePageRoutingModule = class IntroductionPagePageRoutingModule {
};
IntroductionPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IntroductionPagePageRoutingModule);



/***/ }),

/***/ 90987:
/*!*********************************************************************!*\
  !*** ./src/app/pages/introduction-page/introduction-page.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionPagePageModule": () => (/* binding */ IntroductionPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _introduction_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introduction-page-routing.module */ 96463);
/* harmony import */ var _introduction_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introduction-page.page */ 15739);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let IntroductionPagePageModule = class IntroductionPagePageModule {
};
IntroductionPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _introduction_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.IntroductionPagePageRoutingModule
        ],
        declarations: [_introduction_page_page__WEBPACK_IMPORTED_MODULE_1__.IntroductionPagePage]
    })
], IntroductionPagePageModule);



/***/ }),

/***/ 15739:
/*!*******************************************************************!*\
  !*** ./src/app/pages/introduction-page/introduction-page.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionPagePage": () => (/* binding */ IntroductionPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_introduction_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./introduction-page.page.html */ 74482);
/* harmony import */ var _introduction_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introduction-page.page.scss */ 33282);
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


let IntroductionPagePage = class IntroductionPagePage {
    constructor(router) {
        this.router = router;
        this.image = "/assets/images/logo.png";
    }
    ngOnInit() {
    }
    onRegister() {
        this.router.navigate(['welcome-page']);
    }
};
IntroductionPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
IntroductionPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-introduction-page',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_introduction_page_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_introduction_page_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], IntroductionPagePage);



/***/ }),

/***/ 74482:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/introduction-page/introduction-page.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-content>\n  <div class=\"name\">\n    <img class=\"image-logo\" [src]=\"image\" alt=\"\" srcset=\"\">\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n      <ion-button (click)=\"onRegister()\" expand=\"block\" shape=\"round\">\n        Cadastrar\n      </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ 33282:
/*!*********************************************************************!*\
  !*** ./src/app/pages/introduction-page/introduction-page.page.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  height: 90vh;\n}\nion-content .name .main_lbl {\n  font-size: 36px;\n  font-family: \"bold\";\n}\nion-content .name .main_lbl span {\n  font-size: 44px;\n  color: #7f90e0;\n}\nion-content .name .smpl_lbl {\n  font-size: 20px;\n  color: #a8a8bb;\n}\n.image-logo {\n  width: 50%;\n  margin: auto;\n  display: block;\n}\nion-footer ion-toolbar {\n  padding: 10px;\n  --border-width: 0;\n}\nion-footer ion-toolbar ion-button {\n  height: 50px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7Q0FBQTtBQVNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDUjtBQUFRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBRVo7QUFEWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBR2hCO0FBQVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUVaO0FBR0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBSjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQ1oiLCJmaWxlIjoiaW50cm9kdWN0aW9uLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24tY29udGVudCAubmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogOTB2aDtcbn1cbmlvbi1jb250ZW50IC5uYW1lIC5tYWluX2xibCB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLm5hbWUgLm1haW5fbGJsIHNwYW4ge1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGNvbG9yOiAjN2Y5MGUwO1xufVxuaW9uLWNvbnRlbnQgLm5hbWUgLnNtcGxfbGJsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2E4YThiYjtcbn1cblxuLmltYWdlLWxvZ28ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_introduction-page_introduction-page_module_ts.js.map