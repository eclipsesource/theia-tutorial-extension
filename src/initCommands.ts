import * as vscode from 'vscode';
import CLONEREPOCOMMAND from './Commands/CloneRepoCommand';
import EXECUTETESTSCOMMAND from './Commands/ExecuteTests';
import DISPLAYCONTENTCOMMAND from './Commands/DisplayContentCommand';
import ADDIMPORTSCOMMAND from './Commands/AddImportsCommand'
import getDisplayContentCommand from './Commands/DisplayContentCommand';

function initCommands(context: vscode.ExtensionContext) {
	// const DISPLAYCONTENTCOMMAND = getDisplayContentCommand(context)

	const commands = [
		CLONEREPOCOMMAND,
		DISPLAYCONTENTCOMMAND,
		EXECUTETESTSCOMMAND,
		ADDIMPORTSCOMMAND
	];

	context.subscriptions.push(...commands);
}

export default initCommands;

