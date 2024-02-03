"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_result_result_module_ts"],{

/***/ 45185:
/*!*******************************************************!*\
  !*** ./src/app/pages/result/result-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultPageRoutingModule": () => (/* binding */ ResultPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _result_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.page */ 75356);

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
        component: _result_page__WEBPACK_IMPORTED_MODULE_0__.ResultPage
    }
];
let ResultPageRoutingModule = class ResultPageRoutingModule {
};
ResultPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResultPageRoutingModule);



/***/ }),

/***/ 9937:
/*!***********************************************!*\
  !*** ./src/app/pages/result/result.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultPageModule": () => (/* binding */ ResultPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _result_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-routing.module */ 45185);
/* harmony import */ var _result_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.page */ 75356);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let ResultPageModule = class ResultPageModule {
};
ResultPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _result_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResultPageRoutingModule
        ],
        declarations: [_result_page__WEBPACK_IMPORTED_MODULE_1__.ResultPage]
    })
], ResultPageModule);



/***/ }),

/***/ 75356:
/*!*********************************************!*\
  !*** ./src/app/pages/result/result.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultPage": () => (/* binding */ ResultPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_result_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./result.page.html */ 286);
/* harmony import */ var _result_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.page.scss */ 6780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 85757);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/


let ResultPage = class ResultPage {
    constructor() {
        this.current = '1';
        setTimeout(() => {
            this.createBarChart();
        }, 1000);
    }
    ngOnInit() {
    }
    createBarChart() {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.barChart.nativeElement, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3, 6],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                cornerRadius: 20,
                fullCornerRadius: false,
                stackedRounded: false,
                legend: {
                    display: false
                },
                elements: {},
                scales: {
                    yAxes: [{
                            gridLines: {
                            // display: false
                            },
                            ticks: {
                                beginAtZero: true,
                            },
                            stacked: true,
                            radius: 25
                        }],
                    xAxes: [{
                            gridLines: {
                                display: false
                            },
                            ticks: {
                                beginAtZero: true,
                            },
                            stacked: true,
                        }]
                }
            }
        });
    }
    onClick() {
    }
};
ResultPage.ctorParameters = () => [];
ResultPage.propDecorators = {
    barChart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['barChart',] }]
};
ResultPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-result',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_result_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_result_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResultPage);



/***/ }),

/***/ 286:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/result/result.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Result</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"share-social\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-segment value=\"photo\" mode=\"ios\" color=\"primary\"  [(ngModel)]=\"current\">\n    <ion-segment-button value=\"1\">\n      <ion-label>Photo</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\">\n      <ion-label>Statistic</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div *ngIf=\"current ==='1'\">\n    <div class=\"upper_div\">\n      <div class=\"progress\">\n        <ion-label class=\"head_lbl\">Average Progress</ion-label>\n        <ion-label class=\"green_lbl\">Good</ion-label>\n      </div>\n      <ion-progress-bar color=\"primary\" value=\"0.62\"></ion-progress-bar>\n    </div>\n    <div class=\"content\">\n      <div class=\"month\">\n        <ion-label class=\"left_lbl\">May</ion-label>\n        <ion-label class=\"right_lbl\">June</ion-label>\n      </div>\n      <div class=\"facing\" *ngFor=\"let item of [1,2,3,4]\">\n        <ion-label class=\"exerc_lbl\">Front Facing</ion-label>\n        <ion-row>\n          <ion-col size=\"6\">\n            <img src=\"assets/images/woman.jpg\" alt=\"\">\n          </ion-col>\n          <ion-col size=\"6\">\n            <img src=\"assets/images/woman.jpg\" alt=\"\">\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div class=\"button\">\n      <ion-button (click)=\"onClick()\" expand=\"block\"  shape=\"round\">\n        Back To Home\n      </ion-button>\n    </div>\n  </div>\n  <div *ngIf=\"current ==='2'\">\n    <div class=\"state\">\n      <div class=\"barchart\">\n        <canvas id=\"barChart\" #barChart></canvas>\n      </div>\n      <div class=\"month\">\n        <ion-label class=\"left_lbl\">May</ion-label>\n        <ion-label class=\"right_lbl\">June</ion-label>\n      </div>\n\n      <div class=\"change\">\n        <ion-label class=\"program_lbl\">Lose Weight</ion-label>\n\n        <div class=\"progress_content\">\n          <div class=\"lbl\">\n            <ion-label>33%</ion-label>\n          </div>\n          <div class=\"progress\">\n            <ion-progress-bar color=\"primary\" value=\"0.33\"></ion-progress-bar>\n          </div>\n          <div class=\"lbl\">\n            <ion-label>67%</ion-label>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"change\">\n        <ion-label class=\"program_lbl\">Height Increase</ion-label>\n\n        <div class=\"progress_content\">\n          <div class=\"lbl\">\n            <ion-label>88%</ion-label>\n          </div>\n          <div class=\"progress\">\n            <ion-progress-bar color=\"primary\" value=\"0.33\"></ion-progress-bar>\n          </div>\n          <div class=\"lbl\">\n            <ion-label>12%</ion-label>\n          </div>\n        </div>\n      </div>\n      <div class=\"change\">\n        <ion-label class=\"program_lbl\">Muscle Mass Increase</ion-label>\n\n        <div class=\"progress_content\">\n          <div class=\"lbl\">\n            <ion-label>57%</ion-label>\n          </div>\n          <div class=\"progress\">\n            <ion-progress-bar color=\"primary\" value=\"0.33\"></ion-progress-bar>\n          </div>\n          <div class=\"lbl\">\n            <ion-label>43%</ion-label>\n          </div>\n        </div>\n      </div>\n      <div class=\"change\">\n        <ion-label class=\"program_lbl\">Abs</ion-label>\n\n        <div class=\"progress_content\">\n          <div class=\"lbl\">\n            <ion-label>89%</ion-label>\n          </div>\n          <div class=\"progress\">\n            <ion-progress-bar color=\"primary\" value=\"0.33\"></ion-progress-bar>\n          </div>\n          <div class=\"lbl\">\n            <ion-label>11%</ion-label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btn\">\n        <ion-button (click)=\"onClick()\" expand=\"block\"  shape=\"round\">\n         Back To Home\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 6780:
/*!***********************************************!*\
  !*** ./src/app/pages/result/result.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-header ion-toolbar {\n  --border-width: 0;\n}\nion-content ion-segment {\n  --background: #92a3fd;\n}\nion-content .upper_div .progress {\n  margin-top: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\nion-content .upper_div .progress .head_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .upper_div .progress .green_lbl {\n  color: #2dd36f;\n  font-size: 14px;\n}\nion-content .upper_div ion-progress-bar {\n  height: 20px;\n  border-radius: 20px;\n}\nion-content .content .month {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 24px;\n}\nion-content .content .month .left_lbl {\n  font-size: 16px;\n}\nion-content .content .month .right_lbl {\n  font-size: 16px;\n}\nion-content .content .facing .exerc_lbl {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  margin: 16px 0;\n}\nion-content .content .facing ion-row ion-col {\n  display: flex;\n  justify-content: center;\n}\nion-content .content .facing ion-row ion-col img {\n  height: 140px;\n  width: 140px;\n  border-radius: 20px;\n}\nion-content .button {\n  margin-top: 1.5rem;\n}\nion-content .button ion-button {\n  height: 50px;\n}\nion-content .state .barchart {\n  margin-top: 1.5rem;\n}\nion-content .state .month {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n}\nion-content .state .month .left_lbl {\n  font-size: 18px;\n}\nion-content .state .month .right_lbl {\n  font-size: 18px;\n}\nion-content .state .change .program_lbl {\n  font-size: 16px;\n  text-align: center;\n  margin-top: 22px;\n}\nion-content .state .change .progress_content {\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\nion-content .state .change .progress_content .lbl {\n  margin: 0px 10px;\n}\nion-content .state .change .progress_content .progress {\n  width: 80%;\n}\nion-content .state .change .progress_content .progress ion-progress-bar {\n  height: 15px;\n  border-radius: 20px;\n  --buffer-background: #c58bf2;\n}\nion-content .state .change ion-item {\n  --padding-start: 10px;\n  display: flex;\n  justify-content: space-between;\n}\nion-content .state .change ion-item ion-progress-bar {\n  height: 15px;\n  border-radius: 20px;\n  --buffer-background: #c58bf2;\n  width: 72%;\n}\nion-content .state .change ion-item ion-label {\n  font-size: 16px;\n  margin: 5px;\n}\nion-content .btn {\n  margin-top: 3rem;\n}\nion-content .btn ion-button {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFTRTtFQUNFLGlCQUFBO0FBQ0o7QUFHRTtFQUNFLHFCQUFBO0FBQUo7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUROO0FBRU07RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUFBUjtBQUVNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFBUjtBQUdJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBRE47QUFLSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFITjtBQUlNO0VBQ0UsZUFBQTtBQUZSO0FBSU07RUFDRSxlQUFBO0FBRlI7QUFNTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSlI7QUFPUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUxWO0FBTVU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSlo7QUFVRTtFQUNFLGtCQUFBO0FBUko7QUFTSTtFQUNFLFlBQUE7QUFQTjtBQVdJO0VBQ0Usa0JBQUE7QUFUTjtBQVdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQVROO0FBVU07RUFDRSxlQUFBO0FBUlI7QUFVTTtFQUNFLGVBQUE7QUFSUjtBQVlNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFWUjtBQVlNO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFWUjtBQVdRO0VBQ0UsZ0JBQUE7QUFUVjtBQVdRO0VBQ0UsVUFBQTtBQVRWO0FBVVU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQVJaO0FBWU07RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVZSO0FBV1E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUFUVjtBQVdRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFUVjtBQWNFO0VBQ0UsZ0JBQUE7QUFaSjtBQWFJO0VBQ0UsWUFBQTtBQVhOIiwiZmlsZSI6InJlc3VsdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6ICM5MmEzZmQ7XG59XG5pb24tY29udGVudCAudXBwZXJfZGl2IC5wcm9ncmVzcyB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbmlvbi1jb250ZW50IC51cHBlcl9kaXYgLnByb2dyZXNzIC5oZWFkX2xibCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG59XG5pb24tY29udGVudCAudXBwZXJfZGl2IC5wcm9ncmVzcyAuZ3JlZW5fbGJsIHtcbiAgY29sb3I6ICMyZGQzNmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb250ZW50IC51cHBlcl9kaXYgaW9uLXByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5tb250aCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5tb250aCAubGVmdF9sYmwge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY29udGVudCAuY29udGVudCAubW9udGggLnJpZ2h0X2xibCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5mYWNpbmcgLmV4ZXJjX2xibCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLmZhY2luZyBpb24tcm93IGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5mYWNpbmcgaW9uLXJvdyBpb24tY29sIGltZyB7XG4gIGhlaWdodDogMTQwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbmlvbi1jb250ZW50IC5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5pb24tY29udGVudCAuYnV0dG9uIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5pb24tY29udGVudCAuc3RhdGUgLmJhcmNoYXJ0IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuaW9uLWNvbnRlbnQgLnN0YXRlIC5tb250aCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmlvbi1jb250ZW50IC5zdGF0ZSAubW9udGggLmxlZnRfbGJsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLWNvbnRlbnQgLnN0YXRlIC5tb250aCAucmlnaHRfbGJsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLWNvbnRlbnQgLnN0YXRlIC5jaGFuZ2UgLnByb2dyYW1fbGJsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIycHg7XG59XG5pb24tY29udGVudCAuc3RhdGUgLmNoYW5nZSAucHJvZ3Jlc3NfY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlvbi1jb250ZW50IC5zdGF0ZSAuY2hhbmdlIC5wcm9ncmVzc19jb250ZW50IC5sYmwge1xuICBtYXJnaW46IDBweCAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnN0YXRlIC5jaGFuZ2UgLnByb2dyZXNzX2NvbnRlbnQgLnByb2dyZXNzIHtcbiAgd2lkdGg6IDgwJTtcbn1cbmlvbi1jb250ZW50IC5zdGF0ZSAuY2hhbmdlIC5wcm9ncmVzc19jb250ZW50IC5wcm9ncmVzcyBpb24tcHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiAjYzU4YmYyO1xufVxuaW9uLWNvbnRlbnQgLnN0YXRlIC5jaGFuZ2UgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlvbi1jb250ZW50IC5zdGF0ZSAuY2hhbmdlIGlvbi1pdGVtIGlvbi1wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC0tYnVmZmVyLWJhY2tncm91bmQ6ICNjNThiZjI7XG4gIHdpZHRoOiA3MiU7XG59XG5pb24tY29udGVudCAuc3RhdGUgLmNoYW5nZSBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0biB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG5pb24tY29udGVudCAuYnRuIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_result_result_module_ts.js.map