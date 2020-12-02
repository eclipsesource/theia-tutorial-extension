import * as vscode from 'vscode';
import CLONEREPOCOMMAND from './Commands/CloneRepoCommand';
import EXECUTETESTSCOMMAND from './Commands/ExecuteTests';
import INITEXERCISEZEROCOMMAND from './Commands/InitExerciseZero';
import CHECKFILESCOMMAND from './Commands/CheckFilesCommand';
import ADDIMPORTSCOMMAND from './Commands/AddImportsCommand'



function initCommands(context: vscode.ExtensionContext) {

	const commands = [
		CLONEREPOCOMMAND,
		EXECUTETESTSCOMMAND,
		INITEXERCISEZEROCOMMAND,
		CHECKFILESCOMMAND,
		ADDIMPORTSCOMMAND
	];

	context.subscriptions.push(...commands);
}

export default initCommands;

