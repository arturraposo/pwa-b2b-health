"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_add-schedule_add-schedule_module_ts"],{

/***/ 90614:
/*!*******************************************************************!*\
  !*** ./src/app/pages/add-schedule/add-schedule-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSchedulePageRoutingModule": () => (/* binding */ AddSchedulePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _add_schedule_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-schedule.page */ 69981);

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
        component: _add_schedule_page__WEBPACK_IMPORTED_MODULE_0__.AddSchedulePage
    }
];
let AddSchedulePageRoutingModule = class AddSchedulePageRoutingModule {
};
AddSchedulePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddSchedulePageRoutingModule);



/***/ }),

/***/ 89189:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-schedule/add-schedule.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSchedulePageModule": () => (/* binding */ AddSchedulePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _add_schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-schedule-routing.module */ 90614);
/* harmony import */ var _add_schedule_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-schedule.page */ 69981);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let AddSchedulePageModule = class AddSchedulePageModule {
};
AddSchedulePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddSchedulePageRoutingModule
        ],
        declarations: [_add_schedule_page__WEBPACK_IMPORTED_MODULE_1__.AddSchedulePage]
    })
], AddSchedulePageModule);



/***/ }),

/***/ 69981:
/*!*********************************************************!*\
  !*** ./src/app/pages/add-schedule/add-schedule.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSchedulePage": () => (/* binding */ AddSchedulePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-schedule.page.html */ 58416);
/* harmony import */ var _add_schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-schedule.page.scss */ 78884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/


let AddSchedulePage = class AddSchedulePage {
    constructor(navctr) {
        this.navctr = navctr;
    }
    ngOnInit() {
    }
    onClick() {
    }
    onBack() {
        this.navctr.back();
    }
};
AddSchedulePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
AddSchedulePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-schedule',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddSchedulePage);



/***/ }),

/***/ 58416:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/add-schedule/add-schedule.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onBack()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Agendamento de Treino</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item lines=\"none\">\n    <ion-label>Data</ion-label>\n    <ion-input type=\"date\" placeholder=\"Add schedule\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-label>Horário</ion-label>\n    <ion-input type=\"time\" placeholder=\"Add time\"></ion-input>\n  </ion-item>\n\n  <div class=\"details\">\n    <ion-label class=\"head_lbl\">Detalhes do Treino</ion-label>\n\n    <ion-item  lines=\"none\">\n      <ion-icon slot=\"start\" name=\"barbell-outline\" color=\"medium\"></ion-icon>\n      <ion-label>Escolha o treino</ion-label>\n       <ion-buttons slot=\"end\" >\n         <ion-button (click)=\"onClick()\" color=\"dark\">\n           <ion-icon slot=\"end\" name=\"chevron-forward\" color=\"medium\"></ion-icon>\n           Bíceps \n         </ion-button>\n       </ion-buttons>\n    </ion-item>\n\n    <ion-item  lines=\"none\">\n      <ion-icon slot=\"start\" name=\"swap-vertical-outline\" color=\"medium\"></ion-icon>\n      <ion-label>Dificuldade</ion-label>\n       <ion-buttons slot=\"end\" >\n         <ion-button (click)=\"onClick()\" color=\"dark\">\n           <ion-icon slot=\"end\" name=\"chevron-forward\" color=\"medium\"></ion-icon>\n           Iniciante\n         </ion-button>\n       </ion-buttons>\n    </ion-item>\n\n    <ion-item  lines=\"none\">\n      <ion-icon slot=\"start\" name=\"stats-chart-outline\" color=\"medium\"></ion-icon>\n      <ion-label>Personalizar Repetições</ion-label>\n       <ion-buttons slot=\"end\" >\n         <ion-button (click)=\"onClick()\" color=\"dark\">\n           <ion-icon slot=\"end\" name=\"chevron-forward\" color=\"medium\"></ion-icon>\n         </ion-button>\n       </ion-buttons>\n    </ion-item>\n\n    <ion-item  lines=\"none\">\n      <ion-icon slot=\"start\" name=\"stats-chart-outline\" color=\"medium\"></ion-icon>\n      <ion-label>Peso </ion-label>\n       <ion-buttons slot=\"end\" >\n         <ion-button (click)=\"onClick()\" color=\"dark\">\n           <ion-icon slot=\"end\" name=\"chevron-forward\" color=\"medium\"></ion-icon>\n         </ion-button>\n       </ion-buttons>\n    </ion-item>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n      <ion-button (click)=\"onClick()\" expand=\"block\" shape=\"round\">\n        Salvar\n      </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 78884:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-schedule/add-schedule.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-header ion-toolbar {\n  --border-width: 0;\n}\nion-content ion-item {\n  border: 1px solid #92949c2a;\n  border-radius: 10px;\n  margin-top: 16px;\n}\nion-content ion-item ion-input {\n  --padding-start: 10px;\n}\nion-content .details .head_lbl {\n  margin-top: 24px;\n  font-family: \"medium\";\n  font-size: 18px;\n}\nion-content .details ion-item ion-label {\n  font-size: 14px;\n}\nion-content .details ion-item ion-buttons ion-button {\n  font-size: 14px;\n}\nion-footer ion-toolbar {\n  padding: 10px;\n  --border-width: 0;\n}\nion-footer ion-toolbar ion-button {\n  height: 50px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zY2hlZHVsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFTRTtFQUNFLGlCQUFBO0FBQ0o7QUFJRTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBRUk7RUFDRSxxQkFBQTtBQUFOO0FBSUk7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUZOO0FBS007RUFDRSxlQUFBO0FBSFI7QUFNUTtFQUNFLGVBQUE7QUFKVjtBQVlFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBVEo7QUFVSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBUk4iLCJmaWxlIjoiYWRkLXNjaGVkdWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBidW5jaGRldmVsb3BlcnMgKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWM2VGVtcGxhdGUgUGFja1xuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjEtcHJlc2VudCBidW5jaGRldmVsb3BlcnMuXG4qL1xuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG5pb24tY29udGVudCBpb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5Mjk0OWMyYTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5kZXRhaWxzIC5oZWFkX2xibCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tY29udGVudCAuZGV0YWlscyBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCAuZGV0YWlscyBpb24taXRlbSBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-schedule_add-schedule_module_ts.js.map