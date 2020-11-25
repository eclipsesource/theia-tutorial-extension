import * as vscode from 'vscode';
var cmd = require('node-cmd');

const EXECUTETESTSCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.executeTests', () => {
    const outputChannel = vscode.window.createOutputChannel('executing tests');
    outputChannel.show();
    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    cmd.run(
        `cd ` + workspaceFolder + `/.tutorialRepo/tutorial1 & npm test`,
        //@ts-ignore
        function (err, data, stderr) {
            outputChannel.append(stderr);
            outputChannel.append(data);
        }
    );
});



export default EXECUTETESTSCOMMAND;