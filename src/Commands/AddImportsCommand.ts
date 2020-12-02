import * as vscode from 'vscode';
const fs = require('fs');
const path = require('path');

const ADDIMPORTSCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.addImports', () => {

    const workspaceFolder: string = vscode.workspace.rootPath || '~';

    let requiredImports: {imports: string[], path: string[]} = {
        imports: [`import { inject } from "inversify";`,
            `import { CommandContribution, CommandRegistry, MessageService } from "@theia/core/lib/common";`],
        path: ["Exercise0", "HelloWorld", "src", "browser", "HelloWorld-contribution.ts"]
    };

    let filepath = path.join(workspaceFolder);

    requiredImports.path.forEach((element) => {
        filepath = path.join(filepath, element);
    });

    let content = fs.readFileSync(filepath);

    requiredImports.imports.forEach(element => {
        if (!content.includes(element)) {
            content = element + "\n" + content
        }
    });

    fs.writeFileSync(filepath, content);

    // Display a message box to the user
    vscode.window.showInformationMessage('Adding Imports!');
});




export default ADDIMPORTSCOMMAND;

