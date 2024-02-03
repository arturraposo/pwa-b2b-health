"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_saude_saude_module_ts"],{

/***/ 89452:
/*!*****************************************************!*\
  !*** ./src/app/pages/saude/saude-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaudePageRoutingModule": () => (/* binding */ SaudePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 3036);
/* harmony import */ var _saude_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saude.page */ 4316);





const routes = [
    {
        path: '',
        component: _saude_page__WEBPACK_IMPORTED_MODULE_1__.SaudePage,
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
let SaudePageRoutingModule = class SaudePageRoutingModule {
};
SaudePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], SaudePageRoutingModule);



/***/ }),

/***/ 47308:
/*!*********************************************!*\
  !*** ./src/app/pages/saude/saude.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaudePageModule": () => (/* binding */ SaudePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _saude_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saude-routing.module */ 89452);
/* harmony import */ var _saude_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saude.page */ 4316);







let SaudePageModule = class SaudePageModule {
};
SaudePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _saude_routing_module__WEBPACK_IMPORTED_MODULE_0__.SaudePageRoutingModule
        ],
        declarations: [_saude_page__WEBPACK_IMPORTED_MODULE_1__.SaudePage]
    })
], SaudePageModule);



/***/ }),

/***/ 4316:
/*!*******************************************!*\
  !*** ./src/app/pages/saude/saude.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaudePage": () => (/* binding */ SaudePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_saude_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./saude.page.html */ 95005);
/* harmony import */ var _saude_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saude.page.scss */ 61719);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ 77524);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_illiness_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/illiness.service */ 57300);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);








let SaudePage = class SaudePage {
    constructor(router, illinessSrv, userSrv) {
        this.router = router;
        this.illinessSrv = illinessSrv;
        this.userSrv = userSrv;
        this.arrIliness = [];
    }
    ngOnInit() {
        this.loadIlliness();
        this.initialForm();
    }
    initialForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            illiness: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null)
        });
    }
    nextPage() {
        this.form.value.illiness = this.arrIliness;
        this.userSrv.insertIllinessUser(this.form.value).subscribe(() => {
            this.router.navigate(['tabs']);
        });
    }
    loadIlliness() {
        this.illinessSrv.getIlliness().subscribe(data => {
            this.illiness = data;
        });
    }
    onBack() {
        this.router.navigate(['exercicio']);
    }
    toogle(event) {
        if (event.detail.checked === true) {
            this.arrIliness.push(event.detail.value);
            console.log(this.arrIliness);
        }
        else {
            let arr = this.arrIliness.filter(arrIliness => arrIliness !== event.detail.value);
            this.arrIliness = arr;
            console.log(this.arrIliness);
        }
    }
};
SaudePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_illiness_service__WEBPACK_IMPORTED_MODULE_3__.IllinessService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
SaudePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-saude',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_saude_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_saude_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SaudePage);



/***/ }),

/***/ 57300:
/*!**********************************************!*\
  !*** ./src/app/services/illiness.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IllinessService": () => (/* binding */ IllinessService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let IllinessService = class IllinessService {
    constructor(http) {
        this.http = http;
    }
    getIlliness() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_local}/doencas`);
    }
};
IllinessService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
IllinessService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], IllinessService);



/***/ }),

/***/ 95005:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/saude/saude.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\r\n  Authors : bunchdevelopers (Rahul Jograna)\r\n  Website : https://bunchdevelopers.com/\r\n  App Name : ionic6Template Pack\r\n  This App Template Source code is licensed as per the\r\n  terms found in the Website https://bunchdevelopers.com/license\r\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\r\n -->\r\n <ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title></ion-title>\r\n    <ion-button (click)=\"onBack()\">\r\n      <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n </ion-header>\r\n <ion-content class=\"ion-padding\">\r\n  \r\n  <div class=\"name\">\r\n    <ion-label class=\"head_lbl\">Alguma doença Crônica ?</ion-label>\r\n  </div>\r\n<br><br>\r\n <form [formGroup]=\"form\"> \r\n  <ion-card class=\"efeito-vidro\">\r\n  \r\n    <ion-list>\r\n      <ion-item *ngFor=\"let i of illiness\">\r\n        <ion-label>{{i.desc}}</ion-label>\r\n        <ion-toggle slot=\"end\"(ionChange)=\"toogle($event)\" value=\"{{i.id}}\"></ion-toggle>\r\n      </ion-item>\r\n     \r\n    </ion-list>\r\n  </ion-card>\r\n</form>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n      <ion-button (click)=\"nextPage()\" expand=\"block\" shape=\"round\">\r\n        Continuar \r\n      </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 61719:
/*!*********************************************!*\
  !*** ./src/app/pages/saude/saude.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .image {\n  margin-top: 4rem;\n  display: flex;\n  justify-content: center;\n}\nion-content .image img {\n  height: 300px;\n  width: 300px;\n}\nion-content .name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin-top: 2rem;\n}\nion-content .name .head_lbl {\n  font-size: 24px;\n  font-family: \"bold\";\n  margin-bottom: 10px;\n}\nion-content .name .sub_lbl {\n  font-size: 14px;\n}\nion-footer ion-toolbar {\n  padding: 10px;\n  --border-width: 0;\n}\nion-footer ion-toolbar ion-button {\n  height: 50px;\n  font-size: 18px;\n}\nion-card-title {\n  text-align: center;\n  font-size: 16px;\n}\n.efeito-vidro {\n  background: #fff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(13.5px);\n  -webkit-backdrop-filter: blur(13.5px);\n  border-radius: 10px/20px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.position-card {\n  width: 80%;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7Q0FBQTtBQVNJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUFRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFFWjtBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFBUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRVo7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUtJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBRlI7QUFHUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBRFo7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBSUE7RUFDSSxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMkNBQUE7QUFESjtBQUdFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoic2F1ZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24tY29udGVudCAuaW1hZ2Uge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5pb24tY29udGVudCAubmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5pb24tY29udGVudCAubmFtZSAuaGVhZF9sYmwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IC5uYW1lIC5zdWJfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmVmZWl0by12aWRybyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjVweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjVweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHgvMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcbn1cblxuLnBvc2l0aW9uLWNhcmQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_saude_saude_module_ts.js.map