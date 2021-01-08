import * as vscode from 'vscode';
import CLONEREPOCOMMAND from './Commands/CloneRepoCommand';
import EXECUTETESTSCOMMAND from './Commands/ExecuteTests';
import EXECUTETERMINALCOMMANDS from './Commands/ExecuteTerminalCommands';
import CHECKFILESCOMMAND from './Commands/CheckFilesCommand';
import ADDIMPORTSCOMMAND from './Commands/AddImportsCommand';
import OPENFILECOMMAND from './Commands/OpenFileCommand';
import FILEDIFFERENCECOMMAND from './Commands/FileDifferenceCommand';
import CHECKPROCESSCOMMAND from './Commands/CheckProcessCommand';
import {exec} from 'child_process';




function initCommands(context: vscode.ExtensionContext) {

	const commands = [
		CLONEREPOCOMMAND,
		EXECUTETESTSCOMMAND,
		EXECUTETERMINALCOMMANDS,
		CHECKFILESCOMMAND,
		ADDIMPORTSCOMMAND,
		OPENFILECOMMAND,
		FILEDIFFERENCECOMMAND,
		CHECKPROCESSCOMMAND
	];
	context.subscriptions.push(...commands);
}

export default initCommands;


function registerCommand(commandName: string, tasks: any = []): vscode.Disposable {
	const workspaceFolder: string = vscode.workspace.rootPath || '~';

	const REGISTERNEWCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.' + commandName, () => {
		registerCommand();
		async function registerCommand() {
			let today = new Date();
			let currentTimeStamp = today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + today.getDate() + '_' + today.getHours() + "_" + today.getMinutes() + "_" + today.getSeconds();;
			let tempTasks = Object.assign([], tasks);

			for (let task of tempTasks) {
				if (typeof task === 'object' && task !== null) {
					tempTasks.shift();
					tempTasks.unshift('mv ' + task.rootDir + ' .tmp/' + currentTimeStamp);
					tempTasks.unshift("mkdir -p .tmp/" + currentTimeStamp);
				}
			}

			for (let execTask of tempTasks) {
				console.log(execTask);
				await execShellCommand(execTask);
			}
		}
	});



	async function execShellCommand(cmd: string) {
		return new Promise((resolve, reject) => {
			process.chdir(workspaceFolder);
			exec(cmd, (error, stdout, stderr) => {
				if (error) {
					console.error(error);
				}
				resolve(stdout ? stdout : stderr);
			});
		});
	}


	return REGISTERNEWCOMMAND;
}