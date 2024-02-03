"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_day-details-tres_day-details-tres_module_ts"],{

/***/ 28446:
/*!***************************************************************************!*\
  !*** ./src/app/pages/day-details-tres/day-details-tres-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsTresPageRoutingModule": () => (/* binding */ DayDetailsTresPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _day_details_tres_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-details-tres.page */ 91176);




const routes = [
    {
        path: '',
        component: _day_details_tres_page__WEBPACK_IMPORTED_MODULE_0__.DayDetailsTresPage
    }
];
let DayDetailsTresPageRoutingModule = class DayDetailsTresPageRoutingModule {
};
DayDetailsTresPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DayDetailsTresPageRoutingModule);



/***/ }),

/***/ 43154:
/*!*******************************************************************!*\
  !*** ./src/app/pages/day-details-tres/day-details-tres.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsTresPageModule": () => (/* binding */ DayDetailsTresPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _day_details_tres_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-details-tres-routing.module */ 28446);
/* harmony import */ var _day_details_tres_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-details-tres.page */ 91176);







let DayDetailsTresPageModule = class DayDetailsTresPageModule {
};
DayDetailsTresPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _day_details_tres_routing_module__WEBPACK_IMPORTED_MODULE_0__.DayDetailsTresPageRoutingModule
        ],
        declarations: [_day_details_tres_page__WEBPACK_IMPORTED_MODULE_1__.DayDetailsTresPage]
    })
], DayDetailsTresPageModule);



/***/ }),

/***/ 91176:
/*!*****************************************************************!*\
  !*** ./src/app/pages/day-details-tres/day-details-tres.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsTresPage": () => (/* binding */ DayDetailsTresPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_details_tres_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./day-details-tres.page.html */ 71919);
/* harmony import */ var _day_details_tres_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-details-tres.page.scss */ 85518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);





let DayDetailsTresPage = class DayDetailsTresPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    back() {
        this.route.navigate(['day-exercicio-segunda']);
    }
};
DayDetailsTresPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DayDetailsTresPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-day-details-tres',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_details_tres_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_day_details_tres_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DayDetailsTresPage);



/***/ }),

/***/ 71919:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/day-details-tres/day-details-tres.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button  (click)=\"back()\" >\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Treino do Dia</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h6 style=\"text-align: center ; color:#02bd99; font-weight: bold;\" >Programa Zero Inflamação - Masculino</h6>\n  <h6 style=\"text-align: center ;\" >Mês 1</h6>\n  <h6 style=\"text-align: center ; font-weight: bold;\">Abdominal bicicleta - 3 X 20</h6>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"card-center-image\" style=\"background-image: url('./assets/images/abd-bicicleta.gif');\">\n          <div class=\"card-center-bg-2\">\n            <div class=\"card-center-text\">\n            <p class=\"title\"></p>\n            <p class=\"subtitle\"></p>\n          </div>\n          </div>\n        </div>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 85518:
/*!*******************************************************************!*\
  !*** ./src/app/pages/day-details-tres/day-details-tres.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-grid {\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n}\nion-grid ion-row {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheS1kZXRhaWxzLXRyZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0FBQ1IiLCJmaWxlIjoiZGF5LWRldGFpbHMtdHJlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIFxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_day-details-tres_day-details-tres_module_ts.js.map