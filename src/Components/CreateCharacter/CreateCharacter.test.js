import React from 'react';
import ReactDOM from 'react-dom';
import CreateCharacter from './CreateCharacter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateCharacter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
