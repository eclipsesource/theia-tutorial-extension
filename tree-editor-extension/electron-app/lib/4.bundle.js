(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "../node_modules/@theia/filesystem/lib/browser/file-resource.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/filesystem/lib/browser/file-resource.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
exports.FileResourceResolver = exports.FileResource = exports.FileResourceVersion = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var resource_1 = __webpack_require__(/*! @theia/core/lib/common/resource */ "../node_modules/@theia/core/lib/common/resource.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var files_1 = __webpack_require__(/*! ../common/files */ "../node_modules/@theia/filesystem/lib/common/files.js");
var file_service_1 = __webpack_require__(/*! ./file-service */ "../node_modules/@theia/filesystem/lib/browser/file-service.js");
var dialogs_1 = __webpack_require__(/*! @theia/core/lib/browser/dialogs */ "../node_modules/@theia/core/lib/browser/dialogs.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "../node_modules/@theia/core/lib/browser/label-provider.js");
var filesystem_preferences_1 = __webpack_require__(/*! ./filesystem-preferences */ "../node_modules/@theia/filesystem/lib/browser/filesystem-preferences.js");
var FileResourceVersion;
(function (FileResourceVersion) {
    function is(version) {
        return !!version && 'encoding' in version && 'mtime' in version && 'etag' in version;
    }
    FileResourceVersion.is = is;
})(FileResourceVersion = exports.FileResourceVersion || (exports.FileResourceVersion = {}));
var FileResource = /** @class */ (function () {
    function FileResource(uri, fileService, options) {
        var _this = this;
        this.uri = uri;
        this.fileService = fileService;
        this.options = options;
        this.acceptTextOnly = true;
        this.toDispose = new disposable_1.DisposableCollection();
        this.onDidChangeContentsEmitter = new event_1.Emitter();
        this.onDidChangeContents = this.onDidChangeContentsEmitter.event;
        this.doSaveContentChanges = function (changes, options) { return __awaiter(_this, void 0, void 0, function () {
            var version, current, etag, stat, e_1, message, stack, message, stack;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        version = (options === null || options === void 0 ? void 0 : options.version) || this._version;
                        current = FileResourceVersion.is(version) ? version : undefined;
                        if (!current) {
                            throw resource_1.ResourceError.NotFound({ message: 'has not been read yet', data: { uri: this.uri } });
                        }
                        etag = current === null || current === void 0 ? void 0 : current.etag;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.fileService.update(this.uri, changes, {
                                readEncoding: current.encoding,
                                encoding: options === null || options === void 0 ? void 0 : options.encoding,
                                overwriteEncoding: options === null || options === void 0 ? void 0 : options.overwriteEncoding,
                                etag: etag,
                                mtime: current === null || current === void 0 ? void 0 : current.mtime
                            })];
                    case 2:
                        stat = _a.sent();
                        this._version = {
                            etag: stat.etag,
                            mtime: stat.mtime,
                            encoding: stat.encoding
                        };
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (e_1 instanceof files_1.FileOperationError && e_1.fileOperationResult === 1 /* FILE_NOT_FOUND */) {
                            message = e_1.message, stack = e_1.stack;
                            throw resource_1.ResourceError.NotFound({ message: message, stack: stack, data: { uri: this.uri } });
                        }
                        if (e_1 instanceof files_1.FileOperationError && e_1.fileOperationResult === 3 /* FILE_MODIFIED_SINCE */) {
                            message = e_1.message, stack = e_1.stack;
                            throw resource_1.ResourceError.OutOfSync({ message: message, stack: stack, data: { uri: this.uri } });
                        }
                        throw e_1;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.toDispose.push(this.onDidChangeContentsEmitter);
        this.toDispose.push(this.fileService.onDidFilesChange(function (event) {
            if (event.contains(_this.uri)) {
                _this.sync();
            }
        }));
        this.toDispose.push(this.fileService.onDidRunOperation(function (e) {
            if ((e.isOperation(1 /* DELETE */) || e.isOperation(2 /* MOVE */)) && e.resource.isEqualOrParent(_this.uri)) {
                _this.sync();
            }
        }));
        try {
            this.toDispose.push(this.fileService.watch(this.uri));
        }
        catch (e) {
            console.error(e);
        }
        this.updateSavingContentChanges();
        this.toDispose.push(this.fileService.onDidChangeFileSystemProviderCapabilities(function (e) {
            if (e.scheme === _this.uri.scheme) {
                _this.updateSavingContentChanges();
            }
        }));
    }
    Object.defineProperty(FileResource.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileResource.prototype, "encoding", {
        get: function () {
            var _a;
            return (_a = this._version) === null || _a === void 0 ? void 0 : _a.encoding;
        },
        enumerable: false,
        configurable: true
    });
    FileResource.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    FileResource.prototype.readContents = function (options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var encoding, stat, e_2, stat, maxFileSize, _c, message, stack;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 10]);
                        encoding = (options === null || options === void 0 ? void 0 : options.encoding) || ((_a = this.version) === null || _a === void 0 ? void 0 : _a.encoding);
                        return [4 /*yield*/, this.fileService.read(this.uri, {
                                encoding: encoding,
                                etag: files_1.ETAG_DISABLED,
                                acceptTextOnly: this.acceptTextOnly,
                                limits: this.limits
                            })];
                    case 1:
                        stat = _d.sent();
                        this._version = {
                            encoding: stat.encoding,
                            etag: stat.etag,
                            mtime: stat.mtime
                        };
                        return [2 /*return*/, stat.value];
                    case 2:
                        e_2 = _d.sent();
                        if (!(e_2 instanceof file_service_1.TextFileOperationError && e_2.textFileOperationResult === 0 /* FILE_IS_BINARY */)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.shouldOpenAsText('The file is either binary or uses an unsupported text encoding.')];
                    case 3:
                        if (_d.sent()) {
                            this.acceptTextOnly = false;
                            return [2 /*return*/, this.readContents(options)];
                        }
                        return [3 /*break*/, 9];
                    case 4:
                        if (!(e_2 instanceof files_1.FileOperationError && e_2.fileOperationResult === 7 /* FILE_TOO_LARGE */)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.fileService.resolve(this.uri, { resolveMetadata: true })];
                    case 5:
                        stat = _d.sent();
                        maxFileSize = filesystem_preferences_1.GENERAL_MAX_FILE_SIZE_MB * 1024 * 1024;
                        _c = ((_b = this.limits) === null || _b === void 0 ? void 0 : _b.size) !== maxFileSize;
                        if (!_c) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.shouldOpenAsText("The file is too large (" + files_1.BinarySize.formatSize(stat.size) + ").")];
                    case 6:
                        _c = (_d.sent());
                        _d.label = 7;
                    case 7:
                        if (_c) {
                            this.limits = {
                                size: maxFileSize
                            };
                            return [2 /*return*/, this.readContents(options)];
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        if (e_2 instanceof files_1.FileOperationError && e_2.fileOperationResult === 1 /* FILE_NOT_FOUND */) {
                            this._version = undefined;
                            message = e_2.message, stack = e_2.stack;
                            throw resource_1.ResourceError.NotFound({
                                message: message, stack: stack,
                                data: {
                                    uri: this.uri
                                }
                            });
                        }
                        _d.label = 9;
                    case 9: throw e_2;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    FileResource.prototype.readStream = function (options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var encoding, stat, e_3, stat, maxFileSize, _c, message, stack;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 10]);
                        encoding = (options === null || options === void 0 ? void 0 : options.encoding) || ((_a = this.version) === null || _a === void 0 ? void 0 : _a.encoding);
                        return [4 /*yield*/, this.fileService.readStream(this.uri, {
                                encoding: encoding,
                                etag: files_1.ETAG_DISABLED,
                                acceptTextOnly: this.acceptTextOnly,
                                limits: this.limits
                            })];
                    case 1:
                        stat = _d.sent();
                        this._version = {
                            encoding: stat.encoding,
                            etag: stat.etag,
                            mtime: stat.mtime
                        };
                        return [2 /*return*/, stat.value];
                    case 2:
                        e_3 = _d.sent();
                        if (!(e_3 instanceof file_service_1.TextFileOperationError && e_3.textFileOperationResult === 0 /* FILE_IS_BINARY */)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.shouldOpenAsText('The file is either binary or uses an unsupported text encoding.')];
                    case 3:
                        if (_d.sent()) {
                            this.acceptTextOnly = false;
                            return [2 /*return*/, this.readStream(options)];
                        }
                        return [3 /*break*/, 9];
                    case 4:
                        if (!(e_3 instanceof files_1.FileOperationError && e_3.fileOperationResult === 7 /* FILE_TOO_LARGE */)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.fileService.resolve(this.uri, { resolveMetadata: true })];
                    case 5:
                        stat = _d.sent();
                        maxFileSize = filesystem_preferences_1.GENERAL_MAX_FILE_SIZE_MB * 1024 * 1024;
                        _c = ((_b = this.limits) === null || _b === void 0 ? void 0 : _b.size) !== maxFileSize;
                        if (!_c) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.shouldOpenAsText("The file is too large (" + files_1.BinarySize.formatSize(stat.size) + ").")];
                    case 6:
                        _c = (_d.sent());
                        _d.label = 7;
                    case 7:
                        if (_c) {
                            this.limits = {
                                size: maxFileSize
                            };
                            return [2 /*return*/, this.readStream(options)];
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        if (e_3 instanceof files_1.FileOperationError && e_3.fileOperationResult === 1 /* FILE_NOT_FOUND */) {
                            this._version = undefined;
                            message = e_3.message, stack = e_3.stack;
                            throw resource_1.ResourceError.NotFound({
                                message: message, stack: stack,
                                data: {
                                    uri: this.uri
                                }
                            });
                        }
                        _d.label = 9;
                    case 9: throw e_3;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    FileResource.prototype.saveContents = function (content, options) {
        return this.doWrite(content, options);
    };
    FileResource.prototype.saveStream = function (content, options) {
        return this.doWrite(content, options);
    };
    FileResource.prototype.doWrite = function (content, options) {
        return __awaiter(this, void 0, void 0, function () {
            var version, current, etag, stat, e_4, _a, message, stack;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        version = (options === null || options === void 0 ? void 0 : options.version) || this._version;
                        current = FileResourceVersion.is(version) ? version : undefined;
                        etag = current === null || current === void 0 ? void 0 : current.etag;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 7]);
                        return [4 /*yield*/, this.fileService.write(this.uri, content, {
                                encoding: options === null || options === void 0 ? void 0 : options.encoding,
                                overwriteEncoding: options === null || options === void 0 ? void 0 : options.overwriteEncoding,
                                etag: etag,
                                mtime: current === null || current === void 0 ? void 0 : current.mtime
                            })];
                    case 2:
                        stat = _b.sent();
                        this._version = {
                            etag: stat.etag,
                            mtime: stat.mtime,
                            encoding: stat.encoding
                        };
                        return [3 /*break*/, 7];
                    case 3:
                        e_4 = _b.sent();
                        if (!(e_4 instanceof files_1.FileOperationError && e_4.fileOperationResult === 3 /* FILE_MODIFIED_SINCE */)) return [3 /*break*/, 6];
                        _a = etag !== files_1.ETAG_DISABLED;
                        if (!_a) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.shouldOverwrite()];
                    case 4:
                        _a = (_b.sent());
                        _b.label = 5;
                    case 5:
                        if (_a) {
                            return [2 /*return*/, this.doWrite(content, __assign(__assign({}, options), { version: { stat: __assign(__assign({}, current), { etag: files_1.ETAG_DISABLED }) } }))];
                        }
                        message = e_4.message, stack = e_4.stack;
                        throw resource_1.ResourceError.OutOfSync({ message: message, stack: stack, data: { uri: this.uri } });
                    case 6: throw e_4;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    FileResource.prototype.updateSavingContentChanges = function () {
        if (this.fileService.hasCapability(this.uri, 33554432 /* Update */)) {
            this.saveContentChanges = this.doSaveContentChanges;
        }
        else {
            delete this.saveContentChanges;
        }
    };
    FileResource.prototype.guessEncoding = function () {
        return __awaiter(this, void 0, void 0, function () {
            var content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileService.read(this.uri, { autoGuessEncoding: true })];
                    case 1:
                        content = _a.sent();
                        return [2 /*return*/, content.encoding];
                }
            });
        });
    };
    FileResource.prototype.sync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isInSync()];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/];
                        }
                        this.onDidChangeContentsEmitter.fire(undefined);
                        return [2 /*return*/];
                }
            });
        });
    };
    FileResource.prototype.isInSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stat, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fileService.resolve(this.uri, { resolveMetadata: true })];
                    case 1:
                        stat = _b.sent();
                        return [2 /*return*/, !!this.version && this.version.mtime >= stat.mtime];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, !this.version];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FileResource.prototype.shouldOverwrite = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.options.shouldOverwrite()];
            });
        });
    };
    FileResource.prototype.shouldOpenAsText = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.options.shouldOpenAsText(error)];
            });
        });
    };
    return FileResource;
}());
exports.FileResource = FileResource;
var FileResourceResolver = /** @class */ (function () {
    function FileResourceResolver() {
    }
    FileResourceResolver.prototype.resolve = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var stat, e_5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fileService.resolve(uri)];
                    case 1:
                        stat = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        if (!(e_5 instanceof files_1.FileOperationError && e_5.fileOperationResult === 1 /* FILE_NOT_FOUND */)) {
                            throw e_5;
                        }
                        return [3 /*break*/, 3];
                    case 3:
                        if (stat && stat.isDirectory) {
                            throw new Error('The given uri is a directory: ' + this.labelProvider.getLongName(uri));
                        }
                        return [2 /*return*/, new FileResource(uri, this.fileService, {
                                shouldOverwrite: function () { return _this.shouldOverwrite(uri); },
                                shouldOpenAsText: function (error) { return _this.shouldOpenAsText(uri, error); }
                            })];
                }
            });
        });
    };
    FileResourceResolver.prototype.shouldOverwrite = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var dialog;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = new dialogs_1.ConfirmDialog({
                            title: "The file '" + this.labelProvider.getName(uri) + "' has been changed on the file system.",
                            msg: "Do you want to overwrite the changes made to '" + this.labelProvider.getLongName(uri) + "' on the file system?",
                            ok: 'Yes',
                            cancel: 'No'
                        });
                        return [4 /*yield*/, dialog.open()];
                    case 1: return [2 /*return*/, !!(_a.sent())];
                }
            });
        });
    };
    FileResourceResolver.prototype.shouldOpenAsText = function (uri, error) {
        return __awaiter(this, void 0, void 0, function () {
            var dialog;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = new dialogs_1.ConfirmDialog({
                            title: error,
                            msg: "Opening it might take some time and might make the IDE unresponsive. Do you want to open '" + this.labelProvider.getLongName(uri) + "' anyway?",
                            ok: 'Yes',
                            cancel: 'No'
                        });
                        return [4 /*yield*/, dialog.open()];
                    case 1: return [2 /*return*/, !!(_a.sent())];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(file_service_1.FileService),
        __metadata("design:type", file_service_1.FileService)
    ], FileResourceResolver.prototype, "fileService", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], FileResourceResolver.prototype, "labelProvider", void 0);
    FileResourceResolver = __decorate([
        inversify_1.injectable()
    ], FileResourceResolver);
    return FileResourceResolver;
}());
exports.FileResourceResolver = FileResourceResolver;


/***/ }),

/***/ "../node_modules/@theia/filesystem/lib/browser/filesystem-watcher.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/filesystem/lib/browser/filesystem-watcher.js ***!
  \***************************************************************************/
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
exports.FileSystemWatcher = exports.FileOperationEmitter = exports.FileMoveEvent = exports.FileChangeEvent = exports.FileChange = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var file_service_1 = __webpack_require__(/*! ./file-service */ "../node_modules/@theia/filesystem/lib/browser/file-service.js");
var FileChange;
(function (FileChange) {
    function isUpdated(change, uri) {
        return change.type === 0 /* UPDATED */ && uri.toString() === change.uri.toString();
    }
    FileChange.isUpdated = isUpdated;
    function isAdded(change, uri) {
        return change.type === 1 /* ADDED */ && uri.toString() === change.uri.toString();
    }
    FileChange.isAdded = isAdded;
    function isDeleted(change, uri) {
        return change.type === 2 /* DELETED */ && change.uri.isEqualOrParent(uri);
    }
    FileChange.isDeleted = isDeleted;
    function isAffected(change, uri) {
        return isDeleted(change, uri) || uri.toString() === change.uri.toString();
    }
    FileChange.isAffected = isAffected;
    function isChanged(change, uri) {
        return !isDeleted(change, uri) && uri.toString() === change.uri.toString();
    }
    FileChange.isChanged = isChanged;
})(FileChange = exports.FileChange || (exports.FileChange = {}));
var FileChangeEvent;
(function (FileChangeEvent) {
    function isUpdated(event, uri) {
        return event.some(function (change) { return FileChange.isUpdated(change, uri); });
    }
    FileChangeEvent.isUpdated = isUpdated;
    function isAdded(event, uri) {
        return event.some(function (change) { return FileChange.isAdded(change, uri); });
    }
    FileChangeEvent.isAdded = isAdded;
    function isDeleted(event, uri) {
        return event.some(function (change) { return FileChange.isDeleted(change, uri); });
    }
    FileChangeEvent.isDeleted = isDeleted;
    function isAffected(event, uri) {
        return event.some(function (change) { return FileChange.isAffected(change, uri); });
    }
    FileChangeEvent.isAffected = isAffected;
    function isChanged(event, uri) {
        return !isDeleted(event, uri) && event.some(function (change) { return FileChange.isChanged(change, uri); });
    }
    FileChangeEvent.isChanged = isChanged;
})(FileChangeEvent = exports.FileChangeEvent || (exports.FileChangeEvent = {}));
var FileMoveEvent;
(function (FileMoveEvent) {
    function isRename(_a) {
        var sourceUri = _a.sourceUri, targetUri = _a.targetUri;
        return sourceUri.parent.toString() === targetUri.parent.toString();
    }
    FileMoveEvent.isRename = isRename;
})(FileMoveEvent = exports.FileMoveEvent || (exports.FileMoveEvent = {}));
var FileOperationEmitter = /** @class */ (function () {
    function FileOperationEmitter() {
        this.onWillEmitter = new event_1.Emitter();
        this.onWill = this.onWillEmitter.event;
        this.onDidFailEmitter = new event_1.Emitter();
        this.onDidFail = this.onDidFailEmitter.event;
        this.onDidEmitter = new event_1.Emitter();
        this.onDid = this.onDidEmitter.event;
        this.toDispose = new disposable_1.DisposableCollection(this.onWillEmitter, this.onDidFailEmitter, this.onDidEmitter);
    }
    FileOperationEmitter.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    FileOperationEmitter.prototype.fireWill = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event_1.WaitUntilEvent.fire(this.onWillEmitter, event)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileOperationEmitter.prototype.fireDid = function (failed, event) {
        return __awaiter(this, void 0, void 0, function () {
            var onDidEmitter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onDidEmitter = failed ? this.onDidFailEmitter : this.onDidEmitter;
                        return [4 /*yield*/, event_1.WaitUntilEvent.fire(onDidEmitter, event)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return FileOperationEmitter;
}());
exports.FileOperationEmitter = FileOperationEmitter;
/**
 * React to file system events, including calls originating from the
 * application or event coming from the system's filesystem directly
 * (actual file watching).
 *
 * `on(will|did)(create|rename|delete)` events solely come from application
 * usage, not from actual filesystem.
 *
 * @deprecated since 1.4.0 - in order to support VS Code FS API (https://github.com/eclipse-theia/theia/pull/7908), use `FileService.watch` instead
 */
var FileSystemWatcher = /** @class */ (function () {
    function FileSystemWatcher() {
        this.toDispose = new disposable_1.DisposableCollection();
        this.toRestartAll = new disposable_1.DisposableCollection();
        this.onFileChangedEmitter = new event_1.Emitter();
        /**
         * @deprecated since 1.4.0 - in order to support VS Code FS API (https://github.com/eclipse-theia/theia/pull/7908), use `FileService.onDidFilesChange` instead
         */
        this.onFilesChanged = this.onFileChangedEmitter.event;
        this.fileCreateEmitter = new FileOperationEmitter();
        /**
         * @deprecated since 1.4.0 - in order to support VS Code FS API (https://github.com/eclipse-theia/theia/pull/7908), use `FileService.onWillRunUserOperation` instead
         */
        this.onWillCreate = this.fileCreateEmitter.onWill;
        /**
         * @deprecated since 1.4.0 - in order to support VS Code FS API (https://github.com/eclipse-theia/theia/pull/7908), use `FileService.onDidFailUserOperation` instead
         */
        this.onDidFailCreate = this.fileCreateEmitter.onDidFail;
        /**
         * @deprecated since 1.4.0 - in order to support VS Code FS API (https://github.com/eclipse-theia/theia/pull/7908),
         * instead use `FileService.onDidRunUserOperation` for events triggered by user gestures
         * or `FileService.onDidRunOperation` triggered by user gestures and programmatically
         */
        this.onDidCreate = this.fileCreateEmitter.onDid;
        this.fileDeleteEmitter = new FileOperationEmitter();
        /**
         * @deprecated since 1.4.0 - in order to support VS Code FS API (https://github.com/eclipse-theia/theia/pull/7908), use `FileService.onWillRunUserOperation` instead
         */
        this.onWillDelete = this.fileDeleteEmitter.onWill;
        /**
         * @deprecated since 1.4.0 - in order to support VS Code FS API (https://github.com/eclipse-theia/theia/pull/7908), use `FileService.onDidFailUserOperation` instead
         */
        this.onDidFailDelete = this.fileDeleteEmitter.onDidFail;
        /**
         * @deprecated since 1.4.0 - in order to support VS Code FS API (https://github.com/eclipse-theia/theia/pull/7908),
         * instead use `FileService.onDidRunUserOperation` for events triggered by user gestures
         * or `FileService.onDidRunOperation` triggered by user gestures and programmatically
         */
        this.onDidDelete = this.fileDeleteEmitter.onDid;
        this.fileMoveEmitter = new FileOperationEmitter();
        /**
         * @deprecated since 1.4.0 - in order to support VS Code FS API (https://github.com/eclipse-theia/theia/pull/7908), use `FileService.onWillRunUserOperation` instead
         */
        this.onWillMove = this.fileMoveEmitter.onWill;
        /**
         * @deprecated since 1.4.0 - in order to support VS Code FS API (https://github.com/eclipse-theia/theia/pull/7908), use `FileService.onDidFailUserOperation` instead
         */
        this.onDidFailMove = this.fileMoveEmitter.onDidFail;
        /**
         * @deprecated since 1.4.0 - in order to support VS Code FS API (https://github.com/eclipse-theia/theia/pull/7908),
         * instead use `FileService.onDidRunUserOperation` for events triggered by user gestures
         * or `FileService.onDidRunOperation` triggered by user gestures and programmatically
         */
        this.onDidMove = this.fileMoveEmitter.onDid;
    }
    FileSystemWatcher.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.onFileChangedEmitter);
        this.toDispose.push(this.fileDeleteEmitter);
        this.toDispose.push(this.fileMoveEmitter);
        this.toDispose.push(this.fileService.onWillRunUserOperation(function (event) {
            if (event.operation === 0 /* CREATE */) {
                _this.fileCreateEmitter.fireWill({ uri: event.target });
            }
            else if (event.operation === 1 /* DELETE */) {
                _this.fileDeleteEmitter.fireWill({ uri: event.target });
            }
            else if (event.operation === 2 /* MOVE */ && event.source) {
                _this.fileMoveEmitter.fireWill({ sourceUri: event.source, targetUri: event.target });
            }
        }));
        this.toDispose.push(this.fileService.onDidFailUserOperation(function (event) {
            if (event.operation === 0 /* CREATE */) {
                _this.fileCreateEmitter.fireDid(true, { uri: event.target });
            }
            else if (event.operation === 1 /* DELETE */) {
                _this.fileDeleteEmitter.fireDid(true, { uri: event.target });
            }
            else if (event.operation === 2 /* MOVE */ && event.source) {
                _this.fileMoveEmitter.fireDid(true, { sourceUri: event.source, targetUri: event.target });
            }
        }));
        this.toDispose.push(this.fileService.onDidRunUserOperation(function (event) {
            if (event.operation === 0 /* CREATE */) {
                _this.fileCreateEmitter.fireDid(false, { uri: event.target });
            }
            else if (event.operation === 1 /* DELETE */) {
                _this.fileDeleteEmitter.fireDid(false, { uri: event.target });
            }
            else if (event.operation === 2 /* MOVE */ && event.source) {
                _this.fileMoveEmitter.fireDid(false, { sourceUri: event.source, targetUri: event.target });
            }
        }));
    };
    /**
     * Stop watching.
     */
    FileSystemWatcher.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    /**
     * Start file watching under the given uri.
     *
     * Resolve when watching is started.
     * Return a disposable to stop file watching under the given uri.
     */
    FileSystemWatcher.prototype.watchFileChanges = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fileService.watch(uri)];
            });
        });
    };
    __decorate([
        inversify_1.inject(file_service_1.FileService),
        __metadata("design:type", file_service_1.FileService)
    ], FileSystemWatcher.prototype, "fileService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileSystemWatcher.prototype, "init", null);
    FileSystemWatcher = __decorate([
        inversify_1.injectable()
    ], FileSystemWatcher);
    return FileSystemWatcher;
}());
exports.FileSystemWatcher = FileSystemWatcher;


/***/ })

}]);
//# sourceMappingURL=4.bundle.js.map