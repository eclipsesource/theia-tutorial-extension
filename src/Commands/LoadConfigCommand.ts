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
import * as vscode from 'vscode';
import {Tutorial} from '../../schema/tutorial';
const fs = require('fs');
const path = require('path');

export const loadConfig = (): Thenable<Array<Tutorial>> => {
    return vscode.workspace.findFiles("**/*.tut.json").then(tutorialsURI => {
        var tutorialContentPromises = tutorialsURI.map((uri) => {
            return vscode.workspace.fs.readFile(uri).then(res => {return res;});
        });
        return Promise.all(tutorialContentPromises).then((tutorialContent) => {
            let tutorials: Array<Tutorial> = tutorialContent.map(text => JSON.parse(text.toString()));
            processTutorials(tutorials);
            let t = tutorials;
            return tutorials;
        });
    });
};
const processTutorials = (tutorials: Array<Tutorial>): void => {
    tutorials.forEach((tutorial) => {
        if (tutorial.exercises) {
            for (let i = 0; i < tutorial.exercises.length; i++) {
                if (tutorial.exercises[i].buildExercise !== null) {
                    tutorial.exercises[i].buildExercise = tutorial.exercises[i].cleanState?.concat(tutorial.exercises[i].buildExercise!);
                }
                if (tutorial.exercises[i].solve !== null) {
                    tutorial.exercises[i].solve = tutorial.exercises[i].cleanState?.concat(tutorial.exercises[i].solve!);
                }
                if (tutorial.exercises[i].buildExercise === null && i !== 0) {
                    tutorial.exercises[i].buildExercise = tutorial.exercises[i - 1].solve;
                }
                if (tutorial.exercises[i].checkStartState === null && i !== 0) {
                    tutorial.exercises[i].checkStartState = tutorial.exercises[i - 1].test;
                }
            }
        }
    });
};