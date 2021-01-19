"use strict";
/* See https://jsonforms.io for more information on how to configure data and ui schemas. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorialSchema = exports.exerciseView = exports.instructionView = exports.commandButtonView = exports.hintView = exports.imageView = exports.htmlView = exports.cleanExerciseFolderView = exports.terminalCommandsView = exports.checkIfFilesExistView = exports.openFileView = exports.automaticImportView = exports.fileDiffView = exports.commandView = exports.tutorialView = void 0;
exports.tutorialView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'Title',
            'scope': '#/properties/title'
        },
        {
            'type': 'Control',
            'label': 'Description',
            'scope': '#/properties/description'
        },
        {
            'type': 'Control',
            'label': 'Tutorial Folder',
            'scope': '#/properties/tutorialFolder'
        },
    ]
};
exports.commandView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'Command Type',
            'scope': '#/oneOf'
        }
    ]
};
exports.fileDiffView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'File Name',
            'scope': '#/properties/fileDiff/properties/filename'
        },
        {
            'type': 'Control',
            'label': 'Solution',
            'scope': '#/properties/fileDiff/properties/solution'
        },
    ]
};
exports.automaticImportView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'Imports',
            'scope': '#/properties/automaticImport/properties/imports'
        },
        {
            'type': 'Control',
            'label': 'Path',
            'scope': '#/properties/automaticImport/properties/path'
        }
    ]
};
exports.openFileView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'Open File',
            'scope': '#/properties/openFile'
        }
    ]
};
exports.checkIfFilesExistView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'Check if file exist',
            'scope': '#/properties/checkIfFilesExist'
        }
    ]
};
exports.terminalCommandsView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'Terminal Command',
            'scope': '#/properties/terminalCommands'
        }
    ]
};
exports.cleanExerciseFolderView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'Clean Exercise Folder',
            'scope': '#/properties/cleanExerciseFolder'
        }
    ]
};
exports.htmlView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'Html',
            'scope': '#/properties/html'
        }
    ]
};
exports.imageView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'Src',
            'scope': '#/properties/image/properties/src'
        },
        {
            'type': 'Control',
            'label': 'Description',
            'scope': '#/properties/image/properties/description'
        },
        {
            'type': 'Control',
            'label': 'Width',
            'scope': '#/properties/image/properties/width'
        }
    ]
};
exports.hintView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'Text',
            'scope': '#/properties/hint/properties/text'
        },
        {
            'type': 'Control',
            'label': 'Content',
            'scope': '#/properties/hint/properties/content'
        }
    ]
};
exports.commandButtonView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'Text',
            'scope': '#/properties/button/properties/text'
        },
        {
            'type': 'Control',
            'label': 'Commands',
            'scope': '#/properties/button/properties/commands'
        }
    ]
};
exports.instructionView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'Instruction',
            'scope': '#/oneOf'
        }
    ]
};
exports.exerciseView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Control',
            'label': 'Title',
            'scope': '#/properties/title'
        },
        {
            'type': 'Control',
            'label': 'Description',
            'scope': '#/properties/description'
        },
        {
            'type': 'Control',
            'label': 'Build Exercise',
            'scope': '#/properties/buildExercise'
        },
        {
            'type': 'Control',
            'label': 'Clean State',
            'scope': '#/properties/cleanState'
        },
        {
            'type': 'Control',
            'label': 'Solve',
            'scope': '#/properties/solve'
        },
        {
            'type': 'Control',
            'label': 'checkStartState',
            'scope': '#/properties/checkStartState'
        },
        {
            'type': 'Control',
            'label': 'Test',
            'scope': '#/properties/test'
        },
        {
            'type': 'Control',
            'label': 'Content',
            'scope': '#/properties/content'
        },
    ]
};
exports.tutorialSchema = {
    'definitions': {
        'tutorial': {
            "type": "object",
            "required": [
                "title",
                "description",
                "tutorialFolder"
            ],
            "additionalProperties": false,
            "properties": {
                'typeId': {
                    'const': '#tutorial'
                },
                "title": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "tutorialFolder": {
                    "type": "string"
                },
                "exercises": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/exercise"
                    }
                }
            }
        },
        "exercise": {
            // "$id": "#exercise",
            "type": "object",
            "additionalProperties": false,
            "required": [
                "title",
                "description"
            ],
            "properties": {
                'typeId': {
                    'const': '#exercise'
                },
                "title": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "checkStartState": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "testName": {
                                "type": "string"
                            },
                            "command": {
                                "$ref": "#/definitions/command"
                            }
                        },
                        "required": [
                            "testName",
                            "command"
                        ],
                        "additionalProperties": false
                    }
                },
                "buildExercise": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/command"
                    }
                },
                "cleanState": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/command"
                    }
                },
                "test": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "testName": {
                                "type": "string"
                            },
                            "command": {
                                "$ref": "#/definitions/command"
                            },
                            "filename": {
                                "type": "string"
                            },
                            "solution": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "testName",
                            "command"
                        ],
                        "additionalProperties": false
                    }
                },
                "solve": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/command"
                    }
                },
                "content": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/instruction"
                    }
                }
            }
        },
        "command": {
            // "$id": "#command",
            "type": "object",
            'properties': {
                'typeId': {
                    'const': '#command'
                },
            },
            "oneOf": [
                {
                    "$ref": "#/definitions/checkIfFilesExist"
                },
                {
                    "$ref": "#/definitions/terminalCommands"
                },
                {
                    "$ref": "#/definitions/openFile"
                },
                {
                    "$ref": "#/definitions/automaticImport"
                },
                {
                    "$ref": "#/definitions/fileDiff"
                },
                {
                    "$ref": "#/definitions/cleanExerciseFolder"
                }
            ]
        },
        "fileDiff": {
            // "$id": "#fileDiff",
            "type": "object",
            "properties": {
                'typeId': {
                    'const': '#fileDiff'
                },
                "fileDiff": {
                    "type": "object",
                    "properties": {
                        "filename": {
                            "type": "string"
                        },
                        "solution": {
                            "type": "string"
                        }
                    }
                }
            },
            "required": [
                "fileDiff"
            ]
        },
        "automaticImport": {
            // "$id": "#automaticImport",
            "type": "object",
            "properties": {
                'typeId': {
                    'const': '#automaticImport'
                },
                "automaticImport": {
                    "type": "object",
                    "properties": {
                        "imports": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "path": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "imports",
                        "path"
                    ]
                }
            },
            "required": [
                "automaticImport"
            ]
        },
        "openFile": {
            // "$id": "#openFile",
            "type": "object",
            "properties": {
                'typeId': {
                    'const': '#openFile'
                },
                "openFile": {
                    "type": "string"
                }
            },
            "required": [
                "openFile"
            ]
        },
        "checkIfFilesExist": {
            // "$id": "#checkIfFilesExist",
            "type": "object",
            "properties": {
                'typeId': {
                    'const': '#checkIfFilesExist'
                },
                "checkIfFilesExist": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            },
            "additionalProperties": false,
            "required": [
                "checkIfFilesExist"
            ]
        },
        "terminalCommands": {
            // "$id": "#terminalCommands",
            "type": "object",
            "properties": {
                'typeId': {
                    'const': '#terminalCommands'
                },
                "terminalCommands": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            },
            "additionalProperties": false,
            "required": [
                "terminalCommands"
            ]
        },
        "cleanExerciseFolder": {
            // "$id": "#cleanExerciseFolder",
            "type": "object",
            "properties": {
                'typeId': {
                    'const': '#cleanExerciseFolder'
                },
                "cleanExerciseFolder": {
                    "type": "object"
                }
            },
            "additionalProperties": false,
            "required": [
                "cleanExerciseFolder"
            ]
        },
        "instruction": {
            // "$id": "#instruction",
            "type": "object",
            'properties': {
                'typeId': {
                    'const': '#instruction'
                },
            },
            "oneOf": [
                {
                    "$ref": "#/definitions/html"
                },
                {
                    "$ref": "#/definitions/image"
                },
                {
                    "$ref": "#/definitions/hint"
                },
                {
                    "$ref": "#/definitions/commandButton"
                }
            ]
        },
        "html": {
            // "$id": "#html",
            "type": "object",
            "properties": {
                'typeId': {
                    'const': '#html'
                },
                "html": {
                    "type": "string"
                }
            },
            "additionalProperties": false,
            "required": [
                "html"
            ]
        },
        "image": {
            // "$id": "#image",
            "type": "object",
            "properties": {
                'typeId': {
                    'const': '#image'
                },
                "image": {
                    "type": "object",
                    "properties": {
                        "src": {
                            "type": "string"
                        },
                        "description": {
                            "type": "string"
                        },
                        "width": {
                            "type": "string"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "src"
                    ]
                }
            },
            "required": [
                "image"
            ],
            "additionalProperties": false
        },
        "hint": {
            // "$id": "#hint",
            "type": "object",
            "properties": {
                'typeId': {
                    'const': '#hint'
                },
                "hint": {
                    "type": "object",
                    "properties": {
                        "text": {
                            "type": "string"
                        },
                        "content": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/instruction"
                            }
                        }
                    },
                    "additionalProperties": false
                }
            },
            "required": [
                "hint"
            ],
            "additionalProperties": false
        },
        "commandButton": {
            // "$id": "#commandButton",
            "type": "object",
            "properties": {
                'typeId': {
                    'const': '#commandButton'
                },
                "button": {
                    "type": "object",
                    "properties": {
                        "text": {
                            "type": "string"
                        },
                        "commands": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/command"
                            }
                        }
                    },
                    "additionalProperties": false
                }
            },
            "required": [
                "button"
            ],
            "additionalProperties": false
        },
    },
};
//# sourceMappingURL=tree-schema.js.map