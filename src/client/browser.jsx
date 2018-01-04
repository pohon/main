import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import './styles/styles.scss';

const jsx = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render( jsx, document.getElementById('app') );
