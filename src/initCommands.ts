import * as vscode from 'vscode';
import CLONEREPOCOMMAND from './Commands/CloneRepoCommand';

function initCommands (context: vscode.ExtensionContext) {
	const commands = [
		CLONEREPOCOMMAND
	];

	context.subscriptions.push(...commands);
}

export default initCommands;

