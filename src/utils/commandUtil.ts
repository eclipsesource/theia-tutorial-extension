import { exec } from 'child_process';
import * as vscode from 'vscode';

const workspaceFolder: string = vscode.workspace.rootPath || '~';

export async function execShellCommand(cmd: string) {

    process.chdir(workspaceFolder);

    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(error);
            }
            resolve(stdout? stdout : stderr);
        });
    });
}
