// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import initCommands from './initCommands';
import ReactPanel from './ReactPanel';

const fs = require('fs');
const path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand('theiatutorialextension.displayContent', () => {
		ReactPanel.createOrShow(context.extensionPath);
	}));
	
	//ReactPanel.currentPanel?.sendToView('info', 'Hello from Extension to React');

	initCommands(context);
	
}

// this method is called when your extension is deactivated
export function deactivate() { }
