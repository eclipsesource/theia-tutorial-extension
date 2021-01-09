import {exec} from "child_process";
import * as vscode from 'vscode';

export function moveEcerciseFolder(exerciseFolder: string): void {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    let today = new Date();
    let currentTimeStamp = today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + today.getDate() + '_' + today.getHours() + "_" + today.getMinutes() + "_" + today.getSeconds();;
    exec("move " + workspaceFolder + "/" + exerciseFolder + " " + workspaceFolder + "/.tmp");
}