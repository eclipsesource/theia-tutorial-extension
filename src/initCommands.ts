import * as vscode from 'vscode';
import CLONEREPOCOMMAND from './Commands/CloneRepoCommand';
import getDisplayContentCommand from './Commands/DisplayContentCommand';

function initCommands (context: vscode.ExtensionContext) {
	const DISPLAYCONTENTCOMMAND = getDisplayContentCommand(context)

	const commands = [
		CLONEREPOCOMMAND,
		DISPLAYCONTENTCOMMAND
	];

	context.subscriptions.push(...commands);
}

export default initCommands;

