"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_day-exercicio-segunda_day-exercicio-segunda_module_ts"],{

/***/ 94170:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/day-exercicio-segunda/day-exercicio-segunda-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayExercicioSegundaPageRoutingModule": () => (/* binding */ DayExercicioSegundaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _day_exercicio_segunda_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-exercicio-segunda.page */ 98449);




const routes = [
    {
        path: '',
        component: _day_exercicio_segunda_page__WEBPACK_IMPORTED_MODULE_0__.DayExercicioSegundaPage
    }
];
let DayExercicioSegundaPageRoutingModule = class DayExercicioSegundaPageRoutingModule {
};
DayExercicioSegundaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DayExercicioSegundaPageRoutingModule);



/***/ }),

/***/ 89611:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/day-exercicio-segunda/day-exercicio-segunda.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayExercicioSegundaPageModule": () => (/* binding */ DayExercicioSegundaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _day_exercicio_segunda_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-exercicio-segunda-routing.module */ 94170);
/* harmony import */ var _day_exercicio_segunda_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-exercicio-segunda.page */ 98449);







let DayExercicioSegundaPageModule = class DayExercicioSegundaPageModule {
};
DayExercicioSegundaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _day_exercicio_segunda_routing_module__WEBPACK_IMPORTED_MODULE_0__.DayExercicioSegundaPageRoutingModule
        ],
        declarations: [_day_exercicio_segunda_page__WEBPACK_IMPORTED_MODULE_1__.DayExercicioSegundaPage]
    })
], DayExercicioSegundaPageModule);



/***/ }),

/***/ 98449:
/*!***************************************************************************!*\
  !*** ./src/app/pages/day-exercicio-segunda/day-exercicio-segunda.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayExercicioSegundaPage": () => (/* binding */ DayExercicioSegundaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_exercicio_segunda_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./day-exercicio-segunda.page.html */ 34836);
/* harmony import */ var _day_exercicio_segunda_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-exercicio-segunda.page.scss */ 40788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);





let DayExercicioSegundaPage = class DayExercicioSegundaPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.router.queryParams.subscribe((data) => {
            console.log(data);
        });
    }
    goToTempoTreino() {
        this.route.navigate(['tempo-treino']);
    }
    goToDatailsOne() {
        this.route.navigate(['day-details-one']);
    }
    goToDatailsTres() {
        this.route.navigate(['day-details-tres']);
    }
    goToDatailsOito() {
        this.route.navigate(['day-details-oito']);
    }
    back() {
        this.route.navigate(['week-exercicios']);
    }
};
DayExercicioSegundaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
DayExercicioSegundaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-day-exercicio-segunda',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_day_exercicio_segunda_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_day_exercicio_segunda_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DayExercicioSegundaPage);



/***/ }),

/***/ 34836:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/day-exercicio-segunda/day-exercicio-segunda.page.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\" back()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Treino do Dia</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h6 style=\"text-align: center ; color:#02bd99; font-weight: bold;\" >Programa Zero Inflamação - Masculino</h6>\n  <h6 style=\"text-align: center ;\" >Mês 1</h6>\n  <h6 style=\"text-align: center ; font-weight: bold;color:#02bd99\">Segunda Feira</h6>\n  <br>\n  <ion-list>\n    <ion-item>\n      <ion-label style=\"text-align: center;\">Corrida Esteira</ion-label> <ion-icon name=\"eye\" color=\"primary\" (click)=\"goToDatailsOne()\"></ion-icon>\n    </ion-item>\n   \n    <ion-item>\n      <ion-label style=\"text-align: center;\">Abdominal supra com carga - 3 X 15 </ion-label> <ion-icon name=\"eye\" color=\"primary\"></ion-icon>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label style=\"text-align: center;\">Abdominal bicicleta - 3  X 20 </ion-label> <ion-icon name=\"eye\" color=\"primary\" (click)=\" goToDatailsTres()\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label style=\"text-align: center;\">Panturrilha Sentado - 3  X 15 </ion-label> <ion-icon name=\"eye\" color=\"primary\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label style=\"text-align: center;\">Cadeira Flexora - 3  X 12 </ion-label> <ion-icon name=\"eye\" color=\"primary\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label style=\"text-align: center;\">Corrida esteira - 2 min a 7,0 Km/h </ion-label> <ion-icon name=\"eye\" color=\"primary\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label style=\"text-align: center;\">Puxada - 3  X 12 </ion-label> <ion-icon name=\"eye\" color=\"primary\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label style=\"text-align: center;\">Remada Curvada com Halteres - 3  X 12 </ion-label> <ion-icon name=\"eye\" color=\"primary\" (click)=\"goToDatailsOito()\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label style=\"text-align: center;\">Cadeira Abdutora - 3  X 12 </ion-label> <ion-icon name=\"eye\" color=\"primary\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label style=\"text-align: center;\">Afundo com halter - 3  X 12 </ion-label> <ion-icon name=\"eye\" color=\"primary\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label style=\"text-align: center;\">Tríceps Corda - 3  X 12 </ion-label> <ion-icon name=\"eye\" color=\"primary\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label style=\"text-align: center;\">Tríceps Francês - 3  X 12 </ion-label> <ion-icon name=\"eye\" color=\"primary\"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n  <ion-fab side=\"bottom\" style=\"bottom:0;\" (click)=\"goToTempoTreino()\">\n    <ion-fab-button side=\"bottom\" style=\"margin-left: 290px !important;margin-top: -30% !important\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ 40788:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/day-exercicio-segunda/day-exercicio-segunda.page.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXktZXhlcmNpY2lvLXNlZ3VuZGEucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_day-exercicio-segunda_day-exercicio-segunda_module_ts.js.map