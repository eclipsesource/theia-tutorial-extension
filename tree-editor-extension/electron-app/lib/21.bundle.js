(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "../node_modules/@theia/preferences/lib/browser/abstract-resource-preference-provider.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/abstract-resource-preference-provider.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractResourcePreferenceProvider = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-null/no-null */
var jsoncparser = __webpack_require__(/*! jsonc-parser */ "../node_modules/jsonc-parser/lib/esm/main.js");
var json_1 = __webpack_require__(/*! @phosphor/coreutils/lib/json */ "../node_modules/@phosphor/coreutils/lib/json.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "../node_modules/@theia/core/lib/common/message-service.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "../node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
var monaco_text_model_service_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-text-model-service */ "../node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var monaco_workspace_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-workspace */ "../node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
var AbstractResourcePreferenceProvider = /** @class */ (function (_super) {
    __extends(AbstractResourcePreferenceProvider, _super);
    function AbstractResourcePreferenceProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preferences = {};
        _this.loading = new promise_util_1.Deferred();
        return _this;
    }
    AbstractResourcePreferenceProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, reference;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = this.getUri();
                        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.loading.reject(new Error("preference provider for '" + uri + "' was disposed")); }));
                        this._ready.resolve();
                        return [4 /*yield*/, this.textModelService.createModelReference(uri)];
                    case 1:
                        reference = _a.sent();
                        if (this.toDispose.disposed) {
                            reference.dispose();
                            return [2 /*return*/];
                        }
                        this.model = reference.object;
                        this.loading.resolve();
                        this.toDispose.push(reference);
                        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.model = undefined; }));
                        this.readPreferences();
                        this.toDispose.push(this.model.onDidChangeContent(function () { return _this.readPreferences(); }));
                        this.toDispose.push(this.model.onDirtyChanged(function () { return _this.readPreferences(); }));
                        this.toDispose.push(this.model.onDidChangeValid(function () { return _this.readPreferences(); }));
                        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.reset(); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AbstractResourcePreferenceProvider.prototype, "valid", {
        get: function () {
            return this.model && this.model.valid || false;
        },
        enumerable: false,
        configurable: true
    });
    AbstractResourcePreferenceProvider.prototype.getConfigUri = function (resourceUri) {
        if (!resourceUri) {
            return this.getUri();
        }
        return this.valid && this.contains(resourceUri) ? this.getUri() : undefined;
    };
    AbstractResourcePreferenceProvider.prototype.contains = function (resourceUri) {
        if (!resourceUri) {
            return true;
        }
        var domain = this.getDomain();
        if (!domain) {
            return true;
        }
        var resourcePath = new uri_1.default(resourceUri).path;
        return domain.some(function (uri) { return new uri_1.default(uri).path.relativity(resourcePath) >= 0; });
    };
    AbstractResourcePreferenceProvider.prototype.getPreferences = function (resourceUri) {
        return this.valid && this.contains(resourceUri) ? this.preferences : {};
    };
    AbstractResourcePreferenceProvider.prototype.setPreference = function (key, value, resourceUri) {
        return __awaiter(this, void 0, void 0, function () {
            var path, content, textModel, editOperations, _a, insertSpaces, tabSize, defaultEOL, _b, _c, edit, start, end, e_1, message;
            var e_2, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.loading.promise];
                    case 1:
                        _e.sent();
                        if (!this.model) {
                            return [2 /*return*/, false];
                        }
                        if (!this.contains(resourceUri)) {
                            return [2 /*return*/, false];
                        }
                        path = this.getPath(key);
                        if (!path) {
                            return [2 /*return*/, false];
                        }
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 5, , 6]);
                        content = this.model.getText().trim();
                        if (!content && value === undefined) {
                            return [2 /*return*/, true];
                        }
                        textModel = this.model.textEditorModel;
                        editOperations = [];
                        if (path.length || value !== undefined) {
                            _a = textModel.getOptions(), insertSpaces = _a.insertSpaces, tabSize = _a.tabSize, defaultEOL = _a.defaultEOL;
                            try {
                                for (_b = __values(jsoncparser.modify(content, path, value, {
                                    formattingOptions: {
                                        insertSpaces: insertSpaces,
                                        tabSize: tabSize,
                                        eol: defaultEOL === monaco.editor.DefaultEndOfLine.LF ? '\n' : '\r\n'
                                    }
                                })), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    edit = _c.value;
                                    start = textModel.getPositionAt(edit.offset);
                                    end = textModel.getPositionAt(edit.offset + edit.length);
                                    editOperations.push({
                                        range: monaco.Range.fromPositions(start, end),
                                        text: edit.content || null,
                                        forceMoveMarkers: false
                                    });
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        else {
                            editOperations.push({
                                range: textModel.getFullModelRange(),
                                text: null,
                                forceMoveMarkers: false
                            });
                        }
                        return [4 /*yield*/, this.workspace.applyBackgroundEdit(this.model, editOperations)];
                    case 3:
                        _e.sent();
                        return [4 /*yield*/, this.pendingChanges];
                    case 4: return [2 /*return*/, _e.sent()];
                    case 5:
                        e_1 = _e.sent();
                        message = "Failed to update the value of '" + key + "' in '" + this.getUri() + "'.";
                        this.messageService.error(message + " Please check if it is corrupted.");
                        console.error("" + message, e_1);
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AbstractResourcePreferenceProvider.prototype.getPath = function (preferenceName) {
        return [preferenceName];
    };
    /**
     * It HAS to be sync to ensure that `setPreference` returns only when values are updated
     * or any other operation modifying the monaco model content.
     */
    AbstractResourcePreferenceProvider.prototype.readPreferences = function () {
        var model = this.model;
        if (!model || model.dirty) {
            return;
        }
        try {
            var preferences = void 0;
            if (model.valid) {
                var content = model.getText();
                preferences = this.getParsedContent(content);
            }
            else {
                preferences = {};
            }
            this.handlePreferenceChanges(preferences);
        }
        catch (e) {
            console.error("Failed to load preferences from '" + this.getUri() + "'.", e);
        }
    };
    AbstractResourcePreferenceProvider.prototype.getParsedContent = function (content) {
        var jsonData = this.parse(content);
        var preferences = {};
        if (typeof jsonData !== 'object') {
            return preferences;
        }
        // eslint-disable-next-line guard-for-in
        for (var preferenceName in jsonData) {
            var preferenceValue = jsonData[preferenceName];
            if (this.schemaProvider.testOverrideValue(preferenceName, preferenceValue)) {
                // eslint-disable-next-line guard-for-in
                for (var overriddenPreferenceName in preferenceValue) {
                    var overriddenValue = preferenceValue[overriddenPreferenceName];
                    preferences[preferenceName + "." + overriddenPreferenceName] = overriddenValue;
                }
            }
            else {
                preferences[preferenceName] = preferenceValue;
            }
        }
        return preferences;
    };
    AbstractResourcePreferenceProvider.prototype.parse = function (content) {
        content = content.trim();
        if (!content) {
            return undefined;
        }
        var strippedContent = jsoncparser.stripComments(content);
        return jsoncparser.parse(strippedContent);
    };
    AbstractResourcePreferenceProvider.prototype.handlePreferenceChanges = function (newPrefs) {
        var e_3, _a;
        var oldPrefs = Object.assign({}, this.preferences);
        this.preferences = newPrefs;
        var prefNames = new Set(__spread(Object.keys(oldPrefs), Object.keys(newPrefs)));
        var prefChanges = [];
        var uri = this.getUri();
        try {
            for (var _b = __values(prefNames.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var prefName = _c.value;
                var oldValue = oldPrefs[prefName];
                var newValue = newPrefs[prefName];
                var schemaProperties = this.schemaProvider.getCombinedSchema().properties[prefName];
                if (schemaProperties) {
                    var scope = schemaProperties.scope;
                    // do not emit the change event if the change is made out of the defined preference scope
                    if (!this.schemaProvider.isValidInScope(prefName, this.getScope())) {
                        console.warn("Preference " + prefName + " in " + uri + " can only be defined in scopes: " + browser_1.PreferenceScope.getScopeNames(scope).join(', ') + ".");
                        continue;
                    }
                }
                if (newValue === undefined && oldValue !== newValue
                    || oldValue === undefined && newValue !== oldValue // JSONExt.deepEqual() does not support handling `undefined`
                    || !json_1.JSONExt.deepEqual(oldValue, newValue)) {
                    prefChanges.push({
                        preferenceName: prefName,
                        newValue: newValue, oldValue: oldValue,
                        scope: this.getScope(), domain: this.getDomain()
                    });
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (prefChanges.length > 0) { // do not emit the change event if the pref value is not changed
            this.emitPreferencesChangedEvent(prefChanges);
        }
    };
    AbstractResourcePreferenceProvider.prototype.reset = function () {
        var e_4, _a;
        var preferences = this.preferences;
        this.preferences = {};
        var changes = [];
        try {
            for (var _b = __values(Object.keys(preferences)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var prefName = _c.value;
                var value = preferences[prefName];
                if (value !== undefined) {
                    changes.push({
                        preferenceName: prefName, newValue: undefined, oldValue: value, scope: this.getScope(), domain: this.getDomain()
                    });
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (changes.length > 0) {
            this.emitPreferencesChangedEvent(changes);
        }
    };
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], AbstractResourcePreferenceProvider.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], AbstractResourcePreferenceProvider.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], AbstractResourcePreferenceProvider.prototype, "schemaProvider", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], AbstractResourcePreferenceProvider.prototype, "configurations", void 0);
    __decorate([
        inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService),
        __metadata("design:type", monaco_text_model_service_1.MonacoTextModelService)
    ], AbstractResourcePreferenceProvider.prototype, "textModelService", void 0);
    __decorate([
        inversify_1.inject(monaco_workspace_1.MonacoWorkspace),
        __metadata("design:type", monaco_workspace_1.MonacoWorkspace)
    ], AbstractResourcePreferenceProvider.prototype, "workspace", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AbstractResourcePreferenceProvider.prototype, "init", null);
    AbstractResourcePreferenceProvider = __decorate([
        inversify_1.injectable()
    ], AbstractResourcePreferenceProvider);
    return AbstractResourcePreferenceProvider;
}(browser_1.PreferenceProvider));
exports.AbstractResourcePreferenceProvider = AbstractResourcePreferenceProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/folder-preference-provider.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/folder-preference-provider.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
exports.FolderPreferenceProvider = exports.FolderPreferenceProviderFolder = exports.FolderPreferenceProviderFactory = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var files_1 = __webpack_require__(/*! @theia/filesystem/lib/common/files */ "../node_modules/@theia/filesystem/lib/common/files.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "../node_modules/@theia/workspace/lib/browser/workspace-service.js");
var section_preference_provider_1 = __webpack_require__(/*! ./section-preference-provider */ "../node_modules/@theia/preferences/lib/browser/section-preference-provider.js");
exports.FolderPreferenceProviderFactory = Symbol('FolderPreferenceProviderFactory');
exports.FolderPreferenceProviderFolder = Symbol('FolderPreferenceProviderFolder');
var FolderPreferenceProvider = /** @class */ (function (_super) {
    __extends(FolderPreferenceProvider, _super);
    function FolderPreferenceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FolderPreferenceProvider.prototype, "folderUri", {
        get: function () {
            if (!this._folderUri) {
                this._folderUri = this.folder.resource;
            }
            return this._folderUri;
        },
        enumerable: false,
        configurable: true
    });
    FolderPreferenceProvider.prototype.getScope = function () {
        if (!this.workspaceService.isMultiRootWorkspaceOpened) {
            // when FolderPreferenceProvider is used as a delegate of WorkspacePreferenceProvider in a one-folder workspace
            return browser_1.PreferenceScope.Workspace;
        }
        return browser_1.PreferenceScope.Folder;
    };
    FolderPreferenceProvider.prototype.getDomain = function () {
        return [this.folderUri.toString()];
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], FolderPreferenceProvider.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(exports.FolderPreferenceProviderFolder),
        __metadata("design:type", Object)
    ], FolderPreferenceProvider.prototype, "folder", void 0);
    FolderPreferenceProvider = __decorate([
        inversify_1.injectable()
    ], FolderPreferenceProvider);
    return FolderPreferenceProvider;
}(section_preference_provider_1.SectionPreferenceProvider));
exports.FolderPreferenceProvider = FolderPreferenceProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/folders-preferences-provider.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/folders-preferences-provider.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoldersPreferencesProvider = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var preference_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-provider */ "../node_modules/@theia/core/lib/browser/preferences/preference-provider.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "../node_modules/@theia/workspace/lib/browser/workspace-service.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "../node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
var folder_preference_provider_1 = __webpack_require__(/*! ./folder-preference-provider */ "../node_modules/@theia/preferences/lib/browser/folder-preference-provider.js");
var FoldersPreferencesProvider = /** @class */ (function (_super) {
    __extends(FoldersPreferencesProvider, _super);
    function FoldersPreferencesProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.providers = new Map();
        return _this;
    }
    FoldersPreferencesProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var readyPromises, _a, _b, provider;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        _d.sent();
                        this.updateProviders();
                        this.workspaceService.onWorkspaceChanged(function () { return _this.updateProviders(); });
                        readyPromises = [];
                        try {
                            for (_a = __values(this.providers.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                provider = _b.value;
                                readyPromises.push(provider.ready.catch(function (e) { return console.error(e); }));
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        Promise.all(readyPromises).then(function () { return _this._ready.resolve(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    FoldersPreferencesProvider.prototype.updateProviders = function () {
        var e_2, _a, e_3, _b, e_4, _c, e_5, _d;
        var roots = this.workspaceService.tryGetRoots();
        var toDelete = new Set(this.providers.keys());
        try {
            for (var roots_1 = __values(roots), roots_1_1 = roots_1.next(); !roots_1_1.done; roots_1_1 = roots_1.next()) {
                var folder = roots_1_1.value;
                try {
                    for (var _e = (e_3 = void 0, __values(this.configurations.getPaths())), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var configPath = _f.value;
                        try {
                            for (var _g = (e_4 = void 0, __values(__spread(this.configurations.getSectionNames(), [this.configurations.getConfigName()]))), _h = _g.next(); !_h.done; _h = _g.next()) {
                                var configName = _h.value;
                                var sectionUri = this.configurations.createUri(folder.resource, configPath, configName);
                                var sectionKey = sectionUri.toString();
                                toDelete.delete(sectionKey);
                                if (!this.providers.has(sectionKey)) {
                                    var provider = this.createProvider(sectionUri, configName, folder);
                                    this.providers.set(sectionKey, provider);
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (roots_1_1 && !roots_1_1.done && (_a = roots_1.return)) _a.call(roots_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var toDelete_1 = __values(toDelete), toDelete_1_1 = toDelete_1.next(); !toDelete_1_1.done; toDelete_1_1 = toDelete_1.next()) {
                var key = toDelete_1_1.value;
                var provider = this.providers.get(key);
                if (provider) {
                    this.providers.delete(key);
                    provider.dispose();
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (toDelete_1_1 && !toDelete_1_1.done && (_d = toDelete_1.return)) _d.call(toDelete_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    FoldersPreferencesProvider.prototype.getConfigUri = function (resourceUri) {
        var e_6, _a;
        try {
            for (var _b = __values(this.getFolderProviders(resourceUri)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                var configUri = provider.getConfigUri(resourceUri);
                if (this.configurations.isConfigUri(configUri)) {
                    return configUri;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return undefined;
    };
    FoldersPreferencesProvider.prototype.getContainingConfigUri = function (resourceUri) {
        var e_7, _a;
        try {
            for (var _b = __values(this.getFolderProviders(resourceUri)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                var configUri = provider.getConfigUri();
                if (this.configurations.isConfigUri(configUri) && provider.contains(resourceUri)) {
                    return configUri;
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return undefined;
    };
    FoldersPreferencesProvider.prototype.getDomain = function () {
        return this.workspaceService.tryGetRoots().map(function (root) { return root.resource.toString(); });
    };
    FoldersPreferencesProvider.prototype.resolve = function (preferenceName, resourceUri) {
        var e_8, _a, e_9, _b;
        var result = {};
        var groups = this.groupProvidersByConfigName(resourceUri);
        try {
            for (var _c = __values(groups.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var group = _d.value;
                try {
                    for (var group_1 = (e_9 = void 0, __values(group)), group_1_1 = group_1.next(); !group_1_1.done; group_1_1 = group_1.next()) {
                        var provider = group_1_1.value;
                        var _e = provider.resolve(preferenceName, resourceUri), value = _e.value, configUri = _e.configUri;
                        if (configUri && value !== undefined) {
                            result.configUri = configUri;
                            result.value = preference_provider_1.PreferenceProvider.merge(result.value, value);
                            break;
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (group_1_1 && !group_1_1.done && (_b = group_1.return)) _b.call(group_1);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return result;
    };
    FoldersPreferencesProvider.prototype.getPreferences = function (resourceUri) {
        var e_10, _a, e_11, _b;
        var result = {};
        var groups = this.groupProvidersByConfigName(resourceUri);
        try {
            for (var _c = __values(groups.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var group = _d.value;
                try {
                    for (var group_2 = (e_11 = void 0, __values(group)), group_2_1 = group_2.next(); !group_2_1.done; group_2_1 = group_2.next()) {
                        var provider = group_2_1.value;
                        if (provider.getConfigUri(resourceUri)) {
                            var preferences = provider.getPreferences();
                            result = preference_provider_1.PreferenceProvider.merge(result, preferences);
                            break;
                        }
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (group_2_1 && !group_2_1.done && (_b = group_2.return)) _b.call(group_2);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return result;
    };
    FoldersPreferencesProvider.prototype.setPreference = function (preferenceName, value, resourceUri) {
        return __awaiter(this, void 0, void 0, function () {
            var sectionName, configName, providers, configPath, iterator, _loop_1, this_1, providers_1, providers_1_1, provider, next, provider;
            var e_12, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sectionName = preferenceName.split('.', 1)[0];
                        configName = this.configurations.isSectionName(sectionName) ? sectionName : this.configurations.getConfigName();
                        providers = this.getFolderProviders(resourceUri);
                        iterator = [];
                        _loop_1 = function (provider) {
                            if (configPath === undefined) {
                                var configUri = provider.getConfigUri(resourceUri);
                                if (configUri) {
                                    configPath = this_1.configurations.getPath(configUri);
                                }
                            }
                            if (this_1.configurations.getName(provider.getConfigUri()) === configName) {
                                iterator.push(function () {
                                    if (provider.getConfigUri(resourceUri)) {
                                        return provider;
                                    }
                                    iterator.push(function () {
                                        if (_this.configurations.getPath(provider.getConfigUri()) === configPath) {
                                            return provider;
                                        }
                                        iterator.push(function () { return provider; });
                                    });
                                });
                            }
                        };
                        this_1 = this;
                        try {
                            for (providers_1 = __values(providers), providers_1_1 = providers_1.next(); !providers_1_1.done; providers_1_1 = providers_1.next()) {
                                provider = providers_1_1.value;
                                _loop_1(provider);
                            }
                        }
                        catch (e_12_1) { e_12 = { error: e_12_1 }; }
                        finally {
                            try {
                                if (providers_1_1 && !providers_1_1.done && (_a = providers_1.return)) _a.call(providers_1);
                            }
                            finally { if (e_12) throw e_12.error; }
                        }
                        next = iterator.shift();
                        _b.label = 1;
                    case 1:
                        if (!next) return [3 /*break*/, 4];
                        provider = next();
                        if (!provider) return [3 /*break*/, 3];
                        return [4 /*yield*/, provider.setPreference(preferenceName, value, resourceUri)];
                    case 2:
                        if (_b.sent()) {
                            return [2 /*return*/, true];
                        }
                        _b.label = 3;
                    case 3:
                        next = iterator.shift();
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    FoldersPreferencesProvider.prototype.groupProvidersByConfigName = function (resourceUri) {
        var e_13, _a, e_14, _b;
        var groups = new Map();
        var providers = this.getFolderProviders(resourceUri);
        try {
            for (var _c = __values(__spread([this.configurations.getConfigName()], this.configurations.getSectionNames())), _d = _c.next(); !_d.done; _d = _c.next()) {
                var configName = _d.value;
                var group = [];
                try {
                    for (var providers_2 = (e_14 = void 0, __values(providers)), providers_2_1 = providers_2.next(); !providers_2_1.done; providers_2_1 = providers_2.next()) {
                        var provider = providers_2_1.value;
                        if (this.configurations.getName(provider.getConfigUri()) === configName) {
                            group.push(provider);
                        }
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (providers_2_1 && !providers_2_1.done && (_b = providers_2.return)) _b.call(providers_2);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
                groups.set(configName, group);
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return groups;
    };
    FoldersPreferencesProvider.prototype.getFolderProviders = function (resourceUri) {
        var e_15, _a;
        if (!resourceUri) {
            return [];
        }
        var resourcePath = new uri_1.default(resourceUri).path;
        var folder = { relativity: Number.MAX_SAFE_INTEGER };
        var providers = new Map();
        try {
            for (var _b = __values(this.providers.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                var uri = provider.folderUri.toString();
                var folderProviders = (providers.get(uri) || []);
                folderProviders.push(provider);
                providers.set(uri, folderProviders);
                // in case we have nested folders mounted as workspace roots, select the innermost enclosing folder
                var relativity = provider.folderUri.path.relativity(resourcePath);
                if (relativity >= 0 && folder.relativity > relativity) {
                    folder = { relativity: relativity, uri: uri };
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return folder.uri && providers.get(folder.uri) || [];
    };
    FoldersPreferencesProvider.prototype.createProvider = function (uri, section, folder) {
        var _this = this;
        var provider = this.folderPreferenceProviderFactory(uri, section, folder);
        this.toDispose.push(provider);
        this.toDispose.push(provider.onDidPreferencesChanged(function (change) {
            _this.onDidPreferencesChangedEmitter.fire(change);
        }));
        return provider;
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], FoldersPreferencesProvider.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(folder_preference_provider_1.FolderPreferenceProviderFactory),
        __metadata("design:type", Function)
    ], FoldersPreferencesProvider.prototype, "folderPreferenceProviderFactory", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], FoldersPreferencesProvider.prototype, "configurations", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], FoldersPreferencesProvider.prototype, "init", null);
    FoldersPreferencesProvider = __decorate([
        inversify_1.injectable()
    ], FoldersPreferencesProvider);
    return FoldersPreferencesProvider;
}(preference_provider_1.PreferenceProvider));
exports.FoldersPreferencesProvider = FoldersPreferencesProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/preference-bindings.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/preference-bindings.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
exports.bindPreferenceProviders = exports.bindFactory = exports.bindWorkspaceFilePreferenceProvider = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "../node_modules/@theia/core/lib/browser/preferences/index.js");
var user_preference_provider_1 = __webpack_require__(/*! ./user-preference-provider */ "../node_modules/@theia/preferences/lib/browser/user-preference-provider.js");
var workspace_preference_provider_1 = __webpack_require__(/*! ./workspace-preference-provider */ "../node_modules/@theia/preferences/lib/browser/workspace-preference-provider.js");
var workspace_file_preference_provider_1 = __webpack_require__(/*! ./workspace-file-preference-provider */ "../node_modules/@theia/preferences/lib/browser/workspace-file-preference-provider.js");
var folders_preferences_provider_1 = __webpack_require__(/*! ./folders-preferences-provider */ "../node_modules/@theia/preferences/lib/browser/folders-preferences-provider.js");
var folder_preference_provider_1 = __webpack_require__(/*! ./folder-preference-provider */ "../node_modules/@theia/preferences/lib/browser/folder-preference-provider.js");
var user_configs_preference_provider_1 = __webpack_require__(/*! ./user-configs-preference-provider */ "../node_modules/@theia/preferences/lib/browser/user-configs-preference-provider.js");
var section_preference_provider_1 = __webpack_require__(/*! ./section-preference-provider */ "../node_modules/@theia/preferences/lib/browser/section-preference-provider.js");
function bindWorkspaceFilePreferenceProvider(bind) {
    bind(workspace_file_preference_provider_1.WorkspaceFilePreferenceProviderFactory).toFactory(function (ctx) { return function (options) {
        var child = new inversify_1.Container({ defaultScope: 'Singleton' });
        child.parent = ctx.container;
        child.bind(workspace_file_preference_provider_1.WorkspaceFilePreferenceProvider).toSelf();
        child.bind(workspace_file_preference_provider_1.WorkspaceFilePreferenceProviderOptions).toConstantValue(options);
        return child.get(workspace_file_preference_provider_1.WorkspaceFilePreferenceProvider);
    }; });
}
exports.bindWorkspaceFilePreferenceProvider = bindWorkspaceFilePreferenceProvider;
function bindFactory(bind, factoryId, constructor) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var parameterBindings = [];
    for (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var _i = 3; 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _i < arguments.length; 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _i++) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        parameterBindings[_i - 3] = arguments[_i];
    }
    bind(factoryId).toFactory(function (ctx) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var child = new inversify_1.Container({ defaultScope: 'Singleton' });
            child.parent = ctx.container;
            for (var i = 0; i < parameterBindings.length; i++) {
                child.bind(parameterBindings[i]).toConstantValue(args[i]);
            }
            child.bind(constructor).to(constructor);
            return child.get(constructor);
        };
    });
}
exports.bindFactory = bindFactory;
function bindPreferenceProviders(bind, unbind) {
    unbind(preferences_1.PreferenceProvider);
    bind(preferences_1.PreferenceProvider).to(user_configs_preference_provider_1.UserConfigsPreferenceProvider).inSingletonScope().whenTargetNamed(preferences_1.PreferenceScope.User);
    bind(preferences_1.PreferenceProvider).to(workspace_preference_provider_1.WorkspacePreferenceProvider).inSingletonScope().whenTargetNamed(preferences_1.PreferenceScope.Workspace);
    bind(preferences_1.PreferenceProvider).to(folders_preferences_provider_1.FoldersPreferencesProvider).inSingletonScope().whenTargetNamed(preferences_1.PreferenceScope.Folder);
    bindWorkspaceFilePreferenceProvider(bind);
    bindFactory(bind, user_preference_provider_1.UserPreferenceProviderFactory, user_preference_provider_1.UserPreferenceProvider, section_preference_provider_1.SectionPreferenceProviderUri, section_preference_provider_1.SectionPreferenceProviderSection);
    bindFactory(bind, folder_preference_provider_1.FolderPreferenceProviderFactory, folder_preference_provider_1.FolderPreferenceProvider, section_preference_provider_1.SectionPreferenceProviderUri, section_preference_provider_1.SectionPreferenceProviderSection, folder_preference_provider_1.FolderPreferenceProviderFolder);
}
exports.bindPreferenceProviders = bindPreferenceProviders;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/preference-frontend-module.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/preference-frontend-module.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
exports.bindPreferences = void 0;
__webpack_require__(/*! ../../src/browser/style/index.css */ "../node_modules/@theia/preferences/src/browser/style/index.css");
__webpack_require__(/*! ./preferences-monaco-contribution */ "../node_modules/@theia/preferences/lib/browser/preferences-monaco-contribution.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "../node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var preference_tree_generator_1 = __webpack_require__(/*! ./util/preference-tree-generator */ "../node_modules/@theia/preferences/lib/browser/util/preference-tree-generator.js");
var preference_bindings_1 = __webpack_require__(/*! ./preference-bindings */ "../node_modules/@theia/preferences/lib/browser/preference-bindings.js");
var preference_widget_bindings_1 = __webpack_require__(/*! ./views/preference-widget-bindings */ "../node_modules/@theia/preferences/lib/browser/views/preference-widget-bindings.js");
var preference_event_service_1 = __webpack_require__(/*! ./util/preference-event-service */ "../node_modules/@theia/preferences/lib/browser/util/preference-event-service.js");
var preference_tree_provider_1 = __webpack_require__(/*! ./preference-tree-provider */ "../node_modules/@theia/preferences/lib/browser/preference-tree-provider.js");
var preferences_contribution_1 = __webpack_require__(/*! ./preferences-contribution */ "../node_modules/@theia/preferences/lib/browser/preferences-contribution.js");
var preference_scope_command_manager_1 = __webpack_require__(/*! ./util/preference-scope-command-manager */ "../node_modules/@theia/preferences/lib/browser/util/preference-scope-command-manager.js");
var json_schema_store_1 = __webpack_require__(/*! @theia/core/lib/browser/json-schema-store */ "../node_modules/@theia/core/lib/browser/json-schema-store.js");
var preferences_json_schema_contribution_1 = __webpack_require__(/*! ./preferences-json-schema-contribution */ "../node_modules/@theia/preferences/lib/browser/preferences-json-schema-contribution.js");
function bindPreferences(bind, unbind) {
    preference_bindings_1.bindPreferenceProviders(bind, unbind);
    preference_widget_bindings_1.bindPreferencesWidgets(bind);
    bind(preference_event_service_1.PreferencesEventService).toSelf().inSingletonScope();
    bind(preference_tree_provider_1.PreferencesTreeProvider).toSelf().inSingletonScope();
    bind(preference_tree_generator_1.PreferenceTreeGenerator).toSelf().inSingletonScope();
    browser_1.bindViewContribution(bind, preferences_contribution_1.PreferencesContribution);
    bind(preference_scope_command_manager_1.PreferenceScopeCommandManager).toSelf().inSingletonScope();
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(preferences_contribution_1.PreferencesContribution);
    bind(preferences_json_schema_contribution_1.PreferencesJsonSchemaContribution).toSelf().inSingletonScope();
    bind(json_schema_store_1.JsonSchemaContribution).toService(preferences_json_schema_contribution_1.PreferencesJsonSchemaContribution);
}
exports.bindPreferences = bindPreferences;
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bindPreferences(bind, unbind);
});


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/preference-tree-provider.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/preference-tree-provider.js ***!
  \**********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferencesTreeProvider = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var fuzzy = __webpack_require__(/*! fuzzy */ "../node_modules/fuzzy/lib/fuzzy.js");
var lodash_1 = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "../node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
var preference_event_service_1 = __webpack_require__(/*! ./util/preference-event-service */ "../node_modules/@theia/preferences/lib/browser/util/preference-event-service.js");
var preference_tree_generator_1 = __webpack_require__(/*! ./util/preference-tree-generator */ "../node_modules/@theia/preferences/lib/browser/util/preference-tree-generator.js");
var preference_types_1 = __webpack_require__(/*! ./util/preference-types */ "../node_modules/@theia/preferences/lib/browser/util/preference-types.js");
;
var filterDefaults = {
    minLength: 1,
    baseSchemaAltered: false,
    requiresFilter: true,
};
var PreferencesTreeProvider = /** @class */ (function () {
    function PreferencesTreeProvider() {
        var _this = this;
        this._isFiltered = false;
        this.lastSearchedLiteral = '';
        this.lastSearchedFuzzy = '';
        this.currentScope = preference_types_1.Preference.DEFAULT_SCOPE;
        this.handleUnderlyingDataChange = lodash_1.debounce(function (options, newScope) { return _this.updateUnderlyingData(options, newScope); }, 200);
    }
    PreferencesTreeProvider.prototype.init = function () {
        var _this = this;
        this.updateUnderlyingData({ baseSchemaAltered: true });
        this.schemaProvider.onDidPreferenceSchemaChanged(function () { return _this.handleUnderlyingDataChange({ baseSchemaAltered: true }); });
        this.preferencesEventService.onSearch.event(function (searchEvent) { return _this.updateDisplay(searchEvent.query); });
        this.preferencesEventService.onTabScopeSelected.event(function (scopeEvent) {
            var newScope = Number(scopeEvent.scope);
            var currentScope = Number(_this.currentScope.scope);
            var scopeChangesPreferenceVisibility = ((newScope === browser_1.PreferenceScope.User || newScope === browser_1.PreferenceScope.Workspace) && currentScope === browser_1.PreferenceScope.Folder)
                || (newScope === browser_1.PreferenceScope.Folder && (currentScope === browser_1.PreferenceScope.User || currentScope === browser_1.PreferenceScope.Workspace));
            _this.handleUnderlyingDataChange({ requiresFilter: scopeChangesPreferenceVisibility }, scopeEvent);
        });
    };
    PreferencesTreeProvider.prototype.updateUnderlyingData = function (options, newScope) {
        if (options.baseSchemaAltered) {
            this.baseSchema = this.schemaProvider.getCombinedSchema();
        }
        if (newScope) {
            this.currentScope = newScope;
        }
        this.updateDisplay(this.lastSearchedLiteral, options);
    };
    PreferencesTreeProvider.prototype.updateDisplay = function (term, options) {
        if (term === void 0) { term = this.lastSearchedLiteral; }
        if (options === void 0) { options = {}; }
        if (options.baseSchemaAltered) {
            this.baseTree = this.preferencesTreeGenerator.generateTree();
        }
        var shouldBuildNewTree = options.requiresFilter !== false;
        if (shouldBuildNewTree) {
            this._currentTree = this.filter(term, Number(this.currentScope.scope), this.baseTree, options);
        }
        this.preferencesEventService.onDisplayChanged.fire(shouldBuildNewTree || !!options.baseSchemaAltered);
    };
    PreferencesTreeProvider.prototype.filter = function (searchTerm, currentScope, tree, filterOptions) {
        if (filterOptions === void 0) { filterOptions = {}; }
        var minLength = __assign(__assign({}, filterDefaults), filterOptions).minLength;
        this.lastSearchedLiteral = searchTerm;
        this.lastSearchedFuzzy = searchTerm.replace(/\s/g, '');
        this._isFiltered = searchTerm.length >= minLength;
        return this.recurseAndSetVisible(currentScope, tree);
    };
    PreferencesTreeProvider.prototype.recurseAndSetVisible = function (scope, tree) {
        var _this = this;
        var currentNodeShouldBeVisible = false;
        if (browser_1.CompositeTreeNode.is(tree)) {
            tree.children = tree.children.map(function (child) {
                var newChild = _this.recurseAndSetVisible(scope, child);
                currentNodeShouldBeVisible = currentNodeShouldBeVisible || !!newChild.visible;
                return newChild;
            });
            if (preference_types_1.Preference.Branch.is(tree)) {
                tree.leaves = (tree.leaves || []).map(function (child) {
                    var newChild = _this.recurseAndSetVisible(scope, child);
                    currentNodeShouldBeVisible = currentNodeShouldBeVisible || !!newChild.visible;
                    return newChild;
                });
            }
        }
        else {
            currentNodeShouldBeVisible = this.schemaProvider.isValidInScope(tree.id, scope)
                && (!this._isFiltered // search too short.
                    || fuzzy.test(this.lastSearchedFuzzy, tree.id || '') // search matches preference name.
                    // search matches description. Fuzzy isn't ideal here because the score depends on the order of discovery.
                    || (this.baseSchema.properties[tree.id].description || '').includes(this.lastSearchedLiteral));
        }
        return __assign(__assign({}, tree), { visible: currentNodeShouldBeVisible });
    };
    Object.defineProperty(PreferencesTreeProvider.prototype, "currentTree", {
        get: function () {
            return this._currentTree;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreferencesTreeProvider.prototype, "propertyList", {
        get: function () {
            return this.baseSchema.properties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreferencesTreeProvider.prototype, "isFiltered", {
        get: function () {
            return this._isFiltered;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        inversify_1.inject(preference_event_service_1.PreferencesEventService),
        __metadata("design:type", preference_event_service_1.PreferencesEventService)
    ], PreferencesTreeProvider.prototype, "preferencesEventService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], PreferencesTreeProvider.prototype, "schemaProvider", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], PreferencesTreeProvider.prototype, "preferenceConfigs", void 0);
    __decorate([
        inversify_1.inject(preference_tree_generator_1.PreferenceTreeGenerator),
        __metadata("design:type", preference_tree_generator_1.PreferenceTreeGenerator)
    ], PreferencesTreeProvider.prototype, "preferencesTreeGenerator", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferencesTreeProvider.prototype, "init", null);
    PreferencesTreeProvider = __decorate([
        inversify_1.injectable()
    ], PreferencesTreeProvider);
    return PreferencesTreeProvider;
}());
exports.PreferencesTreeProvider = PreferencesTreeProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/preferences-contribution.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/preferences-contribution.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferencesContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var os_1 = __webpack_require__(/*! @theia/core/lib/common/os */ "../node_modules/@theia/core/lib/common/os.js");
var browser_3 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var preference_widget_1 = __webpack_require__(/*! ./views/preference-widget */ "../node_modules/@theia/preferences/lib/browser/views/preference-widget.js");
var preference_event_service_1 = __webpack_require__(/*! ./util/preference-event-service */ "../node_modules/@theia/preferences/lib/browser/util/preference-event-service.js");
var workspace_preference_provider_1 = __webpack_require__(/*! ./workspace-preference-provider */ "../node_modules/@theia/preferences/lib/browser/workspace-preference-provider.js");
var preference_types_1 = __webpack_require__(/*! ./util/preference-types */ "../node_modules/@theia/preferences/lib/browser/util/preference-types.js");
var clipboard_service_1 = __webpack_require__(/*! @theia/core/lib/browser/clipboard-service */ "../node_modules/@theia/core/lib/browser/clipboard-service.js");
var file_service_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/file-service */ "../node_modules/@theia/filesystem/lib/browser/file-service.js");
var PreferencesContribution = /** @class */ (function (_super) {
    __extends(PreferencesContribution, _super);
    function PreferencesContribution() {
        var _this = _super.call(this, {
            widgetId: preference_widget_1.PreferencesWidget.ID,
            widgetName: preference_widget_1.PreferencesWidget.LABEL,
            defaultWidgetOptions: {
                area: 'main',
            },
        }) || this;
        _this.preferencesScope = preference_types_1.Preference.DEFAULT_SCOPE;
        return _this;
    }
    PreferencesContribution.prototype.init = function () {
        var _this = this;
        this.preferencesEventService.onTabScopeSelected.event(function (e) { return __awaiter(_this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        widget = _a.sent();
                        this.preferencesScope = e;
                        widget.preferenceScope = this.preferencesScope;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PreferencesContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(browser_1.CommonCommands.OPEN_PREFERENCES, {
            execute: function () { return _this.openView({ reveal: true }); },
        });
        commands.registerCommand(preference_types_1.PreferencesCommands.OPEN_PREFERENCES_JSON_TOOLBAR, {
            isEnabled: function () { return true; },
            isVisible: function (w) { return _this.withWidget(w, function () { return true; }); },
            execute: function (preferenceNode) {
                _this.openPreferencesJSON(preferenceNode);
            }
        });
        commands.registerCommand(preference_types_1.PreferencesCommands.COPY_JSON_NAME, {
            isEnabled: preference_types_1.Preference.EditorCommandArgs.is,
            isVisible: preference_types_1.Preference.EditorCommandArgs.is,
            execute: function (_a) {
                var id = _a.id, value = _a.value;
                _this.clipboardService.writeText(id);
            }
        });
        commands.registerCommand(preference_types_1.PreferencesCommands.COPY_JSON_VALUE, {
            isEnabled: preference_types_1.Preference.EditorCommandArgs.is,
            isVisible: preference_types_1.Preference.EditorCommandArgs.is,
            execute: function (_a) {
                var id = _a.id, value = _a.value;
                var jsonString = "\"" + id + "\": " + JSON.stringify(value);
                _this.clipboardService.writeText(jsonString);
            }
        });
        commands.registerCommand(preference_types_1.PreferencesCommands.RESET_PREFERENCE, {
            isEnabled: preference_types_1.Preference.EditorCommandArgs.is,
            isVisible: preference_types_1.Preference.EditorCommandArgs.is,
            execute: function (_a) {
                var id = _a.id, value = _a.value;
                _this.preferenceService.set(id, undefined, Number(_this.preferencesScope.scope), _this.preferencesScope.uri);
            }
        });
    };
    PreferencesContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_1.CommonMenus.FILE_SETTINGS_SUBMENU_OPEN, {
            commandId: browser_1.CommonCommands.OPEN_PREFERENCES.id,
            label: browser_1.CommonCommands.OPEN_PREFERENCES.label,
            order: 'a10',
        });
        menus.registerMenuAction(browser_1.CommonMenus.SETTINGS_OPEN, {
            commandId: browser_1.CommonCommands.OPEN_PREFERENCES.id,
            label: browser_1.CommonCommands.OPEN_PREFERENCES.label,
            order: 'a10',
        });
        menus.registerMenuAction(preference_types_1.PreferenceMenus.PREFERENCE_EDITOR_CONTEXT_MENU, {
            commandId: preference_types_1.PreferencesCommands.RESET_PREFERENCE.id,
            label: preference_types_1.PreferencesCommands.RESET_PREFERENCE.label,
            order: 'a'
        });
        menus.registerMenuAction(preference_types_1.PreferenceMenus.PREFERENCE_EDITOR_COPY_ACTIONS, {
            commandId: preference_types_1.PreferencesCommands.COPY_JSON_VALUE.id,
            label: preference_types_1.PreferencesCommands.COPY_JSON_VALUE.label,
            order: 'b'
        });
        menus.registerMenuAction(preference_types_1.PreferenceMenus.PREFERENCE_EDITOR_COPY_ACTIONS, {
            commandId: preference_types_1.PreferencesCommands.COPY_JSON_NAME.id,
            label: preference_types_1.PreferencesCommands.COPY_JSON_NAME.label,
            order: 'c'
        });
    };
    PreferencesContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: browser_1.CommonCommands.OPEN_PREFERENCES.id,
            keybinding: (os_1.isOSX && !browser_2.isFirefox) ? 'cmd+,' : 'ctrl+,'
        });
    };
    PreferencesContribution.prototype.registerToolbarItems = function (toolbar) {
        toolbar.registerItem({
            id: preference_types_1.PreferencesCommands.OPEN_PREFERENCES_JSON_TOOLBAR.id,
            command: preference_types_1.PreferencesCommands.OPEN_PREFERENCES_JSON_TOOLBAR.id,
            tooltip: 'Open Preferences in JSON',
            priority: 0,
        });
    };
    PreferencesContribution.prototype.openPreferencesJSON = function (preferenceNode) {
        return __awaiter(this, void 0, void 0, function () {
            var wasOpenedFromEditor, _a, scope, activeScopeIsFolder, uri, preferenceId, currentPreferenceValue, key, valueInCurrentScope, jsonEditorWidget, jsonUriToOpen, text, index, numReturns;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        wasOpenedFromEditor = preferenceNode.constructor !== preference_widget_1.PreferencesWidget;
                        _a = this.preferencesScope, scope = _a.scope, activeScopeIsFolder = _a.activeScopeIsFolder, uri = _a.uri;
                        preferenceId = wasOpenedFromEditor ? preferenceNode.id : '';
                        // when opening from toolbar, widget is passed as arg by default (we don't need this info)
                        if (wasOpenedFromEditor) {
                            currentPreferenceValue = preferenceNode.preference.values;
                            key = preference_types_1.Preference.LookupKeys[Number(scope)];
                            valueInCurrentScope = currentPreferenceValue[key] === undefined ? currentPreferenceValue.defaultValue : currentPreferenceValue[key];
                            this.preferenceService.set(preferenceId, valueInCurrentScope, Number(scope), uri);
                        }
                        return [4 /*yield*/, this.obtainConfigUri(scope, activeScopeIsFolder, uri)];
                    case 1:
                        jsonUriToOpen = _b.sent();
                        if (!jsonUriToOpen) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.editorManager.open(jsonUriToOpen)];
                    case 2:
                        jsonEditorWidget = _b.sent();
                        if (wasOpenedFromEditor) {
                            text = jsonEditorWidget.editor.document.getText();
                            if (preferenceId) {
                                index = text.match(preferenceId).index;
                                numReturns = text.slice(0, index).match(new RegExp('\n', 'g')).length;
                                jsonEditorWidget.editor.cursor = { line: numReturns, character: 4 + preferenceId.length + 4 };
                            }
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PreferencesContribution.prototype.obtainConfigUri = function (serializedScope, activeScopeIsFolder, resource) {
        return __awaiter(this, void 0, void 0, function () {
            var scope, resourceUri, configUri, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        scope = Number(serializedScope);
                        if (activeScopeIsFolder === 'true') {
                            scope = browser_1.PreferenceScope.Folder;
                        }
                        resourceUri = !!resource ? resource : undefined;
                        configUri = this.preferenceService.getConfigUri(scope, resourceUri);
                        if (!configUri) {
                            return [2 /*return*/, undefined];
                        }
                        _a = configUri;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileService.exists(configUri)];
                    case 1:
                        _a = !(_b.sent());
                        _b.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fileService.create(configUri)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, configUri];
                }
            });
        });
    };
    /**
     * Determine if the current widget is the PreferencesWidget.
     */
    PreferencesContribution.prototype.withWidget = function (widget, fn) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof preference_widget_1.PreferencesWidget && widget.id === preference_widget_1.PreferencesWidget.ID) {
            return fn(widget);
        }
        return false;
    };
    __decorate([
        inversify_1.inject(preference_event_service_1.PreferencesEventService),
        __metadata("design:type", preference_event_service_1.PreferencesEventService)
    ], PreferencesContribution.prototype, "preferencesEventService", void 0);
    __decorate([
        inversify_1.inject(file_service_1.FileService),
        __metadata("design:type", file_service_1.FileService)
    ], PreferencesContribution.prototype, "fileService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceProvider),
        inversify_1.named(browser_1.PreferenceScope.Workspace),
        __metadata("design:type", workspace_preference_provider_1.WorkspacePreferenceProvider)
    ], PreferencesContribution.prototype, "workspacePreferenceProvider", void 0);
    __decorate([
        inversify_1.inject(browser_3.EditorManager),
        __metadata("design:type", browser_3.EditorManager)
    ], PreferencesContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], PreferencesContribution.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(clipboard_service_1.ClipboardService),
        __metadata("design:type", Object)
    ], PreferencesContribution.prototype, "clipboardService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferencesContribution.prototype, "init", null);
    PreferencesContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PreferencesContribution);
    return PreferencesContribution;
}(browser_1.AbstractViewContribution));
exports.PreferencesContribution = PreferencesContribution;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/preferences-decorator-service.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/preferences-decorator-service.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferencesDecoratorService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var tree_decorator_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-decorator */ "../node_modules/@theia/core/lib/browser/tree/tree-decorator.js");
var preferences_decorator_1 = __webpack_require__(/*! ./preferences-decorator */ "../node_modules/@theia/preferences/lib/browser/preferences-decorator.js");
var PreferencesDecoratorService = /** @class */ (function (_super) {
    __extends(PreferencesDecoratorService, _super);
    function PreferencesDecoratorService(preferencesTreeDecorator) {
        var _this = _super.call(this, [preferencesTreeDecorator]) || this;
        _this.preferencesTreeDecorator = preferencesTreeDecorator;
        return _this;
    }
    PreferencesDecoratorService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(preferences_decorator_1.PreferencesDecorator)),
        __metadata("design:paramtypes", [preferences_decorator_1.PreferencesDecorator])
    ], PreferencesDecoratorService);
    return PreferencesDecoratorService;
}(tree_decorator_1.AbstractTreeDecoratorService));
exports.PreferencesDecoratorService = PreferencesDecoratorService;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/preferences-decorator.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/preferences-decorator.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
exports.PreferencesDecorator = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var strings_1 = __webpack_require__(/*! @theia/core/lib/common/strings */ "../node_modules/@theia/core/lib/common/strings.js");
var PreferencesDecorator = /** @class */ (function () {
    function PreferencesDecorator() {
        this.id = 'theia-preferences-decorator';
        this.preferencesDecorations = new Map();
        this.emitter = new core_1.Emitter();
    }
    PreferencesDecorator.prototype.init = function () {
        var _this = this;
        this.preferencesService.onPreferenceChanged(function () {
            _this.fireDidChangeDecorations(_this.preferences);
        });
    };
    Object.defineProperty(PreferencesDecorator.prototype, "onDidChangeDecorations", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: false,
        configurable: true
    });
    PreferencesDecorator.prototype.fireDidChangeDecorations = function (preferences) {
        var _this = this;
        if (!this.preferences) {
            this.preferences = preferences;
        }
        if (preferences) {
            this.preferencesDecorations = new Map(preferences.map(function (m) {
                var preferenceName = Object.keys(m)[0];
                var preferenceValue = m[preferenceName];
                var storedValue = _this.preferencesService.get(preferenceName, undefined, _this.activeFolderUri);
                var description = _this.getDescription(preferenceValue);
                return [preferenceName, {
                        tooltip: _this.buildTooltip(preferenceValue),
                        captionSuffixes: [
                            {
                                data: ": " + _this.getPreferenceDisplayValue(storedValue, preferenceValue.defaultValue)
                            },
                            {
                                data: ' ' + description,
                                fontData: { color: 'var(--theia-descriptionForeground)' }
                            }
                        ]
                    }];
            }));
        }
        this.emitter.fire(function () { return _this.preferencesDecorations; });
    };
    PreferencesDecorator.prototype.decorations = function (tree) {
        return this.preferencesDecorations;
    };
    PreferencesDecorator.prototype.setActiveFolder = function (folder) {
        this.activeFolderUri = folder;
        this.fireDidChangeDecorations(this.preferences);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PreferencesDecorator.prototype.getPreferenceDisplayValue = function (storedValue, defaultValue) {
        if (storedValue !== undefined) {
            if (typeof storedValue === 'string') {
                return strings_1.escapeInvisibleChars(storedValue);
            }
            return storedValue;
        }
        return defaultValue;
    };
    PreferencesDecorator.prototype.buildTooltip = function (data) {
        var tooltips = '';
        if (data.description) {
            tooltips = data.description;
        }
        if (data.defaultValue) {
            tooltips += "\nDefault: " + JSON.stringify(data.defaultValue);
        }
        else if (data.default !== undefined) {
            tooltips += "\nDefault: " + JSON.stringify(data.default);
        }
        if (data.minimum) {
            tooltips += "\nMin: " + data.minimum;
        }
        if (data.enum) {
            tooltips += "\nAccepted Values: " + data.enum.join(', ');
        }
        return tooltips;
    };
    /**
     * Get the description for the preference for display purposes.
     * @param value {PreferenceDataProperty} the preference data property.
     * @returns the description if available.
     */
    PreferencesDecorator.prototype.getDescription = function (value) {
        /**
         * Format the string for consistency and display purposes.
         * Formatting includes:
         * - capitalizing the string.
         * - ensuring it ends in punctuation (`.`).
         * @param str {string} the string to format.
         * @returns the formatted string.
         */
        function format(str) {
            if (str.endsWith('.')) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
            return str.charAt(0).toUpperCase() + str.slice(1) + ".";
        }
        if (value.description) {
            return format(value.description);
        }
        else if (value.markdownDescription) {
            return format(value.markdownDescription);
        }
        return '';
    };
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], PreferencesDecorator.prototype, "preferencesService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferencesDecorator.prototype, "init", null);
    PreferencesDecorator = __decorate([
        inversify_1.injectable()
    ], PreferencesDecorator);
    return PreferencesDecorator;
}());
exports.PreferencesDecorator = PreferencesDecorator;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/preferences-json-schema-contribution.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/preferences-json-schema-contribution.js ***!
  \**********************************************************************************************/
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
exports.PreferencesJsonSchemaContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var preference_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-contribution */ "../node_modules/@theia/core/lib/browser/preferences/preference-contribution.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "../node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
var user_storage_uri_1 = __webpack_require__(/*! @theia/userstorage/lib/browser/user-storage-uri */ "../node_modules/@theia/userstorage/lib/browser/user-storage-uri.js");
var PreferencesJsonSchemaContribution = /** @class */ (function () {
    function PreferencesJsonSchemaContribution() {
    }
    PreferencesJsonSchemaContribution.prototype.registerSchemas = function (context) {
        var _this = this;
        var serializeSchema = function () { return JSON.stringify(_this.schemaProvider.getCombinedSchema()); };
        var uri = new uri_1.default('vscode://schemas/settings/user');
        this.inmemoryResources.add(uri, serializeSchema());
        var baseName = this.preferenceConfigurations.getConfigName() + '.json';
        var fileMatch = [baseName, user_storage_uri_1.UserStorageUri.resolve(baseName).toString()];
        context.registerSchema({
            fileMatch: fileMatch,
            url: uri.toString()
        });
        this.schemaProvider.onDidPreferenceSchemaChanged(function () {
            return _this.inmemoryResources.update(uri, serializeSchema());
        });
    };
    __decorate([
        inversify_1.inject(preference_contribution_1.PreferenceSchemaProvider),
        __metadata("design:type", preference_contribution_1.PreferenceSchemaProvider)
    ], PreferencesJsonSchemaContribution.prototype, "schemaProvider", void 0);
    __decorate([
        inversify_1.inject(core_1.InMemoryResources),
        __metadata("design:type", core_1.InMemoryResources)
    ], PreferencesJsonSchemaContribution.prototype, "inmemoryResources", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], PreferencesJsonSchemaContribution.prototype, "preferenceConfigurations", void 0);
    PreferencesJsonSchemaContribution = __decorate([
        inversify_1.injectable()
    ], PreferencesJsonSchemaContribution);
    return PreferencesJsonSchemaContribution;
}());
exports.PreferencesJsonSchemaContribution = PreferencesJsonSchemaContribution;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/preferences-monaco-contribution.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/preferences-monaco-contribution.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
monaco.languages.register({
    id: 'jsonc',
    'aliases': [
        'JSON with Comments'
    ],
    'filenames': [
        'settings.json'
    ],
    'extensions': [
        '.theia-workspace'
    ]
});


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/section-preference-provider.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/section-preference-provider.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionPreferenceProvider = exports.SectionPreferenceProviderSection = exports.SectionPreferenceProviderUri = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var abstract_resource_preference_provider_1 = __webpack_require__(/*! ./abstract-resource-preference-provider */ "../node_modules/@theia/preferences/lib/browser/abstract-resource-preference-provider.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "../node_modules/@theia/workspace/lib/browser/workspace-service.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "../node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
exports.SectionPreferenceProviderUri = Symbol('SectionPreferenceProviderUri');
exports.SectionPreferenceProviderSection = Symbol('SectionPreferenceProviderSection');
/**
 * This class encapsulates the logic of using separate files for some workspace configuration like 'launch.json' or 'tasks.json'.
 * Anything that is not a contributed section will be in the main config file.
 */
var SectionPreferenceProvider = /** @class */ (function (_super) {
    __extends(SectionPreferenceProvider, _super);
    function SectionPreferenceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SectionPreferenceProvider.prototype, "isSection", {
        get: function () {
            if (typeof this._isSection === 'undefined') {
                this._isSection = this.preferenceConfigurations.isSectionName(this.section);
            }
            return this._isSection;
        },
        enumerable: false,
        configurable: true
    });
    SectionPreferenceProvider.prototype.getUri = function () {
        return this.uri;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SectionPreferenceProvider.prototype.parse = function (content) {
        var prefs = _super.prototype.parse.call(this, content);
        if (this.isSection) {
            if (prefs === undefined) {
                return undefined;
            }
            var result = {};
            result[this.section] = __assign({}, prefs);
            return result;
        }
        else {
            return prefs;
        }
    };
    SectionPreferenceProvider.prototype.getPath = function (preferenceName) {
        if (!this.isSection) {
            return _super.prototype.getPath.call(this, preferenceName);
        }
        if (preferenceName === this.section) {
            return [];
        }
        if (preferenceName.startsWith(this.section + '.')) {
            return [preferenceName.substr(this.section.length + 1)];
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], SectionPreferenceProvider.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(exports.SectionPreferenceProviderUri),
        __metadata("design:type", uri_1.default)
    ], SectionPreferenceProvider.prototype, "uri", void 0);
    __decorate([
        inversify_1.inject(exports.SectionPreferenceProviderSection),
        __metadata("design:type", String)
    ], SectionPreferenceProvider.prototype, "section", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], SectionPreferenceProvider.prototype, "preferenceConfigurations", void 0);
    SectionPreferenceProvider = __decorate([
        inversify_1.injectable()
    ], SectionPreferenceProvider);
    return SectionPreferenceProvider;
}(abstract_resource_preference_provider_1.AbstractResourcePreferenceProvider));
exports.SectionPreferenceProvider = SectionPreferenceProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/user-configs-preference-provider.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/user-configs-preference-provider.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserConfigsPreferenceProvider = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var preference_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-provider */ "../node_modules/@theia/core/lib/browser/preferences/preference-provider.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "../node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
var browser_1 = __webpack_require__(/*! @theia/userstorage/lib/browser */ "../node_modules/@theia/userstorage/lib/browser/index.js");
var user_preference_provider_1 = __webpack_require__(/*! ./user-preference-provider */ "../node_modules/@theia/preferences/lib/browser/user-preference-provider.js");
/**
 * Binds together preference section prefs providers for user-level preferences.
 */
var UserConfigsPreferenceProvider = /** @class */ (function (_super) {
    __extends(UserConfigsPreferenceProvider, _super);
    function UserConfigsPreferenceProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.providers = new Map();
        return _this;
    }
    UserConfigsPreferenceProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var readyPromises, _a, _b, provider;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                this.createProviders();
                readyPromises = [];
                try {
                    for (_a = __values(this.providers.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                        provider = _b.value;
                        readyPromises.push(provider.ready.catch(function (e) { return console.error(e); }));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                Promise.all(readyPromises).then(function () { return _this._ready.resolve(); });
                return [2 /*return*/];
            });
        });
    };
    UserConfigsPreferenceProvider.prototype.createProviders = function () {
        var e_2, _a;
        try {
            for (var _b = __values(__spread(this.configurations.getSectionNames(), [this.configurations.getConfigName()])), _c = _b.next(); !_c.done; _c = _b.next()) {
                var configName = _c.value;
                var sectionUri = browser_1.UserStorageUri.resolve(configName + '.json');
                var sectionKey = sectionUri.toString();
                if (!this.providers.has(sectionKey)) {
                    var provider = this.createProvider(sectionUri, configName);
                    this.providers.set(sectionKey, provider);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    UserConfigsPreferenceProvider.prototype.getConfigUri = function (resourceUri) {
        var e_3, _a;
        try {
            for (var _b = __values(this.providers.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                var configUri = provider.getConfigUri(resourceUri);
                if (this.configurations.isConfigUri(configUri)) {
                    return configUri;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return undefined;
    };
    UserConfigsPreferenceProvider.prototype.resolve = function (preferenceName, resourceUri) {
        var e_4, _a;
        var result = {};
        try {
            for (var _b = __values(this.providers.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                var _d = provider.resolve(preferenceName, resourceUri), value = _d.value, configUri = _d.configUri;
                if (configUri && value !== undefined) {
                    result.configUri = configUri;
                    result.value = preference_provider_1.PreferenceProvider.merge(result.value, value);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return result;
    };
    UserConfigsPreferenceProvider.prototype.getPreferences = function (resourceUri) {
        var e_5, _a;
        var result = {};
        try {
            for (var _b = __values(this.providers.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                var preferences = provider.getPreferences();
                result = preference_provider_1.PreferenceProvider.merge(result, preferences);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return result;
    };
    UserConfigsPreferenceProvider.prototype.setPreference = function (preferenceName, value, resourceUri) {
        return __awaiter(this, void 0, void 0, function () {
            var sectionName, configName, providers, providers_1, providers_1_1, provider;
            var e_6, _a;
            return __generator(this, function (_b) {
                sectionName = preferenceName.split('.', 1)[0];
                configName = this.configurations.isSectionName(sectionName) ? sectionName : this.configurations.getConfigName();
                providers = this.providers.values();
                try {
                    for (providers_1 = __values(providers), providers_1_1 = providers_1.next(); !providers_1_1.done; providers_1_1 = providers_1.next()) {
                        provider = providers_1_1.value;
                        if (this.configurations.getName(provider.getConfigUri()) === configName) {
                            return [2 /*return*/, provider.setPreference(preferenceName, value, resourceUri)];
                        }
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (providers_1_1 && !providers_1_1.done && (_a = providers_1.return)) _a.call(providers_1);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                return [2 /*return*/, false];
            });
        });
    };
    UserConfigsPreferenceProvider.prototype.createProvider = function (uri, sectionName) {
        var _this = this;
        var provider = this.providerFactory(uri, sectionName);
        this.toDispose.push(provider);
        this.toDispose.push(provider.onDidPreferencesChanged(function (change) { return _this.onDidPreferencesChangedEmitter.fire(change); }));
        return provider;
    };
    __decorate([
        inversify_1.inject(user_preference_provider_1.UserPreferenceProviderFactory),
        __metadata("design:type", Function)
    ], UserConfigsPreferenceProvider.prototype, "providerFactory", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], UserConfigsPreferenceProvider.prototype, "configurations", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], UserConfigsPreferenceProvider.prototype, "init", null);
    UserConfigsPreferenceProvider = __decorate([
        inversify_1.injectable()
    ], UserConfigsPreferenceProvider);
    return UserConfigsPreferenceProvider;
}(preference_provider_1.PreferenceProvider));
exports.UserConfigsPreferenceProvider = UserConfigsPreferenceProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/user-preference-provider.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/user-preference-provider.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPreferenceProvider = exports.UserPreferenceProviderFactory = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var section_preference_provider_1 = __webpack_require__(/*! ./section-preference-provider */ "../node_modules/@theia/preferences/lib/browser/section-preference-provider.js");
exports.UserPreferenceProviderFactory = Symbol('UserPreferenceProviderFactory');
;
/**
 * A @SectionPreferenceProvider that targets the user-level settings
 */
var UserPreferenceProvider = /** @class */ (function (_super) {
    __extends(UserPreferenceProvider, _super);
    function UserPreferenceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserPreferenceProvider.prototype.getScope = function () {
        return browser_1.PreferenceScope.User;
    };
    UserPreferenceProvider = __decorate([
        inversify_1.injectable()
    ], UserPreferenceProvider);
    return UserPreferenceProvider;
}(section_preference_provider_1.SectionPreferenceProvider));
exports.UserPreferenceProvider = UserPreferenceProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/util/preference-event-service.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/util/preference-event-service.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferencesEventService = void 0;
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var PreferencesEventService = /** @class */ (function () {
    function PreferencesEventService() {
        this.onTabScopeSelected = new event_1.Emitter();
        this.onSearch = new event_1.Emitter();
        this.onEditorScroll = new event_1.Emitter();
        this.onNavTreeSelection = new event_1.Emitter();
        this.onDisplayChanged = new event_1.Emitter();
    }
    PreferencesEventService = __decorate([
        inversify_1.injectable()
    ], PreferencesEventService);
    return PreferencesEventService;
}());
exports.PreferencesEventService = PreferencesEventService;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/util/preference-scope-command-manager.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/util/preference-scope-command-manager.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
exports.PreferenceScopeCommandManager = exports.FOLDER_SCOPE_MENU_PATH = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
exports.FOLDER_SCOPE_MENU_PATH = ['preferences:scope.menu'];
var PreferenceScopeCommandManager = /** @class */ (function () {
    function PreferenceScopeCommandManager() {
        this.foldersAsCommands = [];
    }
    PreferenceScopeCommandManager.prototype.createFolderWorkspacesMenu = function (folderWorkspaces, currentFolderURI) {
        var _this = this;
        this.foldersAsCommands.forEach(function (folderCommand) {
            _this.menuModelRegistry.unregisterMenuAction(folderCommand, exports.FOLDER_SCOPE_MENU_PATH);
            _this.commandRegistry.unregisterCommand(folderCommand);
        });
        this.foldersAsCommands.length = 0;
        folderWorkspaces.forEach(function (folderWorkspace) {
            var folderLabel = _this.labelProvider.getName(folderWorkspace.resource);
            var iconClass = currentFolderURI === folderWorkspace.resource.toString() ? 'fa fa-check' : '';
            var newFolderAsCommand = {
                id: "preferenceScopeCommand:" + folderWorkspace.resource.toString(),
                label: folderLabel,
                iconClass: iconClass
            };
            _this.foldersAsCommands.push(newFolderAsCommand);
            _this.commandRegistry.registerCommand(newFolderAsCommand, {
                isVisible: function (callback, check) { return check === 'from-tabbar'; },
                isEnabled: function (callback, check) { return check === 'from-tabbar'; },
                execute: function (callback) {
                    callback({ scope: browser_1.PreferenceScope.Folder.toString(), uri: folderWorkspace.resource.toString(), activeScopeIsFolder: 'true' });
                }
            });
            _this.menuModelRegistry.registerMenuAction(exports.FOLDER_SCOPE_MENU_PATH, {
                commandId: newFolderAsCommand.id,
                label: newFolderAsCommand.label
            });
        });
    };
    __decorate([
        inversify_1.inject(common_1.CommandRegistry),
        __metadata("design:type", common_1.CommandRegistry)
    ], PreferenceScopeCommandManager.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(common_1.MenuModelRegistry),
        __metadata("design:type", common_1.MenuModelRegistry)
    ], PreferenceScopeCommandManager.prototype, "menuModelRegistry", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], PreferenceScopeCommandManager.prototype, "labelProvider", void 0);
    PreferenceScopeCommandManager = __decorate([
        inversify_1.injectable()
    ], PreferenceScopeCommandManager);
    return PreferenceScopeCommandManager;
}());
exports.PreferenceScopeCommandManager = PreferenceScopeCommandManager;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/util/preference-tree-generator.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/util/preference-tree-generator.js ***!
  \****************************************************************************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
exports.PreferenceTreeGenerator = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "../node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
var PreferenceTreeGenerator = /** @class */ (function () {
    function PreferenceTreeGenerator() {
        var _this = this;
        this.createRootNode = function (preferencesGroups) { return ({
            id: 'root-node-id',
            name: '',
            parent: undefined,
            visible: true,
            children: preferencesGroups
        }); };
        this.createLeafNode = function (property, preferencesGroup) {
            var rawLeaf = property.split('.').pop();
            var name = _this.formatString(rawLeaf);
            return {
                id: property,
                name: name,
                parent: preferencesGroup,
                visible: true,
                selected: false,
            };
        };
        this.createPreferencesGroup = function (group, root) {
            var isSubgroup = 'expanded' in root;
            var _a = __read(group.split('.'), 2), groupname = _a[0], subgroupname = _a[1];
            var label = isSubgroup ? subgroupname : groupname;
            var newNode = {
                id: group + "-id",
                name: _this.toTitleCase(label),
                visible: true,
                parent: root,
                children: [],
                leaves: [],
                expanded: false,
                selected: false,
            };
            return newNode;
        };
    }
    PreferenceTreeGenerator.prototype.generateTree = function () {
        var e_1, _a;
        var preferencesSchema = this.schemaProvider.getCombinedSchema();
        var propertyNames = Object.keys(preferencesSchema.properties).sort(function (a, b) { return a.localeCompare(b); });
        var preferencesGroups = [];
        var groups = new Map();
        var propertyPattern = Object.keys(preferencesSchema.patternProperties)[0]; // TODO: there may be a better way to get this data.
        var overridePropertyIdentifier = new RegExp(propertyPattern, 'i');
        var root = this.createRootNode(preferencesGroups);
        try {
            for (var propertyNames_1 = __values(propertyNames), propertyNames_1_1 = propertyNames_1.next(); !propertyNames_1_1.done; propertyNames_1_1 = propertyNames_1.next()) {
                var propertyName = propertyNames_1_1.value;
                if (!this.preferenceConfigs.isSectionName(propertyName) && !overridePropertyIdentifier.test(propertyName)) {
                    var labels = propertyName.split('.');
                    var group = labels[0];
                    var subgroup = labels.length > 2 && labels.slice(0, 2).join('.');
                    if (!groups.has(group)) {
                        var parentPreferencesGroup = this.createPreferencesGroup(group, root);
                        groups.set(group, parentPreferencesGroup);
                        preferencesGroups.push(parentPreferencesGroup);
                    }
                    if (subgroup && !groups.has(subgroup)) {
                        var remoteParent = groups.get(group);
                        var newBranch = this.createPreferencesGroup(subgroup, remoteParent);
                        groups.set(subgroup, newBranch);
                        browser_1.CompositeTreeNode.addChild(remoteParent, newBranch);
                    }
                    var parent_1 = groups.get(subgroup || group);
                    var leafNode = this.createLeafNode(propertyName, parent_1);
                    parent_1.leaves.push(leafNode);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (propertyNames_1_1 && !propertyNames_1_1.done && (_a = propertyNames_1.return)) _a.call(propertyNames_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return root;
    };
    ;
    PreferenceTreeGenerator.prototype.toTitleCase = function (nonTitle) {
        var _this = this;
        // Any non-word character or the 0-length space between a non-upper-case character and an upper-case character
        return this.split(nonTitle).map(function (word) { return _this.capitalizeFirst(word); }).join(' ').trim();
    };
    PreferenceTreeGenerator.prototype.capitalizeFirst = function (maybeLowerCase) {
        return maybeLowerCase.slice(0, 1).toLocaleUpperCase() + maybeLowerCase.slice(1);
    };
    /**
     * Split based on any non-word character or the 0-length space between a non-upper-case character and an upper-case character
     */
    PreferenceTreeGenerator.prototype.split = function (string) {
        var split = [];
        var regex = /[A-Z]+[a-z0-9]*|[A-Z]*[a-z0-9]+/g;
        // eslint-disable-next-line no-null/no-null
        var match;
        while ((match = regex.exec(string)) !== null) {
            split.push(match[0]);
        }
        return split;
    };
    PreferenceTreeGenerator.prototype.formatString = function (string) {
        var specifier = this.split(string);
        return specifier.map(function (word) { return word.slice(0, 1).toLocaleUpperCase() + word.slice(1); }).join(' ').trim();
    };
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], PreferenceTreeGenerator.prototype, "schemaProvider", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], PreferenceTreeGenerator.prototype, "preferenceConfigs", void 0);
    PreferenceTreeGenerator = __decorate([
        inversify_1.injectable()
    ], PreferenceTreeGenerator);
    return PreferenceTreeGenerator;
}());
exports.PreferenceTreeGenerator = PreferenceTreeGenerator;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/util/preference-types.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/util/preference-types.js ***!
  \*******************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceMenus = exports.PreferencesCommands = exports.Preference = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var Preference;
(function (Preference) {
    var Branch;
    (function (Branch) {
        function is(node) {
            return 'leaves' in node && Array.isArray(node.leaves);
        }
        Branch.is = is;
    })(Branch = Preference.Branch || (Preference.Branch = {}));
    var EditorCommandArgs;
    (function (EditorCommandArgs) {
        function is(prefObject) {
            return !!prefObject && 'id' in prefObject && 'value' in prefObject;
        }
        EditorCommandArgs.is = is;
    })(EditorCommandArgs = Preference.EditorCommandArgs || (Preference.EditorCommandArgs = {}));
    var LookupKeys;
    (function (LookupKeys) {
        LookupKeys[LookupKeys["defaultValue"] = 0] = "defaultValue";
        LookupKeys[LookupKeys["globalValue"] = 1] = "globalValue";
        LookupKeys[LookupKeys["workspaceValue"] = 2] = "workspaceValue";
        LookupKeys[LookupKeys["workspaceFolderValue"] = 3] = "workspaceFolderValue";
    })(LookupKeys = Preference.LookupKeys || (Preference.LookupKeys = {}));
    ;
    Preference.DEFAULT_SCOPE = {
        scope: browser_1.PreferenceScope.User.toString(),
        uri: '',
        activeScopeIsFolder: 'false'
    };
    ;
    ;
})(Preference = exports.Preference || (exports.Preference = {}));
var PreferencesCommands;
(function (PreferencesCommands) {
    PreferencesCommands.OPEN_PREFERENCES_JSON_TOOLBAR = {
        id: 'preferences:openJson.toolbar',
        iconClass: 'codicon codicon-json'
    };
    PreferencesCommands.COPY_JSON_NAME = {
        id: 'preferences:copyJson.name',
        label: 'Copy Setting ID'
    };
    PreferencesCommands.RESET_PREFERENCE = {
        id: 'preferences:reset',
        label: 'Reset Setting'
    };
    PreferencesCommands.COPY_JSON_VALUE = {
        id: 'preferences:copyJson.value',
        label: 'Copy Setting as JSON',
    };
})(PreferencesCommands = exports.PreferencesCommands || (exports.PreferencesCommands = {}));
var PreferenceMenus;
(function (PreferenceMenus) {
    PreferenceMenus.PREFERENCE_EDITOR_CONTEXT_MENU = ['preferences:editor.contextMenu'];
    PreferenceMenus.PREFERENCE_EDITOR_COPY_ACTIONS = __spread(PreferenceMenus.PREFERENCE_EDITOR_CONTEXT_MENU, ['preferences:editor.contextMenu.copy']);
})(PreferenceMenus = exports.PreferenceMenus || (exports.PreferenceMenus = {}));


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/components/index.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/components/index.js ***!
  \********************************************************************************/
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
var preference_array_input_1 = __webpack_require__(/*! ./preference-array-input */ "../node_modules/@theia/preferences/lib/browser/views/components/preference-array-input.js");
Object.defineProperty(exports, "PreferenceArrayInput", { enumerable: true, get: function () { return preference_array_input_1.PreferenceArrayInput; } });
var preference_boolean_input_1 = __webpack_require__(/*! ./preference-boolean-input */ "../node_modules/@theia/preferences/lib/browser/views/components/preference-boolean-input.js");
Object.defineProperty(exports, "PreferenceBooleanInput", { enumerable: true, get: function () { return preference_boolean_input_1.PreferenceBooleanInput; } });
var preference_json_input_1 = __webpack_require__(/*! ./preference-json-input */ "../node_modules/@theia/preferences/lib/browser/views/components/preference-json-input.js");
Object.defineProperty(exports, "PreferenceJSONInput", { enumerable: true, get: function () { return preference_json_input_1.PreferenceJSONInput; } });
var preference_number_input_1 = __webpack_require__(/*! ./preference-number-input */ "../node_modules/@theia/preferences/lib/browser/views/components/preference-number-input.js");
Object.defineProperty(exports, "PreferenceNumberInput", { enumerable: true, get: function () { return preference_number_input_1.PreferenceNumberInput; } });
var preference_select_input_1 = __webpack_require__(/*! ./preference-select-input */ "../node_modules/@theia/preferences/lib/browser/views/components/preference-select-input.js");
Object.defineProperty(exports, "PreferenceSelectInput", { enumerable: true, get: function () { return preference_select_input_1.PreferenceSelectInput; } });
var preference_string_input_1 = __webpack_require__(/*! ./preference-string-input */ "../node_modules/@theia/preferences/lib/browser/views/components/preference-string-input.js");
Object.defineProperty(exports, "PreferenceStringInput", { enumerable: true, get: function () { return preference_string_input_1.PreferenceStringInput; } });


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/components/preference-array-input.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/components/preference-array-input.js ***!
  \*************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceArrayInput = void 0;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
exports.PreferenceArrayInput = function (_a) {
    var e_1, _b;
    var preferenceDisplayNode = _a.preferenceDisplayNode, setPreference = _a.setPreference;
    var values = [];
    if (Array.isArray(preferenceDisplayNode.preference.value)) {
        try {
            for (var _c = __values(preferenceDisplayNode.preference.value), _d = _c.next(); !_d.done; _d = _c.next()) {
                var preferenceValue = _d.value;
                if (typeof preferenceValue === 'string') {
                    values.push(preferenceValue);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    var preferenceID = preferenceDisplayNode.id;
    var _e = __read(React.useState(''), 2), value = _e[0], setValue = _e[1];
    var doSubmit = React.useCallback(function () {
        if (value) {
            setPreference(preferenceID, __spread(values, [value]));
            setValue('');
        }
    }, [values, value]);
    var handleEnter = React.useCallback(function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            doSubmit();
        }
    }, []);
    var handleChange = React.useCallback(function (e) {
        setValue(e.target.value);
    }, []);
    var handleRemove = React.useCallback(function (e) {
        var target = e.currentTarget;
        var key = e.key;
        if (key && key !== 'Enter') {
            return;
        }
        var indexAttribute = target.getAttribute('data-index');
        var removalIndex = Number(indexAttribute);
        if (indexAttribute) {
            var newValues = __spread(values.slice(0, removalIndex), values.slice(removalIndex + 1));
            setPreference(preferenceID, newValues);
        }
    }, []);
    return (React.createElement("ul", { className: "preference-array" },
        values.map(function (val, i) { return (React.createElement("li", { className: "preference-array-element", key: preferenceID + "-li-" + i },
            React.createElement("span", { className: "preference-array-element-val" }, val),
            React.createElement("span", { className: "preference-array-element-btn remove-btn", onClick: handleRemove, onKeyDown: handleRemove, role: "button", tabIndex: 0, "data-index": i },
                React.createElement("i", { className: "preference-array-clear-item" })))); }),
        React.createElement("li", null,
            React.createElement("input", { className: "preference-array-input theia-input", type: "text", placeholder: "Add Value...", onKeyPress: handleEnter, onChange: handleChange, value: value, "aria-label": "Preference String Input" }),
            React.createElement("span", { className: "preference-array-element-btn add-btn", onClick: doSubmit, onKeyDown: doSubmit, role: "button", tabIndex: 0, "aria-label": "Submit Preference Input" },
                React.createElement("i", { className: "fa fa-plus" })))));
};


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/components/preference-boolean-input.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/components/preference-boolean-input.js ***!
  \***************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceBooleanInput = void 0;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
exports.PreferenceBooleanInput = function (_a) {
    var preferenceDisplayNode = _a.preferenceDisplayNode, setPreference = _a.setPreference;
    var id = preferenceDisplayNode.id;
    var value = typeof preferenceDisplayNode.preference.value === 'boolean' ? preferenceDisplayNode.preference.value : undefined;
    // Tracks local state for quicker refreshes on user click.
    var _b = __read(React.useState(!!value), 2), checked = _b[0], setChecked = _b[1];
    // Allows user to reset value using cogwheel.
    React.useEffect(function () {
        setChecked(!!value);
    }, [value]);
    var setValue = React.useCallback(function (e) {
        setChecked(!checked);
        setPreference(id, e.target.checked);
    }, [checked]);
    return (React.createElement("label", { htmlFor: "preference-checkbox-" + id },
        React.createElement("input", { type: "checkbox", className: "theia-input", checked: checked, readOnly: false, onChange: setValue, id: "preference-checkbox-" + id, "data-preference-id": id })));
};


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/components/preference-json-input.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/components/preference-json-input.js ***!
  \************************************************************************************************/
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
exports.PreferenceJSONInput = void 0;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
exports.PreferenceJSONInput = function (_a) {
    var preferenceDisplayNode = _a.preferenceDisplayNode, onClick = _a.onClick;
    return (React.createElement("a", { role: 'button', title: preferenceDisplayNode.name, onClick: onClick, className: 'theia-json-input' }, "Edit in settings.json"));
};


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/components/preference-number-input.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/components/preference-number-input.js ***!
  \**************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceNumberInput = void 0;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
exports.PreferenceNumberInput = function (_a) {
    var preferenceDisplayNode = _a.preferenceDisplayNode, setPreference = _a.setPreference;
    var id = preferenceDisplayNode.id;
    var _b = preferenceDisplayNode.preference, data = _b.data, value = _b.value;
    var externalValue = (value !== undefined ? value : data.defaultValue) || '';
    var _c = __read(React.useState(0), 2), currentTimeout = _c[0], setCurrentTimetout = _c[1];
    var _d = __read(React.useState(externalValue), 2), currentValue = _d[0], setCurrentValue = _d[1];
    var _e = __read(React.useState(''), 2), validationMessage = _e[0], setValidationMessage = _e[1];
    React.useEffect(function () {
        setCurrentValue(externalValue);
    }, [externalValue]);
    var onBlur = React.useCallback(function () {
        setCurrentValue(externalValue);
        setValidationMessage('');
    }, [externalValue]);
    var onChange = React.useCallback(function (e) {
        clearTimeout(currentTimeout);
        var newValue = e.target.value;
        setCurrentValue(newValue);
        var preferenceValue = Number(newValue);
        var _a = getInputValidation(preferenceValue), isValid = _a.isValid, message = _a.message;
        setValidationMessage(message);
        if (isValid) {
            var newTimeout = setTimeout(function () { return setPreference(id, preferenceValue); }, 750);
            setCurrentTimetout(Number(newTimeout));
        }
    }, [currentTimeout]);
    /**
     * Validates the input.
     * @param input the input value.
     */
    var getInputValidation = function (input) {
        var errorMessages = [];
        if (!input) {
            return { isValid: false, message: 'Value must be a number.' };
        }
        ;
        if (data.minimum && input < data.minimum) {
            errorMessages.push("Value must be greater than or equal to " + data.minimum + ".");
        }
        ;
        if (data.maximum && input > data.maximum) {
            errorMessages.push("Value must be less than or equal to " + data.maximum + ".");
        }
        ;
        if (data.type === 'integer' && input % 1 !== 0) {
            errorMessages.push('Value must be an integer.');
        }
        return { isValid: !errorMessages.length, message: errorMessages.join(' ') };
    };
    return (React.createElement("div", { className: 'pref-input-container' },
        React.createElement("input", { type: "number", className: "theia-input", pattern: "[0-9]*", value: currentValue, onChange: onChange, onBlur: onBlur, "data-preference-id": id }),
        !!validationMessage.length ? React.createElement("div", { className: 'pref-error-notification' }, validationMessage) : undefined));
};


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/components/preference-select-input.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/components/preference-select-input.js ***!
  \**************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceSelectInput = void 0;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
exports.PreferenceSelectInput = function (_a) {
    var preferenceDisplayNode = _a.preferenceDisplayNode, setPreference = _a.setPreference;
    var id = preferenceDisplayNode.id;
    var _b = preferenceDisplayNode.preference, value = _b.value, data = _b.data;
    var externalValue = (value !== undefined ? value : data.defaultValue) || '';
    var _c = __read(React.useState(0), 2), currentTimeout = _c[0], setCurrentTimetout = _c[1];
    var _d = __read(React.useState(externalValue), 2), currentValue = _d[0], setCurrentValue = _d[1];
    React.useEffect(function () {
        setCurrentValue(externalValue);
    }, [externalValue]);
    var onChange = React.useCallback(function (e) {
        var newValue = e.target.value;
        clearTimeout(currentTimeout);
        var newTimeout = setTimeout(function () { return setPreference(id, newValue); }, 250);
        setCurrentTimetout(Number(newTimeout));
        setCurrentValue(newValue);
    }, [currentTimeout]);
    return (React.createElement("select", { value: currentValue, className: "theia-select", onChange: onChange, "data-preference-id": id }, preferenceDisplayNode.preference.data.enum.map(function (option) { return React.createElement("option", { value: option, key: option }, option); })));
};


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/components/preference-string-input.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/components/preference-string-input.js ***!
  \**************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceStringInput = void 0;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
exports.PreferenceStringInput = function (_a) {
    var preferenceDisplayNode = _a.preferenceDisplayNode, setPreference = _a.setPreference;
    var id = preferenceDisplayNode.id;
    var _b = preferenceDisplayNode.preference, data = _b.data, value = _b.value;
    var externalValue = (value !== undefined ? value : data.defaultValue) || '';
    var _c = __read(React.useState(0), 2), currentTimeout = _c[0], setCurrentTimetout = _c[1];
    var _d = __read(React.useState(externalValue), 2), currentValue = _d[0], setCurrentValue = _d[1];
    React.useEffect(function () {
        setCurrentValue(externalValue);
    }, [externalValue]);
    var onChange = React.useCallback(function (e) {
        var newValue = e.target.value;
        clearTimeout(currentTimeout);
        var newTimeout = setTimeout(function () { return setPreference(id, newValue); }, 750);
        setCurrentTimetout(Number(newTimeout));
        setCurrentValue(newValue);
    }, [currentTimeout]);
    return (React.createElement("input", { type: "text", className: "theia-input", value: currentValue, onChange: onChange, "data-preference-id": id }));
};


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/components/single-preference-display-factory.js":
/*!************************************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/components/single-preference-display-factory.js ***!
  \************************************************************************************************************/
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
exports.SinglePreferenceDisplayFactory = void 0;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var preference_types_1 = __webpack_require__(/*! ../../util/preference-types */ "../node_modules/@theia/preferences/lib/browser/util/preference-types.js");
var preference_event_service_1 = __webpack_require__(/*! ../../util/preference-event-service */ "../node_modules/@theia/preferences/lib/browser/util/preference-event-service.js");
var preference_scope_command_manager_1 = __webpack_require__(/*! ../../util/preference-scope-command-manager */ "../node_modules/@theia/preferences/lib/browser/util/preference-scope-command-manager.js");
var single_preference_wrapper_1 = __webpack_require__(/*! ./single-preference-wrapper */ "../node_modules/@theia/preferences/lib/browser/views/components/single-preference-wrapper.js");
var SinglePreferenceDisplayFactory = /** @class */ (function () {
    function SinglePreferenceDisplayFactory() {
        var _this = this;
        this.currentScope = preference_types_1.Preference.DEFAULT_SCOPE;
        this.openJSON = function (preferenceNode) {
            _this.commandService.executeCommand(preference_types_1.PreferencesCommands.OPEN_PREFERENCES_JSON_TOOLBAR.id, preferenceNode);
        };
    }
    SinglePreferenceDisplayFactory.prototype.init = function () {
        var _this = this;
        this.preferencesEventService.onTabScopeSelected.event(function (e) { return _this.currentScope = e; });
    };
    SinglePreferenceDisplayFactory.prototype.render = function (preferenceNode) {
        return React.createElement(single_preference_wrapper_1.SinglePreferenceWrapper, { contextMenuRenderer: this.contextMenuRenderer, preferenceDisplayNode: preferenceNode, currentScope: Number(this.currentScope.scope), currentScopeURI: this.currentScope.uri, key: preferenceNode.id + "-editor", preferencesService: this.preferenceValueRetrievalService, openJSON: this.openJSON });
    };
    __decorate([
        inversify_1.inject(preference_event_service_1.PreferencesEventService),
        __metadata("design:type", preference_event_service_1.PreferencesEventService)
    ], SinglePreferenceDisplayFactory.prototype, "preferencesEventService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], SinglePreferenceDisplayFactory.prototype, "preferenceValueRetrievalService", void 0);
    __decorate([
        inversify_1.inject(preference_scope_command_manager_1.PreferenceScopeCommandManager),
        __metadata("design:type", preference_scope_command_manager_1.PreferenceScopeCommandManager)
    ], SinglePreferenceDisplayFactory.prototype, "preferencesMenuFactory", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandService),
        __metadata("design:type", Object)
    ], SinglePreferenceDisplayFactory.prototype, "commandService", void 0);
    __decorate([
        inversify_1.inject(browser_1.ContextMenuRenderer),
        __metadata("design:type", browser_1.ContextMenuRenderer)
    ], SinglePreferenceDisplayFactory.prototype, "contextMenuRenderer", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SinglePreferenceDisplayFactory.prototype, "init", null);
    SinglePreferenceDisplayFactory = __decorate([
        inversify_1.injectable()
    ], SinglePreferenceDisplayFactory);
    return SinglePreferenceDisplayFactory;
}());
exports.SinglePreferenceDisplayFactory = SinglePreferenceDisplayFactory;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/components/single-preference-wrapper.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/components/single-preference-wrapper.js ***!
  \****************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglePreferenceWrapper = void 0;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var _1 = __webpack_require__(/*! . */ "../node_modules/@theia/preferences/lib/browser/views/components/index.js");
var preference_types_1 = __webpack_require__(/*! ../../util/preference-types */ "../node_modules/@theia/preferences/lib/browser/util/preference-types.js");
var SinglePreferenceWrapper = /** @class */ (function (_super) {
    __extends(SinglePreferenceWrapper, _super);
    function SinglePreferenceWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showCog: false,
            menuOpen: false
        };
        _this.handleOnCogClick = function (e) {
            if (_this.value !== undefined) {
                var target = e.target;
                var domRect = target.getBoundingClientRect();
                _this.props.contextMenuRenderer.render({
                    menuPath: preference_types_1.PreferenceMenus.PREFERENCE_EDITOR_CONTEXT_MENU,
                    anchor: { x: domRect.left, y: domRect.bottom },
                    args: [{ id: _this.props.preferenceDisplayNode.id, value: _this.value }],
                    onHide: _this.setMenuHidden
                });
                _this.setMenuShown();
            }
        };
        _this.setMenuShown = function () {
            _this.setState({ menuOpen: true });
        };
        _this.setMenuHidden = function () {
            _this.setState({ menuOpen: false });
        };
        _this.showCog = function () {
            _this.setState({ showCog: true });
        };
        _this.hideCog = function () {
            _this.setState({ showCog: false });
        };
        _this.openJSONForCurrentPreference = function () {
            _this.props.openJSON(_this.props.preferenceDisplayNode);
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _this.setPreference = function (preferenceName, preferenceValue) {
            _this.props.preferencesService.set(preferenceName, preferenceValue, _this.props.currentScope, _this.props.currentScopeURI);
        };
        _this.getInputType = function (preferenceDisplayNode) {
            var _a = preferenceDisplayNode.preference.data, type = _a.type, items = _a.items;
            if (preferenceDisplayNode.preference.data.enum) {
                return React.createElement(_1.PreferenceSelectInput, { preferenceDisplayNode: preferenceDisplayNode, setPreference: _this.setPreference });
            }
            if (type === 'boolean') {
                return React.createElement(_1.PreferenceBooleanInput, { preferenceDisplayNode: preferenceDisplayNode, setPreference: _this.setPreference });
            }
            if (type === 'string') {
                return React.createElement(_1.PreferenceStringInput, { preferenceDisplayNode: preferenceDisplayNode, setPreference: _this.setPreference });
            }
            if (type === 'number' || type === 'integer') {
                return React.createElement(_1.PreferenceNumberInput, { preferenceDisplayNode: preferenceDisplayNode, setPreference: _this.setPreference });
            }
            if (type === 'array') {
                if (items && items.type === 'string') {
                    return React.createElement(_1.PreferenceArrayInput, { preferenceDisplayNode: preferenceDisplayNode, setPreference: _this.setPreference });
                }
                return React.createElement(_1.PreferenceJSONInput, { preferenceDisplayNode: preferenceDisplayNode, onClick: _this.openJSONForCurrentPreference });
            }
            if (type === 'object') {
                return React.createElement(_1.PreferenceJSONInput, { preferenceDisplayNode: preferenceDisplayNode, onClick: _this.openJSONForCurrentPreference });
            }
            return React.createElement(_1.PreferenceJSONInput, { preferenceDisplayNode: preferenceDisplayNode, onClick: _this.openJSONForCurrentPreference });
        };
        return _this;
    }
    SinglePreferenceWrapper.prototype.render = function () {
        var preferenceDisplayNode = this.props.preferenceDisplayNode;
        var _a = preferenceDisplayNode.preference, data = _a.data, values = _a.values;
        this.value = this.getValueInCurrentScope(values, this.props.currentScope);
        var currentValueIsDefaultValue = this.value === data.defaultValue;
        var singlePreferenceValueDisplayNode = __assign(__assign({}, preferenceDisplayNode), { preference: { data: data, value: this.value } });
        var description = data.markdownDescription || data.description;
        if (preferenceDisplayNode.visible) {
            return (React.createElement("li", { className: 'single-pref', id: preferenceDisplayNode.id + "-editor", key: preferenceDisplayNode.id, "data-id": preferenceDisplayNode.id },
                React.createElement("div", { className: "pref-name" },
                    preferenceDisplayNode.name,
                    this.renderOtherModifiedScopes(singlePreferenceValueDisplayNode.id, values, this.props.currentScope, this.props.preferencesService)),
                React.createElement("div", { className: "pref-context-gutter " + (!currentValueIsDefaultValue ? 'theia-mod-item-modified' : ''), onMouseOver: this.showCog, onMouseOut: this.hideCog },
                    React.createElement("i", { className: "codicon codicon-settings-gear settings-context-menu-btn " + ((this.state.showCog || this.state.menuOpen) ? 'show-cog' : ''), "aria-label": "Open Context Menu", role: "button", onClick: this.handleOnCogClick, onKeyDown: this.handleOnCogClick, title: "More actions..." })),
                React.createElement("div", { className: "pref-content-container " + (data.type || 'open-json'), onFocus: this.showCog, onBlur: this.hideCog },
                    description && React.createElement("div", { className: 'pref-description' }, description),
                    React.createElement("div", { className: 'pref-input' }, this.getInputType(singlePreferenceValueDisplayNode)))));
        }
        else {
            return React.createElement(React.Fragment, null);
        }
    };
    SinglePreferenceWrapper.prototype.getValueInCurrentScope = function (preferenceValuesInAllScopes, currentScope) {
        if (preferenceValuesInAllScopes) {
            var key = preference_types_1.Preference.LookupKeys[currentScope];
            return preferenceValuesInAllScopes[key] === undefined ? preferenceValuesInAllScopes.defaultValue : preferenceValuesInAllScopes[key];
        }
        return undefined;
    };
    SinglePreferenceWrapper.prototype.renderOtherModifiedScopes = function (id, preferenceValuesInAllScopes, currentScope, service) {
        var _this = this;
        if (preferenceValuesInAllScopes) {
            return ['User', 'Workspace'].map(function (scope) {
                var matchingScope = browser_1.PreferenceScope[scope];
                if (currentScope !== matchingScope) {
                    var info = service.inspect(id);
                    if (!info) {
                        return;
                    }
                    var defaultValue = info.defaultValue;
                    var currentValue = _this.getValueByScope(info, currentScope);
                    var matchingValue = _this.getValueByScope(info, matchingScope);
                    if (matchingValue !== undefined) {
                        var bothOverridden = ((currentValue !== defaultValue && currentValue !== undefined) &&
                            (matchingValue !== defaultValue && matchingValue !== undefined));
                        var message = bothOverridden ? 'Also modified in:' : 'Modified in:';
                        return React.createElement("i", { key: "modified-in-" + scope + "-alert" },
                            React.createElement("span", null,
                                " (",
                                message,
                                " ",
                                React.createElement("span", { className: 'settings-scope-underlined' }, scope),
                                ")"));
                    }
                }
            });
        }
    };
    SinglePreferenceWrapper.prototype.getValueByScope = function (info, scope) {
        if (scope === browser_1.PreferenceScope.User) {
            return info.globalValue;
        }
        else if (scope === browser_1.PreferenceScope.Workspace) {
            return info.workspaceValue;
        }
        return undefined;
    };
    return SinglePreferenceWrapper;
}(React.Component));
exports.SinglePreferenceWrapper = SinglePreferenceWrapper;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/preference-editor-widget.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/preference-editor-widget.js ***!
  \****************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferencesEditorWidget = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-jsonrpc/lib/main.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var single_preference_display_factory_1 = __webpack_require__(/*! ./components/single-preference-display-factory */ "../node_modules/@theia/preferences/lib/browser/views/components/single-preference-display-factory.js");
var preference_types_1 = __webpack_require__(/*! ../util/preference-types */ "../node_modules/@theia/preferences/lib/browser/util/preference-types.js");
var preference_event_service_1 = __webpack_require__(/*! ../util/preference-event-service */ "../node_modules/@theia/preferences/lib/browser/util/preference-event-service.js");
var preference_tree_provider_1 = __webpack_require__(/*! ../preference-tree-provider */ "../node_modules/@theia/preferences/lib/browser/preference-tree-provider.js");
var PreferencesEditorWidget = /** @class */ (function (_super) {
    __extends(PreferencesEditorWidget, _super);
    function PreferencesEditorWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeScope = browser_1.PreferenceScope.User;
        _this.activeURI = '';
        _this.activeScopeIsFolder = false;
        _this.scrollContainerRef = React.createRef();
        _this.hasRendered = false;
        _this._preferenceScope = preference_types_1.Preference.DEFAULT_SCOPE;
        _this.handleChangeDisplay = function (didGenerateNewTree) {
            if (didGenerateNewTree) {
                _this.currentDisplay = _this.preferenceTreeProvider.currentTree;
                _this.properties = _this.preferenceTreeProvider.propertyList;
                _this.node.scrollTop = 0;
            }
            _this.update();
        };
        _this.onScroll = function () {
            var scrollContainer = _this.node;
            var scrollIsTop = scrollContainer.scrollTop === 0;
            var visibleChildren = [];
            _this.addFirstVisibleChildId(scrollContainer, visibleChildren);
            if (visibleChildren.length) {
                _this.preferencesEventService.onEditorScroll.fire({
                    firstVisibleChildId: visibleChildren[0],
                    isTop: scrollIsTop
                });
            }
        };
        _this.compare = function (value) { return ({
            isBetween: function (a, b) { return ((value >= a && value <= b) || (value >= b && value <= a)); }
        }); };
        _this.handleChangeScope = function (_a) {
            var scope = _a.scope, uri = _a.uri, activeScopeIsFolder = _a.activeScopeIsFolder;
            _this.activeScope = Number(scope);
            _this.activeURI = uri;
            _this.activeScopeIsFolder = activeScopeIsFolder === 'true';
            _this.update();
        };
        return _this;
    }
    PreferencesEditorWidget_1 = PreferencesEditorWidget;
    PreferencesEditorWidget.prototype.init = function () {
        var _this = this;
        this.onRender.push(vscode_jsonrpc_1.Disposable.create(function () { return _this.hasRendered = true; }));
        this.id = PreferencesEditorWidget_1.ID;
        this.title.label = PreferencesEditorWidget_1.LABEL;
        this.preferenceValueRetrievalService.onPreferenceChanged(function (preferenceChange) {
            _this.update();
        });
        this.preferencesEventService.onDisplayChanged.event(function (didChangeTree) { return _this.handleChangeDisplay(didChangeTree); });
        this.preferencesEventService.onNavTreeSelection.event(function (e) { return _this.scrollToEditorElement(e.nodeID); });
        this.currentDisplay = this.preferenceTreeProvider.currentTree;
        this.properties = this.preferenceTreeProvider.propertyList;
        this.update();
    };
    Object.defineProperty(PreferencesEditorWidget.prototype, "preferenceScope", {
        set: function (preferenceScopeDetails) {
            this._preferenceScope = preferenceScopeDetails;
            this.handleChangeScope(this._preferenceScope);
        },
        enumerable: false,
        configurable: true
    });
    PreferencesEditorWidget.prototype.callAfterFirstRender = function (callback) {
        if (this.hasRendered) {
            callback();
        }
        else {
            this.onRender.push(vscode_jsonrpc_1.Disposable.create(function () { return callback(); }));
        }
    };
    PreferencesEditorWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        this.callAfterFirstRender(function () {
            _super.prototype.onAfterAttach.call(_this, msg);
            _this.node.addEventListener('scroll', _this.onScroll);
        });
    };
    PreferencesEditorWidget.prototype.render = function () {
        var _this = this;
        var visibleCategories = this.currentDisplay.children.filter(function (category) { return category.visible; });
        return (React.createElement("div", { className: "settings-main" },
            React.createElement("div", { ref: this.scrollContainerRef, className: "settings-main-scroll-container", id: "settings-main-scroll-container" }, !!visibleCategories.length ? visibleCategories.map(function (category) { return _this.renderCategory(category); }) : this.renderNoResultMessage())));
    };
    PreferencesEditorWidget.prototype.addFirstVisibleChildId = function (container, array) {
        var children = container.children;
        for (var i = 0; i < children.length && !array.length; i++) {
            var id = children[i].getAttribute('data-id');
            if (id && this.isInView(children[i], container)) {
                array.push(id);
            }
            else if (!array.length) {
                this.addFirstVisibleChildId(children[i], array);
            }
        }
    };
    PreferencesEditorWidget.prototype.isInView = function (e, parent) {
        var scrollTop = this.node.scrollTop;
        var scrollCheckHeight = 0.7;
        return this.compare(e.offsetTop).isBetween(scrollTop, scrollTop + parent.offsetHeight) ||
            this.compare(scrollTop).isBetween(e.offsetTop, e.offsetTop + (e.offsetHeight * scrollCheckHeight));
    };
    PreferencesEditorWidget.prototype.renderCategory = function (category) {
        var _this = this;
        var _a;
        var children = category.children.concat(category.leaves).sort(function (a, b) { return _this.sort(a.id, b.id); });
        var isCategory = ((_a = category.parent) === null || _a === void 0 ? void 0 : _a.parent) === undefined;
        var categoryLevelClass = isCategory ? 'settings-section-category-title' : 'settings-section-subcategory-title';
        return category.visible && (React.createElement("ul", { className: "settings-section", key: category.id + "-editor", id: category.id + "-editor" },
            React.createElement("li", { className: categoryLevelClass, "data-id": category.id }, category.name),
            children.map(function (preferenceNode) {
                if (preference_types_1.Preference.Branch.is(preferenceNode)) {
                    return _this.renderCategory(preferenceNode);
                }
                var values = _this.preferenceValueRetrievalService.inspect(preferenceNode.id, _this.activeURI);
                var preferenceNodeWithValueInAllScopes = __assign(__assign({}, preferenceNode), { preference: { data: _this.properties[preferenceNode.id], values: values } });
                return _this.singlePreferenceFactory.render(preferenceNodeWithValueInAllScopes);
            })));
    };
    PreferencesEditorWidget.prototype.renderNoResultMessage = function () {
        return React.createElement("div", { className: "settings-no-results-announcement" }, "That search query has returned no results.");
    };
    PreferencesEditorWidget.prototype.scrollToEditorElement = function (nodeID) {
        if (nodeID) {
            var el_1 = document.getElementById(nodeID + "-editor");
            if (el_1) {
                // Timeout to allow render cycle to finish.
                setTimeout(function () { return el_1.scrollIntoView(); });
            }
        }
    };
    /**
     * Sort two strings.
     *
     * @param a the first string.
     * @param b the second string.
     */
    PreferencesEditorWidget.prototype.sort = function (a, b) {
        return a.localeCompare(b, undefined, { ignorePunctuation: true });
    };
    var PreferencesEditorWidget_1;
    PreferencesEditorWidget.ID = 'settings.editor';
    PreferencesEditorWidget.LABEL = 'Settings Editor';
    __decorate([
        inversify_1.inject(preference_event_service_1.PreferencesEventService),
        __metadata("design:type", preference_event_service_1.PreferencesEventService)
    ], PreferencesEditorWidget.prototype, "preferencesEventService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], PreferencesEditorWidget.prototype, "preferenceValueRetrievalService", void 0);
    __decorate([
        inversify_1.inject(preference_tree_provider_1.PreferencesTreeProvider),
        __metadata("design:type", preference_tree_provider_1.PreferencesTreeProvider)
    ], PreferencesEditorWidget.prototype, "preferenceTreeProvider", void 0);
    __decorate([
        inversify_1.inject(single_preference_display_factory_1.SinglePreferenceDisplayFactory),
        __metadata("design:type", single_preference_display_factory_1.SinglePreferenceDisplayFactory)
    ], PreferencesEditorWidget.prototype, "singlePreferenceFactory", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferencesEditorWidget.prototype, "init", null);
    PreferencesEditorWidget = PreferencesEditorWidget_1 = __decorate([
        inversify_1.injectable()
    ], PreferencesEditorWidget);
    return PreferencesEditorWidget;
}(browser_1.ReactWidget));
exports.PreferencesEditorWidget = PreferencesEditorWidget;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/preference-scope-tabbar-widget.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/preference-scope-tabbar-widget.js ***!
  \**********************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferencesScopeTabBar = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var widgets_1 = __webpack_require__(/*! @phosphor/widgets */ "../node_modules/@phosphor/widgets/lib/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "../node_modules/@theia/workspace/lib/browser/workspace-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var preference_event_service_1 = __webpack_require__(/*! ../util/preference-event-service */ "../node_modules/@theia/preferences/lib/browser/util/preference-event-service.js");
var preference_scope_command_manager_1 = __webpack_require__(/*! ../util/preference-scope-command-manager */ "../node_modules/@theia/preferences/lib/browser/util/preference-scope-command-manager.js");
var preference_types_1 = __webpack_require__(/*! ../util/preference-types */ "../node_modules/@theia/preferences/lib/browser/util/preference-types.js");
var USER_TAB_LABEL = 'User';
var USER_TAB_INDEX = browser_1.PreferenceScope[USER_TAB_LABEL].toString();
var WORKSPACE_TAB_LABEL = 'Workspace';
var WORKSPACE_TAB_INDEX = browser_1.PreferenceScope[WORKSPACE_TAB_LABEL].toString();
var FOLDER_TAB_LABEL = 'Folder';
var FOLDER_TAB_INDEX = browser_1.PreferenceScope[FOLDER_TAB_LABEL].toString();
var PREFERENCE_TAB_CLASSNAME = 'preferences-scope-tab';
var GENERAL_FOLDER_TAB_CLASSNAME = 'preference-folder';
var LABELED_FOLDER_TAB_CLASSNAME = 'preferences-folder-tab';
var FOLDER_DROPDOWN_CLASSNAME = 'preferences-folder-dropdown';
var FOLDER_DROPDOWN_ICON_CLASSNAME = 'preferences-folder-dropdown-icon';
var TABBAR_UNDERLINE_CLASSNAME = 'tabbar-underline';
var SHADOW_CLASSNAME = 'with-shadow';
var SINGLE_FOLDER_TAB_CLASSNAME = PREFERENCE_TAB_CLASSNAME + " " + GENERAL_FOLDER_TAB_CLASSNAME + " " + LABELED_FOLDER_TAB_CLASSNAME;
var UNSELECTED_FOLDER_DROPDOWN_CLASSNAME = PREFERENCE_TAB_CLASSNAME + " " + GENERAL_FOLDER_TAB_CLASSNAME + " " + FOLDER_DROPDOWN_CLASSNAME;
var SELECTED_FOLDER_DROPDOWN_CLASSNAME = PREFERENCE_TAB_CLASSNAME + " " + GENERAL_FOLDER_TAB_CLASSNAME + " " + LABELED_FOLDER_TAB_CLASSNAME + " " + FOLDER_DROPDOWN_CLASSNAME;
var PreferencesScopeTabBar = /** @class */ (function (_super) {
    __extends(PreferencesScopeTabBar, _super);
    function PreferencesScopeTabBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentWorkspaceRoots = [];
        _this.currentSelection = preference_types_1.Preference.DEFAULT_SCOPE;
        _this.editorScrollAtTop = true;
        _this.folderSelectionCallback = function (newScope) { _this.setNewScopeSelection(newScope); };
        return _this;
    }
    PreferencesScopeTabBar_1 = PreferencesScopeTabBar;
    PreferencesScopeTabBar.prototype.setNewScopeSelection = function (newSelection) {
        var newIndex = this.titles.findIndex(function (title) { return title.dataset.scope === newSelection.scope; });
        if (newIndex !== -1) {
            this.currentSelection = newSelection;
            this.currentIndex = newIndex;
            if (newSelection.scope === browser_1.PreferenceScope.Folder.toString()) {
                this.addOrUpdateFolderTab();
            }
            this.emitNewScope();
        }
    };
    PreferencesScopeTabBar.prototype.init = function () {
        var _this = this;
        this.id = PreferencesScopeTabBar_1.ID;
        this.setupInitialDisplay();
        this.tabActivateRequested.connect(function (sender, args) {
            if (!!args.title) {
                _this.setNewScopeSelection(args.title.dataset);
            }
        });
        this.workspaceService.onWorkspaceChanged(function (newRoots) {
            _this.doUpdateDisplay(newRoots);
        });
        this.workspaceService.onWorkspaceLocationChanged(function () { return _this.updateWorkspaceTab(); });
        this.preferencesEventService.onEditorScroll.event(function (e) {
            if (e.isTop !== _this.editorScrollAtTop) {
                _this.editorScrollAtTop = e.isTop;
                if (_this.editorScrollAtTop) {
                    _this.removeClass(SHADOW_CLASSNAME);
                }
                else {
                    _this.addClass(SHADOW_CLASSNAME);
                }
            }
        });
        var tabUnderline = document.createElement('div');
        tabUnderline.className = TABBAR_UNDERLINE_CLASSNAME;
        this.node.append(tabUnderline);
    };
    PreferencesScopeTabBar.prototype.setupInitialDisplay = function () {
        this.addUserTab();
        this.addWorkspaceTab();
        this.addOrUpdateFolderTab();
    };
    PreferencesScopeTabBar.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        this.addTabIndexToTabs();
    };
    PreferencesScopeTabBar.prototype.addTabIndexToTabs = function () {
        var _this = this;
        this.node.querySelectorAll('li').forEach(function (tab, index) {
            tab.tabIndex = 0;
            tab.onkeypress = function () {
                if (tab.className.includes(GENERAL_FOLDER_TAB_CLASSNAME) && _this.currentWorkspaceRoots.length > 1) {
                    var tabRect = tab.getBoundingClientRect();
                    _this.openContextMenu(tabRect, tab, 'keypress');
                }
                else {
                    _this.setNewScopeSelection(_this.titles[index].dataset);
                }
            };
        });
    };
    PreferencesScopeTabBar.prototype.addUserTab = function () {
        this.addTab(new widgets_1.Title({
            dataset: { uri: '', scope: USER_TAB_INDEX },
            label: USER_TAB_LABEL,
            owner: this,
            className: PREFERENCE_TAB_CLASSNAME
        }));
    };
    PreferencesScopeTabBar.prototype.addWorkspaceTab = function () {
        if (!!this.workspaceService.workspace) {
            this.addTab(new widgets_1.Title({
                dataset: this.getWorkspaceDataset(),
                label: WORKSPACE_TAB_LABEL,
                owner: this,
                className: PREFERENCE_TAB_CLASSNAME,
            }));
        }
    };
    PreferencesScopeTabBar.prototype.getWorkspaceDataset = function () {
        var _a = this.workspaceService.workspace, resource = _a.resource, isDirectory = _a.isDirectory;
        var scope = WORKSPACE_TAB_INDEX;
        var activeScopeIsFolder = isDirectory.toString();
        return { uri: resource.toString(), activeScopeIsFolder: activeScopeIsFolder, scope: scope };
    };
    PreferencesScopeTabBar.prototype.addOrUpdateFolderTab = function () {
        if (!!this.workspaceService.workspace) {
            this.currentWorkspaceRoots = this.workspaceService.tryGetRoots();
            var multipleFolderRootsAreAvailable = this.currentWorkspaceRoots && this.currentWorkspaceRoots.length > 1;
            var noFolderRootsAreAvailable = this.currentWorkspaceRoots.length === 0;
            var shouldShowFoldersSeparately = this.workspaceService.saved;
            if (!noFolderRootsAreAvailable) {
                if (!this.folderTitle) {
                    this.folderTitle = new widgets_1.Title({
                        label: '',
                        caption: FOLDER_TAB_LABEL,
                        owner: this,
                    });
                }
                this.setFolderTitleProperties(multipleFolderRootsAreAvailable);
                this.getFolderContextMenu(this.currentWorkspaceRoots);
                if (multipleFolderRootsAreAvailable || shouldShowFoldersSeparately) {
                    this.addTab(this.folderTitle);
                }
            }
            else {
                var folderTabIndex = this.titles.findIndex(function (title) { return title.caption === FOLDER_TAB_LABEL; });
                if (folderTabIndex > -1) {
                    this.removeTabAt(folderTabIndex);
                }
            }
        }
    };
    PreferencesScopeTabBar.prototype.setFolderTitleProperties = function (multipleFolderRootsAreAvailable) {
        this.folderTitle.iconClass = multipleFolderRootsAreAvailable ? FOLDER_DROPDOWN_ICON_CLASSNAME : '';
        if (this.currentSelection.scope === FOLDER_TAB_INDEX) {
            this.folderTitle.label = this.labelProvider.getName(new uri_1.default(this.currentSelection.uri));
            this.folderTitle.dataset = __assign(__assign({}, this.currentSelection), { folderTitle: 'true' });
            this.folderTitle.className = multipleFolderRootsAreAvailable ? SELECTED_FOLDER_DROPDOWN_CLASSNAME : SINGLE_FOLDER_TAB_CLASSNAME;
        }
        else {
            var singleFolderRoot = this.currentWorkspaceRoots[0].resource;
            var singleFolderLabel = this.labelProvider.getName(singleFolderRoot);
            var defaultURI = multipleFolderRootsAreAvailable ? '' : singleFolderRoot.toString();
            this.folderTitle.label = multipleFolderRootsAreAvailable ? FOLDER_TAB_LABEL : singleFolderLabel;
            this.folderTitle.className = multipleFolderRootsAreAvailable ? UNSELECTED_FOLDER_DROPDOWN_CLASSNAME : SINGLE_FOLDER_TAB_CLASSNAME;
            this.folderTitle.dataset = { folderTitle: 'true', scope: FOLDER_TAB_INDEX, uri: defaultURI };
        }
    };
    PreferencesScopeTabBar.prototype.getFolderContextMenu = function (workspaceRoots) {
        if (workspaceRoots === void 0) { workspaceRoots = this.workspaceService.tryGetRoots(); }
        this.preferencesMenuFactory.createFolderWorkspacesMenu(workspaceRoots, this.currentSelection.uri);
    };
    PreferencesScopeTabBar.prototype.handleEvent = function (e) {
        var folderTab = this.contentNode.querySelector("." + GENERAL_FOLDER_TAB_CLASSNAME);
        if (folderTab && folderTab.contains(e.target) && this.currentWorkspaceRoots.length > 1) {
            var tabRect = folderTab.getBoundingClientRect();
            this.openContextMenu(tabRect, folderTab, 'click');
            return;
        }
        _super.prototype.handleEvent.call(this, e);
    };
    PreferencesScopeTabBar.prototype.openContextMenu = function (tabRect, folderTabNode, source) {
        this.contextMenuRenderer.render({
            menuPath: preference_scope_command_manager_1.FOLDER_SCOPE_MENU_PATH,
            anchor: { x: tabRect.left, y: tabRect.bottom },
            args: [this.folderSelectionCallback, 'from-tabbar'],
            onHide: function () {
                if (source === 'click') {
                    folderTabNode.blur();
                }
            }
        });
    };
    PreferencesScopeTabBar.prototype.doUpdateDisplay = function (newRoots) {
        var _this = this;
        var folderWasRemoved = newRoots.length < this.currentWorkspaceRoots.length;
        this.currentWorkspaceRoots = newRoots;
        if (folderWasRemoved) {
            var removedFolderWasSelectedScope = !this.currentWorkspaceRoots.some(function (root) { return root.resource.toString() === _this.currentSelection.uri; });
            if (removedFolderWasSelectedScope) {
                this.setNewScopeSelection(preference_types_1.Preference.DEFAULT_SCOPE);
            }
        }
        this.updateWorkspaceTab();
        this.addOrUpdateFolderTab();
    };
    PreferencesScopeTabBar.prototype.updateWorkspaceTab = function () {
        // Will always be present - otherwise workspace cannot change.
        var workspaceTitle = this.titles.find(function (title) { return title.label === WORKSPACE_TAB_LABEL; });
        workspaceTitle.dataset = this.getWorkspaceDataset();
        if (this.currentSelection.scope === browser_1.PreferenceScope.Workspace.toString()) {
            this.setNewScopeSelection(workspaceTitle.dataset);
        }
    };
    PreferencesScopeTabBar.prototype.emitNewScope = function () {
        this.preferencesEventService.onTabScopeSelected.fire(this.currentSelection);
    };
    var PreferencesScopeTabBar_1;
    PreferencesScopeTabBar.ID = 'preferences-scope-tab-bar';
    __decorate([
        inversify_1.inject(preference_event_service_1.PreferencesEventService),
        __metadata("design:type", preference_event_service_1.PreferencesEventService)
    ], PreferencesScopeTabBar.prototype, "preferencesEventService", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], PreferencesScopeTabBar.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(preference_scope_command_manager_1.PreferenceScopeCommandManager),
        __metadata("design:type", preference_scope_command_manager_1.PreferenceScopeCommandManager)
    ], PreferencesScopeTabBar.prototype, "preferencesMenuFactory", void 0);
    __decorate([
        inversify_1.inject(browser_1.ContextMenuRenderer),
        __metadata("design:type", browser_1.ContextMenuRenderer)
    ], PreferencesScopeTabBar.prototype, "contextMenuRenderer", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], PreferencesScopeTabBar.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferencesScopeTabBar.prototype, "init", null);
    PreferencesScopeTabBar = PreferencesScopeTabBar_1 = __decorate([
        inversify_1.injectable()
    ], PreferencesScopeTabBar);
    return PreferencesScopeTabBar;
}(widgets_1.TabBar));
exports.PreferencesScopeTabBar = PreferencesScopeTabBar;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/preference-searchbar-widget.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/preference-searchbar-widget.js ***!
  \*******************************************************************************************/
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
exports.PreferencesSearchbarWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var lodash_1 = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
var preference_event_service_1 = __webpack_require__(/*! ../util/preference-event-service */ "../node_modules/@theia/preferences/lib/browser/util/preference-event-service.js");
var PreferencesSearchbarWidget = /** @class */ (function (_super) {
    __extends(PreferencesSearchbarWidget, _super);
    function PreferencesSearchbarWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchbarRef = React.createRef();
        _this.handleSearch = function (e) {
            _this.search(e.target.value);
        };
        _this.search = lodash_1.debounce(function (value) {
            _this.preferencesEventService.onSearch.fire({ query: value });
            _this.update();
        }, 200);
        return _this;
    }
    PreferencesSearchbarWidget_1 = PreferencesSearchbarWidget;
    PreferencesSearchbarWidget.prototype.init = function () {
        var _this = this;
        this.onRender.push(disposable_1.Disposable.create(function () { return _this.focus(); }));
        this.id = PreferencesSearchbarWidget_1.ID;
        this.title.label = PreferencesSearchbarWidget_1.LABEL;
        this.update();
    };
    PreferencesSearchbarWidget.prototype.focus = function () {
        if (this.searchbarRef.current) {
            this.searchbarRef.current.focus();
        }
    };
    PreferencesSearchbarWidget.prototype.render = function () {
        return (React.createElement("div", { className: 'settings-header' },
            React.createElement("div", { className: "settings-search-container" },
                React.createElement("input", { type: "text", placeholder: "Search Settings", className: "settings-search-input theia-input", onChange: this.handleSearch, ref: this.searchbarRef }))));
    };
    var PreferencesSearchbarWidget_1;
    PreferencesSearchbarWidget.ID = 'settings.header';
    PreferencesSearchbarWidget.LABEL = 'Settings Header';
    __decorate([
        inversify_1.inject(preference_event_service_1.PreferencesEventService),
        __metadata("design:type", preference_event_service_1.PreferencesEventService)
    ], PreferencesSearchbarWidget.prototype, "preferencesEventService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferencesSearchbarWidget.prototype, "init", null);
    PreferencesSearchbarWidget = PreferencesSearchbarWidget_1 = __decorate([
        inversify_1.injectable()
    ], PreferencesSearchbarWidget);
    return PreferencesSearchbarWidget;
}(browser_1.ReactWidget));
exports.PreferencesSearchbarWidget = PreferencesSearchbarWidget;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/preference-tree-widget.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/preference-tree-widget.js ***!
  \**************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferencesTreeWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "../node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var preference_event_service_1 = __webpack_require__(/*! ../util/preference-event-service */ "../node_modules/@theia/preferences/lib/browser/util/preference-event-service.js");
var preferences_decorator_1 = __webpack_require__(/*! ../preferences-decorator */ "../node_modules/@theia/preferences/lib/browser/preferences-decorator.js");
var preference_tree_provider_1 = __webpack_require__(/*! ../preference-tree-provider */ "../node_modules/@theia/preferences/lib/browser/preference-tree-provider.js");
var PreferencesTreeWidget = /** @class */ (function (_super) {
    __extends(PreferencesTreeWidget, _super);
    function PreferencesTreeWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shouldFireSelectionEvents = true;
        return _this;
    }
    PreferencesTreeWidget_1 = PreferencesTreeWidget;
    PreferencesTreeWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.preferencesEventService.onDisplayChanged.event(function (didChangeTree) {
            if (didChangeTree) {
                _this.updateDisplay();
            }
        });
        this.preferencesEventService.onEditorScroll.event(function (e) {
            _this.handleEditorScroll(e.firstVisibleChildId);
        });
        this.id = PreferencesTreeWidget_1.ID;
    };
    PreferencesTreeWidget.prototype.handleEditorScroll = function (firstVisibleChildId) {
        this.shouldFireSelectionEvents = false;
        if (firstVisibleChildId !== this.firstVisibleLeafNodeID) {
            var _a = this.getAncestorsForVisibleNode(firstVisibleChildId), selectionAncestor = _a.selectionAncestor, expansionAncestor = _a.expansionAncestor;
            this.firstVisibleLeafNodeID = firstVisibleChildId;
            this.model.expandNode(expansionAncestor);
            this.collapseAllExcept(expansionAncestor);
            if (selectionAncestor) {
                this.model.selectNode(selectionAncestor);
            }
        }
        this.shouldFireSelectionEvents = true;
    };
    PreferencesTreeWidget.prototype.collapseAllExcept = function (openNode) {
        var _this = this;
        var children = this.model.root.children;
        children.forEach(function (child) {
            if (child !== openNode && child.expanded) {
                _this.model.collapseNode(child);
            }
        });
    };
    PreferencesTreeWidget.prototype.getAncestorsForVisibleNode = function (visibleNodeID) {
        var isNonLeafNode = visibleNodeID.endsWith('-id');
        var isSubgroupNode = isNonLeafNode && visibleNodeID.includes('.');
        var expansionAncestor;
        var selectionAncestor;
        if (isSubgroupNode) {
            selectionAncestor = this.model.getNode(visibleNodeID);
            expansionAncestor = selectionAncestor === null || selectionAncestor === void 0 ? void 0 : selectionAncestor.parent;
        }
        else if (isNonLeafNode) {
            selectionAncestor = this.model.getNode(visibleNodeID);
            expansionAncestor = selectionAncestor;
        }
        else {
            var labels = visibleNodeID.split('.');
            var hasSubgroupAncestor = labels.length > 2;
            var expansionAncestorID = labels[0] + "-id";
            expansionAncestor = this.model.getNode(expansionAncestorID);
            if (hasSubgroupAncestor) {
                var subgroupID = labels.slice(0, 2).join('.') + '-id';
                selectionAncestor = this.model.getNode(subgroupID);
            }
            else {
                // The last selectable child that precedes the visible item alphabetically
                selectionAncestor = __spread(((expansionAncestor === null || expansionAncestor === void 0 ? void 0 : expansionAncestor.children) || [])).reverse().find(function (child) { return child.visible && child.id < visibleNodeID; }) || expansionAncestor;
            }
        }
        return { selectionAncestor: selectionAncestor, expansionAncestor: expansionAncestor };
    };
    PreferencesTreeWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        this.updateDisplay();
        this.model.onSelectionChanged(function (previousAndCurrentSelectedNodes) { return _this.fireEditorScrollForNewSelection(previousAndCurrentSelectedNodes); });
        _super.prototype.onAfterAttach.call(this, msg);
    };
    PreferencesTreeWidget.prototype.updateDisplay = function () {
        var _this = this;
        if (this.preferenceTreeProvider) {
            this.model.root = this.preferenceTreeProvider.currentTree;
            var nodes = Object.keys(this.preferenceTreeProvider.propertyList)
                .map(function (propertyName) {
                var _a;
                return (_a = {}, _a[propertyName] = _this.preferenceTreeProvider.propertyList[propertyName], _a);
            });
            this.decorator.fireDidChangeDecorations(nodes);
            // If the tree has changed but we know the visible node, scroll to it.
            if (this.firstVisibleLeafNodeID) {
                var selectionAncestor = this.getAncestorsForVisibleNode(this.firstVisibleLeafNodeID).selectionAncestor;
                if (selectionAncestor === null || selectionAncestor === void 0 ? void 0 : selectionAncestor.visible) {
                    this.preferencesEventService.onNavTreeSelection.fire({ nodeID: this.firstVisibleLeafNodeID });
                }
            }
            this.update();
        }
    };
    PreferencesTreeWidget.prototype.fireEditorScrollForNewSelection = function (previousAndCurrentSelectedNodes) {
        if (this.shouldFireSelectionEvents) {
            var _a = __read(previousAndCurrentSelectedNodes, 1), currentSelectedNode = _a[0];
            this.firstVisibleLeafNodeID = currentSelectedNode.id;
            this.preferencesEventService.onNavTreeSelection.fire({ nodeID: currentSelectedNode.id });
        }
    };
    PreferencesTreeWidget.prototype.renderNode = function (node, props) {
        if (!browser_1.TreeNode.isVisible(node)) {
            return undefined;
        }
        var attributes = this.createNodeAttributes(node, props);
        var printedNameWithVisibleChildren = node.name && this.preferenceTreeProvider.isFiltered
            ? node.name + " (" + this.calculateVisibleLeaves(node) + ")"
            : node.name;
        var content = React.createElement("div", { className: browser_1.TREE_NODE_CONTENT_CLASS },
            this.renderExpansionToggle(node, props),
            this.renderCaption(__assign(__assign({}, node), { name: printedNameWithVisibleChildren }), props));
        return React.createElement('div', attributes, content);
    };
    PreferencesTreeWidget.prototype.calculateVisibleLeaves = function (node) {
        var _this = this;
        var visibleLeaves = 0;
        // The check for node.name prevents recursion at the level of `root`.
        if (node.children) {
            node.children.forEach(function (child) {
                visibleLeaves += _this.calculateVisibleLeaves(child);
            });
        }
        if (node.leaves) {
            node.leaves.forEach(function (leaf) {
                if (leaf.visible) {
                    visibleLeaves++;
                }
                ;
            });
        }
        return visibleLeaves;
    };
    PreferencesTreeWidget.prototype.renderExpansionToggle = function (node, props) {
        if (node.children && node.children.every(function (child) { return !child.visible; })) {
            return React.createElement("div", { className: 'preferences-tree-spacer' });
        }
        return _super.prototype.renderExpansionToggle.call(this, node, props);
    };
    var PreferencesTreeWidget_1;
    PreferencesTreeWidget.ID = 'preferences.tree';
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], PreferencesTreeWidget.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(preferences_decorator_1.PreferencesDecorator),
        __metadata("design:type", preferences_decorator_1.PreferencesDecorator)
    ], PreferencesTreeWidget.prototype, "decorator", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], PreferencesTreeWidget.prototype, "preferenceConfigs", void 0);
    __decorate([
        inversify_1.inject(preference_tree_provider_1.PreferencesTreeProvider),
        __metadata("design:type", preference_tree_provider_1.PreferencesTreeProvider)
    ], PreferencesTreeWidget.prototype, "preferenceTreeProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.TreeModel),
        __metadata("design:type", Object)
    ], PreferencesTreeWidget.prototype, "model", void 0);
    __decorate([
        inversify_1.inject(browser_1.TreeProps),
        __metadata("design:type", Object)
    ], PreferencesTreeWidget.prototype, "treeProps", void 0);
    __decorate([
        inversify_1.inject(browser_1.ContextMenuRenderer),
        __metadata("design:type", browser_1.ContextMenuRenderer)
    ], PreferencesTreeWidget.prototype, "contextMenuRenderer", void 0);
    __decorate([
        inversify_1.inject(preference_event_service_1.PreferencesEventService),
        __metadata("design:type", preference_event_service_1.PreferencesEventService)
    ], PreferencesTreeWidget.prototype, "preferencesEventService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferencesTreeWidget.prototype, "init", null);
    PreferencesTreeWidget = PreferencesTreeWidget_1 = __decorate([
        inversify_1.injectable()
    ], PreferencesTreeWidget);
    return PreferencesTreeWidget;
}(browser_1.TreeWidget));
exports.PreferencesTreeWidget = PreferencesTreeWidget;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/preference-widget-bindings.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/preference-widget-bindings.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindPreferencesWidgets = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var single_preference_display_factory_1 = __webpack_require__(/*! ./components/single-preference-display-factory */ "../node_modules/@theia/preferences/lib/browser/views/components/single-preference-display-factory.js");
var single_preference_wrapper_1 = __webpack_require__(/*! ./components/single-preference-wrapper */ "../node_modules/@theia/preferences/lib/browser/views/components/single-preference-wrapper.js");
var preference_widget_1 = __webpack_require__(/*! ./preference-widget */ "../node_modules/@theia/preferences/lib/browser/views/preference-widget.js");
var preference_tree_widget_1 = __webpack_require__(/*! ./preference-tree-widget */ "../node_modules/@theia/preferences/lib/browser/views/preference-tree-widget.js");
var preference_editor_widget_1 = __webpack_require__(/*! ./preference-editor-widget */ "../node_modules/@theia/preferences/lib/browser/views/preference-editor-widget.js");
var preference_searchbar_widget_1 = __webpack_require__(/*! ./preference-searchbar-widget */ "../node_modules/@theia/preferences/lib/browser/views/preference-searchbar-widget.js");
var preference_scope_tabbar_widget_1 = __webpack_require__(/*! ./preference-scope-tabbar-widget */ "../node_modules/@theia/preferences/lib/browser/views/preference-scope-tabbar-widget.js");
var preferences_decorator_1 = __webpack_require__(/*! ../preferences-decorator */ "../node_modules/@theia/preferences/lib/browser/preferences-decorator.js");
var preferences_decorator_service_1 = __webpack_require__(/*! ../preferences-decorator-service */ "../node_modules/@theia/preferences/lib/browser/preferences-decorator-service.js");
function bindPreferencesWidgets(bind) {
    bind(preference_widget_1.PreferencesWidget).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: preference_widget_1.PreferencesWidget.ID,
            createWidget: function () { return container.get(preference_widget_1.PreferencesWidget); }
        });
    }).inSingletonScope();
    bind(single_preference_wrapper_1.SinglePreferenceWrapper).toSelf();
    bind(preference_tree_widget_1.PreferencesTreeWidget).toDynamicValue(function (ctx) {
        return createPreferencesTree(ctx.container);
    }).inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: preference_tree_widget_1.PreferencesTreeWidget.ID,
        createWidget: function () { return context.container.get(preference_tree_widget_1.PreferencesTreeWidget); },
    }); }).inSingletonScope();
    bind(preference_editor_widget_1.PreferencesEditorWidget).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: preference_editor_widget_1.PreferencesEditorWidget.ID,
        createWidget: function () { return context.container.get(preference_editor_widget_1.PreferencesEditorWidget); },
    }); }).inSingletonScope();
    bind(preference_searchbar_widget_1.PreferencesSearchbarWidget).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: preference_searchbar_widget_1.PreferencesSearchbarWidget.ID,
        createWidget: function () { return context.container.get(preference_searchbar_widget_1.PreferencesSearchbarWidget); },
    }); }).inSingletonScope();
    bind(preference_scope_tabbar_widget_1.PreferencesScopeTabBar).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: preference_scope_tabbar_widget_1.PreferencesScopeTabBar.ID,
        createWidget: function () { return context.container.get(preference_scope_tabbar_widget_1.PreferencesScopeTabBar); },
    }); }).inSingletonScope();
    bind(single_preference_display_factory_1.SinglePreferenceDisplayFactory).toSelf().inSingletonScope();
}
exports.bindPreferencesWidgets = bindPreferencesWidgets;
function createPreferencesTree(parent) {
    var child = browser_1.createTreeContainer(parent);
    child.unbind(browser_1.TreeWidget);
    child.bind(preference_tree_widget_1.PreferencesTreeWidget).toSelf();
    child.rebind(browser_1.TreeProps).toConstantValue(__assign(__assign({}, browser_1.defaultTreeProps), { search: false }));
    bindPreferencesDecorator(child);
    return child.get(preference_tree_widget_1.PreferencesTreeWidget);
}
function bindPreferencesDecorator(parent) {
    parent.bind(preferences_decorator_1.PreferencesDecorator).toSelf().inSingletonScope();
    parent.bind(preferences_decorator_service_1.PreferencesDecoratorService).toSelf().inSingletonScope();
    parent.rebind(browser_1.TreeDecoratorService).toService(preferences_decorator_service_1.PreferencesDecoratorService);
}


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/views/preference-widget.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/views/preference-widget.js ***!
  \*********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferencesWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var preference_types_1 = __webpack_require__(/*! ../util/preference-types */ "../node_modules/@theia/preferences/lib/browser/util/preference-types.js");
var preference_editor_widget_1 = __webpack_require__(/*! ./preference-editor-widget */ "../node_modules/@theia/preferences/lib/browser/views/preference-editor-widget.js");
var preference_tree_widget_1 = __webpack_require__(/*! ./preference-tree-widget */ "../node_modules/@theia/preferences/lib/browser/views/preference-tree-widget.js");
var preference_searchbar_widget_1 = __webpack_require__(/*! ./preference-searchbar-widget */ "../node_modules/@theia/preferences/lib/browser/views/preference-searchbar-widget.js");
var preference_scope_tabbar_widget_1 = __webpack_require__(/*! ./preference-scope-tabbar-widget */ "../node_modules/@theia/preferences/lib/browser/views/preference-scope-tabbar-widget.js");
var PreferencesWidget = /** @class */ (function (_super) {
    __extends(PreferencesWidget, _super);
    function PreferencesWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._preferenceScope = preference_types_1.Preference.DEFAULT_SCOPE;
        return _this;
    }
    PreferencesWidget_1 = PreferencesWidget;
    Object.defineProperty(PreferencesWidget.prototype, "preferenceScope", {
        get: function () {
            return this._preferenceScope;
        },
        set: function (preferenceScopeDetails) {
            this._preferenceScope = preferenceScopeDetails;
            this.editorWidget.preferenceScope = this._preferenceScope;
        },
        enumerable: false,
        configurable: true
    });
    PreferencesWidget.prototype.onResize = function (msg) {
        _super.prototype.onResize.call(this, msg);
        if (msg.width < 600 && this.treeWidget && !this.treeWidget.isHidden) {
            this.treeWidget.hide();
            this.editorWidget.addClass('full-pane');
        }
        else if (msg.width >= 600 && this.treeWidget && this.treeWidget.isHidden) {
            this.treeWidget.show();
            this.editorWidget.removeClass('full-pane');
        }
    };
    PreferencesWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.searchbarWidget.focus();
    };
    PreferencesWidget.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.id = PreferencesWidget_1.ID;
                        this.title.label = PreferencesWidget_1.LABEL;
                        this.title.closable = true;
                        this.addClass('theia-settings-container');
                        this.title.iconClass = 'fa fa-sliders';
                        _a = this;
                        return [4 /*yield*/, this.manager.getOrCreateWidget(preference_searchbar_widget_1.PreferencesSearchbarWidget.ID)];
                    case 1:
                        _a.searchbarWidget = _e.sent();
                        this.searchbarWidget.addClass('preferences-searchbar-widget');
                        this.addWidget(this.searchbarWidget);
                        _b = this;
                        return [4 /*yield*/, this.manager.getOrCreateWidget(preference_scope_tabbar_widget_1.PreferencesScopeTabBar.ID)];
                    case 2:
                        _b.tabBarWidget = _e.sent();
                        this.tabBarWidget.addClass('preferences-tabbar-widget');
                        this.addWidget(this.tabBarWidget);
                        _c = this;
                        return [4 /*yield*/, this.manager.getOrCreateWidget(preference_tree_widget_1.PreferencesTreeWidget.ID)];
                    case 3:
                        _c.treeWidget = _e.sent();
                        this.treeWidget.addClass('preferences-tree-widget');
                        this.addWidget(this.treeWidget);
                        _d = this;
                        return [4 /*yield*/, this.manager.getOrCreateWidget(preference_editor_widget_1.PreferencesEditorWidget.ID)];
                    case 4:
                        _d.editorWidget = _e.sent();
                        this.editorWidget.addClass('preferences-editor-widget');
                        this.addWidget(this.editorWidget);
                        this.update();
                        return [2 /*return*/];
                }
            });
        });
    };
    var PreferencesWidget_1;
    /**
     * The widget `id`.
     */
    PreferencesWidget.ID = 'settings_widget';
    /**
     * The widget `label` which is used for display purposes.
     */
    PreferencesWidget.LABEL = 'Preferences';
    __decorate([
        inversify_1.inject(preference_editor_widget_1.PreferencesEditorWidget),
        __metadata("design:type", preference_editor_widget_1.PreferencesEditorWidget)
    ], PreferencesWidget.prototype, "editorWidget", void 0);
    __decorate([
        inversify_1.inject(preference_tree_widget_1.PreferencesTreeWidget),
        __metadata("design:type", preference_tree_widget_1.PreferencesTreeWidget)
    ], PreferencesWidget.prototype, "treeWidget", void 0);
    __decorate([
        inversify_1.inject(preference_searchbar_widget_1.PreferencesSearchbarWidget),
        __metadata("design:type", preference_searchbar_widget_1.PreferencesSearchbarWidget)
    ], PreferencesWidget.prototype, "searchbarWidget", void 0);
    __decorate([
        inversify_1.inject(preference_scope_tabbar_widget_1.PreferencesScopeTabBar),
        __metadata("design:type", preference_scope_tabbar_widget_1.PreferencesScopeTabBar)
    ], PreferencesWidget.prototype, "tabBarWidget", void 0);
    __decorate([
        inversify_1.inject(browser_1.WidgetManager),
        __metadata("design:type", browser_1.WidgetManager)
    ], PreferencesWidget.prototype, "manager", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PreferencesWidget.prototype, "init", null);
    PreferencesWidget = PreferencesWidget_1 = __decorate([
        inversify_1.injectable()
    ], PreferencesWidget);
    return PreferencesWidget;
}(browser_1.Panel));
exports.PreferencesWidget = PreferencesWidget;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/workspace-file-preference-provider.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/workspace-file-preference-provider.js ***!
  \********************************************************************************************/
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
exports.WorkspaceFilePreferenceProvider = exports.WorkspaceFilePreferenceProviderFactory = exports.WorkspaceFilePreferenceProviderOptions = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "../node_modules/@theia/core/lib/browser/preferences/index.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "../node_modules/@theia/workspace/lib/browser/workspace-service.js");
var abstract_resource_preference_provider_1 = __webpack_require__(/*! ./abstract-resource-preference-provider */ "../node_modules/@theia/preferences/lib/browser/abstract-resource-preference-provider.js");
var WorkspaceFilePreferenceProviderOptions = /** @class */ (function () {
    function WorkspaceFilePreferenceProviderOptions() {
    }
    WorkspaceFilePreferenceProviderOptions = __decorate([
        inversify_1.injectable()
    ], WorkspaceFilePreferenceProviderOptions);
    return WorkspaceFilePreferenceProviderOptions;
}());
exports.WorkspaceFilePreferenceProviderOptions = WorkspaceFilePreferenceProviderOptions;
exports.WorkspaceFilePreferenceProviderFactory = Symbol('WorkspaceFilePreferenceProviderFactory');
var WorkspaceFilePreferenceProvider = /** @class */ (function (_super) {
    __extends(WorkspaceFilePreferenceProvider, _super);
    function WorkspaceFilePreferenceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkspaceFilePreferenceProvider.prototype.getUri = function () {
        return this.options.workspaceUri;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WorkspaceFilePreferenceProvider.prototype.parse = function (content) {
        var data = _super.prototype.parse.call(this, content);
        if (workspace_service_1.WorkspaceData.is(data)) {
            return data.settings || {};
        }
        return {};
    };
    WorkspaceFilePreferenceProvider.prototype.getPath = function (preferenceName) {
        return ['settings', preferenceName];
    };
    WorkspaceFilePreferenceProvider.prototype.getScope = function () {
        return preferences_1.PreferenceScope.Workspace;
    };
    WorkspaceFilePreferenceProvider.prototype.getDomain = function () {
        // workspace file is treated as part of the workspace
        return this.workspaceService.tryGetRoots().map(function (r) { return r.resource.toString(); }).concat([this.options.workspaceUri.toString()]);
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], WorkspaceFilePreferenceProvider.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(WorkspaceFilePreferenceProviderOptions),
        __metadata("design:type", WorkspaceFilePreferenceProviderOptions)
    ], WorkspaceFilePreferenceProvider.prototype, "options", void 0);
    WorkspaceFilePreferenceProvider = __decorate([
        inversify_1.injectable()
    ], WorkspaceFilePreferenceProvider);
    return WorkspaceFilePreferenceProvider;
}(abstract_resource_preference_provider_1.AbstractResourcePreferenceProvider));
exports.WorkspaceFilePreferenceProvider = WorkspaceFilePreferenceProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/workspace-preference-provider.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/workspace-preference-provider.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacePreferenceProvider = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "../node_modules/@theia/core/lib/browser/preferences/index.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "../node_modules/@theia/workspace/lib/browser/workspace-service.js");
var workspace_file_preference_provider_1 = __webpack_require__(/*! ./workspace-file-preference-provider */ "../node_modules/@theia/preferences/lib/browser/workspace-file-preference-provider.js");
var WorkspacePreferenceProvider = /** @class */ (function (_super) {
    __extends(WorkspacePreferenceProvider, _super);
    function WorkspacePreferenceProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toDisposeOnEnsureDelegateUpToDate = new disposable_1.DisposableCollection();
        return _this;
    }
    WorkspacePreferenceProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._ready.resolve();
                this.ensureDelegateUpToDate();
                this.workspaceService.onWorkspaceLocationChanged(function () { return _this.ensureDelegateUpToDate(); });
                return [2 /*return*/];
            });
        });
    };
    WorkspacePreferenceProvider.prototype.getConfigUri = function (resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        var delegate = this.delegate;
        return delegate && delegate.getConfigUri(resourceUri);
    };
    Object.defineProperty(WorkspacePreferenceProvider.prototype, "delegate", {
        get: function () {
            if (!this._delegate) {
                this.ensureDelegateUpToDate();
            }
            return this._delegate;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacePreferenceProvider.prototype.ensureDelegateUpToDate = function () {
        var _this = this;
        var delegate = this.createDelegate();
        if (this._delegate !== delegate) {
            this.toDisposeOnEnsureDelegateUpToDate.dispose();
            this.toDispose.push(this.toDisposeOnEnsureDelegateUpToDate);
            this._delegate = delegate;
            if (delegate instanceof workspace_file_preference_provider_1.WorkspaceFilePreferenceProvider) {
                this.toDisposeOnEnsureDelegateUpToDate.pushAll([
                    delegate,
                    delegate.onDidPreferencesChanged(function (changes) { return _this.onDidPreferencesChangedEmitter.fire(changes); })
                ]);
            }
        }
    };
    WorkspacePreferenceProvider.prototype.createDelegate = function () {
        var workspace = this.workspaceService.workspace;
        if (!workspace) {
            return undefined;
        }
        if (!this.workspaceService.isMultiRootWorkspaceOpened) {
            return this.folderPreferenceProvider;
        }
        return this.workspaceFileProviderFactory({
            workspaceUri: workspace.resource
        });
    };
    WorkspacePreferenceProvider.prototype.get = function (preferenceName, resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        var delegate = this.delegate;
        return delegate ? delegate.get(preferenceName, resourceUri) : undefined;
    };
    WorkspacePreferenceProvider.prototype.resolve = function (preferenceName, resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        var delegate = this.delegate;
        return delegate ? delegate.resolve(preferenceName, resourceUri) : {};
    };
    WorkspacePreferenceProvider.prototype.getPreferences = function (resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        var delegate = this.delegate;
        return delegate ? delegate.getPreferences(resourceUri) : {};
    };
    WorkspacePreferenceProvider.prototype.setPreference = function (preferenceName, value, resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        return __awaiter(this, void 0, void 0, function () {
            var delegate;
            return __generator(this, function (_a) {
                delegate = this.delegate;
                if (delegate) {
                    return [2 /*return*/, delegate.setPreference(preferenceName, value, resourceUri)];
                }
                return [2 /*return*/, false];
            });
        });
    };
    WorkspacePreferenceProvider.prototype.ensureResourceUri = function () {
        if (this.workspaceService.workspace && !this.workspaceService.isMultiRootWorkspaceOpened) {
            return this.workspaceService.workspace.resource.toString();
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], WorkspacePreferenceProvider.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(workspace_file_preference_provider_1.WorkspaceFilePreferenceProviderFactory),
        __metadata("design:type", Function)
    ], WorkspacePreferenceProvider.prototype, "workspaceFileProviderFactory", void 0);
    __decorate([
        inversify_1.inject(preferences_1.PreferenceProvider),
        inversify_1.named(preferences_1.PreferenceScope.Folder),
        __metadata("design:type", preferences_1.PreferenceProvider)
    ], WorkspacePreferenceProvider.prototype, "folderPreferenceProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WorkspacePreferenceProvider.prototype, "init", null);
    WorkspacePreferenceProvider = __decorate([
        inversify_1.injectable()
    ], WorkspacePreferenceProvider);
    return WorkspacePreferenceProvider;
}(preferences_1.PreferenceProvider));
exports.WorkspacePreferenceProvider = WorkspacePreferenceProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/src/browser/style/index.css":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/preferences/src/browser/style/index.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/preferences/src/browser/style/index.css");

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

/***/ "../node_modules/@theia/userstorage/lib/browser/index.js":
/*!***************************************************************!*\
  !*** ../node_modules/@theia/userstorage/lib/browser/index.js ***!
  \***************************************************************/
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./user-storage-uri */ "../node_modules/@theia/userstorage/lib/browser/user-storage-uri.js"), exports);
__exportStar(__webpack_require__(/*! ./user-storage-frontend-module */ "../node_modules/@theia/userstorage/lib/browser/user-storage-frontend-module.js"), exports);


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/preferences/src/browser/style/index.css":
/*!*************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/preferences/src/browser/style/index.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader!./preference-context-menu.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/preferences/src/browser/style/preference-context-menu.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../css-loader!./preference-array.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/preferences/src/browser/style/preference-array.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../css-loader!./preference-object.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/preferences/src/browser/style/preference-object.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../css-loader!./search-input.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/preferences/src/browser/style/search-input.css"), "");

// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2019 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n#preferences_container_widget .p-SplitPanel-handle {\n    border-right: var(--theia-border-width) solid var(--theia-editorGroup-border);\n}\n\n#preferences_container_widget .p-TabBar-tabIcon {\n    align-items: center;\n    display: flex;\n    line-height: var(--theia-content-line-height) !important;\n}\n\n/* UI View */\n\n.theia-settings-container {\n    max-width: 1000px;\n    padding-top: 11px;\n    display: grid;\n    grid-template-areas:\n        \"header header\"\n        \"tabbar tabbar\"\n        \"navbar editor\";\n    grid-template-columns: minmax(150px, 280px) 1fr;\n    grid-template-rows: 45px 45px 1fr;\n}\n\n.theia-settings-container .settings-no-results-announcement {\n    font-weight: bold;\n    font-size: var(--theia-ui-font-size3);\n    padding-left: var(--theia-ui-padding);\n    margin: calc(2*var(--theia-ui-padding)) 0px;\n}\n\n.theia-settings-container .preferences-searchbar-widget {\n    grid-area: header;\n    margin: 3px 24px 0px 24px;\n}\n\n.theia-settings-container .preferences-tabbar-widget {\n    grid-area: tabbar;\n    margin: 3px 24px 0px 24px;\n}\n\n.theia-settings-container .preferences-tabbar-widget.with-shadow {\n    box-shadow: 0px 6px 5px -5px var(--theia-widget-shadow);\n}\n\n.theia-settings-container .preferences-tabbar-widget .preferences-scope-tab .p-TabBar-tabIcon:not(.preferences-folder-dropdown-icon) {\n    display: none;\n}\n\n#theia-main-content-panel .theia-settings-container #preferences-scope-tab-bar .preferences-scope-tab {\n    background: var(--theia-editor-background);\n    border-right: unset;\n    border-bottom: var(--theia-border-width) solid var(--theia-tab-unfocusedInactiveForeground);\n}\n\n#theia-main-content-panel .theia-settings-container .tabbar-underline {\n    width: 100%;\n    position:absolute;\n    top: calc(var(--theia-private-horizontal-tab-height) + var(--theia-private-horizontal-tab-scrollbar-rail-height) / 2 - 1px);\n    border-top: 1px solid var(--theia-tab-unfocusedInactiveForeground);\n    z-index: -1;\n}\n\n#theia-main-content-panel .theia-settings-container #preferences-scope-tab-bar .preferences-scope-tab.p-mod-current {\n    color: var(--theia-panelTitle-activeForeground);\n    border-bottom: var(--theia-border-width) solid var(--theia-panelTitle-activeBorder);\n}\n\n#theia-main-content-panel .theia-settings-container #preferences-scope-tab-bar .preferences-scope-tab.p-mod-current:not(.theia-mod-active) {\n    border-top: unset;\n}\n\n#theia-main-content-panel .theia-settings-container #preferences-scope-tab-bar .preferences-scope-tab.preferences-folder-tab .p-TabBar-tabLabel::after {\n    content: 'Folder';\n    padding-left: 4px;\n    font-size: 0.8em;\n    color: var(--theia-tab-inactiveForeground);\n}\n\n#theia-main-content-panel .theia-settings-container #preferences-scope-tab-bar .preferences-scope-tab.preferences-folder-dropdown {\n    position: relative;\n    padding-right: 23px;\n}\n\n.preferences-folder-dropdown-icon {\n    background: var(--theia-icon-chevron-right) center center no-repeat;\n    transform: rotate(90deg);\n    width: 15px;\n    height: 15px;\n    position: absolute;\n    right: var(--theia-ui-padding);\n}\n\n.theia-settings-container .preferences-editor-widget {\n    grid-area: editor;\n    padding: 0 24px;\n}\n\n.theia-settings-container .preferences-editor-widget.full-pane {\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n.theia-settings-container .preferences-tree-widget {\n    grid-area: navbar;\n    padding-left: 31px;\n}\n\n.theia-settings-container .preferences-tree-widget .theia-mod-selected {\n    font-weight: bold;\n}\n\n.theia-settings-container .preferences-tree-widget .theia-TreeNodeSegment {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    max-width: 90%;\n}\n\n.theia-settings-container .settings-main {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.theia-settings-container .settings-main-scroll-container {\n    position: relative;\n    width: 100%;\n    flex: 1 1 auto;\n}\n\n.theia-settings-container .settings-main-sticky-misc {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex: 0 1 50px;\n}\n\n.theia-settings-container .settings-main-sticky-misc .json-button>i {\n    display: inline-block;\n    background: var(--theia-icon-open-json) no-repeat;\n    background-position-y: 1px;\n    -webkit-filter: invert(1);\n    filter: invert(1);\n    height: var(--theia-icon-size);\n    width: var(--theia-icon-size);\n}\n\n.theia-settings-container .settings-scope>label {\n    margin-right: 12px;\n}\n\n.theia-settings-container .settings-section {\n    padding-left: 0;\n    padding-top: var(--theia-ui-padding);\n    margin-top: calc(var(--theia-ui-padding) * -1);\n}\n\n.theia-settings-container .settings-section a {\n    border: none;\n    color: var(--theia-foreground);\n    font-weight: 500;\n    outline: 0;\n    text-decoration: none;\n}\n\n.theia-settings-container .settings-section a:hover {\n    text-decoration: underline;\n}\n\n.theia-settings-container .settings-section-category-title {\n    font-weight: bold;\n    font-size: var(--theia-ui-font-size3);\n    padding-left: calc(2 * var(--theia-ui-padding));\n  }\n  \n.theia-settings-container .settings-section-subcategory-title {\n    font-weight: bold;\n    font-size: var(--theia-ui-font-size2);\n    padding-left: calc(2 * var(--theia-ui-padding));\n  }\n\n.theia-settings-container .settings-section>li {\n    list-style-type: none;\n    margin: var(--theia-ui-padding) 0px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: start;\n}\n\n.theia-settings-container li.single-pref {\n    list-style-type: none;\n    margin: 12px 0 18px 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    padding-left: calc(2 * var(--theia-ui-padding));\n    position: relative;\n}\n\n.theia-settings-container li.single-pref .pref-context-gutter {\n    position: absolute;\n    height: 100%;\n    left: -16px;\n    padding-right: 4px;\n    border-right: 2px hidden;\n}\n\n.theia-settings-container li.single-pref .pref-context-gutter .settings-context-menu-btn {\n    opacity: 0;\n    transition: opacity .5s;\n}\n\n.theia-settings-container li.single-pref .pref-context-gutter .settings-context-menu-btn.show-cog {\n    opacity: 1;\n}\n\n.theia-settings-container li.single-pref .pref-context-gutter.theia-mod-item-modified {\n    border-right: 2px solid var(--theia-settings-modifiedItemIndicator);\n}\n\n.theia-settings-container li.single-pref input[type=\"text\"] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.theia-settings-container .settings-main {\n    margin: 0;\n}\n\n.theia-settings-container .settings-main-sticky {\n    top: 0;\n    padding-top: calc(var(--theia-ui-padding));\n    margin-top: calc(var(--theia-ui-padding) * -1);\n    background-color: var(--theia-editor-background);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    z-index: 1000;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.theia-settings-container .pref-name {\n    padding: 0;\n    font-weight: bold;\n}\n\n.preferences-tree-spacer {\n    padding-left: calc(var(--theia-ui-padding)/2);\n    padding-right: calc(var(--theia-ui-padding)/2);\n    min-width: var(--theia-icon-size);\n    min-height: var(--theia-icon-size);\n}\n\n.theia-settings-container .pref-description {\n    padding: var(--theia-ui-padding) 0;\n    color: var(--theia-descriptionForeground);\n    line-height: 18px;\n}\n\n.theia-settings-container .theia-select:focus {\n    outline-width: 1px;\n    outline-style: solid;\n    outline-offset: -1px;\n    opacity: 1 !important;\n    outline-color: var(--theia-focusBorder);\n}\n\n.theia-settings-container .theia-input[type=\"text\"] {\n    border: 1px solid var(--theia-dropdown-border);\n}\n\n.theia-settings-container .theia-input[type=\"checkbox\"]:focus, \n.theia-settings-container .theia-input[type=\"number\"]:focus {\n    outline-width: 2px;\n}\n\n/* Remove the spinners from input[type = number] on Firefox. */\n.theia-settings-container .theia-input[type=\"number\"] {\n    -webkit-appearance: textfield;\n    border: 1px solid var(--theia-dropdown-border);\n}\n\n/* Remove the webkit spinners from input[type = number] on all browsers except Firefox. */\n.theia-settings-container input::-webkit-outer-spin-button,\n.theia-settings-container input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.theia-settings-container .pref-content-container .pref-input .pref-input-container .pref-error-notification {\n    border-style: solid;\n    border-color: var(--theia-inputValidation-errorBorder);\n    background-color: var(--theia-inputValidation-errorBackground);\n    width: 100%;\n    box-sizing: border-box;\n    padding: var(--theia-ui-padding);\n}\n\n.theia-settings-container .pref-content-container .pref-input .pref-input-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.theia-settings-container .pref-content-container a.theia-json-input {\n    text-decoration: underline;\n}\n\n.theia-settings-container .pref-content-container a.theia-json-input:hover {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.theia-settings-container .pref-content-container {\n    width: 100%;\n}\n\n.theia-settings-container .pref-content-container .pref-input {\n    padding: var(--theia-ui-padding) 0;\n    width: 100%;\n    max-width: 320px;\n}\n\n.theia-settings-container .pref-content-container .pref-input>select,\n.theia-settings-container .pref-content-container .pref-input>input {\n    width: 100%;\n}\n\n\n/* These specifications for the boolean class ensure that the\n    checkbox is rendered to the left of the description.\n*/\n.theia-settings-container .pref-content-container.boolean {\n    display: grid;\n    grid-template-columns: 30px 1fr;\n}\n\n.theia-settings-container .pref-content-container.boolean .pref-description {\n    grid-column-start: 2;\n    grid-row-start: 1;\n}\n\n.theia-settings-container .pref-content-container.boolean .pref-input {\n    grid-column-start: 1;\n    grid-row-start: 1;\n    margin: 0;\n}\n\n.theia-settings-container .settings-section>li:last-child {\n    margin-bottom: 20px;\n}\n\n.theia-settings-container .settings-scope-underlined {\n    text-decoration: underline;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/preferences/src/browser/style/preference-array.css":
/*!************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/preferences/src/browser/style/preference-array.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2020 Ericsson and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-settings-container .preference-array {\n  list-style: none;\n  padding   : 0;\n}\n\n.theia-settings-container .preference-array-element {\n  display          : -webkit-box;\n  display          : -ms-flexbox;\n  display          : flex;\n  -webkit-box-pack : justify;\n  -ms-flex-pack    : justify;\n  justify-content  : space-between;\n  -webkit-box-align: center;\n  -ms-flex-align   : center;\n  align-items      : center;\n  padding          : calc(var(--thiea-ui-padding) / 2) var(--thiea-ui-padding);\n  border-bottom    : var(--theia-panel-border) 2px solid;\n}\n\n.theia-settings-container .pref-input li:nth-last-child(2) {\n  border-bottom: none;\n}\n\n.theia-settings-container .pref-input li:last-child {\n  display          : -webkit-box;\n  display          : -ms-flexbox;\n  display          : flex;\n  -webkit-box-align: center;\n  -ms-flex-align   : center;\n  align-items      : center;\n}\n\n.theia-settings-container .preference-array-element:hover {\n  background-color: rgba(50%, 50%, 50%, 0.1);\n}\n\n.theia-settings-container .preference-array-element-btn {\n  width            : 1.5em;\n  height           : 1.5em;\n  display          : -webkit-box;\n  display          : -ms-flexbox;\n  display          : flex;\n  -webkit-box-pack : center;\n  -ms-flex-pack    : center;\n  justify-content  : center;\n  -webkit-box-align: center;\n  -ms-flex-align   : center;\n  align-items      : center;\n}\n\n.theia-settings-container .preference-array-element .preference-array-element-btn {\n  opacity: 0;\n}\n\n.theia-settings-container .preference-array-element:hover .preference-array-element-btn {\n  opacity: 1;\n}\n\n.theia-settings-container .preference-array-element-btn:hover {\n  background-color: rgba(50%, 50%, 50%, 0.1);\n  cursor          : pointer;\n}\n\n.theia-settings-container .preference-array .add-btn {\n  margin-left : calc((var(--theia-icon-size) + 4px) * -1);\n  margin-right: 4px;\n  width       : var(--theia-icon-size);\n  height      : var(--theia-icon-size);\n}\n\n.theia-settings-container .preference-array-clear-item {\n  background: var(--theia-icon-close) no-repeat;\n  width     : var(--theia-icon-size);\n  height    : var(--theia-icon-size);\n}\n\n.theia-settings-container .preference-array-input {\n  padding-right: calc(var(--theia-icon-size) + var(--thiea-ui-padding));\n  width        : 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/preferences/src/browser/style/preference-context-menu.css":
/*!*******************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/preferences/src/browser/style/preference-context-menu.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2020 Ericsson and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-settings-container .settings-context-menu-container {\n  position: relative;\n  padding-left: var(--theia-ui-padding);\n}\n\n.theia-settings-container .settings-context-menu-btn {\n  cursor: pointer;\n}\n\n.theia-settings-container .settings-context-menu {\n  position: absolute;\n  width: var(--theia-settingsSidebar-width);\n  list-style: none;\n  padding: var(--theia-ui-padding);\n  bottom: calc(100% + 10px);\n  left: -10px;\n  z-index: 9999;\n  background-color: var(--theia-menu-background);\n}\n\n.theia-settings-container .settings-context-menu:before {\n  content: \"\";\n  position: absolute;\n  left: 10px;\n  bottom: -10px;\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid var(--theia-menu-background);\n}\n\n.theia-settings-container .settings-context-menu li {\n  padding: var(--theia-ui-padding);\n}\n\n.theia-settings-container .settings-context-menu li:hover {\n  background-color: var(--theia-menu-selectionBackground);\n}\n\n.theia-settings-container .settings-context-menu i {\n  padding-right: var(--theia-ui-padding);\n  width: var(--theia-icon-size);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.theia-settings-container .pref-context-menu-btn {\n  margin-left: 5px;\n}\n\n.theia-settings-container .pref-context-menu-btn:hover {\n  background-color: rgba(50%, 50%, 50%, 0.1);\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/preferences/src/browser/style/preference-object.css":
/*!*************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/preferences/src/browser/style/preference-object.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2020 Ericsson and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-settings-container .object-preference-input-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n.theia-settings-container .object-preference-input {\n  width: 100%;\n  max-height: 250px;\n  resize: none;\n  color: var(--theia-settings-textInputForeground);\n  background-color: var(--theia-settings-textInputBackground);\n  border-color: var(--theia-panel-border);\n  font-size: var(--theia-code-font-size);\n  margin-bottom: 10px;\n}\n\n.theia-settings-container .object-preference-input-btn-toggle {\n  padding: 0 calc(var(--theia-ui-padding) / 2);\n}\n\n.theia-settings-container .object-preference-input-btn-toggle-icon {\n  display: inline-block;\n  background: var(--theia-icon-open-json) no-repeat;\n  background-position-y: 1px;\n  height: var(--theia-icon-size);\n  width: var(--theia-icon-size);\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/preferences/src/browser/style/search-input.css":
/*!********************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/preferences/src/browser/style/search-input.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2020 Ericsson and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-settings-container .settings-search-container {\n  width: 100%;\n  position: relative;\n}\n\n.theia-settings-container .settings-search-container .settings-search-input {\n  width: 100%;\n  text-indent: 8px;\n  padding: calc(var(--theia-ui-padding) / 2) 0;\n  box-sizing: border-box;\n  border: 1px solid var(--theia-dropdown-border);\n}\n\n.theia-settings-container .settings-search-container .settings-search-icon {\n  position: absolute;\n  height: 100%;\n  left: 8px;\n  font-size: var(--theia-ui-font-size0);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=21.bundle.js.map