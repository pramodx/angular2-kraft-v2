webpackJsonp([0,3],{

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(444);


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_products__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsService = (function () {
    function ProductsService() {
    }
    ProductsService.prototype.getAllProducts = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_0__data_products__["a" /* PRODUCTS */]);
    };
    ProductsService.prototype.getProduct = function (id) {
        return this.getAllProducts()
            .then(function (products) { return products.filter(function (product) { return product.id === id; })[0]; });
    };
    ProductsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ProductsService);
    return ProductsService;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/products.service.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_angularfire2__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(_formBuilder, _af, _router) {
        this._formBuilder = _formBuilder;
        this._af = _af;
        this._router = _router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var fbEmail = '';
        var fbPassword = '';
        this.loginForm = this._formBuilder.group({
            email: [fbEmail, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, email])],
            password: [fbPassword, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    AdminComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            //let ctrls = this.loginForm.controls;
            //console.log(this.loginForm.value.email);
            this._af.auth.login({ email: this.loginForm.value.email, password: this.loginForm.value.password })
                .then(function (success) {
                console.log(success);
                localStorage.setItem('authToken', success.uid);
                _this._router.navigate(['/products']);
            }, function (error) {
                console.log(error);
                localStorage.removeItem('authToken');
            });
        }
    };
    AdminComponent.prototype.logOut = function () {
        localStorage.removeItem('authToken');
        this._router.navigate(['/products']);
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            selector: 'admin',
            template: __webpack_require__(747),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2_angularfire2__["d" /* AngularFire */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a, _b, _c;
}());
function email(control) {
    if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        return { 'invalidEmailAddress': true };
    }
}
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/admin.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsDashboardComponent = (function () {
    function ProductsDashboardComponent() {
    }
    ProductsDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            selector: 'products-dashboard',
            template: __webpack_require__(751)
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsDashboardComponent);
    return ProductsDashboardComponent;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/products-dashboard.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(_productsService, af, _route, _router) {
        this._productsService = _productsService;
        this.af = af;
        this._route = _route;
        this._router = _router;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.recipe = _this.af.database.object('/data/' + id);
            _this.recipe
                .subscribe(function (response) {
                _this.productId = response.product_id;
                _this.getProduct(_this.productId);
            });
        });
    };
    RecipeDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productsService.getProduct(id)
            .then(function (product) { return _this.product = product; });
    };
    RecipeDetailComponent.prototype.getProductImage = function (id) {
        return 'assets/img/range/img-big-' + this.product.image + '.png';
    };
    RecipeDetailComponent.prototype.getImagePath = function (imgName) {
        return 'assets/img/recipes/img-small-' + imgName + '.jpg';
    };
    RecipeDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            selector: 'recipe-detail',
            template: __webpack_require__(753),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/recipe-detail.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(233);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import has = Reflect.has;
var RecipeEditorComponent = (function () {
    function RecipeEditorComponent(af, _productsService, _router, _route, _formBuilder) {
        this.af = af;
        this._productsService = _productsService;
        this._router = _router;
        this._route = _route;
        this._formBuilder = _formBuilder;
        this._mode = 'Add';
    }
    RecipeEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        //check if logged in
        if (!localStorage.getItem('authToken')) {
            //this.login();
            this._router.navigate(['/admin']);
        }
        //get list of all products
        this._productsService.getAllProducts().then(function (products) { return _this.products = products; });
        this.sub = this._route.params.subscribe(function (params) {
            _this.recipeIndex = params['id'];
            if (_this.recipeIndex) {
                _this._mode = 'Edit';
            }
        });
        var fbName = '';
        var fbProduct = null;
        var fbNeed = '';
        var fbMaking = '';
        var fbPrepTime = null;
        var fbServes = null;
        this.af.database.object('/data/' + this.recipeIndex)
            .subscribe(function (response) {
            _this.recipe = response;
            fbName = _this.recipe.name;
            fbProduct = _this.recipe.product_id;
            fbNeed = _this.recipe.need;
            fbMaking = _this.recipe.making;
            fbPrepTime = _this.recipe.preptime;
            fbServes = _this.recipe.serves;
            _this.recipeEditForm = _this._formBuilder.group({
                name: [fbName, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required],
                product_id: [fbProduct, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required],
                need: [fbNeed, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required],
                making: [fbMaking, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required],
                preptime: [fbPrepTime, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required, hasNumbers, greaterThanZero])],
                serves: [fbServes, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required, hasNumbers, greaterThanZero])]
            });
        }, function (error) {
            console.log(error);
            _this._router.navigate(['/recipes']);
        });
        // this.recipeEditForm = this._formBuilder.group({
        // 	name: [fbName, Validators.required],
        // 	product_id: [fbProduct, Validators.required],
        // 	need: [fbNeed, Validators.required],
        // 	making: [fbMaking, Validators.required],
        // 	preptime: [fbPrepTime, Validators.compose([Validators.required, hasNumbers, greaterThanZero])],
        // 	serves: [fbServes, Validators.compose([Validators.required, hasNumbers, greaterThanZero])]
        // })
    };
    RecipeEditorComponent.prototype.onSubmit = function (name, product_id, need, making, preptime, serves) {
        var _this = this;
        var itemObservable = this.af.database.list('/data');
        //Add
        if (this._mode == 'Add') {
            itemObservable.push({
                name: name,
                product_id: +product_id,
                need: need,
                making: making,
                preptime: +preptime,
                serves: +serves,
                recipe_image: this.getRecipeImage(name)
            }).then(function (response) {
                console.log('successfully added data');
                _this._router.navigate(['/recipes/recipe', response.key]);
            });
        }
        else if (this._mode == 'Edit') {
            itemObservable.update(this.recipeIndex, {
                name: name,
                product_id: +product_id,
                need: need,
                making: making,
                preptime: +preptime,
                serves: +serves,
                recipe_image: this.getRecipeImage(name)
            }).then(function () {
                console.log('successfully updated data');
                _this._router.navigate(['/recipes/recipe', _this.recipeIndex]);
            });
        }
    };
    RecipeEditorComponent.prototype.getRecipeImage = function (name) {
        return name.split(" ").join("-").toLowerCase();
    };
    // login(){
    // 	this.af.auth.login();
    // 	localStorage.setItem('isLoggedIn', "true")
    // }
    RecipeEditorComponent.prototype.goBack = function () {
        history.back();
    };
    RecipeEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            selector: 'recipe-editor',
            template: __webpack_require__(754),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */]) === 'function' && _e) || Object])
    ], RecipeEditorComponent);
    return RecipeEditorComponent;
    var _a, _b, _c, _d, _e;
}());
function hasNumbers(control) {
    if (!('' + control.value).match('\\d+')) {
        return { noNumbers: true };
    }
}
function greaterThanZero(control) {
    if (!(control.value > 0)) {
        return { tooSmall: true };
    }
}
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/recipe-editor.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeListComponent = (function () {
    function RecipeListComponent(af) {
        var _this = this;
        this.af = af;
        this.isLoggedIn = false;
        this.items = af.database.list('/data', { preserveSnapshot: true });
        this.items
            .subscribe(function (snapshots) {
            _this.recipes = [];
            snapshots.forEach(function (snapshot) {
                var obj = snapshot.val();
                obj.uid = snapshot.key;
                _this.recipes.push(obj);
            });
        });
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        //check if logged in
        if (localStorage.getItem('authToken')) {
            //this.login();
            this.isLoggedIn = true;
        }
    };
    RecipeListComponent.prototype.deleteRecipe = function (key) {
        if (confirm("Are you sure you want to delete this record?")) {
            var items = this.af.database.list('/data');
            items.remove(key);
        }
        else {
            return false;
        }
    };
    RecipeListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            selector: 'recipe-list',
            template: __webpack_require__(755),
            styles: [__webpack_require__(745)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], RecipeListComponent);
    return RecipeListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/recipe-list.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_nutrition__ = __webpack_require__(567);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NutritionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NutritionService = (function () {
    function NutritionService() {
    }
    NutritionService.prototype.getNutrition = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__data_nutrition__["a" /* NUTRITION */]);
    };
    NutritionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], NutritionService);
    return NutritionService;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/nutrition.service.js.map

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 443;


/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(560);



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/main.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            //moduleId: module.id,
            selector: 'app-root',
            template: __webpack_require__(746),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/app.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_products_dashboard_products_dashboard_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_admin_admin_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_mainnav_mainnav_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nutrition_nutrition_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_product_details_product_detail_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_products_products_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_recipe_detail_recipe_detail_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_recipe_editor_recipe_editor_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_recipe_list_recipe_list_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_data_service__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_nutrition_service__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_products_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_filter_data_pipe__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routes__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyA0NVNGvwAWrWnzSJg1vGkSbgNr67FW6pk",
                    authDomain: "kraft-90cb5.firebaseapp.com",
                    databaseURL: "https://kraft-90cb5.firebaseio.com",
                    storageBucket: "kraft-90cb5.appspot.com",
                }, {
                    provider: __WEBPACK_IMPORTED_MODULE_20_angularfire2__["b" /* AuthProviders */].Password,
                    method: __WEBPACK_IMPORTED_MODULE_20_angularfire2__["c" /* AuthMethods */].Password
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]],
            exports: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__components_products_dashboard_products_dashboard_component__["a" /* ProductsDashboardComponent */], __WEBPACK_IMPORTED_MODULE_6__components_admin_admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_7__components_mainnav_mainnav_component__["a" /* MainNavComponent */], __WEBPACK_IMPORTED_MODULE_8__components_nutrition_nutrition_component__["a" /* NutritionComponent */], __WEBPACK_IMPORTED_MODULE_9__components_product_details_product_detail_component__["a" /* ProductDetailComponent */], __WEBPACK_IMPORTED_MODULE_10__components_products_products_component__["a" /* ProductsComponent */], __WEBPACK_IMPORTED_MODULE_11__components_recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */], __WEBPACK_IMPORTED_MODULE_12__components_recipe_editor_recipe_editor_component__["a" /* RecipeEditorComponent */], __WEBPACK_IMPORTED_MODULE_13__components_recipe_list_recipe_list_component__["a" /* RecipeListComponent */], __WEBPACK_IMPORTED_MODULE_18__pipes_filter_data_pipe__["a" /* FilterByPipe */]],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_15__services_nutrition_service__["a" /* NutritionService */], __WEBPACK_IMPORTED_MODULE_16__services_products_service__["a" /* ProductsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/app.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_products_dashboard_products_dashboard_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_admin_admin_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_recipe_list_recipe_list_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_recipe_editor_recipe_editor_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_recipe_detail_recipe_detail_component__ = __webpack_require__(373);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* unused harmony export APP_ROUTER_PROVIDERS */






var routes = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_1__components_products_dashboard_products_dashboard_component__["a" /* ProductsDashboardComponent */]
    },
    {
        path: 'products/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__components_products_dashboard_products_dashboard_component__["a" /* ProductsDashboardComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_2__components_admin_admin_component__["a" /* AdminComponent */]
    },
    {
        path: 'recipes',
        component: __WEBPACK_IMPORTED_MODULE_3__components_recipe_list_recipe_list_component__["a" /* RecipeListComponent */]
    },
    {
        path: 'recipes/recipe/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__components_recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */]
    },
    {
        path: 'recipes/editor',
        component: __WEBPACK_IMPORTED_MODULE_4__components_recipe_editor_recipe_editor_component__["a" /* RecipeEditorComponent */],
        pathMatch: 'full'
    },
    {
        path: 'recipes/editor/add',
        component: __WEBPACK_IMPORTED_MODULE_4__components_recipe_editor_recipe_editor_component__["a" /* RecipeEditorComponent */]
    },
    {
        path: 'recipes/editor/edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__components_recipe_editor_recipe_editor_component__["a" /* RecipeEditorComponent */]
    }
];
var APP_ROUTER_PROVIDERS = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/app.routes.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainNavComponent = (function () {
    function MainNavComponent() {
    }
    MainNavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            selector: 'main-nav',
            template: __webpack_require__(748),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainNavComponent);
    return MainNavComponent;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/mainnav.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nutrition_service__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_nutrients__ = __webpack_require__(566);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NutritionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NutritionComponent = (function () {
    function NutritionComponent(_nutritionService) {
        this._nutritionService = _nutritionService;
        this.nutrients = __WEBPACK_IMPORTED_MODULE_3__data_nutrients__["a" /* NUTRIENTS */];
    }
    NutritionComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('inited');
        this.id = this.product.id;
        this._nutritionService.getNutrition().then(function (data) { return _this.nutritions = data; });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* Product */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* Product */]) === 'function' && _a) || Object)
    ], NutritionComponent.prototype, "product", void 0);
    NutritionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            selector: 'nutrition-data',
            template: __webpack_require__(749),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_nutrition_service__["a" /* NutritionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_nutrition_service__["a" /* NutritionService */]) === 'function' && _b) || Object])
    ], NutritionComponent);
    return NutritionComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/nutrition.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = (function () {
    function ProductDetailComponent(_productService, _route, _af) {
        this._productService = _productService;
        this._route = _route;
        this._af = _af;
        this.recipesExist = false;
        this.recipes = [];
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this._productService.getProduct(id)
                .then(function (product) {
                _this.product = product;
                //get recipes
                if (product) {
                    _this._af.database.list('/data', {
                        query: {
                            orderByChild: 'product_id',
                            equalTo: id,
                            indexOn: 'product_id'
                        }
                    }).subscribe(function (response) {
                        _this.recipes = response;
                    });
                }
            });
        });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductDetailComponent.prototype.getImagePath = function (imgPath) {
        return 'assets/img/range/img-big-' + imgPath + '.png';
    };
    ProductDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            selector: 'product-detail',
            template: __webpack_require__(750),
            styles: [__webpack_require__(741)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */]) === 'function' && _c) || Object])
    ], ProductDetailComponent);
    return ProductDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/product-detail.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = (function () {
    function ProductsComponent(_productsService, _router) {
        this._productsService = _productsService;
        this._router = _router;
        this.selectedProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
    };
    ProductsComponent.prototype.getAllProducts = function () {
        var _this = this;
        this._productsService.getAllProducts().then(function (products) { return _this.products = products; });
    };
    ProductsComponent.prototype.getImagePath = function (imgPath) {
        return 'assets/img/range/img-big-' + imgPath + '.png';
    };
    ProductsComponent.prototype.onSelectProduct = function (product) {
        //this.selectedProduct.emit(product);
        var link = ['/products', product.id];
        this._router.navigate(link);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(), 
        __metadata('design:type', Object)
    ], ProductsComponent.prototype, "selectedProduct", void 0);
    ProductsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            selector: 'products',
            styles: [__webpack_require__(742)],
            template: __webpack_require__(752)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProductsComponent);
    return ProductsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/products.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NUTRIENTS; });
var NUTRIENTS = [
    {
        "name": "Energy",
        "units": "kJ",
        "nutr_order": 1
    },
    {
        "name": "Protein",
        "units": "g",
        "nutr_order": 2
    },
    {
        "name": "Fat - Total",
        "units": "g",
        "nutr_order": 3
    },
    {
        "name": "Saturated",
        "units": "g",
        "nutr_order": 4
    },
    {
        "name": "Trans",
        "units": "g",
        "nutr_order": 5
    },
    {
        "name": "Polyunsaturated",
        "units": "g",
        "nutr_order": 6
    },
    {
        "name": "Monounsaturated",
        "units": "g",
        "nutr_order": 7
    },
    {
        "name": "Carbohydrates",
        "units": "g",
        "nutr_order": 8
    },
    {
        "name": "Sugars",
        "units": "g",
        "nutr_order": 9
    },
    {
        "name": "Dietary Fibre",
        "units": "g",
        "nutr_order": 10
    },
    {
        "name": "Sodium",
        "units": "mg",
        "nutr_order": 11
    },
    {
        "name": "Potassium",
        "units": "mg",
        "nutr_order": 12
    },
    {
        "name": "Niacin (B3)",
        "units": "mg",
        "nutr_order": 13
    },
    {
        "name": "Magnesium",
        "units": "mg",
        "nutr_order": 14
    }
];
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/nutrients.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NUTRITION; });
var NUTRITION = [{
        "productId": 1,
        "gServing": 568,
        "dailyServing": "7%",
        "per100g": 2580,
        "nutrOrder": 1
    },
    {
        "productId": 1,
        "gServing": 5.2,
        "dailyServing": "10%",
        "per100g": 23.7,
        "nutrOrder": 2
    }, {
        "productId": 1,
        "gServing": 11.3,
        "dailyServing": "16%",
        "per100g": 51.3,
        "nutrOrder": 3
    }, {
        "productId": 1,
        "gServing": 2.3,
        "dailyServing": "10%",
        "per100g": 10.3,
        "nutrOrder": 4
    }, {
        "productId": 1,
        "gServing": "<0.1",
        "dailyServing": "-",
        "per100g": "<0.1",
        "nutrOrder": 5
    }, {
        "productId": 1,
        "gServing": 1.2,
        "dailyServing": "-",
        "per100g": 5.2,
        "nutrOrder": 6
    }, {
        "productId": 1,
        "gServing": 7.9,
        "dailyServing": "-",
        "per100g": 35.7,
        "nutrOrder": 7
    }, {
        "productId": 1,
        "gServing": 3,
        "dailyServing": "1%",
        "per100g": 13.4,
        "nutrOrder": 8
    }, {
        "productId": 1,
        "gServing": 1.9,
        "dailyServing": "2%",
        "per100g": 8.4,
        "nutrOrder": 9
    }, {
        "productId": 1,
        "gServing": 127,
        "dailyServing": "6%",
        "per100g": 578,
        "nutrOrder": 11
    }, {
        "productId": 1,
        "gServing": 2.4,
        "dailyServing": "24%",
        "per100g": 11,
        "nutrOrder": 13
    }, {
        "productId": 1,
        "gServing": 40,
        "dailyServing": "13%",
        "per100g": 180,
        "nutrOrder": 14
    }, {
        "productId": 2,
        "gServing": 570,
        "dailyServing": 7,
        "per100g": 2590,
        "nutrOrder": 1
    }, {
        "productId": 2,
        "gServing": 5.2,
        "dailyServing": 10,
        "per100g": 23.8,
        "nutrOrder": 2
    }, {
        "productId": 2,
        "gServing": 11.3,
        "dailyServing": 16,
        "per100g": 51.5,
        "nutrOrder": 3
    }, {
        "productId": 2,
        "gServing": 2.3,
        "dailyServing": 10,
        "per100g": 10.3,
        "nutrOrder": 4
    }, {
        "productId": 2,
        "gServing": "<0.1",
        "dailyServing": "-",
        "per100g": "<0.1",
        "nutrOrder": 5
    }, {
        "productId": 2,
        "gServing": 1.2,
        "dailyServing": "-",
        "per100g": 5.4,
        "nutrOrder": 6
    }, {
        "productId": 2,
        "gServing": 7.9,
        "dailyServing": "-",
        "per100g": 35.7,
        "nutrOrder": 7
    }, {
        "productId": 2,
        "gServing": 2.9,
        "dailyServing": 1,
        "per100g": 13.2,
        "nutrOrder": 8
    }, {
        "productId": 2,
        "gServing": 1.9,
        "dailyServing": 2,
        "per100g": 8.5,
        "nutrOrder": 9
    }, {
        "productId": 2,
        "gServing": 127,
        "dailyServing": 6,
        "per100g": 577,
        "nutrOrder": 11
    }, {
        "productId": 2,
        "gServing": 2.4,
        "dailyServing": 24,
        "per100g": 11,
        "nutrOrder": 13
    }, {
        "productId": 2,
        "gServing": 40,
        "dailyServing": 13,
        "per100g": 180,
        "nutrOrder": 14
    }, {
        "productId": 3,
        "gServing": 512,
        "dailyServing": 6,
        "per100g": 2330,
        "nutrOrder": 1
    }, {
        "productId": 3,
        "gServing": 3.8,
        "dailyServing": 8,
        "per100g": 17.4,
        "nutrOrder": 2
    }, {
        "productId": 3,
        "gServing": 8.3,
        "dailyServing": 12,
        "per100g": 37.5,
        "nutrOrder": 3
    }, {
        "productId": 3,
        "gServing": 1.7,
        "dailyServing": 7,
        "per100g": 7.7,
        "nutrOrder": 4
    }, {
        "productId": 3,
        "gServing": "<1.0",
        "dailyServing": "-",
        "per100g": "<1.0",
        "nutrOrder": 5
    }, {
        "productId": 3,
        "gServing": "<1.0",
        "dailyServing": "-",
        "per100g": 3.5,
        "nutrOrder": 6
    }, {
        "productId": 3,
        "gServing": 5.8,
        "dailyServing": "-",
        "per100g": 25.3,
        "nutrOrder": 7
    }, {
        "productId": 3,
        "gServing": 7.8,
        "dailyServing": 3,
        "per100g": 35.3,
        "nutrOrder": 8
    }, {
        "productId": 3,
        "gServing": 3.4,
        "dailyServing": 4,
        "per100g": 15.4,
        "nutrOrder": 9
    }, {
        "productId": 3,
        "gServing": 135,
        "dailyServing": 6,
        "per100g": 617,
        "nutrOrder": 11
    }, {
        "productId": 4,
        "gServing": 511,
        "dailyServing": 6,
        "per100g": 2330,
        "nutrOrder": 1
    }, {
        "productId": 4,
        "gServing": 3.8,
        "dailyServing": 8,
        "per100g": 17.4,
        "nutrOrder": 2
    }, {
        "productId": 4,
        "gServing": 8.2,
        "dailyServing": 12,
        "per100g": 37.4,
        "nutrOrder": 3
    }, {
        "productId": 4,
        "gServing": 1.7,
        "dailyServing": 7,
        "per100g": 7.7,
        "nutrOrder": 4
    }, {
        "productId": 4,
        "gServing": "<1.0",
        "dailyServing": "-",
        "per100g": "<1.0",
        "nutrOrder": 5
    }, {
        "productId": 4,
        "gServing": "<1.0",
        "dailyServing": "-",
        "per100g": 3.5,
        "nutrOrder": 6
    }, {
        "productId": 4,
        "gServing": 5.8,
        "dailyServing": "-",
        "per100g": 26.2,
        "nutrOrder": 7
    }, {
        "productId": 4,
        "gServing": 7.8,
        "dailyServing": 3,
        "per100g": 35.4,
        "nutrOrder": 8
    }, {
        "productId": 4,
        "gServing": 3.4,
        "dailyServing": 4,
        "per100g": 15.4,
        "nutrOrder": 9
    }, {
        "productId": 4,
        "gServing": 136,
        "dailyServing": 6,
        "per100g": 618,
        "nutrOrder": 11
    }, {
        "productId": 5,
        "gServing": 377,
        "dailyServing": 4,
        "per100g": 2510,
        "nutrOrder": 1
    }, {
        "productId": 5,
        "gServing": 3,
        "dailyServing": 6,
        "per100g": 20.2,
        "nutrOrder": 2
    }, {
        "productId": 5,
        "gServing": 7.3,
        "dailyServing": 10,
        "per100g": 48.5,
        "nutrOrder": 3
    }, {
        "productId": 5,
        "gServing": 1.2,
        "dailyServing": 5,
        "per100g": 8.2,
        "nutrOrder": 4
    }, {
        "productId": 5,
        "gServing": "<1.0",
        "dailyServing": "-",
        "per100g": "<1.0",
        "nutrOrder": 5
    }, {
        "productId": 5,
        "gServing": 2.4,
        "dailyServing": "-",
        "per100g": 15.9,
        "nutrOrder": 6
    }, {
        "productId": 5,
        "gServing": 3.3,
        "dailyServing": "-",
        "per100g": 22,
        "nutrOrder": 7
    }, {
        "productId": 5,
        "gServing": 2.8,
        "dailyServing": 1,
        "per100g": 18.7,
        "nutrOrder": 8
    }, {
        "productId": 5,
        "gServing": 1.3,
        "dailyServing": 1,
        "per100g": 8.7,
        "nutrOrder": 9
    }, {
        "productId": 5,
        "gServing": 68,
        "dailyServing": 3,
        "per100g": 454,
        "nutrOrder": 11
    }, {
        "productId": 5,
        "gServing": 1,
        "dailyServing": 3,
        "per100g": 6.8,
        "nutrOrder": 10
    }, {
        "productId": 6,
        "gServing": 584,
        "dailyServing": 7,
        "per100g": 2650,
        "nutrOrder": 1
    }, {
        "productId": 6,
        "gServing": 5.6,
        "dailyServing": 11,
        "per100g": 25.3,
        "nutrOrder": 2
    }, {
        "productId": 6,
        "gServing": 11.9,
        "dailyServing": 17,
        "per100g": 53.9,
        "nutrOrder": 3
    }, {
        "productId": 6,
        "gServing": 2.3,
        "dailyServing": 10,
        "per100g": 10.4,
        "nutrOrder": 4
    }, {
        "productId": 6,
        "gServing": "<1.0",
        "dailyServing": "-",
        "per100g": "<1.0",
        "nutrOrder": 5
    }, {
        "productId": 6,
        "gServing": 1.3,
        "dailyServing": "-",
        "per100g": 5.7,
        "nutrOrder": 6
    }, {
        "productId": 6,
        "gServing": 8.3,
        "dailyServing": "-",
        "per100g": 37.7,
        "nutrOrder": 7
    }, {
        "productId": 6,
        "gServing": 2.2,
        "dailyServing": 1,
        "per100g": 10.1,
        "nutrOrder": 8
    }, {
        "productId": 6,
        "gServing": 1.2,
        "dailyServing": 1,
        "per100g": 5.3,
        "nutrOrder": 9
    }, {
        "productId": 6,
        "gServing": 3,
        "dailyServing": "<1",
        "per100g": 14,
        "nutrOrder": 11
    }, {
        "productId": 6,
        "gServing": 2.7,
        "dailyServing": 27,
        "per100g": 12,
        "nutrOrder": 13
    }, {
        "productId": 6,
        "gServing": 42,
        "dailyServing": 13,
        "per100g": 190,
        "nutrOrder": 14
    }, {
        "productId": 6,
        "gServing": 180,
        "dailyServing": "-",
        "per100g": 820,
        "nutrOrder": 12
    }, {
        "productId": 6,
        "gServing": 1.6,
        "dailyServing": 5,
        "per100g": 7.3,
        "nutrOrder": 10
    }, {
        "productId": 7,
        "gServing": 583,
        "dailyServing": 7,
        "per100g": 2650,
        "nutrOrder": 1
    }, {
        "productId": 7,
        "gServing": 5.6,
        "dailyServing": 11,
        "per100g": 25.2,
        "nutrOrder": 2
    }, {
        "productId": 7,
        "gServing": 11.8,
        "dailyServing": 17,
        "per100g": 53.6,
        "nutrOrder": 3
    }, {
        "productId": 7,
        "gServing": 2.3,
        "dailyServing": 10,
        "per100g": 10.4,
        "nutrOrder": 4
    }, {
        "productId": 7,
        "gServing": "<1.0",
        "dailyServing": "-",
        "per100g": "<1.0",
        "nutrOrder": 5
    }, {
        "productId": 7,
        "gServing": 1.2,
        "dailyServing": "-",
        "per100g": 5.5,
        "nutrOrder": 6
    }, {
        "productId": 7,
        "gServing": 8.3,
        "dailyServing": "-",
        "per100g": 37.6,
        "nutrOrder": 7
    }, {
        "productId": 7,
        "gServing": 2.3,
        "dailyServing": 1,
        "per100g": 10.4,
        "nutrOrder": 8
    }, {
        "productId": 7,
        "gServing": 1.2,
        "dailyServing": 1,
        "per100g": 5.3,
        "nutrOrder": 9
    }, {
        "productId": 7,
        "gServing": 3,
        "dailyServing": "<1",
        "per100g": 16,
        "nutrOrder": 11
    }, {
        "productId": 7,
        "gServing": 2.7,
        "dailyServing": 27,
        "per100g": 12,
        "nutrOrder": 13
    }, {
        "productId": 7,
        "gServing": 43,
        "dailyServing": 13,
        "per100g": 193,
        "nutrOrder": 14
    }, {
        "productId": 7,
        "gServing": 191,
        "dailyServing": "-",
        "per100g": 870,
        "nutrOrder": 12
    }, {
        "productId": 7,
        "gServing": 1.6,
        "dailyServing": 5,
        "per100g": 7.4,
        "nutrOrder": 10
    }, {
        "productId": 8,
        "gServing": 554,
        "dailyServing": 6,
        "per100g": 2520,
        "nutrOrder": 1
    }, {
        "productId": 8,
        "gServing": 6,
        "dailyServing": 12,
        "per100g": 27.2,
        "nutrOrder": 2
    }, {
        "productId": 8,
        "gServing": 10.9,
        "dailyServing": 16,
        "per100g": 49.5,
        "nutrOrder": 3
    }, {
        "productId": 8,
        "gServing": 1.4,
        "dailyServing": 6,
        "per100g": 6.3,
        "nutrOrder": 4
    }, {
        "productId": 8,
        "gServing": "<1.0",
        "dailyServing": "-",
        "per100g": "<1/0",
        "nutrOrder": 5
    }, {
        "productId": 8,
        "gServing": "<1.0",
        "dailyServing": "-",
        "per100g": 4,
        "nutrOrder": 6
    }, {
        "productId": 8,
        "gServing": 8.6,
        "dailyServing": "-",
        "per100g": 39.2,
        "nutrOrder": 7
    }, {
        "productId": 8,
        "gServing": 2.3,
        "dailyServing": 1,
        "per100g": 10.3,
        "nutrOrder": 8
    }, {
        "productId": 8,
        "gServing": 1.1,
        "dailyServing": 1,
        "per100g": 5.2,
        "nutrOrder": 9
    }, {
        "productId": 8,
        "gServing": 5,
        "dailyServing": "<1",
        "per100g": 25,
        "nutrOrder": 11
    }, {
        "productId": 8,
        "gServing": 2.9,
        "dailyServing": "29%RDI",
        "per100g": 13,
        "nutrOrder": 13
    }, {
        "productId": 8,
        "gServing": 46,
        "dailyServing": "14%RDI",
        "per100g": 210,
        "nutrOrder": 14
    }, {
        "productId": 8,
        "gServing": 180,
        "dailyServing": "-",
        "per100g": 820,
        "nutrOrder": 12
    }, {
        "productId": 8,
        "gServing": 1.3,
        "dailyServing": 4,
        "per100g": 6,
        "nutrOrder": 10
    }, {
        "productId": 9,
        "gServing": 554,
        "dailyServing": 6,
        "per100g": 2520,
        "nutrOrder": 1
    }, {
        "productId": 9,
        "gServing": 6,
        "dailyServing": 12,
        "per100g": 27.2,
        "nutrOrder": 2
    }, {
        "productId": 9,
        "gServing": 10.9,
        "dailyServing": 16,
        "per100g": 49.5,
        "nutrOrder": 3
    }, {
        "productId": 9,
        "gServing": 1.4,
        "dailyServing": 6,
        "per100g": 6.3,
        "nutrOrder": 4
    }, {
        "productId": 9,
        "gServing": "<1.0",
        "dailyServing": "-",
        "per100g": "<1.0",
        "nutrOrder": 5
    }, {
        "productId": 9,
        "gServing": "<1.0",
        "dailyServing": "-",
        "per100g": 4,
        "nutrOrder": 6
    }, {
        "productId": 9,
        "gServing": 8.6,
        "dailyServing": "-",
        "per100g": 39.2,
        "nutrOrder": 7
    }, {
        "productId": 9,
        "gServing": 2.3,
        "dailyServing": 1,
        "per100g": 10.3,
        "nutrOrder": 8
    }, {
        "productId": 9,
        "gServing": 1.1,
        "dailyServing": 1,
        "per100g": 5.2,
        "nutrOrder": 9
    }, {
        "productId": 9,
        "gServing": 5,
        "dailyServing": "<1",
        "per100g": 25,
        "nutrOrder": 11
    }, {
        "productId": 9,
        "gServing": 2.9,
        "dailyServing": "29%RDI",
        "per100g": 13,
        "nutrOrder": 13
    }, {
        "productId": 9,
        "gServing": 46,
        "dailyServing": "14%RDI",
        "per100g": 210,
        "nutrOrder": 14
    }, {
        "productId": 9,
        "gServing": 180,
        "dailyServing": "-",
        "per100g": 820,
        "nutrOrder": 12
    }, {
        "productId": 9,
        "gServing": 1.3,
        "dailyServing": 4,
        "per100g": 6,
        "nutrOrder": 10
    }, {
        "productId": 10,
        "gServing": 541,
        "dailyServing": 6,
        "per100g": 2460,
        "nutrOrder": 1
    }, {
        "productId": 10,
        "gServing": 1.1,
        "dailyServing": 2,
        "per100g": 5,
        "nutrOrder": 2
    }, {
        "productId": 10,
        "gServing": 9.5,
        "dailyServing": 14,
        "per100g": 43,
        "nutrOrder": 3
    }, {
        "productId": 10,
        "gServing": 2.9,
        "dailyServing": 12,
        "per100g": 13,
        "nutrOrder": 4
    }, {
        "productId": 10,
        "gServing": 10.1,
        "dailyServing": 3,
        "per100g": 46,
        "nutrOrder": 8
    }, {
        "productId": 10,
        "gServing": 3.3,
        "dailyServing": 4,
        "per100g": 15,
        "nutrOrder": 9
    }, {
        "productId": 10,
        "gServing": 62,
        "dailyServing": 3,
        "per100g": 280,
        "nutrOrder": 11
    }, {
        "productId": 11,
        "gServing": 541,
        "dailyServing": 6,
        "per100g": 2460,
        "nutrOrder": 1
    }, {
        "productId": 11,
        "gServing": 1.5,
        "dailyServing": 3,
        "per100g": 6.8,
        "nutrOrder": 2
    }, {
        "productId": 11,
        "gServing": 9.2,
        "dailyServing": 13,
        "per100g": 42,
        "nutrOrder": 3
    }, {
        "productId": 11,
        "gServing": 2.8,
        "dailyServing": 12,
        "per100g": 13,
        "nutrOrder": 4
    }, {
        "productId": 11,
        "gServing": 9.5,
        "dailyServing": 3,
        "per100g": 43,
        "nutrOrder": 8
    }, {
        "productId": 11,
        "gServing": 4.2,
        "dailyServing": 5,
        "per100g": 19,
        "nutrOrder": 9
    }, {
        "productId": 11,
        "gServing": 64,
        "dailyServing": 3,
        "per100g": 290,
        "nutrOrder": 11
    }, {
        "productId": 12,
        "gServing": 529,
        "dailyServing": 6,
        "per100g": 2400,
        "nutrOrder": 1
    }, {
        "productId": 12,
        "gServing": "<1.0",
        "dailyServing": 2,
        "per100g": 3.6,
        "nutrOrder": 2
    }, {
        "productId": 12,
        "gServing": 8.6,
        "dailyServing": 12,
        "per100g": 39,
        "nutrOrder": 3
    }, {
        "productId": 12,
        "gServing": 1.7,
        "dailyServing": 7,
        "per100g": 7.7,
        "nutrOrder": 4
    }, {
        "productId": 12,
        "gServing": 11.4,
        "dailyServing": 4,
        "per100g": 52,
        "nutrOrder": 8
    }, {
        "productId": 12,
        "gServing": 11.4,
        "dailyServing": 13,
        "per100g": 52,
        "nutrOrder": 9
    }, {
        "productId": 12,
        "gServing": 22,
        "dailyServing": 1,
        "per100g": 100,
        "nutrOrder": 11
    }, {
        "productId": 13,
        "gServing": 537,
        "dailyServing": 6,
        "per100g": 2440,
        "nutrOrder": 1
    }, {
        "productId": 13,
        "gServing": "<1.0",
        "dailyServing": 2,
        "per100g": 3.9,
        "nutrOrder": 2
    }, {
        "productId": 13,
        "gServing": 9,
        "dailyServing": 13,
        "per100g": 41,
        "nutrOrder": 3
    }, {
        "productId": 13,
        "gServing": 2.2,
        "dailyServing": 9,
        "per100g": 10,
        "nutrOrder": 4
    }, {
        "productId": 13,
        "gServing": 10.8,
        "dailyServing": 3,
        "per100g": 49,
        "nutrOrder": 8
    }, {
        "productId": 13,
        "gServing": 10.1,
        "dailyServing": 11,
        "per100g": 46,
        "nutrOrder": 9
    }, {
        "productId": 13,
        "gServing": 26,
        "dailyServing": 1,
        "per100g": 120,
        "nutrOrder": 11
    }, {
        "productId": 14,
        "gServing": 522,
        "dailyServing": 6,
        "per100g": 2370,
        "nutrOrder": 1
    }, {
        "productId": 14,
        "gServing": 3.8,
        "dailyServing": 8,
        "per100g": 17.2,
        "nutrOrder": 2
    }, {
        "productId": 14,
        "gServing": 8.5,
        "dailyServing": 12,
        "per100g": 38.5,
        "nutrOrder": 3
    }, {
        "productId": 14,
        "gServing": 1.5,
        "dailyServing": 6,
        "per100g": 6.6,
        "nutrOrder": 4
    }, {
        "productId": 14,
        "gServing": 8.5,
        "dailyServing": 3,
        "per100g": 38.6,
        "nutrOrder": 8
    }, {
        "productId": 14,
        "gServing": 5.5,
        "dailyServing": 6,
        "per100g": 25.2,
        "nutrOrder": 9
    }, {
        "productId": 14,
        "gServing": 10.3,
        "dailyServing": 4,
        "per100g": 469,
        "nutrOrder": 11
    }, {
        "productId": 15,
        "gServing": 544,
        "dailyServing": 6,
        "per100g": 2470,
        "nutrOrder": 1
    }, {
        "productId": 15,
        "gServing": 4.3,
        "dailyServing": 9,
        "per100g": 19.3,
        "nutrOrder": 2
    }, {
        "productId": 15,
        "gServing": 9.5,
        "dailyServing": 14,
        "per100g": 43,
        "nutrOrder": 3
    }, {
        "productId": 15,
        "gServing": 1.6,
        "dailyServing": 7,
        "per100g": 7.3,
        "nutrOrder": 4
    }, {
        "productId": 15,
        "gServing": 7.2,
        "dailyServing": 2,
        "per100g": 32.6,
        "nutrOrder": 8
    }, {
        "productId": 15,
        "gServing": 3.7,
        "dailyServing": 4,
        "per100g": 17,
        "nutrOrder": 9
    }, {
        "productId": 15,
        "gServing": 61,
        "dailyServing": 3,
        "per100g": 276,
        "nutrOrder": 11
    }];
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/nutrition.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRODUCTS; });
var PRODUCTS = [{
        "id": 1,
        "title": "Peanut Butter Crunchy",
        "image": "peanut-butter-crunchy",
        "caption": "NEVER OILY, NEVER DRY. Australia's favourite peanut butter!",
        "content": "Over half the daily nut target (30g) in each serving\nSource of protein, niacin & magnesium\nNo artificial colours, flavours or preservatives\nSource of good fats (monounsaturated)\nNutty Energy\nGluten Free",
        "ingredients": "ROASTED <strong>PEANUTS</strong> (85%), VEGETABLE OILS (CONTAINS ANTIOXIDANT (320)), SUGAR, SALT",
        "allergen": "CONTAINS PEANUTS",
        "colour": "red",
        "nuts": 60,
        "qty_nuts": 18
    }, {
        "id": 2,
        "title": "Peanut Butter Smooth",
        "image": "peanut-butter-smooth",
        "caption": "NEVER OILY, NEVER DRY. Australia's favourite peanut butter!",
        "content": "Over half the daily nut target (30g) in each serving\nSource of protein, niacin & magnesium\nNo artificial colours, flavours or preservatives \nSource of good fats (monounsaturated)\nNutty Energy\nGluten Free",
        "ingredients": "ROASTED <strong>PEANUTS</strong> (85%), VEGETABLE OILS (CONTAINS ANTIOXIDANT (320)), SUGAR, SALT",
        "allergen": "CONTAINS PEANUTS",
        "colour": "blue",
        "nuts": 60,
        "qty_nuts": 18
    }, {
        "id": 3,
        "title": "Peanut Butter Light Smooth",
        "image": "light-spread-smooth",
        "caption": "NEVER OILY, NEVER DRY, with 25% less fat than regular KRAFT Peanut Butter.",
        "content": "No artificial colours, flavours or preservatives \nSource of good fats (monounsaturated)\nNutty Energy\nGluten Free",
        "ingredients": "ROASTED <strong>PEANUTS</strong> (63%), MALTODEXTRIN (FROM TAPIOCA), SUGAR, VEGETABLE OIL (CONTAINS ANTIOXIDANT (320)), SALT, EMULSIFIER (471)",
        "allergen": "CONTAINS PEANUTS",
        "colour": "blue",
        "nuts": 43,
        "qty_nuts": 13
    }, {
        "id": 4,
        "title": "Peanut Butter Light Crunchy",
        "image": "light-spread-crunchy",
        "caption": "NEVER OILY, NEVER DRY, with 25% less fat than regular KRAFT Peanut Butter.",
        "content": "No artificial colours, flavours or preservatives \nSource of good fats (monounsaturated)\nNutty Energy\nGluten Free",
        "ingredients": "ROASTED <strong>PEANUTS</strong> (63%), MALTODEXTRIN (FROM TAPIOCA), SUGAR, VEGETABLE OIL (CONTAINS ANTIOXIDANT (320)), SALT, EMULSIFIER (471)",
        "allergen": "CONTAINS PEANUTS",
        "colour": "red",
        "nuts": 43,
        "qty_nuts": 13
    }, {
        "id": 6,
        "title": "Peanut Butter No added Sugar & Salt Smooth",
        "image": "no-sugar-salt-peanut-butter-smooth",
        "caption": "Made from 91% peanuts, this delicious peanut butter has no added sugar and salt!",
        "content": "Two thirds of the daily nut target (30g) in each serving\nSource of protein for muscle and tissue repair. Enjoy as a part of a balanced, varied diet and active lifestyle\nNo artificial colours, flavours or preservatives \nSource of good fats (monounsaturated)\nSource of magnesium & good source of niacin\nGluten Free",
        "ingredients": "ROASTED <strong>PEANUTS</strong> (91%), VEGETABLE OILS (CONTAINS ANTIOXIDANT (320))",
        "allergen": "CONTAINS PEANUTS",
        "colour": "blue",
        "nuts": 66,
        "qty_nuts": 20
    }, {
        "id": 7,
        "title": "Peanut Butter No added Sugar & Salt Crunchy",
        "image": "no-sugar-salt-peanut-butter-crunchy",
        "caption": "Made from 91% peanuts, this delicious peanut butter has no added sugar and salt!",
        "content": "Two thirds of the daily nut target (30g) in each serving\nSource of protein for muscle and tissue repair. Enjoy as a part of a balanced, varied diet and active lifestyle\nNo artificial colours, flavours or preservatives \nSource of good fats (monounsaturated)\nSource of magnesium & good source of niacin\nGluten Free",
        "ingredients": "Roasted <strong>Peanuts</strong> (91%), Vegetable Oils (Contains Antioxidant (320))",
        "allergen": "CONTAINS PEANUTS",
        "colour": "red",
        "nuts": 66,
        "qty_nuts": 20
    }, {
        "id": 8,
        "title": "Peanut Butter Naturals Smooth",
        "image": "natural-peanut-butter-smooth",
        "caption": "Made from 100% peanuts and nothing else! Perfect for a natural, yet delicious peanut fix!",
        "content": "Nothing artificial, No preservatives\nSource of protein and magnesium\nSource of good fats (monounsaturated)\nGluten Free",
        "ingredients": "<strong>PEANUTS</strong> (100%)",
        "allergen": "CONTAINS PEANUTS",
        "colour": "blue",
        "nuts": 73,
        "qty_nuts": 22
    }, {
        "id": 9,
        "title": "Peanut Butter Naturals Crunchy",
        "image": "natural-peanut-butter-crunchy",
        "caption": "Made from 100% peanuts and nothing else! Perfect for a natural, yet delicious peanut fix!",
        "content": "Nothing artificial, No preservatives\nSource of protein and magnesium\nSource of good fats (monounsaturated)\nGluten Free",
        "ingredients": "<strong>PEANUTS</strong> (100%)",
        "allergen": "CONTAINS PEANUTS",
        "colour": "red",
        "nuts": 73,
        "qty_nuts": 22
    }, {
        "id": 10,
        "title": "Cashew Spread Smooth",
        "image": "cashew-spread",
        "caption": "A sensationally smooth and creamy spread perfect on hot crumpets in the morning!",
        "content": 0,
        "ingredients": "VEGETABLE OIL, MALTODEXTRIN (FROM CORN), <strong>CASHEWS</strong> (25%), <strong>MILK</strong> SOLIDS, SUGAR, EMULSIFIERS (471, 322), SALT, OTHER TREE <strong>NUTS</strong>.",
        "allergen": "CONTAINS MILK, CASHEWS, ALMONDS, HAZELNUTS AND PISTACHIO.\nMANUFACTURED ON EQUIPMENT THAT ALSO PROCESSES OTHER TREE NUTS, WHEAT, BARLEY, RYE AND SOY.",
        "colour": "orange",
        "nuts": 18,
        "qty_nuts": 5.5
    }, {
        "id": 11,
        "title": "Almond Spread Crunchy",
        "image": "almond-spread",
        "caption": "A delicious creamy texture perfectly blended with real pieces of roasted almond!",
        "content": 0,
        "ingredients": "VEGETABLE OIL, MALTODEXTRIN (FROM CORN), <strong>ALMONDS</strong> (23%), <strong>MILK</strong> SOLIDS, SUGAR, EMULSIFIERS (471, 322), SALT, OTHER TREE <strong>NUTS</strong>.",
        "allergen": "CONTAINS MILK, ALMONDS, CASHEWS, HAZELNUTS AND PISTACHIO.\nMANUFACTURED ON EQUIPMENT THAT ALSO PROCESSES OTHER TREE NUTS, WHEAT, BARLEY, RYE AND SOY",
        "colour": "purple",
        "nuts": 16,
        "qty_nuts": 5
    }, {
        "id": 12,
        "title": "Hazelnut Spread Smooth",
        "image": "hazelnut-spread-smooth",
        "caption": "A smooth hazelnutty spread perfect on pancakes or even in milkshakes!",
        "content": 0,
        "ingredients": "SUGAR, VEGETABLE OIL, <strong>HAZELNUTS</strong> (13%), COCOA POWDER, <strong>MILK</strong> SOLIDS, EMULSIFIERS (471, 322), SALT, FLAVOUR (CONTAINS <strong>HAZELNUTS</strong>).",
        "allergen": "CONTAINS MILK AND HAZELNUTS.\nMANUFACTURED ON EQUIPMENT THAT ALSO PROCESSES OTHER TREE NUTS, WHEAT, BARLEY, RYE AND SOY.",
        "colour": "blue",
        "nuts": 9,
        "qty_nuts": 2.8
    }, {
        "id": 13,
        "title": "Hazelnut Spread Crunchy",
        "image": "hazelnut-spread-crunchy",
        "caption": "Delicious hazelnutty goodness with crunch! Enjoy on toast or straight from the jar!",
        "content": 0,
        "ingredients": "SUGAR, VEGETABLE OIL, <strong>HAZELNUTS</strong> (13%), COCOA POWDER, <strong>MILK</strong> SOLIDS, EMULSIFIERS (471, 322), SALT, FLAVOUR (CONTAINS <strong>HAZELNUTS</strong>).",
        "allergen": "CONTAINS MILK AND HAZELNUTS.\nMANUFACTURED ON EQUIPMENT THAT ALSO PROCESSES OTHER TREE NUTS, WHEAT, BARLEY, RYE AND SOY.",
        "colour": "red",
        "nuts": 9,
        "qty_nuts": 2.8
    }, {
        "id": 14,
        "title": "Sweet Honey Peanut Spread",
        "image": "sweet-honey-smooth",
        "caption": "A delicious combination of roasted peanuts blended with a drizzle of sweet honey.",
        "content": 0,
        "ingredients": "<strong>PEANUTS</strong> (70%), SUGAR, HONEY (3%), VEGETABLE OILS (CONTAINS SOY), SALT, <strong>PEANUT OIL</strong>",
        "allergen": "CONTAINS PEANUTS & SOY",
        "colour": "orangered",
        "nuts": 50,
        "qty_nuts": 15
    }, {
        "id": 15,
        "title": "Cinnamon Spice Peanut Spread",
        "image": "cinnamon-spice-smooth",
        "caption": "A delicious combination of roasted peanuts and real crushed cinnamon.",
        "content": 0,
        "ingredients": "<strong>PEANUTS</strong> (78%), SUGAR, VEGETABLE OILS (CONTAINS SOY), CINNAMON (1%), <strong>PEANUT OIL</strong>, SALT",
        "allergen": "CONTAINS PEANUTS & SOY",
        "colour": "pink",
        "nuts": 56,
        "qty_nuts": 17
    }];
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/products.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product() {
    }
    return Product;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/product.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterByPipe = (function () {
    function FilterByPipe() {
    }
    FilterByPipe.prototype.transform = function (items, args) {
        if (items == null) {
            return null;
        }
        return items.filter(function (item) { return item.productId === args; });
    };
    FilterByPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Pipe */])({
            name: 'filterBy'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterByPipe);
    return FilterByPipe;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/filter-data.pipe.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(348);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
        this.firebaseUrl = 'https://kraft-90cb5.firebaseio.com/data';
    }
    DataService.prototype.postData = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify(data);
        return this._http.post('https://kraft-90cb5.firebaseio.com/data', body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/data.service.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/pramodx/Projects/angular2-kraft-v2/src/polyfills.js.map

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = ".login-container {\n  padding: 40px 0 20px; }\n  .login-container span.error {\n    display: none;\n    padding: 2px 5px;\n    color: #f00; }\n  .login-container .form-control.ng-dirty.ng-invalid + span.error {\n    display: inline-block; }\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px;\n  margin-top: 10px;\n  background-color: #eee;\n  border-radius: 7px; }\n  nav a {\n    display: inline-block;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    text-align: center; }\n    nav a.active {\n      font-weight: bold;\n      font-size: 16px; }\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "table.nutrition-info {\n  border-collapse: collapse;\n  border: 1px solid #666; }\n  table.nutrition-info tr:nth-child(even) {\n    background-color: #eee; }\n  table.nutrition-info tr th,\n  table.nutrition-info tr td {\n    padding: 5px;\n    text-align: center;\n    border-bottom: 1px solid #666; }\n  table.nutrition-info tbody tr th {\n    text-align: left; }\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = ".product-detail section {\n  padding: 20px; }\n  .product-detail section + section {\n    border-top: 1px solid #ccc; }\n\n.product-detail img {\n  display: table;\n  margin: 0 auto; }\n\n.product-detail dl dd {\n  margin-bottom: 10px; }\n\n.product-detail h4 {\n  margin-top: 0; }\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = ".product-item {\n  text-align: center; }\n  .product-item img {\n    height: 100px; }\n    .product-item img:hover {\n      cursor: pointer; }\n"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = ".recipe-detail {\n  padding-top: 20px; }\n  .recipe-detail header {\n    padding: 0 15px; }\n  .recipe-detail h3 {\n    padding: 20px 0;\n    margin-bottom: 20px;\n    text-align: center;\n    border-top: 3px double #ccc;\n    border-bottom: 3px double #ccc; }\n  .recipe-detail .product-image {\n    padding: 20px 0;\n    max-width: 100px;\n    margin: auto; }\n  .recipe-detail p.copy-text {\n    white-space: pre-line; }\n  .recipe-detail .recipe-image {\n    margin-top: 10px;\n    box-shadow: 3px 5px 8px #888; }\n  .recipe-detail a.recipe-list-link {\n    padding: 5px 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px; }\n"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = ".editor-form h4 {\n  padding: 20px 0;\n  margin-bottom: 20px;\n  text-align: center;\n  border-top: 3px double #ccc;\n  border-bottom: 3px double #ccc; }\n\n.editor-form span.error {\n  display: none;\n  padding: 2px 5px;\n  color: #f00; }\n\n.editor-form .form-control.ng-dirty.ng-invalid + span.error {\n  display: inline-block; }\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = ".recipe-list {\n  padding: 20px 0; }\n  .recipe-list .panel-heading {\n    position: relative; }\n  .recipe-list .add-recipe {\n    border: 1px solid #337ab7;\n    border-radius: 5px;\n    padding: 5px 10px;\n    position: absolute;\n    right: 10px;\n    top: 5px; }\n  .recipe-list table {\n    display: table;\n    max-height: 400px;\n    overflow: auto; }\n    .recipe-list table tr.list-group-item {\n      display: table-row;\n      text-transform: uppercase; }\n    .recipe-list table tr:nth-child(even) {\n      background-color: #def; }\n    .recipe-list table tr td.title {\n      width: 95%; }\n  .recipe-list a.glyphicon {\n    display: inline;\n    text-indent: -999em; }\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<main-nav></main-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-container\">\n    <div class=\"row\">\n\n        <div class=\"col-md-6 col-md-offset-3\">\n            <div class=\"clearfix\"><button class=\"btn btn-warning pull-right\" (click)=\"logOut()\">Logout</button></div>\n            <form [formGroup]=\"loginForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                <fieldset class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"text\" class=\"form-control\" id=\"email\"  #email placeholder=\"Enter Valid Email\" [formControl]=\"loginForm.controls.email\">\n                    <span class=\"error\">Please enter a valid email address</span>\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"password\"  #password placeholder=\"Enter Password\" [formControl]=\"loginForm.controls.password\">\n                    <span class=\"error\">Please enter password</span>\n                </fieldset>\n                <fieldset class=\"pull-right\">\n                    <button class=\"btn btn-secondary\">Cancel</button>\n                    <button [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"btn btn-primary\">Login</button>\n                </fieldset>\n            </form>\n            <small>Login details for test purpose: test@test.com/Test123</small>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav>\n        <a [routerLink]=\"['/admin']\" routerLinkActive=\"active\">Admin</a>\n        <a [routerLink]=\"['/products']\" routerLinkActive=\"active\">Products</a>\n        <a [routerLink]=\"['/recipes']\" routerLinkActive=\"active\">Recipes</a>\n    </nav>\n</div>"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<table class=\"nutrition-info\">\n    <thead>\n        <tr>\n            <th>&nbsp;</th>\n            <th>per 22g serving</th>\n            <th>% Daily Intake per serving</th>\n            <th>per 100g</th>\n        </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let nutrition of ( nutritions | filterBy: product.id )\">\n        <th>{{nutrients[nutrition.nutrOrder - 1].name}}</th>\n        <td>{{nutrition.gServing}}{{nutrients[nutrition.nutrOrder - 1].units}}</td>\n        <td>{{nutrition.dailyServing}}</td>\n        <td>{{nutrition.per100g}}{{nutrients[nutrition.nutrOrder - 1].units}}</td>\n    </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<div class=\"product-detail\" *ngIf=\"product == null\">\n    <h2>No Product Selected</h2>\n</div>\n<div class=\"product-detail\" *ngIf=\"product!=null\">\n    <section>\n        <h2>KRAFT - {{product.title}}</h2>\n        <p>{{product.caption}}</p>\n\n        <img [src]=\"getImagePath(product.image)\" alt=\"{{product.title}}\"/>\n    </section>\n    <section>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <dl>\n                    <dt>Ingredients</dt>\n                    <dd [innerHTML]=\"product.ingredients\"></dd>\n\n                    <dt>Allergen</dt>\n                    <dd>{{product.allergen}}</dd>\n\n                    <dt>Quantity of Nuts per serving</dt>\n                    <dd>{{product.qty_nuts}}g</dd>\n\n                    <dt>Daily Nut Target</dt>\n                    <dd>{{product.nuts}}</dd>\n                </dl>\n            </div>\n            <div class=\"col-md-6 recipe-section\">\n                <h4 *ngIf=\"recipes.length > 0\">Recipes with this product</h4>\n                <ul>\n                    <li *ngFor=\"let recipe of recipes\">\n                        <a href=\"#\" [routerLink]=\"['/recipes/recipe/', recipe.$key]\">{{recipe.name}}</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section>\n        <nutrition-data [product]=\"product\"></nutrition-data>\n    </section>\n\n</div>"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-md-6\">\n        <products></products>\n    </div>\n    <div class=\"col-md-6\">\n        <product-detail></product-detail>\n    </div>\n</div>\n"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "<h1>List of Kraft Products</h1>\n<div class=\"product-container\">\n  <div class=\"product-item col-md-4\" *ngFor=\"let product of products\">\n    <img [src]=\"getImagePath(product.image)\" (click)=\"onSelectProduct(product)\"/>\n    <p>{{product.title}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = "<div class=\"container recipe-detail\" *ngIf=\"recipe | async\">\n    <a href=\"#\" [routerLink]=\"['/recipes']\" class=\"btn recipe-list-link\">Back to recipes</a>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <header>\n                <h3>{{ (recipe | async)?.name }}</h3>\n                <p><strong>Prep Time:</strong> {{ (recipe | async)?.preptime }}mins</p>\n                <p><strong>Serves:</strong> {{ (recipe | async)?.serves }}</p>\n            </header>\n            <div class=\"col-md-4\">\n                <img *ngIf=\"product\" class=\"pull-right product-image\" [src]=\"getProductImage(productId)\"/>\n                <h4>What you need</h4>\n                <p class=\"copy-text\">\n                    {{ (recipe | async)?.need }}\n                </p>\n\n            </div>\n            <div class=\"col-md-4\">\n                <h4>How to make it</h4>\n                <p class=\"copy-text\">\n                    {{ (recipe | async)?.making }}\n                </p>\n            </div>\n            <div class=\"col-md-4\">\n                <img class=\"recipe-image\" [src]=\"getImagePath((recipe | async)?.recipe_image)\"\n                     alt=\"{{ (recipe | async)?.recipe_image }}\">\n\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "<div class=\"container editor-form\">\n    <h4>{{_mode }} Recipe </h4>\n    <div class=\"col-md-6 col-md-offset-3\">\n        <form [formGroup]=\"recipeEditForm\"  #f=\"ngForm\">\n            <fieldset class=\"form-group\">\n                <label for=\"name\">Recipe Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\"  #name placeholder=\"Enter Recipe Name\" [formControl]=\"recipeEditForm.controls['name']\">\n                <span class=\"error\">Please enter a recipe name</span>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <label for=\"product_id\">Recipe Name</label>\n                <select class=\"form-control\" id=\"product_id\" name=\"product_id\" #product_id  [formControl]=\"recipeEditForm.controls['product_id']\">\n                    <option value=\"\">Select a Product</option>\n                    <option *ngFor=\"let product of products\" value=\"{{product.id}}\">{{product.title}}</option>\n                </select>\n                <span class=\"error\">Please choose a product</span>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <label for=\"need\">What you need</label>\n                <textarea class=\"form-control\" id=\"need\" #need rows=\"6\" placeholder=\"Enter Ingredients\"  [formControl]=\"recipeEditForm.controls['need']\"></textarea>\n                <span class=\"error\">Please enter a ingredients</span>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <label for=\"making\">How to make it</label>\n                <textarea class=\"form-control\" id=\"making\" #making rows=\"6\" placeholder=\"Enter steps to make\" [formControl]=\"recipeEditForm.controls['making']\"></textarea>\n                <span class=\"error\">Please enter how to make</span>\n            </fieldset>\n            <fieldset class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <label for=\"preptime\">Preparation Time</label>\n                        <input type=\"text\" class=\"form-control\" id=\"preptime\" #preptime placeholder=\"Preparation Time\" [formControl]=\"recipeEditForm.controls['preptime']\">\n                        <span class=\"error\">Please enter preparation time</span>\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"serves\">Serves</label>\n                        <input type=\"text\" class=\"form-control\" id=\"serves\" #serves placeholder=\"Serves\" [formControl]=\"recipeEditForm.controls['serves']\">\n                        <span class=\"error\">Please enter servings</span>\n                    </div>\n                </div>\n            </fieldset>\n            <fieldset class=\"form-group\">\n                <div class=\"pull-right\">\n                    <button (click)=\"goBack()\" class=\"btn btn-cancel\">Cancel</button>\n                    <button type=\"reset\" class=\"btn btn-warning\">Reset</button>\n                    <button [disabled]=\"!f.valid\" (click)=\"onSubmit(name.value, product_id.value, need.value, making.value, preptime.value, serves.value)\" class=\"btn btn-primary\" [innerHTML]=\"_mode == 'Add' ? 'Submit' : 'Update'\"></button>\n                </div>\n            </fieldset>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"items\">\n    <div class=\"recipe-list\" *ngIf=\"recipes == null\">\n        <h3>Loading Recipes...</h3>\n    </div>\n    <div class=\"recipe-list\" *ngIf=\"recipes != null && recipes.length == 0\">\n        <h3>No recipes yet!</h3>\n        <p>You may start by creating recipes by clicking <a [routerLink]=\"['editor/add']\">here</a></p>\n    </div>\n    <div class=\"recipe-list\" *ngIf=\"recipes != null && recipes.length > 0\">\n        <div class=\"panel panel-default\">\n            <!-- Default panel contents -->\n            <div class=\"panel-heading\">Recipe List\n                <a href=\"#\" class=\"btn btn-primary add-recipe pull-right\" [routerLink]=\"['editor/add']\" *ngIf=\"isLoggedIn\">Add Recipe</a>\n            </div>\n\n\n            <!-- List group -->\n            <table class=\"table\">\n                <tr class=\"list-group-item\" *ngFor=\"let recipe of recipes \">\n                    <td class=\"title\"><a href=\"#\" [routerLink]=\"['recipe/', recipe.uid]\">{{recipe.name}}</a></td>\n                    <td *ngIf=\"isLoggedIn\">\n                        <a href=\"#\" [routerLink]=\"['editor/edit/', recipe.uid]\" class=\"glyphicon glyphicon-pencil\" title=\"Edit\" aria-hidden=\"true\"></a>\n                    </td>\n                    <td *ngIf=\"isLoggedIn\">\n                        <a href=\"#\" [routerLink]=\"['/recipes']\" (click)=\"deleteRecipe(recipe.uid)\" class=\"glyphicon glyphicon-remove\" title=\"Delete\" aria-hidden=\"true\"></a>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ })

},[1021]);
//# sourceMappingURL=main.bundle.map