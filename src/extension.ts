// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import initCommands from './initCommands';

const
	io = require("socket.io"),
	server = io.listen(3000);

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "theiatutorialextension" is now active!');



	//@ts-ignore
	server.on("connection", (socket) => {
		vscode.window.showInformationMessage("Client connected");
		socket.on("join", () => {
			vscode.window.showInformationMessage('client joined');
		})
	});

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	initCommands(context);
}

// this method is called when your extension is deactivated
export function deactivate() { }
