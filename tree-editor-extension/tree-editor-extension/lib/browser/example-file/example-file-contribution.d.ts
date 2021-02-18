import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, SelectionService } from '@theia/core/lib/common';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { NewTreeExampleFileCommandHandler } from './example-file-command';
export declare class NewTreeExampleFileCommandContribution implements CommandContribution {
    private readonly selectionService;
    private readonly workspaceService;
    private readonly newExampleFileHandler;
    constructor(selectionService: SelectionService, workspaceService: WorkspaceService, newExampleFileHandler: NewTreeExampleFileCommandHandler);
    registerCommands(registry: CommandRegistry): void;
}
export declare class NewTreeExampleFileMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=example-file-contribution.d.ts.map