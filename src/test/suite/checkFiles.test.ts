import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import {CheckIfFilesExist} from '../../../schema/tutorial';
import {checkFiles} from '../../Functions/checkFiles';
import {
    capture
} from "ts-mockito";
import {sleep, spyPanel} from './testUtils';

suite('check Files Test', () => {

    let existentFile: CheckIfFilesExist = {
        checkIfFilesExist: ['checkIfFileExists1.js', 'checkIfFileExists2.js'],
    };

    let nonExistentFile: CheckIfFilesExist = {
        checkIfFilesExist: ['notExisting'],
    };

    test('Check existing files', async () => {
        checkFiles(existentFile, "id1");
        await sleep(1500);
        let resultSend: any = capture(spyPanel!.sendToView).last()[0];
        assert.strictEqual("id1", resultSend.id);
        assert.strictEqual(true, resultSend.result, "files do exist, but dont get recognised");
    });

    test('Check nonexisting files', async () => {
        checkFiles(nonExistentFile, "id2");
        await sleep(1000);
        let resultSend: any = capture(spyPanel!.sendToView).last()[0];
        assert.strictEqual("id2", resultSend.id);
        assert.strictEqual(false, resultSend.result, "files do not exist but get recognised");
    });
});
