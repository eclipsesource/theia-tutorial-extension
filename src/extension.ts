// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
var cmd = require('node-cmd');

import initCommands from './initCommands';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "theiatutorialextension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	let disposable2 = vscode.commands.registerCommand('theiatutorialextension.executeTests', () => {
		// The code you place here will be executed every time your command is executed

		cmd.run(
			`cd .\.tutorialRepo\tutorial1\
	npm test`,
			//@ts-ignore
			function (err, data, stderr) {
				let data2 = data;
				console.log('test Result : ', data)
			}
		);
	});

	context.subscriptions.push(disposable2);
	initCommands(context);
}

// this method is called when your extension is deactivated
export function deactivate() { }
