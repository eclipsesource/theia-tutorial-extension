import * as vscode from 'vscode';
const fs = require('fs');
const path = require('path');

export function loadConfig(): Thenable<any[]> {
    return vscode.workspace.findFiles("*.json").then(tutorialsURI => {

        var tutorialContentPromises = tutorialsURI.map(function (uri) {
            return vscode.workspace.fs.readFile(uri).then(res => {return res})
        })
        return Promise.all(tutorialContentPromises).then(function (tutorialTexts) {
            let result = tutorialTexts.map(text => JSON.parse(text.toString()));
            return result;
        })
    })
}


