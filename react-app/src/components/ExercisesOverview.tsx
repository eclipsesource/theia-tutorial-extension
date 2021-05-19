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
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Grid, IconButton, StepButton, StepContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Tutorial } from '../../../schema/tutorial';
import { vsTheme } from '../VsTheme';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: vsTheme.Button.backgroundColor,
        },
        '&$active': {
          color: vsTheme.Button.backgroundColor,
        },
      }
    }
  }
});

interface ExercisesOverviewProps {
  tutorial: Tutorial;
  setActiveStep(num: number): void;
}

const ExercisesOverview = ({
  tutorial,
  setActiveStep,
}: ExercisesOverviewProps) => {
  return (
    <div className='root'>
      <MuiThemeProvider theme={theme}>
        <Stepper
          orientation='vertical'
          style={{ backgroundColor: 'transparent' }}
        >
          {tutorial &&
            tutorial.exercises &&
            tutorial.exercises.map((ex) => (
              <Step key={ex.title} active={true} data-testid="ov-step">
                <StepLabel>
                  <Typography className='text'>{ex.title}</Typography>
                </StepLabel>
                <StepContent>
                  <p className='text'>{ex.description}</p>
                  <Grid
                    container={true}
                    direction='row'
                    justify='flex-end'
                    alignItems='center'
                  >
                    <IconButton
                      size='small'
                      onClick={() => {
                        if (tutorial.exercises) {
                          setActiveStep(tutorial.exercises.indexOf(ex));
                        }
                      }}
                    >
                      <ArrowForwardIosIcon
                        fontSize='small'
                        style={{
                          fill: vsTheme.Button.color,
                          backgroundColor: vsTheme.Button.backgroundColor,
                        }}
                      />
                    </IconButton>
                  </Grid>
                </StepContent>
              </Step>
            ))}
        </Stepper>
      </MuiThemeProvider>
    </div>
  );
};

export default ExercisesOverview;
