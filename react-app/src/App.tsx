import * as React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { VSCodeAPI } from './VSCodeAPI';

export default function App() {

  const [info, setInfo] = useState('Nothing happening.');

  useEffect(() => {
    return VSCodeAPI.onMessage((message) => {
      setInfo(message.data.text);
    });
  });

    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Theia Tutorial</h1>
        </header>
        <p className="App-intro">
          In this tutorial we are going to implement a Theia extension.
        </p>
        <p>{info}</p>
        <button onClick={() => VSCodeAPI.postMessage({command: 'showInformationMessage', text: 'Hello'})}>Test</button>
      </div>
    );
  
}