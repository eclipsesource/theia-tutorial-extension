"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@eclipse-emfcloud/theia-tree-editor/style/index.css");
require("@eclipse-emfcloud/theia-tree-editor/style/forms.css");
require("../../src/browser/style/editor.css");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var uri_1 = require("@theia/core/lib/common/uri");
var inversify_1 = require("inversify");
var theia_tree_editor_1 = require("@eclipse-emfcloud/theia-tree-editor");
var tree_contribution_1 = require("./tree-contribution");
var tree_model_service_1 = require("./tree/tree-model-service");
var tree_node_factory_1 = require("./tree/tree-node-factory");
var tree_editor_widget_1 = require("./tree/tree-editor-widget");
var tree_label_provider_1 = require("./tree/tree-label-provider");
var tree_label_provider_contribution_1 = require("./tree-label-provider-contribution");
var example_file_command_1 = require("./example-file/example-file-command");
var example_file_contribution_1 = require("./example-file/example-file-contribution");
var tutorial_detail_form_widget_1 = require("./tree/tutorial-detail-form-widget");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // Bind Theia IDE contributions for the example file creation menu entry.
    bind(example_file_command_1.NewTreeExampleFileCommandHandler).toSelf();
    bind(core_1.CommandContribution).to(example_file_contribution_1.NewTreeExampleFileCommandContribution);
    bind(core_1.MenuContribution).to(example_file_contribution_1.NewTreeExampleFileMenuContribution);
    // Bind Theia IDE contributions for the tree editor.
    bind(browser_1.LabelProviderContribution).to(tree_label_provider_contribution_1.TreeLabelProviderContribution);
    bind(browser_1.OpenHandler).to(tree_contribution_1.TreeContribution);
    bind(core_1.MenuContribution).to(tree_contribution_1.TreeContribution);
    bind(core_1.CommandContribution).to(tree_contribution_1.TreeContribution);
    bind(browser_1.LabelProviderContribution).to(tree_label_provider_1.TreeLabelProvider);
    // bind services to themselves because we use them outside of the editor widget, too.
    bind(tree_model_service_1.TreeModelService).toSelf().inSingletonScope();
    bind(tree_label_provider_1.TreeLabelProvider).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: tree_editor_widget_1.TreeEditorWidget.WIDGET_ID,
        createWidget: function (options) {
            var treeContainer = theia_tree_editor_1.createBasicTreeContainter(context.container, tree_editor_widget_1.TreeEditorWidget, tree_model_service_1.TreeModelService, tree_node_factory_1.TreeNodeFactory);
            //@ts-ignore
            treeContainer.rebind(theia_tree_editor_1.DetailFormWidget).to(tutorial_detail_form_widget_1.TutorialDetailFormWidget);
            // Bind options.
            var uri = new uri_1.default(options.uri);
            treeContainer.bind(theia_tree_editor_1.NavigatableTreeEditorOptions).toConstantValue({ uri: uri });
            return treeContainer.get(tree_editor_widget_1.TreeEditorWidget);
        }
    }); });
});
//# sourceMappingURL=tree-editor-extension-frontend-module.js.map