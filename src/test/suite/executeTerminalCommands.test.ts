import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import {TerminalCommands} from '../../../schema/tutorial';
import {executeTerminalCommands} from '../../Functions/executeTerminalCommands';
import {
    capture, instance, mock, when,
} from "ts-mockito";
import {sleep, spyPanel} from './testUtils';

const fs = require('fs');
const path = require('path');


suite('Execute Terminal Commands Test', () => {

    let workingCommand: TerminalCommands = {
        "terminalCommands": [
            "cd .."
        ]
    };

    let brokenCommand: TerminalCommands = {
        "terminalCommands": [
            "notExisting"
        ]
    };


    test('Execute Broken Command', async () => {
        await executeTerminalCommands(brokenCommand, "id2");
        await sleep(1000);
        let resultSend: any = capture(spyPanel!.sendToView).last()[0];
        assert.strictEqual("id2", resultSend.id, "wrong id was send");
        assert.strictEqual(false, resultSend.result, "command should be succesfull");
    });


    test('Execute Succesfull Command', async () => {
        await executeTerminalCommands(workingCommand, "id1");
        await sleep(1000);
        let resultSend: any = capture(spyPanel!.sendToView).last()[0];
        assert.strictEqual(true, resultSend.result, "command should fail");
        assert.strictEqual("id1", resultSend.id, "wrong id was send");
    });
});
