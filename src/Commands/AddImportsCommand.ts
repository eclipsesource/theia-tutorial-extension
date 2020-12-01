import * as vscode from 'vscode';
const fs = require('fs');
const path = require('path');

const ADDIMPORTSCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.addImports', () => {

    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    const outputChannel = vscode.window.createOutputChannel('addImports');
    outputChannel.show();
    outputChannel.append("test");

    let requiredImports: {imports: string[], path: string[]} = {
        imports: [`import { injectable, inject } from "inversify"`,
            `import { CommandContribution, CommandRegistry, MessageService } from "@theia/core/lib/common";`],
        path: ["experimentFolder", "src"]
    };

    let filepath = path.parse(workspaceFolder);

    requiredImports.path.forEach((element) => {
        filepath = path.join(filepath.toString(), element);
    });
    outputChannel.append(filepath.toString());

    fs.readFile(filepath, (content: any) => {
        outputChannel.append(content);
    });

    // Display a message box to the user
    vscode.window.showInformationMessage('Adding Imports!');
});




export default ADDIMPORTSCOMMAND;

