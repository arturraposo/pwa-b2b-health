"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_snack-week_snack-week_module_ts"],{

/***/ 54547:
/*!***************************************************************!*\
  !*** ./src/app/pages/snack-week/snack-week-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackWeekPageRoutingModule": () => (/* binding */ SnackWeekPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _snack_week_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snack-week.page */ 8463);




const routes = [
    {
        path: '',
        component: _snack_week_page__WEBPACK_IMPORTED_MODULE_0__.SnackWeekPage
    }
];
let SnackWeekPageRoutingModule = class SnackWeekPageRoutingModule {
};
SnackWeekPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SnackWeekPageRoutingModule);



/***/ }),

/***/ 8293:
/*!*******************************************************!*\
  !*** ./src/app/pages/snack-week/snack-week.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackWeekPageModule": () => (/* binding */ SnackWeekPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _snack_week_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snack-week-routing.module */ 54547);
/* harmony import */ var _snack_week_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snack-week.page */ 8463);







let SnackWeekPageModule = class SnackWeekPageModule {
};
SnackWeekPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _snack_week_routing_module__WEBPACK_IMPORTED_MODULE_0__.SnackWeekPageRoutingModule
        ],
        declarations: [_snack_week_page__WEBPACK_IMPORTED_MODULE_1__.SnackWeekPage]
    })
], SnackWeekPageModule);



/***/ }),

/***/ 8463:
/*!*****************************************************!*\
  !*** ./src/app/pages/snack-week/snack-week.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackWeekPage": () => (/* binding */ SnackWeekPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_snack_week_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./snack-week.page.html */ 20718);
/* harmony import */ var _snack_week_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snack-week.page.scss */ 946);
/* harmony import */ var _services_diet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/diet.service */ 70778);
/* harmony import */ var src_app_services_plans_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/plans.service */ 71556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/user.service */ 77524);
/* harmony import */ var _services_snack_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/snack.service */ 36559);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);









let SnackWeekPage = class SnackWeekPage {
    constructor(router, route, snackSrv, userSrv, planSrv, dietSrv) {
        this.router = router;
        this.route = route;
        this.snackSrv = snackSrv;
        this.userSrv = userSrv;
        this.planSrv = planSrv;
        this.dietSrv = dietSrv;
        this.plan = '';
        this.mesAtual = '';
        this.printCafe = false;
        this.printAlmoco = false;
        this.printLanche = false;
        this.printJantar = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((data) => {
            this.diaSemana = this.getDayOfWeek(data.dia);
            this.dia = data.dia;
        });
        this.loadSnack();
        this.printRefeicao();
    }
    goToDiet(refeicao) {
        this.route.queryParams.subscribe((data) => {
            const navigationExtras = {
                queryParams: {
                    dia: data.dia,
                    refeicao: refeicao,
                },
            };
            this.router.navigate(['diet-details'], navigationExtras);
        });
    }
    backToWeekDiet() {
        this.router.navigate(['week-diet']);
    }
    loadSnack() {
        this.snackSrv.getSnacks().subscribe((data) => {
            this.refeicoes = data;
        });
        this.loadProgramUser();
    }
    loadProgramUser() {
        this.userSrv.getUserPlan().subscribe((data) => {
            this.plan = data.programa;
        });
        this.planSrv.getMonthPlan().subscribe((data) => {
            this.mesAtual = data.mes_atual;
        });
    }
    getDayOfWeek(day) {
        const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        return day >= 1 && day <= 7 ? diasSemana[day - 1] : 'Dia inválido';
    }
    printRefeicao() {
        const dataAtual = new Date();
        const horaAtual = dataAtual.getHours();
        if (horaAtual === 8) {
            this.printCafe = true;
        }
        if (horaAtual === 12) {
            this.printAlmoco = true;
        }
        if (horaAtual === 16) {
            this.printLanche = true;
        }
        if (horaAtual === 20) {
            this.printJantar = true;
        }
    }
};
SnackWeekPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_snack_service__WEBPACK_IMPORTED_MODULE_5__.SnackService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_plans_service__WEBPACK_IMPORTED_MODULE_3__.PlansService },
    { type: _services_diet_service__WEBPACK_IMPORTED_MODULE_2__.DietService }
];
SnackWeekPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-snack-week',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_snack_week_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_snack_week_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SnackWeekPage);



/***/ }),

/***/ 36559:
/*!*******************************************!*\
  !*** ./src/app/services/snack.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackService": () => (/* binding */ SnackService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 18260);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let SnackService = class SnackService {
    constructor(http) {
        this.http = http;
    }
    getSnacks() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_local}/refeicoes`);
    }
};
SnackService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
SnackService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SnackService);



/***/ }),

/***/ 20718:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/snack-week/snack-week.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"backToWeekDiet()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Dieta</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h6 style=\"text-align:center; font-weight:bold;\">Programa{{plan}}</h6>\n  <h6 style=\"text-align:center; font-weight:bold; color: #02bd99;\">Mês {{mesAtual}} </h6>\n    <h6 style=\"text-align: center ; font-weight: bold;color:#02bd99\">{{diaSemana}}</h6>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card (click)=\"goToDiet(1)\">\n          <ion-card-header>\n            <ion-card-title style=\"text-align: center;\">Pré-Treino</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ng-container *ngIf=\"printCafe\" >\n          <ion-card (click)=\"goToDiet(2)\" class=\"active\">\n            <ion-card-header>\n              <ion-card-title style=\"text-align: center; color:#fff\">Café-da-manhã</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ng-container>\n        <ng-container *ngIf=\"!printCafe\" >\n          <ion-card (click)=\"goToDiet(2)\">\n            <ion-card-header>\n              <ion-card-title style=\"text-align: center;\">Café-da-manhã</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ng-container>\n      \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ng-container *ngIf=\"printAlmoco\">\n          <ion-card (click)=\"goToDiet(3)\" class=\"active\">\n            <ion-card-header>\n              <ion-card-title style=\"text-align: center; color:#fff\">Almoço</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ng-container>\n        <ng-container *ngIf=\"!printAlmoco\">\n          <ion-card (click)=\"goToDiet(3)\">\n            <ion-card-header>\n              <ion-card-title style=\"text-align: center;\">Almoço</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ng-container>\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ng-container *ngIf=\"printLanche\" >\n          <ion-card (click)=\"goToDiet(4)\" class=\"active\">\n            <ion-card-header>\n              <ion-card-title style=\"text-align: center;color:#fff\">Lanche da Tarde</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ng-container>\n        <ng-container *ngIf=\"!printLanche\" >\n          <ion-card (click)=\"goToDiet(4)\">\n            <ion-card-header>\n              <ion-card-title style=\"text-align: center;\">Lanche da Tarde</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ng-container>\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ng-container *ngIf=\"printJantar\" >\n          <ion-card (click)=\"goToDiet(5)\" class=\"active\">\n            <ion-card-header>\n              <ion-card-title style=\"text-align: center;color:#fff\">Jantar</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ng-container>\n        <ng-container *ngIf=\"!printJantar\">\n          <ion-card (click)=\"goToDiet(5)\">\n            <ion-card-header>\n              <ion-card-title style=\"text-align: center;\">Jantar</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ng-container>\n       \n      </ion-col>\n    </ion-row>\n    \n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ 946:
/*!*******************************************************!*\
  !*** ./src/app/pages/snack-week/snack-week.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".active {\n  color: #fff;\n  background-color: #02bd99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYWNrLXdlZWsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoic25hY2std2Vlay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyYmQ5OTtcclxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_snack-week_snack-week_module_ts.js.map