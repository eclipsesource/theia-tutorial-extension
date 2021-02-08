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
import cloneRepoCommand from './Commands/CloneRepoCommand';
import executeTestsCommand from './Commands/ExecuteTests';
import checkFilesCommand from './Commands/CheckFilesCommand';
import addImportsCommand from './Commands/AddImportsCommand';
import openFileCommand from './Commands/OpenFileCommand';
import fileDifferenceCommand from './Commands/FileDifferenceCommand';
import checkProcessCommand from './Commands/CheckProcessCommand';
import executeTerminalCommands from './Commands/ExecuteTerminalCommands';




const initCommands = (context: vscode.ExtensionContext) => {

	const commands = [
		cloneRepoCommand,
		executeTestsCommand,
		executeTerminalCommands,
		checkFilesCommand,
		addImportsCommand,
		openFileCommand,
		fileDifferenceCommand,
		checkProcessCommand
	];
}

export default initCommands;