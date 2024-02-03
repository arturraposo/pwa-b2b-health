"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_progress-photos_progress-photos_module_ts"],{

/***/ 14970:
/*!*************************************************************************!*\
  !*** ./src/app/pages/progress-photos/progress-photos-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressPhotosPageRoutingModule": () => (/* binding */ ProgressPhotosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _progress_photos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-photos.page */ 92728);

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
        component: _progress_photos_page__WEBPACK_IMPORTED_MODULE_0__.ProgressPhotosPage
    }
];
let ProgressPhotosPageRoutingModule = class ProgressPhotosPageRoutingModule {
};
ProgressPhotosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProgressPhotosPageRoutingModule);



/***/ }),

/***/ 97921:
/*!*****************************************************************!*\
  !*** ./src/app/pages/progress-photos/progress-photos.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressPhotosPageModule": () => (/* binding */ ProgressPhotosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _progress_photos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-photos-routing.module */ 14970);
/* harmony import */ var _progress_photos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress-photos.page */ 92728);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let ProgressPhotosPageModule = class ProgressPhotosPageModule {
};
ProgressPhotosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _progress_photos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProgressPhotosPageRoutingModule
        ],
        declarations: [_progress_photos_page__WEBPACK_IMPORTED_MODULE_1__.ProgressPhotosPage]
    })
], ProgressPhotosPageModule);



/***/ }),

/***/ 92728:
/*!***************************************************************!*\
  !*** ./src/app/pages/progress-photos/progress-photos.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressPhotosPage": () => (/* binding */ ProgressPhotosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_progress_photos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./progress-photos.page.html */ 54910);
/* harmony import */ var _progress_photos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress-photos.page.scss */ 15053);
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


let ProgressPhotosPage = class ProgressPhotosPage {
    constructor(navctr) {
        this.navctr = navctr;
        this.slideOpts2 = {
            slidesPerView: 3.1,
        };
    }
    ngOnInit() {
    }
    onClick() {
    }
    onBack() {
        this.navctr.back();
    }
};
ProgressPhotosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
ProgressPhotosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-progress-photos',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_progress_photos_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_progress_photos_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProgressPhotosPage);



/***/ }),

/***/ 54910:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/progress-photos/progress-photos.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onBack()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Progresso em Fotos</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n  \n\n  <div class=\"collection\">\n    <div class=\"gallery\">\n    <ion-label class=\"left_lbl\">Galeria</ion-label>\n    <ion-label class=\"right_lbl\">Ver Mais</ion-label>\n    </div>\n    <div class=\"specialist\">\n      <ion-label class=\"date_lbl\">2 de Junho </ion-label>\n      <ion-slides mode=\"ios\" scrollbar=\"ios\" [options]=\"slideOpts2\">\n        <ion-slide  *ngFor=\"let item of [1,2,3,4,5]\">\n         <div class=\"profile\">\n           <div class=\"images\" [style.backgroundImage]=\"'url(assets/images/man.jpg)'\"></div>\n         </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"specialist\">\n      <ion-label class=\"date_lbl\">5 de Maio</ion-label>\n      <ion-slides mode=\"ios\" scrollbar=\"ios\" [options]=\"slideOpts2\">\n        <ion-slide  *ngFor=\"let item of [1,2,3,4,5]\">\n         <div class=\"profile\">\n           <div class=\"images\" [style.backgroundImage]=\"'url(assets/images/man.jpg)'\"></div>\n         </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 15053:
/*!*****************************************************************!*\
  !*** ./src/app/pages/progress-photos/progress-photos.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-header ion-toolbar {\n  --border-width: 0;\n}\nion-content .upper_div ion-item {\n  --background: rgba(255, 102, 102, 0.24);\n  border-radius: 20px;\n}\nion-content .upper_div ion-item ion-thumbnail {\n  margin: 20px 0;\n}\nion-content .upper_div ion-item ion-thumbnail img {\n  height: 60px;\n  width: 60px;\n  background: #fff;\n  border-radius: 50%;\n}\nion-content .upper_div ion-item .activity {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n}\nion-content .upper_div ion-item .activity .red_lbl {\n  font-family: \"medium\";\n  color: #ff6666;\n}\nion-content .upper_div ion-item .activity .sub_lbl {\n  font-size: 16px;\n}\nion-content .upper_div ion-item ion-icon {\n  font-size: 20px;\n}\nion-content .track {\n  margin-top: 1rem;\n  background: #92a4fd34;\n  border-radius: 20px;\n  padding: 5px;\n}\nion-content .track ion-row ion-col .first_side {\n  display: flex;\n  flex-direction: column;\n}\nion-content .track ion-row ion-col .first_side .txt_lbl {\n  margin-left: 10px;\n  margin-top: 5px;\n  font-size: 14px;\n}\nion-content .track ion-row ion-col .first_side .txt_lbl span {\n  color: #92a3fd;\n}\nion-content .track ion-row ion-col .first_side ion-button {\n  width: 100%;\n  padding-left: 35px;\n  padding-right: 35px;\n  margin-top: 10px;\n}\nion-content .track ion-row ion-col img {\n  margin-top: 10px;\n  height: 100px;\n  width: 100px;\n}\nion-content .schedule {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1rem;\n  background: #92a4fd34;\n  padding: 5px;\n  border-radius: 10px;\n}\nion-content .schedule .inside_lbl {\n  margin-left: 5px;\n  font-size: 16px;\n}\nion-content .schedule ion-button {\n  height: 35px;\n}\nion-content .collection {\n  margin-top: 2rem;\n}\nion-content .collection .gallery {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\nion-content .collection .gallery .left_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .collection .gallery .right_lbl {\n  font-size: 14px;\n}\nion-content .collection .specialist .date_lbl {\n  color: gray;\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\nion-content .collection .specialist ion-slides ion-slide {\n  padding: 10px;\n}\nion-content .collection .specialist ion-slides ion-slide .profile {\n  border-radius: 10px;\n  box-shadow: 0px 0px 20px var(--box-color);\n  --box-color: #e9e9e9;\n  text-align: start;\n}\nion-content .collection .specialist ion-slides ion-slide .profile .images {\n  height: 100px;\n  width: 100px;\n  border-radius: 10px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLXBob3Rvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFTRTtFQUNFLGlCQUFBO0FBQ0o7QUFLSTtFQUNFLHVDQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQUdNO0VBQ0UsY0FBQTtBQURSO0FBRVE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBVjtBQUdNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUVRO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQVY7QUFFUTtFQUNFLGVBQUE7QUFBVjtBQUdNO0VBQ0UsZUFBQTtBQURSO0FBS0U7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSEo7QUFNUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUpWO0FBS1U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSFo7QUFJWTtFQUNFLGNBQUE7QUFGZDtBQUtVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUhaO0FBTVE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBSlY7QUFTRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVBKO0FBUUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFOTjtBQVFJO0VBQ0UsWUFBQTtBQU5OO0FBU0U7RUFDRSxnQkFBQTtBQVBKO0FBUUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBTk47QUFRTTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtBQU5SO0FBUU07RUFDRSxlQUFBO0FBTlI7QUFVTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBUlI7QUFXUTtFQUNFLGFBQUE7QUFUVjtBQVVVO0VBQ0UsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFSWjtBQVNZO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtBQVBkIiwiZmlsZSI6InByb2dyZXNzLXBob3Rvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cblxuaW9uLWNvbnRlbnQgLnVwcGVyX2RpdiBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDEwMiwgMTAyLCAwLjI0KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbmlvbi1jb250ZW50IC51cHBlcl9kaXYgaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuaW9uLWNvbnRlbnQgLnVwcGVyX2RpdiBpb24taXRlbSBpb24tdGh1bWJuYWlsIGltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmlvbi1jb250ZW50IC51cHBlcl9kaXYgaW9uLWl0ZW0gLmFjdGl2aXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5pb24tY29udGVudCAudXBwZXJfZGl2IGlvbi1pdGVtIC5hY3Rpdml0eSAucmVkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBjb2xvcjogI2ZmNjY2Njtcbn1cbmlvbi1jb250ZW50IC51cHBlcl9kaXYgaW9uLWl0ZW0gLmFjdGl2aXR5IC5zdWJfbGJsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLnVwcGVyX2RpdiBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmlvbi1jb250ZW50IC50cmFjayB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJhY2tncm91bmQ6ICM5MmE0ZmQzNDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuaW9uLWNvbnRlbnQgLnRyYWNrIGlvbi1yb3cgaW9uLWNvbCAuZmlyc3Rfc2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5pb24tY29udGVudCAudHJhY2sgaW9uLXJvdyBpb24tY29sIC5maXJzdF9zaWRlIC50eHRfbGJsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgLnRyYWNrIGlvbi1yb3cgaW9uLWNvbCAuZmlyc3Rfc2lkZSAudHh0X2xibCBzcGFuIHtcbiAgY29sb3I6ICM5MmEzZmQ7XG59XG5pb24tY29udGVudCAudHJhY2sgaW9uLXJvdyBpb24tY29sIC5maXJzdF9zaWRlIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnRyYWNrIGlvbi1yb3cgaW9uLWNvbCBpbWcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5pb24tY29udGVudCAuc2NoZWR1bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJhY2tncm91bmQ6ICM5MmE0ZmQzNDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnNjaGVkdWxlIC5pbnNpZGVfbGJsIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLnNjaGVkdWxlIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5pb24tY29udGVudCAuY29sbGVjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5pb24tY29udGVudCAuY29sbGVjdGlvbiAuZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmlvbi1jb250ZW50IC5jb2xsZWN0aW9uIC5nYWxsZXJ5IC5sZWZ0X2xibCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG59XG5pb24tY29udGVudCAuY29sbGVjdGlvbiAuZ2FsbGVyeSAucmlnaHRfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgLmNvbGxlY3Rpb24gLnNwZWNpYWxpc3QgLmRhdGVfbGJsIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmlvbi1jb250ZW50IC5jb2xsZWN0aW9uIC5zcGVjaWFsaXN0IGlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jb250ZW50IC5jb2xsZWN0aW9uIC5zcGVjaWFsaXN0IGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5wcm9maWxlIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHZhcigtLWJveC1jb2xvcik7XG4gIC0tYm94LWNvbG9yOiAjZTllOWU5O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbmlvbi1jb250ZW50IC5jb2xsZWN0aW9uIC5zcGVjaWFsaXN0IGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5wcm9maWxlIC5pbWFnZXMge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_progress-photos_progress-photos_module_ts.js.map