"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sleep-tracker_sleep-tracker_module_ts"],{

/***/ 20021:
/*!*********************************************************************!*\
  !*** ./src/app/pages/sleep-tracker/sleep-tracker-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepTrackerPageRoutingModule": () => (/* binding */ SleepTrackerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _sleep_tracker_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleep-tracker.page */ 95513);

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
        component: _sleep_tracker_page__WEBPACK_IMPORTED_MODULE_0__.SleepTrackerPage
    }
];
let SleepTrackerPageRoutingModule = class SleepTrackerPageRoutingModule {
};
SleepTrackerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SleepTrackerPageRoutingModule);



/***/ }),

/***/ 97993:
/*!*************************************************************!*\
  !*** ./src/app/pages/sleep-tracker/sleep-tracker.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepTrackerPageModule": () => (/* binding */ SleepTrackerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _sleep_tracker_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleep-tracker-routing.module */ 20021);
/* harmony import */ var _sleep_tracker_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sleep-tracker.page */ 95513);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let SleepTrackerPageModule = class SleepTrackerPageModule {
};
SleepTrackerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sleep_tracker_routing_module__WEBPACK_IMPORTED_MODULE_0__.SleepTrackerPageRoutingModule
        ],
        declarations: [_sleep_tracker_page__WEBPACK_IMPORTED_MODULE_1__.SleepTrackerPage]
    })
], SleepTrackerPageModule);



/***/ }),

/***/ 95513:
/*!***********************************************************!*\
  !*** ./src/app/pages/sleep-tracker/sleep-tracker.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepTrackerPage": () => (/* binding */ SleepTrackerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sleep_tracker_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sleep-tracker.page.html */ 9844);
/* harmony import */ var _sleep_tracker_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sleep-tracker.page.scss */ 73462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
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



let SleepTrackerPage = class SleepTrackerPage {
    constructor(navctr) {
        this.navctr = navctr;
    }
    ngAfterViewInit() {
        this.canvas = document.getElementById('lineChart');
        this.ctx = this.canvas.getContext('2d');
        chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.elements.Rectangle.prototype.draw = function () {
            var ctx = this._chart.ctx;
            var vm = this._view;
            var left, right, top, bottom, signX, signY, borderSkipped, radius;
            var borderWidth = vm.borderWidth;
            var cornerRadius = this._chart.config.options.cornerRadius;
            var fullCornerRadius = this._chart.config.options.fullCornerRadius;
            var stackedRounded = this._chart.config.options.stackedRounded;
            var typeOfChart = this._chart.config.type;
            if (cornerRadius < 0) {
                cornerRadius = 0;
            }
            if (typeof cornerRadius == 'undefined') {
                cornerRadius = 0;
            }
            if (typeof fullCornerRadius == 'undefined') {
                fullCornerRadius = false;
            }
            if (typeof stackedRounded == 'undefined') {
                stackedRounded = false;
            }
            if (!vm.horizontal) {
                left = vm.x - vm.width / 2;
                right = vm.x + vm.width / 2;
                top = vm.y;
                bottom = vm.base;
                signX = 1;
                signY = bottom > top ? 1 : -1;
                borderSkipped = vm.borderSkipped || 'bottom';
            }
            else {
                left = vm.base;
                right = vm.x;
                top = vm.y - vm.height / 2;
                bottom = vm.y + vm.height / 2;
                signX = right > left ? 1 : -1;
                signY = 1;
                borderSkipped = vm.borderSkipped || 'left';
            }
            if (borderWidth) {
                var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
                borderWidth = borderWidth > barSize ? barSize : borderWidth;
                var halfStroke = borderWidth / 2;
                var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
                var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
                var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
                var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
                if (borderLeft !== borderRight) {
                    top = borderTop;
                    bottom = borderBottom;
                }
                if (borderTop !== borderBottom) {
                    left = borderLeft;
                    right = borderRight;
                }
            }
            ctx.beginPath();
            ctx.fillStyle = vm.backgroundColor;
            ctx.strokeStyle = vm.borderColor;
            ctx.lineWidth = borderWidth;
            var corners = [
                [left, bottom],
                [left, top],
                [right, top],
                [right, bottom]
            ];
            var borders = ['bottom', 'left', 'top', 'right'];
            var startCorner = borders.indexOf(borderSkipped, 0);
            if (startCorner === -1) {
                startCorner = 0;
            }
            function cornerAt(index) {
                return corners[(startCorner + index) % 4];
            }
            var corner = cornerAt(0);
            ctx.moveTo(corner[0], corner[1]);
            var nextCornerId, nextCorner, width, height, x, y;
            for (var i = 1; i < 4; i++) {
                corner = cornerAt(i);
                nextCornerId = i + 1;
                if (nextCornerId == 4) {
                    nextCornerId = 0;
                }
                nextCorner = cornerAt(nextCornerId);
                width = corners[2][0] - corners[1][0];
                height = corners[0][1] - corners[1][1];
                x = corners[1][0];
                y = corners[1][1];
                var radius = cornerRadius;
                if (radius > Math.abs(height) / 2) {
                    radius = Math.floor(Math.abs(height) / 2);
                }
                if (radius > Math.abs(width) / 2) {
                    radius = Math.floor(Math.abs(width) / 2);
                }
                var x_tl, x_tr, y_tl, y_tr, x_bl, x_br, y_bl, y_br;
                if (height < 0) {
                    x_tl = x;
                    x_tr = x + width;
                    y_tl = y + height;
                    y_tr = y + height;
                    x_bl = x;
                    x_br = x + width;
                    y_bl = y;
                    y_br = y;
                    ctx.moveTo(x_bl + radius, y_bl);
                    ctx.lineTo(x_br - radius, y_br);
                    ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius);
                    ctx.lineTo(x_tr, y_tr + radius);
                    fullCornerRadius ? ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr) : ctx.lineTo(x_tr, y_tr, x_tr - radius, y_tr);
                    ctx.lineTo(x_tl + radius, y_tl);
                    fullCornerRadius ? ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius) : ctx.lineTo(x_tl, y_tl, x_tl, y_tl + radius);
                    ctx.lineTo(x_bl, y_bl - radius);
                    ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);
                }
                else if (width < 0) {
                    x_tl = x + width;
                    x_tr = x;
                    y_tl = y;
                    y_tr = y;
                    x_bl = x + width;
                    x_br = x;
                    y_bl = y + height;
                    y_br = y + height;
                    ctx.moveTo(x_bl + radius, y_bl);
                    ctx.lineTo(x_br - radius, y_br);
                    fullCornerRadius ? ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius) : ctx.lineTo(x_br, y_br, x_br, y_br - radius);
                    ctx.lineTo(x_tr, y_tr + radius);
                    fullCornerRadius ? ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr) : ctx.lineTo(x_tr, y_tr, x_tr - radius, y_tr);
                    ctx.lineTo(x_tl + radius, y_tl);
                    ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius);
                    ctx.lineTo(x_bl, y_bl - radius);
                    ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);
                }
                else {
                    var lastVisible = 0;
                    for (var findLast = 0, findLastTo = this._chart.data.datasets.length; findLast < findLastTo; findLast++) {
                        if (!this._chart.getDatasetMeta(findLast).hidden) {
                            lastVisible = findLast;
                        }
                    }
                    var rounded = this._datasetIndex === lastVisible;
                    if (rounded) {
                        ctx.moveTo(x + radius, y);
                        ctx.lineTo(x + width - radius, y);
                        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                        ctx.lineTo(x + width, y + height - radius);
                        if (fullCornerRadius || typeOfChart == 'horizontalBar')
                            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                        else
                            ctx.lineTo(x + width, y + height, x + width - radius, y + height);
                        ctx.lineTo(x + radius, y + height);
                        if (fullCornerRadius)
                            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
                        else
                            ctx.lineTo(x, y + height, x, y + height - radius);
                        ctx.lineTo(x, y + radius);
                        if (fullCornerRadius || typeOfChart == 'line')
                            ctx.quadraticCurveTo(x, y, x + radius, y);
                        else
                            ctx.lineTo(x, y, x + radius, y);
                    }
                    else {
                        ctx.moveTo(x, y);
                        ctx.lineTo(x + width, y);
                        ctx.lineTo(x + width, y + height);
                        ctx.lineTo(x, y + height);
                        ctx.lineTo(x, y);
                    }
                }
            }
            ctx.fill();
            if (borderWidth) {
                ctx.stroke();
            }
        };
        var data = {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
            datasets: [{
                    label: 'data 0',
                    data: [7, 5, 6, 8, 7, 6, 8],
                    backgroundColor: [
                        '#92a3fd',
                    ],
                    borderWidth: 0
                }]
        };
        var options = {
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
                            display: true
                        },
                        ticks: {
                            beginAtZero: true
                        },
                        stacked: true,
                        radius: 25
                    }],
                xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            beginAtZero: true
                        },
                        stacked: true,
                    }]
            }
        };
        const myBarChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.ctx, {
            type: 'line',
            data: data,
            options: options
        });
        this.canvas = document.getElementById('lineChart2');
        this.ctx = this.canvas.getContext('2d');
        chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.elements.Rectangle.prototype.draw = function () {
            var ctx = this._chart.ctx;
            var vm = this._view;
            var left, right, top, bottom, signX, signY, borderSkipped, radius;
            var borderWidth = vm.borderWidth;
            var cornerRadius = this._chart.config.options.cornerRadius;
            var fullCornerRadius = this._chart.config.options.fullCornerRadius;
            var stackedRounded = this._chart.config.options.stackedRounded;
            var typeOfChart = this._chart.config.type;
            if (cornerRadius < 0) {
                cornerRadius = 0;
            }
            if (typeof cornerRadius == 'undefined') {
                cornerRadius = 0;
            }
            if (typeof fullCornerRadius == 'undefined') {
                fullCornerRadius = false;
            }
            if (typeof stackedRounded == 'undefined') {
                stackedRounded = false;
            }
            if (!vm.horizontal) {
                left = vm.x - vm.width / 2;
                right = vm.x + vm.width / 2;
                top = vm.y;
                bottom = vm.base;
                signX = 1;
                signY = bottom > top ? 1 : -1;
                borderSkipped = vm.borderSkipped || 'bottom';
            }
            else {
                left = vm.base;
                right = vm.x;
                top = vm.y - vm.height / 2;
                bottom = vm.y + vm.height / 2;
                signX = right > left ? 1 : -1;
                signY = 1;
                borderSkipped = vm.borderSkipped || 'left';
            }
            if (borderWidth) {
                var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
                borderWidth = borderWidth > barSize ? barSize : borderWidth;
                var halfStroke = borderWidth / 2;
                var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
                var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
                var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
                var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
                if (borderLeft !== borderRight) {
                    top = borderTop;
                    bottom = borderBottom;
                }
                if (borderTop !== borderBottom) {
                    left = borderLeft;
                    right = borderRight;
                }
            }
            ctx.beginPath();
            ctx.fillStyle = vm.backgroundColor;
            ctx.strokeStyle = vm.borderColor;
            ctx.lineWidth = borderWidth;
            var corners = [
                [left, bottom],
                [left, top],
                [right, top],
                [right, bottom]
            ];
            var borders = ['bottom', 'left', 'top', 'right'];
            var startCorner = borders.indexOf(borderSkipped, 0);
            if (startCorner === -1) {
                startCorner = 0;
            }
            function cornerAt(index) {
                return corners[(startCorner + index) % 4];
            }
            var corner = cornerAt(0);
            ctx.moveTo(corner[0], corner[1]);
            var nextCornerId, nextCorner, width, height, x, y;
            for (var i = 1; i < 4; i++) {
                corner = cornerAt(i);
                nextCornerId = i + 1;
                if (nextCornerId == 4) {
                    nextCornerId = 0;
                }
                nextCorner = cornerAt(nextCornerId);
                width = corners[2][0] - corners[1][0];
                height = corners[0][1] - corners[1][1];
                x = corners[1][0];
                y = corners[1][1];
                var radius = cornerRadius;
                if (radius > Math.abs(height) / 2) {
                    radius = Math.floor(Math.abs(height) / 2);
                }
                if (radius > Math.abs(width) / 2) {
                    radius = Math.floor(Math.abs(width) / 2);
                }
                var x_tl, x_tr, y_tl, y_tr, x_bl, x_br, y_bl, y_br;
                if (height < 0) {
                    x_tl = x;
                    x_tr = x + width;
                    y_tl = y + height;
                    y_tr = y + height;
                    x_bl = x;
                    x_br = x + width;
                    y_bl = y;
                    y_br = y;
                    ctx.moveTo(x_bl + radius, y_bl);
                    ctx.lineTo(x_br - radius, y_br);
                    ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius);
                    ctx.lineTo(x_tr, y_tr + radius);
                    fullCornerRadius ? ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr) : ctx.lineTo(x_tr, y_tr, x_tr - radius, y_tr);
                    ctx.lineTo(x_tl + radius, y_tl);
                    fullCornerRadius ? ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius) : ctx.lineTo(x_tl, y_tl, x_tl, y_tl + radius);
                    ctx.lineTo(x_bl, y_bl - radius);
                    ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);
                }
                else if (width < 0) {
                    x_tl = x + width;
                    x_tr = x;
                    y_tl = y;
                    y_tr = y;
                    x_bl = x + width;
                    x_br = x;
                    y_bl = y + height;
                    y_br = y + height;
                    ctx.moveTo(x_bl + radius, y_bl);
                    ctx.lineTo(x_br - radius, y_br);
                    fullCornerRadius ? ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius) : ctx.lineTo(x_br, y_br, x_br, y_br - radius);
                    ctx.lineTo(x_tr, y_tr + radius);
                    fullCornerRadius ? ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr) : ctx.lineTo(x_tr, y_tr, x_tr - radius, y_tr);
                    ctx.lineTo(x_tl + radius, y_tl);
                    ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius);
                    ctx.lineTo(x_bl, y_bl - radius);
                    ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);
                }
                else {
                    var lastVisible = 0;
                    for (var findLast = 0, findLastTo = this._chart.data.datasets.length; findLast < findLastTo; findLast++) {
                        if (!this._chart.getDatasetMeta(findLast).hidden) {
                            lastVisible = findLast;
                        }
                    }
                    var rounded = this._datasetIndex === lastVisible;
                    if (rounded) {
                        ctx.moveTo(x + radius, y);
                        ctx.lineTo(x + width - radius, y);
                        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                        ctx.lineTo(x + width, y + height - radius);
                        if (fullCornerRadius || typeOfChart == 'horizontalBar')
                            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                        else
                            ctx.lineTo(x + width, y + height, x + width - radius, y + height);
                        ctx.lineTo(x + radius, y + height);
                        if (fullCornerRadius)
                            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
                        else
                            ctx.lineTo(x, y + height, x, y + height - radius);
                        ctx.lineTo(x, y + radius);
                        if (fullCornerRadius || typeOfChart == 'line')
                            ctx.quadraticCurveTo(x, y, x + radius, y);
                        else
                            ctx.lineTo(x, y, x + radius, y);
                    }
                    else {
                        ctx.moveTo(x, y);
                        ctx.lineTo(x + width, y);
                        ctx.lineTo(x + width, y + height);
                        ctx.lineTo(x, y + height);
                        ctx.lineTo(x, y);
                    }
                }
            }
            ctx.fill();
            if (borderWidth) {
                ctx.stroke();
            }
        };
        var data = {
            labels: ["Sun", "Mon",],
            datasets: [{
                    label: 'data 0',
                    data: [8, 7,],
                    backgroundColor: [
                        '#ffff',
                    ],
                    borderWidth: 0
                }]
        };
        options = {
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
                            display: false
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
        };
        const myBarChart2 = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.ctx, {
            type: 'line',
            data: data,
            options: options
        });
    }
    ngOnInit() {
    }
    onClick() {
    }
    onBack() {
        this.navctr.back();
    }
};
SleepTrackerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
SleepTrackerPage.propDecorators = {
    lineCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['lineCanvas',] }]
};
SleepTrackerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sleep-tracker',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sleep_tracker_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sleep_tracker_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SleepTrackerPage);



/***/ }),

/***/ 9844:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/sleep-tracker/sleep-tracker.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onBack()\">\n        <ion-icon slot=\"start\" name=\"chevron-back\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Sleep Tracker</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"barchart\">\n    <canvas id=\"lineChart\"></canvas>\n  </div>\n\n  <div class=\"count\">\n    <ion-label class=\"sleep_lbl\">Last Night Sleep</ion-label>\n    <ion-label class=\"time_lbl\">8h 20m</ion-label>\n    <canvas id=\"lineChart2\"></canvas>\n  </div>\n\n  <div class=\"schedule\">\n    <ion-label class=\"head_lbl\">Daily Sleep Schedule</ion-label>\n    <ion-button (click)=\"onClick()\" shape=\"round\">\n      Check\n    </ion-button>\n  </div>\n\n  <div class=\"lower_div\">\n    <ion-label class=\"head_lbl\">Today Schedule</ion-label>\n    <ion-row>\n      <ion-col size=\"2\">\n        <img src=\"assets/images/bed.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"btn\">\n          <ion-label><strong>Bedtime</strong>,09:00pm</ion-label>\n          <ion-label>In 6hours 22minutes</ion-label>\n        </div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div class=\"btn\">\n        <ion-icon  name=\"ellipsis-vertical\"></ion-icon>\n        <ion-toggle mode=\"md\" color=\"danger\" checked></ion-toggle>\n      </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <img src=\"assets/images/clock.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"btn\">\n          <ion-label><strong>Alarm</strong>,05:10am</ion-label>\n          <ion-label>In 14hours 30minutes</ion-label>\n        </div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div class=\"btn\">\n        <ion-icon  name=\"ellipsis-vertical\"></ion-icon>\n        <ion-toggle mode=\"md\" color=\"danger\" checked></ion-toggle>\n      </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 73462:
/*!*************************************************************!*\
  !*** ./src/app/pages/sleep-tracker/sleep-tracker.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-header ion-toolbar {\n  --border-width: 0;\n}\nion-content .barchart {\n  margin-top: 1.5rem;\n}\nion-content .count {\n  margin-top: 1rem;\n  padding: 10px;\n  background: #92a3fd;\n  border-radius: 10px;\n}\nion-content .count .sleep_lbl {\n  color: #fff;\n  margin-top: 10px;\n}\nion-content .count .time_lbl {\n  color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nion-content .schedule {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2rem;\n  background: #92a4fd4f;\n  padding: 5px;\n  border-radius: 10px;\n}\nion-content .schedule .head_lbl {\n  font-size: 18px;\n  margin-left: 10px;\n}\nion-content .schedule ion-button {\n  height: 35px;\n}\nion-content .lower_div {\n  margin-top: 16px;\n}\nion-content .lower_div .head_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n  margin-bottom: 16px;\n}\nion-content .lower_div ion-row {\n  background: #ffff;\n  margin-top: 1rem;\n  box-shadow: 1px 3px 10px var(--box-shadow-color);\n  --box-shadow-color: lightgray;\n  border-radius: 10px;\n}\nion-content .lower_div ion-row ion-col img {\n  height: 50px;\n  width: 50px;\n}\nion-content .lower_div ion-row ion-col ion-icon {\n  margin-left: 20px;\n}\nion-content .lower_div ion-row ion-col .btn {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsZWVwLXRyYWNrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7OztDQUFBO0FBU0U7RUFDRSxpQkFBQTtBQUNKO0FBSUU7RUFDRSxrQkFBQTtBQURKO0FBR0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFFSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUFOO0FBRUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFOO0FBR0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQU47QUFFSTtFQUNFLFlBQUE7QUFBTjtBQUdFO0VBQ0UsZ0JBQUE7QUFESjtBQUVJO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUVJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRVE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUFWO0FBRVE7RUFDRSxpQkFBQTtBQUFWO0FBRVE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFBViIsImZpbGUiOiJzbGVlcC10cmFja2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBidW5jaGRldmVsb3BlcnMgKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWM2VGVtcGxhdGUgUGFja1xuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjEtcHJlc2VudCBidW5jaGRldmVsb3BlcnMuXG4qL1xuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG5pb24tY29udGVudCAuYmFyY2hhcnQge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5pb24tY29udGVudCAuY291bnQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTJhM2ZkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmNvdW50IC5zbGVlcF9sYmwge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5jb3VudCAudGltZV9sYmwge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IC5zY2hlZHVsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYmFja2dyb3VuZDogIzkyYTRmZDRmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tY29udGVudCAuc2NoZWR1bGUgLmhlYWRfbGJsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5zY2hlZHVsZSBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuaW9uLWNvbnRlbnQgLmxvd2VyX2RpdiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5pb24tY29udGVudCAubG93ZXJfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5pb24tY29udGVudCAubG93ZXJfZGl2IGlvbi1yb3cge1xuICBiYWNrZ3JvdW5kOiAjZmZmZjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm94LXNoYWRvdzogMXB4IDNweCAxMHB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xuICAtLWJveC1zaGFkb3ctY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1jb250ZW50IC5sb3dlcl9kaXYgaW9uLXJvdyBpb24tY29sIGltZyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5pb24tY29udGVudCAubG93ZXJfZGl2IGlvbi1yb3cgaW9uLWNvbCBpb24taWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLmxvd2VyX2RpdiBpb24tcm93IGlvbi1jb2wgLmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sleep-tracker_sleep-tracker_module_ts.js.map