"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNodeFactory = void 0;
var core_1 = require("@theia/core");
var inversify_1 = require("inversify");
var uuid_1 = require("uuid");
var tree_model_1 = require("./tree-model");
var tree_editor_widget_1 = require("./tree-editor-widget");
var tree_label_provider_1 = require("./tree-label-provider");
var TreeNodeFactory = /** @class */ (function () {
    function TreeNodeFactory(labelProvider, logger) {
        this.labelProvider = labelProvider;
        this.logger = logger;
    }
    TreeNodeFactory.prototype.mapDataToNodes = function (treeData) {
        var node = this.mapData(treeData.data);
        if (node) {
            return [node];
        }
        return [];
    };
    TreeNodeFactory.prototype.mapData = function (data, parent, property, indexOrKey) {
        var _this = this;
        if (!data) {
            this.logger.warn('mapData called without data');
        }
        var node = __assign(__assign({}, this.defaultNode()), { editorId: tree_editor_widget_1.TreeEditorWidget.WIDGET_ID, name: this.labelProvider.getName(data), parent: parent, jsonforms: {
                type: this.getTypeId(data),
                data: data,
                property: property,
                index: typeof indexOrKey === 'number' ? indexOrKey.toFixed(0) : indexOrKey
            } });
        // containments
        if (parent) {
            parent.children.push(node);
            parent.expanded = true;
        }
        if (data.children) {
            var children = data.children;
            // component types
            children.forEach(function (element, idx) {
                _this.mapData(element, node, 'children', idx);
            });
        }
        return node;
    };
    TreeNodeFactory.prototype.hasCreatableChildren = function (node) {
        return node ? tree_model_1.CoffeeModel.childrenMapping.get(node.jsonforms.type) !== undefined : false;
    };
    TreeNodeFactory.prototype.defaultNode = function () {
        return {
            id: uuid_1.v4(),
            expanded: false,
            selected: false,
            parent: undefined,
            children: [],
            decorationData: {},
            name: '',
            jsonforms: {
                type: '',
                property: '',
                data: undefined
            }
        };
    };
    /** Derives the type id from the given data. */
    TreeNodeFactory.prototype.getTypeId = function (data) {
        return data && data.typeId || '';
    };
    TreeNodeFactory = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(tree_label_provider_1.TreeLabelProvider)),
        __param(1, inversify_1.inject(core_1.ILogger)),
        __metadata("design:paramtypes", [tree_label_provider_1.TreeLabelProvider, Object])
    ], TreeNodeFactory);
    return TreeNodeFactory;
}());
exports.TreeNodeFactory = TreeNodeFactory;
//# sourceMappingURL=tree-node-factory.js.map