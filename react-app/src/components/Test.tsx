import React, {useEffect, useState} from 'react';
import {Button, Grid} from '@material-ui/core';
import {VSCodeAPI} from '../VSCodeAPI';
import {Command, CommandButton} from '../../../schema/tutorial';
import {v4 as uuidv4} from 'uuid';

interface Test {
    testName: string,
    command: Command
}

interface TestProbs {
    test: Test,
    exerciseFolder: String
}

export const Test = (props: TestProbs) => {
    const [testResult, setTestResult] = useState("pending");


    useEffect(() => {
        const uuid = uuidv4();
        VSCodeAPI.postMessage({commands: [props.test.command], ids: [uuid], exerciseFolder: props.exerciseFolder});
        VSCodeAPI.onMessage((message) => {
            if (message.data.id == uuid) {
                setTestResult(message.data.result.toString());
            }
        });
    });

    function createTest() {
        console.log(testResult);
        if (testResult == "pending" || testResult == "true" || testResult == "false") {
            return <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <div style={{width: "40%"}}>{props.test.testName + ": "}</div>
                {testResult == "true" ? "Passed" : testResult == "false" ? "Failed" : "Pending"}
            </Grid>
        } else {
            return <div>
                <div>{props.test.testName + ": "}</div>
                <div>{testResult}</div>
            </div>
        }
    }

    return (<div>{createTest()}</div>);
};