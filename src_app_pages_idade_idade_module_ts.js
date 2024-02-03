"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_idade_idade_module_ts"],{

/***/ 85908:
/*!*****************************************************!*\
  !*** ./src/app/pages/idade/idade-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdadePageRoutingModule": () => (/* binding */ IdadePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 3036);
/* harmony import */ var _idade_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idade.page */ 75481);





const routes = [
    {
        path: '',
        component: _idade_page__WEBPACK_IMPORTED_MODULE_1__.IdadePage,
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
let IdadePageRoutingModule = class IdadePageRoutingModule {
};
IdadePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], IdadePageRoutingModule);



/***/ }),

/***/ 45919:
/*!*********************************************!*\
  !*** ./src/app/pages/idade/idade.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdadePageModule": () => (/* binding */ IdadePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _idade_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./idade-routing.module */ 85908);
/* harmony import */ var _idade_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idade.page */ 75481);







let IdadePageModule = class IdadePageModule {
};
IdadePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _idade_routing_module__WEBPACK_IMPORTED_MODULE_0__.IdadePageRoutingModule
        ],
        declarations: [_idade_page__WEBPACK_IMPORTED_MODULE_1__.IdadePage]
    })
], IdadePageModule);



/***/ }),

/***/ 75481:
/*!*******************************************!*\
  !*** ./src/app/pages/idade/idade.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdadePage": () => (/* binding */ IdadePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_idade_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./idade.page.html */ 77004);
/* harmony import */ var _idade_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idade.page.scss */ 36840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);





let IdadePage = class IdadePage {
    constructor(router) {
        this.router = router;
        this.img = 'assets/images/homem.png';
    }
    ngOnInit() {
    }
    nextPage() {
        this.router.navigate(['objetivo']);
    }
    onBack() {
        this.router.navigate(['altura']);
    }
};
IdadePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
IdadePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-idade',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_idade_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_idade_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], IdadePage);



/***/ }),

/***/ 77004:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/idade/idade.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title></ion-title>\n    <ion-button (click)=\"onBack()\">\n      <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n </ion-header>\n <ion-content class=\"ion-padding\">\n  \n  <div class=\"name\">\n    <ion-label class=\"head_lbl\">Estamos quase lá !</ion-label>\n    <ion-label class=\"sub_lbl\">\n      Para montarmos um plano personalizado de acordo com os seus objtivos precisamos saber um pouco mais sobre você, tudo bem ? \n    </ion-label>\n  </div>\n<br><br>\n  <ion-card class=\"efeito-vidro\">\n    <ion-card-header>\n      <ion-card-subtitle></ion-card-subtitle>\n      <ion-card-title>Data de Aniversário</ion-card-title>\n    </ion-card-header>\n    <ion-card-content> \n      <ion-input style=\"margin-left:30% ;\" type=\"date\" placeholder=\"dd/mm/aaaa\"></ion-input>\n    </ion-card-content>\n  </ion-card>\n  <br>\n  <ion-card class=\"efeito-vidro\">\n    <ion-card-header>\n      <ion-card-subtitle></ion-card-subtitle>\n      <ion-card-title>Defina seu sexo Biológico</ion-card-title>\n    </ion-card-header>\n    <ion-card-content> \n      <ion-list>\n        <ion-radio-group name=\"auto\">\n          <ion-item>\n            <ion-label>Masculino</ion-label>\n            <ion-radio value=\"tesla\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Femenino</ion-label>\n            <ion-radio value=\"ford\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n      <ion-button (click)=\"nextPage()\" expand=\"block\" shape=\"round\">\n        Continuar \n      </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 36840:
/*!*********************************************!*\
  !*** ./src/app/pages/idade/idade.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .image {\n  margin-top: 4rem;\n  display: flex;\n  justify-content: center;\n}\nion-content .image img {\n  height: 300px;\n  width: 300px;\n}\nion-content .name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin-top: 2rem;\n}\nion-content .name .head_lbl {\n  font-size: 24px;\n  font-family: \"bold\";\n  margin-bottom: 10px;\n}\nion-content .name .sub_lbl {\n  font-size: 14px;\n}\nion-footer ion-toolbar {\n  padding: 10px;\n  --border-width: 0;\n}\nion-footer ion-toolbar ion-button {\n  height: 50px;\n  font-size: 18px;\n}\nion-card-title {\n  text-align: center;\n  font-size: 16px;\n}\n.efeito-vidro {\n  background: rgba(255, 255, 255, 0.35);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(13.5px);\n  -webkit-backdrop-filter: blur(13.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  width: 80%;\n  margin: auto;\n  display: block;\n}\n.img-idade {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkYWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7Q0FBQTtBQVNJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUFRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFFWjtBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFBUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRVo7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUtJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBRlI7QUFHUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBRFo7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBSUE7RUFDSSxxQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFESjtBQUlFO0VBQ0UsVUFBQTtBQURKIiwiZmlsZSI6ImlkYWRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBidW5jaGRldmVsb3BlcnMgKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWM2VGVtcGxhdGUgUGFja1xuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjEtcHJlc2VudCBidW5jaGRldmVsb3BlcnMuXG4qL1xuaW9uLWNvbnRlbnQgLmltYWdlIHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuaW9uLWNvbnRlbnQgLm5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuaW9uLWNvbnRlbnQgLm5hbWUgLmhlYWRfbGJsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAubmFtZSAuc3ViX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5lZmVpdG8tdmlkcm8ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy41cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy41cHgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW1nLWlkYWRlIHtcbiAgd2lkdGg6IDIwJTtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_idade_idade_module_ts.js.map