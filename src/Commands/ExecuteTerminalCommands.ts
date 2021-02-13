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
import ReactPanel from '../ReactPanel';
import {execShellCommand} from '../utils/commandUtil';

const executeTerminalCommands: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.executeTerminalCommands', async (commands: TerminalCommands, id: string) => {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';

    let output;
    for (let command of commands.terminalCommands) {
        output = await execShellCommand(`cd ` + workspaceFolder + ` && ` + command);
    }
    if (output != null) {
        ReactPanel.currentPanel?.sendToView({id: id, result: output});
    }
});

export default executeTerminalCommands;