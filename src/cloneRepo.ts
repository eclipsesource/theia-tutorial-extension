import * as vscode from 'vscode';
import { exec } from 'child_process';

function cloneRepo (workspaceFolder: string, repo: string, outputChannel: vscode.OutputChannel): void {
    const executionString = `git clone ${repo} ${workspaceFolder}/.tutorialRepo`;
    const cleanFolder = `rm -r ${workspaceFolder}/.tutorialRepo`;

    exec(cleanFolder);


    outputChannel.show();

    const gitInstallProcess = exec(executionString, (error, stdout, stderr) => {
      if (stderr) {
        console.log('stderr: ', stderr);
        outputChannel.appendLine(stderr);
        return;
      }
  
      if (error !== null) {
        console.log('stderr: ', error);
        outputChannel.appendLine('error');
        return;
      }
      
      outputChannel.append(stdout);
    });
  
    gitInstallProcess.on('close', () => {
      console.log('Git Clone Process Closed');
      vscode.window.showInformationMessage('Course successfully Cloned');
    });
  }


export default cloneRepo;
