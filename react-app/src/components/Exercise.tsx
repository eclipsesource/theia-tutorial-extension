import React from 'react';
import {Button} from '@material-ui/core';
import {VSCodeAPI} from '../VSCodeAPI';
import {AutomaticImport} from './tutorialComponents/content/automaticImport'

interface ExerciseProps {
  exercise: any
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Exercise = (props: ExerciseProps) => {

  return (
    <div className="exercise">
      <h1 className="App-title">{props.exercise.title}</h1>

      {props.exercise.content.map((section: {type: string; data: any;}) => {
        switch (section.type) {
          case "text":
            return <p>{section.data}</p>;
          case "image":
            return <img src={section.data.src} />;
          case "hint":
            return <Hint data={section.data}></Hint>;
          case "automaticImport":
            return <AutomaticImport data={section.data}></AutomaticImport>;
        }
      })}
      <div className="Box-margin">
        <Button onClick={() => VSCodeAPI.postMessage({command: 'initExerciseZero'})} variant="contained" color="primary">
          Solve Exercise 0
              </Button>
      </div>
    </div>
  );
}

const Hint = (props: any) => {
  const [showHint, setShowHint] = React.useState(false);

  return (
    <div>
      <a onClick={() => (showHint) ? setShowHint(false) : setShowHint(true)}>Click me to show Hint</a>
      {showHint &&

        props.data.map((section: {type: string; data: any;}) => {
          switch (section.type) {
            case "text":
              return <p>{section.data}</p>;
            case "image":
              return <img src={section.data.src} />;
            case "hint":
              return <Hint data={section.data}></Hint>;
          }
        })
      }
    </div>
  );
}