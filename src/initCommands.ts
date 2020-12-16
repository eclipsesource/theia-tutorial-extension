import * as vscode from 'vscode';
import CLONEREPOCOMMAND from './Commands/CloneRepoCommand';
import EXECUTETESTSCOMMAND from './Commands/ExecuteTests';
// import INITEXERCISEZEROCOMMAND from './Commands/InitExerciseZero';
import CHECKFILESCOMMAND from './Commands/CheckFilesCommand';
import ADDIMPORTSCOMMAND from './Commands/AddImportsCommand';
import OPENFILECOMMAND from './Commands/OpenFileCommand';
import FILEDIFFERENCECOMMAND from './Commands/FileDifferenceCommand';
import { exec } from 'child_process';


function initCommands(context: vscode.ExtensionContext, config: any) {

	const commands = [
		CLONEREPOCOMMAND,
		EXECUTETESTSCOMMAND,
		// INITEXERCISEZEROCOMMAND,
		CHECKFILESCOMMAND,
		ADDIMPORTSCOMMAND,
		OPENFILECOMMAND,
		FILEDIFFERENCECOMMAND
	];

	for(let array of config) {
		for(let tutorial of array.tutorial) {
			for(let bringToRequiredStat of tutorial.bringToRequiredStat) {
				if (bringToRequiredStat.name) {
					commands.push(registerCommand(bringToRequiredStat.name, bringToRequiredStat.tasks));
				}
			}
		}
	}
	context.subscriptions.push(...commands);
}

export default initCommands;


function registerCommand (commandName: string, tasks: []): vscode.Disposable {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';

	const REGISTERNEWCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.'+commandName, () => {
		registerCommand();
		async function registerCommand() {
			for(let task of tasks) {
				await execShellCommand(task);
			}
		}
	});

	function execShellCommand(cmd: string) {
		return new Promise((resolve, reject) => {
			process.chdir(workspaceFolder);
			exec(cmd, (error, stdout, stderr) => {
				if (error) {
					console.error(error);
				}
				resolve(stdout? stdout : stderr);
			});
		});
	}

	return REGISTERNEWCOMMAND;
}