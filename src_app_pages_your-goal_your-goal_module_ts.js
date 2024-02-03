"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_your-goal_your-goal_module_ts"],{

/***/ 69538:
/*!*************************************************************!*\
  !*** ./src/app/pages/your-goal/your-goal-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourGoalPageRoutingModule": () => (/* binding */ YourGoalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _your_goal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./your-goal.page */ 97480);

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
        component: _your_goal_page__WEBPACK_IMPORTED_MODULE_0__.YourGoalPage
    }
];
let YourGoalPageRoutingModule = class YourGoalPageRoutingModule {
};
YourGoalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], YourGoalPageRoutingModule);



/***/ }),

/***/ 81448:
/*!*****************************************************!*\
  !*** ./src/app/pages/your-goal/your-goal.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourGoalPageModule": () => (/* binding */ YourGoalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _your_goal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./your-goal-routing.module */ 69538);
/* harmony import */ var _your_goal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./your-goal.page */ 97480);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let YourGoalPageModule = class YourGoalPageModule {
};
YourGoalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _your_goal_routing_module__WEBPACK_IMPORTED_MODULE_0__.YourGoalPageRoutingModule
        ],
        declarations: [_your_goal_page__WEBPACK_IMPORTED_MODULE_1__.YourGoalPage]
    })
], YourGoalPageModule);



/***/ }),

/***/ 97480:
/*!***************************************************!*\
  !*** ./src/app/pages/your-goal/your-goal.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourGoalPage": () => (/* binding */ YourGoalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_your_goal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./your-goal.page.html */ 95262);
/* harmony import */ var _your_goal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./your-goal.page.scss */ 3109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/

let YourGoalPage = class YourGoalPage {
    constructor() { }
    ngOnInit() {
    }
    onClick() {
    }
};
YourGoalPage.ctorParameters = () => [];
YourGoalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-your-goal',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_your_goal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_your_goal_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], YourGoalPage);



/***/ }),

/***/ 95262:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/your-goal/your-goal.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-content>\n  <div class=\"upper_div\">\n    <ion-label class=\"head_lbl\">What is your goal ?</ion-label>\n    <ion-label class=\"sub_lbl\">It will help us to choose a best <br> program for you.</ion-label>\n  </div>\n\n  <div class=\"slider\">\n    <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\">\n      <ion-slide>\n        <div class=\"images\">\n          <img src=\"assets/images/e1.png\" alt=\"\">\n          <ion-label class=\"frst_lbl\">Lose a fat</ion-label>\n          <ion-label class=\"scnd_lbl\">I have over 20 lbs to lose. I want to <br> drop all this fat and gain muscle <br>\n            mass.</ion-label>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"images\">\n          <img src=\"assets/images/e2.png\" alt=\"\">\n          <ion-label class=\"frst_lbl\">Improve shape</ion-label>\n          <ion-label class=\"scnd_lbl\">I have a low amount of body fat <br> and need / want to build more <br> muscle\n          </ion-label>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"images\">\n          <img src=\"assets/images/e3.png\" alt=\"\">\n          <ion-label class=\"frst_lbl\">Lean & Tone</ion-label>\n          <ion-label class=\"scnd_lbl\">I am 'skinny fat'. look thin but have <br> no shape. I want to add learn <br>\n            muscle in the right way</ion-label>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"onClick()\" expand=\"block\" shape=\"round\">\n      Confirm\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 3109:
/*!*****************************************************!*\
  !*** ./src/app/pages/your-goal/your-goal.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .upper_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin-top: 1rem;\n}\nion-content .upper_div .head_lbl {\n  font-size: 22px;\n  font-family: \"bold\";\n}\nion-content .upper_div .sub_lbl {\n  font-size: 14px;\n}\nion-content .slider {\n  margin-top: 2rem;\n}\nion-content .slider ion-slides ion-slide .images {\n  background: #92a3fd;\n  padding: 20px;\n  border-radius: 20px;\n}\nion-content .slider ion-slides ion-slide .images img {\n  height: 300px;\n  width: 250px;\n}\nion-content .slider ion-slides ion-slide .images .frst_lbl {\n  margin-top: 3rem;\n  font-size: 18px;\n  border-bottom: 1px solid #fff;\n  color: #fff;\n}\nion-content .slider ion-slides ion-slide .images .scnd_lbl {\n  margin-top: 16px;\n  font-size: 15px;\n  color: #fff;\n}\nion-footer ion-toolbar {\n  padding: 10px;\n  --border-width: 0;\n}\nion-footer ion-toolbar ion-button {\n  height: 50px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXItZ29hbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFTRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQUFJO0VBQ0UsZUFBQTtBQUVOO0FBQ0U7RUFDRSxnQkFBQTtBQUNKO0FBRVE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFWO0FBQ1U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNaO0FBQ1U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFDWjtBQUNVO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNaO0FBUUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQU1JO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFKTiIsImZpbGUiOiJ5b3VyLWdvYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24tY29udGVudCAudXBwZXJfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbmlvbi1jb250ZW50IC51cHBlcl9kaXYgLmhlYWRfbGJsIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG59XG5pb24tY29udGVudCAudXBwZXJfZGl2IC5zdWJfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgLnNsaWRlciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5pb24tY29udGVudCAuc2xpZGVyIGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5pbWFnZXMge1xuICBiYWNrZ3JvdW5kOiAjOTJhM2ZkO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLnNsaWRlciBpb24tc2xpZGVzIGlvbi1zbGlkZSAuaW1hZ2VzIGltZyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cbmlvbi1jb250ZW50IC5zbGlkZXIgaW9uLXNsaWRlcyBpb24tc2xpZGUgLmltYWdlcyAuZnJzdF9sYmwge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbn1cbmlvbi1jb250ZW50IC5zbGlkZXIgaW9uLXNsaWRlcyBpb24tc2xpZGUgLmltYWdlcyAuc2NuZF9sYmwge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_your-goal_your-goal_module_ts.js.map