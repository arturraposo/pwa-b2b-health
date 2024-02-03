"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_menu-exercicios_menu-exercicios_module_ts"],{

/***/ 18861:
/*!*************************************************************************!*\
  !*** ./src/app/pages/menu-exercicios/menu-exercicios-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuExerciciosPageRoutingModule": () => (/* binding */ MenuExerciciosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _menu_exercicios_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-exercicios.page */ 76635);




const routes = [
    {
        path: '',
        component: _menu_exercicios_page__WEBPACK_IMPORTED_MODULE_0__.MenuExerciciosPage
    }
];
let MenuExerciciosPageRoutingModule = class MenuExerciciosPageRoutingModule {
};
MenuExerciciosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuExerciciosPageRoutingModule);



/***/ }),

/***/ 76289:
/*!*****************************************************************!*\
  !*** ./src/app/pages/menu-exercicios/menu-exercicios.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuExerciciosPageModule": () => (/* binding */ MenuExerciciosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _menu_exercicios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-exercicios-routing.module */ 18861);
/* harmony import */ var _menu_exercicios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-exercicios.page */ 76635);







let MenuExerciciosPageModule = class MenuExerciciosPageModule {
};
MenuExerciciosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_exercicios_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuExerciciosPageRoutingModule
        ],
        declarations: [_menu_exercicios_page__WEBPACK_IMPORTED_MODULE_1__.MenuExerciciosPage]
    })
], MenuExerciciosPageModule);



/***/ }),

/***/ 76635:
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-exercicios/menu-exercicios.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuExerciciosPage": () => (/* binding */ MenuExerciciosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_exercicios_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./menu-exercicios.page.html */ 10671);
/* harmony import */ var _menu_exercicios_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-exercicios.page.scss */ 58682);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 77524);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);






let MenuExerciciosPage = class MenuExerciciosPage {
    constructor(router, userSrv) {
        this.router = router;
        this.userSrv = userSrv;
    }
    ngOnInit() {
        this.loadInfo();
    }
    goToWeekExercicios() {
        this.router.navigate(['week-exercicios']);
    }
    goToEvolucaoExercicios() {
        this.router.navigate(['workout-tracker']);
    }
    backToBegin() {
        this.router.navigate(['tabs/tab1']);
    }
    loadInfo() {
        this.userSrv.getUserPlan().subscribe((response) => {
            this.programa = response.programa;
            console.log(this.programa);
        });
    }
};
MenuExerciciosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
MenuExerciciosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-menu-exercicios',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_exercicios_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menu_exercicios_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuExerciciosPage);



/***/ }),

/***/ 10671:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/menu-exercicios/menu-exercicios.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"backToBegin()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Treinos</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col (click)=\"goToWeekExercicios()\">\n        <div class=\"card-center-image\" style=\"background-image: url('./assets/images/bodyparts.jpg');\">\n          <div class=\"card-center-bg\">\n            <div class=\"card-center-text\">\n            <p class=\"title\">Treino</p>\n            <p class=\"subtitle\">{{programa}}</p>\n          </div>\n          </div>\n        </div>\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"goToEvolucaoExercicios()\">\n        <div class=\"card-center-image\" style=\"background-image: url('./assets/images/levels.jpg');\">\n          <div class=\"card-center-bg\">\n            <div class=\"card-center-text\">\n            <p class=\"title\">Evolução</p>\n            <p class=\"subtitle\">Acompanhe a sua evolução em dados</p>\n          </div>\n          </div>\n        </div>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ 58682:
/*!*****************************************************************!*\
  !*** ./src/app/pages/menu-exercicios/menu-exercicios.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-grid {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\nion-grid ion-row {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtZXhlcmNpY2lvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7QUFDUiIsImZpbGUiOiJtZW51LWV4ZXJjaWNpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgXHJcbiAgICBpb24tcm93IHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu-exercicios_menu-exercicios_module_ts.js.map