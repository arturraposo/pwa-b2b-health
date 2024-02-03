"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details-exercicios_details-exercicios_module_ts"],{

/***/ 14962:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/details-exercicios/details-exercicios-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsExerciciosPageRoutingModule": () => (/* binding */ DetailsExerciciosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _details_exercicios_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-exercicios.page */ 30146);




const routes = [
    {
        path: '',
        component: _details_exercicios_page__WEBPACK_IMPORTED_MODULE_0__.DetailsExerciciosPage
    }
];
let DetailsExerciciosPageRoutingModule = class DetailsExerciciosPageRoutingModule {
};
DetailsExerciciosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsExerciciosPageRoutingModule);



/***/ }),

/***/ 55901:
/*!***********************************************************************!*\
  !*** ./src/app/pages/details-exercicios/details-exercicios.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsExerciciosPageModule": () => (/* binding */ DetailsExerciciosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _details_exercicios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-exercicios-routing.module */ 14962);
/* harmony import */ var _details_exercicios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-exercicios.page */ 30146);







let DetailsExerciciosPageModule = class DetailsExerciciosPageModule {
};
DetailsExerciciosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_exercicios_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsExerciciosPageRoutingModule
        ],
        declarations: [_details_exercicios_page__WEBPACK_IMPORTED_MODULE_1__.DetailsExerciciosPage]
    })
], DetailsExerciciosPageModule);



/***/ }),

/***/ 30146:
/*!*********************************************************************!*\
  !*** ./src/app/pages/details-exercicios/details-exercicios.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsExerciciosPage": () => (/* binding */ DetailsExerciciosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_details_exercicios_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./details-exercicios.page.html */ 47529);
/* harmony import */ var _details_exercicios_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-exercicios.page.scss */ 18038);
/* harmony import */ var _services_plans_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/plans.service */ 71556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ 77524);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_exercicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/exercicio.service */ 27645);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 99457);










let DetailsExerciciosPage = class DetailsExerciciosPage {
    constructor(router, exeSrv, route, navCrl, userSrv, planSrv) {
        this.router = router;
        this.exeSrv = exeSrv;
        this.route = route;
        this.navCrl = navCrl;
        this.userSrv = userSrv;
        this.planSrv = planSrv;
    }
    ngOnInit() {
        this.router.queryParams.subscribe((data) => {
            this.item = this.item = parseInt(data.item, 10);
            this.exeSrv.getItemTreino(this.item).subscribe((dados) => {
                this.dadosTreino = dados.desc;
                this.item_img = dados.url_img;
                console.log(this.dadosTreino);
                console.log(this.item_img);
                (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([
                    this.userSrv.getUserPlan(),
                    this.planSrv.getMonthPlan()
                ]).subscribe(([userPlan, monthPlan]) => {
                    this.plan = userPlan.programa;
                    console.log(this.plan);
                    console.log(monthPlan);
                    this.mesAtual = monthPlan.mes_atual;
                    console.log(dados);
                });
            });
        });
    }
    backTreinoList() {
        this.navCrl.back();
    }
};
DetailsExerciciosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_exercicio_service__WEBPACK_IMPORTED_MODULE_4__.ExercicioService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_plans_service__WEBPACK_IMPORTED_MODULE_2__.PlansService }
];
DetailsExerciciosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-details-exercicios',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_details_exercicios_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_details_exercicios_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsExerciciosPage);



/***/ }),

/***/ 47529:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/details-exercicios/details-exercicios.page.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"backTreinoList()\" >\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Treino do Dia</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h6 style=\"text-align: center ; color:#02bd99; font-weight: bold;\" >Programa {{plan}}</h6>\n  <h6 style=\"text-align: center ;\" >Mês {{mesAtual}}</h6>\n  <h6 style=\"text-align: center ; font-weight: bold;\">{{dadosTreino}}</h6>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"card-center-image\" style=\"background-image: url('{{item_img}}');\">\n          <div class=\"card-center-bg-2\">\n            <div class=\"card-center-text\">\n            <p class=\"title\"></p>\n            <p class=\"subtitle\"></p>\n          </div>\n          </div>\n        </div>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 18038:
/*!***********************************************************************!*\
  !*** ./src/app/pages/details-exercicios/details-exercicios.page.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "ion-grid {\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n}\nion-grid ion-row {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtZXhlcmNpY2lvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7QUFDUiIsImZpbGUiOiJkZXRhaWxzLWV4ZXJjaWNpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBcclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details-exercicios_details-exercicios_module_ts.js.map