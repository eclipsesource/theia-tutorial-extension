import * as vscode from 'vscode';
import {TerminalCommands} from '../../schema/tutorial';
import ReactPanel from '../ReactPanel';
import {execShellCommand} from '../utils/commandUtil';
const {promisify} = require('util');
const exec = promisify(require('child_process').exec)



const EXECUTETERMINALCOMMANDS: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.executeTerminalCommands', async (commands: TerminalCommands, id: string) => {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    let output;
    for (let command of commands.terminalCommands) {
        output = await execShellCommand(`cd ` + workspaceFolder + ` && ` + command);
    }
    if (output != null) {
        ReactPanel.currentPanel?.sendToView({id: id, result: output});
    }
});

export default EXECUTETERMINALCOMMANDS;