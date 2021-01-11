import React from 'react';
import {Button} from '@material-ui/core';
import {VSCodeAPI} from '../VSCodeAPI';
import {Command, CommandButton} from '../../../schema/tutorial';
import {Test} from './Test';

interface Test {
    testName: CommandButton,
    command: Command
}

interface TestFeedbackDialog {
    tests: Array<Test>,
    exerciseFolder: String
    closeModal: any
}

export const TestFeedbackDialog = (props: TestFeedbackDialog) => {
    return (<div>{
        createTests(props.tests, props.exerciseFolder)
    }</div>);
};

function createTests(tests: Array<Test>, exerciseFolder: String) {
    return tests.map((test) => {
        return <Test test={test} exerciseFolder={exerciseFolder} />
    });
}