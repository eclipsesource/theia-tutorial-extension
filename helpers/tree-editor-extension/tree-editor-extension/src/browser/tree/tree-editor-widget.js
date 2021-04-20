'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
var TreeEditorWidget_1;
Object.defineProperty(exports, '__esModule', { value: true });
exports.TreeEditorWidget = void 0;
const common_1 = require('@theia/core/lib/common');
const browser_1 = require('@theia/editor/lib/browser');
const workspace_service_1 = require('@theia/workspace/lib/browser/workspace-service');
const inversify_1 = require('inversify');
const theia_tree_editor_1 = require('@eclipse-emfcloud/theia-tree-editor');
const theia_tree_editor_2 = require('@eclipse-emfcloud/theia-tree-editor');
let TreeEditorWidget = (TreeEditorWidget_1 = class TreeEditorWidget extends (
  theia_tree_editor_2.ResourceTreeEditorWidget
) {
  constructor(
    treeWidget,
    formWidget,
    workspaceService,
    logger,
    options,
    provider,
    nodeFactory,
    editorPreferences
  ) {
    super(
      treeWidget,
      formWidget,
      workspaceService,
      logger,
      TreeEditorWidget_1.WIDGET_ID,
      options,
      provider,
      nodeFactory,
      editorPreferences
    );
    this.treeWidget = treeWidget;
    this.formWidget = formWidget;
    this.workspaceService = workspaceService;
    this.logger = logger;
    this.options = options;
    this.provider = provider;
    this.nodeFactory = nodeFactory;
    this.editorPreferences = editorPreferences;
  }
  getTypeProperty() {
    return 'typeId';
  }
  configureTitle(title) {
    super.configureTitle(title);
    title.iconClass = 'fa fa-coffee dark-purple';
  }
});
TreeEditorWidget = TreeEditorWidget_1 = __decorate(
  [
    inversify_1.injectable(),
    __param(0, inversify_1.inject(theia_tree_editor_1.MasterTreeWidget)),
    __param(1, inversify_1.inject(theia_tree_editor_1.DetailFormWidget)),
    __param(2, inversify_1.inject(workspace_service_1.WorkspaceService)),
    __param(3, inversify_1.inject(common_1.ILogger)),
    __param(
      4,
      inversify_1.inject(theia_tree_editor_1.NavigatableTreeEditorOptions)
    ),
    __param(5, inversify_1.inject(common_1.DefaultResourceProvider)),
    __param(6, inversify_1.inject(theia_tree_editor_1.TreeEditor.NodeFactory)),
    __param(7, inversify_1.inject(browser_1.EditorPreferences)),
  ],
  TreeEditorWidget
);
exports.TreeEditorWidget = TreeEditorWidget;
(function (TreeEditorWidget) {
  TreeEditorWidget.WIDGET_ID = 'tree-editor-extension-tree-editor';
})(
  (TreeEditorWidget =
    exports.TreeEditorWidget || (exports.TreeEditorWidget = {}))
);
exports.TreeEditorWidget = TreeEditorWidget;
//# sourceMappingURL=tree-editor-widget.js.map
