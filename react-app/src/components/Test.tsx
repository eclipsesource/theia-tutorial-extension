import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import {VSCodeAPI} from '../VSCodeAPI';
import {Command, CommandButton} from '../../../schema/tutorial';
import {v4 as uuidv4} from 'uuid';

interface Test {
    testName: CommandButton,
    command: Command
}

interface TestProbs {
    test: Test,
    exerciseFolder: String
}

export const Test = (props: TestProbs) => {
    const [testResult, setTestResult] = useState("pending");
    VSCodeAPI.postMessage({commands: [props.test.command], ids: [uuidv4()], exerciseFolder: props.exerciseFolder});
    return (<div></div>);
};