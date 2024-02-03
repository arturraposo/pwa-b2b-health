"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_diet-details_diet-details_module_ts"],{

/***/ 72906:
/*!*******************************************************************!*\
  !*** ./src/app/pages/diet-details/diet-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietDetailsPageRoutingModule": () => (/* binding */ DietDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _diet_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diet-details.page */ 62500);




const routes = [
    {
        path: '',
        component: _diet_details_page__WEBPACK_IMPORTED_MODULE_0__.DietDetailsPage
    }
];
let DietDetailsPageRoutingModule = class DietDetailsPageRoutingModule {
};
DietDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DietDetailsPageRoutingModule);



/***/ }),

/***/ 41457:
/*!***********************************************************!*\
  !*** ./src/app/pages/diet-details/diet-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietDetailsPageModule": () => (/* binding */ DietDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _diet_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diet-details-routing.module */ 72906);
/* harmony import */ var _diet_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diet-details.page */ 62500);







let DietDetailsPageModule = class DietDetailsPageModule {
};
DietDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _diet_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DietDetailsPageRoutingModule
        ],
        declarations: [_diet_details_page__WEBPACK_IMPORTED_MODULE_1__.DietDetailsPage]
    })
], DietDetailsPageModule);



/***/ }),

/***/ 62500:
/*!*********************************************************!*\
  !*** ./src/app/pages/diet-details/diet-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietDetailsPage": () => (/* binding */ DietDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_diet_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./diet-details.page.html */ 24191);
/* harmony import */ var _diet_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diet-details.page.scss */ 1272);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ 77524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_plans_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/plans.service */ 71556);
/* harmony import */ var _services_diet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/diet.service */ 70778);









let DietDetailsPage = class DietDetailsPage {
    constructor(userSrv, router, dietSrv, planSrv, loadCtrl, actvRouter, navCtrl) {
        this.userSrv = userSrv;
        this.router = router;
        this.dietSrv = dietSrv;
        this.planSrv = planSrv;
        this.loadCtrl = loadCtrl;
        this.actvRouter = actvRouter;
        this.navCtrl = navCtrl;
        this.mesAtual = '';
        this.programa = '';
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
        };
    }
    ngOnInit() {
        this.actvRouter.queryParams.subscribe((data) => {
            this.loadDiet(data.dia, data.refeicao);
            this.setLabelSnack(data.refeicao);
        });
    }
    loadDiet(diaSemana, refeicao) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loadInfo();
            const loading = yield this.loadCtrl.create({ message: "Carregando" });
            try {
                const monthPlan = yield this.planSrv.getMonthPlan().toPromise();
                const dia = diaSemana;
                const dadosDieta = {
                    mes: monthPlan.mes_atual,
                    dia: dia,
                    refeicao: refeicao,
                };
                const dietData = yield this.dietSrv
                    .getDietUserDay(dadosDieta)
                    .toPromise();
                loading.present();
                this.dieta = dietData.dados;
                console.log(this.dieta);
            }
            catch (error) {
                console.error("Erro ao carregar a dieta:", error);
            }
            finally {
                loading.dismiss();
            }
        });
    }
    loadInfo() {
        this.planSrv.getMonthPlan().subscribe((data) => {
            console.log(data);
            this.mesAtual = data.mes_atual;
        });
        this.userSrv.getUserPlan().subscribe((response) => {
            this.programa = response.programa;
            console.log(this.programa);
        });
    }
    setLabelSnack(refeicao) {
        switch (refeicao) {
            case "1":
                this.labelSnack = "Pre-Treino - 30 minutos antes do treino";
                break;
            case "2":
                this.labelSnack = "Café da manhã - 8 horas";
                break;
            case "3":
                this.labelSnack = "Almoço - 12 horas";
                break;
            case "4":
                this.labelSnack = "Lanche da Tarde - 16 horas";
                break;
            case "5":
                this.labelSnack = "Jantar - 20 horas";
                break;
            default:
                this.labelSnack = "Refeição Desconhecida";
        }
    }
    backToSnackWeek() {
        this.router.navigate(["week-diet"]);
    }
};
DietDetailsPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_diet_service__WEBPACK_IMPORTED_MODULE_4__.DietService },
    { type: _services_plans_service__WEBPACK_IMPORTED_MODULE_3__.PlansService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
DietDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-diet-details",
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_diet_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_diet_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DietDetailsPage);



/***/ }),

/***/ 24191:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/diet-details/diet-details.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"backToSnackWeek()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Dieta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h6 *ngIf=\"programa; else skeletonText\" style=\"text-align: center; color:#02bd99; font-weight: bold;\">Programa {{programa}}\n    <ng-template #skeletonText>\n      <ion-skeleton-text animated=\"true\"></ion-skeleton-text>\n    </ng-template>\n  </h6>\n  <h6 style=\"text-align: center;\">Mês {{mesAtual}}</h6>\n  <h6 style=\"text-align: center; font-weight: bold;\">{{labelSnack}}</h6>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of dieta \">\n      <ion-label>{{item.desc}}</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-slides pager=\"true\" scrollbar=\"true\">\n    <ion-slide *ngFor=\"let item of dieta\">\n      <ion-card>\n        <img [src]=\"item.url_img\" alt=\"{{item.desc}}\">\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ 1272:
/*!***********************************************************!*\
  !*** ./src/app/pages/diet-details/diet-details.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWV0LWRldGFpbHMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_diet-details_diet-details_module_ts.js.map