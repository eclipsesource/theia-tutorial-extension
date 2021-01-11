/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Command =
  | CheckIfFilesExist
  | TerminalCommands
  | OpenFile
  | AutomaticImport
  | FileDiff
  | CleanExerciseFolder;
export type Instruction = Html | Image | Hint | CommandButton;

export interface Tutorial {
  title: string;
  description: string;
  tutorialFolder: string;
  exercises?: Exercise[];
}
export interface Exercise {
  title: string;
  description: string;
  checkStartState?: {
    testName: string;
    command: Command;
  }[];
  buildExercise?: Command[];
  cleanState?: Command[];
  test?: {
    testName: string;
    command: Command;
  }[];
  solve?: Command[];
  content?: Instruction[];
}
export interface CheckIfFilesExist {
  checkIfFilesExist: string[];
}
export interface TerminalCommands {
  terminalCommands: string[];
}
export interface OpenFile {
  openFile: string;
  [k: string]: unknown;
}
export interface AutomaticImport {
  automaticImport: {
    imports: string[];
    path: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface FileDiff {
  fileDiff: {
    filename?: string;
    solution?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface CleanExerciseFolder {
  cleanExerciseFolder: {
    [k: string]: unknown;
  };
}
export interface Html {
  html: string;
}
export interface Image {
  image: {
    src: string;
    description?: string;
    width?: string;
  };
}
export interface Hint {
  hint: {
    text?: string;
    content?: Instruction[];
  };
}
export interface CommandButton {
  button: {
    text?: string;
    commands?: Command[];
  };
}
