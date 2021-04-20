'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.TutorialDetailFormWidget = void 0;
const material_renderers_1 = require('@jsonforms/material-renderers');
const inversify_1 = require('inversify');
const theia_tree_editor_1 = require('@eclipse-emfcloud/theia-tree-editor');
const FilePickerControl_1 = require('./FilePickerControl');
const react_1 = require('@jsonforms/react');
const react_redux_1 = require('react-redux');
const React = require('react');
const ReactDOM = require('react-dom');
const MaterialArrayLayoutRenderer_1 = require('./MaterialArrayLayoutRenderer');
const MaterialArrayLayoutRenderer_2 = require('./MaterialArrayLayoutRenderer');
let TutorialDetailFormWidget = class TutorialDetailFormWidget extends theia_tree_editor_1.DetailFormWidget {
  // XXX Replace renderers in Redux store manually as they can't be customized at the current time.
  // This is very hacky as the 'store' field is private and the Redux store is not intended to be modified like this.
  // This should be removed once https://github.com/eclipse-emfcloud/theia-tree-editor/issues/20 is implemented
  //@ts-ignore
  renderForms() {
    //@ts-ignore
    if (this.selectedNode) {
      ReactDOM.render(
        <div className='jsonforms-container'>
          {/* @ts-ignore */}
          <react_redux_1.Provider store={this.store}>
            <react_1.JsonFormsReduxContext>
              {/* @ts-ignore */}
              <react_1.JsonFormsDispatch key={this.selectedNode.id} />
            </react_1.JsonFormsReduxContext>
          </react_redux_1.Provider>
        </div>,
        this.node
      );
    } else {
      this.renderEmptyForms();
    }
  }
  customizeRenderers() {
    const renderers = [
      ...material_renderers_1.materialRenderers,
      {
        tester: FilePickerControl_1.filePickerControlTester,
        renderer: FilePickerControl_1.FilePickerControl,
      },
      {
        tester: MaterialArrayLayoutRenderer_1.materialArrayLayoutTester,
        renderer: MaterialArrayLayoutRenderer_2.default,
      },
      // { tester: imageTester, renderer: ImagePickerControl },
    ];
    const cells = [
      ...material_renderers_1.materialCells, // or vanillaCells from '@jsonforms/vanilla-renderers'
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
};
__decorate(
  [inversify_1.postConstruct()],
  TutorialDetailFormWidget.prototype,
  'customizeRenderers',
  null
);
TutorialDetailFormWidget = __decorate(
  [inversify_1.injectable()],
  TutorialDetailFormWidget
);
exports.TutorialDetailFormWidget = TutorialDetailFormWidget;
//# sourceMappingURL=tutorial-detail-form-widget.js.map
