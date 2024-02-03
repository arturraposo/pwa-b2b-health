"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_day-details-cinco_day-details-cinco_module_ts"],{

/***/ 26168:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/day-details-cinco/day-details-cinco-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsCincoPageRoutingModule": () => (/* binding */ DayDetailsCincoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _day_details_cinco_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-details-cinco.page */ 57405);




const routes = [
    {
        path: '',
        component: _day_details_cinco_page__WEBPACK_IMPORTED_MODULE_0__.DayDetailsCincoPage
    }
];
let DayDetailsCincoPageRoutingModule = class DayDetailsCincoPageRoutingModule {
};
DayDetailsCincoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DayDetailsCincoPageRoutingModule);



/***/ }),

/***/ 65565:
/*!*********************************************************************!*\
  !*** ./src/app/pages/day-details-cinco/day-details-cinco.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsCincoPageModule": () => (/* binding */ DayDetailsCincoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _day_details_cinco_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-details-cinco-routing.module */ 26168);
/* harmony import */ var _day_details_cinco_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-details-cinco.page */ 57405);







let DayDetailsCincoPageModule = class DayDetailsCincoPageModule {
};
DayDetailsCincoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _day_details_cinco_routing_module__WEBPACK_IMPORTED_MODULE_0__.DayDetailsCincoPageRoutingModule
        ],
        declarations: [_day_details_cinco_page__WEBPACK_IMPORTED_MODULE_1__.DayDetailsCincoPage]
    })
], DayDetailsCincoPageModule);



/***/ }),

/***/ 57405:
/*!*******************************************************************!*\
  !*** ./src/app/pages/day-details-cinco/day-details-cinco.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsCincoPage": () => (/* binding */ DayDetailsCincoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_details_cinco_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./day-details-cinco.page.html */ 6347);
/* harmony import */ var _day_details_cinco_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-details-cinco.page.scss */ 28727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let DayDetailsCincoPage = class DayDetailsCincoPage {
    constructor() { }
    ngOnInit() {
    }
};
DayDetailsCincoPage.ctorParameters = () => [];
DayDetailsCincoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-day-details-cinco',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_details_cinco_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_day_details_cinco_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DayDetailsCincoPage);



/***/ }),

/***/ 6347:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/day-details-cinco/day-details-cinco.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>day-details-cinco</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 28727:
/*!*********************************************************************!*\
  !*** ./src/app/pages/day-details-cinco/day-details-cinco.page.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXktZGV0YWlscy1jaW5jby5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_day-details-cinco_day-details-cinco_module_ts.js.map