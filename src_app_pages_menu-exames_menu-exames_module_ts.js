"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_menu-exames_menu-exames_module_ts"],{

/***/ 18036:
/*!*****************************************************************!*\
  !*** ./src/app/pages/menu-exames/menu-exames-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuExamesPageRoutingModule": () => (/* binding */ MenuExamesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _menu_exames_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-exames.page */ 54072);




const routes = [
    {
        path: '',
        component: _menu_exames_page__WEBPACK_IMPORTED_MODULE_0__.MenuExamesPage
    }
];
let MenuExamesPageRoutingModule = class MenuExamesPageRoutingModule {
};
MenuExamesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuExamesPageRoutingModule);



/***/ }),

/***/ 94143:
/*!*********************************************************!*\
  !*** ./src/app/pages/menu-exames/menu-exames.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuExamesPageModule": () => (/* binding */ MenuExamesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _menu_exames_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-exames-routing.module */ 18036);
/* harmony import */ var _menu_exames_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-exames.page */ 54072);







let MenuExamesPageModule = class MenuExamesPageModule {
};
MenuExamesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_exames_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuExamesPageRoutingModule
        ],
        declarations: [_menu_exames_page__WEBPACK_IMPORTED_MODULE_1__.MenuExamesPage]
    })
], MenuExamesPageModule);



/***/ }),

/***/ 54072:
/*!*******************************************************!*\
  !*** ./src/app/pages/menu-exames/menu-exames.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuExamesPage": () => (/* binding */ MenuExamesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_exames_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./menu-exames.page.html */ 10586);
/* harmony import */ var _menu_exames_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-exames.page.scss */ 1705);
/* harmony import */ var src_app_services_exams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/exams.service */ 61028);
/* harmony import */ var _services_grupo_exames_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/grupo-exames.service */ 24439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);







let MenuExamesPage = class MenuExamesPage {
    constructor(router, gpExSrv, exaSrv) {
        this.router = router;
        this.gpExSrv = gpExSrv;
        this.exaSrv = exaSrv;
    }
    ngOnInit() {
        this.loadGroupExams();
    }
    loadGroupExams() {
        this.gpExSrv.getGroupExams().subscribe((data) => {
            this.gruposExames = data;
        });
        this.exaSrv.getExames().subscribe((data) => {
            console.log(data);
        });
    }
    goToMealPlaner(id) {
        let navigationExtras = {
            queryParams: {
                grupo_id: id
            }
        };
        this.router.navigate(['meal-planner'], navigationExtras);
    }
    goToPerfilHormonal() {
        this.router.navigate(['perfil-hormonal']);
    }
    goToPerfilPerformace() {
        this.router.navigate(['perfil-peformance']);
    }
    goToPerfilLipidico() {
        this.router.navigate(['perfil-lipidico']);
    }
    goToFuncaoHepatica() {
        this.router.navigate(['funcao-hepatica']);
    }
    goToFuncaoRenal() {
        this.router.navigate(['funcao-renal']);
    }
    goToVitaminas() {
        this.router.navigate(['vitaminas']);
    }
    backToBegin() {
        this.router.navigate(['tabs/tab1']);
    }
};
MenuExamesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_grupo_exames_service__WEBPACK_IMPORTED_MODULE_3__.GrupoExamesService },
    { type: src_app_services_exams_service__WEBPACK_IMPORTED_MODULE_2__.ExamsService }
];
MenuExamesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-menu-exames',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_exames_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menu_exames_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuExamesPage);



/***/ }),

/***/ 24439:
/*!**************************************************!*\
  !*** ./src/app/services/grupo-exames.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrupoExamesService": () => (/* binding */ GrupoExamesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let GrupoExamesService = class GrupoExamesService {
    constructor(http) {
        this.http = http;
    }
    getGroupExams() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_local}/grupos-exames`);
    }
};
GrupoExamesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
GrupoExamesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GrupoExamesService);



/***/ }),

/***/ 10586:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/menu-exames/menu-exames.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"backToBegin()\" >\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Exames</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h6 style=\"text-align:center; font-weight:bold;\">Tipos de Exame</h6>\n  <ion-grid>\n    <ion-row *ngFor=\"let grupo of gruposExames\">\n      <ion-col size=\"12\">\n        <ion-card (click)=\"goToMealPlaner(grupo.id)\">\n          <ion-card-header>\n            <ion-card-title style=\"text-align: center\"><ion-icon name=\"reader-outline\" style=\"color:#02bd99;\"></ion-icon>&nbsp;&nbsp;{{grupo.desc}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <!-- <ion-col size=\"12\">\n      \n        <ion-card (click)=\"goToPerfilHormonal()\">\n          <ion-card-header>\n            <ion-card-title  style=\"text-align: center\" > <ion-icon name=\"receipt-outline\" style=\"color:#02bd99\"></ion-icon>&nbsp;&nbsp;Perfil Hormonal</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col> -->\n      \n    </ion-row>\n    <!-- <ion-row>\n      <ion-col size=\"12\">\n        <ion-card (click)=\"goToPerfilPerformace()\">\n          <ion-card-header>\n            <ion-card-title style=\"text-align: center\"><ion-icon name=\"reader-outline\" style=\"color:#02bd99\"></ion-icon>&nbsp;&nbsp;Perfil de Performance</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-card (click)=\"goToPerfilLipidico()\" >\n          <ion-card-header>\n            <ion-card-title style=\"text-align: center\"><ion-icon name=\"receipt-outline\" style=\"color:#02bd99\"></ion-icon>&nbsp;&nbsp;Perfil Lipídico</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card (click)=\"goToFuncaoHepatica()\">\n          <ion-card-header>\n            <ion-card-title style=\"text-align: center\"><ion-icon name=\"folder-outline\" style=\"color:#02bd99\"></ion-icon>&nbsp;&nbsp;Função Hepática </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-card (click)=\"goToFuncaoRenal()\" >\n          <ion-card-header>\n            <ion-card-title style=\"text-align: center\"><ion-icon name=\"reader-outline\" style=\"color:#02bd99\"></ion-icon>&nbsp;&nbsp;Função Renal</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-card (click)=\"goToVitaminas()\">\n          <ion-card-header>\n            <ion-card-title style=\"text-align: center\"><ion-icon name=\"folder-outline\" style=\"color:#02bd99\"></ion-icon>&nbsp;&nbsp;Vitaminas</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row> -->\n  \n    \n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ 1705:
/*!*********************************************************!*\
  !*** ./src/app/pages/menu-exames/menu-exames.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LWV4YW1lcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu-exames_menu-exames_module_ts.js.map