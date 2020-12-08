import * as vscode from 'vscode';
const fs = require('fs');
const path = require('path');

interface autoImportData {
    imports: [string],
    path: [string]
}

const ADDIMPORTSCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.addImports', (autoImportData: Array<any>) => {
    vscode.window.showInformationMessage('Adding Imports!');

    const workspaceFolder: string = vscode.workspace.rootPath || '~';

    for (let requiredImports of autoImportData) {

        let filepath = path.join(workspaceFolder);

        requiredImports.path.forEach((element: any) => {
            filepath = path.join(filepath, element);
        });

        let content = fs.readFileSync(filepath);

        requiredImports.imports.forEach((element: any) => {
            if (!content.includes(element)) {
                content = element + "\n" + content
            }
        });

        fs.writeFileSync(filepath, content);
    }
    // Display a message box to the user
    vscode.window.showInformationMessage('Added Imports!');
});




export default ADDIMPORTSCOMMAND;

