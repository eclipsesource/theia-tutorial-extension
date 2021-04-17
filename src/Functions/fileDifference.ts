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
import {FileDiff} from '../../schema/tutorial';
const path = require('path');

export const fileDifference = async (command: FileDiff) => {

    const workspaceFolder: string = vscode.workspace.rootPath || '~';

    const filepath = path.join(workspaceFolder, command.fileDiff.fileName);
    const solpath = path.join(workspaceFolder, command.fileDiff.solution);

    try {
        const fileUri = vscode.Uri.file(filepath);
        const solUri = vscode.Uri.file(solpath);
        await vscode.workspace.fs.stat(fileUri);
        await vscode.workspace.fs.stat(solUri);
        vscode.commands.executeCommand('vscode.diff', fileUri, solUri, "Compare with solution", {viewColumn: vscode.ViewColumn.One});
    } catch {
        vscode.window.showInformationMessage("The given filename was not found in your workspace.");
    }
};
