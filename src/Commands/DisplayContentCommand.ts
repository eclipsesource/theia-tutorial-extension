import * as vscode from 'vscode';

const getDisplayContentCommand = (context: vscode.ExtensionContext): vscode.Disposable => {

  const DISPLAYCONTENTCOMMAND: vscode.Disposable = vscode.commands.registerCommand('theiatutorialextension.displayContent', () => {


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

      const checkCurrentState = () => {
        vscode.window.showInformationMessage('Current State Checked')
      }

          // And set its HTML content
          panel.webview.html = getWebviewContent(nextStep, checkCurrentState);

      // Handle messages from the webview
      panel.webview.onDidReceiveMessage(
        message => {
          switch (message.command) {
            case 'nextStep':
              vscode.window.showErrorMessage(message.value);

              panel.webview.html = getWebviewContent(message.value, checkCurrentState);
              return;
          }
        },
        undefined,
        context.subscriptions
      );
});

return DISPLAYCONTENTCOMMAND;
}



function getWebviewContent(nextStep: Boolean, checkCurrentState?: any) {


  return !nextStep ? 
`<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cat Coding</title>
  </head>
  <body>
	<div style="display: flex; flex-direction: column">
		<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
    <button style="margin: 20px; width: fit-content" onclick="checkState()">Check the current state</button> 
    <button style="margin: 20px; width: fit-content" onclick="goToNextStep()">Next Step</button> 
  </div>
  
  <script>

  function goToNextStep(){
      const vscode = acquireVsCodeApi();

      vscode.postMessage({
        command: 'nextStep',
        value: true
    })
  }


  function checkState(){
    const vscode = acquireVsCodeApi();
    ${checkCurrentState()}
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
	  <title>Cat Coding</title>
  </head>
  <body>
	<div style="display: flex; flex-direction: column">
		<img src="https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif" width="300" />
    <p style="margin: 20px; width: fit-content">Second Step !!!</p> 
  </div>
  
  <script>

</script>

  </body>
  </html>`;
  }


export default getDisplayContentCommand;
