import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { injectable, postConstruct } from 'inversify';
import { DetailFormWidget } from '@eclipse-emfcloud/theia-tree-editor';
import {
  FilePickerControl,
  // ImagePickerControl,
  // imageTester,
  filePickerControlTester,
} from './FilePickerControl';
import { JsonFormsDispatch, JsonFormsReduxContext } from '@jsonforms/react';
import { Provider } from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { materialArrayLayoutTester } from './MaterialArrayLayoutRenderer';

import MaterialArrayLayoutRenderer from './MaterialArrayLayoutRenderer';
@injectable()
export class TutorialDetailFormWidget extends DetailFormWidget {
  // XXX Replace renderers in Redux store manually as they can't be customized at the current time.
  // This is very hacky as the 'store' field is private and the Redux store is not intended to be modified like this.
  // This should be removed once https://github.com/eclipse-emfcloud/theia-tree-editor/issues/20 is implemented

  //@ts-ignore
  protected renderForms(): void {
    //@ts-ignore
    if (this.selectedNode) {
      ReactDOM.render(
        <div className='jsonforms-container'>
          {/* @ts-ignore */}
          <Provider store={this.store}>
            <JsonFormsReduxContext>
              {/* @ts-ignore */}
              <JsonFormsDispatch key={this.selectedNode.id} />
            </JsonFormsReduxContext>
          </Provider>
        </div>,
        this.node
      );
    } else {
      this.renderEmptyForms();
    }
  }

  @postConstruct()
  customizeRenderers() {
    const renderers = [
      ...materialRenderers, // or vanillaRenderers from '@jsonforms/vanilla-renderers'
      { tester: filePickerControlTester, renderer: FilePickerControl },
      {
        tester: materialArrayLayoutTester,
        renderer: MaterialArrayLayoutRenderer,
      },
      // { tester: imageTester, renderer: ImagePickerControl },
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
