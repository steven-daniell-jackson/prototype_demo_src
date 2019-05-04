(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/languages/html/html.module": [
		"./src/app/modules/languages/html/html.module.ts",
		"modules-languages-html-html-module"
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
/* harmony import */ var _templates_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/error-page/error-page.component */ "./src/app/templates/error-page/error-page.component.ts");
/* harmony import */ var _templates_pages_languages_languages_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/pages/languages/languages-landing-page.component */ "./src/app/templates/pages/languages/languages-landing-page.component.ts");
/* harmony import */ var _templates_pages_frameworks_frameworks_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/pages/frameworks/frameworks-landing-page.component */ "./src/app/templates/pages/frameworks/frameworks-landing-page.component.ts");
/* harmony import */ var _templates_pages_libraries_libraries_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/pages/libraries/libraries-landing-page.component */ "./src/app/templates/pages/libraries/libraries-landing-page.component.ts");
/* harmony import */ var _templates_pages_other_landing_page_other_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/pages/other-landing-page/other-landing-page.component */ "./src/app/templates/pages/other-landing-page/other-landing-page.component.ts");
/* harmony import */ var _templates_pages_projects_landing_page_projects_landing_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/pages/projects-landing-page/projects-landing-page.component */ "./src/app/templates/pages/projects-landing-page/projects-landing-page.component.ts");
/* harmony import */ var _templates_pages_languages_html_landing_page_html_landing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/pages/languages/html-landing-page/html-landing-page.component */ "./src/app/templates/pages/languages/html-landing-page/html-landing-page.component.ts");
/* harmony import */ var _templates_pages_languages_css_landing_page_css_landing_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/pages/languages/css-landing-page/css-landing-page.component */ "./src/app/templates/pages/languages/css-landing-page/css-landing-page.component.ts");
/* harmony import */ var _templates_pages_languages_css_landing_page_css_components_landing_page_css_components_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component */ "./src/app/templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component.ts");
/* harmony import */ var _templates_pages_frameworks_bootstrap_landing_page_bootstrap_landing_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component */ "./src/app/templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component.ts");
/* harmony import */ var _templates_pages_languages_javascript_landing_page_javascript_landing_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./templates/pages/languages/javascript-landing-page/javascript-landing-page.component */ "./src/app/templates/pages/languages/javascript-landing-page/javascript-landing-page.component.ts");
/* harmony import */ var _templates_pages_languages_php_landing_page_php_landing_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./templates/pages/languages/php-landing-page/php-landing-page.component */ "./src/app/templates/pages/languages/php-landing-page/php-landing-page.component.ts");
/* harmony import */ var _templates_pages_languages_sql_landing_page_sql_landing_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./templates/pages/languages/sql-landing-page/sql-landing-page.component */ "./src/app/templates/pages/languages/sql-landing-page/sql-landing-page.component.ts");
/* harmony import */ var _templates_pages_libraries_jquery_landing_page_jquery_landing_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./templates/pages/libraries/jquery-landing-page/jquery-landing-page.component */ "./src/app/templates/pages/libraries/jquery-landing-page/jquery-landing-page.component.ts");
/* harmony import */ var _templates_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./templates/changelog/changelog.component */ "./src/app/templates/changelog/changelog.component.ts");
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
    /*************************************************************
                        Landing Pages
    *************************************************************/
    /*************************************************************
                        Main Pages
    *************************************************************/
    {
        path: "languages-landing-page",
        component: _templates_pages_languages_languages_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LanguagesLandingPageComponent"],
        data: { animation: "LandingPage" }
    },
    {
        path: "frameworks-landing-page",
        component: _templates_pages_frameworks_frameworks_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["FrameworksLandingPageComponent"],
        data: { animation: "LandingPage" }
    },
    {
        path: "libraries-landing-page",
        component: _templates_pages_libraries_libraries_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LibrariesLandingPageComponent"],
        data: { animation: "LandingPage" }
    },
    {
        path: "other-landing-page",
        component: _templates_pages_other_landing_page_other_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["OtherLandingPageComponent"],
        data: { animation: "LandingPage" }
    },
    {
        path: "projects-landing-page",
        component: _templates_pages_projects_landing_page_projects_landing_page_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsLandingPageComponent"],
        data: { animation: "LandingPage" }
    },
    {
        path: "error",
        component: _templates_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"],
        data: { animation: "HomePage" }
    },
    {
        path: "changelog",
        component: _templates_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_17__["ChangelogComponent"],
        data: { animation: "HomePage" }
    },
    /*************************************************************
                        Tier Landing Pages
    *************************************************************/
    {
        path: "html-landing-page",
        component: _templates_pages_languages_html_landing_page_html_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["HtmlLandingPageComponent"],
        data: { animation: "LandingPage" }
    },
    {
        path: "css-landing-page",
        component: _templates_pages_languages_css_landing_page_css_landing_page_component__WEBPACK_IMPORTED_MODULE_10__["CssLandingPageComponent"],
        data: { animation: "LandingPage" }
    },
    {
        path: "css-components-landing-page",
        component: _templates_pages_languages_css_landing_page_css_components_landing_page_css_components_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["CssComponentsLandingPageComponent"],
        data: { animation: "LandingPage" }
    },
    {
        path: "bootstrap-landing-page",
        component: _templates_pages_frameworks_bootstrap_landing_page_bootstrap_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["BootstrapLandingPageComponent"],
        data: { animation: "LandingPage" }
    },
    {
        path: "javascript-landing-page",
        component: _templates_pages_languages_javascript_landing_page_javascript_landing_page_component__WEBPACK_IMPORTED_MODULE_13__["JavascriptLandingPageComponent"],
        data: { animation: "LandingPage" }
    },
    {
        path: "php-landing-page",
        component: _templates_pages_languages_php_landing_page_php_landing_page_component__WEBPACK_IMPORTED_MODULE_14__["PhpLandingPageComponent"],
        data: { animation: "LandingPage" }
    },
    {
        path: "sql-landing-page",
        component: _templates_pages_languages_sql_landing_page_sql_landing_page_component__WEBPACK_IMPORTED_MODULE_15__["SqlLandingPageComponent"],
        data: { animation: "LandingPage" }
    },
    {
        path: "jquery-landing-page",
        component: _templates_pages_libraries_jquery_landing_page_jquery_landing_page_component__WEBPACK_IMPORTED_MODULE_16__["JqueryLandingPageComponent"],
        data: { animation: "LandingPage" }
    },
    /*************************************************************
                              Modules
    *************************************************************/
    /*************************************************************
                              Languages
    *************************************************************/
    {
        path: "html",
        loadChildren: "./modules/languages/html/html.module#HtmlModule",
        data: { animation: "ModulePage" }
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

module.exports = "<app-header></app-header>\n\n<main [@PageAnimation]=\"prepareRoute(outlet)\">\n  <router-outlet #outlet=\"outlet\"></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
            animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["myAnimation"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _templates_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/error-page/error-page.component */ "./src/app/templates/error-page/error-page.component.ts");
/* harmony import */ var _templates_pages_languages_html_landing_page_html_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates/pages/languages/html-landing-page/html-landing-page.component */ "./src/app/templates/pages/languages/html-landing-page/html-landing-page.component.ts");
/* harmony import */ var _templates_pages_languages_css_landing_page_css_landing_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./templates/pages/languages/css-landing-page/css-landing-page.component */ "./src/app/templates/pages/languages/css-landing-page/css-landing-page.component.ts");
/* harmony import */ var _templates_pages_frameworks_bootstrap_landing_page_bootstrap_landing_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component */ "./src/app/templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component.ts");
/* harmony import */ var _templates_pages_languages_javascript_landing_page_javascript_landing_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./templates/pages/languages/javascript-landing-page/javascript-landing-page.component */ "./src/app/templates/pages/languages/javascript-landing-page/javascript-landing-page.component.ts");
/* harmony import */ var _templates_pages_languages_php_landing_page_php_landing_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./templates/pages/languages/php-landing-page/php-landing-page.component */ "./src/app/templates/pages/languages/php-landing-page/php-landing-page.component.ts");
/* harmony import */ var _templates_pages_languages_languages_landing_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./templates/pages/languages/languages-landing-page.component */ "./src/app/templates/pages/languages/languages-landing-page.component.ts");
/* harmony import */ var _templates_pages_frameworks_frameworks_landing_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./templates/pages/frameworks/frameworks-landing-page.component */ "./src/app/templates/pages/frameworks/frameworks-landing-page.component.ts");
/* harmony import */ var _templates_pages_libraries_libraries_landing_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./templates/pages/libraries/libraries-landing-page.component */ "./src/app/templates/pages/libraries/libraries-landing-page.component.ts");
/* harmony import */ var _templates_pages_other_landing_page_other_landing_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./templates/pages/other-landing-page/other-landing-page.component */ "./src/app/templates/pages/other-landing-page/other-landing-page.component.ts");
/* harmony import */ var _templates_pages_projects_landing_page_projects_landing_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./templates/pages/projects-landing-page/projects-landing-page.component */ "./src/app/templates/pages/projects-landing-page/projects-landing-page.component.ts");
/* harmony import */ var _templates_pages_languages_css_landing_page_css_components_landing_page_css_components_landing_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component */ "./src/app/templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component.ts");
/* harmony import */ var _templates_pages_languages_sql_landing_page_sql_landing_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./templates/pages/languages/sql-landing-page/sql-landing-page.component */ "./src/app/templates/pages/languages/sql-landing-page/sql-landing-page.component.ts");
/* harmony import */ var _templates_pages_libraries_jquery_landing_page_jquery_landing_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./templates/pages/libraries/jquery-landing-page/jquery-landing-page.component */ "./src/app/templates/pages/libraries/jquery-landing-page/jquery-landing-page.component.ts");
/* harmony import */ var _templates_pages_frameworks_vue_landing_page_vue_landing_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./templates/pages/frameworks/vue-landing-page/vue-landing-page.component */ "./src/app/templates/pages/frameworks/vue-landing-page/vue-landing-page.component.ts");
/* harmony import */ var _templates_pages_frameworks_react_landing_page_react_landing_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./templates/pages/frameworks/react-landing-page/react-landing-page.component */ "./src/app/templates/pages/frameworks/react-landing-page/react-landing-page.component.ts");
/* harmony import */ var _templates_pages_frameworks_angular_landing_page_angular_landing_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./templates/pages/frameworks/angular-landing-page/angular-landing-page.component */ "./src/app/templates/pages/frameworks/angular-landing-page/angular-landing-page.component.ts");
/* harmony import */ var _templates_pages_other_landing_page_nodejs_landing_page_nodejs_landing_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./templates/pages/other-landing-page/nodejs-landing-page/nodejs-landing-page.component */ "./src/app/templates/pages/other-landing-page/nodejs-landing-page/nodejs-landing-page.component.ts");
/* harmony import */ var _templates_pages_frameworks_angularjs_landing_page_angularjs_landing_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./templates/pages/frameworks/angularjs-landing-page/angularjs-landing-page.component */ "./src/app/templates/pages/frameworks/angularjs-landing-page/angularjs-landing-page.component.ts");
/* harmony import */ var _templates_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./templates/changelog/changelog.component */ "./src/app/templates/changelog/changelog.component.ts");
/* harmony import */ var _prototype_material_module_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./prototype-material-module.module */ "./src/app/prototype-material-module.module.ts");
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
                _templates_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _templates_homepage_homepage_blocks_homepage_card_blocks_component__WEBPACK_IMPORTED_MODULE_9__["HomepageBlocksComponent"],
                _templates_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                _templates_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _templates_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"],
                _templates_pages_languages_html_landing_page_html_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["HtmlLandingPageComponent"],
                _templates_pages_languages_css_landing_page_css_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["CssLandingPageComponent"],
                _templates_pages_frameworks_bootstrap_landing_page_bootstrap_landing_page_component__WEBPACK_IMPORTED_MODULE_13__["BootstrapLandingPageComponent"],
                _templates_pages_languages_javascript_landing_page_javascript_landing_page_component__WEBPACK_IMPORTED_MODULE_14__["JavascriptLandingPageComponent"],
                _templates_pages_languages_php_landing_page_php_landing_page_component__WEBPACK_IMPORTED_MODULE_15__["PhpLandingPageComponent"],
                _templates_pages_languages_sql_landing_page_sql_landing_page_component__WEBPACK_IMPORTED_MODULE_22__["SqlLandingPageComponent"],
                _templates_pages_libraries_jquery_landing_page_jquery_landing_page_component__WEBPACK_IMPORTED_MODULE_23__["JqueryLandingPageComponent"],
                _templates_pages_languages_languages_landing_page_component__WEBPACK_IMPORTED_MODULE_16__["LanguagesLandingPageComponent"],
                _templates_pages_frameworks_frameworks_landing_page_component__WEBPACK_IMPORTED_MODULE_17__["FrameworksLandingPageComponent"],
                _templates_pages_libraries_libraries_landing_page_component__WEBPACK_IMPORTED_MODULE_18__["LibrariesLandingPageComponent"],
                _templates_pages_other_landing_page_other_landing_page_component__WEBPACK_IMPORTED_MODULE_19__["OtherLandingPageComponent"],
                _templates_pages_projects_landing_page_projects_landing_page_component__WEBPACK_IMPORTED_MODULE_20__["ProjectsLandingPageComponent"],
                _templates_pages_frameworks_vue_landing_page_vue_landing_page_component__WEBPACK_IMPORTED_MODULE_24__["VueLandingPageComponent"],
                _templates_pages_frameworks_react_landing_page_react_landing_page_component__WEBPACK_IMPORTED_MODULE_25__["ReactLandingPageComponent"],
                _templates_pages_frameworks_angular_landing_page_angular_landing_page_component__WEBPACK_IMPORTED_MODULE_26__["AngularLandingPageComponent"],
                _templates_pages_other_landing_page_nodejs_landing_page_nodejs_landing_page_component__WEBPACK_IMPORTED_MODULE_27__["NodejsLandingPageComponent"],
                _templates_pages_frameworks_angularjs_landing_page_angularjs_landing_page_component__WEBPACK_IMPORTED_MODULE_28__["AngularjsLandingPageComponent"],
                _templates_pages_languages_css_landing_page_css_components_landing_page_css_components_landing_page_component__WEBPACK_IMPORTED_MODULE_21__["CssComponentsLandingPageComponent"],
                _templates_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_29__["ChangelogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _prototype_material_module_module__WEBPACK_IMPORTED_MODULE_30__["PrototypeMaterialModuleModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/prototype-material-module.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/prototype-material-module.module.ts ***!
  \*****************************************************/
/*! exports provided: PrototypeMaterialModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrototypeMaterialModuleModule", function() { return PrototypeMaterialModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PrototypeMaterialModuleModule = /** @class */ (function () {
    function PrototypeMaterialModuleModule() {
    }
    PrototypeMaterialModuleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]]
        })
    ], PrototypeMaterialModuleModule);
    return PrototypeMaterialModuleModule;
}());



/***/ }),

/***/ "./src/app/templates/changelog/changelog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/templates/changelog/changelog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card-body\">\n    <section class=\"sj-block\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col col-md-8 text-center\">\n            <h1>Prototype Changelog</h1>\n            <p class=\"lead\">\n              Main Prototype Project is private on Github.\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Apr 23, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Extra updates</li>\n        <li class=\"list-group-item\">\n          CSS Components Extra - Additional HTML updates\n        </li>\n        <li class=\"list-group-item\">Additional HTML Updates</li>\n        <li class=\"list-group-item\">\n          CSS Components Extra - HTML and SCSS updates\n        </li>\n        <li class=\"list-group-item\">CSS Components Extra - HTML Formatted</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Apr 22, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">More HTML Updates</li>\n        <li class=\"list-group-item\">CSS Components Extra HTML Added</li>\n        <li class=\"list-group-item\">CSS Components Extra Started</li>\n        <li class=\"list-group-item\">\n          CSS Components Menu Sidebar Nav added\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Apr 21, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">CSS Components Menu Routing added</li>\n        <li class=\"list-group-item\">HTML and CSS Images Fix</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Apr 16, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">CSS Component Images Routing and Links</li>\n        <li class=\"list-group-item\">\n          Fixed scss pathing and updated App Route\n        </li>\n        <li class=\"list-group-item\">Removed Component Level Styling</li>\n        <li class=\"list-group-item\">\n          Upgraded to Angular 8\n        </li>\n        <li class=\"list-group-item\">Additional Updates</li>\n        <li class=\"list-group-item\">HTML and Image Updates</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Apr 15, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">HTML Errors fixed</li>\n        <li class=\"list-group-item\">TS Fixes</li>\n        <li class=\"list-group-item\">Global CSS Components Updates</li>\n        <li class=\"list-group-item\">\n          CSS Components HTML Updated\n        </li>\n        <li class=\"list-group-item\">Last CSS Component Pages Created</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Apr 10, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          CSS Components - Other, Menu and Other pages setup\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Apr 9, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          CSS Component Forms Setup and Working. Sidebar fix\n        </li>\n        <li class=\"list-group-item\">CSS/Components/Forms Content added</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Apr 8, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">CSS Components Filter Module Completed</li>\n        <li class=\"list-group-item\">Added Homepage Temp Images</li>\n        <li class=\"list-group-item\">CSS Components Buttons Module Working</li>\n        <li class=\"list-group-item\">\n          CSS Component Buttons Module Routing Setup\n        </li>\n        <li class=\"list-group-item\">CSS Components Module Main Pages added</li>\n        <li class=\"list-group-item\">CSS Components Button Module Content</li>\n        <li class=\"list-group-item\">CSS Component modules and pages created</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Apr 7, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Homepage Update and Restructure.</li>\n        <li class=\"list-group-item\">jQuery Module functioning</li>\n        <li class=\"list-group-item\">\n          jQuery Module added. Updated HTML and Files\n        </li>\n        <li class=\"list-group-item\">\n          Module Restructure. Moved Module Main pages\n        </li>\n        <li class=\"list-group-item\">Fixed Content on Landing pages</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Apr 4, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          Image Ratio Fixes and Corrected Image Links\n        </li>\n        <li class=\"list-group-item\">\n          Reverted Animation and Minor Styling updates\n        </li>\n        <li class=\"list-group-item\">Homepage Stying and Landing Page rework</li>\n        <li class=\"list-group-item\">Homepage Styling Updated</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Apr 3, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">SQL Module Added and Homepage Redesign</li>\n        <li class=\"list-group-item\">Components/User Profile Updated</li>\n        <li class=\"list-group-item\">Components Module Major Updates</li>\n        <li class=\"list-group-item\">Components/CTA Updated.</li>\n        <li class=\"list-group-item\">\n          Components/Content updated. Css Snippets removed\n        </li>\n        <li class=\"list-group-item\">Componets Content updated</li>\n        <li class=\"list-group-item\">Bootstrap and PHP Components Updated</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Apr 2, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Separate Styling and Updated HTML</li>\n        <li class=\"list-group-item\">Separated SCSS Files</li>\n        <li class=\"list-group-item\">\n          Other Refences Module Updated and new Git Content\n        </li>\n        <li class=\"list-group-item\">Javascript Reference Module Updated</li>\n        <li class=\"list-group-item\">\n          CSS Reference Styling & HTML updated. Onit Removed\n        </li>\n        <li class=\"list-group-item\">\n          CSS Advanced Styling and Code Major Updates\n        </li>\n        <li class=\"list-group-item\">Updated Homepage Card Components</li>\n        <li class=\"list-group-item\">CSS Advanced Module Updates</li>\n        <li class=\"list-group-item\">CSS Advanced Pages Created</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Apr 1, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">CSS Routing and Styling updates.</li>\n        <li class=\"list-group-item\">CSS Reference Module Pages set up</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Mar 31, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          Main Margin and background color updated\n        </li>\n        <li class=\"list-group-item\">CSS Snippets styling updated</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Mar 30, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Bootstrap component Styling updated</li>\n        <li class=\"list-group-item\">Components Styling updated</li>\n        <li class=\"list-group-item\">Fixed missing SCSS variable</li>\n        <li class=\"list-group-item\">\n          Created shared SCSS and updated components\n        </li>\n        <li class=\"list-group-item\">\n          Components, Javascript and Other modules added\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Mar 29, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">CSS Snippets Module added</li>\n        <li class=\"list-group-item\">\n          PHP Module Setup\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Mar 28, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          Fixed Bootstrap-ref routing and updated Styling\n        </li>\n        <li class=\"list-group-item\">Updated Strutuce and Layout</li>\n        <li class=\"list-group-item\">Bootstrap Reference Module Added</li>\n        <li class=\"list-group-item\">Added Bootstrap Module</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Mar 26, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Styling updates and Module loader added</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Mar 25, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          Sidebar Styling and RoutingLinkActive Fix\n        </li>\n        <li class=\"list-group-item\">\n          Styling updates, Side Nav components. First deploy\n        </li>\n        <li class=\"list-group-item\">\n          Side Nav, Shared Module and Routing updated\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collapse show\">\n    <div class=\"card-body\">\n      <p>\n        Commits on Mar 24, 2019\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Nested Routes setup</li>\n        <li class=\"list-group-item\">\n          Content Upload and General setup\n        </li>\n        <li class=\"list-group-item\">General Setup</li>\n        <li class=\"list-group-item\">first commit</li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/templates/changelog/changelog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/templates/changelog/changelog.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9jaGFuZ2Vsb2cvY2hhbmdlbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/templates/changelog/changelog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/templates/changelog/changelog.component.ts ***!
  \************************************************************/
/*! exports provided: ChangelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogComponent", function() { return ChangelogComponent; });
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

var ChangelogComponent = /** @class */ (function () {
    function ChangelogComponent() {
    }
    ChangelogComponent.prototype.ngOnInit = function () {
    };
    ChangelogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changelog',
            template: __webpack_require__(/*! ./changelog.component.html */ "./src/app/templates/changelog/changelog.component.html"),
            styles: [__webpack_require__(/*! ./changelog.component.scss */ "./src/app/templates/changelog/changelog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangelogComponent);
    return ChangelogComponent;
}());



/***/ }),

/***/ "./src/app/templates/error-page/error-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/templates/error-page/error-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div class=\"row justify-content-center mt-5\">\n    <div class=\"col col-md-8 text-center\">\n      <h1>ERROR: Not Available in Demo Version</h1>\n      <p class=\"lead mt-4\">\n        Sorry, This preview is not available in the demo version.<br /><br />\n        <b>Thank you for looking through my project</b><br /><br />\n        Please contact me at\n        <a href=\"mailto:stevenjackson.sanguine@gmail.com\"\n          >stevenjackson.sanguine@gmail.com</a\n        >\n        for the most up to date preview or wait until further development has\n        been completed.\n        <br />\n        <br />\n        Kind Regards<br />\n        Steven\n      </p>\n      <a class=\"btn btn-primary\" routerLink=\"/\">Return to Main Page</a>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/error-page/error-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/templates/error-page/error-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "b {\n  font-size: 1.3rem;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2Vycm9yLXBhZ2UvRTpcXHdhbXA2NFxcd3d3XFxwcm90b3R5cGVfaHRtbFxcYW5ndWxhci9zcmNcXGFwcFxcdGVtcGxhdGVzXFxlcnJvci1wYWdlXFxlcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxhdGVzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImIge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */"

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

module.exports = ".card {\n  margin: 2.5rem 0rem;\n  padding: 1rem;\n  min-height: 350px;\n  box-shadow: 6px 6px 12px -8px;\n  transition: linear all 0.3s; }\n  .card:hover {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  .card .card-text {\n    min-height: 60px; }\n  .container {\n  padding: 0;\n  margin-top: 1rem; }\n  .container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2hvbWVwYWdlL2hvbWVwYWdlLWJsb2Nrcy9FOlxcd2FtcDY0XFx3d3dcXHByb3RvdHlwZV9odG1sXFxhbmd1bGFyL3NyY1xcYXBwXFxzY3NzXFxtb2R1bGVzXFxzaGFyZWRcXHNoYXJlZC5jb21wb25lbnQuY2FyZC5zY3NzIiwic3JjL2FwcC90ZW1wbGF0ZXMvaG9tZXBhZ2UvaG9tZXBhZ2UtYmxvY2tzL0U6XFx3YW1wNjRcXHd3d1xccHJvdG90eXBlX2h0bWxcXGFuZ3VsYXIvc3JjXFxhcHBcXHRlbXBsYXRlc1xcaG9tZXBhZ2VcXGhvbWVwYWdlLWJsb2Nrc1xcaG9tZXBhZ2UtY2FyZC1ibG9ja3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsMkJBQTJCLEVBQUE7RUFMN0I7SUFRSSw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUE7RUFSekI7SUFXSSxnQkFBZ0IsRUFBQTtFQ1RwQjtFQUNFLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTtFQUdsQjtFQUNFLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxhdGVzL2hvbWVwYWdlL2hvbWVwYWdlLWJsb2Nrcy9ob21lcGFnZS1jYXJkLWJsb2Nrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBtYXJnaW46IDIuNXJlbSAwcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxMnB4IC04cHg7XHJcbiAgdHJhbnNpdGlvbjogbGluZWFyIGFsbCAwLjNzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbiAgLmNhcmQtdGV4dCB7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICd+c3JjL2FwcC9zY3NzL21vZHVsZXMvc2hhcmVkL3NoYXJlZC5jb21wb25lbnQuY2FyZCc7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXItd3JhcHBlciBhIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gM3JlbTtcclxufVxyXG4iXX0= */"

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
            selector: 'app-homepage-card-blocks',
            template: "\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <img\n          alt=\"Card image cap\"\n          class=\"card-img-top img-fluid\"\n          src=\"./assets/homepage-icons/{{ blockImage }}.png\"\n        />\n        <div class=\"card-body text-center\">\n          <h4 class=\"card-title\">{{ blockName }}</h4>\n          <p class=\"card-text\">Contains: {{ blockContains }}</p>\n          <a class=\"btn btn-primary btn-lg\" [routerLink]=\"blockRouterLink\">{{\n            blockName\n          }}</a>\n        </div>\n      </div>\n    </div>\n  ",
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

module.exports = "<main>\n  <div\n    class=\"alert alert-success alert-dismissible fade show text-center\"\n    role=\"alert\"\n  >\n    <div class=\"container\">\n      <strong>Prototype Commit History</strong> <br />\n\n      View Private Prototype Commit History <br /><a routerLink=\"./changelog\"\n        >View</a\n      >\n      <button\n        type=\"button\"\n        class=\"close\"\n        data-dismiss=\"alert\"\n        aria-label=\"Close\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"container-wrapper\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <app-homepage-card-blocks\n          *ngFor=\"let block of homepageBlocks\"\n          blockName=\"{{ block.blockName }}\"\n          blockContains=\" {{ block.blockContains }}\"\n          blockImage=\"{{ block.blockImage }}\"\n          blockRouterLink=\"{{ block.blockRouterLink }}\"\n          class=\"col-md-4 col-lg-3 col-sm-6 col-xs-12\"\n        ></app-homepage-card-blocks>\n      </div>\n    </div>\n  </div>\n</main>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/templates/homepage/homepage.component.scss":
/*!************************************************************!*\
  !*** ./src/app/templates/homepage/homepage.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

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
                blockName: 'Languages',
                blockContains: 'HTML 5, CSS 3, Javascript, PHP, MySQL',
                blockImage: 'languages-image',
                blockRouterLink: '/languages-landing-page'
            },
            {
                blockName: 'Frameworks',
                blockContains: 'Bootstrap',
                blockImage: 'bootstrap',
                blockRouterLink: '/frameworks-landing-page'
            },
            {
                blockName: 'Libraries',
                blockContains: 'jQuery',
                blockImage: 'jquery',
                blockRouterLink: '/libraries-landing-page'
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
            selector: 'app-homepage',
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

module.exports = ".row {\n  margin: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2xheW91dHMvZm9vdGVyL0U6XFx3YW1wNjRcXHd3d1xccHJvdG90eXBlX2h0bWxcXGFuZ3VsYXIvc3JjXFxhcHBcXHRlbXBsYXRlc1xcbGF5b3V0c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

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

module.exports = "<header>\n  <div class=\"row no-gutters\">\n    <div class=\"col-md-12 text-center\">\n      <p class=\"m-0 p-4\">\n        <a routerLink=\"/\"> Prototype Demo - 23 April 2019 - Update</a>\n      </p>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/templates/layouts/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/templates/layouts/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background-color: #282828; }\n\na {\n  color: #fff;\n  font-size: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2xheW91dHMvaGVhZGVyL0U6XFx3YW1wNjRcXHd3d1xccHJvdG90eXBlX2h0bWxcXGFuZ3VsYXIvc3JjXFxhcHBcXHRlbXBsYXRlc1xcbGF5b3V0c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkFINEIsRUFBQTs7QUFNOUI7RUFDRSxXQVJVO0VBU1YsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZXMvbGF5b3V0cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZmZmO1xyXG4kYmFja2dyb3VuZC1kYXJrLWdyZXk6ICMyODI4Mjg7XHJcblxyXG5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWRhcmstZ3JleTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4iXX0= */"

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

/***/ "./src/app/templates/pages/frameworks/angular-landing-page/angular-landing-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/angular-landing-page/angular-landing-page.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  angular-landing-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/templates/pages/frameworks/angular-landing-page/angular-landing-page.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/angular-landing-page/angular-landing-page.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9wYWdlcy9mcmFtZXdvcmtzL2FuZ3VsYXItbGFuZGluZy1wYWdlL2FuZ3VsYXItbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/templates/pages/frameworks/angular-landing-page/angular-landing-page.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/angular-landing-page/angular-landing-page.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AngularLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularLandingPageComponent", function() { return AngularLandingPageComponent; });
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

var AngularLandingPageComponent = /** @class */ (function () {
    function AngularLandingPageComponent() {
    }
    AngularLandingPageComponent.prototype.ngOnInit = function () {
    };
    AngularLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-landing-page',
            template: __webpack_require__(/*! ./angular-landing-page.component.html */ "./src/app/templates/pages/frameworks/angular-landing-page/angular-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./angular-landing-page.component.scss */ "./src/app/templates/pages/frameworks/angular-landing-page/angular-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularLandingPageComponent);
    return AngularLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/frameworks/angularjs-landing-page/angularjs-landing-page.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/angularjs-landing-page/angularjs-landing-page.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  angularjs-landing-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/templates/pages/frameworks/angularjs-landing-page/angularjs-landing-page.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/angularjs-landing-page/angularjs-landing-page.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9wYWdlcy9mcmFtZXdvcmtzL2FuZ3VsYXJqcy1sYW5kaW5nLXBhZ2UvYW5ndWxhcmpzLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/templates/pages/frameworks/angularjs-landing-page/angularjs-landing-page.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/angularjs-landing-page/angularjs-landing-page.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AngularjsLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularjsLandingPageComponent", function() { return AngularjsLandingPageComponent; });
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

var AngularjsLandingPageComponent = /** @class */ (function () {
    function AngularjsLandingPageComponent() {
    }
    AngularjsLandingPageComponent.prototype.ngOnInit = function () {
    };
    AngularjsLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angularjs-landing-page',
            template: __webpack_require__(/*! ./angularjs-landing-page.component.html */ "./src/app/templates/pages/frameworks/angularjs-landing-page/angularjs-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./angularjs-landing-page.component.scss */ "./src/app/templates/pages/frameworks/angularjs-landing-page/angularjs-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularjsLandingPageComponent);
    return AngularjsLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div\n    *ngIf=\"!isShowingRouteLoadIndicator\"\n    class=\"text-center justify-content-center \"\n  >\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/bootstrap.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>Custom Bootstrap Module</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Contacts, Contents, Cta, Features, Footers, Forms, Headers, Layouts,\n          Sidebars, Teams, Testimonials, Logins, Register, Search, User Cards,\n          User Profile, Dashboard, Project Summary, PricingTables\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load Custom Bootstrap Module</a\n          >\n        </p>\n      </div>\n    </div>\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/bootstrap.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>Bootstrap Components Module</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Cards, Alerts, Badges, ButtonBasic, ButtonExtended, Callout, Carousel,\n          Collapse, Dropdowns, Listgroup, MediaObjects, Modals, Navs,\n          Pagination, PillBadges, Pills, Popovers, Progress, Scrollable,\n          Spinners, Tabs, Tooltips, Forms, Galleries, Tables\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load Bootstrap Components Module</a\n          >\n        </p>\n      </div>\n    </div>\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/bootstrap.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>Bootstrap Reference Module</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Classes, Buttons, Dropdowns, Forms, Grid, Helpers, Images, JsAffix,\n          JsAlert, JsButton, JsCarousel, JsCollapse, JsModal, JsPopover,\n          JsScrollspy, JsTab, JsTooltip, Navigtation, Tables, Typography\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load Bootstrap Reference Module</a\n          >\n        </p>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n\n  <!-- I indicate that a router module is being loaded asynchronously. -->\n  <div *ngIf=\"isShowingRouteLoadIndicator\" class=\"router-load-indicator\">\n    <div class=\"row loader-wrapper text-center\">\n      <div class=\"col-md-12 m-5\">\n        <div class=\"loader\"></div>\n        <p class=\"mt-5\">Loading Module</p>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper {\n  font-size: 1.6rem; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #28282808;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.container {\n  padding: 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n.row {\n  padding: 2rem 0;\n  border-bottom: 1px solid #c3c3c3; }\n\n@media screen and (max-width: 600px) {\n  .col-12 {\n    text-align: center !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL3BhZ2VzL2ZyYW1ld29ya3MvYm9vdHN0cmFwLWxhbmRpbmctcGFnZS9FOlxcd2FtcDY0XFx3d3dcXHByb3RvdHlwZV9odG1sXFxhbmd1bGFyL3NyY1xcYXBwXFxzY3NzXFxtb2R1bGVzXFxzaGFyZWRcXHNoYXJlZC5sYW5kaW5nLXBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLDBCQUEwQjtFQUFFLGVBQUE7RUFDNUIsZ0NBTjhCO0VBTWdCLFNBQUE7RUFDOUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMENBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyxjQUFjLEVBQUE7O0FBR2hCO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTs7QUFMN0I7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUk3QjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGVBQWU7RUFDZixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRTtJQUNFLDZCQUE2QixFQUFBLEVBQzlCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxhdGVzL3BhZ2VzL2ZyYW1ld29ya3MvYm9vdHN0cmFwLWxhbmRpbmctcGFnZS9ib290c3RyYXAtbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhY2tncm91bmQtZGFyay1ncmV5OiAjMjgyODI4MDg7XHJcbi5sb2FkZXItd3JhcHBlciB7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICRiYWNrZ3JvdW5kLWRhcmstZ3JleTsgLyogQmx1ZSAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXdyYXBwZXIgYSB7XHJcbiAgcGFkZGluZzogMC41cmVtIDNyZW07XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MzYzNjMztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29sLTEyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component.ts ***!
  \*******************************************************************************************************/
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
            template: __webpack_require__(/*! ./bootstrap-landing-page.component.html */ "./src/app/templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./bootstrap-landing-page.component.scss */ "./src/app/templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BootstrapLandingPageComponent);
    return BootstrapLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/frameworks/frameworks-landing-page.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/frameworks-landing-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container-wrapper\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <app-homepage-card-blocks\n          *ngFor=\"let block of homepageBlocks\"\n          blockName=\"{{ block.blockName }}\"\n          blockContains=\" {{ block.blockContains }}\"\n          blockImage=\"{{ block.blockImage }}\"\n          blockRouterLink=\"{{ block.blockRouterLink }}\"\n          class=\"col-md-4 col-lg-3 col-sm-6 col-xs-12\"\n        ></app-homepage-card-blocks>\n      </div>\n    </div>\n  </div>\n</main>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/templates/pages/frameworks/frameworks-landing-page.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/frameworks-landing-page.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9wYWdlcy9mcmFtZXdvcmtzL2ZyYW1ld29ya3MtbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/templates/pages/frameworks/frameworks-landing-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/frameworks-landing-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FrameworksLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworksLandingPageComponent", function() { return FrameworksLandingPageComponent; });
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

var FrameworksLandingPageComponent = /** @class */ (function () {
    function FrameworksLandingPageComponent() {
        this.homepageBlocks = [
            {
                blockName: "Bootstrap",
                blockContains: "Prebuild Components and References",
                blockImage: "bootstrap",
                blockRouterLink: "/bootstrap-landing-page"
            }
        ];
    }
    FrameworksLandingPageComponent.prototype.ngOnInit = function () { };
    FrameworksLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-frameworks-landing-page",
            template: __webpack_require__(/*! ./frameworks-landing-page.component.html */ "./src/app/templates/pages/frameworks/frameworks-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./frameworks-landing-page.component.scss */ "./src/app/templates/pages/frameworks/frameworks-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FrameworksLandingPageComponent);
    return FrameworksLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/frameworks/react-landing-page/react-landing-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/react-landing-page/react-landing-page.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  react-landing-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/templates/pages/frameworks/react-landing-page/react-landing-page.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/react-landing-page/react-landing-page.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9wYWdlcy9mcmFtZXdvcmtzL3JlYWN0LWxhbmRpbmctcGFnZS9yZWFjdC1sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/templates/pages/frameworks/react-landing-page/react-landing-page.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/react-landing-page/react-landing-page.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ReactLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactLandingPageComponent", function() { return ReactLandingPageComponent; });
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

var ReactLandingPageComponent = /** @class */ (function () {
    function ReactLandingPageComponent() {
    }
    ReactLandingPageComponent.prototype.ngOnInit = function () {
    };
    ReactLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-react-landing-page',
            template: __webpack_require__(/*! ./react-landing-page.component.html */ "./src/app/templates/pages/frameworks/react-landing-page/react-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./react-landing-page.component.scss */ "./src/app/templates/pages/frameworks/react-landing-page/react-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReactLandingPageComponent);
    return ReactLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/frameworks/vue-landing-page/vue-landing-page.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/vue-landing-page/vue-landing-page.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  vue-landing-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/templates/pages/frameworks/vue-landing-page/vue-landing-page.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/vue-landing-page/vue-landing-page.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9wYWdlcy9mcmFtZXdvcmtzL3Z1ZS1sYW5kaW5nLXBhZ2UvdnVlLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/templates/pages/frameworks/vue-landing-page/vue-landing-page.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/templates/pages/frameworks/vue-landing-page/vue-landing-page.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: VueLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueLandingPageComponent", function() { return VueLandingPageComponent; });
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

var VueLandingPageComponent = /** @class */ (function () {
    function VueLandingPageComponent() {
    }
    VueLandingPageComponent.prototype.ngOnInit = function () {
    };
    VueLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vue-landing-page',
            template: __webpack_require__(/*! ./vue-landing-page.component.html */ "./src/app/templates/pages/frameworks/vue-landing-page/vue-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./vue-landing-page.component.scss */ "./src/app/templates/pages/frameworks/vue-landing-page/vue-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VueLandingPageComponent);
    return VueLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div\n    *ngIf=\"!isShowingRouteLoadIndicator\"\n    class=\"text-center justify-content-center \"\n  >\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS Extra</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Fullscreen Video, Modal Boxes, Timeline, Scroll Indicator, Progress\n          Bars, Skill Bar, Range Sliders, Tooltips, Popups, Collapsible,\n          Calendar, Html Includes, TodoList, Loaders, Star Rating, User Rating,\n          Overlay Effect, Contact Chips, Cards, Flip Card, Profile Card,\n          ProductCard, Alerts, Callout, Notes, Labels, Circles, Coupon, List\n          Group, Responsive Text, Cutout Text, Glowing Text, Fixed Footer,\n          Sticky Element, Equal Height, Clearfix, Responsive Floats, Snackbar,\n          Fullscreen Window, Scroll Drawing, Smooth Scroll, Gradient Bg Scroll,\n          Sticky Header, Pricing Table, Parallax, Aspect Ratio, Toggle\n          Like/Dislike, Toggle Hide/Show, Toggle Text, Toggle Class, Add Class,\n          Remove Class, Active Class, Tree View, Remove Property, Offline\n          Detection, Find Hidden Element, Redirect Webpage, ZoomHover, FlipBox,\n          CenterVertically, TransitionOnHover, Arrows, Shapes, Download Link,\n          Full Height Element, Browser Window, Custom Scrollbar, Device Look,\n          Placeholder Color, Text Selection Color, Bullet Color, Vertical Line,\n          Animate Icons, Countdown Timer, Typewriter, Coming Soon Page, Chat\n          Messages, Popup Chat Window, Split Screen, Testimonials, Section\n          Counter, Quotes Slideshow, Closable List Items, Typical Device\n          Breakpoints, Draggable Html Element, JS Media Queries, Syntax\n          Highlighter, JS Animations, Iframe Elements\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load CSS Filters Module</a\n          >\n        </p>\n      </div>\n    </div>\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS Buttons</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Alert, Outline, Split, Animated, Fading, On Image, Social Media, Read\n          More/Less, Loading, Download, Pill, Notification, Icon, Next/Prev, In\n          Nav, Block, Text, Round, ScrollToTop\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load CSS Buttons Module</a\n          >\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS Forms</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Login, Signup, Checkout, Contact, Sociallogin, Register, Form with\n          icons, Newsletter, Stacked, Responsive, Popup, Inline, Clear input\n          field, Copy text to clipboard, Animated search, Search button,\n          Fullscreen search, Inputinnavbar, Login form in navbar, Custom\n          checkbox radio, Custom select, Toggleswitch, Check checkbox, Detect\n          capslock, Trigger button on enter, Password validation, Toggle\n          password visibility, Multiplestep form, Autocomplete\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load CSS Forms Module</a\n          >\n        </p>\n      </div>\n    </div>\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS Images</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Slideshows, Modal Images, Lightbox, ImageGrids, Tab Gallery,\n          ImageOverlays, Image Effects, Image Text, FullPage Image, Form On\n          Image, Hero Image, Blur Background Image, Change Bg On Scroll, Side By\n          Side Images, Rounded Images, Avatar Images, Responsive Images, Center\n          Images, Thumbnails, Meet The Team, Sticky Image, Flip A Image, Shake A\n          Image, Portfolio Gallery, Portfolio Filtering, Image Zoom, Image\n          Maginifier Glass, Image Comparison Slider\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load CSS Images Module</a\n          >\n        </p>\n      </div>\n    </div>\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS Menus</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Icon Bar, Menu Icon, Accordion, Tabs, Vertical Tabs, Tab Headers,\n          FullPage Tabs, Hover Tabs, Top Navigation, Responsive TopNav, Navbar\n          Icons, Search Bar, Search Menu, Sidebars, Fullscreen Navigation,\n          OffCanvas Menu, Horizontal ScrollMenu, Vertical Menu, Responsive\n          Bottom Nav, Bottom Border Nav Links, Right Aligned Menu Links,\n          Centered Menu Links, Equal Width Menu Links, Fixed Menu, Slide Down\n          Bar On Scroll, Hide Navbar On Scroll, Shrink Navbar On Scroll, Sticky\n          Navbar, Navbar On Image, Hover Dropdowns, Click Dropdowns, Dropdown In\n          Topnav, Dropdown In Sidenav, Responsive Navbar Dropdown, Sub\n          navigation Menu, Dropup, Mega Menu, Mobile Menu, Collapsed Side panel,\n          Curtain Menu, Pagination, Breadcrumbs, Button Group, Vertical Button\n          Group, Sticky Social Bar, Pill Navigation, Responsive Header, Side\n          Navigation]\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load CSS Menus Module</a\n          >\n        </p>\n      </div>\n    </div>\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS Tables</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Stripped Table, Responsive Table, Comparison Table\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load CSS Tables Module</a\n          >\n        </p>\n      </div>\n    </div>\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS Filters</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          List, Table, Elements, Dropdown, Sort List, Sort Table\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load CSS Filters Module</a\n          >\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- I indicate that a router module is being loaded asynchronously. -->\n  <div *ngIf=\"isShowingRouteLoadIndicator\" class=\"router-load-indicator\">\n    <div class=\"row loader-wrapper text-center\">\n      <div class=\"col-md-12 m-5\">\n        <div class=\"loader\"></div>\n        <p class=\"mt-5\">Loading Module</p>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper {\n  font-size: 1.6rem; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #28282808;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.container {\n  padding: 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n.row {\n  padding: 2rem 0;\n  border-bottom: 1px solid #c3c3c3; }\n\n@media screen and (max-width: 600px) {\n  .col-12 {\n    text-align: center !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL3BhZ2VzL2xhbmd1YWdlcy9jc3MtbGFuZGluZy1wYWdlL2Nzcy1jb21wb25lbnRzLWxhbmRpbmctcGFnZS9FOlxcd2FtcDY0XFx3d3dcXHByb3RvdHlwZV9odG1sXFxhbmd1bGFyL3NyY1xcYXBwXFxzY3NzXFxtb2R1bGVzXFxzaGFyZWRcXHNoYXJlZC5sYW5kaW5nLXBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLDBCQUEwQjtFQUFFLGVBQUE7RUFDNUIsZ0NBTjhCO0VBTWdCLFNBQUE7RUFDOUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMENBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyxjQUFjLEVBQUE7O0FBR2hCO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTs7QUFMN0I7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUk3QjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGVBQWU7RUFDZixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRTtJQUNFLDZCQUE2QixFQUFBLEVBQzlCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxhdGVzL3BhZ2VzL2xhbmd1YWdlcy9jc3MtbGFuZGluZy1wYWdlL2Nzcy1jb21wb25lbnRzLWxhbmRpbmctcGFnZS9jc3MtY29tcG9uZW50cy1sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFja2dyb3VuZC1kYXJrLWdyZXk6ICMyODI4MjgwODtcclxuLmxvYWRlci13cmFwcGVyIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxufVxyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgJGJhY2tncm91bmQtZGFyay1ncmV5OyAvKiBCbHVlICovXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXItd3JhcHBlciBhIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gM3JlbTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzNjM2MzO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb2wtMTIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: CssComponentsLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssComponentsLandingPageComponent", function() { return CssComponentsLandingPageComponent; });
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




var CssComponentsLandingPageComponent = /** @class */ (function () {
    // I initialize the app view component.
    function CssComponentsLandingPageComponent(router) {
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
    CssComponentsLandingPageComponent.prototype.ngOnInit = function () { };
    CssComponentsLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-css-components-landing-page",
            template: __webpack_require__(/*! ./css-components-landing-page.component.html */ "./src/app/templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./css-components-landing-page.component.scss */ "./src/app/templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CssComponentsLandingPageComponent);
    return CssComponentsLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/languages/css-landing-page/css-landing-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/css-landing-page/css-landing-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div\n    *ngIf=\"!isShowingRouteLoadIndicator\"\n    class=\"text-center justify-content-center \"\n  >\n    <!-- <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS 3 Snippets</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Accordions, Timelines, Buttons\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/css-snippets\"\n            >Load CSS 3 Snippets Module</a\n          >\n        </p>\n      </div>\n    </div> -->\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS Components Module</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Buttons, Filters, Forms, Images, Menus, Other, Tables\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/css-components-landing-page\"\n            >Open CSS Components Module</a\n          >\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS 3 Advanced</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />Rounded Corners, Border Images, Backgrounds,\n          Colors, Gradients, Shadows, Text Effects, WebFonts, Transforms,\n          Transitions, Animations, Tooltips, Images, Object Fit, Buttons,\n          Pagination, Multiple Columns, Resize Outline/Offset, Variables,\n          BoxSizing, FlexBox, Media Queries, Grids\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load CSS 3 Advanced Module</a\n          >\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/css3.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>CSS 3 Basics</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />Animatable, Colors, Default Values, Entities,\n          Functions, Reference, Selectors, Units, WebFonts, Px/Em Convertor\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load CSS 3 Basic Module</a\n          >\n        </p>\n      </div>\n      /\n    </div>\n  </div>\n\n  <!-- I indicate that a router module is being loaded asynchronously. -->\n  <div *ngIf=\"isShowingRouteLoadIndicator\" class=\"router-load-indicator\">\n    <div class=\"row loader-wrapper text-center\">\n      <div class=\"col-md-12 m-5\">\n        <div class=\"loader\"></div>\n        <p class=\"mt-5\">Loading Module</p>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/pages/languages/css-landing-page/css-landing-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/css-landing-page/css-landing-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper {\n  font-size: 1.6rem; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #28282808;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.container {\n  padding: 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n.row {\n  padding: 2rem 0;\n  border-bottom: 1px solid #c3c3c3; }\n\n@media screen and (max-width: 600px) {\n  .col-12 {\n    text-align: center !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL3BhZ2VzL2xhbmd1YWdlcy9jc3MtbGFuZGluZy1wYWdlL0U6XFx3YW1wNjRcXHd3d1xccHJvdG90eXBlX2h0bWxcXGFuZ3VsYXIvc3JjXFxhcHBcXHNjc3NcXG1vZHVsZXNcXHNoYXJlZFxcc2hhcmVkLmxhbmRpbmctcGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsMEJBQTBCO0VBQUUsZUFBQTtFQUM1QixnQ0FOOEI7RUFNZ0IsU0FBQTtFQUM5QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLGNBQWMsRUFBQTs7QUFHaEI7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUw3QjtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7O0FBSTdCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFO0lBQ0UsNkJBQTZCLEVBQUEsRUFDOUIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZXMvcGFnZXMvbGFuZ3VhZ2VzL2Nzcy1sYW5kaW5nLXBhZ2UvY3NzLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrZ3JvdW5kLWRhcmstZ3JleTogIzI4MjgyODA4O1xyXG4ubG9hZGVyLXdyYXBwZXIge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcbi5sb2FkZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAkYmFja2dyb3VuZC1kYXJrLWdyZXk7IC8qIEJsdWUgKi9cclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci13cmFwcGVyIGEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjM2MzYzM7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbC0xMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/templates/pages/languages/css-landing-page/css-landing-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/css-landing-page/css-landing-page.component.ts ***!
  \******************************************************************************************/
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
            template: __webpack_require__(/*! ./css-landing-page.component.html */ "./src/app/templates/pages/languages/css-landing-page/css-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./css-landing-page.component.scss */ "./src/app/templates/pages/languages/css-landing-page/css-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CssLandingPageComponent);
    return CssLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/languages/html-landing-page/html-landing-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/html-landing-page/html-landing-page.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div\n    *ngIf=\"!isShowingRouteLoadIndicator\"\n    class=\"text-center justify-content-center \"\n  >\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/html5.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>HTML 5</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />Reference: Attributes, Audio, Video, Canvas,\n          Colors, Events, Tags <br /><br />\n          Dom: Attributes, Console, Document, Element, Event Objects, Events,\n          Geolocation, History, Location, Navigator, Storage, Style, Window\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/html\">Open HTML 5 Module</a>\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- I indicate that a router module is being loaded asynchronously. -->\n  <div *ngIf=\"isShowingRouteLoadIndicator\" class=\"router-load-indicator\">\n    <div class=\"row loader-wrapper text-center\">\n      <div class=\"col-md-12 m-5\">\n        <div class=\"loader\"></div>\n        <p class=\"mt-5\">Loading Module</p>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/pages/languages/html-landing-page/html-landing-page.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/html-landing-page/html-landing-page.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper {\n  font-size: 1.6rem; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #28282808;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.container {\n  padding: 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n.row {\n  padding: 2rem 0;\n  border-bottom: 1px solid #c3c3c3; }\n\n@media screen and (max-width: 600px) {\n  .col-12 {\n    text-align: center !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL3BhZ2VzL2xhbmd1YWdlcy9odG1sLWxhbmRpbmctcGFnZS9FOlxcd2FtcDY0XFx3d3dcXHByb3RvdHlwZV9odG1sXFxhbmd1bGFyL3NyY1xcYXBwXFxzY3NzXFxtb2R1bGVzXFxzaGFyZWRcXHNoYXJlZC5sYW5kaW5nLXBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLDBCQUEwQjtFQUFFLGVBQUE7RUFDNUIsZ0NBTjhCO0VBTWdCLFNBQUE7RUFDOUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMENBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyxjQUFjLEVBQUE7O0FBR2hCO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTs7QUFMN0I7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUk3QjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGVBQWU7RUFDZixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRTtJQUNFLDZCQUE2QixFQUFBLEVBQzlCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxhdGVzL3BhZ2VzL2xhbmd1YWdlcy9odG1sLWxhbmRpbmctcGFnZS9odG1sLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrZ3JvdW5kLWRhcmstZ3JleTogIzI4MjgyODA4O1xyXG4ubG9hZGVyLXdyYXBwZXIge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcbi5sb2FkZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAkYmFja2dyb3VuZC1kYXJrLWdyZXk7IC8qIEJsdWUgKi9cclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci13cmFwcGVyIGEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjM2MzYzM7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbC0xMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/templates/pages/languages/html-landing-page/html-landing-page.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/html-landing-page/html-landing-page.component.ts ***!
  \********************************************************************************************/
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
            template: __webpack_require__(/*! ./html-landing-page.component.html */ "./src/app/templates/pages/languages/html-landing-page/html-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./html-landing-page.component.scss */ "./src/app/templates/pages/languages/html-landing-page/html-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HtmlLandingPageComponent);
    return HtmlLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/languages/javascript-landing-page/javascript-landing-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/javascript-landing-page/javascript-landing-page.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div\n    *ngIf=\"!isShowingRouteLoadIndicator\"\n    class=\"text-center justify-content-center \"\n  >\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/javascript.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>Javascript Reference Module</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />Arrays, Math, DateTime, Operators, Statements,\n          Strings\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load Javascript Module</a\n          >\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- I indicate that a router module is being loaded asynchronously. -->\n  <div *ngIf=\"isShowingRouteLoadIndicator\" class=\"router-load-indicator\">\n    <div class=\"row loader-wrapper text-center\">\n      <div class=\"col-md-12 m-5\">\n        <div class=\"loader\"></div>\n        <p class=\"mt-5\">Loading Module</p>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/pages/languages/javascript-landing-page/javascript-landing-page.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/javascript-landing-page/javascript-landing-page.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper {\n  font-size: 1.6rem; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #28282808;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.container {\n  padding: 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n.row {\n  padding: 2rem 0;\n  border-bottom: 1px solid #c3c3c3; }\n\n@media screen and (max-width: 600px) {\n  .col-12 {\n    text-align: center !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL3BhZ2VzL2xhbmd1YWdlcy9qYXZhc2NyaXB0LWxhbmRpbmctcGFnZS9FOlxcd2FtcDY0XFx3d3dcXHByb3RvdHlwZV9odG1sXFxhbmd1bGFyL3NyY1xcYXBwXFxzY3NzXFxtb2R1bGVzXFxzaGFyZWRcXHNoYXJlZC5sYW5kaW5nLXBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLDBCQUEwQjtFQUFFLGVBQUE7RUFDNUIsZ0NBTjhCO0VBTWdCLFNBQUE7RUFDOUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMENBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyxjQUFjLEVBQUE7O0FBR2hCO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTs7QUFMN0I7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUk3QjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGVBQWU7RUFDZixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRTtJQUNFLDZCQUE2QixFQUFBLEVBQzlCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxhdGVzL3BhZ2VzL2xhbmd1YWdlcy9qYXZhc2NyaXB0LWxhbmRpbmctcGFnZS9qYXZhc2NyaXB0LWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrZ3JvdW5kLWRhcmstZ3JleTogIzI4MjgyODA4O1xyXG4ubG9hZGVyLXdyYXBwZXIge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcbi5sb2FkZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAkYmFja2dyb3VuZC1kYXJrLWdyZXk7IC8qIEJsdWUgKi9cclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci13cmFwcGVyIGEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjM2MzYzM7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbC0xMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/templates/pages/languages/javascript-landing-page/javascript-landing-page.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/javascript-landing-page/javascript-landing-page.component.ts ***!
  \********************************************************************************************************/
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
            template: __webpack_require__(/*! ./javascript-landing-page.component.html */ "./src/app/templates/pages/languages/javascript-landing-page/javascript-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./javascript-landing-page.component.scss */ "./src/app/templates/pages/languages/javascript-landing-page/javascript-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], JavascriptLandingPageComponent);
    return JavascriptLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/languages/languages-landing-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/templates/pages/languages/languages-landing-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container-wrapper\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <app-homepage-card-blocks\n          *ngFor=\"let block of homepageBlocks\"\n          blockName=\"{{ block.blockName }}\"\n          blockContains=\" {{ block.blockContains }}\"\n          blockImage=\"{{ block.blockImage }}\"\n          blockRouterLink=\"{{ block.blockRouterLink }}\"\n          class=\"col-md-4 col-lg-3 col-sm-6 col-xs-12\"\n        ></app-homepage-card-blocks>\n      </div>\n    </div>\n  </div>\n</main>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/templates/pages/languages/languages-landing-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/templates/pages/languages/languages-landing-page.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9wYWdlcy9sYW5ndWFnZXMvbGFuZ3VhZ2VzLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/templates/pages/languages/languages-landing-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/templates/pages/languages/languages-landing-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LanguagesLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesLandingPageComponent", function() { return LanguagesLandingPageComponent; });
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

var LanguagesLandingPageComponent = /** @class */ (function () {
    function LanguagesLandingPageComponent() {
        this.homepageBlocks = [
            {
                blockName: "HTML 5",
                blockContains: "HTML5 and DOM References",
                blockImage: "html5",
                blockRouterLink: "/html-landing-page"
            },
            {
                blockName: "CSS 3",
                blockContains: "CSS Basic, Advanced, Snippets and References",
                blockImage: "css3",
                blockRouterLink: "/css-landing-page"
            },
            {
                blockName: "Javascript",
                blockContains: "Frameworks, Components and References",
                blockImage: "javascript",
                blockRouterLink: "/javascript-landing-page"
            },
            {
                blockName: "PHP",
                blockContains: "Frameworks and References",
                blockImage: "php",
                blockRouterLink: "/php-landing-page"
            },
            {
                blockName: "MySql",
                blockContains: "MySql References",
                blockImage: "mysql",
                blockRouterLink: "/sql-landing-page"
            }
        ];
    }
    LanguagesLandingPageComponent.prototype.ngOnInit = function () { };
    LanguagesLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-languages-landing-page",
            template: __webpack_require__(/*! ./languages-landing-page.component.html */ "./src/app/templates/pages/languages/languages-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./languages-landing-page.component.scss */ "./src/app/templates/pages/languages/languages-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LanguagesLandingPageComponent);
    return LanguagesLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/languages/php-landing-page/php-landing-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/php-landing-page/php-landing-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div\n    *ngIf=\"!isShowingRouteLoadIndicator\"\n    class=\"text-center justify-content-center \"\n  >\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/php.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>PHP Reference Module</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Ajax, Arrays, Cookies, DateTime, Error Handling, FileUpload, Filters,\n          Sessions, Mysql, Array, Calendar, Date, Directory, Error, Files, Http,\n          Mail, Math, Misc, Xml, String, Zip\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\"\n            >Load PHP Reference Module</a\n          >\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- I indicate that a router module is being loaded asynchronously. -->\n  <div *ngIf=\"isShowingRouteLoadIndicator\" class=\"router-load-indicator\">\n    <div class=\"row loader-wrapper text-center\">\n      <div class=\"col-md-12 m-5\">\n        <div class=\"loader\"></div>\n        <p class=\"mt-5\">Loading Module</p>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/pages/languages/php-landing-page/php-landing-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/php-landing-page/php-landing-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper {\n  font-size: 1.6rem; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #28282808;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.container {\n  padding: 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n.row {\n  padding: 2rem 0;\n  border-bottom: 1px solid #c3c3c3; }\n\n@media screen and (max-width: 600px) {\n  .col-12 {\n    text-align: center !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL3BhZ2VzL2xhbmd1YWdlcy9waHAtbGFuZGluZy1wYWdlL0U6XFx3YW1wNjRcXHd3d1xccHJvdG90eXBlX2h0bWxcXGFuZ3VsYXIvc3JjXFxhcHBcXHNjc3NcXG1vZHVsZXNcXHNoYXJlZFxcc2hhcmVkLmxhbmRpbmctcGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsMEJBQTBCO0VBQUUsZUFBQTtFQUM1QixnQ0FOOEI7RUFNZ0IsU0FBQTtFQUM5QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLGNBQWMsRUFBQTs7QUFHaEI7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUw3QjtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7O0FBSTdCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFO0lBQ0UsNkJBQTZCLEVBQUEsRUFDOUIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZXMvcGFnZXMvbGFuZ3VhZ2VzL3BocC1sYW5kaW5nLXBhZ2UvcGhwLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrZ3JvdW5kLWRhcmstZ3JleTogIzI4MjgyODA4O1xyXG4ubG9hZGVyLXdyYXBwZXIge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcbi5sb2FkZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAkYmFja2dyb3VuZC1kYXJrLWdyZXk7IC8qIEJsdWUgKi9cclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci13cmFwcGVyIGEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjM2MzYzM7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbC0xMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/templates/pages/languages/php-landing-page/php-landing-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/php-landing-page/php-landing-page.component.ts ***!
  \******************************************************************************************/
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
            template: __webpack_require__(/*! ./php-landing-page.component.html */ "./src/app/templates/pages/languages/php-landing-page/php-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./php-landing-page.component.scss */ "./src/app/templates/pages/languages/php-landing-page/php-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PhpLandingPageComponent);
    return PhpLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/languages/sql-landing-page/sql-landing-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/sql-landing-page/sql-landing-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div\n    *ngIf=\"!isShowingRouteLoadIndicator\"\n    class=\"text-center justify-content-center \"\n  >\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/mysql.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>SQL Module</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />\n          Reference, MySql Functions, Server Functions, MsAccess Functions,\n          Operators, Data Types\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\">Load SQL Module</a>\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- I indicate that a router module is being loaded asynchronously. -->\n  <div *ngIf=\"isShowingRouteLoadIndicator\" class=\"router-load-indicator\">\n    <div class=\"row loader-wrapper text-center\">\n      <div class=\"col-md-12 m-5\">\n        <div class=\"loader\"></div>\n        <p class=\"mt-5\">Loading Module</p>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/pages/languages/sql-landing-page/sql-landing-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/sql-landing-page/sql-landing-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper {\n  font-size: 1.6rem; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #28282808;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.container {\n  padding: 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n.row {\n  padding: 2rem 0;\n  border-bottom: 1px solid #c3c3c3; }\n\n@media screen and (max-width: 600px) {\n  .col-12 {\n    text-align: center !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL3BhZ2VzL2xhbmd1YWdlcy9zcWwtbGFuZGluZy1wYWdlL0U6XFx3YW1wNjRcXHd3d1xccHJvdG90eXBlX2h0bWxcXGFuZ3VsYXIvc3JjXFxhcHBcXHNjc3NcXG1vZHVsZXNcXHNoYXJlZFxcc2hhcmVkLmxhbmRpbmctcGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsMEJBQTBCO0VBQUUsZUFBQTtFQUM1QixnQ0FOOEI7RUFNZ0IsU0FBQTtFQUM5QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLGNBQWMsRUFBQTs7QUFHaEI7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUw3QjtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7O0FBSTdCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFO0lBQ0UsNkJBQTZCLEVBQUEsRUFDOUIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZXMvcGFnZXMvbGFuZ3VhZ2VzL3NxbC1sYW5kaW5nLXBhZ2Uvc3FsLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrZ3JvdW5kLWRhcmstZ3JleTogIzI4MjgyODA4O1xyXG4ubG9hZGVyLXdyYXBwZXIge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcbi5sb2FkZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAkYmFja2dyb3VuZC1kYXJrLWdyZXk7IC8qIEJsdWUgKi9cclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci13cmFwcGVyIGEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjM2MzYzM7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbC0xMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/templates/pages/languages/sql-landing-page/sql-landing-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/templates/pages/languages/sql-landing-page/sql-landing-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SqlLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlLandingPageComponent", function() { return SqlLandingPageComponent; });
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




var SqlLandingPageComponent = /** @class */ (function () {
    // I initialize the app view component.
    function SqlLandingPageComponent(router) {
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
    SqlLandingPageComponent.prototype.ngOnInit = function () { };
    SqlLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-sql-landing-page",
            template: __webpack_require__(/*! ./sql-landing-page.component.html */ "./src/app/templates/pages/languages/sql-landing-page/sql-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./sql-landing-page.component.scss */ "./src/app/templates/pages/languages/sql-landing-page/sql-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SqlLandingPageComponent);
    return SqlLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/libraries/jquery-landing-page/jquery-landing-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/templates/pages/libraries/jquery-landing-page/jquery-landing-page.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div\n    *ngIf=\"!isShowingRouteLoadIndicator\"\n    class=\"text-center justify-content-center \"\n  >\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0\">\n        <img\n          alt=\"image\"\n          class=\"img-fluid\"\n          src=\"./assets/homepage-icons/jquery.png\"\n        />\n      </div>\n      <div class=\"col-12 col-md-8 ml-auto pt-5 pt-md-0 text-left\">\n        <h2>jQuery Reference Module</h2>\n        <p class=\"lead\">\n          <b>Contains:</b> <br />Selectors, Events, Effects, Html/Css,\n          Traversing, Ajax, Misc, Properties\n        </p>\n        <p class=\"mt-4\">\n          <a class=\"btn btn-primary\" routerLink=\"/error\">Load jQuery Module</a>\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- I indicate that a router module is being loaded asynchronously. -->\n  <div *ngIf=\"isShowingRouteLoadIndicator\" class=\"router-load-indicator\">\n    <div class=\"row loader-wrapper text-center\">\n      <div class=\"col-md-12 m-5\">\n        <div class=\"loader\"></div>\n        <p class=\"mt-5\">Loading Module</p>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/templates/pages/libraries/jquery-landing-page/jquery-landing-page.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/templates/pages/libraries/jquery-landing-page/jquery-landing-page.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper {\n  font-size: 1.6rem; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #28282808;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.container {\n  padding: 0; }\n\n.container-wrapper a {\n  padding: 0.5rem 3rem; }\n\n.row {\n  padding: 2rem 0;\n  border-bottom: 1px solid #c3c3c3; }\n\n@media screen and (max-width: 600px) {\n  .col-12 {\n    text-align: center !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL3BhZ2VzL2xpYnJhcmllcy9qcXVlcnktbGFuZGluZy1wYWdlL0U6XFx3YW1wNjRcXHd3d1xccHJvdG90eXBlX2h0bWxcXGFuZ3VsYXIvc3JjXFxhcHBcXHNjc3NcXG1vZHVsZXNcXHNoYXJlZFxcc2hhcmVkLmxhbmRpbmctcGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsMEJBQTBCO0VBQUUsZUFBQTtFQUM1QixnQ0FOOEI7RUFNZ0IsU0FBQTtFQUM5QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLGNBQWMsRUFBQTs7QUFHaEI7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUw3QjtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7O0FBSTdCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFO0lBQ0UsNkJBQTZCLEVBQUEsRUFDOUIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZXMvcGFnZXMvbGlicmFyaWVzL2pxdWVyeS1sYW5kaW5nLXBhZ2UvanF1ZXJ5LWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrZ3JvdW5kLWRhcmstZ3JleTogIzI4MjgyODA4O1xyXG4ubG9hZGVyLXdyYXBwZXIge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcbi5sb2FkZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAkYmFja2dyb3VuZC1kYXJrLWdyZXk7IC8qIEJsdWUgKi9cclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci13cmFwcGVyIGEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjM2MzYzM7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbC0xMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/templates/pages/libraries/jquery-landing-page/jquery-landing-page.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/templates/pages/libraries/jquery-landing-page/jquery-landing-page.component.ts ***!
  \************************************************************************************************/
/*! exports provided: JqueryLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JqueryLandingPageComponent", function() { return JqueryLandingPageComponent; });
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




var JqueryLandingPageComponent = /** @class */ (function () {
    // I initialize the app view component.
    function JqueryLandingPageComponent(router) {
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
    JqueryLandingPageComponent.prototype.ngOnInit = function () { };
    JqueryLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-jquery-landing-page",
            template: __webpack_require__(/*! ./jquery-landing-page.component.html */ "./src/app/templates/pages/libraries/jquery-landing-page/jquery-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./jquery-landing-page.component.scss */ "./src/app/templates/pages/libraries/jquery-landing-page/jquery-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], JqueryLandingPageComponent);
    return JqueryLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/libraries/libraries-landing-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/templates/pages/libraries/libraries-landing-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container-wrapper\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <app-homepage-card-blocks\n          *ngFor=\"let block of homepageBlocks\"\n          blockName=\"{{ block.blockName }}\"\n          blockContains=\" {{ block.blockContains }}\"\n          blockImage=\"{{ block.blockImage }}\"\n          blockRouterLink=\"{{ block.blockRouterLink }}\"\n          class=\"col-md-4 col-lg-3 col-sm-6 col-xs-12\"\n        ></app-homepage-card-blocks>\n      </div>\n    </div>\n  </div>\n</main>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/templates/pages/libraries/libraries-landing-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/templates/pages/libraries/libraries-landing-page.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9wYWdlcy9saWJyYXJpZXMvbGlicmFyaWVzLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/templates/pages/libraries/libraries-landing-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/templates/pages/libraries/libraries-landing-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LibrariesLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrariesLandingPageComponent", function() { return LibrariesLandingPageComponent; });
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

var LibrariesLandingPageComponent = /** @class */ (function () {
    function LibrariesLandingPageComponent() {
        this.homepageBlocks = [
            {
                blockName: "jQuery",
                blockContains: "jQuery References",
                blockImage: "jquery",
                blockRouterLink: "/jquery-landing-page"
            }
        ];
    }
    LibrariesLandingPageComponent.prototype.ngOnInit = function () { };
    LibrariesLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-libraries-landing-page",
            template: __webpack_require__(/*! ./libraries-landing-page.component.html */ "./src/app/templates/pages/libraries/libraries-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./libraries-landing-page.component.scss */ "./src/app/templates/pages/libraries/libraries-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LibrariesLandingPageComponent);
    return LibrariesLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/other-landing-page/nodejs-landing-page/nodejs-landing-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/templates/pages/other-landing-page/nodejs-landing-page/nodejs-landing-page.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nodejs-landing-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/templates/pages/other-landing-page/nodejs-landing-page/nodejs-landing-page.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/templates/pages/other-landing-page/nodejs-landing-page/nodejs-landing-page.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9wYWdlcy9vdGhlci1sYW5kaW5nLXBhZ2Uvbm9kZWpzLWxhbmRpbmctcGFnZS9ub2RlanMtbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/templates/pages/other-landing-page/nodejs-landing-page/nodejs-landing-page.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/templates/pages/other-landing-page/nodejs-landing-page/nodejs-landing-page.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: NodejsLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodejsLandingPageComponent", function() { return NodejsLandingPageComponent; });
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

var NodejsLandingPageComponent = /** @class */ (function () {
    function NodejsLandingPageComponent() {
    }
    NodejsLandingPageComponent.prototype.ngOnInit = function () {
    };
    NodejsLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nodejs-landing-page',
            template: __webpack_require__(/*! ./nodejs-landing-page.component.html */ "./src/app/templates/pages/other-landing-page/nodejs-landing-page/nodejs-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./nodejs-landing-page.component.scss */ "./src/app/templates/pages/other-landing-page/nodejs-landing-page/nodejs-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NodejsLandingPageComponent);
    return NodejsLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/other-landing-page/other-landing-page.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/templates/pages/other-landing-page/other-landing-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main></main>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/templates/pages/other-landing-page/other-landing-page.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/templates/pages/other-landing-page/other-landing-page.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9wYWdlcy9vdGhlci1sYW5kaW5nLXBhZ2Uvb3RoZXItbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/templates/pages/other-landing-page/other-landing-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/templates/pages/other-landing-page/other-landing-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: OtherLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherLandingPageComponent", function() { return OtherLandingPageComponent; });
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

var OtherLandingPageComponent = /** @class */ (function () {
    function OtherLandingPageComponent() {
    }
    OtherLandingPageComponent.prototype.ngOnInit = function () { };
    OtherLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-other-landing-page",
            template: __webpack_require__(/*! ./other-landing-page.component.html */ "./src/app/templates/pages/other-landing-page/other-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./other-landing-page.component.scss */ "./src/app/templates/pages/other-landing-page/other-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherLandingPageComponent);
    return OtherLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/templates/pages/projects-landing-page/projects-landing-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/templates/pages/projects-landing-page/projects-landing-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <app-homepage-card-blocks\n    *ngFor=\"let block of homepageBlocks\"\n    blockName=\"{{ block.blockName }}\"\n    blockContains=\" {{ block.blockContains }}\"\n    blockImage=\"{{ block.blockImage }}\"\n    blockRouterLink=\"{{ block.blockRouterLink }}\"\n  ></app-homepage-card-blocks>\n</main>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/templates/pages/projects-landing-page/projects-landing-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/templates/pages/projects-landing-page/projects-landing-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9wYWdlcy9wcm9qZWN0cy1sYW5kaW5nLXBhZ2UvcHJvamVjdHMtbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/templates/pages/projects-landing-page/projects-landing-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/templates/pages/projects-landing-page/projects-landing-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProjectsLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsLandingPageComponent", function() { return ProjectsLandingPageComponent; });
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

var ProjectsLandingPageComponent = /** @class */ (function () {
    function ProjectsLandingPageComponent() {
        this.homepageBlocks = [
            {
                blockName: "CSS 3",
                blockContains: "CSS Basic, Advanced, Snippets and References",
                blockImage: "css3",
                blockRouterLink: "/css-landing-page"
            }
        ];
    }
    ProjectsLandingPageComponent.prototype.ngOnInit = function () { };
    ProjectsLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-projects-landing-page",
            template: __webpack_require__(/*! ./projects-landing-page.component.html */ "./src/app/templates/pages/projects-landing-page/projects-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./projects-landing-page.component.scss */ "./src/app/templates/pages/projects-landing-page/projects-landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsLandingPageComponent);
    return ProjectsLandingPageComponent;
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