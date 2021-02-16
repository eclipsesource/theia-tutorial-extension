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
exports.TreeEditorWidget = void 0;
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/editor/lib/browser");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var inversify_1 = require("inversify");
var theia_tree_editor_1 = require("@eclipse-emfcloud/theia-tree-editor");
var theia_tree_editor_2 = require("@eclipse-emfcloud/theia-tree-editor");
var TreeEditorWidget = /** @class */ (function (_super) {
    __extends(TreeEditorWidget, _super);
    function TreeEditorWidget(treeWidget, formWidget, workspaceService, logger, options, provider, nodeFactory, editorPreferences) {
        var _this = _super.call(this, treeWidget, formWidget, workspaceService, logger, TreeEditorWidget_1.WIDGET_ID, options, provider, nodeFactory, editorPreferences) || this;
        _this.treeWidget = treeWidget;
        _this.formWidget = formWidget;
        _this.workspaceService = workspaceService;
        _this.logger = logger;
        _this.options = options;
        _this.provider = provider;
        _this.nodeFactory = nodeFactory;
        _this.editorPreferences = editorPreferences;
        return _this;
    }
    TreeEditorWidget_1 = TreeEditorWidget;
    TreeEditorWidget.prototype.getTypeProperty = function () {
        return "typeId";
    };
    TreeEditorWidget.prototype.configureTitle = function (title) {
        _super.prototype.configureTitle.call(this, title);
        title.iconClass = 'fa fa-coffee dark-purple';
    };
    var TreeEditorWidget_1;
    TreeEditorWidget = TreeEditorWidget_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(theia_tree_editor_1.MasterTreeWidget)),
        __param(1, inversify_1.inject(theia_tree_editor_1.DetailFormWidget)),
        __param(2, inversify_1.inject(workspace_service_1.WorkspaceService)),
        __param(3, inversify_1.inject(common_1.ILogger)),
        __param(4, inversify_1.inject(theia_tree_editor_1.NavigatableTreeEditorOptions)),
        __param(5, inversify_1.inject(common_1.DefaultResourceProvider)),
        __param(6, inversify_1.inject(theia_tree_editor_1.TreeEditor.NodeFactory)),
        __param(7, inversify_1.inject(browser_1.EditorPreferences)),
        __metadata("design:paramtypes", [theia_tree_editor_1.MasterTreeWidget,
            theia_tree_editor_1.DetailFormWidget,
            workspace_service_1.WorkspaceService, Object, Object, common_1.DefaultResourceProvider, Object, Object])
    ], TreeEditorWidget);
    return TreeEditorWidget;
}(theia_tree_editor_2.ResourceTreeEditorWidget));
exports.TreeEditorWidget = TreeEditorWidget;
(function (TreeEditorWidget) {
    TreeEditorWidget.WIDGET_ID = 'tree-editor-extension-tree-editor';
})(TreeEditorWidget = exports.TreeEditorWidget || (exports.TreeEditorWidget = {}));
exports.TreeEditorWidget = TreeEditorWidget;
//# sourceMappingURL=tree-editor-widget.js.map