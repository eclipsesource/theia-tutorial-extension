import * as vscode from 'vscode';
import {Tutorial} from '../../schema/tutorial';
const fs = require('fs');
const path = require('path');

export function loadConfig(): Thenable<Array<Tutorial>> {
    return vscode.workspace.findFiles("*.tut.json").then(tutorialsURI => {

        var tutorialContentPromises = tutorialsURI.map(function (uri) {
            return vscode.workspace.fs.readFile(uri).then(res => {return res})
        })
        return Promise.all(tutorialContentPromises).then(function (tutorialContent) {
            let tutorials: Array<Tutorial> = tutorialContent.map(text => JSON.parse(text.toString()));
            tutorials = processTutorials(tutorials);
            return tutorials;
        })
    })
}
function processTutorials(tutorials: Array<Tutorial>): Array<Tutorial> {
    tutorials.forEach((tutorial) => {
        if (tutorial.exercises && tutorial.exercises.length > 1) {
            for (let i = 1; i < tutorial.exercises.length; i++) {
                if (tutorial.exercises[i].checkStartState == null) {
                    tutorial.exercises[i].checkStartState = tutorial.exercises[i - 1].solve;
                }
            }
        }
    });
    return tutorials;
}

