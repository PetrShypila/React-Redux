import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import * as ReactDOM from "react-dom";
import configureStore from './store/configureStore';


const store = configureStore();

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
), document.getElementById('app'));
