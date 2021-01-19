"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeModel = void 0;
var CoffeeModel;
(function (CoffeeModel) {
    var Type;
    (function (Type) {
        Type.BrewingUnit = 'BrewingUnit';
        Type.ControlUnit = 'ControlUnit';
        Type.Dimension = 'Dimension';
        Type.DripTray = 'DripTray';
        Type.Display = 'Display';
        Type.Machine = 'Machine';
        Type.MultiComponent = 'MultiComponent';
        Type.Processor = 'Processor';
        Type.RAM = 'RAM';
        Type.WaterTank = 'WaterTank';
        function name(type) {
            return type;
        }
        Type.name = name;
    })(Type = CoffeeModel.Type || (CoffeeModel.Type = {}));
    var components = [
        Type.MultiComponent,
        Type.BrewingUnit,
        Type.ControlUnit,
        Type.DripTray,
        Type.WaterTank
    ];
    /** Maps types to their creatable children */
    CoffeeModel.childrenMapping = new Map([
        [
            Type.Machine, [
                {
                    property: 'children',
                    children: components
                }
            ]
        ],
        [
            Type.MultiComponent, [
                {
                    property: 'children',
                    children: components
                }
            ]
        ]
    ]);
})(CoffeeModel = exports.CoffeeModel || (exports.CoffeeModel = {}));
//# sourceMappingURL=tree-model.js.map