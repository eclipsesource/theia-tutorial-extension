import React from 'react';
import {Button} from '@material-ui/core';
import {VSCodeAPI} from '../VSCodeAPI';
import {CommandButton} from '../../../schema/tutorial';

export const Command = (props: CommandButton) => {

  return (
    <div className="Box-margin">
      <Button onClick={() => {
        VSCodeAPI.postMessage({command: props.button.commands});
      }} variant="contained" color="primary">
        {props.button.text}
      </Button>
    </div>
  );
};