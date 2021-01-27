import { ILogger } from '@theia/core';
import { inject, injectable } from 'inversify';
import { TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';
import { v4 } from 'uuid';

import { CoffeeModel } from './tree-model';
import { TreeEditorWidget } from './tree-editor-widget';
import { TreeLabelProvider } from './tree-label-provider';

@injectable()
export class TreeNodeFactory implements TreeEditor.NodeFactory {

    constructor(
        @inject(TreeLabelProvider) private readonly labelProvider: TreeLabelProvider,
        @inject(ILogger) private readonly logger: ILogger) {
    }

    mapDataToNodes(treeData: TreeEditor.TreeData): TreeEditor.Node[] {
        const node = this.mapData(treeData.data);
        if (node) {
            return [node];
        }
        return [];
    }

    mapData(data: any, parent?: TreeEditor.Node, property?: string, indexOrKey?: number | string): TreeEditor.Node {
        if (!data) {
            this.logger.warn('mapData called without data');
        }

        const node: TreeEditor.Node = {
            ...this.defaultNode(),
            editorId: TreeEditorWidget.WIDGET_ID,
            name: this.labelProvider.getName(data)!,
            parent: parent,
            jsonforms: {
                type: this.getTypeId(data),
                data: data,
                property: property!,
                index: typeof indexOrKey === 'number' ? indexOrKey.toFixed(0) : indexOrKey
            }
        };

        console.log('node', node);
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

        if (data.content) {
            this.mapCustomData(data.content, node, 'content');
        }

        if (data.contents) {
            this.mapCustomData(data.contents, node, 'contents');
        }

        return node;
    }

    mapCustomData(data: Array<any>, node: TreeEditor.Node, label: string): void{
        data.forEach((element, idx) => {
            this.mapData(element, node, label, idx);
        });
    }

    hasCreatableChildren(node: TreeEditor.Node): boolean {
        return node ? CoffeeModel.childrenMapping.get(node.jsonforms.type) !== undefined : false;
    }

    protected defaultNode(): Omit<TreeEditor.Node, 'editorId'> {
        return {
            id: v4(),
            expanded: false,
            selected: false,
            parent: undefined,
            children: [],
            decorationData: {},
            name: '',
            jsonforms: {
                type: '',
                property: '',
                data: undefined
            }
        };
    }

    /** Derives the type id from the given data. */
    protected getTypeId(data: any): string {
        return data && data.typeId || '';
    }

}
