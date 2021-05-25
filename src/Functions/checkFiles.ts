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
import {CheckIfFilesExist} from '../../schema/tutorial';

const fs = require('fs');
const path = require('path');

export const checkFiles = (checkIfFilesExist: CheckIfFilesExist, id: String) => {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';


    if (checkExerciseFile(workspaceFolder)) {
        let files = getAllFiles(workspaceFolder);

        files = files.map((filePath: string) => path.normalize(filePath));

        const correctFilesFromConfig = getCorrectFilePathsFromConfig(workspaceFolder, checkIfFilesExist.checkIfFilesExist!);
        const isFileListCorrect = compareFileLists(correctFilesFromConfig, files);

        if (isFileListCorrect) {
            vscode.window.showInformationMessage(`all files are checked and folder structure is correct`);
            ReactPanel.currentPanel?.sendToView({command: 'setInfo', text: 'You are good to go! All files are in their correct place.'});
            ReactPanel.currentPanel?.sendToView({id: id, result: true});
        }
        else {
            vscode.window.showInformationMessage(`There is a problem in your folder structure of the tutorial`);
            ReactPanel.currentPanel?.sendToView({command: 'setInfo', text: "Oooops... your workspace doesn't reflect the desired state."});
            ReactPanel.currentPanel?.sendToView({id: id, result: false});
        }
    }
    else {
        vscode.window.showInformationMessage(`You don't have theia-extension folder. You should execute Init Exercise 0.`);
        ReactPanel.currentPanel?.sendToView({id: id, result: false});
    }
};

const compareFileLists = (correctFileList: string[], fileList: string[]) => {
    for (var i = 0; i < correctFileList.length; i++) {
        if (!fileList.includes(correctFileList[i])) {
            return false;
        }
    }
    return true;
};

const checkExerciseFile = (workspaceFolder: string) => {
    return fs.existsSync(workspaceFolder);
};

const getAllFiles = (dir: string) => (
    fs.readdirSync(dir).reduce((files: string[], file: string) => {


        const name = path.join(dir, file);


        const isDirectory = fs.statSync(name).isDirectory();

        return isDirectory && (file !== 'node_modules' && file !== 'lib') ?
            [...files, ...getAllFiles(name)] : [...files, name];
    }, [])
);

const getCorrectFilePathsFromConfig = (exerciseFilePath: string, fileList: string[]) => {
    return fileList.map((name) => (path.normalize(path.join(exerciseFilePath, name))));
};