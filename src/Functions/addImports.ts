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
import {AutomaticImport} from '../../schema/tutorial';
import ReactPanel from '../ReactPanel';
const fs = require('fs');
const path = require('path');

export const addImports = (autoImportData: AutomaticImport, id: String) => {

  const workspaceFolder: string = vscode.workspace.rootPath || '~';

  const filepath = path.join(workspaceFolder, autoImportData.automaticImport.path);

  let content = fs.readFileSync(filepath);

  autoImportData.automaticImport.imports.forEach((element) => {
    if (!content.includes(element)) {
      content = element + "\n" + content;
    }
  });

  fs.writeFileSync(filepath, content);
  ReactPanel.currentPanel?.sendToView({id: id, result: true});
};
