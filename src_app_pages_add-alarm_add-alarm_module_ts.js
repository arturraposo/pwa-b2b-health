"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_add-alarm_add-alarm_module_ts"],{

/***/ 4393:
/*!*************************************************************!*\
  !*** ./src/app/pages/add-alarm/add-alarm-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAlarmPageRoutingModule": () => (/* binding */ AddAlarmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _add_alarm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-alarm.page */ 52210);

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
        component: _add_alarm_page__WEBPACK_IMPORTED_MODULE_0__.AddAlarmPage
    }
];
let AddAlarmPageRoutingModule = class AddAlarmPageRoutingModule {
};
AddAlarmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddAlarmPageRoutingModule);



/***/ }),

/***/ 94256:
/*!*****************************************************!*\
  !*** ./src/app/pages/add-alarm/add-alarm.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAlarmPageModule": () => (/* binding */ AddAlarmPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _add_alarm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-alarm-routing.module */ 4393);
/* harmony import */ var _add_alarm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-alarm.page */ 52210);


/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let AddAlarmPageModule = class AddAlarmPageModule {
};
AddAlarmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_alarm_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddAlarmPageRoutingModule
        ],
        declarations: [_add_alarm_page__WEBPACK_IMPORTED_MODULE_1__.AddAlarmPage]
    })
], AddAlarmPageModule);



/***/ }),

/***/ 52210:
/*!***************************************************!*\
  !*** ./src/app/pages/add-alarm/add-alarm.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAlarmPage": () => (/* binding */ AddAlarmPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_alarm_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-alarm.page.html */ 16442);
/* harmony import */ var _add_alarm_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-alarm.page.scss */ 75082);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ 77524);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);








let AddAlarmPage = class AddAlarmPage {
    constructor(navctr, router, userSrv, toastCtrl) {
        this.navctr = navctr;
        this.router = router;
        this.userSrv = userSrv;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        this.initialForm();
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const sleep = this.form.value;
            if (!sleep.horario_dormir) {
                yield this.showToast("Informe a hora de dormir");
                return false;
            }
            if (!sleep.horas_sono) {
                yield this.showToast("Informe quantas horas de sono");
                return false;
            }
            console.log(sleep);
            this.userSrv.insertUserSleep(sleep).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield this.showToast("Tempo de Sono inserido com sucesso");
                this.router.navigate(["sleep-schedule"]);
            }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield this.showToast(error);
            }));
        });
    }
    initialForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            horario_dormir: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            horas_sono: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            vibrar: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0),
        });
    }
    onBack() {
        this.navctr.back();
    }
    toogle(event) {
        if (event.detail.checked === true) {
            this.form.value.vibrar = 1;
            console.log(this.form.value.vibrar);
        }
        else {
            this.form.value.vibrar = 0;
            console.log(this.form.value.vibrar);
        }
    }
    showToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 500,
            });
            yield toast.present();
        });
    }
};
AddAlarmPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
AddAlarmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-add-alarm",
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_alarm_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_alarm_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddAlarmPage);



/***/ }),

/***/ 16442:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/add-alarm/add-alarm.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"onBack()\">\r\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Adicionar Alarme</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n <form [formGroup]=\"form\">\r\n  <div class=\"alarm\">\r\n      <div class=\"bed\">\r\n        <ion-icon slot=\"start\" name=\"bed-outline\" style=\"margin-right: 10px;\"></ion-icon>\r\n        <ion-label>Hora de Dormir</ion-label>\r\n      </div>\r\n      <div class=\"bed\">\r\n        <ion-input type=\"time\" formControlName=\"horario_dormir\"></ion-input>\r\n        <ion-icon slot=\"start\" name=\"chevron-forward\" style=\"margin-left: 10px;\"></ion-icon>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"alarm\">\r\n    <div class=\"bed\">\r\n      <ion-icon slot=\"start\" name=\"time-outline\" style=\"margin-right: 10px;\"></ion-icon>\r\n      <ion-label>Horas de Sono</ion-label>\r\n    </div>\r\n\r\n    <div class=\"bed\">\r\n      <ion-input type=\"time\" formControlName=\"horas_sono\"></ion-input>\r\n      <ion-icon slot=\"start\" name=\"chevron-forward\" style=\"margin-left: 10px;\"></ion-icon>\r\n    </div>\r\n  </div>\r\n<!-- \r\n  <div class=\"alarm\">\r\n    <div class=\"bed\">\r\n      <ion-icon slot=\"start\" name=\"repeat-outline\" style=\"margin-right: 10px;\"></ion-icon>\r\n      <h6></h6>\r\n      <ion-label>Repetir</ion-label>\r\n\r\n    </div>\r\n\r\n    <div class=\"bed\">\r\n      <p></p>\r\n      <ion-label>Seg a Sex</ion-label>\r\n\r\n      <ion-icon slot=\"start\" name=\"chevron-forward\" style=\"margin-left: 10px;\"></ion-icon>\r\n    </div>\r\n  </div> -->\r\n\r\n  <div class=\"alarm\">\r\n    <div class=\"bed\">\r\n      <ion-icon slot=\"start\" name=\"notifications-outline\" style=\"margin-right: 10px;\"></ion-icon>\r\n      <h6></h6>\r\n      <ion-label>Vibrar quando tocar alarme</ion-label>\r\n    </div>\r\n\r\n    <div class=\"bed\">\r\n      <ion-toggle mode=\"md\" (ionChange)=\"toogle($event)\" color=\"primary\" formControlName=\"vibrar\"></ion-toggle>\r\n    </div>\r\n  </div>\r\n</form>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n      <ion-button (click)=\"submit()\" expand=\"block\" shape=\"round\">\r\n        Adicionar\r\n      </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 75082:
/*!*****************************************************!*\
  !*** ./src/app/pages/add-alarm/add-alarm.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-header ion-toolbar {\n  --border-width: 0;\n}\nion-content .alarm {\n  margin-top: 3rem;\n  display: flex;\n  justify-content: space-between;\n}\nion-content .alarm .bed {\n  display: flex;\n  align-items: center;\n}\nion-content .alarm .bed ion-icon {\n  font-size: 24px;\n}\nion-footer ion-toolbar {\n  padding: 10px;\n  --border-width: 0;\n}\nion-footer ion-toolbar ion-button {\n  height: 50px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hbGFybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFTRTtFQUNFLGlCQUFBO0FBQ0o7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBREo7QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFOO0FBQ007RUFDRSxlQUFBO0FBQ1I7QUFNRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUhKO0FBSUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUZOIiwiZmlsZSI6ImFkZC1hbGFybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cblxuaW9uLWNvbnRlbnQgLmFsYXJtIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaW9uLWNvbnRlbnQgLmFsYXJtIC5iZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmFsYXJtIC5iZWQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-alarm_add-alarm_module_ts.js.map