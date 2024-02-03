"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_day-details-one_day-details-one_module_ts"],{

/***/ 50800:
/*!*************************************************************************!*\
  !*** ./src/app/pages/day-details-one/day-details-one-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsOnePageRoutingModule": () => (/* binding */ DayDetailsOnePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _day_details_one_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-details-one.page */ 28021);




const routes = [
    {
        path: '',
        component: _day_details_one_page__WEBPACK_IMPORTED_MODULE_0__.DayDetailsOnePage
    }
];
let DayDetailsOnePageRoutingModule = class DayDetailsOnePageRoutingModule {
};
DayDetailsOnePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DayDetailsOnePageRoutingModule);



/***/ }),

/***/ 78018:
/*!*****************************************************************!*\
  !*** ./src/app/pages/day-details-one/day-details-one.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsOnePageModule": () => (/* binding */ DayDetailsOnePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _day_details_one_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-details-one-routing.module */ 50800);
/* harmony import */ var _day_details_one_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-details-one.page */ 28021);







let DayDetailsOnePageModule = class DayDetailsOnePageModule {
};
DayDetailsOnePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _day_details_one_routing_module__WEBPACK_IMPORTED_MODULE_0__.DayDetailsOnePageRoutingModule
        ],
        declarations: [_day_details_one_page__WEBPACK_IMPORTED_MODULE_1__.DayDetailsOnePage]
    })
], DayDetailsOnePageModule);



/***/ }),

/***/ 28021:
/*!***************************************************************!*\
  !*** ./src/app/pages/day-details-one/day-details-one.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayDetailsOnePage": () => (/* binding */ DayDetailsOnePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_details_one_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./day-details-one.page.html */ 44482);
/* harmony import */ var _day_details_one_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-details-one.page.scss */ 13764);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);





let DayDetailsOnePage = class DayDetailsOnePage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    back() {
        this.route.navigate(['day-exercicio-segunda']);
    }
};
DayDetailsOnePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DayDetailsOnePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-day-details-one',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_details_one_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_day_details_one_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DayDetailsOnePage);



/***/ }),

/***/ 44482:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/day-details-one/day-details-one.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Treino do Dia</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h6 style=\"text-align: center ; color:#02bd99; font-weight: bold;\" >Programa Zero Inflamação - Masculino</h6>\n  <h6 style=\"text-align: center ;\" >Mês 1</h6>\n  <h6 style=\"text-align: center ; font-weight: bold;\">Corrida Esteira </h6>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"card-center-image\" style=\"background-image: url('https://arte.folha.uol.com.br/cotidiano/2015/05/19/riscos-da-esteira/images/esteira.gif');\">\n          <div class=\"card-center-bg-2\">\n            <div class=\"card-center-text\">\n            <p class=\"title\"></p>\n            <p class=\"subtitle\"></p>\n          </div>\n          </div>\n        </div>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 13764:
/*!*****************************************************************!*\
  !*** ./src/app/pages/day-details-one/day-details-one.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-grid {\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n}\nion-grid ion-row {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheS1kZXRhaWxzLW9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7QUFDUiIsImZpbGUiOiJkYXktZGV0YWlscy1vbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBcclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_day-details-one_day-details-one_module_ts.js.map