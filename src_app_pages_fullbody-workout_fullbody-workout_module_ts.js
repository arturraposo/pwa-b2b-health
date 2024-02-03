"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fullbody-workout_fullbody-workout_module_ts"],{

/***/ 69694:
/*!***************************************************************************!*\
  !*** ./src/app/pages/fullbody-workout/fullbody-workout-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullbodyWorkoutPageRoutingModule": () => (/* binding */ FullbodyWorkoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _fullbody_workout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullbody-workout.page */ 90490);

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
        component: _fullbody_workout_page__WEBPACK_IMPORTED_MODULE_0__.FullbodyWorkoutPage
    }
];
let FullbodyWorkoutPageRoutingModule = class FullbodyWorkoutPageRoutingModule {
};
FullbodyWorkoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FullbodyWorkoutPageRoutingModule);



/***/ }),

/***/ 41310:
/*!*******************************************************************!*\
  !*** ./src/app/pages/fullbody-workout/fullbody-workout.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullbodyWorkoutPageModule": () => (/* binding */ FullbodyWorkoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _fullbody_workout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullbody-workout-routing.module */ 69694);
/* harmony import */ var _fullbody_workout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullbody-workout.page */ 90490);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let FullbodyWorkoutPageModule = class FullbodyWorkoutPageModule {
};
FullbodyWorkoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fullbody_workout_routing_module__WEBPACK_IMPORTED_MODULE_0__.FullbodyWorkoutPageRoutingModule
        ],
        declarations: [_fullbody_workout_page__WEBPACK_IMPORTED_MODULE_1__.FullbodyWorkoutPage]
    })
], FullbodyWorkoutPageModule);



/***/ }),

/***/ 90490:
/*!*****************************************************************!*\
  !*** ./src/app/pages/fullbody-workout/fullbody-workout.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullbodyWorkoutPage": () => (/* binding */ FullbodyWorkoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fullbody_workout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fullbody-workout.page.html */ 88528);
/* harmony import */ var _fullbody_workout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullbody-workout.page.scss */ 20144);
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


let FullbodyWorkoutPage = class FullbodyWorkoutPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideOpts2 = {
            slidesPerView: 2.3,
        };
    }
    ngOnInit() {
    }
    onClick() {
        this.navCtrl.back();
    }
};
FullbodyWorkoutPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
FullbodyWorkoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-fullbody-workout',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fullbody_workout_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fullbody_workout_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FullbodyWorkoutPage);



/***/ }),

/***/ 88528:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/fullbody-workout/fullbody-workout.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-content>\n  <div class=\"title\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onClick()\" color=\"dark\">\n        <ion-icon name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\" color=\"dark\">\n        <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <div class=\"image\">\n    <img src=\"assets/images/e3.png\" alt=\"\">\n  </div>\n\n  <div class=\"content ion-padding\">\n    <ion-item lines=\"none\" class=\"text\">\n      <div class=\"workout\">\n        <ion-label class=\"bold_lbl\">Fullbody workout</ion-label>\n        <ion-label class=\"smpl_lbl\">11 Excercise | 32mins | 320 Calories Burn</ion-label>\n      </div>\n      <ion-icon slot=\"end\" name=\"heart\"></ion-icon>\n    </ion-item>\n\n    <ion-item class=\"schedule \" lines=\"none\">\n      <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\n      <ion-label>Schedule Workout</ion-label>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"onClick()\" color=\"dark\">\n          <ion-icon slot=\"end\" name=\"chevron-forward\" color=\"medium\"></ion-icon>\n          5/27,09:00 AM\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n\n    <ion-item class=\"difficult \" lines=\"none\">\n      <ion-icon slot=\"start\" name=\"swap-vertical-outline\"></ion-icon>\n      <ion-label>Difficulity</ion-label>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"onClick()\" color=\"dark\">\n          <ion-icon slot=\"end\" name=\"chevron-forward\" color=\"medium\"></ion-icon>\n          Biginner\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n\n    <div class=\"need\">\n      <ion-label class=\"left_lbl\">You'll Need</ion-label>\n      <ion-label class=\"right_lbl\">5 items</ion-label>\n    </div>\n\n    <div class=\"specialist\">\n      <ion-slides mode=\"ios\" scrollbar=\"ios\" [options]=\"slideOpts2\">\n        <ion-slide *ngFor=\"let item of [1,2,3,4,5]\">\n          <div class=\"profile\">\n            <div class=\"images\" [style.backgroundImage]=\"'url(assets/images/dumbell.png)'\"></div>\n            <ion-label class=\"bar_lbl\">Bar bell</ion-label>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div class=\"need\">\n      <ion-label class=\"left_lbl\">Exercise</ion-label>\n      <ion-label class=\"right_lbl\">3 sets</ion-label>\n    </div>\n\n    <div class=\"sets\">\n      <ion-label class=\"smpl_lbl\">Set 1</ion-label>\n      <ion-item lines=\"none\" *ngFor=\"let item of [1,2,3,4,5,6]\">\n        <ion-thumbnail>\n          <img src=\"assets/images/man.jpg\" />\n        </ion-thumbnail>\n        <div class=\"activity\">\n          <ion-label class=\"up_lbl\">Warm Up</ion-label>\n          <ion-label class=\"time_lbl\">05:00</ion-label>\n        </div>\n        <ion-icon name=\"chevron-forward-circle-outline\" slot=\"end\" color=\"medium\"></ion-icon>\n      </ion-item>\n\n      <ion-label class=\"smpl_lbl\">Set 2</ion-label>\n      <ion-item lines=\"none\" *ngFor=\"let item of [1,2,3,4,5,6]\">\n        <ion-thumbnail>\n          <img src=\"assets/images/man.jpg\" />\n        </ion-thumbnail>\n        <div class=\"activity\">\n          <ion-label class=\"up_lbl\">Warm Up</ion-label>\n          <ion-label class=\"time_lbl\">05:00</ion-label>\n        </div>\n        <ion-icon name=\"chevron-forward-circle-outline\" slot=\"end\" color=\"medium\"></ion-icon>\n      </ion-item>\n    </div>\n  </div>\n  <div class=\"footer\" slot=\"fixed\">\n    <ion-button (click)=\"onClick()\">\n      Start Workout\n    </ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 20144:
/*!*******************************************************************!*\
  !*** ./src/app/pages/fullbody-workout/fullbody-workout.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content {\n  --background: linear-gradient(#92a3fd, #92a3fd);\n  --background-repeat: no-repeat;\n  --background-size: contain;\n  height: 50vh;\n  width: 100%;\n}\nion-content .title {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 16px;\n}\nion-content .title ion-buttons ion-button {\n  height: 30px;\n  width: 30px;\n  background: #ffff;\n  border-radius: 5px;\n  margin: 0 16px;\n}\nion-content .image {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\nion-content .image img {\n  height: 200px;\n  width: 200px;\n}\nion-content .content {\n  height: max-content;\n  width: 100%;\n  background: #fff;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding-top: 16px;\n}\nion-content .content .text .workout .bold_lbl {\n  margin-bottom: 10px;\n  font-size: 18px;\n  font-family: \"bold\";\n}\nion-content .content .text .workout .smpl_lbl {\n  font-size: 12px;\n  margin-bottom: 24px;\n}\nion-content .content .text ion-icon {\n  color: red;\n}\nion-content .content .schedule {\n  --background: #92a4fd44;\n  --border-radius: 20px;\n}\nion-content .content .schedule ion-label {\n  font-size: 14px;\n}\nion-content .content .schedule ion-icon {\n  font-size: 22px;\n}\nion-content .content .schedule ion-buttons ion-button {\n  font-size: 14px;\n}\nion-content .content .difficult {\n  --background: #c58bfc57;\n  --border-radius: 20px;\n  margin-top: 1rem;\n}\nion-content .content .difficult ion-label {\n  font-size: 14px;\n}\nion-content .content .difficult ion-icon {\n  font-size: 22px;\n}\nion-content .content .difficult ion-buttons ion-button {\n  font-size: 14px;\n}\nion-content .content .need {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 1rem;\n  margin-bottom: 16px;\n}\nion-content .content .need .left_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .content .need .right_lbl {\n  font-size: 14px;\n}\nion-content .content .specialist ion-slides ion-slide {\n  padding: 10px;\n}\nion-content .content .specialist ion-slides ion-slide .profile {\n  border-radius: 10px;\n  box-shadow: 0px 0px 20px var(--box-color);\n  --box-color: #e9e9e9;\n  text-align: start;\n}\nion-content .content .specialist ion-slides ion-slide .profile .images {\n  height: 80px;\n  width: 80px;\n  border-radius: 10px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\nion-content .content .specialist ion-slides ion-slide .profile .bar_lbl {\n  font-family: \"medium\";\n  font-size: 11px;\n  margin: 0px 0px 0px 5px;\n  padding-top: 5px;\n}\nion-content .content .sets .smpl_lbl {\n  font-size: 14px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nion-content .content .sets ion-item {\n  margin-bottom: 20px;\n}\nion-content .content .sets ion-item ion-thumbnail img {\n  height: 60px;\n  width: 60px;\n  border-radius: 10px;\n}\nion-content .content .sets ion-item .activity {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n}\nion-content .content .sets ion-item .activity .up_lbl {\n  font-size: 14px;\n}\nion-content .content .sets ion-item .activity .time_lbl {\n  margin-top: 5px;\n  font-size: 14px;\n}\nion-content .footer {\n  background: transparent;\n  position: absolute;\n  bottom: 10px;\n  left: 25px;\n  width: 100%;\n  width: 100%;\n}\nion-content .footer ion-button {\n  height: 50px;\n  width: 85%;\n  --border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGxib2R5LXdvcmtvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7OztDQUFBO0FBUUE7RUFDRSwrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVGO0FBREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBR0o7QUFBTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFUjtBQUVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDTjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdRO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFEVjtBQUdRO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBRFY7QUFJTTtFQUNFLFVBQUE7QUFGUjtBQUtJO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtBQUhOO0FBSU07RUFDRSxlQUFBO0FBRlI7QUFJTTtFQUNFLGVBQUE7QUFGUjtBQUtRO0VBQ0UsZUFBQTtBQUhWO0FBT0k7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFMTjtBQU1NO0VBQ0UsZUFBQTtBQUpSO0FBTU07RUFDRSxlQUFBO0FBSlI7QUFPUTtFQUNFLGVBQUE7QUFMVjtBQVNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUE47QUFRTTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtBQU5SO0FBUU07RUFDRSxlQUFBO0FBTlI7QUFXUTtFQUNFLGFBQUE7QUFUVjtBQVVVO0VBQ0UsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFSWjtBQVNZO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtBQVBkO0FBU1k7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBUGQ7QUFjTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWlI7QUFjTTtFQUNFLG1CQUFBO0FBWlI7QUFjVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFaWjtBQWVRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFiVjtBQWNVO0VBQ0UsZUFBQTtBQVpaO0FBY1U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQVpaO0FBa0JFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFoQko7QUFpQkk7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBZk4iLCJmaWxlIjoiZnVsbGJvZHktd29ya291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzkyYTNmZCwgIzkyYTNmZCk7XG4gIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLS1iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGhlaWdodDogNTB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLnRpdGxlIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDAgMTZweDtcbn1cbmlvbi1jb250ZW50IC5pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuaW9uLWNvbnRlbnQgLmltYWdlIGltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IHtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC50ZXh0IC53b3Jrb3V0IC5ib2xkX2xibCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLnRleHQgLndvcmtvdXQgLnNtcGxfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLnRleHQgaW9uLWljb24ge1xuICBjb2xvcjogcmVkO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLnNjaGVkdWxlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJhNGZkNDQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5zY2hlZHVsZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCAuY29udGVudCAuc2NoZWR1bGUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG59XG5pb24tY29udGVudCAuY29udGVudCAuc2NoZWR1bGUgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5kaWZmaWN1bHQge1xuICAtLWJhY2tncm91bmQ6ICNjNThiZmM1NztcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLmRpZmZpY3VsdCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCAuY29udGVudCAuZGlmZmljdWx0IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLmRpZmZpY3VsdCBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLm5lZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5pb24tY29udGVudCAuY29udGVudCAubmVlZCAubGVmdF9sYmwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLm5lZWQgLnJpZ2h0X2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5zcGVjaWFsaXN0IGlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5zcGVjaWFsaXN0IGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5wcm9maWxlIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHZhcigtLWJveC1jb2xvcik7XG4gIC0tYm94LWNvbG9yOiAjZTllOWU5O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5zcGVjaWFsaXN0IGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5wcm9maWxlIC5pbWFnZXMge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLnNwZWNpYWxpc3QgaW9uLXNsaWRlcyBpb24tc2xpZGUgLnByb2ZpbGUgLmJhcl9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5zZXRzIC5zbXBsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5zZXRzIGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5zZXRzIGlvbi1pdGVtIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5zZXRzIGlvbi1pdGVtIC5hY3Rpdml0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLnNldHMgaW9uLWl0ZW0gLmFjdGl2aXR5IC51cF9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCAuY29udGVudCAuc2V0cyBpb24taXRlbSAuYWN0aXZpdHkgLnRpbWVfbGJsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCAuZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAyNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAuZm9vdGVyIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA4NSU7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fullbody-workout_fullbody-workout_module_ts.js.map