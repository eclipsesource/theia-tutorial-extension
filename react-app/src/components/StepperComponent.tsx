import React, {useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ExercisePage} from './Exercise';
import {Tutorial} from '../../../schema/tutorial';
import {ClickAwayListener, Container, Grid, Grow, IconButton, MenuItem, MenuList, Paper, Popper} from '@material-ui/core';
import {VSCodeAPI} from '../VSCodeAPI';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    backButton: {
      margin: "20px 0px 20px 0",
      color: 'white',
      backgroundColor: 'gray',
    },
    nextButton: {
      margin: "20px 20px 20px 20px",
      backgroundColor: 'white',
      color: 'blue'
    },
    testButton: {
      margin: "20px 20px 20px 20px",
      backgroundColor: 'white',
      color: 'blue'
    },
    solveButton: {
      margin: "20px 0px 20px 0",
      backgroundColor: 'white',
      color: 'blue'
    },
    resetButton: {
      margin: "20px 20px 20px 20px",
      color: 'white'
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
    text: {
      color: 'white',
      textAlign: "center",
      marginTop: "5",
      fontSize: "x-small"
    },
    button: {
      fontSize: "small",
      padding: "10px 10px 10px 10px"
    },
    alternativeLabel: {},
  }),
);

function getSteps(tutorialExercises: any) {
  return tutorialExercises && tutorialExercises.map((tutorial: any) => tutorial.title);
}

interface StepperComponentProps {
  tutorial: Tutorial;
  startStep: number;
}

const StepperComponent = (props: StepperComponentProps) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(props.startStep);
  const steps = getSteps(props.tutorial.exercises);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlesolve = () => {
    //@ts-ignore
    VSCodeAPI.postMessage({commands: props.tutorial.exercises[activeStep].solve, ids: [], exerciseFolder: props.tutorial.tutorialFolder});
  };

  const handleResetExercise = () => {
    //@ts-ignore
    VSCodeAPI.postMessage({commands: props.tutorial.exercises[activeStep].buildExercise, ids: [], exerciseFolder: props.tutorial.tutorialFolder});
  };

  const handleTest = () => {
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);


  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      ><div style={{width: 40}}></div>
        <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
          {steps && steps.map((label: any) => (
            <Step key={label}>
              <StepLabel
                classes={{
                  alternativeLabel: classes.alternativeLabel,
                  labelContainer: classes.labelContainer,
                }}
              >
                <Typography className={classes.text}>{label}</Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle} >
          <SettingsIcon style={{color: "white"}} />
        </IconButton>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({TransitionProps, placement}) => (
            <Grow
              {...TransitionProps}
              style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={(event: React.MouseEvent<EventTarget>) => {
                      handleClose(event);
                      handleResetExercise();
                    }}>Build Exercise</MenuItem>
                    <MenuItem onClick={(event: React.MouseEvent<EventTarget>) => {
                      handleClose(event);
                      handleResetExercise();
                    }}>Reset Exercise</MenuItem>
                    <MenuItem onClick={(event: React.MouseEvent<EventTarget>) => {
                      handleClose(event);
                    }}>Test Start State</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
      <div style={{marginBottom: 20}}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Congratulations! You finished the tutorial.</Typography>
            <Button className={classes.resetButton} onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>
                <ExercisePage exercise={
                  //@ts-ignore
                  props.tutorial.exercises[activeStep]} exerciseFolder={props.tutorial.tutorialFolder}></ExercisePage>
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
                        //@ts-ignore
                        props.tutorial.exercises[activeStep].test == null}
                      onClick={handleTest}
                      className={classes.testButton}
                    >Test</Button>
                    <Button
                      variant="contained"
                      disabled={
                        //@ts-ignore
                        props.tutorial.exercises[activeStep].solve == null}
                      onClick={handlesolve}
                      className={classes.solveButton}
                    >Solve</Button>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.backButton}
                    >
                      Back
              </Button>
                    <Button variant="contained" className={classes.nextButton} onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </Grid>
              </div>
            </div>
          )}
      </div>
    </div >
  );
};

export default StepperComponent;