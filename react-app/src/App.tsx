import { Button } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import * as React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { VSCodeAPI } from './VSCodeAPI';

export default function App() {

  const [info, setInfo] = useState('You can get ready now. Prepare the workspace by yourself or let us do the work for you.');

  useEffect(() => {
    return VSCodeAPI.onMessage((message) => {
      console.log(message);
      switch (message.data.command){
        case 'setInfo':
          setInfo(message.data.text);
          break;
      }
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
        <div className="Box-margin">
          <Button onClick={() => VSCodeAPI.postMessage({command: 'checkExerciseFiles'})} variant="contained" color="primary">
            Check workspace
          </Button>
          </div>
        <div className="Box-margin">
          <Button onClick={() => VSCodeAPI.postMessage({command: 'initExerciseZero'})} variant="contained" color="primary">
            Solve Exercise 0
          </Button>
        </div>
      </div>
    );
  
}