import React from 'react';
import {Button} from '@material-ui/core';
import {VSCodeAPI} from '../VSCodeAPI';
import {CommandButton} from '../../../schema/tutorial';

interface CommandProps {
  button: CommandButton,
  exerciseFolder: String
}

export const Command = (props: CommandProps) => {

  return (
    <div className="Box-margin">
      <Button onClick={() => {
        VSCodeAPI.postMessage({commands: props.button.button.commands, ids: [], exerciseFolder: props.exerciseFolder});
      }} variant="contained" color="primary">
        {props.button.button.text}
      </Button>
    </div>
  );
};