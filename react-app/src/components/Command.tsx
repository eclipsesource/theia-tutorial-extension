import React from 'react';
import {Button} from '@material-ui/core';
import {VSCodeAPI} from '../VSCodeAPI';
import {CommandButton} from '../../../schema/tutorial';
import {vsTheme} from '../VsTheme';

interface CommandProps {
  button: CommandButton,
  exerciseFolder: String
}

export const Command = (props: CommandProps) => {

  return (
    <div className="Box-margin">
      <Button onClick={() => {
        VSCodeAPI.postMessage({commands: props.button.button.commands, ids: [], exerciseFolder: props.exerciseFolder});
      }} variant="contained" style={{
        margin: "10px 10px 10px 10px",
        backgroundColor: vsTheme.Button.backgroundColor,
        color: vsTheme.Button.color
      }}>
        {props.button.button.text}
      </Button>
    </div>
  );
};