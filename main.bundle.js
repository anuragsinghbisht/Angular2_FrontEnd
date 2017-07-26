webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./category/category.module": [
		"../../../../../src/app/category/category.module.ts"
	],
	"./home/home.module": [
		"../../../../../src/app/home/home.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_category_module__ = __webpack_require__("../../../../../src/app/category/category.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_reducers__ = __webpack_require__("../../../../../src/app/app.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Modules




// Component

// Routes

// Reducers


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_reducers__["a" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_13__app_reducers__["b" /* metaReducers */] }),
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument(),
            __WEBPACK_IMPORTED_MODULE_7__category_category_module__["CategoryModule"],
            __WEBPACK_IMPORTED_MODULE_8__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_module__["HomeModule"],
            __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return metaReducers; });
// import {} from './app.state';

// Include reducers from modules
// Define reducers
var reducers = {};
var metaReducers = [__WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze__["storeFreeze"]];
//# sourceMappingURL=app.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
var routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    {
        path: 'category',
        loadChildren: './category/category.module#CategoryModule'
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/category/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  margin: 5%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-nav-list>\n    <h3 md-subheader>Categories</h3>\n    <md-list-item\n      mdTooltip=\"Click to go to {{category.categoryName}}\" mdTooltipPosition=\"below\"\n      [routerLink]=\"['/category','list',category.categoryName]\"\n      *ngFor=\"let category of categories\">\n      <md-icon md-list-icon>widgets</md-icon>\n      <h4 md-line>{{ category.categoryName }}</h4>\n    </md-list-item>\n  </md-nav-list>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/category/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = (function () {
    function CategoriesComponent() {
        this.categories = [
            { categoryName: 'Companies' },
            { categoryName: 'Technologies' }
        ];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-categories',
        template: __webpack_require__("../../../../../src/app/category/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/category/categories/categories.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CategoriesComponent);

//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/category/category-details/category-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-card {\n  margin: 5%;\n  width: 90%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.product-image {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 30%;\n          flex: 1 1 30%;\n  margin-right: 2%;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.product-info {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 70%;\n          flex: 1 1 70%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category/category-details/category-details.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"product-card\">\n  <div\n    class=\"product-image\"\n    [ngStyle]=\"{backgroundImage: 'url('+product.imageHref+')'}\"></div>\n    <div class=\"product-info\">\n      <md-card-header>\n        <div md-card-avatar class=\"avatar\"> {{ product.title.split(\"\")[0] }}</div>\n        <md-card-title>{{product.title}}</md-card-title>\n        <md-card-subtitle>{{product.category}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <p>\n          {{product.description}}\n        </p>\n        <p>\n          <md-icon>open in new</md-icon>\n          <a href=\"{{product.url}}\">{{product.url}}</a>\n        </p>\n      </md-card-content>\n    </div>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/category/category-details/category-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_data__ = __webpack_require__("../../../../../src/app/category/mock-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryDetailsComponent = (function () {
    function CategoryDetailsComponent(route) {
        this.route = route;
    }
    CategoryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParamSubscribe = this.route.params.subscribe(function (params) {
            __WEBPACK_IMPORTED_MODULE_2__mock_data__["a" /* mock */][0].rows.forEach(function (prod) {
                if (prod.category === params.category && prod.id === params.id) {
                    _this.product = prod;
                    console.log(_this.product);
                }
            });
        });
    };
    CategoryDetailsComponent.prototype.ngOnDestroy = function () {
        this.routeParamSubscribe.unsubscribe();
    };
    return CategoryDetailsComponent;
}());
CategoryDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-category-details',
        template: __webpack_require__("../../../../../src/app/category/category-details/category-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/category/category-details/category-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], CategoryDetailsComponent);

var _a;
//# sourceMappingURL=category-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/category/category-form/category-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  margin: 5%;\n}\n\nmd-input-container {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category/category-form/category-form.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <h3 md-header>Add Product</h3>\n  <form\n    [formGroup]=\"form\"\n    (ngSubmit) = \"onSubmit()\">\n    <p>\n      <md-input-container>\n        <input type=\"text\" mdInput formControlName=\"category\" placeholder=\"Category\">\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container>\n        <input type=\"text\" mdInput formControlName=\"title\" placeholder=\"Title\">\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container>\n        <input type=\"url\" mdInput formControlName=\"url\" placeholder=\"URL\">\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container>\n        <textarea type=\"text\" mdInput formControlName=\"description\" placeholder=\"Description\"></textarea>\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container>\n        <input type=\"url\" mdInput formControlName=\"imageHref\" placeholder=\"Image URL\">\n      </md-input-container>\n    </p>\n    <p [ngStyle]=\"{ textAlign: 'center' }\">\n      <button md-raised-button color=\"primary\">\n        Submit\n      </button>\n    </p>\n  </form>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/category/category-form/category-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryFormComponent = (function () {
    function CategoryFormComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.form = fb.group({
            category: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            url: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            imageHref: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        });
    }
    CategoryFormComponent.prototype.ngOnInit = function () { };
    CategoryFormComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            console.log(this.form.value);
            this.router.navigate(['/category', 'list']);
        }
    };
    return CategoryFormComponent;
}());
CategoryFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-category-form',
        template: __webpack_require__("../../../../../src/app/category/category-form/category-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/category/category-form/category-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CategoryFormComponent);

var _a, _b;
//# sourceMappingURL=category-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/category/category-list/category-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-list {\n  width: 96%;\n  padding-bottom: 2%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\nmd-card {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 40%;\n          flex: 0 0 40%;\n  margin-top: 2%;\n}\n\n.product-image {\n  height: 150px;\n  width: 90%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  margin-left: 5%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category/category-list/category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product-list\">\n  <md-card\n    mdTooltip=\"Click to go to details page\" mdTooltipPosition=\"above\"\n    [routerLink]='[\"/category\",\"list\",product.category,product.id]'\n    *ngFor=\"let product of products\">\n    <md-card-header>\n      <div md-card-avatar class=\"avatar\"> {{ product.title.split(\"\")[0] }}</div>\n      <md-card-title>{{product.title}}</md-card-title>\n      <md-card-subtitle>{{product.category}}</md-card-subtitle>\n    </md-card-header>\n    <div\n      md-card-image\n      class=\"product-image\"\n      [ngStyle]=\"{backgroundImage: 'url('+product.imageHref+')'}\"></div>\n    <md-card-content>\n      <p>\n        {{product.description}}\n      </p>\n      <p>\n        <md-icon>open in new</md-icon>\n        <a href=\"{{product.url}}\">{{product.url}}</a>\n      </p>\n    </md-card-content>\n  </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/category/category-list/category-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_data__ = __webpack_require__("../../../../../src/app/category/mock-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryListComponent = (function () {
    function CategoryListComponent(route) {
        this.route = route;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeChangeSubscribe = this.route.params.subscribe(function (params) {
            _this.products = __WEBPACK_IMPORTED_MODULE_2__mock_data__["a" /* mock */][0].rows.filter(function (product) { return product.category === params.category; });
        });
    };
    CategoryListComponent.prototype.ngOnDestroy = function () {
        this.routeChangeSubscribe.unsubscribe();
    };
    return CategoryListComponent;
}());
CategoryListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-category-list',
        template: __webpack_require__("../../../../../src/app/category/category-list/category-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/category/category-list/category-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], CategoryListComponent);

var _a;
//# sourceMappingURL=category-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_routes__ = __webpack_require__("../../../../../src/app/category/category.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_list_category_list_component__ = __webpack_require__("../../../../../src/app/category/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_details_category_details_component__ = __webpack_require__("../../../../../src/app/category/category-details/category-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_form_category_form_component__ = __webpack_require__("../../../../../src/app/category/category-form/category-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categories_categories_component__ = __webpack_require__("../../../../../src/app/category/categories/categories.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CategoryModule = (function () {
    function CategoryModule() {
    }
    return CategoryModule;
}());
CategoryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__category_routes__["a" /* CategoryRoutes */])],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__category_list_category_list_component__["a" /* CategoryListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__category_details_category_details_component__["a" /* CategoryDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__category_form_category_form_component__["a" /* CategoryFormComponent */],
            __WEBPACK_IMPORTED_MODULE_7__categories_categories_component__["a" /* CategoriesComponent */]
        ]
    })
], CategoryModule);

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_categories_component__ = __webpack_require__("../../../../../src/app/category/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_list_category_list_component__ = __webpack_require__("../../../../../src/app/category/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_details_category_details_component__ = __webpack_require__("../../../../../src/app/category/category-details/category-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_form_category_form_component__ = __webpack_require__("../../../../../src/app/category/category-form/category-form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryRoutes; });




var CategoryRoutes = [
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_0__categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'list/:category', component: __WEBPACK_IMPORTED_MODULE_1__category_list_category_list_component__["a" /* CategoryListComponent */] },
    { path: 'list/:category/:id', component: __WEBPACK_IMPORTED_MODULE_2__category_details_category_details_component__["a" /* CategoryDetailsComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__category_form_category_form_component__["a" /* CategoryFormComponent */] }
];
//# sourceMappingURL=category.routes.js.map

/***/ }),

/***/ "../../../../../src/app/category/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mock; });
/* Tslint-disable */
/* Tslint-disable */ var mock = [{
        id: 0,
        title: 'AngularJS Exercise',
        description: "This AngularJS exercise showcases how to read online json file.Based on the categories filter the content for each menu item and display in the tabular form. The candidate must make use of third party apis as parsers, and efficient components to support different functionalities expected in this exercise.",
        categories: [
            { categoryName: 'Companies' },
            { categoryName: 'Technologies' }
        ],
        rows: [
            {
                'id': '595c9590b143e93ac8a0c13b',
                'category': 'Companies',
                'title': 'Google',
                'url': 'http://www.google.com',
                'description': 'Google is an American multinational technology company specializing in Internet-related services and products. These include online advertising technologies, search, cloud computing, software, and hardware. Google was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University, in California. Together, they own about 14 percent of its shares, and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a privately held company on September 4, 1998. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its new headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google, Alphabet\'s leading subsidiary, will continue to be the umbrella company for Alphabet\'s Internet interests. Upon completion of the restructure, Sundar Pichai became CEO of Google, replacing Larry Page, who became CEO of Alphabet.',
                'imageHref': 'https://dl.dropboxusercontent.com/s/2knt3j3lqm43cll/Google.jpg?dl=0'
            },
            {
                'id': '595c95c0b143e93ac8a0c13c',
                'category': 'Companies',
                'title': 'DELL',
                'url': 'www.dell.com/in/en',
                'description': 'Dell Inc. (stylized as DELL) is a multinational computer technology company based in Round Rock, Texas and, along with Dell EMC, is a subsidiary of Dell Technologies, one of the largest technology companies in the world with 138,000 employees.[4] Dell manufactures, sells, repairs, and supports personal computers (PCs), servers, data storage devices, network switches, computer software, computer peripherals, high-definition televisions, cameras, printers, and electronics built by other manufacturers. The company is well known for its innovations in supply chain management and e-commerce, particularly its direct-sales model',
                'imageHref': 'https://dl.dropboxusercontent.com/s/qe282y489c4zw83/DELL.png?dl=0'
            },
            {
                'id': '595c95cdb143e93ac8a0c13d',
                'category': 'Companies',
                'title': 'Infosys',
                'url': 'www.Infosys.com',
                'description': 'Co-founded in 1981 by 7 Engineers N. R. Narayana Murthy, Nandan Nilekani, S. Gopalakrishnan, S. D. Shibulal, K. Dinesh and Ashok Arora after they resigned from Patni Computer Systems.[9][10] The company was incorporated as Infosys Consultants Pvt Ltd. with a capital of ?10,000 or US$250 (equivalent to about $659 in 2016) or (?6,41,800 in 2017) in Model Colony, Pune as the registered office.[11] It signed its first client, Data Basics Corporation, in New York City.[12] In 1983, the company\'s corporate headquarters was relocated from Pune to Bengaluru',
                'imageHref': 'https://dl.dropboxusercontent.com/s/kmwpe53nlkb2sfg/Infosys.png?dl=0'
            },
            {
                'id': '595c9614b143e93ac8a0c13e',
                'category': 'Companies',
                'title': 'Microsoft',
                'url': 'https://www.microsoft.com/en-in/',
                'description': 'Microsoft Corporation  is an American multinational technology company headquartered in Redmond, Washington. It develops, manufactures, licenses, supports and sells computer software, consumer electronics, personal computers, and services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface tablet lineup. As of 2016, it is the world\'s largest software maker by revenue,[7] and one of the world\'s most valuable companies.',
                'imageHref': 'https://dl.dropboxusercontent.com/s/02wqavlmccirhro/Microsoft.png?dl=0'
            },
            {
                'id': '595c961eb143e93ac8a0c13f',
                'category': 'Companies',
                'title': 'NewFirm',
                'url': 'newfirm.com',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit erat id ipsum dictum, eu elementum est bibendum. Suspendisse in nulla scelerisque, auctor nibh sit amet, semper nulla. Nullam interdum malesuada tortor, nec tempor nisl facilisis tincidunt. Donec faucibus lobortis pulvinar. Vestibulum rutrum porta mauris, et efficitur erat vulputate quis. Vivamus luctus, tortor sodales pulvinar posuere, ante purus dignissim mi, nec venenatis libero dolor vitae dolor. Integer vel lacus purus.Pellentesque elit sem, condimentum vitae porttitor in, rhoncus quis metus. Vivamus efficitur elementum nibh. Sed consequat orci mauris, a varius tellus suscipit in. Aenean tincidunt feugiat rhoncus. Maecenas maximus condimentum ligula ut venenatis. Suspendisse aliquet nibh non sapien finibus feugiat. Cras sit amet tellus ex. Etiam tincidunt sapien nec leo iaculis elementum. Donec sit amet arcu fermentum nisl euismod fringilla.',
                'imageHref': 'avtar.png'
            },
            {
                'id': '595c9627b143e93ac8a0c140',
                'category': 'Technologies',
                'title': 'HTML5',
                'url': 'https://en.wikipedia.org/wiki/HTML5',
                'description': 'The Web Hypertext Application Technology Working Group (WHATWG) began work on the new standard in 2004. At that time, HTML 4.01 had not been updated since 2000,[8] and the World Wide Web Consortium (W3C) was focusing future developments on XHTML 2.0. In 2009, the W3C allowed the XHTML 2.0 Working Group\'s charter to expire and decided not to renew it.[9] W3C and WHATWG are currently working together on the development of HTML5.',
                'imageHref': 'https://dl.dropboxusercontent.com/s/6cjtg8ove416ef7/html5.png?dl=0'
            },
            {
                'id': '595c962fb143e93ac8a0c141',
                'category': 'Technologies',
                'title': 'CSS3',
                'url': 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
                'description': 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.[1] Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.',
                'imageHref': 'https://dl.dropboxusercontent.com/s/w9wcd9ew05xtth5/css3.png?dl=0'
            },
            {
                'id': '595c963cb143e93ac8a0c142',
                'category': 'Technologies',
                'title': 'JQuery',
                'url': 'https://jquery.com/',
                'description': 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
                'imageHref': 'https://dl.dropboxusercontent.com/s/a1ucszgy8klkpzt/JQuery.png?dl=0'
            }
        ]
    }];
//# sourceMappingURL=mock-data.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/core/header/header.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span>Angular JS</span>\n  <span class=\"fill-space\"></span>\n  <button md-icon-button routerLink=\"/\"><md-icon>home</md-icon></button>\n  <button md-icon-button routerLink=\"/category/add\"><md-icon>add</md-icon></button>\n  <button md-icon-button routerLink=\"/category/list\"><md-icon>dashboard</md-icon></button>\n</md-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/core/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/banner/banner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  margin: 5%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <md-card-title>{{ categoryList.title }}</md-card-title>\n  </md-card-header>\n  <md-card-content>\n    <p>{{ categoryList.description }}</p>\n  </md-card-content>\n  <md-card-actions>\n    <button md-button routerLink=\"/category/list\">\n      <md-icon>dashboard</md-icon>\n      <span>Categories</span>\n    </button>\n    <button md-button routerLink=\"/category/add\">\n      <md-icon>add</md-icon>\n      <span>Add Product</span>\n    </button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/home/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = (function () {
    function BannerComponent() {
        this.categoryList = {
            id: 0,
            title: 'AngularJS Exercise',
            description: "This AngularJS exercise showcases how to read online json file.Based on the categories filter the content for each menu item and display in the tabular form. The candidate must make use of third party apis as parsers, and efficient components to support different functionalities expected in this exercise.",
            categories: [
                { categoryName: 'Companies' },
                { categoryName: 'Technologies' }
            ],
            rows: []
        };
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    return BannerComponent;
}());
BannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-banner',
        template: __webpack_require__("../../../../../src/app/home/banner/banner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/banner/banner.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BannerComponent);

//# sourceMappingURL=banner.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banner_banner_component__ = __webpack_require__("../../../../../src/app/home/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routes__ = __webpack_require__("../../../../../src/app/home/home.routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__home_routes__["a" /* HomeRoutes */])],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__banner_banner_component__["a" /* BannerComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner_banner_component__ = __webpack_require__("../../../../../src/app/home/banner/banner.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });

var HomeRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__banner_banner_component__["a" /* BannerComponent */], pathMatch: 'full' }
];
//# sourceMappingURL=home.routes.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */]],
        declarations: [],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map