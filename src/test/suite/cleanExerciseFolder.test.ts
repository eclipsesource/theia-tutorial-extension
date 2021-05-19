import * as assert from 'assert';
import {sleep, } from './testUtils';
import {cleanExcerciseFolder} from '../../Functions/cleanExcerciseFolder';
import * as vscode from 'vscode';

const fs = require('fs');
const path = require('path');


suite('Execute clean Exercise Folder Test', () => {

    test('Execute clean Exercise Folder Test', async () => {

        await cleanExcerciseFolder("exerciseFolder", "id1");
        await sleep(1000);
        let uri = await vscode.workspace.findFiles("**/*exerciseFile.js");
        if (uri.length === 0) {
            assert.fail("file was delited");
        }
        if (uri[0].path.endsWith("/runTests/exerciseFolder/exerciseFile.js")) {
            assert.fail("file not copied");
        }
    });
});
