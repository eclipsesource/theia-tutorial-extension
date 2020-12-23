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
      <h2 className="App-title">{props.exercise.title}</h2>
      {props.exercise.content && props.exercise.content.map((section: {type: string; data: any; text?:string}) => {
        switch (section.type) {
          case "text":
            return <p>{section.data}</p>;
          case "html":
            return <div>{ ReactHtmlParser (section.data) }</div>;
          case "image":
            return <img src={section.data.src} width={section.data.width} />;
          case "hint":
            return <Hint data={section.data} text={section.text}></Hint>;
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
  console.log(props);
  return (
    <div>
      <a onClick={() => (showHint) ? setShowHint(false) : setShowHint(true)}>{props.text}</a>
      {showHint &&
        props.data &&
        props.data.map((section: {type: string; data: any;}) => {
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
        })
      }
    </div>
  );
};