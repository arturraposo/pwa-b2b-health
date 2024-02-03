"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_exams_exams_module_ts"],{

/***/ 10462:
/*!*****************************************************!*\
  !*** ./src/app/pages/exams/exams-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsPageRoutingModule": () => (/* binding */ ExamsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _exams_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exams.page */ 50797);




const routes = [
    {
        path: '',
        component: _exams_page__WEBPACK_IMPORTED_MODULE_0__.ExamsPage
    }
];
let ExamsPageRoutingModule = class ExamsPageRoutingModule {
};
ExamsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExamsPageRoutingModule);



/***/ }),

/***/ 31578:
/*!*********************************************!*\
  !*** ./src/app/pages/exams/exams.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsPageModule": () => (/* binding */ ExamsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _exams_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exams-routing.module */ 10462);
/* harmony import */ var _exams_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams.page */ 50797);







let ExamsPageModule = class ExamsPageModule {
};
ExamsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exams_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamsPageRoutingModule
        ],
        declarations: [_exams_page__WEBPACK_IMPORTED_MODULE_1__.ExamsPage]
    })
], ExamsPageModule);



/***/ }),

/***/ 50797:
/*!*******************************************!*\
  !*** ./src/app/pages/exams/exams.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsPage": () => (/* binding */ ExamsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exams_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exams.page.html */ 79306);
/* harmony import */ var _exams_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams.page.scss */ 23648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_exams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/exams.service */ 61028);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ 77524);









let ExamsPage = class ExamsPage {
    constructor(router, route, navCtrl, examSrv, userSrv, formBuilder, toastCtrl) {
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.examSrv = examSrv;
        this.userSrv = userSrv;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((data) => {
            this.id = data.grupo_id;
            this.loadGroupExam();
            this.initialFormLogin();
        });
    }
    goToExamsTwo() {
        this.router.navigate(["exams2"]);
    }
    initialFormLogin() {
        this.form = this.formBuilder.group({
            mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        });
    }
    loadGroupExam() {
        this.examSrv.getGroupExam(this.id).subscribe((data) => {
            this.campos = data;
            this.buildForm();
            console.log(data);
        });
    }
    buildForm() {
        const formControls = {
            mes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        };
        this.campos.forEach((campo) => {
            formControls[campo.desc] = ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]];
        });
        this.form = this.formBuilder.group(formControls);
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.valid) {
                this.form.value.id = this.id;
                const dados = this.form.value;
                this.userSrv.insertExameUser(dados).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.showToast("Exame Inserido com Sucesso");
                    this.router.navigate(["menu-exames"]);
                }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.showToast(error);
                }));
            }
        });
    }
    backTo() {
        this.navCtrl.back();
    }
    showToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 500,
            });
            yield toast.present();
        });
    }
};
ExamsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: src_app_services_exams_service__WEBPACK_IMPORTED_MODULE_2__.ExamsService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
ExamsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-exams",
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exams_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exams_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExamsPage);



/***/ }),

/***/ 79306:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/exams/exams.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"backTo()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Exames</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h6 style=\"font-weight: bold; text-align:center; font-size:13px\">Você é unico para nós !!</h6>\n  <h6 style=\" text-align:center; font-size:12px\">Para fazermos um acompanhamento personalizado precisamos que informe os dados dos seus exames. </h6>\n\n  <form [formGroup]=\"form\"><br>\n     <ion-item>\n      <ion-label>Mês</ion-label>\n      <ion-select formControlName=\"mes\">\n        <ion-select-option value=\"1\">Janeiro</ion-select-option>\n        <ion-select-option value=\"2\">Fevereiro</ion-select-option>\n        <ion-select-option value=\"3\">Março</ion-select-option>\n        <ion-select-option value=\"4\">Abril</ion-select-option>\n        <ion-select-option value=\"5\">Maio</ion-select-option>\n        <ion-select-option value=\"6\">Junho</ion-select-option>\n        <ion-select-option value=\"7\">Julho</ion-select-option>\n        <ion-select-option value=\"8\">Agosto</ion-select-option>\n        <ion-select-option value=\"9\">Setembro</ion-select-option>\n        <ion-select-option value=\"10\">Outubro</ion-select-option>\n        <ion-select-option value=\"11\">Novembro</ion-select-option>\n        <ion-select-option value=\"12\">Dezembro</ion-select-option>\n      </ion-select>\n    </ion-item> \n  \n    <ion-item *ngFor=\"let campo of campos\">\n      <ion-label position=\"floating\">{{campo.desc}}:</ion-label>\n      <ion-input type=\"text\" [formControlName]=\"campo.desc\" [placeholder]=\"'Informe a sua ' + campo.desc\"> </ion-input>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label position=\"floating\">Insulina:</ion-label>\n      <ion-input type=\"text\" placeholder=\"Informe a sua Insulina\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Homa-ir:</ion-label>\n      <ion-input type=\"text\" placeholder=\"Informe o seu índice de Homa-ir\"></ion-input>\n    </ion-item> -->\n    \n    <!-- <ion-item>\n      <ion-label position=\"floating\">Testosterona Total</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">IGF1</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">S-DHEA</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Cortisol</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">CPK</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Colesterol Total</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Colesterol Total</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">LDL</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Triglicerides</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Homocisteina </ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">TGO</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">TGP</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Vitamina B12</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Ferritina</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item> -->\n   \n  </form>\n</ion-content>\n<ion-footer (click)=\"submit()\">\n  <ion-toolbar color=\"primary\">\n    <ion-title style=\"text-align: center;\">Enviar</ion-title>\n\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 23648:
/*!*********************************************!*\
  !*** ./src/app/pages/exams/exams.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_exams_exams_module_ts.js.map