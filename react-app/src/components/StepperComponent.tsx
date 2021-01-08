import React, {useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ExercisePage} from './Exercise';
import {Tutorial} from '../../../schema/tutorial';
import {Grid} from '@material-ui/core';
import {VSCodeAPI} from '../VSCodeAPI';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    backButton: {
      marginRight: 20,
      color: 'white',
      backgroundColor: 'gray',
    },
    nextButton: {
      backgroundColor: 'white',
      color: 'blue'
    },
    resetButton: {
      color: 'white'
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    stepper: {
      height: 35,
      padding: '5px 0 20px'
    },
    labelContainer: {
      "& $alternativeLabel": {
        marginTop: 5
      }
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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlesolve = () => {
    //@ts-ignore
    VSCodeAPI.postMessage(props.tutorial.exercises[activeStep].solve);
  };

  const handleTest = () => {
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  console.log('activeStep: ', activeStep);

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
        {steps && steps.map((label: any) => (
          <Step key={label}>
            <StepLabel
              classes={{
                alternativeLabel: classes.alternativeLabel,
                labelContainer: classes.labelContainer
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
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
                  props.tutorial.exercises[activeStep]}></ExercisePage>
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
                      className={classes.backButton}
                    >Test</Button>
                    <Button
                      variant="contained"
                      disabled={
                        //@ts-ignore
                        props.tutorial.exercises[activeStep].solve == null}
                      onClick={handlesolve}
                      className={classes.backButton}
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