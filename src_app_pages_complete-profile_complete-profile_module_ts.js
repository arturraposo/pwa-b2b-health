"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_complete-profile_complete-profile_module_ts"],{

/***/ 3164:
/*!***************************************************************************!*\
  !*** ./src/app/pages/complete-profile/complete-profile-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteProfilePageRoutingModule": () => (/* binding */ CompleteProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _complete_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-profile.page */ 7860);

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
        component: _complete_profile_page__WEBPACK_IMPORTED_MODULE_0__.CompleteProfilePage
    }
];
let CompleteProfilePageRoutingModule = class CompleteProfilePageRoutingModule {
};
CompleteProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompleteProfilePageRoutingModule);



/***/ }),

/***/ 12129:
/*!*******************************************************************!*\
  !*** ./src/app/pages/complete-profile/complete-profile.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteProfilePageModule": () => (/* binding */ CompleteProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _complete_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-profile-routing.module */ 3164);
/* harmony import */ var _complete_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete-profile.page */ 7860);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let CompleteProfilePageModule = class CompleteProfilePageModule {
};
CompleteProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _complete_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompleteProfilePageRoutingModule
        ],
        declarations: [_complete_profile_page__WEBPACK_IMPORTED_MODULE_1__.CompleteProfilePage]
    })
], CompleteProfilePageModule);



/***/ }),

/***/ 7860:
/*!*****************************************************************!*\
  !*** ./src/app/pages/complete-profile/complete-profile.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteProfilePage": () => (/* binding */ CompleteProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complete_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complete-profile.page.html */ 78915);
/* harmony import */ var _complete_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete-profile.page.scss */ 28002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/



let CompleteProfilePage = class CompleteProfilePage {
    constructor(router, navCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    onWelcome() {
        this.navCtrl.navigateRoot(['tabs']);
    }
    onClick() {
    }
};
CompleteProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
CompleteProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-complete-profile',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complete_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complete_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompleteProfilePage);



/***/ }),

/***/ 78915:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/complete-profile/complete-profile.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-content class=\"ion-padding\">\n  <div class=\"image\">\n    <img src=\"assets/images/yoga.webp\" alt=\"\">\n  </div>\n  <div class=\"name\">\n    <ion-label class=\"bold_lbl\">Let's complete your profile</ion-label>\n    <ion-label class=\"smpl_lbl\">It will help us to know more about you</ion-label>\n  </div>\n\n    <ion-item lines=\"none\">\n      <ion-icon name=\"people-outline\" color=\"medium\" style=\"margin-right: 10px;\"></ion-icon>\n      <ion-select value=\"\" multiple=\"true\" placeholder=\"Choose Gender\">\n        <ion-select-option value=\"male\">Male</ion-select-option>\n        <ion-select-option value=\"female\">Female</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-input type=\"date\" placeholder=\"Date of birth\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-icon name=\"scale-outline\" color=\"medium\" style=\"margin-right: 10px;\"></ion-icon>\n      <ion-input type=\"number\" placeholder=\"Your Weight\"></ion-input>\n      <ion-button (click)=\"onClick()\" expand=\"block\" slot=\"end\" shape=\"round\" color=\"danger\">\n        KG\n      </ion-button>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-icon name=\"swap-vertical-outline\" color=\"medium\" style=\"margin-right: 10px;\"></ion-icon>\n      <ion-input type=\"number\" placeholder=\"Your Height\"></ion-input>\n      <ion-button (click)=\"onClick()\" expand=\"block\" slot=\"end\" shape=\"round\" color=\"danger\">\n        CM\n      </ion-button>\n    </ion-item>\n\n    <div class=\"button\">\n      <ion-button (click)=\"onWelcome()\" expand=\"block\" shape=\"round\">\n        Next\n        <ion-icon name=\"chevron-forward\" style=\"margin-left: 10px;\"></ion-icon>\n      </ion-button>\n    </div>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ 28002:
/*!*******************************************************************!*\
  !*** ./src/app/pages/complete-profile/complete-profile.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .image {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n}\nion-content .image img {\n  height: 300px;\n  width: 300px;\n}\nion-content .name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin-top: 1.5rem;\n}\nion-content .name .bold_lbl {\n  font-size: 24px;\n  font-family: \"bold\";\n  margin-bottom: 10px;\n}\nion-content .name .bold_lbl span {\n  font-size: 44px;\n  color: #7f90e0;\n}\nion-content .name .smpl_lbl {\n  font-size: 14px;\n  margin-bottom: 16px;\n}\nion-content ion-item {\n  border: 1px solid #92949c2a;\n  border-radius: 10px;\n  margin-top: 16px;\n}\nion-content ion-item ion-input {\n  --padding-start: 10px;\n}\nion-content .button {\n  margin-top: 1.5rem;\n}\nion-content .button ion-button {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7OztDQUFBO0FBU0k7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNSO0FBQVE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUVaO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUFRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFWjtBQURZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFHaEI7QUFBUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUVaO0FBQ0k7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUFRO0VBQ0kscUJBQUE7QUFFWjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUFRO0VBQ0ksWUFBQTtBQUVaIiwiZmlsZSI6ImNvbXBsZXRlLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24tY29udGVudCAuaW1hZ2Uge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5pb24tY29udGVudCAubmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbmlvbi1jb250ZW50IC5uYW1lIC5ib2xkX2xibCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm5hbWUgLmJvbGRfbGJsIHNwYW4ge1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGNvbG9yOiAjN2Y5MGUwO1xufVxuaW9uLWNvbnRlbnQgLm5hbWUgLnNtcGxfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTI5NDljMmE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5pb24tY29udGVudCBpb24taXRlbSBpb24taW5wdXQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG59XG5pb24tY29udGVudCAuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuaW9uLWNvbnRlbnQgLmJ1dHRvbiBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_complete-profile_complete-profile_module_ts.js.map