import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Command} from './Command';
import {Exercise, Instruction, Html, Image, Hint, CommandButton} from '../../../schema/tutorial';

interface ExerciseProps {
  exercise: Exercise
  exerciseFolder: String
}
export const ExercisePage = (props: ExerciseProps) => {

  return (
    <div className="exercise">
      <h2 className="App-title">{props.exercise.title}</h2>
      {props.exercise.content && createContent(props.exercise.content, props.exerciseFolder)}
    </div>
  );
};

const createContent = (content: Array<Instruction>, exerciseFolder: String) => {
  return content.map((instruction: Instruction) => {
    switch (Object.keys(instruction)[0]) {
      case "html":
        var html = instruction as Html;
        return <div>{ReactHtmlParser(html.html)}</div>;
      case "image":
        var img = instruction as Image;
        return <img src={img.image.src} width={img.image.width} />;
      case "hint":
        var hint = instruction as Hint;
        return <HintComponent hint={hint} exerciseFolder={exerciseFolder}></HintComponent>;
      case "button":
        var button = instruction as CommandButton;
        return <Command button={button} exerciseFolder={exerciseFolder}></ Command>;
    }
  });
}


interface HintProps {
  hint: Hint
  exerciseFolder: String
}

const HintComponent = (props: HintProps) => {
  const [showHint, setShowHint] = React.useState(false);
  return (
    <div>
      <a onClick={() => (showHint) ? setShowHint(false) : setShowHint(true)}>{props.hint.hint.text}</a>
      {showHint &&
        props.hint && props.hint.hint.content && createContent(props.hint.hint.content, props.exerciseFolder)
      }
    </div>
  );
};
