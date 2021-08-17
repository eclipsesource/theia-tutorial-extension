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
import ReactPanel from './ReactPanel';

import { loadConfig } from './Functions/loadConfig';
import initCommands from './Commands/initCommands';

export const activate = (context: vscode.ExtensionContext): void => {
  ReactPanel.createOrShow(context.extensionPath);

  initCommands(context);

  setConfig();

  //watch for changes in tutorial Files
  const watcher = vscode.workspace.createFileSystemWatcher('**/*.tut.json');
  watcher.onDidChange(() => {
    setConfig();
  });
  watcher.onDidCreate(() => {
    setConfig();
  });
  watcher.onDidDelete(() => {
    setConfig();
  });
};

const setConfig = () => {
  loadConfig().then((config) => {
    ReactPanel.currentPanel?.sendToView({
      command: 'setTutorials',
      tutorials: config,
    });
  });
};

export const deactivate = (): void => { /* do nothing */ };
