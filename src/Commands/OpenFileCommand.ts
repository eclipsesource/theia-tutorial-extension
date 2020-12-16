import * as vscode from 'vscode';
const fs = require('fs');
const path = require('path');

const OPENFILECOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.openFile', async (filename: string) => {

    
    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    
    const filepath = path.join(workspaceFolder,filename);

    

    try {
        const uri = vscode.Uri.file(filepath);
        await vscode.workspace.fs.stat(uri);
        vscode.commands.executeCommand('vscode.open',uri, {viewColumn: vscode.ViewColumn.One});
    } catch {
        vscode.window.showInformationMessage("The given filename was not found in your workspace.");
    }

});




export default OPENFILECOMMAND;

