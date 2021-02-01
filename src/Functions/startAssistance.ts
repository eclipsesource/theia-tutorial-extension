
import {execShellCommand} from '../utils/commandUtil';
import * as vscode from 'vscode';
import {Assistance} from '../../schema/tutorial';

export const startAssistance = async (assistance: Assistance) => {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    await execShellCommand(`cd ` + workspaceFolder);

}