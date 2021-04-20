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
exports.TreeModelService = void 0;
const tree_schema_1 = require('./tree-schema');
const core_1 = require('@theia/core');
const inversify_1 = require('inversify');
const tree_model_1 = require('./tree-model');
const tree_schema_2 = require('./tree-schema');
let TreeModelService = class TreeModelService {
  constructor(logger) {
    this.logger = logger;
  }
  getDataForNode(node) {
    return node.jsonforms.data;
  }
  getSchemaForNode(node) {
    return Object.assign(
      { definitions: tree_schema_2.tutorialSchema.definitions },
      this.getSchemaForType(node.jsonforms.type)
    );
  }
  getSchemaForType(type) {
    if (!type) {
      return undefined;
    }
    const schema = Object.entries(tree_schema_2.tutorialSchema.definitions)
      .map((entry) => entry[1])
      .find(
        (definition) =>
          definition.properties && definition.properties.typeId.const === type
      );
    if (schema === undefined) {
      this.logger.warn("Can't find definition schema for type " + type);
    }
    return schema;
  }
  getUiSchemaForNode(node) {
    const type = node.jsonforms.type;
    switch (type) {
      case tree_model_1.CoffeeModel.Type.Exercise:
        return tree_schema_2.exerciseView;
      case tree_model_1.CoffeeModel.Type.Tutorial:
        return tree_schema_2.tutorialView;
      case tree_model_1.CoffeeModel.Type.FileDiff:
        return tree_schema_1.fileDiffView;
      case tree_model_1.CoffeeModel.Type.AutomaticImport:
        return tree_schema_1.automaticImportView;
      case tree_model_1.CoffeeModel.Type.CheckIfFilesExist:
        return tree_schema_1.checkIfFilesExistView;
      case tree_model_1.CoffeeModel.Type.CleanExerciseFolder:
        return tree_schema_1.cleanExerciseFolderView;
      case tree_model_1.CoffeeModel.Type.OpenFile:
        return tree_schema_1.openFileView;
      case tree_model_1.CoffeeModel.Type.TerminalCommands:
        return tree_schema_1.terminalCommandsView;
      case tree_model_1.CoffeeModel.Type.Html:
        return tree_schema_1.htmlView;
      case tree_model_1.CoffeeModel.Type.Image:
        return tree_schema_1.imageView;
      case tree_model_1.CoffeeModel.Type.CommandButton:
        return tree_schema_1.commandButtonView;
      case tree_model_1.CoffeeModel.Type.Hint:
        return tree_schema_1.hintView;
      default:
        this.logger.warn("Can't find registered ui schema for type " + type);
        return undefined;
    }
  }
  getChildrenMapping() {
    return tree_model_1.CoffeeModel.childrenMapping;
  }
  getNameForType(type) {
    return tree_model_1.CoffeeModel.Type.name(type);
  }
};
TreeModelService = __decorate(
  [inversify_1.injectable(), __param(0, inversify_1.inject(core_1.ILogger))],
  TreeModelService
);
exports.TreeModelService = TreeModelService;
//# sourceMappingURL=tree-model-service.js.map
