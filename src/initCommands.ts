import * as vscode from 'vscode';
import CLONEREPOCOMMAND from './Commands/CloneRepoCommand';
import EXECUTETESTSCOMMAND from './Commands/ExecuteTests';
import INITEXERCISEZEROCOMMAND from './Commands/InitExerciseZero';
import DISPLAYCONTENTCOMMAND from './Commands/DisplayContentCommand';

import getDisplayContentCommand from './Commands/DisplayContentCommand';

function initCommands (context: vscode.ExtensionContext) {
	// const DISPLAYCONTENTCOMMAND = getDisplayContentCommand(context)

	const commands = [
		CLONEREPOCOMMAND,
		DISPLAYCONTENTCOMMAND,
		EXECUTETESTSCOMMAND,
		INITEXERCISEZEROCOMMAND,
		EXECUTETESTSCOMMAND
	];

	context.subscriptions.push(...commands);
}

export default initCommands;

