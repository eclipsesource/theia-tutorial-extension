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
import { TerminalCommands } from '../../schema/tutorial';
import ReactPanel from '../ReactPanel';
import { spawn } from 'child_process';

export const executeTerminalCommands = async (commands: TerminalCommands, id: string): Promise<void> => {
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
            if (silently) {
                if (index === commands.terminalCommands.length) {
                    ReactPanel.currentPanel?.sendToView({ id: id, result: true });
                }
                spawn(`cd ${workspaceFolder} && ${command}`, [], { shell: true });
                setTimeout(() => next(), 1000);
            } else {
                const proc = spawn(`cd ${workspaceFolder} && ${command}`, [], { shell: true });
                proc.stdout.on('data', function(msg){
                    outputChannel.append(msg.toString());
                });
                proc.stderr.on('data', function(msg){
                    outputChannel.append(msg.toString());
                });
                proc.on('close', (code) => {
                    if (code !== 0) {
                        outputChannel.appendLine(`Command ${command} failed with exit-code ${code}`);
                            ReactPanel.currentPanel?.sendToView({ id: id, result: false });
                    } else {
                        outputChannel.appendLine(`Command executed successfully`);
                        if (index === commands.terminalCommands.length) {
                            ReactPanel.currentPanel?.sendToView({ id: id, result: true });
                        }
                    }
                    next();
                });
            }
        } else {
            outputChannel.appendLine('All commands completed');
        }
    };
    next();
};