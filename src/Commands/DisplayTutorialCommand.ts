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
import {loadConfig} from '../Functions/loadConfig';
import ReactPanel from '../ReactPanel';

const displayTutorialCommand: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.displayTutorial', () => {
    ReactPanel.createOrShow();
    loadConfig().then(config => {
        ReactPanel.currentPanel?.sendToView({command: 'setTutorials', tutorials: config});
    });
});

export default displayTutorialCommand;