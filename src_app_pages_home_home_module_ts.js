"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 89639:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 88774);

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
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 35129:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 89639);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 88774);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 88774:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 99090);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 40932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
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



let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
        setTimeout(() => {
            this.createPieChart();
        }, 1000);
        setTimeout(() => {
            this.createBarChart();
        }, 1000);
        setTimeout(() => {
            this.createLineChart();
        }, 1000);
        setTimeout(() => {
            this.createWorkoutChart();
        }, 1000);
    }
    ngOnInit() {
    }
    createPieChart() {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.pieChart.nativeElement, {
            type: 'pie',
            data: {
                labels: ['Altura', 'Peso'],
                datasets: [{
                        label: 'Viewers in millions',
                        data: [5, 8],
                        backgroundColor: [
                            '#fff',
                            '#02bd99'
                        ],
                        borderColor: "#a3adb1",
                        borderWidth: 1
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    display: false
                },
            }
        });
    }
    createBarChart() {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.barChart.nativeElement, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                        label: '# of Votes',
                        data: [75, 79, 77, 71, 75, 73, 76],
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
                legend: {
                    display: false
                },
                tooltips: {
                    display: false
                },
                scales: {
                    xAxes: [{
                            display: false //this will remove all the x-axis grid lines
                        }],
                    yAxes: [{
                            display: false //this will remove all the x-axis grid lines
                        }],
                }
            }
        });
    }
    createLineChart() {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.lineChart.nativeElement, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                        label: '# of Votes',
                        data: [75, 79, 77, 71, 75, 73, 76],
                        backgroundColor: [
                            '#fff',
                            '#fff',
                            '#fff',
                            '#fff',
                            '#fff',
                            '#fff'
                        ],
                        borderColor: [
                            '#92a3fd',
                            // 'rgba(54, 162, 235, 1)',
                            // 'rgba(255, 206, 86, 1)',
                            // 'rgba(75, 192, 192, 1)',
                            // 'rgba(153, 102, 255, 1)',
                            // 'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    display: false
                },
                scales: {
                    xAxes: [{
                            display: false //this will remove all the x-axis grid lines
                        }],
                    yAxes: [{
                            display: false //this will remove all the x-axis grid lines
                        }],
                }
            }
        });
    }
    createWorkoutChart() {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.workoutChart.nativeElement, {
            type: 'line',
            data: {
                labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3, 6],
                        backgroundColor: [
                            '#02bd99',
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
    onNotification() {
        this.router.navigate(['notification']);
    }
    onFullbodyWorkout() {
        this.router.navigate(['fullbody-workout']);
    }
    onClick() {
    }
    onBack() {
        this.router.navigate(['tabs/tab1']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
HomePage.propDecorators = {
    pieChart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['pieChart',] }],
    barChart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['barChart',] }],
    lineChart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['lineChart',] }],
    workoutChart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['workoutChart',] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 99090:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/home.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n <ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onBack()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Resumo Diário</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-item lines=\"none\" class=\"account\">\n    <div class=\"name\">\n      <div class=\"lbl_div\">\n        <ion-label class=\"smpl_lbl\">Bem vindo,</ion-label>\n        <ion-label class=\"name_lbl\">João Pedro </ion-label>\n      </div>\n      <div class=\"bttn_div\">\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"onNotification()\">\n            <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </div>\n    </div>\n  </ion-item>\n\n  <div class=\"index\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <div class=\"first_side\">\n          <ion-label class=\"index_lbl\">IMC</ion-label>\n          <ion-label class=\"smpl_lbl\">índice de Massa Corporal</ion-label>\n          <ion-button (click)=\"onClick()\" shape=\"round\" color=\"primary\">\n            Ver Mais\n          </ion-button>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <canvas id=\"pieChart\" #pieChart></canvas>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"activity\">\n    <!-- <ion-label class=\"head_lbl\">Status de Atividades</ion-label> -->\n    \n\n    <!-- <div class=\"chart\">\n      <ion-label class=\"rate_lbl\">Heart Rate</ion-label>\n      <ion-label class=\"num_lbl\">78 BPM</ion-label>\n\n      <canvas id=\"barChart\" #barChart></canvas>\n    </div> -->\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <div class=\"progress\"></div>\n      </ion-col>\n      <ion-col size=\"5\">\n        <div class=\"water\">\n          <ion-label class=\"water_lbl\">Ingestão de Água</ion-label>\n          <ion-label class=\"number_lbl\">4 Litros</ion-label>\n\n          <ion-row class=\"row\">\n            <ion-col size=\"2\" class=\"lines\">\n              <ion-icon name=\"radio-button-on-outline\" color=\"tertiary\"></ion-icon>\n              <div class=\"timeliner\"></div>\n            </ion-col>\n            <ion-col size=\"10\">\n              <div class=\"right\">\n                <ion-label class=\"zone_lbl\">6:00-8:00</ion-label>\n                <ion-label class=\"cont_lbl\">600 ml</ion-label>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"row\">\n            <ion-col size=\"2\" class=\"lines\">\n              <ion-icon name=\"radio-button-on-outline\" color=\"tertiary\"></ion-icon>\n              <div class=\"timeliner\"></div>\n            </ion-col>\n            <ion-col size=\"10\">\n              <div class=\"right\">\n                <ion-label class=\"zone_lbl\">9:00-11:00</ion-label>\n                <ion-label class=\"cont_lbl\">500 ml</ion-label>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"row\">\n            <ion-col size=\"2\" class=\"lines\">\n              <ion-icon name=\"radio-button-on-outline\" color=\"tertiary\"></ion-icon>\n              <div class=\"timeliner\"></div>\n            </ion-col>\n            <ion-col size=\"10\">\n              <div class=\"right\">\n                <ion-label class=\"zone_lbl\">11:00-14:00</ion-label>\n                <ion-label class=\"cont_lbl\">1000 ml</ion-label>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"row\">\n            <ion-col size=\"2\" class=\"lines\">\n              <ion-icon name=\"radio-button-on-outline\" color=\"tertiary\"></ion-icon>\n              <div class=\"timeliner\"></div>\n            </ion-col>\n            <ion-col size=\"10\">\n              <div class=\"right\">\n                <ion-label class=\"zone_lbl\">15:00-17:00</ion-label>\n                <ion-label class=\"cont_lbl\">700 ml</ion-label>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"row\">\n            <ion-col size=\"2\" class=\"lines\">\n              <ion-icon name=\"radio-button-on-outline\" color=\"tertiary\"></ion-icon>\n              <div class=\"timeliner\"></div>\n            </ion-col>\n            <ion-col size=\"10\">\n              <div class=\"right\">\n                <ion-label class=\"zone_lbl\">18:00-Agora</ion-label>\n                <ion-label class=\"cont_lbl\">900 ml</ion-label>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n      <!-- <ion-col size=\"5\" class=\"right_colum\">\n        <div class=\"sleep\">\n          <h5></h5>\n          <h4></h4>\n          <ion-label class=\"slp_lbl\">Sleep</ion-label>\n          <ion-label class=\"slpnum_lbl\">8h 20m</ion-label>\n          <canvas id=\"lineChart\" #lineChart></canvas>\n        </div>\n        <div class=\"calories\">\n          <ion-label class=\"cal_lbl\">Calories</ion-label>\n          <ion-label class=\"calnum_lbl\">760 kcal</ion-label>\n          <div class=\"main_div\">\n            <div class=\"graph\">\n              <div class=\"circle\">\n                <ion-label>230Kcal <br> left</ion-label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-col> -->\n    </ion-row>\n\n  </div>\n\n\n\n  <div class=\"latest_workout\">\n    <ion-label class=\"head_lbl\">Cardápio Diário</ion-label>\n  </div>\n\n  <ion-item lines=\"none\">\n    <ion-thumbnail>\n      <img src=\"assets/images/cafe.png\" />\n    </ion-thumbnail>\n    <div class=\"activity\">\n      <ion-label class=\"upr_lbl\">Café da Manhã </ion-label>\n      <h6></h6>\n      <p></p>\n     \n    </div>\n    <ion-icon name=\"chevron-forward-circle-outline\" slot=\"end\" color=\"primary\"></ion-icon>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-thumbnail>\n      <img src=\"assets/images/macas.png\" />\n    </ion-thumbnail>\n    <div class=\"activity\">\n      <ion-label class=\"upr_lbl\">Lanche da Manhã</ion-label>\n     \n    </div>\n    <ion-icon name=\"chevron-forward-circle-outline\" slot=\"end\" color=\"primary\"></ion-icon>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-thumbnail>\n      <img src=\"assets/images/comida.png\" />\n    </ion-thumbnail>\n    <div class=\"activity\">\n      <ion-label class=\"upr_lbl\">Almoço</ion-label>    \n    </div>\n    <ion-icon name=\"chevron-forward-circle-outline\" slot=\"end\" color=\"primary\"></ion-icon>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-thumbnail>\n      <img src=\"assets/images/banana.png\" />\n    </ion-thumbnail>\n    <div class=\"activity\">\n      <ion-label class=\"upr_lbl\">Lanche da Tarde</ion-label>    \n    </div>\n    <ion-icon name=\"chevron-forward-circle-outline\" slot=\"end\" color=\"primary\"></ion-icon>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-thumbnail>\n      <img src=\"assets/images/jantar.png\" />\n    </ion-thumbnail>\n    <div class=\"activity\">\n      <ion-label class=\"upr_lbl\">Jantar</ion-label>    \n    </div>\n    <ion-icon name=\"chevron-forward-circle-outline\" slot=\"end\" color=\"primary\"></ion-icon>\n  </ion-item>\n\n  <div class=\"workout\">\n    <div class=\"progress\">\n      <ion-label class=\"head_lbl\">Progresso de Treino</ion-label>\n      <ion-chip>\n        <ion-label color=\"light\">Semanal</ion-label>\n        <ion-icon name=\"chevron-down-outline\" color=\"light\"></ion-icon>\n      </ion-chip>\n    </div>\n    <div class=\"barchart\">\n      <canvas id=\"workoutChart\" #workoutChart></canvas>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 40932:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .account {\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  --padding-start:0;\n  --padding-end:0;\n  width: 100%;\n}\nion-content .account .name {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\nion-content .account .name .smpl_lbl {\n  font-size: 14px;\n}\nion-content .account .name .name_lbl {\n  font-size: 20px;\n  font-family: \"semi-bold\";\n}\nion-content .account .name .bttn_div ion-buttons ion-icon {\n  font-size: 20px;\n}\nion-content .index {\n  background: #fff;\n  border-radius: 20px;\n  padding: 5px;\n}\nion-content .index ion-row ion-col .first_side {\n  display: flex;\n  flex-direction: column;\n}\nion-content .index ion-row ion-col .first_side .index_lbl {\n  font-size: 18px;\n  color: #000;\n  margin-bottom: 5px;\n}\nion-content .index ion-row ion-col .first_side .smpl_lbl {\n  font-size: 14px;\n  color: #000;\n  margin-bottom: 5px;\n}\nion-content .index ion-row ion-col .first_side ion-button {\n  width: 100%;\n  padding-left: 5px;\n  padding-right: 60px;\n  margin-top: 10px;\n  --background: #c58bf2;\n}\nion-content .index ion-row ion-col img {\n  margin-top: 10px;\n  height: 100px;\n  width: 100px;\n}\nion-content .index ion-row ion-col canvas {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  margin-top: 2rem;\n  height: 100px;\n}\nion-content .schedule {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2rem;\n  background: #92a4fd4f;\n  padding: 5px;\n  border-radius: 10px;\n}\nion-content .schedule .head_lbl {\n  margin-left: 5px;\n  font-family: \"semi-bold\";\n}\nion-content .schedule ion-button {\n  height: 35px;\n}\nion-content .activity .head_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n  margin-top: 20px;\n}\nion-content .activity .chart {\n  margin-top: 2rem;\n  background: #92a4fd4f;\n  padding: 5px;\n  border-radius: 10px;\n}\nion-content .activity .chart .rate_lbl {\n  margin-left: 10px;\n  margin-top: 10px;\n  font-family: \"medium\";\n}\nion-content .activity .chart .num_lbl {\n  margin-left: 10px;\n  color: #92a3fd;\n  margin-top: 5px;\n}\nion-content .activity ion-row {\n  margin-top: 2rem;\n}\nion-content .activity ion-row ion-col {\n  display: flex;\n  justify-content: center;\n}\nion-content .activity ion-row ion-col .progress {\n  margin-top: 5rem;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  border: 15px solid #02bd99;\n  border-radius: 20px;\n  height: 300px;\n  color: #02bd99;\n}\nion-content .activity ion-row ion-col .water .water_lbl {\n  font-size: 16px;\n  margin-bottom: 10px;\n  margin-left: -2%;\n  font-family: \"semi-bold\";\n}\nion-content .activity ion-row ion-col .water .number_lbl {\n  color: #004492;\n  font-size: 18px;\n  margin-bottom: 10px;\n}\nion-content .activity ion-row ion-col .water .update_lbl {\n  margin-bottom: 10px;\n  font-size: 14px;\n}\nion-content .activity ion-row ion-col .water .row {\n  margin: 0;\n}\nion-content .activity ion-row ion-col .water .row .lines {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n}\nion-content .activity ion-row ion-col .water .row .lines ion-icon {\n  font-size: 18px;\n}\nion-content .activity ion-row ion-col .water .row .lines .timeliner {\n  width: 2px;\n  height: 100%;\n  border: 1px dotted #c58bf23a;\n}\nion-content .activity ion-row ion-col .water .row .right .zone_lbl {\n  font-size: 14px;\n  margin-bottom: 5px;\n}\nion-content .activity ion-row ion-col .water .row .right .cont_lbl {\n  color: #004492;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\nion-content .activity ion-row .right_colum {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\nion-content .activity ion-row .right_colum .sleep {\n  box-shadow: 0px 0px 20px var(--box-color);\n  --box-color: lightgrey;\n  background: #fff;\n  border-radius: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\nion-content .activity ion-row .right_colum .sleep .slpnum_lbl {\n  margin-bottom: 5px;\n  color: #92a3fd;\n  margin-right: 5px;\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .activity ion-row .right_colum .sleep .slp_lbl {\n  margin-right: 10px;\n  font-size: 16px;\n  font-family: \"semi-bold\";\n}\nion-content .activity ion-row .right_colum .sleep canvas {\n  height: 120px;\n  width: 140px;\n}\nion-content .activity ion-row .right_colum .calories {\n  margin-top: 1rem;\n  box-shadow: 0px 0px 20px var(--box-color);\n  --box-color: lightgrey;\n  background: #fff;\n  border-radius: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  height: 250px;\n  width: 140px;\n}\nion-content .activity ion-row .right_colum .calories .calnum_lbl {\n  margin-bottom: 5px;\n  color: #92a3fd;\n  margin-right: 5px;\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .activity ion-row .right_colum .calories .cal_lbl {\n  margin-right: 10px;\n  font-size: 16px;\n  font-family: \"semi-bold\";\n}\nion-content .activity ion-row .right_colum .calories .main_div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content .activity ion-row .right_colum .calories .main_div .graph {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  padding: 5px;\n  border: 10px solid lightgray;\n  width: 120px;\n  height: 120px;\n}\nion-content .activity ion-row .right_colum .calories .main_div .graph .circle {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #92a3fd;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\nion-content .workout {\n  margin-top: 1rem;\n}\nion-content .workout .progress {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nion-content .workout .progress .head_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .workout .progress ion-chip {\n  background: #92a3fd;\n  margin-top: 10px;\n}\nion-content .workout .progress ion-chip ion-label {\n  font-size: 12px;\n}\nion-content .workout .progress ion-chip ion-icon {\n  font-size: 18px;\n}\nion-content .workout .barchart {\n  margin-top: 1rem;\n}\nion-content .latest_workout {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 24px;\n}\nion-content .latest_workout .head_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content ion-item {\n  margin-top: 10px;\n  box-shadow: 1px 3px 10px var(--box-shadow-color);\n  --box-shadow-color: lightgray;\n  border-radius: 10px;\n  padding: 10px;\n}\nion-content ion-item ion-thumbnail img {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n}\nion-content ion-item .activity {\n  margin-left: 10px;\n}\nion-content ion-item .activity .upr_lbl {\n  margin-top: 15px;\n  font-size: 16px;\n  font-family: \"medium\";\n  margin-bottom: 5px;\n}\nion-content ion-item .activity .lwr_lbl {\n  font-size: 14px;\n  margin-bottom: 10px;\n}\nion-content ion-item .activity ion-progress-bar {\n  height: 10px;\n  border-radius: 20px;\n}\nion-chip {\n  background: #02bd99 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNJLFlBQUE7RUFDQSxtQkFBQTtBQWZoQjtBQXFCQTtFQUNJLDhCQUFBO0FBbEJKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24tY29udGVudCAuYWNjb3VudCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OjA7XG4gIC0tcGFkZGluZy1lbmQ6MDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAuYWNjb3VudCAubmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAuYWNjb3VudCAubmFtZSAuc21wbF9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCAuYWNjb3VudCAubmFtZSAubmFtZV9sYmwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLmFjY291bnQgLm5hbWUgLmJ0dG5fZGl2IGlvbi1idXR0b25zIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLmluZGV4IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuaW9uLWNvbnRlbnQgLmluZGV4IGlvbi1yb3cgaW9uLWNvbCAuZmlyc3Rfc2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5pb24tY29udGVudCAuaW5kZXggaW9uLXJvdyBpb24tY29sIC5maXJzdF9zaWRlIC5pbmRleF9sYmwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5pb24tY29udGVudCAuaW5kZXggaW9uLXJvdyBpb24tY29sIC5maXJzdF9zaWRlIC5zbXBsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbmlvbi1jb250ZW50IC5pbmRleCBpb24tcm93IGlvbi1jb2wgLmZpcnN0X3NpZGUgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzU4YmYyO1xufVxuaW9uLWNvbnRlbnQgLmluZGV4IGlvbi1yb3cgaW9uLWNvbCBpbWcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5pb24tY29udGVudCAuaW5kZXggaW9uLXJvdyBpb24tY29sIGNhbnZhcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGhlaWdodDogMTAwcHg7XG59XG5pb24tY29udGVudCAuc2NoZWR1bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGJhY2tncm91bmQ6ICM5MmE0ZmQ0ZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnNjaGVkdWxlIC5oZWFkX2xibCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLnNjaGVkdWxlIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5pb24tY29udGVudCAuYWN0aXZpdHkgLmhlYWRfbGJsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJzZW1pLWJvbGRcIjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmlvbi1jb250ZW50IC5hY3Rpdml0eSAuY2hhcnQge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kOiAjOTJhNGZkNGY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1jb250ZW50IC5hY3Rpdml0eSAuY2hhcnQgLnJhdGVfbGJsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IC5jaGFydCAubnVtX2xibCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzkyYTNmZDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IGlvbi1yb3cge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IGlvbi1yb3cgaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IGlvbi1yb3cgaW9uLWNvbCAucHJvZ3Jlc3Mge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMTVweCBzb2xpZCAjMDJiZDk5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBjb2xvcjogIzAyYmQ5OTtcbn1cbmlvbi1jb250ZW50IC5hY3Rpdml0eSBpb24tcm93IGlvbi1jb2wgLndhdGVyIC53YXRlcl9sYmwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMiU7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IGlvbi1yb3cgaW9uLWNvbCAud2F0ZXIgLm51bWJlcl9sYmwge1xuICBjb2xvcjogIzAwNDQ5MjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IGlvbi1yb3cgaW9uLWNvbCAud2F0ZXIgLnVwZGF0ZV9sYmwge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCAuYWN0aXZpdHkgaW9uLXJvdyBpb24tY29sIC53YXRlciAucm93IHtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IGlvbi1yb3cgaW9uLWNvbCAud2F0ZXIgLnJvdyAubGluZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IGlvbi1yb3cgaW9uLWNvbCAud2F0ZXIgLnJvdyAubGluZXMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tY29udGVudCAuYWN0aXZpdHkgaW9uLXJvdyBpb24tY29sIC53YXRlciAucm93IC5saW5lcyAudGltZWxpbmVyIHtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBkb3R0ZWQgI2M1OGJmMjNhO1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IGlvbi1yb3cgaW9uLWNvbCAud2F0ZXIgLnJvdyAucmlnaHQgLnpvbmVfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5pb24tY29udGVudCAuYWN0aXZpdHkgaW9uLXJvdyBpb24tY29sIC53YXRlciAucm93IC5yaWdodCAuY29udF9sYmwge1xuICBjb2xvcjogIzAwNDQ5MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IGlvbi1yb3cgLnJpZ2h0X2NvbHVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmlvbi1jb250ZW50IC5hY3Rpdml0eSBpb24tcm93IC5yaWdodF9jb2x1bSAuc2xlZXAge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggdmFyKC0tYm94LWNvbG9yKTtcbiAgLS1ib3gtY29sb3I6IGxpZ2h0Z3JleTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IGlvbi1yb3cgLnJpZ2h0X2NvbHVtIC5zbGVlcCAuc2xwbnVtX2xibCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICM5MmEzZmQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IGlvbi1yb3cgLnJpZ2h0X2NvbHVtIC5zbGVlcCAuc2xwX2xibCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJzZW1pLWJvbGRcIjtcbn1cbmlvbi1jb250ZW50IC5hY3Rpdml0eSBpb24tcm93IC5yaWdodF9jb2x1bSAuc2xlZXAgY2FudmFzIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IGlvbi1yb3cgLnJpZ2h0X2NvbHVtIC5jYWxvcmllcyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCB2YXIoLS1ib3gtY29sb3IpO1xuICAtLWJveC1jb2xvcjogbGlnaHRncmV5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxNDBweDtcbn1cbmlvbi1jb250ZW50IC5hY3Rpdml0eSBpb24tcm93IC5yaWdodF9jb2x1bSAuY2Fsb3JpZXMgLmNhbG51bV9sYmwge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjOTJhM2ZkO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJzZW1pLWJvbGRcIjtcbn1cbmlvbi1jb250ZW50IC5hY3Rpdml0eSBpb24tcm93IC5yaWdodF9jb2x1bSAuY2Fsb3JpZXMgLmNhbF9sYmwge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG59XG5pb24tY29udGVudCAuYWN0aXZpdHkgaW9uLXJvdyAucmlnaHRfY29sdW0gLmNhbG9yaWVzIC5tYWluX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2aXR5IGlvbi1yb3cgLnJpZ2h0X2NvbHVtIC5jYWxvcmllcyAubWFpbl9kaXYgLmdyYXBoIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDEwcHggc29saWQgbGlnaHRncmF5O1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG5pb24tY29udGVudCAuYWN0aXZpdHkgaW9uLXJvdyAucmlnaHRfY29sdW0gLmNhbG9yaWVzIC5tYWluX2RpdiAuZ3JhcGggLmNpcmNsZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzkyYTNmZDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudCAud29ya291dCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5pb24tY29udGVudCAud29ya291dCAucHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAud29ya291dCAucHJvZ3Jlc3MgLmhlYWRfbGJsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJzZW1pLWJvbGRcIjtcbn1cbmlvbi1jb250ZW50IC53b3Jrb3V0IC5wcm9ncmVzcyBpb24tY2hpcCB7XG4gIGJhY2tncm91bmQ6ICM5MmEzZmQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCAud29ya291dCAucHJvZ3Jlc3MgaW9uLWNoaXAgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuaW9uLWNvbnRlbnQgLndvcmtvdXQgLnByb2dyZXNzIGlvbi1jaGlwIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLWNvbnRlbnQgLndvcmtvdXQgLmJhcmNoYXJ0IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbmlvbi1jb250ZW50IC5sYXRlc3Rfd29ya291dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbmlvbi1jb250ZW50IC5sYXRlc3Rfd29ya291dCAuaGVhZF9sYmwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3gtc2hhZG93OiAxcHggM3B4IDEwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XG4gIC0tYm94LXNoYWRvdy1jb2xvcjogbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCBpbWcge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24tY29udGVudCBpb24taXRlbSAuYWN0aXZpdHkge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIC5hY3Rpdml0eSAudXByX2xibCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIC5hY3Rpdml0eSAubHdyX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIC5hY3Rpdml0eSBpb24tcHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5pb24tY2hpcCB7XG4gIGJhY2tncm91bmQ6ICMwMmJkOTkgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map