(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "../node_modules/@theia/core/lib/browser/window/default-window-service.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/browser/window/default-window-service.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultWindowService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! ../../common */ "../node_modules/@theia/core/lib/common/index.js");
var core_preferences_1 = __webpack_require__(/*! ../core-preferences */ "../node_modules/@theia/core/lib/browser/core-preferences.js");
var contribution_provider_1 = __webpack_require__(/*! ../../common/contribution-provider */ "../node_modules/@theia/core/lib/common/contribution-provider.js");
var frontend_application_1 = __webpack_require__(/*! ../frontend-application */ "../node_modules/@theia/core/lib/browser/frontend-application.js");
var DefaultWindowService = /** @class */ (function () {
    function DefaultWindowService() {
        this.onUnloadEmitter = new common_1.Emitter();
    }
    Object.defineProperty(DefaultWindowService.prototype, "onUnload", {
        get: function () {
            return this.onUnloadEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    DefaultWindowService.prototype.onStart = function (app) {
        this.frontendApplication = app;
        this.registerUnloadListeners();
    };
    DefaultWindowService.prototype.openNewWindow = function (url) {
        window.open(url, undefined, 'noopener');
        return undefined;
    };
    DefaultWindowService.prototype.canUnload = function () {
        var e_1, _a;
        var _b;
        var confirmExit = this.corePreferences['application.confirmExit'];
        var preventUnload = confirmExit === 'always';
        try {
            for (var _c = __values(this.contributions.getContributions()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var contribution = _d.value;
                if ((_b = contribution.onWillStop) === null || _b === void 0 ? void 0 : _b.call(contribution, this.frontendApplication)) {
                    preventUnload = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return confirmExit === 'never' || !preventUnload;
    };
    /**
     * Implement the mechanism to detect unloading of the page.
     */
    DefaultWindowService.prototype.registerUnloadListeners = function () {
        var _this = this;
        window.addEventListener('beforeunload', function (event) {
            if (!_this.canUnload()) {
                return _this.preventUnload(event);
            }
        });
        // In a browser, `unload` is correctly fired when the page unloads, unlike Electron.
        // If `beforeunload` is cancelled, the user will be prompted to leave or stay.
        // If the user stays, the page won't be unloaded, so `unload` is not fired.
        // If the user leaves, the page will be unloaded, so `unload` is fired.
        window.addEventListener('unload', function () { return _this.onUnloadEmitter.fire(); });
    };
    /**
     * Notify the browser that we do not want to unload.
     *
     * Notes:
     *  - Shows a confirmation popup in browsers.
     *  - Prevents the window from closing without confirmation in electron.
     *
     * @param event The beforeunload event
     */
    DefaultWindowService.prototype.preventUnload = function (event) {
        event.returnValue = '';
        event.preventDefault();
        return '';
    };
    __decorate([
        inversify_1.inject(core_preferences_1.CorePreferences),
        __metadata("design:type", Object)
    ], DefaultWindowService.prototype, "corePreferences", void 0);
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider),
        inversify_1.named(frontend_application_1.FrontendApplicationContribution),
        __metadata("design:type", Object)
    ], DefaultWindowService.prototype, "contributions", void 0);
    DefaultWindowService = __decorate([
        inversify_1.injectable()
    ], DefaultWindowService);
    return DefaultWindowService;
}());
exports.DefaultWindowService = DefaultWindowService;


/***/ }),

/***/ "../node_modules/@theia/core/lib/electron-browser/electron-clipboard-service.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/electron-browser/electron-clipboard-service.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 RedHat and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronClipboardService = void 0;
var electron_1 = __webpack_require__(/*! electron */ "electron");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var ElectronClipboardService = /** @class */ (function () {
    function ElectronClipboardService() {
    }
    ElectronClipboardService.prototype.readText = function () {
        return electron_1.clipboard.readText();
    };
    ElectronClipboardService.prototype.writeText = function (value) {
        electron_1.clipboard.writeText(value);
    };
    ElectronClipboardService = __decorate([
        inversify_1.injectable()
    ], ElectronClipboardService);
    return ElectronClipboardService;
}());
exports.ElectronClipboardService = ElectronClipboardService;


/***/ }),

/***/ "../node_modules/@theia/core/lib/electron-browser/window/electron-window-module.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/electron-browser/window/electron-window-module.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var window_service_1 = __webpack_require__(/*! ../../browser/window/window-service */ "../node_modules/@theia/core/lib/browser/window/window-service.js");
var electron_window_service_1 = __webpack_require__(/*! ./electron-window-service */ "../node_modules/@theia/core/lib/electron-browser/window/electron-window-service.js");
var frontend_application_1 = __webpack_require__(/*! ../../browser/frontend-application */ "../node_modules/@theia/core/lib/browser/frontend-application.js");
var electron_clipboard_service_1 = __webpack_require__(/*! ../electron-clipboard-service */ "../node_modules/@theia/core/lib/electron-browser/electron-clipboard-service.js");
var clipboard_service_1 = __webpack_require__(/*! ../../browser/clipboard-service */ "../node_modules/@theia/core/lib/browser/clipboard-service.js");
var electron_main_window_service_1 = __webpack_require__(/*! ../../electron-common/electron-main-window-service */ "../node_modules/@theia/core/lib/electron-common/electron-main-window-service.js");
var electron_ipc_connection_provider_1 = __webpack_require__(/*! ../messaging/electron-ipc-connection-provider */ "../node_modules/@theia/core/lib/electron-browser/messaging/electron-ipc-connection-provider.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(electron_main_window_service_1.ElectronMainWindowService).toDynamicValue(function (context) {
        return electron_ipc_connection_provider_1.ElectronIpcConnectionProvider.createProxy(context.container, electron_main_window_service_1.electronMainWindowServicePath);
    }).inSingletonScope();
    bind(window_service_1.WindowService).to(electron_window_service_1.ElectronWindowService).inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(window_service_1.WindowService);
    bind(clipboard_service_1.ClipboardService).to(electron_clipboard_service_1.ElectronClipboardService).inSingletonScope();
});


/***/ }),

/***/ "../node_modules/@theia/core/lib/electron-browser/window/electron-window-service.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/electron-browser/window/electron-window-service.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronWindowService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var electron_1 = __webpack_require__(/*! electron */ "electron");
var default_window_service_1 = __webpack_require__(/*! ../../browser/window/default-window-service */ "../node_modules/@theia/core/lib/browser/window/default-window-service.js");
var electron_main_window_service_1 = __webpack_require__(/*! ../../electron-common/electron-main-window-service */ "../node_modules/@theia/core/lib/electron-common/electron-main-window-service.js");
var ElectronWindowService = /** @class */ (function (_super) {
    __extends(ElectronWindowService, _super);
    function ElectronWindowService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Lock to prevent multiple parallel executions of the `beforeunload` listener.
         */
        _this.isUnloading = false;
        /**
         * Close the window right away when `true`, else check if we can unload.
         */
        _this.closeOnUnload = false;
        return _this;
    }
    ElectronWindowService.prototype.openNewWindow = function (url, _a) {
        var external = (_a === void 0 ? {} : _a).external;
        this.delegate.openNewWindow(url, { external: external });
        return undefined;
    };
    ElectronWindowService.prototype.registerUnloadListeners = function () {
        var _this = this;
        window.addEventListener('beforeunload', function (event) {
            if (_this.isUnloading) {
                // Unloading process ongoing, do nothing:
                return _this.preventUnload(event);
            }
            else if (_this.closeOnUnload || _this.canUnload()) {
                // Let the window close and notify clients:
                delete event.returnValue;
                _this.onUnloadEmitter.fire();
                return;
            }
            else {
                _this.isUnloading = true;
                // Fix https://github.com/eclipse-theia/theia/issues/8186#issuecomment-742624480
                // On Electron/Linux doing `showMessageBoxSync` does not seems to block the closing
                // process long enough and closes the window no matter what you click on (yes/no).
                // Instead we'll prevent closing right away, ask for confirmation and finally close.
                setTimeout(function () {
                    if (_this.shouldUnload()) {
                        _this.closeOnUnload = true;
                        window.close();
                    }
                    _this.isUnloading = false;
                });
                return _this.preventUnload(event);
            }
        });
    };
    /**
     * When preventing `beforeunload` on Electron, no popup is shown.
     *
     * This method implements a modal to ask the user if he wants to quit the page.
     */
    ElectronWindowService.prototype.shouldUnload = function () {
        var electronWindow = electron_1.remote.getCurrentWindow();
        var response = electron_1.remote.dialog.showMessageBoxSync(electronWindow, {
            type: 'question',
            buttons: ['Yes', 'No'],
            title: 'Confirm',
            message: 'Are you sure you want to quit?',
            detail: 'Any unsaved changes will not be saved.'
        });
        return response === 0; // 'Yes', close the window.
    };
    __decorate([
        inversify_1.inject(electron_main_window_service_1.ElectronMainWindowService),
        __metadata("design:type", Object)
    ], ElectronWindowService.prototype, "delegate", void 0);
    ElectronWindowService = __decorate([
        inversify_1.injectable()
    ], ElectronWindowService);
    return ElectronWindowService;
}(default_window_service_1.DefaultWindowService));
exports.ElectronWindowService = ElectronWindowService;


/***/ }),

/***/ "../node_modules/@theia/core/lib/electron-common/electron-main-window-service.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/electron-common/electron-main-window-service.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronMainWindowService = exports.electronMainWindowServicePath = void 0;
exports.electronMainWindowServicePath = '/services/electron-window';
exports.ElectronMainWindowService = Symbol('ElectronMainWindowService');


/***/ })

}]);
//# sourceMappingURL=26.bundle.js.map