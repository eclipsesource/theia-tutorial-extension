import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import {AutomaticImport} from './tutorialComponents/content/automaticImport';
import { Command } from './Command';

interface ExerciseProps {
  exercise: any
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Exercise = (props: ExerciseProps) => {

  return (
    <div className="exercise">
      <h1 className="App-title">{props.exercise.title}</h1>

      {props.exercise.content && props.exercise.content.map((section: {type: string; data: any;}) => {
        switch (section.type) {
          case "text":
            return <p>{section.data}</p>;
          case "html":
            return <div>{ ReactHtmlParser (section.data) }</div>;
          case "image":
            return <img src={section.data.src} width={section.data.width} />;
          case "hint":
            return <Hint data={section.data}></Hint>;
          case "automaticImport":
            return <AutomaticImport data={section.data}></AutomaticImport>;
          case "command":
            return <Command command={section.data.command} text={section.data.text} data={section.data.data}></Command>;
        }
      })}
    </div>
  );
};

const Hint = (props: any) => {
  const [showHint, setShowHint] = React.useState(false);

  return (
    <div>
      <a onClick={() => (showHint) ? setShowHint(false) : setShowHint(true)}>Click me to show Hint</a>
      {showHint &&
        props.data &&
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
};