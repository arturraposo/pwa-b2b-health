"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_week-exercicios_week-exercicios_module_ts"],{

/***/ 76117:
/*!*************************************************************************!*\
  !*** ./src/app/pages/week-exercicios/week-exercicios-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekExerciciosPageRoutingModule": () => (/* binding */ WeekExerciciosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _week_exercicios_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./week-exercicios.page */ 42825);




const routes = [
    {
        path: '',
        component: _week_exercicios_page__WEBPACK_IMPORTED_MODULE_0__.WeekExerciciosPage
    }
];
let WeekExerciciosPageRoutingModule = class WeekExerciciosPageRoutingModule {
};
WeekExerciciosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WeekExerciciosPageRoutingModule);



/***/ }),

/***/ 81782:
/*!*****************************************************************!*\
  !*** ./src/app/pages/week-exercicios/week-exercicios.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekExerciciosPageModule": () => (/* binding */ WeekExerciciosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _week_exercicios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./week-exercicios-routing.module */ 76117);
/* harmony import */ var _week_exercicios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./week-exercicios.page */ 42825);







let WeekExerciciosPageModule = class WeekExerciciosPageModule {
};
WeekExerciciosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _week_exercicios_routing_module__WEBPACK_IMPORTED_MODULE_0__.WeekExerciciosPageRoutingModule
        ],
        declarations: [_week_exercicios_page__WEBPACK_IMPORTED_MODULE_1__.WeekExerciciosPage]
    })
], WeekExerciciosPageModule);



/***/ }),

/***/ 42825:
/*!***************************************************************!*\
  !*** ./src/app/pages/week-exercicios/week-exercicios.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekExerciciosPage": () => (/* binding */ WeekExerciciosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_week_exercicios_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./week-exercicios.page.html */ 69843);
/* harmony import */ var _week_exercicios_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./week-exercicios.page.scss */ 97029);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);





let WeekExerciciosPage = class WeekExerciciosPage {
    constructor(route) {
        this.route = route;
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
    }
    goToDayExercicios(dia) {
        let navigationExtras = {
            queryParams: {
                dia: dia
            }
        };
        this.route.navigate(['day-exercicio'], navigationExtras);
    }
    goToDayExerciciosSexta() {
        this.route.navigate(['day-exercicio-segunda']);
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
            //  this.activeTerca    = true;
        }
        if (this.currentDay === 'Terça-feira') {
            this.activeTerca = true;
            //  this.activeQuarta = true;
        }
        if (this.currentDay === 'Quarta-feira') {
            this.activeQuarta = true;
            //  this.activeQuinta  = true;
        }
        if (this.currentDay === 'Quinta-feira') {
            this.activeQuinta = true;
            //  this.activeSexta   = true;
        }
        if (this.currentDay === 'Sexta-feira') {
            this.activeSexta = true;
            //  this.activeSabado = true;
        }
        if (this.currentDay === 'Sábado') {
            this.activeSabado = true;
            //  this.activeDomingo = true;
        }
        if (this.currentDay === 'Domingo') {
            this.activeDomingo = true;
            //  this.activeSegunda  = true;
        }
    }
    backToBegin() {
        this.route.navigate(['menu-exercicios']);
    }
};
WeekExerciciosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
WeekExerciciosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-week-exercicios',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_week_exercicios_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_week_exercicios_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WeekExerciciosPage);



/***/ }),

/***/ 69843:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/week-exercicios/week-exercicios.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"backToBegin()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Treinos da Semana</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row >\n      <ng-container *ngIf=\"activeSegunda\">\n        <ion-col (click)=\"goToDayExercicios(2)\">\n          <div class=\"cardcategory\" style=\"background-image: url('./assets/images/man.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Segunda</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>\n      <ng-container *ngIf=\"!activeSegunda\">\n        <ion-col >\n          <div class=\"cardcategory-disable\" style=\"background-image: url('./assets/images/man.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Segunda</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>\n      \n    </ion-row>\n    <ion-row>\n      <ng-container *ngIf=\"activeTerca\">\n        <ion-col (click)=\"goToDayExercicios(3)\">\n          <div class=\"cardcategory\" style=\"background-image: url('./assets/images/terca-treino.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Terça</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>\n      <ng-container *ngIf=\"!activeTerca\">\n        <ion-col>\n          <div class=\"cardcategory-disable\" style=\"background-image: url('./assets/images/terca-treino.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Terça</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>\n     \n    </ion-row>\n    <ion-row>\n      <ng-container *ngIf=\"activeQuarta\">\n        <ion-col (click)=\"goToDayExercicios(4)\">\n          <div class=\"cardcategory\" style=\"background-image: url('./assets/images/quarta-treino.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Quarta</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>\n      \n      <ng-container *ngIf=\"!activeQuarta\">\n        <ion-col>\n          <div class=\"cardcategory-disable\" style=\"background-image: url('./assets/images/quarta-treino.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Quarta</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>\n      \n    </ion-row>\n    <ion-row>\n      <ng-container *ngIf=\"activeQuinta\">\n        <ion-col (click)=\"goToDayExercicios(5)\">\n          <div class=\"cardcategory\" style=\"background-image: url('./assets/images/quinta-treino.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Quinta</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>\n      <ng-container *ngIf=\"!activeQuinta\">\n        <ion-col>\n          <div class=\"cardcategory-disable\" style=\"background-image: url('./assets/images/quinta-treino.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Quinta</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>\n      \n    </ion-row>\n    <ion-row>\n      <ng-container *ngIf=\"activeSexta\">\n        <ion-col (click)=\"goToDayExercicios(6)\">\n          <div class=\"cardcategory\" style=\"background-image: url('./assets/images/sexta-treino.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Sexta</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>\n      <ng-container *ngIf=\"!activeSexta\">\n        <ion-col>\n          <div class=\"cardcategory-disable\" style=\"background-image: url('./assets/images/sexta-treino.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Sexta</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>\n    \n    </ion-row>\n    <ion-row>\n      <ng-container *ngIf=\"activeSabado\">\n        <ion-col (click)=\"goToDayExercicios(7)\">\n          <div class=\"cardcategory\" style=\"background-image: url('./assets/images/sabado-treino.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Sábado</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>\n      <ng-container *ngIf=\"!activeSabado\">\n        <ion-col>\n          <div class=\"cardcategory-disable\" style=\"background-image: url('./assets/images/sabado-treino.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Sábado</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>   \n    </ion-row>\n    <ion-row>\n      <ng-container *ngIf=\"activeDomingo\">\n        <ion-col (click)=\"goToDayExercicios(1)\">\n          <div class=\"cardcategory\" style=\"background-image: url('./assets/images/domingo-treino.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Domingo</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>\n      <ng-container *ngIf=\"!activeDomingo\">\n        <ion-col>\n          <div class=\"cardcategory-disable\" style=\"background-image: url('./assets/images/domingo-treino.jpg');\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>Domingo</h1>\n            </div>\n          </div>\n          </div>\n        </ion-col>\n      </ng-container>\n     \n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 97029:
/*!*****************************************************************!*\
  !*** ./src/app/pages/week-exercicios/week-exercicios.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".cardcategory {\n  width: 100%;\n  height: 150px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px;\n}\n\n.cardcategory-disable {\n  width: 100%;\n  height: 150px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px;\n}\n\n.cardcategory .overlay {\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  width: 100%;\n  height: 150px;\n  justify-content: flex-end;\n  align-items: flex-start;\n  display: flex;\n  flex-flow: column;\n  text-align: left;\n  border-radius: 8px;\n}\n\n.cardcategory-disable .overlay {\n  background: #02bd99;\n  opacity: 0.5;\n  position: absolute;\n  width: 100%;\n  height: 150px;\n  justify-content: flex-end;\n  align-items: flex-start;\n  display: flex;\n  flex-flow: column;\n  text-align: left;\n  border-radius: 8px;\n}\n\n.cardcategory .texts:before {\n  content: \"\";\n  background: var(--ion-color-primary);\n  height: 3px;\n  display: block;\n  width: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: 0;\n  margin-bottom: 10px;\n}\n\n.cardcategory-disable .texts:before {\n  content: \"\";\n  background: var(--ion-color-primary);\n  height: 3px;\n  display: block;\n  width: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: 0;\n  margin-bottom: 10px;\n}\n\n.cardcategory .texts {\n  padding-bottom: 15px;\n  width: 100%;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  position: relative;\n}\n\n.cardcategory-disable .texts {\n  padding-bottom: 15px;\n  width: 100%;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  position: relative;\n}\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  display: block;\n  overflow: hidden;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.cardcategory-disable .texts h1 {\n  color: white;\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  display: block;\n  overflow: hidden;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWstZXhlcmNpY2lvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUE7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtBQUlKOztBQURBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUZBO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTUoiLCJmaWxlIjoid2Vlay1leGVyY2ljaW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkY2F0ZWdvcnl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5jYXJkY2F0ZWdvcnktZGlzYWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4uY2FyZGNhdGVnb3J5LWRpc2FibGUgLm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDJiZDk5O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmNhcmRjYXRlZ29yeSAudGV4dHM6YmVmb3Jle1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uY2FyZGNhdGVnb3J5LWRpc2FibGUgLnRleHRzOmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLnRleHRze1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcmRjYXRlZ29yeS1kaXNhYmxlIC50ZXh0c3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC50ZXh0cyBoMXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uY2FyZGNhdGVnb3J5LWRpc2FibGUgLnRleHRzIGgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_week-exercicios_week-exercicios_module_ts.js.map