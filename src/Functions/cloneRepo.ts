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
import {exec} from 'child_process';

const cloneRepo = (workspaceFolder: string, repo: string, outputChannel: vscode.OutputChannel): void => {
  const executionString = `git clone ${repo} ${workspaceFolder}/.tutorialRepo`;
  const cleanFolder = `rm -r ${workspaceFolder}/.tutorialRepo`;
  exec(cleanFolder);
  outputChannel.show();

  const gitInstallProcess = exec(executionString, (error, stdout, stderr) => {
    if (stderr) {
      outputChannel.appendLine(stderr);
      return;
    }
    if (error !== null) {
      outputChannel.appendLine('error');
      return;
    }
    outputChannel.append(stdout);
  });

  gitInstallProcess.on('close', () => {
    vscode.window.showInformationMessage('Course successfully Cloned');
  });
};

export default cloneRepo;