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
Object.defineProperty(exports, '__esModule', { value: true });
exports.TreeLabelProvider = void 0;
const inversify_1 = require('inversify');
const theia_tree_editor_1 = require('@eclipse-emfcloud/theia-tree-editor');
const tree_model_1 = require('./tree-model');
const tree_editor_widget_1 = require('./tree-editor-widget');
const DEFAULT_COLOR = 'black';
const ICON_CLASSES = new Map([
  [tree_model_1.CoffeeModel.Type.Tutorial, ' fa-book ' + DEFAULT_COLOR],
  [tree_model_1.CoffeeModel.Type.Exercise, 'fa-file-text ' + DEFAULT_COLOR],
]);
/* Icon for unknown types */
const UNKNOWN_ICON = 'fa-question-circle ' + DEFAULT_COLOR;
let TreeLabelProvider = class TreeLabelProvider {
  canHandle(element) {
    if (
      (theia_tree_editor_1.TreeEditor.Node.is(element) ||
        theia_tree_editor_1.TreeEditor.CommandIconInfo.is(element)) &&
      element.editorId === tree_editor_widget_1.TreeEditorWidget.WIDGET_ID
    ) {
      return 1000;
    }
    return 0;
  }
  getIcon(element) {
    let iconClass;
    if (theia_tree_editor_1.TreeEditor.CommandIconInfo.is(element)) {
      iconClass = ICON_CLASSES.get(element.type);
    } else if (theia_tree_editor_1.TreeEditor.Node.is(element)) {
      iconClass = ICON_CLASSES.get(element.jsonforms.type);
    }
    return iconClass ? 'fa ' + iconClass : 'fa ' + UNKNOWN_ICON;
  }
  getName(element) {
    const data = theia_tree_editor_1.TreeEditor.Node.is(element)
      ? element.jsonforms.data
      : element;
    if (data.title) {
      return data.title;
    } else if (data.typeId) {
      return this.getTypeName(data.typeId);
    }
    return undefined;
  }
  getTypeName(typeId) {
    return tree_model_1.CoffeeModel.Type.name(typeId);
  }
};
TreeLabelProvider = __decorate([inversify_1.injectable()], TreeLabelProvider);
exports.TreeLabelProvider = TreeLabelProvider;
//# sourceMappingURL=tree-label-provider.js.map
