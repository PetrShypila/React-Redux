import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import App from './components/App';
import * as ReactDOM from "react-dom";
import configureStore from './store/configureStore';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render((
  <BrowserRouter history={createBrowserHistory} >
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
), document.getElementById('app'));
