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
import ReactPanel from '../ReactPanel';
import {DateUtils} from '../utils/dateUtils';
var cmd = require('node-cmd');

export const cleanExcerciseFolder = (exerciseFolder: String, id: String): void => {
  const workspaceFolder: string = vscode.workspace.rootPath || '~';
  let currentTimeStamp: string = DateUtils.currentTimestamp();
  cmd.runSync(
    'mkdir -p ' + workspaceFolder + '/.tutorial/tmp/' + currentTimeStamp
  );
  let moveCommand =
    'mv ' +
    workspaceFolder +
    '/' +
    exerciseFolder +
    ' ' +
    workspaceFolder +
    '/.tutorial/tmp/' +
    currentTimeStamp;
  cmd.runSync(moveCommand);
  ReactPanel.currentPanel?.sendToView({id: id, result: true});
};
