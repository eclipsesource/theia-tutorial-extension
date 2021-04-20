import {
  automaticImportView,
  checkIfFilesExistView,
  cleanExerciseFolderView,
  commandButtonView,
  fileDiffView,
  hintView,
  htmlView,
  imageView,
  openFileView,
  terminalCommandsView,
} from './tree-schema';
import { ILogger } from '@theia/core';
import { inject, injectable } from 'inversify';
import { TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';

import { CoffeeModel } from './tree-model';
import { tutorialSchema, exerciseView, tutorialView } from './tree-schema';

@injectable()
export class TreeModelService implements TreeEditor.ModelService {
  constructor(@inject(ILogger) private readonly logger: ILogger) {}

  getDataForNode(node: TreeEditor.Node) {
    return node.jsonforms.data;
  }

  getSchemaForNode(node: TreeEditor.Node) {
    return {
      definitions: tutorialSchema.definitions,
      ...this.getSchemaForType(node.jsonforms.type),
    };
  }

  private getSchemaForType(type: string) {
    if (!type) {
      return undefined;
    }
    const schema = Object.entries(tutorialSchema.definitions)
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

  getUiSchemaForNode(node: TreeEditor.Node) {
    const type = node.jsonforms.type;
    switch (type) {
      case CoffeeModel.Type.Exercise:
        return exerciseView;
      case CoffeeModel.Type.Tutorial:
        return tutorialView;
      case CoffeeModel.Type.FileDiff:
        return fileDiffView;
      case CoffeeModel.Type.AutomaticImport:
        return automaticImportView;
      case CoffeeModel.Type.CheckIfFilesExist:
        return checkIfFilesExistView;
      case CoffeeModel.Type.CleanExerciseFolder:
        return cleanExerciseFolderView;
      case CoffeeModel.Type.OpenFile:
        return openFileView;
      case CoffeeModel.Type.TerminalCommands:
        return terminalCommandsView;
      case CoffeeModel.Type.Html:
        return htmlView;
      case CoffeeModel.Type.Image:
        return imageView;
      case CoffeeModel.Type.CommandButton:
        return commandButtonView;
      case CoffeeModel.Type.Hint:
        return hintView;

      default:
        this.logger.warn("Can't find registered ui schema for type " + type);
        return undefined;
    }
  }

  getChildrenMapping(): Map<string, TreeEditor.ChildrenDescriptor[]> {
    return CoffeeModel.childrenMapping;
  }

  getNameForType(type: string): string {
    return CoffeeModel.Type.name(type);
  }
}
