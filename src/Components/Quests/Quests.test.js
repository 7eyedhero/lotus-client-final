import React from 'react';
import ReactDOM from 'react-dom';
import QuestButton from './QuestButton';
import QuestPage from './QuestPage';
import QuestResult_lose from './QuestResult_lose';
import QuestResult_win from './QuestResult_win';

it('renders QuestButton without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders QuestPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders QuestResult_win without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestResult_win />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders QuestResult_lose without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestResult_lose />, div);
  ReactDOM.unmountComponentAtNode(div);
});
