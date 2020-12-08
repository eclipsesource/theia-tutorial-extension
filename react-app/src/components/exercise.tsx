import React from 'react';
import {Button} from '@material-ui/core';
import { VSCodeAPI } from '../VSCodeAPI';
import { spawn } from 'child_process';


interface ExerciseProps {
    exercise: any
}

interface ExerciseState {
    info: string
};


export class Exercise extends React.Component<ExerciseProps, ExerciseState> {

    constructor(props: ExerciseProps) {
        super(props);
    }
    render() {
        return (
            <div className="exercise">  
              <h1 className="App-title">{this.props.exercise.title}</h1>
               
                {this.props.exercise.content.map((section: { type: string; data: any; }) => {
                    switch(section.type){
                      case "text":
                        return <p>{section.data}</p>;
                      case "image":
                        return <img src={section.data.src}/>;
                      case "hint":
                        return <Hint data={section.data}></Hint>;
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
}

function Hint(props: any) {
  const [showHint, setShowHint] = React.useState(false);
  
  return (
    <div>
      <a onClick={() => (showHint) ? setShowHint(false) : setShowHint(true)}>Click me to show Hint</a>
      {showHint &&

        props.data.map((section: { type: string; data: any; }) => {
          switch(section.type){
            case "text":
              return <p>{section.data}</p>;
            case "image":
              return <img src={section.data.src}/>;
            case "hint":
              return <Hint data={section.data}></Hint>;
          }
        })
      }
    </div>
  );
}