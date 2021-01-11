import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { VSCodeAPI } from "../VSCodeAPI";
import { Exercise } from "./Exercise";
import { useSnackbar } from "notistack";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    display: `flex`,
    flexDirection: `column` as "column",
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    backButton: {
      marginRight: 20,
      color: "white",
      backgroundColor: "gray",
    },
    nextButton: {
      backgroundColor: "white",
      color: "blue",
    },
    resetButton: {
      color: "white",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    stepper: {
      height: 35,
      padding: "5px 0 20px",
    },
    labelContainer: {
      "& $alternativeLabel": {
        marginTop: 5,
      },
    },
    alternativeLabel: {},
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    yesButton: {
      color: "white",
      backgroundColor: "green",
    },
    noButton: {
      marginRight: 20,
      color: "white",
      backgroundColor: "red",
    },
    modalText: {
      color: "black",
    },
  })
);

function getSteps(tutorialExercises: any) {
  return (
    tutorialExercises &&
    tutorialExercises.map((tutorial: any) => tutorial.title)
  );
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
  const [isFileListChecked, setFilesCheck] = useState(false);
  const [isModalOpen, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    VSCodeAPI.onMessage((message) => {
      switch (message.data.command) {
        case "testResult":
          enqueueSnackbar(message.data.result.text, {
            variant: message.data.result.variant,
          });
          break;
      }
    });
  }, []);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = (isNext: boolean) => {
    setOpen(false);
    if (isNext) {
      goToNextStep();
    }
  };

  const getFileList = () => {
    let fileList = [];
    if (props.tutorialExercises[activeStep].checkIfRequiredStateIsMet) {
      fileList = props.tutorialExercises[
        activeStep
      ].checkIfRequiredStateIsMet.find((requirements: any) => {
        return requirements.type === "checkIfFilesExist";
      });
    }

    return fileList ? fileList.data : fileList;
  };

  const handleNext = () => {
    const fileList = getFileList();

    if (activeStep === 0 && fileList) {
      const openModal = true;
      VSCodeAPI.postMessage({
        command: "checkExerciseFiles",
        fileList,
        openModal,
      });

      VSCodeAPI.onMessage((message) => {
        switch (message.data.command) {
          case "checkFilesResult":
            if (!isFileListChecked) {
              if (!message.data.result) {
                handleOpenModal();
              } else {
                goToNextStep();
              }
              setFilesCheck(true);
            }
            break;
        }
      });
    } else {
      goToNextStep();
    }
  };

  const goToNextStep = () => {
    if (steps.length >= activeStep) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setFilesCheck(false);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFilesCheck(false);
  };

  const modalBody = (
    <div style={modalStyle} className={classes.paper}>
      <p className={classes.modalText}>
        There is a problem in your folder structure of the tutorial. Are you
        sure to continue to the next step ?
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          onClick={() => handleCloseModal(false)}
          className={classes.noButton}
        >
          No
        </Button>
        <Button
          variant="contained"
          onClick={() => handleCloseModal(true)}
          className={classes.yesButton}
        >
          Yes
        </Button>
      </div>
    </div>
  );

  console.log("activeStep: ", activeStep);

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        className={classes.stepper}
      >
        {steps &&
          steps.map((label: any) => (
            <Step key={label}>
              <StepLabel
                classes={{
                  alternativeLabel: classes.alternativeLabel,
                  labelContainer: classes.labelContainer,
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
      </Stepper>
      <div style={{ marginBottom: 20 }}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Congratulations! You finished the tutorial.
            </Typography>
            <Button className={classes.resetButton} onClick={handleReset}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              <Exercise
                exercise={props.tutorialExercises[activeStep]}
              ></Exercise>
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
              <Button
                variant="contained"
                className={classes.nextButton}
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => handleCloseModal(true)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalBody}
      </Modal>
    </div>
  );
};

export default StepperComponent;
