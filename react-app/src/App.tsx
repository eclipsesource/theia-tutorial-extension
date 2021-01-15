import {Button} from '@material-ui/core';
import {SnackbarProvider} from 'notistack';
import * as React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import TutorialOverview from './components/TutorialOverview';
import {VSCodeAPI} from './VSCodeAPI';
import {Tutorial} from '../../schema/tutorial';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function App() {

  const [tutorials, setTutorials] = useState<Array<Tutorial>>([]);
  const [selectedTutorial, selectTutorial] = useState(-1);
  useEffect(() => {
    return VSCodeAPI.onMessage((message) => {

      switch (message.data.command) {
        case 'setTutorials':
          console.log(message.data.tutorials);
          setTutorials(message.data.tutorials);
          break;
      }
    });
  });

  function createTutorialList() {
    console.log(tutorials);
    return tutorials.map(tutorial => {
      console.log(tutorial)
      return <div className="Box-margin">
        <Button onClick={() => selectTutorial(tutorials.indexOf(tutorial))} variant="contained" color="primary">
          {
            tutorial.title}
        </Button>
      </div>;
    });
  }

  return (
    <div className="App">
      {(selectedTutorial < 0)
        ? <p><header className="App-header">
          <h1 className="App-title">Overview</h1>
        </header>
          <p className="App-intro">
            Current Tutorials in the workspace:
          {createTutorialList()}
          </p></p>
        :
        <SnackbarProvider maxSnack={3}>
          <TutorialOverview tutorial={tutorials[selectedTutorial]} />
        </SnackbarProvider>
      }
    </div>



  );
}