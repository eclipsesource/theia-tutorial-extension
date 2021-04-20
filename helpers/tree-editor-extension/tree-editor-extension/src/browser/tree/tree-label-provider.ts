import { LabelProviderContribution } from '@theia/core/lib/browser';
import { injectable } from 'inversify';
import { TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';

import { CoffeeModel } from './tree-model';
import { TreeEditorWidget } from './tree-editor-widget';

const DEFAULT_COLOR = 'black';

const ICON_CLASSES: Map<string, string> = new Map([
  [CoffeeModel.Type.Tutorial, ' fa-book ' + DEFAULT_COLOR],
  [CoffeeModel.Type.Exercise, 'fa-file-text ' + DEFAULT_COLOR],
]);

/* Icon for unknown types */
const UNKNOWN_ICON = 'fa-question-circle ' + DEFAULT_COLOR;

@injectable()
export class TreeLabelProvider implements LabelProviderContribution {
  public canHandle(element: object): number {
    if (
      (TreeEditor.Node.is(element) || TreeEditor.CommandIconInfo.is(element)) &&
      element.editorId === TreeEditorWidget.WIDGET_ID
    ) {
      return 1000;
    }
    return 0;
  }

  public getIcon(element: object): string | undefined {
    let iconClass: string | undefined;
    if (TreeEditor.CommandIconInfo.is(element)) {
      iconClass = ICON_CLASSES.get(element.type);
    } else if (TreeEditor.Node.is(element)) {
      iconClass = ICON_CLASSES.get(element.jsonforms.type);
    }

    return iconClass ? 'fa ' + iconClass : 'fa ' + UNKNOWN_ICON;
  }

  public getName(element: object): string | undefined {
    const data = TreeEditor.Node.is(element) ? element.jsonforms.data : element;
    if (data.title) {
      return data.title;
    } else if (data.typeId) {
      return this.getTypeName(data.typeId);
    }

    return undefined;
  }

  private getTypeName(typeId: string): string {
    return CoffeeModel.Type.name(typeId);
  }
}
