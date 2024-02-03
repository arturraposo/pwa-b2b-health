"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_meal-planner_meal-planner_module_ts"],{

/***/ 21516:
/*!*******************************************************************!*\
  !*** ./src/app/pages/meal-planner/meal-planner-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealPlannerPageRoutingModule": () => (/* binding */ MealPlannerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _meal_planner_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-planner.page */ 32744);

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
        component: _meal_planner_page__WEBPACK_IMPORTED_MODULE_0__.MealPlannerPage
    }
];
let MealPlannerPageRoutingModule = class MealPlannerPageRoutingModule {
};
MealPlannerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MealPlannerPageRoutingModule);



/***/ }),

/***/ 15614:
/*!***********************************************************!*\
  !*** ./src/app/pages/meal-planner/meal-planner.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealPlannerPageModule": () => (/* binding */ MealPlannerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _meal_planner_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-planner-routing.module */ 21516);
/* harmony import */ var _meal_planner_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal-planner.page */ 32744);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let MealPlannerPageModule = class MealPlannerPageModule {
};
MealPlannerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _meal_planner_routing_module__WEBPACK_IMPORTED_MODULE_0__.MealPlannerPageRoutingModule
        ],
        declarations: [_meal_planner_page__WEBPACK_IMPORTED_MODULE_1__.MealPlannerPage]
    })
], MealPlannerPageModule);



/***/ }),

/***/ 32744:
/*!*********************************************************!*\
  !*** ./src/app/pages/meal-planner/meal-planner.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealPlannerPage": () => (/* binding */ MealPlannerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_meal_planner_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./meal-planner.page.html */ 40733);
/* harmony import */ var _meal_planner_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal-planner.page.scss */ 17878);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 77524);
/* harmony import */ var src_app_services_exams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/exams.service */ 61028);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);






/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/


let MealPlannerPage = class MealPlannerPage {
    constructor(navctr, router, examSrv, route, userSrv) {
        this.navctr = navctr;
        this.router = router;
        this.examSrv = examSrv;
        this.route = route;
        this.userSrv = userSrv;
        this.selectTabs = "grafico";
        this.slideOpts1 = {
            slidesPerView: 1.3,
        };
        this.exames = [];
        this.grupo = { id: "0" };
        this.meses = [];
    }
    ngOnInit() {
        this.loadExams();
    }
    ngAfterViewInit() { }
    onClick() { }
    onBack() {
        this.navctr.back();
    }
    goToExams() {
        let navigationExtras = {
            queryParams: {
                grupo_id: this.id,
            },
        };
        this.router.navigate(["exams"], navigationExtras);
    }
    backGroupExames() {
        this.navctr.back();
    }
    loadExams() {
        this.route.queryParams.subscribe((data) => {
            this.id = data.grupo_id;
            const dataAtual = new Date();
            this.mes = dataAtual.getMonth() + 1;
            console.log(data);
            this.examSrv.getGroupExam(this.id).subscribe((data) => {
                this.perfil = data[0]["perfil"];
            });
            this.loadHistorico(this.id);
            this.loadUltimosExames(this.id);
        });
    }
    loadHistorico(id) {
        this.grupo.id = id;
        this.userSrv.historicoUserExames(this.grupo).subscribe((data) => {
            this.historico = data;
        });
    }
    loadUltimosExames(id) {
        this.grupo.id = id;
        this.userSrv.utlimosExames(this.grupo).subscribe((data) => {
            this.exames = data;
            this.select = data[0]["mes"];
            console.log(this.exames);
        });
    }
};
MealPlannerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_exams_service__WEBPACK_IMPORTED_MODULE_3__.ExamsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
MealPlannerPage.propDecorators = {
    mealChart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["mealChart",] }]
};
MealPlannerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-meal-planner",
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_meal_planner_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_meal_planner_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MealPlannerPage);



/***/ }),

/***/ 40733:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/meal-planner/meal-planner.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"backGroupExames()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Exames</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-segment [(ngModel)]=\"selectTabs\">\n    <ion-segment-button value=\"exame\">\n      <ion-label>Meus Exames</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"grafico\">\n      <ion-label>Laudo de Evolução</ion-label>\n    </ion-segment-button>\n    \n  </ion-segment>\n  <div *ngIf=\"selectTabs === 'exame'\">\n    <h6 style=\"text-align: center; color:#02bd99; font-weight: bold;\">Exames > {{perfil}}</h6>\n    <ion-label>Últimos Exames</ion-label>\n    <ion-select [value]=\"select\" multiple=\"false\" placeholder=\"Mês\">\n      <ion-select-option value=\"Janeiro\" disabled>Janeiro</ion-select-option>\n      <ion-select-option value=\"Fevereiro\" disabled>Fevereiro</ion-select-option>\n      <ion-select-option value=\"Março\" disabled>Março</ion-select-option>\n      <ion-select-option value=\"Abril\" disabled>Abril</ion-select-option>\n      <ion-select-option value=\"Maio\" disabled>Maio</ion-select-option>\n      <ion-select-option value=\"Junho\" disabled>Junho</ion-select-option>\n      <ion-select-option value=\"Julho\" disabled>Julho</ion-select-option>\n      <ion-select-option value=\"Agosto\" disabled>Agosto</ion-select-option>\n      <ion-select-option value=\"Setembro\" disabled>Setembro</ion-select-option>\n      <ion-select-option value=\"Outubro\" disabled>Outubro</ion-select-option>\n      <ion-select-option value=\"Novembro\" disabled>Novembro</ion-select-option>\n      <ion-select-option value=\"Dezembro\" disabled>Dezembro</ion-select-option>\n    </ion-select>\n\n    <ion-card *ngFor=\"let exame of exames\">\n      <ion-card-header>\n        <ion-card-subtitle style=\"font-weight: bold;\">{{exame.desc}}</ion-card-subtitle>\n        <ion-card-title>{{exame.target}}</ion-card-title>\n      </ion-card-header>    \n    </ion-card>\n  \n    <!-- O botão FAB é colocado dentro do ion-content, garantindo que fique abaixo dos cards -->\n    <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n      <ion-fab-button (click)=\"goToExams()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n  <div *ngIf=\"selectTabs ==='grafico'\">\n    <ion-card *ngFor=\"let h of historico\">\n      <ion-card-header>\n        <ion-card-subtitle>{{h.mes}} - {{h.ano}}</ion-card-subtitle>\n        <ion-card-title style=\"font-size: 16px\">{{h.desc}}: {{h.target}}<h3></h3></ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        \n      </ion-card-content>\n    </ion-card>\n    <!-- <div class=\"meal\">\n      <div class=\"progress\">\n        <ion-label class=\"head_lbl\">Gráfico</ion-label>\n\n      </div>\n      <div class=\"barchart\">\n        <canvas id=\"mealChart\" #mealChart></canvas>\n      </div>\n    </div> -->\n  </div>\n  \n  \n\n</ion-content>\n");

/***/ }),

/***/ 17878:
/*!***********************************************************!*\
  !*** ./src/app/pages/meal-planner/meal-planner.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-header ion-toolbar {\n  --border-width: 0;\n}\nion-content .meal {\n  margin-top: 1rem;\n}\nion-content .meal .progress {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nion-content .meal .progress .head_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .meal .progress ion-chip {\n  background: #92a3fd;\n  margin-top: 10px;\n}\nion-content .meal .progress ion-chip ion-label {\n  font-size: 12px;\n}\nion-content .meal .progress ion-chip ion-icon {\n  font-size: 18px;\n}\nion-content .meal .barchart {\n  margin-top: 1rem;\n}\nion-content .schedule {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2rem;\n  background: #92a4fd4f;\n  padding: 5px;\n  border-radius: 10px;\n}\nion-content .schedule .daily_lbl {\n  font-size: 16px;\n  font-family: \"medium\";\n  margin-left: 10px;\n}\nion-content .schedule ion-button {\n  height: 35px;\n}\nion-content .popular ion-item {\n  border-radius: 10px;\n  box-shadow: 0px 0px 20px var(--box-color);\n  --box-color: lightgrey;\n  margin-top: 1rem;\n  padding: 10px;\n}\nion-content .popular ion-item ion-thumbnail img {\n  height: 60px;\n  width: 60px;\n}\nion-content .popular ion-item .activity {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n}\nion-content .popular ion-item .activity .name_lbl {\n  font-size: 16px;\n  font-family: \"semi-bold\";\n  margin-top: 10px;\n}\nion-content .popular ion-item .activity .time_lbl {\n  margin-top: 5px;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\nion-content .diet .head_lbl {\n  margin-top: 2rem;\n  font-family: \"semi-bold\";\n  font-size: 18px;\n  margin-bottom: 16px;\n}\nion-content .diet ion-slides ion-slide {\n  width: 80%;\n  padding: 10px;\n}\nion-content .diet ion-slides ion-slide .slider {\n  background: #92a4fd60;\n  padding: 10px;\n  border-radius: 20px 150px 20px 20px;\n  width: 100%;\n  position: relative;\n}\nion-content .diet ion-slides ion-slide .slider img {\n  height: 130px;\n  width: 130px;\n  position: absolute;\n  right: 10px;\n}\nion-content .diet ion-slides ion-slide .slider .eat {\n  display: flex;\n  justify-content: flex-start;\n  text-align: start;\n  flex-direction: column;\n  margin-top: 8rem;\n}\nion-content .diet ion-slides ion-slide .slider .eat .item_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n  margin-top: 10px;\n}\nion-content .diet ion-slides ion-slide .slider .eat .food_lbl {\n  margin-top: 5px;\n  font-size: 16px;\n  margin-bottom: 10px;\n}\nion-content .diet ion-slides ion-slide .slider .eat ion-button {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWwtcGxhbm5lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFTRTtFQUNFLGlCQUFBO0FBQ0o7QUFJRTtFQUNFLGdCQUFBO0FBREo7QUFFSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQU47QUFDTTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtBQUNSO0FBQ007RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFBUTtFQUNFLGVBQUE7QUFFVjtBQUFRO0VBQ0UsZUFBQTtBQUVWO0FBRUk7RUFDRSxnQkFBQTtBQUFOO0FBR0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUVJO0VBQ0UsWUFBQTtBQUFOO0FBSUk7RUFDRSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFGTjtBQUlRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFGVjtBQUtNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFIUjtBQUlRO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFGVjtBQUlRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUZWO0FBUUk7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBTk47QUFTTTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBUFI7QUFRUTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBTlY7QUFPVTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTFo7QUFPVTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUxaO0FBTVk7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUpkO0FBTVk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSmQ7QUFNWTtFQUNFLFVBQUE7QUFKZCIsImZpbGUiOiJtZWFsLXBsYW5uZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cbmlvbi1jb250ZW50IC5tZWFsIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbmlvbi1jb250ZW50IC5tZWFsIC5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5tZWFsIC5wcm9ncmVzcyAuaGVhZF9sYmwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLm1lYWwgLnByb2dyZXNzIGlvbi1jaGlwIHtcbiAgYmFja2dyb3VuZDogIzkyYTNmZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5tZWFsIC5wcm9ncmVzcyBpb24tY2hpcCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tY29udGVudCAubWVhbCAucHJvZ3Jlc3MgaW9uLWNoaXAgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tY29udGVudCAubWVhbCAuYmFyY2hhcnQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuaW9uLWNvbnRlbnQgLnNjaGVkdWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kOiAjOTJhNGZkNGY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1jb250ZW50IC5zY2hlZHVsZSAuZGFpbHlfbGJsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5pb24tY29udGVudCAuc2NoZWR1bGUgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogMzVweDtcbn1cbmlvbi1jb250ZW50IC5wb3B1bGFyIGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHZhcigtLWJveC1jb2xvcik7XG4gIC0tYm94LWNvbG9yOiBsaWdodGdyZXk7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY29udGVudCAucG9wdWxhciBpb24taXRlbSBpb24tdGh1bWJuYWlsIGltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG5pb24tY29udGVudCAucG9wdWxhciBpb24taXRlbSAuYWN0aXZpdHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5wb3B1bGFyIGlvbi1pdGVtIC5hY3Rpdml0eSAubmFtZV9sYmwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnBvcHVsYXIgaW9uLWl0ZW0gLmFjdGl2aXR5IC50aW1lX2xibCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmRpZXQgLmhlYWRfbGJsIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5kaWV0IGlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jb250ZW50IC5kaWV0IGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kOiAjOTJhNGZkNjA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMTUwcHggMjBweCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWNvbnRlbnQgLmRpZXQgaW9uLXNsaWRlcyBpb24tc2xpZGUgLnNsaWRlciBpbWcge1xuICBoZWlnaHQ6IDEzMHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG59XG5pb24tY29udGVudCAuZGlldCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGVyIC5lYXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA4cmVtO1xufVxuaW9uLWNvbnRlbnQgLmRpZXQgaW9uLXNsaWRlcyBpb24tc2xpZGUgLnNsaWRlciAuZWF0IC5pdGVtX2xibCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCAuZGlldCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGVyIC5lYXQgLmZvb2RfbGJsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAuZGlldCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGVyIC5lYXQgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_meal-planner_meal-planner_module_ts.js.map