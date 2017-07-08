import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

const AppBody = () => (
  <div className="container-fluid">
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </main>
  </div>
);


export default AppBody;
