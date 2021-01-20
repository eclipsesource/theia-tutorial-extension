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
import CLONEREPOCOMMAND from './Commands/CloneRepoCommand';
import EXECUTETESTSCOMMAND from './Commands/ExecuteTests';
import CHECKFILESCOMMAND from './Commands/CheckFilesCommand';
import ADDIMPORTSCOMMAND from './Commands/AddImportsCommand';
import OPENFILECOMMAND from './Commands/OpenFileCommand';
import FILEDIFFERENCECOMMAND from './Commands/FileDifferenceCommand';
import CHECKPROCESSCOMMAND from './Commands/CheckProcessCommand';
import EXECUTETERMINALCOMMANDS from './Commands/ExecuteTerminalCommands';




const initCommands = (context: vscode.ExtensionContext) => {

	const commands = [
		CLONEREPOCOMMAND,
		EXECUTETESTSCOMMAND,
		EXECUTETERMINALCOMMANDS,
		CHECKFILESCOMMAND,
		ADDIMPORTSCOMMAND,
		OPENFILECOMMAND,
		FILEDIFFERENCECOMMAND,
		CHECKPROCESSCOMMAND
	];
}

export default initCommands;