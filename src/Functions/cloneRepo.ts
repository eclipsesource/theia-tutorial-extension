import * as vscode from 'vscode';
import {exec} from 'child_process';

const cloneRepo = (workspaceFolder: string, repo: string, outputChannel: vscode.OutputChannel): void => {
  const executionString = `git clone ${repo} ${workspaceFolder}/.tutorialRepo`;
  const cleanFolder = `rm -r ${workspaceFolder}/.tutorialRepo`;

  exec(cleanFolder);


  outputChannel.show();

  const gitInstallProcess = exec(executionString, (error, stdout, stderr) => {
    if (stderr) {
      outputChannel.appendLine(stderr);
      return;
    }

    if (error !== null) {
      outputChannel.appendLine('error');
      return;
    }

    outputChannel.append(stdout);
  });

  gitInstallProcess.on('close', () => {
    vscode.window.showInformationMessage('Course successfully Cloned');
  });
}


export default cloneRepo;
