import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Command} from './Command';
import {Exercise, Instruction, Html, Image, Hint, CommandButton} from '../tutorial';

interface ExerciseProps {
  exercise: Exercise
}

export const ExercisePage = (props: ExerciseProps) => {

  return (
    <div className="exercise">
      <h2 className="App-title">{props.exercise.title}</h2>
      {props.exercise.content && createContent(props.exercise.content)}
    </div>
  );
};

function createContent(content: Array<Instruction>) {
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
        return <HintComponent hint={hint.hint}></HintComponent>;
      case "button":
        var button = instruction as CommandButton;
        return <Command button={button.button}></Command>;
    }
  });
}


const HintComponent = (props: Hint) => {
  const [showHint, setShowHint] = React.useState(false);
  console.log(props);
  return (
    <div>
      <a onClick={() => (showHint) ? setShowHint(false) : setShowHint(true)}>{props.hint?.text}</a>
      {showHint &&
        props.hint && props.hint.content && createContent(props.hint.content)
      }
    </div>
  );
};