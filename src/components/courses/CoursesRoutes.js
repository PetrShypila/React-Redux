import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CoursesPage from "./CoursesPage";

const CoursesRoutes = () => (
  <Switch>
    <Route exact path="/courses" component={CoursesPage}/>
  </Switch>
);

export default CoursesRoutes;
