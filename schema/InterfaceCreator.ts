import {
  compileFromFile,
  compile,
  JSONSchema,
} from 'json-schema-to-typescript';
import * as fs from 'fs';

export const tutorialSchema: JSONSchema = {
  definitions: {
    tutorial: {
      type: 'object',
      $id: '#tutorial',
      required: ['title', 'description', 'tutorialFolder'],
      additionalProperties: false,
      properties: {
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
      $id: '#exercise',
      additionalProperties: false,
      required: ['title', 'description'],
      properties: {
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
                oneOf: [
                  {
                    $ref: '#/definitions/checkIfFilesExist',
                  },
                  {
                    $ref: '#/definitions/terminalCommands',
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
          $id: '#buildExercise',
          items: {
            $ref: '#/definitions/terminalCommands',
          },
        },
        cleanState: {
          type: 'array',
          $id: '#cleanState',
          items: {
            type: 'object',
            oneOf: [
              {
                $ref: '#/definitions/terminalCommands',
              },
              {
                $ref: '#/definitions/cleanExerciseFolder',
              },
            ],
          },
        },
        test: {
          type: 'array',
          $id: '#test',
          items: {
            type: 'object',
            properties: {
              testName: {
                type: 'string',
              },
              fileName: {
                type: 'string',
              },
              solution: {
                type: 'string',
              },
              command: {
                type: 'object',
                oneOf: [
                  {
                    $ref: '#/definitions/checkIfFilesExist',
                  },
                  {
                    $ref: '#/definitions/terminalCommands',
                  },
                ],
              },
            },
            required: ['testName', 'command'],
            additionalProperties: false,
          },
        },
        solve: {
          type: 'array',
          $id: '#solve',
          items: {
            $ref: '#/definitions/terminalCommands',
          },
        },
        content: {
          type: 'array',
          items: {
            $ref: '#/definitions/instruction',
          },
        },
      },
    },
    command: {
      type: 'object',
      $id: '#command',
      properties: {},
      oneOf: [
        {
          $ref: '#/definitions/checkIfFilesExist',
        },
        {
          $ref: '#/definitions/terminalCommands',
        },
        {
          $ref: '#/definitions/openFile',
        },
        {
          $ref: '#/definitions/automaticImport',
        },
        {
          $ref: '#/definitions/fileDiff',
        },
        {
          $ref: '#/definitions/cleanExerciseFolder',
        },
      ],
    },
    fileDiff: {
      type: 'object',
      $id: '#fileDiff',
      properties: {
        fileDiff: {
          type: 'object',
          properties: {
            fileName: {
              type: 'string',
            },
            solution: {
              type: 'string',
            },
          },
        },
      },
      required: ['fileDiff'],
    },
    automaticImport: {
      type: 'object',
      $id: '#automaticImport',
      properties: {
        automaticImport: {
          type: 'object',
          properties: {
            imports: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            path: {
              type: 'string',
            },
          },
          required: ['imports', 'path'],
        },
      },
      required: ['automaticImport'],
    },
    openFile: {
      type: 'object',
      $id: '#openFile',
      properties: {
        openFile: {
          type: 'string',
        },
      },
      required: ['openFile'],
    },
    checkIfFilesExist: {
      type: 'object',
      $id: '#checkIfFilesExist',
      properties: {
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
      $id: '#terminalCommands',
      properties: {
        terminalCommands: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
      required: ['terminalCommands'],
    },
    cleanExerciseFolder: {
      type: 'object',
      $id: '#cleanExerciseFolder',
      properties: {
        cleanExerciseFolder: {
          type: 'boolean',
        },
      },
      additionalProperties: false,
      required: ['cleanExerciseFolder'],
    },
    instruction: {
      type: 'object',
      $id: '#instruction',
      properties: {},
      oneOf: [
        {
          $ref: '#/definitions/html',
        },
        {
          $ref: '#/definitions/image',
        },
        {
          $ref: '#/definitions/hint',
        },
        {
          $ref: '#/definitions/commandButton',
        },
      ],
    },
    html: {
      type: 'object',
      $id: '#html',
      properties: {
        html: {
          type: 'string',
        },
      },
      additionalProperties: false,
      required: ['html'],
    },
    image: {
      type: 'object',
      $id: '#image',
      properties: {
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
      $id: '#hint',
      properties: {
        hint: {
          type: 'object',
          properties: {
            text: {
              type: 'string',
            },
            content: {
              type: 'array',
              items: {
                type: 'object',
                properties: {},
                oneOf: [
                  {
                    $ref: '#/definitions/html',
                  },
                  {
                    $ref: '#/definitions/image',
                  },
                  {
                    $ref: '#/definitions/commandButton',
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
      $id: '#commandButton',
      properties: {
        button: {
          type: 'object',
          properties: {
            text: {
              type: 'string',
            },
            commands: {
              type: 'array',
              items: {
                type: 'object',
                properties: {},
                oneOf: [
                  {
                    $ref: '#/definitions/openFile',
                  },
                  {
                    $ref: '#/definitions/automaticImport',
                  },
                  {
                    $ref: '#/definitions/fileDiff',
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
// compile from file
compileFromFile('tutorial.json')
  .then(ts => fs.writeFileSync('tutorial.d.ts', ts));

// compile(tutorialSchema, 'mySchema').then((ts) =>
//   fs.writeFileSync('tutorial.d.ts', ts)
// );
