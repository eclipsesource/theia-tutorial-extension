import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import { TerminalCommands } from '../../../schema/tutorial';
import { executeTerminalCommands } from '../../Functions/executeTerminalCommands';
import {
    capture
} from "ts-mockito";
import { sleep, spyPanel } from './testUtils';

suite('Execute Terminal Commands Test', () => {

    const workingCommand: TerminalCommands = {
        "terminalCommands": [
            "cd .."
        ]
    };

    const brokenCommand: TerminalCommands = {
        "terminalCommands": [
            "notExisting"
        ]
    };


    test('Execute Broken Command', async () => {
        if (!spyPanel) {
            assert.fail();
        }
        await executeTerminalCommands(brokenCommand, "id2");
        await sleep(1000);
        const resultSend = capture(spyPanel.sendToView).last()[0];
        assert.strictEqual("id2", resultSend.id, "wrong id was send");
        assert.strictEqual(false, resultSend.result, "command should be succesfull");
    });


    test('Execute Succesfull Command', async () => {
        if (!spyPanel) {
            assert.fail();
        }
        await executeTerminalCommands(workingCommand, "id1");
        await sleep(1000);
        const resultSend = capture(spyPanel.sendToView).last()[0];
        assert.strictEqual(true, resultSend.result, "command should fail");
        assert.strictEqual("id1", resultSend.id, "wrong id was send");
    });
});
