import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TutorialOverview from './TutorialOverview';
import 'mutationobserver-shim';
import '@testing-library/jest-dom';

jest.mock('../VSCodeAPI');
window.scrollTo = jest.fn();
(global as any).document.createRange = () => ({
  setStart: () => { },
  setEnd: () => { },
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});

it('renders and navigates through exercises correctly', () => {

  const tutorial = {
    title: 'Test Tutorial',
    description: 'testing tutorial',
    tutorialFolder: './',
    exercises: [
      { title: 'Ex1', description: 'exercise1', content: [{ html: '<h4>hello world</h4>' }] },
      { title: 'Ex2', description: 'exercise2' },
      { title: 'Ex3', description: 'exercise3' },
      { title: 'Ex4', description: 'exercise4' }
    ]
  };

  render(<TutorialOverview tutorial={tutorial} />);

  const exercises = screen.getAllByTestId('ov-step');
  expect(exercises).toHaveLength(4);

  const h4 = screen.queryByText('hello world');
  expect(h4).not.toBeInTheDocument();

  fireEvent.click(screen.getAllByRole('button')[0]);
  screen.getByRole('heading', { name: 'hello world' });

  fireEvent.click(screen.getByRole('button', { name: 'Ex2' }));
  screen.getByRole('heading', { name: 'Ex2' });

  fireEvent.click(screen.getByRole('button', { name: 'Next' }));
  screen.getByRole('heading', { name: 'Ex3' });

  fireEvent.click(screen.getByRole('button', { name: 'Back' }));
  screen.getByRole('heading', { name: 'Ex2' });

  fireEvent.click(screen.getByRole('button', { name: 'Ex4' }));
  screen.getByRole('heading', { name: 'Ex4' });

  fireEvent.click(screen.getByTestId('menu-btn'));
  fireEvent.click(screen.getByRole('menuitem', { name: 'Back to overview' }));
  const exercises2 = screen.getAllByTestId('ov-step');
  expect(exercises2).toHaveLength(4);

});