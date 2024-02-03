"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_exercicio_exercicio_module_ts"],{

/***/ 79590:
/*!*************************************************************!*\
  !*** ./src/app/pages/exercicio/exercicio-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExercicioPageRoutingModule": () => (/* binding */ ExercicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 3036);
/* harmony import */ var _exercicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercicio.page */ 20633);





const routes = [
    {
        path: '',
        component: _exercicio_page__WEBPACK_IMPORTED_MODULE_1__.ExercicioPage,
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
let ExercicioPageRoutingModule = class ExercicioPageRoutingModule {
};
ExercicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], ExercicioPageRoutingModule);



/***/ }),

/***/ 27438:
/*!*****************************************************!*\
  !*** ./src/app/pages/exercicio/exercicio.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExercicioPageModule": () => (/* binding */ ExercicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _exercicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercicio-routing.module */ 79590);
/* harmony import */ var _exercicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercicio.page */ 20633);







let ExercicioPageModule = class ExercicioPageModule {
};
ExercicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exercicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExercicioPageRoutingModule
        ],
        declarations: [_exercicio_page__WEBPACK_IMPORTED_MODULE_1__.ExercicioPage]
    })
], ExercicioPageModule);



/***/ }),

/***/ 20633:
/*!***************************************************!*\
  !*** ./src/app/pages/exercicio/exercicio.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExercicioPage": () => (/* binding */ ExercicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exercicio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exercicio.page.html */ 99375);
/* harmony import */ var _exercicio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercicio.page.scss */ 18726);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ 77524);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_physicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/physicall.service */ 81668);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);








let ExercicioPage = class ExercicioPage {
    constructor(router, physicalSrv, userSrv) {
        this.router = router;
        this.physicalSrv = physicalSrv;
        this.userSrv = userSrv;
    }
    ngOnInit() {
        this.loadExercises();
        this.initialForm();
    }
    nextPage() {
        this.userSrv.insertPhysicalUser(this.form.value).subscribe(() => {
            this.router.navigate(['saude']);
        });
    }
    initialForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            exercises: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
        });
    }
    onBack() {
        this.router.navigate(['objetivo']);
    }
    loadExercises() {
        this.physicalSrv.getPhysicall().subscribe(data => {
            this.physicals = data;
        });
    }
};
ExercicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_physicall_service__WEBPACK_IMPORTED_MODULE_3__.PhysicallService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
ExercicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-exercicio',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exercicio_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exercicio_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExercicioPage);



/***/ }),

/***/ 81668:
/*!***********************************************!*\
  !*** ./src/app/services/physicall.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicallService": () => (/* binding */ PhysicallService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let PhysicallService = class PhysicallService {
    constructor(http) {
        this.http = http;
    }
    getPhysicall() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_local}/frequencias-atividades`);
    }
};
PhysicallService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PhysicallService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PhysicallService);



/***/ }),

/***/ 99375:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/exercicio/exercicio.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\r\n  Authors : bunchdevelopers (Rahul Jograna)\r\n  Website : https://bunchdevelopers.com/\r\n  App Name : ionic6Template Pack\r\n  This App Template Source code is licensed as per the\r\n  terms found in the Website https://bunchdevelopers.com/license\r\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\r\n -->\r\n <ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title></ion-title>\r\n    <ion-button (click)=\"onBack()\">\r\n      <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n </ion-header>\r\n <ion-content class=\"ion-padding\">\r\n  \r\n  <div class=\"name\">\r\n    <ion-label class=\"head_lbl\">Você Pratica Exercícios ?</ion-label>\r\n    <ion-label class=\"sub_lbl\">\r\n      Nos conte a frequência em que você pratica exercícios \r\n    </ion-label>\r\n  </div>\r\n  <br><br>\r\n  <form [formGroup]=\"form\">\r\n    <ion-card class=\"efeito-vidro\">\r\n      <ion-list>\r\n        <ion-radio-group name=\"auto\" formControlName=\"exercises\" >\r\n          <ion-item *ngFor=\"let physical of  physicals\">\r\n            <ion-label>{{physical.desc}}</ion-label>\r\n            <ion-radio value=\"{{physical.id}}\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </ion-list>\r\n    </ion-card>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n      <ion-button (click)=\"nextPage()\" expand=\"block\" shape=\"round\">\r\n        Continuar \r\n      </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 18726:
/*!*****************************************************!*\
  !*** ./src/app/pages/exercicio/exercicio.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .image {\n  margin-top: 4rem;\n  display: flex;\n  justify-content: center;\n}\nion-content .image img {\n  height: 300px;\n  width: 300px;\n}\nion-content .name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin-top: 2rem;\n}\nion-content .name .head_lbl {\n  font-size: 24px;\n  font-family: \"bold\";\n  margin-bottom: 10px;\n}\nion-content .name .sub_lbl {\n  font-size: 14px;\n}\nion-footer ion-toolbar {\n  padding: 10px;\n  --border-width: 0;\n}\nion-footer ion-toolbar ion-button {\n  height: 50px;\n  font-size: 18px;\n}\nion-card-title {\n  text-align: center;\n  font-size: 16px;\n}\n.efeito-vidro {\n  background: #fff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(13.5px);\n  -webkit-backdrop-filter: blur(13.5px);\n  border-radius: 10px/20px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.position-card {\n  width: 80%;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFTSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRVo7QUFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQVE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUVaO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFLSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQUZSO0FBR1E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQURaO0FBS0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFGSjtBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxnREFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLDJDQUFBO0FBREo7QUFHRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6ImV4ZXJjaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbmlvbi1jb250ZW50IC5pbWFnZSB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmltYWdlIGltZyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cbmlvbi1jb250ZW50IC5uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbmlvbi1jb250ZW50IC5uYW1lIC5oZWFkX2xibCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm5hbWUgLnN1Yl9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZWZlaXRvLXZpZHJvIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTMuNXB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTMuNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweC8yMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xufVxuXG4ucG9zaXRpb24tY2FyZCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_exercicio_exercicio_module_ts.js.map