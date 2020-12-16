import React, {useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepperComponent from './StepperComponent';
import {Grid, IconButton, StepContent} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        text: {
            color: 'white',
            textAlign: "left",
        },
        textheader: {
            color: 'white',
            textAlign: "left",
        }
    }),
);

interface TutorialOverviewProps {
    tutorialExercises: Array<any>;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const TutorialOverview = (props: TutorialOverviewProps) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(-1);

    return (
        activeStep < 0 ?
            <div className={classes.root}>
                <Stepper orientation="vertical" style={{backgroundColor: "transparent"}}>
                    {props.tutorialExercises && props.tutorialExercises.map((ex: any) => (
                        <Step key={ex.title} active={true}>
                            <StepLabel><Typography className={classes.textheader}>{ex.title}</Typography></StepLabel>
                            <StepContent>
                                <p className={classes.text}>{ex.description}</p>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-end"
                                    alignItems="center"
                                >
                                    <IconButton size="small" onClick={() => {setActiveStep(props.tutorialExercises.indexOf(ex));}}>
                                        <ArrowForwardIosIcon fontSize="small" style={{fill: "white", backgroundColor: "#6666ff"}} />
                                    </IconButton>
                                </Grid>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </div> :
            <div>
                <StepperComponent tutorialExercises={props.tutorialExercises} startStep={activeStep} />
            </div>
    );
};

export default TutorialOverview;