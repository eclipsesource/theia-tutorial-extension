import * as vscode from 'vscode';
import ReactPanel from '../ReactPanel';
const { exec } = require("child_process");

const EXECUTETESTSCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.executeTests', (tests: [any]) => {
    const outputChannel = vscode.window.createOutputChannel('executing tests');
    outputChannel.show();
    const workspaceFolder: string = vscode.workspace.rootPath || '~';
    
    
    tests.map((test)=>{
        test.tasks.map((task: string) => {
            exec(task, (error: any, stdout: string, stderr: string) => {
                if (error) {
                    outputChannel.append(`error: ${error.message}`);
                    ReactPanel.currentPanel?.sendToView({command: 'testResult', result: {text: `${test.text} failed: ${error.message}`, variant: 'error'}});
                    return;
                }
                if (stderr) {
                    outputChannel.append(`stderr: ${stderr}`);
                    ReactPanel.currentPanel?.sendToView({command: 'testResult', result: {text: `${stderr}`, variant: 'warning'}});
                    return;
                }
                outputChannel.append(`stdout: ${stdout}`);
                ReactPanel.currentPanel?.sendToView({command: 'testResult', result: {text: `${test.text} was run successfully`, variant: 'success'}});
            });
        });
        
    });
});

export default EXECUTETESTSCOMMAND;