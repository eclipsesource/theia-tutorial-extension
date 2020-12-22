import React, {useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {VSCodeAPI} from '../VSCodeAPI';
import {Exercise} from './Exercise';


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
    stepper:{
      height: 40, 
      padding: '10px 0 20px'
    }
  }),
);

function getSteps(tutorialExercises: any) {
  return tutorialExercises && tutorialExercises.map((tutorial: any) => tutorial.title);
}

interface StepperComponentProps {
  tutorialExercises: Array<any>;
  startStep: number;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const StepperComponent = (props: StepperComponentProps) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(props.startStep);
  const steps = getSteps(props.tutorialExercises);
  const [isFileListCorrect, setFilesCheck] = useState(false);

  const getFileList = () => {
    let fileList = [];
    console.log('props.tutorialExercises[activeStep].checkIfRequiredStateIsMet: ', props.tutorialExercises[activeStep].checkIfRequiredStateIsMet);
    if (props.tutorialExercises[activeStep].checkIfRequiredStateIsMet) {

      fileList = props.tutorialExercises[activeStep].checkIfRequiredStateIsMet.find((requirements: any) => {
        console.log('requirements: ', requirements);
        return requirements.type === 'checkIfFilesExist';
      });
    }

    console.log('fileList: ', fileList);
    return fileList ? fileList.data : fileList;
  };

  const handleNext = () => {
    const fileList = getFileList();

    if (activeStep === 0 && fileList) {
      VSCodeAPI.postMessage({command: 'checkExerciseFiles', fileList});

      VSCodeAPI.onMessage((message) => {
        switch (message.data.command) {
          case 'checkFilesResult':
            if (message.data.result && !isFileListCorrect) {
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
              setFilesCheck(true);
            }
            break;
        }
      });
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{marginBottom: 20}}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button className={classes.resetButton} onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>
                <Exercise exercise={props.tutorialExercises[activeStep]}></Exercise>
              </Typography>
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
            </div>
          )}
      </div>
    </div>
  );
};

export default StepperComponent;