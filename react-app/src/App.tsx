import * as React from 'react';
import './App.css';

interface IProps {
}

interface IState {
  info?: string;
}

declare var acquireVsCodeApi: any;
const vscode = acquireVsCodeApi();

class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      info: 'Nothing happened'
    };
  }

  private postMessage(text: string, command: string){
    vscode.postMessage({
      command: command,
      text: text
    });
  }

  public render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Theia Tutorial</h1>
        </header>
        <p className="App-intro">
          In this tutorial we are going to implement a Theia extension.
        </p>
        <p>{this.state.info}</p>
        <button onClick={()=> this.postMessage('Hello from React to Extension','showInformationMessage')}>Test</button>
      </div>
    );
  }
}

export default App;
