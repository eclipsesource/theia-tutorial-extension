import {exerciseFileName, extensionFileName} from './../utils/constant';
import * as vscode from 'vscode';
import ReactPanel from '../ReactPanel';
import {CheckIfFilesExist} from '../../schema/tutorial';

const fs = require('fs');
const path = require('path');

const CHECKFILESCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.checkExerciseFiles', (checkIfFilesExist: CheckIfFilesExist, id: string) => {
  const workspaceFolder: string = vscode.workspace.rootPath || '~';

  const outputChannel = vscode.window.createOutputChannel('checking files');
  outputChannel.show();

  if (checkExerciseFile(workspaceFolder)) {
    const files = getAllFiles(workspaceFolder + '/' + exerciseFileName, outputChannel);
    outputChannel.appendLine(`all files`);
    outputChannel.appendLine(`${files}`);

    outputChannel.appendLine(`fileList from config`);
    outputChannel.appendLine(`${checkIfFilesExist.checkIfFilesExist}`);


    // const correctFiles = getCorrectFilePaths(workspaceFolder+'/'+exerciseFileName);
    const correctFilesFromConfig = getCorrectFilePathsFromConfig(workspaceFolder + '/' + exerciseFileName, checkIfFilesExist.checkIfFilesExist!);
    outputChannel.appendLine(`${correctFilesFromConfig}`);
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
    ReactPanel.currentPanel?.sendToView({command: 'checkFilesResult', result: false});
  }


});

const compareFileLists = (correctFileList: string[], fileList: string[]) => {
  for (var i = 0; i < correctFileList.length; i++) {
    if (!fileList.includes(correctFileList[i])) {
      return false;
    }
  }
  return true;
};

const checkExerciseFile = (workspaceFolder: string) => {
  return fs.existsSync(path.join(workspaceFolder, exerciseFileName));
};

const getAllFiles = (dir: string, outputChannel: any) => (
  fs.readdirSync(dir).reduce((files: any, file: any) => {

    outputChannel.appendLine(`file ${file}`);

    const name = path.join(dir, file);

    outputChannel.appendLine(`name ${name}`);

    const isDirectory = fs.statSync(name).isDirectory();

    return isDirectory && (file !== 'node_modules' && file !== 'lib') ?
      [...files, ...getAllFiles(name, outputChannel)] : [...files, name];
  }, [])
);

const getCorrectFilePathsFromConfig = (exerciseFilePath: string, fileList: string[]) => {
  return fileList.map((name) => (exerciseFilePath + name));
};

export default CHECKFILESCOMMAND;
