"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_week-diet_week-diet_module_ts"],{

/***/ 15679:
/*!*************************************************************!*\
  !*** ./src/app/pages/week-diet/week-diet-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekDietPageRoutingModule": () => (/* binding */ WeekDietPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _week_diet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./week-diet.page */ 4146);




const routes = [
    {
        path: '',
        component: _week_diet_page__WEBPACK_IMPORTED_MODULE_0__.WeekDietPage,
    }
];
let WeekDietPageRoutingModule = class WeekDietPageRoutingModule {
};
WeekDietPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WeekDietPageRoutingModule);



/***/ }),

/***/ 94367:
/*!*****************************************************!*\
  !*** ./src/app/pages/week-diet/week-diet.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekDietPageModule": () => (/* binding */ WeekDietPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _week_diet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./week-diet-routing.module */ 15679);
/* harmony import */ var _week_diet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./week-diet.page */ 4146);







let WeekDietPageModule = class WeekDietPageModule {
};
WeekDietPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _week_diet_routing_module__WEBPACK_IMPORTED_MODULE_0__.WeekDietPageRoutingModule
        ],
        declarations: [_week_diet_page__WEBPACK_IMPORTED_MODULE_1__.WeekDietPage]
    })
], WeekDietPageModule);



/***/ }),

/***/ 4146:
/*!***************************************************!*\
  !*** ./src/app/pages/week-diet/week-diet.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekDietPage": () => (/* binding */ WeekDietPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_week_diet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./week-diet.page.html */ 12526);
/* harmony import */ var _week_diet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./week-diet.page.scss */ 55629);
/* harmony import */ var _services_diet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/diet.service */ 70778);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ 77524);
/* harmony import */ var _services_plans_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/plans.service */ 71556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);








let WeekDietPage = class WeekDietPage {
    constructor(route, planSrv, userSrv, dietSrv) {
        this.route = route;
        this.planSrv = planSrv;
        this.userSrv = userSrv;
        this.dietSrv = dietSrv;
        this.activeSegunda = false;
        this.activeTerca = false;
        this.activeQuarta = false;
        this.activeQuinta = false;
        this.activeSexta = false;
        this.activeSabado = false;
        this.activeDomingo = false;
        this.daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    }
    ngOnInit() {
        this.currentDay = this.getCurrentDayOfWeek();
        this.isCurrentDay = this.daysOfWeek[new Date().getDay()] === this.currentDay;
        this.setComponenteClass();
        this.loadProgramUser();
    }
    goToMenuDiet() {
        this.route.navigate(['menu-diet']);
    }
    goToSnacWeek(id) {
        let navigationExtras = {
            queryParams: {
                dia: id
            }
        };
        this.route.navigate(['snack-week'], navigationExtras);
    }
    getCurrentDayOfWeek() {
        const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const today = new Date().getDay();
        console.log(daysOfWeek[today]);
        return daysOfWeek[today];
    }
    setComponenteClass() {
        if (this.currentDay === 'Segunda-feira') {
            this.activeSegunda = true;
            this.activeTerca = true;
        }
        if (this.currentDay === 'Terça-feira') {
            this.activeTerca = true;
            this.activeQuarta = true;
        }
        if (this.currentDay === 'Quarta-feira') {
            this.activeQuarta = true;
            this.activeQuinta = true;
        }
        if (this.currentDay === 'Quinta-feira') {
            this.activeQuinta = true;
            this.activeSexta = true;
        }
        if (this.currentDay === 'Sexta-feira') {
            this.activeSexta = true;
            this.activeSabado = true;
        }
        if (this.currentDay === 'Sábado') {
            this.activeSabado = true;
            this.activeDomingo = true;
        }
        if (this.currentDay === 'Domingo') {
            this.activeDomingo = true;
            this.activeSegunda = true;
        }
    }
    loadProgramUser() {
        this.userSrv.getUserPlan().subscribe((data => {
            this.plan = data.programa;
            console.log(this.plan);
        }));
        this.planSrv.getMonthPlan().subscribe((data) => {
            console.log(data);
            this.mesAtual = data.mes_atual;
        });
    }
};
WeekDietPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_plans_service__WEBPACK_IMPORTED_MODULE_4__.PlansService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_diet_service__WEBPACK_IMPORTED_MODULE_2__.DietService }
];
WeekDietPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-week-diet',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_week_diet_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_week_diet_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WeekDietPage);



/***/ }),

/***/ 12526:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/week-diet/week-diet.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goToMenuDiet()\">\r\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Dieta</ion-title>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"onClick()\">\r\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <h6 style=\"text-align:center; font-weight:bold;\">Programa {{plan}}</h6>\r\n  <h6 style=\"text-align:center; font-weight:bold; color: #02bd99;\">Mês {{mesAtual}}</h6>\r\n  \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ng-container *ngIf=\"activeSegunda\">\r\n          <ion-card class=\"active\" (click)=\"goToSnacWeek(2)\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Segunda</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!activeSegunda\">\r\n          <ion-card class=\"inative\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Segunda</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ng-container *ngIf=\"activeTerca\">\r\n          <ion-card class=\"active\" (click)=\"goToSnacWeek(3)\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Terca</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!activeTerca\">\r\n          <ion-card class=\"inative\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Terca</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n    \r\n    <ion-row>\r\n      <ion-col>\r\n        <ng-container *ngIf=\"activeQuarta\">\r\n          <ion-card class=\"active\" (click)=\"goToSnacWeek(4)\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Quarta</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!activeQuarta\">\r\n          <ion-card class=\"inative\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Quarta</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ng-container *ngIf=\"activeQuinta\">\r\n          <ion-card class=\"active\" (click)=\"goToSnacWeek(5)\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Quinta</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!activeQuinta\">\r\n          <ion-card class=\"inative\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Quinta</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n    \r\n    <ion-row>\r\n      <ion-col>\r\n        <ng-container *ngIf=\"activeSexta\">\r\n          <ion-card class=\"active\" (click)=\"goToSnacWeek(6)\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Sexta</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!activeSexta\">\r\n          <ion-card class=\"inative\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Sexta</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ng-container *ngIf=\"activeSabado\">\r\n          <ion-card class=\"active\" (click)=\"goToSnacWeek(7)\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Sábado</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!activeSabado\">\r\n          <ion-card class=\"inative\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Sábado</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ng-container *ngIf=\"activeDomingo\">\r\n          <ion-card class=\"active\" (click)=\"goToSnacWeek(1)\" style=\"width: 50%;\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Domingo</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!activeDomingo\">\r\n          <ion-card class=\"inative\" style=\"width: 45%;\">\r\n            <ion-card-header>\r\n              <ion-card-title style=\"text-align: center; color: #fff\">Domingo</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ng-container>\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n    \r\n    \r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ 55629:
/*!*****************************************************!*\
  !*** ./src/app/pages/week-diet/week-diet.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".inative {\n  color: #fff;\n  background-color: #696666;\n}\n\n/* Estilos para o dia atual */\n\n.active {\n  color: #fff;\n  background-color: #02bd99;\n}\n\n.text-center {\n  color: #fff;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWstZGlldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFRSw2QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoid2Vlay1kaWV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmF0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY5NjY2NjtcclxuICB9XHJcbiAgXHJcbiAgLyogRXN0aWxvcyBwYXJhIG8gZGlhIGF0dWFsICovXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMmJkOTk7XHJcbiAgfVxyXG5cclxuICAudGV4dC1jZW50ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_week-diet_week-diet_module_ts.js.map