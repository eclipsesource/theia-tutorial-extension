import * as vscode from 'vscode';
import { EXERCISE_PORT_NUMBER } from  '../utils/constant';
import { execShellCommand } from  '../utils/commandUtil';

const CHECKPROCESSCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.checkProcess', async (isProcessKilled?: boolean) => {
    const outputChannel = vscode.window.createOutputChannel('Checking Processes');
    outputChannel.show();
       
    await execShellCommand(`lsof -t -i:${EXERCISE_PORT_NUMBER}`).then( async (response) => {

        outputChannel.appendLine(`Process is checked`);
        console.log('Process is checked');
        if(response && !isProcessKilled){
            outputChannel.appendLine(`Process is running at port ${EXERCISE_PORT_NUMBER} with PID: ${response}`);
            vscode.window.showInformationMessage(`Process is running at port ${EXERCISE_PORT_NUMBER} with PID: ${response}`);
        }


        if(isProcessKilled){
            await execShellCommand(`kill -9 $(lsof -t -i:${EXERCISE_PORT_NUMBER})`).then( async () => {

                console.log('Process is checked and killed');
                outputChannel.appendLine('Process is checked and killed');
                vscode.window.showInformationMessage('Process is checked and killed');
        
             });
        }
    
    });
});

export default CHECKPROCESSCOMMAND;
