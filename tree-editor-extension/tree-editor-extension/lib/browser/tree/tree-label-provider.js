"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeLabelProvider = void 0;
var inversify_1 = require("inversify");
var theia_tree_editor_1 = require("@eclipse-emfcloud/theia-tree-editor");
var tree_model_1 = require("./tree-model");
var tree_editor_widget_1 = require("./tree-editor-widget");
var DEFAULT_COLOR = 'black';
var ICON_CLASSES = new Map([
    [tree_model_1.CoffeeModel.Type.BrewingUnit, 'fa-fire ' + DEFAULT_COLOR],
    [tree_model_1.CoffeeModel.Type.ControlUnit, 'fa-server ' + DEFAULT_COLOR],
    [tree_model_1.CoffeeModel.Type.Dimension, 'fa-arrows-alt ' + DEFAULT_COLOR],
    [tree_model_1.CoffeeModel.Type.DripTray, 'fa-inbox ' + DEFAULT_COLOR],
    [tree_model_1.CoffeeModel.Type.Display, 'fa-tv ' + DEFAULT_COLOR],
    [tree_model_1.CoffeeModel.Type.Machine, 'fa-cogs ' + DEFAULT_COLOR],
    [tree_model_1.CoffeeModel.Type.MultiComponent, 'fa-cubes ' + DEFAULT_COLOR],
    [tree_model_1.CoffeeModel.Type.Processor, 'fa-microchip ' + DEFAULT_COLOR],
    [tree_model_1.CoffeeModel.Type.RAM, 'fa-memory ' + DEFAULT_COLOR],
    [tree_model_1.CoffeeModel.Type.WaterTank, 'fa-tint ' + DEFAULT_COLOR],
]);
/* Icon for unknown types */
var UNKNOWN_ICON = 'fa-question-circle ' + DEFAULT_COLOR;
var TreeLabelProvider = /** @class */ (function () {
    function TreeLabelProvider() {
    }
    TreeLabelProvider.prototype.canHandle = function (element) {
        if ((theia_tree_editor_1.TreeEditor.Node.is(element) || theia_tree_editor_1.TreeEditor.CommandIconInfo.is(element))
            && element.editorId === tree_editor_widget_1.TreeEditorWidget.WIDGET_ID) {
            return 1000;
        }
        return 0;
    };
    TreeLabelProvider.prototype.getIcon = function (element) {
        var iconClass;
        if (theia_tree_editor_1.TreeEditor.CommandIconInfo.is(element)) {
            iconClass = ICON_CLASSES.get(element.type);
        }
        else if (theia_tree_editor_1.TreeEditor.Node.is(element)) {
            iconClass = ICON_CLASSES.get(element.jsonforms.type);
        }
        return iconClass ? 'fa ' + iconClass : 'fa ' + UNKNOWN_ICON;
    };
    TreeLabelProvider.prototype.getName = function (element) {
        var data = theia_tree_editor_1.TreeEditor.Node.is(element) ? element.jsonforms.data : element;
        if (data.name) {
            return data.name;
        }
        else if (data.typeId) {
            return this.getTypeName(data.typeId);
        }
        return undefined;
    };
    TreeLabelProvider.prototype.getTypeName = function (typeId) {
        return tree_model_1.CoffeeModel.Type.name(typeId);
    };
    TreeLabelProvider = __decorate([
        inversify_1.injectable()
    ], TreeLabelProvider);
    return TreeLabelProvider;
}());
exports.TreeLabelProvider = TreeLabelProvider;
//# sourceMappingURL=tree-label-provider.js.map