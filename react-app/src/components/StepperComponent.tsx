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
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ExercisePage } from './Exercise';
import { ClickAwayListener, Dialog, Grid, Grow, IconButton, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';
import { VSCodeAPI } from '../VSCodeAPI';
import SettingsIcon from '@material-ui/icons/Settings';
import { TestFeedbackDialog } from './TestFeedbackDialog';
import { Exercise, Tutorial } from '../../../schema/tutorial';
import { vsTheme } from '../VsTheme';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: vsTheme.text.color,
    },
    button: {
      margin: "10px 10px 10px 10px",
      backgroundColor: vsTheme.Button.backgroundColor,
      color: vsTheme.Button.color
    },
    buttonBigMargin: {
      margin: "20px 20px 20px 20px",
      backgroundColor: vsTheme.Button.backgroundColor,
      color: vsTheme.Button.color
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    stepper: {
      width: "calc(100% - 200px)",
      height: 35,
      padding: '5px 0 20px',
      backgroundColor: "transparent",
    },
    labelContainer: {
      "& $alternativeLabel": {
        marginTop: 5
      }
    },
    textSmall: {
      color: vsTheme.text.color,
      textAlign: "center",
      marginTop: "5",
      fontSize: "x-small"
    },
    text: {
      color: vsTheme.text.color
    },
    alternativeLabel: {}
  }),
);

const getSteps = (tutorialExercises: Array<Exercise> | undefined) => {
  return tutorialExercises && tutorialExercises.map((tutorial) => tutorial.title);
};

interface StepperComponentProps {
  tutorial: Tutorial;
  startStep: number;
}

const StepperComponent = (props: StepperComponentProps) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(props.startStep);
  const steps = getSteps(props.tutorial.exercises);
  const [isDropdownActive, setDropdown] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [isTestModalOpen, setTestModal] = React.useState(false);
  const [isCheckModalOpen, setCheckModal] = React.useState(false);
  const [isBuildWarningOpen, setBuildWarning] = React.useState(false);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlesolve = () => {
    if (props.tutorial.exercises !== undefined) {
      VSCodeAPI.postMessage({ commands: props.tutorial.exercises[activeStep].solve, ids: [], exerciseFolder: props.tutorial.tutorialFolder });
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleToggle = () => {
    setDropdown((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setDropdown(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setDropdown(false);
    }
  };

  // Return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(isDropdownActive);
  React.useEffect(() => {
    if (prevOpen.current === true && isDropdownActive === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = isDropdownActive;
  }, [isDropdownActive]);

  const createTestfeedback = () => {
    if (props.tutorial.exercises !== undefined) {
      return <TestFeedbackDialog test={props.tutorial.exercises[activeStep].test} exerciseFolder={props.tutorial.tutorialFolder} closeModal={() => { setTestModal(false); }} />;
    }
  };

  const createCheckStarStatefeedback = () => {
    if (props.tutorial.exercises !== undefined) {
      return <TestFeedbackDialog test={props.tutorial.exercises[activeStep].checkStartState} exerciseFolder={props.tutorial.tutorialFolder} closeModal={() => { setCheckModal(false); }} />;
    }
  };

  const createBuildWarning = () => {
    return <div><Dialog PaperProps={{
      style: {
        backgroundColor: vsTheme.Background.backgroundColor, borderWidth: "1",
        borderRadius: "1",
        borderColor: vsTheme.contrast.color
      },
    }} onClose={() => { setBuildWarning(false); }} aria-labelledby="customized-dialog-title" open={true} maxWidth={"sm"}>

      <MuiDialogTitle disableTypography>
        <Typography className="text" variant="h5">{"Reset Exercise"}</Typography>
        <IconButton aria-label="close" style={{ color: vsTheme.icons.color }} className={classes.closeButton} onClick={() => { setBuildWarning(false); }}>
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <MuiDialogContent dividers>
        <div style={{ color: vsTheme.text.color, width: "80%" }}>
          This action will reset the current exercise, this might transfer your current files to a new directory.
        </div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        ><Button className={classes.buttonBigMargin} onClick={() => {
          setBuildWarning(false);
        }} variant="contained" color="primary">
            Cancel
        </Button>
          <Button className={classes.buttonBigMargin} onClick={() => {
            if (props.tutorial.exercises !== undefined && props.tutorial.exercises[activeStep] !== undefined) {
              VSCodeAPI.postMessage({ commands: props.tutorial.exercises[activeStep].buildExercise, ids: [], exerciseFolder: props.tutorial.tutorialFolder });
              setBuildWarning(false);
            }
          }} variant="contained" color="primary">
            OK
        </Button></Grid>
      </MuiDialogContent>
    </Dialog></div >;
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      ><div style={{ width: 40 }}></div>
        <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
          {steps && steps.map((label) => (
            <Step key={label}>
              <StepLabel
                classes={{
                  alternativeLabel: classes.alternativeLabel,
                  labelContainer: classes.labelContainer,
                }}
              >
                <Typography className={classes.textSmall}>{label}</Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {(props.tutorial.exercises !== undefined && props.tutorial.exercises[activeStep] !== undefined && (
          props.tutorial.exercises[activeStep].buildExercise !== undefined ||
          props.tutorial.exercises[activeStep].checkStartState !== undefined)) ?
          <IconButton
            ref={anchorRef}
            aria-controls={isDropdownActive ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle} >
            <SettingsIcon style={{
              color: vsTheme.text.color,
            }} />
          </IconButton> : <div style={{ width: 40 }}></div>}
        <Popper style={{
          backgroundColor: vsTheme.dropDown.background,
          borderWidth: "1",
          borderRadius: "1",
          borderColor: vsTheme.dropDown.border
        }} open={isDropdownActive} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', backgroundColor: vsTheme.dropDown.background }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={isDropdownActive} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {props.tutorial.exercises !== undefined && props.tutorial.exercises[activeStep] !== undefined && props.tutorial.exercises[activeStep].buildExercise !== undefined && <MenuItem style={{
                      backgroundColor: vsTheme.dropDown.background,
                    }} onClick={(event: React.MouseEvent<EventTarget>) => {
                      handleClose(event);
                      setBuildWarning(true);
                    }}><div className={classes.text}>Reset Exercise</div></MenuItem>}
                    {props.tutorial.exercises !== undefined && props.tutorial.exercises[activeStep].checkStartState !== undefined && <MenuItem style={{
                      backgroundColor: vsTheme.dropDown.background,
                    }} onClick={(event: React.MouseEvent<EventTarget>) => {
                      handleClose(event);
                      setCheckModal(true);
                    }}> <div className={classes.text}>Test Start State</div></MenuItem>}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
      <div style={{ marginBottom: 20 }}>
        {steps !== undefined && activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Congratulations! You finished the tutorial.</Typography>
            <Button className={classes.button} onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>
                {props.tutorial.exercises !== undefined && <ExercisePage exercise={
                  props.tutorial.exercises[activeStep]} exerciseFolder={props.tutorial.tutorialFolder}></ExercisePage>}
              </Typography>
              <div>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <div>
                    <Button
                      variant="contained"
                      disabled={
                        props.tutorial.exercises === undefined || props.tutorial.exercises[activeStep].test === undefined}
                      onClick={() => { setTestModal(true); }}
                      className={classes.button}
                    >Test</Button>
                    <Button
                      variant="contained"
                      disabled={
                        props.tutorial.exercises === undefined || props.tutorial.exercises[activeStep].solve === undefined}
                      onClick={handlesolve}
                      className={classes.button}
                    >Solve</Button>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
              </Button>
                    <Button variant="contained" className={classes.button} onClick={handleNext}>
                      {steps !== undefined && activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </Grid>
              </div>
            </div>
          )}
      </div>
      <div>{isTestModalOpen && createTestfeedback()}</div>
      <div>{isCheckModalOpen && createCheckStarStatefeedback()}</div>
      <div>{isBuildWarningOpen && createBuildWarning()}</div>
    </div >
  );
};

export default StepperComponent;