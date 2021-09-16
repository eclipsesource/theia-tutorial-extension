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
import { DateUtils } from '../utils/dateUtils';

import * as fse from 'fs-extra';
import * as fs from 'fs';
import * as path from 'path';

export const cleanExcerciseFolder = (exerciseFolder: string, id: string): void => {
  const workspaceFolder: string = vscode.workspace.rootPath || '~';
  const currentTimeStamp: string = DateUtils.currentTimestamp();

  const srcDir = path.normalize(path.join(workspaceFolder, exerciseFolder));
  const destDir = path.normalize(path.join(workspaceFolder, ".tutorial/tmp/", exerciseFolder, currentTimeStamp));

  try {
    fse.copySync(srcDir, destDir);
  } catch (err) {
    console.error(err);
  }
  fs.rmdirSync(srcDir, { recursive: true });
  fs.mkdirSync(srcDir);

  ReactPanel.currentPanel?.sendToView({ id: id, result: true });
};
