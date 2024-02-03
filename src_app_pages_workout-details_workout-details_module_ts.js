"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_workout-details_workout-details_module_ts"],{

/***/ 28699:
/*!*************************************************************************!*\
  !*** ./src/app/pages/workout-details/workout-details-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutDetailsPageRoutingModule": () => (/* binding */ WorkoutDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _workout_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workout-details.page */ 12088);

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
        component: _workout_details_page__WEBPACK_IMPORTED_MODULE_0__.WorkoutDetailsPage
    }
];
let WorkoutDetailsPageRoutingModule = class WorkoutDetailsPageRoutingModule {
};
WorkoutDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkoutDetailsPageRoutingModule);



/***/ }),

/***/ 43985:
/*!*****************************************************************!*\
  !*** ./src/app/pages/workout-details/workout-details.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutDetailsPageModule": () => (/* binding */ WorkoutDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _workout_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workout-details-routing.module */ 28699);
/* harmony import */ var _workout_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workout-details.page */ 12088);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let WorkoutDetailsPageModule = class WorkoutDetailsPageModule {
};
WorkoutDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _workout_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkoutDetailsPageRoutingModule
        ],
        declarations: [_workout_details_page__WEBPACK_IMPORTED_MODULE_1__.WorkoutDetailsPage]
    })
], WorkoutDetailsPageModule);



/***/ }),

/***/ 12088:
/*!***************************************************************!*\
  !*** ./src/app/pages/workout-details/workout-details.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutDetailsPage": () => (/* binding */ WorkoutDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_workout_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./workout-details.page.html */ 42672);
/* harmony import */ var _workout_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workout-details.page.scss */ 78719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/

let WorkoutDetailsPage = class WorkoutDetailsPage {
    constructor() { }
    ngOnInit() {
    }
    onClick() {
    }
};
WorkoutDetailsPage.ctorParameters = () => [];
WorkoutDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-workout-details',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_workout_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_workout_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WorkoutDetailsPage);



/***/ }),

/***/ 42672:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/workout-details/workout-details.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"upper_div\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <img src=\"assets/images/e3.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <img src=\"assets/images/e3.png\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"info\">\n    <ion-label class=\"head_lbl\">Jumping Jack</ion-label>\n    <ion-label class=\"sub_lbl\">Easy | 390 Calories Burn</ion-label>\n  </div>\n\n  <div class=\"info\">\n    <ion-label class=\"head_lbl\">Description</ion-label>\n    <ion-label class=\"sub_lbl\">\n      A jumping jack, also known as star jump and called as side-straddel hope in Us militry,\n      is a physical jumping exercise performed by jumping to a position with the legs spread <span>Read more...</span>\n    </ion-label>\n  </div>\n\n  <div class=\"steps\">\n    <ion-label class=\"left_lbl\">How to do it</ion-label>\n    <ion-label class=\"right_lbl\">4 steps</ion-label>\n  </div>\n\n  <div class=\"track\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <div class=\"left\">\n          <ion-label>01</ion-label>\n        </div>\n      </ion-col>\n      <ion-col size=\"1\" class=\"lines\">\n        <ion-icon name=\"radio-button-on-outline\" color=\"danger\"></ion-icon>\n        <div class=\"timeliner\"></div>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div class=\"right\">\n          <ion-label class=\"frst_lbl\">Spread Your Arms</ion-label>\n          <ion-label class=\"scnd_lbl\">To make the guestures feel more relaxed, stretch your arms as you start this movement.No bending of\n            hands.</ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <div class=\"left\">\n          <ion-label>02</ion-label>\n        </div>\n      </ion-col>\n      <ion-col size=\"1\" class=\"lines\">\n        <ion-icon name=\"radio-button-on-outline\" color=\"danger\"></ion-icon>\n        <div class=\"timeliner\"></div>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div class=\"right\">\n          <ion-label class=\"frst_lbl\">Spread Your Arms</ion-label>\n          <ion-label class=\"scnd_lbl\">To make the guestures feel more relaxed, stretch your arms as you start this movement.No bending of\n            hands.</ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <div class=\"left\">\n          <ion-label>03</ion-label>\n        </div>\n      </ion-col>\n      <ion-col size=\"1\" class=\"lines\">\n        <ion-icon name=\"radio-button-on-outline\" color=\"danger\"></ion-icon>\n        <div class=\"timeliner\"></div>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div class=\"right\">\n          <ion-label class=\"frst_lbl\">Spread Your Arms</ion-label>\n          <ion-label class=\"scnd_lbl\">To make the guestures feel more relaxed, stretch your arms as you start this movement.No bending of\n            hands.</ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <div class=\"left\">\n          <ion-label>04</ion-label>\n        </div>\n      </ion-col>\n      <ion-col size=\"1\" class=\"lines\">\n        <ion-icon name=\"radio-button-on-outline\" color=\"danger\"></ion-icon>\n        <div class=\"timeliner\"></div>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div class=\"right\">\n          <ion-label class=\"frst_lbl\">Spread Your Arms</ion-label>\n          <ion-label class=\"scnd_lbl\">To make the guestures feel more relaxed, stretch your arms as you start this movement.No bending of\n            hands.</ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"last_div\">\n    <ion-button (click)=\"onClick()\" expand=\"block\"  shape=\"round\">\n      Custom Repititions\n    </ion-button>\n  </div>\n\n  <ion-button (click)=\"onClick()\" expand=\"block\"  shape=\"round\">\n    Save\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ 78719:
/*!*****************************************************************!*\
  !*** ./src/app/pages/workout-details/workout-details.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-header ion-toolbar {\n  --border-width: 0;\n}\nion-content .upper_div ion-row {\n  background: #92a3fd;\n  border-radius: 20px;\n}\nion-content .upper_div ion-row ion-col {\n  display: flex;\n  justify-content: center;\n  padding: 25px;\n}\nion-content .upper_div ion-row ion-col img {\n  height: 100px;\n  width: 100px;\n}\nion-content .info {\n  margin-top: 1.5rem;\n}\nion-content .info .head_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .info .sub_lbl {\n  margin-top: 5px;\n  font-size: 14px;\n}\nion-content .info .sub_lbl span {\n  color: #92a3fd;\n}\nion-content .steps {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 24px;\n}\nion-content .steps .left_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .track {\n  margin-top: 2rem;\n}\nion-content .track ion-row ion-col {\n  position: relative;\n}\nion-content .track ion-row ion-col .left ion-label {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  font-size: 16px;\n  color: #c58bf2;\n}\nion-content .track ion-row ion-col .right {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n}\nion-content .track ion-row ion-col .right .frst_lbl {\n  font-size: 16px;\n  margin-bottom: 5px;\n}\nion-content .track ion-row ion-col .right .scnd_lbl {\n  font-size: 14px;\n  margin-bottom: 10px;\n}\nion-content .track ion-row .lines {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n}\nion-content .track ion-row .lines ion-icon {\n  font-size: 21px;\n}\nion-content .track ion-row .lines .timeliner {\n  width: 2px;\n  height: 80%;\n  border: 1px dotted #c58bf2;\n}\nion-content .track ion-row .right h5 {\n  font-size: 16px;\n}\nion-content .track ion-row .right p {\n  font-size: 12px;\n}\nion-content .last_div {\n  margin-top: 2rem;\n}\nion-content ion-button {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtvdXQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFTRTtFQUNFLGlCQUFBO0FBQ0o7QUFLSTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQUdNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQURSO0FBRVE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUFWO0FBS0U7RUFDRSxrQkFBQTtBQUhKO0FBSUk7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUFGTjtBQUlJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFGTjtBQUdNO0VBQ0UsY0FBQTtBQURSO0FBS0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFJSTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtBQUZOO0FBS0U7RUFDRSxnQkFBQTtBQUhKO0FBS007RUFDRSxrQkFBQTtBQUhSO0FBS1U7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSFo7QUFNUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFKVjtBQUtVO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBSFo7QUFLVTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUhaO0FBT007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFMUjtBQU1RO0VBQ0UsZUFBQTtBQUpWO0FBTVE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBSlY7QUFRUTtFQUNFLGVBQUE7QUFOVjtBQVFRO0VBQ0UsZUFBQTtBQU5WO0FBV0U7RUFDRSxnQkFBQTtBQVRKO0FBV0U7RUFDRSxnQkFBQTtBQVRKIiwiZmlsZSI6IndvcmtvdXQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cblxuaW9uLWNvbnRlbnQgLnVwcGVyX2RpdiBpb24tcm93IHtcbiAgYmFja2dyb3VuZDogIzkyYTNmZDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbmlvbi1jb250ZW50IC51cHBlcl9kaXYgaW9uLXJvdyBpb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5pb24tY29udGVudCAudXBwZXJfZGl2IGlvbi1yb3cgaW9uLWNvbCBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5pb24tY29udGVudCAuaW5mbyB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbmlvbi1jb250ZW50IC5pbmZvIC5oZWFkX2xibCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG59XG5pb24tY29udGVudCAuaW5mbyAuc3ViX2xibCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgLmluZm8gLnN1Yl9sYmwgc3BhbiB7XG4gIGNvbG9yOiAjOTJhM2ZkO1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBzIC5sZWZ0X2xibCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG59XG5pb24tY29udGVudCAudHJhY2sge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuaW9uLWNvbnRlbnQgLnRyYWNrIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IC50cmFjayBpb24tcm93IGlvbi1jb2wgLmxlZnQgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2M1OGJmMjtcbn1cbmlvbi1jb250ZW50IC50cmFjayBpb24tcm93IGlvbi1jb2wgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgLnRyYWNrIGlvbi1yb3cgaW9uLWNvbCAucmlnaHQgLmZyc3RfbGJsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5pb24tY29udGVudCAudHJhY2sgaW9uLXJvdyBpb24tY29sIC5yaWdodCAuc2NuZF9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAudHJhY2sgaW9uLXJvdyAubGluZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgLnRyYWNrIGlvbi1yb3cgLmxpbmVzIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuaW9uLWNvbnRlbnQgLnRyYWNrIGlvbi1yb3cgLmxpbmVzIC50aW1lbGluZXIge1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyOiAxcHggZG90dGVkICNjNThiZjI7XG59XG5pb24tY29udGVudCAudHJhY2sgaW9uLXJvdyAucmlnaHQgaDUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY29udGVudCAudHJhY2sgaW9uLXJvdyAucmlnaHQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1jb250ZW50IC5sYXN0X2RpdiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5pb24tY29udGVudCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_workout-details_workout-details_module_ts.js.map