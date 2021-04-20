/********************************************************************************
 * Copyright (c) 2020-2021 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * https://www.eclipse.org/legal/epl-2.0, or the MIT License which is
 * available at https://opensource.org/licenses/MIT.
 *
 * SPDX-License-Identifier: EPL-2.0 OR MIT
 ********************************************************************************/
import React, { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Command } from './Command';
import {
  Exercise,
  Instruction,
  Html,
  Image,
  Hint,
  CommandButton,
} from '../../../schema/tutorial';

interface ExerciseProps {
  exercise: Exercise;
  exerciseFolder: string;
}
export const ExercisePage = (props: ExerciseProps) => {
  return (
    <div className='exercise'>
      <h2 className='App-title'>{props.exercise.title}</h2>
      {props.exercise.content &&
        createContent(props.exercise.content, props.exerciseFolder)}
    </div>
  );
};

const createContent = (content: Instruction[], exerciseFolder: string) => {
  return content.map((instruction: Instruction) => {
    switch (Object.keys(instruction)[0]) {
      case 'html':
        const html = instruction as Html;
        return <div>{ReactHtmlParser(html.html)}</div>;
      case 'image':
        const img = instruction as Image;
        return <img src={img.image.src} width={img.image.width} />;
      case 'hint':
        const hint = instruction as Hint;
        return (
          <HintComponent
            hint={hint}
            exerciseFolder={exerciseFolder}
          />
        );
      case 'button':
        const button = instruction as CommandButton;
        return (
          <Command button={button} exerciseFolder={exerciseFolder} />
        );
    }
  });
};

interface HintProps {
  hint: Hint;
  exerciseFolder: string;
}

const HintComponent = (props: HintProps) => {
  const [showHint, setShowHint] = React.useState(false);
  useEffect(() => {
    if (props.hint && showHint) {
      setShowHint(false);
    }
  }, [props]);

  return (
    <div>
      <a onClick={() => (showHint ? setShowHint(false) : setShowHint(true))}>
        {props.hint.hint.text}
      </a>
      {showHint &&
        props.hint &&
        props.hint.hint.content &&
        createContent(props.hint.hint.content, props.exerciseFolder)}
    </div>
  );
};
