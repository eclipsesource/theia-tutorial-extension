(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "../node_modules/@theia/filesystem/lib/browser/file-tree/file-tree-label-provider.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@theia/filesystem/lib/browser/file-tree/file-tree-label-provider.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreeLabelProvider = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "../node_modules/@theia/core/lib/browser/label-provider.js");
var file_tree_1 = __webpack_require__(/*! ./file-tree */ "../node_modules/@theia/filesystem/lib/browser/file-tree/file-tree.js");
var tree_label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-label-provider */ "../node_modules/@theia/core/lib/browser/tree/tree-label-provider.js");
var FileTreeLabelProvider = /** @class */ (function () {
    function FileTreeLabelProvider() {
    }
    FileTreeLabelProvider.prototype.canHandle = function (element) {
        return file_tree_1.FileStatNode.is(element) ?
            this.treeLabelProvider.canHandle(element) + 1 :
            0;
    };
    FileTreeLabelProvider.prototype.getIcon = function (node) {
        return this.labelProvider.getIcon(node.fileStat);
    };
    FileTreeLabelProvider.prototype.getName = function (node) {
        return this.labelProvider.getName(node.fileStat);
    };
    FileTreeLabelProvider.prototype.getDescription = function (node) {
        return this.labelProvider.getLongName(node.fileStat);
    };
    FileTreeLabelProvider.prototype.affects = function (node, event) {
        return event.affects(node.fileStat);
    };
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], FileTreeLabelProvider.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(tree_label_provider_1.TreeLabelProvider),
        __metadata("design:type", tree_label_provider_1.TreeLabelProvider)
    ], FileTreeLabelProvider.prototype, "treeLabelProvider", void 0);
    FileTreeLabelProvider = __decorate([
        inversify_1.injectable()
    ], FileTreeLabelProvider);
    return FileTreeLabelProvider;
}());
exports.FileTreeLabelProvider = FileTreeLabelProvider;


/***/ }),

/***/ "../node_modules/@theia/filesystem/lib/browser/filesystem-frontend-module.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/filesystem/lib/browser/filesystem-frontend-module.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017-2018 TypeFox and others.
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.bindFileResource = void 0;
__webpack_require__(/*! ../../src/browser/style/index.css */ "../node_modules/@theia/filesystem/src/browser/style/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var file_resource_1 = __webpack_require__(/*! ./file-resource */ "../node_modules/@theia/filesystem/lib/browser/file-resource.js");
var filesystem_preferences_1 = __webpack_require__(/*! ./filesystem-preferences */ "../node_modules/@theia/filesystem/lib/browser/filesystem-preferences.js");
var filesystem_watcher_1 = __webpack_require__(/*! ./filesystem-watcher */ "../node_modules/@theia/filesystem/lib/browser/filesystem-watcher.js");
var filesystem_frontend_contribution_1 = __webpack_require__(/*! ./filesystem-frontend-contribution */ "../node_modules/@theia/filesystem/lib/browser/filesystem-frontend-contribution.js");
var file_upload_service_1 = __webpack_require__(/*! ./file-upload-service */ "../node_modules/@theia/filesystem/lib/browser/file-upload-service.js");
var file_tree_label_provider_1 = __webpack_require__(/*! ./file-tree/file-tree-label-provider */ "../node_modules/@theia/filesystem/lib/browser/file-tree/file-tree-label-provider.js");
var file_service_1 = __webpack_require__(/*! ./file-service */ "../node_modules/@theia/filesystem/lib/browser/file-service.js");
var remote_file_system_provider_1 = __webpack_require__(/*! ../common/remote-file-system-provider */ "../node_modules/@theia/filesystem/lib/common/remote-file-system-provider.js");
var filesystem_1 = __webpack_require__(/*! ../common/filesystem */ "../node_modules/@theia/filesystem/lib/common/filesystem.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var files_1 = __webpack_require__(/*! ../common/files */ "../node_modules/@theia/filesystem/lib/common/files.js");
var env_variables_1 = __webpack_require__(/*! @theia/core/lib/common/env-variables */ "../node_modules/@theia/core/lib/common/env-variables/index.js");
var contribution_provider_1 = __webpack_require__(/*! @theia/core/lib/common/contribution-provider */ "../node_modules/@theia/core/lib/common/contribution-provider.js");
var remote_file_service_contribution_1 = __webpack_require__(/*! ./remote-file-service-contribution */ "../node_modules/@theia/filesystem/lib/browser/remote-file-service-contribution.js");
var filesystem_watcher_error_handler_1 = __webpack_require__(/*! ./filesystem-watcher-error-handler */ "../node_modules/@theia/filesystem/lib/browser/filesystem-watcher-error-handler.js");
var encodings_1 = __webpack_require__(/*! @theia/core/lib/common/encodings */ "../node_modules/@theia/core/lib/common/encodings.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    filesystem_preferences_1.bindFileSystemPreferences(bind);
    contribution_provider_1.bindContributionProvider(bind, file_service_1.FileServiceContribution);
    bind(file_service_1.FileService).toSelf().inSingletonScope();
    bind(remote_file_system_provider_1.RemoteFileSystemServer).toDynamicValue(function (ctx) {
        return browser_1.WebSocketConnectionProvider.createProxy(ctx.container, remote_file_system_provider_1.remoteFileSystemPath, new remote_file_system_provider_1.RemoteFileSystemProxyFactory());
    });
    bind(remote_file_system_provider_1.RemoteFileSystemProvider).toSelf().inSingletonScope();
    bind(remote_file_service_contribution_1.RemoteFileServiceContribution).toSelf().inSingletonScope();
    bind(file_service_1.FileServiceContribution).toService(remote_file_service_contribution_1.RemoteFileServiceContribution);
    bind(filesystem_watcher_1.FileSystemWatcher).toSelf().inSingletonScope();
    bind(filesystem_watcher_error_handler_1.FileSystemWatcherErrorHandler).toSelf().inSingletonScope();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bind(filesystem_1.FileSystem).toDynamicValue(function (_a) {
        var container = _a.container;
        var fileService = container.get(file_service_1.FileService);
        var environments = container.get(env_variables_1.EnvVariablesServer);
        var convertStat = function (stat) {
            var _a;
            return ({
                uri: stat.resource.toString(),
                lastModification: stat.mtime,
                size: stat.size,
                isDirectory: 'isDirectory' in stat && stat.isDirectory,
                children: 'children' in stat ? (_a = stat.children) === null || _a === void 0 ? void 0 : _a.map(convertStat) : undefined
            });
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var rethrowError = function (uri, error) {
            if (error instanceof files_1.FileOperationError) {
                if (error.fileOperationResult === 1 /* FILE_NOT_FOUND */) {
                    throw filesystem_1.FileSystemError.FileNotFound(uri);
                }
                if (error.fileOperationResult === 0 /* FILE_IS_DIRECTORY */) {
                    throw filesystem_1.FileSystemError.FileIsDirectory(uri);
                }
                if (error.fileOperationResult === 10 /* FILE_NOT_DIRECTORY */) {
                    throw filesystem_1.FileSystemError.FileNotDirectory(uri);
                }
                if (error.fileOperationResult === 3 /* FILE_MODIFIED_SINCE */) {
                    throw filesystem_1.FileSystemError.FileIsOutOfSync(uri);
                }
            }
            throw error;
        };
        return new /** @class */ (function () {
            function class_1() {
            }
            class_1.prototype.getFileStat = function (uri) {
                return __awaiter(this, void 0, void 0, function () {
                    var stat, e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, fileService.resolve(new uri_1.default(uri), { resolveMetadata: true })];
                            case 1:
                                stat = _a.sent();
                                return [2 /*return*/, convertStat(stat)];
                            case 2:
                                e_1 = _a.sent();
                                if (e_1 instanceof files_1.FileOperationError && e_1.fileOperationResult === 1 /* FILE_NOT_FOUND */) {
                                    return [2 /*return*/, undefined];
                                }
                                rethrowError(uri, e_1);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
            class_1.prototype.exists = function (uri) {
                return fileService.exists(new uri_1.default(uri));
            };
            class_1.prototype.resolveContent = function (uri, options) {
                return __awaiter(this, void 0, void 0, function () {
                    var content, e_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, fileService.read(new uri_1.default(uri), options)];
                            case 1:
                                content = _a.sent();
                                return [2 /*return*/, {
                                        stat: convertStat(content),
                                        content: content.value
                                    }];
                            case 2:
                                e_2 = _a.sent();
                                rethrowError(uri, e_2);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
            class_1.prototype.setContent = function (file, content, options) {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, fileService.write(new uri_1.default(file.uri), content, __assign(__assign({}, options), { mtime: file.lastModification }))];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, convertStat(result)];
                            case 2:
                                e_3 = _a.sent();
                                rethrowError(file.uri, e_3);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
            class_1.prototype.updateContent = function (file, contentChanges, options) {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, fileService.update(new uri_1.default(file.uri), contentChanges, {
                                        mtime: file.lastModification,
                                        etag: files_1.etag({ size: file.size, mtime: file.lastModification }),
                                        readEncoding: (options === null || options === void 0 ? void 0 : options.encoding) || encodings_1.UTF8,
                                        encoding: options === null || options === void 0 ? void 0 : options.overwriteEncoding,
                                        overwriteEncoding: !!(options === null || options === void 0 ? void 0 : options.overwriteEncoding)
                                    })];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, convertStat(result)];
                            case 2:
                                e_4 = _a.sent();
                                rethrowError(file.uri, e_4);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
            class_1.prototype.move = function (sourceUri, targetUri, options) {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_5;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, fileService.move(new uri_1.default(sourceUri), new uri_1.default(targetUri), options)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, convertStat(result)];
                            case 2:
                                e_5 = _a.sent();
                                rethrowError(sourceUri, e_5);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
            class_1.prototype.copy = function (sourceUri, targetUri, options) {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_6;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, fileService.copy(new uri_1.default(sourceUri), new uri_1.default(targetUri), options)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, convertStat(result)];
                            case 2:
                                e_6 = _a.sent();
                                rethrowError(sourceUri, e_6);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
            class_1.prototype.createFile = function (uri, options) {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_7;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, fileService.create(new uri_1.default(uri), options === null || options === void 0 ? void 0 : options.content, { encoding: options === null || options === void 0 ? void 0 : options.encoding })];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, convertStat(result)];
                            case 2:
                                e_7 = _a.sent();
                                rethrowError(uri, e_7);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
            class_1.prototype.createFolder = function (uri) {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_8;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, fileService.createFolder(new uri_1.default(uri))];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, convertStat(result)];
                            case 2:
                                e_8 = _a.sent();
                                rethrowError(uri, e_8);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
            class_1.prototype.touchFile = function (uri) {
                throw new Error('Method not implemented.');
            };
            class_1.prototype.delete = function (uri, options) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_9;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, fileService.delete(new uri_1.default(uri), { useTrash: options === null || options === void 0 ? void 0 : options.moveToTrash, recursive: true })];
                            case 1: return [2 /*return*/, _a.sent()];
                            case 2:
                                e_9 = _a.sent();
                                rethrowError(uri, e_9);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
            class_1.prototype.getEncoding = function (uri) {
                return __awaiter(this, void 0, void 0, function () {
                    var encoding;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, fileService.read(new uri_1.default(uri))];
                            case 1:
                                encoding = (_a.sent()).encoding;
                                return [2 /*return*/, encoding];
                        }
                    });
                });
            };
            class_1.prototype.guessEncoding = function (uri) {
                return __awaiter(this, void 0, void 0, function () {
                    var encoding;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, fileService.read(new uri_1.default(uri), { autoGuessEncoding: true })];
                            case 1:
                                encoding = (_a.sent()).encoding;
                                return [2 /*return*/, encoding];
                        }
                    });
                });
            };
            class_1.prototype.getRoots = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var drives, roots;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, environments.getDrives()];
                            case 1:
                                drives = _a.sent();
                                return [4 /*yield*/, Promise.all(drives.map(function (uri) { return _this.getFileStat(uri); }))];
                            case 2:
                                roots = _a.sent();
                                return [2 /*return*/, roots.filter(function (root) { return !!root; })];
                        }
                    });
                });
            };
            class_1.prototype.getCurrentUserHome = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this.getFileStat;
                                return [4 /*yield*/, environments.getHomeDirUri()];
                            case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                        }
                    });
                });
            };
            class_1.prototype.getDrives = function () {
                return environments.getDrives();
            };
            class_1.prototype.access = function (uri, mode) {
                return fileService.access(new uri_1.default(uri), mode);
            };
            class_1.prototype.getFsPath = function (uri) {
                return fileService.fsPath(new uri_1.default(uri));
            };
            return class_1;
        }());
    }).inSingletonScope();
    bindFileResource(bind);
    bind(file_upload_service_1.FileUploadService).toSelf().inSingletonScope();
    bind(filesystem_frontend_contribution_1.FileSystemFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(filesystem_frontend_contribution_1.FileSystemFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(filesystem_frontend_contribution_1.FileSystemFrontendContribution);
    bind(file_tree_label_provider_1.FileTreeLabelProvider).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(file_tree_label_provider_1.FileTreeLabelProvider);
});
function bindFileResource(bind) {
    bind(file_resource_1.FileResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(file_resource_1.FileResourceResolver);
}
exports.bindFileResource = bindFileResource;


/***/ }),

/***/ "../node_modules/@theia/filesystem/lib/browser/remote-file-service-contribution.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/filesystem/lib/browser/remote-file-service-contribution.js ***!
  \*****************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteFileServiceContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var remote_file_system_provider_1 = __webpack_require__(/*! ../common/remote-file-system-provider */ "../node_modules/@theia/filesystem/lib/common/remote-file-system-provider.js");
var RemoteFileServiceContribution = /** @class */ (function () {
    function RemoteFileServiceContribution() {
    }
    RemoteFileServiceContribution.prototype.registerFileSystemProviders = function (service) {
        var _this = this;
        var registering = this.provider.ready.then(function () {
            return service.registerProvider('file', _this.provider);
        });
        service.onWillActivateFileSystemProvider(function (event) {
            if (event.scheme === 'file') {
                event.waitUntil(registering);
            }
        });
    };
    __decorate([
        inversify_1.inject(remote_file_system_provider_1.RemoteFileSystemProvider),
        __metadata("design:type", remote_file_system_provider_1.RemoteFileSystemProvider)
    ], RemoteFileServiceContribution.prototype, "provider", void 0);
    RemoteFileServiceContribution = __decorate([
        inversify_1.injectable()
    ], RemoteFileServiceContribution);
    return RemoteFileServiceContribution;
}());
exports.RemoteFileServiceContribution = RemoteFileServiceContribution;


/***/ }),

/***/ "../node_modules/@theia/filesystem/lib/common/remote-file-system-provider.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/filesystem/lib/common/remote-file-system-provider.js ***!
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
exports.FileSystemProviderServer = exports.RemoteFileSystemProvider = exports.RemoteFileSystemProxyFactory = exports.RemoteFileSystemProviderError = exports.RemoteFileSystemServer = exports.remoteFileSystemPath = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var buffer_1 = __webpack_require__(/*! @theia/core/lib/common/buffer */ "../node_modules/@theia/core/lib/common/buffer.js");
var files_1 = __webpack_require__(/*! ./files */ "../node_modules/@theia/filesystem/lib/common/files.js");
var proxy_factory_1 = __webpack_require__(/*! @theia/core/lib/common/messaging/proxy-factory */ "../node_modules/@theia/core/lib/common/messaging/proxy-factory.js");
var application_error_1 = __webpack_require__(/*! @theia/core/lib/common/application-error */ "../node_modules/@theia/core/lib/common/application-error.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
var stream_1 = __webpack_require__(/*! @theia/core/lib/common/stream */ "../node_modules/@theia/core/lib/common/stream.js");
var cancellation_1 = __webpack_require__(/*! @theia/core/lib/common/cancellation */ "../node_modules/@theia/core/lib/common/cancellation.js");
exports.remoteFileSystemPath = '/services/remote-filesystem';
exports.RemoteFileSystemServer = Symbol('RemoteFileSystemServer');
exports.RemoteFileSystemProviderError = application_error_1.ApplicationError.declare(-33005, function (message, data, stack) {
    return ({ message: message, data: data, stack: stack });
});
var RemoteFileSystemProxyFactory = /** @class */ (function (_super) {
    __extends(RemoteFileSystemProxyFactory, _super);
    function RemoteFileSystemProxyFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RemoteFileSystemProxyFactory.prototype.serializeError = function (e) {
        if (e instanceof files_1.FileSystemProviderError) {
            var code = e.code, name_1 = e.name;
            return _super.prototype.serializeError.call(this, exports.RemoteFileSystemProviderError(e.message, { code: code, name: name_1 }, e.stack));
        }
        return _super.prototype.serializeError.call(this, e);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RemoteFileSystemProxyFactory.prototype.deserializeError = function (capturedError, e) {
        var error = _super.prototype.deserializeError.call(this, capturedError, e);
        if (exports.RemoteFileSystemProviderError.is(error)) {
            var fileOperationError = new files_1.FileSystemProviderError(error.message, error.data.code);
            fileOperationError.name = error.data.name;
            fileOperationError.stack = error.stack;
            return fileOperationError;
        }
        return e;
    };
    return RemoteFileSystemProxyFactory;
}(proxy_factory_1.JsonRpcProxyFactory));
exports.RemoteFileSystemProxyFactory = RemoteFileSystemProxyFactory;
/**
 * Frontend component.
 *
 * Wraps the remote filesystem provider living on the backend.
 */
var RemoteFileSystemProvider = /** @class */ (function () {
    function RemoteFileSystemProvider() {
        this.onDidChangeFileEmitter = new event_1.Emitter();
        this.onDidChangeFile = this.onDidChangeFileEmitter.event;
        this.onFileWatchErrorEmitter = new event_1.Emitter();
        this.onFileWatchError = this.onFileWatchErrorEmitter.event;
        this.onDidChangeCapabilitiesEmitter = new event_1.Emitter();
        this.onDidChangeCapabilities = this.onDidChangeCapabilitiesEmitter.event;
        this.onFileStreamDataEmitter = new event_1.Emitter();
        this.onFileStreamData = this.onFileStreamDataEmitter.event;
        this.onFileStreamEndEmitter = new event_1.Emitter();
        this.onFileStreamEnd = this.onFileStreamEndEmitter.event;
        this.toDispose = new disposable_1.DisposableCollection(this.onDidChangeFileEmitter, this.onDidChangeCapabilitiesEmitter, this.onFileStreamDataEmitter, this.onFileStreamEndEmitter);
        this.watcherSequence = 0;
        /**
         * We'll track the currently allocated watchers, in order to re-allocate them
         * with the same options once we reconnect to the backend after a disconnection.
         */
        this.watchOptions = new Map();
        this._capabilities = 0;
        this.readyDeferred = new promise_util_1.Deferred();
        this.ready = this.readyDeferred.promise;
    }
    Object.defineProperty(RemoteFileSystemProvider.prototype, "capabilities", {
        get: function () { return this._capabilities; },
        enumerable: false,
        configurable: true
    });
    RemoteFileSystemProvider.prototype.init = function () {
        var _this = this;
        this.server.getCapabilities().then(function (capabilities) {
            _this._capabilities = capabilities;
            _this.readyDeferred.resolve();
        }, this.readyDeferred.reject);
        this.server.setClient({
            notifyDidChangeFile: function (_a) {
                var changes = _a.changes;
                _this.onDidChangeFileEmitter.fire(changes.map(function (event) { return ({ resource: new uri_1.default(event.resource), type: event.type }); }));
            },
            notifyFileWatchError: function () {
                _this.onFileWatchErrorEmitter.fire();
            },
            notifyDidChangeCapabilities: function (capabilities) { return _this.setCapabilities(capabilities); },
            onFileStreamData: function (handle, data) { return _this.onFileStreamDataEmitter.fire([handle, Uint8Array.from(data)]); },
            onFileStreamEnd: function (handle, error) { return _this.onFileStreamEndEmitter.fire([handle, error]); }
        });
        var onInitialized = this.server.onDidOpenConnection(function () {
            // skip reconnection on the first connection
            onInitialized.dispose();
            _this.toDispose.push(_this.server.onDidOpenConnection(function () { return _this.reconnect(); }));
        });
    };
    RemoteFileSystemProvider.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    RemoteFileSystemProvider.prototype.setCapabilities = function (capabilities) {
        this._capabilities = capabilities;
        this.onDidChangeCapabilitiesEmitter.fire(undefined);
    };
    // --- forwarding calls
    RemoteFileSystemProvider.prototype.stat = function (resource) {
        return this.server.stat(resource.toString());
    };
    RemoteFileSystemProvider.prototype.access = function (resource, mode) {
        return this.server.access(resource.toString(), mode);
    };
    RemoteFileSystemProvider.prototype.fsPath = function (resource) {
        return this.server.fsPath(resource.toString());
    };
    RemoteFileSystemProvider.prototype.open = function (resource, opts) {
        return this.server.open(resource.toString(), opts);
    };
    RemoteFileSystemProvider.prototype.close = function (fd) {
        return this.server.close(fd);
    };
    RemoteFileSystemProvider.prototype.read = function (fd, pos, data, offset, length) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, bytes, bytesRead;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.server.read(fd, pos, length)];
                    case 1:
                        _a = _b.sent(), bytes = _a.bytes, bytesRead = _a.bytesRead;
                        // copy back the data that was written into the buffer on the remote
                        // side. we need to do this because buffers are not referenced by
                        // pointer, but only by value and as such cannot be directly written
                        // to from the other process.
                        data.set(bytes.slice(0, bytesRead), offset);
                        return [2 /*return*/, bytesRead];
                }
            });
        });
    };
    RemoteFileSystemProvider.prototype.readFile = function (resource) {
        return __awaiter(this, void 0, void 0, function () {
            var bytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.server.readFile(resource.toString())];
                    case 1:
                        bytes = _a.sent();
                        return [2 /*return*/, Uint8Array.from(bytes)];
                }
            });
        });
    };
    RemoteFileSystemProvider.prototype.readFileStream = function (resource, opts, token) {
        var _this = this;
        var capturedError = new Error();
        // eslint-disable-next-line @typescript-eslint/no-shadow
        var stream = stream_1.newWriteableStream(function (data) { return buffer_1.BinaryBuffer.concat(data.map(function (data) { return buffer_1.BinaryBuffer.wrap(data); })).buffer; });
        this.server.readFileStream(resource.toString(), opts, token).then(function (streamHandle) {
            if (token.isCancellationRequested) {
                stream.end(cancellation_1.cancelled());
                return;
            }
            var toDispose = new disposable_1.DisposableCollection(token.onCancellationRequested(function () { return stream.end(cancellation_1.cancelled()); }), _this.onFileStreamData(function (_a) {
                var _b = __read(_a, 2), handle = _b[0], data = _b[1];
                if (streamHandle === handle) {
                    stream.write(data);
                }
            }), _this.onFileStreamEnd(function (_a) {
                var _b = __read(_a, 2), handle = _b[0], error = _b[1];
                if (streamHandle === handle) {
                    if (error) {
                        var code = ('code' in error && error.code) || files_1.FileSystemProviderErrorCode.Unknown;
                        var fileOperationError = new files_1.FileSystemProviderError(error.message, code);
                        fileOperationError.name = error.name;
                        var capturedStack = capturedError.stack || '';
                        fileOperationError.stack = capturedStack + "\nCaused by: " + error.stack;
                        stream.end(fileOperationError);
                    }
                    else {
                        stream.end();
                    }
                }
            }));
            stream.on('end', function () { return toDispose.dispose(); });
        }, function (error) { return stream.end(error); });
        return stream;
    };
    RemoteFileSystemProvider.prototype.write = function (fd, pos, data, offset, length) {
        return this.server.write(fd, pos, __spread(data.values()), offset, length);
    };
    RemoteFileSystemProvider.prototype.writeFile = function (resource, content, opts) {
        return this.server.writeFile(resource.toString(), __spread(content.values()), opts);
    };
    RemoteFileSystemProvider.prototype.delete = function (resource, opts) {
        return this.server.delete(resource.toString(), opts);
    };
    RemoteFileSystemProvider.prototype.mkdir = function (resource) {
        return this.server.mkdir(resource.toString());
    };
    RemoteFileSystemProvider.prototype.readdir = function (resource) {
        return this.server.readdir(resource.toString());
    };
    RemoteFileSystemProvider.prototype.rename = function (resource, target, opts) {
        return this.server.rename(resource.toString(), target.toString(), opts);
    };
    RemoteFileSystemProvider.prototype.copy = function (resource, target, opts) {
        return this.server.copy(resource.toString(), target.toString(), opts);
    };
    RemoteFileSystemProvider.prototype.updateFile = function (resource, changes, opts) {
        return this.server.updateFile(resource.toString(), changes, opts);
    };
    RemoteFileSystemProvider.prototype.watch = function (resource, options) {
        var _this = this;
        var watcherId = this.watcherSequence++;
        var uri = resource.toString();
        this.watchOptions.set(watcherId, { uri: uri, options: options });
        this.server.watch(watcherId, uri, options);
        var toUnwatch = disposable_1.Disposable.create(function () {
            _this.watchOptions.delete(watcherId);
            _this.server.unwatch(watcherId);
        });
        this.toDispose.push(toUnwatch);
        return toUnwatch;
    };
    /**
     * When a frontend disconnects (e.g. bad connection) the backend resources will be cleared.
     *
     * This means that we need to re-allocate the watchers when a frontend reconnects.
     */
    RemoteFileSystemProvider.prototype.reconnect = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.watchOptions.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), watcher = _d[0], _e = _d[1], uri = _e.uri, options = _e.options;
                this.server.watch(watcher, uri, options);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    __decorate([
        inversify_1.inject(exports.RemoteFileSystemServer),
        __metadata("design:type", Object)
    ], RemoteFileSystemProvider.prototype, "server", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RemoteFileSystemProvider.prototype, "init", null);
    RemoteFileSystemProvider = __decorate([
        inversify_1.injectable()
    ], RemoteFileSystemProvider);
    return RemoteFileSystemProvider;
}());
exports.RemoteFileSystemProvider = RemoteFileSystemProvider;
/**
 * Backend component.
 *
 * JSON-RPC server exposing a wrapped file system provider remotely.
 */
var FileSystemProviderServer = /** @class */ (function () {
    function FileSystemProviderServer() {
        this.BUFFER_SIZE = 64 * 1024;
        /**
         * Mapping of `watcherId` to a disposable watcher handle.
         */
        this.watchers = new Map();
        this.toDispose = new disposable_1.DisposableCollection();
        this.readFileStreamSeq = 0;
    }
    FileSystemProviderServer.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    FileSystemProviderServer.prototype.setClient = function (client) {
        this.client = client;
    };
    FileSystemProviderServer.prototype.init = function () {
        var _this = this;
        if (this.provider.dispose) {
            this.toDispose.push(disposable_1.Disposable.create(function () { return _this.provider.dispose(); }));
        }
        this.toDispose.push(this.provider.onDidChangeCapabilities(function () {
            if (_this.client) {
                _this.client.notifyDidChangeCapabilities(_this.provider.capabilities);
            }
        }));
        this.toDispose.push(this.provider.onDidChangeFile(function (changes) {
            if (_this.client) {
                _this.client.notifyDidChangeFile({
                    changes: changes.map(function (_a) {
                        var resource = _a.resource, type = _a.type;
                        return ({ resource: resource.toString(), type: type });
                    })
                });
            }
        }));
        this.toDispose.push(this.provider.onFileWatchError(function () {
            if (_this.client) {
                _this.client.notifyFileWatchError();
            }
        }));
    };
    FileSystemProviderServer.prototype.getCapabilities = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.provider.capabilities];
            });
        });
    };
    FileSystemProviderServer.prototype.stat = function (resource) {
        return this.provider.stat(new uri_1.default(resource));
    };
    FileSystemProviderServer.prototype.access = function (resource, mode) {
        if (files_1.hasAccessCapability(this.provider)) {
            return this.provider.access(new uri_1.default(resource), mode);
        }
        throw new Error('not supported');
    };
    FileSystemProviderServer.prototype.fsPath = function (resource) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (files_1.hasAccessCapability(this.provider)) {
                    return [2 /*return*/, this.provider.fsPath(new uri_1.default(resource))];
                }
                throw new Error('not supported');
            });
        });
    };
    FileSystemProviderServer.prototype.open = function (resource, opts) {
        if (files_1.hasOpenReadWriteCloseCapability(this.provider)) {
            return this.provider.open(new uri_1.default(resource), opts);
        }
        throw new Error('not supported');
    };
    FileSystemProviderServer.prototype.close = function (fd) {
        if (files_1.hasOpenReadWriteCloseCapability(this.provider)) {
            return this.provider.close(fd);
        }
        throw new Error('not supported');
    };
    FileSystemProviderServer.prototype.read = function (fd, pos, length) {
        return __awaiter(this, void 0, void 0, function () {
            var buffer, bytes, bytesRead;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!files_1.hasOpenReadWriteCloseCapability(this.provider)) return [3 /*break*/, 2];
                        buffer = buffer_1.BinaryBuffer.alloc(this.BUFFER_SIZE);
                        bytes = buffer.buffer;
                        return [4 /*yield*/, this.provider.read(fd, pos, bytes, 0, length)];
                    case 1:
                        bytesRead = _a.sent();
                        return [2 /*return*/, { bytes: __spread(bytes.values()), bytesRead: bytesRead }];
                    case 2: throw new Error('not supported');
                }
            });
        });
    };
    FileSystemProviderServer.prototype.write = function (fd, pos, data, offset, length) {
        if (files_1.hasOpenReadWriteCloseCapability(this.provider)) {
            return this.provider.write(fd, pos, Uint8Array.from(data), offset, length);
        }
        throw new Error('not supported');
    };
    FileSystemProviderServer.prototype.readFile = function (resource) {
        return __awaiter(this, void 0, void 0, function () {
            var buffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!files_1.hasReadWriteCapability(this.provider)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.provider.readFile(new uri_1.default(resource))];
                    case 1:
                        buffer = _a.sent();
                        return [2 /*return*/, __spread(buffer.values())];
                    case 2: throw new Error('not supported');
                }
            });
        });
    };
    FileSystemProviderServer.prototype.writeFile = function (resource, content, opts) {
        if (files_1.hasReadWriteCapability(this.provider)) {
            return this.provider.writeFile(new uri_1.default(resource), Uint8Array.from(content), opts);
        }
        throw new Error('not supported');
    };
    FileSystemProviderServer.prototype.delete = function (resource, opts) {
        return this.provider.delete(new uri_1.default(resource), opts);
    };
    FileSystemProviderServer.prototype.mkdir = function (resource) {
        return this.provider.mkdir(new uri_1.default(resource));
    };
    FileSystemProviderServer.prototype.readdir = function (resource) {
        return this.provider.readdir(new uri_1.default(resource));
    };
    FileSystemProviderServer.prototype.rename = function (source, target, opts) {
        return this.provider.rename(new uri_1.default(source), new uri_1.default(target), opts);
    };
    FileSystemProviderServer.prototype.copy = function (source, target, opts) {
        if (files_1.hasFileFolderCopyCapability(this.provider)) {
            return this.provider.copy(new uri_1.default(source), new uri_1.default(target), opts);
        }
        throw new Error('not supported');
    };
    FileSystemProviderServer.prototype.updateFile = function (resource, changes, opts) {
        if (files_1.hasUpdateCapability(this.provider)) {
            return this.provider.updateFile(new uri_1.default(resource), changes, opts);
        }
        throw new Error('not supported');
    };
    FileSystemProviderServer.prototype.watch = function (requestedWatcherId, resource, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var watcher;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.watchers.has(requestedWatcherId)) {
                    throw new Error('watcher id is already allocated!');
                }
                watcher = this.provider.watch(new uri_1.default(resource), opts);
                this.watchers.set(requestedWatcherId, watcher);
                this.toDispose.push(disposable_1.Disposable.create(function () { return _this.unwatch(requestedWatcherId); }));
                return [2 /*return*/];
            });
        });
    };
    FileSystemProviderServer.prototype.unwatch = function (watcherId) {
        return __awaiter(this, void 0, void 0, function () {
            var watcher;
            return __generator(this, function (_a) {
                watcher = this.watchers.get(watcherId);
                if (watcher) {
                    this.watchers.delete(watcherId);
                    watcher.dispose();
                }
                return [2 /*return*/];
            });
        });
    };
    FileSystemProviderServer.prototype.readFileStream = function (resource, opts, token) {
        return __awaiter(this, void 0, void 0, function () {
            var handle_1, stream;
            var _this = this;
            return __generator(this, function (_a) {
                if (files_1.hasFileReadStreamCapability(this.provider)) {
                    handle_1 = this.readFileStreamSeq++;
                    stream = this.provider.readFileStream(new uri_1.default(resource), opts, token);
                    stream.on('data', function (data) { var _a; return (_a = _this.client) === null || _a === void 0 ? void 0 : _a.onFileStreamData(handle_1, __spread(data.values())); });
                    stream.on('error', function (error) {
                        var _a;
                        var code = error instanceof files_1.FileSystemProviderError ? error.code : undefined;
                        var name = error.name, message = error.message, stack = error.stack;
                        // eslint-disable-next-line no-unused-expressions
                        (_a = _this.client) === null || _a === void 0 ? void 0 : _a.onFileStreamEnd(handle_1, { code: code, name: name, message: message, stack: stack });
                    });
                    stream.on('end', function () { var _a; return (_a = _this.client) === null || _a === void 0 ? void 0 : _a.onFileStreamEnd(handle_1, undefined); });
                    return [2 /*return*/, handle_1];
                }
                throw new Error('not supported');
            });
        });
    };
    __decorate([
        inversify_1.inject(files_1.FileSystemProvider),
        __metadata("design:type", Object)
    ], FileSystemProviderServer.prototype, "provider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileSystemProviderServer.prototype, "init", null);
    FileSystemProviderServer = __decorate([
        inversify_1.injectable()
    ], FileSystemProviderServer);
    return FileSystemProviderServer;
}());
exports.FileSystemProviderServer = FileSystemProviderServer;


/***/ }),

/***/ "../node_modules/@theia/filesystem/src/browser/style/index.css":
/*!*********************************************************************!*\
  !*** ../node_modules/@theia/filesystem/src/browser/style/index.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/filesystem/src/browser/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/filesystem/src/browser/style/file-dialog.css":
/*!******************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/filesystem/src/browser/style/file-dialog.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2017 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n /*\n  * Open and Save file dialogs\n  */\n\n.dialogContent .theia-FileDialog,\n.dialogContent .theia-SaveFileDialog,\n.dialogContent .theia-ResponsiveFileDialog {\n    height: 500px;\n    width: 500px;\n    border: 1px solid var(--theia-editorWidget-border);\n    background: var(--theia-dropdown-background);\n}\n\n\n@media only screen and (max-height: 700px) {\n    .dialogContent .theia-FileDialog,\n    .dialogContent .theia-SaveFileDialog,\n    .dialogContent .theia-ResponsiveFileDialog {\n        height: 300px;\n    }\n}\n\n.dialogContent .theia-NavigationPanel,\n.dialogContent .theia-FiltersPanel,\n.dialogContent .theia-FileNamePanel {\n    display: block;\n    position: relative;\n    overflow: hidden;\n}\n\n.dialogContent .theia-NavigationPanel,\n.dialogContent .theia-FiltersPanel {\n    min-height: 27px;\n}\n\n.dialogContent .theia-FileNamePanel {\n    height: 31px;\n}\n\n/*\n * Navigation panel items\n */\n\n.dialogContent .theia-NavigationBack,\n.dialogContent .theia-NavigationForward,\n.dialogContent .theia-NavigationHome {\n    position: absolute;\n    top: 0px;\n    line-height: 23px;\n    cursor: pointer;\n    outline: none;\n}\n\n.dialogContent .theia-NavigationBack:focus,\n.dialogContent .theia-NavigationForward:focus,\n.dialogContent .theia-NavigationHome:focus {\n    outline: none;\n    border: none;\n    box-shadow: none;\n}\n\n.dialogContent .theia-NavigationBack {\n    left: auto;\n}\n\n.dialogContent .theia-NavigationForward {\n    left: 21px;\n}\n\n.dialogContent .theia-NavigationHome {\n    left: 41px;\n}\n\n.dialogContent .theia-LocationListPanel {\n    position: absolute;\n    left: 72px;\n    top: 1px;\n}\n\n.dialogContent .theia-LocationList {\n    width: 427px;\n    height: 21px;\n}\n\n/*\n * Filters panel items\n */\n\n.dialogContent .theia-FiltersLabel {\n    position: absolute;\n    left: 1px;\n    top: 0px;\n    line-height: 27px;\n}\n\n.dialogContent .theia-FiltersListPanel {\n    position: absolute;\n    left: 72px;\n    top: 3px;\n}\n\n.dialogContent .theia-FileTreeFiltersList {\n    width: 427px;\n    height: 21px;\n}\n\n/*\n * File name panel items\n */\n\n.dialogContent .theia-FileNameLabel {\n    position: absolute;\n    left: 1px;\n    top: 0px;\n    line-height: 23px;\n}\n\n.dialogContent .theia-FileNameTextField {\n    position: absolute;\n    left: 72px;\n    top: 0px;\n    width: 420px;\n}\n\n/*\n * Control panel items\n */\n\n.dialogContent .theia-ControlPanel {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    margin-bottom: 0px;\n}\n\n.dialogContent .theia-ControlPanel > * {\n    margin-left: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/filesystem/src/browser/style/file-icons.css":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/filesystem/src/browser/style/file-icons.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2017 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n .theia-file-icons-js {\n    /*\n    Here, the `line-height` ensures that FontAwesome and `file-icons-js` container has the same height.\n    Ideally, it would be 1 em, but since we set the max height above (and other places too) with 0.8\n    multiplier, we use 0.8 em here too.\n     */\n    line-height: 0.8em;\n}\n\n.theia-file-icons-js:before {\n    font-size: calc(var(--theia-content-font-size) * 0.8);\n}\n\n.theia-file-icons-js.file-icon {\n    min-width: var(--theia-icon-size);\n    height: var(--theia-icon-size);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fa-file:before,\n.fa-folder:before,\n.theia-file-icons-js:before {\n    text-align: center;\n    margin-right: 4px;\n}\n\n.theia-app-sides .theia-file-icons-js {\n    max-height: none;\n    line-height: inherit;\n}\n\n.theia-app-sides .theia-file-icons-js:before {\n    font-size: var(--theia-private-sidebar-icon-size);\n    margin-right: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/filesystem/src/browser/style/index.css":
/*!************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/filesystem/src/browser/style/index.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader!./file-dialog.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/filesystem/src/browser/style/file-dialog.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../css-loader!./file-icons.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/filesystem/src/browser/style/file-icons.css"), "");

// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2017 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-file-tree-drag-image {\n  position: absolute;\n  /*\n    make sure you don't see it flashing\n     */\n  top: -1000px;\n  font-size: var(--theia-ui-font-size1);\n  display: inline-block;\n  padding: 1px calc(var(--theia-ui-padding)*2);\n  border-radius: 10px;\n\n  background: var(--theia-list-activeSelectionBackground);\n  color: var(--theia-list-activeSelectionForeground);\n  outline: 1px solid var(--theia-contrastActiveBorder);\n  outline-offset: -1px;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=27.bundle.js.map