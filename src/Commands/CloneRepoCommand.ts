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
import cloneRepo from '../Functions/cloneRepo';

const cloneRepoCommand: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.cloneRepo', () => {

    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    const outputChannel = vscode.window.createOutputChannel('repoCloned');
    const repo = "https://github.com/LukasBoll/tutorial1.git";

    cloneRepo(workspaceFolder, repo, outputChannel);

    // Display a message box to the user
    vscode.window.showInformationMessage('Cloning!');
});




export default cloneRepoCommand;

