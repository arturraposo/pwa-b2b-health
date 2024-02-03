"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_activity-tracker_activity-tracker_module_ts"],{

/***/ 35791:
/*!***************************************************************************!*\
  !*** ./src/app/pages/activity-tracker/activity-tracker-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityTrackerPageRoutingModule": () => (/* binding */ ActivityTrackerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _activity_tracker_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-tracker.page */ 91554);

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
        component: _activity_tracker_page__WEBPACK_IMPORTED_MODULE_0__.ActivityTrackerPage
    }
];
let ActivityTrackerPageRoutingModule = class ActivityTrackerPageRoutingModule {
};
ActivityTrackerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActivityTrackerPageRoutingModule);



/***/ }),

/***/ 59037:
/*!*******************************************************************!*\
  !*** ./src/app/pages/activity-tracker/activity-tracker.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityTrackerPageModule": () => (/* binding */ ActivityTrackerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _activity_tracker_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-tracker-routing.module */ 35791);
/* harmony import */ var _activity_tracker_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity-tracker.page */ 91554);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let ActivityTrackerPageModule = class ActivityTrackerPageModule {
};
ActivityTrackerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _activity_tracker_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActivityTrackerPageRoutingModule
        ],
        declarations: [_activity_tracker_page__WEBPACK_IMPORTED_MODULE_1__.ActivityTrackerPage]
    })
], ActivityTrackerPageModule);



/***/ }),

/***/ 91554:
/*!*****************************************************************!*\
  !*** ./src/app/pages/activity-tracker/activity-tracker.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityTrackerPage": () => (/* binding */ ActivityTrackerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_activity_tracker_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./activity-tracker.page.html */ 24608);
/* harmony import */ var _activity_tracker_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity-tracker.page.scss */ 37123);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 77524);




/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/



let ActivityTrackerPage = class ActivityTrackerPage {
    constructor(navctr, route, userSrv) {
        this.navctr = navctr;
        this.route = route;
        this.userSrv = userSrv;
    }
    // ngAfterViewInit() {
    //   this.canvas = document.getElementById('barChart');
    //   this.ctx = this.canvas.getContext('2d');
    //   Chart.elements.Rectangle.prototype.draw = function () {
    //     var ctx = this._chart.ctx;
    //     var vm = this._view;
    //     var left, right, top, bottom, signX, signY, borderSkipped, radius;
    //     var borderWidth = vm.borderWidth;
    //     var cornerRadius = this._chart.config.options.cornerRadius;
    //     var fullCornerRadius = this._chart.config.options.fullCornerRadius;
    //     var stackedRounded = this._chart.config.options.stackedRounded;
    //     var typeOfChart = this._chart.config.type;
    //     if (cornerRadius < 0) {
    //       cornerRadius = 0;
    //     }
    //     if (typeof cornerRadius == 'undefined') {
    //       cornerRadius = 0;
    //     }
    //     if (typeof fullCornerRadius == 'undefined') {
    //       fullCornerRadius = false;
    //     }
    //     if (typeof stackedRounded == 'undefined') {
    //       stackedRounded = false;
    //     }
    //     if (!vm.horizontal) {
    //       left = vm.x - vm.width / 2;
    //       right = vm.x + vm.width / 2;
    //       top = vm.y;
    //       bottom = vm.base;
    //       signX = 1;
    //       signY = bottom > top ? 1 : -1;
    //       borderSkipped = vm.borderSkipped || 'bottom';
    //     } else {
    //       left = vm.base;
    //       right = vm.x;
    //       top = vm.y - vm.height / 2;
    //       bottom = vm.y + vm.height / 2;
    //       signX = right > left ? 1 : -1;
    //       signY = 1;
    //       borderSkipped = vm.borderSkipped || 'left';
    //     }
    //     if (borderWidth) {
    //       var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    //       borderWidth = borderWidth > barSize ? barSize : borderWidth;
    //       var halfStroke = borderWidth / 2;
    //       var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
    //       var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
    //       var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
    //       var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
    //       if (borderLeft !== borderRight) {
    //         top = borderTop;
    //         bottom = borderBottom;
    //       }
    //       if (borderTop !== borderBottom) {
    //         left = borderLeft;
    //         right = borderRight;
    //       }
    //     }
    //     ctx.beginPath();
    //     ctx.fillStyle = vm.backgroundColor;
    //     ctx.strokeStyle = vm.borderColor;
    //     ctx.lineWidth = borderWidth;
    //     var corners = [
    //       [left, bottom],
    //       [left, top],
    //       [right, top],
    //       [right, bottom]
    //     ];
    //     var borders = ['bottom', 'left', 'top', 'right'];
    //     var startCorner = borders.indexOf(borderSkipped, 0);
    //     if (startCorner === -1) {
    //       startCorner = 0;
    //     }
    //     function cornerAt(index) {
    //       return corners[(startCorner + index) % 4];
    //     }
    //     var corner = cornerAt(0);
    //     ctx.moveTo(corner[0], corner[1]);
    //     var nextCornerId, nextCorner, width, height, x, y;
    //     for (var i = 1; i < 4; i++) {
    //       corner = cornerAt(i);
    //       nextCornerId = i + 1;
    //       if (nextCornerId == 4) {
    //         nextCornerId = 0
    //       }
    //       nextCorner = cornerAt(nextCornerId);
    //       width = corners[2][0] - corners[1][0];
    //       height = corners[0][1] - corners[1][1];
    //       x = corners[1][0];
    //       y = corners[1][1];
    //       var radius = cornerRadius;
    //       if (radius > Math.abs(height) / 2) {
    //         radius = Math.floor(Math.abs(height) / 2);
    //       }
    //       if (radius > Math.abs(width) / 2) {
    //         radius = Math.floor(Math.abs(width) / 2);
    //       }
    //       var x_tl, x_tr, y_tl, y_tr, x_bl, x_br, y_bl, y_br;
    //       if (height < 0) {
    //         x_tl = x;
    //         x_tr = x + width;
    //         y_tl = y + height;
    //         y_tr = y + height;
    //         x_bl = x;
    //         x_br = x + width;
    //         y_bl = y;
    //         y_br = y;
    //         ctx.moveTo(x_bl + radius, y_bl);
    //         ctx.lineTo(x_br - radius, y_br);
    //         ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius);
    //         ctx.lineTo(x_tr, y_tr + radius);
    //         fullCornerRadius ? ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr) : ctx.lineTo(x_tr, y_tr, x_tr - radius, y_tr);
    //         ctx.lineTo(x_tl + radius, y_tl);
    //         fullCornerRadius ? ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius) : ctx.lineTo(x_tl, y_tl, x_tl, y_tl + radius);
    //         ctx.lineTo(x_bl, y_bl - radius);
    //         ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);
    //       } else if (width < 0) {
    //         x_tl = x + width;
    //         x_tr = x;
    //         y_tl = y;
    //         y_tr = y;
    //         x_bl = x + width;
    //         x_br = x;
    //         y_bl = y + height;
    //         y_br = y + height;
    //         ctx.moveTo(x_bl + radius, y_bl);
    //         ctx.lineTo(x_br - radius, y_br);
    //         fullCornerRadius ? ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius) : ctx.lineTo(x_br, y_br, x_br, y_br - radius);
    //         ctx.lineTo(x_tr, y_tr + radius);
    //         fullCornerRadius ? ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr) : ctx.lineTo(x_tr, y_tr, x_tr - radius, y_tr);
    //         ctx.lineTo(x_tl + radius, y_tl);
    //         ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius);
    //         ctx.lineTo(x_bl, y_bl - radius);
    //         ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);
    //       } else {
    //         var lastVisible = 0;
    //         for (var findLast = 0, findLastTo = this._chart.data.datasets.length; findLast < findLastTo; findLast++) {
    //           if (!this._chart.getDatasetMeta(findLast).hidden) {
    //             lastVisible = findLast;
    //           }
    //         }
    //         var rounded = this._datasetIndex === lastVisible;
    //         if (rounded) {
    //           ctx.moveTo(x + radius, y);
    //           ctx.lineTo(x + width - radius, y);
    //           ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    //           ctx.lineTo(x + width, y + height - radius);
    //           if (fullCornerRadius || typeOfChart == 'horizontalBar')
    //             ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    //           else
    //             ctx.lineTo(x + width, y + height, x + width - radius, y + height);
    //           ctx.lineTo(x + radius, y + height);
    //           if (fullCornerRadius)
    //             ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    //           else
    //             ctx.lineTo(x, y + height, x, y + height - radius);
    //           ctx.lineTo(x, y + radius);
    //           if (fullCornerRadius || typeOfChart == 'bar')
    //             ctx.quadraticCurveTo(x, y, x + radius, y);
    //           else
    //             ctx.lineTo(x, y, x + radius, y);
    //         } else {
    //           ctx.moveTo(x, y);
    //           ctx.lineTo(x + width, y);
    //           ctx.lineTo(x + width, y + height);
    //           ctx.lineTo(x, y + height);
    //           ctx.lineTo(x, y);
    //         }
    //       }
    //     }
    //     ctx.fill();
    //     if (borderWidth) {
    //       ctx.stroke();
    //     }
    //   };
    //   var data = {
    //     labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab","Dom"],
    //     datasets: [{
    //       label: 'data 0',
    //       data: [12, 19, 3, 5, 2, 3,11],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)',
    //         'rgba(255, 159, 64, 1)'
    //       ],
    //       borderWidth: 0
    //     }, {
    //       label: 'data 1',
    //       data: [20, 24, 10, 15, 12, 13],
    //       backgroundColor: [
    //         'rgba(255, 159, 64, 1)',
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(75, 192, 192, 1)'
    //       ],
    //       borderWidth: 0
    //     }, {
    //       label: 'data 2',
    //       data: [20, 30, 30, 20, 14, 20],
    //       backgroundColor: [
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(255, 159, 64, 1)',
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(153, 102, 255, 1)'
    //       ],
    //       borderWidth: 0
    //     }]
    //   };
    //   var options = {
    //     cornerRadius: 20,
    //     fullCornerRadius: false,
    //     stackedRounded: false,
    //     legend: {
    //       display: false
    //     },
    //     elements: {
    //       point: {
    //         radius: 25,
    //         hoverRadius: 35,
    //         pointStyle: 'rectRounded',
    //       }
    //     },
    //     scales: {
    //       yAxes: [{
    //         gridLines: {
    //           display: false
    //         },
    //         ticks: {
    //           beginAtZero: true
    //         },
    //         stacked: true,
    //         radius: 25
    //       }],
    //       xAxes: [{
    //         gridLines: {
    //           display: false
    //         },
    //         ticks: {
    //           beginAtZero: true
    //         },
    //         stacked: true,
    //       }]
    //     }
    //   };
    //   const myBarChart = new Chart(this.ctx, {
    //     type: 'bar',
    //     data: data,
    //     options: options
    //   });
    // }
    ngOnInit() {
        this.loadWeight();
    }
    onClick() {
        this.route.navigate(['hidratar-form']);
    }
    onBack() {
        this.route.navigate(['/tabs/tab1']);
    }
    loadWeight() {
        this.userSrv.getWeightUser().subscribe((data) => {
            console.log(data);
            this.goalDay = data.dados.peso * 0.04;
            console.log(this.goalDay);
        });
        this.userSrv.getHidroUser().subscribe((data) => {
            this.hidroDay = data;
            console.log(this.hidroDay);
        });
    }
};
ActivityTrackerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
ActivityTrackerPage.propDecorators = {
    barCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['barCanvas',] }]
};
ActivityTrackerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-activity-tracker',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_activity_tracker_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_activity_tracker_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActivityTrackerPage);



/***/ }),

/***/ 24608:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/activity-tracker/activity-tracker.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onBack()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Controle de Atividades</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"main_div\">\n    <div class=\"target\">\n      <ion-label class=\"target_lbl\">Metas de Hoje</ion-label>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"onClick()\">\n          <ion-icon slot=\"start\" name=\"add\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <img src=\"assets/images/water.png\" alt=\"\">\n          <div class=\"inside\">\n            <ion-label class=\"size\">{{goalDay}} L</ion-label>\n            <ion-label class=\"water\"> de Água</ion-label>\n          </div>\n          \n        </ion-item>\n      </ion-col>\n\n     \n    </ion-row>\n  </div>\n\n  <!-- <div class=\"second_div\">\n    <div class=\"progress\">\n      <ion-label class=\"head_lbl\">Progresso</ion-label>\n        <ion-chip >\n          <ion-label color=\"light\">Semanal</ion-label>\n          <ion-icon name=\"chevron-down-outline\" color=\"light\"></ion-icon>\n        </ion-chip>\n    </div>\n    <canvas id=\"barChart\"></canvas>\n  </div> -->\n\n  <div class=\"bottom_div\">\n    <div class=\"latest\">\n      <ion-label class=\"left_lbl\">Últimas Atividades</ion-label>\n      <ion-label class=\"right_lbl\">Ver Mais</ion-label>\n    </div>\n\n\n    <ion-item lines=\"none\" *ngFor = \"let h of hidroDay\">\n      <ion-thumbnail>\n        <img src=\"assets/images/drink.png\"/>\n      </ion-thumbnail>\n      <div class=\"activity\">\n        <ion-label class=\"uppr_lbl\">Ingeriu {{h.qtd_agua}}ml de água </ion-label>\n        <ion-label class=\"bttm_lbl\">{{ h.created_at | date : 'HH:mm' }}</ion-label>\n      </div>\n      <ion-icon slot=\"end\" name=\"ellipsis-vertical\"></ion-icon>\n    </ion-item>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 37123:
/*!*******************************************************************!*\
  !*** ./src/app/pages/activity-tracker/activity-tracker.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-header ion-toolbar {\n  --border-width: 0;\n}\nion-content .main_div {\n  margin-top: 1.5rem;\n  padding: 10px;\n  background: #02bd99;\n  color: #fff;\n  border-radius: 10px;\n  height: 130px;\n}\nion-content .main_div .target {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nion-content .main_div .target .target_lbl {\n  font-size: 16px;\n  font-family: \"semi-bold\";\n}\nion-content .main_div .target ion-buttons ion-button ion-icon {\n  background: #018393;\n  border-radius: 10px;\n}\nion-content .main_div ion-row ion-col ion-item img {\n  height: 32px;\n  width: 32px;\n  margin-right: 5px;\n}\nion-content .main_div ion-row ion-col ion-item .inside {\n  display: flex;\n  flex-direction: column;\n}\nion-content .main_div ion-row ion-col ion-item .inside .size {\n  font-size: 16px;\n  color: #92a3fd;\n}\nion-content .main_div ion-row ion-col ion-item .inside .water {\n  font-size: 12px;\n}\nion-content .second_div {\n  margin-top: 2rem;\n}\nion-content .second_div .progress {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\nion-content .second_div .progress .head_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .second_div .progress ion-chip {\n  background: #92a3fd;\n  margin-top: 10px;\n}\nion-content .second_div .progress ion-chip ion-label {\n  font-size: 12px;\n}\nion-content .second_div .progress ion-chip ion-icon {\n  font-size: 18px;\n}\nion-content .bottom_div {\n  margin-top: 2rem;\n}\nion-content .bottom_div .latest {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nion-content .bottom_div .latest .left_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\nion-content .bottom_div .latest .right_lbl {\n  font-size: 14px;\n}\nion-content ion-item {\n  margin-top: 32px;\n}\nion-content ion-item ion-thumbnail img {\n  height: 50px;\n  width: 50px;\n}\nion-content ion-item .activity .uppr_lbl {\n  font-size: 16px;\n  font-family: \"medium\";\n}\nion-content ion-item .activity .bttm_lbl {\n  font-size: 12px;\n}\nion-content ion-item ion-icon {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LXRyYWNrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7OztDQUFBO0FBU0U7RUFDRSxpQkFBQTtBQUNKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFESjtBQUVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBTjtBQUNNO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBQ1I7QUFHVTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQVNVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVBaO0FBU1U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFQWjtBQVFZO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFOZDtBQVFZO0VBQ0UsZUFBQTtBQU5kO0FBYUU7RUFDRSxnQkFBQTtBQVhKO0FBWUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBVk47QUFXTTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtBQVRSO0FBV007RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBVFI7QUFVUTtFQUNFLGVBQUE7QUFSVjtBQVVRO0VBQ0UsZUFBQTtBQVJWO0FBYUU7RUFDRSxnQkFBQTtBQVhKO0FBWUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVZOO0FBWU07RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUFWUjtBQWFNO0VBQ0UsZUFBQTtBQVhSO0FBZUU7RUFDRSxnQkFBQTtBQWJKO0FBZU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQWJSO0FBaUJNO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBZlI7QUFpQk07RUFDRSxlQUFBO0FBZlI7QUFrQkk7RUFDRSxlQUFBO0FBaEJOIiwiZmlsZSI6ImFjdGl2aXR5LXRyYWNrZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cbmlvbi1jb250ZW50IC5tYWluX2RpdiB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzAyYmQ5OTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMTMwcHg7XG59XG5pb24tY29udGVudCAubWFpbl9kaXYgLnRhcmdldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAudGFyZ2V0IC50YXJnZXRfbGJsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJzZW1pLWJvbGRcIjtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAudGFyZ2V0IGlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjMDE4MzkzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW5fZGl2IGlvbi1yb3cgaW9uLWNvbCBpb24taXRlbSBpbWcge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0gLmluc2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5pb24tY29udGVudCAubWFpbl9kaXYgaW9uLXJvdyBpb24tY29sIGlvbi1pdGVtIC5pbnNpZGUgLnNpemUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjOTJhM2ZkO1xufVxuaW9uLWNvbnRlbnQgLm1haW5fZGl2IGlvbi1yb3cgaW9uLWNvbCBpb24taXRlbSAuaW5zaWRlIC53YXRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1jb250ZW50IC5zZWNvbmRfZGl2IHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbmlvbi1jb250ZW50IC5zZWNvbmRfZGl2IC5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5zZWNvbmRfZGl2IC5wcm9ncmVzcyAuaGVhZF9sYmwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLnNlY29uZF9kaXYgLnByb2dyZXNzIGlvbi1jaGlwIHtcbiAgYmFja2dyb3VuZDogIzkyYTNmZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5zZWNvbmRfZGl2IC5wcm9ncmVzcyBpb24tY2hpcCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tY29udGVudCAuc2Vjb25kX2RpdiAucHJvZ3Jlc3MgaW9uLWNoaXAgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tY29udGVudCAuYm90dG9tX2RpdiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5pb24tY29udGVudCAuYm90dG9tX2RpdiAubGF0ZXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmJvdHRvbV9kaXYgLmxhdGVzdCAubGVmdF9sYmwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLmJvdHRvbV9kaXYgLmxhdGVzdCAucmlnaHRfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gLmFjdGl2aXR5IC51cHByX2xibCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG59XG5pb24tY29udGVudCBpb24taXRlbSAuYWN0aXZpdHkgLmJ0dG1fbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_activity-tracker_activity-tracker_module_ts.js.map