import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ExercisePage } from './ExercisePage';

jest.mock('../VSCodeAPI');

it('renders different types without crashing', () => {
  const div = document.createElement('div');
  const exercise = {
    title: "Intro",
    description: "Getting started",
    content: [
      { html: "<h3>Test Html</h3>" },
      { image: { src: "https://raw.githubusercontent.com/eclipsesource/glsp-tutorial/main/.tutorial/images/code-snip1.png" } },
      {
        hint: {
          text: "Test Hint",
          content: [{ html: "<h3>Test Hint</h3>" },]
        }
      },
      {
        button: {
          text: "Open File",
          "commands": [
            {
              "openFile": "testfile"
            }
          ]
        }
      }
    ]
  };
  ReactDOM.render(<ExercisePage exercise={exercise} exerciseFolder="./" />, div);
  expect(div.textContent).toBe("IntroTest HtmlTest HintOpen File");
  expect((div.querySelector("h2") as HTMLHeadingElement).textContent).toEqual("Intro");
  expect((div.querySelector("h3") as HTMLHeadingElement).textContent).toEqual("Test Html");
  expect((div.querySelector("img") as HTMLImageElement).getAttribute("src")).toEqual("https://raw.githubusercontent.com/eclipsesource/glsp-tutorial/main/.tutorial/images/code-snip1.png");

  ReactDOM.unmountComponentAtNode(div);
});