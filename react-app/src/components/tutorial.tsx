import React from 'react';
import {Button} from '@material-ui/core';
import {VSCodeAPI} from '../VSCodeAPI';
import { Exercise } from './exercise';


interface TutorialProps {
    tutorial: any
}

interface TutorialState {
    info: string
};


export class Tutorial extends React.Component<TutorialProps, TutorialState> {

    constructor(props: TutorialProps) {
        super(props);
    }
    render() {
        return (
            <div className="tutorial">
                <header className="App-header">
                    <h1 className="App-title">{this.props.tutorial.title}</h1>
                </header>
                
                <Exercise exercise={this.props.tutorial.tutorial[0]}></Exercise>
            </div>
        );
    }
}