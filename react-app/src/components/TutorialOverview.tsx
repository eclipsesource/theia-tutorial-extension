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
import React, { useState } from 'react';
import StepperComponent from './StepperComponent';
import { Tutorial } from '../../../schema/tutorial';
import ExercisesOverview from './ExercisesOverview';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton, createStyles, makeStyles, Theme } from '@material-ui/core';
import { vsTheme } from '../VsTheme';

interface TutorialOverviewProps {
  tutorial: Tutorial;
  goBack: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h1: {
      margin: '12px'
    },
    button: {
      margin: '12px',
      backgroundColor: vsTheme.Button.backgroundColor,
      color: vsTheme.Button.color,
    },
    backButton: {
      position: 'absolute',
      left: 0,
      top: 0,
      color: vsTheme.text.color,
    }
  })
);

const TutorialOverview = ({ tutorial, goBack }: TutorialOverviewProps) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(-1);
  if (
    !tutorial ||
    !tutorial.exercises ||
    activeStep >= tutorial.exercises.length
  ) {
    if (activeStep > 0) {
      setActiveStep(-1);
    }
  }
  return (
    <div>
      <h2 className={classes.h1}>{tutorial.title}</h2>
      {activeStep < 0 ? (
        <div>
          <IconButton onClick={goBack} className={classes.backButton}>
            <ArrowBackIosIcon/>
          </IconButton>
          <ExercisesOverview
            tutorial={tutorial}
            setActiveStep={setActiveStep}
          />
        </div>
      ) : (
        <StepperComponent
          tutorial={tutorial}
          startStep={activeStep}
          backToOverview={setActiveStep}
        />
      )}
    </div>
  );
};

export default TutorialOverview;
