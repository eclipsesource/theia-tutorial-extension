import * as vscode from 'vscode';
import {TerminalCommands} from '../../schema/tutorial';
import ReactPanel from '../ReactPanel';
const {promisify} = require('util');
const exec = promisify(require('child_process').exec)



const EXECUTETERMINALCOMMANDS: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.executeTerminalCommands', async (commands: TerminalCommands, id: string) => {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    let output: any;
    for (let command of commands.terminalCommands) {
        output = await exec(`cd ` + workspaceFolder + ` && ` + command);
    }
    if (output != null) {
        if (output.stdout != null) {
            ReactPanel.currentPanel?.sendToView({id: id, result: output!.stdout});
        } else if (output.stderr != null) {
            ReactPanel.currentPanel?.sendToView({id: id, result: output!.stderr});
        }
    }
});

export default EXECUTETERMINALCOMMANDS;