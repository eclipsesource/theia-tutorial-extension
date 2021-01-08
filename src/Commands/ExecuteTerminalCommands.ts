import * as vscode from 'vscode';
import {TerminalCommands} from '../../schema/tutorial';
var cmd = require('node-cmd');

const EXECUTETERMINALCOMMANDS: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.executeTerminalCommands', (command: TerminalCommands) => {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    command.terminalCommands.forEach((terminalCommand) => {
        cmd.runSync(`cd ` + workspaceFolder + ` && ` + terminalCommand);
    });
});

export default EXECUTETERMINALCOMMANDS;