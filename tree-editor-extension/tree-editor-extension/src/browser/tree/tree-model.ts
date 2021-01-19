import { TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';

export namespace CoffeeModel {
    export namespace Type {
        export const Exercise = '#exercise';
        export const Tutorial = '#tutorial';
        export const Command = '#command';
        export const FileDiff = '#fileDiff';
        export const AutomaticImport = '#automaticImport';
        export const OpenFile = '#openFile';
        export const CheckIfFilesExist = '#checkIfFilesExist';
        export const TerminalCommands = '#terminalCommands';
        export const CleanExerciseFolder = '#cleanExerciseFolder';
        export const Instruction = '#instruction';
        export const Html = '#html';
        export const Image = '#image';
        export const Hint = '#hint';
        export const CommandButton = '#commandButton';

        export function name(type: string): string {
            return type;
        }
    }

    const components = [
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
    export const childrenMapping: Map<string, TreeEditor.ChildrenDescriptor[]> = new Map([
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

}
