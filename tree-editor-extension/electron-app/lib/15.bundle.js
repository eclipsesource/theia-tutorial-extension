(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "../node_modules/@theia/userstorage/lib/browser/user-storage-contribution.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/userstorage/lib/browser/user-storage-contribution.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStorageContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var env_variables_1 = __webpack_require__(/*! @theia/core/lib/common/env-variables */ "../node_modules/@theia/core/lib/common/env-variables/index.js");
var delegating_file_system_provider_1 = __webpack_require__(/*! @theia/filesystem/lib/common/delegating-file-system-provider */ "../node_modules/@theia/filesystem/lib/common/delegating-file-system-provider.js");
var user_storage_uri_1 = __webpack_require__(/*! ./user-storage-uri */ "../node_modules/@theia/userstorage/lib/browser/user-storage-uri.js");
var UserStorageContribution = /** @class */ (function () {
    function UserStorageContribution() {
    }
    UserStorageContribution.prototype.registerFileSystemProviders = function (service) {
        var _this = this;
        service.onWillActivateFileSystemProvider(function (event) {
            if (event.scheme === user_storage_uri_1.UserStorageUri.scheme) {
                event.waitUntil((function () { return __awaiter(_this, void 0, void 0, function () {
                    var provider;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.createProvider(service)];
                            case 1:
                                provider = _a.sent();
                                service.registerProvider(user_storage_uri_1.UserStorageUri.scheme, provider);
                                return [2 /*return*/];
                        }
                    });
                }); })());
            }
        });
    };
    UserStorageContribution.prototype.createProvider = function (service) {
        return __awaiter(this, void 0, void 0, function () {
            var delegate, configDirUri, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, service.activateProvider('file')];
                    case 1:
                        delegate = _b.sent();
                        _a = uri_1.default.bind;
                        return [4 /*yield*/, this.environments.getConfigDirUri()];
                    case 2:
                        configDirUri = new (_a.apply(uri_1.default, [void 0, _b.sent()]))();
                        return [2 /*return*/, new delegating_file_system_provider_1.DelegatingFileSystemProvider(delegate, {
                                uriConverter: {
                                    to: function (resource) {
                                        var relativePath = user_storage_uri_1.UserStorageUri.relative(resource);
                                        if (relativePath) {
                                            return configDirUri.resolve(relativePath).normalizePath();
                                        }
                                        return undefined;
                                    },
                                    from: function (resource) {
                                        var relativePath = configDirUri.relative(resource);
                                        if (relativePath) {
                                            return user_storage_uri_1.UserStorageUri.resolve(relativePath);
                                        }
                                        return undefined;
                                    }
                                }
                            }, new disposable_1.DisposableCollection(delegate.watch(configDirUri, { excludes: [], recursive: true })))];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(env_variables_1.EnvVariablesServer),
        __metadata("design:type", Object)
    ], UserStorageContribution.prototype, "environments", void 0);
    UserStorageContribution = __decorate([
        inversify_1.injectable()
    ], UserStorageContribution);
    return UserStorageContribution;
}());
exports.UserStorageContribution = UserStorageContribution;


/***/ }),

/***/ "../node_modules/@theia/userstorage/lib/browser/user-storage-frontend-module.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@theia/userstorage/lib/browser/user-storage-frontend-module.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
var file_service_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/file-service */ "../node_modules/@theia/filesystem/lib/browser/file-service.js");
var user_storage_contribution_1 = __webpack_require__(/*! ./user-storage-contribution */ "../node_modules/@theia/userstorage/lib/browser/user-storage-contribution.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(user_storage_contribution_1.UserStorageContribution).toSelf().inSingletonScope();
    bind(file_service_1.FileServiceContribution).toService(user_storage_contribution_1.UserStorageContribution);
});


/***/ }),

/***/ "../node_modules/@theia/userstorage/lib/browser/user-storage-uri.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@theia/userstorage/lib/browser/user-storage-uri.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
exports.UserStorageUri = void 0;
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
exports.UserStorageUri = new uri_1.default('user_storage:/user');


/***/ })

}]);
//# sourceMappingURL=15.bundle.js.map