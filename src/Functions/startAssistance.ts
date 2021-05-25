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
import {Assistance} from '../../schema/tutorial';
import ReactPanel from '../ReactPanel';
const fs = require('fs');
const path = require('path');

export const startAssistance = async (assistance: Assistance, id: String) => {
  const workspaceFolder: string = vscode.workspace.rootPath || '~';
  const tutorialFolder = path.normalize(path.join(workspaceFolder, ".tutorial"));
  fs.mkdirSync(tutorialFolder);
  let assistancePath
  if (
    assistance.assistance.workspace === '' ||
    assistance.assistance.workspace === undefined
  ) {
    assistancePath = path.normalize(path.join(workspaceFolder, '.tutorial/assistance.json'));

  } else {
    assistancePath = path.normalize(path.join(workspaceFolder, assistance.assistance.workspace, '.tutorial/assistance.json'));
  }
  fs.writeFile(
    assistancePath,
    JSON.stringify(assistance.assistance.elements),
    (err: any) => {
      if (err) {
        console.log(err);
        return vscode.window.showErrorMessage('Failed' + path);
      }
    }
  );
  ReactPanel.currentPanel?.sendToView({id: id, result: true});
};
