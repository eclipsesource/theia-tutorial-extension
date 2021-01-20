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
const {exec} = require("child_process");
const fs = require('fs');
const path = require('path');


const EXECUTETESTSCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.executeTests', (tests: [any]) => {

    const workspaceFolder: string = vscode.workspace.rootPath || '~';



    tests.map((test) => {
        switch (test.type) {
            case "testExecution":
                test.tasks.map((task: string) => {
                    exec(task, (error: any, stdout: string, stderr: string) => {
                        if (error) {
                            ReactPanel.currentPanel?.sendToView({command: 'testResult', result: {text: `${test.text} failed: ${error.message}`, variant: 'error'}});
                            return;
                        }
                        if (stderr) {
                            ReactPanel.currentPanel?.sendToView({command: 'testResult', result: {text: `${stderr}`, variant: 'warning'}});
                            return;
                        }
                        ReactPanel.currentPanel?.sendToView({command: 'testResult', result: {text: `${test.text} was run successfully`, variant: 'success'}});
                    });
                });
                break;
            case "contentCheck":
                const filepath = path.join(workspaceFolder, test.fileName);
                ReactPanel.currentPanel?.sendToView({command: 'testResult', result: {text: `Testing: "${test.text}"`, variant: 'default'}});
                setTimeout(() => {
                    fs.readFile(filepath, (err: any, data: string) => {
                        (test.contains.every((testString: string) => data.includes(testString))) ? ReactPanel.currentPanel?.sendToView({command: 'testResult', result: {text: `"${test.text}" was run successfully`, variant: 'success', preventDuplicate: true}}) : ReactPanel.currentPanel?.sendToView({command: 'testResult', result: {text: `${test.text} failed`, variant: 'error'}});;
                    });
                }, 2000);

                break;

        }


    });
});

export default EXECUTETESTSCOMMAND;