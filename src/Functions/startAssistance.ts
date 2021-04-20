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
import { execShellCommand } from '../utils/commandUtil';
import * as vscode from 'vscode';
import { Assistance } from '../../schema/tutorial';
const fs = require('fs');

export const startAssistance = async (assistance: Assistance) => {
  const workspaceFolder: string = vscode.workspace.rootPath || '~';
  if (
    assistance.assistance.workspace === '' ||
    assistance.assistance.workspace === undefined
  ) {
    await execShellCommand(`cd ` + workspaceFolder + '&& mkdir .tutorial');
    let path = workspaceFolder + '/.tutorial/assistance.json';
    fs.writeFile(
      path,
      JSON.stringify(assistance.assistance.elements),
      (err: any) => {
        if (err) {
          console.log(err);
          return vscode.window.showErrorMessage('Failed' + path);
        }
      }
    );
  } else {
    await execShellCommand(
      `cd ` +
        workspaceFolder +
        '/' +
        assistance.assistance.workspace +
        '&& mkdir .tutorial'
    );
    let path =
      workspaceFolder +
      '/' +
      assistance.assistance.workspace +
      '/.tutorial/assistance.json';
    fs.writeFile(
      path,
      JSON.stringify(assistance.assistance.elements),
      (err: any) => {
        if (err) {
          console.log(err);
          return vscode.window.showErrorMessage('Failed' + path);
        }
      }
    );
  }
};
