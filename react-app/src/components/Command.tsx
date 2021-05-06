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
import React from 'react';
import { Button } from '@material-ui/core';
import { VSCodeAPI } from '../VSCodeAPI';
import { CommandButton } from '../../../schema/tutorial';

interface CommandProps {
  button: CommandButton;
  exerciseFolder: string;
}

export const Command = (props: CommandProps) => {
  return (
    <div className='Box-margin'>
      <Button
        onClick={() => {
          VSCodeAPI.postMessage({
            commands: props.button.button.commands,
            ids: [],
            exerciseFolder: props.exerciseFolder,
          });
        }}
        variant='contained'
        className='Button'
        data-testid='button'
      >
        {props.button.button.text}
      </Button>
    </div>
  );
};
