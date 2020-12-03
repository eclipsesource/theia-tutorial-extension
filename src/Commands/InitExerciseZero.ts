import { exec } from 'child_process';
import * as vscode from 'vscode';
import { exerciseFileName, extensionFileName } from './../utils/constant';
import ReactPanel from '../ReactPanel';

const INITEXERCISEZEROCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.initExerciseZero', async () => {
    const outputChannel = vscode.window.createOutputChannel('Initiating Exercise 0');
    outputChannel.show();
    const workspaceFolder: string = vscode.workspace.rootPath || '~';

    // TODO: Check and Install dependencies
    // TODO: Show progress bar Maybe?
    
    ReactPanel.currentPanel?.sendToView({command: 'setInfo', text:'We are solving Exercise 0 for you'});
    
    
    // Create Directory for Exercise 0
    await execShellCommand(`cd ` + workspaceFolder + ` && mkdir ${exerciseFileName}`).then( async () => {
        let yoTerminal = vscode.window.createTerminal("Generate theia-extension");
        
        // Create Terminal and execute yo command
        await createTerminal(yoTerminal).then((status)=>{
            if(status === 0) {
                vscode.window.showInformationMessage('Please wait...');
                // Execute yarn install command
                execShellCommand(`cd ` + workspaceFolder + `/${exerciseFileName}/ && yarn install`).then(
                    async () => {
                        console.log('Yarn install completed');
                        // Goto browser app,then execute yarn install
                        await execShellCommand(`cd ` + workspaceFolder + `/${exerciseFileName}/browser-app && yarn install`).then( async ()=>{
                            console.log('Yarn install in browser-app completed');

                            // Goto browser app,then execute yarn start
                            execShellCommand(`cd ` + workspaceFolder + `/${exerciseFileName}/browser-app && yarn start`);

                            vscode.window.showInformationMessage('Installation Complete!!');
                            ReactPanel.currentPanel?.sendToView({command: 'setInfo', text:'Installation Complete'});

                            vscode.window.showInformationMessage('You may now navigate to http://localhost:3000');
                            
                        });
                    }
                );
            }
        });
    });
});

async function execShellCommand(cmd: string) {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(error);
            }
            resolve(stdout? stdout : stderr);
        });
    });
}

function createTerminal(yoTerminal: vscode.Terminal) {
    return new Promise((resolve, reject) => {
        yoTerminal.show(true);
        yoTerminal.sendText(`cd ${exerciseFileName} && yo theia-extension -y empty --extensionName ${extensionFileName} && exit`, true);
        yoTerminal.sendText('', true);

        let asdf = setInterval(function() {
            if(yoTerminal.exitStatus?.code === 0) {
                clearInterval(asdf);
                resolve(yoTerminal.exitStatus?.code);
            }
        }, 5000);
         
    });
}



export default INITEXERCISEZEROCOMMAND;