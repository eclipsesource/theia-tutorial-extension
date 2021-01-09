import * as vscode from 'vscode';
import CLONEREPOCOMMAND from './Commands/CloneRepoCommand';
import EXECUTETESTSCOMMAND from './Commands/ExecuteTests';
// import INITEXERCISEZEROCOMMAND from './Commands/InitExerciseZero';
import CHECKFILESCOMMAND from './Commands/CheckFilesCommand';
import ADDIMPORTSCOMMAND from './Commands/AddImportsCommand';
import OPENFILECOMMAND from './Commands/OpenFileCommand';
import FILEDIFFERENCECOMMAND from './Commands/FileDifferenceCommand';
import CHECKPROCESSCOMMAND from './Commands/CheckProcessCommand';




function initCommands(context: vscode.ExtensionContext) {

	const commands = [
		CLONEREPOCOMMAND,
		EXECUTETESTSCOMMAND,
		// INITEXERCISEZEROCOMMAND,
		CHECKFILESCOMMAND,
		ADDIMPORTSCOMMAND,
		OPENFILECOMMAND,
		FILEDIFFERENCECOMMAND,
		CHECKPROCESSCOMMAND
	];
}

export default initCommands;