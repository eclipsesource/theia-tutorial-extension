import {createStyles, IconButton, Theme, Typography, WithStyles, withStyles} from '@material-ui/core';
import React from 'react';
import {Command} from '../../../schema/tutorial';
import {Test} from './Test';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';

const styles = (theme: Theme) =>
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
    });

interface Test {
    testName: string,
    command: Command
}

interface TestFeedbackDialog {
    tests: Array<Test>,
    exerciseFolder: String
    closeModal: () => void
}
export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    closeModal: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const {children, classes, closeModal, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={closeModal}>
                <CloseIcon />
            </IconButton>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

export const TestFeedbackDialog = (props: TestFeedbackDialog) => {

    return (<div><Dialog onClose={props.closeModal} aria-labelledby="customized-dialog-title" open={true} fullWidth={true}>
        <DialogTitle id="customized-dialog-title" closeModal={props.closeModal}>
            Test Results
    </DialogTitle>
        <DialogContent dividers>
            {createTests(props.tests, props.exerciseFolder)}
        </DialogContent>
    </Dialog></div >);
};

function createTests(tests: Array<Test>, exerciseFolder: String) {
    return tests.map((test) => {
        console.log(test)
        return <Test test={test} exerciseFolder={exerciseFolder} />
    });
}