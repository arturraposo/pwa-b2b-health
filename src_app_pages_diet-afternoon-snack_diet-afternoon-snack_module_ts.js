"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_diet-afternoon-snack_diet-afternoon-snack_module_ts"],{

/***/ 54702:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/diet-afternoon-snack/diet-afternoon-snack-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietAfternoonSnackPageRoutingModule": () => (/* binding */ DietAfternoonSnackPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _diet_afternoon_snack_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diet-afternoon-snack.page */ 13248);




const routes = [
    {
        path: '',
        component: _diet_afternoon_snack_page__WEBPACK_IMPORTED_MODULE_0__.DietAfternoonSnackPage
    }
];
let DietAfternoonSnackPageRoutingModule = class DietAfternoonSnackPageRoutingModule {
};
DietAfternoonSnackPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DietAfternoonSnackPageRoutingModule);



/***/ }),

/***/ 62296:
/*!***************************************************************************!*\
  !*** ./src/app/pages/diet-afternoon-snack/diet-afternoon-snack.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietAfternoonSnackPageModule": () => (/* binding */ DietAfternoonSnackPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _diet_afternoon_snack_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diet-afternoon-snack-routing.module */ 54702);
/* harmony import */ var _diet_afternoon_snack_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diet-afternoon-snack.page */ 13248);







let DietAfternoonSnackPageModule = class DietAfternoonSnackPageModule {
};
DietAfternoonSnackPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _diet_afternoon_snack_routing_module__WEBPACK_IMPORTED_MODULE_0__.DietAfternoonSnackPageRoutingModule
        ],
        declarations: [_diet_afternoon_snack_page__WEBPACK_IMPORTED_MODULE_1__.DietAfternoonSnackPage]
    })
], DietAfternoonSnackPageModule);



/***/ }),

/***/ 13248:
/*!*************************************************************************!*\
  !*** ./src/app/pages/diet-afternoon-snack/diet-afternoon-snack.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietAfternoonSnackPage": () => (/* binding */ DietAfternoonSnackPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_diet_afternoon_snack_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./diet-afternoon-snack.page.html */ 34556);
/* harmony import */ var _diet_afternoon_snack_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diet-afternoon-snack.page.scss */ 27386);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_diet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/diet.service */ 70778);
/* harmony import */ var src_app_services_plans_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/plans.service */ 71556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/user.service */ 77524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);









let DietAfternoonSnackPage = class DietAfternoonSnackPage {
    constructor(userSrv, router, planSrv, dietSrv, loadCtrl) {
        this.userSrv = userSrv;
        this.router = router;
        this.planSrv = planSrv;
        this.dietSrv = dietSrv;
        this.loadCtrl = loadCtrl;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    ngOnInit() {
        this.loadDiet();
    }
    loadDiet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loadInfo();
            const loading = yield this.loadCtrl.create({ message: "Carregando" });
            try {
                const monthPlan = yield this.planSrv.getMonthPlan().toPromise();
                const dia = localStorage.getItem("dia");
                const dadosDieta = {
                    mes: monthPlan.mes_atual,
                    dia: dia,
                    refeicao: 4,
                };
                const dietData = yield this.dietSrv.getDietUserDay(dadosDieta).toPromise();
                loading.present();
                this.lanche = dietData.dados;
                console.log(this.lanche);
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
    backToSnackWeek() {
        this.router.navigate(['snack-week']);
    }
};
DietAfternoonSnackPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_plans_service__WEBPACK_IMPORTED_MODULE_3__.PlansService },
    { type: _services_diet_service__WEBPACK_IMPORTED_MODULE_2__.DietService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
DietAfternoonSnackPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-diet-afternoon-snack',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_diet_afternoon_snack_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_diet_afternoon_snack_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DietAfternoonSnackPage);



/***/ }),

/***/ 34556:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/diet-afternoon-snack/diet-afternoon-snack.page.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n <ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\" backToSnackWeek()\" >\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Dieta</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h6 style=\"text-align: center ; color:#02bd99; font-weight: bold;\" >{{programa}}</h6>\n  <h6 style=\"text-align: center ;\" >Mês {{mesAtual}}</h6>\n  <h6 style=\"text-align: center ; font-weight: bold;\">Lanche da tarde - 16:00</h6>\n\n  <ion-list>\n    <ion-item-group *ngFor=\"let b of lanche\">\n      <ion-item-divider>\n        <ion-label>{{b.desc}}</ion-label>\n      </ion-item-divider>\n\n    </ion-item-group>\n  </ion-list>\n  <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\" >\n    <ion-slide *ngFor=\"let b of lanche\">\n      <img src=\"{{b.url_img}}\" alt=\"\" srcset=\"\">\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ 27386:
/*!***************************************************************************!*\
  !*** ./src/app/pages/diet-afternoon-snack/diet-afternoon-snack.page.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWV0LWFmdGVybm9vbi1zbmFjay5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_diet-afternoon-snack_diet-afternoon-snack_module_ts.js.map