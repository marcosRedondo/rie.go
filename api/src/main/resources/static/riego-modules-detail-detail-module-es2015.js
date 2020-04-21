(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["riego-modules-detail-detail-module"],{

/***/ "./src/app/modules/detail/components/chart-temerature/chart-temerature.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/detail/components/chart-temerature/chart-temerature.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChartTemeratureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartTemeratureComponent", function() { return ChartTemeratureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChartTemeratureComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChartTemeratureComponent.ɵfac = function ChartTemeratureComponent_Factory(t) { return new (t || ChartTemeratureComponent)(); };
ChartTemeratureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartTemeratureComponent, selectors: [["detail-chart-temerature"]], decls: 2, vars: 0, template: function ChartTemeratureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chart-temerature works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGV0YWlsL2NvbXBvbmVudHMvY2hhcnQtdGVtZXJhdHVyZS9jaGFydC10ZW1lcmF0dXJlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartTemeratureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'detail-chart-temerature',
                templateUrl: './chart-temerature.component.html',
                styleUrls: ['./chart-temerature.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/detail/components/detail-card/detail-card.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/detail/components/detail-card/detail-card.component.ts ***!
  \********************************************************************************/
/*! exports provided: DetailCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCardComponent", function() { return DetailCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _riego_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @riego/shared/services/measure.service */ "./src/app/shared/services/measure.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _table_temperature_table_temperature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../table-temperature/table-temperature.component */ "./src/app/modules/detail/components/table-temperature/table-temperature.component.ts");
/* harmony import */ var _chart_temerature_chart_temerature_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chart-temerature/chart-temerature.component */ "./src/app/modules/detail/components/chart-temerature/chart-temerature.component.ts");







function DetailCardComponent_div_10_detail_table_temperature_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "detail-table-temperature", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("measures", ctx_r1.measures);
} }
function DetailCardComponent_div_10_detail_chart_temerature_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "detail-chart-temerature");
} }
function DetailCardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailCardComponent_div_10_detail_table_temperature_1_Template, 1, 1, "detail-table-temperature", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailCardComponent_div_10_detail_chart_temerature_2_Template, 1, 0, "detail-chart-temerature", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.view == "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.view == "chart");
} }
const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function (a0, a1) { return { "fa-expand": a0, "fa-compress": a1 }; };
class DetailCardComponent {
    constructor(measureService) {
        this.measureService = measureService;
        this.measures = [];
        this.view = "table";
        this.expand = true;
    }
    ngOnInit() {
        this.date = moment__WEBPACK_IMPORTED_MODULE_1__().format("DD/MM/YYYY");
        this.loadMeasures();
    }
    changeView(_view) {
        this.view = _view;
    }
    loadMeasures() {
        this.measures = this.measureService.getByTypeAndDate(this.type, "00:");
    }
}
DetailCardComponent.ɵfac = function DetailCardComponent_Factory(t) { return new (t || DetailCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_riego_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_2__["MeasureService"])); };
DetailCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailCardComponent, selectors: [["detail-card"]], inputs: { type: "type" }, decls: 11, vars: 13, consts: [[1, "card", "text-center"], [1, "card-header", "d-flex", "flex-row", "bg-primary", "align-content-center"], [1, "mr-auto", "text-white", "font-weight-bold"], ["type", "button", 1, "ml-1", "btn", "btn-light", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-table"], ["type", "button", "disabled", "", 1, "ml-1", "btn", "btn-light", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-line-chart"], ["type", "button", 1, "ml-1", "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 1, "fa", 3, "ngClass"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [3, "measures", 4, "ngIf"], [4, "ngIf"], [3, "measures"]], template: function DetailCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailCardComponent_Template_button_click_4_listener() { return ctx.changeView("table"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailCardComponent_Template_button_click_6_listener() { return ctx.changeView("chart"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailCardComponent_Template_button_click_8_listener() { return ctx.expand = !ctx.expand; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetailCardComponent_div_10_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.date, " - ", ctx.type.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.view == "table"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.view == "chart"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, !ctx.expand, ctx.expand));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expand);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _table_temperature_table_temperature_component__WEBPACK_IMPORTED_MODULE_4__["TableTemperatureComponent"], _chart_temerature_chart_temerature_component__WEBPACK_IMPORTED_MODULE_5__["ChartTemeratureComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGV0YWlsL2NvbXBvbmVudHMvZGV0YWlsLWNhcmQvZGV0YWlsLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'detail-card',
                templateUrl: './detail-card.component.html',
                styleUrls: ['./detail-card.component.scss']
            }]
    }], function () { return [{ type: _riego_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_2__["MeasureService"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/detail/components/table-temperature/table-temperature.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/detail/components/table-temperature/table-temperature.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TableTemperatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableTemperatureComponent", function() { return TableTemperatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function TableTemperatureComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r1.value);
} }
class TableTemperatureComponent {
    constructor() { }
    ngOnInit() {
    }
}
TableTemperatureComponent.ɵfac = function TableTemperatureComponent_Factory(t) { return new (t || TableTemperatureComponent)(); };
TableTemperatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableTemperatureComponent, selectors: [["detail-table-temperature"]], inputs: { measures: "measures" }, decls: 3, vars: 1, consts: [[1, "container-fluid"], [1, "d-flex", "flex-row", "flex-wrap", "justify-content-center"], ["class", "p-1", 4, "ngFor", "ngForOf"], [1, "p-1"], [1, "card"], [1, "card-header"], [1, "card-body"]], template: function TableTemperatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableTemperatureComponent_div_2_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.measures);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGV0YWlsL2NvbXBvbmVudHMvdGFibGUtdGVtcGVyYXR1cmUvdGFibGUtdGVtcGVyYXR1cmUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableTemperatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'detail-table-temperature',
                templateUrl: './table-temperature.component.html',
                styleUrls: ['./table-temperature.component.scss']
            }]
    }], function () { return []; }, { measures: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/detail/detail-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/detail/detail-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailRoutingModule", function() { return DetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _riego_modules_detail_pages_detail_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @riego/modules/detail/pages/detail/detail.page */ "./src/app/modules/detail/pages/detail/detail.page.ts");





const routes = [
    { path: "", component: _riego_modules_detail_pages_detail_detail_page__WEBPACK_IMPORTED_MODULE_2__["DetailPage"] }
];
class DetailRoutingModule {
}
DetailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DetailRoutingModule });
DetailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DetailRoutingModule_Factory(t) { return new (t || DetailRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/detail/detail.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/detail/detail.module.ts ***!
  \*************************************************/
/*! exports provided: DetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModule", function() { return DetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-routing.module */ "./src/app/modules/detail/detail-routing.module.ts");
/* harmony import */ var _pages_detail_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/detail/detail.page */ "./src/app/modules/detail/pages/detail/detail.page.ts");
/* harmony import */ var _components_detail_card_detail_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/detail-card/detail-card.component */ "./src/app/modules/detail/components/detail-card/detail-card.component.ts");
/* harmony import */ var _components_table_temperature_table_temperature_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/table-temperature/table-temperature.component */ "./src/app/modules/detail/components/table-temperature/table-temperature.component.ts");
/* harmony import */ var _components_chart_temerature_chart_temerature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chart-temerature/chart-temerature.component */ "./src/app/modules/detail/components/chart-temerature/chart-temerature.component.ts");








class DetailModule {
}
DetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DetailModule });
DetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DetailModule_Factory(t) { return new (t || DetailModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["DetailRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetailModule, { declarations: [_pages_detail_detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"], _components_detail_card_detail_card_component__WEBPACK_IMPORTED_MODULE_4__["DetailCardComponent"], _components_table_temperature_table_temperature_component__WEBPACK_IMPORTED_MODULE_5__["TableTemperatureComponent"], _components_chart_temerature_chart_temerature_component__WEBPACK_IMPORTED_MODULE_6__["ChartTemeratureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["DetailRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pages_detail_detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"], _components_detail_card_detail_card_component__WEBPACK_IMPORTED_MODULE_4__["DetailCardComponent"], _components_table_temperature_table_temperature_component__WEBPACK_IMPORTED_MODULE_5__["TableTemperatureComponent"], _components_chart_temerature_chart_temerature_component__WEBPACK_IMPORTED_MODULE_6__["ChartTemeratureComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["DetailRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/detail/pages/detail/detail.page.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/detail/pages/detail/detail.page.ts ***!
  \************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _riego_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @riego/shared/services/measure.service */ "./src/app/shared/services/measure.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_detail_card_detail_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/detail-card/detail-card.component */ "./src/app/modules/detail/components/detail-card/detail-card.component.ts");





function DetailPage_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "detail-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", type_r1);
} }
class DetailPage {
    constructor(measureService) {
        this.measureService = measureService;
        this.measureTypes = [];
    }
    getMeasureTypes() {
        this.measureTypes = this.measureService.getTypes();
    }
    ngOnInit() {
        this.getMeasureTypes();
    }
}
DetailPage.ɵfac = function DetailPage_Factory(t) { return new (t || DetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_riego_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_1__["MeasureService"])); };
DetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailPage, selectors: [["detail-page"]], decls: 3, vars: 1, consts: [[1, "container-fluid"], [1, "row"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-12"], [3, "type"]], template: function DetailPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailPage_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.measureTypes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_detail_card_detail_card_component__WEBPACK_IMPORTED_MODULE_3__["DetailCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGV0YWlsL3BhZ2VzL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'detail-page',
                templateUrl: './detail.page.html',
                styleUrls: ['./detail.page.scss']
            }]
    }], function () { return [{ type: _riego_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_1__["MeasureService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=riego-modules-detail-detail-module-es2015.js.map