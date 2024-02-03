"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 63104:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 66462);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/



const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 59029:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 63104);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 66462);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 66462:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.page.html */ 31654);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 74415);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 36636);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 77524);
/* harmony import */ var _services_plans_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/plans.service */ 71556);









let ProfilePage = class ProfilePage {
    constructor(router, authSrv, userSrv, planSrv, loadCtrl) {
        this.router = router;
        this.authSrv = authSrv;
        this.userSrv = userSrv;
        this.planSrv = planSrv;
        this.loadCtrl = loadCtrl;
        this.metas = [];
        this.programa = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                yield this.loadProfile();
            }), 2500); // Defina o tempo desejado em milissegundos (neste caso, 1000 ms ou 1 segundo)
        });
    }
    onClick() {
        this.router.navigate(['tabs/tab1']);
    }
    loadProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authSrv.profile().subscribe(data => {
                this.profile = data;
                this.nome = data.nome;
                this.email = data.email;
                this.loadUserData();
            });
        });
    }
    loadUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const load = yield this.loadCtrl.create({ message: "Carregando" });
            load.present();
            yield this.userSrv.getWeightUser().subscribe(data => {
                this.peso = data.dados.peso;
            });
            yield this.userSrv.getHeightUser().subscribe(data => {
                this.altura = data.dados.altura;
            });
            yield this.userSrv.getGoalsUser().subscribe(data => {
                this.metas = data.dados;
                console.log(this.metas.length);
            });
            yield this.userSrv.getUserPlan().subscribe(data => {
                this.programa = data.programa;
                console.log(this.programa);
            });
            yield this.planSrv.getMonthPlan().subscribe(data => {
                this.mesPrograma = data.mes_atual;
                console.log(this.mesPrograma);
            });
            load.dismiss();
        });
    }
    goToAtualizaPeso() {
        this.router.navigate(['atualiza-peso']);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_plans_service__WEBPACK_IMPORTED_MODULE_4__.PlansService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 31654:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/profile/profile.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Perfil</ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-item lines=\"none\">\n    <ion-thumbnail>\n      <img src=\"assets/images/drink.png\"/>\n    </ion-thumbnail>\n    <div class=\"name\">\n      <ion-label class=\"name_lbl\" *ngIf=\"nome\">{{nome}}</ion-label>\n      <ion-label class=\"name_lbl\" *ngIf=\"!nome\">\n        <ion-skeleton-text animated=\"true\"></ion-skeleton-text>\n      </ion-label>\n      <ion-label class=\"prgrm_lbl\" *ngIf=\"email\">{{email}}</ion-label>\n      <ion-label class=\"prgrm_lbl\" *ngIf=\"!email\">\n        <ion-skeleton-text animated=\"true\"></ion-skeleton-text>\n      </ion-label>\n    </div>\n  </ion-item>\n  \n  <ion-row>\n    <ion-col size=\"6\">\n      <div class=\"data\">\n        <ion-label class=\"frst_lbl\" color=\"primary\" *ngIf=\"altura\">{{altura}}cm</ion-label>\n        <ion-label class=\"frst_lbl\" color=\"primary\" *ngIf=\"!altura\">\n          <ion-skeleton-text animated=\"true\"></ion-skeleton-text>\n        </ion-label>\n        <ion-label class=\"scnd_lbl\" *ngIf=\"altura\">Altura</ion-label>\n        <ion-label class=\"scnd_lbl\" *ngIf=\"!altura\">\n          <ion-skeleton-text animated=\"true\"></ion-skeleton-text>\n        </ion-label>\n      </div>\n    </ion-col>\n  \n    <ion-col size=\"6\">\n      <div class=\"data\">\n        <ion-label class=\"frst_lbl\" color=\"primary\" *ngIf=\"peso\">{{peso}}kg</ion-label>\n        <ion-label class=\"frst_lbl\" color=\"primary\" *ngIf=\"!peso\">\n          <ion-skeleton-text animated=\"true\"></ion-skeleton-text>\n        </ion-label>\n        <ion-label class=\"scnd_lbl\" *ngIf=\"peso\">Peso</ion-label>\n        <ion-label class=\"scnd_lbl\" *ngIf=\"!peso\">\n          <ion-skeleton-text animated=\"true\"></ion-skeleton-text>\n        </ion-label>\n      </div>\n    </ion-col>\n  </ion-row>\n  \n\n    <!-- <ion-col size=\"6\" *ngIf=\"!peso\">\n      <div class=\"data\">\n        <ion-label class=\"frst_lbl\" color=\"primary\"><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></ion-label>\n        <ion-label class=\"scnd_lbl\">Peso</ion-label>\n      </div>\n    </ion-col> -->\n\n  <div class=\"account\">\n    <ion-label class=\"head_lbl\" color=\"primary\">Metas</ion-label>\n    <div class=\"info\">\n      <ion-item lines=\"none\" *ngFor=\"let meta of metas; let i = index\">\n        <ion-icon slot=\"end\" name=\"checkbox-outline\" color=\"primary\"></ion-icon>\n        <ion-label>{{meta.desc}}</ion-label>\n      </ion-item>\n      <!-- Use ion-skeleton-text para criar um esqueleto de carregamento -->\n      <ion-skeleton-text *ngIf=\"metas.length === 0\" animated=\"true\">\n        <ion-item>\n          <ion-icon slot=\"end\" name=\"checkbox-outline\" color=\"primary\"></ion-icon>\n          <ion-label text-start>Meta 1</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon slot=\"end\" name=\"checkbox-outline\" color=\"primary\"></ion-icon>\n          <ion-label text-start>Meta 2</ion-label>\n        </ion-item>\n        <!-- Adicione quantos itens de esqueleto desejar -->\n      </ion-skeleton-text>\n    </div>\n  </div>\n  <div class=\"nitification\">\n    <ion-label class=\"head_lbl\" color=\"primary\">Programa</ion-label>\n    <ion-item lines=\"none\" *ngIf=\"!programa || !mesPrograma\">\n      <ion-skeleton-text animated=\"true\">\n        <ion-icon slot=\"end\" name=\"arrow-forward\" color=\"primary\"></ion-icon>\n        <ion-label text-start>Programa</ion-label>\n      </ion-skeleton-text>\n      <ion-skeleton-text animated=\"true\">\n        <ion-icon slot=\"end\" name=\"arrow-forward\" color=\"primary\"></ion-icon>\n        <ion-label text-start>Você está no {{mesPrograma}}º mês</ion-label>\n      </ion-skeleton-text>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"programa && mesPrograma\">\n      <ion-icon name=\"arrow-forward\" color=\"primary\"></ion-icon>\n      <ion-label>{{programa}}</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"programa && mesPrograma\">\n      <ion-icon name=\"arrow-forward\" color=\"primary\"></ion-icon>\n      <ion-label>Você está no {{mesPrograma}}º mês</ion-label>\n    </ion-item>\n  </div>\n  \n  \n  <!-- <div class=\"other\">\n    <ion-label class=\"head_lbl\">Outros</ion-label>\n    <ion-item lines=\"none\">\n      <ion-icon name=\"mail-outline\" color=\"primary\" style=\"margin-right: 10px;\"></ion-icon>\n      <ion-label>Contatos</ion-label>\n      <ion-icon slot=\"end\" name=\"chevron-forward\" color=\"medium\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-icon name=\"checkbox-outline\" color=\"primary\" style=\"margin-right: 10px;\"></ion-icon>\n      <ion-label>Política de Privacidade</ion-label>\n      <ion-icon slot=\"end\" name=\"chevron-forward\" color=\"medium\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-icon name=\"settings-outline\" color=\"primary\" style=\"margin-right: 10px;\"></ion-icon>\n      <ion-label>Configurações</ion-label>\n      <ion-icon slot=\"end\" name=\"chevron-forward\" color=\"medium\"></ion-icon>\n    </ion-item>\n  </div> -->\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"block\" shape=\"round\" (click)=\"goToAtualizaPeso()\">\n    Atualizar Peso\n  </ion-button>\n</ion-footer>\n\n");

/***/ }),

/***/ 74415:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-header ion-toolbar {\n  --border-width: 0;\n}\nion-content ion-item {\n  margin-top: 10px;\n}\nion-content ion-item ion-thumbnail img {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n}\nion-content ion-item .name {\n  display: flex;\n  flex-direction: column;\n}\nion-content ion-item .name .name_lbl {\n  margin-bottom: 5px;\n  font-family: \"medium\";\n}\nion-content ion-item .name .prgrm_lbl {\n  font-size: 14px;\n}\nion-content ion-item ion-button {\n  width: 70px;\n  height: 30px;\n}\nion-content ion-row {\n  margin-top: 2rem;\n}\nion-content ion-row ion-col {\n  box-shadow: 1px 3px 10px var(--box-shadow-color);\n  --box-shadow-color: lightgray;\n  border-radius: 10px;\n}\nion-content ion-row ion-col .data {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\nion-content ion-row ion-col .data .frst_lbl {\n  color: #92a3fd;\n}\nion-content ion-row ion-col .data .scnd_lbl {\n  margin-top: 5px;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\nion-content .account {\n  box-shadow: 1px 3px 10px var(--box-shadow-color);\n  --box-shadow-color: lightgray;\n  padding: 10px;\n  margin-top: 1rem;\n  border-radius: 10px;\n}\nion-content .account .head_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .account .info ion-icon {\n  font-size: 20px;\n}\nion-content .account .info ion-label {\n  font-size: 14px;\n}\nion-content .nitification {\n  box-shadow: 1px 3px 10px var(--box-shadow-color);\n  --box-shadow-color: lightgray;\n  padding: 10px;\n  margin-top: 1rem;\n  border-radius: 10px;\n}\nion-content .nitification .head_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .nitification ion-item ion-icon {\n  font-size: 20px;\n}\nion-content .nitification ion-item ion-label {\n  font-size: 14px;\n}\nion-content .other {\n  box-shadow: 1px 3px 10px var(--box-shadow-color);\n  --box-shadow-color: lightgray;\n  padding: 10px;\n  margin-top: 1rem;\n  border-radius: 10px;\n}\nion-content .other .head_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .other ion-item ion-icon {\n  font-size: 20px;\n}\nion-content .other ion-item ion-label {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7OztDQUFBO0FBU0U7RUFDRSxpQkFBQTtBQUNKO0FBSUU7RUFDRSxnQkFBQTtBQURKO0FBR007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRFI7QUFJSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUZOO0FBR007RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBRFI7QUFHTTtFQUNFLGVBQUE7QUFEUjtBQUlJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGTjtBQUtFO0VBQ0UsZ0JBQUE7QUFISjtBQUlJO0VBQ0UsZ0RBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBRk47QUFHTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBRFI7QUFFUTtFQUNFLGNBQUE7QUFBVjtBQUVRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFWO0FBS0U7RUFDRSxnREFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUlJO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBRk47QUFLTTtFQUNFLGVBQUE7QUFIUjtBQUtNO0VBQ0UsZUFBQTtBQUhSO0FBT0U7RUFDRSxnREFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU1JO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBSk47QUFPTTtFQUNFLGVBQUE7QUFMUjtBQU9NO0VBQ0UsZUFBQTtBQUxSO0FBU0U7RUFDRSxnREFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVFJO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBTk47QUFTTTtFQUNFLGVBQUE7QUFQUjtBQVNNO0VBQ0UsZUFBQTtBQVBSIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cbmlvbi1jb250ZW50IGlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gLm5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gLm5hbWUgLm5hbWVfbGJsIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIC5uYW1lIC5wcmdybV9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCBpb24taXRlbSBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLXJvdyBpb24tY29sIHtcbiAgYm94LXNoYWRvdzogMXB4IDNweCAxMHB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xuICAtLWJveC1zaGFkb3ctY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cgaW9uLWNvbCAuZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cgaW9uLWNvbCAuZGF0YSAuZnJzdF9sYmwge1xuICBjb2xvcjogIzkyYTNmZDtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cgaW9uLWNvbCAuZGF0YSAuc2NuZF9sYmwge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuaW9uLWNvbnRlbnQgLmFjY291bnQge1xuICBib3gtc2hhZG93OiAxcHggM3B4IDEwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XG4gIC0tYm94LXNoYWRvdy1jb2xvcjogbGlnaHRncmF5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmFjY291bnQgLmhlYWRfbGJsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJzZW1pLWJvbGRcIjtcbn1cbmlvbi1jb250ZW50IC5hY2NvdW50IC5pbmZvIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLmFjY291bnQgLmluZm8gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgLm5pdGlmaWNhdGlvbiB7XG4gIGJveC1zaGFkb3c6IDFweCAzcHggMTBweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcbiAgLS1ib3gtc2hhZG93LWNvbG9yOiBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tY29udGVudCAubml0aWZpY2F0aW9uIC5oZWFkX2xibCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG59XG5pb24tY29udGVudCAubml0aWZpY2F0aW9uIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLm5pdGlmaWNhdGlvbiBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCAub3RoZXIge1xuICBib3gtc2hhZG93OiAxcHggM3B4IDEwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XG4gIC0tYm94LXNoYWRvdy1jb2xvcjogbGlnaHRncmF5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm90aGVyIC5oZWFkX2xibCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG59XG5pb24tY29udGVudCAub3RoZXIgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5pb24tY29udGVudCAub3RoZXIgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map