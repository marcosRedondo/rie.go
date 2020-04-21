(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/measure.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/measure.service.ts ***!
  \****************************************************/
/*! exports provided: MeasureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureService", function() { return MeasureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _riego_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @riego/env */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const urlSrv = _riego_env__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + "measure";
class MeasureService {
    constructor(http) {
        this.http = http;
    }
    get() {
        return this.http.get(urlSrv);
    }
    save(m) {
        return this.http.put(urlSrv, m);
    }
    delete(m) {
        return this.http.delete(urlSrv + "/" + m.id);
    }
    /************/
    /** BORRAR **/
    /************/
    getTypes() {
        let types = [];
        types.push({ id: 1, name: "Temperatura Ambiente", units: "ºC" }, { id: 2, name: "Humedad Ambiente", units: "%" }, { id: 3, name: "Humedad Suelo", units: "%" }, { id: 4, name: "Luminosidad", units: "%" }, { id: 5, name: "Riego", units: "MIN" }, { id: 6, name: "Arranque App", units: "UP" });
        return types;
    }
    getByTypeAndDate(_type, _date) {
        let measure = [];
        measure.push({ id: 1, date: _date + "01", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 2, date: _date + "02", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 3, date: _date + "03", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 4, date: _date + "04", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 5, date: _date + "05", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 6, date: _date + "06", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 7, date: _date + "07", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 8, date: _date + "08", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 9, date: _date + "09", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 10, date: _date + "10", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 11, date: _date + "11", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 12, date: _date + "12", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 13, date: _date + "13", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 14, date: _date + "14", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 15, date: _date + "15", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 16, date: _date + "16", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 17, date: _date + "17", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 18, date: _date + "18", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 19, date: _date + "19", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 20, date: _date + "20", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 21, date: _date + "21", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 22, date: _date + "22", author: "arduino", sensor: "arduino", value: "30", type: _type }, { id: 23, date: _date + "23", author: "arduino", sensor: "arduino", value: "30", type: _type });
        return measure;
    }
}
MeasureService.ɵfac = function MeasureService_Factory(t) { return new (t || MeasureService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MeasureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MeasureService, factory: MeasureService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeasureService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map