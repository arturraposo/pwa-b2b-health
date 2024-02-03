"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_objetivo_objetivo_module_ts"],{

/***/ 97591:
/*!***********************************************************!*\
  !*** ./src/app/pages/objetivo/objetivo-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjetivoPageRoutingModule": () => (/* binding */ ObjetivoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 3036);
/* harmony import */ var _objetivo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objetivo.page */ 26237);





const routes = [
    {
        path: '',
        component: _objetivo_page__WEBPACK_IMPORTED_MODULE_1__.ObjetivoPage,
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
let ObjetivoPageRoutingModule = class ObjetivoPageRoutingModule {
};
ObjetivoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], ObjetivoPageRoutingModule);



/***/ }),

/***/ 877:
/*!***************************************************!*\
  !*** ./src/app/pages/objetivo/objetivo.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjetivoPageModule": () => (/* binding */ ObjetivoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _objetivo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objetivo-routing.module */ 97591);
/* harmony import */ var _objetivo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objetivo.page */ 26237);







let ObjetivoPageModule = class ObjetivoPageModule {
};
ObjetivoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _objetivo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ObjetivoPageRoutingModule
        ],
        declarations: [_objetivo_page__WEBPACK_IMPORTED_MODULE_1__.ObjetivoPage]
    })
], ObjetivoPageModule);



/***/ }),

/***/ 26237:
/*!*************************************************!*\
  !*** ./src/app/pages/objetivo/objetivo.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjetivoPage": () => (/* binding */ ObjetivoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_objetivo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./objetivo.page.html */ 48252);
/* harmony import */ var _objetivo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objetivo.page.scss */ 56275);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ 77524);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_goals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/goals.service */ 32503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);








let ObjetivoPage = class ObjetivoPage {
    constructor(router, goalsSrv, userSrv) {
        this.router = router;
        this.goalsSrv = goalsSrv;
        this.userSrv = userSrv;
        this.goal = [];
        this.imgOne = 'assets/images/haltere.png';
        this.imgTwo = 'assets/images/feijoada.png';
        this.imgThree = 'assets/images/perda-de-peso.png';
    }
    ngOnInit() {
        this.loadGoals();
        this.initialForm();
    }
    initialForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            goals: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null)
        });
    }
    nextPage() {
        this.form.value.goals = this.goal;
        this.userSrv.insertGoalsUser(this.form.value).subscribe(() => {
            this.router.navigate(['exercicio']);
        });
    }
    onBack() {
        this.router.navigate(['resultado']);
    }
    loadGoals() {
        this.goalsSrv.getGoals().subscribe(data => {
            this.goals = data;
            console.log(this.goals);
        });
    }
    toogle(event) {
        console.log(event.detail.value);
        // if(event.detail.checked === true){
        //    this.goal.push(event.detail.value) 
        //    console.log(this.goal)
        // }else{
        //  let arrGoal =  this.goal.filter(goal => goal !== event.detail.value )
        //  this.goal = arrGoal 
        //  console.log(this.goal);
        // }
    }
};
ObjetivoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_goals_service__WEBPACK_IMPORTED_MODULE_3__.GoalsService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
ObjetivoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-objetivo',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_objetivo_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_objetivo_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ObjetivoPage);



/***/ }),

/***/ 32503:
/*!*******************************************!*\
  !*** ./src/app/services/goals.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoalsService": () => (/* binding */ GoalsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let GoalsService = class GoalsService {
    constructor(http) {
        this.http = http;
    }
    getGoals() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_local}/metas`);
    }
};
GoalsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
GoalsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GoalsService);



/***/ }),

/***/ 48252:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/objetivo/objetivo.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\r\n  Authors : bunchdevelopers (Rahul Jograna)\r\n  Website : https://bunchdevelopers.com/\r\n  App Name : ionic6Template Pack\r\n  This App Template Source code is licensed as per the\r\n  terms found in the Website https://bunchdevelopers.com/license\r\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\r\n -->\r\n <ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title></ion-title>\r\n    <ion-button (click)=\"onBack()\">\r\n      <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n </ion-header>\r\n <ion-content class=\"ion-padding\">\r\n    <div class=\"name\">\r\n      <ion-label class=\"head_lbl\">Qual é o seu objetivo ?</ion-label>\r\n      <ion-label class=\"sub_lbl\">\r\n        É importante sabermos qual o seu objetivo para que possamos traçar a melhor estratégia para você\r\n      </ion-label>\r\n    </div>\r\n    <br><br>\r\n    <form [formGroup]=\"form\">\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let goal of goals\">\r\n          <ion-label>{{goal.desc}}</ion-label>\r\n          <ion-toggle slot=\"end\" (ionChange)=\"toogle($event)\" value=\"{{goal.id}}\"></ion-toggle>          \r\n        </ion-item>\r\n      </ion-list>\r\n    </form>\r\n </ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n      <ion-button (click)=\"nextPage()\" expand=\"block\" shape=\"round\">\r\n        Continuar \r\n      </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 56275:
/*!***************************************************!*\
  !*** ./src/app/pages/objetivo/objetivo.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .image {\n  margin-top: 4rem;\n  display: flex;\n  justify-content: center;\n}\nion-content .image img {\n  height: 300px;\n  width: 300px;\n}\nion-content .name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin-top: 2rem;\n}\nion-content .name .head_lbl {\n  font-size: 24px;\n  font-family: \"bold\";\n  margin-bottom: 10px;\n}\nion-content .name .sub_lbl {\n  font-size: 14px;\n}\nion-footer ion-toolbar {\n  padding: 10px;\n  --border-width: 0;\n}\nion-footer ion-toolbar ion-button {\n  height: 50px;\n  font-size: 18px;\n}\nion-card-title {\n  text-align: center;\n  font-size: 16px;\n}\n.efeito-vidro {\n  background: #fff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(13.5px);\n  -webkit-backdrop-filter: blur(13.5px);\n  border-radius: 10px/20px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.position-card {\n  width: 80%;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9iamV0aXZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7Q0FBQTtBQVNJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUFRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFFWjtBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFBUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRVo7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUtJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBRlI7QUFHUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBRFo7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBSUE7RUFDSSxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMkNBQUE7QUFESjtBQUdFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoib2JqZXRpdm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24tY29udGVudCAuaW1hZ2Uge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5pb24tY29udGVudCAubmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5pb24tY29udGVudCAubmFtZSAuaGVhZF9sYmwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IC5uYW1lIC5zdWJfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmVmZWl0by12aWRybyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjVweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjVweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHgvMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcbn1cblxuLnBvc2l0aW9uLWNhcmQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_objetivo_objetivo_module_ts.js.map