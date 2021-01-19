import { TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';
export declare namespace CoffeeModel {
    namespace Type {
        const Exercise = "#exercise";
        const Tutorial = "#tutorial";
        const Command = "#command";
        const FileDiff = "#fileDiff";
        const AutomaticImport = "#automaticImport";
        const OpenFile = "#openFile";
        const CheckIfFilesExist = "#checkIfFilesExist";
        const TerminalCommands = "#terminalCommands";
        const CleanExerciseFolder = "#cleanExerciseFolder";
        const Instruction = "#instruction";
        const Html = "#html";
        const Image = "#image";
        const Hint = "#hint";
        const CommandButton = "#commandButton";
        function name(type: string): string;
    }
    /** Maps types to their creatable children */
    const childrenMapping: Map<string, TreeEditor.ChildrenDescriptor[]>;
}
//# sourceMappingURL=tree-model.d.ts.map