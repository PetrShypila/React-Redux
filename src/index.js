import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import 'babel-polyfill';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import * as ReactDOM from "react-dom";

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('app'));
