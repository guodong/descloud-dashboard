webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(116);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_service__ = __webpack_require__(37);
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
    function AppComponent(apiService, uiService) {
        this.apiService = apiService;
        this.uiService = uiService;
        this.title = 'app works!';
        this.err = '';
        this.user = {};
        this.collapse = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var me = this;
        this.apiService.getUserInfo().subscribe(function (resp) {
            console.log(resp);
            me.user = resp;
        }, function (err) { return me.err = err; });
    };
    AppComponent.prototype.toggleSidebar = function () {
        this.uiService.toggleSidebar();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'body',
        template: __webpack_require__(193),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ui_service__["a" /* UiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ui_service__["a" /* UiService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_alert__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_callback_auth_callback_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__desktops_desktops_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__desktops_create_desktops_create_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ui_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__desktops_view_desktops_view_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__desktops_edit_desktops_edit_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__desktops_stats_desktops_stats_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__desktops_destroy_modal_desktops_destroy_modal_component__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', redirectTo: '/desktops', pathMatch: 'full' },
    { path: 'desktops', component: __WEBPACK_IMPORTED_MODULE_11__desktops_desktops_component__["a" /* DesktopsComponent */] },
    { path: 'desktops/create', component: __WEBPACK_IMPORTED_MODULE_12__desktops_create_desktops_create_component__["a" /* DesktopsCreateComponent */] },
    { path: 'desktops/stats/:id', component: __WEBPACK_IMPORTED_MODULE_16__desktops_stats_desktops_stats_component__["a" /* DesktopsStatsComponent */] },
    { path: 'desktops/view/:id', component: __WEBPACK_IMPORTED_MODULE_14__desktops_view_desktops_view_component__["a" /* DesktopsViewComponent */] },
    { path: 'auth_callback_github', component: __WEBPACK_IMPORTED_MODULE_8__auth_callback_auth_callback_component__["a" /* AuthCallbackComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__auth_callback_auth_callback_component__["a" /* AuthCallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__desktops_desktops_component__["a" /* DesktopsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__desktops_create_desktops_create_component__["a" /* DesktopsCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_14__desktops_view_desktops_view_component__["a" /* DesktopsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__desktops_edit_desktops_edit_component__["a" /* DesktopsEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__desktops_stats_desktops_stats_component__["a" /* DesktopsStatsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__desktops_destroy_modal_desktops_destroy_modal_component__["a" /* DesktopsDestroyModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_13__ui_service__["a" /* UiService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthCallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthCallbackComponent = (function () {
    function AuthCallbackComponent(apiService) {
        this.apiService = apiService;
        this.err = '';
    }
    AuthCallbackComponent.prototype.ngOnInit = function () {
        var me = this;
        var code = me.getParameterByName('code');
        me.apiService.getToken(code).subscribe(function (resp) {
            localStorage.setItem('token', resp.token);
            location.replace('/');
        }, function (err) { return me.err = err; });
    };
    AuthCallbackComponent.prototype.getParameterByName = function (name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    return AuthCallbackComponent;
}());
AuthCallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-auth-callback',
        template: __webpack_require__(194),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], AuthCallbackComponent);

var _a;
//# sourceMappingURL=auth-callback.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__desktop__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopsCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DesktopsCreateComponent = (function () {
    function DesktopsCreateComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__desktop__["a" /* Desktop */]('', 'Desktop');
        this.loading = false;
    }
    DesktopsCreateComponent.prototype.ngOnInit = function () {
    };
    DesktopsCreateComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        this.apiService.createDesktop(this.model)
            .subscribe(function (resp) { return _this.router.navigate(['/desktops']); });
    };
    return DesktopsCreateComponent;
}());
DesktopsCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-desktops-create',
        template: __webpack_require__(195),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DesktopsCreateComponent);

var _a, _b;
//# sourceMappingURL=desktops-create.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopsDestroyModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesktopsDestroyModalComponent = (function () {
    function DesktopsDestroyModalComponent() {
    }
    DesktopsDestroyModalComponent.prototype.ngOnInit = function () {
    };
    return DesktopsDestroyModalComponent;
}());
DesktopsDestroyModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'desktops-destroy-modal',
        template: __webpack_require__(196),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [])
], DesktopsDestroyModalComponent);

//# sourceMappingURL=desktops-destroy-modal.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopsEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesktopsEditComponent = (function () {
    function DesktopsEditComponent() {
    }
    DesktopsEditComponent.prototype.ngOnInit = function () {
    };
    return DesktopsEditComponent;
}());
DesktopsEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-desktops-edit',
        template: __webpack_require__(197),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], DesktopsEditComponent);

//# sourceMappingURL=desktops-edit.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__desktop__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopsStatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DesktopsStatsComponent = (function () {
    function DesktopsStatsComponent(route, apiService) {
        this.route = route;
        this.apiService = apiService;
    }
    DesktopsStatsComponent.prototype.ngOnInit = function () {
        var me = this;
        this.desktop = new __WEBPACK_IMPORTED_MODULE_2__desktop__["a" /* Desktop */]('', '');
        var id = this.route.snapshot.params['id'];
        //me.apiService.getStatsInfo()
    };
    return DesktopsStatsComponent;
}());
DesktopsStatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-desktops-stats',
        template: __webpack_require__(198),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _b || Object])
], DesktopsStatsComponent);

var _a, _b;
//# sourceMappingURL=desktops-stats.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__desktop__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopsViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DesktopsViewComponent = (function () {
    function DesktopsViewComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.isfullscreen = false;
    }
    DesktopsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var me = this;
        this.desktop = new __WEBPACK_IMPORTED_MODULE_3__desktop__["a" /* Desktop */]('', '');
        var id = this.route.snapshot.params['id'];
        setInterval(function () {
            var dom_left = document.getElementById('canvas').offsetLeft;
            if (dom_left != 0) {
                me.isfullscreen = false;
            }
        }, 1000);
        this.apiService.getDesktopInfo(id).subscribe(function (resp) {
            _this.desktop = resp;
            function runClient(port) {
                var ws = new WebSocket('ws://106.75.87.87:' + port);
                me.ws = ws;
                ws.onerror = function () {
                    runClient(port);
                };
                ws.onopen = function () {
                    var canvas = document.getElementById('canvas');
                    canvas.onmousemove = function (e) {
                        var dom_left = document.getElementById('canvas').offsetLeft;
                        var dom_top = document.getElementById('canvas').offsetTop;
                        var scroll_top = document.getElementsByClassName('wrapper')[0].scrollTop;
                        if (me.isfullscreen) {
                            dom_left = 0;
                            dom_top = 0;
                            scroll_top = 0;
                        }
                        var bei = document.getElementById('canvas').offsetWidth / 1440;
                        var x = Math.floor((e.pageX - dom_left) / bei);
                        var y = Math.floor((e.pageY - dom_top + scroll_top) / bei);
                        var buf = new ArrayBuffer(5);
                        var dv = new DataView(buf);
                        dv.setUint8(0, 0);
                        dv.setUint16(1, x, true);
                        dv.setUint16(3, y, true);
                        ws.send(buf);
                    };
                    canvas.onmousedown = function (e) {
                        var buf = new ArrayBuffer(5);
                        var dv = new DataView(buf);
                        dv.setUint8(0, 1);
                        dv.setUint32(1, e.which, true);
                        ws.send(buf);
                    };
                    canvas.onmouseup = function (e) {
                        var buf = new ArrayBuffer(5);
                        var dv = new DataView(buf);
                        dv.setUint8(0, 2);
                        dv.setUint32(1, e.which, true);
                        ws.send(buf);
                    };
                    document.onkeydown = function (e) {
                        if (e.keyCode == 9 || e.keyCode == 32) {
                            e.preventDefault(); // stops its action
                        }
                        var buf = new ArrayBuffer(5);
                        var dv = new DataView(buf);
                        dv.setUint8(0, 3);
                        dv.setUint32(1, me.mapKey(e.which), true);
                        ws.send(buf);
                    };
                    document.onkeyup = function (e) {
                        if (e.keyCode == 9 || e.keyCode == 32) {
                            e.preventDefault(); // stops its action
                        }
                        var buf = new ArrayBuffer(5);
                        var dv = new DataView(buf);
                        dv.setUint8(0, 4);
                        dv.setUint32(1, me.mapKey(e.which), true);
                        ws.send(buf);
                    };
                };
                ws.binaryType = "arraybuffer";
                ws.onmessage = function (msg) {
                    var data = msg.data;
                    var buf = new ArrayBuffer(data);
                    var dv = new DataView(data);
                    var x = dv.getInt32(0, true);
                    var y = dv.getInt32(4, true);
                    var d = data.slice(8);
                    var blob = new Blob([d], { type: 'image/webp' });
                    var url = URL.createObjectURL(blob);
                    var img = new Image;
                    img.onload = function () {
                        var canvas = document.getElementById("canvas");
                        var ctx = canvas.getContext('2d');
                        ctx.drawImage(img, x, y);
                        URL.revokeObjectURL(url);
                    };
                    img.src = url;
                };
            }
            runClient(_this.desktop.port);
        });
    };
    DesktopsViewComponent.prototype.goback = function () {
        this.ws.close();
        this.router.navigate(['/desktops']);
    };
    DesktopsViewComponent.prototype.fullscreen = function () {
        var me = this;
        var canvas = document.getElementById('canvas');
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            canvas.requestFullscreen();
        }
        else if (docElm.webkitRequestFullScreen) {
            canvas.webkitRequestFullScreen();
        }
        this.isfullscreen = true;
    };
    DesktopsViewComponent.prototype.snapshot = function () {
        var canvas = document.getElementById('canvas');
        var dt = canvas.toDataURL('image/png');
        /* Change MIME type to trick the browser to downlaod the file instead of displaying it */
        dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
        /* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
        dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=snapshot.png');
        document.getElementById('snapshot').setAttribute('href', dt);
    };
    DesktopsViewComponent.prototype.mapKey = function (keyCode) {
        var xkm = [[65406, 0, 65406, 0, 0, 0, 0], [65307, 0, 65307, 0, 0, 0, 0], [49, 33, 49, 33, 0, 0, 0], [50, 64, 50, 64, 0, 0, 0], [51, 35, 51, 35, 0, 0, 0], [52, 36, 52, 36, 0, 0, 0],
            [53, 37, 53, 37, 0, 0, 0], [54, 94, 54, 94, 0, 0, 0], [55, 38, 55, 38, 0, 0, 0], [56, 42, 56, 42, 0, 0, 0], [57, 40, 57, 40, 0, 0, 0], [48, 41, 48, 41, 0, 0, 0],
            [45, 95, 45, 95, 0, 0, 0], [61, 43, 61, 43, 0, 0, 0], [65288, 65288, 65288, 65288, 0, 0, 0], [65289, 65056, 65289, 65056, 0, 0, 0], [113, 81, 113, 81, 0, 0, 0],
            [119, 87, 119, 87, 0, 0, 0], [101, 69, 101, 69, 0, 0, 0], [114, 82, 114, 82, 0, 0, 0], [116, 84, 116, 84, 0, 0, 0], [121, 89, 121, 89, 0, 0, 0], [117, 85, 117, 85, 0, 0, 0],
            [105, 73, 105, 73, 0, 0, 0], [111, 79, 111, 79, 0, 0, 0], [112, 80, 112, 80, 0, 0, 0], [91, 123, 91, 123, 0, 0, 0], [93, 125, 93, 125, 0, 0, 0], [65293, 0, 65293, 0, 0, 0, 0],
            [65507, 0, 65507, 0, 0, 0, 0], [97, 65, 97, 65, 0, 0, 0], [115, 83, 115, 83, 0, 0, 0], [100, 68, 100, 68, 0, 0, 0], [102, 70, 102, 70, 0, 0, 0], [103, 71, 103, 71, 0, 0, 0],
            [104, 72, 104, 72, 0, 0, 0], [106, 74, 106, 74, 0, 0, 0], [107, 75, 107, 75, 0, 0, 0], [108, 76, 108, 76, 0, 0, 0], [59, 58, 59, 58, 0, 0, 0], [39, 34, 39, 34, 0, 0, 0],
            [96, 126, 96, 126, 0, 0, 0], [65505, 0, 65505, 0, 0, 0, 0], [92, 124, 92, 124, 0, 0, 0], [122, 90, 122, 90, 0, 0, 0], [120, 88, 120, 88, 0, 0, 0], [99, 67, 99, 67, 0, 0, 0],
            [118, 86, 118, 86, 0, 0, 0], [98, 66, 98, 66, 0, 0, 0], [110, 78, 110, 78, 0, 0, 0], [109, 77, 109, 77, 0, 0, 0], [44, 60, 44, 60, 0, 0, 0], [46, 62, 46, 62, 0, 0, 0],
            [47, 63, 47, 63, 0, 0, 0], [65506, 0, 65506, 0, 0, 0, 0], [65450, 65450, 65450, 65450, 65450, 65450, 269024801], [65513, 65511, 65513, 65511, 0, 0, 0], [32, 0, 32, 0, 0, 0, 0],
            [65509, 0, 65509, 0, 0, 0, 0], [65470, 65470, 65470, 65470, 65470, 65470, 269024769], [65471, 65471, 65471, 65471, 65471, 65471, 269024770],
            [65472, 65472, 65472, 65472, 65472, 65472, 269024771], [65473, 65473, 65473, 65473, 65473, 65473, 269024772], [65474, 65474, 65474, 65474, 65474, 65474, 269024773],
            [65475, 65475, 65475, 65475, 65475, 65475, 269024774], [65476, 65476, 65476, 65476, 65476, 65476, 269024775], [65477, 65477, 65477, 65477, 65477, 65477, 269024776],
            [65478, 65478, 65478, 65478, 65478, 65478, 269024777], [65479, 65479, 65479, 65479, 65479, 65479, 269024778], [65407, 0, 65407, 0, 0, 0, 0], [65300, 0, 65300, 0, 0, 0, 0],
            [65429, 65463, 65429, 65463, 0, 0, 0], [65431, 65464, 65431, 65464, 0, 0, 0], [65434, 65465, 65434, 65465, 0, 0, 0], [65453, 65453, 65453, 65453, 65453, 65453, 269024803],
            [65430, 65460, 65430, 65460, 0, 0, 0], [65437, 65461, 65437, 65461, 0, 0, 0], [65432, 65462, 65432, 65462, 0, 0, 0], [65451, 65451, 65451, 65451, 65451, 65451, 269024802],
            [65436, 65457, 65436, 65457, 0, 0, 0], [65433, 65458, 65433, 65458, 0, 0, 0], [65435, 65459, 65435, 65459, 0, 0, 0], [65438, 65456, 65438, 65456, 0, 0, 0],
            [65439, 65454, 65439, 65454, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [60, 62, 60, 62, 124, 166, 124], [65480, 65480, 65480, 65480, 65480, 65480, 269024779],
            [65481, 65481, 65481, 65481, 65481, 65481, 269024780], [65360, 0, 65360, 0, 0, 0, 0], [65362, 0, 65362, 0, 0, 0, 0], [65365, 0, 65365, 0, 0, 0, 0], [65361, 0, 65361, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [65363, 0, 65363, 0, 0, 0, 0], [65367, 0, 65367, 0, 0, 0, 0], [65364, 0, 65364, 0, 0, 0, 0], [65366, 0, 65366, 0, 0, 0, 0], [65379, 0, 65379, 0, 0, 0, 0],
            [65535, 0, 65535, 0, 0, 0, 0], [65421, 0, 65421, 0, 0, 0, 0], [65508, 0, 65508, 0, 0, 0, 0], [65299, 65387, 65299, 65387, 0, 0, 0], [65377, 65301, 65377, 65301, 0, 0, 0],
            [65455, 65455, 65455, 65455, 65455, 65455, 269024800], [65514, 65512, 65514, 65512, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [65515, 0, 65515, 0, 0, 0, 0], [65516, 0, 65516, 0, 0, 0, 0],
            [65383, 0, 65383, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [65027, 0, 65027, 0, 0, 0, 0], [0, 65513, 0, 65513, 0, 0, 0], [65469, 0, 65469, 0, 0, 0, 0], [0, 65515, 0, 65515, 0, 0, 0], [0, 65517, 0, 65517, 0, 0, 0],
            [269025074, 0, 269025074, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [65454, 65454, 65454, 65454, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [269025046, 0, 269025046, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [269025071, 0, 269025071, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025047, 0, 269025047, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 65511, 0, 65511, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025042, 0, 269025042, 0, 0, 0, 0], [269025053, 0, 269025053, 0, 0, 0, 0],
            [269025044, 269025073, 269025044, 269025073, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025045, 269025068, 269025045, 269025068, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025068, 0, 269025068, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [269025041, 0, 269025041, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025043, 0, 269025043, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025070, 0, 269025070, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [269025068, 0, 269025068, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025113, 0, 269025113, 0, 0, 0, 0], [269025028, 0, 269025028, 0, 0, 0, 0], [269025030, 0, 269025030, 0, 0, 0, 0],
            [269025029, 0, 269025029, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025066, 0, 269025066, 0, 0, 0, 0],
            [269025040, 0, 269025040, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025067, 0, 269025067, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [269025051, 0, 269025051, 0, 0, 0, 0], [269025072, 0, 269025072, 0, 0, 0, 0], [269025139, 0, 269025139, 0, 0, 0, 0], [269025064, 0, 269025064, 0, 0, 0, 0],
            [269025063, 0, 269025063, 0, 0, 0, 0], [269025062, 0, 269025062, 0, 0, 0, 0], [269025075, 0, 269025075, 0, 0, 0, 0], [269025049, 0, 269025049, 0, 0, 0, 0],
            [269025074, 0, 269025074, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [269025171, 0, 269025171, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025173, 0, 269025173, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        var exceptionKeys = {
            '190': '46',
            '16': '65506',
            '17': '65507',
            '18': '65513',
            '34': '65307',
            '191': '47',
            '20': '65509',
            '9': '65289',
            '189': '45',
            '187': '61',
            '8': '65288',
            '220': '92',
            '13': '65293',
            '192': '96',
            '186': '59',
            '222': '34',
            '188': '44',
            '27': '65307',
            '39': '65363',
            '37': '65361',
            '38': '65362',
            '40': '65364' // DOWN ARROW CHROME
        };
        function buildASCIIToXKeyMap(XKeysMap, min) {
            var asciiToX = {};
            for (var i = 0; i < XKeysMap.length; i++) {
                for (var j = 0; j < XKeysMap[i].length; j++) {
                    var key = XKeysMap[i][j];
                    var value = i + min;
                    if (key !== 0)
                        asciiToX[key] = value;
                }
            }
            return asciiToX;
        }
        var keyMap = buildASCIIToXKeyMap(xkm, 8);
        if (exceptionKeys[keyCode])
            keyCode = exceptionKeys[keyCode];
        var key = keyMap[keyCode];
        if (key === undefined || key === null)
            key = 0;
        return key;
    };
    return DesktopsViewComponent;
}());
DesktopsViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-desktops-view',
        template: __webpack_require__(199),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], DesktopsViewComponent);

var _a, _b, _c;
//# sourceMappingURL=desktops-view.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DesktopsComponent = (function () {
    function DesktopsComponent(apiService, uiService, router) {
        this.apiService = apiService;
        this.uiService = uiService;
        this.router = router;
        this.noQuota = false;
    }
    DesktopsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getDesktops().subscribe(function (desktops) { return _this.desktops = desktops; });
    };
    DesktopsComponent.prototype.createDesktop = function () {
        if (this.desktops.length >= 2) {
            this.noQuota = true;
        }
        else {
            this.router.navigate(['/desktops/create']);
        }
    };
    DesktopsComponent.prototype.openDesktop = function (desktop) {
        this.uiService.collapseSidebar();
        this.router.navigate(['/desktops/view', desktop._id]);
    };
    DesktopsComponent.prototype.removeDesktop = function (desktop) {
        var _this = this;
        if (window.confirm('Do you really want to destroy it?')) {
            this.apiService.removeDesktop(desktop).subscribe(function (resp) {
                _this.apiService.getDesktops().subscribe(function (desktops) { return _this.desktops = desktops; });
            });
        }
    };
    return DesktopsComponent;
}());
DesktopsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-desktops',
        template: __webpack_require__(200),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ui_service__["a" /* UiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ui_service__["a" /* UiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DesktopsComponent);

var _a, _b, _c;
//# sourceMappingURL=desktops.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-homepage',
        template: __webpack_require__(201),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [])
], HomepageComponent);

//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ 116:
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

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.apiUrl = 'http://106.75.85.74:3000';
    }
    ApiService.prototype.getUserInfo = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'bearer ' + localStorage.getItem('token') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.apiUrl + '/user', options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.getToken = function (code) {
        return this.http.get(this.apiUrl + '/token?code=' + code)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.getDesktops = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'bearer ' + localStorage.getItem('token') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.apiUrl + '/desktops', options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.createDesktop = function (desktop) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'bearer ' + localStorage.getItem('token') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiUrl + '/desktops', desktop, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.removeDesktop = function (desktop) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'bearer ' + localStorage.getItem('token') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.apiUrl + '/desktops/' + desktop._id, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.getDesktopInfo = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'bearer ' + localStorage.getItem('token') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.apiUrl + '/desktops/' + id, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.getStatsInfo = function (desktop) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'bearer ' + localStorage.getItem('token') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.apiUrl + '/desktops/stats/' + desktop._id, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ApiService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "\n/*.sidebar {*/\n  /*width: 20%;*/\n  /*background: #222d32;*/\n  /*color: #fff;*/\n  /*flex: 1;*/\n  /*order: 1;*/\n/*}*/\n/*.logo {*/\n  /*color: #ffffff;*/\n  /*font-size: 18px;*/\n  /*text-align: center;*/\n  /*padding: 15px 0;*/\n  /*margin-bottom: 60px;*/\n  /*background: #25282d;*/\n  /*height: 60px;*/\n/*}*/\n/*.menu>li>a {*/\n  /*border-left: 3px solid transparent;*/\n  /*padding: 12px 5px 12px 15px;*/\n  /*display: block;*/\n  /*font-size: 14px;*/\n  /*color: #fff;*/\n/*}*/\n/*.menu>li:hover>a, .menu>li.active>a {*/\n  /*border-left-color: #3c8dbc;*/\n  /*background: #2e383c;*/\n/*}*/\n\n/*.main-container {*/\n  /*font-size: 12px;*/\n  /*background: #ededed;*/\n  /*color: #333;*/\n  /*height: 100%;*/\n  /*order: 2;*/\n  /*width: 80%;*/\n/*}*/\n/*.header {*/\n  /*height: 60px;*/\n  /*background: #fff;*/\n  /*border-bottom: 1px solid #e4e7ed;*/\n  /*margin-bottom: 20px;*/\n/*}*/\n/*.header .tool {*/\n  /*width: 150px;*/\n  /*float: right;*/\n  /*padding-top: 10px;*/\n  /*border-left: 1px solid #eee;*/\n  /*height: 100%;*/\n  /*padding-left: 15px;*/\n/*}*/\n/*.header .tool img {*/\n  /*width: 36px;*/\n  /*height: 36px;*/\n  /*border-radius: 50%;*/\n  /*margin-right: 15px;*/\n/*}*/\n/*.des-container {*/\n  /*padding-left: 40px;*/\n  /*padding-right: 40px;*/\n  /*padding-bottom: 20px;*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".page-header {\n  margin: 0;\n}\n.page-header .fa {\n  margin-right: 10px;\n}\n.setting-section {\n  padding: 20px;\n  width: 100%;\n  border-bottom: 1px solid #e6e9ed;\n  float: left;\n  font-size: 14px;\n}\n.setting-section .setting-label {\n  margin-top: 0;\n  float: left;\n  font-weight: 700;\n}\n.setting-section .setting-info {\n  margin-left: 160px;\n  vertical-align: top;\n}\n.checkbox-group li, .radio-group li {\n  float: left;\n  margin-right: 10px;\n  width: 160px;\n}\n.checkbox-group li label, .radio-group li label {\n  display: inline-block;\n  padding-right: 80px;\n  padding-left: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "/*h3 {*/\n  /*line-height: 50px;*/\n/*}*/\n/*.box {*/\n  /*width: 300px;*/\n  /*height: 270px;*/\n  /*border: 1px solid #000;*/\n  /*margin: 0 20px 20px 0;*/\n  /*float: left;*/\n  /*background: #fff;*/\n  /*border: 1px solid #dbd8d8;*/\n/*}*/\n/*.box .title {*/\n  /*padding: 12px 15px;*/\n  /*border-bottom: 1px solid #dbd8d8;*/\n  /*font-weight: bold;*/\n/*}*/\n/*.box .title i {*/\n  /*font-size: 16px;*/\n/*}*/\n/*.box img {*/\n  /*max-width: 260px;*/\n  /*margin: 0 auto;*/\n  /*margin-top: 5px;*/\n  /*display: block;*/\n  /*max-height: 170px;*/\n/*}*/\n/*.box .info {*/\n  /*background: #f7f7f7;*/\n  /*padding: 10px 15px;*/\n  /*font-size: 12px;*/\n/*}*/\n/*.box .btn {*/\n  /*width: 100%;*/\n/*}*/\n.box {\n  max-width: 270px;\n}\n.box.add {\n  text-align: center;\n  height: 270px;\n}\n.box.add .icon {\n  font-size: 48px;\n  margin-top: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "/*\n * Globals\n */\n\n/* Links */\na,\na:focus,\na:hover {\n  color: #fff;\n}\n\n/* Custom default button */\n.btn-secondary,\n.btn-secondary:hover,\n.btn-secondary:focus {\n  color: #333;\n  text-shadow: none; /* Prevent inheritance from `body` */\n  background-color: #fff;\n  border: .05rem solid #fff;\n}\n\n\n/*\n * Base structure\n */\n\n\n.site-wrapper {\n  background: url(\"/assets/images/bg.jpg\");\n  background-size: cover;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 .05rem .1rem rgba(0,0,0,.5);\n}\n\n\n\n/* Extra markup and styles for table-esque vertical and horizontal centering */\n.site-wrapper {\n  display: table;\n  width: 100%;\n  height: 100%; /* For at least Firefox */\n  min-height: 100%;\n  box-shadow: inset 0 0 5rem rgba(0,0,0,.5);\n}\n.site-wrapper-inner {\n  display: table-cell;\n  vertical-align: top;\n}\n.cover-container {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n/* Padding for spacing */\n.inner {\n  padding: 2rem;\n}\n\n\n/*\n * Header\n */\n\n.masthead {\n  margin-bottom: 2rem;\n}\n\n.masthead-brand {\n  margin-bottom: 0;\n}\n\n.nav-masthead .nav-link {\n  padding: .25rem 0;\n  font-weight: bold;\n  color: rgba(255,255,255,.5);\n  background-color: transparent;\n  border-bottom: .25rem solid transparent;\n}\n\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n  border-bottom-color: rgba(255,255,255,.25);\n}\n\n.nav-masthead .nav-link + .nav-link {\n  margin-left: 1rem;\n}\n\n.nav-masthead .active {\n  color: #fff;\n  border-bottom-color: #fff;\n}\n\n@media (min-width: 48em) {\n  .masthead-brand {\n    float: left;\n  }\n  .nav-masthead {\n    float: right;\n  }\n}\n\n\n/*\n * Cover\n */\n\n.cover {\n  padding: 0 1.5rem;\n}\n.cover .btn-lg {\n  padding: .75rem 1.25rem;\n  font-weight: bold;\n}\n\n\n/*\n * Footer\n */\n\n.mastfoot {\n  color: rgba(255,255,255,.5);\n}\n\n\n/*\n * Affix and center\n */\n\n@media (min-width: 40em) {\n  /* Pull out the header and footer */\n  .masthead {\n    position: fixed;\n    top: 0;\n  }\n  .mastfoot {\n    position: fixed;\n    bottom: 0;\n  }\n  /* Start the vertical centering */\n  .site-wrapper-inner {\n    vertical-align: middle;\n  }\n  /* Handle the widths */\n  .masthead,\n  .mastfoot,\n  .cover-container {\n    width: 100%; /* Must be percentage or pixels for horizontal alignment */\n  }\n}\n\n@media (min-width: 62em) {\n  .masthead,\n  .mastfoot,\n  .cover-container {\n    width: 42rem;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <header class=\"main-header\">\n    <!-- Logo -->\n    <a href=\"/\" class=\"logo\">\n      <!-- mini logo for sidebar mini 50x50 pixels -->\n      <span class=\"logo-mini\"><b>D</b>C</span>\n      <!-- logo for regular state and mobile devices -->\n      <span class=\"logo-lg\"><b>Des</b>Cloud</span>\n    </a>\n    <!-- Header Navbar: style can be found in header.less -->\n    <nav class=\"navbar navbar-static-top\">\n      <!-- Sidebar toggle button-->\n      <a href=\"javascript:;\" (click)=\"toggleSidebar()\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n\n      <div class=\"navbar-custom-menu\">\n        <ul class=\"nav navbar-nav\">\n          <!-- User Account: style can be found in dropdown.less -->\n          <li class=\"dropdown user user-menu\">\n            <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <img src=\"{{user.avatar}}\" class=\"user-image\" alt=\"User Image\">\n              <span class=\"hidden-xs\">{{user.username}}</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </header>\n  <!-- Left side column. contains the logo and sidebar -->\n  <aside class=\"main-sidebar\">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class=\"sidebar\">\n      <!-- Sidebar user panel -->\n      <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n          <img src=\"{{user.avatar}}\" class=\"img-circle\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n          <p>{{user.username}}</p>\n        </div>\n      </div>\n      <!-- sidebar menu: : style can be found in sidebar.less -->\n      <ul class=\"sidebar-menu\">\n        <li class=\"header\">MAIN NAVIGATION</li>\n        <li class=\"active\">\n          <a href=\"desktops\">\n            <i class=\"fa fa-laptop\"></i> <span>Desktop Service</span>\n          </a>\n        </li>\n        <li class=\"\">\n          <a href=\"http://cloudwarehub.com\" target=\"_blank\">\n            <i class=\"fa fa-building\"></i> <span>Cloudware Service</span>\n          </a>\n        </li>\n        <li class=\"\">\n          <a href=\"http://descloud.io\" (click)=\"signout()\">\n            <i class=\"fa fa-sign-out\"></i> <span>Sign Out</span>\n          </a>\n        </li>\n      </ul>\n    </section>\n    <!-- /.sidebar -->\n  </aside>\n\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper\">\n\n    <router-outlet></router-outlet>\n  </div>\n  <!-- /.content-wrapper -->\n  <footer class=\"main-footer\">\n    <div class=\"pull-right hidden-xs\">\n      <b>Version</b> 0.0.1\n    </div>\n    <strong>Copyright &copy; 2017 <a href=\"http://cloudwarehub.com\">CloudwareLabs</a>.</strong> All rights\n    reserved.\n  </footer>\n\n</div>\n<!-- ./wrapper -->\n\n\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<p>\n  Loading...\n</p>\n"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    <a routerLink=\"/desktops\" class=\"fa fa-arrow-left\"></a> Create Desktop\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li class=\"active\">Dashboard</li>\n  </ol>\n</section>\n<section class=\"content\">\n  <div class=\"panel panel-default top-margin-20\">\n    <div class=\"panel-body\">\n      <form>\n        <div class=\"setting-section\">\n          <div class=\"col-md-10 col-lg-10\"><label class=\"setting-label\">Desktop Name</label>\n            <div class=\"setting-info\"><input class=\"form-control\" [(ngModel)]=\"model.name\" name=\"name\"\n                                             placeholder=\"eg. my desktop\" tabindex=\"0\">\n            </div>\n          </div>\n        </div>\n        <div class=\"setting-section\">\n          <div class=\"col-md-10 col-lg-10\"><label class=\"setting-label\">Desktop Type</label>\n            <div class=\"setting-info\">\n              <ul class=\"radio-group\">\n                <li>\n                  <div class=\"radio\"><label><input type=\"radio\" name=\"desktop_type\" checked=\"checked\" value=\"xfce4\">Xfce4</label>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"radio\"><label><input type=\"radio\" name=\"desktop_type\" disabled=\"disabled\" value=\"gnome\">Gnome</label>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"setting-section\">\n          <div class=\"col-md-10 col-lg-10\"><label class=\"setting-label\">CPU Num</label>\n            <div class=\"setting-info\">\n              <ul class=\"radio-group\">\n                <li>\n                  <div class=\"radio\"><label><input type=\"radio\" name=\"cpus\" checked=\"checked\" value=\"xfce4\">1</label>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"radio\"><label><input type=\"radio\" name=\"cpus\" disabled=\"disabled\" value=\"gnome\">2</label>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"setting-section\">\n          <div class=\"col-md-10 col-lg-10\"><label class=\"setting-label\">Memory</label>\n            <div class=\"setting-info\">\n              <ul class=\"radio-group\">\n                <li>\n                  <div class=\"radio\"><label><input type=\"radio\" name=\"memory\" checked=\"checked\" value=\"xfce4\">512M</label>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"radio\"><label><input type=\"radio\" name=\"memory\" disabled=\"disabled\"\n                                                   value=\"gnome\">1024M</label></div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"setting-section\">\n          <button *ngIf=\"loading\" class=\"btn btn-lg btn-block btn-default\" disabled=\"disabled\">Loading...</button>\n          <button *ngIf=\"!loading\" class=\"btn btn-lg btn-block btn-success\" (click)=\"submit()\">Create Desktop</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\n          <span aria-hidden=\"true\">×</span></button>\n        <h4 class=\"modal-title\">Confirm</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Do you really want to destroy it?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default pull-left\" data-dismiss=\"modal\" (click)=\"staticModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-danger\">Delete</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n</div>\n"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<p>\n  desktops-edit works!\n</p>\n"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    {{desktop.name}} <small>stats matrix</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li class=\"active\">Dashboard</li>\n  </ol>\n</section>\n<section class=\"content\">\n\n</section>\n"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    <a (click)=\"goback()\" class=\"fa fa-arrow-left\"></a> {{desktop.name}}\n  </h1>\n</section>\n<section class=\"content\">\n  <a (click)=\"fullscreen()\" class=\"btn btn-app\">\n    <i class=\"fa fa-arrows-alt\"></i> Fullscreen\n  </a>\n  <a (click)=\"snapshot()\" id=\"snapshot\" download=\"snapshot.png\" class=\"btn btn-app\">\n    <i class=\"fa fa-save\"></i> Snapshot\n  </a>\n  <canvas id=\"canvas\" width=\"1440px\" height=\"900px\" style=\"width: 100%;\"></canvas>\n</section>\n\n"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Desktop Service\n  </h1>\n</section>\n<section class=\"content\">\n  <div class=\"callout callout-info\">\n    <h4>Notice!</h4>\n    Each user has quota of <b>2</b> desktops.<br>\n    DesCloud is in alpha, your desktops will be destroyed in <b>24</b> hours, do not use for production.\n  </div>\n  <alert type=\"danger\" dismissible=\"true\" *ngIf=\"noQuota\">\n    <strong>No quota!</strong> You have quota of <b>2</b> desktops, you can remove unused desktops to make room.\n  </alert>\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-xs-6\" *ngFor=\"let desktop of desktops\">\n      <div class=\"box box-default\" style=\"height: 270px;\">\n        <div class=\"box-header with-border\">\n          <h3 class=\"box-title\">{{desktop.name}}</h3>\n          <div class=\"box-tools pull-right\">\n            <!--<button [routerLink]=\"['/desktops/stats', desktop._id]\" type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-area-chart\"></i></button>-->\n            <button (click)=\"removeDesktop(desktop)\" type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\" title=\"destroy desktop\"><i class=\"fa fa-times\"></i></button>\n          </div>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body\">\n          <img class=\"rounded img-responsive\" src=\"assets/images/screen.png\" >\n        </div>\n        <!-- /.box-body -->\n        <div class=\"box-footer\">\n          <button (click)=\"openDesktop(desktop)\" type=\"button\" class=\"btn btn-success\" style=\"width: 100%;\">Open Desktop</button>\n        </div>\n        <!-- /.footer -->\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-xs-6\">\n      <div class=\"box box-default add\">\n        <!-- /.box-header -->\n        <div class=\"box-body\">\n          <a href=\"javascript:;\" (click)=\"createDesktop()\">\n            <div class=\"icon\"><i class=\"fa fa-plus\"></i></div>\n            <div class=\"info\">Create New Desktop</div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<div class=\"site-wrapper\">\n\n  <div class=\"site-wrapper-inner\">\n\n    <div class=\"cover-container\">\n\n      <div class=\"masthead clearfix\">\n        <div class=\"inner\">\n          <h3 class=\"masthead-brand\">DesCloud</h3>\n          <nav class=\"nav nav-masthead\">\n            <!--<a class=\"nav-link active\" href=\"#\">Home</a>-->\n            <!--<a class=\"nav-link\" href=\"#\"><i class=\"fa fa-github\"></i></a>-->\n            <!--<a class=\"nav-link\" href=\"#\">Contact</a>-->\n          </nav>\n        </div>\n      </div>\n\n      <div class=\"inner cover\">\n        <h1 class=\"cover-heading\">Cloudware Desktop Service</h1>\n        <p class=\"lead\">DesCloud give you a flexible desktop environment, you can open linux desktop in browser with just one click.</p>\n        <p class=\"lead\">\n          <a href=\"https://github.com/login/oauth/authorize?client_id=e86a6be6abe38a4c6a56\" class=\"btn btn-lg btn-secondary\">Start with github account <i class=\"fa fa-github\"></i></a>\n        </p>\n      </div>\n\n      <div class=\"mastfoot\">\n        <div class=\"inner\">\n          <p>Copyright <a href=\"http://cloudwarehub.com\" target=\"_blank\">CloudwareHub</a>, by CloudwareLabs & Tongji University.</p>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(100);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Desktop; });
var Desktop = (function () {
    function Desktop(_id, name) {
        this._id = _id;
        this.name = name;
    }
    return Desktop;
}());

//# sourceMappingURL=desktop.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiService = (function () {
    function UiService() {
        this.collapse = false;
    }
    UiService.prototype.toggleSidebar = function () {
        this.collapse = !this.collapse;
        if (this.collapse)
            document.body.classList.add("sidebar-collapse");
        else
            document.body.classList.remove("sidebar-collapse");
    };
    UiService.prototype.collapseSidebar = function () {
        this.collapse = true;
        document.body.classList.add("sidebar-collapse");
    };
    return UiService;
}());
UiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UiService);

//# sourceMappingURL=ui.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 99;


/***/ })

},[234]);
//# sourceMappingURL=main.bundle.js.map