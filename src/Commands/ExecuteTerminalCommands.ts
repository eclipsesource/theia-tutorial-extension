/********************************************************************************
 * Copyright (c) 2020-2021 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * https://www.eclipse.org/legal/epl-2.0, or the MIT License which is
 * available at https://opensource.org/licenses/MIT.
 *
 * SPDX-License-Identifier: EPL-2.0 OR MIT
 ********************************************************************************/
import * as vscode from 'vscode';
import {TerminalCommands} from '../../schema/tutorial';
const exec = require('child_process').exec;

const executeTerminalCommands: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.executeTerminalCommands', async (commands: TerminalCommands, id: string) => {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    
    const outputChannel = vscode.window.createOutputChannel('Execute Commands');
    outputChannel.show();
    outputChannel.appendLine('Executing Terminal Commands:');

    let index = 0;
    const next = () => {
        if (index < commands.terminalCommands.length) {
            outputChannel.appendLine(commands.terminalCommands[index]);
            exec(`cd ` + workspaceFolder + ` && ` + commands.terminalCommands[index++], (error: any, stdout: any, stderr: any) => {
                if (error) {
                    outputChannel.appendLine(error);
                }
                next();
            });
        } else {
            outputChannel.appendLine('All commands completed');
        }
    };
    next();
});

export default executeTerminalCommands;