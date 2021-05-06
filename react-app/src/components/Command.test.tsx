import * as React from 'react';
import { VSCodeAPI } from '../VSCodeAPI';
import { Command } from './Command';
import { render, fireEvent, screen } from "@testing-library/react";

jest.mock('../VSCodeAPI');

test('triggers open file command correctly', () => {
  const buttonProp = {
    button: {
      text: "Open File",
      commands: [
        {
          "openFile": "testfile"
        }
      ]
    }
  };
  render(<Command button={buttonProp} exerciseFolder="./" />);
  fireEvent(
    screen.getByTestId('button'), new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }));
  expect(VSCodeAPI.postMessage).toHaveBeenCalled();
  expect(VSCodeAPI.postMessage).toHaveBeenLastCalledWith({ commands: [{ openFile: "testfile" }], exerciseFolder: "./", ids: [] });
});


it('triggers terminal command correctly', () => {
  const buttonProp = {
    button: {
      text: "Build Minimal Example",
      commands: [
        {
          terminalCommands: [
            "ls -l",
          ]
        }
      ]
    }
  };
  render(<Command button={buttonProp} exerciseFolder="./" />);
  fireEvent(
    screen.getByTestId('button'), new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }));
  expect(VSCodeAPI.postMessage).toHaveBeenCalledTimes(2);
  expect(VSCodeAPI.postMessage).toHaveBeenLastCalledWith({ commands: [{ terminalCommands: ["ls -l"] }], exerciseFolder: "./", ids: [] });
});



it('triggers terminal command correctly', () => {
  const buttonProp = {
    button: {
      text: "Check",
      commands: [
        {
          checkIfFilesExist: [
            "test.json",
          ]
        }
      ]
    }
  };
  render(<Command button={buttonProp} exerciseFolder="./" />);
  fireEvent(
    screen.getByTestId('button'), new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }));
  expect(VSCodeAPI.postMessage).toHaveBeenCalledTimes(3);
  expect(VSCodeAPI.postMessage).toHaveBeenLastCalledWith({ commands: [{ checkIfFilesExist: ["test.json"] }], exerciseFolder: "./", ids: [] });
});
