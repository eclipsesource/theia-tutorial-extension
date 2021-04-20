'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CoffeeModel = void 0;
var CoffeeModel;
(function (CoffeeModel) {
  let Type;
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
    Type.Content = '#content';
    function name(type) {
      return type;
    }
    Type.name = name;
  })((Type = CoffeeModel.Type || (CoffeeModel.Type = {})));
  const components = [Type.Exercise];
  // const instructionComponents = [
  //     Type.Html,
  //     Type.Image,
  //     Type.Hint,
  //     Type.CommandButton
  // ];
  /** Maps types to their creatable children */
  CoffeeModel.childrenMapping = new Map([
    [
      Type.Tutorial,
      [
        {
          property: 'exercises',
          children: components,
        },
      ],
    ],
    // [
    //     Type.Exercise, [
    //         {
    //             property: 'content',
    //             children: [Type.Content]
    //         },
    //     ]
    // ],
    // [
    //     Type.Hint, [
    //         {
    //             property: 'content',
    //             children: [Type.Content]
    //         }
    //     ]
    // ],
    // [
    //     Type.Content, [
    //         {
    //             property: 'contents',
    //             children: instructionComponents
    //         }
    //     ]
    // ]
  ]);
})((CoffeeModel = exports.CoffeeModel || (exports.CoffeeModel = {})));
//# sourceMappingURL=tree-model.js.map
