import * as vscode from 'vscode';
import cloneRepo from '../Functions/cloneRepo';

const CLONEREPOCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.cloneRepo', () => {

    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    const outputChannel = vscode.window.createOutputChannel('repoCloned');
    const repo = "https://github.com/LukasBoll/tutorial1.git";

    cloneRepo(workspaceFolder, repo, outputChannel);

    // Display a message box to the user
    vscode.window.showInformationMessage('Cloning!');
});




export default CLONEREPOCOMMAND;

