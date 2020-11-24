import * as vscode from 'vscode';
import CLONEREPOCOMMAND from './Commands/CloneRepoCommand';
import EXECUTETESTSCOMMAND from './Commands/ExecuteTests';

function initCommands(context: vscode.ExtensionContext) {
	const commands = [
		CLONEREPOCOMMAND,
		EXECUTETESTSCOMMAND
	];

	context.subscriptions.push(...commands);
}

export default initCommands;

