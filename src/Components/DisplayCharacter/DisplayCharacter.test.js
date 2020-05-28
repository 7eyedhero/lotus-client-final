import React from 'react';
import ReactDOM from 'react-dom';
import DisplayCharacter from './DisplayCharacter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DisplayCharacter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
