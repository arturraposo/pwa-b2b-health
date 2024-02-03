"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_other-navigationpage_other-navigationpage_module_ts"],{

/***/ 68562:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/other-navigationpage/other-navigationpage-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherNavigationpagePageRoutingModule": () => (/* binding */ OtherNavigationpagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _other_navigationpage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-navigationpage.page */ 34913);

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
        component: _other_navigationpage_page__WEBPACK_IMPORTED_MODULE_0__.OtherNavigationpagePage
    }
];
let OtherNavigationpagePageRoutingModule = class OtherNavigationpagePageRoutingModule {
};
OtherNavigationpagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtherNavigationpagePageRoutingModule);



/***/ }),

/***/ 67714:
/*!***************************************************************************!*\
  !*** ./src/app/pages/other-navigationpage/other-navigationpage.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherNavigationpagePageModule": () => (/* binding */ OtherNavigationpagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _other_navigationpage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-navigationpage-routing.module */ 68562);
/* harmony import */ var _other_navigationpage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other-navigationpage.page */ 34913);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let OtherNavigationpagePageModule = class OtherNavigationpagePageModule {
};
OtherNavigationpagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _other_navigationpage_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherNavigationpagePageRoutingModule
        ],
        declarations: [_other_navigationpage_page__WEBPACK_IMPORTED_MODULE_1__.OtherNavigationpagePage]
    })
], OtherNavigationpagePageModule);



/***/ }),

/***/ 34913:
/*!*************************************************************************!*\
  !*** ./src/app/pages/other-navigationpage/other-navigationpage.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherNavigationpagePage": () => (/* binding */ OtherNavigationpagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_other_navigationpage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./other-navigationpage.page.html */ 25219);
/* harmony import */ var _other_navigationpage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other-navigationpage.page.scss */ 70465);
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


let OtherNavigationpagePage = class OtherNavigationpagePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onActivityTracker() {
        this.router.navigate(['activity-tracker']);
    }
    onAddAlaram() {
        this.router.navigate(['add-alarm']);
    }
    onAddSchedule() {
        this.router.navigate(['add-schedule']);
    }
    onWorkoutSchedule() {
        this.router.navigate(['workout-schedule']);
    }
    onWorkoutTracker() {
        this.router.navigate(['workout-tracker']);
    }
    onSleepSchedule() {
        this.router.navigate(['sleep-schedule']);
    }
    onSleepTracker() {
        this.router.navigate(['sleep-tracker']);
    }
    onProgressphoto() {
        this.router.navigate(['progress-photos']);
    }
    onComparison() {
        this.router.navigate(['comparison']);
    }
    onMealSchedule() {
        this.router.navigate(['meal-schedule']);
    }
    onBreakfast() {
        this.router.navigate(['breakfast']);
    }
    onMealPlanner() {
        this.router.navigate(['meal-planner']);
    }
    onSuccess() {
        this.router.navigate(['profile']);
    }
};
OtherNavigationpagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
OtherNavigationpagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-other-navigationpage',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_other_navigationpage_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_other_navigationpage_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtherNavigationpagePage);



/***/ }),

/***/ 25219:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/other-navigationpage/other-navigationpage.page.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>Configurações</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <!-- <ion-item (click)=\"onActivityTracker()\">\n    <ion-label>Controle de Atividades</ion-label>\n    <ion-icon color=\"primary\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item> -->\n\n  <ion-item (click)=\"onAddAlaram()\">\n    <ion-label>Alarmes</ion-label>\n    <ion-icon color=\"primary\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item>\n\n  <!-- <ion-item (click)=\"onAddSchedule()\">\n    <ion-label>Agendamento de Treino</ion-label>\n    <ion-icon color=\"primary\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item> -->\n\n  <!-- <ion-item (click)=\"onWorkoutSchedule()\">\n    <ion-label>Treino Semanal</ion-label>\n    <ion-icon color=\"primary\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item> -->\n\n  <ion-item (click)=\"onWorkoutTracker()\">\n    <ion-label>Controle de Treinos</ion-label>\n    <ion-icon color=\"primary\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"onSleepSchedule()\">\n    <ion-label>Controle de Sono</ion-label>\n    <ion-icon color=\"primary\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item>\n\n  <!-- <ion-item (click)=\"onSleepTracker()\">\n    <ion-label>Sleep Tracker</ion-label>\n    <ion-icon color=\"primary\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item> -->\n\n  <!-- <ion-item (click)=\"onProgressphoto()\">\n    <ion-label>Progresso em Fotos</ion-label>\n    <ion-icon color=\"primary\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"onComparison()\">\n    <ion-label>Comparação</ion-label>\n    <ion-icon color=\"primary\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item> -->\n\n  <!-- <ion-item (click)=\"onMealSchedule()\">\n    <ion-label>Meal Schedule</ion-label>\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"onBreakfast()\">\n    <ion-label>Breakfast</ion-label>\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item> -->\n\n  <!-- <ion-item (click)=\"onMealPlanner()\">\n    <ion-label>Dieta</ion-label>\n    <ion-icon color=\"primary\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item> -->\n\n  <ion-item (click)=\"onSuccess()\">\n    <ion-label>Perfil</ion-label>\n    <ion-icon color=\"primary\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ 70465:
/*!***************************************************************************!*\
  !*** ./src/app/pages/other-navigationpage/other-navigationpage.page.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90aGVyLW5hdmlnYXRpb25wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJvdGhlci1uYXZpZ2F0aW9ucGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi8iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_other-navigationpage_other-navigationpage_module_ts.js.map