'use strict';
/* See https://jsonforms.io for more information on how to configure data and ui schemas. */
Object.defineProperty(exports, '__esModule', { value: true });
exports.tutorialSchema = exports.exerciseView = exports.commandButtonView = exports.hintView = exports.imageView = exports.htmlView = exports.cleanExerciseFolderView = exports.terminalCommandsView = exports.checkIfFilesExistView = exports.openFileView = exports.automaticImportView = exports.fileDiffView = exports.tutorialView = void 0;
exports.tutorialView = {
  type: 'Group',
  label: 'Tutorial',
  elements: [
    {
      type: 'Control',
      label: 'Title',
      scope: '#/properties/title',
    },
    {
      type: 'Control',
      label: 'Description',
      scope: '#/properties/description',
    },
    {
      type: 'Control',
      label: 'Tutorial Folder',
      scope: '#/properties/tutorialFolder',
    },
  ],
};
exports.fileDiffView = {
  type: 'Group',
  label: 'File Difference',
  elements: [
    {
      type: 'Control',
      label: 'File Name',
      scope: '#/properties/fileDiff/properties/fileName',
    },
    {
      type: 'Control',
      label: 'Solution',
      scope: '#/properties/fileDiff/properties/solution',
    },
  ],
};
exports.automaticImportView = {
  type: 'Group',
  label: 'Automatic Import',
  elements: [
    {
      type: 'Control',
      label: 'Imports',
      scope: '#/properties/automaticImport/properties/imports',
    },
    {
      type: 'Control',
      label: 'Path',
      scope: '#/properties/automaticImport/properties/path',
    },
  ],
};
exports.openFileView = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      label: 'Open File',
      scope: '#/properties/openFile',
    },
  ],
};
exports.checkIfFilesExistView = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      label: 'Check if file exist',
      scope: '#/properties/checkIfFilesExist',
    },
  ],
};
exports.terminalCommandsView = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      label: 'Terminal Command',
      scope: '#/properties/terminalCommands',
    },
  ],
};
exports.cleanExerciseFolderView = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      label: 'Clean Exercise Folder',
      scope: '#/properties/cleanExerciseFolder',
    },
  ],
};
exports.htmlView = {
  type: 'Group',
  label: 'Html',
  elements: [
    {
      type: 'Control',
      label: 'Html',
      scope: '#/properties/html',
    },
  ],
};
exports.imageView = {
  type: 'Group',
  label: 'Image',
  elements: [
    {
      type: 'Control',
      label: 'Src',
      scope: '#/properties/image/properties/src',
    },
    {
      type: 'Control',
      label: 'Description',
      scope: '#/properties/image/properties/description',
    },
    {
      type: 'Control',
      label: 'Width',
      scope: '#/properties/image/properties/width',
    },
  ],
};
exports.hintView = {
  type: 'Group',
  label: 'Hint',
  elements: [
    {
      type: 'Control',
      label: 'Hint Text',
      scope: '#/properties/hint/properties/text',
    },
    // {
    //   'type': 'Control',
    //   'label': 'Content',
    //   'scope': '#/properties/hint/properties/content'
    // }
  ],
};
exports.commandButtonView = {
  type: 'Group',
  label: 'Command Button',
  elements: [
    {
      type: 'Control',
      label: 'Button Text',
      scope: '#/properties/button/properties/text',
    },
    {
      type: 'Control',
      label: 'Commands',
      scope: '#/properties/button/properties/commands',
    },
  ],
};
exports.exerciseView = {
  type: 'Group',
  label: 'Exercise',
  elements: [
    {
      type: 'Control',
      label: 'Title',
      scope: '#/properties/title',
    },
    {
      type: 'Control',
      label: 'Description',
      scope: '#/properties/description',
    },
    {
      type: 'Control',
      label: 'Add Contents',
      scope: '#/properties/content',
      options: {
        elementLabelProp: 'typeId',
      },
    },
    {
      type: 'Control',
      label: 'Add Building Exercise Commands',
      scope: '#/properties/buildExercise',
    },
    {
      type: 'Control',
      label: 'Add Cleaning State Commands',
      scope: '#/properties/cleanState',
    },
    {
      type: 'Control',
      label: 'Add Checking Start State Commands',
      scope: '#/properties/checkStartState',
      options: {
        detail: {
          type: 'VerticalLayout',
          elements: [
            {
              type: 'Control',
              label: 'Test Name',
              scope: '#/properties/testName',
            },
            {
              type: 'Label',
              text: 'Commands',
            },
            {
              type: 'Control',
              label: 'Commands',
              scope: '#/properties/command',
            },
          ],
        },
      },
    },
    {
      type: 'Control',
      label: 'Add Tests',
      scope: '#/properties/test',
      options: {
        elementLabelProp: 'testName',
        detail: {
          type: 'VerticalLayout',
          label: 'Tests',
          elements: [
            {
              type: 'Control',
              label: 'File Name',
              scope: '#/properties/fileName',
            },
            {
              type: 'Control',
              label: 'Solution File Name',
              scope: '#/properties/solution',
            },
            {
              type: 'Control',
              label: 'Add Test Commands',
              scope: '#/properties/tests',
              options: {
                detail: {
                  type: 'VerticalLayout',
                  label: 'Add Test Commands',
                  elements: [
                    {
                      type: 'Control',
                      label: 'Test Name',
                      scope: '#/properties/testName',
                    },
                    {
                      type: 'Label',
                      text: 'Commands',
                    },
                    {
                      type: 'Control',
                      label: 'Commands',
                      scope: '#/properties/command',
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    },
    {
      type: 'Control',
      label: 'Add Solution Methods For Tests',
      scope: '#/properties/solve',
    },
  ],
};
exports.tutorialSchema = {
  definitions: {
    tutorial: {
      type: 'object',
      required: ['title', 'description', 'tutorialFolder'],
      additionalProperties: false,
      properties: {
        typeId: {
          const: '#tutorial',
        },
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        tutorialFolder: {
          type: 'string',
        },
        exercises: {
          type: 'array',
          items: {
            $ref: '#/definitions/exercise',
          },
        },
      },
    },
    exercise: {
      type: 'object',
      additionalProperties: false,
      required: ['title', 'description'],
      properties: {
        typeId: {
          const: '#exercise',
        },
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        checkStartState: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              testName: {
                type: 'string',
              },
              command: {
                type: 'object',
                label: 'Command',
                properties: {
                  typeId: {
                    const: '#command',
                  },
                },
                oneOf: [
                  {
                    title: 'Terminal Commands',
                    $ref: '#/definitions/terminalCommands',
                  },
                  {
                    title: 'Check If Files Exist',
                    $ref: '#/definitions/checkIfFilesExist',
                  },
                ],
              },
            },
            required: ['testName', 'command'],
            additionalProperties: false,
          },
        },
        buildExercise: {
          type: 'array',
          items: {
            title: 'Terminal Commands',
            $ref: '#/definitions/terminalCommands',
          },
        },
        cleanState: {
          type: 'array',
          items: {
            type: 'object',
            label: 'Command',
            properties: {
              typeId: {
                const: '#command',
              },
            },
            oneOf: [
              {
                title: 'Terminal Commands',
                $ref: '#/definitions/terminalCommands',
              },
              {
                title: 'Clean Exercise Folder',
                $ref: '#/definitions/cleanExerciseFolder',
              },
            ],
          },
        },
        test: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              fileName: {
                type: 'string',
              },
              solution: {
                type: 'string',
              },
              tests: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    testName: {
                      type: 'string',
                    },
                    command: {
                      type: 'object',
                      label: 'Command',
                      properties: {
                        typeId: {
                          const: '#command',
                        },
                      },
                      oneOf: [
                        {
                          title: 'Terminal Commands',
                          $ref: '#/definitions/terminalCommands',
                        },
                        {
                          title: 'Check If Files Exist',
                          $ref: '#/definitions/checkIfFilesExist',
                        },
                      ],
                    },
                  },
                  required: ['testName', 'command'],
                },
              },
            },
            additionalProperties: false,
            required: ['tests'],
          },
        },
        solve: {
          type: 'array',
          items: {
            title: 'Terminal Commands',
            $ref: '#/definitions/terminalCommands',
          },
        },
        content: {
          type: 'array',
          items: {
            oneOf: [
              {
                title: 'Html',
                $ref: '#/definitions/html',
              },
              {
                title: 'Command Button',
                $ref: '#/definitions/commandButton',
              },
              {
                title: 'Image',
                $ref: '#/definitions/image',
              },
              {
                title: 'Hint',
                $ref: '#/definitions/hint',
              },
            ],
          },
        },
      },
    },
    fileDiff: {
      type: 'object',
      properties: {
        typeId: {
          const: '#fileDiff',
        },
        fileDiff: {
          type: 'object',
          properties: {
            fileName: {
              title: 'File Path',
              type: 'string',
            },
            solution: {
              title: 'Solution File Path',
              type: 'string',
            },
          },
        },
      },
      required: ['fileDiff'],
    },
    automaticImport: {
      type: 'object',
      properties: {
        typeId: {
          const: '#automaticImport',
        },
        automaticImport: {
          type: 'object',
          properties: {
            path: {
              type: 'string',
            },
            imports: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
          required: ['imports', 'path'],
        },
      },
      required: ['automaticImport'],
    },
    openFile: {
      type: 'object',
      properties: {
        typeId: {
          const: '#openFile',
        },
        openFile: {
          type: 'string',
        },
      },
      required: ['openFile'],
    },
    checkIfFilesExist: {
      type: 'object',
      properties: {
        typeId: {
          const: '#checkIfFilesExist',
        },
        checkIfFilesExist: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
      required: ['checkIfFilesExist'],
    },
    terminalCommands: {
      type: 'object',
      properties: {
        typeId: {
          const: '#terminalCommands',
        },
        terminalCommands: {
          type: 'array',
          items: {
            label: 'Command',
            type: 'string',
          },
        },
      },
      additionalProperties: false,
      required: ['terminalCommands'],
    },
    cleanExerciseFolder: {
      type: 'object',
      properties: {
        typeId: {
          const: '#cleanExerciseFolder',
        },
        cleanExerciseFolder: {
          type: 'boolean',
        },
      },
      additionalProperties: false,
      required: ['cleanExerciseFolder'],
    },
    instruction: {
      type: 'object',
      properties: {
        typeId: {
          const: '#instruction',
        },
      },
      oneOf: [
        {
          title: 'Html',
          $ref: '#/definitions/html',
        },
        {
          title: 'Command Button',
          $ref: '#/definitions/commandButton',
        },
        {
          title: 'Image',
          $ref: '#/definitions/image',
        },
        {
          title: 'Hint',
          $ref: '#/definitions/hint',
        },
      ],
    },
    html: {
      type: 'object',
      properties: {
        typeId: {
          const: 'Html',
        },
        html: {
          type: 'string',
        },
      },
      additionalProperties: false,
      required: ['html'],
    },
    image: {
      type: 'object',
      properties: {
        typeId: {
          const: 'Image',
        },
        image: {
          type: 'object',
          properties: {
            src: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            width: {
              type: 'string',
              enum: [
                '10%',
                '20%',
                '30%',
                '40%',
                '50%',
                '60%',
                '70%',
                '80%',
                '90%',
                '100%',
              ],
            },
          },
          additionalProperties: false,
          required: ['src'],
        },
      },
      required: ['image'],
      additionalProperties: false,
    },
    hint: {
      type: 'object',
      properties: {
        typeId: {
          const: 'Hint',
        },
        hint: {
          type: 'object',
          properties: {
            text: {
              type: 'string',
              title: 'Hint Text',
            },
            content: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  typeId: {
                    const: '#content',
                  },
                },
                oneOf: [
                  {
                    title: 'Html',
                    $ref: '#/definitions/html',
                  },
                  {
                    title: 'Command Button',
                    $ref: '#/definitions/commandButton',
                  },
                  {
                    title: 'Image',
                    $ref: '#/definitions/image',
                  },
                ],
              },
            },
          },
          additionalProperties: false,
        },
      },
      required: ['hint'],
      additionalProperties: false,
    },
    commandButton: {
      type: 'object',
      properties: {
        typeId: {
          const: 'Command Button',
        },
        button: {
          type: 'object',
          properties: {
            text: {
              type: 'string',
              title: 'Button Text',
            },
            commands: {
              type: 'array',
              items: {
                type: 'object',
                label: 'Command',
                properties: {
                  typeId: {
                    const: '#command',
                  },
                },
                oneOf: [
                  {
                    title: 'Terminal Commands',
                    $ref: '#/definitions/terminalCommands',
                  },
                  {
                    title: 'File Difference',
                    $ref: '#/definitions/fileDiff',
                  },
                  {
                    title: 'Open File',
                    $ref: '#/definitions/openFile',
                  },
                  {
                    title: 'Automatic Import',
                    $ref: '#/definitions/automaticImport',
                  },
                ],
              },
            },
          },
          additionalProperties: false,
        },
      },
      required: ['button'],
      additionalProperties: false,
    },
  },
};
//# sourceMappingURL=tree-schema.js.map
