import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './Components/App/App';
import { HeaderProvider } from './contexts/HeaderContext';
import { CharacterProvider } from './contexts/CharacterContext';

ReactDOM.render(
  <BrowserRouter>
    <HeaderProvider>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </HeaderProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
