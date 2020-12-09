import React from 'react';
import {Button} from '@material-ui/core';
import {VSCodeAPI} from '../VSCodeAPI';

interface CommandProps {
  command: string,
  text: string,
  data?: any
}

export const Command = (props: CommandProps) => {

  return (
    <div className="Box-margin">
      <Button onClick={() => VSCodeAPI.postMessage({command: props.command, ...props.data})} variant="contained" color="primary">
        {props.text}
      </Button>
    </div>
  );
};