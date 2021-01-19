import { CommandRegistry, MenuModelRegistry } from '@theia/core';
import { ApplicationShell, NavigatableWidgetOptions, OpenerService, WidgetOpenerOptions } from '@theia/core/lib/browser';
import URI from '@theia/core/lib/common/uri';
import { BaseTreeEditorContribution, TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';
import { TreeLabelProvider } from './tree/tree-label-provider';
export declare class TreeContribution extends BaseTreeEditorContribution {
    protected shell: ApplicationShell;
    protected opener: OpenerService;
    constructor(modelService: TreeEditor.ModelService, labelProvider: TreeLabelProvider);
    readonly id = "tree-editor-extension-tree-editor";
    readonly label = "Theia Tree Editor - Tree";
    canHandle(uri: URI): number;
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
    protected createWidgetOptions(uri: URI, options?: WidgetOpenerOptions): NavigatableWidgetOptions;
    protected serializeUri(uri: URI): string;
}
//# sourceMappingURL=tree-contribution.d.ts.map