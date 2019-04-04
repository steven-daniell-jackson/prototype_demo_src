(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/html/html.module": [
		"./src/app/modules/html/html.module.ts",
		"modules-html-html-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: myAnimation, moduleAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myAnimation", function() { return myAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleAnimation", function() { return moduleAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// export const DemoMenuOpen = trigger("DemoMenuOpen", [
//   transition("* => *", [
//     query(":enter", [style({ opacity: 0 })], { optional: true }),
//     query(
//       ":leave",
//       [style({ opacity: 1 }), animate("0.3s", style({ opacity: 0 }))],
//       { optional: true }
//     ),
//     query(
//       ":enter",
//       [style({ opacity: 0 }), animate("0.3s", style({ opacity: 1 }))],
//       { optional: true }
//     )
//   ])
// ]);
var myAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("PageAnimation", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("HomePage => *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "relative" }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%"
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "-100%" })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("300ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "-100%" }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("300ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "0%" }))])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])())
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => HomePage", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "relative" }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%"
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "-100%" })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("300ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "-100%" }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("300ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "0%" }))])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])())
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("Html => *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "relative" }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%"
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "-100%" })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("300ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "-100%" }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("300ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "0%" }))])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])())
    ])
]);
var moduleAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("ModuleAnimation", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))], { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _templates_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/homepage/homepage.component */ "./src/app/templates/homepage/homepage.component.ts");
/* harmony import */ var _templates_pages_html_landing_page_html_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/pages/html-landing-page/html-landing-page.component */ "./src/app/templates/pages/html-landing-page/html-landing-page.component.ts");
/* harmony import */ var _templates_pages_css_landing_page_css_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/pages/css-landing-page/css-landing-page.component */ "./src/app/templates/pages/css-landing-page/css-landing-page.component.ts");
/* harmony import */ var _templates_pages_bootstrap_landing_page_bootstrap_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/pages/bootstrap-landing-page/bootstrap-landing-page.component */ "./src/app/templates/pages/bootstrap-landing-page/bootstrap-landing-page.component.ts");
/* harmony import */ var _templates_pages_javascript_landing_page_javascript_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/pages/javascript-landing-page/javascript-landing-page.component */ "./src/app/templates/pages/javascript-landing-page/javascript-landing-page.component.ts");
/* harmony import */ var _templates_pages_php_landing_page_php_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/pages/php-landing-page/php-landing-page.component */ "./src/app/templates/pages/php-landing-page/php-landing-page.component.ts");
/* harmony import */ var _templates_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/error-page/error-page.component */ "./src/app/templates/error-page/error-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: "",
        component: _templates_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"],
        pathMatch: "full",
        data: { animation: "HomePage" }
    },
    // Landing Pages
    {
        path: "html-landing-page",
        component: _templates_pages_html_landing_page_html_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["HtmlLandingPageComponent"],
        data: { animation: "ModulePage" }
    },
    {
        path: "css-landing-page",
        component: _templates_pages_css_landing_page_css_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["CssLandingPageComponent"],
        data: { animation: "ModulePage" }
    },
    {
        path: "bootstrap-landing-page",
        component: _templates_pages_bootstrap_landing_page_bootstrap_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["BootstrapLandingPageComponent"],
        data: { animation: "ModulePage" }
    },
    {
        path: "javascript-landing-page",
        component: _templates_pages_javascript_landing_page_javascript_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["JavascriptLandingPageComponent"],
        data: { animation: "ModulePage" }
    },
    {
        path: "php-landing-page",
        component: _templates_pages_php_landing_page_php_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["PhpLandingPageComponent"],
        data: { animation: "ModulePage" }
    },
    {
        path: "html",
        loadChildren: "./modules/html/html.module#HtmlModule",
        data: { animation: "ModulePage" }
    },
    {
        path: "error",
        component: _templates_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_8__["ErrorPageComponent"],
        data: { animation: "HomePage" }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main [@PageAnimation]=\"prepareRoute(outlet)\">\n  <router-outlet #outlet=\"outlet\"></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {
//   transition,
//   trigger,
//   query,
//   style,
//   animate,
//   group,
//   animateChild
// } from "@angular/animations";
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "prototype";
    }
    AppComponent.prototype.prepareRoute = function (outlet) {
        return (outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData["animation"]);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["myAnimation"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _templates_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/homepage/homepage.component */ "./src/app/templates/homepage/homepage.component.ts");
/* harmony import */ var _templates_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/layouts/header/header.component */ "./src/app/templates/layouts/header/header.component.ts");
/* harmony import */ var _templates_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/layouts/footer/footer.component */ "./src/app/templates/layouts/footer/footer.component.ts");
/* harmony import */ var _templates_homepage_homepage_blocks_homepage_card_blocks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/homepage/homepage-blocks/homepage-card-blocks.component */ "./src/app/templates/homepage/homepage-blocks/homepage-card-blocks.component.ts");
/* harmony import */ var _templates_pages_html_landing_page_html_landing_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/pages/html-landing-page/html-landing-page.component */ "./src/app/templates/pages/html-landing-page/html-landing-page.component.ts");
/* harmony import */ var _templates_pages_css_landing_page_css_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates/pages/css-landing-page/css-landing-page.component */ "./src/app/templates/pages/css-landing-page/css-landing-page.component.ts");
/* harmony import */ var _templates_pages_bootstrap_landing_page_bootstrap_landing_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./templates/pages/bootstrap-landing-page/bootstrap-landing-page.component */ "./src/app/templates/pages/bootstrap-landing-page/bootstrap-landing-page.component.ts");
/* harmony import */ var _templates_pages_javascript_landing_page_javascript_landing_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./templates/pages/javascript-landing-page/javascript-landing-page.component */ "./src/app/templates/pages/javascript-landing-page/javascript-landing-page.component.ts");
/* harmony import */ var _templates_pages_php_landing_page_php_landing_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./templates/pages/php-landing-page/php-landing-page.component */ "./src/app/templates/pages/php-landing-page/php-landing-page.component.ts");
/* harmony import */ var _templates_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./templates/error-page/error-page.component */ "./src/app/templates/error-page/error-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _templates_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                _templates_homepage_homepage_blocks_homepage_card_blocks_component__WEBPACK_IMPORTED_MODULE_9__["HomepageBlocksComponent"],
                _templates_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _templates_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _templates_pages_html_landing_page_html_landing_page_component__WEBPACK_IMPORTED_MODULE_10__["HtmlLandingPageComponent"],
                _templates_pages_css_landing_page_css_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["CssLandingPageComponent"],
                _templates_pages_bootstrap_landing_page_bootstrap_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["BootstrapLandingPageComponent"],
                _templates_pages_javascript_landing_page_javascript_landing_page_component__WEBPACK_IMPORTED_MODULE_13__["JavascriptLandingPageComponent"],
                _templates_pages_php_landing_page_php_landing_page_component__WEBPACK_IMPORTED_MODULE_14__["PhpLandingPageComponent"],
                _templates_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_15__["ErrorPageComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/templates/error-page/error-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/templates/error-page/error-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main class=\"container\">\n  <div class=\"row justify-content-center mt-5\">\n    <div class=\"col col-md-8 text-center\">\n      <h1>ERROR: Not Available in Demo Version</h1>\n      <p class=\"lead mt-4\">\n        Sorry, This preview is not available in the demo version.<br /><br />\n        <b>Thank you for looking through my project</b><br /><br />\n        Please contact me at\n        <a href=\"mailto:stevenjackson.sanguine@gmail.com\"\n          >stevenjackson.sanguine@gmail.com</a\n        >\n        for the most up to date preview or wait until further development has\n        been completed.\n        <br />\n        <br />\n        Kind Regards<br />\n        Steven\n      </p>\n      <a class=\"btn btn-primary\" routerLink=\"/\">Return to Main Page</a>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/error-page/error-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/templates/error-page/error-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "b {\n  font-size: 1.3rem;\n  font-weight: 700; }\n"

/***/ }),

/***/ "./src/app/templates/error-page/error-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/templates/error-page/error-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/templates/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/templates/error-page/error-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/homepage/homepage-blocks/homepage-card-blocks.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/templates/homepage/homepage-blocks/homepage-card-blocks.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin: 2.5rem 0rem;\n  padding: 0rem; }\n\n.container {\n  padding: 2rem 0 0 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n"

/***/ }),

/***/ "./src/app/templates/homepage/homepage-blocks/homepage-card-blocks.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/templates/homepage/homepage-blocks/homepage-card-blocks.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HomepageBlocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageBlocksComponent", function() { return HomepageBlocksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageBlocksComponent = /** @class */ (function () {
    function HomepageBlocksComponent() {
    }
    HomepageBlocksComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HomepageBlocksComponent.prototype, "blockName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HomepageBlocksComponent.prototype, "blockContains", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HomepageBlocksComponent.prototype, "blockImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HomepageBlocksComponent.prototype, "blockRouterLink", void 0);
    HomepageBlocksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-homepage-card-blocks",
            template: "\n    <div class=\"container-wrapper\">\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-10 col-sm-6 m-auto col-md-4 pb-4 pb-md-0\">\n            <img\n              alt=\"image\"\n              class=\"img-fluid rounded-0\"\n              src=\"./assets/homepage-icons/{{ blockImage }}.png\"\n            />\n          </div>\n          <div class=\"col-12 ml-auto col-md-6 col-lg-8\">\n            <h1>{{ blockName }}</h1>\n            <p class=\"lead\">\n              Everything {{ blockName }}. <br />\n              Contains: {{ blockContains }}\n            </p>\n            <p>\n              <a\n                class=\"btn btn-primary mt-4 mb-5 mb-md-0 btn-lg\"\n                [routerLink]=\"blockRouterLink\"\n                >{{ blockName }}</a\n              >\n            </p>\n          </div>\n        </div>\n        <hr />\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./homepage-card-blocks.component.scss */ "./src/app/templates/homepage/homepage-blocks/homepage-card-blocks.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageBlocksComponent);
    return HomepageBlocksComponent;
}());



/***/ }),

/***/ "./src/app/templates/homepage/homepage.component.html":
/*!************************************************************!*\
  !*** ./src/app/templates/homepage/homepage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main>\n  <app-homepage-card-blocks\n    *ngFor=\"let block of homepageBlocks\"\n    blockName=\"{{ block.blockName }}\"\n    blockContains=\" {{ block.blockContains }}\"\n    blockImage=\"{{ block.blockImage }}\"\n    blockRouterLink=\"{{ block.blockRouterLink }}\"\n  ></app-homepage-card-blocks>\n</main>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/templates/homepage/homepage.component.scss":
/*!************************************************************!*\
  !*** ./src/app/templates/homepage/homepage.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/templates/homepage/homepage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/templates/homepage/homepage.component.ts ***!
  \**********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomepageComponent = /** @class */ (function () {
    // I initialize the app view component.
    function HomepageComponent(router) {
        var _this = this;
        this.homepageBlocks = [
            {
                blockName: "HTML 5",
                blockContains: "HTML5 and DOM References",
                blockImage: "html5",
                blockRouterLink: "./html-landing-page"
            },
            {
                blockName: "Bootstrap",
                blockContains: "Prebuild Components and References",
                blockImage: "bootstrap",
                blockRouterLink: "./bootstrap-landing-page"
            },
            {
                blockName: "CSS 3",
                blockContains: "CSS Basic, Advanced, Snippets and References",
                blockImage: "css3",
                blockRouterLink: "./css-landing-page"
            },
            {
                blockName: "Javascript",
                blockContains: "Frameworks, Components and References",
                blockImage: "javascript",
                blockRouterLink: "./javascript-landing-page"
            },
            {
                blockName: "PHP",
                blockContains: "Frameworks and References",
                blockImage: "php",
                blockRouterLink: "./php-landing-page"
            }
        ];
        this.isShowingRouteLoadIndicator = false;
        // As the router loads modules asynchronously (via loadChildren), we're going to
        // keep track of how many asynchronous requests are currently active. If there is
        // at least one pending load request, we'll show the indicator.
        var asyncLoadCount = 0;
        // The Router emits special events for "loadChildren" configuration loading. We
        // just need to listen for the Start and End events in order to determine if we
        // have any pending configuration requests.
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                asyncLoadCount++;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"]) {
                asyncLoadCount--;
            }
            // If there is at least one pending asynchronous config load request,
            // then let's show the loading indicator.
            // --
            // CAUTION: I'm using CSS to include a small delay such that this loading
            // indicator won't be seen by people with sufficiently fast connections.
            _this.isShowingRouteLoadIndicator = !!asyncLoadCount;
        });
    }
    HomepageComponent.prototype.ngOnInit = function () { };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-homepage",
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/templates/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/templates/homepage/homepage.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/templates/layouts/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/templates/layouts/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"row\">\n    <div class=\"col-md-12 no-gutter text-center\">\n      <p class=\"m-0 p-4\">Steven Jackson</p>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/templates/layouts/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/templates/layouts/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0 !important; }\n"

/***/ }),

/***/ "./src/app/templates/layouts/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/templates/layouts/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/templates/layouts/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/templates/layouts/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/templates/layouts/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/templates/layouts/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"row no-gutters\">\n    <div class=\"col-md-12 text-center\">\n      <p class=\"m-0 p-4\"><a routerLink=\"/\"> Prototype Demo</a></p>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/templates/layouts/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/templates/layouts/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background-color: #282828; }\n\na {\n  color: #fff;\n  font-size: 1.5rem; }\n"

/***/ }),

/***/ "./src/app/templates/layouts/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/templates/layouts/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/templates/layouts/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/templates/layouts/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/bootstrap-landing-page/bootstrap-landing-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/templates/pages/bootstrap-landing-page/bootstrap-landing-page.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main class=\"container\">\n  <div\n    *ngIf=\"!isShowingRouteLoadIndicator\"\n    class=\"text-center justify-content-center \"\n  >\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/bootstrap.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>Custom Bootstrap Module</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Contacts, Contents, Cta, Features, Footers, Forms, Headers, Layouts,\n          Sidebars, Teams, Testimonials, Logins, PageRegister, PageSearch,\n          PageUserCards, PageUserProfile, Dashboard, PageProjectSummary,\n          PricingTables\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load Custom Bootstrap Module</a\n          >\n        </p>\n      </div>\n    </div>\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/bootstrap.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>Bootstrap Components Module</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Cards, Alerts, Badges, ButtonBasic, ButtonExtended, Callout, Carousel,\n          Collapse, Dropdowns, Listgroup, MediaObjects, Modals, Navs,\n          Pagination, PillBadges, Pills, Popovers, Progress, Scrollable,\n          Spinners, Tabs, Tooltips, Forms, Galleries, Tables\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load Bootstrap Components Module</a\n          >\n        </p>\n      </div>\n    </div>\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/bootstrap.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>Bootstrap Reference Module</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Classes, Buttons, Dropdowns, Forms, Grid, Helpers, Images, JsAffix,\n          JsAlert, JsButton, JsCarousel, JsCollapse, JsModal, JsPopover,\n          JsScrollspy, JsTab, JsTooltip, Navigtation, Tables, Typography\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load Bootstrap Reference Module</a\n          >\n        </p>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n\n  <!-- I indicate that a router module is being loaded asynchronously. -->\n  <div *ngIf=\"isShowingRouteLoadIndicator\" class=\"router-load-indicator\">\n    <div class=\"row loader-wrapper text-center\">\n      <div class=\"col-md-12 m-5\">\n        <div class=\"loader\"></div>\n        <p class=\"mt-5\">Loading Module</p>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/pages/bootstrap-landing-page/bootstrap-landing-page.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/templates/pages/bootstrap-landing-page/bootstrap-landing-page.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper {\n  font-size: 1.6rem; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #28282808;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.container {\n  padding: 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n.row {\n  padding: 2rem 0;\n  border-bottom: 1px solid #c3c3c3; }\n"

/***/ }),

/***/ "./src/app/templates/pages/bootstrap-landing-page/bootstrap-landing-page.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/templates/pages/bootstrap-landing-page/bootstrap-landing-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: BootstrapLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapLandingPageComponent", function() { return BootstrapLandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BootstrapLandingPageComponent = /** @class */ (function () {
    // I initialize the app view component.
    function BootstrapLandingPageComponent(router) {
        var _this = this;
        this.isShowingRouteLoadIndicator = false;
        // As the router loads modules asynchronously (via loadChildren), we're going to
        // keep track of how many asynchronous requests are currently active. If there is
        // at least one pending load request, we'll show the indicator.
        var asyncLoadCount = 0;
        // The Router emits special events for "loadChildren" configuration loading. We
        // just need to listen for the Start and End events in order to determine if we
        // have any pending configuration requests.
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                asyncLoadCount++;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"]) {
                asyncLoadCount--;
            }
            // If there is at least one pending asynchronous config load request,
            // then let's show the loading indicator.
            // --
            // CAUTION: I'm using CSS to include a small delay such that this loading
            // indicator won't be seen by people with sufficiently fast connections.
            _this.isShowingRouteLoadIndicator = !!asyncLoadCount;
        });
    }
    BootstrapLandingPageComponent.prototype.ngOnInit = function () { };
    BootstrapLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-bootstrap-landing-page",
            template: __webpack_require__(/*! ./bootstrap-landing-page.component.html */ "./src/app/templates/pages/bootstrap-landing-page/bootstrap-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./bootstrap-landing-page.component.scss */ "./src/app/templates/pages/bootstrap-landing-page/bootstrap-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BootstrapLandingPageComponent);
    return BootstrapLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/css-landing-page/css-landing-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/templates/pages/css-landing-page/css-landing-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main class=\"container\">\n  <div\n    *ngIf=\"!isShowingRouteLoadIndicator\"\n    class=\"text-center justify-content-center \"\n  >\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS 3 Snippets</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Accordions, Timelines, Buttons\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load CSS 3 Snippets Module</a\n          >\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS 3 Advanced</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />RoundedCorners, BorderImages, Backgrounds,\n          Colors, Gradients, Shadows, TextEffects, WebFonts, Transforms,\n          Transitions, Animations, Tooltips, Images, ObjectFit, Buttons,\n          Pagination, MultipleColumns, ResizeOutlineOffset, Variables,\n          BoxSizing, FlexBox, MediaQueries, MediaQueriesExamples, Grids,\n          GridsContainer, GridsItem\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load CSS 3 Advanced Module</a\n          >\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS 3 Basics</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />Animatable, Colors, DefaultValues, Entities,\n          Functions, Reference, Selectors, Units, WebFonts, PxEmConvertor\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load CSS 3 Basic Module</a\n          >\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- I indicate that a router module is being loaded asynchronously. -->\n  <div *ngIf=\"isShowingRouteLoadIndicator\" class=\"router-load-indicator\">\n    <div class=\"row loader-wrapper text-center\">\n      <div class=\"col-md-12 m-5\">\n        <div class=\"loader\"></div>\n        <p class=\"mt-5\">Loading Module</p>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/pages/css-landing-page/css-landing-page.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/templates/pages/css-landing-page/css-landing-page.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper {\n  font-size: 1.6rem; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #28282808;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.container {\n  padding: 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n.row {\n  padding: 2rem 0;\n  border-bottom: 1px solid #c3c3c3; }\n"

/***/ }),

/***/ "./src/app/templates/pages/css-landing-page/css-landing-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/templates/pages/css-landing-page/css-landing-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: CssLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssLandingPageComponent", function() { return CssLandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CssLandingPageComponent = /** @class */ (function () {
    // I initialize the app view component.
    function CssLandingPageComponent(router) {
        var _this = this;
        this.isShowingRouteLoadIndicator = false;
        // As the router loads modules asynchronously (via loadChildren), we're going to
        // keep track of how many asynchronous requests are currently active. If there is
        // at least one pending load request, we'll show the indicator.
        var asyncLoadCount = 0;
        // The Router emits special events for "loadChildren" configuration loading. We
        // just need to listen for the Start and End events in order to determine if we
        // have any pending configuration requests.
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                asyncLoadCount++;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"]) {
                asyncLoadCount--;
            }
            // If there is at least one pending asynchronous config load request,
            // then let's show the loading indicator.
            // --
            // CAUTION: I'm using CSS to include a small delay such that this loading
            // indicator won't be seen by people with sufficiently fast connections.
            _this.isShowingRouteLoadIndicator = !!asyncLoadCount;
        });
    }
    CssLandingPageComponent.prototype.ngOnInit = function () { };
    CssLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-css-landing-page",
            template: __webpack_require__(/*! ./css-landing-page.component.html */ "./src/app/templates/pages/css-landing-page/css-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./css-landing-page.component.scss */ "./src/app/templates/pages/css-landing-page/css-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CssLandingPageComponent);
    return CssLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/html-landing-page/html-landing-page.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/templates/pages/html-landing-page/html-landing-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main class=\"container\">\n  <div\n    *ngIf=\"!isShowingRouteLoadIndicator\"\n    class=\"text-center justify-content-center \"\n  >\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/html5.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>HTML 5</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />Reference: attributes, audio, video, canvas,\n          colors, events, tags <br /><br />\n          Dom: attributes, console, document, element, event objects, events,\n          geolocation, history, location, navigator, storage, style, window\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-secondary\" routerLink=\"/html\">Open HTML 5 Module</a>\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- I indicate that a router module is being loaded asynchronously. -->\n  <div *ngIf=\"isShowingRouteLoadIndicator\" class=\"router-load-indicator\">\n    <div class=\"row loader-wrapper text-center\">\n      <div class=\"col-md-12 m-5\">\n        <div class=\"loader\"></div>\n        <p class=\"mt-5\">Loading Module</p>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/pages/html-landing-page/html-landing-page.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/templates/pages/html-landing-page/html-landing-page.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper {\n  font-size: 1.6rem; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #28282808;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.container {\n  padding: 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n.row {\n  padding: 2rem 0;\n  border-bottom: 1px solid #c3c3c3; }\n"

/***/ }),

/***/ "./src/app/templates/pages/html-landing-page/html-landing-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/templates/pages/html-landing-page/html-landing-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: HtmlLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlLandingPageComponent", function() { return HtmlLandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HtmlLandingPageComponent = /** @class */ (function () {
    // I initialize the app view component.
    function HtmlLandingPageComponent(router) {
        var _this = this;
        this.isShowingRouteLoadIndicator = false;
        // As the router loads modules asynchronously (via loadChildren), we're going to
        // keep track of how many asynchronous requests are currently active. If there is
        // at least one pending load request, we'll show the indicator.
        var asyncLoadCount = 0;
        // The Router emits special events for "loadChildren" configuration loading. We
        // just need to listen for the Start and End events in order to determine if we
        // have any pending configuration requests.
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                asyncLoadCount++;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"]) {
                asyncLoadCount--;
            }
            // If there is at least one pending asynchronous config load request,
            // then let's show the loading indicator.
            // --
            // CAUTION: I'm using CSS to include a small delay such that this loading
            // indicator won't be seen by people with sufficiently fast connections.
            _this.isShowingRouteLoadIndicator = !!asyncLoadCount;
        });
    }
    HtmlLandingPageComponent.prototype.ngOnInit = function () { };
    HtmlLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-html-landing-page",
            template: __webpack_require__(/*! ./html-landing-page.component.html */ "./src/app/templates/pages/html-landing-page/html-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./html-landing-page.component.scss */ "./src/app/templates/pages/html-landing-page/html-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HtmlLandingPageComponent);
    return HtmlLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/javascript-landing-page/javascript-landing-page.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/templates/pages/javascript-landing-page/javascript-landing-page.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main class=\"container\">\n  <div\n    *ngIf=\"!isShowingRouteLoadIndicator\"\n    class=\"text-center justify-content-center \"\n  >\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/javascript.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>Javascript Reference Module</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />Arrays, Math, DateTime, Operators, Statements,\n          Strings\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load Javascript Module</a\n          >\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- I indicate that a router module is being loaded asynchronously. -->\n  <div *ngIf=\"isShowingRouteLoadIndicator\" class=\"router-load-indicator\">\n    <div class=\"row loader-wrapper text-center\">\n      <div class=\"col-md-12 m-5\">\n        <div class=\"loader\"></div>\n        <p class=\"mt-5\">Loading Module</p>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/pages/javascript-landing-page/javascript-landing-page.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/templates/pages/javascript-landing-page/javascript-landing-page.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper {\n  font-size: 1.6rem; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #28282808;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.container {\n  padding: 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n.row {\n  padding: 2rem 0;\n  border-bottom: 1px solid #c3c3c3; }\n"

/***/ }),

/***/ "./src/app/templates/pages/javascript-landing-page/javascript-landing-page.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/templates/pages/javascript-landing-page/javascript-landing-page.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: JavascriptLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavascriptLandingPageComponent", function() { return JavascriptLandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JavascriptLandingPageComponent = /** @class */ (function () {
    // I initialize the app view component.
    function JavascriptLandingPageComponent(router) {
        var _this = this;
        this.isShowingRouteLoadIndicator = false;
        // As the router loads modules asynchronously (via loadChildren), we're going to
        // keep track of how many asynchronous requests are currently active. If there is
        // at least one pending load request, we'll show the indicator.
        var asyncLoadCount = 0;
        // The Router emits special events for "loadChildren" configuration loading. We
        // just need to listen for the Start and End events in order to determine if we
        // have any pending configuration requests.
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                asyncLoadCount++;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"]) {
                asyncLoadCount--;
            }
            // If there is at least one pending asynchronous config load request,
            // then let's show the loading indicator.
            // --
            // CAUTION: I'm using CSS to include a small delay such that this loading
            // indicator won't be seen by people with sufficiently fast connections.
            _this.isShowingRouteLoadIndicator = !!asyncLoadCount;
        });
    }
    JavascriptLandingPageComponent.prototype.ngOnInit = function () { };
    JavascriptLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-javascript-landing-page",
            template: __webpack_require__(/*! ./javascript-landing-page.component.html */ "./src/app/templates/pages/javascript-landing-page/javascript-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./javascript-landing-page.component.scss */ "./src/app/templates/pages/javascript-landing-page/javascript-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], JavascriptLandingPageComponent);
    return JavascriptLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/php-landing-page/php-landing-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/templates/pages/php-landing-page/php-landing-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main class=\"container\">\n  <div\n    *ngIf=\"!isShowingRouteLoadIndicator\"\n    class=\"text-center justify-content-center \"\n  >\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/php.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>PHP Reference Module</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Ajax, Arrays, Cookies, DateTime, ErrorHandling, Exception, FileUpload,\n          Filters, FiltersAdvanced, Sessions, MysqlConnect, MysqlCreateDb,\n          MysqlDelete, MysqlInsertData, MysqlInsertMultiple, MysqlLastId,\n          MysqlLimit, MysqlPrepared, MysqlSelect, MysqlUpdate, Array, Calendar,\n          Date, Directory, Error, FileFilter, FileFtp, FileSystem, Http, Mail,\n          Math, Misc, SimpleXml, String, Zip\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load PHP Reference Module</a\n          >\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- I indicate that a router module is being loaded asynchronously. -->\n  <div *ngIf=\"isShowingRouteLoadIndicator\" class=\"router-load-indicator\">\n    <div class=\"row loader-wrapper text-center\">\n      <div class=\"col-md-12 m-5\">\n        <div class=\"loader\"></div>\n        <p class=\"mt-5\">Loading Module</p>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/pages/php-landing-page/php-landing-page.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/templates/pages/php-landing-page/php-landing-page.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper {\n  font-size: 1.6rem; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #28282808;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.container {\n  padding: 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n.row {\n  padding: 2rem 0;\n  border-bottom: 1px solid #c3c3c3; }\n"

/***/ }),

/***/ "./src/app/templates/pages/php-landing-page/php-landing-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/templates/pages/php-landing-page/php-landing-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: PhpLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhpLandingPageComponent", function() { return PhpLandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhpLandingPageComponent = /** @class */ (function () {
    // I initialize the app view component.
    function PhpLandingPageComponent(router) {
        var _this = this;
        this.isShowingRouteLoadIndicator = false;
        // As the router loads modules asynchronously (via loadChildren), we're going to
        // keep track of how many asynchronous requests are currently active. If there is
        // at least one pending load request, we'll show the indicator.
        var asyncLoadCount = 0;
        // The Router emits special events for "loadChildren" configuration loading. We
        // just need to listen for the Start and End events in order to determine if we
        // have any pending configuration requests.
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                asyncLoadCount++;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"]) {
                asyncLoadCount--;
            }
            // If there is at least one pending asynchronous config load request,
            // then let's show the loading indicator.
            // --
            // CAUTION: I'm using CSS to include a small delay such that this loading
            // indicator won't be seen by people with sufficiently fast connections.
            _this.isShowingRouteLoadIndicator = !!asyncLoadCount;
        });
    }
    PhpLandingPageComponent.prototype.ngOnInit = function () { };
    PhpLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-php-landing-page",
            template: __webpack_require__(/*! ./php-landing-page.component.html */ "./src/app/templates/pages/php-landing-page/php-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./php-landing-page.component.scss */ "./src/app/templates/pages/php-landing-page/php-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PhpLandingPageComponent);
    return PhpLandingPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\wamp64\www\prototype_html\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map