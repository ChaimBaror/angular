(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comps_jiraff_comp_jiraff_comp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps/jiraff-comp/jiraff-comp.component */ "./src/app/comps/jiraff-comp/jiraff-comp.component.ts");
/* harmony import */ var _comps_rabitt_comp_rabitt_comp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/rabitt-comp/rabitt-comp.component */ "./src/app/comps/rabitt-comp/rabitt-comp.component.ts");
/* harmony import */ var _comps_tiger_comps_tiger_comps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/tiger-comps/tiger-comps.component */ "./src/app/comps/tiger-comps/tiger-comps.component.ts");
/* harmony import */ var _comps_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/calculator/calculator.component */ "./src/app/comps/calculator/calculator.component.ts");
/* harmony import */ var _comps_calculator_results_calculator_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/calculator-results/calculator-results.component */ "./src/app/comps/calculator-results/calculator-results.component.ts");







class AppComponent {
    constructor() {
        this.title = 'homeworking';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-jiraff-comp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-rabitt-comp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-tiger-comps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-calculator-results");
    } }, directives: [_comps_jiraff_comp_jiraff_comp_component__WEBPACK_IMPORTED_MODULE_1__["JiraffCompComponent"], _comps_rabitt_comp_rabitt_comp_component__WEBPACK_IMPORTED_MODULE_2__["RabittCompComponent"], _comps_tiger_comps_tiger_comps_component__WEBPACK_IMPORTED_MODULE_3__["TigerCompsComponent"], _comps_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__["CalculatorComponent"], _comps_calculator_results_calculator_results_component__WEBPACK_IMPORTED_MODULE_5__["CalculatorResultsComponent"]], styles: ["div[_ngcontent-%COMP%]{\r\n    background: turquoise;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgYmFja2dyb3VuZDogdHVycXVvaXNlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_jiraff_comp_jiraff_comp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/jiraff-comp/jiraff-comp.component */ "./src/app/comps/jiraff-comp/jiraff-comp.component.ts");
/* harmony import */ var _comps_jiraff_comp_h1_jiraff_h1_jiraff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/jiraff-comp/h1-jiraff/h1-jiraff.component */ "./src/app/comps/jiraff-comp/h1-jiraff/h1-jiraff.component.ts");
/* harmony import */ var _comps_jiraff_comp_li_jiraff_li_jiraff_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/jiraff-comp/li-jiraff/li-jiraff.component */ "./src/app/comps/jiraff-comp/li-jiraff/li-jiraff.component.ts");
/* harmony import */ var _comps_jiraff_comp_footer_jiraff_footer_jiraff_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/jiraff-comp/footer-jiraff/footer-jiraff.component */ "./src/app/comps/jiraff-comp/footer-jiraff/footer-jiraff.component.ts");
/* harmony import */ var _comps_rabitt_comp_rabitt_comp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/rabitt-comp/rabitt-comp.component */ "./src/app/comps/rabitt-comp/rabitt-comp.component.ts");
/* harmony import */ var _comps_rabitt_comp_footer_rab_footer_rab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/rabitt-comp/footer-rab/footer-rab.component */ "./src/app/comps/rabitt-comp/footer-rab/footer-rab.component.ts");
/* harmony import */ var _comps_rabitt_comp_ul_rab_ul_rab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/rabitt-comp/ul-rab/ul-rab.component */ "./src/app/comps/rabitt-comp/ul-rab/ul-rab.component.ts");
/* harmony import */ var _comps_rabitt_comp_h1_rab_h1_rab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/rabitt-comp/h1-rab/h1-rab.component */ "./src/app/comps/rabitt-comp/h1-rab/h1-rab.component.ts");
/* harmony import */ var _comps_tiger_comps_tiger_comps_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/tiger-comps/tiger-comps.component */ "./src/app/comps/tiger-comps/tiger-comps.component.ts");
/* harmony import */ var _comps_tiger_comps_h1_tig_h1_tig_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/tiger-comps/h1-tig/h1-tig.component */ "./src/app/comps/tiger-comps/h1-tig/h1-tig.component.ts");
/* harmony import */ var _comps_tiger_comps_footer_tig_footer_tig_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/tiger-comps/footer-tig/footer-tig.component */ "./src/app/comps/tiger-comps/footer-tig/footer-tig.component.ts");
/* harmony import */ var _comps_tiger_comps_ul_tig_ul_tig_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comps/tiger-comps/ul-tig/ul-tig.component */ "./src/app/comps/tiger-comps/ul-tig/ul-tig.component.ts");
/* harmony import */ var _comps_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comps/calculator/calculator.component */ "./src/app/comps/calculator/calculator.component.ts");
/* harmony import */ var _comps_calculator_results_calculator_results_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comps/calculator-results/calculator-results.component */ "./src/app/comps/calculator-results/calculator-results.component.ts");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _comps_jiraff_comp_jiraff_comp_component__WEBPACK_IMPORTED_MODULE_4__["JiraffCompComponent"],
        _comps_jiraff_comp_h1_jiraff_h1_jiraff_component__WEBPACK_IMPORTED_MODULE_5__["H1JiraffComponent"],
        _comps_jiraff_comp_li_jiraff_li_jiraff_component__WEBPACK_IMPORTED_MODULE_6__["LiJiraffComponent"],
        _comps_jiraff_comp_footer_jiraff_footer_jiraff_component__WEBPACK_IMPORTED_MODULE_7__["FooterJiraffComponent"],
        _comps_rabitt_comp_rabitt_comp_component__WEBPACK_IMPORTED_MODULE_8__["RabittCompComponent"],
        _comps_rabitt_comp_footer_rab_footer_rab_component__WEBPACK_IMPORTED_MODULE_9__["FooterRabComponent"],
        _comps_rabitt_comp_ul_rab_ul_rab_component__WEBPACK_IMPORTED_MODULE_10__["UlRabComponent"],
        _comps_rabitt_comp_h1_rab_h1_rab_component__WEBPACK_IMPORTED_MODULE_11__["H1RabComponent"],
        _comps_tiger_comps_tiger_comps_component__WEBPACK_IMPORTED_MODULE_12__["TigerCompsComponent"],
        _comps_tiger_comps_h1_tig_h1_tig_component__WEBPACK_IMPORTED_MODULE_13__["H1TigComponent"],
        _comps_tiger_comps_footer_tig_footer_tig_component__WEBPACK_IMPORTED_MODULE_14__["FooterTigComponent"],
        _comps_tiger_comps_ul_tig_ul_tig_component__WEBPACK_IMPORTED_MODULE_15__["UlTigComponent"],
        _comps_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_16__["CalculatorComponent"],
        _comps_calculator_results_calculator_results_component__WEBPACK_IMPORTED_MODULE_17__["CalculatorResultsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _comps_jiraff_comp_jiraff_comp_component__WEBPACK_IMPORTED_MODULE_4__["JiraffCompComponent"],
                    _comps_jiraff_comp_h1_jiraff_h1_jiraff_component__WEBPACK_IMPORTED_MODULE_5__["H1JiraffComponent"],
                    _comps_jiraff_comp_li_jiraff_li_jiraff_component__WEBPACK_IMPORTED_MODULE_6__["LiJiraffComponent"],
                    _comps_jiraff_comp_footer_jiraff_footer_jiraff_component__WEBPACK_IMPORTED_MODULE_7__["FooterJiraffComponent"],
                    _comps_rabitt_comp_rabitt_comp_component__WEBPACK_IMPORTED_MODULE_8__["RabittCompComponent"],
                    _comps_rabitt_comp_footer_rab_footer_rab_component__WEBPACK_IMPORTED_MODULE_9__["FooterRabComponent"],
                    _comps_rabitt_comp_ul_rab_ul_rab_component__WEBPACK_IMPORTED_MODULE_10__["UlRabComponent"],
                    _comps_rabitt_comp_h1_rab_h1_rab_component__WEBPACK_IMPORTED_MODULE_11__["H1RabComponent"],
                    _comps_tiger_comps_tiger_comps_component__WEBPACK_IMPORTED_MODULE_12__["TigerCompsComponent"],
                    _comps_tiger_comps_h1_tig_h1_tig_component__WEBPACK_IMPORTED_MODULE_13__["H1TigComponent"],
                    _comps_tiger_comps_footer_tig_footer_tig_component__WEBPACK_IMPORTED_MODULE_14__["FooterTigComponent"],
                    _comps_tiger_comps_ul_tig_ul_tig_component__WEBPACK_IMPORTED_MODULE_15__["UlTigComponent"],
                    _comps_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_16__["CalculatorComponent"],
                    _comps_calculator_results_calculator_results_component__WEBPACK_IMPORTED_MODULE_17__["CalculatorResultsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comps/calculator-results/calculator-results.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/comps/calculator-results/calculator-results.component.ts ***!
  \**************************************************************************/
/*! exports provided: CalculatorResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorResultsComponent", function() { return CalculatorResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_srevices_mycalcoulatorservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/srevices/mycalcoulatorservice.service */ "./src/app/srevices/mycalcoulatorservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CalculatorResultsComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r1, " ");
} }
class CalculatorResultsComponent {
    constructor(InputerSvc) {
        this.InputerSvc = InputerSvc;
    }
    ngOnInit() {
    }
}
CalculatorResultsComponent.ɵfac = function CalculatorResultsComponent_Factory(t) { return new (t || CalculatorResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_srevices_mycalcoulatorservice_service__WEBPACK_IMPORTED_MODULE_1__["MycalcoulatorserviceService"])); };
CalculatorResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculatorResultsComponent, selectors: [["app-calculator-results"]], decls: 6, vars: 1, consts: [[2, "text-align", "center"], ["style", "background: rgb(156, 170, 196)", 4, "ngFor", "ngForOf"], [2, "background", "rgb(156, 170, 196)"]], template: function CalculatorResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "calculator-results works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "this is result: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CalculatorResultsComponent_li_5_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.InputerSvc.imputArr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NhbGN1bGF0b3ItcmVzdWx0cy9jYWxjdWxhdG9yLXJlc3VsdHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculator-results',
                templateUrl: './calculator-results.component.html',
                styleUrls: ['./calculator-results.component.css']
            }]
    }], function () { return [{ type: src_app_srevices_mycalcoulatorservice_service__WEBPACK_IMPORTED_MODULE_1__["MycalcoulatorserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/calculator/calculator.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/calculator/calculator.component.ts ***!
  \**********************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_srevices_mycalcoulatorservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/srevices/mycalcoulatorservice.service */ "./src/app/srevices/mycalcoulatorservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function CalculatorComponent_li_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r1, " ");
} }
class CalculatorComponent {
    constructor(InputerSvc) {
        this.InputerSvc = InputerSvc;
        this.screen = "";
        this.results = [];
    }
    num(srt) {
        this.screen += srt;
        if (this.number1 == null)
            this.number1 = srt;
        else
            this.number2 = srt;
    }
    delete() {
        this.screen = "";
        this.number1 = 0;
        this.number2 = 0;
        this.result = '';
        this.results = [];
        this.InputerSvc.imputArr = [];
    }
    eqall() {
        this.result = this.screen + " = " + eval(this.screen);
        this.results.push(eval(this.screen));
        this.InputerSvc.imputArr.push(this.screen + " = " + eval(this.screen));
        this.screen = "";
    }
    sum() {
        this.results.push(this.result = this.number1 + this.number2);
    }
    diff() {
        this.results.push(this.result = this.number1 - this.number2);
    }
    mult() {
        this.results.push(this.result = this.number1 * this.number2);
    }
    divi() {
        this.results.push(this.result = this.number1 / this.number2);
    }
    ngOnInit() {
    }
}
CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) { return new (t || CalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_srevices_mycalcoulatorservice_service__WEBPACK_IMPORTED_MODULE_1__["MycalcoulatorserviceService"])); };
CalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculatorComponent, selectors: [["app-calculator"]], decls: 102, vars: 8, consts: [[1, "input"], ["for", ""], ["type", "number", 3, "ngModel", "ngModelChange"], [1, "buttons"], [1, "but", 3, "click"], [2, "color", "gray", "background", "black", "width", "15%", 3, "value"], [2, "color", "white", "background", "black", "font-size", "30px", "width", "15%", 3, "value"], [1, "butcalculater"], [1, "butt", 3, "click"], [1, "butt", 2, "width", "10%", 3, "click"], [4, "ngFor", "ngForOf"]], template: function CalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "calculator works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "number 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_6_listener($event) { return ctx.number1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "number 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_9_listener($event) { return ctx.number2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_12_listener() { return ctx.sum(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_15_listener() { return ctx.diff(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_18_listener() { return ctx.mult(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_21_listener() { return ctx.divi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00F7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Display screen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_34_listener() { return ctx.num("%"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u2052 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_37_listener() { return ctx.num("^"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " ^ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_40_listener() { return ctx.num("+"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_43_listener() { return ctx.num("-"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_46_listener() { return ctx.num("*"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u2055 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_49_listener() { return ctx.num("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u00F7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_54_listener() { return ctx.num("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_57_listener() { return ctx.num("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_60_listener() { return ctx.num("3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_63_listener() { return ctx.num("4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_68_listener() { return ctx.num("5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_71_listener() { return ctx.num("6"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " 6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_74_listener() { return ctx.num("7"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " 7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_77_listener() { return ctx.num("8"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " 8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_82_listener() { return ctx.num("9"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_85_listener() { return ctx.num("0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_88_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_93_listener() { return ctx.eqall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "this is result: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, CalculatorComponent_li_101_Template, 2, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.number1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.number2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.screen)("value", ctx.results);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.number2)("value", ctx.number1)("value", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.results);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["div[_ngcontent-%COMP%]{\r\n   \r\n    text-align: center;\r\n    background: thistle;\r\n}\r\n.butt[_ngcontent-%COMP%]{\r\n    background: rosybrown;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kscUJBQXFCOztBQUV6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHRoaXN0bGU7XHJcbn1cclxuLmJ1dHR7XHJcbiAgICBiYWNrZ3JvdW5kOiByb3N5YnJvd247XHJcbiAgICBcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculator',
                templateUrl: './calculator.component.html',
                styleUrls: ['./calculator.component.css']
            }]
    }], function () { return [{ type: src_app_srevices_mycalcoulatorservice_service__WEBPACK_IMPORTED_MODULE_1__["MycalcoulatorserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/jiraff-comp/footer-jiraff/footer-jiraff.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/comps/jiraff-comp/footer-jiraff/footer-jiraff.component.ts ***!
  \****************************************************************************/
/*! exports provided: FooterJiraffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterJiraffComponent", function() { return FooterJiraffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterJiraffComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterJiraffComponent.ɵfac = function FooterJiraffComponent_Factory(t) { return new (t || FooterJiraffComponent)(); };
FooterJiraffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterJiraffComponent, selectors: [["app-footer-jiraff"]], decls: 2, vars: 0, template: function FooterJiraffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sophie the giraffe warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%]{\r\n\r\n    margin: 5px;\r\n    padding: 10px;\r\n    background: ivory;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvamlyYWZmLWNvbXAvZm9vdGVyLWppcmFmZi9mb290ZXItamlyYWZmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9qaXJhZmYtY29tcC9mb290ZXItamlyYWZmL2Zvb3Rlci1qaXJhZmYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuXHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBpdm9yeTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterJiraffComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-jiraff',
                templateUrl: './footer-jiraff.component.html',
                styleUrls: ['./footer-jiraff.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/jiraff-comp/h1-jiraff/h1-jiraff.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/comps/jiraff-comp/h1-jiraff/h1-jiraff.component.ts ***!
  \********************************************************************/
/*! exports provided: H1JiraffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1JiraffComponent", function() { return H1JiraffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class H1JiraffComponent {
    constructor() {
        this.jiraff = "JIRAFF";
    }
    ngOnInit() {
    }
}
H1JiraffComponent.ɵfac = function H1JiraffComponent_Factory(t) { return new (t || H1JiraffComponent)(); };
H1JiraffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: H1JiraffComponent, selectors: [["app-h1-jiraff"]], decls: 2, vars: 1, template: function H1JiraffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jiraff);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmZi1jb21wL2gxLWppcmFmZi9oMS1qaXJhZmYuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](H1JiraffComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-h1-jiraff',
                templateUrl: './h1-jiraff.component.html',
                styleUrls: ['./h1-jiraff.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/jiraff-comp/jiraff-comp.component.ts":
/*!************************************************************!*\
  !*** ./src/app/comps/jiraff-comp/jiraff-comp.component.ts ***!
  \************************************************************/
/*! exports provided: JiraffCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraffCompComponent", function() { return JiraffCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _h1_jiraff_h1_jiraff_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h1-jiraff/h1-jiraff.component */ "./src/app/comps/jiraff-comp/h1-jiraff/h1-jiraff.component.ts");
/* harmony import */ var _li_jiraff_li_jiraff_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./li-jiraff/li-jiraff.component */ "./src/app/comps/jiraff-comp/li-jiraff/li-jiraff.component.ts");
/* harmony import */ var _footer_jiraff_footer_jiraff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer-jiraff/footer-jiraff.component */ "./src/app/comps/jiraff-comp/footer-jiraff/footer-jiraff.component.ts");





class JiraffCompComponent {
    constructor() { }
    ngOnInit() {
    }
}
JiraffCompComponent.ɵfac = function JiraffCompComponent_Factory(t) { return new (t || JiraffCompComponent)(); };
JiraffCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JiraffCompComponent, selectors: [["app-jiraff-comp"]], decls: 6, vars: 0, template: function JiraffCompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "jiraff-comp works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-h1-jiraff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-li-jiraff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer-jiraff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_h1_jiraff_h1_jiraff_component__WEBPACK_IMPORTED_MODULE_1__["H1JiraffComponent"], _li_jiraff_li_jiraff_component__WEBPACK_IMPORTED_MODULE_2__["LiJiraffComponent"], _footer_jiraff_footer_jiraff_component__WEBPACK_IMPORTED_MODULE_3__["FooterJiraffComponent"]], styles: ["div[_ngcontent-%COMP%]{\r\n    border: salmon 1px solid;\r\n    margin: 5px;\r\n    padding: 10px;\r\n    background: ivory;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvamlyYWZmLWNvbXAvamlyYWZmLWNvbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmZi1jb21wL2ppcmFmZi1jb21wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICBib3JkZXI6IHNhbG1vbiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBpdm9yeTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JiraffCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jiraff-comp',
                templateUrl: './jiraff-comp.component.html',
                styleUrls: ['./jiraff-comp.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/jiraff-comp/li-jiraff/li-jiraff.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/comps/jiraff-comp/li-jiraff/li-jiraff.component.ts ***!
  \********************************************************************/
/*! exports provided: LiJiraffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiJiraffComponent", function() { return LiJiraffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LiJiraffComponent {
    constructor() { }
    ngOnInit() {
    }
}
LiJiraffComponent.ɵfac = function LiJiraffComponent_Factory(t) { return new (t || LiJiraffComponent)(); };
LiJiraffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiJiraffComponent, selectors: [["app-li-jiraff"]], decls: 8, vars: 0, template: function LiJiraffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "jango");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "jojo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "jenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmZi1jb21wL2xpLWppcmFmZi9saS1qaXJhZmYuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiJiraffComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-li-jiraff',
                templateUrl: './li-jiraff.component.html',
                styleUrls: ['./li-jiraff.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/rabitt-comp/footer-rab/footer-rab.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/comps/rabitt-comp/footer-rab/footer-rab.component.ts ***!
  \**********************************************************************/
/*! exports provided: FooterRabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRabComponent", function() { return FooterRabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterRabComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterRabComponent.ɵfac = function FooterRabComponent_Factory(t) { return new (t || FooterRabComponent)(); };
FooterRabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterRabComponent, selectors: [["app-footer-rab"]], decls: 2, vars: 0, template: function FooterRabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rabbit is so cute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3JhYml0dC1jb21wL2Zvb3Rlci1yYWIvZm9vdGVyLXJhYi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterRabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-rab',
                templateUrl: './footer-rab.component.html',
                styleUrls: ['./footer-rab.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/rabitt-comp/h1-rab/h1-rab.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/comps/rabitt-comp/h1-rab/h1-rab.component.ts ***!
  \**************************************************************/
/*! exports provided: H1RabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1RabComponent", function() { return H1RabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class H1RabComponent {
    constructor() { }
    ngOnInit() {
    }
}
H1RabComponent.ɵfac = function H1RabComponent_Factory(t) { return new (t || H1RabComponent)(); };
H1RabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: H1RabComponent, selectors: [["app-h1-rab"]], decls: 2, vars: 0, consts: [[1, "rabbit"]], template: function H1RabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "H1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RABBIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".rabbit[_ngcontent-%COMP%]{\r\n    color: bisque;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcmFiaXR0LWNvbXAvaDEtcmFiL2gxLXJhYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3JhYml0dC1jb21wL2gxLXJhYi9oMS1yYWIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYWJiaXR7XHJcbiAgICBjb2xvcjogYmlzcXVlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](H1RabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-h1-rab',
                templateUrl: './h1-rab.component.html',
                styleUrls: ['./h1-rab.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/rabitt-comp/rabitt-comp.component.ts":
/*!************************************************************!*\
  !*** ./src/app/comps/rabitt-comp/rabitt-comp.component.ts ***!
  \************************************************************/
/*! exports provided: RabittCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RabittCompComponent", function() { return RabittCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _h1_rab_h1_rab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h1-rab/h1-rab.component */ "./src/app/comps/rabitt-comp/h1-rab/h1-rab.component.ts");
/* harmony import */ var _ul_rab_ul_rab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ul-rab/ul-rab.component */ "./src/app/comps/rabitt-comp/ul-rab/ul-rab.component.ts");
/* harmony import */ var _footer_rab_footer_rab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer-rab/footer-rab.component */ "./src/app/comps/rabitt-comp/footer-rab/footer-rab.component.ts");





class RabittCompComponent {
    constructor() { }
    ngOnInit() {
    }
}
RabittCompComponent.ɵfac = function RabittCompComponent_Factory(t) { return new (t || RabittCompComponent)(); };
RabittCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RabittCompComponent, selectors: [["app-rabitt-comp"]], decls: 6, vars: 0, template: function RabittCompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "rabitt-comp works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-h1-rab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-ul-rab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer-rab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_h1_rab_h1_rab_component__WEBPACK_IMPORTED_MODULE_1__["H1RabComponent"], _ul_rab_ul_rab_component__WEBPACK_IMPORTED_MODULE_2__["UlRabComponent"], _footer_rab_footer_rab_component__WEBPACK_IMPORTED_MODULE_3__["FooterRabComponent"]], styles: ["div[_ngcontent-%COMP%]{\r\n    border: salmon 1px solid;\r\n  \r\n        margin: 5px;\r\n        padding: 10px;\r\n        background: ivory;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcmFiaXR0LWNvbXAvcmFiaXR0LWNvbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3Qjs7UUFFcEIsV0FBVztRQUNYLGFBQWE7UUFDYixpQkFBaUI7O0FBRXpCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvcmFiaXR0LWNvbXAvcmFiaXR0LWNvbXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGJvcmRlcjogc2FsbW9uIDFweCBzb2xpZDtcclxuICBcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGl2b3J5O1xyXG4gIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RabittCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rabitt-comp',
                templateUrl: './rabitt-comp.component.html',
                styleUrls: ['./rabitt-comp.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/rabitt-comp/ul-rab/ul-rab.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/comps/rabitt-comp/ul-rab/ul-rab.component.ts ***!
  \**************************************************************/
/*! exports provided: UlRabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UlRabComponent", function() { return UlRabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UlRabComponent {
    constructor() { }
    ngOnInit() {
    }
}
UlRabComponent.ɵfac = function UlRabComponent_Factory(t) { return new (t || UlRabComponent)(); };
UlRabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UlRabComponent, selectors: [["app-ul-rab"]], decls: 8, vars: 0, template: function UlRabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "UL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "boni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "bemy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "bores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3JhYml0dC1jb21wL3VsLXJhYi91bC1yYWIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UlRabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ul-rab',
                templateUrl: './ul-rab.component.html',
                styleUrls: ['./ul-rab.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/tiger-comps/footer-tig/footer-tig.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/comps/tiger-comps/footer-tig/footer-tig.component.ts ***!
  \**********************************************************************/
/*! exports provided: FooterTigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterTigComponent", function() { return FooterTigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterTigComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterTigComponent.ɵfac = function FooterTigComponent_Factory(t) { return new (t || FooterTigComponent)(); };
FooterTigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterTigComponent, selectors: [["app-footer-tig"]], decls: 2, vars: 0, template: function FooterTigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tiger is king");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3RpZ2VyLWNvbXBzL2Zvb3Rlci10aWcvZm9vdGVyLXRpZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterTigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-tig',
                templateUrl: './footer-tig.component.html',
                styleUrls: ['./footer-tig.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/tiger-comps/h1-tig/h1-tig.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/comps/tiger-comps/h1-tig/h1-tig.component.ts ***!
  \**************************************************************/
/*! exports provided: H1TigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1TigComponent", function() { return H1TigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class H1TigComponent {
    constructor() { }
    ngOnInit() {
    }
}
H1TigComponent.ɵfac = function H1TigComponent_Factory(t) { return new (t || H1TigComponent)(); };
H1TigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: H1TigComponent, selectors: [["app-h1-tig"]], decls: 2, vars: 0, template: function H1TigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "TIGER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3RpZ2VyLWNvbXBzL2gxLXRpZy9oMS10aWcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](H1TigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-h1-tig',
                templateUrl: './h1-tig.component.html',
                styleUrls: ['./h1-tig.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/tiger-comps/tiger-comps.component.ts":
/*!************************************************************!*\
  !*** ./src/app/comps/tiger-comps/tiger-comps.component.ts ***!
  \************************************************************/
/*! exports provided: TigerCompsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TigerCompsComponent", function() { return TigerCompsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _h1_tig_h1_tig_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h1-tig/h1-tig.component */ "./src/app/comps/tiger-comps/h1-tig/h1-tig.component.ts");
/* harmony import */ var _ul_tig_ul_tig_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ul-tig/ul-tig.component */ "./src/app/comps/tiger-comps/ul-tig/ul-tig.component.ts");
/* harmony import */ var _footer_tig_footer_tig_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer-tig/footer-tig.component */ "./src/app/comps/tiger-comps/footer-tig/footer-tig.component.ts");





class TigerCompsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TigerCompsComponent.ɵfac = function TigerCompsComponent_Factory(t) { return new (t || TigerCompsComponent)(); };
TigerCompsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TigerCompsComponent, selectors: [["app-tiger-comps"]], decls: 6, vars: 0, template: function TigerCompsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "tiger-comps works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-h1-tig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-ul-tig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer-tig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_h1_tig_h1_tig_component__WEBPACK_IMPORTED_MODULE_1__["H1TigComponent"], _ul_tig_ul_tig_component__WEBPACK_IMPORTED_MODULE_2__["UlTigComponent"], _footer_tig_footer_tig_component__WEBPACK_IMPORTED_MODULE_3__["FooterTigComponent"]], styles: ["div[_ngcontent-%COMP%]{\r\n    border: salmon 1px solid;\r\n    margin: 5px;\r\n    padding: 10px;\r\n    background: ivory;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdGlnZXItY29tcHMvdGlnZXItY29tcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3RpZ2VyLWNvbXBzL3RpZ2VyLWNvbXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICBib3JkZXI6IHNhbG1vbiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBpdm9yeTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TigerCompsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tiger-comps',
                templateUrl: './tiger-comps.component.html',
                styleUrls: ['./tiger-comps.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/tiger-comps/ul-tig/ul-tig.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/comps/tiger-comps/ul-tig/ul-tig.component.ts ***!
  \**************************************************************/
/*! exports provided: UlTigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UlTigComponent", function() { return UlTigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UlTigComponent {
    constructor() { }
    ngOnInit() {
    }
}
UlTigComponent.ɵfac = function UlTigComponent_Factory(t) { return new (t || UlTigComponent)(); };
UlTigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UlTigComponent, selectors: [["app-ul-tig"]], decls: 7, vars: 0, template: function UlTigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "UL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "LI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "tommy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "tenne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "totolatiger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3RpZ2VyLWNvbXBzL3VsLXRpZy91bC10aWcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UlTigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ul-tig',
                templateUrl: './ul-tig.component.html',
                styleUrls: ['./ul-tig.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/srevices/mycalcoulatorservice.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/srevices/mycalcoulatorservice.service.ts ***!
  \**********************************************************/
/*! exports provided: MycalcoulatorserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycalcoulatorserviceService", function() { return MycalcoulatorserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MycalcoulatorserviceService {
    constructor() {
        this.imputArr = [];
    }
}
MycalcoulatorserviceService.ɵfac = function MycalcoulatorserviceService_Factory(t) { return new (t || MycalcoulatorserviceService)(); };
MycalcoulatorserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MycalcoulatorserviceService, factory: MycalcoulatorserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MycalcoulatorserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\stu\Desktop\HomeWork\angular\homeworking\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map