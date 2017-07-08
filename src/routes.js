import React from 'react';
import {Route, Index} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <div>
      <Route component={HomePage} />
      <Route path="about" component={AboutPage} />
    </div>
  </Route>
);
