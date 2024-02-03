"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tempo-treino_tempo-treino_module_ts"],{

/***/ 74161:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tempo-treino/tempo-treino-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempoTreinoPageRoutingModule": () => (/* binding */ TempoTreinoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tempo_treino_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempo-treino.page */ 8233);




const routes = [
    {
        path: '',
        component: _tempo_treino_page__WEBPACK_IMPORTED_MODULE_0__.TempoTreinoPage
    }
];
let TempoTreinoPageRoutingModule = class TempoTreinoPageRoutingModule {
};
TempoTreinoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TempoTreinoPageRoutingModule);



/***/ }),

/***/ 3967:
/*!***********************************************************!*\
  !*** ./src/app/pages/tempo-treino/tempo-treino.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempoTreinoPageModule": () => (/* binding */ TempoTreinoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _tempo_treino_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempo-treino-routing.module */ 74161);
/* harmony import */ var _tempo_treino_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tempo-treino.page */ 8233);







let TempoTreinoPageModule = class TempoTreinoPageModule {
};
TempoTreinoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tempo_treino_routing_module__WEBPACK_IMPORTED_MODULE_0__.TempoTreinoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_tempo_treino_page__WEBPACK_IMPORTED_MODULE_1__.TempoTreinoPage]
    })
], TempoTreinoPageModule);



/***/ }),

/***/ 8233:
/*!*********************************************************!*\
  !*** ./src/app/pages/tempo-treino/tempo-treino.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempoTreinoPage": () => (/* binding */ TempoTreinoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tempo_treino_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tempo-treino.page.html */ 46988);
/* harmony import */ var _tempo_treino_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tempo-treino.page.scss */ 34896);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ 77524);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);








let TempoTreinoPage = class TempoTreinoPage {
    constructor(route, loadCtrl, toastCtrl, navCtrl, usrSrv) {
        this.route = route;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.usrSrv = usrSrv;
    }
    ngOnInit() {
        this.initialForm();
    }
    initialForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            situacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            duracao: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            emocao: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const dados = this.form.value;
            if (!dados.situacao) {
                yield this.showToast("Informe a situação do treino");
                return false;
            }
            this.usrSrv.insertTimeTrainig(dados).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield this.showToast("Tempo de treino inserido com sucesso");
                this.route.navigate(["menu-exercicios"]);
            }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield this.showToast(error);
            }));
            console.log(this.form.value);
        });
    }
    back() {
        this.navCtrl.back();
    }
    showToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 500,
            });
            yield toast.present();
        });
    }
};
TempoTreinoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
TempoTreinoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-tempo-treino",
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tempo_treino_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tempo_treino_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TempoTreinoPage);



/***/ }),

/***/ 46988:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tempo-treino/tempo-treino.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("  <ion-header mode=\"ios\" class=\"ion-no-border\">\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"back()\">\n          <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Tempo de Treino</ion-title>\n\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n\n    <form [formGroup]=\"form\"><br>\n      <ion-item>\n        <ion-label>Situação do Treino</ion-label>\n        <ion-select formControlName=\"situacao\">\n          <ion-select-option value=\"Realizado\">Realizado</ion-select-option>\n          <ion-select-option value=\"Parcialmente Realizado\">Parcialmente</ion-select-option>\n          <ion-select-option value=\"Não Realizado\">Não Realizado</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label position=\"floating\">Glicemia:</ion-label>\n        <ion-input type=\"text\" placeholder=\"Informe a sua Glicemia\"> </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Insulina:</ion-label>\n        <ion-input type=\"text\" placeholder=\"Informe a sua Insulina\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Homa-ir:</ion-label>\n        <ion-input type=\"text\" placeholder=\"Informe o seu índice de Homa-ir\"></ion-input>\n      </ion-item> -->\n      \n      <ion-item>\n        <ion-label position=\"floating\">Tempo de Treino:</ion-label>\n        <ion-input formControlName=\"duracao\" type=\"time\"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>Como você se Sentiu apos o treino ?</ion-label>\n        <ion-select formControlName=\"emocao\">\n          <ion-select-option value=\"Muito Bem\">Muito Bem </ion-select-option>\n          <ion-select-option value=\"Cansado\">Cansado</ion-select-option>\n          <ion-select-option value=\"Exausto\">Exausto</ion-select-option>\n        </ion-select>\n      </ion-item>\n      \n      <!-- <ion-item>\n        <ion-label position=\"floating\">CPK</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item> -->\n      <!-- <ion-item>\n        <ion-label position=\"floating\">Colesterol Total</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Colesterol Total</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">LDL</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Triglicerides</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Homocisteina </ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">TGO</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">TGP</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Vitamina B12</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Ferritina</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item> --> \n    \n    </form>\n  </ion-content>\n  <ion-footer >\n    <ion-toolbar color=\"primary\" (click)=\"submit()\">\n      <ion-title style=\"text-align: center;\">Enviar</ion-title>\n\n    </ion-toolbar>\n  </ion-footer>");

/***/ }),

/***/ 34896:
/*!***********************************************************!*\
  !*** ./src/app/pages/tempo-treino/tempo-treino.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wby10cmVpbm8ucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tempo-treino_tempo-treino_module_ts.js.map