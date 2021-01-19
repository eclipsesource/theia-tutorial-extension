import { Title, Widget } from '@theia/core/lib/browser';
import { DefaultResourceProvider, ILogger } from '@theia/core/lib/common';
import { EditorPreferences } from '@theia/editor/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { MasterTreeWidget, DetailFormWidget, NavigatableTreeEditorOptions, TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';
import { ResourceTreeEditorWidget } from '@eclipse-emfcloud/theia-tree-editor';
export declare class TreeEditorWidget extends ResourceTreeEditorWidget {
    readonly treeWidget: MasterTreeWidget;
    readonly formWidget: DetailFormWidget;
    readonly workspaceService: WorkspaceService;
    readonly logger: ILogger;
    protected readonly options: NavigatableTreeEditorOptions;
    protected provider: DefaultResourceProvider;
    protected readonly nodeFactory: TreeEditor.NodeFactory;
    protected readonly editorPreferences: EditorPreferences;
    constructor(treeWidget: MasterTreeWidget, formWidget: DetailFormWidget, workspaceService: WorkspaceService, logger: ILogger, options: NavigatableTreeEditorOptions, provider: DefaultResourceProvider, nodeFactory: TreeEditor.NodeFactory, editorPreferences: EditorPreferences);
    protected getTypeProperty(): string;
    protected configureTitle(title: Title<Widget>): void;
}
export declare namespace TreeEditorWidget {
    const WIDGET_ID = "tree-editor-extension-tree-editor";
}
//# sourceMappingURL=tree-editor-widget.d.ts.map