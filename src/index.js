import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyles } from './styles/GlobalStyles';
ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
