"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_menu-diet_menu-diet_module_ts"],{

/***/ 63251:
/*!*************************************************************!*\
  !*** ./src/app/pages/menu-diet/menu-diet-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuDietPageRoutingModule": () => (/* binding */ MenuDietPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _menu_diet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-diet.page */ 97803);




const routes = [
    {
        path: '',
        component: _menu_diet_page__WEBPACK_IMPORTED_MODULE_0__.MenuDietPage
    }
];
let MenuDietPageRoutingModule = class MenuDietPageRoutingModule {
};
MenuDietPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuDietPageRoutingModule);



/***/ }),

/***/ 14968:
/*!*****************************************************!*\
  !*** ./src/app/pages/menu-diet/menu-diet.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuDietPageModule": () => (/* binding */ MenuDietPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _menu_diet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-diet-routing.module */ 63251);
/* harmony import */ var _menu_diet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-diet.page */ 97803);







let MenuDietPageModule = class MenuDietPageModule {
};
MenuDietPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_diet_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuDietPageRoutingModule
        ],
        declarations: [_menu_diet_page__WEBPACK_IMPORTED_MODULE_1__.MenuDietPage]
    })
], MenuDietPageModule);



/***/ }),

/***/ 97803:
/*!***************************************************!*\
  !*** ./src/app/pages/menu-diet/menu-diet.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuDietPage": () => (/* binding */ MenuDietPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_diet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./menu-diet.page.html */ 5551);
/* harmony import */ var _menu_diet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-diet.page.scss */ 57476);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 77524);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_plans_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/plans.service */ 71556);







let MenuDietPage = class MenuDietPage {
    constructor(route, userSrv, planSrv) {
        this.route = route;
        this.userSrv = userSrv;
        this.planSrv = planSrv;
    }
    ngOnInit() {
        this.loadProgramUser();
        this.loadMonthProgram();
    }
    goToMenu() {
        this.route.navigate(['tabs']);
    }
    goToWeekDiet() {
        this.route.navigate(['week-diet']);
    }
    loadProgramUser() {
        this.userSrv.getUserPlan().subscribe((data => {
            this.plan = data.programa;
            console.log(this.plan);
        }));
    }
    loadMonthProgram() {
        this.planSrv.getMonthPlan().subscribe((data) => {
            console.log(data);
            this.meses = data.meses;
            this.mesAtual = data.mes_atual;
        });
    }
};
MenuDietPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: src_app_services_plans_service__WEBPACK_IMPORTED_MODULE_3__.PlansService }
];
MenuDietPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-menu-diet',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_diet_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menu_diet_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuDietPage);



/***/ }),

/***/ 5551:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/menu-diet/menu-diet.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goToMenu()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Dieta</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h6 style=\"text-align:center; font-weight:bold;\">Programa {{plan}}</h6><br><br>\n  <ion-grid>\n    <ion-row>\n      <ion-col size =\"6\" *ngFor = \"let mes of meses\">\n        <ng-container *ngIf=\"mes === mesAtual\" >\n          <ion-card color=\"primary\" (click)=\"goToWeekDiet()\">\n            <ion-card-header>\n              <ion-card-title style=\"text-align: center;\">Mês {{mes}} </ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ng-container>\n        <ng-container *ngIf=\"mes !== mesAtual\" >\n          <ion-card class=\"inative\">\n            <ion-card-header>\n              <ion-card-title class=\"text-inative\" style=\"text-align: center;color: #fff;\">Mês {{mes}} </ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ng-container>\n       \n      </ion-col>\n      <!-- <ion-col>\n        <ion-card style=\"background-color: rgb(105, 102, 102); color:#fff\">\n          <ion-card-header>\n            <ion-card-title style=\"text-align:center; color:#fff\">Mês 2 </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col> -->\n\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col>\n        <ion-card style=\"background-color: rgb(105, 102, 102); color:#fff\">\n          <ion-card-header>\n            <ion-card-title style=\"text-align: center; color:#fff\">Mês 3 </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"background-color: rgb(105, 102, 102); color:#fff\">\n          <ion-card-header>\n            <ion-card-title style=\"text-align:center; color:#fff\">Mês 4 </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n\n    </ion-row> -->\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ 57476:
/*!*****************************************************!*\
  !*** ./src/app/pages/menu-diet/menu-diet.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".inative {\n  color: #fff;\n  background-color: #696666;\n}\n\n/* Estilos para o dia atual */\n\n.active {\n  color: #fff;\n  background-color: #02bd99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtZGlldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFRSw2QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6Im1lbnUtZGlldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5hdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTY2NjY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEVzdGlsb3MgcGFyYSBvIGRpYSBhdHVhbCAqL1xyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDJiZDk5O1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu-diet_menu-diet_module_ts.js.map