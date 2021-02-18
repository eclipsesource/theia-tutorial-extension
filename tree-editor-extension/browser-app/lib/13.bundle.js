(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "../node_modules/@theia/markers/lib/browser/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@theia/markers/lib/browser/index.js ***!
  \***********************************************************/
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
__exportStar(__webpack_require__(/*! ./marker-manager */ "../node_modules/@theia/markers/lib/browser/marker-manager.js"), exports);
__exportStar(__webpack_require__(/*! ./problem/problem-manager */ "../node_modules/@theia/markers/lib/browser/problem/problem-manager.js"), exports);


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-editor-model.js":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-editor-model.js ***!
  \************************************************************************/
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
exports.MonacoEditorModel = exports.TextDocumentSaveReason = void 0;
var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../node_modules/vscode-languageserver-protocol/lib/main.js");
Object.defineProperty(exports, "TextDocumentSaveReason", { enumerable: true, get: function () { return vscode_languageserver_protocol_1.TextDocumentSaveReason; } });
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var cancellation_1 = __webpack_require__(/*! @theia/core/lib/common/cancellation */ "../node_modules/@theia/core/lib/common/cancellation.js");
var resource_1 = __webpack_require__(/*! @theia/core/lib/common/resource */ "../node_modules/@theia/core/lib/common/resource.js");
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "../node_modules/vscode-languageserver-types/lib/esm/main.js");
var MonacoEditorModel = /** @class */ (function () {
    function MonacoEditorModel(resource, m2p, p2m, logger, editorPreferences) {
        var _this = this;
        this.resource = resource;
        this.m2p = m2p;
        this.p2m = p2m;
        this.logger = logger;
        this.editorPreferences = editorPreferences;
        this.autoSave = 'on';
        this.autoSaveDelay = 500;
        /* @deprecated there is no general save timeout, each participant should introduce a sensible timeout  */
        this.onWillSaveLoopTimeOut = 1500;
        this.toDispose = new disposable_1.DisposableCollection();
        this.toDisposeOnAutoSave = new disposable_1.DisposableCollection();
        this.onDidChangeContentEmitter = new event_1.Emitter();
        this.onDidChangeContent = this.onDidChangeContentEmitter.event;
        this.onDidSaveModelEmitter = new event_1.Emitter();
        this.onDidSaveModel = this.onDidSaveModelEmitter.event;
        this.onWillSaveModelEmitter = new event_1.Emitter();
        this.onWillSaveModel = this.onWillSaveModelEmitter.event;
        this.onDidChangeValidEmitter = new event_1.Emitter();
        this.onDidChangeValid = this.onDidChangeValidEmitter.event;
        this.onDidChangeEncodingEmitter = new event_1.Emitter();
        this.onDidChangeEncoding = this.onDidChangeEncodingEmitter.event;
        /**
         * Use `valid` to access it.
         * Use `setValid` to mutate it.
         */
        this._valid = false;
        this._dirty = false;
        this.onDirtyChangedEmitter = new event_1.Emitter();
        this.pendingOperation = Promise.resolve();
        this.syncCancellationTokenSource = new cancellation_1.CancellationTokenSource();
        this.ignoreDirtyEdits = false;
        this.saveCancellationTokenSource = new cancellation_1.CancellationTokenSource();
        this.ignoreContentChanges = false;
        this.contentChanges = [];
        this.toDispose.push(resource);
        this.toDispose.push(this.toDisposeOnAutoSave);
        this.toDispose.push(this.onDidChangeContentEmitter);
        this.toDispose.push(this.onDidSaveModelEmitter);
        this.toDispose.push(this.onWillSaveModelEmitter);
        this.toDispose.push(this.onDirtyChangedEmitter);
        this.toDispose.push(this.onDidChangeValidEmitter);
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.cancelSave(); }));
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.cancelSync(); }));
        this.resolveModel = this.readContents().then(function (content) { return _this.initialize(content || ''); });
    }
    MonacoEditorModel.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    MonacoEditorModel.prototype.setEncoding = function (encoding, mode) {
        if (mode === 1 /* Decode */ && this.dirty) {
            return Promise.resolve();
        }
        if (!this.setPreferredEncoding(encoding)) {
            return Promise.resolve();
        }
        if (mode === 1 /* Decode */) {
            return this.sync();
        }
        return this.scheduleSave(vscode_languageserver_protocol_1.TextDocumentSaveReason.Manual, this.cancelSave(), true);
    };
    MonacoEditorModel.prototype.getEncoding = function () {
        return this.preferredEncoding || this.contentEncoding;
    };
    MonacoEditorModel.prototype.setPreferredEncoding = function (encoding) {
        if (encoding === this.preferredEncoding || (!this.preferredEncoding && encoding === this.contentEncoding)) {
            return false;
        }
        this.preferredEncoding = encoding;
        this.onDidChangeEncodingEmitter.fire(encoding);
        return true;
    };
    MonacoEditorModel.prototype.updateContentEncoding = function () {
        var contentEncoding = this.resource.encoding;
        if (!contentEncoding || this.contentEncoding === contentEncoding) {
            return;
        }
        this.contentEncoding = contentEncoding;
        if (!this.preferredEncoding) {
            this.onDidChangeEncodingEmitter.fire(contentEncoding);
        }
    };
    /**
     * #### Important
     * Only this method can create an instance of `monaco.editor.IModel`,
     * there should not be other calls to `monaco.editor.createModel`.
     */
    MonacoEditorModel.prototype.initialize = function (value) {
        var _this = this;
        if (!this.toDispose.disposed) {
            var uri = monaco.Uri.parse(this.resource.uri.toString());
            var firstLine = void 0;
            if (typeof value === 'string') {
                firstLine = value;
                var firstLF = value.indexOf('\n');
                if (firstLF !== -1) {
                    firstLine = value.substring(0, firstLF);
                }
            }
            else {
                firstLine = value.getFirstLineText(1000);
            }
            var languageSelection = monaco.services.StaticServices.modeService.get().createByFilepathOrFirstLine(uri, firstLine);
            this.model = monaco.services.StaticServices.modelService.get().createModel(value, languageSelection, uri);
            this.resourceVersion = this.resource.version;
            this.updateSavedVersionId();
            this.toDispose.push(this.model);
            this.toDispose.push(this.model.onDidChangeContent(function (event) { return _this.fireDidChangeContent(event); }));
            if (this.resource.onDidChangeContents) {
                this.toDispose.push(this.resource.onDidChangeContents(function () { return _this.sync(); }));
            }
        }
    };
    Object.defineProperty(MonacoEditorModel.prototype, "valid", {
        /**
         * Whether it is possible to load content from the underlying resource.
         */
        get: function () {
            return this._valid;
        },
        enumerable: false,
        configurable: true
    });
    MonacoEditorModel.prototype.setValid = function (valid) {
        if (valid === this._valid) {
            return;
        }
        this._valid = valid;
        this.onDidChangeValidEmitter.fire(undefined);
    };
    Object.defineProperty(MonacoEditorModel.prototype, "dirty", {
        get: function () {
            return this._dirty;
        },
        enumerable: false,
        configurable: true
    });
    MonacoEditorModel.prototype.setDirty = function (dirty) {
        if (dirty === this._dirty) {
            return;
        }
        this._dirty = dirty;
        if (dirty === false) {
            this.updateSavedVersionId();
        }
        this.onDirtyChangedEmitter.fire(undefined);
    };
    MonacoEditorModel.prototype.updateSavedVersionId = function () {
        this.bufferSavedVersionId = this.model.getAlternativeVersionId();
    };
    Object.defineProperty(MonacoEditorModel.prototype, "onDirtyChanged", {
        get: function () {
            return this.onDirtyChangedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoEditorModel.prototype, "uri", {
        get: function () {
            return this.resource.uri.toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoEditorModel.prototype, "languageId", {
        get: function () {
            return this._languageId !== undefined ? this._languageId : this.model.getModeId();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * It's a hack to dispatch close notification with an old language id, don't use it.
     */
    MonacoEditorModel.prototype.setLanguageId = function (languageId) {
        this._languageId = languageId;
    };
    Object.defineProperty(MonacoEditorModel.prototype, "version", {
        get: function () {
            return this.model.getVersionId();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Return selected text by Range or all text by default
     */
    MonacoEditorModel.prototype.getText = function (range) {
        if (!range) {
            return this.model.getValue();
        }
        else {
            return this.model.getValueInRange(this.p2m.asRange(range));
        }
    };
    MonacoEditorModel.prototype.positionAt = function (offset) {
        var _a = this.model.getPositionAt(offset), lineNumber = _a.lineNumber, column = _a.column;
        return this.m2p.asPosition(lineNumber, column);
    };
    MonacoEditorModel.prototype.offsetAt = function (position) {
        return this.model.getOffsetAt(this.p2m.asPosition(position));
    };
    Object.defineProperty(MonacoEditorModel.prototype, "lineCount", {
        get: function () {
            return this.model.getLineCount();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves a line in a text document expressed as a one-based position.
     */
    MonacoEditorModel.prototype.getLineContent = function (lineNumber) {
        return this.model.getLineContent(lineNumber);
    };
    MonacoEditorModel.prototype.getLineMaxColumn = function (lineNumber) {
        return this.model.getLineMaxColumn(lineNumber);
    };
    Object.defineProperty(MonacoEditorModel.prototype, "readOnly", {
        get: function () {
            return this.resource.saveContents === undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoEditorModel.prototype, "onDispose", {
        get: function () {
            return this.toDispose.onDispose;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoEditorModel.prototype, "textEditorModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Find all matches in an editor for the given options.
     * @param options the options for finding matches.
     *
     * @returns the list of matches.
     */
    MonacoEditorModel.prototype.findMatches = function (options) {
        var wordSeparators = this.editorPreferences ? this.editorPreferences['editor.wordSeparators'] : browser_1.DEFAULT_WORD_SEPARATORS;
        var results = this.model.findMatches(options.searchString, false, options.isRegex, options.matchCase, 
        // eslint-disable-next-line no-null/no-null
        options.matchWholeWord ? wordSeparators : null, true, options.limitResultCount);
        var extractedMatches = [];
        results.forEach(function (r) {
            if (r.matches) {
                extractedMatches.push({
                    matches: r.matches,
                    range: vscode_languageserver_types_1.Range.create(r.range.startLineNumber, r.range.startColumn, r.range.endLineNumber, r.range.endColumn)
                });
            }
        });
        return extractedMatches;
    };
    MonacoEditorModel.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveModel];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    MonacoEditorModel.prototype.save = function (options) {
        return this.scheduleSave(vscode_languageserver_protocol_1.TextDocumentSaveReason.Manual, undefined, undefined, options);
    };
    MonacoEditorModel.prototype.run = function (operation) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.toDispose.disposed) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.pendingOperation = this.pendingOperation.then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, operation()];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_1 = _a.sent();
                                    console.error(e_1);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    MonacoEditorModel.prototype.cancelSync = function () {
        this.trace(function (log) { return log('MonacoEditorModel.cancelSync'); });
        this.syncCancellationTokenSource.cancel();
        this.syncCancellationTokenSource = new cancellation_1.CancellationTokenSource();
        return this.syncCancellationTokenSource.token;
    };
    MonacoEditorModel.prototype.sync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                token = this.cancelSync();
                return [2 /*return*/, this.run(function () { return _this.doSync(token); })];
            });
        });
    };
    MonacoEditorModel.prototype.doSync = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.trace(function (log) { return log('MonacoEditorModel.doSync - enter'); });
                        if (token.isCancellationRequested) {
                            this.trace(function (log) { return log('MonacoEditorModel.doSync - exit - cancelled'); });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.readContents()];
                    case 1:
                        value = _a.sent();
                        if (value === undefined) {
                            this.trace(function (log) { return log('MonacoEditorModel.doSync - exit - resource not found'); });
                            return [2 /*return*/];
                        }
                        if (token.isCancellationRequested) {
                            this.trace(function (log) { return log('MonacoEditorModel.doSync - exit - cancelled while looking for a resource'); });
                            return [2 /*return*/];
                        }
                        if (this._dirty) {
                            this.trace(function (log) { return log('MonacoEditorModel.doSync - exit - pending dirty changes'); });
                            return [2 /*return*/];
                        }
                        this.resourceVersion = this.resource.version;
                        this.updateModel(function () { return monaco.services.StaticServices.modelService.get().updateModel(_this.model, value); }, {
                            ignoreDirty: true,
                            ignoreContentChanges: true
                        });
                        this.trace(function (log) { return log('MonacoEditorModel.doSync - exit'); });
                        return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.readContents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, content, value, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        options = { encoding: this.getEncoding() };
                        return [4 /*yield*/, (this.resource.readStream ? this.resource.readStream(options) : this.resource.readContents(options))];
                    case 1:
                        content = _a.sent();
                        value = void 0;
                        if (typeof content === 'string') {
                            value = content;
                        }
                        else {
                            value = monaco.textModel.createTextBufferFactoryFromStream(content);
                        }
                        this.updateContentEncoding();
                        this.setValid(true);
                        return [2 /*return*/, value];
                    case 2:
                        e_2 = _a.sent();
                        this.setValid(false);
                        if (resource_1.ResourceError.NotFound.is(e_2)) {
                            return [2 /*return*/, undefined];
                        }
                        throw e_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.markAsDirty = function () {
        this.trace(function (log) { return log('MonacoEditorModel.markAsDirty - enter'); });
        if (this.ignoreDirtyEdits) {
            this.trace(function (log) { return log('MonacoEditorModel.markAsDirty - exit - ignoring dirty changes enabled'); });
            return;
        }
        this.cancelSync();
        this.setDirty(true);
        this.doAutoSave();
        this.trace(function (log) { return log('MonacoEditorModel.markAsDirty - exit'); });
    };
    MonacoEditorModel.prototype.doAutoSave = function () {
        var _this = this;
        if (this.autoSave === 'on') {
            var token_1 = this.cancelSave();
            this.toDisposeOnAutoSave.dispose();
            var handle_1 = window.setTimeout(function () {
                _this.scheduleSave(vscode_languageserver_protocol_1.TextDocumentSaveReason.AfterDelay, token_1);
            }, this.autoSaveDelay);
            this.toDisposeOnAutoSave.push(disposable_1.Disposable.create(function () {
                return window.clearTimeout(handle_1);
            }));
        }
    };
    MonacoEditorModel.prototype.cancelSave = function () {
        this.trace(function (log) { return log('MonacoEditorModel.cancelSave'); });
        this.saveCancellationTokenSource.cancel();
        this.saveCancellationTokenSource = new cancellation_1.CancellationTokenSource();
        return this.saveCancellationTokenSource.token;
    };
    MonacoEditorModel.prototype.scheduleSave = function (reason, token, overwriteEncoding, options) {
        var _this = this;
        if (token === void 0) { token = this.cancelSave(); }
        return this.run(function () { return _this.doSave(reason, token, overwriteEncoding, options); });
    };
    MonacoEditorModel.prototype.pushContentChanges = function (contentChanges) {
        var _a;
        if (!this.ignoreContentChanges) {
            (_a = this.contentChanges).push.apply(_a, __spread(contentChanges));
        }
    };
    MonacoEditorModel.prototype.fireDidChangeContent = function (event) {
        this.trace(function (log) { return log("MonacoEditorModel.fireDidChangeContent - enter - " + JSON.stringify(event, undefined, 2)); });
        if (this.model.getAlternativeVersionId() === this.bufferSavedVersionId) {
            this.setDirty(false);
        }
        else {
            this.markAsDirty();
        }
        var changeContentEvent = this.asContentChangedEvent(event);
        this.onDidChangeContentEmitter.fire(changeContentEvent);
        this.pushContentChanges(changeContentEvent.contentChanges);
        this.trace(function (log) { return log('MonacoEditorModel.fireDidChangeContent - exit'); });
    };
    MonacoEditorModel.prototype.asContentChangedEvent = function (event) {
        var _this = this;
        var contentChanges = event.changes.map(function (change) { return _this.asTextDocumentContentChangeEvent(change); });
        return { model: this, contentChanges: contentChanges };
    };
    MonacoEditorModel.prototype.asTextDocumentContentChangeEvent = function (change) {
        var range = this.m2p.asRange(change.range);
        var rangeLength = change.rangeLength;
        var text = change.text;
        return { range: range, rangeLength: rangeLength, text: text };
    };
    MonacoEditorModel.prototype.applyEdits = function (operations, options) {
        var _this = this;
        return this.updateModel(function () { return _this.model.applyEdits(operations); }, options);
    };
    MonacoEditorModel.prototype.updateModel = function (doUpdate, options) {
        var resolvedOptions = __assign({ ignoreDirty: false, ignoreContentChanges: false }, options);
        var _a = this, ignoreDirtyEdits = _a.ignoreDirtyEdits, ignoreContentChanges = _a.ignoreContentChanges;
        this.ignoreDirtyEdits = resolvedOptions.ignoreDirty;
        this.ignoreContentChanges = resolvedOptions.ignoreContentChanges;
        try {
            return doUpdate();
        }
        finally {
            this.ignoreDirtyEdits = ignoreDirtyEdits;
            this.ignoreContentChanges = ignoreContentChanges;
        }
    };
    MonacoEditorModel.prototype.doSave = function (reason, token, overwriteEncoding, options) {
        return __awaiter(this, void 0, void 0, function () {
            var changes, contentLength, content, encoding, version, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (token.isCancellationRequested || !this.resource.saveContents) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.fireWillSaveModel(reason, token, options)];
                    case 1:
                        _a.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        changes = __spread(this.contentChanges);
                        if (changes.length === 0 && !overwriteEncoding && reason !== vscode_languageserver_protocol_1.TextDocumentSaveReason.Manual) {
                            return [2 /*return*/];
                        }
                        contentLength = this.model.getValueLength();
                        content = this.model.createSnapshot() || this.model.getValue();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        encoding = this.getEncoding();
                        version = this.resourceVersion;
                        return [4 /*yield*/, resource_1.Resource.save(this.resource, { changes: changes, content: content, contentLength: contentLength, options: { encoding: encoding, overwriteEncoding: overwriteEncoding, version: version } }, token)];
                    case 3:
                        _a.sent();
                        this.contentChanges.splice(0, changes.length);
                        this.resourceVersion = this.resource.version;
                        this.updateContentEncoding();
                        this.setValid(true);
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        this.setDirty(false);
                        this.fireDidSaveModel();
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        if (!resource_1.ResourceError.OutOfSync.is(e_3)) {
                            throw e_3;
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.fireWillSaveModel = function (reason, token, options) {
        return __awaiter(this, void 0, void 0, function () {
            var firing, e_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firing = this.onWillSaveModelEmitter.sequence(function (listener) { return __awaiter(_this, void 0, void 0, function () {
                            var waitables, version, event, edits;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (token.isCancellationRequested) {
                                            return [2 /*return*/, false];
                                        }
                                        waitables = [];
                                        version = this.version;
                                        event = {
                                            model: this,
                                            reason: reason, options: options,
                                            waitUntil: function (thenable) {
                                                if (Object.isFrozen(waitables)) {
                                                    throw new Error('waitUntil cannot be called asynchronously.');
                                                }
                                                waitables.push(thenable);
                                            }
                                        };
                                        // Fire.
                                        try {
                                            listener(event);
                                        }
                                        catch (err) {
                                            console.error(err);
                                            return [2 /*return*/, true];
                                        }
                                        // Asynchronous calls to `waitUntil` should fail.
                                        Object.freeze(waitables);
                                        return [4 /*yield*/, Promise.all(waitables).then(function (allOperations) {
                                                var _a;
                                                return (_a = []).concat.apply(_a, __spread(allOperations));
                                            })];
                                    case 1:
                                        edits = _a.sent();
                                        if (token.isCancellationRequested) {
                                            return [2 /*return*/, false];
                                        }
                                        // In a perfect world, we should only apply edits if document is clean.
                                        if (version !== this.version) {
                                            console.error('onWillSave listeners should provide edits, not directly alter the document.');
                                        }
                                        // Finally apply edits provided by this listener before firing the next.
                                        if (edits && edits.length > 0) {
                                            this.applyEdits(edits, {
                                                ignoreDirty: true,
                                            });
                                        }
                                        return [2 /*return*/, true];
                                }
                            });
                        }); });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, firing];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        console.error(e_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.fireDidSaveModel = function () {
        this.onDidSaveModelEmitter.fire(this.model);
    };
    MonacoEditorModel.prototype.revert = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var soft, dirty;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.trace(function (log) { return log('MonacoEditorModel.revert - enter'); });
                        this.cancelSave();
                        soft = options && options.soft;
                        if (!(soft !== true)) return [3 /*break*/, 4];
                        dirty = this._dirty;
                        this._dirty = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, this.sync()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this._dirty = dirty;
                        return [7 /*endfinally*/];
                    case 4:
                        this.setDirty(false);
                        this.trace(function (log) { return log('MonacoEditorModel.revert - exit'); });
                        return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.createSnapshot = function () {
        return {
            value: this.getText()
        };
    };
    MonacoEditorModel.prototype.applySnapshot = function (snapshot) {
        this.model.setValue(snapshot.value);
    };
    MonacoEditorModel.prototype.trace = function (loggable) {
        var _this = this;
        if (this.logger) {
            this.logger.debug(function (log) {
                return loggable(function (message) {
                    var params = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        params[_i - 1] = arguments[_i];
                    }
                    return log.apply(void 0, __spread([message], params, [_this.resource.uri.toString(true)]));
                });
            });
        }
    };
    return MonacoEditorModel;
}());
exports.MonacoEditorModel = MonacoEditorModel;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js":
/*!******************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-editor.js ***!
  \******************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonacoEditor = exports.MonacoEditorServices = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var domutils_1 = __webpack_require__(/*! @phosphor/domutils */ "../node_modules/@phosphor/domutils/lib/index.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "../node_modules/@theia/core/lib/browser/context-key-service.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var monaco_to_protocol_converter_1 = __webpack_require__(/*! ./monaco-to-protocol-converter */ "../node_modules/@theia/monaco/lib/browser/monaco-to-protocol-converter.js");
var protocol_to_monaco_converter_1 = __webpack_require__(/*! ./protocol-to-monaco-converter */ "../node_modules/@theia/monaco/lib/browser/protocol-to-monaco-converter.js");
var encodings_1 = __webpack_require__(/*! @theia/core/lib/common/encodings */ "../node_modules/@theia/core/lib/common/encodings.js");
var MonacoEditorServices = /** @class */ (function () {
    function MonacoEditorServices(services) {
        Object.assign(this, services);
    }
    __decorate([
        inversify_1.inject(monaco_to_protocol_converter_1.MonacoToProtocolConverter),
        __metadata("design:type", monaco_to_protocol_converter_1.MonacoToProtocolConverter)
    ], MonacoEditorServices.prototype, "m2p", void 0);
    __decorate([
        inversify_1.inject(protocol_to_monaco_converter_1.ProtocolToMonacoConverter),
        __metadata("design:type", protocol_to_monaco_converter_1.ProtocolToMonacoConverter)
    ], MonacoEditorServices.prototype, "p2m", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], MonacoEditorServices.prototype, "contextKeyService", void 0);
    MonacoEditorServices = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.unmanaged()),
        __metadata("design:paramtypes", [MonacoEditorServices])
    ], MonacoEditorServices);
    return MonacoEditorServices;
}());
exports.MonacoEditorServices = MonacoEditorServices;
var MonacoEditor = /** @class */ (function (_super) {
    __extends(MonacoEditor, _super);
    function MonacoEditor(uri, document, node, services, options, override) {
        var _this = _super.call(this, services) || this;
        _this.uri = uri;
        _this.document = document;
        _this.node = node;
        _this.toDispose = new common_1.DisposableCollection();
        _this.onCursorPositionChangedEmitter = new common_1.Emitter();
        _this.onSelectionChangedEmitter = new common_1.Emitter();
        _this.onFocusChangedEmitter = new common_1.Emitter();
        _this.onDocumentContentChangedEmitter = new common_1.Emitter();
        _this.onMouseDownEmitter = new common_1.Emitter();
        _this.onLanguageChangedEmitter = new common_1.Emitter();
        _this.onLanguageChanged = _this.onLanguageChangedEmitter.event;
        _this.onScrollChangedEmitter = new common_1.Emitter();
        _this.onEncodingChanged = _this.document.onDidChangeEncoding;
        _this.documents = new Set();
        /* `true` because it is derived from an URI during the instantiation */
        _this._languageAutoDetected = true;
        _this.toDispose.pushAll([
            _this.onCursorPositionChangedEmitter,
            _this.onSelectionChangedEmitter,
            _this.onFocusChangedEmitter,
            _this.onDocumentContentChangedEmitter,
            _this.onMouseDownEmitter,
            _this.onLanguageChangedEmitter,
            _this.onScrollChangedEmitter
        ]);
        _this.documents.add(document);
        _this.autoSizing = options && options.autoSizing !== undefined ? options.autoSizing : false;
        _this.minHeight = options && options.minHeight !== undefined ? options.minHeight : -1;
        _this.maxHeight = options && options.maxHeight !== undefined ? options.maxHeight : -1;
        _this.toDispose.push(_this.create(options, override));
        _this.addHandlers(_this.editor);
        return _this;
    }
    MonacoEditor.prototype.getEncoding = function () {
        return this.document.getEncoding() || encodings_1.UTF8;
    };
    MonacoEditor.prototype.setEncoding = function (encoding, mode) {
        return this.document.setEncoding(encoding, mode);
    };
    MonacoEditor.prototype.create = function (options, override) {
        return this.editor = monaco.editor.create(this.node, __assign(__assign({}, options), { lightbulb: { enabled: true }, fixedOverflowWidgets: true, scrollbar: {
                useShadows: false,
                verticalHasArrows: false,
                horizontalHasArrows: false,
                verticalScrollbarSize: 10,
                horizontalScrollbarSize: 10
            } }), override);
    };
    MonacoEditor.prototype.addHandlers = function (codeEditor) {
        var _this = this;
        this.toDispose.push(codeEditor.onDidChangeModelLanguage(function (e) {
            return _this.fireLanguageChanged(e.newLanguage);
        }));
        this.toDispose.push(codeEditor.onDidChangeConfiguration(function () { return _this.refresh(); }));
        this.toDispose.push(codeEditor.onDidChangeModel(function () { return _this.refresh(); }));
        this.toDispose.push(codeEditor.onDidChangeModelContent(function (e) {
            _this.refresh();
            _this.onDocumentContentChangedEmitter.fire({ document: _this.document, contentChanges: e.changes.map(_this.mapModelContentChange.bind(_this)) });
        }));
        this.toDispose.push(codeEditor.onDidChangeCursorPosition(function () {
            return _this.onCursorPositionChangedEmitter.fire(_this.cursor);
        }));
        this.toDispose.push(codeEditor.onDidChangeCursorSelection(function () {
            return _this.onSelectionChangedEmitter.fire(_this.selection);
        }));
        this.toDispose.push(codeEditor.onDidFocusEditorText(function () {
            return _this.onFocusChangedEmitter.fire(_this.isFocused());
        }));
        this.toDispose.push(codeEditor.onDidBlurEditorText(function () {
            return _this.onFocusChangedEmitter.fire(_this.isFocused());
        }));
        this.toDispose.push(codeEditor.onMouseDown(function (e) {
            var _a = e.target, element = _a.element, position = _a.position, range = _a.range;
            _this.onMouseDownEmitter.fire({
                target: __assign(__assign({}, e.target), { element: element || undefined, mouseColumn: _this.m2p.asPosition(undefined, e.target.mouseColumn).character, range: range && _this.m2p.asRange(range) || undefined, position: position && _this.m2p.asPosition(position.lineNumber, position.column) || undefined }),
                event: e.event.browserEvent
            });
        }));
        this.toDispose.push(codeEditor.onDidScrollChange(function (e) {
            _this.onScrollChangedEmitter.fire(undefined);
        }));
    };
    MonacoEditor.prototype.getVisibleRanges = function () {
        var _this = this;
        return this.editor.getVisibleRanges().map(function (range) { return _this.m2p.asRange(range); });
    };
    MonacoEditor.prototype.mapModelContentChange = function (change) {
        return {
            range: this.m2p.asRange(change.range),
            rangeLength: change.rangeLength,
            text: change.text
        };
    };
    Object.defineProperty(MonacoEditor.prototype, "onDispose", {
        get: function () {
            return this.toDispose.onDispose;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onDocumentContentChanged", {
        get: function () {
            return this.onDocumentContentChangedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "cursor", {
        get: function () {
            var _a = this.editor.getPosition(), lineNumber = _a.lineNumber, column = _a.column;
            return this.m2p.asPosition(lineNumber, column);
        },
        set: function (cursor) {
            var position = this.p2m.asPosition(cursor);
            this.editor.setPosition(position);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onCursorPositionChanged", {
        get: function () {
            return this.onCursorPositionChangedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "selection", {
        get: function () {
            return this.m2p.asRange(this.editor.getSelection());
        },
        set: function (selection) {
            var range = this.p2m.asRange(selection);
            this.editor.setSelection(range);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onSelectionChanged", {
        get: function () {
            return this.onSelectionChangedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onScrollChanged", {
        get: function () {
            return this.onScrollChangedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    MonacoEditor.prototype.revealPosition = function (raw, options) {
        if (options === void 0) { options = { vertical: 'center' }; }
        var position = this.p2m.asPosition(raw);
        switch (options.vertical) {
            case 'auto':
                this.editor.revealPosition(position);
                break;
            case 'center':
                this.editor.revealPositionInCenter(position);
                break;
            case 'centerIfOutsideViewport':
                this.editor.revealPositionInCenterIfOutsideViewport(position);
                break;
        }
    };
    MonacoEditor.prototype.revealRange = function (raw, options) {
        if (options === void 0) { options = { at: 'center' }; }
        var range = this.p2m.asRange(raw);
        switch (options.at) {
            case 'top':
                this.editor.revealRangeAtTop(range);
                break;
            case 'center':
                this.editor.revealRangeInCenter(range);
                break;
            case 'centerIfOutsideViewport':
                this.editor.revealRangeInCenterIfOutsideViewport(range);
                break;
            case 'auto':
                this.editor.revealRange(range);
                break;
        }
    };
    MonacoEditor.prototype.focus = function () {
        /**
         * `this.editor.focus` forcefully changes the focus editor state,
         * regardless whether the textarea actually received the focus.
         * It could lead to issues like https://github.com/eclipse-theia/theia/issues/7902
         * Instead we focus the underlying textarea.
         */
        var node = this.editor.getDomNode();
        if (node) {
            var textarea = node.querySelector('textarea');
            textarea.focus();
        }
    };
    MonacoEditor.prototype.blur = function () {
        var node = this.editor.getDomNode();
        if (node) {
            var textarea = node.querySelector('textarea');
            textarea.blur();
        }
    };
    MonacoEditor.prototype.isFocused = function (_a) {
        var strict = (_a === void 0 ? { strict: false } : _a).strict;
        if (!this.editor.hasTextFocus()) {
            return false;
        }
        if (strict) {
            return !this.isSuggestWidgetVisible() && !this.isFindWidgetVisible() && !this.isRenameInputVisible();
        }
        return true;
    };
    Object.defineProperty(MonacoEditor.prototype, "onFocusChanged", {
        get: function () {
            return this.onFocusChangedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onMouseDown", {
        get: function () {
            return this.onMouseDownEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * `true` if the suggest widget is visible in the editor. Otherwise, `false`.
     */
    MonacoEditor.prototype.isSuggestWidgetVisible = function () {
        return this.contextKeyService.match('suggestWidgetVisible', this.editor.getDomNode() || this.node);
    };
    /**
     * `true` if the find (and replace) widget is visible in the editor. Otherwise, `false`.
     */
    MonacoEditor.prototype.isFindWidgetVisible = function () {
        return this.contextKeyService.match('findWidgetVisible', this.editor.getDomNode() || this.node);
    };
    /**
     * `true` if the name rename refactoring input HTML element is visible. Otherwise, `false`.
     */
    MonacoEditor.prototype.isRenameInputVisible = function () {
        return this.contextKeyService.match('renameInputVisible', this.editor.getDomNode() || this.node);
    };
    MonacoEditor.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoEditor.prototype.trigger = function (source, handlerId, payload) {
        this.editor.trigger(source, handlerId, payload);
    };
    MonacoEditor.prototype.getControl = function () {
        return this.editor;
    };
    MonacoEditor.prototype.refresh = function () {
        this.autoresize();
    };
    MonacoEditor.prototype.resizeToFit = function () {
        this.autoresize();
    };
    MonacoEditor.prototype.setSize = function (dimension) {
        this.resize(dimension);
    };
    MonacoEditor.prototype.autoresize = function () {
        if (this.autoSizing) {
            // eslint-disable-next-line no-null/no-null
            this.resize(null);
        }
    };
    MonacoEditor.prototype.resize = function (dimension) {
        if (this.node) {
            var layoutSize = this.computeLayoutSize(this.node, dimension);
            this.editor.layout(layoutSize);
        }
    };
    MonacoEditor.prototype.computeLayoutSize = function (hostNode, dimension) {
        if (dimension && dimension.width >= 0 && dimension.height >= 0) {
            return dimension;
        }
        var boxSizing = domutils_1.ElementExt.boxSizing(hostNode);
        var width = (!dimension || dimension.width < 0) ?
            this.getWidth(hostNode, boxSizing) :
            dimension.width;
        var height = (!dimension || dimension.height < 0) ?
            this.getHeight(hostNode, boxSizing) :
            dimension.height;
        return { width: width, height: height };
    };
    MonacoEditor.prototype.getWidth = function (hostNode, boxSizing) {
        return hostNode.offsetWidth - boxSizing.horizontalSum;
    };
    MonacoEditor.prototype.getHeight = function (hostNode, boxSizing) {
        if (!this.autoSizing) {
            return hostNode.offsetHeight - boxSizing.verticalSum;
        }
        var lineHeight = this.editor.getOption(monaco.editor.EditorOption.lineHeight);
        var lineCount = this.editor.getModel().getLineCount();
        var contentHeight = lineHeight * lineCount;
        var horizontalScrollbarHeight = this.editor.getLayoutInfo().horizontalScrollbarHeight;
        var editorHeight = contentHeight + horizontalScrollbarHeight;
        if (this.minHeight >= 0) {
            var minHeight = lineHeight * this.minHeight + horizontalScrollbarHeight;
            if (editorHeight < minHeight) {
                return minHeight;
            }
        }
        if (this.maxHeight >= 0) {
            var maxHeight = lineHeight * this.maxHeight + horizontalScrollbarHeight;
            return Math.min(maxHeight, editorHeight);
        }
        return editorHeight;
    };
    MonacoEditor.prototype.isActionSupported = function (id) {
        var action = this.editor.getAction(id);
        return !!action && action.isSupported();
    };
    MonacoEditor.prototype.runAction = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        action = this.editor.getAction(id);
                        if (!(action && action.isSupported())) return [3 /*break*/, 2];
                        return [4 /*yield*/, action.run()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MonacoEditor.prototype, "commandService", {
        get: function () {
            return this.editor._commandService;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "instantiationService", {
        get: function () {
            return this.editor._instantiationService;
        },
        enumerable: false,
        configurable: true
    });
    MonacoEditor.prototype.deltaDecorations = function (params) {
        var oldDecorations = params.oldDecorations;
        var newDecorations = this.toDeltaDecorations(params);
        return this.editor.deltaDecorations(oldDecorations, newDecorations);
    };
    MonacoEditor.prototype.toDeltaDecorations = function (params) {
        var _this = this;
        return params.newDecorations.map(function (decoration) { return (__assign(__assign({}, decoration), { range: _this.p2m.asRange(decoration.range) })); });
    };
    MonacoEditor.prototype.getLinesDecorations = function (startLineNumber, endLineNumber) {
        var _this = this;
        var toPosition = function (line) { return _this.p2m.asPosition({ line: line, character: 0 }); };
        var start = toPosition(startLineNumber).lineNumber;
        var end = toPosition(endLineNumber).lineNumber;
        return this.editor
            .getModel()
            .getLinesDecorations(start, end)
            .map(this.toEditorDecoration.bind(this));
    };
    MonacoEditor.prototype.toEditorDecoration = function (decoration) {
        var range = this.m2p.asRange(decoration.range);
        var id = decoration.id, options = decoration.options;
        return {
            options: options,
            range: range,
            id: id
        };
    };
    MonacoEditor.prototype.getVisibleColumn = function (position) {
        return this.editor.getVisibleColumnFromPosition(this.p2m.asPosition(position));
    };
    MonacoEditor.prototype.replaceText = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var edits;
            var _this = this;
            return __generator(this, function (_a) {
                edits = params.replaceOperations.map(function (param) {
                    var range = monaco.Range.fromPositions(_this.p2m.asPosition(param.range.start), _this.p2m.asPosition(param.range.end));
                    return {
                        forceMoveMarkers: true,
                        identifier: {
                            major: range.startLineNumber,
                            minor: range.startColumn
                        },
                        range: range,
                        text: param.text
                    };
                });
                return [2 /*return*/, this.editor.executeEdits(params.source, edits)];
            });
        });
    };
    MonacoEditor.prototype.executeEdits = function (edits) {
        return this.editor.executeEdits('MonacoEditor', this.p2m.asTextEdits(edits));
    };
    MonacoEditor.prototype.storeViewState = function () {
        return this.editor.saveViewState();
    };
    MonacoEditor.prototype.restoreViewState = function (state) {
        this.editor.restoreViewState(state);
    };
    Object.defineProperty(MonacoEditor.prototype, "languageAutoDetected", {
        get: function () {
            return this._languageAutoDetected;
        },
        enumerable: false,
        configurable: true
    });
    MonacoEditor.prototype.detectLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modeService, firstLine, model, language;
            return __generator(this, function (_a) {
                modeService = monaco.services.StaticServices.modeService.get();
                firstLine = this.document.textEditorModel.getLineContent(1);
                model = this.getControl().getModel();
                language = modeService.createByFilepathOrFirstLine(model && model.uri, firstLine);
                this.setLanguage(language.languageIdentifier.language);
                this._languageAutoDetected = true;
                return [2 /*return*/];
            });
        });
    };
    MonacoEditor.prototype.setLanguage = function (languageId) {
        var e_1, _a;
        try {
            for (var _b = __values(this.documents), _c = _b.next(); !_c.done; _c = _b.next()) {
                var document_1 = _c.value;
                monaco.editor.setModelLanguage(document_1.textEditorModel, languageId);
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
    MonacoEditor.prototype.fireLanguageChanged = function (languageId) {
        this._languageAutoDetected = false;
        this.onLanguageChangedEmitter.fire(languageId);
    };
    MonacoEditor.prototype.getResourceUri = function () {
        return this.uri;
    };
    MonacoEditor.prototype.createMoveToUri = function (resourceUri) {
        return this.uri.withPath(resourceUri.path);
    };
    return MonacoEditor;
}(MonacoEditorServices));
exports.MonacoEditor = MonacoEditor;
(function (MonacoEditor) {
    function getAll(manager) {
        return manager.all.map(function (e) { return get(e); }).filter(function (e) { return !!e; });
    }
    MonacoEditor.getAll = getAll;
    function getCurrent(manager) {
        return get(manager.currentEditor);
    }
    MonacoEditor.getCurrent = getCurrent;
    function getActive(manager) {
        return get(manager.activeEditor);
    }
    MonacoEditor.getActive = getActive;
    function get(editorWidget) {
        if (editorWidget && editorWidget.editor instanceof MonacoEditor) {
            return editorWidget.editor;
        }
        return undefined;
    }
    MonacoEditor.get = get;
    function findByDocument(manager, document) {
        return getAll(manager).filter(function (editor) { return editor.documents.has(document); });
    }
    MonacoEditor.findByDocument = findByDocument;
    function getWidgetFor(manager, control) {
        if (!control) {
            return undefined;
        }
        return manager.all.find(function (widget) {
            var editor = get(widget);
            return !!editor && editor.getControl() === control;
        });
    }
    MonacoEditor.getWidgetFor = getWidgetFor;
})(MonacoEditor = exports.MonacoEditor || (exports.MonacoEditor = {}));
exports.MonacoEditor = MonacoEditor;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js ***!
  \******************************************************************************/
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
exports.MonacoTextModelService = exports.MonacoEditorModelFactory = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_editor_model_1 = __webpack_require__(/*! ./monaco-editor-model */ "../node_modules/@theia/monaco/lib/browser/monaco-editor-model.js");
var monaco_to_protocol_converter_1 = __webpack_require__(/*! ./monaco-to-protocol-converter */ "../node_modules/@theia/monaco/lib/browser/monaco-to-protocol-converter.js");
var protocol_to_monaco_converter_1 = __webpack_require__(/*! ./protocol-to-monaco-converter */ "../node_modules/@theia/monaco/lib/browser/protocol-to-monaco-converter.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "../node_modules/@theia/core/lib/common/logger.js");
var application_protocol_1 = __webpack_require__(/*! @theia/core/lib/common/application-protocol */ "../node_modules/@theia/core/lib/common/application-protocol.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
exports.MonacoEditorModelFactory = Symbol('MonacoEditorModelFactory');
var MonacoTextModelService = /** @class */ (function () {
    function MonacoTextModelService() {
        var _this = this;
        this._ready = new promise_util_1.Deferred();
        /**
         * This component does some asynchronous work before being fully initialized.
         */
        this.ready = this._ready.promise;
        this._models = new core_1.ReferenceCollection(function (uri) { return _this.loadModel(new uri_1.default(uri)); });
        this.modelOptions = {
            'editor.tabSize': 'tabSize',
            'editor.insertSpaces': 'insertSpaces'
        };
    }
    MonacoTextModelService.prototype.init = function () {
        var _this = this;
        var isWindowsBackend = false;
        this.applicationServer.getBackendOS().then(function (os) {
            isWindowsBackend = os === core_1.OS.Type.Windows;
        }, function () { return undefined; }).then(function () { return _this._ready.resolve(); });
        var staticServices = monaco.services.StaticServices;
        if (staticServices.resourcePropertiesService) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var original = staticServices.resourcePropertiesService.get();
            original.getEOL = function () {
                var eol = _this.editorPreferences['files.eol'];
                if (eol) {
                    if (eol !== 'auto') {
                        return eol;
                    }
                }
                return isWindowsBackend ? '\r\n' : '\n';
            };
        }
    };
    Object.defineProperty(MonacoTextModelService.prototype, "models", {
        get: function () {
            return this._models.values();
        },
        enumerable: false,
        configurable: true
    });
    MonacoTextModelService.prototype.get = function (uri) {
        return this._models.get(uri);
    };
    Object.defineProperty(MonacoTextModelService.prototype, "onDidCreate", {
        get: function () {
            return this._models.onDidCreate;
        },
        enumerable: false,
        configurable: true
    });
    MonacoTextModelService.prototype.createModelReference = function (raw) {
        return this._models.acquire(raw.toString());
    };
    MonacoTextModelService.prototype.loadModel = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, model, disposable;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.editorPreferences.ready];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.resourceProvider(uri)];
                    case 3:
                        resource = _a.sent();
                        return [4 /*yield*/, this.createModel(resource)];
                    case 4: return [4 /*yield*/, (_a.sent()).load()];
                    case 5:
                        model = _a.sent();
                        this.updateModel(model);
                        model.textEditorModel.onDidChangeLanguage(function () { return _this.updateModel(model); });
                        disposable = this.editorPreferences.onPreferenceChanged(function (change) { return _this.updateModel(model, change); });
                        model.onDispose(function () { return disposable.dispose(); });
                        return [2 /*return*/, model];
                }
            });
        });
    };
    MonacoTextModelService.prototype.createModel = function (resource) {
        var factory = this.factories.getContributions().find(function (_a) {
            var scheme = _a.scheme;
            return resource.uri.scheme === scheme;
        });
        return factory ? factory.createModel(resource) : new monaco_editor_model_1.MonacoEditorModel(resource, this.m2p, this.p2m, this.logger, this.editorPreferences);
    };
    MonacoTextModelService.prototype.updateModel = function (model, change) {
        if (change) {
            if (!change.affects(model.uri, model.languageId)) {
                return;
            }
            if (change.preferenceName === 'editor.autoSave') {
                model.autoSave = this.editorPreferences.get('editor.autoSave', undefined, model.uri);
            }
            if (change.preferenceName === 'editor.autoSaveDelay') {
                model.autoSaveDelay = this.editorPreferences.get('editor.autoSaveDelay', undefined, model.uri);
            }
            var modelOption = this.modelOptions[change.preferenceName];
            if (modelOption) {
                var options = {};
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                options[modelOption] = change.newValue;
                model.textEditorModel.updateOptions(options);
            }
        }
        else {
            model.autoSave = this.editorPreferences.get('editor.autoSave', undefined, model.uri);
            model.autoSaveDelay = this.editorPreferences.get('editor.autoSaveDelay', undefined, model.uri);
            model.textEditorModel.updateOptions(this.getModelOptions(model));
        }
    };
    MonacoTextModelService.prototype.getModelOptions = function (arg) {
        var uri = typeof arg === 'string' ? arg : arg.uri;
        var overrideIdentifier = typeof arg === 'string' ? undefined : arg.languageId;
        return {
            tabSize: this.editorPreferences.get({ preferenceName: 'editor.tabSize', overrideIdentifier: overrideIdentifier }, undefined, uri),
            insertSpaces: this.editorPreferences.get({ preferenceName: 'editor.insertSpaces', overrideIdentifier: overrideIdentifier }, undefined, uri)
        };
    };
    MonacoTextModelService.prototype.registerTextModelContentProvider = function (scheme, provider) {
        return {
            dispose: function () {
                // no-op
            }
        };
    };
    __decorate([
        inversify_1.inject(core_1.ResourceProvider),
        __metadata("design:type", Function)
    ], MonacoTextModelService.prototype, "resourceProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorPreferences),
        __metadata("design:type", Object)
    ], MonacoTextModelService.prototype, "editorPreferences", void 0);
    __decorate([
        inversify_1.inject(monaco_to_protocol_converter_1.MonacoToProtocolConverter),
        __metadata("design:type", monaco_to_protocol_converter_1.MonacoToProtocolConverter)
    ], MonacoTextModelService.prototype, "m2p", void 0);
    __decorate([
        inversify_1.inject(protocol_to_monaco_converter_1.ProtocolToMonacoConverter),
        __metadata("design:type", protocol_to_monaco_converter_1.ProtocolToMonacoConverter)
    ], MonacoTextModelService.prototype, "p2m", void 0);
    __decorate([
        inversify_1.inject(core_1.ContributionProvider),
        inversify_1.named(exports.MonacoEditorModelFactory),
        __metadata("design:type", Object)
    ], MonacoTextModelService.prototype, "factories", void 0);
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], MonacoTextModelService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(application_protocol_1.ApplicationServer),
        __metadata("design:type", Object)
    ], MonacoTextModelService.prototype, "applicationServer", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MonacoTextModelService.prototype, "init", null);
    MonacoTextModelService = __decorate([
        inversify_1.injectable()
    ], MonacoTextModelService);
    return MonacoTextModelService;
}());
exports.MonacoTextModelService = MonacoTextModelService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-to-protocol-converter.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-to-protocol-converter.js ***!
  \*********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonacoToProtocolConverter = exports.MonacoRangeReplace = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
;
var MonacoRangeReplace;
(function (MonacoRangeReplace) {
    function is(v) {
        return v.insert !== undefined;
    }
    MonacoRangeReplace.is = is;
})(MonacoRangeReplace = exports.MonacoRangeReplace || (exports.MonacoRangeReplace = {}));
var MonacoToProtocolConverter = /** @class */ (function () {
    function MonacoToProtocolConverter() {
    }
    MonacoToProtocolConverter.prototype.asPosition = function (lineNumber, column) {
        var line = typeof lineNumber !== 'number' ? undefined : lineNumber - 1;
        var character = typeof column !== 'number' ? undefined : column - 1;
        return {
            line: line, character: character
        };
    };
    MonacoToProtocolConverter.prototype.asRange = function (range) {
        if (range === undefined) {
            return undefined;
        }
        if (MonacoRangeReplace.is(range)) {
            return this.asRange(range.insert);
        }
        else {
            var start = this.asPosition(range.startLineNumber, range.startColumn);
            var end = this.asPosition(range.endLineNumber, range.endColumn);
            return {
                start: start, end: end
            };
        }
    };
    MonacoToProtocolConverter = __decorate([
        inversify_1.injectable()
    ], MonacoToProtocolConverter);
    return MonacoToProtocolConverter;
}());
exports.MonacoToProtocolConverter = MonacoToProtocolConverter;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-workspace.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-workspace.js ***!
  \*********************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonacoWorkspace = exports.WorkspaceTextEdit = exports.WorkspaceFileEdit = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var browser_1 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "../node_modules/@theia/filesystem/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_text_model_service_1 = __webpack_require__(/*! ./monaco-text-model-service */ "../node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var browser_3 = __webpack_require__(/*! @theia/markers/lib/browser */ "../node_modules/@theia/markers/lib/browser/index.js");
var file_service_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/file-service */ "../node_modules/@theia/filesystem/lib/browser/file-service.js");
var WorkspaceFileEdit;
(function (WorkspaceFileEdit) {
    function is(arg) {
        return ('oldUri' in arg && monaco.Uri.isUri(arg.oldUri)) ||
            ('newUri' in arg && monaco.Uri.isUri(arg.newUri));
    }
    WorkspaceFileEdit.is = is;
})(WorkspaceFileEdit = exports.WorkspaceFileEdit || (exports.WorkspaceFileEdit = {}));
var WorkspaceTextEdit;
(function (WorkspaceTextEdit) {
    function is(arg) {
        return !!arg && typeof arg === 'object'
            && 'resource' in arg
            && monaco.Uri.isUri(arg.resource)
            && 'edit' in arg
            && arg.edit !== null
            && typeof arg.edit === 'object';
    }
    WorkspaceTextEdit.is = is;
})(WorkspaceTextEdit = exports.WorkspaceTextEdit || (exports.WorkspaceTextEdit = {}));
var MonacoWorkspace = /** @class */ (function () {
    function MonacoWorkspace() {
        var _this = this;
        this.ready = new Promise(function (resolve) {
            _this.resolveReady = resolve;
        });
        this.onDidOpenTextDocumentEmitter = new event_1.Emitter();
        this.onDidOpenTextDocument = this.onDidOpenTextDocumentEmitter.event;
        this.onDidCloseTextDocumentEmitter = new event_1.Emitter();
        this.onDidCloseTextDocument = this.onDidCloseTextDocumentEmitter.event;
        this.onDidChangeTextDocumentEmitter = new event_1.Emitter();
        this.onDidChangeTextDocument = this.onDidChangeTextDocumentEmitter.event;
        this.onWillSaveTextDocumentEmitter = new event_1.Emitter();
        this.onWillSaveTextDocument = this.onWillSaveTextDocumentEmitter.event;
        this.onDidSaveTextDocumentEmitter = new event_1.Emitter();
        this.onDidSaveTextDocument = this.onDidSaveTextDocumentEmitter.event;
        this.suppressedOpenIfDirty = [];
    }
    MonacoWorkspace.prototype.init = function () {
        var e_1, _a;
        var _this = this;
        this.resolveReady();
        try {
            for (var _b = __values(this.textModelService.models), _c = _b.next(); !_c.done; _c = _b.next()) {
                var model = _c.value;
                this.fireDidOpen(model);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.textModelService.onDidCreate(function (model) { return _this.fireDidOpen(model); });
    };
    Object.defineProperty(MonacoWorkspace.prototype, "textDocuments", {
        get: function () {
            return this.textModelService.models;
        },
        enumerable: false,
        configurable: true
    });
    MonacoWorkspace.prototype.getTextDocument = function (uri) {
        return this.textModelService.get(uri);
    };
    MonacoWorkspace.prototype.fireDidOpen = function (model) {
        var _this = this;
        this.doFireDidOpen(model);
        model.textEditorModel.onDidChangeLanguage(function (e) {
            _this.problems.cleanAllMarkers(new uri_1.default(model.uri));
            model.setLanguageId(e.oldLanguage);
            try {
                _this.fireDidClose(model);
            }
            finally {
                model.setLanguageId(undefined);
            }
            _this.doFireDidOpen(model);
        });
        model.onDidChangeContent(function (event) { return _this.fireDidChangeContent(event); });
        model.onDidSaveModel(function () { return _this.fireDidSave(model); });
        model.onWillSaveModel(function (event) { return _this.fireWillSave(event); });
        model.onDirtyChanged(function () { return _this.openEditorIfDirty(model); });
        model.onDispose(function () { return _this.fireDidClose(model); });
    };
    MonacoWorkspace.prototype.doFireDidOpen = function (model) {
        this.onDidOpenTextDocumentEmitter.fire(model);
    };
    MonacoWorkspace.prototype.fireDidClose = function (model) {
        this.onDidCloseTextDocumentEmitter.fire(model);
    };
    MonacoWorkspace.prototype.fireDidChangeContent = function (event) {
        this.onDidChangeTextDocumentEmitter.fire(event);
    };
    MonacoWorkspace.prototype.fireWillSave = function (event) {
        this.onWillSaveTextDocumentEmitter.fire(event);
    };
    MonacoWorkspace.prototype.fireDidSave = function (model) {
        this.onDidSaveTextDocumentEmitter.fire(model);
    };
    MonacoWorkspace.prototype.openEditorIfDirty = function (model) {
        var _this = this;
        if (this.suppressedOpenIfDirty.indexOf(model) !== -1) {
            return;
        }
        if (model.dirty && monaco_editor_1.MonacoEditor.findByDocument(this.editorManager, model).length === 0) {
            // create a new reference to make sure the model is not disposed before it is
            // acquired by the editor, thus losing the changes that made it dirty.
            this.textModelService.createModelReference(model.textEditorModel.uri).then(function (ref) {
                (model.autoSave === 'on' ? new Promise(function (resolve) { return model.onDidSaveModel(resolve); }) :
                    _this.editorManager.open(new uri_1.default(model.uri), { mode: 'open' })).then(function () { return ref.dispose(); });
            });
        }
    };
    MonacoWorkspace.prototype.suppressOpenIfDirty = function (model, cb) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.suppressedOpenIfDirty.push(model);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, cb()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        i = this.suppressedOpenIfDirty.indexOf(model);
                        if (i !== -1) {
                            this.suppressedOpenIfDirty.splice(i, 1);
                        }
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Applies given edits to the given model.
     * The model is saved if no editors is opened for it.
     */
    MonacoWorkspace.prototype.applyBackgroundEdit = function (model, editOperations) {
        var _this = this;
        return this.suppressOpenIfDirty(model, function () { return __awaiter(_this, void 0, void 0, function () {
            var editor, cursorState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        editor = monaco_editor_1.MonacoEditor.findByDocument(this.editorManager, model)[0];
                        cursorState = editor && editor.getControl().getSelections() || [];
                        model.textEditorModel.pushStackElement();
                        model.textEditorModel.pushEditOperations(cursorState, editOperations, function () { return cursorState; });
                        model.textEditorModel.pushStackElement();
                        if (!!editor) return [3 /*break*/, 2];
                        return [4 /*yield*/, model.save()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    MonacoWorkspace.prototype.groupEdits = function (workspaceEdit) {
        var e_2, _a;
        var groups = [];
        var group;
        try {
            for (var _b = __values(workspaceEdit.edits), _c = _b.next(); !_c.done; _c = _b.next()) {
                var edit = _c.value;
                if (!group
                    || (WorkspaceFileEdit.is(group[0]) && !WorkspaceFileEdit.is(edit))
                    || (WorkspaceTextEdit.is(group[0]) && !WorkspaceTextEdit.is(edit))) {
                    group = [];
                    groups.push(group);
                }
                group.push(edit);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return groups;
    };
    MonacoWorkspace.prototype.applyBulkEdit = function (workspaceEdit) {
        return __awaiter(this, void 0, void 0, function () {
            var totalEdits, totalFiles, _a, _b, group, result, e_3_1, ariaSummary, e_4;
            var e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 11, , 12]);
                        totalEdits = 0;
                        totalFiles = 0;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 8, 9, 10]);
                        _a = __values(this.groupEdits(workspaceEdit)), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 7];
                        group = _b.value;
                        if (!WorkspaceFileEdit.is(group[0])) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.performFileEdits(group)];
                    case 3:
                        _d.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.performTextEdits(group)];
                    case 5:
                        result = _d.sent();
                        totalEdits += result.totalEdits;
                        totalFiles += result.totalFiles;
                        _d.label = 6;
                    case 6:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        ariaSummary = this.getAriaSummary(totalEdits, totalFiles);
                        return [2 /*return*/, { ariaSummary: ariaSummary, success: true }];
                    case 11:
                        e_4 = _d.sent();
                        console.error('Failed to apply workspace edits:', e_4);
                        return [2 /*return*/, {
                                ariaSummary: "Error applying workspace edits: " + e_4.toString(),
                                success: false
                            }];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    MonacoWorkspace.prototype.getAriaSummary = function (totalEdits, totalFiles) {
        if (totalEdits === 0) {
            return 'Made no edits';
        }
        if (totalEdits > 1 && totalFiles > 1) {
            return "Made " + totalEdits + " text edits in " + totalFiles + " files";
        }
        return "Made " + totalEdits + " text edits in one file";
    };
    MonacoWorkspace.prototype.performTextEdits = function (edits) {
        return __awaiter(this, void 0, void 0, function () {
            var totalEdits, totalFiles, resourceEdits, edits_1, edits_1_1, edit, model, key, array, pending, _loop_1, resourceEdits_1, resourceEdits_1_1, _a, key, value;
            var e_5, _b, e_6, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        totalEdits = 0;
                        totalFiles = 0;
                        resourceEdits = new Map();
                        try {
                            for (edits_1 = __values(edits), edits_1_1 = edits_1.next(); !edits_1_1.done; edits_1_1 = edits_1.next()) {
                                edit = edits_1_1.value;
                                if (typeof edit.modelVersionId === 'number') {
                                    model = this.textModelService.get(edit.resource.toString());
                                    if (model && model.textEditorModel.getVersionId() !== edit.modelVersionId) {
                                        throw new Error(model.uri + " has changed in the meantime");
                                    }
                                }
                                key = edit.resource.toString();
                                array = resourceEdits.get(key);
                                if (!array) {
                                    array = [];
                                    resourceEdits.set(key, array);
                                }
                                array.push(edit);
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (edits_1_1 && !edits_1_1.done && (_b = edits_1.return)) _b.call(edits_1);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                        pending = [];
                        _loop_1 = function (key, value) {
                            pending.push((function () { return __awaiter(_this, void 0, void 0, function () {
                                var uri, eol, editOperations, minimalEdits, minimalEdits_1, minimalEdits_1_1, textEdit, reference, model, editor, cursorState_1;
                                var e_7, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            uri = monaco.Uri.parse(key);
                                            editOperations = [];
                                            return [4 /*yield*/, monaco.services.StaticServices.editorWorkerService.get().computeMoreMinimalEdits(uri, value.map(function (v) { return v.edit; }))];
                                        case 1:
                                            minimalEdits = _b.sent();
                                            if (minimalEdits) {
                                                try {
                                                    for (minimalEdits_1 = __values(minimalEdits), minimalEdits_1_1 = minimalEdits_1.next(); !minimalEdits_1_1.done; minimalEdits_1_1 = minimalEdits_1.next()) {
                                                        textEdit = minimalEdits_1_1.value;
                                                        if (typeof textEdit.eol === 'number') {
                                                            eol = textEdit.eol;
                                                        }
                                                        if (monaco.Range.isEmpty(textEdit.range) && !textEdit.text) {
                                                            // skip no-op
                                                            continue;
                                                        }
                                                        editOperations.push({
                                                            forceMoveMarkers: false,
                                                            range: monaco.Range.lift(textEdit.range),
                                                            text: textEdit.text
                                                        });
                                                    }
                                                }
                                                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                                                finally {
                                                    try {
                                                        if (minimalEdits_1_1 && !minimalEdits_1_1.done && (_a = minimalEdits_1.return)) _a.call(minimalEdits_1);
                                                    }
                                                    finally { if (e_7) throw e_7.error; }
                                                }
                                            }
                                            if (!editOperations.length && eol === undefined) {
                                                return [2 /*return*/];
                                            }
                                            return [4 /*yield*/, this.textModelService.createModelReference(uri)];
                                        case 2:
                                            reference = _b.sent();
                                            try {
                                                model = reference.object.textEditorModel;
                                                editor = monaco_editor_1.MonacoEditor.findByDocument(this.editorManager, reference.object)[0];
                                                cursorState_1 = (editor === null || editor === void 0 ? void 0 : editor.getControl().getSelections()) || [];
                                                // start a fresh operation
                                                model.pushStackElement();
                                                if (editOperations.length) {
                                                    model.pushEditOperations(cursorState_1, editOperations, function () { return cursorState_1; });
                                                }
                                                if (eol !== undefined) {
                                                    model.pushEOL(eol);
                                                }
                                                // push again to make this change an undoable operation
                                                model.pushStackElement();
                                                totalFiles += 1;
                                                totalEdits += editOperations.length;
                                            }
                                            finally {
                                                reference.dispose();
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); })());
                        };
                        try {
                            for (resourceEdits_1 = __values(resourceEdits), resourceEdits_1_1 = resourceEdits_1.next(); !resourceEdits_1_1.done; resourceEdits_1_1 = resourceEdits_1.next()) {
                                _a = __read(resourceEdits_1_1.value, 2), key = _a[0], value = _a[1];
                                _loop_1(key, value);
                            }
                        }
                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                        finally {
                            try {
                                if (resourceEdits_1_1 && !resourceEdits_1_1.done && (_c = resourceEdits_1.return)) _c.call(resourceEdits_1);
                            }
                            finally { if (e_6) throw e_6.error; }
                        }
                        return [4 /*yield*/, Promise.all(pending)];
                    case 1:
                        _d.sent();
                        return [2 /*return*/, { totalEdits: totalEdits, totalFiles: totalFiles }];
                }
            });
        });
    };
    MonacoWorkspace.prototype.performFileEdits = function (edits) {
        return __awaiter(this, void 0, void 0, function () {
            var edits_2, edits_2_1, edit, options, _a, useTrash, _b, e_8_1;
            var e_8, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 16, 17, 18]);
                        edits_2 = __values(edits), edits_2_1 = edits_2.next();
                        _d.label = 1;
                    case 1:
                        if (!!edits_2_1.done) return [3 /*break*/, 15];
                        edit = edits_2_1.value;
                        options = edit.options || {};
                        if (!(edit.newUri && edit.oldUri)) return [3 /*break*/, 5];
                        _a = options.overwrite === undefined && options.ignoreIfExists;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fileService.exists(new uri_1.default(edit.newUri))];
                    case 2:
                        _a = (_d.sent());
                        _d.label = 3;
                    case 3:
                        // rename
                        if (_a) {
                            return [2 /*return*/]; // not overwriting, but ignoring, and the target file exists
                        }
                        return [4 /*yield*/, this.fileService.move(new uri_1.default(edit.oldUri), new uri_1.default(edit.newUri), { overwrite: options.overwrite })];
                    case 4:
                        _d.sent();
                        return [3 /*break*/, 14];
                    case 5:
                        if (!(!edit.newUri && edit.oldUri)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.fileService.exists(new uri_1.default(edit.oldUri))];
                    case 6:
                        if (!_d.sent()) return [3 /*break*/, 8];
                        useTrash = this.filePreferences['files.enableTrash'];
                        if (useTrash && !(this.fileService.hasCapability(new uri_1.default(edit.oldUri), 4096 /* Trash */))) {
                            useTrash = false; // not supported by provider
                        }
                        return [4 /*yield*/, this.fileService.delete(new uri_1.default(edit.oldUri), { useTrash: useTrash, recursive: options.recursive })];
                    case 7:
                        _d.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        if (!options.ignoreIfNotExists) {
                            throw new Error(edit.oldUri + " does not exist and can not be deleted");
                        }
                        _d.label = 9;
                    case 9: return [3 /*break*/, 14];
                    case 10:
                        if (!(edit.newUri && !edit.oldUri)) return [3 /*break*/, 14];
                        _b = options.overwrite === undefined && options.ignoreIfExists;
                        if (!_b) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.fileService.exists(new uri_1.default(edit.newUri))];
                    case 11:
                        _b = (_d.sent());
                        _d.label = 12;
                    case 12:
                        // create file
                        if (_b) {
                            return [2 /*return*/]; // not overwriting, but ignoring, and the target file exists
                        }
                        return [4 /*yield*/, this.fileService.create(new uri_1.default(edit.newUri), undefined, { overwrite: options.overwrite })];
                    case 13:
                        _d.sent();
                        _d.label = 14;
                    case 14:
                        edits_2_1 = edits_2.next();
                        return [3 /*break*/, 1];
                    case 15: return [3 /*break*/, 18];
                    case 16:
                        e_8_1 = _d.sent();
                        e_8 = { error: e_8_1 };
                        return [3 /*break*/, 18];
                    case 17:
                        try {
                            if (edits_2_1 && !edits_2_1.done && (_c = edits_2.return)) _c.call(edits_2);
                        }
                        finally { if (e_8) throw e_8.error; }
                        return [7 /*endfinally*/];
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(file_service_1.FileService),
        __metadata("design:type", file_service_1.FileService)
    ], MonacoWorkspace.prototype, "fileService", void 0);
    __decorate([
        inversify_1.inject(browser_1.FileSystemPreferences),
        __metadata("design:type", Object)
    ], MonacoWorkspace.prototype, "filePreferences", void 0);
    __decorate([
        inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService),
        __metadata("design:type", monaco_text_model_service_1.MonacoTextModelService)
    ], MonacoWorkspace.prototype, "textModelService", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], MonacoWorkspace.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_3.ProblemManager),
        __metadata("design:type", browser_3.ProblemManager)
    ], MonacoWorkspace.prototype, "problems", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MonacoWorkspace.prototype, "init", null);
    MonacoWorkspace = __decorate([
        inversify_1.injectable()
    ], MonacoWorkspace);
    return MonacoWorkspace;
}());
exports.MonacoWorkspace = MonacoWorkspace;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/protocol-to-monaco-converter.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/protocol-to-monaco-converter.js ***!
  \*********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolToMonacoConverter = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var ProtocolToMonacoConverter = /** @class */ (function () {
    function ProtocolToMonacoConverter() {
    }
    ProtocolToMonacoConverter.prototype.asRange = function (range) {
        if (range === undefined) {
            return undefined;
        }
        var start = this.asPosition(range.start);
        var end = this.asPosition(range.end);
        if (start instanceof monaco.Position && end instanceof monaco.Position) {
            return new monaco.Range(start.lineNumber, start.column, end.lineNumber, end.column);
        }
        var startLineNumber = !start || start.lineNumber === undefined ? undefined : start.lineNumber;
        var startColumn = !start || start.column === undefined ? undefined : start.column;
        var endLineNumber = !end || end.lineNumber === undefined ? undefined : end.lineNumber;
        var endColumn = !end || end.column === undefined ? undefined : end.column;
        return { startLineNumber: startLineNumber, startColumn: startColumn, endLineNumber: endLineNumber, endColumn: endColumn };
    };
    ProtocolToMonacoConverter.prototype.asPosition = function (position) {
        if (position === undefined) {
            return undefined;
        }
        var line = position.line, character = position.character;
        var lineNumber = line === undefined ? undefined : line + 1;
        var column = character === undefined ? undefined : character + 1;
        if (lineNumber !== undefined && column !== undefined) {
            return new monaco.Position(lineNumber, column);
        }
        return { lineNumber: lineNumber, column: column };
    };
    ProtocolToMonacoConverter.prototype.asLocation = function (item) {
        if (!item) {
            return undefined;
        }
        var uri = monaco.Uri.parse(item.uri);
        var range = this.asRange(item.range);
        return {
            uri: uri, range: range
        };
    };
    ProtocolToMonacoConverter.prototype.asTextEdit = function (edit) {
        if (!edit) {
            return undefined;
        }
        var range = this.asRange(edit.range);
        return {
            range: range,
            text: edit.newText
        };
    };
    ProtocolToMonacoConverter.prototype.asTextEdits = function (items) {
        var _this = this;
        if (!items) {
            return undefined;
        }
        return items.map(function (item) { return _this.asTextEdit(item); });
    };
    ProtocolToMonacoConverter.prototype.asSeverity = function (severity) {
        if (severity === 1) {
            return monaco.MarkerSeverity.Error;
        }
        if (severity === 2) {
            return monaco.MarkerSeverity.Warning;
        }
        if (severity === 3) {
            return monaco.MarkerSeverity.Info;
        }
        return monaco.MarkerSeverity.Hint;
    };
    ProtocolToMonacoConverter.prototype.asDiagnostics = function (diagnostics) {
        var _this = this;
        if (!diagnostics) {
            return undefined;
        }
        return diagnostics.map(function (diagnostic) { return _this.asDiagnostic(diagnostic); });
    };
    ProtocolToMonacoConverter.prototype.asDiagnostic = function (diagnostic) {
        return {
            code: typeof diagnostic.code === 'number' ? diagnostic.code.toString() : diagnostic.code,
            severity: this.asSeverity(diagnostic.severity),
            message: diagnostic.message,
            source: diagnostic.source,
            startLineNumber: diagnostic.range.start.line + 1,
            startColumn: diagnostic.range.start.character + 1,
            endLineNumber: diagnostic.range.end.line + 1,
            endColumn: diagnostic.range.end.character + 1,
            relatedInformation: this.asRelatedInformations(diagnostic.relatedInformation)
        };
    };
    ProtocolToMonacoConverter.prototype.asRelatedInformations = function (relatedInformation) {
        var _this = this;
        if (!relatedInformation) {
            return undefined;
        }
        return relatedInformation.map(function (item) { return _this.asRelatedInformation(item); });
    };
    ProtocolToMonacoConverter.prototype.asRelatedInformation = function (relatedInformation) {
        return {
            resource: monaco.Uri.parse(relatedInformation.location.uri),
            startLineNumber: relatedInformation.location.range.start.line + 1,
            startColumn: relatedInformation.location.range.start.character + 1,
            endLineNumber: relatedInformation.location.range.end.line + 1,
            endColumn: relatedInformation.location.range.end.character + 1,
            message: relatedInformation.message
        };
    };
    ProtocolToMonacoConverter = __decorate([
        inversify_1.injectable()
    ], ProtocolToMonacoConverter);
    return ProtocolToMonacoConverter;
}());
exports.ProtocolToMonacoConverter = ProtocolToMonacoConverter;


/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/main.js":
/*!******************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/main.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-jsonrpc/lib/main.js");

exports.ErrorCodes = vscode_jsonrpc_1.ErrorCodes;
exports.ResponseError = vscode_jsonrpc_1.ResponseError;
exports.CancellationToken = vscode_jsonrpc_1.CancellationToken;
exports.CancellationTokenSource = vscode_jsonrpc_1.CancellationTokenSource;
exports.Disposable = vscode_jsonrpc_1.Disposable;
exports.Event = vscode_jsonrpc_1.Event;
exports.Emitter = vscode_jsonrpc_1.Emitter;
exports.Trace = vscode_jsonrpc_1.Trace;
exports.TraceFormat = vscode_jsonrpc_1.TraceFormat;
exports.SetTraceNotification = vscode_jsonrpc_1.SetTraceNotification;
exports.LogTraceNotification = vscode_jsonrpc_1.LogTraceNotification;
exports.RequestType = vscode_jsonrpc_1.RequestType;
exports.RequestType0 = vscode_jsonrpc_1.RequestType0;
exports.NotificationType = vscode_jsonrpc_1.NotificationType;
exports.NotificationType0 = vscode_jsonrpc_1.NotificationType0;
exports.MessageReader = vscode_jsonrpc_1.MessageReader;
exports.MessageWriter = vscode_jsonrpc_1.MessageWriter;
exports.ConnectionStrategy = vscode_jsonrpc_1.ConnectionStrategy;
exports.StreamMessageReader = vscode_jsonrpc_1.StreamMessageReader;
exports.StreamMessageWriter = vscode_jsonrpc_1.StreamMessageWriter;
exports.IPCMessageReader = vscode_jsonrpc_1.IPCMessageReader;
exports.IPCMessageWriter = vscode_jsonrpc_1.IPCMessageWriter;
exports.createClientPipeTransport = vscode_jsonrpc_1.createClientPipeTransport;
exports.createServerPipeTransport = vscode_jsonrpc_1.createServerPipeTransport;
exports.generateRandomPipeName = vscode_jsonrpc_1.generateRandomPipeName;
exports.createClientSocketTransport = vscode_jsonrpc_1.createClientSocketTransport;
exports.createServerSocketTransport = vscode_jsonrpc_1.createServerSocketTransport;
exports.ProgressType = vscode_jsonrpc_1.ProgressType;

__export(__webpack_require__(/*! vscode-languageserver-types */ "../node_modules/vscode-languageserver-protocol/node_modules/vscode-languageserver-types/lib/esm/main.js"));

__export(__webpack_require__(/*! ./protocol */ "../node_modules/vscode-languageserver-protocol/lib/protocol.js"));

var callHierarchy = __webpack_require__(/*! ./protocol.callHierarchy.proposed */ "../node_modules/vscode-languageserver-protocol/lib/protocol.callHierarchy.proposed.js");

var st = __webpack_require__(/*! ./protocol.sematicTokens.proposed */ "../node_modules/vscode-languageserver-protocol/lib/protocol.sematicTokens.proposed.js");

var Proposed;

(function (Proposed) {
  var CallHierarchyPrepareRequest;

  (function (CallHierarchyPrepareRequest) {
    CallHierarchyPrepareRequest.method = callHierarchy.CallHierarchyPrepareRequest.method;
    CallHierarchyPrepareRequest.type = callHierarchy.CallHierarchyPrepareRequest.type;
  })(CallHierarchyPrepareRequest = Proposed.CallHierarchyPrepareRequest || (Proposed.CallHierarchyPrepareRequest = {}));

  var CallHierarchyIncomingCallsRequest;

  (function (CallHierarchyIncomingCallsRequest) {
    CallHierarchyIncomingCallsRequest.method = callHierarchy.CallHierarchyIncomingCallsRequest.method;
    CallHierarchyIncomingCallsRequest.type = callHierarchy.CallHierarchyIncomingCallsRequest.type;
  })(CallHierarchyIncomingCallsRequest = Proposed.CallHierarchyIncomingCallsRequest || (Proposed.CallHierarchyIncomingCallsRequest = {}));

  var CallHierarchyOutgoingCallsRequest;

  (function (CallHierarchyOutgoingCallsRequest) {
    CallHierarchyOutgoingCallsRequest.method = callHierarchy.CallHierarchyOutgoingCallsRequest.method;
    CallHierarchyOutgoingCallsRequest.type = callHierarchy.CallHierarchyOutgoingCallsRequest.type;
  })(CallHierarchyOutgoingCallsRequest = Proposed.CallHierarchyOutgoingCallsRequest || (Proposed.CallHierarchyOutgoingCallsRequest = {}));

  Proposed.SemanticTokenTypes = st.SemanticTokenTypes;
  Proposed.SemanticTokenModifiers = st.SemanticTokenModifiers;
  Proposed.SemanticTokens = st.SemanticTokens;
  var SemanticTokensRequest;

  (function (SemanticTokensRequest) {
    SemanticTokensRequest.method = st.SemanticTokensRequest.method;
    SemanticTokensRequest.type = st.SemanticTokensRequest.type;
  })(SemanticTokensRequest = Proposed.SemanticTokensRequest || (Proposed.SemanticTokensRequest = {}));

  var SemanticTokensEditsRequest;

  (function (SemanticTokensEditsRequest) {
    SemanticTokensEditsRequest.method = st.SemanticTokensEditsRequest.method;
    SemanticTokensEditsRequest.type = st.SemanticTokensEditsRequest.type;
  })(SemanticTokensEditsRequest = Proposed.SemanticTokensEditsRequest || (Proposed.SemanticTokensEditsRequest = {}));

  var SemanticTokensRangeRequest;

  (function (SemanticTokensRangeRequest) {
    SemanticTokensRangeRequest.method = st.SemanticTokensRangeRequest.method;
    SemanticTokensRangeRequest.type = st.SemanticTokensRangeRequest.type;
  })(SemanticTokensRangeRequest = Proposed.SemanticTokensRangeRequest || (Proposed.SemanticTokensRangeRequest = {}));
})(Proposed = exports.Proposed || (exports.Proposed = {}));

function createProtocolConnection(reader, writer, logger, strategy) {
  return vscode_jsonrpc_1.createMessageConnection(reader, writer, logger, strategy);
}

exports.createProtocolConnection = createProtocolConnection;

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/messages.js":
/*!**********************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/messages.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-jsonrpc/lib/main.js");

var ProtocolRequestType0 = /*#__PURE__*/function (_vscode_jsonrpc_1$Req) {
  _inherits(ProtocolRequestType0, _vscode_jsonrpc_1$Req);

  var _super = _createSuper(ProtocolRequestType0);

  function ProtocolRequestType0(method) {
    _classCallCheck(this, ProtocolRequestType0);

    return _super.call(this, method);
  }

  return ProtocolRequestType0;
}(vscode_jsonrpc_1.RequestType0);

exports.ProtocolRequestType0 = ProtocolRequestType0;

var ProtocolRequestType = /*#__PURE__*/function (_vscode_jsonrpc_1$Req2) {
  _inherits(ProtocolRequestType, _vscode_jsonrpc_1$Req2);

  var _super2 = _createSuper(ProtocolRequestType);

  function ProtocolRequestType(method) {
    _classCallCheck(this, ProtocolRequestType);

    return _super2.call(this, method);
  }

  return ProtocolRequestType;
}(vscode_jsonrpc_1.RequestType);

exports.ProtocolRequestType = ProtocolRequestType;

var ProtocolNotificationType = /*#__PURE__*/function (_vscode_jsonrpc_1$Not) {
  _inherits(ProtocolNotificationType, _vscode_jsonrpc_1$Not);

  var _super3 = _createSuper(ProtocolNotificationType);

  function ProtocolNotificationType(method) {
    _classCallCheck(this, ProtocolNotificationType);

    return _super3.call(this, method);
  }

  return ProtocolNotificationType;
}(vscode_jsonrpc_1.NotificationType);

exports.ProtocolNotificationType = ProtocolNotificationType;

var ProtocolNotificationType0 = /*#__PURE__*/function (_vscode_jsonrpc_1$Not2) {
  _inherits(ProtocolNotificationType0, _vscode_jsonrpc_1$Not2);

  var _super4 = _createSuper(ProtocolNotificationType0);

  function ProtocolNotificationType0(method) {
    _classCallCheck(this, ProtocolNotificationType0);

    return _super4.call(this, method);
  }

  return ProtocolNotificationType0;
}(vscode_jsonrpc_1.NotificationType0);

exports.ProtocolNotificationType0 = ProtocolNotificationType0;

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/protocol.callHierarchy.proposed.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/protocol.callHierarchy.proposed.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) TypeFox and others. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var messages_1 = __webpack_require__(/*! ./messages */ "../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * A request to result a `CallHierarchyItem` in a document at a given position.
 * Can be used as an input to a incoming or outgoing call hierarchy.
 *
 * @since 3.16.0 - Proposed state
 */


var CallHierarchyPrepareRequest;

(function (CallHierarchyPrepareRequest) {
  CallHierarchyPrepareRequest.method = 'textDocument/prepareCallHierarchy';
  CallHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest.method);
})(CallHierarchyPrepareRequest = exports.CallHierarchyPrepareRequest || (exports.CallHierarchyPrepareRequest = {}));
/**
 * A request to resolve the incoming calls for a given `CallHierarchyItem`.
 *
 * @since 3.16.0 - Proposed state
 */


var CallHierarchyIncomingCallsRequest;

(function (CallHierarchyIncomingCallsRequest) {
  CallHierarchyIncomingCallsRequest.method = 'callHierarchy/incomingCalls';
  CallHierarchyIncomingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest.method);
})(CallHierarchyIncomingCallsRequest = exports.CallHierarchyIncomingCallsRequest || (exports.CallHierarchyIncomingCallsRequest = {}));
/**
 * A request to resolve the outgoing calls for a given `CallHierarchyItem`.
 *
 * @since 3.16.0 - Proposed state
 */


var CallHierarchyOutgoingCallsRequest;

(function (CallHierarchyOutgoingCallsRequest) {
  CallHierarchyOutgoingCallsRequest.method = 'callHierarchy/outgoingCalls';
  CallHierarchyOutgoingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest.method);
})(CallHierarchyOutgoingCallsRequest = exports.CallHierarchyOutgoingCallsRequest || (exports.CallHierarchyOutgoingCallsRequest = {}));

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/protocol.colorProvider.js":
/*!************************************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/protocol.colorProvider.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * A request to list all color symbols found in a given text document. The request's
 * parameter is of type [DocumentColorParams](#DocumentColorParams) the
 * response is of type [ColorInformation[]](#ColorInformation) or a Thenable
 * that resolves to such.
 */


var DocumentColorRequest;

(function (DocumentColorRequest) {
  DocumentColorRequest.method = 'textDocument/documentColor';
  DocumentColorRequest.type = new messages_1.ProtocolRequestType(DocumentColorRequest.method);
  /** @deprecated Use DocumentColorRequest.type */

  DocumentColorRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(DocumentColorRequest = exports.DocumentColorRequest || (exports.DocumentColorRequest = {}));
/**
 * A request to list all presentation for a color. The request's
 * parameter is of type [ColorPresentationParams](#ColorPresentationParams) the
 * response is of type [ColorInformation[]](#ColorInformation) or a Thenable
 * that resolves to such.
 */


var ColorPresentationRequest;

(function (ColorPresentationRequest) {
  ColorPresentationRequest.type = new messages_1.ProtocolRequestType('textDocument/colorPresentation');
})(ColorPresentationRequest = exports.ColorPresentationRequest || (exports.ColorPresentationRequest = {}));

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/protocol.configuration.js":
/*!************************************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/protocol.configuration.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var messages_1 = __webpack_require__(/*! ./messages */ "../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * The 'workspace/configuration' request is sent from the server to the client to fetch a certain
 * configuration setting.
 *
 * This pull model replaces the old push model were the client signaled configuration change via an
 * event. If the server still needs to react to configuration changes (since the server caches the
 * result of `workspace/configuration` requests) the server should register for an empty configuration
 * change event and empty the cache if such an event is received.
 */


var ConfigurationRequest;

(function (ConfigurationRequest) {
  ConfigurationRequest.type = new messages_1.ProtocolRequestType('workspace/configuration');
})(ConfigurationRequest = exports.ConfigurationRequest || (exports.ConfigurationRequest = {}));

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/protocol.declaration.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/protocol.declaration.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../node_modules/vscode-languageserver-protocol/lib/messages.js"); // @ts-ignore: to avoid inlining LocatioLink as dynamic import


var __noDynamicImport;
/**
 * A request to resolve the type definition locations of a symbol at a given text
 * document position. The request's parameter is of type [TextDocumentPositioParams]
 * (#TextDocumentPositionParams) the response is of type [Declaration](#Declaration)
 * or a typed array of [DeclarationLink](#DeclarationLink) or a Thenable that resolves
 * to such.
 */


var DeclarationRequest;

(function (DeclarationRequest) {
  DeclarationRequest.method = 'textDocument/declaration';
  DeclarationRequest.type = new messages_1.ProtocolRequestType(DeclarationRequest.method);
  /** @deprecated Use DeclarationRequest.type */

  DeclarationRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(DeclarationRequest = exports.DeclarationRequest || (exports.DeclarationRequest = {}));

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/protocol.foldingRange.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/protocol.foldingRange.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * Enum of known range kinds
 */


var FoldingRangeKind;

(function (FoldingRangeKind) {
  /**
   * Folding range for a comment
   */
  FoldingRangeKind["Comment"] = "comment";
  /**
   * Folding range for a imports or includes
   */

  FoldingRangeKind["Imports"] = "imports";
  /**
   * Folding range for a region (e.g. `#region`)
   */

  FoldingRangeKind["Region"] = "region";
})(FoldingRangeKind = exports.FoldingRangeKind || (exports.FoldingRangeKind = {}));
/**
 * A request to provide folding ranges in a document. The request's
 * parameter is of type [FoldingRangeParams](#FoldingRangeParams), the
 * response is of type [FoldingRangeList](#FoldingRangeList) or a Thenable
 * that resolves to such.
 */


var FoldingRangeRequest;

(function (FoldingRangeRequest) {
  FoldingRangeRequest.method = 'textDocument/foldingRange';
  FoldingRangeRequest.type = new messages_1.ProtocolRequestType(FoldingRangeRequest.method);
  /** @deprecated Use FoldingRangeRequest.type */

  FoldingRangeRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(FoldingRangeRequest = exports.FoldingRangeRequest || (exports.FoldingRangeRequest = {}));

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/protocol.implementation.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/protocol.implementation.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../node_modules/vscode-languageserver-protocol/lib/messages.js"); // @ts-ignore: to avoid inlining LocatioLink as dynamic import


var __noDynamicImport;
/**
 * A request to resolve the implementation locations of a symbol at a given text
 * document position. The request's parameter is of type [TextDocumentPositioParams]
 * (#TextDocumentPositionParams) the response is of type [Definition](#Definition) or a
 * Thenable that resolves to such.
 */


var ImplementationRequest;

(function (ImplementationRequest) {
  ImplementationRequest.method = 'textDocument/implementation';
  ImplementationRequest.type = new messages_1.ProtocolRequestType(ImplementationRequest.method);
  /** @deprecated Use ImplementationRequest.type */

  ImplementationRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(ImplementationRequest = exports.ImplementationRequest || (exports.ImplementationRequest = {}));

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/protocol.js":
/*!**********************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/protocol.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Is = __webpack_require__(/*! ./utils/is */ "../node_modules/vscode-languageserver-protocol/lib/utils/is.js");

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../node_modules/vscode-languageserver-protocol/lib/messages.js");

var protocol_implementation_1 = __webpack_require__(/*! ./protocol.implementation */ "../node_modules/vscode-languageserver-protocol/lib/protocol.implementation.js");

exports.ImplementationRequest = protocol_implementation_1.ImplementationRequest;

var protocol_typeDefinition_1 = __webpack_require__(/*! ./protocol.typeDefinition */ "../node_modules/vscode-languageserver-protocol/lib/protocol.typeDefinition.js");

exports.TypeDefinitionRequest = protocol_typeDefinition_1.TypeDefinitionRequest;

var protocol_workspaceFolders_1 = __webpack_require__(/*! ./protocol.workspaceFolders */ "../node_modules/vscode-languageserver-protocol/lib/protocol.workspaceFolders.js");

exports.WorkspaceFoldersRequest = protocol_workspaceFolders_1.WorkspaceFoldersRequest;
exports.DidChangeWorkspaceFoldersNotification = protocol_workspaceFolders_1.DidChangeWorkspaceFoldersNotification;

var protocol_configuration_1 = __webpack_require__(/*! ./protocol.configuration */ "../node_modules/vscode-languageserver-protocol/lib/protocol.configuration.js");

exports.ConfigurationRequest = protocol_configuration_1.ConfigurationRequest;

var protocol_colorProvider_1 = __webpack_require__(/*! ./protocol.colorProvider */ "../node_modules/vscode-languageserver-protocol/lib/protocol.colorProvider.js");

exports.DocumentColorRequest = protocol_colorProvider_1.DocumentColorRequest;
exports.ColorPresentationRequest = protocol_colorProvider_1.ColorPresentationRequest;

var protocol_foldingRange_1 = __webpack_require__(/*! ./protocol.foldingRange */ "../node_modules/vscode-languageserver-protocol/lib/protocol.foldingRange.js");

exports.FoldingRangeRequest = protocol_foldingRange_1.FoldingRangeRequest;

var protocol_declaration_1 = __webpack_require__(/*! ./protocol.declaration */ "../node_modules/vscode-languageserver-protocol/lib/protocol.declaration.js");

exports.DeclarationRequest = protocol_declaration_1.DeclarationRequest;

var protocol_selectionRange_1 = __webpack_require__(/*! ./protocol.selectionRange */ "../node_modules/vscode-languageserver-protocol/lib/protocol.selectionRange.js");

exports.SelectionRangeRequest = protocol_selectionRange_1.SelectionRangeRequest;

var protocol_progress_1 = __webpack_require__(/*! ./protocol.progress */ "../node_modules/vscode-languageserver-protocol/lib/protocol.progress.js");

exports.WorkDoneProgress = protocol_progress_1.WorkDoneProgress;
exports.WorkDoneProgressCreateRequest = protocol_progress_1.WorkDoneProgressCreateRequest;
exports.WorkDoneProgressCancelNotification = protocol_progress_1.WorkDoneProgressCancelNotification; // @ts-ignore: to avoid inlining LocatioLink as dynamic import

var __noDynamicImport;
/**
 * The DocumentFilter namespace provides helper functions to work with
 * [DocumentFilter](#DocumentFilter) literals.
 */


var DocumentFilter;

(function (DocumentFilter) {
  function is(value) {
    var candidate = value;
    return Is.string(candidate.language) || Is.string(candidate.scheme) || Is.string(candidate.pattern);
  }

  DocumentFilter.is = is;
})(DocumentFilter = exports.DocumentFilter || (exports.DocumentFilter = {}));
/**
 * The DocumentSelector namespace provides helper functions to work with
 * [DocumentSelector](#DocumentSelector)s.
 */


var DocumentSelector;

(function (DocumentSelector) {
  function is(value) {
    if (!Array.isArray(value)) {
      return false;
    }

    var _iterator = _createForOfIteratorHelper(value),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elem = _step.value;

        if (!Is.string(elem) && !DocumentFilter.is(elem)) {
          return false;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return true;
  }

  DocumentSelector.is = is;
})(DocumentSelector = exports.DocumentSelector || (exports.DocumentSelector = {}));
/**
 * The `client/registerCapability` request is sent from the server to the client to register a new capability
 * handler on the client side.
 */


var RegistrationRequest;

(function (RegistrationRequest) {
  RegistrationRequest.type = new messages_1.ProtocolRequestType('client/registerCapability');
})(RegistrationRequest = exports.RegistrationRequest || (exports.RegistrationRequest = {}));
/**
 * The `client/unregisterCapability` request is sent from the server to the client to unregister a previously registered capability
 * handler on the client side.
 */


var UnregistrationRequest;

(function (UnregistrationRequest) {
  UnregistrationRequest.type = new messages_1.ProtocolRequestType('client/unregisterCapability');
})(UnregistrationRequest = exports.UnregistrationRequest || (exports.UnregistrationRequest = {}));

var ResourceOperationKind;

(function (ResourceOperationKind) {
  /**
   * Supports creating new files and folders.
   */
  ResourceOperationKind.Create = 'create';
  /**
   * Supports renaming existing files and folders.
   */

  ResourceOperationKind.Rename = 'rename';
  /**
   * Supports deleting existing files and folders.
   */

  ResourceOperationKind.Delete = 'delete';
})(ResourceOperationKind = exports.ResourceOperationKind || (exports.ResourceOperationKind = {}));

var FailureHandlingKind;

(function (FailureHandlingKind) {
  /**
   * Applying the workspace change is simply aborted if one of the changes provided
   * fails. All operations executed before the failing operation stay executed.
   */
  FailureHandlingKind.Abort = 'abort';
  /**
   * All operations are executed transactional. That means they either all
   * succeed or no changes at all are applied to the workspace.
   */

  FailureHandlingKind.Transactional = 'transactional';
  /**
   * If the workspace edit contains only textual file changes they are executed transactional.
   * If resource changes (create, rename or delete file) are part of the change the failure
   * handling startegy is abort.
   */

  FailureHandlingKind.TextOnlyTransactional = 'textOnlyTransactional';
  /**
   * The client tries to undo the operations already executed. But there is no
   * guarantee that this is succeeding.
   */

  FailureHandlingKind.Undo = 'undo';
})(FailureHandlingKind = exports.FailureHandlingKind || (exports.FailureHandlingKind = {}));
/**
 * The StaticRegistrationOptions namespace provides helper functions to work with
 * [StaticRegistrationOptions](#StaticRegistrationOptions) literals.
 */


var StaticRegistrationOptions;

(function (StaticRegistrationOptions) {
  function hasId(value) {
    var candidate = value;
    return candidate && Is.string(candidate.id) && candidate.id.length > 0;
  }

  StaticRegistrationOptions.hasId = hasId;
})(StaticRegistrationOptions = exports.StaticRegistrationOptions || (exports.StaticRegistrationOptions = {}));
/**
 * The TextDocumentRegistrationOptions namespace provides helper functions to work with
 * [TextDocumentRegistrationOptions](#TextDocumentRegistrationOptions) literals.
 */


var TextDocumentRegistrationOptions;

(function (TextDocumentRegistrationOptions) {
  function is(value) {
    var candidate = value;
    return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
  }

  TextDocumentRegistrationOptions.is = is;
})(TextDocumentRegistrationOptions = exports.TextDocumentRegistrationOptions || (exports.TextDocumentRegistrationOptions = {}));
/**
 * The WorkDoneProgressOptions namespace provides helper functions to work with
 * [WorkDoneProgressOptions](#WorkDoneProgressOptions) literals.
 */


var WorkDoneProgressOptions;

(function (WorkDoneProgressOptions) {
  function is(value) {
    var candidate = value;
    return Is.objectLiteral(candidate) && (candidate.workDoneProgress === undefined || Is["boolean"](candidate.workDoneProgress));
  }

  WorkDoneProgressOptions.is = is;

  function hasWorkDoneProgress(value) {
    var candidate = value;
    return candidate && Is["boolean"](candidate.workDoneProgress);
  }

  WorkDoneProgressOptions.hasWorkDoneProgress = hasWorkDoneProgress;
})(WorkDoneProgressOptions = exports.WorkDoneProgressOptions || (exports.WorkDoneProgressOptions = {}));
/**
 * The initialize request is sent from the client to the server.
 * It is sent once as the request after starting up the server.
 * The requests parameter is of type [InitializeParams](#InitializeParams)
 * the response if of type [InitializeResult](#InitializeResult) of a Thenable that
 * resolves to such.
 */


var InitializeRequest;

(function (InitializeRequest) {
  InitializeRequest.type = new messages_1.ProtocolRequestType('initialize');
})(InitializeRequest = exports.InitializeRequest || (exports.InitializeRequest = {}));
/**
 * Known error codes for an `InitializeError`;
 */


var InitializeError;

(function (InitializeError) {
  /**
   * If the protocol version provided by the client can't be handled by the server.
   * @deprecated This initialize error got replaced by client capabilities. There is
   * no version handshake in version 3.0x
   */
  InitializeError.unknownProtocolVersion = 1;
})(InitializeError = exports.InitializeError || (exports.InitializeError = {}));
/**
 * The intialized notification is sent from the client to the
 * server after the client is fully initialized and the server
 * is allowed to send requests from the server to the client.
 */


var InitializedNotification;

(function (InitializedNotification) {
  InitializedNotification.type = new messages_1.ProtocolNotificationType('initialized');
})(InitializedNotification = exports.InitializedNotification || (exports.InitializedNotification = {})); //---- Shutdown Method ----

/**
 * A shutdown request is sent from the client to the server.
 * It is sent once when the client decides to shutdown the
 * server. The only notification that is sent after a shutdown request
 * is the exit event.
 */


var ShutdownRequest;

(function (ShutdownRequest) {
  ShutdownRequest.type = new messages_1.ProtocolRequestType0('shutdown');
})(ShutdownRequest = exports.ShutdownRequest || (exports.ShutdownRequest = {})); //---- Exit Notification ----

/**
 * The exit event is sent from the client to the server to
 * ask the server to exit its process.
 */


var ExitNotification;

(function (ExitNotification) {
  ExitNotification.type = new messages_1.ProtocolNotificationType0('exit');
})(ExitNotification = exports.ExitNotification || (exports.ExitNotification = {}));
/**
 * The configuration change notification is sent from the client to the server
 * when the client's configuration has changed. The notification contains
 * the changed configuration as defined by the language client.
 */


var DidChangeConfigurationNotification;

(function (DidChangeConfigurationNotification) {
  DidChangeConfigurationNotification.type = new messages_1.ProtocolNotificationType('workspace/didChangeConfiguration');
})(DidChangeConfigurationNotification = exports.DidChangeConfigurationNotification || (exports.DidChangeConfigurationNotification = {})); //---- Message show and log notifications ----

/**
 * The message type
 */


var MessageType;

(function (MessageType) {
  /**
   * An error message.
   */
  MessageType.Error = 1;
  /**
   * A warning message.
   */

  MessageType.Warning = 2;
  /**
   * An information message.
   */

  MessageType.Info = 3;
  /**
   * A log message.
   */

  MessageType.Log = 4;
})(MessageType = exports.MessageType || (exports.MessageType = {}));
/**
 * The show message notification is sent from a server to a client to ask
 * the client to display a particular message in the user interface.
 */


var ShowMessageNotification;

(function (ShowMessageNotification) {
  ShowMessageNotification.type = new messages_1.ProtocolNotificationType('window/showMessage');
})(ShowMessageNotification = exports.ShowMessageNotification || (exports.ShowMessageNotification = {}));
/**
 * The show message request is sent from the server to the client to show a message
 * and a set of options actions to the user.
 */


var ShowMessageRequest;

(function (ShowMessageRequest) {
  ShowMessageRequest.type = new messages_1.ProtocolRequestType('window/showMessageRequest');
})(ShowMessageRequest = exports.ShowMessageRequest || (exports.ShowMessageRequest = {}));
/**
 * The log message notification is sent from the server to the client to ask
 * the client to log a particular message.
 */


var LogMessageNotification;

(function (LogMessageNotification) {
  LogMessageNotification.type = new messages_1.ProtocolNotificationType('window/logMessage');
})(LogMessageNotification = exports.LogMessageNotification || (exports.LogMessageNotification = {})); //---- Telemetry notification

/**
 * The telemetry event notification is sent from the server to the client to ask
 * the client to log telemetry data.
 */


var TelemetryEventNotification;

(function (TelemetryEventNotification) {
  TelemetryEventNotification.type = new messages_1.ProtocolNotificationType('telemetry/event');
})(TelemetryEventNotification = exports.TelemetryEventNotification || (exports.TelemetryEventNotification = {}));
/**
 * Defines how the host (editor) should sync
 * document changes to the language server.
 */


var TextDocumentSyncKind;

(function (TextDocumentSyncKind) {
  /**
   * Documents should not be synced at all.
   */
  TextDocumentSyncKind.None = 0;
  /**
   * Documents are synced by always sending the full content
   * of the document.
   */

  TextDocumentSyncKind.Full = 1;
  /**
   * Documents are synced by sending the full content on open.
   * After that only incremental updates to the document are
   * send.
   */

  TextDocumentSyncKind.Incremental = 2;
})(TextDocumentSyncKind = exports.TextDocumentSyncKind || (exports.TextDocumentSyncKind = {}));
/**
 * The document open notification is sent from the client to the server to signal
 * newly opened text documents. The document's truth is now managed by the client
 * and the server must not try to read the document's truth using the document's
 * uri. Open in this sense means it is managed by the client. It doesn't necessarily
 * mean that its content is presented in an editor. An open notification must not
 * be sent more than once without a corresponding close notification send before.
 * This means open and close notification must be balanced and the max open count
 * is one.
 */


var DidOpenTextDocumentNotification;

(function (DidOpenTextDocumentNotification) {
  DidOpenTextDocumentNotification.method = 'textDocument/didOpen';
  DidOpenTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification.method);
})(DidOpenTextDocumentNotification = exports.DidOpenTextDocumentNotification || (exports.DidOpenTextDocumentNotification = {}));
/**
 * The document change notification is sent from the client to the server to signal
 * changes to a text document.
 */


var DidChangeTextDocumentNotification;

(function (DidChangeTextDocumentNotification) {
  DidChangeTextDocumentNotification.method = 'textDocument/didChange';
  DidChangeTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification.method);
})(DidChangeTextDocumentNotification = exports.DidChangeTextDocumentNotification || (exports.DidChangeTextDocumentNotification = {}));
/**
 * The document close notification is sent from the client to the server when
 * the document got closed in the client. The document's truth now exists where
 * the document's uri points to (e.g. if the document's uri is a file uri the
 * truth now exists on disk). As with the open notification the close notification
 * is about managing the document's content. Receiving a close notification
 * doesn't mean that the document was open in an editor before. A close
 * notification requires a previous open notification to be sent.
 */


var DidCloseTextDocumentNotification;

(function (DidCloseTextDocumentNotification) {
  DidCloseTextDocumentNotification.method = 'textDocument/didClose';
  DidCloseTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification.method);
})(DidCloseTextDocumentNotification = exports.DidCloseTextDocumentNotification || (exports.DidCloseTextDocumentNotification = {}));
/**
 * The document save notification is sent from the client to the server when
 * the document got saved in the client.
 */


var DidSaveTextDocumentNotification;

(function (DidSaveTextDocumentNotification) {
  DidSaveTextDocumentNotification.method = 'textDocument/didSave';
  DidSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification.method);
})(DidSaveTextDocumentNotification = exports.DidSaveTextDocumentNotification || (exports.DidSaveTextDocumentNotification = {}));
/**
 * Represents reasons why a text document is saved.
 */


var TextDocumentSaveReason;

(function (TextDocumentSaveReason) {
  /**
   * Manually triggered, e.g. by the user pressing save, by starting debugging,
   * or by an API call.
   */
  TextDocumentSaveReason.Manual = 1;
  /**
   * Automatic after a delay.
   */

  TextDocumentSaveReason.AfterDelay = 2;
  /**
   * When the editor lost focus.
   */

  TextDocumentSaveReason.FocusOut = 3;
})(TextDocumentSaveReason = exports.TextDocumentSaveReason || (exports.TextDocumentSaveReason = {}));
/**
 * A document will save notification is sent from the client to the server before
 * the document is actually saved.
 */


var WillSaveTextDocumentNotification;

(function (WillSaveTextDocumentNotification) {
  WillSaveTextDocumentNotification.method = 'textDocument/willSave';
  WillSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification.method);
})(WillSaveTextDocumentNotification = exports.WillSaveTextDocumentNotification || (exports.WillSaveTextDocumentNotification = {}));
/**
 * A document will save request is sent from the client to the server before
 * the document is actually saved. The request can return an array of TextEdits
 * which will be applied to the text document before it is saved. Please note that
 * clients might drop results if computing the text edits took too long or if a
 * server constantly fails on this request. This is done to keep the save fast and
 * reliable.
 */


var WillSaveTextDocumentWaitUntilRequest;

(function (WillSaveTextDocumentWaitUntilRequest) {
  WillSaveTextDocumentWaitUntilRequest.method = 'textDocument/willSaveWaitUntil';
  WillSaveTextDocumentWaitUntilRequest.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest.method);
})(WillSaveTextDocumentWaitUntilRequest = exports.WillSaveTextDocumentWaitUntilRequest || (exports.WillSaveTextDocumentWaitUntilRequest = {}));
/**
 * The watched files notification is sent from the client to the server when
 * the client detects changes to file watched by the language client.
 */


var DidChangeWatchedFilesNotification;

(function (DidChangeWatchedFilesNotification) {
  DidChangeWatchedFilesNotification.type = new messages_1.ProtocolNotificationType('workspace/didChangeWatchedFiles');
})(DidChangeWatchedFilesNotification = exports.DidChangeWatchedFilesNotification || (exports.DidChangeWatchedFilesNotification = {}));
/**
 * The file event type
 */


var FileChangeType;

(function (FileChangeType) {
  /**
   * The file got created.
   */
  FileChangeType.Created = 1;
  /**
   * The file got changed.
   */

  FileChangeType.Changed = 2;
  /**
   * The file got deleted.
   */

  FileChangeType.Deleted = 3;
})(FileChangeType = exports.FileChangeType || (exports.FileChangeType = {}));

var WatchKind;

(function (WatchKind) {
  /**
   * Interested in create events.
   */
  WatchKind.Create = 1;
  /**
   * Interested in change events
   */

  WatchKind.Change = 2;
  /**
   * Interested in delete events
   */

  WatchKind.Delete = 4;
})(WatchKind = exports.WatchKind || (exports.WatchKind = {}));
/**
 * Diagnostics notification are sent from the server to the client to signal
 * results of validation runs.
 */


var PublishDiagnosticsNotification;

(function (PublishDiagnosticsNotification) {
  PublishDiagnosticsNotification.type = new messages_1.ProtocolNotificationType('textDocument/publishDiagnostics');
})(PublishDiagnosticsNotification = exports.PublishDiagnosticsNotification || (exports.PublishDiagnosticsNotification = {}));
/**
 * How a completion was triggered
 */


var CompletionTriggerKind;

(function (CompletionTriggerKind) {
  /**
   * Completion was triggered by typing an identifier (24x7 code
   * complete), manual invocation (e.g Ctrl+Space) or via API.
   */
  CompletionTriggerKind.Invoked = 1;
  /**
   * Completion was triggered by a trigger character specified by
   * the `triggerCharacters` properties of the `CompletionRegistrationOptions`.
   */

  CompletionTriggerKind.TriggerCharacter = 2;
  /**
   * Completion was re-triggered as current completion list is incomplete
   */

  CompletionTriggerKind.TriggerForIncompleteCompletions = 3;
})(CompletionTriggerKind = exports.CompletionTriggerKind || (exports.CompletionTriggerKind = {}));
/**
 * Request to request completion at a given text document position. The request's
 * parameter is of type [TextDocumentPosition](#TextDocumentPosition) the response
 * is of type [CompletionItem[]](#CompletionItem) or [CompletionList](#CompletionList)
 * or a Thenable that resolves to such.
 *
 * The request can delay the computation of the [`detail`](#CompletionItem.detail)
 * and [`documentation`](#CompletionItem.documentation) properties to the `completionItem/resolve`
 * request. However, properties that are needed for the initial sorting and filtering, like `sortText`,
 * `filterText`, `insertText`, and `textEdit`, must not be changed during resolve.
 */


var CompletionRequest;

(function (CompletionRequest) {
  CompletionRequest.method = 'textDocument/completion';
  CompletionRequest.type = new messages_1.ProtocolRequestType(CompletionRequest.method);
  /** @deprecated Use CompletionRequest.type */

  CompletionRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(CompletionRequest = exports.CompletionRequest || (exports.CompletionRequest = {}));
/**
 * Request to resolve additional information for a given completion item.The request's
 * parameter is of type [CompletionItem](#CompletionItem) the response
 * is of type [CompletionItem](#CompletionItem) or a Thenable that resolves to such.
 */


var CompletionResolveRequest;

(function (CompletionResolveRequest) {
  CompletionResolveRequest.method = 'completionItem/resolve';
  CompletionResolveRequest.type = new messages_1.ProtocolRequestType(CompletionResolveRequest.method);
})(CompletionResolveRequest = exports.CompletionResolveRequest || (exports.CompletionResolveRequest = {}));
/**
 * Request to request hover information at a given text document position. The request's
 * parameter is of type [TextDocumentPosition](#TextDocumentPosition) the response is of
 * type [Hover](#Hover) or a Thenable that resolves to such.
 */


var HoverRequest;

(function (HoverRequest) {
  HoverRequest.method = 'textDocument/hover';
  HoverRequest.type = new messages_1.ProtocolRequestType(HoverRequest.method);
})(HoverRequest = exports.HoverRequest || (exports.HoverRequest = {}));
/**
 * How a signature help was triggered.
 *
 * @since 3.15.0
 */


var SignatureHelpTriggerKind;

(function (SignatureHelpTriggerKind) {
  /**
   * Signature help was invoked manually by the user or by a command.
   */
  SignatureHelpTriggerKind.Invoked = 1;
  /**
   * Signature help was triggered by a trigger character.
   */

  SignatureHelpTriggerKind.TriggerCharacter = 2;
  /**
   * Signature help was triggered by the cursor moving or by the document content changing.
   */

  SignatureHelpTriggerKind.ContentChange = 3;
})(SignatureHelpTriggerKind = exports.SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = {}));

var SignatureHelpRequest;

(function (SignatureHelpRequest) {
  SignatureHelpRequest.method = 'textDocument/signatureHelp';
  SignatureHelpRequest.type = new messages_1.ProtocolRequestType(SignatureHelpRequest.method);
})(SignatureHelpRequest = exports.SignatureHelpRequest || (exports.SignatureHelpRequest = {}));
/**
 * A request to resolve the definition location of a symbol at a given text
 * document position. The request's parameter is of type [TextDocumentPosition]
 * (#TextDocumentPosition) the response is of either type [Definition](#Definition)
 * or a typed array of [DefinitionLink](#DefinitionLink) or a Thenable that resolves
 * to such.
 */


var DefinitionRequest;

(function (DefinitionRequest) {
  DefinitionRequest.method = 'textDocument/definition';
  DefinitionRequest.type = new messages_1.ProtocolRequestType(DefinitionRequest.method);
  /** @deprecated Use DefinitionRequest.type */

  DefinitionRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(DefinitionRequest = exports.DefinitionRequest || (exports.DefinitionRequest = {}));
/**
 * A request to resolve project-wide references for the symbol denoted
 * by the given text document position. The request's parameter is of
 * type [ReferenceParams](#ReferenceParams) the response is of type
 * [Location[]](#Location) or a Thenable that resolves to such.
 */


var ReferencesRequest;

(function (ReferencesRequest) {
  ReferencesRequest.method = 'textDocument/references';
  ReferencesRequest.type = new messages_1.ProtocolRequestType(ReferencesRequest.method);
  /** @deprecated Use ReferencesRequest.type */

  ReferencesRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(ReferencesRequest = exports.ReferencesRequest || (exports.ReferencesRequest = {}));
/**
 * Request to resolve a [DocumentHighlight](#DocumentHighlight) for a given
 * text document position. The request's parameter is of type [TextDocumentPosition]
 * (#TextDocumentPosition) the request response is of type [DocumentHighlight[]]
 * (#DocumentHighlight) or a Thenable that resolves to such.
 */


var DocumentHighlightRequest;

(function (DocumentHighlightRequest) {
  DocumentHighlightRequest.method = 'textDocument/documentHighlight';
  DocumentHighlightRequest.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest.method);
  /** @deprecated Use DocumentHighlightRequest.type */

  DocumentHighlightRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(DocumentHighlightRequest = exports.DocumentHighlightRequest || (exports.DocumentHighlightRequest = {}));
/**
 * A request to list all symbols found in a given text document. The request's
 * parameter is of type [TextDocumentIdentifier](#TextDocumentIdentifier) the
 * response is of type [SymbolInformation[]](#SymbolInformation) or a Thenable
 * that resolves to such.
 */


var DocumentSymbolRequest;

(function (DocumentSymbolRequest) {
  DocumentSymbolRequest.method = 'textDocument/documentSymbol';
  DocumentSymbolRequest.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest.method);
  /** @deprecated Use DocumentSymbolRequest.type */

  DocumentSymbolRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(DocumentSymbolRequest = exports.DocumentSymbolRequest || (exports.DocumentSymbolRequest = {}));
/**
 * A request to provide commands for the given text document and range.
 */


var CodeActionRequest;

(function (CodeActionRequest) {
  CodeActionRequest.method = 'textDocument/codeAction';
  CodeActionRequest.type = new messages_1.ProtocolRequestType(CodeActionRequest.method);
  /** @deprecated Use CodeActionRequest.type */

  CodeActionRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(CodeActionRequest = exports.CodeActionRequest || (exports.CodeActionRequest = {}));
/**
 * A request to list project-wide symbols matching the query string given
 * by the [WorkspaceSymbolParams](#WorkspaceSymbolParams). The response is
 * of type [SymbolInformation[]](#SymbolInformation) or a Thenable that
 * resolves to such.
 */


var WorkspaceSymbolRequest;

(function (WorkspaceSymbolRequest) {
  WorkspaceSymbolRequest.method = 'workspace/symbol';
  WorkspaceSymbolRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest.method);
  /** @deprecated Use WorkspaceSymbolRequest.type */

  WorkspaceSymbolRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(WorkspaceSymbolRequest = exports.WorkspaceSymbolRequest || (exports.WorkspaceSymbolRequest = {}));
/**
 * A request to provide code lens for the given text document.
 */


var CodeLensRequest;

(function (CodeLensRequest) {
  CodeLensRequest.type = new messages_1.ProtocolRequestType('textDocument/codeLens');
  /** @deprecated Use CodeLensRequest.type */

  CodeLensRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(CodeLensRequest = exports.CodeLensRequest || (exports.CodeLensRequest = {}));
/**
 * A request to resolve a command for a given code lens.
 */


var CodeLensResolveRequest;

(function (CodeLensResolveRequest) {
  CodeLensResolveRequest.type = new messages_1.ProtocolRequestType('codeLens/resolve');
})(CodeLensResolveRequest = exports.CodeLensResolveRequest || (exports.CodeLensResolveRequest = {}));
/**
 * A request to provide document links
 */


var DocumentLinkRequest;

(function (DocumentLinkRequest) {
  DocumentLinkRequest.method = 'textDocument/documentLink';
  DocumentLinkRequest.type = new messages_1.ProtocolRequestType(DocumentLinkRequest.method);
  /** @deprecated Use DocumentLinkRequest.type */

  DocumentLinkRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(DocumentLinkRequest = exports.DocumentLinkRequest || (exports.DocumentLinkRequest = {}));
/**
 * Request to resolve additional information for a given document link. The request's
 * parameter is of type [DocumentLink](#DocumentLink) the response
 * is of type [DocumentLink](#DocumentLink) or a Thenable that resolves to such.
 */


var DocumentLinkResolveRequest;

(function (DocumentLinkResolveRequest) {
  DocumentLinkResolveRequest.type = new messages_1.ProtocolRequestType('documentLink/resolve');
})(DocumentLinkResolveRequest = exports.DocumentLinkResolveRequest || (exports.DocumentLinkResolveRequest = {}));
/**
 * A request to to format a whole document.
 */


var DocumentFormattingRequest;

(function (DocumentFormattingRequest) {
  DocumentFormattingRequest.method = 'textDocument/formatting';
  DocumentFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest.method);
})(DocumentFormattingRequest = exports.DocumentFormattingRequest || (exports.DocumentFormattingRequest = {}));
/**
 * A request to to format a range in a document.
 */


var DocumentRangeFormattingRequest;

(function (DocumentRangeFormattingRequest) {
  DocumentRangeFormattingRequest.method = 'textDocument/rangeFormatting';
  DocumentRangeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest.method);
})(DocumentRangeFormattingRequest = exports.DocumentRangeFormattingRequest || (exports.DocumentRangeFormattingRequest = {}));
/**
 * A request to format a document on type.
 */


var DocumentOnTypeFormattingRequest;

(function (DocumentOnTypeFormattingRequest) {
  DocumentOnTypeFormattingRequest.method = 'textDocument/onTypeFormatting';
  DocumentOnTypeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest.method);
})(DocumentOnTypeFormattingRequest = exports.DocumentOnTypeFormattingRequest || (exports.DocumentOnTypeFormattingRequest = {}));
/**
 * A request to rename a symbol.
 */


var RenameRequest;

(function (RenameRequest) {
  RenameRequest.method = 'textDocument/rename';
  RenameRequest.type = new messages_1.ProtocolRequestType(RenameRequest.method);
})(RenameRequest = exports.RenameRequest || (exports.RenameRequest = {}));
/**
 * A request to test and perform the setup necessary for a rename.
 */


var PrepareRenameRequest;

(function (PrepareRenameRequest) {
  PrepareRenameRequest.method = 'textDocument/prepareRename';
  PrepareRenameRequest.type = new messages_1.ProtocolRequestType(PrepareRenameRequest.method);
})(PrepareRenameRequest = exports.PrepareRenameRequest || (exports.PrepareRenameRequest = {}));
/**
 * A request send from the client to the server to execute a command. The request might return
 * a workspace edit which the client will apply to the workspace.
 */


var ExecuteCommandRequest;

(function (ExecuteCommandRequest) {
  ExecuteCommandRequest.type = new messages_1.ProtocolRequestType('workspace/executeCommand');
})(ExecuteCommandRequest = exports.ExecuteCommandRequest || (exports.ExecuteCommandRequest = {}));
/**
 * A request sent from the server to the client to modified certain resources.
 */


var ApplyWorkspaceEditRequest;

(function (ApplyWorkspaceEditRequest) {
  ApplyWorkspaceEditRequest.type = new messages_1.ProtocolRequestType('workspace/applyEdit');
})(ApplyWorkspaceEditRequest = exports.ApplyWorkspaceEditRequest || (exports.ApplyWorkspaceEditRequest = {}));

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/protocol.progress.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/protocol.progress.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../node_modules/vscode-languageserver-protocol/lib/messages.js");

var WorkDoneProgress;

(function (WorkDoneProgress) {
  WorkDoneProgress.type = new vscode_jsonrpc_1.ProgressType();
})(WorkDoneProgress = exports.WorkDoneProgress || (exports.WorkDoneProgress = {}));
/**
 * The `window/workDoneProgress/create` request is sent from the server to the client to initiate progress
 * reporting from the server.
 */


var WorkDoneProgressCreateRequest;

(function (WorkDoneProgressCreateRequest) {
  WorkDoneProgressCreateRequest.type = new messages_1.ProtocolRequestType('window/workDoneProgress/create');
})(WorkDoneProgressCreateRequest = exports.WorkDoneProgressCreateRequest || (exports.WorkDoneProgressCreateRequest = {}));
/**
 * The `window/workDoneProgress/cancel` notification is sent from  the client to the server to cancel a progress
 * initiated on the server side.
 */


var WorkDoneProgressCancelNotification;

(function (WorkDoneProgressCancelNotification) {
  WorkDoneProgressCancelNotification.type = new messages_1.ProtocolNotificationType('window/workDoneProgress/cancel');
})(WorkDoneProgressCancelNotification = exports.WorkDoneProgressCancelNotification || (exports.WorkDoneProgressCancelNotification = {}));

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/protocol.selectionRange.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/protocol.selectionRange.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * A request to provide selection ranges in a document. The request's
 * parameter is of type [SelectionRangeParams](#SelectionRangeParams), the
 * response is of type [SelectionRange[]](#SelectionRange[]) or a Thenable
 * that resolves to such.
 */


var SelectionRangeRequest;

(function (SelectionRangeRequest) {
  SelectionRangeRequest.method = 'textDocument/selectionRange';
  SelectionRangeRequest.type = new messages_1.ProtocolRequestType(SelectionRangeRequest.method);
  /** @deprecated  Use SelectionRangeRequest.type */

  SelectionRangeRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(SelectionRangeRequest = exports.SelectionRangeRequest || (exports.SelectionRangeRequest = {}));

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/protocol.sematicTokens.proposed.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/protocol.sematicTokens.proposed.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var messages_1 = __webpack_require__(/*! ./messages */ "../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * A set of predefined token types. This set is not fixed
 * an clients can specify additional token types via the
 * corresponding client capabilities.
 *
 * @since 3.16.0 - Proposed state
 */


var SemanticTokenTypes;

(function (SemanticTokenTypes) {
  SemanticTokenTypes["comment"] = "comment";
  SemanticTokenTypes["keyword"] = "keyword";
  SemanticTokenTypes["string"] = "string";
  SemanticTokenTypes["number"] = "number";
  SemanticTokenTypes["regexp"] = "regexp";
  SemanticTokenTypes["operator"] = "operator";
  SemanticTokenTypes["namespace"] = "namespace";
  SemanticTokenTypes["type"] = "type";
  SemanticTokenTypes["struct"] = "struct";
  SemanticTokenTypes["class"] = "class";
  SemanticTokenTypes["interface"] = "interface";
  SemanticTokenTypes["enum"] = "enum";
  SemanticTokenTypes["typeParameter"] = "typeParameter";
  SemanticTokenTypes["function"] = "function";
  SemanticTokenTypes["member"] = "member";
  SemanticTokenTypes["property"] = "property";
  SemanticTokenTypes["macro"] = "macro";
  SemanticTokenTypes["variable"] = "variable";
  SemanticTokenTypes["parameter"] = "parameter";
  SemanticTokenTypes["label"] = "label";
})(SemanticTokenTypes = exports.SemanticTokenTypes || (exports.SemanticTokenTypes = {}));
/**
 * A set of predefined token modifiers. This set is not fixed
 * an clients can specify additional token types via the
 * corresponding client capabilities.
 *
 * @since 3.16.0 - Proposed state
 */


var SemanticTokenModifiers;

(function (SemanticTokenModifiers) {
  SemanticTokenModifiers["documentation"] = "documentation";
  SemanticTokenModifiers["declaration"] = "declaration";
  SemanticTokenModifiers["definition"] = "definition";
  SemanticTokenModifiers["reference"] = "reference";
  SemanticTokenModifiers["static"] = "static";
  SemanticTokenModifiers["abstract"] = "abstract";
  SemanticTokenModifiers["deprecated"] = "deprecated";
  SemanticTokenModifiers["async"] = "async";
  SemanticTokenModifiers["volatile"] = "volatile";
  SemanticTokenModifiers["readonly"] = "readonly";
})(SemanticTokenModifiers = exports.SemanticTokenModifiers || (exports.SemanticTokenModifiers = {}));
/**
 * @since 3.16.0 - Proposed state
 */


var SemanticTokens;

(function (SemanticTokens) {
  function is(value) {
    var candidate = value;
    return candidate !== undefined && (candidate.resultId === undefined || typeof candidate.resultId === 'string') && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === 'number');
  }

  SemanticTokens.is = is;
})(SemanticTokens = exports.SemanticTokens || (exports.SemanticTokens = {}));
/**
 * @since 3.16.0 - Proposed state
 */


var SemanticTokensRequest;

(function (SemanticTokensRequest) {
  SemanticTokensRequest.method = 'textDocument/semanticTokens';
  SemanticTokensRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRequest.method);
})(SemanticTokensRequest = exports.SemanticTokensRequest || (exports.SemanticTokensRequest = {}));
/**
 * @since 3.16.0 - Proposed state
 */


var SemanticTokensEditsRequest;

(function (SemanticTokensEditsRequest) {
  SemanticTokensEditsRequest.method = 'textDocument/semanticTokens/edits';
  SemanticTokensEditsRequest.type = new messages_1.ProtocolRequestType(SemanticTokensEditsRequest.method);
})(SemanticTokensEditsRequest = exports.SemanticTokensEditsRequest || (exports.SemanticTokensEditsRequest = {}));
/**
 * @since 3.16.0 - Proposed state
 */


var SemanticTokensRangeRequest;

(function (SemanticTokensRangeRequest) {
  SemanticTokensRangeRequest.method = 'textDocument/semanticTokens/range';
  SemanticTokensRangeRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest.method);
})(SemanticTokensRangeRequest = exports.SemanticTokensRangeRequest || (exports.SemanticTokensRangeRequest = {}));

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/protocol.typeDefinition.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/protocol.typeDefinition.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../node_modules/vscode-languageserver-protocol/lib/messages.js"); // @ts-ignore: to avoid inlining LocatioLink as dynamic import


var __noDynamicImport;
/**
 * A request to resolve the type definition locations of a symbol at a given text
 * document position. The request's parameter is of type [TextDocumentPositioParams]
 * (#TextDocumentPositionParams) the response is of type [Definition](#Definition) or a
 * Thenable that resolves to such.
 */


var TypeDefinitionRequest;

(function (TypeDefinitionRequest) {
  TypeDefinitionRequest.method = 'textDocument/typeDefinition';
  TypeDefinitionRequest.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest.method);
  /** @deprecated Use TypeDefinitionRequest.type */

  TypeDefinitionRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(TypeDefinitionRequest = exports.TypeDefinitionRequest || (exports.TypeDefinitionRequest = {}));

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/protocol.workspaceFolders.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/protocol.workspaceFolders.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var messages_1 = __webpack_require__(/*! ./messages */ "../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * The `workspace/workspaceFolders` is sent from the server to the client to fetch the open workspace folders.
 */


var WorkspaceFoldersRequest;

(function (WorkspaceFoldersRequest) {
  WorkspaceFoldersRequest.type = new messages_1.ProtocolRequestType0('workspace/workspaceFolders');
})(WorkspaceFoldersRequest = exports.WorkspaceFoldersRequest || (exports.WorkspaceFoldersRequest = {}));
/**
 * The `workspace/didChangeWorkspaceFolders` notification is sent from the client to the server when the workspace
 * folder configuration changes.
 */


var DidChangeWorkspaceFoldersNotification;

(function (DidChangeWorkspaceFoldersNotification) {
  DidChangeWorkspaceFoldersNotification.type = new messages_1.ProtocolNotificationType('workspace/didChangeWorkspaceFolders');
})(DidChangeWorkspaceFoldersNotification = exports.DidChangeWorkspaceFoldersNotification || (exports.DidChangeWorkspaceFoldersNotification = {}));

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/lib/utils/is.js":
/*!**********************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/lib/utils/is.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _boolean(value) {
  return value === true || value === false;
}

exports["boolean"] = _boolean;

function string(value) {
  return typeof value === 'string' || value instanceof String;
}

exports.string = string;

function number(value) {
  return typeof value === 'number' || value instanceof Number;
}

exports.number = number;

function error(value) {
  return value instanceof Error;
}

exports.error = error;

function func(value) {
  return typeof value === 'function';
}

exports.func = func;

function array(value) {
  return Array.isArray(value);
}

exports.array = array;

function stringArray(value) {
  return array(value) && value.every(function (elem) {
    return string(elem);
  });
}

exports.stringArray = stringArray;

function typedArray(value, check) {
  return Array.isArray(value) && value.every(check);
}

exports.typedArray = typedArray;

function objectLiteral(value) {
  // Strictly speaking class instances pass this check as well. Since the LSP
  // doesn't use classes we ignore this for now. If we do we need to add something
  // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
  return value !== null && _typeof(value) === 'object';
}

exports.objectLiteral = objectLiteral;

/***/ }),

/***/ "../node_modules/vscode-languageserver-protocol/node_modules/vscode-languageserver-types/lib/esm/main.js":
/*!***************************************************************************************************************!*\
  !*** ../node_modules/vscode-languageserver-protocol/node_modules/vscode-languageserver-types/lib/esm/main.js ***!
  \***************************************************************************************************************/
/*! exports provided: Position, Range, Location, LocationLink, Color, ColorInformation, ColorPresentation, FoldingRangeKind, FoldingRange, DiagnosticRelatedInformation, DiagnosticSeverity, DiagnosticTag, Diagnostic, Command, TextEdit, TextDocumentEdit, CreateFile, RenameFile, DeleteFile, WorkspaceEdit, WorkspaceChange, TextDocumentIdentifier, VersionedTextDocumentIdentifier, TextDocumentItem, MarkupKind, MarkupContent, CompletionItemKind, InsertTextFormat, CompletionItemTag, CompletionItem, CompletionList, MarkedString, Hover, ParameterInformation, SignatureInformation, DocumentHighlightKind, DocumentHighlight, SymbolKind, SymbolTag, SymbolInformation, DocumentSymbol, CodeActionKind, CodeActionContext, CodeAction, CodeLens, FormattingOptions, DocumentLink, SelectionRange, EOL, TextDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationLink", function() { return LocationLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInformation", function() { return ColorInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPresentation", function() { return ColorPresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRangeKind", function() { return FoldingRangeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRange", function() { return FoldingRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticRelatedInformation", function() { return DiagnosticRelatedInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticSeverity", function() { return DiagnosticSeverity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticTag", function() { return DiagnosticTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diagnostic", function() { return Diagnostic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEdit", function() { return TextEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentEdit", function() { return TextDocumentEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFile", function() { return CreateFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameFile", function() { return RenameFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFile", function() { return DeleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceEdit", function() { return WorkspaceEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceChange", function() { return WorkspaceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentIdentifier", function() { return TextDocumentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionedTextDocumentIdentifier", function() { return VersionedTextDocumentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentItem", function() { return TextDocumentItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupKind", function() { return MarkupKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupContent", function() { return MarkupContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItemKind", function() { return CompletionItemKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertTextFormat", function() { return InsertTextFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItemTag", function() { return CompletionItemTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItem", function() { return CompletionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionList", function() { return CompletionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedString", function() { return MarkedString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hover", function() { return Hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterInformation", function() { return ParameterInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureInformation", function() { return SignatureInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlightKind", function() { return DocumentHighlightKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlight", function() { return DocumentHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolKind", function() { return SymbolKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolTag", function() { return SymbolTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolInformation", function() { return SymbolInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSymbol", function() { return DocumentSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionKind", function() { return CodeActionKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionContext", function() { return CodeActionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeAction", function() { return CodeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLens", function() { return CodeLens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattingOptions", function() { return FormattingOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentLink", function() { return DocumentLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRange", function() { return SelectionRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOL", function() { return EOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocument", function() { return TextDocument; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

/**
 * The Position namespace provides helper functions to work with
 * [Position](#Position) literals.
 */


var Position;

(function (Position) {
  /**
   * Creates a new Position literal from the given line and character.
   * @param line The position's line.
   * @param character The position's character.
   */
  function create(line, character) {
    return {
      line: line,
      character: character
    };
  }

  Position.create = create;
  /**
   * Checks whether the given liternal conforms to the [Position](#Position) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.objectLiteral(candidate) && Is.number(candidate.line) && Is.number(candidate.character);
  }

  Position.is = is;
})(Position || (Position = {}));
/**
 * The Range namespace provides helper functions to work with
 * [Range](#Range) literals.
 */


var Range;

(function (Range) {
  function create(one, two, three, four) {
    if (Is.number(one) && Is.number(two) && Is.number(three) && Is.number(four)) {
      return {
        start: Position.create(one, two),
        end: Position.create(three, four)
      };
    } else if (Position.is(one) && Position.is(two)) {
      return {
        start: one,
        end: two
      };
    } else {
      throw new Error("Range#create called with invalid arguments[" + one + ", " + two + ", " + three + ", " + four + "]");
    }
  }

  Range.create = create;
  /**
   * Checks whether the given literal conforms to the [Range](#Range) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
  }

  Range.is = is;
})(Range || (Range = {}));
/**
 * The Location namespace provides helper functions to work with
 * [Location](#Location) literals.
 */


var Location;

(function (Location) {
  /**
   * Creates a Location literal.
   * @param uri The location's uri.
   * @param range The location's range.
   */
  function create(uri, range) {
    return {
      uri: uri,
      range: range
    };
  }

  Location.create = create;
  /**
   * Checks whether the given literal conforms to the [Location](#Location) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
  }

  Location.is = is;
})(Location || (Location = {}));
/**
 * The LocationLink namespace provides helper functions to work with
 * [LocationLink](#LocationLink) literals.
 */


var LocationLink;

(function (LocationLink) {
  /**
   * Creates a LocationLink literal.
   * @param targetUri The definition's uri.
   * @param targetRange The full range of the definition.
   * @param targetSelectionRange The span of the symbol definition at the target.
   * @param originSelectionRange The span of the symbol being defined in the originating source file.
   */
  function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
    return {
      targetUri: targetUri,
      targetRange: targetRange,
      targetSelectionRange: targetSelectionRange,
      originSelectionRange: originSelectionRange
    };
  }

  LocationLink.create = create;
  /**
   * Checks whether the given literal conforms to the [LocationLink](#LocationLink) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && (Range.is(candidate.targetSelectionRange) || Is.undefined(candidate.targetSelectionRange)) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
  }

  LocationLink.is = is;
})(LocationLink || (LocationLink = {}));
/**
 * The Color namespace provides helper functions to work with
 * [Color](#Color) literals.
 */


var Color;

(function (Color) {
  /**
   * Creates a new Color literal.
   */
  function create(red, green, blue, alpha) {
    return {
      red: red,
      green: green,
      blue: blue,
      alpha: alpha
    };
  }

  Color.create = create;
  /**
   * Checks whether the given literal conforms to the [Color](#Color) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.number(candidate.red) && Is.number(candidate.green) && Is.number(candidate.blue) && Is.number(candidate.alpha);
  }

  Color.is = is;
})(Color || (Color = {}));
/**
 * The ColorInformation namespace provides helper functions to work with
 * [ColorInformation](#ColorInformation) literals.
 */


var ColorInformation;

(function (ColorInformation) {
  /**
   * Creates a new ColorInformation literal.
   */
  function create(range, color) {
    return {
      range: range,
      color: color
    };
  }

  ColorInformation.create = create;
  /**
   * Checks whether the given literal conforms to the [ColorInformation](#ColorInformation) interface.
   */

  function is(value) {
    var candidate = value;
    return Range.is(candidate.range) && Color.is(candidate.color);
  }

  ColorInformation.is = is;
})(ColorInformation || (ColorInformation = {}));
/**
 * The Color namespace provides helper functions to work with
 * [ColorPresentation](#ColorPresentation) literals.
 */


var ColorPresentation;

(function (ColorPresentation) {
  /**
   * Creates a new ColorInformation literal.
   */
  function create(label, textEdit, additionalTextEdits) {
    return {
      label: label,
      textEdit: textEdit,
      additionalTextEdits: additionalTextEdits
    };
  }

  ColorPresentation.create = create;
  /**
   * Checks whether the given literal conforms to the [ColorInformation](#ColorInformation) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
  }

  ColorPresentation.is = is;
})(ColorPresentation || (ColorPresentation = {}));
/**
 * Enum of known range kinds
 */


var FoldingRangeKind;

(function (FoldingRangeKind) {
  /**
   * Folding range for a comment
   */
  FoldingRangeKind["Comment"] = "comment";
  /**
   * Folding range for a imports or includes
   */

  FoldingRangeKind["Imports"] = "imports";
  /**
   * Folding range for a region (e.g. `#region`)
   */

  FoldingRangeKind["Region"] = "region";
})(FoldingRangeKind || (FoldingRangeKind = {}));
/**
 * The folding range namespace provides helper functions to work with
 * [FoldingRange](#FoldingRange) literals.
 */


var FoldingRange;

(function (FoldingRange) {
  /**
   * Creates a new FoldingRange literal.
   */
  function create(startLine, endLine, startCharacter, endCharacter, kind) {
    var result = {
      startLine: startLine,
      endLine: endLine
    };

    if (Is.defined(startCharacter)) {
      result.startCharacter = startCharacter;
    }

    if (Is.defined(endCharacter)) {
      result.endCharacter = endCharacter;
    }

    if (Is.defined(kind)) {
      result.kind = kind;
    }

    return result;
  }

  FoldingRange.create = create;
  /**
   * Checks whether the given literal conforms to the [FoldingRange](#FoldingRange) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.number(candidate.startLine) && Is.number(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.number(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.number(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
  }

  FoldingRange.is = is;
})(FoldingRange || (FoldingRange = {}));
/**
 * The DiagnosticRelatedInformation namespace provides helper functions to work with
 * [DiagnosticRelatedInformation](#DiagnosticRelatedInformation) literals.
 */


var DiagnosticRelatedInformation;

(function (DiagnosticRelatedInformation) {
  /**
   * Creates a new DiagnosticRelatedInformation literal.
   */
  function create(location, message) {
    return {
      location: location,
      message: message
    };
  }

  DiagnosticRelatedInformation.create = create;
  /**
   * Checks whether the given literal conforms to the [DiagnosticRelatedInformation](#DiagnosticRelatedInformation) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
  }

  DiagnosticRelatedInformation.is = is;
})(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
/**
 * The diagnostic's severity.
 */


var DiagnosticSeverity;

(function (DiagnosticSeverity) {
  /**
   * Reports an error.
   */
  DiagnosticSeverity.Error = 1;
  /**
   * Reports a warning.
   */

  DiagnosticSeverity.Warning = 2;
  /**
   * Reports an information.
   */

  DiagnosticSeverity.Information = 3;
  /**
   * Reports a hint.
   */

  DiagnosticSeverity.Hint = 4;
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
/**
 * The diagnostic tags.
 *
 * @since 3.15.0
 */


var DiagnosticTag;

(function (DiagnosticTag) {
  /**
   * Unused or unnecessary code.
   *
   * Clients are allowed to render diagnostics with this tag faded out instead of having
   * an error squiggle.
   */
  DiagnosticTag.Unnecessary = 1;
  /**
   * Deprecated or obsolete code.
   *
   * Clients are allowed to rendered diagnostics with this tag strike through.
   */

  DiagnosticTag.Deprecated = 2;
})(DiagnosticTag || (DiagnosticTag = {}));
/**
 * The Diagnostic namespace provides helper functions to work with
 * [Diagnostic](#Diagnostic) literals.
 */


var Diagnostic;

(function (Diagnostic) {
  /**
   * Creates a new Diagnostic literal.
   */
  function create(range, message, severity, code, source, relatedInformation) {
    var result = {
      range: range,
      message: message
    };

    if (Is.defined(severity)) {
      result.severity = severity;
    }

    if (Is.defined(code)) {
      result.code = code;
    }

    if (Is.defined(source)) {
      result.source = source;
    }

    if (Is.defined(relatedInformation)) {
      result.relatedInformation = relatedInformation;
    }

    return result;
  }

  Diagnostic.create = create;
  /**
   * Checks whether the given literal conforms to the [Diagnostic](#Diagnostic) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && Range.is(candidate.range) && Is.string(candidate.message) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.number(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
  }

  Diagnostic.is = is;
})(Diagnostic || (Diagnostic = {}));
/**
 * The Command namespace provides helper functions to work with
 * [Command](#Command) literals.
 */


var Command;

(function (Command) {
  /**
   * Creates a new Command literal.
   */
  function create(title, command) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    var result = {
      title: title,
      command: command
    };

    if (Is.defined(args) && args.length > 0) {
      result.arguments = args;
    }

    return result;
  }

  Command.create = create;
  /**
   * Checks whether the given literal conforms to the [Command](#Command) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
  }

  Command.is = is;
})(Command || (Command = {}));
/**
 * The TextEdit namespace provides helper function to create replace,
 * insert and delete edits more easily.
 */


var TextEdit;

(function (TextEdit) {
  /**
   * Creates a replace text edit.
   * @param range The range of text to be replaced.
   * @param newText The new text.
   */
  function replace(range, newText) {
    return {
      range: range,
      newText: newText
    };
  }

  TextEdit.replace = replace;
  /**
   * Creates a insert text edit.
   * @param position The position to insert the text at.
   * @param newText The text to be inserted.
   */

  function insert(position, newText) {
    return {
      range: {
        start: position,
        end: position
      },
      newText: newText
    };
  }

  TextEdit.insert = insert;
  /**
   * Creates a delete text edit.
   * @param range The range of text to be deleted.
   */

  function del(range) {
    return {
      range: range,
      newText: ''
    };
  }

  TextEdit.del = del;

  function is(value) {
    var candidate = value;
    return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
  }

  TextEdit.is = is;
})(TextEdit || (TextEdit = {}));
/**
 * The TextDocumentEdit namespace provides helper function to create
 * an edit that manipulates a text document.
 */


var TextDocumentEdit;

(function (TextDocumentEdit) {
  /**
   * Creates a new `TextDocumentEdit`
   */
  function create(textDocument, edits) {
    return {
      textDocument: textDocument,
      edits: edits
    };
  }

  TextDocumentEdit.create = create;

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && VersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
  }

  TextDocumentEdit.is = is;
})(TextDocumentEdit || (TextDocumentEdit = {}));

var CreateFile;

(function (CreateFile) {
  function create(uri, options) {
    var result = {
      kind: 'create',
      uri: uri
    };

    if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
      result.options = options;
    }

    return result;
  }

  CreateFile.create = create;

  function is(value) {
    var candidate = value;
    return candidate && candidate.kind === 'create' && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is["boolean"](candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is["boolean"](candidate.options.ignoreIfExists)));
  }

  CreateFile.is = is;
})(CreateFile || (CreateFile = {}));

var RenameFile;

(function (RenameFile) {
  function create(oldUri, newUri, options) {
    var result = {
      kind: 'rename',
      oldUri: oldUri,
      newUri: newUri
    };

    if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
      result.options = options;
    }

    return result;
  }

  RenameFile.create = create;

  function is(value) {
    var candidate = value;
    return candidate && candidate.kind === 'rename' && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is["boolean"](candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is["boolean"](candidate.options.ignoreIfExists)));
  }

  RenameFile.is = is;
})(RenameFile || (RenameFile = {}));

var DeleteFile;

(function (DeleteFile) {
  function create(uri, options) {
    var result = {
      kind: 'delete',
      uri: uri
    };

    if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
      result.options = options;
    }

    return result;
  }

  DeleteFile.create = create;

  function is(value) {
    var candidate = value;
    return candidate && candidate.kind === 'delete' && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is["boolean"](candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is["boolean"](candidate.options.ignoreIfNotExists)));
  }

  DeleteFile.is = is;
})(DeleteFile || (DeleteFile = {}));

var WorkspaceEdit;

(function (WorkspaceEdit) {
  function is(value) {
    var candidate = value;
    return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function (change) {
      if (Is.string(change.kind)) {
        return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
      } else {
        return TextDocumentEdit.is(change);
      }
    }));
  }

  WorkspaceEdit.is = is;
})(WorkspaceEdit || (WorkspaceEdit = {}));

var TextEditChangeImpl =
/** @class */
function () {
  function TextEditChangeImpl(edits) {
    this.edits = edits;
  }

  TextEditChangeImpl.prototype.insert = function (position, newText) {
    this.edits.push(TextEdit.insert(position, newText));
  };

  TextEditChangeImpl.prototype.replace = function (range, newText) {
    this.edits.push(TextEdit.replace(range, newText));
  };

  TextEditChangeImpl.prototype["delete"] = function (range) {
    this.edits.push(TextEdit.del(range));
  };

  TextEditChangeImpl.prototype.add = function (edit) {
    this.edits.push(edit);
  };

  TextEditChangeImpl.prototype.all = function () {
    return this.edits;
  };

  TextEditChangeImpl.prototype.clear = function () {
    this.edits.splice(0, this.edits.length);
  };

  return TextEditChangeImpl;
}();
/**
 * A workspace change helps constructing changes to a workspace.
 */


var WorkspaceChange =
/** @class */
function () {
  function WorkspaceChange(workspaceEdit) {
    var _this = this;

    this._textEditChanges = Object.create(null);

    if (workspaceEdit) {
      this._workspaceEdit = workspaceEdit;

      if (workspaceEdit.documentChanges) {
        workspaceEdit.documentChanges.forEach(function (change) {
          if (TextDocumentEdit.is(change)) {
            var textEditChange = new TextEditChangeImpl(change.edits);
            _this._textEditChanges[change.textDocument.uri] = textEditChange;
          }
        });
      } else if (workspaceEdit.changes) {
        Object.keys(workspaceEdit.changes).forEach(function (key) {
          var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
          _this._textEditChanges[key] = textEditChange;
        });
      }
    }
  }

  Object.defineProperty(WorkspaceChange.prototype, "edit", {
    /**
     * Returns the underlying [WorkspaceEdit](#WorkspaceEdit) literal
     * use to be returned from a workspace edit operation like rename.
     */
    get: function get() {
      return this._workspaceEdit;
    },
    enumerable: true,
    configurable: true
  });

  WorkspaceChange.prototype.getTextEditChange = function (key) {
    if (VersionedTextDocumentIdentifier.is(key)) {
      if (!this._workspaceEdit) {
        this._workspaceEdit = {
          documentChanges: []
        };
      }

      if (!this._workspaceEdit.documentChanges) {
        throw new Error('Workspace edit is not configured for document changes.');
      }

      var textDocument = key;
      var result = this._textEditChanges[textDocument.uri];

      if (!result) {
        var edits = [];
        var textDocumentEdit = {
          textDocument: textDocument,
          edits: edits
        };

        this._workspaceEdit.documentChanges.push(textDocumentEdit);

        result = new TextEditChangeImpl(edits);
        this._textEditChanges[textDocument.uri] = result;
      }

      return result;
    } else {
      if (!this._workspaceEdit) {
        this._workspaceEdit = {
          changes: Object.create(null)
        };
      }

      if (!this._workspaceEdit.changes) {
        throw new Error('Workspace edit is not configured for normal text edit changes.');
      }

      var result = this._textEditChanges[key];

      if (!result) {
        var edits = [];
        this._workspaceEdit.changes[key] = edits;
        result = new TextEditChangeImpl(edits);
        this._textEditChanges[key] = result;
      }

      return result;
    }
  };

  WorkspaceChange.prototype.createFile = function (uri, options) {
    this.checkDocumentChanges();

    this._workspaceEdit.documentChanges.push(CreateFile.create(uri, options));
  };

  WorkspaceChange.prototype.renameFile = function (oldUri, newUri, options) {
    this.checkDocumentChanges();

    this._workspaceEdit.documentChanges.push(RenameFile.create(oldUri, newUri, options));
  };

  WorkspaceChange.prototype.deleteFile = function (uri, options) {
    this.checkDocumentChanges();

    this._workspaceEdit.documentChanges.push(DeleteFile.create(uri, options));
  };

  WorkspaceChange.prototype.checkDocumentChanges = function () {
    if (!this._workspaceEdit || !this._workspaceEdit.documentChanges) {
      throw new Error('Workspace edit is not configured for document changes.');
    }
  };

  return WorkspaceChange;
}();


/**
 * The TextDocumentIdentifier namespace provides helper functions to work with
 * [TextDocumentIdentifier](#TextDocumentIdentifier) literals.
 */

var TextDocumentIdentifier;

(function (TextDocumentIdentifier) {
  /**
   * Creates a new TextDocumentIdentifier literal.
   * @param uri The document's uri.
   */
  function create(uri) {
    return {
      uri: uri
    };
  }

  TextDocumentIdentifier.create = create;
  /**
   * Checks whether the given literal conforms to the [TextDocumentIdentifier](#TextDocumentIdentifier) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri);
  }

  TextDocumentIdentifier.is = is;
})(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
/**
 * The VersionedTextDocumentIdentifier namespace provides helper functions to work with
 * [VersionedTextDocumentIdentifier](#VersionedTextDocumentIdentifier) literals.
 */


var VersionedTextDocumentIdentifier;

(function (VersionedTextDocumentIdentifier) {
  /**
   * Creates a new VersionedTextDocumentIdentifier literal.
   * @param uri The document's uri.
   * @param uri The document's text.
   */
  function create(uri, version) {
    return {
      uri: uri,
      version: version
    };
  }

  VersionedTextDocumentIdentifier.create = create;
  /**
   * Checks whether the given literal conforms to the [VersionedTextDocumentIdentifier](#VersionedTextDocumentIdentifier) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.number(candidate.version));
  }

  VersionedTextDocumentIdentifier.is = is;
})(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
/**
 * The TextDocumentItem namespace provides helper functions to work with
 * [TextDocumentItem](#TextDocumentItem) literals.
 */


var TextDocumentItem;

(function (TextDocumentItem) {
  /**
   * Creates a new TextDocumentItem literal.
   * @param uri The document's uri.
   * @param languageId The document's language identifier.
   * @param version The document's version number.
   * @param text The document's text.
   */
  function create(uri, languageId, version, text) {
    return {
      uri: uri,
      languageId: languageId,
      version: version,
      text: text
    };
  }

  TextDocumentItem.create = create;
  /**
   * Checks whether the given literal conforms to the [TextDocumentItem](#TextDocumentItem) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.number(candidate.version) && Is.string(candidate.text);
  }

  TextDocumentItem.is = is;
})(TextDocumentItem || (TextDocumentItem = {}));
/**
 * Describes the content type that a client supports in various
 * result literals like `Hover`, `ParameterInfo` or `CompletionItem`.
 *
 * Please note that `MarkupKinds` must not start with a `$`. This kinds
 * are reserved for internal usage.
 */


var MarkupKind;

(function (MarkupKind) {
  /**
   * Plain text is supported as a content format
   */
  MarkupKind.PlainText = 'plaintext';
  /**
   * Markdown is supported as a content format
   */

  MarkupKind.Markdown = 'markdown';
})(MarkupKind || (MarkupKind = {}));

(function (MarkupKind) {
  /**
   * Checks whether the given value is a value of the [MarkupKind](#MarkupKind) type.
   */
  function is(value) {
    var candidate = value;
    return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
  }

  MarkupKind.is = is;
})(MarkupKind || (MarkupKind = {}));

var MarkupContent;

(function (MarkupContent) {
  /**
   * Checks whether the given value conforms to the [MarkupContent](#MarkupContent) interface.
   */
  function is(value) {
    var candidate = value;
    return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
  }

  MarkupContent.is = is;
})(MarkupContent || (MarkupContent = {}));
/**
 * The kind of a completion entry.
 */


var CompletionItemKind;

(function (CompletionItemKind) {
  CompletionItemKind.Text = 1;
  CompletionItemKind.Method = 2;
  CompletionItemKind.Function = 3;
  CompletionItemKind.Constructor = 4;
  CompletionItemKind.Field = 5;
  CompletionItemKind.Variable = 6;
  CompletionItemKind.Class = 7;
  CompletionItemKind.Interface = 8;
  CompletionItemKind.Module = 9;
  CompletionItemKind.Property = 10;
  CompletionItemKind.Unit = 11;
  CompletionItemKind.Value = 12;
  CompletionItemKind.Enum = 13;
  CompletionItemKind.Keyword = 14;
  CompletionItemKind.Snippet = 15;
  CompletionItemKind.Color = 16;
  CompletionItemKind.File = 17;
  CompletionItemKind.Reference = 18;
  CompletionItemKind.Folder = 19;
  CompletionItemKind.EnumMember = 20;
  CompletionItemKind.Constant = 21;
  CompletionItemKind.Struct = 22;
  CompletionItemKind.Event = 23;
  CompletionItemKind.Operator = 24;
  CompletionItemKind.TypeParameter = 25;
})(CompletionItemKind || (CompletionItemKind = {}));
/**
 * Defines whether the insert text in a completion item should be interpreted as
 * plain text or a snippet.
 */


var InsertTextFormat;

(function (InsertTextFormat) {
  /**
   * The primary text to be inserted is treated as a plain string.
   */
  InsertTextFormat.PlainText = 1;
  /**
   * The primary text to be inserted is treated as a snippet.
   *
   * A snippet can define tab stops and placeholders with `$1`, `$2`
   * and `${3:foo}`. `$0` defines the final tab stop, it defaults to
   * the end of the snippet. Placeholders with equal identifiers are linked,
   * that is typing in one will update others too.
   *
   * See also: https://github.com/Microsoft/vscode/blob/master/src/vs/editor/contrib/snippet/common/snippet.md
   */

  InsertTextFormat.Snippet = 2;
})(InsertTextFormat || (InsertTextFormat = {}));
/**
 * Completion item tags are extra annotations that tweak the rendering of a completion
 * item.
 *
 * @since 3.15.0
 */


var CompletionItemTag;

(function (CompletionItemTag) {
  /**
   * Render a completion as obsolete, usually using a strike-out.
   */
  CompletionItemTag.Deprecated = 1;
})(CompletionItemTag || (CompletionItemTag = {}));
/**
 * The CompletionItem namespace provides functions to deal with
 * completion items.
 */


var CompletionItem;

(function (CompletionItem) {
  /**
   * Create a completion item and seed it with a label.
   * @param label The completion item's label
   */
  function create(label) {
    return {
      label: label
    };
  }

  CompletionItem.create = create;
})(CompletionItem || (CompletionItem = {}));
/**
 * The CompletionList namespace provides functions to deal with
 * completion lists.
 */


var CompletionList;

(function (CompletionList) {
  /**
   * Creates a new completion list.
   *
   * @param items The completion items.
   * @param isIncomplete The list is not complete.
   */
  function create(items, isIncomplete) {
    return {
      items: items ? items : [],
      isIncomplete: !!isIncomplete
    };
  }

  CompletionList.create = create;
})(CompletionList || (CompletionList = {}));

var MarkedString;

(function (MarkedString) {
  /**
   * Creates a marked string from plain text.
   *
   * @param plainText The plain text.
   */
  function fromPlainText(plainText) {
    return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&'); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
  }

  MarkedString.fromPlainText = fromPlainText;
  /**
   * Checks whether the given value conforms to the [MarkedString](#MarkedString) type.
   */

  function is(value) {
    var candidate = value;
    return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
  }

  MarkedString.is = is;
})(MarkedString || (MarkedString = {}));

var Hover;

(function (Hover) {
  /**
   * Checks whether the given value conforms to the [Hover](#Hover) interface.
   */
  function is(value) {
    var candidate = value;
    return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
  }

  Hover.is = is;
})(Hover || (Hover = {}));
/**
 * The ParameterInformation namespace provides helper functions to work with
 * [ParameterInformation](#ParameterInformation) literals.
 */


var ParameterInformation;

(function (ParameterInformation) {
  /**
   * Creates a new parameter information literal.
   *
   * @param label A label string.
   * @param documentation A doc string.
   */
  function create(label, documentation) {
    return documentation ? {
      label: label,
      documentation: documentation
    } : {
      label: label
    };
  }

  ParameterInformation.create = create;
})(ParameterInformation || (ParameterInformation = {}));
/**
 * The SignatureInformation namespace provides helper functions to work with
 * [SignatureInformation](#SignatureInformation) literals.
 */


var SignatureInformation;

(function (SignatureInformation) {
  function create(label, documentation) {
    var parameters = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      parameters[_i - 2] = arguments[_i];
    }

    var result = {
      label: label
    };

    if (Is.defined(documentation)) {
      result.documentation = documentation;
    }

    if (Is.defined(parameters)) {
      result.parameters = parameters;
    } else {
      result.parameters = [];
    }

    return result;
  }

  SignatureInformation.create = create;
})(SignatureInformation || (SignatureInformation = {}));
/**
 * A document highlight kind.
 */


var DocumentHighlightKind;

(function (DocumentHighlightKind) {
  /**
   * A textual occurrence.
   */
  DocumentHighlightKind.Text = 1;
  /**
   * Read-access of a symbol, like reading a variable.
   */

  DocumentHighlightKind.Read = 2;
  /**
   * Write-access of a symbol, like writing to a variable.
   */

  DocumentHighlightKind.Write = 3;
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * DocumentHighlight namespace to provide helper functions to work with
 * [DocumentHighlight](#DocumentHighlight) literals.
 */


var DocumentHighlight;

(function (DocumentHighlight) {
  /**
   * Create a DocumentHighlight object.
   * @param range The range the highlight applies to.
   */
  function create(range, kind) {
    var result = {
      range: range
    };

    if (Is.number(kind)) {
      result.kind = kind;
    }

    return result;
  }

  DocumentHighlight.create = create;
})(DocumentHighlight || (DocumentHighlight = {}));
/**
 * A symbol kind.
 */


var SymbolKind;

(function (SymbolKind) {
  SymbolKind.File = 1;
  SymbolKind.Module = 2;
  SymbolKind.Namespace = 3;
  SymbolKind.Package = 4;
  SymbolKind.Class = 5;
  SymbolKind.Method = 6;
  SymbolKind.Property = 7;
  SymbolKind.Field = 8;
  SymbolKind.Constructor = 9;
  SymbolKind.Enum = 10;
  SymbolKind.Interface = 11;
  SymbolKind.Function = 12;
  SymbolKind.Variable = 13;
  SymbolKind.Constant = 14;
  SymbolKind.String = 15;
  SymbolKind.Number = 16;
  SymbolKind.Boolean = 17;
  SymbolKind.Array = 18;
  SymbolKind.Object = 19;
  SymbolKind.Key = 20;
  SymbolKind.Null = 21;
  SymbolKind.EnumMember = 22;
  SymbolKind.Struct = 23;
  SymbolKind.Event = 24;
  SymbolKind.Operator = 25;
  SymbolKind.TypeParameter = 26;
})(SymbolKind || (SymbolKind = {}));
/**
 * Symbol tags are extra annotations that tweak the rendering of a symbol.
 * @since 3.15
 */


var SymbolTag;

(function (SymbolTag) {
  /**
   * Render a symbol as obsolete, usually using a strike-out.
   */
  SymbolTag.Deprecated = 1;
})(SymbolTag || (SymbolTag = {}));

var SymbolInformation;

(function (SymbolInformation) {
  /**
   * Creates a new symbol information literal.
   *
   * @param name The name of the symbol.
   * @param kind The kind of the symbol.
   * @param range The range of the location of the symbol.
   * @param uri The resource of the location of symbol, defaults to the current document.
   * @param containerName The name of the symbol containing the symbol.
   */
  function create(name, kind, range, uri, containerName) {
    var result = {
      name: name,
      kind: kind,
      location: {
        uri: uri,
        range: range
      }
    };

    if (containerName) {
      result.containerName = containerName;
    }

    return result;
  }

  SymbolInformation.create = create;
})(SymbolInformation || (SymbolInformation = {}));

var DocumentSymbol;

(function (DocumentSymbol) {
  /**
   * Creates a new symbol information literal.
   *
   * @param name The name of the symbol.
   * @param detail The detail of the symbol.
   * @param kind The kind of the symbol.
   * @param range The range of the symbol.
   * @param selectionRange The selectionRange of the symbol.
   * @param children Children of the symbol.
   */
  function create(name, detail, kind, range, selectionRange, children) {
    var result = {
      name: name,
      detail: detail,
      kind: kind,
      range: range,
      selectionRange: selectionRange
    };

    if (children !== void 0) {
      result.children = children;
    }

    return result;
  }

  DocumentSymbol.create = create;
  /**
   * Checks whether the given literal conforms to the [DocumentSymbol](#DocumentSymbol) interface.
   */

  function is(value) {
    var candidate = value;
    return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is["boolean"](candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children));
  }

  DocumentSymbol.is = is;
})(DocumentSymbol || (DocumentSymbol = {}));
/**
 * A set of predefined code action kinds
 */


var CodeActionKind;

(function (CodeActionKind) {
  /**
   * Empty kind.
   */
  CodeActionKind.Empty = '';
  /**
   * Base kind for quickfix actions: 'quickfix'
   */

  CodeActionKind.QuickFix = 'quickfix';
  /**
   * Base kind for refactoring actions: 'refactor'
   */

  CodeActionKind.Refactor = 'refactor';
  /**
   * Base kind for refactoring extraction actions: 'refactor.extract'
   *
   * Example extract actions:
   *
   * - Extract method
   * - Extract function
   * - Extract variable
   * - Extract interface from class
   * - ...
   */

  CodeActionKind.RefactorExtract = 'refactor.extract';
  /**
   * Base kind for refactoring inline actions: 'refactor.inline'
   *
   * Example inline actions:
   *
   * - Inline function
   * - Inline variable
   * - Inline constant
   * - ...
   */

  CodeActionKind.RefactorInline = 'refactor.inline';
  /**
   * Base kind for refactoring rewrite actions: 'refactor.rewrite'
   *
   * Example rewrite actions:
   *
   * - Convert JavaScript function to class
   * - Add or remove parameter
   * - Encapsulate field
   * - Make method static
   * - Move method to base class
   * - ...
   */

  CodeActionKind.RefactorRewrite = 'refactor.rewrite';
  /**
   * Base kind for source actions: `source`
   *
   * Source code actions apply to the entire file.
   */

  CodeActionKind.Source = 'source';
  /**
   * Base kind for an organize imports source action: `source.organizeImports`
   */

  CodeActionKind.SourceOrganizeImports = 'source.organizeImports';
  /**
   * Base kind for auto-fix source actions: `source.fixAll`.
   *
   * Fix all actions automatically fix errors that have a clear fix that do not require user input.
   * They should not suppress errors or perform unsafe fixes such as generating new types or classes.
   *
   * @since 3.15.0
   */

  CodeActionKind.SourceFixAll = 'source.fixAll';
})(CodeActionKind || (CodeActionKind = {}));
/**
 * The CodeActionContext namespace provides helper functions to work with
 * [CodeActionContext](#CodeActionContext) literals.
 */


var CodeActionContext;

(function (CodeActionContext) {
  /**
   * Creates a new CodeActionContext literal.
   */
  function create(diagnostics, only) {
    var result = {
      diagnostics: diagnostics
    };

    if (only !== void 0 && only !== null) {
      result.only = only;
    }

    return result;
  }

  CodeActionContext.create = create;
  /**
   * Checks whether the given literal conforms to the [CodeActionContext](#CodeActionContext) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string));
  }

  CodeActionContext.is = is;
})(CodeActionContext || (CodeActionContext = {}));

var CodeAction;

(function (CodeAction) {
  function create(title, commandOrEdit, kind) {
    var result = {
      title: title
    };

    if (Command.is(commandOrEdit)) {
      result.command = commandOrEdit;
    } else {
      result.edit = commandOrEdit;
    }

    if (kind !== void 0) {
      result.kind = kind;
    }

    return result;
  }

  CodeAction.create = create;

  function is(value) {
    var candidate = value;
    return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is["boolean"](candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
  }

  CodeAction.is = is;
})(CodeAction || (CodeAction = {}));
/**
 * The CodeLens namespace provides helper functions to work with
 * [CodeLens](#CodeLens) literals.
 */


var CodeLens;

(function (CodeLens) {
  /**
   * Creates a new CodeLens literal.
   */
  function create(range, data) {
    var result = {
      range: range
    };

    if (Is.defined(data)) {
      result.data = data;
    }

    return result;
  }

  CodeLens.create = create;
  /**
   * Checks whether the given literal conforms to the [CodeLens](#CodeLens) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
  }

  CodeLens.is = is;
})(CodeLens || (CodeLens = {}));
/**
 * The FormattingOptions namespace provides helper functions to work with
 * [FormattingOptions](#FormattingOptions) literals.
 */


var FormattingOptions;

(function (FormattingOptions) {
  /**
   * Creates a new FormattingOptions literal.
   */
  function create(tabSize, insertSpaces) {
    return {
      tabSize: tabSize,
      insertSpaces: insertSpaces
    };
  }

  FormattingOptions.create = create;
  /**
   * Checks whether the given literal conforms to the [FormattingOptions](#FormattingOptions) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && Is.number(candidate.tabSize) && Is["boolean"](candidate.insertSpaces);
  }

  FormattingOptions.is = is;
})(FormattingOptions || (FormattingOptions = {}));
/**
 * The DocumentLink namespace provides helper functions to work with
 * [DocumentLink](#DocumentLink) literals.
 */


var DocumentLink;

(function (DocumentLink) {
  /**
   * Creates a new DocumentLink literal.
   */
  function create(range, target, data) {
    return {
      range: range,
      target: target,
      data: data
    };
  }

  DocumentLink.create = create;
  /**
   * Checks whether the given literal conforms to the [DocumentLink](#DocumentLink) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
  }

  DocumentLink.is = is;
})(DocumentLink || (DocumentLink = {}));
/**
 * The SelectionRange namespace provides helper function to work with
 * SelectionRange literals.
 */


var SelectionRange;

(function (SelectionRange) {
  /**
   * Creates a new SelectionRange
   * @param range the range.
   * @param parent an optional parent.
   */
  function create(range, parent) {
    return {
      range: range,
      parent: parent
    };
  }

  SelectionRange.create = create;

  function is(value) {
    var candidate = value;
    return candidate !== undefined && Range.is(candidate.range) && (candidate.parent === undefined || SelectionRange.is(candidate.parent));
  }

  SelectionRange.is = is;
})(SelectionRange || (SelectionRange = {}));

var EOL = ['\n', '\r\n', '\r'];
/**
 * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
 */

var TextDocument;

(function (TextDocument) {
  /**
   * Creates a new ITextDocument literal from the given uri and content.
   * @param uri The document's uri.
   * @param languageId  The document's language Id.
   * @param content The document's content.
   */
  function create(uri, languageId, version, content) {
    return new FullTextDocument(uri, languageId, version, content);
  }

  TextDocument.create = create;
  /**
   * Checks whether the given literal conforms to the [ITextDocument](#ITextDocument) interface.
   */

  function is(value) {
    var candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.number(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
  }

  TextDocument.is = is;

  function applyEdits(document, edits) {
    var text = document.getText();
    var sortedEdits = mergeSort(edits, function (a, b) {
      var diff = a.range.start.line - b.range.start.line;

      if (diff === 0) {
        return a.range.start.character - b.range.start.character;
      }

      return diff;
    });
    var lastModifiedOffset = text.length;

    for (var i = sortedEdits.length - 1; i >= 0; i--) {
      var e = sortedEdits[i];
      var startOffset = document.offsetAt(e.range.start);
      var endOffset = document.offsetAt(e.range.end);

      if (endOffset <= lastModifiedOffset) {
        text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
      } else {
        throw new Error('Overlapping edit');
      }

      lastModifiedOffset = startOffset;
    }

    return text;
  }

  TextDocument.applyEdits = applyEdits;

  function mergeSort(data, compare) {
    if (data.length <= 1) {
      // sorted
      return data;
    }

    var p = data.length / 2 | 0;
    var left = data.slice(0, p);
    var right = data.slice(p);
    mergeSort(left, compare);
    mergeSort(right, compare);
    var leftIdx = 0;
    var rightIdx = 0;
    var i = 0;

    while (leftIdx < left.length && rightIdx < right.length) {
      var ret = compare(left[leftIdx], right[rightIdx]);

      if (ret <= 0) {
        // smaller_equal -> take left to preserve order
        data[i++] = left[leftIdx++];
      } else {
        // greater -> take right
        data[i++] = right[rightIdx++];
      }
    }

    while (leftIdx < left.length) {
      data[i++] = left[leftIdx++];
    }

    while (rightIdx < right.length) {
      data[i++] = right[rightIdx++];
    }

    return data;
  }
})(TextDocument || (TextDocument = {}));

var FullTextDocument =
/** @class */
function () {
  function FullTextDocument(uri, languageId, version, content) {
    this._uri = uri;
    this._languageId = languageId;
    this._version = version;
    this._content = content;
    this._lineOffsets = undefined;
  }

  Object.defineProperty(FullTextDocument.prototype, "uri", {
    get: function get() {
      return this._uri;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FullTextDocument.prototype, "languageId", {
    get: function get() {
      return this._languageId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FullTextDocument.prototype, "version", {
    get: function get() {
      return this._version;
    },
    enumerable: true,
    configurable: true
  });

  FullTextDocument.prototype.getText = function (range) {
    if (range) {
      var start = this.offsetAt(range.start);
      var end = this.offsetAt(range.end);
      return this._content.substring(start, end);
    }

    return this._content;
  };

  FullTextDocument.prototype.update = function (event, version) {
    this._content = event.text;
    this._version = version;
    this._lineOffsets = undefined;
  };

  FullTextDocument.prototype.getLineOffsets = function () {
    if (this._lineOffsets === undefined) {
      var lineOffsets = [];
      var text = this._content;
      var isLineStart = true;

      for (var i = 0; i < text.length; i++) {
        if (isLineStart) {
          lineOffsets.push(i);
          isLineStart = false;
        }

        var ch = text.charAt(i);
        isLineStart = ch === '\r' || ch === '\n';

        if (ch === '\r' && i + 1 < text.length && text.charAt(i + 1) === '\n') {
          i++;
        }
      }

      if (isLineStart && text.length > 0) {
        lineOffsets.push(text.length);
      }

      this._lineOffsets = lineOffsets;
    }

    return this._lineOffsets;
  };

  FullTextDocument.prototype.positionAt = function (offset) {
    offset = Math.max(Math.min(offset, this._content.length), 0);
    var lineOffsets = this.getLineOffsets();
    var low = 0,
        high = lineOffsets.length;

    if (high === 0) {
      return Position.create(0, offset);
    }

    while (low < high) {
      var mid = Math.floor((low + high) / 2);

      if (lineOffsets[mid] > offset) {
        high = mid;
      } else {
        low = mid + 1;
      }
    } // low is the least x for which the line offset is larger than the current offset
    // or array.length if no line offset is larger than the current offset


    var line = low - 1;
    return Position.create(line, offset - lineOffsets[line]);
  };

  FullTextDocument.prototype.offsetAt = function (position) {
    var lineOffsets = this.getLineOffsets();

    if (position.line >= lineOffsets.length) {
      return this._content.length;
    } else if (position.line < 0) {
      return 0;
    }

    var lineOffset = lineOffsets[position.line];
    var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
    return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
  };

  Object.defineProperty(FullTextDocument.prototype, "lineCount", {
    get: function get() {
      return this.getLineOffsets().length;
    },
    enumerable: true,
    configurable: true
  });
  return FullTextDocument;
}();

var Is;

(function (Is) {
  var toString = Object.prototype.toString;

  function defined(value) {
    return typeof value !== 'undefined';
  }

  Is.defined = defined;

  function undefined(value) {
    return typeof value === 'undefined';
  }

  Is.undefined = undefined;

  function _boolean(value) {
    return value === true || value === false;
  }

  Is["boolean"] = _boolean;

  function string(value) {
    return toString.call(value) === '[object String]';
  }

  Is.string = string;

  function number(value) {
    return toString.call(value) === '[object Number]';
  }

  Is.number = number;

  function func(value) {
    return toString.call(value) === '[object Function]';
  }

  Is.func = func;

  function objectLiteral(value) {
    // Strictly speaking class instances pass this check as well. Since the LSP
    // doesn't use classes we ignore this for now. If we do we need to add something
    // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
    return value !== null && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object';
  }

  Is.objectLiteral = objectLiteral;

  function typedArray(value, check) {
    return Array.isArray(value) && value.every(check);
  }

  Is.typedArray = typedArray;
})(Is || (Is = {}));

/***/ })

}]);
//# sourceMappingURL=13.bundle.js.map