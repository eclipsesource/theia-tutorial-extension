import * as vscode from 'vscode';
import {FileDiff} from '../../schema/tutorial';
const fs = require('fs');
const path = require('path');

const FILEDIFFERENCECOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.fileDiff', async (command: FileDiff) => {

    const workspaceFolder: string = vscode.workspace.rootPath || '~';

    const filepath = path.join(workspaceFolder, command.fileDiff.fileName);
    const solpath = path.join(workspaceFolder, command.fileDiff.solution);


    try {
        const fileUri = vscode.Uri.file(filepath);
        const solUri = vscode.Uri.file(solpath);
        await vscode.workspace.fs.stat(fileUri);
        await vscode.workspace.fs.stat(solUri);
        vscode.commands.executeCommand('vscode.diff', fileUri, solUri, "Compare with solution", {viewColumn: vscode.ViewColumn.One});
    } catch {
        vscode.window.showInformationMessage("The given filename was not found in your workspace.");
    }

});




export default FILEDIFFERENCECOMMAND;

