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
import * as fs from 'fs';
import * as path from 'path';
import { Uri } from 'vscode';

const createTutorialCommand: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.createTutorial', () => {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    const tutorialFolder = path.normalize(path.join(workspaceFolder, ".tutorial"));
    if (!fs.existsSync(tutorialFolder)) {
        fs.mkdirSync(tutorialFolder);
    }

    const newTutorial = path.normalize(path.join(workspaceFolder, '.tutorial/new.tut.json'));

    if (!fs.existsSync(newTutorial)) {
        fs.writeFileSync(
            newTutorial,
            JSON.stringify({ title: "New Tutorial", description: "This is a new tutorial. Use the autocomplete feature to create your tutorial." }, null, '\t'),
        );
    }
    const uri = Uri.file(newTutorial);
    vscode.commands.executeCommand('vscode.open', uri).then(
        () => {/** */ },
        (rej) => console.log(rej));

});

export default createTutorialCommand;