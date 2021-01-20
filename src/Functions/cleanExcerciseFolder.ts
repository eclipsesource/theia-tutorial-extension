import {exec} from "child_process";
import * as vscode from 'vscode';
var cmd = require('node-cmd');

export const cleanExcerciseFolder = (exerciseFolder: String): void => {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    let today = new Date();
    let currentTimeStamp: string = today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + today.getDate() + '_' + today.getHours() + "_" + today.getMinutes() + "_" + today.getSeconds();;
    cmd.runSync("mkdir -p " + workspaceFolder + "/.tutorial/tmp/" + currentTimeStamp);
    let moveCommand = "mv " + workspaceFolder + "/" + exerciseFolder + " " + workspaceFolder + "/.tutorial/tmp/" + currentTimeStamp;
    cmd.runSync(moveCommand);
}