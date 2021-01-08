import * as vscode from 'vscode';
import {AutomaticImport} from '../../schema/tutorial';
const fs = require('fs');
const path = require('path');

const ADDIMPORTSCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.addImports', (autoImportData: AutomaticImport) => {

    const workspaceFolder: string = vscode.workspace.rootPath || '~';

    let filepath = path.join(workspaceFolder, autoImportData.automaticImport.path);

    let content = fs.readFileSync(filepath);

    autoImportData.automaticImport.imports.forEach((element: any) => {
        if (!content.includes(element)) {
            content = element + "\n" + content
        }
    });

    fs.writeFileSync(filepath, content);
    // Display a message box to the user

});




export default ADDIMPORTSCOMMAND;

