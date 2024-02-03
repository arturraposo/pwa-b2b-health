"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_diet-breakfast_diet-breakfast_module_ts"],{

/***/ 87283:
/*!***********************************************************************!*\
  !*** ./src/app/pages/diet-breakfast/diet-breakfast-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietBreakfastPageRoutingModule": () => (/* binding */ DietBreakfastPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _diet_breakfast_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diet-breakfast.page */ 19801);




const routes = [
    {
        path: '',
        component: _diet_breakfast_page__WEBPACK_IMPORTED_MODULE_0__.DietBreakfastPage
    }
];
let DietBreakfastPageRoutingModule = class DietBreakfastPageRoutingModule {
};
DietBreakfastPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DietBreakfastPageRoutingModule);



/***/ }),

/***/ 233:
/*!***************************************************************!*\
  !*** ./src/app/pages/diet-breakfast/diet-breakfast.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietBreakfastPageModule": () => (/* binding */ DietBreakfastPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _diet_breakfast_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diet-breakfast-routing.module */ 87283);
/* harmony import */ var _diet_breakfast_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diet-breakfast.page */ 19801);







let DietBreakfastPageModule = class DietBreakfastPageModule {
};
DietBreakfastPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _diet_breakfast_routing_module__WEBPACK_IMPORTED_MODULE_0__.DietBreakfastPageRoutingModule
        ],
        declarations: [_diet_breakfast_page__WEBPACK_IMPORTED_MODULE_1__.DietBreakfastPage]
    })
], DietBreakfastPageModule);



/***/ }),

/***/ 19801:
/*!*************************************************************!*\
  !*** ./src/app/pages/diet-breakfast/diet-breakfast.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietBreakfastPage": () => (/* binding */ DietBreakfastPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_diet_breakfast_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./diet-breakfast.page.html */ 91395);
/* harmony import */ var _diet_breakfast_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diet-breakfast.page.scss */ 23779);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_diet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/diet.service */ 70778);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ 77524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_plans_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/plans.service */ 71556);









let DietBreakfastPage = class DietBreakfastPage {
    constructor(userSrv, planSrv, dietSrv, router, loadCtrl) {
        this.userSrv = userSrv;
        this.planSrv = planSrv;
        this.dietSrv = dietSrv;
        this.router = router;
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
                    refeicao: 2,
                };
                const dietData = yield this.dietSrv.getDietUserDay(dadosDieta).toPromise();
                loading.present();
                this.breakfast = dietData.dados;
                console.log(this.breakfast);
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
DietBreakfastPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_plans_service__WEBPACK_IMPORTED_MODULE_4__.PlansService },
    { type: _services_diet_service__WEBPACK_IMPORTED_MODULE_2__.DietService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
DietBreakfastPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-diet-breakfast',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_diet_breakfast_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_diet_breakfast_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DietBreakfastPage);



/***/ }),

/***/ 91395:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/diet-breakfast/diet-breakfast.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n <ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"backToSnackWeek()\" >\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Dieta</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h6 style=\"text-align: center ; color:#02bd99; font-weight: bold;\" >{{programa}}</h6>\n  <h6 style=\"text-align: center ;\" >Mês {{mesAtual}}</h6>\n  <h6 style=\"text-align: center ; font-weight: bold;\">Café-da-manhã - 08:00</h6>\n\n  <ion-list>\n    <ion-item-group *ngFor=\"let b of breakfast\">\n      <ion-item-divider>\n        <ion-label>{{b.desc}}</ion-label>\n      </ion-item-divider>\n\n    </ion-item-group>\n  </ion-list>\n  <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\" >\n    <ion-slide *ngFor=\"let b of breakfast\">\n      <img src=\"{{b.url_img}}\" alt=\"\" srcset=\"\">\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ 23779:
/*!***************************************************************!*\
  !*** ./src/app/pages/diet-breakfast/diet-breakfast.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWV0LWJyZWFrZmFzdC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_diet-breakfast_diet-breakfast_module_ts.js.map