import * as vscode from 'vscode';
import initCommands from './initCommands';
import ReactPanel from './ReactPanel';
import {loadConfig} from './Commands/LoadConfigCommand';

const fs = require('fs');
const path = require('path');

export function activate(context: vscode.ExtensionContext) {

	initCommands(context);

	loadConfig().then(config => {
		context.subscriptions.push(vscode.commands.registerCommand('theiatutorialextension.displayContent', () => {
			ReactPanel.createOrShow(context.extensionPath);
		}));


		vscode.commands.executeCommand('theiatutorialextension.displayContent').then(() => {
			ReactPanel.currentPanel?.sendToView({command: 'setTutorials', tutorials: config});
		});
	});
}

export function deactivate() { }
