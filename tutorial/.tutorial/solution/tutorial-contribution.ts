import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MessageService,  MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const TutorialCommand = {
    id: 'Tutorial.command',
    label: "Say Hello"
};

@injectable()
export class TutorialContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(TutorialCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}


@injectable()
export class TutorialMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: TutorialCommand.id,
            label: TutorialCommand.label
        });
    }
}