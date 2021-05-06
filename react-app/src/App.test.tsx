import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

jest.mock('./VSCodeAPI');

it('renders app without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
