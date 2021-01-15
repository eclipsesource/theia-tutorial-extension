import React, {useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepperComponent from './StepperComponent';
import {Grid, IconButton, StepContent} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Tutorial} from '../../../schema/tutorial';


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
    tutorial: Tutorial;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const TutorialOverview = (props: TutorialOverviewProps) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(-1);

    console.log(props.tutorial);
    return (
        activeStep < 0 ?
            <div className={classes.root}>
                <Stepper orientation="vertical" style={{backgroundColor: "transparent"}}>
                    {props.tutorial.exercises && props.tutorial.exercises.map((ex: any) => (
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
                                    <IconButton size="small" onClick={() => {
                                        if (props.tutorial.exercises) {
                                            setActiveStep(props.tutorial.exercises.indexOf(ex));
                                        }
                                    }}>
                                        <ArrowForwardIosIcon fontSize="small" style={{fill: "white", backgroundColor: "#6666ff"}} />
                                    </IconButton>
                                </Grid>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </div > :
            <div>
                <StepperComponent tutorial={props.tutorial} startStep={activeStep} />
            </div>
    );
};

export default TutorialOverview;