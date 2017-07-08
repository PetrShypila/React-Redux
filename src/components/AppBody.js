import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import CoursesRoutes from "./courses/CoursesRoutes";

const AppBody = () => (
  <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesRoutes} />
      </Switch>
  </div>
);


export default AppBody;
