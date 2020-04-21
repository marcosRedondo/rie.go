(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["riego-modules-summary-summary-module"],{

/***/ "./src/app/modules/summary/components/measure-card/measure-card.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/summary/components/measure-card/measure-card.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MeasureCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureCardComponent", function() { return MeasureCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MeasureCardComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} }
function MeasureCardComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
} }
function MeasureCardComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
function MeasureCardComponent_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
class MeasureCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
MeasureCardComponent.ɵfac = function MeasureCardComponent_Factory(t) { return new (t || MeasureCardComponent)(); };
MeasureCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeasureCardComponent, selectors: [["measure-card"]], inputs: { measure: "measure" }, decls: 12, vars: 7, consts: [[1, "card", "bg-primary", "text-white"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "card-text", "fs-5rem"], ["class", "fa fa-tint", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-thermometer-full", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-leaf", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-sun-o", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-tint"], ["aria-hidden", "true", 1, "fa", "fa-thermometer-full"], ["aria-hidden", "true", 1, "fa", "fa-leaf"], ["aria-hidden", "true", 1, "fa", "fa-sun-o"]], template: function MeasureCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MeasureCardComponent_i_7_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MeasureCardComponent_i_8_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MeasureCardComponent_i_9_Template, 1, 0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MeasureCardComponent_i_10_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.measure.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.measure.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.measure.type == "humidity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.measure.type == "temperature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.measure.type == "soilmeasure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.measure.type == "brightness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.measure.value, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VtbWFyeS9jb21wb25lbnRzL21lYXN1cmUtY2FyZC9tZWFzdXJlLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeasureCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'measure-card',
                templateUrl: './measure-card.component.html',
                styleUrls: ['./measure-card.component.scss']
            }]
    }], function () { return []; }, { measure: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/summary/pages/summary/summary.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/summary/pages/summary/summary.page.ts ***!
  \***************************************************************/
/*! exports provided: SummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPage", function() { return SummaryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _riego_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @riego/shared/services/measure.service */ "./src/app/shared/services/measure.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_measure_card_measure_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/measure-card/measure-card.component */ "./src/app/modules/summary/components/measure-card/measure-card.component.ts");





function SummaryPage_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "measure-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const measure_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("measure", measure_r1);
} }
class SummaryPage {
    constructor(measureService) {
        this.measureService = measureService;
        this.measures = [];
        this.measureTypes = [];
    }
    ngOnInit() {
        this.getLastMeasures();
    }
    getMeasureTypes() {
        this.measureTypes = this.measureService.getTypes();
    }
    getLastMeasures() {
        this.measures.push({ type: "temperature", title: "Temperatura Ambiente", date: "18/04/2020 14:05", value: "35ºC" }, { type: "humidity", title: "Humedad Ambiente", date: "18/04/2020 14:05", value: "20%" }, { type: "soilmeasure", title: "Humedad Suelo", date: "18/04/2020 14:05", value: "60%" }, { type: "brightness", title: "Claridad", date: "18/04/2020 14:05", value: "60%" });
    }
}
SummaryPage.ɵfac = function SummaryPage_Factory(t) { return new (t || SummaryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_riego_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_1__["MeasureService"])); };
SummaryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryPage, selectors: [["app-summary"]], decls: 3, vars: 1, consts: [[1, "container-fluid"], [1, "row"], ["class", "col-6 text-center mb-3", 4, "ngFor", "ngForOf"], [1, "col-6", "text-center", "mb-3"], [3, "measure"]], template: function SummaryPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SummaryPage_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.measures);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_measure_card_measure_card_component__WEBPACK_IMPORTED_MODULE_3__["MeasureCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VtbWFyeS9wYWdlcy9zdW1tYXJ5L3N1bW1hcnkucGFnZS5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-summary',
                templateUrl: './summary.page.html',
                styleUrls: ['./summary.page.scss']
            }]
    }], function () { return [{ type: _riego_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_1__["MeasureService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/summary/summary-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/summary/summary-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SummaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryRoutingModule", function() { return SummaryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_summary_summary_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/summary/summary.page */ "./src/app/modules/summary/pages/summary/summary.page.ts");





const routes = [
    { path: "", component: _pages_summary_summary_page__WEBPACK_IMPORTED_MODULE_2__["SummaryPage"] }
];
class SummaryRoutingModule {
}
SummaryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SummaryRoutingModule });
SummaryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SummaryRoutingModule_Factory(t) { return new (t || SummaryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SummaryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/summary/summary.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/summary/summary.module.ts ***!
  \***************************************************/
/*! exports provided: SummaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryModule", function() { return SummaryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _summary_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary-routing.module */ "./src/app/modules/summary/summary-routing.module.ts");
/* harmony import */ var _pages_summary_summary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/summary/summary.page */ "./src/app/modules/summary/pages/summary/summary.page.ts");
/* harmony import */ var _components_measure_card_measure_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/measure-card/measure-card.component */ "./src/app/modules/summary/components/measure-card/measure-card.component.ts");






class SummaryModule {
}
SummaryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SummaryModule });
SummaryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SummaryModule_Factory(t) { return new (t || SummaryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _summary_routing_module__WEBPACK_IMPORTED_MODULE_2__["SummaryRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SummaryModule, { declarations: [_pages_summary_summary_page__WEBPACK_IMPORTED_MODULE_3__["SummaryPage"], _components_measure_card_measure_card_component__WEBPACK_IMPORTED_MODULE_4__["MeasureCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _summary_routing_module__WEBPACK_IMPORTED_MODULE_2__["SummaryRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pages_summary_summary_page__WEBPACK_IMPORTED_MODULE_3__["SummaryPage"], _components_measure_card_measure_card_component__WEBPACK_IMPORTED_MODULE_4__["MeasureCardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _summary_routing_module__WEBPACK_IMPORTED_MODULE_2__["SummaryRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=riego-modules-summary-summary-module-es2015.js.map