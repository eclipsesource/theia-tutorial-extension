/**
 * Generated using theia-extension-generator
 */
import { ContainerModule } from 'inversify';
import { TutorialContribution } from './tutorial-contribution';


export default new ContainerModule(bind => {

    // Replace this line with the desired binding, e.g. "bind(CommandContribution).to(TutorialContribution)
    bind(TutorialContribution).toSelf();
});
