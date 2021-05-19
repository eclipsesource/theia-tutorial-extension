import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import {addImports} from '../../Functions/addImports';

const fs = require('fs');
const path = require('path');
import {AutomaticImport} from '../../../schema/tutorial';

suite('addImports Test Suite', () => {

    const imports = "Test import1, Test Import2";

    let importCommand: AutomaticImport = {
        automaticImport: {
            imports: [imports],
            path: "./addImportsTest.js"
        }
    };

    addImports(importCommand, "id1");

    const workspaceFolder: string = vscode.workspace.rootPath || '~';

    const filepath = path.join(workspaceFolder, "addImportsTest.js");

    let content = fs.readFileSync(filepath);


    test('add Imports test', async () => {

        const expected = imports + "\n";
        assert.strictEqual(expected, content.toString(), "imports not correct");
    });
});
