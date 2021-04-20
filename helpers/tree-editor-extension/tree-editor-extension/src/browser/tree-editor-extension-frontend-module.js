'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
require('@eclipse-emfcloud/theia-tree-editor/style/index.css');
require('@eclipse-emfcloud/theia-tree-editor/style/forms.css');
require('../../src/browser/style/editor.css');
const core_1 = require('@theia/core');
const browser_1 = require('@theia/core/lib/browser');
const uri_1 = require('@theia/core/lib/common/uri');
const inversify_1 = require('inversify');
const theia_tree_editor_1 = require('@eclipse-emfcloud/theia-tree-editor');
const tree_contribution_1 = require('./tree-contribution');
const tree_model_service_1 = require('./tree/tree-model-service');
const tree_node_factory_1 = require('./tree/tree-node-factory');
const tree_editor_widget_1 = require('./tree/tree-editor-widget');
const tree_label_provider_1 = require('./tree/tree-label-provider');
const tree_label_provider_contribution_1 = require('./tree-label-provider-contribution');
const example_file_command_1 = require('./example-file/example-file-command');
const example_file_contribution_1 = require('./example-file/example-file-contribution');
const tutorial_detail_form_widget_1 = require('./tree/tutorial-detail-form-widget');
exports.default = new inversify_1.ContainerModule((bind) => {
  // Bind Theia IDE contributions for the example file creation menu entry.
  bind(example_file_command_1.NewTreeExampleFileCommandHandler).toSelf();
  bind(core_1.CommandContribution).to(
    example_file_contribution_1.NewTreeExampleFileCommandContribution
  );
  bind(core_1.MenuContribution).to(
    example_file_contribution_1.NewTreeExampleFileMenuContribution
  );
  // Bind Theia IDE contributions for the tree editor.
  bind(browser_1.LabelProviderContribution).to(
    tree_label_provider_contribution_1.TreeLabelProviderContribution
  );
  bind(browser_1.OpenHandler).to(tree_contribution_1.TreeContribution);
  bind(core_1.MenuContribution).to(tree_contribution_1.TreeContribution);
  bind(core_1.CommandContribution).to(tree_contribution_1.TreeContribution);
  bind(browser_1.LabelProviderContribution).to(
    tree_label_provider_1.TreeLabelProvider
  );
  // bind services to themselves because we use them outside of the editor widget, too.
  bind(tree_model_service_1.TreeModelService).toSelf().inSingletonScope();
  bind(tree_label_provider_1.TreeLabelProvider).toSelf().inSingletonScope();
  bind(browser_1.WidgetFactory).toDynamicValue((context) => ({
    id: tree_editor_widget_1.TreeEditorWidget.WIDGET_ID,
    createWidget: (options) => {
      const treeContainer = theia_tree_editor_1.createBasicTreeContainer(
        context.container,
        tree_editor_widget_1.TreeEditorWidget,
        tree_model_service_1.TreeModelService,
        tree_node_factory_1.TreeNodeFactory
      );
      //@ts-ignore
      treeContainer
        .rebind(theia_tree_editor_1.DetailFormWidget)
        .to(tutorial_detail_form_widget_1.TutorialDetailFormWidget);
      // Bind options.
      const uri = new uri_1.default(options.uri);
      treeContainer
        .bind(theia_tree_editor_1.NavigatableTreeEditorOptions)
        .toConstantValue({ uri });
      return treeContainer.get(tree_editor_widget_1.TreeEditorWidget);
    },
  }));
});
//# sourceMappingURL=tree-editor-extension-frontend-module.js.map
