import { exerciseFileName, extensionFileName } from './../utils/constant';
import * as vscode from 'vscode';
const fs = require('fs');
const path = require('path');

  const CHECKFILESCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.checkExerciseFiles', () => {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';

    const outputChannel = vscode.window.createOutputChannel('checking files');
    outputChannel.show();

    const files = getAllFiles(workspaceFolder+'/'+exerciseFileName, outputChannel);
    outputChannel.appendLine(`all files`);
    outputChannel.appendLine(`${files}`);

    const correctFiles = getCorrectFilePaths(workspaceFolder+'/'+exerciseFileName);

    const isFileListCorrect = compareFileLists(correctFiles, files);

    if(isFileListCorrect) {
      vscode.window.showInformationMessage(`all files are checked and folder structure is correct`);
    }
    else {
      vscode.window.showInformationMessage(`There is a problem in your folder structure of Exercise 0`);
    }
  });

  const compareFileLists = (correctFileList: string[], fileList: string[]) => (
    JSON.stringify(correctFileList) === JSON.stringify(fileList)
  );


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

  const getCorrectFilePaths = (extensionFolder: string) => {
    const fileNames = [
      '/.gitignore',
      '/.vscode/launch.json',
      `/${extensionFileName}/lib`,
      `/${extensionFileName}/node_modules`,
      `/${extensionFileName}/package.json`,
      `/${extensionFileName}/src/browser/HelloWorld-contribution.ts`,
      `/${extensionFileName}/src/browser/HelloWorld-frontend-module.ts`,
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
