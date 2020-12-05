import React from 'react';
import {Button} from '@material-ui/core';
import {VSCodeAPI} from '../VSCodeAPI';


interface TutorialProps {
    tutorial: any
}

interface TutorialState {
    info: string
};


export class Tutorial extends React.Component<TutorialProps, TutorialState> {

    constructor(props: TutorialProps) {
        super(props);
        this.state = {
            info: 'You can get ready now. Prepare the workspace by yourself or let us do the work for you.',
        }
        VSCodeAPI.onMessage((message) => {
            console.log(message);
            switch (message.data.command) {
                case 'setInfo':
                    this.setState({info: message.data.text});
                    break;
            }
        });
    }
    render() {
        return (
            <div className="tutorial">
                <header className="App-header">
                    <h1 className="App-title">{this.props.tutorial.title}</h1>
                </header>
                <p className="App-intro">
                    In this tutorial we are going to implement a Theia extension.
          </p>
                <p>{this.state.info}</p>
                <div className="Box-margin">
                    <Button onClick={() => VSCodeAPI.postMessage({command: 'checkExerciseFiles'})} variant="contained" color="primary">
                        Check workspace
            </Button>
                </div>
                <div className="Box-margin">
                    <Button onClick={() => VSCodeAPI.postMessage({command: 'initExerciseZero'})} variant="contained" color="primary">
                        Solve Exercise 0
            </Button>
                </div>
            </div>
        );
    }
}