import * as vscode from 'vscode';
import { EXERCISE_PORT_NUMBER } from  '../utils/constant';
import { execShellCommand } from  '../utils/commandUtil';

const CHECKPROCESSCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.checkProcess', async () => {
    const outputChannel = vscode.window.createOutputChannel('Checking Processes');
    outputChannel.show();
        
    
    await execShellCommand(`kill -9 $(lsof -t -i:${EXERCISE_PORT_NUMBER})`).then( async () => {

        console.log('Process is checked and killed');
        outputChannel.appendLine('Process is checked and killed');

    
     });
});

export default CHECKPROCESSCOMMAND;
