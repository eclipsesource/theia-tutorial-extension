"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeModel = void 0;
var CoffeeModel;
(function (CoffeeModel) {
    var Type;
    (function (Type) {
        Type.Exercise = '#exercise';
        Type.Tutorial = '#tutorial';
        Type.Command = '#command';
        Type.FileDiff = '#fileDiff';
        Type.AutomaticImport = '#automaticImport';
        Type.OpenFile = '#openFile';
        Type.CheckIfFilesExist = '#checkIfFilesExist';
        Type.TerminalCommands = '#terminalCommands';
        Type.CleanExerciseFolder = '#cleanExerciseFolder';
        Type.Instruction = '#instruction';
        Type.Html = '#html';
        Type.Image = '#image';
        Type.Hint = '#hint';
        Type.CommandButton = '#commandButton';
        function name(type) {
            return type;
        }
        Type.name = name;
    })(Type = CoffeeModel.Type || (CoffeeModel.Type = {}));
    var components = [
        Type.Tutorial,
        Type.Exercise,
        Type.Command,
        Type.FileDiff,
        Type.AutomaticImport,
        Type.OpenFile,
        Type.CheckIfFilesExist,
        Type.TerminalCommands,
        Type.CleanExerciseFolder,
        Type.Instruction,
        Type.Html,
        Type.Image,
        Type.Hint,
        Type.CommandButton
    ];
    /** Maps types to their creatable children */
    CoffeeModel.childrenMapping = new Map([
        [
            Type.Tutorial, [
                {
                    property: 'children',
                    children: components
                }
            ]
        ],
        [
            Type.Exercise, [
                {
                    property: 'children',
                    children: components
                }
            ]
        ],
        [
            Type.Instruction, [
                {
                    property: 'children',
                    children: components
                }
            ]
        ],
        [
            Type.Command, [
                {
                    property: 'children',
                    children: components
                }
            ]
        ],
    ]);
})(CoffeeModel = exports.CoffeeModel || (exports.CoffeeModel = {}));
//# sourceMappingURL=tree-model.js.map