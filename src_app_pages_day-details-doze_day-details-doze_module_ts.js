"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_day-details-doze_day-details-doze_module_ts"],{

/***/ 89266:
/*!***************************************************************************!*\
  !*** ./src/app/pages/day-details-doze/day-details-doze-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsDozePageRoutingModule": () => (/* binding */ DayDetailsDozePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _day_details_doze_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-details-doze.page */ 43288);




const routes = [
    {
        path: '',
        component: _day_details_doze_page__WEBPACK_IMPORTED_MODULE_0__.DayDetailsDozePage
    }
];
let DayDetailsDozePageRoutingModule = class DayDetailsDozePageRoutingModule {
};
DayDetailsDozePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DayDetailsDozePageRoutingModule);



/***/ }),

/***/ 94505:
/*!*******************************************************************!*\
  !*** ./src/app/pages/day-details-doze/day-details-doze.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsDozePageModule": () => (/* binding */ DayDetailsDozePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _day_details_doze_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-details-doze-routing.module */ 89266);
/* harmony import */ var _day_details_doze_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-details-doze.page */ 43288);







let DayDetailsDozePageModule = class DayDetailsDozePageModule {
};
DayDetailsDozePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _day_details_doze_routing_module__WEBPACK_IMPORTED_MODULE_0__.DayDetailsDozePageRoutingModule
        ],
        declarations: [_day_details_doze_page__WEBPACK_IMPORTED_MODULE_1__.DayDetailsDozePage]
    })
], DayDetailsDozePageModule);



/***/ }),

/***/ 43288:
/*!*****************************************************************!*\
  !*** ./src/app/pages/day-details-doze/day-details-doze.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsDozePage": () => (/* binding */ DayDetailsDozePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_details_doze_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./day-details-doze.page.html */ 72345);
/* harmony import */ var _day_details_doze_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-details-doze.page.scss */ 83064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let DayDetailsDozePage = class DayDetailsDozePage {
    constructor() { }
    ngOnInit() {
    }
};
DayDetailsDozePage.ctorParameters = () => [];
DayDetailsDozePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-day-details-doze',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_details_doze_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_day_details_doze_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DayDetailsDozePage);



/***/ }),

/***/ 72345:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/day-details-doze/day-details-doze.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>day-details-doze</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 83064:
/*!*******************************************************************!*\
  !*** ./src/app/pages/day-details-doze/day-details-doze.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXktZGV0YWlscy1kb3plLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_day-details-doze_day-details-doze_module_ts.js.map