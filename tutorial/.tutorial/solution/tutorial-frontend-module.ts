import { TutorialCommandContribution, TutorialMenuContribution } from './tutorial-contribution';
import { CommandContribution, MenuContribution} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    bind(CommandContribution).to(TutorialCommandContribution);
    bind(MenuContribution).to(TutorialMenuContribution);
});

