import {createStyles, makeStyles, IconButton, Theme, Typography, Grid} from '@material-ui/core';
import React from 'react';
import {Command} from '../../../schema/tutorial';
import {Test} from './Test';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import {vsTheme} from '../VsTheme';
import CompareIcon from '@material-ui/icons/Compare';
import {VSCodeAPI} from '../VSCodeAPI';

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
            color: vsTheme.text.color,
        },
    }));

interface Test {
    testName: string,
    command: Command
}

interface TestParagraph {
    tests: Array<Test>,
    filename?: string | undefined,
    solution?: string | undefined
}

interface TestFeedbackDialog {
    test: Array<TestParagraph> | undefined,
    exerciseFolder: String
    closeModal: () => void
}

export const TestFeedbackDialog = (props: TestFeedbackDialog) => {
    const classes = styles();

    return <div><Dialog PaperProps={{
        style: {backgroundColor: vsTheme.Background.backgroundColor},
    }} onClose={props.closeModal} aria-labelledby="customized-dialog-title" open={true} maxWidth={"lg"} fullWidth={true}>

        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography style={{color: vsTheme.text.color}} variant="h5">{"Test Results"}</Typography>
            <IconButton aria-label="close" style={{color: vsTheme.icons.color}} className={classes.closeButton} onClick={props.closeModal}>
                <CloseIcon />
            </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
            {props.test != null && createTestParagraph(props.test, props.exerciseFolder)}
        </MuiDialogContent>
    </Dialog></div >;
};

const createTestParagraph = (tests: Array<TestParagraph>, exerciseFolder: String) => {
    return tests.map((testParagraph) => {
        return <div><Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
        >
            <Typography style={{color: vsTheme.text.color}} variant="h6">{testParagraph.filename ? testParagraph.filename.split("/")[testParagraph.filename.split("/").length - 1] : "General"}</Typography>
            {testParagraph.solution != null && testParagraph.filename != null &&
                <IconButton aria-label="compare to Solution" style={{color: vsTheme.icons.color}}
                    onClick={() => {
                        VSCodeAPI.postMessage({commands: [{fileDiff: {filename: testParagraph.filename, solution: testParagraph.solution}}], ids: [], exerciseFolder: exerciseFolder});
                    }}
                >
                    <CompareIcon />
                </IconButton>}
        </Grid>
            {createTests(testParagraph.tests, exerciseFolder)}
        </div>
    });
}

const createTests = (tests: Array<Test>, exerciseFolder: String) => {
    return tests.map((test) => {
        return <Test test={test} exerciseFolder={exerciseFolder} />
    });
}