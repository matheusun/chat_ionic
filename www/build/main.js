webpackJsonp([1],{

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		318,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, db, toastCtrl, firebaseauth) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.firebaseauth = firebaseauth;
        this.categoria = "Diversos";
        console.log(db);
    }
    //método
    HomePage.prototype.mudaTela = function () {
        this.navCtrl.push("ChatPage", {
            params: [this.email.value, this.categoria]
        });
    };
    HomePage.prototype.categorySelected = function (categoria) {
        this.categoria = categoria;
    };
    HomePage.prototype.login = function () {
        var _this = this;
        this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(function () {
            _this.mudaTela();
        })
            .catch(function (erro) {
            _this.showToast("Usuário não existe ou a senha está incorreta");
        });
    };
    HomePage.prototype.cadastro = function () {
        var _this = this;
        this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
            .then(function () {
            _this.showToast("Usuário cadastrado");
        })
            .catch(function (erro) {
            _this.showToast("Usuário já existe, ou o email não está em um formato @dominio.com ou a senha não possui 8 caracteres", 9000);
        });
    };
    HomePage.prototype.sair = function () {
        this.firebaseauth.auth.signOut()
            .then(function () {
        })
            .catch(function (erro) {
        });
    };
    HomePage.prototype.showToast = function (mensagem, duration) {
        if (duration === void 0) { duration = 3000; }
        var toast = this.toastCtrl.create({ duration: duration,
            position: 'botton' });
        toast.setMessage(mensagem);
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "password", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Positivo\Desktop\git-desktop\chat_ionic_firebase\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Chat Ionic\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row size="3">\n\n      <ion-col>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label>Categoria</ion-label>\n\n            <ion-select [(ngModel)]="categoria" (ionChange)="categorySelected(categoria)" placeholder="Diversos">\n\n              <ion-option value="Cinema">Cinema</ion-option>\n\n              <ion-option value="Esportes">Esportes</ion-option>\n\n              <ion-option default value="Diversos">Diversos</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <div>\n\n    <ion-row size="3">\n\n      <ion-col>\n\n        <ion-item>\n\n          <ion-label fixed>Username</ion-label>\n\n          <ion-input type="text" #email></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>Senha</ion-label>\n\n          <ion-input type="password" #password></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row><ion-col></ion-col></ion-row><ion-row><ion-col></ion-col></ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n          <button col-12 ion-button center (click)="login()">ENTRAR</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row style="text-align: center; margin-top: 32px; color: gray;">\n\n        <ion-col>\n\n            ou cadastre a conta acima clicando no botão abaixo\n\n        </ion-col>\n\n      </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n            <button col-12 ion-button center (click)="cadastro()">CADASTRAR</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Positivo\Desktop\git-desktop\chat_ionic_firebase\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MsgService = /** @class */ (function () {
    function MsgService(db) {
        this.db = db;
    }
    MsgService_1 = MsgService;
    MsgService.prototype.addMsg = function (username, texto, categoria) {
        var date = new Date();
        switch (categoria) {
            case "Cinema": {
                this.db.list("/cinema/").push({ date: date + "", username: username, text: texto });
                break;
            }
            case "Esportes": {
                this.db.list("/esportes/").push({ date: date + "", username: username, text: texto });
                break;
            }
            default: {
                this.db.list("/diversos/").push({ date: date + "", username: username, text: texto });
                break;
            }
        }
    };
    MsgService.prototype.getMsgsCategory = function (categoria) {
        if (categoria == "Cinema")
            return this.db.list("/cinema/");
        if (categoria == "Esportes")
            return this.db.list("/esportes/");
        return this.db.list("/diversos/");
    };
    MsgService = MsgService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])({ MsgService: MsgService_1 }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MsgService);
    return MsgService;
    var MsgService_1;
}());

//# sourceMappingURL=msg.service.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__msg_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var firebaseConfig = {
    apiKey: "AIzaSyCv36eMZW1OKmUDOed5EyYIcpQeLASY5to",
    authDomain: "ionic-firebase-285eb.firebaseapp.com",
    databaseURL: "https://ionic-firebase-285eb.firebaseio.com",
    projectId: "ionic-firebase-285eb",
    storageBucket: "ionic-firebase-285eb.appspot.com",
    messagingSenderId: "37551809485",
    appId: "1:37551809485:web:2ef8ca779a5761a6beda84"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__msg_service__["a" /* MsgService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Positivo\Desktop\git-desktop\chat_ionic_firebase\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Positivo\Desktop\git-desktop\chat_ionic_firebase\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map