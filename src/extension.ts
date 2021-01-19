import * as vscode from 'vscode';
import initCommands from './initCommands';
import ReactPanel from './ReactPanel';
import {loadConfig} from './Commands/LoadConfigCommand';

const fs = require('fs');
const path = require('path');

export const activate = (context: vscode.ExtensionContext) => {
	ReactPanel.createOrShow(context.extensionPath);

	initCommands(context);

	loadConfig().then(config => {

		ReactPanel.currentPanel?.sendToView({command: 'setTutorials', tutorials: config});
	});
}

export const deactivate = () => { }
