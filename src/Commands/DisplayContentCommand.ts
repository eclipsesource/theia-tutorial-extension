import * as vscode from 'vscode';
const fs = require('fs');
const path = require('path');

  const DISPLAYCONTENTCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.displayContent', () => {
    const workspaceFolder: string = vscode.workspace.rootPath || '~';


    vscode.commands.executeCommand('vscode.setEditorLayout', {
      orientation: 0,
      groups: [{size: 0.6}, {size: 0.4}],
    })

    const panel = vscode.window.createWebviewPanel(
      'react', // Identifies the type of the webview. Used internally
      'Theia Tutorial', // Title of the panel displayed to the user
      vscode.ViewColumn.Two, // Editor column to show the new webview panel in.
      {
        enableScripts: true,
        retainContextWhenHidden: true,
      } // Webview options. More on these later.
    );
    let nextStep = false;
    let isStateChecked = false;

    // And set its HTML content
    panel.webview.html = getWebviewContent(nextStep, isStateChecked);

    // Handle messages from the webview
    panel.webview.onDidReceiveMessage(
      message => {
        switch (message.command) {
          case 'nextStep':
            vscode.window.showInformationMessage('Next Step')

            nextStep = message.value;
            panel.webview.html = getWebviewContent(nextStep, isStateChecked);
            return;

          case 'checkState':

            if (message.value) {
              checkCurrentState();
              panel.webview.html = getWebviewContent(nextStep, isStateChecked);
            }
            return;
        }
      },
      undefined,
      // context.subscriptions
    );


    const checkCurrentState = () => {
      isStateChecked = fs.existsSync(path.join(workspaceFolder, ".tutorialRepo"));
      vscode.window.showInformationMessage('Current State is checked')
    }

  });




function getWebviewContent(nextStep: Boolean, isStateChecked: Boolean) {


  return !nextStep ?
    `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Tutorial</title>
  </head>
  <body>
  <div style="display: flex; flex-direction: column">
    <h1>Welcome to the Theia Tutorial</h1>
    <h4>Please do the following steps</h4>
		<img src="https://cdn.discordapp.com/attachments/776068333124452376/781103263486967818/this.gif" width="100%" />
    <button style="margin: 20px; width: fit-content" onclick="checkState()">Check the current state</button> 
    <button id="stateButton" style="margin: 20px; width: fit-content" onclick="goToNextStep()" ` + (isStateChecked ? `` : `disabled`) + `>Next Step</button> 
  </div>
  
  <script>
  const vscode = acquireVsCodeApi();

  function goToNextStep(){

      vscode.postMessage({
        command: 'nextStep',
        value: true
    })
  }


  function checkState(){

    vscode.postMessage({
      command: 'checkState',
      value: true
  })

}

  </script>
  </body>
  </html>`

    :

    `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Tutorial Success</title>
  </head>
  <body>
  <div style="display: flex; flex-direction: column">
    <h1>You successfully completed the first tutorial</h1>
		<img src="https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif" width="300" />
  </div>
  </body>
  </html>`;
}


export default DISPLAYCONTENTCOMMAND;
