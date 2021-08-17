import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
import { loadConfig } from '../../Functions/loadConfig';
// import * as myExtension from '../../extension';

suite('Load Config Test', () => {

  test('load Config test', async () => {
    const result = await loadConfig();

    assert.strictEqual(1, result.length, "did not find config");
    assert.strictEqual("GLSP Tutorial", result[0].title, "didnt load config correct");
  });
});
