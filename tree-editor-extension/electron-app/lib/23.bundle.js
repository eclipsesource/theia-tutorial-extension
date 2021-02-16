(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-container.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-container.js ***!
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
exports.createFileNavigatorWidget = exports.createFileNavigatorContainer = exports.FILE_NAVIGATOR_PROPS = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "../node_modules/@theia/filesystem/lib/browser/index.js");
var contribution_provider_1 = __webpack_require__(/*! @theia/core/lib/common/contribution-provider */ "../node_modules/@theia/core/lib/common/contribution-provider.js");
var navigator_tree_1 = __webpack_require__(/*! ./navigator-tree */ "../node_modules/@theia/navigator/lib/browser/navigator-tree.js");
var navigator_model_1 = __webpack_require__(/*! ./navigator-model */ "../node_modules/@theia/navigator/lib/browser/navigator-model.js");
var navigator_widget_1 = __webpack_require__(/*! ./navigator-widget */ "../node_modules/@theia/navigator/lib/browser/navigator-widget.js");
var navigator_contribution_1 = __webpack_require__(/*! ./navigator-contribution */ "../node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
var navigator_decorator_service_1 = __webpack_require__(/*! ./navigator-decorator-service */ "../node_modules/@theia/navigator/lib/browser/navigator-decorator-service.js");
exports.FILE_NAVIGATOR_PROPS = __assign(__assign({}, browser_1.defaultTreeProps), { contextMenuPath: navigator_contribution_1.NAVIGATOR_CONTEXT_MENU, multiSelect: true, search: true, globalSelection: true });
function createFileNavigatorContainer(parent) {
    var child = browser_2.createFileTreeContainer(parent);
    child.unbind(browser_2.FileTree);
    child.bind(navigator_tree_1.FileNavigatorTree).toSelf();
    child.rebind(browser_1.Tree).toService(navigator_tree_1.FileNavigatorTree);
    child.unbind(browser_2.FileTreeModel);
    child.bind(navigator_model_1.FileNavigatorModel).toSelf();
    child.rebind(browser_1.TreeModel).toService(navigator_model_1.FileNavigatorModel);
    child.unbind(browser_2.FileTreeWidget);
    child.bind(navigator_widget_1.FileNavigatorWidget).toSelf();
    child.rebind(browser_1.TreeProps).toConstantValue(exports.FILE_NAVIGATOR_PROPS);
    child.bind(navigator_decorator_service_1.NavigatorDecoratorService).toSelf().inSingletonScope();
    child.rebind(browser_1.TreeDecoratorService).toService(navigator_decorator_service_1.NavigatorDecoratorService);
    contribution_provider_1.bindContributionProvider(child, navigator_decorator_service_1.NavigatorTreeDecorator);
    return child;
}
exports.createFileNavigatorContainer = createFileNavigatorContainer;
function createFileNavigatorWidget(parent) {
    return createFileNavigatorContainer(parent).get(navigator_widget_1.FileNavigatorWidget);
}
exports.createFileNavigatorWidget = createFileNavigatorWidget;


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-context-key-service.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-context-key-service.js ***!
  \*************************************************************************************/
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
exports.NavigatorContextKeyService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "../node_modules/@theia/core/lib/browser/context-key-service.js");
var NavigatorContextKeyService = /** @class */ (function () {
    function NavigatorContextKeyService() {
    }
    Object.defineProperty(NavigatorContextKeyService.prototype, "explorerViewletVisible", {
        get: function () {
            return this._explorerViewletVisible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavigatorContextKeyService.prototype, "explorerViewletFocus", {
        /** True if Explorer view has keyboard focus. */
        get: function () {
            return this._explorerViewletFocus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavigatorContextKeyService.prototype, "filesExplorerFocus", {
        /** True if File Explorer section has keyboard focus. */
        get: function () {
            return this._filesExplorerFocus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavigatorContextKeyService.prototype, "explorerResourceIsFolder", {
        get: function () {
            return this._explorerResourceIsFolder;
        },
        enumerable: false,
        configurable: true
    });
    NavigatorContextKeyService.prototype.init = function () {
        this._explorerViewletVisible = this.contextKeyService.createKey('explorerViewletVisible', false);
        this._explorerViewletFocus = this.contextKeyService.createKey('explorerViewletFocus', false);
        this._filesExplorerFocus = this.contextKeyService.createKey('filesExplorerFocus', false);
        this._explorerResourceIsFolder = this.contextKeyService.createKey('explorerResourceIsFolder', false);
    };
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], NavigatorContextKeyService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavigatorContextKeyService.prototype, "init", null);
    NavigatorContextKeyService = __decorate([
        inversify_1.injectable()
    ], NavigatorContextKeyService);
    return NavigatorContextKeyService;
}());
exports.NavigatorContextKeyService = NavigatorContextKeyService;


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-contribution.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-contribution.js ***!
  \******************************************************************************/
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
exports.FileNavigatorContribution = exports.FILE_NAVIGATOR_TOGGLE_COMMAND_ID = exports.NavigatorContextMenu = exports.NAVIGATOR_CONTEXT_MENU = exports.NavigatorMoreToolbarGroups = exports.FileNavigatorCommands = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "../node_modules/@theia/core/lib/browser/shell/view-contribution.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var file_download_command_contribution_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/download/file-download-command-contribution */ "../node_modules/@theia/filesystem/lib/browser/download/file-download-command-contribution.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
var navigator_widget_1 = __webpack_require__(/*! ./navigator-widget */ "../node_modules/@theia/navigator/lib/browser/navigator-widget.js");
var navigator_preferences_1 = __webpack_require__(/*! ./navigator-preferences */ "../node_modules/@theia/navigator/lib/browser/navigator-preferences.js");
var navigator_keybinding_context_1 = __webpack_require__(/*! ./navigator-keybinding-context */ "../node_modules/@theia/navigator/lib/browser/navigator-keybinding-context.js");
var navigator_filter_1 = __webpack_require__(/*! ./navigator-filter */ "../node_modules/@theia/navigator/lib/browser/navigator-filter.js");
var navigator_tree_1 = __webpack_require__(/*! ./navigator-tree */ "../node_modules/@theia/navigator/lib/browser/navigator-tree.js");
var navigator_context_key_service_1 = __webpack_require__(/*! ./navigator-context-key-service */ "../node_modules/@theia/navigator/lib/browser/navigator-context-key-service.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "../node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var filesystem_frontend_contribution_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/filesystem-frontend-contribution */ "../node_modules/@theia/filesystem/lib/browser/filesystem-frontend-contribution.js");
var navigator_diff_1 = __webpack_require__(/*! ./navigator-diff */ "../node_modules/@theia/navigator/lib/browser/navigator-diff.js");
var selection_1 = __webpack_require__(/*! @theia/core/lib/common/selection */ "../node_modules/@theia/core/lib/common/selection.js");
var browser_3 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "../node_modules/@theia/filesystem/lib/browser/index.js");
var clipboard_service_1 = __webpack_require__(/*! @theia/core/lib/browser/clipboard-service */ "../node_modules/@theia/core/lib/browser/clipboard-service.js");
var selection_service_1 = __webpack_require__(/*! @theia/core/lib/common/selection-service */ "../node_modules/@theia/core/lib/common/selection-service.js");
var uri_command_handler_1 = __webpack_require__(/*! @theia/core/lib/common/uri-command-handler */ "../node_modules/@theia/core/lib/common/uri-command-handler.js");
var FileNavigatorCommands;
(function (FileNavigatorCommands) {
    FileNavigatorCommands.REVEAL_IN_NAVIGATOR = {
        id: 'navigator.reveal',
        label: 'Reveal in Explorer'
    };
    FileNavigatorCommands.TOGGLE_HIDDEN_FILES = {
        id: 'navigator.toggle.hidden.files',
        label: 'Toggle Hidden Files'
    };
    FileNavigatorCommands.TOGGLE_AUTO_REVEAL = {
        id: 'navigator.toggle.autoReveal',
        category: 'File',
        label: 'Auto Reveal'
    };
    FileNavigatorCommands.REFRESH_NAVIGATOR = {
        id: 'navigator.refresh',
        category: 'File',
        label: 'Refresh in Explorer',
        iconClass: 'refresh'
    };
    FileNavigatorCommands.COLLAPSE_ALL = {
        id: 'navigator.collapse.all',
        category: 'File',
        label: 'Collapse Folders in Explorer',
        iconClass: 'theia-collapse-all-icon'
    };
    FileNavigatorCommands.ADD_ROOT_FOLDER = {
        id: 'navigator.addRootFolder'
    };
    FileNavigatorCommands.FOCUS = {
        id: 'workbench.files.action.focusFilesExplorer',
        category: 'File',
        label: 'Focus on Files Explorer'
    };
    FileNavigatorCommands.COPY_RELATIVE_FILE_PATH = {
        id: 'navigator.copyRelativeFilePath'
    };
    FileNavigatorCommands.OPEN = {
        id: 'navigator.open',
        category: 'File',
        label: 'Open'
    };
})(FileNavigatorCommands = exports.FileNavigatorCommands || (exports.FileNavigatorCommands = {}));
/**
 * Navigator `More Actions...` toolbar item groups.
 * Used in order to group items present in the toolbar.
 */
var NavigatorMoreToolbarGroups;
(function (NavigatorMoreToolbarGroups) {
    NavigatorMoreToolbarGroups.NEW_OPEN = '1_navigator_new_open';
    NavigatorMoreToolbarGroups.TOOLS = '2_navigator_tools';
    NavigatorMoreToolbarGroups.WORKSPACE = '3_navigator_workspace';
})(NavigatorMoreToolbarGroups = exports.NavigatorMoreToolbarGroups || (exports.NavigatorMoreToolbarGroups = {}));
exports.NAVIGATOR_CONTEXT_MENU = ['navigator-context-menu'];
/**
 * Navigator context menu default groups should be aligned
 * with VS Code default groups: https://code.visualstudio.com/api/references/contribution-points#contributes.menus
 */
var NavigatorContextMenu;
(function (NavigatorContextMenu) {
    NavigatorContextMenu.NAVIGATION = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['navigation']);
    /** @deprecated use NAVIGATION */
    NavigatorContextMenu.OPEN = NavigatorContextMenu.NAVIGATION;
    /** @deprecated use NAVIGATION */
    NavigatorContextMenu.NEW = NavigatorContextMenu.NAVIGATION;
    NavigatorContextMenu.WORKSPACE = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['2_workspace']);
    NavigatorContextMenu.COMPARE = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['3_compare']);
    /** @deprecated use COMPARE */
    NavigatorContextMenu.DIFF = NavigatorContextMenu.COMPARE;
    NavigatorContextMenu.SEARCH = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['4_search']);
    NavigatorContextMenu.CLIPBOARD = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['5_cutcopypaste']);
    NavigatorContextMenu.MODIFICATION = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['7_modification']);
    /** @deprecated use MODIFICATION */
    NavigatorContextMenu.MOVE = NavigatorContextMenu.MODIFICATION;
    /** @deprecated use MODIFICATION */
    NavigatorContextMenu.ACTIONS = NavigatorContextMenu.MODIFICATION;
    NavigatorContextMenu.OPEN_WITH = __spread(NavigatorContextMenu.NAVIGATION, ['open_with']);
})(NavigatorContextMenu = exports.NavigatorContextMenu || (exports.NavigatorContextMenu = {}));
exports.FILE_NAVIGATOR_TOGGLE_COMMAND_ID = 'fileNavigator:toggle';
var FileNavigatorContribution = /** @class */ (function (_super) {
    __extends(FileNavigatorContribution, _super);
    function FileNavigatorContribution(fileNavigatorPreferences, openerService, fileNavigatorFilter, workspaceService, workspacePreferences) {
        var _this = _super.call(this, {
            viewContainerId: navigator_widget_1.EXPLORER_VIEW_CONTAINER_ID,
            widgetId: navigator_widget_1.FILE_NAVIGATOR_ID,
            widgetName: 'Explorer',
            defaultWidgetOptions: {
                area: 'left',
                rank: 100
            },
            toggleCommandId: exports.FILE_NAVIGATOR_TOGGLE_COMMAND_ID,
            toggleKeybinding: 'ctrlcmd+shift+e'
        }) || this;
        _this.fileNavigatorPreferences = fileNavigatorPreferences;
        _this.openerService = openerService;
        _this.fileNavigatorFilter = fileNavigatorFilter;
        _this.workspaceService = workspaceService;
        _this.workspacePreferences = workspacePreferences;
        /**
         * Register commands to the `More Actions...` navigator toolbar item.
         */
        _this.registerMoreToolbarItem = function (item) {
            var commandId = item.command;
            var id = 'navigator.tabbar.toolbar.' + commandId;
            var command = _this.commandRegistry.getCommand(commandId);
            _this.commandRegistry.registerCommand({ id: id, iconClass: command && command.iconClass }, {
                execute: function (w) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return w instanceof navigator_widget_1.FileNavigatorWidget
                        && (_a = _this.commandRegistry).executeCommand.apply(_a, __spread([commandId], args));
                },
                isEnabled: function (w) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return w instanceof navigator_widget_1.FileNavigatorWidget
                        && (_a = _this.commandRegistry).isEnabled.apply(_a, __spread([commandId], args));
                },
                isVisible: function (w) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return w instanceof navigator_widget_1.FileNavigatorWidget
                        && (_a = _this.commandRegistry).isVisible.apply(_a, __spread([commandId], args));
                },
                isToggled: function (w) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return w instanceof navigator_widget_1.FileNavigatorWidget
                        && (_a = _this.commandRegistry).isToggled.apply(_a, __spread([commandId], args));
                },
            });
            item.command = id;
            _this.tabbarToolbarRegistry.registerItem(item);
        };
        _this.toDisposeAddRemoveFolderActions = new common_1.DisposableCollection();
        return _this;
    }
    FileNavigatorContribution.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var updateFocusContextKeys;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileNavigatorPreferences.ready];
                    case 1:
                        _a.sent();
                        this.shell.currentChanged.connect(function () { return _this.onCurrentWidgetChangedHandler(); });
                        updateFocusContextKeys = function () {
                            var hasFocus = _this.shell.activeWidget instanceof navigator_widget_1.FileNavigatorWidget;
                            _this.contextKeyService.explorerViewletFocus.set(hasFocus);
                            _this.contextKeyService.filesExplorerFocus.set(hasFocus);
                        };
                        updateFocusContextKeys();
                        this.shell.activeChanged.connect(updateFocusContextKeys);
                        this.workspaceCommandContribution.onDidCreateNewFile(function (event) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, this.onDidCreateNewResource(event)];
                        }); }); });
                        this.workspaceCommandContribution.onDidCreateNewFolder(function (event) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, this.onDidCreateNewResource(event)];
                        }); }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorContribution.prototype.onDidCreateNewResource = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var navigator, model, parent, node;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigator = this.tryGetWidget();
                        if (!navigator || !navigator.isVisible) {
                            return [2 /*return*/];
                        }
                        model = navigator.model;
                        return [4 /*yield*/, model.revealFile(event.parent)];
                    case 1:
                        parent = _a.sent();
                        if (!browser_3.DirNode.is(parent)) return [3 /*break*/, 3];
                        return [4 /*yield*/, model.refresh(parent)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, model.revealFile(event.uri)];
                    case 4:
                        node = _a.sent();
                        if (browser_1.SelectableTreeNode.is(node)) {
                            model.selectNode(node);
                            if (browser_3.DirNode.is(node)) {
                                this.openView({ activate: true });
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorContribution.prototype.onStart = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.workspacePreferences.ready.then(function () {
                    _this.updateAddRemoveFolderActions(_this.menuRegistry);
                    _this.workspacePreferences.onPreferenceChanged(function (change) {
                        if (change.preferenceName === 'workspace.supportMultiRootWorkspace') {
                            _this.updateAddRemoveFolderActions(_this.menuRegistry);
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    FileNavigatorContribution.prototype.initializeLayout = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openView()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        _super.prototype.registerCommands.call(this, registry);
        registry.registerCommand(FileNavigatorCommands.FOCUS, {
            execute: function () { return _this.openView({ activate: true }); }
        });
        registry.registerCommand(FileNavigatorCommands.REVEAL_IN_NAVIGATOR, {
            execute: function (event) {
                var widget = _this.findTargetedWidget(event);
                _this.openView({ activate: true }).then(function () { return _this.selectWidgetFileNode(widget || _this.shell.currentWidget); });
            },
            isEnabled: function (event) {
                var widget = _this.findTargetedWidget(event);
                return widget ? browser_1.Navigatable.is(widget) : browser_1.Navigatable.is(_this.shell.currentWidget);
            },
            isVisible: function (event) {
                var widget = _this.findTargetedWidget(event);
                return widget ? browser_1.Navigatable.is(widget) : browser_1.Navigatable.is(_this.shell.currentWidget);
            }
        });
        registry.registerCommand(FileNavigatorCommands.TOGGLE_HIDDEN_FILES, {
            execute: function () {
                _this.fileNavigatorFilter.toggleHiddenFiles();
            },
            isEnabled: function () { return true; },
            isVisible: function () { return true; }
        });
        registry.registerCommand(FileNavigatorCommands.TOGGLE_AUTO_REVEAL, {
            isEnabled: function (widget) { return _this.withWidget(widget, function () { return _this.workspaceService.opened; }); },
            isVisible: function (widget) { return _this.withWidget(widget, function () { return _this.workspaceService.opened; }); },
            execute: function () {
                var autoReveal = !_this.fileNavigatorPreferences['explorer.autoReveal'];
                _this.preferenceService.set('explorer.autoReveal', autoReveal, browser_1.PreferenceScope.User);
                if (autoReveal) {
                    _this.selectWidgetFileNode(_this.shell.currentWidget);
                }
            },
            isToggled: function () { return _this.fileNavigatorPreferences['explorer.autoReveal']; }
        });
        registry.registerCommand(FileNavigatorCommands.COLLAPSE_ALL, {
            execute: function (widget) { return _this.withWidget(widget, function () { return _this.collapseFileNavigatorTree(); }); },
            isEnabled: function (widget) { return _this.withWidget(widget, function () { return _this.workspaceService.opened; }); },
            isVisible: function (widget) { return _this.withWidget(widget, function () { return _this.workspaceService.opened; }); }
        });
        registry.registerCommand(FileNavigatorCommands.REFRESH_NAVIGATOR, {
            execute: function (widget) { return _this.withWidget(widget, function () { return _this.refreshWorkspace(); }); },
            isEnabled: function (widget) { return _this.withWidget(widget, function () { return _this.workspaceService.opened; }); },
            isVisible: function (widget) { return _this.withWidget(widget, function () { return _this.workspaceService.opened; }); }
        });
        registry.registerCommand(FileNavigatorCommands.ADD_ROOT_FOLDER, {
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return registry.executeCommand.apply(registry, __spread([browser_2.WorkspaceCommands.ADD_FOLDER.id], args));
            },
            isEnabled: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return registry.isEnabled.apply(registry, __spread([browser_2.WorkspaceCommands.ADD_FOLDER.id], args));
            },
            isVisible: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!registry.isVisible.apply(registry, __spread([browser_2.WorkspaceCommands.ADD_FOLDER.id], args))) {
                    return false;
                }
                var navigator = _this.tryGetWidget();
                var model = navigator && navigator.model;
                var uris = selection_1.UriSelection.getUris(model && model.selectedNodes);
                return _this.workspaceService.areWorkspaceRoots(uris);
            }
        });
        registry.registerCommand(navigator_diff_1.NavigatorDiffCommands.COMPARE_FIRST, {
            execute: function () {
                _this.navigatorDiff.addFirstComparisonFile();
            },
            isEnabled: function () { return true; },
            isVisible: function () { return true; }
        });
        registry.registerCommand(navigator_diff_1.NavigatorDiffCommands.COMPARE_SECOND, {
            execute: function () {
                _this.navigatorDiff.compareFiles();
            },
            isEnabled: function () { return _this.navigatorDiff.isFirstFileSelected; },
            isVisible: function () { return _this.navigatorDiff.isFirstFileSelected; }
        });
        registry.registerCommand(FileNavigatorCommands.COPY_RELATIVE_FILE_PATH, uri_command_handler_1.UriAwareCommandHandler.MultiSelect(this.selectionService, {
            isEnabled: function (uris) { return !!uris.length; },
            isVisible: function (uris) { return !!uris.length; },
            execute: function (uris) { return __awaiter(_this, void 0, void 0, function () {
                var lineDelimiter, text;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            lineDelimiter = common_1.isWindows ? '\r\n' : '\n';
                            text = uris.map(function (uri) {
                                var workspaceRoot = _this.workspaceService.getWorkspaceRootUri(uri);
                                if (workspaceRoot) {
                                    return workspaceRoot.relative(uri);
                                }
                            }).join(lineDelimiter);
                            return [4 /*yield*/, this.clipboardService.writeText(text)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }
        }));
        registry.registerCommand(FileNavigatorCommands.OPEN, {
            isEnabled: function () { return _this.getSelectedFileNodes().length > 0; },
            isVisible: function () { return _this.getSelectedFileNodes().length > 0; },
            execute: function () {
                _this.getSelectedFileNodes().forEach(function (node) { return __awaiter(_this, void 0, void 0, function () {
                    var opener;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.openerService.getOpener(node.uri)];
                            case 1:
                                opener = _a.sent();
                                opener.open(node.uri);
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        });
    };
    FileNavigatorContribution.prototype.getSelectedFileNodes = function () {
        var _a;
        return ((_a = this.tryGetWidget()) === null || _a === void 0 ? void 0 : _a.model.selectedNodes.filter(browser_3.FileNode.is)) || [];
    };
    FileNavigatorContribution.prototype.withWidget = function (widget, cb) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof navigator_widget_1.FileNavigatorWidget && widget.id === navigator_widget_1.FILE_NAVIGATOR_ID) {
            return cb(widget);
        }
        return false;
    };
    FileNavigatorContribution.prototype.registerMenus = function (registry) {
        _super.prototype.registerMenus.call(this, registry);
        registry.registerMenuAction(browser_1.SHELL_TABBAR_CONTEXT_MENU, {
            commandId: FileNavigatorCommands.REVEAL_IN_NAVIGATOR.id,
            label: FileNavigatorCommands.REVEAL_IN_NAVIGATOR.label,
            order: '5'
        });
        registry.registerMenuAction(NavigatorContextMenu.NAVIGATION, {
            commandId: FileNavigatorCommands.OPEN.id,
            label: 'Open'
        });
        registry.registerSubmenu(NavigatorContextMenu.OPEN_WITH, 'Open With');
        this.openerService.getOpeners().then(function (openers) {
            var e_1, _a;
            try {
                for (var openers_1 = __values(openers), openers_1_1 = openers_1.next(); !openers_1_1.done; openers_1_1 = openers_1.next()) {
                    var opener_1 = openers_1_1.value;
                    var openWithCommand = browser_2.WorkspaceCommands.FILE_OPEN_WITH(opener_1);
                    registry.registerMenuAction(NavigatorContextMenu.OPEN_WITH, {
                        commandId: openWithCommand.id,
                        label: opener_1.label,
                        icon: opener_1.iconClass
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (openers_1_1 && !openers_1_1.done && (_a = openers_1.return)) _a.call(openers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        // registry.registerMenuAction([CONTEXT_MENU_PATH, CUT_MENU_GROUP], {
        //     commandId: Commands.FILE_CUT
        // });
        registry.registerMenuAction(NavigatorContextMenu.CLIPBOARD, {
            commandId: browser_1.CommonCommands.COPY.id,
            order: 'a'
        });
        registry.registerMenuAction(NavigatorContextMenu.CLIPBOARD, {
            commandId: browser_1.CommonCommands.PASTE.id,
            order: 'b'
        });
        registry.registerMenuAction(NavigatorContextMenu.CLIPBOARD, {
            commandId: browser_1.CommonCommands.COPY_PATH.id,
            order: 'c'
        });
        registry.registerMenuAction(NavigatorContextMenu.CLIPBOARD, {
            commandId: FileNavigatorCommands.COPY_RELATIVE_FILE_PATH.id,
            label: 'Copy Relative Path',
            order: 'd'
        });
        registry.registerMenuAction(NavigatorContextMenu.CLIPBOARD, {
            commandId: file_download_command_contribution_1.FileDownloadCommands.COPY_DOWNLOAD_LINK.id,
            order: 'z'
        });
        registry.registerMenuAction(NavigatorContextMenu.MODIFICATION, {
            commandId: browser_2.WorkspaceCommands.FILE_RENAME.id
        });
        registry.registerMenuAction(NavigatorContextMenu.MODIFICATION, {
            commandId: browser_2.WorkspaceCommands.FILE_DELETE.id
        });
        registry.registerMenuAction(NavigatorContextMenu.MODIFICATION, {
            commandId: browser_2.WorkspaceCommands.FILE_DUPLICATE.id
        });
        var downloadUploadMenu = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['6_downloadupload']);
        registry.registerMenuAction(downloadUploadMenu, {
            commandId: filesystem_frontend_contribution_1.FileSystemCommands.UPLOAD.id,
            order: 'a'
        });
        registry.registerMenuAction(downloadUploadMenu, {
            commandId: file_download_command_contribution_1.FileDownloadCommands.DOWNLOAD.id,
            order: 'b'
        });
        registry.registerMenuAction(NavigatorContextMenu.NAVIGATION, {
            commandId: browser_2.WorkspaceCommands.NEW_FILE.id
        });
        registry.registerMenuAction(NavigatorContextMenu.NAVIGATION, {
            commandId: browser_2.WorkspaceCommands.NEW_FOLDER.id
        });
        registry.registerMenuAction(NavigatorContextMenu.COMPARE, {
            commandId: browser_2.WorkspaceCommands.FILE_COMPARE.id
        });
        registry.registerMenuAction(NavigatorContextMenu.MODIFICATION, {
            commandId: FileNavigatorCommands.COLLAPSE_ALL.id,
            label: 'Collapse All',
            order: 'z2'
        });
        registry.registerMenuAction(NavigatorContextMenu.COMPARE, {
            commandId: navigator_diff_1.NavigatorDiffCommands.COMPARE_FIRST.id,
            order: 'z'
        });
        registry.registerMenuAction(NavigatorContextMenu.COMPARE, {
            commandId: navigator_diff_1.NavigatorDiffCommands.COMPARE_SECOND.id,
            order: 'z'
        });
    };
    FileNavigatorContribution.prototype.registerKeybindings = function (registry) {
        _super.prototype.registerKeybindings.call(this, registry);
        registry.registerKeybinding({
            command: FileNavigatorCommands.REVEAL_IN_NAVIGATOR.id,
            keybinding: 'alt+r'
        });
        registry.registerKeybinding({
            command: browser_2.WorkspaceCommands.FILE_DELETE.id,
            keybinding: common_1.isOSX ? 'cmd+backspace' : 'del',
            context: navigator_keybinding_context_1.NavigatorKeybindingContexts.navigatorActive
        });
        registry.registerKeybinding({
            command: browser_2.WorkspaceCommands.FILE_RENAME.id,
            keybinding: 'f2',
            context: navigator_keybinding_context_1.NavigatorKeybindingContexts.navigatorActive
        });
        registry.registerKeybinding({
            command: FileNavigatorCommands.TOGGLE_HIDDEN_FILES.id,
            keybinding: 'ctrlcmd+i',
            context: navigator_keybinding_context_1.NavigatorKeybindingContexts.navigatorActive
        });
        registry.registerKeybinding({
            command: FileNavigatorCommands.COPY_RELATIVE_FILE_PATH.id,
            keybinding: common_1.isWindows ? 'ctrl+k ctrl+shift+c' : 'ctrlcmd+shift+alt+c',
            when: '!editorFocus'
        });
    };
    FileNavigatorContribution.prototype.registerToolbarItems = function (toolbarRegistry) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                toolbarRegistry.registerItem({
                    id: FileNavigatorCommands.REFRESH_NAVIGATOR.id,
                    command: FileNavigatorCommands.REFRESH_NAVIGATOR.id,
                    tooltip: 'Refresh Explorer',
                    priority: 0,
                });
                toolbarRegistry.registerItem({
                    id: FileNavigatorCommands.COLLAPSE_ALL.id,
                    command: FileNavigatorCommands.COLLAPSE_ALL.id,
                    tooltip: 'Collapse All',
                    priority: 1,
                });
                this.registerMoreToolbarItem({
                    id: browser_2.WorkspaceCommands.NEW_FILE.id,
                    command: browser_2.WorkspaceCommands.NEW_FILE.id,
                    tooltip: browser_2.WorkspaceCommands.NEW_FILE.label,
                    group: NavigatorMoreToolbarGroups.NEW_OPEN,
                });
                this.registerMoreToolbarItem({
                    id: browser_2.WorkspaceCommands.NEW_FOLDER.id,
                    command: browser_2.WorkspaceCommands.NEW_FOLDER.id,
                    tooltip: browser_2.WorkspaceCommands.NEW_FOLDER.label,
                    group: NavigatorMoreToolbarGroups.NEW_OPEN,
                });
                this.registerMoreToolbarItem({
                    id: FileNavigatorCommands.TOGGLE_AUTO_REVEAL.id,
                    command: FileNavigatorCommands.TOGGLE_AUTO_REVEAL.id,
                    tooltip: FileNavigatorCommands.TOGGLE_AUTO_REVEAL.label,
                    group: NavigatorMoreToolbarGroups.TOOLS,
                });
                this.registerMoreToolbarItem({
                    id: browser_2.WorkspaceCommands.ADD_FOLDER.id,
                    command: browser_2.WorkspaceCommands.ADD_FOLDER.id,
                    tooltip: browser_2.WorkspaceCommands.ADD_FOLDER.label,
                    group: NavigatorMoreToolbarGroups.WORKSPACE,
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Find the selected widget.
     * @returns `widget` of the respective `title` if it exists, else returns undefined.
     */
    FileNavigatorContribution.prototype.findTargetedWidget = function (event) {
        var title;
        if (event) {
            var tab = this.shell.findTabBar(event);
            title = tab && this.shell.findTitle(tab, event);
        }
        return title && title.owner;
    };
    /**
     * Reveals and selects node in the file navigator to which given widget is related.
     * Does nothing if given widget undefined or doesn't have related resource.
     *
     * @param widget widget file resource of which should be revealed and selected
     */
    FileNavigatorContribution.prototype.selectWidgetFileNode = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var resourceUri, model, node;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!browser_1.Navigatable.is(widget)) return [3 /*break*/, 3];
                        resourceUri = widget.getResourceUri();
                        if (!resourceUri) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.widget];
                    case 1:
                        model = (_a.sent()).model;
                        return [4 /*yield*/, model.revealFile(resourceUri)];
                    case 2:
                        node = _a.sent();
                        if (browser_1.SelectableTreeNode.is(node)) {
                            model.selectNode(node);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorContribution.prototype.onCurrentWidgetChangedHandler = function () {
        if (this.fileNavigatorPreferences['explorer.autoReveal']) {
            this.selectWidgetFileNode(this.shell.currentWidget);
        }
    };
    /**
     * Collapse file navigator nodes and set focus on first visible node
     * - single root workspace: collapse all nodes except root
     * - multiple root workspace: collapse all nodes, even roots
     */
    FileNavigatorContribution.prototype.collapseFileNavigatorTree = function () {
        return __awaiter(this, void 0, void 0, function () {
            var model, root, firstChild;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        model = (_a.sent()).model;
                        root = model.root;
                        if (navigator_tree_1.WorkspaceNode.is(root) && root.children.length === 1) {
                            root = root.children[0];
                        }
                        root.children.forEach(function (child) { return browser_1.CompositeTreeNode.is(child) && model.collapseAll(child); });
                        firstChild = navigator_tree_1.WorkspaceNode.is(root) ? root.children[0] : root;
                        if (browser_1.SelectableTreeNode.is(firstChild)) {
                            model.selectNode(firstChild);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * force refresh workspace in navigator
     */
    FileNavigatorContribution.prototype.refreshWorkspace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        model = (_a.sent()).model;
                        return [4 /*yield*/, model.refresh()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorContribution.prototype.updateAddRemoveFolderActions = function (registry) {
        this.toDisposeAddRemoveFolderActions.dispose();
        if (this.workspacePreferences['workspace.supportMultiRootWorkspace']) {
            this.toDisposeAddRemoveFolderActions.push(registry.registerMenuAction(NavigatorContextMenu.WORKSPACE, {
                commandId: FileNavigatorCommands.ADD_ROOT_FOLDER.id,
                label: browser_2.WorkspaceCommands.ADD_FOLDER.label
            }));
            this.toDisposeAddRemoveFolderActions.push(registry.registerMenuAction(NavigatorContextMenu.WORKSPACE, {
                commandId: browser_2.WorkspaceCommands.REMOVE_FOLDER.id
            }));
        }
    };
    __decorate([
        inversify_1.inject(clipboard_service_1.ClipboardService),
        __metadata("design:type", Object)
    ], FileNavigatorContribution.prototype, "clipboardService", void 0);
    __decorate([
        inversify_1.inject(common_1.CommandRegistry),
        __metadata("design:type", common_1.CommandRegistry)
    ], FileNavigatorContribution.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(tab_bar_toolbar_1.TabBarToolbarRegistry),
        __metadata("design:type", tab_bar_toolbar_1.TabBarToolbarRegistry)
    ], FileNavigatorContribution.prototype, "tabbarToolbarRegistry", void 0);
    __decorate([
        inversify_1.inject(navigator_context_key_service_1.NavigatorContextKeyService),
        __metadata("design:type", navigator_context_key_service_1.NavigatorContextKeyService)
    ], FileNavigatorContribution.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(common_1.MenuModelRegistry),
        __metadata("design:type", common_1.MenuModelRegistry)
    ], FileNavigatorContribution.prototype, "menuRegistry", void 0);
    __decorate([
        inversify_1.inject(navigator_diff_1.NavigatorDiff),
        __metadata("design:type", navigator_diff_1.NavigatorDiff)
    ], FileNavigatorContribution.prototype, "navigatorDiff", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], FileNavigatorContribution.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(selection_service_1.SelectionService),
        __metadata("design:type", selection_service_1.SelectionService)
    ], FileNavigatorContribution.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceCommandContribution),
        __metadata("design:type", browser_2.WorkspaceCommandContribution)
    ], FileNavigatorContribution.prototype, "workspaceCommandContribution", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], FileNavigatorContribution.prototype, "init", null);
    FileNavigatorContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(navigator_preferences_1.FileNavigatorPreferences)),
        __param(1, inversify_1.inject(browser_1.OpenerService)),
        __param(2, inversify_1.inject(navigator_filter_1.FileNavigatorFilter)),
        __param(3, inversify_1.inject(browser_2.WorkspaceService)),
        __param(4, inversify_1.inject(browser_2.WorkspacePreferences)),
        __metadata("design:paramtypes", [Object, Object, navigator_filter_1.FileNavigatorFilter,
            browser_2.WorkspaceService, Object])
    ], FileNavigatorContribution);
    return FileNavigatorContribution;
}(view_contribution_1.AbstractViewContribution));
exports.FileNavigatorContribution = FileNavigatorContribution;


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-decorator-service.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-decorator-service.js ***!
  \***********************************************************************************/
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
exports.NavigatorDecoratorService = exports.NavigatorTreeDecorator = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var contribution_provider_1 = __webpack_require__(/*! @theia/core/lib/common/contribution-provider */ "../node_modules/@theia/core/lib/common/contribution-provider.js");
var tree_decorator_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-decorator */ "../node_modules/@theia/core/lib/browser/tree/tree-decorator.js");
/**
 * Symbol for all decorators that would like to contribute into the navigator.
 */
exports.NavigatorTreeDecorator = Symbol('NavigatorTreeDecorator');
/**
 * Decorator service for the navigator.
 */
var NavigatorDecoratorService = /** @class */ (function (_super) {
    __extends(NavigatorDecoratorService, _super);
    function NavigatorDecoratorService(contributions) {
        var _this = _super.call(this, contributions.getContributions()) || this;
        _this.contributions = contributions;
        return _this;
    }
    NavigatorDecoratorService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(contribution_provider_1.ContributionProvider)), __param(0, inversify_1.named(exports.NavigatorTreeDecorator)),
        __metadata("design:paramtypes", [Object])
    ], NavigatorDecoratorService);
    return NavigatorDecoratorService;
}(tree_decorator_1.AbstractTreeDecoratorService));
exports.NavigatorDecoratorService = NavigatorDecoratorService;


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-diff.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-diff.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 David Saunders and others.
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
exports.NavigatorDiff = exports.NavigatorDiffCommands = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "../node_modules/@theia/core/lib/browser/opener-service.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "../node_modules/@theia/core/lib/common/message-service.js");
var diff_uris_1 = __webpack_require__(/*! @theia/core/lib/browser/diff-uris */ "../node_modules/@theia/core/lib/browser/diff-uris.js");
var file_service_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/file-service */ "../node_modules/@theia/filesystem/lib/browser/file-service.js");
var files_1 = __webpack_require__(/*! @theia/filesystem/lib/common/files */ "../node_modules/@theia/filesystem/lib/common/files.js");
var NavigatorDiffCommands;
(function (NavigatorDiffCommands) {
    var COMPARE_CATEGORY = 'Compare';
    NavigatorDiffCommands.COMPARE_FIRST = {
        id: 'compare:first',
        category: COMPARE_CATEGORY,
        label: 'Select for Compare'
    };
    NavigatorDiffCommands.COMPARE_SECOND = {
        id: 'compare:second',
        category: COMPARE_CATEGORY,
        label: 'Compare with Selected'
    };
})(NavigatorDiffCommands = exports.NavigatorDiffCommands || (exports.NavigatorDiffCommands = {}));
var NavigatorDiff = /** @class */ (function () {
    function NavigatorDiff() {
        this._firstCompareFile = undefined;
    }
    Object.defineProperty(NavigatorDiff.prototype, "firstCompareFile", {
        get: function () {
            return this._firstCompareFile;
        },
        set: function (uri) {
            this._firstCompareFile = uri;
            this._isFirstFileSelected = true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavigatorDiff.prototype, "isFirstFileSelected", {
        get: function () {
            return this._isFirstFileSelected;
        },
        enumerable: false,
        configurable: true
    });
    NavigatorDiff.prototype.isDirectory = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var stat, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fileService.resolve(uri)];
                    case 1:
                        stat = _a.sent();
                        return [2 /*return*/, stat.isDirectory];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof files_1.FileOperationError && e_1.fileOperationResult === 1 /* FILE_NOT_FOUND */) {
                            return [2 /*return*/, true];
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    NavigatorDiff.prototype.getURISelection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = common_1.UriSelection.getUri(this.selectionService.selection);
                        if (!uri) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, this.isDirectory(uri)];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, uri];
                }
            });
        });
    };
    /**
     * Adds the initial file for comparison
     * @see SelectionService
     * @see compareFiles
     * @returns Promise<boolean> indicating whether the uri is valid
     */
    NavigatorDiff.prototype.addFirstComparisonFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uriSelected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getURISelection()];
                    case 1:
                        uriSelected = _a.sent();
                        if (uriSelected === undefined) {
                            return [2 /*return*/, false];
                        }
                        this.firstCompareFile = uriSelected;
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Compare selected files.  First file is selected through addFirstComparisonFile
     * @see SelectionService
     * @see addFirstComparisonFile
     * @returns Promise<boolean> indicating whether the comparison was completed successfully
     */
    NavigatorDiff.prototype.compareFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uriSelected, diffUri;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getURISelection()];
                    case 1:
                        uriSelected = _a.sent();
                        if (this.firstCompareFile === undefined || uriSelected === undefined) {
                            return [2 /*return*/, false];
                        }
                        diffUri = diff_uris_1.DiffUris.encode(this.firstCompareFile, uriSelected);
                        opener_service_1.open(this.openerService, diffUri).catch(function (e) {
                            _this.notifications.error(e.message);
                        });
                        return [2 /*return*/, true];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(file_service_1.FileService),
        __metadata("design:type", file_service_1.FileService)
    ], NavigatorDiff.prototype, "fileService", void 0);
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], NavigatorDiff.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], NavigatorDiff.prototype, "notifications", void 0);
    __decorate([
        inversify_1.inject(common_1.SelectionService),
        __metadata("design:type", common_1.SelectionService)
    ], NavigatorDiff.prototype, "selectionService", void 0);
    NavigatorDiff = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], NavigatorDiff);
    return NavigatorDiff;
}());
exports.NavigatorDiff = NavigatorDiff;


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-filter.js":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-filter.js ***!
  \************************************************************************/
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
exports.FileNavigatorFilterPredicate = exports.FileNavigatorFilter = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var minimatch_1 = __webpack_require__(/*! minimatch */ "../node_modules/minimatch/minimatch.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var filesystem_preferences_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/filesystem-preferences */ "../node_modules/@theia/filesystem/lib/browser/filesystem-preferences.js");
var navigator_preferences_1 = __webpack_require__(/*! ./navigator-preferences */ "../node_modules/@theia/navigator/lib/browser/navigator-preferences.js");
/**
 * Filter for omitting elements from the navigator. For more details on the exclusion patterns,
 * one should check either the manual with `man 5 gitignore` or just [here](https://git-scm.com/docs/gitignore).
 */
var FileNavigatorFilter = /** @class */ (function () {
    function FileNavigatorFilter(preferences) {
        this.preferences = preferences;
        this.emitter = new event_1.Emitter();
    }
    FileNavigatorFilter.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.filterPredicate = this.createFilterPredicate(this.filesPreferences['files.exclude']);
                this.filesPreferences.onPreferenceChanged(function (event) { return _this.onFilesPreferenceChanged(event); });
                this.preferences.onPreferenceChanged(function (event) { return _this.onPreferenceChanged(event); });
                return [2 /*return*/];
            });
        });
    };
    FileNavigatorFilter.prototype.filter = function (items) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, items];
                    case 1: return [2 /*return*/, (_a.sent()).filter(function (item) { return _this.filterItem(item); })];
                }
            });
        });
    };
    Object.defineProperty(FileNavigatorFilter.prototype, "onFilterChanged", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: false,
        configurable: true
    });
    FileNavigatorFilter.prototype.filterItem = function (item) {
        return this.filterPredicate.filter(item);
    };
    FileNavigatorFilter.prototype.fireFilterChanged = function () {
        this.emitter.fire(undefined);
    };
    FileNavigatorFilter.prototype.onFilesPreferenceChanged = function (event) {
        var preferenceName = event.preferenceName, newValue = event.newValue;
        if (preferenceName === 'files.exclude') {
            this.filterPredicate = this.createFilterPredicate(newValue || {});
            this.fireFilterChanged();
        }
    };
    FileNavigatorFilter.prototype.onPreferenceChanged = function (event) {
    };
    FileNavigatorFilter.prototype.createFilterPredicate = function (exclusions) {
        return new FileNavigatorFilterPredicate(this.interceptExclusions(exclusions));
    };
    FileNavigatorFilter.prototype.toggleHiddenFiles = function () {
        this.showHiddenFiles = !this.showHiddenFiles;
        var filesExcludes = this.filesPreferences['files.exclude'];
        this.filterPredicate = this.createFilterPredicate(filesExcludes || {});
        this.fireFilterChanged();
    };
    FileNavigatorFilter.prototype.interceptExclusions = function (exclusions) {
        return __assign(__assign({}, exclusions), { '**/.*': this.showHiddenFiles });
    };
    __decorate([
        inversify_1.inject(filesystem_preferences_1.FileSystemPreferences),
        __metadata("design:type", Object)
    ], FileNavigatorFilter.prototype, "filesPreferences", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], FileNavigatorFilter.prototype, "init", null);
    FileNavigatorFilter = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(navigator_preferences_1.FileNavigatorPreferences)),
        __metadata("design:paramtypes", [Object])
    ], FileNavigatorFilter);
    return FileNavigatorFilter;
}());
exports.FileNavigatorFilter = FileNavigatorFilter;
(function (FileNavigatorFilter) {
    var Predicate;
    (function (Predicate) {
        /**
         * Wraps a bunch of predicates and returns with a new one that evaluates to `true` if
         * each of the wrapped predicates evaluates to `true`. Otherwise, `false`.
         */
        function and() {
            var predicates = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                predicates[_i] = arguments[_i];
            }
            return {
                filter: function (id) { return predicates.every(function (predicate) { return predicate.filter(id); }); }
            };
        }
        Predicate.and = and;
    })(Predicate = FileNavigatorFilter.Predicate || (FileNavigatorFilter.Predicate = {}));
})(FileNavigatorFilter = exports.FileNavigatorFilter || (exports.FileNavigatorFilter = {}));
exports.FileNavigatorFilter = FileNavigatorFilter;
/**
 * Concrete filter navigator filter predicate that is decoupled from the preferences.
 */
var FileNavigatorFilterPredicate = /** @class */ (function () {
    function FileNavigatorFilterPredicate(exclusions) {
        var _a;
        var _this = this;
        var patterns = Object.keys(exclusions).map(function (pattern) { return ({ pattern: pattern, enabled: exclusions[pattern] }); }).filter(function (object) { return object.enabled; }).map(function (object) { return object.pattern; });
        this.delegate = (_a = FileNavigatorFilter.Predicate).and.apply(_a, __spread(patterns.map(function (pattern) { return _this.createDelegate(pattern); })));
    }
    FileNavigatorFilterPredicate.prototype.filter = function (item) {
        return this.delegate.filter(item);
    };
    FileNavigatorFilterPredicate.prototype.createDelegate = function (pattern) {
        var delegate = new minimatch_1.Minimatch(pattern, { matchBase: true });
        return {
            filter: function (item) { return !delegate.match(item.id); }
        };
    };
    return FileNavigatorFilterPredicate;
}());
exports.FileNavigatorFilterPredicate = FileNavigatorFilterPredicate;


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-frontend-module.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-frontend-module.js ***!
  \*********************************************************************************/
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
__webpack_require__(/*! ../../src/browser/style/index.css */ "../node_modules/@theia/navigator/src/browser/style/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var navigator_widget_1 = __webpack_require__(/*! ./navigator-widget */ "../node_modules/@theia/navigator/lib/browser/navigator-widget.js");
var navigator_keybinding_context_1 = __webpack_require__(/*! ./navigator-keybinding-context */ "../node_modules/@theia/navigator/lib/browser/navigator-keybinding-context.js");
var navigator_contribution_1 = __webpack_require__(/*! ./navigator-contribution */ "../node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
var navigator_container_1 = __webpack_require__(/*! ./navigator-container */ "../node_modules/@theia/navigator/lib/browser/navigator-container.js");
var widget_manager_1 = __webpack_require__(/*! @theia/core/lib/browser/widget-manager */ "../node_modules/@theia/core/lib/browser/widget-manager.js");
var navigator_preferences_1 = __webpack_require__(/*! ./navigator-preferences */ "../node_modules/@theia/navigator/lib/browser/navigator-preferences.js");
var navigator_filter_1 = __webpack_require__(/*! ./navigator-filter */ "../node_modules/@theia/navigator/lib/browser/navigator-filter.js");
var navigator_context_key_service_1 = __webpack_require__(/*! ./navigator-context-key-service */ "../node_modules/@theia/navigator/lib/browser/navigator-context-key-service.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "../node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var navigator_diff_1 = __webpack_require__(/*! ./navigator-diff */ "../node_modules/@theia/navigator/lib/browser/navigator-diff.js");
var navigator_layout_migrations_1 = __webpack_require__(/*! ./navigator-layout-migrations */ "../node_modules/@theia/navigator/lib/browser/navigator-layout-migrations.js");
var navigator_tab_bar_decorator_1 = __webpack_require__(/*! ./navigator-tab-bar-decorator */ "../node_modules/@theia/navigator/lib/browser/navigator-tab-bar-decorator.js");
var tab_bar_decorator_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-decorator */ "../node_modules/@theia/core/lib/browser/shell/tab-bar-decorator.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    navigator_preferences_1.bindFileNavigatorPreferences(bind);
    bind(navigator_filter_1.FileNavigatorFilter).toSelf().inSingletonScope();
    bind(navigator_context_key_service_1.NavigatorContextKeyService).toSelf().inSingletonScope();
    browser_1.bindViewContribution(bind, navigator_contribution_1.FileNavigatorContribution);
    bind(browser_1.FrontendApplicationContribution).toService(navigator_contribution_1.FileNavigatorContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(navigator_contribution_1.FileNavigatorContribution);
    bind(browser_1.KeybindingContext).to(navigator_keybinding_context_1.NavigatorActiveContext).inSingletonScope();
    bind(navigator_widget_1.FileNavigatorWidget).toDynamicValue(function (ctx) {
        return navigator_container_1.createFileNavigatorWidget(ctx.container);
    });
    bind(widget_manager_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: navigator_widget_1.FILE_NAVIGATOR_ID,
            createWidget: function () { return container.get(navigator_widget_1.FileNavigatorWidget); }
        });
    }).inSingletonScope();
    bind(widget_manager_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: navigator_widget_1.EXPLORER_VIEW_CONTAINER_ID,
            createWidget: function () { return __awaiter(void 0, void 0, void 0, function () {
                var viewContainer, widget;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            viewContainer = container.get(browser_1.ViewContainer.Factory)({
                                id: navigator_widget_1.EXPLORER_VIEW_CONTAINER_ID,
                                progressLocationId: 'explorer'
                            });
                            viewContainer.setTitleOptions(navigator_widget_1.EXPLORER_VIEW_CONTAINER_TITLE_OPTIONS);
                            return [4 /*yield*/, container.get(widget_manager_1.WidgetManager).getOrCreateWidget(navigator_widget_1.FILE_NAVIGATOR_ID)];
                        case 1:
                            widget = _a.sent();
                            viewContainer.addWidget(widget, {
                                canHide: false,
                                initiallyCollapsed: false
                            });
                            return [2 /*return*/, viewContainer];
                    }
                });
            }); }
        });
    });
    bind(browser_1.ApplicationShellLayoutMigration).to(navigator_layout_migrations_1.NavigatorLayoutVersion3Migration).inSingletonScope();
    bind(navigator_diff_1.NavigatorDiff).toSelf().inSingletonScope();
    bind(navigator_tab_bar_decorator_1.NavigatorTabBarDecorator).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(navigator_tab_bar_decorator_1.NavigatorTabBarDecorator);
    bind(tab_bar_decorator_1.TabBarDecorator).toService(navigator_tab_bar_decorator_1.NavigatorTabBarDecorator);
});


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-keybinding-context.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-keybinding-context.js ***!
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
exports.NavigatorActiveContext = exports.NavigatorKeybindingContexts = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var navigator_widget_1 = __webpack_require__(/*! ./navigator-widget */ "../node_modules/@theia/navigator/lib/browser/navigator-widget.js");
var NavigatorKeybindingContexts;
(function (NavigatorKeybindingContexts) {
    NavigatorKeybindingContexts.navigatorActive = 'navigatorActive';
})(NavigatorKeybindingContexts = exports.NavigatorKeybindingContexts || (exports.NavigatorKeybindingContexts = {}));
var NavigatorActiveContext = /** @class */ (function () {
    function NavigatorActiveContext() {
        this.id = NavigatorKeybindingContexts.navigatorActive;
    }
    NavigatorActiveContext.prototype.isEnabled = function () {
        return this.applicationShell.activeWidget instanceof navigator_widget_1.FileNavigatorWidget;
    };
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], NavigatorActiveContext.prototype, "applicationShell", void 0);
    NavigatorActiveContext = __decorate([
        inversify_1.injectable()
    ], NavigatorActiveContext);
    return NavigatorActiveContext;
}());
exports.NavigatorActiveContext = NavigatorActiveContext;


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-layout-migrations.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-layout-migrations.js ***!
  \***********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigatorLayoutVersion3Migration = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var navigator_widget_1 = __webpack_require__(/*! ./navigator-widget */ "../node_modules/@theia/navigator/lib/browser/navigator-widget.js");
var NavigatorLayoutVersion3Migration = /** @class */ (function () {
    function NavigatorLayoutVersion3Migration() {
        this.layoutVersion = 3.0;
    }
    NavigatorLayoutVersion3Migration.prototype.onWillInflateWidget = function (desc, _a) {
        var parent = _a.parent;
        if (desc.constructionOptions.factoryId === navigator_widget_1.FILE_NAVIGATOR_ID && !parent) {
            return {
                constructionOptions: {
                    factoryId: navigator_widget_1.EXPLORER_VIEW_CONTAINER_ID
                },
                innerWidgetState: {
                    parts: [
                        {
                            widget: {
                                constructionOptions: {
                                    factoryId: navigator_widget_1.FILE_NAVIGATOR_ID
                                },
                                innerWidgetState: desc.innerWidgetState
                            },
                            partId: {
                                factoryId: navigator_widget_1.FILE_NAVIGATOR_ID
                            },
                            collapsed: false,
                            hidden: false
                        }
                    ],
                    title: navigator_widget_1.EXPLORER_VIEW_CONTAINER_TITLE_OPTIONS
                }
            };
        }
        return undefined;
    };
    NavigatorLayoutVersion3Migration = __decorate([
        inversify_1.injectable()
    ], NavigatorLayoutVersion3Migration);
    return NavigatorLayoutVersion3Migration;
}());
exports.NavigatorLayoutVersion3Migration = NavigatorLayoutVersion3Migration;


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-model.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-model.js ***!
  \***********************************************************************/
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
exports.FileNavigatorModel = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "../node_modules/@theia/filesystem/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var navigator_tree_1 = __webpack_require__(/*! ./navigator-tree */ "../node_modules/@theia/navigator/lib/browser/navigator-tree.js");
var browser_3 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
var frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "../node_modules/@theia/core/lib/browser/frontend-application-state.js");
var progress_service_1 = __webpack_require__(/*! @theia/core/lib/common/progress-service */ "../node_modules/@theia/core/lib/common/progress-service.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var FileNavigatorModel = /** @class */ (function (_super) {
    __extends(FileNavigatorModel, _super);
    function FileNavigatorModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pendingBusyProgress = new Map();
        return _this;
    }
    FileNavigatorModel.prototype.init = function () {
        _super.prototype.init.call(this);
        this.reportBusyProgress();
        this.initializeRoot();
    };
    FileNavigatorModel.prototype.reportBusyProgress = function () {
        var _this = this;
        this.toDispose.push(this.onDidChangeBusy(function (node) {
            var pending = _this.pendingBusyProgress.get(node.id);
            if (pending) {
                if (!node.busy) {
                    pending.resolve();
                    _this.pendingBusyProgress.delete(node.id);
                }
                return;
            }
            if (node.busy) {
                var progress_1 = new promise_util_1.Deferred();
                _this.pendingBusyProgress.set(node.id, progress_1);
                _this.progressService.withProgress('', 'explorer', function () { return progress_1.promise; });
            }
        }));
        this.toDispose.push(disposable_1.Disposable.create(function () {
            var e_1, _a;
            try {
                for (var _b = __values(_this.pendingBusyProgress.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var pending = _c.value;
                    pending.resolve();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.pendingBusyProgress.clear();
        }));
    };
    FileNavigatorModel.prototype.initializeRoot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var root, child;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.applicationState.reachedState('initialized_layout'),
                            this.workspaceService.roots
                        ])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateRoot()];
                    case 2:
                        _a.sent();
                        if (this.toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        this.toDispose.push(this.workspaceService.onWorkspaceChanged(function () { return _this.updateRoot(); }));
                        this.toDispose.push(this.workspaceService.onWorkspaceLocationChanged(function () { return _this.updateRoot(); }));
                        if (this.selectedNodes.length) {
                            return [2 /*return*/];
                        }
                        root = this.root;
                        if (browser_2.CompositeTreeNode.is(root) && root.children.length === 1) {
                            child = root.children[0];
                            if (browser_2.SelectableTreeNode.is(child) && !child.selected && browser_2.ExpandableTreeNode.is(child)) {
                                this.selectNode(child);
                                this.expandNode(child);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorModel.prototype.previewNode = function (node) {
        if (browser_1.FileNode.is(node)) {
            browser_2.open(this.openerService, node.uri, { mode: 'reveal', preview: true });
        }
    };
    FileNavigatorModel.prototype.doOpenNode = function (node) {
        if (node.visible === false) {
            return;
        }
        else if (browser_1.FileNode.is(node)) {
            browser_2.open(this.openerService, node.uri);
        }
        else {
            _super.prototype.doOpenNode.call(this, node);
        }
    };
    FileNavigatorModel.prototype.getNodesByUri = function (uri) {
        var workspace, _a, _b, root, id, node, e_2_1;
        var e_2, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    workspace = this.root;
                    if (!navigator_tree_1.WorkspaceNode.is(workspace)) return [3 /*break*/, 8];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 8]);
                    _a = __values(workspace.children), _b = _a.next();
                    _d.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 5];
                    root = _b.value;
                    id = this.tree.createId(root, uri);
                    node = this.getNode(id);
                    if (!node) return [3 /*break*/, 4];
                    return [4 /*yield*/, node];
                case 3:
                    _d.sent();
                    _d.label = 4;
                case 4:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
    FileNavigatorModel.prototype.updateRoot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.createRoot()];
                    case 1:
                        _a.root = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorModel.prototype.createRoot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stat, isMulti, workspaceNode, roots, roots_1, roots_1_1, root, _a, _b, e_3_1;
            var e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.workspaceService.opened) return [3 /*break*/, 10];
                        stat = this.workspaceService.workspace;
                        isMulti = (stat) ? !stat.isDirectory : false;
                        workspaceNode = isMulti
                            ? this.createMultipleRootNode()
                            : navigator_tree_1.WorkspaceNode.createRoot();
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        roots = _d.sent();
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 9]);
                        roots_1 = __values(roots), roots_1_1 = roots_1.next();
                        _d.label = 3;
                    case 3:
                        if (!!roots_1_1.done) return [3 /*break*/, 6];
                        root = roots_1_1.value;
                        _b = (_a = workspaceNode.children).push;
                        return [4 /*yield*/, this.tree.createWorkspaceRoot(root, workspaceNode)];
                    case 4:
                        _b.apply(_a, [_d.sent()]);
                        _d.label = 5;
                    case 5:
                        roots_1_1 = roots_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (roots_1_1 && !roots_1_1.done && (_c = roots_1.return)) _c.call(roots_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, workspaceNode];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create multiple root node used to display
     * the multiple root workspace name.
     *
     * @returns `WorkspaceNode`
     */
    FileNavigatorModel.prototype.createMultipleRootNode = function () {
        var workspace = this.workspaceService.workspace;
        var name = workspace
            ? workspace.resource.path.name
            : 'untitled';
        name += ' (Workspace)';
        return navigator_tree_1.WorkspaceNode.createRoot(name);
    };
    /**
     * Move the given source file or directory to the given target directory.
     */
    FileNavigatorModel.prototype.move = function (source, target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (source.parent && navigator_tree_1.WorkspaceRootNode.is(source)) {
                    // do not support moving a root folder
                    return [2 /*return*/, undefined];
                }
                return [2 /*return*/, _super.prototype.move.call(this, source, target)];
            });
        });
    };
    /**
     * Reveals node in the navigator by given file uri.
     *
     * @param uri uri to file which should be revealed in the navigator
     * @returns file tree node if the file with given uri was revealed, undefined otherwise
     */
    FileNavigatorModel.prototype.revealFile = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!uri.path.isAbsolute) {
                            return [2 /*return*/, undefined];
                        }
                        node = this.getNodeClosestToRootByUri(uri);
                        if (!navigator_tree_1.WorkspaceRootNode.is(node)) return [3 /*break*/, 4];
                        if (!browser_2.ExpandableTreeNode.is(node)) return [3 /*break*/, 3];
                        if (!!node.expanded) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.expandNode(node)];
                    case 1:
                        node = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, node];
                    case 3: 
                    // shouldn't happen, root node is always directory, i.e. expandable
                    return [2 /*return*/, undefined];
                    case 4:
                        // fail stop condition
                        if (uri.path.isRoot) {
                            // file system root is reached but workspace root wasn't found, it means that
                            // given uri is not in workspace root folder or points to not existing file.
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, this.revealFile(uri.parent)];
                    case 5:
                        if (!_a.sent()) return [3 /*break*/, 8];
                        if (node === undefined) {
                            // get node if it wasn't mounted into navigator tree before expansion
                            node = this.getNodeClosestToRootByUri(uri);
                        }
                        if (!(browser_2.ExpandableTreeNode.is(node) && !node.expanded)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.expandNode(node)];
                    case 6:
                        node = _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/, node];
                    case 8: return [2 /*return*/, undefined];
                }
            });
        });
    };
    FileNavigatorModel.prototype.getNodeClosestToRootByUri = function (uri) {
        var nodes = __spread(this.getNodesByUri(uri));
        return nodes.length > 0
            ? nodes.reduce(function (node1, node2) {
                return node1.id.length >= node2.id.length ? node1 : node2;
            }) : undefined;
    };
    __decorate([
        inversify_1.inject(browser_2.OpenerService),
        __metadata("design:type", Object)
    ], FileNavigatorModel.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(navigator_tree_1.FileNavigatorTree),
        __metadata("design:type", navigator_tree_1.FileNavigatorTree)
    ], FileNavigatorModel.prototype, "tree", void 0);
    __decorate([
        inversify_1.inject(browser_3.WorkspaceService),
        __metadata("design:type", browser_3.WorkspaceService)
    ], FileNavigatorModel.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], FileNavigatorModel.prototype, "applicationState", void 0);
    __decorate([
        inversify_1.inject(progress_service_1.ProgressService),
        __metadata("design:type", progress_service_1.ProgressService)
    ], FileNavigatorModel.prototype, "progressService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileNavigatorModel.prototype, "init", null);
    FileNavigatorModel = __decorate([
        inversify_1.injectable()
    ], FileNavigatorModel);
    return FileNavigatorModel;
}(browser_1.FileTreeModel));
exports.FileNavigatorModel = FileNavigatorModel;


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-preferences.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-preferences.js ***!
  \*****************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindFileNavigatorPreferences = exports.createNavigatorPreferences = exports.FileNavigatorPreferences = exports.FileNavigatorConfigSchema = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
exports.FileNavigatorConfigSchema = {
    'type': 'object',
    properties: {
        'explorer.autoReveal': {
            type: 'boolean',
            description: 'Selects file under editing in the explorer.',
            default: true
        }
    }
};
exports.FileNavigatorPreferences = Symbol('NavigatorPreferences');
function createNavigatorPreferences(preferences) {
    return browser_1.createPreferenceProxy(preferences, exports.FileNavigatorConfigSchema);
}
exports.createNavigatorPreferences = createNavigatorPreferences;
function bindFileNavigatorPreferences(bind) {
    bind(exports.FileNavigatorPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(browser_1.PreferenceService);
        return createNavigatorPreferences(preferences);
    });
    bind(browser_1.PreferenceContribution).toConstantValue({ schema: exports.FileNavigatorConfigSchema });
}
exports.bindFileNavigatorPreferences = bindFileNavigatorPreferences;


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-tab-bar-decorator.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-tab-bar-decorator.js ***!
  \***********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigatorTabBarDecorator = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var navigator_widget_1 = __webpack_require__(/*! ./navigator-widget */ "../node_modules/@theia/navigator/lib/browser/navigator-widget.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var NavigatorTabBarDecorator = /** @class */ (function () {
    function NavigatorTabBarDecorator() {
        this.id = 'theia-navigator-tabbar-decorator';
        this.emitter = new event_1.Emitter();
        this.toDispose = new disposable_1.DisposableCollection();
        this.toDisposeOnDirtyChanged = new Map();
    }
    NavigatorTabBarDecorator.prototype.onStart = function (app) {
        var _this = this;
        this.applicationShell = app.shell;
        if (!!this.getDirtyEditorsCount()) {
            this.fireDidChangeDecorations();
        }
        this.toDispose.pushAll([
            this.applicationShell.onDidAddWidget(function (widget) {
                var saveable = browser_1.Saveable.get(widget);
                if (saveable) {
                    _this.toDisposeOnDirtyChanged.set(widget.id, saveable.onDirtyChanged(function () { return _this.fireDidChangeDecorations(); }));
                }
            }),
            this.applicationShell.onDidRemoveWidget(function (widget) { var _a; return (_a = _this.toDisposeOnDirtyChanged.get(widget.id)) === null || _a === void 0 ? void 0 : _a.dispose(); })
        ]);
    };
    NavigatorTabBarDecorator.prototype.decorate = function (title) {
        if (title.owner.id === navigator_widget_1.EXPLORER_VIEW_CONTAINER_ID) {
            var changes = this.getDirtyEditorsCount();
            return changes > 0 ? [{ badge: changes }] : [];
        }
        else {
            return [];
        }
    };
    NavigatorTabBarDecorator.prototype.getDirtyEditorsCount = function () {
        return this.applicationShell.widgets.filter(function (widget) { return browser_1.Saveable.isDirty(widget); }).length;
    };
    Object.defineProperty(NavigatorTabBarDecorator.prototype, "onDidChangeDecorations", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: false,
        configurable: true
    });
    NavigatorTabBarDecorator.prototype.fireDidChangeDecorations = function () {
        this.emitter.fire(undefined);
    };
    NavigatorTabBarDecorator = __decorate([
        inversify_1.injectable()
    ], NavigatorTabBarDecorator);
    return NavigatorTabBarDecorator;
}());
exports.NavigatorTabBarDecorator = NavigatorTabBarDecorator;


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-tree.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-tree.js ***!
  \**********************************************************************/
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
exports.WorkspaceRootNode = exports.WorkspaceNode = exports.FileNavigatorTree = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "../node_modules/@theia/filesystem/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var navigator_filter_1 = __webpack_require__(/*! ./navigator-filter */ "../node_modules/@theia/navigator/lib/browser/navigator-filter.js");
var FileNavigatorTree = /** @class */ (function (_super) {
    __extends(FileNavigatorTree, _super);
    function FileNavigatorTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileNavigatorTree.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.filter.onFilterChanged(function () { return _this.refresh(); }));
    };
    FileNavigatorTree.prototype.resolveChildren = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (WorkspaceNode.is(parent)) {
                    return [2 /*return*/, parent.children];
                }
                return [2 /*return*/, this.filter.filter(_super.prototype.resolveChildren.call(this, parent))];
            });
        });
    };
    FileNavigatorTree.prototype.toNodeId = function (uri, parent) {
        var workspaceRootNode = WorkspaceRootNode.find(parent);
        if (workspaceRootNode) {
            return this.createId(workspaceRootNode, uri);
        }
        return _super.prototype.toNodeId.call(this, uri, parent);
    };
    FileNavigatorTree.prototype.createId = function (root, uri) {
        var id = _super.prototype.toNodeId.call(this, uri, root);
        return id === root.id ? id : root.id + ":" + id;
    };
    FileNavigatorTree.prototype.createWorkspaceRoot = function (rootFolder, workspaceNode) {
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                node = this.toNode(rootFolder, workspaceNode);
                Object.assign(node, {
                    visible: workspaceNode.name !== WorkspaceNode.name,
                });
                return [2 /*return*/, node];
            });
        });
    };
    __decorate([
        inversify_1.inject(navigator_filter_1.FileNavigatorFilter),
        __metadata("design:type", navigator_filter_1.FileNavigatorFilter)
    ], FileNavigatorTree.prototype, "filter", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileNavigatorTree.prototype, "init", null);
    FileNavigatorTree = __decorate([
        inversify_1.injectable()
    ], FileNavigatorTree);
    return FileNavigatorTree;
}(browser_1.FileTree));
exports.FileNavigatorTree = FileNavigatorTree;
var WorkspaceNode;
(function (WorkspaceNode) {
    WorkspaceNode.id = 'WorkspaceNodeId';
    WorkspaceNode.name = 'WorkspaceNode';
    function is(node) {
        return browser_2.CompositeTreeNode.is(node) && node.id === WorkspaceNode.id;
    }
    WorkspaceNode.is = is;
    /**
     * Create a `WorkspaceNode` that can be used as a `Tree` root.
     */
    function createRoot(multiRootName) {
        return {
            id: WorkspaceNode.id,
            name: multiRootName || WorkspaceNode.name,
            parent: undefined,
            children: [],
            visible: false,
            selected: false
        };
    }
    WorkspaceNode.createRoot = createRoot;
})(WorkspaceNode = exports.WorkspaceNode || (exports.WorkspaceNode = {}));
var WorkspaceRootNode;
(function (WorkspaceRootNode) {
    function is(node) {
        return browser_1.DirNode.is(node) && WorkspaceNode.is(node.parent);
    }
    WorkspaceRootNode.is = is;
    function find(node) {
        if (node) {
            if (is(node)) {
                return node;
            }
            return find(node.parent);
        }
    }
    WorkspaceRootNode.find = find;
})(WorkspaceRootNode = exports.WorkspaceRootNode || (exports.WorkspaceRootNode = {}));


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/navigator-widget.js":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/navigator-widget.js ***!
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
exports.FileNavigatorWidget = exports.CLASS = exports.LABEL = exports.EXPLORER_VIEW_CONTAINER_TITLE_OPTIONS = exports.EXPLORER_VIEW_CONTAINER_ID = exports.FILE_NAVIGATOR_ID = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "../node_modules/@theia/filesystem/lib/browser/index.js");
var browser_4 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
var application_shell_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/application-shell */ "../node_modules/@theia/core/lib/browser/shell/application-shell.js");
var navigator_tree_1 = __webpack_require__(/*! ./navigator-tree */ "../node_modules/@theia/navigator/lib/browser/navigator-tree.js");
var navigator_model_1 = __webpack_require__(/*! ./navigator-model */ "../node_modules/@theia/navigator/lib/browser/navigator-model.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var navigator_context_key_service_1 = __webpack_require__(/*! ./navigator-context-key-service */ "../node_modules/@theia/navigator/lib/browser/navigator-context-key-service.js");
var navigator_contribution_1 = __webpack_require__(/*! ./navigator-contribution */ "../node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
exports.FILE_NAVIGATOR_ID = 'files';
exports.EXPLORER_VIEW_CONTAINER_ID = 'explorer-view-container';
exports.EXPLORER_VIEW_CONTAINER_TITLE_OPTIONS = {
    label: 'Explorer',
    iconClass: 'navigator-tab-icon',
    closeable: true
};
exports.LABEL = 'No folder opened';
exports.CLASS = 'theia-Files';
var FileNavigatorWidget = /** @class */ (function (_super) {
    __extends(FileNavigatorWidget, _super);
    function FileNavigatorWidget(props, model, contextMenuRenderer, commandService, selectionService, workspaceService, shell) {
        var _this = _super.call(this, props, model, contextMenuRenderer) || this;
        _this.props = props;
        _this.model = model;
        _this.commandService = commandService;
        _this.selectionService = selectionService;
        _this.workspaceService = workspaceService;
        _this.shell = shell;
        _this.canOpenWorkspaceFileAndFolder = core_1.isOSX || !core_1.environment.electron.is();
        _this.openWorkspace = function () { return _this.doOpenWorkspace(); };
        _this.openFolder = function () { return _this.doOpenFolder(); };
        _this.addFolder = function () { return _this.doAddFolder(); };
        _this.keyUpHandler = function (e) {
            if (browser_1.Key.ENTER.keyCode === e.keyCode) {
                e.target.click();
            }
        };
        _this.id = exports.FILE_NAVIGATOR_ID;
        _this.addClass(exports.CLASS);
        return _this;
    }
    FileNavigatorWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.updateSelectionContextKeys();
        this.toDispose.pushAll([
            this.model.onSelectionChanged(function () {
                return _this.updateSelectionContextKeys();
            }),
            this.model.onExpansionChanged(function (node) {
                if (node.expanded && node.children.length === 1) {
                    var child = node.children[0];
                    if (browser_2.ExpandableTreeNode.is(child) && !child.expanded) {
                        _this.model.expandNode(child);
                    }
                }
            })
        ]);
    };
    FileNavigatorWidget.prototype.doUpdateRows = function () {
        _super.prototype.doUpdateRows.call(this);
        this.title.label = exports.LABEL;
        if (navigator_tree_1.WorkspaceNode.is(this.model.root)) {
            if (this.model.root.name === navigator_tree_1.WorkspaceNode.name) {
                var rootNode = this.model.root.children[0];
                if (navigator_tree_1.WorkspaceRootNode.is(rootNode)) {
                    this.title.label = this.toNodeName(rootNode);
                    this.title.caption = this.labelProvider.getLongName(rootNode.uri);
                }
            }
            else {
                this.title.label = this.toNodeName(this.model.root);
                this.title.caption = this.title.label;
            }
        }
        else {
            this.title.caption = this.title.label;
        }
    };
    FileNavigatorWidget.prototype.enableDndOnMainPanel = function () {
        var _this = this;
        var mainPanelNode = this.shell.mainPanel.node;
        this.addEventListener(mainPanelNode, 'drop', function (_a) {
            var dataTransfer = _a.dataTransfer;
            return __awaiter(_this, void 0, void 0, function () {
                var treeNodes;
                var _this = this;
                return __generator(this, function (_b) {
                    treeNodes = dataTransfer && this.getSelectedTreeNodesFromData(dataTransfer) || [];
                    treeNodes.filter(browser_3.FileNode.is).forEach(function (treeNode) { return _this.commandService.executeCommand(navigator_contribution_1.FileNavigatorCommands.OPEN.id, treeNode.uri); });
                    return [2 /*return*/];
                });
            });
        });
        var handler = function (e) {
            if (e.dataTransfer) {
                e.dataTransfer.dropEffect = 'link';
                e.preventDefault();
            }
        };
        this.addEventListener(mainPanelNode, 'dragover', handler);
        this.addEventListener(mainPanelNode, 'dragenter', handler);
    };
    FileNavigatorWidget.prototype.getContainerTreeNode = function () {
        var root = this.model.root;
        if (this.workspaceService.isMultiRootWorkspaceOpened) {
            return root;
        }
        if (navigator_tree_1.WorkspaceNode.is(root)) {
            return root.children[0];
        }
        return undefined;
    };
    FileNavigatorWidget.prototype.renderTree = function (model) {
        return this.model.root === undefined
            ? this.renderOpenWorkspaceDiv()
            : this.isEmptyMultiRootWorkspace(model)
                ? this.renderEmptyMultiRootWorkspace()
                : _super.prototype.renderTree.call(this, model);
    };
    FileNavigatorWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        this.addClipboardListener(this.node, 'copy', function (e) { return _this.handleCopy(e); });
        this.addClipboardListener(this.node, 'paste', function (e) { return _this.handlePaste(e); });
        this.enableDndOnMainPanel();
    };
    FileNavigatorWidget.prototype.handleCopy = function (event) {
        var uris = this.model.selectedFileStatNodes.map(function (node) { return node.uri.toString(); });
        if (uris.length > 0 && event.clipboardData) {
            event.clipboardData.setData('text/plain', uris.join('\n'));
            event.preventDefault();
        }
    };
    FileNavigatorWidget.prototype.handlePaste = function (event) {
        var e_1, _a;
        if (event.clipboardData) {
            var raw = event.clipboardData.getData('text/plain');
            if (!raw) {
                return;
            }
            var target = this.model.selectedFileStatNodes[0];
            if (!target) {
                return;
            }
            try {
                for (var _b = __values(raw.split('\n')), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var file = _c.value;
                    event.preventDefault();
                    var source = new uri_1.default(file);
                    this.model.copy(source, target);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    FileNavigatorWidget.prototype.doOpenWorkspace = function () {
        this.commandService.executeCommand(browser_4.WorkspaceCommands.OPEN_WORKSPACE.id);
    };
    FileNavigatorWidget.prototype.doOpenFolder = function () {
        this.commandService.executeCommand(browser_4.WorkspaceCommands.OPEN_FOLDER.id);
    };
    FileNavigatorWidget.prototype.doAddFolder = function () {
        this.commandService.executeCommand(browser_4.WorkspaceCommands.ADD_FOLDER.id);
    };
    /**
     * Instead of rendering the file resources from the workspace, we render a placeholder
     * button when the workspace root is not yet set.
     */
    FileNavigatorWidget.prototype.renderOpenWorkspaceDiv = function () {
        var openButton;
        if (this.canOpenWorkspaceFileAndFolder) {
            openButton = React.createElement("button", { className: 'theia-button open-workspace-button', title: 'Select a folder or a workspace-file to open as your workspace', onClick: this.openWorkspace, onKeyUp: this.keyUpHandler }, "Open Workspace");
        }
        else {
            openButton = React.createElement("button", { className: 'theia-button open-workspace-button', title: 'Select a folder as your workspace root', onClick: this.openFolder, onKeyUp: this.keyUpHandler }, "Open Folder");
        }
        return React.createElement("div", { className: 'theia-navigator-container' },
            React.createElement("div", { className: 'center' }, "You have not yet opened a workspace."),
            React.createElement("div", { className: 'open-workspace-button-container' }, openButton));
    };
    /**
     * When a multi-root workspace is opened, a user can remove all the folders from it.
     * Instead of displaying an empty navigator tree, this will show a button to add more folders.
     */
    FileNavigatorWidget.prototype.renderEmptyMultiRootWorkspace = function () {
        return React.createElement("div", { className: 'theia-navigator-container' },
            React.createElement("div", { className: 'center' }, "You have not yet added a folder to the workspace."),
            React.createElement("div", { className: 'open-workspace-button-container' },
                React.createElement("button", { className: 'theia-button open-workspace-button', title: 'Add a folder to your workspace', onClick: this.addFolder, onKeyUp: this.keyUpHandler }, "Add Folder")));
    };
    FileNavigatorWidget.prototype.isEmptyMultiRootWorkspace = function (model) {
        return navigator_tree_1.WorkspaceNode.is(model.root) && model.root.children.length === 0;
    };
    FileNavigatorWidget.prototype.handleClickEvent = function (node, event) {
        var modifierKeyCombined = core_1.isOSX ? (event.shiftKey || event.metaKey) : (event.shiftKey || event.ctrlKey);
        if (!modifierKeyCombined && node && this.corePreferences['workbench.list.openMode'] === 'singleClick') {
            this.model.previewNode(node);
        }
        _super.prototype.handleClickEvent.call(this, node, event);
    };
    FileNavigatorWidget.prototype.onAfterShow = function (msg) {
        _super.prototype.onAfterShow.call(this, msg);
        this.contextKeyService.explorerViewletVisible.set(true);
    };
    FileNavigatorWidget.prototype.onAfterHide = function (msg) {
        _super.prototype.onAfterHide.call(this, msg);
        this.contextKeyService.explorerViewletVisible.set(false);
    };
    FileNavigatorWidget.prototype.updateSelectionContextKeys = function () {
        this.contextKeyService.explorerResourceIsFolder.set(browser_3.DirNode.is(this.model.selectedNodes[0]));
    };
    __decorate([
        inversify_1.inject(browser_1.CorePreferences),
        __metadata("design:type", Object)
    ], FileNavigatorWidget.prototype, "corePreferences", void 0);
    __decorate([
        inversify_1.inject(navigator_context_key_service_1.NavigatorContextKeyService),
        __metadata("design:type", navigator_context_key_service_1.NavigatorContextKeyService)
    ], FileNavigatorWidget.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileNavigatorWidget.prototype, "init", null);
    FileNavigatorWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_2.TreeProps)),
        __param(1, inversify_1.inject(navigator_model_1.FileNavigatorModel)),
        __param(2, inversify_1.inject(browser_2.ContextMenuRenderer)),
        __param(3, inversify_1.inject(common_1.CommandService)),
        __param(4, inversify_1.inject(common_1.SelectionService)),
        __param(5, inversify_1.inject(browser_4.WorkspaceService)),
        __param(6, inversify_1.inject(application_shell_1.ApplicationShell)),
        __metadata("design:paramtypes", [Object, navigator_model_1.FileNavigatorModel,
            browser_2.ContextMenuRenderer, Object, common_1.SelectionService,
            browser_4.WorkspaceService,
            application_shell_1.ApplicationShell])
    ], FileNavigatorWidget);
    return FileNavigatorWidget;
}(browser_3.FileTreeWidget));
exports.FileNavigatorWidget = FileNavigatorWidget;


/***/ }),

/***/ "../node_modules/@theia/navigator/src/browser/style/files.svg":
/*!********************************************************************!*\
  !*** ../node_modules/@theia/navigator/src/browser/style/files.svg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgZmlsbD0iI0Y2RjZGNiIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4IiB3aWR0aD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE0Ljk2NSA3aC04LjkxNjQycy0yLjA0ODU4LjA3OC0yLjA0ODU4IDJ2MTVzMCAyIDIuMDQ4NTggMmwxMS4yNjcyMi0uMDA0YzIuMDQ4Ni4wMDQgMi4wNDg2LTEuOTk2IDIuMDQ4Ni0xLjk5NnYtMTEuNDkxem0tMS43NDY0IDJ2NWg0LjA5NzJ2MTBoLTExLjI2NzIydi0xNXptNS42NDI4LTZoLTguNjk5M3MtMi4wNjQ5My4wMTYtMi4wODAzIDJoOC4yMDk3di40NTRsNC4wMjY1IDQuNTQ2aDEuMDk1djEyYzIuMDQ4NSAwIDIuMDQ4NS0xLjk5NSAyLjA0ODUtMS45OTV2LTExLjM1N3oiIGZpbGw9IiNGNkY2RjYiLz48L3N2Zz4K"

/***/ }),

/***/ "../node_modules/@theia/navigator/src/browser/style/index.css":
/*!********************************************************************!*\
  !*** ../node_modules/@theia/navigator/src/browser/style/index.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/navigator/src/browser/style/index.css");

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

/***/ "../node_modules/@theia/workspace/lib/browser/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/@theia/workspace/lib/browser/index.js ***!
  \*************************************************************/
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
__exportStar(__webpack_require__(/*! ./workspace-commands */ "../node_modules/@theia/workspace/lib/browser/workspace-commands.js"), exports);
__exportStar(__webpack_require__(/*! ./workspace-service */ "../node_modules/@theia/workspace/lib/browser/workspace-service.js"), exports);
__exportStar(__webpack_require__(/*! ./workspace-frontend-contribution */ "../node_modules/@theia/workspace/lib/browser/workspace-frontend-contribution.js"), exports);
__exportStar(__webpack_require__(/*! ./workspace-frontend-module */ "../node_modules/@theia/workspace/lib/browser/workspace-frontend-module.js"), exports);
__exportStar(__webpack_require__(/*! ./workspace-preferences */ "../node_modules/@theia/workspace/lib/browser/workspace-preferences.js"), exports);


/***/ }),

/***/ "../node_modules/balanced-match/index.js":
/*!***********************************************!*\
  !*** ../node_modules/balanced-match/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ "../node_modules/brace-expansion/index.js":
/*!************************************************!*\
  !*** ../node_modules/brace-expansion/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(/*! concat-map */ "../node_modules/concat-map/index.js");
var balanced = __webpack_require__(/*! balanced-match */ "../node_modules/balanced-match/index.js");

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),

/***/ "../node_modules/concat-map/index.js":
/*!*******************************************!*\
  !*** ../node_modules/concat-map/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/navigator/src/browser/style/index.css":
/*!***********************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/navigator/src/browser/style/index.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2017 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-Files {\n    height: 100%;\n}\n\n.theia-navigator-container {\n    font-size: var(--theia-ui-font-size1);\n    padding: 5px;\n    position: relative;\n}\n\n.theia-navigator-container .open-workspace-button-container {\n    margin: auto;\n    margin-top: 5px;\n    display: flex;\n    justify-content: center;\n    align-self: center;\n}\n\n.theia-navigator-container .center {\n    text-align: center;\n}\n\n.p-Widget .open-workspace-button {\n    padding: 4px 12px;\n    width: calc(100% - var(--theia-ui-padding)*4);\n    margin-left: 0;\n}\n\n.navigator-tab-icon {\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./files.svg */ "../node_modules/@theia/navigator/src/browser/style/files.svg")) + ");\n    mask: url(" + escape(__webpack_require__(/*! ./files.svg */ "../node_modules/@theia/navigator/src/browser/style/files.svg")) + ");\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/minimatch/minimatch.js":
/*!**********************************************!*\
  !*** ../node_modules/minimatch/minimatch.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(/*! path */ "path")
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(/*! brace-expansion */ "../node_modules/brace-expansion/index.js")

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ })

}]);
//# sourceMappingURL=23.bundle.js.map