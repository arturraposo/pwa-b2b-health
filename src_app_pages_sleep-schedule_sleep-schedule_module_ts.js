"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sleep-schedule_sleep-schedule_module_ts"],{

/***/ 50431:
/*!***********************************************************************!*\
  !*** ./src/app/pages/sleep-schedule/sleep-schedule-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepSchedulePageRoutingModule": () => (/* binding */ SleepSchedulePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _sleep_schedule_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleep-schedule.page */ 47188);

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
        component: _sleep_schedule_page__WEBPACK_IMPORTED_MODULE_0__.SleepSchedulePage
    }
];
let SleepSchedulePageRoutingModule = class SleepSchedulePageRoutingModule {
};
SleepSchedulePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SleepSchedulePageRoutingModule);



/***/ }),

/***/ 29414:
/*!***************************************************************!*\
  !*** ./src/app/pages/sleep-schedule/sleep-schedule.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepSchedulePageModule": () => (/* binding */ SleepSchedulePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _sleep_schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleep-schedule-routing.module */ 50431);
/* harmony import */ var _sleep_schedule_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sleep-schedule.page */ 47188);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let SleepSchedulePageModule = class SleepSchedulePageModule {
};
SleepSchedulePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sleep_schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__.SleepSchedulePageRoutingModule
        ],
        declarations: [_sleep_schedule_page__WEBPACK_IMPORTED_MODULE_1__.SleepSchedulePage]
    })
], SleepSchedulePageModule);



/***/ }),

/***/ 47188:
/*!*************************************************************!*\
  !*** ./src/app/pages/sleep-schedule/sleep-schedule.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepSchedulePage": () => (/* binding */ SleepSchedulePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sleep_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sleep-schedule.page.html */ 63476);
/* harmony import */ var _sleep_schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sleep-schedule.page.scss */ 44257);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ 36636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 77524);









let SleepSchedulePage = class SleepSchedulePage {
    constructor(navctr, authSrv, router, userSrv, loadCtrl) {
        this.navctr = navctr;
        this.authSrv = authSrv;
        this.router = router;
        this.userSrv = userSrv;
        this.loadCtrl = loadCtrl;
        this.currentWeek = 0;
        this.days = [];
        setTimeout(() => {
            this.dateConfi();
        }, 1000);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadProfile();
            yield this.loadSleepUser();
        });
    }
    loadProfile() {
        this.authSrv.profile().subscribe((data) => {
            this.nome = data.nome;
            console.log(this.nome);
        });
    }
    dateConfi() {
        setTimeout(() => {
            this.dateslide.lockSwipes(true);
        }, 150);
        this.selectedDate = moment__WEBPACK_IMPORTED_MODULE_3__().format().split("T")[0];
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_3__().format().split("T")[0];
        this.days = [];
        this.initDate = moment__WEBPACK_IMPORTED_MODULE_3__().format();
        const startOfWeek = moment__WEBPACK_IMPORTED_MODULE_3__().locale("pt-br").startOf("week");
        const endOfWeek = moment__WEBPACK_IMPORTED_MODULE_3__().endOf("week");
        let day = startOfWeek;
        while (day <= endOfWeek) {
            const data = {
                date: day.toDate().getDate(),
                day: day.format("ddd  "),
                val: day.format(),
                selectDay: day.format("dddd DD MMMM"),
            };
            this.days.push(data);
            day = day.clone().add(1, "d");
        }
    }
    previousWeek() {
        if (this.currentWeek !== 0) {
            this.dateslide.update();
            this.days = [];
            this.currentWeek = this.currentWeek - 1;
            const startOfWeek = moment__WEBPACK_IMPORTED_MODULE_3__()
                .add(this.currentWeek, "weeks")
                .startOf("week");
            const endOfWeek = moment__WEBPACK_IMPORTED_MODULE_3__().add(this.currentWeek, "weeks").endOf("week");
            let day = startOfWeek;
            while (day <= endOfWeek) {
                const data = {
                    date: day.toDate().getDate(),
                    day: day.format("ddd"),
                    val: day.format(),
                    selectDay: day.format("dddd DD MMMM"),
                };
                this.days.push(data);
                day = day.clone().add(1, "d");
            }
            console.log(this.days);
        }
    }
    selectDate(date) {
        console.log(date);
        if (this.currentDate <= date.val.split("T")[0]) {
            this.selectedDate = date.val.split("T")[0];
            console.log(this.selectedDate);
        }
    }
    nextWeek() {
        this.dateslide.update();
        this.days = [];
        this.currentWeek++;
        console.log(this.currentWeek);
        const startOfWeek = moment__WEBPACK_IMPORTED_MODULE_3__().add(this.currentWeek, "weeks").startOf("week");
        const endOfWeek = moment__WEBPACK_IMPORTED_MODULE_3__().add(this.currentWeek, "weeks").endOf("week");
        let day = startOfWeek;
        while (day <= endOfWeek) {
            const data = {
                date: day.toDate().getDate(),
                day: day.format("ddd"),
                val: day.format(),
                selectDay: day.format("dddd DD MMMM"),
            };
            this.days.push(data);
            day = day.clone().add(1, "d");
        }
        console.log(this.days);
    }
    onClick() {
        this.router.navigate(["add-alarm"]);
    }
    loadSleepUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const data = yield this.userSrv.getSleepUser().toPromise();
                this.sleepUser = data;
                this.horaIni = data.horario_dormir;
                this.difHora = this.calcularDiferencaDeTempo(this.horaIni);
                this.horaAcordar = this.somarHoras(this.horaIni, data.horas_sono);
                this.arrHorasSono = data.horas_sono.split(":");
                if (this.arrHorasSono[1] !== '00') {
                    this.horaSono = this.arrHorasSono[0] + ' horas e ' + this.arrHorasSono[1] + ' minutos';
                }
                else {
                    this.horaSono = this.arrHorasSono[0] + ' horas ';
                    if (this.horaSono[0] === '0') {
                        this.horaSono = this.horaSono[1] + ' horas';
                    }
                }
            }
            catch (error) {
                console.error("Erro ao carregar informações de sono:", error);
            }
        });
    }
    calcularDiferencaDeTempo(horaFornecida) {
        const horaAtual = new Date();
        const [hora, minuto, segundo] = horaFornecida.split(":").map(Number);
        if (isNaN(hora) || isNaN(minuto) || isNaN(segundo)) {
            return "Formato de hora fornecida inválido. Use o formato HH:MM:SS.";
        }
        const horaFornecidaData = new Date(horaAtual);
        horaFornecidaData.setHours(hora, minuto, segundo);
        if (horaFornecidaData < horaAtual) {
            return "A hora fornecida deve ser no futuro.";
        }
        const diferencaMilissegundos = horaFornecidaData.getTime() - horaAtual.getTime();
        const diferencaSegundos = Math.floor(diferencaMilissegundos / 1000);
        const diferencaHoras = Math.floor(diferencaSegundos / 3600);
        const diferencaMinutos = Math.floor((diferencaSegundos % 3600) / 60);
        if (diferencaHoras === 0 && diferencaMinutos === 0) {
            return "A hora fornecida é agora!";
        }
        let resultado = "Em ";
        if (diferencaHoras > 0) {
            resultado += `${diferencaHoras} hora${diferencaHoras > 1 ? "s" : ""}`;
            if (diferencaMinutos > 0) {
                resultado += ` e ${diferencaMinutos} minuto${diferencaMinutos > 1 ? "s" : ""}`;
            }
        }
        else {
            resultado += `${diferencaMinutos} minuto${diferencaMinutos > 1 ? "s" : ""}`;
        }
        return resultado;
    }
    somarHoras(hora1, hora2) {
        const [h1, m1, s1] = hora1.split(":").map(Number);
        const [h2, m2, s2] = hora2.split(":").map(Number);
        if (isNaN(h1) ||
            isNaN(m1) ||
            isNaN(s1) ||
            isNaN(h2) ||
            isNaN(m2) ||
            isNaN(s2)) {
            return "Formato de hora inválido. Use o formato HH:MM:SS.";
        }
        const totalSegundos = h1 * 3600 + m1 * 60 + s1 + (h2 * 3600 + m2 * 60 + s2);
        let horas = Math.floor(totalSegundos / 3600);
        const minutos = Math.floor((totalSegundos % 3600) / 60);
        if (horas === 0 && minutos === 0) {
            return "Não houve alteração no horário.";
        }
        horas = horas % 24;
        let resultado = "Você acordará às ";
        if (horas >= 12) {
            if (horas > 12) {
                horas -= 12;
            }
            resultado += `${horas} hora${horas > 1 ? "s" : ""}`;
            if (minutos > 0) {
                resultado += ` e ${minutos} minuto${minutos > 1 ? "s" : ""}`;
            }
            resultado += " da tarde";
        }
        else {
            if (horas === 0) {
                horas = 12; // Meia-noite
            }
            resultado += `${horas} hora${horas > 1 ? "s" : ""}`;
            if (minutos > 0) {
                resultado += ` e ${minutos} minuto${minutos > 1 ? "s" : ""}`;
            }
            resultado += " da manhã";
        }
        return resultado;
    }
    onBack() {
        this.navctr.back();
    }
};
SleepSchedulePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
SleepSchedulePage.propDecorators = {
    dateslide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["slideDate",] }]
};
SleepSchedulePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-sleep-schedule",
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sleep_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sleep_schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SleepSchedulePage);



/***/ }),

/***/ 63476:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/sleep-schedule/sleep-schedule.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\r\n  Authors : bunchdevelopers (Rahul Jograna)\r\n  Website : https://bunchdevelopers.com/\r\n  App Name : ionic6Template Pack\r\n  This App Template Source code is licensed as per the\r\n  terms found in the Website https://bunchdevelopers.com/license\r\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\r\n -->\r\n<ion-header mode=\"ios\" class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"onBack()\">\r\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Controle de Sono</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"upper_div\">\r\n    <ion-row>\r\n      <ion-col size=\"7\">\r\n        <div class=\"first_side\">\r\n          <ion-label class=\"sleep_lbl\">Olá {{nome}}, Você deve Dormir</ion-label>\r\n          <ion-label class=\"time_lbl\">{{horaSono}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"5\">\r\n        <img src=\"assets/images/sleep.png\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <div class=\"second_div\">\r\n    <ion-label class=\"head_lbl\">Controle Semanal</ion-label>\r\n    <div class=\"calender\">\r\n      <ion-slides #slideDate>\r\n        <ion-slide>\r\n          <ion-row class=\"row_cal\">\r\n            <ion-col size=\"0.75\" (click)=\"previousWeek()\">\r\n              <ion-icon name=\"arrow-back-outline\" mode=\"md\" class=\"icon_change center_item\" *ngIf=\"currentWeek != 0\">\r\n              </ion-icon>\r\n            </ion-col>\r\n            <ion-col *ngFor=\"let day of days\" [class.disabled]=\"initDate.split('T')[0] > day.val.split('T')\" size=\"1.5\"\r\n              (click)=\"selectDate(day)\">\r\n              <ion-label class=\"lbl_day\" [class.selectedDay]=\"day.val.split('T')[0] == selectedDate\">{{ day.day }}\r\n              </ion-label>\r\n              <ion-label class=\"lbl_date\" [class.selectedDate]=\"day.val.split('T')[0] == selectedDate\">{{ day.date }}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"0.75\" (click)=\"nextWeek()\">\r\n              <ion-icon name=\"arrow-forward-outline\" mode=\"md\" class=\"icon_change center_item\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"lower_div\">\r\n    <ion-row>\r\n      <ion-col size=\"2\">\r\n        <img src=\"assets/images/bed.png\" alt=\"\">\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"btn\">\r\n          <ion-label>\r\n            <strong>Hora de Dormir</strong>:\r\n            <ion-label *ngIf=\"horaIni; else skeletonText\">{{horaIni}}</ion-label>\r\n            <ng-template #skeletonText>\r\n              <ion-skeleton-text animated=\"true\"></ion-skeleton-text>\r\n            </ng-template>\r\n          </ion-label>\r\n          <ion-label *ngIf=\"difHora; else skeletonText\">{{difHora}}</ion-label>\r\n          <ng-template #skeletonText>\r\n            <ion-skeleton-text animated=\"true\"></ion-skeleton-text>\r\n          </ng-template>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n    <ion-row>\r\n      <ion-col size=\"2\">\r\n        <img src=\"assets/images/clock.png\" alt=\"\">\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"btn\">\r\n          <ion-label *ngIf=\"horaAcordar; else skeletonText\">{{horaAcordar}}</ion-label>\r\n          <ng-template #skeletonText>\r\n            <ion-skeleton-text animated=\"true\"></ion-skeleton-text>\r\n          </ng-template>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  \r\n\r\n  \r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" >\r\n    <ion-fab-button color=\"primary\" (click)=\"onClick()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ 44257:
/*!***************************************************************!*\
  !*** ./src/app/pages/sleep-schedule/sleep-schedule.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-header ion-toolbar {\n  --border-width: 0;\n}\nion-content .upper_div {\n  margin-top: 1rem;\n  background: #02bd99;\n  color: #fff;\n  border-radius: 10px;\n  padding: 10px;\n}\nion-content .upper_div ion-row ion-col .first_side {\n  display: flex;\n  flex-direction: column;\n}\nion-content .upper_div ion-row ion-col .first_side .time_lbl {\n  margin-top: 5px;\n  color: #fff;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\nion-content .upper_div ion-row ion-col .first_side ion-button {\n  width: 100%;\n  padding-left: 35px;\n  padding-right: 35px;\n}\nion-content .upper_div ion-row ion-col img {\n  height: 100px;\n  width: 100px;\n  margin-top: 20px;\n  margin-left: 20px;\n}\nion-content .second_div {\n  margin-top: 2rem;\n}\nion-content .second_div .head_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .second_div .calender {\n  box-shadow: 0px 0px 20px var(--box-color);\n  --box-color: #e9e9e9;\n  text-align: center;\n  border-radius: 10px;\n}\nion-content .second_div .calender .lbl_calender_title {\n  font-size: 15px;\n  text-transform: uppercase;\n}\nion-content .second_div .calender .row_cal {\n  margin-top: 15px;\n  width: 100%;\n  padding-bottom: 10px;\n}\nion-content .second_div .calender .icon_change {\n  font-size: 1em;\n  color: var(--ion-color-primary);\n}\nion-content .second_div .calender .disabled {\n  color: #ababab !important;\n}\nion-content .second_div .calender .lbl_day {\n  display: block;\n  margin-bottom: 20px;\n  font-size: 13px;\n}\nion-content .second_div .calender .lbl_date {\n  display: block;\n  position: relative;\n  z-index: 1;\n  font-size: 14px;\n}\nion-content .second_div .calender .img_select_date {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: -6px;\n  height: 35px;\n  z-index: 0;\n}\nion-content .second_div .calender .selectedDate {\n  background: var(--ion-color-primary);\n  color: white;\n  border-radius: 5px;\n  font-family: \"bold\";\n}\nion-content .second_div .calender .selectedDay {\n  color: var(--primary-text);\n}\nion-content .second_div .calender .time_slot {\n  margin-top: 30px;\n}\nion-content .second_div .calender .time_slot ion-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\nion-content .second_div .calender .time_slot ion-col {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);\n  margin-bottom: 20px;\n  border-radius: 5px;\n  padding: 10px 10px;\n}\nion-content .second_div .calender .time_slot .booked {\n  background: lightgray;\n}\nion-content .second_div .calender .time_slot .new_booked {\n  background: var(--ion-color-primary);\n  color: white;\n}\nion-content .lower_div {\n  margin-top: 2rem;\n}\nion-content .lower_div ion-row {\n  background: #ffff;\n  padding: 16px;\n  margin-top: 1rem;\n}\nion-content .lower_div ion-row ion-col img {\n  height: 50px;\n  width: 50px;\n}\nion-content .lower_div ion-row ion-col ion-icon {\n  margin-left: 20px;\n}\nion-content .lower_div ion-row ion-col .btn {\n  display: flex;\n  flex-direction: column;\n}\nion-content .last {\n  margin-top: 2rem;\n  background: #c58bf23f;\n  padding: 10px 10px 20px 10px;\n  border-radius: 10px;\n}\nion-content .last ion-progress-bar {\n  height: 14px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsZWVwLXNjaGVkdWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7Q0FBQTtBQVNFO0VBQ0UsaUJBQUE7QUFDSjtBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFESjtBQUlRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBRlY7QUFJVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZaO0FBSVU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZaO0FBS1E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFIVjtBQVFFO0VBQ0UsZ0JBQUE7QUFOSjtBQU9JO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBTE47QUFPSTtFQUNFLHlDQUFBO0VBQ0Esb0JBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0FBTk47QUFPTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUxSO0FBT007RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUxSO0FBT007RUFDRSxjQUFBO0VBQ0EsK0JBQUE7QUFMUjtBQU9NO0VBQ0UseUJBQUE7QUFMUjtBQU9NO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUxSO0FBT007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUxSO0FBT007RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUxSO0FBT007RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFPTTtFQUNFLDBCQUFBO0FBTFI7QUFPTTtFQUNFLGdCQUFBO0FBTFI7QUFNUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSlY7QUFNUTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSlY7QUFNUTtFQUNFLHFCQUFBO0FBSlY7QUFNUTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQUpWO0FBU0U7RUFDRSxnQkFBQTtBQVBKO0FBUUk7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQU5OO0FBUVE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQU5WO0FBUVE7RUFDRSxpQkFBQTtBQU5WO0FBUVE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFOVjtBQVdFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQVVJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBUk4iLCJmaWxlIjoic2xlZXAtc2NoZWR1bGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cbmlvbi1jb250ZW50IC51cHBlcl9kaXYge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjMDJiZDk5O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jb250ZW50IC51cHBlcl9kaXYgaW9uLXJvdyBpb24tY29sIC5maXJzdF9zaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmlvbi1jb250ZW50IC51cHBlcl9kaXYgaW9uLXJvdyBpb24tY29sIC5maXJzdF9zaWRlIC50aW1lX2xibCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCAudXBwZXJfZGl2IGlvbi1yb3cgaW9uLWNvbCAuZmlyc3Rfc2lkZSBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbn1cbmlvbi1jb250ZW50IC51cHBlcl9kaXYgaW9uLXJvdyBpb24tY29sIGltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5pb24tY29udGVudCAuc2Vjb25kX2RpdiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5pb24tY29udGVudCAuc2Vjb25kX2RpdiAuaGVhZF9sYmwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLnNlY29uZF9kaXYgLmNhbGVuZGVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHZhcigtLWJveC1jb2xvcik7XG4gIC0tYm94LWNvbG9yOiAjZTllOWU5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tY29udGVudCAuc2Vjb25kX2RpdiAuY2FsZW5kZXIgLmxibF9jYWxlbmRlcl90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmlvbi1jb250ZW50IC5zZWNvbmRfZGl2IC5jYWxlbmRlciAucm93X2NhbCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IC5zZWNvbmRfZGl2IC5jYWxlbmRlciAuaWNvbl9jaGFuZ2Uge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jb250ZW50IC5zZWNvbmRfZGl2IC5jYWxlbmRlciAuZGlzYWJsZWQge1xuICBjb2xvcjogI2FiYWJhYiAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLnNlY29uZF9kaXYgLmNhbGVuZGVyIC5sYmxfZGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbmlvbi1jb250ZW50IC5zZWNvbmRfZGl2IC5jYWxlbmRlciAubGJsX2RhdGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCAuc2Vjb25kX2RpdiAuY2FsZW5kZXIgLmltZ19zZWxlY3RfZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvdHRvbTogLTZweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB6LWluZGV4OiAwO1xufVxuaW9uLWNvbnRlbnQgLnNlY29uZF9kaXYgLmNhbGVuZGVyIC5zZWxlY3RlZERhdGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG59XG5pb24tY29udGVudCAuc2Vjb25kX2RpdiAuY2FsZW5kZXIgLnNlbGVjdGVkRGF5IHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XG59XG5pb24tY29udGVudCAuc2Vjb25kX2RpdiAuY2FsZW5kZXIgLnRpbWVfc2xvdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5pb24tY29udGVudCAuc2Vjb25kX2RpdiAuY2FsZW5kZXIgLnRpbWVfc2xvdCBpb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaW9uLWNvbnRlbnQgLnNlY29uZF9kaXYgLmNhbGVuZGVyIC50aW1lX3Nsb3QgaW9uLWNvbCB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG5pb24tY29udGVudCAuc2Vjb25kX2RpdiAuY2FsZW5kZXIgLnRpbWVfc2xvdCAuYm9va2VkIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuaW9uLWNvbnRlbnQgLnNlY29uZF9kaXYgLmNhbGVuZGVyIC50aW1lX3Nsb3QgLm5ld19ib29rZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IC5sb3dlcl9kaXYge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuaW9uLWNvbnRlbnQgLmxvd2VyX2RpdiBpb24tcm93IHtcbiAgYmFja2dyb3VuZDogI2ZmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5pb24tY29udGVudCAubG93ZXJfZGl2IGlvbi1yb3cgaW9uLWNvbCBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuaW9uLWNvbnRlbnQgLmxvd2VyX2RpdiBpb24tcm93IGlvbi1jb2wgaW9uLWljb24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbmlvbi1jb250ZW50IC5sb3dlcl9kaXYgaW9uLXJvdyBpb24tY29sIC5idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW9uLWNvbnRlbnQgLmxhc3Qge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kOiAjYzU4YmYyM2Y7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAyMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tY29udGVudCAubGFzdCBpb24tcHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sleep-schedule_sleep-schedule_module_ts.js.map