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
exports.TreeNodeFactory = void 0;
const core_1 = require('@theia/core');
const inversify_1 = require('inversify');
const uuid_1 = require('uuid');
const tree_model_1 = require('./tree-model');
const tree_editor_widget_1 = require('./tree-editor-widget');
const tree_label_provider_1 = require('./tree-label-provider');
let TreeNodeFactory = class TreeNodeFactory {
  constructor(labelProvider, logger) {
    this.labelProvider = labelProvider;
    this.logger = logger;
  }
  mapDataToNodes(treeData) {
    const node = this.mapData(treeData.data);
    if (node) {
      return [node];
    }
    return [];
  }
  mapData(data, parent, property, indexOrKey) {
    if (!data) {
      this.logger.warn('mapData called without data');
    }
    const node = Object.assign(Object.assign({}, this.defaultNode()), {
      editorId: tree_editor_widget_1.TreeEditorWidget.WIDGET_ID,
      name: this.labelProvider.getName(data),
      parent: parent,
      jsonforms: {
        type: this.getTypeId(data),
        data: data,
        property: property,
        index:
          typeof indexOrKey === 'number' ? indexOrKey.toFixed(0) : indexOrKey,
      },
    });
    // containments
    if (parent) {
      parent.children.push(node);
      parent.expanded = true;
    }
    if (data.children) {
      this.mapCustomData(data.children, node, 'children');
    }
    if (data.exercises) {
      this.mapCustomData(data.exercises, node, 'exercises');
    }
    return node;
  }
  mapCustomData(data, node, label) {
    data.forEach((element, idx) => {
      this.mapData(element, node, label, idx);
    });
  }
  hasCreatableChildren(node) {
    return node
      ? tree_model_1.CoffeeModel.childrenMapping.get(node.jsonforms.type) !==
          undefined
      : false;
  }
  defaultNode() {
    return {
      id: uuid_1.v4(),
      expanded: false,
      selected: false,
      parent: undefined,
      children: [],
      decorationData: {},
      name: '',
      jsonforms: {
        type: '',
        property: '',
        data: undefined,
      },
    };
  }
  /** Derives the type id from the given data. */
  getTypeId(data) {
    return (data && data.typeId) || '';
  }
};
TreeNodeFactory = __decorate(
  [
    inversify_1.injectable(),
    __param(0, inversify_1.inject(tree_label_provider_1.TreeLabelProvider)),
    __param(1, inversify_1.inject(core_1.ILogger)),
  ],
  TreeNodeFactory
);
exports.TreeNodeFactory = TreeNodeFactory;
//# sourceMappingURL=tree-node-factory.js.map
