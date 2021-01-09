import { exerciseFileName, extensionFileName } from './../utils/constant';
import * as vscode from 'vscode';
import ReactPanel from '../ReactPanel';
const fs = require('fs');
const path = require('path');

  const CHECKFILESCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.checkExerciseFiles', (fileList?: string[], openModal?: boolean) => {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';

    const outputChannel = vscode.window.createOutputChannel('checking files');
    outputChannel.show();
    
    if(checkExerciseFile(workspaceFolder)){
      const files = getAllFiles(workspaceFolder+'/'+exerciseFileName, outputChannel);
      outputChannel.appendLine(`all files`);
      outputChannel.appendLine(`${files}`);

      outputChannel.appendLine(`fileList from config`);
      outputChannel.appendLine(`${fileList}`);
     
  
      // const correctFiles = getCorrectFilePaths(workspaceFolder+'/'+exerciseFileName);
      const correctFilesFromConfig = fileList ? getCorrectFilePathsFromConfig(workspaceFolder+'/'+exerciseFileName, fileList) : getCorrectFilePaths(workspaceFolder+'/'+exerciseFileName);
      outputChannel.appendLine(`${correctFilesFromConfig}`);
      const isFileListCorrect = compareFileLists(correctFilesFromConfig, files);
  
      if(isFileListCorrect) {
        vscode.window.showInformationMessage(`all files are checked and folder structure is correct`);
        ReactPanel.currentPanel?.sendToView({command: 'setInfo', text:'You are good to go! All files are in their correct place.'});
        if(openModal){
          ReactPanel.currentPanel?.sendToView({command: 'checkFilesResult', result: true});
        }
      }
      else {
        vscode.window.showInformationMessage(`There is a problem in your folder structure of the tutorial`);
        ReactPanel.currentPanel?.sendToView({command: 'setInfo', text:"Oooops... your workspace doesn't reflect the desired start state."});
        if(openModal){
        ReactPanel.currentPanel?.sendToView({command: 'checkFilesResult', result: false});
        }
      }
    }
    else {
      vscode.window.showInformationMessage(`You don't have theia-extension folder. You should execute Init Exercise 0.`);
      if(openModal){
        ReactPanel.currentPanel?.sendToView({command: 'checkFilesResult', result: false});
      }
    }


  });

  const compareFileLists = (correctFileList: string[], fileList: string[]) => {
    for(var i=0; i < correctFileList.length; i++){
      if(!fileList.includes(correctFileList[i])){
        return false;
      }
    }
    return true;
  };

  const checkExerciseFile = (workspaceFolder: string) => {
    return fs.existsSync(path.join(workspaceFolder, exerciseFileName));
  };

  const getAllFiles = (dir: string, outputChannel:any) => (
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

  const getCorrectFilePaths = (extensionFolder: string) => {
    const fileNames = [
      '/.gitignore',
      '/.vscode/launch.json',
      `/${extensionFileName}/lib`,
      `/${extensionFileName}/node_modules`,
      `/${extensionFileName}/package.json`,
      `/${extensionFileName}/src/browser/${extensionFileName}-contribution.ts`,
      `/${extensionFileName}/src/browser/${extensionFileName}-frontend-module.ts`,
      `/${extensionFileName}/tsconfig.json`,
      '/README.md',
      '/browser-app/gen-webpack.config.js',
      '/browser-app/lib',
      '/browser-app/node_modules',
      '/browser-app/package.json',
      '/browser-app/src-gen/backend/main.js',
      '/browser-app/src-gen/backend/server.js',
      '/browser-app/src-gen/frontend/index.html',
      '/browser-app/src-gen/frontend/index.js',
      '/browser-app/webpack.config.js',
      '/electron-app/gen-webpack.config.js',
      '/electron-app/lib',
      '/electron-app/node_modules',
      '/electron-app/package.json',
      '/electron-app/src-gen/backend/main.js',
      '/electron-app/src-gen/backend/server.js',
      '/electron-app/src-gen/frontend/electron-main.js',
      '/electron-app/src-gen/frontend/index.html',
      '/electron-app/src-gen/frontend/index.js',
      '/electron-app/webpack.config.js',
      '/lerna.json',
      '/node_modules',
      '/package.json',
      '/yarn.lock'
      ];
    
    return fileNames.map((name) => (extensionFolder + name));
  };

export default CHECKFILESCOMMAND;
