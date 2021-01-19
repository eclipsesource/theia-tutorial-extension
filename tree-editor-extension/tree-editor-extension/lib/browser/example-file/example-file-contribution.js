"use strict";
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
exports.NewTreeExampleFileMenuContribution = exports.NewTreeExampleFileCommandContribution = void 0;
var common_1 = require("@theia/core/lib/common");
var inversify_1 = require("inversify");
var workspace_commands_1 = require("@theia/workspace/lib/browser/workspace-commands");
var browser_1 = require("@theia/workspace/lib/browser");
var example_file_command_1 = require("./example-file-command");
var TREE_EDITOR_MAIN_MENU = __spread(common_1.MAIN_MENU_BAR, ['9_treeeditormenu']);
var NewTreeExampleFileCommandContribution = /** @class */ (function () {
    function NewTreeExampleFileCommandContribution(selectionService, workspaceService, newExampleFileHandler) {
        this.selectionService = selectionService;
        this.workspaceService = workspaceService;
        this.newExampleFileHandler = newExampleFileHandler;
    }
    NewTreeExampleFileCommandContribution.prototype.registerCommands = function (registry) {
        registry.registerCommand(example_file_command_1.NewTreeExampleFileCommand, new workspace_commands_1.WorkspaceRootUriAwareCommandHandler(this.workspaceService, this.selectionService, this.newExampleFileHandler));
    };
    NewTreeExampleFileCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.SelectionService)),
        __param(1, inversify_1.inject(browser_1.WorkspaceService)),
        __param(2, inversify_1.inject(example_file_command_1.NewTreeExampleFileCommandHandler)),
        __metadata("design:paramtypes", [common_1.SelectionService,
            browser_1.WorkspaceService,
            example_file_command_1.NewTreeExampleFileCommandHandler])
    ], NewTreeExampleFileCommandContribution);
    return NewTreeExampleFileCommandContribution;
}());
exports.NewTreeExampleFileCommandContribution = NewTreeExampleFileCommandContribution;
var NewTreeExampleFileMenuContribution = /** @class */ (function () {
    function NewTreeExampleFileMenuContribution() {
    }
    NewTreeExampleFileMenuContribution.prototype.registerMenus = function (menus) {
        menus.registerSubmenu(TREE_EDITOR_MAIN_MENU, 'Tree Editor');
        menus.registerMenuAction(TREE_EDITOR_MAIN_MENU, {
            commandId: example_file_command_1.NewTreeExampleFileCommand.id,
            label: 'New Example File'
        });
    };
    NewTreeExampleFileMenuContribution = __decorate([
        inversify_1.injectable()
    ], NewTreeExampleFileMenuContribution);
    return NewTreeExampleFileMenuContribution;
}());
exports.NewTreeExampleFileMenuContribution = NewTreeExampleFileMenuContribution;
//# sourceMappingURL=example-file-contribution.js.map