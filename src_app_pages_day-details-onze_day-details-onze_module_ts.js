"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_day-details-onze_day-details-onze_module_ts"],{

/***/ 60950:
/*!***************************************************************************!*\
  !*** ./src/app/pages/day-details-onze/day-details-onze-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsOnzePageRoutingModule": () => (/* binding */ DayDetailsOnzePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _day_details_onze_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-details-onze.page */ 9884);




const routes = [
    {
        path: '',
        component: _day_details_onze_page__WEBPACK_IMPORTED_MODULE_0__.DayDetailsOnzePage
    }
];
let DayDetailsOnzePageRoutingModule = class DayDetailsOnzePageRoutingModule {
};
DayDetailsOnzePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DayDetailsOnzePageRoutingModule);



/***/ }),

/***/ 62723:
/*!*******************************************************************!*\
  !*** ./src/app/pages/day-details-onze/day-details-onze.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsOnzePageModule": () => (/* binding */ DayDetailsOnzePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _day_details_onze_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-details-onze-routing.module */ 60950);
/* harmony import */ var _day_details_onze_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-details-onze.page */ 9884);







let DayDetailsOnzePageModule = class DayDetailsOnzePageModule {
};
DayDetailsOnzePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _day_details_onze_routing_module__WEBPACK_IMPORTED_MODULE_0__.DayDetailsOnzePageRoutingModule
        ],
        declarations: [_day_details_onze_page__WEBPACK_IMPORTED_MODULE_1__.DayDetailsOnzePage]
    })
], DayDetailsOnzePageModule);



/***/ }),

/***/ 9884:
/*!*****************************************************************!*\
  !*** ./src/app/pages/day-details-onze/day-details-onze.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsOnzePage": () => (/* binding */ DayDetailsOnzePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_details_onze_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./day-details-onze.page.html */ 455);
/* harmony import */ var _day_details_onze_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-details-onze.page.scss */ 79826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let DayDetailsOnzePage = class DayDetailsOnzePage {
    constructor() { }
    ngOnInit() {
    }
};
DayDetailsOnzePage.ctorParameters = () => [];
DayDetailsOnzePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-day-details-onze',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_details_onze_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_day_details_onze_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DayDetailsOnzePage);



/***/ }),

/***/ 455:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/day-details-onze/day-details-onze.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>day-details-onze</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 79826:
/*!*******************************************************************!*\
  !*** ./src/app/pages/day-details-onze/day-details-onze.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXktZGV0YWlscy1vbnplLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_day-details-onze_day-details-onze_module_ts.js.map