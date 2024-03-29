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
import { OpenFile } from '../../schema/tutorial';
import ReactPanel from '../ReactPanel';
import * as path from 'path';

export const openFile = async (openFileCommand: OpenFile, id: string): Promise<void> => {

  const workspaceFolder: string = vscode.workspace.rootPath || '~';
  const filepath = path.join(workspaceFolder, openFileCommand.openFile);

  try {
    const uri = vscode.Uri.file(filepath);
    await vscode.workspace.fs.stat(uri);
    vscode.commands.executeCommand('vscode.open', uri, { viewColumn: vscode.ViewColumn.One });
  } catch {
    vscode.window.showInformationMessage("The given filename was not found in your workspace.");
  }
  ReactPanel.currentPanel?.sendToView({ id: id, result: true });
};
