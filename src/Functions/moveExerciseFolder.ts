import {exec} from "child_process";
import * as vscode from 'vscode';

export function moveEcerciseFolder(exerciseFolder: string): void {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    exec("move " + workspaceFolder + "/" + exerciseFolder + " " + workspaceFolder + "/.tmp");
}