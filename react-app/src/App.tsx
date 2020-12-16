import {Button} from '@material-ui/core';
import * as React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import TutorialOverview from './components/TutorialOverview';
import {VSCodeAPI} from './VSCodeAPI';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function App() {

  const [tutorials, setTutorials] = useState<Array<any>>([]);
  const [selectedTutorial, selectTutorial] = useState(-1);

  useEffect(() => {
    return VSCodeAPI.onMessage((message) => {

      switch (message.data.command) {
        case 'setTutorials':
          setTutorials(message.data.tutorials);
          break;
      }
    });
  });

  function createTutorialList() {
    return tutorials.map(tutorial => {
      return <div className="Box-margin">
        <Button onClick={() => selectTutorial(tutorials.indexOf(tutorial))} variant="contained" color="primary">
          {
            //@ts-ignore
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
            current Tutorials in the workspace:
          {createTutorialList()}
          </p></p>
        :
        <TutorialOverview tutorialExercises={tutorials[selectedTutorial].tutorial} />
      }
    </div>



  );
}