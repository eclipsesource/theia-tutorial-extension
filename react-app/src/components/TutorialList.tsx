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
import { Tutorial } from '../../../schema/tutorial';

interface TutorialProps {
  tutorial: Tutorial,
  index: number,
  selectTutorial(num: number): void
}

export const TutorialList = ({ tutorial, index, selectTutorial }: TutorialProps) => {

  return (
    <div className="Box-margin">
      <Button onClick={() => selectTutorial(index)} variant="contained" color="primary">
        {tutorial.title}
      </Button>
    </div>
  );
};