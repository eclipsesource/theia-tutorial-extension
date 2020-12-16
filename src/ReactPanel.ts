import * as vscode from 'vscode';
const path = require('path');

class ReactPanel {
	/**
	 * Track the currently panel. Only allow a single panel to exist at a time.
	 */
	public static currentPanel: ReactPanel | undefined;

	private static readonly viewType = 'react';

	private readonly _panel: vscode.WebviewPanel;
	private readonly _extensionPath: string;
	private _disposables: vscode.Disposable[] = [];

	public static createOrShow(extensionPath: string) {
		const column = vscode.ViewColumn.Two;

		// If we already have a panel, show it.
		// Otherwise, create a new panel.
		if (ReactPanel.currentPanel) {
			ReactPanel.currentPanel._panel.reveal(column);
		} else {
			ReactPanel.currentPanel = new ReactPanel(extensionPath, column || vscode.ViewColumn.Two);
		}
	}

	private constructor(extensionPath: string, column: vscode.ViewColumn) {
		this._extensionPath = extensionPath;

		// Create and show a new webview panel
		this._panel = vscode.window.createWebviewPanel(ReactPanel.viewType, "Theia Tutorial", column, {
			// Enable javascript in the webview
			enableScripts: true,

		});

		vscode.commands.executeCommand('vscode.setEditorLayout', {
			orientation: 0,
			groups: [{size: 0.5}, {size: 0.5}],
		});

		// Set the webview's initial html content 
		this._panel.webview.html = this._getHtmlForWebview();

		// Listen for when the panel is disposed
		// This happens when the user closes the panel or when the panel is closed programatically
		this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

		// Handle messages from the webview
		this._panel.webview.onDidReceiveMessage(message => {
			switch (message.command) {
				case 'showInformationMessage':
					vscode.window.showInformationMessage(message.text);
					break;
				case 'initExerciseZero':
					vscode.commands.executeCommand('theiatutorialextension.initExerciseZero');
					break;
				case 'checkExerciseFiles':
					vscode.commands.executeCommand('theiatutorialextension.checkExerciseFiles', message.fileList);
					break;
				case 'addImports':
					vscode.commands.executeCommand('theiatutorialextension.addImports', message.autoImportData);
					break;
				case 'openFile':
					vscode.commands.executeCommand('theiatutorialextension.openFile', message.filename);
					break;
				case 'fileDiff':
					vscode.commands.executeCommand('theiatutorialextension.fileDiff', message.filename, message.solution);
					break;
			}
		}, null, this._disposables);

		//setTimeout(() => this._panel.webview.postMessage({text: 'Hello from Ext'}),5000);
	}

	public sendToView(data: any) {
		this._panel.webview.postMessage(data);
	}

	public dispose() {
		ReactPanel.currentPanel = undefined;

		// Clean up our resources
		this._panel.dispose();

		while (this._disposables.length) {
			const x = this._disposables.pop();
			if (x) {
				x.dispose();
			}
		}
	}

	private _getHtmlForWebview() {
		const manifest = require(path.join(this._extensionPath, 'out', 'asset-manifest.json'));
		const mainScript = manifest['main.js'];
		const mainStyle = manifest['main.css'];

		const scriptPathOnDisk = vscode.Uri.file(path.join(this._extensionPath, 'out', mainScript));
		const scriptUri = scriptPathOnDisk.with({scheme: 'vscode-resource'});
		const stylePathOnDisk = vscode.Uri.file(path.join(this._extensionPath, 'out', mainStyle));
		const styleUri = stylePathOnDisk.with({scheme: 'vscode-resource'});

		// Use a nonce to whitelist which scripts can be run
		const nonce = getNonce();

		return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
				<meta name="theme-color" content="#000000">
				<title>React App</title>
				<link rel="stylesheet" type="text/css" href="${styleUri}">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src vscode-resource: https:; script-src 'nonce-${nonce}';style-src vscode-resource: 'unsafe-inline' http: https: data:;">
				<base href="${vscode.Uri.file(path.join(this._extensionPath, 'out')).with({scheme: 'vscode-resource'})}/">
			</head>

			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<div id="root"></div>
				
				<script nonce="${nonce}" src="${scriptUri}"></script>
			</body>
			</html>`;
	}
}

function getNonce() {
	let text = "";
	const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

export default ReactPanel;