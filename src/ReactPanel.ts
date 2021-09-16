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
import {
  Command,
  CheckIfFilesExist,
  AutomaticImport,
  OpenFile,
  FileDiff,
  TerminalCommands,
  Assistance,
} from '../schema/tutorial';
import {checkFiles, } from './Functions/checkFiles';
import {addImports} from './Functions/addImports';
import {openFile} from './Functions/openFile';
import {cleanExcerciseFolder} from "./Functions/cleanExcerciseFolder";
import {startAssistance} from './Functions/startAssistance';
import {fileDifference} from './Functions/fileDifference';
import {executeTerminalCommands} from './Functions/executeTerminalCommands';
const path = require('path');

class ReactPanel {
  public static currentPanel: ReactPanel | undefined;
  private static readonly viewType = 'react';
  private readonly _panel: vscode.WebviewPanel;
  private static _extensionPath: string;
  private _disposables: vscode.Disposable[] = [];

  public static createOrShow(extensionPath?: string) {
    const column = vscode.ViewColumn.Two;

    if (ReactPanel.currentPanel) {
      ReactPanel.currentPanel._panel.reveal(column);
    } else if (extensionPath) {
      ReactPanel.currentPanel = new ReactPanel(extensionPath, column || vscode.ViewColumn.Two);
    } else {
      ReactPanel.currentPanel = new ReactPanel(ReactPanel._extensionPath, column || vscode.ViewColumn.Two);
    }
  }

  private constructor(extensionPath: string, column: vscode.ViewColumn) {
    ReactPanel._extensionPath = extensionPath;
    this._panel = vscode.window.createWebviewPanel(
      ReactPanel.viewType,
      'Tutorial',
      column,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
      }
    );
    vscode.commands.executeCommand('vscode.setEditorLayout', {
      orientation: 0,
      groups: [{size: 0.5}, {size: 0.5}],
    });
    this._panel.webview.html = this._getHtmlForWebview();
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
    this._panel.webview.onDidReceiveMessage(
      (message: {
        commands: Array<Command>;
        ids: Array<String>;
        exerciseFolder: String;
      }) => {
        this.processCommands(
          message.commands,
          message.ids,
          message.exerciseFolder
        );
      },
      null,
      this._disposables
    );
  }

  private async processCommands(
    commands: Array<Command>,
    ids: Array<String>,
    exerciseFolder: String
  ) {
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i];
      switch (Object.keys(command)[0]) {
        case 'checkIfFilesExist':
          let checkFilesCommand = command as CheckIfFilesExist;
          checkFiles(checkFilesCommand, ids[commands.indexOf(command)]);
          break;
        case 'automaticImport':
          let automaticImport = command as AutomaticImport;
          addImports(automaticImport, ids[commands.indexOf(command)]);
          break;
        case 'openFile':
          let openFileInput = command as OpenFile;
          await openFile(openFileInput, ids[commands.indexOf(command)]);
          break;
        case 'fileDiff':
          let fileDiff = command as FileDiff;
          await fileDifference(fileDiff, ids[commands.indexOf(command)]);
          break;
        case 'terminalCommands':
          let terminalCommands = command as TerminalCommands;
          await executeTerminalCommands(terminalCommands, ids[commands.indexOf(command)]);
          break;
        case 'cleanExerciseFolder':
          cleanExcerciseFolder(exerciseFolder, ids[commands.indexOf(command)]);
          break;
        case 'assistance':
          let assistance = command as Assistance;
          startAssistance(assistance, ids[commands.indexOf(command)]);
          break;
      }
      await new Promise(r => setTimeout(r, 500));
    }
  }

  public sendToView(data: any) {
    this._panel.webview.postMessage(data);
  }

  public dispose() {
    ReactPanel.currentPanel = undefined;
    this._panel.dispose();
    while (this._disposables.length) {
      const x = this._disposables.pop();
      if (x) {
        x.dispose();
      }
    }
  }

  private _getHtmlForWebview() {
    const manifest = require(path.join(
      ReactPanel._extensionPath,
      'out',
      'asset-manifest.json'
    ));
    const mainScript = manifest['main.js'];
    const mainStyle = manifest['main.css'];

    const scriptPathOnDisk = vscode.Uri.file(
      path.join(ReactPanel._extensionPath, 'out', mainScript)
    );
    const scriptUri = scriptPathOnDisk.with({scheme: 'vscode-resource'});
    const stylePathOnDisk = vscode.Uri.file(
      path.join(ReactPanel._extensionPath, 'out', mainStyle)
    );
    const styleUri = stylePathOnDisk.with({scheme: 'vscode-resource'});

    const nonce = getNonce();

    return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
				<meta name="theme-color" content="#000000">
				<title>React App</title>
				<link rel="stylesheet" type="text/css" href="${styleUri}">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src vscode-resource: https:; script-src 'nonce-${nonce}';style-src vscode-resource: 'unsafe-inline' http: https: data:;">
				<base href="${vscode.Uri.file(path.join(ReactPanel._extensionPath, 'out')).with({
      scheme: 'vscode-resource',
    })}/">
			</head>

			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<div id="root"></div>
				
				<script nonce="${nonce}" src="${scriptUri}"></script>
			</body>
			</html>`;
  }
}

const getNonce = () => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export default ReactPanel;
