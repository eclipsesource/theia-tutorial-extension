import * as vscode from 'vscode';
import CLONEREPOCOMMAND from './Commands/CloneRepoCommand';
import EXECUTETESTSCOMMAND from './Commands/ExecuteTests';
import INITEXERCISEZEROCOMMAND from './Commands/InitExerciseZero';

function initCommands (context: vscode.ExtensionContext) {

	const commands = [
		CLONEREPOCOMMAND,
		EXECUTETESTSCOMMAND,
		INITEXERCISEZEROCOMMAND,
		EXECUTETESTSCOMMAND
	];

	context.subscriptions.push(...commands);
}

export default initCommands;

