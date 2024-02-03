"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_breakfast_breakfast_module_ts"],{

/***/ 82027:
/*!*************************************************************!*\
  !*** ./src/app/pages/breakfast/breakfast-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreakfastPageRoutingModule": () => (/* binding */ BreakfastPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _breakfast_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakfast.page */ 78858);

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
        component: _breakfast_page__WEBPACK_IMPORTED_MODULE_0__.BreakfastPage
    }
];
let BreakfastPageRoutingModule = class BreakfastPageRoutingModule {
};
BreakfastPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BreakfastPageRoutingModule);



/***/ }),

/***/ 7837:
/*!*****************************************************!*\
  !*** ./src/app/pages/breakfast/breakfast.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreakfastPageModule": () => (/* binding */ BreakfastPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _breakfast_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakfast-routing.module */ 82027);
/* harmony import */ var _breakfast_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakfast.page */ 78858);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let BreakfastPageModule = class BreakfastPageModule {
};
BreakfastPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _breakfast_routing_module__WEBPACK_IMPORTED_MODULE_0__.BreakfastPageRoutingModule
        ],
        declarations: [_breakfast_page__WEBPACK_IMPORTED_MODULE_1__.BreakfastPage]
    })
], BreakfastPageModule);



/***/ }),

/***/ 78858:
/*!***************************************************!*\
  !*** ./src/app/pages/breakfast/breakfast.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreakfastPage": () => (/* binding */ BreakfastPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_breakfast_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./breakfast.page.html */ 18201);
/* harmony import */ var _breakfast_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakfast.page.scss */ 68442);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 36636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);




/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/



let BreakfastPage = class BreakfastPage {
    constructor(router, navctr, authSrv) {
        this.router = router;
        this.navctr = navctr;
        this.authSrv = authSrv;
        this.imgOne = 'assets/images/dieta.jpg';
        this.slideOpts2 = {
            slidesPerView: 3.9,
        };
        this.slideOpts1 = {
            slidesPerView: 1.3,
        };
    }
    ngOnInit() {
        this.loadProfile();
    }
    onRecipes() {
        this.router.navigate(['recipes']);
    }
    loadProfile() {
        this.authSrv.profile().subscribe(data => {
            this.profile = data;
            this.nome = data.nome;
            console.log(this.profile);
        });
    }
    onClick() {
    }
    onBack() {
        this.navctr.back();
    }
    goToDieta() {
        this.router.navigate(['menu-diet']);
    }
    goToSleep() {
        this.router.navigate(['sleep-schedule']);
    }
    goToWorkout() {
        this.router.navigate(['menu-exercicios']);
    }
    goToExams() {
        this.router.navigate(['menu-exames']);
    }
    goToHidratar() {
        this.router.navigate(['tabs/tab2']);
    }
};
BreakfastPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
BreakfastPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-breakfast',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_breakfast_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_breakfast_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BreakfastPage);



/***/ }),

/***/ 18201:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/breakfast/breakfast.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\r\n  Authors : bunchdevelopers (Rahul Jograna)\r\n  Website : https://bunchdevelopers.com/\r\n  App Name : ionic6Template Pack\r\n  This App Template Source code is licensed as per the\r\n  terms found in the Website https://bunchdevelopers.com/license\r\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\r\n -->\r\n<ion-header mode=\"ios\" class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      \r\n    </ion-buttons>\r\n    <ion-title>Inicio</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      \r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,900\" rel=\"stylesheet\">\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h6 style=\"text-align: center ;\">Bem vindo (a), </h6> <h4 style=\"text-align: center ;\"> {{nome}}</h4>\r\n    <br>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card card-1\" (click)=\"goToDieta()\">\r\n        <h5>Dieta</h5>\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card card-2\" (click)=\"goToWorkout()\">\r\n        <h5>Treino</h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card card-3\" (click)=\"goToHidratar()\">\r\n        <h5>Hidratação</h5>\r\n        \r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"col-md-4\">\r\n      <div class=\"card card-4\">\r\n        <h5>Saúde Mental</h5>\r\n        \r\n      </div>\r\n    </div> -->\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card card-5\" (click)=\"goToSleep()\">\r\n        <h5>Sono</h5>\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card card-6\" (click)=\"goToExams()\">\r\n        <h5>Exames</h5>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 68442:
/*!*****************************************************!*\
  !*** ./src/app/pages/breakfast/breakfast.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-card {\n  --background-image: url(\"https://unsplash.com/photos/QfMWAnQ4EyE\") no-repeat;\n}\nion-header ion-toolbar {\n  --border-width: 0;\n}\nion-content .searchBar {\n  margin-top: 1rem;\n}\nion-content .searchBar ion-item {\n  --background: #f4f5f8;\n  --border-radius: 10px;\n}\nion-content .searchBar ion-item ion-input {\n  font-family: \"Outfit\", sans-serif;\n  color: gray;\n}\nion-content .searchBar ion-item .icon {\n  height: 60px;\n  width: 60px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  position: absolute;\n  right: 0px;\n}\nion-content .searchBar ion-item .icon .icn {\n  font-size: 28px;\n  color: #ffff;\n  font-family: bold;\n}\nion-content .category .head_lbl {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-family: \"semi-bold\";\n  font-size: 18px;\n}\nion-content .category ion-slides ion-slide .slide {\n  background: #92a4fd60;\n  padding: 10px;\n  border-radius: 20px;\n  width: max-content;\n}\nion-content .category ion-slides ion-slide .slide img {\n  background: #fff;\n  height: 48px;\n  width: 48px;\n  border-radius: 50%;\n  padding: 10px;\n}\nion-content .category ion-slides ion-slide .slide .item_lbl {\n  font-size: 14px;\n}\nion-content .category ion-slides ion-slide .danger {\n  background: #c58bf260;\n}\nion-content .diet .head_lbl {\n  margin-top: 24px;\n  margin-bottom: 10px;\n  font-family: \"semi-bold\";\n  font-size: 18px;\n}\nion-content .diet ion-slides ion-slide {\n  width: 80%;\n  padding: 10px;\n}\nion-content .diet ion-slides ion-slide .slider {\n  background: #fff;\n  padding: 20px;\n  border-radius: 20px;\n  border: solid #02bd99;\n  width: 100%;\n}\nion-content .diet ion-slides ion-slide .slider img {\n  height: 100px;\n  width: 100px;\n}\nion-content .diet ion-slides ion-slide .slider .name_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n  margin-bottom: 15px;\n}\nion-content .diet ion-slides ion-slide .slider .about_lbl {\n  font-size: 16px;\n  margin-bottom: 15px;\n}\nion-content .diet ion-slides ion-slide .danger {\n  background: #02bd99;\n}\nion-content .popular .head_lbl {\n  margin-top: 24px;\n  margin-bottom: 10px;\n  font-family: \"semi-bold\";\n  font-size: 18px;\n}\nion-content .popular ion-item {\n  border-radius: 10px;\n  box-shadow: 0px 0px 20px var(--box-color);\n  --box-color: lightgrey;\n  margin-top: 1rem;\n  padding: 10px;\n}\nion-content .popular ion-item ion-thumbnail img {\n  height: 60px;\n  width: 60px;\n}\nion-content .popular ion-item .activity {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n}\nion-content .popular ion-item .activity .first_lbl {\n  font-size: 16px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  font-family: \"semi-bold\";\n}\nion-content .popular ion-item .activity .scnd_lbl {\n  font-size: 14px;\n}\nbody {\n  font-family: \"Nunito\", sans-serif;\n  padding: 50px;\n}\n.card {\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);\n  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n  padding: 14px 80px 18px 36px;\n  cursor: pointer;\n}\n.card:hover {\n  transform: scale(1.05);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);\n}\n.card h3 {\n  font-weight: 600;\n}\n.card img {\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  max-height: 120px;\n}\n.card-1 {\n  background-image: url(https://images.unsplash.com/photo-1556386734-4227a180d19e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80);\n  background-repeat: no-repeat;\n  background-position: right;\n  background-size: 80px;\n  border-radius: 10px/20px;\n}\n.card-2 {\n  background-image: url(https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);\n  background-repeat: no-repeat;\n  background-position: right;\n  background-size: 80px;\n  border-radius: 10px/20px;\n}\n.card-3 {\n  background-image: url(https://images.unsplash.com/photo-1602904761432-f9ad96133982?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);\n  background-repeat: no-repeat;\n  background-position: right;\n  background-size: 80px;\n  border-radius: 10px/20px;\n}\n.card-4 {\n  background-image: url(https://plus.unsplash.com/premium_photo-1661762623756-b64eafacbae2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);\n  background-repeat: no-repeat;\n  background-position: right;\n  background-size: 80px;\n  border-radius: 10px/20px;\n}\n.card-5 {\n  background-image: url(https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNsZWVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60);\n  background-repeat: no-repeat;\n  background-position: right;\n  background-size: 80px;\n  border-radius: 10px/20px;\n}\n.card-6 {\n  background-image: url(https://plus.unsplash.com/premium_photo-1661661885368-d3b0b8d7ff33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXhhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60);\n  background-repeat: no-repeat;\n  background-position: right;\n  background-size: 80px;\n  border-radius: 10px/20px;\n}\n@media (max-width: 990px) {\n  .card {\n    margin: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFrZmFzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFRQTtFQUNFLDRFQUFBO0FBRUY7QUFDRTtFQUNFLGlCQUFBO0FBRUo7QUFHRTtFQUNFLGdCQUFBO0FBQUo7QUFDSTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFDTjtBQUFNO0VBQ0UsaUNBQUE7RUFDQSxXQUFBO0FBRVI7QUFBTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUVSO0FBRFE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR1Y7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFETjtBQUtRO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhWO0FBSVU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRlo7QUFJVTtFQUNFLGVBQUE7QUFGWjtBQUtRO0VBQ0UscUJBQUE7QUFIVjtBQVNJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQVBOO0FBVU07RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQVJSO0FBU1E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQVBWO0FBUVU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQU5aO0FBUVU7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQU5aO0FBUVU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFOWjtBQVNRO0VBQ0UsbUJBQUE7QUFQVjtBQWFJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQVhOO0FBYUk7RUFDRSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFYTjtBQWFRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFYVjtBQWNNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFaUjtBQWFRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBWFY7QUFhUTtFQUNFLGVBQUE7QUFYVjtBQWlCQTtFQUNFLGlDQUFBO0VBQ0EsYUFBQTtBQWRGO0FBZ0JBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVFQUFBO0VBQ0UsbUZBQUE7RUFDSiw0QkFBQTtFQUNBLGVBQUE7QUFiRjtBQWdCQTtFQUNLLHNCQUFBO0VBQ0gsMEVBQUE7QUFiRjtBQWdCQTtFQUNFLGdCQUFBO0FBYkY7QUFnQkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFiRjtBQWdCQTtFQUNJLGlMQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUFiSjtBQWdCQTtFQUNJLGlMQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUFiSjtBQWdCQTtFQUNJLG9MQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUFiSjtBQWVBO0VBQ0ksMExBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQVpKO0FBY0k7RUFDQSxnTUFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FBWEo7QUFhSTtFQUNBLHNNQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUFWSjtBQWFBO0VBQ0U7SUFDRSxZQUFBO0VBVkY7QUFDRiIsImZpbGUiOiJicmVha2Zhc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1FmTVdBblE0RXlFXCIpIG5vLXJlcGVhdDtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG5pb24tY29udGVudCAuc2VhcmNoQmFyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbmlvbi1jb250ZW50IC5zZWFyY2hCYXIgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1jb250ZW50IC5zZWFyY2hCYXIgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiT3V0Zml0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBncmF5O1xufVxuaW9uLWNvbnRlbnQgLnNlYXJjaEJhciBpb24taXRlbSAuaWNvbiB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbn1cbmlvbi1jb250ZW50IC5zZWFyY2hCYXIgaW9uLWl0ZW0gLmljb24gLmljbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6ICNmZmZmO1xuICBmb250LWZhbWlseTogYm9sZDtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yeSAuaGVhZF9sYmwge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJzZW1pLWJvbGRcIjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3J5IGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5zbGlkZSB7XG4gIGJhY2tncm91bmQ6ICM5MmE0ZmQ2MDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3J5IGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5zbGlkZSBpbWcge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcnkgaW9uLXNsaWRlcyBpb24tc2xpZGUgLnNsaWRlIC5pdGVtX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yeSBpb24tc2xpZGVzIGlvbi1zbGlkZSAuZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogI2M1OGJmMjYwO1xufVxuaW9uLWNvbnRlbnQgLmRpZXQgLmhlYWRfbGJsIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1jb250ZW50IC5kaWV0IGlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jb250ZW50IC5kaWV0IGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IHNvbGlkICMwMmJkOTk7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgLmRpZXQgaW9uLXNsaWRlcyBpb24tc2xpZGUgLnNsaWRlciBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5pb24tY29udGVudCAuZGlldCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGVyIC5uYW1lX2xibCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5pb24tY29udGVudCAuZGlldCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGVyIC5hYm91dF9sYmwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5pb24tY29udGVudCAuZGlldCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogIzAyYmQ5OTtcbn1cbmlvbi1jb250ZW50IC5wb3B1bGFyIC5oZWFkX2xibCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tY29udGVudCAucG9wdWxhciBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCB2YXIoLS1ib3gtY29sb3IpO1xuICAtLWJveC1jb2xvcjogbGlnaHRncmV5O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnBvcHVsYXIgaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCBpbWcge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xufVxuaW9uLWNvbnRlbnQgLnBvcHVsYXIgaW9uLWl0ZW0gLmFjdGl2aXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5pb24tY29udGVudCAucG9wdWxhciBpb24taXRlbSAuYWN0aXZpdHkgLmZpcnN0X2xibCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLnBvcHVsYXIgaW9uLWl0ZW0gLmFjdGl2aXR5IC5zY25kX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE1NSwgMS4xMDUsIDAuMjk1LCAxLjEyKSwgMC4zcyBib3gtc2hhZG93LCAwLjNzIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE1NSwgMS4xMDUsIDAuMjk1LCAxLjEyKTtcbiAgcGFkZGluZzogMTRweCA4MHB4IDE4cHggMzZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG4uY2FyZCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jYXJkIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMTVweDtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG59XG5cbi5jYXJkLTEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTYzODY3MzQtNDIyN2ExODBkMTllP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03MDUmcT04MCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHgvMjBweDtcbn1cblxuLmNhcmQtMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MDM0NTMzMi0wOWUzYWM5ODc2NTg/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NyZxPTgwKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtc2l6ZTogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweC8yMHB4O1xufVxuXG4uY2FyZC0zIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjAyOTA0NzYxNDMyLWY5YWQ5NjEzMzk4Mj9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODApO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4LzIwcHg7XG59XG5cbi5jYXJkLTQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9wbHVzLnVuc3BsYXNoLmNvbS9wcmVtaXVtX3Bob3RvLTE2NjE3NjI2MjM3NTYtYjY0ZWFmYWNiYWUyP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02ODcmcT04MCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHgvMjBweDtcbn1cblxuLmNhcmQtNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4NTEyODcxOTcxNS00Njc3NmI1NmEwZDE/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh6WldGeVkyaDhNVFY4ZkhOc1pXVndmR1Z1ZkRCOGZEQjhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUwMCZxPTYwKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtc2l6ZTogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweC8yMHB4O1xufVxuXG4uY2FyZC02IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcGx1cy51bnNwbGFzaC5jb20vcHJlbWl1bV9waG90by0xNjYxNjYxODg1MzY4LWQzYjBiOGQ3ZmYzMz9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1YeDhaWGhoYldWemZHVnVmREI4ZkRCOGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjApO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4LzIwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xuICAuY2FyZCB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_breakfast_breakfast_module_ts.js.map