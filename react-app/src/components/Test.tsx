/********************************************************************************
 * Copyright (c) 2020-2021 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * https://www.eclipse.org/legal/epl-2.0, or the MIT License which is
 * available at https://opensource.org/licenses/MIT.
 *
 * SPDX-License-Identifier: EPL-2.0 OR MIT
 ********************************************************************************/
import React, {useEffect, useState} from 'react';
import {Button, Grid, TextField} from '@material-ui/core';
import {VSCodeAPI} from '../VSCodeAPI';
import {Command, CommandButton} from '../../../schema/tutorial';
import {v4 as uuidv4} from 'uuid';
import {vsTheme} from '../VsTheme';

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
    }, []);


    const createTest = () => {
        if (testResult == "pending" || testResult == "true" || testResult == "false") {
            return <div style={{margin: "20px 20px 20px 20px"}}>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <div style={{width: "40%", color: vsTheme.text.color}}>{props.test.testName + ": "}</div>
                    {testResult == "true" ?
                        <div style={{color: "green"}}>Passed</div>
                        : testResult == "false" ?
                            <div style={{color: "red"}}>Failed</div> :
                            <div style={{color: vsTheme.text.color}}>Pending</div>}
                </Grid >
            </div>
        } else {
            return <div style={{margin: "20px 20px  20px 20px"}}>
                <div style={{width: "40%", color: vsTheme.text.color}}>{props.test.testName + ": "}</div>
                <p style={{width: "100%", overflow: "auto", color: vsTheme.text.color}}>
                    <pre>
                        {testResult}
                    </pre>
                </p>
            </div >
        }
    }

    return (<div>{createTest()}</div>);
};