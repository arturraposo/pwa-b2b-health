"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_day-exercicio_day-exercicio_module_ts"],{

/***/ 72856:
/*!*********************************************************************!*\
  !*** ./src/app/pages/day-exercicio/day-exercicio-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayExercicioPageRoutingModule": () => (/* binding */ DayExercicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _day_exercicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-exercicio.page */ 5377);




const routes = [
    {
        path: '',
        component: _day_exercicio_page__WEBPACK_IMPORTED_MODULE_0__.DayExercicioPage
    }
];
let DayExercicioPageRoutingModule = class DayExercicioPageRoutingModule {
};
DayExercicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DayExercicioPageRoutingModule);



/***/ }),

/***/ 9152:
/*!*************************************************************!*\
  !*** ./src/app/pages/day-exercicio/day-exercicio.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayExercicioPageModule": () => (/* binding */ DayExercicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _day_exercicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-exercicio-routing.module */ 72856);
/* harmony import */ var _day_exercicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-exercicio.page */ 5377);







let DayExercicioPageModule = class DayExercicioPageModule {
};
DayExercicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _day_exercicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.DayExercicioPageRoutingModule
        ],
        declarations: [_day_exercicio_page__WEBPACK_IMPORTED_MODULE_1__.DayExercicioPage]
    })
], DayExercicioPageModule);



/***/ }),

/***/ 5377:
/*!***********************************************************!*\
  !*** ./src/app/pages/day-exercicio/day-exercicio.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayExercicioPage": () => (/* binding */ DayExercicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_exercicio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./day-exercicio.page.html */ 21070);
/* harmony import */ var _day_exercicio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-exercicio.page.scss */ 52458);
/* harmony import */ var _services_exercicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/exercicio.service */ 27645);
/* harmony import */ var _services_plans_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/plans.service */ 71556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/user.service */ 77524);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 99457);









let DayExercicioPage = class DayExercicioPage {
    constructor(route, router, userSrv, planSrv, exeSrv) {
        this.route = route;
        this.router = router;
        this.userSrv = userSrv;
        this.planSrv = planSrv;
        this.exeSrv = exeSrv;
    }
    ngOnInit() {
        this.router.queryParams.subscribe((data) => {
            const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
            const diaSelecionado = parseInt(data.dia, 10);
            this.dia = data.dia;
            if (diaSelecionado >= 1 && diaSelecionado <= 7) {
                this.diaSemana = diasSemana[diaSelecionado - 1];
            }
            else {
                this.dia = 'Dia inválido';
            }
            (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([
                this.userSrv.getUserPlan(),
                this.planSrv.getMonthPlan()
            ]).subscribe(([userPlan, monthPlan]) => {
                this.plan = userPlan.programa;
                console.log(this.plan);
                console.log(monthPlan);
                this.mesAtual = monthPlan.mes_atual;
                const dados = {
                    mes: this.mesAtual,
                    dia: this.dia
                };
                console.log(dados);
                this.exeSrv.getTreinoUserDay(dados).subscribe((data) => {
                    console.log(data);
                    this.treinos = data.dados;
                });
            });
        });
    }
    goToDetails(id) {
        let navigationExtras = {
            queryParams: {
                item: id,
                dia: this.dia
            }
        };
        this.route.navigate(['details-exercicios'], navigationExtras);
    }
    goToTempoTreino() {
        this.route.navigate(['tempo-treino']);
    }
    // goToDatailsOne(){
    //   this.route.navigate(['day-details-one'])
    // }
    // goToDatailsTres(){
    //   this.route.navigate(['day-details-tres'])
    // }
    // goToDatailsOito(){
    //   this.route.navigate(['day-details-oito'])
    // }
    back() {
        this.route.navigate(['week-exercicios']);
    }
    loadProgramUser() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([
            this.userSrv.getUserPlan(),
            this.planSrv.getMonthPlan()
        ]).subscribe(([userPlan, monthPlan]) => {
            this.plan = userPlan.programa;
            console.log(this.plan);
            console.log(monthPlan);
            this.mesAtual = monthPlan.mes_atual;
        });
    }
    loadTreinoDay() {
        const Dados = {
            mes: this.mesAtual,
            dia: this.dia
        };
        this.exeSrv.getTreinoUserDay(Dados).subscribe((data) => {
        });
    }
};
DayExercicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _services_plans_service__WEBPACK_IMPORTED_MODULE_3__.PlansService },
    { type: _services_exercicio_service__WEBPACK_IMPORTED_MODULE_2__.ExercicioService }
];
DayExercicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-day-exercicio',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_exercicio_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_day_exercicio_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DayExercicioPage);



/***/ }),

/***/ 21070:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/day-exercicio/day-exercicio.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\" back()\">\r\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Treino do Dia</ion-title>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"onClick()\">\r\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <h6 style=\"text-align: center ; color:#02bd99; font-weight: bold;\" >Programa {{plan}}</h6>\r\n  <h6 style=\"text-align: center ;\" >Mês {{mesAtual}}</h6>\r\n  <h6 style=\"text-align: center ; font-weight: bold;color:#02bd99\">{{diaSemana}}</h6>\r\n  <br>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let treino of treinos\">\r\n      <ion-label style=\"text-align: center;\">{{treino.desc}}</ion-label> <ion-icon name=\"eye\" color=\"primary\" (click)=\"goToDetails(treino.id)\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-fab side=\"bottom\" style=\"bottom:0;\" (click)=\"goToTempoTreino()\">\r\n    <ion-fab-button side=\"bottom\" style=\"margin-left: 290px !important;margin-top: -30% !important\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ 52458:
/*!*************************************************************!*\
  !*** ./src/app/pages/day-exercicio/day-exercicio.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXktZXhlcmNpY2lvLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_day-exercicio_day-exercicio_module_ts.js.map