import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { injectable, postConstruct } from "inversify";
import { DetailFormWidget } from "@eclipse-emfcloud/theia-tree-editor";
// import MyGroupRenderer, { myGroupTester } from "./MyGroup";
import FilePickerControl, { filePickerControlTester } from "./FilePickerControl";

import TabsControl, { tabsControlTester } from "./TabsControl";
@injectable()
export class TutorialDetailFormWidget extends DetailFormWidget {
  // XXX Replace renderers in Redux store manually as they can't be customized at the current time.
  // This is very hacky as the 'store' field is private and the Redux store is not intended to be modified like this.
  // This should be removed once https://github.com/eclipse-emfcloud/theia-tree-editor/issues/20 is implemented
  @postConstruct()
  customizeRenderers() {
    const renderers = [
      ...materialRenderers, // or vanillaRenderers from '@jsonforms/vanilla-renderers'
      // {
      //   tester: myGroupTester,
      //   renderer: MyGroupRenderer,
      // },
      { tester: filePickerControlTester, renderer: FilePickerControl },
      { tester: tabsControlTester, renderer: TabsControl },
    ];

    const cells = [
      ...materialCells, // or vanillaCells from '@jsonforms/vanilla-renderers'
      /*
          Place custom cells here, e.g.
          {
            tester: mytester,
            cell: mycell
          }
        */
    ];
    //@ts-ignore
    this.store.getState().jsonforms.renderers = renderers;
    //@ts-ignore
    this.store.getState().jsonforms.cells = cells;
  }
}
