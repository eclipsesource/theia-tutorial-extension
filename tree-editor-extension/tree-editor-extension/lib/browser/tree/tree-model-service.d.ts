import { ILogger } from '@theia/core';
import { TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';
export declare class TreeModelService implements TreeEditor.ModelService {
    private readonly logger;
    constructor(logger: ILogger);
    getDataForNode(node: TreeEditor.Node): any;
    getSchemaForNode(node: TreeEditor.Node): {
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    } | {
        type: string;
        required: string[];
        additionalProperties: boolean;
        properties: {
            typeId: {
                const: string;
            };
            title: {
                type: string;
            };
            description: {
                type: string;
            };
            tutorialFolder: {
                type: string;
            };
            exercises: {
                type: string;
                items: {
                    $ref: string;
                };
            };
        };
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    } | {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
            typeId: {
                const: string;
            };
            title: {
                type: string;
            };
            description: {
                type: string;
            };
            checkStartState: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        testName: {
                            type: string;
                        };
                        command: {
                            $ref: string;
                        };
                    };
                    required: string[];
                    additionalProperties: boolean;
                };
            };
            buildExercise: {
                type: string;
                items: {
                    $ref: string;
                };
            };
            cleanState: {
                type: string;
                items: {
                    $ref: string;
                };
            };
            test: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        testName: {
                            type: string;
                        };
                        command: {
                            $ref: string;
                        };
                        filename: {
                            type: string;
                        };
                        solution: {
                            type: string;
                        };
                    };
                    required: string[];
                    additionalProperties: boolean;
                };
            };
            solve: {
                type: string;
                items: {
                    $ref: string;
                };
            };
            content: {
                type: string;
                items: {
                    $ref: string;
                };
            };
        };
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    } | {
        type: string;
        properties: {
            typeId: {
                const: string;
            };
        };
        oneOf: {
            $ref: string;
        }[];
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    } | {
        type: string;
        properties: {
            typeId: {
                const: string;
            };
            fileDiff: {
                type: string;
                properties: {
                    filename: {
                        type: string;
                    };
                    solution: {
                        type: string;
                    };
                };
            };
        };
        required: string[];
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    } | {
        type: string;
        properties: {
            typeId: {
                const: string;
            };
            automaticImport: {
                type: string;
                properties: {
                    imports: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    path: {
                        type: string;
                    };
                };
                required: string[];
            };
        };
        required: string[];
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    } | {
        type: string;
        properties: {
            typeId: {
                const: string;
            };
            openFile: {
                type: string;
            };
        };
        required: string[];
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    } | {
        type: string;
        properties: {
            typeId: {
                const: string;
            };
            checkIfFilesExist: {
                type: string;
                items: {
                    type: string;
                };
            };
        };
        additionalProperties: boolean;
        required: string[];
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    } | {
        type: string;
        properties: {
            typeId: {
                const: string;
            };
            terminalCommands: {
                type: string;
                items: {
                    type: string;
                };
            };
        };
        additionalProperties: boolean;
        required: string[];
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    } | {
        type: string;
        properties: {
            typeId: {
                const: string;
            };
            cleanExerciseFolder: {
                type: string;
            };
        };
        additionalProperties: boolean;
        required: string[];
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    } | {
        type: string;
        properties: {
            typeId: {
                const: string;
            };
            html: {
                type: string;
            };
        };
        additionalProperties: boolean;
        required: string[];
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    } | {
        type: string;
        properties: {
            typeId: {
                const: string;
            };
            image: {
                type: string;
                properties: {
                    src: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    width: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
        };
        required: string[];
        additionalProperties: boolean;
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    } | {
        type: string;
        properties: {
            typeId: {
                const: string;
            };
            hint: {
                type: string;
                properties: {
                    text: {
                        type: string;
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
                additionalProperties: boolean;
            };
        };
        required: string[];
        additionalProperties: boolean;
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    } | {
        type: string;
        properties: {
            typeId: {
                const: string;
            };
            button: {
                type: string;
                properties: {
                    text: {
                        type: string;
                    };
                    commands: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
                additionalProperties: boolean;
            };
        };
        required: string[];
        additionalProperties: boolean;
        definitions: {
            tutorial: {
                type: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tutorialFolder: {
                        type: string;
                    };
                    exercises: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            exercise: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    typeId: {
                        const: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    checkStartState: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    buildExercise: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    cleanState: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    test: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                testName: {
                                    type: string;
                                };
                                command: {
                                    $ref: string;
                                };
                                filename: {
                                    type: string;
                                };
                                solution: {
                                    type: string;
                                };
                            };
                            required: string[];
                            additionalProperties: boolean;
                        };
                    };
                    solve: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    content: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            command: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            fileDiff: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    fileDiff: {
                        type: string;
                        properties: {
                            filename: {
                                type: string;
                            };
                            solution: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
            automaticImport: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    automaticImport: {
                        type: string;
                        properties: {
                            imports: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            path: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                required: string[];
            };
            openFile: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    openFile: {
                        type: string;
                    };
                };
                required: string[];
            };
            checkIfFilesExist: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    checkIfFilesExist: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            terminalCommands: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    terminalCommands: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            cleanExerciseFolder: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    cleanExerciseFolder: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            instruction: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                };
                oneOf: {
                    $ref: string;
                }[];
            };
            html: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    html: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
                required: string[];
            };
            image: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    image: {
                        type: string;
                        properties: {
                            src: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                        additionalProperties: boolean;
                        required: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            hint: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    hint: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            content: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            commandButton: {
                type: string;
                properties: {
                    typeId: {
                        const: string;
                    };
                    button: {
                        type: string;
                        properties: {
                            text: {
                                type: string;
                            };
                            commands: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
    };
    private getSchemaForType;
    getUiSchemaForNode(node: TreeEditor.Node): {
        type: string;
        elements: {
            type: string;
            label: string;
            scope: string;
        }[];
    } | undefined;
    getChildrenMapping(): Map<string, TreeEditor.ChildrenDescriptor[]>;
    getNameForType(type: string): string;
}
//# sourceMappingURL=tree-model-service.d.ts.map