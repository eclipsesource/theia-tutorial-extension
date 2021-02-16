"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
exports.TreeContribution = void 0;
var browser_1 = require("@theia/core/lib/browser");
var inversify_1 = require("inversify");
var theia_tree_editor_1 = require("@eclipse-emfcloud/theia-tree-editor");
var tree_model_service_1 = require("./tree/tree-model-service");
var tree_editor_widget_1 = require("./tree/tree-editor-widget");
var tree_label_provider_1 = require("./tree/tree-label-provider");
var TreeContribution = /** @class */ (function (_super) {
    __extends(TreeContribution, _super);
    function TreeContribution(modelService, labelProvider) {
        var _this = _super.call(this, tree_editor_widget_1.TreeEditorWidget.WIDGET_ID, modelService, labelProvider) || this;
        _this.id = tree_editor_widget_1.TreeEditorWidget.WIDGET_ID;
        _this.label = theia_tree_editor_1.MasterTreeWidget.WIDGET_LABEL;
        return _this;
    }
    TreeContribution.prototype.canHandle = function (uri) {
        if (uri.path.ext === '.json') {
            return 1000;
        }
        return 0;
    };
    TreeContribution.prototype.registerCommands = function (commands) {
        // register your custom commands here
        _super.prototype.registerCommands.call(this, commands);
    };
    TreeContribution.prototype.registerMenus = function (menus) {
        // register your custom menu actions here
        _super.prototype.registerMenus.call(this, menus);
    };
    TreeContribution.prototype.createWidgetOptions = function (uri, options) {
        return {
            kind: 'navigatable',
            uri: this.serializeUri(uri)
        };
    };
    TreeContribution.prototype.serializeUri = function (uri) {
        return uri.withoutFragment().toString();
    };
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], TreeContribution.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], TreeContribution.prototype, "opener", void 0);
    TreeContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(tree_model_service_1.TreeModelService)),
        __param(1, inversify_1.inject(tree_label_provider_1.TreeLabelProvider)),
        __metadata("design:paramtypes", [Object, tree_label_provider_1.TreeLabelProvider])
    ], TreeContribution);
    return TreeContribution;
}(theia_tree_editor_1.BaseTreeEditorContribution));
exports.TreeContribution = TreeContribution;
//# sourceMappingURL=tree-contribution.js.map