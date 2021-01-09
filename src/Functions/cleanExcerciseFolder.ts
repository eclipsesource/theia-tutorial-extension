import {exec} from "child_process";
import * as vscode from 'vscode';
var cmd = require('node-cmd');

export function cleanExcerciseFolder(exerciseFolder: String): void {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    let today = new Date();
    let currentTimeStamp: string = today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + today.getDate() + '_' + today.getHours() + "_" + today.getMinutes() + "_" + today.getSeconds();;
    let moveCommand = "move " + workspaceFolder + "/" + exerciseFolder + " " + workspaceFolder + "/.tmp/" + currentTimeStamp;
    let result = cmd.runSync(moveCommand);
    console.log("bla");
}