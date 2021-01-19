export declare const controlUnitView: {
    type: string;
    elements: ({
        type: string;
        label: string;
        elements: {
            type: string;
            elements: ({
                type: string;
                elements: {
                    type: string;
                    elements: {
                        type: string;
                        label: string;
                        scope: string;
                    }[];
                }[];
                label?: undefined;
            } | {
                type: string;
                label: string;
                elements: {
                    type: string;
                    elements: {
                        type: string;
                        label: string;
                        scope: string;
                        rule: {
                            effect: string;
                            condition: {
                                scope: string;
                                schema: {
                                    const: boolean;
                                };
                            };
                        };
                    }[];
                }[];
            })[];
        }[];
    } | {
        type: string;
        label: string;
        elements: {
            type: string;
            elements: {
                type: string;
                label: string;
                scope: string;
            }[];
        }[];
    } | {
        type: string;
        label: string;
        elements: {
            type: string;
            label: string;
            scope: string;
            options: {
                multi: boolean;
            };
        }[];
    })[];
};
export declare const machineView: {
    type: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const brewingView: {
    type: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const dripTrayView: {
    type: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const waterTankView: {
    type: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const multiComponentView: {
    type: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const coffeeSchema: {
    definitions: {
        machine: {
            title: string;
            properties: {
                typeId: {
                    const: string;
                };
                name: {
                    type: string;
                    minLength: number;
                    maxLength: number;
                };
            };
            required: string[];
            additionalProperties: boolean;
        };
        multicomponent: {
            title: string;
            properties: {
                typeId: {
                    const: string;
                };
                width: {
                    type: string;
                };
                length: {
                    type: string;
                };
                height: {
                    type: string;
                };
            };
            required: string[];
            additionalProperties: boolean;
        };
        controlunit: {
            title: string;
            type: string;
            properties: {
                typeId: {
                    const: string;
                };
                processor: {
                    $ref: string;
                };
                dimension: {
                    $ref: string;
                };
                display: {
                    $ref: string;
                };
                userDescription: {
                    type: string;
                };
            };
            additionalProperties: boolean;
            required: string[];
        };
        brewingunit: {
            title: string;
            properties: {
                typeId: {
                    const: string;
                };
                temperature: {
                    type: string;
                    default: number;
                    maximum: number;
                };
            };
            additionalProperties: boolean;
        };
        driptray: {
            title: string;
            properties: {
                typeId: {
                    const: string;
                };
                material: {
                    type: string;
                    enum: string[];
                };
            };
            additionalProperties: boolean;
        };
        watertank: {
            title: string;
            properties: {
                typeId: {
                    const: string;
                };
                capacity: {
                    type: string;
                    minimum: number;
                };
            };
            required: string[];
            additionalProperties: boolean;
        };
        processor: {
            type: string;
            title: string;
            properties: {
                typeId: {
                    const: string;
                };
                vendor: {
                    type: string;
                    minLength: number;
                };
                clockSpeed: {
                    type: string;
                };
                numberOfCores: {
                    type: string;
                    minimum: number;
                    maximum: number;
                };
                advancedConfiguration: {
                    type: string;
                };
                socketconnectorType: {
                    type: string;
                    enum: string[];
                };
                thermalDesignPower: {
                    type: string;
                };
                manufactoringProcess: {
                    type: string;
                    enum: string[];
                };
            };
            required: string[];
            additionalProperties: boolean;
        };
        dimension: {
            title: string;
            type: string;
            properties: {
                typeId: {
                    const: string;
                };
                width: {
                    type: string;
                    minimum: number;
                };
                height: {
                    type: string;
                    minimum: number;
                };
                length: {
                    type: string;
                    minimum: number;
                };
            };
            required: string[];
            additionalProperties: boolean;
        };
        ram: {
            title: string;
            type: string;
            properties: {
                typeId: {
                    const: string;
                };
                clockSpeed: {
                    type: string;
                };
                size: {
                    type: string;
                };
                type: {
                    type: string;
                    enum: string[];
                };
            };
            additionalProperties: boolean;
        };
        display: {
            type: string;
            title: string;
            properties: {
                typeId: {
                    const: string;
                };
                width: {
                    type: string;
                    minimum: number;
                };
                height: {
                    type: string;
                    minimum: number;
                };
            };
            required: string[];
            additionalProperties: boolean;
        };
    };
    $ref: string;
};
//# sourceMappingURL=tree-schema.d.ts.map