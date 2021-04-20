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
Object.defineProperty(exports, '__esModule', { value: true });
exports.TreeContribution = void 0;
const browser_1 = require('@theia/core/lib/browser');
const inversify_1 = require('inversify');
const theia_tree_editor_1 = require('@eclipse-emfcloud/theia-tree-editor');
const tree_model_service_1 = require('./tree/tree-model-service');
const tree_editor_widget_1 = require('./tree/tree-editor-widget');
const tree_label_provider_1 = require('./tree/tree-label-provider');
let TreeContribution = class TreeContribution extends theia_tree_editor_1.BaseTreeEditorContribution {
  constructor(modelService, labelProvider) {
    super(
      tree_editor_widget_1.TreeEditorWidget.WIDGET_ID,
      modelService,
      labelProvider
    );
    this.id = tree_editor_widget_1.TreeEditorWidget.WIDGET_ID;
    this.label = theia_tree_editor_1.MasterTreeWidget.WIDGET_LABEL;
  }
  canHandle(uri) {
    if (uri.path.ext === '.json') {
      return 1000;
    }
    return 0;
  }
  registerCommands(commands) {
    // register your custom commands here
    super.registerCommands(commands);
  }
  registerMenus(menus) {
    // register your custom menu actions here
    super.registerMenus(menus);
  }
  createWidgetOptions(uri, options) {
    return {
      kind: 'navigatable',
      uri: this.serializeUri(uri),
    };
  }
  serializeUri(uri) {
    return uri.withoutFragment().toString();
  }
};
__decorate(
  [inversify_1.inject(browser_1.ApplicationShell)],
  TreeContribution.prototype,
  'shell',
  void 0
);
__decorate(
  [inversify_1.inject(browser_1.OpenerService)],
  TreeContribution.prototype,
  'opener',
  void 0
);
TreeContribution = __decorate(
  [
    inversify_1.injectable(),
    __param(0, inversify_1.inject(tree_model_service_1.TreeModelService)),
    __param(1, inversify_1.inject(tree_label_provider_1.TreeLabelProvider)),
  ],
  TreeContribution
);
exports.TreeContribution = TreeContribution;
//# sourceMappingURL=tree-contribution.js.map
