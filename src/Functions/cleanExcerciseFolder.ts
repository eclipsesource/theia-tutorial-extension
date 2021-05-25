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
const fse = require('fs-extra');
const path = require('path');
const fs = require('fs');

export const cleanExcerciseFolder = (exerciseFolder: String, id: String): void => {
  const workspaceFolder: string = vscode.workspace.rootPath || '~';
  let currentTimeStamp: string = DateUtils.currentTimestamp();

  let srcDir = path.normalize(path.join(workspaceFolder, exerciseFolder));
  let destDir = path.normalize(path.join(workspaceFolder, ".tutorial/tmp/", exerciseFolder, currentTimeStamp));

  try {
    fse.copySync(srcDir, destDir);
  } catch (err) {
    console.error(err);
  }
  fs.rmdirSync(srcDir, {recursive: true});
  fs.mkdirSync(srcDir);

  ReactPanel.currentPanel?.sendToView({id: id, result: true});
};
