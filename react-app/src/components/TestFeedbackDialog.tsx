import {createStyles, makeStyles, IconButton, Theme, Typography, WithStyles, withStyles} from '@material-ui/core';
import React from 'react';
import {Command} from '../../../schema/tutorial';
import {Test} from './Test';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import {vsTheme} from '../VsTheme';

const styles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    }));

//var(--vscode-editor-background)
interface Test {
    testName: string,
    command: Command
}

interface TestFeedbackDialog {
    tests: Array<Test>,
    exerciseFolder: String
    closeModal: () => void
}

export const TestFeedbackDialog = (props: TestFeedbackDialog) => {
    const classes = styles();

    return (<div><Dialog PaperProps={{
        style: {backgroundColor: vsTheme.Background.backgroundColor},
    }} onClose={props.closeModal} aria-labelledby="customized-dialog-title" open={true} maxWidth={"lg"} fullWidth={true}>

        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography style={{color: vsTheme.text.color}} variant="h6">{"Test Results"}</Typography>
            <IconButton aria-label="close" style={{color: vsTheme.icons.color}} className={classes.closeButton} onClick={props.closeModal}>
                <CloseIcon />
            </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
            {createTests(props.tests, props.exerciseFolder)}
        </MuiDialogContent>
    </Dialog></div >);
};

function createTests(tests: Array<Test>, exerciseFolder: String) {
    return tests.map((test) => {
        console.log(test)
        return <Test test={test} exerciseFolder={exerciseFolder} />
    });
}