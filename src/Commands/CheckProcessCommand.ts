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
import { EXERCISE_PORT_NUMBER } from '../utils/constant';
import { execShellCommand } from '../utils/commandUtil';

const checkProcessCommand: vscode.Disposable = vscode.commands.registerCommand(
  'theiatutorialextension.checkProcess',
  async (isProcessKilled?: boolean) => {
    const outputChannel = vscode.window.createOutputChannel(
      'Checking Processes'
    );
    outputChannel.show();

    await execShellCommand(`lsof -t -i:${EXERCISE_PORT_NUMBER}`).then(
      async (response) => {
        outputChannel.appendLine(`Process is checked`);
        if (response && !isProcessKilled) {
          outputChannel.appendLine(
            `Process is running at port ${EXERCISE_PORT_NUMBER} with PID: ${response}`
          );
          vscode.window.showInformationMessage(
            `Process is running at port ${EXERCISE_PORT_NUMBER} with PID: ${response}`
          );
        }

        if (isProcessKilled) {
          await execShellCommand(
            `kill -9 $(lsof -t -i:${EXERCISE_PORT_NUMBER})`
          ).then(async () => {
            outputChannel.appendLine('Process is checked and killed');
            vscode.window.showInformationMessage(
              'Process is checked and killed'
            );
          });
        }
      }
    );
  }
);

export default checkProcessCommand;
