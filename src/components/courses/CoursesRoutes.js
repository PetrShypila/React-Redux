import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CoursesPage from "./CoursesPage";
import ManageCoursePage from "./ManageCoursePage";

const CoursesRoutes = () => (
    <Switch>
      <Route exact path="/courses" component={CoursesPage}/>
      <Route path="/courses/new" component={ManageCoursePage} />
      <Route path="/courses/:id" component={ManageCoursePage} />
    </Switch>
);

export default CoursesRoutes;
