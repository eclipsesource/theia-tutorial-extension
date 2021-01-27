export declare const tutorialView: {
    type: string;
    label: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const fileDiffView: {
    type: string;
    label: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const automaticImportView: {
    type: string;
    label: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const openFileView: {
    type: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const checkIfFilesExistView: {
    type: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const terminalCommandsView: {
    type: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const cleanExerciseFolderView: {
    type: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const htmlView: {
    type: string;
    label: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const imageView: {
    type: string;
    label: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const hintView: {
    type: string;
    label: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const commandButtonView: {
    type: string;
    label: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const exerciseView: {
    type: string;
    label: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const tutorialSchema: {
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
                            fileName: {
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
                        fileName: {
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
//# sourceMappingURL=tree-schema.d.ts.map