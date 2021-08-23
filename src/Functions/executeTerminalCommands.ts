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
import {Console} from 'console';
import * as vscode from 'vscode';
import {TerminalCommands} from '../../schema/tutorial';
import ReactPanel from '../ReactPanel';
const exec = require('child_process').exec;

export const executeTerminalCommands = async (commands: TerminalCommands, id: String) => {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';

    const outputChannel = vscode.window.createOutputChannel('Execute Commands');
    outputChannel.show();
    outputChannel.appendLine('Executing Terminal Commands:');

    let index = 0;
    const next = () => {
        if (index < commands.terminalCommands.length) {
            const silently = commands.terminalCommands[index].startsWith("silently");
            const command = silently ? commands.terminalCommands[index].substring(9) : commands.terminalCommands[index];
            outputChannel.appendLine(command);
            index++;
            if (silently){
                if (index == commands.terminalCommands.length) {
                    ReactPanel.currentPanel?.sendToView({id: id, result: true});
                }
                exec(`cd ` + workspaceFolder + ` && ` + command);
                setTimeout(() => next(), 1000);
            } else {
                exec(`cd ` + workspaceFolder + ` && ` + command, (error: Error, stdout: string, stderr: string) => {
                    if (error !== null) {
                        outputChannel.appendLine(error.message);
                        if (index == commands.terminalCommands.length) {
                            ReactPanel.currentPanel?.sendToView({id: id, result: false});
                        }
                    } else {
                        if (index == commands.terminalCommands.length) {
                            ReactPanel.currentPanel?.sendToView({id: id, result: true});
                        }
                    }
                    outputChannel.appendLine(stdout);
                    next();
                });
            }
        } else {
            outputChannel.appendLine('All commands completed');
        }
    };
    next();
};