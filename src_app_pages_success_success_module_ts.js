"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_success_success_module_ts"],{

/***/ 99957:
/*!*********************************************************!*\
  !*** ./src/app/pages/success/success-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPageRoutingModule": () => (/* binding */ SuccessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success.page */ 97904);

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
        component: _success_page__WEBPACK_IMPORTED_MODULE_0__.SuccessPage
    }
];
let SuccessPageRoutingModule = class SuccessPageRoutingModule {
};
SuccessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SuccessPageRoutingModule);



/***/ }),

/***/ 36073:
/*!*************************************************!*\
  !*** ./src/app/pages/success/success.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPageModule": () => (/* binding */ SuccessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _success_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success-routing.module */ 99957);
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success.page */ 97904);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let SuccessPageModule = class SuccessPageModule {
};
SuccessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _success_routing_module__WEBPACK_IMPORTED_MODULE_0__.SuccessPageRoutingModule
        ],
        declarations: [_success_page__WEBPACK_IMPORTED_MODULE_1__.SuccessPage]
    })
], SuccessPageModule);



/***/ }),

/***/ 97904:
/*!***********************************************!*\
  !*** ./src/app/pages/success/success.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPage": () => (/* binding */ SuccessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_success_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./success.page.html */ 69898);
/* harmony import */ var _success_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success.page.scss */ 26391);
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


let SuccessPage = class SuccessPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onClick() {
    }
    onHome() {
        this.router.navigate(['tabs/tab1']);
    }
};
SuccessPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SuccessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-success',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_success_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_success_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SuccessPage);



/***/ }),

/***/ 69898:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/success/success.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-content class=\"ion-padding\">\n  <div class=\"image\">\n    <img src=\"assets/images/yoga.webp\" alt=\"\">\n  </div>\n  <div class=\"name\">\n    <ion-label class=\"head_lbl\">Congratulation, you have finished your workout</ion-label>\n    <ion-label class=\"sub_lbl\">\n      Excercise is king and nutrition is queen. Combine the two and you have a kingdom.\n    </ion-label>\n    <ion-label class=\"name_lbl\">-Jack Lalanne</ion-label>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n      <ion-button (click)=\"onHome()\" expand=\"block\" shape=\"round\">\n        Back To Home\n      </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 26391:
/*!*************************************************!*\
  !*** ./src/app/pages/success/success.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .image {\n  margin-top: 3rem;\n  display: flex;\n  justify-content: center;\n}\nion-content .image img {\n  height: 300px;\n  width: 300px;\n}\nion-content .name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin-top: 2rem;\n}\nion-content .name .head_lbl {\n  font-size: 24px;\n  font-family: \"bold\";\n  margin-bottom: 10px;\n}\nion-content .name .head_lbl span {\n  font-size: 44px;\n  color: #7f90e0;\n}\nion-content .name .sub_lbl {\n  font-size: 14px;\n  margin-bottom: 10px;\n}\nion-content .name .name_lbl {\n  font-size: 14px;\n}\nion-footer ion-toolbar {\n  padding: 10px;\n  --border-width: 0;\n}\nion-footer ion-toolbar ion-button {\n  height: 50px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7OztDQUFBO0FBU0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUVOO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQURNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFHUjtBQUFJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBRU47QUFBSTtFQUNFLGVBQUE7QUFFTjtBQUlFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBREo7QUFFSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBQU4iLCJmaWxlIjoic3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbmlvbi1jb250ZW50IC5pbWFnZSB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmltYWdlIGltZyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cbmlvbi1jb250ZW50IC5uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbmlvbi1jb250ZW50IC5uYW1lIC5oZWFkX2xibCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm5hbWUgLmhlYWRfbGJsIHNwYW4ge1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGNvbG9yOiAjN2Y5MGUwO1xufVxuaW9uLWNvbnRlbnQgLm5hbWUgLnN1Yl9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAubmFtZSAubmFtZV9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_success_success_module_ts.js.map