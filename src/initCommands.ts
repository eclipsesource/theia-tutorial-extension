import * as vscode from 'vscode';
import CLONEREPOCOMMAND from './Commands/CloneRepoCommand';
import EXECUTETESTSCOMMAND from './Commands/ExecuteTests';
// import INITEXERCISEZEROCOMMAND from './Commands/InitExerciseZero';
import CHECKFILESCOMMAND from './Commands/CheckFilesCommand';
import ADDIMPORTSCOMMAND from './Commands/AddImportsCommand';
import { exec } from 'child_process';



function initCommands(context: vscode.ExtensionContext, config: any) {

	const commands = [
		CLONEREPOCOMMAND,
		EXECUTETESTSCOMMAND,
		// INITEXERCISEZEROCOMMAND,
		CHECKFILESCOMMAND,
		ADDIMPORTSCOMMAND
	];

	for(let array of config) {
		for(let tutorial of array.tutorial) {
			for(let bringToRequiredStat of tutorial.bringToRequiredStat) {
				if (bringToRequiredStat.name && bringToRequiredStat.subtype === "init") {
					commands.push(registerCommand(bringToRequiredStat.name, bringToRequiredStat.tasks));
				}
				else if (bringToRequiredStat.name && bringToRequiredStat.subtype === "reset") {
					// Initiate Reset Protocol.
					bringToRequiredStat.tasks = [];
					bringToRequiredStat.tasks.push({
						name: "exec_reset_protocol",
						rootDir: bringToRequiredStat.rootDir
					});

					// append the appropriate init command to taskLists.
					for(let array of config) {
						for(let tutorial of array.tutorial) {
							for(let filterBringToRequiredStat of tutorial.bringToRequiredStat) {
								if(filterBringToRequiredStat.name === bringToRequiredStat.executeNext) {
									for (let initTask of filterBringToRequiredStat.tasks) {
										bringToRequiredStat.tasks.push(initTask);
									}
								}
							}
						}
					}
					commands.push(registerCommand(bringToRequiredStat.name, bringToRequiredStat.tasks));
				}
			}
		}
	}
	context.subscriptions.push(...commands);
}

export default initCommands;


function registerCommand (commandName: string, tasks:any = []): vscode.Disposable {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';

	const REGISTERNEWCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.'+commandName, () => {
		registerCommand();
		async function registerCommand() {
			let today = new Date();
			let currentTimeStamp = today.getFullYear()+'_'+(today.getMonth()+1)+'_'+today.getDate()+'_'+today.getHours() + "_" + today.getMinutes() + "_" + today.getSeconds();;
			let tempTasks = Object.assign([], tasks);

			for(let task of tempTasks) {
				if(typeof task === 'object' && task !== null) {
					tempTasks.shift();
					tempTasks.unshift('mv '+ task.rootDir +' .tmp/' +currentTimeStamp);
					tempTasks.unshift("mkdir -p .tmp/"+ currentTimeStamp);
				}
			}

			for(let execTask of tempTasks) {
				console.log(execTask);
				await execShellCommand(execTask);
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